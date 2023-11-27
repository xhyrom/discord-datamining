(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["11033"], {
        979295: function(e, t, n) {
            "use strict";
            e.exports = n.p + "bf10b4db797e1264170f.gif"
        },
        672407: function(e, t, n) {
            "use strict";
            e.exports = n.p + "fe7719aef8a8e68f0648.gif"
        },
        341117: function(e, t, n) {
            "use strict";
            e.exports = n.p + "444ef3f0048b8d30799f.gif"
        },
        268351: function(e, t, n) {
            "use strict";
            e.exports = n.p + "70d38d06990a137df664.gif"
        },
        528906: function(e, t, n) {
            "use strict";
            e.exports = n.p + "32f57771152bf03eeff1.gif"
        },
        220054: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f49a39b40eb9d180fc88.gif"
        },
        696246: function(e, t, n) {
            "use strict";
            e.exports = n.p + "23808e559cfef1d23276.svg"
        },
        231185: function(e, t, n) {
            "use strict";
            e.exports = n.p + "606576712b69844bb246.svg"
        },
        943722: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ActivityEmoji: function() {
                    return N
                },
                default: function() {
                    return I
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                i = n("414456"),
                s = n.n(i),
                r = n("446674"),
                u = n("77078"),
                o = n("430568"),
                d = n("309570"),
                c = n("29088"),
                f = n("867805"),
                E = n("699209"),
                _ = n("342845"),
                T = n("845579"),
                S = n("42203"),
                A = n("800762"),
                m = n("137783"),
                g = n("49111"),
                C = n("205341");

            function N(e) {
                let {
                    emoji: t,
                    className: n,
                    animate: l = !0,
                    hideTooltip: i
                } = e, r = T.AnimateEmoji.useSetting(), d = null != t.id ? ":".concat(t.name, ":") : f.default.translateSurrogatesToInlineEmoji(t.name), c = {
                    className: s(C.emoji, n),
                    emojiId: t.id,
                    emojiName: t.name,
                    autoplay: !0,
                    animated: !!(t.animated && r && l)
                };
                return i ? (0, a.jsx)(o.default, {
                    ...c
                }) : (0, a.jsx)(u.Tooltip, {
                    text: d,
                    children: e => (0, a.jsx)(o.default, {
                        ...e,
                        ...c
                    })
                })
            }
            let v = e => {
                let {
                    className: t,
                    text: n
                } = e, i = l.useRef(null), r = l.useRef(null), [o, d] = l.useState(!1);
                return l.useLayoutEffect(() => {
                    let {
                        current: e
                    } = i, {
                        current: t
                    } = r;
                    if (null == e || null == t) return;
                    let n = e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight;
                    d(!n)
                }, [n]), (0, a.jsx)(u.Tooltip, {
                    text: o || null == n || "" === n ? null : n,
                    delay: 150,
                    "aria-label": !1,
                    children: e => (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            ...e,
                            className: t,
                            ref: i,
                            children: n
                        }), (0, a.jsx)("div", {
                            className: s(C.textRuler, t),
                            ref: r,
                            "aria-hidden": !0,
                            children: n
                        })]
                    })
                })
            };
            var I = e => {
                var t;
                let {
                    activities: n,
                    applicationStream: l,
                    className: i,
                    textClassName: s,
                    emojiClassName: u,
                    animate: o = !0,
                    hideTooltip: f = !1,
                    hideEmoji: T = !1,
                    user: I
                } = e, p = null != n ? n.find(e => e.type === g.ActivityTypes.CUSTOM_STATUS) : null, M = null != n ? n.find(e => e.type === g.ActivityTypes.HANG_STATUS) : null, h = (0, r.useStateFromStores)([A.default, S.default], () => {
                    var e;
                    return null != M && null != I ? S.default.getChannel(null === (e = A.default.getVoiceStateForUser(I.id)) || void 0 === e ? void 0 : e.channelId) : null
                }), {
                    enableHangStatus: O
                } = E.HangStatusExperiment.useExperiment({
                    guildId: null !== (t = null == h ? void 0 : h.guild_id) && void 0 !== t ? t : "",
                    location: "ActivityStatus"
                }), U = null;
                O && null != M ? U = (0, a.jsx)(_.default, {
                    className: u,
                    hangStatusActivity: M
                }) : null != p && null != p.emoji && !T && (U = (0, a.jsx)(N, {
                    emoji: p.emoji,
                    animate: o,
                    hideTooltip: f,
                    className: u
                }));
                let R = (0, c.default)(n, l, void 0, O),
                    P = null != R && R.length > 0;
                return null != U || P ? (0, a.jsxs)("div", {
                    className: i,
                    children: [U, (0, a.jsx)(v, {
                        text: R,
                        className: s
                    }), null != n && n.some(d.default) ? (0, a.jsx)(m.default, {
                        width: 16,
                        height: 16,
                        className: C.icon
                    }) : null]
                }) : null
            }
        },
        267527: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClydeIcon: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("669491"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M19.733 4.866a18.196 18.196 0 0 0-4.597-1.437c-.216.395-.415.8-.59 1.215a17.084 17.084 0 0 0-5.093 0c-.18-.414-.377-.82-.593-1.21-1.59.273-3.136.753-4.602 1.437C1.343 9.239.557 13.503.952 17.7a18.43 18.43 0 0 0 5.641 2.87c.456-.622.86-1.286 1.205-1.979a11.646 11.646 0 0 1-1.904-.923c.162-.118.318-.236.47-.368a13.056 13.056 0 0 0 11.273 0c.151.128.307.25.463.368-.606.363-1.245.674-1.903.923.35.693.75 1.353 1.205 1.975a18.427 18.427 0 0 0 5.64-2.87h.006c.463-4.863-.791-9.085-3.315-12.831ZM8.297 15.118c-1.1 0-2.005-1.022-2.005-2.266s.884-2.267 2.005-2.267c1.122 0 2.023 1.023 2.005 2.267 0 1.244-.888 2.266-2.005 2.266Zm7.402 0c-1.1 0-2.005-1.022-2.005-2.266s.888-2.267 2.005-2.267 2.022 1.023 2.005 2.267c0 1.244-.888 2.266-2.005 2.266Z",
                        className: r
                    })
                })
            }
        },
        875212: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTriggerDebuggingAA: function() {
                    return i
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

            function i(e) {
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
                    return s
                }
            });
            var a = n("954016"),
                l = n("49111");

            function i(e) {
                return e.type === l.ActivityTypes.STREAMING && null != e.url && a.validStreamURL.test(e.url)
            }

            function s(e) {
                return null != e && (Array.isArray(e) ? e.some(i) : i(e))
            }
        },
        29088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var a = n("925749"),
                l = n("204947"),
                i = n("152311"),
                s = n("502651"),
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

            function d(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    d = arguments.length > 3 ? arguments[3] : void 0;
                if (null != e && e.type === r.ActivityTypes.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
                if (null != t) return null == e || e.type !== r.ActivityTypes.PLAYING ? u.default.Messages.SHARING_SCREEN : o(n)[r.ActivityTypes.STREAMING].format({
                    name: e.name
                });
                if (d && null != e && e.type === r.ActivityTypes.HANG_STATUS) return (0, a.getHangStatusText)(e);
                if (null == e || null == e.name) return null;
                if ((0, s.default)(e)) {
                    let t = null != e.details && "" !== e.details ? e.details : e.name;
                    return o(n)[r.ActivityTypes.STREAMING].format({
                        name: t
                    })
                }
                return (0, i.default)(e) ? (0, l.default)(e.name) : function(e, t, n) {
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

            function c(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = arguments.length > 3 ? arguments[3] : void 0;
                if (Array.isArray(e)) {
                    let l = e;
                    return null != t && (l = [...l, null]), l.map(e => d(e, t, n, a)).find(e => null != e)
                }
                return d(e, t, n, a)
            }
        },
        473591: function(e, t, n) {
            "use strict";
            let a, l, i, s, r, u;
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var o = n("446674"),
                d = n("913144");
            let c = !1,
                f = !1,
                E = null,
                _ = {},
                T = {},
                S = {},
                A = {};

            function m() {
                a = void 0, l = void 0, i = void 0, s = void 0, r = void 0, E = null
            }
            class g extends o.default.Store {
                getSettings(e) {
                    if (null != e) return S[e]
                }
                getProfile(e) {
                    return null == e ? null : _[e]
                }
                getGeneratedPersonality() {
                    return u
                }
                getPendingPersonality() {
                    return a
                }
                getPendingNick() {
                    return l
                }
                getErrors() {
                    return E
                }
                hasPendingChanges() {
                    return void 0 !== a || void 0 !== l || void 0 !== i || void 0 !== s || void 0 !== r
                }
                getPendingUpdates() {
                    return {
                        pendingAvatar: i,
                        pendingNick: l,
                        pendingPersonality: a,
                        pendingBanner: s,
                        pendingThemeColors: r
                    }
                }
                isSavingSettings() {
                    return c
                }
                isFetchingSettings(e) {
                    var t;
                    return null === (t = A[e]) || void 0 === t ? void 0 : t.isFetching
                }
                shouldFetchSettings(e) {
                    var t, n;
                    let a = null !== (t = A[e]) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        l = Date.now(),
                        i = l - (null !== (n = a.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 36e5;
                    return !(null == a ? void 0 : a.isFetching) && i
                }
                isFetchingProfile(e) {
                    var t;
                    return null === (t = T[e]) || void 0 === t ? void 0 : t.isFetching
                }
                isEditingClydeProfile() {
                    return f
                }
            }
            g.displayName = "ClydeStore";
            var C = new g(d.default, {
                CLYDE_GUILD_SETTINGS_FETCH_START: function(e) {
                    let {
                        guildId: t
                    } = e, n = A[t];
                    A[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_GUILD_SETTINGS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        settings: n
                    } = e;
                    A[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    }, S[t] = n
                },
                CLYDE_GUILD_SETTINGS_FETCH_FAIL: function(e) {
                    let {
                        guildId: t
                    } = e, n = A[t];
                    A[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_SET_PENDING_PERSONALITY: function(e) {
                    let {
                        personality: t,
                        isGenerated: n
                    } = e;
                    a = t, n && (u = t)
                },
                CLYDE_SET_PENDING_NICK: function(e) {
                    let {
                        nick: t
                    } = e;
                    l = t
                },
                CLYDE_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    i = t
                },
                CLYDE_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    s = t
                },
                CLYDE_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    r = t
                },
                CLYDE_GUILD_SETTINGS_SAVE_START: function() {
                    E = null, c = !0
                },
                CLYDE_GUILD_SETTINGS_SAVE_SUCCESS: function(e) {
                    let {
                        settings: t
                    } = e;
                    c = !1, S[t.guild_id] = t, m()
                },
                CLYDE_GUILD_SETTINGS_SAVE_FAIL: function(e) {
                    c = !1, E = e.errors
                },
                CLYDE_RESET_PENDING_CHANGES: m,
                CLYDE_PROFILE_FETCH_START: function(e) {
                    let {
                        clydeProfileId: t
                    } = e, n = T[t];
                    T[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_FETCH_SUCCESS: function(e) {
                    let {
                        profile: t
                    } = e;
                    T[t.clyde_profile_id] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    }, _[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_FETCH_FAIL: function(e) {
                    let {
                        clydeProfileId: t
                    } = e, n = T[t];
                    T[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_CREATE_SUCCESS: function(e) {
                    let {
                        profile: t
                    } = e;
                    _[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_EDITING_START: function() {
                    f = !0
                },
                CLYDE_PROFILE_EDITING_END: function() {
                    f = !1
                }
            })
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
                i = n.n(l),
                s = n("943722"),
                r = n("462339");

            function u(e) {
                let {
                    activity: t,
                    className: n,
                    emojiClassName: l,
                    textClassName: u,
                    placeholderText: o,
                    soloEmojiClassName: d,
                    animate: c = !0,
                    hideTooltip: f = !1,
                    hideEmoji: E = !1,
                    children: _
                } = e;
                if (null == t) return null;
                let {
                    emoji: T
                } = t, S = null != t.state && "" !== t.state ? t.state : o;
                return (0, a.jsxs)("div", {
                    className: i(r.container, n),
                    children: [E || null == T ? null : (0, a.jsx)(s.ActivityEmoji, {
                        emoji: T,
                        className: i(r.emoji, l, null != d ? {
                            [d]: null == S || "" === S
                        } : null),
                        animate: c,
                        hideTooltip: f
                    }), null != S && S.length > 0 ? (0, a.jsx)("span", {
                        className: u,
                        children: S
                    }) : null, _]
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
                    return c
                },
                getHangStatusDetails: function() {
                    return f
                },
                getHangStatusText: function() {
                    return E
                }
            });
            var a = n("49111"),
                l = n("782340"),
                i = n("979295"),
                s = n("672407"),
                r = n("341117"),
                u = n("268351"),
                o = n("528906"),
                d = n("220054");
            let c = () => ({
                    [a.HangStatusTypes.CHILLING]: {
                        title: l.default.Messages.STATUS_CHILLING,
                        icon: s,
                        color: "#395153",
                        size: null
                    },
                    [a.HangStatusTypes.GAMING]: {
                        title: l.default.Messages.STATUS_GAMING,
                        icon: o,
                        color: "#554E72",
                        size: null
                    },
                    [a.HangStatusTypes.FOCUSING]: {
                        title: l.default.Messages.STATUS_FOCUSING,
                        icon: i,
                        color: "#725F4E",
                        size: "28px"
                    },
                    [a.HangStatusTypes.BRB]: {
                        title: l.default.Messages.STATUS_BRB,
                        icon: u,
                        color: "#6B4E72",
                        size: "26px"
                    },
                    [a.HangStatusTypes.EATING]: {
                        title: l.default.Messages.STATUS_EATING,
                        icon: d,
                        color: "#57724E",
                        size: "20px"
                    },
                    [a.HangStatusTypes.IN_TRANSIT]: {
                        title: l.default.Messages.STATUS_IN_TRANSIT,
                        icon: r,
                        color: "#726C4E",
                        size: null
                    }
                }),
                f = e => {
                    if ((null == e ? void 0 : e.type) !== a.ActivityTypes.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
                    let t = e.state;
                    return t === a.HangStatusTypes.CUSTOM ? null : c()[t]
                };

            function E(e) {
                var t;
                let n = (null == e ? void 0 : e.state) != null ? e.state : null;
                return n === a.HangStatusTypes.CUSTOM ? null == e ? void 0 : e.details : null === (t = f(e)) || void 0 === t ? void 0 : t.title
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
                i = n("925749"),
                s = n("49111"),
                r = e => {
                    var t;
                    let {
                        className: n,
                        hangStatusActivity: r
                    } = e;
                    if ((null == r ? void 0 : r.state) === s.HangStatusTypes.CUSTOM) return null != r.emoji ? (0, a.jsx)(l.ActivityEmoji, {
                        emoji: r.emoji,
                        className: n,
                        hideTooltip: !0
                    }) : null;
                    let u = null === (t = (0, i.getHangStatusDetails)(r)) || void 0 === t ? void 0 : t.icon;
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
                    return i
                },
                EDITING_CONTAINER_WIDTH: function() {
                    return u
                },
                USER_BANNER_MAX_WIDTH: function() {
                    return o
                },
                USER_BANNER_MAX_HEIGHT: function() {
                    return d
                },
                GUILD_BANNER_MAX_WIDTH: function() {
                    return c
                },
                GUILD_BANNER_MAX_HEIGHT: function() {
                    return f
                },
                SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
                    return E
                },
                SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                    return _
                },
                HOME_HEADER_MAX_WIDTH: function() {
                    return T
                },
                HOME_HEADER_MAX_HEIGHT: function() {
                    return S
                },
                BANNER_ASPECT_RATIO: function() {
                    return A
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return m
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return g
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return C
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return N
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return v
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return I
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return p
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return M
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return h
                },
                MessageTypes: function() {
                    return s
                }
            });
            var a, l, i, s, r = n("917219");
            (a = i || (i = {}))[a.AVATAR = 0] = "AVATAR", a[a.BANNER = 1] = "BANNER", a[a.GUILD_BANNER = 2] = "GUILD_BANNER", a[a.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", a[a.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", a[a.HOME_HEADER = 5] = "HOME_HEADER", a[a.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let u = 568,
                o = 2400,
                d = 848,
                c = 2400,
                f = 1350,
                E = 2400,
                _ = 960,
                T = 2400,
                S = 600,
                A = 17 / 6,
                m = 16 / 9,
                g = 2.5,
                C = 4,
                N = u / A,
                v = u / m,
                I = u / g,
                p = u / C,
                M = r.BACKGROUND_REPLACEMENT_SIZE.width / r.BACKGROUND_REPLACEMENT_SIZE.height,
                h = u / M;
            (l = s || (s = {}))[l.CROP_GIF_START = 0] = "CROP_GIF_START", l[l.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", l[l.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        },
        123377: function(e, t, n) {
            "use strict";
            let a, l;
            n.r(t), n.d(t, {
                CopiableField: function() {
                    return A
                }
            }), n("222007");
            var i = n("37983"),
                s = n("884691"),
                r = n("414456"),
                u = n.n(r),
                o = n("862337"),
                d = n("77078"),
                c = n("413709"),
                f = n("599110"),
                E = n("306160"),
                _ = n("49111"),
                T = n("782340"),
                S = n("491701");

            function A(e) {
                var t;
                let {
                    className: n,
                    copyValue: r,
                    copyMetaData: A,
                    children: m,
                    disableCopy: g,
                    showCopyIcon: C
                } = e, [N, v] = s.useState(0), [I, p] = s.useState(!1), [M, h] = s.useState(!1);
                if (s.useEffect(() => (a = new o.Timeout, l = new o.Timeout, function() {
                        a.stop(), l.stop()
                    }), []), !E.SUPPORTS_COPY || g) return (0, i.jsx)(i.Fragment, {
                    children: m
                });
                let O = [T.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_1, T.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_2, T.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_3, T.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_4, T.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_5, T.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_6, T.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_7, T.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_8, T.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_9, T.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_10, T.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_11],
                    U = Math.min(Math.max(N - 1, 0), O.length - 1),
                    R = null !== (t = O[U]) && void 0 !== t ? t : O[0],
                    P = N >= O.length - 1,
                    x = P ? d.TooltipColors.RED : d.TooltipColors.GREEN,
                    L = I ? x : d.TooltipColors.PRIMARY,
                    y = () => {
                        a.stop(), h(!1)
                    },
                    D = e => {
                        (0, E.copy)(r), f.default.track(_.AnalyticEvents.TEXT_COPIED, {
                            type: A
                        }), "function" == typeof e && e(), !M && v(N + 1), h(!0), p(!0), a.start(1e3, () => h(!1)), l.start(2e3, () => v(0))
                    };
                return (0, i.jsx)(d.Tooltip, {
                    delay: 500,
                    color: L,
                    forceOpen: M,
                    text: I ? (0, i.jsx)(d.Shaker, {
                        isShaking: P,
                        children: R
                    }) : T.default.Messages.ACCOUNT_CLICK_TO_COPY,
                    onAnimationRest: (e, t) => {
                        !M && I && t.phase === _.SpringTransitionPhases.LEAVE && p(!1)
                    },
                    "aria-label": T.default.Messages.ACCOUNT_CLICK_TO_COPY,
                    children: e => {
                        let {
                            onClick: t,
                            onMouseEnter: a,
                            ...l
                        } = e;
                        return (0, i.jsx)(d.Clickable, {
                            ...l,
                            className: S.clickTarget,
                            onMouseEnter: () => {
                                I ? y() : "function" == typeof a && a()
                            },
                            onClick: () => {
                                D(t)
                            },
                            children: (0, i.jsxs)("div", {
                                className: u(n, S.copiableWrapper),
                                children: [(0, i.jsx)("div", {
                                    className: S.childWrapper,
                                    children: m
                                }), C ? (0, i.jsx)("div", {
                                    className: S.copyIconWrapper,
                                    children: (0, i.jsx)(c.default, {
                                        width: 18,
                                        height: 18,
                                        className: S.copyIcon
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
        737403: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                maybeOpenProfilePreviewModal: function() {
                    return l
                }
            });
            var a = n("913144");

            function l(e) {
                let {
                    imageSrc: t,
                    file: n,
                    uploadType: l,
                    guildId: i,
                    isTryItOutFlow: s = !1
                } = e;
                a.default.dispatch({
                    type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
                    imageSrc: t,
                    file: n,
                    uploadType: l,
                    guildId: i,
                    isTryItOutFlow: s
                })
            }
        },
        453252: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return a
                }
            });
            let a = 10485760
        },
        771325: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                handleOpenSelectImageModal: function() {
                    return _
                },
                showFileSizeErrorModal: function() {
                    return T
                },
                getPreviewAvatar: function() {
                    return S
                },
                getPreviewNickname: function() {
                    return A
                },
                getPreviewDisplayName: function() {
                    return m
                },
                isColorDark: function() {
                    return g
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("509043"),
                i = n("77078"),
                s = n("336522"),
                r = n("473591"),
                u = n("315102"),
                o = n("254490"),
                d = n("737403"),
                c = n("453252"),
                f = n("75015"),
                E = n("782340");

            function _(e, t, l, s) {
                (0, i.openModalLazy)(async () => {
                    let {
                        default: i
                    } = await n.el("420333").then(n.bind(n, "420333")), u = r.default.isEditingClydeProfile();
                    return n => (0, a.jsx)(i, {
                        filters: s,
                        maxFileSizeBytes: c.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                        imageSpecifications: e === f.UploadTypes.BANNER && E.default.Messages.USER_SETTINGS_PROFILE_THEMES_BANNER_MODAL_SPECS,
                        onComplete: (n, a) => (0, d.maybeOpenProfilePreviewModal)({
                            imageSrc: n,
                            file: a,
                            uploadType: e,
                            guildId: t,
                            isTryItOutFlow: l
                        }),
                        uploadType: e,
                        showUpsellHeader: !u,
                        ...n
                    })
                })
            }

            function T() {
                (0, s.openUploadError)({
                    title: E.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: E.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                        maxSize: (0, o.sizeString)(c.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
                    })
                })
            }

            function S(e, t, n) {
                let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (null != e) return e;
                let {
                    size: l = 80,
                    canAnimate: i = !0
                } = a, s = null === e;
                return s && null == t ? u.default.getDefaultAvatarURL(n.id, n.discriminator) : s || (null == t ? void 0 : t.avatar) == null ? n.getAvatarURL(void 0, l, i) : n.getAvatarURL(null == t ? void 0 : t.guildId, l, i)
            }

            function A(e, t) {
                return "" === e ? null : null != e ? e : t
            }

            function m(e, t) {
                return "" === e ? null : null != e ? e : t
            }

            function g(e) {
                let t = null != e ? (0, l.getDarkness)(e) : 1;
                return t > .25
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
                i = n("102985"),
                s = n("697218"),
                r = n("782340");
            let u = "legacy_username";

            function o(e) {
                var t;
                let n = l.LegacyUsernameDisabled.useSetting(),
                    o = (0, a.default)([s.default], () => s.default.getCurrentUser()),
                    d = (0, a.default)([i.default], () => i.default.hidePersonalInformation);
                if (null == e) return [];
                let c = null !== (t = null == e ? void 0 : e.getBadges()) && void 0 !== t ? t : [];
                return null != o && o.id === e.userId && n && (c = c.filter(e => e.id !== u)), d && (c = c.map(e => ({
                    ...e,
                    description: e.id === u ? r.default.Messages.STREAMER_MODE_ENABLED : e.description
                }))), c
            }
        },
        590006: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BadgeSizes: function() {
                    return a
                },
                default: function() {
                    return g
                }
            }), n("424973");
            var a, l, i = n("37983");
            n("884691");
            var s = n("414456"),
                r = n.n(s),
                u = n("77078"),
                o = n("572544"),
                d = n("244201"),
                c = n("298878"),
                f = n("643121"),
                E = n("217513"),
                _ = n("590456"),
                T = n("49111"),
                S = n("782340"),
                A = n("730684"),
                m = n("696246");

            function g(e) {
                let {
                    user: t,
                    guildId: n,
                    className: a,
                    shrinkAtCount: l,
                    shrinkToSize: s,
                    isTryItOutFlow: g,
                    size: C = 0
                } = e, N = (0, E.default)(t.id, n), v = (0, f.default)(N).map(e => ({
                    ...e,
                    src: (0, _.getBadgeAsset)(e.icon)
                })), I = (0, d.useWindowDispatch)();
                if (t.isClyde()) return (0, i.jsx)("div", {
                    className: r(a, A.container, A.clydeBadgeList),
                    "aria-label": S.default.Messages.PROFILE_USER_BADGES,
                    role: "group",
                    children: (0, i.jsx)(c.default, {})
                });
                g && null == v.find(e => "premium" === e.id) && v.push({
                    id: "premium",
                    icon: m,
                    src: m,
                    description: S.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                        date: new Date
                    })
                });
                let p = null != l && null != s && v.length > l ? s : C;
                return (0, i.jsx)("div", {
                    className: r(a, v.length > 0 ? A.containerWithContent : A.container),
                    "aria-label": S.default.Messages.PROFILE_USER_BADGES,
                    role: "group",
                    children: v.map(e => (0, i.jsx)(u.Tooltip, {
                        position: "top",
                        text: e.description,
                        spacing: 12,
                        children: t => (0, i.jsx)(u.Anchor, {
                            ...t,
                            onClick: n => {
                                var a;
                                null === (a = t.onClick) || void 0 === a || a.call(t);
                                let l = null != e.link ? (0, o.default)(e.link) : null;
                                if (null != l) return I.dispatch(T.ComponentActions.POPOUT_CLOSE), l(n)
                            },
                            href: e.link,
                            children: (0, i.jsx)("img", {
                                alt: " ",
                                "aria-hidden": !0,
                                src: e.src,
                                className: r({
                                    [A.profileBadge24]: 0 === p,
                                    [A.profileBadge22]: 1 === p,
                                    [A.profileBadge18]: 2 === p
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
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("65597"),
                i = n("77078"),
                s = n("535013"),
                r = n("915639"),
                u = n("476263"),
                o = n("153769"),
                d = n("299039"),
                c = n("782340"),
                f = n("334099");

            function E(e) {
                let {
                    userId: t,
                    headingClassName: n,
                    textClassName: E,
                    guild: _,
                    guildMember: T
                } = e, S = (0, l.default)([r.default], () => r.default.locale), A = null != _ && null != T;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i.Heading, {
                        variant: "eyebrow",
                        className: n,
                        children: A ? c.default.Messages.USER_PROFILE_MEMBER_SINCE : c.default.Messages.USER_PROFILE_DISCORD_MEMBER_SINCE
                    }), (0, a.jsxs)("div", {
                        className: f.memberSinceContainer,
                        children: [A && (0, a.jsx)(i.Tooltip, {
                            text: c.default.Messages.DISCORD_NAME,
                            children: e => (0, a.jsx)(o.default, {
                                ...e,
                                className: f.discordIcon
                            })
                        }), (0, a.jsx)(i.Text, {
                            className: E,
                            variant: "text-sm/normal",
                            children: (0, s.getCreatedAtDate)(d.default.extractTimestamp(t), S)
                        }), null != _ && null != T && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: f.divider
                            }), (0, a.jsx)(i.Tooltip, {
                                text: _.name,
                                children: e => (0, a.jsx)(u.default, {
                                    ...e,
                                    guild: _,
                                    size: u.default.Sizes.SMOL
                                })
                            }), (0, a.jsx)(i.Text, {
                                className: E,
                                variant: "text-sm/normal",
                                children: (0, s.getCreatedAtDate)(T.joinedAt, S)
                            })]
                        })]
                    })]
                })
            }
        },
        552243: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("301165"),
                i = n("65597"),
                s = n("206230"),
                r = e => {
                    let {
                        children: t,
                        initTranslate3d: n
                    } = e, r = (0, i.default)([s.default], () => s.default.useReducedMotion), u = (0, l.useSpring)({
                        immediate: r,
                        from: {
                            transform: n
                        },
                        to: {
                            transform: "translate3d(0, 0, 0)"
                        }
                    });
                    return (0, a.jsx)(l.animated.div, {
                        style: u,
                        children: t
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
                i = n.n(l),
                s = n("193853");

            function r(e) {
                let {
                    className: t
                } = e;
                return (0, a.jsx)("div", {
                    className: i(s.divider, t)
                })
            }
        },
        935409: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserPopoutBadgeList: function() {
                    return B
                },
                UserPopoutAvatar: function() {
                    return Y
                },
                default: function() {
                    return k
                }
            }), n("794252");
            var a = n("37983"),
                l = n("884691"),
                i = n("414456"),
                s = n.n(i),
                r = n("506838"),
                u = n("446674"),
                o = n("669491"),
                d = n("77078"),
                c = n("606292"),
                f = n("688318"),
                E = n("980215"),
                _ = n("824794"),
                T = n("635471"),
                S = n("305961"),
                A = n("790618"),
                m = n("697218"),
                g = n("423487"),
                C = n("587974"),
                N = n("599110"),
                v = n("719923"),
                I = n("50885"),
                p = n("713135"),
                M = n("106435"),
                h = n("289918"),
                O = n("878569"),
                U = n("590006"),
                R = n("430312"),
                P = n("401642"),
                x = n("552243"),
                L = n("590456"),
                y = n("49111"),
                D = n("646718"),
                j = n("782340"),
                G = n("524466"),
                H = n("231185");
            let F = d.AvatarSizes.SIZE_80,
                b = (0, c.getDecorationSizeForAvatarSize)(F);

            function B(e) {
                let {
                    user: t,
                    guildId: n,
                    isTryItOutFlow: l,
                    forProfileEffectModal: i
                } = e, s = (0, u.useStateFromStores)([p.default], () => p.default.getUserProfile(t.id), [t]), r = (0, u.useStateFromStores)([S.default], () => S.default.getGuild(n), [n]), c = (0, E.useClydeProfilesEnabled)(r);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(null == s ? void 0 : s.profileFetchFailed) && (!t.isClyde() || c) && (0, a.jsx)(d.Tooltip, {
                        text: j.default.Messages.USER_PROFILE_LOAD_ERROR,
                        spacing: 16,
                        children: e => (0, a.jsx)(g.default, {
                            ...e,
                            className: G.warningCircleIcon,
                            color: o.default.unsafe_rawColors.YELLOW_300.css
                        })
                    }), (0, a.jsx)(U.default, {
                        className: i ? G.profileBadgesCompactNoTouch : G.profileBadges,
                        user: t,
                        guildId: n,
                        isTryItOutFlow: l,
                        size: U.BadgeSizes.SIZE_22
                    })]
                })
            }
            let w = I.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar;

            function Y(e) {
                let {
                    user: t,
                    displayProfile: n,
                    avatarSrc: i,
                    hasBanner: o,
                    status: c,
                    isMobile: E,
                    guildId: T,
                    channelId: S,
                    onClose: A,
                    disableUserProfileLink: g,
                    profileType: I,
                    animateOnHover: p,
                    hasProfileEffect: h
                } = e, U = (0, u.useStateFromStores)([m.default], () => m.default.getCurrentUser()), {
                    profileTheme: B
                } = l.useContext(R.UserProfileContext), Y = l.useContext(N.AnalyticsContext), k = t.isNonUserBot() && !t.isClyde(), z = v.default.isPremiumAtLeast(null == n ? void 0 : n.premiumType, D.PremiumTypes.TIER_2), V = l.useMemo(() => (0, _.shouldDisableUserPresenceInChannel)(t, S), [t, S]), W = g || t.isClyde(), {
                    avatarDecorationSrc: Z,
                    avatarSrc: X,
                    eventHandlers: K,
                    isAnimating: Q
                } = (0, M.default)({
                    user: t,
                    guildId: T,
                    size: F,
                    animateOnHover: p
                }), {
                    avatarDecorationSrc: q
                } = (0, f.default)({
                    size: b,
                    animateOnHover: !Q,
                    showPending: t.id === (null == U ? void 0 : U.id),
                    showTryItOut: t.id === (null == U ? void 0 : U.id)
                }), J = (0, a.jsxs)("div", {
                    className: G.avatarHoverTarget,
                    ...K,
                    children: [(0, a.jsx)(w, {
                        src: null != i ? i : X,
                        avatarDecoration: null != q ? null : Z,
                        size: F,
                        "aria-label": t.username,
                        status: V ? y.StatusTypes.UNKNOWN : c,
                        statusBackdropColor: null != B && z && !V ? (0, d.getStatusBackdropColor)(B) : void 0,
                        isMobile: E,
                        statusTooltip: !0
                    }), null != q && (0, a.jsx)(x.default, {
                        initTranslate3d: "translate3d(-20px, -120px, 0)",
                        children: (0, a.jsx)(w, {
                            src: H,
                            avatarDecoration: q,
                            size: F,
                            status: y.StatusTypes.UNKNOWN,
                            isMobile: E,
                            className: G.tryingOutAvatarDecoration,
                            "aria-hidden": !0
                        })
                    }, q)]
                }), $ = (0, r.match)(I).with(L.UserProfileTypes.POPOUT, () => {
                    let e = (0, O.buildGetPremiumUserBannerStyles)({
                        premiumUserWithBanner: G.avatarPositionPremiumBanner,
                        premiumUserWithoutBanner: G.avatarPositionPremiumNoBanner,
                        default: G.avatarPositionNormal
                    });
                    return e({
                        isPremium: z && !k,
                        hasBanner: o,
                        hasProfileEffect: h
                    })
                }).with(L.UserProfileTypes.POMELO_POPOUT, () => G.avatarPositionPomelo).with(L.UserProfileTypes.PANEL, () => G.avatarPositionPanel).exhaustive();
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(d.Clickable, {
                        className: s({
                            [G.clickable]: !W,
                            [G.avatarWrapperNonUserBot]: k,
                            [G.avatarWrapperNormal]: !k
                        }, $),
                        onClick: k || W ? void 0 : function() {
                            (0, P.openUserProfileModal)({
                                userId: t.id,
                                guildId: null != T ? T : void 0,
                                channelId: null != S ? S : void 0,
                                analyticsLocation: Y.location
                            }), null == A || A()
                        },
                        children: [J, !W && function() {
                            let e = null != Z,
                                t = e ? b : (0, d.getAvatarSize)(F);
                            return (0, a.jsx)(C.default, {
                                mask: null == c || c === y.StatusTypes.UNKNOWN || V ? C.default.Masks.AVATAR_DEFAULT : (0, r.match)([e, E]).with([!0, !0], () => C.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => C.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => C.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => C.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
                                className: e ? G.avatarDecorationHint : G.avatarHint,
                                style: e ? {
                                    borderRadius: .4 * t
                                } : void 0,
                                width: t,
                                height: t,
                                children: (0, a.jsx)("div", {
                                    className: G.avatarHintInner,
                                    children: j.default.Messages.VIEW_PROFILE
                                })
                            })
                        }()]
                    })
                })
            }

            function k(e) {
                let {
                    user: t,
                    displayProfile: n,
                    guildId: l,
                    channelId: i,
                    onClose: s,
                    isMobile: r,
                    isStreaming: o,
                    status: d,
                    disableUserProfileLink: c,
                    isHovering: f,
                    showPremiumBadgeUpsell: E = !0,
                    showCollectiblesUpsell: _ = !1,
                    upsell: S
                } = e, g = (0, u.useStateFromStores)([m.default], () => m.default.getCurrentUser()), C = (0, u.useStateFromStores)([A.default], () => A.default.getTryItOutProfileEffectID()), N = null;
                return _ && t.id === (null == g ? void 0 : g.id) && null != C && (N = C), null === N && (N = null == n ? void 0 : n.profileEffectID), (0, a.jsxs)(a.Fragment, {
                    children: [S, (0, a.jsx)(h.default, {
                        user: t,
                        displayProfile: n,
                        onClose: s,
                        guildId: l,
                        profileType: L.UserProfileTypes.POPOUT,
                        showPremiumBadgeUpsell: E,
                        isHovering: f,
                        overrideHasProfileEffect: _
                    }), null != N && (0, a.jsx)(T.default, {
                        profileEffectID: N,
                        bannerAdjustment: 0,
                        isHovering: f
                    }), (0, a.jsx)(Y, {
                        user: t,
                        displayProfile: n,
                        status: o ? y.StatusTypes.STREAMING : d,
                        isMobile: r,
                        guildId: l,
                        channelId: i,
                        onClose: s,
                        disableUserProfileLink: c,
                        hasBanner: (null == n ? void 0 : n.banner) != null,
                        hasProfileEffect: _ || null != N,
                        profileType: L.UserProfileTypes.POPOUT
                    }), (0, a.jsx)(B, {
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
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                i = n("224038");

            function s(e) {
                let {
                    user: t,
                    nickname: n
                } = e, s = null != n;
                return (0, a.jsx)(l.Avatar, {
                    src: t.getAvatarURL(void 0, s ? 16 : 24),
                    size: s ? l.AvatarSizes.SIZE_16 : l.AvatarSizes.SIZE_24,
                    className: s ? i.miniAvatar : i.largeAvatar,
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
                i = n.n(l),
                s = n("383957");

            function r(e) {
                let {
                    children: t,
                    lastSection: n = !1,
                    className: l,
                    ...r
                } = e;
                return (0, a.jsx)("div", {
                    className: i(s.section, l, {
                        [s.lastSection]: n
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
                    return C
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                i = n.n(l),
                s = n("446674"),
                r = n("77078"),
                u = n("997289"),
                o = n("697218"),
                d = n("476263"),
                c = n("216422"),
                f = n("719923"),
                E = n("485422"),
                _ = n("777003"),
                T = n("49111"),
                S = n("782340"),
                A = n("125234"),
                m = n("814076");

            function g(e) {
                let {
                    guildName: t
                } = e;
                return (0, a.jsxs)("div", {
                    className: A.guildMemberProfileTooltip,
                    children: [(0, a.jsx)(c.default, {
                        className: A.guildMemberProfileTooltipNitroWheel
                    }), S.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                        guildName: t
                    })]
                })
            }

            function C(e) {
                let {
                    guild: t,
                    bio: l,
                    hidePersonalInformation: c,
                    isUsingGuildBio: C,
                    lastSection: N = !1,
                    animateOnHover: v = !1,
                    isHovering: I = !1,
                    lineClamp: p
                } = e, {
                    location: M
                } = (0, u.useAnalyticsContext)(), h = (0, s.useStateFromStores)([o.default], () => o.default.getCurrentUser()), O = f.default.canUsePremiumGuildMemberProfile(h);
                return c || null == l || "" === l ? null : (0, a.jsxs)(_.default, {
                    lastSection: N,
                    children: [(0, a.jsxs)(r.Heading, {
                        variant: "eyebrow",
                        className: m.title,
                        children: [S.default.Messages.USER_POPOUT_ABOUT_ME, null != t && C && (0, a.jsx)(r.Tooltip, {
                            color: r.Tooltip.Colors.CUSTOM,
                            tooltipClassName: A.aboutMeGuildIconTooltip,
                            "aria-label": S.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                                guildName: t.name
                            }),
                            text: (0, a.jsx)(g, {
                                guildName: t.name
                            }),
                            children: e => (0, a.jsx)(d.default, {
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
                                                object: T.AnalyticsObjects.GUILD_ICON
                                            }
                                        })
                                    })
                                },
                                guild: t,
                                size: d.default.Sizes.SMOL,
                                className: i(A.aboutMeGuildIcon, {
                                    [A.nonPremiumHoverState]: !O
                                })
                            })
                        })]
                    }), (0, a.jsx)(E.default, {
                        userBio: l,
                        animateOnHover: v,
                        isHovering: I,
                        lineClamp: p
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
                i = n("777003"),
                s = n("184256");

            function r(e) {
                let {
                    customStatusActivity: t,
                    className: n,
                    animate: r
                } = e;
                return null == t ? null : (0, a.jsx)(i.default, {
                    className: n,
                    children: (0, a.jsx)(l.default, {
                        activity: t,
                        className: s.customStatus,
                        animate: r,
                        emojiClassName: s.customStatusEmoji,
                        soloEmojiClassName: s.customStatusSoloEmoji,
                        textClassName: s.customStatusText
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
                i = n("777003"),
                s = n("814076");

            function r(e) {
                let {
                    userId: t,
                    guild: n,
                    guildMember: r
                } = e;
                return (0, a.jsx)(i.default, {
                    children: (0, a.jsx)(l.default, {
                        userId: t,
                        guild: n,
                        guildMember: r,
                        headingClassName: s.title,
                        textClassName: s.body
                    })
                })
            }
        },
        491250: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                i = n.n(l),
                s = n("77078"),
                r = n("145079"),
                u = n("123377"),
                o = n("158998"),
                d = n("777003"),
                c = n("782340"),
                f = n("119111");

            function E(e) {
                let {
                    user: t,
                    shouldCopyOnClick: n,
                    nickname: l,
                    pronouns: E,
                    usernameIcon: _,
                    identityCTA: T,
                    className: S,
                    isTryItOut: A = !1,
                    lastSection: m
                } = e;
                return (0, a.jsx)(d.default, {
                    className: i(f.container, S),
                    lastSection: m,
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
                                children: [null != l ? (0, a.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: f.nickname,
                                    children: l
                                }) : null, (0, a.jsx)(r.default, {
                                    usernameIcon: _,
                                    user: t,
                                    forceUsername: !0,
                                    forcePomelo: A,
                                    className: null == l ? f.userTagNoNickname : f.userTagWithNickname,
                                    usernameClass: null == l ? f.userTagUsernameNoNickname : f.userTagUsernameBase,
                                    discriminatorClass: null == l ? f.userTagDiscriminatorNoNickname : f.discrimBase,
                                    botClass: null == l ? f.headerBotTag : f.headerBotTagWithNickname
                                }), T]
                            })
                        }), null != E && "" !== E && (0, a.jsx)(s.Tooltip, {
                            text: c.default.Messages.USER_PROFILE_PRONOUNS,
                            children: e => (0, a.jsx)(s.Text, {
                                ...e,
                                variant: "text-sm/normal",
                                className: f.pronouns,
                                children: E
                            })
                        })]
                    })
                })
            }
        },
        106435: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("884691"),
                l = n("77078"),
                i = n("606292"),
                s = n("688318"),
                r = n("19287");

            function u(e) {
                let {
                    user: t,
                    guildId: n,
                    size: u,
                    showPending: o = !1,
                    showTryItOut: d = !1,
                    animateOnHover: c = !1,
                    avatarDecorationOverride: f,
                    avatarOverride: E
                } = e, {
                    avatarSrc: _,
                    isAvatarAnimating: T,
                    eventHandlers: S
                } = (0, r.useAnimatedAvatarSrc)({
                    user: t,
                    guildId: n,
                    size: (0, l.getAvatarSize)(u),
                    showPending: o,
                    animateOnHover: c,
                    avatarOverride: E
                }), {
                    avatarPlaceholderSrc: A,
                    avatarDecorationSrc: m,
                    eventHandlers: g
                } = (0, s.default)({
                    user: t,
                    size: (0, i.getDecorationSizeForAvatarSize)(u),
                    showPending: o,
                    animateOnHover: c,
                    avatarDecorationOverride: f,
                    showTryItOut: d
                }), C = a.useCallback(() => {
                    S.onMouseEnter(), g.onMouseEnter()
                }, [S, g]), N = a.useCallback(() => {
                    S.onMouseLeave(), g.onMouseLeave()
                }, [S, g]);
                return {
                    avatarPlaceholderSrc: A,
                    avatarDecorationSrc: m,
                    avatarSrc: _,
                    isAnimating: T,
                    eventHandlers: {
                        onMouseEnter: C,
                        onMouseLeave: N
                    }
                }
            }
        },
        19287: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnimatedAvatarSrc: function() {
                    return d
                }
            }), n("222007");
            var a = n("884691"),
                l = n("446674"),
                i = n("206230"),
                s = n("771325"),
                r = n("26989"),
                u = n("471671"),
                o = n("91653");

            function d(e) {
                let {
                    user: t,
                    guildId: n,
                    size: d,
                    showPending: c = !1,
                    animateOnHover: f = !1,
                    avatarOverride: E
                } = e, [_, T] = a.useState(!1), S = (0, l.useStateFromStores)([i.default], () => i.default.useReducedMotion), A = (0, l.useStateFromStores)([u.default], () => u.default.isFocused()), m = A && (_ || !S && !f), {
                    pendingAvatar: g
                } = (0, o.default)({}), C = (0, l.useStateFromStores)([r.default], () => null != n && null != t ? r.default.getMember(n, t.id) : null), N = a.useMemo(() => null != t ? (0, s.getPreviewAvatar)(c ? null != E ? E : g : void 0, C, t, {
                    canAnimate: m,
                    size: d
                }) : void 0, [c, g, C, t, m, d, E]), v = a.useCallback(() => T(!0), []), I = a.useCallback(() => T(!1), []);
                return {
                    avatarSrc: N,
                    isAvatarAnimating: m,
                    eventHandlers: {
                        onMouseEnter: v,
                        onMouseLeave: I
                    }
                }
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
                i = n("267527"),
                s = n("75196"),
                r = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 28,
                        height: n = 20,
                        color: l = "currentColor",
                        foreground: i,
                        ...r
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 28 20",
                        children: (0, a.jsx)("path", {
                            className: i,
                            fill: l,
                            d: "M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"
                        })
                    })
                }, i.ClydeIcon, void 0, {
                    size: 28
                })
        },
        137783: function(e, t, n) {
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
                    width: t = 16,
                    height: n = 16,
                    color: i = "currentColor",
                    foreground: s,
                    ...r
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(r),
                    width: t,
                    height: n,
                    viewBox: "0 0 16 16",
                    children: (0, a.jsx)("path", {
                        className: s,
                        fill: i,
                        d: "M6,7 L2,7 L2,6 L6,6 L6,7 Z M8,5 L2,5 L2,4 L8,4 L8,5 Z M8,3 L2,3 L2,2 L8,2 L8,3 Z M8.88888889,0 L1.11111111,0 C0.494444444,0 0,0.494444444 0,1.11111111 L0,8.88888889 C0,9.50253861 0.497461389,10 1.11111111,10 L8.88888889,10 C9.50253861,10 10,9.50253861 10,8.88888889 L10,1.11111111 C10,0.494444444 9.5,0 8.88888889,0 Z",
                        transform: "translate(3 3)"
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=f9e8a9e0e91cb19fd456.js.map