(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94839"], {
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
                    return r
                },
                hide: function() {
                    return s
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

            function r(e) {
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
                    return _
                }
            });
            var a = n("920040"),
                l = n("773670"),
                r = n("865768"),
                s = n("64379"),
                i = n("498225"),
                u = n("77078"),
                o = n("272030"),
                d = n("244201"),
                c = n("428958"),
                f = n("161778"),
                g = n("144747"),
                E = n("983782"),
                m = n("659500"),
                h = n("452453"),
                p = n("49111");
            let S = e => {
                let {
                    children: t,
                    close: n,
                    onUnmount: i,
                    rect: o,
                    position: f,
                    align: g,
                    impressionName: m,
                    impressionProperties: h
                } = e, S = l.useRef(null);
                l.useEffect(() => {
                    var e, t;
                    let a = (0, r.findDOMNode)(S.current);
                    if (null == a) return;
                    let l = e => {
                        let t = e.target,
                            a = (0, r.findDOMNode)(S.current);
                        !(null != a && (0, u.referencePortalAwareContains)(a, t)) && (window.getSelection().removeAllRanges(), n())
                    };
                    return null === (e = a.ownerDocument) || void 0 === e || e.addEventListener("click", l, !0), null === (t = a.ownerDocument) || void 0 === t || t.addEventListener("contextmenu", l, !0), () => {
                        var e, t;
                        null === (e = a.ownerDocument) || void 0 === e || e.removeEventListener("click", l, !0), null === (t = a.ownerDocument) || void 0 === t || t.removeEventListener("contextmenu", l, !0)
                    }
                }, [n]);
                let C = l.useRef(i);
                l.useEffect(() => void(C.current = i)), l.useEffect(() => () => {
                    var e;
                    return null === (e = C.current) || void 0 === e ? void 0 : e.call(C)
                }, []), l.useLayoutEffect(() => {
                    var e;
                    null === (e = S.current) || void 0 === e || e.updatePosition()
                }), (0, c.default)({
                    type: s.ImpressionTypes.MENU,
                    name: m,
                    properties: h
                });
                let _ = (0, d.useWindowDispatch)(),
                    T = l.useCallback(() => {
                        _.dispatch(p.ComponentActions.POPOUT_SHOW)
                    }, [_]),
                    A = l.useCallback(() => {
                        _.dispatch(p.ComponentActions.POPOUT_HIDE)
                    }, [_]);
                return (0, a.jsx)(E.AppReferencePositionLayer, {
                    onMount: T,
                    onUnmount: A,
                    reference: () => o,
                    position: null != f ? f : "right",
                    align: null != g ? g : "top",
                    autoInvert: !0,
                    ref: S,
                    nudgeAlignIntoViewport: !0,
                    children: t
                })
            };
            class C extends l.PureComponent {
                componentDidMount() {
                    let {
                        renderLazy: e,
                        renderWindow: t
                    } = this.props;
                    if (t.addEventListener("resize", this.closeResize, !0), m.ComponentDispatch.subscribe(p.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e) {
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
                    e.removeEventListener("resize", this.closeResize, !0), m.ComponentDispatch.unsubscribe(p.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu)
                }
                render() {
                    var e;
                    let {
                        appContext: t,
                        target: n,
                        isOpen: l,
                        theme: r,
                        config: s,
                        rect: i
                    } = this.props, u = null !== (e = this.state.render) && void 0 !== e ? e : this.props.render;
                    return l && null != i && null != s && null != n && null != u && s.context === t ? (0, a.jsx)(S, {
                        rect: i,
                        close: this.close,
                        onUnmount: s.onClose,
                        align: s.align,
                        position: s.position,
                        impressionName: s.impressionName,
                        impressionProperties: s.impressionProperties,
                        children: (e, a) => {
                            let {
                                position: l
                            } = e;
                            return u({
                                className: h.ContextMenuClassName,
                                position: l,
                                theme: r,
                                onHeightUpdate: a,
                                config: s,
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
                } = (0, i.useStateFromStoresObject)([g.default], () => ({
                    contextMenu: g.default.getContextMenu(),
                    version: g.default.version,
                    isOpen: g.default.isOpen()
                })), r = (0, i.useStateFromStores)([f.default], () => f.default.theme), {
                    appContext: s,
                    renderWindow: u
                } = l.useContext(d.default);
                return (0, a.jsx)(C, {
                    appContext: s,
                    renderWindow: u,
                    ...e,
                    isOpen: n,
                    theme: r,
                    closeContextMenu: o.closeContextMenu
                }, t)
            }
        },
        625665: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DoorPremiumIcon: function() {
                    return s
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("912557"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M2 10a9 9 0 0 1 9-9h2a9 9 0 0 1 9 9v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8Zm3.88-5.175A4 4 0 0 0 4 8.217v9.502a1 1 0 0 0 1.243.97l5.713-1.428A1.379 1.379 0 0 0 12 15.924V8.217c0-3.142-3.456-5.057-6.12-3.392ZM10 11a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Zm7.683-2.524c-.235-.635-1.131-.635-1.366 0l-.178.481a2 2 0 0 1-1.182 1.182l-.481.178c-.635.235-.635 1.131 0 1.366l.481.178a2 2 0 0 1 1.182 1.182l.178.481c.235.635 1.131.635 1.366 0l.178-.481a2 2 0 0 1 1.182-1.182l.481-.178c.634-.235.634-1.131 0-1.366l-.481-.178a2 2 0 0 1-1.182-1.182l-.178-.481ZM16 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        739086: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PhoneHangUpIcon: function() {
                    return s
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("912557"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "m21.506 17.596-.14.142a.88.88 0 0 1-.964.195l-4.09-1.7a.987.987 0 0 1-.57-1.17l.732-2.71a5.58 5.58 0 0 0-8.948 0l.697 2.112a.988.988 0 0 1-.468 1.181l-4.131 2.208a.87.87 0 0 1-1.03-.156l-.1-.102a5.184 5.184 0 0 1-.328-6.916c5.1-6.24 14.569-6.24 19.668 0a5.184 5.184 0 0 1-.328 6.916Z",
                        className: i
                    })
                })
            }
        },
        424572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenStopWatchingIcon: function() {
                    return s
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("912557"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M15.293 1.293a1 1 0 0 1 1.414 0L19 3.586l2.293-2.293a1 1 0 1 1 1.414 1.414L20.414 5l2.293 2.293a1 1 0 0 1-1.414 1.414L19 6.414l-2.293 2.293a1 1 0 1 1-1.414-1.414L17.586 5l-2.293-2.293a1 1 0 0 1 0-1.414ZM13.04 2.498C12.996 2.225 12.776 2 12.5 2H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-1.5c0-.276-.225-.496-.498-.541a2.986 2.986 0 0 1-1.623-.838l-.525-.525a.5.5 0 0 0-.708 0l-.525.525A3 3 0 1 1 13.88 5.88l.525-.525a.5.5 0 0 0 0-.708l-.525-.525a2.986 2.986 0 0 1-.838-1.623ZM13.5 20a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-1.5Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        368598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("498225"),
                l = n("77078"),
                r = n("619443"),
                s = n("153498"),
                i = n("116460"),
                u = n("778588"),
                o = n("708169"),
                d = () => {
                    let e = (0, a.useStateFromStores)([u.default], () => u.default.hasLayers()),
                        t = (0, o.useFullScreenLayerStore)(e => e.fullScreenLayers.length > 0),
                        n = (0, s.useIsModalOpen)(),
                        d = (0, l.useModalsStore)(l.hasAnyModalOpen),
                        c = (0, a.useStateFromStores)([r.default], () => r.default.isConnected()),
                        f = (0, a.useStateFromStores)([i.default], () => i.default.isOpen());
                    return e || t || d || n || !c || f
                }
        },
        869586: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BlindID: function() {
                    return s
                }
            });
            var a = n("605250"),
                l = n("992582").Buffer;
            let r = new a.default("BlindID");
            class s {
                async blind(e) {
                    let t = await this.key,
                        n = new BigUint64Array([BigInt(e)]),
                        a = await crypto.subtle.sign("HMAC", t, n.buffer);
                    return s.truncate(a).toString()
                }
                static truncate(e) {
                    let t = new Uint8Array(e);
                    return t.length < 8 ? (r.error("Unexpected byte length ".concat(t.length)), BigInt(0)) : BigInt(t[0]) | BigInt(t[1]) << BigInt(8) | BigInt(t[2]) << BigInt(16) | BigInt(t[3]) << BigInt(24) | BigInt(t[4]) << BigInt(32) | BigInt(t[5]) << BigInt(40) | BigInt(t[6]) << BigInt(48) | BigInt(t[7]) << BigInt(56)
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
            var a = n("307391"),
                l = n("990746"),
                r = n("448993"),
                s = n("42887"),
                i = n("254490"),
                u = n("49671"),
                o = n("49111");
            let d = new a.default("uploadRtcLogFiles");
            async function c(e, t) {
                let n;
                if (null == u.default.fileManager.readLogFiles) throw new r.UploadVoiceDebugLogsError(r.UploadErrorCodes.GENERAL);
                let a = [];
                try {
                    a = (a = await u.default.fileManager.readLogFiles(e)).map(e => (0, i.transformNativeFile)(e, "application/octet-stream"))
                } catch (e) {
                    throw d.error("uploadDebugFiles: read error '".concat(e, "'")), new r.UploadVoiceDebugLogsError(r.UploadErrorCodes.READ)
                }
                if (0 === a.length) throw new r.UploadVoiceDebugLogsError(r.UploadErrorCodes.NO_FILE);
                try {
                    let e = {
                        extraInfo: t,
                        mediaEngineState: s.default.getState()
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
                    if (429 === e.status) throw new r.UploadVoiceDebugLogsError(r.UploadErrorCodes.PROGRESS);
                    throw d.error("Debug log upload error: status: ".concat(e.status, ", message: ").concat(e.message)), new r.UploadVoiceDebugLogsError(r.UploadErrorCodes.UPLOAD)
                }
                let c = a.length + 1;
                if ("success_count" in n.body && n.body.success_count !== c) throw d.error("Debug log upload: stored files ".concat(n.body.success_count, " !== ").concat(c)), new r.UploadVoiceDebugLogsError(r.UploadErrorCodes.GENERAL);
                if ("store_success" in n.body && !n.body.store_success || "id_match" in n.body && !n.body.id_match || "all_success" in n.body && !n.body.all_success) throw d.error("Debug log upload: store_success: ".concat(n.body.store_success, " / ") + "id_match: ".concat(n.body.id_match, " / ") + "all_success: ".concat(n.body.all_success)), new r.UploadVoiceDebugLogsError(r.UploadErrorCodes.GENERAL)
            }
        },
        951212: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canEnableForcedColors: function() {
                    return C
                },
                default: function() {
                    return _
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("77078"),
                r = n("913144"),
                s = n("697218"),
                i = n("599110"),
                u = n("773336"),
                o = n("180748"),
                d = n("206230"),
                c = n("49111");
            let f = window.matchMedia("(prefers-reduced-motion: reduce)"),
                g = window.matchMedia("(prefers-contrast: more)"),
                E = window.matchMedia("(prefers-contrast: less)"),
                m = window.matchMedia("(prefers-color-scheme: dark)"),
                h = window.matchMedia("(prefers-color-scheme: light)"),
                p = window.matchMedia("(forced-colors: active)"),
                S = 5;

            function C() {
                return "windows" === (0, u.getOS)()
            }
            var _ = {
                initBasic() {
                    f.addListener(this.handleSystemPrefersReducedMotionChanged), this.handleSystemPrefersReducedMotionChanged(f), m.addListener(this.handleSystemColorPreferencesChanged), h.addListener(this.handleSystemColorPreferencesChanged), p.addListener(this.handleSystemColorPreferencesChanged), this.handleSystemColorPreferencesChanged(), g.addListener(this.handleSystemPrefersContrastChanged), E.addListener(this.handleSystemPrefersContrastChanged), this.handleSystemPrefersContrastChanged()
                },
                init() {
                    this.initBasic(), r.default.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
                        i.default.track(c.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
                            colorblind_enabled: d.default.colorblindMode
                        })
                    }), r.default.subscribe("ACCESSIBILITY_SET_SATURATION", e => {
                        i.default.track(c.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
                            saturation_level: e.saturation
                        })
                    })
                },
                maybeShowKeyboardNavigationExplainerModal() {
                    S = Math.max(S - 1, 0), ! function() {
                        let e = s.default.getCurrentUser();
                        return null == e || Date.now() - +e.createdAt < 864e5
                    }() && !d.default.keyboardNavigationExplainerModalSeen && 0 === S && (0, l.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("856584").then(n.bind(n, "856584"));
                        return t => (0, a.jsx)(e, {
                            ...t
                        })
                    })
                },
                handleSystemPrefersReducedMotionChanged(e) {
                    r.default.wait(() => {
                        o.systemPrefersReducedMotionChanged(e.matches ? "reduce" : "no-preference")
                    })
                },
                handleSystemColorPreferencesChanged() {
                    let e;
                    m.matches ? e = c.ThemeTypes.DARK : h.matches && (e = c.ThemeTypes.LIGHT);
                    let t = !u.isPlatformEmbedded || C(),
                        n = t && p.matches ? "active" : "none";
                    r.default.wait(() => {
                        o.systemColorPreferencesChanged(e, n)
                    })
                },
                handleSystemPrefersContrastChanged() {
                    let e = "no-preference";
                    g.matches ? e = "more" : E.matches && (e = "less"), r.default.wait(() => {
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
            var a = n("920040"),
                l = n("773670"),
                r = n("117064"),
                s = n("498225"),
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
                (0, r.isElement)(a) && u.default.track(f.AnalyticEvents.KEYBOARD_SHORTCUT_USED, {
                    shortcut_name: "tab_navigation",
                    source_class_list: null != l ? Array.from(l.classList) : [],
                    location_object: a.tagName
                })
            }

            function E(e) {
                let {
                    children: t
                } = e, n = (0, s.useStateFromStoresObject)([d.default], () => ({
                    enabled: d.default.useReducedMotion,
                    rawValue: d.default.rawPrefersReducedMotion
                })), r = (0, s.useStateFromStoresObject)([d.default], () => ({
                    enabled: d.default.useForcedColors,
                    rawValue: d.default.systemForcedColors
                })), u = (0, s.useStateFromStores)([d.default], () => d.default.alwaysShowLinkDecorations), o = l.useMemo(() => ({
                    reducedMotion: n,
                    prefersCrossfades: !1,
                    forcedColors: r,
                    alwaysShowLinkDecorations: u
                }), [n, r, u]);
                return l.useEffect(() => ((0, c.insertAccessibilityLabelElements)(), window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g)), []), (0, a.jsx)(i.AccessibilityPreferencesContext.Provider, {
                    value: o,
                    children: t
                })
            }
        },
        713726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getGameName: function() {
                    return E
                },
                startBroadcastForStream: function() {
                    return m
                },
                stopBroadcast: function() {
                    return h
                },
                fetchBroadcasterBuckets: function() {
                    return S
                },
                maybeFetchBroadcastChannels: function() {
                    return C
                }
            });
            var a = n("990746"),
                l = n("913144"),
                r = n("374014"),
                s = n("766274"),
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

            function m(e, t) {
                if (null == t) return;
                let {
                    canBroadcast: n
                } = c.default.getCurrentConfig({
                    location: "start_broadcast_for_stream"
                }, {
                    autoTrackExposure: !1
                });
                if (!n) return;
                let a = (0, r.decodeStreamKey)(e),
                    {
                        ownerId: s,
                        channelId: f
                    } = a;
                if (null == s || null == f) return;
                let g = i.default.getId();
                if (s !== g) return;
                let m = i.default.getSessionId();
                if (null == m) return;
                let h = u.default.getChannel(f),
                    p = null != h && h.isBroadcastChannel();
                if (null == h || s !== h.ownerId || !p) return;
                let S = function(e) {
                    var t;
                    let n = d.default.getGameForPID(e),
                        a = E(n),
                        l = o.default.getGameByName(a);
                    return null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : "0"
                }(t);
                null != S && ! function(e) {
                    let t = i.default.getId(),
                        n = i.default.getSessionId();
                    null != t && null != n && l.default.dispatch({
                        type: "BROADCAST_START",
                        broadcast: e
                    })
                }({
                    sessionId: m,
                    userId: g,
                    applicationId: S,
                    channelId: h.id,
                    streamKey: e
                })
            }

            function h() {
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
            async function S() {
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
            async function C() {
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
                            n[a] = l.map(e => new s.default(e)).filter(e => e.id !== a)
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
                    return A
                }
            });
            var a, l, r = n("427964"),
                s = n("498225"),
                i = n("810479"),
                u = n("913144"),
                o = n("766274"),
                d = n("271938"),
                c = n("9759"),
                f = n("837374");
            (a = l || (l = {}))[a.INVALID = 0] = "INVALID", a[a.VALID_USER_ONLY = 1] = "VALID_USER_ONLY", a[a.VALID = 2] = "VALID";
            let g = new Set,
                E = new Set,
                m = new Set,
                h = [],
                p = {
                    BROADCASTS_BY_USER_ID: e => "user:".concat(e),
                    BROADCASTS_BY_CHANNEL_ID: e => "channel:".concat(e),
                    BROADCASTS_BY_VALIDITY: e => "validity:".concat(e)
                },
                S = new i.default(function(e) {
                    let t = g.has(e.userId) ? l.VALID_USER_ONLY : l.INVALID;
                    return null != e.viewers && (t = l.VALID), [p.BROADCASTS_BY_USER_ID(e.userId), p.BROADCASTS_BY_CHANNEL_ID(e.channelId), p.BROADCASTS_BY_VALIDITY(t)]
                }, e => e.channelId);

            function C(e, t, n) {
                if (d.default.getId() === e) return !1;
                if (null == t) {
                    let t = S.get(e);
                    return !!(null != t && (0, r.isEqual)(t.source, n)) && (S.delete(e), void 0)
                }!g.has(e) && !E.has(e) && (m.add(e), h = [...m]);
                let a = (0, f.broadcastFromServer)(t, e, n);
                S.set(e, a)
            }

            function _(e) {
                return null != e ? {
                    type: f.BroadcastSourceType.GUILD,
                    guildId: e
                } : {
                    type: f.BroadcastSourceType.GLOBAL
                }
            }
            class T extends s.default.Store {
                getBroadcasts() {
                    return S.values(p.BROADCASTS_BY_VALIDITY(l.VALID))
                }
                getBroadcastsToValidateChannels() {
                    return S.values(p.BROADCASTS_BY_VALIDITY(l.VALID_USER_ONLY))
                }
                getBroadcastByChannel(e) {
                    return S.values(p.BROADCASTS_BY_CHANNEL_ID(e))[0]
                }
                getBroadcastByUser(e) {
                    return S.get(e)
                }
                getUserIdsToValidate() {
                    return h
                }
            }
            T.displayName = "BroadcastingStore";
            var A = new T(u.default, {
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
                        C(t.id, n, _(a))
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
                        C(t.id, n, _(a))
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
                        C(t.id, n, _(a))
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
                            C(t.id, a, _(n))
                        })
                    })
                },
                BROADCASTER_BUCKETS_RECEIVED: function(e) {
                    let {
                        data: t
                    } = e;
                    Object.keys(t).forEach(e => {
                        c.CAN_VIEW_BROADCASTS_BUCKETS.includes(t[e]) ? g.add(e) : E.add(e), m.clear(), h = [...m];
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
                    } = e, a = S.values(p.BROADCASTS_BY_CHANNEL_ID(t))[0];
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
                    } = e, a = S.values(p.BROADCASTS_BY_CHANNEL_ID(t))[0];
                    if (null == a || null == a.viewers) return !1;
                    S.set(a.userId, {
                        ...a,
                        viewers: a.viewers.filter(e => e.id !== n.id)
                    })
                },
                CHANNEL_CREATE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e, a = S.values(p.BROADCASTS_BY_CHANNEL_ID(n.id))[0];
                    if (null == a) return !1;
                    let l = null !== (t = n.rawRecipients) && void 0 !== t ? t : [];
                    S.set(a.userId, {
                        ...a,
                        viewers: l.filter(e => e.id !== a.userId).map(e => new o.default(e))
                    })
                },
                LOGOUT: function() {
                    g.clear(), E.clear(), m.clear(), h = [], S.clear()
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
            var a = n("498225"),
                l = n("271938"),
                r = n("42203"),
                s = n("18494"),
                i = n("101125");

            function u() {
                let e = (0, a.useStateFromStores)([l.default], () => l.default.getId()),
                    t = (0, a.useStateFromStores)([s.default], () => s.default.getVoiceChannelId()),
                    n = (0, a.useStateFromStores)([r.default], () => r.default.getChannel(t), [t]),
                    u = (0, a.useStateFromStores)([i.default], () => null != i.default.getBroadcast()),
                    o = (null == n ? void 0 : n.isOwner(e)) && (null == n ? void 0 : n.isBroadcastChannel()),
                    d = o || null == t;
                return !u && d
            }

            function o() {
                if (null != i.default.getBroadcast()) return !1;
                let e = s.default.getVoiceChannelId();
                if (null == e) return !0;
                let t = l.default.getId(),
                    n = r.default.getChannel(e),
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
            var a = n("498225"),
                l = n("845579");
            n("373469");
            var r = n("271938"),
                s = n("42203");
            n("18494");
            var i = n("101125"),
                u = n("9759");

            function o() {
                let e = (0, a.useStateFromStores)([r.default], () => r.default.getId()),
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
                    n = (0, a.useStateFromStores)([s.default], () => s.default.getChannel(e));
                return null != t && null != n && n.ownerId === t.userId && n.isBroadcastChannel()
            }

            function f(e) {
                let t = r.default.getId(),
                    {
                        canBroadcast: n
                    } = u.default.getCurrentConfig({
                        location: "is_broadcasting_in_channel"
                    }, {
                        autoTrackExposure: !1
                    }),
                    a = i.default.getBroadcast();
                if (!n || null == a || a.userId !== t) return !1;
                let l = s.default.getChannel(e);
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
            var a = n("920040");
            n("773670");
            var l = n("498225"),
                r = n("77078"),
                s = n("244201"),
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
                } = e, n = (0, s.useAppContext)(), E = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUserActiveStream()), m = (0, i.default)(E, n);
                return (0, a.jsxs)(r.Menu, {
                    onSelect: f.NOOP_NULL,
                    navId: "manage-broadcast",
                    onClose: t,
                    "aria-label": g.default.Messages.SETTINGS,
                    children: [d.isPlatformEmbedded && null != E ? (0, a.jsx)(r.MenuItem, {
                        id: "stream-settings",
                        label: g.default.Messages.SCREENSHARE_STREAM_QUALITY,
                        children: m
                    }) : null, (0, a.jsx)(r.MenuItem, {
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
            var a = n("920040");
            n("773670");
            var l = n("77078"),
                r = n("713726"),
                s = n("782340");

            function i(e) {
                (0, l.openModal)(t => (0, a.jsx)(l.ConfirmModal, {
                    header: s.default.Messages.STOP_STREAMING,
                    confirmText: s.default.Messages.STOP_STREAMING,
                    cancelText: s.default.Messages.CANCEL,
                    onConfirm: () => {
                        (0, r.stopBroadcast)(), e()
                    },
                    ...t,
                    children: (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: s.default.Messages.BROADCASTING_STOP_STREAM_CONFIRM_BODY
                    })
                }))
            }

            function u(e) {
                (0, l.openModal)(t => (0, a.jsx)(l.ConfirmModal, {
                    header: s.default.Messages.START_STREAMING,
                    confirmText: s.default.Messages.START_STREAMING,
                    cancelText: s.default.Messages.CANCEL,
                    onConfirm: e,
                    confirmButtonColor: l.Button.Colors.BRAND,
                    ...t,
                    children: (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: s.default.Messages.BROADCASTING_START_STREAM_CONFIRM_BODY
                    })
                }))
            }
        },
        162236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openBroadcastingPrivacySettingsModal: function() {
                    return r
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("77078");

            function r(e, t, r) {
                (0, l.openModalLazy)(async () => {
                    let {
                        default: l
                    } = await n.el("725420").then(n.bind(n, "725420"));
                    return n => (0, a.jsx)(l, {
                        headerText: e,
                        buttonCTA: t,
                        onSave: r,
                        ...n
                    })
                })
            }
        },
        181832: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCallBannerBackgroundExperiment: function() {
                    return r
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

            function r(e, t) {
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
                    return s
                }
            });
            var a = n("99795"),
                l = n("860604");
            let r = Object.freeze({
                [a.ParticipantTypes.STREAM]: l.MediaEngineContextTypes.STREAM,
                [a.ParticipantTypes.HIDDEN_STREAM]: l.MediaEngineContextTypes.STREAM,
                [a.ParticipantTypes.USER]: l.MediaEngineContextTypes.DEFAULT,
                [a.ParticipantTypes.ACTIVITY]: l.MediaEngineContextTypes.DEFAULT
            });

            function s(e) {
                return r[e]
            }
        },
        976074: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("498225"),
                r = n("77078"),
                s = n("374014"),
                i = n("582415"),
                u = n("271938"),
                o = n("824563"),
                d = n("205817"),
                c = n("782340");

            function f(e, t, f) {
                var g;
                let E = (0, l.useStateFromStores)([o.default], () => (0, i.getStreamerApplication)(e, o.default), [e]),
                    m = (0, l.useStateFromStores)([u.default], () => u.default.getId()),
                    h = null != e ? (0, s.encodeStreamKey)(e) : d.default.getActiveStreamKey(),
                    p = null !== (g = d.default.getVideoStats(h)) && void 0 !== g ? g : {},
                    S = {
                        media_session_id: d.default.getMediaSessionId(h),
                        rtc_connection_id: d.default.getRtcConnectionId(h),
                        stream_region: d.default.getRegion(h),
                        max_viewers: d.default.getMaxViewers(h),
                        ...p
                    };
                return null == e ? null : (0, a.jsx)(r.MenuItem, {
                    id: "report-stream-problem",
                    label: c.default.Messages.STREAM_REPORT_PROBLEM_MENU_ITEM,
                    action: () => {
                        null == f || f(), null != e && (0, r.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("485857").then(n.bind(n, "485857"));
                            return n => (0, a.jsx)(t, {
                                stream: e,
                                streamApplication: E,
                                isStreamer: m === (null == e ? void 0 : e.ownerId),
                                analyticsData: S,
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
            var a = n("920040"),
                l = n("773670"),
                r = n("498225"),
                s = n("77078"),
                i = n("629109"),
                u = n("997289"),
                o = n("773356"),
                d = n("268491"),
                c = n("305961"),
                f = n("42887"),
                g = n("697218"),
                E = n("49111"),
                m = n("686298"),
                h = n("860604"),
                p = n("782340");

            function S(e, t) {
                let {
                    preset: S,
                    resolution: C,
                    fps: _
                } = (0, r.useStateFromStoresObject)([d.default], () => d.default.getState()), T = (0, r.useStateFromStores)([f.default], () => f.default.getGoLiveSource()), A = (0, r.useStateFromStores)([g.default], () => g.default.getCurrentUser()), v = (0, r.useStateFromStores)([c.default], () => {
                    var t;
                    return null === (t = c.default.getGuild(null == e ? void 0 : e.guildId)) || void 0 === t ? void 0 : t.premiumTier
                }), {
                    location: I
                } = (0, u.useAnalyticsContext)(), L = l.useCallback((e, l, r, u) => {
                    if (e) {
                        if (null != T) {
                            let e = {
                                qualityOptions: {
                                    preset: m.ApplicationStreamPresets.PRESET_CUSTOM,
                                    resolution: l,
                                    frameRate: r
                                },
                                context: h.MediaEngineContextTypes.STREAM
                            };
                            null != T.desktopSource ? e.desktopSettings = {
                                sourceId: T.desktopSource.id,
                                sound: !0
                            } : null != T.cameraSource && (e.cameraSettings = {
                                videoDeviceGuid: T.cameraSource.videoDeviceGuid,
                                audioDeviceGuid: T.cameraSource.audioDeviceGuid
                            }), i.default.setGoLiveSource(e)
                        }
                    } else {
                        var o, d;
                        o = t, d = {
                            ...I,
                            object: E.AnalyticsObjects.RADIO_ITEM,
                            objectType: u
                        }, (0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("754534").then(n.bind(n, "754534"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                analyticsSource: d
                            })
                        }, {
                            contextKey: o === E.AppContext.POPOUT ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT
                        })
                    }
                }, [t, I, T]);
                if (null == e) return null;
                let N = S === m.ApplicationStreamPresets.PRESET_DOCUMENTS ? m.ApplicationStreamFPS.FPS_30 : _,
                    M = m.ApplicationStreamFPSButtonsWithSuffixLabel.map(e => {
                        let {
                            value: t,
                            label: n
                        } = e, l = (0, o.default)(m.ApplicationStreamPresets.PRESET_CUSTOM, C, t, A, v);
                        return (0, a.jsx)(s.MenuRadioItem, {
                            group: "stream-settings-fps",
                            id: "stream-settings-fps-".concat(t),
                            label: n,
                            checked: t === _,
                            action: () => L(l, C, t, E.AnalyticsObjectTypes.RESOLUTION)
                        }, "stream-settings-fps-".concat(t))
                    }),
                    y = m.ApplicationStreamResolutionButtonsWithSuffixLabel.map(e => {
                        let {
                            value: t,
                            label: n
                        } = e, l = (0, o.default)(m.ApplicationStreamPresets.PRESET_CUSTOM, t, N, A, v);
                        return (0, a.jsx)(s.MenuRadioItem, {
                            group: "stream-settings-resolution",
                            id: "stream-settings-resolution-".concat(t),
                            label: n,
                            checked: t === C,
                            action: () => L(l, t, N, E.AnalyticsObjectTypes.RESOLUTION)
                        }, "stream-settings-resolution-".concat(t))
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.MenuGroup, {
                        label: p.default.Messages.SCREENSHARE_FRAME_RATE,
                        children: M
                    }), (0, a.jsx)(s.MenuGroup, {
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
                    return s
                },
                default: function() {
                    return o
                }
            });
            var a = n("773670"),
                l = n("498225"),
                r = n("714657");
            let s = "data-client-themes",
                i = "custom-theme-background",
                u = () => {
                    let e = (0, l.useStateFromStores)([r.default], () => r.default.getLinearGradient()),
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
        779601: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("773336");

            function l() {
                let e = "";
                return (0, a.isWindows)() ? e = "platform-win" : (0, a.isMac)() ? e = "platform-osx" : (0, a.isLinux)() ? e = "platform-linux" : (0, a.isWeb)() && (e = "platform-web"), __OVERLAY__ ? "".concat(e, " platform-overlay") : e
            }
        },
        967889: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var a = n("920040"),
                l = n("773670"),
                r = n("427964"),
                s = n.n(r),
                i = n("735420"),
                u = n("8987"),
                o = n("538732"),
                d = n("498225"),
                c = n("77078"),
                f = n("960460"),
                g = n("489740"),
                E = n("355025"),
                m = n("51545"),
                h = n("155084"),
                p = n("393414"),
                S = n("90404"),
                C = n("599110"),
                _ = n("286235"),
                T = n("50885"),
                A = n("49111"),
                v = n("782340"),
                I = n("75059");

            function L() {
                let [e, t] = l.useState(!1), n = (0, d.useStateFromStores)([g.default], () => {
                    var e;
                    return (0, E.probablyHasBuildOverride)() ? null === (e = g.default.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
                });
                if (null == n) return null;
                let r = async () => {
                    try {
                        t(!0), await (0, f.clearBuildOverride)(), window.location.reload(!0)
                    } catch (e) {
                        t(!1)
                    }
                };
                return (0, a.jsx)(c.Button, {
                    size: c.ButtonSizes.LARGE,
                    onClick: r,
                    submitting: e,
                    className: I.clearOverrideButton,
                    children: v.default.Messages.CLEAR_BUILD_OVERRIDE
                })
            }
            let N = s.throttle(() => {
                h.default.increment({
                    name: o.MetricEvents.APP_CRASHED,
                    tags: ["reason:".concat(i.AppCrashedReasons.UNHANDLED_JS_ERROR), "level:".concat(u.ErrorLevels.FATAL)]
                }, !0)
            }, 100, {
                trailing: !1
            });
            class M extends l.PureComponent {
                componentDidCatch(e, t) {
                    this.triggerSoftCrash(e, t)
                }
                triggerSoftCrash(e, t) {
                    let n = (0, p.getHistory)().location;
                    this.setState({
                        error: e,
                        info: t
                    });
                    let a = _.default.captureCrash(e, {
                        extra: t
                    });
                    C.default.track(A.AnalyticEvents.APP_CRASHED, {
                        path: n.pathname,
                        extra: t,
                        error_message: e.message,
                        error_stack: e.stack,
                        sentry_issue_id: a,
                        uses_client_mods: (0, m.usesClientMods)()
                    }), N(), T.default.cleanupDisplaySleep()
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
                                    children: v.default.Messages.ERRORS_UNEXPECTED_CRASH
                                }), (0, a.jsx)("p", {
                                    children: v.default.Messages.ERRORS_ACTION_TO_TAKE
                                })]
                            }),
                            n = (0, a.jsxs)("div", {
                                className: I.buttons,
                                children: [(0, a.jsx)(c.Button, {
                                    size: c.ButtonSizes.LARGE,
                                    onClick: this._handleSubmitReport,
                                    children: v.default.Messages.ERRORS_RELOAD
                                }), (0, a.jsx)(L, {})]
                            });
                        return (0, a.jsx)(S.default, {
                            title: v.default.Messages.UNSUPPORTED_BROWSER_TITLE,
                            note: null != t ? t() : e,
                            action: n,
                            className: I.errorPage
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
        160139: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("575482"),
                r = n.n(l),
                s = n("498225"),
                i = n("77078"),
                u = n("368598"),
                o = n("49671"),
                d = n("244201"),
                c = n("191145"),
                f = n("270227"),
                g = n("940277"),
                E = n("386811"),
                m = n("964264"),
                h = n("655804"),
                p = n("58463"),
                S = n("238500"),
                C = n("773336"),
                _ = n("439932"),
                T = n("50885"),
                A = n("782340"),
                v = n("821445");
            let I = e => T.default.close(e),
                L = e => T.default.minimize(e),
                N = (e, t) => {
                    (0, C.isMac)() && !t.altKey ? T.default.fullscreen(e) : T.default.maximize(e)
                },
                M = e => {
                    let {
                        windowKey: t,
                        themeOverride: n,
                        hasOpenLayer: l
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: r(v.typeWindows, (0, _.getThemeClass)(n), {
                            [v.withBackgroundOverride]: !l
                        }),
                        children: [(0, a.jsx)("div", {
                            className: v.wordmarkWindows,
                            children: (0, a.jsx)(f.default, {})
                        }), (0, a.jsx)(i.Clickable, {
                            className: v.winButtonClose,
                            onClick: () => I(t),
                            "aria-label": A.default.Messages.TITLE_BAR_CLOSE_WINDOW,
                            tabIndex: -1,
                            children: (0, a.jsx)(g.default, {})
                        }), (0, a.jsx)(i.Clickable, {
                            className: v.winButtonMinMax,
                            onClick: e => N(t, e),
                            "aria-label": A.default.Messages.TITLE_BAR_MAXIMIZE_WINDOW,
                            tabIndex: -1,
                            children: (0, a.jsx)(m.default, {})
                        }), (0, a.jsx)(i.Clickable, {
                            className: v.winButtonMinMax,
                            onClick: () => L(t),
                            "aria-label": A.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                            tabIndex: -1,
                            children: (0, a.jsx)(p.default, {})
                        })]
                    })
                },
                y = e => {
                    let {
                        focused: t,
                        windowKey: n,
                        frame: l,
                        themeOverride: s,
                        hasOpenLayer: u
                    } = e;
                    return (0, a.jsxs)(i.Clickable, {
                        className: r(l ? v.typeMacOSWithFrame : v.typeMacOS, t ? v.focused : v.unfocused, (0, _.getThemeClass)(s), {
                            [v.withBackgroundOverride]: !u
                        }),
                        onDoubleClick: () => T.default.maximize(n),
                        tabIndex: -1,
                        children: [o.default.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS ? (0, a.jsx)("div", {
                            className: v.macDragRegion
                        }) : (0, a.jsxs)("div", {
                            className: v.macButtons,
                            children: [(0, a.jsx)(i.Clickable, {
                                className: v.macButtonClose,
                                onClick: () => I(n),
                                "aria-label": A.default.Messages.TITLE_BAR_CLOSE_WINDOW,
                                tabIndex: -1,
                                children: (0, a.jsx)(E.default, {
                                    color: "#4c0000"
                                })
                            }), (0, a.jsx)(i.Clickable, {
                                className: v.macButtonMinimize,
                                onClick: () => L(n),
                                "aria-label": A.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                                tabIndex: -1,
                                children: (0, a.jsx)(S.default, {
                                    color: "#975500"
                                })
                            }), (0, a.jsx)(i.Clickable, {
                                className: v.macButtonMaximize,
                                onClick: e => N(n, e),
                                "aria-label": A.default.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
                                tabIndex: -1,
                                children: (0, a.jsx)(h.default, {
                                    color: "#006500"
                                })
                            })]
                        }), l ? (0, a.jsx)("div", {
                            className: v.wordmarkMacOS,
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
                    windowKey: l,
                    macOSFrame: r = !1,
                    themeOverride: i
                } = e, o = (0, d.useAppContext)(), f = (0, s.useStateFromStores)([c.default], () => c.default.isFullscreenInContext(o)), g = (0, u.default)();
                if (f) return null;
                switch (n) {
                    case C.PlatformTypes.WINDOWS:
                        return (0, a.jsx)(M, {
                            windowKey: l,
                            themeOverride: i,
                            hasOpenLayer: g
                        });
                    case C.PlatformTypes.OSX:
                        return (0, a.jsx)(y, {
                            focused: t,
                            windowKey: l,
                            frame: r,
                            themeOverride: i,
                            hasOpenLayer: g
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
            var a = n("773670"),
                l = n("498225"),
                r = n("551042"),
                s = n("77078"),
                i = n("485328"),
                u = n("180748"),
                o = n("206230"),
                d = n("951212"),
                c = n("227602"),
                f = n("791776"),
                g = n("13798"),
                E = n("49111"),
                m = n("894282");

            function h(e) {
                let t = e.ctrlKey || e.altKey || e.metaKey;
                e.key === m.KeyboardEventKey.Tab && !t && !__OVERLAY__ && !(0, r.hasAnyModalOpen)() && d.default.maybeShowKeyboardNavigationExplainerModal()
            }

            function p() {
                (0, u.disableKeyboardMode)()
            }
            var S = function(e, t) {
                let n = (0, l.useStateFromStores)([o.default], () => o.default.keyboardModeEnabled);
                (0, s.useFocusJumpSectionManager)(n);
                let r = (0, a.useCallback)(e => {
                    ! function(e, t) {
                        var n, a;
                        let l = (0, f.isInputLikeElement)(null === (n = (0, f.eventOwnerDocument)(e)) || void 0 === n ? void 0 : n.activeElement);
                        if (l && e.key !== m.KeyboardEventKey.Tab) return;
                        let r = e.ctrlKey || e.altKey || e.metaKey || e.key !== m.KeyboardEventKey.Tab && e.shiftKey;
                        if (r) return;
                        let s = function(e) {
                            let t = g.keyToCode("shift"),
                                n = g.keyToCode("tab");
                            if (e.key === m.KeyboardEventKey.Tab && e.shiftKey && null != t && null != n) return [
                                [E.KeyboardDeviceTypes.KEYBOARD_KEY, t],
                                [E.KeyboardDeviceTypes.KEYBOARD_KEY, n]
                            ];
                            let a = m.NavigationKeyShortcutMap.get(e.key);
                            if (null != a) {
                                let e = g.keyToCode(a);
                                if (null != e) return [
                                    [E.KeyboardDeviceTypes.KEYBOARD_KEY, e]
                                ]
                            }
                            return null
                        }(e);
                        null != s && !c.default.hasExactKeybind(s) && !i.default.hasBind(null !== (a = g.codeToKey(s[0])) && void 0 !== a ? a : "") && ((0, u.enableKeyboardMode)(), l && !t && e.preventDefault())
                    }(e, t)
                }, [t]);
                return (0, a.useLayoutEffect)(() => (n ? (e.addEventListener("mousedown", p), e.addEventListener("keydown", h)) : e.addEventListener("keydown", r), () => {
                    n ? (e.removeEventListener("mousedown", p), e.removeEventListener("keydown", h)) : e.removeEventListener("keydown", r)
                }), [e, r, n]), n
            }
        },
        628922: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("773670"),
                l = n("244201"),
                r = n("49111");
            let s = ["Shift", "Alt", "Meta", "Control"];

            function i(e, t) {
                let [n, i] = a.useState(0), u = (0, l.useWindowDispatch)();
                a.useEffect(() => {
                    let e = () => i(e => e + 1),
                        t = () => i(e => Math.max(0, e - 1));
                    return u.subscribe(r.ComponentActions.POPOUT_SHOW, e), u.subscribe(r.ComponentActions.POPOUT_HIDE, t), () => {
                        u.unsubscribe(r.ComponentActions.POPOUT_SHOW, e), u.unsubscribe(r.ComponentActions.POPOUT_HIDE, t)
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
                        l = o ? "keyup" : "mousemove";
                    return t && e.addEventListener(l, a), () => null == e ? void 0 : e.removeEventListener(l, a)
                }, [e, o, n, t]), t && 0 === n && o
            }
        },
        147746: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uploadDebugLogFiles: function() {
                    return m
                },
                getBlindIds: function() {
                    return p
                },
                uploadCallscopeLogs: function() {
                    return S
                },
                uploadCallscopeLogFiles: function() {
                    return C
                }
            });
            var a = n("990746"),
                l = n("869586"),
                r = n("49671"),
                s = n("890747"),
                i = n("254490"),
                u = n("821316"),
                o = n("605250"),
                d = n("836403"),
                c = n("825287"),
                f = n("929331"),
                g = n("49111");
            let E = new o.default("DebugUploadManager");
            async function m(e, t) {
                await _(e), await (0, s.uploadRtcLogFiles)(3670016, t)
            }
            class h {
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
                    r = await a.blind(e),
                    s = await a.blind(t);
                return {
                    blindChannelId: r,
                    blindUserId: s
                }
            }
            async function S(e, t, n, a) {
                var l, s;
                if (!__OVERLAY__) {
                    if ((null === (s = r.default) || void 0 === s ? void 0 : null === (l = s.fileManager) || void 0 === l ? void 0 : l.getCallscopeLogFiles) == null) {
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
                            blindUserId: s
                        } = await p(e, t, n), i = "channel blind(".concat(e, "): ").concat(l, ", user blind(").concat(t, "): ").concat(s);
                        E.info("uploadCallscopeLogs: Uploading callscope logs for context: ".concat(a, ", ").concat(i));
                        let u = await r.default.fileManager.getCallscopeLogFiles(l);
                        await C(s, u)
                    } catch (e) {
                        E.error("uploadCallscopeLogs: Error uploading logs ".concat(null == e ? void 0 : e.text), e)
                    }
                }
            }
            async function C(e, t) {
                try {
                    if (0 === t.length) {
                        E.error("uploadCallscopeLogFiles: No files found.");
                        return
                    }
                    for (let n of t.map(e => i.transformNativeFile(e, "application/octet-stream"))) {
                        E.log("uploadCallscopeLogFiles: Uploading ".concat(n.name));
                        let t = h.getChannelId(n.name);
                        try {
                            let l = await a.default.post({
                                    url: g.Endpoints.CALLSCOPE_LOGS(t, e, h.getTrimmedFilename(n.name)),
                                    headers: {
                                        "Content-Type": "application/octet-stream"
                                    },
                                    body: n
                                }),
                                r = l.status >= 200 && l.status <= 299;
                            !r && E.error("uploadCallscopeLogFiles: Failed to upload ".concat(n.name, " with status ").concat(l.status, ", ").concat(l.text))
                        } catch (e) {
                            E.error("uploadCallscopeLogFiles: Error uploading file ".concat(n.name, " ").concat(null == e ? void 0 : e.text), e)
                        }
                    }
                } catch (e) {
                    E.error("uploadCallscopeLogFiles: Error uploading logs ".concat(null == e ? void 0 : e.text), e)
                }
            }
            async function _(e) {
                try {
                    let t = u.stringify(),
                        n = "",
                        l = await (0, d.getPushNotificationLogs)().then(e => (0, d.serializePushNotificationLogs)(e)),
                        r = t.length + n.length + l.length;
                    if (r > 9437184) {
                        let e = 1 - 9437184 / r;
                        t = t.slice(t.length - Math.floor(t.length * e)), n = n.slice(n.length - Math.floor(n.length * e)), l = l.slice(l.length - Math.floor(l.length * e))
                    }
                    let s = null,
                        i = "\n    ".concat((0, f.default)(s), "\n\n    ").concat(JSON.stringify((0, c.default)(), void 0, 2), "\n    Logs:\n    ").concat(t, "\n\n    System logs:\n    ").concat(n, "\n\n    Push Notifications:\n    ").concat(l, "\n    ");
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
                    return s
                },
                getPushNotificationLogs: function() {
                    return i
                }
            });
            var a = n("173333"),
                l = n("271938"),
                r = n("49111");

            function s(e) {
                if (0 === e.length) return "No logs";
                let t = a.default.get(r.DEVICE_TOKEN),
                    n = a.default.get(r.DEVICE_VOIP_TOKEN),
                    l = null != n ? "Device Voip Token: ".concat(n) : "",
                    s = e.map(e => {
                        let t = "Displayed";
                        return e.silent && (t = "Silent"), "".concat(new Date(e.receivedTimestamp).toISOString(), " [").concat(e.type, "] ").concat(t, " - ").concat(e.title, " - ").concat(e.content, " ")
                    }).join("\n");
                return "".concat(null != t ? "Device Token: ".concat(t) : "", "\n").concat(l, "\n\n").concat(s)
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
                    buildNumber: "241310",
                    versionHash: "07b5a85b6cb3c146c14dbe454249b50ea168772e"
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
            var a = n("427964"),
                l = n.n(a),
                r = n("379279"),
                s = n("487269");

            function i(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return r.default.logGroups.map(n => {
                    var a, r;
                    let {
                        index: i,
                        timestamp: o,
                        logs: d,
                        nativeLogs: c,
                        serverTrace: f
                    } = n, g = 0 === i ? null !== (r = null === (a = l.find(d, e => e.log.indexOf("Logger loaded") >= 0)) || void 0 === a ? void 0 : a.timestamp) && void 0 !== r ? r : e : o, E = function(e, t) {
                        var n, a;
                        let r = (function(e) {
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
                            s = null !== (n = l.max(r.map(e => e.totalTime.length))) && void 0 !== n ? n : 0,
                            i = null !== (a = l.max(r.map(e => e.deltaTime.length))) && void 0 !== a ? a : 0;
                        return r.map(e => {
                            let {
                                totalTime: t,
                                deltaTime: n,
                                log: a
                            } = e;
                            return "".concat(l.padStart(t, s), " ").concat(l.padStart(n, i), " ").concat(a)
                        }).join("")
                    }(function(e, t, n) {
                        e = e.slice();
                        let a = new Set(t.map(u)),
                            l = "",
                            r = [];
                        return t.forEach(t => {
                            let s = u(t),
                                i = 0,
                                o = n || !t.autoGenerated,
                                d = s.startsWith("Start ") && !s.includes("RUN_JS_BUNDLE") && a.has(s.replace("Start ", "Finish ")),
                                c = s.startsWith("Finish ") && !s.includes("RUN_JS_BUNDLE") && a.has(s.replace("Finish ", "Start "));
                            if (c) {
                                l = l.substring(2);
                                let e = r.pop();
                                null != e && (i = t.timestamp - e.timestamp, o = o || i > 5 && ! function(e) {
                                    return ["GET_CONSTANTS", "CONVERT_CONSTANTS"].some(t => e.includes(t))
                                }(s), e.shouldKeep = e.shouldKeep || o)
                            }
                            let f = {
                                emoji: "☕",
                                timestamp: t.timestamp,
                                delta: i > 0 ? i : void 0,
                                prefix: l,
                                log: s,
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
                            })(e, f), d && (l += "| ", r.push(f))
                        }), e.filter(e => !1 !== e.shouldKeep)
                    }(d, c, t), g), m = "Trace #".concat(i + 1, " started ").concat((0, s.getTimestampString)(o), "\n").concat(E);
                    return null != f && (m += "\n Server trace for trace #".concat(i + 1).concat(f)), m
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
                    return r
                },
                toggleDisplayDevTools: function() {
                    return s
                },
                clearAnalyticsLog: function() {
                    return i
                }
            });
            var a = n("913144"),
                l = n("584369");

            function r(e) {
                a.default.dispatch({
                    type: "DEV_TOOLS_SETTINGS_UPDATE",
                    settings: e
                })
            }

            function s() {
                r({
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
            var a = n("498225"),
                l = n("173333"),
                r = n("913144"),
                s = n("9503");
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
                    u = null != e ? e : u, r.default.actionLogger.persist = this.devToolsEnabled
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
            var d = new o(r.default, {
                DEV_TOOLS_SETTINGS_UPDATE: function(e) {
                    (u.devToolsEnabled || e.settings.devToolsEnabled) && (null != e.settings.devToolsEnabled && (r.default.actionLogger.persist = e.settings.devToolsEnabled, l.default.set(s.STORAGE_KEY_LOG_DISPATCHES, e.settings.devToolsEnabled)), u = {
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
                    return s
                },
                initSentry: function() {
                    return u
                }
            });
            var a = n("937049"),
                l = n("316217");
            let r = ["oppobrowser", "realmebrowser", "heytapbrowser"];

            function s() {
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
                    release: "discord_web-07b5a85b6cb3c146c14dbe454249b50ea168772e",
                    beforeSend: e => {
                        var t, n;
                        return !(null != (t = e).exception && null != t.exception.values && t.exception.values.every(e => null == e.stacktrace || null != e.stacktrace.frames && 1 === e.stacktrace.frames.length) && "canary" !== window.GLOBAL_ENV.RELEASE_CHANNEL || r.some(e => window.navigator.appVersion.toLowerCase().indexOf(e) >= 0)) && !s() && !("Aborted" === (n = e).message || "cancel captcha" === n.message) && i() ? e : null
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
                }), a.setTag("buildNumber", (e = "241310", "241310")), a.setTag("builtAt", String("1698440631044"));
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
                    return r
                },
                sendMessagesForScanning: function() {
                    return s
                }
            });
            var a = n("990746"),
                l = n("49111");

            function r(e, t, n, r) {
                return a.default.post({
                    url: l.Endpoints.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE,
                    body: {
                        channel_id: e,
                        message_id: t,
                        attachment_ids: n,
                        embed_ids: r
                    }
                })
            }

            function s(e, t) {
                return a.default.patch({
                    url: l.Endpoints.EXPLICIT_MEDIA_SCAN_MESSAGES(e),
                    body: {
                        message_ids: t
                    }
                })
            }
        },
        612278: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFirstForumPostMessage: function() {
                    return C
                },
                useMostRecentForumMessage: function() {
                    return _
                },
                preloadForumThreads: function() {
                    return A
                }
            });
            var a = n("427964"),
                l = n.n(a),
                r = n("498225"),
                s = n("990746"),
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
            let m = new class e {
                    request(e, t) {
                        this.requested.get(e).add(t)
                    }
                    hasRequested(e, t) {
                        return this.requested.get(e).has(t)
                    }
                    finishRequesting(e, t) {
                        let n = this.requested.get(e);
                        t.forEach(e => n.delete(e)), m.compact(e)
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
                h = null;

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

            function S(e, t) {
                return !e && null == t
            }

            function C(e) {
                var t, n;
                let {
                    loaded: a,
                    firstMessage: l
                } = (0, r.useStateFromStoresObject)([c.default], () => c.default.getMessage(e.id)), s = (0, r.useStateFromStores)([u.default], () => u.default.getChannel(e.parent_id));
                if (null != s && (t = a, n = l, !t && null == n)) v(s, e.id);
                return {
                    loaded: a,
                    firstMessage: l
                }
            }

            function _(e, t) {
                let {
                    loaded: n,
                    message: a
                } = (0, r.useStateFromStoresObject)([f.default], () => f.default.getMessageState(t.id));
                return null != e && p(t.guild_id, t.id) && v(e, t.id), {
                    loaded: n,
                    mostRecentMessage: a
                }
            }

            function T(e, t) {
                let n = !1;
                t.forEach(t => {
                    var a, l;
                    let {
                        loaded: r,
                        firstMessage: s
                    } = c.default.getMessage(t);
                    if (a = r, l = s, !a && null == l || p(e.guild_id, t)) m.request(e.id, t), n = !0
                }), n && null == h && (h = setTimeout(I, 0))
            }

            function A(e) {
                T(e, (0, o.computeThreadIdsSnapshot)(e.id).slice(0, 10))
            }

            function v(e, t) {
                if (m.hasRequested(e.id, t)) return;
                let n = (0, o.computeThreadIdsSnapshot)(e.id),
                    a = n.findIndex(e => e === t),
                    l = n.slice(a, a + 5).filter(t => !m.hasRequested(e.id, t));
                T(e, l)
            }
            async function I() {
                try {
                    for (; m.hasNext();) await L(m.next())
                } finally {
                    h = null
                }
            }
            async function L(e) {
                let t = m.getNextBatch(e, 10);
                try {
                    var n;
                    if (0 === t.length) return;
                    let a = null === (n = u.default.getChannel(e)) || void 0 === n ? void 0 : n.guild_id;
                    if (null == a) return;
                    let {
                        body: {
                            threads: l
                        }
                    } = await s.default.post({
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
                    m.finishRequesting(e, t)
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
            var a = n("498225"),
                l = n("913144"),
                r = n("692038"),
                s = n("42203"),
                i = n("697218"),
                u = n("449008"),
                o = n("299039");
            let d = {};

            function c(e) {
                var t;
                let n = s.default.getChannel(null == e ? void 0 : e.channel_id);
                if (null == n || !n.isForumPost()) return !1;
                let a = d[n.id];
                return o.default.compare(null == e ? void 0 : e.id, null == a ? void 0 : null === (t = a.message) || void 0 === t ? void 0 : t.id) > -1
            }

            function f(e, t) {
                let n = null == t ? null : (0, r.createMessageRecord)(t);
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

            function m(e) {
                let {
                    threads: t,
                    mostRecentMessages: n
                } = e;
                t.forEach(e => f(e.id, null)), null == n || n.filter(u.isNotNullish).forEach(e => {
                    f(e.channel_id, e)
                })
            }
            class h extends a.default.Store {
                initialize() {
                    this.waitFor(s.default, i.default)
                }
                getMessageState(e) {
                    return !(e in d) && (d[e] = {
                        loaded: !1,
                        message: null
                    }), d[e]
                }
            }
            h.displayName = "ForumPostRecentMessageStore";
            var p = new h(l.default, {
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
                            message: (0, r.updateMessageRecord)(a, t)
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
                LOAD_ARCHIVED_THREADS_SUCCESS: m,
                LOAD_THREADS_SUCCESS: m
            })
        },
        479788: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("860604");

            function l(e) {
                return e.supportsInApp(a.Features.VIDEO) && e.supportsInApp(a.Features.DESKTOP_CAPTURE)
            }
        },
        773356: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("294707"),
                l = n("686298");

            function r(e, t, n, r, s) {
                for (let i of l.ApplicationStreamSettingRequirements)
                    if ((null == i.preset || e === i.preset) && t === i.resolution && n === i.fps && (0, a.default)(i, r, s)) return !0;
                return !1
            }
        },
        294707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("427459"),
                l = n("719923"),
                r = n("646718");

            function s(e, t, n) {
                if (null == e || null == e.quality && null == e.guildPremiumTier) return !0;
                let s = !1;
                return null != e.quality && (e.quality === r.StreamQualities.HIGH_STREAMING_QUALITY ? s = s || l.default.canStreamQuality(l.default.StreamQuality.HIGH, t) : e.quality === r.StreamQualities.MID_STREAMING_QUALITY && (s = s || l.default.canStreamQuality(l.default.StreamQuality.MID, t))), null != e.guildPremiumTier && (s = s || (0, a.isGuildBoostedAtLeast)(n, e.guildPremiumTier)), s
            }
        },
        430951: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("387111"),
                l = n("49111"),
                r = n("782340");

            function s(e, t, n, s) {
                if (e.state === l.ApplicationStreamStates.RECONNECTING) return {
                    mainText: r.default.Messages.STREAM_RECONNECTING_ERROR,
                    supportingText: r.default.Messages.STREAM_RECONNECTING_ERROR_SUBTEXT
                };
                if (e.state === l.ApplicationStreamStates.PAUSED) return n ? {
                    mainText: r.default.Messages.STREAM_CAPTURE_PAUSED,
                    supportingText: r.default.Messages.STREAM_CAPTURE_PAUSED_DETAILS
                } : {
                    mainText: r.default.Messages.STREAM_CAPTURE_PAUSED,
                    supportingText: r.default.Messages.STREAM_CAPTURE_PAUSED_DETAILS_VIEWER.format({
                        username: a.default.getName(e.guildId, e.channelId, t)
                    })
                };
                return s ? {
                    mainText: r.default.Messages.STREAM_PREVIEW_PAUSED,
                    supportingText: r.default.Messages.STREAM_PREVIEW_PAUSED_SUBTEXT
                } : null
            }
        },
        349171: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("773336"),
                l = n("50885");

            function r(e) {
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
                r = n("271938"),
                s = n("374014");

            function i(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (null == e) return;
                let {
                    streamType: n,
                    guildId: i,
                    channelId: u,
                    ownerId: o
                } = e, d = (0, s.encodeStreamKey)({
                    streamType: n,
                    guildId: i,
                    channelId: u,
                    ownerId: o
                });
                o === r.default.getId() && a.default.setGoLiveSource(null), l.stopStream(d, t)
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
                r = n("26989"),
                s = n("697218"),
                i = n("509");
            let u = null,
                o = () => {
                    let e = r.default.getCommunicationDisabledUserMap();
                    Object.keys(e).forEach(t => {
                        let n = (0, r.getGuildIdFromCommunicationDisabledUserKey)(t),
                            a = (0, r.getUserIdFromCommunicationDisabledUserKey)(t),
                            l = e[t];
                        !(0, i.isCommunicationDisabled)(l) && d(n, a)
                    })
                },
                d = (e, t) => {
                    var n, l, u, o, d, c;
                    let f = r.default.getMember(e, t),
                        g = s.default.getUser(t);
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
                    return r
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
            var r = l
        },
        179803: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                shouldShowGuildOnboardingUpsell: function() {
                    return p
                },
                dismissedGuildOnboardingUpsell: function() {
                    return S
                }
            });
            var a = n("377849"),
                l = n.n(a),
                r = n("975162"),
                s = n("410547"),
                i = n("10641"),
                u = n("872173"),
                o = n("374363"),
                d = n("305961"),
                c = n("696326"),
                f = n("380710"),
                g = n("49111"),
                E = n("994428");
            let m = [r.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
                h = [0, 1, 7];

            function p(e, t) {
                var n;
                let a = d.default.getGuilds(),
                    r = Object.entries(a).some(e => {
                        let [t, n] = e, a = (0, f.isGuildOnboardingSettingsAvailable)(t), l = n.hasFeature(g.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
                        return a && l
                    });
                if (r || !(0, f.isGuildOnboardingSettingsAvailable)(e)) return !1;
                let u = null === (n = o.default.settings.userContent) || void 0 === n ? void 0 : n.guildOnboardingUpsellDismissedAt,
                    E = null != u ? s.Timestamp.toDate(u) : void 0,
                    p = null != E ? l().diff(E, "days") : null,
                    S = m.indexOf(t);
                if (-1 === S) return !1;
                let C = null == p || p > h[S];
                if (!C) return !1;
                let _ = m.find(e => !(0, i.isDismissibleContentDismissed)(e)) === t;
                if (!_) return !1;
                let {
                    showLifecycleUpsells: T
                } = c.default.getCurrentConfig({
                    guildId: e,
                    location: "7f5b67_1"
                }, {
                    disable: r || !(0, f.isGuildOnboardingSettingsAvailable)(e),
                    autoTrackExposure: !0
                });
                return T
            }

            function S(e, t) {
                let n = s.Timestamp.now();
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
            var a = n("498225"),
                l = n("913144");
            let r = {
                    enabled: !1
                },
                s = {},
                i = {},
                u = !1;
            class o extends a.default.DeviceSettingsStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
                    u = e.enabled
                }
                getWaitingHighFive(e, t) {
                    var n;
                    return null === (n = s[e]) || void 0 === n ? void 0 : n[t]
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
                    var t;
                    let {
                        completingEmoji: n,
                        completingUserId: a,
                        waitingUserId: l,
                        channelId: r
                    } = e, u = null !== (t = s[r]) && void 0 !== t ? t : {}, o = u[l];
                    if (delete u[l], null == o) return !1;
                    i[r] = {
                        ...i[r],
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
                    } = e, r = null !== (t = i[l]) && void 0 !== t ? t : {};
                    delete r[n], delete r[a]
                }
            })
        },
        391591: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("984519");
            let l = /🏻|🏼|🏽|🏾|🏿|\uFE0F/g;

            function r(e) {
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
            var a = n("498225"),
                l = n("42203"),
                r = n("305961"),
                s = n("18494"),
                i = n("49111");
            let u = () => {
                    let e = s.default.getVoiceChannelId();
                    if (null == e) return !1;
                    let t = l.default.getChannel(e);
                    if (null == t) return !1;
                    let n = r.default.getGuild(t.getGuildId());
                    return null != n && n.hasFeature(i.GuildFeatures.HUB)
                },
                o = e => (0, a.useStateFromStores)([s.default, l.default, r.default], () => {
                    let t = s.default.getVoiceChannelId();
                    if (null == t) return !1;
                    let n = l.default.getChannel(t);
                    if (null == n) return !1;
                    let a = r.default.getGuild(n.getGuildId());
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
                    return m
                },
                toggleMessageReminders: function() {
                    return h
                },
                completeMessageReminders: function() {
                    return p
                },
                cleanupMessageReminders: function() {
                    return S
                },
                fetchAndUpdateSavedMessages: function() {
                    return T
                }
            });
            var a = n("990746"),
                l = n("913144"),
                r = n("679653"),
                s = n("42203"),
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
                }), _([{
                    messageId: e.id,
                    channelId: e.channel_id,
                    savedAt: new Date,
                    dueAt: t,
                    ... function(e) {
                        let t = s.default.getChannel(e.channel_id);
                        if (null == t) return null;
                        let n = i.default.getGuild(t.guild_id),
                            a = "",
                            l = (0, r.computeChannelName)(t, o.default, u.default, !0);
                        if (t.isPrivate()) a = l;
                        else if (t.isThread()) {
                            let e = s.default.getChannel(t.parent_id);
                            if (null == e) return null;
                            let n = (0, r.computeChannelName)(e, o.default, u.default, !0);
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

            function m(e, t) {
                d.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "updating_due_at",
                    rating: "".concat(c.default.getMessageReminders().length)
                });
                let n = c.default.getMessageReminders(),
                    a = n.find(t => t.messageId === e);
                null != a && _([{
                    ...a,
                    savedAt: new Date,
                    dueAt: t
                }], [a])
            }

            function h(e, t) {
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
                _([], t.filter(t => t.messageId === e))
            }

            function S() {
                d.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "clearing",
                    rating: "".concat(c.default.getMessageReminders().length)
                });
                let e = c.default.getMessageReminders();
                e.some(e => e.complete) && _([], e.filter(e => e.complete))
            }

            function C(e) {
                d.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "updated_from_server",
                    rating: "".concat(c.default.getMessageReminders().length)
                }), l.default.dispatch({
                    type: "SAVED_MESSAGES_UPDATE",
                    messages: e
                })
            }

            function _(e, t) {
                (0 !== e.length || 0 !== t.length) && a.default.post({
                    url: g.Endpoints.SAVED_MESSAGES,
                    body: {
                        added: e.map(f.savedMessageToServer),
                        removed: t.map(f.savedMessageToServer)
                    }
                }).then(e => {
                    C(e.body.saved_messages.map(f.savedMessageToClient))
                })
            }

            function T() {
                return c.default.recentlyFetched() ? Promise.resolve() : a.default.get({
                    url: g.Endpoints.SAVED_MESSAGES
                }).then(e => {
                    let t = e.body.saved_messages,
                        n = t.map(f.savedMessageToClient);
                    C(n)
                })
            }
        },
        979268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
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
            var r = l
        },
        520899: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("498225"),
                l = n("913144"),
                r = n("718517");
            let s = [],
                i = new Set,
                u = 0;
            class o extends a.default.Store {
                initialize() {
                    setInterval(() => {
                        this.emitChange()
                    }, 1 * r.default.Millis.MINUTE)
                }
                getMessageReminders() {
                    return s
                }
                isMessageReminder(e) {
                    let t = s.find(t => t.messageId === e);
                    return null != t && !t.complete
                }
                getOverdueMessageReminderCount() {
                    return s.filter(e => null == e.dueAt || new Date > e.dueAt).length
                }
                recentlyFetched() {
                    return new Date().getTime() - u < 1 * r.default.Millis.MINUTE
                }
                hasSentNotification(e) {
                    return i.has(e)
                }
                getState() {
                    return {
                        messages: s
                    }
                }
            }
            o.displayName = "MessageRemindersStore";
            var d = new o(l.default, {
                SAVED_MESSAGES_UPDATE: function(e) {
                    let {
                        messages: t
                    } = e;
                    u = new Date().getTime(), s = t.map(e => ({
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
                    } = e, a = s.findIndex(e => e.messageId === t);
                    if (-1 === a) return !1;
                    s[a] = {
                        ...s[a],
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
                    return r
                },
                savedMessageToClient: function() {
                    return s
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

            function r(e) {
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

            function s(e) {
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
            var l = n("830841"),
                r = n("307391"),
                s = n("173333"),
                i = n("913144"),
                u = n("404118"),
                o = n("819689"),
                d = n("115718"),
                c = n("689988"),
                f = n("408062"),
                g = n("619443"),
                E = n("582713"),
                m = n("233069"),
                h = n("982108"),
                p = n("42203"),
                S = n("305961"),
                C = n("660478"),
                _ = n("18494"),
                T = n("162771"),
                A = n("49111"),
                v = n("724210"),
                I = n("782340");
            let L = new r.default("MessageManager");

            function N(e) {
                let {
                    guildId: t,
                    channelId: n,
                    messageId: l,
                    forceFetch: r,
                    isPreload: i,
                    jumpType: u,
                    isHighlight: c,
                    skipLocalFetch: E,
                    logFailures: m
                } = e;
                if (null == n) {
                    m && L.log("Skipping fetch because channelId is null");
                    return
                }
                if ((0, v.isStaticChannelRoute)(n)) {
                    m && L.log("Skipping fetch because channelId is a static route");
                    return
                }
                let h = p.default.getChannel(n);
                if ((null == h ? void 0 : h.type) === A.ChannelTypes.GUILD_STORE || (null == h ? void 0 : h.type) != null && A.ChannelTypesSets.GUILD_THREADS_ONLY.has(h.type)) {
                    m && L.log("Skipping fetch because channel is a forum/store");
                    return
                }
                let _ = f.default.getOrCreate(n);
                null != _.jumpTargetId && null == l && (_ = _.mutate({
                    jumpTargetId: null,
                    jumped: !1,
                    jumpType: d.JumpTypes.ANIMATED
                }), f.default.commit(_)), null != _.focusTargetId && null == l && (_ = _.mutate({
                    focusTargetId: null
                }), f.default.commit(_));
                let T = r || c;
                if (!i || g.default.isConnected() || _.loadingMore ? _.loadingMore || _.ready && !_.cached ? null != l ? T = !0 : m && L.log("Skipping fetch because no other conditions matched") : null == t || null != S.default.getGuild(t) ? T = !0 : m && L.log("Skipping fetch we are connected and have loaded messages") : T = !0, T) {
                    if (f.default.commit(_.mutate({
                            loadingMore: !0
                        })), null != l) o.default.jumpToMessage({
                        channelId: n,
                        messageId: l,
                        flash: !0,
                        isPreload: i,
                        skipLocalFetch: E,
                        jumpType: u
                    });
                    else if ((null == h ? void 0 : h.isThread()) && function(e) {
                            if (C.default.hasOpenedThread(e)) return !1;
                            if (null == a) {
                                var t;
                                a = null !== (t = s.default.get(M, {})) && void 0 !== t ? t : {}
                            }
                            if (e in a) return !1;
                            a[e] = Date.now();
                            let n = Date.now() - 7776e6;
                            for (let e in a) a[e] < n && delete a[e];
                            return s.default.set(M, a), !0
                        }(n)) L.log("Jumping to start of thread ".concat(h.id)), o.default.fetchMessages({
                        channelId: n,
                        limit: A.MAX_MESSAGES_PER_CHANNEL,
                        jump: {
                            messageId: n,
                            flash: !1
                        },
                        isPreload: i,
                        skipLocalFetch: E
                    });
                    else if ((null == h ? void 0 : h.isThread()) && C.default.hasTrackedUnread(h.id) && !_.ready) {
                        let e = C.default.getTrackedAckMessageId(h.id);
                        L.log("Jumping to most recent message in thread ".concat(h.id, " - ").concat(e)), o.default.fetchMessages({
                            channelId: n,
                            limit: A.MAX_MESSAGES_PER_CHANNEL,
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
                        limit: A.MAX_MESSAGES_PER_CHANNEL,
                        isPreload: i,
                        skipLocalFetch: E,
                        jump: {
                            isHighlight: c,
                            jumpType: c ? d.JumpTypes.INSTANT : d.JumpTypes.ANIMATED
                        }
                    })
                }
            }
            let M = "viewedThreadIds";

            function y() {
                let e = _.default.getChannelId();
                if (null != e) {
                    let n = p.default.getChannel(e);
                    if (null != n) {
                        var t;
                        let e = (0, l.matchPath)(location.pathname, {
                            path: A.Routes.CHANNEL(":guild", ":channel", ":message"),
                            exact: !0
                        });
                        N({
                            guildId: n.getGuildId(),
                            channelId: n.id,
                            messageId: null == e ? void 0 : null === (t = e.params) || void 0 === t ? void 0 : t.message
                        }), O(n.getGuildId(), n.id)
                    }
                }
            }

            function R() {
                let {
                    isPreload: e,
                    skipLocalFetch: t,
                    logFailures: n
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = _.default.getChannelId();
                if (null != a) {
                    let l = p.default.getChannel(a);
                    null != l ? ((0, m.isTextChannel)(l.type) ? N({
                        guildId: l.getGuildId(),
                        channelId: l.id,
                        isPreload: e,
                        skipLocalFetch: t,
                        logFailures: n
                    }) : n && L.log("Skipping fetch because the selected channel is not a text channel"), O(l.getGuildId(), l.id)) : n && L.log("Skipping fetch because channel is null")
                } else n && L.log("Skipping fetch because there is no selected channel")
            }

            function b(e) {
                let {
                    guildId: t,
                    channelId: n,
                    messageId: a,
                    jumpType: l
                } = e;
                N({
                    guildId: t,
                    channelId: n,
                    messageId: a,
                    jumpType: l
                }), O(t, n)
            }

            function D(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                N({
                    guildId: t,
                    channelId: n
                })
            }

            function O(e, t) {
                let n = h.default.getCurrentSidebarChannelId(t);
                if (null == n) return;
                let a = h.default.getCurrentSidebarMessageId(t);
                N({
                    guildId: e,
                    channelId: n,
                    messageId: a
                })
            }

            function x() {
                let e = _.default.getChannelId(),
                    t = T.default.getGuildId();
                if (null == t || null == e) return;
                let n = h.default.getSidebarState(e);
                (null == n ? void 0 : n.type) !== E.SidebarType.VIEW_CHANNEL && O(t, e)
            }

            function w(e) {
                let {
                    guildId: t,
                    channelId: n,
                    context: a,
                    isHighlight: l
                } = e;
                a === A.CURRENT_APP_CONTEXT && (N({
                    guildId: t,
                    channelId: n,
                    isHighlight: l
                }), O(t, n))
            }

            function P(e) {
                let {
                    channel: t,
                    messageId: n
                } = e, a = t.guild_id;
                null != a && _.default.getChannelId(a) === t.id && N({
                    guildId: a,
                    channelId: t.id,
                    messageId: n
                })
            }

            function B(e) {
                let {
                    channelId: t
                } = e;
                o.default.fetchMessages({
                    channelId: t,
                    limit: A.MAX_MESSAGES_PER_CHANNEL
                })
            }

            function U(e) {
                let {
                    response: t
                } = e;
                if (null == t || null == t.body) return null;
                if (t.body.code === A.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
                    let e = t.body.retry_after;
                    null != e && u.default.show({
                        title: I.default.Messages.RATE_LIMITED,
                        body: I.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
                            retryAfterMinutes: Math.ceil(e / 60)
                        })
                    })
                }
            }
            let j = {};

            function F(e) {
                var t;
                let {
                    channelId: n,
                    jump: a,
                    isStale: l,
                    isPreview: r = !1
                } = e;
                if (r) return;
                let s = null !== (t = j[n]) && void 0 !== t ? t : 0;
                if (Date.now() - s < 1e4) return;
                j[n] = Date.now();
                let i = _.default.getChannelId(),
                    u = h.default.getCurrentSidebarChannelId(i),
                    d = n === i || n === u;
                l && g.default.isConnected() && d && o.default.fetchMessages({
                    channelId: n,
                    limit: A.MAX_MESSAGES_PER_CHANNEL,
                    jump: a
                })
            }

            function k(e) {
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

            function G(e) {
                let {
                    state: t
                } = e;
                if ("active" !== t) return !1;
                let n = _.default.getChannelId();
                if (null == n) return !1;
                o.default.fetchNewLocalMessages(n, A.MAX_MESSAGES_PER_CHANNEL)
            }
            class V extends c.default {
                _initialize() {
                    i.default.subscribe("CONNECTION_OPEN", y)
                }
                _terminate() {
                    i.default.unsubscribe("CONNECTION_OPEN", y)
                }
                constructor(...e) {
                    super(...e), this.fetchMessages = N, this.loadSelectedChannelIfNecessary = R, this.stores = new Map().set(h.default, x), this.actions = {
                        APP_STATE_UPDATE: G,
                        OVERLAY_INITIALIZE: y,
                        CHANNEL_SELECT: b,
                        VOICE_CHANNEL_SELECT: D,
                        THREAD_CREATE: P,
                        THREAD_LIST_SYNC: () => R(),
                        CHANNEL_CREATE: P,
                        CHANNEL_PRELOAD: w,
                        THREAD_CREATE_LOCAL: B,
                        GUILD_CREATE: () => R(),
                        MESSAGE_END_EDIT: U,
                        LOAD_MESSAGES_SUCCESS: F,
                        UPLOAD_FAIL: k,
                        CHANNEL_DELETE: () => R(),
                        THREAD_DELETE: () => R()
                    }
                }
            }
            var H = new V
        },
        553257: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                experiment: function() {
                    return l
                },
                usePomeloEligibility: function() {
                    return r
                },
                getPomeloEligibility: function() {
                    return s
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
                r = () => {
                    let {
                        enabled: e
                    } = l.useExperiment({
                        location: "faf26d_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                },
                s = () => {
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
        981184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("624748"),
                r = e => {
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
            var a = n("920040");
            n("773670");
            var l = n("498225"),
                r = n("819855"),
                s = n("21121"),
                i = n("161778"),
                u = n("168973"),
                o = n("559980");

            function d(e) {
                let {
                    children: t
                } = e, n = (0, l.useStateFromStores)([i.default], () => i.default.theme), d = (0, l.useStateFromStores)([u.default], () => u.default.useAMOLEDTheme === o.AMOLEDThemeState.ON), c = (0, s.useInMainTabsExperiment)(), f = 0;
                return d && (f = (0, r.setThemeFlag)(f, r.ThemeContextFlags.MOBILE_LEGACY_AMOLED_MODE_ENABLED)), c && (f = (0, r.setThemeFlag)(f, r.ThemeContextFlags.MOBILE_REDESIGN_ENABLED)), (0, a.jsx)(r.RootThemeContextProvider, {
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
            var a = n("498225"),
                l = n("223913"),
                r = n("305961"),
                s = n("957255");

            function i(e) {
                let t = (0, a.useStateFromStores)([r.default, s.default], () => e.isPrivate() || (0, l.canStreamInChannel)(e, r.default, s.default, !1), [e]);
                return t
            }

            function u(e) {
                return e.isPrivate() || (0, l.canStreamInChannel)(e, r.default, s.default, !1)
            }
        },
        289656: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getVideoButtonLabel: function() {
                    return r
                }
            });
            var a = n("49111"),
                l = n("782340");

            function r(e) {
                let {
                    enabled: t,
                    join: n,
                    channel: r,
                    cameraUnavailable: s,
                    hasPermission: i,
                    channelLimit: u = -1,
                    channelLimitReached: o = !1
                } = e, d = t ? l.default.Messages.CAMERA_OFF : l.default.Messages.CAMERA_ON;
                if (n) {
                    let e = (null == r ? void 0 : r.isManaged()) || !(null == r ? void 0 : r.isPrivate());
                    d = e ? l.default.Messages.CONNECT_TO_VIDEO : l.default.Messages.JOIN_VIDEO_CALL
                }
                return s && (d = l.default.Messages.CAMERA_UNAVAILABLE), !i && (d = l.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE), o && !t && (d = (null == r ? void 0 : r.isGuildStageVoice()) ? u >= a.MAX_STAGE_VIDEO_USER_LIMIT_TIER3 ? l.default.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED_MAX : l.default.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED : l.default.Messages.CAMERA_DISABLED_LIMIT_REACHED.format({
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
            var a = n("920040"),
                l = n("773670"),
                r = n("575482"),
                s = n.n(r),
                i = n("576458"),
                u = l.forwardRef(function(e, t) {
                    let {
                        children: n,
                        className: l,
                        style: r,
                        noBorder: u = !1,
                        participantUserId: o
                    } = e;
                    return (0, a.jsx)("div", {
                        className: s(l, i.tile, {
                            [i.noBorder]: u
                        }),
                        style: r,
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
            var a = n("920040");
            n("773670");
            var l = n("575482"),
                r = n.n(l),
                s = n("77078"),
                i = n("113327");

            function u(e) {
                let {
                    children: t,
                    onClick: n,
                    className: l,
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
                                null == n || n(e), null == u || u()
                            },
                            innerClassName: i.buttonReset,
                            color: r(i.cta, l),
                            size: s.Button.Sizes.MIN,
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
            var a = n("920040");
            n("773670");
            var l = n("575482"),
                r = n.n(l),
                s = n("77078"),
                i = n("145131"),
                u = n("179750");

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
                        className: r(u.art, u[d]),
                        style: {
                            backgroundImage: "url(".concat(f, ")")
                        }
                    }), null != l ? (0, a.jsx)(s.Text, {
                        color: "none",
                        variant: "text-md/semibold",
                        className: u.header,
                        children: l
                    }) : null, null != o ? (0, a.jsx)(s.Text, {
                        color: "none",
                        className: u.description,
                        variant: "text-sm/medium",
                        children: o
                    }) : null, E || null == n ? null : (0, a.jsx)(s.Button, {
                        className: u.outerButton,
                        size: s.Button.Sizes.NONE,
                        color: s.Button.Colors.WHITE,
                        look: s.Button.Looks.BLANK,
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
                    return A
                },
                default: function() {
                    return v
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("498225"),
                r = n("77078"),
                s = n("901582"),
                i = n("191145"),
                u = n("976074"),
                o = n("856343"),
                d = n("16916"),
                c = n("373469"),
                f = n("42887"),
                g = n("697218"),
                E = n("394832"),
                m = n("985622"),
                h = n("356553"),
                p = n("387111"),
                S = n("773336"),
                C = n("49111"),
                _ = n("860604"),
                T = n("782340");

            function A(e, t, n) {
                let a = (0, l.useStateFromStores)([i.default], () => i.default.getSelectedParticipantId(e.id)),
                    r = (0, l.useStateFromStores)([c.default], () => null != a ? c.default.getActiveStreamForStreamKey(a) : null, [a]),
                    s = (0, l.useStateFromStoresArray)([g.default], () => {
                        let a = n.filter(e => e.ownerId !== (null == t ? void 0 : t.id)).map(t => ({
                            stream: t,
                            username: p.default.getName(e.getGuildId(), e.id, g.default.getUser(t.ownerId))
                        }));
                        return 1 === a.length && a[0].stream.ownerId === (null == r ? void 0 : r.ownerId) ? [] : a
                    }, [e, r, n, t]);
                return s
            }

            function v(e) {
                var t;
                let {
                    channel: n,
                    currentUser: l,
                    activeStreams: i,
                    hideSelfOptions: c = !1,
                    showReportOption: g = !1,
                    handleGoLive: p,
                    onClose: v,
                    onSelect: I,
                    appContext: L = C.AppContext.APP
                } = e, N = f.default.supports(_.Features.DESKTOP_CAPTURE_APPLICATIONS), M = null !== (t = i.find(e => e.ownerId === (null == l ? void 0 : l.id))) && void 0 !== t ? t : null, y = A(n, l, i), R = (0, o.default)(M, L), b = (0, u.default)(M, L, C.NOOP_NULL), D = null == M ? (0, a.jsx)(r.MenuItem, {
                    id: "share-your-screen",
                    label: T.default.Messages.SHARE_YOUR_SCREEN,
                    icon: E.default,
                    action: p
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [S.isPlatformEmbedded ? (0, a.jsx)(r.MenuItem, {
                        id: "stream-settings",
                        label: T.default.Messages.SCREENSHARE_STREAM_QUALITY,
                        children: R
                    }) : null, g ? b : null, N ? (0, a.jsx)(r.MenuItem, {
                        id: "change-windows",
                        label: T.default.Messages.SCREENSHARE_CHANGE_WINDOWS,
                        icon: E.default,
                        action: p
                    }) : null, (0, a.jsx)(r.MenuItem, {
                        id: "stop-streaming",
                        label: T.default.Messages.STOP_STREAMING,
                        icon: m.default,
                        action: () => (0, d.default)(M)
                    })]
                });
                return (0, a.jsx)(s.default, {
                    section: C.AnalyticsSections.CONTEXT_MENU,
                    children: (0, a.jsxs)(r.Menu, {
                        onSelect: I,
                        navId: "manage-streams",
                        onClose: v,
                        "aria-label": null != M ? T.default.Messages.STOP_STREAMING : T.default.Messages.SHARE_YOUR_SCREEN,
                        children: [(0, a.jsx)(r.MenuGroup, {
                            children: y.map(e => {
                                let {
                                    stream: t,
                                    username: n
                                } = e;
                                return (0, a.jsx)(r.MenuItem, {
                                    id: t.ownerId,
                                    label: T.default.Messages.STOP_WATCHING_USER.format({
                                        username: n
                                    }),
                                    icon: h.default,
                                    action: () => (0, d.default)(t)
                                }, "manage-stream-menu".concat(t.ownerId))
                            })
                        }), c ? null : D]
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
            var a = n("920040"),
                l = n("773670"),
                r = n("498225"),
                s = n("990766"),
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
                } = e, E = (0, r.useStateFromStores)([u.default], () => u.default.getChannel(t.channelId));
                return l.useEffect(() => {
                    (null == E ? void 0 : E.isGuildStageVoice()) && (0, s.closeStream)((0, i.encodeStreamKey)(t), !1)
                }, []), (0, a.jsx)(o.default, {
                    artURL: c,
                    noArt: f,
                    selected: g,
                    size: (0, o.getSizeForWidth)(n),
                    header: d.default.Messages.STREAM_ENDED,
                    onCTAClick: () => (0, s.closeStream)((0, i.encodeStreamKey)(t)),
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
            var a = n("920040");
            n("773670");
            var l = n("990766"),
                r = n("374014"),
                s = n("701909"),
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
                        helpUrl: s.default.getArticleURL(u.HelpdeskArticles.STREAM_FAILED)
                    }),
                    onCTAClick: () => (0, l.closeStream)((0, r.encodeStreamKey)(t)),
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
            var a = n("920040");
            n("773670");
            var l = n("575482"),
                r = n.n(l),
                s = n("498225"),
                i = n("77078"),
                u = n("990766"),
                o = n("373469"),
                d = n("271938"),
                c = n("30672"),
                f = n("100844"),
                g = n("607391"),
                E = n("782340"),
                m = n("470458");
            let h = n("588281");

            function p(e) {
                let {
                    participant: t,
                    width: n,
                    noArt: l = !1,
                    selected: p = !1
                } = e, S = n < 195, C = (0, s.useStateFromStores)([o.default, d.default], () => o.default.getAllActiveStreams().some(e => {
                    let {
                        ownerId: t
                    } = e;
                    return t !== d.default.getId()
                }));
                return (0, a.jsx)("div", {
                    className: r(m.content, m.streamHidden, {
                        [m.small]: S
                    }),
                    children: (0, a.jsx)(g.default, {
                        className: m.streamHiddenEmptyState,
                        artURL: h,
                        noArt: l,
                        selected: p,
                        size: (0, g.getSizeForWidth)(n),
                        header: S ? null : E.default.Messages.STREAM_HIDDEN,
                        description: p ? null : (0, a.jsxs)("div", {
                            className: r(m.streamHiddenCTA, {
                                [m.largePaddingTop]: !S
                            }),
                            children: [(0, a.jsx)(f.CallTileCTA, {
                                isSmall: S,
                                children: (0, a.jsx)(i.Text, {
                                    variant: S ? "text-sm/semibold" : "text-md/semibold",
                                    color: "none",
                                    children: n < 175 ? E.default.Messages.WATCH : E.default.Messages.WATCH_STREAM
                                })
                            }), C ? (0, a.jsx)(f.CallTileCTA, {
                                className: m.addCTA,
                                tooltip: E.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
                                onClick: e => {
                                    e.stopPropagation(), (0, u.watchStream)(t.stream, {
                                        forceMultiple: !0
                                    })
                                },
                                isSmall: S,
                                children: (0, a.jsx)(c.default, {
                                    className: m.addStreamIcon
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
            var a = n("920040");
            n("773670");
            var l = n("77078"),
                r = n("42887"),
                s = n("860604"),
                i = n("782340");

            function u(e) {
                r.default.supports(s.Features.VIDEO) ? (0, l.openModalLazy)(async () => {
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
                    return r => (0, a.jsx)(t, {
                        ...r,
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
                    return s
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("77078"),
                r = n("782340");

            function s() {
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
                        header: r.default.Messages.SCREENSHARE_UNAVAILABLE,
                        body: r.default.Messages.SCREENSHARE_UNAVAILABLE_DOWNLOAD_APP,
                        confirmText: r.default.Messages.DOWNLOAD_APP,
                        onConfirm: e
                    })
                })
            }
        },
        799808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("77078"),
                r = n("990766"),
                s = n("773356"),
                i = n("349171"),
                u = n("292687"),
                o = n("305961"),
                d = n("42887"),
                c = n("697218"),
                f = n("773336"),
                g = n("49111"),
                E = n("686298");

            function m(e, t, m) {
                let h = u.default.getWindowOpen(g.PopoutWindowKeys.CHANNEL_CALL_POPOUT) ? g.PopoutWindowKeys.CHANNEL_CALL_POPOUT : null;
                if ((0, i.default)(h), f.isPlatformEmbedded)(0, l.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("451863").then(n.bind(n, "451863"));
                    return n => (0, a.jsx)(t, {
                        ...n,
                        guildId: e,
                        analyticsLocation: m
                    })
                });
                else {
                    var p;
                    let n = (0, s.default)(E.ApplicationStreamPresets.PRESET_CUSTOM, E.ApplicationStreamResolutions.RESOLUTION_1080, E.ApplicationStreamFPS.FPS_30, c.default.getCurrentUser(), null === (p = o.default.getGuild(e)) || void 0 === p ? void 0 : p.premiumTier) ? {
                        width: 1920,
                        height: 1080
                    } : {
                        width: 1280,
                        height: 720
                    };
                    d.default.getMediaEngine().getDesktopSource(n, !0).then(n => {
                        (0, r.startStream)(e, t, {
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
            var a = n("920040");
            n("773670");
            var l = n("607391"),
                r = n("145131"),
                s = n("979827");

            function i(e) {
                let {
                    mainText: t,
                    supportingText: n,
                    children: i,
                    size: u
                } = e;
                return (0, a.jsxs)(r.default, {
                    className: s.root,
                    justify: r.default.Justify.CENTER,
                    align: r.default.Align.CENTER,
                    direction: r.default.Direction.VERTICAL,
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
            var a = n("920040");
            n("773670");
            var l = n("550766"),
                r = n("893011"),
                s = n("981913"),
                i = n("782340");

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
                        (0, l.stopEmbeddedActivity)({
                            channelId: t,
                            applicationId: n
                        })
                    },
                    iconComponent: r.default,
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
            var a = n("920040");
            n("773670");
            var l = n("987317"),
                r = n("713726"),
                s = n("754493"),
                i = n("293137"),
                u = n("981913"),
                o = n("782340");

            function d(e) {
                let {
                    centerButton: t = !1,
                    channel: n,
                    onClick: d,
                    ...c
                } = e, f = t ? u.CenterControlButton : u.default, g = n.isBroadcastChannel(), E = (0, s.useIsBroadcastingInChannel)(n.id);
                return (0, a.jsx)(f, {
                    ...c,
                    onClick: () => {
                        E && (0, r.stopBroadcast)(), l.default.disconnect(), null == d || d()
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
            var a = n("920040");
            n("773670");
            var l = n("575482"),
                r = n.n(l),
                s = n("758710"),
                i = n("981913"),
                u = n("782340"),
                o = n("461498");

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
                    iconComponent: s.default,
                    iconClassName: r({
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
            var a = n("920040");
            n("773670");
            var l = n("985622"),
                r = n("356553"),
                s = n("981913"),
                i = n("782340");

            function u(e) {
                let {
                    isSelfStream: t,
                    centerButton: n = !1,
                    ...u
                } = e, o = n ? s.CenterControlButton : s.default;
                return (0, a.jsx)(o, {
                    label: t ? i.default.Messages.STOP_STREAMING : i.default.Messages.STOP_WATCHING,
                    iconComponent: t ? l.default : r.default,
                    isActive: !0,
                    ...u
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
            var a = n("920040");
            n("773670");
            var l = n("575482"),
                r = n.n(l),
                s = n("244201"),
                i = n("289656"),
                u = n("437825"),
                o = n("981913"),
                d = n("957839");

            function c(e) {
                let t = (0, i.getVideoButtonLabel)(e),
                    {
                        enabled: n,
                        cameraUnavailable: l,
                        onChange: r,
                        onCameraUnavailable: o,
                        hasPermission: d,
                        children: c,
                        channelLimitReached: f = !1
                    } = e,
                    g = (0, s.useAppContext)(),
                    E = l ? () => o() : () => r(!e.enabled, g);
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
                    onChange: s,
                    onCameraUnavailable: i,
                    cameraUnavailable: u,
                    hasPermission: f,
                    className: g,
                    channelLimitReached: E,
                    channelLimit: m,
                    centerButton: h = !1,
                    onPopoutClick: p,
                    ...S
                } = e, C = h ? o.CenterControlButton : o.default;
                return (0, a.jsx)(c, {
                    enabled: t,
                    join: n,
                    channel: l,
                    onChange: s,
                    onCameraUnavailable: i,
                    cameraUnavailable: u,
                    hasPermission: f,
                    channelLimitReached: E,
                    channelLimit: m,
                    children: e => {
                        let {
                            unavailable: n,
                            ...l
                        } = e;
                        return (0, a.jsx)(C, {
                            ...l,
                            ...S,
                            isActive: t,
                            className: r(g, {
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
            var a = n("498225"),
                l = n("913144"),
                r = n("599110"),
                s = n("773336"),
                i = n("49111");
            let u = {
                    desktopType: s.isPlatformEmbedded ? i.DesktopNotificationTypes.ALL : i.DesktopNotificationTypes.NEVER,
                    disableAllSounds: !1,
                    disabledSounds: [],
                    ttsType: i.TTSNotificationTypes.NEVER,
                    disableUnreadBadge: !1,
                    taskbarFlash: !0,
                    notifyMessagesInSelectedChannel: !1
                },
                o = u;

            function d(e, t) {
                !__OVERLAY__ && r.default.track(e, t)
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
                return t.disabledSounds = t.disabledSounds || [], t.disableUnreadBadge = t.disableUnreadBadge || !1, t.taskbarFlash = null == t.taskbarFlash || t.taskbarFlash, t.ttsType = t.ttsType || i.TTSNotificationTypes.NEVER, null == t.desktopType && (t.desktopType = s.isPlatformEmbedded ? i.DesktopNotificationTypes.ALL : i.DesktopNotificationTypes.NEVER), t
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
        90404: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("920040"),
                l = n("773670"),
                r = n("575482"),
                s = n.n(r),
                i = n("77078"),
                u = n("145131"),
                o = n("113729");
            class d extends l.PureComponent {
                render() {
                    let {
                        note: e,
                        title: t,
                        action: n,
                        className: l
                    } = this.props;
                    return (0, a.jsx)("div", {
                        className: s(o.wrapper, l),
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
                                children: [(0, a.jsx)(i.H, {
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
        427302: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("920040"),
                l = n("773670"),
                r = n("575482"),
                s = n.n(r),
                i = n("77078"),
                u = n("145079"),
                o = n("86621"),
                d = n("506885"),
                c = n("981601"),
                f = n("145131"),
                g = n("49111"),
                E = n("43098");
            class m extends l.Component {
                render() {
                    let {
                        popoutOpen: e
                    } = this.state, {
                        user: t,
                        analyticsContext: n,
                        disablePopout: l,
                        guildId: r
                    } = this.props, s = {
                        location: {
                            ...n.location,
                            object: g.AnalyticsObjects.LIST_ITEM
                        }
                    };
                    return (0, a.jsx)(i.Popout, {
                        preload: () => (0, d.default)(t.id, t.getAvatarURL(r, 80), {
                            guildId: r
                        }),
                        renderPopout: e => (0, a.jsx)(c.default, {
                            ...e,
                            guildId: r,
                            userId: t.id,
                            analyticsParams: s
                        }),
                        position: "left",
                        onRequestClose: this.handleUserPopoutClose,
                        shouldShow: !l && e,
                        children: e => this.renderUserPopout(e)
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutOpen: !1
                    }, this.handleClickUser = () => {
                        let {
                            onPopoutOpen: e
                        } = this.props;
                        this.setState({
                            popoutOpen: !this.state.popoutOpen
                        }), null == e || e()
                    }, this.handleUserPopoutClose = () => {
                        let {
                            onPopoutClose: e
                        } = this.props;
                        this.setState({
                            popoutOpen: !1
                        }), null == e || e()
                    }, this.renderUserPopout = e => {
                        let {
                            className: t,
                            disablePopout: n,
                            onContextMenu: l,
                            user: r,
                            status: o,
                            textClassName: d,
                            nick: c,
                            guildId: g
                        } = this.props;
                        return (0, a.jsxs)(f.default, {
                            align: f.default.Align.CENTER,
                            className: s(E.memberListItem, t, {
                                [E.popoutDisabled]: n
                            }),
                            onContextMenu: l,
                            onMouseDown: e.onMouseDown,
                            onKeyDown: e.onKeyDown,
                            onClick: this.handleClickUser,
                            children: [(0, a.jsx)(i.Avatar, {
                                src: r.getAvatarURL(g, 24),
                                className: E.avatar,
                                "aria-label": r.username,
                                size: i.AvatarSizes.SIZE_24,
                                status: o
                            }), (0, a.jsx)(i.Text, {
                                className: s(E.memberListItemTag, d),
                                variant: "text-sm/normal",
                                children: (0, a.jsx)(u.default, {
                                    user: r,
                                    nick: c,
                                    usernameClass: E.username,
                                    hideDiscriminator: !0
                                })
                            })]
                        })
                    }
                }
            }
            m.defaultProps = {
                disablePopout: !1
            };
            var h = (0, o.default)(m)
        },
        754775: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("920040"),
                l = n("773670"),
                r = n("912557"),
                s = n("77078"),
                i = n("462274"),
                u = n("181832"),
                o = n("981184"),
                d = n("506885"),
                c = n("217513"),
                f = n("845579"),
                g = n("886439"),
                E = function(e) {
                    let {
                        style: t,
                        src: n,
                        backgroundSrc: E,
                        userId: m,
                        pulseSpeakingIndicator: h = !1,
                        speaking: p = !1,
                        ...S
                    } = e, C = null != E ? E : n, _ = (0, i.default)(C, r.default.unsafe_rawColors.PRIMARY_800.css), T = (0, u.useCallBannerBackgroundExperiment)(!0, "VideoBackground-web").enabled, A = (0, c.default)(null != m ? m : ""), v = null == A ? void 0 : A.getBannerURL({
                        size: 1024,
                        canAnimate: f.GifAutoPlay.getSetting()
                    });
                    if (l.useEffect(() => {
                            null != m && T && (0, d.default)(m, void 0, {
                                dispatchWait: !0
                            })
                        }, [T, m]), null == n) return null;
                    let I = (0, a.jsx)(s.Avatar, {
                            className: g.avatarWrapper,
                            src: n,
                            ...S
                        }),
                        L = {
                            ...t,
                            backgroundColor: _
                        };
                    return null != v && p && T && (L.backgroundImage = "url(".concat(v, ")"), L.backgroundSize = "cover"), (0, a.jsx)("div", {
                        style: L,
                        className: g.background,
                        children: h ? (0, a.jsx)(o.default, {
                            shouldAnimate: p,
                            children: I
                        }) : I
                    })
                }
        },
        293137: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("469563"),
                r = n("739086"),
                s = n("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, s.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            className: r,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21.1169 1.11603L22.8839 2.88403L19.7679 6.00003L22.8839 9.11603L21.1169 10.884L17.9999 7.76803L14.8839 10.884L13.1169 9.11603L16.2329 6.00003L13.1169 2.88403L14.8839 1.11603L17.9999 4.23203L21.1169 1.11603ZM18 22H13C6.925 22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 14.938 9 18 13 18V17C13 16.447 13.447 16 14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22Z"
                        })
                    })
                }, r.PhoneHangUpIcon)
        },
        270227: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("75196");

            function r(e) {
                let {
                    width: t = 55,
                    height: n = 16,
                    color: r = "currentColor",
                    foreground: s,
                    ...i
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 55 16",
                    children: (0, a.jsxs)("g", {
                        fill: r,
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
        774223: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("469563"),
                r = n("625665"),
                s = n("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        className: r,
                        foreground: i,
                        ...u
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, s.default)(u),
                        className: r,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            className: i,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2 11C2 6.02944 6.02944 2 11 2H13C17.9706 2 22 6.02944 22 11V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V11ZM5.88 5.82497C4.71048 6.55593 4 7.83781 4 9.21697V18.7192C4 19.3698 4.61139 19.8471 5.24254 19.6893L10.9558 18.261C11.5695 18.1076 12 17.5562 12 16.9236V9.21697C12 6.07522 8.5442 4.15985 5.88 5.82497ZM10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12V14C8 14.5523 8.44772 15 9 15C9.55228 15 10 14.5523 10 14V12ZM17.6832 9.47564C17.4485 8.84145 16.5515 8.84145 16.3168 9.47564L16.1387 9.95707C15.9361 10.5045 15.5045 10.9361 14.9571 11.1387L14.4756 11.3168C13.8415 11.5515 13.8415 12.4485 14.4756 12.6832L14.9571 12.8613C15.5045 13.0639 15.9361 13.4955 16.1387 14.0429L16.3168 14.5244C16.5515 15.1585 17.4485 15.1585 17.6832 14.5244L17.8613 14.0429C18.0639 13.4955 18.4955 13.0639 19.0429 12.8613L19.5244 12.6832C20.1585 12.4485 20.1585 11.5515 19.5244 11.3168L19.0429 11.1387C18.4955 10.9361 18.0639 10.5045 17.8613 9.95707L17.6832 9.47564ZM14.1584 5.23782C14.2758 4.92073 14.7242 4.92073 14.8416 5.23782C14.9994 5.66433 15.3357 6.0006 15.7622 6.15842C16.0793 6.27576 16.0793 6.72424 15.7622 6.84158C15.3357 6.9994 14.9994 7.33567 14.8416 7.76218C14.7242 8.07927 14.2758 8.07927 14.1584 7.76218C14.0006 7.33567 13.6643 6.9994 13.2378 6.84158C12.9207 6.72424 12.9207 6.27576 13.2378 6.15842C13.6643 6.0006 14.0006 5.66433 14.1584 5.23782ZM18.8416 16.2378C18.7242 15.9207 18.2758 15.9207 18.1584 16.2378C18.0006 16.6643 17.6643 17.0006 17.2378 17.1584C16.9207 17.2758 16.9207 17.7242 17.2378 17.8416C17.6643 17.9994 18.0006 18.3357 18.1584 18.7622C18.2758 19.0793 18.7242 19.0793 18.8416 18.7622C18.9994 18.3357 19.3357 17.9994 19.7622 17.8416C20.0793 17.7242 20.0793 17.2758 19.7622 17.1584C19.3357 17.0006 18.9994 16.6643 18.8416 16.2378Z"
                        })
                    })
                }, r.DoorPremiumIcon)
        },
        893011: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("469563"),
                r = n("354087"),
                s = n("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, s.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            className: r,
                            fill: l,
                            d: "M18 2H7C5.897 2 5 2.898 5 4V11H12.59L10.293 8.708L11.706 7.292L16.414 11.991L11.708 16.706L10.292 15.294L12.582 13H5V20C5 21.103 5.897 22 7 22H18C19.103 22 20 21.103 20 20V4C20 2.898 19.103 2 18 2Z"
                        })
                    })
                }, r.DoorExitIcon)
        },
        356553: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("469563"),
                r = n("424572"),
                s = n("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, s.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, a.jsx)("path", {
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M20 11V13.5H4V4.5H13V2.5H4C3.46957 2.5 2.96086 2.71071 2.58579 3.08579C2.21071 3.46086 2 3.96957 2 4.5L2 15.5C2 16.0304 2.21071 16.5391 2.58579 16.9142C2.96086 17.2893 3.46957 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C20.5304 17.5 21.0391 17.2893 21.4142 16.9142C21.7893 16.5391 22 16.0304 22 15.5V11H20Z",
                            fill: l
                        }), (0, a.jsx)("path", {
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M23 2.45174L21.5483 1L19.0051 3.55341L16.4517 1L15 2.45174L17.5534 4.99485L15 7.54826L16.4517 9L19.0051 6.44659L21.5483 9L23 7.54826L20.4466 4.99485L23 2.45174Z",
                            fill: l
                        })]
                    })
                }, r.ScreenStopWatchingIcon)
        },
        940277: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("75196");

            function r(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: r = "currentColor",
                    foreground: s,
                    ...i
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsx)("polygon", {
                        fill: r,
                        className: s,
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
                    return r
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("75196");

            function r(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: r = "currentColor",
                    foreground: s,
                    ...i
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsx)("path", {
                        stroke: r,
                        className: s,
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
                    return r
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("75196");

            function r(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: r = "currentColor",
                    foreground: s,
                    ...i
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsx)("rect", {
                        width: "9",
                        height: "9",
                        x: "1.5",
                        y: "1.5",
                        fill: "none",
                        stroke: r,
                        className: s
                    })
                })
            }
        },
        655804: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("75196");

            function r(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: r = "currentColor",
                    foreground: s,
                    ...i
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsxs)("g", {
                        fill: r,
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
        58463: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("75196");

            function r(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: r = "currentColor",
                    foreground: s,
                    ...i
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsx)("rect", {
                        className: s,
                        fill: r,
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
                    return r
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("75196");

            function r(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: r = "currentColor",
                    foreground: s,
                    ...i
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsx)("rect", {
                        fill: r,
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
        336921: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setupWindow: function() {
                    return i
                }
            });
            var a = n("741148"),
                l = n("563680"),
                r = n("816454"),
                s = n("421804");

            function i(e) {
                let t = e.document,
                    n = (0, r.setupWindowId)(e);

                function i() {
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
                    }), s.INTERACTION_EVENTS)) t.addEventListener(n, i, !0), t.addEventListener(n, u, !1);
                (0, l.subscribeDocumentToFullScreenChange)(t, function() {
                    (0, a.fullscreenChange)(e)
                }), (0, a.init)(e)
            }
        }
    }
]);
//# sourceMappingURL=198bf125b0c52d28ceec.js.map