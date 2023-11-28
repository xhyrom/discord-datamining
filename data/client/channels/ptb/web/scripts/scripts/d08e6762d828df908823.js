(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["46493"], {
        979295: function(e, t, a) {
            "use strict";
            e.exports = a.p + "bf10b4db797e1264170f.gif"
        },
        672407: function(e, t, a) {
            "use strict";
            e.exports = a.p + "fe7719aef8a8e68f0648.gif"
        },
        341117: function(e, t, a) {
            "use strict";
            e.exports = a.p + "444ef3f0048b8d30799f.gif"
        },
        268351: function(e, t, a) {
            "use strict";
            e.exports = a.p + "70d38d06990a137df664.gif"
        },
        528906: function(e, t, a) {
            "use strict";
            e.exports = a.p + "32f57771152bf03eeff1.gif"
        },
        220054: function(e, t, a) {
            "use strict";
            e.exports = a.p + "f49a39b40eb9d180fc88.gif"
        },
        696246: function(e, t, a) {
            "use strict";
            e.exports = a.p + "23808e559cfef1d23276.svg"
        },
        231185: function(e, t, a) {
            "use strict";
            e.exports = a.p + "606576712b69844bb246.svg"
        },
        943722: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                ActivityEmoji: function() {
                    return A
                },
                default: function() {
                    return h
                }
            }), a("222007");
            var l = a("37983"),
                s = a("884691"),
                n = a("414456"),
                i = a.n(n),
                r = a("446674"),
                u = a("77078"),
                o = a("430568"),
                d = a("309570"),
                c = a("29088"),
                f = a("867805"),
                m = a("699209"),
                T = a("342845"),
                S = a("845579"),
                g = a("42203"),
                C = a("800762"),
                p = a("137783"),
                v = a("49111"),
                N = a("205341");

            function A(e) {
                let {
                    emoji: t,
                    className: a,
                    animate: s = !0,
                    hideTooltip: n
                } = e, r = S.AnimateEmoji.useSetting(), d = null != t.id ? ":".concat(t.name, ":") : f.default.translateSurrogatesToInlineEmoji(t.name), c = {
                    className: i(N.emoji, a),
                    emojiId: t.id,
                    emojiName: t.name,
                    autoplay: !0,
                    animated: !!(t.animated && r && s)
                };
                return n ? (0, l.jsx)(o.default, {
                    ...c
                }) : (0, l.jsx)(u.Tooltip, {
                    text: d,
                    children: e => (0, l.jsx)(o.default, {
                        ...e,
                        ...c
                    })
                })
            }
            let E = e => {
                let {
                    className: t,
                    text: a
                } = e, n = s.useRef(null), r = s.useRef(null), [o, d] = s.useState(!1);
                return s.useLayoutEffect(() => {
                    let {
                        current: e
                    } = n, {
                        current: t
                    } = r;
                    if (null == e || null == t) return;
                    let a = e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight;
                    d(!a)
                }, [a]), (0, l.jsx)(u.Tooltip, {
                    text: o || null == a || "" === a ? null : a,
                    delay: 150,
                    "aria-label": !1,
                    children: e => (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            ...e,
                            className: t,
                            ref: n,
                            children: a
                        }), (0, l.jsx)("div", {
                            className: i(N.textRuler, t),
                            ref: r,
                            "aria-hidden": !0,
                            children: a
                        })]
                    })
                })
            };
            var h = e => {
                var t;
                let {
                    activities: a,
                    applicationStream: s,
                    className: n,
                    textClassName: i,
                    emojiClassName: u,
                    animate: o = !0,
                    hideTooltip: f = !1,
                    hideEmoji: S = !1,
                    user: h
                } = e, _ = null != a ? a.find(e => e.type === v.ActivityTypes.CUSTOM_STATUS) : null, x = null != a ? a.find(e => e.type === v.ActivityTypes.HANG_STATUS) : null, M = (0, r.useStateFromStores)([C.default, g.default], () => {
                    var e;
                    return null != x && null != h ? g.default.getChannel(null === (e = C.default.getVoiceStateForUser(h.id)) || void 0 === e ? void 0 : e.channelId) : null
                }), {
                    enableHangStatus: I
                } = m.HangStatusExperiment.useExperiment({
                    guildId: null !== (t = null == M ? void 0 : M.guild_id) && void 0 !== t ? t : "",
                    location: "ActivityStatus"
                }), U = null;
                I && null != x ? U = (0, l.jsx)(T.default, {
                    className: u,
                    hangStatusActivity: x
                }) : null != _ && null != _.emoji && !S && (U = (0, l.jsx)(A, {
                    emoji: _.emoji,
                    animate: o,
                    hideTooltip: f,
                    className: u
                }));
                let y = (0, c.default)(a, s, void 0, I),
                    j = null != y && y.length > 0;
                return null != U || j ? (0, l.jsxs)("div", {
                    className: n,
                    children: [U, (0, l.jsx)(E, {
                        text: y,
                        className: i
                    }), null != a && a.some(d.default) ? (0, l.jsx)(p.default, {
                        width: 16,
                        height: 16,
                        className: N.icon
                    }) : null]
                }) : null
            }
        },
        267527: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                ClydeIcon: function() {
                    return i
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("669491"),
                n = a("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, n.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M19.733 4.866a18.196 18.196 0 0 0-4.597-1.437c-.216.395-.415.8-.59 1.215a17.084 17.084 0 0 0-5.093 0c-.18-.414-.377-.82-.593-1.21-1.59.273-3.136.753-4.602 1.437C1.343 9.239.557 13.503.952 17.7a18.43 18.43 0 0 0 5.641 2.87c.456-.622.86-1.286 1.205-1.979a11.646 11.646 0 0 1-1.904-.923c.162-.118.318-.236.47-.368a13.056 13.056 0 0 0 11.273 0c.151.128.307.25.463.368-.606.363-1.245.674-1.903.923.35.693.75 1.353 1.205 1.975a18.427 18.427 0 0 0 5.64-2.87h.006c.463-4.863-.791-9.085-3.315-12.831ZM8.297 15.118c-1.1 0-2.005-1.022-2.005-2.266s.884-2.267 2.005-2.267c1.122 0 2.023 1.023 2.005 2.267 0 1.244-.888 2.266-2.005 2.266Zm7.402 0c-1.1 0-2.005-1.022-2.005-2.266s.888-2.267 2.005-2.267 2.022 1.023 2.005 2.267c0 1.244-.888 2.266-2.005 2.266Z",
                        className: r
                    })
                })
            }
        },
        204947: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var l = a("782340");

            function s(e) {
                return null != e && "" !== e ? e : l.default.Messages.EMBEDDED_ACTIVITIES_IN_ACTIVITY
            }
        },
        502651: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var l = a("954016"),
                s = a("49111");

            function n(e) {
                return e.type === s.ActivityTypes.STREAMING && null != e.url && l.validStreamURL.test(e.url)
            }

            function i(e) {
                return null != e && (Array.isArray(e) ? e.some(n) : n(e))
            }
        },
        29088: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            }), a("222007");
            var l = a("925749"),
                s = a("204947"),
                n = a("152311"),
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

            function d(e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    d = arguments.length > 3 ? arguments[3] : void 0;
                if (null != e && e.type === r.ActivityTypes.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
                if (null != t) return null == e || e.type !== r.ActivityTypes.PLAYING ? u.default.Messages.SHARING_SCREEN : o(a)[r.ActivityTypes.STREAMING].format({
                    name: e.name
                });
                if (d && null != e && e.type === r.ActivityTypes.HANG_STATUS) return (0, l.getHangStatusText)(e);
                if (null == e || null == e.name) return null;
                if ((0, i.default)(e)) {
                    let t = null != e.details && "" !== e.details ? e.details : e.name;
                    return o(a)[r.ActivityTypes.STREAMING].format({
                        name: t
                    })
                }
                return (0, n.default)(e) ? (0, s.default)(e.name) : function(e, t, a) {
                    let l = o(a);
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
                            return a ? u.default.Messages.UNFORMATTED_PLAYING_GAME.format({
                                game: t
                            }) : u.default.Messages.PLAYING_GAME.format({
                                game: t
                            })
                    }
                }(e.type, e.name, a)
            }

            function c(e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = arguments.length > 3 ? arguments[3] : void 0;
                if (Array.isArray(e)) {
                    let s = e;
                    return null != t && (s = [...s, null]), s.map(e => d(e, t, a, l)).find(e => null != e)
                }
                return d(e, t, a, l)
            }
        },
        775377: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("414456"),
                n = a.n(s),
                i = a("943722"),
                r = a("462339");

            function u(e) {
                let {
                    activity: t,
                    className: a,
                    emojiClassName: s,
                    textClassName: u,
                    placeholderText: o,
                    soloEmojiClassName: d,
                    animate: c = !0,
                    hideTooltip: f = !1,
                    hideEmoji: m = !1,
                    children: T
                } = e;
                if (null == t) return null;
                let {
                    emoji: S
                } = t, g = null != t.state && "" !== t.state ? t.state : o;
                return (0, l.jsxs)("div", {
                    className: n(r.container, a),
                    children: [m || null == S ? null : (0, l.jsx)(i.ActivityEmoji, {
                        emoji: S,
                        className: n(r.emoji, s, null != d ? {
                            [d]: null == g || "" === g
                        } : null),
                        animate: c,
                        hideTooltip: f
                    }), null != g && g.length > 0 ? (0, l.jsx)("span", {
                        className: u,
                        children: g
                    }) : null, T]
                })
            }
        },
        699209: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                HangStatusExperiment: function() {
                    return s
                }
            });
            var l = a("862205");
            let s = (0, l.createExperiment)({
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
        925749: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                getHangStatusOptions: function() {
                    return c
                },
                getHangStatusDetails: function() {
                    return f
                },
                getHangStatusText: function() {
                    return m
                }
            });
            var l = a("49111"),
                s = a("782340"),
                n = a("979295"),
                i = a("672407"),
                r = a("341117"),
                u = a("268351"),
                o = a("528906"),
                d = a("220054");
            let c = () => ({
                    [l.HangStatusTypes.CHILLING]: {
                        title: s.default.Messages.STATUS_CHILLING,
                        icon: i,
                        color: "#395153",
                        size: null
                    },
                    [l.HangStatusTypes.GAMING]: {
                        title: s.default.Messages.STATUS_GAMING,
                        icon: o,
                        color: "#554E72",
                        size: null
                    },
                    [l.HangStatusTypes.FOCUSING]: {
                        title: s.default.Messages.STATUS_FOCUSING,
                        icon: n,
                        color: "#725F4E",
                        size: "28px"
                    },
                    [l.HangStatusTypes.BRB]: {
                        title: s.default.Messages.STATUS_BRB,
                        icon: u,
                        color: "#6B4E72",
                        size: "26px"
                    },
                    [l.HangStatusTypes.EATING]: {
                        title: s.default.Messages.STATUS_EATING,
                        icon: d,
                        color: "#57724E",
                        size: "20px"
                    },
                    [l.HangStatusTypes.IN_TRANSIT]: {
                        title: s.default.Messages.STATUS_IN_TRANSIT,
                        icon: r,
                        color: "#726C4E",
                        size: null
                    }
                }),
                f = e => {
                    if ((null == e ? void 0 : e.type) !== l.ActivityTypes.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
                    let t = e.state;
                    return t === l.HangStatusTypes.CUSTOM ? null : c()[t]
                };

            function m(e) {
                var t;
                let a = (null == e ? void 0 : e.state) != null ? e.state : null;
                return a === l.HangStatusTypes.CUSTOM ? null == e ? void 0 : e.details : null === (t = f(e)) || void 0 === t ? void 0 : t.title
            }
        },
        342845: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("943722"),
                n = a("925749"),
                i = a("49111"),
                r = e => {
                    var t;
                    let {
                        className: a,
                        hangStatusActivity: r
                    } = e;
                    if ((null == r ? void 0 : r.state) === i.HangStatusTypes.CUSTOM) return null != r.emoji ? (0, l.jsx)(s.ActivityEmoji, {
                        emoji: r.emoji,
                        className: a,
                        hideTooltip: !0
                    }) : null;
                    let u = null === (t = (0, n.getHangStatusDetails)(r)) || void 0 === t ? void 0 : t.icon;
                    return null != u ? (0, l.jsx)("img", {
                        src: u,
                        alt: "",
                        className: null != a ? a : void 0
                    }) : null
                }
        },
        123377: function(e, t, a) {
            "use strict";
            let l, s;
            a.r(t), a.d(t, {
                CopiableField: function() {
                    return C
                }
            }), a("222007");
            var n = a("37983"),
                i = a("884691"),
                r = a("414456"),
                u = a.n(r),
                o = a("862337"),
                d = a("77078"),
                c = a("413709"),
                f = a("599110"),
                m = a("306160"),
                T = a("49111"),
                S = a("782340"),
                g = a("491701");

            function C(e) {
                var t;
                let {
                    className: a,
                    copyValue: r,
                    copyMetaData: C,
                    children: p,
                    disableCopy: v,
                    showCopyIcon: N
                } = e, [A, E] = i.useState(0), [h, _] = i.useState(!1), [x, M] = i.useState(!1);
                if (i.useEffect(() => (l = new o.Timeout, s = new o.Timeout, function() {
                        l.stop(), s.stop()
                    }), []), !m.SUPPORTS_COPY || v) return (0, n.jsx)(n.Fragment, {
                    children: p
                });
                let I = [S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_1, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_2, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_3, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_4, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_5, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_6, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_7, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_8, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_9, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_10, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_11],
                    U = Math.min(Math.max(A - 1, 0), I.length - 1),
                    y = null !== (t = I[U]) && void 0 !== t ? t : I[0],
                    j = A >= I.length - 1,
                    O = j ? d.TooltipColors.RED : d.TooltipColors.GREEN,
                    P = h ? O : d.TooltipColors.PRIMARY,
                    R = () => {
                        l.stop(), M(!1)
                    },
                    L = e => {
                        (0, m.copy)(r), f.default.track(T.AnalyticEvents.TEXT_COPIED, {
                            type: C
                        }), "function" == typeof e && e(), !x && E(A + 1), M(!0), _(!0), l.start(1e3, () => M(!1)), s.start(2e3, () => E(0))
                    };
                return (0, n.jsx)(d.Tooltip, {
                    delay: 500,
                    color: P,
                    forceOpen: x,
                    text: h ? (0, n.jsx)(d.Shaker, {
                        isShaking: j,
                        children: y
                    }) : S.default.Messages.ACCOUNT_CLICK_TO_COPY,
                    onAnimationRest: (e, t) => {
                        !x && h && t.phase === T.SpringTransitionPhases.LEAVE && _(!1)
                    },
                    "aria-label": S.default.Messages.ACCOUNT_CLICK_TO_COPY,
                    children: e => {
                        let {
                            onClick: t,
                            onMouseEnter: l,
                            ...s
                        } = e;
                        return (0, n.jsx)(d.Clickable, {
                            ...s,
                            className: g.clickTarget,
                            onMouseEnter: () => {
                                h ? R() : "function" == typeof l && l()
                            },
                            onClick: () => {
                                L(t)
                            },
                            children: (0, n.jsxs)("div", {
                                className: u(a, g.copiableWrapper),
                                children: [(0, n.jsx)("div", {
                                    className: g.childWrapper,
                                    children: p
                                }), N ? (0, n.jsx)("div", {
                                    className: g.copyIconWrapper,
                                    children: (0, n.jsx)(c.default, {
                                        width: 18,
                                        height: 18,
                                        className: g.copyIcon
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
                    return s
                }
            });
            var l = a("42203");

            function s(e, t) {
                let a = l.default.getChannel(t);
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
            var l = a("65597"),
                s = a("845579"),
                n = a("102985"),
                i = a("697218"),
                r = a("782340");
            let u = "legacy_username";

            function o(e) {
                var t;
                let a = s.LegacyUsernameDisabled.useSetting(),
                    o = (0, l.default)([i.default], () => i.default.getCurrentUser()),
                    d = (0, l.default)([n.default], () => n.default.hidePersonalInformation);
                if (null == e) return [];
                let c = null !== (t = null == e ? void 0 : e.getBadges()) && void 0 !== t ? t : [];
                return null != o && o.id === e.userId && a && (c = c.filter(e => e.id !== u)), d && (c = c.map(e => ({
                    ...e,
                    description: e.id === u ? r.default.Messages.STREAMER_MODE_ENABLED : e.description
                }))), c
            }
        },
        590006: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                BadgeSizes: function() {
                    return l
                },
                default: function() {
                    return v
                }
            }), a("424973");
            var l, s, n = a("37983");
            a("884691");
            var i = a("414456"),
                r = a.n(i),
                u = a("77078"),
                o = a("572544"),
                d = a("244201"),
                c = a("298878"),
                f = a("643121"),
                m = a("217513"),
                T = a("590456"),
                S = a("49111"),
                g = a("782340"),
                C = a("730684"),
                p = a("696246");

            function v(e) {
                let {
                    user: t,
                    guildId: a,
                    className: l,
                    shrinkAtCount: s,
                    shrinkToSize: i,
                    isTryItOutFlow: v,
                    size: N = 0
                } = e, A = (0, m.default)(t.id, a), E = (0, f.default)(A).map(e => ({
                    ...e,
                    src: (0, T.getBadgeAsset)(e.icon)
                })), h = (0, d.useWindowDispatch)();
                if (t.isClyde()) return (0, n.jsx)("div", {
                    className: r(l, C.container, C.clydeBadgeList),
                    "aria-label": g.default.Messages.PROFILE_USER_BADGES,
                    role: "group",
                    children: (0, n.jsx)(c.default, {})
                });
                v && null == E.find(e => "premium" === e.id) && E.push({
                    id: "premium",
                    icon: p,
                    src: p,
                    description: g.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                        date: new Date
                    })
                });
                let _ = null != s && null != i && E.length > s ? i : N;
                return (0, n.jsx)("div", {
                    className: r(l, E.length > 0 ? C.containerWithContent : C.container),
                    "aria-label": g.default.Messages.PROFILE_USER_BADGES,
                    role: "group",
                    children: E.map(e => (0, n.jsx)(u.Tooltip, {
                        position: "top",
                        text: e.description,
                        spacing: 12,
                        children: t => (0, n.jsx)(u.Anchor, {
                            ...t,
                            onClick: a => {
                                var l;
                                null === (l = t.onClick) || void 0 === l || l.call(t);
                                let s = null != e.link ? (0, o.default)(e.link) : null;
                                if (null != s) return h.dispatch(S.ComponentActions.POPOUT_CLOSE), s(a)
                            },
                            href: e.link,
                            children: (0, n.jsx)("img", {
                                alt: " ",
                                "aria-hidden": !0,
                                src: e.src,
                                className: r({
                                    [C.profileBadge24]: 0 === _,
                                    [C.profileBadge22]: 1 === _,
                                    [C.profileBadge18]: 2 === _
                                })
                            })
                        })
                    }, e.id))
                })
            }(s = l || (l = {}))[s.SIZE_24 = 0] = "SIZE_24", s[s.SIZE_22 = 1] = "SIZE_22", s[s.SIZE_18 = 2] = "SIZE_18"
        },
        880114: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return m
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("65597"),
                n = a("77078"),
                i = a("535013"),
                r = a("915639"),
                u = a("476263"),
                o = a("153769"),
                d = a("299039"),
                c = a("782340"),
                f = a("334099");

            function m(e) {
                let {
                    userId: t,
                    headingClassName: a,
                    textClassName: m,
                    guild: T,
                    guildMember: S
                } = e, g = (0, s.default)([r.default], () => r.default.locale), C = null != T && null != S;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(n.Heading, {
                        variant: "eyebrow",
                        className: a,
                        children: C ? c.default.Messages.USER_PROFILE_MEMBER_SINCE : c.default.Messages.USER_PROFILE_DISCORD_MEMBER_SINCE
                    }), (0, l.jsxs)("div", {
                        className: f.memberSinceContainer,
                        children: [C && (0, l.jsx)(n.Tooltip, {
                            text: c.default.Messages.DISCORD_NAME,
                            children: e => (0, l.jsx)(o.default, {
                                ...e,
                                className: f.discordIcon
                            })
                        }), (0, l.jsx)(n.Text, {
                            className: m,
                            variant: "text-sm/normal",
                            children: (0, i.getCreatedAtDate)(d.default.extractTimestamp(t), g)
                        }), null != T && null != S && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: f.divider
                            }), (0, l.jsx)(n.Tooltip, {
                                text: T.name,
                                children: e => (0, l.jsx)(u.default, {
                                    ...e,
                                    guild: T,
                                    size: u.default.Sizes.SMOL
                                })
                            }), (0, l.jsx)(n.Text, {
                                className: m,
                                variant: "text-sm/normal",
                                children: (0, i.getCreatedAtDate)(S.joinedAt, g)
                            })]
                        })]
                    })]
                })
            }
        },
        552243: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("301165"),
                n = a("65597"),
                i = a("206230"),
                r = e => {
                    let {
                        children: t,
                        initTranslate3d: a
                    } = e, r = (0, n.default)([i.default], () => i.default.useReducedMotion), u = (0, s.useSpring)({
                        immediate: r,
                        from: {
                            transform: a
                        },
                        to: {
                            transform: "translate3d(0, 0, 0)"
                        }
                    });
                    return (0, l.jsx)(s.animated.div, {
                        style: u,
                        children: t
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
            var l = a("37983");
            a("884691");
            var s = a("414456"),
                n = a.n(s),
                i = a("193853");

            function r(e) {
                let {
                    className: t
                } = e;
                return (0, l.jsx)("div", {
                    className: n(i.divider, t)
                })
            }
        },
        935409: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                UserPopoutBadgeList: function() {
                    return w
                },
                UserPopoutAvatar: function() {
                    return k
                },
                default: function() {
                    return z
                }
            }), a("794252");
            var l = a("37983"),
                s = a("884691"),
                n = a("414456"),
                i = a.n(n),
                r = a("506838"),
                u = a("446674"),
                o = a("669491"),
                d = a("77078"),
                c = a("606292"),
                f = a("688318"),
                m = a("980215"),
                T = a("824794"),
                S = a("635471"),
                g = a("305961"),
                C = a("790618"),
                p = a("697218"),
                v = a("423487"),
                N = a("587974"),
                A = a("599110"),
                E = a("719923"),
                h = a("50885"),
                _ = a("713135"),
                x = a("106435"),
                M = a("289918"),
                I = a("878569"),
                U = a("590006"),
                y = a("430312"),
                j = a("401642"),
                O = a("552243"),
                P = a("590456"),
                R = a("49111"),
                L = a("646718"),
                b = a("782340"),
                G = a("524466"),
                D = a("231185");
            let B = d.AvatarSizes.SIZE_80,
                H = (0, c.getDecorationSizeForAvatarSize)(B);

            function w(e) {
                let {
                    user: t,
                    guildId: a,
                    isTryItOutFlow: s,
                    forProfileEffectModal: n
                } = e, i = (0, u.useStateFromStores)([_.default], () => _.default.getUserProfile(t.id), [t]), r = (0, u.useStateFromStores)([g.default], () => g.default.getGuild(a), [a]), c = (0, m.useClydeProfilesEnabled)(r);
                return (0, l.jsxs)(l.Fragment, {
                    children: [(null == i ? void 0 : i.profileFetchFailed) && (!t.isClyde() || c) && (0, l.jsx)(d.Tooltip, {
                        text: b.default.Messages.USER_PROFILE_LOAD_ERROR,
                        spacing: 16,
                        children: e => (0, l.jsx)(v.default, {
                            ...e,
                            className: G.warningCircleIcon,
                            color: o.default.unsafe_rawColors.YELLOW_300.css
                        })
                    }), (0, l.jsx)(U.default, {
                        className: n ? G.profileBadgesCompactNoTouch : G.profileBadges,
                        user: t,
                        guildId: a,
                        isTryItOutFlow: s,
                        size: U.BadgeSizes.SIZE_22
                    })]
                })
            }
            let F = h.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar;

            function k(e) {
                let {
                    user: t,
                    displayProfile: a,
                    avatarSrc: n,
                    hasBanner: o,
                    status: c,
                    isMobile: m,
                    guildId: S,
                    channelId: g,
                    onClose: C,
                    disableUserProfileLink: v,
                    profileType: h,
                    animateOnHover: _,
                    hasProfileEffect: M
                } = e, U = (0, u.useStateFromStores)([p.default], () => p.default.getCurrentUser()), {
                    profileTheme: w
                } = s.useContext(y.UserProfileContext), k = s.useContext(A.AnalyticsContext), z = t.isNonUserBot() && !t.isClyde(), W = E.default.isPremiumAtLeast(null == a ? void 0 : a.premiumType, L.PremiumTypes.TIER_2), Y = s.useMemo(() => (0, T.shouldDisableUserPresenceInChannel)(t, g), [t, g]), Z = v || t.isClyde(), {
                    avatarDecorationSrc: V,
                    avatarSrc: K,
                    eventHandlers: Q,
                    isAnimating: X
                } = (0, x.default)({
                    user: t,
                    guildId: S,
                    size: B,
                    animateOnHover: _
                }), {
                    avatarDecorationSrc: q
                } = (0, f.default)({
                    user: t,
                    size: H,
                    animateOnHover: !X,
                    showPending: t.id === (null == U ? void 0 : U.id),
                    showTryItOut: t.id === (null == U ? void 0 : U.id)
                }), J = (0, l.jsxs)("div", {
                    className: G.avatarHoverTarget,
                    ...Q,
                    children: [(0, l.jsx)(F, {
                        src: null != n ? n : K,
                        avatarDecoration: null != q ? null : V,
                        size: B,
                        "aria-label": t.username,
                        status: Y ? R.StatusTypes.UNKNOWN : c,
                        statusBackdropColor: null != w && W && !Y ? (0, d.getStatusBackdropColor)(w) : void 0,
                        isMobile: m,
                        statusTooltip: !0
                    }), null != q && (0, l.jsx)(O.default, {
                        initTranslate3d: "translate3d(-20px, -120px, 0)",
                        children: (0, l.jsx)(F, {
                            src: D,
                            avatarDecoration: q,
                            size: B,
                            status: R.StatusTypes.UNKNOWN,
                            isMobile: m,
                            className: G.tryingOutAvatarDecoration,
                            "aria-hidden": !0
                        })
                    }, q)]
                }), $ = (0, r.match)(h).with(P.UserProfileTypes.POPOUT, () => {
                    let e = (0, I.buildGetPremiumUserBannerStyles)({
                        premiumUserWithBanner: G.avatarPositionPremiumBanner,
                        premiumUserWithoutBanner: G.avatarPositionPremiumNoBanner,
                        default: G.avatarPositionNormal
                    });
                    return e({
                        isPremium: W && !z,
                        hasBanner: o,
                        hasProfileEffect: M
                    })
                }).with(P.UserProfileTypes.POMELO_POPOUT, () => G.avatarPositionPomelo).with(P.UserProfileTypes.PANEL, () => G.avatarPositionPanel).exhaustive();
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsxs)(d.Clickable, {
                        className: i({
                            [G.clickable]: !Z,
                            [G.avatarWrapperNonUserBot]: z,
                            [G.avatarWrapperNormal]: !z
                        }, $),
                        onClick: z || Z ? void 0 : function() {
                            (0, j.openUserProfileModal)({
                                userId: t.id,
                                guildId: null != S ? S : void 0,
                                channelId: null != g ? g : void 0,
                                analyticsLocation: k.location
                            }), null == C || C()
                        },
                        children: [J, !Z && function() {
                            let e = null != V,
                                t = e ? H : (0, d.getAvatarSize)(B);
                            return (0, l.jsx)(N.default, {
                                mask: null == c || c === R.StatusTypes.UNKNOWN || Y ? N.default.Masks.AVATAR_DEFAULT : (0, r.match)([e, m]).with([!0, !0], () => N.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => N.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => N.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => N.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
                                className: e ? G.avatarDecorationHint : G.avatarHint,
                                style: e ? {
                                    borderRadius: .4 * t
                                } : void 0,
                                width: t,
                                height: t,
                                children: (0, l.jsx)("div", {
                                    className: G.avatarHintInner,
                                    children: b.default.Messages.VIEW_PROFILE
                                })
                            })
                        }()]
                    })
                })
            }

            function z(e) {
                let {
                    user: t,
                    displayProfile: a,
                    guildId: s,
                    channelId: n,
                    onClose: i,
                    isMobile: r,
                    isStreaming: o,
                    status: d,
                    disableUserProfileLink: c,
                    isHovering: f,
                    showPremiumBadgeUpsell: m = !0,
                    showCollectiblesTryItOut: T = !1,
                    upsell: g
                } = e, v = (0, u.useStateFromStores)([p.default], () => p.default.getCurrentUser()), N = (0, u.useStateFromStores)([C.default], () => C.default.getTryItOutProfileEffectID()), A = T && t.id === (null == v ? void 0 : v.id) && null != N ? N : null == a ? void 0 : a.profileEffectID;
                return (0, l.jsxs)(l.Fragment, {
                    children: [g, (0, l.jsx)(M.default, {
                        user: t,
                        displayProfile: a,
                        onClose: i,
                        guildId: s,
                        profileType: P.UserProfileTypes.POPOUT,
                        showPremiumBadgeUpsell: m,
                        isHovering: f,
                        hasProfileEffect: T || (null == a ? void 0 : a.profileEffectID) != null
                    }), null != A && (0, l.jsx)(S.default, {
                        profileEffectID: A,
                        bannerAdjustment: 0,
                        isHovering: f
                    }), (0, l.jsx)(k, {
                        user: t,
                        displayProfile: a,
                        status: o ? R.StatusTypes.STREAMING : d,
                        isMobile: r,
                        guildId: s,
                        channelId: n,
                        onClose: i,
                        disableUserProfileLink: c,
                        hasBanner: (null == a ? void 0 : a.banner) != null,
                        hasProfileEffect: T || null != A,
                        profileType: P.UserProfileTypes.POPOUT
                    }), (0, l.jsx)(w, {
                        user: t,
                        guildId: s
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
            var l = a("37983");
            a("884691");
            var s = a("77078"),
                n = a("224038");

            function i(e) {
                let {
                    user: t,
                    nickname: a
                } = e, i = null != a;
                return (0, l.jsx)(s.Avatar, {
                    src: t.getAvatarURL(void 0, i ? 16 : 24),
                    size: i ? s.AvatarSizes.SIZE_16 : s.AvatarSizes.SIZE_24,
                    className: i ? n.miniAvatar : n.largeAvatar,
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
            var l = a("37983");
            a("884691");
            var s = a("414456"),
                n = a.n(s),
                i = a("383957");

            function r(e) {
                let {
                    children: t,
                    lastSection: a = !1,
                    className: s,
                    ...r
                } = e;
                return (0, l.jsx)("div", {
                    className: n(i.section, s, {
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
                    return N
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("414456"),
                n = a.n(s),
                i = a("446674"),
                r = a("77078"),
                u = a("997289"),
                o = a("697218"),
                d = a("476263"),
                c = a("216422"),
                f = a("719923"),
                m = a("485422"),
                T = a("777003"),
                S = a("49111"),
                g = a("782340"),
                C = a("125234"),
                p = a("814076");

            function v(e) {
                let {
                    guildName: t
                } = e;
                return (0, l.jsxs)("div", {
                    className: C.guildMemberProfileTooltip,
                    children: [(0, l.jsx)(c.default, {
                        className: C.guildMemberProfileTooltipNitroWheel
                    }), g.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                        guildName: t
                    })]
                })
            }

            function N(e) {
                let {
                    guild: t,
                    bio: s,
                    hidePersonalInformation: c,
                    isUsingGuildBio: N,
                    lastSection: A = !1,
                    animateOnHover: E = !1,
                    isHovering: h = !1,
                    lineClamp: _
                } = e, {
                    location: x
                } = (0, u.useAnalyticsContext)(), M = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()), I = f.default.canUsePremiumGuildMemberProfile(M);
                return c || null == s || "" === s ? null : (0, l.jsxs)(T.default, {
                    lastSection: A,
                    children: [(0, l.jsxs)(r.Heading, {
                        variant: "eyebrow",
                        className: p.title,
                        children: [g.default.Messages.USER_POPOUT_ABOUT_ME, null != t && N && (0, l.jsx)(r.Tooltip, {
                            color: r.Tooltip.Colors.CUSTOM,
                            tooltipClassName: C.aboutMeGuildIconTooltip,
                            "aria-label": g.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                                guildName: t.name
                            }),
                            text: (0, l.jsx)(v, {
                                guildName: t.name
                            }),
                            children: e => (0, l.jsx)(d.default, {
                                ...e,
                                onClick: () => {
                                    var t;
                                    null == (t = e.onClick) || t(), null != M && !I && (0, r.openModalLazy)(async () => {
                                        let {
                                            default: e
                                        } = await a.el("414242").then(a.bind(a, "414242"));
                                        return t => (0, l.jsx)(e, {
                                            ...t,
                                            source: {
                                                ...x,
                                                object: S.AnalyticsObjects.GUILD_ICON
                                            }
                                        })
                                    })
                                },
                                guild: t,
                                size: d.default.Sizes.SMOL,
                                className: n(C.aboutMeGuildIcon, {
                                    [C.nonPremiumHoverState]: !I
                                })
                            })
                        })]
                    }), (0, l.jsx)(m.default, {
                        userBio: s,
                        animateOnHover: E,
                        isHovering: h,
                        lineClamp: _
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
            var l = a("37983");
            a("884691");
            var s = a("775377"),
                n = a("777003"),
                i = a("184256");

            function r(e) {
                let {
                    customStatusActivity: t,
                    className: a,
                    animate: r
                } = e;
                return null == t ? null : (0, l.jsx)(n.default, {
                    className: a,
                    children: (0, l.jsx)(s.default, {
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
            var l = a("37983");
            a("884691");
            var s = a("880114"),
                n = a("777003"),
                i = a("814076");

            function r(e) {
                let {
                    userId: t,
                    guild: a,
                    guildMember: r
                } = e;
                return (0, l.jsx)(n.default, {
                    children: (0, l.jsx)(s.default, {
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
                    return m
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("414456"),
                n = a.n(s),
                i = a("77078"),
                r = a("145079"),
                u = a("123377"),
                o = a("158998"),
                d = a("777003"),
                c = a("782340"),
                f = a("119111");

            function m(e) {
                let {
                    user: t,
                    shouldCopyOnClick: a,
                    nickname: s,
                    pronouns: m,
                    usernameIcon: T,
                    identityCTA: S,
                    className: g,
                    isTryItOut: C = !1,
                    lastSection: p
                } = e;
                return (0, l.jsx)(d.default, {
                    className: n(f.container, g),
                    lastSection: p,
                    children: (0, l.jsxs)("div", {
                        className: a ? f.copiableNameTag : void 0,
                        children: [(0, l.jsx)(u.CopiableField, {
                            className: f.copiableField,
                            copyMetaData: "User Tag",
                            copyValue: o.default.getUserTag(t, {
                                decoration: "never",
                                identifiable: "always"
                            }),
                            showCopyIcon: !0,
                            disableCopy: !a,
                            children: (0, l.jsxs)("div", {
                                className: f.userText,
                                children: [null != s ? (0, l.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: f.nickname,
                                    children: s
                                }) : null, (0, l.jsx)(r.default, {
                                    usernameIcon: T,
                                    user: t,
                                    forceUsername: !0,
                                    forcePomelo: C,
                                    className: null == s ? f.userTagNoNickname : f.userTagWithNickname,
                                    usernameClass: null == s ? f.userTagUsernameNoNickname : f.userTagUsernameBase,
                                    discriminatorClass: null == s ? f.userTagDiscriminatorNoNickname : f.discrimBase,
                                    botClass: null == s ? f.headerBotTag : f.headerBotTagWithNickname
                                }), S]
                            })
                        }), null != m && "" !== m && (0, l.jsx)(i.Tooltip, {
                            text: c.default.Messages.USER_PROFILE_PRONOUNS,
                            children: e => (0, l.jsx)(i.Text, {
                                ...e,
                                variant: "text-sm/normal",
                                className: f.pronouns,
                                children: m
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
            var l = a("37983");
            a("884691");
            var s = a("469563"),
                n = a("267527"),
                i = a("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 28,
                        height: a = 20,
                        color: s = "currentColor",
                        foreground: n,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: a,
                        viewBox: "0 0 28 20",
                        children: (0, l.jsx)("path", {
                            className: n,
                            fill: s,
                            d: "M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"
                        })
                    })
                }, n.ClydeIcon, void 0, {
                    size: 28
                })
        },
        137783: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return n
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("75196");

            function n(e) {
                let {
                    width: t = 16,
                    height: a = 16,
                    color: n = "currentColor",
                    foreground: i,
                    ...r
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(r),
                    width: t,
                    height: a,
                    viewBox: "0 0 16 16",
                    children: (0, l.jsx)("path", {
                        className: i,
                        fill: n,
                        d: "M6,7 L2,7 L2,6 L6,6 L6,7 Z M8,5 L2,5 L2,4 L8,4 L8,5 Z M8,3 L2,3 L2,2 L8,2 L8,3 Z M8.88888889,0 L1.11111111,0 C0.494444444,0 0,0.494444444 0,1.11111111 L0,8.88888889 C0,9.50253861 0.497461389,10 1.11111111,10 L8.88888889,10 C9.50253861,10 10,9.50253861 10,8.88888889 L10,1.11111111 C10,0.494444444 9.5,0 8.88888889,0 Z",
                        transform: "translate(3 3)"
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=d08e6762d828df908823.js.map