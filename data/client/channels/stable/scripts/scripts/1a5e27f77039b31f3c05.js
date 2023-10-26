(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["21515"], {
        924070: function(e, t, n) {
            var l = {
                "./icon-file-acrobat.svg": "668973",
                "./icon-file-ae.svg": "124036",
                "./icon-file-ai.svg": "721569",
                "./icon-file-archive.svg": "644286",
                "./icon-file-audio.svg": "597346",
                "./icon-file-code.svg": "380499",
                "./icon-file-document.svg": "50617",
                "./icon-file-image.svg": "972094",
                "./icon-file-ps.svg": "92729",
                "./icon-file-sketch.svg": "335000",
                "./icon-file-spreadsheet.svg": "302872",
                "./icon-file-unknown.svg": "425914",
                "./icon-file-video.svg": "272477",
                "./icon-file-webcode.svg": "164059"
            };

            function a(e) {
                return n(i(e))
            }

            function i(e) {
                if (!n.o(l, e)) {
                    var t = Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return l[e]
            }
            a.id = '"924070"', a.keys = function() {
                return Object.keys(l)
            }, a.resolve = i, e.exports = a
        },
        447341: function(e, t, n) {
            "use strict";
            e.exports = "data:image/svg+xml;utf8,%3Csvg%20width%3D%22256%22%20height%3D%2278%22%20viewBox%3D%2232%2024%20256%2078%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M36%2024C33.7909%2024%2032%2025.7909%2032%2028V78C32%2080.2091%2033.7909%2082%2036%2082H86C88.2091%2082%2090%2080.2091%2090%2078V28C90%2025.7909%2088.2091%2024%2086%2024H36ZM110%2024C107.791%2024%20106%2025.7909%20106%2028V38C106%2040.2091%20107.791%2042%20110%2042H179C181.209%2042%20183%2040.2091%20183%2038V28C183%2025.7909%20181.209%2024%20179%2024H110ZM106%2058C106%2055.7909%20107.791%2054%20110%2054H284C286.209%2054%20288%2055.7909%20288%2058V68C288%2070.2091%20286.209%2072%20284%2072H110C107.791%2072%20106%2070.2091%20106%2068V58ZM110%2084C107.791%2084%20106%2085.7909%20106%2088V98C106%20100.209%20107.791%20102%20110%20102H223C225.209%20102%20227%20100.209%20227%2098V88C227%2085.7909%20225.209%2084%20223%2084H110Z%22%20fill%3D%22%23000000%22%20%2F%3E%3C%2Fsvg%3E"
        },
        668973: function(e, t, n) {
            "use strict";
            e.exports = n.p + "18517b33da6ed36b855b.svg"
        },
        124036: function(e, t, n) {
            "use strict";
            e.exports = n.p + "2304725db3c96705e901.svg"
        },
        721569: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b21a7b48a6e973958489.svg"
        },
        644286: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5ff8ffaa3831478d2a28.svg"
        },
        597346: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4ba6811c2bcb626963c6.svg"
        },
        380499: function(e, t, n) {
            "use strict";
            e.exports = n.p + "20c942338703af7dccd1.svg"
        },
        50617: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d18655651bd838408129.svg"
        },
        972094: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5f5e1a58ecf11d0d8d15.svg"
        },
        92729: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f5710b460ce933c9abe8.svg"
        },
        335e3: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f5c7b6adf73fe335fa05.svg"
        },
        302872: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4fd94b2e62b94b0454d3.svg"
        },
        425914: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5b74fc90eac76055a5ad.svg"
        },
        272477: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d994d2093d7d1924be78.svg"
        },
        164059: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e9b67e80d0033605e8f4.svg"
        },
        850268: function(e, t, n) {
            "use strict";
            e.exports = n.p + "660de41d05e820cd186e.svg"
        },
        817480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("117064"),
                s = n("77078"),
                r = n("244201"),
                o = n("952368"),
                u = n("924444"),
                d = n("103603"),
                c = n("866190"),
                m = n("782340"),
                f = n("63309");
            let h = "Zoomed Lazy Image Modal";
            class p extends a.PureComponent {
                render() {
                    let {
                        appContext: e,
                        isWindowFocused: t,
                        ...n
                    } = this.props;
                    return (0, l.jsx)(o.default, {
                        ...n,
                        onZoom: this.onZoom,
                        onMouseEnter: this.onMouseEnter,
                        shouldAnimate: t
                    })
                }
                constructor(...e) {
                    super(...e), this.onMouseEnter = (e, t) => {
                        let {
                            preloadImage: n
                        } = t, {
                            width: l,
                            height: a
                        } = this.props;
                        n((0, d.zoomFit)(l, a))
                    }, this.modalContext = (0, s.modalContextFromAppContext)(this.props.appContext), this.onCloseImage = () => {
                        (0, s.closeModal)(h, this.modalContext)
                    }, this.onZoom = (e, t) => {
                        let {
                            zoomThumbnailPlaceholder: n
                        } = t;
                        e.preventDefault();
                        let {
                            alt: a,
                            src: r,
                            original: o,
                            width: d,
                            height: c,
                            animated: p,
                            children: E,
                            renderLinkComponent: g,
                            isWindowFocused: C,
                            shouldHideMediaOptions: v = !1
                        } = this.props, I = {
                            alt: a,
                            src: r,
                            original: null != o ? o : r,
                            width: d,
                            height: c,
                            animated: p,
                            children: E,
                            zoomThumbnailPlaceholder: n,
                            renderLinkComponent: g,
                            onContextMenu: v ? e => {
                                e.stopPropagation(), e.preventDefault()
                            } : void 0
                        };
                        (0, i.isElement)(e.currentTarget) && e.currentTarget.blur(), (0, s.openModal)(e => (0, l.jsx)(s.ModalRoot, {
                            className: f.modal,
                            ...e,
                            size: s.ModalSize.DYNAMIC,
                            "aria-label": m.default.Messages.IMAGE,
                            children: (0, l.jsx)(u.ImageModal, {
                                ...I,
                                className: f.image,
                                shouldAnimate: C,
                                onClose: this.onCloseImage,
                                shouldHideMediaOptions: v
                            })
                        }), {
                            modalKey: h
                        }, this.modalContext)
                    }
                }
            }

            function E(e) {
                let t = (0, r.useAppContext)(),
                    n = (0, c.useIsWindowFocused)();
                return (0, l.jsx)(p, {
                    ...e,
                    isWindowFocused: n,
                    appContext: t
                })
            }
            p.defaultProps = {
                shouldLink: !0,
                autoPlay: !1,
                animated: !1
            }
        },
        86621: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("599110");

            function s(e) {
                var t;
                let n = a.forwardRef((t, n) => (0, l.jsx)(i.AnalyticsContext.Consumer, {
                    children: a => (0, l.jsx)(e, {
                        ...t,
                        ref: n,
                        analyticsContext: a
                    })
                }));
                return n.displayName = "withAnalyticsContext(".concat(null !== (t = e.displayName) && void 0 !== t ? t : e.name, ")"), n
            }
        },
        943325: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AngleBracketsIcon: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M9.6 7.8 4 12l5.6 4.2a1 1 0 0 1 .4.8v1.984a.25.25 0 0 1-.405.196l-8.1-6.395a1 1 0 0 1 0-1.57l8.1-6.395a.25.25 0 0 1 .405.196V7a1 1 0 0 1-.4.8Zm4.8 0L20 12l-5.6 4.2a1 1 0 0 0-.4.8v1.984a.25.25 0 0 0 .405.196l8.1-6.395a1 1 0 0 0 0-1.57l-8.1-6.395a.25.25 0 0 0-.405.196V7a1 1 0 0 0 .4.8Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        131771: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChannelsVoiceLowIcon: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3Zm3.176 12.357c-.548.356-1.176-.12-1.176-.773v-.275c0-.357.206-.674.451-.933.34-.358.549-.843.549-1.376 0-.533-.209-1.018-.549-1.376-.245-.26-.451-.576-.451-.933v-.275c0-.653.628-1.129 1.176-.773A3.997 3.997 0 0 1 17 12a3.997 3.997 0 0 1-1.824 3.357Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        113257: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChannelsVoiceXIcon: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3Zm10.707 5.293a1 1 0 0 0-1.414 0L19 10.586l-2.293-2.293a1 1 0 1 0-1.414 1.414L17.586 12l-2.293 2.293a1 1 0 0 0 1.414 1.414L19 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L20.414 12l2.293-2.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        4997: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CirclePlayIcon: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11ZM9 8.089c0-.875.999-1.392 1.732-.896l5.789 3.911c.639.432.639 1.36 0 1.792l-5.789 3.91C10 17.304 9 16.787 9 15.912V8.09Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        821455: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CopyIcon: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M3 16a1 1 0 0 1-1-1v-5a8 8 0 0 1 8-8h5a1 1 0 0 1 1 1v.5a.5.5 0 0 1-.5.5H10a6 6 0 0 0-6 6v5.5a.5.5 0 0 1-.5.5H3Zm3 2a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4h-3a5 5 0 0 1-5-5V6h-4a4 4 0 0 0-4 4v8Zm15.66-6h.07a2.998 2.998 0 0 0-.609-.879L16.88 6.88a2.998 2.998 0 0 0-.879-.61V9a3 3 0 0 0 3 3H21.659Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        691096: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DownloadIcon: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M12 2a1 1 0 0 1 1 1v10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-5 5-.007.007a.997.997 0 0 1-.697.286h-.006a.996.996 0 0 1-.697-.286l-.008-.008-5-4.999a1 1 0 1 1 1.415-1.414L11 13.586V3a1 1 0 0 1 1-1ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        736616: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EyeIcon: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M18.386 8.083c1.287 1.448 2.085 3.04 2.465 3.917-.38.878-1.178 2.469-2.465 3.917C16.874 17.617 14.809 19 12 19c-2.81 0-4.874-1.382-6.386-3.083C4.329 14.469 3.53 12.877 3.15 12c.38-.878 1.179-2.469 2.465-3.917C7.127 6.383 9.191 5 12 5c2.81 0 4.874 1.382 6.386 3.083Zm4.5 3.61a.833.833 0 0 1 0 .614C22.274 13.885 19.114 21 12 21c-7.113 0-10.273-7.115-10.887-8.693a.833.833 0 0 1 0-.614C1.727 10.115 4.887 3 12 3s10.273 7.115 10.887 8.693Zm-7.327.072c.195-.091.441.02.441.235a4 4 0 1 1-4-4c.215 0 .326.246.235.44a2.5 2.5 0 0 0 3.324 3.324Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        332127: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FullscreenEnterIcon: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M4 6a2 2 0 0 1 2-2h3a1 1 0 0 0 0-2H6a4 4 0 0 0-4 4v3a1 1 0 0 0 2 0V6Zm0 12a2 2 0 0 0 2 2h3a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4v-3a1 1 0 1 1 2 0v3ZM18 4a2 2 0 0 1 2 2v3a1 1 0 1 0 2 0V6a4 4 0 0 0-4-4h-3a1 1 0 1 0 0 2h3Zm2 14a2 2 0 0 1-2 2h-3a1 1 0 1 0 0 2h3a4 4 0 0 0 4-4v-3a1 1 0 1 0-2 0v3Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        485358: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FullscreenExitIcon: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M8 6a2 2 0 0 1-2 2H3a1 1 0 0 0 0 2h3a4 4 0 0 0 4-4V3a1 1 0 0 0-2 0v3Zm0 12a2 2 0 0 0-2-2H3a1 1 0 1 1 0-2h3a4 4 0 0 1 4 4v3a1 1 0 1 1-2 0v-3ZM18 8a2 2 0 0 1-2-2V3a1 1 0 1 0-2 0v3a4 4 0 0 0 4 4h3a1 1 0 1 0 0-2h-3Zm-2 10a2 2 0 0 1 2-2h3a1 1 0 1 0 0-2h-3a4 4 0 0 0-4 4v3a1 1 0 1 0 2 0v-3Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        159190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MaximizeIcon: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M14 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L18.586 4H15a1 1 0 0 1-1-1ZM5.414 20H9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v3.586l5.293-5.293a1 1 0 0 1 1.414 1.414L5.414 20Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        828516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PauseIcon: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M6 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6Zm9 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        268242: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SummaryIcon: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M4.667 4c-.375 0-.722.14-.967.37a1.113 1.113 0 0 0-.367.812c0 .196.095.469.258.754L3.628 6H6v-.831a1.115 1.115 0 0 0-.366-.8A1.419 1.419 0 0 0 4.667 4ZM3.11 8H6v10.818c0 .866.369 1.683 1 2.273.455.426 1.02.711 1.625.836A.998.998 0 0 0 9 22h10a4 4 0 0 0 4-4v-1a2 2 0 0 0-2-2h-1V5a3 3 0 0 0-3-3H4.75v.001L4.667 2c-.864 0-1.704.32-2.333.909-.632.59-1 1.406-1 2.273 0 .712.294 1.35.52 1.745a5.346 5.346 0 0 0 .478.7l.012.014.004.005.002.002v.001c.001 0 .001.001.761-.649l-.76.65a1 1 0 0 0 .76.35Zm6.55 9c.186.404.339.914.339 1.5a3.58 3.58 0 0 1-.34 1.5H19a2 2 0 0 0 2-2v-1H9.66ZM3.874 6.353h-.001v-.001.001ZM11 8a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2h-5Zm-1 5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        734575: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                channelEligibleForSummaries: function() {
                    return o
                },
                canSeeChannelSummaries: function() {
                    return u
                },
                canGuildUseConversationSummaries: function() {
                    return d
                },
                useChannelSummariesExperiment: function() {
                    return c
                },
                useGuildEligibleForSummaries: function() {
                    return m
                }
            });
            var l = n("744196"),
                a = n("862205"),
                i = n("305961"),
                s = n("49111"),
                r = n("724210");
            (0, a.createExperiment)({
                kind: "user",
                id: "2023-06_p13n_summarization_mobile_ux",
                label: "Channel Summaries UX on Mobile Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable mobile UX for channel summaries",
                    config: {
                        enabled: !0
                    }
                }]
            }), (0, a.createExperiment)({
                kind: "user",
                id: "2023-07_p13n_guild_dock_summaries",
                label: "Guild Dock Summaries on Mobile Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable guild dock summaries mobile UX",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function o(e) {
                return u(e, !0, !1)
            }

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (null == e || ! function(e) {
                        var t;
                        if (null == e) return !1;
                        let n = i.default.getGuild(null !== (t = null == e ? void 0 : e.guild_id) && void 0 !== t ? t : ""),
                            l = null != n && n.rulesChannelId === e.id;
                        return s.ChannelTypesSets.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !l
                    }(e) || !1 === t && e.hasFlag(r.ChannelFlags.SUMMARIES_DISABLED)) return !1;
                let l = i.default.getGuild(e.guild_id);
                return d(l, n)
            }

            function d(e) {
                var t;
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (null == e) return !1;
                return !!((null == (t = e.id) || t !== s.ME && t !== s.FAVORITES) && e.hasFeature(s.GuildFeatures.SUMMARIES_ENABLED_GA)) && (!n || e.hasFeature(s.GuildFeatures.SUMMARIES_ENABLED_BY_USER))
            }

            function c(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return u(e, t)
            }

            function m(e) {
                return arguments.length > 1 && void 0 !== arguments[1] && arguments[1], (0, l.default)([i.default], () => {
                    var t;
                    let n = i.default.getGuild(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "");
                    return d(n, !1)
                }, [e])
            }
        },
        554743: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("773670");

            function a(e, t) {
                let n = e.getBoundingClientRect(),
                    l = (t.clientX - n.left) / n.width;
                return Math.min(1, Math.max(0, l))
            }

            function i(e) {
                let {
                    ref: t,
                    onDrag: n,
                    onDragStart: i,
                    onDragEnd: s
                } = e, [r, o] = l.useState(!1);
                l.useEffect(() => {
                    if (r) return window.addEventListener("mouseup", e), window.addEventListener("mousemove", l), () => {
                        window.removeEventListener("mouseup", e), window.removeEventListener("mousemove", l)
                    };

                    function e() {
                        null == s || s(), o(!1)
                    }

                    function l(e) {
                        let l = t.current;
                        null != l && (null == n || n(a(l, e)))
                    }
                }, [t, r, s, n]);
                let u = l.useCallback(e => {
                    e.preventDefault();
                    let l = t.current;
                    null != l && (o(!0), null == i || i(), null == n || n(a(l, e)))
                }, [t, i, n]);
                return [r, u]
            }
        },
        333987: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("773670");

            function a(e) {
                let t = l.useRef(null),
                    n = l.useCallback(n => {
                        null != e && ("function" == typeof e ? e(n) : e.current = n, t.current = n)
                    }, [e]);
                return [t, n]
            }
        },
        750947: function(e, t, n) {
            "use strict";
            var l, a;
            n.r(t), n.d(t, {
                ApplicationDirectoryProfileSections: function() {
                    return l
                }
            }), (a = l || (l = {})).GENERAL = "GENERAL", a.IMAGES = "IMAGES", a.PREMIUM = "PREMIUM", a.PRIVACY = "PRIVACY"
        },
        406291: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MENTION_SENTINEL: function() {
                    return l
                },
                CHANNEL_SENTINEL: function() {
                    return a
                },
                EMOJI_SENTINEL: function() {
                    return i
                },
                REACTION_START_SENTINEL: function() {
                    return s
                },
                REACTION_END_SENTINEL: function() {
                    return r
                },
                COMMAND_SENTINEL: function() {
                    return o
                }
            });
            let l = "@",
                a = "#",
                i = ":",
                s = "+:",
                r = ":",
                o = "/"
        },
        865453: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackOpenPopout: function() {
                    return c
                }
            });
            var l = n("773670"),
                a = n("716241"),
                i = n("557562"),
                s = n("412745"),
                r = n("42203"),
                o = n("18494"),
                u = n("599110"),
                d = n("49111");
            let c = e => {
                let {
                    emojiId: t,
                    currentGuildId: n,
                    popoutData: c,
                    emojiSourceGuildId: m,
                    nonce: f,
                    demoMode: h
                } = e, {
                    current: p
                } = l.useRef({
                    guild_id: n,
                    emoji_id: t,
                    ...(0, a.collectChannelAnalyticsMetadata)(r.default.getChannel(o.default.getChannelId(n)))
                }), E = null != c && [s.EmojiPopoutType.ADD_PACK, s.EmojiPopoutType.REMOVE_PACK, s.EmojiPopoutType.GET_PREMIUM_INVENTORY_ENABLED].includes(c.type);
                return l.useEffect(() => {
                    var e;
                    (0, i.maybeGetPacksForUser)("useTrackOpenPopout"), !h && u.default.track(d.AnalyticEvents.OPEN_POPOUT, {
                        type: null !== (e = null == c ? void 0 : c.analyticsType) && void 0 !== e ? e : "Standard Emoji Popout",
                        inventory_pack_id: E ? m : void 0,
                        nonce: f,
                        ...p
                    })
                }, []), p
            }
        },
        457971: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isEligibleForExplicitMediaRedaction: function() {
                    return s
                },
                useIsEligibleForExplicitMediaRedaction: function() {
                    return r
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                    kind: "user",
                    id: "2023-08_explicit_media_redaction",
                    label: "Explicit Media Redaction",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable explicit media redaction",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                i = (0, l.createExperiment)({
                    kind: "user",
                    id: "2023-08_explicit_media_redaction_teen",
                    label: "Explicit Media Redaction for Teens",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable explicit media redaction for teens",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function s() {
                let {
                    enabled: e
                } = a.getCurrentConfig({
                    location: "686da2_1"
                }, {
                    autoTrackExposure: !0
                }), {
                    enabled: t
                } = i.getCurrentConfig({
                    location: "686da2_1"
                }, {
                    autoTrackExposure: !0
                });
                return e || t
            }

            function r() {
                let {
                    enabled: e
                } = a.useExperiment({
                    location: "686da2_2"
                }, {
                    autoTrackExposure: !0
                }), {
                    enabled: t
                } = i.useExperiment({
                    location: "686da2_2"
                }, {
                    autoTrackExposure: !0
                });
                return e || t
            }
        },
        793441: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveDefaultSetting: function() {
                    return I
                },
                getExplicitContentSettingOrDefault: function() {
                    return _
                },
                shouldRedactExplicitContent: function() {
                    return S
                },
                updateExplicitContentSetting: function() {
                    return N
                },
                shouldRedactExplicitContentForForum: function() {
                    return M
                },
                ObscuredMediaTypes: function() {
                    return i
                },
                isMediaObscured: function() {
                    return T
                },
                getObscuredMediaForMessage: function() {
                    return A
                },
                isPendingScan: function() {
                    return R
                },
                TrackMediaRedactionActionType: function() {
                    return s
                },
                trackMediaRedactionAction: function() {
                    return j
                }
            });
            var l, a, i, s, r = n("975162"),
                o = n("676574"),
                u = n("684337"),
                d = n("845579"),
                c = n("42203"),
                m = n("27618"),
                f = n("697218"),
                h = n("599110"),
                p = n("568734"),
                E = n("457971"),
                g = n("49111"),
                C = n("568456");
            n("782340");
            let v = () => {
                    let e = f.default.getCurrentUser();
                    return (null == e ? void 0 : e.nsfwAllowed) === !1 ? r.ExplicitContentRedaction.BLUR : r.ExplicitContentRedaction.SHOW
                },
                I = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!e) return v();
                    let n = d.ExplicitContentFilter.getSetting();
                    return t ? n === C.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS ? r.ExplicitContentRedaction.BLOCK : v() : n === C.ExplicitContentFilterTypes.NON_FRIENDS || n === C.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS ? r.ExplicitContentRedaction.BLOCK : v()
                },
                _ = () => {
                    let e = d.ExplicitContentSettings.getSetting();
                    return {
                        explicitContentGuilds: e.explicitContentGuilds === r.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? I() : e.explicitContentGuilds,
                        explicitContentNonFriendDm: e.explicitContentNonFriendDm === r.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? I(!0) : e.explicitContentNonFriendDm,
                        explicitContentFriendDm: e.explicitContentFriendDm === r.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? I(!0, !0) : e.explicitContentFriendDm
                    }
                };

            function x(e) {
                return e === r.ExplicitContentRedaction.BLUR || e === r.ExplicitContentRedaction.BLOCK
            }

            function S(e) {
                if (!(0, E.isEligibleForExplicitMediaRedaction)()) return !1;
                let t = f.default.getCurrentUser();
                if (null == t) return !1;
                let {
                    explicitContentGuilds: n,
                    explicitContentFriendDm: l,
                    explicitContentNonFriendDm: a
                } = _(), i = c.default.getChannel(e.channel_id);
                if (null == i) return !1;
                if (i.isDM() || i.isGroupDM()) return m.default.getFriendIDs().includes(e.author.id) ? x(l) : x(a);
                return x(n)
            }
            let N = e => {
                let t = _();
                d.ExplicitContentSettings.updateSetting({
                    ...t,
                    ...e
                })
            };

            function M() {
                if (!(0, E.isEligibleForExplicitMediaRedaction)()) return !1;
                let e = f.default.getCurrentUser();
                if (null == e) return !1;
                let {
                    explicitContentGuilds: t
                } = _();
                return x(t)
            }

            function T(e, t) {
                var n, l;
                if (!t) return !1;
                if (o.default.get("obscure_blur_effect_enabled")) return !0;
                switch (e.type) {
                    case i.Embed:
                        return (0, p.hasFlag)(null !== (n = e.media.flags) && void 0 !== n ? n : 0, g.MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA);
                    case i.Attachment:
                        return (0, p.hasFlag)(null !== (l = e.media.flags) && void 0 !== l ? l : 0, g.MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA);
                    default:
                        return !1
                }
            }

            function A(e) {
                let t = S(e);
                return t ? {
                    obscuredAttachments: e.attachments.filter(e => T({
                        type: i.Attachment,
                        media: e
                    }, !0)),
                    obscuredEmbeds: e.embeds.filter(e => T({
                        type: i.Embed,
                        media: e
                    }, !0))
                } : {
                    obscuredAttachments: [],
                    obscuredEmbeds: []
                }
            }

            function R(e) {
                return !o.default.get("explicit_media_redaction_ignore_pending_scan") && null == e
            }

            function j(e) {
                let {
                    action: t,
                    channelId: n,
                    messageId: l
                } = e;
                if (null == n || null == l) return;
                let a = c.default.getChannel(n);
                h.default.track(g.AnalyticEvents.EXPLICIT_MEDIA_ACTION, {
                    action: t,
                    guild_id: null == a ? void 0 : a.guild_id,
                    channel_id: n,
                    message_id: l,
                    user_is_underage: (0, u.isCurrentUserTeen)()
                })
            }(l = i || (i = {}))[l.Attachment = 0] = "Attachment", l[l.Embed = 1] = "Embed", (a = s || (s = {})).EXPLICIT_MEDIA_LEARN_MORE_VIEWED = "explicit_media_learn_more_viewed", a.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = "explicit_media_learn_more_click_settings", a.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = "explicit_media_learn_more_click_learn_more", a.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = "explicit_media_learn_more_click_dismiss", a.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = "explicit_media_learn_more_click_false_positive", a.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = "explicit_media_false_positive_viewed", a.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = "explicit_media_false_positive_click_confirm", a.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = "explicit_media_false_positive_click_cancel"
        },
        200521: function(e, t, n) {
            "use strict";
            var l, a, i, s;
            n.r(t), n.d(t, {
                FeedbackRating: function() {
                    return l
                },
                FEEDBACK_FREEFORM_LENGTH: function() {
                    return r
                },
                FeedbackType: function() {
                    return a
                },
                FeedbackTypePrecedence: function() {
                    return o
                }
            }), (i = l || (l = {})).BAD = "bad", i.NEUTRAL = "neutral", i.GOOD = "good";
            let r = 1024;
            (s = a || (a = {}))[s.VOICE = 0] = "VOICE", s[s.STREAM = 1] = "STREAM", s[s.VIDEO_BACKGROUND = 2] = "VIDEO_BACKGROUND", s[s.ACTIVITY = 3] = "ACTIVITY", s[s.IN_APP_REPORTS = 4] = "IN_APP_REPORTS";
            let o = [a.VIDEO_BACKGROUND, a.STREAM, a.ACTIVITY, a.VOICE, a.IN_APP_REPORTS].reduce((e, t, n) => ({
                ...e,
                [t]: n
            }), {})
        },
        791234: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getEmbedColor: function() {
                    return p
                },
                ForumPostMediaTypes: function() {
                    return a
                },
                useForumPostMediaThumbnail: function() {
                    return _
                },
                useForumPostMediaProperties: function() {
                    return x
                },
                useFindFirstMediaProperties: function() {
                    return S
                },
                useFirstMediaIsEmbed: function() {
                    return N
                },
                shouldShowAddMediaToOriginalPostModal: function() {
                    return M
                },
                messageContainsGifOrVideo: function() {
                    return T
                }
            });
            var l, a, i = n("773670"),
                s = n("651693"),
                r = n("610730"),
                o = n("845579"),
                u = n("42203"),
                d = n("377253"),
                c = n("697218"),
                m = n("568734"),
                f = n("449008"),
                h = n("49111");

            function p(e, t) {
                if (null == e || null == e.embeds[0]) return;
                let {
                    color: n
                } = e.embeds[0];
                return null != n && "#ffffff" === n.toLowerCase() || t ? void 0 : n
            }

            function E(e) {
                if (null == e) return !1;
                let {
                    filename: t,
                    height: n,
                    width: l
                } = e;
                return (0, s.isImageFile)(t) && null != n && n > 0 && null != l && l > 0
            }

            function g(e) {
                return null != e && null != e && (0, s.isVideoFile)(e.filename) && null != e.proxy_url
            }

            function C(e) {
                return E(e) || g(e)
            }(l = a || (a = {})).EMBED = "embed", l.ATTACHMENT = "attachment";

            function v(e) {
                let t = o.InlineAttachmentMedia.useSetting();
                return function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.InlineAttachmentMedia.getSetting();
                    if (!t) return [];
                    let n = null == e ? void 0 : e.attachments;
                    return null == e || null == n ? [] : n.filter(C).map(e => {
                        let {
                            proxy_url: t,
                            url: n,
                            description: l,
                            spoiler: i,
                            flags: r,
                            width: o,
                            height: u,
                            filename: d,
                            content_scan_version: c
                        } = e;
                        if (null == o || null == u) return null;
                        let f = (0, s.isVideoFile)(d),
                            p = null != e.flags && (0, m.hasFlag)(e.flags, h.MessageAttachmentFlags.IS_THUMBNAIL);
                        return {
                            src: f ? "".concat(t, "?format=jpeg") : null != t ? t : n,
                            width: o,
                            height: u,
                            spoiler: null != i && i,
                            flags: r,
                            contentScanVersion: c,
                            alt: l,
                            isVideo: f,
                            isThumbnail: p,
                            type: a.ATTACHMENT
                        }
                    }).filter(f.isNotNullish)
                }(e, t)
            }

            function I(e, t) {
                let n = o.InlineEmbedMedia.useSetting(),
                    l = o.RenderEmbeds.useSetting();
                if (null == e) return [];
                let i = e.embeds;
                return n && l && null != i ? i.map(e => {
                    var n;
                    let l = null !== (n = e.image) && void 0 !== n ? n : e.thumbnail;
                    if (null == l && null != e.images && (l = e.images[0]), null != l && null != l.url) {
                        let {
                            height: n,
                            proxyURL: i,
                            url: r,
                            width: o
                        } = l, u = null != i && (0, s.isVideoUrl)(i);
                        return {
                            src: null != i && "" !== i ? i : r,
                            height: n,
                            width: o,
                            spoiler: t,
                            flags: e.flags,
                            contentScanVersion: e.contentScanVersion,
                            isVideo: u,
                            type: a.EMBED
                        }
                    }
                }).filter(f.isNotNullish) : []
            }

            function _(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = x(e, n);
                return i.useMemo(() => {
                    if (null == t) return [];
                    if (!t.isMediaChannel()) return l;
                    {
                        let e = l.find(e => e.isThumbnail);
                        return null != e ? [e] : l
                    }
                }, [t, l])
            }

            function x(e, t) {
                let n = v(e),
                    l = I(e, t);
                return [...n, ...l]
            }

            function S(e, t) {
                var n, l;
                let a = v(e),
                    i = I(e, t);
                return null !== (l = null !== (n = a[0]) && void 0 !== n ? n : i[0]) && void 0 !== l ? l : null
            }

            function N(e, t) {
                let n = v(e),
                    l = I(e, t);
                return null == n[0] && null != l[0]
            }

            function M(e, t) {
                var n;
                let l = u.default.getChannel(t);
                if (null == l) return !1;
                let a = d.default.getMessage(l.id, l.id);
                return null != a && e.length > 0 && null != e.find(e => e.isImage || e.isVideo) && l.isForumPost() && l.ownerId === (null === (n = c.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && 0 === r.default.getCount(l.id) && (0 === a.attachments.length || null == a.attachments.find(e => E(e) || g(e)))
            }

            function T(e) {
                return e.reduce((e, t) => ({
                    containsVideo: e.containsVideo || t.isVideo,
                    containsGif: e.containsGif || (0, s.isAnimatedImageUrl)(t.src)
                }), {
                    containsVideo: !1,
                    containsGif: !1
                })
            }
        },
        120027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("75196");

            function i(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = "currentColor",
                    ...s
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 4 4",
                    children: (0, l.jsx)("circle", {
                        cx: "2",
                        cy: "2",
                        r: "2",
                        fill: i
                    })
                })
            }
        },
        270295: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("575482"),
                i = n.n(a),
                s = n("77078"),
                r = n("181114"),
                o = n("915675"),
                u = n("178853");

            function d(e) {
                let {
                    children: t,
                    className: n,
                    size: a = s.Button.Sizes.MEDIUM,
                    onlyShineOnHover: d = !1,
                    ...c
                } = e;
                return (0, l.jsx)(r.default, {
                    ...c,
                    color: s.Button.Colors.CUSTOM,
                    size: a,
                    className: i(u.button, n),
                    onlyShineOnHover: d,
                    children: (0, l.jsxs)("div", {
                        className: u.buttonContents,
                        children: [(0, l.jsx)(o.default, {
                            className: u.icon
                        }), t]
                    })
                })
            }
        },
        915675: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("75196");

            function i(e) {
                let {
                    width: t = 16,
                    height: n = t,
                    color: i = "currentColor",
                    foreground: s,
                    ...r
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(r),
                    width: t,
                    height: n,
                    viewBox: "0 0 16 16",
                    children: (0, l.jsx)("path", {
                        d: "M14.3385 7.6721L10.4015 6.85189L11.891 4.56187C11.9309 4.49891 11.9482 4.42423 11.94 4.35013C11.9318 4.27603 11.8986 4.20692 11.8459 4.15421C11.7932 4.10149 11.7241 4.06829 11.65 4.06009C11.5759 4.05189 11.5012 4.0692 11.4382 4.10911L9.14822 5.59859L8.328 1.66158C8.328 1.57457 8.29345 1.49114 8.23193 1.42961C8.1704 1.36809 8.08693 1.3335 7.99992 1.3335C7.91291 1.3335 7.82944 1.36809 7.76791 1.42961C7.70639 1.49114 7.67183 1.57457 7.67183 1.66158L6.85162 5.59859L4.5616 4.10911C4.49863 4.0692 4.42395 4.05189 4.34985 4.06009C4.27576 4.06829 4.20665 4.10149 4.15393 4.15421C4.10122 4.20692 4.06802 4.27603 4.05982 4.35013C4.05162 4.42423 4.06892 4.49891 4.10884 4.56187L5.59836 6.85189L1.66134 7.6721C1.57432 7.6721 1.49086 7.70665 1.42933 7.76818C1.3678 7.8297 1.33325 7.91317 1.33325 8.00018C1.33325 8.0872 1.3678 8.17062 1.42933 8.23215C1.49086 8.29368 1.57432 8.32827 1.66134 8.32827L5.59836 9.14848L4.10884 11.4385C4.06803 11.5011 4.05031 11.5759 4.0587 11.6502C4.06708 11.7244 4.10104 11.7934 4.15477 11.8453C4.18407 11.8768 4.21963 11.9019 4.25918 11.9188C4.29874 11.9358 4.34139 11.9443 4.38442 11.9438C4.44713 11.9426 4.50835 11.9244 4.5616 11.8913L6.85162 10.4017L7.67183 14.3387C7.67183 14.4258 7.70639 14.5092 7.76791 14.5708C7.82944 14.6323 7.91291 14.6668 7.99992 14.6668C8.08693 14.6668 8.1704 14.6323 8.23193 14.5708C8.29345 14.5092 8.328 14.4258 8.328 14.3387L9.14822 10.4017L11.4382 11.8913C11.4915 11.9244 11.5527 11.9426 11.6154 11.9438C11.6585 11.9443 11.7011 11.9358 11.7407 11.9188C11.7802 11.9019 11.8158 11.8768 11.8451 11.8453C11.8988 11.7934 11.9328 11.7244 11.9411 11.6502C11.9495 11.5759 11.9318 11.5011 11.891 11.4385L10.4015 9.14848L14.3385 8.32827C14.4255 8.32827 14.509 8.29368 14.5705 8.23215C14.632 8.17062 14.6666 8.0872 14.6666 8.00018C14.6666 7.91317 14.632 7.8297 14.5705 7.76818C14.509 7.70665 14.4255 7.6721 14.3385 7.6721Z",
                        fill: i,
                        className: s
                    })
                })
            }
        },
        468560: function(e, t, n) {
            "use strict";

            function l(e, t) {
                var n;
                let l = null == t ? void 0 : null === (n = t.replace(/-/g, "_")) || void 0 === n ? void 0 : n.toUpperCase();
                if (null != l && l in e) return e[l]
            }
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            })
        },
        368639: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                parseBioReact: function() {
                    return o
                }
            });
            var l = n("353183"),
                a = n("52140"),
                i = n("888198"),
                s = n("788554");
            let r = (0, s.default)([i.default.PROFILE_BIO_RULES, (0, a.default)({
                    enableBuildOverrides: !1
                })]),
                o = l.reactParserFor(r)
        },
        52140: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("575482"),
                s = n.n(i),
                r = n("870647"),
                o = n("77078"),
                u = n("340616"),
                d = n("269936"),
                c = n("385976"),
                m = n("855920"),
                f = n("393414"),
                h = n("305961"),
                p = n("666897"),
                E = n("505684"),
                g = n("36694"),
                C = n("413709"),
                v = n("873218"),
                I = n("250832"),
                _ = n("22248"),
                x = n("28236"),
                S = n("306160"),
                N = n("141302"),
                M = n("844659"),
                T = n("657057"),
                A = n("180161"),
                R = n("781423"),
                j = n("47677"),
                b = n("49111"),
                L = n("724210"),
                y = n("782340"),
                O = n("470039");
            n("822822");
            var D = n("422137");

            function P(e) {
                let {
                    text: t
                } = e, [n, i] = a.useState(!1);
                return (0, l.jsx)(o.Clickable, {
                    onClick: () => {
                        try {
                            (0, S.copy)(t), i(!0)
                        } catch (e) {
                            i(!1)
                        }
                    },
                    children: n ? (0, l.jsx)(g.default, {
                        width: 16,
                        height: 16
                    }) : (0, l.jsx)(C.default, {
                        width: 16,
                        height: 16
                    })
                })
            }
            let w = {
                blockQuote: {
                    react: (e, t, n) => (0, l.jsxs)("div", {
                        className: D.blockquoteContainer,
                        children: [(0, l.jsx)("div", {
                            className: D.blockquoteDivider
                        }), (0, l.jsx)("blockquote", {
                            children: t(e.content, n)
                        })]
                    }, n.key)
                },
                s: {
                    react: (e, t, n) => (0, l.jsx)("s", {
                        children: t(e.content, n)
                    }, n.key)
                },
                highlight: {
                    react: (e, t, n) => (0, l.jsx)("span", {
                        className: "highlight",
                        children: e.content
                    }, n.key)
                },
                paragraph: {
                    react: (e, t, n) => (0, l.jsx)("p", {
                        children: t(e.content, n)
                    }, n.key)
                },
                inlineCode: {
                    react: (e, t, n) => (0, l.jsx)("code", {
                        className: "inline",
                        children: (0, M.smartOutput)(e, t, n)
                    }, n.key)
                },
                codeBlock: {
                    react(e, t, a) {
                        let i = () => (0, l.jsx)("code", {
                            className: s(O.scrollbarGhostHairline, "hljs"),
                            children: (0, M.smartOutput)(e, t, a)
                        });
                        return (0, l.jsx)("pre", {
                            children: (0, l.jsxs)("div", {
                                className: D.codeContainer,
                                children: [S.SUPPORTS_COPY ? (0, l.jsx)("div", {
                                    className: D.codeActions,
                                    children: (0, l.jsx)(P, {
                                        text: e.content
                                    })
                                }) : null, (0, l.jsx)(d.LazyLibrary, {
                                    createPromise: () => n.el("86256").then(n.bind(n, "86256")),
                                    webpackId: "86256",
                                    renderFallback: i,
                                    render: t => {
                                        if (!(e.lang && t.hasLanguage(e.lang))) return i();
                                        {
                                            let n = t.highlight(e.lang, e.content, !0);
                                            return null == n ? i() : (0, l.jsx)("code", {
                                                className: s(O.scrollbarGhostHairline, "hljs", n.language),
                                                dangerouslySetInnerHTML: {
                                                    __html: n.value
                                                }
                                            })
                                        }
                                    }
                                })]
                            })
                        }, a.key)
                    }
                },
                text: {
                    react: (e, t, n) => "string" == typeof e.content ? (0, l.jsx)("span", {
                        children: e.content
                    }, n.key) : (0, l.jsx)("span", {
                        children: t(e.content, n)
                    }, n.key)
                },
                spoiler: {
                    react: (e, t, n) => (0, l.jsx)(E.default, {
                        type: E.default.Types.TEXT,
                        inline: n.formatInline,
                        renderTextElement: (e, t) => null == e || e.type !== u.default || t ? e : a.cloneElement(e, {
                            tabIndex: -1
                        }),
                        children: () => t(e.content, n)
                    }, n.key)
                },
                soundboard: {
                    react: e => (0, l.jsx)(x.default, {
                        channelId: e.channelId,
                        soundId: e.soundId,
                        jumbo: e.jumboable
                    })
                },
                staticRouteLink: {
                    react(e, t, n) {
                        let a = () => {
                            ! function(e, t) {
                                let n = h.default.getGuild(e);
                                if (null == e || null == n || !n.hasFeature(b.GuildFeatures.COMMUNITY)) return;
                                let l = {
                                        home: L.StaticChannelRoute.GUILD_HOME,
                                        browse: L.StaticChannelRoute.CHANNEL_BROWSER,
                                        customize: L.StaticChannelRoute.CUSTOMIZE_COMMUNITY,
                                        guide: L.StaticChannelRoute.GUILD_HOME
                                    },
                                    a = l[t],
                                    i = h.default.getGuild(e);
                                if ((null == i ? void 0 : i.joinedAt) == null) {
                                    N.startLurking(e, {}, {
                                        channelId: a
                                    });
                                    return
                                }(0, f.transitionTo)(b.Routes.CHANNEL(e, a))
                            }(e.guildId, e.channelId)
                        };
                        if (!(0, M.isStaticRouteIconType)(e.channelId)) return null;
                        let i = "".concat(e.channelId);
                        switch (e.channelId) {
                            case L.StaticChannelId.GUILD_HOME:
                            case L.StaticChannelId.SERVER_GUIDE:
                                i = y.default.Messages.SERVER_GUIDE;
                                break;
                            case L.StaticChannelId.CHANNEL_BROWSER:
                                i = y.default.Messages.GUILD_SIDEBAR_CHANNEL_BROWSER;
                                break;
                            case L.StaticChannelId.CUSTOMIZE_COMMUNITY:
                                i = y.default.Messages.CHANNELS_AND_ROLES
                        }
                        return (0, l.jsx)(o.Tooltip, {
                            text: i,
                            position: "top",
                            children: i => {
                                let {
                                    onMouseEnter: s,
                                    onMouseLeave: r
                                } = i;
                                return (0, l.jsx)(p.default, {
                                    role: "link",
                                    onClick: a,
                                    onMouseEnter: s,
                                    onMouseLeave: r,
                                    className: "channelMention",
                                    iconType: e.channelId,
                                    children: t(e.content, n)
                                }, n.key)
                            }
                        }, n.key)
                    }
                },
                timestamp: {
                    react: (e, t, n) => (0, l.jsx)(T.default, {
                        node: e
                    }, n.key)
                },
                list: {
                    react: (e, t, n) => {
                        let l = e.ordered ? "ol" : "ul",
                            a = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
                        return (0, r.reactElement)(l, "".concat(n.key), {
                            start: e.start,
                            className: n.formatInline ? D.inlineFormat : null,
                            style: {
                                "--totalCharacters": a
                            },
                            children: e.items.map((e, l) => {
                                let a = (0, r.reactElement)("span", "".concat(n.key, "-").concat(l, "-innerSpan"), {
                                    children: t(e, n)
                                });
                                return (0, r.reactElement)("li", "".concat(n.key, "-").concat(l) + l, {
                                    children: a
                                })
                            })
                        })
                    }
                },
                heading: {
                    react: (e, t, n) => {
                        let l = (0, r.reactElement)("span", "".concat(n.key, "-innerSpan"), {
                            children: t(e.content, n)
                        });
                        return (0, r.reactElement)("h" + e.level, (null == n ? void 0 : n.key) != null ? "".concat(n.key) : null, {
                            children: l,
                            className: n.formatInline ? D.inlineFormat : null
                        })
                    }
                },
                guild: {
                    react: (e, t, n) => {
                        let a = h.default.getGuild(e.guildId);
                        return (0, l.jsx)(I.default, {
                            guild: a,
                            children: (0, M.smartOutput)(e, t, n)
                        }, n.key)
                    }
                },
                channel: {
                    react: (e, t, n) => (0, l.jsx)(v.default, {
                        iconType: e.iconType,
                        children: (0, M.smartOutput)(e, t, n)
                    }, n.key)
                },
                message: {
                    react: (e, t, n) => (0, l.jsx)(_.default, {}, n.key)
                }
            };

            function U(e) {
                return {
                    ...w,
                    link: (0, j.default)(e),
                    emoji: function(e) {
                        let {
                            emojiTooltipPosition: t = "top",
                            enableEmojiClick: n = !0
                        } = e;
                        return {
                            react(e, a, i) {
                                let {
                                    key: s
                                } = i;
                                return e.src ? (0, l.jsx)(m.MessageStandardEmoji, {
                                    node: e,
                                    tooltipPosition: t,
                                    enableClick: n
                                }, s) : (0, l.jsx)("span", {
                                    children: e.surrogate
                                }, s)
                            }
                        }
                    }(e),
                    customEmoji: function(e) {
                        let {
                            emojiTooltipPosition: t = "top",
                            enableEmojiClick: n = !0
                        } = e;
                        return {
                            react(e, a, i) {
                                let {
                                    key: s,
                                    guildId: r,
                                    isInteracting: o
                                } = i, u = c.default.getDisambiguatedEmojiContext(r).getById(e.emojiId);
                                if (null != u) {
                                    let t = u.require_colons;
                                    e = {
                                        ...e,
                                        name: t ? ":".concat(u.name, ":") : u.name
                                    }
                                }
                                return (0, l.jsx)(m.MessageCustomEmoji, {
                                    isInteracting: o,
                                    node: e,
                                    tooltipPosition: t,
                                    enableClick: n
                                }, s)
                            }
                        }
                    }(e),
                    channelMention: (0, A.default)(e),
                    commandMention: (0, R.default)(e)
                }
            }
        },
        844659: function(e, t, n) {
            "use strict";

            function l(e, t, n) {
                return "string" == typeof e.content || void 0 === e.content ? e.content : t(e.content, n)
            }

            function a(e) {
                return "home" === e || "browse" === e || "customize" === e || "guide" === e
            }
            n.r(t), n.d(t, {
                smartOutput: function() {
                    return l
                },
                isStaticRouteIconType: function() {
                    return a
                }
            })
        },
        657057: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("77078"),
                i = n("683012"),
                s = n("422137");

            function r(e) {
                let {
                    node: t
                } = e, n = (0, i.default)(t);
                return (0, l.jsx)(a.Tooltip, {
                    text: t.full,
                    tooltipClassName: s.timestampTooltip,
                    children: e => (0, l.jsx)("span", {
                        ...e,
                        className: s.timestamp,
                        children: n
                    })
                })
            }
        },
        683012: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("773670"),
                a = n("377849"),
                i = n.n(a),
                s = n("365444"),
                r = n("646630"),
                o = n("49111");
            let u = [
                    [2 * o.Durations.MINUTE, o.Durations.SECOND],
                    [5 * o.Durations.MINUTE, o.Durations.MINUTE],
                    [45 * o.Durations.MINUTE, 2 * o.Durations.MINUTE],
                    [21 * o.Durations.HOUR, 5 * o.Durations.MINUTE]
                ],
                d = 2 * o.Durations.HOUR;

            function c(e) {
                let t = (0, s.useForceUpdate)();
                return (l.useEffect(() => {
                    if ("R" !== e.format) return;
                    let n = 1e3 * d,
                        l = Math.abs(e.parsed.diff(i()));
                    for (let [e, t] of u)
                        if (l < 1e3 * e) {
                            n = 1e3 * t;
                            break
                        } let a = setInterval(() => {
                        t()
                    }, n);
                    return () => clearInterval(a)
                }, [t, e.format, e.parsed]), "R" === e.format) ? r.TIMESTAMP_FORMATS.R(e.parsed) : e.formatted
            }
        },
        180161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("77078"),
                i = n("272030"),
                s = n("987317"),
                r = n("765089"),
                o = n("361572"),
                u = n("537325"),
                d = n("233069"),
                c = n("42203"),
                m = n("305961"),
                f = n("666897"),
                h = n("848825"),
                p = n("141302"),
                E = n("844659"),
                g = n("49111");
            async function C(e, t, n) {
                if (null == t) return;
                if (r.default.trackDiscordLinkClicked({
                        guildId: e,
                        channelId: t,
                        messageId: n
                    }), null != e) {
                    let n = m.default.getGuild(e);
                    if ((null == n ? void 0 : n.joinedAt) == null) try {
                        await p.startLurking(e, {}, {
                            channelId: t
                        });
                        return
                    } catch {}
                }
                let l = c.default.getChannel(t);
                if (null != l && null == n && (0, d.isGuildVocalChannelType)(l.type) && (0, o.canViewChannel)(l)) {
                    s.default.selectVoiceChannel(l.id);
                    return
                }(0, u.default)(g.Routes.CHANNEL(e, t, n))
            }

            function v(e) {
                return {
                    react(t, s, r) {
                        let o = c.default.getChannel(t.channelId),
                            u = r.noStyleAndInteraction ? void 0 : n => {
                                if (e.shouldStopPropagation) null == n || n.stopPropagation();
                                C(t.guildId, t.channelId, t.messageId), e.shouldCloseDefaultModals && (0, a.closeAllModals)()
                            },
                            d = r.noStyleAndInteraction || null == t.channelId || null == o && null == t.originalLink ? g.NOOP : e => {
                                (0, i.openContextMenuLazy)(e, async () => {
                                    var e;
                                    let {
                                        default: a
                                    } = await n.el("454000").then(n.bind(n, "454000"));
                                    return n => (0, l.jsx)(a, {
                                        ...n,
                                        channel: o,
                                        channelId: null !== (e = null == o ? void 0 : o.id) && void 0 !== e ? e : t.channelId,
                                        originalLink: t.originalLink,
                                        messageId: t.messageId
                                    })
                                })
                            };
                        return (0, l.jsxs)(f.default, {
                            role: "link",
                            onClick: u,
                            onContextMenu: d,
                            className: "channelMention",
                            children: [null != t.inContent ? s(t.inContent, r) : null, null != t.inContent ? (0, l.jsx)(h.default, {}) : null, (0, E.smartOutput)(t, s, r)]
                        }, r.key)
                    }
                }
            }
        },
        781423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CommandClickable: function() {
                    return _
                },
                default: function() {
                    return x
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("498225"),
                s = n("77078"),
                r = n("507217"),
                o = n("240249"),
                u = n("524768"),
                d = n("42203"),
                c = n("474643"),
                m = n("18494"),
                f = n("666897"),
                h = n("659500"),
                p = n("49111"),
                E = n("406291"),
                g = n("782340"),
                C = n("725325");

            function v(e, t, n, a) {
                if (null == e) return;
                let i = () => {
                    let l = d.default.getChannel(e);
                    if (null == l) return;
                    let {
                        command: i,
                        application: s
                    } = o.getCachedCommand(l, n);
                    if (null != i && i.name === t) {
                        var c, m;
                        h.ComponentDispatch.dispatch(p.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: e
                        });
                        let t = null != s ? {
                            type: u.ApplicationCommandSectionType.APPLICATION,
                            id: s.id,
                            icon: null !== (m = null == s ? void 0 : null === (c = s.bot) || void 0 === c ? void 0 : c.username) && void 0 !== m ? m : s.icon,
                            name: s.name,
                            application: s
                        } : null;
                        r.setActiveCommand({
                            channelId: e,
                            command: null,
                            section: null
                        }), r.setActiveCommand({
                            channelId: e,
                            command: i,
                            section: t,
                            location: a
                        })
                    }
                };
                "" !== c.default.getDraft(e, c.DraftType.ChannelMessage) ? (0, s.openModal)(t => (0, l.jsx)(s.ConfirmModal, {
                    header: g.default.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_HEADER,
                    confirmText: g.default.Messages.CLEAR,
                    cancelText: g.default.Messages.CANCEL,
                    onConfirm: () => i(),
                    confirmButtonColor: s.Button.Colors.BRAND,
                    onCloseCallback: () => {
                        h.ComponentDispatch.dispatch(p.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: e
                        })
                    },
                    ...t,
                    children: (0, l.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children: g.default.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_BODY
                    })
                })) : i()
            }

            function I(e) {
                var t, n;
                let {
                    node: r,
                    output: c,
                    state: h
                } = e, p = (0, i.useStateFromStores)([d.default, m.default], () => d.default.getChannel(null !== (t = r.channelId) && void 0 !== t ? t : m.default.getChannelId()), [r.channelId]), {
                    command: g
                } = o.useCommand(p, null !== (n = r.commandKey) && void 0 !== n ? n : ""), C = a.useCallback(e => {
                    null == e || e.stopPropagation(), null != p && null != r.commandName && null != r.commandKey && v(p.id, r.commandName, r.commandKey, u.ApplicationCommandTriggerLocations.MENTION)
                }, [p, r.commandKey, r.commandName]), I = null != g && g.name === r.commandName;
                return I ? (0, l.jsx)(s.Tooltip, {
                    text: r.output,
                    position: "top",
                    children: e => {
                        let {
                            onMouseEnter: t,
                            onMouseLeave: n
                        } = e;
                        return (0, l.jsxs)(f.default, {
                            role: "link",
                            onClick: C,
                            onMouseEnter: t,
                            onMouseLeave: n,
                            children: [E.COMMAND_SENTINEL, c(r.content, h)]
                        }, h.key)
                    }
                }, h.key) : (0, l.jsxs)("span", {
                    children: [E.COMMAND_SENTINEL, c(r.content, h)]
                })
            }

            function _(e) {
                let {
                    commandId: t,
                    commandName: n,
                    commandDescription: a,
                    onClick: r
                } = e, o = (0, i.useStateFromStores)([m.default], () => m.default.getChannelId()), d = e => {
                    null == e || e.stopPropagation(), v(o, n, t, u.ApplicationCommandTriggerLocations.POPULAR_COMMANDS), null == r || r(t)
                };
                return (0, l.jsx)(s.Tooltip, {
                    text: a,
                    position: "top",
                    tooltipContentClassName: C.tooltip,
                    children: e => {
                        let {
                            onMouseEnter: t,
                            onMouseLeave: a
                        } = e;
                        return (0, l.jsxs)(s.Button, {
                            color: s.ButtonColors.PRIMARY,
                            size: s.ButtonSizes.ICON,
                            onClick: d,
                            onMouseEnter: t,
                            onMouseLeave: a,
                            children: ["/", n]
                        })
                    }
                })
            }

            function x(e) {
                return {
                    react: (e, t, n) => (0, l.jsx)(I, {
                        node: e,
                        output: t,
                        state: n
                    })
                }
            }
        },
        806135: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("333987"),
                s = a.forwardRef(function(e, t) {
                    let {
                        muted: n,
                        volume: s,
                        playing: r,
                        ...o
                    } = e, [u, d] = (0, i.default)(t);
                    return a.useEffect(() => {
                        let e = u.current;
                        if (null != e) void 0 !== n && (e.muted = n)
                    }, [u, n]), a.useEffect(() => {
                        let e = u.current;
                        if (null != e) void 0 !== s && (e.volume = s)
                    }, [u, s]), a.useEffect(() => {
                        let e = u.current;
                        if (null != e) void 0 !== r && (r ? e.play() : e.pause())
                    }, [u, r]), (0, l.jsx)("audio", {
                        ref: d,
                        ...o
                    })
                })
        },
        605160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ObscureReason: function() {
                    return a
                },
                getObscureReason: function() {
                    return g
                },
                getObscureReasonForEmbed: function() {
                    return C
                },
                getForumPostShouldObscure: function() {
                    return v
                },
                useShouldObscure: function() {
                    return I
                },
                getObscuredAlt: function() {
                    return _
                }
            });
            var l, a, i = n("505143"),
                s = n("744196"),
                r = n("676574"),
                o = n("793441"),
                u = n("791234"),
                d = n("845579"),
                c = n("377253"),
                m = n("957255"),
                f = n("568734"),
                h = n("70845"),
                p = n("49111"),
                E = n("782340");
            (l = a || (a = {})).SPOILER = "spoiler", l.EXPLICIT_CONTENT = "explicit_content", l.POTENTIAL_EXPLICIT_CONTENT = "potential_explicit_content";
            let g = (e, t) => {
                    let {
                        spoiler: n,
                        flags: l = 0,
                        content_scan_version: i
                    } = e, s = (0, o.shouldRedactExplicitContent)(t);
                    return s && (0, o.isPendingScan)(i) ? a.POTENTIAL_EXPLICIT_CONTENT : s && ((0, f.hasFlag)(l, p.MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA) || r.default.get("obscure_blur_effect_enabled")) ? a.EXPLICIT_CONTENT : n || (0, f.hasFlag)(l, p.MessageAttachmentFlags.IS_SPOILER) ? a.SPOILER : null
                },
                C = (e, t, n, l) => {
                    let {
                        flags: i = 0,
                        contentScanVersion: s
                    } = e, u = c.default.getMessage(t, n);
                    if (null == u) return null;
                    let d = (0, o.shouldRedactExplicitContent)(u);
                    return d && (0, o.isPendingScan)(s) ? a.POTENTIAL_EXPLICIT_CONTENT : d && ((0, f.hasFlag)(i, p.MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA) || r.default.get("obscure_blur_effect_enabled")) ? a.EXPLICIT_CONTENT : l ? a.SPOILER : null
                };

            function v(e, t) {
                if (null == e) return [!1, void 0];
                let n = (0, o.shouldRedactExplicitContentForForum)();
                if (n && (0, o.isPendingScan)(e.contentScanVersion)) return [!0, a.POTENTIAL_EXPLICIT_CONTENT];
                let l = function(e) {
                    switch (e) {
                        case u.ForumPostMediaTypes.EMBED:
                            return o.ObscuredMediaTypes.Embed;
                        case u.ForumPostMediaTypes.ATTACHMENT:
                            return o.ObscuredMediaTypes.Attachment;
                        default:
                            return
                    }
                }(e.type);
                return null != l && (0, o.isMediaObscured)({
                    type: l,
                    media: e
                }, n) ? [!0, a.EXPLICIT_CONTENT] : e.spoiler ? [t, a.SPOILER] : [!1, void 0]
            }

            function I(e) {
                let {
                    channel: t,
                    media: n
                } = e, l = (0, s.default)([m.default], () => null != t && m.default.can(p.Permissions.MANAGE_MESSAGES, t)), a = d.RenderSpoilers.useSetting();
                return v(n, !(0, h.default)(a, l))
            }
            let _ = e => (0, i.match)(e).with(a.EXPLICIT_CONTENT, () => E.default.Messages.EXPLICIT_CONTENT_ALT).with(a.SPOILER, () => E.default.Messages.SPOILER_HIDDEN_A11Y_LABEL).otherwise(() => void 0)
        },
        277855: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSoundmojiExperiment: function() {
                    return i
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "user",
                id: "2023-09_soundmoji",
                label: "Soundmoji",
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

            function i(e) {
                let {
                    enabled: t
                } = a.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !0
                });
                return t
            }
        },
        70845: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("744196"), n("845579"), n("957255");
            var l = n("49111");

            function a(e, t) {
                switch (e) {
                    case l.SpoilerRenderSetting.ALWAYS:
                        return !0;
                    case l.SpoilerRenderSetting.IF_MODERATOR:
                        return t;
                    case l.SpoilerRenderSetting.ON_CLICK:
                    default:
                        return !1
                }
            }
        },
        855920: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessageStandardEmoji: function() {
                    return C
                },
                MessageCustomEmoji: function() {
                    return v
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("575482"),
                s = n.n(i),
                r = n("462567"),
                o = n("77078"),
                u = n("430568"),
                d = n("716241"),
                c = n("557562"),
                m = n("599110"),
                f = n("459698"),
                h = n("933629"),
                p = n("49111"),
                E = n("646718"),
                g = n("57901");
            let C = e => {
                    var t;
                    let {
                        node: n,
                        tooltipPosition: a = h.EXPRESSION_TOOLTIP_PROPS.position,
                        enableClick: i = !0
                    } = e, r = null === (t = n.originalMatch) || void 0 === t ? void 0 : t[0], d = null != r ? r : n.name, c = e => (0, l.jsx)(u.default, {
                        ...e,
                        emojiName: n.name,
                        size: n.jumboable ? "jumbo" : "default",
                        src: n.src,
                        alt: r,
                        animated: !1
                    }), m = e => (0, l.jsx)(o.Tooltip, {
                        text: (0, h.renderClickableTooltipNode)(n.name, i),
                        "aria-label": d,
                        ...h.EXPRESSION_TOOLTIP_PROPS,
                        position: a,
                        onTooltipShow: () => {
                            i && I({
                                emojiNode: n,
                                isCustomEmoji: !1
                            })
                        },
                        children: t => (0, l.jsx)(o.Clickable, {
                            ...e,
                            tag: "span",
                            className: s(g.emojiContainer, {
                                [g.emojiContainerClickable]: i
                            }),
                            children: c(t)
                        })
                    });
                    return i ? (0, l.jsx)(o.Popout, {
                        animation: o.Popout.Animation.TRANSLATE,
                        align: "center",
                        autoInvert: !0,
                        nudgeAlignIntoViewport: !0,
                        position: "right",
                        renderPopout: e => (0, l.jsx)(f.MessageStandardEmojiPopout, {
                            ...e,
                            node: n
                        }),
                        children: m
                    }) : m()
                },
                v = e => {
                    let {
                        node: t,
                        isInteracting: n,
                        tooltipPosition: i = h.EXPRESSION_TOOLTIP_PROPS.position,
                        enableClick: d = !0
                    } = e, [E, C] = a.useState(String(Date.now())), [v, _] = a.useState(!1), x = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, l.jsx)(u.default, {
                            ...e,
                            emojiName: t.name,
                            size: t.jumboable ? "jumbo" : "default",
                            emojiId: t.emojiId,
                            animated: t.animated,
                            isInteracting: n
                        })
                    }, S = (0, r.v4)(), N = e => (0, l.jsx)(o.Tooltip, {
                        text: (0, h.renderClickableTooltipNode)(t.name, d),
                        "aria-label": t.name,
                        ...h.EXPRESSION_TOOLTIP_PROPS,
                        position: i,
                        onTooltipShow: () => {
                            _(!0), d && (I({
                                emojiNode: t,
                                isCustomEmoji: !0,
                                nonce: S
                            }), (0, c.maybeGetPacksForUser)("render message custom emoji tooltip"))
                        },
                        children: t => (0, l.jsx)(o.Clickable, {
                            ...e,
                            onMouseEnter: () => {
                                var t;
                                null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
                            },
                            onClick: t => {
                                var n;
                                _(!1), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t)
                            },
                            onMouseLeave: () => {
                                v && (m.default.track(p.AnalyticEvents.CLOSE_POPOUT, {
                                    nonce: S
                                }), _(!1))
                            },
                            tag: "span",
                            className: s(g.emojiContainer, {
                                [g.emojiContainerClickable]: d
                            }),
                            children: x(t)
                        })
                    });
                    return d ? (0, l.jsx)(o.Popout, {
                        animation: o.Popout.Animation.FADE,
                        align: "center",
                        onRequestClose: () => {
                            m.default.track(p.AnalyticEvents.CLOSE_POPOUT, {
                                nonce: S
                            }), _(!1)
                        },
                        autoInvert: !0,
                        nudgeAlignIntoViewport: !0,
                        position: "right",
                        renderPopout: e => (0, l.jsx)(f.MessageCustomEmojiPopout, {
                            ...e,
                            node: t,
                            refreshPositionKey: () => C(String(Date.now())),
                            nonce: S
                        }),
                        positionKey: E,
                        children: N
                    }) : N()
                },
                I = e => {
                    let {
                        emojiNode: t,
                        isCustomEmoji: n,
                        nonce: l
                    } = e;
                    d.default.trackWithMetadata(p.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
                        type: E.PremiumUpsellTypes.EMOJI_IN_MESSAGE_HOVER,
                        expression_id: t.emojiId,
                        expression_name: t.name,
                        is_animated: t.animated,
                        is_custom: n,
                        nonce: l
                    })
                }
        },
        459698: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessageStandardEmojiPopout: function() {
                    return q
                },
                GuildDetails: function() {
                    return Q
                },
                MessageCustomEmojiPopout: function() {
                    return $
                },
                CustomGuildEmojiPopout: function() {
                    return ee
                },
                EmojiPopoutList: function() {
                    return et
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("575482"),
                s = n.n(i),
                r = n("64379"),
                o = n("498225"),
                u = n("130969"),
                d = n("77078"),
                c = n("851387"),
                m = n("430568"),
                f = n("812204"),
                h = n("685665"),
                p = n("428958"),
                E = n("736271"),
                g = n("865453"),
                C = n("298878"),
                v = n("153043"),
                I = n("256941"),
                _ = n("270295"),
                x = n("529932"),
                S = n("557562"),
                N = n("446066"),
                M = n("396053"),
                T = n("635956"),
                A = n("393414"),
                R = n("18494"),
                j = n("162771"),
                b = n("697218"),
                L = n("145131"),
                y = n("791106"),
                O = n("580357"),
                D = n("109024"),
                P = n("98292"),
                w = n("256170"),
                U = n("216422"),
                k = n("587974"),
                V = n("599110"),
                F = n("315102"),
                B = n("141302"),
                G = n("719923"),
                H = n("412745"),
                W = n("933629"),
                z = n("49111"),
                X = n("724210"),
                K = n("646718"),
                Y = n("782340"),
                Z = n("866422");
            let J = () => {
                    let e = (0, o.useStateFromStores)([j.default], () => j.default.getGuildId());
                    return {
                        page: null != e ? z.AnalyticsPages.GUILD_CHANNEL : z.AnalyticsPages.DM_CHANNEL,
                        section: z.AnalyticsSections.EMOJI_UPSELL_POPOUT
                    }
                },
                q = e => {
                    let {
                        node: t
                    } = e;
                    return (0, g.useTrackOpenPopout)({
                        emojiId: t.emojiId,
                        currentGuildId: j.default.getGuildId()
                    }), (0, l.jsx)(u.Dialog, {
                        children: (0, l.jsx)(W.MessagePopoutContent, {
                            children: (0, l.jsxs)(L.default, {
                                className: Z.emojiSection,
                                children: [(0, l.jsx)(m.default, {
                                    emojiName: t.name,
                                    className: Z.primaryEmoji,
                                    src: t.src,
                                    animated: !1,
                                    size: "jumbo"
                                }), (0, l.jsxs)(L.default, {
                                    direction: L.default.Direction.VERTICAL,
                                    justify: L.default.Justify.CENTER,
                                    className: Z.truncatingText,
                                    children: [(0, l.jsx)(d.Text, {
                                        className: Z.emojiName,
                                        variant: "text-md/semibold",
                                        children: (0, l.jsx)(P.default, {
                                            children: t.name
                                        })
                                    }), (0, l.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        children: Y.default.Messages.EMOJI_POPOUT_STANDARD_EMOJI_DESCRIPTION
                                    })]
                                })]
                            })
                        })
                    })
                },
                Q = e => {
                    let {
                        expressionSourceGuild: t,
                        hasJoinedExpressionSourceGuild: n,
                        isDisplayingJoinGuildButtonInPopout: a
                    } = e, {
                        id: i,
                        icon: r,
                        name: o
                    } = t, u = F.default.getGuildIconURL({
                        id: i,
                        icon: r,
                        size: 32,
                        canAnimate: !0
                    });
                    n = null == n || n;
                    let c = n || t.isDiscoverable(),
                        m = () => {
                            t.isDiscoverable() ? (0, B.startLurking)(i, {}) : n && (0, A.transitionTo)(z.Routes.CHANNEL(i, R.default.getChannelId(i)))
                        },
                        f = t.isDiscoverable() && null != t.presenceCount,
                        h = () => {
                            let e = !a && !n;
                            return (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    children: Y.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                        membersOnline: t.presenceCount
                                    })
                                }), (0, l.jsx)("div", {
                                    className: Z.dotSeparator
                                }), e ? (0, l.jsx)(d.Clickable, {
                                    className: Z.joinGuildLink,
                                    onClick: m,
                                    children: (0, l.jsx)(d.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-link",
                                        children: Y.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
                                    })
                                }) : (0, l.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    children: Y.default.Messages.EMOJI_POPOUT_PUBLIC_SERVER
                                })]
                            })
                        };
                    return (0, l.jsxs)(L.default, {
                        align: L.default.Align.CENTER,
                        children: [(0, l.jsx)(k.default, {
                            mask: k.default.Masks.SQUIRCLE,
                            width: 32,
                            height: 32,
                            className: Z.guildIconContainer,
                            children: null != u && c ? (0, l.jsxs)(d.Clickable, {
                                "aria-label": o,
                                onClick: m,
                                children: [(0, l.jsx)("img", {
                                    src: u,
                                    alt: "",
                                    className: Z.guildIcon
                                }), " :"]
                            }) : (0, l.jsx)(D.default, {
                                size: D.default.Sizes.SMALL,
                                className: Z.guildIconNotClickable,
                                guild: t
                            })
                        }), (0, l.jsxs)(L.default, {
                            direction: L.default.Direction.VERTICAL,
                            className: s(Z.guildInformation, Z.truncatingText),
                            children: [(0, l.jsxs)(L.default, {
                                align: L.default.Align.CENTER,
                                children: [(0, l.jsx)(O.default, {
                                    guild: t,
                                    className: Z.guildBadge
                                }), c ? (0, l.jsx)(d.Clickable, {
                                    onClick: m,
                                    className: Z.truncatingText,
                                    children: (0, l.jsx)(d.Heading, {
                                        className: Z.guildName,
                                        variant: "heading-md/semibold",
                                        children: (0, l.jsx)(P.default, {
                                            children: o
                                        })
                                    })
                                }) : (0, l.jsx)(d.Heading, {
                                    variant: "heading-md/semibold",
                                    children: (0, l.jsx)(P.default, {
                                        children: o
                                    })
                                })]
                            }), (0, l.jsx)(L.default, {
                                align: L.default.Align.CENTER,
                                children: f ? h() : (0, l.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    children: Y.default.Messages.EMOJI_POPOUT_PRIVATE_SERVER
                                })
                            })]
                        })]
                    })
                },
                $ = e => {
                    let {
                        node: t,
                        closePopout: n,
                        refreshPositionKey: a,
                        nonce: i
                    } = e, {
                        expressionSourceGuild: s,
                        joinedEmojiSourceGuildRecord: r,
                        emoji: o,
                        isFetching: d
                    } = (0, x.useEmojiAndSourceGuild)({
                        emojiId: t.emojiId,
                        refreshPositionKey: a
                    });
                    return d ? (0, l.jsx)(W.PopoutLoadingAnimation, {}) : (0, l.jsx)(u.Dialog, {
                        "aria-label": t.name,
                        children: (0, l.jsx)(ee, {
                            node: t,
                            guildEmoji: null != o ? o : void 0,
                            expressionSourceGuild: s,
                            joinedEmojiSourceGuildRecord: r,
                            closePopout: n,
                            onToggleShowMoreEmojis: a,
                            demoMode: !1,
                            nonce: i
                        })
                    })
                },
                ee = e => {
                    var t, n, i;
                    let {
                        node: u,
                        expressionSourceGuild: C,
                        joinedEmojiSourceGuildRecord: S,
                        closePopout: A,
                        onToggleShowMoreEmojis: R,
                        guildEmoji: y,
                        demoMode: O = !1,
                        nonce: D
                    } = e, U = (0, o.useStateFromStores)([b.default], () => b.default.getCurrentUser()), k = (0, o.useStateFromStores)([j.default], () => j.default.getGuildId()), F = G.default.isPremium(U), B = null != k && (k === (null == C ? void 0 : C.id) || k === (null == S ? void 0 : S.id)), q = null != S, $ = null !== (t = null == C ? void 0 : C.isDiscoverable()) && void 0 !== t && t;
                    O && (F = !0, $ = !0, q = !1, B = !1);
                    let ee = J(),
                        {
                            isRoleSubscriptionEmoji: en,
                            isUnusableRoleSubscriptionEmoji: el,
                            userIsRoleSubscriber: ea
                        } = a.useMemo(() => null == y ? {
                            isRoleSubscriptionEmoji: !1,
                            isUnusableRoleSubscriptionEmoji: !1,
                            userIsRoleSubscriber: !1
                        } : {
                            isRoleSubscriptionEmoji: v.isPurchasableRoleSubscriptionEmoji(y),
                            isUnusableRoleSubscriptionEmoji: v.isUnusableRoleSubscriptionEmoji(y, null != k ? k : void 0),
                            userIsRoleSubscriber: I.default.getUserSubscriptionRoles(y.guildId).size > 0
                        }, [y, k]),
                        ei = !!el && (0, E.shouldHideGuildPurchaseEntryPoints)(null == y ? void 0 : y.guildId),
                        {
                            analyticsLocations: es
                        } = (0, h.default)(f.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
                    (0, p.default)({
                        type: r.ImpressionTypes.MODAL,
                        name: r.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                        properties: {
                            location_stack: es,
                            emoji_guild_id: null !== (n = null == y ? void 0 : y.guildId) && void 0 !== n ? n : null,
                            emoji_id: null !== (i = null == y ? void 0 : y.id) && void 0 !== i ? i : null
                        }
                    }, {
                        disableTrack: !en
                    });
                    let er = j.default.getGuildId(),
                        eo = (0, x.usePackCollectionData)({
                            expressionSourceGuild: C
                        }),
                        eu = eo.collectEnabled,
                        ed = (0, H.getEmojiPopoutData)({
                            isPremium: F,
                            hasJoinedEmojiSourceGuild: q,
                            isRoleSubscriptionEmoji: en,
                            isUnusableRoleSubscriptionEmoji: el,
                            userIsRoleSubscriber: ea,
                            emojiComesFromCurrentGuild: B,
                            isDiscoverable: $,
                            shouldHideRoleSubscriptionCTA: ei,
                            onOpenPremiumSettings: () => {
                                A(), V.default.track(z.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                                    location_page: ee.page,
                                    location_section: ee.section
                                }), (0, M.navigateToPremiumMarketingPage)()
                            },
                            packCollectionData: eo
                        }),
                        ec = q && el && !ei && (F && en || !F),
                        em = ed.emojiDescription,
                        ef = (0, g.useTrackOpenPopout)({
                            emojiId: u.emojiId,
                            currentGuildId: er,
                            popoutData: ed,
                            emojiSourceGuildId: null == C ? void 0 : C.id,
                            nonce: D,
                            demoMode: O
                        }),
                        eh = ed.type === H.EmojiPopoutType.JOIN_GUILD,
                        ep = ed.type === H.EmojiPopoutType.GET_PREMIUM_INVENTORY_DISABLED,
                        [eE, eg] = a.useState(eu),
                        eC = $ || q && !B || eu && null != C;
                    return (0, l.jsxs)(W.MessagePopoutContent, {
                        className: Z.popoutContent,
                        children: [(() => {
                            let e = async () => {
                                if (O || null == C || q) return;
                                A();
                                let e = C.id;
                                try {
                                    await c.default.joinGuild(e), c.default.transitionToGuildSync(e)
                                } catch {}
                            }, t = !q && $;
                            return (0, l.jsxs)("div", {
                                className: Z.emojiSection,
                                children: [(0, l.jsxs)(L.default, {
                                    children: [(0, l.jsx)(m.default, {
                                        className: Z.primaryEmoji,
                                        emojiId: u.emojiId,
                                        emojiName: u.name,
                                        animated: u.animated,
                                        size: "jumbo"
                                    }), (0, l.jsxs)(L.default, {
                                        direction: L.default.Direction.VERTICAL,
                                        justify: L.default.Justify.CENTER,
                                        className: Z.truncatingText,
                                        children: [(0, l.jsx)(d.Text, {
                                            variant: "text-md/semibold",
                                            children: (0, l.jsx)(P.default, {
                                                children: u.name
                                            })
                                        }), null != em && (0, l.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            children: em
                                        })]
                                    })]
                                }), ep ? (0, l.jsx)(T.default, {
                                    className: Z.ctaButton,
                                    subscriptionTier: K.PremiumSubscriptionSKUs.TIER_2,
                                    size: d.Button.Sizes.SMALL,
                                    fullWidth: !0,
                                    buttonText: ed.text,
                                    onSubscribeModalClose: t => t ? e() : A(),
                                    postSuccessGuild: t && null != C ? C : void 0,
                                    premiumModalAnalyticsLocation: ee
                                }) : eh ? (0, l.jsx)(d.Button, {
                                    size: d.Button.Sizes.SMALL,
                                    className: Z.ctaButton,
                                    color: d.ButtonColors.BRAND,
                                    fullWidth: !0,
                                    onClick: e,
                                    children: ed.text
                                }) : void 0, ec && (0, l.jsx)(_.default, {
                                    className: Z.ctaButton,
                                    size: d.Button.Sizes.SMALL,
                                    fullWidth: !0,
                                    onClick: () => {
                                        A(), (null == S ? void 0 : S.id) != null && c.default.transitionToGuildSync(S.id, void 0, X.StaticChannelRoute.ROLE_SUBSCRIPTIONS, [f.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL])
                                    },
                                    children: ea ? Y.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_BUTTON : Y.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_BUTTON
                                })]
                            })
                        })(), eC && (() => {
                            let e = q || null != eo.collectedPack,
                                t = null != C && !q && ($ || eu),
                                n = () => {
                                    t && (null == R || R(), !eE && !O && V.default.track(z.AnalyticEvents.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, ef), eg(!eE))
                                };
                            return (0, l.jsxs)("div", {
                                className: Z.guildSection,
                                children: [(0, l.jsx)(d.FormTitle, {
                                    className: Z.guildTitle,
                                    children: e ? Y.default.Messages.EMOJI_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : Y.default.Messages.EMOJI_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
                                }), (0, l.jsx)(Q, {
                                    expressionSourceGuild: null != C ? C : N.default.createFromGuildRecord(S),
                                    hasJoinedExpressionSourceGuild: q,
                                    isDisplayingJoinGuildButtonInPopout: eh
                                }), t && (0, l.jsxs)(l.Fragment, {
                                    children: [!eu && (() => {
                                        let e = Y.default.Messages.EMOJI_POPOUT_SHOW_MORE_EMOJIS;
                                        return (0, l.jsx)(d.Clickable, {
                                            onClick: n,
                                            className: Z.showMoreEmojis,
                                            children: (0, l.jsxs)(L.default, {
                                                children: [(0, l.jsx)(d.Text, {
                                                    className: Z.showMoreEmojisLabel,
                                                    "aria-label": e,
                                                    variant: "text-xs/normal",
                                                    color: "none",
                                                    children: e
                                                }), (0, l.jsx)(w.default, {
                                                    className: s(Z.showMoreEmojisArrow, {
                                                        [Z.showMoreEmojisArrowCollapsed]: !eE
                                                    })
                                                })]
                                            })
                                        })
                                    })(), null != u.emojiId && eE && (0, l.jsx)(et, {
                                        emojiId: u.emojiId,
                                        expressionSourceGuild: C,
                                        popoutData: ed,
                                        packCollectionData: eo,
                                        onClose: A,
                                        hasJoinedEmojiSourceGuild: q,
                                        isDisplayingButtonInTopSection: eh || ep,
                                        nonce: D
                                    })]
                                })]
                            })
                        })()]
                    })
                },
                et = e => {
                    var t;
                    let {
                        emojiId: n,
                        expressionSourceGuild: a,
                        hasJoinedEmojiSourceGuild: i,
                        popoutData: s,
                        packCollectionData: r,
                        onClose: o,
                        isDisplayingButtonInTopSection: u,
                        nonce: c
                    } = e, f = r.isPremium, h = (null !== (t = null == a ? void 0 : a.emojis) && void 0 !== t ? t : []).slice(0, 13).filter(e => e.id !== n).slice(0, 12), {
                        type: p,
                        description: E
                    } = s;
                    return (0, l.jsxs)(L.default, {
                        wrap: L.default.Wrap.WRAP,
                        align: L.default.Align.CENTER,
                        justify: L.default.Justify.CENTER,
                        className: Z.otherEmojisContainer,
                        children: [i ? null : h.map(e => (0, l.jsx)(d.Tooltip, {
                            text: e.require_colons ? ":".concat(e.name, ":") : e.name,
                            ...W.EXPRESSION_TOOLTIP_PROPS,
                            children: t => (0, l.jsx)(m.default, {
                                className: Z.otherEmoji,
                                emojiId: e.id,
                                animated: e.animated,
                                ...t
                            })
                        }, e.id)), !u && (() => {
                            if (p === H.EmojiPopoutType.ADD_PACK || p === H.EmojiPopoutType.REMOVE_PACK) {
                                let e = (0, S.getAddOrRemovePackHandler)({
                                        expressionSourceGuild: a,
                                        action: p,
                                        onComplete: o,
                                        nonce: c
                                    }),
                                    t = f && r.showTryPacksModalAndV2Copy;
                                return (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)(C.default, {
                                        className: Z.betaTag,
                                        color: "white"
                                    }), (0, l.jsx)(d.Button, {
                                        size: d.Button.Sizes.SMALL,
                                        className: Z.inventoryCtaButton,
                                        fullWidth: !0,
                                        onClick: e,
                                        color: p === H.EmojiPopoutType.ADD_PACK ? d.Button.Colors.BRAND : d.Button.Colors.PRIMARY,
                                        children: s.text
                                    }), null != E && (0, l.jsxs)("div", {
                                        className: Z.ctaDescription,
                                        children: [t && (0, l.jsx)(U.default, {
                                            className: Z.nitroWheel,
                                            color: y.GradientCssUrls.PREMIUM_TIER_2
                                        }), (0, l.jsx)(d.Text, {
                                            variant: "text-sm/medium",
                                            "aria-label": E,
                                            children: E
                                        })]
                                    })]
                                })
                            }
                            if (p === H.EmojiPopoutType.GET_PREMIUM_INVENTORY_ENABLED || p === H.EmojiPopoutType.GET_PREMIUM_INVENTORY_DISABLED) return (0, l.jsxs)(l.Fragment, {
                                children: [p === H.EmojiPopoutType.GET_PREMIUM_INVENTORY_ENABLED && (0, l.jsx)(C.default, {
                                    className: Z.betaTag,
                                    color: "white"
                                }), (0, l.jsx)(T.default, {
                                    subscriptionTier: K.PremiumSubscriptionSKUs.TIER_2,
                                    buttonText: s.text,
                                    className: Z.ctaButton,
                                    fullWidth: !0,
                                    onClick: () => o()
                                }), null != E && (0, l.jsx)("div", {
                                    className: Z.ctaDescription,
                                    children: (0, l.jsx)(d.Text, {
                                        variant: "text-sm/medium",
                                        "aria-label": E,
                                        children: E
                                    })
                                })]
                            });
                            if (p === H.EmojiPopoutType.JOIN_GUILD) return (0, l.jsx)(d.Button, {
                                size: d.Button.Sizes.SMALL,
                                className: Z.ctaButton,
                                color: d.ButtonColors.BRAND,
                                fullWidth: !0,
                                onClick: () => {
                                    (0, B.startLurking)(a.id, {})
                                },
                                children: s.text
                            });
                            return null
                        })()]
                    })
                }
        },
        933629: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EXPRESSION_TOOLTIP_PROPS: function() {
                    return X
                },
                renderVideoComponent: function() {
                    return Z
                },
                renderAudioComponent: function() {
                    return J
                },
                renderVoiceMessageAudioComponent: function() {
                    return q
                },
                renderImageComponent: function() {
                    return Q
                },
                renderMaskedLinkComponent: function() {
                    return $
                },
                renderPlaintextFilePreview: function() {
                    return ee
                },
                JumpBarType: function() {
                    return a
                },
                JumpToPresentBar: function() {
                    return et
                },
                ErrorLoadingBar: function() {
                    return en
                },
                NewMessagesBar: function() {
                    return el
                },
                NewMessagesPill: function() {
                    return ea
                },
                NewTopicsBar: function() {
                    return ei
                },
                TopicsPill: function() {
                    return er
                },
                renderClickableTooltipNode: function() {
                    return eo
                },
                MessagePopoutContent: function() {
                    return eu
                },
                PopoutLoadingAnimation: function() {
                    return ed
                }
            });
            var l, a, i = n("920040"),
                s = n("773670"),
                r = n("575482"),
                o = n.n(r),
                u = n("427964"),
                d = n.n(u),
                c = n("117064"),
                m = n("498225"),
                f = n("77078"),
                h = n("819689"),
                p = n("267363"),
                E = n("817480"),
                g = n("340616"),
                C = n("115718"),
                v = n("84339"),
                I = n("298878"),
                _ = n("793237"),
                x = n("347738"),
                S = n("584998"),
                N = n("845579"),
                M = n("876308"),
                T = n("660478"),
                A = n("697218"),
                R = n("663175"),
                j = n("888673"),
                b = n("839952"),
                L = n("476765"),
                y = n("62843"),
                O = n("461380"),
                D = n("171710"),
                P = n("945330"),
                w = n("909004"),
                U = n("599110"),
                k = n("449008"),
                V = n("874276"),
                F = n("49111"),
                B = n("894282"),
                G = n("995307"),
                H = n("719347"),
                W = n("782340"),
                z = n("594618");
            let X = {
                    delay: 300,
                    position: "top"
                },
                K = e => t => {
                    null == e || e(t), (0, V.setVolume)(t)
                },
                Y = e => t => {
                    null == e || e(t), (0, V.setMuted)(t)
                };

            function Z(e) {
                let {
                    onVolumeChange: t,
                    onMute: n,
                    volume: l,
                    autoMute: a,
                    alt: r,
                    renderAdjacentContent: o,
                    renderOverlayContent: u,
                    ...d
                } = e, c = K(t), m = Y(n);
                return l = null == l ? V.getVolume : l, a = null == a ? V.getMuted : a, (0, i.jsxs)(s.Fragment, {
                    children: [(0, i.jsx)(j.default, {
                        ...d,
                        alt: r,
                        volume: l,
                        autoMute: a,
                        onVolumeChange: c,
                        onMute: m,
                        renderLinkComponent: $,
                        renderOverlayContent: u
                    }), null != o && o()]
                })
            }

            function J(e) {
                let {
                    onVolumeChange: t,
                    volume: n,
                    onMute: l,
                    onVolumeShow: a,
                    onVolumeHide: r,
                    renderAdjacentContent: o,
                    ...u
                } = e, d = K(t), c = Y(l);
                return n = null == n ? V.getVolume : n, (0, i.jsxs)(s.Fragment, {
                    children: [(0, i.jsx)(R.default, {
                        ...u,
                        onVolumeChange: d,
                        onMute: c,
                        onVolumeShow: a,
                        onVolumeHide: r,
                        volume: n,
                        autoMute: () => !1,
                        renderLinkComponent: $
                    }), null != o && o()]
                })
            }

            function q(e) {
                let {
                    onVolumeChange: t,
                    volume: n,
                    onMute: l,
                    ...a
                } = e, s = K(t), r = Y(l);
                return n = null == n ? V.getVolume : n, (0, i.jsx)(M.default, {
                    ...a,
                    onVolumeChange: s,
                    onMute: r,
                    volume: n
                })
            }

            function Q(e) {
                let {
                    alt: t,
                    hiddenSpoilers: n,
                    renderAdjacentContent: l,
                    containerClassName: a,
                    imageContainerClassName: r,
                    disableAltTextDisplay: u = !1,
                    mediaLayoutType: d,
                    imageContainerStyle: c
                } = e, m = d === H.MediaLayoutType.MOSAIC, h = !u && N.ViewImageDescriptions.getSetting() && null != t && "" !== t && !0 !== n, p = e => {
                    let {
                        altText: t
                    } = e;
                    return (0, i.jsxs)(f.Dialog, {
                        "aria-label": W.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
                        className: z.mediaMosaicAltTextPopout,
                        onKeyDown: e => {
                            e.key === B.KeyboardEventKey.Escape && setTimeout(() => {
                                var e;
                                return null === (e = g.current) || void 0 === e ? void 0 : e.focus()
                            }, 0)
                        },
                        children: [(0, i.jsx)("span", {
                            className: z.mediaMosaicAltTextPopoutTitle,
                            children: W.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE
                        }), (0, i.jsx)("span", {
                            className: z.mediaMosaicAltTextPopoutDescription,
                            children: t
                        })]
                    })
                }, g = s.createRef();
                return (0, i.jsxs)("div", {
                    className: o(z.imageContent, a),
                    children: [(0, i.jsxs)("div", {
                        className: o(z.imageContainer, r),
                        style: c,
                        children: [(0, i.jsx)(E.default, {
                            ...e,
                            renderLinkComponent: $
                        }), null != l && l()]
                    }), m && h && (0, i.jsx)("div", {
                        className: z.mediaMosaicAltTextContainer,
                        children: (0, i.jsx)(f.Popout, {
                            animation: f.Popout.Animation.FADE,
                            renderPopout: () => (0, i.jsx)(p, {
                                altText: t
                            }),
                            children: e => (0, i.jsx)(f.FocusRing, {
                                offset: 4,
                                children: (0, i.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: g,
                                    "aria-label": W.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
                                    className: z.mediaMosaicAltText,
                                    children: W.default.Messages.MEDIA_MOSAIC_ALT_TEXT_CTA
                                })
                            })
                        })
                    }), !m && h && (0, i.jsx)("span", {
                        className: z.altText,
                        children: t
                    })]
                })
            }

            function $(e) {
                return (0, i.jsx)(g.default, {
                    ...e
                })
            }

            function ee(e) {
                let {
                    renderAdjacentContent: t,
                    ...n
                } = e;
                return (0, i.jsxs)(s.Fragment, {
                    children: [(0, i.jsx)(b.default, {
                        ...n
                    }), null != t && t()]
                })
            }(l = a || (a = {}))[l.OLD_MESSAGES = 0] = "OLD_MESSAGES", l[l.REPLY = 1] = "REPLY";
            let et = e => {
                    let {
                        type: t = a.OLD_MESSAGES,
                        onClick: n
                    } = e;
                    return (0, i.jsx)(y.MessagesInteractionContext.Consumer, {
                        children: e => e.disableInteractions ? null : (0, i.jsxs)("div", {
                            className: z.jumpToPresentBar,
                            children: [(0, i.jsx)(f.FocusRing, {
                                offset: 4,
                                children: (0, i.jsx)("button", {
                                    type: "button",
                                    onClick: n,
                                    className: z.barButtonMain,
                                    children: function(e) {
                                        switch (e) {
                                            case a.OLD_MESSAGES:
                                                return W.default.Messages.YOURE_VIEWING_OLDER_MESSAGES;
                                            case a.REPLY:
                                                return W.default.Messages.JUMP_BAR_VIEWING_REPLY;
                                            default:
                                                return (0, k.assertNever)(e)
                                        }
                                    }(t)
                                })
                            }), null != n ? (0, i.jsx)(f.FocusRing, {
                                offset: 4,
                                children: (0, i.jsxs)("button", {
                                    type: "button",
                                    onClick: n,
                                    className: z.barButtonAlt,
                                    children: [function(e) {
                                        switch (e) {
                                            case a.OLD_MESSAGES:
                                                return W.default.Messages.JUMP_TO_PRESENT;
                                            case a.REPLY:
                                                return W.default.Messages.JUMP_TO_ORIGINAL_MESSAGE;
                                            default:
                                                return (0, k.assertNever)(e)
                                        }
                                    }(t), (0, i.jsx)(O.default, {
                                        className: z.barButtonIcon
                                    })]
                                })
                            }) : (0, i.jsx)(f.Spinner, {
                                type: f.Spinner.Type.PULSING_ELLIPSIS,
                                className: z.spinner,
                                itemClassName: z.spinnerItem
                            })]
                        })
                    })
                },
                en = e => {
                    let {
                        onClick: t,
                        loading: n
                    } = e;
                    return (0, i.jsx)(y.MessagesInteractionContext.Consumer, {
                        children: e => e.disableInteractions ? null : (0, i.jsxs)(f.Clickable, {
                            className: z.messagesErrorBar,
                            onClick: t,
                            focusProps: {
                                offset: {
                                    top: 4,
                                    right: 4,
                                    bottom: 12,
                                    left: 4
                                }
                            },
                            children: [(0, i.jsx)("div", {
                                className: z.barButtonMain,
                                children: W.default.Messages.MESSAGES_FAILED_TO_LOAD
                            }), n ? (0, i.jsx)(f.Spinner, {
                                type: f.Spinner.Type.PULSING_ELLIPSIS,
                                className: z.spinner,
                                itemClassName: z.spinnerItem
                            }) : (0, i.jsx)("div", {
                                className: z.barButtonAlt,
                                children: W.default.Messages.MESSAGES_FAILED_TO_LOAD_TRY_AGAIN
                            })]
                        })
                    })
                };

            function el(e) {
                let {
                    content: t,
                    channelId: n
                } = e, [l] = s.useState(() => (0, L.uid)("NewMessagesBarJumpToNewMessages_")), a = s.useCallback(() => {
                    let e = T.default.ackMessageId(n);
                    null != e ? h.default.jumpToMessage({
                        channelId: n,
                        messageId: e,
                        offset: 1,
                        context: "Mark As Read"
                    }) : h.default.jumpToMessage({
                        channelId: n,
                        messageId: n,
                        offset: 1,
                        context: "Mark As Read"
                    })
                }, [n]), r = s.useCallback(() => {
                    (0, p.ack)(n)
                }, [n]), {
                    disableInteractions: u
                } = s.useContext(y.MessagesInteractionContext);
                return u ? null : (0, i.jsxs)("div", {
                    className: o(z.newMessagesBar, {
                        [z.disableInteractions]: u
                    }),
                    children: [(0, i.jsx)(f.FocusRing, {
                        offset: 4,
                        children: (0, i.jsx)("button", {
                            type: "button",
                            className: z.barButtonMain,
                            onClick: a,
                            "aria-label": W.default.Messages.JUMP_TO_LAST_UNREAD_MESSAGE,
                            "aria-describedby": l,
                            children: (0, i.jsx)("span", {
                                id: l,
                                className: z.span,
                                children: t
                            })
                        })
                    }), (0, i.jsx)(f.FocusRing, {
                        offset: 4,
                        children: (0, i.jsxs)("button", {
                            type: "button",
                            onClick: r,
                            className: z.barButtonAlt,
                            children: [W.default.Messages.MARK_AS_READ, (0, i.jsx)(D.default, {
                                className: z.barButtonIcon
                            })]
                        })
                    })]
                })
            }

            function ea(e) {
                let {
                    content: t,
                    channelId: n,
                    hasNoticeAbove: l
                } = e, {
                    disableInteractions: a
                } = s.useContext(y.MessagesInteractionContext), r = s.useCallback(() => {
                    let e = T.default.ackMessageId(n);
                    null != e ? h.default.jumpToMessage({
                        channelId: n,
                        messageId: e,
                        offset: 1,
                        context: "Mark As Read"
                    }) : h.default.jumpToMessage({
                        channelId: n,
                        messageId: n,
                        offset: 1,
                        context: "Mark As Read"
                    })
                }, [n]), u = s.useCallback(() => {
                    (0, p.ack)(n)
                }, [n]);
                return a ? null : (0, i.jsxs)("div", {
                    className: o(z.newMessagesPillContainer, {
                        [z.containerMarginTop]: l
                    }),
                    children: [(0, i.jsx)(f.Clickable, {
                        className: z.newMessagesPill,
                        "aria-label": W.default.Messages.JUMP_TO_LAST_UNREAD_MESSAGE,
                        onClick: r,
                        children: (0, i.jsx)(f.Text, {
                            variant: "text-sm/medium",
                            children: t
                        })
                    }), (0, i.jsx)(f.Clickable, {
                        className: z.newMessagesClear,
                        "aria-label": W.default.Messages.MARK_AS_READ,
                        onClick: u,
                        children: (0, i.jsx)(P.default, {
                            className: z.newMessagesClearIcon
                        })
                    })]
                })
            }

            function ei(e) {
                var t, n, l;
                let {
                    channel: a,
                    content: r,
                    scrollManager: u
                } = e, {
                    disableInteractions: E
                } = s.useContext(y.MessagesInteractionContext), [g, N] = s.useState(null), M = s.useRef(null), [R, j] = s.useState(null), b = s.useRef(null), L = (0, m.useStateFromStoresArray)([x.default], () => {
                    var e;
                    return null !== (e = x.default.summaries(a.id)) && void 0 !== e ? e : []
                }, [a]), V = (0, v.default)(L);
                s.useEffect(() => {
                    !d.isEqual(V, L) && U.default.track(F.AnalyticEvents.SUMMARIES_TOPICS_PILL_VIEWED, {
                        num_summaries: L.length,
                        message_counts: L.map(e => e.count),
                        start_message_ids: L.map(e => e.startId),
                        end_message_ids: L.map(e => e.endId),
                        num_participants: L.map(e => e.people.length),
                        guild_id: a.guild_id,
                        channel_id: a.id,
                        channel_type: a.type
                    })
                }, [L, V, a.guild_id, a.id, a.type]);
                let B = (0, m.useStateFromStores)([A.default], () => {
                        var e;
                        return null !== (e = null == L ? void 0 : L.map(e => {
                            var t, n;
                            return null === (t = e.people) || void 0 === t ? void 0 : t.map(e => null !== (n = A.default.getUser(e)) && void 0 !== n ? n : null).filter(k.isNotNullish)
                        })) && void 0 !== e ? e : []
                    }, [L], es),
                    H = null !== (n = (0, m.useStateFromStores)([x.default], () => x.default.visibleSummaryIndex())) && void 0 !== n ? n : -1,
                    X = null == L ? void 0 : null === (t = L[H]) || void 0 === t ? void 0 : t.topic;
                null == X && null == g && (null == L ? void 0 : L.length) >= 1 && (X = null === (l = L[0]) || void 0 === l ? void 0 : l.topic);
                let K = s.useMemo(() => d.debounce(e => {
                        var t;
                        N(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
                    }, 64), [N]),
                    Y = s.useMemo(() => d.throttle(() => {
                        (0, _.setHighlightedSummary)(null)
                    }, 1200, {
                        trailing: !1
                    }), []),
                    Z = s.useCallback(e => {
                        Y(), K(e)
                    }, [K, Y]),
                    [J, q] = s.useState(!1),
                    Q = s.useCallback(() => {
                        U.default.track(F.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
                            topics_dropdown_open: !J,
                            num_summaries: L.length,
                            message_counts: L.map(e => e.count),
                            start_message_ids: L.map(e => e.startId),
                            end_message_ids: L.map(e => e.endId),
                            num_participants: L.map(e => e.people.length),
                            guild_id: a.guild_id,
                            channel_id: a.id,
                            channel_type: a.type
                        }), q(!J)
                    }, [J, L, q, a]),
                    $ = s.useCallback(function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G.SummariesTopicClickedSource.PILL_DROPDOWN,
                            n = L[e];
                        if (null == n) return;
                        (0, _.setSelectedSummary)(a.id, n.id), (0, _.setHighlightedSummary)(a.id, n.id);
                        let l = () => {
                            u.removeScrollCompleteCallback(l), setTimeout(() => {
                                u.addAutomaticAnchorCallback(Z, !1)
                            }, 100)
                        };
                        u.removeAutomaticAnchorCallback(Z), u.addScrollCompleteCallback(l), U.default.track(F.AnalyticEvents.SUMMARIES_TOPIC_CLICKED, {
                            source: t,
                            message_id: n.startId,
                            guild_id: a.guild_id,
                            channel_id: a.id,
                            channel_type: a.type
                        }), h.default.jumpToMessage({
                            channelId: a.id,
                            messageId: n.startId,
                            flash: !0,
                            offset: 0,
                            jumpType: C.JumpTypes.ANIMATED,
                            context: "Summary Jump"
                        })
                    }, [L, a, Z, u]),
                    ee = s.useCallback(e => {
                        var t;
                        q(e);
                        let n = null === (t = b.current) || void 0 === t ? void 0 : t.scrollTop;
                        null != n && j(n)
                    }, []);
                s.useEffect(() => {
                    if (null != R && J) {
                        var e;
                        null === (e = b.current) || void 0 === e || e.scrollTo({
                            top: R
                        })
                    }
                }, [R, J]);
                let et = s.useCallback(e => {
                    var t;
                    !((0, c.isElement)(e.target) && (null === (t = M.current) || void 0 === t ? void 0 : t.contains(e.target))) && (J && U.default.track(F.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: L.length,
                        message_counts: L.map(e => e.count),
                        start_message_ids: L.map(e => e.startId),
                        end_message_ids: L.map(e => e.endId),
                        num_participants: L.map(e => e.people.length),
                        guild_id: a.guild_id,
                        channel_id: a.id,
                        channel_type: a.type
                    }), ee(!1))
                }, [J, L, a, ee]);
                s.useEffect(() => (u.addAutomaticAnchorCallback(Z), () => {
                    u.removeAutomaticAnchorCallback(Z)
                }), [u, Z]), (0, _.useSummaryPolling)(a.id, !0), s.useEffect(() => (document.addEventListener("mousedown", et), () => {
                    document.removeEventListener("mousedown", et)
                }), [et]);
                let en = s.useMemo(() => (0, i.jsx)(S.default, {
                        channel: a,
                        summaries: L,
                        summariesMembers: B,
                        selectTopic: $,
                        setOpen: ee
                    }), [L, B, $, ee, a]),
                    el = s.useCallback(() => {
                        let e = T.default.ackMessageId(a.id);
                        null != e ? h.default.jumpToMessage({
                            channelId: a.id,
                            messageId: e,
                            offset: 1,
                            context: "Mark As Read"
                        }) : h.default.jumpToMessage({
                            channelId: a.id,
                            messageId: a.id,
                            offset: 1,
                            context: "Mark As Read"
                        })
                    }, [a.id]),
                    ea = s.useCallback(() => {
                        (0, p.ack)(a.id)
                    }, [a.id]),
                    ei = W.default.Messages.SUMMARIES_NO_SUMMARIES;
                return L.length > 0 && (ei = "" === X || null == X ? W.default.Messages.SUMMARIES_VIEW_ALL : X), E ? null : (0, i.jsxs)("div", {
                    ref: M,
                    className: o(z.newTopicsBarContainer, z.containerMarginTop),
                    children: [(0, i.jsx)("div", {
                        className: o(z.newTopicsBarTopicSection),
                        children: (0, i.jsx)(f.Clickable, {
                            className: z.newTopicsBarTextClickable,
                            "aria-label": W.default.Messages.SUMMARY_PILL,
                            onClick: Q,
                            children: (0, i.jsxs)("div", {
                                className: o({
                                    [z.newTopicsBarTextUnselected]: !J,
                                    [z.newTopicsBarTextSelected]: J
                                }),
                                children: [(0, i.jsx)(w.default, {
                                    className: z.newTopicsBarIcon,
                                    width: 16,
                                    height: 16
                                }), (0, i.jsx)(f.Text, {
                                    variant: "text-sm/medium",
                                    className: o(z.newTopicsBarCompact, z.newTopicsBarText),
                                    children: ei
                                }), (0, i.jsx)(O.default, {
                                    width: 16,
                                    height: 16,
                                    direction: O.default.Directions.DOWN,
                                    className: z.newTopicsBarCaret
                                })]
                            })
                        })
                    }), (0, i.jsx)(f.Clickable, {
                        onClick: el,
                        className: o(z.barButtonMain, z.newTopicsBarInitial),
                        children: r
                    }), (0, i.jsxs)(f.Clickable, {
                        onClick: ea,
                        className: o(z.barButtonAlt, z.flexEnd),
                        children: [(0, i.jsx)("div", {
                            className: z.newTopicsBarCompact,
                            children: W.default.Messages.MARK_AS_READ
                        }), (0, i.jsx)(D.default, {
                            className: z.barButtonIcon
                        })]
                    }), J && (0, i.jsxs)("div", {
                        className: z.topicsDropdown,
                        children: [(0, i.jsxs)("div", {
                            className: z.topicsDropdownHeading,
                            children: [(0, i.jsxs)("div", {
                                className: z.topicsDropdownHeadingText,
                                children: [(0, i.jsx)(w.default, {
                                    className: z.topicsPillHeadingIcon,
                                    width: 18,
                                    height: 20
                                }), (0, i.jsx)(f.Heading, {
                                    variant: "heading-md/bold",
                                    color: "header-primary",
                                    lineClamp: 1,
                                    children: W.default.Messages.SUMMARIES
                                }), (0, i.jsx)(I.default, {
                                    className: z.summariesBetaTag
                                })]
                            }), (0, i.jsx)(f.Clickable, {
                                "aria-label": W.default.Messages.CLOSE,
                                onClick: Q,
                                className: z.topicsDropdownClose,
                                children: (0, i.jsx)(P.default, {})
                            })]
                        }), (0, i.jsx)(f.Scroller, {
                            ref: b,
                            className: z.topicsScroller,
                            fade: !0,
                            children: en
                        })]
                    })]
                })
            }

            function es(e, t) {
                return null != t && e.length === t.length && !e.some((e, n) => {
                    var l, a;
                    return l = e, null == (a = t[n]) || l.length !== a.length || !!l.some((e, t) => a[t] !== e)
                })
            }

            function er(e) {
                var t, n, l;
                let {
                    channel: a,
                    scrollManager: r
                } = e, {
                    disableInteractions: u
                } = s.useContext(y.MessagesInteractionContext), [p, E] = s.useState(null), g = s.useRef(null), [N, M] = s.useState(null), T = s.useRef(null), R = (0, m.useStateFromStoresArray)([x.default], () => {
                    var e;
                    return null !== (e = x.default.summaries(a.id)) && void 0 !== e ? e : []
                }, [a]), j = (0, v.default)(R);
                s.useEffect(() => {
                    !d.isEqual(j, R) && U.default.track(F.AnalyticEvents.SUMMARIES_TOPICS_PILL_VIEWED, {
                        num_summaries: R.length,
                        message_counts: R.map(e => e.count),
                        start_message_ids: R.map(e => e.startId),
                        end_message_ids: R.map(e => e.endId),
                        num_participants: R.map(e => e.people.length),
                        guild_id: a.guild_id,
                        channel_id: a.id,
                        channel_type: a.type
                    })
                }, [R, j, a.guild_id, a.id, a.type]);
                let b = (0, m.useStateFromStores)([A.default], () => {
                        var e;
                        return null !== (e = null == R ? void 0 : R.map(e => {
                            var t, n;
                            return null === (t = e.people) || void 0 === t ? void 0 : t.map(e => null !== (n = A.default.getUser(e)) && void 0 !== n ? n : null).filter(k.isNotNullish)
                        })) && void 0 !== e ? e : []
                    }, [R], es),
                    L = null !== (n = (0, m.useStateFromStores)([x.default], () => x.default.visibleSummaryIndex())) && void 0 !== n ? n : -1,
                    D = null == R ? void 0 : null === (t = R[L]) || void 0 === t ? void 0 : t.topic;
                null == D && null == p && (null == R ? void 0 : R.length) >= 1 && (D = null === (l = R[0]) || void 0 === l ? void 0 : l.topic);
                let V = s.useMemo(() => d.get(R, L - 1), [L, R]),
                    B = s.useMemo(() => d.get(R, L + 1), [L, R]),
                    H = s.useMemo(() => d.debounce(e => {
                        var t;
                        E(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
                    }, 64), [E]),
                    X = s.useMemo(() => d.throttle(() => {
                        (0, _.setHighlightedSummary)(null)
                    }, 1200, {
                        trailing: !1
                    }), []),
                    K = s.useCallback(e => {
                        X(), H(e)
                    }, [H, X]),
                    [Y, Z] = s.useState(!1),
                    J = s.useCallback(() => {
                        U.default.track(F.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
                            topics_dropdown_open: !Y,
                            num_summaries: R.length,
                            message_counts: R.map(e => e.count),
                            start_message_ids: R.map(e => e.startId),
                            end_message_ids: R.map(e => e.endId),
                            num_participants: R.map(e => e.people.length),
                            guild_id: a.guild_id,
                            channel_id: a.id,
                            channel_type: a.type
                        }), Z(!Y)
                    }, [Y, R, Z, a]),
                    q = s.useCallback(function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G.SummariesTopicClickedSource.PILL_DROPDOWN,
                            n = R[e];
                        if (null == n) return;
                        (0, _.setSelectedSummary)(a.id, n.id), (0, _.setHighlightedSummary)(a.id, n.id);
                        let l = () => {
                            r.removeScrollCompleteCallback(l), setTimeout(() => {
                                r.addAutomaticAnchorCallback(K, !1)
                            }, 100)
                        };
                        r.removeAutomaticAnchorCallback(K), r.addScrollCompleteCallback(l), U.default.track(F.AnalyticEvents.SUMMARIES_TOPIC_CLICKED, {
                            source: t,
                            message_id: n.startId,
                            guild_id: a.guild_id,
                            channel_id: a.id,
                            channel_type: a.type
                        }), h.default.jumpToMessage({
                            channelId: a.id,
                            messageId: n.startId,
                            flash: !0,
                            offset: 0,
                            jumpType: C.JumpTypes.ANIMATED,
                            context: "Summary Jump"
                        })
                    }, [R, a, K, r]),
                    Q = s.useCallback(() => {
                        q(L - 1, G.SummariesTopicClickedSource.PILL_NEXT_ARROW)
                    }, [q, L]),
                    $ = s.useCallback(() => {
                        q(L + 1, G.SummariesTopicClickedSource.PILL_PREVIOUS_ARROW)
                    }, [L, q]),
                    ee = s.useCallback(e => {
                        var t;
                        Z(e);
                        let n = null === (t = T.current) || void 0 === t ? void 0 : t.scrollTop;
                        null != n && M(n)
                    }, []);
                s.useEffect(() => {
                    if (null != N && Y) {
                        var e;
                        null === (e = T.current) || void 0 === e || e.scrollTo({
                            top: N
                        })
                    }
                }, [N, Y]);
                let et = s.useCallback(e => {
                    var t;
                    !((0, c.isElement)(e.target) && (null === (t = g.current) || void 0 === t ? void 0 : t.contains(e.target))) && (Y && U.default.track(F.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: R.length,
                        message_counts: R.map(e => e.count),
                        start_message_ids: R.map(e => e.startId),
                        end_message_ids: R.map(e => e.endId),
                        num_participants: R.map(e => e.people.length),
                        guild_id: a.guild_id,
                        channel_id: a.id,
                        channel_type: a.type
                    }), ee(!1))
                }, [Y, R, a, ee]);
                s.useEffect(() => (r.addAutomaticAnchorCallback(K), () => {
                    r.removeAutomaticAnchorCallback(K)
                }), [r, K]), (0, _.useSummaryPolling)(a.id, !0), s.useEffect(() => (document.addEventListener("mousedown", et), () => {
                    document.removeEventListener("mousedown", et)
                }), [et]);
                let en = s.useMemo(() => (0, i.jsx)(S.default, {
                        channel: a,
                        summaries: R,
                        summariesMembers: b,
                        selectTopic: q,
                        setOpen: ee
                    }), [R, b, q, ee, a]),
                    el = (0, m.useStateFromStores)([x.default], () => x.default.shouldShowTopicsBar());
                if (!el) return null;
                let ea = W.default.Messages.SUMMARIES_NO_SUMMARIES;
                return R.length > 0 && (ea = "" === D || null == D ? W.default.Messages.SUMMARIES_VIEW_ALL : D), u ? null : (0, i.jsxs)("div", {
                    ref: g,
                    className: o(z.topicsPillContainer, z.containerMarginTop),
                    children: [(0, i.jsxs)("div", {
                        className: z.topicsPill,
                        children: [(0, i.jsx)(f.Clickable, {
                            className: z.topicsPillText,
                            "aria-label": W.default.Messages.SUMMARY_PILL,
                            onClick: J,
                            children: (0, i.jsxs)("div", {
                                className: o({
                                    [z.topicsPillTextUnselected]: !Y,
                                    [z.topicsPillTextSelected]: Y
                                }),
                                children: [(0, i.jsx)(w.default, {
                                    className: z.topicsPillSummaryIcon,
                                    width: 16,
                                    height: 16
                                }), (0, i.jsx)(f.Text, {
                                    className: z.topicsPillTextTitle,
                                    variant: "text-sm/medium",
                                    children: ea
                                }), (0, i.jsx)(O.default, {
                                    width: 16,
                                    height: 16,
                                    direction: O.default.Directions.DOWN,
                                    className: z.topicsPillDropdownCaret
                                })]
                            })
                        }), (0, i.jsxs)("div", {
                            className: z.topicsPillCarets,
                            children: [(0, i.jsx)(f.Clickable, {
                                "aria-label": W.default.Messages.SUMMARY_PILL_NEXT,
                                onClick: $,
                                className: o(z.topicsPillCaret, z.topicsCaretLeft, {
                                    [z.topicsPillCaretDisabled]: null == B
                                }),
                                children: (0, i.jsx)(O.default, {
                                    width: 16,
                                    height: 16,
                                    direction: O.default.Directions.UP
                                })
                            }), (0, i.jsx)(f.Clickable, {
                                "aria-label": W.default.Messages.SUMMARY_PILL_PREVIOUS,
                                onClick: Q,
                                className: o(z.topicsPillCaret, z.topicsCaretRight, {
                                    [z.topicsPillCaretDisabled]: null == V
                                }),
                                children: (0, i.jsx)(O.default, {
                                    width: 16,
                                    height: 16,
                                    direction: O.default.Directions.DOWN
                                })
                            })]
                        })]
                    }), Y && (0, i.jsxs)("div", {
                        className: z.topicsDropdown,
                        children: [(0, i.jsxs)("div", {
                            className: z.topicsDropdownHeading,
                            children: [(0, i.jsxs)("div", {
                                className: z.topicsDropdownHeadingText,
                                children: [(0, i.jsx)(w.default, {
                                    className: z.topicsPillHeadingIcon,
                                    width: 18,
                                    height: 20
                                }), (0, i.jsx)(f.Heading, {
                                    variant: "heading-md/bold",
                                    color: "header-primary",
                                    lineClamp: 1,
                                    children: W.default.Messages.SUMMARIES
                                }), (0, i.jsx)(I.default, {
                                    className: z.summariesBetaTag
                                })]
                            }), (0, i.jsx)(f.Clickable, {
                                "aria-label": W.default.Messages.CLOSE,
                                onClick: J,
                                className: z.topicsDropdownClose,
                                children: (0, i.jsx)(P.default, {})
                            })]
                        }), (0, i.jsx)(f.Scroller, {
                            ref: T,
                            className: z.topicsScroller,
                            fade: !0,
                            children: en
                        })]
                    })]
                })
            }
            let eo = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return (0, i.jsxs)("div", {
                        className: z.tooltip,
                        children: [(0, i.jsx)(f.Text, {
                            color: "none",
                            variant: "text-sm/semibold",
                            children: e
                        }), t && (0, i.jsx)(f.Text, {
                            className: z.clickCTA,
                            color: "text-muted",
                            variant: "text-sm/normal",
                            children: W.default.Messages.EMOJI_TOOLTIP_CLICK_CTA
                        })]
                    })
                },
                eu = e => {
                    let {
                        children: t,
                        className: n
                    } = e;
                    return (0, i.jsx)("div", {
                        className: o(z.popoutContainer, n),
                        children: t
                    })
                },
                ed = e => {
                    let {
                        className: t
                    } = e;
                    return (0, i.jsx)(eu, {
                        className: t,
                        children: (0, i.jsx)("div", {
                            className: z.popoutLoadingBackground,
                            children: (0, i.jsx)("div", {
                                className: z.popoutLoadingForeground
                            })
                        })
                    })
                }
        },
        903962: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PLAINTEXT_FILE_EXTENSIONS: function() {
                    return l
                },
                isPlaintextPreviewableFile: function() {
                    return a
                }
            });
            let l = new Set(["1c", "4d", "abnf", "accesslog", "ada", "arduino", "ino", "armasm", "arm", "avrasm", "actionscript", "as", "alan", "ansi", "i", "log", "ln", "angelscript", "asc", "apache", "apacheconf", "applescript", "osascript", "arcade", "asciidoc", "adoc", "aspectj", "autohotkey", "autoit", "awk", "mawk", "nawk", "gawk", "bash", "sh", "zsh", "basic", "bbcode", "blade", "bnf", "brainfuck", "bf", "csharp", "cs", "c", "h", "cpp", "hpp", "cc", "hh", "c++", "h++", "cxx", "hxx", "cal", "cos", "cls", "cmake", "cmake.in", "coq", "csp", "css", "csv", "capnproto", "capnp", "chaos", "kaos", "chapel", "chpl", "cisco", "clojure", "clj", "coffeescript", "coffee", "cson", "iced", "cpc", "crmsh", "crm", "pcmk", "crystal", "cr", "cypher", "d", "dns", "zone", "bind", "dos", "bat", "cmd", "dart", "delphi", "dpr", "dfm", "pas", "pascal", "freepascal", "lazarus", "lpr", "lfm", "diff", "patch", "django", "jinja", "dockerfile", "docker", "dsconfig", "dts", "dust", "dst", "dylan", "ebnf", "elixir", "ex", "elm", "erlang", "erl", "extempore", "xtlang", "xtm", "fsharp", "fs", "fix", "fortran", "f90", "f95", "gcode", "nc", "gams", "gms", "gauss", "gss", "godot", "gdscript", "gherkin", "gn", "gni", "go", "golang", "gf", "golo", "gololang", "gradle", "groovy", "xml", "html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "svg", "http", "https", "haml", "handlebars", "hbs", "html.hbs", "html.handlebars", "haskell", "hs", "haxe", "hx", "hy", "hylang", "ini", "toml", "inform7", "i7", "irpf90", "json", "java", "jsp", "javascript", "js", "jsx", "jolie", "iol", "ol", "julia", "julia-repl", "kotlin", "kt", "tex", "leaf", "lean", "lasso", "ls", "lassoscript", "less", "ldif", "lisp", "livecodeserver", "livescript", "lock", "ls", "lua", "makefile", "mk", "mak", "make", "markdown", "md", "mkdown", "mkd", "mathematica", "mma", "wl", "matlab", "maxima", "mel", "mercury", "mirc", "mrc", "mizar", "mojolicious", "monkey", "moonscript", "moon", "n1ql", "nsis", "never", "nginx", "nginxconf", "nim", "nimrod", "nix", "ocl", "ocaml", "ml", "objectivec", "mm", "objc", "obj-c", "obj-c++", "objective-c++", "glsl", "openscad", "scad", "ruleslanguage", "oxygene", "pf", "pf.conf", "php", "php3", "php4", "php5", "php6", "php7", "parser3", "perl", "pl", "pm", "plaintext", "txt", "text", "pony", "pgsql", "postgres", "postgresql", "powershell", "ps", "ps1", "processing", "prolog", "properties", "protobuf", "puppet", "pp", "python", "py", "gyp", "profile", "python-repl", "pycon", "k", "kdb", "qml", "r", "cshtml", "razor", "razor-cshtml", "reasonml", "re", "redbol", "rebol", "red", "red-system", "rib", "rsl", "graph", "instances", "robot", "rf", "rpm-specfile", "rpm", "spec", "rpm-spec", "specfile", "ruby", "rb", "gemspec", "podspec", "thor", "irb", "rust", "rs", "SAS", "sas", "scss", "sql", "p21", "step", "stp", "scala", "scheme", "scilab", "sci", "shexc", "shell", "console", "smali", "smalltalk", "st", "sml", "ml", "solidity", "sol", "stan", "stanfuncs", "stata", "iecst", "scl", "structured-text", "stylus", "styl", "subunit", "supercollider", "sc", "svelte", "swift", "tcl", "tk", "terraform", "tf", "hcl", "tap", "thrift", "tp", "tsql", "twig", "craftcms", "typescript", "ts", "tsx", "unicorn-rails-log", "vbnet", "vb", "vba", "vbscript", "vbs", "vhdl", "vala", "verilog", "v", "vim", "axapta", "x++", "x86asm", "xl", "tao", "xquery", "xpath", "xq", "yml", "yaml", "zephir", "zep"]);

            function a(e) {
                return l.has(e.split(".").slice(-1)[0])
            }
        },
        684337: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isCurrentUserTeen: function() {
                    return a
                }
            });
            var l = n("697218");
            let a = () => {
                var e;
                return (null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) === !1
            }
        },
        305122: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                maybeFetchSoundboardSounds: function() {
                    return g
                },
                uploadSound: function() {
                    return C
                },
                updateSound: function() {
                    return v
                },
                deleteSound: function() {
                    return I
                },
                addFavoriteSound: function() {
                    return _
                },
                removeFavoriteSound: function() {
                    return x
                },
                playSoundLocally: function() {
                    return S
                },
                reportSoundStartedPlaying: function() {
                    return N
                },
                reportSoundFinishedPlaying: function() {
                    return M
                },
                updateUserSoundboardVolume: function() {
                    return T
                },
                muteCustomJoinSound: function() {
                    return R
                }
            });
            var l = n("427964"),
                a = n.n(l),
                i = n("990746"),
                s = n("913144"),
                r = n("404118"),
                o = n("599417"),
                u = n("872173"),
                d = n("235004"),
                c = n("389480"),
                m = n("24156"),
                f = n("846325"),
                h = n("49111"),
                p = n("397336"),
                E = n("782340");

            function g() {
                if (__OVERLAY__) return s.default.dispatch({
                    type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST"
                }), Promise.resolve();
                let e = (0, m.getGuildIdsToFetchSoundsFor)();
                return 0 === e.length ? Promise.resolve() : (s.default.dispatch({
                    type: "GUILD_SOUNDBOARD_FETCH"
                }), s.default.dispatch({
                    type: "REQUEST_SOUNDBOARD_SOUNDS",
                    guildIds: e
                }), A(), new Promise(e => {
                    let t = d.default.hasFetchedDefaultSounds(),
                        n = !1,
                        l = () => {
                            t && n && setTimeout(e, 0)
                        },
                        a = () => {
                            s.default.unsubscribe("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS", a), t = !0, l()
                        },
                        i = () => {
                            s.default.unsubscribe("SOUNDBOARD_SOUNDS_RECEIVED", i), n = !0, l()
                        };
                    s.default.subscribe("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS", a), s.default.subscribe("SOUNDBOARD_SOUNDS_RECEIVED", i)
                }))
            }
            async function C(e) {
                let {
                    guildId: t,
                    name: n,
                    sound: l,
                    volume: a,
                    emojiId: s,
                    emojiName: r
                } = e, o = await i.default.post({
                    url: h.Endpoints.GUILD_SOUNDBOARD_SOUNDS(t),
                    body: {
                        name: n,
                        sound: l,
                        volume: a,
                        emoji_id: s,
                        emoji_name: r
                    }
                }), u = (0, c.soundboardSoundFromAPI)(o.body, t);
                return u
            }
            async function v(e) {
                let {
                    guildId: t,
                    soundId: n,
                    name: l,
                    volume: a,
                    emojiId: s,
                    emojiName: r
                } = e, o = await i.default.patch({
                    url: h.Endpoints.GUILD_SOUNDBOARD_SOUND(t, n),
                    body: {
                        name: l,
                        volume: a,
                        emoji_id: s,
                        emoji_name: r
                    }
                }), u = (0, c.soundboardSoundFromAPI)(o.body, t);
                return u
            }
            async function I(e, t) {
                await i.default.delete({
                    url: h.Endpoints.GUILD_SOUNDBOARD_SOUND(e, t),
                    oldFormErrors: !0
                })
            }

            function _(e) {
                u.FrecencyUserSettingsActionCreators.updateAsync("favoriteSoundboardSounds", t => a.size(t.soundIds) >= p.MAX_FAVORITES ? (r.default.show({
                    title: E.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                    body: E.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                        count: p.MAX_FAVORITES
                    })
                }), !1) : !t.soundIds.includes(e) && void t.soundIds.push(e), p.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function x(e) {
                u.FrecencyUserSettingsActionCreators.updateAsync("favoriteSoundboardSounds", t => {
                    t.soundIds = t.soundIds.filter(t => t !== e)
                }, p.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function S(e, t) {
                s.default.dispatch({
                    type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY",
                    sound: t,
                    channelId: e
                })
            }

            function N(e, t) {
                s.default.dispatch({
                    type: "GUILD_SOUNDBOARD_SOUND_PLAY_START",
                    soundId: e,
                    userId: t
                })
            }

            function M(e, t) {
                s.default.dispatch({
                    type: "GUILD_SOUNDBOARD_SOUND_PLAY_END",
                    soundId: e,
                    userId: t
                })
            }

            function T(e) {
                s.default.dispatch({
                    type: "USER_SOUNDBOARD_SET_VOLUME",
                    volume: e
                })
            }
            async function A(e) {
                let t = d.default.shouldFetchDefaultSounds();
                if (t) {
                    s.default.dispatch({
                        type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS"
                    });
                    try {
                        let t = await i.default.get({
                                url: h.Endpoints.SOUNDBOARD_DEFAULT_SOUNDS,
                                query: {
                                    guild_ids: e
                                }
                            }),
                            n = t.body.map(e => (0, c.soundboardSoundFromAPI)(e, f.DEFAULT_SOUND_GUILD_ID));
                        s.default.dispatch({
                            type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS",
                            soundboardSounds: n
                        })
                    } catch (e) {
                        throw s.default.dispatch({
                            type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE"
                        }), new o.default(e)
                    }
                }
            }

            function R(e) {
                s.default.dispatch({
                    type: "SOUNDBOARD_MUTE_JOIN_SOUND",
                    channelId: e
                })
            }
        },
        462550: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("773670");
            let a = {
                    currentPreviewRef: l.createRef()
                },
                i = l.createContext(a);
            var s = i
        },
        389480: function(e, t, n) {
            "use strict";
            var l, a, i, s, r, o, u, d, c, m;

            function f(e, t) {
                let {
                    sound_id: n,
                    emoji_id: l,
                    emoji_name: a,
                    user_id: i,
                    available: s,
                    ...r
                } = e;
                return {
                    ...r,
                    soundId: n,
                    guildId: t,
                    emojiId: l,
                    emojiName: a,
                    userId: i,
                    available: null == s || s
                }
            }

            function h(e) {
                let {
                    soundId: t,
                    guildId: n,
                    emojiId: l,
                    emojiName: a,
                    userId: i,
                    ...s
                } = e;
                return {
                    ...s,
                    sound_id: t,
                    guild_id: n,
                    emoji_id: l,
                    emoji_name: a,
                    user_id: i
                }
            }
            n.r(t), n.d(t, {
                AnalyticsSoundType: function() {
                    return l
                },
                AnalyticsChangeType: function() {
                    return a
                },
                AnalyticsSoundSource: function() {
                    return i
                },
                soundboardSoundFromAPI: function() {
                    return f
                },
                soundboardSoundToAPI: function() {
                    return h
                },
                SoundboardSoundGridSectionType: function() {
                    return s
                },
                SoundboardSoundItemType: function() {
                    return r
                }
            }), (o = l || (l = {})).ENTRY = "entry_sound", o.EXIT = "exit_sound", o.DEFAULT = "default", (u = a || (a = {})).ADDED = "added", u.UPDATED = "updated", u.REMOVED = "removed", (d = i || (i = {})).DEFAULT = "default", d.CUSTOM = "custom", (c = s || (s = {}))[c.FAVORITES = 0] = "FAVORITES", c[c.GUILD = 1] = "GUILD", c[c.DEFAULTS = 2] = "DEFAULTS", c[c.SEARCH = 3] = "SEARCH", (m = r || (r = {}))[m.SOUND = 0] = "SOUND", m[m.ADD_SOUND = 1] = "ADD_SOUND"
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("49111");

            function a(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(l.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(l.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        812809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("845579"),
                a = n("42887"),
                i = n("829536");

            function s(e) {
                let t = function() {
                        var e;
                        let t = l.SoundboardSettings.getSetting();
                        return (0, i.amplitudeToPerceptual)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100) / 100
                    }(),
                    n = Math.min(a.default.getOutputVolume() / 100, 1);
                return Math.min(e * t * n, 1)
            }
        },
        24156: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildIdsToFetchSoundsFor: function() {
                    return o
                },
                getGuildIdsToFetchSoundsFor: function() {
                    return u
                }
            });
            var l = n("773670"),
                a = n("744196"),
                i = n("305961"),
                s = n("235004");

            function r(e, t) {
                let n = Object.keys(e);
                return n.filter(e => null == t.get(e))
            }

            function o() {
                let e = (0, a.default)([i.default], () => i.default.getGuilds()),
                    t = (0, a.default)([s.default], () => s.default.getSounds());
                return (0, l.useMemo)(() => r(e, t), [e, t])
            }

            function u() {
                let e = i.default.getGuilds(),
                    t = s.default.getSounds();
                return r(e, t)
            }
        },
        18730: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChannelSummarizationModelSwapExperiment: function() {
                    return i
                },
                ChannelSummarizationModelSwapGuildExperiment: function() {
                    return s
                }
            });
            var l = n("862205"),
                a = n("204653");
            let i = (0, l.createExperiment)({
                    kind: "user",
                    id: "2023-07_p13n_summarization_model_swap",
                    label: "User channel summarization model swapping",
                    defaultConfig: {
                        source: a.SummarySources.SOURCE_0
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable SOURCE_1",
                        config: {
                            source: a.SummarySources.SOURCE_1
                        }
                    }]
                }),
                s = (0, l.createExperiment)({
                    kind: "guild",
                    id: "2023-07_p13n_summarization_model_swap_guild",
                    label: "Guild channel summarization model swapping",
                    defaultConfig: {
                        source: a.SummarySources.SOURCE_0
                    },
                    treatments: [{
                        id: 1,
                        label: "Override guild summaries to use SOURCE_1",
                        config: {
                            source: a.SummarySources.SOURCE_1
                        }
                    }]
                })
        },
        204653: function(e, t, n) {
            "use strict";
            var l, a;

            function i(e, t) {
                return {
                    id: e.id,
                    topic: e.topic,
                    summShort: e.summ_short,
                    people: Array.from(new Set(e.people)),
                    startId: e.start_id,
                    endId: e.end_id,
                    count: e.count,
                    channelId: t,
                    source: e.source
                }
            }
            n.r(t), n.d(t, {
                SummarySources: function() {
                    return l
                },
                createSummaryFromServer: function() {
                    return i
                }
            }), (a = l || (l = {}))[a.SOURCE_0 = 0] = "SOURCE_0", a[a.SOURCE_1 = 1] = "SOURCE_1"
        },
        793237: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setHighlightedSummary: function() {
                    return I
                },
                toggleTopicsBar: function() {
                    return _
                },
                setSelectedSummary: function() {
                    return x
                },
                updateVisibleMessages: function() {
                    return S
                },
                useSummaryPolling: function() {
                    return M
                },
                setSummaryFeedback: function() {
                    return T
                },
                deleteSummary: function() {
                    return j
                },
                default: function() {
                    return L
                }
            });
            var l = n("773670"),
                a = n("427964"),
                i = n.n(a),
                s = n("807403"),
                r = n("744196"),
                o = n("990746"),
                u = n("913144"),
                d = n("448993"),
                c = n("734575"),
                m = n("759515"),
                f = n("116460"),
                h = n("42203"),
                p = n("347738");
            let E = {},
                g = {};
            async function C(e, t) {
                let n, l;
                if (!p.default.shouldFetch(e, t)) return;
                let a = Date.now();
                u.default.dispatch({
                    type: "REQUEST_CHANNEL_SUMMARY",
                    channelId: e,
                    summaryId: t,
                    requestedAt: a
                });
                try {
                    let n = await o.default.get("/channels/".concat(e, "/summaries/").concat(t));
                    l = null == n ? void 0 : n.body
                } catch (e) {
                    n = new d.APIError(e)
                }
                u.default.dispatch({
                    type: "RECEIVE_CHANNEL_SUMMARY",
                    channelId: e,
                    summary: l,
                    error: n,
                    requestedAt: a,
                    receivedAt: Date.now()
                })
            }
            async function v(e) {
                var t, n, l, a;
                let s, r;
                if (!p.default.shouldFetch(e)) return;
                let c = Date.now();
                u.default.dispatch({
                    type: "REQUEST_CHANNEL_SUMMARIES",
                    channelId: e,
                    requestedAt: c
                });
                try {
                    r = await o.default.get("/channels/".concat(e, "/summaries"))
                } catch (e) {
                    s = new d.APIError(e)
                }
                let m = (null === (n = r) || void 0 === n ? void 0 : null === (t = n.body) || void 0 === t ? void 0 : t.summaries) instanceof Array ? r.body.summaries : null !== (a = null === (l = r) || void 0 === l ? void 0 : l.body) && void 0 !== a ? a : [];
                m = i.takeRight(m, 75), u.default.dispatch({
                    type: "RECEIVE_CHANNEL_SUMMARIES",
                    channelId: e,
                    summaries: m,
                    error: null != s ? s : void 0,
                    requestedAt: c,
                    receivedAt: Date.now()
                })
            }

            function I(e, t) {
                u.default.dispatch({
                    type: "SET_HIGHLIGHTED_SUMMARY",
                    channelId: e,
                    summaryId: null != t ? t : null
                })
            }

            function _() {
                u.default.dispatch({
                    type: "TOGGLE_TOPICS_BAR"
                })
            }

            function x(e, t) {
                null != e && null != t && C(e, t), u.default.dispatch({
                    type: "SET_SELECTED_SUMMARY",
                    channelId: e,
                    summaryId: null != t ? t : null
                })
            }

            function S(e, t) {
                u.default.dispatch({
                    type: "UPDATE_VISIBLE_MESSAGES",
                    topVisibleMessage: null != e ? e : null,
                    bottomVisibleMessage: null != t ? t : null
                })
            }

            function N(e, t) {
                return null == E[e] && (E[e] = 0), null === t ? E[e] = 0 : E[e] += t, E[e]
            }

            function M(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = (0, r.default)([h.default], () => h.default.getChannel(e), [e]),
                    [a, i] = l.useState(null),
                    o = (0, c.useChannelSummariesExperiment)(n) && !s.isMobile;
                l.useEffect(() => {
                    if (o) return i(e), () => {
                        i(null)
                    }
                }, [e, o]), l.useEffect(() => {
                    if (a !== e && null != a && b.stopPolling(e), o && null != a) return (t || null != e && a !== e) && b.fetchSummaries(e), b.startPolling(e), () => {
                        null != a && b.stopPolling(e)
                    }
                }, [e, t, a, o])
            }

            function T(e, t) {
                u.default.dispatch({
                    type: "SET_SUMMARY_FEEDBACK",
                    summary: e,
                    rating: t
                })
            }
            async function A() {
                var e, t;
                let n, l;
                if (!p.default.shouldFetchChannelAffinities()) return Promise.resolve(null);
                let a = Date.now();
                u.default.dispatch({
                    type: "REQUEST_CHANNEL_AFFINITIES",
                    requestedAt: a
                });
                try {
                    l = await o.default.get("/users/@me/affinities/channels")
                } catch (e) {
                    n = new d.APIError(e)
                }
                let i = null === (t = l) || void 0 === t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.channel_affinities;
                u.default.dispatch({
                    type: "RECEIVE_CHANNEL_AFFINITIES",
                    affinities: i,
                    error: null != n ? n : void 0,
                    requestedAt: a,
                    receivedAt: Date.now()
                })
            }
            async function R(e) {
                var t;
                let n, l;
                let {
                    useQuickSwitcher: a = !0,
                    useChannelAffinities: i = !0
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e = null != e ? e : [];
                let s = Date.now();
                if (0 === (e = e.concat(p.default.defaultChannelIds({
                        withQuickSwitcher: a,
                        withChannelAffinities: i
                    })).filter(e => {
                        let t = h.default.getChannel(e);
                        return (0, c.canSeeChannelSummaries)(t, !1, !0)
                    }).filter(e => {
                        let t = Date.now(),
                            n = p.default.status(e);
                        if (null == n ? void 0 : n.fetching) return !1;
                        let l = null == n ? void 0 : n.lastReceivedAt;
                        return null == l || t - l > 3e4
                    }).slice(0, 50)).length) return Promise.resolve(null);
                u.default.dispatch({
                    type: "REQUEST_CHANNEL_SUMMARIES_BULK",
                    channelIds: e,
                    requestedAt: s
                });
                try {
                    l = await o.default.post({
                        url: "/users/@me/summaries",
                        body: {
                            channel_ids: e
                        }
                    })
                } catch (e) {
                    n = new d.APIError(e)
                }
                let r = null === (t = l) || void 0 === t ? void 0 : t.body.summaries;
                u.default.dispatch({
                    type: "RECEIVE_CHANNEL_SUMMARIES_BULK",
                    requestedAt: s,
                    receivedAt: Date.now(),
                    summaries: r,
                    requestArgs: {
                        channelIds: e
                    },
                    error: n
                })
            }
            async function j(e) {
                try {
                    await o.default.delete("/channels/".concat(e.channelId, "/summaries/").concat(e.id)), u.default.dispatch({
                        type: "DELETE_SUMMARY",
                        summary: e
                    })
                } catch (e) {
                    throw new d.APIError(e)
                }
            }
            let b = {
                startPolling: function(e) {
                    let t = N(e, 1);
                    t - 1 == 0 && (g[e] = setInterval(async () => {
                        await b.fetchSummaries(e)
                    }, 5e3))
                },
                stopPolling: function(e) {
                    let t = N(e, -1);
                    t <= 0 && (N(e, 0), clearInterval(g[e]))
                },
                setSummaryFeedback: T,
                useSummaryPolling: M,
                updateVisibleMessages: S,
                setSelectedSummary: x,
                setHighlightedSummary: I,
                fetchSummaries: v,
                fetchSummariesBulk: R,
                useChannelSummaries: function(e) {
                    let {
                        channelIds: t = []
                    } = e;
                    return ! function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            t = l.useMemo(() => e.join(","), [e]);
                        l.useEffect(() => {
                            (async function e() {
                                try {
                                    await A()
                                } catch (e) {}
                                try {
                                    var e, n;
                                    (null === (e = f.default.getProps().results) || void 0 === e ? void 0 : e.length) === 0 && (0, m.search)(null !== (n = f.default.getProps().query) && void 0 !== n ? n : "")
                                } catch (e) {}
                                await R(t.split(","))
                            })()
                        }, [t])
                    }(t), (0, r.useStateFromStoresArray)([p.default], () => p.default.topSummaries(), [])
                },
                deleteSummary: j
            };
            var L = b
        },
        995307: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SummariesSidebarToggledSource: function() {
                    return s
                },
                SummariesTopicClickedSource: function() {
                    return r
                },
                SummaryFeedbackReasons: function() {
                    return o
                },
                getSummaryFeedbackReasons: function() {
                    return d
                }
            });
            var l, a, i, s, r, o, u = n("782340");

            function d() {
                return [{
                    value: o.DUPLICATED,
                    label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_DUPLICATED
                }, {
                    value: o.TOO_GENERIC,
                    label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_TOO_GENERIC
                }, {
                    value: o.TOO_MANY,
                    label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_TOO_MANY
                }, {
                    value: o.INACCURATE,
                    label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_INACCURATE
                }, {
                    value: o.NOT_USEFUL,
                    label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_NOT_USEFUL
                }, {
                    value: o.OTHER,
                    label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_OTHER
                }]
            }(l = s || (s = {})).TOOLBAR_BUTTON = "toolbar button", l.PILL = "pill", (a = r || (r = {})).SIDEBAR = "sidebar", a.PILL_DROPDOWN = "pill dropdown", a.PILL_NEXT_ARROW = "pill next arrow", a.PILL_PREVIOUS_ARROW = "pill previous arrow", (i = o || (o = {})).DUPLICATED = "DUPLICATED", i.TOO_GENERIC = "TOO_GENERIC", i.TOO_MANY = "TOO_MANY", i.INACCURATE = "INACCURATE", i.NOT_USEFUL = "NOT_USEFUL", i.OTHER = "OTHER"
        },
        347738: function(e, t, n) {
            "use strict";
            let l, a, i, s, r;
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            });
            var o, u, d = n("427964"),
                c = n.n(d),
                m = n("498225"),
                f = n("913144"),
                h = n("734575"),
                p = n("123225"),
                E = n("996777"),
                g = n("116460"),
                C = n("42203"),
                v = n("305961"),
                I = n("660478"),
                _ = n("18494"),
                x = n("282109"),
                S = n("697218"),
                N = n("718517"),
                M = n("299039"),
                T = n("18730"),
                A = n("204653");
            (o = u || (u = {})).FETCHING = "fetching", o.OK = "ok", o.ERROR = "error";
            let R = {},
                j = {},
                b = [],
                L = {},
                y = {
                    status: u.OK,
                    lastRequest: null,
                    lastResponse: null
                },
                O = [],
                D = A.SummarySources.SOURCE_0,
                P = null;

            function w() {
                O = g.default.getProps().results.filter(e => e.type === p.AutocompleterResultTypes.TEXT_CHANNEL && 0 === e.record.type).map(e => e.record.id)
            }

            function U(e) {
                let {
                    source: t
                } = T.ChannelSummarizationModelSwapExperiment.getCurrentConfig({
                    location: "93448c_1"
                });
                D = t, e.emitChange()
            }
            class k extends m.default.PersistedStore {
                getState() {
                    return {
                        summariesByChannel: R,
                        shouldShowTopicsBar: l,
                        summaryFetchStatusByChannel: j,
                        highlightedSummary: a,
                        visibleSummaryIndex: i,
                        selectedSummary: s,
                        summariesFeedback: r,
                        channelAffinities: b,
                        channelAffinitiesById: L,
                        channelAffinitiesStatus: y
                    }
                }
                initialize(e) {
                    var t, n, o, u, d, c;
                    R = null !== (t = null == e ? void 0 : e.summariesByChannel) && void 0 !== t ? t : {}, l = null === (n = null == e ? void 0 : e.shouldShowTopicsBar) || void 0 === n || n, j = {}, a = null !== (o = null == e ? void 0 : e.highlightedSummary) && void 0 !== o ? o : null, i = null !== (u = null == e ? void 0 : e.visibleSummaryIndex) && void 0 !== u ? u : null, s = null !== (d = null == e ? void 0 : e.selectedSummary) && void 0 !== d ? d : null, r = null !== (c = null == e ? void 0 : e.summariesFeedback) && void 0 !== c ? c : {}, this.waitFor(C.default, S.default, _.default, v.default, E.default), this.syncWith([g.default], w), this.syncWith([E.default], () => U(this)), T.ChannelSummarizationModelSwapExperiment.subscribe({
                        location: "1"
                    }, () => U(this))
                }
                allSummaries() {
                    return R
                }
                topSummaries() {
                    let e = Object.values(R).flat().filter(e => e.people.length > 1 && M.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * N.default.Millis.HOUR).sort((e, t) => M.default.extractTimestamp(t.endId) - M.default.extractTimestamp(e.endId));
                    return e
                }
                summaries(e) {
                    var t, n;
                    let l = null !== (t = R[e]) && void 0 !== t ? t : [],
                        a = C.default.getChannel(e),
                        i = v.default.getGuild(null == a ? void 0 : a.guild_id),
                        {
                            source: s
                        } = T.ChannelSummarizationModelSwapGuildExperiment.getCurrentConfig({
                            guildId: null !== (n = null == i ? void 0 : i.id) && void 0 !== n ? n : "",
                            location: "93448c_2"
                        }, {
                            autoTrackExposure: !1
                        }),
                        r = s !== D ? A.SummarySources.SOURCE_0 : D;
                    return l.filter(e => e.source === r)
                }
                shouldShowTopicsBar() {
                    return l
                }
                findSummary(e, t) {
                    var n;
                    return null !== (n = this.summaries(e).find(e => e.id === t)) && void 0 !== n ? n : null
                }
                selectedSummary(e) {
                    var t;
                    if (null == s || s.channelId !== e || null == s.summaryId) return null;
                    return this.findSummary(e, null === (t = s) || void 0 === t ? void 0 : t.summaryId)
                }
                summaryFeedback(e) {
                    return null == e ? null : r[e.id]
                }
                topicForRange(e, t, n) {
                    var l, i, s, r, o, u;
                    let d = null === (l = R[e]) || void 0 === l ? void 0 : l.filter(e => e.source === D);
                    if (null == d) return null;
                    if (null != a && a.channelId === e && null != a.summaryId) return null !== (o = null == d ? void 0 : null === (r = d.find(e => {
                        var t;
                        return e.id === (null === (t = a) || void 0 === t ? void 0 : t.summaryId)
                    })) || void 0 === r ? void 0 : r.topic) && void 0 !== o ? o : null;
                    if (null == t && (null === (i = d[0]) || void 0 === i ? void 0 : i.topic) != null) return d[0].topic;
                    if (null == t && null == n) return null;
                    let m = null != t ? M.default.extractTimestamp(t) : 0,
                        f = null != n ? M.default.extractTimestamp(n) : 0,
                        h = f - (f - m) * .5;
                    if (0 === m) return null;
                    let p = c.sortBy(d, e => {
                        let t = 0,
                            l = M.default.extractTimestamp(e.startId);
                        return t = null != n ? Math.abs(h - l) : Date.now() - M.default.extractTimestamp(e.startId)
                    });
                    return null !== (u = null === (s = c.first(p)) || void 0 === s ? void 0 : s.topic) && void 0 !== u ? u : null
                }
                isFetching(e, t) {
                    var n, l;
                    return null != t ? (null === (l = j[e]) || void 0 === l ? void 0 : l.summaryId) === t : (null === (n = j[e]) || void 0 === n ? void 0 : n.fetching) === !0
                }
                status(e) {
                    return j[e]
                }
                shouldFetch(e, t) {
                    var n, l, a;
                    let i = R[e],
                        s = j[e],
                        r = C.default.getChannel(e);
                    if (!(0, h.canSeeChannelSummaries)(r)) return !1;
                    if (null != t) {
                        let e = null !== (l = null == s ? void 0 : s.summaryIdLastRequestedAt) && void 0 !== l ? l : 0,
                            n = Date.now() - e;
                        return t !== (null == s ? void 0 : s.summaryId) || n > 5e3
                    }
                    let o = null !== (a = null == s ? void 0 : s.lastRequestedAt) && void 0 !== a ? a : 0,
                        u = Date.now() - o;
                    return (null === (n = j[e]) || void 0 === n ? void 0 : n.fetching) !== !0 && ((null == i ? void 0 : i.length) < 1 || u >= 5e3)
                }
                channelAffinities() {
                    return b
                }
                channelAffinitiesById(e) {
                    return null == e ? L : L[e]
                }
                channelAffinitiesStatus() {
                    return y
                }
                shouldFetchChannelAffinities() {
                    return !(y.status === u.FETCHING || null != y.lastResponse && Date.now() - y.lastResponse < 3e4) && !0
                }
                defaultChannelIds(e) {
                    let {
                        withQuickSwitcher: t,
                        withChannelAffinities: n,
                        withUnreads: l,
                        numChannels: a = 25
                    } = e, i = [];
                    return t && (i = i.concat(O)), n && (i = i.concat(b.map(e => e.channel_id))), l && (i = i.filter(e => {
                        let t = C.default.getChannel(e);
                        return null != t && !x.default.isChannelMuted(t.guild_id, e) && I.default.hasUnread(e)
                    })), (i = i.filter(e => {
                        let t = C.default.getChannel(e);
                        return (0, h.canSeeChannelSummaries)(t, !1, !1)
                    })).slice(0, a)
                }
                visibleSummaryIndex() {
                    return i
                }
            }
            k.persistKey = "SummaryStore";
            let V = new k(f.default, {
                CONNECTION_OPEN() {
                    let {
                        source: e
                    } = T.ChannelSummarizationModelSwapExperiment.getCurrentConfig({
                        location: "93448c_3"
                    });
                    return D = e, !1
                },
                CHANNEL_SELECT(e) {
                    var t;
                    let {
                        channelId: n,
                        guildId: l
                    } = e;
                    (null === (t = s) || void 0 === t ? void 0 : t.channelId) !== n && (s = null), c.isFunction(P) && (P(), P = null), null != l && (T.ChannelSummarizationModelSwapGuildExperiment.getCurrentConfig({
                        guildId: l,
                        location: "93448c_4"
                    }), P = T.ChannelSummarizationModelSwapGuildExperiment.subscribe({
                        guildId: l,
                        location: "2"
                    }, () => {
                        U(V)
                    }))
                },
                TOGGLE_TOPICS_BAR() {
                    l = !l
                },
                RECEIVE_CHANNEL_SUMMARY(e) {
                    var t, n;
                    let {
                        summary: l,
                        channelId: a,
                        error: i,
                        receivedAt: s
                    } = e;
                    if (null != l && Object.keys(l).length > 0) {
                        let e = (0, A.createSummaryFromServer)(l, a),
                            n = [...null !== (t = R[a]) && void 0 !== t ? t : []],
                            i = n.findIndex(t => t.id === (null == e ? void 0 : e.id));
                        i > -1 ? n[i] = e : n.push(e), R[a] = n
                    }
                    let r = {
                        ...null !== (n = j[a]) && void 0 !== n ? n : {
                            fetching: !1
                        },
                        summaryId: void 0,
                        summaryIdLastReceivedAt: s,
                        summaryIdError: i
                    };
                    j[a] = r
                },
                REQUEST_CHANNEL_SUMMARY(e) {
                    var t;
                    let {
                        channelId: n,
                        summaryId: l,
                        requestedAt: a
                    } = e;
                    j[n] = {
                        ...null !== (t = j[n]) && void 0 !== t ? t : {
                            fetching: !1
                        },
                        summaryId: l,
                        summaryIdLastRequestedAt: a
                    }
                },
                RECEIVE_CHANNEL_SUMMARIES(e) {
                    let {
                        summaries: t,
                        channelId: n,
                        error: l,
                        receivedAt: a
                    } = e, i = t.filter(e => Object.keys(e).length > 0).map(e => (0, A.createSummaryFromServer)(e, n));
                    if (null != s && s.channelId === n && !i.some(e => {
                            var t;
                            return e.id === (null === (t = s) || void 0 === t ? void 0 : t.summaryId)
                        })) {
                        var r;
                        let e = null !== (r = R[n]) && void 0 !== r ? r : [],
                            t = e.find(e => {
                                var t;
                                return e.id === (null === (t = s) || void 0 === t ? void 0 : t.summaryId)
                            });
                        null != t && i.push(t)
                    }
                    R[n] = (0, d.sortBy)(i, e => M.default.extractTimestamp(e.startId)).reverse();
                    let o = {
                        ...j[n],
                        fetching: !1,
                        error: void 0,
                        lastReceivedAt: a
                    };
                    null != l && (o.error = l), j[n] = o
                },
                REQUEST_CHANNEL_SUMMARIES(e) {
                    var t;
                    j[e.channelId] = {
                        ...null !== (t = j[e.channelId]) && void 0 !== t ? t : {},
                        fetching: !0,
                        lastRequestedAt: e.requestedAt
                    }
                },
                SET_HIGHLIGHTED_SUMMARY(e) {
                    var t, n, l;
                    if (null == a && null == e.channelId || e.channelId === (null === (t = a) || void 0 === t ? void 0 : t.channelId) && e.summaryId === (null === (n = a) || void 0 === n ? void 0 : n.summaryId)) return !1;
                    if (null != (a = null != e.channelId ? {
                            channelId: e.channelId,
                            summaryId: null !== (l = e.summaryId) && void 0 !== l ? l : null
                        } : null) && a.channelId === e.channelId && null != a.summaryId) {
                        let e = R[a.channelId];
                        i = null == e ? void 0 : e.findIndex(e => {
                            var t;
                            return e.id === (null === (t = a) || void 0 === t ? void 0 : t.summaryId)
                        })
                    }
                },
                UPDATE_VISIBLE_MESSAGES(e) {
                    let t = _.default.getChannelId();
                    if (null != t) {
                        var n;
                        if (null != a && a.channelId === t && null != a.summaryId) {
                            let e = R[a.channelId];
                            i = null == e ? void 0 : e.findIndex(e => {
                                var t;
                                return e.id === (null === (t = a) || void 0 === t ? void 0 : t.summaryId)
                            })
                        } else i = null === (n = R[t]) || void 0 === n ? void 0 : n.findIndex(t => {
                            var n, l, a, i;
                            return n = e.topVisibleMessage, l = e.bottomVisibleMessage, a = t.startId, i = t.endId, !(null == n || n > i) && !(null == l || l < a)
                        })
                    }
                },
                SET_SELECTED_SUMMARY(e) {
                    var t, n, l;
                    let a = e.channelId;
                    return null == a ? null : (a !== (null === (t = s) || void 0 === t ? void 0 : t.channelId) || e.summaryId !== (null === (n = s) || void 0 === n ? void 0 : n.summaryId)) && void(s = {
                        channelId: a,
                        summaryId: null !== (l = e.summaryId) && void 0 !== l ? l : null
                    })
                },
                SET_SUMMARY_FEEDBACK(e) {
                    let {
                        summary: t,
                        rating: n
                    } = e;
                    null != n ? r[t.id] = n : delete r[t.id]
                },
                REQUEST_CHANNEL_AFFINITIES() {
                    y = {
                        ...y,
                        status: u.FETCHING,
                        lastRequest: Date.now()
                    }
                },
                RECEIVE_CHANNEL_AFFINITIES(e) {
                    var t;
                    let {
                        affinities: n,
                        error: l
                    } = e;
                    if (null != l) {
                        b = [], L = {}, y = {
                            ...y,
                            status: u.ERROR,
                            lastResponse: Date.now()
                        };
                        return
                    }
                    b = null != n ? n : [], L = null !== (t = null == n ? void 0 : n.reduce((e, t) => (e[t.channel_id] = t.affinity, e), {})) && void 0 !== t ? t : {}, y = {
                        ...y,
                        status: u.OK,
                        lastResponse: Date.now()
                    }
                },
                REQUEST_CHANNEL_SUMMARIES_BULK(e) {
                    let {
                        channelIds: t,
                        requestedAt: n
                    } = e, l = t.reduce((e, t) => {
                        var l;
                        let a = null !== (l = j[t]) && void 0 !== l ? l : {};
                        return e[t] = {
                            ...a,
                            fetching: !0,
                            lastRequestedAt: n,
                            error: void 0
                        }, e
                    }, {});
                    j = {
                        ...j,
                        ...l
                    }
                },
                RECEIVE_CHANNEL_SUMMARIES_BULK(e) {
                    let {
                        summaries: t,
                        receivedAt: n,
                        error: l,
                        requestArgs: {
                            channelIds: a
                        }
                    } = e, i = c.toPairs(t).reduce((e, t) => {
                        let [n, l] = t, a = c.chain(l.map(e => (0, A.createSummaryFromServer)(e, n))).sortBy(e => M.default.extractTimestamp(e.startId)).takeRight(75).reverse().filter(e => Object.keys(e).length > 0).value();
                        return e[n] = a, e
                    }, {}), s = a.reduce((e, t) => {
                        var a;
                        let s = null !== (a = j[t]) && void 0 !== a ? a : {},
                            r = i[t];
                        return null != r && (e.summariesByChannel[t] = r), e.summaryFetchStatusByChannel[t] = {
                            ...s,
                            fetching: !1,
                            error: l,
                            lastReceivedAt: n
                        }, e
                    }, {
                        summariesByChannel: {},
                        summaryFetchStatusByChannel: {}
                    });
                    R = {
                        ...R,
                        ...s.summariesByChannel
                    }, j = {
                        ...j,
                        ...s.summaryFetchStatusByChannel
                    }
                },
                CONVERSATION_SUMMARY_UPDATE(e) {
                    var t, n, l;
                    let {
                        channel_id: a,
                        summaries: i,
                        guild_id: s
                    } = e, r = Date.now(), o = c.chain(i).sortBy(e => M.default.extractTimestamp(e.start_id)).filter(e => Object.keys(e).length > 0).map(e => (0, A.createSummaryFromServer)(e, a)).reverse().value(), u = null !== (n = R[a]) && void 0 !== n ? n : [], d = c.chain(o).concat(u).sortBy(e => M.default.extractTimestamp(e.startId)).takeRight(75).uniqBy("id").reverse().value();
                    R[a] = d, j[a] = {
                        ...j[a],
                        error: void 0,
                        fetching: null !== (l = null === (t = j[a]) || void 0 === t ? void 0 : t.fetching) && void 0 !== l && l,
                        lastReceivedAt: r
                    }
                },
                CLEAR_CONVERSATION_SUMMARIES() {
                    R = {}, j = {}
                },
                DELETE_SUMMARY(e) {
                    var t;
                    let n = e.summary.channelId,
                        l = null !== (t = R[n]) && void 0 !== t ? t : [],
                        a = l.indexOf(e.summary); - 1 !== a && R[n].splice(a, 1)
                }
            });
            var F = V
        },
        979975: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("599110"),
                a = n("793237"),
                i = n("49111");

            function s(e) {
                let {
                    summary: t,
                    guildId: n,
                    channelId: s,
                    rating: r = null,
                    problem: o = null,
                    feedback: u = "",
                    location: d
                } = e;
                (0, a.setSummaryFeedback)(t, r), l.default.track(i.AnalyticEvents.SUMMARIES_REPORT_PROBLEM, {
                    reason: o,
                    location: d,
                    rating: r,
                    feedback: u,
                    participant_count: t.people.length,
                    message_count: t.count,
                    start_message_id: t.startId,
                    guild_id: n,
                    channel_id: s,
                    summary_id: t.id,
                    summary_source: t.source
                })
            }
        },
        402318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("427964"),
                i = n.n(a),
                s = n("77078"),
                r = n("86621"),
                o = n("449008"),
                u = n("432814");
            let d = (0, r.default)(e => {
                let {
                    member: t,
                    empty: n,
                    guildId: a
                } = e;
                return n || null == t ? (0, l.jsx)("div", {
                    className: u.partyMember
                }) : (0, l.jsx)("div", {
                    className: u.partyMember,
                    children: (0, l.jsx)(s.Avatar, {
                        src: t.getAvatarURL(a, 16),
                        "aria-label": t.username,
                        size: s.AvatarSizes.SIZE_16,
                        className: u.partyMember
                    })
                })
            });
            var c = e => {
                let {
                    partySize: t,
                    members: n,
                    minAvatarsShown: a = 1,
                    maxAvatarsShown: s = 2,
                    guildId: r
                } = e, {
                    totalSize: c,
                    knownSize: m
                } = t;
                if (c < a) return null;
                let f = i(n).filter(o.isNotNullish).take(s).map(e => (0, l.jsx)(d, {
                        member: e,
                        guildId: r
                    }, e.id)).value(),
                    h = c - m;
                for (let e = 0; e < h && f.length < s; e++) f.push((0, l.jsx)(d, {
                    empty: !0,
                    guildId: r
                }, "empty-member-".concat(e)));
                let p = Math.max(Math.min(c - f.length, 99), 0);
                if (1 === p) {
                    let e = n[s];
                    f.push((0, l.jsx)(d, {
                        member: e,
                        guildId: r
                    }, e.id))
                }
                return (0, l.jsx)("div", {
                    className: u.wrapper,
                    children: (0, l.jsxs)("div", {
                        className: u.partyMembers,
                        children: [f, p > 1 ? (0, l.jsxs)("div", {
                            className: u.partyMemberOverflow,
                            children: ["+", p]
                        }) : null]
                    })
                })
            }
        },
        584998: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("498225"),
                s = n("77078"),
                r = n("272030"),
                o = n("120027"),
                u = n("487269"),
                d = n("957255"),
                c = n("660478"),
                m = n("109264"),
                f = n("251144"),
                h = n("20662"),
                p = n("15738"),
                E = n("299039"),
                g = n("347738"),
                C = n("118094"),
                v = n("402318"),
                I = n("976818"),
                _ = n("49111"),
                x = n("200521"),
                S = n("457254");

            function N(e) {
                let {
                    summary: t,
                    channel: c,
                    members: I,
                    guildId: N,
                    unread: M,
                    onClick: T
                } = e, [A, R] = a.useState(!1), j = (0, u.getTimestampString)(E.default.extractTimestamp(t.startId)), b = (0, i.useStateFromStores)([g.default], () => g.default.summaryFeedback(t)), L = (e, n) => {
                    e.stopPropagation(), (0, C.default)({
                        summary: t,
                        channel: c,
                        rating: n
                    })
                }, y = d.default.can(_.Permissions.MANAGE_MESSAGES, c);
                return (0, l.jsxs)(s.Clickable, {
                    className: S.container,
                    onClick: T,
                    onContextMenu: e => {
                        y && (0, r.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("113286").then(n.bind(n, "113286"));
                            return n => (0, l.jsx)(e, {
                                ...n,
                                summary: t
                            })
                        })
                    },
                    onMouseEnter: () => R(!0),
                    onMouseLeave: () => R(!1),
                    children: [(0, l.jsx)(p.default, {
                        hovered: A,
                        unread: M,
                        className: S.unreadPill
                    }), (0, l.jsx)("div", {
                        className: S.rowHeader,
                        children: (0, l.jsxs)("div", {
                            className: S.rowHeaderLeft,
                            children: [(0, l.jsx)(s.Text, {
                                className: S.timestamp,
                                color: "interactive-normal",
                                variant: "text-xs/normal",
                                children: j
                            }), (0, l.jsx)(o.default, {
                                height: 4,
                                width: 4,
                                "aria-hidden": "true",
                                className: S.dot
                            }), (0, l.jsx)(m.default, {
                                height: 12,
                                width: 12,
                                className: S.icon
                            }), (0, l.jsx)(s.Text, {
                                className: S.count,
                                color: "interactive-normal",
                                variant: "text-xs/normal",
                                children: t.count
                            }), I.length > 0 && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(o.default, {
                                    height: 4,
                                    width: 4,
                                    "aria-hidden": "true",
                                    className: S.dot
                                }), (0, l.jsx)(v.default, {
                                    partySize: {
                                        knownSize: I.length,
                                        totalSize: I.length
                                    },
                                    maxAvatarsShown: 3,
                                    members: I,
                                    guildId: N
                                })]
                            })]
                        })
                    }), A && !b && (0, l.jsxs)("div", {
                        className: S.feedbackContainer,
                        children: [(0, l.jsx)(s.Clickable, {
                            onClick: e => L(e, x.FeedbackRating.GOOD),
                            children: (0, l.jsx)(h.default, {
                                className: S.thumbIcon,
                                width: 12,
                                height: 12
                            })
                        }), (0, l.jsx)(s.Clickable, {
                            onClick: e => L(e, x.FeedbackRating.BAD),
                            children: (0, l.jsx)(f.default, {
                                className: S.thumbIcon,
                                width: 12,
                                height: 12
                            })
                        })]
                    }), (0, l.jsx)(s.Text, {
                        color: "header-primary",
                        variant: "text-sm/semibold",
                        className: S.title,
                        children: t.topic
                    }), (0, l.jsx)(s.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: S.subtitle,
                        children: t.summShort
                    })]
                })
            }

            function M(e) {
                let {
                    summaries: t,
                    summariesMembers: n,
                    channel: s,
                    selectTopic: r,
                    setOpen: o
                } = e, u = (0, i.useStateFromStores)([c.default], () => c.default.getOldestUnreadMessageId(s.id)), d = a.useCallback(e => {
                    r(e), o(!1)
                }, [r, o]);
                return t.length < 1 ? (0, l.jsx)(I.default, {}) : (0, l.jsx)(l.Fragment, {
                    children: t.map((e, t) => {
                        var a;
                        let i = null !== (a = n[t]) && void 0 !== a ? a : [];
                        return (0, l.jsx)(N, {
                            summary: e,
                            channel: s,
                            members: i,
                            guildId: s.guild_id,
                            unread: null != u && E.default.compare(e.endId, u) > 0,
                            onClick: () => d(t)
                        }, t)
                    })
                })
            }
        },
        976818: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("77078"),
                i = n("543289"),
                s = n("909004"),
                r = n("782340"),
                o = n("52840");

            function u() {
                return (0, l.jsxs)("div", {
                    className: o.container,
                    children: [(0, l.jsxs)("div", {
                        className: o.iconContainer,
                        children: [(0, l.jsx)("div", {
                            className: o.icon,
                            children: (0, l.jsx)(s.default, {
                                className: o.iconOffset,
                                width: 28,
                                height: 28
                            })
                        }), (0, l.jsx)(i.default, {
                            className: o.stars
                        })]
                    }), (0, l.jsx)(a.Heading, {
                        className: o.header,
                        variant: "heading-xl/semibold",
                        children: r.default.Messages.SUMMARY_EMPTY_STATE_TITLE
                    }), (0, l.jsx)(a.Text, {
                        className: o.text,
                        color: "header-secondary",
                        variant: "text-md/normal",
                        children: r.default.Messages.SUMMARY_EMPTY_STATE_TEXT
                    })]
                })
            }
        },
        118094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("77078"),
                i = n("979975"),
                s = n("200521"),
                r = n("782340");

            function o(e, t, n) {
                let {
                    rating: l,
                    problem: s,
                    feedback: o
                } = n;
                (0, i.default)({
                    problem: s,
                    summary: e,
                    feedback: o,
                    guildId: t.guild_id,
                    channelId: t.id,
                    location: "Summary divider",
                    rating: l
                }), (0, a.showToast)((0, a.createToast)(r.default.Messages.CALL_FEEDBACK_CONFIRMATION, a.ToastType.SUCCESS))
            }

            function u(e) {
                let {
                    summary: t,
                    channel: i,
                    rating: r
                } = e;
                null != t && (r === s.FeedbackRating.BAD ? (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("747194").then(n.bind(n, "747194"));
                    return n => (0, l.jsx)(e, {
                        ...n,
                        onSubmit: e => o(t, i, e),
                        startRating: r
                    })
                }) : o(t, i, {
                    rating: r,
                    problem: null,
                    feedback: "",
                    dontShowAgain: !1
                }))
            }
        },
        485422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("575482"),
                s = n.n(i),
                r = n("77078"),
                o = n("368639"),
                u = n("62843"),
                d = n("422137");

            function c(e) {
                let {
                    userBio: t,
                    className: n,
                    animateOnHover: i = !1,
                    isHovering: c = !1,
                    lineClamp: m = 6
                } = e, f = a.useMemo(() => (0, o.parseBioReact)(t), [t]);
                return (0, l.jsx)("div", {
                    className: s(n, d.markup),
                    children: (0, l.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        lineClamp: m,
                        children: (0, l.jsx)(u.MessagesInteractionContext.Provider, {
                            value: {
                                disableAnimations: i && !c,
                                disableInteractions: !1
                            },
                            children: f
                        })
                    })
                })
            }
        },
        908583: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdleHandlerContext: function() {
                    return s
                },
                IdleStateContext: function() {
                    return r
                },
                default: function() {
                    return o
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("638800");
            let s = a.createContext({
                    onPreventIdle: () => null,
                    onAllowIdle: () => null,
                    onForceIdle: () => null,
                    onActive: () => null
                }),
                r = a.createContext(!1);

            function o(e) {
                let {
                    children: t,
                    timeout: n
                } = e, [o, u] = a.useState(!1), d = a.useRef(new Set), c = a.useRef(null);
                a.useEffect(() => (c.current = new i.DelayedCall(n, () => u(!0)), c.current.delay(), () => {
                    var e;
                    null === (e = c.current) || void 0 === e || e.cancel(), c.current = null
                }), [n]);
                let m = a.useCallback(e => {
                        var t;
                        u(!1), d.current.add(e), null === (t = c.current) || void 0 === t || t.cancel()
                    }, [d, c, u]),
                    f = a.useCallback(e => {
                        if (d.current.delete(e), 0 === d.current.size) {
                            var t;
                            null === (t = c.current) || void 0 === t || t.delay()
                        }
                    }, [d, c]),
                    h = a.useCallback(() => {
                        if (u(!1), 0 === d.current.size) {
                            var e;
                            null === (e = c.current) || void 0 === e || e.delay()
                        }
                    }, [d, c, u]),
                    p = a.useCallback(() => {
                        var e;
                        !(d.current.size > 0) && (null === (e = c.current) || void 0 === e || e.cancel(), u(!0))
                    }, [c, u]),
                    E = a.useMemo(() => ({
                        onAllowIdle: f,
                        onPreventIdle: m,
                        onActive: h,
                        onForceIdle: p
                    }), [f, m, h, p]);
                return (0, l.jsx)(r.Provider, {
                    value: o,
                    children: (0, l.jsx)(s.Provider, {
                        value: E,
                        children: t({
                            idle: o,
                            ...E
                        })
                    })
                })
            }
        },
        550410: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePreventIdle: function() {
                    return s
                },
                default: function() {
                    return r
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("908583");

            function s(e) {
                let {
                    onPreventIdle: t,
                    onAllowIdle: n,
                    onActive: l
                } = a.useContext(i.IdleHandlerContext), s = a.useCallback(() => {
                    t(e)
                }, [e, t]), r = a.useCallback(() => {
                    n(e)
                }, [e, n]);
                return {
                    preventIdle: s,
                    allowIdle: r,
                    onActive: l
                }
            }

            function r(e) {
                let {
                    children: t,
                    className: n
                } = e, {
                    onForceIdle: r,
                    onActive: o
                } = a.useContext(i.IdleHandlerContext), {
                    preventIdle: u,
                    allowIdle: d
                } = s("interact");
                a.useEffect(() => () => d(), [d]);
                let c = a.useCallback(e => {
                    var t;
                    let n = null !== (t = e.target.ownerDocument) && void 0 !== t ? t : document;
                    !e.currentTarget.contains(n.activeElement) && r()
                }, [r]);
                return (0, l.jsx)("div", {
                    className: n,
                    onMouseEnter: u,
                    onMouseLeave: d,
                    onFocus: o,
                    onBlur: c,
                    children: t
                })
            }
        },
        981913: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                },
                CenterControlButton: function() {
                    return p
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("575482"),
                i = n.n(a),
                s = n("77078"),
                r = n("461380"),
                o = n("587974"),
                u = n("550410"),
                d = n("641568"),
                c = n("782340"),
                m = n("305078");

            function f(e) {
                let {
                    label: t,
                    onClick: n,
                    onKeyDown: a,
                    onMouseEnter: r,
                    onMouseLeave: o,
                    onContextMenu: d,
                    className: c,
                    wrapperClassName: f,
                    iconClassName: h,
                    iconComponent: p,
                    themeable: E = !1,
                    disabled: g = !1,
                    isActive: C = !1,
                    tooltipPosition: v = "top",
                    shouldShowTooltip: I = !0,
                    forceTooltipOpen: _ = !1,
                    buttonRef: x,
                    grow: S,
                    "aria-label": N
                } = e;
                return (0, l.jsx)(u.default, {
                    children: (0, l.jsx)(s.Tooltip, {
                        position: v,
                        text: t,
                        "aria-label": N,
                        shouldShow: I,
                        forceOpen: _,
                        children: e => {
                            let {
                                onClick: t,
                                onContextMenu: u,
                                onMouseEnter: v,
                                onMouseLeave: I,
                                ..._
                            } = e;
                            return (0, l.jsx)(s.Button, {
                                look: s.Button.Looks.BLANK,
                                size: s.Button.Sizes.NONE,
                                onKeyDown: e => {
                                    null == a || a(e)
                                },
                                onClick: e => {
                                    null == t || t(), null == n || n(e)
                                },
                                onMouseEnter: e => {
                                    null == v || v(), null == r || r(e)
                                },
                                onMouseLeave: e => {
                                    null == I || I(), null == o || o(e)
                                },
                                onContextMenu: e => {
                                    null == u || u(), null == d || d(e)
                                },
                                onFocus: e => {
                                    null == v || v(), null == r || r(e)
                                },
                                onBlur: e => {
                                    null == I || I(), null == o || o(e)
                                },
                                disabled: g,
                                innerClassName: m.lineHeightReset,
                                className: i({
                                    [m.active]: C
                                }, c),
                                wrapperClassName: f,
                                buttonRef: x,
                                grow: S,
                                "aria-label": N,
                                ..._,
                                children: (0, l.jsx)(p, {
                                    className: i(m.controlIcon, h, {
                                        [m.themeable]: E,
                                        [m.active]: C
                                    })
                                })
                            })
                        }
                    })
                })
            }
            let h = {
                red: m.red,
                white: m.white,
                green: m.green,
                yellow: m.yellow,
                primaryDark: m.primaryDark,
                primaryLight: m.primaryLight,
                activeLight: m.activeLight
            };

            function p(e) {
                let {
                    color: t,
                    isActive: n = !1,
                    className: a,
                    iconClassName: p,
                    onPopoutClick: E,
                    popoutOpen: g = !1,
                    ...C
                } = e, v = (0, d.default)(t, n), I = (0, l.jsx)(f, {
                    ...C,
                    grow: !1,
                    onContextMenu: E,
                    iconClassName: i(p, m.centerIcon),
                    className: i(null == E ? a : m.staticButton, m.centerButton, h[v])
                }), _ = null;
                return null != E && (_ = (0, l.jsxs)("div", {
                    className: i(a, m.contextMenuContainer),
                    children: [(0, l.jsx)(o.default, {
                        mask: o.MaskIDs.CHANNEL_CALL_CONTROL_BUTTON,
                        width: 56,
                        height: 56,
                        children: I
                    }), (0, l.jsx)(u.default, {
                        children: (0, l.jsx)(s.Clickable, {
                            "aria-label": c.default.Messages.MORE_OPTIONS,
                            onClick: E,
                            onContextMenu: E,
                            className: i(m.contextMenuNub, h[v], {
                                [m.active]: g
                            }),
                            children: (0, l.jsx)(r.default, {
                                className: i(m.contextMenuCaret, {
                                    [m.open]: g
                                })
                            })
                        })
                    })]
                })), (0, l.jsxs)(l.Fragment, {
                    children: [_, (0, l.jsx)("div", {
                        className: i({
                            [m.unmasked]: null != E
                        }, null != E ? a : null),
                        children: I
                    })]
                })
            }
        },
        95032: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("498225"),
                i = n("292687"),
                s = n("471671"),
                r = n("2770"),
                o = n("45622"),
                u = n("563680"),
                d = n("981913"),
                c = n("782340"),
                m = a.default.connectStores([s.default, i.default], e => {
                    let {
                        node: t,
                        guestWindow: n
                    } = e;
                    return {
                        enabled: (0, u.isFullScreen)(t, null == n ? void 0 : n.document)
                    }
                })(function(e) {
                    let {
                        enabled: t,
                        ...n
                    } = e, a = t ? c.default.Messages.EXIT_FULL_SCREEN : c.default.Messages.FULL_SCREEN, i = t ? o.default : r.default;
                    return (0, l.jsx)(d.default, {
                        label: a,
                        iconComponent: i,
                        ...n
                    })
                })
        },
        641568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("498225"),
                a = n("819855"),
                i = n("841098"),
                s = n("191145"),
                r = n("18494"),
                o = n("49111");

            function u(e, t) {
                let n = (0, l.useStateFromStores)([r.default], () => r.default.getVoiceChannelId()),
                    u = (0, l.useStateFromStores)([s.default], () => null != n ? s.default.getMode(n) : null),
                    d = (0, i.default)();
                return null != e ? e : u === o.ChannelModes.VOICE && (0, a.isThemeLight)(d) ? t ? "activeLight" : "primaryLight" : t ? "white" : "primaryDark"
            }
        },
        525864: function(e, t, n) {
            "use strict";
            var l, a;
            n.r(t), n.d(t, {
                VOICE_RECORDING_MIN_DURATION_MILLIS: function() {
                    return i
                },
                WAVEFORM_WAVE_MAX_VALUE: function() {
                    return s
                }
            }), (a = l || (l = {}))[a.SENDING = 0] = "SENDING", a[a.CANCELLING = 1] = "CANCELLING", a[a.LOCKING = 2] = "LOCKING", a[a.LOCKED = 3] = "LOCKED";
            let i = 500,
                s = 255
        },
        293246: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("161179"),
                a = n.n(l);

            function i(e, t) {
                if (a(e.length >= t, "Waveform smaller than samples"), e.length === t) return e;
                let n = e.length / t,
                    l = [],
                    i = 0;
                for (; l.length < t;) {
                    let t = Math.round((l.length + 1) * n),
                        a = 0,
                        s = 0;
                    for (let n = i; n < t && n < e.length; n++) a += e[n], s++;
                    l[l.length] = a / s, i = t
                }
                return l
            }
        },
        876308: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("575482"),
                s = n.n(i),
                r = n("498225"),
                o = n("77078"),
                u = n("206230"),
                d = n("806135"),
                c = n("170113"),
                m = n("316680"),
                f = n("830837"),
                h = n("132755"),
                p = n("659500"),
                E = n("829536"),
                g = n("534107"),
                C = n("49111"),
                v = n("782340"),
                I = n("494193");
            let _ = a.lazy(() => n.el("403130").then(n.bind(n, "403130")));

            function x(e) {
                let {
                    played: t,
                    duration: n,
                    currentTime: a
                } = e, i = null == n ? "--:--" : t ? (0, c.convertSecondsToClockFormat)(Math.ceil(n - a)) : (0, c.convertSecondsToClockFormat)(Math.ceil(n));
                return (0, l.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    className: I.duration,
                    tabularNumbers: !0,
                    children: i
                })
            }
            var S = a.memo(function(e) {
                var t, n, i, c, S, N;
                let M, {
                        src: T,
                        volume: A = 1,
                        onVolumeChange: R,
                        onMute: j,
                        waveform: b,
                        durationSecs: L,
                        onVolumeShow: y,
                        onVolumeHide: O,
                        onPlay: D,
                        onPause: P,
                        onError: w
                    } = e,
                    U = a.useRef(null),
                    [k, V] = a.useState(0),
                    [F, B] = a.useState(L),
                    [G, H] = a.useState(!1),
                    [W, z] = a.useState(!1),
                    [X, K] = a.useState(!1),
                    [Y, Z] = a.useState(!1),
                    [J, q] = a.useState("none"),
                    [Q, $] = a.useState(() => "function" == typeof A ? A() : A),
                    ee = a.useRef(void 0),
                    et = a.useCallback(() => {
                        z(e => !e)
                    }, []),
                    en = a.useCallback(() => {
                        q("metadata")
                    }, []),
                    el = a.useCallback(e => {
                        let t = e.currentTarget.duration;
                        !isNaN(t) && B(t)
                    }, []),
                    ea = a.useCallback(() => {
                        z(!1), null == ee.current && (ee.current = setTimeout(() => {
                            Z(!1), ee.current = void 0
                        }, 500))
                    }, []),
                    ei = a.useCallback(() => {
                        !X && ea()
                    }, [ea, X]),
                    es = a.useCallback(() => {
                        let e = U.current;
                        if (null == e) return;
                        let t = e.error;
                        null == w || w(t)
                    }, [w]),
                    er = a.useCallback(e => {
                        let t = (0, E.perceptualToAmplitude)(e, 1);
                        H(0 === t), $(t), null == R || R(t)
                    }, [R]),
                    eo = a.useCallback(() => {
                        H(!G), null == j || j(!G)
                    }, [G, j]),
                    eu = a.useCallback(() => {
                        K(!0)
                    }, []),
                    ed = a.useCallback(() => {
                        K(!1), k === F && ea()
                    }, [k, F, ea]),
                    ec = a.useCallback(e => {
                        let t = U.current;
                        if (null == F || null == t) return;
                        let n = e * F;
                        V(n), t.currentTime = n, Z(!0), clearTimeout(ee.current), ee.current = void 0
                    }, [F]);
                a.useEffect(() => {
                    !Y && W && Z(!0)
                }, [W, Y]);
                let em = a.useRef(null);
                a.useEffect(() => {
                    var e, t;
                    if (Y || W) {
                        if (W) em.current = performance.now(), null == D || D(!1, k, (null !== (t = null === (e = U.current) || void 0 === e ? void 0 : e.duration) && void 0 !== t ? t : 0) * 1e3);
                        else {
                            let e = performance.now(),
                                t = em.current;
                            null == P || P(k, null != t ? (e - t) / 1e3 : 0), em.current = null
                        }
                    }
                }, [W]), t = U, n = W, i = V, a.useEffect(() => {
                    let e;
                    return ! function l() {
                        let a = t.current;
                        if (null != a) i(a.currentTime), n && (e = requestAnimationFrame(l))
                    }(), () => {
                        null != e && cancelAnimationFrame(e)
                    }
                }, [t, n, i]), c = T, S = W, N = z, a.useEffect(() => {
                    if (S) return p.ComponentDispatch.dispatch(C.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, {
                        src: c
                    }), p.ComponentDispatch.subscribe(C.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, e), () => {
                        p.ComponentDispatch.unsubscribe(C.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, e)
                    };

                    function e(e) {
                        let {
                            src: t
                        } = e;
                        c !== t && N(!1)
                    }
                }, [c, S, N]);
                let ef = W ? f.default : h.default,
                    eh = W ? v.default.Messages.PAUSE : v.default.Messages.PLAY;
                M = "Safari" === platform.name ? (0, l.jsx)(a.Suspense, {
                    children: (0, l.jsx)(_, {
                        ref: U,
                        className: I.audioElement,
                        src: T,
                        preload: J,
                        playing: W && !X,
                        onEnded: ei,
                        onLoadedMetadata: el,
                        onError: es,
                        muted: G,
                        volume: Q
                    })
                }) : (0, l.jsx)(d.default, {
                    ref: U,
                    className: I.audioElement,
                    controls: !1,
                    preload: J,
                    onEnded: ei,
                    onLoadedMetadata: el,
                    onError: es,
                    muted: G,
                    volume: Q,
                    playing: W && !X,
                    children: (0, l.jsx)("source", {
                        src: T
                    })
                });
                let ep = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion),
                    {
                        enabled: eE
                    } = (0, o.useRedesignIconContext)();
                return (0, l.jsxs)("div", {
                    className: s(I.container, {
                        [I.playing]: W
                    }),
                    onMouseEnter: en,
                    children: [(0, l.jsx)("div", {
                        className: I.rippleContainer,
                        children: (0, l.jsx)("div", {
                            className: s(I.ripple, {
                                [I.reducedMotion]: ep
                            })
                        })
                    }), (0, l.jsx)(o.Clickable, {
                        className: I.playButtonContainer,
                        onClick: et,
                        "aria-label": eh,
                        children: (0, l.jsx)(ef, {
                            className: s(I.playIcon, {
                                [I.oldPlayIconSpacing]: !eE && !W
                            }),
                            width: 18,
                            height: 18
                        })
                    }), (0, l.jsx)(g.default, {
                        className: I.waveform,
                        waveform: b,
                        currentTime: k,
                        duration: null != F ? F : 1,
                        playing: W,
                        played: Y,
                        onDrag: ec,
                        onDragStart: eu,
                        onDragEnd: ed
                    }), (0, l.jsx)(x, {
                        played: Y,
                        currentTime: k,
                        duration: F
                    }), (0, l.jsx)(m.default, {
                        className: I.volumeButton,
                        iconClassName: I.volumeButtonIcon,
                        sliderWrapperClassName: I.volumeSlider,
                        muted: G,
                        value: (0, E.amplitudeToPerceptual)(Q, 1),
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: er,
                        onToggleMute: eo,
                        onVolumeShow: y,
                        onVolumeHide: O
                    }), M]
                })
            })
        },
        534107: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("575482"),
                s = n.n(i),
                r = n("912557"),
                o = n("77078"),
                u = n("731898"),
                d = n("554743"),
                c = n("284679"),
                m = n("293246"),
                f = n("247883"),
                h = n("525864"),
                p = n("742156");
            let E = h.VOICE_RECORDING_MIN_DURATION_MILLIS / 1e3,
                g = 6,
                C = 2,
                v = [0, 0, 0, 0, 0];

            function I(e) {
                let {
                    showAll: t,
                    currentTime: n,
                    duration: l,
                    numSegments: a
                } = e;
                return t ? a : Math.max(0, Math.round(n / l * a))
            }

            function _(e) {
                var t, n, l, a, i;
                let {
                    context: s,
                    devicePixelRatio: r,
                    canvasHeight: o,
                    segmentValue: u,
                    segmentIndex: d,
                    constrainMin: c
                } = e, m = c ? (24 - C) * u + C : 24 * u;
                if (0 === m) return;
                let f = o / 2 - m / 2;
                t = s, n = 6 * d * r, l = f * r, a = m * r, i = 1 * r, t.moveTo(n, l + i), t.lineTo(n, l + a - i), t.arc(n + i, l + a - i, i, Math.PI, 0, !0), t.lineTo(n + 2 * i, l + i), t.arc(n + i, l + i, i, 0, Math.PI, !0), t.closePath()
            }

            function x(e, t, n) {
                let [l, i] = a.useState(e), [s, r] = a.useState(e);
                return a.useLayoutEffect(() => {
                    i(s), r(e)
                }, [e, t, n]), [l, s]
            }

            function S(e, t, n, l) {
                if (null == l) return [t, !1];
                let a = Math.min((n - l) / 200, 1);
                if (1 === a) return [t, !1];
                let i = (0, c.interpolateColor)(e, t, a);
                return [i, !0]
            }

            function N(e) {
                let {
                    className: t,
                    waveform: n,
                    currentTime: i,
                    duration: c,
                    played: C,
                    playing: N,
                    onDrag: M,
                    onDragStart: T,
                    onDragEnd: A
                } = e, {
                    ref: R,
                    width: j
                } = (0, u.default)(), b = a.useMemo(() => {
                    var e;
                    let t;
                    return Math.floor(((t = (e = c) <= E ? 40 : e >= 45 ? 294 : (Math.min(e, 45) - E) / (45 - E) * 254 + 40) + 4) / g) * g - 4
                }, [c]), L = a.useRef(), y = function(e, t) {
                    var n;
                    let l = a.useMemo(() => (function(e) {
                            let t;
                            if (null == e) return;
                            try {
                                t = window.atob(e)
                            } catch (e) {
                                return
                            }
                            let n = [];
                            for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e) / h.WAVEFORM_WAVE_MAX_VALUE;
                            return n
                        })(e), [e]),
                        i = a.useMemo(() => (function(e) {
                            if (null != e) return Math.floor((e + 4) / 6)
                        })(t), [t]),
                        s = a.useMemo(() => null !== (n = function(e, t) {
                            if (null != e && null != t) {
                                if (e.length < t) {
                                    let n = t - e.length;
                                    return e.concat(Array(n).fill(0))
                                }
                                return (0, m.default)(e, t)
                            }
                        }(null != l ? l : [], i)) && void 0 !== n ? n : v, [l, i]);
                    return s
                }(n, j), O = a.useRef(C), D = a.useRef(N), P = a.useRef(null), w = window.devicePixelRatio, {
                    lastBackgroundFillColor: U,
                    backgroundFillColor: k,
                    lastActiveFillColor: V,
                    activeFillColor: F,
                    lastInactiveFillColor: B,
                    inactiveFillColor: G
                } = function(e, t) {
                    let n = (0, o.useToken)(r.default.colors.INTERACTIVE_MUTED).hex(),
                        l = (0, o.useToken)(r.default.colors.INTERACTIVE_NORMAL).hex(),
                        a = (0, o.useToken)(r.default.colors.INTERACTIVE_ACTIVE).hex(),
                        i = (0, o.useToken)(r.default.unsafe_rawColors.BRAND_430).hex(),
                        s = (0, o.useToken)(r.default.unsafe_rawColors.WHITE_500).hex(),
                        u = t ? i : n,
                        [d, c] = x(u, t, e),
                        m = t ? s : e ? a : l,
                        [f, h] = x(m, t, e),
                        p = e ? u : l,
                        [E, g] = x(p, t, e);
                    return {
                        lastBackgroundFillColor: d,
                        backgroundFillColor: c,
                        lastActiveFillColor: f,
                        activeFillColor: h,
                        lastInactiveFillColor: E,
                        inactiveFillColor: g
                    }
                }(C, N);
                a.useEffect(() => {
                    let e = I({
                        showAll: !C,
                        currentTime: i,
                        duration: c,
                        numSegments: y.length
                    });
                    L.current = y.map((t, n) => new f.default(n < e ? t : 0))
                }, [y]), a.useEffect(() => {
                    let e = L.current;
                    if (null == e) return;
                    let t = I({
                        showAll: !C,
                        currentTime: i,
                        duration: c,
                        numSegments: y.length
                    });
                    for (let n = 0; n < e.length; n++) {
                        let l = e[n];
                        if (n < t) {
                            l.animateTo(y[n]);
                            continue
                        }
                        l.reset()
                    }
                }, [y, i, c, C]), a.useEffect(() => {
                    let e = null;
                    return e = requestAnimationFrame(function t(n) {
                        let l = R.current,
                            a = null == l ? void 0 : l.getContext("2d"),
                            i = L.current;
                        if (null == l || null == a || null == i) return;
                        let s = !1;
                        (O.current !== C || D.current !== N) && (O.current = C, D.current = N, P.current = n), null != P.current && n > P.current + 200 && (P.current = null);
                        let r = l.height / w;
                        a.clearRect(0, 0, l.width, l.height), a.beginPath();
                        let [o, u] = S(U, k, n, P.current);
                        s = s || u, a.fillStyle = o;
                        for (let e = 0; e < y.length; e++) _({
                            context: a,
                            devicePixelRatio: w,
                            canvasHeight: r,
                            segmentValue: y[e],
                            segmentIndex: e,
                            constrainMin: !0
                        });
                        a.fill();
                        let [d, c] = S(B, G, n, P.current);
                        s = s || c;
                        let [m, f] = S(V, F, n, P.current);
                        s = s || f;
                        for (let e = 0; e < i.length; e++) {
                            let t = i[e],
                                n = Math.max(t.getCurrentValue(), y[e] - .1);
                            a.beginPath(), a.fillStyle = t.isReset ? d : m, _({
                                context: a,
                                devicePixelRatio: w,
                                canvasHeight: r,
                                segmentValue: n,
                                segmentIndex: e,
                                constrainMin: !t.isReset
                            }), s = s || t.isAnimating(), a.fill()
                        }
                        s && (e = requestAnimationFrame(t))
                    }), () => {
                        null != e && cancelAnimationFrame(e)
                    }
                }, [R, w, y, j, i, c, C, N, U, k, V, F, B, G]);
                let [, H] = (0, d.default)({
                    ref: R,
                    onDrag: M,
                    onDragStart: T,
                    onDragEnd: A
                });
                return (0, l.jsx)("canvas", {
                    onMouseDown: H,
                    className: s(p.canvas, t),
                    style: {
                        width: b
                    },
                    ref: R,
                    height: 32 * window.devicePixelRatio,
                    width: (null != j ? j : 0) * window.devicePixelRatio
                })
            }
        },
        247883: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("11564");
            class a {
                getCurrentValue() {
                    if (null == this.animationDetails) return this.value;
                    let e = performance.now() - this.animationDetails.animationStart,
                        t = this.value < this.animationDetails.lastValue ? 150 : 500;
                    return e > t ? (this.animationDetails = null, this.value) : this.value < this.animationDetails.lastValue ? l.easeOutQuint(e, this.animationDetails.lastValue, this.value, t) : l.easeOutBack(e, this.animationDetails.lastValue, this.value, t, 4)
                }
                animateTo(e) {
                    this.isReset = !1, this.value !== e && (this.animationDetails = {
                        lastValue: this.value,
                        animationStart: performance.now()
                    }, this.value = e)
                }
                isAnimating() {
                    return null != this.animationDetails
                }
                reset() {
                    this.animateTo(0), this.isReset = !0
                }
                constructor(e) {
                    this.value = e, this.animationDetails = null, this.isReset = !1
                }
            }
        },
        410889: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AttachmentUpload: function() {
                    return p
                },
                default: function() {
                    return E
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("575482"),
                s = n.n(i),
                r = n("211648"),
                o = n.n(r),
                u = n("77078"),
                d = n("254490"),
                c = n("945330"),
                m = n("782340"),
                f = n("485625");
            let h = e => {
                    let {
                        filename: t
                    } = e, a = (0, d.classifyFileName)(t), i = n("924070")("../images/file_icons/icon-file-".concat(a, ".svg").replace("../images/file_icons/", "./"));
                    return (0, l.jsx)("img", {
                        className: f.icon,
                        src: i,
                        alt: m.default.Messages.IMG_ALT_ATTACHMENT_FILE_TYPE.format({
                            fileType: a
                        }),
                        title: a
                    })
                },
                p = e => {
                    let {
                        className: t,
                        filename: n,
                        size: a,
                        progress: i,
                        onCancelUpload: r,
                        onClick: d,
                        onContextMenu: p
                    } = e, E = 100 === i, g = !E && a > 0;
                    return (0, l.jsxs)("div", {
                        className: s(f.attachment, t),
                        children: [(0, l.jsx)(h, {
                            filename: n
                        }), (0, l.jsxs)("div", {
                            className: f.attachmentInner,
                            children: [(0, l.jsxs)("div", {
                                className: f.filenameWrapper,
                                children: [(0, l.jsx)(u.Clickable, {
                                    className: f.filename,
                                    onClick: d,
                                    onContextMenu: p,
                                    children: n
                                }), g ? (0, l.jsx)("div", {
                                    className: f.size,
                                    children: "— ".concat(o.filesize(a))
                                }) : null]
                            }), (0, l.jsx)("div", {
                                className: f.progressContainer,
                                children: E ? m.default.Messages.ATTACHMENT_PROCESSING : (0, l.jsx)(u.Progress, {
                                    className: f.progress,
                                    percent: i
                                })
                            })]
                        }), E ? null : (0, l.jsx)(u.Clickable, {
                            onClick: r,
                            children: (0, l.jsx)(c.default, {
                                className: f.cancelButton,
                                width: 24,
                                height: 24
                            })
                        })]
                    })
                };
            var E = e => {
                let {
                    className: t,
                    url: n,
                    filename: i,
                    size: r,
                    onClick: d,
                    onContextMenu: c,
                    renderAdjacentContent: m
                } = e;
                return (0, l.jsxs)(a.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: s(f.attachment, f.newMosaicStyle, t),
                        children: [(0, l.jsx)(h, {
                            filename: i
                        }), (0, l.jsxs)("div", {
                            className: f.attachmentInner,
                            children: [(0, l.jsx)("div", {
                                className: f.filenameLinkWrapper,
                                children: (0, l.jsx)(u.Anchor, {
                                    className: f.fileNameLink,
                                    href: n,
                                    onClick: d,
                                    onContextMenu: c,
                                    children: i
                                })
                            }), (0, l.jsx)("div", {
                                className: f.metadata,
                                children: o.filesize(r)
                            })]
                        })]
                    }), null != m && m()]
                })
            }
        },
        725962: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("143435"),
                s = n("77078"),
                r = n("599110"),
                o = n("195812"),
                u = n("49111"),
                d = n("782340"),
                c = e => {
                    let {
                        href: t,
                        className: n,
                        iconClassName: c,
                        rel: m,
                        target: f,
                        mimeType: h,
                        fileName: p,
                        focusProps: E,
                        onClick: g,
                        ...C
                    } = e, v = a.useMemo(() => i.designConfig.getDefaultLinkInterceptor(t), [t]), I = a.useCallback(e => {
                        r.default.track(u.AnalyticEvents.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                            attachment_type: null == h ? void 0 : h[0],
                            attachment_subtype: null == h ? void 0 : h[1]
                        }), null == g || g(), null == v || v(e)
                    }, [v, h, g]);
                    return null != p ? (0, l.jsx)(s.Anchor, {
                        href: t,
                        onClick: I,
                        target: f,
                        rel: m,
                        className: n,
                        "aria-label": d.default.Messages.DOWNLOAD,
                        focusProps: E,
                        ...C,
                        children: p
                    }) : (0, l.jsx)(s.Anchor, {
                        href: t,
                        onClick: I,
                        target: f,
                        rel: m,
                        className: n,
                        "aria-label": d.default.Messages.DOWNLOAD,
                        focusProps: E,
                        ...C,
                        children: (0, l.jsx)(o.default, {
                            className: c
                        })
                    })
                }
        },
        791106: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Gradients: function() {
                    return r
                },
                GradientCssUrls: function() {
                    return o
                },
                default: function() {
                    return E
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("462567"),
                s = n("912557");
            let r = Object.freeze({
                    PREMIUM_TIER_0: (0, i.v4)(),
                    PREMIUM_TIER_1: (0, i.v4)(),
                    PREMIUM_TIER_2: (0, i.v4)(),
                    PREMIUM_GUILD: (0, i.v4)(),
                    PREMIUM_TRIAL_TUTORIAL: (0, i.v4)(),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, i.v4)()
                }),
                o = {
                    PREMIUM_TIER_0: "url(#".concat(r.PREMIUM_TIER_0, ")"),
                    PREMIUM_TIER_1: "url(#".concat(r.PREMIUM_TIER_1, ")"),
                    PREMIUM_TIER_2: "url(#".concat(r.PREMIUM_TIER_2, ")"),
                    PREMIUM_GUILD: "url(#".concat(r.PREMIUM_GUILD, ")"),
                    PREMIUM_TRIAL_TUTORIAL: "url(#".concat(r.PREMIUM_TRIAL_TUTORIAL, ")"),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(r.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
                },
                u = () => (0, l.jsxs)("linearGradient", {
                    id: r.PREMIUM_TIER_0,
                    children: [(0, l.jsx)("stop", {
                        offset: ".1762",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                    }), (0, l.jsx)("stop", {
                        offset: "0.5351",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                    }), (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                    })]
                }),
                d = () => (0, l.jsxs)("linearGradient", {
                    id: r.PREMIUM_TIER_1,
                    children: [(0, l.jsx)("stop", {
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
                    }), (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                    })]
                }),
                c = () => (0, l.jsxs)("linearGradient", {
                    id: r.PREMIUM_TIER_2,
                    children: [(0, l.jsx)("stop", {
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                    }), (0, l.jsx)("stop", {
                        offset: "0.502368",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                    }), (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                    })]
                }),
                m = () => (0, l.jsxs)("linearGradient", {
                    id: r.PREMIUM_GUILD,
                    children: [(0, l.jsx)("stop", {
                        stopColor: s.default.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
                    }), (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: s.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                    })]
                }),
                f = () => (0, l.jsxs)("linearGradient", {
                    id: r.PREMIUM_TRIAL_TUTORIAL,
                    children: [(0, l.jsx)("stop", {
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                h = () => (0, l.jsxs)("linearGradient", {
                    id: r.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    gradientTransform: "rotate(45)",
                    children: [(0, l.jsx)("stop", {
                        offset: "0",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                p = a.memo(function() {
                    return (0, l.jsxs)("svg", {
                        viewBox: "0 0 1 1",
                        style: {
                            position: "absolute",
                            pointerEvents: "none",
                            top: -1,
                            left: -1,
                            width: 1,
                            height: 1
                        },
                        "aria-hidden": !0,
                        children: [u(), d(), c(), m(), f(), h()]
                    })
                }, () => !0);
            var E = p
        },
        663175: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("254490"),
                s = n("170113");
            class r extends a.PureComponent {
                render() {
                    let {
                        src: e,
                        fileSize: t,
                        fileName: n,
                        className: a,
                        playable: r,
                        volume: o,
                        renderLinkComponent: u,
                        onVolumeChange: d,
                        onVolumeShow: c,
                        onVolumeHide: m,
                        autoMute: f,
                        onMute: h,
                        mimeType: p,
                        onPlay: E
                    } = this.props;
                    return (0, l.jsx)(s.default, {
                        src: e,
                        fileName: n,
                        fileSize: (0, i.sizeString)(t),
                        type: s.default.Types.AUDIO,
                        className: a,
                        playable: r,
                        volume: o,
                        onMute: h,
                        autoMute: f,
                        onVolumeChange: d,
                        onVolumeShow: c,
                        onVolumeHide: m,
                        renderLinkComponent: u,
                        mimeType: p,
                        onPlay: E
                    })
                }
            }
        },
        952368: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IMAGE_GIF_RE: function() {
                    return f
                },
                default: function() {
                    return h
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("427964"),
                s = n("710934"),
                r = n("407063"),
                o = n("103603"),
                u = n("275623"),
                d = n("594098"),
                c = n("719347"),
                m = n("49111");
            let f = /\.gif($|\?|#)/i;
            class h extends a.Component {
                static isAnimated(e) {
                    let {
                        src: t,
                        original: n,
                        animated: l
                    } = e;
                    return l || f.test(null != n && "" !== n ? n : t)
                }
                componentDidMount() {
                    let {
                        readyState: e
                    } = this.state;
                    e === m.ImageReadyStates.LOADING && this.loadImage(this.getSrc(this.getRatio(), h.isAnimated(this.props)), this.handleImageLoad), h.isAnimated(this.props) && this.observeVisibility()
                }
                componentDidUpdate(e) {
                    let t = h.isAnimated(this.props),
                        n = h.isAnimated(e);
                    n !== t && (t ? this.observeVisibility() : this.unobserveVisibility())
                }
                componentWillUnmount() {
                    h.isAnimated(this.props) && this.unobserveVisibility(), this._cancellers.forEach(e => e()), this._cancellers.clear()
                }
                getSrc(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            src: n,
                            width: l,
                            height: a,
                            maxWidth: i,
                            maxHeight: s,
                            mediaLayoutType: o
                        } = this.props;
                    return (0, r.getImageSrc)({
                        src: n,
                        width: l,
                        height: a,
                        ratio: e,
                        maxWidth: o === c.MediaLayoutType.MOSAIC ? i : void 0,
                        maxHeight: o === c.MediaLayoutType.MOSAIC ? s : void 0,
                        format: t ? "png" : null
                    })
                }
                getRatio() {
                    let {
                        width: e,
                        height: t,
                        maxWidth: n = 400,
                        maxHeight: l = 300,
                        mediaLayoutType: a,
                        useFullWidth: i
                    } = this.props;
                    return a === c.MediaLayoutType.MOSAIC && i ? (0, o.getCoverRatio)({
                        width: e,
                        height: t,
                        maxWidth: n,
                        maxHeight: l
                    }) : (0, o.getRatio)({
                        width: e,
                        height: t,
                        maxWidth: n,
                        maxHeight: l
                    })
                }
                getType() {
                    let {
                        mediaLayoutType: e,
                        responsive: t
                    } = this.props;
                    return null != e ? e : t ? c.MediaLayoutType.RESPONSIVE : c.MediaLayoutType.STATIC
                }
                loadImage(e, t) {
                    let {
                        width: n,
                        height: l
                    } = this.props;
                    if (1 === n && 1 === l) return;
                    let a = (0, r.loadImage)(e, (e, n) => {
                        null != a && this._cancellers.delete(a), null == t || t(e, n)
                    });
                    null != a && this._cancellers.add(a)
                }
                render() {
                    let {
                        alt: e,
                        zoomThumbnailPlaceholder: t,
                        onZoom: n,
                        shouldLink: a,
                        onContextMenu: s,
                        autoPlay: r,
                        original: o,
                        className: u,
                        imageClassName: c,
                        children: f,
                        animated: p,
                        shouldAnimate: E,
                        width: g,
                        height: C,
                        minWidth: v,
                        minHeight: I,
                        maxWidth: _,
                        maxHeight: x,
                        renderItem: S,
                        onClick: N,
                        renderAccessory: M,
                        tabIndex: T,
                        limitResponsiveWidth: A,
                        useFullWidth: R,
                        placeholder: j,
                        placeholderVersion: b,
                        showThumbhashPlaceholder: L
                    } = this.props, {
                        readyState: y,
                        hasMouseOver: O,
                        hasFocus: D
                    } = this.state, P = null != n, w = this.getRatio(), U = (0, i.clamp)(Math.round(g * w), null != v ? v : 0, null != _ ? _ : 1 / 0), k = (0, i.clamp)(Math.round(C * w), null != I ? I : 0, null != x ? x : 1 / 0), V = {
                        alt: e,
                        readyState: y,
                        onContextMenu: null != s ? s : void 0,
                        zoomable: P,
                        className: u,
                        imageClassName: c,
                        minWidth: v,
                        minHeight: I,
                        mediaLayoutType: this.getType(),
                        limitResponsiveWidth: A,
                        useFullWidth: R,
                        tabIndex: T,
                        width: U,
                        height: k,
                        renderItem: S,
                        src: "",
                        placeholder: j,
                        placeholderVersion: b,
                        showThumbhashPlaceholder: L,
                        children: null != f ? e => {
                            let {
                                src: t,
                                size: n,
                                alt: l,
                                mediaLayoutType: a
                            } = e;
                            return f({
                                src: t,
                                size: n,
                                alt: l,
                                mediaLayoutType: a
                            })
                        } : void 0,
                        onMouseEnter: this.onMouseEnter,
                        onFocus: this.onFocus,
                        onBlur: this.onBlur
                    };
                    if (1 === V.width && 1 === V.height) return null;
                    switch ((P || null != N) && (V.onClick = this.onClick), a && (V.original = null != o && "" !== o ? o : V.src), y) {
                        case m.ImageReadyStates.LOADING:
                            null != t && (V.src = t);
                            break;
                        case m.ImageReadyStates.READY:
                            if (h.isAnimated(this.props)) {
                                V.onMouseLeave = this.onMouseLeave;
                                let e = (r || O || D) && (null == E || E) && h.visibilityObserver.isVisible(this);
                                e ? (V.src = this.getSrc(w), V.renderAccessory = M) : (V.src = this.getSrc(w, !p || !r), V.renderAccessory = this.renderAccessory), null != f && (V.children = t => {
                                    let {
                                        src: n,
                                        size: l,
                                        alt: a,
                                        mediaLayoutType: i
                                    } = t;
                                    return f({
                                        src: n,
                                        size: l,
                                        animating: e,
                                        alt: a,
                                        mediaLayoutType: i
                                    })
                                })
                            } else V.src = this.getSrc(w)
                    }
                    return (0, l.jsx)(d.default, {
                        ...V
                    })
                }
                constructor(e) {
                    super(e), this.state = {
                        readyState: m.ImageReadyStates.LOADING,
                        hasMouseOver: !1,
                        hasFocus: !1
                    }, this._cancellers = new Set, this.observeVisibility = () => {
                        h.visibilityObserver.observe(this)
                    }, this.unobserveVisibility = () => {
                        h.visibilityObserver.unobserve(this)
                    }, this.handleImageLoad = e => this.setState({
                        readyState: e ? m.ImageReadyStates.ERROR : m.ImageReadyStates.READY
                    }), this.preloadImage = (e, t) => {
                        let {
                            width: n,
                            height: l
                        } = e, {
                            width: a,
                            height: i
                        } = this.props;
                        (1 !== a || 1 !== i) && this.loadImage(this.getSrc((0, o.getRatio)({
                            width: a,
                            height: i,
                            maxWidth: n,
                            maxHeight: l
                        })), t)
                    }, this.onMouseEnter = e => {
                        h.isAnimated(this.props) && this.setState({
                            hasMouseOver: !0
                        });
                        let {
                            onMouseEnter: t
                        } = this.props;
                        null != t && t(e, {
                            preloadImage: this.preloadImage
                        })
                    }, this.onFocus = e => {
                        h.isAnimated(this.props) && this.setState({
                            hasFocus: !0
                        })
                    }, this.onBlur = e => {
                        let {
                            currentTarget: t,
                            relatedTarget: n
                        } = e;
                        !t.contains(n) && this.setState({
                            hasFocus: !1
                        })
                    }, this.onMouseLeave = () => this.setState({
                        hasMouseOver: !1
                    }), this.onClick = e => {
                        let {
                            onZoom: t,
                            onClick: n
                        } = this.props;
                        null != n ? n(e) : null != t && (e.preventDefault(), t(e, {
                            zoomThumbnailPlaceholder: this.getSrc(this.getRatio())
                        }))
                    }, this.renderAccessory = () => {
                        let {
                            hasMouseOver: e,
                            hasFocus: t
                        } = this.state, n = null != this.props.renderAccessory ? this.props.renderAccessory() : null;
                        return this.props.shouldRenderAccessory ? e || t ? n : (0, l.jsx)(u.default, {}) : null
                    }, (0, r.isImageLoaded)(this.getSrc(this.getRatio(), h.isAnimated(this.props))) && (this.state.readyState = m.ImageReadyStates.READY)
                }
            }
            h.visibilityObserver = new s.VisibilityObserver({
                threshold: .7
            }), h.defaultProps = {
                shouldLink: !1,
                autoPlay: !1,
                animated: !1,
                minWidth: 0,
                minHeight: 0,
                shouldRenderAccessory: !0
            }
        },
        888673: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("254490"),
                s = n("952368"),
                r = n("170113"),
                o = n("49111"),
                u = n("782340");
            class d extends a.Component {
                render() {
                    let {
                        src: e,
                        fileSize: t,
                        className: n,
                        mediaPlayerClassName: a,
                        poster: d,
                        fileName: c,
                        naturalWidth: m,
                        naturalHeight: f,
                        playable: h,
                        downloadable: p = !0,
                        volume: E,
                        autoPlay: g,
                        autoMute: C,
                        responsive: v,
                        mediaLayoutType: I,
                        mimeType: _,
                        renderOverlayContent: x,
                        renderLinkComponent: S,
                        onClick: N,
                        onPlay: M,
                        onEnded: T,
                        onVolumeChange: A,
                        onMute: R,
                        alt: j = u.default.Messages.VIDEO,
                        ...b
                    } = this.props;
                    return (0, l.jsx)(s.default, {
                        alt: j,
                        className: n,
                        src: d,
                        ...b,
                        minWidth: r.default.minWidth,
                        minHeight: r.default.minHeight,
                        shouldLink: !1,
                        shouldAnimate: !1,
                        mediaLayoutType: I,
                        responsive: v,
                        children: n => {
                            let {
                                src: s,
                                size: {
                                    width: u,
                                    height: d
                                }
                            } = n, j = !(m <= o.MAX_VIDEO_WIDTH && f <= o.MAX_VIDEO_HEIGHT || m <= o.MAX_VIDEO_HEIGHT && f <= o.MAX_VIDEO_WIDTH);
                            return (0, l.jsx)(r.default, {
                                className: a,
                                forceExternal: j,
                                src: e,
                                poster: s,
                                width: u,
                                height: d,
                                responsive: v,
                                volume: E,
                                autoPlay: null != g && g,
                                autoMute: null != C && C,
                                type: r.default.Types.VIDEO,
                                mediaLayoutType: I,
                                fileName: c,
                                fileSize: null == t ? void 0 : (0, i.sizeString)(t),
                                playable: h,
                                renderLinkComponent: S,
                                renderOverlayContent: x,
                                onClick: N,
                                onPlay: M,
                                onEnded: T,
                                onVolumeChange: A,
                                onMute: R,
                                mimeType: _,
                                downloadable: p
                            })
                        }
                    })
                }
            }
        },
        672724: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("575482"),
                s = n.n(i),
                r = n("28926"),
                o = n("127869");
            let u = {
                    friction: 14,
                    tension: 200
                },
                d = {
                    DURATION: "DURATION",
                    VOLUME: "VOLUME"
                };

            function c(e) {
                let t = 0 | e,
                    n = t % 60;
                return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"))
            }
            class m extends a.Component {
                componentDidMount() {
                    let {
                        previewWidth: e,
                        animatedProgress: t
                    } = this.state;
                    this._previewId = e.addListener(this.handlePreviewChange), this._progressId = t.addListener(this.handleAnimatedChange)
                }
                componentWillUnmount() {
                    let {
                        previewWidth: e,
                        animatedProgress: t
                    } = this.state;
                    e.removeListener(this._previewId), t.removeListener(this._progressId), window.removeEventListener("mouseup", this.handleDragEnd, !1), window.removeEventListener("mousemove", this.handleDragMove, !1)
                }
                componentDidUpdate(e, t) {
                    let {
                        dragging: n,
                        previewWidth: l,
                        animatedProgress: a
                    } = this.state;
                    !n && t.dragging && l.setValue(a._value)
                }
                setGrabber(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        {
                            animatedProgress: n
                        } = this.state;
                    t ? r.default.spring(n, {
                        toValue: e,
                        ...u
                    }).start() : n.setValue(e)
                }
                calculatePercentage(e, t) {
                    let {
                        wrapper: n,
                        props: {
                            type: l
                        }
                    } = this;
                    if (null == n) return 0;
                    let {
                        left: a,
                        width: i,
                        bottom: s,
                        height: r
                    } = n.getBoundingClientRect(), o = l === d.VOLUME ? (s - t) / r : (e - a) / i;
                    return Math.min(1, Math.max(0, o))
                }
                render() {
                    let {
                        buffers: e,
                        type: t,
                        className: n,
                        sliderClassName: a
                    } = this.props, {
                        dragging: i,
                        previewWidth: u,
                        animatedProgress: c
                    } = this.state, m = i ? c : u;
                    return (0, l.jsx)("div", {
                        className: s(n, t === d.VOLUME ? o.vertical : o.horizontal),
                        children: (0, l.jsx)("div", {
                            className: s(a, i ? o.mediaBarInteractionDragging : o.mediaBarInteraction, t === d.VOLUME ? o.mediaBarInteractionVolume : null),
                            onMouseDown: this.handleDragStart,
                            onMouseMove: this.handleMouseMove,
                            ref: e => this.wrapper = e,
                            children: (0, l.jsxs)("div", {
                                className: s(o.mediaBarWrapper, t === d.VOLUME ? o.mediaBarWrapperVolume : null),
                                children: [null != e ? e.map((e, t) => {
                                    let [n, a] = e;
                                    return (0, l.jsx)("div", {
                                        className: o.buffer,
                                        style: {
                                            width: "".concat(100 * a, "%"),
                                            left: "".concat(100 * n, "%")
                                        }
                                    }, t)
                                }) : null, t === d.DURATION ? (0, l.jsx)(r.default.div, {
                                    className: o.mediaBarPreview,
                                    style: {
                                        width: u.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ["0%", "100%"]
                                        })
                                    }
                                }) : null, (0, l.jsx)(r.default.div, {
                                    className: o.mediaBarProgress,
                                    style: {
                                        width: c.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ["0%", "100%"]
                                        })
                                    },
                                    children: (0, l.jsx)("span", {
                                        className: o.mediaBarGrabber
                                    })
                                }), t === d.DURATION ? (0, l.jsx)(r.default.div, {
                                    ref: this.setBubbleRef,
                                    className: o.bubble,
                                    style: {
                                        left: m.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ["0%", "100%"]
                                        })
                                    }
                                }) : null]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        animatedProgress: new r.default.Value(0),
                        dragging: !1,
                        offsetLeft: 0,
                        offsetWidth: 0,
                        previewWidth: new r.default.Value(0)
                    }, this.handlePreviewChange = () => {
                        let {
                            bubble: e,
                            state: {
                                dragging: t,
                                previewWidth: n
                            },
                            props: {
                                value: l
                            }
                        } = this;
                        !t && null != e && (e.innerText = c(n._value * l))
                    }, this.handleAnimatedChange = () => {
                        let {
                            bubble: e,
                            state: {
                                dragging: t,
                                animatedProgress: n
                            },
                            props: {
                                value: l
                            }
                        } = this;
                        t && null != e && (e.innerText = c(n._value * l))
                    }, this.handleMouseMove = e => {
                        let {
                            dragging: t,
                            previewWidth: n
                        } = this.state;
                        if (t) return;
                        let {
                            clientX: l,
                            clientY: a
                        } = e;
                        n.setValue(this.calculatePercentage(l, a))
                    }, this.handleDragMove = e => {
                        let {
                            onDrag: t,
                            type: n
                        } = this.props, {
                            clientX: l,
                            clientY: a
                        } = e;
                        t(this.calculatePercentage(l, a), n)
                    }, this.handleDragStart = e => {
                        let {
                            onDragStart: t,
                            onDrag: n,
                            type: l,
                            currentWindow: a
                        } = this.props, {
                            clientX: i,
                            clientY: s
                        } = e;
                        if (e.preventDefault(), null == this.wrapper) return;
                        let {
                            left: r,
                            width: o
                        } = this.wrapper.getBoundingClientRect();
                        this.setState({
                            dragging: !0,
                            offsetLeft: r,
                            offsetWidth: o
                        }, () => {
                            t(l), n(this.calculatePercentage(i, s), l), a.removeEventListener("mouseup", this.handleDragEnd, !1), a.removeEventListener("mousemove", this.handleDragMove, !1), a.addEventListener("mouseup", this.handleDragEnd, !1), a.addEventListener("mousemove", this.handleDragMove, !1)
                        })
                    }, this.handleDragEnd = () => {
                        let {
                            onDragEnd: e,
                            currentWindow: t
                        } = this.props;
                        e(), t.removeEventListener("mouseup", this.handleDragEnd, !1), t.removeEventListener("mousemove", this.handleDragMove, !1), this.setState({
                            dragging: !1
                        })
                    }, this.setBubbleRef = e => {
                        null == e ? this.bubble = null : null != e.componentRef ? this.bubble = e.componentRef : null != e.refs && (this.bubble = e.refs.node)
                    }
                }
            }
            m.Types = d, m.defaultProps = {
                currentWindow: window
            };
            var f = m
        },
        924444: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImageModal: function() {
                    return x
                },
                VideoModal: function() {
                    return S
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("575482"),
                s = n.n(i),
                r = n("807403"),
                o = n("77078"),
                u = n("304580"),
                d = n("605160"),
                c = n("659500"),
                m = n("103603"),
                f = n("874276"),
                h = n("952368"),
                p = n("888673"),
                E = n("505684"),
                g = n("49111"),
                C = n("782340"),
                v = n("964437");

            function I(e) {
                let {
                    onClose: t
                } = e, n = a.useRef(null);
                return (0, l.jsx)("div", {
                    className: v.mobileCloseWrapper,
                    ref: n,
                    children: (0, l.jsx)(o.FocusRingScope, {
                        containerRef: n,
                        children: (0, l.jsx)("div", {
                            children: (0, l.jsx)(u.default, {
                                closeAction: t,
                                keybind: "ESC"
                            })
                        })
                    })
                })
            }
            let _ = e => {
                let {
                    children: t,
                    hasMediaControls: n,
                    isObscured: i,
                    src: r
                } = e, [o, u] = a.useState(!1), c = a.useRef(r);
                return (a.useEffect(() => {
                    r !== c.current && u(!i)
                }, [r, i]), i) ? (0, l.jsx)(E.ObscuredDisplayContext.Provider, {
                    value: o,
                    children: (0, l.jsx)(E.default, {
                        type: E.default.Types.ATTACHMENT,
                        reason: d.ObscureReason.EXPLICIT_CONTENT,
                        className: v.obscureContainer,
                        obscured: !0,
                        isSingleMosaicItem: !0,
                        obscurityControlClassName: s({
                            [v.controlsOffset]: n && o
                        }),
                        onToggleObscurity: e => {
                            e.stopPropagation(), e.nativeEvent.stopPropagation(), u(e => !e)
                        },
                        children: e => (0, l.jsx)(l.Fragment, {
                            children: (0, l.jsx)("div", {
                                className: s(v.obscureWrapper, {
                                    [v.obscure]: e
                                }),
                                children: t(e)
                            })
                        })
                    }, r)
                }) : (0, l.jsx)(l.Fragment, {
                    children: t(!1)
                })
            };

            function x(e) {
                let {
                    src: t,
                    original: n,
                    placeholder: i,
                    width: s,
                    height: o,
                    animated: u,
                    children: d,
                    responsive: f,
                    renderLinkComponent: p,
                    maxWidth: E,
                    maxHeight: x,
                    shouldAnimate: S,
                    onClose: N,
                    shouldHideMediaOptions: M = !1,
                    obscure: T = !1,
                    ...A
                } = e, {
                    width: R,
                    height: j
                } = (0, m.zoomFit)(s, o), b = r.isMobile && null != N;
                a.useEffect(() => {
                    if (null != N) return c.ComponentDispatch.subscribe(g.ComponentActions.MEDIA_MODAL_CLOSE, N), () => {
                        c.ComponentDispatch.unsubscribe(g.ComponentActions.MEDIA_MODAL_CLOSE, N)
                    }
                }, [N]);
                let L = M ? e => {
                    e.stopPropagation(), e.preventDefault()
                } : A.onContextMenu;
                return (0, l.jsxs)("div", {
                    className: v.wrapper,
                    children: [b ? (0, l.jsx)(I, {
                        onClose: N
                    }) : null, (0, l.jsx)(_, {
                        isObscured: T,
                        src: t,
                        children: e => (0, l.jsx)(h.default, {
                            src: t,
                            placeholder: i,
                            shouldLink: !1,
                            width: s,
                            height: o,
                            maxWidth: R,
                            maxHeight: j,
                            children: d,
                            animated: !e && u,
                            autoPlay: !e,
                            responsive: f,
                            onContextMenu: L,
                            ...A
                        }, t)
                    }), null != n && !M && p({
                        href: n,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        className: v.downloadLink,
                        children: C.default.Messages.OPEN_IN_BROWSER
                    })]
                })
            }

            function S(e) {
                let {
                    src: t,
                    width: n,
                    height: a,
                    onClose: i,
                    renderLinkComponent: o,
                    shouldHideMediaOptions: u = !1,
                    obscure: d = !1,
                    ...c
                } = e, {
                    width: h,
                    height: E
                } = (0, m.zoomFit)(n, a), g = r.isMobile && null != i, x = u ? e => {
                    e.stopPropagation(), e.preventDefault()
                } : c.onContextMenu;
                return (0, l.jsxs)("div", {
                    className: s(v.wrapper, v.videoWrapper),
                    children: [g ? (0, l.jsx)(I, {
                        onClose: i
                    }) : null, (0, l.jsx)(_, {
                        hasMediaControls: !0,
                        isObscured: d,
                        src: t,
                        children: e => (0, l.jsx)(p.default, {
                            src: t,
                            width: n,
                            height: a,
                            maxWidth: h,
                            maxHeight: E,
                            renderLinkComponent: o,
                            volume: f.getVolume,
                            autoMute: f.getMuted,
                            onVolumeChange: f.setVolume,
                            onMute: f.setMuted,
                            autoPlay: !e,
                            onContextMenu: x,
                            ...c
                        }, t)
                    }), !u && o({
                        href: t,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        className: v.downloadLink,
                        children: C.default.Messages.OPEN_IN_BROWSER
                    })]
                })
            }
        },
        170113: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                convertSecondsToClockFormat: function() {
                    return y
                },
                default: function() {
                    return k
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("575482"),
                s = n.n(i),
                r = n("427964"),
                o = n.n(r),
                u = n("28926"),
                d = n("77078"),
                c = n("95032"),
                m = n("829536"),
                f = n("563680"),
                h = n("725962"),
                p = n("672724"),
                E = n("392284"),
                g = n("468482"),
                C = n("316680"),
                v = n("830837"),
                I = n("132755"),
                _ = n("73034"),
                x = n("58608"),
                S = n("719347"),
                N = n("49111"),
                M = n("782340"),
                T = n("636997"),
                A = n("705562");
            let R = "-:--",
                j = {
                    friction: 14,
                    tension: 200
                },
                b = {
                    VIDEO: "VIDEO",
                    AUDIO: "AUDIO"
                },
                L = {
                    width: "100%",
                    height: "100%",
                    backgroundColor: "black"
                };

            function y(e) {
                let t = 0 | e,
                    n = t % 60;
                return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"))
            }
            let O = e => {
                let {
                    current: t,
                    duration: n
                } = e, a = null != t ? y(t) : R, i = null != n ? y(n) : R;
                return a = a.padStart(i.length, "0"), (0, l.jsxs)("div", {
                    className: T.durationTimeWrapper,
                    children: [(0, l.jsx)("span", {
                        className: T.durationTimeDisplay,
                        children: a
                    }), (0, l.jsx)("span", {
                        className: T.durationTimeSeparator,
                        children: "/"
                    }), (0, l.jsx)("span", {
                        className: T.durationTimeDisplay,
                        children: i
                    })]
                })
            };
            class D extends a.Component {
                componentDidMount() {
                    this.state.translateY.setValue(this.props.autoPlay ? 1 : 0)
                }
                componentDidUpdate(e) {
                    let {
                        hide: t,
                        playing: n
                    } = this.props;
                    if (t && !e.hide) {
                        var l;
                        this.animateControls(1, n), null === (l = this.volumeButton) || void 0 === l || l.blur()
                    } else !t && e.hide && this.animateControls(0, n)
                }
                updateProgress(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        {
                            durationBar: n
                        } = this;
                    null != n && n.setGrabber(e, t)
                }
                animateControls(e, t) {
                    let {
                        translateY: n
                    } = this.state;
                    t ? u.default.spring(n, {
                        toValue: e,
                        ...j
                    }).start() : n.setValue(e)
                }
                getAnimatedStyle() {
                    let {
                        translateY: e
                    } = this.state;
                    return {
                        transform: [{
                            translateY: e.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0%", "100%"]
                            })
                        }]
                    }
                }
                renderPlayIcon() {
                    let {
                        playing: e,
                        currentTime: t,
                        duration: n,
                        onPause: a,
                        onPlay: i,
                        disabled: s
                    } = this.props;
                    return e ? (0, l.jsx)(d.Clickable, {
                        className: T.videoButton,
                        onClick: a,
                        tabIndex: s ? -1 : 0,
                        "aria-label": M.default.Messages.PAUSE,
                        children: (0, l.jsx)(v.default, {
                            className: T.controlIcon
                        }, "pause")
                    }) : null != t && t === n ? (0, l.jsx)(d.Clickable, {
                        className: T.videoButton,
                        onClick: i,
                        tabIndex: s ? -1 : 0,
                        "aria-label": M.default.Messages.PLAY_AGAIN,
                        children: (0, l.jsx)(_.default, {
                            className: T.controlIcon
                        }, "replay")
                    }) : (0, l.jsx)(d.Clickable, {
                        className: T.videoButton,
                        onClick: i,
                        tabIndex: s ? -1 : 0,
                        "aria-label": M.default.Messages.PLAY,
                        children: (0, l.jsx)(I.default, {
                            className: T.controlIcon
                        }, "play")
                    })
                }
                render() {
                    let {
                        buffers: e,
                        children: t,
                        currentTime: n,
                        duration: a,
                        muted: i,
                        onDrag: s,
                        onDragEnd: r,
                        onDragStart: o,
                        onToggleMuted: d,
                        onVolumeShow: c,
                        onVolumeHide: m,
                        width: f,
                        volume: h,
                        type: E
                    } = this.props;
                    return (0, l.jsxs)(u.default.div, {
                        className: E === b.VIDEO ? T.videoControls : T.audioControls,
                        onClick: e => e.stopPropagation(),
                        onDoubleClick: e => e.stopPropagation(),
                        style: this.getAnimatedStyle(),
                        children: [this.renderPlayIcon(), "string" == typeof f || f > 250 ? (0, l.jsx)(O, {
                            current: n,
                            duration: a
                        }) : null, (0, l.jsx)(p.default, {
                            buffers: e,
                            value: null != a ? a : 0,
                            onDrag: s,
                            onDragEnd: r,
                            onDragStart: o,
                            type: p.default.Types.DURATION,
                            ref: this.setDurationRef
                        }), (0, l.jsx)("div", {
                            className: A.flex,
                            children: (0, l.jsx)(C.default, {
                                ref: this.setVolumeButtonRef,
                                muted: i,
                                value: h,
                                minValue: 0,
                                maxValue: 1,
                                currentWindow: window,
                                onValueChange: e => s(e, p.default.Types.VOLUME),
                                onToggleMute: d,
                                onVolumeShow: c,
                                onVolumeHide: m,
                                iconClassName: T.controlIcon,
                                sliderWrapperClassName: T.volumeSliderWrapper
                            })
                        }), t]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        translateY: new u.default.Value(0)
                    }, this.setDurationRef = e => {
                        this.durationBar = e
                    }, this.setVolumeButtonRef = e => {
                        this.volumeButton = e
                    }
                }
            }

            function P(e) {
                let {
                    fileName: t,
                    fileSize: n,
                    src: a,
                    disabled: i,
                    mimeType: s,
                    hideDownloadButton: r
                } = e;
                return (0, l.jsxs)("div", {
                    className: T.audioMetadata,
                    children: [(0, l.jsxs)("div", {
                        className: T.metadataContent,
                        children: [i ? t : (0, l.jsx)(h.default, {
                            href: a,
                            className: T.metadataDownload,
                            iconClassName: T.metadataIcon,
                            mimeType: s,
                            fileName: t
                        }), (0, l.jsx)("div", {
                            className: T.metadataSize,
                            children: n
                        })]
                    }), !r && (0, l.jsx)(h.default, {
                        href: a,
                        className: T.metadataDownload,
                        iconClassName: T.metadataIcon,
                        mimeType: s
                    })]
                })
            }
            D.defaultProps = {
                disabled: !1
            };
            class w extends a.Component {
                pop() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.setState({
                        play: e
                    }, this.popAnimation)
                }
                getAnimatedStyle() {
                    let {
                        opacity: e,
                        scale: t
                    } = this.state;
                    return u.default.accelerate({
                        opacity: e.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, .8]
                        }),
                        transform: [{
                            scale: t.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 2]
                            })
                        }]
                    })
                }
                render() {
                    let {
                        play: e
                    } = this.state, t = e ? I.default : v.default;
                    return (0, l.jsx)(u.default.div, {
                        className: T.playPausePop,
                        style: this.getAnimatedStyle(),
                        children: (0, l.jsx)(t, {
                            className: T.playPausePopIcon
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        play: !1,
                        scale: new u.default.Value(0),
                        opacity: new u.default.Value(0)
                    }, this.popAnimation = () => {
                        let {
                            opacity: e,
                            scale: t
                        } = this.state;
                        t.setValue(0), e.setValue(0), u.default.parallel([u.default.sequence([u.default.timing(e, {
                            toValue: 1,
                            duration: 200
                        }), u.default.timing(e, {
                            toValue: 0,
                            duration: 200
                        })]), u.default.spring(t, {
                            toValue: 1.5,
                            ...j,
                            friction: 80
                        })]).start()
                    }
                }
            }
            class U extends a.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    return !e.playable && t.playing ? {
                        playing: !1,
                        hideControls: !1
                    } : null
                }
                componentDidMount() {
                    let {
                        playing: e,
                        muted: t,
                        volume: n
                    } = this.state, {
                        current: l
                    } = this.mediaRef;
                    null != l && (t && (l.muted = t), e && (this.play(!0), this.handleUIUpdate()), l.volume = n)
                }
                componentDidUpdate(e, t) {
                    let {
                        props: {
                            onPause: n,
                            onVolumeChange: l,
                            onMute: a
                        },
                        state: {
                            playing: i,
                            fullscreen: s,
                            muted: r,
                            dragging: o,
                            volume: u
                        }
                    } = this, {
                        current: d
                    } = this.mediaRef, {
                        current: c
                    } = this.playPausePopRef;
                    if (null == d) return;
                    i && !t.playing ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && (null == c || c.pop(i))) : !i && t.playing && (d.pause(), null == c || c.pop(i), null == n || n());
                    let m = (0, f.getFullScreenNode)(d.parentNode, d);
                    s && !t.fullscreen && null != m ? ((0, f.requestFullScreen)(m), m.addEventListener(f.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenExit)) : !s && t.fullscreen && null != m && (m.removeEventListener(f.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenExit), (0, f.exitFullScreen)(m)), o === p.default.Types.DURATION && t.dragging !== p.default.Types.DURATION && i ? d.pause() : o !== p.default.Types.DURATION && t.dragging === p.default.Types.DURATION && i && d.play(), r !== t.muted && (d.muted = r, null == a || a(r)), u !== t.volume && (d.volume = u, null == l || l(u))
                }
                componentWillUnmount() {
                    this._unmounted = !0;
                    let {
                        current: e
                    } = this.mediaRef;
                    if (null == e) return;
                    let t = (0, f.getFullScreenNode)(e.parentNode, e);
                    null != t && (t.removeEventListener(f.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenExit), (0, f.exitFullScreen)(t))
                }
                play() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        {
                            onPlay: t,
                            volume: n,
                            autoMute: l
                        } = this.props,
                        {
                            current: a
                        } = this.mediaRef;
                    if (null != a) {
                        let i = {};
                        if ("function" == typeof n) {
                            let e = n();
                            e !== this.state.volume && (a.volume = e, i.volume = e)
                        }
                        if ("function" == typeof l) {
                            let e = l();
                            e !== this.state.muted && (a.muted = e, i.muted = e)
                        }
                        this.setState(i), a.play(), null == t || t(e, 1e3 * a.currentTime, 1e3 * a.duration)
                    }
                }
                getWidth() {
                    let {
                        width: e
                    } = this.props;
                    return "100%" === e ? e : Math.max(e, U.minWidth)
                }
                getHeight() {
                    let {
                        height: e
                    } = this.props;
                    return "100%" === e ? e : Math.max(e, U.minHeight)
                }
                updateValue(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        {
                            current: n
                        } = this.controlsRef;
                    null != n && n.updateProgress(e, t)
                }
                updateTime(e, t) {
                    let n = 0 | e,
                        l = 0 | t;
                    (this.state.currentTime !== n || this.state.duration !== l) && this.setState({
                        currentTime: n,
                        duration: l
                    })
                }
                updateControlsVisibility() {
                    let {
                        dragging: e,
                        fullscreen: t
                    } = this.state, n = Math.max(0, Date.now() - this._lastMove) > (t ? 1e3 : 3e3);
                    n !== this.state.hideControls && null == e && this.setState({
                        hideControls: n
                    })
                }
                renderVideo() {
                    let {
                        src: e,
                        poster: t,
                        forceExternal: n,
                        onError: a,
                        responsive: i,
                        mediaLayoutType: s
                    } = this.props, {
                        playing: r,
                        fullscreen: o
                    } = this.state, u = this.getWidth(), d = this.getHeight();
                    return n ? (0, l.jsx)(x.default, {
                        className: T.video,
                        controls: !1,
                        height: d,
                        poster: t,
                        width: u,
                        responsive: i && !o,
                        mediaLayoutType: s,
                        playsInline: !0,
                        autoPlay: r
                    }) : (0, l.jsx)(x.default, {
                        className: T.video,
                        controls: !1,
                        playsInline: !0,
                        autoPlay: r,
                        height: d,
                        responsive: i && !o,
                        mediaLayoutType: o ? S.MediaLayoutType.STATIC : s,
                        onClick: this.handleVideoClick,
                        onEnded: this.handleEnded,
                        onError: a,
                        onLoadedMetadata: this.handleLoaded,
                        onProgress: this.handleBuffer,
                        poster: t,
                        preload: this.state.preload,
                        ref: this.mediaRef,
                        width: u,
                        src: e
                    })
                }
                renderAudio() {
                    return (0, l.jsx)("audio", {
                        className: T.audio,
                        controls: !1,
                        onClick: this.handleVideoClick,
                        onEnded: this.handleEnded,
                        onLoadedMetadata: this.handleLoaded,
                        onProgress: this.handleBuffer,
                        preload: this.state.preload,
                        ref: this.mediaRef,
                        children: (0, l.jsx)("source", {
                            src: this.props.src
                        })
                    })
                }
                renderControls() {
                    let {
                        current: e
                    } = this.mediaRef, {
                        props: {
                            type: t,
                            autoPlay: n,
                            playable: a = !0,
                            onVolumeShow: i,
                            onVolumeHide: s
                        },
                        state: {
                            buffers: r,
                            currentTime: o,
                            duration: u,
                            hasClickedPlay: d,
                            hideControls: h,
                            muted: p,
                            playing: g,
                            fullscreen: C,
                            volume: v,
                            dragging: I
                        }
                    } = this, _ = this.getWidth();
                    return d || n || t === b.AUDIO ? (0, l.jsx)(D, {
                        buffers: r,
                        currentTime: o,
                        duration: u,
                        volume: (0, m.amplitudeToPerceptual)(v, 1),
                        hide: t === b.VIDEO && h,
                        muted: p,
                        autoPlay: n,
                        onDrag: this.handleDrag,
                        onDragEnd: this.handleDragEnd,
                        onDragStart: this.handleDragStart,
                        onPause: () => this.setPlay(!1),
                        onPlay: () => this.setPlay(!0),
                        onToggleMuted: this.toggleMuted,
                        onVolumeShow: i,
                        onVolumeHide: s,
                        playing: g,
                        dragging: I,
                        type: t,
                        ref: this.controlsRef,
                        width: C ? window.screen.width : _,
                        disabled: !a,
                        children: t === b.VIDEO ? (0, l.jsx)(c.default, {
                            "aria-label": M.default.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
                            className: T.videoButton,
                            guestWindow: window,
                            onClick: this.toggleFullscreen,
                            node: (0, f.getFullScreenNode)(null == e ? void 0 : e.parentNode, e)
                        }) : null
                    }) : (0, l.jsx)(E.default, {
                        onPlay: this.handleVideoClick,
                        inactive: !a
                    })
                }
                renderMetadata() {
                    let {
                        fileName: e,
                        fileSize: t,
                        src: n,
                        type: a,
                        playable: i,
                        mimeType: s
                    } = this.props;
                    return null == e || null == t ? null : a === b.AUDIO ? (0, l.jsx)(P, {
                        fileName: e,
                        fileSize: t,
                        src: n,
                        disabled: !i,
                        mimeType: s,
                        hideDownloadButton: !0
                    }) : null
                }
                renderPlayPausePop() {
                    return (0, l.jsx)(w, {
                        ref: this.playPausePopRef
                    })
                }
                getMediaStyle() {
                    let {
                        responsive: e,
                        type: t,
                        height: n
                    } = this.props, {
                        fullscreen: l
                    } = this.state, a = this.getWidth();
                    return l ? L : t === b.AUDIO ? {
                        width: void 0,
                        height: "auto"
                    } : e ? void 0 : {
                        width: a,
                        height: n
                    }
                }
                render() {
                    let {
                        height: e,
                        type: t,
                        src: n,
                        forceExternal: a,
                        className: i,
                        renderLinkComponent: r,
                        responsive: o,
                        mediaLayoutType: u,
                        renderOverlayContent: d
                    } = this.props, {
                        fullscreen: c,
                        hideControls: m,
                        playing: f
                    } = this.state, h = T.wrapperPaused;
                    if (t === b.AUDIO ? h = T.wrapperAudio : m ? h = T.wrapperControlsHidden : f && (h = T.wrapperPlaying), a && t === b.VIDEO) {
                        let t = this.getWidth();
                        return (0, l.jsxs)("div", {
                            className: s(h, {
                                [T.wrapperMediaMosaic]: u === S.MediaLayoutType.MOSAIC
                            }),
                            style: o ? void 0 : {
                                width: t,
                                height: e
                            },
                            children: [this.renderMetadata(), this.renderVideo(), (0, l.jsx)("div", {
                                className: T.playCenter,
                                children: (0, l.jsx)(g.default, {
                                    className: T.playButton,
                                    externalURL: n,
                                    renderLinkComponent: r
                                })
                            })]
                        })
                    }
                    return (0, l.jsxs)("div", {
                        className: s(h, T.newMosaicStyle, i, {
                            [T.wrapperMediaMosaic]: u === S.MediaLayoutType.MOSAIC
                        }),
                        "data-fullscreen": c,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        onMouseMove: f ? this.handleMouseMove : void 0,
                        onKeyDown: this.handleKeyDown,
                        style: this.getMediaStyle(),
                        children: [this.renderMetadata(), t === b.AUDIO ? this.renderAudio() : this.renderVideo(), this.renderControls(), t === b.VIDEO ? this.renderPlayPausePop() : null, null != d ? (0, l.jsx)("div", {
                            className: s({
                                [T.overlayContentHidden]: f || c
                            }),
                            children: d()
                        }) : null]
                    })
                }
                constructor(e) {
                    var t;
                    super(e), t = this, this._unmounted = !1, this._lastMove = 0, this.mediaRef = a.createRef(), this.controlsRef = a.createRef(), this.playPausePopRef = a.createRef(), this.handleFullScreenExit = () => {
                        let {
                            current: e
                        } = this.mediaRef;
                        if (null == e) return;
                        let t = (0, f.getFullScreenNode)(e.parentNode, e);
                        (null == t || !(0, f.isFullScreen)(t)) && this.setState({
                            fullscreen: !1
                        })
                    }, this.toggleFullscreen = () => {
                        let e = !this.state.fullscreen;
                        this.setState({
                            fullscreen: e
                        })
                    }, this.setMuted = e => {
                        this.setState({
                            muted: e
                        })
                    }, this.toggleMuted = () => {
                        this.setMuted(!this.state.muted)
                    }, this.setTime = function(e) {
                        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            {
                                current: l
                            } = t.mediaRef;
                        null != l && isFinite(l.duration) && isFinite(l.currentTime) && (l.currentTime = e, t.updateValue(e / l.duration, n), t.updateTime(e, l.duration))
                    }, this.handleUIUpdate = () => {
                        if (!this.state.playing || this._unmounted) return;
                        let {
                            current: e
                        } = this.mediaRef;
                        null != e && (e.duration > 0 && this.updateValue(e.currentTime / e.duration), this.updateTime(e.currentTime, e.duration), this.updateControlsVisibility(), requestAnimationFrame(this.handleUIUpdate))
                    }, this.handleDrag = (e, t) => {
                        let {
                            current: n
                        } = this.mediaRef;
                        if (t === p.default.Types.DURATION) null != n && isFinite(n.duration) && this.setTime(n.duration * e, !1);
                        else if (t === p.default.Types.VOLUME) {
                            let t = (0, m.perceptualToAmplitude)(e, 1);
                            0 === t ? this.setState({
                                muted: !0,
                                volume: t
                            }) : this.state.muted && t > 0 ? this.setState({
                                muted: !1,
                                volume: t
                            }) : this.setState({
                                volume: t
                            })
                        }
                    }, this.handleLoaded = () => {
                        let {
                            current: e
                        } = this.mediaRef;
                        null != e && (this.updateTime(e.currentTime, e.duration), this.setState({
                            hasLoadedMetadata: !0,
                            currentTime: e.currentTime,
                            duration: e.duration
                        }))
                    }, this.handleDurationChange = () => {
                        let {
                            current: e
                        } = this.mediaRef;
                        null != e && (this.updateTime(e.currentTime, e.duration), this.setState({
                            duration: e.duration
                        }))
                    }, this.handleBuffer = o.debounce(() => {
                        let {
                            current: e
                        } = this.mediaRef;
                        if (null == e) {
                            this.setState({
                                buffers: []
                            });
                            return
                        }
                        this.setState({
                            buffers: function(e) {
                                let t = [],
                                    {
                                        duration: n
                                    } = e;
                                for (let l = 0; l < e.buffered.length; l++) {
                                    let a = e.buffered.start(l),
                                        i = e.buffered.end(l);
                                    if (i - a < 1) continue;
                                    let s = (i - a) / n,
                                        r = a / n;
                                    t.push([r, s])
                                }
                                return t
                            }(e)
                        })
                    }, 400), this.handleEnded = e => {
                        let {
                            onEnded: t
                        } = this.props;
                        this.setState({
                            playing: !1,
                            hideControls: !1
                        }), null != t && t(e)
                    }, this.handleMouseMove = () => {
                        this._lastMove = Date.now()
                    }, this.handleMouseLeave = () => {
                        this.state.playing && (this._lastMove = 0), this.setState({
                            hovering: !1
                        })
                    }, this.handleMouseEnter = () => {
                        "none" === this.state.preload && this.setState({
                            preload: "metadata"
                        }), this.setState({
                            hovering: !0
                        })
                    }, this.handleVideoClick = e => {
                        let {
                            state: {
                                hasClickedPlay: t,
                                playing: n
                            },
                            props: {
                                onClick: l,
                                autoPlay: a,
                                autoMute: i
                            }
                        } = this;
                        if (null != l) {
                            l(e);
                            return
                        }
                        e.stopPropagation(), a && !t && n && i ? this.setState({
                            muted: !1,
                            hasClickedPlay: !0
                        }) : this.setPlay(!this.state.playing)
                    }, this.setPlay = e => {
                        let {
                            props: {
                                autoMute: t
                            },
                            state: {
                                hasClickedPlay: n,
                                muted: l
                            }
                        } = this;
                        e !== this.state.playing && (e ? this.setState({
                            playing: e,
                            hasClickedPlay: !0,
                            muted: (!!n || !t) && l
                        }) : this.setState({
                            playing: !1,
                            hideControls: !1
                        }))
                    }, this.handleDragStart = e => {
                        this.setState({
                            dragging: e
                        })
                    }, this.handleDragEnd = () => {
                        this.setState({
                            dragging: null
                        }), this._lastMove = Date.now()
                    }, this.handleKeyDown = e => {
                        let {
                            current: t
                        } = this.mediaRef;
                        if (e.which === N.KeyboardKeys.SPACE) e.preventDefault(), this.setPlay(!this.state.playing);
                        else if (e.which >= N.KeyboardKeys.DIGIT_0 && e.which <= N.KeyboardKeys.DIGIT_9 && null != t) {
                            e.preventDefault();
                            let n = (e.which - N.KeyboardKeys.DIGIT_0) / 10;
                            t.currentTime = t.duration * n, this.setPlay(!0)
                        }
                    };
                    let {
                        autoPlay: n,
                        autoMute: l,
                        volume: i,
                        playable: s
                    } = this.props, r = "function" == typeof i ? i() : i, u = "function" == typeof l ? l() : l;
                    this.state = {
                        buffers: [],
                        currentTime: null,
                        dragging: null,
                        duration: null,
                        fullscreen: !1,
                        hasClickedPlay: !1,
                        hasLoadedMetadata: !1,
                        hideControls: !s,
                        muted: u,
                        volume: r,
                        playing: n,
                        preload: "none",
                        width: U.minWidth,
                        height: U.minHeight,
                        hovering: !1
                    }
                }
            }
            U.Types = b, U.defaultProps = {
                width: 400,
                height: 300,
                forceExternal: !1,
                playable: !0,
                downloadable: !0,
                autoPlay: !1,
                autoMute: !1,
                volume: 1
            }, U.minWidth = 150, U.minHeight = 110;
            var k = U
        },
        666897: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("575482"),
                s = n.n(i),
                r = n("253824"),
                o = n("77078"),
                u = n("873218"),
                d = n("811657"),
                c = e => {
                    let {
                        children: t,
                        className: n,
                        color: i,
                        iconType: c,
                        onMouseEnter: m,
                        onMouseLeave: f,
                        ...h
                    } = e, [p, E] = a.useState(!1), g = a.useCallback(e => {
                        E(!0), null == m || m(e)
                    }, [E, m]), C = a.useCallback(e => {
                        E(!1), null == f || f(e)
                    }, [E, f]), v = {};
                    return null != i && (v = {
                        color: (0, r.int2hex)(i),
                        backgroundColor: p ? (0, r.int2rgba)(i, .3) : (0, r.int2rgba)(i, .1)
                    }), (0, l.jsx)(o.Clickable, {
                        ...h,
                        tag: "span",
                        className: s(n, {
                            [d.wrapper]: !0,
                            interactive: h.onClick
                        }),
                        onMouseEnter: g,
                        onMouseLeave: C,
                        style: v,
                        tabIndex: null != h.onClick ? 0 : -1,
                        children: null != c ? (0, l.jsx)(u.default, {
                            iconType: c,
                            children: t
                        }) : t
                    })
                }
        },
        505684: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ObscuredDisplayContext: function() {
                    return x
                },
                default: function() {
                    return N
                }
            });
            var l, a, i = n("920040"),
                s = n("773670"),
                r = n("575482"),
                o = n.n(r),
                u = n("912557"),
                d = n("681187"),
                c = n("77078"),
                m = n("605160"),
                f = n("449008"),
                h = n("462579"),
                p = n("867544"),
                E = n("782340"),
                g = n("379742");
            (l = a || (a = {})).TEXT = "text", l.ATTACHMENT = "attachment", l.EMBED = "embed";
            let C = e => {
                    let {
                        className: t
                    } = e;
                    return (0, i.jsx)("div", {
                        className: o(g.spoilerWarning, t),
                        children: E.default.Messages.SPOILER
                    })
                },
                v = e => {
                    let {
                        className: t,
                        isSingleMosaicItem: n,
                        obscureOnly: l
                    } = e;
                    return (0, i.jsx)("div", {
                        className: o(g.explicitContentWarning, t),
                        children: l ? null : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(d.ImageWarningIcon, {
                                width: 32,
                                height: 32,
                                color: u.default.colors.TEXT_NORMAL
                            }), n && (0, i.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                className: g.explicitContentWarningText,
                                children: E.default.Messages.EXPLICIT_CONTENT_WARNING
                            })]
                        })
                    })
                },
                I = e => {
                    let {
                        reason: t = m.ObscureReason.SPOILER,
                        className: n,
                        isSingleMosaicItem: l = !1
                    } = e;
                    switch (t) {
                        case m.ObscureReason.SPOILER:
                            return (0, i.jsx)(C, {
                                className: n
                            });
                        case m.ObscureReason.EXPLICIT_CONTENT:
                            return (0, i.jsx)(v, {
                                isSingleMosaicItem: l,
                                className: n
                            });
                        case m.ObscureReason.POTENTIAL_EXPLICIT_CONTENT:
                            return (0, i.jsx)(v, {
                                isSingleMosaicItem: l,
                                className: n,
                                obscureOnly: !0
                            });
                        default:
                            return (0, f.assertNever)(t)
                    }
                },
                _ = e => {
                    let {
                        obscureReason: t,
                        isVisible: n,
                        handleToggleObscurity: l,
                        obscurityControlClassName: a
                    } = e;
                    return t !== m.ObscureReason.EXPLICIT_CONTENT ? null : (0, i.jsx)("div", {
                        className: o(g.obscureButtonContainer, a),
                        children: (0, i.jsx)(c.Clickable, {
                            className: o(g.obscureHoverButton),
                            onClick: l,
                            "aria-label": E.default.Messages.EXPLICIT_CONTENT_BUTTON_TOOLTIP,
                            children: n ? (0, i.jsx)(h.default, {
                                width: 24,
                                height: 24
                            }) : (0, i.jsx)(p.default, {
                                width: 24,
                                height: 24
                            })
                        })
                    })
                },
                x = s.createContext(!1);
            class S extends s.PureComponent {
                renderWithTooltip(e) {
                    return (0, i.jsx)(c.Tooltip, {
                        position: "left",
                        text: this.state.visible ? null : this.tooltipText,
                        children: t => {
                            let {
                                onMouseEnter: n,
                                onMouseLeave: l
                            } = t;
                            return s.cloneElement(s.Children.only(e), {
                                onMouseEnter: n,
                                onMouseLeave: l
                            })
                        }
                    })
                }
                renderObscuredAttachment() {
                    let {
                        children: e,
                        inline: t,
                        className: n,
                        containerStyles: l,
                        obscured: a = !0,
                        reason: s = m.ObscureReason.SPOILER,
                        isSingleMosaicItem: r = !1,
                        obscurityControlClassName: u
                    } = this.props, {
                        visible: d
                    } = this.state, f = (0, i.jsx)(x.Consumer, {
                        children: f => {
                            let h = f || d || !a;
                            return [m.ObscureReason.EXPLICIT_CONTENT, m.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(s) && !t ? (0, i.jsxs)("div", {
                                "aria-label": h ? void 0 : this.ariaLabel,
                                "aria-expanded": h,
                                style: l,
                                className: o(n, g.spoilerContent, g.spoilerContainer, {
                                    [g.hidden]: !h
                                }),
                                role: h ? "presentation" : "button",
                                tabIndex: h ? -1 : 0,
                                children: [h || t ? null : (0, i.jsx)(I, {
                                    reason: s,
                                    isSingleMosaicItem: r
                                }), (0, i.jsx)("div", {
                                    "aria-hidden": !h,
                                    className: g.spoilerInnerContainer,
                                    children: e(!h)
                                }), (0, i.jsx)(_, {
                                    obscureReason: s,
                                    isVisible: d,
                                    handleToggleObscurity: this.handleToggleObscurity,
                                    obscurityControlClassName: u
                                })]
                            }) : (0, i.jsxs)(c.Clickable, {
                                onClick: h ? void 0 : this.removeObscurity,
                                "aria-label": h ? void 0 : this.ariaLabel,
                                "aria-expanded": h,
                                style: l,
                                className: o(n, g.spoilerContent, g.spoilerContainer, {
                                    [g.hidden]: !h,
                                    [g.hiddenSpoiler]: !h
                                }),
                                role: h ? "presentation" : "button",
                                tabIndex: h ? -1 : 0,
                                children: [h || t ? null : (0, i.jsx)(I, {
                                    reason: s,
                                    isSingleMosaicItem: r
                                }), (0, i.jsx)("div", {
                                    "aria-hidden": !h,
                                    className: g.spoilerInnerContainer,
                                    children: e(!h)
                                })]
                            })
                        }
                    });
                    return t ? this.renderWithTooltip(f) : f
                }
                renderObscuredEmbed() {
                    let {
                        children: e,
                        className: t,
                        containerStyles: n,
                        isSingleMosaicItem: l,
                        obscurityControlClassName: a,
                        reason: s = m.ObscureReason.SPOILER
                    } = this.props, {
                        visible: r
                    } = this.state;
                    return (0, i.jsx)(x.Consumer, {
                        children: u => {
                            let d = u || r;
                            return [m.ObscureReason.EXPLICIT_CONTENT, m.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(s) ? (0, i.jsxs)("div", {
                                "aria-label": r ? void 0 : this.ariaLabel,
                                "aria-expanded": d,
                                style: n,
                                className: o(t, g.spoilerContent, g.spoilerContainer, {
                                    [g.hidden]: !d
                                }),
                                role: d ? "presentation" : "button",
                                tabIndex: d ? -1 : 0,
                                children: [d ? null : (0, i.jsx)(I, {
                                    reason: s,
                                    isSingleMosaicItem: l
                                }), (0, i.jsx)("div", {
                                    "aria-hidden": !d,
                                    className: g.spoilerInnerContainer,
                                    children: e(!d)
                                }), (0, i.jsx)(_, {
                                    obscureReason: s,
                                    isVisible: r,
                                    handleToggleObscurity: this.handleToggleObscurity,
                                    obscurityControlClassName: a
                                })]
                            }) : (0, i.jsxs)(c.Clickable, {
                                "aria-label": this.ariaLabel,
                                "aria-expanded": d,
                                className: o(t, g.spoilerContent, g.spoilerContainer, {
                                    [g.hidden]: !d
                                }),
                                onClick: d ? void 0 : this.removeObscurity,
                                style: n,
                                role: d ? "presentation" : "button",
                                tabIndex: d ? -1 : 0,
                                children: [d ? null : (0, i.jsx)(I, {
                                    reason: s,
                                    className: g.embed
                                }), (0, i.jsx)("div", {
                                    "aria-hidden": !d,
                                    children: e(!d)
                                })]
                            })
                        }
                    })
                }
                renderObscuredText() {
                    let {
                        children: e,
                        renderTextElement: t,
                        className: n
                    } = this.props, {
                        visible: l
                    } = this.state, a = (0, i.jsx)(x.Consumer, {
                        children: a => {
                            let r = a || l,
                                u = s.Children.toArray(e(r)),
                                d = s.Children.map(u, e => {
                                    let n = s.isValidElement(e);
                                    return n && null != t ? t(e, r) : e
                                });
                            return (0, i.jsx)(c.Clickable, {
                                tag: "span",
                                onClick: r ? void 0 : this.removeObscurity,
                                "aria-label": r ? void 0 : this.ariaLabel,
                                "aria-expanded": r,
                                tabIndex: r ? -1 : 0,
                                role: r ? "presentation" : "button",
                                className: o(n, g.spoilerContent, g.spoilerMarkdownContent, {
                                    [g.hidden]: !r
                                }),
                                children: (0, i.jsx)("span", {
                                    className: g.obscuredTextContent,
                                    children: (0, i.jsx)("span", {
                                        "aria-hidden": !r,
                                        className: g.obscuredTextContentInner,
                                        children: d
                                    })
                                })
                            })
                        }
                    });
                    return this.renderWithTooltip(a)
                }
                render() {
                    let {
                        type: e = a.TEXT
                    } = this.props;
                    switch (e) {
                        case a.TEXT:
                            return this.renderObscuredText();
                        case a.ATTACHMENT:
                            return this.renderObscuredAttachment();
                        case a.EMBED:
                            return this.renderObscuredEmbed();
                        default:
                            return (0, f.assertNever)(e)
                    }
                }
                get ariaLabel() {
                    let {
                        reason: e = m.ObscureReason.SPOILER
                    } = this.props;
                    switch (e) {
                        case m.ObscureReason.SPOILER:
                            return E.default.Messages.SPOILER;
                        case m.ObscureReason.EXPLICIT_CONTENT:
                            return E.default.Messages.EXPLICIT_CONTENT_WARNING_TOOLTIP;
                        case m.ObscureReason.POTENTIAL_EXPLICIT_CONTENT:
                            return E.default.Messages.EXPLICIT_CONTENT_WARNING_PENDING;
                        default:
                            return (0, f.assertNever)(e)
                    }
                }
                get tooltipText() {
                    let {
                        reason: e = m.ObscureReason.SPOILER
                    } = this.props;
                    switch (e) {
                        case m.ObscureReason.SPOILER:
                            return E.default.Messages.SPOILER;
                        case m.ObscureReason.EXPLICIT_CONTENT:
                            return E.default.Messages.EXPLICIT_CONTENT_WARNING_TOOLTIP;
                        case m.ObscureReason.POTENTIAL_EXPLICIT_CONTENT:
                            return E.default.Messages.EXPLICIT_CONTENT_WARNING_PENDING;
                        default:
                            return (0, f.assertNever)(e)
                    }
                }
                constructor(...e) {
                    super(...e), this.state = {
                        visible: !1
                    }, this.removeObscurity = e => {
                        let {
                            visible: t
                        } = this.state;
                        if (t) return;
                        !t && (e.preventDefault(), e.stopPropagation()), this.setState({
                            visible: !0
                        });
                        let {
                            onReveal: n
                        } = this.props;
                        null != n && n()
                    }, this.handleToggleObscurity = e => {
                        e.stopPropagation(), e.nativeEvent.stopPropagation();
                        let {
                            onToggleObscurity: t
                        } = this.props;
                        null != t && t(e), this.setState(e => ({
                            visible: !e.visible
                        }))
                    }, this.obscure = () => {
                        let {
                            visible: e
                        } = this.state;
                        e && this.setState({
                            visible: !1
                        })
                    }
                }
            }
            S.Types = a, S.Reasons = m.ObscureReason;
            var N = S
        },
        98292: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("575482"),
                s = n.n(i),
                r = n("77078"),
                o = n("285542");

            function u(e) {
                let {
                    children: t,
                    "aria-label": n,
                    className: i,
                    position: u
                } = e, d = a.useRef(null);
                return (0, l.jsx)(r.Tooltip, {
                    position: null != u ? u : "top",
                    delay: 500,
                    text: t,
                    "aria-label": null != n ? n : "string" == typeof t && t,
                    children: n => {
                        let {
                            onMouseEnter: a,
                            onMouseLeave: r
                        } = n;
                        return (0, l.jsx)("div", {
                            className: s(i, o.overflow),
                            ref: d,
                            "aria-hidden": e["aria-hidden"],
                            onMouseEnter: () => {
                                let {
                                    current: e
                                } = d;
                                if (null != e && e.offsetWidth < e.scrollWidth) null == a || a()
                            },
                            onMouseLeave: r,
                            children: t
                        })
                    }
                })
            }
        },
        839952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("575482"),
                s = n.n(i),
                r = n("694265"),
                o = n("77078"),
                u = n("903962"),
                d = n("993105"),
                c = n("410889"),
                m = n("461380"),
                f = n("195812"),
                h = n("967685"),
                p = n("204591"),
                E = n("782340"),
                g = n("974042"),
                C = n("470039");

            function v(e) {
                let {
                    text: t,
                    language: a
                } = e, i = () => (0, l.jsx)("pre", {
                    children: (0, l.jsx)("code", {
                        className: s(C.scrollbarGhostHairline, g.codeView, "hljs"),
                        children: t
                    })
                });
                return (0, l.jsx)(r.LazyLibrary, {
                    createPromise: () => n.el("86256").then(n.bind(n, "86256")),
                    webpackId: "86256",
                    render: e => {
                        if (!e.hasLanguage(a)) return i();
                        let n = e.highlight(a, t, !0);
                        return null == n ? i() : (0, l.jsx)("pre", {
                            children: (0, l.jsx)("code", {
                                className: s(C.scrollbarGhostHairline, g.codeView, "hljs", n.language),
                                dangerouslySetInnerHTML: {
                                    __html: n.value
                                }
                            })
                        })
                    },
                    renderFallback: () => i()
                })
            }

            function I(e) {
                let {
                    expanded: t,
                    setExpanded: n,
                    isWholeFile: a,
                    numLines: i
                } = e, s = (a ? E.default.Messages.PREVIEW_NUM_LINES : E.default.Messages.PREVIEW_NUM_LINES_AT_LEAST).format({
                    lines: i
                });
                return (0, l.jsx)(o.Tooltip, {
                    text: "".concat(t ? E.default.Messages.COLLAPSE : E.default.Messages.EXPAND, " (").concat(s, ")"),
                    children: e => (0, l.jsxs)(o.Clickable, {
                        ...e,
                        className: g.toggleExpandSection,
                        onClick: () => {
                            n(!t)
                        },
                        children: [(0, l.jsx)(m.default, {
                            direction: t ? m.default.Directions.UP : m.default.Directions.DOWN
                        }), t ? E.default.Messages.COLLAPSE : E.default.Messages.EXPAND]
                    })
                })
            }

            function _(e) {
                let {
                    attachment: t
                } = e, n = "".concat(t.filename, " (").concat((0, d.formatKbSize)(t.size), ")");
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(o.Tooltip, {
                        text: n,
                        children: e => (0, l.jsx)("span", {
                            ...e,
                            className: s(g.downloadSection, g.attachmentName),
                            children: t.filename
                        })
                    }), (0, l.jsx)(o.Tooltip, {
                        text: n,
                        children: e => (0, l.jsx)("span", {
                            ...e,
                            className: s(g.downloadSection, g.formattedSize),
                            children: (0, d.formatKbSize)(t.size)
                        })
                    }), (0, l.jsx)(o.Tooltip, {
                        text: "".concat(E.default.Messages.DOWNLOAD, " ").concat(n),
                        children: e => (0, l.jsx)(o.Anchor, {
                            ...e,
                            className: g.downloadSection,
                            href: t.url,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: (0, l.jsx)(f.default, {
                                className: g.downloadButton,
                                width: 24,
                                height: 24
                            })
                        })
                    })]
                })
            }

            function x(e) {
                let {
                    language: t,
                    setLanguage: n
                } = e;
                return (0, l.jsx)(o.Popout, {
                    position: "left",
                    renderPopout: e => {
                        let {
                            closePopout: a
                        } = e;
                        return (0, l.jsx)(o.Dialog, {
                            "aria-label": E.default.Messages.PREVIEW_CHANGE_LANGUAGE,
                            children: (0, l.jsx)(o.Combobox, {
                                className: g.languageSelector,
                                multiSelect: !1,
                                placeholder: E.default.Messages.PREVIEW_SEARCH_LANGUAGE_PLACEHOLDER,
                                value: new Set([t]),
                                autoFocus: !0,
                                onChange: e => {
                                    n(e), a()
                                },
                                children: e => Array.from(u.PLAINTEXT_FILE_EXTENSIONS).filter(t => t.toLowerCase().includes(e.toLowerCase())).map(e => (0, l.jsx)(o.ComboboxItem, {
                                    value: e,
                                    children: (0, l.jsx)(o.ComboboxItem.Label, {
                                        children: e
                                    })
                                }, e))
                            })
                        })
                    },
                    children: e => (0, l.jsx)(o.Tooltip, {
                        text: E.default.Messages.PREVIEW_CHANGE_LANGUAGE,
                        children: t => (0, l.jsx)(p.default, {
                            width: 24,
                            height: 24,
                            ...t,
                            ...e,
                            className: g.codeIcon
                        })
                    })
                })
            }

            function S(e) {
                return (0, l.jsx)(o.Tooltip, {
                    text: E.default.Messages.PREVIEW_WHOLE_FILE,
                    children: t => (0, l.jsx)(o.Clickable, {
                        ...t,
                        className: g.openFullPreviewSection,
                        onClick: () => {
                            (0, o.openModal)(t => (0, l.jsx)(M, {
                                ...e,
                                ...t
                            }))
                        },
                        children: (0, l.jsx)(h.default, {})
                    })
                })
            }

            function N(e) {
                var t;
                let {
                    attachment: n,
                    fileContents: a,
                    expanded: i,
                    setExpanded: r,
                    language: u,
                    setLanguage: c,
                    bytesLeft: m,
                    className: f
                } = e, h = null == a ? void 0 : a.split("\n"), p = null !== (t = null == h ? void 0 : h.length) && void 0 !== t ? t : 0, C = i ? 100 : 6, N = 0 === m, M = "";
                N && i && p > C ? M = "\n..." : !N && (M = "..."), "" !== M && (N ? M += " " + E.default.Messages.PREVIEW_LINES_LEFT.format({
                    lines: p - C
                }) : M += " " + E.default.Messages.PREVIEW_BYTES_LEFT.format({
                    formattedBytes: (0, d.formatKbSize)(m)
                }));
                let T = (null == h ? void 0 : h.slice(0, C).join("\n")) + M,
                    A = i || C < p;
                return (0, l.jsxs)("div", {
                    className: s(f, g.container),
                    children: [(0, l.jsx)("div", {
                        className: s(g.textContainer, {
                            [g.expanded]: i
                        }),
                        children: null == a ? (0, l.jsx)(o.Spinner, {
                            className: g.spinner
                        }) : (0, l.jsx)(v, {
                            text: T,
                            language: u
                        })
                    }), (0, l.jsxs)(o.Text, {
                        color: "header-secondary",
                        className: g.footer,
                        variant: "text-sm/normal",
                        children: [A ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(I, {
                                expanded: i,
                                setExpanded: r,
                                isWholeFile: N,
                                numLines: p
                            }), (0, l.jsx)(S, {
                                language: u,
                                fileContents: a,
                                bytesLeft: m,
                                attachment: n
                            })]
                        }) : null, (0, l.jsx)("div", {
                            className: g.footerGap
                        }), (0, l.jsx)(_, {
                            attachment: n
                        }), (0, l.jsx)(x, {
                            language: u,
                            setLanguage: c
                        })]
                    })]
                })
            }

            function M(e) {
                let {
                    transitionState: t,
                    language: n,
                    fileContents: i,
                    bytesLeft: s,
                    attachment: r
                } = e, [u, c] = a.useState(n), m = null != i ? i : "";
                return 0 !== s && (m += "... ".concat(E.default.Messages.PREVIEW_BYTES_LEFT.format({
                    formattedBytes: (0, d.formatKbSize)(s)
                }))), (0, l.jsx)(o.ModalRoot, {
                    transitionState: t,
                    "aria-label": E.default.Messages.PREVIEW_MODAL_LABEL,
                    size: o.ModalSize.LARGE,
                    className: g.modalRoot,
                    children: (0, l.jsxs)("div", {
                        className: g.modalContent,
                        children: [(0, l.jsx)(o.ScrollerThin, {
                            className: g.modalTextContainer,
                            children: null == i ? (0, l.jsx)(o.Spinner, {
                                className: g.spinner
                            }) : (0, l.jsx)(v, {
                                text: m,
                                language: u
                            })
                        }), (0, l.jsxs)(o.Text, {
                            color: "header-secondary",
                            className: g.footer,
                            variant: "text-sm/normal",
                            children: [(0, l.jsx)("div", {
                                className: g.footerGap
                            }), (0, l.jsx)(_, {
                                attachment: r
                            }), (0, l.jsx)(x, {
                                language: u,
                                setLanguage: c
                            })]
                        })]
                    })
                })
            }
            var T = a.memo(function(e) {
                let {
                    attachment: t,
                    className: n,
                    onClick: i,
                    onContextMenu: r
                } = e, [o, u] = a.useState(!1), [d, m] = a.useState(t.filename.split(".").slice(-1)[0]), {
                    fileContents: f,
                    bytesLeft: h,
                    hadError: p
                } = function(e, t) {
                    let [n, l] = a.useState(!1), [i, s] = a.useState(null), [r, o] = a.useState(1);
                    return a.useEffect(() => {
                        (async function n() {
                            try {
                                var n, a;
                                let i = await fetch(e, {
                                        headers: {
                                            Range: "bytes=0-".concat(5e4),
                                            Accept: "text/plain"
                                        }
                                    }),
                                    r = function(e) {
                                        var t;
                                        let n = "utf-8",
                                            l = null !== (t = null == e ? void 0 : e.split("charset=").slice(-1)[0]) && void 0 !== t ? t : n;
                                        try {
                                            return new TextDecoder(l)
                                        } catch (t) {
                                            if ((null == e ? void 0 : e.startsWith("text")) || l.toLowerCase().includes("utf")) return new TextDecoder(n);
                                            throw t
                                        }
                                    }(t),
                                    u = r.decode(await i.arrayBuffer()),
                                    d = null !== (n = i.headers.get("content-range")) && void 0 !== n ? n : "0",
                                    c = null !== (a = i.headers.get("content-length")) && void 0 !== a ? a : "1",
                                    m = parseInt(d.split("/")[1]),
                                    f = m - parseInt(c);
                                s(0 === f ? u : u.slice(0, -1)), o(f), l(!1)
                            } catch (e) {
                                o(0), l(!0)
                            }
                        })()
                    }, [e, t]), {
                        fileContents: i,
                        bytesLeft: r,
                        hadError: n
                    }
                }(t.url, t.content_type);
                return p ? (0, l.jsx)(c.default, {
                    url: t.url,
                    filename: t.filename,
                    size: t.size,
                    onClick: i,
                    onContextMenu: r,
                    className: n
                }) : (0, l.jsx)(N, {
                    attachment: t,
                    fileContents: f,
                    bytesLeft: h,
                    expanded: o,
                    setExpanded: u,
                    language: d,
                    setLanguage: m,
                    className: s(g.newMosaicStyle, n)
                })
            }, (e, t) => e.attachment.id === t.attachment.id && e.className === t.className)
        },
        392284: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("575482"),
                s = n.n(i),
                r = n("77078"),
                o = n("62843"),
                u = n("132755"),
                d = n("782340"),
                c = n("262733");

            function m(e) {
                let {
                    onPlay: t,
                    className: n,
                    inactive: i
                } = e, m = a.useRef(null), f = (0, l.jsx)("div", {
                    className: c.iconWrapper,
                    ref: m,
                    children: (0, l.jsx)(u.default, {
                        className: s(c.icon)
                    })
                });
                return (0, l.jsx)(o.MessagesInteractionContext.Consumer, {
                    children: e => i || null == t ? (0, l.jsx)("div", {
                        className: c.cover,
                        children: f
                    }) : (0, l.jsx)(r.Clickable, {
                        className: s(n, c.cover, {
                            [c.active]: !e.disableInteractions
                        }),
                        onClick: t,
                        tabIndex: 0,
                        "aria-label": d.default.Messages.PLAY,
                        focusProps: {
                            ringTarget: m
                        },
                        children: f
                    })
                })
            }
        },
        468482: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("575482"),
                i = n.n(a),
                s = n("77078"),
                r = n("62843"),
                o = n("648739"),
                u = n("132755"),
                d = n("782340"),
                c = n("241151"),
                m = e => {
                    let {
                        onPlay: t,
                        externalURL: n,
                        className: a,
                        renderLinkComponent: m,
                        inactive: f,
                        messageId: h,
                        channelId: p
                    } = e;
                    return (0, l.jsx)(r.MessagesInteractionContext.Consumer, {
                        children: e => (0, l.jsxs)("div", {
                            className: i(a, c.wrapper, {
                                [c.disableInteractions]: e.disableInteractions
                            }),
                            children: [f && null == t ? (0, l.jsx)("div", {
                                className: c.iconWrapper,
                                children: (0, l.jsx)(u.default, {
                                    className: c.iconPlay
                                })
                            }) : null, null != t ? (0, l.jsx)(s.Clickable, {
                                onClick: t,
                                className: i(c.iconWrapperActive),
                                tabIndex: f ? -1 : 0,
                                "aria-label": d.default.Messages.PLAY,
                                children: (0, l.jsx)(u.default, {
                                    className: c.iconPlay
                                })
                            }) : null, null != n ? m({
                                href: n,
                                target: "_blank",
                                rel: "noreferrer noopener",
                                className: c.iconWrapperActive,
                                children: (0, l.jsx)(o.default, {
                                    "aria-label": d.default.Messages.OPEN_LINK,
                                    className: null != t ? c.iconExternalMargins : c.iconExternal
                                }),
                                messageId: h,
                                channelId: p
                            }) : null]
                        })
                    })
                }
        },
        316680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("575482"),
                s = n.n(i),
                r = n("77078"),
                o = n("672724"),
                u = n("368121"),
                d = n("570511"),
                c = n("974261"),
                m = n("782340"),
                f = n("899221");
            class h extends a.PureComponent {
                componentDidMount() {
                    this.updateMediaBar()
                }
                componentDidUpdate(e) {
                    (this.props.value !== e.value || this.props.muted !== e.muted) && this.updateMediaBar()
                }
                updateMediaBar() {
                    let {
                        muted: e,
                        value: t,
                        maxValue: n
                    } = this.props, l = this._mediaBar.current;
                    null != l && (e ? l.setGrabber(0) : l.setGrabber(t / n))
                }
                render() {
                    let {
                        iconClassName: e,
                        className: t,
                        sliderWrapperClassName: n,
                        sliderClassName: a,
                        currentWindow: i,
                        muted: h,
                        minValue: p,
                        maxValue: E,
                        value: g,
                        onVolumeShow: C,
                        onVolumeHide: v
                    } = this.props, {
                        hovered: I,
                        focused: _,
                        dragging: x
                    } = this.state, S = u.default;
                    return h || g === p ? S = d.default : g < E / 2 && (S = c.default), (0, l.jsxs)("div", {
                        className: s(t, f.container),
                        onMouseEnter: () => {
                            clearTimeout(this._hoverTimeout), this.setState({
                                hovered: !0
                            }), null == C || C()
                        },
                        onMouseLeave: () => {
                            clearTimeout(this._hoverTimeout), this._hoverTimeout = setTimeout(() => {
                                this.setState({
                                    hovered: !1
                                }), null == v || v()
                            }, 150)
                        },
                        onFocus: () => this.setState({
                            focused: !0
                        }),
                        onBlur: () => this.setState({
                            focused: !1
                        }),
                        onKeyDown: this.handleKeyDown,
                        children: [(0, l.jsx)("div", {
                            className: s(f.volumeButtonSlider, n, {
                                [f.sliderVisible]: I || _ || x
                            }),
                            onMouseEnter: () => {
                                clearTimeout(this._hoverTimeout), this.setState({
                                    hovered: !0
                                })
                            },
                            onMouseLeave: () => {
                                clearTimeout(this._hoverTimeout), this._hoverTimeout = setTimeout(() => this.setState({
                                    hovered: !1
                                }), 150)
                            },
                            children: (0, l.jsx)(o.default, {
                                sliderClassName: a,
                                type: o.default.Types.VOLUME,
                                value: g / E,
                                onDrag: this.handleValueChange,
                                onDragStart: this.handleDragStart,
                                onDragEnd: this.handleDragEnd,
                                currentWindow: i,
                                ref: this._mediaBar
                            })
                        }), (0, l.jsx)(r.Button, {
                            className: f.volumeButton,
                            "aria-label": m.default.Messages.CONTROL_VOLUME,
                            size: r.Button.Sizes.NONE,
                            look: r.Button.Looks.BLANK,
                            onClick: this.handleToggleMute,
                            children: (0, l.jsx)(S, {
                                className: e
                            })
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this._mediaBar = a.createRef(), this.state = {
                        hovered: !1,
                        focused: !1,
                        dragging: !1
                    }, this.handleValueChange = e => {
                        let {
                            maxValue: t,
                            onValueChange: n
                        } = this.props;
                        null == n || n(e * t)
                    }, this.handleToggleMute = () => {
                        let {
                            onToggleMute: e
                        } = this.props;
                        null == e || e()
                    }, this.handleKeyDown = e => {
                        let {
                            minValue: t,
                            value: n,
                            maxValue: l,
                            onValueChange: a
                        } = this.props, i = .05 * (l - t);
                        switch (e.key) {
                            case "ArrowUp":
                                e.stopPropagation(), e.preventDefault(), null == a || a(Math.min(l, n + i));
                                break;
                            case "ArrowDown":
                                e.stopPropagation(), e.preventDefault(), null == a || a(Math.max(t, n - i))
                        }
                    }, this.handleDragStart = () => {
                        this.setState({
                            dragging: !0
                        })
                    }, this.handleDragEnd = () => {
                        this.setState({
                            dragging: !1
                        })
                    }, this.blur = () => {
                        this.setState({
                            focused: !1
                        })
                    }
                }
            }
            h.defaultProps = {
                minValue: 0,
                maxValue: 100,
                handleSize: 16
            };
            var p = h
        },
        413709: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("821455"),
                s = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: i,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsxs)("g", {
                            className: i,
                            fill: a,
                            children: [(0, l.jsx)("path", {
                                d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1z"
                            }), (0, l.jsx)("path", {
                                d: "M15 5H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"
                            })]
                        })
                    })
                }, i.CopyIcon)
        },
        195812: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("691096"),
                s = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: i,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z"
                        })
                    })
                }, i.DownloadIcon)
        },
        256170: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("575482"),
                i = n.n(a),
                s = n("469563"),
                r = n("384737"),
                o = n("431121"),
                u = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        className: s,
                        foreground: r,
                        open: u = !1
                    } = e;
                    return (0, l.jsx)("svg", {
                        className: i(o.arrow, s, {
                            [o.open]: u
                        }),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: r,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
                        })
                    })
                }, r.ChevronSmallDownIcon)
        },
        967685: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("159190"),
                s = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: i,
                        ...r
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: [(0, l.jsx)("path", {
                            className: i,
                            fill: a,
                            d: "M1.93956 14.6668H6.18203C6.51658 14.6668 6.7881 14.3953 6.7881 14.0607C6.7881 13.7262 6.51658 13.4547 6.18203 13.4547H3.40261L7.21658 9.64069C7.45325 9.40402 7.45325 9.02038 7.21658 8.78371C7.0984 8.66522 6.94325 8.60613 6.7881 8.60613C6.63294 8.60613 6.47779 8.66522 6.35961 8.78371L2.54563 12.5977V9.81826C2.54563 9.48372 2.27411 9.2122 1.93956 9.2122C1.60501 9.2122 1.3335 9.48372 1.3335 9.81826V14.0607C1.3335 14.3953 1.60501 14.6668 1.93956 14.6668Z"
                        }), (0, l.jsx)("path", {
                            className: i,
                            fill: a,
                            d: "M8.78374 7.21643C9.02041 7.4531 9.40405 7.4531 9.64072 7.21643L13.4547 3.40245V6.18188C13.4547 6.51643 13.7262 6.78794 14.0608 6.78794C14.3953 6.78794 14.6668 6.51643 14.6668 6.18188V1.93941C14.6668 1.60486 14.3953 1.33334 14.0608 1.33334L9.8183 1.33334C9.48375 1.33334 9.21223 1.60486 9.21223 1.93941C9.21223 2.27396 9.48375 2.54548 9.8183 2.54548H12.5977L8.78374 6.35945C8.54707 6.59612 8.54707 6.97976 8.78374 7.21643Z"
                        })]
                    })
                }, i.MaximizeIcon)
        },
        462579: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("736616"),
                s = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: i,
                        ...r
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            fill: a,
                            className: i,
                            d: "M12 5C5.648 5 1 12 1 12C1 12 5.648 19 12 19C18.352 19 23 12 23 12C23 12 18.352 5 12 5ZM12 16C9.791 16 8 14.21 8 12C8 9.79 9.791 8 12 8C14.209 8 16 9.79 16 12C16 14.21 14.209 16 12 16Z"
                        }), (0, l.jsx)("path", {
                            fill: a,
                            className: i,
                            d: "M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                        })]
                    })
                }, i.EyeIcon)
        },
        2770: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("332127"),
                s = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...r
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            className: i,
                            fill: a,
                            d: "M19,3H14V5h5v5h2V5A2,2,0,0,0,19,3Z"
                        }), (0, l.jsx)("path", {
                            className: i,
                            fill: a,
                            d: "M19,19H14v2h5a2,2,0,0,0,2-2V14H19Z"
                        }), (0, l.jsx)("path", {
                            className: i,
                            fill: a,
                            d: "M3,5v5H5V5h5V3H5A2,2,0,0,0,3,5Z"
                        }), (0, l.jsx)("path", {
                            className: i,
                            fill: a,
                            d: "M5,14H3v5a2,2,0,0,0,2,2h5V19H5Z"
                        })]
                    })
                }, i.FullscreenEnterIcon)
        },
        543289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("75196");

            function i(e) {
                let {
                    width: t = 104,
                    height: n = 80,
                    ...i
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 104 80",
                    fill: "none",
                    children: [(0, l.jsx)("path", {
                        d: "M95.6718 1.80634C95.6718 0.808724 94.863 0 93.8654 0C92.8678 0 92.0591 0.808724 92.0591 1.80634V3.64278C92.0591 4.64039 92.8678 5.44911 93.8654 5.44911C94.863 5.44911 95.6718 4.64039 95.6718 3.64278V1.80634Z",
                        fill: "#ADF3FF"
                    }), (0, l.jsx)("path", {
                        d: "M95.6713 16.3574C95.6713 15.3598 94.8625 14.5511 93.8649 14.5511C92.8673 14.5511 92.0586 15.3598 92.0586 16.3574V18.1939C92.0586 19.1915 92.8673 20.0002 93.8649 20.0002C94.8625 20.0002 95.6713 19.1915 95.6713 18.1939V16.3574Z",
                        fill: "#ADF3FF"
                    }), (0, l.jsx)("path", {
                        d: "M102.194 11.8412C103.191 11.8412 104 11.0325 104 10.0349C104 9.03724 103.191 8.22852 102.194 8.22852H100.357C99.3596 8.22852 98.5509 9.03724 98.5509 10.0349C98.5509 11.0325 99.3596 11.8412 100.357 11.8412H102.194Z",
                        fill: "#ADF3FF"
                    }), (0, l.jsx)("path", {
                        d: "M87.6434 11.7413C88.641 11.7413 89.4497 10.9325 89.4497 9.93494C89.4497 8.93733 88.641 8.1286 87.6434 8.1286H85.8069C84.8093 8.1286 84.0006 8.93733 84.0006 9.93494C84.0006 10.9325 84.8093 11.7413 85.8069 11.7413H87.6434Z",
                        fill: "#ADF3FF"
                    }), (0, l.jsx)("path", {
                        d: "M11.1501 74.4573L15.3147 73.0684C15.5192 72.9747 15.6925 72.8241 15.814 72.6347C15.9354 72.4454 16 72.225 16 72C16 71.775 15.9354 71.5546 15.814 71.3653C15.6925 71.1759 15.5192 71.0253 15.3147 70.9316L11.1501 69.5427C10.8657 69.4142 10.6378 69.1862 10.5094 68.9016L9.01446 64.7348C8.94423 64.521 8.80835 64.3349 8.62619 64.203C8.44403 64.071 8.22488 64 7.99999 64C7.77511 64 7.55597 64.071 7.37381 64.203C7.19165 64.3349 7.05576 64.521 6.98554 64.7348L5.49057 68.9016C5.36216 69.1862 5.13433 69.4142 4.84986 69.5427L0.685276 70.9316C0.480802 71.0253 0.307523 71.1759 0.186045 71.3653C0.0645662 71.5546 0 71.775 0 72C0 72.225 0.0645662 72.4454 0.186045 72.6347C0.307523 72.8241 0.480802 72.9747 0.685276 73.0684L4.84986 74.4573C5.0011 74.5032 5.1387 74.5858 5.25046 74.6976C5.36222 74.8094 5.44469 74.9471 5.49057 75.0984L6.98554 79.2652C7.05576 79.479 7.19165 79.6651 7.37381 79.797C7.55597 79.929 7.77511 80 7.99999 80C8.22488 80 8.44403 79.929 8.62619 79.797C8.80835 79.6651 8.94423 79.479 9.01446 79.2652L10.5094 75.0984C10.5553 74.9471 10.6378 74.8094 10.7495 74.6976C10.8613 74.5858 10.9989 74.5032 11.1501 74.4573Z",
                        fill: "#FFD01A"
                    })]
                })
            }
        },
        204591: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("943325"),
                s = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 20,
                        color: a = "currentColor",
                        foreground: i,
                        ...r
                    } = e;
                    return (0, l.jsxs)("svg", {
                        viewBox: "0 0 20 20",
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        children: [(0, l.jsx)("path", {
                            fill: a,
                            className: i,
                            d: "M12.9297 3.25007C12.7343 3.05261 12.4154 3.05226 12.2196 3.24928L11.5746 3.89824C11.3811 4.09297 11.3808 4.40733 11.5739 4.60245L16.5685 9.64824C16.7614 9.84309 16.7614 10.1569 16.5685 10.3517L11.5739 15.3975C11.3808 15.5927 11.3811 15.907 11.5746 16.1017L12.2196 16.7507C12.4154 16.9477 12.7343 16.9474 12.9297 16.7499L19.2604 10.3517C19.4532 10.1568 19.4532 9.84314 19.2604 9.64832L12.9297 3.25007Z"
                        }), (0, l.jsx)("path", {
                            fill: a,
                            className: i,
                            d: "M8.42616 4.60245C8.6193 4.40733 8.61898 4.09297 8.42545 3.89824L7.78047 3.24928C7.58466 3.05226 7.26578 3.05261 7.07041 3.25007L0.739669 9.64832C0.5469 9.84314 0.546901 10.1568 0.739669 10.3517L7.07041 16.7499C7.26578 16.9474 7.58465 16.9477 7.78047 16.7507L8.42545 16.1017C8.61898 15.907 8.6193 15.5927 8.42616 15.3975L3.43155 10.3517C3.23869 10.1569 3.23869 9.84309 3.43155 9.64824L8.42616 4.60245Z"
                        })]
                    })
                }, i.AngleBracketsIcon)
        },
        45622: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("485358"),
                s = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...r
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            className: i,
                            fill: a,
                            d: "M16,8V3H14V8a2,2,0,0,0,2,2h5V8Z"
                        }), (0, l.jsx)("path", {
                            className: i,
                            fill: a,
                            d: "M14,16v5h2V16h5V14H16A2,2,0,0,0,14,16Z"
                        }), (0, l.jsx)("path", {
                            className: i,
                            fill: a,
                            d: "M8,8H3v2H8a2,2,0,0,0,2-2V3H8Z"
                        }), (0, l.jsx)("path", {
                            className: i,
                            fill: a,
                            d: "M8,14H3v2H8v5h2V16A2,2,0,0,0,8,14Z"
                        })]
                    })
                }, i.FullscreenExitIcon)
        },
        648739: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("75196");

            function i(e) {
                let {
                    width: t = 16,
                    height: n = 16,
                    color: i = "currentColor",
                    foreground: s,
                    ...r
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(r),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        className: s,
                        fill: i,
                        transform: "translate(3.000000, 4.000000)",
                        d: "M16 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H2V4h14v10h-4v2h4c1.1 0 2-.9 2-2V2a2 2 0 0 0-2-2zM9 6l-4 4h3v6h2v-6h3L9 6z"
                    })
                })
            }
        },
        830837: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("828516"),
                s = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: i,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M5.25 2.25226H7.5C7.9125 2.25226 8.25 2.58976 8.25 3.00226V15.0023C8.25 15.4148 7.9125 15.7523 7.5 15.7523H5.25C4.8375 15.7523 4.5 15.4148 4.5 15.0023V3.00226C4.5 2.58976 4.8375 2.25226 5.25 2.25226ZM11.25 2.25226H13.5C13.9125 2.25226 14.25 2.58976 14.25 3.00226V15.0023C14.25 15.4148 13.9125 15.7523 13.5 15.7523H11.25C10.8375 15.7523 10.5 15.4148 10.5 15.0023V3.00226C10.5 2.58976 10.8375 2.25226 11.25 2.25226Z",
                            fill: a,
                            className: i
                        })
                    })
                }, i.PauseIcon)
        },
        948613: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("4997"),
                s = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        children: (0, l.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, l.jsx)("path", {
                                d: "M0 0H18V18H0z"
                            }), (0, l.jsx)("path", {
                                fill: a,
                                className: i,
                                fillRule: "nonzero",
                                d: "M7,13 L7,5 L12,9 L7,13 Z M9,1 C4.581722,1 1,4.581722 1,9 C1,11.1217319 1.84285472,13.1565632 3.34314575,14.6568542 C4.84343678,16.1571453 6.87826808,17 9,17 C11.1217319,17 13.1565632,16.1571453 14.6568542,14.6568542 C16.1571453,13.1565632 17,11.1217319 17,9 C17,6.87826808 16.1571453,4.84343678 14.6568542,3.34314575 C13.1565632,1.84285472 11.1217319,1 9,1 Z"
                            })]
                        })
                    })
                }, i.CirclePlayIcon)
        },
        73034: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("75196");

            function i(e) {
                let {
                    width: t = 16,
                    height: n = 16,
                    color: i = "currentColor",
                    foreground: s,
                    ...r
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(r),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        className: s,
                        fill: i,
                        d: "M12,5 L12,1 L7,6 L12,11 L12,7 C15.31,7 18,9.69 18,13 C18,16.31 15.31,19 12,19 C8.69,19 6,16.31 6,13 L4,13 C4,17.42 7.58,21 12,21 C16.42,21 20,17.42 20,13 C20,8.58 16.42,5 12,5 L12,5 Z"
                    })
                })
            }
        },
        570511: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("113257"),
                s = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...r
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            fill: a,
                            className: i,
                            d: "M19.73 9L21 10.27l-2.23 2.23L21 14.73 19.73 16l-2.23-2.23L15.27 16 14 14.73l2.23-2.23L14 10.27 15.27 9l2.23 2.23z",
                            fillRule: "evenodd"
                        }), (0, l.jsx)("path", {
                            fill: a,
                            className: i,
                            d: "M11.38 3.08a1 1 0 0 0-1.09.22L6 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3l4.29 4.71A1 1 0 0 0 12 20V4a1 1 0 0 0-.62-.92z"
                        })]
                    })
                }, i.ChannelsVoiceXIcon)
        },
        974261: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("131771"),
                s = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: i,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.293 3.29604C10.579 3.01004 11.009 2.92504 11.383 3.07904C11.757 3.23204 12 3.59904 12 4.00204V20.002C12 20.407 11.757 20.772 11.383 20.927C11.009 21.082 10.579 20.996 10.293 20.71L6 16.002H3C2.45 16.002 2 15.552 2 15.002V9.00204C2 8.45304 2.45 8.00204 3 8.00204H6L10.293 3.29604ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z"
                        })
                    })
                }, i.ChannelsVoiceLowIcon)
        },
        909004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("268242"),
                s = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: i,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, l.jsx)("path", {
                            className: i,
                            fill: a,
                            d: "M12.6667 1.33331H7.33333C6.6 1.33331 6 1.93331 6 2.66665V5.99998C6 6.73331 5.4 7.33331 4.66667 7.33331C3.19333 7.33331 2 8.52665 2 9.99998V13.3333C2 14.0666 2.6 14.6666 3.33333 14.6666H8.66667C9.4 14.6666 10 14.0666 10 13.3333V9.99998C10 9.26665 10.6 8.66665 11.3333 8.66665C12.8067 8.66665 14 7.47331 14 5.99998V2.66665C14 1.93331 13.4 1.33331 12.6667 1.33331ZM8 13.3333H4C3.63333 13.3333 3.33333 13.0333 3.33333 12.6666C3.33333 12.3 3.63333 12 4 12H8C8.36667 12 8.66667 12.3 8.66667 12.6666C8.66667 13.0333 8.36667 13.3333 8 13.3333ZM8 10.6666H4C3.63333 10.6666 3.33333 10.3666 3.33333 9.99998C3.33333 9.63331 3.63333 9.33331 4 9.33331H8C8.36667 9.33331 8.66667 9.63331 8.66667 9.99998C8.66667 10.3666 8.36667 10.6666 8 10.6666ZM12 6.66665H8C7.63333 6.66665 7.33333 6.36665 7.33333 5.99998C7.33333 5.63331 7.63333 5.33331 8 5.33331H12C12.3667 5.33331 12.6667 5.63331 12.6667 5.99998C12.6667 6.36665 12.3667 6.66665 12 6.66665ZM12 3.99998H8C7.63333 3.99998 7.33333 3.69998 7.33333 3.33331C7.33333 2.96665 7.63333 2.66665 8 2.66665H12C12.3667 2.66665 12.6667 2.96665 12.6667 3.33331C12.6667 3.69998 12.3667 3.99998 12 3.99998Z"
                        })
                    })
                }, i.SummaryIcon)
        },
        251144: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("75196");

            function i(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: i = "currentColor",
                    foreground: s,
                    ...r
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(r),
                    width: t,
                    height: n,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        className: s,
                        d: "M14.0652 10.5L16.6739 10.5C16.7604 10.5 16.8433 10.4641 16.9045 10.4002C16.9656 10.3362 17 10.2495 17 10.1591L17 4.0227C17 3.9323 16.9656 3.8456 16.9045 3.7817C16.8433 3.7177 16.7604 3.6818 16.6739 3.6818L14.0652 3.6818C13.9787 3.6818 13.8958 3.7177 13.8346 3.7817C13.7735 3.8456 13.7391 3.9323 13.7391 4.0227L13.7391 10.1591C13.7391 10.2495 13.7735 10.3362 13.8346 10.4002C13.8958 10.4641 13.9787 10.5 14.0652 10.5ZM2 10.8409C2 11.7804 2.7317 12.5454 3.6304 12.5454L7.7359 12.5454C7.537 13.1789 7.2174 14.34 7.2174 15.2727C7.2174 16.7516 8.4193 18 9.1739 18C9.8515 18 10.3354 17.6018 10.3563 17.5848C10.3943 17.5526 10.425 17.512 10.4461 17.4659C10.4672 17.4198 10.4782 17.3693 10.4783 17.3182L10.4783 16.6939C10.4783 15.5814 10.7103 14.4811 11.1595 13.4634L12.3565 10.7516L12.9063 10.4645C12.9605 10.4361 13.006 10.3924 13.0379 10.3385C13.0698 10.2846 13.0868 10.2225 13.087 10.1591L13.087 4.0227C13.087 3.932 13.0524 3.8455 12.9917 3.7814C12.5033 3.2714 11.4076 3 10.8044 3L4.7717 3C4.5222 3.0004 4.2768 3.0674 4.0588 3.1944C3.8409 3.3215 3.6575 3.5046 3.526 3.7264C3.3944 3.9481 3.3192 4.2013 3.3072 4.4619C3.2952 4.7225 3.347 4.982 3.4576 5.2159C3.1122 5.3973 2.8496 5.7144 2.7273 6.0978C2.6051 6.4812 2.6332 6.8996 2.8054 7.2614C2.5635 7.3883 2.3601 7.5831 2.2179 7.8239C2.0757 8.0646 2.0002 8.342 2 8.625C2 9.0341 2.1559 9.4166 2.4239 9.6989C2.1533 10.007 2 10.4107 2 10.8409Z",
                        fill: i
                    })
                })
            }
        },
        20662: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("75196");

            function i(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: i = "currentColor",
                    foreground: s,
                    ...r
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(r),
                    width: t,
                    height: n,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        className: s,
                        d: "M5.93478 9.5H3.32609C3.2396 9.5 3.15666 9.53592 3.09551 9.59985C3.03436 9.66378 3 9.75049 3 9.84091V15.9773C3 16.0677 3.03436 16.1544 3.09551 16.2183C3.15666 16.2823 3.2396 16.3182 3.32609 16.3182H5.93478C6.02127 16.3182 6.10421 16.2823 6.16536 16.2183C6.22651 16.1544 6.26087 16.0677 6.26087 15.9773V9.84091C6.26087 9.75049 6.22651 9.66378 6.16536 9.59985C6.10421 9.53592 6.02127 9.5 5.93478 9.5ZM18 9.15909C18 8.21955 17.2683 7.45455 16.3696 7.45455H12.2641C12.463 6.82114 12.7826 5.66 12.7826 4.72727C12.7826 3.24841 11.5807 2 10.8261 2C10.1485 2 9.66457 2.39818 9.6437 2.41523C9.60568 2.44738 9.57501 2.488 9.55391 2.53412C9.53281 2.58024 9.52182 2.6307 9.52174 2.68182V3.3061C9.52174 4.41859 9.28971 5.51885 8.84048 6.5366L7.64348 9.24841L7.0937 9.53545C7.03952 9.56394 6.99396 9.60756 6.96207 9.66149C6.93018 9.71541 6.91321 9.77751 6.91304 9.84091V15.9773C6.91304 16.068 6.94761 16.1545 7.00826 16.2186C7.49674 16.7286 8.59239 17 9.19565 17H15.2283C15.4778 16.9996 15.7232 16.9326 15.9412 16.8056C16.1591 16.6785 16.3425 16.4954 16.474 16.2736C16.6056 16.0519 16.6808 15.7987 16.6928 15.5381C16.7048 15.2775 16.653 15.018 16.5424 14.7841C16.8878 14.6027 17.1504 14.2856 17.2727 13.9022C17.3949 13.5188 17.3668 13.1004 17.1946 12.7386C17.4365 12.6117 17.6399 12.4169 17.7821 12.1761C17.9243 11.9354 17.9998 11.658 18 11.375C18 10.9659 17.8441 10.5834 17.5761 10.3011C17.8467 9.99296 18 9.58932 18 9.15909Z",
                        fill: i
                    })
                })
            }
        },
        873218: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("575482"),
                i = n.n(a),
                s = n("446685"),
                r = n("593195"),
                o = n("109264"),
                u = n("991497"),
                d = n("660074"),
                c = n("45029"),
                m = n("990745"),
                f = n("620193"),
                h = n("368121"),
                p = n("228427"),
                E = n("959097"),
                g = n("328413"),
                C = n("782340"),
                v = n("154040"),
                I = function(e) {
                    let {
                        iconType: t,
                        children: n
                    } = e, a = null;
                    switch (t) {
                        case "voice":
                            a = (0, l.jsx)(h.default, {
                                className: v.icon,
                                "aria-label": C.default.Messages.VOICE_CHANNEL
                            });
                            break;
                        case "voice-locked":
                            a = (0, l.jsx)(c.default, {
                                className: v.icon,
                                "aria-label": C.default.Messages.VOICE_CHANNEL_LOCKED
                            });
                            break;
                        case "stage":
                            a = (0, l.jsx)(p.default, {
                                className: v.icon,
                                "aria-label": C.default.Messages.STAGE_CHANNEL
                            });
                            break;
                        case "stage-locked":
                            a = (0, l.jsx)(c.default, {
                                className: v.icon,
                                "aria-label": C.default.Messages.STAGE_CHANNEL_LOCKED
                            });
                            break;
                        case "thread":
                            a = (0, l.jsx)(E.default, {
                                className: v.icon,
                                "aria-label": C.default.Messages.THREAD
                            });
                            break;
                        case "text":
                            a = (0, l.jsx)(r.default, {
                                className: v.icon,
                                "aria-label": C.default.Messages.CHANNEL
                            });
                            break;
                        case "forum":
                            a = (0, l.jsx)(u.default, {
                                className: v.icon,
                                "aria-label": C.default.Messages.FORUM_CHANNEL
                            });
                            break;
                        case "post":
                            a = (0, l.jsx)(d.default, {
                                className: v.icon,
                                "aria-label": C.default.Messages.FORUM_POST
                            });
                            break;
                        case "home":
                        case "guide":
                            a = (0, l.jsx)(f.default, {
                                className: v.icon,
                                "aria-label": C.default.Messages.SERVER_GUIDE
                            });
                            break;
                        case "browse":
                        case "customize":
                            a = (0, l.jsx)(s.default, {
                                className: v.icon,
                                "aria-label": C.default.Messages.CHANNEL_BROWSER_TITLE
                            });
                            break;
                        case "message":
                            a = (0, l.jsx)(o.default, {
                                className: v.icon,
                                "aria-label": C.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION
                            });
                            break;
                        case "locked":
                            a = (0, l.jsx)(c.default, {
                                className: v.icon,
                                "aria-label": C.default.Messages.NO_ACCESS
                            });
                            break;
                        case "media":
                            a = (0, l.jsx)(m.default, {
                                className: v.icon,
                                "aria-label": C.default.Messages.MEDIA_CHANNEL
                            })
                    }
                    return (0, l.jsxs)("span", {
                        className: i("channelWithIcon", {
                            [v.iconMentionText]: "text" === t
                        }),
                        children: [(0, l.jsx)(g.default, {
                            children: a
                        }), null != n && "" !== n ? (0, l.jsx)("span", {
                            className: v.name,
                            children: n
                        }) : null]
                    })
                }
        },
        250832: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("109024"),
                i = n("328413"),
                s = n("444515"),
                r = function(e) {
                    let {
                        guild: t,
                        children: n
                    } = e, r = null != t ? (0, l.jsx)(a.default, {
                        guild: t,
                        size: a.default.Sizes.MEDIUM,
                        className: s.icon,
                        active: !0
                    }) : null;
                    return (0, l.jsxs)("span", {
                        children: [(0, l.jsx)(i.default, {
                            children: r
                        }), (0, l.jsx)("span", {
                            className: s.name,
                            children: n
                        })]
                    })
                }
        },
        848825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("772280"),
                i = n("411510"),
                s = function() {
                    return (0, l.jsx)(a.default, {
                        className: i.icon
                    })
                }
        },
        22248: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("109264"),
                i = n("782340"),
                s = n("787834"),
                r = function() {
                    return (0, l.jsx)(a.default, {
                        className: s.icon,
                        "aria-label": i.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION
                    })
                }
        },
        328413: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("113106");

            function i(e) {
                let {
                    children: t
                } = e;
                return (0, l.jsxs)("span", {
                    className: a.nowrap,
                    children: [t, "⁠"]
                })
            }
        },
        28236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("575482"),
                s = n.n(i),
                r = n("744196"),
                o = n("77078"),
                u = n("430568"),
                d = n("277855"),
                c = n("305122"),
                m = n("462550"),
                f = n("235004"),
                h = n("520497"),
                p = n("812809"),
                E = n("948613"),
                g = n("368121"),
                C = n("142376"),
                v = function(e) {
                    let {
                        soundId: t,
                        jumbo: n = !1
                    } = e, {
                        currentPreviewRef: i
                    } = a.useContext(m.default), v = (0, r.default)([f.default], () => f.default.getSoundById(t)), I = (null == v ? void 0 : v.emojiId) != null || (null == v ? void 0 : v.emojiName) != null, [_, x] = a.useState(!1), S = (0, d.useSoundmojiExperiment)("soundmoji_chat_mention"), N = a.useCallback(() => {
                        var e;
                        null == v && (0, c.maybeFetchSoundboardSounds)();
                        let n = new Audio((0, h.default)(t));
                        null != i.current && i.current.pause(), i.current = n, n.currentTime = 0, n.volume = (0, p.default)(null !== (e = null == v ? void 0 : v.volume) && void 0 !== e ? e : .5), x(!0), n.play(), n.addEventListener("ended", () => {
                            x(!1)
                        }, {
                            once: !0
                        })
                    }, [t, v, i, x]);
                    return S ? null == v ? (0, l.jsxs)(o.Clickable, {
                        title: "Risky Click",
                        tag: "span",
                        onClick: N,
                        className: C.container,
                        children: [(0, l.jsx)(g.default, {
                            className: C.unknownSound
                        }), (0, l.jsx)(o.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "none",
                            className: C.text,
                            children: "Unknown"
                        })]
                    }) : n ? (0, l.jsxs)(o.Clickable, {
                        onClick: N,
                        className: C.jumboContainer,
                        children: [(0, l.jsx)("div", {
                            className: s(C.jumboOverlay, {
                                [C.playing]: _
                            }),
                            children: (0, l.jsx)(E.default, {
                                className: C.jumboPlayIcon
                            })
                        }), I && (0, l.jsx)(u.default, {
                            emojiId: null == v ? void 0 : v.emojiId,
                            emojiName: null == v ? void 0 : v.emojiName,
                            className: C.jumboEmoji
                        }), (0, l.jsx)(o.Text, {
                            tag: "span",
                            variant: "text-lg/normal",
                            color: "none",
                            className: C.text,
                            children: v.name
                        })]
                    }) : (0, l.jsxs)(o.Clickable, {
                        tag: "span",
                        onClick: N,
                        className: C.container,
                        children: [I && (0, l.jsx)(u.default, {
                            emojiId: null == v ? void 0 : v.emojiId,
                            emojiName: null == v ? void 0 : v.emojiName,
                            className: C.emoji
                        }), (0, l.jsx)(o.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "none",
                            className: C.text,
                            children: v.name
                        })]
                    }) : null
                }
        },
        719347: function(e, t, n) {
            "use strict";
            var l, a;
            n.r(t), n.d(t, {
                MEDIA_MOSAIC_MAX_WIDTH: function() {
                    return i
                },
                MEDIA_MOSAIC_MAX_HEIGHT: function() {
                    return s
                },
                MINIMUM_MEDIA_MOSAIC_DIM: function() {
                    return r
                },
                MediaLayoutType: function() {
                    return l
                },
                SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE: function() {
                    return o
                }
            });
            let i = 550,
                s = 350,
                r = 40;
            (a = l || (l = {})).STATIC = "STATIC", a.RESPONSIVE = "RESPONSIVE", a.MOSAIC = "MOSAIC";
            let o = 20
        },
        15738: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("575482"),
                i = n.n(a),
                s = n("623829"),
                r = n("119273");
            let o = Object.freeze({
                    tension: 400,
                    friction: 30
                }),
                u = Object.freeze({
                    opacity: 0,
                    height: 8,
                    x: -4
                });

            function d(e) {
                let {
                    selected: t = !1,
                    hovered: n = !1,
                    unread: a = !1,
                    disabled: d = !1,
                    className: c
                } = e;
                t = !d && t, n = !d && n, a = !d && a;
                let m = {
                        opacity: 1,
                        height: t ? 40 : n ? 20 : 8,
                        x: 0
                    },
                    f = (0, s.useTransition)(t || n || a, {
                        config: o,
                        keys: e => e ? "pill" : "empty",
                        immediate: !n && !document.hasFocus(),
                        initial: t || n || a ? m : null,
                        from: u,
                        leave: u,
                        enter: m,
                        update: m
                    });
                return (0, l.jsx)("div", {
                    className: i(c, r.wrapper),
                    "aria-hidden": !0,
                    children: f((e, t) => t && (0, l.jsx)(s.animated.span, {
                        className: r.item,
                        style: e
                    }))
                })
            }
        },
        58608: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("117064"),
                s = n("498225"),
                r = n("206230"),
                o = n("719347");
            let u = e => {
                let {
                    externalRef: t,
                    autoPlay: n,
                    playOnHover: u,
                    responsive: d,
                    mediaLayoutType: c,
                    ...m
                } = e, f = (0, s.useStateFromStores)([r.default], () => r.default.useReducedMotion), h = a.useRef(null);

                function p() {
                    var e;
                    u && (null == h || null === (e = h.current) || void 0 === e || e.play())
                }

                function E() {
                    var e;
                    u && (null == h || null === (e = h.current) || void 0 === e || e.pause())
                }
                return a.useLayoutEffect(() => () => {
                    let {
                        current: e
                    } = h;
                    null != e && function(e) {
                        e.removeAttribute("src"), Array.from(e.children).forEach(e => {
                            (0, i.isElement)(e, HTMLSourceElement) && (e.removeAttribute("src"), e.removeAttribute("type")), (0, i.isElement)(e, HTMLImageElement) && e.removeAttribute("src")
                        });
                        try {
                            e.load()
                        } catch (e) {}
                    }(e)
                }, []), a.useLayoutEffect(() => ("function" == typeof t ? (t(null), t(h.current)) : null != t && (t.current = h.current), () => {
                    "function" == typeof t ? t(null) : null != t && (t.current = null)
                }), [t, h]), (0, l.jsx)("video", {
                    ref: h,
                    autoPlay: !f && !u && n,
                    onMouseEnter: p,
                    onMouseLeave: E,
                    onFocus: p,
                    onBlur: E,
                    style: c === o.MediaLayoutType.MOSAIC ? {
                        width: "100%",
                        height: "100%",
                        maxHeight: "inherit",
                        objectFit: "cover"
                    } : d ? function() {
                        return {
                            maxWidth: m.width,
                            maxHeight: m.height,
                            width: "100%",
                            height: "100%"
                        }
                    }() : {},
                    ...m
                })
            };
            var d = a.forwardRef((e, t) => (0, l.jsx)(u, {
                ...e,
                externalRef: t
            }))
        },
        141302: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnalyticsContexts: function() {
                    return a
                },
                MINIMUM_MEMBER_COUNT: function() {
                    return p
                },
                startLurking: function() {
                    return E
                },
                viewGuild: function() {
                    return g
                },
                makeDiscoverableGuild: function() {
                    return C
                },
                trackDiscoveryViewed: function() {
                    return v
                },
                trackDiscoveryExited: function() {
                    return I
                },
                trackSearchClosed: function() {
                    return _
                },
                trackSearchStarted: function() {
                    return x
                },
                trackTagSearchStarted: function() {
                    return S
                },
                trackSearchResultsViewed: function() {
                    return N
                },
                trackGuildJoinClicked: function() {
                    return M
                },
                getDiscoverableGuild: function() {
                    return T
                }
            });
            var l, a, i = n("126617"),
                s = n("990746"),
                r = n("851387"),
                o = n("267567"),
                u = n("393414"),
                d = n("239380"),
                c = n("525065"),
                m = n("305961"),
                f = n("599110"),
                h = n("49111");
            (l = a || (a = {})).SEARCH = "Search", l.RECOMMENDED = "Recommended", l.POPULAR = "Popular", l.RECOMMENDED_E3 = "Recommended - E3", l.HEADER = "Header";
            let p = ">200";
            async function E(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        channelId: l,
                        onSuccess: a,
                        joinSource: i,
                        loadId: s,
                        setsHistorySnapshot: c = !0
                    } = n,
                    f = (0, u.getHistory)();
                c && o.default.setHistorySnapshot({
                    ...f
                });
                let h = m.default.getGuild(e),
                    p = {
                        state: {
                            analyticsSource: t
                        }
                    };
                null != h && null != h.joinedAt ? (0, d.transitionToGuild)(e, p) : (await r.default.joinGuild(e, {
                    lurker: !0,
                    source: i,
                    loadId: s,
                    lurkLocation: null == t ? void 0 : t.page
                }), await r.default.transitionToGuildSync(e, {
                    ...p,
                    welcomeModalChannelId: l,
                    search: f.location.search
                }, l)), null == a || a()
            }
            async function g(e) {
                let t, {
                    loadId: n,
                    guildId: l,
                    index: i,
                    analyticsContext: s,
                    categoryId: r
                } = e;
                "string" == typeof s && s in a && (t = s);
                let o = {
                    page: h.AnalyticsPages.GUILD_DISCOVERY,
                    object: h.AnalyticsObjects.CARD,
                    section: t
                };
                await E(l, o, {
                        loadId: n
                    }),
                    function(e) {
                        let {
                            loadId: t,
                            guildId: n,
                            index: l,
                            analyticsContext: a,
                            categoryId: i
                        } = e, s = {
                            page: h.AnalyticsPages.GUILD_DISCOVERY,
                            section: a
                        };
                        "string" != typeof a && null != a.location && (s = a.location), f.default.track(h.AnalyticEvents.GUILD_DISCOVERY_GUILD_SELECTED, {
                            location: s,
                            guild_id: n,
                            load_id: t,
                            card_index: l,
                            location_object: h.AnalyticsObjects.CARD,
                            category_id: i
                        })
                    }({
                        loadId: n,
                        guildId: l,
                        index: i,
                        analyticsContext: s,
                        categoryId: r
                    })
            }

            function C(e) {
                return {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    splash: e.splash,
                    banner: e.banner,
                    icon: e.icon,
                    features: new Set(e.features),
                    presenceCount: e.approximate_presence_count,
                    memberCount: e.approximate_member_count,
                    premiumSubscriptionCount: e.premium_subscription_count,
                    preferredLocale: e.preferred_locale,
                    discoverySplash: e.discovery_splash,
                    emojis: e.emojis,
                    emojiCount: e.emoji_count,
                    stickers: e.stickers,
                    stickerCount: e.sticker_count,
                    keywords: e.keywords
                }
            }

            function v(e) {
                let {
                    loadId: t,
                    gamesYouPlayGuilds: n,
                    allGuilds: l,
                    categoryId: a,
                    recommendationsSource: i = null
                } = e, s = n.length, r = l.length;
                f.default.track(h.AnalyticEvents.GUILD_DISCOVERY_VIEWED, {
                    load_id: t,
                    num_guilds: s + r,
                    num_guilds_recommended: s,
                    num_guilds_popular: r,
                    recommended_guild_ids: n.map(e => e.id),
                    category_id: a,
                    recommendations_source: i
                })
            }

            function I(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                f.default.track(h.AnalyticEvents.GUILD_DISCOVERY_EXITED, {
                    load_id: e,
                    guild_ids_viewed: t,
                    recommendations_source: n
                })
            }

            function _(e) {
                f.default.track(h.AnalyticEvents.SEARCH_CLOSED, {
                    load_id: e
                })
            }

            function x(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                f.default.track(h.AnalyticEvents.SEARCH_STARTED, {
                    search_type: h.SearchTypes.GUILD_DISCOVERY,
                    load_id: e,
                    location: n.location,
                    category_id: t
                })
            }

            function S(e, t, n, l) {
                f.default.track(h.AnalyticEvents.SEARCH_STARTED, {
                    search_type: h.SearchTypes.GUILD_DISCOVERY_TAG,
                    load_id: e,
                    location: {
                        page: h.AnalyticsPages.GUILD_DISCOVERY,
                        section: n
                    },
                    category_id: t,
                    guild_id: l
                })
            }

            function N(e) {
                let {
                    loadId: t,
                    searchId: n,
                    query: l,
                    guildResults: a,
                    analyticsContext: i,
                    categoryId: s,
                    isTagSearch: r
                } = e;
                f.default.track(h.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                    search_type: r ? h.SearchTypes.GUILD_DISCOVERY_TAG : h.SearchTypes.GUILD_DISCOVERY,
                    load_id: t,
                    search_id: n,
                    total_results: void 0 !== a ? a.length : null,
                    guild_ids: void 0 !== a ? a.map(e => e.id) : null,
                    query: l,
                    location: i.location,
                    category_id: s
                })
            }

            function M(e) {
                let t = o.default.getLoadId(e);
                f.default.track(h.AnalyticEvents.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
                    guild_id: e,
                    load_id: t,
                    guild_size: c.default.getMemberCount(e)
                })
            }
            async function T(e) {
                try {
                    var t, n;
                    let l = await s.default.get({
                            url: h.Endpoints.GUILD_DISCOVERY,
                            query: i.stringify({
                                guild_ids: e
                            }),
                            oldFormErrors: !0
                        }),
                        a = null === (n = l.body) || void 0 === n ? void 0 : null === (t = n.guilds) || void 0 === t ? void 0 : t[0];
                    if (null == a) return a;
                    return C(a)
                } catch (e) {
                    return null
                }
            }
        },
        874276: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getVolume: function() {
                    return i
                },
                setVolume: function() {
                    return s
                },
                getMuted: function() {
                    return r
                },
                setMuted: function() {
                    return o
                }
            });
            var l = n("173333");
            let a = "MediaPlayerVolume";

            function i() {
                var e;
                let {
                    volume: t
                } = null !== (e = l.default.get(a)) && void 0 !== e ? e : {};
                return "number" != typeof t && (t = 1), t = Math.min(1, Math.max(0, t))
            }

            function s(e) {
                l.default.set(a, {
                    volume: e,
                    muted: r()
                })
            }

            function r() {
                var e;
                let {
                    muted: t
                } = null !== (e = l.default.get(a)) && void 0 !== e ? e : {};
                return "boolean" != typeof t && (t = !1), t
            }

            function o(e) {
                l.default.set(a, {
                    volume: i(),
                    muted: e
                })
            }
        }
    }
]);
//# sourceMappingURL=1a5e27f77039b31f3c05.js.map