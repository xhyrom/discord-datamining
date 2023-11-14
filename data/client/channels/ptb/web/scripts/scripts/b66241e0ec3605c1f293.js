(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["13508"], {
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
                    return C
                },
                default: function() {
                    return p
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
                f = a("845579"),
                m = a("137783"),
                T = a("49111"),
                S = a("205341");

            function C(e) {
                let {
                    emoji: t,
                    className: a,
                    animate: s = !0,
                    hideTooltip: n
                } = e, o = f.AnimateEmoji.useSetting(), d = null != t.id ? ":".concat(t.name, ":") : c.default.translateSurrogatesToInlineEmoji(t.name), m = {
                    className: i(S.emoji, a),
                    emojiId: t.id,
                    emojiName: t.name,
                    autoplay: !0,
                    animated: !!(t.animated && o && s)
                };
                return n ? (0, l.jsx)(u.default, {
                    ...m
                }) : (0, l.jsx)(r.Tooltip, {
                    text: d,
                    children: e => (0, l.jsx)(u.default, {
                        ...e,
                        ...m
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
                            className: i(S.textRuler, t),
                            ref: u,
                            "aria-hidden": !0,
                            children: a
                        })]
                    })
                })
            };
            var p = e => {
                let {
                    activities: t,
                    applicationStream: a,
                    className: s,
                    textClassName: n,
                    emojiClassName: i,
                    animate: r = !0,
                    hideTooltip: u = !1,
                    hideEmoji: c = !1
                } = e, f = null != t ? t.find(e => e.type === T.ActivityTypes.CUSTOM_STATUS) : null, p = null;
                null != f && null != f.emoji && !c && (p = (0, l.jsx)(C, {
                    emoji: f.emoji,
                    animate: r,
                    hideTooltip: u,
                    className: i
                }));
                let E = (0, d.default)(t, a),
                    _ = null != E && E.length > 0;
                return null != p || _ ? (0, l.jsxs)("div", {
                    className: s,
                    children: [p, (0, l.jsx)(N, {
                        text: E,
                        className: n
                    }), null != t && t.some(o.default) ? (0, l.jsx)(m.default, {
                        width: 16,
                        height: 16,
                        className: S.icon
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
                if (null != e && e.type === r.ActivityTypes.HANG_STATUS) return (0, l.humanizeHangStatus)(e.state);
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
                } = t, C = null != t.state && "" !== t.state ? t.state : o;
                return (0, l.jsxs)("div", {
                    className: n(r.container, a),
                    children: [m || null == S ? null : (0, l.jsx)(i.ActivityEmoji, {
                        emoji: S,
                        className: n(r.emoji, s, null != d ? {
                            [d]: null == C || "" === C
                        } : null),
                        animate: c,
                        hideTooltip: f
                    }), null != C && C.length > 0 ? (0, l.jsx)("span", {
                        className: u,
                        children: C
                    }) : null, T]
                })
            }
        },
        925749: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                humanizeHangStatus: function() {
                    return n
                }
            });
            var l = a("49111"),
                s = a("782340");

            function n(e) {
                switch (e) {
                    case l.HangStatusTypes.CHILLING:
                        return s.default.Messages.STATUS_CHILLING;
                    case l.HangStatusTypes.GAMING:
                        return s.default.Messages.STATUS_GAMING;
                    case l.HangStatusTypes.FOCUSING:
                        return s.default.Messages.STATUS_FOCUSING;
                    default:
                        return null
                }
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
                m = a("306160"),
                T = a("49111"),
                S = a("782340"),
                C = a("491701");

            function N(e) {
                var t;
                let {
                    className: a,
                    copyValue: r,
                    copyMetaData: N,
                    children: p,
                    disableCopy: E,
                    showCopyIcon: _
                } = e, [A, g] = i.useState(0), [h, v] = i.useState(!1), [U, I] = i.useState(!1);
                if (i.useEffect(() => (l = new o.Timeout, s = new o.Timeout, function() {
                        l.stop(), s.stop()
                    }), []), !m.SUPPORTS_COPY || E) return (0, n.jsx)(n.Fragment, {
                    children: p
                });
                let M = [S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_1, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_2, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_3, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_4, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_5, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_6, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_7, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_8, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_9, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_10, S.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_11],
                    O = Math.min(Math.max(A - 1, 0), M.length - 1),
                    x = null !== (t = M[O]) && void 0 !== t ? t : M[0],
                    y = A >= M.length - 1,
                    P = y ? d.TooltipColors.RED : d.TooltipColors.GREEN,
                    j = h ? P : d.TooltipColors.PRIMARY,
                    L = () => {
                        l.stop(), I(!1)
                    },
                    R = e => {
                        (0, m.copy)(r), f.default.track(T.AnalyticEvents.TEXT_COPIED, {
                            type: N
                        }), "function" == typeof e && e(), !U && g(A + 1), I(!0), v(!0), l.start(1e3, () => I(!1)), s.start(2e3, () => g(0))
                    };
                return (0, n.jsx)(d.Tooltip, {
                    delay: 500,
                    color: j,
                    forceOpen: U,
                    text: h ? (0, n.jsx)(d.Shaker, {
                        isShaking: y,
                        children: x
                    }) : S.default.Messages.ACCOUNT_CLICK_TO_COPY,
                    onAnimationRest: (e, t) => {
                        !U && h && t.phase === T.SpringTransitionPhases.LEAVE && v(!1)
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
                            className: C.clickTarget,
                            onMouseEnter: () => {
                                h ? L() : "function" == typeof l && l()
                            },
                            onClick: () => {
                                R(t)
                            },
                            children: (0, n.jsxs)("div", {
                                className: u(a, C.copiableWrapper),
                                children: [(0, n.jsx)("div", {
                                    className: C.childWrapper,
                                    children: p
                                }), _ ? (0, n.jsx)("div", {
                                    className: C.copyIconWrapper,
                                    children: (0, n.jsx)(c.default, {
                                        width: 18,
                                        height: 18,
                                        className: C.copyIcon
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
                    return E
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
                C = a("782340"),
                N = a("730684"),
                p = a("696246");

            function E(e) {
                let {
                    user: t,
                    guildId: a,
                    className: l,
                    shrinkAtCount: s,
                    shrinkToSize: i,
                    isTryItOutFlow: E,
                    size: _ = 0
                } = e, A = (0, m.default)(t.id, a), g = (0, f.default)(A).map(e => ({
                    ...e,
                    src: (0, T.getBadgeAsset)(e.icon)
                })), h = (0, d.useWindowDispatch)();
                if (t.isClyde()) return (0, n.jsx)("div", {
                    className: r(l, N.container, N.clydeBadgeList),
                    "aria-label": C.default.Messages.PROFILE_USER_BADGES,
                    role: "group",
                    children: (0, n.jsx)(c.default, {})
                });
                E && null == g.find(e => "premium" === e.id) && g.push({
                    id: "premium",
                    icon: p,
                    src: p,
                    description: C.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                        date: new Date
                    })
                });
                let v = null != s && null != i && g.length > s ? i : _;
                return (0, n.jsx)("div", {
                    className: r(l, g.length > 0 ? N.containerWithContent : N.container),
                    "aria-label": C.default.Messages.PROFILE_USER_BADGES,
                    role: "group",
                    children: g.map(e => (0, n.jsx)(u.Tooltip, {
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
                                    [N.profileBadge24]: 0 === v,
                                    [N.profileBadge22]: 1 === v,
                                    [N.profileBadge18]: 2 === v
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
        789321: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                DEFAULT_COLLECTIBLES_UPSELL_HEIGHT: function() {
                    return h
                },
                default: function() {
                    return U
                }
            });
            var l = a("37983"),
                s = a("884691"),
                n = a("414456"),
                i = a.n(n),
                r = a("627445"),
                u = a.n(r),
                o = a("65597"),
                d = a("77078"),
                c = a("731898"),
                f = a("206230"),
                m = a("812204"),
                T = a("685665"),
                S = a("21526"),
                C = a("697218"),
                N = a("945330"),
                p = a("719923"),
                E = a("994428"),
                _ = a("782340"),
                A = a("304118");

            function g(e) {
                let {
                    onClick: t
                } = e;
                return (0, l.jsx)(d.Clickable, {
                    className: A.closeButton,
                    onClick: t,
                    "aria-label": _.default.Messages.DISMISS,
                    children: (0, l.jsx)(N.default, {
                        className: A.closeIcon,
                        width: 18,
                        height: 18
                    })
                })
            }
            let h = 76,
                v = e => (0, l.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    tag: "span",
                    className: A.ctaLink,
                    children: e
                });
            var U = e => {
                let {
                    onClose: t,
                    onDismiss: a,
                    isInSidebar: n = !1
                } = e, {
                    analyticsLocations: r
                } = (0, T.default)(m.default.COLLECTIBLES_USER_POPOUT_UPSELL), N = (0, o.default)([f.default], () => f.default.useReducedMotion), {
                    ref: U,
                    height: I
                } = (0, c.default)(), M = s.useMemo(() => ({
                    top: "-".concat((null != I ? I : h) + 6, "px")
                }), [I]), O = (0, o.default)([C.default], () => C.default.getCurrentUser());
                u(null != O, "currentUser should not be null");
                let x = s.useCallback(() => {
                        null == a || a(E.ContentDismissActionType.PRIMARY), null == t || t(), (0, S.openCollectiblesShop)({
                            analyticsLocations: r,
                            analyticsSource: m.default.COLLECTIBLES_USER_POPOUT_UPSELL
                        })
                    }, [a, t, r]),
                    y = s.useCallback(() => {
                        null == a || a(E.ContentDismissActionType.DISMISS)
                    }, [a]);
                return (0, l.jsx)("div", {
                    style: M,
                    className: i(A.containerWrapper, {
                        [A.animation]: !N,
                        [A.inSidebar]: n
                    }),
                    ref: U,
                    children: (0, l.jsxs)("div", {
                        className: A.container,
                        children: [(0, l.jsx)(d.Clickable, {
                            className: A.content,
                            onClick: x,
                            "aria-label": _.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                            children: (0, l.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-normal",
                                tag: "span",
                                children: p.default.canUseCollectibles(O) ? _.default.Messages.PROFILE_EFFECTS_SOCIAL_UPSELL.format({
                                    openShop: v
                                }) : _.default.Messages.PROFILE_EFFECTS_SOCIAL_UPSELL_NON_NITRO.format({
                                    openShop: v
                                })
                            })
                        }), (0, l.jsx)("div", {
                            className: A.buttons,
                            children: (0, l.jsx)(g, {
                                onClick: y
                            })
                        })]
                    })
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
                    return F
                },
                UserPopoutAvatar: function() {
                    return H
                },
                default: function() {
                    return W
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
                C = a("305961"),
                N = a("697218"),
                p = a("423487"),
                E = a("587974"),
                _ = a("599110"),
                A = a("719923"),
                g = a("50885"),
                h = a("713135"),
                v = a("106435"),
                U = a("289918"),
                I = a("878569"),
                M = a("590006"),
                O = a("430312"),
                x = a("401642"),
                y = a("552243"),
                P = a("789321"),
                j = a("590456"),
                L = a("49111"),
                R = a("646718"),
                b = a("782340"),
                G = a("524466"),
                D = a("231185");
            let k = d.AvatarSizes.SIZE_80,
                B = (0, c.getDecorationSizeForAvatarSize)(k);

            function F(e) {
                let {
                    user: t,
                    guildId: a,
                    isTryItOutFlow: s,
                    forProfileEffectModal: n
                } = e, i = (0, u.useStateFromStores)([h.default], () => h.default.getUserProfile(t.id), [t]), r = (0, u.useStateFromStores)([C.default], () => C.default.getGuild(a), [a]), c = (0, m.useClydeProfilesEnabled)(r);
                return (0, l.jsxs)(l.Fragment, {
                    children: [(null == i ? void 0 : i.profileFetchFailed) && (!t.isClyde() || c) && (0, l.jsx)(d.Tooltip, {
                        text: b.default.Messages.USER_PROFILE_LOAD_ERROR,
                        spacing: 16,
                        children: e => (0, l.jsx)(p.default, {
                            ...e,
                            className: G.warningCircleIcon,
                            color: o.default.unsafe_rawColors.YELLOW_300.css
                        })
                    }), (0, l.jsx)(M.default, {
                        className: n ? G.profileBadgesCompactNoTouch : G.profileBadges,
                        user: t,
                        guildId: a,
                        isTryItOutFlow: s,
                        size: M.BadgeSizes.SIZE_22
                    })]
                })
            }
            let w = g.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar;

            function H(e) {
                let {
                    user: t,
                    displayProfile: a,
                    avatarSrc: n,
                    hasBanner: o,
                    status: c,
                    isMobile: m,
                    guildId: S,
                    channelId: C,
                    onClose: p,
                    disableUserProfileLink: g,
                    profileType: h,
                    animateOnHover: U,
                    hasProfileEffect: M
                } = e, P = (0, u.useStateFromStores)([N.default], () => N.default.getCurrentUser()), {
                    profileTheme: F
                } = s.useContext(O.UserProfileContext), H = s.useContext(_.AnalyticsContext), W = t.isNonUserBot() && !t.isClyde(), Y = A.default.isPremiumAtLeast(null == a ? void 0 : a.premiumType, R.PremiumTypes.TIER_2), z = s.useMemo(() => (0, T.shouldDisableUserPresenceInChannel)(t, C), [t, C]), Z = g || t.isClyde(), {
                    avatarDecorationSrc: V,
                    avatarSrc: K,
                    eventHandlers: Q,
                    isAnimating: X
                } = (0, v.default)({
                    user: t,
                    guildId: S,
                    size: k,
                    animateOnHover: U
                }), {
                    avatarDecorationSrc: q
                } = (0, f.default)({
                    size: B,
                    animateOnHover: !X,
                    showPending: t.id === (null == P ? void 0 : P.id),
                    showTryItOut: t.id === (null == P ? void 0 : P.id)
                }), J = (0, l.jsxs)("div", {
                    className: G.avatarHoverTarget,
                    ...Q,
                    children: [(0, l.jsx)(w, {
                        src: null != n ? n : K,
                        avatarDecoration: null != q ? null : V,
                        size: k,
                        "aria-label": t.username,
                        status: z ? L.StatusTypes.UNKNOWN : c,
                        statusBackdropColor: null != F && Y && !z ? (0, d.getStatusBackdropColor)(F) : void 0,
                        isMobile: m,
                        statusTooltip: !0
                    }), null != q && (0, l.jsx)(y.default, {
                        initTranslate3d: "translate3d(-20px, -120px, 0)",
                        children: (0, l.jsx)(w, {
                            src: D,
                            avatarDecoration: q,
                            size: k,
                            status: L.StatusTypes.UNKNOWN,
                            isMobile: m,
                            className: G.tryingOutAvatarDecoration,
                            "aria-hidden": !0
                        })
                    }, q)]
                }), $ = (0, r.match)(h).with(j.UserProfileTypes.POPOUT, () => {
                    let e = (0, I.buildGetPremiumUserBannerStyles)({
                        premiumUserWithBanner: G.avatarPositionPremiumBanner,
                        premiumUserWithoutBanner: G.avatarPositionPremiumNoBanner,
                        default: G.avatarPositionNormal
                    });
                    return e({
                        isPremium: Y && !W,
                        hasBanner: o,
                        hasProfileEffect: M
                    })
                }).with(j.UserProfileTypes.POMELO_POPOUT, () => G.avatarPositionPomelo).with(j.UserProfileTypes.PANEL, () => G.avatarPositionPanel).exhaustive();
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsxs)(d.Clickable, {
                        className: i({
                            [G.clickable]: !Z,
                            [G.avatarWrapperNonUserBot]: W,
                            [G.avatarWrapperNormal]: !W
                        }, $),
                        onClick: W || Z ? void 0 : function() {
                            (0, x.openUserProfileModal)({
                                userId: t.id,
                                guildId: null != S ? S : void 0,
                                channelId: null != C ? C : void 0,
                                analyticsLocation: H.location
                            }), null == p || p()
                        },
                        children: [J, !Z && function() {
                            let e = null != V,
                                t = e ? B : (0, d.getAvatarSize)(k);
                            return (0, l.jsx)(E.default, {
                                mask: null == c || c === L.StatusTypes.UNKNOWN || z ? E.default.Masks.AVATAR_DEFAULT : (0, r.match)([e, m]).with([!0, !0], () => E.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => E.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => E.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => E.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
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

            function W(e) {
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
                    showCollectiblesSocialUpsell: m = !1,
                    dismissCollectiblesSocialUpsell: T
                } = e, C = null == a ? void 0 : a.profileEffectID;
                return (0, l.jsxs)(l.Fragment, {
                    children: [m && (0, l.jsx)(P.default, {
                        onClose: i,
                        onDismiss: T
                    }), (0, l.jsx)(U.default, {
                        user: t,
                        displayProfile: a,
                        onClose: i,
                        guildId: s,
                        profileType: j.UserProfileTypes.POPOUT,
                        showPremiumBadgeUpsell: f,
                        isHovering: c
                    }), null != C && (0, l.jsx)(S.default, {
                        profileEffectID: C,
                        bannerAdjustment: 0,
                        isHovering: c
                    }), (0, l.jsx)(H, {
                        user: t,
                        displayProfile: a,
                        status: u ? L.StatusTypes.STREAMING : o,
                        isMobile: r,
                        guildId: s,
                        channelId: n,
                        onClose: i,
                        disableUserProfileLink: d,
                        hasBanner: (null == a ? void 0 : a.banner) != null,
                        hasProfileEffect: null != C,
                        profileType: j.UserProfileTypes.POPOUT
                    }), (0, l.jsx)(F, {
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
                    return _
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
                C = a("782340"),
                N = a("125234"),
                p = a("814076");

            function E(e) {
                let {
                    guildName: t
                } = e;
                return (0, l.jsxs)("div", {
                    className: N.guildMemberProfileTooltip,
                    children: [(0, l.jsx)(c.default, {
                        className: N.guildMemberProfileTooltipNitroWheel
                    }), C.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                        guildName: t
                    })]
                })
            }

            function _(e) {
                let {
                    guild: t,
                    bio: s,
                    hidePersonalInformation: c,
                    isUsingGuildBio: _,
                    lastSection: A = !1,
                    animateOnHover: g = !1,
                    isHovering: h = !1,
                    lineClamp: v
                } = e, {
                    location: U
                } = (0, u.useAnalyticsContext)(), I = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()), M = f.default.canUsePremiumGuildMemberProfile(I);
                return c || null == s || "" === s ? null : (0, l.jsxs)(T.default, {
                    lastSection: A,
                    children: [(0, l.jsxs)(r.Heading, {
                        variant: "eyebrow",
                        className: p.title,
                        children: [C.default.Messages.USER_POPOUT_ABOUT_ME, null != t && _ && (0, l.jsx)(r.Tooltip, {
                            color: r.Tooltip.Colors.CUSTOM,
                            tooltipClassName: N.aboutMeGuildIconTooltip,
                            "aria-label": C.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                                guildName: t.name
                            }),
                            text: (0, l.jsx)(E, {
                                guildName: t.name
                            }),
                            children: e => (0, l.jsx)(d.default, {
                                ...e,
                                onClick: () => {
                                    var t;
                                    null == (t = e.onClick) || t(), null != I && !M && (0, r.openModalLazy)(async () => {
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
                                    [N.nonPremiumHoverState]: !M
                                })
                            })
                        })]
                    }), (0, l.jsx)(m.default, {
                        userBio: s,
                        animateOnHover: g,
                        isHovering: h,
                        lineClamp: v
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
                    className: C,
                    isTryItOut: N = !1,
                    lastSection: p
                } = e;
                return (0, l.jsx)(d.default, {
                    className: n(f.container, C),
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
                                    forcePomelo: N,
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
//# sourceMappingURL=b66241e0ec3605c1f293.js.map