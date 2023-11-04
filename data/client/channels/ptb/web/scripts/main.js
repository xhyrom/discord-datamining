(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["87711"], {
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
        629109: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("913144"),
                r = n("504385"),
                l = n("439141"),
                i = n("533222"),
                s = n("42887"),
                o = n("599110"),
                u = n("709681"),
                d = n("12307"),
                c = n("49111"),
                f = n("353927");

            function p() {
                (0, u.playSound)("mention3")
            }

            function E(e, t, n, a, r) {
                if (t === n) return;
                let l = e[t],
                    s = e[n];
                o.default.track(c.AnalyticEvents.MEDIA_DEVICE_CHANGED, {
                    device_from_name: i.default.getCertifiedDeviceName(t, null != l ? l.name : ""),
                    device_to_name: i.default.getCertifiedDeviceName(n, null != s ? s.name : ""),
                    device_type: a,
                    device_is_certified: i.default.isCertified(n),
                    location: r
                })
            }
            let h = {
                isNotSupported: () => !1,
                enable: e => Promise.resolve(!0)
            };
            h = n("412905");
            let {
                enable: g,
                isNotSupported: m
            } = h;
            var S = {
                enable: g,
                toggleSelfMute() {
                    let {
                        context: e = f.MediaEngineContextTypes.DEFAULT,
                        syncRemote: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return m() ? Promise.resolve() : s.default.isEnabled() ? a.default.dispatch({
                        type: "AUDIO_TOGGLE_SELF_MUTE",
                        context: e,
                        syncRemote: t
                    }) : this.enable(!0)
                },
                setTemporarySelfMute(e) {
                    !m() && a.default.dispatch({
                        type: "AUDIO_SET_TEMPORARY_SELF_MUTE",
                        mute: e
                    })
                },
                toggleSelfDeaf() {
                    let {
                        context: e = f.MediaEngineContextTypes.DEFAULT,
                        syncRemote: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    !m() && a.default.dispatch({
                        type: "AUDIO_TOGGLE_SELF_DEAF",
                        context: e,
                        syncRemote: t
                    })
                },
                toggleLocalMute(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.MediaEngineContextTypes.DEFAULT;
                    !m() && a.default.dispatch({
                        type: "AUDIO_TOGGLE_LOCAL_MUTE",
                        context: t,
                        userId: e
                    })
                },
                toggleLocalSoundboardMute(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.MediaEngineContextTypes.DEFAULT;
                    a.default.dispatch({
                        type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE",
                        context: t,
                        userId: e
                    })
                },
                setDisableLocalVideo(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.MediaEngineContextTypes.DEFAULT,
                        r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    !m() && a.default.dispatch({
                        type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
                        context: n,
                        userId: e,
                        videoToggleState: t,
                        persist: r,
                        isAutomatic: l
                    })
                },
                setLocalVolume(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.MediaEngineContextTypes.DEFAULT;
                    a.default.dispatch({
                        type: "AUDIO_SET_LOCAL_VOLUME",
                        context: n,
                        userId: e,
                        volume: (0, r.snapVolumeToDefault)(t, n)
                    })
                },
                setLocalPan(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f.MediaEngineContextTypes.DEFAULT;
                    a.default.dispatch({
                        type: "AUDIO_SET_LOCAL_PAN",
                        context: r,
                        userId: e,
                        left: t,
                        right: n
                    })
                },
                setMode(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.MediaEngineContextTypes.DEFAULT;
                    !m() && a.default.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: n,
                        mode: e,
                        options: {
                            ...s.default.getModeOptions(n),
                            ...t
                        }
                    })
                },
                setInputVolume(e) {
                    !m() && a.default.dispatch({
                        type: "AUDIO_SET_INPUT_VOLUME",
                        volume: e
                    })
                },
                setOutputVolume(e) {
                    !m() && a.default.dispatch({
                        type: "AUDIO_SET_OUTPUT_VOLUME",
                        volume: e
                    })
                },
                setInputDevice(e, t) {
                    if (!m()) {
                        if (null != t) {
                            let n = s.default.getInputDevices(),
                                a = s.default.getInputDeviceId();
                            E(n, a, e, "Audio Input", t)
                        }
                        a.default.dispatch({
                            type: "AUDIO_SET_INPUT_DEVICE",
                            id: e
                        }), p()
                    }
                },
                setOutputDevice(e, t) {
                    if (!m()) {
                        if (null != t) {
                            let n = s.default.getOutputDevices(),
                                a = s.default.getOutputDeviceId();
                            E(n, a, e, "Audio Output", t)
                        }
                        a.default.dispatch({
                            type: "AUDIO_SET_OUTPUT_DEVICE",
                            id: e
                        }), p()
                    }
                },
                setVideoDevice(e, t) {
                    if (!m()) {
                        if (null != t) {
                            let n = s.default.getVideoDevices(),
                                a = s.default.getVideoDeviceId();
                            E(n, a, e, "Video", t)
                        }
                        a.default.dispatch({
                            type: "MEDIA_ENGINE_SET_VIDEO_DEVICE",
                            id: e
                        })
                    }
                },
                setEchoCancellation(e, t) {
                    !m() && a.default.dispatch({
                        type: "AUDIO_SET_ECHO_CANCELLATION",
                        enabled: e,
                        location: t
                    })
                },
                setLoopback(e) {
                    !m() && a.default.dispatch({
                        type: "AUDIO_SET_LOOPBACK",
                        enabled: e
                    })
                },
                setNoiseSuppression(e, t) {
                    !m() && a.default.dispatch({
                        type: "AUDIO_SET_NOISE_SUPPRESSION",
                        enabled: e,
                        location: t
                    })
                },
                setNoiseCancellation(e, t) {
                    !m() && (a.default.dispatch({
                        type: "AUDIO_SET_NOISE_CANCELLATION",
                        enabled: e,
                        location: t
                    }), a.default.dispatch({
                        type: "AUDIO_SET_NOISE_SUPPRESSION",
                        enabled: !e,
                        location: t
                    }))
                },
                setAutomaticGainControl(e, t) {
                    !m() && a.default.dispatch({
                        type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL",
                        enabled: e,
                        location: t
                    })
                },
                setExperimentalEncoders(e) {
                    !m() && a.default.dispatch({
                        type: "MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS",
                        enabled: e
                    })
                },
                setHardwareH264(e) {
                    !m() && a.default.dispatch({
                        type: "MEDIA_ENGINE_SET_HARDWARE_H264",
                        enabled: e
                    })
                },
                setAttenuation(e, t, n) {
                    !m() && a.default.dispatch({
                        type: "AUDIO_SET_ATTENUATION",
                        attenuation: e,
                        attenuateWhileSpeakingSelf: t,
                        attenuateWhileSpeakingOthers: n
                    })
                },
                setQoS(e) {
                    !m() && a.default.dispatch({
                        type: "AUDIO_SET_QOS",
                        enabled: e
                    })
                },
                reset() {
                    !m() && a.default.dispatch({
                        type: "AUDIO_RESET"
                    })
                },
                setSilenceWarning(e) {
                    !m() && a.default.dispatch({
                        type: "AUDIO_SET_DISPLAY_SILENCE_WARNING",
                        enabled: e
                    })
                },
                setDebugLogging(e) {
                    !m() && a.default.dispatch({
                        type: "AUDIO_SET_DEBUG_LOGGING",
                        enabled: e
                    })
                },
                setVideoHook(e) {
                    !m() && a.default.dispatch({
                        type: "MEDIA_ENGINE_SET_VIDEO_HOOK",
                        enabled: e
                    })
                },
                setExperimentalSoundshare(e) {
                    !m() && a.default.dispatch({
                        type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE",
                        enabled: e
                    })
                },
                setAudioSubsystem(e) {
                    !m() && a.default.dispatch({
                        type: "AUDIO_SET_SUBSYSTEM",
                        subsystem: e
                    })
                },
                setVideoEnabled(e) {
                    (0, l.applyInitialVideoBackgroundOption)(), a.default.dispatch({
                        type: "MEDIA_ENGINE_SET_VIDEO_ENABLED",
                        enabled: e
                    })
                },
                setGoLiveSource(e) {
                    (null == e ? void 0 : e.qualityOptions) != null && (0, d.trackStreamSettingsUpdate)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate), a.default.dispatch({
                        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                        settings: e
                    })
                },
                setOpenH264(e) {
                    !m() && a.default.dispatch({
                        type: "MEDIA_ENGINE_SET_OPEN_H264",
                        enabled: e
                    })
                },
                setAV1Enabled(e) {
                    !m() && a.default.dispatch({
                        type: "MEDIA_ENGINE_SET_AV1",
                        enabled: e
                    })
                },
                setH265Enabled(e) {
                    !m() && a.default.dispatch({
                        type: "MEDIA_ENGINE_SET_H265",
                        enabled: e
                    })
                },
                setAecDump(e) {
                    !m() && a.default.dispatch({
                        type: "MEDIA_ENGINE_SET_AEC_DUMP",
                        enabled: e
                    })
                },
                interact() {
                    !m() && a.default.dispatch({
                        type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                        required: !1
                    })
                },
                enableSoundshare() {
                    !m() && a.default.dispatch({
                        type: "MEDIA_ENGINE_ENABLE_SOUNDSHARE"
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
                    return l
                },
                hide: function() {
                    return i
                },
                show: function() {
                    return s
                },
                moveTo: function() {
                    return o
                },
                updateRect: function() {
                    return u
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

            function l(e) {
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

            function s(e) {
                a.default.dispatch({
                    type: "PICTURE_IN_PICTURE_SHOW",
                    id: e
                })
            }

            function o(e, t) {
                a.default.dispatch({
                    type: "PICTURE_IN_PICTURE_MOVE",
                    id: e,
                    position: t
                })
            }

            function u(e, t) {
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
        412905: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isNotSupported: function() {
                    return E
                },
                enable: function() {
                    return g
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("913144"),
                i = n("605250"),
                s = n("42887"),
                o = n("599110"),
                u = n("49111"),
                d = n("180524"),
                c = n("782340");
            let f = new i.default("AudioActionCreators");

            function p() {
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("649486").then(n.bind(n, "649486"));
                    return t => (0, a.jsx)(e, {
                        source: "Unsupported Browser",
                        ...t
                    })
                })
            }

            function E() {
                return !s.default.isSupported() && ((0, r.openModal)(e => (0, a.jsx)(r.ConfirmModal, {
                    header: c.default.Messages.UNSUPPORTED_BROWSER,
                    confirmText: c.default.Messages.DOWNLOAD_APP,
                    cancelText: c.default.Messages.CANCEL,
                    onConfirm: p,
                    confirmButtonColor: r.Button.Colors.BRAND,
                    ...e,
                    children: (0, a.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: c.default.Messages.UNSUPPORTED_BROWSER_DETAILS
                    })
                })), !0)
            }

            function h(e) {
                o.default.track(u.AnalyticEvents.PERMISSIONS_ACKED, {
                    type: "audio",
                    action: e
                })
            }

            function g() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return E() ? Promise.resolve(!1) : (o.default.track(u.AnalyticEvents.PERMISSIONS_REQUESTED, {
                    type: "audio"
                }), s.default.getMediaEngine().enable().then(() => {
                    l.default.dispatch({
                        type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                        enabled: !0,
                        unmute: e
                    }), h(d.NativePermissionStates.ACCEPTED)
                }, e => {
                    switch (e) {
                        case u.UserMediaErrors.NO_DEVICES_FOUND:
                            h(d.NativePermissionStates.NO_DEVICES);
                            break;
                        case u.UserMediaErrors.PERMISSION_DENIED:
                            h(d.NativePermissionStates.DENIED);
                            break;
                        case u.UserMediaErrors.PERMISSION_DISMISSED:
                            h(d.NativePermissionStates.DISMISSED);
                            break;
                        default:
                            h(d.NativePermissionStates.ERROR), f.warn("unknown getUserMedia error: ".concat(e))
                    }
                }).then(() => !0))
            }
        },
        988738: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983"),
                r = n("884691"),
                l = n("817736"),
                i = n("759843"),
                s = n("446674"),
                o = n("77078"),
                u = n("272030"),
                d = n("244201"),
                c = n("428958"),
                f = n("161778"),
                p = n("144747"),
                E = n("983782"),
                h = n("659500"),
                g = n("452453"),
                m = n("49111");
            let S = e => {
                let {
                    children: t,
                    close: n,
                    onUnmount: s,
                    rect: u,
                    position: f,
                    align: p,
                    impressionName: h,
                    impressionProperties: g
                } = e, S = r.useRef(null);
                r.useEffect(() => {
                    var e, t;
                    let a = (0, l.findDOMNode)(S.current);
                    if (null == a) return;
                    let r = e => {
                        let t = e.target,
                            a = (0, l.findDOMNode)(S.current);
                        !(null != a && (0, o.referencePortalAwareContains)(a, t)) && (window.getSelection().removeAllRanges(), n())
                    };
                    return null === (e = a.ownerDocument) || void 0 === e || e.addEventListener("click", r, !0), null === (t = a.ownerDocument) || void 0 === t || t.addEventListener("contextmenu", r, !0), () => {
                        var e, t;
                        null === (e = a.ownerDocument) || void 0 === e || e.removeEventListener("click", r, !0), null === (t = a.ownerDocument) || void 0 === t || t.removeEventListener("contextmenu", r, !0)
                    }
                }, [n]);
                let C = r.useRef(s);
                r.useEffect(() => void(C.current = s)), r.useEffect(() => () => {
                    var e;
                    return null === (e = C.current) || void 0 === e ? void 0 : e.call(C)
                }, []), r.useLayoutEffect(() => {
                    var e;
                    null === (e = S.current) || void 0 === e || e.updatePosition()
                }), (0, c.default)({
                    type: i.ImpressionTypes.MENU,
                    name: h,
                    properties: g
                });
                let _ = (0, d.useWindowDispatch)(),
                    T = r.useCallback(() => {
                        _.dispatch(m.ComponentActions.POPOUT_SHOW)
                    }, [_]),
                    v = r.useCallback(() => {
                        _.dispatch(m.ComponentActions.POPOUT_HIDE)
                    }, [_]);
                return (0, a.jsx)(E.AppReferencePositionLayer, {
                    onMount: T,
                    onUnmount: v,
                    reference: () => u,
                    position: null != f ? f : "right",
                    align: null != p ? p : "top",
                    autoInvert: !0,
                    ref: S,
                    nudgeAlignIntoViewport: !0,
                    children: t
                })
            };
            class C extends r.PureComponent {
                componentDidMount() {
                    let {
                        renderLazy: e,
                        renderWindow: t
                    } = this.props;
                    if (t.addEventListener("resize", this.closeResize, !0), h.ComponentDispatch.subscribe(m.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e) {
                        let t = setTimeout(() => {
                            this.setState({
                                render: () => (0, a.jsx)(o.MenuSpinner, {})
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
                    e.removeEventListener("resize", this.closeResize, !0), h.ComponentDispatch.unsubscribe(m.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu)
                }
                render() {
                    var e;
                    let {
                        appContext: t,
                        target: n,
                        isOpen: r,
                        theme: l,
                        config: i,
                        rect: s
                    } = this.props, o = null !== (e = this.state.render) && void 0 !== e ? e : this.props.render;
                    return r && null != s && null != i && null != n && null != o && i.context === t ? (0, a.jsx)(S, {
                        rect: s,
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
                            return o({
                                className: g.ContextMenuClassName,
                                position: r,
                                theme: l,
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
                } = (0, s.useStateFromStoresObject)([p.default], () => ({
                    contextMenu: p.default.getContextMenu(),
                    version: p.default.version,
                    isOpen: p.default.isOpen()
                })), l = (0, s.useStateFromStores)([f.default], () => f.default.theme), {
                    appContext: i,
                    renderWindow: o
                } = r.useContext(d.default);
                return (0, a.jsx)(C, {
                    appContext: i,
                    renderWindow: o,
                    ...e,
                    isOpen: n,
                    theme: l,
                    closeContextMenu: u.closeContextMenu
                }, t)
            }
        },
        739086: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PhoneHangUpIcon: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "m21.506 16.596-.14.142a.88.88 0 0 1-.964.195l-4.09-1.7a.987.987 0 0 1-.57-1.17l.732-2.71a5.58 5.58 0 0 0-8.948 0l.697 2.112a.988.988 0 0 1-.468 1.181l-4.131 2.208a.87.87 0 0 1-1.03-.156l-.1-.102a5.184 5.184 0 0 1-.328-6.916c5.1-6.24 14.569-6.24 19.668 0a5.184 5.184 0 0 1-.328 6.916Z",
                        className: s
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
            var a = n("446674"),
                r = n("77078"),
                l = n("619443"),
                i = n("153498"),
                s = n("116460"),
                o = n("778588"),
                u = n("708169"),
                d = () => {
                    let e = (0, a.useStateFromStores)([o.default], () => o.default.hasLayers()),
                        t = (0, u.useFullScreenLayerStore)(e => e.fullScreenLayers.length > 0),
                        n = (0, i.useIsModalOpen)(),
                        d = (0, r.useModalsStore)(r.hasAnyModalOpen),
                        c = (0, a.useStateFromStores)([l.default], () => l.default.isConnected()),
                        f = (0, a.useStateFromStores)([s.default], () => s.default.isOpen());
                    return e || t || d || n || !c || f
                }
        },
        869586: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BlindID: function() {
                    return i
                }
            });
            var a = n("605250"),
                r = n("446825").Buffer;
            let l = new a.default("BlindID");
            class i {
                async blind(e) {
                    let t = await this.key,
                        n = new BigUint64Array([BigInt(e)]),
                        a = await crypto.subtle.sign("HMAC", t, n.buffer);
                    return i.truncate(a).toString()
                }
                static truncate(e) {
                    let t = new Uint8Array(e);
                    return t.length < 8 ? (l.error("Unexpected byte length ".concat(t.length)), BigInt(0)) : BigInt(t[0]) | BigInt(t[1]) << BigInt(8) | BigInt(t[2]) << BigInt(16) | BigInt(t[3]) << BigInt(24) | BigInt(t[4]) << BigInt(32) | BigInt(t[5]) << BigInt(40) | BigInt(t[6]) << BigInt(48) | BigInt(t[7]) << BigInt(56)
                }
                constructor(e) {
                    let t = r.from(e, "hex");
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
                r = n("872717"),
                l = n("448993"),
                i = n("42887"),
                s = n("254490"),
                o = n("49671"),
                u = n("49111");
            let d = new a.default("uploadRtcLogFiles");
            async function c(e, t) {
                let n;
                if (null == o.default.fileManager.readLogFiles) throw new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.GENERAL);
                let a = [];
                try {
                    a = (a = await o.default.fileManager.readLogFiles(e)).map(e => (0, s.transformNativeFile)(e, "application/octet-stream"))
                } catch (e) {
                    throw d.error("uploadDebugFiles: read error '".concat(e, "'")), new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.READ)
                }
                if (0 === a.length) throw new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.NO_FILE);
                try {
                    let e = {
                        extraInfo: t,
                        mediaEngineState: i.default.getState()
                    };
                    n = await r.default.post({
                        url: u.Endpoints.DEBUG_LOGS(u.DebugLogCategory.RTC),
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
                    if (429 === e.status) throw new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.PROGRESS);
                    throw d.error("Debug log upload error: status: ".concat(e.status, ", message: ").concat(e.message)), new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.UPLOAD)
                }
                let c = a.length + 1;
                if ("success_count" in n.body && n.body.success_count !== c) throw d.error("Debug log upload: stored files ".concat(n.body.success_count, " !== ").concat(c)), new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.GENERAL);
                if ("store_success" in n.body && !n.body.store_success || "id_match" in n.body && !n.body.id_match || "all_success" in n.body && !n.body.all_success) throw d.error("Debug log upload: store_success: ".concat(n.body.store_success, " / ") + "id_match: ".concat(n.body.id_match, " / ") + "all_success: ".concat(n.body.all_success)), new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.GENERAL)
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
            var a = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("913144"),
                i = n("697218"),
                s = n("599110"),
                o = n("773336"),
                u = n("180748"),
                d = n("206230"),
                c = n("49111");
            let f = window.matchMedia("(prefers-reduced-motion: reduce)"),
                p = window.matchMedia("(prefers-contrast: more)"),
                E = window.matchMedia("(prefers-contrast: less)"),
                h = window.matchMedia("(prefers-color-scheme: dark)"),
                g = window.matchMedia("(prefers-color-scheme: light)"),
                m = window.matchMedia("(forced-colors: active)"),
                S = 5;

            function C() {
                return "windows" === (0, o.getOS)()
            }
            var _ = {
                initBasic() {
                    f.addListener(this.handleSystemPrefersReducedMotionChanged), this.handleSystemPrefersReducedMotionChanged(f), h.addListener(this.handleSystemColorPreferencesChanged), g.addListener(this.handleSystemColorPreferencesChanged), m.addListener(this.handleSystemColorPreferencesChanged), this.handleSystemColorPreferencesChanged(), p.addListener(this.handleSystemPrefersContrastChanged), E.addListener(this.handleSystemPrefersContrastChanged), this.handleSystemPrefersContrastChanged()
                },
                init() {
                    this.initBasic(), l.default.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
                        s.default.track(c.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
                            colorblind_enabled: d.default.colorblindMode
                        })
                    }), l.default.subscribe("ACCESSIBILITY_SET_SATURATION", e => {
                        s.default.track(c.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
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
                    l.default.wait(() => {
                        u.systemPrefersReducedMotionChanged(e.matches ? "reduce" : "no-preference")
                    })
                },
                handleSystemColorPreferencesChanged() {
                    let e;
                    h.matches ? e = c.ThemeTypes.DARK : g.matches && (e = c.ThemeTypes.LIGHT);
                    let t = !o.isPlatformEmbedded || C(),
                        n = t && m.matches ? "active" : "none";
                    l.default.wait(() => {
                        u.systemColorPreferencesChanged(e, n)
                    })
                },
                handleSystemPrefersContrastChanged() {
                    let e = "no-preference";
                    p.matches ? e = "more" : E.matches && (e = "less"), l.default.wait(() => {
                        u.systemPrefersContrastChanged(e)
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
                l = n("118810"),
                i = n("446674"),
                s = n("77078"),
                o = n("599110"),
                u = n("791776"),
                d = n("206230"),
                c = n("862013"),
                f = n("49111");

            function p(e) {
                var t;
                let n = e.ctrlKey || e.altKey || e.metaKey;
                if (n || e.keyCode !== f.KeyboardKeys.TAB || null == e.target) return;
                let {
                    target: a
                } = e, r = null === (t = (0, u.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
                (0, l.isElement)(a) && o.default.track(f.AnalyticEvents.KEYBOARD_SHORTCUT_USED, {
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
                })), l = (0, i.useStateFromStoresObject)([d.default], () => ({
                    enabled: d.default.useForcedColors,
                    rawValue: d.default.systemForcedColors
                })), o = (0, i.useStateFromStores)([d.default], () => d.default.alwaysShowLinkDecorations), u = r.useMemo(() => ({
                    reducedMotion: n,
                    prefersCrossfades: !1,
                    forcedColors: l,
                    alwaysShowLinkDecorations: o
                }), [n, l, o]);
                return r.useEffect(() => ((0, c.insertAccessibilityLabelElements)(), window.addEventListener("keydown", p), () => window.removeEventListener("keydown", p)), []), (0, a.jsx)(s.AccessibilityPreferencesContext.Provider, {
                    value: u,
                    children: t
                })
            }
        },
        735890: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("452804"),
                i = n("135230"),
                s = n("168973"),
                o = n("782340");

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
                    n = () => {
                        l.default.updatedUnsyncedSettings({
                            disableEmbeddedActivityPopOutAlert: !0
                        }), e()
                    },
                    u = !s.default.disableEmbeddedActivityPopOutAlert;
                u ? (0, r.openModal)(r => (0, a.jsx)(i.default, {
                    confirmText: o.default.Messages.EMBEDDED_ACTIVITIES_YEP,
                    secondaryConfirmText: o.default.Messages.DONT_ASK_AGAIN,
                    title: o.default.Messages.EMBEDDED_ACTIVITIES_CAREFUL,
                    cancelText: o.default.Messages.EMBEDDED_ACTIVITIES_NVM,
                    onConfirm: e,
                    onConfirmSecondary: n,
                    onCancel: t,
                    body: o.default.Messages.EMBEDDED_ACTIVITIES_POP_OUT_WARNING,
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
                    return h
                },
                stopBroadcast: function() {
                    return g
                },
                fetchBroadcasterBuckets: function() {
                    return S
                },
                maybeFetchBroadcastChannels: function() {
                    return C
                }
            });
            var a = n("872717"),
                r = n("913144"),
                l = n("374014"),
                i = n("766274"),
                s = n("271938"),
                o = n("42203"),
                u = n("546463"),
                d = n("568307"),
                c = n("9759"),
                f = n("194051"),
                p = n("49111");

            function E(e) {
                var t;
                let n = null !== (t = null == e ? void 0 : e.gameName) && void 0 !== t ? t : null == e ? void 0 : e.name;
                return null != n ? n.trim() : null
            }

            function h(e, t) {
                if (null == t) return;
                let {
                    canBroadcast: n
                } = c.default.getCurrentConfig({
                    location: "start_broadcast_for_stream"
                }, {
                    autoTrackExposure: !1
                });
                if (!n) return;
                let a = (0, l.decodeStreamKey)(e),
                    {
                        ownerId: i,
                        channelId: f
                    } = a;
                if (null == i || null == f) return;
                let p = s.default.getId();
                if (i !== p) return;
                let h = s.default.getSessionId();
                if (null == h) return;
                let g = o.default.getChannel(f),
                    m = null != g && g.isBroadcastChannel();
                if (null == g || i !== g.ownerId || !m) return;
                let S = function(e) {
                    var t;
                    let n = d.default.getGameForPID(e),
                        a = E(n),
                        r = u.default.getGameByName(a);
                    return null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : "0"
                }(t);
                null != S && ! function(e) {
                    let t = s.default.getId(),
                        n = s.default.getSessionId();
                    null != t && null != n && r.default.dispatch({
                        type: "BROADCAST_START",
                        broadcast: e
                    })
                }({
                    sessionId: h,
                    userId: p,
                    applicationId: S,
                    channelId: g.id,
                    streamKey: e
                })
            }

            function g() {
                r.default.dispatch({
                    type: "BROADCAST_STOP"
                })
            }

            function m(e) {
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
                        url: p.Endpoints.USER_BROADCASTS,
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
                    } else m(e)
                } catch (t) {
                    m(e)
                }
            }
            async function C() {
                let e = f.default.getBroadcastsToValidateChannels(),
                    t = e.filter(e => null == e.viewers).map(e => e.channelId);
                if (0 !== t.length) try {
                    let e = await a.default.get({
                        url: p.Endpoints.BROADCAST_CHANNELS,
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
                            n[a] = r.map(e => new i.default(e)).filter(e => e.id !== a)
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
                    return v
                }
            });
            var a, r, l = n("917351"),
                i = n("446674"),
                s = n("407846"),
                o = n("913144"),
                u = n("766274"),
                d = n("271938"),
                c = n("9759"),
                f = n("837374");
            (a = r || (r = {}))[a.INVALID = 0] = "INVALID", a[a.VALID_USER_ONLY = 1] = "VALID_USER_ONLY", a[a.VALID = 2] = "VALID";
            let p = new Set,
                E = new Set,
                h = new Set,
                g = [],
                m = {
                    BROADCASTS_BY_USER_ID: e => "user:".concat(e),
                    BROADCASTS_BY_CHANNEL_ID: e => "channel:".concat(e),
                    BROADCASTS_BY_VALIDITY: e => "validity:".concat(e)
                },
                S = new s.default(function(e) {
                    let t = p.has(e.userId) ? r.VALID_USER_ONLY : r.INVALID;
                    return null != e.viewers && (t = r.VALID), [m.BROADCASTS_BY_USER_ID(e.userId), m.BROADCASTS_BY_CHANNEL_ID(e.channelId), m.BROADCASTS_BY_VALIDITY(t)]
                }, e => e.channelId);

            function C(e, t, n) {
                if (d.default.getId() === e) return !1;
                if (null == t) {
                    let t = S.get(e);
                    return !!(null != t && (0, l.isEqual)(t.source, n)) && (S.delete(e), void 0)
                }!p.has(e) && !E.has(e) && (h.add(e), g = [...h]);
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
            class T extends i.default.Store {
                getBroadcasts() {
                    return S.values(m.BROADCASTS_BY_VALIDITY(r.VALID))
                }
                getBroadcastsToValidateChannels() {
                    return S.values(m.BROADCASTS_BY_VALIDITY(r.VALID_USER_ONLY))
                }
                getBroadcastByChannel(e) {
                    return S.values(m.BROADCASTS_BY_CHANNEL_ID(e))[0]
                }
                getBroadcastByUser(e) {
                    return S.get(e)
                }
                getUserIdsToValidate() {
                    return g
                }
            }
            T.displayName = "BroadcastingStore";
            var v = new T(o.default, {
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
                        c.CAN_VIEW_BROADCASTS_BUCKETS.includes(t[e]) ? p.add(e) : E.add(e), h.clear(), g = [...h];
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
                        viewers: [...a.viewers, new u.default(n)]
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
                    var t;
                    let {
                        channel: n
                    } = e, a = S.values(m.BROADCASTS_BY_CHANNEL_ID(n.id))[0];
                    if (null == a) return !1;
                    let r = null !== (t = n.rawRecipients) && void 0 !== t ? t : [];
                    S.set(a.userId, {
                        ...a,
                        viewers: r.filter(e => e.id !== a.userId).map(e => new u.default(e))
                    })
                },
                LOGOUT: function() {
                    p.clear(), E.clear(), h.clear(), g = [], S.clear()
                }
            })
        },
        705565: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                getCanStartBroadcast: function() {
                    return u
                }
            });
            var a = n("446674"),
                r = n("271938"),
                l = n("42203"),
                i = n("18494"),
                s = n("101125");

            function o() {
                let e = (0, a.useStateFromStores)([r.default], () => r.default.getId()),
                    t = (0, a.useStateFromStores)([i.default], () => i.default.getVoiceChannelId()),
                    n = (0, a.useStateFromStores)([l.default], () => l.default.getChannel(t), [t]),
                    o = (0, a.useStateFromStores)([s.default], () => null != s.default.getBroadcast()),
                    u = (null == n ? void 0 : n.isOwner(e)) && (null == n ? void 0 : n.isBroadcastChannel()),
                    d = u || null == t;
                return !o && d
            }

            function u() {
                if (null != s.default.getBroadcast()) return !1;
                let e = i.default.getVoiceChannelId();
                if (null == e) return !0;
                let t = r.default.getId(),
                    n = l.default.getChannel(e),
                    a = (null == n ? void 0 : n.isOwner(t)) && (null == n ? void 0 : n.isBroadcastChannel());
                return a
            }
        },
        754493: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSelfBroadcast: function() {
                    return u
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
                    return p
                }
            });
            var a = n("446674"),
                r = n("845579");
            n("373469");
            var l = n("271938"),
                i = n("42203");
            n("18494");
            var s = n("101125"),
                o = n("9759");

            function u() {
                let e = (0, a.useStateFromStores)([l.default], () => l.default.getId()),
                    {
                        canBroadcast: t
                    } = o.default.useExperiment({
                        location: "use_self_broadcast"
                    }, {
                        autoTrackExposure: !1
                    }),
                    n = (0, a.useStateFromStores)([s.default], () => s.default.getBroadcast());
                return t && (null == n ? void 0 : n.userId) === e ? n : null
            }

            function d() {
                let e = u();
                return null != e
            }

            function c(e) {
                let t = u(),
                    n = (0, a.useStateFromStores)([i.default], () => i.default.getChannel(e));
                return null != t && null != n && n.ownerId === t.userId && n.isBroadcastChannel()
            }

            function f(e) {
                let t = l.default.getId(),
                    {
                        canBroadcast: n
                    } = o.default.getCurrentConfig({
                        location: "is_broadcasting_in_channel"
                    }, {
                        autoTrackExposure: !1
                    }),
                    a = s.default.getBroadcast();
                if (!n || null == a || a.userId !== t) return !1;
                let r = i.default.getChannel(e);
                return null != r && r.ownerId === a.userId && r.isBroadcastChannel()
            }

            function p() {
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
                l = n("77078"),
                i = n("244201"),
                s = n("856343"),
                o = n("373469"),
                u = n("474571"),
                d = n("773336"),
                c = n("162236"),
                f = n("49111"),
                p = n("782340");

            function E(e) {
                let {
                    onClose: t
                } = e, n = (0, i.useAppContext)(), E = (0, r.useStateFromStores)([o.default], () => o.default.getCurrentUserActiveStream()), h = (0, s.default)(E, n);
                return (0, a.jsxs)(l.Menu, {
                    onSelect: f.NOOP_NULL,
                    navId: "manage-broadcast",
                    onClose: t,
                    "aria-label": p.default.Messages.SETTINGS,
                    children: [d.isPlatformEmbedded && null != E ? (0, a.jsx)(l.MenuItem, {
                        id: "stream-settings",
                        label: p.default.Messages.SCREENSHARE_STREAM_QUALITY,
                        children: h
                    }) : null, (0, a.jsx)(l.MenuItem, {
                        id: "broadcast-settings",
                        label: p.default.Messages.BROADCAST_SETTINGS,
                        icon: u.default,
                        action: () => (0, c.openBroadcastingPrivacySettingsModal)()
                    })]
                })
            }
        },
        858944: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openStopBroadcastConfirmModal: function() {
                    return s
                },
                openStartBroadcastConfirmModal: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("713726"),
                i = n("782340");

            function s(e) {
                (0, r.openModal)(t => (0, a.jsx)(r.ConfirmModal, {
                    header: i.default.Messages.STOP_STREAMING,
                    confirmText: i.default.Messages.STOP_STREAMING,
                    cancelText: i.default.Messages.CANCEL,
                    onConfirm: () => {
                        (0, l.stopBroadcast)(), e()
                    },
                    ...t,
                    children: (0, a.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: i.default.Messages.BROADCASTING_STOP_STREAM_CONFIRM_BODY
                    })
                }))
            }

            function o(e) {
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
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("77078");

            function l(e, t, l) {
                (0, r.openModalLazy)(async () => {
                    let {
                        default: r
                    } = await n.el("725420").then(n.bind(n, "725420"));
                    return n => (0, a.jsx)(r, {
                        headerText: e,
                        buttonCTA: t,
                        onSave: l,
                        ...n
                    })
                })
            }
        },
        181832: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCallBannerBackgroundExperiment: function() {
                    return l
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

            function l(e, t) {
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
            let l = Object.freeze({
                [a.ParticipantTypes.STREAM]: r.MediaEngineContextTypes.STREAM,
                [a.ParticipantTypes.HIDDEN_STREAM]: r.MediaEngineContextTypes.STREAM,
                [a.ParticipantTypes.USER]: r.MediaEngineContextTypes.DEFAULT,
                [a.ParticipantTypes.ACTIVITY]: r.MediaEngineContextTypes.DEFAULT
            });

            function i(e) {
                return l[e]
            }
        },
        836087: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var a = n("37983"),
                r = n("884691"),
                l = n("414456"),
                i = n.n(l),
                s = n("917351"),
                o = n.n(s),
                u = n("446674"),
                d = n("862337"),
                c = n("77078"),
                f = n("272030"),
                p = n("901582"),
                E = n("373469"),
                h = n("697218"),
                g = n("427302"),
                m = n("462579"),
                S = n("449008"),
                C = n("387111"),
                _ = n("99795"),
                T = n("49111"),
                v = n("782340"),
                I = n("2081");

            function A(e, t) {
                switch (e) {
                    case _.ParticipantTypes.ACTIVITY:
                        return v.default.Messages.EMBEDDED_ACTIVITIES_NUM_PARTICIPANTS.format({
                            numUsers: t
                        });
                    case _.ParticipantTypes.STREAM:
                        return v.default.Messages.SPECTATORS.format({
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
                    participantType: l,
                    channelId: s,
                    handleUserContextMenu: o
                } = e, u = A(l, t.length);
                return (0, a.jsx)(c.Dialog, {
                    "aria-label": u,
                    className: I.popoutWrapper,
                    children: (0, a.jsxs)(c.Scroller, {
                        className: I.scroller,
                        children: [(0, a.jsx)(c.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: I.memberListHeader,
                            children: u
                        }), (0, a.jsx)("div", {
                            children: t.map(e => (0, a.jsx)(g.default, {
                                guildId: null != r ? r : void 0,
                                className: i(I.memberListItem, {
                                    [I.popoutDisabled]: n
                                }),
                                textClassName: I.memberListItemText,
                                user: e,
                                disablePopout: n,
                                nick: C.default.getNickname(r, s, e),
                                onContextMenu: t => n ? null : o(t, e)
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
                    maxVisibleUsers: l = 3,
                    className: s,
                    participantType: o
                } = e, u = A(o, t.length), d = t.length < l ? t.map(e => (0, a.jsx)("div", {
                    className: I.viewersTooltipItem,
                    children: C.default.getName(n, r, e)
                }, e.id)) : u;
                return (0, a.jsx)(c.TooltipContainer, {
                    text: d,
                    "aria-label": u,
                    children: (0, a.jsxs)("div", {
                        className: i(I.viewers, s),
                        children: [(0, a.jsx)(m.default, {
                            className: I.viewersIcon
                        }), (0, a.jsx)("span", {
                            "aria-hidden": "true",
                            children: t.length
                        })]
                    })
                })
            }
            let O = [];

            function N(e) {
                let {
                    channelId: t,
                    guildId: l,
                    participant: s,
                    className: g,
                    compact: m = !1,
                    disableInteraction: C = !1,
                    maxVisibleUsers: v = 3
                } = e, [A, N] = r.useState(!1), y = r.useRef(new d.DelayedCall(150, () => N(!1))), D = (0, u.useStateFromStoresArray)([E.default, h.default], () => {
                    if (s.type === _.ParticipantTypes.STREAM) {
                        let e = E.default.getViewerIds(s.id);
                        return e.length > 0 ? e.map(e => h.default.getUser(e)).filter(S.isNotNullish) : O
                    }
                    return s.type === _.ParticipantTypes.ACTIVITY ? s.participants.size > 0 ? Array.from(s.participants).map(e => h.default.getUser(e)).filter(S.isNotNullish) : O : O
                }, [s]), R = r.useCallback(() => {
                    y.current.cancel(), N(!0)
                }, []), x = r.useCallback(() => {
                    y.current.delay()
                }, []), P = r.useCallback((e, t) => {
                    R(), (0, f.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("406784").then(n.bind(n, "406784"));
                        return n => (0, a.jsx)(e, {
                            ...n,
                            user: t
                        })
                    }, {
                        onClose: x
                    })
                }, [x, R]);
                if (0 === D.length) return null;
                if (m) return (0, a.jsx)(L, {
                    maxVisibleUsers: v,
                    users: D,
                    guildId: l,
                    channelId: t,
                    className: g,
                    participantType: s.type
                });
                let b = o(D).take(v).map(e => (0, a.jsx)(c.Avatar, {
                    src: e.getAvatarURL(l, 24),
                    "aria-label": e.username,
                    size: c.AvatarSizes.SIZE_24,
                    className: I.viewer
                }, e.id)).value();
                return D.length > v && (b[b.length - 1] = (0, a.jsxs)("div", {
                    className: I.overflow,
                    children: ["+", D.length - v + 1]
                }, "overflow")), (0, a.jsx)(p.default, {
                    section: T.AnalyticsSections.STREAM_VIEWER_POPOUT,
                    children: (0, a.jsx)("div", {
                        onMouseEnter: R,
                        onMouseLeave: x,
                        children: (0, a.jsx)(c.Popout, {
                            renderPopout: () => (0, a.jsx)(M, {
                                participantType: s.type,
                                handleUserContextMenu: P,
                                guildId: l,
                                channelId: t,
                                users: D,
                                disableInteraction: C
                            }),
                            shouldShow: A,
                            position: "top",
                            children: () => (0, a.jsx)("div", {
                                className: i(I.viewers, g),
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
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("77078"),
                i = n("374014"),
                s = n("582415"),
                o = n("271938"),
                u = n("824563"),
                d = n("205817"),
                c = n("782340");

            function f(e, t, f) {
                var p;
                let E = (0, r.useStateFromStores)([u.default], () => (0, s.getStreamerApplication)(e, u.default), [e]),
                    h = (0, r.useStateFromStores)([o.default], () => o.default.getId()),
                    g = null != e ? (0, i.encodeStreamKey)(e) : d.default.getActiveStreamKey(),
                    m = null !== (p = d.default.getVideoStats(g)) && void 0 !== p ? p : {},
                    S = {
                        media_session_id: d.default.getMediaSessionId(g),
                        rtc_connection_id: d.default.getRtcConnectionId(g),
                        stream_region: d.default.getRegion(g),
                        max_viewers: d.default.getMaxViewers(g),
                        ...m
                    };
                return null == e ? null : (0, a.jsx)(l.MenuItem, {
                    id: "report-stream-problem",
                    label: c.default.Messages.STREAM_REPORT_PROBLEM_MENU_ITEM,
                    action: () => {
                        null == f || f(), null != e && (0, l.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("485857").then(n.bind(n, "485857"));
                            return n => (0, a.jsx)(t, {
                                stream: e,
                                streamApplication: E,
                                isStreamer: h === (null == e ? void 0 : e.ownerId),
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
            var a = n("37983"),
                r = n("884691"),
                l = n("446674"),
                i = n("77078"),
                s = n("629109"),
                o = n("997289"),
                u = n("773356"),
                d = n("268491"),
                c = n("305961"),
                f = n("42887"),
                p = n("697218"),
                E = n("49111"),
                h = n("686298"),
                g = n("353927"),
                m = n("782340");

            function S(e, t) {
                let {
                    preset: S,
                    resolution: C,
                    fps: _
                } = (0, l.useStateFromStoresObject)([d.default], () => d.default.getState()), T = (0, l.useStateFromStores)([f.default], () => f.default.getGoLiveSource()), v = (0, l.useStateFromStores)([p.default], () => p.default.getCurrentUser()), I = (0, l.useStateFromStores)([c.default], () => {
                    var t;
                    return null === (t = c.default.getGuild(null == e ? void 0 : e.guildId)) || void 0 === t ? void 0 : t.premiumTier
                }), {
                    location: A
                } = (0, o.useAnalyticsContext)(), M = r.useCallback((e, r, l, o) => {
                    if (e) {
                        if (null != T) {
                            let e = {
                                qualityOptions: {
                                    preset: h.ApplicationStreamPresets.PRESET_CUSTOM,
                                    resolution: r,
                                    frameRate: l
                                },
                                context: g.MediaEngineContextTypes.STREAM
                            };
                            null != T.desktopSource ? e.desktopSettings = {
                                sourceId: T.desktopSource.id,
                                sound: !0
                            } : null != T.cameraSource && (e.cameraSettings = {
                                videoDeviceGuid: T.cameraSource.videoDeviceGuid,
                                audioDeviceGuid: T.cameraSource.audioDeviceGuid
                            }), s.default.setGoLiveSource(e)
                        }
                    } else {
                        var u, d;
                        u = t, d = {
                            ...A,
                            object: E.AnalyticsObjects.RADIO_ITEM,
                            objectType: o
                        }, (0, i.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("754534").then(n.bind(n, "754534"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                analyticsSource: d
                            })
                        }, {
                            contextKey: u === E.AppContext.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
                        })
                    }
                }, [t, A, T]);
                if (null == e) return null;
                let L = S === h.ApplicationStreamPresets.PRESET_DOCUMENTS ? h.ApplicationStreamFPS.FPS_30 : _,
                    O = h.ApplicationStreamFPSButtonsWithSuffixLabel.map(e => {
                        let {
                            value: t,
                            label: n
                        } = e, r = (0, u.default)(h.ApplicationStreamPresets.PRESET_CUSTOM, C, t, v, I);
                        return (0, a.jsx)(i.MenuRadioItem, {
                            group: "stream-settings-fps",
                            id: "stream-settings-fps-".concat(t),
                            label: n,
                            checked: t === _,
                            action: () => M(r, C, t, E.AnalyticsObjectTypes.RESOLUTION)
                        }, "stream-settings-fps-".concat(t))
                    }),
                    N = h.ApplicationStreamResolutionButtonsWithSuffixLabel.map(e => {
                        let {
                            value: t,
                            label: n
                        } = e, r = (0, u.default)(h.ApplicationStreamPresets.PRESET_CUSTOM, t, L, v, I);
                        return (0, a.jsx)(i.MenuRadioItem, {
                            group: "stream-settings-resolution",
                            id: "stream-settings-resolution-".concat(t),
                            label: n,
                            checked: t === C,
                            action: () => M(r, t, L, E.AnalyticsObjectTypes.RESOLUTION)
                        }, "stream-settings-resolution-".concat(t))
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i.MenuGroup, {
                        label: m.default.Messages.SCREENSHARE_FRAME_RATE,
                        children: O
                    }), (0, a.jsx)(i.MenuGroup, {
                        label: m.default.Messages.STREAM_RESOLUTION,
                        children: N
                    })]
                })
            }
        },
        736626: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("862205");
            let r = (0, a.createExperiment)({
                kind: "user",
                id: "2023-10_client_themes_mobile_tokens",
                label: "Client Themes Mobile Tokens",
                defaultConfig: {
                    canUseGradientTokens: !1
                },
                treatments: [{
                    id: 1,
                    label: "Client Themes Mobile Tokens",
                    config: {
                        canUseGradientTokens: !0
                    }
                }]
            });
            var l = e => {
                let {
                    location: t,
                    autoTrackExposure: n = !1
                } = e;
                return r.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: n
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
                    return u
                }
            });
            var a = n("884691"),
                r = n("446674"),
                l = n("714657");
            let i = "data-client-themes",
                s = "custom-theme-background",
                o = () => {
                    let e = (0, r.useStateFromStores)([l.default], () => l.default.getLinearGradient()),
                        t = (0, a.useMemo)(() => null == e ? null : ".".concat(s, " {\n      --custom-theme-background: ").concat(e, ";\n    }"), [e]);
                    return t
                };
            var u = () => {
                let e = o();
                return null === e ? {
                    clientThemesCSS: "",
                    clientThemesClassName: ""
                } : {
                    clientThemesCSS: e,
                    clientThemesClassName: s
                }
            }
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
            });
            var a = n("37983"),
                r = n("884691"),
                l = n("917351"),
                i = n.n(l),
                s = n("88807"),
                o = n("721998"),
                u = n("432710"),
                d = n("446674"),
                c = n("77078"),
                f = n("960460"),
                p = n("489740"),
                E = n("355025"),
                h = n("51545"),
                g = n("155084"),
                m = n("393414"),
                S = n("90404"),
                C = n("599110"),
                _ = n("286235"),
                T = n("50885"),
                v = n("49111"),
                I = n("782340"),
                A = n("143941");

            function M() {
                let [e, t] = r.useState(!1), n = (0, d.useStateFromStores)([p.default], () => {
                    var e;
                    return (0, E.probablyHasBuildOverride)() ? null === (e = p.default.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
                });
                if (null == n) return null;
                let l = async () => {
                    try {
                        t(!0), await (0, f.clearBuildOverride)(), window.location.reload(!0)
                    } catch (e) {
                        t(!1)
                    }
                };
                return (0, a.jsx)(c.Button, {
                    size: c.ButtonSizes.LARGE,
                    onClick: l,
                    submitting: e,
                    className: A.clearOverrideButton,
                    children: I.default.Messages.CLEAR_BUILD_OVERRIDE
                })
            }
            let L = i.throttle(() => {
                g.default.increment({
                    name: u.MetricEvents.APP_CRASHED,
                    tags: ["reason:".concat(s.AppCrashedReasons.UNHANDLED_JS_ERROR), "level:".concat(o.ErrorLevels.FATAL)]
                }, !0)
            }, 100, {
                trailing: !1
            });
            class O extends r.PureComponent {
                componentDidCatch(e, t) {
                    this.triggerSoftCrash(e, t)
                }
                triggerSoftCrash(e, t) {
                    let n = (0, m.getHistory)().location;
                    this.setState({
                        error: e,
                        info: t
                    });
                    let a = _.default.captureCrash(e, {
                        extra: t
                    });
                    C.default.track(v.AnalyticEvents.APP_CRASHED, {
                        path: n.pathname,
                        extra: t,
                        error_message: e.message,
                        error_stack: e.stack,
                        sentry_issue_id: a,
                        uses_client_mods: (0, h.usesClientMods)()
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
            var N = O
        },
        160139: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                i = n("446674"),
                s = n("77078"),
                o = n("368598"),
                u = n("49671"),
                d = n("244201"),
                c = n("191145"),
                f = n("270227"),
                p = n("940277"),
                E = n("386811"),
                h = n("964264"),
                g = n("655804"),
                m = n("58463"),
                S = n("238500"),
                C = n("773336"),
                _ = n("439932"),
                T = n("50885"),
                v = n("782340"),
                I = n("793804");
            let A = e => T.default.close(e),
                M = e => T.default.minimize(e),
                L = (e, t) => {
                    (0, C.isMac)() && !t.altKey ? T.default.fullscreen(e) : T.default.maximize(e)
                },
                O = e => {
                    let {
                        windowKey: t,
                        themeOverride: n,
                        hasOpenLayer: r
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: l(I.typeWindows, (0, _.getThemeClass)(n), {
                            [I.withBackgroundOverride]: !r
                        }),
                        children: [(0, a.jsx)("div", {
                            className: I.wordmarkWindows,
                            children: (0, a.jsx)(f.default, {})
                        }), (0, a.jsx)(s.Clickable, {
                            className: I.winButtonClose,
                            onClick: () => A(t),
                            "aria-label": v.default.Messages.TITLE_BAR_CLOSE_WINDOW,
                            tabIndex: -1,
                            children: (0, a.jsx)(p.default, {})
                        }), (0, a.jsx)(s.Clickable, {
                            className: I.winButtonMinMax,
                            onClick: e => L(t, e),
                            "aria-label": v.default.Messages.TITLE_BAR_MAXIMIZE_WINDOW,
                            tabIndex: -1,
                            children: (0, a.jsx)(h.default, {})
                        }), (0, a.jsx)(s.Clickable, {
                            className: I.winButtonMinMax,
                            onClick: () => M(t),
                            "aria-label": v.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                            tabIndex: -1,
                            children: (0, a.jsx)(m.default, {})
                        })]
                    })
                },
                N = e => {
                    let {
                        focused: t,
                        windowKey: n,
                        frame: r,
                        themeOverride: i,
                        hasOpenLayer: o
                    } = e;
                    return (0, a.jsxs)(s.Clickable, {
                        className: l(r ? I.typeMacOSWithFrame : I.typeMacOS, t ? I.focused : I.unfocused, (0, _.getThemeClass)(i), {
                            [I.withBackgroundOverride]: !o
                        }),
                        onDoubleClick: () => T.default.maximize(n),
                        tabIndex: -1,
                        children: [u.default.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS ? (0, a.jsx)("div", {
                            className: I.macDragRegion
                        }) : (0, a.jsxs)("div", {
                            className: I.macButtons,
                            children: [(0, a.jsx)(s.Clickable, {
                                className: I.macButtonClose,
                                onClick: () => A(n),
                                "aria-label": v.default.Messages.TITLE_BAR_CLOSE_WINDOW,
                                tabIndex: -1,
                                children: (0, a.jsx)(E.default, {
                                    color: "#4c0000"
                                })
                            }), (0, a.jsx)(s.Clickable, {
                                className: I.macButtonMinimize,
                                onClick: () => M(n),
                                "aria-label": v.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                                tabIndex: -1,
                                children: (0, a.jsx)(S.default, {
                                    color: "#975500"
                                })
                            }), (0, a.jsx)(s.Clickable, {
                                className: I.macButtonMaximize,
                                onClick: e => L(n, e),
                                "aria-label": v.default.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
                                tabIndex: -1,
                                children: (0, a.jsx)(g.default, {
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

            function y(e) {
                let {
                    focused: t,
                    type: n,
                    windowKey: r,
                    macOSFrame: l = !1,
                    themeOverride: s
                } = e, u = (0, d.useAppContext)(), f = (0, i.useStateFromStores)([c.default], () => c.default.isFullscreenInContext(u)), p = (0, o.default)();
                if (f) return null;
                switch (n) {
                    case C.PlatformTypes.WINDOWS:
                        return (0, a.jsx)(O, {
                            windowKey: r,
                            themeOverride: s,
                            hasOpenLayer: p
                        });
                    case C.PlatformTypes.OSX:
                        return (0, a.jsx)(N, {
                            focused: t,
                            windowKey: r,
                            frame: l,
                            themeOverride: s,
                            hasOpenLayer: p
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
                l = n("551042"),
                i = n("77078"),
                s = n("485328"),
                o = n("180748"),
                u = n("206230"),
                d = n("951212"),
                c = n("227602"),
                f = n("791776"),
                p = n("13798"),
                E = n("49111"),
                h = n("894282");

            function g(e) {
                let t = e.ctrlKey || e.altKey || e.metaKey;
                e.key === h.KeyboardEventKey.Tab && !t && !__OVERLAY__ && !(0, l.hasAnyModalOpen)() && d.default.maybeShowKeyboardNavigationExplainerModal()
            }

            function m() {
                (0, o.disableKeyboardMode)()
            }
            var S = function(e, t) {
                let n = (0, r.useStateFromStores)([u.default], () => u.default.keyboardModeEnabled);
                (0, i.useFocusJumpSectionManager)(n);
                let l = (0, a.useCallback)(e => {
                    ! function(e, t) {
                        var n, a;
                        let r = (0, f.isInputLikeElement)(null === (n = (0, f.eventOwnerDocument)(e)) || void 0 === n ? void 0 : n.activeElement);
                        if (r && e.key !== h.KeyboardEventKey.Tab) return;
                        let l = e.ctrlKey || e.altKey || e.metaKey || e.key !== h.KeyboardEventKey.Tab && e.shiftKey;
                        if (l) return;
                        let i = function(e) {
                            let t = p.keyToCode("shift"),
                                n = p.keyToCode("tab");
                            if (e.key === h.KeyboardEventKey.Tab && e.shiftKey && null != t && null != n) return [
                                [E.KeyboardDeviceTypes.KEYBOARD_KEY, t],
                                [E.KeyboardDeviceTypes.KEYBOARD_KEY, n]
                            ];
                            let a = h.NavigationKeyShortcutMap.get(e.key);
                            if (null != a) {
                                let e = p.keyToCode(a);
                                if (null != e) return [
                                    [E.KeyboardDeviceTypes.KEYBOARD_KEY, e]
                                ]
                            }
                            return null
                        }(e);
                        null != i && !c.default.hasExactKeybind(i) && !s.default.hasBind(null !== (a = p.codeToKey(i[0])) && void 0 !== a ? a : "") && ((0, o.enableKeyboardMode)(), r && !t && e.preventDefault())
                    }(e, t)
                }, [t]);
                return (0, a.useLayoutEffect)(() => (n ? (e.addEventListener("mousedown", m), e.addEventListener("keydown", g)) : e.addEventListener("keydown", l), () => {
                    n ? (e.removeEventListener("mousedown", m), e.removeEventListener("keydown", g)) : e.removeEventListener("keydown", l)
                }), [e, l, n]), n
            }
        },
        628922: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("884691"),
                r = n("244201"),
                l = n("49111");
            let i = ["Shift", "Alt", "Meta", "Control"];

            function s(e, t) {
                let [n, s] = a.useState(0), o = (0, r.useWindowDispatch)();
                a.useEffect(() => {
                    let e = () => s(e => e + 1),
                        t = () => s(e => Math.max(0, e - 1));
                    return o.subscribe(l.ComponentActions.POPOUT_SHOW, e), o.subscribe(l.ComponentActions.POPOUT_HIDE, t), () => {
                        o.unsubscribe(l.ComponentActions.POPOUT_SHOW, e), o.unsubscribe(l.ComponentActions.POPOUT_HIDE, t)
                    }
                }, [o]);
                let [u, d] = a.useState(!1);
                return a.useLayoutEffect(() => {
                    let a = e => {
                            if ((!t || n > 0) && u) {
                                d(!1);
                                return
                            }!(!u && n > 0 || e instanceof KeyboardEvent && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || i.indexOf(e.key) >= 0)) && d(e => !e)
                        },
                        r = u ? "keyup" : "mousemove";
                    return t && e.addEventListener(r, a), () => null == e ? void 0 : e.removeEventListener(r, a)
                }, [e, u, n, t]), t && 0 === n && u
            }
        },
        147746: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uploadDebugLogFiles: function() {
                    return h
                },
                getBlindIds: function() {
                    return m
                },
                uploadCallscopeLogs: function() {
                    return S
                },
                uploadCallscopeLogFiles: function() {
                    return C
                }
            });
            var a = n("872717"),
                r = n("869586"),
                l = n("49671"),
                i = n("890747"),
                s = n("254490"),
                o = n("821316"),
                u = n("605250"),
                d = n("836403"),
                c = n("825287"),
                f = n("929331"),
                p = n("49111");
            let E = new u.default("DebugUploadManager");
            async function h(e, t) {
                await _(e), await (0, i.uploadRtcLogFiles)(3670016, t)
            }
            class g {
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
                    l = await a.blind(e),
                    i = await a.blind(t);
                return {
                    blindChannelId: l,
                    blindUserId: i
                }
            }
            async function S(e, t, n, a) {
                var r, i;
                if (!__OVERLAY__) {
                    if ((null === (i = l.default) || void 0 === i ? void 0 : null === (r = i.fileManager) || void 0 === r ? void 0 : r.getCallscopeLogFiles) == null) {
                        E.error("uploadCallscopeLogs: Upload RTC logs failed because native is out of date (getCallscopeLogFiles).");
                        return
                    }
                    if (!("crypto" in window)) {
                        E.error("uploadCallscopeLogs: Upload RTC logs failed because crypto is not supported.");
                        return
                    }
                    try {
                        let {
                            blindChannelId: r,
                            blindUserId: i
                        } = await m(e, t, n), s = "channel blind(".concat(e, "): ").concat(r, ", user blind(").concat(t, "): ").concat(i);
                        E.info("uploadCallscopeLogs: Uploading callscope logs for context: ".concat(a, ", ").concat(s));
                        let o = await l.default.fileManager.getCallscopeLogFiles(r);
                        await C(i, o)
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
                    for (let n of t.map(e => s.transformNativeFile(e, "application/octet-stream"))) {
                        E.log("uploadCallscopeLogFiles: Uploading ".concat(n.name));
                        let t = g.getChannelId(n.name);
                        try {
                            let r = await a.default.post({
                                    url: p.Endpoints.CALLSCOPE_LOGS(t, e, g.getTrimmedFilename(n.name)),
                                    headers: {
                                        "Content-Type": "application/octet-stream"
                                    },
                                    body: n
                                }),
                                l = r.status >= 200 && r.status <= 299;
                            !l && E.error("uploadCallscopeLogFiles: Failed to upload ".concat(n.name, " with status ").concat(r.status, ", ").concat(r.text))
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
                    let t = o.stringify(),
                        n = "",
                        r = await (0, d.getPushNotificationLogs)().then(e => (0, d.serializePushNotificationLogs)(e)),
                        l = t.length + n.length + r.length;
                    if (l > 9437184) {
                        let e = 1 - 9437184 / l;
                        t = t.slice(t.length - Math.floor(t.length * e)), n = n.slice(n.length - Math.floor(n.length * e)), r = r.slice(r.length - Math.floor(r.length * e))
                    }
                    let i = null,
                        s = "\n    ".concat((0, f.default)(i), "\n\n    ").concat(JSON.stringify((0, c.default)(), void 0, 2), "\n    Logs:\n    ").concat(t, "\n\n    System logs:\n    ").concat(n, "\n\n    Push Notifications:\n    ").concat(r, "\n    ");
                    o.clear();
                    let u = p.Endpoints.DEBUG_LOG(e, "discord_app_logs");
                    await a.default.post({
                        url: u,
                        body: s,
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
                    return i
                },
                getPushNotificationLogs: function() {
                    return s
                }
            });
            var a = n("95410"),
                r = n("271938"),
                l = n("49111");

            function i(e) {
                if (0 === e.length) return "No logs";
                let t = a.default.get(l.DEVICE_TOKEN),
                    n = a.default.get(l.DEVICE_VOIP_TOKEN),
                    r = null != n ? "Device Voip Token: ".concat(n) : "",
                    i = e.map(e => {
                        let t = "Displayed";
                        return e.silent && (t = "Silent"), "".concat(new Date(e.receivedTimestamp).toISOString(), " [").concat(e.type, "] ").concat(t, " - ").concat(e.title, " - ").concat(e.content, " ")
                    }).join("\n");
                return "".concat(null != t ? "Device Token: ".concat(t) : "", "\n").concat(r, "\n\n").concat(i)
            }
            async function s() {
                let e = r.default.getId(),
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
                    buildNumber: "243785",
                    versionHash: "b12a2a323a410cd9ab9f53b461b9c0a67073818f"
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
                    return s
                }
            });
            var a = n("917351"),
                r = n.n(a),
                l = n("102053"),
                i = n("487269");

            function s(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return l.default.logGroups.map(n => {
                    var a, l;
                    let {
                        index: s,
                        timestamp: u,
                        logs: d,
                        nativeLogs: c,
                        serverTrace: f
                    } = n, p = 0 === s ? null !== (l = null === (a = r.find(d, e => e.log.indexOf("Logger loaded") >= 0)) || void 0 === a ? void 0 : a.timestamp) && void 0 !== l ? l : e : u, E = function(e, t) {
                        var n, a;
                        let l = (function(e) {
                                let t = [];
                                for (let n = 0; n < e.length; n++) {
                                    let a = e[n],
                                        r = e[n + 1];
                                    null != r && r.log === a.log.replace("Start ", "Finish ") ? (r.log = r.log.replace("Finish ", ""), t.push(r), n++) : t.push(a)
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
                            i = null !== (n = r.max(l.map(e => e.totalTime.length))) && void 0 !== n ? n : 0,
                            s = null !== (a = r.max(l.map(e => e.deltaTime.length))) && void 0 !== a ? a : 0;
                        return l.map(e => {
                            let {
                                totalTime: t,
                                deltaTime: n,
                                log: a
                            } = e;
                            return "".concat(r.padStart(t, i), " ").concat(r.padStart(n, s), " ").concat(a)
                        }).join("")
                    }(function(e, t, n) {
                        e = e.slice();
                        let a = new Set(t.map(o)),
                            r = "",
                            l = [];
                        return t.forEach(t => {
                            let i = o(t),
                                s = 0,
                                u = n || !t.autoGenerated,
                                d = i.startsWith("Start ") && !i.includes("RUN_JS_BUNDLE") && a.has(i.replace("Start ", "Finish ")),
                                c = i.startsWith("Finish ") && !i.includes("RUN_JS_BUNDLE") && a.has(i.replace("Finish ", "Start "));
                            if (c) {
                                r = r.substring(2);
                                let e = l.pop();
                                null != e && (s = t.timestamp - e.timestamp, u = u || s > 5 && ! function(e) {
                                    return ["GET_CONSTANTS", "CONVERT_CONSTANTS"].some(t => e.includes(t))
                                }(i), e.shouldKeep = e.shouldKeep || u)
                            }
                            let f = {
                                emoji: "☕",
                                timestamp: t.timestamp,
                                delta: s > 0 ? s : void 0,
                                prefix: r,
                                log: i,
                                shouldKeep: u
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
                            })(e, f), d && (r += "| ", l.push(f))
                        }), e.filter(e => !1 !== e.shouldKeep)
                    }(d, c, t), p), h = "Trace #".concat(s + 1, " started ").concat((0, i.getTimestampString)(u), "\n").concat(E);
                    return null != f && (h += "\n Server trace for trace #".concat(s + 1).concat(f)), h
                }).join("\n\n")
            }

            function o(e) {
                let t = null == e.tag ? e.label : "".concat(e.label, " ").concat(e.tag);
                return t.includes("_START") && (t = "Start " + t.replace("_START", "")), t.includes("_END") && (t = "Finish " + t.replace("_END", "")), t
            }
        },
        51545: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usesClientMods: function() {
                    return i
                },
                initSentry: function() {
                    return o
                }
            });
            var a = n("245123"),
                r = n("316217");
            let l = ["oppobrowser", "realmebrowser", "heytapbrowser"];

            function i() {
                let e = window;
                return null != e.jQuery || null != e.$ || null != e.BetterDiscord || null != e.BdApi || null != e.rambox
            }
            let s = (0, r.filterThrottle)({
                maxBudgetMinute: 1,
                maxBudgetHour: 3
            });

            function o() {
                var e;
                a.init({
                    tunnel: "/error-reporting-proxy/web",
                    dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
                    autoSessionTracking: !1,
                    environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
                    release: "discord_web-b12a2a323a410cd9ab9f53b461b9c0a67073818f",
                    beforeSend: e => {
                        var t, n;
                        return !(null != (t = e).exception && null != t.exception.values && t.exception.values.every(e => null == e.stacktrace || null != e.stacktrace.frames && 1 === e.stacktrace.frames.length) && "canary" !== window.GLOBAL_ENV.RELEASE_CHANNEL || l.some(e => window.navigator.appVersion.toLowerCase().indexOf(e) >= 0)) && !i() && !("Aborted" === (n = e).message || "cancel captcha" === n.message) && s() ? e : null
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
                }), a.setTag("buildNumber", (e = "243785", "243785")), a.setTag("builtAt", String("1699119898462"));
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
                    return l
                }
            });
            var a = n("294707"),
                r = n("686298");

            function l(e, t, n, l, i) {
                for (let s of r.ApplicationStreamSettingRequirements)
                    if ((null == s.preset || e === s.preset) && t === s.resolution && n === s.fps && (0, a.default)(s, l, i)) return !0;
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
                l = n("646718");

            function i(e, t, n) {
                if (null == e || null == e.quality && null == e.guildPremiumTier) return !0;
                let i = !1;
                return null != e.quality && (e.quality === l.StreamQualities.HIGH_STREAMING_QUALITY ? i = i || r.default.canStreamQuality(r.default.StreamQuality.HIGH, t) : e.quality === l.StreamQualities.MID_STREAMING_QUALITY && (i = i || r.default.canStreamQuality(r.default.StreamQuality.MID, t))), null != e.guildPremiumTier && (i = i || (0, a.isGuildBoostedAtLeast)(n, e.guildPremiumTier)), i
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
                l = n("782340");

            function i(e, t, n, i) {
                if (e.state === r.ApplicationStreamStates.RECONNECTING) return {
                    mainText: l.default.Messages.STREAM_RECONNECTING_ERROR,
                    supportingText: l.default.Messages.STREAM_RECONNECTING_ERROR_SUBTEXT
                };
                if (e.state === r.ApplicationStreamStates.PAUSED) return n ? {
                    mainText: l.default.Messages.STREAM_CAPTURE_PAUSED,
                    supportingText: l.default.Messages.STREAM_CAPTURE_PAUSED_DETAILS
                } : {
                    mainText: l.default.Messages.STREAM_CAPTURE_PAUSED,
                    supportingText: l.default.Messages.STREAM_CAPTURE_PAUSED_DETAILS_VIEWER.format({
                        username: a.default.getName(e.guildId, e.channelId, t)
                    })
                };
                return i ? {
                    mainText: l.default.Messages.STREAM_PREVIEW_PAUSED,
                    supportingText: l.default.Messages.STREAM_PREVIEW_PAUSED_SUBTEXT
                } : null
            }
        },
        349171: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("773336"),
                r = n("50885");

            function l(e) {
                a.isPlatformEmbedded ? r.default.focus(e) : window.focus()
            }
        },
        16916: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("629109"),
                r = n("990766"),
                l = n("271938"),
                i = n("374014");

            function s(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (null == e) return;
                let {
                    streamType: n,
                    guildId: s,
                    channelId: o,
                    ownerId: u
                } = e, d = (0, i.encodeStreamKey)({
                    streamType: n,
                    guildId: s,
                    channelId: o,
                    ownerId: u
                });
                u === l.default.getId() && a.default.setGoLiveSource(null), r.stopStream(d, t)
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
                r = n("913144");
            let l = {
                    enabled: !1
                },
                i = {},
                s = {},
                o = !1;
            class u extends a.default.DeviceSettingsStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
                    o = e.enabled
                }
                getWaitingHighFive(e, t) {
                    var n;
                    return null === (n = i[e]) || void 0 === n ? void 0 : n[t]
                }
                getCompletedHighFive(e, t) {
                    var n;
                    return null === (n = s[e]) || void 0 === n ? void 0 : n[t]
                }
                getEnabled() {
                    return o
                }
                getUserAgnosticState() {
                    return {
                        enabled: o
                    }
                }
            }
            u.persistKey = "HighFiveStore";
            var d = new u(r.default, {
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
                    o = t
                },
                HIGH_FIVE_COMPLETE: function(e) {
                    var t;
                    let {
                        completingEmoji: n,
                        completingUserId: a,
                        waitingUserId: r,
                        channelId: l
                    } = e, o = null !== (t = i[l]) && void 0 !== t ? t : {}, u = o[r];
                    if (delete o[r], null == u) return !1;
                    s[l] = {
                        ...s[l],
                        [r]: [u, n],
                        [a]: [n, u]
                    }
                },
                HIGH_FIVE_COMPLETE_CLEAR: function(e) {
                    var t;
                    let {
                        firstUserId: n,
                        secondUserId: a,
                        channelId: r
                    } = e, l = null !== (t = s[r]) && void 0 !== t ? t : {};
                    delete l[n], delete l[a]
                }
            })
        },
        391591: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("984519");
            let r = /🏻|🏼|🏽|🏾|🏿|\uFE0F/g;

            function l(e) {
                return a.HIGH_FIVE_EMOJIS.has(e.replace(r, ""))
            }
        },
        723872: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isRTCConnectedInHub: function() {
                    return o
                },
                useConnectedInCurrentHub: function() {
                    return u
                }
            });
            var a = n("446674"),
                r = n("42203"),
                l = n("305961"),
                i = n("18494"),
                s = n("49111");
            let o = () => {
                    let e = i.default.getVoiceChannelId();
                    if (null == e) return !1;
                    let t = r.default.getChannel(e);
                    if (null == t) return !1;
                    let n = l.default.getGuild(t.getGuildId());
                    return null != n && n.hasFeature(s.GuildFeatures.HUB)
                },
                u = e => (0, a.useStateFromStores)([i.default, r.default, l.default], () => {
                    let t = i.default.getVoiceChannelId();
                    if (null == t) return !1;
                    let n = r.default.getChannel(t);
                    if (null == n) return !1;
                    let a = l.default.getGuild(n.getGuildId());
                    return null != a && a.id === e
                })
        },
        567469: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useStageParticipants: function() {
                    return s
                },
                useStageParticipantsCount: function() {
                    return o
                },
                useSortedRequestToSpeakParticipants: function() {
                    return u
                },
                useActualStageSpeakerCount: function() {
                    return d
                }
            });
            var a = n("446674"),
                r = n("334572"),
                l = n("488464"),
                i = n("998716");

            function s(e, t) {
                let [n] = (0, a.useStateFromStores)([l.default], () => [l.default.getMutableParticipants(e, t), l.default.getParticipantsVersion(e)], [e, t], r.isVersionEqual);
                return n
            }

            function o(e, t) {
                return (0, a.useStateFromStores)([l.default], () => l.default.getParticipantCount(e, t), [e, t])
            }

            function u(e) {
                let [t] = (0, a.useStateFromStores)([l.default], () => {
                    let t = l.default.getMutableRequestToSpeakParticipants(e);
                    return [t, l.default.getRequestToSpeakParticipantsVersion(e)]
                }, [e], r.isVersionEqual);
                return t
            }

            function d(e) {
                return (0, a.useStateFromStores)([l.default], () => {
                    let t = l.default.getMutableParticipants(e, i.StageChannelParticipantNamedIndex.SPEAKER),
                        n = t.filter(e => e.type === i.StageChannelParticipantTypes.VOICE);
                    return n.length
                }, [e])
            }
        },
        924872: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShowStageMusicMuteButton: function() {
                    return C
                },
                shouldShowStageMusicMuteButton: function() {
                    return _
                },
                default: function() {
                    return v
                }
            });
            var a = n("446674"),
                r = n("689988"),
                l = n("42203"),
                i = n("42887"),
                s = n("18494"),
                o = n("800762"),
                u = n("709681"),
                d = n("488464"),
                c = n("567469"),
                f = n("998716"),
                p = n("834052"),
                E = n("274438");
            let h = e => e / 400,
                g = !1,
                m = (0, u.createSound)("stage_waiting", "stage_waiting", h(i.default.getOutputVolume()));

            function S() {
                let e = s.default.getVoiceChannelId();
                if (null == e) {
                    m.stop(), g = !1;
                    return
                }
                let t = l.default.getChannel(e);
                if (!(null == t ? void 0 : t.isGuildStageVoice())) {
                    m.stop(), g = !1;
                    return
                }
                let n = i.default.isSelfDeaf();
                if (n) {
                    m.stop(), g = !1;
                    return
                }
                let a = E.default.shouldPlay();
                if (a) {
                    m.volume = h(i.default.getOutputVolume()), m.loop(), g = !0;
                    return
                }
                let r = p.default.isLive(e);
                if (r) {
                    m.stop(), g = !1;
                    return
                }
                let u = E.default.isMuted();
                if (u) {
                    m.pause(), g = !1;
                    return
                }
                let d = null != Object.values(o.default.getVoiceStatesForChannel(e)).find(e => !e.suppress && !e.isVoiceMuted());
                d || g ? d && (m.pause(), g = !1) : (m.volume = h(i.default.getOutputVolume()), m.loop(), g = !0)
            }

            function C(e) {
                let t = (0, a.useStateFromStores)([s.default], () => s.default.getVoiceChannelId() === e),
                    n = (0, c.useStageParticipants)(e, f.StageChannelParticipantNamedIndex.SPEAKER),
                    r = null != n.find(e => !e.voiceState.isVoiceMuted()),
                    l = (0, a.useStateFromStores)([p.default], () => p.default.getStageInstanceByChannel(e));
                return t && null == l && !r
            }

            function _(e) {
                let t = s.default.getVoiceChannelId() === e,
                    n = d.default.getMutableParticipants(e, f.StageChannelParticipantNamedIndex.SPEAKER),
                    a = null != n.find(e => !e.voiceState.isVoiceMuted()),
                    r = p.default.getStageInstanceByChannel(e);
                return t && null == r && !a
            }
            class T extends r.default {
                handleVoiceChannelSelect(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null != t) {
                        let e = l.default.getChannel(t);
                        (null == e ? void 0 : e.isGuildStageVoice()) ? S(): (m.stop(), g = !1)
                    } else m.stop(), g = !1
                }
                handleLogout() {
                    m.stop(), g = !1
                }
                handlePlay(e) {
                    let {
                        play: t
                    } = e;
                    t ? S() : (m.pause(), g = !1)
                }
                handleMute(e) {
                    let {
                        muted: t
                    } = e;
                    t ? (m.pause(), g = !1) : S()
                }
                handleVoiceStateUpdates() {
                    S()
                }
                handleSetOutputVolume(e) {
                    let {
                        volume: t
                    } = e;
                    m.volume = h(t)
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
            var v = new T
        },
        274438: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("446674"),
                r = n("913144");
            let l = !1,
                i = !1;
            class s extends a.default.DeviceSettingsStore {
                initialize(e) {
                    null != e && (l = e)
                }
                isMuted() {
                    return l
                }
                shouldPlay() {
                    return i
                }
                getUserAgnosticState() {
                    return l
                }
            }
            s.displayName = "StageMusicStore", s.persistKey = "StageMusicStore";
            var o = new s(r.default, {
                STAGE_MUSIC_MUTE: function(e) {
                    let {
                        muted: t
                    } = e;
                    l = t, i = !1
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
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("364082"),
                l = e => {
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
                    return p
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("819855"),
                i = n("714657"),
                s = n("736626"),
                o = n("21121"),
                u = n("161778"),
                d = n("168973"),
                c = n("559980"),
                f = n("843455");

            function p(e) {
                let {
                    children: t
                } = e, n = (0, r.useStateFromStores)([u.default], () => u.default.theme), p = (0, r.useStateFromStores)([d.default], () => d.default.useAMOLEDTheme === c.AMOLEDThemeState.ON), E = (0, o.useInMainTabsExperiment)(), {
                    canUseGradientTokens: h
                } = (0, s.default)({
                    location: "RootThemeContextProvider"
                }), g = (0, r.useStateFromStores)([i.default], () => i.default.gradientPreset), m = 0;
                return p && (m = (0, l.setThemeFlag)(m, l.ThemeContextFlags.MOBILE_LEGACY_AMOLED_MODE_ENABLED)), E && (m = (0, l.setThemeFlag)(m, l.ThemeContextFlags.MOBILE_REDESIGN_ENABLED)), null != g && h && (m = g.theme === f.ThemeTypes.LIGHT ? (0, l.setThemeFlag)(m, l.ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED) : (0, l.setThemeFlag)(m, l.ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED)), (0, a.jsx)(l.RootThemeContextProvider, {
                    theme: n,
                    flags: m,
                    children: t
                })
            }
        },
        289180: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                },
                getVideoPermission: function() {
                    return o
                }
            });
            var a = n("446674"),
                r = n("223913"),
                l = n("305961"),
                i = n("957255");

            function s(e) {
                let t = (0, a.useStateFromStores)([l.default, i.default], () => e.isPrivate() || (0, r.canStreamInChannel)(e, l.default, i.default, !1), [e]);
                return t
            }

            function o(e) {
                return e.isPrivate() || (0, r.canStreamInChannel)(e, l.default, i.default, !1)
            }
        },
        289656: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getVideoButtonLabel: function() {
                    return l
                }
            });
            var a = n("49111"),
                r = n("782340");

            function l(e) {
                let {
                    enabled: t,
                    join: n,
                    channel: l,
                    cameraUnavailable: i,
                    hasPermission: s,
                    channelLimit: o = -1,
                    channelLimitReached: u = !1
                } = e, d = t ? r.default.Messages.CAMERA_OFF : r.default.Messages.CAMERA_ON;
                if (n) {
                    let e = (null == l ? void 0 : l.isManaged()) || !(null == l ? void 0 : l.isPrivate());
                    d = e ? r.default.Messages.CONNECT_TO_VIDEO : r.default.Messages.JOIN_VIDEO_CALL
                }
                return i && (d = r.default.Messages.CAMERA_UNAVAILABLE), !s && (d = r.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE), u && !t && (d = (null == l ? void 0 : l.isGuildStageVoice()) ? o >= a.MAX_STAGE_VIDEO_USER_LIMIT_TIER3 ? r.default.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED_MAX : r.default.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED : r.default.Messages.CAMERA_DISABLED_LIMIT_REACHED.format({
                    limit: o
                })), d
            }
        },
        784981: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983"),
                r = n("884691"),
                l = n("414456"),
                i = n.n(l),
                s = n("799869"),
                o = r.forwardRef(function(e, t) {
                    let {
                        children: n,
                        className: r,
                        style: l,
                        noBorder: o = !1,
                        participantUserId: u
                    } = e;
                    return (0, a.jsx)("div", {
                        className: i(r, s.tile, {
                            [s.noBorder]: o
                        }),
                        style: l,
                        ref: t,
                        "data-selenium-video-tile": u,
                        children: n
                    })
                })
        },
        100844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CallTileCTA: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                i = n("77078"),
                s = n("796863");

            function o(e) {
                let {
                    children: t,
                    onClick: n,
                    className: r,
                    tooltip: o
                } = e;
                return (0, a.jsx)(i.Tooltip, {
                    text: o,
                    children: e => {
                        let {
                            onClick: o,
                            ...u
                        } = e;
                        return (0, a.jsx)(i.Button, {
                            ...u,
                            onClick: e => {
                                null == n || n(e), null == o || o()
                            },
                            innerClassName: s.buttonReset,
                            color: l(s.cta, r),
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
                    return u
                },
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                i = n("77078"),
                s = n("145131"),
                o = n("929422");

            function u(e) {
                return e < 400 ? "small" : e < 1e3 ? "medium" : "large"
            }

            function d(e) {
                let {
                    onCTAClick: t,
                    callToAction: n,
                    header: r,
                    description: u,
                    size: d,
                    className: c,
                    artURL: f,
                    noArt: p = !1,
                    selected: E = !1
                } = e;
                return (0, a.jsxs)(s.default, {
                    className: c,
                    justify: s.default.Justify.CENTER,
                    align: s.default.Align.CENTER,
                    direction: s.default.Direction.VERTICAL,
                    style: {
                        padding: 4
                    },
                    children: [!p && null != f && (0, a.jsx)("div", {
                        className: l(o.art, o[d]),
                        style: {
                            backgroundImage: "url(".concat(f, ")")
                        }
                    }), null != r ? (0, a.jsx)(i.Text, {
                        color: "none",
                        variant: "text-md/semibold",
                        className: o.header,
                        children: r
                    }) : null, null != u ? (0, a.jsx)(i.Text, {
                        color: "none",
                        className: o.description,
                        variant: "text-sm/medium",
                        children: u
                    }) : null, E || null == n ? null : (0, a.jsx)(i.Button, {
                        className: o.outerButton,
                        size: i.Button.Sizes.NONE,
                        color: i.Button.Colors.WHITE,
                        look: i.Button.Looks.BLANK,
                        innerClassName: o.button,
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
                    return v
                },
                default: function() {
                    return I
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("77078"),
                i = n("901582"),
                s = n("191145"),
                o = n("976074"),
                u = n("856343"),
                d = n("16916"),
                c = n("373469"),
                f = n("42887"),
                p = n("697218"),
                E = n("394832"),
                h = n("985622"),
                g = n("356553"),
                m = n("387111"),
                S = n("773336"),
                C = n("49111"),
                _ = n("353927"),
                T = n("782340");

            function v(e, t, n) {
                let a = (0, r.useStateFromStores)([s.default], () => s.default.getSelectedParticipantId(e.id)),
                    l = (0, r.useStateFromStores)([c.default], () => null != a ? c.default.getActiveStreamForStreamKey(a) : null, [a]),
                    i = (0, r.useStateFromStoresArray)([p.default], () => {
                        let a = n.filter(e => e.ownerId !== (null == t ? void 0 : t.id)).map(t => ({
                            stream: t,
                            username: m.default.getName(e.getGuildId(), e.id, p.default.getUser(t.ownerId))
                        }));
                        return 1 === a.length && a[0].stream.ownerId === (null == l ? void 0 : l.ownerId) ? [] : a
                    }, [e, l, n, t]);
                return i
            }

            function I(e) {
                var t;
                let {
                    channel: n,
                    currentUser: r,
                    activeStreams: s,
                    hideSelfOptions: c = !1,
                    showReportOption: p = !1,
                    handleGoLive: m,
                    onClose: I,
                    onSelect: A,
                    appContext: M = C.AppContext.APP
                } = e, L = f.default.supports(_.Features.DESKTOP_CAPTURE_APPLICATIONS), O = null !== (t = s.find(e => e.ownerId === (null == r ? void 0 : r.id))) && void 0 !== t ? t : null, N = v(n, r, s), y = (0, u.default)(O, M), D = (0, o.default)(O, M, C.NOOP_NULL), R = null == O ? (0, a.jsx)(l.MenuItem, {
                    id: "share-your-screen",
                    label: T.default.Messages.SHARE_YOUR_SCREEN,
                    icon: E.default,
                    action: m
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [S.isPlatformEmbedded ? (0, a.jsx)(l.MenuItem, {
                        id: "stream-settings",
                        label: T.default.Messages.SCREENSHARE_STREAM_QUALITY,
                        children: y
                    }) : null, p ? D : null, L ? (0, a.jsx)(l.MenuItem, {
                        id: "change-windows",
                        label: T.default.Messages.SCREENSHARE_CHANGE_WINDOWS,
                        icon: E.default,
                        action: m
                    }) : null, (0, a.jsx)(l.MenuItem, {
                        id: "stop-streaming",
                        label: T.default.Messages.STOP_STREAMING,
                        icon: h.default,
                        action: () => (0, d.default)(O)
                    })]
                });
                return (0, a.jsx)(i.default, {
                    section: C.AnalyticsSections.CONTEXT_MENU,
                    children: (0, a.jsxs)(l.Menu, {
                        onSelect: A,
                        navId: "manage-streams",
                        onClose: I,
                        "aria-label": null != O ? T.default.Messages.STOP_STREAMING : T.default.Messages.SHARE_YOUR_SCREEN,
                        children: [(0, a.jsx)(l.MenuGroup, {
                            children: N.map(e => {
                                let {
                                    stream: t,
                                    username: n
                                } = e;
                                return (0, a.jsx)(l.MenuItem, {
                                    id: t.ownerId,
                                    label: T.default.Messages.STOP_WATCHING_USER.format({
                                        username: n
                                    }),
                                    icon: g.default,
                                    action: () => (0, d.default)(t)
                                }, "manage-stream-menu".concat(t.ownerId))
                            })
                        }), c ? null : R]
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
                l = n("446674"),
                i = n("990766"),
                s = n("374014"),
                o = n("42203"),
                u = n("607391"),
                d = n("782340");
            let c = n("729861");

            function f(e) {
                let {
                    stream: t,
                    width: n,
                    noArt: f = !1,
                    selected: p = !1
                } = e, E = (0, l.useStateFromStores)([o.default], () => o.default.getChannel(t.channelId));
                return r.useEffect(() => {
                    (null == E ? void 0 : E.isGuildStageVoice()) && (0, i.closeStream)((0, s.encodeStreamKey)(t), !1)
                }, []), (0, a.jsx)(u.default, {
                    artURL: c,
                    noArt: f,
                    selected: p,
                    size: (0, u.getSizeForWidth)(n),
                    header: d.default.Messages.STREAM_ENDED,
                    onCTAClick: () => (0, i.closeStream)((0, s.encodeStreamKey)(t)),
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
                l = n("374014"),
                i = n("701909"),
                s = n("607391"),
                o = n("49111"),
                u = n("782340");
            let d = n("242412");

            function c(e) {
                let {
                    stream: t,
                    width: n,
                    selected: c = !1,
                    noArt: f = !1
                } = e;
                return (0, a.jsx)(s.default, {
                    artURL: d,
                    header: u.default.Messages.STREAM_FAILED_TITLE,
                    size: (0, s.getSizeForWidth)(n),
                    noArt: f,
                    selected: c,
                    description: u.default.Messages.STREAM_FAILED_DESCRIPTION.format({
                        helpUrl: i.default.getArticleURL(o.HelpdeskArticles.STREAM_FAILED)
                    }),
                    onCTAClick: () => (0, r.closeStream)((0, l.encodeStreamKey)(t)),
                    callToAction: u.default.Messages.CLOSE_STREAM
                })
            }
        },
        211019: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                i = n("446674"),
                s = n("77078"),
                o = n("990766"),
                u = n("373469"),
                d = n("271938"),
                c = n("30672"),
                f = n("100844"),
                p = n("607391"),
                E = n("782340"),
                h = n("996810");
            let g = n("588281");

            function m(e) {
                let {
                    participant: t,
                    width: n,
                    noArt: r = !1,
                    selected: m = !1
                } = e, S = n < 195, C = (0, i.useStateFromStores)([u.default, d.default], () => u.default.getAllActiveStreams().some(e => {
                    let {
                        ownerId: t
                    } = e;
                    return t !== d.default.getId()
                }));
                return (0, a.jsx)("div", {
                    className: l(h.content, h.streamHidden, {
                        [h.small]: S
                    }),
                    children: (0, a.jsx)(p.default, {
                        className: h.streamHiddenEmptyState,
                        artURL: g,
                        noArt: r,
                        selected: m,
                        size: (0, p.getSizeForWidth)(n),
                        header: S ? null : E.default.Messages.STREAM_HIDDEN,
                        description: m ? null : (0, a.jsxs)("div", {
                            className: l(h.streamHiddenCTA, {
                                [h.largePaddingTop]: !S
                            }),
                            children: [(0, a.jsx)(f.CallTileCTA, {
                                isSmall: S,
                                children: (0, a.jsx)(s.Text, {
                                    variant: S ? "text-sm/semibold" : "text-md/semibold",
                                    color: "none",
                                    children: n < 175 ? E.default.Messages.WATCH : E.default.Messages.WATCH_STREAM
                                })
                            }), C ? (0, a.jsx)(f.CallTileCTA, {
                                className: h.addCTA,
                                tooltip: E.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
                                onClick: e => {
                                    e.stopPropagation(), (0, o.watchStream)(t.stream, {
                                        forceMultiple: !0
                                    })
                                },
                                isSmall: S,
                                children: (0, a.jsx)(c.default, {
                                    className: h.addStreamIcon
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
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("42887"),
                i = n("353927"),
                s = n("782340");

            function o(e) {
                l.default.supports(i.Features.VIDEO) ? (0, r.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("861054").then(n.bind(n, "861054"));
                    return n => (0, a.jsx)(t, {
                        ...n,
                        header: s.default.Messages.CAMERA_UNAVAILABLE,
                        body: s.default.Messages.CAMERA_NO_DEVICE,
                        confirmText: s.default.Messages.OKAY,
                        onConfirm: e
                    })
                }) : (0, r.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("861054").then(n.bind(n, "861054"));
                    return l => (0, a.jsx)(t, {
                        ...l,
                        header: s.default.Messages.VIDEO_UNSUPPORTED_BROWSER_TITLE,
                        body: s.default.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY,
                        confirmText: s.default.Messages.DOWNLOAD_APP,
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
                l = n("782340");

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
                        header: l.default.Messages.SCREENSHARE_UNAVAILABLE,
                        body: l.default.Messages.SCREENSHARE_UNAVAILABLE_DOWNLOAD_APP,
                        confirmText: l.default.Messages.DOWNLOAD_APP,
                        onConfirm: e
                    })
                })
            }
        },
        799808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("990766"),
                i = n("773356"),
                s = n("349171"),
                o = n("292687"),
                u = n("305961"),
                d = n("42887"),
                c = n("697218"),
                f = n("773336"),
                p = n("49111"),
                E = n("686298");

            function h(e, t, h) {
                let g = o.default.getWindowOpen(p.PopoutWindowKeys.CHANNEL_CALL_POPOUT) ? p.PopoutWindowKeys.CHANNEL_CALL_POPOUT : null;
                if ((0, s.default)(g), f.isPlatformEmbedded)(0, r.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("451863").then(n.bind(n, "451863"));
                    return n => (0, a.jsx)(t, {
                        ...n,
                        guildId: e,
                        analyticsLocation: h
                    })
                });
                else {
                    var m;
                    let n = (0, i.default)(E.ApplicationStreamPresets.PRESET_CUSTOM, E.ApplicationStreamResolutions.RESOLUTION_1080, E.ApplicationStreamFPS.FPS_30, c.default.getCurrentUser(), null === (m = u.default.getGuild(e)) || void 0 === m ? void 0 : m.premiumTier) ? {
                        width: 1920,
                        height: 1080
                    } : {
                        width: 1280,
                        height: 720
                    };
                    d.default.getMediaEngine().getDesktopSource(n, !0).then(n => {
                        (0, l.startStream)(e, t, {
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
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("607391"),
                l = n("145131"),
                i = n("191933");

            function s(e) {
                let {
                    mainText: t,
                    supportingText: n,
                    children: s,
                    size: o
                } = e;
                return (0, a.jsxs)(l.default, {
                    className: i.root,
                    justify: l.default.Justify.CENTER,
                    align: l.default.Align.CENTER,
                    direction: l.default.Direction.VERTICAL,
                    children: [(0, a.jsx)(r.default, {
                        header: t,
                        description: n,
                        size: o
                    }), s]
                })
            }
        },
        576242: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("550766"),
                l = n("893011"),
                i = n("981913"),
                s = n("782340");

            function o(e) {
                let {
                    channelId: t,
                    applicationId: n,
                    centerButton: o = !1,
                    ...u
                } = e, d = o ? i.CenterControlButton : i.default;
                return (0, a.jsx)(d, {
                    ...u,
                    onClick: () => {
                        (0, r.stopEmbeddedActivity)({
                            channelId: t,
                            applicationId: n
                        })
                    },
                    iconComponent: l.default,
                    label: s.default.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY
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
            var r = n("987317"),
                l = n("713726"),
                i = n("754493"),
                s = n("293137"),
                o = n("981913"),
                u = n("782340");

            function d(e) {
                let {
                    centerButton: t = !1,
                    channel: n,
                    onClick: d,
                    ...c
                } = e, f = t ? o.CenterControlButton : o.default, p = n.isBroadcastChannel(), E = (0, i.useIsBroadcastingInChannel)(n.id);
                return (0, a.jsx)(f, {
                    ...c,
                    onClick: () => {
                        E && (0, l.stopBroadcast)(), r.default.disconnect(), null == d || d()
                    },
                    iconComponent: s.default,
                    label: E ? u.default.Messages.STOP_BROADCASTING : p ? u.default.Messages.LEAVE_BROADCAST : u.default.Messages.DISCONNECT_SELF
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
                l = n.n(r),
                i = n("758710"),
                s = n("981913"),
                o = n("782340"),
                u = n("407735");

            function d(e) {
                let {
                    popoutOpen: t,
                    onClosePopout: n,
                    onOpenPopout: r,
                    ...d
                } = e, c = t ? o.default.Messages.POPOUT_RETURN : o.default.Messages.POPOUT_PLAYER;
                return (0, a.jsx)(s.default, {
                    label: c,
                    onClick: t ? n : r,
                    iconComponent: i.default,
                    iconClassName: l({
                        [u.popIn]: t
                    }),
                    ...d
                })
            }
        },
        954519: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("985622"),
                l = n("356553"),
                i = n("981913"),
                s = n("782340");

            function o(e) {
                let {
                    isSelfStream: t,
                    centerButton: n = !1,
                    ...o
                } = e, u = n ? i.CenterControlButton : i.default;
                return (0, a.jsx)(u, {
                    label: t ? s.default.Messages.STOP_STREAMING : s.default.Messages.STOP_WATCHING,
                    iconComponent: t ? r.default : l.default,
                    isActive: !0,
                    ...o
                })
            }
        },
        109489: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                r = n("884691"),
                l = n("414456"),
                i = n.n(l),
                s = n("255397"),
                o = n("256170"),
                u = n("155207"),
                d = n("981913"),
                c = n("782340"),
                f = n("789749");

            function p(e) {
                let {
                    className: t,
                    isVertical: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: f.iconContainer,
                    children: [(0, a.jsx)(o.default, {
                        className: i(n ? f.upCaret : f.leftCaret, t)
                    }), (0, a.jsx)(u.default, {
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
                    children: [(0, a.jsx)(o.default, {
                        className: i(n ? f.downCaret : f.rightCaret, t)
                    }), n && (0, a.jsx)(u.default, {
                        className: i(f.members, t)
                    })]
                })
            }

            function h(e) {
                let {
                    channelId: t,
                    className: n,
                    isParticipantsOpen: l,
                    isVertical: o = !1,
                    hideTooltip: u = !1
                } = e, h = r.useCallback(e => {
                    let {
                        className: t
                    } = e;
                    return l ? (0, a.jsx)(E, {
                        className: t,
                        isVertical: o
                    }) : (0, a.jsx)(p, {
                        className: t,
                        isVertical: o
                    })
                }, [l, o]);
                return (0, a.jsx)(d.default, {
                    label: l ? c.default.Messages.VIDEO_CALL_HIDE_MEMBERS : c.default.Messages.VIDEO_CALL_SHOW_MEMBERS,
                    className: i(f.participantsButton, n),
                    onClick: function() {
                        s.default.toggleParticipants(t, !l)
                    },
                    iconComponent: h,
                    shouldShowTooltip: !u
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
            var r = n("414456"),
                l = n.n(r),
                i = n("244201"),
                s = n("289656"),
                o = n("437825"),
                u = n("981913"),
                d = n("911360");

            function c(e) {
                let t = (0, s.getVideoButtonLabel)(e),
                    {
                        enabled: n,
                        cameraUnavailable: r,
                        onChange: l,
                        onCameraUnavailable: u,
                        hasPermission: d,
                        children: c,
                        channelLimitReached: f = !1
                    } = e,
                    p = (0, i.useAppContext)(),
                    E = r ? () => u() : () => l(!e.enabled, p);
                return (0, a.jsx)(a.Fragment, {
                    children: c({
                        onClick: E,
                        active: n,
                        disabled: !n && (!d || f),
                        iconComponent: o.default,
                        label: t,
                        unavailable: r
                    })
                })
            }

            function f(e) {
                let {
                    enabled: t,
                    join: n,
                    channel: r,
                    onChange: i,
                    onCameraUnavailable: s,
                    cameraUnavailable: o,
                    hasPermission: f,
                    className: p,
                    channelLimitReached: E,
                    channelLimit: h,
                    centerButton: g = !1,
                    onPopoutClick: m,
                    ...S
                } = e, C = g ? u.CenterControlButton : u.default;
                return (0, a.jsx)(c, {
                    enabled: t,
                    join: n,
                    channel: r,
                    onChange: i,
                    onCameraUnavailable: s,
                    cameraUnavailable: o,
                    hasPermission: f,
                    channelLimitReached: E,
                    channelLimit: h,
                    children: e => {
                        let {
                            unavailable: n,
                            ...r
                        } = e;
                        return (0, a.jsx)(C, {
                            ...r,
                            ...S,
                            isActive: t,
                            className: l(p, {
                                [d.fauxDisabled]: n
                            }),
                            onPopoutClick: m
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
                l = n("817736"),
                i = n("458960"),
                s = n("118810"),
                o = n("49111");
            let u = (e, t) => {
                let {
                    x: n,
                    y: a
                } = e, {
                    x: r,
                    y: l
                } = t;
                return Math.pow(n - r, 2) + Math.pow(a - l, 2)
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
                    let l = this.translate(e, t);
                    i.default.spring(this.state.position, {
                        toValue: {
                            x: l.x,
                            y: l.y
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
                    let e = (0, l.findDOMNode)(this._ref);
                    (0, s.isElement)(e) && (this._height = e.clientHeight, this._width = e.clientWidth)
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
                    } = this.props, l = [0, 1], s = ["0px", "1px"], o = i.default.accelerate({
                        pointerEvents: e ? "none" : "auto",
                        transform: [{
                            translateX: t.x.interpolate({
                                inputRange: l,
                                outputRange: s
                            })
                        }, {
                            translateY: t.y.interpolate({
                                inputRange: l,
                                outputRange: s
                            })
                        }],
                        ...this.props.style
                    });
                    return (0, a.jsx)(i.default.div, {
                        ref: this.handleSetRef,
                        className: n,
                        onMouseDown: this.handleMouseDown,
                        style: o,
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
                        } = this.state, l = e.target;
                        if (e.button === o.MouseButtons.PRIMARY && (t || null != a && l.matches(a))) {
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
                            dragging: l
                        } = this.state;
                        !r && u(this._dragStart, {
                            x: e.clientX,
                            y: e.clientY
                        }) > 9 && (r = !0), r && (this.animateToPosition(e.clientX - this._offsetX, e.clientY - this._offsetY, {
                            tension: 80,
                            friction: 8
                        }, null, !1), this.setState({
                            dragging: r
                        }, () => {
                            !l && (null == t || t(e.clientX, e.clientY)), null == n || n(e.clientX, e.clientY)
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
                l = n("414456"),
                i = n.n(l),
                s = n("77078"),
                o = n("145131"),
                u = n("648324");
            class d extends r.PureComponent {
                render() {
                    let {
                        note: e,
                        title: t,
                        action: n,
                        className: r
                    } = this.props;
                    return (0, a.jsx)("div", {
                        className: i(u.wrapper, r),
                        children: (0, a.jsxs)(o.default, {
                            className: u.flexWrapper,
                            direction: o.default.Direction.VERTICAL,
                            align: o.default.Align.CENTER,
                            justify: o.default.Justify.CENTER,
                            children: [(0, a.jsx)(o.default.Child, {
                                grow: 0,
                                className: u.image
                            }), (0, a.jsxs)(o.default.Child, {
                                grow: 0,
                                className: u.text,
                                children: [(0, a.jsx)(s.H, {
                                    className: u.title,
                                    children: t
                                }), null != e ? (0, a.jsx)("div", {
                                    className: u.note,
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
                    return E
                },
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                r = n("884691"),
                l = n("414456"),
                i = n.n(l),
                s = n("817736"),
                o = n("773336"),
                u = n("325753"),
                d = n("49111"),
                c = n("925201"),
                f = n("212029");
            let p = {
                top: 80,
                bottom: 132,
                left: 80
            };
            class E extends r.PureComponent {
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
                    let t = (0, s.findDOMNode)(this._innerDiv);
                    if (null != t) {
                        let e = t.getBoundingClientRect();
                        this._width = e.width, this._height = e.height
                    }
                    let {
                        edgeOffsetTop: n,
                        edgeOffsetLeft: a,
                        edgeOffsetBottom: r,
                        edgeOffsetRight: l,
                        maxX: i,
                        maxY: u,
                        dockedRect: c
                    } = this.props, f = Math.round(n), p = Math.round(u - r - this._height), E = Math.round(a), h = Math.round(i - l - this._width), g = (0, o.getPlatform)(), m = g !== o.PlatformTypes.WEB && this.inPopout ? 22 : 0;
                    if (null != c) {
                        var S, C;
                        return {
                            y: (null !== (S = null == c ? void 0 : c.y) && void 0 !== S ? S : 0) - m,
                            x: null !== (C = null == c ? void 0 : c.x) && void 0 !== C ? C : 0
                        }
                    }
                    switch (e) {
                        case d.PictureInPicturePositions.TOP_LEFT:
                            return {
                                y: f, x: E
                            };
                        case d.PictureInPicturePositions.BOTTOM_LEFT:
                            return {
                                y: p, x: E
                            };
                        case d.PictureInPicturePositions.TOP_RIGHT:
                            return {
                                y: f, x: h
                            };
                        default:
                            return {
                                y: p, x: h
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
                        roundCorners: l,
                        className: s
                    } = this.props, o = {};
                    return null != n && (o = {
                        transform: "translate3d(".concat(n.x, ", ").concat(n.y, ", 0)"),
                        width: n.width,
                        height: n.height
                    }), (0, a.jsx)(u.default, {
                        dragAnywhere: !0,
                        ref: this.handleSetDraggableRef,
                        className: i(c.pictureInPictureWindow, s, {
                            [c.hidden]: r,
                            [c.borderRadius]: l
                        }),
                        maxX: e,
                        maxY: t,
                        disabled: null != n,
                        onDragStart: this.handleDragStart,
                        onDrag: this.handleDrag,
                        onDragEnd: this.handleDragEnd,
                        children: (0, a.jsx)("div", {
                            ref: this.handleSetInnerDivRef,
                            style: o,
                            children: this.props.children
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._width = 0, this._height = 0, this._velocityX = 0, this._velocityY = 0, this._lastMoveX = 0, this._lastMoveY = 0, this.ensureIsInPosition = () => {
                        this.setPosition(this.props.position)
                    }, this.handleSetInnerDivRef = e => {
                        var t;
                        this._innerDiv = e;
                        let n = null == e ? void 0 : e.ownerDocument.defaultView;
                        null != e && null != n && (this._resizeObserver = new n.ResizeObserver(this.ensureIsInPosition), null === (t = this._resizeObserver) || void 0 === t || t.observe(e))
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
                        } = this.props, l = this.calculateDecayingPosition(e, t, this._velocityX, this._velocityY), i = !0, s = !0;
                        if (l.x > a / 2 && (s = !1), l.y > r / 2 && (i = !1), n = i && s ? d.PictureInPicturePositions.TOP_LEFT : i && !s ? d.PictureInPicturePositions.TOP_RIGHT : !i && s ? d.PictureInPicturePositions.BOTTOM_LEFT : d.PictureInPicturePositions.BOTTOM_RIGHT, this.animateToPosition(n, this.ensureIsInPosition), n !== this.props.position) {
                            let {
                                id: e,
                                onMove: t
                            } = this.props;
                            null == t || t(e, n)
                        }
                    }
                }
            }
            E.defaultProps = {
                hidden: !1,
                roundCorners: !0
            };
            var h = r.memo(e => {
                let {
                    selectedPIPWindow: t,
                    pipWindows: n,
                    maxX: r,
                    maxY: l,
                    onWindowMove: s,
                    dockedRect: o,
                    pictureInPictureComponents: u,
                    appContext: h,
                    roundCorners: g
                } = e;
                return (0, a.jsx)("div", {
                    className: c.pictureInPicture,
                    children: (() => {
                        if (null == t) return null;
                        let e = Array.from(n.values()).map(e => {
                            if (e.id !== t.id && e.component !== d.PictureInPictureComponents.EMBED_IFRAME) return null;
                            let n = "string" == typeof e.component ? u[e.component] : e.component;
                            return (0, a.jsx)(n, {
                                ...e.props
                            }, "pipWindow-".concat(e.id))
                        });
                        return (0, a.jsx)(E, {
                            className: i(c.pictureInPictureWindowOverflow, f.elevationHigh),
                            appContext: h,
                            position: t.position,
                            id: t.id,
                            hidden: t.hidden,
                            onMove: s,
                            maxX: r,
                            maxY: l,
                            dockedRect: o,
                            edgeOffsetTop: p.top,
                            edgeOffsetBottom: p.bottom,
                            edgeOffsetLeft: p.left,
                            edgeOffsetRight: p.top,
                            roundCorners: g,
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
                    return E
                }
            });
            var a = n("37983"),
                r = n("884691"),
                l = n("669491"),
                i = n("77078"),
                s = n("462274"),
                o = n("181832"),
                u = n("981184"),
                d = n("506885"),
                c = n("217513"),
                f = n("845579"),
                p = n("249941"),
                E = function(e) {
                    let {
                        style: t,
                        src: n,
                        backgroundSrc: E,
                        userId: h,
                        pulseSpeakingIndicator: g = !1,
                        speaking: m = !1,
                        ...S
                    } = e, C = null != E ? E : n, _ = (0, s.default)(C, l.default.unsafe_rawColors.PRIMARY_800.css), T = (0, o.useCallBannerBackgroundExperiment)(!0, "VideoBackground-web").enabled, v = (0, c.default)(null != h ? h : ""), I = null == v ? void 0 : v.getBannerURL({
                        size: 1024,
                        canAnimate: f.GifAutoPlay.getSetting()
                    });
                    if (r.useEffect(() => {
                            null != h && T && (0, d.default)(h, void 0, {
                                dispatchWait: !0
                            })
                        }, [T, h]), null == n) return null;
                    let A = (0, a.jsx)(i.Avatar, {
                            className: p.avatarWrapper,
                            src: n,
                            ...S
                        }),
                        M = {
                            ...t,
                            backgroundColor: _
                        };
                    return null != I && m && T && (M.backgroundImage = "url(".concat(I, ")"), M.backgroundSize = "cover"), (0, a.jsx)("div", {
                        style: M,
                        className: p.background,
                        children: g ? (0, a.jsx)(u.default, {
                            shouldAnimate: m,
                            children: A
                        }) : A
                    })
                }
        },
        293137: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("739086"),
                i = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            className: l,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21.1169 1.11603L22.8839 2.88403L19.7679 6.00003L22.8839 9.11603L21.1169 10.884L17.9999 7.76803L14.8839 10.884L13.1169 9.11603L16.2329 6.00003L13.1169 2.88403L14.8839 1.11603L17.9999 4.23203L21.1169 1.11603ZM18 22H13C6.925 22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 14.938 9 18 13 18V17C13 16.447 13.447 16 14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22Z"
                        })
                    })
                }, l.PhoneHangUpIcon)
        },
        270227: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("75196");

            function l(e) {
                let {
                    width: t = 55,
                    height: n = 16,
                    color: l = "currentColor",
                    foreground: i,
                    ...s
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 55 16",
                    children: (0, a.jsxs)("g", {
                        fill: l,
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
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("354087"),
                i = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            className: l,
                            fill: r,
                            d: "M18 2H7C5.897 2 5 2.898 5 4V11H12.59L10.293 8.708L11.706 7.292L16.414 11.991L11.708 16.706L10.292 15.294L12.582 13H5V20C5 21.103 5.897 22 7 22H18C19.103 22 20 21.103 20 20V4C20 2.898 19.103 2 18 2Z"
                        })
                    })
                }, l.DoorExitIcon)
        },
        356553: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("671306"),
                i = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, a.jsx)("path", {
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M20 11V13.5H4V4.5H13V2.5H4C3.46957 2.5 2.96086 2.71071 2.58579 3.08579C2.21071 3.46086 2 3.96957 2 4.5L2 15.5C2 16.0304 2.21071 16.5391 2.58579 16.9142C2.96086 17.2893 3.46957 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C20.5304 17.5 21.0391 17.2893 21.4142 16.9142C21.7893 16.5391 22 16.0304 22 15.5V11H20Z",
                            fill: r
                        }), (0, a.jsx)("path", {
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M23 2.45174L21.5483 1L19.0051 3.55341L16.4517 1L15 2.45174L17.5534 4.99485L15 7.54826L16.4517 9L19.0051 6.44659L21.5483 9L23 7.54826L20.4466 4.99485L23 2.45174Z",
                            fill: r
                        })]
                    })
                }, l.ScreenXIcon)
        },
        940277: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("75196");

            function l(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: l = "currentColor",
                    foreground: i,
                    ...s
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsx)("polygon", {
                        fill: l,
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
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("75196");

            function l(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: l = "currentColor",
                    foreground: i,
                    ...s
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsx)("path", {
                        stroke: l,
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
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("75196");

            function l(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: l = "currentColor",
                    foreground: i,
                    ...s
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsx)("rect", {
                        width: "9",
                        height: "9",
                        x: "1.5",
                        y: "1.5",
                        fill: "none",
                        stroke: l,
                        className: i
                    })
                })
            }
        },
        655804: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("75196");

            function l(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: l = "currentColor",
                    foreground: i,
                    ...s
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsxs)("g", {
                        fill: l,
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
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("75196");

            function l(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: l = "currentColor",
                    foreground: i,
                    ...s
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsx)("rect", {
                        className: i,
                        fill: l,
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
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("75196");

            function l(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: l = "currentColor",
                    foreground: i,
                    ...s
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 12 12",
                    children: (0, a.jsx)("rect", {
                        fill: l,
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
                    return s
                }
            });
            var a = n("741148"),
                r = n("563680"),
                l = n("816454"),
                i = n("421804");

            function s(e) {
                let t = e.document,
                    n = (0, l.setupWindowId)(e);

                function s() {
                    (0, i.setCurrentlyInteractingWindowId)(n)
                }

                function o() {
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
                    }), i.INTERACTION_EVENTS)) t.addEventListener(n, s, !0), t.addEventListener(n, o, !1);
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
            }), (r = a || (a = {})).UNHANDLED_NATIVE_ERROR = "unhandled_native_error", r.UNHANDLED_JS_ERROR = "unhandled_js_error", r.SOCKET_CRASHED = "socket_crashed"
        },
        721998: function(e, t, n) {
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
//# sourceMappingURL=f8dd4fb5fdebaf49400d.js.map