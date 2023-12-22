(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94491"], {
        185769: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ecc14d613a0539cb4a93.svg"
        },
        156589: function(e, t, n) {
            "use strict";
            e.exports = n.p + "23832fe21a4aab1ebc38.svg"
        },
        608249: function(e, t, n) {
            "use strict";
            e.exports = n.p + "585164866cd6fa502f13.svg"
        },
        500246: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6c0d132178a5cd0ff8a2.svg"
        },
        445449: function(e, t, n) {
            "use strict";
            e.exports = n.p + "96a66151bbd353da5d7b.svg"
        },
        52880: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7691d13e8cb9054e1583.svg"
        },
        978173: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5f6f425f0d94c6e3a217.svg"
        },
        696246: function(e, t, n) {
            "use strict";
            e.exports = n.p + "23808e559cfef1d23276.svg"
        },
        943722: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ActivityEmoji: function() {
                    return I
                },
                default: function() {
                    return h
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                u = n("77078"),
                o = n("430568"),
                c = n("309570"),
                d = n("29088"),
                f = n("867805"),
                T = n("699209"),
                E = n("32346"),
                A = n("342845"),
                _ = n("845579"),
                m = n("271938"),
                S = n("42203"),
                C = n("957255"),
                N = n("800762"),
                g = n("137783"),
                p = n("49111"),
                v = n("205341");

            function I(e) {
                let {
                    emoji: t,
                    className: n,
                    animate: l = !0,
                    hideTooltip: s
                } = e, r = _.AnimateEmoji.useSetting(), c = null != t.id ? ":".concat(t.name, ":") : f.default.translateSurrogatesToInlineEmoji(t.name), d = {
                    className: i(v.emoji, n),
                    emojiId: t.id,
                    emojiName: t.name,
                    autoplay: !0,
                    animated: !!(t.animated && r && l)
                };
                return s ? (0, a.jsx)(o.default, {
                    ...d
                }) : (0, a.jsx)(u.Tooltip, {
                    text: c,
                    children: e => (0, a.jsx)(o.default, {
                        ...e,
                        ...d
                    })
                })
            }
            let M = e => {
                let {
                    className: t,
                    text: n
                } = e, s = l.useRef(null), r = l.useRef(null), [o, c] = l.useState(!1);
                return l.useLayoutEffect(() => {
                    let {
                        current: e
                    } = s, {
                        current: t
                    } = r;
                    if (null == e || null == t) return;
                    let n = e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight;
                    c(!n)
                }, [n]), (0, a.jsx)(u.Tooltip, {
                    text: o || null == n || "" === n ? null : n,
                    delay: 150,
                    "aria-label": !1,
                    children: e => (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            ...e,
                            className: t,
                            ref: s,
                            children: n
                        }), (0, a.jsx)("div", {
                            className: i(v.textRuler, t),
                            ref: r,
                            "aria-hidden": !0,
                            children: n
                        })]
                    })
                })
            };
            var h = e => {
                let {
                    activities: t,
                    applicationStream: n,
                    className: l,
                    textClassName: s,
                    emojiClassName: i,
                    animate: u = !0,
                    hideTooltip: o = !1,
                    hideEmoji: f = !1,
                    user: _
                } = e, h = null != t ? t.find(e => e.type === p.ActivityTypes.CUSTOM_STATUS) : null, O = (0, r.useStateFromStores)([m.default], () => m.default.getId() === (null == _ ? void 0 : _.id)), U = (0, r.useStateFromStores)([E.default], () => O ? E.default.getHangStatusActivity() : null != t ? t.find(e => e.type === p.ActivityTypes.HANG_STATUS) : null), R = (0, r.useStateFromStores)([N.default, S.default], () => {
                    var e;
                    return null != U && null != _ ? S.default.getChannel(null === (e = N.default.getVoiceStateForUser(_.id)) || void 0 === e ? void 0 : e.channelId) : null
                }), {
                    enableHangStatus: x
                } = T.HangStatusExperiment.useExperiment({
                    guildId: null == R ? void 0 : R.guild_id,
                    location: "ActivityStatus"
                }), y = null, j = x && null != U && C.default.can(p.Permissions.CONNECT, R);
                j ? y = (0, a.jsx)(A.default, {
                    className: i,
                    hangStatusActivity: U
                }) : null != h && null != h.emoji && !f && (y = (0, a.jsx)(I, {
                    emoji: h.emoji,
                    animate: u,
                    hideTooltip: o,
                    className: i
                }));
                let P = (0, d.default)(t, n, void 0, j),
                    H = null != P && P.length > 0;
                return null != y || H ? (0, a.jsxs)("div", {
                    className: l,
                    children: [y, (0, a.jsx)(M, {
                        text: P,
                        className: s
                    }), null != t && t.some(c.default) ? (0, a.jsx)(g.default, {
                        width: 16,
                        height: 16,
                        className: v.icon
                    }) : null]
                }) : null
            }
        },
        267527: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClydeIcon: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 0 0 .96 17.7a18.43 18.43 0 0 0 5.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83ZM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27Zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27Z",
                        className: r
                    })
                })
            }
        },
        875212: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTriggerDebuggingAA: function() {
                    return s
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                kind: "user",
                id: "2023-09_trigger_debugging_aa",
                label: "trigger debugging aa mobile",
                defaultConfig: {
                    inUse: !1
                },
                treatments: [{
                    id: 1,
                    label: "On",
                    config: {
                        inUse: !0
                    }
                }]
            });

            function s(e) {
                let {
                    autoTrackExposure: t = !1,
                    location: n
                } = e;
                return l.useExperiment({
                    location: n
                }, {
                    autoTrackExposure: t
                })
            }
        },
        204947: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("782340");

            function l(e) {
                return null != e && "" !== e ? e : a.default.Messages.EMBEDDED_ACTIVITIES_IN_ACTIVITY
            }
        },
        502651: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("954016"),
                l = n("49111");

            function s(e) {
                return e.type === l.ActivityTypes.STREAMING && null != e.url && a.validStreamURL.test(e.url)
            }

            function i(e) {
                return null != e && (Array.isArray(e) ? e.some(s) : s(e))
            }
        },
        29088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var a = n("925749"),
                l = n("204947"),
                s = n("152311"),
                i = n("502651"),
                r = n("49111"),
                u = n("782340");

            function o(e) {
                return {
                    [r.ActivityTypes.STREAMING]: e ? u.default.Messages.UNFORMATTED_STREAMING : u.default.Messages.STREAMING,
                    [r.ActivityTypes.LISTENING]: e ? u.default.Messages.UNFORMATTED_LISTENING_TO : u.default.Messages.LISTENING_TO,
                    [r.ActivityTypes.WATCHING]: e ? u.default.Messages.UNFORMATTED_WATCHING : u.default.Messages.WATCHING,
                    [r.ActivityTypes.COMPETING]: e ? u.default.Messages.UNFORMATTED_COMPETING : u.default.Messages.COMPETING
                }
            }

            function c(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    c = arguments.length > 3 ? arguments[3] : void 0;
                if (null != e && e.type === r.ActivityTypes.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
                if (null != t) return null == e || e.type !== r.ActivityTypes.PLAYING ? u.default.Messages.SHARING_SCREEN : o(n)[r.ActivityTypes.STREAMING].format({
                    name: e.name
                });
                if (c && null != e && e.type === r.ActivityTypes.HANG_STATUS) return (0, a.getHangStatusText)(e);
                if (null == e || null == e.name) return null;
                if ((0, i.default)(e)) {
                    let t = null != e.details && "" !== e.details ? e.details : e.name;
                    return o(n)[r.ActivityTypes.STREAMING].format({
                        name: t
                    })
                }
                return (0, s.default)(e) ? (0, l.default)(e.name) : function(e, t, n) {
                    let a = o(n);
                    switch (e) {
                        case r.ActivityTypes.LISTENING:
                        case r.ActivityTypes.WATCHING:
                        case r.ActivityTypes.COMPETING:
                            return a[e].format({
                                name: t
                            });
                        case r.ActivityTypes.CUSTOM_STATUS:
                        case r.ActivityTypes.HANG_STATUS:
                            return null;
                        case r.ActivityTypes.PLAYING:
                        default:
                            return n ? u.default.Messages.UNFORMATTED_PLAYING_GAME.format({
                                game: t
                            }) : u.default.Messages.PLAYING_GAME.format({
                                game: t
                            })
                    }
                }(e.type, e.name, n)
            }

            function d(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = arguments.length > 3 ? arguments[3] : void 0;
                if (Array.isArray(e)) {
                    let l = e;
                    return null != t && (l = [...l, null]), l.map(e => c(e, t, n, a)).find(e => null != e)
                }
                return c(e, t, n, a)
            }
        },
        775377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("943722"),
                r = n("462339");

            function u(e) {
                let {
                    activity: t,
                    className: n,
                    emojiClassName: l,
                    textClassName: u,
                    placeholderText: o,
                    soloEmojiClassName: c,
                    animate: d = !0,
                    hideTooltip: f = !1,
                    hideEmoji: T = !1,
                    children: E
                } = e;
                if (null == t) return null;
                let {
                    emoji: A
                } = t, _ = null != t.state && "" !== t.state ? t.state : o;
                return (0, a.jsxs)("div", {
                    className: s(r.container, n),
                    children: [T || null == A ? null : (0, a.jsx)(i.ActivityEmoji, {
                        emoji: A,
                        className: s(r.emoji, l, null != c ? {
                            [c]: null == _ || "" === _
                        } : null),
                        animate: d,
                        hideTooltip: f
                    }), null != _ && _.length > 0 ? (0, a.jsx)("span", {
                        className: u,
                        children: _
                    }) : null, E]
                })
            }
        },
        699209: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HangStatusExperiment: function() {
                    return l
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                kind: "guild",
                id: "2023-11_enable_hang_status",
                label: "Hang Statuses",
                defaultConfig: {
                    enableHangStatus: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable hang statuses",
                    config: {
                        enableHangStatus: !0
                    }
                }]
            })
        },
        925749: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getHangStatusOptions: function() {
                    return f
                },
                getHangStatusDetails: function() {
                    return T
                },
                getHangStatusText: function() {
                    return E
                }
            });
            var a = n("49111"),
                l = n("782340"),
                s = n("185769"),
                i = n("156589"),
                r = n("608249"),
                u = n("500246"),
                o = n("445449"),
                c = n("52880"),
                d = n("978173");
            let f = () => ({
                    [a.HangStatusTypes.CHILLING]: {
                        title: l.default.Messages.STATUS_CHILLING,
                        icon: i,
                        color: "#567C7E"
                    },
                    [a.HangStatusTypes.GAMING]: {
                        title: l.default.Messages.STATUS_GAMING,
                        icon: r,
                        color: "#685F8C"
                    },
                    [a.HangStatusTypes.FOCUSING]: {
                        title: l.default.Messages.STATUS_FOCUSING,
                        icon: o,
                        color: "#7F6956"
                    },
                    [a.HangStatusTypes.BRB]: {
                        title: l.default.Messages.STATUS_BRB,
                        icon: s,
                        color: "#76567E"
                    },
                    [a.HangStatusTypes.EATING]: {
                        title: l.default.Messages.STATUS_EATING,
                        icon: u,
                        color: "#717B54"
                    },
                    [a.HangStatusTypes.IN_TRANSIT]: {
                        title: l.default.Messages.STATUS_IN_TRANSIT,
                        icon: c,
                        color: "#56697F"
                    },
                    [a.HangStatusTypes.WATCHING]: {
                        title: l.default.Messages.STATUS_WATCHING,
                        icon: d,
                        color: "#7C5571"
                    }
                }),
                T = e => {
                    if ((null == e ? void 0 : e.type) !== a.ActivityTypes.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
                    let t = e.state;
                    return t === a.HangStatusTypes.CUSTOM ? null : f()[t]
                };

            function E(e) {
                var t;
                let n = (null == e ? void 0 : e.state) != null ? e.state : null;
                return n === a.HangStatusTypes.CUSTOM ? null == e ? void 0 : e.details : null === (t = T(e)) || void 0 === t ? void 0 : t.title
            }
        },
        342845: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("943722"),
                s = n("925749"),
                i = n("49111"),
                r = e => {
                    var t;
                    let {
                        className: n,
                        hangStatusActivity: r
                    } = e;
                    if ((null == r ? void 0 : r.state) === i.HangStatusTypes.CUSTOM) return null != r.emoji ? (0, a.jsx)(l.ActivityEmoji, {
                        emoji: r.emoji,
                        className: n,
                        hideTooltip: !0
                    }) : null;
                    let u = null === (t = (0, s.getHangStatusDetails)(r)) || void 0 === t ? void 0 : t.icon;
                    return null != u ? (0, a.jsx)("img", {
                        src: u,
                        alt: "",
                        className: null != n ? n : void 0
                    }) : null
                }
        },
        75015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UploadTypes: function() {
                    return s
                },
                EDITING_CONTAINER_WIDTH: function() {
                    return u
                },
                USER_BANNER_MAX_WIDTH: function() {
                    return o
                },
                USER_BANNER_MAX_HEIGHT: function() {
                    return c
                },
                GUILD_BANNER_MAX_WIDTH: function() {
                    return d
                },
                GUILD_BANNER_MAX_HEIGHT: function() {
                    return f
                },
                SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
                    return T
                },
                SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                    return E
                },
                HOME_HEADER_MAX_WIDTH: function() {
                    return A
                },
                HOME_HEADER_MAX_HEIGHT: function() {
                    return _
                },
                BANNER_ASPECT_RATIO: function() {
                    return m
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return S
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return C
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return N
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return g
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return p
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return v
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return I
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return M
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return h
                },
                MessageTypes: function() {
                    return i
                }
            });
            var a, l, s, i, r = n("917219");
            (a = s || (s = {}))[a.AVATAR = 0] = "AVATAR", a[a.BANNER = 1] = "BANNER", a[a.GUILD_BANNER = 2] = "GUILD_BANNER", a[a.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", a[a.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", a[a.HOME_HEADER = 5] = "HOME_HEADER", a[a.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let u = 568,
                o = 2400,
                c = 848,
                d = 2400,
                f = 1350,
                T = 2400,
                E = 960,
                A = 2400,
                _ = 600,
                m = 17 / 6,
                S = 16 / 9,
                C = 2.5,
                N = 4,
                g = u / m,
                p = u / S,
                v = u / C,
                I = u / N,
                M = r.BACKGROUND_REPLACEMENT_SIZE.width / r.BACKGROUND_REPLACEMENT_SIZE.height,
                h = u / M;
            (l = i || (i = {}))[l.CROP_GIF_START = 0] = "CROP_GIF_START", l[l.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", l[l.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        },
        123377: function(e, t, n) {
            "use strict";
            let a, l;
            n.r(t), n.d(t, {
                CopiableField: function() {
                    return m
                }
            }), n("222007");
            var s = n("37983"),
                i = n("884691"),
                r = n("414456"),
                u = n.n(r),
                o = n("862337"),
                c = n("77078"),
                d = n("413709"),
                f = n("599110"),
                T = n("306160"),
                E = n("49111"),
                A = n("782340"),
                _ = n("491701");

            function m(e) {
                var t;
                let {
                    className: n,
                    copyValue: r,
                    copyMetaData: m,
                    children: S,
                    disableCopy: C,
                    showCopyIcon: N
                } = e, [g, p] = i.useState(0), [v, I] = i.useState(!1), [M, h] = i.useState(!1);
                if (i.useEffect(() => (a = new o.Timeout, l = new o.Timeout, function() {
                        a.stop(), l.stop()
                    }), []), !T.SUPPORTS_COPY || C) return (0, s.jsx)(s.Fragment, {
                    children: S
                });
                let O = [A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_1, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_2, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_3, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_4, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_5, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_6, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_7, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_8, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_9, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_10, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_11],
                    U = Math.min(Math.max(g - 1, 0), O.length - 1),
                    R = null !== (t = O[U]) && void 0 !== t ? t : O[0],
                    x = g >= O.length - 1,
                    y = x ? c.TooltipColors.RED : c.TooltipColors.GREEN,
                    j = v ? y : c.TooltipColors.PRIMARY,
                    P = () => {
                        a.stop(), h(!1)
                    },
                    H = e => {
                        (0, T.copy)(r), f.default.track(E.AnalyticEvents.TEXT_COPIED, {
                            type: m
                        }), "function" == typeof e && e(), !M && p(g + 1), h(!0), I(!0), a.start(1e3, () => h(!1)), l.start(2e3, () => p(0))
                    };
                return (0, s.jsx)(c.Tooltip, {
                    delay: 500,
                    color: j,
                    forceOpen: M,
                    text: v ? (0, s.jsx)(c.Shaker, {
                        isShaking: x,
                        children: R
                    }) : A.default.Messages.ACCOUNT_CLICK_TO_COPY,
                    onAnimationRest: (e, t) => {
                        !M && v && t.phase === E.SpringTransitionPhases.LEAVE && I(!1)
                    },
                    "aria-label": A.default.Messages.ACCOUNT_CLICK_TO_COPY,
                    children: e => {
                        let {
                            onClick: t,
                            onMouseEnter: a,
                            ...l
                        } = e;
                        return (0, s.jsx)(c.Clickable, {
                            ...l,
                            className: _.clickTarget,
                            onMouseEnter: () => {
                                v ? P() : "function" == typeof a && a()
                            },
                            onClick: () => {
                                H(t)
                            },
                            children: (0, s.jsxs)("div", {
                                className: u(n, _.copiableWrapper),
                                children: [(0, s.jsx)("div", {
                                    className: _.childWrapper,
                                    children: S
                                }), N ? (0, s.jsx)("div", {
                                    className: _.copyIconWrapper,
                                    children: (0, s.jsx)(d.default, {
                                        width: 18,
                                        height: 18,
                                        className: _.copyIcon
                                    })
                                }) : null]
                            })
                        })
                    }
                })
            }
        },
        824794: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                shouldDisableUserPresenceInChannel: function() {
                    return l
                }
            });
            var a = n("42203");

            function l(e, t) {
                let n = a.default.getChannel(t);
                return null != n && e.bot && n.isPrivate() && null == n.rawRecipients.find(t => t.id === e.id)
            }
        },
        643121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("65597"),
                l = n("845579"),
                s = n("102985"),
                i = n("697218"),
                r = n("782340");
            let u = "legacy_username";

            function o(e) {
                var t;
                let n = l.LegacyUsernameDisabled.useSetting(),
                    o = (0, a.default)([i.default], () => i.default.getCurrentUser()),
                    c = (0, a.default)([s.default], () => s.default.hidePersonalInformation);
                if (null == e) return [];
                let d = null !== (t = null == e ? void 0 : e.getBadges()) && void 0 !== t ? t : [];
                return null != o && o.id === e.userId && n && (d = d.filter(e => e.id !== u)), c && (d = d.map(e => ({
                    ...e,
                    description: e.id === u ? r.default.Messages.STREAMER_MODE_ENABLED : e.description
                }))), d
            }
        },
        590006: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BadgeSizes: function() {
                    return a
                },
                default: function() {
                    return C
                }
            }), n("424973");
            var a, l, s = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                u = n("77078"),
                o = n("572544"),
                c = n("244201"),
                d = n("298878"),
                f = n("643121"),
                T = n("217513"),
                E = n("590456"),
                A = n("49111"),
                _ = n("782340"),
                m = n("730684"),
                S = n("696246");

            function C(e) {
                let {
                    user: t,
                    guildId: n,
                    className: a,
                    shrinkAtCount: l,
                    shrinkToSize: i,
                    isTryItOutFlow: C,
                    size: N = 0
                } = e, g = (0, T.default)(t.id, n), p = (0, f.default)(g).map(e => ({
                    ...e,
                    src: (0, E.getBadgeAsset)(e.icon)
                })), v = (0, c.useWindowDispatch)();
                if (t.isClyde()) return (0, s.jsx)("div", {
                    className: r(a, m.container, m.clydeBadgeList),
                    "aria-label": _.default.Messages.PROFILE_USER_BADGES,
                    role: "group",
                    children: (0, s.jsx)(d.default, {})
                });
                C && null == p.find(e => "premium" === e.id) && p.push({
                    id: "premium",
                    icon: S,
                    src: S,
                    description: _.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                        date: new Date
                    })
                });
                let I = null != l && null != i && p.length > l ? i : N;
                return (0, s.jsx)("div", {
                    className: r(a, p.length > 0 ? m.containerWithContent : m.container),
                    "aria-label": _.default.Messages.PROFILE_USER_BADGES,
                    role: "group",
                    children: p.map(e => (0, s.jsx)(u.Tooltip, {
                        position: "top",
                        text: e.description,
                        spacing: 12,
                        children: t => (0, s.jsx)(u.Anchor, {
                            ...t,
                            onClick: n => {
                                var a;
                                null === (a = t.onClick) || void 0 === a || a.call(t);
                                let l = null != e.link ? (0, o.default)(e.link) : null;
                                if (null != l) return v.dispatch(A.ComponentActions.POPOUT_CLOSE), l(n)
                            },
                            href: e.link,
                            children: (0, s.jsx)("img", {
                                alt: " ",
                                "aria-hidden": !0,
                                src: e.src,
                                className: r({
                                    [m.profileBadge24]: 0 === I,
                                    [m.profileBadge22]: 1 === I,
                                    [m.profileBadge18]: 2 === I
                                })
                            })
                        })
                    }, e.id))
                })
            }(l = a || (a = {}))[l.SIZE_24 = 0] = "SIZE_24", l[l.SIZE_22 = 1] = "SIZE_22", l[l.SIZE_18 = 2] = "SIZE_18"
        },
        880114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("65597"),
                s = n("77078"),
                i = n("535013"),
                r = n("915639"),
                u = n("476263"),
                o = n("153769"),
                c = n("299039"),
                d = n("782340"),
                f = n("334099");

            function T(e) {
                let {
                    userId: t,
                    headingClassName: n,
                    textClassName: T,
                    guild: E,
                    guildMember: A
                } = e, _ = (0, l.default)([r.default], () => r.default.locale), m = null != E && null != A;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.Heading, {
                        variant: "eyebrow",
                        className: n,
                        children: m ? d.default.Messages.USER_PROFILE_MEMBER_SINCE : d.default.Messages.USER_PROFILE_DISCORD_MEMBER_SINCE
                    }), (0, a.jsxs)("div", {
                        className: f.memberSinceContainer,
                        children: [m && (0, a.jsx)(s.Tooltip, {
                            text: d.default.Messages.DISCORD_NAME,
                            children: e => (0, a.jsx)(o.default, {
                                ...e,
                                className: f.discordIcon
                            })
                        }), (0, a.jsx)(s.Text, {
                            className: T,
                            variant: "text-sm/normal",
                            children: (0, i.getCreatedAtDate)(c.default.extractTimestamp(t), _)
                        }), null != E && null != A && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: f.divider
                            }), (0, a.jsx)(s.Tooltip, {
                                text: E.name,
                                children: e => (0, a.jsx)(u.default, {
                                    ...e,
                                    guild: E,
                                    size: u.default.Sizes.SMOL
                                })
                            }), (0, a.jsx)(s.Text, {
                                className: T,
                                variant: "text-sm/normal",
                                children: (0, i.getCreatedAtDate)(A.joinedAt, _)
                            })]
                        })]
                    })]
                })
            }
        },
        10532: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("193853");

            function r(e) {
                let {
                    className: t
                } = e;
                return (0, a.jsx)("div", {
                    className: s(i.divider, t)
                })
            }
        },
        935409: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserPopoutBadgeList: function() {
                    return L
                },
                UserPopoutAvatar: function() {
                    return D
                },
                default: function() {
                    return b
                }
            }), n("794252");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("506838"),
                u = n("446674"),
                o = n("669491"),
                c = n("77078"),
                d = n("606292"),
                f = n("980215"),
                T = n("824794"),
                E = n("635471"),
                A = n("305961"),
                _ = n("423487"),
                m = n("587974"),
                S = n("599110"),
                C = n("719923"),
                N = n("50885"),
                g = n("713135"),
                p = n("106435"),
                v = n("289918"),
                I = n("878569"),
                M = n("590006"),
                h = n("430312"),
                O = n("401642"),
                U = n("590456"),
                R = n("49111"),
                x = n("646718"),
                y = n("782340"),
                j = n("524466");
            let P = c.AvatarSizes.SIZE_80,
                H = (0, d.getDecorationSizeForAvatarSize)(P);

            function L(e) {
                let {
                    user: t,
                    guildId: n,
                    isTryItOutFlow: l,
                    forProfileEffectModal: s
                } = e, i = (0, u.useStateFromStores)([g.default], () => g.default.getUserProfile(t.id), [t]), r = (0, u.useStateFromStores)([A.default], () => A.default.getGuild(n), [n]), d = (0, f.useClydeProfilesEnabled)(r);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(null == i ? void 0 : i.profileFetchFailed) && (!t.isClyde() || d) && (0, a.jsx)(c.Tooltip, {
                        text: y.default.Messages.USER_PROFILE_LOAD_ERROR,
                        spacing: 16,
                        children: e => (0, a.jsx)(_.default, {
                            ...e,
                            className: j.warningCircleIcon,
                            color: o.default.unsafe_rawColors.YELLOW_300.css
                        })
                    }), (0, a.jsx)(M.default, {
                        className: s ? j.profileBadgesCompactNoTouch : j.profileBadges,
                        user: t,
                        guildId: n,
                        isTryItOutFlow: l,
                        size: M.BadgeSizes.SIZE_22
                    })]
                })
            }
            let G = N.default.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar;

            function D(e) {
                let {
                    user: t,
                    displayProfile: n,
                    avatarSrc: s,
                    hasBanner: u,
                    status: o,
                    isMobile: d,
                    guildId: f,
                    channelId: E,
                    onClose: A,
                    disableUserProfileLink: _,
                    profileType: N,
                    animateOnHover: g,
                    hasProfileEffect: v
                } = e, {
                    profileTheme: M
                } = l.useContext(h.UserProfileContext), L = l.useContext(S.AnalyticsContext), D = t.isNonUserBot() && !t.isClyde(), b = C.default.isPremiumAtLeast(null == n ? void 0 : n.premiumType, x.PremiumTypes.TIER_2), B = l.useMemo(() => (0, T.shouldDisableUserPresenceInChannel)(t, E), [t, E]), F = _ || t.isClyde(), {
                    avatarDecorationSrc: k,
                    avatarSrc: w,
                    eventHandlers: V
                } = (0, p.default)({
                    user: t,
                    guildId: f,
                    size: P,
                    animateOnHover: g
                }), W = (0, a.jsx)("div", {
                    className: j.avatarHoverTarget,
                    ...V,
                    children: (0, a.jsx)(G, {
                        src: null != s ? s : w,
                        avatarDecoration: k,
                        size: P,
                        "aria-label": t.username,
                        status: B ? R.StatusTypes.UNKNOWN : o,
                        statusBackdropColor: null != M && b && !B ? (0, c.getStatusBackdropColor)(M) : void 0,
                        isMobile: d,
                        statusTooltip: !0
                    })
                }), Y = (0, r.match)(N).with(U.UserProfileTypes.POPOUT, () => {
                    let e = (0, I.buildGetPremiumUserBannerStyles)({
                        premiumUserWithBanner: j.avatarPositionPremiumBanner,
                        premiumUserWithoutBanner: j.avatarPositionPremiumNoBanner,
                        default: j.avatarPositionNormal
                    });
                    return e({
                        isPremium: b && !D,
                        hasBanner: u,
                        hasProfileEffect: v
                    })
                }).with(U.UserProfileTypes.POMELO_POPOUT, () => j.avatarPositionPomelo).with(U.UserProfileTypes.PANEL, () => j.avatarPositionPanel).exhaustive();
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(c.Clickable, {
                        className: i({
                            [j.clickable]: !F,
                            [j.avatarWrapperNonUserBot]: D,
                            [j.avatarWrapperNormal]: !D
                        }, Y),
                        onClick: D || F ? void 0 : function() {
                            (0, O.openUserProfileModal)({
                                userId: t.id,
                                guildId: null != f ? f : void 0,
                                channelId: null != E ? E : void 0,
                                analyticsLocation: L.location
                            }), null == A || A()
                        },
                        children: [W, !F && function() {
                            let e = null != k,
                                t = e ? H : (0, c.getAvatarSize)(P);
                            return (0, a.jsx)(m.default, {
                                mask: null == o || o === R.StatusTypes.UNKNOWN || B ? m.default.Masks.AVATAR_DEFAULT : (0, r.match)([e, d]).with([!0, !0], () => m.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => m.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => m.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => m.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
                                className: e ? j.avatarDecorationHint : j.avatarHint,
                                style: e ? {
                                    borderRadius: .4 * t
                                } : void 0,
                                width: t,
                                height: t,
                                children: (0, a.jsx)("div", {
                                    className: j.avatarHintInner,
                                    children: y.default.Messages.VIEW_PROFILE
                                })
                            })
                        }()]
                    })
                })
            }

            function b(e) {
                let {
                    user: t,
                    displayProfile: n,
                    guildId: l,
                    channelId: s,
                    onClose: i,
                    isMobile: r,
                    isStreaming: u,
                    status: o,
                    disableUserProfileLink: c,
                    isHovering: d,
                    showPremiumBadgeUpsell: f = !0,
                    upsell: T
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [T, (0, a.jsx)(v.default, {
                        user: t,
                        displayProfile: n,
                        onClose: i,
                        guildId: l,
                        profileType: U.UserProfileTypes.POPOUT,
                        showPremiumBadgeUpsell: f,
                        isHovering: d,
                        hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
                    }), (null == n ? void 0 : n.profileEffectId) != null && (0, a.jsx)(E.default, {
                        profileEffectId: null == n ? void 0 : n.profileEffectId,
                        bannerAdjustment: 0,
                        isHovering: d
                    }), (0, a.jsx)(D, {
                        user: t,
                        displayProfile: n,
                        status: u ? R.StatusTypes.STREAMING : o,
                        isMobile: r,
                        guildId: l,
                        channelId: s,
                        onClose: i,
                        disableUserProfileLink: c,
                        hasBanner: (null == n ? void 0 : n.banner) != null,
                        hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null,
                        profileType: U.UserProfileTypes.POPOUT
                    }), (0, a.jsx)(L, {
                        user: t,
                        guildId: l
                    })]
                })
            }
        },
        648149: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("224038");

            function i(e) {
                let {
                    user: t,
                    nickname: n
                } = e, i = null != n;
                return (0, a.jsx)(l.Avatar, {
                    src: t.getAvatarURL(void 0, i ? 16 : 24),
                    size: i ? l.AvatarSizes.SIZE_16 : l.AvatarSizes.SIZE_24,
                    className: i ? s.miniAvatar : s.largeAvatar,
                    "aria-hidden": !0
                })
            }
        },
        777003: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("383957");

            function r(e) {
                let {
                    children: t,
                    lastSection: n = !1,
                    className: l,
                    ...r
                } = e;
                return (0, a.jsx)("div", {
                    className: s(i.section, l, {
                        [i.lastSection]: n
                    }),
                    ...r,
                    children: t
                })
            }
        },
        369869: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("446674"),
                r = n("77078"),
                u = n("997289"),
                o = n("697218"),
                c = n("476263"),
                d = n("216422"),
                f = n("719923"),
                T = n("485422"),
                E = n("777003"),
                A = n("49111"),
                _ = n("782340"),
                m = n("125234"),
                S = n("814076");

            function C(e) {
                let {
                    guildName: t
                } = e;
                return (0, a.jsxs)("div", {
                    className: m.guildMemberProfileTooltip,
                    children: [(0, a.jsx)(d.default, {
                        className: m.guildMemberProfileTooltipNitroWheel
                    }), _.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                        guildName: t
                    })]
                })
            }

            function N(e) {
                let {
                    guild: t,
                    bio: l,
                    hidePersonalInformation: d,
                    isUsingGuildBio: N,
                    lastSection: g = !1,
                    animateOnHover: p = !1,
                    isHovering: v = !1,
                    lineClamp: I
                } = e, {
                    location: M
                } = (0, u.useAnalyticsContext)(), h = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()), O = f.default.canUsePremiumGuildMemberProfile(h);
                return d || null == l || "" === l ? null : (0, a.jsxs)(E.default, {
                    lastSection: g,
                    children: [(0, a.jsxs)(r.Heading, {
                        variant: "eyebrow",
                        className: S.title,
                        children: [_.default.Messages.USER_POPOUT_ABOUT_ME, null != t && N && (0, a.jsx)(r.Tooltip, {
                            color: r.Tooltip.Colors.CUSTOM,
                            tooltipClassName: m.aboutMeGuildIconTooltip,
                            "aria-label": _.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                                guildName: t.name
                            }),
                            text: (0, a.jsx)(C, {
                                guildName: t.name
                            }),
                            children: e => (0, a.jsx)(c.default, {
                                ...e,
                                onClick: () => {
                                    var t;
                                    null == (t = e.onClick) || t(), null != h && !O && (0, r.openModalLazy)(async () => {
                                        let {
                                            default: e
                                        } = await n.el("414242").then(n.bind(n, "414242"));
                                        return t => (0, a.jsx)(e, {
                                            ...t,
                                            source: {
                                                ...M,
                                                object: A.AnalyticsObjects.GUILD_ICON
                                            }
                                        })
                                    })
                                },
                                guild: t,
                                size: c.default.Sizes.SMOL,
                                className: s(m.aboutMeGuildIcon, {
                                    [m.nonPremiumHoverState]: !O
                                })
                            })
                        })]
                    }), (0, a.jsx)(T.default, {
                        userBio: l,
                        animateOnHover: p,
                        isHovering: v,
                        lineClamp: I
                    })]
                })
            }
        },
        802279: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("775377"),
                s = n("777003"),
                i = n("184256");

            function r(e) {
                let {
                    customStatusActivity: t,
                    className: n,
                    animate: r
                } = e;
                return null == t ? null : (0, a.jsx)(s.default, {
                    className: n,
                    children: (0, a.jsx)(l.default, {
                        activity: t,
                        className: i.customStatus,
                        animate: r,
                        emojiClassName: i.customStatusEmoji,
                        soloEmojiClassName: i.customStatusSoloEmoji,
                        textClassName: i.customStatusText
                    })
                })
            }
        },
        465215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("880114"),
                s = n("777003"),
                i = n("814076");

            function r(e) {
                let {
                    userId: t,
                    guild: n,
                    guildMember: r
                } = e;
                return (0, a.jsx)(s.default, {
                    children: (0, a.jsx)(l.default, {
                        userId: t,
                        guild: n,
                        guildMember: r,
                        headingClassName: i.title,
                        textClassName: i.body
                    })
                })
            }
        },
        491250: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("77078"),
                r = n("145079"),
                u = n("123377"),
                o = n("158998"),
                c = n("777003"),
                d = n("782340"),
                f = n("119111");

            function T(e) {
                let {
                    user: t,
                    shouldCopyOnClick: n,
                    nickname: l,
                    pronouns: T,
                    usernameIcon: E,
                    identityCTA: A,
                    className: _,
                    isTryItOut: m = !1,
                    lastSection: S
                } = e;
                return (0, a.jsx)(c.default, {
                    className: s(f.container, _),
                    lastSection: S,
                    children: (0, a.jsxs)("div", {
                        className: n ? f.copiableNameTag : void 0,
                        children: [(0, a.jsx)(u.CopiableField, {
                            className: f.copiableField,
                            copyMetaData: "User Tag",
                            copyValue: o.default.getUserTag(t, {
                                decoration: "never",
                                identifiable: "always"
                            }),
                            showCopyIcon: !0,
                            disableCopy: !n,
                            children: (0, a.jsxs)("div", {
                                className: f.userText,
                                children: [null != l ? (0, a.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: f.nickname,
                                    children: l
                                }) : null, (0, a.jsx)(r.default, {
                                    usernameIcon: E,
                                    user: t,
                                    forceUsername: !0,
                                    forcePomelo: m,
                                    className: null == l ? f.userTagNoNickname : f.userTagWithNickname,
                                    usernameClass: null == l ? f.userTagUsernameNoNickname : f.userTagUsernameBase,
                                    discriminatorClass: null == l ? f.userTagDiscriminatorNoNickname : f.discrimBase,
                                    botClass: null == l ? f.headerBotTag : f.headerBotTagWithNickname
                                }), A]
                            })
                        }), null != T && "" !== T && (0, a.jsx)(i.Tooltip, {
                            text: d.default.Messages.USER_PROFILE_PRONOUNS,
                            children: e => (0, a.jsx)(i.Text, {
                                ...e,
                                variant: "text-sm/normal",
                                className: f.pronouns,
                                children: T
                            })
                        })]
                    })
                })
            }
        },
        153769: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("267527"),
                i = n("75196"),
                r = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 28,
                        height: n = 20,
                        color: l = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 28 20",
                        children: (0, a.jsx)("path", {
                            className: s,
                            fill: l,
                            d: "M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"
                        })
                    })
                }, s.ClydeIcon, void 0, {
                    size: 28
                })
        },
        137783: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("75196");

            function s(e) {
                let {
                    width: t = 16,
                    height: n = 16,
                    color: s = "currentColor",
                    foreground: i,
                    ...r
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(r),
                    width: t,
                    height: n,
                    viewBox: "0 0 16 16",
                    children: (0, a.jsx)("path", {
                        className: i,
                        fill: s,
                        d: "M6,7 L2,7 L2,6 L6,6 L6,7 Z M8,5 L2,5 L2,4 L8,4 L8,5 Z M8,3 L2,3 L2,2 L8,2 L8,3 Z M8.88888889,0 L1.11111111,0 C0.494444444,0 0,0.494444444 0,1.11111111 L0,8.88888889 C0,9.50253861 0.497461389,10 1.11111111,10 L8.88888889,10 C9.50253861,10 10,9.50253861 10,8.88888889 L10,1.11111111 C10,0.494444444 9.5,0 8.88888889,0 Z",
                        transform: "translate(3 3)"
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=94491.1493d9cb04f8cb43be69.js.map