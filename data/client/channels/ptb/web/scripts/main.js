(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["15643"], {
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
        630086: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("913144"),
                l = {
                    setSection(e) {
                        a.default.dispatch({
                            type: "FRIENDS_SET_SECTION",
                            section: e
                        })
                    },
                    setInitialSection(e) {
                        a.default.dispatch({
                            type: "FRIENDS_SET_INITIAL_SECTION",
                            section: e
                        })
                    }
                }
        },
        600965: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                open: function() {
                    return l
                },
                close: function() {
                    return s
                },
                hide: function() {
                    return r
                },
                show: function() {
                    return i
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

            function l(e, t) {
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

            function r(e) {
                a.default.dispatch({
                    type: "PICTURE_IN_PICTURE_HIDE",
                    id: e
                })
            }

            function i(e) {
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
                    return T
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("817736"),
                r = n("759843"),
                i = n("446674"),
                u = n("77078"),
                o = n("272030"),
                d = n("244201"),
                c = n("428958"),
                f = n("161778"),
                g = n("144747"),
                E = n("983782"),
                S = n("659500"),
                m = n("452453"),
                p = n("49111");
            let h = e => {
                let {
                    children: t,
                    close: n,
                    onUnmount: i,
                    rect: o,
                    position: f,
                    align: g,
                    impressionName: S,
                    impressionProperties: m
                } = e, h = l.useRef(null);
                l.useEffect(() => {
                    var e, t;
                    let a = (0, s.findDOMNode)(h.current);
                    if (null == a) return;
                    let l = e => {
                        let t = e.target,
                            a = (0, s.findDOMNode)(h.current);
                        !(null != a && (0, u.referencePortalAwareContains)(a, t)) && (window.getSelection().removeAllRanges(), n())
                    };
                    return null === (e = a.ownerDocument) || void 0 === e || e.addEventListener("click", l, !0), null === (t = a.ownerDocument) || void 0 === t || t.addEventListener("contextmenu", l, !0), () => {
                        var e, t;
                        null === (e = a.ownerDocument) || void 0 === e || e.removeEventListener("click", l, !0), null === (t = a.ownerDocument) || void 0 === t || t.removeEventListener("contextmenu", l, !0)
                    }
                }, [n]);
                let _ = l.useRef(i);
                l.useEffect(() => void(_.current = i)), l.useEffect(() => () => {
                    var e;
                    return null === (e = _.current) || void 0 === e ? void 0 : e.call(_)
                }, []), l.useLayoutEffect(() => {
                    var e;
                    null === (e = h.current) || void 0 === e || e.updatePosition()
                }), (0, c.default)({
                    type: r.ImpressionTypes.MENU,
                    name: S,
                    properties: m
                });
                let T = (0, d.useWindowDispatch)(),
                    A = l.useCallback(() => {
                        T.dispatch(p.ComponentActions.POPOUT_SHOW)
                    }, [T]),
                    I = l.useCallback(() => {
                        T.dispatch(p.ComponentActions.POPOUT_HIDE)
                    }, [T]);
                return (0, a.jsx)(E.AppReferencePositionLayer, {
                    onMount: A,
                    onUnmount: I,
                    reference: () => o,
                    position: null != f ? f : "right",
                    align: null != g ? g : "top",
                    autoInvert: !0,
                    ref: h,
                    nudgeAlignIntoViewport: !0,
                    children: t
                })
            };
            class _ extends l.PureComponent {
                componentDidMount() {
                    let {
                        renderLazy: e,
                        renderWindow: t
                    } = this.props;
                    if (t.addEventListener("resize", this.closeResize, !0), S.ComponentDispatch.subscribe(p.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e) {
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
                    e.removeEventListener("resize", this.closeResize, !0), S.ComponentDispatch.unsubscribe(p.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu)
                }
                render() {
                    var e;
                    let {
                        appContext: t,
                        target: n,
                        isOpen: l,
                        theme: s,
                        config: r,
                        rect: i
                    } = this.props, u = null !== (e = this.state.render) && void 0 !== e ? e : this.props.render;
                    return l && null != i && null != r && null != n && null != u && r.context === t ? (0, a.jsx)(h, {
                        rect: i,
                        close: this.close,
                        onUnmount: r.onClose,
                        align: r.align,
                        position: r.position,
                        impressionName: r.impressionName,
                        impressionProperties: r.impressionProperties,
                        children: (e, a) => {
                            let {
                                position: l
                            } = e;
                            return u({
                                className: m.ContextMenuClassName,
                                position: l,
                                theme: s,
                                onHeightUpdate: a,
                                config: r,
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

            function T() {
                let {
                    contextMenu: e,
                    version: t,
                    isOpen: n
                } = (0, i.useStateFromStoresObject)([g.default], () => ({
                    contextMenu: g.default.getContextMenu(),
                    version: g.default.version,
                    isOpen: g.default.isOpen()
                })), s = (0, i.useStateFromStores)([f.default], () => f.default.theme), {
                    appContext: r,
                    renderWindow: u
                } = l.useContext(d.default);
                return (0, a.jsx)(_, {
                    appContext: r,
                    renderWindow: u,
                    ...e,
                    isOpen: n,
                    theme: s,
                    closeContextMenu: o.closeContextMenu
                }, t)
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
                l = n("77078"),
                s = n("619443"),
                r = n("153498"),
                i = n("116460"),
                u = n("778588"),
                o = n("708169"),
                d = () => {
                    let e = (0, a.useStateFromStores)([u.default], () => u.default.hasLayers()),
                        t = (0, o.useFullScreenLayerStore)(e => e.fullScreenLayers.length > 0),
                        n = (0, r.useIsModalOpen)(),
                        d = (0, l.useModalsStore)(l.hasAnyModalOpen),
                        c = (0, a.useStateFromStores)([s.default], () => s.default.isConnected()),
                        f = (0, a.useStateFromStores)([i.default], () => i.default.isOpen());
                    return e || t || d || n || !c || f
                }
        },
        869586: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BlindID: function() {
                    return r
                }
            });
            var a = n("605250"),
                l = n("446825").Buffer;
            let s = new a.default("BlindID");
            class r {
                async blind(e) {
                    let t = await this.key,
                        n = new BigUint64Array([BigInt(e)]),
                        a = await crypto.subtle.sign("HMAC", t, n.buffer);
                    return r.truncate(a).toString()
                }
                static truncate(e) {
                    let t = new Uint8Array(e);
                    return t.length < 8 ? (s.error("Unexpected byte length ".concat(t.length)), BigInt(0)) : BigInt(t[0]) | BigInt(t[1]) << BigInt(8) | BigInt(t[2]) << BigInt(16) | BigInt(t[3]) << BigInt(24) | BigInt(t[4]) << BigInt(32) | BigInt(t[5]) << BigInt(40) | BigInt(t[6]) << BigInt(48) | BigInt(t[7]) << BigInt(56)
                }
                constructor(e) {
                    let t = l.from(e, "hex");
                    this.key = crypto.subtle.importKey("raw", t, {
                        name: "HMAC",
                        hash: "SHA-512"
                    }, !1, ["sign"])
                }
            }
        },
        890747: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uploadRtcLogFiles: function() {
                    return c
                }
            });
            var a = n("811022"),
                l = n("872717"),
                s = n("448993"),
                r = n("42887"),
                i = n("254490"),
                u = n("49671"),
                o = n("49111");
            let d = new a.default("uploadRtcLogFiles");
            async function c(e, t) {
                let n;
                if (null == u.default.fileManager.readLogFiles) throw new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.GENERAL);
                let a = [];
                try {
                    a = (a = await u.default.fileManager.readLogFiles(e)).map(e => (0, i.transformNativeFile)(e, "application/octet-stream"))
                } catch (e) {
                    throw d.error("uploadDebugFiles: read error '".concat(e, "'")), new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.READ)
                }
                if (0 === a.length) throw new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.NO_FILE);
                try {
                    let e = {
                        extraInfo: t,
                        mediaEngineState: r.default.getState()
                    };
                    n = await l.default.post({
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
                    if (429 === e.status) throw new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.PROGRESS);
                    throw d.error("Debug log upload error: status: ".concat(e.status, ", message: ").concat(e.message)), new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.UPLOAD)
                }
                let c = a.length + 1;
                if ("success_count" in n.body && n.body.success_count !== c) throw d.error("Debug log upload: stored files ".concat(n.body.success_count, " !== ").concat(c)), new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.GENERAL);
                if ("store_success" in n.body && !n.body.store_success || "id_match" in n.body && !n.body.id_match || "all_success" in n.body && !n.body.all_success) throw d.error("Debug log upload: store_success: ".concat(n.body.store_success, " / ") + "id_match: ".concat(n.body.id_match, " / ") + "all_success: ".concat(n.body.all_success)), new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.GENERAL)
            }
        },
        951212: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canEnableForcedColors: function() {
                    return _
                },
                default: function() {
                    return T
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("913144"),
                r = n("697218"),
                i = n("599110"),
                u = n("773336"),
                o = n("180748"),
                d = n("206230"),
                c = n("49111");
            let f = window.matchMedia("(prefers-reduced-motion: reduce)"),
                g = window.matchMedia("(prefers-contrast: more)"),
                E = window.matchMedia("(prefers-contrast: less)"),
                S = window.matchMedia("(prefers-color-scheme: dark)"),
                m = window.matchMedia("(prefers-color-scheme: light)"),
                p = window.matchMedia("(forced-colors: active)"),
                h = 5;

            function _() {
                return "windows" === (0, u.getOS)()
            }
            var T = {
                initBasic() {
                    f.addListener(this.handleSystemPrefersReducedMotionChanged), this.handleSystemPrefersReducedMotionChanged(f), S.addListener(this.handleSystemColorPreferencesChanged), m.addListener(this.handleSystemColorPreferencesChanged), p.addListener(this.handleSystemColorPreferencesChanged), this.handleSystemColorPreferencesChanged(), g.addListener(this.handleSystemPrefersContrastChanged), E.addListener(this.handleSystemPrefersContrastChanged), this.handleSystemPrefersContrastChanged()
                },
                init() {
                    this.initBasic(), s.default.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
                        i.default.track(c.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
                            colorblind_enabled: d.default.colorblindMode
                        })
                    }), s.default.subscribe("ACCESSIBILITY_SET_SATURATION", e => {
                        i.default.track(c.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
                            saturation_level: e.saturation
                        })
                    })
                },
                maybeShowKeyboardNavigationExplainerModal() {
                    h = Math.max(h - 1, 0), ! function() {
                        let e = r.default.getCurrentUser();
                        return null == e || Date.now() - +e.createdAt < 864e5
                    }() && !d.default.keyboardNavigationExplainerModalSeen && 0 === h && (0, l.openModalLazy)(async () => {
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
                    S.matches ? e = c.ThemeTypes.DARK : m.matches && (e = c.ThemeTypes.LIGHT);
                    let t = !u.isPlatformEmbedded || _(),
                        n = t && p.matches ? "active" : "none";
                    s.default.wait(() => {
                        o.systemColorPreferencesChanged(e, n)
                    })
                },
                handleSystemPrefersContrastChanged() {
                    let e = "no-preference";
                    g.matches ? e = "more" : E.matches && (e = "less"), s.default.wait(() => {
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
                l = n("884691"),
                s = n("118810"),
                r = n("446674"),
                i = n("77078"),
                u = n("599110"),
                o = n("791776"),
                d = n("206230"),
                c = n("862013"),
                f = n("49111");

            function g(e) {
                var t;
                let n = e.ctrlKey || e.altKey || e.metaKey;
                if (n || e.keyCode !== f.KeyboardKeys.TAB || null == e.target) return;
                let {
                    target: a
                } = e, l = null === (t = (0, o.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
                (0, s.isElement)(a) && u.default.track(f.AnalyticEvents.KEYBOARD_SHORTCUT_USED, {
                    shortcut_name: "tab_navigation",
                    source_class_list: null != l ? Array.from(l.classList) : [],
                    location_object: a.tagName
                })
            }

            function E(e) {
                let {
                    children: t
                } = e, n = (0, r.useStateFromStoresObject)([d.default], () => ({
                    enabled: d.default.useReducedMotion,
                    rawValue: d.default.rawPrefersReducedMotion
                })), s = (0, r.useStateFromStoresObject)([d.default], () => ({
                    enabled: d.default.useForcedColors,
                    rawValue: d.default.systemForcedColors
                })), u = (0, r.useStateFromStores)([d.default], () => d.default.alwaysShowLinkDecorations), o = l.useMemo(() => ({
                    reducedMotion: n,
                    prefersCrossfades: !1,
                    forcedColors: s,
                    alwaysShowLinkDecorations: u
                }), [n, s, u]);
                return l.useEffect(() => ((0, c.insertAccessibilityLabelElements)(), window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g)), []), (0, a.jsx)(i.AccessibilityPreferencesContext.Provider, {
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
            var l = n("77078"),
                s = n("452804"),
                r = n("135230"),
                i = n("168973"),
                u = n("782340");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
                    n = () => {
                        s.default.updatedUnsyncedSettings({
                            disableEmbeddedActivityPopOutAlert: !0
                        }), e()
                    },
                    o = !i.default.disableEmbeddedActivityPopOutAlert;
                o ? (0, l.openModal)(l => (0, a.jsx)(r.default, {
                    confirmText: u.default.Messages.EMBEDDED_ACTIVITIES_YEP,
                    secondaryConfirmText: u.default.Messages.DONT_ASK_AGAIN,
                    title: u.default.Messages.EMBEDDED_ACTIVITIES_CAREFUL,
                    cancelText: u.default.Messages.EMBEDDED_ACTIVITIES_NVM,
                    onConfirm: e,
                    onConfirmSecondary: n,
                    onCancel: t,
                    body: u.default.Messages.EMBEDDED_ACTIVITIES_POP_OUT_WARNING,
                    ...l
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
                    return S
                },
                stopBroadcast: function() {
                    return m
                },
                fetchBroadcasterBuckets: function() {
                    return h
                },
                maybeFetchBroadcastChannels: function() {
                    return _
                }
            });
            var a = n("872717"),
                l = n("913144"),
                s = n("374014"),
                r = n("766274"),
                i = n("271938"),
                u = n("42203"),
                o = n("546463"),
                d = n("568307"),
                c = n("9759"),
                f = n("194051"),
                g = n("49111");

            function E(e) {
                var t;
                let n = null !== (t = null == e ? void 0 : e.gameName) && void 0 !== t ? t : null == e ? void 0 : e.name;
                return null != n ? n.trim() : null
            }

            function S(e, t) {
                if (null == t) return;
                let {
                    canBroadcast: n
                } = c.default.getCurrentConfig({
                    location: "start_broadcast_for_stream"
                }, {
                    autoTrackExposure: !1
                });
                if (!n) return;
                let a = (0, s.decodeStreamKey)(e),
                    {
                        ownerId: r,
                        channelId: f
                    } = a;
                if (null == r || null == f) return;
                let g = i.default.getId();
                if (r !== g) return;
                let S = i.default.getSessionId();
                if (null == S) return;
                let m = u.default.getChannel(f),
                    p = null != m && m.isBroadcastChannel();
                if (null == m || r !== m.ownerId || !p) return;
                let h = function(e) {
                    var t;
                    let n = d.default.getGameForPID(e),
                        a = E(n),
                        l = o.default.getGameByName(a);
                    return null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : "0"
                }(t);
                null != h && ! function(e) {
                    let t = i.default.getId(),
                        n = i.default.getSessionId();
                    null != t && null != n && l.default.dispatch({
                        type: "BROADCAST_START",
                        broadcast: e
                    })
                }({
                    sessionId: S,
                    userId: g,
                    applicationId: h,
                    channelId: m.id,
                    streamKey: e
                })
            }

            function m() {
                l.default.dispatch({
                    type: "BROADCAST_STOP"
                })
            }

            function p(e) {
                let t = {};
                e.forEach(e => {
                    t[e] = -1
                }), l.default.dispatch({
                    type: "BROADCASTER_BUCKETS_RECEIVED",
                    data: t
                })
            }
            async function h() {
                let e = f.default.getUserIdsToValidate();
                try {
                    let t = await a.default.get({
                        url: g.Endpoints.USER_BROADCASTS,
                        query: {
                            user_ids: e
                        }
                    });
                    if (t.ok && null != t.body) {
                        let n = {};
                        e.forEach(e => {
                            var a;
                            n[e] = null !== (a = t.body[e]) && void 0 !== a ? a : -1
                        }), l.default.dispatch({
                            type: "BROADCASTER_BUCKETS_RECEIVED",
                            data: n
                        })
                    } else p(e)
                } catch (t) {
                    p(e)
                }
            }
            async function _() {
                let e = f.default.getBroadcastsToValidateChannels(),
                    t = e.filter(e => null == e.viewers).map(e => e.channelId);
                if (0 !== t.length) try {
                    let e = await a.default.get({
                        url: g.Endpoints.BROADCAST_CHANNELS,
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
                                l = null !== (t = e.recipients) && void 0 !== t ? t : [];
                            n[a] = l.map(e => new r.default(e)).filter(e => e.id !== a)
                        }), l.default.dispatch({
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
            });
            var a, l, s = n("917351"),
                r = n("446674"),
                i = n("407846"),
                u = n("913144"),
                o = n("766274"),
                d = n("271938"),
                c = n("9759"),
                f = n("837374");
            (a = l || (l = {}))[a.INVALID = 0] = "INVALID", a[a.VALID_USER_ONLY = 1] = "VALID_USER_ONLY", a[a.VALID = 2] = "VALID";
            let g = new Set,
                E = new Set,
                S = new Set,
                m = [],
                p = {
                    BROADCASTS_BY_USER_ID: e => "user:".concat(e),
                    BROADCASTS_BY_CHANNEL_ID: e => "channel:".concat(e),
                    BROADCASTS_BY_VALIDITY: e => "validity:".concat(e)
                },
                h = new i.default(function(e) {
                    let t = g.has(e.userId) ? l.VALID_USER_ONLY : l.INVALID;
                    return null != e.viewers && (t = l.VALID), [p.BROADCASTS_BY_USER_ID(e.userId), p.BROADCASTS_BY_CHANNEL_ID(e.channelId), p.BROADCASTS_BY_VALIDITY(t)]
                }, e => e.channelId);

            function _(e, t, n) {
                if (d.default.getId() === e) return !1;
                if (null == t) {
                    let t = h.get(e);
                    return !!(null != t && (0, s.isEqual)(t.source, n)) && (h.delete(e), void 0)
                }!g.has(e) && !E.has(e) && (S.add(e), m = [...S]);
                let a = (0, f.broadcastFromServer)(t, e, n);
                h.set(e, a)
            }

            function T(e) {
                return null != e ? {
                    type: f.BroadcastSourceType.GUILD,
                    guildId: e
                } : {
                    type: f.BroadcastSourceType.GLOBAL
                }
            }
            class A extends r.default.Store {
                getBroadcasts() {
                    return h.values(p.BROADCASTS_BY_VALIDITY(l.VALID))
                }
                getBroadcastsToValidateChannels() {
                    return h.values(p.BROADCASTS_BY_VALIDITY(l.VALID_USER_ONLY))
                }
                getBroadcastByChannel(e) {
                    return h.values(p.BROADCASTS_BY_CHANNEL_ID(e))[0]
                }
                getBroadcastByUser(e) {
                    return h.get(e)
                }
                getUserIdsToValidate() {
                    return m
                }
            }
            A.displayName = "BroadcastingStore";
            var I = new A(u.default, {
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
                    Object.keys(t).forEach(e => {
                        c.CAN_VIEW_BROADCASTS_BUCKETS.includes(t[e]) ? g.add(e) : E.add(e), S.clear(), m = [...S];
                        let n = h.get(e);
                        null != n && (h.delete(e), h.set(e, n))
                    })
                },
                BROADCAST_VIEWERS_UPDATE: function(e) {
                    let {
                        viewers: t
                    } = e;
                    Object.entries(t).forEach(e => {
                        let [t, n] = e, a = h.get(t);
                        null != a && h.set(t, {
                            ...a,
                            viewers: n
                        })
                    })
                },
                CHANNEL_RECIPIENT_ADD: function(e) {
                    let {
                        channelId: t,
                        user: n
                    } = e, a = h.values(p.BROADCASTS_BY_CHANNEL_ID(t))[0];
                    if (null == a || null == a.viewers || a.viewers.some(e => e.id === n.id)) return !1;
                    h.set(a.userId, {
                        ...a,
                        viewers: [...a.viewers, new o.default(n)]
                    })
                },
                CHANNEL_RECIPIENT_REMOVE: function(e) {
                    let {
                        channelId: t,
                        user: n
                    } = e, a = h.values(p.BROADCASTS_BY_CHANNEL_ID(t))[0];
                    if (null == a || null == a.viewers) return !1;
                    h.set(a.userId, {
                        ...a,
                        viewers: a.viewers.filter(e => e.id !== n.id)
                    })
                },
                CHANNEL_CREATE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e, a = h.values(p.BROADCASTS_BY_CHANNEL_ID(n.id))[0];
                    if (null == a) return !1;
                    let l = null !== (t = n.rawRecipients) && void 0 !== t ? t : [];
                    h.set(a.userId, {
                        ...a,
                        viewers: l.filter(e => e.id !== a.userId).map(e => new o.default(e))
                    })
                },
                LOGOUT: function() {
                    g.clear(), E.clear(), S.clear(), m = [], h.clear()
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
                l = n("271938"),
                s = n("42203"),
                r = n("18494"),
                i = n("101125");

            function u() {
                let e = (0, a.useStateFromStores)([l.default], () => l.default.getId()),
                    t = (0, a.useStateFromStores)([r.default], () => r.default.getVoiceChannelId()),
                    n = (0, a.useStateFromStores)([s.default], () => s.default.getChannel(t), [t]),
                    u = (0, a.useStateFromStores)([i.default], () => null != i.default.getBroadcast()),
                    o = (null == n ? void 0 : n.isOwner(e)) && (null == n ? void 0 : n.isBroadcastChannel()),
                    d = o || null == t;
                return !u && d
            }

            function o() {
                if (null != i.default.getBroadcast()) return !1;
                let e = r.default.getVoiceChannelId();
                if (null == e) return !0;
                let t = l.default.getId(),
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
                    return g
                }
            });
            var a = n("446674"),
                l = n("845579");
            n("373469");
            var s = n("271938"),
                r = n("42203");
            n("18494");
            var i = n("101125"),
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
                    n = (0, a.useStateFromStores)([i.default], () => i.default.getBroadcast());
                return t && (null == n ? void 0 : n.userId) === e ? n : null
            }

            function d() {
                let e = o();
                return null != e
            }

            function c(e) {
                let t = o(),
                    n = (0, a.useStateFromStores)([r.default], () => r.default.getChannel(e));
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
                    a = i.default.getBroadcast();
                if (!n || null == a || a.userId !== t) return !1;
                let l = r.default.getChannel(e);
                return null != l && l.ownerId === a.userId && l.isBroadcastChannel()
            }

            function g() {
                let e = l.BroadcastAllowedGuildIds.getSetting(),
                    t = l.BroadcastAllowedUserIds.getSetting(),
                    n = l.BroadcastAllowFriends.getSetting();
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
            var l = n("446674"),
                s = n("77078"),
                r = n("244201"),
                i = n("856343"),
                u = n("373469"),
                o = n("474571"),
                d = n("773336"),
                c = n("162236"),
                f = n("49111"),
                g = n("782340");

            function E(e) {
                let {
                    onClose: t
                } = e, n = (0, r.useAppContext)(), E = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUserActiveStream()), S = (0, i.default)(E, n);
                return (0, a.jsxs)(s.Menu, {
                    onSelect: f.NOOP_NULL,
                    navId: "manage-broadcast",
                    onClose: t,
                    "aria-label": g.default.Messages.SETTINGS,
                    children: [d.isPlatformEmbedded && null != E ? (0, a.jsx)(s.MenuItem, {
                        id: "stream-settings",
                        label: g.default.Messages.SCREENSHARE_STREAM_QUALITY,
                        children: S
                    }) : null, (0, a.jsx)(s.MenuItem, {
                        id: "broadcast-settings",
                        label: g.default.Messages.BROADCAST_SETTINGS,
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
                    return i
                },
                openStartBroadcastConfirmModal: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("713726"),
                r = n("782340");

            function i(e) {
                (0, l.openModal)(t => (0, a.jsx)(l.ConfirmModal, {
                    header: r.default.Messages.STOP_STREAMING,
                    confirmText: r.default.Messages.STOP_STREAMING,
                    cancelText: r.default.Messages.CANCEL,
                    onConfirm: () => {
                        (0, s.stopBroadcast)(), e()
                    },
                    ...t,
                    children: (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: r.default.Messages.BROADCASTING_STOP_STREAM_CONFIRM_BODY
                    })
                }))
            }

            function u(e) {
                (0, l.openModal)(t => (0, a.jsx)(l.ConfirmModal, {
                    header: r.default.Messages.START_STREAMING,
                    confirmText: r.default.Messages.START_STREAMING,
                    cancelText: r.default.Messages.CANCEL,
                    onConfirm: e,
                    confirmButtonColor: l.Button.Colors.BRAND,
                    ...t,
                    children: (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: r.default.Messages.BROADCASTING_START_STREAM_CONFIRM_BODY
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
            var l = n("77078");

            function s(e, t, s) {
                (0, l.openModalLazy)(async () => {
                    let {
                        default: l
                    } = await n.el("725420").then(n.bind(n, "725420"));
                    return n => (0, a.jsx)(l, {
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
            let l = (0, a.createExperiment)({
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
                return l.useExperiment({
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
                    return r
                }
            });
            var a = n("99795"),
                l = n("353927");
            let s = Object.freeze({
                [a.ParticipantTypes.STREAM]: l.MediaEngineContextTypes.STREAM,
                [a.ParticipantTypes.HIDDEN_STREAM]: l.MediaEngineContextTypes.STREAM,
                [a.ParticipantTypes.USER]: l.MediaEngineContextTypes.DEFAULT,
                [a.ParticipantTypes.ACTIVITY]: l.MediaEngineContextTypes.DEFAULT
            });

            function r(e) {
                return s[e]
            }
        },
        836087: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                r = n.n(s),
                i = n("917351"),
                u = n.n(i),
                o = n("446674"),
                d = n("862337"),
                c = n("77078"),
                f = n("272030"),
                g = n("901582"),
                E = n("373469"),
                S = n("697218"),
                m = n("427302"),
                p = n("462579"),
                h = n("449008"),
                _ = n("387111"),
                T = n("99795"),
                A = n("49111"),
                I = n("782340"),
                C = n("2081");

            function v(e, t) {
                switch (e) {
                    case T.ParticipantTypes.ACTIVITY:
                        return I.default.Messages.EMBEDDED_ACTIVITIES_NUM_PARTICIPANTS.format({
                            numUsers: t
                        });
                    case T.ParticipantTypes.STREAM:
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
                    guildId: l,
                    participantType: s,
                    channelId: i,
                    handleUserContextMenu: u
                } = e, o = v(s, t.length);
                return (0, a.jsx)(c.Dialog, {
                    "aria-label": o,
                    className: C.popoutWrapper,
                    children: (0, a.jsxs)(c.Scroller, {
                        className: C.scroller,
                        children: [(0, a.jsx)(c.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: C.memberListHeader,
                            children: o
                        }), (0, a.jsx)("div", {
                            children: t.map(e => (0, a.jsx)(m.default, {
                                guildId: null != l ? l : void 0,
                                className: r(C.memberListItem, {
                                    [C.popoutDisabled]: n
                                }),
                                textClassName: C.memberListItemText,
                                user: e,
                                disablePopout: n,
                                nick: _.default.getNickname(l, i, e),
                                onContextMenu: t => n ? null : u(t, e)
                            }, e.id))
                        })]
                    })
                })
            }

            function M(e) {
                let {
                    users: t,
                    guildId: n,
                    channelId: l,
                    maxVisibleUsers: s = 3,
                    className: i,
                    participantType: u
                } = e, o = v(u, t.length), d = t.length < s ? t.map(e => (0, a.jsx)("div", {
                    className: C.viewersTooltipItem,
                    children: _.default.getName(n, l, e)
                }, e.id)) : o;
                return (0, a.jsx)(c.TooltipContainer, {
                    text: d,
                    "aria-label": o,
                    children: (0, a.jsxs)("div", {
                        className: r(C.viewers, i),
                        children: [(0, a.jsx)(p.default, {
                            className: C.viewersIcon
                        }), (0, a.jsx)("span", {
                            "aria-hidden": "true",
                            children: t.length
                        })]
                    })
                })
            }
            let D = [];

            function y(e) {
                let {
                    channelId: t,
                    guildId: s,
                    participant: i,
                    className: m,
                    compact: p = !1,
                    disableInteraction: _ = !1,
                    maxVisibleUsers: I = 3
                } = e, [v, y] = l.useState(!1), L = l.useRef(new d.DelayedCall(150, () => y(!1))), R = (0, o.useStateFromStoresArray)([E.default, S.default], () => {
                    if (i.type === T.ParticipantTypes.STREAM) {
                        let e = E.default.getViewerIds(i.id);
                        return e.length > 0 ? e.map(e => S.default.getUser(e)).filter(h.isNotNullish) : D
                    }
                    return i.type === T.ParticipantTypes.ACTIVITY ? i.participants.size > 0 ? Array.from(i.participants).map(e => S.default.getUser(e)).filter(h.isNotNullish) : D : D
                }, [i]), O = l.useCallback(() => {
                    L.current.cancel(), y(!0)
                }, []), b = l.useCallback(() => {
                    L.current.delay()
                }, []), P = l.useCallback((e, t) => {
                    O(), (0, f.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("406784").then(n.bind(n, "406784"));
                        return n => (0, a.jsx)(e, {
                            ...n,
                            user: t
                        })
                    }, {
                        onClose: b
                    })
                }, [b, O]);
                if (0 === R.length) return null;
                if (p) return (0, a.jsx)(M, {
                    maxVisibleUsers: I,
                    users: R,
                    guildId: s,
                    channelId: t,
                    className: m,
                    participantType: i.type
                });
                let U = u(R).take(I).map(e => (0, a.jsx)(c.Avatar, {
                    src: e.getAvatarURL(s, 24),
                    "aria-label": e.username,
                    size: c.AvatarSizes.SIZE_24,
                    className: C.viewer
                }, e.id)).value();
                return R.length > I && (U[U.length - 1] = (0, a.jsxs)("div", {
                    className: C.overflow,
                    children: ["+", R.length - I + 1]
                }, "overflow")), (0, a.jsx)(g.default, {
                    section: A.AnalyticsSections.STREAM_VIEWER_POPOUT,
                    children: (0, a.jsx)("div", {
                        onMouseEnter: O,
                        onMouseLeave: b,
                        children: (0, a.jsx)(c.Popout, {
                            renderPopout: () => (0, a.jsx)(N, {
                                participantType: i.type,
                                handleUserContextMenu: P,
                                guildId: s,
                                channelId: t,
                                users: R,
                                disableInteraction: _
                            }),
                            shouldShow: v,
                            position: "top",
                            children: () => (0, a.jsx)("div", {
                                className: r(C.viewers, m),
                                children: U
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
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                r = n("374014"),
                i = n("582415"),
                u = n("271938"),
                o = n("824563"),
                d = n("336727"),
                c = n("782340");

            function f(e, t, f) {
                var g;
                let E = (0, l.useStateFromStores)([o.default], () => (0, i.getStreamerApplication)(e, o.default), [e]),
                    S = (0, l.useStateFromStores)([u.default], () => u.default.getId()),
                    m = null != e ? (0, r.encodeStreamKey)(e) : d.default.getActiveStreamKey(),
                    p = null !== (g = d.default.getVideoStats(m)) && void 0 !== g ? g : {},
                    h = {
                        media_session_id: d.default.getMediaSessionId(m),
                        rtc_connection_id: d.default.getRtcConnectionId(m),
                        stream_region: d.default.getRegion(m),
                        max_viewers: d.default.getMaxViewers(m),
                        ...p
                    };
                return null == e ? null : (0, a.jsx)(s.MenuItem, {
                    id: "report-stream-problem",
                    label: c.default.Messages.STREAM_REPORT_PROBLEM_MENU_ITEM,
                    action: () => {
                        null == f || f(), null != e && (0, s.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("485857").then(n.bind(n, "485857"));
                            return n => (0, a.jsx)(t, {
                                stream: e,
                                streamApplication: E,
                                isStreamer: S === (null == e ? void 0 : e.ownerId),
                                analyticsData: h,
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
                    return h
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("446674"),
                r = n("77078"),
                i = n("629109"),
                u = n("997289"),
                o = n("773356"),
                d = n("268491"),
                c = n("305961"),
                f = n("42887"),
                g = n("697218"),
                E = n("49111"),
                S = n("686298"),
                m = n("353927"),
                p = n("782340");

            function h(e, t) {
                let {
                    preset: h,
                    resolution: _,
                    fps: T
                } = (0, s.useStateFromStoresObject)([d.default], () => d.default.getState()), A = (0, s.useStateFromStores)([f.default], () => f.default.getGoLiveSource()), I = (0, s.useStateFromStores)([g.default], () => g.default.getCurrentUser()), C = (0, s.useStateFromStores)([c.default], () => {
                    var t;
                    return null === (t = c.default.getGuild(null == e ? void 0 : e.guildId)) || void 0 === t ? void 0 : t.premiumTier
                }), {
                    location: v
                } = (0, u.useAnalyticsContext)(), N = l.useCallback((e, l, s, u) => {
                    if (e) {
                        if (null != A) {
                            let e = {
                                qualityOptions: {
                                    preset: S.ApplicationStreamPresets.PRESET_CUSTOM,
                                    resolution: l,
                                    frameRate: s
                                },
                                context: m.MediaEngineContextTypes.STREAM
                            };
                            null != A.desktopSource ? e.desktopSettings = {
                                sourceId: A.desktopSource.id,
                                sound: !0
                            } : null != A.cameraSource && (e.cameraSettings = {
                                videoDeviceGuid: A.cameraSource.videoDeviceGuid,
                                audioDeviceGuid: A.cameraSource.audioDeviceGuid
                            }), i.default.setGoLiveSource(e)
                        }
                    } else {
                        var o, d;
                        o = t, d = {
                            ...v,
                            object: E.AnalyticsObjects.RADIO_ITEM,
                            objectType: u
                        }, (0, r.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("754534").then(n.bind(n, "754534"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                analyticsSource: d
                            })
                        }, {
                            contextKey: o === E.AppContext.POPOUT ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT
                        })
                    }
                }, [t, v, A]);
                if (null == e) return null;
                let M = h === S.ApplicationStreamPresets.PRESET_DOCUMENTS ? S.ApplicationStreamFPS.FPS_30 : T,
                    D = S.ApplicationStreamFPSButtonsWithSuffixLabel.map(e => {
                        let {
                            value: t,
                            label: n
                        } = e, l = (0, o.default)(S.ApplicationStreamPresets.PRESET_CUSTOM, _, t, I, C);
                        return (0, a.jsx)(r.MenuRadioItem, {
                            group: "stream-settings-fps",
                            id: "stream-settings-fps-".concat(t),
                            label: n,
                            checked: t === T,
                            action: () => N(l, _, t, E.AnalyticsObjectTypes.RESOLUTION)
                        }, "stream-settings-fps-".concat(t))
                    }),
                    y = S.ApplicationStreamResolutionButtonsWithSuffixLabel.map(e => {
                        let {
                            value: t,
                            label: n
                        } = e, l = (0, o.default)(S.ApplicationStreamPresets.PRESET_CUSTOM, t, M, I, C);
                        return (0, a.jsx)(r.MenuRadioItem, {
                            group: "stream-settings-resolution",
                            id: "stream-settings-resolution-".concat(t),
                            label: n,
                            checked: t === _,
                            action: () => N(l, t, M, E.AnalyticsObjectTypes.RESOLUTION)
                        }, "stream-settings-resolution-".concat(t))
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r.MenuGroup, {
                        label: p.default.Messages.SCREENSHARE_FRAME_RATE,
                        children: D
                    }), (0, a.jsx)(r.MenuGroup, {
                        label: p.default.Messages.STREAM_RESOLUTION,
                        children: y
                    })]
                })
            }
        },
        338733: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CLIENT_THEMES_DATA_ATTRIBUTE: function() {
                    return r
                },
                default: function() {
                    return o
                }
            });
            var a = n("884691"),
                l = n("446674"),
                s = n("714657");
            let r = "data-client-themes",
                i = "custom-theme-background",
                u = () => {
                    let e = (0, l.useStateFromStores)([s.default], () => s.default.getLinearGradient()),
                        t = (0, a.useMemo)(() => null == e ? null : ".".concat(i, " {\n      --custom-theme-background: ").concat(e, ";\n    }"), [e]);
                    return t
                };
            var o = () => {
                let e = u();
                return null === e ? {
                    clientThemesCSS: "",
                    clientThemesClassName: ""
                } : {
                    clientThemesCSS: e,
                    clientThemesClassName: i
                }
            }
        },
        147746: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uploadDebugLogFiles: function() {
                    return S
                },
                getBlindIds: function() {
                    return p
                },
                uploadCallscopeLogs: function() {
                    return h
                },
                uploadCallscopeLogFiles: function() {
                    return _
                }
            });
            var a = n("872717"),
                l = n("869586"),
                s = n("49671"),
                r = n("890747"),
                i = n("254490"),
                u = n("821316"),
                o = n("605250"),
                d = n("836403"),
                c = n("825287"),
                f = n("929331"),
                g = n("49111");
            let E = new o.default("DebugUploadManager");
            async function S(e, t) {
                await T(e), await (0, r.uploadRtcLogFiles)(3670016, t)
            }
            class m {
                static getTrimmedFilename(e) {
                    let t = /^channel\.\d+\.(.+)$/.exec(e);
                    return null == t || t.length < 2 || null == t[1] ? "unknown" : t[1]
                }
                static getChannelId(e) {
                    let t = /channel\.(\d+)\..+(?:tsi|tsd)$/.exec(e);
                    return null == t || t.length < 2 || null == t[1] ? "unknown" : t[1]
                }
            }
            async function p(e, t, n) {
                let a = new l.BlindID(n),
                    s = await a.blind(e),
                    r = await a.blind(t);
                return {
                    blindChannelId: s,
                    blindUserId: r
                }
            }
            async function h(e, t, n, a) {
                var l, r;
                if (!__OVERLAY__) {
                    if ((null === (r = s.default) || void 0 === r ? void 0 : null === (l = r.fileManager) || void 0 === l ? void 0 : l.getCallscopeLogFiles) == null) {
                        E.error("uploadCallscopeLogs: Upload RTC logs failed because native is out of date (getCallscopeLogFiles).");
                        return
                    }
                    if (!("crypto" in window)) {
                        E.error("uploadCallscopeLogs: Upload RTC logs failed because crypto is not supported.");
                        return
                    }
                    try {
                        let {
                            blindChannelId: l,
                            blindUserId: r
                        } = await p(e, t, n), i = "channel blind(".concat(e, "): ").concat(l, ", user blind(").concat(t, "): ").concat(r);
                        E.info("uploadCallscopeLogs: Uploading callscope logs for context: ".concat(a, ", ").concat(i));
                        let u = await s.default.fileManager.getCallscopeLogFiles(l);
                        await _(r, u)
                    } catch (e) {
                        E.error("uploadCallscopeLogs: Error uploading logs ".concat(null == e ? void 0 : e.text), e)
                    }
                }
            }
            async function _(e, t) {
                try {
                    if (0 === t.length) {
                        E.error("uploadCallscopeLogFiles: No files found.");
                        return
                    }
                    for (let n of t.map(e => i.transformNativeFile(e, "application/octet-stream"))) {
                        E.log("uploadCallscopeLogFiles: Uploading ".concat(n.name));
                        let t = m.getChannelId(n.name);
                        try {
                            let l = await a.default.post({
                                    url: g.Endpoints.CALLSCOPE_LOGS(t, e, m.getTrimmedFilename(n.name)),
                                    headers: {
                                        "Content-Type": "application/octet-stream"
                                    },
                                    body: n
                                }),
                                s = l.status >= 200 && l.status <= 299;
                            !s && E.error("uploadCallscopeLogFiles: Failed to upload ".concat(n.name, " with status ").concat(l.status, ", ").concat(l.text))
                        } catch (e) {
                            E.error("uploadCallscopeLogFiles: Error uploading file ".concat(n.name, " ").concat(null == e ? void 0 : e.text), e)
                        }
                    }
                } catch (e) {
                    E.error("uploadCallscopeLogFiles: Error uploading logs ".concat(null == e ? void 0 : e.text), e)
                }
            }
            async function T(e) {
                try {
                    let t = u.stringify(),
                        n = "",
                        l = await (0, d.getPushNotificationLogs)().then(e => (0, d.serializePushNotificationLogs)(e)),
                        s = t.length + n.length + l.length;
                    if (s > 9437184) {
                        let e = 1 - 9437184 / s;
                        t = t.slice(t.length - Math.floor(t.length * e)), n = n.slice(n.length - Math.floor(n.length * e)), l = l.slice(l.length - Math.floor(l.length * e))
                    }
                    let r = null,
                        i = "\n    ".concat((0, f.default)(r), "\n\n    ").concat(JSON.stringify((0, c.default)(), void 0, 2), "\n    Logs:\n    ").concat(t, "\n\n    System logs:\n    ").concat(n, "\n\n    Push Notifications:\n    ").concat(l, "\n    ");
                    u.clear();
                    let o = g.Endpoints.DEBUG_LOG(e, "discord_app_logs");
                    await a.default.post({
                        url: o,
                        body: i,
                        retries: 3,
                        headers: {
                            "Content-Type": "text/plain"
                        },
                        oldFormErrors: !0
                    })
                } catch (e) {
                    E.error("uploadAppLogFiles: upload app log files error ".concat(e.message))
                }
            }
        },
        836403: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                serializePushNotificationLogs: function() {
                    return r
                },
                getPushNotificationLogs: function() {
                    return i
                }
            });
            var a = n("95410"),
                l = n("271938"),
                s = n("49111");

            function r(e) {
                if (0 === e.length) return "No logs";
                let t = a.default.get(s.DEVICE_TOKEN),
                    n = a.default.get(s.DEVICE_VOIP_TOKEN),
                    l = null != n ? "Device Voip Token: ".concat(n) : "",
                    r = e.map(e => {
                        let t = "Displayed";
                        return e.silent && (t = "Silent"), "".concat(new Date(e.receivedTimestamp).toISOString(), " [").concat(e.type, "] ").concat(t, " - ").concat(e.title, " - ").concat(e.content, " ")
                    }).join("\n");
                return "".concat(null != t ? "Device Token: ".concat(t) : "", "\n").concat(l, "\n\n").concat(r)
            }
            async function i() {
                let e = l.default.getId(),
                    t = [];
                return t
            }
        },
        825287: function(e, t, n) {
            "use strict";

            function a() {
                return {
                    logsUploaded: new Date().toISOString(),
                    releaseChannel: window.GLOBAL_ENV.RELEASE_CHANNEL,
                    buildNumber: "242660",
                    versionHash: "823d9b24d53abe9793a738628a0c5770d98b970e"
                }
            }
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            })
        },
        929331: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("917351"),
                l = n.n(a),
                s = n("102053"),
                r = n("487269");

            function i(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return s.default.logGroups.map(n => {
                    var a, s;
                    let {
                        index: i,
                        timestamp: o,
                        logs: d,
                        nativeLogs: c,
                        serverTrace: f
                    } = n, g = 0 === i ? null !== (s = null === (a = l.find(d, e => e.log.indexOf("Logger loaded") >= 0)) || void 0 === a ? void 0 : a.timestamp) && void 0 !== s ? s : e : o, E = function(e, t) {
                        var n, a;
                        let s = (function(e) {
                                let t = [];
                                for (let n = 0; n < e.length; n++) {
                                    let a = e[n],
                                        l = e[n + 1];
                                    null != l && l.log === a.log.replace("Start ", "Finish ") ? (l.log = l.log.replace("Finish ", ""), t.push(l), n++) : t.push(a)
                                }
                                return t
                            })(e).map(e => {
                                let n = null == e.timestamp ? "" : ((e.timestamp - t) / 1e3).toFixed(3),
                                    a = null == e.delta ? "" : String(Math.round(e.delta));
                                return {
                                    totalTime: n,
                                    deltaTime: a,
                                    log: "".concat(e.emoji.length > 0 ? "".concat(e.emoji, " ") : "").concat(e.prefix).concat(e.log, "\n")
                                }
                            }),
                            r = null !== (n = l.max(s.map(e => e.totalTime.length))) && void 0 !== n ? n : 0,
                            i = null !== (a = l.max(s.map(e => e.deltaTime.length))) && void 0 !== a ? a : 0;
                        return s.map(e => {
                            let {
                                totalTime: t,
                                deltaTime: n,
                                log: a
                            } = e;
                            return "".concat(l.padStart(t, r), " ").concat(l.padStart(n, i), " ").concat(a)
                        }).join("")
                    }(function(e, t, n) {
                        e = e.slice();
                        let a = new Set(t.map(u)),
                            l = "",
                            s = [];
                        return t.forEach(t => {
                            let r = u(t),
                                i = 0,
                                o = n || !t.autoGenerated,
                                d = r.startsWith("Start ") && !r.includes("RUN_JS_BUNDLE") && a.has(r.replace("Start ", "Finish ")),
                                c = r.startsWith("Finish ") && !r.includes("RUN_JS_BUNDLE") && a.has(r.replace("Finish ", "Start "));
                            if (c) {
                                l = l.substring(2);
                                let e = s.pop();
                                null != e && (i = t.timestamp - e.timestamp, o = o || i > 5 && ! function(e) {
                                    return ["GET_CONSTANTS", "CONVERT_CONSTANTS"].some(t => e.includes(t))
                                }(r), e.shouldKeep = e.shouldKeep || o)
                            }
                            let f = {
                                emoji: "☕",
                                timestamp: t.timestamp,
                                delta: i > 0 ? i : void 0,
                                prefix: l,
                                log: r,
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
                            })(e, f), d && (l += "| ", s.push(f))
                        }), e.filter(e => !1 !== e.shouldKeep)
                    }(d, c, t), g), S = "Trace #".concat(i + 1, " started ").concat((0, r.getTimestampString)(o), "\n").concat(E);
                    return null != f && (S += "\n Server trace for trace #".concat(i + 1).concat(f)), S
                }).join("\n\n")
            }

            function u(e) {
                let t = null == e.tag ? e.label : "".concat(e.label, " ").concat(e.tag);
                return t.includes("_START") && (t = "Start " + t.replace("_START", "")), t.includes("_END") && (t = "Finish " + t.replace("_END", "")), t
            }
        },
        370492: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateDevToolsSettings: function() {
                    return s
                },
                toggleDisplayDevTools: function() {
                    return r
                },
                clearAnalyticsLog: function() {
                    return i
                }
            });
            var a = n("913144"),
                l = n("584369");

            function s(e) {
                a.default.dispatch({
                    type: "DEV_TOOLS_SETTINGS_UPDATE",
                    settings: e
                })
            }

            function r() {
                s({
                    displayTools: !l.default.displayTools
                })
            }

            function i() {
                a.default.dispatch({
                    type: "ANALYTICS_LOG_CLEAR"
                })
            }
        },
        584369: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVTOOLS_SIDEBAR_MIN_WIDTH: function() {
                    return i
                },
                default: function() {
                    return d
                }
            });
            var a = n("446674"),
                l = n("95410"),
                s = n("913144"),
                r = n("9503");
            let i = 360,
                u = {
                    devToolsEnabled: !1,
                    sidebarWidth: i,
                    lastOpenTabId: null,
                    displayTools: !1,
                    showDevWidget: !1,
                    devWidgetPosition: {
                        x: 0,
                        y: 0
                    }
                };
            class o extends a.default.DeviceSettingsStore {
                initialize(e) {
                    u = null != e ? e : u, s.default.actionLogger.persist = this.devToolsEnabled
                }
                getUserAgnosticState() {
                    return u
                }
                get devToolsEnabled() {
                    return u.devToolsEnabled
                }
                get sidebarWidth() {
                    return this.displayTools ? u.sidebarWidth : 0
                }
                get lastOpenTabId() {
                    var e;
                    return null !== (e = u.lastOpenTabId) && void 0 !== e ? e : null
                }
                get displayTools() {
                    return this.devToolsEnabled && u.displayTools
                }
                get showDevWidget() {
                    return this.devToolsEnabled && u.showDevWidget
                }
                get devWidgetPosition() {
                    return u.devWidgetPosition
                }
            }
            o.displayName = "DevToolsSettingsStore", o.persistKey = "DevToolsSettingsStore";
            var d = new o(s.default, {
                DEV_TOOLS_SETTINGS_UPDATE: function(e) {
                    (u.devToolsEnabled || e.settings.devToolsEnabled) && (null != e.settings.devToolsEnabled && (s.default.actionLogger.persist = e.settings.devToolsEnabled, l.default.set(r.STORAGE_KEY_LOG_DISPATCHES, e.settings.devToolsEnabled)), u = {
                        ...u,
                        ...e.settings
                    })
                }
            })
        },
        51545: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usesClientMods: function() {
                    return r
                },
                initSentry: function() {
                    return u
                }
            });
            var a = n("245123"),
                l = n("316217");
            let s = ["oppobrowser", "realmebrowser", "heytapbrowser"];

            function r() {
                let e = window;
                return null != e.jQuery || null != e.$ || null != e.BetterDiscord || null != e.BdApi || null != e.rambox
            }
            let i = (0, l.filterThrottle)({
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
                    release: "discord_web-823d9b24d53abe9793a738628a0c5770d98b970e",
                    beforeSend: e => {
                        var t, n;
                        return !(null != (t = e).exception && null != t.exception.values && t.exception.values.every(e => null == e.stacktrace || null != e.stacktrace.frames && 1 === e.stacktrace.frames.length) && "canary" !== window.GLOBAL_ENV.RELEASE_CHANNEL || s.some(e => window.navigator.appVersion.toLowerCase().indexOf(e) >= 0)) && !r() && !("Aborted" === (n = e).message || "cancel captcha" === n.message) && i() ? e : null
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
                    ignoreErrors: ["EADDRINUSE", "BetterDiscord", "EnhancedDiscord", "Powercord", "RecipeWebview", "jQuery", "localStorage", "has already been declared", "Cannot call hover while not dragging.", "Cannot call beginDrag while dragging.", "getHostNode", "setupCSS", "on missing remote object", "ChunkLoadError", "Cannot find module 'discord_utils'", "Failed to setup Krisp module", "Error invoking remote method 'DISCORD_NATIVE_MODULES_INSTALL': Error: Module updater is not available!", "Non-Error promise rejection captured with keys:", "Request has been terminated", "Cannot resolve a Slate point from DOM point", "Failed to fetch", "no suitable image found", "ResizeObserver loop limit exceeded", "The play() request was interrupted", "could not play audio", "notosans-400-normalitalic"],
                    denyUrls: [/recaptcha/, /mobilediscord\.com/, /betterdiscord:\/\//]
                }), a.setTag("buildNumber", (e = "242660", "242660")), a.setTag("builtAt", String("1698870506743"));
                let t = window.GLOBAL_ENV.SENTRY_TAGS;
                if (null != t && "object" == typeof t)
                    for (let e in t) a.setTag(e, t[e]);
                return a
            }
        },
        695681: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                reportFalsePositive: function() {
                    return s
                },
                sendMessagesForScanning: function() {
                    return r
                },
                sendMultiChannelMessagesForScanning: function() {
                    return i
                }
            });
            var a = n("872717"),
                l = n("49111");

            function s(e, t, n, s) {
                return a.default.post({
                    url: l.Endpoints.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE,
                    body: {
                        channel_id: e,
                        message_id: t,
                        attachment_ids: n,
                        embed_ids: s
                    }
                })
            }

            function r(e, t) {
                return a.default.patch({
                    url: l.Endpoints.EXPLICIT_MEDIA_SCAN_MESSAGES(e),
                    body: {
                        message_ids: t
                    }
                })
            }

            function i(e) {
                let t = e.map(e => ({
                    channel_id: e.channel_id,
                    message_id: e.id
                }));
                return a.default.patch({
                    url: l.Endpoints.EXPLICIT_MEDIA_SCAN_MULTI_CHANNEL_MESSAGES,
                    body: {
                        messages: t
                    }
                })
            }
        },
        612278: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFirstForumPostMessage: function() {
                    return _
                },
                useMostRecentForumMessage: function() {
                    return T
                },
                preloadForumThreads: function() {
                    return I
                }
            });
            var a = n("917351"),
                l = n.n(a),
                s = n("446674"),
                r = n("872717"),
                i = n("913144"),
                u = n("42203"),
                o = n("670902"),
                d = n("349778"),
                c = n("430475"),
                f = n("324261"),
                g = n("49111");
            class E {
                get(e) {
                    return !this._set.hasOwnProperty(e) && (this._set[e] = this._defaultValueFunc()), this._set[e]
                }
                delete(e) {
                    delete this._set[e]
                }
                hasNext() {
                    return !l.isEmpty(this._set)
                }
                next() {
                    return Object.keys(this._set)[0]
                }
                constructor(e) {
                    this._set = {}, this._defaultValueFunc = e
                }
            }
            let S = new class e {
                    request(e, t) {
                        this.requested.get(e).add(t)
                    }
                    hasRequested(e, t) {
                        return this.requested.get(e).has(t)
                    }
                    finishRequesting(e, t) {
                        let n = this.requested.get(e);
                        t.forEach(e => n.delete(e)), S.compact(e)
                    }
                    getRequested(e) {
                        return this.requested.get(e)
                    }
                    getNextBatch(e, t) {
                        return Array.from(this.requested.get(e)).slice(0, t)
                    }
                    hasNext() {
                        return this.requested.hasNext()
                    }
                    next() {
                        return this.requested.next()
                    }
                    compact(e) {
                        0 === this.requested.get(e).size && this.requested.delete(e)
                    }
                    constructor() {
                        this.requested = new E(() => new Set)
                    }
                },
                m = null;

            function p(e, t) {
                let n = (0, d.isForumActivityExperimentEnabled)(e);
                if (n) {
                    let {
                        loaded: e,
                        message: n
                    } = f.default.getMessageState(t);
                    return !e && null == n
                }
                return !1
            }

            function h(e, t) {
                return !e && null == t
            }

            function _(e) {
                var t, n;
                let {
                    loaded: a,
                    firstMessage: l
                } = (0, s.useStateFromStoresObject)([c.default], () => c.default.getMessage(e.id)), r = (0, s.useStateFromStores)([u.default], () => u.default.getChannel(e.parent_id));
                if (null != r && (t = a, n = l, !t && null == n)) C(r, e.id);
                return {
                    loaded: a,
                    firstMessage: l
                }
            }

            function T(e, t) {
                let {
                    loaded: n,
                    message: a
                } = (0, s.useStateFromStoresObject)([f.default], () => f.default.getMessageState(t.id));
                return null != e && p(t.guild_id, t.id) && C(e, t.id), {
                    loaded: n,
                    mostRecentMessage: a
                }
            }

            function A(e, t) {
                let n = !1;
                t.forEach(t => {
                    var a, l;
                    let {
                        loaded: s,
                        firstMessage: r
                    } = c.default.getMessage(t);
                    if (a = s, l = r, !a && null == l || p(e.guild_id, t)) S.request(e.id, t), n = !0
                }), n && null == m && (m = setTimeout(v, 0))
            }

            function I(e) {
                A(e, (0, o.computeThreadIdsSnapshot)(e.id).slice(0, 10))
            }

            function C(e, t) {
                if (S.hasRequested(e.id, t)) return;
                let n = (0, o.computeThreadIdsSnapshot)(e.id),
                    a = n.findIndex(e => e === t),
                    l = n.slice(a, a + 5).filter(t => !S.hasRequested(e.id, t));
                A(e, l)
            }
            async function v() {
                try {
                    for (; S.hasNext();) await N(S.next())
                } finally {
                    m = null
                }
            }
            async function N(e) {
                let t = S.getNextBatch(e, 10);
                try {
                    var n;
                    if (0 === t.length) return;
                    let a = null === (n = u.default.getChannel(e)) || void 0 === n ? void 0 : n.guild_id;
                    if (null == a) return;
                    let {
                        body: {
                            threads: l
                        }
                    } = await r.default.post({
                        url: g.Endpoints.FORUM_POSTS(e),
                        body: {
                            thread_ids: t
                        }
                    });
                    i.default.dispatch({
                        type: "LOAD_FORUM_POSTS",
                        guildId: a,
                        threads: l
                    })
                } catch (e) {} finally {
                    S.finishRequesting(e, t)
                }
            }
        },
        324261: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("446674"),
                l = n("913144"),
                s = n("692038"),
                r = n("42203"),
                i = n("697218"),
                u = n("449008"),
                o = n("299039");
            let d = {};

            function c(e) {
                var t;
                let n = r.default.getChannel(null == e ? void 0 : e.channel_id);
                if (null == n || !n.isForumPost()) return !1;
                let a = d[n.id];
                return o.default.compare(null == e ? void 0 : e.id, null == a ? void 0 : null === (t = a.message) || void 0 === t ? void 0 : t.id) > -1
            }

            function f(e, t) {
                let n = null == t ? null : (0, s.createMessageRecord)(t);
                return d[e] = {
                    loaded: !0,
                    message: n
                }, !0
            }

            function g(e) {
                return d[e]
            }

            function E(e) {
                var t;
                return null === (t = d[e]) || void 0 === t ? void 0 : t.message
            }

            function S(e) {
                let {
                    threads: t,
                    mostRecentMessages: n
                } = e;
                t.forEach(e => f(e.id, null)), null == n || n.filter(u.isNotNullish).forEach(e => {
                    f(e.channel_id, e)
                })
            }
            class m extends a.default.Store {
                initialize() {
                    this.waitFor(r.default, i.default)
                }
                getMessageState(e) {
                    return !(e in d) && (d[e] = {
                        loaded: !1,
                        message: null
                    }), d[e]
                }
            }
            m.displayName = "ForumPostRecentMessageStore";
            var p = new m(l.default, {
                CONNECTION_OPEN: function() {
                    d = {}
                },
                MESSAGE_CREATE: function(e) {
                    if (e.isPushNotification || !c(e.message)) return !1;
                    e.message.channel_id === e.message.id ? f(e.message.channel_id, null) : f(e.message.channel_id, e.message)
                },
                MESSAGE_UPDATE: function(e) {
                    if (!c(e.message) || e.message.channel_id === e.message.id) return !1;
                    ! function(e, t) {
                        let n = function(e) {
                                return d[e]
                            }(e),
                            a = E(e);
                        null != n && null != a && (d[e] = {
                            ...n,
                            message: (0, s.updateMessageRecord)(a, t)
                        })
                    }(e.message.channel_id, e.message)
                },
                MESSAGE_DELETE: function(e) {
                    return function(e, t) {
                        let n = E(e);
                        return (null == n ? void 0 : n.id) === t && (delete d[e], !0)
                    }(e.channelId, e.id)
                },
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        threads: t
                    } = e;
                    for (let e in t) f(e, t[e].most_recent_message)
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: S,
                LOAD_THREADS_SUCCESS: S
            })
        },
        479788: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("353927");

            function l(e) {
                return e.supportsInApp(a.Features.VIDEO) && e.supportsInApp(a.Features.DESKTOP_CAPTURE)
            }
        },
        773356: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("294707"),
                l = n("686298");

            function s(e, t, n, s, r) {
                for (let i of l.ApplicationStreamSettingRequirements)
                    if ((null == i.preset || e === i.preset) && t === i.resolution && n === i.fps && (0, a.default)(i, s, r)) return !0;
                return !1
            }
        },
        294707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("427459"),
                l = n("719923"),
                s = n("646718");

            function r(e, t, n) {
                if (null == e || null == e.quality && null == e.guildPremiumTier) return !0;
                let r = !1;
                return null != e.quality && (e.quality === s.StreamQualities.HIGH_STREAMING_QUALITY ? r = r || l.default.canStreamQuality(l.default.StreamQuality.HIGH, t) : e.quality === s.StreamQualities.MID_STREAMING_QUALITY && (r = r || l.default.canStreamQuality(l.default.StreamQuality.MID, t))), null != e.guildPremiumTier && (r = r || (0, a.isGuildBoostedAtLeast)(n, e.guildPremiumTier)), r
            }
        },
        430951: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("387111"),
                l = n("49111"),
                s = n("782340");

            function r(e, t, n, r) {
                if (e.state === l.ApplicationStreamStates.RECONNECTING) return {
                    mainText: s.default.Messages.STREAM_RECONNECTING_ERROR,
                    supportingText: s.default.Messages.STREAM_RECONNECTING_ERROR_SUBTEXT
                };
                if (e.state === l.ApplicationStreamStates.PAUSED) return n ? {
                    mainText: s.default.Messages.STREAM_CAPTURE_PAUSED,
                    supportingText: s.default.Messages.STREAM_CAPTURE_PAUSED_DETAILS
                } : {
                    mainText: s.default.Messages.STREAM_CAPTURE_PAUSED,
                    supportingText: s.default.Messages.STREAM_CAPTURE_PAUSED_DETAILS_VIEWER.format({
                        username: a.default.getName(e.guildId, e.channelId, t)
                    })
                };
                return r ? {
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
                l = n("50885");

            function s(e) {
                a.isPlatformEmbedded ? l.default.focus(e) : window.focus()
            }
        },
        16916: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("629109"),
                l = n("990766"),
                s = n("271938"),
                r = n("374014");

            function i(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (null == e) return;
                let {
                    streamType: n,
                    guildId: i,
                    channelId: u,
                    ownerId: o
                } = e, d = (0, r.encodeStreamKey)({
                    streamType: n,
                    guildId: i,
                    channelId: u,
                    ownerId: o
                });
                o === s.default.getId() && a.default.setGoLiveSource(null), l.stopStream(d, t)
            }
        },
        658536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("913144"),
                l = n("689988"),
                s = n("26989"),
                r = n("697218"),
                i = n("509");
            let u = null,
                o = () => {
                    let e = s.default.getCommunicationDisabledUserMap();
                    Object.keys(e).forEach(t => {
                        let n = (0, s.getGuildIdFromCommunicationDisabledUserKey)(t),
                            a = (0, s.getUserIdFromCommunicationDisabledUserKey)(t),
                            l = e[t];
                        !(0, i.isCommunicationDisabled)(l) && d(n, a)
                    })
                },
                d = (e, t) => {
                    var n, l, u, o, d, c;
                    let f = s.default.getMember(e, t),
                        g = r.default.getUser(t);
                    if (null == f || null == g || (0, i.isMemberCommunicationDisabled)(f)) return;
                    let E = {
                        ...f,
                        guildId: e,
                        nick: null !== (n = f.nick) && void 0 !== n ? n : g.username,
                        avatar: null !== (l = f.avatar) && void 0 !== l ? l : void 0,
                        premiumSince: null !== (u = f.premiumSince) && void 0 !== u ? u : void 0,
                        isPending: null !== (o = f.isPending) && void 0 !== o && o,
                        user: {
                            ...g,
                            email: null !== (d = g.email) && void 0 !== d ? d : void 0,
                            phone: null !== (c = g.phone) && void 0 !== c ? c : void 0
                        },
                        communicationDisabledUntil: null
                    };
                    a.default.dispatch({
                        type: "GUILD_MEMBER_UPDATE",
                        ...E
                    })
                };
            class c extends l.default {
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
        696326: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                kind: "guild",
                id: "2023-03_onboarding_upsell_lifecycle",
                label: "Onboarding Upsell Lifecycle",
                defaultConfig: {
                    showLifecycleUpsells: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show new lifecycle upsells",
                    config: {
                        showLifecycleUpsells: !0
                    }
                }]
            });
            var s = l
        },
        179803: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                shouldShowGuildOnboardingUpsell: function() {
                    return p
                },
                dismissedGuildOnboardingUpsell: function() {
                    return h
                }
            });
            var a = n("866227"),
                l = n.n(a),
                s = n("151426"),
                r = n("801340"),
                i = n("10641"),
                u = n("872173"),
                o = n("374363"),
                d = n("305961"),
                c = n("696326"),
                f = n("380710"),
                g = n("49111"),
                E = n("994428");
            let S = [s.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, s.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, s.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
                m = [0, 1, 7];

            function p(e, t) {
                var n;
                let a = d.default.getGuilds(),
                    s = Object.entries(a).some(e => {
                        let [t, n] = e, a = (0, f.isGuildOnboardingSettingsAvailable)(t), l = n.hasFeature(g.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
                        return a && l
                    });
                if (s || !(0, f.isGuildOnboardingSettingsAvailable)(e)) return !1;
                let u = null === (n = o.default.settings.userContent) || void 0 === n ? void 0 : n.guildOnboardingUpsellDismissedAt,
                    E = null != u ? r.Timestamp.toDate(u) : void 0,
                    p = null != E ? l().diff(E, "days") : null,
                    h = S.indexOf(t);
                if (-1 === h) return !1;
                let _ = null == p || p > m[h];
                if (!_) return !1;
                let T = S.find(e => !(0, i.isDismissibleContentDismissed)(e)) === t;
                if (!T) return !1;
                let {
                    showLifecycleUpsells: A
                } = c.default.getCurrentConfig({
                    guildId: e,
                    location: "7f5b67_1"
                }, {
                    disable: s || !(0, f.isGuildOnboardingSettingsAvailable)(e),
                    autoTrackExposure: !0
                });
                return A
            }

            function h(e, t) {
                let n = r.Timestamp.now();
                u.PreloadedUserSettingsActionCreators.updateAsync("userContent", e => {
                    e.guildOnboardingUpsellDismissedAt = n
                }, u.UserSettingsDelay.INFREQUENT_USER_ACTION), null != t && (0, i.markDismissibleContentAsDismissed)(t, {
                    forceTrack: !0,
                    dismissAction: E.ContentDismissActionType.AUTO,
                    guildId: e
                })
            }
        },
        984519: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HIGH_FIVE_EMOJIS: function() {
                    return a
                }
            });
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
                l = n("913144");
            let s = {
                    enabled: !1
                },
                r = {},
                i = {},
                u = !1;
            class o extends a.default.DeviceSettingsStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
                    u = e.enabled
                }
                getWaitingHighFive(e, t) {
                    var n;
                    return null === (n = r[e]) || void 0 === n ? void 0 : n[t]
                }
                getCompletedHighFive(e, t) {
                    var n;
                    return null === (n = i[e]) || void 0 === n ? void 0 : n[t]
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
            var d = new o(l.default, {
                HIGH_FIVE_QUEUE: function(e) {
                    let {
                        userId: t,
                        channelId: n,
                        emoji: a
                    } = e;
                    r[n] = {
                        ...r[n],
                        [t]: a
                    }
                },
                HIGH_FIVE_REMOVE: function(e) {
                    let {
                        userId: t,
                        channelId: n
                    } = e, a = r[n];
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
                        waitingUserId: l,
                        channelId: s
                    } = e, u = null !== (t = r[s]) && void 0 !== t ? t : {}, o = u[l];
                    if (delete u[l], null == o) return !1;
                    i[s] = {
                        ...i[s],
                        [l]: [o, n],
                        [a]: [n, o]
                    }
                },
                HIGH_FIVE_COMPLETE_CLEAR: function(e) {
                    var t;
                    let {
                        firstUserId: n,
                        secondUserId: a,
                        channelId: l
                    } = e, s = null !== (t = i[l]) && void 0 !== t ? t : {};
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
            });
            var a = n("984519");
            let l = /🏻|🏼|🏽|🏾|🏿|\uFE0F/g;

            function s(e) {
                return a.HIGH_FIVE_EMOJIS.has(e.replace(l, ""))
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
                l = n("42203"),
                s = n("305961"),
                r = n("18494"),
                i = n("49111");
            let u = () => {
                    let e = r.default.getVoiceChannelId();
                    if (null == e) return !1;
                    let t = l.default.getChannel(e);
                    if (null == t) return !1;
                    let n = s.default.getGuild(t.getGuildId());
                    return null != n && n.hasFeature(i.GuildFeatures.HUB)
                },
                o = e => (0, a.useStateFromStores)([r.default, l.default, s.default], () => {
                    let t = r.default.getVoiceChannelId();
                    if (null == t) return !1;
                    let n = l.default.getChannel(t);
                    if (null == n) return !1;
                    let a = s.default.getGuild(n.getGuildId());
                    return null != a && a.id === e
                })
        },
        931318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addMessageReminders: function() {
                    return E
                },
                updateReminderDueAt: function() {
                    return S
                },
                toggleMessageReminders: function() {
                    return m
                },
                completeMessageReminders: function() {
                    return p
                },
                cleanupMessageReminders: function() {
                    return h
                },
                fetchAndUpdateSavedMessages: function() {
                    return A
                }
            });
            var a = n("872717"),
                l = n("913144"),
                s = n("679653"),
                r = n("42203"),
                i = n("305961"),
                u = n("27618"),
                o = n("697218"),
                d = n("599110"),
                c = n("520899"),
                f = n("988864"),
                g = n("49111");

            function E(e, t) {
                d.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "adding",
                    rating: "".concat(c.default.getMessageReminders().length)
                }), T([{
                    messageId: e.id,
                    channelId: e.channel_id,
                    savedAt: new Date,
                    dueAt: t,
                    ... function(e) {
                        let t = r.default.getChannel(e.channel_id);
                        if (null == t) return null;
                        let n = i.default.getGuild(t.guild_id),
                            a = "",
                            l = (0, s.computeChannelName)(t, o.default, u.default, !0);
                        if (t.isPrivate()) a = l;
                        else if (t.isThread()) {
                            let e = r.default.getChannel(t.parent_id);
                            if (null == e) return null;
                            let n = (0, s.computeChannelName)(e, o.default, u.default, !0);
                            a = "".concat(n, " > ").concat(l)
                        } else a = l;
                        let d = "".concat(e.content.length > 0 ? e.content : "".concat(e.attachments.length, " attachments"));
                        return {
                            authorSummary: e.author.username,
                            authorId: e.author.id,
                            channelSummary: a,
                            messageSummary: d.length > 200 ? "".concat(d.slice(0, 197), "...") : d,
                            guildId: null == n ? void 0 : n.id
                        }
                    }(e)
                }], [])
            }

            function S(e, t) {
                d.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "updating_due_at",
                    rating: "".concat(c.default.getMessageReminders().length)
                });
                let n = c.default.getMessageReminders(),
                    a = n.find(t => t.messageId === e);
                null != a && T([{
                    ...a,
                    savedAt: new Date,
                    dueAt: t
                }], [a])
            }

            function m(e, t) {
                d.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: t,
                    reason: "updating within the list",
                    rating: "".concat(c.default.getMessageReminders().length)
                }), l.default.dispatch({
                    type: "MESSAGE_REMINDER_TOGGLE",
                    messageId: e,
                    complete: t
                })
            }

            function p(e) {
                d.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "complete and clear immediately",
                    rating: "".concat(c.default.getMessageReminders().length)
                });
                let t = c.default.getMessageReminders();
                T([], t.filter(t => t.messageId === e))
            }

            function h() {
                d.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "clearing",
                    rating: "".concat(c.default.getMessageReminders().length)
                });
                let e = c.default.getMessageReminders();
                e.some(e => e.complete) && T([], e.filter(e => e.complete))
            }

            function _(e) {
                d.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "updated_from_server",
                    rating: "".concat(c.default.getMessageReminders().length)
                }), l.default.dispatch({
                    type: "SAVED_MESSAGES_UPDATE",
                    messages: e
                })
            }

            function T(e, t) {
                (0 !== e.length || 0 !== t.length) && a.default.post({
                    url: g.Endpoints.SAVED_MESSAGES,
                    body: {
                        added: e.map(f.savedMessageToServer),
                        removed: t.map(f.savedMessageToServer)
                    }
                }).then(e => {
                    _(e.body.saved_messages.map(f.savedMessageToClient))
                })
            }

            function A() {
                return c.default.recentlyFetched() ? Promise.resolve() : a.default.get({
                    url: g.Endpoints.SAVED_MESSAGES
                }).then(e => {
                    let t = e.body.saved_messages,
                        n = t.map(f.savedMessageToClient);
                    _(n)
                })
            }
        },
        979268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                kind: "user",
                id: "2022-08_message_todos_staff_only",
                label: "Message TODO list",
                defaultConfig: {
                    showReminders: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show message TODOs CTA",
                    config: {
                        showReminders: !0
                    }
                }]
            });
            var s = l
        },
        520899: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("446674"),
                l = n("913144"),
                s = n("718517");
            let r = [],
                i = new Set,
                u = 0;
            class o extends a.default.Store {
                initialize() {
                    setInterval(() => {
                        this.emitChange()
                    }, 1 * s.default.Millis.MINUTE)
                }
                getMessageReminders() {
                    return r
                }
                isMessageReminder(e) {
                    let t = r.find(t => t.messageId === e);
                    return null != t && !t.complete
                }
                getOverdueMessageReminderCount() {
                    return r.filter(e => null == e.dueAt || new Date > e.dueAt).length
                }
                recentlyFetched() {
                    return new Date().getTime() - u < 1 * s.default.Millis.MINUTE
                }
                hasSentNotification(e) {
                    return i.has(e)
                }
                getState() {
                    return {
                        messages: r
                    }
                }
            }
            o.displayName = "MessageRemindersStore";
            var d = new o(l.default, {
                SAVED_MESSAGES_UPDATE: function(e) {
                    let {
                        messages: t
                    } = e;
                    u = new Date().getTime(), r = t.map(e => ({
                        ...e,
                        complete: !1
                    })), t.forEach(e => {
                        null != e.dueAt && e.dueAt > new Date && i.delete(e.messageId), null != e.dueAt && e.dueAt < new Date && i.add(e.messageId)
                    })
                },
                MESSAGE_REMINDER_TOGGLE: function(e) {
                    let {
                        messageId: t,
                        complete: n
                    } = e, a = r.findIndex(e => e.messageId === t);
                    if (-1 === a) return !1;
                    r[a] = {
                        ...r[a],
                        complete: n
                    }
                },
                MESSAGE_REMINDER_NOTIFIED: function(e) {
                    let {
                        messageId: t
                    } = e;
                    i.add(t)
                }
            })
        },
        988864: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                savedMessageToServer: function() {
                    return s
                },
                savedMessageToClient: function() {
                    return r
                },
                savedMessageHasMetadata: function() {
                    return i
                },
                MESSAGE_REMINDER_DURATION_ITEMS: function() {
                    return u
                }
            });
            var a = n("718517"),
                l = n("782340");

            function s(e) {
                var t;
                return {
                    channel_id: e.channelId,
                    message_id: e.messageId,
                    saved_at: e.savedAt.toISOString(),
                    author_summary: e.authorSummary,
                    channel_summary: e.channelSummary,
                    message_summary: e.messageSummary,
                    guild_id: e.guildId,
                    author_id: e.authorId,
                    notes: e.notes,
                    due_at: null === (t = e.dueAt) || void 0 === t ? void 0 : t.toISOString()
                }
            }

            function r(e) {
                return {
                    channelId: e.channel_id,
                    messageId: e.message_id,
                    savedAt: new Date(e.saved_at),
                    authorSummary: e.author_summary,
                    channelSummary: e.channel_summary,
                    messageSummary: e.message_summary,
                    guildId: 0 === e.guild_id ? void 0 : e.guild_id,
                    authorId: 0 === e.author_id ? void 0 : e.author_id,
                    notes: e.notes,
                    dueAt: null != e.due_at ? new Date(e.due_at) : void 0
                }
            }

            function i(e) {
                return null != e.authorSummary && e.authorSummary.length > 0 && null != e.channelSummary && e.channelSummary.length > 0 && null != e.messageSummary && e.messageSummary.length > 0 && null != e.authorId && e.authorId.length > 0
            }
            let u = [{
                duration: a.default.Millis.HOUR,
                getLabel: () => l.default.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR
            }, {
                duration: 2 * a.default.Millis.HOUR,
                getLabel: () => l.default.Messages.MESSAGE_REMINDERS_IN_TWO_HOURS
            }, {
                duration: 4 * a.default.Millis.HOUR,
                getLabel: () => l.default.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS
            }, {
                duration: a.default.Millis.DAY,
                getLabel: () => l.default.Messages.MESSAGE_REMINDERS_IN_ONE_DAY
            }, {
                duration: a.default.Millis.WEEK,
                getLabel: () => l.default.Messages.MESSAGE_REMINDERS_IN_ONE_WEEK
            }]
        },
        341329: function(e, t, n) {
            "use strict";
            let a;
            n.r(t), n.d(t, {
                default: function() {
                    return H
                }
            });
            var l = n("803182"),
                s = n("811022"),
                r = n("95410"),
                i = n("913144"),
                u = n("404118"),
                o = n("819689"),
                d = n("115718"),
                c = n("689988"),
                f = n("408062"),
                g = n("619443"),
                E = n("582713"),
                S = n("233069"),
                m = n("982108"),
                p = n("42203"),
                h = n("305961"),
                _ = n("660478"),
                T = n("18494"),
                A = n("162771"),
                I = n("49111"),
                C = n("724210"),
                v = n("782340");
            let N = new s.default("MessageManager");

            function M(e) {
                let {
                    guildId: t,
                    channelId: n,
                    messageId: l,
                    forceFetch: s,
                    isPreload: i,
                    jumpType: u,
                    isHighlight: c,
                    skipLocalFetch: E,
                    logFailures: S
                } = e;
                if (null == n) {
                    S && N.log("Skipping fetch because channelId is null");
                    return
                }
                if ((0, C.isStaticChannelRoute)(n)) {
                    S && N.log("Skipping fetch because channelId is a static route");
                    return
                }
                let m = p.default.getChannel(n);
                if ((null == m ? void 0 : m.type) === I.ChannelTypes.GUILD_STORE || (null == m ? void 0 : m.type) != null && I.ChannelTypesSets.GUILD_THREADS_ONLY.has(m.type)) {
                    S && N.log("Skipping fetch because channel is a forum/store");
                    return
                }
                let T = f.default.getOrCreate(n);
                null != T.jumpTargetId && null == l && (T = T.mutate({
                    jumpTargetId: null,
                    jumped: !1,
                    jumpType: d.JumpTypes.ANIMATED
                }), f.default.commit(T)), null != T.focusTargetId && null == l && (T = T.mutate({
                    focusTargetId: null
                }), f.default.commit(T));
                let A = s || c;
                if (!i || g.default.isConnected() || T.loadingMore ? T.loadingMore || T.ready && !T.cached ? null != l ? A = !0 : S && N.log("Skipping fetch because no other conditions matched") : null == t || null != h.default.getGuild(t) ? A = !0 : S && N.log("Skipping fetch we are connected and have loaded messages") : A = !0, A) {
                    if (f.default.commit(T.mutate({
                            loadingMore: !0
                        })), null != l) o.default.jumpToMessage({
                        channelId: n,
                        messageId: l,
                        flash: !0,
                        isPreload: i,
                        skipLocalFetch: E,
                        jumpType: u
                    });
                    else if ((null == m ? void 0 : m.isThread()) && function(e) {
                            if (_.default.hasOpenedThread(e)) return !1;
                            if (null == a) {
                                var t;
                                a = null !== (t = r.default.get(D, {})) && void 0 !== t ? t : {}
                            }
                            if (e in a) return !1;
                            a[e] = Date.now();
                            let n = Date.now() - 7776e6;
                            for (let e in a) a[e] < n && delete a[e];
                            return r.default.set(D, a), !0
                        }(n)) N.log("Jumping to start of thread ".concat(m.id)), o.default.fetchMessages({
                        channelId: n,
                        limit: I.MAX_MESSAGES_PER_CHANNEL,
                        jump: {
                            messageId: n,
                            flash: !1
                        },
                        isPreload: i,
                        skipLocalFetch: E
                    });
                    else if ((null == m ? void 0 : m.isThread()) && _.default.hasTrackedUnread(m.id) && !T.ready) {
                        let e = _.default.getTrackedAckMessageId(m.id);
                        N.log("Jumping to most recent message in thread ".concat(m.id, " - ").concat(e)), o.default.fetchMessages({
                            channelId: n,
                            limit: I.MAX_MESSAGES_PER_CHANNEL,
                            jump: {
                                messageId: e,
                                flash: !1,
                                offset: 1
                            },
                            isPreload: i,
                            skipLocalFetch: E
                        })
                    } else o.default.fetchMessages({
                        channelId: n,
                        limit: I.MAX_MESSAGES_PER_CHANNEL,
                        isPreload: i,
                        skipLocalFetch: E,
                        jump: {
                            isHighlight: c,
                            jumpType: c ? d.JumpTypes.INSTANT : d.JumpTypes.ANIMATED
                        }
                    })
                }
            }
            let D = "viewedThreadIds";

            function y() {
                let e = T.default.getChannelId();
                if (null != e) {
                    let n = p.default.getChannel(e);
                    if (null != n) {
                        var t;
                        let e = (0, l.matchPath)(location.pathname, {
                            path: I.Routes.CHANNEL(":guild", ":channel", ":message"),
                            exact: !0
                        });
                        M({
                            guildId: n.getGuildId(),
                            channelId: n.id,
                            messageId: null == e ? void 0 : null === (t = e.params) || void 0 === t ? void 0 : t.message
                        }), b(n.getGuildId(), n.id)
                    }
                }
            }

            function L() {
                let {
                    isPreload: e,
                    skipLocalFetch: t,
                    logFailures: n
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = T.default.getChannelId();
                if (null != a) {
                    let l = p.default.getChannel(a);
                    null != l ? ((0, S.isTextChannel)(l.type) ? M({
                        guildId: l.getGuildId(),
                        channelId: l.id,
                        isPreload: e,
                        skipLocalFetch: t,
                        logFailures: n
                    }) : n && N.log("Skipping fetch because the selected channel is not a text channel"), b(l.getGuildId(), l.id)) : n && N.log("Skipping fetch because channel is null")
                } else n && N.log("Skipping fetch because there is no selected channel")
            }

            function R(e) {
                let {
                    guildId: t,
                    channelId: n,
                    messageId: a,
                    jumpType: l
                } = e;
                M({
                    guildId: t,
                    channelId: n,
                    messageId: a,
                    jumpType: l
                }), b(t, n)
            }

            function O(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                M({
                    guildId: t,
                    channelId: n
                })
            }

            function b(e, t) {
                let n = m.default.getCurrentSidebarChannelId(t);
                if (null == n) return;
                let a = m.default.getCurrentSidebarMessageId(t);
                M({
                    guildId: e,
                    channelId: n,
                    messageId: a
                })
            }

            function P() {
                let e = T.default.getChannelId(),
                    t = A.default.getGuildId();
                if (null == t || null == e) return;
                let n = m.default.getSidebarState(e);
                (null == n ? void 0 : n.type) !== E.SidebarType.VIEW_CHANNEL && b(t, e)
            }

            function U(e) {
                let {
                    guildId: t,
                    channelId: n,
                    context: a,
                    isHighlight: l
                } = e;
                a === I.CURRENT_APP_CONTEXT && (M({
                    guildId: t,
                    channelId: n,
                    isHighlight: l
                }), b(t, n))
            }

            function x(e) {
                let {
                    channel: t,
                    messageId: n
                } = e, a = t.guild_id;
                null != a && T.default.getChannelId(a) === t.id && M({
                    guildId: a,
                    channelId: t.id,
                    messageId: n
                })
            }

            function w(e) {
                let {
                    channelId: t
                } = e;
                o.default.fetchMessages({
                    channelId: t,
                    limit: I.MAX_MESSAGES_PER_CHANNEL
                })
            }

            function B(e) {
                let {
                    response: t
                } = e;
                if (null == t || null == t.body) return null;
                if (t.body.code === I.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
                    let e = t.body.retry_after;
                    null != e && u.default.show({
                        title: v.default.Messages.RATE_LIMITED,
                        body: v.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
                            retryAfterMinutes: Math.ceil(e / 60)
                        })
                    })
                }
            }
            let F = {};

            function G(e) {
                var t;
                let {
                    channelId: n,
                    jump: a,
                    isStale: l,
                    isPreview: s = !1
                } = e;
                if (s) return;
                let r = null !== (t = F[n]) && void 0 !== t ? t : 0;
                if (Date.now() - r < 1e4) return;
                F[n] = Date.now();
                let i = T.default.getChannelId(),
                    u = m.default.getCurrentSidebarChannelId(i),
                    d = n === i || n === u;
                l && g.default.isConnected() && d && o.default.fetchMessages({
                    channelId: n,
                    limit: I.MAX_MESSAGES_PER_CHANNEL,
                    jump: a
                })
            }

            function V(e) {
                let {
                    channelId: t,
                    messageRecord: n
                } = e;
                null != n && i.default.dispatch({
                    type: "MESSAGE_SEND_FAILED",
                    channelId: t,
                    messageId: n.id
                })
            }

            function j(e) {
                let {
                    state: t
                } = e;
                if ("active" !== t) return !1;
                let n = T.default.getChannelId();
                if (null == n) return !1;
                o.default.fetchNewLocalMessages(n, I.MAX_MESSAGES_PER_CHANNEL)
            }
            class k extends c.default {
                _initialize() {
                    i.default.subscribe("CONNECTION_OPEN", y)
                }
                _terminate() {
                    i.default.unsubscribe("CONNECTION_OPEN", y)
                }
                constructor(...e) {
                    super(...e), this.fetchMessages = M, this.loadSelectedChannelIfNecessary = L, this.stores = new Map().set(m.default, P), this.actions = {
                        APP_STATE_UPDATE: j,
                        OVERLAY_INITIALIZE: y,
                        CHANNEL_SELECT: R,
                        VOICE_CHANNEL_SELECT: O,
                        THREAD_CREATE: x,
                        THREAD_LIST_SYNC: () => L(),
                        CHANNEL_CREATE: x,
                        CHANNEL_PRELOAD: U,
                        THREAD_CREATE_LOCAL: w,
                        GUILD_CREATE: () => L(),
                        MESSAGE_END_EDIT: B,
                        LOAD_MESSAGES_SUCCESS: G,
                        UPLOAD_FAIL: V,
                        CHANNEL_DELETE: () => L(),
                        THREAD_DELETE: () => L()
                    }
                }
            }
            var H = new k
        },
        553257: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                experiment: function() {
                    return l
                },
                usePomeloEligibility: function() {
                    return s
                },
                getPomeloEligibility: function() {
                    return r
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                    kind: "user",
                    label: "Pomelo",
                    id: "2023-03_pomelo",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                s = () => {
                    let {
                        enabled: e
                    } = l.useExperiment({
                        location: "faf26d_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                },
                r = () => {
                    let {
                        enabled: e
                    } = l.getCurrentConfig({
                        location: "faf26d_2"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                }
        },
        567469: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useStageParticipants: function() {
                    return i
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
            });
            var a = n("446674"),
                l = n("334572"),
                s = n("488464"),
                r = n("998716");

            function i(e, t) {
                let [n] = (0, a.useStateFromStores)([s.default], () => [s.default.getMutableParticipants(e, t), s.default.getParticipantsVersion(e)], [e, t], l.isVersionEqual);
                return n
            }

            function u(e, t) {
                return (0, a.useStateFromStores)([s.default], () => s.default.getParticipantCount(e, t), [e, t])
            }

            function o(e) {
                let [t] = (0, a.useStateFromStores)([s.default], () => {
                    let t = s.default.getMutableRequestToSpeakParticipants(e);
                    return [t, s.default.getRequestToSpeakParticipantsVersion(e)]
                }, [e], l.isVersionEqual);
                return t
            }

            function d(e) {
                return (0, a.useStateFromStores)([s.default], () => {
                    let t = s.default.getMutableParticipants(e, r.StageChannelParticipantNamedIndex.SPEAKER),
                        n = t.filter(e => e.type === r.StageChannelParticipantTypes.VOICE);
                    return n.length
                }, [e])
            }
        },
        924872: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShowStageMusicMuteButton: function() {
                    return _
                },
                shouldShowStageMusicMuteButton: function() {
                    return T
                },
                default: function() {
                    return I
                }
            });
            var a = n("446674"),
                l = n("689988"),
                s = n("42203"),
                r = n("42887"),
                i = n("18494"),
                u = n("800762"),
                o = n("709681"),
                d = n("488464"),
                c = n("567469"),
                f = n("998716"),
                g = n("834052"),
                E = n("274438");
            let S = e => e / 400,
                m = !1,
                p = (0, o.createSound)("stage_waiting", "stage_waiting", S(r.default.getOutputVolume()));

            function h() {
                let e = i.default.getVoiceChannelId();
                if (null == e) {
                    p.stop(), m = !1;
                    return
                }
                let t = s.default.getChannel(e);
                if (!(null == t ? void 0 : t.isGuildStageVoice())) {
                    p.stop(), m = !1;
                    return
                }
                let n = r.default.isSelfDeaf();
                if (n) {
                    p.stop(), m = !1;
                    return
                }
                let a = E.default.shouldPlay();
                if (a) {
                    p.volume = S(r.default.getOutputVolume()), p.loop(), m = !0;
                    return
                }
                let l = g.default.isLive(e);
                if (l) {
                    p.stop(), m = !1;
                    return
                }
                let o = E.default.isMuted();
                if (o) {
                    p.pause(), m = !1;
                    return
                }
                let d = null != Object.values(u.default.getVoiceStatesForChannel(e)).find(e => !e.suppress && !e.isVoiceMuted());
                d || m ? d && (p.pause(), m = !1) : (p.volume = S(r.default.getOutputVolume()), p.loop(), m = !0)
            }

            function _(e) {
                let t = (0, a.useStateFromStores)([i.default], () => i.default.getVoiceChannelId() === e),
                    n = (0, c.useStageParticipants)(e, f.StageChannelParticipantNamedIndex.SPEAKER),
                    l = null != n.find(e => !e.voiceState.isVoiceMuted()),
                    s = (0, a.useStateFromStores)([g.default], () => g.default.getStageInstanceByChannel(e));
                return t && null == s && !l
            }

            function T(e) {
                let t = i.default.getVoiceChannelId() === e,
                    n = d.default.getMutableParticipants(e, f.StageChannelParticipantNamedIndex.SPEAKER),
                    a = null != n.find(e => !e.voiceState.isVoiceMuted()),
                    l = g.default.getStageInstanceByChannel(e);
                return t && null == l && !a
            }
            class A extends l.default {
                handleVoiceChannelSelect(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null != t) {
                        let e = s.default.getChannel(t);
                        (null == e ? void 0 : e.isGuildStageVoice()) ? h(): (p.stop(), m = !1)
                    } else p.stop(), m = !1
                }
                handleLogout() {
                    p.stop(), m = !1
                }
                handlePlay(e) {
                    let {
                        play: t
                    } = e;
                    t ? h() : (p.pause(), m = !1)
                }
                handleMute(e) {
                    let {
                        muted: t
                    } = e;
                    t ? (p.pause(), m = !1) : h()
                }
                handleVoiceStateUpdates() {
                    h()
                }
                handleSetOutputVolume(e) {
                    let {
                        volume: t
                    } = e;
                    p.volume = S(t)
                }
                handleToggleSelfDeaf() {
                    h()
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
            var I = new A
        },
        274438: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("446674"),
                l = n("913144");
            let s = !1,
                r = !1;
            class i extends a.default.DeviceSettingsStore {
                initialize(e) {
                    null != e && (s = e)
                }
                isMuted() {
                    return s
                }
                shouldPlay() {
                    return r
                }
                getUserAgnosticState() {
                    return s
                }
            }
            i.displayName = "StageMusicStore", i.persistKey = "StageMusicStore";
            var u = new i(l.default, {
                STAGE_MUSIC_MUTE: function(e) {
                    let {
                        muted: t
                    } = e;
                    s = t, r = !1
                },
                STAGE_MUSIC_PLAY: function(e) {
                    let {
                        play: t
                    } = e;
                    r = t
                },
                VOICE_CHANNEL_SELECT: function() {
                    r = !1
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
            var l = n("364082"),
                s = e => {
                    let {
                        children: t,
                        shouldAnimate: n
                    } = e;
                    return n ? (0, a.jsx)("div", {
                        className: l.outerContainer,
                        children: (0, a.jsx)("div", {
                            className: l.innerContainer,
                            children: t
                        })
                    }) : t
                }
        },
        928741: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("819855"),
                r = n("21121"),
                i = n("161778"),
                u = n("168973"),
                o = n("559980");

            function d(e) {
                let {
                    children: t
                } = e, n = (0, l.useStateFromStores)([i.default], () => i.default.theme), d = (0, l.useStateFromStores)([u.default], () => u.default.useAMOLEDTheme === o.AMOLEDThemeState.ON), c = (0, r.useInMainTabsExperiment)(), f = 0;
                return d && (f = (0, s.setThemeFlag)(f, s.ThemeContextFlags.MOBILE_LEGACY_AMOLED_MODE_ENABLED)), c && (f = (0, s.setThemeFlag)(f, s.ThemeContextFlags.MOBILE_REDESIGN_ENABLED)), (0, a.jsx)(s.RootThemeContextProvider, {
                    theme: n,
                    flags: f,
                    children: t
                })
            }
        },
        289180: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                },
                getVideoPermission: function() {
                    return u
                }
            });
            var a = n("446674"),
                l = n("223913"),
                s = n("305961"),
                r = n("957255");

            function i(e) {
                let t = (0, a.useStateFromStores)([s.default, r.default], () => e.isPrivate() || (0, l.canStreamInChannel)(e, s.default, r.default, !1), [e]);
                return t
            }

            function u(e) {
                return e.isPrivate() || (0, l.canStreamInChannel)(e, s.default, r.default, !1)
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
                l = n("782340");

            function s(e) {
                let {
                    enabled: t,
                    join: n,
                    channel: s,
                    cameraUnavailable: r,
                    hasPermission: i,
                    channelLimit: u = -1,
                    channelLimitReached: o = !1
                } = e, d = t ? l.default.Messages.CAMERA_OFF : l.default.Messages.CAMERA_ON;
                if (n) {
                    let e = (null == s ? void 0 : s.isManaged()) || !(null == s ? void 0 : s.isPrivate());
                    d = e ? l.default.Messages.CONNECT_TO_VIDEO : l.default.Messages.JOIN_VIDEO_CALL
                }
                return r && (d = l.default.Messages.CAMERA_UNAVAILABLE), !i && (d = l.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE), o && !t && (d = (null == s ? void 0 : s.isGuildStageVoice()) ? u >= a.MAX_STAGE_VIDEO_USER_LIMIT_TIER3 ? l.default.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED_MAX : l.default.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED : l.default.Messages.CAMERA_DISABLED_LIMIT_REACHED.format({
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
                l = n("884691"),
                s = n("414456"),
                r = n.n(s),
                i = n("799869"),
                u = l.forwardRef(function(e, t) {
                    let {
                        children: n,
                        className: l,
                        style: s,
                        noBorder: u = !1,
                        participantUserId: o
                    } = e;
                    return (0, a.jsx)("div", {
                        className: r(l, i.tile, {
                            [i.noBorder]: u
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
            var l = n("414456"),
                s = n.n(l),
                r = n("77078"),
                i = n("796863");

            function u(e) {
                let {
                    children: t,
                    onClick: n,
                    className: l,
                    tooltip: u
                } = e;
                return (0, a.jsx)(r.Tooltip, {
                    text: u,
                    children: e => {
                        let {
                            onClick: u,
                            ...o
                        } = e;
                        return (0, a.jsx)(r.Button, {
                            ...o,
                            onClick: e => {
                                null == n || n(e), null == u || u()
                            },
                            innerClassName: i.buttonReset,
                            color: s(i.cta, l),
                            size: r.Button.Sizes.MIN,
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
            var l = n("414456"),
                s = n.n(l),
                r = n("77078"),
                i = n("145131"),
                u = n("929422");

            function o(e) {
                return e < 400 ? "small" : e < 1e3 ? "medium" : "large"
            }

            function d(e) {
                let {
                    onCTAClick: t,
                    callToAction: n,
                    header: l,
                    description: o,
                    size: d,
                    className: c,
                    artURL: f,
                    noArt: g = !1,
                    selected: E = !1
                } = e;
                return (0, a.jsxs)(i.default, {
                    className: c,
                    justify: i.default.Justify.CENTER,
                    align: i.default.Align.CENTER,
                    direction: i.default.Direction.VERTICAL,
                    style: {
                        padding: 4
                    },
                    children: [!g && null != f && (0, a.jsx)("div", {
                        className: s(u.art, u[d]),
                        style: {
                            backgroundImage: "url(".concat(f, ")")
                        }
                    }), null != l ? (0, a.jsx)(r.Text, {
                        color: "none",
                        variant: "text-md/semibold",
                        className: u.header,
                        children: l
                    }) : null, null != o ? (0, a.jsx)(r.Text, {
                        color: "none",
                        className: u.description,
                        variant: "text-sm/medium",
                        children: o
                    }) : null, E || null == n ? null : (0, a.jsx)(r.Button, {
                        className: u.outerButton,
                        size: r.Button.Sizes.NONE,
                        color: r.Button.Colors.WHITE,
                        look: r.Button.Looks.BLANK,
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
                    return I
                },
                default: function() {
                    return C
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                r = n("901582"),
                i = n("191145"),
                u = n("976074"),
                o = n("856343"),
                d = n("16916"),
                c = n("373469"),
                f = n("42887"),
                g = n("697218"),
                E = n("394832"),
                S = n("985622"),
                m = n("356553"),
                p = n("387111"),
                h = n("773336"),
                _ = n("49111"),
                T = n("353927"),
                A = n("782340");

            function I(e, t, n) {
                let a = (0, l.useStateFromStores)([i.default], () => i.default.getSelectedParticipantId(e.id)),
                    s = (0, l.useStateFromStores)([c.default], () => null != a ? c.default.getActiveStreamForStreamKey(a) : null, [a]),
                    r = (0, l.useStateFromStoresArray)([g.default], () => {
                        let a = n.filter(e => e.ownerId !== (null == t ? void 0 : t.id)).map(t => ({
                            stream: t,
                            username: p.default.getName(e.getGuildId(), e.id, g.default.getUser(t.ownerId))
                        }));
                        return 1 === a.length && a[0].stream.ownerId === (null == s ? void 0 : s.ownerId) ? [] : a
                    }, [e, s, n, t]);
                return r
            }

            function C(e) {
                var t;
                let {
                    channel: n,
                    currentUser: l,
                    activeStreams: i,
                    hideSelfOptions: c = !1,
                    showReportOption: g = !1,
                    handleGoLive: p,
                    onClose: C,
                    onSelect: v,
                    appContext: N = _.AppContext.APP
                } = e, M = f.default.supports(T.Features.DESKTOP_CAPTURE_APPLICATIONS), D = null !== (t = i.find(e => e.ownerId === (null == l ? void 0 : l.id))) && void 0 !== t ? t : null, y = I(n, l, i), L = (0, o.default)(D, N), R = (0, u.default)(D, N, _.NOOP_NULL), O = null == D ? (0, a.jsx)(s.MenuItem, {
                    id: "share-your-screen",
                    label: A.default.Messages.SHARE_YOUR_SCREEN,
                    icon: E.default,
                    action: p
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [h.isPlatformEmbedded ? (0, a.jsx)(s.MenuItem, {
                        id: "stream-settings",
                        label: A.default.Messages.SCREENSHARE_STREAM_QUALITY,
                        children: L
                    }) : null, g ? R : null, M ? (0, a.jsx)(s.MenuItem, {
                        id: "change-windows",
                        label: A.default.Messages.SCREENSHARE_CHANGE_WINDOWS,
                        icon: E.default,
                        action: p
                    }) : null, (0, a.jsx)(s.MenuItem, {
                        id: "stop-streaming",
                        label: A.default.Messages.STOP_STREAMING,
                        icon: S.default,
                        action: () => (0, d.default)(D)
                    })]
                });
                return (0, a.jsx)(r.default, {
                    section: _.AnalyticsSections.CONTEXT_MENU,
                    children: (0, a.jsxs)(s.Menu, {
                        onSelect: v,
                        navId: "manage-streams",
                        onClose: C,
                        "aria-label": null != D ? A.default.Messages.STOP_STREAMING : A.default.Messages.SHARE_YOUR_SCREEN,
                        children: [(0, a.jsx)(s.MenuGroup, {
                            children: y.map(e => {
                                let {
                                    stream: t,
                                    username: n
                                } = e;
                                return (0, a.jsx)(s.MenuItem, {
                                    id: t.ownerId,
                                    label: A.default.Messages.STOP_WATCHING_USER.format({
                                        username: n
                                    }),
                                    icon: m.default,
                                    action: () => (0, d.default)(t)
                                }, "manage-stream-menu".concat(t.ownerId))
                            })
                        }), c ? null : O]
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
                l = n("884691"),
                s = n("446674"),
                r = n("990766"),
                i = n("374014"),
                u = n("42203"),
                o = n("607391"),
                d = n("782340");
            let c = n("729861");

            function f(e) {
                let {
                    stream: t,
                    width: n,
                    noArt: f = !1,
                    selected: g = !1
                } = e, E = (0, s.useStateFromStores)([u.default], () => u.default.getChannel(t.channelId));
                return l.useEffect(() => {
                    (null == E ? void 0 : E.isGuildStageVoice()) && (0, r.closeStream)((0, i.encodeStreamKey)(t), !1)
                }, []), (0, a.jsx)(o.default, {
                    artURL: c,
                    noArt: f,
                    selected: g,
                    size: (0, o.getSizeForWidth)(n),
                    header: d.default.Messages.STREAM_ENDED,
                    onCTAClick: () => (0, r.closeStream)((0, i.encodeStreamKey)(t)),
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
            var l = n("990766"),
                s = n("374014"),
                r = n("701909"),
                i = n("607391"),
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
                return (0, a.jsx)(i.default, {
                    artURL: d,
                    header: o.default.Messages.STREAM_FAILED_TITLE,
                    size: (0, i.getSizeForWidth)(n),
                    noArt: f,
                    selected: c,
                    description: o.default.Messages.STREAM_FAILED_DESCRIPTION.format({
                        helpUrl: r.default.getArticleURL(u.HelpdeskArticles.STREAM_FAILED)
                    }),
                    onCTAClick: () => (0, l.closeStream)((0, s.encodeStreamKey)(t)),
                    callToAction: o.default.Messages.CLOSE_STREAM
                })
            }
        },
        211019: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                r = n("446674"),
                i = n("77078"),
                u = n("990766"),
                o = n("373469"),
                d = n("271938"),
                c = n("30672"),
                f = n("100844"),
                g = n("607391"),
                E = n("782340"),
                S = n("996810");
            let m = n("588281");

            function p(e) {
                let {
                    participant: t,
                    width: n,
                    noArt: l = !1,
                    selected: p = !1
                } = e, h = n < 195, _ = (0, r.useStateFromStores)([o.default, d.default], () => o.default.getAllActiveStreams().some(e => {
                    let {
                        ownerId: t
                    } = e;
                    return t !== d.default.getId()
                }));
                return (0, a.jsx)("div", {
                    className: s(S.content, S.streamHidden, {
                        [S.small]: h
                    }),
                    children: (0, a.jsx)(g.default, {
                        className: S.streamHiddenEmptyState,
                        artURL: m,
                        noArt: l,
                        selected: p,
                        size: (0, g.getSizeForWidth)(n),
                        header: h ? null : E.default.Messages.STREAM_HIDDEN,
                        description: p ? null : (0, a.jsxs)("div", {
                            className: s(S.streamHiddenCTA, {
                                [S.largePaddingTop]: !h
                            }),
                            children: [(0, a.jsx)(f.CallTileCTA, {
                                isSmall: h,
                                children: (0, a.jsx)(i.Text, {
                                    variant: h ? "text-sm/semibold" : "text-md/semibold",
                                    color: "none",
                                    children: n < 175 ? E.default.Messages.WATCH : E.default.Messages.WATCH_STREAM
                                })
                            }), _ ? (0, a.jsx)(f.CallTileCTA, {
                                className: S.addCTA,
                                tooltip: E.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
                                onClick: e => {
                                    e.stopPropagation(), (0, u.watchStream)(t.stream, {
                                        forceMultiple: !0
                                    })
                                },
                                isSmall: h,
                                children: (0, a.jsx)(c.default, {
                                    className: S.addStreamIcon
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
            var l = n("77078"),
                s = n("42887"),
                r = n("353927"),
                i = n("782340");

            function u(e) {
                s.default.supports(r.Features.VIDEO) ? (0, l.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("861054").then(n.bind(n, "861054"));
                    return n => (0, a.jsx)(t, {
                        ...n,
                        header: i.default.Messages.CAMERA_UNAVAILABLE,
                        body: i.default.Messages.CAMERA_NO_DEVICE,
                        confirmText: i.default.Messages.OKAY,
                        onConfirm: e
                    })
                }) : (0, l.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("861054").then(n.bind(n, "861054"));
                    return s => (0, a.jsx)(t, {
                        ...s,
                        header: i.default.Messages.VIDEO_UNSUPPORTED_BROWSER_TITLE,
                        body: i.default.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY,
                        confirmText: i.default.Messages.DOWNLOAD_APP,
                        onConfirm: () => {
                            null == e || e(), (0, l.openModalLazy)(async () => {
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
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("782340");

            function r() {
                function e() {
                    (0, l.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("649486").then(n.bind(n, "649486"));
                        return t => (0, a.jsx)(e, {
                            source: "Screenshare Unavailable",
                            ...t
                        })
                    })
                }(0, l.openModalLazy)(async () => {
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
                    return S
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("990766"),
                r = n("773356"),
                i = n("349171"),
                u = n("292687"),
                o = n("305961"),
                d = n("42887"),
                c = n("697218"),
                f = n("773336"),
                g = n("49111"),
                E = n("686298");

            function S(e, t, S) {
                let m = u.default.getWindowOpen(g.PopoutWindowKeys.CHANNEL_CALL_POPOUT) ? g.PopoutWindowKeys.CHANNEL_CALL_POPOUT : null;
                if ((0, i.default)(m), f.isPlatformEmbedded)(0, l.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("451863").then(n.bind(n, "451863"));
                    return n => (0, a.jsx)(t, {
                        ...n,
                        guildId: e,
                        analyticsLocation: S
                    })
                });
                else {
                    var p;
                    let n = (0, r.default)(E.ApplicationStreamPresets.PRESET_CUSTOM, E.ApplicationStreamResolutions.RESOLUTION_1080, E.ApplicationStreamFPS.FPS_30, c.default.getCurrentUser(), null === (p = o.default.getGuild(e)) || void 0 === p ? void 0 : p.premiumTier) ? {
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
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("607391"),
                s = n("145131"),
                r = n("191933");

            function i(e) {
                let {
                    mainText: t,
                    supportingText: n,
                    children: i,
                    size: u
                } = e;
                return (0, a.jsxs)(s.default, {
                    className: r.root,
                    justify: s.default.Justify.CENTER,
                    align: s.default.Align.CENTER,
                    direction: s.default.Direction.VERTICAL,
                    children: [(0, a.jsx)(l.default, {
                        header: t,
                        description: n,
                        size: u
                    }), i]
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
            var l = n("550766"),
                s = n("893011"),
                r = n("981913"),
                i = n("782340");

            function u(e) {
                let {
                    channelId: t,
                    applicationId: n,
                    centerButton: u = !1,
                    ...o
                } = e, d = u ? r.CenterControlButton : r.default;
                return (0, a.jsx)(d, {
                    ...o,
                    onClick: () => {
                        (0, l.stopEmbeddedActivity)({
                            channelId: t,
                            applicationId: n
                        })
                    },
                    iconComponent: s.default,
                    label: i.default.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY
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
            var l = n("987317"),
                s = n("713726"),
                r = n("754493"),
                i = n("293137"),
                u = n("981913"),
                o = n("782340");

            function d(e) {
                let {
                    centerButton: t = !1,
                    channel: n,
                    onClick: d,
                    ...c
                } = e, f = t ? u.CenterControlButton : u.default, g = n.isBroadcastChannel(), E = (0, r.useIsBroadcastingInChannel)(n.id);
                return (0, a.jsx)(f, {
                    ...c,
                    onClick: () => {
                        E && (0, s.stopBroadcast)(), l.default.disconnect(), null == d || d()
                    },
                    iconComponent: i.default,
                    label: E ? o.default.Messages.STOP_BROADCASTING : g ? o.default.Messages.LEAVE_BROADCAST : o.default.Messages.DISCONNECT_SELF
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
            var l = n("414456"),
                s = n.n(l),
                r = n("758710"),
                i = n("981913"),
                u = n("782340"),
                o = n("407735");

            function d(e) {
                let {
                    popoutOpen: t,
                    onClosePopout: n,
                    onOpenPopout: l,
                    ...d
                } = e, c = t ? u.default.Messages.POPOUT_RETURN : u.default.Messages.POPOUT_PLAYER;
                return (0, a.jsx)(i.default, {
                    label: c,
                    onClick: t ? n : l,
                    iconComponent: r.default,
                    iconClassName: s({
                        [o.popIn]: t
                    }),
                    ...d
                })
            }
        },
        954519: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("985622"),
                s = n("356553"),
                r = n("981913"),
                i = n("782340");

            function u(e) {
                let {
                    isSelfStream: t,
                    centerButton: n = !1,
                    ...u
                } = e, o = n ? r.CenterControlButton : r.default;
                return (0, a.jsx)(o, {
                    label: t ? i.default.Messages.STOP_STREAMING : i.default.Messages.STOP_WATCHING,
                    iconComponent: t ? l.default : s.default,
                    isActive: !0,
                    ...u
                })
            }
        },
        109489: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                r = n.n(s),
                i = n("255397"),
                u = n("256170"),
                o = n("155207"),
                d = n("981913"),
                c = n("782340"),
                f = n("789749");

            function g(e) {
                let {
                    className: t,
                    isVertical: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: f.iconContainer,
                    children: [(0, a.jsx)(u.default, {
                        className: r(n ? f.upCaret : f.leftCaret, t)
                    }), (0, a.jsx)(o.default, {
                        className: r(f.members, t)
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
                        className: r(n ? f.downCaret : f.rightCaret, t)
                    }), n && (0, a.jsx)(o.default, {
                        className: r(f.members, t)
                    })]
                })
            }

            function S(e) {
                let {
                    channelId: t,
                    className: n,
                    isParticipantsOpen: s,
                    isVertical: u = !1,
                    hideTooltip: o = !1
                } = e, S = l.useCallback(e => {
                    let {
                        className: t
                    } = e;
                    return s ? (0, a.jsx)(E, {
                        className: t,
                        isVertical: u
                    }) : (0, a.jsx)(g, {
                        className: t,
                        isVertical: u
                    })
                }, [s, u]);
                return (0, a.jsx)(d.default, {
                    label: s ? c.default.Messages.VIDEO_CALL_HIDE_MEMBERS : c.default.Messages.VIDEO_CALL_SHOW_MEMBERS,
                    className: r(f.participantsButton, n),
                    onClick: function() {
                        i.default.toggleParticipants(t, !s)
                    },
                    iconComponent: S,
                    shouldShowTooltip: !o
                })
            }
        },
        116439: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VideoButtonWrapper: function() {
                    return c
                },
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                r = n("244201"),
                i = n("289656"),
                u = n("437825"),
                o = n("981913"),
                d = n("911360");

            function c(e) {
                let t = (0, i.getVideoButtonLabel)(e),
                    {
                        enabled: n,
                        cameraUnavailable: l,
                        onChange: s,
                        onCameraUnavailable: o,
                        hasPermission: d,
                        children: c,
                        channelLimitReached: f = !1
                    } = e,
                    g = (0, r.useAppContext)(),
                    E = l ? () => o() : () => s(!e.enabled, g);
                return (0, a.jsx)(a.Fragment, {
                    children: c({
                        onClick: E,
                        active: n,
                        disabled: !n && (!d || f),
                        iconComponent: u.default,
                        label: t,
                        unavailable: l
                    })
                })
            }

            function f(e) {
                let {
                    enabled: t,
                    join: n,
                    channel: l,
                    onChange: r,
                    onCameraUnavailable: i,
                    cameraUnavailable: u,
                    hasPermission: f,
                    className: g,
                    channelLimitReached: E,
                    channelLimit: S,
                    centerButton: m = !1,
                    onPopoutClick: p,
                    ...h
                } = e, _ = m ? o.CenterControlButton : o.default;
                return (0, a.jsx)(c, {
                    enabled: t,
                    join: n,
                    channel: l,
                    onChange: r,
                    onCameraUnavailable: i,
                    cameraUnavailable: u,
                    hasPermission: f,
                    channelLimitReached: E,
                    channelLimit: S,
                    children: e => {
                        let {
                            unavailable: n,
                            ...l
                        } = e;
                        return (0, a.jsx)(_, {
                            ...l,
                            ...h,
                            isActive: t,
                            className: s(g, {
                                [d.fauxDisabled]: n
                            }),
                            onPopoutClick: p
                        })
                    }
                })
            }
        },
        385649: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("446674"),
                l = n("913144"),
                s = n("599110"),
                r = n("773336"),
                i = n("49111");
            let u = {
                    desktopType: r.isPlatformEmbedded ? i.DesktopNotificationTypes.ALL : i.DesktopNotificationTypes.NEVER,
                    disableAllSounds: !1,
                    disabledSounds: [],
                    ttsType: i.TTSNotificationTypes.NEVER,
                    disableUnreadBadge: !1,
                    taskbarFlash: !0,
                    notifyMessagesInSelectedChannel: !1
                },
                o = u;

            function d(e, t) {
                !__OVERLAY__ && s.default.track(e, t)
            }

            function c(e) {
                let {
                    desktopType: t
                } = e;
                o.desktopType = t, d(i.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
                    notifications_enabled: t === i.DesktopNotificationTypes.ALL
                })
            }
            class f extends a.default.DeviceSettingsStore {
                initialize(e) {
                    o = {
                        ...u,
                        ...e
                    }
                }
                getUserAgnosticState() {
                    return o
                }
                getDesktopType() {
                    return o.desktopType
                }
                getTTSType() {
                    return o.ttsType
                }
                getDisabledSounds() {
                    return o.disabledSounds
                }
                getDisableAllSounds() {
                    return o.disableAllSounds
                }
                getDisableUnreadBadge() {
                    return o.disableUnreadBadge
                }
                getNotifyMessagesInSelectedChannel() {
                    return o.notifyMessagesInSelectedChannel
                }
                get taskbarFlash() {
                    return o.taskbarFlash
                }
                isSoundDisabled(e) {
                    return o.disableAllSounds || -1 !== o.disabledSounds.indexOf(e)
                }
            }
            f.displayName = "NotificationSettingsStore", f.persistKey = "notifications", f.migrations = [e => {
                let t = {
                    ...e
                };
                return t.disabledSounds = t.disabledSounds || [], t.disableUnreadBadge = t.disableUnreadBadge || !1, t.taskbarFlash = null == t.taskbarFlash || t.taskbarFlash, t.ttsType = t.ttsType || i.TTSNotificationTypes.NEVER, null == t.desktopType && (t.desktopType = r.isPlatformEmbedded ? i.DesktopNotificationTypes.ALL : i.DesktopNotificationTypes.NEVER), t
            }];
            var g = new f(l.default, {
                NOTIFICATIONS_SET_DESKTOP_TYPE: c,
                NOTIFICATIONS_SET_TTS_TYPE: function(e) {
                    let {
                        ttsType: t
                    } = e;
                    o.ttsType = t
                },
                NOTIFICATIONS_SET_DISABLED_SOUNDS: function(e) {
                    let {
                        sounds: t
                    } = e;
                    o.disabledSounds = t
                },
                NOTIFICATIONS_TOGGLE_ALL_DISABLED: function() {
                    o.disableAllSounds = !o.disableAllSounds
                },
                NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
                    let {
                        enabled: t,
                        source: n
                    } = e;
                    d(i.AnalyticEvents.ENABLE_NOTIFICATIONS, {
                        enabled: t === i.NotificationPermissionTypes.ENABLED,
                        source: n
                    }), t === i.NotificationPermissionTypes.BLOCKED ? c({
                        desktopType: i.DesktopNotificationTypes.NEVER
                    }) : t === i.NotificationPermissionTypes.ENABLED && c({
                        desktopType: i.DesktopNotificationTypes.ALL
                    })
                },
                NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: function(e) {
                    let {
                        disableUnreadBadge: t
                    } = e;
                    o.disableUnreadBadge = t
                },
                NOTIFICATIONS_SET_TASKBAR_FLASH: function(e) {
                    let {
                        taskbarFlash: t
                    } = e;
                    o.taskbarFlash = t
                },
                NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: function(e) {
                    let {
                        notify: t
                    } = e;
                    o.notifyMessagesInSelectedChannel = t
                }
            })
        },
        336921: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setupWindow: function() {
                    return i
                }
            });
            var a = n("741148"),
                l = n("563680"),
                s = n("816454"),
                r = n("421804");

            function i(e) {
                let t = e.document,
                    n = (0, s.setupWindowId)(e);

                function i() {
                    (0, r.setCurrentlyInteractingWindowId)(n)
                }

                function u() {
                    setTimeout(() => {
                        (0, r.clearCurrentlyInteractingWindowId)(n)
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
                    }), r.INTERACTION_EVENTS)) t.addEventListener(n, i, !0), t.addEventListener(n, u, !1);
                (0, l.subscribeDocumentToFullScreenChange)(t, function() {
                    (0, a.fullscreenChange)(e)
                }), (0, a.init)(e)
            }
        }
    }
]);
//# sourceMappingURL=69d1490ec35164e8a0de.js.map