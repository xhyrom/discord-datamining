(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["31243"], {
        916580: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983"),
                a = n("884691"),
                i = n("446674"),
                o = n("600965"),
                r = n("191225"),
                d = n("420444"),
                s = n("697517"),
                u = n("292687"),
                c = n("161778"),
                p = n("875268"),
                f = n("449501"),
                m = n("471671"),
                h = n("457112"),
                v = n("49111"),
                P = n("272505");
            let I = {
                [v.PictureInPictureComponents.VIDEO]: p.default,
                [v.PictureInPictureComponents.EMBED_IFRAME]: s.default
            };
            class S extends a.PureComponent {
                render() {
                    let {
                        selectedPIPWindow: e,
                        pipWindows: t,
                        maxX: n,
                        maxY: a,
                        theme: i,
                        dockedRect: o,
                        appContext: r,
                        roundCorners: d
                    } = this.props;
                    return (0, l.jsx)(h.default, {
                        pictureInPictureComponents: I,
                        selectedPIPWindow: e,
                        pipWindows: t,
                        maxX: n,
                        maxY: a,
                        dockedRect: o,
                        theme: i,
                        onWindowMove: this.handleWindowMove,
                        appContext: r,
                        roundCorners: d
                    })
                }
                constructor(...e) {
                    super(...e), this.handleWindowMove = (e, t) => {
                        o.moveTo(e, t)
                    }
                }
            }
            var C = i.default.connectStores([f.default, u.default, m.default, c.default, r.default], e => {
                let {
                    showInPopoutWindow: t = !1
                } = e, n = u.default.getWindowOpen(v.PopoutWindowKeys.CHANNEL_CALL_POPOUT), l = m.default.windowSize();
                if (n) {
                    let e = u.default.getWindow(v.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                    l = null == e ? l : {
                        width: e.innerWidth,
                        height: e.innerHeight
                    }
                }
                let a = f.default.pipWindows,
                    i = n && !t ? null : f.default.pipWindow,
                    o = r.default.getConnectedActivityChannelId(),
                    s = null != o && !(0, d.default)(o),
                    p = r.default.getActivityPanelMode(),
                    h = s && p === P.ActivityPanelModes.PANEL,
                    I = (null == i ? void 0 : i.component) !== v.PictureInPictureComponents.EMBED_IFRAME || (null == i ? void 0 : i.component) === v.PictureInPictureComponents.EMBED_IFRAME && !h;
                return {
                    selectedPIPWindow: i,
                    pipWindows: a,
                    maxX: l.width,
                    maxY: l.height,
                    theme: c.default.theme,
                    dockedRect: null != i ? f.default.getDockedRect(i.id) : null,
                    appContext: t ? v.AppContext.POPOUT : void 0,
                    roundCorners: I
                }
            })(S)
        },
        827560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("884691"),
                a = n("446674"),
                i = n("77078"),
                o = n("244201"),
                r = n("778588"),
                d = n("144747"),
                s = n("49111");

            function u() {
                let e = (0, i.useModalsStore)(e => !Object.entries(e).every(e => {
                        let [t, n] = e;
                        return 0 === n.length
                    })),
                    t = (0, a.useStateFromStores)([d.default], () => d.default.isOpen()),
                    n = (0, a.useStateFromStores)([r.default], () => r.default.hasLayers()),
                    [u, c] = l.useState(!1),
                    p = (0, o.useWindowDispatch)();
                return l.useEffect(() => {
                    function e() {
                        c(!0)
                    }

                    function t() {
                        c(!1)
                    }
                    return p.subscribe(s.ComponentActions.POPOUT_SHOW, e), p.subscribe(s.ComponentActions.POPOUT_HIDE, t), () => {
                        p.unsubscribe(s.ComponentActions.POPOUT_SHOW, e), p.unsubscribe(s.ComponentActions.POPOUT_HIDE, t)
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
            var l = n("446674"),
                a = n("271938"),
                i = n("191225");

            function o(e) {
                let t = a.default.getId(),
                    {
                        userActivity: n,
                        inActivity: o
                    } = (0, l.useStateFromStoresObject)([i.default], () => {
                        var n;
                        let l = i.default.getSelfEmbeddedActivityForChannel(e),
                            a = i.default.getEmbeddedActivitiesForChannel(e),
                            o = null === (n = a.find(e => e.application_id === (null == l ? void 0 : l.application_id))) || void 0 === n ? void 0 : n.connections,
                            r = null == o ? void 0 : o.has(t);
                        return {
                            userActivity: l,
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
            });
            var l = n("884691"),
                a = n("917351"),
                i = n("446674"),
                o = n("827560"),
                r = n("244201"),
                d = n("206230"),
                s = n("659500"),
                u = n("49111");
            let c = (0, a.debounce)(e => {
                setTimeout(() => {
                    var t;
                    null === (t = e.current) || void 0 === t || t.focus()
                }, 0)
            }, 50);

            function p(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                    a = (0, i.useStateFromStores)([d.default], () => d.default.keyboardModeEnabled),
                    p = (0, o.default)(),
                    [f, m] = l.useState(!1),
                    h = (0, r.useWindowDispatch)();
                return l.useEffect(() => {
                    if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);

                    function e() {
                        p && (h.dispatch(u.ComponentActions.POPOUT_CLOSE), s.ComponentDispatch.dispatch(u.ComponentActions.CONTEXT_MENU_CLOSE))
                    }
                }, [n, p, t, h]), l.useEffect(() => {
                    var l, i, o;
                    if (a || !f || !t) return;
                    let r = p;

                    function d(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null == n || "BUTTON" === n.tagName) && !r && c(e)
                        }, 100)
                    }
                    return null === (l = e.current) || void 0 === l || l.addEventListener("focusout", d), (null === (i = n.document.activeElement) || void 0 === i ? void 0 : i.tagName) !== "IFRAME" && !r && (null === (o = e.current) || void 0 === o || o.focus()), () => {
                        var t;
                        null === (t = e.current) || void 0 === t || t.removeEventListener("focusout", d), r = !0
                    }
                }, [t, f, a, e, n, p]), m
            }
        },
        676065: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("884691"),
                a = n("550766");

            function i(e) {
                let {
                    channel: t,
                    userActivity: n,
                    inActivity: i,
                    embeddedActivitiesManager: o
                } = e;
                l.useEffect(() => {
                    !i && (0, a.launchEmbeddedActivity)(t.id)
                }, [null == n ? void 0 : n.application_id, t.id, i, o])
            }
        },
        828466: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            let l = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];

            function a(e) {
                let {
                    allowPopups: t
                } = e, n = l;
                return t && (n = [...l, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" ")
            }
        },
        817477: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EmbedIFrameWithLoadingBackground: function() {
                    return C
                }
            });
            var l = n("37983"),
                a = n("884691"),
                i = n("414456"),
                o = n.n(i),
                r = n("841076"),
                d = n("748820"),
                s = n("446674"),
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
                    style: i,
                    onLoad: o,
                    shouldRefocus: I,
                    queryParams: S,
                    allowPopups: C = !1,
                    referrerPolicy: g = "origin"
                } = e, T = (0, s.useStateFromStores)([u.default], () => u.default.getWindow(P.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), E = (0, r.useMemoOne)(() => (0, d.v4)(), [t]), y = a.useRef(null), A = (0, m.default)(y, I, null == T ? window : T), x = {
                    ...S,
                    frame_id: E,
                    platform: v.ActivityPlatform.DESKTOP
                }, [_, N] = a.useState(!1), M = p.default.theme, j = {
                    ...i
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
                    N(t)
                }), _ && (j.pointerEvents = "none"), null != t ? (0, l.jsx)("iframe", {
                    style: j,
                    allow: "autoplay; encrypted-media",
                    referrerPolicy: g,
                    onLoad: function(e) {
                        var n;
                        null == o || o(e.target), y.current = e.target, A(!0), null === (n = e.target.contentWindow) || void 0 === n || n.postMessage([c.default.HELLO, x], null != t ? t : "")
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
                } = e, [n, i] = a.useState(!1), r = a.useCallback(e => {
                    i(!0), null == t || t(e)
                }, [t]);
                return (0, l.jsxs)("div", {
                    className: I.fillParent,
                    children: [!n && (0, l.jsx)("div", {
                        className: o(I.fillParent, I.iframePlaceholder)
                    }), (0, l.jsx)("div", {
                        className: o(I.fillParent, n ? void 0 : I.hiddenIframeContainer),
                        children: (0, l.jsx)(S, {
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
            });
            var l = n("37983"),
                a = n("884691"),
                i = n("414456"),
                o = n.n(i),
                r = n("446674"),
                d = n("77078"),
                s = n("913144"),
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
                T = n("191225"),
                E = n("420444"),
                y = n("817477"),
                A = n("386568"),
                x = n("965135"),
                _ = n("954016"),
                N = n("272505"),
                M = n("49111"),
                j = n("99795"),
                b = n("844638"),
                O = n("374142");

            function w(e) {
                let {
                    channel: t,
                    isLoading: n
                } = e, [i, x] = a.useState(!1), w = (0, r.useStateFromStores)([T.default], () => T.default.getSelfEmbeddedActivityForChannel(t.id)), D = (0, r.useStateFromStores)([T.default], () => T.default.getActivityPanelMode()), L = null == w ? void 0 : w.activity_id, R = (0, r.useStateFromStores)([S.default], () => S.default.getChannelId() === t.id), {
                    dockedRect: F,
                    isHidden: U
                } = (0, r.useStateFromStoresObject)([I.default], () => {
                    let e = I.default.pipWindow;
                    return {
                        dockedRect: null != e ? I.default.getDockedRect(e.id) : null,
                        isHidden: I.default.isEmbeddedActivityHidden()
                    }
                }), W = (0, r.useStateFromStores)([m.default], () => m.default.getWindow(M.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), {
                    activityParticipant: k,
                    selectedParticipant: B,
                    participantsOpen: H
                } = (0, r.useStateFromStoresObject)([f.default], () => ({
                    activityParticipant: null != w ? f.default.getParticipant(t.id, w.application_id) : null,
                    selectedParticipant: f.default.getSelectedParticipant(t.id),
                    participantsOpen: f.default.getParticipantsOpen(t.id)
                })), V = R || null != W, G = (0, E.default)(t.id), Y = G && (null == B ? void 0 : B.type) !== j.ParticipantTypes.ACTIVITY, J = !G && D === N.ActivityPanelModes.PIP, z = V && (Y || J) && null == F, K = (!V || z) && !U;

                function X() {
                    var e;
                    if (null != w && u.default.selectParticipant(t.id, w.application_id), null != W) return;
                    (0, p.popAllLayers)();
                    let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : M.ME;
                    c.default.channelListScrollTo(n, t.id), (0, h.transitionToGuild)(n, t.id)
                }

                function Z() {
                    x(!i)
                }
                a.useEffect(() => {
                    if ((null == w ? void 0 : w.application_id) != null) {
                        let e = K ? _.ActivityLayoutMode.PIP : _.ActivityLayoutMode.FOCUSED;
                        s.default.dispatch({
                            type: "ACTIVITY_LAYOUT_MODE_UPDATE",
                            layoutMode: e,
                            applicationId: w.application_id
                        })
                    }
                }, [null == w ? void 0 : w.application_id, K]);
                if (null == w || null == L || null == k && (0, E.default)(t.id)) return null;
                let q = Array.from(w.connections.values()).map(e => C.default.getUser(e.user_id)).filter(e => null != e),
                    Q = {
                        instance_id: L,
                        channel_id: t.id
                    };
                return null != t.guild_id && "" !== t.guild_id && (Q.guild_id = t.guild_id), (0, l.jsx)(P.default, {
                    timeout: 2e3,
                    children: e => {
                        var a, r, s, u, c, p, f, m;
                        let {
                            idle: h,
                            onActive: P,
                            onForceIdle: I
                        } = e;
                        return (0, l.jsxs)(v.default, {
                            className: o(b.root, {
                                [b.pipMode]: K,
                                [O.idle]: h && !(null === (a = w.config) || void 0 === a ? void 0 : a.useInteractivePIP),
                                [b.pipModeShort]: K && !i,
                                [b.pipModeTall]: K && i,
                                [b.hidden]: U
                            }),
                            noBorder: !K,
                            children: [(s = P, u = I, c = h, p = J, f = q, K && null != w && ((null == k ? void 0 : k.type) === j.ParticipantTypes.ACTIVITY || p) ? (null === (m = w.config) || void 0 === m ? void 0 : m.useInteractivePIP) ? (0, l.jsx)(A.InteractivePIPHeader, {
                                onJumpToChannel: X,
                                applicationId: w.application_id,
                                channel: t,
                                showControls: !c,
                                onMouseDown: s,
                                onMouseMove: s,
                                onMouseLeave: u,
                                onToggleHeight: Z,
                                isExpanded: i,
                                hideExpandedButton: p
                            }) : p ? (0, l.jsx)(l.Fragment, {
                                children: (0, l.jsx)(A.TextActivityPIPOverlay, {
                                    idle: c,
                                    onMouseMove: s,
                                    onMouseDown: s,
                                    onMouseLeave: u,
                                    onJumpToChannel: () => {
                                        X(), (0, g.updateActivityPanelMode)(N.ActivityPanelModes.PANEL)
                                    },
                                    channel: t,
                                    applicationId: w.application_id,
                                    users: f
                                })
                            }) : null == k ? null : (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)("div", {
                                    onMouseMove: s,
                                    onMouseDown: s,
                                    onMouseLeave: u,
                                    className: b.clickShield,
                                    onDoubleClick: X
                                }), (0, l.jsx)(A.PIPOverlay, {
                                    idle: c,
                                    onMouseMove: s,
                                    onMouseDown: s,
                                    onMouseLeave: u,
                                    onJumpToChannel: X,
                                    channel: t,
                                    applicationId: w.application_id,
                                    selectedParticipant: k
                                })]
                            }) : null), n ? (0, l.jsx)(d.Spinner, {
                                className: o(b.iframe, {
                                    [b.pipModeShort]: K && !i,
                                    [b.pipModeTall]: K && i
                                })
                            }) : (0, l.jsx)(y.EmbedIFrameWithLoadingBackground, {
                                allowPopups: _.APPLICATIONS_WITH_ALLOWED_POPUPS.has(w.application_id),
                                referrerPolicy: _.APPLICATIONS_WITH_NO_REFFERER.has(w.application_id) ? "no-referrer" : "origin",
                                url: w.url,
                                queryParams: Q,
                                className: o(b.iframe, {
                                    [b.pipModeShort]: K && !i,
                                    [b.pipModeTall]: K && i,
                                    [b.pipNonInteractive]: K && !(null === (r = w.config) || void 0 === r ? void 0 : r.useInteractivePIP)
                                }),
                                shouldRefocus: !K && R
                            }), !K && (0, l.jsx)(A.TileOverlay, {
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
                    isLoading: a
                } = (0, x.useEmbeddedActivityLifecycle)(t);
                return (0, l.jsx)(w, {
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
                    return D
                },
                TextActivityPIPOverlay: function() {
                    return L
                },
                TileOverlay: function() {
                    return R
                },
                InteractivePIPHeader: function() {
                    return F
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                i = n.n(a),
                o = n("446674"),
                r = n("77078"),
                d = n("629109"),
                s = n("244201"),
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
                T = n("42887"),
                E = n("145131"),
                y = n("256170"),
                A = n("433487"),
                x = n("811305"),
                _ = n("735890"),
                N = n("49111"),
                M = n("843455"),
                j = n("782340"),
                b = n("163933"),
                O = n("374142");

            function w(e) {
                let {
                    onClick: t,
                    isExpanded: n
                } = e;
                return (0, l.jsx)(P.default, {
                    iconClassName: i(b.arrowIcon, {
                        [b.arrowIconExpanded]: n
                    }),
                    onClick: t,
                    iconComponent: y.default,
                    label: n ? j.default.Messages.PICTURE_IN_PICTURE_COLLAPSE : j.default.Messages.PICTURE_IN_PICTURE_EXPAND
                })
            }

            function D(e) {
                var t, n;
                let {
                    channel: a,
                    applicationId: i,
                    onMouseDown: r,
                    onMouseMove: P,
                    onMouseLeave: C,
                    onJumpToChannel: y,
                    idle: A,
                    selectedParticipant: x
                } = e, j = (0, s.useAppContext)(), w = j === N.AppContext.POPOUT, D = (0, o.useStateFromStores)([T.default], () => T.default.isVideoEnabled()), L = (0, o.useStateFromStores)([T.default], () => Object.values(T.default.getVideoDevices())[0]), R = null === (t = null == L ? void 0 : L.disabled) || void 0 === t || t, F = !1 === R, U = (0, u.default)([i])[0], W = (0, f.default)(a), k = e => {
                    d.default.setVideoEnabled(e)
                };
                return (0, l.jsxs)("div", {
                    className: O.videoControls,
                    onMouseMove: P,
                    onMouseDown: r,
                    onMouseLeave: C,
                    children: [(0, l.jsx)("div", {
                        className: O.topControls,
                        children: (0, l.jsx)(v.PictureInPictureHeader, {
                            idle: A,
                            title: null !== (n = null == U ? void 0 : U.name) && void 0 !== n ? n : a.name,
                            onJumpToChannel: y,
                            preventIdleComponent: h.default
                        })
                    }), (0, l.jsxs)("div", {
                        className: O.bottomControls,
                        children: [(0, l.jsxs)(E.default, {
                            grow: 0,
                            shrink: 1,
                            basis: "50%",
                            align: E.default.Align.CENTER,
                            children: [(0, l.jsx)(g.default, {
                                className: b.leftPipIcon,
                                enabled: D,
                                cameraUnavailable: !F,
                                hasPermission: W,
                                onChange: k,
                                onCameraUnavailable: () => {
                                    F ? k(!0) : (0, m.default)()
                                }
                            }), (0, l.jsx)(h.default, {
                                children: (0, l.jsx)(c.default, {
                                    channelId: a.id,
                                    guildId: a.getGuildId(),
                                    className: O.leftTrayIcon,
                                    participant: x,
                                    compact: !0
                                })
                            })]
                        }), (0, l.jsxs)(E.default, {
                            grow: 0,
                            shrink: 1,
                            justify: E.default.Justify.END,
                            basis: "50%",
                            align: E.default.Align.CENTER,
                            children: [w ? null : (0, l.jsx)(S.default, {
                                className: b.rightPipIcon,
                                popoutOpen: !1,
                                onOpenPopout: () => {
                                    (0, _.default)(() => p.openChannelCallPopout(a))
                                },
                                onClosePopout: M.NOOP_NULL
                            }), (0, l.jsx)(I.default, {
                                applicationId: i,
                                channelId: a.id,
                                className: b.rightPipIcon
                            })]
                        })]
                    })]
                })
            }

            function L(e) {
                var t;
                let {
                    channel: n,
                    applicationId: a,
                    onMouseDown: o,
                    onMouseMove: d,
                    onMouseLeave: s,
                    onJumpToChannel: c,
                    idle: p,
                    users: f
                } = e, m = (0, u.default)([a])[0];
                return (0, l.jsxs)(r.Clickable, {
                    className: i(O.videoControls, O.videoControlsTextActivity),
                    onMouseMove: d,
                    onMouseDown: o,
                    onMouseLeave: s,
                    children: [(0, l.jsx)("div", {
                        className: i(O.topControls),
                        children: (0, l.jsx)(v.PictureInPictureHeader, {
                            idle: p,
                            title: null !== (t = null == m ? void 0 : m.name) && void 0 !== t ? t : n.name,
                            onJumpToChannel: c,
                            preventIdleComponent: h.default
                        })
                    }), (0, l.jsxs)("div", {
                        className: O.bottomControls,
                        children: [(0, l.jsx)(x.default, {
                            renderIcon: !1,
                            users: f,
                            size: 24,
                            max: 3,
                            className: b.userSummaryContainer
                        }), (0, l.jsx)(I.default, {
                            applicationId: a,
                            channelId: n.id,
                            iconClassName: b.leaveActivityIcon,
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
                return a ? (0, l.jsx)(C.default, {
                    channelId: t,
                    isParticipantsOpen: n,
                    className: b.participantsButton
                }) : null
            }

            function F(e) {
                var t;
                let {
                    onMouseDown: n,
                    onMouseMove: a,
                    onMouseLeave: o,
                    showControls: r,
                    applicationId: d,
                    channel: s,
                    onJumpToChannel: c,
                    onToggleHeight: p,
                    isExpanded: f,
                    hideExpandedButton: m
                } = e, P = (0, u.default)([d])[0];
                return (0, l.jsx)("div", {
                    className: b.pipHeader,
                    onMouseMove: a,
                    onMouseDown: n,
                    onMouseLeave: o,
                    children: (0, l.jsxs)("div", {
                        className: i(O.topControls, b.pipHeaderContent, {
                            [b.pipHeaderContentOpen]: r
                        }),
                        children: [!r && (0, l.jsx)(A.default, {
                            className: b.menuIcon,
                            width: 12,
                            height: 12
                        }), r && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(v.PictureInPictureHeader, {
                                idle: !r,
                                title: null !== (t = null == P ? void 0 : P.name) && void 0 !== t ? t : s.name,
                                onJumpToChannel: c,
                                preventIdleComponent: h.default
                            }), (0, l.jsxs)("div", {
                                className: b.pipHeaderButtonsRight,
                                children: [m ? null : (0, l.jsx)(w, {
                                    isExpanded: f,
                                    onClick: p
                                }), (0, l.jsx)(I.default, {
                                    applicationId: d,
                                    channelId: s.id,
                                    iconClassName: b.leaveActivityIcon
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
                    return d
                }
            });
            var l = n("884691"),
                a = n("550766"),
                i = n("505259"),
                o = n("676065"),
                r = n("141962");
            let d = e => {
                let {
                    userActivity: t,
                    inActivity: n
                } = (0, i.default)(e.id), d = r.default;
                return (0, o.default)({
                    channel: e,
                    userActivity: t,
                    inActivity: n,
                    embeddedActivitiesManager: d
                }), l.useEffect(() => () => {
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
                    return v
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                i = n("77078"),
                o = n("987317"),
                r = n("713726"),
                d = n("503417"),
                s = n("162236"),
                u = n("546463"),
                c = n("101125"),
                p = n("953109"),
                f = n("474571"),
                m = n("782340"),
                h = n("124705");

            function v() {
                let e = (0, a.useStateFromStores)([c.default], () => c.default.getBroadcast()),
                    t = (0, a.useStateFromStores)([u.default], () => null != e ? u.default.getDetectableGame(e.applicationId) : null);
                if (null == e) return null;
                let n = () => {
                        (0, s.openBroadcastingPrivacySettingsModal)()
                    },
                    v = () => {
                        (0, r.stopBroadcast)(), o.default.disconnect()
                    };
                return (0, l.jsxs)("div", {
                    className: h.container,
                    children: [null != t && (0, l.jsx)(p.default, {
                        game: t,
                        size: p.default.Sizes.LARGE
                    }), (0, l.jsxs)("div", {
                        className: h.content,
                        children: [(0, l.jsx)(i.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: m.default.Messages.BROADCASTING_CAPTURE_PAUSED
                        }), (0, l.jsx)(i.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: m.default.Messages.BROADCASTING_CAPTURE_PAUSED_DETAILS
                        }), (0, l.jsxs)("div", {
                            className: h.actions,
                            children: [(0, l.jsx)(i.Tooltip, {
                                text: m.default.Messages.BROADCASTING_SETTINGS,
                                children: e => (0, l.jsx)(i.Clickable, {
                                    ...e,
                                    onClick: n,
                                    children: (0, l.jsx)(f.default, {
                                        className: h.button,
                                        width: 20,
                                        height: 20
                                    })
                                })
                            }), (0, l.jsx)(i.Tooltip, {
                                text: m.default.Messages.STOP_BROADCASTING,
                                children: e => (0, l.jsx)(i.Clickable, {
                                    ...e,
                                    onClick: v,
                                    children: (0, l.jsx)(d.default, {
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
                    return s
                }
            });
            var l = n("37983"),
                a = n("884691"),
                i = n("414456"),
                o = n.n(i),
                r = n("764230");
            class d extends a.PureComponent {
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
                        component: d
                    } = this.props;
                    if (null == e) {
                        if (null == n) return null;
                        let e = a.Children.only(n);
                        return a.cloneElement(e, {
                            style: {
                                display: t && !i ? void 0 : "none"
                            },
                            ...e.props
                        })
                    }
                    return (0, l.jsx)(d, {
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
                    return (0, l.jsxs)("div", {
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
            d.defaultProps = {
                paused: !0
            };
            var s = d
        },
        875268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ea
                }
            });
            var l = n("37983"),
                a = n("884691"),
                i = n("627445"),
                o = n.n(i),
                r = n("917351"),
                d = n.n(r),
                s = n("446674"),
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
                T = n("479788"),
                E = n("430951"),
                y = n("16916"),
                A = n("383294"),
                x = n("393414"),
                _ = n("908583"),
                N = n("550410"),
                M = n("598873"),
                j = n("54727"),
                b = n("336971"),
                O = n("954519"),
                w = n("857398"),
                D = n("373469"),
                L = n("271938"),
                R = n("42887"),
                F = n("27618"),
                U = n("697218"),
                W = n("476640"),
                k = n("555035"),
                B = n("471671"),
                H = n("754775"),
                V = n("599110"),
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
            class el extends a.PureComponent {
                get viewProperties() {
                    let {
                        participantOnScreen: e,
                        currentUserId: t,
                        channel: n
                    } = this.props, l = (0, et.isStreamParticipant)(e), a = null != e && e.type !== et.ParticipantTypes.ACTIVITY && e.user.id === t, i = (null == e ? void 0 : e.type) === et.ParticipantTypes.STREAM || (null == e ? void 0 : e.type) === et.ParticipantTypes.USER;
                    return {
                        canPopout: l && !a,
                        canSettings: l && a,
                        canStopStream: l,
                        canSeeViewers: l,
                        canSeeParticipantName: i && n.type !== ee.ChannelTypes.DM,
                        canDisconnect: !l,
                        isSelf: a
                    }
                }
                get streamerPaused() {
                    let {
                        isMainWindowFocused: e,
                        activeSelfStream: t,
                        participantOnScreen: n
                    } = this.props, l = null != t && (null == n ? void 0 : n.id) === (0, g.encodeStreamKey)(t) && !e;
                    return l
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
                    V.default.track(ee.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, {
                        video_layout: "pip",
                        ...(0, m.collectVoiceAnalyticsMetadata)(e.id)
                    })
                }
                componentWillUnmount() {
                    let {
                        channel: e
                    } = this.props;
                    V.default.track(ee.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, {
                        video_layout: P.default.getLayout(e.id),
                        ...(0, m.collectVoiceAnalyticsMetadata)(e.id)
                    })
                }
                renderStreamState() {
                    let e = this.activeStreamForSelectedParticipant,
                        {
                            participantOnScreen: t
                        } = this.props;
                    if ((null == e ? void 0 : e.state) === ee.ApplicationStreamStates.ENDED) return (0, l.jsx)(K.default, {
                        stream: e,
                        width: et.PIP_WIDTH
                    });
                    if ((null == e ? void 0 : e.state) === ee.ApplicationStreamStates.FAILED) return (0, l.jsx)(X.default, {
                        stream: e,
                        width: et.PIP_WIDTH
                    });
                    if (this.isEmptyBroadcast()) return (0, l.jsx)(J.default, {});
                    else if ((null == t ? void 0 : t.type) === et.ParticipantTypes.HIDDEN_STREAM) return (0, l.jsx)(Z.default, {
                        participant: t,
                        width: et.PIP_WIDTH
                    });
                    return null
                }
                renderParticipantName() {
                    var e;
                    let {
                        channel: t,
                        participantOnScreen: n
                    } = this.props;
                    if ((null == n ? void 0 : n.type) === et.ParticipantTypes.STREAM || (null == n ? void 0 : n.type) === et.ParticipantTypes.USER) {
                        let a = null !== (e = G.default.getNickname(t.getGuildId(), t.id, n.user)) && void 0 !== e ? e : Y.default.getName(n.user);
                        return (0, l.jsx)(u.Text, {
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
                    var e;
                    let {
                        channel: t,
                        streamId: n,
                        participantOnScreen: a,
                        isVideoEnabled: i
                    } = this.props, o = (0, C.computeChannelName)(t, U.default, F.default), r = this.isEmptyBroadcast(), d = (null == a ? void 0 : a.id) === L.default.getId() && i, s = this.renderStreamState(), c = null;
                    return (null == a ? void 0 : a.type) !== et.ParticipantTypes.ACTIVITY && (null != s ? c = s : ((null == a ? void 0 : a.type) === et.ParticipantTypes.USER || (null == a ? void 0 : a.type) === et.ParticipantTypes.STREAM) && (c = (0, l.jsx)(z.default, {
                        paused: this.streamerPaused,
                        streamId: n,
                        component: R.default.getVideoComponent(),
                        mirror: d,
                        children: (0, l.jsx)(H.default, {
                            size: u.AvatarSizes.SIZE_80,
                            src: null == a ? void 0 : a.user.getAvatarURL(t.guild_id, 80),
                            "aria-label": null == a ? void 0 : a.user.username
                        })
                    }))), (0, l.jsx)(_.default, {
                        timeout: 1800,
                        children: t => (0, l.jsx)(M.default, {
                            title: o,
                            backgroundKey: null !== (e = null == a ? void 0 : a.id) && void 0 !== e ? e : "",
                            screenMessage: null == s ? this.getScreenMessage() : null,
                            onJumpToChannel: this.handleJumpToChannel,
                            renderBottomLeftControls: this.renderBottomLeftControls,
                            renderBottomRightControls: this.renderBottomRightControls,
                            preventIdleComponent: N.default,
                            width: et.PIP_WIDTH,
                            hideControls: r,
                            className: r ? en.emptyBroadcast : void 0,
                            innerClassName: r ? en.innerEmptyBroadcast : void 0,
                            ...t,
                            children: c
                        })
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
                        o((0, et.isStreamParticipant)(e), "cannot stop stream for non streamer"), t ? (0, v.openStopBroadcastConfirmModal)(() => (0, y.default)(e.stream)) : (0, y.default)(e.stream)
                    }, this.handleOpenPopout = () => {
                        let {
                            channel: e
                        } = this.props;
                        A.openChannelCallPopout(e)
                    }, this.renderBottomLeftControls = () => {
                        let {
                            canSeeParticipantName: e
                        } = this.viewProperties;
                        return (0, l.jsx)(l.Fragment, {
                            children: e ? this.renderParticipantName() : null
                        })
                    }, this.renderBottomRightControls = () => {
                        let {
                            canSettings: e,
                            canPopout: t,
                            canDisconnect: n,
                            canStopStream: a,
                            canSeeViewers: i
                        } = this.viewProperties;
                        return (0, l.jsxs)(l.Fragment, {
                            children: [i ? this.renderViewersIcon() : null, e ? this.renderSettingsIcon() : null, t ? this.renderPopoutIcon() : null, a ? this.renderStopStreamButton() : null, n ? this.renderDisconnectButton() : null]
                        })
                    }, this.renderDisconnectButton = () => {
                        let {
                            channel: e
                        } = this.props;
                        return (0, l.jsx)(j.default, {
                            className: en.rightTrayIcon,
                            channel: e
                        })
                    }, this.renderStopStreamButton = () => {
                        let {
                            isSelf: e
                        } = this.viewProperties;
                        return (0, l.jsx)(O.default, {
                            isSelfStream: e,
                            className: en.rightTrayIcon,
                            onClick: this.handleStopStream
                        })
                    }, this.renderViewersIcon = () => {
                        let {
                            participantOnScreen: e,
                            channel: t
                        } = this.props;
                        return o((0, et.isStreamParticipant)(e) || (null == e ? void 0 : e.type) === et.ParticipantTypes.ACTIVITY, "Cannot render participants for participant type ".concat(null == e ? void 0 : e.type)), (0, l.jsx)(N.default, {
                            children: (0, l.jsx)(S.default, {
                                channelId: t.id,
                                guildId: t.getGuildId(),
                                className: en.rightTrayIcon,
                                participant: e,
                                compact: !0
                            })
                        })
                    }, this.renderPopoutIcon = () => (0, l.jsx)(b.default, {
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
                        return null == n || n.state === ee.ApplicationStreamStates.ENDED ? null : (0, l.jsx)(w.default, {
                            stream: n,
                            className: en.rightTrayIcon,
                            appContext: ee.AppContext.APP
                        })
                    }
                }
            }
            var ea = s.default.connectStores([R.default, P.default, L.default, W.default, k.default, D.default, B.default], e => {
                let {
                    channel: t
                } = e, n = W.default.getSpeaker(t.id), l = P.default.getParticipant(t.id, n), a = d(R.default.getVideoDevices()).values().first(), i = null == a || a.disabled, o = null != l && l.type !== et.ParticipantTypes.ACTIVITY && l.type !== et.ParticipantTypes.HIDDEN_STREAM ? k.default.getStreamId(l.user.id, t.getGuildId(), (0, I.default)(l.type)) : null, r = !i && R.default.isVideoEnabled(), s = (0, T.default)(R.default), u = L.default.getId(), c = D.default.getCurrentUserActiveStream(), p = (0, h.isBroadcastingInChannel)(t.id);
                return {
                    channel: t,
                    streamId: o,
                    participantOnScreen: l,
                    isVideoAvailable: !1 === i,
                    isVideoEnabled: r,
                    isSelfBroadcasting: p,
                    canGoLive: s,
                    currentUserId: u,
                    activeStreams: D.default.getAllActiveStreams(),
                    activeSelfStream: c,
                    isMainWindowFocused: B.default.isFocused()
                }
            })(el)
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
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                i = n.n(a),
                o = n("446674"),
                r = n("669491"),
                d = n("266491"),
                s = n("77078"),
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
                    preventIdleComponent: i
                } = e, d = (0, o.useStateFromStores)([u.default], () => u.default.getChannelId()), c = null != d ? (0, l.jsx)(h.default, {
                    voiceChannelId: d,
                    idle: a
                }) : null;
                return (0, l.jsxs)(i, {
                    className: I.headerIdleContainer,
                    children: [(0, l.jsxs)(s.Clickable, {
                        className: I.headerTitle,
                        onClick: n,
                        children: [(0, l.jsx)(f.default, {
                            "aria-label": P.default.Messages.OPEN_IN_THEATER,
                            className: I.backButton,
                            width: 20,
                            height: 20
                        }), (0, l.jsx)(m.default, {
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
                    onForceIdle: s,
                    renderBottomLeftControls: u,
                    renderBottomRightControls: f,
                    screenMessage: m,
                    hideControls: h = !1,
                    className: P,
                    innerClassName: C,
                    ...g
                } = e;
                return (0, l.jsxs)("div", {
                    onMouseMove: r,
                    onMouseDown: r,
                    onMouseLeave: s,
                    className: i(I.pictureInPictureVideo, {
                        [I.idle]: n
                    }, P),
                    onDoubleClick: a,
                    children: [(0, l.jsx)(d.default, {
                        children: (0, l.jsx)(p.BackgroundTransition, {
                            className: C,
                            children: t
                        }, o)
                    }), null != m ? (0, l.jsx)(v.default, {
                        size: "small",
                        ...m
                    }) : null, !h && (0, l.jsxs)("div", {
                        className: I.videoControls,
                        children: [(0, l.jsx)("div", {
                            className: I.topControls,
                            children: (0, l.jsx)(S, {
                                idle: n,
                                onJumpToChannel: a,
                                ...g
                            })
                        }), (0, l.jsxs)("div", {
                            className: I.bottomControls,
                            children: [(0, l.jsx)(c.default, {
                                grow: 0,
                                shrink: 1,
                                basis: "50%",
                                align: c.default.Align.CENTER,
                                className: I.bottomLeftControls,
                                children: null == u ? void 0 : u()
                            }), (0, l.jsx)(c.default, {
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
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                i = n("669491"),
                o = n("77078"),
                r = n("255397"),
                d = n("600965"),
                s = n("191225"),
                u = n("191145"),
                c = n("373469"),
                p = n("546463"),
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
                    pipWindows: i,
                    voiceChannelId: m,
                    onSelect: h
                } = e;
                n && t();
                let S = (0, a.useStateFromStores)([s.default], () => s.default.getSelfEmbeddedActivityForChannel(m)),
                    C = (0, a.useStateFromStores)([f.default], () => f.default.pipWindow),
                    g = (0, a.useStateFromStores)([u.default], () => u.default.getSelectedParticipant(m)),
                    T = (0, a.useStateFromStores)([u.default], () => u.default.getStreamParticipants(m));
                return (0, l.jsx)(o.Menu, {
                    navId: "pip-menu",
                    "aria-label": "switch PIP",
                    onClose: t,
                    onSelect: h,
                    children: (function() {
                        let e = i.find(e => e.component === v.PictureInPictureComponents.EMBED_IFRAME),
                            t = i.find(e => e.component === v.PictureInPictureComponents.VIDEO),
                            n = [];
                        return null != e && (null == C ? void 0 : C.id) !== e.id && n.push({
                            pipWindow: e
                        }), null != t && T.forEach(e => {
                            let l = c.default.getActiveStreamForApplicationStream(e.stream),
                                a = e.id === (null == g ? void 0 : g.id) && (null == C ? void 0 : C.id) === t.id;
                            null != l && !a && n.push({
                                pipWindow: t,
                                participant: e,
                                stream: l
                            })
                        }), n
                    })().map(function(e) {
                        var t;
                        let n = e.pipWindow.id,
                            a = null === (t = e.participant) || void 0 === t ? void 0 : t.id,
                            i = function(e) {
                                if (e.pipWindow.component === v.PictureInPictureComponents.EMBED_IFRAME && null != S) {
                                    var t;
                                    let e = null === (t = p.default.getGame(S.application_id)) || void 0 === t ? void 0 : t.name;
                                    return null == e ? I.default.Messages.SWITCH_PIP_TO_ACTIVITY : I.default.Messages.SWITCH_PIP_TO_ACTIVITY_NAME.format({
                                        activityName: e
                                    })
                                }
                                return null == e.participant || e.participant.type !== P.ParticipantTypes.STREAM ? I.default.Messages.SWITCH_PIP_TO_GO_LIVE : I.default.Messages.SWITCH_PIP_TO_USER_STREAM.format({
                                    username: e.participant.userNick
                                })
                            }(e),
                            s = "".concat(n).concat(null != a ? a : "");
                        return (0, l.jsx)(o.MenuItem, {
                            id: s,
                            label: i,
                            action: () => (function(e) {
                                (null == C ? void 0 : C.id) !== e.pipWindow.id && (0, d.switchPIPFocus)(e.pipWindow.id);
                                let t = e.participant;
                                null != t && t.type !== P.ParticipantTypes.ACTIVITY && r.default.selectParticipant(m, t.id)
                            })(e)
                        }, s)
                    })
                })
            }
            var g = function(e) {
                let {
                    voiceChannelId: t,
                    idle: n
                } = e, r = (0, a.useStateFromStores)([f.default], () => f.default.pipWindows), d = Array.from(r.values()), s = (0, a.useStateFromStoresArray)([c.default], () => c.default.getAllActiveStreamsForChannel(t)), u = s.filter(e => {
                    var n;
                    return e.ownerId !== (null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && e.channelId === t
                }), p = 1 === d.length && d[0].component === v.PictureInPictureComponents.EMBED_IFRAME || 0 === u.length, P = 1 === d.length && u.length <= 1;
                return p || P ? null : (0, l.jsx)(o.Popout, {
                    position: "bottom",
                    renderPopout: e => (0, l.jsx)(C, {
                        voiceChannelId: t,
                        pipWindows: d,
                        idle: n,
                        ...e
                    }),
                    children: e => (0, l.jsx)(o.Clickable, {
                        className: S.menuIcon,
                        ...e,
                        children: (0, l.jsx)(h.default, {
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
            var l = n("37983"),
                a = n("884691"),
                i = n("446674"),
                o = n("77078"),
                r = n("754493"),
                d = n("234755"),
                s = n("951691"),
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
                T = n("978461");

            function E(e) {
                let {
                    className: t
                } = e;
                return (0, l.jsx)(f.default, {
                    className: t
                })
            }

            function y(e) {
                let {
                    className: t
                } = e;
                return (0, l.jsxs)(a.Fragment, {
                    children: [(0, l.jsx)(h.default, {
                        className: t,
                        mask: h.default.Masks.HEADER_BAR_BADGE,
                        children: (0, l.jsx)(E, {})
                    }), (0, l.jsx)(m.default, {
                        className: T.badgeUpgrade
                    })]
                })
            }

            function A(e) {
                let {
                    hideBadges: t = !1,
                    stream: n,
                    ...f
                } = e, m = (0, i.useStateFromStores)([p.default], () => v.default.isPremium(p.default.getCurrentUser(), C.PremiumTypes.TIER_1)), h = (0, i.useStateFromStores)([c.default], () => c.default.getChannel(null == n ? void 0 : n.channelId)), T = a.useMemo(() => null != n ? [n] : [], [n]), A = (0, r.useIsBroadcastingInChannel)(null == h ? void 0 : h.id), x = a.useCallback(() => {
                    null != h && (0, u.default)(h.getGuildId(), h.id, S.AnalyticsSections.STREAM_SETTINGS)
                }, [h]);
                if (null == n || null == h) return null;
                let _ = E;
                return !t && !m && (_ = y), (0, l.jsx)(o.Popout, {
                    position: "top",
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, l.jsx)(P.default, {
                            children: A ? (0, l.jsx)(d.default, {
                                onClose: t
                            }) : (0, l.jsx)(s.default, {
                                channel: h,
                                currentUser: p.default.getCurrentUser(),
                                activeStreams: T,
                                onClose: t,
                                showReportOption: !0,
                                handleGoLive: x
                            })
                        })
                    },
                    animation: o.Popout.Animation.FADE,
                    children: e => (0, l.jsx)(I.default, {
                        ...e,
                        label: g.default.Messages.STREAMER_SETTINGS_TITLE,
                        iconComponent: _,
                        ...f
                    })
                })
            }
        },
        476640: function(e, t, n) {
            "use strict";
            let l, a;
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var i = n("917351"),
                o = n.n(i),
                r = n("446674"),
                d = n("913144"),
                s = n("191145"),
                u = n("374014"),
                c = n("373469"),
                p = n("271938"),
                f = n("42887"),
                m = n("280168"),
                h = n("99795");

            function v() {
                let e, t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                if (null == l) e = null;
                else {
                    var n, i, r, d, v;
                    e = s.default.getSelectedParticipantId(l);
                    let t = c.default.getLastActiveStream(),
                        P = null != e ? s.default.getParticipant(l, e) : null;
                    if (((null == P ? void 0 : P.type) === h.ParticipantTypes.ACTIVITY || (null == P ? void 0 : P.type) === h.ParticipantTypes.USER && !(null === (n = P.voiceState) || void 0 === n ? void 0 : n.selfVideo)) && (e = null), null != t && null == e && (e = null === (i = s.default.getParticipant(l, (0, u.encodeStreamKey)(t))) || void 0 === i ? void 0 : i.id), null == e) {
                        let t = p.default.getId(),
                            n = o(s.default.getVideoParticipants(l)).filter(e => e.type === h.ParticipantTypes.USER && e.user.id !== t && !f.default.isLocalVideoDisabled(e.user.id)),
                            i = Date.now();
                        null == (e = null === (r = n.map(e => [e.user.id, m.default.getSpeakingDuration(e.user.id, i)]).filter(e => {
                            let [t, n] = e;
                            return 0 !== n
                        }).maxBy(e => {
                            let [t, n] = e;
                            return -n
                        })) || void 0 === r ? void 0 : r[0]) && (e = null != a ? a : null === (v = n.first()) || void 0 === v ? void 0 : null === (d = v.user) || void 0 === d ? void 0 : d.id)
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
                    this.waitFor(s.default, p.default, m.default, c.default, f.default), this.syncWith([s.default, c.default], I)
                }
                getSpeaker(e) {
                    return l !== e && (l = e, v(!1)), null != a ? a : p.default.getId()
                }
            }
            S.displayName = "VideoSpeakerStore";
            let C = new S(d.default, {
                AUDIO_SET_LOCAL_VIDEO_DISABLED: I
            });
            var g = C
        }
    }
]);
//# sourceMappingURL=97c2f01fc2e1181af21f.js.map