(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["13508"], {
        696246: function(e, t, l) {
            "use strict";
            e.exports = l.p + "23808e559cfef1d23276.svg"
        },
        231185: function(e, t, l) {
            "use strict";
            e.exports = l.p + "606576712b69844bb246.svg"
        },
        604689: function(e, t, l) {
            "use strict";
            e.exports = l.p + "a15e231b105dd8282a02.svg"
        },
        943722: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                ActivityEmoji: function() {
                    return C
                },
                default: function() {
                    return T
                }
            });
            var a = l("37983"),
                n = l("884691"),
                i = l("414456"),
                s = l.n(i),
                r = l("77078"),
                u = l("430568"),
                o = l("309570"),
                d = l("29088"),
                c = l("867805"),
                f = l("845579"),
                m = l("137783"),
                p = l("49111"),
                E = l("205341");

            function C(e) {
                let {
                    emoji: t,
                    className: l,
                    animate: n = !0,
                    hideTooltip: i
                } = e, o = f.AnimateEmoji.useSetting(), d = null != t.id ? ":".concat(t.name, ":") : c.default.translateSurrogatesToInlineEmoji(t.name), m = {
                    className: s(E.emoji, l),
                    emojiId: t.id,
                    emojiName: t.name,
                    autoplay: !0,
                    animated: !!(t.animated && o && n)
                };
                return i ? (0, a.jsx)(u.default, {
                    ...m
                }) : (0, a.jsx)(r.Tooltip, {
                    text: d,
                    children: e => (0, a.jsx)(u.default, {
                        ...e,
                        ...m
                    })
                })
            }
            let S = e => {
                let {
                    className: t,
                    text: l
                } = e, i = n.useRef(null), u = n.useRef(null), [o, d] = n.useState(!1);
                return n.useLayoutEffect(() => {
                    let {
                        current: e
                    } = i, {
                        current: t
                    } = u;
                    if (null == e || null == t) return;
                    let l = e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight;
                    d(!l)
                }, [l]), (0, a.jsx)(r.Tooltip, {
                    text: o || null == l || "" === l ? null : l,
                    delay: 150,
                    "aria-label": !1,
                    children: e => (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            ...e,
                            className: t,
                            ref: i,
                            children: l
                        }), (0, a.jsx)("div", {
                            className: s(E.textRuler, t),
                            ref: u,
                            "aria-hidden": !0,
                            children: l
                        })]
                    })
                })
            };
            var T = e => {
                let {
                    activities: t,
                    applicationStream: l,
                    className: n,
                    textClassName: i,
                    emojiClassName: s,
                    animate: r = !0,
                    hideTooltip: u = !1,
                    hideEmoji: c = !1
                } = e, f = null != t ? t.find(e => e.type === p.ActivityTypes.CUSTOM_STATUS) : null, T = null;
                null != f && null != f.emoji && !c && (T = (0, a.jsx)(C, {
                    emoji: f.emoji,
                    animate: r,
                    hideTooltip: u,
                    className: s
                }));
                let _ = (0, d.default)(t, l),
                    v = null != _ && _.length > 0;
                return null != T || v ? (0, a.jsxs)("div", {
                    className: n,
                    children: [T, (0, a.jsx)(S, {
                        text: _,
                        className: i
                    }), null != t && t.some(o.default) ? (0, a.jsx)(m.default, {
                        width: 16,
                        height: 16,
                        className: E.icon
                    }) : null]
                }) : null
            }
        },
        572544: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return M
                }
            });
            var a = l("746379"),
                n = l("394846"),
                i = l("913144"),
                s = l("970728"),
                r = l("79112"),
                u = l("389153"),
                o = l("412707"),
                d = l("139514"),
                c = l("312016"),
                f = l("374021"),
                m = l("398604"),
                p = l("468560"),
                E = l("361572"),
                C = l("537325"),
                S = l("835174"),
                T = l("566271"),
                _ = l("337543"),
                v = l("18494"),
                I = l("162771"),
                A = l("677099"),
                N = l("599110"),
                h = l("253981");
            l("545158");
            var g = l("49111");
            async function O(e, t) {
                await i.default.dispatch({
                    type: "INVITE_MODAL_OPEN",
                    invite: e,
                    code: t,
                    context: g.AppContext.APP
                })
            }
            async function P(e) {
                var t, l;
                let a = _.default.getInvite(e.code);
                if (null == a) {
                    let {
                        invite: t
                    } = await s.default.resolveInvite(e.code, "Markdown Link");
                    a = t
                }
                if (null == a) return;
                if (a.state === g.InviteStates.EXPIRED || a.state === g.InviteStates.BANNED || a.state === g.InviteStates.ERROR) {
                    await O(a, e.code);
                    return
                }
                let n = A.default.getFlattenedGuildIds(),
                    i = null === (l = a) || void 0 === l ? void 0 : null === (t = l.guild) || void 0 === t ? void 0 : t.id,
                    r = null != i && n.includes(i);
                r ? s.default.transitionToInviteSync(a) : await O(a, e.code)
            }
            let U = {
                skipExtensionCheck: void 0,
                analyticsLocations: []
            };

            function M(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U,
                    i = (0, c.findCodedLink)(e),
                    {
                        skipExtensionCheck: s
                    } = t;
                if (null != i && (i.type === d.CodedLinkType.INVITE || i.type === d.CodedLinkType.EMBEDDED_ACTIVITY_INVITE)) return e => (null == e || e.preventDefault(), P(i), !0);
                if (null != i && i.type === d.CodedLinkType.APP_DIRECTORY_PROFILE) return e => {
                    var t;
                    null == e || e.preventDefault();
                    let {
                        code: a
                    } = i, s = null !== (t = I.default.getGuildId()) && void 0 !== t ? t : void 0;
                    return N.default.track(g.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                        application_id: a,
                        device_platform: n.isMobile ? "mobile_web" : "desktop_web",
                        guild_id: s,
                        channel_id: v.default.getChannelId()
                    }), l.el("838093").then(l.bind(l, "838093")).then(e => {
                        let {
                            goToAppDirectory: t
                        } = e, {
                            ApplicationDirectoryViews: n
                        } = l("412707");
                        t({
                            view: n.APPLICATION,
                            applicationId: a,
                            guildId: s,
                            entrypoint: {
                                name: o.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
                            }
                        })
                    }), !0
                };
                if (null != i && i.type === d.CodedLinkType.GUILD_PRODUCT) return e => {
                    null == e || e.preventDefault();
                    let [t, a] = i.code.split("-");
                    return l.el("573777").then(l.bind(l, "573777")).then(e => {
                        let {
                            openGuildProductLink: l
                        } = e;
                        l(t, a)
                    }), !0
                };
                let {
                    path: _,
                    hostname: A = "",
                    host: O,
                    query: M
                } = a.parse(e), y = h.default.isDiscordHostname(A) || window.location.host === O;
                if (y && (null == _ ? void 0 : _.startsWith("/application-directory"))) {
                    let [, , e, t] = _.split("/"), a = null != e && (0, u.isSnowflake)(e) ? e : void 0;
                    return i => {
                        var s;
                        null == i || i.preventDefault();
                        let {
                            ApplicationDirectoryProfileSections: r
                        } = l("750947"), {
                            ApplicationDirectoryViews: u
                        } = l("412707"), d = null !== (s = I.default.getGuildId()) && void 0 !== s ? s : void 0, c = u.HOME;
                        return "search" === e && (c = u.SEARCH), null != a && (c = u.APPLICATION, N.default.track(g.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                            application_id: a,
                            device_platform: n.isMobile ? "mobile_web" : "desktop_web",
                            guild_id: d,
                            channel_id: v.default.getChannelId()
                        })), l.el("838093").then(l.bind(l, "838093")).then(e => {
                            let {
                                goToAppDirectory: l
                            } = e;
                            l({
                                view: c,
                                applicationId: a,
                                guildId: d,
                                applicationSection: (0, p.default)(r, t),
                                entrypoint: {
                                    name: o.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
                                }
                            })
                        }), !0
                    }
                }
                if (null != _ && y && h.default.isAppRoute(_)) {
                    let e = null != M ? {
                        search: M
                    } : null;
                    return t => (null == t || t.preventDefault(), (0, C.default)(_, e), !0)
                }
                if (null != _ && y) {
                    let {
                        getOAuth2AuthorizeProps: t,
                        openOAuth2Modal: a
                    } = l("33942"), n = t(e);
                    if (null != n) return e => (null == e || e.preventDefault(), a(n), !0)
                }
                let L = (0, E.tryParseEventDetailsPath)(_);
                if (null != _ && y && null != L) return e => {
                    null == e || e.preventDefault();
                    let t = I.default.getGuildId();
                    null != L.guildId && "" !== L.guildId && L.guildId !== t && (0, C.default)(g.Routes.CHANNEL(L.guildId));
                    let l = m.default.getGuildScheduledEvent(L.guildEventId);
                    return null != l && (0, f.openGuildEventDetails)({
                        eventId: l.id
                    }), !0
                };
                if (y && (null == _ ? void 0 : _.startsWith("/settings/"))) {
                    let {
                        default: e
                    } = l("777523"), t = e(_);
                    if (null != t) return e => (null == e || e.preventDefault(), r.default.open(t.section, t.subsection, {
                        openWithoutBackstack: !1,
                        impressionSource: t.source
                    }), !0)
                }
                if (!s && null != (0, T.isSuspiciousDownload)(e)) return t => (null == t || t.preventDefault(), S.default.show(e), !0)
            }
        },
        204947: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return n
                }
            });
            var a = l("782340");

            function n(e) {
                return null != e && "" !== e ? e : a.default.Messages.EMBEDDED_ACTIVITIES_IN_ACTIVITY
            }
        },
        502651: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var a = l("954016"),
                n = l("49111");

            function i(e) {
                return e.type === n.ActivityTypes.STREAMING && null != e.url && a.validStreamURL.test(e.url)
            }

            function s(e) {
                return null != e && (Array.isArray(e) ? e.some(i) : i(e))
            }
        },
        29088: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var a = l("204947"),
                n = l("152311"),
                i = l("502651"),
                s = l("49111"),
                r = l("782340");

            function u(e) {
                return {
                    [s.ActivityTypes.STREAMING]: e ? r.default.Messages.UNFORMATTED_STREAMING : r.default.Messages.STREAMING,
                    [s.ActivityTypes.LISTENING]: e ? r.default.Messages.UNFORMATTED_LISTENING_TO : r.default.Messages.LISTENING_TO,
                    [s.ActivityTypes.WATCHING]: e ? r.default.Messages.UNFORMATTED_WATCHING : r.default.Messages.WATCHING,
                    [s.ActivityTypes.COMPETING]: e ? r.default.Messages.UNFORMATTED_COMPETING : r.default.Messages.COMPETING
                }
            }

            function o(e, t) {
                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (null != e && e.type === s.ActivityTypes.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
                if (null != t) return null == e || e.type !== s.ActivityTypes.PLAYING ? r.default.Messages.SHARING_SCREEN : u(l)[s.ActivityTypes.STREAMING].format({
                    name: e.name
                });
                if (null == e || null == e.name) return null;
                if ((0, i.default)(e)) {
                    let t = null != e.details && "" !== e.details ? e.details : e.name;
                    return u(l)[s.ActivityTypes.STREAMING].format({
                        name: t
                    })
                }
                return (0, n.default)(e) ? (0, a.default)(e.name) : function(e, t, l) {
                    let a = u(l);
                    switch (e) {
                        case s.ActivityTypes.LISTENING:
                        case s.ActivityTypes.WATCHING:
                        case s.ActivityTypes.COMPETING:
                            return a[e].format({
                                name: t
                            });
                        case s.ActivityTypes.CUSTOM_STATUS:
                            return null;
                        case s.ActivityTypes.PLAYING:
                        default:
                            return l ? r.default.Messages.UNFORMATTED_PLAYING_GAME.format({
                                game: t
                            }) : r.default.Messages.PLAYING_GAME.format({
                                game: t
                            })
                    }
                }(e.type, e.name, l)
            }

            function d(e, t) {
                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (Array.isArray(e)) {
                    let a = e;
                    return null != t && (a = [...a, null]), a.map(e => o(e, t, l)).find(e => null != e)
                }
                return o(e, t, l)
            }
        },
        729022: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var a = l("884691"),
                n = l("327037"),
                i = l("662286"),
                s = l("217513"),
                r = e => {
                    var t, l;
                    let {
                        currentUser: r,
                        popoutUser: u,
                        guildId: o
                    } = e, d = (null == r ? void 0 : null === (t = r.avatarDecoration) || void 0 === t ? void 0 : t.skuId) != null, c = (null === (l = u.avatarDecoration) || void 0 === l ? void 0 : l.skuId) != null, f = (0, i.useCanUseProfileEffects)({
                        location: "UserPopoutUpsell"
                    }), m = (0, s.default)(r.id, o), p = (0, s.default)(u.id, o);
                    a.useEffect(() => {
                        f && null == m && (0, n.fetchProfile)(r.id)
                    }, [f, m, r]);
                    let E = f && null != m && null == m.profileEffectID && (null == p ? void 0 : p.profileEffectID) != null;
                    return {
                        shouldUpsellAvatarDecoration: !d && c,
                        shouldUpsellProfileEffect: E
                    }
                }
        },
        775377: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                i = l.n(n),
                s = l("943722"),
                r = l("462339");

            function u(e) {
                let {
                    activity: t,
                    className: l,
                    emojiClassName: n,
                    textClassName: u,
                    placeholderText: o,
                    soloEmojiClassName: d,
                    animate: c = !0,
                    hideTooltip: f = !1,
                    hideEmoji: m = !1,
                    children: p
                } = e;
                if (null == t) return null;
                let {
                    emoji: E
                } = t, C = null != t.state && "" !== t.state ? t.state : o;
                return (0, a.jsxs)("div", {
                    className: i(r.container, l),
                    children: [m || null == E ? null : (0, a.jsx)(s.ActivityEmoji, {
                        emoji: E,
                        className: i(r.emoji, n, null != d ? {
                            [d]: null == C || "" === C
                        } : null),
                        animate: c,
                        hideTooltip: f
                    }), null != C && C.length > 0 ? (0, a.jsx)("span", {
                        className: u,
                        children: C
                    }) : null, p]
                })
            }
        },
        123377: function(e, t, l) {
            "use strict";
            let a, n;
            l.r(t), l.d(t, {
                CopiableField: function() {
                    return S
                }
            });
            var i = l("37983"),
                s = l("884691"),
                r = l("414456"),
                u = l.n(r),
                o = l("862337"),
                d = l("77078"),
                c = l("413709"),
                f = l("599110"),
                m = l("306160"),
                p = l("49111"),
                E = l("782340"),
                C = l("491701");

            function S(e) {
                var t;
                let {
                    className: l,
                    copyValue: r,
                    copyMetaData: S,
                    children: T,
                    disableCopy: _,
                    showCopyIcon: v
                } = e, [I, A] = s.useState(0), [N, h] = s.useState(!1), [g, O] = s.useState(!1);
                if (s.useEffect(() => (a = new o.Timeout, n = new o.Timeout, function() {
                        a.stop(), n.stop()
                    }), []), !m.SUPPORTS_COPY || _) return (0, i.jsx)(i.Fragment, {
                    children: T
                });
                let P = [E.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_1, E.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_2, E.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_3, E.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_4, E.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_5, E.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_6, E.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_7, E.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_8, E.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_9, E.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_10, E.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_11],
                    U = Math.min(Math.max(I - 1, 0), P.length - 1),
                    M = null !== (t = P[U]) && void 0 !== t ? t : P[0],
                    y = I >= P.length - 1,
                    L = y ? d.TooltipColors.RED : d.TooltipColors.GREEN,
                    x = N ? L : d.TooltipColors.PRIMARY,
                    R = () => {
                        a.stop(), O(!1)
                    },
                    j = e => {
                        (0, m.copy)(r), f.default.track(p.AnalyticEvents.TEXT_COPIED, {
                            type: S
                        }), "function" == typeof e && e(), !g && A(I + 1), O(!0), h(!0), a.start(1e3, () => O(!1)), n.start(2e3, () => A(0))
                    };
                return (0, i.jsx)(d.Tooltip, {
                    delay: 500,
                    color: x,
                    forceOpen: g,
                    text: N ? (0, i.jsx)(d.Shaker, {
                        isShaking: y,
                        children: M
                    }) : E.default.Messages.ACCOUNT_CLICK_TO_COPY,
                    onAnimationRest: (e, t) => {
                        !g && N && t.phase === p.SpringTransitionPhases.LEAVE && h(!1)
                    },
                    "aria-label": E.default.Messages.ACCOUNT_CLICK_TO_COPY,
                    children: e => {
                        let {
                            onClick: t,
                            onMouseEnter: a,
                            ...n
                        } = e;
                        return (0, i.jsx)(d.Clickable, {
                            ...n,
                            className: C.clickTarget,
                            onMouseEnter: () => {
                                N ? R() : "function" == typeof a && a()
                            },
                            onClick: () => {
                                j(t)
                            },
                            children: (0, i.jsxs)("div", {
                                className: u(l, C.copiableWrapper),
                                children: [(0, i.jsx)("div", {
                                    className: C.childWrapper,
                                    children: T
                                }), v ? (0, i.jsx)("div", {
                                    className: C.copyIconWrapper,
                                    children: (0, i.jsx)(c.default, {
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
        824794: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                shouldDisableUserPresenceInChannel: function() {
                    return n
                }
            });
            var a = l("42203");

            function n(e, t) {
                let l = a.default.getChannel(t);
                return null != l && e.bot && l.isPrivate() && null == l.rawRecipients.find(t => t.id === e.id)
            }
        },
        643121: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var a = l("65597"),
                n = l("845579"),
                i = l("102985"),
                s = l("697218"),
                r = l("782340");
            let u = "legacy_username";

            function o(e) {
                var t;
                let l = n.LegacyUsernameDisabled.useSetting(),
                    o = (0, a.default)([s.default], () => s.default.getCurrentUser()),
                    d = (0, a.default)([i.default], () => i.default.hidePersonalInformation);
                if (null == e) return [];
                let c = null !== (t = null == e ? void 0 : e.getBadges()) && void 0 !== t ? t : [];
                return null != o && o.id === e.userId && l && (c = c.filter(e => e.id !== u)), d && (c = c.map(e => ({
                    ...e,
                    description: e.id === u ? r.default.Messages.STREAMER_MODE_ENABLED : e.description
                }))), c
            }
        },
        590006: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                BadgeSizes: function() {
                    return n
                },
                default: function() {
                    return _
                }
            });
            var a, n, i = l("37983");
            l("884691");
            var s = l("414456"),
                r = l.n(s),
                u = l("77078"),
                o = l("572544"),
                d = l("244201"),
                c = l("298878"),
                f = l("643121"),
                m = l("217513"),
                p = l("590456"),
                E = l("49111"),
                C = l("782340"),
                S = l("730684"),
                T = l("696246");

            function _(e) {
                let {
                    user: t,
                    guildId: l,
                    className: a,
                    shrinkAtCount: s,
                    shrinkToSize: _,
                    isTryItOutFlow: v,
                    size: I = n.SIZE_24
                } = e, A = (0, m.default)(t.id, l), N = (0, f.default)(A).map(e => ({
                    ...e,
                    src: (0, p.getBadgeAsset)(e.icon)
                })), h = (0, d.useWindowDispatch)();
                if (t.isClyde()) return (0, i.jsx)("div", {
                    className: r(a, S.container, S.clydeBadgeList),
                    "aria-label": C.default.Messages.PROFILE_USER_BADGES,
                    role: "group",
                    children: (0, i.jsx)(c.default, {})
                });
                v && null == N.find(e => "premium" === e.id) && N.push({
                    id: "premium",
                    icon: T,
                    src: T,
                    description: C.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                        date: new Date
                    })
                });
                let g = null != s && null != _ && N.length > s ? _ : I;
                return (0, i.jsx)("div", {
                    className: r(a, N.length > 0 ? S.containerWithContent : S.container),
                    "aria-label": C.default.Messages.PROFILE_USER_BADGES,
                    role: "group",
                    children: N.map(e => (0, i.jsx)(u.Tooltip, {
                        position: "top",
                        text: e.description,
                        spacing: 12,
                        children: t => (0, i.jsx)(u.Anchor, {
                            ...t,
                            onClick: l => {
                                var a;
                                null === (a = t.onClick) || void 0 === a || a.call(t);
                                let n = null != e.link ? (0, o.default)(e.link) : null;
                                if (null != n) return h.dispatch(E.ComponentActions.POPOUT_CLOSE), n(l)
                            },
                            href: e.link,
                            children: (0, i.jsx)("img", {
                                alt: " ",
                                "aria-hidden": !0,
                                src: e.src,
                                className: r({
                                    [S.profileBadge24]: g === n.SIZE_24,
                                    [S.profileBadge22]: g === n.SIZE_22,
                                    [S.profileBadge18]: g === n.SIZE_18
                                })
                            })
                        })
                    }, e.id))
                })
            }(a = n || (n = {}))[a.SIZE_24 = 0] = "SIZE_24", a[a.SIZE_22 = 1] = "SIZE_22", a[a.SIZE_18 = 2] = "SIZE_18"
        },
        552243: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("301165"),
                i = l("65597"),
                s = l("206230"),
                r = e => {
                    let {
                        children: t,
                        initTranslate3d: l
                    } = e, r = (0, i.default)([s.default], () => s.default.useReducedMotion), u = (0, n.useSpring)({
                        immediate: r,
                        from: {
                            transform: l
                        },
                        to: {
                            transform: "translate3d(0, 0, 0)"
                        }
                    });
                    return (0, a.jsx)(n.animated.div, {
                        style: u,
                        children: t
                    })
                }
        },
        789321: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                DEFAULT_COLLECTIBLES_UPSELL_HEIGHT: function() {
                    return y
                },
                default: function() {
                    return x
                }
            });
            var a = l("37983"),
                n = l("884691"),
                i = l("414456"),
                s = l.n(i),
                r = l("627445"),
                u = l.n(r),
                o = l("506838"),
                d = l("65597"),
                c = l("77078"),
                f = l("731898"),
                m = l("206230"),
                p = l("812204"),
                E = l("685665"),
                C = l("606292"),
                S = l("688318"),
                T = l("21526"),
                _ = l("853987"),
                v = l("491232"),
                I = l("729022"),
                A = l("697218"),
                N = l("945330"),
                h = l("719923"),
                g = l("994428"),
                O = l("782340"),
                P = l("304118"),
                U = l("604689");

            function M(e) {
                let {
                    onClick: t
                } = e;
                return (0, a.jsx)(c.Clickable, {
                    className: P.closeButton,
                    onClick: t,
                    "aria-label": O.default.Messages.DISMISS,
                    children: (0, a.jsx)(N.default, {
                        className: P.closeIcon,
                        width: 18,
                        height: 18
                    })
                })
            }
            let y = 76,
                L = e => (0, a.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    tag: "span",
                    className: P.ctaLink,
                    children: e
                });
            var x = e => {
                let {
                    user: t,
                    guildId: l,
                    onClose: i,
                    onDismiss: r,
                    isInSidebar: N = !1
                } = e, {
                    analyticsLocations: x
                } = (0, E.default)(p.default.COLLECTIBLES_USER_POPOUT_UPSELL), R = (0, d.default)([m.default], () => m.default.useReducedMotion), {
                    avatarDecorationSrc: j
                } = (0, S.default)({
                    user: t,
                    size: (0, C.getDecorationSizeForAvatarSize)(c.AvatarSizes.SIZE_48)
                }), {
                    ref: D,
                    height: b
                } = (0, f.default)(), k = n.useMemo(() => ({
                    top: "-".concat((null != b ? b : y) + 6, "px")
                }), [b]), w = (0, d.default)([_.default], () => {
                    var e;
                    let l = null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.skuId;
                    return null != l && (0, v.isPremiumCollectiblesCategory)(_.default.getCategoryForProduct(l))
                }), B = (0, d.default)([A.default], () => A.default.getCurrentUser());
                u(null != B, "currentUser should not be null");
                let {
                    shouldUpsellAvatarDecoration: F,
                    shouldUpsellProfileEffect: G
                } = (0, I.default)({
                    currentUser: B,
                    popoutUser: t,
                    guildId: l
                }), Y = n.useCallback(() => {
                    null == r || r(g.ContentDismissActionType.PRIMARY), null == i || i(), (0, T.openCollectiblesShop)({
                        analyticsLocations: x,
                        analyticsSource: p.default.COLLECTIBLES_USER_POPOUT_UPSELL
                    })
                }, [r, i, x]), H = n.useCallback(() => {
                    null == r || r(g.ContentDismissActionType.DISMISS)
                }, [r]), W = h.default.canUseCollectibles(B), z = (0, o.match)([F, G]).with([!0, !0], () => W ? O.default.Messages.PROFILE_EFFECTS_SOCIAL_UPSELL_AVATAR_DECORATION_COMBINED.format({
                    openShop: L
                }) : O.default.Messages.PROFILE_EFFECTS_SOCIAL_UPSELL_AVATAR_DECORATION_COMBINED_NON_NITRO.format({
                    openShop: L
                })).with([!0, !1], () => W && w ? O.default.Messages.COLLECTIBLES_SOCIAL_UPSELL_PREMIUM.format({
                    openShop: L
                }) : O.default.Messages.COLLECTIBLES_SOCIAL_UPSELL.format({
                    openShop: L
                })).with([!1, !0], () => W ? O.default.Messages.PROFILE_EFFECTS_SOCIAL_UPSELL.format({
                    openShop: L
                }) : O.default.Messages.PROFILE_EFFECTS_SOCIAL_UPSELL_NON_NITRO.format({
                    openShop: L
                })).otherwise(() => null);
                return (0, a.jsx)("div", {
                    style: k,
                    className: s(P.containerWrapper, {
                        [P.animation]: !R,
                        [P.inSidebar]: N,
                        [P.withoutAvatar]: G
                    }),
                    ref: D,
                    children: (0, a.jsxs)("div", {
                        className: P.container,
                        children: [!G && (0, a.jsx)(c.Clickable, {
                            className: P.avatarSection,
                            onClick: Y,
                            "aria-label": O.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                            children: (0, a.jsx)(c.Avatar, {
                                src: U,
                                avatarDecoration: j,
                                size: c.AvatarSizes.SIZE_48,
                                "aria-hidden": !0
                            })
                        }), (0, a.jsx)(c.Clickable, {
                            className: P.content,
                            onClick: Y,
                            "aria-label": O.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                            children: (0, a.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-normal",
                                tag: "span",
                                children: z
                            })
                        }), (0, a.jsx)("div", {
                            className: P.buttons,
                            children: (0, a.jsx)(M, {
                                onClick: H
                            })
                        })]
                    })
                })
            }
        },
        10532: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                i = l.n(n),
                s = l("193853");

            function r(e) {
                let {
                    className: t
                } = e;
                return (0, a.jsx)("div", {
                    className: i(s.divider, t)
                })
            }
        },
        935409: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                UserPopoutBadgeList: function() {
                    return F
                },
                UserPopoutAvatar: function() {
                    return Y
                },
                default: function() {
                    return H
                }
            });
            var a = l("37983"),
                n = l("884691"),
                i = l("414456"),
                s = l.n(i),
                r = l("506838"),
                u = l("446674"),
                o = l("669491"),
                d = l("77078"),
                c = l("606292"),
                f = l("688318"),
                m = l("980215"),
                p = l("824794"),
                E = l("635471"),
                C = l("305961"),
                S = l("697218"),
                T = l("423487"),
                _ = l("587974"),
                v = l("599110"),
                I = l("719923"),
                A = l("50885"),
                N = l("713135"),
                h = l("106435"),
                g = l("289918"),
                O = l("878569"),
                P = l("590006"),
                U = l("430312"),
                M = l("401642"),
                y = l("552243"),
                L = l("789321"),
                x = l("590456"),
                R = l("49111"),
                j = l("646718"),
                D = l("782340"),
                b = l("524466"),
                k = l("231185");
            let w = d.AvatarSizes.SIZE_80,
                B = (0, c.getDecorationSizeForAvatarSize)(w);

            function F(e) {
                let {
                    user: t,
                    guildId: l,
                    isTryItOutFlow: n,
                    forProfileEffectModal: i
                } = e, s = (0, u.useStateFromStores)([N.default], () => N.default.getUserProfile(t.id), [t]), r = (0, u.useStateFromStores)([C.default], () => C.default.getGuild(l), [l]), c = (0, m.useClydeProfilesEnabled)(r);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(null == s ? void 0 : s.profileFetchFailed) && (!t.isClyde() || c) && (0, a.jsx)(d.Tooltip, {
                        text: D.default.Messages.USER_PROFILE_LOAD_ERROR,
                        spacing: 16,
                        children: e => (0, a.jsx)(T.default, {
                            ...e,
                            className: b.warningCircleIcon,
                            color: o.default.unsafe_rawColors.YELLOW_300.css
                        })
                    }), (0, a.jsx)(P.default, {
                        className: i ? b.profileBadgesCompactNoTouch : b.profileBadges,
                        user: t,
                        guildId: l,
                        isTryItOutFlow: n,
                        size: P.BadgeSizes.SIZE_22
                    })]
                })
            }
            let G = A.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar;

            function Y(e) {
                let {
                    user: t,
                    displayProfile: l,
                    avatarSrc: i,
                    hasBanner: o,
                    status: c,
                    isMobile: m,
                    guildId: E,
                    channelId: C,
                    onClose: T,
                    disableUserProfileLink: A,
                    profileType: N,
                    animateOnHover: g,
                    hasProfileEffect: P
                } = e, L = (0, u.useStateFromStores)([S.default], () => S.default.getCurrentUser()), {
                    profileTheme: F
                } = n.useContext(U.UserProfileContext), Y = n.useContext(v.AnalyticsContext), H = t.isNonUserBot() && !t.isClyde(), W = I.default.isPremiumAtLeast(null == l ? void 0 : l.premiumType, j.PremiumTypes.TIER_2), z = n.useMemo(() => (0, p.shouldDisableUserPresenceInChannel)(t, C), [t, C]), V = A || t.isClyde(), {
                    avatarDecorationSrc: Z,
                    avatarSrc: K,
                    eventHandlers: Q,
                    isAnimating: X
                } = (0, h.default)({
                    user: t,
                    guildId: E,
                    size: w,
                    animateOnHover: g
                }), {
                    avatarDecorationSrc: q
                } = (0, f.default)({
                    size: B,
                    animateOnHover: !X,
                    showPending: t.id === (null == L ? void 0 : L.id),
                    showTryItOut: t.id === (null == L ? void 0 : L.id)
                }), J = (0, a.jsxs)("div", {
                    className: b.avatarHoverTarget,
                    ...Q,
                    children: [(0, a.jsx)(G, {
                        src: null != i ? i : K,
                        avatarDecoration: null != q ? null : Z,
                        size: w,
                        "aria-label": t.username,
                        status: z ? R.StatusTypes.UNKNOWN : c,
                        statusBackdropColor: null != F && W && !z ? (0, d.getStatusBackdropColor)(F) : void 0,
                        isMobile: m,
                        statusTooltip: !0
                    }), null != q && (0, a.jsx)(y.default, {
                        initTranslate3d: "translate3d(-20px, -120px, 0)",
                        children: (0, a.jsx)(G, {
                            src: k,
                            avatarDecoration: q,
                            size: w,
                            status: R.StatusTypes.UNKNOWN,
                            isMobile: m,
                            className: b.tryingOutAvatarDecoration,
                            "aria-hidden": !0
                        })
                    }, q)]
                }), $ = (0, r.match)(N).with(x.UserProfileTypes.POPOUT, () => {
                    let e = (0, O.buildGetPremiumUserBannerStyles)({
                        premiumUserWithBanner: b.avatarPositionPremiumBanner,
                        premiumUserWithoutBanner: b.avatarPositionPremiumNoBanner,
                        default: b.avatarPositionNormal
                    });
                    return e({
                        isPremium: W && !H,
                        hasBanner: o,
                        hasProfileEffect: P
                    })
                }).with(x.UserProfileTypes.POMELO_POPOUT, () => b.avatarPositionPomelo).with(x.UserProfileTypes.PANEL, () => b.avatarPositionPanel).exhaustive();
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(d.Clickable, {
                        className: s({
                            [b.clickable]: !V,
                            [b.avatarWrapperNonUserBot]: H,
                            [b.avatarWrapperNormal]: !H
                        }, $),
                        onClick: H || V ? void 0 : function() {
                            (0, M.openUserProfileModal)({
                                userId: t.id,
                                guildId: null != E ? E : void 0,
                                channelId: null != C ? C : void 0,
                                analyticsLocation: Y.location
                            }), null == T || T()
                        },
                        children: [J, !V && function() {
                            let e = null != Z,
                                t = e ? B : (0, d.getAvatarSize)(w);
                            return (0, a.jsx)(_.default, {
                                mask: null == c || c === R.StatusTypes.UNKNOWN || z ? _.default.Masks.AVATAR_DEFAULT : (0, r.match)([e, m]).with([!0, !0], () => _.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => _.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => _.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => _.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
                                className: e ? b.avatarDecorationHint : b.avatarHint,
                                style: e ? {
                                    borderRadius: .4 * t
                                } : void 0,
                                width: t,
                                height: t,
                                children: (0, a.jsx)("div", {
                                    className: b.avatarHintInner,
                                    children: D.default.Messages.VIEW_PROFILE
                                })
                            })
                        }()]
                    })
                })
            }

            function H(e) {
                let {
                    user: t,
                    displayProfile: l,
                    guildId: n,
                    channelId: i,
                    onClose: s,
                    isMobile: r,
                    isStreaming: u,
                    status: o,
                    disableUserProfileLink: d,
                    isHovering: c,
                    showPremiumBadgeUpsell: f = !0,
                    showCollectiblesSocialUpsell: m = !1,
                    dismissCollectiblesSocialUpsell: p
                } = e, C = null == l ? void 0 : l.profileEffectID;
                return (0, a.jsxs)(a.Fragment, {
                    children: [m && (0, a.jsx)(L.default, {
                        user: t,
                        onClose: s,
                        guildId: n,
                        onDismiss: p
                    }), (0, a.jsx)(g.default, {
                        user: t,
                        displayProfile: l,
                        onClose: s,
                        guildId: n,
                        profileType: x.UserProfileTypes.POPOUT,
                        showPremiumBadgeUpsell: f,
                        isHovering: c
                    }), null != C && (0, a.jsx)(E.default, {
                        profileEffectID: C,
                        bannerAdjustment: 0,
                        isHovering: c
                    }), (0, a.jsx)(Y, {
                        user: t,
                        displayProfile: l,
                        status: u ? R.StatusTypes.STREAMING : o,
                        isMobile: r,
                        guildId: n,
                        channelId: i,
                        onClose: s,
                        disableUserProfileLink: d,
                        hasBanner: (null == l ? void 0 : l.banner) != null,
                        hasProfileEffect: null != C,
                        profileType: x.UserProfileTypes.POPOUT
                    }), (0, a.jsx)(F, {
                        user: t,
                        guildId: n
                    })]
                })
            }
        },
        648149: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("77078"),
                i = l("224038");

            function s(e) {
                let {
                    user: t,
                    nickname: l
                } = e, s = null != l;
                return (0, a.jsx)(n.Avatar, {
                    src: t.getAvatarURL(void 0, s ? 16 : 24),
                    size: s ? n.AvatarSizes.SIZE_16 : n.AvatarSizes.SIZE_24,
                    className: s ? i.miniAvatar : i.largeAvatar,
                    "aria-hidden": !0
                })
            }
        },
        777003: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                i = l.n(n),
                s = l("383957");

            function r(e) {
                let {
                    children: t,
                    lastSection: l = !1,
                    className: n,
                    ...r
                } = e;
                return (0, a.jsx)("div", {
                    className: i(s.section, n, {
                        [s.lastSection]: l
                    }),
                    ...r,
                    children: t
                })
            }
        },
        369869: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return v
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                i = l.n(n),
                s = l("446674"),
                r = l("77078"),
                u = l("997289"),
                o = l("697218"),
                d = l("109024"),
                c = l("216422"),
                f = l("719923"),
                m = l("485422"),
                p = l("777003"),
                E = l("49111"),
                C = l("782340"),
                S = l("125234"),
                T = l("814076");

            function _(e) {
                let {
                    guildName: t
                } = e;
                return (0, a.jsxs)("div", {
                    className: S.guildMemberProfileTooltip,
                    children: [(0, a.jsx)(c.default, {
                        className: S.guildMemberProfileTooltipNitroWheel
                    }), C.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                        guildName: t
                    })]
                })
            }

            function v(e) {
                let {
                    guild: t,
                    bio: n,
                    hidePersonalInformation: c,
                    isUsingGuildBio: v,
                    lastSection: I = !1,
                    animateOnHover: A = !1,
                    isHovering: N = !1,
                    lineClamp: h
                } = e, {
                    location: g
                } = (0, u.useAnalyticsContext)(), O = (0, s.useStateFromStores)([o.default], () => o.default.getCurrentUser()), P = f.default.canUsePremiumGuildMemberProfile(O);
                return c || null == n || "" === n ? null : (0, a.jsxs)(p.default, {
                    lastSection: I,
                    children: [(0, a.jsxs)(r.Heading, {
                        variant: "eyebrow",
                        className: T.title,
                        children: [C.default.Messages.USER_POPOUT_ABOUT_ME, null != t && v && (0, a.jsx)(r.Tooltip, {
                            color: r.Tooltip.Colors.CUSTOM,
                            tooltipClassName: S.aboutMeGuildIconTooltip,
                            "aria-label": C.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                                guildName: t.name
                            }),
                            text: (0, a.jsx)(_, {
                                guildName: t.name
                            }),
                            children: e => (0, a.jsx)(d.default, {
                                ...e,
                                onClick: () => (function(e) {
                                    null == e || e(), null != O && !P && (0, r.openModalLazy)(async () => {
                                        let {
                                            default: e
                                        } = await l.el("414242").then(l.bind(l, "414242"));
                                        return t => (0, a.jsx)(e, {
                                            ...t,
                                            source: {
                                                ...g,
                                                object: E.AnalyticsObjects.GUILD_ICON
                                            }
                                        })
                                    })
                                })(e.onClick),
                                guild: t,
                                size: d.default.Sizes.SMOL,
                                className: i(S.aboutMeGuildIcon, {
                                    [S.nonPremiumHoverState]: !P
                                })
                            })
                        })]
                    }), (0, a.jsx)(m.default, {
                        userBio: n,
                        animateOnHover: A,
                        isHovering: N,
                        lineClamp: h
                    })]
                })
            }
        },
        802279: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("775377"),
                i = l("777003"),
                s = l("184256");

            function r(e) {
                let {
                    customStatusActivity: t,
                    className: l,
                    animate: r
                } = e;
                return null == t ? null : (0, a.jsx)(i.default, {
                    className: l,
                    children: (0, a.jsx)(n.default, {
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
        491250: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                i = l.n(n),
                s = l("77078"),
                r = l("145079"),
                u = l("123377"),
                o = l("158998"),
                d = l("777003"),
                c = l("782340"),
                f = l("119111");

            function m(e) {
                let {
                    user: t,
                    shouldCopyOnClick: l,
                    nickname: n,
                    pronouns: m,
                    usernameIcon: p,
                    identityCTA: E,
                    className: C,
                    isTryItOut: S = !1,
                    lastSection: T
                } = e;
                return (0, a.jsx)(d.default, {
                    className: i(f.container, C),
                    lastSection: T,
                    children: (0, a.jsxs)("div", {
                        className: l ? f.copiableNameTag : void 0,
                        children: [(0, a.jsx)(u.CopiableField, {
                            className: f.copiableField,
                            copyMetaData: "User Tag",
                            copyValue: o.default.getUserTag(t, {
                                decoration: "never",
                                identifiable: "always"
                            }),
                            showCopyIcon: !0,
                            disableCopy: !l,
                            children: (0, a.jsxs)("div", {
                                className: f.userText,
                                children: [null != n ? (0, a.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: f.nickname,
                                    children: n
                                }) : null, (0, a.jsx)(r.default, {
                                    usernameIcon: p,
                                    user: t,
                                    forceUsername: !0,
                                    forcePomelo: S,
                                    className: null == n ? f.userTagNoNickname : f.userTagWithNickname,
                                    usernameClass: null == n ? f.userTagUsernameNoNickname : f.userTagUsernameBase,
                                    discriminatorClass: null == n ? f.userTagDiscriminatorNoNickname : f.discrimBase,
                                    botClass: null == n ? f.headerBotTag : f.headerBotTagWithNickname
                                }), E]
                            })
                        }), null != m && "" !== m && (0, a.jsx)(s.Tooltip, {
                            text: c.default.Messages.USER_PROFILE_PRONOUNS,
                            children: e => (0, a.jsx)(s.Text, {
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
        777523: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var a = l("730290"),
                n = l("49111");
            let i = /-/g;

            function s(e) {
                let [, , t, l] = e.split("/"), s = null == t ? void 0 : t.toUpperCase().replace(i, "_"), r = null == l ? void 0 : l.toUpperCase().replace(i, "_");
                if (n.UserSettingsSections.hasOwnProperty(s) && (null == r || "" === r || n.UserSettingsSections.hasOwnProperty(r))) {
                    let {
                        source: e
                    } = (0, a.parse)(location.search);
                    return {
                        source: e,
                        section: n.UserSettingsSections[s],
                        subsection: r
                    }
                }
                return null
            }
        }
    }
]);
//# sourceMappingURL=6dca3c6f7bf34eafa9fd.js.map