(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["56145"], {
        777483: function(e, t, n) {
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
                return n(s(e))
            }

            function s(e) {
                if (!n.o(l, e)) {
                    var t = Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return l[e]
            }
            a.id = '"777483"', a.keys = function() {
                return Object.keys(l)
            }, a.resolve = s, e.exports = a
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
                    return C
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("118810"),
                i = n("77078"),
                r = n("244201"),
                o = n("952368"),
                u = n("924444"),
                d = n("103603"),
                c = n("866190"),
                f = n("782340"),
                m = n("842992");
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
                    }, this.modalContext = (0, i.modalContextFromAppContext)(this.props.appContext), this.onCloseImage = () => {
                        (0, i.closeModal)(h, this.modalContext)
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
                            children: C,
                            renderLinkComponent: g,
                            isWindowFocused: E,
                            shouldHideMediaOptions: v = !1
                        } = this.props, I = {
                            alt: a,
                            src: r,
                            original: null != o ? o : r,
                            width: d,
                            height: c,
                            animated: p,
                            children: C,
                            zoomThumbnailPlaceholder: n,
                            renderLinkComponent: g,
                            onContextMenu: v ? e => {
                                e.stopPropagation(), e.preventDefault()
                            } : void 0
                        };
                        (0, s.isElement)(e.currentTarget) && e.currentTarget.blur(), (0, i.openModal)(e => (0, l.jsx)(i.ModalRoot, {
                            className: m.modal,
                            ...e,
                            size: i.ModalSize.DYNAMIC,
                            "aria-label": f.default.Messages.IMAGE,
                            children: (0, l.jsx)(u.ImageModal, {
                                ...I,
                                className: m.image,
                                shouldAnimate: E,
                                onClose: this.onCloseImage,
                                shouldHideMediaOptions: v
                            })
                        }), {
                            modalKey: h
                        }, this.modalContext)
                    }
                }
            }

            function C(e) {
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
                    return i
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("599110");

            function i(e) {
                var t;
                let n = a.forwardRef((t, n) => (0, l.jsx)(s.AnalyticsContext.Consumer, {
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
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M9.59994 7.80002L3.99994 12L9.59994 16.2C9.85175 16.3889 9.99994 16.6853 9.99994 17V18.9841C9.99994 19.193 9.75897 19.3098 9.59503 19.1804L1.49413 12.7849C0.986984 12.3845 0.986984 11.6155 1.49413 11.2151L9.59503 4.81969C9.75897 4.69026 9.99994 4.80703 9.99994 5.01591V7.00002C9.99994 7.31478 9.85175 7.61117 9.59994 7.80002Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M14.3999 7.80002L19.9999 12L14.3999 16.2C14.1481 16.3889 13.9999 16.6853 13.9999 17V18.9841C13.9999 19.193 14.2409 19.3098 14.4049 19.1804L22.5058 12.7849C23.0129 12.3845 23.0129 11.6155 22.5058 11.2151L14.4049 4.81969C14.2409 4.69026 13.9999 4.80703 13.9999 5.01591V7.00002C13.9999 7.31478 14.1481 7.61117 14.3999 7.80002Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    })]
                })
            }
        },
        641531: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AttachmentIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        d: "M10.5745 4.01118C13.2948 1.29095 17.7051 1.29095 20.4254 4.01118L20.9718 4.55758C23.7014 7.28719 23.7014 11.7128 20.9718 14.4424L13.7071 21.7071C13.3165 22.0976 12.6834 22.0976 12.2929 21.7071C11.9023 21.3166 11.9023 20.6834 12.2929 20.2929L19.5576 13.0282C21.5061 11.0796 21.5061 7.92036 19.5576 5.97179L19.0112 5.4254C17.072 3.48621 13.9279 3.48621 11.9888 5.4254L3.96747 13.4467C2.77496 14.6392 2.69562 16.5467 3.78498 17.8341C5.01038 19.2823 7.21182 19.3739 8.55326 18.0325L14.7929 11.7929C15.2308 11.355 15.2308 10.645 14.7929 10.2071C14.355 9.76918 13.645 9.76918 13.2071 10.2071L9.70707 13.7071C9.31655 14.0976 8.68338 14.0976 8.29286 13.7071C7.90233 13.3166 7.90233 12.6834 8.29286 12.2929L11.7929 8.79287C13.0118 7.57392 14.9881 7.57392 16.2071 8.79287C17.426 10.0118 17.426 11.9881 16.2071 13.2071L9.96747 19.4467C7.79866 21.6155 4.23941 21.4674 2.2582 19.126C0.496952 17.0445 0.625234 13.9605 2.55326 12.0325L10.5745 4.01118Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    })
                })
            }
        },
        4997: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CirclePlayIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "black"
                    }), (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM9 8.08866C9 7.2136 9.99853 6.69735 10.7322 7.1931L16.5207 11.1044C17.1598 11.5363 17.1598 12.4637 16.5207 12.8956L10.7322 16.8069C9.99853 17.3027 9 16.7864 9 15.9113V8.08866Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    })]
                })
            }
        },
        821455: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CopyIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M3 16C2.44772 16 2 15.5523 2 15V10C2 5.58172 5.58172 2 10 2H15C15.5523 2 16 2.44771 16 3V3.5C16 3.77614 15.7761 4 15.5 4H10C6.68629 4 4 6.68629 4 10V15.5C4 15.7761 3.77614 16 3.5 16H3Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M6 18C6 20.2091 7.79086 22 10 22H18C20.2091 22 22 20.2091 22 18V14H19C16.2386 14 14 11.7614 14 9V6H10C7.79086 6 6 7.79086 6 10V18Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M21.7305 12C21.5831 11.676 21.3778 11.3778 21.1213 11.1213L16.8787 6.87868C16.6222 6.62216 16.324 6.41688 16 6.26946V9C16 10.6569 17.3431 12 19 12H21.7305Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    })]
                })
            }
        },
        691096: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DownloadIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M12 2C12.5523 2 13 2.44772 13 3V13.5858L16.2929 10.2929C16.6834 9.90237 17.3166 9.90237 17.7071 10.2929C18.0976 10.6834 18.0976 11.3166 17.7071 11.7071L12.7078 16.7064L12.7005 16.7136C12.5208 16.8901 12.2746 16.9992 12.003 17L12 17L11.997 17C11.8625 16.9996 11.7343 16.9727 11.6172 16.9241C11.502 16.8764 11.3938 16.8063 11.2995 16.7136L11.2922 16.7064L6.29289 11.7071C5.90237 11.3166 5.90237 10.6834 6.29289 10.2929C6.68342 9.90237 7.31658 9.90237 7.70711 10.2929L11 13.5858V3C11 2.44772 11.4477 2 12 2Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M3 20C2.44772 20 2 20.4477 2 21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20H3Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    })]
                })
            }
        },
        736616: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EyeIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M15.5591 11.7652C15.7537 11.674 16 11.7852 16 12C16 14.2091 14.2091 16 12 16C9.79083 16 7.99997 14.2091 7.99997 12C7.99997 9.79086 9.79083 8 12 8C12.2148 8 12.3259 8.24626 12.2348 8.44077C12.0841 8.76238 12 9.12133 12 9.49994C12 10.8807 13.1193 11.9999 14.5 11.9999C14.8786 11.9999 15.2375 11.9158 15.5591 11.7652Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M22.8866 11.6925C22.965 11.8942 22.965 12.1058 22.8866 12.3075C22.2731 13.8854 19.1128 21 12 21C4.8871 21 1.7268 13.8854 1.11337 12.3075C1.03497 12.1058 1.03497 11.8942 1.11337 11.6925C1.7268 10.1146 4.8871 3 12 3C19.1128 3 22.2731 10.1146 22.8866 11.6925ZM18.3855 8.08307C19.6725 9.53134 20.4706 11.1224 20.8506 12C20.4706 12.8776 19.6725 14.4687 18.3855 15.9169C16.8743 17.6176 14.8092 19 12 19C9.19069 19 7.12566 17.6176 5.61438 15.9169C4.32739 14.4687 3.52937 12.8776 3.14935 12C3.52937 11.1224 4.32739 9.53134 5.61438 8.08307C7.12566 6.38241 9.19069 5 12 5C14.8092 5 16.8743 6.38241 18.3855 8.08307Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    })]
                })
            }
        },
        332127: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FullscreenEnterIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M4 6C4 4.89543 4.89543 4 6 4H9C9.55228 4 10 3.55228 10 3C10 2.44772 9.55228 2 9 2H6C3.79086 2 2 3.79086 2 6V9C2 9.55228 2.44772 10 3 10C3.55228 10 4 9.55228 4 9V6Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M4 18C4 19.1046 4.89543 20 6 20H9C9.55228 20 10 20.4477 10 21C10 21.5523 9.55228 22 9 22H6C3.79086 22 2 20.2091 2 18V15C2 14.4477 2.44772 14 3 14C3.55228 14 4 14.4477 4 15V18Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M18 4C19.1046 4 20 4.89543 20 6V9C20 9.55228 20.4477 10 21 10C21.5523 10 22 9.55228 22 9V6C22 3.79086 20.2091 2 18 2H15C14.4477 2 14 2.44772 14 3C14 3.55228 14.4477 4 15 4H18Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M20 18C20 19.1046 19.1046 20 18 20H15C14.4477 20 14 20.4477 14 21C14 21.5523 14.4477 22 15 22H18C20.2091 22 22 20.2091 22 18V15C22 14.4477 21.5523 14 21 14C20.4477 14 20 14.4477 20 15V18Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    })]
                })
            }
        },
        485358: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FullscreenExitIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M8 6C8 7.10457 7.10457 8 6 8H3C2.44772 8 2 8.44772 2 9C2 9.55228 2.44772 10 3 10H6C8.20914 10 10 8.20914 10 6V3C10 2.44772 9.55228 2 9 2C8.44772 2 8 2.44772 8 3V6Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M8 18C8 16.8954 7.10457 16 6 16H3C2.44772 16 2 15.5523 2 15C2 14.4477 2.44772 14 3 14H6C8.20914 14 10 15.7909 10 18V21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21V18Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M18 8C16.8954 8 16 7.10457 16 6V3C16 2.44772 15.5523 2 15 2C14.4477 2 14 2.44772 14 3V6C14 8.20914 15.7909 10 18 10H21C21.5523 10 22 9.55228 22 9C22 8.44772 21.5523 8 21 8H18Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M16 18C16 16.8954 16.8954 16 18 16H21C21.5523 16 22 15.5523 22 15C22 14.4477 21.5523 14 21 14H18C15.7909 14 14 15.7909 14 18V21C14 21.5523 14.4477 22 15 22C15.5523 22 16 21.5523 16 21V18Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    })]
                })
            }
        },
        159190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MaximizeIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M14 3C14 2.44772 14.4477 2 15 2H21C21.5523 2 22 2.44772 22 3V9C22 9.55228 21.5523 10 21 10C20.4477 10 20 9.55228 20 9V5.41421L14.7071 10.7071C14.3166 11.0976 13.6834 11.0976 13.2929 10.7071C12.9024 10.3166 12.9024 9.68342 13.2929 9.29289L18.5858 4H15C14.4477 4 14 3.55228 14 3Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M5.41421 20H9C9.55228 20 10 20.4477 10 21C10 21.5523 9.55228 22 9 22H3C2.44772 22 2 21.5523 2 21V15C2 14.4477 2.44772 14 3 14C3.55228 14 4 14.4477 4 15V18.5858L9.29289 13.2929C9.68342 12.9024 10.3166 12.9024 10.7071 13.2929C11.0976 13.6834 11.0976 14.3166 10.7071 14.7071L5.41421 20Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    })]
                })
            }
        },
        828516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PauseIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M6 4C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H9C9.55228 20 10 19.5523 10 19V5C10 4.44772 9.55228 4 9 4H6Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M15 4C14.4477 4 14 4.44772 14 5V19C14 19.5523 14.4477 20 15 20H18C18.5523 20 19 19.5523 19 19V5C19 4.44772 18.5523 4 18 4H15Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    })]
                })
            }
        },
        782926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ThreadIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M12.003 2.81063C11.6125 2.4201 11.6125 1.7869 12.0031 1.39639L12.3566 1.04286C12.7471 0.652367 13.3803 0.652383 13.7708 1.04289L22.9632 10.2353C23.3537 10.6258 23.3537 11.259 22.9632 11.6495L22.2721 12.3406C21.9361 12.6931 21.3839 12.7561 20.9736 12.4674L11.4277 5.74988C10.976 5.43204 10.8675 4.80824 11.1854 4.35658C11.2349 4.28623 11.2918 4.2242 11.3544 4.17082L12.3537 3.16135L12.003 2.81063Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M12.0031 21.1954C12.3936 21.586 12.3936 22.2192 12.0031 22.6097L11.6495 22.9632C11.259 23.3537 10.6258 23.3537 10.2353 22.9632L1.04289 13.7708C0.652369 13.3802 0.652369 12.7471 1.04289 12.3565L1.7339 11.6655C2.0699 11.313 2.62221 11.25 3.03248 11.5387L12.5784 18.2562C13.0301 18.574 13.1386 19.1978 12.8207 19.6495C12.7708 19.7204 12.7134 19.7829 12.6502 19.8366L11.6523 20.8446L12.0031 21.1954Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M15.6634 16.8003C15.3571 17.2598 14.7362 17.384 14.2767 17.0777L5.7914 11.4208C5.33187 11.1145 5.2077 10.4936 5.51405 10.0341C5.8204 9.57453 6.44127 9.45036 6.9008 9.75671L15.3861 15.4136C15.8456 15.7199 15.9698 16.3408 15.6634 16.8003Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M17.1051 14.2492C17.5646 14.5556 18.1855 14.4314 18.4919 13.9719C18.7982 13.5124 18.674 12.8915 18.2145 12.5851L9.72923 6.92828C9.2697 6.62193 8.64883 6.7461 8.34248 7.20563C8.03613 7.66516 8.1603 8.28603 8.61983 8.59238L17.1051 14.2492Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    })]
                })
            }
        },
        209320: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TopicsIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3.11127 8H6.00008V17L6.00016 17.0258V18.8182C6.00016 19.6845 6.36884 20.5007 7.00059 21.0914C7.45564 21.5169 8.02084 21.802 8.62524 21.9274C8.741 21.9742 8.86753 22 9.00008 22H19.0001C21.2092 22 23.0001 20.2091 23.0001 18V17C23.0001 15.8954 22.1047 15 21.0001 15H20.0001V5.00001C20.0001 3.34315 18.6569 2.00001 17.0001 2.00001H4.75008C4.72236 1.99935 4.69461 2 4.66683 2C3.80363 2 2.9634 2.32001 2.33392 2.90861C1.70217 3.49934 1.3335 4.31545 1.3335 5.18181C1.3335 5.89442 1.62781 6.53113 1.85375 6.92726C1.97393 7.13797 2.0933 7.31233 2.18334 7.43511C2.22869 7.49695 2.26749 7.54691 2.29642 7.58315C2.31091 7.60129 2.323 7.61609 2.33229 7.6273L2.34408 7.64144L2.34833 7.64646L2.35002 7.64845L2.35076 7.64931C2.35092 7.64951 2.35142 7.65009 3.11127 7L2.35142 7.65009C2.54141 7.87215 2.81903 8 3.11127 8ZM4.66683 4C4.29235 4 3.9456 4.13972 3.69991 4.36946C3.45649 4.59707 3.3335 4.89087 3.3335 5.18181C3.3335 5.3783 3.42807 5.65068 3.59102 5.93637C3.60346 5.95817 3.61592 5.9794 3.62831 6H6.00008V5.16884C5.99648 4.88215 5.87355 4.59369 5.63375 4.36946C5.38806 4.13972 5.04131 4 4.66683 4ZM9.66113 17C9.84727 17.4037 10.0001 17.9136 10.0001 18.5C10.0001 19.0864 9.84728 19.5963 9.66113 20H12.3335C12.3351 20 12.3367 20 12.3383 20H19.0001C20.1047 20 21.0001 19.1046 21.0001 18V17H9.66113ZM3.874 6.35328L3.87309 6.35221C3.87415 6.35348 3.87426 6.35359 3.874 6.35328ZM11.0001 8.00001C10.4478 8.00001 10.0001 8.44772 10.0001 9.00001C10.0001 9.55229 10.4478 10 11.0001 10H16.0001C16.5524 10 17.0001 9.55229 17.0001 9.00001C17.0001 8.44772 16.5524 8.00001 16.0001 8.00001H11.0001ZM10.0001 13C10.0001 12.4477 10.4478 12 11.0001 12H16.0001C16.5524 12 17.0001 12.4477 17.0001 13C17.0001 13.5523 16.5524 14 16.0001 14H11.0001C10.4478 14 10.0001 13.5523 10.0001 13Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    })
                })
            }
        },
        992305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceLowIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M12 2.99997C12 2.44769 11.5523 1.99997 11 1.99997H10.9399C10.6596 1.99997 10.3922 2.11762 10.2027 2.32424L5.91667 6.99997H3C2.44772 6.99997 2 7.44768 2 7.99997V16C2 16.5523 2.44772 17 3 17H5.91667L10.2027 21.6757C10.3922 21.8823 10.6596 22 10.9399 22H11C11.5523 22 12 21.5523 12 21V2.99997Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M15.1758 15.357C14.6278 15.7129 14 15.2374 14 14.584V14.3092C14 13.9522 14.2055 13.6352 14.4512 13.3762C14.7913 13.0177 15 12.5332 15 12C15 11.4668 14.7913 10.9823 14.4512 10.6237C14.2055 10.3648 14 10.0477 14 9.69075V9.41597C14 8.76253 14.6278 8.28704 15.1758 8.64295C16.2738 9.35606 17 10.5932 17 12C17 13.4067 16.2738 14.6439 15.1758 15.357Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    })]
                })
            }
        },
        352265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceXIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M12 3C12 2.44772 11.5523 2 11 2H10.9399C10.6596 2 10.3922 2.11765 10.2027 2.32428L5.91667 7H3C2.44772 7 2 7.44772 2 8V16C2 16.5523 2.44772 17 3 17H5.91667L10.2027 21.6757C10.3922 21.8824 10.6596 22 10.9399 22H11C11.5523 22 12 21.5523 12 21V3Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M22.7071 8.29289C22.3166 7.90237 21.6834 7.90237 21.2929 8.29289L19 10.5858L16.7071 8.29289C16.3166 7.90237 15.6834 7.90237 15.2929 8.29289C14.9024 8.68342 14.9024 9.31658 15.2929 9.70711L17.5858 12L15.2929 14.2929C14.9024 14.6834 14.9024 15.3166 15.2929 15.7071C15.6834 16.0976 16.3166 16.0976 16.7071 15.7071L19 13.4142L21.2929 15.7071C21.6834 16.0976 22.3166 16.0976 22.7071 15.7071C23.0976 15.3166 23.0976 14.6834 22.7071 14.2929L20.4142 12L22.7071 9.70711C23.0976 9.31658 23.0976 8.68342 22.7071 8.29289Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    })]
                })
            }
        },
        734575: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                channelEligibleForSummaries: function() {
                    return r
                },
                canSeeChannelSummaries: function() {
                    return o
                },
                canGuildUseConversationSummaries: function() {
                    return u
                },
                useChannelSummariesExperiment: function() {
                    return d
                }
            }), n("65597");
            var l = n("862205"),
                a = n("305961"),
                s = n("49111"),
                i = n("724210");
            (0, l.createExperiment)({
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

            function r(e) {
                return o(e, !0, !1)
            }

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (null == e || ! function(e) {
                        var t;
                        if (null == e) return !1;
                        let n = a.default.getGuild(null !== (t = null == e ? void 0 : e.guild_id) && void 0 !== t ? t : ""),
                            l = null != n && n.rulesChannelId === e.id;
                        return s.ChannelTypesSets.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !l
                    }(e) || !1 === t && e.hasFlag(i.ChannelFlags.SUMMARIES_DISABLED)) return !1;
                let l = a.default.getGuild(e.guild_id);
                return u(l, n)
            }

            function u(e) {
                var t;
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (null == e) return !1;
                return !!((null == (t = e.id) || t !== s.ME && t !== s.FAVORITES) && e.hasFeature(s.GuildFeatures.SUMMARIES_ENABLED_GA)) && (!n || e.hasFeature(s.GuildFeatures.SUMMARIES_ENABLED_BY_USER))
            }

            function d(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return o(e, t)
            }
        },
        554743: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var l = n("884691");

            function a(e, t) {
                let n = e.getBoundingClientRect(),
                    l = (t.clientX - n.left) / n.width;
                return Math.min(1, Math.max(0, l))
            }

            function s(e) {
                let {
                    ref: t,
                    onDrag: n,
                    onDragStart: s,
                    onDragEnd: i
                } = e, [r, o] = l.useState(!1);
                l.useEffect(() => {
                    if (r) return window.addEventListener("mouseup", e), window.addEventListener("mousemove", l), () => {
                        window.removeEventListener("mouseup", e), window.removeEventListener("mousemove", l)
                    };

                    function e() {
                        null == i || i(), o(!1)
                    }

                    function l(e) {
                        let l = t.current;
                        null != l && (null == n || n(a(l, e)))
                    }
                }, [t, r, i, n]);
                let u = l.useCallback(e => {
                    e.preventDefault();
                    let l = t.current;
                    null != l && (o(!0), null == s || s(), null == n || n(a(l, e)))
                }, [t, s, n]);
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
            var l = n("884691");

            function a(e) {
                let t = l.useRef(null),
                    n = l.useCallback(n => {
                        null != e && ("function" == typeof e ? e(n) : e.current = n, t.current = n)
                    }, [e]);
                return [t, n]
            }
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
                    return s
                },
                REACTION_START_SENTINEL: function() {
                    return i
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
                s = ":",
                i = "+:",
                r = ":",
                o = "/"
        },
        865453: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackOpenPopout: function() {
                    return f
                }
            });
            var l = n("884691"),
                a = n("913144"),
                s = n("716241"),
                i = n("412745"),
                r = n("42203"),
                o = n("18494"),
                u = n("599110"),
                d = n("958706"),
                c = n("49111");
            let f = e => {
                let {
                    emojiId: t,
                    currentGuildId: n,
                    popoutData: f,
                    emojiSourceGuildId: m,
                    nonce: h,
                    demoMode: p
                } = e, {
                    current: C
                } = l.useRef({
                    guild_id: n,
                    emoji_id: t,
                    ...(0, s.collectChannelAnalyticsMetadata)(r.default.getChannel(o.default.getChannelId(n)))
                }), g = null != f && [i.EmojiPopoutType.ADD_PACK, i.EmojiPopoutType.REMOVE_PACK, i.EmojiPopoutType.GET_PREMIUM_INVENTORY_ENABLED].includes(f.type);
                return l.useEffect(() => {
                    var e;
                    a.default.dispatch({
                        type: "EMOJI_INTERACTION_INITIATED",
                        interaction: d.EmojiInteractionPoint.TrackOpenPopoutUsed
                    }), !p && u.default.track(c.AnalyticEvents.OPEN_POPOUT, {
                        type: null !== (e = null == f ? void 0 : f.analyticsType) && void 0 !== e ? e : "Standard Emoji Popout",
                        inventory_pack_id: g ? m : void 0,
                        nonce: h,
                        ...C
                    })
                }, []), C
            }
        },
        10130: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useExplicitContentSettingOrDefault: function() {
                    return r
                }
            });
            var l = n("65597"),
                a = n("151426"),
                s = n("374363"),
                i = n("793441");
            let r = () => {
                let e = (0, l.useStateFromStoresObject)([s.default], () => {
                    var e, t;
                    return null !== (t = null === (e = s.default.settings.textAndImages) || void 0 === e ? void 0 : e.explicitContentSettings) && void 0 !== t ? t : (0, i.getExplicitContentSettingOrDefault)()
                });
                return {
                    explicitContentGuilds: (null == e ? void 0 : e.explicitContentGuilds) === void 0 || (null == e ? void 0 : e.explicitContentGuilds) === a.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? (0, i.resolveDefaultSetting)() : e.explicitContentGuilds,
                    explicitContentNonFriendDm: (null == e ? void 0 : e.explicitContentNonFriendDm) === void 0 || (null == e ? void 0 : e.explicitContentNonFriendDm) === a.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? (0, i.resolveDefaultSetting)(!0) : e.explicitContentNonFriendDm,
                    explicitContentFriendDm: (null == e ? void 0 : e.explicitContentFriendDm) === void 0 || (null == e ? void 0 : e.explicitContentFriendDm) === a.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? (0, i.resolveDefaultSetting)(!0, !0) : e.explicitContentFriendDm
                }
            }
        },
        963119: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShouldRedactExplicitContent: function() {
                    return d
                },
                useShouldRedactExplicitContentForForum: function() {
                    return c
                }
            });
            var l = n("65597"),
                a = n("42203"),
                s = n("27618"),
                i = n("697218"),
                r = n("457971"),
                o = n("793441"),
                u = n("10130");
            let d = (e, t) => {
                    let n = (0, r.useIsEligibleForExplicitMediaRedaction)(),
                        {
                            explicitContentGuilds: d,
                            explicitContentFriendDm: c,
                            explicitContentNonFriendDm: f
                        } = (0, u.useExplicitContentSettingOrDefault)(),
                        m = (0, l.default)([s.default], () => s.default.getFriendIDs().includes(t)),
                        h = (0, l.default)([i.default], () => i.default.getCurrentUser()),
                        p = (0, l.default)([a.default], () => a.default.getChannel(e));
                    if (!n || null == h || h.id === t || null == p) return !1;
                    let C = p.isDM() || p.isGroupDM();
                    return C && m ? (0, o.getShouldObscureForSetting)(c) : C ? (0, o.getShouldObscureForSetting)(f) : (0, o.getShouldObscureForSetting)(d)
                },
                c = () => {
                    let e = (0, r.useIsEligibleForExplicitMediaRedaction)(),
                        {
                            explicitContentGuilds: t
                        } = (0, u.useExplicitContentSettingOrDefault)(),
                        n = (0, l.default)([i.default], () => i.default.getCurrentUser());
                    return !!e && null != n && (0, o.getShouldObscureForSetting)(t)
                }
        },
        200521: function(e, t, n) {
            "use strict";
            var l, a, s, i;
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
            }), n("808653"), (s = l || (l = {})).BAD = "bad", s.NEUTRAL = "neutral", s.GOOD = "good";
            let r = 1024;
            (i = a || (a = {}))[i.VOICE = 0] = "VOICE", i[i.STREAM = 1] = "STREAM", i[i.VIDEO_BACKGROUND = 2] = "VIDEO_BACKGROUND", i[i.ACTIVITY = 3] = "ACTIVITY", i[i.IN_APP_REPORTS = 4] = "IN_APP_REPORTS";
            let o = [2, 1, 3, 0, 4].reduce((e, t, n) => ({
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
                    return l
                },
                useForumPostMediaThumbnail: function() {
                    return x
                },
                useForumPostMediaProperties: function() {
                    return _
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
            }), n("702976"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("808653");
            var l, a, s = n("884691"),
                i = n("651693"),
                r = n("610730"),
                o = n("845579"),
                u = n("42203"),
                d = n("377253"),
                c = n("697218"),
                f = n("568734"),
                m = n("449008"),
                h = n("49111");

            function p(e, t) {
                if (null == e || null == e.embeds[0]) return;
                let {
                    color: n
                } = e.embeds[0];
                return null != n && "#ffffff" === n.toLowerCase() || t ? void 0 : n
            }

            function C(e) {
                if (null == e) return !1;
                let {
                    filename: t,
                    height: n,
                    width: l
                } = e;
                return (0, i.isImageFile)(t) && null != n && n > 0 && null != l && l > 0
            }

            function g(e) {
                return null != e && null != e && (0, i.isVideoFile)(e.filename) && null != e.proxy_url
            }

            function E(e) {
                return C(e) || g(e)
            }(a = l || (l = {})).EMBED = "embed", a.ATTACHMENT = "attachment";

            function v(e) {
                let t = o.InlineAttachmentMedia.useSetting();
                return function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.InlineAttachmentMedia.getSetting();
                    if (!t) return [];
                    let n = null == e ? void 0 : e.attachments;
                    return null == e || null == n ? [] : n.filter(E).map(e => {
                        let {
                            proxy_url: t,
                            url: n,
                            description: l,
                            spoiler: a,
                            flags: s,
                            width: r,
                            height: o,
                            filename: u,
                            content_scan_version: d
                        } = e;
                        if (null == r || null == o) return null;
                        let c = (0, i.isVideoFile)(u),
                            m = null != e.flags && (0, f.hasFlag)(e.flags, h.MessageAttachmentFlags.IS_THUMBNAIL),
                            p = null != t ? t : n;
                        if (c) {
                            let e = new URL(t);
                            e.searchParams.append("format", "jpeg"), p = e.toString()
                        }
                        return {
                            src: p,
                            width: r,
                            height: o,
                            spoiler: null != a && a,
                            flags: s,
                            contentScanVersion: d,
                            alt: l,
                            isVideo: c,
                            isThumbnail: m,
                            type: "attachment"
                        }
                    }).filter(m.isNotNullish)
                }(e, t)
            }

            function I(e, t) {
                let n = o.InlineEmbedMedia.useSetting(),
                    l = o.RenderEmbeds.useSetting();
                if (null == e) return [];
                let a = e.embeds;
                return n && l && null != a ? a.map(e => {
                    var n;
                    let l = null !== (n = e.image) && void 0 !== n ? n : e.thumbnail;
                    if (null == l && null != e.images && (l = e.images[0]), null != l && null != l.url) {
                        let {
                            height: n,
                            proxyURL: a,
                            url: s,
                            width: r
                        } = l, o = null != a && (0, i.isVideoUrl)(a);
                        return {
                            src: null != a && "" !== a ? a : s,
                            height: n,
                            width: r,
                            spoiler: t,
                            flags: e.flags,
                            contentScanVersion: e.contentScanVersion,
                            isVideo: o,
                            type: "embed"
                        }
                    }
                }).filter(m.isNotNullish) : []
            }

            function x(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = _(e, n);
                return s.useMemo(() => {
                    if (null == t) return [];
                    if (!t.isMediaChannel()) return l;
                    {
                        let e = l.find(e => e.isThumbnail);
                        return null != e ? [e] : l
                    }
                }, [t, l])
            }

            function _(e, t) {
                let n = v(e),
                    l = I(e, t);
                return [...n, ...l]
            }

            function S(e, t) {
                var n, l;
                let a = v(e),
                    s = I(e, t);
                return null !== (l = null !== (n = a[0]) && void 0 !== n ? n : s[0]) && void 0 !== l ? l : null
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
                return null != a && e.length > 0 && null != e.find(e => e.isImage || e.isVideo) && l.isForumPost() && l.ownerId === (null === (n = c.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && 0 === r.default.getCount(l.id) && (0 === a.attachments.length || null == a.attachments.find(e => C(e) || g(e)))
            }

            function T(e) {
                return e.reduce((e, t) => ({
                    containsVideo: e.containsVideo || t.isVideo,
                    containsGif: e.containsGif || (0, i.isAnimatedImageUrl)(t.src)
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
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("75196");

            function s(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = "currentColor",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 4 4",
                    children: (0, l.jsx)("circle", {
                        cx: "2",
                        cy: "2",
                        r: "2",
                        fill: s
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
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("77078"),
                r = n("181114"),
                o = n("915675"),
                u = n("302287");

            function d(e) {
                let {
                    children: t,
                    className: n,
                    size: a = i.Button.Sizes.MEDIUM,
                    onlyShineOnHover: d = !1,
                    ...c
                } = e;
                return (0, l.jsx)(r.default, {
                    ...c,
                    color: i.Button.Colors.CUSTOM,
                    size: a,
                    className: s(u.button, n),
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
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("75196");

            function s(e) {
                let {
                    width: t = 16,
                    height: n = t,
                    color: s = "currentColor",
                    foreground: i,
                    ...r
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(r),
                    width: t,
                    height: n,
                    viewBox: "0 0 16 16",
                    children: (0, l.jsx)("path", {
                        d: "M14.3385 7.6721L10.4015 6.85189L11.891 4.56187C11.9309 4.49891 11.9482 4.42423 11.94 4.35013C11.9318 4.27603 11.8986 4.20692 11.8459 4.15421C11.7932 4.10149 11.7241 4.06829 11.65 4.06009C11.5759 4.05189 11.5012 4.0692 11.4382 4.10911L9.14822 5.59859L8.328 1.66158C8.328 1.57457 8.29345 1.49114 8.23193 1.42961C8.1704 1.36809 8.08693 1.3335 7.99992 1.3335C7.91291 1.3335 7.82944 1.36809 7.76791 1.42961C7.70639 1.49114 7.67183 1.57457 7.67183 1.66158L6.85162 5.59859L4.5616 4.10911C4.49863 4.0692 4.42395 4.05189 4.34985 4.06009C4.27576 4.06829 4.20665 4.10149 4.15393 4.15421C4.10122 4.20692 4.06802 4.27603 4.05982 4.35013C4.05162 4.42423 4.06892 4.49891 4.10884 4.56187L5.59836 6.85189L1.66134 7.6721C1.57432 7.6721 1.49086 7.70665 1.42933 7.76818C1.3678 7.8297 1.33325 7.91317 1.33325 8.00018C1.33325 8.0872 1.3678 8.17062 1.42933 8.23215C1.49086 8.29368 1.57432 8.32827 1.66134 8.32827L5.59836 9.14848L4.10884 11.4385C4.06803 11.5011 4.05031 11.5759 4.0587 11.6502C4.06708 11.7244 4.10104 11.7934 4.15477 11.8453C4.18407 11.8768 4.21963 11.9019 4.25918 11.9188C4.29874 11.9358 4.34139 11.9443 4.38442 11.9438C4.44713 11.9426 4.50835 11.9244 4.5616 11.8913L6.85162 10.4017L7.67183 14.3387C7.67183 14.4258 7.70639 14.5092 7.76791 14.5708C7.82944 14.6323 7.91291 14.6668 7.99992 14.6668C8.08693 14.6668 8.1704 14.6323 8.23193 14.5708C8.29345 14.5092 8.328 14.4258 8.328 14.3387L9.14822 10.4017L11.4382 11.8913C11.4915 11.9244 11.5527 11.9426 11.6154 11.9438C11.6585 11.9443 11.7011 11.9358 11.7407 11.9188C11.7802 11.9019 11.8158 11.8768 11.8451 11.8453C11.8988 11.7934 11.9328 11.7244 11.9411 11.6502C11.9495 11.5759 11.9318 11.5011 11.891 11.4385L10.4015 9.14848L14.3385 8.32827C14.4255 8.32827 14.509 8.29368 14.5705 8.23215C14.632 8.17062 14.6666 8.0872 14.6666 8.00018C14.6666 7.91317 14.632 7.8297 14.5705 7.76818C14.509 7.70665 14.4255 7.6721 14.3385 7.6721Z",
                        fill: s,
                        className: i
                    })
                })
            }
        },
        368639: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                parseBioReact: function() {
                    return o
                }
            });
            var l = n("176309"),
                a = n("52140"),
                s = n("888198"),
                i = n("788554");
            let r = (0, i.default)([s.default.PROFILE_BIO_RULES, (0, a.default)({
                    enableBuildOverrides: !1
                })]),
                o = l.reactParserFor(r)
        },
        52140: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return k
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("132710"),
                o = n("77078"),
                u = n("340616"),
                d = n("269936"),
                c = n("385976"),
                f = n("855920"),
                m = n("393414"),
                h = n("305961"),
                p = n("666897"),
                C = n("505684"),
                g = n("36694"),
                E = n("413709"),
                v = n("873218"),
                I = n("250832"),
                x = n("22248"),
                _ = n("28236"),
                S = n("306160"),
                N = n("794818"),
                M = n("844659"),
                T = n("657057"),
                A = n("886125"),
                j = n("180161"),
                L = n("781423"),
                y = n("47677"),
                R = n("49111"),
                b = n("724210"),
                O = n("782340"),
                D = n("862839");
            n("706250");
            var P = n("632215");

            function w(e) {
                let {
                    text: t
                } = e, [n, s] = a.useState(!1);
                return (0, l.jsx)(o.Clickable, {
                    onClick: () => {
                        try {
                            (0, S.copy)(t), s(!0)
                        } catch (e) {
                            s(!1)
                        }
                    },
                    children: n ? (0, l.jsx)(g.default, {
                        width: 16,
                        height: 16
                    }) : (0, l.jsx)(E.default, {
                        width: 16,
                        height: 16
                    })
                })
            }
            let U = {
                blockQuote: {
                    react: (e, t, n) => (0, l.jsxs)("div", {
                        className: P.blockquoteContainer,
                        children: [(0, l.jsx)("div", {
                            className: P.blockquoteDivider
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
                        let s = () => (0, l.jsx)("code", {
                            className: i(D.scrollbarGhostHairline, "hljs"),
                            children: (0, M.smartOutput)(e, t, a)
                        });
                        return (0, l.jsx)("pre", {
                            children: (0, l.jsxs)("div", {
                                className: P.codeContainer,
                                children: [S.SUPPORTS_COPY ? (0, l.jsx)("div", {
                                    className: P.codeActions,
                                    children: (0, l.jsx)(w, {
                                        text: e.content
                                    })
                                }) : null, (0, l.jsx)(d.LazyLibrary, {
                                    createPromise: () => n.el("86256").then(n.bind(n, "86256")),
                                    webpackId: "86256",
                                    renderFallback: s,
                                    render: t => {
                                        if (!(e.lang && t.hasLanguage(e.lang))) return s();
                                        {
                                            let n = t.highlight(e.lang, e.content, !0);
                                            return null == n ? s() : (0, l.jsx)("code", {
                                                className: i(D.scrollbarGhostHairline, "hljs", n.language),
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
                    react: (e, t, n) => (0, l.jsx)(C.default, {
                        type: C.default.Types.TEXT,
                        inline: n.formatInline,
                        renderTextElement: (e, t) => null == e || e.type !== u.default || t ? e : a.cloneElement(e, {
                            tabIndex: -1
                        }),
                        children: () => t(e.content, n)
                    }, n.key)
                },
                soundboard: {
                    react: e => (0, l.jsx)(_.default, {
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
                                if (null == e || null == n || !n.hasFeature(R.GuildFeatures.COMMUNITY)) return;
                                let l = {
                                        home: b.StaticChannelRoute.GUILD_HOME,
                                        browse: b.StaticChannelRoute.CHANNEL_BROWSER,
                                        customize: b.StaticChannelRoute.CUSTOMIZE_COMMUNITY,
                                        guide: b.StaticChannelRoute.GUILD_HOME
                                    },
                                    a = l[t],
                                    s = h.default.getGuild(e);
                                if ((null == s ? void 0 : s.joinedAt) == null) {
                                    N.startLurking(e, {}, {
                                        channelId: a
                                    });
                                    return
                                }(0, m.transitionTo)(R.Routes.CHANNEL(e, a))
                            }(e.guildId, e.channelId)
                        };
                        if (!(0, M.isStaticRouteIconType)(e.channelId)) return null;
                        let s = "".concat(e.channelId);
                        switch (e.channelId) {
                            case b.StaticChannelId.GUILD_HOME:
                            case b.StaticChannelId.SERVER_GUIDE:
                                s = O.default.Messages.SERVER_GUIDE;
                                break;
                            case b.StaticChannelId.CHANNEL_BROWSER:
                                s = O.default.Messages.GUILD_SIDEBAR_CHANNEL_BROWSER;
                                break;
                            case b.StaticChannelId.CUSTOMIZE_COMMUNITY:
                                s = O.default.Messages.CHANNELS_AND_ROLES
                        }
                        return (0, l.jsx)(o.Tooltip, {
                            text: s,
                            position: "top",
                            children: s => {
                                let {
                                    onMouseEnter: i,
                                    onMouseLeave: r
                                } = s;
                                return (0, l.jsx)(p.default, {
                                    role: "link",
                                    onClick: a,
                                    onMouseEnter: i,
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
                            className: n.formatInline ? P.inlineFormat : null,
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
                            className: n.formatInline ? P.inlineFormat : null
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
                    react: (e, t, n) => (0, l.jsx)(x.default, {}, n.key)
                }
            };

            function k(e) {
                return {
                    ...U,
                    link: (0, y.default)(e),
                    emoji: function(e) {
                        let {
                            emojiTooltipPosition: t = "top",
                            enableEmojiClick: n = !0
                        } = e;
                        return {
                            react(e, a, s) {
                                let {
                                    key: i
                                } = s;
                                return e.src ? (0, l.jsx)(f.MessageStandardEmoji, {
                                    node: e,
                                    tooltipPosition: t,
                                    enableClick: n
                                }, i) : (0, l.jsx)("span", {
                                    children: e.surrogate
                                }, i)
                            }
                        }
                    }(e),
                    customEmoji: function(e) {
                        let {
                            emojiTooltipPosition: t = "top",
                            enableEmojiClick: n = !0
                        } = e;
                        return {
                            react(e, a, s) {
                                let {
                                    key: i,
                                    guildId: r,
                                    isInteracting: o
                                } = s, u = c.default.getDisambiguatedEmojiContext(r).getById(e.emojiId);
                                if (null != u) {
                                    let t = u.require_colons;
                                    e = {
                                        ...e,
                                        name: t ? ":".concat(u.name, ":") : u.name
                                    }
                                }
                                return (0, l.jsx)(f.MessageCustomEmoji, {
                                    isInteracting: o,
                                    node: e,
                                    tooltipPosition: t,
                                    enableClick: n
                                }, i)
                            }
                        }
                    }(e),
                    channelMention: (0, j.default)(e),
                    commandMention: (0, L.default)(e),
                    attachmentLink: (0, A.default)(e)
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
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("683012"),
                i = n("632215");

            function r(e) {
                let {
                    node: t
                } = e, n = (0, s.default)(t);
                return (0, l.jsx)(a.Tooltip, {
                    text: t.full,
                    tooltipClassName: i.timestampTooltip,
                    children: e => (0, l.jsx)("span", {
                        ...e,
                        className: i.timestamp,
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
            }), n("222007");
            var l = n("884691"),
                a = n("866227"),
                s = n.n(a),
                i = n("775560"),
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
                let t = (0, i.useForceUpdate)();
                return (l.useEffect(() => {
                    if ("R" !== e.format) return;
                    let n = 1e3 * d,
                        l = Math.abs(e.parsed.diff(s()));
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
        886125: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("641531"),
                r = n("77078"),
                o = n("272030"),
                u = n("545158"),
                d = n("765089"),
                c = n("666897"),
                f = n("844659"),
                m = n("49111"),
                h = n("909266"),
                p = n("671934");

            function C(e) {
                return {
                    react(t, a, C) {
                        let g = C.noStyleAndInteraction ? void 0 : n => {
                                e.shouldStopPropagation && (null == n || n.stopPropagation()), d.default.trackLinkClicked(t.attachmentUrl), e.shouldCloseDefaultModals && (0, r.closeAllModals)(), (0, u.default)(t.attachmentUrl)
                            },
                            E = C.noStyleAndInteraction ? m.NOOP : e => {
                                (0, o.openContextMenuLazy)(e, async () => {
                                    let {
                                        default: e
                                    } = await n.el("136394").then(n.bind(n, "136394"));
                                    return n => (0, l.jsx)(e, {
                                        ...n,
                                        attachmentUrl: t.attachmentUrl,
                                        attachmentName: t.attachmentName
                                    })
                                })
                            };
                        return (0, l.jsxs)(c.default, {
                            role: "link",
                            href: t.attachmentUrl,
                            onClick: g,
                            onContextMenu: E,
                            className: "attachmentLink",
                            children: [(0, l.jsx)(i.AttachmentIcon, {
                                className: s(p.icon, h.icon),
                                color: r.tokens.colors.MENTION_FOREGROUND,
                                width: 16,
                                height: 16
                            }), (0, f.smartOutput)(t, a, C)]
                        }, C.key)
                    }
                }
            }
        },
        180161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("272030"),
                i = n("987317"),
                r = n("765089"),
                o = n("361572"),
                u = n("537325"),
                d = n("233069"),
                c = n("42203"),
                f = n("305961"),
                m = n("666897"),
                h = n("848825"),
                p = n("794818"),
                C = n("844659"),
                g = n("49111");
            async function E(e, t, n) {
                if (null == t) return;
                if (r.default.trackDiscordLinkClicked({
                        guildId: e,
                        channelId: t,
                        messageId: n
                    }), null != e) {
                    let n = f.default.getGuild(e);
                    if ((null == n ? void 0 : n.joinedAt) == null) try {
                        await p.startLurking(e, {}, {
                            channelId: t
                        });
                        return
                    } catch {}
                }
                let l = c.default.getChannel(t);
                if (null != l && null == n && (0, d.isGuildVocalChannelType)(l.type) && (0, o.canViewChannel)(l)) {
                    i.default.selectVoiceChannel(l.id);
                    return
                }(0, u.default)(g.Routes.CHANNEL(e, t, n))
            }

            function v(e) {
                return {
                    react(t, i, r) {
                        let o = c.default.getChannel(t.channelId),
                            u = r.noStyleAndInteraction ? void 0 : n => {
                                e.shouldStopPropagation && (null == n || n.stopPropagation()), E(t.guildId, t.channelId, t.messageId), e.shouldCloseDefaultModals && (0, a.closeAllModals)()
                            },
                            d = r.noStyleAndInteraction || null == t.channelId || null == o && null == t.originalLink ? g.NOOP : e => {
                                (0, s.openContextMenuLazy)(e, async () => {
                                    let {
                                        default: e
                                    } = await n.el("454000").then(n.bind(n, "454000"));
                                    return n => {
                                        var a;
                                        return (0, l.jsx)(e, {
                                            ...n,
                                            channel: o,
                                            channelId: null !== (a = null == o ? void 0 : o.id) && void 0 !== a ? a : t.channelId,
                                            originalLink: t.originalLink,
                                            messageId: t.messageId
                                        })
                                    }
                                })
                            };
                        return (0, l.jsxs)(m.default, {
                            role: "link",
                            onClick: u,
                            onContextMenu: d,
                            className: "channelMention",
                            children: [null != t.inContent ? i(t.inContent, r) : null, null != t.inContent ? (0, l.jsx)(h.default, {}) : null, (0, C.smartOutput)(t, i, r)]
                        }, r.key)
                    }
                }
            }
        },
        781423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CommandClickable: function() {
                    return M
                },
                default: function() {
                    return T
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("507217"),
                o = n("240249"),
                u = n("524768"),
                d = n("300322"),
                c = n("845579"),
                f = n("42203"),
                m = n("474643"),
                h = n("957255"),
                p = n("18494"),
                C = n("666897"),
                g = n("659500"),
                E = n("49111"),
                v = n("317041"),
                I = n("406291"),
                x = n("782340"),
                _ = n("781606");

            function S(e, t, n, a) {
                if (null == e) return;
                let s = () => {
                    let l = f.default.getChannel(e);
                    if (null == l) return;
                    let {
                        command: s,
                        application: i
                    } = o.getCachedCommand(l, n);
                    if (null != s && s.name === t) {
                        var d, c;
                        g.ComponentDispatch.dispatch(E.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: e
                        });
                        let t = null != i ? {
                            type: u.ApplicationCommandSectionType.APPLICATION,
                            id: i.id,
                            icon: null !== (c = null == i ? void 0 : null === (d = i.bot) || void 0 === d ? void 0 : d.username) && void 0 !== c ? c : i.icon,
                            name: i.name,
                            application: i
                        } : null;
                        r.setActiveCommand({
                            channelId: e,
                            command: null,
                            section: null
                        }), r.setActiveCommand({
                            channelId: e,
                            command: s,
                            section: t,
                            location: a
                        })
                    }
                };
                "" !== m.default.getDraft(e, m.DraftType.ChannelMessage) ? (0, i.openModal)(t => (0, l.jsx)(i.ConfirmModal, {
                    header: x.default.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_HEADER,
                    confirmText: x.default.Messages.CLEAR,
                    cancelText: x.default.Messages.CANCEL,
                    onConfirm: () => s(),
                    confirmButtonColor: i.Button.Colors.BRAND,
                    onCloseCallback: () => {
                        g.ComponentDispatch.dispatch(E.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: e
                        })
                    },
                    ...t,
                    children: (0, l.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: x.default.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_BODY
                    })
                })) : s()
            }

            function N(e) {
                var t;
                let {
                    node: n,
                    output: r,
                    state: m
                } = e, g = (0, s.useStateFromStores)([f.default, p.default], () => {
                    var e;
                    return f.default.getChannel(null !== (e = n.channelId) && void 0 !== e ? e : p.default.getChannelId())
                }, [n.channelId]), {
                    hasSendMessagePerm: x,
                    hasUseAppCommandsPerm: _
                } = (0, s.useStateFromStoresObject)([h.default], () => {
                    let e = h.default.can(E.Permissions.SEND_MESSAGES, g),
                        t = h.default.can(E.Permissions.USE_APPLICATION_COMMANDS, g);
                    return {
                        hasSendMessagePerm: e,
                        hasUseAppCommandsPerm: t
                    }
                }), {
                    command: N
                } = o.useCommand(g, null !== (t = n.commandKey) && void 0 !== t ? t : ""), M = c.UseLegacyChatInput.useSetting(), T = a.useMemo(() => {
                    if (null == N || null == g || N.name !== n.commandName || M) return !1;
                    let e = g.isPrivate(),
                        t = (0, d.computeIsReadOnlyThread)(g);
                    if (t || !e && !x) return !1;
                    let l = (null == N ? void 0 : N.applicationId) === v.BuiltInSectionId.BUILT_IN;
                    return !!e || !!l || !!_ || !1
                }, [g, N, x, _, n.commandName, M]), A = a.useCallback(e => {
                    null == e || e.stopPropagation(), null != g && null != n.commandName && null != n.commandKey && S(g.id, n.commandName, n.commandKey, u.ApplicationCommandTriggerLocations.MENTION)
                }, [g, n.commandKey, n.commandName]);
                return T ? (0, l.jsx)(i.Tooltip, {
                    text: n.output,
                    position: "top",
                    children: e => {
                        let {
                            onMouseEnter: t,
                            onMouseLeave: a
                        } = e;
                        return (0, l.jsxs)(C.default, {
                            role: "link",
                            onClick: A,
                            onMouseEnter: t,
                            onMouseLeave: a,
                            children: [I.COMMAND_SENTINEL, r(n.content, m)]
                        }, m.key)
                    }
                }, m.key) : (0, l.jsxs)("span", {
                    children: [I.COMMAND_SENTINEL, r(n.content, m)]
                })
            }

            function M(e) {
                let {
                    commandId: t,
                    commandName: n,
                    commandDescription: a,
                    onClick: r
                } = e, o = (0, s.useStateFromStores)([p.default], () => p.default.getChannelId()), d = e => {
                    null == e || e.stopPropagation(), S(o, n, t, u.ApplicationCommandTriggerLocations.POPULAR_COMMANDS), null == r || r(t)
                };
                return (0, l.jsx)(i.Tooltip, {
                    text: a,
                    position: "top",
                    tooltipContentClassName: _.tooltip,
                    children: e => {
                        let {
                            onMouseEnter: t,
                            onMouseLeave: a
                        } = e;
                        return (0, l.jsxs)(i.Button, {
                            color: i.ButtonColors.PRIMARY,
                            size: i.ButtonSizes.ICON,
                            onClick: d,
                            onMouseEnter: t,
                            onMouseLeave: a,
                            children: ["/", n]
                        })
                    }
                })
            }

            function T(e) {
                return {
                    react: (e, t, n) => (0, l.jsx)(N, {
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
                    return i
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("333987"),
                i = a.forwardRef(function(e, t) {
                    let {
                        muted: n,
                        volume: i,
                        playing: r,
                        ...o
                    } = e, [u, d] = (0, s.default)(t);
                    return a.useEffect(() => {
                        let e = u.current;
                        if (null != e) void 0 !== n && (e.muted = n)
                    }, [u, n]), a.useEffect(() => {
                        let e = u.current;
                        if (null != e) void 0 !== i && (e.volume = i)
                    }, [u, i]), a.useEffect(() => {
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
                    return l
                },
                getObscureReason: function() {
                    return E
                },
                getObscureReasonForEmbed: function() {
                    return v
                },
                getForumPostShouldObscure: function() {
                    return I
                },
                useShouldObscure: function() {
                    return x
                },
                getObscuredAlt: function() {
                    return _
                }
            }), n("702976"), n("794252");
            var l, a, s = n("506838"),
                i = n("65597"),
                r = n("676574"),
                o = n("793441"),
                u = n("963119"),
                d = n("791234"),
                c = n("845579"),
                f = n("377253"),
                m = n("957255"),
                h = n("568734"),
                p = n("70845"),
                C = n("49111"),
                g = n("782340");
            (a = l || (l = {})).SPOILER = "spoiler", a.EXPLICIT_CONTENT = "explicit_content", a.POTENTIAL_EXPLICIT_CONTENT = "potential_explicit_content";
            let E = (e, t) => {
                    let {
                        spoiler: n,
                        flags: l = 0,
                        content_scan_version: a
                    } = e;
                    return t && (0, o.isPendingScan)(a) ? "potential_explicit_content" : t && ((0, h.hasFlag)(l, C.MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA) || r.default.get("obscure_blur_effect_enabled")) ? "explicit_content" : n || (0, h.hasFlag)(l, C.MessageAttachmentFlags.IS_SPOILER) ? "spoiler" : null
                },
                v = (e, t, n, l, a) => {
                    let {
                        flags: s = 0,
                        contentScanVersion: i
                    } = e, u = f.default.getMessage(t, n);
                    return null == u ? null : a && (0, o.isPendingScan)(i) ? "potential_explicit_content" : a && ((0, h.hasFlag)(s, C.MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA) || r.default.get("obscure_blur_effect_enabled")) ? "explicit_content" : l ? "spoiler" : null
                };

            function I(e, t, n) {
                if (null == e) return [!1, void 0];
                if (n && (0, o.isPendingScan)(e.contentScanVersion)) return [!0, "potential_explicit_content"];
                let l = function(e) {
                    switch (e) {
                        case d.ForumPostMediaTypes.EMBED:
                            return o.ObscuredMediaTypes.Embed;
                        case d.ForumPostMediaTypes.ATTACHMENT:
                            return o.ObscuredMediaTypes.Attachment;
                        default:
                            return
                    }
                }(e.type);
                return null != l && (0, o.isMediaObscured)({
                    type: l,
                    media: e
                }, n) ? [!0, "explicit_content"] : e.spoiler ? [t, "spoiler"] : [!1, void 0]
            }

            function x(e) {
                let {
                    channel: t,
                    media: n
                } = e, l = (0, i.default)([m.default], () => null != t && m.default.can(C.Permissions.MANAGE_MESSAGES, t)), a = c.RenderSpoilers.useSetting(), s = (0, u.useShouldRedactExplicitContentForForum)();
                return I(n, !(0, p.default)(a, l), s)
            }
            let _ = e => (0, s.match)(e).with("explicit_content", () => g.default.Messages.EXPLICIT_CONTENT_ALT).with("spoiler", () => g.default.Messages.SPOILER_HIDDEN_A11Y_LABEL).otherwise(() => void 0)
        },
        277855: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSoundmojiExperiment: function() {
                    return s
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

            function s(e) {
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
            }), n("65597"), n("845579"), n("957255");
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
                    return v
                },
                MessageCustomEmoji: function() {
                    return I
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("748820"),
                o = n("77078"),
                u = n("913144"),
                d = n("430568"),
                c = n("716241"),
                f = n("599110"),
                m = n("459698"),
                h = n("933629"),
                p = n("49111"),
                C = n("958706"),
                g = n("646718"),
                E = n("228551");
            let v = e => {
                    var t;
                    let {
                        node: n,
                        tooltipPosition: a = h.EXPRESSION_TOOLTIP_PROPS.position,
                        enableClick: s = !0
                    } = e, r = null === (t = n.originalMatch) || void 0 === t ? void 0 : t[0], u = null != r ? r : n.name, c = e => (0, l.jsx)(d.default, {
                        ...e,
                        emojiName: n.name,
                        size: n.jumboable ? "jumbo" : "default",
                        src: n.src,
                        alt: r,
                        animated: !1
                    }), f = e => (0, l.jsx)(o.Tooltip, {
                        text: (0, h.renderClickableTooltipNode)(n.name, s),
                        "aria-label": u,
                        ...h.EXPRESSION_TOOLTIP_PROPS,
                        position: a,
                        onTooltipShow: () => {
                            s && x({
                                emojiNode: n,
                                isCustomEmoji: !1
                            })
                        },
                        children: t => (0, l.jsx)(o.Clickable, {
                            ...e,
                            tag: "span",
                            className: i(E.emojiContainer, {
                                [E.emojiContainerClickable]: s
                            }),
                            children: c(t)
                        })
                    });
                    return s ? (0, l.jsx)(o.Popout, {
                        animation: o.Popout.Animation.TRANSLATE,
                        align: "center",
                        autoInvert: !0,
                        nudgeAlignIntoViewport: !0,
                        position: "right",
                        renderPopout: e => (0, l.jsx)(m.MessageStandardEmojiPopout, {
                            ...e,
                            node: n
                        }),
                        children: f
                    }) : f()
                },
                I = e => {
                    let {
                        node: t,
                        isInteracting: n,
                        tooltipPosition: s = h.EXPRESSION_TOOLTIP_PROPS.position,
                        enableClick: c = !0
                    } = e, [g, v] = a.useState(String(Date.now())), [I, _] = a.useState(!1), S = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, l.jsx)(d.default, {
                            ...e,
                            emojiName: t.name,
                            size: t.jumboable ? "jumbo" : "default",
                            emojiId: t.emojiId,
                            animated: t.animated,
                            isInteracting: n
                        })
                    }, N = (0, r.v4)(), M = e => (0, l.jsx)(o.Tooltip, {
                        text: (0, h.renderClickableTooltipNode)(t.name, c),
                        "aria-label": t.name,
                        ...h.EXPRESSION_TOOLTIP_PROPS,
                        position: s,
                        onTooltipShow: () => {
                            _(!0), c && (x({
                                emojiNode: t,
                                isCustomEmoji: !0,
                                nonce: N
                            }), u.default.dispatch({
                                type: "EMOJI_INTERACTION_INITIATED",
                                interaction: C.EmojiInteractionPoint.CustomEmojiTooltipShown
                            }))
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
                                I && (f.default.track(p.AnalyticEvents.CLOSE_POPOUT, {
                                    nonce: N
                                }), _(!1))
                            },
                            tag: "span",
                            className: i(E.emojiContainer, {
                                [E.emojiContainerClickable]: c
                            }),
                            children: S(t)
                        })
                    });
                    return c ? (0, l.jsx)(o.Popout, {
                        animation: o.Popout.Animation.FADE,
                        align: "center",
                        onRequestClose: () => {
                            f.default.track(p.AnalyticEvents.CLOSE_POPOUT, {
                                nonce: N
                            }), _(!1)
                        },
                        autoInvert: !0,
                        nudgeAlignIntoViewport: !0,
                        position: "right",
                        renderPopout: e => (0, l.jsx)(m.MessageCustomEmojiPopout, {
                            ...e,
                            node: t,
                            refreshPositionKey: () => v(String(Date.now())),
                            nonce: N
                        }),
                        positionKey: g,
                        children: M
                    }) : M()
                },
                x = e => {
                    let {
                        emojiNode: t,
                        isCustomEmoji: n,
                        nonce: l
                    } = e;
                    c.default.trackWithMetadata(p.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
                        type: g.PremiumUpsellTypes.EMOJI_IN_MESSAGE_HOVER,
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
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("759843"),
                o = n("446674"),
                u = n("130969"),
                d = n("77078"),
                c = n("851387"),
                f = n("430568"),
                m = n("812204"),
                h = n("685665"),
                p = n("428958"),
                C = n("736271"),
                g = n("865453"),
                E = n("298878"),
                v = n("153043"),
                I = n("256941"),
                x = n("270295"),
                _ = n("529932"),
                S = n("557562"),
                N = n("446066"),
                M = n("626301"),
                T = n("635956"),
                A = n("393414"),
                j = n("18494"),
                L = n("162771"),
                y = n("697218"),
                R = n("145131"),
                b = n("791106"),
                O = n("580357"),
                D = n("476263"),
                P = n("98292"),
                w = n("256170"),
                U = n("216422"),
                k = n("587974"),
                V = n("599110"),
                F = n("315102"),
                B = n("794818"),
                H = n("719923"),
                G = n("412745"),
                W = n("933629"),
                z = n("49111"),
                Z = n("724210"),
                Y = n("646718"),
                K = n("782340"),
                X = n("154403");
            let J = () => {
                    let e = (0, o.useStateFromStores)([L.default], () => L.default.getGuildId());
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
                        currentGuildId: L.default.getGuildId()
                    }), (0, l.jsx)(u.Dialog, {
                        children: (0, l.jsx)(W.MessagePopoutContent, {
                            children: (0, l.jsxs)(R.default, {
                                className: X.emojiSection,
                                children: [(0, l.jsx)(f.default, {
                                    emojiName: t.name,
                                    className: X.primaryEmoji,
                                    src: t.src,
                                    animated: !1,
                                    size: "jumbo"
                                }), (0, l.jsxs)(R.default, {
                                    direction: R.default.Direction.VERTICAL,
                                    justify: R.default.Justify.CENTER,
                                    className: X.truncatingText,
                                    children: [(0, l.jsx)(d.Text, {
                                        className: X.emojiName,
                                        variant: "text-md/semibold",
                                        children: (0, l.jsx)(P.default, {
                                            children: t.name
                                        })
                                    }), (0, l.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        children: K.default.Messages.EMOJI_POPOUT_STANDARD_EMOJI_DESCRIPTION
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
                        id: s,
                        icon: r,
                        name: o
                    } = t, u = F.default.getGuildIconURL({
                        id: s,
                        icon: r,
                        size: 32,
                        canAnimate: !0
                    });
                    n = null == n || n;
                    let c = n || t.isDiscoverable(),
                        f = () => {
                            t.isDiscoverable() ? (0, B.startLurking)(s, {}) : n && (0, A.transitionTo)(z.Routes.CHANNEL(s, j.default.getChannelId(s)))
                        },
                        m = t.isDiscoverable() && null != t.presenceCount,
                        h = () => {
                            let e = !a && !n;
                            return (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    children: K.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                        membersOnline: t.presenceCount
                                    })
                                }), (0, l.jsx)("div", {
                                    className: X.dotSeparator
                                }), e ? (0, l.jsx)(d.Clickable, {
                                    className: X.joinGuildLink,
                                    onClick: f,
                                    children: (0, l.jsx)(d.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-link",
                                        children: K.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
                                    })
                                }) : (0, l.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    children: K.default.Messages.EMOJI_POPOUT_PUBLIC_SERVER
                                })]
                            })
                        };
                    return (0, l.jsxs)(R.default, {
                        align: R.default.Align.CENTER,
                        children: [(0, l.jsx)(k.default, {
                            mask: k.default.Masks.SQUIRCLE,
                            width: 32,
                            height: 32,
                            className: X.guildIconContainer,
                            children: (() => {
                                let e = null != u && c;
                                return e ? (0, l.jsxs)(d.Clickable, {
                                    "aria-label": o,
                                    onClick: f,
                                    children: [(0, l.jsx)("img", {
                                        src: u,
                                        alt: "",
                                        className: X.guildIcon
                                    }), " :"]
                                }) : (0, l.jsx)(D.default, {
                                    size: D.default.Sizes.SMALL,
                                    className: X.guildIconNotClickable,
                                    guild: t
                                })
                            })()
                        }), (0, l.jsxs)(R.default, {
                            direction: R.default.Direction.VERTICAL,
                            className: i(X.guildInformation, X.truncatingText),
                            children: [(0, l.jsxs)(R.default, {
                                align: R.default.Align.CENTER,
                                children: [(0, l.jsx)(O.default, {
                                    guild: t,
                                    className: X.guildBadge
                                }), c ? (0, l.jsx)(d.Clickable, {
                                    onClick: f,
                                    className: X.truncatingText,
                                    children: (0, l.jsx)(d.Heading, {
                                        className: X.guildName,
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
                            }), (0, l.jsx)(R.default, {
                                align: R.default.Align.CENTER,
                                children: m ? h() : (0, l.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    children: K.default.Messages.EMOJI_POPOUT_PRIVATE_SERVER
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
                        nonce: s
                    } = e, {
                        expressionSourceGuild: i,
                        joinedEmojiSourceGuildRecord: r,
                        emoji: o,
                        isFetching: d
                    } = (0, _.useEmojiAndSourceGuild)({
                        emojiId: t.emojiId,
                        refreshPositionKey: a
                    });
                    return d ? (0, l.jsx)(W.PopoutLoadingAnimation, {}) : (0, l.jsx)(u.Dialog, {
                        "aria-label": t.name,
                        children: (0, l.jsx)(ee, {
                            node: t,
                            guildEmoji: null != o ? o : void 0,
                            expressionSourceGuild: i,
                            joinedEmojiSourceGuildRecord: r,
                            closePopout: n,
                            onToggleShowMoreEmojis: a,
                            demoMode: !1,
                            nonce: s
                        })
                    })
                },
                ee = e => {
                    var t, n, s;
                    let {
                        node: u,
                        expressionSourceGuild: E,
                        joinedEmojiSourceGuildRecord: S,
                        closePopout: A,
                        onToggleShowMoreEmojis: j,
                        guildEmoji: b,
                        demoMode: O = !1,
                        nonce: D
                    } = e, U = (0, o.useStateFromStores)([y.default], () => y.default.getCurrentUser()), k = (0, o.useStateFromStores)([L.default], () => L.default.getGuildId()), F = H.default.isPremium(U), B = null != k && (k === (null == E ? void 0 : E.id) || k === (null == S ? void 0 : S.id)), q = null != S, $ = null !== (t = null == E ? void 0 : E.isDiscoverable()) && void 0 !== t && t;
                    O && (F = !0, $ = !0, q = !1, B = !1);
                    let ee = J(),
                        {
                            isRoleSubscriptionEmoji: en,
                            isUnusableRoleSubscriptionEmoji: el,
                            userIsRoleSubscriber: ea
                        } = a.useMemo(() => null == b ? {
                            isRoleSubscriptionEmoji: !1,
                            isUnusableRoleSubscriptionEmoji: !1,
                            userIsRoleSubscriber: !1
                        } : {
                            isRoleSubscriptionEmoji: v.isPurchasableRoleSubscriptionEmoji(b),
                            isUnusableRoleSubscriptionEmoji: v.isUnusableRoleSubscriptionEmoji(b, null != k ? k : void 0),
                            userIsRoleSubscriber: I.default.getUserSubscriptionRoles(b.guildId).size > 0
                        }, [b, k]),
                        es = !!el && (0, C.shouldHideGuildPurchaseEntryPoints)(null == b ? void 0 : b.guildId),
                        {
                            analyticsLocations: ei
                        } = (0, h.default)(m.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
                    (0, p.default)({
                        type: r.ImpressionTypes.MODAL,
                        name: r.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                        properties: {
                            location_stack: ei,
                            emoji_guild_id: null !== (n = null == b ? void 0 : b.guildId) && void 0 !== n ? n : null,
                            emoji_id: null !== (s = null == b ? void 0 : b.id) && void 0 !== s ? s : null
                        }
                    }, {
                        disableTrack: !en
                    });
                    let er = L.default.getGuildId(),
                        eo = (0, _.usePackCollectionData)({
                            expressionSourceGuild: E
                        }),
                        eu = eo.collectEnabled,
                        ed = (0, G.getEmojiPopoutData)({
                            isPremium: F,
                            hasJoinedEmojiSourceGuild: q,
                            isRoleSubscriptionEmoji: en,
                            isUnusableRoleSubscriptionEmoji: el,
                            userIsRoleSubscriber: ea,
                            emojiComesFromCurrentGuild: B,
                            isDiscoverable: $,
                            shouldHideRoleSubscriptionCTA: es,
                            onOpenPremiumSettings: () => {
                                A(), V.default.track(z.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                                    location_page: ee.page,
                                    location_section: ee.section
                                }), (0, M.navigateToPremiumMarketingPage)()
                            },
                            packCollectionData: eo
                        }),
                        ec = q && el && !es && (F && en || !F),
                        ef = ed.emojiDescription,
                        em = (0, g.useTrackOpenPopout)({
                            emojiId: u.emojiId,
                            currentGuildId: er,
                            popoutData: ed,
                            emojiSourceGuildId: null == E ? void 0 : E.id,
                            nonce: D,
                            demoMode: O
                        }),
                        eh = ed.type === G.EmojiPopoutType.JOIN_GUILD,
                        ep = ed.type === G.EmojiPopoutType.GET_PREMIUM_INVENTORY_DISABLED,
                        [eC, eg] = a.useState(eu),
                        eE = $ || q && !B || eu && null != E;
                    return (0, l.jsxs)(W.MessagePopoutContent, {
                        className: X.popoutContent,
                        children: [(() => {
                            let e = async () => {
                                if (O || null == E || q) return;
                                A();
                                let e = E.id;
                                try {
                                    await c.default.joinGuild(e), c.default.transitionToGuildSync(e)
                                } catch {}
                            }, t = !q && $;
                            return (0, l.jsxs)("div", {
                                className: X.emojiSection,
                                children: [(0, l.jsxs)(R.default, {
                                    children: [(0, l.jsx)(f.default, {
                                        className: X.primaryEmoji,
                                        emojiId: u.emojiId,
                                        emojiName: u.name,
                                        animated: u.animated,
                                        size: "jumbo"
                                    }), (0, l.jsxs)(R.default, {
                                        direction: R.default.Direction.VERTICAL,
                                        justify: R.default.Justify.CENTER,
                                        className: X.truncatingText,
                                        children: [(0, l.jsx)(d.Text, {
                                            variant: "text-md/semibold",
                                            children: (0, l.jsx)(P.default, {
                                                children: u.name
                                            })
                                        }), null != ef && (0, l.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            children: ef
                                        })]
                                    })]
                                }), ep ? (0, l.jsx)(T.default, {
                                    className: X.ctaButton,
                                    subscriptionTier: Y.PremiumSubscriptionSKUs.TIER_2,
                                    size: d.Button.Sizes.SMALL,
                                    fullWidth: !0,
                                    buttonText: ed.text,
                                    onSubscribeModalClose: t => t ? e() : A(),
                                    postSuccessGuild: t && null != E ? E : void 0,
                                    premiumModalAnalyticsLocation: ee
                                }) : eh ? (0, l.jsx)(d.Button, {
                                    size: d.Button.Sizes.SMALL,
                                    className: X.ctaButton,
                                    color: d.ButtonColors.BRAND,
                                    fullWidth: !0,
                                    onClick: e,
                                    children: ed.text
                                }) : void 0, ec && (0, l.jsx)(x.default, {
                                    className: X.ctaButton,
                                    size: d.Button.Sizes.SMALL,
                                    fullWidth: !0,
                                    onClick: () => {
                                        A(), (null == S ? void 0 : S.id) != null && c.default.transitionToGuildSync(S.id, void 0, Z.StaticChannelRoute.ROLE_SUBSCRIPTIONS, [m.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL])
                                    },
                                    children: ea ? K.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_BUTTON : K.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_BUTTON
                                })]
                            })
                        })(), eE && (() => {
                            let e = q || null != eo.collectedPack,
                                t = null != E && !q && ($ || eu),
                                n = () => {
                                    t && (null == j || j(), !eC && !O && V.default.track(z.AnalyticEvents.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, em), eg(!eC))
                                };
                            return (0, l.jsxs)("div", {
                                className: X.guildSection,
                                children: [(0, l.jsx)(d.FormTitle, {
                                    className: X.guildTitle,
                                    children: e ? K.default.Messages.EMOJI_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : K.default.Messages.EMOJI_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
                                }), (0, l.jsx)(Q, {
                                    expressionSourceGuild: null != E ? E : N.default.createFromGuildRecord(S),
                                    hasJoinedExpressionSourceGuild: q,
                                    isDisplayingJoinGuildButtonInPopout: eh
                                }), t && (0, l.jsxs)(l.Fragment, {
                                    children: [!eu && (() => {
                                        let e = K.default.Messages.EMOJI_POPOUT_SHOW_MORE_EMOJIS;
                                        return (0, l.jsx)(d.Clickable, {
                                            onClick: n,
                                            className: X.showMoreEmojis,
                                            children: (0, l.jsxs)(R.default, {
                                                children: [(0, l.jsx)(d.Text, {
                                                    className: X.showMoreEmojisLabel,
                                                    "aria-label": e,
                                                    variant: "text-xs/normal",
                                                    color: "none",
                                                    children: e
                                                }), (0, l.jsx)(w.default, {
                                                    className: i(X.showMoreEmojisArrow, {
                                                        [X.showMoreEmojisArrowCollapsed]: !eC
                                                    })
                                                })]
                                            })
                                        })
                                    })(), null != u.emojiId && eC && (0, l.jsx)(et, {
                                        emojiId: u.emojiId,
                                        expressionSourceGuild: E,
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
                        hasJoinedEmojiSourceGuild: s,
                        popoutData: i,
                        packCollectionData: r,
                        onClose: o,
                        isDisplayingButtonInTopSection: u,
                        nonce: c
                    } = e, m = r.isPremium, h = (null !== (t = null == a ? void 0 : a.emojis) && void 0 !== t ? t : []).slice(0, 13).filter(e => e.id !== n).slice(0, 12), {
                        type: p,
                        description: C
                    } = i;
                    return (0, l.jsxs)(R.default, {
                        wrap: R.default.Wrap.WRAP,
                        align: R.default.Align.CENTER,
                        justify: R.default.Justify.CENTER,
                        className: X.otherEmojisContainer,
                        children: [s ? null : h.map(e => (0, l.jsx)(d.Tooltip, {
                            text: e.require_colons ? ":".concat(e.name, ":") : e.name,
                            ...W.EXPRESSION_TOOLTIP_PROPS,
                            children: t => (0, l.jsx)(f.default, {
                                className: X.otherEmoji,
                                emojiId: e.id,
                                animated: e.animated,
                                ...t
                            })
                        }, e.id)), !u && (() => {
                            if (p === G.EmojiPopoutType.ADD_PACK || p === G.EmojiPopoutType.REMOVE_PACK) {
                                var e;
                                let t = (null !== (e = null == a ? void 0 : a.emojis) && void 0 !== e ? e : []).find(e => e.id === n),
                                    s = (0, S.getAddOrRemovePackHandler)({
                                        expressionSourceGuild: a,
                                        action: p,
                                        onComplete: o,
                                        nonce: c,
                                        expressionName: null == t ? void 0 : t.name
                                    }),
                                    u = m && r.showTryPacksModalAndV2Copy;
                                return (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)(E.default, {
                                        className: X.betaTag,
                                        color: "white"
                                    }), (0, l.jsx)(d.Button, {
                                        size: d.Button.Sizes.SMALL,
                                        className: X.inventoryCtaButton,
                                        fullWidth: !0,
                                        onClick: s,
                                        color: p === G.EmojiPopoutType.ADD_PACK ? d.Button.Colors.BRAND : d.Button.Colors.PRIMARY,
                                        children: i.text
                                    }), null != C && (0, l.jsxs)("div", {
                                        className: X.ctaDescription,
                                        children: [u && (0, l.jsx)(U.default, {
                                            className: X.nitroWheel,
                                            color: b.GradientCssUrls.PREMIUM_TIER_2
                                        }), (0, l.jsx)(d.Text, {
                                            variant: "text-sm/medium",
                                            "aria-label": C,
                                            children: C
                                        })]
                                    })]
                                })
                            }
                            if (p === G.EmojiPopoutType.GET_PREMIUM_INVENTORY_ENABLED || p === G.EmojiPopoutType.GET_PREMIUM_INVENTORY_DISABLED) return (0, l.jsxs)(l.Fragment, {
                                children: [p === G.EmojiPopoutType.GET_PREMIUM_INVENTORY_ENABLED && (0, l.jsx)(E.default, {
                                    className: X.betaTag,
                                    color: "white"
                                }), (0, l.jsx)(T.default, {
                                    subscriptionTier: Y.PremiumSubscriptionSKUs.TIER_2,
                                    buttonText: i.text,
                                    className: X.ctaButton,
                                    fullWidth: !0,
                                    onClick: () => o()
                                }), null != C && (0, l.jsx)("div", {
                                    className: X.ctaDescription,
                                    children: (0, l.jsx)(d.Text, {
                                        variant: "text-sm/medium",
                                        "aria-label": C,
                                        children: C
                                    })
                                })]
                            });
                            if (p === G.EmojiPopoutType.JOIN_GUILD) return (0, l.jsx)(d.Button, {
                                size: d.Button.Sizes.SMALL,
                                className: X.ctaButton,
                                color: d.ButtonColors.BRAND,
                                fullWidth: !0,
                                onClick: () => {
                                    (0, B.startLurking)(a.id, {})
                                },
                                children: i.text
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
                    return Z
                },
                renderVideoComponent: function() {
                    return X
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
                    return l
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
                NewTopicsBar: function() {
                    return ea
                },
                TopicsPill: function() {
                    return ei
                },
                renderClickableTooltipNode: function() {
                    return er
                },
                MessagePopoutContent: function() {
                    return eo
                },
                PopoutLoadingAnimation: function() {
                    return eu
                }
            }), n("222007");
            var l, a, s = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                u = n("917351"),
                d = n.n(u),
                c = n("118810"),
                f = n("446674"),
                m = n("77078"),
                h = n("819689"),
                p = n("267363"),
                C = n("817480"),
                g = n("340616"),
                E = n("115718"),
                v = n("84339"),
                I = n("298878"),
                x = n("793237"),
                _ = n("347738"),
                S = n("584998"),
                N = n("845579"),
                M = n("876308"),
                T = n("660478"),
                A = n("697218"),
                j = n("663175"),
                L = n("888673"),
                y = n("839952"),
                R = n("476765"),
                b = n("62843"),
                O = n("461380"),
                D = n("171710"),
                P = n("945330"),
                w = n("909004"),
                U = n("599110"),
                k = n("449008"),
                V = n("874276"),
                F = n("49111"),
                B = n("894282"),
                H = n("995307"),
                G = n("719347"),
                W = n("782340"),
                z = n("620109");
            let Z = {
                    delay: 300,
                    position: "top"
                },
                Y = e => t => {
                    null == e || e(t), (0, V.setVolume)(t)
                },
                K = e => t => {
                    null == e || e(t), (0, V.setMuted)(t)
                };

            function X(e) {
                let {
                    onVolumeChange: t,
                    onMute: n,
                    volume: l,
                    autoMute: a,
                    alt: r,
                    renderAdjacentContent: o,
                    renderOverlayContent: u,
                    ...d
                } = e, c = Y(t), f = K(n);
                return l = null == l ? V.getVolume : l, a = null == a ? V.getMuted : a, (0, s.jsxs)(i.Fragment, {
                    children: [(0, s.jsx)(L.default, {
                        ...d,
                        alt: r,
                        volume: l,
                        autoMute: a,
                        onVolumeChange: c,
                        onMute: f,
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
                } = e, d = Y(t), c = K(l);
                return n = null == n ? V.getVolume : n, (0, s.jsxs)(i.Fragment, {
                    children: [(0, s.jsx)(j.default, {
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
                } = e, i = Y(t), r = K(l);
                return n = null == n ? V.getVolume : n, (0, s.jsx)(M.default, {
                    ...a,
                    onVolumeChange: i,
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
                } = e, f = d === G.MediaLayoutType.MOSAIC, h = !u && N.ViewImageDescriptions.getSetting() && null != t && "" !== t && !0 !== n, p = e => {
                    let {
                        altText: t
                    } = e;
                    return (0, s.jsxs)(m.Dialog, {
                        "aria-label": W.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
                        className: z.mediaMosaicAltTextPopout,
                        onKeyDown: e => {
                            e.key === B.KeyboardEventKey.Escape && setTimeout(() => {
                                var e;
                                return null === (e = g.current) || void 0 === e ? void 0 : e.focus()
                            }, 0)
                        },
                        children: [(0, s.jsx)("span", {
                            className: z.mediaMosaicAltTextPopoutTitle,
                            children: W.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE
                        }), (0, s.jsx)("span", {
                            className: z.mediaMosaicAltTextPopoutDescription,
                            children: t
                        })]
                    })
                }, g = i.createRef();
                return (0, s.jsxs)("div", {
                    className: o(z.imageContent, a),
                    children: [(0, s.jsxs)("div", {
                        className: o(z.imageContainer, r),
                        style: c,
                        children: [(0, s.jsx)(C.default, {
                            ...e,
                            renderLinkComponent: $
                        }), null != l && l()]
                    }), f && h && (0, s.jsx)("div", {
                        className: z.mediaMosaicAltTextContainer,
                        children: (0, s.jsx)(m.Popout, {
                            animation: m.Popout.Animation.FADE,
                            renderPopout: () => (0, s.jsx)(p, {
                                altText: t
                            }),
                            children: e => (0, s.jsx)(m.FocusRing, {
                                offset: 4,
                                children: (0, s.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: g,
                                    "aria-label": W.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
                                    className: z.mediaMosaicAltText,
                                    children: W.default.Messages.MEDIA_MOSAIC_ALT_TEXT_CTA
                                })
                            })
                        })
                    }), !f && h && (0, s.jsx)("span", {
                        className: z.altText,
                        children: t
                    })]
                })
            }

            function $(e) {
                return (0, s.jsx)(g.default, {
                    ...e
                })
            }

            function ee(e) {
                let {
                    renderAdjacentContent: t,
                    ...n
                } = e;
                return (0, s.jsxs)(i.Fragment, {
                    children: [(0, s.jsx)(y.default, {
                        ...n
                    }), null != t && t()]
                })
            }(a = l || (l = {}))[a.OLD_MESSAGES = 0] = "OLD_MESSAGES", a[a.REPLY = 1] = "REPLY";
            let et = e => {
                    let {
                        type: t = 0,
                        onClick: n
                    } = e;
                    return (0, s.jsx)(b.MessagesInteractionContext.Consumer, {
                        children: e => e.disableInteractions ? null : (0, s.jsxs)("div", {
                            className: z.jumpToPresentBar,
                            children: [(0, s.jsx)(m.FocusRing, {
                                offset: 4,
                                children: (0, s.jsx)("button", {
                                    type: "button",
                                    onClick: n,
                                    className: z.barButtonMain,
                                    children: function(e) {
                                        switch (e) {
                                            case 0:
                                                return W.default.Messages.YOURE_VIEWING_OLDER_MESSAGES;
                                            case 1:
                                                return W.default.Messages.JUMP_BAR_VIEWING_REPLY;
                                            default:
                                                return (0, k.assertNever)(e)
                                        }
                                    }(t)
                                })
                            }), null != n ? (0, s.jsx)(m.FocusRing, {
                                offset: 4,
                                children: (0, s.jsxs)("button", {
                                    type: "button",
                                    onClick: n,
                                    className: z.barButtonAlt,
                                    children: [function(e) {
                                        switch (e) {
                                            case 0:
                                                return W.default.Messages.JUMP_TO_PRESENT;
                                            case 1:
                                                return W.default.Messages.JUMP_TO_ORIGINAL_MESSAGE;
                                            default:
                                                return (0, k.assertNever)(e)
                                        }
                                    }(t), (0, s.jsx)(O.default, {
                                        className: z.barButtonIcon
                                    })]
                                })
                            }) : (0, s.jsx)(m.Spinner, {
                                type: m.Spinner.Type.PULSING_ELLIPSIS,
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
                    return (0, s.jsx)(b.MessagesInteractionContext.Consumer, {
                        children: e => e.disableInteractions ? null : (0, s.jsxs)(m.Clickable, {
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
                            children: [(0, s.jsx)("div", {
                                className: z.barButtonMain,
                                children: W.default.Messages.MESSAGES_FAILED_TO_LOAD
                            }), n ? (0, s.jsx)(m.Spinner, {
                                type: m.Spinner.Type.PULSING_ELLIPSIS,
                                className: z.spinner,
                                itemClassName: z.spinnerItem
                            }) : (0, s.jsx)("div", {
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
                } = e, [l] = i.useState(() => (0, R.uid)("NewMessagesBarJumpToNewMessages_")), a = i.useCallback(() => {
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
                }, [n]), r = i.useCallback(() => {
                    (0, p.ack)(n)
                }, [n]), {
                    disableInteractions: u
                } = i.useContext(b.MessagesInteractionContext);
                return u ? null : (0, s.jsxs)("div", {
                    className: o(z.newMessagesBar, {
                        [z.disableInteractions]: u
                    }),
                    children: [(0, s.jsx)(m.FocusRing, {
                        offset: 4,
                        children: (0, s.jsx)("button", {
                            type: "button",
                            className: z.barButtonMain,
                            onClick: a,
                            "aria-label": W.default.Messages.JUMP_TO_LAST_UNREAD_MESSAGE,
                            "aria-describedby": l,
                            children: (0, s.jsx)("span", {
                                id: l,
                                className: z.span,
                                children: t
                            })
                        })
                    }), (0, s.jsx)(m.FocusRing, {
                        offset: 4,
                        children: (0, s.jsxs)("button", {
                            type: "button",
                            onClick: r,
                            className: z.barButtonAlt,
                            children: [W.default.Messages.MARK_AS_READ, (0, s.jsx)(D.default, {
                                className: z.barButtonIcon
                            })]
                        })
                    })]
                })
            }

            function ea(e) {
                var t, n, l;
                let {
                    channel: a,
                    content: r,
                    scrollManager: u
                } = e, {
                    disableInteractions: C
                } = i.useContext(b.MessagesInteractionContext), [g, N] = i.useState(null), M = i.useRef(null), [j, L] = i.useState(null), y = i.useRef(null), R = (0, f.useStateFromStoresArray)([_.default], () => {
                    var e;
                    return null !== (e = _.default.summaries(a.id)) && void 0 !== e ? e : []
                }, [a]), V = (0, v.default)(R);
                i.useEffect(() => {
                    !d.isEqual(V, R) && U.default.track(F.AnalyticEvents.SUMMARIES_TOPICS_PILL_VIEWED, {
                        num_summaries: R.length,
                        message_counts: R.map(e => e.count),
                        start_message_ids: R.map(e => e.startId),
                        end_message_ids: R.map(e => e.endId),
                        num_participants: R.map(e => e.people.length),
                        guild_id: a.guild_id,
                        channel_id: a.id,
                        channel_type: a.type
                    })
                }, [R, V, a.guild_id, a.id, a.type]);
                let B = (0, f.useStateFromStores)([A.default], () => {
                        var e;
                        return null !== (e = null == R ? void 0 : R.map(e => {
                            var t;
                            return null === (t = e.people) || void 0 === t ? void 0 : t.map(e => {
                                var t;
                                return null !== (t = A.default.getUser(e)) && void 0 !== t ? t : null
                            }).filter(k.isNotNullish)
                        })) && void 0 !== e ? e : []
                    }, [R], es),
                    G = null !== (n = (0, f.useStateFromStores)([_.default], () => _.default.visibleSummaryIndex())) && void 0 !== n ? n : -1,
                    Z = null == R ? void 0 : null === (t = R[G]) || void 0 === t ? void 0 : t.topic;
                null == Z && null == g && (null == R ? void 0 : R.length) >= 1 && (Z = null === (l = R[0]) || void 0 === l ? void 0 : l.topic);
                let Y = i.useMemo(() => d.debounce(e => {
                        var t;
                        N(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
                    }, 64), [N]),
                    K = i.useMemo(() => d.throttle(() => {
                        (0, x.setHighlightedSummary)(null)
                    }, 1200, {
                        trailing: !1
                    }), []),
                    X = i.useCallback(e => {
                        K(), Y(e)
                    }, [Y, K]),
                    [J, q] = i.useState(!1),
                    Q = i.useCallback(() => {
                        U.default.track(F.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
                            topics_dropdown_open: !J,
                            num_summaries: R.length,
                            message_counts: R.map(e => e.count),
                            start_message_ids: R.map(e => e.startId),
                            end_message_ids: R.map(e => e.endId),
                            num_participants: R.map(e => e.people.length),
                            guild_id: a.guild_id,
                            channel_id: a.id,
                            channel_type: a.type
                        }), q(!J)
                    }, [J, R, q, a]),
                    $ = i.useCallback(function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H.SummariesTopicClickedSource.PILL_DROPDOWN,
                            n = R[e];
                        if (null == n) return;
                        (0, x.setSelectedSummary)(a.id, n.id), (0, x.setHighlightedSummary)(a.id, n.id);
                        let l = () => {
                            u.removeScrollCompleteCallback(l), setTimeout(() => {
                                u.addAutomaticAnchorCallback(X, !1)
                            }, 100)
                        };
                        u.removeAutomaticAnchorCallback(X), u.addScrollCompleteCallback(l), U.default.track(F.AnalyticEvents.SUMMARIES_TOPIC_CLICKED, {
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
                            jumpType: E.JumpTypes.ANIMATED,
                            context: "Summary Jump"
                        })
                    }, [R, a, X, u]),
                    ee = i.useCallback(e => {
                        var t;
                        q(e);
                        let n = null === (t = y.current) || void 0 === t ? void 0 : t.scrollTop;
                        null != n && L(n)
                    }, []);
                i.useEffect(() => {
                    if (null != j && J) {
                        var e;
                        null === (e = y.current) || void 0 === e || e.scrollTo({
                            top: j
                        })
                    }
                }, [j, J]);
                let et = i.useCallback(e => {
                    var t;
                    !((0, c.isElement)(e.target) && (null === (t = M.current) || void 0 === t ? void 0 : t.contains(e.target))) && (J && U.default.track(F.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                }, [J, R, a, ee]);
                i.useEffect(() => (u.addAutomaticAnchorCallback(X), () => {
                    u.removeAutomaticAnchorCallback(X)
                }), [u, X]), (0, x.useSummaryPolling)(a.id, !0), i.useEffect(() => (document.addEventListener("mousedown", et), () => {
                    document.removeEventListener("mousedown", et)
                }), [et]);
                let en = i.useMemo(() => (0, s.jsx)(S.default, {
                        channel: a,
                        summaries: R,
                        summariesMembers: B,
                        selectTopic: $,
                        setOpen: ee
                    }), [R, B, $, ee, a]),
                    el = i.useCallback(() => {
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
                    ea = i.useCallback(() => {
                        (0, p.ack)(a.id)
                    }, [a.id]),
                    ei = W.default.Messages.SUMMARIES_NO_SUMMARIES;
                return R.length > 0 && (ei = "" === Z || null == Z ? W.default.Messages.SUMMARIES_VIEW_ALL : Z), C ? null : (0, s.jsxs)("div", {
                    ref: M,
                    className: o(z.newTopicsBarContainer, z.containerMarginTop),
                    children: [(0, s.jsx)("div", {
                        className: o(z.newTopicsBarTopicSection),
                        children: (0, s.jsx)(m.Clickable, {
                            className: z.newTopicsBarTextClickable,
                            "aria-label": W.default.Messages.SUMMARY_PILL,
                            onClick: Q,
                            children: (0, s.jsxs)("div", {
                                className: o({
                                    [z.newTopicsBarTextUnselected]: !J,
                                    [z.newTopicsBarTextSelected]: J
                                }),
                                children: [(0, s.jsx)(w.default, {
                                    className: z.newTopicsBarIcon,
                                    width: 16,
                                    height: 16
                                }), (0, s.jsx)(m.Text, {
                                    variant: "text-sm/medium",
                                    className: o(z.newTopicsBarCompact, z.newTopicsBarText),
                                    children: ei
                                }), (0, s.jsx)(O.default, {
                                    width: 16,
                                    height: 16,
                                    direction: O.default.Directions.DOWN,
                                    className: z.newTopicsBarCaret
                                })]
                            })
                        })
                    }), (0, s.jsx)(m.Clickable, {
                        onClick: el,
                        className: o(z.barButtonMain, z.newTopicsBarInitial),
                        children: r
                    }), (0, s.jsxs)(m.Clickable, {
                        onClick: ea,
                        className: o(z.barButtonAlt, z.flexEnd),
                        children: [(0, s.jsx)("div", {
                            className: z.newTopicsBarCompact,
                            children: W.default.Messages.MARK_AS_READ
                        }), (0, s.jsx)(D.default, {
                            className: z.barButtonIcon
                        })]
                    }), J && (0, s.jsxs)("div", {
                        className: z.topicsDropdown,
                        children: [(0, s.jsxs)("div", {
                            className: z.topicsDropdownHeading,
                            children: [(0, s.jsxs)("div", {
                                className: z.topicsDropdownHeadingText,
                                children: [(0, s.jsx)(w.default, {
                                    className: z.topicsPillHeadingIcon,
                                    width: 18,
                                    height: 20
                                }), (0, s.jsx)(m.Heading, {
                                    variant: "heading-md/bold",
                                    color: "header-primary",
                                    lineClamp: 1,
                                    children: W.default.Messages.SUMMARIES
                                }), (0, s.jsx)(I.default, {
                                    className: z.summariesBetaTag
                                })]
                            }), (0, s.jsx)(m.Clickable, {
                                "aria-label": W.default.Messages.CLOSE,
                                onClick: Q,
                                className: z.topicsDropdownClose,
                                children: (0, s.jsx)(P.default, {})
                            })]
                        }), (0, s.jsx)(m.Scroller, {
                            ref: y,
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

            function ei(e) {
                var t, n, l;
                let {
                    channel: a,
                    scrollManager: r
                } = e, {
                    disableInteractions: u
                } = i.useContext(b.MessagesInteractionContext), [p, C] = i.useState(null), g = i.useRef(null), [N, M] = i.useState(null), T = i.useRef(null), j = (0, f.useStateFromStoresArray)([_.default], () => {
                    var e;
                    return null !== (e = _.default.summaries(a.id)) && void 0 !== e ? e : []
                }, [a]), L = (0, v.default)(j);
                i.useEffect(() => {
                    !d.isEqual(L, j) && U.default.track(F.AnalyticEvents.SUMMARIES_TOPICS_PILL_VIEWED, {
                        num_summaries: j.length,
                        message_counts: j.map(e => e.count),
                        start_message_ids: j.map(e => e.startId),
                        end_message_ids: j.map(e => e.endId),
                        num_participants: j.map(e => e.people.length),
                        guild_id: a.guild_id,
                        channel_id: a.id,
                        channel_type: a.type
                    })
                }, [j, L, a.guild_id, a.id, a.type]);
                let y = (0, f.useStateFromStores)([A.default], () => {
                        var e;
                        return null !== (e = null == j ? void 0 : j.map(e => {
                            var t;
                            return null === (t = e.people) || void 0 === t ? void 0 : t.map(e => {
                                var t;
                                return null !== (t = A.default.getUser(e)) && void 0 !== t ? t : null
                            }).filter(k.isNotNullish)
                        })) && void 0 !== e ? e : []
                    }, [j], es),
                    R = null !== (n = (0, f.useStateFromStores)([_.default], () => _.default.visibleSummaryIndex())) && void 0 !== n ? n : -1,
                    D = null == j ? void 0 : null === (t = j[R]) || void 0 === t ? void 0 : t.topic;
                null == D && null == p && (null == j ? void 0 : j.length) >= 1 && (D = null === (l = j[0]) || void 0 === l ? void 0 : l.topic);
                let V = i.useMemo(() => d.get(j, R - 1), [R, j]),
                    B = i.useMemo(() => d.get(j, R + 1), [R, j]),
                    G = i.useMemo(() => d.debounce(e => {
                        var t;
                        C(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
                    }, 64), [C]),
                    Z = i.useMemo(() => d.throttle(() => {
                        (0, x.setHighlightedSummary)(null)
                    }, 1200, {
                        trailing: !1
                    }), []),
                    Y = i.useCallback(e => {
                        Z(), G(e)
                    }, [G, Z]),
                    [K, X] = i.useState(!1),
                    J = i.useCallback(() => {
                        U.default.track(F.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
                            topics_dropdown_open: !K,
                            num_summaries: j.length,
                            message_counts: j.map(e => e.count),
                            start_message_ids: j.map(e => e.startId),
                            end_message_ids: j.map(e => e.endId),
                            num_participants: j.map(e => e.people.length),
                            guild_id: a.guild_id,
                            channel_id: a.id,
                            channel_type: a.type
                        }), X(!K)
                    }, [K, j, X, a]),
                    q = i.useCallback(function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H.SummariesTopicClickedSource.PILL_DROPDOWN,
                            n = j[e];
                        if (null == n) return;
                        (0, x.setSelectedSummary)(a.id, n.id), (0, x.setHighlightedSummary)(a.id, n.id);
                        let l = () => {
                            r.removeScrollCompleteCallback(l), setTimeout(() => {
                                r.addAutomaticAnchorCallback(Y, !1)
                            }, 100)
                        };
                        r.removeAutomaticAnchorCallback(Y), r.addScrollCompleteCallback(l), U.default.track(F.AnalyticEvents.SUMMARIES_TOPIC_CLICKED, {
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
                            jumpType: E.JumpTypes.ANIMATED,
                            context: "Summary Jump"
                        })
                    }, [j, a, Y, r]),
                    Q = i.useCallback(() => {
                        q(R - 1, H.SummariesTopicClickedSource.PILL_NEXT_ARROW)
                    }, [q, R]),
                    $ = i.useCallback(() => {
                        q(R + 1, H.SummariesTopicClickedSource.PILL_PREVIOUS_ARROW)
                    }, [R, q]),
                    ee = i.useCallback(e => {
                        var t;
                        X(e);
                        let n = null === (t = T.current) || void 0 === t ? void 0 : t.scrollTop;
                        null != n && M(n)
                    }, []);
                i.useEffect(() => {
                    if (null != N && K) {
                        var e;
                        null === (e = T.current) || void 0 === e || e.scrollTo({
                            top: N
                        })
                    }
                }, [N, K]);
                let et = i.useCallback(e => {
                    var t;
                    !((0, c.isElement)(e.target) && (null === (t = g.current) || void 0 === t ? void 0 : t.contains(e.target))) && (K && U.default.track(F.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: j.length,
                        message_counts: j.map(e => e.count),
                        start_message_ids: j.map(e => e.startId),
                        end_message_ids: j.map(e => e.endId),
                        num_participants: j.map(e => e.people.length),
                        guild_id: a.guild_id,
                        channel_id: a.id,
                        channel_type: a.type
                    }), ee(!1))
                }, [K, j, a, ee]);
                i.useEffect(() => (r.addAutomaticAnchorCallback(Y), () => {
                    r.removeAutomaticAnchorCallback(Y)
                }), [r, Y]), (0, x.useSummaryPolling)(a.id, !0), i.useEffect(() => (document.addEventListener("mousedown", et), () => {
                    document.removeEventListener("mousedown", et)
                }), [et]);
                let en = i.useMemo(() => (0, s.jsx)(S.default, {
                        channel: a,
                        summaries: j,
                        summariesMembers: y,
                        selectTopic: q,
                        setOpen: ee
                    }), [j, y, q, ee, a]),
                    el = (0, f.useStateFromStores)([_.default], () => _.default.shouldShowTopicsBar());
                if (!el) return null;
                let ea = W.default.Messages.SUMMARIES_NO_SUMMARIES;
                return j.length > 0 && (ea = "" === D || null == D ? W.default.Messages.SUMMARIES_VIEW_ALL : D), u ? null : (0, s.jsxs)("div", {
                    ref: g,
                    className: o(z.topicsPillContainer, z.containerMarginTop),
                    children: [(0, s.jsxs)("div", {
                        className: z.topicsPill,
                        children: [(0, s.jsx)(m.Clickable, {
                            className: z.topicsPillText,
                            "aria-label": W.default.Messages.SUMMARY_PILL,
                            onClick: J,
                            children: (0, s.jsxs)("div", {
                                className: o({
                                    [z.topicsPillTextUnselected]: !K,
                                    [z.topicsPillTextSelected]: K
                                }),
                                children: [(0, s.jsx)(w.default, {
                                    className: z.topicsPillSummaryIcon,
                                    width: 16,
                                    height: 16
                                }), (0, s.jsx)(m.Text, {
                                    className: z.topicsPillTextTitle,
                                    variant: "text-sm/medium",
                                    children: ea
                                }), (0, s.jsx)(O.default, {
                                    width: 16,
                                    height: 16,
                                    direction: O.default.Directions.DOWN,
                                    className: z.topicsPillDropdownCaret
                                })]
                            })
                        }), (0, s.jsxs)("div", {
                            className: z.topicsPillCarets,
                            children: [(0, s.jsx)(m.Clickable, {
                                "aria-label": W.default.Messages.SUMMARY_PILL_NEXT,
                                onClick: $,
                                className: o(z.topicsPillCaret, z.topicsCaretLeft, {
                                    [z.topicsPillCaretDisabled]: null == B
                                }),
                                children: (0, s.jsx)(O.default, {
                                    width: 16,
                                    height: 16,
                                    direction: O.default.Directions.UP
                                })
                            }), (0, s.jsx)(m.Clickable, {
                                "aria-label": W.default.Messages.SUMMARY_PILL_PREVIOUS,
                                onClick: Q,
                                className: o(z.topicsPillCaret, z.topicsCaretRight, {
                                    [z.topicsPillCaretDisabled]: null == V
                                }),
                                children: (0, s.jsx)(O.default, {
                                    width: 16,
                                    height: 16,
                                    direction: O.default.Directions.DOWN
                                })
                            })]
                        })]
                    }), K && (0, s.jsxs)("div", {
                        className: z.topicsDropdown,
                        children: [(0, s.jsxs)("div", {
                            className: z.topicsDropdownHeading,
                            children: [(0, s.jsxs)("div", {
                                className: z.topicsDropdownHeadingText,
                                children: [(0, s.jsx)(w.default, {
                                    className: z.topicsPillHeadingIcon,
                                    width: 18,
                                    height: 20
                                }), (0, s.jsx)(m.Heading, {
                                    variant: "heading-md/bold",
                                    color: "header-primary",
                                    lineClamp: 1,
                                    children: W.default.Messages.SUMMARIES
                                }), (0, s.jsx)(I.default, {
                                    className: z.summariesBetaTag
                                })]
                            }), (0, s.jsx)(m.Clickable, {
                                "aria-label": W.default.Messages.CLOSE,
                                onClick: J,
                                className: z.topicsDropdownClose,
                                children: (0, s.jsx)(P.default, {})
                            })]
                        }), (0, s.jsx)(m.Scroller, {
                            ref: T,
                            className: z.topicsScroller,
                            fade: !0,
                            children: en
                        })]
                    })]
                })
            }
            let er = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return (0, s.jsxs)("div", {
                        className: z.tooltip,
                        children: [(0, s.jsx)(m.Text, {
                            color: "none",
                            variant: "text-sm/semibold",
                            children: e
                        }), t && (0, s.jsx)(m.Text, {
                            className: z.clickCTA,
                            color: "text-muted",
                            variant: "text-sm/normal",
                            children: W.default.Messages.EMOJI_TOOLTIP_CLICK_CTA
                        })]
                    })
                },
                eo = e => {
                    let {
                        children: t,
                        className: n
                    } = e;
                    return (0, s.jsx)("div", {
                        className: o(z.popoutContainer, n),
                        children: t
                    })
                },
                eu = e => {
                    let {
                        className: t
                    } = e;
                    return (0, s.jsx)(eo, {
                        className: t,
                        children: (0, s.jsx)("div", {
                            className: z.popoutLoadingBackground,
                            children: (0, s.jsx)("div", {
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
            }), n("222007");
            let l = new Set(["1c", "4d", "abnf", "accesslog", "ada", "arduino", "ino", "armasm", "arm", "avrasm", "actionscript", "as", "alan", "ansi", "i", "log", "ln", "angelscript", "asc", "apache", "apacheconf", "applescript", "osascript", "arcade", "asciidoc", "adoc", "aspectj", "autohotkey", "autoit", "awk", "mawk", "nawk", "gawk", "bash", "sh", "zsh", "basic", "bbcode", "blade", "bnf", "brainfuck", "bf", "csharp", "cs", "c", "h", "cpp", "hpp", "cc", "hh", "c++", "h++", "cxx", "hxx", "cal", "cos", "cls", "cmake", "cmake.in", "coq", "csp", "css", "csv", "capnproto", "capnp", "chaos", "kaos", "chapel", "chpl", "cisco", "clojure", "clj", "coffeescript", "coffee", "cson", "iced", "cpc", "crmsh", "crm", "pcmk", "crystal", "cr", "cypher", "d", "dns", "zone", "bind", "dos", "bat", "cmd", "dart", "delphi", "dpr", "dfm", "pas", "pascal", "freepascal", "lazarus", "lpr", "lfm", "diff", "patch", "django", "jinja", "dockerfile", "docker", "dsconfig", "dts", "dust", "dst", "dylan", "ebnf", "elixir", "ex", "elm", "erlang", "erl", "extempore", "xtlang", "xtm", "fsharp", "fs", "fix", "fortran", "f90", "f95", "gcode", "nc", "gams", "gms", "gauss", "gss", "godot", "gdscript", "gherkin", "gn", "gni", "go", "golang", "gf", "golo", "gololang", "gradle", "groovy", "xml", "html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "svg", "http", "https", "haml", "handlebars", "hbs", "html.hbs", "html.handlebars", "haskell", "hs", "haxe", "hx", "hy", "hylang", "ini", "toml", "inform7", "i7", "irpf90", "json", "java", "jsp", "javascript", "js", "jsx", "jolie", "iol", "ol", "julia", "julia-repl", "kotlin", "kt", "tex", "leaf", "lean", "lasso", "ls", "lassoscript", "less", "ldif", "lisp", "livecodeserver", "livescript", "lock", "ls", "lua", "makefile", "mk", "mak", "make", "markdown", "md", "mkdown", "mkd", "mathematica", "mma", "wl", "matlab", "maxima", "mel", "mercury", "mirc", "mrc", "mizar", "mojolicious", "monkey", "moonscript", "moon", "n1ql", "nsis", "never", "nginx", "nginxconf", "nim", "nimrod", "nix", "ocl", "ocaml", "ml", "objectivec", "mm", "objc", "obj-c", "obj-c++", "objective-c++", "glsl", "openscad", "scad", "ruleslanguage", "oxygene", "pf", "pf.conf", "php", "php3", "php4", "php5", "php6", "php7", "parser3", "perl", "pl", "pm", "plaintext", "txt", "text", "pony", "pgsql", "postgres", "postgresql", "powershell", "ps", "ps1", "processing", "prolog", "properties", "protobuf", "puppet", "pp", "python", "py", "gyp", "profile", "python-repl", "pycon", "k", "kdb", "qml", "r", "cshtml", "razor", "razor-cshtml", "reasonml", "re", "redbol", "rebol", "red", "red-system", "rib", "rsl", "graph", "instances", "robot", "rf", "rpm-specfile", "rpm", "spec", "rpm-spec", "specfile", "ruby", "rb", "gemspec", "podspec", "thor", "irb", "rust", "rs", "SAS", "sas", "scss", "sql", "p21", "step", "stp", "scala", "scheme", "scilab", "sci", "shexc", "shell", "console", "smali", "smalltalk", "st", "sml", "ml", "solidity", "sol", "stan", "stanfuncs", "stata", "iecst", "scl", "structured-text", "stylus", "styl", "subunit", "supercollider", "sc", "svelte", "swift", "tcl", "tk", "terraform", "tf", "hcl", "tap", "thrift", "tp", "tsql", "twig", "craftcms", "typescript", "ts", "tsx", "unicorn-rails-log", "vbnet", "vb", "vba", "vbscript", "vbs", "vhdl", "vala", "verilog", "v", "vim", "axapta", "x++", "x86asm", "xl", "tao", "xquery", "xpath", "xq", "yml", "yaml", "zephir", "zep"]);

            function a(e) {
                return l.has(e.split(".").slice(-1)[0])
            }
        },
        305122: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                maybeFetchSoundboardSounds: function() {
                    return x
                },
                uploadSound: function() {
                    return _
                },
                updateSound: function() {
                    return S
                },
                deleteSound: function() {
                    return N
                },
                addFavoriteSound: function() {
                    return M
                },
                removeFavoriteSound: function() {
                    return T
                },
                playSoundLocally: function() {
                    return A
                },
                reportSoundStartedPlaying: function() {
                    return j
                },
                reportSoundFinishedPlaying: function() {
                    return L
                },
                updateUserSoundboardVolume: function() {
                    return y
                },
                muteCustomJoinSound: function() {
                    return R
                }
            }), n("222007"), n("424973");
            var l = n("917351"),
                a = n.n(l),
                s = n("872717"),
                i = n("913144"),
                r = n("404118"),
                o = n("599417"),
                u = n("872173"),
                d = n("235004"),
                c = n("389480"),
                f = n("24156"),
                m = n("846325"),
                h = n("49111"),
                p = n("397336"),
                C = n("782340");
            let g = async e => {
                try {
                    let t = await s.default.get({
                            url: h.Endpoints.SOUNDBOARD_DEFAULT_SOUNDS,
                            query: {
                                guild_ids: e
                            }
                        }),
                        n = t.body.map(e => (0, c.soundboardSoundFromAPI)(e, m.DEFAULT_SOUND_GUILD_ID));
                    i.default.dispatch({
                        type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS",
                        soundboardSounds: n
                    })
                } catch (e) {
                    throw i.default.dispatch({
                        type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE"
                    }), new o.default(e)
                }
            }, E = e => new Promise(t => {
                let n = () => {
                    i.default.unsubscribe(e, n), setTimeout(t, 0)
                };
                i.default.subscribe(e, n)
            }), v = e => {
                if (!d.default.shouldFetchDefaultSounds()) return Promise.resolve();
                i.default.dispatch({
                    type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS"
                });
                let t = E("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
                return g(e), t
            }, I = () => {
                let e = (0, f.getGuildIdsToFetchSoundsFor)();
                if (0 === e.length) return Promise.resolve();
                let t = E("SOUNDBOARD_SOUNDS_RECEIVED");
                return i.default.dispatch({
                    type: "GUILD_SOUNDBOARD_FETCH"
                }), i.default.dispatch({
                    type: "REQUEST_SOUNDBOARD_SOUNDS",
                    guildIds: e
                }), t
            }, x = () => __OVERLAY__ ? (i.default.dispatch({
                type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST"
            }), Promise.all([])) : Promise.all([v(), I()]);
            async function _(e) {
                let {
                    guildId: t,
                    name: n,
                    sound: l,
                    volume: a,
                    emojiId: i,
                    emojiName: r
                } = e, o = await s.default.post({
                    url: h.Endpoints.GUILD_SOUNDBOARD_SOUNDS(t),
                    body: {
                        name: n,
                        sound: l,
                        volume: a,
                        emoji_id: i,
                        emoji_name: r
                    }
                }), u = (0, c.soundboardSoundFromAPI)(o.body, t);
                return u
            }
            async function S(e) {
                let {
                    guildId: t,
                    soundId: n,
                    name: l,
                    volume: a,
                    emojiId: i,
                    emojiName: r
                } = e, o = await s.default.patch({
                    url: h.Endpoints.GUILD_SOUNDBOARD_SOUND(t, n),
                    body: {
                        name: l,
                        volume: a,
                        emoji_id: i,
                        emoji_name: r
                    }
                }), u = (0, c.soundboardSoundFromAPI)(o.body, t);
                return u
            }
            async function N(e, t) {
                await s.default.delete({
                    url: h.Endpoints.GUILD_SOUNDBOARD_SOUND(e, t),
                    oldFormErrors: !0
                })
            }

            function M(e) {
                u.FrecencyUserSettingsActionCreators.updateAsync("favoriteSoundboardSounds", t => a.size(t.soundIds) >= p.MAX_FAVORITES ? (r.default.show({
                    title: C.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                    body: C.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                        count: p.MAX_FAVORITES
                    })
                }), !1) : !t.soundIds.includes(e) && void t.soundIds.push(e), p.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function T(e) {
                u.FrecencyUserSettingsActionCreators.updateAsync("favoriteSoundboardSounds", t => {
                    t.soundIds = t.soundIds.filter(t => t !== e)
                }, p.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function A(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY",
                    sound: t,
                    channelId: e,
                    trigger: n
                })
            }

            function j(e, t) {
                i.default.dispatch({
                    type: "GUILD_SOUNDBOARD_SOUND_PLAY_START",
                    soundId: e,
                    userId: t
                })
            }

            function L(e, t) {
                i.default.dispatch({
                    type: "GUILD_SOUNDBOARD_SOUND_PLAY_END",
                    soundId: e,
                    userId: t
                })
            }

            function y(e) {
                i.default.dispatch({
                    type: "USER_SOUNDBOARD_SET_VOLUME",
                    volume: e
                })
            }

            function R(e) {
                i.default.dispatch({
                    type: "SOUNDBOARD_MUTE_JOIN_SOUND",
                    channelId: e
                })
            }
        },
        462550: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("884691");
            let a = {
                    currentPreviewRef: l.createRef()
                },
                s = l.createContext(a);
            var i = s
        },
        389480: function(e, t, n) {
            "use strict";
            var l, a, s, i, r, o, u, d, c, f, m, h, p, C;

            function g(e, t) {
                let {
                    sound_id: n,
                    emoji_id: l,
                    emoji_name: a,
                    user_id: s,
                    available: i,
                    ...r
                } = e;
                return {
                    ...r,
                    soundId: n,
                    guildId: t,
                    emojiId: l,
                    emojiName: a,
                    userId: s,
                    available: null == i || i
                }
            }

            function E(e) {
                let {
                    soundId: t,
                    guildId: n,
                    emojiId: l,
                    emojiName: a,
                    userId: s,
                    ...i
                } = e;
                return {
                    ...i,
                    sound_id: t,
                    guild_id: n,
                    emoji_id: l,
                    emoji_name: a,
                    user_id: s
                }
            }
            n.r(t), n.d(t, {
                SoundButtonOverlay: function() {
                    return l
                },
                AnalyticsSoundType: function() {
                    return a
                },
                AnalyticsChangeType: function() {
                    return s
                },
                AnalyticsSoundSource: function() {
                    return i
                },
                soundboardSoundFromAPI: function() {
                    return g
                },
                soundboardSoundToAPI: function() {
                    return E
                },
                SoundboardSoundGridSectionType: function() {
                    return r
                },
                SoundboardSoundItemType: function() {
                    return o
                },
                LocalSoundTrigger: function() {
                    return u
                }
            }), (d = l || (l = {}))[d.PLAY = 0] = "PLAY", d[d.ADD = 1] = "ADD", (c = a || (a = {})).ENTRY = "entry_sound", c.EXIT = "exit_sound", c.DEFAULT = "default", (f = s || (s = {})).ADDED = "added", f.UPDATED = "updated", f.REMOVED = "removed", (m = i || (i = {})).DEFAULT = "default", m.CUSTOM = "custom", (h = r || (r = {}))[h.FAVORITES = 0] = "FAVORITES", h[h.RECENTLY_HEARD = 1] = "RECENTLY_HEARD", h[h.FREQUENTLY_USED = 2] = "FREQUENTLY_USED", h[h.GUILD = 3] = "GUILD", h[h.DEFAULTS = 4] = "DEFAULTS", h[h.SEARCH = 5] = "SEARCH", (p = o || (o = {}))[p.SOUND = 0] = "SOUND", p[p.ADD_SOUND = 1] = "ADD_SOUND", (C = u || (u = {}))[C.GIFT_CODE = 0] = "GIFT_CODE", C[C.SOUNDBOARD = 1] = "SOUNDBOARD", C[C.JOINED_VOICE_CHANNEL = 2] = "JOINED_VOICE_CHANNEL"
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
            var l = n("884691"),
                a = n("65597"),
                s = n("305961"),
                i = n("235004");

            function r(e, t) {
                let n = Object.keys(e);
                return n.filter(e => null == t.get(e))
            }

            function o() {
                let e = (0, a.default)([s.default], () => s.default.getGuilds()),
                    t = (0, a.default)([i.default], () => i.default.getSounds());
                return (0, l.useMemo)(() => r(e, t), [e, t])
            }

            function u() {
                let e = s.default.getGuilds(),
                    t = i.default.getSounds();
                return r(e, t)
            }
        },
        18730: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChannelSummarizationModelSwapExperiment: function() {
                    return s
                },
                ChannelSummarizationModelSwapGuildExperiment: function() {
                    return i
                }
            });
            var l = n("862205"),
                a = n("204653");
            let s = (0, l.createExperiment)({
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
                i = (0, l.createExperiment)({
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
            var l, a, s, i;

            function r(e, t) {
                return {
                    id: e.id,
                    topic: e.topic,
                    summShort: e.summ_short,
                    people: Array.from(new Set(e.people)),
                    startId: e.start_id,
                    endId: e.end_id,
                    count: e.count,
                    channelId: t,
                    source: e.source,
                    type: e.type
                }
            }
            n.r(t), n.d(t, {
                SummarySources: function() {
                    return l
                },
                createSummaryFromServer: function() {
                    return r
                }
            }), n("222007"), (s = l || (l = {}))[s.SOURCE_0 = 0] = "SOURCE_0", s[s.SOURCE_1 = 1] = "SOURCE_1", (i = a || (a = {}))[i.UNSET = 0] = "UNSET", i[i.SOURCE_1 = 1] = "SOURCE_1", i[i.SOURCE_2 = 2] = "SOURCE_2"
        },
        793237: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setHighlightedSummary: function() {
                    return I
                },
                toggleTopicsBar: function() {
                    return x
                },
                setSelectedSummary: function() {
                    return _
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
                    return L
                },
                default: function() {
                    return R
                }
            }), n("222007");
            var l = n("884691"),
                a = n("917351"),
                s = n.n(a),
                i = n("394846"),
                r = n("65597"),
                o = n("872717"),
                u = n("913144"),
                d = n("448993"),
                c = n("734575"),
                f = n("104589"),
                m = n("116460"),
                h = n("42203"),
                p = n("347738");
            let C = {},
                g = {};
            async function E(e, t) {
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
                var t, n;
                let l, a;
                if (!p.default.shouldFetch(e)) return;
                let i = Date.now();
                u.default.dispatch({
                    type: "REQUEST_CHANNEL_SUMMARIES",
                    channelId: e,
                    requestedAt: i
                });
                try {
                    a = await o.default.get("/channels/".concat(e, "/summaries"))
                } catch (e) {
                    l = new d.APIError(e)
                }
                let r = (null == a ? void 0 : null === (t = a.body) || void 0 === t ? void 0 : t.summaries) instanceof Array ? a.body.summaries : null !== (n = null == a ? void 0 : a.body) && void 0 !== n ? n : [];
                r = s.takeRight(r, 75), u.default.dispatch({
                    type: "RECEIVE_CHANNEL_SUMMARIES",
                    channelId: e,
                    summaries: r,
                    error: null != l ? l : void 0,
                    requestedAt: i,
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

            function x() {
                u.default.dispatch({
                    type: "TOGGLE_TOPICS_BAR"
                })
            }

            function _(e, t) {
                null != e && null != t && E(e, t), u.default.dispatch({
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
                return null == C[e] && (C[e] = 0), null === t ? C[e] = 0 : C[e] += t, C[e]
            }

            function M(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = (0, r.default)([h.default], () => h.default.getChannel(e), [e]),
                    [a, s] = l.useState(null),
                    o = (0, c.useChannelSummariesExperiment)(n) && !i.isMobile;
                l.useEffect(() => {
                    if (o) return s(e), () => {
                        s(null)
                    }
                }, [e, o]), l.useEffect(() => {
                    if (a !== e && null != a && y.stopPolling(e), o && null != a) return (t || null != e && a !== e) && y.fetchSummaries(e), y.startPolling(e), () => {
                        null != a && y.stopPolling(e)
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
                var e;
                let t, n;
                if (!p.default.shouldFetchChannelAffinities()) return Promise.resolve(null);
                let l = Date.now();
                u.default.dispatch({
                    type: "REQUEST_CHANNEL_AFFINITIES",
                    requestedAt: l
                });
                try {
                    n = await o.default.get("/users/@me/affinities/channels")
                } catch (e) {
                    t = new d.APIError(e)
                }
                let a = null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.channel_affinities;
                u.default.dispatch({
                    type: "RECEIVE_CHANNEL_AFFINITIES",
                    affinities: a,
                    error: null != t ? t : void 0,
                    requestedAt: l,
                    receivedAt: Date.now()
                })
            }
            async function j(e) {
                let t, n, {
                    useQuickSwitcher: l = !0,
                    useChannelAffinities: a = !0
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e = null != e ? e : [];
                let s = Date.now();
                if (0 === (e = e.concat(p.default.defaultChannelIds({
                        withQuickSwitcher: l,
                        withChannelAffinities: a
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
                    n = await o.default.post({
                        url: "/users/@me/summaries",
                        body: {
                            channel_ids: e
                        }
                    })
                } catch (e) {
                    t = new d.APIError(e)
                }
                let i = null == n ? void 0 : n.body.summaries;
                u.default.dispatch({
                    type: "RECEIVE_CHANNEL_SUMMARIES_BULK",
                    requestedAt: s,
                    receivedAt: Date.now(),
                    summaries: i,
                    requestArgs: {
                        channelIds: e
                    },
                    error: t
                })
            }
            async function L(e) {
                try {
                    await o.default.delete("/channels/".concat(e.channelId, "/summaries/").concat(e.id)), u.default.dispatch({
                        type: "DELETE_SUMMARY",
                        summary: e
                    })
                } catch (e) {
                    throw new d.APIError(e)
                }
            }
            let y = {
                startPolling: function(e) {
                    let t = N(e, 1);
                    t - 1 == 0 && (g[e] = setInterval(async () => {
                        await y.fetchSummaries(e)
                    }, 5e3))
                },
                stopPolling: function(e) {
                    let t = N(e, -1);
                    t <= 0 && (N(e, 0), clearInterval(g[e]))
                },
                setSummaryFeedback: T,
                useSummaryPolling: M,
                updateVisibleMessages: S,
                setSelectedSummary: _,
                setHighlightedSummary: I,
                fetchSummaries: v,
                fetchSummariesBulk: j,
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
                                    (null === (e = m.default.getProps().results) || void 0 === e ? void 0 : e.length) === 0 && (0, f.search)(null !== (n = m.default.getProps().query) && void 0 !== n ? n : "")
                                } catch (e) {}
                                await j(t.split(","))
                            })()
                        }, [t])
                    }(t), (0, r.useStateFromStoresArray)([p.default], () => p.default.topSummaries(), [])
                },
                deleteSummary: L
            };
            var R = y
        },
        995307: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SummariesSidebarToggledSource: function() {
                    return i
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
            var l, a, s, i, r, o, u = n("782340");

            function d() {
                return [{
                    value: "DUPLICATED",
                    label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_DUPLICATED
                }, {
                    value: "TOO_GENERIC",
                    label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_TOO_GENERIC
                }, {
                    value: "TOO_MANY",
                    label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_TOO_MANY
                }, {
                    value: "INACCURATE",
                    label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_INACCURATE
                }, {
                    value: "NOT_USEFUL",
                    label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_NOT_USEFUL
                }, {
                    value: "OTHER",
                    label: u.default.Messages.SUMMARIES_FEEDBACK_OPTION_OTHER
                }]
            }(l = i || (i = {})).TOOLBAR_BUTTON = "toolbar button", l.PILL = "pill", (a = r || (r = {})).SIDEBAR = "sidebar", a.PILL_DROPDOWN = "pill dropdown", a.PILL_NEXT_ARROW = "pill next arrow", a.PILL_PREVIOUS_ARROW = "pill previous arrow", (s = o || (o = {})).DUPLICATED = "DUPLICATED", s.TOO_GENERIC = "TOO_GENERIC", s.TOO_MANY = "TOO_MANY", s.INACCURATE = "INACCURATE", s.NOT_USEFUL = "NOT_USEFUL", s.OTHER = "OTHER"
        },
        347738: function(e, t, n) {
            "use strict";
            let l, a, s, i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            }), n("834022"), n("222007"), n("424973"), n("808653");
            var o, u, d = n("917351"),
                c = n.n(d),
                f = n("446674"),
                m = n("913144"),
                h = n("734575"),
                p = n("123225"),
                C = n("789563"),
                g = n("116460"),
                E = n("42203"),
                v = n("305961"),
                I = n("660478"),
                x = n("18494"),
                _ = n("282109"),
                S = n("697218"),
                N = n("718517"),
                M = n("299039"),
                T = n("18730"),
                A = n("204653");
            (u = o || (o = {})).FETCHING = "fetching", u.OK = "ok", u.ERROR = "error";
            let j = {},
                L = {},
                y = [],
                R = {},
                b = {
                    status: "ok",
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
            class k extends f.default.PersistedStore {
                getState() {
                    return {
                        summariesByChannel: j,
                        shouldShowTopicsBar: l,
                        summaryFetchStatusByChannel: L,
                        highlightedSummary: a,
                        visibleSummaryIndex: s,
                        selectedSummary: i,
                        summariesFeedback: r,
                        channelAffinities: y,
                        channelAffinitiesById: R,
                        channelAffinitiesStatus: b
                    }
                }
                initialize(e) {
                    var t, n, o, u, d, c;
                    j = null !== (t = null == e ? void 0 : e.summariesByChannel) && void 0 !== t ? t : {}, l = null === (n = null == e ? void 0 : e.shouldShowTopicsBar) || void 0 === n || n, L = {}, a = null !== (o = null == e ? void 0 : e.highlightedSummary) && void 0 !== o ? o : null, s = null !== (u = null == e ? void 0 : e.visibleSummaryIndex) && void 0 !== u ? u : null, i = null !== (d = null == e ? void 0 : e.selectedSummary) && void 0 !== d ? d : null, r = null !== (c = null == e ? void 0 : e.summariesFeedback) && void 0 !== c ? c : {}, this.waitFor(E.default, S.default, x.default, v.default, C.default), this.syncWith([g.default], w), this.syncWith([C.default], () => U(this)), T.ChannelSummarizationModelSwapExperiment.subscribe({
                        location: "1"
                    }, () => U(this))
                }
                allSummaries() {
                    return j
                }
                topSummaries() {
                    let e = Object.values(j).flat().filter(e => e.people.length > 1 && M.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * N.default.Millis.HOUR).sort((e, t) => M.default.extractTimestamp(t.endId) - M.default.extractTimestamp(e.endId));
                    return e
                }
                summaries(e) {
                    var t, n;
                    let l = null !== (t = j[e]) && void 0 !== t ? t : [],
                        a = E.default.getChannel(e),
                        s = v.default.getGuild(null == a ? void 0 : a.guild_id),
                        {
                            source: i
                        } = T.ChannelSummarizationModelSwapGuildExperiment.getCurrentConfig({
                            guildId: null !== (n = null == s ? void 0 : s.id) && void 0 !== n ? n : "",
                            location: "93448c_2"
                        }, {
                            autoTrackExposure: !1
                        }),
                        r = i !== D ? A.SummarySources.SOURCE_0 : D;
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
                    return null != i && i.channelId === e && null != i.summaryId ? this.findSummary(e, null == i ? void 0 : i.summaryId) : null
                }
                summaryFeedback(e) {
                    return null == e ? null : r[e.id]
                }
                topicForRange(e, t, n) {
                    var l, s, i, r, o, u;
                    let d = null === (l = j[e]) || void 0 === l ? void 0 : l.filter(e => e.source === D);
                    if (null == d) return null;
                    if (null != a && a.channelId === e && null != a.summaryId) return null !== (o = null == d ? void 0 : null === (r = d.find(e => e.id === (null == a ? void 0 : a.summaryId))) || void 0 === r ? void 0 : r.topic) && void 0 !== o ? o : null;
                    if (null == t && (null === (s = d[0]) || void 0 === s ? void 0 : s.topic) != null) return d[0].topic;
                    if (null == t && null == n) return null;
                    let f = null != t ? M.default.extractTimestamp(t) : 0,
                        m = null != n ? M.default.extractTimestamp(n) : 0,
                        h = m - (m - f) * .5;
                    if (0 === f) return null;
                    let p = c.sortBy(d, e => {
                        let t = 0,
                            l = M.default.extractTimestamp(e.startId);
                        return t = null != n ? Math.abs(h - l) : Date.now() - M.default.extractTimestamp(e.startId)
                    });
                    return null !== (u = null === (i = c.first(p)) || void 0 === i ? void 0 : i.topic) && void 0 !== u ? u : null
                }
                isFetching(e, t) {
                    var n, l;
                    return null != t ? (null === (l = L[e]) || void 0 === l ? void 0 : l.summaryId) === t : (null === (n = L[e]) || void 0 === n ? void 0 : n.fetching) === !0
                }
                status(e) {
                    return L[e]
                }
                shouldFetch(e, t) {
                    var n, l, a;
                    let s = j[e],
                        i = L[e],
                        r = E.default.getChannel(e);
                    if (!(0, h.canSeeChannelSummaries)(r)) return !1;
                    if (null != t) {
                        let e = null !== (l = null == i ? void 0 : i.summaryIdLastRequestedAt) && void 0 !== l ? l : 0,
                            n = Date.now() - e;
                        return t !== (null == i ? void 0 : i.summaryId) || n > 5e3
                    }
                    let o = null !== (a = null == i ? void 0 : i.lastRequestedAt) && void 0 !== a ? a : 0,
                        u = Date.now() - o;
                    return (null === (n = L[e]) || void 0 === n ? void 0 : n.fetching) !== !0 && ((null == s ? void 0 : s.length) < 1 || u >= 5e3)
                }
                channelAffinities() {
                    return y
                }
                channelAffinitiesById(e) {
                    return null == e ? R : R[e]
                }
                channelAffinitiesStatus() {
                    return b
                }
                shouldFetchChannelAffinities() {
                    return !("fetching" === b.status || null != b.lastResponse && Date.now() - b.lastResponse < 3e4) && !0
                }
                defaultChannelIds(e) {
                    let {
                        withQuickSwitcher: t,
                        withChannelAffinities: n,
                        withUnreads: l,
                        numChannels: a = 25
                    } = e, s = [];
                    return t && (s = s.concat(O)), n && (s = s.concat(y.map(e => e.channel_id))), l && (s = s.filter(e => {
                        let t = E.default.getChannel(e);
                        return null != t && !_.default.isChannelMuted(t.guild_id, e) && I.default.hasUnread(e)
                    })), (s = s.filter(e => {
                        let t = E.default.getChannel(e);
                        return (0, h.canSeeChannelSummaries)(t, !1, !1)
                    })).slice(0, a)
                }
                visibleSummaryIndex() {
                    return s
                }
            }
            k.persistKey = "SummaryStore";
            let V = new k(m.default, {
                CONNECTION_OPEN() {
                    let {
                        source: e
                    } = T.ChannelSummarizationModelSwapExperiment.getCurrentConfig({
                        location: "93448c_3"
                    });
                    return D = e, !1
                },
                CHANNEL_SELECT(e) {
                    let {
                        channelId: t,
                        guildId: n
                    } = e;
                    (null == i ? void 0 : i.channelId) !== t && (i = null), c.isFunction(P) && (P(), P = null), null != n && (T.ChannelSummarizationModelSwapGuildExperiment.getCurrentConfig({
                        guildId: n,
                        location: "93448c_4"
                    }), P = T.ChannelSummarizationModelSwapGuildExperiment.subscribe({
                        guildId: n,
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
                        error: s,
                        receivedAt: i
                    } = e;
                    if (null != l && Object.keys(l).length > 0) {
                        let e = (0, A.createSummaryFromServer)(l, a),
                            n = [...null !== (t = j[a]) && void 0 !== t ? t : []],
                            s = n.findIndex(t => t.id === (null == e ? void 0 : e.id));
                        s > -1 ? n[s] = e : n.push(e), j[a] = n
                    }
                    let r = {
                        ...null !== (n = L[a]) && void 0 !== n ? n : {
                            fetching: !1
                        },
                        summaryId: void 0,
                        summaryIdLastReceivedAt: i,
                        summaryIdError: s
                    };
                    L[a] = r
                },
                REQUEST_CHANNEL_SUMMARY(e) {
                    var t;
                    let {
                        channelId: n,
                        summaryId: l,
                        requestedAt: a
                    } = e;
                    L[n] = {
                        ...null !== (t = L[n]) && void 0 !== t ? t : {
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
                    } = e, s = t.filter(e => Object.keys(e).length > 0).map(e => (0, A.createSummaryFromServer)(e, n));
                    if (null != i && i.channelId === n && !s.some(e => e.id === (null == i ? void 0 : i.summaryId))) {
                        var r;
                        let e = null !== (r = j[n]) && void 0 !== r ? r : [],
                            t = e.find(e => e.id === (null == i ? void 0 : i.summaryId));
                        null != t && s.push(t)
                    }
                    j[n] = (0, d.sortBy)(s, e => M.default.extractTimestamp(e.startId)).reverse();
                    let o = {
                        ...L[n],
                        fetching: !1,
                        error: void 0,
                        lastReceivedAt: a
                    };
                    null != l && (o.error = l), L[n] = o
                },
                REQUEST_CHANNEL_SUMMARIES(e) {
                    var t;
                    L[e.channelId] = {
                        ...null !== (t = L[e.channelId]) && void 0 !== t ? t : {},
                        fetching: !0,
                        lastRequestedAt: e.requestedAt
                    }
                },
                SET_HIGHLIGHTED_SUMMARY(e) {
                    var t;
                    if (null == a && null == e.channelId || e.channelId === (null == a ? void 0 : a.channelId) && e.summaryId === (null == a ? void 0 : a.summaryId)) return !1;
                    if (null != (a = null != e.channelId ? {
                            channelId: e.channelId,
                            summaryId: null !== (t = e.summaryId) && void 0 !== t ? t : null
                        } : null) && a.channelId === e.channelId && null != a.summaryId) {
                        let e = j[a.channelId];
                        s = null == e ? void 0 : e.findIndex(e => e.id === (null == a ? void 0 : a.summaryId))
                    }
                },
                UPDATE_VISIBLE_MESSAGES(e) {
                    let t = x.default.getChannelId();
                    if (null != t) {
                        if (null != a && a.channelId === t && null != a.summaryId) {
                            let e = j[a.channelId];
                            s = null == e ? void 0 : e.findIndex(e => e.id === (null == a ? void 0 : a.summaryId))
                        } else {
                            var n;
                            s = null === (n = j[t]) || void 0 === n ? void 0 : n.findIndex(t => {
                                var n, l, a, s;
                                return n = e.topVisibleMessage, l = e.bottomVisibleMessage, a = t.startId, s = t.endId, !(null == n || n > s) && !(null == l || l < a)
                            })
                        }
                    }
                },
                SET_SELECTED_SUMMARY(e) {
                    var t;
                    let n = e.channelId;
                    return null == n ? null : (n !== (null == i ? void 0 : i.channelId) || e.summaryId !== (null == i ? void 0 : i.summaryId)) && void(i = {
                        channelId: n,
                        summaryId: null !== (t = e.summaryId) && void 0 !== t ? t : null
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
                    b = {
                        ...b,
                        status: "fetching",
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
                        y = [], R = {}, b = {
                            ...b,
                            status: "error",
                            lastResponse: Date.now()
                        };
                        return
                    }
                    y = null != n ? n : [], R = null !== (t = null == n ? void 0 : n.reduce((e, t) => (e[t.channel_id] = t.affinity, e), {})) && void 0 !== t ? t : {}, b = {
                        ...b,
                        status: "ok",
                        lastResponse: Date.now()
                    }
                },
                REQUEST_CHANNEL_SUMMARIES_BULK(e) {
                    let {
                        channelIds: t,
                        requestedAt: n
                    } = e, l = t.reduce((e, t) => {
                        var l;
                        let a = null !== (l = L[t]) && void 0 !== l ? l : {};
                        return e[t] = {
                            ...a,
                            fetching: !0,
                            lastRequestedAt: n,
                            error: void 0
                        }, e
                    }, {});
                    L = {
                        ...L,
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
                    } = e, s = c.toPairs(t).reduce((e, t) => {
                        let [n, l] = t, a = c.chain(l.map(e => (0, A.createSummaryFromServer)(e, n))).sortBy(e => M.default.extractTimestamp(e.startId)).takeRight(75).reverse().filter(e => Object.keys(e).length > 0).value();
                        return e[n] = a, e
                    }, {}), i = a.reduce((e, t) => {
                        var a;
                        let i = null !== (a = L[t]) && void 0 !== a ? a : {},
                            r = s[t];
                        return null != r && (e.summariesByChannel[t] = r), e.summaryFetchStatusByChannel[t] = {
                            ...i,
                            fetching: !1,
                            error: l,
                            lastReceivedAt: n
                        }, e
                    }, {
                        summariesByChannel: {},
                        summaryFetchStatusByChannel: {}
                    });
                    j = {
                        ...j,
                        ...i.summariesByChannel
                    }, L = {
                        ...L,
                        ...i.summaryFetchStatusByChannel
                    }
                },
                CONVERSATION_SUMMARY_UPDATE(e) {
                    var t, n, l;
                    let {
                        channel_id: a,
                        summaries: s,
                        guild_id: i
                    } = e, r = Date.now(), o = c.chain(s).sortBy(e => M.default.extractTimestamp(e.start_id)).filter(e => Object.keys(e).length > 0).map(e => (0, A.createSummaryFromServer)(e, a)).reverse().value(), u = null !== (n = j[a]) && void 0 !== n ? n : [], d = c.chain(o).concat(u).sortBy(e => M.default.extractTimestamp(e.startId)).takeRight(75).uniqBy("id").reverse().value();
                    j[a] = d, L[a] = {
                        ...L[a],
                        error: void 0,
                        fetching: null !== (l = null === (t = L[a]) || void 0 === t ? void 0 : t.fetching) && void 0 !== l && l,
                        lastReceivedAt: r
                    }
                },
                CLEAR_CONVERSATION_SUMMARIES() {
                    j = {}, L = {}
                },
                DELETE_SUMMARY(e) {
                    var t;
                    let n = e.summary.channelId,
                        l = null !== (t = j[n]) && void 0 !== t ? t : [],
                        a = l.indexOf(e.summary); - 1 !== a && j[n].splice(a, 1)
                }
            });
            var F = V
        },
        979975: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("599110"),
                a = n("793237"),
                s = n("49111");

            function i(e) {
                let {
                    summary: t,
                    guildId: n,
                    channelId: i,
                    rating: r = null,
                    problem: o = null,
                    feedback: u = "",
                    location: d
                } = e;
                (0, a.setSummaryFeedback)(t, r), l.default.track(s.AnalyticEvents.SUMMARIES_REPORT_PROBLEM, {
                    reason: o,
                    location: d,
                    rating: r,
                    feedback: u,
                    participant_count: t.people.length,
                    message_count: t.count,
                    start_message_id: t.startId,
                    guild_id: n,
                    channel_id: i,
                    summary_id: t.id,
                    summary_source: t.source,
                    summary_type: t.type
                })
            }
        },
        402318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("424973");
            var l = n("37983");
            n("884691");
            var a = n("917351"),
                s = n.n(a),
                i = n("77078"),
                r = n("86621"),
                o = n("449008"),
                u = n("735310");
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
                    children: (0, l.jsx)(i.Avatar, {
                        src: t.getAvatarURL(a, 16),
                        "aria-label": t.username,
                        size: i.AvatarSizes.SIZE_16,
                        className: u.partyMember
                    })
                })
            });
            var c = e => {
                let {
                    partySize: t,
                    members: n,
                    minAvatarsShown: a = 1,
                    maxAvatarsShown: i = 2,
                    guildId: r
                } = e, {
                    totalSize: c,
                    knownSize: f
                } = t;
                if (c < a) return null;
                let m = s(n).filter(o.isNotNullish).take(i).map(e => (0, l.jsx)(d, {
                        member: e,
                        guildId: r
                    }, e.id)).value(),
                    h = c - f;
                for (let e = 0; e < h && m.length < i; e++) m.push((0, l.jsx)(d, {
                    empty: !0,
                    guildId: r
                }, "empty-member-".concat(e)));
                let p = Math.max(Math.min(c - m.length, 99), 0);
                if (1 === p) {
                    let e = n[i];
                    m.push((0, l.jsx)(d, {
                        member: e,
                        guildId: r
                    }, e.id))
                }
                return (0, l.jsx)("div", {
                    className: u.wrapper,
                    children: (0, l.jsxs)("div", {
                        className: u.partyMembers,
                        children: [m, p > 1 ? (0, l.jsxs)("div", {
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
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("272030"),
                o = n("120027"),
                u = n("487269"),
                d = n("957255"),
                c = n("660478"),
                f = n("109264"),
                m = n("251144"),
                h = n("20662"),
                p = n("15738"),
                C = n("299039"),
                g = n("347738"),
                E = n("118094"),
                v = n("402318"),
                I = n("976818"),
                x = n("49111"),
                _ = n("200521"),
                S = n("137738");

            function N(e) {
                let {
                    summary: t,
                    channel: c,
                    members: I,
                    guildId: N,
                    unread: M,
                    onClick: T
                } = e, [A, j] = a.useState(!1), L = (0, u.getTimestampString)(C.default.extractTimestamp(t.startId)), y = (0, s.useStateFromStores)([g.default], () => g.default.summaryFeedback(t)), R = (e, n) => {
                    e.stopPropagation(), (0, E.default)({
                        summary: t,
                        channel: c,
                        rating: n
                    })
                }, b = d.default.can(x.Permissions.MANAGE_MESSAGES, c);
                return (0, l.jsxs)(i.Clickable, {
                    className: S.container,
                    onClick: T,
                    onContextMenu: e => {
                        b && (0, r.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("113286").then(n.bind(n, "113286"));
                            return n => (0, l.jsx)(e, {
                                ...n,
                                summary: t
                            })
                        })
                    },
                    onMouseEnter: () => j(!0),
                    onMouseLeave: () => j(!1),
                    children: [(0, l.jsx)(p.default, {
                        hovered: A,
                        unread: M,
                        className: S.unreadPill
                    }), (0, l.jsx)("div", {
                        className: S.rowHeader,
                        children: (0, l.jsxs)("div", {
                            className: S.rowHeaderLeft,
                            children: [(0, l.jsx)(i.Text, {
                                className: S.timestamp,
                                color: "interactive-normal",
                                variant: "text-xs/normal",
                                children: L
                            }), (0, l.jsx)(o.default, {
                                height: 4,
                                width: 4,
                                "aria-hidden": "true",
                                className: S.dot
                            }), (0, l.jsx)(f.default, {
                                height: 12,
                                width: 12,
                                className: S.icon
                            }), (0, l.jsx)(i.Text, {
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
                    }), A && !y && (0, l.jsxs)("div", {
                        className: S.feedbackContainer,
                        children: [(0, l.jsx)(i.Clickable, {
                            onClick: e => R(e, _.FeedbackRating.GOOD),
                            children: (0, l.jsx)(h.default, {
                                className: S.thumbIcon,
                                width: 12,
                                height: 12
                            })
                        }), (0, l.jsx)(i.Clickable, {
                            onClick: e => R(e, _.FeedbackRating.BAD),
                            children: (0, l.jsx)(m.default, {
                                className: S.thumbIcon,
                                width: 12,
                                height: 12
                            })
                        })]
                    }), (0, l.jsx)(i.Text, {
                        color: "header-primary",
                        variant: "text-sm/semibold",
                        className: S.title,
                        children: t.topic
                    }), (0, l.jsx)(i.Text, {
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
                    channel: i,
                    selectTopic: r,
                    setOpen: o
                } = e, u = (0, s.useStateFromStores)([c.default], () => c.default.getOldestUnreadMessageId(i.id)), d = a.useCallback(e => {
                    r(e), o(!1)
                }, [r, o]);
                return t.length < 1 ? (0, l.jsx)(I.default, {}) : (0, l.jsx)(l.Fragment, {
                    children: t.map((e, t) => {
                        var a;
                        let s = null !== (a = n[t]) && void 0 !== a ? a : [];
                        return (0, l.jsx)(N, {
                            summary: e,
                            channel: i,
                            members: s,
                            guildId: i.guild_id,
                            unread: null != u && C.default.compare(e.endId, u) > 0,
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
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("543289"),
                i = n("909004"),
                r = n("782340"),
                o = n("203513");

            function u() {
                return (0, l.jsxs)("div", {
                    className: o.container,
                    children: [(0, l.jsxs)("div", {
                        className: o.iconContainer,
                        children: [(0, l.jsx)("div", {
                            className: o.icon,
                            children: (0, l.jsx)(i.default, {
                                className: o.iconOffset,
                                width: 28,
                                height: 28
                            })
                        }), (0, l.jsx)(s.default, {
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
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("979975"),
                i = n("200521"),
                r = n("782340");

            function o(e, t, n) {
                let {
                    rating: l,
                    problem: i,
                    feedback: o
                } = n;
                (0, s.default)({
                    problem: i,
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
                    channel: s,
                    rating: r
                } = e;
                null != t && (r === i.FeedbackRating.BAD ? (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("747194").then(n.bind(n, "747194"));
                    return n => (0, l.jsx)(e, {
                        ...n,
                        onSubmit: e => o(t, s, e),
                        startRating: r
                    })
                }) : o(t, s, {
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
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("77078"),
                o = n("368639"),
                u = n("62843"),
                d = n("632215");

            function c(e) {
                let {
                    userBio: t,
                    className: n,
                    animateOnHover: s = !1,
                    isHovering: c = !1,
                    lineClamp: f = 6
                } = e, m = a.useMemo(() => (0, o.parseBioReact)(t), [t]);
                return (0, l.jsx)("div", {
                    className: i(n, d.markup),
                    children: (0, l.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        lineClamp: f,
                        children: (0, l.jsx)(u.MessagesInteractionContext.Provider, {
                            value: {
                                disableAnimations: s && !c,
                                disableInteractions: !1
                            },
                            children: m
                        })
                    })
                })
            }
        },
        908583: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdleHandlerContext: function() {
                    return i
                },
                IdleStateContext: function() {
                    return r
                },
                default: function() {
                    return o
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("862337");
            let i = a.createContext({
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
                a.useEffect(() => (c.current = new s.DelayedCall(n, () => u(!0)), c.current.delay(), () => {
                    var e;
                    null === (e = c.current) || void 0 === e || e.cancel(), c.current = null
                }), [n]);
                let f = a.useCallback(e => {
                        var t;
                        u(!1), d.current.add(e), null === (t = c.current) || void 0 === t || t.cancel()
                    }, [d, c, u]),
                    m = a.useCallback(e => {
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
                    C = a.useMemo(() => ({
                        onAllowIdle: m,
                        onPreventIdle: f,
                        onActive: h,
                        onForceIdle: p
                    }), [m, f, h, p]);
                return (0, l.jsx)(r.Provider, {
                    value: o,
                    children: (0, l.jsx)(i.Provider, {
                        value: C,
                        children: t({
                            idle: o,
                            ...C
                        })
                    })
                })
            }
        },
        550410: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePreventIdle: function() {
                    return i
                },
                default: function() {
                    return r
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("908583");

            function i(e) {
                let {
                    onPreventIdle: t,
                    onAllowIdle: n,
                    onActive: l
                } = a.useContext(s.IdleHandlerContext), i = a.useCallback(() => {
                    t(e)
                }, [e, t]), r = a.useCallback(() => {
                    n(e)
                }, [e, n]);
                return {
                    preventIdle: i,
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
                } = a.useContext(s.IdleHandlerContext), {
                    preventIdle: u,
                    allowIdle: d
                } = i("interact");
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
                    return m
                },
                CenterControlButton: function() {
                    return p
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("77078"),
                r = n("461380"),
                o = n("587974"),
                u = n("550410"),
                d = n("641568"),
                c = n("782340"),
                f = n("397651");

            function m(e) {
                let {
                    label: t,
                    onClick: n,
                    onKeyDown: a,
                    onMouseEnter: r,
                    onMouseLeave: o,
                    onContextMenu: d,
                    className: c,
                    wrapperClassName: m,
                    iconClassName: h,
                    iconComponent: p,
                    themeable: C = !1,
                    disabled: g = !1,
                    isActive: E = !1,
                    tooltipPosition: v = "top",
                    shouldShowTooltip: I = !0,
                    forceTooltipOpen: x = !1,
                    buttonRef: _,
                    grow: S,
                    "aria-label": N
                } = e;
                return (0, l.jsx)(u.default, {
                    children: (0, l.jsx)(i.Tooltip, {
                        position: v,
                        text: t,
                        "aria-label": N,
                        shouldShow: I,
                        forceOpen: x,
                        children: e => {
                            let {
                                onClick: t,
                                onContextMenu: u,
                                onMouseEnter: v,
                                onMouseLeave: I,
                                ...x
                            } = e;
                            return (0, l.jsx)(i.Button, {
                                look: i.Button.Looks.BLANK,
                                size: i.Button.Sizes.NONE,
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
                                innerClassName: f.lineHeightReset,
                                className: s({
                                    [f.active]: E
                                }, c),
                                wrapperClassName: m,
                                buttonRef: _,
                                grow: S,
                                "aria-label": N,
                                ...x,
                                children: (0, l.jsx)(p, {
                                    className: s(f.controlIcon, h, {
                                        [f.themeable]: C,
                                        [f.active]: E
                                    })
                                })
                            })
                        }
                    })
                })
            }
            let h = {
                red: f.red,
                white: f.white,
                green: f.green,
                yellow: f.yellow,
                primaryDark: f.primaryDark,
                primaryLight: f.primaryLight,
                activeLight: f.activeLight
            };

            function p(e) {
                let {
                    color: t,
                    isActive: n = !1,
                    className: a,
                    iconClassName: p,
                    onPopoutClick: C,
                    popoutOpen: g = !1,
                    ...E
                } = e, v = (0, d.default)(t, n), I = (0, l.jsx)(m, {
                    ...E,
                    grow: !1,
                    onContextMenu: C,
                    iconClassName: s(p, f.centerIcon),
                    className: s(null == C ? a : f.staticButton, f.centerButton, h[v])
                }), x = null;
                return null != C && (x = (0, l.jsxs)("div", {
                    className: s(a, f.contextMenuContainer),
                    children: [(0, l.jsx)(o.default, {
                        mask: o.MaskIDs.CHANNEL_CALL_CONTROL_BUTTON,
                        width: 56,
                        height: 56,
                        children: I
                    }), (0, l.jsx)(u.default, {
                        children: (0, l.jsx)(i.Clickable, {
                            "aria-label": c.default.Messages.MORE_OPTIONS,
                            onClick: C,
                            onContextMenu: C,
                            className: s(f.contextMenuNub, h[v], {
                                [f.active]: g
                            }),
                            children: (0, l.jsx)(r.default, {
                                className: s(f.contextMenuCaret, {
                                    [f.open]: g
                                })
                            })
                        })
                    })]
                })), (0, l.jsxs)(l.Fragment, {
                    children: [x, (0, l.jsx)("div", {
                        className: s({
                            [f.unmasked]: null != C
                        }, null != C ? a : null),
                        children: I
                    })]
                })
            }
        },
        95032: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("292687"),
                i = n("471671"),
                r = n("2770"),
                o = n("45622"),
                u = n("563680"),
                d = n("981913"),
                c = n("782340"),
                f = a.default.connectStores([i.default, s.default], e => {
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
                    } = e, a = t ? c.default.Messages.EXIT_FULL_SCREEN : c.default.Messages.FULL_SCREEN, s = t ? o.default : r.default;
                    return (0, l.jsx)(d.default, {
                        label: a,
                        iconComponent: s,
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
            var l = n("446674"),
                a = n("819855"),
                s = n("841098"),
                i = n("191145"),
                r = n("18494"),
                o = n("49111");

            function u(e, t) {
                let n = (0, l.useStateFromStores)([r.default], () => r.default.getVoiceChannelId()),
                    u = (0, l.useStateFromStores)([i.default], () => null != n ? i.default.getMode(n) : null),
                    d = (0, s.default)();
                return null != e ? e : u === o.ChannelModes.VOICE && (0, a.isThemeLight)(d) ? t ? "activeLight" : "primaryLight" : t ? "white" : "primaryDark"
            }
        },
        525864: function(e, t, n) {
            "use strict";
            var l, a;
            n.r(t), n.d(t, {
                VOICE_RECORDING_MIN_DURATION_MILLIS: function() {
                    return s
                },
                WAVEFORM_WAVE_MAX_VALUE: function() {
                    return i
                }
            }), (a = l || (l = {}))[a.SENDING = 0] = "SENDING", a[a.CANCELLING = 1] = "CANCELLING", a[a.LOCKING = 2] = "LOCKING", a[a.LOCKED = 3] = "LOCKED";
            let s = 500,
                i = 255
        },
        293246: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("627445"),
                a = n.n(l);

            function s(e, t) {
                if (a(e.length >= t, "Waveform smaller than samples"), e.length === t) return e;
                let n = e.length / t,
                    l = [],
                    s = 0;
                for (; l.length < t;) {
                    let t = Math.round((l.length + 1) * n),
                        a = 0,
                        i = 0;
                    for (let n = s; n < t && n < e.length; n++) a += e[n], i++;
                    l[l.length] = a / i, s = t
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
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                o = n("77078"),
                u = n("206230"),
                d = n("806135"),
                c = n("170113"),
                f = n("316680"),
                m = n("830837"),
                h = n("132755"),
                p = n("659500"),
                C = n("829536"),
                g = n("534107"),
                E = n("49111"),
                v = n("782340"),
                I = n("447946");
            let x = a.lazy(() => n.el("403130").then(n.bind(n, "403130")));

            function _(e) {
                let {
                    played: t,
                    duration: n,
                    currentTime: a
                } = e, s = null == n ? "--:--" : t ? (0, c.convertSecondsToClockFormat)(Math.ceil(n - a)) : (0, c.convertSecondsToClockFormat)(Math.ceil(n));
                return (0, l.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    className: I.duration,
                    tabularNumbers: !0,
                    children: s
                })
            }
            var S = a.memo(function(e) {
                var t, n, s, c, S, N;
                let M, {
                        src: T,
                        volume: A = 1,
                        onVolumeChange: j,
                        onMute: L,
                        waveform: y,
                        durationSecs: R,
                        onVolumeShow: b,
                        onVolumeHide: O,
                        onPlay: D,
                        onPause: P,
                        onError: w
                    } = e,
                    U = a.useRef(null),
                    [k, V] = a.useState(0),
                    [F, B] = a.useState(R),
                    [H, G] = a.useState(!1),
                    [W, z] = a.useState(!1),
                    [Z, Y] = a.useState(!1),
                    [K, X] = a.useState(!1),
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
                            X(!1), ee.current = void 0
                        }, 500))
                    }, []),
                    es = a.useCallback(() => {
                        !Z && ea()
                    }, [ea, Z]),
                    ei = a.useCallback(() => {
                        let e = U.current;
                        if (null == e) return;
                        let t = e.error;
                        null == w || w(t)
                    }, [w]),
                    er = a.useCallback(e => {
                        let t = (0, C.perceptualToAmplitude)(e, 1);
                        G(0 === t), $(t), null == j || j(t)
                    }, [j]),
                    eo = a.useCallback(() => {
                        G(!H), null == L || L(!H)
                    }, [H, L]),
                    eu = a.useCallback(() => {
                        Y(!0)
                    }, []),
                    ed = a.useCallback(() => {
                        Y(!1), k === F && ea()
                    }, [k, F, ea]),
                    ec = a.useCallback(e => {
                        let t = U.current;
                        if (null == F || null == t) return;
                        let n = e * F;
                        V(n), t.currentTime = n, X(!0), clearTimeout(ee.current), ee.current = void 0
                    }, [F]);
                a.useEffect(() => {
                    !K && W && X(!0)
                }, [W, K]);
                let ef = a.useRef(null);
                a.useEffect(() => {
                    if (K || W) {
                        if (W) {
                            var e, t;
                            ef.current = performance.now(), null == D || D(!1, k, (null !== (t = null === (e = U.current) || void 0 === e ? void 0 : e.duration) && void 0 !== t ? t : 0) * 1e3)
                        } else {
                            let e = performance.now(),
                                t = ef.current;
                            null == P || P(k, null != t ? (e - t) / 1e3 : 0), ef.current = null
                        }
                    }
                }, [W]), t = U, n = W, s = V, a.useEffect(() => {
                    let e;
                    return ! function l() {
                        let a = t.current;
                        if (null != a) s(a.currentTime), n && (e = requestAnimationFrame(l))
                    }(), () => {
                        null != e && cancelAnimationFrame(e)
                    }
                }, [t, n, s]), c = T, S = W, N = z, a.useEffect(() => {
                    if (S) return p.ComponentDispatch.dispatch(E.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, {
                        src: c
                    }), p.ComponentDispatch.subscribe(E.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, e), () => {
                        p.ComponentDispatch.unsubscribe(E.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, e)
                    };

                    function e(e) {
                        let {
                            src: t
                        } = e;
                        c !== t && N(!1)
                    }
                }, [c, S, N]);
                let em = W ? m.default : h.default,
                    eh = W ? v.default.Messages.PAUSE : v.default.Messages.PLAY;
                M = "Safari" === platform.name ? (0, l.jsx)(a.Suspense, {
                    children: (0, l.jsx)(x, {
                        ref: U,
                        className: I.audioElement,
                        src: T,
                        preload: J,
                        playing: W && !Z,
                        onEnded: es,
                        onLoadedMetadata: el,
                        onError: ei,
                        muted: H,
                        volume: Q
                    })
                }) : (0, l.jsx)(d.default, {
                    ref: U,
                    className: I.audioElement,
                    controls: !1,
                    preload: J,
                    onEnded: es,
                    onLoadedMetadata: el,
                    onError: ei,
                    muted: H,
                    volume: Q,
                    playing: W && !Z,
                    children: (0, l.jsx)("source", {
                        src: T
                    })
                });
                let ep = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion),
                    {
                        enabled: eC
                    } = (0, o.useRedesignIconContext)();
                return (0, l.jsxs)("div", {
                    className: i(I.container, {
                        [I.playing]: W
                    }),
                    onMouseEnter: en,
                    children: [(0, l.jsx)("div", {
                        className: I.rippleContainer,
                        children: (0, l.jsx)("div", {
                            className: i(I.ripple, {
                                [I.reducedMotion]: ep
                            })
                        })
                    }), (0, l.jsx)(o.Clickable, {
                        className: I.playButtonContainer,
                        onClick: et,
                        "aria-label": eh,
                        children: (0, l.jsx)(em, {
                            className: i(I.playIcon, {
                                [I.oldPlayIconSpacing]: !eC && !W
                            }),
                            width: 18,
                            height: 18
                        })
                    }), (0, l.jsx)(g.default, {
                        className: I.waveform,
                        waveform: y,
                        currentTime: k,
                        duration: null != F ? F : 1,
                        playing: W,
                        played: K,
                        onDrag: ec,
                        onDragStart: eu,
                        onDragEnd: ed
                    }), (0, l.jsx)(_, {
                        played: K,
                        currentTime: k,
                        duration: F
                    }), (0, l.jsx)(f.default, {
                        className: I.volumeButton,
                        iconClassName: I.volumeButtonIcon,
                        sliderWrapperClassName: I.volumeSlider,
                        muted: H,
                        value: (0, C.amplitudeToPerceptual)(Q, 1),
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: er,
                        onToggleMute: eo,
                        onVolumeShow: b,
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
            }), n("101997"), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("669491"),
                o = n("77078"),
                u = n("731898"),
                d = n("554743"),
                c = n("284679"),
                f = n("293246"),
                m = n("247883"),
                h = n("525864"),
                p = n("899090");
            let C = h.VOICE_RECORDING_MIN_DURATION_MILLIS / 1e3,
                g = 6,
                E = 2,
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

            function x(e) {
                var t, n, l, a, s;
                let {
                    context: i,
                    devicePixelRatio: r,
                    canvasHeight: o,
                    segmentValue: u,
                    segmentIndex: d,
                    constrainMin: c
                } = e, f = c ? (24 - E) * u + E : 24 * u;
                if (0 !== f) t = i, n = 6 * d * r, l = (o / 2 - f / 2) * r, a = f * r, s = 1 * r, t.moveTo(n, l + s), t.lineTo(n, l + a - s), t.arc(n + s, l + a - s, s, Math.PI, 0, !0), t.lineTo(n + 2 * s, l + s), t.arc(n + s, l + s, s, 0, Math.PI, !0), t.closePath()
            }

            function _(e, t, n) {
                let [l, s] = a.useState(e), [i, r] = a.useState(e);
                return a.useLayoutEffect(() => {
                    s(i), r(e)
                }, [e, t, n]), [l, i]
            }

            function S(e, t, n, l) {
                if (null == l) return [t, !1];
                let a = Math.min((n - l) / 200, 1);
                if (1 === a) return [t, !1];
                let s = (0, c.interpolateColor)(e, t, a);
                return [s, !0]
            }

            function N(e) {
                let {
                    className: t,
                    waveform: n,
                    currentTime: s,
                    duration: c,
                    played: E,
                    playing: N,
                    onDrag: M,
                    onDragStart: T,
                    onDragEnd: A
                } = e, {
                    ref: j,
                    width: L
                } = (0, u.default)(), y = a.useMemo(() => {
                    var e;
                    let t;
                    return Math.floor(((t = (e = c) <= C ? 40 : e >= 45 ? 294 : (Math.min(e, 45) - C) / (45 - C) * 254 + 40) + 4) / g) * g - 4
                }, [c]), R = a.useRef(), b = function(e, t) {
                    let n = a.useMemo(() => (function(e) {
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
                        l = a.useMemo(() => (function(e) {
                            if (null != e) return Math.floor((e + 4) / 6)
                        })(t), [t]),
                        s = a.useMemo(() => {
                            var e;
                            return null !== (e = function(e, t) {
                                if (null != e && null != t) {
                                    if (e.length < t) {
                                        let n = t - e.length;
                                        return e.concat(Array(n).fill(0))
                                    }
                                    return (0, f.default)(e, t)
                                }
                            }(null != n ? n : [], l)) && void 0 !== e ? e : v
                        }, [n, l]);
                    return s
                }(n, L), O = a.useRef(E), D = a.useRef(N), P = a.useRef(null), w = window.devicePixelRatio, {
                    lastBackgroundFillColor: U,
                    backgroundFillColor: k,
                    lastActiveFillColor: V,
                    activeFillColor: F,
                    lastInactiveFillColor: B,
                    inactiveFillColor: H
                } = function(e, t) {
                    let n = (0, o.useToken)(r.default.colors.INTERACTIVE_MUTED).hex(),
                        l = (0, o.useToken)(r.default.colors.INTERACTIVE_NORMAL).hex(),
                        a = (0, o.useToken)(r.default.colors.INTERACTIVE_ACTIVE).hex(),
                        s = (0, o.useToken)(r.default.unsafe_rawColors.BRAND_430).hex(),
                        i = (0, o.useToken)(r.default.unsafe_rawColors.WHITE_500).hex(),
                        u = t ? s : n,
                        [d, c] = _(u, t, e),
                        f = t ? i : e ? a : l,
                        [m, h] = _(f, t, e),
                        p = e ? u : l,
                        [C, g] = _(p, t, e);
                    return {
                        lastBackgroundFillColor: d,
                        backgroundFillColor: c,
                        lastActiveFillColor: m,
                        activeFillColor: h,
                        lastInactiveFillColor: C,
                        inactiveFillColor: g
                    }
                }(E, N);
                a.useEffect(() => {
                    let e = I({
                        showAll: !E,
                        currentTime: s,
                        duration: c,
                        numSegments: b.length
                    });
                    R.current = b.map((t, n) => new m.default(n < e ? t : 0))
                }, [b]), a.useEffect(() => {
                    let e = R.current;
                    if (null == e) return;
                    let t = I({
                        showAll: !E,
                        currentTime: s,
                        duration: c,
                        numSegments: b.length
                    });
                    for (let n = 0; n < e.length; n++) {
                        let l = e[n];
                        if (n < t) {
                            l.animateTo(b[n]);
                            continue
                        }
                        l.reset()
                    }
                }, [b, s, c, E]), a.useEffect(() => {
                    let e = null;
                    return e = requestAnimationFrame(function t(n) {
                        let l = j.current,
                            a = null == l ? void 0 : l.getContext("2d"),
                            s = R.current;
                        if (null == l || null == a || null == s) return;
                        let i = !1;
                        (O.current !== E || D.current !== N) && (O.current = E, D.current = N, P.current = n), null != P.current && n > P.current + 200 && (P.current = null);
                        let r = l.height / w;
                        a.clearRect(0, 0, l.width, l.height), a.beginPath();
                        let [o, u] = S(U, k, n, P.current);
                        i = i || u, a.fillStyle = o;
                        for (let e = 0; e < b.length; e++) x({
                            context: a,
                            devicePixelRatio: w,
                            canvasHeight: r,
                            segmentValue: b[e],
                            segmentIndex: e,
                            constrainMin: !0
                        });
                        a.fill();
                        let [d, c] = S(B, H, n, P.current);
                        i = i || c;
                        let [f, m] = S(V, F, n, P.current);
                        i = i || m;
                        for (let e = 0; e < s.length; e++) {
                            let t = s[e],
                                n = Math.max(t.getCurrentValue(), b[e] - .1);
                            a.beginPath(), a.fillStyle = t.isReset ? d : f, x({
                                context: a,
                                devicePixelRatio: w,
                                canvasHeight: r,
                                segmentValue: n,
                                segmentIndex: e,
                                constrainMin: !t.isReset
                            }), i = i || t.isAnimating(), a.fill()
                        }
                        i && (e = requestAnimationFrame(t))
                    }), () => {
                        null != e && cancelAnimationFrame(e)
                    }
                }, [j, w, b, L, s, c, E, N, U, k, V, F, B, H]);
                let [, G] = (0, d.default)({
                    ref: j,
                    onDrag: M,
                    onDragStart: T,
                    onDragEnd: A
                });
                return (0, l.jsx)("canvas", {
                    onMouseDown: G,
                    className: i(p.canvas, t),
                    style: {
                        width: y
                    },
                    ref: j,
                    height: 32 * window.devicePixelRatio,
                    width: (null != L ? L : 0) * window.devicePixelRatio
                })
            }
        },
        247883: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l, a = n("188904");
            l = class {
                getCurrentValue() {
                    if (null == this.animationDetails) return this.value;
                    let e = performance.now() - this.animationDetails.animationStart,
                        t = this.value < this.animationDetails.lastValue ? 150 : 500;
                    return e > t ? (this.animationDetails = null, this.value) : this.value < this.animationDetails.lastValue ? a.easeOutQuint(e, this.animationDetails.lastValue, this.value, t) : a.easeOutBack(e, this.animationDetails.lastValue, this.value, t, 4)
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
                    return C
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("477850"),
                o = n.n(r),
                u = n("77078"),
                d = n("254490"),
                c = n("945330"),
                f = n("782340"),
                m = n("713351");
            let h = e => {
                    let {
                        filename: t
                    } = e, a = (0, d.classifyFileName)(t), s = n("777483")("../images/file_icons/icon-file-".concat(a, ".svg").replace("../images/file_icons/", "./"));
                    return (0, l.jsx)("img", {
                        className: m.icon,
                        src: s,
                        alt: f.default.Messages.IMG_ALT_ATTACHMENT_FILE_TYPE.format({
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
                        progress: s,
                        onCancelUpload: r,
                        onClick: d,
                        onContextMenu: p
                    } = e, C = 100 === s, g = !C && a > 0;
                    return (0, l.jsxs)("div", {
                        className: i(m.attachment, t),
                        children: [(0, l.jsx)(h, {
                            filename: n
                        }), (0, l.jsxs)("div", {
                            className: m.attachmentInner,
                            children: [(0, l.jsxs)("div", {
                                className: m.filenameWrapper,
                                children: [(0, l.jsx)(u.Clickable, {
                                    className: m.filename,
                                    onClick: d,
                                    onContextMenu: p,
                                    children: n
                                }), g ? (0, l.jsx)("div", {
                                    className: m.size,
                                    children: "— ".concat(o.filesize(a))
                                }) : null]
                            }), (0, l.jsx)("div", {
                                className: m.progressContainer,
                                children: C ? f.default.Messages.ATTACHMENT_PROCESSING : (0, l.jsx)(u.Progress, {
                                    className: m.progress,
                                    percent: s
                                })
                            })]
                        }), C ? null : (0, l.jsx)(u.Clickable, {
                            onClick: r,
                            children: (0, l.jsx)(c.default, {
                                className: m.cancelButton,
                                width: 24,
                                height: 24
                            })
                        })]
                    })
                };
            var C = e => {
                let {
                    className: t,
                    url: n,
                    filename: s,
                    size: r,
                    onClick: d,
                    onContextMenu: c,
                    renderAdjacentContent: f
                } = e;
                return (0, l.jsxs)(a.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: i(m.attachment, m.newMosaicStyle, t),
                        children: [(0, l.jsx)(h, {
                            filename: s
                        }), (0, l.jsxs)("div", {
                            className: m.attachmentInner,
                            children: [(0, l.jsx)("div", {
                                className: m.filenameLinkWrapper,
                                children: (0, l.jsx)(u.Anchor, {
                                    className: m.fileNameLink,
                                    href: n,
                                    onClick: d,
                                    onContextMenu: c,
                                    children: s
                                })
                            }), (0, l.jsx)("div", {
                                className: m.metadata,
                                children: o.filesize(r)
                            })]
                        })]
                    }), null != f && f()]
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
            var l = n("37983"),
                a = n("884691"),
                s = n("143435"),
                i = n("77078"),
                r = n("599110"),
                o = n("195812"),
                u = n("49111"),
                d = n("782340"),
                c = e => {
                    let {
                        href: t,
                        className: n,
                        iconClassName: c,
                        rel: f,
                        target: m,
                        mimeType: h,
                        fileName: p,
                        focusProps: C,
                        onClick: g,
                        ...E
                    } = e, v = a.useMemo(() => s.designConfig.getDefaultLinkInterceptor(t), [t]), I = a.useCallback(e => {
                        r.default.track(u.AnalyticEvents.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                            attachment_type: null == h ? void 0 : h[0],
                            attachment_subtype: null == h ? void 0 : h[1]
                        }), null == g || g(), null == v || v(e)
                    }, [v, h, g]);
                    return null != p ? (0, l.jsx)(i.Anchor, {
                        href: t,
                        onClick: I,
                        target: m,
                        rel: f,
                        className: n,
                        "aria-label": d.default.Messages.DOWNLOAD,
                        focusProps: C,
                        ...E,
                        children: p
                    }) : (0, l.jsx)(i.Anchor, {
                        href: t,
                        onClick: I,
                        target: m,
                        rel: f,
                        className: n,
                        "aria-label": d.default.Messages.DOWNLOAD,
                        focusProps: C,
                        ...E,
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
                    return C
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("748820"),
                i = n("669491");
            let r = Object.freeze({
                    PREMIUM_TIER_0: (0, s.v4)(),
                    PREMIUM_TIER_1: (0, s.v4)(),
                    PREMIUM_TIER_2: (0, s.v4)(),
                    PREMIUM_GUILD: (0, s.v4)(),
                    PREMIUM_TRIAL_TUTORIAL: (0, s.v4)(),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, s.v4)()
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
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                    }), (0, l.jsx)("stop", {
                        offset: "0.5351",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                    }), (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                    })]
                }),
                d = () => (0, l.jsxs)("linearGradient", {
                    id: r.PREMIUM_TIER_1,
                    children: [(0, l.jsx)("stop", {
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
                    }), (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                    })]
                }),
                c = () => (0, l.jsxs)("linearGradient", {
                    id: r.PREMIUM_TIER_2,
                    children: [(0, l.jsx)("stop", {
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                    }), (0, l.jsx)("stop", {
                        offset: "0.502368",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                    }), (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                    })]
                }),
                f = () => (0, l.jsxs)("linearGradient", {
                    id: r.PREMIUM_GUILD,
                    children: [(0, l.jsx)("stop", {
                        stopColor: i.default.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
                    }), (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: i.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                    })]
                }),
                m = () => (0, l.jsxs)("linearGradient", {
                    id: r.PREMIUM_TRIAL_TUTORIAL,
                    children: [(0, l.jsx)("stop", {
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                h = () => (0, l.jsxs)("linearGradient", {
                    id: r.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    gradientTransform: "rotate(45)",
                    children: [(0, l.jsx)("stop", {
                        offset: "0",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, l.jsx)("stop", {
                        offset: "1",
                        stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
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
                        children: [u(), d(), c(), f(), m(), h()]
                    })
                }, () => !0);
            var C = p
        },
        663175: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l, a = n("37983"),
                s = n("884691"),
                i = n("254490"),
                r = n("170113");
            l = class extends s.PureComponent {
                render() {
                    let {
                        src: e,
                        fileSize: t,
                        fileName: n,
                        className: l,
                        playable: s,
                        volume: o,
                        renderLinkComponent: u,
                        onVolumeChange: d,
                        onVolumeShow: c,
                        onVolumeHide: f,
                        autoMute: m,
                        onMute: h,
                        mimeType: p,
                        onPlay: C
                    } = this.props;
                    return (0, a.jsx)(r.default, {
                        src: e,
                        fileName: n,
                        fileSize: (0, i.sizeString)(t),
                        type: r.default.Types.AUDIO,
                        className: l,
                        playable: s,
                        volume: o,
                        onMute: h,
                        autoMute: m,
                        onVolumeChange: d,
                        onVolumeShow: c,
                        onVolumeHide: f,
                        renderLinkComponent: u,
                        mimeType: p,
                        onPlay: C
                    })
                }
            }
        },
        952368: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IMAGE_GIF_RE: function() {
                    return C
                },
                default: function() {
                    return a
                }
            }), n("222007");
            var l, a, s = n("37983"),
                i = n("884691"),
                r = n("917351"),
                o = n("290381"),
                u = n("407063"),
                d = n("315102"),
                c = n("103603"),
                f = n("275623"),
                m = n("594098"),
                h = n("719347"),
                p = n("49111");
            let C = /\.gif($|\?|#)/i,
                g = /\.png($|\?|#)/i;
            (l = class e extends i.Component {
                static isAnimated(e) {
                    let {
                        src: t,
                        original: n,
                        animated: l
                    } = e;
                    return l || C.test(null != n && "" !== n ? n : t)
                }
                static isSrcPNG(e) {
                    let {
                        src: t
                    } = e;
                    return g.test(t)
                }
                componentDidMount() {
                    let {
                        readyState: t
                    } = this.state;
                    t === p.ImageReadyStates.LOADING && this.loadImage(this.getSrc(this.getRatio(), e.isAnimated(this.props)), this.handleImageLoad), e.isAnimated(this.props) && this.observeVisibility()
                }
                componentDidUpdate(t) {
                    let n = e.isAnimated(this.props),
                        l = e.isAnimated(t);
                    l !== n && (n ? this.observeVisibility() : this.unobserveVisibility())
                }
                componentWillUnmount() {
                    e.isAnimated(this.props) && this.unobserveVisibility(), this._cancellers.forEach(e => e()), this._cancellers.clear()
                }
                getSrc(t) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            src: l,
                            width: a,
                            height: s,
                            maxWidth: i,
                            maxHeight: r,
                            mediaLayoutType: o
                        } = this.props,
                        c = null,
                        f = null;
                    return d.SUPPORTS_WEBP && (n || !e.isAnimated(this.props)) ? (c = "webp", e.isSrcPNG(this.props) && (f = "lossless")) : n && (c = "png"), (0, u.getImageSrc)({
                        src: l,
                        width: a,
                        height: s,
                        ratio: t,
                        maxWidth: o === h.MediaLayoutType.MOSAIC ? i : void 0,
                        maxHeight: o === h.MediaLayoutType.MOSAIC ? r : void 0,
                        format: c,
                        quality: f
                    })
                }
                getRatio() {
                    let {
                        width: e,
                        height: t,
                        maxWidth: n = 400,
                        maxHeight: l = 300,
                        mediaLayoutType: a,
                        useFullWidth: s
                    } = this.props;
                    return a === h.MediaLayoutType.MOSAIC && s ? (0, c.getCoverRatio)({
                        width: e,
                        height: t,
                        maxWidth: n,
                        maxHeight: l
                    }) : (0, c.getRatio)({
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
                    return null != e ? e : t ? h.MediaLayoutType.RESPONSIVE : h.MediaLayoutType.STATIC
                }
                loadImage(e, t) {
                    let {
                        width: n,
                        height: l
                    } = this.props;
                    if (1 === n && 1 === l) return;
                    let a = (0, u.loadImage)(e, (e, n) => {
                        null != a && this._cancellers.delete(a), null == t || t(e, n)
                    });
                    null != a && this._cancellers.add(a)
                }
                render() {
                    let {
                        alt: t,
                        zoomThumbnailPlaceholder: n,
                        onZoom: l,
                        shouldLink: a,
                        onContextMenu: i,
                        autoPlay: o,
                        original: u,
                        className: d,
                        imageClassName: c,
                        children: f,
                        animated: h,
                        shouldAnimate: C,
                        width: g,
                        height: E,
                        minWidth: v,
                        minHeight: I,
                        maxWidth: x,
                        maxHeight: _,
                        renderItem: S,
                        onClick: N,
                        renderAccessory: M,
                        tabIndex: T,
                        limitResponsiveWidth: A,
                        useFullWidth: j,
                        placeholder: L,
                        placeholderVersion: y,
                        showThumbhashPlaceholder: R
                    } = this.props, {
                        readyState: b,
                        hasMouseOver: O,
                        hasFocus: D
                    } = this.state, P = null != l, w = this.getRatio(), U = (0, r.clamp)(Math.round(g * w), null != v ? v : 0, null != x ? x : 1 / 0), k = (0, r.clamp)(Math.round(E * w), null != I ? I : 0, null != _ ? _ : 1 / 0), V = {
                        alt: t,
                        readyState: b,
                        onContextMenu: null != i ? i : void 0,
                        zoomable: P,
                        className: d,
                        imageClassName: c,
                        minWidth: v,
                        minHeight: I,
                        mediaLayoutType: this.getType(),
                        limitResponsiveWidth: A,
                        useFullWidth: j,
                        tabIndex: T,
                        width: U,
                        height: k,
                        renderItem: S,
                        src: "",
                        placeholder: L,
                        placeholderVersion: y,
                        showThumbhashPlaceholder: R,
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
                    switch ((P || null != N) && (V.onClick = this.onClick), a && (V.original = null != u && "" !== u ? u : V.src), b) {
                        case p.ImageReadyStates.LOADING:
                            null != n && (V.src = n);
                            break;
                        case p.ImageReadyStates.READY:
                            if (e.isAnimated(this.props)) {
                                V.onMouseLeave = this.onMouseLeave;
                                let t = (o || O || D) && (null == C || C) && e.visibilityObserver.isVisible(this);
                                t ? (V.src = this.getSrc(w), V.renderAccessory = M) : (V.src = this.getSrc(w, !h || !o), V.renderAccessory = this.renderAccessory), null != f && (V.children = e => {
                                    let {
                                        src: n,
                                        size: l,
                                        alt: a,
                                        mediaLayoutType: s
                                    } = e;
                                    return f({
                                        src: n,
                                        size: l,
                                        animating: t,
                                        alt: a,
                                        mediaLayoutType: s
                                    })
                                })
                            } else V.src = this.getSrc(w)
                    }
                    return (0, s.jsx)(m.default, {
                        ...V
                    })
                }
                constructor(t) {
                    super(t), this.state = {
                        readyState: p.ImageReadyStates.LOADING,
                        hasMouseOver: !1,
                        hasFocus: !1
                    }, this._cancellers = new Set, this.observeVisibility = () => {
                        e.visibilityObserver.observe(this)
                    }, this.unobserveVisibility = () => {
                        e.visibilityObserver.unobserve(this)
                    }, this.handleImageLoad = e => this.setState({
                        readyState: e ? p.ImageReadyStates.ERROR : p.ImageReadyStates.READY
                    }), this.preloadImage = (e, t) => {
                        let {
                            width: n,
                            height: l
                        } = e, {
                            width: a,
                            height: s
                        } = this.props;
                        (1 !== a || 1 !== s) && this.loadImage(this.getSrc((0, c.getRatio)({
                            width: a,
                            height: s,
                            maxWidth: n,
                            maxHeight: l
                        })), t)
                    }, this.onMouseEnter = t => {
                        e.isAnimated(this.props) && this.setState({
                            hasMouseOver: !0
                        });
                        let {
                            onMouseEnter: n
                        } = this.props;
                        null != n && n(t, {
                            preloadImage: this.preloadImage
                        })
                    }, this.onFocus = t => {
                        e.isAnimated(this.props) && this.setState({
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
                        return this.props.shouldRenderAccessory ? e || t ? n : (0, s.jsx)(f.default, {}) : null
                    }, (0, u.isImageLoaded)(this.getSrc(this.getRatio(), e.isAnimated(this.props))) && (this.state.readyState = p.ImageReadyStates.READY)
                }
            }).visibilityObserver = new o.VisibilityObserver({
                threshold: .7
            }), l.defaultProps = {
                shouldLink: !1,
                autoPlay: !1,
                animated: !1,
                minWidth: 0,
                minHeight: 0,
                shouldRenderAccessory: !0
            }, a = l
        },
        888673: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l, a = n("37983"),
                s = n("884691"),
                i = n("254490"),
                r = n("952368"),
                o = n("170113"),
                u = n("49111"),
                d = n("782340");
            l = class extends s.Component {
                render() {
                    let {
                        src: e,
                        fileSize: t,
                        className: n,
                        mediaPlayerClassName: l,
                        poster: s,
                        fileName: c,
                        naturalWidth: f,
                        naturalHeight: m,
                        playable: h,
                        downloadable: p = !0,
                        volume: C,
                        autoPlay: g,
                        autoMute: E,
                        responsive: v,
                        mediaLayoutType: I,
                        mimeType: x,
                        renderOverlayContent: _,
                        renderLinkComponent: S,
                        onClick: N,
                        onPlay: M,
                        onEnded: T,
                        onVolumeChange: A,
                        onMute: j,
                        alt: L = d.default.Messages.VIDEO,
                        ...y
                    } = this.props;
                    return (0, a.jsx)(r.default, {
                        alt: L,
                        className: n,
                        src: s,
                        ...y,
                        minWidth: o.default.minWidth,
                        minHeight: o.default.minHeight,
                        shouldLink: !1,
                        shouldAnimate: !1,
                        mediaLayoutType: I,
                        responsive: v,
                        children: n => {
                            let {
                                src: s,
                                size: {
                                    width: r,
                                    height: d
                                }
                            } = n, L = !(f <= u.MAX_VIDEO_WIDTH && m <= u.MAX_VIDEO_HEIGHT || f <= u.MAX_VIDEO_HEIGHT && m <= u.MAX_VIDEO_WIDTH);
                            return (0, a.jsx)(o.default, {
                                className: l,
                                forceExternal: L,
                                src: e,
                                poster: s,
                                width: r,
                                height: d,
                                responsive: v,
                                volume: C,
                                autoPlay: null != g && g,
                                autoMute: null != E && E,
                                type: o.default.Types.VIDEO,
                                mediaLayoutType: I,
                                fileName: c,
                                fileSize: null == t ? void 0 : (0, i.sizeString)(t),
                                playable: h,
                                renderLinkComponent: S,
                                renderOverlayContent: _,
                                onClick: N,
                                onPlay: M,
                                onEnded: T,
                                onVolumeChange: A,
                                onMute: j,
                                mimeType: x,
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
                    return m
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("458960"),
                o = n("994000");
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
            class f extends a.Component {
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
                        width: s,
                        bottom: i,
                        height: r
                    } = n.getBoundingClientRect(), o = l === d.VOLUME ? (i - t) / r : (e - a) / s;
                    return Math.min(1, Math.max(0, o))
                }
                render() {
                    let {
                        buffers: e,
                        type: t,
                        className: n,
                        sliderClassName: a
                    } = this.props, {
                        dragging: s,
                        previewWidth: u,
                        animatedProgress: c
                    } = this.state;
                    return (0, l.jsx)("div", {
                        className: i(n, t === d.VOLUME ? o.vertical : o.horizontal),
                        children: (0, l.jsx)("div", {
                            className: i(a, s ? o.mediaBarInteractionDragging : o.mediaBarInteraction, t === d.VOLUME ? o.mediaBarInteractionVolume : null),
                            onMouseDown: this.handleDragStart,
                            onMouseMove: this.handleMouseMove,
                            ref: e => this.wrapper = e,
                            children: (0, l.jsxs)("div", {
                                className: i(o.mediaBarWrapper, t === d.VOLUME ? o.mediaBarWrapperVolume : null),
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
                                        left: (s ? c : u).interpolate({
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
                            clientX: s,
                            clientY: i
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
                            t(l), n(this.calculatePercentage(s, i), l), a.removeEventListener("mouseup", this.handleDragEnd, !1), a.removeEventListener("mousemove", this.handleDragMove, !1), a.addEventListener("mouseup", this.handleDragEnd, !1), a.addEventListener("mousemove", this.handleDragMove, !1)
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
            f.Types = d, f.defaultProps = {
                currentWindow: window
            };
            var m = f
        },
        924444: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImageModal: function() {
                    return _
                },
                VideoModal: function() {
                    return S
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("394846"),
                o = n("77078"),
                u = n("304580"),
                d = n("605160"),
                c = n("659500"),
                f = n("103603"),
                m = n("874276"),
                h = n("952368"),
                p = n("888673"),
                C = n("505684"),
                g = n("49111"),
                E = n("782340"),
                v = n("713139");

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
            let x = e => {
                let {
                    children: t,
                    hasMediaControls: n,
                    isObscured: s,
                    src: r
                } = e, [o, u] = a.useState(!1), c = a.useRef(r);
                return (a.useEffect(() => {
                    r !== c.current && u(!s)
                }, [r, s]), s) ? (0, l.jsx)(C.ObscuredDisplayContext.Provider, {
                    value: o,
                    children: (0, l.jsx)(C.default, {
                        type: C.default.Types.ATTACHMENT,
                        reason: d.ObscureReason.EXPLICIT_CONTENT,
                        className: v.obscureContainer,
                        obscured: !0,
                        isSingleMosaicItem: !0,
                        obscurityControlClassName: i({
                            [v.controlsOffset]: n && o
                        }),
                        onToggleObscurity: e => {
                            e.stopPropagation(), e.nativeEvent.stopPropagation(), u(e => !e)
                        },
                        children: e => (0, l.jsx)(l.Fragment, {
                            children: (0, l.jsx)("div", {
                                className: i(v.obscureWrapper, {
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

            function _(e) {
                let {
                    src: t,
                    original: n,
                    placeholder: s,
                    width: i,
                    height: o,
                    animated: u,
                    children: d,
                    responsive: m,
                    renderLinkComponent: p,
                    maxWidth: C,
                    maxHeight: _,
                    shouldAnimate: S,
                    onClose: N,
                    shouldHideMediaOptions: M = !1,
                    obscure: T = !1,
                    ...A
                } = e, {
                    width: j,
                    height: L
                } = (0, f.zoomFit)(i, o), y = r.isMobile && null != N;
                a.useEffect(() => {
                    if (null != N) return c.ComponentDispatch.subscribe(g.ComponentActions.MEDIA_MODAL_CLOSE, N), () => {
                        c.ComponentDispatch.unsubscribe(g.ComponentActions.MEDIA_MODAL_CLOSE, N)
                    }
                }, [N]);
                let R = M ? e => {
                    e.stopPropagation(), e.preventDefault()
                } : A.onContextMenu;
                return (0, l.jsxs)("div", {
                    className: v.wrapper,
                    children: [y ? (0, l.jsx)(I, {
                        onClose: N
                    }) : null, (0, l.jsx)(x, {
                        isObscured: T,
                        src: t,
                        children: e => (0, l.jsx)(h.default, {
                            src: t,
                            placeholder: s,
                            shouldLink: !1,
                            width: i,
                            height: o,
                            maxWidth: j,
                            maxHeight: L,
                            children: d,
                            animated: !e && u,
                            autoPlay: !e,
                            responsive: m,
                            onContextMenu: R,
                            ...A
                        }, t)
                    }), null != n && !M && p({
                        href: n,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        className: v.downloadLink,
                        children: E.default.Messages.OPEN_IN_BROWSER
                    })]
                })
            }

            function S(e) {
                let {
                    src: t,
                    width: n,
                    height: a,
                    onClose: s,
                    renderLinkComponent: o,
                    shouldHideMediaOptions: u = !1,
                    obscure: d = !1,
                    ...c
                } = e, {
                    width: h,
                    height: C
                } = (0, f.zoomFit)(n, a), g = r.isMobile && null != s, _ = u ? e => {
                    e.stopPropagation(), e.preventDefault()
                } : c.onContextMenu;
                return (0, l.jsxs)("div", {
                    className: i(v.wrapper, v.videoWrapper),
                    children: [g ? (0, l.jsx)(I, {
                        onClose: s
                    }) : null, (0, l.jsx)(x, {
                        hasMediaControls: !0,
                        isObscured: d,
                        src: t,
                        children: e => (0, l.jsx)(p.default, {
                            src: t,
                            width: n,
                            height: a,
                            maxWidth: h,
                            maxHeight: C,
                            renderLinkComponent: o,
                            volume: m.getVolume,
                            autoMute: m.getMuted,
                            onVolumeChange: m.setVolume,
                            onMute: m.setMuted,
                            autoPlay: !e,
                            onContextMenu: _,
                            ...c
                        }, t)
                    }), !u && o({
                        href: t,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        className: v.downloadLink,
                        children: E.default.Messages.OPEN_IN_BROWSER
                    })]
                })
            }
        },
        170113: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                convertSecondsToClockFormat: function() {
                    return b
                },
                default: function() {
                    return k
                }
            }), n("424973"), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("917351"),
                o = n.n(r),
                u = n("458960"),
                d = n("77078"),
                c = n("95032"),
                f = n("829536"),
                m = n("563680"),
                h = n("725962"),
                p = n("672724"),
                C = n("392284"),
                g = n("468482"),
                E = n("316680"),
                v = n("830837"),
                I = n("132755"),
                x = n("73034"),
                _ = n("58608"),
                S = n("719347"),
                N = n("49111"),
                M = n("782340"),
                T = n("167691"),
                A = n("173791");
            let j = "-:--",
                L = {
                    friction: 14,
                    tension: 200
                },
                y = {
                    VIDEO: "VIDEO",
                    AUDIO: "AUDIO"
                },
                R = {
                    width: "100%",
                    height: "100%",
                    backgroundColor: "black"
                };

            function b(e) {
                let t = 0 | e,
                    n = t % 60;
                return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"))
            }
            let O = e => {
                let {
                    current: t,
                    duration: n
                } = e, a = null != t ? b(t) : j, s = null != n ? b(n) : j;
                return a = a.padStart(s.length, "0"), (0, l.jsxs)("div", {
                    className: T.durationTimeWrapper,
                    children: [(0, l.jsx)("span", {
                        className: T.durationTimeDisplay,
                        children: a
                    }), (0, l.jsx)("span", {
                        className: T.durationTimeSeparator,
                        children: "/"
                    }), (0, l.jsx)("span", {
                        className: T.durationTimeDisplay,
                        children: s
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
                        ...L
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
                        onPlay: s,
                        disabled: i
                    } = this.props;
                    return e ? (0, l.jsx)(d.Clickable, {
                        className: T.videoButton,
                        onClick: a,
                        tabIndex: i ? -1 : 0,
                        "aria-label": M.default.Messages.PAUSE,
                        children: (0, l.jsx)(v.default, {
                            className: T.controlIcon
                        }, "pause")
                    }) : null != t && t === n ? (0, l.jsx)(d.Clickable, {
                        className: T.videoButton,
                        onClick: s,
                        tabIndex: i ? -1 : 0,
                        "aria-label": M.default.Messages.PLAY_AGAIN,
                        children: (0, l.jsx)(x.default, {
                            className: T.controlIcon
                        }, "replay")
                    }) : (0, l.jsx)(d.Clickable, {
                        className: T.videoButton,
                        onClick: s,
                        tabIndex: i ? -1 : 0,
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
                        muted: s,
                        onDrag: i,
                        onDragEnd: r,
                        onDragStart: o,
                        onToggleMuted: d,
                        onVolumeShow: c,
                        onVolumeHide: f,
                        width: m,
                        volume: h,
                        type: C
                    } = this.props;
                    return (0, l.jsxs)(u.default.div, {
                        className: C === y.VIDEO ? T.videoControls : T.audioControls,
                        onClick: e => e.stopPropagation(),
                        onDoubleClick: e => e.stopPropagation(),
                        style: this.getAnimatedStyle(),
                        children: [this.renderPlayIcon(), "string" == typeof m || m > 250 ? (0, l.jsx)(O, {
                            current: n,
                            duration: a
                        }) : null, (0, l.jsx)(p.default, {
                            buffers: e,
                            value: null != a ? a : 0,
                            onDrag: i,
                            onDragEnd: r,
                            onDragStart: o,
                            type: p.default.Types.DURATION,
                            ref: this.setDurationRef
                        }), (0, l.jsx)("div", {
                            className: A.flex,
                            children: (0, l.jsx)(E.default, {
                                ref: this.setVolumeButtonRef,
                                muted: s,
                                value: h,
                                minValue: 0,
                                maxValue: 1,
                                currentWindow: window,
                                onValueChange: e => i(e, p.default.Types.VOLUME),
                                onToggleMute: d,
                                onVolumeShow: c,
                                onVolumeHide: f,
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
                    disabled: s,
                    mimeType: i,
                    hideDownloadButton: r
                } = e;
                return (0, l.jsxs)("div", {
                    className: T.audioMetadata,
                    children: [(0, l.jsxs)("div", {
                        className: T.metadataContent,
                        children: [s ? t : (0, l.jsx)(h.default, {
                            href: a,
                            className: T.metadataDownload,
                            iconClassName: T.metadataIcon,
                            mimeType: i,
                            fileName: t
                        }), (0, l.jsx)("div", {
                            className: T.metadataSize,
                            children: n
                        })]
                    }), !r && (0, l.jsx)(h.default, {
                        href: a,
                        className: T.metadataDownload,
                        iconClassName: T.metadataIcon,
                        mimeType: i
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
                            ...L,
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
                            playing: s,
                            fullscreen: i,
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
                    s && !t.playing ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && (null == c || c.pop(s))) : !s && t.playing && (d.pause(), null == c || c.pop(s), null == n || n());
                    let f = (0, m.getFullScreenNode)(d.parentNode, d);
                    i && !t.fullscreen && null != f ? ((0, m.requestFullScreen)(f), f.addEventListener(m.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenExit)) : !i && t.fullscreen && null != f && (f.removeEventListener(m.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenExit), (0, m.exitFullScreen)(f)), o === p.default.Types.DURATION && t.dragging !== p.default.Types.DURATION && s ? d.pause() : o !== p.default.Types.DURATION && t.dragging === p.default.Types.DURATION && s && d.play(), r !== t.muted && (d.muted = r, null == a || a(r)), u !== t.volume && (d.volume = u, null == l || l(u))
                }
                componentWillUnmount() {
                    this._unmounted = !0;
                    let {
                        current: e
                    } = this.mediaRef;
                    if (null == e) return;
                    let t = (0, m.getFullScreenNode)(e.parentNode, e);
                    null != t && (t.removeEventListener(m.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenExit), (0, m.exitFullScreen)(t))
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
                        let s = {};
                        if ("function" == typeof n) {
                            let e = n();
                            e !== this.state.volume && (a.volume = e, s.volume = e)
                        }
                        if ("function" == typeof l) {
                            let e = l();
                            e !== this.state.muted && (a.muted = e, s.muted = e)
                        }
                        this.setState(s), a.play(), null == t || t(e, 1e3 * a.currentTime, 1e3 * a.duration)
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
                        responsive: s,
                        mediaLayoutType: i
                    } = this.props, {
                        playing: r,
                        fullscreen: o
                    } = this.state, u = this.getWidth(), d = this.getHeight();
                    return n ? (0, l.jsx)(_.default, {
                        className: T.video,
                        controls: !1,
                        height: d,
                        poster: t,
                        width: u,
                        responsive: s && !o,
                        mediaLayoutType: i,
                        playsInline: !0,
                        autoPlay: r
                    }) : (0, l.jsx)(_.default, {
                        className: T.video,
                        controls: !1,
                        playsInline: !0,
                        autoPlay: r,
                        height: d,
                        responsive: s && !o,
                        mediaLayoutType: o ? S.MediaLayoutType.STATIC : i,
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
                            onVolumeShow: s,
                            onVolumeHide: i
                        },
                        state: {
                            buffers: r,
                            currentTime: o,
                            duration: u,
                            hasClickedPlay: d,
                            hideControls: h,
                            muted: p,
                            playing: g,
                            fullscreen: E,
                            volume: v,
                            dragging: I
                        }
                    } = this, x = this.getWidth();
                    return d || n || t === y.AUDIO ? (0, l.jsx)(D, {
                        buffers: r,
                        currentTime: o,
                        duration: u,
                        volume: (0, f.amplitudeToPerceptual)(v, 1),
                        hide: t === y.VIDEO && h,
                        muted: p,
                        autoPlay: n,
                        onDrag: this.handleDrag,
                        onDragEnd: this.handleDragEnd,
                        onDragStart: this.handleDragStart,
                        onPause: () => this.setPlay(!1),
                        onPlay: () => this.setPlay(!0),
                        onToggleMuted: this.toggleMuted,
                        onVolumeShow: s,
                        onVolumeHide: i,
                        playing: g,
                        dragging: I,
                        type: t,
                        ref: this.controlsRef,
                        width: E ? window.screen.width : x,
                        disabled: !a,
                        children: t === y.VIDEO ? (0, l.jsx)(c.default, {
                            "aria-label": M.default.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
                            className: T.videoButton,
                            guestWindow: window,
                            onClick: this.toggleFullscreen,
                            node: (0, m.getFullScreenNode)(null == e ? void 0 : e.parentNode, e)
                        }) : null
                    }) : (0, l.jsx)(C.default, {
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
                        playable: s,
                        mimeType: i
                    } = this.props;
                    return null == e || null == t ? null : a === y.AUDIO ? (0, l.jsx)(P, {
                        fileName: e,
                        fileSize: t,
                        src: n,
                        disabled: !s,
                        mimeType: i,
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
                    return l ? R : t === y.AUDIO ? {
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
                        className: s,
                        renderLinkComponent: r,
                        responsive: o,
                        mediaLayoutType: u,
                        renderOverlayContent: d
                    } = this.props, {
                        fullscreen: c,
                        hideControls: f,
                        playing: m
                    } = this.state, h = T.wrapperPaused;
                    if (t === y.AUDIO ? h = T.wrapperAudio : f ? h = T.wrapperControlsHidden : m && (h = T.wrapperPlaying), a && t === y.VIDEO) {
                        let t = this.getWidth();
                        return (0, l.jsxs)("div", {
                            className: i(h, {
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
                        className: i(h, T.newMosaicStyle, s, {
                            [T.wrapperMediaMosaic]: u === S.MediaLayoutType.MOSAIC
                        }),
                        "data-fullscreen": c,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        onMouseMove: m ? this.handleMouseMove : void 0,
                        onKeyDown: this.handleKeyDown,
                        style: this.getMediaStyle(),
                        children: [this.renderMetadata(), t === y.AUDIO ? this.renderAudio() : this.renderVideo(), this.renderControls(), t === y.VIDEO ? this.renderPlayPausePop() : null, null != d ? (0, l.jsx)("div", {
                            className: i({
                                [T.overlayContentHidden]: m || c
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
                        let t = (0, m.getFullScreenNode)(e.parentNode, e);
                        (null == t || !(0, m.isFullScreen)(t)) && this.setState({
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
                            let t = (0, f.perceptualToAmplitude)(e, 1);
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
                                        s = e.buffered.end(l);
                                    if (s - a < 1) continue;
                                    let i = (s - a) / n,
                                        r = a / n;
                                    t.push([r, i])
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
                                autoMute: s
                            }
                        } = this;
                        if (null != l) {
                            l(e);
                            return
                        }
                        e.stopPropagation(), a && !t && n && s ? this.setState({
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
                        volume: s,
                        playable: i
                    } = this.props, r = "function" == typeof s ? s() : s, u = "function" == typeof l ? l() : l;
                    this.state = {
                        buffers: [],
                        currentTime: null,
                        dragging: null,
                        duration: null,
                        fullscreen: !1,
                        hasClickedPlay: !1,
                        hasLoadedMetadata: !1,
                        hideControls: !i,
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
            U.Types = y, U.defaultProps = {
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
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("509043"),
                o = n("77078"),
                u = n("873218"),
                d = n("780121"),
                c = e => {
                    let {
                        children: t,
                        className: n,
                        color: s,
                        iconType: c,
                        onMouseEnter: f,
                        onMouseLeave: m,
                        ...h
                    } = e, [p, C] = a.useState(!1), g = a.useCallback(e => {
                        C(!0), null == f || f(e)
                    }, [C, f]), E = a.useCallback(e => {
                        C(!1), null == m || m(e)
                    }, [C, m]), v = {};
                    return null != s && (v = {
                        color: (0, r.int2hex)(s),
                        backgroundColor: p ? (0, r.int2rgba)(s, .3) : (0, r.int2rgba)(s, .1)
                    }), (0, l.jsx)(o.Clickable, {
                        ...h,
                        tag: "span",
                        className: i(n, {
                            [d.wrapper]: !0,
                            interactive: h.onClick
                        }),
                        onMouseEnter: g,
                        onMouseLeave: E,
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
                    return _
                },
                default: function() {
                    return N
                }
            }), n("222007");
            var l, a, s = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                u = n("669491"),
                d = n("681187"),
                c = n("77078"),
                f = n("605160"),
                m = n("449008"),
                h = n("462579"),
                p = n("867544"),
                C = n("782340"),
                g = n("145719");
            (a = l || (l = {})).TEXT = "text", a.ATTACHMENT = "attachment", a.EMBED = "embed";
            let E = e => {
                    let {
                        className: t
                    } = e;
                    return (0, s.jsx)("div", {
                        className: o(g.spoilerWarning, t),
                        children: C.default.Messages.SPOILER
                    })
                },
                v = e => {
                    let {
                        className: t,
                        isSingleMosaicItem: n,
                        obscureOnly: l
                    } = e;
                    return (0, s.jsx)("div", {
                        className: o(g.explicitContentWarning, t),
                        children: l ? null : (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(d.ImageWarningIcon, {
                                width: 32,
                                height: 32,
                                color: u.default.colors.WHITE
                            }), n && (0, s.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "always-white",
                                className: g.explicitContentWarningText,
                                children: C.default.Messages.EXPLICIT_CONTENT_WARNING
                            })]
                        })
                    })
                },
                I = e => {
                    let {
                        reason: t = f.ObscureReason.SPOILER,
                        className: n,
                        isSingleMosaicItem: l = !1
                    } = e;
                    switch (t) {
                        case f.ObscureReason.SPOILER:
                            return (0, s.jsx)(E, {
                                className: n
                            });
                        case f.ObscureReason.EXPLICIT_CONTENT:
                            return (0, s.jsx)(v, {
                                isSingleMosaicItem: l,
                                className: n
                            });
                        case f.ObscureReason.POTENTIAL_EXPLICIT_CONTENT:
                            return (0, s.jsx)(v, {
                                isSingleMosaicItem: l,
                                className: n,
                                obscureOnly: !0
                            });
                        default:
                            return (0, m.assertNever)(t)
                    }
                },
                x = e => {
                    let {
                        obscureReason: t,
                        isVisible: n,
                        handleToggleObscurity: l,
                        obscurityControlClassName: a
                    } = e;
                    return t !== f.ObscureReason.EXPLICIT_CONTENT ? null : (0, s.jsx)("div", {
                        className: o(g.obscureButtonContainer, a),
                        children: (0, s.jsx)(c.Clickable, {
                            className: o(g.obscureHoverButton),
                            onClick: l,
                            "aria-label": C.default.Messages.EXPLICIT_CONTENT_BUTTON_TOOLTIP,
                            children: n ? (0, s.jsx)(h.default, {
                                width: 24,
                                height: 24
                            }) : (0, s.jsx)(p.default, {
                                width: 24,
                                height: 24
                            })
                        })
                    })
                },
                _ = i.createContext(!1);
            class S extends i.PureComponent {
                renderWithTooltip(e) {
                    return (0, s.jsx)(c.Tooltip, {
                        position: "left",
                        text: this.state.visible ? null : this.tooltipText,
                        children: t => {
                            let {
                                onMouseEnter: n,
                                onMouseLeave: l
                            } = t;
                            return i.cloneElement(i.Children.only(e), {
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
                        reason: i = f.ObscureReason.SPOILER,
                        isSingleMosaicItem: r = !1,
                        obscurityControlClassName: u
                    } = this.props, {
                        visible: d
                    } = this.state, m = (0, s.jsx)(_.Consumer, {
                        children: m => {
                            let h = m || d || !a;
                            return [f.ObscureReason.EXPLICIT_CONTENT, f.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(i) && !t ? (0, s.jsxs)("div", {
                                "aria-label": h ? void 0 : this.ariaLabel,
                                "aria-expanded": h,
                                style: l,
                                className: o(n, g.spoilerContent, g.spoilerContainer, {
                                    [g.hidden]: !h
                                }),
                                role: h ? "presentation" : "button",
                                tabIndex: h ? -1 : 0,
                                children: [h || t ? null : (0, s.jsx)(I, {
                                    reason: i,
                                    isSingleMosaicItem: r
                                }), (0, s.jsx)("div", {
                                    "aria-hidden": !h,
                                    className: g.spoilerInnerContainer,
                                    children: e(!h)
                                }), (0, s.jsx)(x, {
                                    obscureReason: i,
                                    isVisible: d,
                                    handleToggleObscurity: this.handleToggleObscurity,
                                    obscurityControlClassName: u
                                })]
                            }) : (0, s.jsxs)(c.Clickable, {
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
                                children: [h || t ? null : (0, s.jsx)(I, {
                                    reason: i,
                                    isSingleMosaicItem: r
                                }), (0, s.jsx)("div", {
                                    "aria-hidden": !h,
                                    className: g.spoilerInnerContainer,
                                    children: e(!h)
                                })]
                            })
                        }
                    });
                    return t ? this.renderWithTooltip(m) : m
                }
                renderObscuredEmbed() {
                    let {
                        children: e,
                        className: t,
                        containerStyles: n,
                        isSingleMosaicItem: l,
                        obscurityControlClassName: a,
                        reason: i = f.ObscureReason.SPOILER
                    } = this.props, {
                        visible: r
                    } = this.state;
                    return (0, s.jsx)(_.Consumer, {
                        children: u => {
                            let d = u || r;
                            return [f.ObscureReason.EXPLICIT_CONTENT, f.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(i) ? (0, s.jsxs)("div", {
                                "aria-label": r ? void 0 : this.ariaLabel,
                                "aria-expanded": d,
                                style: n,
                                className: o(t, g.spoilerContent, g.spoilerContainer, {
                                    [g.hidden]: !d
                                }),
                                role: d ? "presentation" : "button",
                                tabIndex: d ? -1 : 0,
                                children: [d ? null : (0, s.jsx)(I, {
                                    reason: i,
                                    isSingleMosaicItem: l
                                }), (0, s.jsx)("div", {
                                    "aria-hidden": !d,
                                    className: g.spoilerInnerContainer,
                                    children: e(!d)
                                }), (0, s.jsx)(x, {
                                    obscureReason: i,
                                    isVisible: r,
                                    handleToggleObscurity: this.handleToggleObscurity,
                                    obscurityControlClassName: a
                                })]
                            }) : (0, s.jsxs)(c.Clickable, {
                                "aria-label": this.ariaLabel,
                                "aria-expanded": d,
                                className: o(t, g.spoilerContent, g.spoilerContainer, {
                                    [g.hidden]: !d
                                }),
                                onClick: d ? void 0 : this.removeObscurity,
                                style: n,
                                role: d ? "presentation" : "button",
                                tabIndex: d ? -1 : 0,
                                children: [d ? null : (0, s.jsx)(I, {
                                    reason: i,
                                    className: g.embed
                                }), (0, s.jsx)("div", {
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
                    } = this.state, a = (0, s.jsx)(_.Consumer, {
                        children: a => {
                            let r = a || l,
                                u = i.Children.toArray(e(r)),
                                d = i.Children.map(u, e => {
                                    let n = i.isValidElement(e);
                                    return n && null != t ? t(e, r) : e
                                });
                            return (0, s.jsx)(c.Clickable, {
                                tag: "span",
                                onClick: r ? void 0 : this.removeObscurity,
                                "aria-label": r ? void 0 : this.ariaLabel,
                                "aria-expanded": r,
                                tabIndex: r ? -1 : 0,
                                role: r ? "presentation" : "button",
                                className: o(n, g.spoilerContent, g.spoilerMarkdownContent, {
                                    [g.hidden]: !r
                                }),
                                children: (0, s.jsx)("span", {
                                    className: g.obscuredTextContent,
                                    children: (0, s.jsx)("span", {
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
                        type: e = "text"
                    } = this.props;
                    switch (e) {
                        case "text":
                            return this.renderObscuredText();
                        case "attachment":
                            return this.renderObscuredAttachment();
                        case "embed":
                            return this.renderObscuredEmbed();
                        default:
                            return (0, m.assertNever)(e)
                    }
                }
                get ariaLabel() {
                    let {
                        reason: e = f.ObscureReason.SPOILER
                    } = this.props;
                    switch (e) {
                        case f.ObscureReason.SPOILER:
                            return C.default.Messages.SPOILER;
                        case f.ObscureReason.EXPLICIT_CONTENT:
                            return C.default.Messages.EXPLICIT_CONTENT_WARNING_TOOLTIP;
                        case f.ObscureReason.POTENTIAL_EXPLICIT_CONTENT:
                            return C.default.Messages.EXPLICIT_CONTENT_WARNING_PENDING;
                        default:
                            return (0, m.assertNever)(e)
                    }
                }
                get tooltipText() {
                    let {
                        reason: e = f.ObscureReason.SPOILER
                    } = this.props;
                    switch (e) {
                        case f.ObscureReason.SPOILER:
                            return C.default.Messages.SPOILER;
                        case f.ObscureReason.EXPLICIT_CONTENT:
                            return C.default.Messages.EXPLICIT_CONTENT_WARNING_TOOLTIP;
                        case f.ObscureReason.POTENTIAL_EXPLICIT_CONTENT:
                            return C.default.Messages.EXPLICIT_CONTENT_WARNING_PENDING;
                        default:
                            return (0, m.assertNever)(e)
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
            S.Types = l, S.Reasons = f.ObscureReason;
            var N = S
        },
        98292: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("77078"),
                o = n("374665");

            function u(e) {
                let {
                    children: t,
                    "aria-label": n,
                    className: s,
                    position: u
                } = e, d = a.useRef(null), c = null != n ? n : "string" == typeof t && t;
                return (0, l.jsx)(r.Tooltip, {
                    position: null != u ? u : "top",
                    delay: 500,
                    text: t,
                    "aria-label": c,
                    children: n => {
                        let {
                            onMouseEnter: a,
                            onMouseLeave: r
                        } = n;
                        return (0, l.jsx)("div", {
                            className: i(s, o.overflow),
                            ref: d,
                            "aria-hidden": e["aria-hidden"],
                            onMouseEnter: () => {
                                let {
                                    current: e
                                } = d;
                                null != e && e.offsetWidth < e.scrollWidth && (null == a || a())
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
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("868233"),
                o = n("77078"),
                u = n("903962"),
                d = n("993105"),
                c = n("410889"),
                f = n("461380"),
                m = n("195812"),
                h = n("967685"),
                p = n("204591"),
                C = n("782340"),
                g = n("219127"),
                E = n("862839");

            function v(e) {
                let {
                    text: t,
                    language: a
                } = e, s = () => (0, l.jsx)("pre", {
                    children: (0, l.jsx)("code", {
                        className: i(E.scrollbarGhostHairline, g.codeView, "hljs"),
                        children: t
                    })
                });
                return (0, l.jsx)(r.LazyLibrary, {
                    createPromise: () => n.el("86256").then(n.bind(n, "86256")),
                    webpackId: "86256",
                    render: e => {
                        if (!e.hasLanguage(a)) return s();
                        let n = e.highlight(a, t, !0);
                        return null == n ? s() : (0, l.jsx)("pre", {
                            children: (0, l.jsx)("code", {
                                className: i(E.scrollbarGhostHairline, g.codeView, "hljs", n.language),
                                dangerouslySetInnerHTML: {
                                    __html: n.value
                                }
                            })
                        })
                    },
                    renderFallback: () => s()
                })
            }

            function I(e) {
                let {
                    expanded: t,
                    setExpanded: n,
                    isWholeFile: a,
                    numLines: s
                } = e, i = (a ? C.default.Messages.PREVIEW_NUM_LINES : C.default.Messages.PREVIEW_NUM_LINES_AT_LEAST).format({
                    lines: s
                });
                return (0, l.jsx)(o.Tooltip, {
                    text: "".concat(t ? C.default.Messages.COLLAPSE : C.default.Messages.EXPAND, " (").concat(i, ")"),
                    children: e => (0, l.jsxs)(o.Clickable, {
                        ...e,
                        className: g.toggleExpandSection,
                        onClick: () => {
                            n(!t)
                        },
                        children: [(0, l.jsx)(f.default, {
                            direction: t ? f.default.Directions.UP : f.default.Directions.DOWN
                        }), t ? C.default.Messages.COLLAPSE : C.default.Messages.EXPAND]
                    })
                })
            }

            function x(e) {
                let {
                    attachment: t
                } = e, n = "".concat(t.filename, " (").concat((0, d.formatKbSize)(t.size), ")");
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(o.Tooltip, {
                        text: n,
                        children: e => (0, l.jsx)("span", {
                            ...e,
                            className: i(g.downloadSection, g.attachmentName),
                            children: t.filename
                        })
                    }), (0, l.jsx)(o.Tooltip, {
                        text: n,
                        children: e => (0, l.jsx)("span", {
                            ...e,
                            className: i(g.downloadSection, g.formattedSize),
                            children: (0, d.formatKbSize)(t.size)
                        })
                    }), (0, l.jsx)(o.Tooltip, {
                        text: "".concat(C.default.Messages.DOWNLOAD, " ").concat(n),
                        children: e => (0, l.jsx)(o.Anchor, {
                            ...e,
                            className: g.downloadSection,
                            href: t.url,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: (0, l.jsx)(m.default, {
                                className: g.downloadButton,
                                width: 24,
                                height: 24
                            })
                        })
                    })]
                })
            }

            function _(e) {
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
                            "aria-label": C.default.Messages.PREVIEW_CHANGE_LANGUAGE,
                            children: (0, l.jsx)(o.Combobox, {
                                className: g.languageSelector,
                                multiSelect: !1,
                                placeholder: C.default.Messages.PREVIEW_SEARCH_LANGUAGE_PLACEHOLDER,
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
                        text: C.default.Messages.PREVIEW_CHANGE_LANGUAGE,
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
                    text: C.default.Messages.PREVIEW_WHOLE_FILE,
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
                    expanded: s,
                    setExpanded: r,
                    language: u,
                    setLanguage: c,
                    bytesLeft: f,
                    className: m
                } = e, h = null == a ? void 0 : a.split("\n"), p = null !== (t = null == h ? void 0 : h.length) && void 0 !== t ? t : 0, E = s ? 100 : 6, N = 0 === f, M = "";
                N && s && p > E ? M = "\n..." : !N && (M = "..."), "" !== M && (N ? M += " " + C.default.Messages.PREVIEW_LINES_LEFT.format({
                    lines: p - E
                }) : M += " " + C.default.Messages.PREVIEW_BYTES_LEFT.format({
                    formattedBytes: (0, d.formatKbSize)(f)
                }));
                let T = (null == h ? void 0 : h.slice(0, E).join("\n")) + M,
                    A = s || E < p;
                return (0, l.jsxs)("div", {
                    className: i(m, g.container),
                    children: [(0, l.jsx)("div", {
                        className: i(g.textContainer, {
                            [g.expanded]: s
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
                                expanded: s,
                                setExpanded: r,
                                isWholeFile: N,
                                numLines: p
                            }), (0, l.jsx)(S, {
                                language: u,
                                fileContents: a,
                                bytesLeft: f,
                                attachment: n
                            })]
                        }) : null, (0, l.jsx)("div", {
                            className: g.footerGap
                        }), (0, l.jsx)(x, {
                            attachment: n
                        }), (0, l.jsx)(_, {
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
                    fileContents: s,
                    bytesLeft: i,
                    attachment: r
                } = e, [u, c] = a.useState(n), f = null != s ? s : "";
                return 0 !== i && (f += "... ".concat(C.default.Messages.PREVIEW_BYTES_LEFT.format({
                    formattedBytes: (0, d.formatKbSize)(i)
                }))), (0, l.jsx)(o.ModalRoot, {
                    transitionState: t,
                    "aria-label": C.default.Messages.PREVIEW_MODAL_LABEL,
                    size: o.ModalSize.LARGE,
                    className: g.modalRoot,
                    children: (0, l.jsxs)("div", {
                        className: g.modalContent,
                        children: [(0, l.jsx)(o.ScrollerThin, {
                            className: g.modalTextContainer,
                            children: null == s ? (0, l.jsx)(o.Spinner, {
                                className: g.spinner
                            }) : (0, l.jsx)(v, {
                                text: f,
                                language: u
                            })
                        }), (0, l.jsxs)(o.Text, {
                            color: "header-secondary",
                            className: g.footer,
                            variant: "text-sm/normal",
                            children: [(0, l.jsx)("div", {
                                className: g.footerGap
                            }), (0, l.jsx)(x, {
                                attachment: r
                            }), (0, l.jsx)(_, {
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
                    onClick: s,
                    onContextMenu: r
                } = e, [o, u] = a.useState(!1), [d, f] = a.useState(t.filename.split(".").slice(-1)[0]), {
                    fileContents: m,
                    bytesLeft: h,
                    hadError: p
                } = function(e, t) {
                    let [n, l] = a.useState(!1), [s, i] = a.useState(null), [r, o] = a.useState(1);
                    return a.useEffect(() => {
                        (async function n() {
                            try {
                                var n, a;
                                let s = await fetch(e, {
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
                                    u = r.decode(await s.arrayBuffer()),
                                    d = null !== (n = s.headers.get("content-range")) && void 0 !== n ? n : "0",
                                    c = null !== (a = s.headers.get("content-length")) && void 0 !== a ? a : "1",
                                    f = parseInt(d.split("/")[1]),
                                    m = f - parseInt(c);
                                i(0 === m ? u : u.slice(0, -1)), o(m), l(!1)
                            } catch (e) {
                                o(0), l(!0)
                            }
                        })()
                    }, [e, t]), {
                        fileContents: s,
                        bytesLeft: r,
                        hadError: n
                    }
                }(t.url, t.content_type);
                return p ? (0, l.jsx)(c.default, {
                    url: t.url,
                    filename: t.filename,
                    size: t.size,
                    onClick: s,
                    onContextMenu: r,
                    className: n
                }) : (0, l.jsx)(N, {
                    attachment: t,
                    fileContents: m,
                    bytesLeft: h,
                    expanded: o,
                    setExpanded: u,
                    language: d,
                    setLanguage: f,
                    className: i(g.newMosaicStyle, n)
                })
            }, (e, t) => e.attachment.id === t.attachment.id && e.className === t.className)
        },
        392284: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("77078"),
                o = n("62843"),
                u = n("132755"),
                d = n("782340"),
                c = n("760687");

            function f(e) {
                let {
                    onPlay: t,
                    className: n,
                    inactive: s
                } = e, f = a.useRef(null), m = (0, l.jsx)("div", {
                    className: c.iconWrapper,
                    ref: f,
                    children: (0, l.jsx)(u.default, {
                        className: i(c.icon)
                    })
                });
                return (0, l.jsx)(o.MessagesInteractionContext.Consumer, {
                    children: e => s || null == t ? (0, l.jsx)("div", {
                        className: c.cover,
                        children: m
                    }) : (0, l.jsx)(r.Clickable, {
                        className: i(n, c.cover, {
                            [c.active]: !e.disableInteractions
                        }),
                        onClick: t,
                        tabIndex: 0,
                        "aria-label": d.default.Messages.PLAY,
                        focusProps: {
                            ringTarget: f
                        },
                        children: m
                    })
                })
            }
        },
        468482: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("77078"),
                r = n("62843"),
                o = n("648739"),
                u = n("132755"),
                d = n("782340"),
                c = n("335171"),
                f = e => {
                    let {
                        onPlay: t,
                        externalURL: n,
                        className: a,
                        renderLinkComponent: f,
                        inactive: m,
                        messageId: h,
                        channelId: p
                    } = e;
                    return (0, l.jsx)(r.MessagesInteractionContext.Consumer, {
                        children: e => (0, l.jsxs)("div", {
                            className: s(a, c.wrapper, {
                                [c.disableInteractions]: e.disableInteractions
                            }),
                            children: [m && null == t ? (0, l.jsx)("div", {
                                className: c.iconWrapper,
                                children: (0, l.jsx)(u.default, {
                                    className: c.iconPlay
                                })
                            }) : null, null != t ? (0, l.jsx)(i.Clickable, {
                                onClick: t,
                                className: s(c.iconWrapperActive),
                                tabIndex: m ? -1 : 0,
                                "aria-label": d.default.Messages.PLAY,
                                children: (0, l.jsx)(u.default, {
                                    className: c.iconPlay
                                })
                            }) : null, null != n ? f({
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
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("77078"),
                o = n("672724"),
                u = n("368121"),
                d = n("570511"),
                c = n("974261"),
                f = n("782340"),
                m = n("906419");
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
                        currentWindow: s,
                        muted: h,
                        minValue: p,
                        maxValue: C,
                        value: g,
                        onVolumeShow: E,
                        onVolumeHide: v
                    } = this.props, {
                        hovered: I,
                        focused: x,
                        dragging: _
                    } = this.state, S = u.default;
                    return h || g === p ? S = d.default : g < C / 2 && (S = c.default), (0, l.jsxs)("div", {
                        className: i(t, m.container),
                        onMouseEnter: () => {
                            clearTimeout(this._hoverTimeout), this.setState({
                                hovered: !0
                            }), null == E || E()
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
                            className: i(m.volumeButtonSlider, n, {
                                [m.sliderVisible]: I || x || _
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
                                value: g / C,
                                onDrag: this.handleValueChange,
                                onDragStart: this.handleDragStart,
                                onDragEnd: this.handleDragEnd,
                                currentWindow: s,
                                ref: this._mediaBar
                            })
                        }), (0, l.jsx)(r.Button, {
                            className: m.volumeButton,
                            "aria-label": f.default.Messages.CONTROL_VOLUME,
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
                        } = this.props, s = .05 * (l - t);
                        switch (e.key) {
                            case "ArrowUp":
                                e.stopPropagation(), e.preventDefault(), null == a || a(Math.min(l, n + s));
                                break;
                            case "ArrowDown":
                                e.stopPropagation(), e.preventDefault(), null == a || a(Math.max(t, n - s))
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
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("821455"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsxs)("g", {
                            className: s,
                            fill: a,
                            children: [(0, l.jsx)("path", {
                                d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1z"
                            }), (0, l.jsx)("path", {
                                d: "M15 5H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"
                            })]
                        })
                    })
                }, s.CopyIcon, void 0, {
                    size: 16
                })
        },
        195812: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("691096"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z"
                        })
                    })
                }, s.DownloadIcon, void 0, {
                    size: 24
                })
        },
        256170: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("469563"),
                r = n("384737"),
                o = n("996674"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        className: i,
                        foreground: r,
                        open: u = !1
                    } = e;
                    return (0, l.jsx)("svg", {
                        className: s(o.arrow, i, {
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
                }, r.ChevronSmallDownIcon, void 0, {
                    size: 24
                })
        },
        967685: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("159190"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: [(0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M1.93956 14.6668H6.18203C6.51658 14.6668 6.7881 14.3953 6.7881 14.0607C6.7881 13.7262 6.51658 13.4547 6.18203 13.4547H3.40261L7.21658 9.64069C7.45325 9.40402 7.45325 9.02038 7.21658 8.78371C7.0984 8.66522 6.94325 8.60613 6.7881 8.60613C6.63294 8.60613 6.47779 8.66522 6.35961 8.78371L2.54563 12.5977V9.81826C2.54563 9.48372 2.27411 9.2122 1.93956 9.2122C1.60501 9.2122 1.3335 9.48372 1.3335 9.81826V14.0607C1.3335 14.3953 1.60501 14.6668 1.93956 14.6668Z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M8.78374 7.21643C9.02041 7.4531 9.40405 7.4531 9.64072 7.21643L13.4547 3.40245V6.18188C13.4547 6.51643 13.7262 6.78794 14.0608 6.78794C14.3953 6.78794 14.6668 6.51643 14.6668 6.18188V1.93941C14.6668 1.60486 14.3953 1.33334 14.0608 1.33334L9.8183 1.33334C9.48375 1.33334 9.21223 1.60486 9.21223 1.93941C9.21223 2.27396 9.48375 2.54548 9.8183 2.54548H12.5977L8.78374 6.35945C8.54707 6.59612 8.54707 6.97976 8.78374 7.21643Z"
                        })]
                    })
                }, s.MaximizeIcon, void 0, {
                    size: 16
                })
        },
        462579: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("736616"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            fill: a,
                            className: s,
                            d: "M12 5C5.648 5 1 12 1 12C1 12 5.648 19 12 19C18.352 19 23 12 23 12C23 12 18.352 5 12 5ZM12 16C9.791 16 8 14.21 8 12C8 9.79 9.791 8 12 8C14.209 8 16 9.79 16 12C16 14.21 14.209 16 12 16Z"
                        }), (0, l.jsx)("path", {
                            fill: a,
                            className: s,
                            d: "M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                        })]
                    })
                }, s.EyeIcon, void 0, {
                    size: 16
                })
        },
        2770: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("332127"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M19,3H14V5h5v5h2V5A2,2,0,0,0,19,3Z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M19,19H14v2h5a2,2,0,0,0,2-2V14H19Z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M3,5v5H5V5h5V3H5A2,2,0,0,0,3,5Z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M5,14H3v5a2,2,0,0,0,2,2h5V19H5Z"
                        })]
                    })
                }, s.FullscreenEnterIcon, void 0, {
                    size: 24
                })
        },
        543289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("75196");

            function s(e) {
                let {
                    width: t = 104,
                    height: n = 80,
                    ...s
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(s),
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
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("943325"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 20,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsxs)("svg", {
                        viewBox: "0 0 20 20",
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        children: [(0, l.jsx)("path", {
                            fill: a,
                            className: s,
                            d: "M12.9297 3.25007C12.7343 3.05261 12.4154 3.05226 12.2196 3.24928L11.5746 3.89824C11.3811 4.09297 11.3808 4.40733 11.5739 4.60245L16.5685 9.64824C16.7614 9.84309 16.7614 10.1569 16.5685 10.3517L11.5739 15.3975C11.3808 15.5927 11.3811 15.907 11.5746 16.1017L12.2196 16.7507C12.4154 16.9477 12.7343 16.9474 12.9297 16.7499L19.2604 10.3517C19.4532 10.1568 19.4532 9.84314 19.2604 9.64832L12.9297 3.25007Z"
                        }), (0, l.jsx)("path", {
                            fill: a,
                            className: s,
                            d: "M8.42616 4.60245C8.6193 4.40733 8.61898 4.09297 8.42545 3.89824L7.78047 3.24928C7.58466 3.05226 7.26578 3.05261 7.07041 3.25007L0.739669 9.64832C0.5469 9.84314 0.546901 10.1568 0.739669 10.3517L7.07041 16.7499C7.26578 16.9474 7.58465 16.9477 7.78047 16.7507L8.42545 16.1017C8.61898 15.907 8.6193 15.5927 8.42616 15.3975L3.43155 10.3517C3.23869 10.1569 3.23869 9.84309 3.43155 9.64824L8.42616 4.60245Z"
                        })]
                    })
                }, s.AngleBracketsIcon, void 0, {
                    size: 20
                })
        },
        45622: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("485358"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M16,8V3H14V8a2,2,0,0,0,2,2h5V8Z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M14,16v5h2V16h5V14H16A2,2,0,0,0,14,16Z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M8,8H3v2H8a2,2,0,0,0,2-2V3H8Z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M8,14H3v2H8v5h2V16A2,2,0,0,0,8,14Z"
                        })]
                    })
                }, s.FullscreenExitIcon, void 0, {
                    size: 24
                })
        },
        648739: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("75196");

            function s(e) {
                let {
                    width: t = 16,
                    height: n = 16,
                    color: s = "currentColor",
                    foreground: i,
                    ...r
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(r),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        className: i,
                        fill: s,
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
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("828516"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M5.25 2.25226H7.5C7.9125 2.25226 8.25 2.58976 8.25 3.00226V15.0023C8.25 15.4148 7.9125 15.7523 7.5 15.7523H5.25C4.8375 15.7523 4.5 15.4148 4.5 15.0023V3.00226C4.5 2.58976 4.8375 2.25226 5.25 2.25226ZM11.25 2.25226H13.5C13.9125 2.25226 14.25 2.58976 14.25 3.00226V15.0023C14.25 15.4148 13.9125 15.7523 13.5 15.7523H11.25C10.8375 15.7523 10.5 15.4148 10.5 15.0023V3.00226C10.5 2.58976 10.8375 2.25226 11.25 2.25226Z",
                            fill: a,
                            className: s
                        })
                    })
                }, s.PauseIcon, void 0, {
                    size: 16
                })
        },
        948613: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("4997"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(r),
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
                                className: s,
                                fillRule: "nonzero",
                                d: "M7,13 L7,5 L12,9 L7,13 Z M9,1 C4.581722,1 1,4.581722 1,9 C1,11.1217319 1.84285472,13.1565632 3.34314575,14.6568542 C4.84343678,16.1571453 6.87826808,17 9,17 C11.1217319,17 13.1565632,16.1571453 14.6568542,14.6568542 C16.1571453,13.1565632 17,11.1217319 17,9 C17,6.87826808 16.1571453,4.84343678 14.6568542,3.34314575 C13.1565632,1.84285472 11.1217319,1 9,1 Z"
                            })]
                        })
                    })
                }, s.CirclePlayIcon, void 0, {
                    size: 24
                })
        },
        73034: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("75196");

            function s(e) {
                let {
                    width: t = 16,
                    height: n = 16,
                    color: s = "currentColor",
                    foreground: i,
                    ...r
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(r),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        className: i,
                        fill: s,
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
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("352265"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            fill: a,
                            className: s,
                            d: "M19.73 9L21 10.27l-2.23 2.23L21 14.73 19.73 16l-2.23-2.23L15.27 16 14 14.73l2.23-2.23L14 10.27 15.27 9l2.23 2.23z",
                            fillRule: "evenodd"
                        }), (0, l.jsx)("path", {
                            fill: a,
                            className: s,
                            d: "M11.38 3.08a1 1 0 0 0-1.09.22L6 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3l4.29 4.71A1 1 0 0 0 12 20V4a1 1 0 0 0-.62-.92z"
                        })]
                    })
                }, s.VoiceXIcon, void 0, {
                    size: 24
                })
        },
        974261: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("992305"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.293 3.29604C10.579 3.01004 11.009 2.92504 11.383 3.07904C11.757 3.23204 12 3.59904 12 4.00204V20.002C12 20.407 11.757 20.772 11.383 20.927C11.009 21.082 10.579 20.996 10.293 20.71L6 16.002H3C2.45 16.002 2 15.552 2 15.002V9.00204C2 8.45304 2.45 8.00204 3 8.00204H6L10.293 3.29604ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z"
                        })
                    })
                }, s.VoiceLowIcon, void 0, {
                    size: 24
                })
        },
        909004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("209320"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M12.6667 1.33331H7.33333C6.6 1.33331 6 1.93331 6 2.66665V5.99998C6 6.73331 5.4 7.33331 4.66667 7.33331C3.19333 7.33331 2 8.52665 2 9.99998V13.3333C2 14.0666 2.6 14.6666 3.33333 14.6666H8.66667C9.4 14.6666 10 14.0666 10 13.3333V9.99998C10 9.26665 10.6 8.66665 11.3333 8.66665C12.8067 8.66665 14 7.47331 14 5.99998V2.66665C14 1.93331 13.4 1.33331 12.6667 1.33331ZM8 13.3333H4C3.63333 13.3333 3.33333 13.0333 3.33333 12.6666C3.33333 12.3 3.63333 12 4 12H8C8.36667 12 8.66667 12.3 8.66667 12.6666C8.66667 13.0333 8.36667 13.3333 8 13.3333ZM8 10.6666H4C3.63333 10.6666 3.33333 10.3666 3.33333 9.99998C3.33333 9.63331 3.63333 9.33331 4 9.33331H8C8.36667 9.33331 8.66667 9.63331 8.66667 9.99998C8.66667 10.3666 8.36667 10.6666 8 10.6666ZM12 6.66665H8C7.63333 6.66665 7.33333 6.36665 7.33333 5.99998C7.33333 5.63331 7.63333 5.33331 8 5.33331H12C12.3667 5.33331 12.6667 5.63331 12.6667 5.99998C12.6667 6.36665 12.3667 6.66665 12 6.66665ZM12 3.99998H8C7.63333 3.99998 7.33333 3.69998 7.33333 3.33331C7.33333 2.96665 7.63333 2.66665 8 2.66665H12C12.3667 2.66665 12.6667 2.96665 12.6667 3.33331C12.6667 3.69998 12.3667 3.99998 12 3.99998Z"
                        })
                    })
                }, s.TopicsIcon, void 0, {
                    size: 16
                })
        },
        959097: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("782926"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z"
                        })]
                    })
                }, s.ThreadIcon, void 0, {
                    size: 24
                })
        },
        251144: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("75196");

            function s(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: s = "currentColor",
                    foreground: i,
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
                        className: i,
                        d: "M14.0652 10.5L16.6739 10.5C16.7604 10.5 16.8433 10.4641 16.9045 10.4002C16.9656 10.3362 17 10.2495 17 10.1591L17 4.0227C17 3.9323 16.9656 3.8456 16.9045 3.7817C16.8433 3.7177 16.7604 3.6818 16.6739 3.6818L14.0652 3.6818C13.9787 3.6818 13.8958 3.7177 13.8346 3.7817C13.7735 3.8456 13.7391 3.9323 13.7391 4.0227L13.7391 10.1591C13.7391 10.2495 13.7735 10.3362 13.8346 10.4002C13.8958 10.4641 13.9787 10.5 14.0652 10.5ZM2 10.8409C2 11.7804 2.7317 12.5454 3.6304 12.5454L7.7359 12.5454C7.537 13.1789 7.2174 14.34 7.2174 15.2727C7.2174 16.7516 8.4193 18 9.1739 18C9.8515 18 10.3354 17.6018 10.3563 17.5848C10.3943 17.5526 10.425 17.512 10.4461 17.4659C10.4672 17.4198 10.4782 17.3693 10.4783 17.3182L10.4783 16.6939C10.4783 15.5814 10.7103 14.4811 11.1595 13.4634L12.3565 10.7516L12.9063 10.4645C12.9605 10.4361 13.006 10.3924 13.0379 10.3385C13.0698 10.2846 13.0868 10.2225 13.087 10.1591L13.087 4.0227C13.087 3.932 13.0524 3.8455 12.9917 3.7814C12.5033 3.2714 11.4076 3 10.8044 3L4.7717 3C4.5222 3.0004 4.2768 3.0674 4.0588 3.1944C3.8409 3.3215 3.6575 3.5046 3.526 3.7264C3.3944 3.9481 3.3192 4.2013 3.3072 4.4619C3.2952 4.7225 3.347 4.982 3.4576 5.2159C3.1122 5.3973 2.8496 5.7144 2.7273 6.0978C2.6051 6.4812 2.6332 6.8996 2.8054 7.2614C2.5635 7.3883 2.3601 7.5831 2.2179 7.8239C2.0757 8.0646 2.0002 8.342 2 8.625C2 9.0341 2.1559 9.4166 2.4239 9.6989C2.1533 10.007 2 10.4107 2 10.8409Z",
                        fill: s
                    })
                })
            }
        },
        20662: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("75196");

            function s(e) {
                let {
                    width: t = 12,
                    height: n = 12,
                    color: s = "currentColor",
                    foreground: i,
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
                        className: i,
                        d: "M5.93478 9.5H3.32609C3.2396 9.5 3.15666 9.53592 3.09551 9.59985C3.03436 9.66378 3 9.75049 3 9.84091V15.9773C3 16.0677 3.03436 16.1544 3.09551 16.2183C3.15666 16.2823 3.2396 16.3182 3.32609 16.3182H5.93478C6.02127 16.3182 6.10421 16.2823 6.16536 16.2183C6.22651 16.1544 6.26087 16.0677 6.26087 15.9773V9.84091C6.26087 9.75049 6.22651 9.66378 6.16536 9.59985C6.10421 9.53592 6.02127 9.5 5.93478 9.5ZM18 9.15909C18 8.21955 17.2683 7.45455 16.3696 7.45455H12.2641C12.463 6.82114 12.7826 5.66 12.7826 4.72727C12.7826 3.24841 11.5807 2 10.8261 2C10.1485 2 9.66457 2.39818 9.6437 2.41523C9.60568 2.44738 9.57501 2.488 9.55391 2.53412C9.53281 2.58024 9.52182 2.6307 9.52174 2.68182V3.3061C9.52174 4.41859 9.28971 5.51885 8.84048 6.5366L7.64348 9.24841L7.0937 9.53545C7.03952 9.56394 6.99396 9.60756 6.96207 9.66149C6.93018 9.71541 6.91321 9.77751 6.91304 9.84091V15.9773C6.91304 16.068 6.94761 16.1545 7.00826 16.2186C7.49674 16.7286 8.59239 17 9.19565 17H15.2283C15.4778 16.9996 15.7232 16.9326 15.9412 16.8056C16.1591 16.6785 16.3425 16.4954 16.474 16.2736C16.6056 16.0519 16.6808 15.7987 16.6928 15.5381C16.7048 15.2775 16.653 15.018 16.5424 14.7841C16.8878 14.6027 17.1504 14.2856 17.2727 13.9022C17.3949 13.5188 17.3668 13.1004 17.1946 12.7386C17.4365 12.6117 17.6399 12.4169 17.7821 12.1761C17.9243 11.9354 17.9998 11.658 18 11.375C18 10.9659 17.8441 10.5834 17.5761 10.3011C17.8467 9.99296 18 9.58932 18 9.15909Z",
                        fill: s
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
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("446685"),
                r = n("593195"),
                o = n("109264"),
                u = n("991497"),
                d = n("660074"),
                c = n("45029"),
                f = n("990745"),
                m = n("620193"),
                h = n("368121"),
                p = n("228427"),
                C = n("959097"),
                g = n("328413"),
                E = n("782340"),
                v = n("671934"),
                I = function(e) {
                    let {
                        iconType: t,
                        children: n
                    } = e, a = null;
                    switch (t) {
                        case "voice":
                            a = (0, l.jsx)(h.default, {
                                className: v.icon,
                                "aria-label": E.default.Messages.VOICE_CHANNEL
                            });
                            break;
                        case "voice-locked":
                            a = (0, l.jsx)(c.default, {
                                className: v.icon,
                                "aria-label": E.default.Messages.VOICE_CHANNEL_LOCKED
                            });
                            break;
                        case "stage":
                            a = (0, l.jsx)(p.default, {
                                className: v.icon,
                                "aria-label": E.default.Messages.STAGE_CHANNEL
                            });
                            break;
                        case "stage-locked":
                            a = (0, l.jsx)(c.default, {
                                className: v.icon,
                                "aria-label": E.default.Messages.STAGE_CHANNEL_LOCKED
                            });
                            break;
                        case "thread":
                            a = (0, l.jsx)(C.default, {
                                className: v.icon,
                                "aria-label": E.default.Messages.THREAD
                            });
                            break;
                        case "text":
                            a = (0, l.jsx)(r.default, {
                                className: v.icon,
                                "aria-label": E.default.Messages.CHANNEL
                            });
                            break;
                        case "forum":
                            a = (0, l.jsx)(u.default, {
                                className: v.icon,
                                "aria-label": E.default.Messages.FORUM_CHANNEL
                            });
                            break;
                        case "post":
                            a = (0, l.jsx)(d.default, {
                                className: v.icon,
                                "aria-label": E.default.Messages.FORUM_POST
                            });
                            break;
                        case "home":
                        case "guide":
                            a = (0, l.jsx)(m.default, {
                                className: v.icon,
                                "aria-label": E.default.Messages.SERVER_GUIDE
                            });
                            break;
                        case "browse":
                        case "customize":
                            a = (0, l.jsx)(i.default, {
                                className: v.icon,
                                "aria-label": E.default.Messages.CHANNEL_BROWSER_TITLE
                            });
                            break;
                        case "message":
                            a = (0, l.jsx)(o.default, {
                                className: v.icon,
                                "aria-label": E.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION
                            });
                            break;
                        case "locked":
                            a = (0, l.jsx)(c.default, {
                                className: v.icon,
                                "aria-label": E.default.Messages.NO_ACCESS
                            });
                            break;
                        case "media":
                            a = (0, l.jsx)(f.default, {
                                className: v.icon,
                                "aria-label": E.default.Messages.MEDIA_CHANNEL
                            })
                    }
                    return (0, l.jsxs)("span", {
                        className: s("channelWithIcon", {
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
            var l = n("37983");
            n("884691");
            var a = n("476263"),
                s = n("328413"),
                i = n("550473"),
                r = function(e) {
                    let {
                        guild: t,
                        children: n
                    } = e, r = null != t ? (0, l.jsx)(a.default, {
                        guild: t,
                        size: a.default.Sizes.MEDIUM,
                        className: i.icon,
                        active: !0
                    }) : null;
                    return (0, l.jsxs)("span", {
                        children: [(0, l.jsx)(s.default, {
                            children: r
                        }), (0, l.jsx)("span", {
                            className: i.name,
                            children: n
                        })]
                    })
                }
        },
        848825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("772280"),
                s = n("961291"),
                i = function() {
                    return (0, l.jsx)(a.default, {
                        className: s.icon
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
            var l = n("37983");
            n("884691");
            var a = n("109264"),
                s = n("782340"),
                i = n("708124"),
                r = function() {
                    return (0, l.jsx)(a.default, {
                        className: i.icon,
                        "aria-label": s.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION
                    })
                }
        },
        328413: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("971430");

            function s(e) {
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
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("65597"),
                o = n("77078"),
                u = n("430568"),
                d = n("277855"),
                c = n("305122"),
                f = n("462550"),
                m = n("235004"),
                h = n("520497"),
                p = n("812809"),
                C = n("948613"),
                g = n("368121"),
                E = n("653110"),
                v = function(e) {
                    let {
                        soundId: t,
                        jumbo: n = !1
                    } = e, {
                        currentPreviewRef: s
                    } = a.useContext(f.default), v = (0, r.default)([m.default], () => m.default.getSoundById(t)), I = (null == v ? void 0 : v.emojiId) != null || (null == v ? void 0 : v.emojiName) != null, [x, _] = a.useState(!1), S = (0, d.useSoundmojiExperiment)("soundmoji_chat_mention"), N = a.useCallback(() => {
                        var e;
                        null == v && (0, c.maybeFetchSoundboardSounds)();
                        let n = new Audio((0, h.default)(t));
                        null != s.current && s.current.pause(), s.current = n, n.currentTime = 0, n.volume = (0, p.default)(null !== (e = null == v ? void 0 : v.volume) && void 0 !== e ? e : .5), _(!0), n.play(), n.addEventListener("ended", () => {
                            _(!1)
                        }, {
                            once: !0
                        })
                    }, [t, v, s, _]);
                    return S ? null == v ? (0, l.jsxs)(o.Clickable, {
                        title: "Risky Click",
                        tag: "span",
                        onClick: N,
                        className: E.container,
                        children: [(0, l.jsx)(g.default, {
                            className: E.unknownSound
                        }), (0, l.jsx)(o.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "none",
                            className: E.text,
                            children: "Unknown"
                        })]
                    }) : n ? (0, l.jsxs)(o.Clickable, {
                        onClick: N,
                        className: E.jumboContainer,
                        children: [(0, l.jsx)("div", {
                            className: i(E.jumboOverlay, {
                                [E.playing]: x
                            }),
                            children: (0, l.jsx)(C.default, {
                                className: E.jumboPlayIcon
                            })
                        }), I && (0, l.jsx)(u.default, {
                            emojiId: null == v ? void 0 : v.emojiId,
                            emojiName: null == v ? void 0 : v.emojiName,
                            className: E.jumboEmoji
                        }), (0, l.jsx)(o.Text, {
                            tag: "span",
                            variant: "text-lg/normal",
                            color: "none",
                            className: E.text,
                            children: v.name
                        })]
                    }) : (0, l.jsxs)(o.Clickable, {
                        tag: "span",
                        onClick: N,
                        className: E.container,
                        children: [I && (0, l.jsx)(u.default, {
                            emojiId: null == v ? void 0 : v.emojiId,
                            emojiName: null == v ? void 0 : v.emojiName,
                            className: E.emoji
                        }), (0, l.jsx)(o.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "none",
                            className: E.text,
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
                    return s
                },
                MEDIA_MOSAIC_MAX_HEIGHT: function() {
                    return i
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
            let s = 550,
                i = 350,
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
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("301165"),
                r = n("215529");
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
                let f = {
                        opacity: 1,
                        height: t ? 40 : n ? 20 : 8,
                        x: 0
                    },
                    m = (0, i.useTransition)(t || n || a, {
                        config: o,
                        keys: e => e ? "pill" : "empty",
                        immediate: !n && !document.hasFocus(),
                        initial: t || n || a ? f : null,
                        from: u,
                        leave: u,
                        enter: f,
                        update: f
                    });
                return (0, l.jsx)("div", {
                    className: s(c, r.wrapper),
                    "aria-hidden": !0,
                    children: m((e, t) => t && (0, l.jsx)(i.animated.span, {
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
            var l = n("37983"),
                a = n("884691"),
                s = n("118810"),
                i = n("446674"),
                r = n("206230"),
                o = n("719347");
            let u = e => {
                let {
                    externalRef: t,
                    autoPlay: n,
                    playOnHover: u,
                    responsive: d,
                    mediaLayoutType: c,
                    ...f
                } = e, m = (0, i.useStateFromStores)([r.default], () => r.default.useReducedMotion), h = a.useRef(null);

                function p() {
                    var e;
                    u && (null == h || null === (e = h.current) || void 0 === e || e.play())
                }

                function C() {
                    var e;
                    u && (null == h || null === (e = h.current) || void 0 === e || e.pause())
                }
                return a.useLayoutEffect(() => () => {
                    let {
                        current: e
                    } = h;
                    null != e && function(e) {
                        e.removeAttribute("src"), Array.from(e.children).forEach(e => {
                            (0, s.isElement)(e, HTMLSourceElement) && (e.removeAttribute("src"), e.removeAttribute("type")), (0, s.isElement)(e, HTMLImageElement) && e.removeAttribute("src")
                        });
                        try {
                            e.load()
                        } catch (e) {}
                    }(e)
                }, []), a.useLayoutEffect(() => ("function" == typeof t ? (t(null), t(h.current)) : null != t && (t.current = h.current), () => {
                    "function" == typeof t ? t(null) : null != t && (t.current = null)
                }), [t, h]), (0, l.jsx)("video", {
                    ref: h,
                    autoPlay: !m && !u && n,
                    onMouseEnter: p,
                    onMouseLeave: C,
                    onFocus: p,
                    onBlur: C,
                    style: c === o.MediaLayoutType.MOSAIC ? {
                        width: "100%",
                        height: "100%",
                        maxHeight: "inherit",
                        objectFit: "cover"
                    } : d ? function() {
                        return {
                            maxWidth: f.width,
                            maxHeight: f.height,
                            width: "100%",
                            height: "100%"
                        }
                    }() : {},
                    ...f
                })
            };
            var d = a.forwardRef((e, t) => (0, l.jsx)(u, {
                ...e,
                externalRef: t
            }))
        },
        794818: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnalyticsContexts: function() {
                    return l
                },
                MINIMUM_MEMBER_COUNT: function() {
                    return p
                },
                startLurking: function() {
                    return C
                },
                viewGuild: function() {
                    return g
                },
                makeDiscoverableGuild: function() {
                    return E
                },
                trackDiscoveryViewed: function() {
                    return v
                },
                trackDiscoveryExited: function() {
                    return I
                },
                trackSearchClosed: function() {
                    return x
                },
                trackSearchStarted: function() {
                    return _
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
            }), n("222007");
            var l, a, s = n("522632"),
                i = n("872717"),
                r = n("851387"),
                o = n("267567"),
                u = n("393414"),
                d = n("239380"),
                c = n("525065"),
                f = n("305961"),
                m = n("599110"),
                h = n("49111");
            (a = l || (l = {})).SEARCH = "Search", a.RECOMMENDED = "Recommended", a.POPULAR = "Popular", a.RECOMMENDED_E3 = "Recommended - E3", a.HEADER = "Header";
            let p = ">200";
            async function C(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        channelId: l,
                        onSuccess: a,
                        joinSource: s,
                        loadId: i,
                        setsHistorySnapshot: c = !0
                    } = n,
                    m = (0, u.getHistory)();
                c && o.default.setHistorySnapshot({
                    ...m
                });
                let h = f.default.getGuild(e),
                    p = {
                        state: {
                            analyticsSource: t
                        }
                    };
                null != h && null != h.joinedAt ? (0, d.transitionToGuild)(e, p) : (await r.default.joinGuild(e, {
                    lurker: !0,
                    source: s,
                    loadId: i,
                    lurkLocation: null == t ? void 0 : t.page
                }), await r.default.transitionToGuildSync(e, {
                    ...p,
                    welcomeModalChannelId: l,
                    search: m.location.search
                }, l)), null == a || a()
            }
            async function g(e) {
                let t, {
                    loadId: n,
                    guildId: a,
                    index: s,
                    analyticsContext: i,
                    categoryId: r
                } = e;
                "string" == typeof i && i in l && (t = i);
                let o = {
                    page: h.AnalyticsPages.GUILD_DISCOVERY,
                    object: h.AnalyticsObjects.CARD,
                    section: t
                };
                await C(a, o, {
                        loadId: n
                    }),
                    function(e) {
                        let {
                            loadId: t,
                            guildId: n,
                            index: l,
                            analyticsContext: a,
                            categoryId: s
                        } = e, i = {
                            page: h.AnalyticsPages.GUILD_DISCOVERY,
                            section: a
                        };
                        "string" != typeof a && null != a.location && (i = a.location), m.default.track(h.AnalyticEvents.GUILD_DISCOVERY_GUILD_SELECTED, {
                            location: i,
                            guild_id: n,
                            load_id: t,
                            card_index: l,
                            location_object: h.AnalyticsObjects.CARD,
                            category_id: s
                        })
                    }({
                        loadId: n,
                        guildId: a,
                        index: s,
                        analyticsContext: i,
                        categoryId: r
                    })
            }

            function E(e) {
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
                    recommendationsSource: s = null
                } = e, i = n.length, r = l.length;
                m.default.track(h.AnalyticEvents.GUILD_DISCOVERY_VIEWED, {
                    load_id: t,
                    num_guilds: i + r,
                    num_guilds_recommended: i,
                    num_guilds_popular: r,
                    recommended_guild_ids: n.map(e => e.id),
                    category_id: a,
                    recommendations_source: s
                })
            }

            function I(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                m.default.track(h.AnalyticEvents.GUILD_DISCOVERY_EXITED, {
                    load_id: e,
                    guild_ids_viewed: t,
                    recommendations_source: n
                })
            }

            function x(e) {
                m.default.track(h.AnalyticEvents.SEARCH_CLOSED, {
                    load_id: e
                })
            }

            function _(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                m.default.track(h.AnalyticEvents.SEARCH_STARTED, {
                    search_type: h.SearchTypes.GUILD_DISCOVERY,
                    load_id: e,
                    location: n.location,
                    category_id: t
                })
            }

            function S(e, t, n, l) {
                m.default.track(h.AnalyticEvents.SEARCH_STARTED, {
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
                    analyticsContext: s,
                    categoryId: i,
                    isTagSearch: r
                } = e;
                m.default.track(h.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                    search_type: r ? h.SearchTypes.GUILD_DISCOVERY_TAG : h.SearchTypes.GUILD_DISCOVERY,
                    load_id: t,
                    search_id: n,
                    total_results: void 0 !== a ? a.length : null,
                    guild_ids: void 0 !== a ? a.map(e => e.id) : null,
                    query: l,
                    location: s.location,
                    category_id: i
                })
            }

            function M(e) {
                let t = o.default.getLoadId(e);
                m.default.track(h.AnalyticEvents.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
                    guild_id: e,
                    load_id: t,
                    guild_size: c.default.getMemberCount(e)
                })
            }
            async function T(e) {
                try {
                    var t, n;
                    let l = await i.default.get({
                            url: h.Endpoints.GUILD_DISCOVERY,
                            query: s.stringify({
                                guild_ids: e
                            }),
                            oldFormErrors: !0
                        }),
                        a = null === (n = l.body) || void 0 === n ? void 0 : null === (t = n.guilds) || void 0 === t ? void 0 : t[0];
                    if (null == a) return a;
                    return E(a)
                } catch (e) {
                    return null
                }
            }
        },
        874276: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getVolume: function() {
                    return s
                },
                setVolume: function() {
                    return i
                },
                getMuted: function() {
                    return r
                },
                setMuted: function() {
                    return o
                }
            });
            var l = n("95410");
            let a = "MediaPlayerVolume";

            function s() {
                var e;
                let {
                    volume: t
                } = null !== (e = l.default.get(a)) && void 0 !== e ? e : {};
                return "number" != typeof t && (t = 1), t = Math.min(1, Math.max(0, t))
            }

            function i(e) {
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
                    volume: s(),
                    muted: e
                })
            }
        }
    }
]);
//# sourceMappingURL=5d0b9a769ba73cdf9175.js.map