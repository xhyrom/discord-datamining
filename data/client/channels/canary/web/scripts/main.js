(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["63323"], {
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
                    return _
                }
            });
            var a = n("913144"),
                l = n("504385"),
                r = n("439141"),
                s = n("533222"),
                i = n("42887"),
                u = n("599110"),
                o = n("709681"),
                d = n("12307"),
                c = n("49111"),
                f = n("353927");

            function E() {
                (0, o.playSound)("mention3")
            }

            function p(e, t, n, a, l) {
                if (t === n) return;
                let r = e[t],
                    i = e[n];
                u.default.track(c.AnalyticEvents.MEDIA_DEVICE_CHANGED, {
                    device_from_name: s.default.getCertifiedDeviceName(t, null != r ? r.name : ""),
                    device_to_name: s.default.getCertifiedDeviceName(n, null != i ? i.name : ""),
                    device_type: a,
                    device_is_certified: s.default.isCertified(n),
                    location: l
                })
            }
            let S = {
                isNotSupported: () => !1,
                enable: e => Promise.resolve(!0)
            };
            S = n("412905");
            let {
                enable: g,
                isNotSupported: m
            } = S;
            var _ = {
                enable: g,
                toggleSelfMute() {
                    let {
                        context: e = f.MediaEngineContextTypes.DEFAULT,
                        syncRemote: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return m() ? Promise.resolve() : i.default.isEnabled() ? a.default.dispatch({
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
                        l = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    !m() && a.default.dispatch({
                        type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
                        context: n,
                        userId: e,
                        videoToggleState: t,
                        persist: l,
                        isAutomatic: r
                    })
                },
                setLocalVolume(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.MediaEngineContextTypes.DEFAULT;
                    a.default.dispatch({
                        type: "AUDIO_SET_LOCAL_VOLUME",
                        context: n,
                        userId: e,
                        volume: (0, l.snapVolumeToDefault)(t, n)
                    })
                },
                setLocalPan(e, t, n) {
                    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f.MediaEngineContextTypes.DEFAULT;
                    a.default.dispatch({
                        type: "AUDIO_SET_LOCAL_PAN",
                        context: l,
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
                            ...i.default.getModeOptions(n),
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
                            let n = i.default.getInputDevices(),
                                a = i.default.getInputDeviceId();
                            p(n, a, e, "Audio Input", t)
                        }
                        a.default.dispatch({
                            type: "AUDIO_SET_INPUT_DEVICE",
                            id: e
                        }), E()
                    }
                },
                setOutputDevice(e, t) {
                    if (!m()) {
                        if (null != t) {
                            let n = i.default.getOutputDevices(),
                                a = i.default.getOutputDeviceId();
                            p(n, a, e, "Audio Output", t)
                        }
                        a.default.dispatch({
                            type: "AUDIO_SET_OUTPUT_DEVICE",
                            id: e
                        }), E()
                    }
                },
                setVideoDevice(e, t) {
                    if (!m()) {
                        if (null != t) {
                            let n = i.default.getVideoDevices(),
                                a = i.default.getVideoDeviceId();
                            p(n, a, e, "Video", t)
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
                    (0, r.applyInitialVideoBackgroundOption)(), a.default.dispatch({
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
        412905: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isNotSupported: function() {
                    return p
                },
                enable: function() {
                    return g
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                r = n("913144"),
                s = n("605250"),
                i = n("42887"),
                u = n("599110"),
                o = n("49111"),
                d = n("180524"),
                c = n("782340");
            let f = new s.default("AudioActionCreators");

            function E() {
                (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("649486").then(n.bind(n, "649486"));
                    return t => (0, a.jsx)(e, {
                        source: "Unsupported Browser",
                        ...t
                    })
                })
            }

            function p() {
                return !i.default.isSupported() && ((0, l.openModal)(e => (0, a.jsx)(l.ConfirmModal, {
                    header: c.default.Messages.UNSUPPORTED_BROWSER,
                    confirmText: c.default.Messages.DOWNLOAD_APP,
                    cancelText: c.default.Messages.CANCEL,
                    onConfirm: E,
                    confirmButtonColor: l.Button.Colors.BRAND,
                    ...e,
                    children: (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: c.default.Messages.UNSUPPORTED_BROWSER_DETAILS
                    })
                })), !0)
            }

            function S(e) {
                u.default.track(o.AnalyticEvents.PERMISSIONS_ACKED, {
                    type: "audio",
                    action: e
                })
            }

            function g() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return p() ? Promise.resolve(!1) : (u.default.track(o.AnalyticEvents.PERMISSIONS_REQUESTED, {
                    type: "audio"
                }), i.default.getMediaEngine().enable().then(() => {
                    r.default.dispatch({
                        type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                        enabled: !0,
                        unmute: e
                    }), S(d.NativePermissionStates.ACCEPTED)
                }, e => {
                    switch (e) {
                        case o.UserMediaErrors.NO_DEVICES_FOUND:
                            S(d.NativePermissionStates.NO_DEVICES);
                            break;
                        case o.UserMediaErrors.PERMISSION_DENIED:
                            S(d.NativePermissionStates.DENIED);
                            break;
                        case o.UserMediaErrors.PERMISSION_DISMISSED:
                            S(d.NativePermissionStates.DISMISSED);
                            break;
                        default:
                            S(d.NativePermissionStates.ERROR), f.warn("unknown getUserMedia error: ".concat(e))
                    }
                }).then(() => !0))
            }
        },
        988738: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var a = n("37983"),
                l = n("884691"),
                r = n("817736"),
                s = n("759843"),
                i = n("446674"),
                u = n("77078"),
                o = n("272030"),
                d = n("244201"),
                c = n("428958"),
                f = n("161778"),
                E = n("144747"),
                p = n("983782"),
                S = n("659500"),
                g = n("452453"),
                m = n("49111");
            let _ = e => {
                let {
                    children: t,
                    close: n,
                    onUnmount: i,
                    rect: o,
                    position: f,
                    align: E,
                    impressionName: S,
                    impressionProperties: g
                } = e, _ = l.useRef(null);
                l.useEffect(() => {
                    var e, t;
                    let a = (0, r.findDOMNode)(_.current);
                    if (null == a) return;
                    let l = e => {
                        let t = e.target,
                            a = (0, r.findDOMNode)(_.current);
                        !(null != a && (0, u.referencePortalAwareContains)(a, t)) && (window.getSelection().removeAllRanges(), n())
                    };
                    return null === (e = a.ownerDocument) || void 0 === e || e.addEventListener("click", l, !0), null === (t = a.ownerDocument) || void 0 === t || t.addEventListener("contextmenu", l, !0), () => {
                        var e, t;
                        null === (e = a.ownerDocument) || void 0 === e || e.removeEventListener("click", l, !0), null === (t = a.ownerDocument) || void 0 === t || t.removeEventListener("contextmenu", l, !0)
                    }
                }, [n]);
                let h = l.useRef(i);
                l.useEffect(() => void(h.current = i)), l.useEffect(() => () => {
                    var e;
                    return null === (e = h.current) || void 0 === e ? void 0 : e.call(h)
                }, []), l.useLayoutEffect(() => {
                    var e;
                    null === (e = _.current) || void 0 === e || e.updatePosition()
                }), (0, c.default)({
                    type: s.ImpressionTypes.MENU,
                    name: S,
                    properties: g
                });
                let A = (0, d.useWindowDispatch)(),
                    T = l.useCallback(() => {
                        A.dispatch(m.ComponentActions.POPOUT_SHOW)
                    }, [A]),
                    C = l.useCallback(() => {
                        A.dispatch(m.ComponentActions.POPOUT_HIDE)
                    }, [A]);
                return (0, a.jsx)(p.AppReferencePositionLayer, {
                    onMount: T,
                    onUnmount: C,
                    reference: () => o,
                    position: null != f ? f : "right",
                    align: null != E ? E : "top",
                    autoInvert: !0,
                    ref: _,
                    nudgeAlignIntoViewport: !0,
                    children: t
                })
            };
            class h extends l.PureComponent {
                componentDidMount() {
                    let {
                        renderLazy: e,
                        renderWindow: t
                    } = this.props;
                    if (t.addEventListener("resize", this.closeResize, !0), S.ComponentDispatch.subscribe(m.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e) {
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
                    e.removeEventListener("resize", this.closeResize, !0), S.ComponentDispatch.unsubscribe(m.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu)
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
                    return l && null != i && null != s && null != n && null != u && s.context === t ? (0, a.jsx)(_, {
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
                                className: g.ContextMenuClassName,
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

            function A() {
                let {
                    contextMenu: e,
                    version: t,
                    isOpen: n
                } = (0, i.useStateFromStoresObject)([E.default], () => ({
                    contextMenu: E.default.getContextMenu(),
                    version: E.default.version,
                    isOpen: E.default.isOpen()
                })), r = (0, i.useStateFromStores)([f.default], () => f.default.theme), {
                    appContext: s,
                    renderWindow: u
                } = l.useContext(d.default);
                return (0, a.jsx)(h, {
                    appContext: s,
                    renderWindow: u,
                    ...e,
                    isOpen: n,
                    theme: r,
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
                l = n("446825").Buffer;
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
            var a = n("811022"),
                l = n("872717"),
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
                    return h
                },
                default: function() {
                    return A
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                r = n("913144"),
                s = n("697218"),
                i = n("599110"),
                u = n("773336"),
                o = n("180748"),
                d = n("206230"),
                c = n("49111");
            let f = window.matchMedia("(prefers-reduced-motion: reduce)"),
                E = window.matchMedia("(prefers-contrast: more)"),
                p = window.matchMedia("(prefers-contrast: less)"),
                S = window.matchMedia("(prefers-color-scheme: dark)"),
                g = window.matchMedia("(prefers-color-scheme: light)"),
                m = window.matchMedia("(forced-colors: active)"),
                _ = 5;

            function h() {
                return "windows" === (0, u.getOS)()
            }
            var A = {
                initBasic() {
                    f.addListener(this.handleSystemPrefersReducedMotionChanged), this.handleSystemPrefersReducedMotionChanged(f), S.addListener(this.handleSystemColorPreferencesChanged), g.addListener(this.handleSystemColorPreferencesChanged), m.addListener(this.handleSystemColorPreferencesChanged), this.handleSystemColorPreferencesChanged(), E.addListener(this.handleSystemPrefersContrastChanged), p.addListener(this.handleSystemPrefersContrastChanged), this.handleSystemPrefersContrastChanged()
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
                    _ = Math.max(_ - 1, 0), ! function() {
                        let e = s.default.getCurrentUser();
                        return null == e || Date.now() - +e.createdAt < 864e5
                    }() && !d.default.keyboardNavigationExplainerModalSeen && 0 === _ && (0, l.openModalLazy)(async () => {
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
                    S.matches ? e = c.ThemeTypes.DARK : g.matches && (e = c.ThemeTypes.LIGHT);
                    let t = !u.isPlatformEmbedded || h(),
                        n = t && m.matches ? "active" : "none";
                    r.default.wait(() => {
                        o.systemColorPreferencesChanged(e, n)
                    })
                },
                handleSystemPrefersContrastChanged() {
                    let e = "no-preference";
                    E.matches ? e = "more" : p.matches && (e = "less"), r.default.wait(() => {
                        o.systemPrefersContrastChanged(e)
                    })
                }
            }
        },
        320679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983"),
                l = n("884691"),
                r = n("118810"),
                s = n("446674"),
                i = n("77078"),
                u = n("599110"),
                o = n("791776"),
                d = n("206230"),
                c = n("862013"),
                f = n("49111");

            function E(e) {
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

            function p(e) {
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
                return l.useEffect(() => ((0, c.insertAccessibilityLabelElements)(), window.addEventListener("keydown", E), () => window.removeEventListener("keydown", E)), []), (0, a.jsx)(i.AccessibilityPreferencesContext.Provider, {
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
                r = n("452804"),
                s = n("135230"),
                i = n("168973"),
                u = n("782340");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
                    n = () => {
                        r.default.updatedUnsyncedSettings({
                            disableEmbeddedActivityPopOutAlert: !0
                        }), e()
                    },
                    o = !i.default.disableEmbeddedActivityPopOutAlert;
                o ? (0, l.openModal)(l => (0, a.jsx)(s.default, {
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
                    return p
                },
                startBroadcastForStream: function() {
                    return S
                },
                stopBroadcast: function() {
                    return g
                },
                fetchBroadcasterBuckets: function() {
                    return _
                },
                maybeFetchBroadcastChannels: function() {
                    return h
                }
            });
            var a = n("872717"),
                l = n("913144"),
                r = n("374014"),
                s = n("766274"),
                i = n("271938"),
                u = n("42203"),
                o = n("546463"),
                d = n("568307"),
                c = n("9759"),
                f = n("194051"),
                E = n("49111");

            function p(e) {
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
                let a = (0, r.decodeStreamKey)(e),
                    {
                        ownerId: s,
                        channelId: f
                    } = a;
                if (null == s || null == f) return;
                let E = i.default.getId();
                if (s !== E) return;
                let S = i.default.getSessionId();
                if (null == S) return;
                let g = u.default.getChannel(f),
                    m = null != g && g.isBroadcastChannel();
                if (null == g || s !== g.ownerId || !m) return;
                let _ = function(e) {
                    var t;
                    let n = d.default.getGameForPID(e),
                        a = p(n),
                        l = o.default.getGameByName(a);
                    return null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : "0"
                }(t);
                null != _ && ! function(e) {
                    let t = i.default.getId(),
                        n = i.default.getSessionId();
                    null != t && null != n && l.default.dispatch({
                        type: "BROADCAST_START",
                        broadcast: e
                    })
                }({
                    sessionId: S,
                    userId: E,
                    applicationId: _,
                    channelId: g.id,
                    streamKey: e
                })
            }

            function g() {
                l.default.dispatch({
                    type: "BROADCAST_STOP"
                })
            }

            function m(e) {
                let t = {};
                e.forEach(e => {
                    t[e] = -1
                }), l.default.dispatch({
                    type: "BROADCASTER_BUCKETS_RECEIVED",
                    data: t
                })
            }
            async function _() {
                let e = f.default.getUserIdsToValidate();
                try {
                    let t = await a.default.get({
                        url: E.Endpoints.USER_BROADCASTS,
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
                    } else m(e)
                } catch (t) {
                    m(e)
                }
            }
            async function h() {
                let e = f.default.getBroadcastsToValidateChannels(),
                    t = e.filter(e => null == e.viewers).map(e => e.channelId);
                if (0 !== t.length) try {
                    let e = await a.default.get({
                        url: E.Endpoints.BROADCAST_CHANNELS,
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
                    return C
                }
            });
            var a, l, r = n("917351"),
                s = n("446674"),
                i = n("407846"),
                u = n("913144"),
                o = n("766274"),
                d = n("271938"),
                c = n("9759"),
                f = n("837374");
            (a = l || (l = {}))[a.INVALID = 0] = "INVALID", a[a.VALID_USER_ONLY = 1] = "VALID_USER_ONLY", a[a.VALID = 2] = "VALID";
            let E = new Set,
                p = new Set,
                S = new Set,
                g = [],
                m = {
                    BROADCASTS_BY_USER_ID: e => "user:".concat(e),
                    BROADCASTS_BY_CHANNEL_ID: e => "channel:".concat(e),
                    BROADCASTS_BY_VALIDITY: e => "validity:".concat(e)
                },
                _ = new i.default(function(e) {
                    let t = E.has(e.userId) ? l.VALID_USER_ONLY : l.INVALID;
                    return null != e.viewers && (t = l.VALID), [m.BROADCASTS_BY_USER_ID(e.userId), m.BROADCASTS_BY_CHANNEL_ID(e.channelId), m.BROADCASTS_BY_VALIDITY(t)]
                }, e => e.channelId);

            function h(e, t, n) {
                if (d.default.getId() === e) return !1;
                if (null == t) {
                    let t = _.get(e);
                    return !!(null != t && (0, r.isEqual)(t.source, n)) && (_.delete(e), void 0)
                }!E.has(e) && !p.has(e) && (S.add(e), g = [...S]);
                let a = (0, f.broadcastFromServer)(t, e, n);
                _.set(e, a)
            }

            function A(e) {
                return null != e ? {
                    type: f.BroadcastSourceType.GUILD,
                    guildId: e
                } : {
                    type: f.BroadcastSourceType.GLOBAL
                }
            }
            class T extends s.default.Store {
                getBroadcasts() {
                    return _.values(m.BROADCASTS_BY_VALIDITY(l.VALID))
                }
                getBroadcastsToValidateChannels() {
                    return _.values(m.BROADCASTS_BY_VALIDITY(l.VALID_USER_ONLY))
                }
                getBroadcastByChannel(e) {
                    return _.values(m.BROADCASTS_BY_CHANNEL_ID(e))[0]
                }
                getBroadcastByUser(e) {
                    return _.get(e)
                }
                getUserIdsToValidate() {
                    return g
                }
            }
            T.displayName = "BroadcastingStore";
            var C = new T(u.default, {
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
                        h(t.id, n, A(a))
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
                        h(t.id, n, A(a))
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
                        h(t.id, n, A(a))
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
                            h(t.id, a, A(n))
                        })
                    })
                },
                BROADCASTER_BUCKETS_RECEIVED: function(e) {
                    let {
                        data: t
                    } = e;
                    Object.keys(t).forEach(e => {
                        c.CAN_VIEW_BROADCASTS_BUCKETS.includes(t[e]) ? E.add(e) : p.add(e), S.clear(), g = [...S];
                        let n = _.get(e);
                        null != n && (_.delete(e), _.set(e, n))
                    })
                },
                BROADCAST_VIEWERS_UPDATE: function(e) {
                    let {
                        viewers: t
                    } = e;
                    Object.entries(t).forEach(e => {
                        let [t, n] = e, a = _.get(t);
                        null != a && _.set(t, {
                            ...a,
                            viewers: n
                        })
                    })
                },
                CHANNEL_RECIPIENT_ADD: function(e) {
                    let {
                        channelId: t,
                        user: n
                    } = e, a = _.values(m.BROADCASTS_BY_CHANNEL_ID(t))[0];
                    if (null == a || null == a.viewers || a.viewers.some(e => e.id === n.id)) return !1;
                    _.set(a.userId, {
                        ...a,
                        viewers: [...a.viewers, new o.default(n)]
                    })
                },
                CHANNEL_RECIPIENT_REMOVE: function(e) {
                    let {
                        channelId: t,
                        user: n
                    } = e, a = _.values(m.BROADCASTS_BY_CHANNEL_ID(t))[0];
                    if (null == a || null == a.viewers) return !1;
                    _.set(a.userId, {
                        ...a,
                        viewers: a.viewers.filter(e => e.id !== n.id)
                    })
                },
                CHANNEL_CREATE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e, a = _.values(m.BROADCASTS_BY_CHANNEL_ID(n.id))[0];
                    if (null == a) return !1;
                    let l = null !== (t = n.rawRecipients) && void 0 !== t ? t : [];
                    _.set(a.userId, {
                        ...a,
                        viewers: l.filter(e => e.id !== a.userId).map(e => new o.default(e))
                    })
                },
                LOGOUT: function() {
                    E.clear(), p.clear(), S.clear(), g = [], _.clear()
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
                    return E
                }
            });
            var a = n("446674"),
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

            function E() {
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
                    return p
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                r = n("77078"),
                s = n("244201"),
                i = n("856343"),
                u = n("373469"),
                o = n("474571"),
                d = n("773336"),
                c = n("162236"),
                f = n("49111"),
                E = n("782340");

            function p(e) {
                let {
                    onClose: t
                } = e, n = (0, s.useAppContext)(), p = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUserActiveStream()), S = (0, i.default)(p, n);
                return (0, a.jsxs)(r.Menu, {
                    onSelect: f.NOOP_NULL,
                    navId: "manage-broadcast",
                    onClose: t,
                    "aria-label": E.default.Messages.SETTINGS,
                    children: [d.isPlatformEmbedded && null != p ? (0, a.jsx)(r.MenuItem, {
                        id: "stream-settings",
                        label: E.default.Messages.SCREENSHARE_STREAM_QUALITY,
                        children: S
                    }) : null, (0, a.jsx)(r.MenuItem, {
                        id: "broadcast-settings",
                        label: E.default.Messages.BROADCAST_SETTINGS,
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
            var a = n("37983");
            n("884691");
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
                l = n("353927");
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
        836087: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var a = n("37983"),
                l = n("884691"),
                r = n("414456"),
                s = n.n(r),
                i = n("917351"),
                u = n.n(i),
                o = n("446674"),
                d = n("862337"),
                c = n("77078"),
                f = n("272030"),
                E = n("901582"),
                p = n("373469"),
                S = n("697218"),
                g = n("427302"),
                m = n("462579"),
                _ = n("449008"),
                h = n("387111"),
                A = n("99795"),
                T = n("49111"),
                C = n("782340"),
                I = n("2081");

            function v(e, t) {
                switch (e) {
                    case A.ParticipantTypes.ACTIVITY:
                        return C.default.Messages.EMBEDDED_ACTIVITIES_NUM_PARTICIPANTS.format({
                            numUsers: t
                        });
                    case A.ParticipantTypes.STREAM:
                        return C.default.Messages.SPECTATORS.format({
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
                    participantType: r,
                    channelId: i,
                    handleUserContextMenu: u
                } = e, o = v(r, t.length);
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
                            children: t.map(e => (0, a.jsx)(g.default, {
                                guildId: null != l ? l : void 0,
                                className: s(I.memberListItem, {
                                    [I.popoutDisabled]: n
                                }),
                                textClassName: I.memberListItemText,
                                user: e,
                                disablePopout: n,
                                nick: h.default.getNickname(l, i, e),
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
                    maxVisibleUsers: r = 3,
                    className: i,
                    participantType: u
                } = e, o = v(u, t.length), d = t.length < r ? t.map(e => (0, a.jsx)("div", {
                    className: I.viewersTooltipItem,
                    children: h.default.getName(n, l, e)
                }, e.id)) : o;
                return (0, a.jsx)(c.TooltipContainer, {
                    text: d,
                    "aria-label": o,
                    children: (0, a.jsxs)("div", {
                        className: s(I.viewers, i),
                        children: [(0, a.jsx)(m.default, {
                            className: I.viewersIcon
                        }), (0, a.jsx)("span", {
                            "aria-hidden": "true",
                            children: t.length
                        })]
                    })
                })
            }
            let D = [];

            function O(e) {
                let {
                    channelId: t,
                    guildId: r,
                    participant: i,
                    className: g,
                    compact: m = !1,
                    disableInteraction: h = !1,
                    maxVisibleUsers: C = 3
                } = e, [v, O] = l.useState(!1), L = l.useRef(new d.DelayedCall(150, () => O(!1))), y = (0, o.useStateFromStoresArray)([p.default, S.default], () => {
                    if (i.type === A.ParticipantTypes.STREAM) {
                        let e = p.default.getViewerIds(i.id);
                        return e.length > 0 ? e.map(e => S.default.getUser(e)).filter(_.isNotNullish) : D
                    }
                    return i.type === A.ParticipantTypes.ACTIVITY ? i.participants.size > 0 ? Array.from(i.participants).map(e => S.default.getUser(e)).filter(_.isNotNullish) : D : D
                }, [i]), R = l.useCallback(() => {
                    L.current.cancel(), O(!0)
                }, []), b = l.useCallback(() => {
                    L.current.delay()
                }, []), P = l.useCallback((e, t) => {
                    R(), (0, f.openContextMenuLazy)(e, async () => {
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
                }, [b, R]);
                if (0 === y.length) return null;
                if (m) return (0, a.jsx)(M, {
                    maxVisibleUsers: C,
                    users: y,
                    guildId: r,
                    channelId: t,
                    className: g,
                    participantType: i.type
                });
                let U = u(y).take(C).map(e => (0, a.jsx)(c.Avatar, {
                    src: e.getAvatarURL(r, 24),
                    "aria-label": e.username,
                    size: c.AvatarSizes.SIZE_24,
                    className: I.viewer
                }, e.id)).value();
                return y.length > C && (U[U.length - 1] = (0, a.jsxs)("div", {
                    className: I.overflow,
                    children: ["+", y.length - C + 1]
                }, "overflow")), (0, a.jsx)(E.default, {
                    section: T.AnalyticsSections.STREAM_VIEWER_POPOUT,
                    children: (0, a.jsx)("div", {
                        onMouseEnter: R,
                        onMouseLeave: b,
                        children: (0, a.jsx)(c.Popout, {
                            renderPopout: () => (0, a.jsx)(N, {
                                participantType: i.type,
                                handleUserContextMenu: P,
                                guildId: r,
                                channelId: t,
                                users: y,
                                disableInteraction: h
                            }),
                            shouldShow: v,
                            position: "top",
                            children: () => (0, a.jsx)("div", {
                                className: s(I.viewers, g),
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
                r = n("77078"),
                s = n("374014"),
                i = n("582415"),
                u = n("271938"),
                o = n("824563"),
                d = n("205817"),
                c = n("782340");

            function f(e, t, f) {
                var E;
                let p = (0, l.useStateFromStores)([o.default], () => (0, i.getStreamerApplication)(e, o.default), [e]),
                    S = (0, l.useStateFromStores)([u.default], () => u.default.getId()),
                    g = null != e ? (0, s.encodeStreamKey)(e) : d.default.getActiveStreamKey(),
                    m = null !== (E = d.default.getVideoStats(g)) && void 0 !== E ? E : {},
                    _ = {
                        media_session_id: d.default.getMediaSessionId(g),
                        rtc_connection_id: d.default.getRtcConnectionId(g),
                        stream_region: d.default.getRegion(g),
                        max_viewers: d.default.getMaxViewers(g),
                        ...m
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
                                streamApplication: p,
                                isStreamer: S === (null == e ? void 0 : e.ownerId),
                                analyticsData: _,
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
                    return _
                }
            });
            var a = n("37983"),
                l = n("884691"),
                r = n("446674"),
                s = n("77078"),
                i = n("629109"),
                u = n("997289"),
                o = n("773356"),
                d = n("268491"),
                c = n("305961"),
                f = n("42887"),
                E = n("697218"),
                p = n("49111"),
                S = n("686298"),
                g = n("353927"),
                m = n("782340");

            function _(e, t) {
                let {
                    preset: _,
                    resolution: h,
                    fps: A
                } = (0, r.useStateFromStoresObject)([d.default], () => d.default.getState()), T = (0, r.useStateFromStores)([f.default], () => f.default.getGoLiveSource()), C = (0, r.useStateFromStores)([E.default], () => E.default.getCurrentUser()), I = (0, r.useStateFromStores)([c.default], () => {
                    var t;
                    return null === (t = c.default.getGuild(null == e ? void 0 : e.guildId)) || void 0 === t ? void 0 : t.premiumTier
                }), {
                    location: v
                } = (0, u.useAnalyticsContext)(), N = l.useCallback((e, l, r, u) => {
                    if (e) {
                        if (null != T) {
                            let e = {
                                qualityOptions: {
                                    preset: S.ApplicationStreamPresets.PRESET_CUSTOM,
                                    resolution: l,
                                    frameRate: r
                                },
                                context: g.MediaEngineContextTypes.STREAM
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
                            ...v,
                            object: p.AnalyticsObjects.RADIO_ITEM,
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
                            contextKey: o === p.AppContext.POPOUT ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT
                        })
                    }
                }, [t, v, T]);
                if (null == e) return null;
                let M = _ === S.ApplicationStreamPresets.PRESET_DOCUMENTS ? S.ApplicationStreamFPS.FPS_30 : A,
                    D = S.ApplicationStreamFPSButtonsWithSuffixLabel.map(e => {
                        let {
                            value: t,
                            label: n
                        } = e, l = (0, o.default)(S.ApplicationStreamPresets.PRESET_CUSTOM, h, t, C, I);
                        return (0, a.jsx)(s.MenuRadioItem, {
                            group: "stream-settings-fps",
                            id: "stream-settings-fps-".concat(t),
                            label: n,
                            checked: t === A,
                            action: () => N(l, h, t, p.AnalyticsObjectTypes.RESOLUTION)
                        }, "stream-settings-fps-".concat(t))
                    }),
                    O = S.ApplicationStreamResolutionButtonsWithSuffixLabel.map(e => {
                        let {
                            value: t,
                            label: n
                        } = e, l = (0, o.default)(S.ApplicationStreamPresets.PRESET_CUSTOM, t, M, C, I);
                        return (0, a.jsx)(s.MenuRadioItem, {
                            group: "stream-settings-resolution",
                            id: "stream-settings-resolution-".concat(t),
                            label: n,
                            checked: t === h,
                            action: () => N(l, t, M, p.AnalyticsObjectTypes.RESOLUTION)
                        }, "stream-settings-resolution-".concat(t))
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.MenuGroup, {
                        label: m.default.Messages.SCREENSHARE_FRAME_RATE,
                        children: D
                    }), (0, a.jsx)(s.MenuGroup, {
                        label: m.default.Messages.STREAM_RESOLUTION,
                        children: O
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
            var a = n("884691"),
                l = n("446674"),
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
        147746: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uploadDebugLogFiles: function() {
                    return S
                },
                getBlindIds: function() {
                    return m
                },
                uploadCallscopeLogs: function() {
                    return _
                },
                uploadCallscopeLogFiles: function() {
                    return h
                }
            });
            var a = n("872717"),
                l = n("869586"),
                r = n("49671"),
                s = n("890747"),
                i = n("254490"),
                u = n("821316"),
                o = n("605250"),
                d = n("836403"),
                c = n("825287"),
                f = n("929331"),
                E = n("49111");
            let p = new o.default("DebugUploadManager");
            async function S(e, t) {
                await A(e), await (0, s.uploadRtcLogFiles)(3670016, t)
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
                let a = new l.BlindID(n),
                    r = await a.blind(e),
                    s = await a.blind(t);
                return {
                    blindChannelId: r,
                    blindUserId: s
                }
            }
            async function _(e, t, n, a) {
                var l, s;
                if (!__OVERLAY__) {
                    if ((null === (s = r.default) || void 0 === s ? void 0 : null === (l = s.fileManager) || void 0 === l ? void 0 : l.getCallscopeLogFiles) == null) {
                        p.error("uploadCallscopeLogs: Upload RTC logs failed because native is out of date (getCallscopeLogFiles).");
                        return
                    }
                    if (!("crypto" in window)) {
                        p.error("uploadCallscopeLogs: Upload RTC logs failed because crypto is not supported.");
                        return
                    }
                    try {
                        let {
                            blindChannelId: l,
                            blindUserId: s
                        } = await m(e, t, n), i = "channel blind(".concat(e, "): ").concat(l, ", user blind(").concat(t, "): ").concat(s);
                        p.info("uploadCallscopeLogs: Uploading callscope logs for context: ".concat(a, ", ").concat(i));
                        let u = await r.default.fileManager.getCallscopeLogFiles(l);
                        await h(s, u)
                    } catch (e) {
                        p.error("uploadCallscopeLogs: Error uploading logs ".concat(null == e ? void 0 : e.text), e)
                    }
                }
            }
            async function h(e, t) {
                try {
                    if (0 === t.length) {
                        p.error("uploadCallscopeLogFiles: No files found.");
                        return
                    }
                    for (let n of t.map(e => i.transformNativeFile(e, "application/octet-stream"))) {
                        p.log("uploadCallscopeLogFiles: Uploading ".concat(n.name));
                        let t = g.getChannelId(n.name);
                        try {
                            let l = await a.default.post({
                                    url: E.Endpoints.CALLSCOPE_LOGS(t, e, g.getTrimmedFilename(n.name)),
                                    headers: {
                                        "Content-Type": "application/octet-stream"
                                    },
                                    body: n
                                }),
                                r = l.status >= 200 && l.status <= 299;
                            !r && p.error("uploadCallscopeLogFiles: Failed to upload ".concat(n.name, " with status ").concat(l.status, ", ").concat(l.text))
                        } catch (e) {
                            p.error("uploadCallscopeLogFiles: Error uploading file ".concat(n.name, " ").concat(null == e ? void 0 : e.text), e)
                        }
                    }
                } catch (e) {
                    p.error("uploadCallscopeLogFiles: Error uploading logs ".concat(null == e ? void 0 : e.text), e)
                }
            }
            async function A(e) {
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
                    let o = E.Endpoints.DEBUG_LOG(e, "discord_app_logs");
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
                    p.error("uploadAppLogFiles: upload app log files error ".concat(e.message))
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
            var a = n("95410"),
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
                    buildNumber: "242810",
                    versionHash: "d503e1c2dbde99d5aa19d2724e0b6eb86ff9a56a"
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
                r = n("102053"),
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
                    } = n, E = 0 === i ? null !== (r = null === (a = l.find(d, e => e.log.indexOf("Logger loaded") >= 0)) || void 0 === a ? void 0 : a.timestamp) && void 0 !== r ? r : e : o, p = function(e, t) {
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
                    }(d, c, t), E), S = "Trace #".concat(i + 1, " started ").concat((0, s.getTimestampString)(o), "\n").concat(p);
                    return null != f && (S += "\n Server trace for trace #".concat(i + 1).concat(f)), S
                }).join("\n\n")
            }

            function u(e) {
                let t = null == e.tag ? e.label : "".concat(e.label, " ").concat(e.tag);
                return t.includes("_START") && (t = "Start " + t.replace("_START", "")), t.includes("_END") && (t = "Finish " + t.replace("_END", "")), t
            }
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
            var a = n("245123"),
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
                    release: "discord_web-d503e1c2dbde99d5aa19d2724e0b6eb86ff9a56a",
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
                }), a.setTag("buildNumber", (e = "242810", "242810")), a.setTag("builtAt", String("1698880669313"));
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
            var a = n("446674"),
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
                r = n("488464"),
                s = n("998716");

            function i(e, t) {
                let [n] = (0, a.useStateFromStores)([r.default], () => [r.default.getMutableParticipants(e, t), r.default.getParticipantsVersion(e)], [e, t], l.isVersionEqual);
                return n
            }

            function u(e, t) {
                return (0, a.useStateFromStores)([r.default], () => r.default.getParticipantCount(e, t), [e, t])
            }

            function o(e) {
                let [t] = (0, a.useStateFromStores)([r.default], () => {
                    let t = r.default.getMutableRequestToSpeakParticipants(e);
                    return [t, r.default.getRequestToSpeakParticipantsVersion(e)]
                }, [e], l.isVersionEqual);
                return t
            }

            function d(e) {
                return (0, a.useStateFromStores)([r.default], () => {
                    let t = r.default.getMutableParticipants(e, s.StageChannelParticipantNamedIndex.SPEAKER),
                        n = t.filter(e => e.type === s.StageChannelParticipantTypes.VOICE);
                    return n.length
                }, [e])
            }
        },
        924872: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShowStageMusicMuteButton: function() {
                    return h
                },
                shouldShowStageMusicMuteButton: function() {
                    return A
                },
                default: function() {
                    return C
                }
            });
            var a = n("446674"),
                l = n("689988"),
                r = n("42203"),
                s = n("42887"),
                i = n("18494"),
                u = n("800762"),
                o = n("709681"),
                d = n("488464"),
                c = n("567469"),
                f = n("998716"),
                E = n("834052"),
                p = n("274438");
            let S = e => e / 400,
                g = !1,
                m = (0, o.createSound)("stage_waiting", "stage_waiting", S(s.default.getOutputVolume()));

            function _() {
                let e = i.default.getVoiceChannelId();
                if (null == e) {
                    m.stop(), g = !1;
                    return
                }
                let t = r.default.getChannel(e);
                if (!(null == t ? void 0 : t.isGuildStageVoice())) {
                    m.stop(), g = !1;
                    return
                }
                let n = s.default.isSelfDeaf();
                if (n) {
                    m.stop(), g = !1;
                    return
                }
                let a = p.default.shouldPlay();
                if (a) {
                    m.volume = S(s.default.getOutputVolume()), m.loop(), g = !0;
                    return
                }
                let l = E.default.isLive(e);
                if (l) {
                    m.stop(), g = !1;
                    return
                }
                let o = p.default.isMuted();
                if (o) {
                    m.pause(), g = !1;
                    return
                }
                let d = null != Object.values(u.default.getVoiceStatesForChannel(e)).find(e => !e.suppress && !e.isVoiceMuted());
                d || g ? d && (m.pause(), g = !1) : (m.volume = S(s.default.getOutputVolume()), m.loop(), g = !0)
            }

            function h(e) {
                let t = (0, a.useStateFromStores)([i.default], () => i.default.getVoiceChannelId() === e),
                    n = (0, c.useStageParticipants)(e, f.StageChannelParticipantNamedIndex.SPEAKER),
                    l = null != n.find(e => !e.voiceState.isVoiceMuted()),
                    r = (0, a.useStateFromStores)([E.default], () => E.default.getStageInstanceByChannel(e));
                return t && null == r && !l
            }

            function A(e) {
                let t = i.default.getVoiceChannelId() === e,
                    n = d.default.getMutableParticipants(e, f.StageChannelParticipantNamedIndex.SPEAKER),
                    a = null != n.find(e => !e.voiceState.isVoiceMuted()),
                    l = E.default.getStageInstanceByChannel(e);
                return t && null == l && !a
            }
            class T extends l.default {
                handleVoiceChannelSelect(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null != t) {
                        let e = r.default.getChannel(t);
                        (null == e ? void 0 : e.isGuildStageVoice()) ? _(): (m.stop(), g = !1)
                    } else m.stop(), g = !1
                }
                handleLogout() {
                    m.stop(), g = !1
                }
                handlePlay(e) {
                    let {
                        play: t
                    } = e;
                    t ? _() : (m.pause(), g = !1)
                }
                handleMute(e) {
                    let {
                        muted: t
                    } = e;
                    t ? (m.pause(), g = !1) : _()
                }
                handleVoiceStateUpdates() {
                    _()
                }
                handleSetOutputVolume(e) {
                    let {
                        volume: t
                    } = e;
                    m.volume = S(t)
                }
                handleToggleSelfDeaf() {
                    _()
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
            var C = new T
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
            let r = !1,
                s = !1;
            class i extends a.default.DeviceSettingsStore {
                initialize(e) {
                    null != e && (r = e)
                }
                isMuted() {
                    return r
                }
                shouldPlay() {
                    return s
                }
                getUserAgnosticState() {
                    return r
                }
            }
            i.displayName = "StageMusicStore", i.persistKey = "StageMusicStore";
            var u = new i(l.default, {
                STAGE_MUSIC_MUTE: function(e) {
                    let {
                        muted: t
                    } = e;
                    r = t, s = !1
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
        981184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("364082"),
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
            var a = n("37983");
            n("884691");
            var l = n("446674"),
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
            var a = n("446674"),
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
            var a = n("37983"),
                l = n("884691"),
                r = n("414456"),
                s = n.n(r),
                i = n("799869"),
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
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                s = n("77078"),
                i = n("796863");

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
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                s = n("77078"),
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
                    noArt: E = !1,
                    selected: p = !1
                } = e;
                return (0, a.jsxs)(i.default, {
                    className: c,
                    justify: i.default.Justify.CENTER,
                    align: i.default.Align.CENTER,
                    direction: i.default.Direction.VERTICAL,
                    style: {
                        padding: 4
                    },
                    children: [!E && null != f && (0, a.jsx)("div", {
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
                    }) : null, p || null == n ? null : (0, a.jsx)(s.Button, {
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
                    return C
                },
                default: function() {
                    return I
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                r = n("77078"),
                s = n("901582"),
                i = n("191145"),
                u = n("976074"),
                o = n("856343"),
                d = n("16916"),
                c = n("373469"),
                f = n("42887"),
                E = n("697218"),
                p = n("394832"),
                S = n("985622"),
                g = n("356553"),
                m = n("387111"),
                _ = n("773336"),
                h = n("49111"),
                A = n("353927"),
                T = n("782340");

            function C(e, t, n) {
                let a = (0, l.useStateFromStores)([i.default], () => i.default.getSelectedParticipantId(e.id)),
                    r = (0, l.useStateFromStores)([c.default], () => null != a ? c.default.getActiveStreamForStreamKey(a) : null, [a]),
                    s = (0, l.useStateFromStoresArray)([E.default], () => {
                        let a = n.filter(e => e.ownerId !== (null == t ? void 0 : t.id)).map(t => ({
                            stream: t,
                            username: m.default.getName(e.getGuildId(), e.id, E.default.getUser(t.ownerId))
                        }));
                        return 1 === a.length && a[0].stream.ownerId === (null == r ? void 0 : r.ownerId) ? [] : a
                    }, [e, r, n, t]);
                return s
            }

            function I(e) {
                var t;
                let {
                    channel: n,
                    currentUser: l,
                    activeStreams: i,
                    hideSelfOptions: c = !1,
                    showReportOption: E = !1,
                    handleGoLive: m,
                    onClose: I,
                    onSelect: v,
                    appContext: N = h.AppContext.APP
                } = e, M = f.default.supports(A.Features.DESKTOP_CAPTURE_APPLICATIONS), D = null !== (t = i.find(e => e.ownerId === (null == l ? void 0 : l.id))) && void 0 !== t ? t : null, O = C(n, l, i), L = (0, o.default)(D, N), y = (0, u.default)(D, N, h.NOOP_NULL), R = null == D ? (0, a.jsx)(r.MenuItem, {
                    id: "share-your-screen",
                    label: T.default.Messages.SHARE_YOUR_SCREEN,
                    icon: p.default,
                    action: m
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [_.isPlatformEmbedded ? (0, a.jsx)(r.MenuItem, {
                        id: "stream-settings",
                        label: T.default.Messages.SCREENSHARE_STREAM_QUALITY,
                        children: L
                    }) : null, E ? y : null, M ? (0, a.jsx)(r.MenuItem, {
                        id: "change-windows",
                        label: T.default.Messages.SCREENSHARE_CHANGE_WINDOWS,
                        icon: p.default,
                        action: m
                    }) : null, (0, a.jsx)(r.MenuItem, {
                        id: "stop-streaming",
                        label: T.default.Messages.STOP_STREAMING,
                        icon: S.default,
                        action: () => (0, d.default)(D)
                    })]
                });
                return (0, a.jsx)(s.default, {
                    section: h.AnalyticsSections.CONTEXT_MENU,
                    children: (0, a.jsxs)(r.Menu, {
                        onSelect: v,
                        navId: "manage-streams",
                        onClose: I,
                        "aria-label": null != D ? T.default.Messages.STOP_STREAMING : T.default.Messages.SHARE_YOUR_SCREEN,
                        children: [(0, a.jsx)(r.MenuGroup, {
                            children: O.map(e => {
                                let {
                                    stream: t,
                                    username: n
                                } = e;
                                return (0, a.jsx)(r.MenuItem, {
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
                l = n("884691"),
                r = n("446674"),
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
                    selected: E = !1
                } = e, p = (0, r.useStateFromStores)([u.default], () => u.default.getChannel(t.channelId));
                return l.useEffect(() => {
                    (null == p ? void 0 : p.isGuildStageVoice()) && (0, s.closeStream)((0, i.encodeStreamKey)(t), !1)
                }, []), (0, a.jsx)(o.default, {
                    artURL: c,
                    noArt: f,
                    selected: E,
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
            var a = n("37983");
            n("884691");
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
                    return m
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                s = n("446674"),
                i = n("77078"),
                u = n("990766"),
                o = n("373469"),
                d = n("271938"),
                c = n("30672"),
                f = n("100844"),
                E = n("607391"),
                p = n("782340"),
                S = n("996810");
            let g = n("588281");

            function m(e) {
                let {
                    participant: t,
                    width: n,
                    noArt: l = !1,
                    selected: m = !1
                } = e, _ = n < 195, h = (0, s.useStateFromStores)([o.default, d.default], () => o.default.getAllActiveStreams().some(e => {
                    let {
                        ownerId: t
                    } = e;
                    return t !== d.default.getId()
                }));
                return (0, a.jsx)("div", {
                    className: r(S.content, S.streamHidden, {
                        [S.small]: _
                    }),
                    children: (0, a.jsx)(E.default, {
                        className: S.streamHiddenEmptyState,
                        artURL: g,
                        noArt: l,
                        selected: m,
                        size: (0, E.getSizeForWidth)(n),
                        header: _ ? null : p.default.Messages.STREAM_HIDDEN,
                        description: m ? null : (0, a.jsxs)("div", {
                            className: r(S.streamHiddenCTA, {
                                [S.largePaddingTop]: !_
                            }),
                            children: [(0, a.jsx)(f.CallTileCTA, {
                                isSmall: _,
                                children: (0, a.jsx)(i.Text, {
                                    variant: _ ? "text-sm/semibold" : "text-md/semibold",
                                    color: "none",
                                    children: n < 175 ? p.default.Messages.WATCH : p.default.Messages.WATCH_STREAM
                                })
                            }), h ? (0, a.jsx)(f.CallTileCTA, {
                                className: S.addCTA,
                                tooltip: p.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
                                onClick: e => {
                                    e.stopPropagation(), (0, u.watchStream)(t.stream, {
                                        forceMultiple: !0
                                    })
                                },
                                isSmall: _,
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
                r = n("42887"),
                s = n("353927"),
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
            var a = n("37983");
            n("884691");
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
                    return S
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                r = n("990766"),
                s = n("773356"),
                i = n("349171"),
                u = n("292687"),
                o = n("305961"),
                d = n("42887"),
                c = n("697218"),
                f = n("773336"),
                E = n("49111"),
                p = n("686298");

            function S(e, t, S) {
                let g = u.default.getWindowOpen(E.PopoutWindowKeys.CHANNEL_CALL_POPOUT) ? E.PopoutWindowKeys.CHANNEL_CALL_POPOUT : null;
                if ((0, i.default)(g), f.isPlatformEmbedded)(0, l.openModalLazy)(async () => {
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
                    var m;
                    let n = (0, s.default)(p.ApplicationStreamPresets.PRESET_CUSTOM, p.ApplicationStreamResolutions.RESOLUTION_1080, p.ApplicationStreamFPS.FPS_30, c.default.getCurrentUser(), null === (m = o.default.getGuild(e)) || void 0 === m ? void 0 : m.premiumTier) ? {
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
            var a = n("37983");
            n("884691");
            var l = n("607391"),
                r = n("145131"),
                s = n("191933");

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
            var a = n("37983");
            n("884691");
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
            var a = n("37983");
            n("884691");
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
                } = e, f = t ? u.CenterControlButton : u.default, E = n.isBroadcastChannel(), p = (0, s.useIsBroadcastingInChannel)(n.id);
                return (0, a.jsx)(f, {
                    ...c,
                    onClick: () => {
                        p && (0, r.stopBroadcast)(), l.default.disconnect(), null == d || d()
                    },
                    iconComponent: i.default,
                    label: p ? o.default.Messages.STOP_BROADCASTING : E ? o.default.Messages.LEAVE_BROADCAST : o.default.Messages.DISCONNECT_SELF
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
                r = n.n(l),
                s = n("758710"),
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
            var a = n("37983");
            n("884691");
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
        109489: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("37983"),
                l = n("884691"),
                r = n("414456"),
                s = n.n(r),
                i = n("255397"),
                u = n("256170"),
                o = n("155207"),
                d = n("981913"),
                c = n("782340"),
                f = n("789749");

            function E(e) {
                let {
                    className: t,
                    isVertical: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: f.iconContainer,
                    children: [(0, a.jsx)(u.default, {
                        className: s(n ? f.upCaret : f.leftCaret, t)
                    }), (0, a.jsx)(o.default, {
                        className: s(f.members, t)
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
                        className: s(n ? f.downCaret : f.rightCaret, t)
                    }), n && (0, a.jsx)(o.default, {
                        className: s(f.members, t)
                    })]
                })
            }

            function S(e) {
                let {
                    channelId: t,
                    className: n,
                    isParticipantsOpen: r,
                    isVertical: u = !1,
                    hideTooltip: o = !1
                } = e, S = l.useCallback(e => {
                    let {
                        className: t
                    } = e;
                    return r ? (0, a.jsx)(p, {
                        className: t,
                        isVertical: u
                    }) : (0, a.jsx)(E, {
                        className: t,
                        isVertical: u
                    })
                }, [r, u]);
                return (0, a.jsx)(d.default, {
                    label: r ? c.default.Messages.VIDEO_CALL_HIDE_MEMBERS : c.default.Messages.VIDEO_CALL_SHOW_MEMBERS,
                    className: s(f.participantsButton, n),
                    onClick: function() {
                        i.default.toggleParticipants(t, !r)
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
                r = n.n(l),
                s = n("244201"),
                i = n("289656"),
                u = n("437825"),
                o = n("981913"),
                d = n("911360");

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
                    E = (0, s.useAppContext)(),
                    p = l ? () => o() : () => r(!e.enabled, E);
                return (0, a.jsx)(a.Fragment, {
                    children: c({
                        onClick: p,
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
                    className: E,
                    channelLimitReached: p,
                    channelLimit: S,
                    centerButton: g = !1,
                    onPopoutClick: m,
                    ..._
                } = e, h = g ? o.CenterControlButton : o.default;
                return (0, a.jsx)(c, {
                    enabled: t,
                    join: n,
                    channel: l,
                    onChange: s,
                    onCameraUnavailable: i,
                    cameraUnavailable: u,
                    hasPermission: f,
                    channelLimitReached: p,
                    channelLimit: S,
                    children: e => {
                        let {
                            unavailable: n,
                            ...l
                        } = e;
                        return (0, a.jsx)(h, {
                            ...l,
                            ..._,
                            isActive: t,
                            className: r(E, {
                                [d.fauxDisabled]: n
                            }),
                            onPopoutClick: m
                        })
                    }
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
//# sourceMappingURL=6e3d4f29efc091de1a43.js.map