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
                    return v
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
                m = a("845579"),
                T = a("137783"),
                S = a("49111"),
                p = a("205341");

            function v(e) {
                let {
                    emoji: t,
                    className: a,
                    animate: s = !0,
                    hideTooltip: n
                } = e, o = m.AnimateEmoji.useSetting(), d = null != t.id ? ":".concat(t.name, ":") : c.default.translateSurrogatesToInlineEmoji(t.name), f = {
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
            let N = e => {
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
                } = e, m = null != t ? t.find(e => e.type === S.ActivityTypes.CUSTOM_STATUS) : null, g = null != t ? t.find(e => e.type === S.ActivityTypes.HANG_STATUS) : null, A = null;
                null != g ? A = (0, l.jsx)(f.default, {
                    className: i,
                    hangStatusActivity: g
                }) : null != m && null != m.emoji && !c && (A = (0, l.jsx)(v, {
                    emoji: m.emoji,
                    animate: r,
                    hideTooltip: u,
                    className: i
                }));
                let C = (0, d.default)(t, a),
                    E = null != C && C.length > 0;
                return null != A || E ? (0, l.jsxs)("div", {
                    className: s,
                    children: [A, (0, l.jsx)(N, {
                        text: C,
                        className: n
                    }), null != t && t.some(o.default) ? (0, l.jsx)(T.default, {
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
                    hideEmoji: m = !1,
                    children: T
                } = e;
                if (null == t) return null;
                let {
                    emoji: S
                } = t, p = null != t.state && "" !== t.state ? t.state : o;
                return (0, l.jsxs)("div", {
                    className: n(r.container, a),
                    children: [m || null == S ? null : (0, l.jsx)(i.ActivityEmoji, {
                        emoji: S,
                        className: n(r.emoji, s, null != d ? {
                            [d]: null == p || "" === p
                        } : null),
                        animate: c,
                        hideTooltip: f
                    }), null != p && p.length > 0 ? (0, l.jsx)("span", {
                        className: u,
                        children: p
                    }) : null, T]
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
                        title: n.default.Messages.STATUS_CHILLING,
                        icon: o,
                        color: l.default.YELLOW
                    },
                    [s.HangStatusTypes.GAMING]: {
                        title: n.default.Messages.STATUS_GAMING,
                        icon: r,
                        color: l.default.TEAL
                    },
                    [s.HangStatusTypes.FOCUSING]: {
                        title: n.default.Messages.STATUS_FOCUSING,
                        icon: i,
                        color: l.default.ROLE_PURPLE
                    },
                    [s.HangStatusTypes.BRB]: {
                        title: n.default.Messages.STATUS_BRB,
                        icon: u,
                        color: l.default.ROLE_GREEN
                    }
                }),
                c = e => {
                    if ((null == e ? void 0 : e.type) !== s.ActivityTypes.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
                    let t = e.state;
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
                    return v
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
                p = a("491701");

            function v(e) {
                var t;
                let {
                    className: a,
                    copyValue: r,
                    copyMetaData: v,
                    children: N,
                    disableCopy: g,
                    showCopyIcon: A
                } = e, [C, E] = i.useState(0), [_, h] = i.useState(!1), [U, y] = i.useState(!1);
                if (i.useEffect(() => (l = new o.Timeout, s = new o.Timeout, function() {
                        l.stop(), s.stop()
                    }), []), !m.SUPPORTS_COPY || g) return (0, n.jsx)(n.Fragment, {
                    children: N
                });
                let M = [S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_1, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_2, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_3, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_4, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_5, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_6, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_7, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_8, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_9, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_10, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_11],
                    O = Math.min(Math.max(C - 1, 0), M.length - 1),
                    I = null !== (t = M[O]) && void 0 !== t ? t : M[0],
                    x = C >= M.length - 1,
                    j = x ? d.TooltipColors.RED : d.TooltipColors.GREEN,
                    P = _ ? j : d.TooltipColors.PRIMARY,
                    R = () => {
                        l.stop(), y(!1)
                    },
                    L = e => {
                        (0, m.copy)(r), f.default.track(T.AnalyticEvents.TEXT_COPIED, {
                            type: v
                        }), "function" == typeof e && e(), !U && E(C + 1), y(!0), h(!0), l.start(1e3, () => y(!1)), s.start(2e3, () => E(0))
                    };
                return (0, n.jsx)(d.Tooltip, {
                    delay: 500,
                    color: P,
                    forceOpen: U,
                    text: _ ? (0, n.jsx)(d.Shaker, {
                        isShaking: x,
                        children: I
                    }) : S.default.Messages.ACCOUNT_CLICK_TO_COPY,
                    onAnimationRest: (e, t) => {
                        !U && _ && t.phase === T.SpringTransitionPhases.LEAVE && h(!1)
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
                                _ ? R() : "function" == typeof l && l()
                            },
                            onClick: () => {
                                L(t)
                            },
                            children: (0, n.jsxs)("div", {
                                className: u(a, p.copiableWrapper),
                                children: [(0, n.jsx)("div", {
                                    className: p.childWrapper,
                                    children: N
                                }), A ? (0, n.jsx)("div", {
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
                m = a("217513"),
                T = a("590456"),
                S = a("49111"),
                p = a("782340"),
                v = a("730684"),
                N = a("696246");

            function g(e) {
                let {
                    user: t,
                    guildId: a,
                    className: l,
                    shrinkAtCount: s,
                    shrinkToSize: i,
                    isTryItOutFlow: g,
                    size: A = 0
                } = e, C = (0, m.default)(t.id, a), E = (0, f.default)(C).map(e => ({
                    ...e,
                    src: (0, T.getBadgeAsset)(e.icon)
                })), _ = (0, d.useWindowDispatch)();
                if (t.isClyde()) return (0, n.jsx)("div", {
                    className: r(l, v.container, v.clydeBadgeList),
                    "aria-label": p.default.Messages.PROFILE_USER_BADGES,
                    role: "group",
                    children: (0, n.jsx)(c.default, {})
                });
                g && null == E.find(e => "premium" === e.id) && E.push({
                    id: "premium",
                    icon: N,
                    src: N,
                    description: p.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                        date: new Date
                    })
                });
                let h = null != s && null != i && E.length > s ? i : A;
                return (0, n.jsx)("div", {
                    className: r(l, E.length > 0 ? v.containerWithContent : v.container),
                    "aria-label": p.default.Messages.PROFILE_USER_BADGES,
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
                                if (null != s) return _.dispatch(S.ComponentActions.POPOUT_CLOSE), s(a)
                            },
                            href: e.link,
                            children: (0, n.jsx)("img", {
                                alt: " ",
                                "aria-hidden": !0,
                                src: e.src,
                                className: r({
                                    [v.profileBadge24]: 0 === h,
                                    [v.profileBadge22]: 1 === h,
                                    [v.profileBadge18]: 2 === h
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
                m = a("980215"),
                T = a("824794"),
                S = a("635471"),
                p = a("305961"),
                v = a("697218"),
                N = a("423487"),
                g = a("587974"),
                A = a("599110"),
                C = a("719923"),
                E = a("50885"),
                _ = a("713135"),
                h = a("106435"),
                U = a("289918"),
                y = a("878569"),
                M = a("590006"),
                O = a("430312"),
                I = a("401642"),
                x = a("552243"),
                j = a("590456"),
                P = a("49111"),
                R = a("646718"),
                L = a("782340"),
                b = a("524466"),
                G = a("231185");
            let B = d.AvatarSizes.SIZE_80,
                D = (0, c.getDecorationSizeForAvatarSize)(B);

            function H(e) {
                let {
                    user: t,
                    guildId: a,
                    isTryItOutFlow: s,
                    forProfileEffectModal: n
                } = e, i = (0, u.useStateFromStores)([_.default], () => _.default.getUserProfile(t.id), [t]), r = (0, u.useStateFromStores)([p.default], () => p.default.getGuild(a), [a]), c = (0, m.useClydeProfilesEnabled)(r);
                return (0, l.jsxs)(l.Fragment, {
                    children: [(null == i ? void 0 : i.profileFetchFailed) && (!t.isClyde() || c) && (0, l.jsx)(d.Tooltip, {
                        text: L.default.Messages.USER_PROFILE_LOAD_ERROR,
                        spacing: 16,
                        children: e => (0, l.jsx)(N.default, {
                            ...e,
                            className: b.warningCircleIcon,
                            color: o.default.unsafe_rawColors.YELLOW_300.css
                        })
                    }), (0, l.jsx)(M.default, {
                        className: n ? b.profileBadgesCompactNoTouch : b.profileBadges,
                        user: t,
                        guildId: a,
                        isTryItOutFlow: s,
                        size: M.BadgeSizes.SIZE_22
                    })]
                })
            }
            let k = E.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar;

            function w(e) {
                let {
                    user: t,
                    displayProfile: a,
                    avatarSrc: n,
                    hasBanner: o,
                    status: c,
                    isMobile: m,
                    guildId: S,
                    channelId: p,
                    onClose: N,
                    disableUserProfileLink: E,
                    profileType: _,
                    animateOnHover: U,
                    hasProfileEffect: M
                } = e, H = (0, u.useStateFromStores)([v.default], () => v.default.getCurrentUser()), {
                    profileTheme: w
                } = s.useContext(O.UserProfileContext), F = s.useContext(A.AnalyticsContext), W = t.isNonUserBot() && !t.isClyde(), Y = C.default.isPremiumAtLeast(null == a ? void 0 : a.premiumType, R.PremiumTypes.TIER_2), z = s.useMemo(() => (0, T.shouldDisableUserPresenceInChannel)(t, p), [t, p]), Z = E || t.isClyde(), {
                    avatarDecorationSrc: V,
                    avatarSrc: K,
                    eventHandlers: Q,
                    isAnimating: X
                } = (0, h.default)({
                    user: t,
                    guildId: S,
                    size: B,
                    animateOnHover: U
                }), {
                    avatarDecorationSrc: q
                } = (0, f.default)({
                    size: D,
                    animateOnHover: !X,
                    showPending: t.id === (null == H ? void 0 : H.id),
                    showTryItOut: t.id === (null == H ? void 0 : H.id)
                }), J = (0, l.jsxs)("div", {
                    className: b.avatarHoverTarget,
                    ...Q,
                    children: [(0, l.jsx)(k, {
                        src: null != n ? n : K,
                        avatarDecoration: null != q ? null : V,
                        size: B,
                        "aria-label": t.username,
                        status: z ? P.StatusTypes.UNKNOWN : c,
                        statusBackdropColor: null != w && Y && !z ? (0, d.getStatusBackdropColor)(w) : void 0,
                        isMobile: m,
                        statusTooltip: !0
                    }), null != q && (0, l.jsx)(x.default, {
                        initTranslate3d: "translate3d(-20px, -120px, 0)",
                        children: (0, l.jsx)(k, {
                            src: G,
                            avatarDecoration: q,
                            size: B,
                            status: P.StatusTypes.UNKNOWN,
                            isMobile: m,
                            className: b.tryingOutAvatarDecoration,
                            "aria-hidden": !0
                        })
                    }, q)]
                }), $ = (0, r.match)(_).with(j.UserProfileTypes.POPOUT, () => {
                    let e = (0, y.buildGetPremiumUserBannerStyles)({
                        premiumUserWithBanner: b.avatarPositionPremiumBanner,
                        premiumUserWithoutBanner: b.avatarPositionPremiumNoBanner,
                        default: b.avatarPositionNormal
                    });
                    return e({
                        isPremium: Y && !W,
                        hasBanner: o,
                        hasProfileEffect: M
                    })
                }).with(j.UserProfileTypes.POMELO_POPOUT, () => b.avatarPositionPomelo).with(j.UserProfileTypes.PANEL, () => b.avatarPositionPanel).exhaustive();
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsxs)(d.Clickable, {
                        className: i({
                            [b.clickable]: !Z,
                            [b.avatarWrapperNonUserBot]: W,
                            [b.avatarWrapperNormal]: !W
                        }, $),
                        onClick: W || Z ? void 0 : function() {
                            (0, I.openUserProfileModal)({
                                userId: t.id,
                                guildId: null != S ? S : void 0,
                                channelId: null != p ? p : void 0,
                                analyticsLocation: F.location
                            }), null == N || N()
                        },
                        children: [J, !Z && function() {
                            let e = null != V,
                                t = e ? D : (0, d.getAvatarSize)(B);
                            return (0, l.jsx)(g.default, {
                                mask: null == c || c === P.StatusTypes.UNKNOWN || z ? g.default.Masks.AVATAR_DEFAULT : (0, r.match)([e, m]).with([!0, !0], () => g.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => g.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => g.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => g.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
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
                    upsell: m
                } = e, T = null == a ? void 0 : a.profileEffectID;
                return (0, l.jsxs)(l.Fragment, {
                    children: [m, (0, l.jsx)(U.default, {
                        user: t,
                        displayProfile: a,
                        onClose: i,
                        guildId: s,
                        profileType: j.UserProfileTypes.POPOUT,
                        showPremiumBadgeUpsell: f,
                        isHovering: c
                    }), null != T && (0, l.jsx)(S.default, {
                        profileEffectID: T,
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
                        hasProfileEffect: null != T,
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
                    return A
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
                p = a("782340"),
                v = a("125234"),
                N = a("814076");

            function g(e) {
                let {
                    guildName: t
                } = e;
                return (0, l.jsxs)("div", {
                    className: v.guildMemberProfileTooltip,
                    children: [(0, l.jsx)(c.default, {
                        className: v.guildMemberProfileTooltipNitroWheel
                    }), p.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                        guildName: t
                    })]
                })
            }

            function A(e) {
                let {
                    guild: t,
                    bio: s,
                    hidePersonalInformation: c,
                    isUsingGuildBio: A,
                    lastSection: C = !1,
                    animateOnHover: E = !1,
                    isHovering: _ = !1,
                    lineClamp: h
                } = e, {
                    location: U
                } = (0, u.useAnalyticsContext)(), y = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()), M = f.default.canUsePremiumGuildMemberProfile(y);
                return c || null == s || "" === s ? null : (0, l.jsxs)(T.default, {
                    lastSection: C,
                    children: [(0, l.jsxs)(r.Heading, {
                        variant: "eyebrow",
                        className: N.title,
                        children: [p.default.Messages.USER_POPOUT_ABOUT_ME, null != t && A && (0, l.jsx)(r.Tooltip, {
                            color: r.Tooltip.Colors.CUSTOM,
                            tooltipClassName: v.aboutMeGuildIconTooltip,
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
                                    null == (t = e.onClick) || t(), null != y && !M && (0, r.openModalLazy)(async () => {
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
                                className: n(v.aboutMeGuildIcon, {
                                    [v.nonPremiumHoverState]: !M
                                })
                            })
                        })]
                    }), (0, l.jsx)(m.default, {
                        userBio: s,
                        animateOnHover: E,
                        isHovering: _,
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
                    className: p,
                    isTryItOut: v = !1,
                    lastSection: N
                } = e;
                return (0, l.jsx)(d.default, {
                    className: n(f.container, p),
                    lastSection: N,
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
                                    forcePomelo: v,
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
//# sourceMappingURL=d114046eafb2dbd96b11.js.map