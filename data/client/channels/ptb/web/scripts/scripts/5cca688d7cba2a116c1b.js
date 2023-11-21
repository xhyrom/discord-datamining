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
        635348: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f0eae807823459e917a6.gif"
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
                    return A
                },
                default: function() {
                    return C
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                i = n("414456"),
                s = n.n(i),
                r = n("77078"),
                u = n("430568"),
                o = n("309570"),
                c = n("29088"),
                d = n("867805"),
                f = n("342845"),
                E = n("845579"),
                _ = n("137783"),
                T = n("49111"),
                S = n("205341");

            function A(e) {
                let {
                    emoji: t,
                    className: n,
                    animate: a = !0,
                    hideTooltip: i
                } = e, o = E.AnimateEmoji.useSetting(), c = null != t.id ? ":".concat(t.name, ":") : d.default.translateSurrogatesToInlineEmoji(t.name), f = {
                    className: s(S.emoji, n),
                    emojiId: t.id,
                    emojiName: t.name,
                    autoplay: !0,
                    animated: !!(t.animated && o && a)
                };
                return i ? (0, l.jsx)(u.default, {
                    ...f
                }) : (0, l.jsx)(r.Tooltip, {
                    text: c,
                    children: e => (0, l.jsx)(u.default, {
                        ...e,
                        ...f
                    })
                })
            }
            let m = e => {
                let {
                    className: t,
                    text: n
                } = e, i = a.useRef(null), u = a.useRef(null), [o, c] = a.useState(!1);
                return a.useLayoutEffect(() => {
                    let {
                        current: e
                    } = i, {
                        current: t
                    } = u;
                    if (null == e || null == t) return;
                    let n = e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight;
                    c(!n)
                }, [n]), (0, l.jsx)(r.Tooltip, {
                    text: o || null == n || "" === n ? null : n,
                    delay: 150,
                    "aria-label": !1,
                    children: e => (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            ...e,
                            className: t,
                            ref: i,
                            children: n
                        }), (0, l.jsx)("div", {
                            className: s(S.textRuler, t),
                            ref: u,
                            "aria-hidden": !0,
                            children: n
                        })]
                    })
                })
            };
            var C = e => {
                let {
                    activities: t,
                    applicationStream: n,
                    className: a,
                    textClassName: i,
                    emojiClassName: s,
                    animate: r = !0,
                    hideTooltip: u = !1,
                    hideEmoji: d = !1
                } = e, E = null != t ? t.find(e => e.type === T.ActivityTypes.CUSTOM_STATUS) : null, C = null != t ? t.find(e => e.type === T.ActivityTypes.HANG_STATUS) : null, N = null;
                null != C ? N = (0, l.jsx)(f.default, {
                    className: s,
                    hangStatusActivity: C
                }) : null != E && null != E.emoji && !d && (N = (0, l.jsx)(A, {
                    emoji: E.emoji,
                    animate: r,
                    hideTooltip: u,
                    className: s
                }));
                let g = (0, c.default)(t, n),
                    v = null != g && g.length > 0;
                return null != N || v ? (0, l.jsxs)("div", {
                    className: a,
                    children: [N, (0, l.jsx)(m, {
                        text: g,
                        className: i
                    }), null != t && t.some(o.default) ? (0, l.jsx)(_.default, {
                        width: 16,
                        height: 16,
                        className: S.icon
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
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
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
            var l = n("862205");
            let a = (0, l.createExperiment)({
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
                return a.useExperiment({
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
                    return a
                }
            });
            var l = n("782340");

            function a(e) {
                return null != e && "" !== e ? e : l.default.Messages.EMBEDDED_ACTIVITIES_IN_ACTIVITY
            }
        },
        502651: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("954016"),
                a = n("49111");

            function i(e) {
                return e.type === a.ActivityTypes.STREAMING && null != e.url && l.validStreamURL.test(e.url)
            }

            function s(e) {
                return null != e && (Array.isArray(e) ? e.some(i) : i(e))
            }
        },
        29088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var l = n("925749"),
                a = n("204947"),
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

            function c(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (null != e && e.type === r.ActivityTypes.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
                if (null != t) return null == e || e.type !== r.ActivityTypes.PLAYING ? u.default.Messages.SHARING_SCREEN : o(n)[r.ActivityTypes.STREAMING].format({
                    name: e.name
                });
                if (null != e && e.type === r.ActivityTypes.HANG_STATUS) return (0, l.getHangStatusText)(e);
                if (null == e || null == e.name) return null;
                if ((0, s.default)(e)) {
                    let t = null != e.details && "" !== e.details ? e.details : e.name;
                    return o(n)[r.ActivityTypes.STREAMING].format({
                        name: t
                    })
                }
                return (0, i.default)(e) ? (0, a.default)(e.name) : function(e, t, n) {
                    let l = o(n);
                    switch (e) {
                        case r.ActivityTypes.LISTENING:
                        case r.ActivityTypes.WATCHING:
                        case r.ActivityTypes.COMPETING:
                            return l[e].format({
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
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (Array.isArray(e)) {
                    let l = e;
                    return null != t && (l = [...l, null]), l.map(e => c(e, t, n)).find(e => null != e)
                }
                return c(e, t, n)
            }
        },
        473591: function(e, t, n) {
            "use strict";
            let l, a, i, s, r, u;
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var o = n("446674"),
                c = n("913144");
            let d = !1,
                f = !1,
                E = null,
                _ = {},
                T = {},
                S = {},
                A = {};

            function m() {
                l = void 0, a = void 0, i = void 0, s = void 0, r = void 0, E = null
            }
            class C extends o.default.Store {
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
                    return l
                }
                getPendingNick() {
                    return a
                }
                getErrors() {
                    return E
                }
                hasPendingChanges() {
                    return void 0 !== l || void 0 !== a || void 0 !== i || void 0 !== s || void 0 !== r
                }
                getPendingUpdates() {
                    return {
                        pendingAvatar: i,
                        pendingNick: a,
                        pendingPersonality: l,
                        pendingBanner: s,
                        pendingThemeColors: r
                    }
                }
                isSavingSettings() {
                    return d
                }
                isFetchingSettings(e) {
                    var t;
                    return null === (t = A[e]) || void 0 === t ? void 0 : t.isFetching
                }
                shouldFetchSettings(e) {
                    var t, n;
                    let l = null !== (t = A[e]) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        a = Date.now(),
                        i = a - (null !== (n = l.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 36e5;
                    return !(null == l ? void 0 : l.isFetching) && i
                }
                isFetchingProfile(e) {
                    var t;
                    return null === (t = T[e]) || void 0 === t ? void 0 : t.isFetching
                }
                isEditingClydeProfile() {
                    return f
                }
            }
            C.displayName = "ClydeStore";
            var N = new C(c.default, {
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
                    l = t, n && (u = t)
                },
                CLYDE_SET_PENDING_NICK: function(e) {
                    let {
                        nick: t
                    } = e;
                    a = t
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
                    E = null, d = !0
                },
                CLYDE_GUILD_SETTINGS_SAVE_SUCCESS: function(e) {
                    let {
                        settings: t
                    } = e;
                    d = !1, S[t.guild_id] = t, m()
                },
                CLYDE_GUILD_SETTINGS_SAVE_FAIL: function(e) {
                    d = !1, E = e.errors
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
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                i = n.n(a),
                s = n("943722"),
                r = n("462339");

            function u(e) {
                let {
                    activity: t,
                    className: n,
                    emojiClassName: a,
                    textClassName: u,
                    placeholderText: o,
                    soloEmojiClassName: c,
                    animate: d = !0,
                    hideTooltip: f = !1,
                    hideEmoji: E = !1,
                    children: _
                } = e;
                if (null == t) return null;
                let {
                    emoji: T
                } = t, S = null != t.state && "" !== t.state ? t.state : o;
                return (0, l.jsxs)("div", {
                    className: i(r.container, n),
                    children: [E || null == T ? null : (0, l.jsx)(s.ActivityEmoji, {
                        emoji: T,
                        className: i(r.emoji, a, null != c ? {
                            [c]: null == S || "" === S
                        } : null),
                        animate: d,
                        hideTooltip: f
                    }), null != S && S.length > 0 ? (0, l.jsx)("span", {
                        className: u,
                        children: S
                    }) : null, _]
                })
            }
        },
        925749: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                COMING_SOON_STATUSES: function() {
                    return _
                },
                getHangStatusOptions: function() {
                    return T
                },
                getHangStatusDetails: function() {
                    return S
                },
                getHangStatusText: function() {
                    return A
                }
            });
            var l = n("49111"),
                a = n("782340"),
                i = n("979295"),
                s = n("672407"),
                r = n("341117"),
                u = n("268351"),
                o = n("528906"),
                c = n("220054"),
                d = n("635348");
            let f = "Soon",
                E = "Soon2",
                _ = [f, E],
                T = () => ({
                    [l.HangStatusTypes.CHILLING]: {
                        title: a.default.Messages.STATUS_CHILLING,
                        icon: s,
                        color: "#395153",
                        size: null
                    },
                    [l.HangStatusTypes.GAMING]: {
                        title: a.default.Messages.STATUS_GAMING,
                        icon: o,
                        color: "#554E72",
                        size: null
                    },
                    [l.HangStatusTypes.FOCUSING]: {
                        title: a.default.Messages.STATUS_FOCUSING,
                        icon: i,
                        color: "#725F4E",
                        size: "28px"
                    },
                    [f]: {
                        title: a.default.Messages.COMING_SOON,
                        icon: d,
                        color: null,
                        size: null
                    },
                    [l.HangStatusTypes.BRB]: {
                        title: a.default.Messages.STATUS_BRB,
                        icon: u,
                        color: "#6B4E72",
                        size: "26px"
                    },
                    [l.HangStatusTypes.EATING]: {
                        title: a.default.Messages.STATUS_EATING,
                        icon: c,
                        color: "#57724E",
                        size: "20px"
                    },
                    [l.HangStatusTypes.IN_TRANSIT]: {
                        title: a.default.Messages.STATUS_IN_TRANSIT,
                        icon: r,
                        color: "#726C4E",
                        size: null
                    },
                    [E]: {
                        title: a.default.Messages.COMING_SOON,
                        icon: d,
                        color: null,
                        size: null
                    }
                }),
                S = e => {
                    if ((null == e ? void 0 : e.type) !== l.ActivityTypes.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
                    let t = e.state;
                    return t === l.HangStatusTypes.CUSTOM ? null : T()[t]
                };

            function A(e) {
                var t;
                let n = (null == e ? void 0 : e.state) != null ? e.state : null;
                return n === l.HangStatusTypes.CUSTOM ? null == e ? void 0 : e.details : null === (t = S(e)) || void 0 === t ? void 0 : t.title
            }
        },
        342845: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("943722"),
                i = n("925749"),
                s = n("49111"),
                r = e => {
                    var t;
                    let {
                        className: n,
                        hangStatusActivity: r
                    } = e;
                    if ((null == r ? void 0 : r.state) === s.HangStatusTypes.CUSTOM) return null != r.emoji ? (0, l.jsx)(a.ActivityEmoji, {
                        emoji: r.emoji,
                        className: n,
                        hideTooltip: !0
                    }) : null;
                    let u = null === (t = (0, i.getHangStatusDetails)(r)) || void 0 === t ? void 0 : t.icon;
                    return null != u ? (0, l.jsx)("img", {
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
                    return c
                },
                GUILD_BANNER_MAX_WIDTH: function() {
                    return d
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
                    return C
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return N
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return g
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
            var l, a, i, s, r = n("917219");
            (l = i || (i = {}))[l.AVATAR = 0] = "AVATAR", l[l.BANNER = 1] = "BANNER", l[l.GUILD_BANNER = 2] = "GUILD_BANNER", l[l.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", l[l.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", l[l.HOME_HEADER = 5] = "HOME_HEADER", l[l.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let u = 568,
                o = 2400,
                c = 848,
                d = 2400,
                f = 1350,
                E = 2400,
                _ = 960,
                T = 2400,
                S = 600,
                A = 17 / 6,
                m = 16 / 9,
                C = 2.5,
                N = 4,
                g = u / A,
                v = u / m,
                I = u / C,
                p = u / N,
                M = r.BACKGROUND_REPLACEMENT_SIZE.width / r.BACKGROUND_REPLACEMENT_SIZE.height,
                h = u / M;
            (a = s || (s = {}))[a.CROP_GIF_START = 0] = "CROP_GIF_START", a[a.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", a[a.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        },
        123377: function(e, t, n) {
            "use strict";
            let l, a;
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
                c = n("77078"),
                d = n("413709"),
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
                    disableCopy: C,
                    showCopyIcon: N
                } = e, [g, v] = s.useState(0), [I, p] = s.useState(!1), [M, h] = s.useState(!1);
                if (s.useEffect(() => (l = new o.Timeout, a = new o.Timeout, function() {
                        l.stop(), a.stop()
                    }), []), !E.SUPPORTS_COPY || C) return (0, i.jsx)(i.Fragment, {
                    children: m
                });
                let O = [T.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_1, T.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_2, T.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_3, T.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_4, T.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_5, T.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_6, T.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_7, T.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_8, T.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_9, T.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_10, T.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_11],
                    U = Math.min(Math.max(g - 1, 0), O.length - 1),
                    R = null !== (t = O[U]) && void 0 !== t ? t : O[0],
                    P = g >= O.length - 1,
                    x = P ? c.TooltipColors.RED : c.TooltipColors.GREEN,
                    L = I ? x : c.TooltipColors.PRIMARY,
                    y = () => {
                        l.stop(), h(!1)
                    },
                    D = e => {
                        (0, E.copy)(r), f.default.track(_.AnalyticEvents.TEXT_COPIED, {
                            type: A
                        }), "function" == typeof e && e(), !M && v(g + 1), h(!0), p(!0), l.start(1e3, () => h(!1)), a.start(2e3, () => v(0))
                    };
                return (0, i.jsx)(c.Tooltip, {
                    delay: 500,
                    color: L,
                    forceOpen: M,
                    text: I ? (0, i.jsx)(c.Shaker, {
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
                            onMouseEnter: l,
                            ...a
                        } = e;
                        return (0, i.jsx)(c.Clickable, {
                            ...a,
                            className: S.clickTarget,
                            onMouseEnter: () => {
                                I ? y() : "function" == typeof l && l()
                            },
                            onClick: () => {
                                D(t)
                            },
                            children: (0, i.jsxs)("div", {
                                className: u(n, S.copiableWrapper),
                                children: [(0, i.jsx)("div", {
                                    className: S.childWrapper,
                                    children: m
                                }), N ? (0, i.jsx)("div", {
                                    className: S.copyIconWrapper,
                                    children: (0, i.jsx)(d.default, {
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
                    return a
                }
            });
            var l = n("42203");

            function a(e, t) {
                let n = l.default.getChannel(t);
                return null != n && e.bot && n.isPrivate() && null == n.rawRecipients.find(t => t.id === e.id)
            }
        },
        737403: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                maybeOpenProfilePreviewModal: function() {
                    return a
                }
            });
            var l = n("913144");

            function a(e) {
                let {
                    imageSrc: t,
                    file: n,
                    uploadType: a,
                    guildId: i,
                    isTryItOutFlow: s = !1
                } = e;
                l.default.dispatch({
                    type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
                    imageSrc: t,
                    file: n,
                    uploadType: a,
                    guildId: i,
                    isTryItOutFlow: s
                })
            }
        },
        453252: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return l
                }
            });
            let l = 10485760
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
                    return C
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("509043"),
                i = n("77078"),
                s = n("336522"),
                r = n("473591"),
                u = n("315102"),
                o = n("254490"),
                c = n("737403"),
                d = n("453252"),
                f = n("75015"),
                E = n("782340");

            function _(e, t, a, s) {
                (0, i.openModalLazy)(async () => {
                    let {
                        default: i
                    } = await n.el("420333").then(n.bind(n, "420333")), u = r.default.isEditingClydeProfile();
                    return n => (0, l.jsx)(i, {
                        filters: s,
                        maxFileSizeBytes: d.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                        imageSpecifications: e === f.UploadTypes.BANNER && E.default.Messages.USER_SETTINGS_PROFILE_THEMES_BANNER_MODAL_SPECS,
                        onComplete: (n, l) => (0, c.maybeOpenProfilePreviewModal)({
                            imageSrc: n,
                            file: l,
                            uploadType: e,
                            guildId: t,
                            isTryItOutFlow: a
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
                        maxSize: (0, o.sizeString)(d.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
                    })
                })
            }

            function S(e, t, n) {
                let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (null != e) return e;
                let {
                    size: a = 80,
                    canAnimate: i = !0
                } = l, s = null === e;
                return s && null == t ? u.default.getDefaultAvatarURL(n.id, n.discriminator) : s || (null == t ? void 0 : t.avatar) == null ? n.getAvatarURL(void 0, a, i) : n.getAvatarURL(null == t ? void 0 : t.guildId, a, i)
            }

            function A(e, t) {
                return "" === e ? null : null != e ? e : t
            }

            function m(e, t) {
                return "" === e ? null : null != e ? e : t
            }

            function C(e) {
                let t = null != e ? (0, a.getDarkness)(e) : 1;
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
            var l = n("65597"),
                a = n("845579"),
                i = n("102985"),
                s = n("697218"),
                r = n("782340");
            let u = "legacy_username";

            function o(e) {
                var t;
                let n = a.LegacyUsernameDisabled.useSetting(),
                    o = (0, l.default)([s.default], () => s.default.getCurrentUser()),
                    c = (0, l.default)([i.default], () => i.default.hidePersonalInformation);
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
                    return l
                },
                default: function() {
                    return C
                }
            }), n("424973");
            var l, a, i = n("37983");
            n("884691");
            var s = n("414456"),
                r = n.n(s),
                u = n("77078"),
                o = n("572544"),
                c = n("244201"),
                d = n("298878"),
                f = n("643121"),
                E = n("217513"),
                _ = n("590456"),
                T = n("49111"),
                S = n("782340"),
                A = n("730684"),
                m = n("696246");

            function C(e) {
                let {
                    user: t,
                    guildId: n,
                    className: l,
                    shrinkAtCount: a,
                    shrinkToSize: s,
                    isTryItOutFlow: C,
                    size: N = 0
                } = e, g = (0, E.default)(t.id, n), v = (0, f.default)(g).map(e => ({
                    ...e,
                    src: (0, _.getBadgeAsset)(e.icon)
                })), I = (0, c.useWindowDispatch)();
                if (t.isClyde()) return (0, i.jsx)("div", {
                    className: r(l, A.container, A.clydeBadgeList),
                    "aria-label": S.default.Messages.PROFILE_USER_BADGES,
                    role: "group",
                    children: (0, i.jsx)(d.default, {})
                });
                C && null == v.find(e => "premium" === e.id) && v.push({
                    id: "premium",
                    icon: m,
                    src: m,
                    description: S.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                        date: new Date
                    })
                });
                let p = null != a && null != s && v.length > a ? s : N;
                return (0, i.jsx)("div", {
                    className: r(l, v.length > 0 ? A.containerWithContent : A.container),
                    "aria-label": S.default.Messages.PROFILE_USER_BADGES,
                    role: "group",
                    children: v.map(e => (0, i.jsx)(u.Tooltip, {
                        position: "top",
                        text: e.description,
                        spacing: 12,
                        children: t => (0, i.jsx)(u.Anchor, {
                            ...t,
                            onClick: n => {
                                var l;
                                null === (l = t.onClick) || void 0 === l || l.call(t);
                                let a = null != e.link ? (0, o.default)(e.link) : null;
                                if (null != a) return I.dispatch(T.ComponentActions.POPOUT_CLOSE), a(n)
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
            }(a = l || (l = {}))[a.SIZE_24 = 0] = "SIZE_24", a[a.SIZE_22 = 1] = "SIZE_22", a[a.SIZE_18 = 2] = "SIZE_18"
        },
        880114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("65597"),
                i = n("77078"),
                s = n("535013"),
                r = n("915639"),
                u = n("476263"),
                o = n("153769"),
                c = n("299039"),
                d = n("782340"),
                f = n("334099");

            function E(e) {
                let {
                    userId: t,
                    headingClassName: n,
                    textClassName: E,
                    guild: _,
                    guildMember: T
                } = e, S = (0, a.default)([r.default], () => r.default.locale), A = null != _ && null != T;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(i.Heading, {
                        variant: "eyebrow",
                        className: n,
                        children: A ? d.default.Messages.USER_PROFILE_MEMBER_SINCE : d.default.Messages.USER_PROFILE_DISCORD_MEMBER_SINCE
                    }), (0, l.jsxs)("div", {
                        className: f.memberSinceContainer,
                        children: [A && (0, l.jsx)(i.Tooltip, {
                            text: d.default.Messages.DISCORD_NAME,
                            children: e => (0, l.jsx)(o.default, {
                                ...e,
                                className: f.discordIcon
                            })
                        }), (0, l.jsx)(i.Text, {
                            className: E,
                            variant: "text-sm/normal",
                            children: (0, s.getCreatedAtDate)(c.default.extractTimestamp(t), S)
                        }), null != _ && null != T && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: f.divider
                            }), (0, l.jsx)(i.Tooltip, {
                                text: _.name,
                                children: e => (0, l.jsx)(u.default, {
                                    ...e,
                                    guild: _,
                                    size: u.default.Sizes.SMOL
                                })
                            }), (0, l.jsx)(i.Text, {
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
            var l = n("37983");
            n("884691");
            var a = n("301165"),
                i = n("65597"),
                s = n("206230"),
                r = e => {
                    let {
                        children: t,
                        initTranslate3d: n
                    } = e, r = (0, i.default)([s.default], () => s.default.useReducedMotion), u = (0, a.useSpring)({
                        immediate: r,
                        from: {
                            transform: n
                        },
                        to: {
                            transform: "translate3d(0, 0, 0)"
                        }
                    });
                    return (0, l.jsx)(a.animated.div, {
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
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                i = n.n(a),
                s = n("193853");

            function r(e) {
                let {
                    className: t
                } = e;
                return (0, l.jsx)("div", {
                    className: i(s.divider, t)
                })
            }
        },
        935409: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserPopoutBadgeList: function() {
                    return b
                },
                UserPopoutAvatar: function() {
                    return w
                },
                default: function() {
                    return Y
                }
            }), n("794252");
            var l = n("37983"),
                a = n("884691"),
                i = n("414456"),
                s = n.n(i),
                r = n("506838"),
                u = n("446674"),
                o = n("669491"),
                c = n("77078"),
                d = n("606292"),
                f = n("688318"),
                E = n("980215"),
                _ = n("824794"),
                T = n("635471"),
                S = n("305961"),
                A = n("697218"),
                m = n("423487"),
                C = n("587974"),
                N = n("599110"),
                g = n("719923"),
                v = n("50885"),
                I = n("713135"),
                p = n("106435"),
                M = n("289918"),
                h = n("878569"),
                O = n("590006"),
                U = n("430312"),
                R = n("401642"),
                P = n("552243"),
                x = n("590456"),
                L = n("49111"),
                y = n("646718"),
                D = n("782340"),
                G = n("524466"),
                j = n("231185");
            let H = c.AvatarSizes.SIZE_80,
                F = (0, d.getDecorationSizeForAvatarSize)(H);

            function b(e) {
                let {
                    user: t,
                    guildId: n,
                    isTryItOutFlow: a,
                    forProfileEffectModal: i
                } = e, s = (0, u.useStateFromStores)([I.default], () => I.default.getUserProfile(t.id), [t]), r = (0, u.useStateFromStores)([S.default], () => S.default.getGuild(n), [n]), d = (0, E.useClydeProfilesEnabled)(r);
                return (0, l.jsxs)(l.Fragment, {
                    children: [(null == s ? void 0 : s.profileFetchFailed) && (!t.isClyde() || d) && (0, l.jsx)(c.Tooltip, {
                        text: D.default.Messages.USER_PROFILE_LOAD_ERROR,
                        spacing: 16,
                        children: e => (0, l.jsx)(m.default, {
                            ...e,
                            className: G.warningCircleIcon,
                            color: o.default.unsafe_rawColors.YELLOW_300.css
                        })
                    }), (0, l.jsx)(O.default, {
                        className: i ? G.profileBadgesCompactNoTouch : G.profileBadges,
                        user: t,
                        guildId: n,
                        isTryItOutFlow: a,
                        size: O.BadgeSizes.SIZE_22
                    })]
                })
            }
            let B = v.default.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar;

            function w(e) {
                let {
                    user: t,
                    displayProfile: n,
                    avatarSrc: i,
                    hasBanner: o,
                    status: d,
                    isMobile: E,
                    guildId: T,
                    channelId: S,
                    onClose: m,
                    disableUserProfileLink: v,
                    profileType: I,
                    animateOnHover: M,
                    hasProfileEffect: O
                } = e, b = (0, u.useStateFromStores)([A.default], () => A.default.getCurrentUser()), {
                    profileTheme: w
                } = a.useContext(U.UserProfileContext), Y = a.useContext(N.AnalyticsContext), k = t.isNonUserBot() && !t.isClyde(), z = g.default.isPremiumAtLeast(null == n ? void 0 : n.premiumType, y.PremiumTypes.TIER_2), V = a.useMemo(() => (0, _.shouldDisableUserPresenceInChannel)(t, S), [t, S]), W = v || t.isClyde(), {
                    avatarDecorationSrc: Z,
                    avatarSrc: X,
                    eventHandlers: K,
                    isAnimating: Q
                } = (0, p.default)({
                    user: t,
                    guildId: T,
                    size: H,
                    animateOnHover: M
                }), {
                    avatarDecorationSrc: q
                } = (0, f.default)({
                    size: F,
                    animateOnHover: !Q,
                    showPending: t.id === (null == b ? void 0 : b.id),
                    showTryItOut: t.id === (null == b ? void 0 : b.id)
                }), J = (0, l.jsxs)("div", {
                    className: G.avatarHoverTarget,
                    ...K,
                    children: [(0, l.jsx)(B, {
                        src: null != i ? i : X,
                        avatarDecoration: null != q ? null : Z,
                        size: H,
                        "aria-label": t.username,
                        status: V ? L.StatusTypes.UNKNOWN : d,
                        statusBackdropColor: null != w && z && !V ? (0, c.getStatusBackdropColor)(w) : void 0,
                        isMobile: E,
                        statusTooltip: !0
                    }), null != q && (0, l.jsx)(P.default, {
                        initTranslate3d: "translate3d(-20px, -120px, 0)",
                        children: (0, l.jsx)(B, {
                            src: j,
                            avatarDecoration: q,
                            size: H,
                            status: L.StatusTypes.UNKNOWN,
                            isMobile: E,
                            className: G.tryingOutAvatarDecoration,
                            "aria-hidden": !0
                        })
                    }, q)]
                }), $ = (0, r.match)(I).with(x.UserProfileTypes.POPOUT, () => {
                    let e = (0, h.buildGetPremiumUserBannerStyles)({
                        premiumUserWithBanner: G.avatarPositionPremiumBanner,
                        premiumUserWithoutBanner: G.avatarPositionPremiumNoBanner,
                        default: G.avatarPositionNormal
                    });
                    return e({
                        isPremium: z && !k,
                        hasBanner: o,
                        hasProfileEffect: O
                    })
                }).with(x.UserProfileTypes.POMELO_POPOUT, () => G.avatarPositionPomelo).with(x.UserProfileTypes.PANEL, () => G.avatarPositionPanel).exhaustive();
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsxs)(c.Clickable, {
                        className: s({
                            [G.clickable]: !W,
                            [G.avatarWrapperNonUserBot]: k,
                            [G.avatarWrapperNormal]: !k
                        }, $),
                        onClick: k || W ? void 0 : function() {
                            (0, R.openUserProfileModal)({
                                userId: t.id,
                                guildId: null != T ? T : void 0,
                                channelId: null != S ? S : void 0,
                                analyticsLocation: Y.location
                            }), null == m || m()
                        },
                        children: [J, !W && function() {
                            let e = null != Z,
                                t = e ? F : (0, c.getAvatarSize)(H);
                            return (0, l.jsx)(C.default, {
                                mask: null == d || d === L.StatusTypes.UNKNOWN || V ? C.default.Masks.AVATAR_DEFAULT : (0, r.match)([e, E]).with([!0, !0], () => C.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => C.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => C.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => C.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
                                className: e ? G.avatarDecorationHint : G.avatarHint,
                                style: e ? {
                                    borderRadius: .4 * t
                                } : void 0,
                                width: t,
                                height: t,
                                children: (0, l.jsx)("div", {
                                    className: G.avatarHintInner,
                                    children: D.default.Messages.VIEW_PROFILE
                                })
                            })
                        }()]
                    })
                })
            }

            function Y(e) {
                let {
                    user: t,
                    displayProfile: n,
                    guildId: a,
                    channelId: i,
                    onClose: s,
                    isMobile: r,
                    isStreaming: u,
                    status: o,
                    disableUserProfileLink: c,
                    isHovering: d,
                    showPremiumBadgeUpsell: f = !0,
                    upsell: E
                } = e, _ = null == n ? void 0 : n.profileEffectID;
                return (0, l.jsxs)(l.Fragment, {
                    children: [E, (0, l.jsx)(M.default, {
                        user: t,
                        displayProfile: n,
                        onClose: s,
                        guildId: a,
                        profileType: x.UserProfileTypes.POPOUT,
                        showPremiumBadgeUpsell: f,
                        isHovering: d
                    }), null != _ && (0, l.jsx)(T.default, {
                        profileEffectID: _,
                        bannerAdjustment: 0,
                        isHovering: d
                    }), (0, l.jsx)(w, {
                        user: t,
                        displayProfile: n,
                        status: u ? L.StatusTypes.STREAMING : o,
                        isMobile: r,
                        guildId: a,
                        channelId: i,
                        onClose: s,
                        disableUserProfileLink: c,
                        hasBanner: (null == n ? void 0 : n.banner) != null,
                        hasProfileEffect: null != _,
                        profileType: x.UserProfileTypes.POPOUT
                    }), (0, l.jsx)(b, {
                        user: t,
                        guildId: a
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
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                i = n("224038");

            function s(e) {
                let {
                    user: t,
                    nickname: n
                } = e, s = null != n;
                return (0, l.jsx)(a.Avatar, {
                    src: t.getAvatarURL(void 0, s ? 16 : 24),
                    size: s ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
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
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                i = n.n(a),
                s = n("383957");

            function r(e) {
                let {
                    children: t,
                    lastSection: n = !1,
                    className: a,
                    ...r
                } = e;
                return (0, l.jsx)("div", {
                    className: i(s.section, a, {
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
                    return N
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                i = n.n(a),
                s = n("446674"),
                r = n("77078"),
                u = n("997289"),
                o = n("697218"),
                c = n("476263"),
                d = n("216422"),
                f = n("719923"),
                E = n("485422"),
                _ = n("777003"),
                T = n("49111"),
                S = n("782340"),
                A = n("125234"),
                m = n("814076");

            function C(e) {
                let {
                    guildName: t
                } = e;
                return (0, l.jsxs)("div", {
                    className: A.guildMemberProfileTooltip,
                    children: [(0, l.jsx)(d.default, {
                        className: A.guildMemberProfileTooltipNitroWheel
                    }), S.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                        guildName: t
                    })]
                })
            }

            function N(e) {
                let {
                    guild: t,
                    bio: a,
                    hidePersonalInformation: d,
                    isUsingGuildBio: N,
                    lastSection: g = !1,
                    animateOnHover: v = !1,
                    isHovering: I = !1,
                    lineClamp: p
                } = e, {
                    location: M
                } = (0, u.useAnalyticsContext)(), h = (0, s.useStateFromStores)([o.default], () => o.default.getCurrentUser()), O = f.default.canUsePremiumGuildMemberProfile(h);
                return d || null == a || "" === a ? null : (0, l.jsxs)(_.default, {
                    lastSection: g,
                    children: [(0, l.jsxs)(r.Heading, {
                        variant: "eyebrow",
                        className: m.title,
                        children: [S.default.Messages.USER_POPOUT_ABOUT_ME, null != t && N && (0, l.jsx)(r.Tooltip, {
                            color: r.Tooltip.Colors.CUSTOM,
                            tooltipClassName: A.aboutMeGuildIconTooltip,
                            "aria-label": S.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                                guildName: t.name
                            }),
                            text: (0, l.jsx)(C, {
                                guildName: t.name
                            }),
                            children: e => (0, l.jsx)(c.default, {
                                ...e,
                                onClick: () => {
                                    var t;
                                    null == (t = e.onClick) || t(), null != h && !O && (0, r.openModalLazy)(async () => {
                                        let {
                                            default: e
                                        } = await n.el("414242").then(n.bind(n, "414242"));
                                        return t => (0, l.jsx)(e, {
                                            ...t,
                                            source: {
                                                ...M,
                                                object: T.AnalyticsObjects.GUILD_ICON
                                            }
                                        })
                                    })
                                },
                                guild: t,
                                size: c.default.Sizes.SMOL,
                                className: i(A.aboutMeGuildIcon, {
                                    [A.nonPremiumHoverState]: !O
                                })
                            })
                        })]
                    }), (0, l.jsx)(E.default, {
                        userBio: a,
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
            var l = n("37983");
            n("884691");
            var a = n("775377"),
                i = n("777003"),
                s = n("184256");

            function r(e) {
                let {
                    customStatusActivity: t,
                    className: n,
                    animate: r
                } = e;
                return null == t ? null : (0, l.jsx)(i.default, {
                    className: n,
                    children: (0, l.jsx)(a.default, {
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
            var l = n("37983");
            n("884691");
            var a = n("880114"),
                i = n("777003"),
                s = n("814076");

            function r(e) {
                let {
                    userId: t,
                    guild: n,
                    guildMember: r
                } = e;
                return (0, l.jsx)(i.default, {
                    children: (0, l.jsx)(a.default, {
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
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                i = n.n(a),
                s = n("77078"),
                r = n("145079"),
                u = n("123377"),
                o = n("158998"),
                c = n("777003"),
                d = n("782340"),
                f = n("119111");

            function E(e) {
                let {
                    user: t,
                    shouldCopyOnClick: n,
                    nickname: a,
                    pronouns: E,
                    usernameIcon: _,
                    identityCTA: T,
                    className: S,
                    isTryItOut: A = !1,
                    lastSection: m
                } = e;
                return (0, l.jsx)(c.default, {
                    className: i(f.container, S),
                    lastSection: m,
                    children: (0, l.jsxs)("div", {
                        className: n ? f.copiableNameTag : void 0,
                        children: [(0, l.jsx)(u.CopiableField, {
                            className: f.copiableField,
                            copyMetaData: "User Tag",
                            copyValue: o.default.getUserTag(t, {
                                decoration: "never",
                                identifiable: "always"
                            }),
                            showCopyIcon: !0,
                            disableCopy: !n,
                            children: (0, l.jsxs)("div", {
                                className: f.userText,
                                children: [null != a ? (0, l.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: f.nickname,
                                    children: a
                                }) : null, (0, l.jsx)(r.default, {
                                    usernameIcon: _,
                                    user: t,
                                    forceUsername: !0,
                                    forcePomelo: A,
                                    className: null == a ? f.userTagNoNickname : f.userTagWithNickname,
                                    usernameClass: null == a ? f.userTagUsernameNoNickname : f.userTagUsernameBase,
                                    discriminatorClass: null == a ? f.userTagDiscriminatorNoNickname : f.discrimBase,
                                    botClass: null == a ? f.headerBotTag : f.headerBotTagWithNickname
                                }), T]
                            })
                        }), null != E && "" !== E && (0, l.jsx)(s.Tooltip, {
                            text: d.default.Messages.USER_PROFILE_PRONOUNS,
                            children: e => (0, l.jsx)(s.Text, {
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
            var l = n("884691"),
                a = n("77078"),
                i = n("606292"),
                s = n("688318"),
                r = n("19287");

            function u(e) {
                let {
                    user: t,
                    guildId: n,
                    size: u,
                    showPending: o = !1,
                    showTryItOut: c = !1,
                    animateOnHover: d = !1,
                    avatarDecorationOverride: f,
                    avatarOverride: E
                } = e, {
                    avatarSrc: _,
                    isAvatarAnimating: T,
                    eventHandlers: S
                } = (0, r.useAnimatedAvatarSrc)({
                    user: t,
                    guildId: n,
                    size: (0, a.getAvatarSize)(u),
                    showPending: o,
                    animateOnHover: d,
                    avatarOverride: E
                }), {
                    avatarPlaceholderSrc: A,
                    avatarDecorationSrc: m,
                    eventHandlers: C
                } = (0, s.default)({
                    user: t,
                    size: (0, i.getDecorationSizeForAvatarSize)(u),
                    showPending: o,
                    animateOnHover: d,
                    avatarDecorationOverride: f,
                    showTryItOut: c
                }), N = l.useCallback(() => {
                    S.onMouseEnter(), C.onMouseEnter()
                }, [S, C]), g = l.useCallback(() => {
                    S.onMouseLeave(), C.onMouseLeave()
                }, [S, C]);
                return {
                    avatarPlaceholderSrc: A,
                    avatarDecorationSrc: m,
                    avatarSrc: _,
                    isAnimating: T,
                    eventHandlers: {
                        onMouseEnter: N,
                        onMouseLeave: g
                    }
                }
            }
        },
        19287: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnimatedAvatarSrc: function() {
                    return c
                }
            }), n("222007");
            var l = n("884691"),
                a = n("446674"),
                i = n("206230"),
                s = n("771325"),
                r = n("26989"),
                u = n("471671"),
                o = n("91653");

            function c(e) {
                let {
                    user: t,
                    guildId: n,
                    size: c,
                    showPending: d = !1,
                    animateOnHover: f = !1,
                    avatarOverride: E
                } = e, [_, T] = l.useState(!1), S = (0, a.useStateFromStores)([i.default], () => i.default.useReducedMotion), A = (0, a.useStateFromStores)([u.default], () => u.default.isFocused()), m = A && (_ || !S && !f), {
                    pendingAvatar: C
                } = (0, o.default)({}), N = (0, a.useStateFromStores)([r.default], () => null != n && null != t ? r.default.getMember(n, t.id) : null), g = l.useMemo(() => null != t ? (0, s.getPreviewAvatar)(d ? null != E ? E : C : void 0, N, t, {
                    canAnimate: m,
                    size: c
                }) : void 0, [d, C, N, t, m, c, E]), v = l.useCallback(() => T(!0), []), I = l.useCallback(() => T(!1), []);
                return {
                    avatarSrc: g,
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
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                i = n("267527"),
                s = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 28,
                        height: n = 20,
                        color: a = "currentColor",
                        foreground: i,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 28 20",
                        children: (0, l.jsx)("path", {
                            className: i,
                            fill: a,
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
            var l = n("37983");
            n("884691");
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
                    viewBox: "0 0 16 16",
                    children: (0, l.jsx)("path", {
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
//# sourceMappingURL=5cca688d7cba2a116c1b.js.map