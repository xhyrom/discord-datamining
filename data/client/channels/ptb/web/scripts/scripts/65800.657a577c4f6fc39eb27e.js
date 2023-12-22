(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["65800"], {
        916580: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                l = n("446674"),
                o = n("600965"),
                r = n("191225"),
                s = n("420444"),
                d = n("697517"),
                u = n("292687"),
                c = n("161778"),
                p = n("875268"),
                f = n("42203"),
                m = n("449501"),
                h = n("471671"),
                v = n("457112"),
                P = n("449008"),
                I = n("49111"),
                S = n("272505");
            let C = {
                [I.PictureInPictureComponents.VIDEO]: p.default,
                [I.PictureInPictureComponents.EMBED_IFRAME]: d.default
            };
            class g extends a.PureComponent {
                render() {
                    let {
                        selectedPIPWindow: e,
                        pipWindows: t,
                        maxX: n,
                        maxY: a,
                        theme: l,
                        dockedRect: o,
                        appContext: r,
                        roundCorners: s
                    } = this.props;
                    return (0, i.jsx)(v.default, {
                        pictureInPictureComponents: C,
                        selectedPIPWindow: e,
                        pipWindows: t,
                        maxX: n,
                        maxY: a,
                        dockedRect: o,
                        theme: l,
                        onWindowMove: this.handleWindowMove,
                        appContext: r,
                        roundCorners: s
                    })
                }
                constructor(...e) {
                    super(...e), this.handleWindowMove = (e, t) => {
                        o.moveTo(e, t)
                    }
                }
            }
            var y = l.default.connectStores([u.default, r.default, h.default, c.default, f.default, m.default], e => {
                var t, n, i;
                let a;
                let l, {
                        showInPopoutWindow: o = !1,
                        disallowTextActivity: d = !1
                    } = e,
                    p = u.default.getWindowOpen(I.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
                    v = r.default.getCurrentEmbeddedActivity(),
                    C = null != v && !(0, s.default)(v.channelId, f.default),
                    g = r.default.getActivityPanelMode(),
                    y = null != v && C && g === S.ActivityPanelModes.PANEL,
                    E = h.default.windowSize();
                if (p && (d && y || !y)) {
                    let e = u.default.getWindow(I.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                    E = null == e ? E : {
                        width: e.innerWidth,
                        height: e.innerHeight
                    }
                }!d && y ? a = I.AppContext.APP : o && (a = I.AppContext.POPOUT), l = d && C ? null : C || !p || o ? null != v && g === S.ActivityPanelModes.PANEL && C ? null !== (t = m.default.pipActivityWindow) && void 0 !== t ? t : m.default.pipVideoWindow : null !== (n = m.default.pipVideoWindow) && void 0 !== n ? n : m.default.pipActivityWindow : null;
                let T = Array.from(m.default.pipWindows.values()),
                    A = T.find(e => e.component === I.PictureInPictureComponents.VIDEO),
                    x = T.find(e => e.component === I.PictureInPictureComponents.EMBED_IFRAME),
                    N = [A, x].filter(P.isNotNullish);
                return {
                    selectedPIPWindow: l,
                    pipWindows: N,
                    maxX: E.width,
                    maxY: E.height,
                    theme: c.default.theme,
                    dockedRect: m.default.getDockedRect(null !== (i = null == l ? void 0 : l.id) && void 0 !== i ? i : ""),
                    appContext: a,
                    roundCorners: !0
                }
            })(g)
        },
        827560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("222007");
            var i = n("884691"),
                a = n("446674"),
                l = n("77078"),
                o = n("244201"),
                r = n("778588"),
                s = n("144747"),
                d = n("49111");

            function u() {
                let e = (0, l.useModalsStore)(e => !Object.entries(e).every(e => {
                        let [t, n] = e;
                        return 0 === n.length
                    })),
                    t = (0, a.useStateFromStores)([s.default], () => s.default.isOpen()),
                    n = (0, a.useStateFromStores)([r.default], () => r.default.hasLayers()),
                    [u, c] = i.useState(!1),
                    p = (0, o.useWindowDispatch)();
                return i.useEffect(() => {
                    function e() {
                        c(!0)
                    }

                    function t() {
                        c(!1)
                    }
                    return p.subscribe(d.ComponentActions.POPOUT_SHOW, e), p.subscribe(d.ComponentActions.POPOUT_HIDE, t), () => {
                        p.unsubscribe(d.ComponentActions.POPOUT_SHOW, e), p.unsubscribe(d.ComponentActions.POPOUT_HIDE, t)
                    }
                }, [p]), e || t || u || n
            }
        },
        505259: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                a = n("271938"),
                l = n("191225");

            function o(e) {
                let t = a.default.getId(),
                    {
                        userActivity: n,
                        inActivity: o
                    } = (0, i.useStateFromStoresObject)([l.default], () => {
                        var n;
                        let i = l.default.getSelfEmbeddedActivityForChannel(e),
                            a = l.default.getEmbeddedActivitiesForChannel(e),
                            o = null === (n = a.find(e => e.application_id === (null == i ? void 0 : i.application_id))) || void 0 === n ? void 0 : n.connections,
                            r = null == o ? void 0 : o.has(t);
                        return {
                            userActivity: i,
                            inActivity: null != r && r
                        }
                    });
                return {
                    userActivity: n,
                    inActivity: o
                }
            }
        },
        157945: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var i = n("884691"),
                a = n("917351"),
                l = n("446674"),
                o = n("827560"),
                r = n("244201"),
                s = n("206230"),
                d = n("659500"),
                u = n("49111");
            let c = (0, a.debounce)(e => {
                setTimeout(() => {
                    var t;
                    null === (t = e.current) || void 0 === t || t.focus()
                }, 0)
            }, 50);

            function p(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                    a = (0, l.useStateFromStores)([s.default], () => s.default.keyboardModeEnabled),
                    p = (0, o.default)(),
                    [f, m] = i.useState(!1),
                    h = (0, r.useWindowDispatch)();
                return i.useEffect(() => {
                    if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);

                    function e() {
                        p && (h.dispatch(u.ComponentActions.POPOUT_CLOSE), d.ComponentDispatch.dispatch(u.ComponentActions.CONTEXT_MENU_CLOSE))
                    }
                }, [n, p, t, h]), i.useEffect(() => {
                    var i, l, o;
                    if (a || !f || !t) return;
                    let r = p;

                    function s(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null == n || "BUTTON" === n.tagName) && !r && c(e)
                        }, 100)
                    }
                    return null === (i = e.current) || void 0 === i || i.addEventListener("focusout", s), (null === (l = n.document.activeElement) || void 0 === l ? void 0 : l.tagName) !== "IFRAME" && !r && (null === (o = e.current) || void 0 === o || o.focus()), () => {
                        var t;
                        null === (t = e.current) || void 0 === t || t.removeEventListener("focusout", s), r = !0
                    }
                }, [t, f, a, e, n, p]), m
            }
        },
        676065: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("884691"),
                a = n("550766");

            function l(e) {
                let {
                    channel: t,
                    userActivity: n,
                    inActivity: l,
                    embeddedActivitiesManager: o
                } = e;
                i.useEffect(() => {
                    !l && (0, a.launchEmbeddedActivity)(t.id)
                }, [null == n ? void 0 : n.application_id, t.id, l, o])
            }
        },
        828466: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007");
            let i = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];

            function a(e) {
                let {
                    allowPopups: t
                } = e, n = i;
                return t && (n = [...i, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" ")
            }
        },
        817477: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EmbedIFrameWithLoadingBackground: function() {
                    return C
                }
            }), n("222007"), n("313619"), n("654714"), n("287168"), n("956660");
            var i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                o = n.n(l),
                r = n("841076"),
                s = n("748820"),
                d = n("446674"),
                u = n("292687"),
                c = n("614818"),
                p = n("161778"),
                f = n("659500"),
                m = n("157945"),
                h = n("828466"),
                v = n("954016"),
                P = n("49111"),
                I = n("165544");

            function S(e) {
                let {
                    url: t,
                    className: n,
                    style: l,
                    onLoad: o,
                    shouldRefocus: I,
                    queryParams: S,
                    allowPopups: C = !1,
                    referrerPolicy: g = "origin"
                } = e, y = (0, d.useStateFromStores)([u.default], () => u.default.getWindow(P.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), E = (0, r.useMemoOne)(() => (0, s.v4)(), [t]), T = a.useRef(null), A = (0, m.default)(T, I, null == y ? window : y), x = {
                    ...S,
                    frame_id: E,
                    platform: v.ActivityPlatform.DESKTOP
                }, [N, _] = a.useState(!1), M = p.default.theme, j = {
                    ...l
                };
                return M === P.ThemeTypes.LIGHT ? j.colorScheme = "light" : j.colorScheme = "dark", a.useEffect(() => (f.ComponentDispatch.dispatch(P.ComponentActions.IFRAME_MOUNT, {
                    id: E
                }), () => {
                    f.ComponentDispatch.dispatch(P.ComponentActions.IFRAME_UNMOUNT, {
                        id: E
                    })
                }), [E]), f.ComponentDispatch.subscribe(P.ComponentActions.MANUAL_IFRAME_RESIZING, e => {
                    let {
                        resizing: t
                    } = e;
                    _(t)
                }), N && (j.pointerEvents = "none"), null != t ? (0, i.jsx)("iframe", {
                    style: j,
                    allow: "autoplay; encrypted-media",
                    referrerPolicy: g,
                    onLoad: function(e) {
                        var n;
                        null == o || o(e.target), T.current = e.target, A(!0), null === (n = e.target.contentWindow) || void 0 === n || n.postMessage([c.default.HELLO, x], null != t ? t : "")
                    },
                    sandbox: (0, h.default)({
                        allowPopups: C
                    }),
                    className: n,
                    src: "".concat(t, "?").concat(new URLSearchParams(x))
                }) : null
            }

            function C(e) {
                let {
                    onLoad: t
                } = e, [n, l] = a.useState(!1), r = a.useCallback(e => {
                    l(!0), null == t || t(e)
                }, [t]);
                return (0, i.jsxs)("div", {
                    className: I.fillParent,
                    children: [!n && (0, i.jsx)("div", {
                        className: o(I.fillParent, I.iframePlaceholder)
                    }), (0, i.jsx)("div", {
                        className: o(I.fillParent, n ? void 0 : I.hiddenIframeContainer),
                        children: (0, i.jsx)(S, {
                            ...e,
                            onLoad: r
                        })
                    })]
                })
            }
        },
        697517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                o = n.n(l),
                r = n("446674"),
                s = n("77078"),
                d = n("913144"),
                u = n("255397"),
                c = n("406189"),
                p = n("54239"),
                f = n("191145"),
                m = n("292687"),
                h = n("393414"),
                v = n("784981"),
                P = n("908583"),
                I = n("449501"),
                S = n("18494"),
                C = n("697218"),
                g = n("550766"),
                y = n("191225"),
                E = n("420444"),
                T = n("817477"),
                A = n("386568"),
                x = n("965135"),
                N = n("954016"),
                _ = n("272505"),
                M = n("49111"),
                j = n("99795"),
                L = n("844638"),
                w = n("374142");

            function b(e) {
                let {
                    channel: t,
                    isLoading: n
                } = e, [l, x] = a.useState(!1), b = (0, r.useStateFromStores)([y.default], () => y.default.getSelfEmbeddedActivityForChannel(t.id)), O = (0, r.useStateFromStores)([y.default], () => y.default.getActivityPanelMode()), D = null == b ? void 0 : b.activity_id, R = (0, r.useStateFromStores)([S.default], () => S.default.getChannelId() === t.id), {
                    dockedRect: F,
                    isHidden: W
                } = (0, r.useStateFromStoresObject)([I.default], () => {
                    let e = I.default.pipWindow;
                    return {
                        dockedRect: null != e ? I.default.getDockedRect(e.id) : null,
                        isHidden: I.default.isEmbeddedActivityHidden()
                    }
                }), U = (0, r.useStateFromStores)([m.default], () => m.default.getWindow(M.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), {
                    activityParticipant: k,
                    selectedParticipant: V,
                    participantsOpen: B
                } = (0, r.useStateFromStoresObject)([f.default], () => ({
                    activityParticipant: null != b ? f.default.getParticipant(t.id, b.application_id) : null,
                    selectedParticipant: f.default.getSelectedParticipant(t.id),
                    participantsOpen: f.default.getParticipantsOpen(t.id)
                })), H = R || null != U, G = (0, E.default)(t.id), Y = G && (null == V ? void 0 : V.type) !== j.ParticipantTypes.ACTIVITY, J = !G && O === _.ActivityPanelModes.PIP, z = (!H || H && (Y || J) && null == F) && !W, K = z && null != I.default.pipVideoWindow && null != I.default.pipActivityWindow;

                function X() {
                    var e;
                    if (null != b && u.default.selectParticipant(t.id, b.application_id), null != U) return;
                    (0, p.popAllLayers)();
                    let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : M.ME;
                    c.default.channelListScrollTo(n, t.id), (0, h.transitionToGuild)(n, t.id)
                }

                function Z() {
                    x(!l)
                }
                a.useEffect(() => {
                    if ((null == b ? void 0 : b.application_id) != null) {
                        let e = z ? N.ActivityLayoutMode.PIP : N.ActivityLayoutMode.FOCUSED;
                        d.default.dispatch({
                            type: "ACTIVITY_LAYOUT_MODE_UPDATE",
                            layoutMode: e,
                            applicationId: b.application_id
                        })
                    }
                }, [null == b ? void 0 : b.application_id, z]);
                if (null == b || null == D || null == k && (0, E.default)(t.id)) return null;
                let q = Array.from(b.connections.values()).map(e => C.default.getUser(e.user_id)).filter(e => null != e),
                    Q = {
                        instance_id: D,
                        channel_id: t.id
                    };
                return null != t.guild_id && "" !== t.guild_id && (Q.guild_id = t.guild_id), (0, i.jsx)(P.default, {
                    timeout: 2e3,
                    children: e => {
                        var a, r, d, u, c, p, f, m;
                        let {
                            idle: h,
                            onActive: P,
                            onForceIdle: I
                        } = e;
                        return (0, i.jsxs)(v.default, {
                            className: o(L.root, {
                                [L.pipMode]: z,
                                [w.idle]: h && !(null === (a = b.config) || void 0 === a ? void 0 : a.useInteractivePIP),
                                [L.pipModeShort]: z && !l,
                                [L.pipModeTall]: z && l,
                                [L.hidden]: W,
                                [L.multiPIPMode]: K
                            }),
                            noBorder: !z,
                            children: [(d = P, u = I, c = h, p = J, f = q, z && null != b && ((null == k ? void 0 : k.type) === j.ParticipantTypes.ACTIVITY || p) ? (null === (m = b.config) || void 0 === m ? void 0 : m.useInteractivePIP) ? (0, i.jsx)(A.InteractivePIPHeader, {
                                onJumpToChannel: X,
                                applicationId: b.application_id,
                                channel: t,
                                showControls: !c,
                                onMouseDown: d,
                                onMouseMove: d,
                                onMouseLeave: u,
                                onToggleHeight: Z,
                                isExpanded: l,
                                hideExpandedButton: p
                            }) : p ? (0, i.jsx)(i.Fragment, {
                                children: (0, i.jsx)(A.TextActivityPIPOverlay, {
                                    idle: c,
                                    onMouseMove: d,
                                    onMouseDown: d,
                                    onMouseLeave: u,
                                    onJumpToChannel: () => {
                                        X(), (0, g.updateActivityPanelMode)(_.ActivityPanelModes.PANEL)
                                    },
                                    channel: t,
                                    applicationId: b.application_id,
                                    users: f
                                })
                            }) : null == k ? null : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("div", {
                                    onMouseMove: d,
                                    onMouseDown: d,
                                    onMouseLeave: u,
                                    className: L.clickShield,
                                    onDoubleClick: X
                                }), (0, i.jsx)(A.PIPOverlay, {
                                    idle: c,
                                    onMouseMove: d,
                                    onMouseDown: d,
                                    onMouseLeave: u,
                                    onJumpToChannel: X,
                                    channel: t,
                                    applicationId: b.application_id,
                                    selectedParticipant: k
                                })]
                            }) : null), n ? (0, i.jsx)(s.Spinner, {
                                className: o(L.iframe, {
                                    [L.pipModeShort]: z && !l,
                                    [L.pipModeTall]: z && l
                                })
                            }) : (0, i.jsx)(T.EmbedIFrameWithLoadingBackground, {
                                allowPopups: N.APPLICATIONS_WITH_ALLOWED_POPUPS.has(b.application_id),
                                referrerPolicy: N.APPLICATIONS_WITH_NO_REFFERER.has(b.application_id) ? "no-referrer" : "origin",
                                url: b.url,
                                queryParams: Q,
                                className: o(L.iframe, {
                                    [L.pipModeShort]: z && !l,
                                    [L.pipModeTall]: z && l,
                                    [L.pipNonInteractive]: z && !(null === (r = b.config) || void 0 === r ? void 0 : r.useInteractivePIP)
                                }),
                                shouldRefocus: !z && R
                            }), !z && (0, i.jsx)(A.TileOverlay, {
                                participantsOpen: B,
                                showToggleParticipants: !1,
                                channelId: t.id
                            })]
                        })
                    }
                })
            }
            var O = e => {
                let {
                    channel: t,
                    ...n
                } = e, {
                    isLoading: a
                } = (0, x.useEmbeddedActivityLifecycle)(t);
                return (0, i.jsx)(b, {
                    channel: t,
                    isLoading: a,
                    ...n
                })
            }
        },
        386568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PIPOverlay: function() {
                    return O
                },
                TextActivityPIPOverlay: function() {
                    return D
                },
                TileOverlay: function() {
                    return R
                },
                InteractivePIPHeader: function() {
                    return F
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("414456"),
                l = n.n(a),
                o = n("446674"),
                r = n("77078"),
                s = n("629109"),
                d = n("244201"),
                u = n("442939"),
                c = n("836087"),
                p = n("383294"),
                f = n("289180"),
                m = n("19065"),
                h = n("550410"),
                v = n("598873"),
                P = n("981913"),
                I = n("576242"),
                S = n("336971"),
                C = n("109489"),
                g = n("116439"),
                y = n("42887"),
                E = n("145131"),
                T = n("256170"),
                A = n("433487"),
                x = n("811305"),
                N = n("735890"),
                _ = n("49111"),
                M = n("843455"),
                j = n("782340"),
                L = n("163933"),
                w = n("374142");

            function b(e) {
                let {
                    onClick: t,
                    isExpanded: n
                } = e;
                return (0, i.jsx)(P.default, {
                    iconClassName: l(L.arrowIcon, {
                        [L.arrowIconExpanded]: n
                    }),
                    onClick: t,
                    iconComponent: T.default,
                    label: n ? j.default.Messages.PICTURE_IN_PICTURE_COLLAPSE : j.default.Messages.PICTURE_IN_PICTURE_EXPAND
                })
            }

            function O(e) {
                var t, n;
                let {
                    channel: a,
                    applicationId: l,
                    onMouseDown: r,
                    onMouseMove: P,
                    onMouseLeave: C,
                    onJumpToChannel: T,
                    idle: A,
                    selectedParticipant: x
                } = e, j = (0, d.useAppContext)(), b = j === _.AppContext.POPOUT, O = (0, o.useStateFromStores)([y.default], () => y.default.isVideoEnabled()), D = (0, o.useStateFromStores)([y.default], () => Object.values(y.default.getVideoDevices())[0]), R = null === (t = null == D ? void 0 : D.disabled) || void 0 === t || t, F = !1 === R, W = (0, u.default)([l])[0], U = (0, f.default)(a), k = e => {
                    s.default.setVideoEnabled(e)
                };
                return (0, i.jsxs)("div", {
                    className: w.videoControls,
                    onMouseMove: P,
                    onMouseDown: r,
                    onMouseLeave: C,
                    children: [(0, i.jsx)("div", {
                        className: w.topControls,
                        children: (0, i.jsx)(v.PictureInPictureHeader, {
                            idle: A,
                            title: null !== (n = null == W ? void 0 : W.name) && void 0 !== n ? n : a.name,
                            onJumpToChannel: T,
                            preventIdleComponent: h.default
                        })
                    }), (0, i.jsxs)("div", {
                        className: w.bottomControls,
                        children: [(0, i.jsxs)(E.default, {
                            grow: 0,
                            shrink: 1,
                            basis: "50%",
                            align: E.default.Align.CENTER,
                            children: [(0, i.jsx)(g.default, {
                                className: L.leftPipIcon,
                                enabled: O,
                                cameraUnavailable: !F,
                                hasPermission: U,
                                onChange: k,
                                onCameraUnavailable: () => {
                                    F ? k(!0) : (0, m.default)()
                                }
                            }), (0, i.jsx)(h.default, {
                                children: (0, i.jsx)(c.default, {
                                    channelId: a.id,
                                    guildId: a.getGuildId(),
                                    className: w.leftTrayIcon,
                                    participant: x,
                                    compact: !0
                                })
                            })]
                        }), (0, i.jsxs)(E.default, {
                            grow: 0,
                            shrink: 1,
                            justify: E.default.Justify.END,
                            basis: "50%",
                            align: E.default.Align.CENTER,
                            children: [b ? null : (0, i.jsx)(S.default, {
                                className: L.rightPipIcon,
                                popoutOpen: !1,
                                onOpenPopout: () => {
                                    (0, N.default)(() => p.openChannelCallPopout(a))
                                },
                                onClosePopout: M.NOOP_NULL
                            }), (0, i.jsx)(I.default, {
                                applicationId: l,
                                channelId: a.id,
                                className: L.rightPipIcon
                            })]
                        })]
                    })]
                })
            }

            function D(e) {
                var t;
                let {
                    channel: n,
                    applicationId: a,
                    onMouseDown: o,
                    onMouseMove: s,
                    onMouseLeave: d,
                    onJumpToChannel: c,
                    idle: p,
                    users: f
                } = e, m = (0, u.default)([a])[0];
                return (0, i.jsxs)(r.Clickable, {
                    className: l(w.videoControls, w.videoControlsTextActivity),
                    onMouseMove: s,
                    onMouseDown: o,
                    onMouseLeave: d,
                    children: [(0, i.jsx)("div", {
                        className: l(w.topControls),
                        children: (0, i.jsx)(v.PictureInPictureHeader, {
                            idle: p,
                            title: null !== (t = null == m ? void 0 : m.name) && void 0 !== t ? t : n.name,
                            onJumpToChannel: c,
                            preventIdleComponent: h.default
                        })
                    }), (0, i.jsxs)("div", {
                        className: w.bottomControls,
                        children: [(0, i.jsx)(x.default, {
                            renderIcon: !1,
                            users: f,
                            size: 24,
                            max: 3,
                            className: L.userSummaryContainer
                        }), (0, i.jsx)(I.default, {
                            applicationId: a,
                            channelId: n.id,
                            iconClassName: L.leaveActivityIcon,
                            isActive: !0
                        })]
                    })]
                })
            }

            function R(e) {
                let {
                    channelId: t,
                    participantsOpen: n,
                    showToggleParticipants: a
                } = e;
                return a ? (0, i.jsx)(C.default, {
                    channelId: t,
                    isParticipantsOpen: n,
                    className: L.participantsButton
                }) : null
            }

            function F(e) {
                var t;
                let {
                    onMouseDown: n,
                    onMouseMove: a,
                    onMouseLeave: o,
                    showControls: r,
                    applicationId: s,
                    channel: d,
                    onJumpToChannel: c,
                    onToggleHeight: p,
                    isExpanded: f,
                    hideExpandedButton: m
                } = e, P = (0, u.default)([s])[0];
                return (0, i.jsx)("div", {
                    className: L.pipHeader,
                    onMouseMove: a,
                    onMouseDown: n,
                    onMouseLeave: o,
                    children: (0, i.jsxs)("div", {
                        className: l(w.topControls, L.pipHeaderContent, {
                            [L.pipHeaderContentOpen]: r
                        }),
                        children: [!r && (0, i.jsx)(A.default, {
                            className: L.menuIcon,
                            width: 12,
                            height: 12
                        }), r && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(v.PictureInPictureHeader, {
                                idle: !r,
                                title: null !== (t = null == P ? void 0 : P.name) && void 0 !== t ? t : d.name,
                                onJumpToChannel: c,
                                preventIdleComponent: h.default
                            }), (0, i.jsxs)("div", {
                                className: L.pipHeaderButtonsRight,
                                children: [m ? null : (0, i.jsx)(b, {
                                    isExpanded: f,
                                    onClick: p
                                }), (0, i.jsx)(I.default, {
                                    applicationId: s,
                                    channelId: d.id,
                                    iconClassName: L.leaveActivityIcon
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        965135: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useEmbeddedActivityLifecycle: function() {
                    return s
                }
            });
            var i = n("884691"),
                a = n("550766"),
                l = n("505259"),
                o = n("676065"),
                r = n("141962");
            let s = e => {
                let {
                    userActivity: t,
                    inActivity: n
                } = (0, l.default)(e.id), s = r.default;
                return (0, o.default)({
                    channel: e,
                    userActivity: t,
                    inActivity: n,
                    embeddedActivitiesManager: s
                }), i.useEffect(() => () => {
                    (null == t ? void 0 : t.application_id) != null && (0, a.disconnectEmbeddedActivity)(e.id, null == t ? void 0 : t.application_id)
                }, [e.id, null == t ? void 0 : t.application_id]), {
                    isLoading: !n
                }
            }
        },
        788448: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                l = n("77078"),
                o = n("987317"),
                r = n("442939"),
                s = n("713726"),
                d = n("503417"),
                u = n("162236"),
                c = n("546463"),
                p = n("101125"),
                f = n("953109"),
                m = n("474571"),
                h = n("782340"),
                v = n("124705");

            function P() {
                let e = (0, a.useStateFromStores)([p.default], () => p.default.getBroadcast()),
                    t = (0, a.useStateFromStores)([c.default], () => {
                        var t;
                        return null != e ? null === (t = c.default.getDetectableGame(e.applicationId)) || void 0 === t ? void 0 : t.id : null
                    }),
                    n = (0, r.useGetOrFetchApplication)(t);
                if (null == e) return null;
                let P = () => {
                        (0, u.openBroadcastingPrivacySettingsModal)()
                    },
                    I = () => {
                        (0, s.stopBroadcast)(), o.default.disconnect()
                    };
                return (0, i.jsxs)("div", {
                    className: v.container,
                    children: [null != n && (0, i.jsx)(f.default, {
                        game: n,
                        size: f.default.Sizes.LARGE
                    }), (0, i.jsxs)("div", {
                        className: v.content,
                        children: [(0, i.jsx)(l.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: h.default.Messages.BROADCASTING_CAPTURE_PAUSED
                        }), (0, i.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: h.default.Messages.BROADCASTING_CAPTURE_PAUSED_DETAILS
                        }), (0, i.jsxs)("div", {
                            className: v.actions,
                            children: [(0, i.jsx)(l.Tooltip, {
                                text: h.default.Messages.BROADCASTING_SETTINGS,
                                children: e => (0, i.jsx)(l.Clickable, {
                                    ...e,
                                    onClick: P,
                                    children: (0, i.jsx)(m.default, {
                                        className: v.button,
                                        width: 20,
                                        height: 20
                                    })
                                })
                            }), (0, i.jsx)(l.Tooltip, {
                                text: h.default.Messages.STOP_BROADCASTING,
                                children: e => (0, i.jsx)(l.Clickable, {
                                    ...e,
                                    onClick: I,
                                    children: (0, i.jsx)(d.default, {
                                        className: v.button,
                                        width: 20,
                                        height: 20
                                    })
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        540814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                o = n.n(l),
                r = n("764230");
            class s extends a.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    let {
                        streamId: n
                    } = e;
                    if (t.aReady) {
                        if (n !== t.aStreamId) return null == n ? {
                            bStreamId: n,
                            bReady: !0,
                            aStreamId: null,
                            aReady: !1
                        } : {
                            bStreamId: n,
                            bReady: !1
                        }
                    } else if (n !== t.bStreamId) return null == n ? {
                        aStreamId: n,
                        aReady: !0,
                        bStreamId: null,
                        bReady: !1
                    } : {
                        aStreamId: n,
                        aReady: !1
                    };
                    return null
                }
                renderVideo(e, t) {
                    let {
                        children: n,
                        mirror: l,
                        paused: o,
                        component: s
                    } = this.props;
                    if (null == e) {
                        if (null == n) return null;
                        let e = a.Children.only(n);
                        return a.cloneElement(e, {
                            style: {
                                display: t && !l ? void 0 : "none"
                            },
                            ...e.props
                        })
                    }
                    return (0, i.jsx)(s, {
                        paused: o,
                        className: r.media,
                        streamId: e,
                        onReady: t ? null : this.handleReady
                    })
                }
                render() {
                    let {
                        mirror: e,
                        className: t
                    } = this.props;
                    return (0, i.jsxs)("div", {
                        className: o(r.video, t, {
                            [r.mirror]: e
                        }),
                        onDoubleClick: this.handleDoubleClick,
                        onContextMenu: this.handleContextMenu,
                        children: [this.renderVideo(this.state.aStreamId, this.state.aReady), this.renderVideo(this.state.bStreamId, this.state.bReady)]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        aStreamId: null,
                        aReady: !1,
                        bStreamId: this.props.streamId,
                        bReady: !0
                    }, this.handleReady = () => {
                        this.state.aReady ? this.setState({
                            bReady: !0,
                            aStreamId: null,
                            aReady: !1
                        }) : this.setState({
                            aReady: !0,
                            bStreamId: null,
                            bReady: !1
                        })
                    }, this.handleDoubleClick = e => {
                        let {
                            onDoubleClick: t,
                            id: n
                        } = this.props;
                        null == t || t(e, n)
                    }, this.handleContextMenu = e => {
                        let {
                            onContextMenu: t,
                            id: n
                        } = this.props;
                        null == t || t(e, n)
                    }
                }
            }
            s.defaultProps = {
                paused: !0
            };
            var d = s
        },
        875268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ea
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                l = n("627445"),
                o = n.n(l),
                r = n("917351"),
                s = n.n(r),
                d = n("446674"),
                u = n("77078"),
                c = n("629109"),
                p = n("406189"),
                f = n("54239"),
                m = n("716241"),
                h = n("754493"),
                v = n("858944"),
                P = n("191145"),
                I = n("161306"),
                S = n("836087"),
                C = n("679653"),
                g = n("374014"),
                y = n("479788"),
                E = n("430951"),
                T = n("16916"),
                A = n("383294"),
                x = n("393414"),
                N = n("908583"),
                _ = n("550410"),
                M = n("598873"),
                j = n("54727"),
                L = n("336971"),
                w = n("954519"),
                b = n("857398"),
                O = n("373469"),
                D = n("271938"),
                R = n("42887"),
                F = n("27618"),
                W = n("697218"),
                U = n("476640"),
                k = n("555035"),
                V = n("471671"),
                B = n("754775"),
                H = n("599110"),
                G = n("387111"),
                Y = n("158998"),
                J = n("788448"),
                z = n("540814"),
                K = n("683245"),
                X = n("772442"),
                Z = n("211019"),
                q = n("19065"),
                Q = n("977347"),
                $ = n("799808"),
                ee = n("49111"),
                et = n("99795"),
                en = n("944636");
            class ei extends a.PureComponent {
                get viewProperties() {
                    let {
                        participantOnScreen: e,
                        currentUserId: t,
                        channel: n
                    } = this.props, i = (0, et.isStreamParticipant)(e), a = null != e && e.type !== et.ParticipantTypes.ACTIVITY && e.user.id === t, l = (null == e ? void 0 : e.type) === et.ParticipantTypes.STREAM || (null == e ? void 0 : e.type) === et.ParticipantTypes.USER;
                    return {
                        canPopout: i && !a,
                        canSettings: i && a,
                        canStopStream: i,
                        canSeeViewers: i,
                        canSeeParticipantName: l && n.type !== ee.ChannelTypes.DM,
                        canDisconnect: !i,
                        isSelf: a
                    }
                }
                get streamerPaused() {
                    let {
                        isMainWindowFocused: e,
                        activeSelfStream: t,
                        participantOnScreen: n
                    } = this.props, i = null != t && (null == n ? void 0 : n.id) === (0, g.encodeStreamKey)(t) && !e;
                    return i
                }
                get activeStreamForSelectedParticipant() {
                    let {
                        participantOnScreen: e,
                        activeStreams: t
                    } = this.props;
                    return (0, et.isStreamParticipant)(e) ? t.find(t => (0, g.encodeStreamKey)(t) === e.id) : null
                }
                getScreenMessage() {
                    let {
                        participantOnScreen: e,
                        currentUserId: t
                    } = this.props;
                    if (!(0, et.isStreamParticipant)(e)) return null;
                    let n = this.activeStreamForSelectedParticipant;
                    return null == n ? null : (0, E.default)(n, e.user, e.user.id === t, this.streamerPaused)
                }
                isEmptyBroadcast() {
                    var e;
                    let {
                        isSelfBroadcasting: t,
                        channel: n
                    } = this.props;
                    return t && (null === (e = n.recipients) || void 0 === e ? void 0 : e.length) === 0
                }
                componentDidMount() {
                    let {
                        channel: e
                    } = this.props;
                    H.default.track(ee.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, {
                        video_layout: "pip",
                        ...(0, m.collectVoiceAnalyticsMetadata)(e.id)
                    })
                }
                componentWillUnmount() {
                    let {
                        channel: e
                    } = this.props;
                    H.default.track(ee.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, {
                        video_layout: P.default.getLayout(e.id),
                        ...(0, m.collectVoiceAnalyticsMetadata)(e.id)
                    })
                }
                renderStreamState() {
                    let e = this.activeStreamForSelectedParticipant,
                        {
                            participantOnScreen: t
                        } = this.props;
                    if ((null == e ? void 0 : e.state) === ee.ApplicationStreamStates.ENDED) return (0, i.jsx)(K.default, {
                        stream: e,
                        width: et.PIP_WIDTH
                    });
                    if ((null == e ? void 0 : e.state) === ee.ApplicationStreamStates.FAILED) return (0, i.jsx)(X.default, {
                        stream: e,
                        width: et.PIP_WIDTH
                    });
                    if (this.isEmptyBroadcast()) return (0, i.jsx)(J.default, {});
                    else if ((null == t ? void 0 : t.type) === et.ParticipantTypes.HIDDEN_STREAM) return (0, i.jsx)(Z.default, {
                        participant: t,
                        width: et.PIP_WIDTH
                    });
                    return null
                }
                renderParticipantName() {
                    let {
                        channel: e,
                        participantOnScreen: t
                    } = this.props;
                    if ((null == t ? void 0 : t.type) === et.ParticipantTypes.STREAM || (null == t ? void 0 : t.type) === et.ParticipantTypes.USER) {
                        var n;
                        let a = null !== (n = G.default.getNickname(e.getGuildId(), e.id, t.user)) && void 0 !== n ? n : Y.default.getName(t.user);
                        return (0, i.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "always-white",
                            className: en.participantName,
                            lineClamp: 1,
                            children: a
                        })
                    }
                    return null
                }
                render() {
                    let {
                        channel: e,
                        streamId: t,
                        participantOnScreen: n,
                        isVideoEnabled: a
                    } = this.props, l = (0, C.computeChannelName)(e, W.default, F.default), o = this.isEmptyBroadcast(), r = (null == n ? void 0 : n.id) === D.default.getId() && a, s = this.renderStreamState(), d = null;
                    return (null == n ? void 0 : n.type) !== et.ParticipantTypes.ACTIVITY && (null != s ? d = s : ((null == n ? void 0 : n.type) === et.ParticipantTypes.USER || (null == n ? void 0 : n.type) === et.ParticipantTypes.STREAM) && (d = (0, i.jsx)(z.default, {
                        paused: this.streamerPaused,
                        streamId: t,
                        component: R.default.getVideoComponent(),
                        mirror: r,
                        children: (0, i.jsx)(B.default, {
                            size: u.AvatarSizes.SIZE_80,
                            src: null == n ? void 0 : n.user.getAvatarURL(e.guild_id, 80),
                            "aria-label": null == n ? void 0 : n.user.username
                        })
                    }))), (0, i.jsx)(N.default, {
                        timeout: 1800,
                        children: e => {
                            var t;
                            return (0, i.jsx)(M.default, {
                                title: l,
                                backgroundKey: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : "",
                                screenMessage: null == s ? this.getScreenMessage() : null,
                                onJumpToChannel: this.handleJumpToChannel,
                                renderBottomLeftControls: this.renderBottomLeftControls,
                                renderBottomRightControls: this.renderBottomRightControls,
                                preventIdleComponent: _.default,
                                width: et.PIP_WIDTH,
                                hideControls: o,
                                className: o ? en.emptyBroadcast : void 0,
                                innerClassName: o ? en.innerEmptyBroadcast : void 0,
                                ...e,
                                children: d
                            })
                        }
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        screensharePopoutOpen: !1
                    }, this._ref = a.createRef(), this.handleVideo = e => {
                        c.default.setVideoEnabled(e)
                    }, this.handleEnableVideoWhenUnavailable = () => {
                        let {
                            isVideoAvailable: e
                        } = this.props;
                        e ? this.handleVideo(!0) : (0, q.default)()
                    }, this.handleJumpToChannel = () => {
                        var e;
                        let {
                            channel: t
                        } = this.props;
                        (0, f.popAllLayers)();
                        let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : ee.ME;
                        p.default.channelListScrollTo(n, t.id), (0, x.transitionToGuild)(n, t.id)
                    }, this.handleStartStream = () => {
                        let {
                            canGoLive: e,
                            channel: t
                        } = this.props, n = t.getGuildId();
                        if (o(null != n, "Cannot go live in non guild channel"), !e) return (0, Q.default)();
                        (0, $.default)(n, t.id, ee.AnalyticsPages.GUILD_CHANNEL)
                    }, this.handleStopStream = () => {
                        let {
                            participantOnScreen: e,
                            isSelfBroadcasting: t
                        } = this.props;
                        o((0, et.isStreamParticipant)(e), "cannot stop stream for non streamer"), t ? (0, v.openStopBroadcastConfirmModal)(() => (0, T.default)(e.stream)) : (0, T.default)(e.stream)
                    }, this.handleOpenPopout = () => {
                        let {
                            channel: e
                        } = this.props;
                        A.openChannelCallPopout(e)
                    }, this.renderBottomLeftControls = () => {
                        let {
                            canSeeParticipantName: e
                        } = this.viewProperties;
                        return (0, i.jsx)(i.Fragment, {
                            children: e ? this.renderParticipantName() : null
                        })
                    }, this.renderBottomRightControls = () => {
                        let {
                            canSettings: e,
                            canPopout: t,
                            canDisconnect: n,
                            canStopStream: a,
                            canSeeViewers: l
                        } = this.viewProperties;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [l ? this.renderViewersIcon() : null, e ? this.renderSettingsIcon() : null, t ? this.renderPopoutIcon() : null, a ? this.renderStopStreamButton() : null, n ? this.renderDisconnectButton() : null]
                        })
                    }, this.renderDisconnectButton = () => {
                        let {
                            channel: e
                        } = this.props;
                        return (0, i.jsx)(j.default, {
                            className: en.rightTrayIcon,
                            channel: e
                        })
                    }, this.renderStopStreamButton = () => {
                        let {
                            isSelf: e
                        } = this.viewProperties;
                        return (0, i.jsx)(w.default, {
                            isSelfStream: e,
                            className: en.rightTrayIcon,
                            onClick: this.handleStopStream
                        })
                    }, this.renderViewersIcon = () => {
                        let {
                            participantOnScreen: e,
                            channel: t
                        } = this.props;
                        return o((0, et.isStreamParticipant)(e) || (null == e ? void 0 : e.type) === et.ParticipantTypes.ACTIVITY, "Cannot render participants for participant type ".concat(null == e ? void 0 : e.type)), (0, i.jsx)(_.default, {
                            children: (0, i.jsx)(S.default, {
                                channelId: t.id,
                                guildId: t.getGuildId(),
                                className: en.rightTrayIcon,
                                participant: e,
                                compact: !0
                            })
                        })
                    }, this.renderPopoutIcon = () => (0, i.jsx)(L.default, {
                        className: en.rightTrayIcon,
                        popoutOpen: !1,
                        onOpenPopout: this.handleOpenPopout,
                        onClosePopout: ee.NOOP_NULL
                    }), this.renderSettingsIcon = () => {
                        let {
                            participantOnScreen: e,
                            activeStreams: t
                        } = this.props;
                        o((0, et.isStreamParticipant)(e), "Cannot render settings for non stream participant");
                        let n = t.find(t => (0, g.encodeStreamKey)(t) === e.id);
                        return null == n || n.state === ee.ApplicationStreamStates.ENDED ? null : (0, i.jsx)(b.default, {
                            stream: n,
                            className: en.rightTrayIcon,
                            appContext: ee.AppContext.APP
                        })
                    }
                }
            }
            var ea = d.default.connectStores([R.default, P.default, D.default, U.default, k.default, O.default, V.default], e => {
                let {
                    channel: t
                } = e, n = U.default.getSpeaker(t.id), i = P.default.getParticipant(t.id, n), a = s(R.default.getVideoDevices()).values().first(), l = null == a || a.disabled, o = null != i && i.type !== et.ParticipantTypes.ACTIVITY && i.type !== et.ParticipantTypes.HIDDEN_STREAM ? k.default.getStreamId(i.user.id, t.getGuildId(), (0, I.default)(i.type)) : null, r = !l && R.default.isVideoEnabled(), d = (0, y.default)(R.default), u = D.default.getId(), c = O.default.getCurrentUserActiveStream(), p = (0, h.isBroadcastingInChannel)(t.id);
                return {
                    channel: t,
                    streamId: o,
                    participantOnScreen: i,
                    isVideoAvailable: !1 === l,
                    isVideoEnabled: r,
                    isSelfBroadcasting: p,
                    canGoLive: d,
                    currentUserId: u,
                    activeStreams: O.default.getAllActiveStreams(),
                    activeSelfStream: c,
                    isMainWindowFocused: V.default.isFocused()
                }
            })(ei)
        },
        598873: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PictureInPictureHeader: function() {
                    return S
                },
                default: function() {
                    return C
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("414456"),
                l = n.n(a),
                o = n("446674"),
                r = n("669491"),
                s = n("266491"),
                d = n("77078"),
                u = n("945956"),
                c = n("145131"),
                p = n("276999"),
                f = n("531470"),
                m = n("713573"),
                h = n("301178"),
                v = n("600123"),
                P = n("782340"),
                I = n("374142");

            function S(e) {
                let {
                    title: t,
                    onJumpToChannel: n,
                    idle: a,
                    preventIdleComponent: l
                } = e, s = (0, o.useStateFromStores)([u.default], () => u.default.getChannelId()), c = null != s ? (0, i.jsx)(h.default, {
                    voiceChannelId: s,
                    idle: a
                }) : null;
                return (0, i.jsxs)(l, {
                    className: I.headerIdleContainer,
                    children: [(0, i.jsxs)(d.Clickable, {
                        className: I.headerTitle,
                        onClick: n,
                        children: [(0, i.jsx)(f.default, {
                            "aria-label": P.default.Messages.OPEN_IN_THEATER,
                            className: I.backButton,
                            width: 20,
                            height: 20
                        }), (0, i.jsx)(m.default, {
                            className: I.headerText,
                            size: m.default.Sizes.SIZE_16,
                            color: r.default.unsafe_rawColors.WHITE_500.css,
                            children: t
                        })]
                    }), c]
                })
            }

            function C(e) {
                let {
                    children: t,
                    idle: n,
                    onJumpToChannel: a,
                    backgroundKey: o,
                    onActive: r,
                    onForceIdle: d,
                    renderBottomLeftControls: u,
                    renderBottomRightControls: f,
                    screenMessage: m,
                    hideControls: h = !1,
                    className: P,
                    innerClassName: C,
                    ...g
                } = e;
                return (0, i.jsxs)("div", {
                    onMouseMove: r,
                    onMouseDown: r,
                    onMouseLeave: d,
                    className: l(I.pictureInPictureVideo, {
                        [I.idle]: n
                    }, P),
                    onDoubleClick: a,
                    children: [(0, i.jsx)(s.default, {
                        children: (0, i.jsx)(p.BackgroundTransition, {
                            className: C,
                            children: t
                        }, o)
                    }), null != m ? (0, i.jsx)(v.default, {
                        size: "small",
                        ...m
                    }) : null, !h && (0, i.jsxs)("div", {
                        className: I.videoControls,
                        children: [(0, i.jsx)("div", {
                            className: I.topControls,
                            children: (0, i.jsx)(S, {
                                idle: n,
                                onJumpToChannel: a,
                                ...g
                            })
                        }), (0, i.jsxs)("div", {
                            className: I.bottomControls,
                            children: [(0, i.jsx)(c.default, {
                                grow: 0,
                                shrink: 1,
                                basis: "50%",
                                align: c.default.Align.CENTER,
                                className: I.bottomLeftControls,
                                children: null == u ? void 0 : u()
                            }), (0, i.jsx)(c.default, {
                                grow: 0,
                                shrink: 1,
                                justify: c.default.Justify.END,
                                basis: "50%",
                                align: c.default.Align.CENTER,
                                children: null == f ? void 0 : f()
                            })]
                        })]
                    })]
                })
            }
        },
        301178: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("424973"), n("222007");
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                l = n("669491"),
                o = n("77078"),
                r = n("255397"),
                s = n("600965"),
                d = n("191225"),
                u = n("299285"),
                c = n("191145"),
                p = n("373469"),
                f = n("449501"),
                m = n("697218"),
                h = n("663745"),
                v = n("49111"),
                P = n("99795"),
                I = n("782340"),
                S = n("374142");

            function C(e) {
                let {
                    closePopout: t,
                    idle: n,
                    pipWindows: l,
                    voiceChannelId: m,
                    onSelect: h
                } = e;
                n && t();
                let S = (0, a.useStateFromStores)([d.default], () => d.default.getSelfEmbeddedActivityForChannel(m)),
                    C = (0, a.useStateFromStores)([f.default], () => f.default.pipWindow),
                    g = (0, a.useStateFromStores)([c.default], () => c.default.getSelectedParticipant(m)),
                    y = (0, a.useStateFromStores)([c.default], () => c.default.getStreamParticipants(m));
                return (0, i.jsx)(o.Menu, {
                    navId: "pip-menu",
                    "aria-label": "switch PIP",
                    onClose: t,
                    onSelect: h,
                    children: (function() {
                        let e = l.find(e => e.component === v.PictureInPictureComponents.EMBED_IFRAME),
                            t = l.find(e => e.component === v.PictureInPictureComponents.VIDEO),
                            n = [];
                        return null != e && (null == C ? void 0 : C.id) !== e.id && n.push({
                            pipWindow: e
                        }), null != t && y.forEach(e => {
                            let i = p.default.getActiveStreamForApplicationStream(e.stream),
                                a = e.id === (null == g ? void 0 : g.id) && (null == C ? void 0 : C.id) === t.id;
                            null != i && !a && n.push({
                                pipWindow: t,
                                participant: e,
                                stream: i
                            })
                        }), n
                    })().map(function(e) {
                        var t;
                        let n = e.pipWindow.id,
                            a = null === (t = e.participant) || void 0 === t ? void 0 : t.id,
                            l = function(e) {
                                if (e.pipWindow.component === v.PictureInPictureComponents.EMBED_IFRAME && null != S) {
                                    var t;
                                    let e = null === (t = u.default.getApplication(S.application_id)) || void 0 === t ? void 0 : t.name;
                                    return null == e ? I.default.Messages.SWITCH_PIP_TO_ACTIVITY : I.default.Messages.SWITCH_PIP_TO_ACTIVITY_NAME.format({
                                        activityName: e
                                    })
                                }
                                return null == e.participant || e.participant.type !== P.ParticipantTypes.STREAM ? I.default.Messages.SWITCH_PIP_TO_GO_LIVE : I.default.Messages.SWITCH_PIP_TO_USER_STREAM.format({
                                    username: e.participant.userNick
                                })
                            }(e),
                            d = "".concat(n).concat(null != a ? a : "");
                        return (0, i.jsx)(o.MenuItem, {
                            id: d,
                            label: l,
                            action: () => (function(e) {
                                (null == C ? void 0 : C.id) !== e.pipWindow.id && (0, s.switchPIPFocus)(e.pipWindow.id);
                                let t = e.participant;
                                null != t && t.type !== P.ParticipantTypes.ACTIVITY && r.default.selectParticipant(m, t.id)
                            })(e)
                        }, d)
                    })
                })
            }
            var g = function(e) {
                let {
                    voiceChannelId: t,
                    idle: n
                } = e, r = (0, a.useStateFromStores)([f.default], () => f.default.pipWindows), s = Array.from(r.values()), d = (0, a.useStateFromStoresArray)([p.default], () => p.default.getAllActiveStreamsForChannel(t)), u = d.filter(e => {
                    var n;
                    return e.ownerId !== (null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && e.channelId === t
                }), c = 1 === s.length && s[0].component === v.PictureInPictureComponents.EMBED_IFRAME || 0 === u.length, P = 1 === s.length && u.length <= 1;
                return c || P ? null : (0, i.jsx)(o.Popout, {
                    position: "bottom",
                    renderPopout: e => (0, i.jsx)(C, {
                        voiceChannelId: t,
                        pipWindows: s,
                        idle: n,
                        ...e
                    }),
                    children: e => (0, i.jsx)(o.Clickable, {
                        className: S.menuIcon,
                        ...e,
                        children: (0, i.jsx)(h.default, {
                            color: l.default.unsafe_rawColors.WHITE_500.css
                        })
                    })
                })
            }
        },
        857398: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var i = n("37983"),
                a = n("884691"),
                l = n("446674"),
                o = n("77078"),
                r = n("754493"),
                s = n("234755"),
                d = n("951691"),
                u = n("799808"),
                c = n("42203"),
                p = n("697218"),
                f = n("474571"),
                m = n("804643"),
                h = n("587974"),
                v = n("719923"),
                P = n("550410"),
                I = n("981913"),
                S = n("49111"),
                C = n("646718"),
                g = n("782340"),
                y = n("978461");

            function E(e) {
                let {
                    className: t
                } = e;
                return (0, i.jsx)(f.default, {
                    className: t
                })
            }

            function T(e) {
                let {
                    className: t
                } = e;
                return (0, i.jsxs)(a.Fragment, {
                    children: [(0, i.jsx)(h.default, {
                        className: t,
                        mask: h.default.Masks.HEADER_BAR_BADGE,
                        children: (0, i.jsx)(E, {})
                    }), (0, i.jsx)(m.default, {
                        className: y.badgeUpgrade
                    })]
                })
            }

            function A(e) {
                let {
                    hideBadges: t = !1,
                    stream: n,
                    ...f
                } = e, m = (0, l.useStateFromStores)([p.default], () => v.default.isPremium(p.default.getCurrentUser(), C.PremiumTypes.TIER_1)), h = (0, l.useStateFromStores)([c.default], () => c.default.getChannel(null == n ? void 0 : n.channelId)), y = a.useMemo(() => null != n ? [n] : [], [n]), A = (0, r.useIsBroadcastingInChannel)(null == h ? void 0 : h.id), x = a.useCallback(() => {
                    null != h && (0, u.default)(h.getGuildId(), h.id, S.AnalyticsSections.STREAM_SETTINGS)
                }, [h]);
                if (null == n || null == h) return null;
                let N = E;
                return !t && !m && (N = T), (0, i.jsx)(o.Popout, {
                    position: "top",
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, i.jsx)(P.default, {
                            children: A ? (0, i.jsx)(s.default, {
                                onClose: t
                            }) : (0, i.jsx)(d.default, {
                                channel: h,
                                currentUser: p.default.getCurrentUser(),
                                activeStreams: y,
                                onClose: t,
                                showReportOption: !0,
                                handleGoLive: x
                            })
                        })
                    },
                    animation: o.Popout.Animation.FADE,
                    children: e => (0, i.jsx)(I.default, {
                        ...e,
                        label: g.default.Messages.STREAMER_SETTINGS_TITLE,
                        iconComponent: N,
                        ...f
                    })
                })
            }
        },
        476640: function(e, t, n) {
            "use strict";
            let i, a;
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007");
            var l = n("917351"),
                o = n.n(l),
                r = n("446674"),
                s = n("913144"),
                d = n("191145"),
                u = n("374014"),
                c = n("373469"),
                p = n("271938"),
                f = n("42887"),
                m = n("280168"),
                h = n("99795");

            function v() {
                let e, t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                if (null == i) e = null;
                else {
                    var n, l, r, s, v;
                    e = d.default.getSelectedParticipantId(i);
                    let t = c.default.getLastActiveStream(),
                        P = null != e ? d.default.getParticipant(i, e) : null;
                    if (((null == P ? void 0 : P.type) === h.ParticipantTypes.ACTIVITY || (null == P ? void 0 : P.type) === h.ParticipantTypes.USER && !(null === (n = P.voiceState) || void 0 === n ? void 0 : n.selfVideo)) && (e = null), null != t && null == e && (e = null === (l = d.default.getParticipant(i, (0, u.encodeStreamKey)(t))) || void 0 === l ? void 0 : l.id), null == e) {
                        let t = p.default.getId(),
                            n = o(d.default.getVideoParticipants(i)).filter(e => e.type === h.ParticipantTypes.USER && e.user.id !== t && !f.default.isLocalVideoDisabled(e.user.id)),
                            l = Date.now();
                        null == (e = null === (r = n.map(e => [e.user.id, m.default.getSpeakingDuration(e.user.id, l)]).filter(e => {
                            let [t, n] = e;
                            return 0 !== n
                        }).maxBy(e => {
                            let [t, n] = e;
                            return -n
                        })) || void 0 === r ? void 0 : r[0]) && (e = null != a ? a : null === (v = n.first()) || void 0 === v ? void 0 : null === (s = v.user) || void 0 === s ? void 0 : s.id)
                    }
                }
                a !== e && (a = e, t && C.emitChange())
            }
            let P = o.debounce(v, 300);

            function I() {
                return P(), !1
            }
            class S extends r.default.Store {
                initialize() {
                    this.waitFor(d.default, p.default, m.default, c.default, f.default), this.syncWith([d.default, c.default], I)
                }
                getSpeaker(e) {
                    return i !== e && (i = e, v(!1)), null != a ? a : p.default.getId()
                }
            }
            S.displayName = "VideoSpeakerStore";
            let C = new S(s.default, {
                AUDIO_SET_LOCAL_VIDEO_DISABLED: I
            });
            var g = C
        },
        276999: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BackgroundTransition: function() {
                    return m
                }
            });
            var i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                o = n.n(l),
                r = n("458960"),
                s = n("862337"),
                d = n("266491"),
                u = n("145131"),
                c = n("49111"),
                p = n("169092");
            let f = {
                [c.ChannelLayouts.NORMAL]: p.normal,
                [c.ChannelLayouts.MINIMUM]: p.minimum,
                [c.ChannelLayouts.NO_CHAT]: p.noChat,
                [c.ChannelLayouts.FULL_SCREEN]: p.fullScreen
            };
            class m extends a.PureComponent {
                componentDidAppear() {
                    this.state.animation.setValue(1)
                }
                componentWillEnter(e) {
                    let {
                        animation: t
                    } = this.state;
                    t.setValue(0), r.default.spring(t, {
                        toValue: 1,
                        overshootClamping: !0
                    }).start(e)
                }
                componentWillLeave(e) {
                    r.default.spring(this.state.animation, {
                        toValue: 0,
                        overshootClamping: !0
                    }).start(e)
                }
                render() {
                    return (0, i.jsx)(r.default.div, {
                        className: o(p.videoBackgroundTransition, this.props.className),
                        style: {
                            opacity: this.state.animation
                        },
                        children: this.props.children
                    })
                }
                constructor(e) {
                    super(e), this.state = {
                        animation: new r.default.Value(0)
                    }
                }
            }
            class h extends a.PureComponent {
                componentDidMount() {
                    document.addEventListener("mousedown", this.handleMouseEvent, !0), document.addEventListener("mousemove", this.handleMouseEvent, !0)
                }
                componentWillUnmount() {
                    document.removeEventListener("mousedown", this.handleMouseEvent, !0), document.removeEventListener("mousemove", this.handleMouseEvent, !0), this._timeout.stop()
                }
                static getDerivedStateFromProps(e, t) {
                    if (e.layout !== t.layoutProp) return t.idle ? {
                        idle: !1,
                        layoutProp: e.layout
                    } : {
                        layoutProp: e.layout
                    };
                    return null
                }
                componentDidUpdate(e) {
                    this.props.layout !== e.layout && this._timeout.stop()
                }
                renderBackground() {
                    let {
                        background: e,
                        backgroundKey: t,
                        layout: n
                    } = this.props, a = "".concat(n, "-").concat(null != t ? t : "");
                    return (0, i.jsx)(d.default, {
                        className: p.videoBackground,
                        component: "div",
                        children: (0, i.jsx)(m, {
                            children: e
                        }, a)
                    })
                }
                renderContents() {
                    let {
                        top: e,
                        center: t,
                        bottom: n,
                        layout: a,
                        focused: l
                    } = this.props, {
                        idle: r
                    } = this.state;
                    return (0, i.jsx)(u.default, {
                        className: o(p.video, f[a], {
                            [p.idle]: r
                        }),
                        direction: u.default.Direction.VERTICAL,
                        justify: u.default.Justify.CENTER,
                        children: (0, i.jsxs)(u.default, {
                            className: p.videoWrapper,
                            direction: u.default.Direction.VERTICAL,
                            children: [this.renderBackground(), (0, i.jsxs)(u.default, {
                                className: o(p.videoInner, {
                                    [p.focused]: l
                                }),
                                direction: u.default.Direction.VERTICAL,
                                justify: u.default.Justify.BETWEEN,
                                children: [(0, i.jsx)(u.default, {
                                    className: p.videoTop,
                                    grow: 0,
                                    children: e
                                }), (0, i.jsx)(u.default, {
                                    className: p.videoCenter,
                                    children: t
                                }), (0, i.jsx)(u.default, {
                                    className: p.videoBottom,
                                    grow: 0,
                                    children: n
                                })]
                            })]
                        })
                    })
                }
                render() {
                    let {
                        layout: e,
                        className: t,
                        animated: n
                    } = this.props;
                    return (0, i.jsx)("div", {
                        className: o(p.videoHeight, f[e], t, {
                            [p.animated]: n
                        }),
                        children: this.renderContents()
                    })
                }
                constructor(e) {
                    super(e), this._timeout = new s.Timeout, this.handleMouseEvent = () => {
                        let {
                            layout: e
                        } = this.props;
                        (e === c.ChannelLayouts.FULL_SCREEN || e === c.ChannelLayouts.NO_CHAT) && (this._timeout.start(3e3, () => this.setState({
                            idle: !0
                        })), this.state.idle && this.setState({
                            idle: !1
                        }))
                    }, this.state = {
                        idle: !1,
                        backgroundAnimation: new r.default.Value(0),
                        layoutProp: e.layout
                    }
                }
            }
            h.defaultProps = {
                layout: c.ChannelLayouts.MINIMUM,
                animated: !0
            }
        },
        804643: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("75196");

            function l(e) {
                let {
                    width: t = 8,
                    height: n = 8,
                    color: l = "currentColor",
                    foreground: o,
                    ...r
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(r),
                    width: t,
                    height: n,
                    viewBox: "0 0 8 8",
                    fill: "none",
                    children: (0, i.jsx)("path", {
                        className: o,
                        fill: l,
                        d: "M8 3.99957L4 0 0 3.99957l1.20161 1.20149L3.1502 3.25268V8h1.6996V3.25268l1.94858 1.94838L8 3.99957z"
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=65800.657a577c4f6fc39eb27e.js.map