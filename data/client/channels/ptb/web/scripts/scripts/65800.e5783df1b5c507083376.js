(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["65800"], {
        916580: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                i = n("446674"),
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
                I = n("449008"),
                P = n("49111"),
                C = n("272505");
            let S = {
                [P.PictureInPictureComponents.VIDEO]: p.default,
                [P.PictureInPictureComponents.EMBED_IFRAME]: d.default
            };
            class g extends l.PureComponent {
                render() {
                    let {
                        selectedPIPWindow: e,
                        pipWindows: t,
                        maxX: n,
                        maxY: l,
                        theme: i,
                        dockedRect: o,
                        appContext: r,
                        roundCorners: s
                    } = this.props;
                    return (0, a.jsx)(v.default, {
                        pictureInPictureComponents: S,
                        selectedPIPWindow: e,
                        pipWindows: t,
                        maxX: n,
                        maxY: l,
                        dockedRect: o,
                        theme: i,
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
            var y = i.default.connectStores([u.default, r.default, h.default, c.default, f.default, m.default], e => {
                var t, n, a;
                let l;
                let i, {
                        showInPopoutWindow: o = !1,
                        disallowTextActivity: d = !1
                    } = e,
                    p = u.default.getWindowOpen(P.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
                    v = r.default.getCurrentEmbeddedActivity(),
                    S = null != v && !(0, s.default)(v.channelId, f.default),
                    g = r.default.getActivityPanelMode(),
                    y = null != v && S && g === C.ActivityPanelModes.PANEL,
                    E = h.default.windowSize();
                if (p && (d && y || !y)) {
                    let e = u.default.getWindow(P.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                    E = null == e ? E : {
                        width: e.innerWidth,
                        height: e.innerHeight
                    }
                }!d && y ? l = P.AppContext.APP : o && (l = P.AppContext.POPOUT), i = d && S ? null : S || !p || o ? null != v && g === C.ActivityPanelModes.PANEL && S ? null !== (t = m.default.pipActivityWindow) && void 0 !== t ? t : m.default.pipVideoWindow : null !== (n = m.default.pipVideoWindow) && void 0 !== n ? n : m.default.pipActivityWindow : null;
                let T = Array.from(m.default.pipWindows.values()),
                    A = T.find(e => e.component === P.PictureInPictureComponents.VIDEO),
                    x = T.find(e => e.component === P.PictureInPictureComponents.EMBED_IFRAME),
                    N = [A, x].filter(I.isNotNullish);
                return {
                    selectedPIPWindow: i,
                    pipWindows: N,
                    maxX: E.width,
                    maxY: E.height,
                    theme: c.default.theme,
                    dockedRect: m.default.getDockedRect(null !== (a = null == i ? void 0 : i.id) && void 0 !== a ? a : ""),
                    appContext: l,
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
            var a = n("884691"),
                l = n("446674"),
                i = n("77078"),
                o = n("244201"),
                r = n("778588"),
                s = n("144747"),
                d = n("49111");

            function u() {
                let e = (0, i.useModalsStore)(e => !Object.entries(e).every(e => {
                        let [t, n] = e;
                        return 0 === n.length
                    })),
                    t = (0, l.useStateFromStores)([s.default], () => s.default.isOpen()),
                    n = (0, l.useStateFromStores)([r.default], () => r.default.hasLayers()),
                    [u, c] = a.useState(!1),
                    p = (0, o.useWindowDispatch)();
                return a.useEffect(() => {
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
            var a = n("446674"),
                l = n("271938"),
                i = n("191225");

            function o(e) {
                let t = l.default.getId(),
                    {
                        userActivity: n,
                        inActivity: o
                    } = (0, a.useStateFromStoresObject)([i.default], () => {
                        var n;
                        let a = i.default.getSelfEmbeddedActivityForChannel(e),
                            l = i.default.getEmbeddedActivitiesForChannel(e),
                            o = null === (n = l.find(e => e.applicationId === (null == a ? void 0 : a.applicationId))) || void 0 === n ? void 0 : n.userIds,
                            r = null == o ? void 0 : o.has(t);
                        return {
                            userActivity: a,
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
            var a = n("884691"),
                l = n("917351"),
                i = n("446674"),
                o = n("827560"),
                r = n("244201"),
                s = n("206230"),
                d = n("659500"),
                u = n("49111");
            let c = (0, l.debounce)(e => {
                setTimeout(() => {
                    var t;
                    null === (t = e.current) || void 0 === t || t.focus()
                }, 0)
            }, 50);

            function p(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                    l = (0, i.useStateFromStores)([s.default], () => s.default.keyboardModeEnabled),
                    p = (0, o.default)(),
                    [f, m] = a.useState(!1),
                    h = (0, r.useWindowDispatch)();
                return a.useEffect(() => {
                    if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);

                    function e() {
                        p && (h.dispatch(u.ComponentActions.POPOUT_CLOSE), d.ComponentDispatch.dispatch(u.ComponentActions.CONTEXT_MENU_CLOSE))
                    }
                }, [n, p, t, h]), a.useEffect(() => {
                    var a, i, o;
                    if (l || !f || !t) return;
                    let r = p;

                    function s(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null == n || "BUTTON" === n.tagName) && !r && c(e)
                        }, 100)
                    }
                    return null === (a = e.current) || void 0 === a || a.addEventListener("focusout", s), (null === (i = n.document.activeElement) || void 0 === i ? void 0 : i.tagName) !== "IFRAME" && !r && (null === (o = e.current) || void 0 === o || o.focus()), () => {
                        var t;
                        null === (t = e.current) || void 0 === t || t.removeEventListener("focusout", s), r = !0
                    }
                }, [t, f, l, e, n, p]), m
            }
        },
        676065: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("884691"),
                l = n("550766");

            function i(e) {
                let {
                    channel: t,
                    userActivity: n,
                    inActivity: i,
                    embeddedActivitiesManager: o
                } = e;
                a.useEffect(() => {
                    !i && (0, l.launchEmbeddedActivity)(t.id)
                }, [null == n ? void 0 : n.applicationId, t.id, i, o])
            }
        },
        828466: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            let a = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];

            function l(e) {
                let {
                    allowPopups: t
                } = e, n = a;
                return t && (n = [...a, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" ")
            }
        },
        817477: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EmbedIFrameWithLoadingBackground: function() {
                    return S
                }
            }), n("222007"), n("313619"), n("654714"), n("287168"), n("956660");
            var a = n("37983"),
                l = n("884691"),
                i = n("414456"),
                o = n.n(i),
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
                I = n("49111"),
                P = n("406796");

            function C(e) {
                let {
                    url: t,
                    className: n,
                    style: i,
                    onLoad: o,
                    shouldRefocus: P,
                    queryParams: C,
                    allowPopups: S = !1,
                    referrerPolicy: g = "origin"
                } = e, y = (0, d.useStateFromStores)([u.default], () => u.default.getWindow(I.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), E = (0, r.useMemoOne)(() => (0, s.v4)(), [t]), T = l.useRef(null), A = (0, m.default)(T, P, null == y ? window : y), x = {
                    ...C,
                    frame_id: E,
                    platform: v.ActivityPlatform.DESKTOP
                }, [N, M] = l.useState(!1), j = p.default.theme, _ = {
                    ...i
                };
                return j === I.ThemeTypes.LIGHT ? _.colorScheme = "light" : _.colorScheme = "dark", l.useEffect(() => (f.ComponentDispatch.dispatch(I.ComponentActions.IFRAME_MOUNT, {
                    id: E
                }), () => {
                    f.ComponentDispatch.dispatch(I.ComponentActions.IFRAME_UNMOUNT, {
                        id: E
                    })
                }), [E]), f.ComponentDispatch.subscribe(I.ComponentActions.MANUAL_IFRAME_RESIZING, e => {
                    let {
                        resizing: t
                    } = e;
                    M(t)
                }), N && (_.pointerEvents = "none"), null != t ? (0, a.jsx)("iframe", {
                    style: _,
                    allow: "autoplay; encrypted-media",
                    referrerPolicy: g,
                    onLoad: function(e) {
                        var n;
                        null == o || o(e.target), T.current = e.target, A(!0), null === (n = e.target.contentWindow) || void 0 === n || n.postMessage([c.default.HELLO, x], null != t ? t : "")
                    },
                    sandbox: (0, h.default)({
                        allowPopups: S
                    }),
                    className: n,
                    src: "".concat(t, "?").concat(new URLSearchParams(x))
                }) : null
            }

            function S(e) {
                let {
                    onLoad: t
                } = e, [n, i] = l.useState(!1), r = l.useCallback(e => {
                    i(!0), null == t || t(e)
                }, [t]);
                return (0, a.jsxs)("div", {
                    className: P.fillParent,
                    children: [!n && (0, a.jsx)("div", {
                        className: o(P.fillParent, P.iframePlaceholder)
                    }), (0, a.jsx)("div", {
                        className: o(P.fillParent, n ? void 0 : P.hiddenIframeContainer),
                        children: (0, a.jsx)(C, {
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
                    return D
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                i = n("414456"),
                o = n.n(i),
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
                I = n("908583"),
                P = n("449501"),
                C = n("18494"),
                S = n("697218"),
                g = n("550766"),
                y = n("191225"),
                E = n("420444"),
                T = n("817477"),
                A = n("386568"),
                x = n("965135"),
                N = n("954016"),
                M = n("272505"),
                j = n("49111"),
                _ = n("99795"),
                L = n("327772"),
                w = n("735276"),
                b = n("678016");

            function O(e) {
                let {
                    channel: t,
                    isLoading: n
                } = e, [i, x] = l.useState(!1), O = (0, r.useStateFromStores)([y.default], () => y.default.getSelfEmbeddedActivityForChannel(t.id)), D = (0, r.useStateFromStores)([y.default], () => y.default.getActivityPanelMode()), R = null == O ? void 0 : O.instanceId, F = (0, r.useStateFromStores)([C.default], () => C.default.getChannelId() === t.id), {
                    dockedRect: W,
                    isHidden: U
                } = (0, r.useStateFromStoresObject)([P.default], () => {
                    let e = P.default.pipWindow;
                    return {
                        dockedRect: null != e ? P.default.getDockedRect(e.id) : null,
                        isHidden: P.default.isEmbeddedActivityHidden()
                    }
                }), k = (0, r.useStateFromStores)([m.default], () => m.default.getWindow(j.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), {
                    activityParticipant: V,
                    selectedParticipant: B,
                    participantsOpen: H
                } = (0, r.useStateFromStoresObject)([f.default], () => ({
                    activityParticipant: null != O ? f.default.getParticipant(t.id, O.applicationId) : null,
                    selectedParticipant: f.default.getSelectedParticipant(t.id),
                    participantsOpen: f.default.getParticipantsOpen(t.id)
                })), G = F || null != k, Y = (0, E.default)(t.id), J = Y && (null == B ? void 0 : B.type) !== _.ParticipantTypes.ACTIVITY, z = !Y && D === M.ActivityPanelModes.PIP, K = (!G || G && (J || z) && null == W) && !U, X = K && null != P.default.pipVideoWindow && null != P.default.pipActivityWindow;

                function Z() {
                    var e;
                    if (null != O && u.default.selectParticipant(t.id, O.applicationId), null != k) return;
                    (0, p.popAllLayers)();
                    let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : j.ME;
                    c.default.channelListScrollTo(n, t.id), (0, h.transitionToGuild)(n, t.id)
                }

                function q() {
                    x(!i)
                }
                l.useEffect(() => {
                    if ((null == O ? void 0 : O.applicationId) != null) {
                        let e = K ? N.ActivityLayoutMode.PIP : N.ActivityLayoutMode.FOCUSED;
                        d.default.dispatch({
                            type: "ACTIVITY_LAYOUT_MODE_UPDATE",
                            layoutMode: e,
                            applicationId: O.applicationId
                        })
                    }
                }, [null == O ? void 0 : O.applicationId, K]);
                if (null == O || null == R || null == V && (0, E.default)(t.id)) return null;
                let Q = Array.from(O.userIds).map(e => S.default.getUser(e)).filter(e => null != e),
                    $ = {
                        instance_id: R,
                        channel_id: t.id
                    };
                return null != t.guild_id && "" !== t.guild_id && ($.guild_id = t.guild_id), (0, a.jsx)(I.default, {
                    timeout: 2e3,
                    children: e => {
                        var l, r, d, u, c, p, f, m;
                        let {
                            idle: h,
                            onActive: I,
                            onForceIdle: P
                        } = e;
                        return (0, a.jsxs)(v.default, {
                            className: o(L.root, {
                                [L.pipMode]: K,
                                [b.elevationHigh]: K,
                                [w.idle]: h && !(null === (l = O.config) || void 0 === l ? void 0 : l.useInteractivePIP),
                                [L.pipModeShort]: K && !i,
                                [L.pipModeTall]: K && i,
                                [L.hidden]: U,
                                [L.multiPIPMode]: X
                            }),
                            noBorder: !K,
                            children: [(d = I, u = P, c = h, p = z, f = Q, K && null != O && ((null == V ? void 0 : V.type) === _.ParticipantTypes.ACTIVITY || p) ? (null === (m = O.config) || void 0 === m ? void 0 : m.useInteractivePIP) ? (0, a.jsx)(A.InteractivePIPHeader, {
                                onJumpToChannel: Z,
                                applicationId: O.applicationId,
                                channel: t,
                                showControls: !c,
                                onMouseDown: d,
                                onMouseMove: d,
                                onMouseLeave: u,
                                onToggleHeight: q,
                                isExpanded: i,
                                hideExpandedButton: p
                            }) : p ? (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(A.TextActivityPIPOverlay, {
                                    idle: c,
                                    onMouseMove: d,
                                    onMouseDown: d,
                                    onMouseLeave: u,
                                    onJumpToChannel: () => {
                                        Z(), (0, g.updateActivityPanelMode)(M.ActivityPanelModes.PANEL)
                                    },
                                    channel: t,
                                    applicationId: O.applicationId,
                                    users: f
                                })
                            }) : null == V ? null : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    onMouseMove: d,
                                    onMouseDown: d,
                                    onMouseLeave: u,
                                    className: L.clickShield,
                                    onDoubleClick: Z
                                }), (0, a.jsx)(A.PIPOverlay, {
                                    idle: c,
                                    onMouseMove: d,
                                    onMouseDown: d,
                                    onMouseLeave: u,
                                    onJumpToChannel: Z,
                                    channel: t,
                                    applicationId: O.applicationId,
                                    selectedParticipant: V
                                })]
                            }) : null), n ? (0, a.jsx)(s.Spinner, {
                                className: o(L.iframe, {
                                    [L.pipModeShort]: K && !i,
                                    [L.pipModeTall]: K && i
                                })
                            }) : (0, a.jsx)(T.EmbedIFrameWithLoadingBackground, {
                                allowPopups: N.APPLICATIONS_WITH_ALLOWED_POPUPS.has(O.applicationId),
                                referrerPolicy: N.APPLICATIONS_WITH_NO_REFFERER.has(O.applicationId) ? "no-referrer" : "origin",
                                url: O.url,
                                queryParams: $,
                                className: o(L.iframe, {
                                    [L.pipModeShort]: K && !i,
                                    [L.pipModeTall]: K && i,
                                    [L.pipNonInteractive]: K && !(null === (r = O.config) || void 0 === r ? void 0 : r.useInteractivePIP)
                                }),
                                shouldRefocus: !K && F
                            }), !K && (0, a.jsx)(A.TileOverlay, {
                                participantsOpen: H,
                                showToggleParticipants: !1,
                                channelId: t.id
                            })]
                        })
                    }
                })
            }
            var D = e => {
                let {
                    channel: t,
                    ...n
                } = e, {
                    isLoading: l
                } = (0, x.useEmbeddedActivityLifecycle)(t);
                return (0, a.jsx)(O, {
                    channel: t,
                    isLoading: l,
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
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                i = n.n(l),
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
                I = n("981913"),
                P = n("576242"),
                C = n("336971"),
                S = n("109489"),
                g = n("116439"),
                y = n("42887"),
                E = n("145131"),
                T = n("256170"),
                A = n("433487"),
                x = n("811305"),
                N = n("735890"),
                M = n("49111"),
                j = n("843455"),
                _ = n("782340"),
                L = n("278121"),
                w = n("735276");

            function b(e) {
                let {
                    onClick: t,
                    isExpanded: n
                } = e;
                return (0, a.jsx)(I.default, {
                    iconClassName: i(L.arrowIcon, {
                        [L.arrowIconExpanded]: n
                    }),
                    onClick: t,
                    iconComponent: T.default,
                    label: n ? _.default.Messages.PICTURE_IN_PICTURE_COLLAPSE : _.default.Messages.PICTURE_IN_PICTURE_EXPAND
                })
            }

            function O(e) {
                var t, n;
                let {
                    channel: l,
                    applicationId: i,
                    onMouseDown: r,
                    onMouseMove: I,
                    onMouseLeave: S,
                    onJumpToChannel: T,
                    idle: A,
                    selectedParticipant: x
                } = e, _ = (0, d.useAppContext)(), b = _ === M.AppContext.POPOUT, O = (0, o.useStateFromStores)([y.default], () => y.default.isVideoEnabled()), D = (0, o.useStateFromStores)([y.default], () => Object.values(y.default.getVideoDevices())[0]), R = null === (t = null == D ? void 0 : D.disabled) || void 0 === t || t, F = !1 === R, W = (0, u.default)([i])[0], U = (0, f.default)(l), k = e => {
                    s.default.setVideoEnabled(e)
                };
                return (0, a.jsxs)("div", {
                    className: w.videoControls,
                    onMouseMove: I,
                    onMouseDown: r,
                    onMouseLeave: S,
                    children: [(0, a.jsx)("div", {
                        className: w.topControls,
                        children: (0, a.jsx)(v.PictureInPictureHeader, {
                            idle: A,
                            title: null !== (n = null == W ? void 0 : W.name) && void 0 !== n ? n : l.name,
                            onJumpToChannel: T,
                            preventIdleComponent: h.default
                        })
                    }), (0, a.jsxs)("div", {
                        className: w.bottomControls,
                        children: [(0, a.jsxs)(E.default, {
                            grow: 0,
                            shrink: 1,
                            basis: "50%",
                            align: E.default.Align.CENTER,
                            children: [(0, a.jsx)(g.default, {
                                className: L.leftPipIcon,
                                enabled: O,
                                cameraUnavailable: !F,
                                hasPermission: U,
                                onChange: k,
                                onCameraUnavailable: () => {
                                    F ? k(!0) : (0, m.default)()
                                }
                            }), (0, a.jsx)(h.default, {
                                children: (0, a.jsx)(c.default, {
                                    channelId: l.id,
                                    guildId: l.getGuildId(),
                                    className: w.leftTrayIcon,
                                    participant: x,
                                    compact: !0
                                })
                            })]
                        }), (0, a.jsxs)(E.default, {
                            grow: 0,
                            shrink: 1,
                            justify: E.default.Justify.END,
                            basis: "50%",
                            align: E.default.Align.CENTER,
                            children: [b ? null : (0, a.jsx)(C.default, {
                                className: L.rightPipIcon,
                                popoutOpen: !1,
                                onOpenPopout: () => {
                                    (0, N.default)(() => p.openChannelCallPopout(l))
                                },
                                onClosePopout: j.NOOP_NULL
                            }), (0, a.jsx)(P.default, {
                                applicationId: i,
                                channelId: l.id,
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
                    applicationId: l,
                    onMouseDown: o,
                    onMouseMove: s,
                    onMouseLeave: d,
                    onJumpToChannel: c,
                    idle: p,
                    users: f
                } = e, m = (0, u.default)([l])[0];
                return (0, a.jsxs)(r.Clickable, {
                    className: i(w.videoControls, w.videoControlsTextActivity),
                    onMouseMove: s,
                    onMouseDown: o,
                    onMouseLeave: d,
                    onDoubleClick: c,
                    children: [(0, a.jsx)("div", {
                        className: i(w.topControls),
                        children: (0, a.jsx)(v.PictureInPictureHeader, {
                            idle: p,
                            title: null !== (t = null == m ? void 0 : m.name) && void 0 !== t ? t : n.name,
                            onJumpToChannel: c,
                            preventIdleComponent: h.default
                        })
                    }), (0, a.jsxs)("div", {
                        className: w.bottomControls,
                        children: [(0, a.jsx)(x.default, {
                            renderIcon: !1,
                            users: f,
                            size: 24,
                            max: 3,
                            className: L.userSummaryContainer
                        }), (0, a.jsx)(P.default, {
                            applicationId: l,
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
                    showToggleParticipants: l
                } = e;
                return l ? (0, a.jsx)(S.default, {
                    channelId: t,
                    isParticipantsOpen: n,
                    className: L.participantsButton
                }) : null
            }

            function F(e) {
                var t;
                let {
                    onMouseDown: n,
                    onMouseMove: l,
                    onMouseLeave: o,
                    showControls: r,
                    applicationId: s,
                    channel: d,
                    onJumpToChannel: c,
                    onToggleHeight: p,
                    isExpanded: f,
                    hideExpandedButton: m
                } = e, I = (0, u.default)([s])[0];
                return (0, a.jsx)("div", {
                    className: L.pipHeader,
                    onMouseMove: l,
                    onMouseDown: n,
                    onMouseLeave: o,
                    children: (0, a.jsxs)("div", {
                        className: i(w.topControls, L.pipHeaderContent, {
                            [L.pipHeaderContentOpen]: r
                        }),
                        children: [!r && (0, a.jsx)(A.default, {
                            className: L.menuIcon,
                            width: 12,
                            height: 12
                        }), r && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(v.PictureInPictureHeader, {
                                idle: !r,
                                title: null !== (t = null == I ? void 0 : I.name) && void 0 !== t ? t : d.name,
                                onJumpToChannel: c,
                                preventIdleComponent: h.default
                            }), (0, a.jsxs)("div", {
                                className: L.pipHeaderButtonsRight,
                                children: [m ? null : (0, a.jsx)(b, {
                                    isExpanded: f,
                                    onClick: p
                                }), (0, a.jsx)(P.default, {
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
            var a = n("884691"),
                l = n("550766"),
                i = n("505259"),
                o = n("676065"),
                r = n("141962");
            let s = e => {
                let {
                    userActivity: t,
                    inActivity: n
                } = (0, i.default)(e.id), s = r.default;
                return (0, o.default)({
                    channel: e,
                    userActivity: t,
                    inActivity: n,
                    embeddedActivitiesManager: s
                }), a.useEffect(() => () => {
                    (null == t ? void 0 : t.applicationId) != null && (0, l.disconnectEmbeddedActivity)(e.id, null == t ? void 0 : t.applicationId)
                }, [e.id, null == t ? void 0 : t.applicationId]), {
                    isLoading: !n
                }
            }
        },
        788448: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                o = n("987317"),
                r = n("442939"),
                s = n("713726"),
                d = n("503417"),
                u = n("162236"),
                c = n("101125"),
                p = n("953109"),
                f = n("474571"),
                m = n("782340"),
                h = n("766855");

            function v() {
                let e = (0, l.useStateFromStores)([c.default], () => c.default.getBroadcast()),
                    t = (0, r.useGetOrFetchApplication)(null == e ? void 0 : e.applicationId);
                if (null == e) return null;
                let n = () => {
                        (0, u.openBroadcastingPrivacySettingsModal)()
                    },
                    v = () => {
                        (0, s.stopBroadcast)(), o.default.disconnect()
                    };
                return (0, a.jsxs)("div", {
                    className: h.container,
                    children: [null != t && (0, a.jsx)(p.default, {
                        game: t,
                        size: p.default.Sizes.LARGE
                    }), (0, a.jsxs)("div", {
                        className: h.content,
                        children: [(0, a.jsx)(i.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: m.default.Messages.BROADCASTING_CAPTURE_PAUSED
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: m.default.Messages.BROADCASTING_CAPTURE_PAUSED_DETAILS
                        }), (0, a.jsxs)("div", {
                            className: h.actions,
                            children: [(0, a.jsx)(i.Tooltip, {
                                text: m.default.Messages.BROADCASTING_SETTINGS,
                                children: e => (0, a.jsx)(i.Clickable, {
                                    ...e,
                                    onClick: n,
                                    children: (0, a.jsx)(f.default, {
                                        className: h.button,
                                        width: 20,
                                        height: 20
                                    })
                                })
                            }), (0, a.jsx)(i.Tooltip, {
                                text: m.default.Messages.STOP_BROADCASTING,
                                children: e => (0, a.jsx)(i.Clickable, {
                                    ...e,
                                    onClick: v,
                                    children: (0, a.jsx)(d.default, {
                                        className: h.button,
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
            var a = n("37983"),
                l = n("884691"),
                i = n("414456"),
                o = n.n(i),
                r = n("553494");
            class s extends l.PureComponent {
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
                        mirror: i,
                        paused: o,
                        component: s
                    } = this.props;
                    if (null == e) {
                        if (null == n) return null;
                        let e = l.Children.only(n);
                        return l.cloneElement(e, {
                            style: {
                                display: t && !i ? void 0 : "none"
                            },
                            ...e.props
                        })
                    }
                    return (0, a.jsx)(s, {
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
                    return (0, a.jsxs)("div", {
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
                    return er
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                i = n("414456"),
                o = n.n(i),
                r = n("627445"),
                s = n.n(r),
                d = n("917351"),
                u = n.n(d),
                c = n("446674"),
                p = n("77078"),
                f = n("629109"),
                m = n("406189"),
                h = n("54239"),
                v = n("716241"),
                I = n("754493"),
                P = n("858944"),
                C = n("191145"),
                S = n("161306"),
                g = n("836087"),
                y = n("679653"),
                E = n("374014"),
                T = n("479788"),
                A = n("430951"),
                x = n("16916"),
                N = n("383294"),
                M = n("393414"),
                j = n("908583"),
                _ = n("550410"),
                L = n("598873"),
                w = n("54727"),
                b = n("336971"),
                O = n("954519"),
                D = n("857398"),
                R = n("373469"),
                F = n("271938"),
                W = n("42887"),
                U = n("27618"),
                k = n("697218"),
                V = n("476640"),
                B = n("555035"),
                H = n("471671"),
                G = n("754775"),
                Y = n("599110"),
                J = n("387111"),
                z = n("158998"),
                K = n("788448"),
                X = n("540814"),
                Z = n("683245"),
                q = n("772442"),
                Q = n("211019"),
                $ = n("19065"),
                ee = n("977347"),
                et = n("799808"),
                en = n("49111"),
                ea = n("99795"),
                el = n("671479"),
                ei = n("678016");
            class eo extends l.PureComponent {
                get viewProperties() {
                    let {
                        participantOnScreen: e,
                        currentUserId: t,
                        channel: n
                    } = this.props, a = (0, ea.isStreamParticipant)(e), l = null != e && e.type !== ea.ParticipantTypes.ACTIVITY && e.user.id === t, i = (null == e ? void 0 : e.type) === ea.ParticipantTypes.STREAM || (null == e ? void 0 : e.type) === ea.ParticipantTypes.USER;
                    return {
                        canPopout: a && !l,
                        canSettings: a && l,
                        canStopStream: a,
                        canSeeViewers: a,
                        canSeeParticipantName: i && n.type !== en.ChannelTypes.DM,
                        canDisconnect: !a,
                        isSelf: l
                    }
                }
                get streamerPaused() {
                    let {
                        isMainWindowFocused: e,
                        activeSelfStream: t,
                        participantOnScreen: n
                    } = this.props, a = null != t && (null == n ? void 0 : n.id) === (0, E.encodeStreamKey)(t) && !e;
                    return a
                }
                get activeStreamForSelectedParticipant() {
                    let {
                        participantOnScreen: e,
                        activeStreams: t
                    } = this.props;
                    return (0, ea.isStreamParticipant)(e) ? t.find(t => (0, E.encodeStreamKey)(t) === e.id) : null
                }
                getScreenMessage() {
                    let {
                        participantOnScreen: e,
                        currentUserId: t
                    } = this.props;
                    if (!(0, ea.isStreamParticipant)(e)) return null;
                    let n = this.activeStreamForSelectedParticipant;
                    return null == n ? null : (0, A.default)(n, e.user, e.user.id === t, this.streamerPaused)
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
                    Y.default.track(en.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, {
                        video_layout: "pip",
                        ...(0, v.collectVoiceAnalyticsMetadata)(e.id)
                    })
                }
                componentWillUnmount() {
                    let {
                        channel: e
                    } = this.props;
                    Y.default.track(en.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, {
                        video_layout: C.default.getLayout(e.id),
                        ...(0, v.collectVoiceAnalyticsMetadata)(e.id)
                    })
                }
                renderStreamState() {
                    let e = this.activeStreamForSelectedParticipant,
                        {
                            participantOnScreen: t
                        } = this.props;
                    if ((null == e ? void 0 : e.state) === en.ApplicationStreamStates.ENDED) return (0, a.jsx)(Z.default, {
                        stream: e,
                        width: ea.PIP_WIDTH
                    });
                    if ((null == e ? void 0 : e.state) === en.ApplicationStreamStates.FAILED) return (0, a.jsx)(q.default, {
                        stream: e,
                        width: ea.PIP_WIDTH
                    });
                    if (this.isEmptyBroadcast()) return (0, a.jsx)(K.default, {});
                    else if ((null == t ? void 0 : t.type) === ea.ParticipantTypes.HIDDEN_STREAM) return (0, a.jsx)(Q.default, {
                        participant: t,
                        width: ea.PIP_WIDTH
                    });
                    return null
                }
                renderParticipantName() {
                    let {
                        channel: e,
                        participantOnScreen: t
                    } = this.props;
                    if ((null == t ? void 0 : t.type) === ea.ParticipantTypes.STREAM || (null == t ? void 0 : t.type) === ea.ParticipantTypes.USER) {
                        var n;
                        let l = null !== (n = J.default.getNickname(e.getGuildId(), e.id, t.user)) && void 0 !== n ? n : z.default.getName(t.user);
                        return (0, a.jsx)(p.Text, {
                            variant: "text-md/normal",
                            color: "always-white",
                            className: el.participantName,
                            lineClamp: 1,
                            children: l
                        })
                    }
                    return null
                }
                render() {
                    let {
                        channel: e,
                        streamId: t,
                        participantOnScreen: n,
                        isVideoEnabled: l
                    } = this.props, i = (0, y.computeChannelName)(e, k.default, U.default), r = this.isEmptyBroadcast(), s = (null == n ? void 0 : n.id) === F.default.getId() && l, d = this.renderStreamState(), u = null;
                    return (null == n ? void 0 : n.type) !== ea.ParticipantTypes.ACTIVITY && (null != d ? u = d : ((null == n ? void 0 : n.type) === ea.ParticipantTypes.USER || (null == n ? void 0 : n.type) === ea.ParticipantTypes.STREAM) && (u = (0, a.jsx)(X.default, {
                        paused: this.streamerPaused,
                        streamId: t,
                        component: W.default.getVideoComponent(),
                        mirror: s,
                        children: (0, a.jsx)(G.default, {
                            size: p.AvatarSizes.SIZE_80,
                            src: null == n ? void 0 : n.user.getAvatarURL(e.guild_id, 80),
                            "aria-label": null == n ? void 0 : n.user.username
                        })
                    }))), (0, a.jsx)(j.default, {
                        timeout: 1800,
                        children: e => {
                            var t;
                            return (0, a.jsx)(L.default, {
                                title: i,
                                backgroundKey: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : "",
                                screenMessage: null == d ? this.getScreenMessage() : null,
                                onJumpToChannel: this.handleJumpToChannel,
                                renderBottomLeftControls: this.renderBottomLeftControls,
                                renderBottomRightControls: this.renderBottomRightControls,
                                preventIdleComponent: _.default,
                                width: ea.PIP_WIDTH,
                                hideControls: r,
                                className: o(r ? el.emptyBroadcast : void 0, ei.elevationHigh),
                                innerClassName: r ? el.innerEmptyBroadcast : void 0,
                                ...e,
                                children: u
                            })
                        }
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        screensharePopoutOpen: !1
                    }, this._ref = l.createRef(), this.handleVideo = e => {
                        f.default.setVideoEnabled(e)
                    }, this.handleEnableVideoWhenUnavailable = () => {
                        let {
                            isVideoAvailable: e
                        } = this.props;
                        e ? this.handleVideo(!0) : (0, $.default)()
                    }, this.handleJumpToChannel = () => {
                        var e;
                        let {
                            channel: t
                        } = this.props;
                        (0, h.popAllLayers)();
                        let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : en.ME;
                        m.default.channelListScrollTo(n, t.id), (0, M.transitionToGuild)(n, t.id)
                    }, this.handleStartStream = () => {
                        let {
                            canGoLive: e,
                            channel: t
                        } = this.props, n = t.getGuildId();
                        if (s(null != n, "Cannot go live in non guild channel"), !e) return (0, ee.default)();
                        (0, et.default)(n, t.id, en.AnalyticsPages.GUILD_CHANNEL)
                    }, this.handleStopStream = () => {
                        let {
                            participantOnScreen: e,
                            isSelfBroadcasting: t
                        } = this.props;
                        s((0, ea.isStreamParticipant)(e), "cannot stop stream for non streamer"), t ? (0, P.openStopBroadcastConfirmModal)(() => (0, x.default)(e.stream)) : (0, x.default)(e.stream)
                    }, this.handleOpenPopout = () => {
                        let {
                            channel: e
                        } = this.props;
                        N.openChannelCallPopout(e)
                    }, this.renderBottomLeftControls = () => {
                        let {
                            canSeeParticipantName: e
                        } = this.viewProperties;
                        return (0, a.jsx)(a.Fragment, {
                            children: e ? this.renderParticipantName() : null
                        })
                    }, this.renderBottomRightControls = () => {
                        let {
                            canSettings: e,
                            canPopout: t,
                            canDisconnect: n,
                            canStopStream: l,
                            canSeeViewers: i
                        } = this.viewProperties;
                        return (0, a.jsxs)(a.Fragment, {
                            children: [i ? this.renderViewersIcon() : null, e ? this.renderSettingsIcon() : null, t ? this.renderPopoutIcon() : null, l ? this.renderStopStreamButton() : null, n ? this.renderDisconnectButton() : null]
                        })
                    }, this.renderDisconnectButton = () => {
                        let {
                            channel: e
                        } = this.props;
                        return (0, a.jsx)(w.default, {
                            className: el.rightTrayIcon,
                            channel: e
                        })
                    }, this.renderStopStreamButton = () => {
                        let {
                            isSelf: e
                        } = this.viewProperties;
                        return (0, a.jsx)(O.default, {
                            isSelfStream: e,
                            className: el.rightTrayIcon,
                            onClick: this.handleStopStream
                        })
                    }, this.renderViewersIcon = () => {
                        let {
                            participantOnScreen: e,
                            channel: t
                        } = this.props;
                        return s((0, ea.isStreamParticipant)(e) || (null == e ? void 0 : e.type) === ea.ParticipantTypes.ACTIVITY, "Cannot render participants for participant type ".concat(null == e ? void 0 : e.type)), (0, a.jsx)(_.default, {
                            children: (0, a.jsx)(g.default, {
                                channelId: t.id,
                                guildId: t.getGuildId(),
                                className: el.rightTrayIcon,
                                participant: e,
                                compact: !0
                            })
                        })
                    }, this.renderPopoutIcon = () => (0, a.jsx)(b.default, {
                        className: el.rightTrayIcon,
                        popoutOpen: !1,
                        onOpenPopout: this.handleOpenPopout,
                        onClosePopout: en.NOOP_NULL
                    }), this.renderSettingsIcon = () => {
                        let {
                            participantOnScreen: e,
                            activeStreams: t
                        } = this.props;
                        s((0, ea.isStreamParticipant)(e), "Cannot render settings for non stream participant");
                        let n = t.find(t => (0, E.encodeStreamKey)(t) === e.id);
                        return null == n || n.state === en.ApplicationStreamStates.ENDED ? null : (0, a.jsx)(D.default, {
                            stream: n,
                            className: el.rightTrayIcon,
                            appContext: en.AppContext.APP
                        })
                    }
                }
            }
            var er = c.default.connectStores([W.default, C.default, F.default, V.default, B.default, R.default, H.default], e => {
                let {
                    channel: t
                } = e, n = V.default.getSpeaker(t.id), a = C.default.getParticipant(t.id, n), l = u(W.default.getVideoDevices()).values().first(), i = null == l || l.disabled, o = null != a && a.type !== ea.ParticipantTypes.ACTIVITY && a.type !== ea.ParticipantTypes.HIDDEN_STREAM ? B.default.getStreamId(a.user.id, t.getGuildId(), (0, S.default)(a.type)) : null, r = !i && W.default.isVideoEnabled(), s = (0, T.default)(W.default), d = F.default.getId(), c = R.default.getCurrentUserActiveStream(), p = (0, I.isBroadcastingInChannel)(t.id);
                return {
                    channel: t,
                    streamId: o,
                    participantOnScreen: a,
                    isVideoAvailable: !1 === i,
                    isVideoEnabled: r,
                    isSelfBroadcasting: p,
                    canGoLive: s,
                    currentUserId: d,
                    activeStreams: R.default.getAllActiveStreams(),
                    activeSelfStream: c,
                    isMainWindowFocused: H.default.isFocused()
                }
            })(eo)
        },
        598873: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PictureInPictureHeader: function() {
                    return C
                },
                default: function() {
                    return S
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                i = n.n(l),
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
                I = n("782340"),
                P = n("735276");

            function C(e) {
                let {
                    title: t,
                    onJumpToChannel: n,
                    idle: l,
                    preventIdleComponent: i
                } = e, s = (0, o.useStateFromStores)([u.default], () => u.default.getChannelId()), c = null != s ? (0, a.jsx)(h.default, {
                    voiceChannelId: s,
                    idle: l
                }) : null;
                return (0, a.jsxs)(i, {
                    className: P.headerIdleContainer,
                    children: [(0, a.jsxs)(d.Clickable, {
                        className: P.headerTitle,
                        onClick: n,
                        children: [(0, a.jsx)(f.default, {
                            "aria-label": I.default.Messages.OPEN_IN_THEATER,
                            className: P.backButton,
                            width: 20,
                            height: 20
                        }), (0, a.jsx)(m.default, {
                            className: P.headerText,
                            size: m.default.Sizes.SIZE_16,
                            color: r.default.unsafe_rawColors.WHITE_500.css,
                            children: t
                        })]
                    }), c]
                })
            }

            function S(e) {
                let {
                    children: t,
                    idle: n,
                    onJumpToChannel: l,
                    backgroundKey: o,
                    onActive: r,
                    onForceIdle: d,
                    renderBottomLeftControls: u,
                    renderBottomRightControls: f,
                    screenMessage: m,
                    hideControls: h = !1,
                    className: I,
                    innerClassName: S,
                    ...g
                } = e;
                return (0, a.jsxs)("div", {
                    onMouseMove: r,
                    onMouseDown: r,
                    onMouseLeave: d,
                    className: i(P.pictureInPictureVideo, {
                        [P.idle]: n
                    }, I),
                    onDoubleClick: l,
                    children: [(0, a.jsx)(s.default, {
                        children: (0, a.jsx)(p.BackgroundTransition, {
                            className: S,
                            children: t
                        }, o)
                    }), null != m ? (0, a.jsx)(v.default, {
                        size: "small",
                        ...m
                    }) : null, !h && (0, a.jsxs)("div", {
                        className: P.videoControls,
                        children: [(0, a.jsx)("div", {
                            className: P.topControls,
                            children: (0, a.jsx)(C, {
                                idle: n,
                                onJumpToChannel: l,
                                ...g
                            })
                        }), (0, a.jsxs)("div", {
                            className: P.bottomControls,
                            children: [(0, a.jsx)(c.default, {
                                grow: 0,
                                shrink: 1,
                                basis: "50%",
                                align: c.default.Align.CENTER,
                                className: P.bottomLeftControls,
                                children: null == u ? void 0 : u()
                            }), (0, a.jsx)(c.default, {
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
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("669491"),
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
                I = n("99795"),
                P = n("782340"),
                C = n("735276");

            function S(e) {
                let {
                    closePopout: t,
                    idle: n,
                    pipWindows: i,
                    voiceChannelId: m,
                    onSelect: h
                } = e;
                n && t();
                let C = (0, l.useStateFromStores)([d.default], () => d.default.getSelfEmbeddedActivityForChannel(m)),
                    S = (0, l.useStateFromStores)([f.default], () => f.default.pipWindow),
                    g = (0, l.useStateFromStores)([c.default], () => c.default.getSelectedParticipant(m)),
                    y = (0, l.useStateFromStores)([c.default], () => c.default.getStreamParticipants(m));
                return (0, a.jsx)(o.Menu, {
                    navId: "pip-menu",
                    "aria-label": "switch PIP",
                    onClose: t,
                    onSelect: h,
                    children: (function() {
                        let e = i.find(e => e.component === v.PictureInPictureComponents.EMBED_IFRAME),
                            t = i.find(e => e.component === v.PictureInPictureComponents.VIDEO),
                            n = [];
                        return null != e && (null == S ? void 0 : S.id) !== e.id && n.push({
                            pipWindow: e
                        }), null != t && y.forEach(e => {
                            let a = p.default.getActiveStreamForApplicationStream(e.stream),
                                l = e.id === (null == g ? void 0 : g.id) && (null == S ? void 0 : S.id) === t.id;
                            null != a && !l && n.push({
                                pipWindow: t,
                                participant: e,
                                stream: a
                            })
                        }), n
                    })().map(function(e) {
                        var t;
                        let n = e.pipWindow.id,
                            l = null === (t = e.participant) || void 0 === t ? void 0 : t.id,
                            i = function(e) {
                                if (e.pipWindow.component === v.PictureInPictureComponents.EMBED_IFRAME && null != C) {
                                    var t;
                                    let e = null === (t = u.default.getApplication(C.applicationId)) || void 0 === t ? void 0 : t.name;
                                    return null == e ? P.default.Messages.SWITCH_PIP_TO_ACTIVITY : P.default.Messages.SWITCH_PIP_TO_ACTIVITY_NAME.format({
                                        activityName: e
                                    })
                                }
                                return null == e.participant || e.participant.type !== I.ParticipantTypes.STREAM ? P.default.Messages.SWITCH_PIP_TO_GO_LIVE : P.default.Messages.SWITCH_PIP_TO_USER_STREAM.format({
                                    username: e.participant.userNick
                                })
                            }(e),
                            d = "".concat(n).concat(null != l ? l : "");
                        return (0, a.jsx)(o.MenuItem, {
                            id: d,
                            label: i,
                            action: () => (function(e) {
                                (null == S ? void 0 : S.id) !== e.pipWindow.id && (0, s.switchPIPFocus)(e.pipWindow.id);
                                let t = e.participant;
                                null != t && t.type !== I.ParticipantTypes.ACTIVITY && r.default.selectParticipant(m, t.id)
                            })(e)
                        }, d)
                    })
                })
            }
            var g = function(e) {
                let {
                    voiceChannelId: t,
                    idle: n
                } = e, r = (0, l.useStateFromStores)([f.default], () => f.default.pipWindows), s = Array.from(r.values()), d = (0, l.useStateFromStoresArray)([p.default], () => p.default.getAllActiveStreamsForChannel(t)), u = d.filter(e => {
                    var n;
                    return e.ownerId !== (null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && e.channelId === t
                }), c = 1 === s.length && s[0].component === v.PictureInPictureComponents.EMBED_IFRAME || 0 === u.length, I = 1 === s.length && u.length <= 1;
                return c || I ? null : (0, a.jsx)(o.Popout, {
                    position: "bottom",
                    renderPopout: e => (0, a.jsx)(S, {
                        voiceChannelId: t,
                        pipWindows: s,
                        idle: n,
                        ...e
                    }),
                    children: e => (0, a.jsx)(o.Clickable, {
                        className: C.menuIcon,
                        ...e,
                        children: (0, a.jsx)(h.default, {
                            color: i.default.unsafe_rawColors.WHITE_500.css
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
            var a = n("37983"),
                l = n("884691"),
                i = n("446674"),
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
                I = n("550410"),
                P = n("981913"),
                C = n("49111"),
                S = n("646718"),
                g = n("782340"),
                y = n("293678");

            function E(e) {
                let {
                    className: t
                } = e;
                return (0, a.jsx)(f.default, {
                    className: t
                })
            }

            function T(e) {
                let {
                    className: t
                } = e;
                return (0, a.jsxs)(l.Fragment, {
                    children: [(0, a.jsx)(h.default, {
                        className: t,
                        mask: h.default.Masks.HEADER_BAR_BADGE,
                        children: (0, a.jsx)(E, {})
                    }), (0, a.jsx)(m.default, {
                        className: y.badgeUpgrade
                    })]
                })
            }

            function A(e) {
                let {
                    hideBadges: t = !1,
                    stream: n,
                    ...f
                } = e, m = (0, i.useStateFromStores)([p.default], () => v.default.isPremium(p.default.getCurrentUser(), S.PremiumTypes.TIER_1)), h = (0, i.useStateFromStores)([c.default], () => c.default.getChannel(null == n ? void 0 : n.channelId)), y = l.useMemo(() => null != n ? [n] : [], [n]), A = (0, r.useIsBroadcastingInChannel)(null == h ? void 0 : h.id), x = l.useCallback(() => {
                    null != h && (0, u.default)(h.getGuildId(), h.id, C.AnalyticsSections.STREAM_SETTINGS)
                }, [h]);
                if (null == n || null == h) return null;
                let N = E;
                return !t && !m && (N = T), (0, a.jsx)(o.Popout, {
                    position: "top",
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, a.jsx)(I.default, {
                            children: A ? (0, a.jsx)(s.default, {
                                onClose: t
                            }) : (0, a.jsx)(d.default, {
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
                    children: e => (0, a.jsx)(P.default, {
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
            let a, l;
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007");
            var i = n("917351"),
                o = n.n(i),
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
                if (null == a) e = null;
                else {
                    var n, i, r, s, v;
                    e = d.default.getSelectedParticipantId(a);
                    let t = c.default.getLastActiveStream(),
                        I = null != e ? d.default.getParticipant(a, e) : null;
                    if (((null == I ? void 0 : I.type) === h.ParticipantTypes.ACTIVITY || (null == I ? void 0 : I.type) === h.ParticipantTypes.USER && !(null === (n = I.voiceState) || void 0 === n ? void 0 : n.selfVideo)) && (e = null), null != t && null == e && (e = null === (i = d.default.getParticipant(a, (0, u.encodeStreamKey)(t))) || void 0 === i ? void 0 : i.id), null == e) {
                        let t = p.default.getId(),
                            n = o(d.default.getVideoParticipants(a)).filter(e => e.type === h.ParticipantTypes.USER && e.user.id !== t && !f.default.isLocalVideoDisabled(e.user.id)),
                            i = Date.now();
                        null == (e = null === (r = n.map(e => [e.user.id, m.default.getSpeakingDuration(e.user.id, i)]).filter(e => {
                            let [t, n] = e;
                            return 0 !== n
                        }).maxBy(e => {
                            let [t, n] = e;
                            return -n
                        })) || void 0 === r ? void 0 : r[0]) && (e = null != l ? l : null === (v = n.first()) || void 0 === v ? void 0 : null === (s = v.user) || void 0 === s ? void 0 : s.id)
                    }
                }
                l !== e && (l = e, t && S.emitChange())
            }
            let I = o.debounce(v, 300);

            function P() {
                return I(), !1
            }
            class C extends r.default.Store {
                initialize() {
                    this.waitFor(d.default, p.default, m.default, c.default, f.default), this.syncWith([d.default, c.default], P)
                }
                getSpeaker(e) {
                    return a !== e && (a = e, v(!1)), null != l ? l : p.default.getId()
                }
            }
            C.displayName = "VideoSpeakerStore";
            let S = new C(s.default, {
                AUDIO_SET_LOCAL_VIDEO_DISABLED: P
            });
            var g = S
        },
        276999: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BackgroundTransition: function() {
                    return m
                }
            });
            var a = n("37983"),
                l = n("884691"),
                i = n("414456"),
                o = n.n(i),
                r = n("458960"),
                s = n("862337"),
                d = n("266491"),
                u = n("145131"),
                c = n("49111"),
                p = n("758546");
            let f = {
                [c.ChannelLayouts.NORMAL]: p.normal,
                [c.ChannelLayouts.MINIMUM]: p.minimum,
                [c.ChannelLayouts.NO_CHAT]: p.noChat,
                [c.ChannelLayouts.FULL_SCREEN]: p.fullScreen
            };
            class m extends l.PureComponent {
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
                    return (0, a.jsx)(r.default.div, {
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
            class h extends l.PureComponent {
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
                    } = this.props, l = "".concat(n, "-").concat(null != t ? t : "");
                    return (0, a.jsx)(d.default, {
                        className: p.videoBackground,
                        component: "div",
                        children: (0, a.jsx)(m, {
                            children: e
                        }, l)
                    })
                }
                renderContents() {
                    let {
                        top: e,
                        center: t,
                        bottom: n,
                        layout: l,
                        focused: i
                    } = this.props, {
                        idle: r
                    } = this.state;
                    return (0, a.jsx)(u.default, {
                        className: o(p.video, f[l], {
                            [p.idle]: r
                        }),
                        direction: u.default.Direction.VERTICAL,
                        justify: u.default.Justify.CENTER,
                        children: (0, a.jsxs)(u.default, {
                            className: p.videoWrapper,
                            direction: u.default.Direction.VERTICAL,
                            children: [this.renderBackground(), (0, a.jsxs)(u.default, {
                                className: o(p.videoInner, {
                                    [p.focused]: i
                                }),
                                direction: u.default.Direction.VERTICAL,
                                justify: u.default.Justify.BETWEEN,
                                children: [(0, a.jsx)(u.default, {
                                    className: p.videoTop,
                                    grow: 0,
                                    children: e
                                }), (0, a.jsx)(u.default, {
                                    className: p.videoCenter,
                                    children: t
                                }), (0, a.jsx)(u.default, {
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
                    return (0, a.jsx)("div", {
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
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("75196");

            function i(e) {
                let {
                    width: t = 8,
                    height: n = 8,
                    color: i = "currentColor",
                    foreground: o,
                    ...r
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(r),
                    width: t,
                    height: n,
                    viewBox: "0 0 8 8",
                    fill: "none",
                    children: (0, a.jsx)("path", {
                        className: o,
                        fill: i,
                        d: "M8 3.99957L4 0 0 3.99957l1.20161 1.20149L3.1502 3.25268V8h1.6996V3.25268l1.94858 1.94838L8 3.99957z"
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=65800.e5783df1b5c507083376.js.map