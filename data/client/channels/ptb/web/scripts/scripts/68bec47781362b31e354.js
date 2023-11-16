(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["13508"], {
        47617: function(e, t, a) {
            "use strict";
            e.exports = a.p + "9c805d4760323594672c.svg"
        },
        874488: function(e, t, a) {
            "use strict";
            e.exports = a.p + "9dc4cf2c07c82e90f81f.svg"
        },
        88825: function(e, t, a) {
            "use strict";
            e.exports = a.p + "27b33a57bf87b25f5ee9.svg"
        },
        939085: function(e, t, a) {
            "use strict";
            e.exports = a.p + "6f1edee8445cb940eecd.svg"
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
                    return N
                },
                default: function() {
                    return g
                }
            }), a("222007");
            var l = a("37983"),
                s = a("884691"),
                n = a("414456"),
                i = a.n(n),
                r = a("77078"),
                u = a("430568"),
                o = a("309570"),
                d = a("29088"),
                c = a("867805"),
                f = a("342845"),
                T = a("845579"),
                m = a("137783"),
                S = a("49111"),
                p = a("205341");

            function N(e) {
                let {
                    emoji: t,
                    className: a,
                    animate: s = !0,
                    hideTooltip: n
                } = e, o = T.AnimateEmoji.useSetting(), d = null != t.id ? ":".concat(t.name, ":") : c.default.translateSurrogatesToInlineEmoji(t.name), f = {
                    className: i(p.emoji, a),
                    emojiId: t.id,
                    emojiName: t.name,
                    autoplay: !0,
                    animated: !!(t.animated && o && s)
                };
                return n ? (0, l.jsx)(u.default, {
                    ...f
                }) : (0, l.jsx)(r.Tooltip, {
                    text: d,
                    children: e => (0, l.jsx)(u.default, {
                        ...e,
                        ...f
                    })
                })
            }
            let A = e => {
                let {
                    className: t,
                    text: a
                } = e, n = s.useRef(null), u = s.useRef(null), [o, d] = s.useState(!1);
                return s.useLayoutEffect(() => {
                    let {
                        current: e
                    } = n, {
                        current: t
                    } = u;
                    if (null == e || null == t) return;
                    let a = e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight;
                    d(!a)
                }, [a]), (0, l.jsx)(r.Tooltip, {
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
                            className: i(p.textRuler, t),
                            ref: u,
                            "aria-hidden": !0,
                            children: a
                        })]
                    })
                })
            };
            var g = e => {
                let {
                    activities: t,
                    applicationStream: a,
                    className: s,
                    textClassName: n,
                    emojiClassName: i,
                    animate: r = !0,
                    hideTooltip: u = !1,
                    hideEmoji: c = !1
                } = e, T = null != t ? t.find(e => e.type === S.ActivityTypes.CUSTOM_STATUS) : null, g = null != t ? t.find(e => e.type === S.ActivityTypes.HANG_STATUS) : null, v = null;
                null != g ? v = (0, l.jsx)(f.default, {
                    className: i,
                    hangStatusActivity: g
                }) : null != T && null != T.emoji && !c && (v = (0, l.jsx)(N, {
                    emoji: T.emoji,
                    animate: r,
                    hideTooltip: u,
                    className: i
                }));
                let _ = (0, d.default)(t, a),
                    C = null != _ && _.length > 0;
                return null != v || C ? (0, l.jsxs)("div", {
                    className: s,
                    children: [v, (0, l.jsx)(A, {
                        text: _,
                        className: n
                    }), null != t && t.some(o.default) ? (0, l.jsx)(m.default, {
                        width: 16,
                        height: 16,
                        className: p.icon
                    }) : null]
                }) : null
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
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (null != e && e.type === r.ActivityTypes.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
                if (null != t) return null == e || e.type !== r.ActivityTypes.PLAYING ? u.default.Messages.SHARING_SCREEN : o(a)[r.ActivityTypes.STREAMING].format({
                    name: e.name
                });
                if (null != e && e.type === r.ActivityTypes.HANG_STATUS) return (0, l.getHangStatusText)(e);
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
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (Array.isArray(e)) {
                    let l = e;
                    return null != t && (l = [...l, null]), l.map(e => d(e, t, a)).find(e => null != e)
                }
                return d(e, t, a)
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
                    hideEmoji: T = !1,
                    children: m
                } = e;
                if (null == t) return null;
                let {
                    emoji: S
                } = t, p = null != t.state && "" !== t.state ? t.state : o;
                return (0, l.jsxs)("div", {
                    className: n(r.container, a),
                    children: [T || null == S ? null : (0, l.jsx)(i.ActivityEmoji, {
                        emoji: S,
                        className: n(r.emoji, s, null != d ? {
                            [d]: null == p || "" === p
                        } : null),
                        animate: c,
                        hideTooltip: f
                    }), null != p && p.length > 0 ? (0, l.jsx)("span", {
                        className: u,
                        children: p
                    }) : null, m]
                })
            }
        },
        925749: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                getHangStatusOptions: function() {
                    return d
                },
                getHangStatusDetails: function() {
                    return c
                },
                getHangStatusText: function() {
                    return f
                }
            });
            var l = a("927003"),
                s = a("49111"),
                n = a("782340"),
                i = a("47617"),
                r = a("874488"),
                u = a("88825"),
                o = a("939085");
            let d = () => ({
                    [s.HangStatusTypes.CHILLING]: {
                        leadIn: n.default.Messages.STATUS_LEAD_IN_JUST,
                        title: n.default.Messages.STATUS_CHILLING,
                        icon: o,
                        color: l.default.YELLOW
                    },
                    [s.HangStatusTypes.GAMING]: {
                        leadIn: n.default.Messages.STATUS_LEAD_IN_JUST,
                        title: n.default.Messages.STATUS_GAMING,
                        icon: r,
                        color: l.default.TEAL
                    },
                    [s.HangStatusTypes.FOCUSING]: {
                        leadIn: n.default.Messages.STATUS_LEAD_IN_JUST,
                        title: n.default.Messages.STATUS_FOCUSING,
                        icon: i,
                        color: l.default.ROLE_PURPLE
                    },
                    [s.HangStatusTypes.BRB]: {
                        leadIn: n.default.Messages.STATUS_LEAD_IN_HERE,
                        title: n.default.Messages.STATUS_BRB,
                        icon: u,
                        color: l.default.ROLE_GREEN
                    },
                    [s.HangStatusTypes.NONE]: {
                        leadIn: void 0,
                        title: n.default.Messages.STATUS_NONE,
                        icon: void 0,
                        color: l.default.PRIMARY_500
                    }
                }),
                c = e => {
                    if ((null == e ? void 0 : e.type) !== s.ActivityTypes.HANG_STATUS) return null;
                    let t = null != e.state ? e.state : s.HangStatusTypes.NONE;
                    return t === s.HangStatusTypes.CUSTOM ? null : d()[t]
                };

            function f(e) {
                var t;
                let a = (null == e ? void 0 : e.state) != null ? e.state : null;
                return a === s.HangStatusTypes.CUSTOM ? null == e ? void 0 : e.details : null === (t = c(e)) || void 0 === t ? void 0 : t.title
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
                    return N
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
                T = a("306160"),
                m = a("49111"),
                S = a("782340"),
                p = a("491701");

            function N(e) {
                var t;
                let {
                    className: a,
                    copyValue: r,
                    copyMetaData: N,
                    children: A,
                    disableCopy: g,
                    showCopyIcon: v
                } = e, [_, C] = i.useState(0), [E, h] = i.useState(!1), [U, M] = i.useState(!1);
                if (i.useEffect(() => (l = new o.Timeout, s = new o.Timeout, function() {
                        l.stop(), s.stop()
                    }), []), !T.SUPPORTS_COPY || g) return (0, n.jsx)(n.Fragment, {
                    children: A
                });
                let I = [S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_1, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_2, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_3, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_4, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_5, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_6, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_7, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_8, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_9, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_10, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_11],
                    y = Math.min(Math.max(_ - 1, 0), I.length - 1),
                    O = null !== (t = I[y]) && void 0 !== t ? t : I[0],
                    x = _ >= I.length - 1,
                    j = x ? d.TooltipColors.RED : d.TooltipColors.GREEN,
                    P = E ? j : d.TooltipColors.PRIMARY,
                    R = () => {
                        l.stop(), M(!1)
                    },
                    L = e => {
                        (0, T.copy)(r), f.default.track(m.AnalyticEvents.TEXT_COPIED, {
                            type: N
                        }), "function" == typeof e && e(), !U && C(_ + 1), M(!0), h(!0), l.start(1e3, () => M(!1)), s.start(2e3, () => C(0))
                    };
                return (0, n.jsx)(d.Tooltip, {
                    delay: 500,
                    color: P,
                    forceOpen: U,
                    text: E ? (0, n.jsx)(d.Shaker, {
                        isShaking: x,
                        children: O
                    }) : S.default.Messages.ACCOUNT_CLICK_TO_COPY,
                    onAnimationRest: (e, t) => {
                        !U && E && t.phase === m.SpringTransitionPhases.LEAVE && h(!1)
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
                            className: p.clickTarget,
                            onMouseEnter: () => {
                                E ? R() : "function" == typeof l && l()
                            },
                            onClick: () => {
                                L(t)
                            },
                            children: (0, n.jsxs)("div", {
                                className: u(a, p.copiableWrapper),
                                children: [(0, n.jsx)("div", {
                                    className: p.childWrapper,
                                    children: A
                                }), v ? (0, n.jsx)("div", {
                                    className: p.copyIconWrapper,
                                    children: (0, n.jsx)(c.default, {
                                        width: 18,
                                        height: 18,
                                        className: p.copyIcon
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
                    return g
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
                T = a("217513"),
                m = a("590456"),
                S = a("49111"),
                p = a("782340"),
                N = a("730684"),
                A = a("696246");

            function g(e) {
                let {
                    user: t,
                    guildId: a,
                    className: l,
                    shrinkAtCount: s,
                    shrinkToSize: i,
                    isTryItOutFlow: g,
                    size: v = 0
                } = e, _ = (0, T.default)(t.id, a), C = (0, f.default)(_).map(e => ({
                    ...e,
                    src: (0, m.getBadgeAsset)(e.icon)
                })), E = (0, d.useWindowDispatch)();
                if (t.isClyde()) return (0, n.jsx)("div", {
                    className: r(l, N.container, N.clydeBadgeList),
                    "aria-label": p.default.Messages.PROFILE_USER_BADGES,
                    role: "group",
                    children: (0, n.jsx)(c.default, {})
                });
                g && null == C.find(e => "premium" === e.id) && C.push({
                    id: "premium",
                    icon: A,
                    src: A,
                    description: p.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                        date: new Date
                    })
                });
                let h = null != s && null != i && C.length > s ? i : v;
                return (0, n.jsx)("div", {
                    className: r(l, C.length > 0 ? N.containerWithContent : N.container),
                    "aria-label": p.default.Messages.PROFILE_USER_BADGES,
                    role: "group",
                    children: C.map(e => (0, n.jsx)(u.Tooltip, {
                        position: "top",
                        text: e.description,
                        spacing: 12,
                        children: t => (0, n.jsx)(u.Anchor, {
                            ...t,
                            onClick: a => {
                                var l;
                                null === (l = t.onClick) || void 0 === l || l.call(t);
                                let s = null != e.link ? (0, o.default)(e.link) : null;
                                if (null != s) return E.dispatch(S.ComponentActions.POPOUT_CLOSE), s(a)
                            },
                            href: e.link,
                            children: (0, n.jsx)("img", {
                                alt: " ",
                                "aria-hidden": !0,
                                src: e.src,
                                className: r({
                                    [N.profileBadge24]: 0 === h,
                                    [N.profileBadge22]: 1 === h,
                                    [N.profileBadge18]: 2 === h
                                })
                            })
                        })
                    }, e.id))
                })
            }(s = l || (l = {}))[s.SIZE_24 = 0] = "SIZE_24", s[s.SIZE_22 = 1] = "SIZE_22", s[s.SIZE_18 = 2] = "SIZE_18"
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
                    return H
                },
                UserPopoutAvatar: function() {
                    return w
                },
                default: function() {
                    return F
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
                T = a("980215"),
                m = a("824794"),
                S = a("635471"),
                p = a("305961"),
                N = a("697218"),
                A = a("423487"),
                g = a("587974"),
                v = a("599110"),
                _ = a("719923"),
                C = a("50885"),
                E = a("713135"),
                h = a("106435"),
                U = a("289918"),
                M = a("878569"),
                I = a("590006"),
                y = a("430312"),
                O = a("401642"),
                x = a("552243"),
                j = a("590456"),
                P = a("49111"),
                R = a("646718"),
                L = a("782340"),
                b = a("524466"),
                G = a("231185");
            let D = d.AvatarSizes.SIZE_80,
                B = (0, c.getDecorationSizeForAvatarSize)(D);

            function H(e) {
                let {
                    user: t,
                    guildId: a,
                    isTryItOutFlow: s,
                    forProfileEffectModal: n
                } = e, i = (0, u.useStateFromStores)([E.default], () => E.default.getUserProfile(t.id), [t]), r = (0, u.useStateFromStores)([p.default], () => p.default.getGuild(a), [a]), c = (0, T.useClydeProfilesEnabled)(r);
                return (0, l.jsxs)(l.Fragment, {
                    children: [(null == i ? void 0 : i.profileFetchFailed) && (!t.isClyde() || c) && (0, l.jsx)(d.Tooltip, {
                        text: L.default.Messages.USER_PROFILE_LOAD_ERROR,
                        spacing: 16,
                        children: e => (0, l.jsx)(A.default, {
                            ...e,
                            className: b.warningCircleIcon,
                            color: o.default.unsafe_rawColors.YELLOW_300.css
                        })
                    }), (0, l.jsx)(I.default, {
                        className: n ? b.profileBadgesCompactNoTouch : b.profileBadges,
                        user: t,
                        guildId: a,
                        isTryItOutFlow: s,
                        size: I.BadgeSizes.SIZE_22
                    })]
                })
            }
            let k = C.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar;

            function w(e) {
                let {
                    user: t,
                    displayProfile: a,
                    avatarSrc: n,
                    hasBanner: o,
                    status: c,
                    isMobile: T,
                    guildId: S,
                    channelId: p,
                    onClose: A,
                    disableUserProfileLink: C,
                    profileType: E,
                    animateOnHover: U,
                    hasProfileEffect: I
                } = e, H = (0, u.useStateFromStores)([N.default], () => N.default.getCurrentUser()), {
                    profileTheme: w
                } = s.useContext(y.UserProfileContext), F = s.useContext(v.AnalyticsContext), Y = t.isNonUserBot() && !t.isClyde(), W = _.default.isPremiumAtLeast(null == a ? void 0 : a.premiumType, R.PremiumTypes.TIER_2), z = s.useMemo(() => (0, m.shouldDisableUserPresenceInChannel)(t, p), [t, p]), Z = C || t.isClyde(), {
                    avatarDecorationSrc: V,
                    avatarSrc: K,
                    eventHandlers: J,
                    isAnimating: Q
                } = (0, h.default)({
                    user: t,
                    guildId: S,
                    size: D,
                    animateOnHover: U
                }), {
                    avatarDecorationSrc: X
                } = (0, f.default)({
                    size: B,
                    animateOnHover: !Q,
                    showPending: t.id === (null == H ? void 0 : H.id),
                    showTryItOut: t.id === (null == H ? void 0 : H.id)
                }), q = (0, l.jsxs)("div", {
                    className: b.avatarHoverTarget,
                    ...J,
                    children: [(0, l.jsx)(k, {
                        src: null != n ? n : K,
                        avatarDecoration: null != X ? null : V,
                        size: D,
                        "aria-label": t.username,
                        status: z ? P.StatusTypes.UNKNOWN : c,
                        statusBackdropColor: null != w && W && !z ? (0, d.getStatusBackdropColor)(w) : void 0,
                        isMobile: T,
                        statusTooltip: !0
                    }), null != X && (0, l.jsx)(x.default, {
                        initTranslate3d: "translate3d(-20px, -120px, 0)",
                        children: (0, l.jsx)(k, {
                            src: G,
                            avatarDecoration: X,
                            size: D,
                            status: P.StatusTypes.UNKNOWN,
                            isMobile: T,
                            className: b.tryingOutAvatarDecoration,
                            "aria-hidden": !0
                        })
                    }, X)]
                }), $ = (0, r.match)(E).with(j.UserProfileTypes.POPOUT, () => {
                    let e = (0, M.buildGetPremiumUserBannerStyles)({
                        premiumUserWithBanner: b.avatarPositionPremiumBanner,
                        premiumUserWithoutBanner: b.avatarPositionPremiumNoBanner,
                        default: b.avatarPositionNormal
                    });
                    return e({
                        isPremium: W && !Y,
                        hasBanner: o,
                        hasProfileEffect: I
                    })
                }).with(j.UserProfileTypes.POMELO_POPOUT, () => b.avatarPositionPomelo).with(j.UserProfileTypes.PANEL, () => b.avatarPositionPanel).exhaustive();
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsxs)(d.Clickable, {
                        className: i({
                            [b.clickable]: !Z,
                            [b.avatarWrapperNonUserBot]: Y,
                            [b.avatarWrapperNormal]: !Y
                        }, $),
                        onClick: Y || Z ? void 0 : function() {
                            (0, O.openUserProfileModal)({
                                userId: t.id,
                                guildId: null != S ? S : void 0,
                                channelId: null != p ? p : void 0,
                                analyticsLocation: F.location
                            }), null == A || A()
                        },
                        children: [q, !Z && function() {
                            let e = null != V,
                                t = e ? B : (0, d.getAvatarSize)(D);
                            return (0, l.jsx)(g.default, {
                                mask: null == c || c === P.StatusTypes.UNKNOWN || z ? g.default.Masks.AVATAR_DEFAULT : (0, r.match)([e, T]).with([!0, !0], () => g.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => g.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => g.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => g.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
                                className: e ? b.avatarDecorationHint : b.avatarHint,
                                style: e ? {
                                    borderRadius: .4 * t
                                } : void 0,
                                width: t,
                                height: t,
                                children: (0, l.jsx)("div", {
                                    className: b.avatarHintInner,
                                    children: L.default.Messages.VIEW_PROFILE
                                })
                            })
                        }()]
                    })
                })
            }

            function F(e) {
                let {
                    user: t,
                    displayProfile: a,
                    guildId: s,
                    channelId: n,
                    onClose: i,
                    isMobile: r,
                    isStreaming: u,
                    status: o,
                    disableUserProfileLink: d,
                    isHovering: c,
                    showPremiumBadgeUpsell: f = !0,
                    upsell: T
                } = e, m = null == a ? void 0 : a.profileEffectID;
                return (0, l.jsxs)(l.Fragment, {
                    children: [T, (0, l.jsx)(U.default, {
                        user: t,
                        displayProfile: a,
                        onClose: i,
                        guildId: s,
                        profileType: j.UserProfileTypes.POPOUT,
                        showPremiumBadgeUpsell: f,
                        isHovering: c
                    }), null != m && (0, l.jsx)(S.default, {
                        profileEffectID: m,
                        bannerAdjustment: 0,
                        isHovering: c
                    }), (0, l.jsx)(w, {
                        user: t,
                        displayProfile: a,
                        status: u ? P.StatusTypes.STREAMING : o,
                        isMobile: r,
                        guildId: s,
                        channelId: n,
                        onClose: i,
                        disableUserProfileLink: d,
                        hasBanner: (null == a ? void 0 : a.banner) != null,
                        hasProfileEffect: null != m,
                        profileType: j.UserProfileTypes.POPOUT
                    }), (0, l.jsx)(H, {
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
                    return v
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
                T = a("485422"),
                m = a("777003"),
                S = a("49111"),
                p = a("782340"),
                N = a("125234"),
                A = a("814076");

            function g(e) {
                let {
                    guildName: t
                } = e;
                return (0, l.jsxs)("div", {
                    className: N.guildMemberProfileTooltip,
                    children: [(0, l.jsx)(c.default, {
                        className: N.guildMemberProfileTooltipNitroWheel
                    }), p.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                        guildName: t
                    })]
                })
            }

            function v(e) {
                let {
                    guild: t,
                    bio: s,
                    hidePersonalInformation: c,
                    isUsingGuildBio: v,
                    lastSection: _ = !1,
                    animateOnHover: C = !1,
                    isHovering: E = !1,
                    lineClamp: h
                } = e, {
                    location: U
                } = (0, u.useAnalyticsContext)(), M = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()), I = f.default.canUsePremiumGuildMemberProfile(M);
                return c || null == s || "" === s ? null : (0, l.jsxs)(m.default, {
                    lastSection: _,
                    children: [(0, l.jsxs)(r.Heading, {
                        variant: "eyebrow",
                        className: A.title,
                        children: [p.default.Messages.USER_POPOUT_ABOUT_ME, null != t && v && (0, l.jsx)(r.Tooltip, {
                            color: r.Tooltip.Colors.CUSTOM,
                            tooltipClassName: N.aboutMeGuildIconTooltip,
                            "aria-label": p.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                                guildName: t.name
                            }),
                            text: (0, l.jsx)(g, {
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
                                                ...U,
                                                object: S.AnalyticsObjects.GUILD_ICON
                                            }
                                        })
                                    })
                                },
                                guild: t,
                                size: d.default.Sizes.SMOL,
                                className: n(N.aboutMeGuildIcon, {
                                    [N.nonPremiumHoverState]: !I
                                })
                            })
                        })]
                    }), (0, l.jsx)(T.default, {
                        userBio: s,
                        animateOnHover: C,
                        isHovering: E,
                        lineClamp: h
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
        491250: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return T
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

            function T(e) {
                let {
                    user: t,
                    shouldCopyOnClick: a,
                    nickname: s,
                    pronouns: T,
                    usernameIcon: m,
                    identityCTA: S,
                    className: p,
                    isTryItOut: N = !1,
                    lastSection: A
                } = e;
                return (0, l.jsx)(d.default, {
                    className: n(f.container, p),
                    lastSection: A,
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
                                    usernameIcon: m,
                                    user: t,
                                    forceUsername: !0,
                                    forcePomelo: N,
                                    className: null == s ? f.userTagNoNickname : f.userTagWithNickname,
                                    usernameClass: null == s ? f.userTagUsernameNoNickname : f.userTagUsernameBase,
                                    discriminatorClass: null == s ? f.userTagDiscriminatorNoNickname : f.discrimBase,
                                    botClass: null == s ? f.headerBotTag : f.headerBotTagWithNickname
                                }), S]
                            })
                        }), null != T && "" !== T && (0, l.jsx)(i.Tooltip, {
                            text: c.default.Messages.USER_PROFILE_PRONOUNS,
                            children: e => (0, l.jsx)(i.Text, {
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
//# sourceMappingURL=68bec47781362b31e354.js.map