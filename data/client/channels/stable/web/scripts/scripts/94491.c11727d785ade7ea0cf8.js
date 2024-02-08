(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94491"], {
        65833: function(e, t, a) {
            "use strict";
            e.exports = a.p + "09f55251a0ce237669a0.svg"
        },
        270664: function(e, t, a) {
            "use strict";
            e.exports = a.p + "4362aa9b6ce12d252458.svg"
        },
        763388: function(e, t, a) {
            "use strict";
            e.exports = a.p + "585164866cd6fa502f13.svg"
        },
        708206: function(e, t, a) {
            "use strict";
            e.exports = a.p + "af851a98a7ed2f9e22cc.svg"
        },
        787795: function(e, t, a) {
            "use strict";
            e.exports = a.p + "bf5fcddc2d74438567db.svg"
        },
        908332: function(e, t, a) {
            "use strict";
            e.exports = a.p + "9b4b00f53cdb2e02fe6f.svg"
        },
        850390: function(e, t, a) {
            "use strict";
            e.exports = a.p + "00f993a9ec4b058c66cf.svg"
        },
        696246: function(e, t, a) {
            "use strict";
            e.exports = a.p + "23808e559cfef1d23276.svg"
        },
        943722: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                ActivityEmoji: function() {
                    return h
                },
                default: function() {
                    return O
                }
            }), a("222007");
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                r = a("446674"),
                u = a("77078"),
                o = a("430568"),
                c = a("309570"),
                d = a("29088"),
                f = a("867805"),
                T = a("699209"),
                E = a("32346"),
                A = a("342845"),
                _ = a("845579"),
                S = a("271938"),
                m = a("42203"),
                C = a("957255"),
                g = a("824563"),
                N = a("800762"),
                v = a("137783"),
                p = a("49111"),
                I = a("205341");

            function h(e) {
                let {
                    emoji: t,
                    className: a,
                    animate: l = !0,
                    hideTooltip: s
                } = e, r = _.AnimateEmoji.useSetting(), c = null != t.id ? ":".concat(t.name, ":") : f.default.translateSurrogatesToInlineEmoji(t.name), d = {
                    className: i(I.emoji, a),
                    emojiId: t.id,
                    emojiName: t.name,
                    autoplay: !0,
                    animated: !!(t.animated && r && l)
                };
                return s ? (0, n.jsx)(o.default, {
                    ...d
                }) : (0, n.jsx)(u.Tooltip, {
                    text: c,
                    children: e => (0, n.jsx)(o.default, {
                        ...e,
                        ...d
                    })
                })
            }
            let M = e => {
                let {
                    className: t,
                    text: a
                } = e, s = l.useRef(null), r = l.useRef(null), [o, c] = l.useState(!1);
                return l.useLayoutEffect(() => {
                    let {
                        current: e
                    } = s, {
                        current: t
                    } = r;
                    if (null == e || null == t) return;
                    let a = e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight;
                    c(!a)
                }, [a]), (0, n.jsx)(u.Tooltip, {
                    text: o || null == a || "" === a ? null : a,
                    delay: 150,
                    "aria-label": !1,
                    children: e => (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            ...e,
                            className: t,
                            ref: s,
                            children: a
                        }), (0, n.jsx)("div", {
                            className: i(I.textRuler, t),
                            ref: r,
                            "aria-hidden": !0,
                            children: a
                        })]
                    })
                })
            };
            var O = e => {
                var t;
                let {
                    activities: a,
                    applicationStream: l,
                    className: s,
                    textClassName: i,
                    emojiClassName: u,
                    animate: o = !0,
                    hideTooltip: f = !1,
                    hideEmoji: _ = !1,
                    user: O
                } = e, U = null != a ? a.find(e => e.type === p.ActivityTypes.CUSTOM_STATUS) : null, x = (0, r.useStateFromStores)([S.default], () => S.default.getId() === (null == O ? void 0 : O.id)), R = (0, r.useStateFromStores)([E.default], () => x ? E.default.getHangStatusActivity() : null != a ? a.find(e => e.type === p.ActivityTypes.HANG_STATUS) : null), y = (0, r.useStateFromStores)([N.default, m.default], () => {
                    var e;
                    return null != R && null != O ? m.default.getChannel(null === (e = N.default.getVoiceStateForUser(O.id)) || void 0 === e ? void 0 : e.channelId) : null
                }), {
                    enableHangStatus: j
                } = T.HangStatusExperiment.useExperiment({
                    guildId: null == y ? void 0 : y.guild_id,
                    location: "ActivityStatus"
                }), P = null, H = j && null != R && C.default.can(p.Permissions.CONNECT, y);
                H ? P = (0, n.jsx)(A.default, {
                    className: u,
                    hangStatusActivity: R
                }) : null != U && null != U.emoji && !_ && (P = (0, n.jsx)(h, {
                    emoji: U.emoji,
                    animate: o,
                    hideTooltip: f,
                    className: u
                }));
                let L = (0, r.useStateFromStores)([g.default], () => null != O ? g.default.getStatus(O.id) : null),
                    D = null !== L && [p.StatusTypes.OFFLINE, p.StatusTypes.INVISIBLE].includes(L),
                    G = null === (t = (0, d.default)(a, l, void 0, H)) || void 0 === t ? void 0 : t.activityText,
                    b = null != G && G.length > 0;
                return D || null == P && !b ? null : (0, n.jsxs)("div", {
                    className: s,
                    children: [P, (0, n.jsx)(M, {
                        text: G,
                        className: i
                    }), null != a && a.some(c.default) ? (0, n.jsx)(v.default, {
                        width: 16,
                        height: 16,
                        className: I.icon
                    }) : null]
                })
            }
        },
        267527: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("655665");
            a.es(n, t)
        },
        875212: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useTriggerDebuggingAA: function() {
                    return s
                }
            });
            var n = a("862205");
            let l = (0, n.createExperiment)({
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
                    location: a
                } = e;
                return l.useExperiment({
                    location: a
                }, {
                    autoTrackExposure: t
                })
            }
        },
        204947: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return l
                }
            });
            var n = a("782340");

            function l(e) {
                return null != e && "" !== e ? e : n.default.Messages.EMBEDDED_ACTIVITIES_IN_ACTIVITY
            }
        },
        502651: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var n = a("954016"),
                l = a("49111");

            function s(e) {
                return e.type === l.ActivityTypes.STREAMING && null != e.url && n.validStreamURL.test(e.url)
            }

            function i(e) {
                return null != e && (Array.isArray(e) ? e.some(s) : s(e))
            }
        },
        29088: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            }), a("222007");
            var n = a("808742"),
                l = a("204947"),
                s = a("152311"),
                i = a("502651"),
                r = a("49111"),
                u = a("782340");

            function o(e) {
                return {
                    [r.ActivityTypes.STREAMING]: e ? u.default.Messages.UNFORMATTED_STREAMING : u.default.Messages.STREAMING,
                    [r.ActivityTypes.LISTENING]: e ? u.default.Messages.UNFORMATTED_LISTENING_TO : u.default.Messages.LISTENING_TO,
                    [r.ActivityTypes.WATCHING]: e ? u.default.Messages.UNFORMATTED_WATCHING : u.default.Messages.WATCHING,
                    [r.ActivityTypes.COMPETING]: e ? u.default.Messages.UNFORMATTED_COMPETING : u.default.Messages.COMPETING
                }
            }

            function c(e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    c = arguments.length > 3 ? arguments[3] : void 0;
                if (null != e && e.type === r.ActivityTypes.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
                if (null != t) return null == e || e.type !== r.ActivityTypes.PLAYING ? u.default.Messages.SHARING_SCREEN : o(a)[r.ActivityTypes.STREAMING].format({
                    name: e.name
                });
                if (c && null != e && e.type === r.ActivityTypes.HANG_STATUS) return (0, n.getHangStatusText)(e);
                if (null == e || null == e.name) return null;
                if ((0, i.default)(e)) {
                    let t = null != e.details && "" !== e.details ? e.details : e.name;
                    return o(a)[r.ActivityTypes.STREAMING].format({
                        name: t
                    })
                }
                return (0, s.default)(e) ? (0, l.default)(e.name) : function(e, t, a) {
                    let n = o(a);
                    switch (e) {
                        case r.ActivityTypes.LISTENING:
                        case r.ActivityTypes.WATCHING:
                        case r.ActivityTypes.COMPETING:
                            return n[e].format({
                                name: t
                            });
                        case r.ActivityTypes.CUSTOM_STATUS:
                        case r.ActivityTypes.HANG_STATUS:
                            return null;
                        case r.ActivityTypes.PLAYING:
                        default:
                            return a ? u.default.Messages.UNFORMATTED_PLAYING_GAME.format({
                                game: t
                            }) : u.default.Messages.PLAYING_GAME.format({
                                game: t
                            })
                    }
                }(e.type, e.name, a)
            }

            function d(e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = arguments.length > 3 ? arguments[3] : void 0;
                if (Array.isArray(e)) {
                    let l = e;
                    null != t && (l = [...l, null]);
                    let s = null;
                    for (let e of l) {
                        let l = c(e, t, a, n);
                        if (null != l) return {
                            activity: e,
                            activityText: l
                        };
                        (null == e ? void 0 : e.type) === r.ActivityTypes.CUSTOM_STATUS && null != e.emoji && (s = e)
                    }
                    return (null == s ? void 0 : s.emoji) != null ? {
                        activity: s,
                        activityText: null
                    } : null
                }
                return c(e, t, a, n)
            }
        },
        775377: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("414456"),
                s = a.n(l),
                i = a("943722"),
                r = a("462339");

            function u(e) {
                let {
                    activity: t,
                    className: a,
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
                return (0, n.jsxs)("div", {
                    className: s(r.container, a),
                    children: [T || null == A ? null : (0, n.jsx)(i.ActivityEmoji, {
                        emoji: A,
                        className: s(r.emoji, l, null != c ? {
                            [c]: null == _ || "" === _
                        } : null),
                        animate: d,
                        hideTooltip: f
                    }), null != _ && _.length > 0 ? (0, n.jsx)("span", {
                        className: u,
                        children: _
                    }) : null, E]
                })
            }
        },
        699209: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                HangStatusExperiment: function() {
                    return l
                }
            });
            var n = a("862205");
            let l = (0, n.createExperiment)({
                kind: "guild",
                id: "2023-11_enable_hang_status",
                label: "Hang Statuses",
                defaultConfig: {
                    enableHangStatus: !1,
                    setDefaultStatus: !1,
                    allowChannelTopic: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable hang statuses with no default",
                    config: {
                        enableHangStatus: !0,
                        setDefaultStatus: !1,
                        allowChannelTopic: !1
                    }
                }, {
                    id: 2,
                    label: "enable hang statuses with default",
                    config: {
                        enableHangStatus: !0,
                        setDefaultStatus: !0,
                        allowChannelTopic: !1
                    }
                }, {
                    id: 3,
                    label: "enable hang statuses with channel topic",
                    config: {
                        enableHangStatus: !0,
                        setDefaultStatus: !1,
                        allowChannelTopic: !0
                    }
                }]
            })
        },
        808742: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
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
            var n = a("49111"),
                l = a("782340"),
                s = a("65833"),
                i = a("270664"),
                r = a("763388"),
                u = a("708206"),
                o = a("787795"),
                c = a("908332"),
                d = a("850390");
            let f = () => ({
                    [n.HangStatusTypes.CHILLING]: {
                        title: l.default.Messages.STATUS_CHILLING,
                        icon: i,
                        color: "#567C7E"
                    },
                    [n.HangStatusTypes.GAMING]: {
                        title: l.default.Messages.STATUS_GAMING,
                        icon: r,
                        color: "#685F8C"
                    },
                    [n.HangStatusTypes.FOCUSING]: {
                        title: l.default.Messages.STATUS_FOCUSING,
                        icon: o,
                        color: "#7F6956"
                    },
                    [n.HangStatusTypes.BRB]: {
                        title: l.default.Messages.STATUS_BRB,
                        icon: s,
                        color: "#76567E"
                    },
                    [n.HangStatusTypes.EATING]: {
                        title: l.default.Messages.STATUS_EATING,
                        icon: u,
                        color: "#717B54"
                    },
                    [n.HangStatusTypes.IN_TRANSIT]: {
                        title: l.default.Messages.STATUS_IN_TRANSIT,
                        icon: c,
                        color: "#56697F"
                    },
                    [n.HangStatusTypes.WATCHING]: {
                        title: l.default.Messages.STATUS_WATCHING,
                        icon: d,
                        color: "#7C5571"
                    }
                }),
                T = e => {
                    if ((null == e ? void 0 : e.type) !== n.ActivityTypes.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
                    let t = e.state;
                    return t === n.HangStatusTypes.CUSTOM ? null : f()[t]
                },
                E = e => {
                    var t;
                    let a = (null == e ? void 0 : e.state) != null ? e.state : null;
                    return a === n.HangStatusTypes.CUSTOM ? null == e ? void 0 : e.details : null === (t = T(e)) || void 0 === t ? void 0 : t.title
                }
        },
        342845: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("943722"),
                s = a("808742"),
                i = a("49111"),
                r = e => {
                    var t;
                    let {
                        className: a,
                        hangStatusActivity: r
                    } = e;
                    if ((null == r ? void 0 : r.state) === i.HangStatusTypes.CUSTOM) return null != r.emoji ? (0, n.jsx)(l.ActivityEmoji, {
                        emoji: r.emoji,
                        className: a,
                        hideTooltip: !0
                    }) : null;
                    let u = null === (t = (0, s.getHangStatusDetails)(r)) || void 0 === t ? void 0 : t.icon;
                    return null != u ? (0, n.jsx)("img", {
                        src: u,
                        alt: "",
                        className: null != a ? a : void 0
                    }) : null
                }
        },
        75015: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
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
                    return S
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return m
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return C
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return g
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return N
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return v
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return p
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return I
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return h
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return M
                },
                MessageTypes: function() {
                    return i
                }
            });
            var n, l, s, i, r = a("917219");
            (n = s || (s = {}))[n.AVATAR = 0] = "AVATAR", n[n.BANNER = 1] = "BANNER", n[n.GUILD_BANNER = 2] = "GUILD_BANNER", n[n.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", n[n.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", n[n.HOME_HEADER = 5] = "HOME_HEADER", n[n.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let u = 568,
                o = 2400,
                c = 848,
                d = 2400,
                f = 1350,
                T = 2400,
                E = 960,
                A = 2400,
                _ = 600,
                S = 17 / 6,
                m = 16 / 9,
                C = 2.5,
                g = 4,
                N = u / S,
                v = u / m,
                p = u / C,
                I = u / g,
                h = r.BACKGROUND_REPLACEMENT_SIZE.width / r.BACKGROUND_REPLACEMENT_SIZE.height,
                M = u / h;
            (l = i || (i = {}))[l.CROP_GIF_START = 0] = "CROP_GIF_START", l[l.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", l[l.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        },
        123377: function(e, t, a) {
            "use strict";
            let n, l;
            a.r(t), a.d(t, {
                CopiableField: function() {
                    return S
                }
            }), a("222007");
            var s = a("37983"),
                i = a("884691"),
                r = a("414456"),
                u = a.n(r),
                o = a("862337"),
                c = a("77078"),
                d = a("413709"),
                f = a("599110"),
                T = a("306160"),
                E = a("49111"),
                A = a("782340"),
                _ = a("491701");

            function S(e) {
                var t;
                let {
                    className: a,
                    copyValue: r,
                    copyMetaData: S,
                    children: m,
                    disableCopy: C,
                    showCopyIcon: g
                } = e, [N, v] = i.useState(0), [p, I] = i.useState(!1), [h, M] = i.useState(!1);
                if (i.useEffect(() => (n = new o.Timeout, l = new o.Timeout, function() {
                        n.stop(), l.stop()
                    }), []), !T.SUPPORTS_COPY || C) return (0, s.jsx)(s.Fragment, {
                    children: m
                });
                let O = [A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_1, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_2, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_3, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_4, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_5, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_6, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_7, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_8, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_9, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_10, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_11],
                    U = Math.min(Math.max(N - 1, 0), O.length - 1),
                    x = null !== (t = O[U]) && void 0 !== t ? t : O[0],
                    R = N >= O.length - 1,
                    y = R ? c.TooltipColors.RED : c.TooltipColors.GREEN,
                    j = p ? y : c.TooltipColors.PRIMARY,
                    P = () => {
                        n.stop(), M(!1)
                    },
                    H = e => {
                        (0, T.copy)(r), f.default.track(E.AnalyticEvents.TEXT_COPIED, {
                            type: S
                        }), "function" == typeof e && e(), !h && v(N + 1), M(!0), I(!0), n.start(1e3, () => M(!1)), l.start(2e3, () => v(0))
                    };
                return (0, s.jsx)(c.Tooltip, {
                    delay: 500,
                    color: j,
                    forceOpen: h,
                    text: p ? (0, s.jsx)(c.Shaker, {
                        isShaking: R,
                        children: x
                    }) : A.default.Messages.ACCOUNT_CLICK_TO_COPY,
                    onAnimationRest: (e, t) => {
                        !h && p && t.phase === E.SpringTransitionPhases.LEAVE && I(!1)
                    },
                    "aria-label": A.default.Messages.ACCOUNT_CLICK_TO_COPY,
                    children: e => {
                        let {
                            onClick: t,
                            onMouseEnter: n,
                            ...l
                        } = e;
                        return (0, s.jsx)(c.Clickable, {
                            ...l,
                            className: _.clickTarget,
                            onMouseEnter: () => {
                                p ? P() : "function" == typeof n && n()
                            },
                            onClick: () => {
                                H(t)
                            },
                            children: (0, s.jsxs)("div", {
                                className: u(a, _.copiableWrapper),
                                children: [(0, s.jsx)("div", {
                                    className: _.childWrapper,
                                    children: m
                                }), g ? (0, s.jsx)("div", {
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
        824794: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                shouldDisableUserPresenceInChannel: function() {
                    return l
                }
            });
            var n = a("42203");

            function l(e, t) {
                let a = n.default.getChannel(t);
                return null != a && e.bot && a.isPrivate() && null == a.rawRecipients.find(t => t.id === e.id)
            }
        },
        643121: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var n = a("65597"),
                l = a("845579"),
                s = a("102985"),
                i = a("697218"),
                r = a("782340");
            let u = "legacy_username";

            function o(e) {
                var t;
                let a = l.LegacyUsernameDisabled.useSetting(),
                    o = (0, n.default)([i.default], () => i.default.getCurrentUser()),
                    c = (0, n.default)([s.default], () => s.default.hidePersonalInformation);
                if (null == e) return [];
                let d = null !== (t = null == e ? void 0 : e.getBadges()) && void 0 !== t ? t : [];
                return null != o && o.id === e.userId && a && (d = d.filter(e => e.id !== u)), c && (d = d.map(e => ({
                    ...e,
                    description: e.id === u ? r.default.Messages.STREAMER_MODE_ENABLED : e.description
                }))), d
            }
        },
        590006: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                BadgeSizes: function() {
                    return n
                },
                default: function() {
                    return C
                }
            }), a("424973");
            var n, l, s = a("37983");
            a("884691");
            var i = a("414456"),
                r = a.n(i),
                u = a("77078"),
                o = a("572544"),
                c = a("244201"),
                d = a("298878"),
                f = a("643121"),
                T = a("217513"),
                E = a("590456"),
                A = a("49111"),
                _ = a("782340"),
                S = a("730684"),
                m = a("696246");

            function C(e) {
                let {
                    user: t,
                    guildId: a,
                    className: n,
                    shrinkAtCount: l,
                    shrinkToSize: i,
                    isTryItOutFlow: C,
                    size: g = 0
                } = e, N = (0, T.default)(t.id, a), v = (0, f.default)(N).map(e => ({
                    ...e,
                    src: (0, E.getBadgeAsset)(e.icon)
                })), p = (0, c.useWindowDispatch)();
                if (t.isClyde()) return (0, s.jsx)("div", {
                    className: r(n, S.container, S.clydeBadgeList),
                    "aria-label": _.default.Messages.PROFILE_USER_BADGES,
                    role: "group",
                    children: (0, s.jsx)(d.default, {})
                });
                C && null == v.find(e => "premium" === e.id) && v.push({
                    id: "premium",
                    icon: m,
                    src: m,
                    description: _.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                        date: new Date
                    })
                });
                let I = null != l && null != i && v.length > l ? i : g;
                return (0, s.jsx)("div", {
                    className: r(n, v.length > 0 ? S.containerWithContent : S.container),
                    "aria-label": _.default.Messages.PROFILE_USER_BADGES,
                    role: "group",
                    children: v.map(e => (0, s.jsx)(u.Tooltip, {
                        position: "top",
                        text: e.description,
                        spacing: 12,
                        children: t => (0, s.jsx)(u.Anchor, {
                            ...t,
                            onClick: a => {
                                var n;
                                null === (n = t.onClick) || void 0 === n || n.call(t);
                                let l = null != e.link ? (0, o.default)(e.link) : null;
                                if (null != l) return p.dispatch(A.ComponentActions.POPOUT_CLOSE), l(a)
                            },
                            href: e.link,
                            children: (0, s.jsx)("img", {
                                alt: " ",
                                "aria-hidden": !0,
                                src: e.src,
                                className: r({
                                    [S.profileBadge24]: 0 === I,
                                    [S.profileBadge22]: 1 === I,
                                    [S.profileBadge18]: 2 === I
                                })
                            })
                        })
                    }, e.id))
                })
            }(l = n || (n = {}))[l.SIZE_24 = 0] = "SIZE_24", l[l.SIZE_22 = 1] = "SIZE_22", l[l.SIZE_18 = 2] = "SIZE_18"
        },
        880114: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return T
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("65597"),
                s = a("77078"),
                i = a("535013"),
                r = a("915639"),
                u = a("476263"),
                o = a("153769"),
                c = a("299039"),
                d = a("782340"),
                f = a("334099");

            function T(e) {
                let {
                    userId: t,
                    headingClassName: a,
                    textClassName: T,
                    guild: E,
                    guildMember: A
                } = e, _ = (0, l.default)([r.default], () => r.default.locale), S = null != E && null != A;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(s.Heading, {
                        variant: "eyebrow",
                        className: a,
                        children: S ? d.default.Messages.USER_PROFILE_MEMBER_SINCE : d.default.Messages.USER_PROFILE_DISCORD_MEMBER_SINCE
                    }), (0, n.jsxs)("div", {
                        className: f.memberSinceContainer,
                        children: [S && (0, n.jsx)(s.Tooltip, {
                            text: d.default.Messages.DISCORD_NAME,
                            children: e => (0, n.jsx)(o.default, {
                                ...e,
                                className: f.discordIcon
                            })
                        }), (0, n.jsx)(s.Text, {
                            className: T,
                            variant: "text-sm/normal",
                            children: (0, i.getCreatedAtDate)(c.default.extractTimestamp(t), _)
                        }), null != E && null != A && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("div", {
                                className: f.divider
                            }), (0, n.jsx)(s.Tooltip, {
                                text: E.name,
                                children: e => (0, n.jsx)(u.default, {
                                    ...e,
                                    guild: E,
                                    size: u.default.Sizes.SMOL
                                })
                            }), (0, n.jsx)(s.Text, {
                                className: T,
                                variant: "text-sm/normal",
                                children: (0, i.getCreatedAtDate)(A.joinedAt, _)
                            })]
                        })]
                    })]
                })
            }
        },
        10532: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("414456"),
                s = a.n(l),
                i = a("193853");

            function r(e) {
                let {
                    className: t
                } = e;
                return (0, n.jsx)("div", {
                    className: s(i.divider, t)
                })
            }
        },
        935409: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                UserPopoutBadgeList: function() {
                    return L
                },
                UserPopoutAvatar: function() {
                    return G
                },
                default: function() {
                    return b
                }
            }), a("794252");
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                r = a("506838"),
                u = a("446674"),
                o = a("669491"),
                c = a("77078"),
                d = a("606292"),
                f = a("980215"),
                T = a("824794"),
                E = a("635471"),
                A = a("305961"),
                _ = a("423487"),
                S = a("587974"),
                m = a("599110"),
                C = a("719923"),
                g = a("50885"),
                N = a("713135"),
                v = a("106435"),
                p = a("289918"),
                I = a("878569"),
                h = a("590006"),
                M = a("430312"),
                O = a("401642"),
                U = a("590456"),
                x = a("49111"),
                R = a("646718"),
                y = a("782340"),
                j = a("524466");
            let P = c.AvatarSizes.SIZE_80,
                H = (0, d.getDecorationSizeForAvatarSize)(P);

            function L(e) {
                let {
                    user: t,
                    guildId: a,
                    isTryItOutFlow: l,
                    forProfileEffectModal: s
                } = e, i = (0, u.useStateFromStores)([N.default], () => N.default.getUserProfile(t.id), [t]), r = (0, u.useStateFromStores)([A.default], () => A.default.getGuild(a), [a]), d = (0, f.useClydeProfilesEnabled)(r);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(null == i ? void 0 : i.profileFetchFailed) && (!t.isClyde() || d) && (0, n.jsx)(c.Tooltip, {
                        text: y.default.Messages.USER_PROFILE_LOAD_ERROR,
                        spacing: 16,
                        children: e => (0, n.jsx)(_.default, {
                            ...e,
                            className: j.warningCircleIcon,
                            color: o.default.unsafe_rawColors.YELLOW_300.css
                        })
                    }), (0, n.jsx)(h.default, {
                        className: s ? j.profileBadgesCompactNoTouch : j.profileBadges,
                        user: t,
                        guildId: a,
                        isTryItOutFlow: l,
                        size: h.BadgeSizes.SIZE_22
                    })]
                })
            }
            let D = g.default.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar;

            function G(e) {
                let {
                    user: t,
                    displayProfile: a,
                    avatarSrc: s,
                    hasBanner: u,
                    status: o,
                    isMobile: d,
                    guildId: f,
                    channelId: E,
                    onClose: A,
                    disableUserProfileLink: _,
                    profileType: g,
                    animateOnHover: N,
                    hasProfileEffect: p
                } = e, {
                    profileTheme: h
                } = l.useContext(M.UserProfileContext), L = l.useContext(m.AnalyticsContext), G = t.isNonUserBot() && !t.isClyde(), b = C.default.isPremiumAtLeast(null == a ? void 0 : a.premiumType, R.PremiumTypes.TIER_2), B = l.useMemo(() => (0, T.shouldDisableUserPresenceInChannel)(t, E), [t, E]), F = _ || t.isClyde(), {
                    avatarDecorationSrc: w,
                    avatarSrc: k,
                    eventHandlers: V
                } = (0, v.default)({
                    user: t,
                    guildId: f,
                    size: P,
                    animateOnHover: N
                }), W = (0, n.jsx)("div", {
                    className: j.avatarHoverTarget,
                    ...V,
                    children: (0, n.jsx)(D, {
                        src: null != s ? s : k,
                        avatarDecoration: w,
                        size: P,
                        "aria-label": t.username,
                        status: B ? x.StatusTypes.UNKNOWN : o,
                        statusBackdropColor: null != h && b && !B ? (0, c.getStatusBackdropColor)(h) : void 0,
                        isMobile: d,
                        statusTooltip: !0
                    })
                }), Y = (0, r.match)(g).with(U.UserProfileTypes.POPOUT, () => {
                    let e = (0, I.buildGetPremiumUserBannerStyles)({
                        premiumUserWithBanner: j.avatarPositionPremiumBanner,
                        premiumUserWithoutBanner: j.avatarPositionPremiumNoBanner,
                        default: j.avatarPositionNormal
                    });
                    return e({
                        isPremium: b && !G,
                        hasBanner: u,
                        hasProfileEffect: p
                    })
                }).with(U.UserProfileTypes.POMELO_POPOUT, () => j.avatarPositionPomelo).with(U.UserProfileTypes.PANEL, () => j.avatarPositionPanel).exhaustive();
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)(c.Clickable, {
                        className: i({
                            [j.clickable]: !F,
                            [j.avatarWrapperNonUserBot]: G,
                            [j.avatarWrapperNormal]: !G
                        }, Y),
                        onClick: G || F ? void 0 : function() {
                            (0, O.openUserProfileModal)({
                                userId: t.id,
                                guildId: null != f ? f : void 0,
                                channelId: null != E ? E : void 0,
                                analyticsLocation: L.location
                            }), null == A || A()
                        },
                        children: [W, !F && function() {
                            let e = null != w,
                                t = e ? H : (0, c.getAvatarSize)(P);
                            return (0, n.jsx)(S.default, {
                                mask: null == o || o === x.StatusTypes.UNKNOWN || B ? S.default.Masks.AVATAR_DEFAULT : (0, r.match)([e, d]).with([!0, !0], () => S.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => S.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => S.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => S.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
                                className: e ? j.avatarDecorationHint : j.avatarHint,
                                style: e ? {
                                    borderRadius: .4 * t
                                } : void 0,
                                width: t,
                                height: t,
                                children: (0, n.jsx)("div", {
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
                    displayProfile: a,
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
                return (0, n.jsxs)(n.Fragment, {
                    children: [T, (0, n.jsx)(p.default, {
                        user: t,
                        displayProfile: a,
                        onClose: i,
                        guildId: l,
                        profileType: U.UserProfileTypes.POPOUT,
                        showPremiumBadgeUpsell: f,
                        isHovering: d,
                        hasProfileEffect: (null == a ? void 0 : a.profileEffectId) != null
                    }), (null == a ? void 0 : a.profileEffectId) != null && (0, n.jsx)(E.default, {
                        profileEffectId: null == a ? void 0 : a.profileEffectId,
                        bannerAdjustment: 0,
                        isHovering: d
                    }), (0, n.jsx)(G, {
                        user: t,
                        displayProfile: a,
                        status: u ? x.StatusTypes.STREAMING : o,
                        isMobile: r,
                        guildId: l,
                        channelId: s,
                        onClose: i,
                        disableUserProfileLink: c,
                        hasBanner: (null == a ? void 0 : a.banner) != null,
                        hasProfileEffect: (null == a ? void 0 : a.profileEffectId) != null,
                        profileType: U.UserProfileTypes.POPOUT
                    }), (0, n.jsx)(L, {
                        user: t,
                        guildId: l
                    })]
                })
            }
        },
        648149: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("77078"),
                s = a("224038");

            function i(e) {
                let {
                    user: t,
                    nickname: a
                } = e, i = null != a;
                return (0, n.jsx)(l.Avatar, {
                    src: t.getAvatarURL(void 0, i ? 16 : 24),
                    size: i ? l.AvatarSizes.SIZE_16 : l.AvatarSizes.SIZE_24,
                    className: i ? s.miniAvatar : s.largeAvatar,
                    "aria-hidden": !0
                })
            }
        },
        777003: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("414456"),
                s = a.n(l),
                i = a("383957");

            function r(e) {
                let {
                    children: t,
                    lastSection: a = !1,
                    className: l,
                    ...r
                } = e;
                return (0, n.jsx)("div", {
                    className: s(i.section, l, {
                        [i.lastSection]: a
                    }),
                    ...r,
                    children: t
                })
            }
        },
        369869: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return g
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("414456"),
                s = a.n(l),
                i = a("446674"),
                r = a("77078"),
                u = a("997289"),
                o = a("697218"),
                c = a("476263"),
                d = a("216422"),
                f = a("719923"),
                T = a("485422"),
                E = a("777003"),
                A = a("49111"),
                _ = a("782340"),
                S = a("125234"),
                m = a("814076");

            function C(e) {
                let {
                    guildName: t
                } = e;
                return (0, n.jsxs)("div", {
                    className: S.guildMemberProfileTooltip,
                    children: [(0, n.jsx)(d.default, {
                        className: S.guildMemberProfileTooltipNitroWheel
                    }), _.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                        guildName: t
                    })]
                })
            }

            function g(e) {
                let {
                    guild: t,
                    bio: l,
                    hidePersonalInformation: d,
                    isUsingGuildBio: g,
                    lastSection: N = !1,
                    animateOnHover: v = !1,
                    isHovering: p = !1,
                    lineClamp: I
                } = e, {
                    location: h
                } = (0, u.useAnalyticsContext)(), M = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()), O = f.default.canUsePremiumGuildMemberProfile(M);
                return d || null == l || "" === l ? null : (0, n.jsxs)(E.default, {
                    lastSection: N,
                    children: [(0, n.jsxs)(r.Heading, {
                        variant: "eyebrow",
                        className: m.title,
                        children: [_.default.Messages.USER_POPOUT_ABOUT_ME, null != t && g && (0, n.jsx)(r.Tooltip, {
                            color: r.Tooltip.Colors.CUSTOM,
                            tooltipClassName: S.aboutMeGuildIconTooltip,
                            "aria-label": _.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                                guildName: t.name
                            }),
                            text: (0, n.jsx)(C, {
                                guildName: t.name
                            }),
                            children: e => (0, n.jsx)(c.default, {
                                ...e,
                                onClick: () => {
                                    var t;
                                    null == (t = e.onClick) || t(), null != M && !O && (0, r.openModalLazy)(async () => {
                                        let {
                                            default: e
                                        } = await a.el("414242").then(a.bind(a, "414242"));
                                        return t => (0, n.jsx)(e, {
                                            ...t,
                                            source: {
                                                ...h,
                                                object: A.AnalyticsObjects.GUILD_ICON
                                            }
                                        })
                                    })
                                },
                                guild: t,
                                size: c.default.Sizes.SMOL,
                                className: s(S.aboutMeGuildIcon, {
                                    [S.nonPremiumHoverState]: !O
                                })
                            })
                        })]
                    }), (0, n.jsx)(T.default, {
                        userBio: l,
                        animateOnHover: v,
                        isHovering: p,
                        lineClamp: I
                    })]
                })
            }
        },
        802279: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("775377"),
                s = a("777003"),
                i = a("184256");

            function r(e) {
                let {
                    customStatusActivity: t,
                    className: a,
                    animate: r
                } = e;
                return null == t ? null : (0, n.jsx)(s.default, {
                    className: a,
                    children: (0, n.jsx)(l.default, {
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
        465215: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("880114"),
                s = a("777003"),
                i = a("814076");

            function r(e) {
                let {
                    userId: t,
                    guild: a,
                    guildMember: r
                } = e;
                return (0, n.jsx)(s.default, {
                    children: (0, n.jsx)(l.default, {
                        userId: t,
                        guild: a,
                        guildMember: r,
                        headingClassName: i.title,
                        textClassName: i.body
                    })
                })
            }
        },
        491250: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return T
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("414456"),
                s = a.n(l),
                i = a("77078"),
                r = a("145079"),
                u = a("123377"),
                o = a("158998"),
                c = a("777003"),
                d = a("782340"),
                f = a("119111");

            function T(e) {
                let {
                    user: t,
                    shouldCopyOnClick: a,
                    nickname: l,
                    pronouns: T,
                    usernameIcon: E,
                    identityCTA: A,
                    className: _,
                    isTryItOut: S = !1,
                    lastSection: m
                } = e;
                return (0, n.jsx)(c.default, {
                    className: s(f.container, _),
                    lastSection: m,
                    children: (0, n.jsxs)("div", {
                        className: a ? f.copiableNameTag : void 0,
                        children: [(0, n.jsx)(u.CopiableField, {
                            className: f.copiableField,
                            copyMetaData: "User Tag",
                            copyValue: o.default.getUserTag(t, {
                                decoration: "never",
                                identifiable: "always"
                            }),
                            showCopyIcon: !0,
                            disableCopy: !a,
                            children: (0, n.jsxs)("div", {
                                className: f.userText,
                                children: [null != l ? (0, n.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: f.nickname,
                                    children: l
                                }) : null, (0, n.jsx)(r.default, {
                                    usernameIcon: E,
                                    user: t,
                                    forceUsername: !0,
                                    forcePomelo: S,
                                    className: null == l ? f.userTagNoNickname : f.userTagWithNickname,
                                    usernameClass: null == l ? f.userTagUsernameNoNickname : f.userTagUsernameBase,
                                    discriminatorClass: null == l ? f.userTagDiscriminatorNoNickname : f.discrimBase,
                                    botClass: null == l ? f.headerBotTag : f.headerBotTagWithNickname
                                }), A]
                            })
                        }), null != T && "" !== T && (0, n.jsx)(i.Tooltip, {
                            text: d.default.Messages.USER_PROFILE_PRONOUNS,
                            children: e => (0, n.jsx)(i.Text, {
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
        153769: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("469563"),
                s = a("267527"),
                i = a("75196"),
                r = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 28,
                        height: a = 20,
                        color: l = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: a,
                        viewBox: "0 0 28 20",
                        children: (0, n.jsx)("path", {
                            className: s,
                            fill: l,
                            d: "M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"
                        })
                    })
                }, s.ClydeIcon, void 0, {
                    size: 28
                })
        },
        137783: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("75196");

            function s(e) {
                let {
                    width: t = 16,
                    height: a = 16,
                    color: s = "currentColor",
                    foreground: i,
                    ...r
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, l.default)(r),
                    width: t,
                    height: a,
                    viewBox: "0 0 16 16",
                    children: (0, n.jsx)("path", {
                        className: i,
                        fill: s,
                        d: "M6,7 L2,7 L2,6 L6,6 L6,7 Z M8,5 L2,5 L2,4 L8,4 L8,5 Z M8,3 L2,3 L2,2 L8,2 L8,3 Z M8.88888889,0 L1.11111111,0 C0.494444444,0 0,0.494444444 0,1.11111111 L0,8.88888889 C0,9.50253861 0.497461389,10 1.11111111,10 L8.88888889,10 C9.50253861,10 10,9.50253861 10,8.88888889 L10,1.11111111 C10,0.494444444 9.5,0 8.88888889,0 Z",
                        transform: "translate(3 3)"
                    })
                })
            }
        },
        655665: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                ClydeIcon: function() {
                    return i
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("669491"),
                s = a("82169");
            let i = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 0 0 .96 17.7a18.43 18.43 0 0 0 5.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83ZM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27Zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27Z",
                        className: r
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=94491.c11727d785ade7ea0cf8.js.map