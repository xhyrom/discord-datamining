(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["95719"], {
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
        258664: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("312916"),
                a = {
                    setSection(e) {
                        r.default.dispatch({
                            type: "FRIENDS_SET_SECTION",
                            section: e
                        })
                    },
                    setInitialSection(e) {
                        r.default.dispatch({
                            type: "FRIENDS_SET_INITIAL_SECTION",
                            section: e
                        })
                    }
                }
        },
        840763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("21189"),
                a = n("227094"),
                i = n("312916"),
                o = {
                    setDesktopType(e) {
                        i.default.dispatch({
                            type: "NOTIFICATIONS_SET_DESKTOP_TYPE",
                            desktopType: e
                        })
                    },
                    setTTSType(e) {
                        i.default.dispatch({
                            type: "NOTIFICATIONS_SET_TTS_TYPE",
                            ttsType: e
                        })
                    },
                    setDisabledSounds(e) {
                        i.default.dispatch({
                            type: "NOTIFICATIONS_SET_DISABLED_SOUNDS",
                            sounds: e
                        })
                    },
                    toggleDisableAllSounds() {
                        i.default.dispatch({
                            type: "NOTIFICATIONS_TOGGLE_ALL_DISABLED"
                        })
                    },
                    setDisableUnreadBadge(e) {
                        i.default.dispatch({
                            type: "NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE",
                            disableUnreadBadge: e
                        })
                    },
                    setTaskbarFlash(e) {
                        i.default.dispatch({
                            type: "NOTIFICATIONS_SET_TASKBAR_FLASH",
                            taskbarFlash: e
                        })
                    },
                    setNotifyMessagesInSelectedChannel(e) {
                        i.default.dispatch({
                            type: "NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL",
                            notify: e
                        })
                    },
                    setPermissionsState(e, t) {
                        i.default.dispatch({
                            type: "NOTIFICATIONS_SET_PERMISSION_STATE",
                            enabled: e,
                            source: t
                        })
                    },
                    showNotification(e, t, n, o) {
                        var u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                        i.default.dispatch({
                            type: "NOTIFICATION_CREATE",
                            icon: e,
                            title: t,
                            body: n,
                            trackingProps: o,
                            options: (0, a._)((0, r._)({}, u), {
                                onClick() {
                                    var e;
                                    null === (e = u.onClick) || void 0 === e || e.call(u), i.default.dispatch({
                                        type: "NOTIFICATION_CLICK"
                                    })
                                }
                            })
                        })
                    },
                    clickedNotification() {
                        i.default.dispatch({
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
                    return o
                },
                moveTo: function() {
                    return s
                },
                open: function() {
                    return a
                },
                show: function() {
                    return u
                },
                switchPIPFocus: function() {
                    return d
                },
                updateRect: function() {
                    return l
                }
            });
            var r = n("312916");

            function a(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                r.default.dispatch({
                    type: "PICTURE_IN_PICTURE_OPEN",
                    id: e,
                    component: t,
                    props: n
                })
            }

            function i(e) {
                r.default.dispatch({
                    type: "PICTURE_IN_PICTURE_CLOSE",
                    id: e
                })
            }

            function o(e) {
                r.default.dispatch({
                    type: "PICTURE_IN_PICTURE_HIDE",
                    id: e
                })
            }

            function u(e) {
                r.default.dispatch({
                    type: "PICTURE_IN_PICTURE_SHOW",
                    id: e
                })
            }

            function s(e, t) {
                r.default.dispatch({
                    type: "PICTURE_IN_PICTURE_MOVE",
                    id: e,
                    position: t
                })
            }

            function l(e, t) {
                r.default.dispatch({
                    type: "PICTURE_IN_PICTURE_UPDATE_RECT",
                    id: e,
                    rect: t
                })
            }

            function d(e) {
                r.default.dispatch({
                    type: "PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW",
                    id: e
                })
            }
        },
        567035: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var r = n("87627"),
                a = n("29713"),
                i = n("21189"),
                o = n("227094"),
                u = n("778455"),
                s = n("735250"),
                l = n("470079"),
                d = n("699581"),
                c = n("682797"),
                f = n("661223"),
                p = n("974328"),
                h = n("256805"),
                v = n("777084"),
                g = n("615355"),
                _ = n("293377"),
                m = n("836744"),
                E = n("990119"),
                C = n("845649"),
                S = n("746608"),
                T = n("467006"),
                I = function(e) {
                    var t = e.children,
                        n = e.close,
                        r = e.onUnmount,
                        a = e.rect,
                        i = e.position,
                        o = e.align,
                        u = e.impressionName,
                        f = e.impressionProperties,
                        h = l.useRef(null);
                    l.useEffect(function() {
                        var e, t, r = (0, d.findDOMNode)(h.current);
                        if (null != r) {
                            var a = function(e) {
                                var t = e.target,
                                    r = (0, d.findDOMNode)(h.current);
                                !(null != r && (0, p.referencePortalAwareContains)(r, t)) && (window.getSelection().removeAllRanges(), n())
                            };
                            return null === (e = r.ownerDocument) || void 0 === e || e.addEventListener("click", a, !0), null === (t = r.ownerDocument) || void 0 === t || t.addEventListener("contextmenu", a, !0),
                                function() {
                                    var e, t;
                                    null === (e = r.ownerDocument) || void 0 === e || e.removeEventListener("click", a, !0), null === (t = r.ownerDocument) || void 0 === t || t.removeEventListener("contextmenu", a, !0)
                                }
                        }
                    }, [n]);
                    var _ = l.useRef(r);
                    l.useEffect(function() {
                        _.current = r
                    }), l.useEffect(function() {
                        return function() {
                            var e;
                            return null === (e = _.current) || void 0 === e ? void 0 : e.call(_)
                        }
                    }, []), l.useLayoutEffect(function() {
                        var e;
                        null === (e = h.current) || void 0 === e || e.updatePosition()
                    }), (0, g.default)({
                        type: c.ImpressionTypes.MENU,
                        name: u,
                        properties: f
                    });
                    var m = (0, v.useWindowDispatch)(),
                        C = l.useCallback(function() {
                            m.dispatch(T.ComponentActions.POPOUT_SHOW)
                        }, [m]),
                        S = l.useCallback(function() {
                            m.dispatch(T.ComponentActions.POPOUT_HIDE)
                        }, [m]);
                    return (0, s.jsx)(E.AppReferencePositionLayer, {
                        onMount: C,
                        onUnmount: S,
                        reference: function() {
                            return a
                        },
                        position: null != i ? i : "right",
                        align: null != o ? o : "top",
                        autoInvert: !0,
                        ref: h,
                        nudgeAlignIntoViewport: !0,
                        children: t
                    })
                },
                A = function(e) {
                    (0, a._)(n, e);
                    var t = (0, u._)(n);

                    function n() {
                        var e;
                        return (0, r._)(this, n), e = t.apply(this, arguments), e.state = {
                            render: void 0
                        }, e.closeResize = function(t) {
                            var n = e.props.renderWindow;
                            t.target === n && e.close()
                        }, e.close = function() {
                            var t = e.props,
                                n = t.isOpen,
                                r = t.closeContextMenu;
                            n && r()
                        }, e
                    }
                    var i = n.prototype;
                    return i.componentDidMount = function() {
                        var e = this,
                            t = this.props,
                            n = t.renderLazy;
                        if (t.renderWindow.addEventListener("resize", this.closeResize, !0), C.ComponentDispatch.subscribe(T.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != n) {
                            var r = setTimeout(function() {
                                e.setState({
                                    render: function() {
                                        return (0, s.jsx)(p.MenuSpinner, {})
                                    }
                                })
                            }, 300);
                            n().then(function(t) {
                                e.setState({
                                    render: t
                                }), clearTimeout(r)
                            })
                        }
                    }, i.componentDidUpdate = function(e) {
                        var t, n;
                        !this.props.isOpen && e.isOpen && (null === (n = e.config) || void 0 === n || null === (t = n.onClose) || void 0 === t || t.call(n))
                    }, i.componentWillUnmount = function() {
                        this.props.renderWindow.removeEventListener("resize", this.closeResize, !0), C.ComponentDispatch.unsubscribe(T.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu)
                    }, i.render = function() {
                        var e, t = this.props,
                            n = t.appContext,
                            r = t.target,
                            a = t.isOpen,
                            i = t.theme,
                            o = t.config,
                            u = t.rect,
                            l = null !== (e = this.state.render) && void 0 !== e ? e : this.props.render;
                        return a && null != u && null != o && null != r && null != l && o.context === n ? (0, s.jsx)(I, {
                            rect: u,
                            close: this.close,
                            onUnmount: o.onClose,
                            align: o.align,
                            position: o.position,
                            impressionName: o.impressionName,
                            impressionProperties: o.impressionProperties,
                            children: function(e, t) {
                                var a = e.position;
                                return l({
                                    className: S.ContextMenuClassName,
                                    position: a,
                                    theme: i,
                                    onHeightUpdate: t,
                                    config: o,
                                    target: r,
                                    context: n
                                })
                            }
                        }) : null
                    }, n
                }(l.PureComponent);

            function y() {
                var e = (0, f.useStateFromStoresObject)([m.default], function() {
                        return {
                            contextMenu: m.default.getContextMenu(),
                            version: m.default.version,
                            isOpen: m.default.isOpen()
                        }
                    }),
                    t = e.contextMenu,
                    n = e.version,
                    r = e.isOpen,
                    a = (0, f.useStateFromStores)([_.default], function() {
                        return _.default.theme
                    }),
                    u = l.useContext(v.default),
                    d = u.appContext,
                    c = u.renderWindow;
                return (0, s.jsx)(A, (0, o._)((0, i._)({
                    appContext: d,
                    renderWindow: c
                }, t), {
                    isOpen: r,
                    theme: a,
                    closeContextMenu: h.closeContextMenu
                }), n)
            }
        },
        644959: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PhoneHangUpIcon: function() {
                    return l
                }
            });
            var r = n("21189"),
                a = n("227094"),
                i = n("261047"),
                o = n("735250");
            n("470079");
            var u = n("600186"),
                s = n("262113"),
                l = function(e) {
                    var t = e.width,
                        n = e.height,
                        l = e.color,
                        d = void 0 === l ? u.default.colors.INTERACTIVE_NORMAL : l,
                        c = e.colorClass,
                        f = (0, i._)(e, ["width", "height", "color", "colorClass"]);
                    return (0, o.jsx)("svg", (0, a._)((0, r._)({}, (0, s.default)(f)), {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: void 0 === t ? 24 : t,
                        height: void 0 === n ? 24 : n,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: (0, o.jsx)("path", {
                            fill: "string" == typeof d ? d : d.css,
                            d: "m21.5 16.6-.13.14a.88.88 0 0 1-.97.2l-4.09-1.7a.99.99 0 0 1-.57-1.18l.73-2.7c-2.24-3-6.7-3-8.94 0l.7 2.1a.99.99 0 0 1-.48 1.19l-4.13 2.2a.87.87 0 0 1-1.03-.15l-.1-.1a5.18 5.18 0 0 1-.32-6.92 12.67 12.67 0 0 1 19.66 0 5.18 5.18 0 0 1-.32 6.92Z",
                            className: void 0 === c ? "" : c
                        })
                    }))
                }
        },
        758831: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenXIcon: function() {
                    return l
                }
            });
            var r = n("21189"),
                a = n("227094"),
                i = n("261047"),
                o = n("735250");
            n("470079");
            var u = n("600186"),
                s = n("262113"),
                l = function(e) {
                    var t = e.width,
                        n = e.height,
                        l = e.color,
                        d = void 0 === l ? u.default.colors.INTERACTIVE_NORMAL : l,
                        c = e.colorClass,
                        f = void 0 === c ? "" : c,
                        p = (0, i._)(e, ["width", "height", "color", "colorClass"]);
                    return (0, o.jsxs)("svg", (0, a._)((0, r._)({}, (0, s.default)(p)), {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: void 0 === t ? 24 : t,
                        height: void 0 === n ? 24 : n,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [(0, o.jsx)("path", {
                            fill: "string" == typeof d ? d : d.css,
                            fillRule: "evenodd",
                            d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm6.3.3a1 1 0 0 1 1.4 0L12 7.58l2.3-2.3a1 1 0 1 1 1.4 1.42L13.42 9l2.3 2.3a1 1 0 0 1-1.42 1.4L12 10.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L10.58 9l-2.3-2.3a1 1 0 0 1 0-1.4Z",
                            clipRule: "evenodd",
                            className: f
                        }), (0, o.jsx)("path", {
                            fill: "string" == typeof d ? d : d.css,
                            d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                            className: f
                        })]
                    }))
                }
        },
        378467: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VideoSlashIcon: function() {
                    return l
                }
            });
            var r = n("21189"),
                a = n("227094"),
                i = n("261047"),
                o = n("735250");
            n("470079");
            var u = n("600186"),
                s = n("262113"),
                l = function(e) {
                    var t = e.width,
                        n = e.height,
                        l = e.color,
                        d = void 0 === l ? u.default.colors.INTERACTIVE_NORMAL : l,
                        c = e.colorClass,
                        f = (0, i._)(e, ["width", "height", "color", "colorClass"]);
                    return (0, o.jsx)("svg", (0, a._)((0, r._)({}, (0, s.default)(f)), {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: void 0 === t ? 24 : t,
                        height: void 0 === n ? 24 : n,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: (0, o.jsx)("path", {
                            fill: "string" == typeof d ? d : d.css,
                            d: "M22.7 2.7a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4l20-20ZM9.2 20a.5.5 0 0 1-.35-.85l12.1-12.1a.5.5 0 0 1 .12-.09l.48-.24a1 1 0 0 1 1.45.9v8.76a1 1 0 0 1-1.45.9l-3-1.5a1 1 0 0 1-.55-.9V17a3 3 0 0 1-3 3H9.2ZM15.28 4.72c.27-.27.15-.71-.23-.72H4a3 3 0 0 0-3 3v10a3 3 0 0 0 .17.99c.1.3.49.35.72.12l13.4-13.4Z",
                            className: void 0 === c ? "" : c
                        })
                    }))
                }
        },
        985246: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("661223"),
                a = n("974328"),
                i = n("706608"),
                o = n("893687"),
                u = n("359916"),
                s = n("240335"),
                l = n("313572"),
                d = function() {
                    var e = (0, r.useStateFromStores)([s.default], function() {
                            return s.default.hasLayers()
                        }),
                        t = (0, l.useFullScreenLayerStore)(function(e) {
                            return e.fullScreenLayers.length > 0
                        }),
                        n = (0, o.useIsModalOpen)(),
                        d = (0, a.useModalsStore)(a.hasAnyModalOpen),
                        c = (0, r.useStateFromStores)([i.default], function() {
                            return i.default.isConnected()
                        }),
                        f = (0, r.useStateFromStores)([u.default], function() {
                            return u.default.isOpen()
                        });
                    return e || t || d || n || !c || f
                }
        },
        695682: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BlindID: function() {
                    return l
                }
            });
            var r = n("356056"),
                a = n("87627"),
                i = n("324415");
            n("357629"), n("293114"), n("518263"), n("970173"), n("380476"), n("633958"), n("520712"), n("257068"), n("881884"), n("982849"), n("268111"), n("941497"), n("571977"), n("827762"), n("673841"), n("177841"), n("640740"), n("438471"), n("84643"), n("249288"), n("538235"), n("473220"), n("32026"), n("223828"), n("896409"), n("480839"), n("186066"), n("744285"), n("492257"), n("190629"), n("873817"), n("996173"), n("126298"), n("814951");
            var o = n("841869"),
                u = n("413135").Buffer,
                s = new o.default("BlindID"),
                l = function() {
                    function e(t) {
                        (0, a._)(this, e);
                        var n = u.from(t, "hex");
                        this.key = crypto.subtle.importKey("raw", n, {
                            name: "HMAC",
                            hash: "SHA-512"
                        }, !1, ["sign"])
                    }
                    return e.prototype.blind = function(t) {
                        var n = this;
                        return (0, r._)(function() {
                            var r, a, o;
                            return (0, i._)(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, n.key];
                                    case 1:
                                        return r = i.sent(), a = new BigUint64Array([BigInt(t)]), [4, crypto.subtle.sign("HMAC", r, a.buffer)];
                                    case 2:
                                        return o = i.sent(), [2, e.truncate(o).toString()]
                                }
                            })
                        })()
                    }, e.truncate = function(e) {
                        var t = new Uint8Array(e);
                        return t.length < 8 ? (s.error("Unexpected byte length ".concat(t.length)), BigInt(0)) : BigInt(t[0]) | BigInt(t[1]) << BigInt(8) | BigInt(t[2]) << BigInt(16) | BigInt(t[3]) << BigInt(24) | BigInt(t[4]) << BigInt(32) | BigInt(t[5]) << BigInt(40) | BigInt(t[6]) << BigInt(48) | BigInt(t[7]) << BigInt(56)
                    }, e
                }()
        },
        258943: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uploadRtcLogFiles: function() {
                    return h
                }
            });
            var r = n("356056"),
                a = n("761020"),
                i = n("324415");
            n("653041"), n("363505"), n("814951"), n("26686");
            var o = n("388684"),
                u = n("454836"),
                s = n("253842"),
                l = n("386130"),
                d = n("10357"),
                c = n("99588"),
                f = n("467006"),
                p = new o.default("uploadRtcLogFiles");

            function h(e, t) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = (0, r._)(function(e, t) {
                    var n, r, o, h, v, g;
                    return (0, i._)(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (null == c.default.fileManager.readLogFiles) throw new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.GENERAL);
                                n = [], i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, c.default.fileManager.readLogFiles(e)];
                            case 2:
                                return n = (n = i.sent()).map(function(e) {
                                    return (0, d.transformNativeFile)(e, "application/octet-stream")
                                }), [3, 4];
                            case 3:
                                throw r = i.sent(), p.error("uploadDebugFiles: read error '".concat(r, "'")), new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.READ);
                            case 4:
                                if (0 === n.length) throw new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.NO_FILE);
                                i.label = 5;
                            case 5:
                                return i.trys.push([5, 7, , 8]), h = {
                                    extraInfo: t,
                                    mediaEngineState: l.default.getState()
                                }, [4, u.default.post({
                                    url: f.Endpoints.DEBUG_LOGS(f.DebugLogCategory.RTC),
                                    attachments: (0, a._)(n.map(function(e) {
                                        return {
                                            name: e.name,
                                            file: e,
                                            filename: e.name
                                        }
                                    })).concat([{
                                        name: "media_engine_state.json",
                                        filename: "media_engine_state.json",
                                        file: new Blob([JSON.stringify(h, void 0, 2)])
                                    }])
                                })];
                            case 6:
                                return o = i.sent(), [3, 8];
                            case 7:
                                if (429 === (v = i.sent()).status) throw new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.PROGRESS);
                                throw p.error("Debug log upload error: status: ".concat(v.status, ", message: ").concat(v.message)), new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.UPLOAD);
                            case 8:
                                if (g = n.length + 1, "success_count" in o.body && o.body.success_count !== g) throw p.error("Debug log upload: stored files ".concat(o.body.success_count, " !== ").concat(g)), new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.GENERAL);
                                if ("store_success" in o.body && !o.body.store_success || "id_match" in o.body && !o.body.id_match || "all_success" in o.body && !o.body.all_success) throw p.error("Debug log upload: store_success: ".concat(o.body.store_success, " / ") + "id_match: ".concat(o.body.id_match, " / ") + "all_success: ".concat(o.body.all_success)), new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.GENERAL);
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }
        },
        10508: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canEnableForcedColors: function() {
                    return T
                },
                default: function() {
                    return I
                }
            });
            var r = n("356056"),
                a = n("21189"),
                i = n("324415");
            n("191489"), n("357629");
            var o = n("735250");
            n("470079");
            var u = n("974328"),
                s = n("312916"),
                l = n("871831"),
                d = n("328470"),
                c = n("501769"),
                f = n("59952"),
                p = n("329420"),
                h = n("467006"),
                v = window.matchMedia("(prefers-reduced-motion: reduce)"),
                g = window.matchMedia("(prefers-contrast: more)"),
                _ = window.matchMedia("(prefers-contrast: less)"),
                m = window.matchMedia("(prefers-color-scheme: dark)"),
                E = window.matchMedia("(prefers-color-scheme: light)"),
                C = window.matchMedia("(forced-colors: active)"),
                S = 5;

            function T() {
                return "windows" === (0, c.getOS)()
            }
            var I = {
                initBasic() {
                    v.addListener(this.handleSystemPrefersReducedMotionChanged), this.handleSystemPrefersReducedMotionChanged(v), m.addListener(this.handleSystemColorPreferencesChanged), E.addListener(this.handleSystemColorPreferencesChanged), C.addListener(this.handleSystemColorPreferencesChanged), this.handleSystemColorPreferencesChanged(), g.addListener(this.handleSystemPrefersContrastChanged), _.addListener(this.handleSystemPrefersContrastChanged), this.handleSystemPrefersContrastChanged()
                },
                init() {
                    this.initBasic(), s.default.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", function() {
                        d.default.track(h.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
                            colorblind_enabled: p.default.colorblindMode
                        })
                    }), s.default.subscribe("ACCESSIBILITY_SET_SATURATION", function(e) {
                        d.default.track(h.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
                            saturation_level: e.saturation
                        })
                    })
                },
                maybeShowKeyboardNavigationExplainerModal() {
                    var e;
                    if (S = Math.max(S - 1, 0), !(null == (e = l.default.getCurrentUser()) || Date.now() - +e.createdAt < 864e5) && !p.default.keyboardNavigationExplainerModalSeen && 0 === S)(0, u.openModalLazy)((0, r._)(function() {
                        var e;
                        return (0, i._)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, n.el("10508@4652:4698").then(n.bind(n, "679763"))];
                                case 1:
                                    return e = t.sent().default, [2, function(t) {
                                        return (0, o.jsx)(e, (0, a._)({}, t))
                                    }]
                            }
                        })
                    }))
                },
                handleSystemPrefersReducedMotionChanged(e) {
                    s.default.wait(function() {
                        f.systemPrefersReducedMotionChanged(e.matches ? "reduce" : "no-preference")
                    })
                },
                handleSystemColorPreferencesChanged() {
                    m.matches ? e = h.ThemeTypes.DARK : E.matches && (e = h.ThemeTypes.LIGHT);
                    var e, t = (!c.isPlatformEmbedded || T()) && C.matches ? "active" : "none";
                    s.default.wait(function() {
                        f.systemColorPreferencesChanged(e, t)
                    })
                },
                handleSystemPrefersContrastChanged() {
                    var e = "no-preference";
                    g.matches ? e = "more" : _.matches && (e = "less"), s.default.wait(function() {
                        f.systemPrefersContrastChanged(e)
                    })
                }
            }
        },
        521716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var r = n("735250"),
                a = n("470079"),
                i = n("93610"),
                o = n("661223"),
                u = n("974328"),
                s = n("328470"),
                l = n("196284"),
                d = n("329420"),
                c = n("455784"),
                f = n("467006");

            function p(e) {
                var t;
                if (!(e.ctrlKey || e.altKey || e.metaKey) && e.keyCode === f.KeyboardKeys.TAB && null != e.target) {
                    var n = e.target,
                        r = null === (t = (0, l.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
                    (0, i.isElement)(n) && s.default.track(f.AnalyticEvents.KEYBOARD_SHORTCUT_USED, {
                        shortcut_name: "tab_navigation",
                        source_class_list: null != r ? Array.from(r.classList) : [],
                        location_object: n.tagName
                    })
                }
            }

            function h(e) {
                var t = e.children,
                    n = (0, o.useStateFromStoresObject)([d.default], function() {
                        return {
                            enabled: d.default.useReducedMotion,
                            rawValue: d.default.rawPrefersReducedMotion
                        }
                    }),
                    i = (0, o.useStateFromStoresObject)([d.default], function() {
                        return {
                            enabled: d.default.useForcedColors,
                            rawValue: d.default.systemForcedColors
                        }
                    }),
                    s = (0, o.useStateFromStores)([d.default], function() {
                        return d.default.alwaysShowLinkDecorations
                    }),
                    l = a.useMemo(function() {
                        return {
                            reducedMotion: n,
                            prefersCrossfades: !1,
                            forcedColors: i,
                            alwaysShowLinkDecorations: s
                        }
                    }, [n, i, s]);
                return a.useEffect(function() {
                    return (0, c.insertAccessibilityLabelElements)(), window.addEventListener("keydown", p),
                        function() {
                            return window.removeEventListener("keydown", p)
                        }
                }, []), (0, r.jsx)(u.AccessibilityPreferencesContext.Provider, {
                    value: l,
                    children: t
                })
            }
        },
        250969: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("21189"),
                a = n("735250");
            n("470079");
            var i = n("974328"),
                o = n("410291"),
                u = n("781735"),
                s = n("535309"),
                l = n("30175");

            function d(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                    n = function() {
                        o.default.updatedUnsyncedSettings({
                            disableEmbeddedActivityPopOutAlert: !0
                        }), e()
                    };
                s.default.disableEmbeddedActivityPopOutAlert ? e() : (0, i.openModal)(function(i) {
                    return (0, a.jsx)(u.default, (0, r._)({
                        confirmText: l.default.Messages.EMBEDDED_ACTIVITIES_YEP,
                        secondaryConfirmText: l.default.Messages.DONT_ASK_AGAIN,
                        title: l.default.Messages.EMBEDDED_ACTIVITIES_CAREFUL,
                        cancelText: l.default.Messages.EMBEDDED_ACTIVITIES_NVM,
                        onConfirm: e,
                        onConfirmSecondary: n,
                        onCancel: t,
                        body: l.default.Messages.EMBEDDED_ACTIVITIES_POP_OUT_WARNING
                    }, i))
                })
            }
        },
        702012: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchBroadcasterBuckets: function() {
                    return C
                },
                getGameName: function() {
                    return g
                },
                maybeFetchBroadcastChannels: function() {
                    return T
                },
                startBroadcastForStream: function() {
                    return _
                },
                stopBroadcast: function() {
                    return m
                }
            });
            var r = n("356056"),
                a = n("324415");
            n("566702"), n("357629"), n("653041"), n("462848"), n("363505");
            var i = n("454836"),
                o = n("312916"),
                u = n("188304"),
                s = n("535291"),
                l = n("262047"),
                d = n("731865"),
                c = n("919866"),
                f = n("480802"),
                p = n("887101"),
                h = n("870742"),
                v = n("467006");

            function g(e) {
                var t, n = null !== (t = null == e ? void 0 : e.gameName) && void 0 !== t ? t : null == e ? void 0 : e.name;
                return null != n ? n.trim() : null
            }

            function _(e, t) {
                if (null == t || !p.default.getCurrentConfig({
                        location: "start_broadcast_for_stream"
                    }, {
                        autoTrackExposure: !1
                    }).canBroadcast) return;
                var n, r, a, i, s, h, v, _ = (0, u.decodeStreamKey)(e),
                    m = _.ownerId,
                    E = _.channelId;
                if (null == m || null == E) return;
                var C = l.default.getId();
                if (m !== C) return;
                var S = l.default.getSessionId();
                if (null == S) return;
                var T = d.default.getChannel(E),
                    I = null != T && T.isBroadcastChannel();
                if (null != T && m === T.ownerId && !!I) {
                    var A = (n = t, a = g(f.default.getGameForPID(n)), null !== (r = null == (i = c.default.getGameByName(a)) ? void 0 : i.id) && void 0 !== r ? r : "0");
                    if (null != A) {
                        ;
                        s = {
                            sessionId: S,
                            userId: C,
                            applicationId: A,
                            channelId: T.id,
                            streamKey: e
                        }, h = l.default.getId(), v = l.default.getSessionId(), null != h && null != v && o.default.dispatch({
                            type: "BROADCAST_START",
                            broadcast: s
                        })
                    }
                }
            }

            function m() {
                o.default.dispatch({
                    type: "BROADCAST_STOP"
                })
            }

            function E(e) {
                var t = {};
                e.forEach(function(e) {
                    t[e] = -1
                }), o.default.dispatch({
                    type: "BROADCASTER_BUCKETS_RECEIVED",
                    data: t
                })
            }

            function C() {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = (0, r._)(function() {
                    var e, t, n, r;
                    return (0, a._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                e = h.default.getUserIdsToValidate(), r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, i.default.get({
                                    url: v.Endpoints.USER_BROADCASTS,
                                    query: {
                                        user_ids: e
                                    }
                                })];
                            case 2:
                                return (t = r.sent()).ok && null != t.body ? (n = {}, e.forEach(function(e) {
                                    var r;
                                    n[e] = null !== (r = t.body[e]) && void 0 !== r ? r : -1
                                }), o.default.dispatch({
                                    type: "BROADCASTER_BUCKETS_RECEIVED",
                                    data: n
                                })) : E(e), [3, 4];
                            case 3:
                                return r.sent(), E(e), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function T() {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = (0, r._)(function() {
                    var e, t, n, r, u;
                    return (0, a._)(this, function(a) {
                        switch (a.label) {
                            case 0:
                                if (0 === (e = h.default.getBroadcastsToValidateChannels().filter(function(e) {
                                        return null == e.viewers
                                    }).map(function(e) {
                                        return e.channelId
                                    })).length) return [2];
                                a.label = 1;
                            case 1:
                                return a.trys.push([1, 3, , 4]), [4, i.default.get({
                                    url: v.Endpoints.BROADCAST_CHANNELS,
                                    query: {
                                        channel_ids: e
                                    }
                                })];
                            case 2:
                                return (t = a.sent()).ok && null != t.body && (n = t.body, r = {}, n.forEach(function(e) {
                                    var t, n = h.default.getBroadcastByChannel(e.id).userId,
                                        a = null !== (t = e.recipients) && void 0 !== t ? t : [];
                                    r[n] = a.map(function(e) {
                                        return new s.default(e)
                                    }).filter(function(e) {
                                        return e.id !== n
                                    })
                                }), o.default.dispatch({
                                    type: "BROADCAST_VIEWERS_UPDATE",
                                    viewers: r
                                })), [3, 4];
                            case 3:
                                return a.sent(), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }
        },
        870742: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var r, a, i = n("87627"),
                o = n("29713"),
                u = n("21189"),
                s = n("227094"),
                l = n("154005"),
                d = n("761020"),
                c = n("778455");
            n("330740"), n("996173"), n("47120"), n("357629"), n("814951"), n("568603"), n("128242"), n("151809"), n("462848"), n("363505");
            var f = n("392711"),
                p = n("661223"),
                h = n("386695"),
                v = n("312916"),
                g = n("535291"),
                _ = n("262047"),
                m = n("887101"),
                E = n("199643");
            (r = a || (a = {}))[r.INVALID = 0] = "INVALID", r[r.VALID_USER_ONLY = 1] = "VALID_USER_ONLY", r[r.VALID = 2] = "VALID";
            var C = new Set,
                S = new Set,
                T = new Set,
                I = [],
                A = {
                    BROADCASTS_BY_USER_ID: function(e) {
                        return "user:".concat(e)
                    },
                    BROADCASTS_BY_CHANNEL_ID: function(e) {
                        return "channel:".concat(e)
                    },
                    BROADCASTS_BY_VALIDITY: function(e) {
                        return "validity:".concat(e)
                    }
                },
                y = new h.default(function(e) {
                    var t = C.has(e.userId) ? 1 : 0;
                    return null != e.viewers && (t = 2), [A.BROADCASTS_BY_USER_ID(e.userId), A.BROADCASTS_BY_CHANNEL_ID(e.channelId), A.BROADCASTS_BY_VALIDITY(t)]
                }, function(e) {
                    return e.channelId
                });

            function b(e, t, n) {
                if (_.default.getId() === e) return !1;
                if (null == t) {
                    var r = y.get(e);
                    return !!(null != r && (0, f.isEqual)(r.source, n)) && (y.delete(e), void 0)
                }!C.has(e) && !S.has(e) && (T.add(e), I = (0, d._)(T));
                var a = (0, E.broadcastFromServer)(t, e, n);
                y.set(e, a)
            }

            function N(e) {
                return null != e ? {
                    type: E.BroadcastSourceType.GUILD,
                    guildId: e
                } : {
                    type: E.BroadcastSourceType.GLOBAL
                }
            }
            var L = function(e) {
                (0, o._)(n, e);
                var t = (0, c._)(n);

                function n() {
                    return (0, i._)(this, n), t.apply(this, arguments)
                }
                var r = n.prototype;
                return r.getBroadcasts = function() {
                    return y.values(A.BROADCASTS_BY_VALIDITY(2))
                }, r.getBroadcastsToValidateChannels = function() {
                    return y.values(A.BROADCASTS_BY_VALIDITY(1))
                }, r.getBroadcastByChannel = function(e) {
                    return y.values(A.BROADCASTS_BY_CHANNEL_ID(e))[0]
                }, r.getBroadcastByUser = function(e) {
                    return y.get(e)
                }, r.getUserIdsToValidate = function() {
                    return I
                }, n
            }(p.default.Store);
            L.displayName = "BroadcastingStore";
            var M = new L(v.default, {
                PRESENCE_UPDATES: function(e) {
                    return e.updates.forEach(function(e) {
                        var t = e.user,
                            n = e.broadcast,
                            r = e.guildId;
                        b(t.id, n, N(r))
                    })
                },
                PRESENCES_REPLACE: function(e) {
                    return e.presences.forEach(function(e) {
                        var t = e.user,
                            n = e.broadcast,
                            r = e.guildId;
                        b(t.id, n, N(r))
                    })
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    var t = e.presences,
                        n = e.guilds;
                    t.forEach(function(e) {
                        var t = e.user,
                            n = e.broadcast,
                            r = e.guildId;
                        b(t.id, n, N(r))
                    }), n.forEach(function(e) {
                        var t = e.presences,
                            n = e.id;
                        t.forEach(function(e) {
                            var t = e.user,
                                r = e.broadcast;
                            b(t.id, r, N(n))
                        })
                    })
                },
                BROADCASTER_BUCKETS_RECEIVED: function(e) {
                    var t = e.data;
                    Object.keys(t).forEach(function(e) {
                        m.CAN_VIEW_BROADCASTS_BUCKETS.includes(t[e]) ? C.add(e) : S.add(e), T.clear(), I = (0, d._)(T);
                        var n = y.get(e);
                        null != n && (y.delete(e), y.set(e, n))
                    })
                },
                BROADCAST_VIEWERS_UPDATE: function(e) {
                    Object.entries(e.viewers).forEach(function(e) {
                        var t = (0, l._)(e, 2),
                            n = t[0],
                            r = t[1],
                            a = y.get(n);
                        null != a && y.set(n, (0, s._)((0, u._)({}, a), {
                            viewers: r
                        }))
                    })
                },
                CHANNEL_RECIPIENT_ADD: function(e) {
                    var t = e.channelId,
                        n = e.user,
                        r = y.values(A.BROADCASTS_BY_CHANNEL_ID(t))[0];
                    if (null == r || null == r.viewers || r.viewers.some(function(e) {
                            return e.id === n.id
                        })) return !1;
                    y.set(r.userId, (0, s._)((0, u._)({}, r), {
                        viewers: (0, d._)(r.viewers).concat([new g.default(n)])
                    }))
                },
                CHANNEL_RECIPIENT_REMOVE: function(e) {
                    var t = e.channelId,
                        n = e.user,
                        r = y.values(A.BROADCASTS_BY_CHANNEL_ID(t))[0];
                    if (null == r || null == r.viewers) return !1;
                    y.set(r.userId, (0, s._)((0, u._)({}, r), {
                        viewers: r.viewers.filter(function(e) {
                            return e.id !== n.id
                        })
                    }))
                },
                CHANNEL_CREATE: function(e) {
                    var t, n = e.channel,
                        r = y.values(A.BROADCASTS_BY_CHANNEL_ID(n.id))[0];
                    if (null == r) return !1;
                    var a = null !== (t = n.rawRecipients) && void 0 !== t ? t : [];
                    y.set(r.userId, (0, s._)((0, u._)({}, r), {
                        viewers: a.filter(function(e) {
                            return e.id !== r.userId
                        }).map(function(e) {
                            return new g.default(e)
                        })
                    }))
                },
                LOGOUT: function() {
                    C.clear(), S.clear(), T.clear(), I = [], y.clear()
                }
            })
        },
        307468: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                },
                getCanStartBroadcast: function() {
                    return l
                }
            });
            var r = n("661223"),
                a = n("262047"),
                i = n("731865"),
                o = n("232733"),
                u = n("145080");

            function s() {
                var e = (0, r.useStateFromStores)([a.default], function() {
                        return a.default.getId()
                    }),
                    t = (0, r.useStateFromStores)([o.default], function() {
                        return o.default.getVoiceChannelId()
                    }),
                    n = (0, r.useStateFromStores)([i.default], function() {
                        return i.default.getChannel(t)
                    }, [t]),
                    s = (0, r.useStateFromStores)([u.default], function() {
                        return null != u.default.getBroadcast()
                    }),
                    l = (null == n ? void 0 : n.isOwner(e)) && (null == n ? void 0 : n.isBroadcastChannel()) || null == t;
                return !s && l
            }

            function l() {
                if (null != u.default.getBroadcast()) return !1;
                var e = o.default.getVoiceChannelId();
                if (null == e) return !0;
                var t = a.default.getId(),
                    n = i.default.getChannel(e);
                return (null == n ? void 0 : n.isOwner(t)) && (null == n ? void 0 : n.isBroadcastChannel())
            }
        },
        910769: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                },
                getIsBroadcastingToAnyone: function() {
                    return p
                },
                isBroadcastingInChannel: function() {
                    return f
                },
                useIsBroadcastingInChannel: function() {
                    return c
                },
                useSelfBroadcast: function() {
                    return l
                }
            }), n("568603"), n("128242");
            var r = n("661223"),
                a = n("362939");
            n("311545");
            var i = n("262047"),
                o = n("731865");
            n("232733");
            var u = n("145080"),
                s = n("887101");

            function l() {
                var e = (0, r.useStateFromStores)([i.default], function() {
                        return i.default.getId()
                    }),
                    t = s.default.useExperiment({
                        location: "use_self_broadcast"
                    }, {
                        autoTrackExposure: !1
                    }).canBroadcast,
                    n = (0, r.useStateFromStores)([u.default], function() {
                        return u.default.getBroadcast()
                    });
                return t && (null == n ? void 0 : n.userId) === e ? n : null
            }

            function d() {
                return null != l()
            }

            function c(e) {
                var t = l(),
                    n = (0, r.useStateFromStores)([o.default], function() {
                        return o.default.getChannel(e)
                    });
                return null != t && null != n && n.ownerId === t.userId && n.isBroadcastChannel()
            }

            function f(e) {
                var t = i.default.getId(),
                    n = s.default.getCurrentConfig({
                        location: "is_broadcasting_in_channel"
                    }, {
                        autoTrackExposure: !1
                    }).canBroadcast,
                    r = u.default.getBroadcast();
                if (!n || null == r || r.userId !== t) return !1;
                var a = o.default.getChannel(e);
                return null != a && a.ownerId === r.userId && a.isBroadcastChannel()
            }

            function p() {
                var e = a.BroadcastAllowedGuildIds.getSetting(),
                    t = a.BroadcastAllowedUserIds.getSetting();
                return a.BroadcastAllowFriends.getSetting() || e.length > 0 || t.length > 0
            }
            n("870742")
        },
        94701: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var r = n("735250");
            n("470079");
            var a = n("661223"),
                i = n("974328"),
                o = n("777084"),
                u = n("991095"),
                s = n("311545"),
                l = n("857363"),
                d = n("501769"),
                c = n("243590"),
                f = n("467006"),
                p = n("30175");

            function h(e) {
                var t = e.onClose,
                    n = (0, o.useAppContext)(),
                    h = (0, a.useStateFromStores)([s.default], function() {
                        return s.default.getCurrentUserActiveStream()
                    }),
                    v = (0, u.default)(h, n);
                return (0, r.jsxs)(i.Menu, {
                    onSelect: f.NOOP_NULL,
                    navId: "manage-broadcast",
                    onClose: t,
                    "aria-label": p.default.Messages.SETTINGS,
                    children: [d.isPlatformEmbedded && null != h ? (0, r.jsx)(i.MenuItem, {
                        id: "stream-settings",
                        label: p.default.Messages.SCREENSHARE_STREAM_QUALITY,
                        children: v
                    }) : null, (0, r.jsx)(i.MenuItem, {
                        id: "broadcast-settings",
                        label: p.default.Messages.BROADCAST_SETTINGS,
                        icon: l.default,
                        action: function() {
                            return (0, c.openBroadcastingPrivacySettingsModal)()
                        }
                    })]
                })
            }
        },
        781362: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openStartBroadcastConfirmModal: function() {
                    return d
                },
                openStopBroadcastConfirmModal: function() {
                    return l
                }
            });
            var r = n("21189"),
                a = n("227094"),
                i = n("735250");
            n("470079");
            var o = n("974328"),
                u = n("702012"),
                s = n("30175");

            function l(e) {
                (0, o.openModal)(function(t) {
                    return (0, i.jsx)(o.ConfirmModal, (0, a._)((0, r._)({
                        header: s.default.Messages.STOP_STREAMING,
                        confirmText: s.default.Messages.STOP_STREAMING,
                        cancelText: s.default.Messages.CANCEL,
                        onConfirm: function() {
                            (0, u.stopBroadcast)(), e()
                        }
                    }, t), {
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: s.default.Messages.BROADCASTING_STOP_STREAM_CONFIRM_BODY
                        })
                    }))
                })
            }

            function d(e) {
                (0, o.openModal)(function(t) {
                    return (0, i.jsx)(o.ConfirmModal, (0, a._)((0, r._)({
                        header: s.default.Messages.START_STREAMING,
                        confirmText: s.default.Messages.START_STREAMING,
                        cancelText: s.default.Messages.CANCEL,
                        onConfirm: e,
                        confirmButtonColor: o.Button.Colors.BRAND
                    }, t), {
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: s.default.Messages.BROADCASTING_START_STREAM_CONFIRM_BODY
                        })
                    }))
                })
            }
        },
        243590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openBroadcastingPrivacySettingsModal: function() {
                    return s
                }
            });
            var r = n("356056"),
                a = n("21189"),
                i = n("324415");
            n("191489"), n("357629");
            var o = n("735250");
            n("470079");
            var u = n("974328");

            function s(e, t, s) {
                (0, u.openModalLazy)((0, r._)(function() {
                    var r;
                    return (0, i._)(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, n.el("243590@815:870").then(n.bind(n, "985696"))];
                            case 1:
                                return r = i.sent().default, [2, function(n) {
                                    return (0, o.jsx)(r, (0, a._)({
                                        headerText: e,
                                        buttonCTA: t,
                                        onSave: s
                                    }, n))
                                }]
                        }
                    })
                }))
            }
        },
        512261: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCallBannerBackgroundExperiment: function() {
                    return a
                }
            });
            var r = (0, n("516086").createExperiment)({
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

            function a(e, t) {
                return r.useExperiment({
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
                    return o
                }
            });
            var r = n("632865"),
                a = n("389570"),
                i = Object.freeze({
                    [r.ParticipantTypes.STREAM]: a.MediaEngineContextTypes.STREAM,
                    [r.ParticipantTypes.HIDDEN_STREAM]: a.MediaEngineContextTypes.STREAM,
                    [r.ParticipantTypes.USER]: a.MediaEngineContextTypes.DEFAULT,
                    [r.ParticipantTypes.ACTIVITY]: a.MediaEngineContextTypes.DEFAULT
                });

            function o(e) {
                return i[e]
            }
        },
        450603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var r = n("356056"),
                a = n("21189"),
                i = n("227094"),
                o = n("154005"),
                u = n("324415");
            n("411104"), n("363505"), n("462848"), n("357629"), n("191489");
            var s = n("735250"),
                l = n("470079"),
                d = n("803997"),
                c = n.n(d),
                f = n("392711"),
                p = n.n(f),
                h = n("661223"),
                v = n("767191"),
                g = n("974328"),
                _ = n("256805"),
                m = n("933439"),
                E = n("311545"),
                C = n("871831"),
                S = n("888075"),
                T = n("137334"),
                I = n("370275"),
                A = n("107888"),
                y = n("632865"),
                b = n("467006"),
                N = n("30175"),
                L = n("518118");

            function M(e, t) {
                switch (e) {
                    case y.ParticipantTypes.ACTIVITY:
                        return N.default.Messages.EMBEDDED_ACTIVITIES_NUM_PARTICIPANTS.format({
                            numUsers: t
                        });
                    case y.ParticipantTypes.STREAM:
                        return N.default.Messages.SPECTATORS.format({
                            numViewers: t
                        });
                    default:
                        throw Error("Unknown participant type.")
                }
            }

            function D(e) {
                var t = e.users,
                    n = e.disableInteraction,
                    r = e.guildId,
                    a = e.participantType,
                    i = e.channelId,
                    o = e.handleUserContextMenu,
                    u = M(a, t.length);
                return (0, s.jsx)(g.Dialog, {
                    "aria-label": u,
                    className: L.popoutWrapper,
                    children: (0, s.jsxs)(g.Scroller, {
                        className: L.scroller,
                        children: [(0, s.jsx)(g.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: L.memberListHeader,
                            children: u
                        }), (0, s.jsx)("div", {
                            children: t.map(function(e) {
                                return (0, s.jsx)(S.default, {
                                    guildId: null != r ? r : void 0,
                                    className: c()(L.memberListItem, {
                                        [L.popoutDisabled]: n
                                    }),
                                    textClassName: L.memberListItemText,
                                    user: e,
                                    disablePopout: n,
                                    nick: A.default.getNickname(r, i, e),
                                    onContextMenu: function(t) {
                                        return n ? null : o(t, e)
                                    }
                                }, e.id)
                            })
                        })]
                    })
                })
            }

            function O(e) {
                var t = e.users,
                    n = e.guildId,
                    r = e.channelId,
                    a = e.maxVisibleUsers,
                    i = e.className,
                    o = M(e.participantType, t.length),
                    u = t.length < (void 0 === a ? 3 : a) ? t.map(function(e) {
                        return (0, s.jsx)("div", {
                            className: L.viewersTooltipItem,
                            children: A.default.getName(n, r, e)
                        }, e.id)
                    }) : o;
                return (0, s.jsx)(g.TooltipContainer, {
                    text: u,
                    "aria-label": o,
                    children: (0, s.jsxs)("div", {
                        className: c()(L.viewers, i),
                        children: [(0, s.jsx)(T.default, {
                            className: L.viewersIcon
                        }), (0, s.jsx)("span", {
                            "aria-hidden": "true",
                            children: t.length
                        })]
                    })
                })
            }
            var R = [];

            function w(e) {
                var t = e.channelId,
                    d = e.guildId,
                    f = e.participant,
                    S = e.className,
                    T = e.compact,
                    A = e.disableInteraction,
                    N = void 0 !== A && A,
                    M = e.maxVisibleUsers,
                    w = void 0 === M ? 3 : M,
                    x = (0, o._)(l.useState(!1), 2),
                    P = x[0],
                    U = x[1],
                    B = l.useRef(new v.DelayedCall(150, function() {
                        return U(!1)
                    })),
                    V = (0, h.useStateFromStoresArray)([E.default, C.default], function() {
                        if (f.type === y.ParticipantTypes.STREAM) {
                            var e = E.default.getViewerIds(f.id);
                            return e.length > 0 ? e.map(function(e) {
                                return C.default.getUser(e)
                            }).filter(I.isNotNullish) : R
                        }
                        return f.type === y.ParticipantTypes.ACTIVITY ? f.participants.size > 0 ? Array.from(f.participants).map(function(e) {
                            return C.default.getUser(e)
                        }).filter(I.isNotNullish) : R : R
                    }, [f]),
                    j = l.useCallback(function() {
                        B.current.cancel(), U(!0)
                    }, []),
                    k = l.useCallback(function() {
                        B.current.delay()
                    }, []),
                    F = l.useCallback(function(e, t) {
                        j(), (0, _.openContextMenuLazy)(e, (0, r._)(function() {
                            var e;
                            return (0, u._)(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, n.el("450603@7412:7479").then(n.bind(n, "84406"))];
                                    case 1:
                                        return e = r.sent().default, [2, function(n) {
                                            return (0, s.jsx)(e, (0, i._)((0, a._)({}, n), {
                                                user: t
                                            }))
                                        }]
                                }
                            })
                        }), {
                            onClose: k
                        })
                    }, [k, j]);
                if (0 === V.length) return null;
                if (void 0 !== T && T) return (0, s.jsx)(O, {
                    maxVisibleUsers: w,
                    users: V,
                    guildId: d,
                    channelId: t,
                    className: S,
                    participantType: f.type
                });
                var G = p()(V).take(w).map(function(e) {
                    return (0, s.jsx)(g.Avatar, {
                        src: e.getAvatarURL(d, 24),
                        "aria-label": e.username,
                        size: g.AvatarSizes.SIZE_24,
                        className: L.viewer
                    }, e.id)
                }).value();
                return V.length > w && (G[G.length - 1] = (0, s.jsxs)("div", {
                    className: L.overflow,
                    children: ["+", V.length - w + 1]
                }, "overflow")), (0, s.jsx)(m.default, {
                    section: b.AnalyticsSections.STREAM_VIEWER_POPOUT,
                    children: (0, s.jsx)("div", {
                        onMouseEnter: j,
                        onMouseLeave: k,
                        children: (0, s.jsx)(g.Popout, {
                            renderPopout: function() {
                                return (0, s.jsx)(D, {
                                    participantType: f.type,
                                    handleUserContextMenu: F,
                                    guildId: d,
                                    channelId: t,
                                    users: V,
                                    disableInteraction: N
                                })
                            },
                            shouldShow: P,
                            position: "top",
                            children: function() {
                                return (0, s.jsx)("div", {
                                    className: c()(L.viewers, S),
                                    children: G
                                })
                            }
                        })
                    })
                })
            }
        },
        84625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var r = n("356056"),
                a = n("21189"),
                i = n("324415");
            n("191489"), n("357629");
            var o = n("735250");
            n("470079");
            var u = n("661223"),
                s = n("974328"),
                l = n("188304"),
                d = n("354831"),
                c = n("262047"),
                f = n("565639"),
                p = n("69046"),
                h = n("30175");

            function v(e, t, v) {
                var g, _ = (0, u.useStateFromStores)([f.default], function() {
                        return (0, d.getStreamerApplication)(e, f.default)
                    }, [e]),
                    m = (0, u.useStateFromStores)([c.default], function() {
                        return c.default.getId()
                    }),
                    E = null != e ? (0, l.encodeStreamKey)(e) : p.default.getActiveStreamKey(),
                    C = null !== (g = p.default.getVideoStats(E)) && void 0 !== g ? g : {},
                    S = (0, a._)({
                        media_session_id: p.default.getMediaSessionId(E),
                        rtc_connection_id: p.default.getRtcConnectionId(E),
                        stream_region: p.default.getRegion(E),
                        max_viewers: p.default.getMaxViewers(E)
                    }, C);
                return null == e ? null : (0, o.jsx)(s.MenuItem, {
                    id: "report-stream-problem",
                    label: h.default.Messages.STREAM_REPORT_PROBLEM_MENU_ITEM,
                    action: function() {
                        null == v || v(), null != e && (0, s.openModalLazy)((0, r._)(function() {
                            var t;
                            return (0, i._)(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, n.el("84625@2509:2566").then(n.bind(n, "64172"))];
                                    case 1:
                                        return t = r.sent().default, [2, function(n) {
                                            return (0, o.jsx)(t, (0, a._)({
                                                stream: e,
                                                streamApplication: _,
                                                isStreamer: m === (null == e ? void 0 : e.ownerId),
                                                analyticsData: S
                                            }, n))
                                        }]
                                }
                            })
                        }))
                    }
                })
            }
        },
        991095: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var r = n("356056"),
                a = n("21189"),
                i = n("227094"),
                o = n("324415");
            n("191489"), n("357629"), n("363505"), n("814951");
            var u = n("735250"),
                s = n("470079"),
                l = n("661223"),
                d = n("974328"),
                c = n("221083"),
                f = n("986416"),
                p = n("883319"),
                h = n("595407"),
                v = n("327271"),
                g = n("386130"),
                _ = n("871831"),
                m = n("467006"),
                E = n("315308"),
                C = n("389570"),
                S = n("30175");

            function T(e, t) {
                var T = (0, l.useStateFromStoresObject)([h.default], function() {
                        return h.default.getState()
                    }),
                    I = T.preset,
                    A = T.resolution,
                    y = T.fps,
                    b = (0, l.useStateFromStores)([g.default], function() {
                        return g.default.getGoLiveSource()
                    }),
                    N = (0, l.useStateFromStores)([_.default], function() {
                        return _.default.getCurrentUser()
                    }),
                    L = (0, l.useStateFromStores)([v.default], function() {
                        var t;
                        return null === (t = v.default.getGuild(null == e ? void 0 : e.guildId)) || void 0 === t ? void 0 : t.premiumTier
                    }),
                    M = (0, f.useAnalyticsContext)().location,
                    D = s.useCallback(function(e, s, l, f) {
                        if (e) {
                            if (null != b) {
                                var p, h, v = {
                                    qualityOptions: {
                                        preset: E.ApplicationStreamPresets.PRESET_CUSTOM,
                                        resolution: s,
                                        frameRate: l
                                    },
                                    context: C.MediaEngineContextTypes.STREAM
                                };
                                null != b.desktopSource ? v.desktopSettings = {
                                    sourceId: b.desktopSource.id,
                                    sound: !0
                                } : null != b.cameraSource && (v.cameraSettings = {
                                    videoDeviceGuid: b.cameraSource.videoDeviceGuid,
                                    audioDeviceGuid: b.cameraSource.audioDeviceGuid
                                }), c.default.setGoLiveSource(v)
                            }
                        } else {
                            ;
                            p = t, h = (0, i._)((0, a._)({}, M), {
                                object: m.AnalyticsObjects.RADIO_ITEM,
                                objectType: f
                            }), (0, d.openModalLazy)((0, r._)(function() {
                                var e;
                                return (0, o._)(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, n.el("991095@1991:2021").then(n.bind(n, "222047"))];
                                        case 1:
                                            return e = t.sent().default, [2, function(t) {
                                                return (0, u.jsx)(e, (0, i._)((0, a._)({}, t), {
                                                    analyticsSource: h
                                                }))
                                            }]
                                    }
                                })
                            }), {
                                contextKey: p === m.AppContext.POPOUT ? d.POPOUT_MODAL_CONTEXT : d.DEFAULT_MODAL_CONTEXT
                            })
                        }
                    }, [t, M, b]);
                if (null == e) return null;
                var O = I === E.ApplicationStreamPresets.PRESET_DOCUMENTS ? E.ApplicationStreamFPS.FPS_30 : y,
                    R = E.ApplicationStreamFPSButtonsWithSuffixLabel.map(function(e) {
                        var t = e.value,
                            n = e.label,
                            r = (0, p.default)(E.ApplicationStreamPresets.PRESET_CUSTOM, A, t, N, L);
                        return (0, u.jsx)(d.MenuRadioItem, {
                            group: "stream-settings-fps",
                            id: "stream-settings-fps-".concat(t),
                            label: n,
                            checked: t === y,
                            action: function() {
                                return D(r, A, t, m.AnalyticsObjectTypes.RESOLUTION)
                            }
                        }, "stream-settings-fps-".concat(t))
                    }),
                    w = E.ApplicationStreamResolutionButtonsWithSuffixLabel.map(function(e) {
                        var t = e.value,
                            n = e.label,
                            r = (0, p.default)(E.ApplicationStreamPresets.PRESET_CUSTOM, t, O, N, L);
                        return (0, u.jsx)(d.MenuRadioItem, {
                            group: "stream-settings-resolution",
                            id: "stream-settings-resolution-".concat(t),
                            label: n,
                            checked: t === A,
                            action: function() {
                                return D(r, t, O, m.AnalyticsObjectTypes.RESOLUTION)
                            }
                        }, "stream-settings-resolution-".concat(t))
                    });
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(d.MenuGroup, {
                        label: S.default.Messages.SCREENSHARE_FRAME_RATE,
                        children: R
                    }), (0, u.jsx)(d.MenuGroup, {
                        label: S.default.Messages.STREAM_RESOLUTION,
                        children: w
                    })]
                })
            }
        },
        81943: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                forcePrompt: function() {
                    return v
                },
                initiateChannelPrompts: function() {
                    return h
                },
                sendGamingStatsMessage: function() {
                    return g
                },
                updateGamingStats: function() {
                    return m
                }
            });
            var r = n("356056"),
                a = n("324415"),
                i = n("454836"),
                o = n("330853"),
                u = n("389920"),
                s = n("288146"),
                l = n("731865"),
                d = n("911388"),
                c = n("162256"),
                f = n("845649"),
                p = n("467006");

            function h(e) {
                i.default.post({
                    url: p.Endpoints.INITIATE_CHANNEL_PROMPTS,
                    body: {
                        guild_ids: e
                    }
                })
            }

            function v(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT;
                i.default.post({
                    url: p.Endpoints.FORCE_SEND_PROMPT(e),
                    body: {
                        prompt_type: t
                    }
                })
            }

            function g(e, t, n) {
                return _.apply(this, arguments)
            }

            function _() {
                return (_ = (0, r._)(function(e, t, n) {
                    return (0, a._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, i.default.post({
                                    url: p.Endpoints.SEND_GAMING_STATS(t),
                                    body: {
                                        message_reference: {
                                            guild_id: e,
                                            channel_id: t,
                                            message_id: n
                                        }
                                    }
                                })];
                            case 1:
                                return r.sent(), C(t), [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function m(e) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = (0, r._)(function(e) {
                    var t, n;
                    return (0, a._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, i.default.patch({
                                    url: p.Endpoints.UPDATE_GAMING_STATS(e.channel_id, e.id)
                                })];
                            case 1:
                                return null != (t = r.sent()).text && "" !== t.text && (null != (n = l.default.getChannel(e.channel_id)) && ((0, s.createPendingReply)({
                                    channel: n,
                                    message: e,
                                    shouldMention: !1,
                                    showMentionToggle: !1
                                }), C(n.id)), o.default.saveDraft(e.channel_id, t.text, d.DraftType.ChannelMessage)), [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function C(e) {
                c.default.getMessages(e).hasMoreAfter ? u.default.jumpToPresent(e, p.MAX_MESSAGES_PER_CHANNEL) : f.ComponentDispatch.dispatch(p.ComponentActions.SCROLLTO_PRESENT)
            }
        },
        138847: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CLIENT_THEMES_DATA_ATTRIBUTE: function() {
                    return o
                },
                default: function() {
                    return l
                }
            }), n("814951");
            var r = n("470079"),
                a = n("661223"),
                i = n("546435"),
                o = "data-client-themes",
                u = "custom-theme-background",
                s = function() {
                    var e = (0, a.useStateFromStores)([i.default], function() {
                        return i.default.getLinearGradient()
                    });
                    return (0, r.useMemo)(function() {
                        return null == e ? null : ".".concat(u, " {\n      --custom-theme-background: ").concat(e, ";\n    }")
                    }, [e])
                },
                l = function() {
                    var e = s();
                    return null === e ? {
                        clientThemesCSS: "",
                        clientThemesClassName: ""
                    } : {
                        clientThemesCSS: e,
                        clientThemesClassName: u
                    }
                }
        },
        214533: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("627494"), n("757143"), n("301563"), n("566702");
            var r = /[<>:"/\\|?*\.]/g,
                a = function(e) {
                    return e.replaceAll(r, "").trim().replaceAll(" ", "_")
                }
        },
        825249: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("357629");
            var r = n("188304"),
                a = n("311545"),
                i = n("262047"),
                o = n("565639"),
                u = n("407807"),
                s = n("480802"),
                l = n("642174"),
                d = n("84819"),
                c = n("401398"),
                f = n("467006"),
                p = n("30175");

            function h(e) {
                var t = function(e) {
                        if (null != e) {
                            var t, n, u = r.decodeStreamKey(e).ownerId;
                            if (u !== i.default.getId()) {
                                var l = o.default.getActivities(u).find(function(e) {
                                    return e.type === f.ActivityTypes.PLAYING
                                });
                                return {
                                    sourceName: null == l ? void 0 : l.name,
                                    sourceApplicationId: null == l ? void 0 : l.application_id
                                }
                            }
                        }
                        var d = a.default.getStreamerActiveStreamMetadata(),
                            c = null == d ? void 0 : d.pid,
                            p = null != d ? null != c ? s.default.getGameForPID(c) : null : s.default.getVisibleGame();
                        return {
                            sourceName: null !== (t = null == d ? void 0 : d.sourceName) && void 0 !== t ? t : null == p ? void 0 : p.name,
                            sourceApplicationId: null !== (n = null == d ? void 0 : d.id) && void 0 !== n ? n : null == p ? void 0 : p.id
                        }
                    }(e),
                    n = t.sourceName,
                    h = t.sourceApplicationId,
                    v = u.default.getChannelId(),
                    g = [i.default.getId()];
                return null != v && (g = Object.keys(l.default.getVoiceStatesForChannel(v))), {
                    id: d.default.fromTimestamp(Date.now()),
                    version: c.CURRENT_CLIP_METADATA_VERSION,
                    applicationName: null != n ? n : p.default.Messages.CLIPS_UNKNOWN_SOURCE,
                    applicationId: h,
                    users: g,
                    clipMethod: "manual",
                    length: 0,
                    thumbnail: ""
                }
            }
        },
        490124: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                validateClipMetadata: function() {
                    return d
                }
            });
            var r = n("356056"),
                a = n("21189"),
                i = n("227094"),
                o = n("324415");
            n("723026"), n("996173"), n("47120"), n("357629"), n("191489"), n("849202"), n("724458");
            var u = n("401398"),
                s = [function(e) {
                    var t = (0, i._)((0, a._)({}, e), {
                        version: 1,
                        applicationName: e.gameName,
                        applicationId: void 0
                    });
                    return delete t.gameName, t
                }, function(e) {
                    return (0, i._)((0, a._)({}, e), {
                        version: 2,
                        name: e.name.startsWith("Clip - ") ? void 0 : e.name
                    })
                }, function(e) {
                    return (0, i._)((0, a._)({}, e), {
                        version: 3,
                        name: "" === e.name ? void 0 : e.name
                    })
                }],
                l = null;

            function d(e) {
                return c.apply(this, arguments)
            }

            function c() {
                return (c = (0, r._)(function(e) {
                    var t, r, a;
                    return (0, o._)(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, n.el("490124@3476:3497").then(n.t.bind(n, "826753", 23))];
                            case 1:
                                var o;
                                o = t = i.sent().default, r = null != l ? l : l = o.object({
                                    id: o.string().required(),
                                    version: o.number().positive().integer().min(0).max(u.CURRENT_CLIP_METADATA_VERSION).optional(),
                                    name: o.string().when("version", {
                                        is: o.number().less(3),
                                        then: o.string().allow("")
                                    }),
                                    gameName: o.string().when("version", {
                                        is: o.number().greater(0).required(),
                                        then: o.forbidden(),
                                        otherwise: o.required()
                                    }),
                                    applicationName: o.string().when("version", {
                                        is: o.number().greater(0).required(),
                                        then: o.required(),
                                        otherwise: o.forbidden()
                                    }),
                                    applicationId: o.string(),
                                    users: o.array().items(o.string()).required(),
                                    filepath: o.string().required(),
                                    length: o.number().required(),
                                    thumbnail: o.string().required().allow(""),
                                    editMetadata: o.object().keys({
                                        start: o.number(),
                                        end: o.number(),
                                        applicationAudio: o.boolean(),
                                        voiceAudio: o.boolean()
                                    }),
                                    clipMethod: o.string().allow("auto", "manual").required()
                                }).required();
                                try {
                                    return t.assert(e, r), a = e, null == a.version && (a.version = 0), [2, s.slice(a.version).reduce(function(e, t) {
                                        return t(e)
                                    }, a)]
                                } catch (e) {
                                    return [2, null]
                                }
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }
        },
        334258: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearClipsSession: function() {
                    return Y
                },
                clearNewClipIds: function() {
                    return z
                },
                deleteClip: function() {
                    return q
                },
                exportClip: function() {
                    return Q
                },
                loadClipsDirectory: function() {
                    return X
                },
                saveClip: function() {
                    return G
                },
                updateAllowVoiceRecording: function() {
                    return R
                },
                updateClipMetadata: function() {
                    return K
                },
                updateClipsEnabled: function() {
                    return w
                },
                updateClipsLength: function() {
                    return V
                },
                updateClipsQuality: function() {
                    return B
                },
                updateClipsStorageLocation: function() {
                    return U
                },
                updateDecoupledClipsEnabled: function() {
                    return P
                },
                updateViewerClipsEnabled: function() {
                    return j
                }
            });
            var r = n("356056"),
                a = n("21189"),
                i = n("227094"),
                o = n("324415");
            n("573788"), n("996173"), n("47120"), n("357629"), n("814951"), n("26686"), n("653041"), n("633702"), n("266796");
            var u = n("599187"),
                s = n("312916"),
                l = n("99588"),
                d = n("958214"),
                c = n("188304"),
                f = n("894262"),
                p = n("408438"),
                h = n("259537"),
                v = n("595407"),
                g = n("311545"),
                _ = n("262047"),
                m = n("386130"),
                E = n("480802"),
                C = n("69046"),
                S = n("328470"),
                T = n("501769"),
                I = n("552091"),
                A = n("957390"),
                y = n("214533"),
                b = n("825249"),
                N = n("490124"),
                L = n("996771"),
                M = n("330936"),
                D = n("401398"),
                O = n("467006");

            function R(e) {
                var t = e.allowVoiceRecording;
                h.PreloadedUserSettingsActionCreators.updateAsync("clips", function(e) {
                    e.allowVoiceRecording = u.BoolValue.create({
                        value: t
                    })
                }, h.UserSettingsDelay.INFREQUENT_USER_ACTION), S.default.track(O.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    allow_voice_recording: t
                })
            }

            function w(e) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = (0, r._)(function(e) {
                    var t, n, r, i;
                    return (0, o._)(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return t = e.clipsEnabled, n = e.guildId, i = void 0 !== (r = e.trackAnalytics) && r, [4, s.default.dispatch({
                                    type: "CLIPS_SETTINGS_UPDATE",
                                    settings: (0, a._)({
                                        clipsEnabled: t
                                    }, !t && {
                                        decoupledClipsEnabled: !1
                                    })
                                })];
                            case 1:
                                return o.sent(), i && S.default.track(O.AnalyticEvents.CLIPS_SETTINGS_UPDATED, (0, a._)({
                                    clips_enabled: t,
                                    guild_id: n
                                }, !t && {
                                    decoupled_clips_enabled: !1
                                })), [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function P(e) {
                var t = e.enabled,
                    n = e.trackAnalytics;
                s.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: (0, i._)((0, a._)({}, t && {
                        clipsEnabled: !0
                    }), {
                        decoupledClipsEnabled: t
                    })
                }), void 0 !== n && n && S.default.track(O.AnalyticEvents.CLIPS_SETTINGS_UPDATED, (0, i._)((0, a._)({}, t && {
                    clips_enabled: !0
                }), {
                    decoupled_clips_enabled: t
                }))
            }

            function U(e) {
                s.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        storageLocation: e
                    }
                })
            }

            function B(e) {
                s.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        clipsQuality: e
                    }
                })
            }

            function V(e) {
                s.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        clipsLength: e
                    }
                })
            }

            function j(e) {
                s.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        viewerClipsEnabled: e
                    }
                })
            }

            function k(e, t) {
                var n, r, o, u, s, l, c, f, p, h = new Map;
                for (var g in t.framesEncodedByEncoder) {
                    var _, m = t.framesEncodedByEncoder[g],
                        E = (0, d.parseEncoder)(g),
                        C = null !== (_ = h.get(E)) && void 0 !== _ ? _ : 0;
                    h.set(E, C + m)
                }
                return (0, i._)((0, a._)({}, e), {
                    frames_encoded_nvidia_cuda: null !== (n = h.get(d.Encoders.NVIDIA_CUDA)) && void 0 !== n ? n : 0,
                    frames_encoded_nvidia_direct3d: null !== (r = h.get(d.Encoders.NVIDIA_DIRECT_3D)) && void 0 !== r ? r : 0,
                    frames_encoded_openh264: null !== (o = h.get(d.Encoders.OPENH264)) && void 0 !== o ? o : 0,
                    frames_encoded_videotoolbox: null !== (u = h.get(d.Encoders.VIDEOTOOLBOX)) && void 0 !== u ? u : 0,
                    frames_encoded_amd_direct3d: null !== (s = h.get(d.Encoders.AMD_DIRECT_3D)) && void 0 !== s ? s : 0,
                    frames_encoded_intel: null !== (l = h.get(d.Encoders.INTEL)) && void 0 !== l ? l : 0,
                    frames_encoded_intel_direct3d: null !== (c = h.get(d.Encoders.INTEL_DIRECT_3D)) && void 0 !== c ? c : 0,
                    frames_encoded_uncategorized: null !== (f = h.get(d.Encoders.UNCATEGORIZED)) && void 0 !== f ? f : 0,
                    frames_encoded_unknown: null !== (p = h.get(d.Encoders.UNKNOWN)) && void 0 !== p ? p : 0,
                    frames_submitted: t.framesSubmitted,
                    frames_submitted_during_clip: t.framesSubmittedDuringClip,
                    frames_encoded: t.framesEncoded,
                    frames_encoded_during_clip: t.framesEncodedDuringClip,
                    frames_dropped: t.framesDropped,
                    frames_dropped_during_clip: t.framesDroppedDuringClip,
                    clip_duration_setting: A.default.getSettings().clipsLength,
                    clip_duration: t.clipDuration,
                    clip_resolution_width: t.clipResolutionWidth,
                    clip_resolution_height: t.clipResolutionHeight,
                    min_fps: t.minFps,
                    max_fps: t.maxFps,
                    submitted_fps: t.submittedFps,
                    target_fps: v.default.getState().fps,
                    audio_track_count: t.audioTrackCount,
                    saved_at: t.savedAt
                })
            }

            function F() {
                return (F = (0, r._)(function(e) {
                    var t, n, r, u, d, f, p, h, v, E, T, I, N, L, R, w, x, P;
                    return (0, o._)(this, function(o) {
                        switch (o.label) {
                            case 0:
                                t = A.default.getSettings().storageLocation, n = (0, b.default)(e), r = "".concat((0, y.default)(n.applicationName.substring(0, 20)), "_").concat(n.id, ".mp4"), u = l.default.fileManager.join(t, r), d = m.default.getMediaEngine(), f = JSON.stringify(n), p = null != e ? (0, c.decodeStreamKey)(e).ownerId : void 0, h = function(e) {
                                    if (null != e) {
                                        n = null != e ? C.default.getRTCConnection(e) : null;
                                        var t, n, r, a, i = (0, c.decodeStreamKey)(e);
                                        r = i.guildId, a = i.channelId
                                    } else {
                                        var o = _.default.getId(),
                                            u = g.default.getActiveStreamForUser(o, null);
                                        n = null != u ? C.default.getRTCConnection((0, c.encodeStreamKey)(u)) : null, r = null == u ? void 0 : u.guildId, a = null == u ? void 0 : u.channelId
                                    }
                                    var s = null == n ? void 0 : null === (t = n.analyticsContext) || void 0 === t ? void 0 : t.streamApplication;
                                    return {
                                        rtc_connection_id: null == n ? void 0 : n.getRTCConnectionId(),
                                        media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                                        parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                                        guild_id: r,
                                        channel_id: a,
                                        application_id: null == s ? void 0 : s.id,
                                        application_name: null == s ? void 0 : s.name
                                    }
                                }(e), null != e && s.default.dispatch({
                                    type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
                                    clip: (0, i._)((0, a._)({}, n), {
                                        filepath: u
                                    })
                                }), o.label = 1;
                            case 1:
                                return o.trys.push([1, 5, , 6]), [4, null != p ? d.saveClipForUser(p, u, f) : d.saveClip(u, f)];
                            case 2:
                                return E = (v = o.sent()).duration, T = v.thumbnail, I = v.clipStats, (N = k(h, I)).clip_save_time_ms = I.clipSaveTimeMs, N.clip_size_bytes = I.clipSizeBytes, null != I.viewerDecodeFps && (N.decode_fps_during_clip = I.viewerDecodeFps, N.encode_fps_during_clip = I.viewerEncodeFps, N.target_fps = null), S.default.track(O.AnalyticEvents.CLIP_SAVED, N), [4, null != l.default.clips.getClipProtocolURLFromPath ? (0, M.createThumbnailFromVideo)(l.default.clips.getClipProtocolURLFromPath(u), 0) : (0, M.createThumbnail)(T)];
                            case 3:
                                return L = o.sent(), n.thumbnail = L, n.length = E, D.ClipsLogger.info("Clip save succeeded with ".concat(E, "ms and thumbnail ").concat(null !== (R = null == L ? void 0 : L.length) && void 0 !== R ? R : 0, " bytes thumbnail.")), [4, d.updateClipMetadata(u, JSON.stringify(n))];
                            case 4:
                                return o.sent(), [2, (0, i._)((0, a._)({}, n), {
                                    filepath: u
                                })];
                            case 5:
                                if (w = o.sent(), null != e && s.default.dispatch({
                                        type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR",
                                        clipId: n.id
                                    }), !("errorMessage" in w)) throw S.default.track(O.AnalyticEvents.CLIP_SAVE_FAILURE, h), w;
                                throw (P = k(h, x = w)).error_at = x.errorAt, P.error_message = x.errorMessage, S.default.track(O.AnalyticEvents.CLIP_SAVE_FAILURE, P), x.errorMessage;
                            case 6:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function G(e) {
                return H.apply(this, arguments)
            }

            function H() {
                return (H = (0, r._)(function(e) {
                    var t, n, r, a, i, u, l, d, h, v, _, m;
                    return (0, o._)(this, function(o) {
                        switch (o.label) {
                            case 0:
                                if (n = f.default.getCurrentConfig({
                                        location: "8ac9d1_1"
                                    }, {
                                        autoTrackExposure: !1
                                    }).enableDecoupledGameClipping, r = p.default.getCurrentConfig({
                                        location: "SaveClip"
                                    }, {
                                        autoTrackExposure: !1
                                    }).enableViewerClipping, A.default.getIsAtMaxSaveClipOperations()) return [2];
                                if (a = A.default.getSettings().clipsEnabled && null != g.default.getCurrentUserActiveStream(), i = n && A.default.getSettings().decoupledClipsEnabled && (null === (t = E.default.getVisibleGame()) || void 0 === t ? void 0 : t.windowHandle) != null, u = null != e && null != g.default.getActiveStreamForStreamKey(e) && r, !a && !i && !u) return [2];
                                d = null != (l = g.default.getCurrentUserActiveStream()) ? (0, c.encodeStreamKey)(l) : void 0, s.default.dispatch({
                                    type: "CLIPS_SAVE_CLIP_START"
                                }), h = (0, I.playSound)("clip_save", .5), v = performance.now(), o.label = 1;
                            case 1:
                                return o.trys.push([1, 3, , 4]), [4, function(e) {
                                    return F.apply(this, arguments)
                                }(null != e ? e : d)];
                            case 2:
                                return _ = o.sent(), s.default.dispatch({
                                    type: "CLIPS_SAVE_CLIP",
                                    clip: _
                                }), [3, 4];
                            case 3:
                                return m = o.sent(), D.ClipsLogger.error("Clip Failed to Save", m), null == h || h.stop(), (0, I.playSound)("clip_error", .5), s.default.dispatch({
                                    type: "CLIPS_SAVE_CLIP_ERROR"
                                }), [3, 4];
                            case 4:
                                return D.ClipsLogger.info("".concat(A.default.getSettings().clipsLength / 1e3, "s clip save took ").concat(Math.round(performance.now() - v), "ms")), [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function K(e, t) {
                return W.apply(this, arguments)
            }

            function W() {
                return (W = (0, r._)(function(e, t) {
                    var n, r;
                    return (0, o._)(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (null == (n = A.default.getClips().find(function(t) {
                                        return t.id === e
                                    }))) return [2];
                                return r = (0, a._)({}, n, t), [4, (0, N.validateClipMetadata)(r)];
                            case 1:
                                if (null == i.sent()) return [2];
                                return [4, m.default.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r))];
                            case 2:
                                return i.sent(), S.default.track(O.AnalyticEvents.CLIP_EDITED, {
                                    clip_id: r.id
                                }), s.default.dispatch({
                                    type: "CLIPS_UPDATE_METADATA",
                                    clip: r
                                }), [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function Y() {
                s.default.dispatch({
                    type: "CLIPS_CLEAR_CLIPS_SESSION"
                })
            }

            function z() {
                s.default.dispatch({
                    type: "CLIPS_CLEAR_NEW_CLIP_IDS"
                })
            }

            function X(e) {
                return Z.apply(this, arguments)
            }

            function Z() {
                return (Z = (0, r._)(function(e) {
                    var t, n, r, u, d, c, f, p, h, v, g;
                    return (0, o._)(this, function(o) {
                        switch (o.label) {
                            case 0:
                                if (!(0, T.isDesktop)() || (null === (t = l.default.clips) || void 0 === t ? void 0 : t.loadClipsDirectory) == null) return [2];
                                return [4, l.default.clips.loadClipsDirectory(e)];
                            case 1:
                                n = o.sent(), r = [], u = !0, d = !1, c = void 0, o.label = 2;
                            case 2:
                                o.trys.push([2, 7, 8, 9]), f = n[Symbol.iterator](), o.label = 3;
                            case 3:
                                if (u = (p = f.next()).done) return [3, 6];
                                return h = p.value, [4, (0, N.validateClipMetadata)((0, i._)((0, a._)({}, h.metadata), {
                                    filepath: h.filepath
                                }))];
                            case 4:
                                null != (v = o.sent()) && r.push(v), o.label = 5;
                            case 5:
                                return u = !0, [3, 3];
                            case 6:
                                return [3, 9];
                            case 7:
                                return g = o.sent(), d = !0, c = g, [3, 9];
                            case 8:
                                try {
                                    !u && null != f.return && f.return()
                                } finally {
                                    if (d) throw c
                                }
                                return [7];
                            case 9:
                                return s.default.dispatch({
                                    type: "CLIPS_LOAD_DIRECTORY_SUCCESS",
                                    clips: r
                                }), [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function q(e) {
                return J.apply(this, arguments)
            }

            function J() {
                return (J = (0, r._)(function(e) {
                    var t;
                    return (0, o._)(this, function(n) {
                        switch (n.label) {
                            case 0:
                                if (!(0, T.isDesktop)() || (null === (t = l.default.clips) || void 0 === t ? void 0 : t.deleteClip) == null) return [2];
                                return [4, l.default.clips.deleteClip(e)];
                            case 1:
                                return n.sent(), s.default.dispatch({
                                    type: "CLIPS_DELETE_CLIP",
                                    filepath: e
                                }), [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function Q(e, t) {
                return $.apply(this, arguments)
            }

            function $() {
                return ($ = (0, r._)(function(e, t) {
                    var n;
                    return (0, o._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, m.default.getMediaEngine().exportClip(e.filepath, t)];
                            case 1:
                                return n = r.sent(), [2, (0, L.default)(n)]
                        }
                    })
                })).apply(this, arguments)
            }
        },
        996771: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("356056"),
                a = n("324415");
            n("191489"), n("357629"), n("633702"), n("266796"), n("996173"), n("47120"), n("849202"), n("518263"), n("970173"), n("380476"), n("633958"), n("520712"), n("257068"), n("881884"), n("982849"), n("268111"), n("941497"), n("571977"), n("827762"), n("673841"), n("177841"), n("640740"), n("438471"), n("84643"), n("249288"), n("538235"), n("473220"), n("32026"), n("223828"), n("896409"), n("480839"), n("186066"), n("744285"), n("492257"), n("190629"), n("873817"), n("126298");
            var i = n("512722"),
                o = n.n(i),
                u = n("735630"),
                s = n.n(u);

            function l(e) {
                return d.apply(this, arguments)
            }

            function d() {
                return (d = (0, r._)(function(e) {
                    var t, n, r, i, u, l, d, c, f, p, h, v;
                    return (0, a._)(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return t = s().createFile(!1), n = new Promise(function(e) {
                                    t.onReady = e
                                }), [4, e.arrayBuffer()];
                            case 1:
                                return (r = a.sent()).fileStart = 0, t.appendBuffer(r), t.flush(), [4, n];
                            case 2:
                                a.sent(), o()(null != t.boxes, "mp4boxInputFile.boxes should not be null after parsing"), u = !0, l = !1, d = void 0;
                                try {
                                    for (c = t.boxes[Symbol.iterator](); !(u = (f = c.next()).done); u = !0) p = f.value, "uuid" === p.type && (i = p.start)
                                } catch (e) {
                                    l = !0, d = e
                                } finally {
                                    try {
                                        !u && null != c.return && c.return()
                                    } finally {
                                        if (l) throw d
                                    }
                                }
                                return h = e.slice(0, i, e.type), v = e.slice(i + 4, i + 8 + 16, e.type), [2, new Blob([h, new Uint8Array([0, 0, 0, 24]), v], {
                                    type: e.type
                                })]
                        }
                    })
                })).apply(this, arguments)
            }
        },
        330936: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createThumbnail: function() {
                    return o
                },
                createThumbnailFromVideo: function() {
                    return s
                }
            });
            var r = n("356056"),
                a = n("324415");
            n("191489"), n("357629"), n("411104");
            var i = n("401398");

            function o(e) {
                return u.apply(this, arguments)
            }

            function u() {
                return (u = (0, r._)(function(e) {
                    var t, n;
                    return (0, a._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (null == e) return [2, ""];
                                return t = new Blob([e], {
                                    type: "image/jpeg"
                                }), [4, new Promise(function(e) {
                                    var n = new FileReader;
                                    n.onloadend = function() {
                                        e(n.result)
                                    }, n.readAsDataURL(t)
                                })];
                            case 1:
                                if ("string" != typeof(n = r.sent())) throw Error("Thumbnail creation failed");
                                return [2, n]
                        }
                    })
                })).apply(this, arguments)
            }

            function s(e, t) {
                return l.apply(this, arguments)
            }

            function l() {
                return (l = (0, r._)(function(e, t) {
                    var n, r, o, u, s, l, d;
                    return (0, a._)(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return (n = document.createElement("video")).muted = !0, n.src = e, n.currentTime = t, [4, n.play()];
                            case 1:
                                if (a.sent(), n.pause(), r = i.CLIPS_THUMBNAIL_MAX_WIDTH / n.videoWidth, o = Math.min(r, i.CLIPS_THUMBNAIL_MAX_HEIGHT / n.videoHeight), u = n.videoWidth * o, s = n.videoHeight * o, (l = document.createElement("canvas")).width = u, l.height = s, null == (d = l.getContext("2d"))) throw Error("Could not create canvas context");
                                return d.drawImage(n, 0, 0, n.videoWidth, n.videoHeight, 0, 0, u, s), [2, l.toDataURL("image/jpeg", .9)]
                        }
                    })
                })).apply(this, arguments)
            }
        },
        551196: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("814951");
            var r = n("501769");

            function a() {
                var e = "";
                return (0, r.isWindows)() ? e = "platform-win" : (0, r.isMac)() ? e = "platform-osx" : (0, r.isLinux)() ? e = "platform-linux" : (0, r.isWeb)() && (e = "platform-web"), __OVERLAY__ ? "".concat(e, " platform-overlay") : e
            }
        },
        404699: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var r = n("356056"),
                a = n("87627"),
                i = n("29713"),
                o = n("154005"),
                u = n("778455"),
                s = n("324415");
            n("653041"), n("814951");
            var l = n("735250"),
                d = n("470079"),
                c = n("392711"),
                f = n.n(c),
                p = n("105691"),
                h = n("753750"),
                v = n("120739"),
                g = n("661223"),
                _ = n("974328"),
                m = n("365903"),
                E = n("598561"),
                C = n("282373"),
                S = n("587650"),
                T = n("618933"),
                I = n("521588"),
                A = n("702018"),
                y = n("328470"),
                b = n("281925"),
                N = n("432056"),
                L = n("467006"),
                M = n("30175"),
                D = n("75887");

            function O() {
                var e, t = (0, o._)(d.useState(!1), 2),
                    n = t[0],
                    a = t[1];
                if (null == (0, g.useStateFromStores)([E.default], function() {
                        var e;
                        return (0, C.probablyHasBuildOverride)() ? null === (e = E.default.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
                    })) return null;
                var i = (e = (0, r._)(function() {
                    var e;
                    return (0, s._)(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]), a(!0), [4, (0, m.clearBuildOverride)()];
                            case 1:
                                return e.sent(), window.location.reload(!0), [3, 3];
                            case 2:
                                return e.sent(), a(!1), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                }), function() {
                    return e.apply(this, arguments)
                });
                return (0, l.jsx)(_.Button, {
                    size: _.ButtonSizes.LARGE,
                    onClick: i,
                    submitting: n,
                    className: D.clearOverrideButton,
                    children: M.default.Messages.CLEAR_BUILD_OVERRIDE
                })
            }
            var R = f().throttle(function() {
                    T.default.increment({
                        name: v.MetricEvents.APP_CRASHED,
                        tags: ["reason:".concat(p.AppCrashedReasons.UNHANDLED_JS_ERROR), "level:".concat(h.ErrorLevels.FATAL)]
                    }, !0)
                }, 100, {
                    trailing: !1
                }),
                w = function(e) {
                    (0, i._)(n, e);
                    var t = (0, u._)(n);

                    function n() {
                        var e;
                        return (0, a._)(this, n), e = t.apply(this, arguments), e.state = {
                            error: null,
                            info: null
                        }, e.discordErrorsSet = !1, e
                    }
                    var r = n.prototype;
                    return r.componentDidCatch = function(e, t) {
                        this.triggerSoftCrash(e, t)
                    }, r.triggerSoftCrash = function(e, t) {
                        var n = (0, I.getHistory)().location;
                        this.setState({
                            error: e,
                            info: t
                        });
                        var r = b.default.captureCrash(e, {
                            extra: t
                        });
                        y.default.track(L.AnalyticEvents.APP_CRASHED, {
                            path: n.pathname,
                            extra: t,
                            error_message: e.message,
                            error_stack: e.stack,
                            sentry_issue_id: r,
                            uses_client_mods: (0, S.usesClientMods)()
                        }), R(), N.default.cleanupDisplaySleep()
                    }, r._handleSubmitReport = function() {
                        location.reload(!0)
                    }, r.componentDidMount = function() {
                        var e = this;
                        null == window.DiscordErrors && (window.DiscordErrors = {
                            softCrash: function(t) {
                                e.triggerSoftCrash(t)
                            }
                        }, this.discordErrorsSet = !0)
                    }, r.componentWillUnmount = function() {
                        this.discordErrorsSet && (window.DiscordErrors = null, this.discordErrorsSet = !1)
                    }, r.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = e.renderCustomMessage;
                        if (null !== this.state.error) {
                            var r = (0, l.jsxs)("div", {
                                    children: [(0, l.jsx)("p", {
                                        children: M.default.Messages.ERRORS_UNEXPECTED_CRASH
                                    }), (0, l.jsx)("p", {
                                        children: M.default.Messages.ERRORS_ACTION_TO_TAKE
                                    })]
                                }),
                                a = (0, l.jsxs)("div", {
                                    className: D.buttons,
                                    children: [(0, l.jsx)(_.Button, {
                                        size: _.ButtonSizes.LARGE,
                                        onClick: this._handleSubmitReport,
                                        children: M.default.Messages.ERRORS_RELOAD
                                    }), (0, l.jsx)(O, {})]
                                });
                            return (0, l.jsx)(A.default, {
                                title: M.default.Messages.UNSUPPORTED_BROWSER_TITLE,
                                note: null != n ? n() : r,
                                action: a,
                                className: D.errorPage
                            })
                        }
                        return t
                    }, n
                }(d.PureComponent)
        },
        640525: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var r = n("735250");
            n("470079");
            var a = n("803997"),
                i = n.n(a),
                o = n("661223"),
                u = n("974328"),
                s = n("985246"),
                l = n("99588"),
                d = n("777084"),
                c = n("901365"),
                f = n("997351"),
                p = n("935178"),
                h = n("242259"),
                v = n("720139"),
                g = n("950165"),
                _ = n("315604"),
                m = n("381694"),
                E = n("501769"),
                C = n("671008"),
                S = n("432056"),
                T = n("30175"),
                I = n("125942"),
                A = function(e) {
                    return S.default.close(e)
                },
                y = function(e) {
                    return S.default.minimize(e)
                },
                b = function(e, t) {
                    (0, E.isMac)() && !t.altKey ? S.default.fullscreen(e) : S.default.maximize(e)
                },
                N = function(e) {
                    var t = e.windowKey,
                        n = e.themeOverride,
                        a = e.hasOpenLayer;
                    return (0, r.jsxs)("div", {
                        className: i()(I.typeWindows, (0, C.getThemeClass)(n), {
                            [I.withBackgroundOverride]: !a
                        }),
                        children: [(0, r.jsx)("div", {
                            className: I.wordmarkWindows,
                            children: (0, r.jsx)(f.default, {})
                        }), (0, r.jsx)(u.Clickable, {
                            className: I.winButtonClose,
                            onClick: function() {
                                return A(t)
                            },
                            "aria-label": T.default.Messages.TITLE_BAR_CLOSE_WINDOW,
                            tabIndex: -1,
                            children: (0, r.jsx)(p.default, {})
                        }), (0, r.jsx)(u.Clickable, {
                            className: I.winButtonMinMax,
                            onClick: function(e) {
                                return b(t, e)
                            },
                            "aria-label": T.default.Messages.TITLE_BAR_MAXIMIZE_WINDOW,
                            tabIndex: -1,
                            children: (0, r.jsx)(v.default, {})
                        }), (0, r.jsx)(u.Clickable, {
                            className: I.winButtonMinMax,
                            onClick: function() {
                                return y(t)
                            },
                            "aria-label": T.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                            tabIndex: -1,
                            children: (0, r.jsx)(_.default, {})
                        })]
                    })
                },
                L = function(e) {
                    var t = e.focused,
                        n = e.windowKey,
                        a = e.frame,
                        o = e.themeOverride,
                        s = e.hasOpenLayer;
                    return (0, r.jsxs)(u.Clickable, {
                        className: i()(a ? I.typeMacOSWithFrame : I.typeMacOS, t ? I.focused : I.unfocused, (0, C.getThemeClass)(o), {
                            [I.withBackgroundOverride]: !s
                        }),
                        onDoubleClick: function() {
                            return S.default.maximize(n)
                        },
                        tabIndex: -1,
                        children: [l.default.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS ? (0, r.jsx)("div", {
                            className: I.macDragRegion
                        }) : (0, r.jsxs)("div", {
                            className: I.macButtons,
                            children: [(0, r.jsx)(u.Clickable, {
                                className: I.macButtonClose,
                                onClick: function() {
                                    return A(n)
                                },
                                "aria-label": T.default.Messages.TITLE_BAR_CLOSE_WINDOW,
                                tabIndex: -1,
                                children: (0, r.jsx)(h.default, {
                                    color: "#4c0000"
                                })
                            }), (0, r.jsx)(u.Clickable, {
                                className: I.macButtonMinimize,
                                onClick: function() {
                                    return y(n)
                                },
                                "aria-label": T.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                                tabIndex: -1,
                                children: (0, r.jsx)(m.default, {
                                    color: "#975500"
                                })
                            }), (0, r.jsx)(u.Clickable, {
                                className: I.macButtonMaximize,
                                onClick: function(e) {
                                    return b(n, e)
                                },
                                "aria-label": T.default.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
                                tabIndex: -1,
                                children: (0, r.jsx)(g.default, {
                                    color: "#006500"
                                })
                            })]
                        }), a ? (0, r.jsx)("div", {
                            className: I.wordmarkMacOS,
                            children: (0, r.jsx)(f.default, {
                                color: "#ffffff"
                            })
                        }) : null]
                    })
                };

            function M(e) {
                var t = e.focused,
                    n = e.type,
                    a = e.windowKey,
                    i = e.macOSFrame,
                    u = e.themeOverride,
                    l = (0, d.useAppContext)(),
                    f = (0, o.useStateFromStores)([c.default], function() {
                        return c.default.isFullscreenInContext(l)
                    }),
                    p = (0, s.default)();
                if (f) return null;
                switch (n) {
                    case E.PlatformTypes.WINDOWS:
                        return (0, r.jsx)(N, {
                            windowKey: a,
                            themeOverride: u,
                            hasOpenLayer: p
                        });
                    case E.PlatformTypes.OSX:
                        return (0, r.jsx)(L, {
                            focused: t,
                            windowKey: a,
                            frame: void 0 !== i && i,
                            themeOverride: u,
                            hasOpenLayer: p
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
            var r = n("470079"),
                a = n("661223"),
                i = n("910838"),
                o = n("974328"),
                u = n("96185"),
                s = n("59952"),
                l = n("329420"),
                d = n("10508"),
                c = n("106498"),
                f = n("196284"),
                p = n("948126"),
                h = n("467006"),
                v = n("891050");

            function g(e) {
                var t = e.ctrlKey || e.altKey || e.metaKey;
                e.key === v.KeyboardEventKey.Tab && !t && !__OVERLAY__ && !(0, i.hasAnyModalOpen)() && d.default.maybeShowKeyboardNavigationExplainerModal()
            }

            function _() {
                (0, s.disableKeyboardMode)()
            }
            var m = function(e, t) {
                var n = (0, a.useStateFromStores)([l.default], function() {
                    return l.default.keyboardModeEnabled
                });
                (0, o.useFocusJumpSectionManager)(n);
                var i = (0, r.useCallback)(function(e) {
                    ! function(e, t) {
                        var n, r, a = (0, f.isInputLikeElement)(null === (n = (0, f.eventOwnerDocument)(e)) || void 0 === n ? void 0 : n.activeElement);
                        if (!a || e.key === v.KeyboardEventKey.Tab) {
                            if (!(e.ctrlKey || e.altKey || e.metaKey || e.key !== v.KeyboardEventKey.Tab && e.shiftKey)) {
                                var i = function(e) {
                                    var t = p.keyToCode("shift"),
                                        n = p.keyToCode("tab");
                                    if (e.key === v.KeyboardEventKey.Tab && e.shiftKey && null != t && null != n) return [
                                        [h.KeyboardDeviceTypes.KEYBOARD_KEY, t],
                                        [h.KeyboardDeviceTypes.KEYBOARD_KEY, n]
                                    ];
                                    var r = v.NavigationKeyShortcutMap.get(e.key);
                                    if (null != r) {
                                        var a = p.keyToCode(r);
                                        if (null != a) return [
                                            [h.KeyboardDeviceTypes.KEYBOARD_KEY, a]
                                        ]
                                    }
                                    return null
                                }(e);
                                null != i && !c.default.hasExactKeybind(i) && !u.default.hasBind(null !== (r = p.codeToKey(i[0])) && void 0 !== r ? r : "") && ((0, s.enableKeyboardMode)(), a && !t && e.preventDefault())
                            }
                        }
                    }(e, t)
                }, [t]);
                return (0, r.useLayoutEffect)(function() {
                    return n ? (e.addEventListener("mousedown", _), e.addEventListener("keydown", g)) : e.addEventListener("keydown", i),
                        function() {
                            n ? (e.removeEventListener("mousedown", _), e.removeEventListener("keydown", g)) : e.removeEventListener("keydown", i)
                        }
                }, [e, i, n]), n
            }
        },
        688285: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("154005"),
                a = n("470079"),
                i = n("777084"),
                o = n("467006"),
                u = ["Shift", "Alt", "Meta", "Control"];

            function s(e, t) {
                var n = (0, r._)(a.useState(0), 2),
                    s = n[0],
                    l = n[1],
                    d = (0, i.useWindowDispatch)();
                a.useEffect(function() {
                    var e = function() {
                            return l(function(e) {
                                return e + 1
                            })
                        },
                        t = function() {
                            return l(function(e) {
                                return Math.max(0, e - 1)
                            })
                        };
                    return d.subscribe(o.ComponentActions.POPOUT_SHOW, e), d.subscribe(o.ComponentActions.POPOUT_HIDE, t),
                        function() {
                            d.unsubscribe(o.ComponentActions.POPOUT_SHOW, e), d.unsubscribe(o.ComponentActions.POPOUT_HIDE, t)
                        }
                }, [d]);
                var c = (0, r._)(a.useState(!1), 2),
                    f = c[0],
                    p = c[1];
                return a.useLayoutEffect(function() {
                    var n = function(e) {
                            if ((!t || s > 0) && f) {
                                p(!1);
                                return
                            }!(!f && s > 0 || e instanceof KeyboardEvent && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || u.indexOf(e.key) >= 0)) && p(function(e) {
                                return !e
                            })
                        },
                        r = f ? "keyup" : "mousemove";
                    return t && e.addEventListener(r, n),
                        function() {
                            return null == e ? void 0 : e.removeEventListener(r, n)
                        }
                }, [e, f, s, t]), t && 0 === s && f
            }
        },
        603835: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getBlindIds: function() {
                    return S
                },
                uploadCallscopeLogFiles: function() {
                    return y
                },
                uploadCallscopeLogs: function() {
                    return I
                },
                uploadDebugLogFiles: function() {
                    return m
                }
            });
            var r = n("356056"),
                a = n("87627"),
                i = n("324415");
            n("363505"), n("301563"), n("653041"), n("814951"), n("633702"), n("266796"), n("357629"), n("996173"), n("47120"), n("191489"), n("849202"), n("26686");
            var o = n("454836"),
                u = n("695682"),
                s = n("99588"),
                l = n("258943"),
                d = n("10357"),
                c = n("14794"),
                f = n("841869"),
                p = n("105259"),
                h = n("20569"),
                v = n("331005"),
                g = n("467006"),
                _ = new f.default("DebugUploadManager");

            function m(e, t) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = (0, r._)(function(e, t) {
                    return (0, i._)(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, function(e) {
                                    return N.apply(this, arguments)
                                }(e)];
                            case 1:
                                return n.sent(), [4, (0, l.uploadRtcLogFiles)(3670016, t)];
                            case 2:
                                return n.sent(), [2]
                        }
                    })
                })).apply(this, arguments)
            }
            var C = function() {
                function e() {
                    (0, a._)(this, e)
                }
                return e.getTrimmedFilename = function(e) {
                    var t = /^channel\.\d+\.(.+)$/.exec(e);
                    return null == t || t.length < 2 || null == t[1] ? "unknown" : t[1]
                }, e.getChannelId = function(e) {
                    var t = /channel\.(\d+)\..+(?:tsi|tsd)$/.exec(e);
                    return null == t || t.length < 2 || null == t[1] ? "unknown" : t[1]
                }, e
            }();

            function S(e, t, n) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = (0, r._)(function(e, t, n) {
                    var r, a, o;
                    return (0, i._)(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, (r = new u.BlindID(n)).blind(e)];
                            case 1:
                                return a = i.sent(), [4, r.blind(t)];
                            case 2:
                                return o = i.sent(), [2, {
                                    blindChannelId: a,
                                    blindUserId: o
                                }]
                        }
                    })
                })).apply(this, arguments)
            }

            function I(e, t, n, r) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = (0, r._)(function(e, t, n, r) {
                    var a, o, u, l, d, c, f;
                    return (0, i._)(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (__OVERLAY__) return [2];
                                if ((null === s.default || void 0 === s.default ? void 0 : null === (a = s.default.fileManager) || void 0 === a ? void 0 : a.getCallscopeLogFiles) == null) return _.error("uploadCallscopeLogs: Upload RTC logs failed because native is out of date (getCallscopeLogFiles)."), [2];
                                if (!("crypto" in window)) return _.error("uploadCallscopeLogs: Upload RTC logs failed because crypto is not supported."), [2];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 5, , 6]), [4, S(e, t, n)];
                            case 2:
                                return u = (o = i.sent()).blindChannelId, l = o.blindUserId, d = "channel blind(".concat(e, "): ").concat(u, ", user blind(").concat(t, "): ").concat(l), _.info("uploadCallscopeLogs: Uploading callscope logs for context: ".concat(r, ", ").concat(d)), [4, s.default.fileManager.getCallscopeLogFiles(u)];
                            case 3:
                                return c = i.sent(), [4, y(l, c)];
                            case 4:
                                return i.sent(), [3, 6];
                            case 5:
                                return f = i.sent(), _.error("uploadCallscopeLogs: Error uploading logs ".concat(null == f ? void 0 : f.text), f), [3, 6];
                            case 6:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function y(e, t) {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = (0, r._)(function(e, t) {
                    var n, r, a, u, s, l, c, f, p, h, v;
                    return (0, i._)(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (i.trys.push([0, 11, , 12]), 0 === t.length) return _.error("uploadCallscopeLogFiles: No files found."), [2];
                                n = !0, r = !1, a = void 0, i.label = 1;
                            case 1:
                                i.trys.push([1, 8, 9, 10]), u = t.map(function(e) {
                                    return d.transformNativeFile(e, "application/octet-stream")
                                })[Symbol.iterator](), i.label = 2;
                            case 2:
                                if (n = (s = u.next()).done) return [3, 7];
                                l = s.value, _.log("uploadCallscopeLogFiles: Uploading ".concat(l.name)), c = C.getChannelId(l.name), i.label = 3;
                            case 3:
                                return i.trys.push([3, 5, , 6]), [4, o.default.post({
                                    url: g.Endpoints.CALLSCOPE_LOGS(c, e, C.getTrimmedFilename(l.name)),
                                    headers: {
                                        "Content-Type": "application/octet-stream"
                                    },
                                    body: l
                                })];
                            case 4:
                                return !((f = i.sent()).status >= 200 && f.status <= 299) && _.error("uploadCallscopeLogFiles: Failed to upload ".concat(l.name, " with status ").concat(f.status, ", ").concat(f.text)), [3, 6];
                            case 5:
                                return p = i.sent(), _.error("uploadCallscopeLogFiles: Error uploading file ".concat(l.name, " ").concat(null == p ? void 0 : p.text), p), [3, 6];
                            case 6:
                                return n = !0, [3, 2];
                            case 7:
                                return [3, 10];
                            case 8:
                                return h = i.sent(), r = !0, a = h, [3, 10];
                            case 9:
                                try {
                                    !n && null != u.return && u.return()
                                } finally {
                                    if (r) throw a
                                }
                                return [7];
                            case 10:
                                return [3, 12];
                            case 11:
                                return v = i.sent(), _.error("uploadCallscopeLogFiles: Error uploading logs ".concat(null == v ? void 0 : v.text), v), [3, 12];
                            case 12:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function N() {
                return (N = (0, r._)(function(e) {
                    var t, n, r, a, u, s, l, d, f, m;
                    return (0, i._)(this, function(i) {
                        switch (i.label) {
                            case 0:
                                i.trys.push([0, 6, , 7]), t = c.stringify(), !0;
                                return [3, 2];
                            case 1:
                                return r = i.sent(), [3, 3];
                            case 2:
                                r = "", i.label = 3;
                            case 3:
                                return n = r, [4, (0, p.getPushNotificationLogs)().then(function(e) {
                                    return (0, p.serializePushNotificationLogs)(e)
                                })];
                            case 4:
                                return a = i.sent(), (u = t.length + n.length + a.length) > 9437184 && (s = 1 - 9437184 / u, t = t.slice(t.length - Math.floor(t.length * s)), n = n.slice(n.length - Math.floor(n.length * s)), a = a.slice(a.length - Math.floor(a.length * s))), l = null, d = "\n    ".concat((0, v.default)(l), "\n\n    ").concat(JSON.stringify((0, h.default)(), void 0, 2), "\n    Logs:\n    ").concat(t, "\n\n    System logs:\n    ").concat(n, "\n\n    Push Notifications:\n    ").concat(a, "\n    "), c.clear(), f = g.Endpoints.DEBUG_LOG(e, "discord_app_logs"), [4, o.default.post({
                                    url: f,
                                    body: d,
                                    retries: 3,
                                    headers: {
                                        "Content-Type": "text/plain"
                                    },
                                    oldFormErrors: !0
                                })];
                            case 5:
                                return i.sent(), [3, 7];
                            case 6:
                                return m = i.sent(), _.error("uploadAppLogFiles: upload app log files error ".concat(m.message)), [3, 7];
                            case 7:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
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
            var r = n("356056"),
                a = n("324415");
            n("814951"), n("363505");
            var i = n("986329"),
                o = n("262047"),
                u = n("467006");

            function s(e) {
                if (0 === e.length) return "No logs";
                var t = i.default.get(u.DEVICE_TOKEN),
                    n = i.default.get(u.DEVICE_VOIP_TOKEN),
                    r = e.map(function(e) {
                        var t = "Displayed";
                        return e.silent && (t = "Silent"), "".concat(new Date(e.receivedTimestamp).toISOString(), " [").concat(e.type, "] ").concat(t, " - ").concat(e.title, " - ").concat(e.content, " ")
                    }).join("\n");
                return "".concat(null != t ? "Device Token: ".concat(t) : "", "\n").concat(null != n ? "Device Voip Token: ".concat(n) : "", "\n\n").concat(r)
            }

            function l() {
                return d.apply(this, arguments)
            }

            function d() {
                return (d = (0, r._)(function() {
                    var e, t;
                    return (0, a._)(this, function(n) {
                        switch (n.label) {
                            case 0:
                                e = o.default.getId(), !0;
                                return [3, 2];
                            case 1:
                                return t = n.sent(), [3, 3];
                            case 2:
                                t = [], n.label = 3;
                            case 3:
                                return [2, t]
                        }
                    })
                })).apply(this, arguments)
            }
        },
        20569: function(e, t, n) {
            "use strict";

            function r() {
                return {
                    logsUploaded: new Date().toISOString(),
                    releaseChannel: window.GLOBAL_ENV.RELEASE_CHANNEL,
                    buildNumber: "256197",
                    versionHash: "478a60bafa7d22b0af573075a4bf9472954c9b35"
                }
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        },
        331005: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("363505"), n("357629"), n("814951"), n("737846"), n("757143"), n("301563"), n("653041"), n("849202"), n("330740"), n("996173"), n("47120"), n("723026"), n("568603"), n("128242"), n("462848"), n("817285");
            var r = n("392711"),
                a = n.n(r),
                i = n("990835"),
                o = n("644829");

            function u(e) {
                var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return i.default.logGroups.map(function(n) {
                    var r, i, u = n.index,
                        l = n.timestamp,
                        d = n.logs,
                        c = n.nativeLogs,
                        f = n.serverTrace,
                        p = 0 === u ? null !== (i = null === (r = a().find(d, function(e) {
                            return e.log.indexOf("Logger loaded") >= 0
                        })) || void 0 === r ? void 0 : r.timestamp) && void 0 !== i ? i : e : l,
                        h = function(e, t) {
                            var n, r, i = (function(e) {
                                    for (var t = [], n = 0; n < e.length; n++) {
                                        var r = e[n],
                                            a = e[n + 1];
                                        null != a && a.log === r.log.replace("Start ", "Finish ") ? (a.log = a.log.replace("Finish ", ""), t.push(a), n++) : t.push(r)
                                    }
                                    return t
                                })(e).map(function(e) {
                                    var n = null == e.timestamp ? "" : ((e.timestamp - t) / 1e3).toFixed(3);
                                    return {
                                        totalTime: n,
                                        deltaTime: null == e.delta ? "" : String(Math.round(e.delta)),
                                        log: "".concat(e.emoji.length > 0 ? "".concat(e.emoji, " ") : "").concat(e.prefix).concat(e.log, "\n")
                                    }
                                }),
                                o = null !== (n = a().max(i.map(function(e) {
                                    return e.totalTime.length
                                }))) && void 0 !== n ? n : 0,
                                u = null !== (r = a().max(i.map(function(e) {
                                    return e.deltaTime.length
                                }))) && void 0 !== r ? r : 0;
                            return i.map(function(e) {
                                var t = e.totalTime,
                                    n = e.deltaTime,
                                    r = e.log;
                                return "".concat(a().padStart(t, o), " ").concat(a().padStart(n, u), " ").concat(r)
                            }).join("")
                        }(function(e, t, n) {
                            e = e.slice();
                            var r = new Set(t.map(s)),
                                a = "",
                                i = [];
                            return t.forEach(function(t) {
                                var o = s(t),
                                    u = 0,
                                    l = n || !t.autoGenerated,
                                    d = o.startsWith("Start ") && !o.includes("RUN_JS_BUNDLE") && r.has(o.replace("Start ", "Finish "));
                                if (o.startsWith("Finish ") && !o.includes("RUN_JS_BUNDLE") && r.has(o.replace("Finish ", "Start "))) {
                                    a = a.substring(2);
                                    var c = i.pop();
                                    null != c && (u = t.timestamp - c.timestamp, l = l || u > 5 && ! function(e) {
                                        return ["GET_CONSTANTS", "CONVERT_CONSTANTS"].some(function(t) {
                                            return e.includes(t)
                                        })
                                    }(o), c.shouldKeep = c.shouldKeep || l)
                                }
                                var f = {
                                    emoji: "☕",
                                    timestamp: t.timestamp,
                                    delta: u > 0 ? u : void 0,
                                    prefix: a,
                                    log: o,
                                    shouldKeep: l
                                };
                                (function(e, t) {
                                    for (var n = 0; n < e.length; n++) {
                                        var r = e[n].timestamp;
                                        if (null != r && r > t.timestamp) break
                                    }
                                    e.splice(n, 0, t)
                                })(e, f), d && (a += "| ", i.push(f))
                            }), e.filter(function(e) {
                                return !1 !== e.shouldKeep
                            })
                        }(d, c, t), p),
                        v = "Trace #".concat(u + 1, " started ").concat((0, o.getTimestampString)(l), "\n").concat(h);
                    return null != f && (v += "\n Server trace for trace #".concat(u + 1).concat(f)), v
                }).join("\n\n")
            }

            function s(e) {
                var t = null == e.tag ? e.label : "".concat(e.label, " ").concat(e.tag);
                return t.includes("_START") && (t = "Start " + t.replace("_START", "")), t.includes("_END") && (t = "Finish " + t.replace("_END", "")), t
            }
        },
        617054: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearAnalyticsLog: function() {
                    return u
                },
                toggleDisplayDevTools: function() {
                    return o
                },
                updateDevToolsSettings: function() {
                    return i
                }
            });
            var r = n("312916"),
                a = n("998470");

            function i(e) {
                r.default.dispatch({
                    type: "DEV_TOOLS_SETTINGS_UPDATE",
                    settings: e
                })
            }

            function o() {
                i({
                    displayTools: !a.default.displayTools
                })
            }

            function u() {
                r.default.dispatch({
                    type: "ANALYTICS_LOG_CLEAR"
                })
            }
        },
        998470: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVTOOLS_SIDEBAR_MIN_WIDTH: function() {
                    return f
                },
                default: function() {
                    return v
                }
            });
            var r = n("87627"),
                a = n("200344"),
                i = n("29713"),
                o = n("21189"),
                u = n("778455"),
                s = n("661223"),
                l = n("986329"),
                d = n("312916"),
                c = n("567377"),
                f = 360,
                p = {
                    devToolsEnabled: !1,
                    sidebarWidth: 360,
                    lastOpenTabId: null,
                    displayTools: !1,
                    showDevWidget: !1,
                    devWidgetPosition: {
                        x: 0,
                        y: 0
                    }
                },
                h = function(e) {
                    (0, i._)(n, e);
                    var t = (0, u._)(n);

                    function n() {
                        return (0, r._)(this, n), t.apply(this, arguments)
                    }
                    var o = n.prototype;
                    return o.initialize = function(e) {
                        p = null != e ? e : p, d.default.actionLogger.persist = this.devToolsEnabled
                    }, o.getUserAgnosticState = function() {
                        return p
                    }, (0, a._)(n, [{
                        key: "devToolsEnabled",
                        get: function() {
                            return p.devToolsEnabled
                        }
                    }, {
                        key: "sidebarWidth",
                        get: function() {
                            return this.displayTools ? p.sidebarWidth : 0
                        }
                    }, {
                        key: "lastOpenTabId",
                        get: function() {
                            var e;
                            return null !== (e = p.lastOpenTabId) && void 0 !== e ? e : null
                        }
                    }, {
                        key: "displayTools",
                        get: function() {
                            return this.devToolsEnabled && p.displayTools
                        }
                    }, {
                        key: "showDevWidget",
                        get: function() {
                            return this.devToolsEnabled && p.showDevWidget
                        }
                    }, {
                        key: "devWidgetPosition",
                        get: function() {
                            return p.devWidgetPosition
                        }
                    }]), n
                }(s.default.DeviceSettingsStore);
            h.displayName = "DevToolsSettingsStore", h.persistKey = "DevToolsSettingsStore";
            var v = new h(d.default, {
                DEV_TOOLS_SETTINGS_UPDATE: function(e) {
                    (p.devToolsEnabled || e.settings.devToolsEnabled) && (null != e.settings.devToolsEnabled && (d.default.actionLogger.persist = e.settings.devToolsEnabled, l.default.set(c.STORAGE_KEY_LOG_DISPATCHES, e.settings.devToolsEnabled)), p = (0, o._)({}, p, e.settings))
                }
            })
        },
        587650: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initSentry: function() {
                    return s
                },
                usesClientMods: function() {
                    return o
                }
            }), n("996173"), n("47120"), n("357629");
            var r = n("887117"),
                a = n("705899"),
                i = ["oppobrowser", "realmebrowser", "heytapbrowser"];

            function o() {
                var e = window;
                return null != e.jQuery || null != e.$ || null != e.BetterDiscord || null != e.BdApi || null != e.rambox
            }
            var u = (0, a.filterThrottle)({
                maxBudgetMinute: 1,
                maxBudgetHour: 3
            });

            function s() {
                r.init({
                    tunnel: "/error-reporting-proxy/web",
                    dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
                    autoSessionTracking: !1,
                    environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
                    release: "discord_web-478a60bafa7d22b0af573075a4bf9472954c9b35",
                    beforeSend: function(e) {
                        var t, n;
                        return !(null != (t = e).exception && null != t.exception.values && t.exception.values.every(function(e) {
                            return null == e.stacktrace || null != e.stacktrace.frames && 1 === e.stacktrace.frames.length
                        }) && "canary" !== window.GLOBAL_ENV.RELEASE_CHANNEL || i.some(function(e) {
                            return window.navigator.appVersion.toLowerCase().indexOf(e) >= 0
                        })) && !o() && !("Aborted" === (n = e).message || "cancel captcha" === n.message) && u() ? e : null
                    },
                    integrations: [new r.Integrations.GlobalHandlers({
                        onerror: !0,
                        onunhandledrejection: !0
                    }), new r.Integrations.Breadcrumbs({
                        console: !0,
                        dom: !0,
                        fetch: !0,
                        history: !0,
                        sentry: !0,
                        xhr: !0
                    })],
                    ignoreErrors: ["EADDRINUSE", "BetterDiscord", "EnhancedDiscord", "Powercord", "RecipeWebview", "jQuery", "localStorage", "has already been declared", "Cannot call hover while not dragging.", "Cannot call beginDrag while dragging.", "getHostNode", "setupCSS", "on missing remote object", "ChunkLoadError", "Cannot find module 'discord_utils'", "Failed to setup Krisp module", "Error invoking remote method 'DISCORD_NATIVE_MODULES_INSTALL': Error: Module updater is not available!", "Non-Error promise rejection captured with keys:", "Request has been terminated", "Cannot resolve a Slate point from DOM point", "Failed to fetch", "no suitable image found", "ResizeObserver loop limit exceeded", "The play() request was interrupted", "could not play audio", "notosans-400-normalitalic"],
                    denyUrls: [/recaptcha/, /mobilediscord\.com/, /betterdiscord:\/\//]
                }), r.setTag("buildNumber", (e = "256197", "256197")), r.setTag("builtAt", String("1703185339926"));
                var e, t = window.GLOBAL_ENV.SENTRY_TAGS;
                if (null != t && "object" == typeof t)
                    for (var n in t) r.setTag(n, t[n]);
                return r
            }
        },
        300102: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("389570");

            function a(e) {
                return e.supportsInApp(r.Features.VIDEO) && e.supportsInApp(r.Features.DESKTOP_CAPTURE)
            }
        },
        883319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("633702"), n("266796"), n("357629"), n("996173"), n("47120");
            var r = n("406789"),
                a = n("315308");

            function i(e, t, n, i, o) {
                var u = !0,
                    s = !1,
                    l = void 0;
                try {
                    for (var d, c = (0, a.ApplicationStreamSettingRequirements)[Symbol.iterator](); !(u = (d = c.next()).done); u = !0) {
                        var f = d.value;
                        if ((null == f.preset || e === f.preset) && t === f.resolution && n === f.fps && (0, r.default)(f, i, o)) return !0
                    }
                } catch (e) {
                    s = !0, l = e
                } finally {
                    try {
                        !u && null != c.return && c.return()
                    } finally {
                        if (s) throw l
                    }
                }
                return !1
            }
        },
        406789: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("965981"),
                a = n("488867"),
                i = n("171168");

            function o(e, t, n) {
                if (null == e || null == e.quality && null == e.guildPremiumTier) return !0;
                var o = !1;
                return null != e.quality && (e.quality === i.StreamQualities.HIGH_STREAMING_QUALITY ? o = o || a.default.canStreamQuality(a.default.StreamQuality.HIGH, t) : e.quality === i.StreamQualities.MID_STREAMING_QUALITY && (o = o || a.default.canStreamQuality(a.default.StreamQuality.MID, t))), null != e.guildPremiumTier && (o = o || (0, r.isGuildBoostedAtLeast)(n, e.guildPremiumTier)), o
            }
        },
        186477: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("107888"),
                a = n("467006"),
                i = n("30175");

            function o(e, t, n, o) {
                if (e.state === a.ApplicationStreamStates.RECONNECTING) return {
                    mainText: i.default.Messages.STREAM_RECONNECTING_ERROR,
                    supportingText: i.default.Messages.STREAM_RECONNECTING_ERROR_SUBTEXT
                };
                if (e.state === a.ApplicationStreamStates.PAUSED) return n ? {
                    mainText: i.default.Messages.STREAM_CAPTURE_PAUSED,
                    supportingText: i.default.Messages.STREAM_CAPTURE_PAUSED_DETAILS
                } : {
                    mainText: i.default.Messages.STREAM_CAPTURE_PAUSED,
                    supportingText: i.default.Messages.STREAM_CAPTURE_PAUSED_DETAILS_VIEWER.format({
                        username: r.default.getName(e.guildId, e.channelId, t)
                    })
                };
                return o ? {
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
            var r = n("501769"),
                a = n("432056");

            function i(e) {
                r.isPlatformEmbedded ? a.default.focus(e) : window.focus()
            }
        },
        66214: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("221083"),
                a = n("116395"),
                i = n("262047"),
                o = n("188304");

            function u(e) {
                var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (null != e) {
                    var n = e.streamType,
                        u = e.guildId,
                        s = e.channelId,
                        l = e.ownerId,
                        d = (0, o.encodeStreamKey)({
                            streamType: n,
                            guildId: u,
                            channelId: s,
                            ownerId: l
                        });
                    l === i.default.getId() && r.default.setGoLiveSource(null), a.stopStream(d, t)
                }
            }
        },
        500824: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var r = n("87627"),
                a = n("29713"),
                i = n("21189"),
                o = n("227094"),
                u = n("778455");
            n("357629");
            var s = n("312916"),
                l = n("963694"),
                d = n("361733"),
                c = n("871831"),
                f = n("658841"),
                p = null,
                h = function() {
                    var e = d.default.getCommunicationDisabledUserMap();
                    Object.keys(e).forEach(function(t) {
                        var n = (0, d.getGuildIdFromCommunicationDisabledUserKey)(t),
                            r = (0, d.getUserIdFromCommunicationDisabledUserKey)(t),
                            a = e[t];
                        !(0, f.isCommunicationDisabled)(a) && v(n, r)
                    })
                },
                v = function(e, t) {
                    var n, r, a, u, l, p, h = d.default.getMember(e, t),
                        v = c.default.getUser(t);
                    if (null != h && null != v) {
                        if (!(0, f.isMemberCommunicationDisabled)(h)) {
                            var g = (0, o._)((0, i._)({}, h), {
                                guildId: e,
                                nick: null !== (n = h.nick) && void 0 !== n ? n : v.username,
                                avatar: null !== (r = h.avatar) && void 0 !== r ? r : void 0,
                                premiumSince: null !== (a = h.premiumSince) && void 0 !== a ? a : void 0,
                                isPending: null !== (u = h.isPending) && void 0 !== u && u,
                                user: (0, o._)((0, i._)({}, v), {
                                    email: null !== (l = v.email) && void 0 !== l ? l : void 0,
                                    phone: null !== (p = v.phone) && void 0 !== p ? p : void 0
                                }),
                                communicationDisabledUntil: null
                            });
                            s.default.dispatch((0, i._)({
                                type: "GUILD_MEMBER_UPDATE"
                            }, g))
                        }
                    }
                },
                g = new(function(e) {
                    (0, a._)(n, e);
                    var t = (0, u._)(n);

                    function n() {
                        var e;
                        return (0, r._)(this, n), e = t.apply(this, arguments), e.clearGuildMemberTimeout = v, e
                    }
                    var i = n.prototype;
                    return i._initialize = function() {
                        p = setInterval(function() {
                            return h()
                        }, 1e4)
                    }, i._terminate = function() {
                        clearInterval(p)
                    }, n
                }(l.default))
        },
        76590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = (0, n("516086").createExperiment)({
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
            })
        },
        210203: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                dismissedGuildOnboardingUpsell: function() {
                    return E
                },
                shouldShowGuildOnboardingUpsell: function() {
                    return m
                }
            });
            var r = n("154005");
            n("151809"), n("357629");
            var a = n("913527"),
                i = n.n(a),
                o = n("310057"),
                u = n("378813"),
                s = n("87727"),
                l = n("259537"),
                d = n("991400"),
                c = n("327271"),
                f = n("76590"),
                p = n("23650"),
                h = n("467006"),
                v = n("854507"),
                g = [o.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, o.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, o.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
                _ = [0, 1, 7];

            function m(e, t) {
                var n, a = Object.entries(c.default.getGuilds()).some(function(e) {
                    var t = (0, r._)(e, 2),
                        n = t[0],
                        a = t[1],
                        i = (0, p.isGuildOnboardingSettingsAvailable)(n),
                        o = a.hasFeature(h.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
                    return i && o
                });
                if (a || !(0, p.isGuildOnboardingSettingsAvailable)(e)) return !1;
                var o = null === (n = d.default.settings.userContent) || void 0 === n ? void 0 : n.guildOnboardingUpsellDismissedAt,
                    l = null != o ? u.Timestamp.toDate(o) : void 0,
                    v = null != l ? i()().diff(l, "days") : null,
                    m = g.indexOf(t);
                return -1 !== m && (null == v || !!(v > _[m])) && g.find(function(e) {
                    return !(0, s.isDismissibleContentDismissed)(e)
                }) === t && f.default.getCurrentConfig({
                    guildId: e,
                    location: "7f5b67_1"
                }, {
                    disable: a || !(0, p.isGuildOnboardingSettingsAvailable)(e),
                    autoTrackExposure: !0
                }).showLifecycleUpsells
            }

            function E(e, t) {
                var n = u.Timestamp.now();
                l.PreloadedUserSettingsActionCreators.updateAsync("userContent", function(e) {
                    e.guildOnboardingUpsellDismissedAt = n
                }, l.UserSettingsDelay.INFREQUENT_USER_ACTION), null != t && (0, s.markDismissibleContentAsDismissed)(t, {
                    forceTrack: !0,
                    dismissAction: v.ContentDismissActionType.AUTO,
                    guildId: e
                })
            }
        },
        701166: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r, a = n("356056"),
                i = n("87627"),
                o = n("29713"),
                u = n("778455"),
                s = n("324415");
            n("330740"), n("996173"), n("47120"), n("357629"), n("653041"), n("462848"), n("814951");
            var l = n("963694"),
                d = n("422557"),
                c = n("632706"),
                f = n("62470"),
                p = n("668030"),
                h = {},
                v = new Set;
            var g = (r = (0, a._)(function(e) {
                    var t;
                    return (0, s._)(this, function(t) {
                        switch (t.label) {
                            case 0:
                                if (0 === f.default.getGuildScheduledEventsForGuild(e).length || v.has(e)) return [2];
                                t.label = 1;
                            case 1:
                                return t.trys.push([1, 3, , 4]), [4, p.default.getGuildEventsForCurrentUser(e)];
                            case 2:
                                return t.sent(), v.add(e), [3, 4];
                            case 3:
                                return t.sent(), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                }), function(e) {
                    return r.apply(this, arguments)
                }),
                _ = new(function(e) {
                    (0, o._)(n, e);
                    var t = (0, u._)(n);

                    function n() {
                        var e;
                        return (0, i._)(this, n), e = t.apply(this, arguments), e.actions = {
                            POST_CONNECTION_OPEN: function() {
                                return e.handleConnectionOpen()
                            },
                            GUILD_DELETE: function(t) {
                                return e.handleGuildDelete(t)
                            },
                            GUILD_UNAVAILABLE: function(t) {
                                return e.handleGuildUnavailable(t)
                            },
                            INVITE_RESOLVE_SUCCESS: function(t) {
                                return e.handleInviteResolveSuccess(t)
                            },
                            CHANNEL_SELECT: function(t) {
                                return e.handleChannelSelect(t)
                            }
                        }, e
                    }
                    var r = n.prototype;
                    return r.getGuildEventUserCounts = function(e, t, n) {
                        return (0, a._)(function() {
                            var r, a;
                            return (0, s._)(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (r = n.filter(function(n) {
                                                return null == h["".concat(e, "-").concat(t, "-").concat(n)] || Date.now() - h["".concat(e, "-").concat(t, "-").concat(n)] > 18e5
                                            }), Date.now() - h["".concat(e, "-").concat(t)] < 18e5 && 0 === r.length) return [2];
                                        h["".concat(e, "-").concat(t)] = Date.now(), r.forEach(function(n) {
                                            return h["".concat(e, "-").concat(t, "-").concat(n)] = Date.now()
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, p.default.fetchGuildEventUserCounts(e, t, r)];
                                    case 2:
                                    case 3:
                                        return a.sent(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })()
                    }, r.getGuildEventUsers = function(e, t, n) {
                        return p.default.fetchUsersForGuildEvent(e, t, n)
                    }, r.getGuildEventsForCurrentUser = function(e) {
                        return g(e)
                    }, r.handleConnectionOpen = function() {
                        var e = this;
                        v.clear(), h = {};
                        var t = (0, d.isInMainTabsExperiment)(),
                            n = c.default.getLastSelectedGuildId();
                        t && null != n && f.default.getGuildScheduledEventsForGuild(n).forEach(function(t) {
                            return e.getGuildEventUserCounts(n, t.id, [])
                        })
                    }, r.handleGuildUnavailable = function(e) {
                        var t = e.guildId;
                        v.delete(t), delete h[t]
                    }, r.handleGuildDelete = function(e) {
                        var t = e.guild.id;
                        v.delete(t), delete h[t]
                    }, r.handleInviteResolveSuccess = function(e) {
                        var t, n = e.invite,
                            r = n.guild_scheduled_event,
                            a = null === (t = n.guild) || void 0 === t ? void 0 : t.id;
                        null != r && null != a && g(a)
                    }, r.handleChannelSelect = function(e) {
                        var t = e.guildId,
                            n = this;
                        null != t && f.default.getGuildScheduledEventsForGuild(t).forEach(function(e) {
                            return n.getGuildEventUserCounts(t, e.id, [])
                        })
                    }, n
                }(l.default))
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
                    return l
                }
            });
            var r = n("312916"),
                a = n("731865"),
                i = n("407807"),
                o = n("232733"),
                u = n("328470"),
                s = n("467006");

            function l(e, t) {
                var n;
                if (null == e) {
                    c(t);
                    return
                }
                r.default.dispatch({
                    type: "UPDATE_HANG_STATUS",
                    status: e,
                    saveAsDefault: t
                }), u.default.track(s.AnalyticEvents.SET_HANG_STATUS, {
                    status_type: e,
                    channel_id: o.default.getVoiceChannelId(),
                    guild_id: null === (n = a.default.getChannel(o.default.getVoiceChannelId())) || void 0 === n ? void 0 : n.guild_id,
                    media_session_id: i.default.getMediaSessionId()
                })
            }

            function d(e, t, n) {
                var l;
                if ("" === e) {
                    c(n);
                    return
                }
                r.default.dispatch({
                    type: "UPDATE_HANG_STATUS_CUSTOM",
                    emoji: t,
                    status: e,
                    saveAsDefault: n
                }), u.default.track(s.AnalyticEvents.SET_HANG_STATUS, {
                    status_type: e,
                    channel_id: o.default.getVoiceChannelId(),
                    guild_id: null === (l = a.default.getChannel(o.default.getVoiceChannelId())) || void 0 === l ? void 0 : l.guild_id,
                    media_session_id: i.default.getMediaSessionId()
                })
            }

            function c(e) {
                var t;
                r.default.dispatch({
                    type: "CLEAR_HANG_STATUS",
                    saveAsDefault: e
                }), u.default.track(s.AnalyticEvents.CLEAR_HANG_STATUS, {
                    channel_id: o.default.getVoiceChannelId(),
                    guild_id: null === (t = a.default.getChannel(o.default.getVoiceChannelId())) || void 0 === t ? void 0 : t.guild_id,
                    media_session_id: i.default.getMediaSessionId()
                })
            }
        },
        735220: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HIGH_FIVE_EMOJIS: function() {
                    return r
                }
            }), n("330740"), n("996173"), n("47120"), n("357629");
            var r = new Set(["\uD83D\uDD90", "✋"])
        },
        732165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var r = n("87627"),
                a = n("29713"),
                i = n("21189"),
                o = n("227094"),
                u = n("778455"),
                s = n("661223"),
                l = n("312916"),
                d = {
                    enabled: !1
                },
                c = {},
                f = {},
                p = !1,
                h = function(e) {
                    (0, a._)(n, e);
                    var t = (0, u._)(n);

                    function n() {
                        return (0, r._)(this, n), t.apply(this, arguments)
                    }
                    var i = n.prototype;
                    return i.initialize = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d;
                        p = e.enabled
                    }, i.getWaitingHighFive = function(e, t) {
                        var n;
                        return null === (n = c[e]) || void 0 === n ? void 0 : n[t]
                    }, i.getCompletedHighFive = function(e, t) {
                        var n;
                        return null === (n = f[e]) || void 0 === n ? void 0 : n[t]
                    }, i.getEnabled = function() {
                        return p
                    }, i.getUserAgnosticState = function() {
                        return {
                            enabled: p
                        }
                    }, n
                }(s.default.DeviceSettingsStore);
            h.persistKey = "HighFiveStore";
            var v = new h(l.default, {
                HIGH_FIVE_QUEUE: function(e) {
                    var t = e.userId,
                        n = e.channelId,
                        r = e.emoji;
                    c[n] = (0, o._)((0, i._)({}, c[n]), {
                        [t]: r
                    })
                },
                HIGH_FIVE_REMOVE: function(e) {
                    var t = e.userId,
                        n = c[e.channelId];
                    if (null == n) return !1;
                    delete n[t]
                },
                HIGH_FIVE_SET_ENABLED: function(e) {
                    p = e.enabled
                },
                HIGH_FIVE_COMPLETE: function(e) {
                    var t, n = e.completingEmoji,
                        r = e.completingUserId,
                        a = e.waitingUserId,
                        u = e.channelId,
                        s = null !== (t = c[u]) && void 0 !== t ? t : {},
                        l = s[a];
                    if (delete s[a], null == l) return !1;
                    f[u] = (0, o._)((0, i._)({}, f[u]), {
                        [a]: [l, n],
                        [r]: [n, l]
                    })
                },
                HIGH_FIVE_COMPLETE_CLEAR: function(e) {
                    var t, n = e.firstUserId,
                        r = e.secondUserId,
                        a = null !== (t = f[e.channelId]) && void 0 !== t ? t : {};
                    delete a[n], delete a[r]
                }
            })
        },
        575301: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("757143"), n("301563");
            var r = n("735220"),
                a = /🏻|🏼|🏽|🏾|🏿|\uFE0F/g;

            function i(e) {
                return r.HIGH_FIVE_EMOJIS.has(e.replace(a, ""))
            }
        },
        254890: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isRTCConnectedInHub: function() {
                    return s
                },
                useConnectedInCurrentHub: function() {
                    return l
                }
            });
            var r = n("661223"),
                a = n("731865"),
                i = n("327271"),
                o = n("232733"),
                u = n("467006"),
                s = function() {
                    var e = o.default.getVoiceChannelId();
                    if (null == e) return !1;
                    var t = a.default.getChannel(e);
                    if (null == t) return !1;
                    var n = i.default.getGuild(t.getGuildId());
                    return null != n && n.hasFeature(u.GuildFeatures.HUB)
                },
                l = function(e) {
                    return (0, r.useStateFromStores)([o.default, a.default, i.default], function() {
                        var t = o.default.getVoiceChannelId();
                        if (null == t) return !1;
                        var n = a.default.getChannel(t);
                        if (null == n) return !1;
                        var r = i.default.getGuild(n.getGuildId());
                        return null != r && r.id === e
                    })
                }
        },
        21183: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addMessageReminders: function() {
                    return g
                },
                cleanupMessageReminders: function() {
                    return C
                },
                completeMessageReminders: function() {
                    return E
                },
                fetchAndUpdateSavedMessages: function() {
                    return I
                },
                toggleMessageReminders: function() {
                    return m
                },
                updateReminderDueAt: function() {
                    return _
                }
            });
            var r = n("21189"),
                a = n("227094");
            n("814951"), n("849202"), n("357629"), n("462848"), n("363505"), n("191489");
            var i = n("454836"),
                o = n("312916"),
                u = n("741312"),
                s = n("731865"),
                l = n("327271"),
                d = n("606929"),
                c = n("871831"),
                f = n("328470"),
                p = n("210002"),
                h = n("66725"),
                v = n("467006");

            function g(e, t) {
                f.default.track(v.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "adding",
                    rating: "".concat(p.default.getMessageReminders().length)
                }), T([(0, r._)({
                    messageId: e.id,
                    channelId: e.channel_id,
                    savedAt: new Date,
                    dueAt: t
                }, function(e) {
                    var t = s.default.getChannel(e.channel_id);
                    if (null == t) return null;
                    var n = l.default.getGuild(t.guild_id),
                        r = "",
                        a = (0, u.computeChannelName)(t, c.default, d.default, !0);
                    if (t.isPrivate()) r = a;
                    else if (t.isThread()) {
                        var i = s.default.getChannel(t.parent_id);
                        if (null == i) return null;
                        var o = (0, u.computeChannelName)(i, c.default, d.default, !0);
                        r = "".concat(o, " > ").concat(a)
                    } else r = a;
                    var f = "".concat(e.content.length > 0 ? e.content : "".concat(e.attachments.length, " attachments"));
                    return {
                        authorSummary: e.author.username,
                        authorId: e.author.id,
                        channelSummary: r,
                        messageSummary: f.length > 200 ? "".concat(f.slice(0, 197), "...") : f,
                        guildId: null == n ? void 0 : n.id
                    }
                }(e))], [])
            }

            function _(e, t) {
                f.default.track(v.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "updating_due_at",
                    rating: "".concat(p.default.getMessageReminders().length)
                });
                var n = p.default.getMessageReminders().find(function(t) {
                    return t.messageId === e
                });
                null != n && T([(0, a._)((0, r._)({}, n), {
                    savedAt: new Date,
                    dueAt: t
                })], [n])
            }

            function m(e, t) {
                f.default.track(v.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: t,
                    reason: "updating within the list",
                    rating: "".concat(p.default.getMessageReminders().length)
                }), o.default.dispatch({
                    type: "MESSAGE_REMINDER_TOGGLE",
                    messageId: e,
                    complete: t
                })
            }

            function E(e) {
                f.default.track(v.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "complete and clear immediately",
                    rating: "".concat(p.default.getMessageReminders().length)
                }), T([], p.default.getMessageReminders().filter(function(t) {
                    return t.messageId === e
                }))
            }

            function C() {
                f.default.track(v.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "clearing",
                    rating: "".concat(p.default.getMessageReminders().length)
                });
                var e = p.default.getMessageReminders();
                e.some(function(e) {
                    return e.complete
                }) && T([], e.filter(function(e) {
                    return e.complete
                }))
            }

            function S(e) {
                f.default.track(v.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "updated_from_server",
                    rating: "".concat(p.default.getMessageReminders().length)
                }), o.default.dispatch({
                    type: "SAVED_MESSAGES_UPDATE",
                    messages: e
                })
            }

            function T(e, t) {
                (0 !== e.length || 0 !== t.length) && i.default.post({
                    url: v.Endpoints.SAVED_MESSAGES,
                    body: {
                        added: e.map(h.savedMessageToServer),
                        removed: t.map(h.savedMessageToServer)
                    }
                }).then(function(e) {
                    S(e.body.saved_messages.map(h.savedMessageToClient))
                })
            }

            function I() {
                return p.default.recentlyFetched() ? Promise.resolve() : i.default.get({
                    url: v.Endpoints.SAVED_MESSAGES
                }).then(function(e) {
                    S(e.body.saved_messages.map(h.savedMessageToClient))
                })
            }
        },
        179455: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = (0, n("516086").createExperiment)({
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
            })
        },
        210002: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var r = n("87627"),
                a = n("29713"),
                i = n("21189"),
                o = n("227094"),
                u = n("778455");
            n("330740"), n("996173"), n("47120"), n("357629"), n("363505"), n("462848");
            var s = n("661223"),
                l = n("312916"),
                d = n("152551"),
                c = [],
                f = new Set,
                p = 0,
                h = function(e) {
                    (0, a._)(n, e);
                    var t = (0, u._)(n);

                    function n() {
                        return (0, r._)(this, n), t.apply(this, arguments)
                    }
                    var i = n.prototype;
                    return i.initialize = function() {
                        var e = this;
                        setInterval(function() {
                            e.emitChange()
                        }, 1 * d.default.Millis.MINUTE)
                    }, i.getMessageReminders = function() {
                        return c
                    }, i.isMessageReminder = function(e) {
                        var t = c.find(function(t) {
                            return t.messageId === e
                        });
                        return null != t && !t.complete
                    }, i.getOverdueMessageReminderCount = function() {
                        return c.filter(function(e) {
                            return null == e.dueAt || new Date > e.dueAt
                        }).length
                    }, i.recentlyFetched = function() {
                        return new Date().getTime() - p < 1 * d.default.Millis.MINUTE
                    }, i.hasSentNotification = function(e) {
                        return f.has(e)
                    }, i.getState = function() {
                        return {
                            messages: c
                        }
                    }, n
                }(s.default.Store);
            h.displayName = "MessageRemindersStore";
            var v = new h(l.default, {
                SAVED_MESSAGES_UPDATE: function(e) {
                    var t = e.messages;
                    p = new Date().getTime(), c = t.map(function(e) {
                        return (0, o._)((0, i._)({}, e), {
                            complete: !1
                        })
                    }), t.forEach(function(e) {
                        null != e.dueAt && e.dueAt > new Date && f.delete(e.messageId), null != e.dueAt && e.dueAt < new Date && f.add(e.messageId)
                    })
                },
                MESSAGE_REMINDER_TOGGLE: function(e) {
                    var t = e.messageId,
                        n = e.complete,
                        r = c.findIndex(function(e) {
                            return e.messageId === t
                        });
                    if (-1 === r) return !1;
                    c[r] = (0, o._)((0, i._)({}, c[r]), {
                        complete: n
                    })
                },
                MESSAGE_REMINDER_NOTIFIED: function(e) {
                    var t = e.messageId;
                    f.add(t)
                }
            })
        },
        66725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MESSAGE_REMINDER_DURATION_ITEMS: function() {
                    return s
                },
                savedMessageHasMetadata: function() {
                    return u
                },
                savedMessageToClient: function() {
                    return o
                },
                savedMessageToServer: function() {
                    return i
                }
            });
            var r = n("152551"),
                a = n("30175");

            function i(e) {
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

            function o(e) {
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

            function u(e) {
                return null != e.authorSummary && e.authorSummary.length > 0 && null != e.channelSummary && e.channelSummary.length > 0 && null != e.messageSummary && e.messageSummary.length > 0 && null != e.authorId && e.authorId.length > 0
            }
            var s = [{
                duration: r.default.Millis.HOUR,
                getLabel: function() {
                    return a.default.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR
                }
            }, {
                duration: 2 * r.default.Millis.HOUR,
                getLabel: function() {
                    return a.default.Messages.MESSAGE_REMINDERS_IN_TWO_HOURS
                }
            }, {
                duration: 4 * r.default.Millis.HOUR,
                getLabel: function() {
                    return a.default.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS
                }
            }, {
                duration: r.default.Millis.DAY,
                getLabel: function() {
                    return a.default.Messages.MESSAGE_REMINDERS_IN_ONE_DAY
                }
            }, {
                duration: r.default.Millis.WEEK,
                getLabel: function() {
                    return a.default.Messages.MESSAGE_REMINDERS_IN_ONE_WEEK
                }
            }]
        },
        70758: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("87627"),
                a = n("29713"),
                i = n("778455");
            n("330740"), n("996173"), n("47120"), n("357629"), n("633702"), n("266796"), n("363505"), n("69485"), n("653041");
            var o = n("31775"),
                u = n.n(o),
                s = n("963694"),
                l = n("328470"),
                d = n("467006"),
                c = new(function(e) {
                    (0, a._)(n, e);
                    var t = (0, i._)(n);

                    function n() {
                        var e;
                        return (0, r._)(this, n), e = t.apply(this, arguments), e.currentlyVisibleMessageTimers = {}, e.viewsInCurrentChannel = new Set, e.recentViewTimes = new(u())({
                            max: 500,
                            maxAge: 6e4
                        }), e.batchBuffer = [], e.batchTimerId = null, e.actions = {
                            CHANNEL_SELECT: function() {
                                return e.handleChannelSelect()
                            }
                        }, e
                    }
                    var o = n.prototype;
                    return o.handleMessageBecameVisible = function(e) {
                        var t = this,
                            n = e.messageId;
                        if (!(null != this.currentlyVisibleMessageTimers[n] || this.viewsInCurrentChannel.has(n))) {
                            var r = this.recentViewTimes.get(n);
                            if (!(null != r && Date.now() - r < 6e4)) {
                                var a = setTimeout(function() {
                                    delete t.currentlyVisibleMessageTimers[n], t.viewsInCurrentChannel.add(n), t.recentViewTimes.set(n, Date.now()), t.bufferViewTrack(e)
                                }, 1e3);
                                this.currentlyVisibleMessageTimers[n] = a
                            }
                        }
                    }, o.handleMessageLostVisibility = function(e) {
                        var t = this.currentlyVisibleMessageTimers[e];
                        null != t && (clearTimeout(t), delete this.currentlyVisibleMessageTimers[e])
                    }, o.handleMessageListVisibilityChange = function(e) {
                        var t = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var a, i = e[Symbol.iterator](); !(t = (a = i.next()).done); t = !0) {
                                var o = a.value;
                                this.handleMessageBecameVisible(o)
                            }
                        } catch (e) {
                            n = !0, r = e
                        } finally {
                            try {
                                !t && null != i.return && i.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                        var u = new Set(e.map(function(e) {
                                return e.messageId
                            })),
                            s = !0,
                            l = !1,
                            d = void 0;
                        try {
                            for (var c, f = Object.keys(this.currentlyVisibleMessageTimers)[Symbol.iterator](); !(s = (c = f.next()).done); s = !0) {
                                var p = c.value;
                                !u.has(p) && this.handleMessageLostVisibility(p)
                            }
                        } catch (e) {
                            l = !0, d = e
                        } finally {
                            try {
                                !s && null != f.return && f.return()
                            } finally {
                                if (l) throw d
                            }
                        }
                    }, o.handleChannelSelect = function() {
                        var e = !0,
                            t = !1,
                            n = void 0;
                        try {
                            for (var r, a = Object.values(this.currentlyVisibleMessageTimers)[Symbol.iterator](); !(e = (r = a.next()).done); e = !0) {
                                var i = r.value;
                                clearTimeout(i)
                            }
                        } catch (e) {
                            t = !0, n = e
                        } finally {
                            try {
                                !e && null != a.return && a.return()
                            } finally {
                                if (t) throw n
                            }
                        }
                        this.currentlyVisibleMessageTimers = {}, this.viewsInCurrentChannel.clear(), this.drainBuffer()
                    }, o.drainBuffer = function() {
                        var e = !0,
                            t = !1,
                            n = void 0;
                        try {
                            for (var r, a = this.batchBuffer[Symbol.iterator](); !(e = (r = a.next()).done); e = !0) {
                                var i = r.value;
                                l.default.track(d.AnalyticEvents.ANNOUNCEMENT_MESSAGE_VIEWED, {
                                    message_id: i.messageId,
                                    channel_id: i.channelId,
                                    guild_id: i.guildId,
                                    source_channel_id: i.sourceChannelId,
                                    source_guild_id: i.sourceGuildId
                                })
                            }
                        } catch (e) {
                            t = !0, n = e
                        } finally {
                            try {
                                !e && null != a.return && a.return()
                            } finally {
                                if (t) throw n
                            }
                        }
                        this.batchBuffer = [], null != this.batchTimerId && (clearTimeout(this.batchTimerId), this.batchTimerId = null)
                    }, o.bufferViewTrack = function(e) {
                        var t = this;
                        this.batchBuffer.length >= 10 && this.drainBuffer(), this.batchBuffer.push(e), null == this.batchTimerId && (this.batchTimerId = setTimeout(function() {
                            return t.drainBuffer()
                        }, 2e3))
                    }, n
                }(s.default))
        },
        637023: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return W
                }
            });
            var r, a = n("87627"),
                i = n("29713"),
                o = n("778455");
            n("814951"), n("573788"), n("996173"), n("47120"), n("357629");
            var u = n("266067"),
                s = n("388684"),
                l = n("986329"),
                d = n("312916"),
                c = n("992888"),
                f = n("389920"),
                p = n("841708"),
                h = n("963694"),
                v = n("237091"),
                g = n("706608"),
                _ = n("605369"),
                m = n("775822"),
                E = n("475232"),
                C = n("731865"),
                S = n("327271"),
                T = n("417223"),
                I = n("232733"),
                A = n("632706"),
                y = n("467006"),
                b = n("551835"),
                N = n("30175"),
                L = new s.default("MessageManager");

            function M(e) {
                var t = e.guildId,
                    n = e.channelId,
                    a = e.messageId,
                    i = e.forceFetch,
                    o = e.isPreload,
                    u = e.jumpType,
                    s = e.skipLocalFetch,
                    d = e.logFailures;
                if (null == n) {
                    d && L.log("Skipping fetch because channelId is null");
                    return
                }
                if ((0, b.isStaticChannelRoute)(n)) {
                    d && L.log("Skipping fetch because channelId is a static route");
                    return
                }
                var c = C.default.getChannel(n);
                if ((null == c ? void 0 : c.type) === y.ChannelTypes.GUILD_STORE || (null == c ? void 0 : c.type) != null && y.ChannelTypesSets.GUILD_THREADS_ONLY.has(c.type)) {
                    d && L.log("Skipping fetch because channel is a forum/store");
                    return
                }
                var h = v.default.getOrCreate(n);
                null != h.jumpTargetId && null == a && (h = h.mutate({
                    jumpTargetId: null,
                    jumped: !1,
                    jumpType: p.JumpTypes.ANIMATED
                }), v.default.commit(h)), null != h.focusTargetId && null == a && (h = h.mutate({
                    focusTargetId: null
                }), v.default.commit(h));
                var _ = i;
                if (!o || g.default.isConnected() || h.loadingMore ? h.loadingMore || h.ready && !h.cached ? null != a ? _ = !0 : d && L.log("Skipping fetch because no other conditions matched") : null == t || null != S.default.getGuild(t) ? _ = !0 : d && L.log("Skipping fetch we are connected and have loaded messages") : _ = !0, _) {
                    if (v.default.commit(h.mutate({
                            loadingMore: !0
                        })), null != a) f.default.jumpToMessage({
                        channelId: n,
                        messageId: a,
                        flash: !0,
                        isPreload: o,
                        skipLocalFetch: s,
                        jumpType: u
                    });
                    else if ((null == c ? void 0 : c.isThread()) && function(e) {
                            if (T.default.hasOpenedThread(e)) return !1;
                            if (null == r) {
                                var t;
                                r = null !== (t = l.default.get(D, {})) && void 0 !== t ? t : {}
                            }
                            if (e in r) return !1;
                            r[e] = Date.now();
                            var n = Date.now() - 7776e6;
                            for (var a in r) r[a] < n && delete r[a];
                            return l.default.set(D, r), !0
                        }(n)) L.log("Jumping to start of thread ".concat(c.id)), f.default.fetchMessages({
                        channelId: n,
                        limit: y.MAX_MESSAGES_PER_CHANNEL,
                        jump: {
                            messageId: n,
                            flash: !1
                        },
                        isPreload: o,
                        skipLocalFetch: s
                    });
                    else if ((null == c ? void 0 : c.isThread()) && T.default.hasTrackedUnread(c.id) && !h.ready) {
                        var m = T.default.getTrackedAckMessageId(c.id);
                        L.log("Jumping to most recent message in thread ".concat(c.id, " - ").concat(m)), f.default.fetchMessages({
                            channelId: n,
                            limit: y.MAX_MESSAGES_PER_CHANNEL,
                            jump: {
                                messageId: m,
                                flash: !1,
                                offset: 1
                            },
                            isPreload: o,
                            skipLocalFetch: s
                        })
                    } else f.default.fetchMessages({
                        channelId: n,
                        limit: y.MAX_MESSAGES_PER_CHANNEL,
                        isPreload: o,
                        skipLocalFetch: s,
                        jump: {
                            jumpType: p.JumpTypes.ANIMATED
                        }
                    })
                }
            }
            var D = "viewedThreadIds";

            function O() {
                var e = I.default.getChannelId();
                if (null != e) {
                    var t = C.default.getChannel(e);
                    if (null != t) {
                        var n, r = (0, u.matchPath)(location.pathname, {
                            path: y.Routes.CHANNEL(":guild", ":channel", ":message"),
                            exact: !0
                        });
                        M({
                            guildId: t.getGuildId(),
                            channelId: t.id,
                            messageId: null == r ? void 0 : null === (n = r.params) || void 0 === n ? void 0 : n.message
                        }), P(t.getGuildId(), t.id)
                    }
                }
            }

            function R() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.isPreload,
                    n = e.skipLocalFetch,
                    r = e.logFailures,
                    a = I.default.getChannelId();
                if (null != a) {
                    var i = C.default.getChannel(a);
                    null != i ? ((0, m.isTextChannel)(i.type) ? M({
                        guildId: i.getGuildId(),
                        channelId: i.id,
                        isPreload: t,
                        skipLocalFetch: n,
                        logFailures: r
                    }) : r && L.log("Skipping fetch because the selected channel is not a text channel"), P(i.getGuildId(), i.id)) : r && L.log("Skipping fetch because channel is null")
                } else r && L.log("Skipping fetch because there is no selected channel")
            }

            function w(e) {
                var t = e.guildId,
                    n = e.channelId,
                    r = e.messageId;
                M({
                    guildId: t,
                    channelId: n,
                    messageId: r,
                    jumpType: e.jumpType
                }), P(t, n)
            }

            function x(e) {
                var t = e.guildId;
                M({
                    guildId: t,
                    channelId: e.channelId
                })
            }

            function P(e, t) {
                var n = E.default.getCurrentSidebarChannelId(t);
                null != n && M({
                    guildId: e,
                    channelId: n,
                    messageId: E.default.getCurrentSidebarMessageId(t)
                })
            }

            function U() {
                var e = I.default.getChannelId(),
                    t = A.default.getGuildId();
                if (null != t && null != e) {
                    var n = E.default.getSidebarState(e);
                    (null == n ? void 0 : n.type) !== _.SidebarType.VIEW_CHANNEL && P(t, e)
                }
            }

            function B(e) {
                var t = e.guildId,
                    n = e.channelId;
                e.context === y.CURRENT_APP_CONTEXT && (M({
                    guildId: t,
                    channelId: n
                }), P(t, n))
            }

            function V(e) {
                var t = e.channel,
                    n = e.messageId,
                    r = t.guild_id;
                null != r && I.default.getChannelId(r) === t.id && M({
                    guildId: r,
                    channelId: t.id,
                    messageId: n
                })
            }

            function j(e) {
                var t = e.channelId;
                f.default.fetchMessages({
                    channelId: t,
                    limit: y.MAX_MESSAGES_PER_CHANNEL
                })
            }

            function k(e) {
                var t = e.response;
                if (null == t || null == t.body) return null;
                if (t.body.code === y.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
                    var n = t.body.retry_after;
                    null != n && c.default.show({
                        title: N.default.Messages.RATE_LIMITED,
                        body: N.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
                            retryAfterMinutes: Math.ceil(n / 60)
                        })
                    })
                }
            }
            var F = {};

            function G(e) {
                var t, n = e.channelId,
                    r = e.jump,
                    a = e.isStale,
                    i = e.isPreview;
                if (void 0 === i || !i) {
                    var o = null !== (t = F[n]) && void 0 !== t ? t : 0;
                    if (!(Date.now() - o < 1e4)) {
                        F[n] = Date.now();
                        var u = I.default.getChannelId(),
                            s = E.default.getCurrentSidebarChannelId(u),
                            l = n === u || n === s;
                        a && g.default.isConnected() && l && f.default.fetchMessages({
                            channelId: n,
                            limit: y.MAX_MESSAGES_PER_CHANNEL,
                            jump: r
                        })
                    }
                }
            }

            function H(e) {
                var t = e.channelId,
                    n = e.messageRecord;
                null != n && d.default.dispatch({
                    type: "MESSAGE_SEND_FAILED",
                    channelId: t,
                    messageId: n.id
                })
            }

            function K(e) {
                if ("active" !== e.state) return !1;
                var t = I.default.getChannelId();
                if (null == t) return !1;
                f.default.fetchNewLocalMessages(t, y.MAX_MESSAGES_PER_CHANNEL)
            }
            var W = new(function(e) {
                (0, i._)(n, e);
                var t = (0, o._)(n);

                function n() {
                    var e;
                    return (0, a._)(this, n), e = t.apply(this, arguments), e.fetchMessages = M, e.loadSelectedChannelIfNecessary = R, e.stores = new Map().set(E.default, U), e.actions = {
                        APP_STATE_UPDATE: K,
                        OVERLAY_INITIALIZE: O,
                        CHANNEL_SELECT: w,
                        VOICE_CHANNEL_SELECT: x,
                        THREAD_CREATE: V,
                        THREAD_LIST_SYNC: function() {
                            return R()
                        },
                        CHANNEL_CREATE: V,
                        CHANNEL_PRELOAD: B,
                        THREAD_CREATE_LOCAL: j,
                        GUILD_CREATE: function() {
                            return R()
                        },
                        MESSAGE_END_EDIT: k,
                        LOAD_MESSAGES_SUCCESS: G,
                        UPLOAD_FAIL: H,
                        CHANNEL_DELETE: function() {
                            return R()
                        },
                        THREAD_DELETE: function() {
                            return R()
                        }
                    }, e
                }
                var r = n.prototype;
                return r._initialize = function() {
                    d.default.subscribe("CONNECTION_OPEN", O)
                }, r._terminate = function() {
                    d.default.unsubscribe("CONNECTION_OPEN", O)
                }, n
            }(h.default))
        },
        532477: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hasVoiceChannelActivityNotifsEnabled: function() {
                    return s
                },
                useVoiceActivityNotificationSettingsExperiment: function() {
                    return u
                }
            });
            var r = n("516086"),
                a = n("467006"),
                i = (0, r.createExperiment)({
                    kind: "user",
                    id: "2023-11_voice_activity_notification_user",
                    label: "Voice Activity Notifications for User",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Voice Activity Notifications are enabled for user",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                o = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-11_voice_activity_notification_guild",
                    label: "General Voice Channel Notifications for Guild",
                    defaultConfig: {
                        voiceChannelActivityNotifsEnabled: !1
                    },
                    treatments: [{
                        id: 2,
                        label: "Deadchat notifs disabled, voice channel activity notifs enabled",
                        config: {
                            voiceChannelActivityNotifsEnabled: !0
                        }
                    }]
                });

            function u(e) {
                var t, n = o.useExperiment({
                        location: "useVoiceActivityNotificationSettingsExperiment",
                        guildId: null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : ""
                    }, {
                        disable: (null == e ? void 0 : e.type) !== a.ChannelTypes.GUILD_VOICE,
                        autoTrackExposure: !1
                    }).voiceChannelActivityNotifsEnabled,
                    r = i.useExperiment({
                        location: "useVoiceActivityNotificationSettingsExperiment"
                    }, {
                        disable: (null == e ? void 0 : e.type) !== a.ChannelTypes.GUILD_VOICE || !n,
                        autoTrackExposure: !0
                    }).enabled;
                return (null == e ? void 0 : e.type) === a.ChannelTypes.GUILD_VOICE && n && r
            }

            function s(e) {
                var t;
                return o.getCurrentConfig({
                    guildId: null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : "",
                    location: "hasVoiceChannelActivityNotifsEnabled"
                }).voiceChannelActivityNotifsEnabled
            }
        },
        397341: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                experiment: function() {
                    return r
                },
                getPomeloEligibility: function() {
                    return i
                },
                usePomeloEligibility: function() {
                    return a
                }
            });
            var r = (0, n("516086").createExperiment)({
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
                a = function() {
                    return r.useExperiment({
                        location: "faf26d_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled
                },
                i = function() {
                    return r.getCurrentConfig({
                        location: "faf26d_2"
                    }, {
                        autoTrackExposure: !1
                    }).enabled
                }
        },
        234450: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useActualStageSpeakerCount: function() {
                    return c
                },
                useSortedRequestToSpeakParticipants: function() {
                    return d
                },
                useStageParticipants: function() {
                    return s
                },
                useStageParticipantsCount: function() {
                    return l
                }
            });
            var r = n("154005");
            n("462848"), n("357629");
            var a = n("661223"),
                i = n("689028"),
                o = n("65435"),
                u = n("146433");

            function s(e, t) {
                return (0, r._)((0, a.useStateFromStores)([o.default], function() {
                    return [o.default.getMutableParticipants(e, t), o.default.getParticipantsVersion(e)]
                }, [e, t], i.isVersionEqual), 1)[0]
            }

            function l(e, t) {
                return (0, a.useStateFromStores)([o.default], function() {
                    return o.default.getParticipantCount(e, t)
                }, [e, t])
            }

            function d(e) {
                return (0, r._)((0, a.useStateFromStores)([o.default], function() {
                    return [o.default.getMutableRequestToSpeakParticipants(e), o.default.getRequestToSpeakParticipantsVersion(e)]
                }, [e], i.isVersionEqual), 1)[0]
            }

            function c(e) {
                return (0, a.useStateFromStores)([o.default], function() {
                    return o.default.getMutableParticipants(e, u.StageChannelParticipantNamedIndex.SPEAKER).filter(function(e) {
                        return e.type === u.StageChannelParticipantTypes.VOICE
                    }).length
                }, [e])
            }
        },
        118584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                },
                shouldShowStageMusicMuteButton: function() {
                    return I
                },
                useShowStageMusicMuteButton: function() {
                    return T
                }
            });
            var r = n("87627"),
                a = n("29713"),
                i = n("778455");
            n("69485"), n("357629");
            var o = n("661223"),
                u = n("963694"),
                s = n("731865"),
                l = n("386130"),
                d = n("232733"),
                c = n("642174"),
                f = n("552091"),
                p = n("65435"),
                h = n("234450"),
                v = n("146433"),
                g = n("120637"),
                _ = n("925427"),
                m = function(e) {
                    return e / 400
                },
                E = !1,
                C = (0, f.createSound)("stage_waiting", "stage_waiting", m(l.default.getOutputVolume()));

            function S() {
                var e = d.default.getVoiceChannelId();
                if (null == e) {
                    C.stop(), E = !1;
                    return
                }
                var t = s.default.getChannel(e);
                if (!(null == t ? void 0 : t.isGuildStageVoice()) || l.default.isSelfDeaf()) {
                    C.stop(), E = !1;
                    return
                }
                if (_.default.shouldPlay()) {
                    C.volume = m(l.default.getOutputVolume()), C.loop(), E = !0;
                    return
                }
                if (g.default.isLive(e)) {
                    C.stop(), E = !1;
                    return
                }
                if (_.default.isMuted()) {
                    C.pause(), E = !1;
                    return
                }
                var n = null != Object.values(c.default.getVoiceStatesForChannel(e)).find(function(e) {
                    return !e.suppress && !e.isVoiceMuted()
                });
                n || E ? n && (C.pause(), E = !1) : (C.volume = m(l.default.getOutputVolume()), C.loop(), E = !0)
            }

            function T(e) {
                var t = (0, o.useStateFromStores)([d.default], function() {
                        return d.default.getVoiceChannelId() === e
                    }),
                    n = null != (0, h.useStageParticipants)(e, v.StageChannelParticipantNamedIndex.SPEAKER).find(function(e) {
                        return !e.voiceState.isVoiceMuted()
                    }),
                    r = (0, o.useStateFromStores)([g.default], function() {
                        return g.default.getStageInstanceByChannel(e)
                    });
                return t && null == r && !n
            }

            function I(e) {
                var t = d.default.getVoiceChannelId() === e,
                    n = null != p.default.getMutableParticipants(e, v.StageChannelParticipantNamedIndex.SPEAKER).find(function(e) {
                        return !e.voiceState.isVoiceMuted()
                    }),
                    r = g.default.getStageInstanceByChannel(e);
                return t && null == r && !n
            }
            var A = new(function(e) {
                (0, a._)(n, e);
                var t = (0, i._)(n);

                function n() {
                    var e;
                    return (0, r._)(this, n), e = t.apply(this, arguments), e.actions = {
                        VOICE_CHANNEL_SELECT: e.handleVoiceChannelSelect,
                        LOGOUT: e.handleLogout,
                        STAGE_MUSIC_MUTE: e.handleMute,
                        STAGE_MUSIC_PLAY: e.handlePlay,
                        VOICE_STATE_UPDATES: e.handleVoiceStateUpdates,
                        AUDIO_SET_OUTPUT_VOLUME: e.handleSetOutputVolume,
                        AUDIO_TOGGLE_SELF_DEAF: e.handleToggleSelfDeaf
                    }, e
                }
                var o = n.prototype;
                return o.handleVoiceChannelSelect = function(e) {
                    var t = e.channelId;
                    if (null != t) {
                        var n = s.default.getChannel(t);
                        (null == n ? void 0 : n.isGuildStageVoice()) ? S(): (C.stop(), E = !1)
                    } else C.stop(), E = !1
                }, o.handleLogout = function() {
                    C.stop(), E = !1
                }, o.handlePlay = function(e) {
                    e.play ? S() : (C.pause(), E = !1)
                }, o.handleMute = function(e) {
                    e.muted ? (C.pause(), E = !1) : S()
                }, o.handleVoiceStateUpdates = function() {
                    S()
                }, o.handleSetOutputVolume = function(e) {
                    var t = e.volume;
                    C.volume = m(t)
                }, o.handleToggleSelfDeaf = function() {
                    S()
                }, n
            }(u.default))
        },
        925427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("87627"),
                a = n("29713"),
                i = n("778455"),
                o = n("661223"),
                u = n("312916"),
                s = !1,
                l = !1,
                d = function(e) {
                    (0, a._)(n, e);
                    var t = (0, i._)(n);

                    function n() {
                        return (0, r._)(this, n), t.apply(this, arguments)
                    }
                    var o = n.prototype;
                    return o.initialize = function(e) {
                        null != e && (s = e)
                    }, o.isMuted = function() {
                        return s
                    }, o.shouldPlay = function() {
                        return l
                    }, o.getUserAgnosticState = function() {
                        return s
                    }, n
                }(o.default.DeviceSettingsStore);
            d.displayName = "StageMusicStore", d.persistKey = "StageMusicStore";
            var c = new d(u.default, {
                STAGE_MUSIC_MUTE: function(e) {
                    s = e.muted, l = !1
                },
                STAGE_MUSIC_PLAY: function(e) {
                    l = e.play
                },
                VOICE_CHANNEL_SELECT: function() {
                    l = !1
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
            var r = n("735250");
            n("470079");
            var a = n("652329"),
                i = function(e) {
                    var t = e.children;
                    return e.shouldAnimate ? (0, r.jsx)("div", {
                        className: a.outerContainer,
                        children: (0, r.jsx)("div", {
                            className: a.innerContainer,
                            children: t
                        })
                    }) : t
                }
        },
        832016: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("735250");
            n("470079");
            var a = n("661223"),
                i = n("24135"),
                o = n("329420"),
                u = n("546435"),
                s = n("422557"),
                l = n("293377"),
                d = n("124599"),
                c = n("477815");

            function f(e) {
                var t = e.children,
                    n = (0, a.useStateFromStores)([l.default], function() {
                        return l.default.theme
                    }),
                    f = (0, s.useInMainTabsExperiment)(),
                    p = (0, a.useStateFromStores)([u.default], function() {
                        return u.default.gradientPreset
                    }),
                    h = (0, a.useStateFromStoresObject)([o.default], function() {
                        return {
                            saturation: o.default.saturation,
                            contrastMode: o.default.contrastMode
                        }
                    }),
                    v = h.saturation,
                    g = h.contrastMode,
                    _ = 0;
                return f && (_ = (0, i.setThemeFlag)(_, i.ThemeContextFlags.MOBILE_REDESIGN_ENABLED)), null != p && f && (_ = p.theme === c.ThemeTypes.LIGHT ? (0, i.setThemeFlag)(_, i.ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED) : (0, i.setThemeFlag)(_, i.ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED)), g === d.AccessibilityContrastMode.REDUCED ? _ = (0, i.setThemeFlag)(_, i.ThemeContextFlags.REDUCED_CONTRAST_ENABLED) : g === d.AccessibilityContrastMode.INCREASED && (_ = (0, i.setThemeFlag)(_, i.ThemeContextFlags.INCREASED_CONTRAST_ENABLED)), 1 !== v && (_ = (0, i.setThemeFlag)(_, i.ThemeContextFlags.REDUCE_SATURATION_ENABLED)), (0, r.jsx)(i.RootThemeContextProvider, {
                    theme: n,
                    flags: _,
                    children: t
                })
            }
        },
        506992: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                },
                getVideoPermission: function() {
                    return s
                }
            });
            var r = n("661223"),
                a = n("188699"),
                i = n("327271"),
                o = n("197905");

            function u(e) {
                return (0, r.useStateFromStores)([i.default, o.default], function() {
                    return e.isPrivate() || (0, a.canStreamInChannel)(e, i.default, o.default, !1)
                }, [e])
            }

            function s(e) {
                return e.isPrivate() || (0, a.canStreamInChannel)(e, i.default, o.default, !1)
            }
        },
        781799: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getVideoButtonLabel: function() {
                    return i
                }
            });
            var r = n("467006"),
                a = n("30175");

            function i(e) {
                var t = e.enabled,
                    n = e.join,
                    i = e.channel,
                    o = e.cameraUnavailable,
                    u = e.hasPermission,
                    s = e.channelLimit,
                    l = void 0 === s ? -1 : s,
                    d = e.channelLimitReached,
                    c = t ? a.default.Messages.CAMERA_OFF : a.default.Messages.CAMERA_ON;
                return n && (c = (null == i ? void 0 : i.isManaged()) || !(null == i ? void 0 : i.isPrivate()) ? a.default.Messages.CONNECT_TO_VIDEO : a.default.Messages.JOIN_VIDEO_CALL), o && (c = a.default.Messages.CAMERA_UNAVAILABLE), !u && (c = a.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE), void 0 !== d && d && !t && (c = (null == i ? void 0 : i.isGuildStageVoice()) ? l >= r.MAX_STAGE_VIDEO_USER_LIMIT_TIER3 ? a.default.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED_MAX : a.default.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED : a.default.Messages.CAMERA_DISABLED_LIMIT_REACHED.format({
                    limit: l
                })), c
            }
        },
        43286: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("735250"),
                a = n("470079"),
                i = n("803997"),
                o = n.n(i),
                u = n("194236"),
                s = a.forwardRef(function(e, t) {
                    var n = e.children,
                        a = e.className,
                        i = e.style,
                        s = e.noBorder,
                        l = e.participantUserId;
                    return (0, r.jsx)("div", {
                        className: o()(a, u.tile, {
                            [u.noBorder]: void 0 !== s && s
                        }),
                        style: i,
                        ref: t,
                        "data-selenium-video-tile": l,
                        children: n
                    })
                })
        },
        976028: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CallTileCTA: function() {
                    return c
                }
            });
            var r = n("21189"),
                a = n("227094"),
                i = n("261047"),
                o = n("735250");
            n("470079");
            var u = n("803997"),
                s = n.n(u),
                l = n("974328"),
                d = n("433755");

            function c(e) {
                var t = e.children,
                    n = e.onClick,
                    u = e.className,
                    c = e.tooltip;
                return (0, o.jsx)(l.Tooltip, {
                    text: c,
                    children: function(e) {
                        var c = e.onClick,
                            f = (0, i._)(e, ["onClick"]);
                        return (0, o.jsx)(l.Button, (0, a._)((0, r._)({}, f), {
                            onClick: function(e) {
                                null == n || n(e), null == c || c()
                            },
                            innerClassName: d.buttonReset,
                            color: s()(d.cta, u),
                            size: l.Button.Sizes.MIN,
                            children: t
                        }))
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
                    return l
                }
            }), n("633702"), n("266796"), n("814951");
            var r = n("735250");
            n("470079");
            var a = n("803997"),
                i = n.n(a),
                o = n("974328"),
                u = n("164323"),
                s = n("420798");

            function l(e) {
                return e < 400 ? "small" : e < 1e3 ? "medium" : "large"
            }

            function d(e) {
                var t = e.onCTAClick,
                    n = e.callToAction,
                    a = e.header,
                    l = e.description,
                    d = e.size,
                    c = e.className,
                    f = e.artURL,
                    p = e.noArt,
                    h = e.selected;
                return (0, r.jsxs)(u.default, {
                    className: c,
                    justify: u.default.Justify.CENTER,
                    align: u.default.Align.CENTER,
                    direction: u.default.Direction.VERTICAL,
                    style: {
                        padding: 4
                    },
                    children: [!(void 0 !== p && p) && null != f && (0, r.jsx)("div", {
                        className: i()(s.art, s[d]),
                        style: {
                            backgroundImage: "url(".concat(f, ")")
                        }
                    }), null != a ? (0, r.jsx)(o.Text, {
                        color: "none",
                        variant: "text-md/semibold",
                        className: s.header,
                        children: a
                    }) : null, null != l ? (0, r.jsx)(o.Text, {
                        color: "none",
                        className: s.description,
                        variant: "text-sm/medium",
                        children: l
                    }) : null, void 0 !== h && h || null == n ? null : (0, r.jsx)(o.Button, {
                        className: s.outerButton,
                        size: o.Button.Sizes.NONE,
                        color: o.Button.Colors.WHITE,
                        look: o.Button.Looks.BLANK,
                        innerClassName: s.button,
                        onClick: function(e) {
                            e.stopPropagation(), null == t || t(e)
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
                    return I
                },
                useOtherStreams: function() {
                    return T
                }
            }), n("462848"), n("357629"), n("363505"), n("814951");
            var r = n("735250");
            n("470079");
            var a = n("661223"),
                i = n("974328"),
                o = n("933439"),
                u = n("901365"),
                s = n("84625"),
                l = n("991095"),
                d = n("66214"),
                c = n("311545"),
                f = n("386130"),
                p = n("871831"),
                h = n("930232"),
                v = n("450636"),
                g = n("137079"),
                _ = n("107888"),
                m = n("501769"),
                E = n("467006"),
                C = n("389570"),
                S = n("30175");

            function T(e, t, n) {
                var r = (0, a.useStateFromStores)([u.default], function() {
                        return u.default.getSelectedParticipantId(e.id)
                    }),
                    i = (0, a.useStateFromStores)([c.default], function() {
                        return null != r ? c.default.getActiveStreamForStreamKey(r) : null
                    }, [r]);
                return (0, a.useStateFromStoresArray)([p.default], function() {
                    var r = n.filter(function(e) {
                        return e.ownerId !== (null == t ? void 0 : t.id)
                    }).map(function(t) {
                        return {
                            stream: t,
                            username: _.default.getName(e.getGuildId(), e.id, p.default.getUser(t.ownerId))
                        }
                    });
                    return 1 === r.length && r[0].stream.ownerId === (null == i ? void 0 : i.ownerId) ? [] : r
                }, [e, i, n, t])
            }

            function I(e) {
                var t, n = e.channel,
                    a = e.currentUser,
                    u = e.activeStreams,
                    c = e.hideSelfOptions,
                    p = e.showReportOption,
                    _ = e.handleGoLive,
                    I = e.onClose,
                    A = e.onSelect,
                    y = e.appContext,
                    b = void 0 === y ? E.AppContext.APP : y,
                    N = f.default.supports(C.Features.DESKTOP_CAPTURE_APPLICATIONS),
                    L = null !== (t = u.find(function(e) {
                        return e.ownerId === (null == a ? void 0 : a.id)
                    })) && void 0 !== t ? t : null,
                    M = T(n, a, u),
                    D = (0, l.default)(L, b),
                    O = (0, s.default)(L, b, E.NOOP_NULL),
                    R = null == L ? (0, r.jsx)(i.MenuItem, {
                        id: "share-your-screen",
                        label: S.default.Messages.SHARE_YOUR_SCREEN,
                        icon: h.default,
                        action: _
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [m.isPlatformEmbedded ? (0, r.jsx)(i.MenuItem, {
                            id: "stream-settings",
                            label: S.default.Messages.SCREENSHARE_STREAM_QUALITY,
                            children: D
                        }) : null, void 0 !== p && p ? O : null, N ? (0, r.jsx)(i.MenuItem, {
                            id: "change-windows",
                            label: S.default.Messages.SCREENSHARE_CHANGE_WINDOWS,
                            icon: h.default,
                            action: _
                        }) : null, (0, r.jsx)(i.MenuItem, {
                            id: "stop-streaming",
                            label: S.default.Messages.STOP_STREAMING,
                            icon: v.default,
                            action: function() {
                                return (0, d.default)(L)
                            }
                        })]
                    });
                return (0, r.jsx)(o.default, {
                    section: E.AnalyticsSections.CONTEXT_MENU,
                    children: (0, r.jsxs)(i.Menu, {
                        onSelect: A,
                        navId: "manage-streams",
                        onClose: I,
                        "aria-label": null != L ? S.default.Messages.STOP_STREAMING : S.default.Messages.SHARE_YOUR_SCREEN,
                        children: [(0, r.jsx)(i.MenuGroup, {
                            children: M.map(function(e) {
                                var t = e.stream,
                                    n = e.username;
                                return (0, r.jsx)(i.MenuItem, {
                                    id: t.ownerId,
                                    label: S.default.Messages.STOP_WATCHING_USER.format({
                                        username: n
                                    }),
                                    icon: g.default,
                                    action: function() {
                                        return (0, d.default)(t)
                                    }
                                }, "manage-stream-menu".concat(t.ownerId))
                            })
                        }), void 0 !== c && c ? null : R]
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
            var r = n("735250"),
                a = n("470079"),
                i = n("661223"),
                o = n("116395"),
                u = n("188304"),
                s = n("731865"),
                l = n("240108"),
                d = n("30175"),
                c = n("340109");

            function f(e) {
                var t = e.stream,
                    n = e.width,
                    f = e.noArt,
                    p = e.selected,
                    h = (0, i.useStateFromStores)([s.default], function() {
                        return s.default.getChannel(t.channelId)
                    });
                return a.useEffect(function() {
                    (null == h ? void 0 : h.isGuildStageVoice()) && (0, o.closeStream)((0, u.encodeStreamKey)(t), !1)
                }, []), (0, r.jsx)(l.default, {
                    artURL: c,
                    noArt: void 0 !== f && f,
                    selected: void 0 !== p && p,
                    size: (0, l.getSizeForWidth)(n),
                    header: d.default.Messages.STREAM_ENDED,
                    onCTAClick: function() {
                        return (0, o.closeStream)((0, u.encodeStreamKey)(t))
                    },
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
            var r = n("735250");
            n("470079");
            var a = n("116395"),
                i = n("188304"),
                o = n("312630"),
                u = n("240108"),
                s = n("467006"),
                l = n("30175"),
                d = n("66737");

            function c(e) {
                var t = e.stream,
                    n = e.width,
                    c = e.selected,
                    f = e.noArt;
                return (0, r.jsx)(u.default, {
                    artURL: d,
                    header: l.default.Messages.STREAM_FAILED_TITLE,
                    size: (0, u.getSizeForWidth)(n),
                    noArt: void 0 !== f && f,
                    selected: void 0 !== c && c,
                    description: l.default.Messages.STREAM_FAILED_DESCRIPTION.format({
                        helpUrl: o.default.getArticleURL(s.HelpdeskArticles.STREAM_FAILED)
                    }),
                    onCTAClick: function() {
                        return (0, a.closeStream)((0, i.encodeStreamKey)(t))
                    },
                    callToAction: l.default.Messages.CLOSE_STREAM
                })
            }
        },
        350305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("357629");
            var r = n("735250");
            n("470079");
            var a = n("803997"),
                i = n.n(a),
                o = n("661223"),
                u = n("974328"),
                s = n("116395"),
                l = n("311545"),
                d = n("262047"),
                c = n("834271"),
                f = n("976028"),
                p = n("240108"),
                h = n("30175"),
                v = n("363283"),
                g = n("978538");

            function _(e) {
                var t = e.participant,
                    n = e.width,
                    a = e.noArt,
                    _ = e.selected,
                    m = void 0 !== _ && _,
                    E = n < 195,
                    C = (0, o.useStateFromStores)([l.default, d.default], function() {
                        return l.default.getAllActiveStreams().some(function(e) {
                            return e.ownerId !== d.default.getId()
                        })
                    });
                return (0, r.jsx)("div", {
                    className: i()(v.content, v.streamHidden, {
                        [v.small]: E
                    }),
                    children: (0, r.jsx)(p.default, {
                        className: v.streamHiddenEmptyState,
                        artURL: g,
                        noArt: void 0 !== a && a,
                        selected: m,
                        size: (0, p.getSizeForWidth)(n),
                        header: E ? null : h.default.Messages.STREAM_HIDDEN,
                        description: m ? null : (0, r.jsxs)("div", {
                            className: i()(v.streamHiddenCTA, {
                                [v.largePaddingTop]: !E
                            }),
                            children: [(0, r.jsx)(f.CallTileCTA, {
                                isSmall: E,
                                children: (0, r.jsx)(u.Text, {
                                    variant: E ? "text-sm/semibold" : "text-md/semibold",
                                    color: "none",
                                    children: n < 175 ? h.default.Messages.WATCH : h.default.Messages.WATCH_STREAM
                                })
                            }), C ? (0, r.jsx)(f.CallTileCTA, {
                                className: v.addCTA,
                                tooltip: h.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
                                onClick: function(e) {
                                    e.stopPropagation(), (0, s.watchStream)(t.stream, {
                                        forceMultiple: !0
                                    })
                                },
                                isSmall: E,
                                children: (0, r.jsx)(c.default, {
                                    className: v.addStreamIcon
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
                    return f
                }
            });
            var r = n("356056"),
                a = n("21189"),
                i = n("227094"),
                o = n("324415");
            n("191489"), n("357629");
            var u = n("735250");
            n("470079");
            var s = n("974328"),
                l = n("386130"),
                d = n("389570"),
                c = n("30175");

            function f(e) {
                l.default.supports(d.Features.VIDEO) ? (0, s.openModalLazy)((0, r._)(function() {
                    var t;
                    return (0, o._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, n.el("503122@1098:1134").then(n.bind(n, "312533"))];
                            case 1:
                                return t = r.sent().default, [2, function(n) {
                                    return (0, u.jsx)(t, (0, i._)((0, a._)({}, n), {
                                        header: c.default.Messages.CAMERA_UNAVAILABLE,
                                        body: c.default.Messages.CAMERA_NO_DEVICE,
                                        confirmText: c.default.Messages.OKAY,
                                        onConfirm: e
                                    }))
                                }]
                        }
                    })
                })) : (0, s.openModalLazy)((0, r._)(function() {
                    var t;
                    return (0, o._)(this, function(l) {
                        switch (l.label) {
                            case 0:
                                return [4, n.el("503122@2150:2186").then(n.bind(n, "312533"))];
                            case 1:
                                return t = l.sent().default, [2, function(l) {
                                    return (0, u.jsx)(t, (0, i._)((0, a._)({}, l), {
                                        header: c.default.Messages.VIDEO_UNSUPPORTED_BROWSER_TITLE,
                                        body: c.default.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY,
                                        confirmText: c.default.Messages.DOWNLOAD_APP,
                                        onConfirm: function() {
                                            null == e || e(), (0, s.openModalLazy)((0, r._)(function() {
                                                var e;
                                                return (0, o._)(this, function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return [4, n.el("503122@3462:3526").then(n.bind(n, "984952"))];
                                                        case 1:
                                                            return e = t.sent().default, [2, function(t) {
                                                                return (0, u.jsx)(e, (0, a._)({
                                                                    source: "Video unsupported browser"
                                                                }, t))
                                                            }]
                                                    }
                                                })
                                            }))
                                        }
                                    }))
                                }]
                        }
                    })
                }))
            }
        },
        410571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("356056"),
                a = n("21189"),
                i = n("227094"),
                o = n("324415");
            n("191489"), n("357629");
            var u = n("735250");
            n("470079");
            var s = n("974328"),
                l = n("30175");

            function d() {
                function e() {
                    (0, s.openModalLazy)((0, r._)(function() {
                        var e;
                        return (0, o._)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, n.el("410571@950:1014").then(n.bind(n, "984952"))];
                                case 1:
                                    return e = t.sent().default, [2, function(t) {
                                        return (0, u.jsx)(e, (0, a._)({
                                            source: "Screenshare Unavailable"
                                        }, t))
                                    }]
                            }
                        })
                    }))
                }(0, s.openModalLazy)((0, r._)(function() {
                    var t;
                    return (0, o._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, n.el("410571@1851:1887").then(n.bind(n, "312533"))];
                            case 1:
                                return t = r.sent().default, [2, function(n) {
                                    return (0, u.jsx)(t, (0, i._)((0, a._)({}, n), {
                                        header: l.default.Messages.SCREENSHARE_UNAVAILABLE,
                                        body: l.default.Messages.SCREENSHARE_UNAVAILABLE_DOWNLOAD_APP,
                                        confirmText: l.default.Messages.DOWNLOAD_APP,
                                        onConfirm: e
                                    }))
                                }]
                        }
                    })
                }))
            }
        },
        158057: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("356056"),
                a = n("21189"),
                i = n("227094"),
                o = n("324415");
            n("191489"), n("357629");
            var u = n("735250");
            n("470079");
            var s = n("974328"),
                l = n("116395"),
                d = n("883319"),
                c = n("696964"),
                f = n("71132"),
                p = n("327271"),
                h = n("386130"),
                v = n("871831"),
                g = n("501769"),
                _ = n("467006"),
                m = n("315308");

            function E(e, t, E) {
                var C = f.default.getWindowOpen(_.PopoutWindowKeys.CHANNEL_CALL_POPOUT) ? _.PopoutWindowKeys.CHANNEL_CALL_POPOUT : null;
                if ((0, c.default)(C), g.isPlatformEmbedded)(0, s.openModalLazy)((0, r._)(function() {
                    var t;
                    return (0, o._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, n.el("158057@1783:1835").then(n.bind(n, "77577"))];
                            case 1:
                                return t = r.sent().default, [2, function(n) {
                                    return (0, u.jsx)(t, (0, i._)((0, a._)({}, n), {
                                        guildId: e,
                                        analyticsLocation: E
                                    }))
                                }]
                        }
                    })
                }));
                else {
                    var S, T = (0, d.default)(m.ApplicationStreamPresets.PRESET_CUSTOM, m.ApplicationStreamResolutions.RESOLUTION_1080, m.ApplicationStreamFPS.FPS_30, v.default.getCurrentUser(), null === (S = p.default.getGuild(e)) || void 0 === S ? void 0 : S.premiumTier) ? {
                        width: 1920,
                        height: 1080
                    } : {
                        width: 1280,
                        height: 720
                    };
                    h.default.getMediaEngine().getDesktopSource(T, !0).then(function(n) {
                        (0, l.startStream)(e, t, {
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
                    return u
                }
            });
            var r = n("735250");
            n("470079");
            var a = n("240108"),
                i = n("164323"),
                o = n("524297");

            function u(e) {
                var t = e.mainText,
                    n = e.supportingText,
                    u = e.children,
                    s = e.size;
                return (0, r.jsxs)(i.default, {
                    className: o.root,
                    justify: i.default.Justify.CENTER,
                    align: i.default.Align.CENTER,
                    direction: i.default.Direction.VERTICAL,
                    children: [(0, r.jsx)(a.default, {
                        header: t,
                        description: n,
                        size: s
                    }), u]
                })
            }
        },
        978450: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("21189"),
                a = n("227094"),
                i = n("261047"),
                o = n("735250");
            n("470079");
            var u = n("928484"),
                s = n("461486"),
                l = n("601946"),
                d = n("30175");

            function c(e) {
                var t = e.channelId,
                    n = e.applicationId,
                    c = e.centerButton,
                    f = (0, i._)(e, ["channelId", "applicationId", "centerButton"]),
                    p = void 0 !== c && c ? l.CenterControlButton : l.default;
                return (0, o.jsx)(p, (0, a._)((0, r._)({}, f), {
                    onClick: function() {
                        (0, u.stopEmbeddedActivity)({
                            channelId: t,
                            applicationId: n
                        })
                    },
                    iconComponent: s.default,
                    label: d.default.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY
                }))
            }
        },
        455142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n("21189"),
                a = n("227094"),
                i = n("261047"),
                o = n("735250");
            n("470079");
            var u = n("820228"),
                s = n("702012"),
                l = n("910769"),
                d = n("246414"),
                c = n("601946"),
                f = n("30175");

            function p(e) {
                var t = e.centerButton,
                    n = e.channel,
                    p = e.onClick,
                    h = (0, i._)(e, ["centerButton", "channel", "onClick"]),
                    v = void 0 !== t && t ? c.CenterControlButton : c.default,
                    g = n.isBroadcastChannel(),
                    _ = (0, l.useIsBroadcastingInChannel)(n.id);
                return (0, o.jsx)(v, (0, a._)((0, r._)({}, h), {
                    onClick: function() {
                        _ && (0, s.stopBroadcast)(), u.default.disconnect(), null == p || p()
                    },
                    iconComponent: d.default,
                    label: _ ? f.default.Messages.STOP_BROADCASTING : g ? f.default.Messages.LEAVE_BROADCAST : f.default.Messages.DISCONNECT_SELF
                }))
            }
        },
        233887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("21189"),
                a = n("261047"),
                i = n("735250");
            n("470079");
            var o = n("803997"),
                u = n.n(o),
                s = n("236702"),
                l = n("601946"),
                d = n("30175"),
                c = n("83171");

            function f(e) {
                var t = e.popoutOpen,
                    n = e.onClosePopout,
                    o = e.onOpenPopout,
                    f = (0, a._)(e, ["popoutOpen", "onClosePopout", "onOpenPopout"]),
                    p = t ? d.default.Messages.POPOUT_RETURN : d.default.Messages.POPOUT_PLAYER;
                return (0, i.jsx)(l.default, (0, r._)({
                    label: p,
                    onClick: t ? n : o,
                    iconComponent: s.default,
                    iconClassName: u()({
                        [c.popIn]: t
                    })
                }, f))
            }
        },
        907163: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("21189"),
                a = n("261047"),
                i = n("735250");
            n("470079");
            var o = n("450636"),
                u = n("137079"),
                s = n("601946"),
                l = n("30175");

            function d(e) {
                var t = e.isSelfStream,
                    n = e.centerButton,
                    d = (0, a._)(e, ["isSelfStream", "centerButton"]),
                    c = void 0 !== n && n ? s.CenterControlButton : s.default;
                return (0, i.jsx)(c, (0, r._)({
                    label: t ? l.default.Messages.STOP_STREAMING : l.default.Messages.STOP_WATCHING,
                    iconComponent: t ? o.default : u.default,
                    isActive: !0
                }, d))
            }
        },
        985185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var r = n("735250"),
                a = n("470079"),
                i = n("803997"),
                o = n.n(i),
                u = n("164545"),
                s = n("397925"),
                l = n("688894"),
                d = n("601946"),
                c = n("30175"),
                f = n("109595");

            function p(e) {
                var t = e.className,
                    n = e.isVertical;
                return (0, r.jsxs)("div", {
                    className: f.iconContainer,
                    children: [(0, r.jsx)(s.default, {
                        className: o()(n ? f.upCaret : f.leftCaret, t)
                    }), (0, r.jsx)(l.default, {
                        className: o()(f.members, t)
                    })]
                })
            }

            function h(e) {
                var t = e.className,
                    n = e.isVertical;
                return (0, r.jsxs)("div", {
                    className: f.iconContainer,
                    children: [(0, r.jsx)(s.default, {
                        className: o()(n ? f.downCaret : f.rightCaret, t)
                    }), n && (0, r.jsx)(l.default, {
                        className: o()(f.members, t)
                    })]
                })
            }

            function v(e) {
                var t = e.channelId,
                    n = e.className,
                    i = e.isParticipantsOpen,
                    s = e.isVertical,
                    l = void 0 !== s && s,
                    v = e.hideTooltip,
                    g = a.useCallback(function(e) {
                        var t = e.className;
                        return i ? (0, r.jsx)(h, {
                            className: t,
                            isVertical: l
                        }) : (0, r.jsx)(p, {
                            className: t,
                            isVertical: l
                        })
                    }, [i, l]);
                return (0, r.jsx)(d.default, {
                    label: i ? c.default.Messages.VIDEO_CALL_HIDE_MEMBERS : c.default.Messages.VIDEO_CALL_SHOW_MEMBERS,
                    className: o()(f.participantsButton, n),
                    onClick: function() {
                        u.default.toggleParticipants(t, !i)
                    },
                    iconComponent: g,
                    shouldShowTooltip: !(void 0 !== v && v)
                })
            }
        },
        331729: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VideoButtonWrapper: function() {
                    return v
                },
                default: function() {
                    return g
                }
            });
            var r = n("21189"),
                a = n("227094"),
                i = n("261047"),
                o = n("735250");
            n("470079");
            var u = n("803997"),
                s = n.n(u),
                l = n("777084"),
                d = n("781799"),
                c = n("477661"),
                f = n("717264"),
                p = n("601946"),
                h = n("221366");

            function v(e) {
                var t = (0, d.getVideoButtonLabel)(e),
                    n = e.enabled,
                    r = e.cameraUnavailable,
                    a = e.onChange,
                    i = e.onCameraUnavailable,
                    u = e.hasPermission,
                    s = e.children,
                    p = e.channelLimitReached,
                    h = e.join,
                    v = (0, l.useAppContext)(),
                    g = r ? function() {
                        return i()
                    } : function() {
                        return a(!e.enabled, v)
                    };
                return (0, o.jsx)(o.Fragment, {
                    children: s({
                        onClick: g,
                        active: n,
                        disabled: !n && (!u || void 0 !== p && p),
                        iconComponent: h || n ? c.default : f.default,
                        label: t,
                        unavailable: r
                    })
                })
            }

            function g(e) {
                var t = e.enabled,
                    n = e.join,
                    u = e.channel,
                    l = e.onChange,
                    d = e.onCameraUnavailable,
                    c = e.cameraUnavailable,
                    f = e.hasPermission,
                    g = e.className,
                    _ = e.channelLimitReached,
                    m = e.channelLimit,
                    E = e.centerButton,
                    C = e.onPopoutClick,
                    S = (0, i._)(e, ["enabled", "join", "channel", "onChange", "onCameraUnavailable", "cameraUnavailable", "hasPermission", "className", "channelLimitReached", "channelLimit", "centerButton", "onPopoutClick"]),
                    T = void 0 !== E && E ? p.CenterControlButton : p.default;
                return (0, o.jsx)(v, {
                    enabled: t,
                    join: n,
                    channel: u,
                    onChange: l,
                    onCameraUnavailable: d,
                    cameraUnavailable: c,
                    hasPermission: f,
                    channelLimitReached: _,
                    channelLimit: m,
                    children: function(e) {
                        var n = e.unavailable,
                            u = (0, i._)(e, ["unavailable"]);
                        return (0, o.jsx)(T, (0, a._)((0, r._)({}, u, S), {
                            isActive: t,
                            className: s()(g, {
                                [h.fauxDisabled]: n
                            }),
                            onPopoutClick: C
                        }))
                    }
                })
            }
        },
        395709: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n("87627"),
                a = n("200344"),
                i = n("29713"),
                o = n("21189"),
                u = n("778455"),
                s = n("661223"),
                l = n("312916"),
                d = n("328470"),
                c = n("501769"),
                f = n("467006"),
                p = {
                    desktopType: c.isPlatformEmbedded ? f.DesktopNotificationTypes.ALL : f.DesktopNotificationTypes.NEVER,
                    disableAllSounds: !1,
                    disabledSounds: [],
                    ttsType: f.TTSNotificationTypes.NEVER,
                    disableUnreadBadge: !1,
                    taskbarFlash: !0,
                    notifyMessagesInSelectedChannel: !1
                },
                h = p;

            function v(e, t) {
                !__OVERLAY__ && d.default.track(e, t)
            }

            function g(e) {
                var t = e.desktopType;
                h.desktopType = t, v(f.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
                    notifications_enabled: t === f.DesktopNotificationTypes.ALL
                })
            }
            var _ = function(e) {
                (0, i._)(n, e);
                var t = (0, u._)(n);

                function n() {
                    return (0, r._)(this, n), t.apply(this, arguments)
                }
                var s = n.prototype;
                return s.initialize = function(e) {
                    h = (0, o._)({}, p, e)
                }, s.getUserAgnosticState = function() {
                    return h
                }, s.getDesktopType = function() {
                    return h.desktopType
                }, s.getTTSType = function() {
                    return h.ttsType
                }, s.getDisabledSounds = function() {
                    return h.disabledSounds
                }, s.getDisableAllSounds = function() {
                    return h.disableAllSounds
                }, s.getDisableUnreadBadge = function() {
                    return h.disableUnreadBadge
                }, s.getNotifyMessagesInSelectedChannel = function() {
                    return h.notifyMessagesInSelectedChannel
                }, s.isSoundDisabled = function(e) {
                    return h.disableAllSounds || -1 !== h.disabledSounds.indexOf(e)
                }, (0, a._)(n, [{
                    key: "taskbarFlash",
                    get: function() {
                        return h.taskbarFlash
                    }
                }]), n
            }(s.default.DeviceSettingsStore);
            _.displayName = "NotificationSettingsStore", _.persistKey = "notifications", _.migrations = [function(e) {
                var t = (0, o._)({}, e);
                return t.disabledSounds = t.disabledSounds || [], t.disableUnreadBadge = t.disableUnreadBadge || !1, t.taskbarFlash = null == t.taskbarFlash || t.taskbarFlash, t.ttsType = t.ttsType || f.TTSNotificationTypes.NEVER, null == t.desktopType && (t.desktopType = c.isPlatformEmbedded ? f.DesktopNotificationTypes.ALL : f.DesktopNotificationTypes.NEVER), t
            }];
            var m = new _(l.default, {
                NOTIFICATIONS_SET_DESKTOP_TYPE: g,
                NOTIFICATIONS_SET_TTS_TYPE: function(e) {
                    var t = e.ttsType;
                    h.ttsType = t
                },
                NOTIFICATIONS_SET_DISABLED_SOUNDS: function(e) {
                    var t = e.sounds;
                    h.disabledSounds = t
                },
                NOTIFICATIONS_TOGGLE_ALL_DISABLED: function() {
                    h.disableAllSounds = !h.disableAllSounds
                },
                NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
                    var t = e.enabled,
                        n = e.source;
                    v(f.AnalyticEvents.ENABLE_NOTIFICATIONS, {
                        enabled: t === f.NotificationPermissionTypes.ENABLED,
                        source: n
                    }), t === f.NotificationPermissionTypes.BLOCKED ? g({
                        desktopType: f.DesktopNotificationTypes.NEVER
                    }) : t === f.NotificationPermissionTypes.ENABLED && g({
                        desktopType: f.DesktopNotificationTypes.ALL
                    })
                },
                NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: function(e) {
                    var t = e.disableUnreadBadge;
                    h.disableUnreadBadge = t
                },
                NOTIFICATIONS_SET_TASKBAR_FLASH: function(e) {
                    var t = e.taskbarFlash;
                    h.taskbarFlash = t
                },
                NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: function(e) {
                    var t = e.notify;
                    h.notifyMessagesInSelectedChannel = t
                }
            })
        },
        700933: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var r = n("87627"),
                a = n("29713"),
                i = n("21189"),
                o = n("778455"),
                u = n("735250"),
                s = n("470079"),
                l = n("699581"),
                d = n("414112"),
                c = n("93610"),
                f = n("467006"),
                p = function(e, t) {
                    var n = e.x,
                        r = e.y;
                    return Math.pow(n - t.x, 2) + Math.pow(r - t.y, 2)
                },
                h = function(e) {
                    (0, a._)(n, e);
                    var t = (0, o._)(n);

                    function n(e) {
                        (0, r._)(this, n), (a = t.call(this, e))._height = 0, a._width = 0, a._dragStart = {
                            x: 0,
                            y: 0
                        }, a._offsetX = 0, a._offsetY = 0, a._removeListeners = function() {}, a.handleSetRef = function(e) {
                            a._ref = e
                        }, a.handleMouseDown = function(e) {
                            var t = a.props,
                                n = t.dragAnywhere,
                                r = t.disabled,
                                i = t.selector;
                            if (!r) {
                                var o = a.state.position,
                                    u = e.target;
                                if (e.button === f.MouseButtons.PRIMARY && (n || null != i && u.matches(i))) {
                                    a.grabDimensions(), a._dragStart = {
                                        x: e.clientX,
                                        y: e.clientY
                                    }, a._offsetX = e.clientX - o.x._value, a._offsetY = e.clientY - o.y._value;
                                    var s = e.nativeEvent.view;
                                    a._removeListeners(), s.addEventListener("mousemove", a.handleMouseMove), s.addEventListener("mouseup", a.handleMouseUp), a._removeListeners = function() {
                                        s.removeEventListener("mousemove", a.handleMouseMove), s.removeEventListener("mouseup", a.handleMouseUp)
                                    }
                                }
                            }
                        }, a.handleMouseMove = function(e) {
                            e.preventDefault();
                            var t = a.props,
                                n = t.onDragStart,
                                r = t.onDrag;
                            if (!t.disabled) {
                                var i = a.state,
                                    o = i.dragging,
                                    u = i.dragging;
                                !o && p(a._dragStart, {
                                    x: e.clientX,
                                    y: e.clientY
                                }) > 9 && (o = !0), o && (a.animateToPosition(e.clientX - a._offsetX, e.clientY - a._offsetY, {
                                    tension: 80,
                                    friction: 8
                                }, null, !1), a.setState({
                                    dragging: o
                                }, function() {
                                    !u && (null == n || n(e.clientX, e.clientY)), null == r || r(e.clientX, e.clientY)
                                }))
                            }
                        }, a.handleMouseUp = function(e) {
                            a._removeListeners(), a.state.dragging && a.setState({
                                dragging: !1
                            }, function() {
                                var t = a.props.onDragEnd;
                                null == t || t(e.clientX, e.clientY)
                            })
                        };
                        var a, i = new d.default.Value(e.initialX),
                            o = new d.default.Value(e.initialY);
                        return a.state = {
                            dragging: !1,
                            position: new d.default.ValueXY({
                                x: i,
                                y: o
                            })
                        }, a
                    }
                    var s = n.prototype;
                    return s.componentDidMount = function() {
                        var e = this.props,
                            t = e.initialX,
                            n = e.initialY;
                        this.setPosition(t, n)
                    }, s.componentWillUnmount = function() {
                        this._removeListeners()
                    }, s.animateToPosition = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = arguments.length > 3 ? arguments[3] : void 0,
                            a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                        a && this.grabDimensions();
                        var o = this.translate(e, t);
                        d.default.spring(this.state.position, (0, i._)({
                            toValue: {
                                x: o.x,
                                y: o.y
                            }
                        }, n)).start(r)
                    }, s.setPosition = function(e, t) {
                        var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        n && this.grabDimensions();
                        var r = this.translate(e, t);
                        this.state.position.setValue({
                            x: r.x,
                            y: r.y
                        })
                    }, s.grabDimensions = function() {
                        var e = (0, l.findDOMNode)(this._ref);
                        (0, c.isElement)(e) && (this._height = e.clientHeight, this._width = e.clientWidth)
                    }, s.translate = function(e, t) {
                        var n = this.props,
                            r = n.maxX,
                            a = n.maxY;
                        return e < 0 ? e = 0 : e > r - this._width && (e = r - this._width), t < 0 ? t = 0 : t > a - this._height && (t = a - this._height), {
                            x: e,
                            y: t
                        }
                    }, s.render = function() {
                        var e = this.state,
                            t = e.dragging,
                            n = e.position,
                            r = this.props,
                            a = r.className,
                            o = r.children,
                            s = [0, 1],
                            l = ["0px", "1px"],
                            c = d.default.accelerate((0, i._)({
                                pointerEvents: t ? "none" : "auto",
                                transform: [{
                                    translateX: n.x.interpolate({
                                        inputRange: s,
                                        outputRange: l
                                    })
                                }, {
                                    translateY: n.y.interpolate({
                                        inputRange: s,
                                        outputRange: l
                                    })
                                }]
                            }, this.props.style));
                        return (0, u.jsx)(d.default.div, {
                            ref: this.handleSetRef,
                            className: a,
                            onMouseDown: this.handleMouseDown,
                            style: c,
                            children: o
                        })
                    }, n
                }(s.PureComponent);
            h.defaultProps = {
                maxX: 0,
                maxY: 0,
                initialX: 0,
                initialY: 0,
                disabled: !1,
                dragAnywhere: !1
            };
            var v = h
        },
        702018: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n("87627"),
                a = n("29713"),
                i = n("778455"),
                o = n("735250"),
                u = n("470079"),
                s = n("803997"),
                l = n.n(s),
                d = n("974328"),
                c = n("164323"),
                f = n("564920"),
                p = function(e) {
                    (0, a._)(n, e);
                    var t = (0, i._)(n);

                    function n() {
                        return (0, r._)(this, n), t.apply(this, arguments)
                    }
                    return n.prototype.render = function() {
                        var e = this.props,
                            t = e.note,
                            n = e.title,
                            r = e.action,
                            a = e.className;
                        return (0, o.jsx)("div", {
                            className: l()(f.wrapper, a),
                            children: (0, o.jsxs)(c.default, {
                                className: f.flexWrapper,
                                direction: c.default.Direction.VERTICAL,
                                align: c.default.Align.CENTER,
                                justify: c.default.Justify.CENTER,
                                children: [(0, o.jsx)(c.default.Child, {
                                    grow: 0,
                                    className: f.image
                                }), (0, o.jsxs)(c.default.Child, {
                                    grow: 0,
                                    className: f.text,
                                    children: [(0, o.jsx)(d.H, {
                                        className: f.title,
                                        children: n
                                    }), null != t ? (0, o.jsx)("div", {
                                        className: f.note,
                                        children: t
                                    }) : null]
                                }), r]
                            })
                        })
                    }, n
                }(u.PureComponent)
        },
        569376: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PictureInPictureWindow: function() {
                    return E
                },
                default: function() {
                    return C
                }
            });
            var r = n("87627"),
                a = n("200344"),
                i = n("29713"),
                o = n("21189"),
                u = n("778455");
            n("814951"), n("363505");
            var s = n("735250"),
                l = n("470079"),
                d = n("803997"),
                c = n.n(d),
                f = n("699581"),
                p = n("501769"),
                h = n("700933"),
                v = n("467006"),
                g = n("461151"),
                _ = n("272391"),
                m = {
                    top: 80,
                    bottom: 132,
                    left: 80
                },
                E = function(e) {
                    (0, i._)(n, e);
                    var t = (0, u._)(n);

                    function n() {
                        var e;
                        return (0, r._)(this, n), e = t.apply(this, arguments), e._width = 0, e._height = 0, e._velocityX = 0, e._velocityY = 0, e._lastMoveX = 0, e._lastMoveY = 0, e.ensureIsInPosition = function() {
                            e.setPosition(e.props.position)
                        }, e.handleSetInnerDivRef = function(t) {
                            e._innerDiv = t;
                            var n, r = null == t ? void 0 : t.ownerDocument.defaultView;
                            null != t && null != r && (e._resizeObserver = new r.ResizeObserver(e.ensureIsInPosition), null === (n = e._resizeObserver) || void 0 === n || n.observe(t))
                        }, e.handleSetDraggableRef = function(t) {
                            e._draggable = t
                        }, e.handleDragStart = function(t, n) {
                            e._velocityX = 0, e._velocityY = 0, e._lastMoveX = t, e._lastMoveY = n, e._lastMoveTime = new Date
                        }, e.handleDrag = function(t, n) {
                            var r = new Date,
                                a = Number(r) - Number(e._lastMoveTime);
                            e._velocityX = (t - e._lastMoveX) / a, e._velocityY = (n - e._lastMoveY) / a, e._lastMoveX = t, e._lastMoveY = n, e._lastMoveTime = r
                        }, e.handleDragEnd = function(t, n) {
                            var r, a = e.props,
                                i = a.maxX,
                                o = a.maxY,
                                u = e.calculateDecayingPosition(t, n, e._velocityX, e._velocityY),
                                s = !0,
                                l = !0;
                            if (u.x > i / 2 && (l = !1), u.y > o / 2 && (s = !1), r = s && l ? v.PictureInPicturePositions.TOP_LEFT : s && !l ? v.PictureInPicturePositions.TOP_RIGHT : !s && l ? v.PictureInPicturePositions.BOTTOM_LEFT : v.PictureInPicturePositions.BOTTOM_RIGHT, e.animateToPosition(r, e.ensureIsInPosition), r !== e.props.position) {
                                var d = e.props,
                                    c = d.id,
                                    f = d.onMove;
                                null == f || f(c, r)
                            }
                        }, e
                    }
                    var o = n.prototype;
                    return o.componentDidMount = function() {
                        this.setPosition(this.props.position)
                    }, o.componentDidUpdate = function(e) {
                        (e.edgeOffsetTop !== this.props.edgeOffsetTop || e.edgeOffsetLeft !== this.props.edgeOffsetLeft || e.edgeOffsetBottom !== this.props.edgeOffsetBottom || e.edgeOffsetRight !== this.props.edgeOffsetRight || e.maxX !== this.props.maxX || e.maxY !== this.props.maxY || e.dockedRect !== this.props.dockedRect || e.roundCorners !== this.props.roundCorners) && this.ensureIsInPosition()
                    }, o.componentWillUnmount = function() {
                        var e;
                        null === (e = this._resizeObserver) || void 0 === e || e.disconnect()
                    }, o.getPosition = function(e) {
                        var t, n, r = (0, f.findDOMNode)(this._innerDiv);
                        if (null != r) {
                            var a = r.getBoundingClientRect();
                            this._width = a.width, this._height = a.height
                        }
                        var i = this.props,
                            o = i.edgeOffsetTop,
                            u = i.edgeOffsetLeft,
                            s = i.edgeOffsetBottom,
                            l = i.edgeOffsetRight,
                            d = i.maxX,
                            c = i.maxY,
                            h = i.dockedRect,
                            g = Math.round(o),
                            _ = Math.round(c - s - this._height),
                            m = Math.round(u),
                            E = Math.round(d - l - this._width),
                            C = (0, p.getPlatform)() !== p.PlatformTypes.WEB && this.inPopout ? 22 : 0;
                        if (null != h) return {
                            y: (null !== (t = null == h ? void 0 : h.y) && void 0 !== t ? t : 0) - C,
                            x: null !== (n = null == h ? void 0 : h.x) && void 0 !== n ? n : 0
                        };
                        switch (e) {
                            case v.PictureInPicturePositions.TOP_LEFT:
                                return {
                                    y: g, x: m
                                };
                            case v.PictureInPicturePositions.BOTTOM_LEFT:
                                return {
                                    y: _, x: m
                                };
                            case v.PictureInPicturePositions.TOP_RIGHT:
                                return {
                                    y: g, x: E
                                };
                            default:
                                return {
                                    y: _, x: E
                                }
                        }
                    }, o.setPosition = function(e) {
                        var t, n = this.getPosition(e),
                            r = n.x,
                            a = n.y;
                        null === (t = this._draggable) || void 0 === t || t.setPosition(r, a)
                    }, o.animateToPosition = function(e, t) {
                        var n, r = this.getPosition(e),
                            a = r.x,
                            i = r.y;
                        null === (n = this._draggable) || void 0 === n || n.animateToPosition(a, i, {}, t)
                    }, o.calculateDecayingPosition = function(e, t, n, r) {
                        return {
                            x: e + 200 * n,
                            y: t + 200 * r
                        }
                    }, o.getXOffset = function() {
                        var e = this.props,
                            t = e.position,
                            n = e.edgeOffsetLeft,
                            r = e.edgeOffsetRight;
                        switch (t) {
                            case v.PictureInPicturePositions.TOP_LEFT:
                            case v.PictureInPicturePositions.BOTTOM_LEFT:
                                return -n;
                            default:
                                return r
                        }
                    }, o.getYOffset = function() {
                        var e = this.props,
                            t = e.position,
                            n = e.edgeOffsetTop,
                            r = e.edgeOffsetBottom;
                        switch (t) {
                            case v.PictureInPicturePositions.TOP_LEFT:
                            case v.PictureInPicturePositions.TOP_RIGHT:
                                return -n;
                            default:
                                return r
                        }
                    }, o.render = function() {
                        var e = this.props,
                            t = e.maxX,
                            n = e.maxY,
                            r = e.dockedRect,
                            a = e.hidden,
                            i = e.roundCorners,
                            o = e.className,
                            u = {};
                        return null != r && (u = {
                            transform: "translate3d(".concat(r.x, ", ").concat(r.y, ", 0)"),
                            width: r.width,
                            height: r.height
                        }), (0, s.jsx)(h.default, {
                            dragAnywhere: !0,
                            ref: this.handleSetDraggableRef,
                            className: c()(g.pictureInPictureWindow, o, {
                                [g.hidden]: a,
                                [g.borderRadius]: i
                            }),
                            maxX: t,
                            maxY: n,
                            disabled: null != r,
                            onDragStart: this.handleDragStart,
                            onDrag: this.handleDrag,
                            onDragEnd: this.handleDragEnd,
                            children: (0, s.jsx)("div", {
                                ref: this.handleSetInnerDivRef,
                                style: u,
                                children: this.props.children
                            })
                        })
                    }, (0, a._)(n, [{
                        key: "inPopout",
                        get: function() {
                            return this.props.appContext === v.AppContext.POPOUT
                        }
                    }]), n
                }(l.PureComponent);
            E.defaultProps = {
                hidden: !1,
                roundCorners: !0
            };
            var C = l.memo(function(e) {
                var t = e.selectedPIPWindow,
                    n = e.pipWindows,
                    r = e.maxX,
                    a = e.maxY,
                    i = e.onWindowMove,
                    u = e.dockedRect,
                    l = e.pictureInPictureComponents,
                    d = e.appContext,
                    f = e.roundCorners;
                return (0, s.jsx)("div", {
                    className: g.pictureInPicture,
                    children: function() {
                        if (null == t) return null;
                        var e = n.map(function(e) {
                                if (e.id !== t.id && e.component !== v.PictureInPictureComponents.EMBED_IFRAME) return null;
                                var n = "string" == typeof e.component ? l[e.component] : e.component;
                                return (0, s.jsx)(n, (0, o._)({}, e.props), "pipWindow-".concat(e.id))
                            }),
                            p = e.length > 1 ? g.noBoxShadow : {};
                        return (0, s.jsx)(E, {
                            className: c()(g.pictureInPictureWindowOverflow, _.elevationHigh, p),
                            appContext: d,
                            position: t.position,
                            id: t.id,
                            hidden: t.hidden,
                            onMove: i,
                            maxX: r,
                            maxY: a,
                            dockedRect: u,
                            edgeOffsetTop: m.top,
                            edgeOffsetBottom: m.bottom,
                            edgeOffsetLeft: m.left,
                            edgeOffsetRight: m.top,
                            roundCorners: f,
                            children: e
                        })
                    }()
                })
            })
        },
        888075: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var r = n("87627"),
                a = n("29713"),
                i = n("21189"),
                o = n("227094"),
                u = n("778455"),
                s = n("735250"),
                l = n("470079"),
                d = n("803997"),
                c = n.n(d),
                f = n("974328"),
                p = n("758687"),
                h = n("32695"),
                v = n("498882"),
                g = n("440139"),
                _ = n("164323"),
                m = n("467006"),
                E = n("686245"),
                C = function(e) {
                    (0, a._)(n, e);
                    var t = (0, u._)(n);

                    function n() {
                        var e;
                        return (0, r._)(this, n), e = t.apply(this, arguments), e.state = {
                            popoutOpen: !1
                        }, e.handleClickUser = function() {
                            var t = e.props.onPopoutOpen;
                            e.setState({
                                popoutOpen: !e.state.popoutOpen
                            }), null == t || t()
                        }, e.handleUserPopoutClose = function() {
                            var t = e.props.onPopoutClose;
                            e.setState({
                                popoutOpen: !1
                            }), null == t || t()
                        }, e.renderUserPopout = function(t) {
                            var n = e.props,
                                r = n.className,
                                a = n.disablePopout,
                                i = n.onContextMenu,
                                o = n.user,
                                u = n.status,
                                l = n.textClassName,
                                d = n.nick,
                                h = n.guildId;
                            return (0, s.jsxs)(_.default, {
                                align: _.default.Align.CENTER,
                                className: c()(E.memberListItem, r, {
                                    [E.popoutDisabled]: a
                                }),
                                onContextMenu: i,
                                onMouseDown: t.onMouseDown,
                                onKeyDown: t.onKeyDown,
                                onClick: e.handleClickUser,
                                children: [(0, s.jsx)(f.Avatar, {
                                    src: o.getAvatarURL(h, 24),
                                    className: E.avatar,
                                    "aria-label": o.username,
                                    size: f.AvatarSizes.SIZE_24,
                                    status: u
                                }), (0, s.jsx)(f.Text, {
                                    className: c()(E.memberListItemTag, l),
                                    variant: "text-sm/normal",
                                    children: (0, s.jsx)(p.default, {
                                        user: o,
                                        nick: d,
                                        usernameClass: E.username,
                                        hideDiscriminator: !0
                                    })
                                })]
                            })
                        }, e
                    }
                    return n.prototype.render = function() {
                        var e = this,
                            t = this.state.popoutOpen,
                            n = this.props,
                            r = n.user,
                            a = n.analyticsContext,
                            u = n.disablePopout,
                            l = n.guildId,
                            d = {
                                location: (0, o._)((0, i._)({}, a.location), {
                                    object: m.AnalyticsObjects.LIST_ITEM
                                })
                            };
                        return (0, s.jsx)(f.Popout, {
                            preload: function() {
                                return (0, v.default)(r.id, r.getAvatarURL(l, 80), {
                                    guildId: l
                                })
                            },
                            renderPopout: function(e) {
                                return (0, s.jsx)(g.default, (0, o._)((0, i._)({}, e), {
                                    guildId: l,
                                    userId: r.id,
                                    analyticsParams: d
                                }))
                            },
                            position: "left",
                            onRequestClose: this.handleUserPopoutClose,
                            shouldShow: !u && t,
                            children: function(t) {
                                return e.renderUserPopout(t)
                            }
                        })
                    }, n
                }(l.Component);
            C.defaultProps = {
                disablePopout: !1
            };
            var S = (0, h.default)(C)
        },
        753983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n("21189"),
                a = n("227094"),
                i = n("261047");
            n("814951");
            var o = n("735250"),
                u = n("470079"),
                s = n("600186"),
                l = n("974328"),
                d = n("442609"),
                c = n("512261"),
                f = n("97238"),
                p = n("498882"),
                h = n("4924"),
                v = n("362939"),
                g = n("218309"),
                _ = function(e) {
                    var t = e.style,
                        n = e.src,
                        _ = e.backgroundSrc,
                        m = e.userId,
                        E = e.pulseSpeakingIndicator,
                        C = e.speaking,
                        S = void 0 !== C && C,
                        T = (0, i._)(e, ["style", "src", "backgroundSrc", "userId", "pulseSpeakingIndicator", "speaking"]),
                        I = null != _ ? _ : n,
                        A = (0, d.default)(I, s.default.unsafe_rawColors.PRIMARY_800.css),
                        y = (0, c.useCallBannerBackgroundExperiment)(!0, "VideoBackground-web").enabled,
                        b = (0, h.default)(null != m ? m : ""),
                        N = null == b ? void 0 : b.getBannerURL({
                            size: 1024,
                            canAnimate: v.GifAutoPlay.getSetting()
                        });
                    if (u.useEffect(function() {
                            null != m && y && (0, p.default)(m, void 0, {
                                dispatchWait: !0
                            })
                        }, [y, m]), null == n) return null;
                    var L = (0, o.jsx)(l.Avatar, (0, r._)({
                            className: g.avatarWrapper,
                            src: n
                        }, T)),
                        M = (0, a._)((0, r._)({}, t), {
                            backgroundColor: A
                        });
                    return null != N && S && y && (M.backgroundImage = "url(".concat(N, ")"), M.backgroundSize = "cover"), (0, o.jsx)("div", {
                        style: M,
                        className: g.background,
                        children: void 0 !== E && E ? (0, o.jsx)(f.default, {
                            shouldAnimate: S,
                            children: L
                        }) : L
                    })
                }
        },
        246414: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("21189"),
                a = n("227094"),
                i = n("261047"),
                o = n("735250");
            n("470079");
            var u = n("336328"),
                s = n("644959"),
                l = n("262113"),
                d = (0, u.replaceIcon)(function(e) {
                    var t = e.width,
                        n = e.height,
                        u = e.color,
                        s = e.foreground,
                        d = (0, i._)(e, ["width", "height", "color", "foreground"]);
                    return (0, o.jsx)("svg", (0, a._)((0, r._)({}, (0, l.default)(d)), {
                        width: void 0 === t ? 24 : t,
                        height: void 0 === n ? 24 : n,
                        viewBox: "0 0 24 24",
                        children: (0, o.jsx)("path", {
                            className: s,
                            fill: void 0 === u ? "currentColor" : u,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21.1169 1.11603L22.8839 2.88403L19.7679 6.00003L22.8839 9.11603L21.1169 10.884L17.9999 7.76803L14.8839 10.884L13.1169 9.11603L16.2329 6.00003L13.1169 2.88403L14.8839 1.11603L17.9999 4.23203L21.1169 1.11603ZM18 22H13C6.925 22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 14.938 9 18 13 18V17C13 16.447 13.447 16 14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22Z"
                        })
                    }))
                }, s.PhoneHangUpIcon, void 0, {
                    size: 24
                })
        },
        717264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("21189"),
                a = n("227094"),
                i = n("261047"),
                o = n("735250");
            n("470079");
            var u = n("336328"),
                s = n("378467"),
                l = n("262113"),
                d = (0, u.replaceIcon)(function(e) {
                    var t = e.width,
                        n = e.height,
                        u = e.color,
                        s = void 0 === u ? "currentColor" : u,
                        d = e.foreground,
                        c = (0, i._)(e, ["width", "height", "color", "foreground"]);
                    return (0, o.jsxs)("svg", (0, a._)((0, r._)({}, (0, l.default)(c)), {
                        width: void 0 === t ? 24 : t,
                        height: void 0 === n ? 24 : n,
                        viewBox: "0 0 24 24",
                        children: [(0, o.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M6.74273 19H16C17.103 19 18 18.104 18 17V14.618L20.553 15.894C20.694 15.965 20.847 16 21 16C21.183 16 21.365 15.949 21.526 15.851C21.82 15.668 22 15.347 22 15V9C22 8.653 21.82 8.332 21.526 8.149C21.231 7.966 20.862 7.951 20.553 8.105L18 9.382V7.74273L6.74273 19ZM12.2574 5H4C2.897 5 2 5.897 2 7V15.2574L12.2574 5Z",
                            fill: s
                        }), (0, o.jsx)("rect", {
                            y: "19.9623",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 0 19.9623)",
                            className: d,
                            fill: s
                        })]
                    }))
                }, s.VideoSlashIcon, void 0, {
                    size: 24
                })
        },
        997351: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("21189"),
                a = n("227094"),
                i = n("261047"),
                o = n("735250");
            n("470079");
            var u = n("262113");

            function s(e) {
                var t = e.width,
                    n = e.height,
                    s = e.color,
                    l = e.foreground,
                    d = (0, i._)(e, ["width", "height", "color", "foreground"]);
                return (0, o.jsx)("svg", (0, a._)((0, r._)({}, (0, u.default)(d)), {
                    width: void 0 === t ? 55 : t,
                    height: void 0 === n ? 16 : n,
                    viewBox: "0 0 55 16",
                    children: (0, o.jsxs)("g", {
                        fill: void 0 === s ? "currentColor" : s,
                        className: l,
                        children: [(0, o.jsx)("path", {
                            d: "M3 4.78717H6.89554C7.83025 4.78717 8.62749 4.93379 9.27812 5.22703C9.92875 5.52027 10.4144 5.92348 10.7352 6.44582C11.0559 6.96815 11.2208 7.5638 11.2208 8.24192C11.2208 8.90171 11.0559 9.49736 10.7168 10.038C10.3778 10.5695 9.8646 11.0002 9.17732 11.3118C8.49003 11.6234 7.6378 11.7791 6.6197 11.7791H3V4.78717ZM6.57388 10.0014C7.2071 10.0014 7.69278 9.84559 8.03184 9.52485C8.3709 9.21328 8.54501 8.77343 8.54501 8.23276C8.54501 7.72875 8.38923 7.32555 8.08682 7.02314C7.78442 6.72073 7.32623 6.56495 6.71225 6.56495H5.49255V10.0014H6.57388Z"
                        }), (0, o.jsx)("path", {
                            d: "M17.2882 11.7709C16.7475 11.6335 16.2618 11.4319 15.8311 11.1569V9.4983C16.161 9.75489 16.5917 9.95649 17.1416 10.1214C17.6914 10.2864 18.2229 10.3689 18.7361 10.3689C18.9743 10.3689 19.1576 10.3414 19.2767 10.2772C19.3959 10.2131 19.46 10.1398 19.46 10.0481C19.46 9.94733 19.4233 9.86485 19.3592 9.80071C19.2951 9.73656 19.1668 9.68158 18.9743 9.62659L17.7739 9.36084C17.0866 9.20506 16.6009 8.97596 16.3077 8.70105C16.0144 8.42613 15.877 8.05042 15.877 7.59223C15.877 7.20735 16.0053 6.86829 16.2527 6.58421C16.5093 6.30013 16.8667 6.0802 17.334 5.92442C17.8014 5.76863 18.342 5.68616 18.9743 5.68616C19.5333 5.68616 20.0465 5.74114 20.5138 5.86944C20.9812 5.98857 21.3661 6.14435 21.6685 6.32763V7.89464C21.3569 7.71136 20.9904 7.56474 20.5871 7.45477C20.1748 7.34481 19.7533 7.28982 19.3226 7.28982C18.6994 7.28982 18.3878 7.39979 18.3878 7.61056C18.3878 7.71136 18.4337 7.78467 18.5345 7.83966C18.6353 7.89464 18.8094 7.94046 19.066 7.99544L20.0648 8.17871C20.7155 8.28868 21.2011 8.49028 21.5219 8.77436C21.8426 9.05844 21.9984 9.47081 21.9984 10.0298C21.9984 10.6346 21.7326 11.1203 21.2011 11.4685C20.6696 11.8259 19.9182 12 18.9468 12C18.3787 11.9817 17.8289 11.9084 17.2882 11.7709Z"
                        }), (0, o.jsx)("path", {
                            d: "M24.4735 11.5602C23.9054 11.2761 23.4655 10.9004 23.1814 10.4239C22.8882 9.94733 22.7507 9.40666 22.7507 8.80185C22.7507 8.20621 22.8974 7.66554 23.1998 7.19819C23.5022 6.72167 23.942 6.35512 24.5194 6.0802C25.0967 5.81445 25.7931 5.677 26.5995 5.677C27.5984 5.677 28.4231 5.88776 29.0829 6.3093V8.1329C28.8538 7.97712 28.5789 7.83965 28.2673 7.74802C27.9558 7.64721 27.6259 7.6014 27.2777 7.6014C26.6545 7.6014 26.178 7.71137 25.8206 7.94046C25.4724 8.16956 25.2983 8.46279 25.2983 8.82934C25.2983 9.18673 25.4632 9.47998 25.8115 9.70907C26.1505 9.93817 26.6453 10.0573 27.2868 10.0573C27.6167 10.0573 27.9466 10.0115 28.2673 9.91067C28.5881 9.80987 28.8722 9.69991 29.1013 9.55329V11.3219C28.3681 11.7618 27.5159 11.9817 26.5537 11.9817C25.7381 11.9817 25.0509 11.8351 24.4735 11.5602Z"
                        }), (0, o.jsx)("path", {
                            d: "M31.6955 11.5602C31.1182 11.2761 30.6783 10.9004 30.3759 10.4147C30.0735 9.929 29.9177 9.38834 29.9177 8.78353C29.9177 8.18788 30.0735 7.64722 30.3759 7.17986C30.6783 6.71251 31.1182 6.34595 31.6863 6.0802C32.2545 5.81445 32.9418 5.677 33.7299 5.677C34.518 5.677 35.2053 5.80529 35.7743 6.0802C36.3425 6.34595 36.7824 6.71251 37.0848 7.17986C37.3872 7.64722 37.5338 8.17872 37.5338 8.78353C37.5338 9.37918 37.3872 9.929 37.0848 10.4147C36.7824 10.9004 36.3517 11.2852 35.7743 11.5602C35.1961 11.8351 34.518 11.9817 33.7299 11.9817C32.951 11.9817 32.2728 11.8351 31.6955 11.5602ZM34.7287 9.79155C34.967 9.55329 35.0953 9.22339 35.0953 8.82934C35.0953 8.42614 34.9762 8.11457 34.7287 7.87632C34.4813 7.63806 34.1514 7.51892 33.7391 7.51892C33.3084 7.51892 32.9785 7.63806 32.731 7.87632C32.4928 8.11457 32.3645 8.42614 32.3645 8.82934C32.3645 9.23255 32.4836 9.55329 32.731 9.79155C32.9785 10.039 33.3084 10.1581 33.7391 10.1581C34.1514 10.1489 34.4905 10.0298 34.7287 9.79155Z"
                        }), (0, o.jsx)("path", {
                            d: "M43.6644 6.0435V8.19699C43.4078 8.03204 43.0779 7.94956 42.6747 7.94956C42.1432 7.94956 41.7308 8.11451 41.4467 8.43524C41.1626 8.75598 41.016 9.25999 41.016 9.93811V11.7709H38.5693V5.9427H40.9702V7.80295C41.0985 7.12482 41.3184 6.62082 41.6117 6.30008C41.9049 5.97935 42.2898 5.80524 42.7572 5.80524C43.1054 5.80524 43.4078 5.88771 43.6644 6.0435Z"
                        }), (0, o.jsx)("path", {
                            d: "M51.9136 4.58649V11.7801H49.4659V10.4696C49.2552 10.9645 48.9436 11.3402 48.5221 11.5968C48.1005 11.8534 47.5782 11.9817 46.9551 11.9817C46.4052 11.9817 45.9195 11.8442 45.5072 11.5785C45.0948 11.3127 44.7741 10.937 44.5542 10.4696C44.3342 9.99313 44.2242 9.46163 44.2242 8.87514C44.2151 8.26117 44.3342 7.71134 44.5816 7.22566C44.8199 6.73998 45.1681 6.36426 45.608 6.08935C46.0479 5.81444 46.5519 5.67698 47.12 5.67698C48.2838 5.67698 49.0627 6.18099 49.4659 7.19817V4.58649H51.9136ZM49.0994 9.7457C49.3468 9.50744 49.4751 9.18671 49.4751 8.80183C49.4751 8.42612 49.356 8.12371 49.1086 7.89462C48.8611 7.66552 48.5312 7.5464 48.1189 7.5464C47.7065 7.5464 47.3766 7.66553 47.1292 7.90378C46.8818 8.14204 46.7626 8.44444 46.7626 8.82932C46.7626 9.2142 46.8818 9.51661 47.1292 9.75487C47.3766 9.99313 47.6973 10.1123 48.1097 10.1123C48.5221 10.1123 48.852 9.99313 49.0994 9.7457Z"
                        }), (0, o.jsx)("path", {
                            d: "M13.4751 6.29095C14.1789 6.29095 14.7489 5.77778 14.7489 5.14547C14.7489 4.51317 14.1789 4 13.4751 4C12.7723 4 12.2014 4.51317 12.2014 5.14547C12.2014 5.77778 12.7723 6.29095 13.4751 6.29095Z"
                        }), (0, o.jsx)("path", {
                            d: "M14.7489 7.07812C13.97 7.41719 12.9986 7.42635 12.2014 7.07812V11.7792H14.7489V7.07812Z"
                        })]
                    })
                }))
            }
        },
        841572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("21189"),
                a = n("227094"),
                i = n("261047"),
                o = n("735250");
            n("470079");
            var u = n("262113");

            function s(e) {
                var t = e.width,
                    n = e.height,
                    s = e.color,
                    l = e.className,
                    d = e.foreground,
                    c = (0, i._)(e, ["width", "height", "color", "className", "foreground"]);
                return (0, o.jsx)("svg", (0, a._)((0, r._)({}, (0, u.default)(c)), {
                    className: l,
                    width: void 0 === t ? 24 : t,
                    height: void 0 === n ? 24 : n,
                    viewBox: "0 0 24 24",
                    children: (0, o.jsx)("path", {
                        className: d,
                        fill: void 0 === s ? "currentColor" : s,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 11C2 6.02944 6.02944 2 11 2H13C17.9706 2 22 6.02944 22 11V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V11ZM5.88 5.82497C4.71048 6.55593 4 7.83781 4 9.21697V18.7192C4 19.3698 4.61139 19.8471 5.24254 19.6893L10.9558 18.261C11.5695 18.1076 12 17.5562 12 16.9236V9.21697C12 6.07522 8.5442 4.15985 5.88 5.82497ZM10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12V14C8 14.5523 8.44772 15 9 15C9.55228 15 10 14.5523 10 14V12ZM17.6832 9.47564C17.4485 8.84145 16.5515 8.84145 16.3168 9.47564L16.1387 9.95707C15.9361 10.5045 15.5045 10.9361 14.9571 11.1387L14.4756 11.3168C13.8415 11.5515 13.8415 12.4485 14.4756 12.6832L14.9571 12.8613C15.5045 13.0639 15.9361 13.4955 16.1387 14.0429L16.3168 14.5244C16.5515 15.1585 17.4485 15.1585 17.6832 14.5244L17.8613 14.0429C18.0639 13.4955 18.4955 13.0639 19.0429 12.8613L19.5244 12.6832C20.1585 12.4485 20.1585 11.5515 19.5244 11.3168L19.0429 11.1387C18.4955 10.9361 18.0639 10.5045 17.8613 9.95707L17.6832 9.47564ZM14.1584 5.23782C14.2758 4.92073 14.7242 4.92073 14.8416 5.23782C14.9994 5.66433 15.3357 6.0006 15.7622 6.15842C16.0793 6.27576 16.0793 6.72424 15.7622 6.84158C15.3357 6.9994 14.9994 7.33567 14.8416 7.76218C14.7242 8.07927 14.2758 8.07927 14.1584 7.76218C14.0006 7.33567 13.6643 6.9994 13.2378 6.84158C12.9207 6.72424 12.9207 6.27576 13.2378 6.15842C13.6643 6.0006 14.0006 5.66433 14.1584 5.23782ZM18.8416 16.2378C18.7242 15.9207 18.2758 15.9207 18.1584 16.2378C18.0006 16.6643 17.6643 17.0006 17.2378 17.1584C16.9207 17.2758 16.9207 17.7242 17.2378 17.8416C17.6643 17.9994 18.0006 18.3357 18.1584 18.7622C18.2758 19.0793 18.7242 19.0793 18.8416 18.7622C18.9994 18.3357 19.3357 17.9994 19.7622 17.8416C20.0793 17.7242 20.0793 17.2758 19.7622 17.1584C19.3357 17.0006 18.9994 16.6643 18.8416 16.2378Z"
                    })
                }))
            }
        },
        461486: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("21189"),
                a = n("227094"),
                i = n("261047"),
                o = n("735250");
            n("470079");
            var u = n("336328"),
                s = n("853374"),
                l = n("262113"),
                d = (0, u.replaceIcon)(function(e) {
                    var t = e.width,
                        n = e.height,
                        u = e.color,
                        s = e.foreground,
                        d = (0, i._)(e, ["width", "height", "color", "foreground"]);
                    return (0, o.jsx)("svg", (0, a._)((0, r._)({}, (0, l.default)(d)), {
                        width: void 0 === t ? 16 : t,
                        height: void 0 === n ? 16 : n,
                        viewBox: "0 0 24 24",
                        children: (0, o.jsx)("path", {
                            className: s,
                            fill: void 0 === u ? "currentColor" : u,
                            d: "M18 2H7C5.897 2 5 2.898 5 4V11H12.59L10.293 8.708L11.706 7.292L16.414 11.991L11.708 16.706L10.292 15.294L12.582 13H5V20C5 21.103 5.897 22 7 22H18C19.103 22 20 21.103 20 20V4C20 2.898 19.103 2 18 2Z"
                        })
                    }))
                }, s.DoorExitIcon, void 0, {
                    size: 16
                })
        },
        450636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("21189"),
                a = n("227094"),
                i = n("261047"),
                o = n("735250");
            n("470079");
            var u = n("336328"),
                s = n("758831"),
                l = n("262113"),
                d = (0, u.replaceIcon)(function(e) {
                    var t = e.width,
                        n = e.height,
                        u = e.color,
                        s = e.foreground,
                        d = (0, i._)(e, ["width", "height", "color", "foreground"]);
                    return (0, o.jsx)("svg", (0, a._)((0, r._)({}, (0, l.default)(d)), {
                        width: void 0 === t ? 24 : t,
                        height: void 0 === n ? 24 : n,
                        viewBox: "0 0 24 24",
                        children: (0, o.jsx)("path", {
                            className: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4 2.5C2.897 2.5 2 3.397 2 4.5V15.5C2 16.604 2.897 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C21.103 17.5 22 16.604 22 15.5V4.5C22 3.397 21.103 2.5 20 2.5H4ZM14.5483 6L16 7.45174L13.4466 9.99485L16 12.5483L14.5483 14L12.0051 11.4466L9.45174 14L8 12.5483L10.5534 9.99485L8 7.45174L9.45174 6L12.0051 8.55341L14.5483 6Z",
                            fill: void 0 === u ? "currentColor" : u
                        })
                    }))
                }, s.ScreenXIcon, void 0, {
                    size: 24
                })
        },
        137079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("21189"),
                a = n("227094"),
                i = n("261047"),
                o = n("735250");
            n("470079");
            var u = n("336328"),
                s = n("758831"),
                l = n("262113"),
                d = (0, u.replaceIcon)(function(e) {
                    var t = e.width,
                        n = e.height,
                        u = e.color,
                        s = void 0 === u ? "currentColor" : u,
                        d = e.foreground,
                        c = (0, i._)(e, ["width", "height", "color", "foreground"]);
                    return (0, o.jsxs)("svg", (0, a._)((0, r._)({}, (0, l.default)(c)), {
                        width: void 0 === t ? 24 : t,
                        height: void 0 === n ? 24 : n,
                        viewBox: "0 0 24 24",
                        children: [(0, o.jsx)("path", {
                            className: d,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M20 11V13.5H4V4.5H13V2.5H4C3.46957 2.5 2.96086 2.71071 2.58579 3.08579C2.21071 3.46086 2 3.96957 2 4.5L2 15.5C2 16.0304 2.21071 16.5391 2.58579 16.9142C2.96086 17.2893 3.46957 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C20.5304 17.5 21.0391 17.2893 21.4142 16.9142C21.7893 16.5391 22 16.0304 22 15.5V11H20Z",
                            fill: s
                        }), (0, o.jsx)("path", {
                            className: d,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M23 2.45174L21.5483 1L19.0051 3.55341L16.4517 1L15 2.45174L17.5534 4.99485L15 7.54826L16.4517 9L19.0051 6.44659L21.5483 9L23 7.54826L20.4466 4.99485L23 2.45174Z",
                            fill: s
                        })]
                    }))
                }, s.ScreenXIcon, void 0, {
                    size: 24
                })
        },
        935178: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("21189"),
                a = n("227094"),
                i = n("261047"),
                o = n("735250");
            n("470079");
            var u = n("262113");

            function s(e) {
                var t = e.width,
                    n = e.height,
                    s = e.color,
                    l = e.foreground,
                    d = (0, i._)(e, ["width", "height", "color", "foreground"]);
                return (0, o.jsx)("svg", (0, a._)((0, r._)({}, (0, u.default)(d)), {
                    width: void 0 === t ? 12 : t,
                    height: void 0 === n ? 12 : n,
                    viewBox: "0 0 12 12",
                    children: (0, o.jsx)("polygon", {
                        fill: void 0 === s ? "currentColor" : s,
                        className: l,
                        fillRule: "evenodd",
                        points: "11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"
                    })
                }))
            }
        },
        242259: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("21189"),
                a = n("227094"),
                i = n("261047"),
                o = n("735250");
            n("470079");
            var u = n("262113");

            function s(e) {
                var t = e.width,
                    n = e.height,
                    s = e.color,
                    l = e.foreground,
                    d = (0, i._)(e, ["width", "height", "color", "foreground"]);
                return (0, o.jsx)("svg", (0, a._)((0, r._)({}, (0, u.default)(d)), {
                    width: void 0 === t ? 12 : t,
                    height: void 0 === n ? 12 : n,
                    viewBox: "0 0 12 12",
                    children: (0, o.jsx)("path", {
                        stroke: void 0 === s ? "currentColor" : s,
                        className: l,
                        fill: "none",
                        d: "M8.5,3.5 L6,6 L3.5,3.5 L6,6 L3.5,8.5 L6,6 L8.5,8.5 L6,6 L8.5,3.5 Z"
                    })
                }))
            }
        },
        720139: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("21189"),
                a = n("227094"),
                i = n("261047"),
                o = n("735250");
            n("470079");
            var u = n("262113");

            function s(e) {
                var t = e.width,
                    n = e.height,
                    s = e.color,
                    l = e.foreground,
                    d = (0, i._)(e, ["width", "height", "color", "foreground"]);
                return (0, o.jsx)("svg", (0, a._)((0, r._)({}, (0, u.default)(d)), {
                    width: void 0 === t ? 12 : t,
                    height: void 0 === n ? 12 : n,
                    viewBox: "0 0 12 12",
                    children: (0, o.jsx)("rect", {
                        width: "9",
                        height: "9",
                        x: "1.5",
                        y: "1.5",
                        fill: "none",
                        stroke: void 0 === s ? "currentColor" : s,
                        className: l
                    })
                }))
            }
        },
        950165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("21189"),
                a = n("227094"),
                i = n("261047"),
                o = n("735250");
            n("470079");
            var u = n("262113");

            function s(e) {
                var t = e.width,
                    n = e.height,
                    s = e.color,
                    l = e.foreground,
                    d = (0, i._)(e, ["width", "height", "color", "foreground"]);
                return (0, o.jsx)("svg", (0, a._)((0, r._)({}, (0, u.default)(d)), {
                    width: void 0 === t ? 12 : t,
                    height: void 0 === n ? 12 : n,
                    viewBox: "0 0 12 12",
                    children: (0, o.jsxs)("g", {
                        fill: void 0 === s ? "currentColor" : s,
                        className: l,
                        fillRule: "evenodd",
                        children: [(0, o.jsx)("path", {
                            d: "M5,3 C5,3 5,6.1325704 5,6.48601043 C5,6.83945045 5.18485201,7 5.49021559,7 L9,7 L9,6 L8,6 L8,5 L7,5 L7,4 L6,4 L6,3 L5,3 Z",
                            transform: "rotate(180 7 5)"
                        }), (0, o.jsx)("path", {
                            d: "M3,5 C3,5 3,8.1325704 3,8.48601043 C3,8.83945045 3.18485201,9 3.49021559,9 L7,9 L7,8 L6,8 L6,7 L5,7 L5,6 L4,6 L4,5 L3,5 Z"
                        })]
                    })
                }))
            }
        },
        315604: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("21189"),
                a = n("227094"),
                i = n("261047"),
                o = n("735250");
            n("470079");
            var u = n("262113");

            function s(e) {
                var t = e.width,
                    n = e.height,
                    s = e.color,
                    l = e.foreground,
                    d = (0, i._)(e, ["width", "height", "color", "foreground"]);
                return (0, o.jsx)("svg", (0, a._)((0, r._)({}, (0, u.default)(d)), {
                    width: void 0 === t ? 12 : t,
                    height: void 0 === n ? 12 : n,
                    viewBox: "0 0 12 12",
                    children: (0, o.jsx)("rect", {
                        className: l,
                        fill: void 0 === s ? "currentColor" : s,
                        width: "10",
                        height: "1",
                        x: "1",
                        y: "6"
                    })
                }))
            }
        },
        381694: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("21189"),
                a = n("227094"),
                i = n("261047"),
                o = n("735250");
            n("470079");
            var u = n("262113");

            function s(e) {
                var t = e.width,
                    n = e.height,
                    s = e.color,
                    l = e.foreground,
                    d = (0, i._)(e, ["width", "height", "color", "foreground"]);
                return (0, o.jsx)("svg", (0, a._)((0, r._)({}, (0, u.default)(d)), {
                    width: void 0 === t ? 12 : t,
                    height: void 0 === n ? 12 : n,
                    viewBox: "0 0 12 12",
                    children: (0, o.jsx)("rect", {
                        fill: void 0 === s ? "currentColor" : s,
                        className: l,
                        width: "8",
                        height: "2",
                        x: "2",
                        y: "5",
                        fillRule: "evenodd"
                    })
                }))
            }
        },
        543930: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setupWindow: function() {
                    return u
                }
            }), n("633702"), n("266796"), n("357629"), n("996173"), n("47120");
            var r = n("152103"),
                a = n("45245"),
                i = n("40093"),
                o = n("333405");

            function u(e) {
                var t = e.document,
                    n = (0, i.setupWindowId)(e);

                function u() {
                    (0, o.setCurrentlyInteractingWindowId)(n)
                }

                function s() {
                    setTimeout(function() {
                        (0, o.clearCurrentlyInteractingWindowId)(n)
                    }, 0)
                }
                e.addEventListener("resize", function() {
                    (0, r.resized)(e)
                }), e.addEventListener("focus", function() {
                    (0, r.focus)(e, !0)
                }), e.addEventListener("blur", function() {
                    !e.document.hasFocus() && (0, r.focus)(e, !1)
                }), e.addEventListener("unload", function() {
                    (0, r.unload)(e)
                });
                var l = !0,
                    d = !1,
                    c = void 0;
                try {
                    for (var f, p = (0, o.INTERACTION_EVENTS)[Symbol.iterator](); !(l = (f = p.next()).done); l = !0) {
                        var h = f.value;
                        t.addEventListener(h, u, !0), t.addEventListener(h, s, !1)
                    }
                } catch (e) {
                    d = !0, c = e
                } finally {
                    try {
                        !l && null != p.return && p.return()
                    } finally {
                        if (d) throw c
                    }
                }(0, a.subscribeDocumentToFullScreenChange)(t, function() {
                    (0, r.fullscreenChange)(e)
                }), (0, r.init)(e)
            }
        },
        105691: function(e, t, n) {
            "use strict";
            var r, a;
            n.r(t), n.d(t, {
                AppCrashedReasons: function() {
                    return r
                }
            }), n("330740"), n("996173"), n("47120"), n("357629"), (a = r || (r = {})).UNHANDLED_NATIVE_ERROR = "unhandled_native_error", a.UNHANDLED_JS_ERROR = "unhandled_js_error", a.SOCKET_CRASHED = "socket_crashed"
        },
        753750: function(e, t, n) {
            "use strict";
            var r, a;
            n.r(t), n.d(t, {
                ErrorLevels: function() {
                    return r
                }
            }), n("330740"), n("996173"), n("47120"), n("357629"), (a = r || (r = {})).FATAL = "fatal", a.ERROR = "error", a.WARNING = "warning", a.LOG = "log", a.INFO = "info", a.DEBUG = "debug"
        }
    }
]);
//# sourceMappingURL=95719.a835e335a14add8b2679.js.map