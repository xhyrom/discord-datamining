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
                    return _
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
                E = l("137783"),
                m = l("49111"),
                p = l("205341");

            function C(e) {
                let {
                    emoji: t,
                    className: l,
                    animate: n = !0,
                    hideTooltip: i
                } = e, o = f.AnimateEmoji.useSetting(), d = null != t.id ? ":".concat(t.name, ":") : c.default.translateSurrogatesToInlineEmoji(t.name), E = {
                    className: s(p.emoji, l),
                    emojiId: t.id,
                    emojiName: t.name,
                    autoplay: !0,
                    animated: !!(t.animated && o && n)
                };
                return i ? (0, a.jsx)(u.default, {
                    ...E
                }) : (0, a.jsx)(r.Tooltip, {
                    text: d,
                    children: e => (0, a.jsx)(u.default, {
                        ...e,
                        ...E
                    })
                })
            }
            let T = e => {
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
                            className: s(p.textRuler, t),
                            ref: u,
                            "aria-hidden": !0,
                            children: l
                        })]
                    })
                })
            };
            var _ = e => {
                let {
                    activities: t,
                    applicationStream: l,
                    className: n,
                    textClassName: i,
                    emojiClassName: s,
                    animate: r = !0,
                    hideTooltip: u = !1,
                    hideEmoji: c = !1
                } = e, f = null != t ? t.find(e => e.type === m.ActivityTypes.CUSTOM_STATUS) : null, _ = null;
                null != f && null != f.emoji && !c && (_ = (0, a.jsx)(C, {
                    emoji: f.emoji,
                    animate: r,
                    hideTooltip: u,
                    className: s
                }));
                let S = (0, d.default)(t, l),
                    v = null != S && S.length > 0;
                return null != _ || v ? (0, a.jsxs)("div", {
                    className: n,
                    children: [_, (0, a.jsx)(T, {
                        text: S,
                        className: i
                    }), null != t && t.some(o.default) ? (0, a.jsx)(E.default, {
                        width: 16,
                        height: 16,
                        className: p.icon
                    }) : null]
                }) : null
            }
        },
        572544: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return U
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
                E = l("398604"),
                m = l("468560"),
                p = l("361572"),
                C = l("537325"),
                T = l("835174"),
                _ = l("566271"),
                S = l("337543"),
                v = l("18494"),
                I = l("162771"),
                N = l("677099"),
                A = l("599110"),
                g = l("253981");
            l("545158");
            var h = l("49111");
            async function O(e, t) {
                await i.default.dispatch({
                    type: "INVITE_MODAL_OPEN",
                    invite: e,
                    code: t,
                    context: h.AppContext.APP
                })
            }
            async function P(e) {
                var t, l;
                let a = S.default.getInvite(e.code);
                if (null == a) {
                    let {
                        invite: t
                    } = await s.default.resolveInvite(e.code, "Markdown Link");
                    a = t
                }
                if (null == a) return;
                if (a.state === h.InviteStates.EXPIRED || a.state === h.InviteStates.BANNED || a.state === h.InviteStates.ERROR) {
                    await O(a, e.code);
                    return
                }
                let n = N.default.getFlattenedGuildIds(),
                    i = null === (l = a) || void 0 === l ? void 0 : null === (t = l.guild) || void 0 === t ? void 0 : t.id,
                    r = null != i && n.includes(i);
                r ? s.default.transitionToInviteSync(a) : await O(a, e.code)
            }
            let M = {
                skipExtensionCheck: void 0,
                analyticsLocations: []
            };

            function U(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M,
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
                    return A.default.track(h.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
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
                    path: S,
                    hostname: N = "",
                    host: O,
                    query: U
                } = a.parse(e), y = g.default.isDiscordHostname(N) || window.location.host === O;
                if (y && (null == S ? void 0 : S.startsWith("/application-directory"))) {
                    let [, , e, t] = S.split("/"), a = null != e && (0, u.isSnowflake)(e) ? e : void 0;
                    return i => {
                        var s;
                        null == i || i.preventDefault();
                        let {
                            ApplicationDirectoryProfileSections: r
                        } = l("750947"), {
                            ApplicationDirectoryViews: u
                        } = l("412707"), d = null !== (s = I.default.getGuildId()) && void 0 !== s ? s : void 0, c = u.HOME;
                        return "search" === e && (c = u.SEARCH), null != a && (c = u.APPLICATION, A.default.track(h.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
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
                                applicationSection: (0, m.default)(r, t),
                                entrypoint: {
                                    name: o.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
                                }
                            })
                        }), !0
                    }
                }
                if (null != S && y && g.default.isAppRoute(S)) {
                    let e = null != U ? {
                        search: U
                    } : null;
                    return t => (null == t || t.preventDefault(), (0, C.default)(S, e), !0)
                }
                if (null != S && y) {
                    let {
                        getOAuth2AuthorizeProps: t,
                        openOAuth2Modal: a
                    } = l("33942"), n = t(e);
                    if (null != n) return e => (null == e || e.preventDefault(), a(n), !0)
                }
                let x = (0, p.tryParseEventDetailsPath)(S);
                if (null != S && y && null != x) return e => {
                    null == e || e.preventDefault();
                    let t = I.default.getGuildId();
                    null != x.guildId && "" !== x.guildId && x.guildId !== t && (0, C.default)(h.Routes.CHANNEL(x.guildId));
                    let l = E.default.getGuildScheduledEvent(x.guildEventId);
                    return null != l && (0, f.openGuildEventDetails)({
                        eventId: l.id
                    }), !0
                };
                if (y && (null == S ? void 0 : S.startsWith("/settings/"))) {
                    let {
                        default: e
                    } = l("777523"), t = e(S);
                    if (null != t) return e => (null == e || e.preventDefault(), r.default.open(t.section, t.subsection, {
                        openWithoutBackstack: !1,
                        impressionSource: t.source
                    }), !0)
                }
                if (!s && null != (0, _.isSuspiciousDownload)(e)) return t => (null == t || t.preventDefault(), T.default.show(e), !0)
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
        235275: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useIsDMsToClydeEnabled: function() {
                    return u
                }
            });
            var a = l("446674"),
                n = l("862205"),
                i = l("305961"),
                s = l("980215");
            let r = (0, n.createExperiment)({
                kind: "user",
                id: "2023-05_clyde_ai_dm",
                label: "DMs to Clyde",
                defaultConfig: {
                    isDMsToClydeEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable dms to clyde",
                    config: {
                        isDMsToClydeEnabled: !0
                    }
                }]
            });

            function u() {
                let {
                    isDMsToClydeEnabled: e
                } = r.useExperiment({
                    location: "dbd3ac_1"
                }, {
                    autoTrackExposure: !1
                }), t = (0, a.useStateFromStoresArray)([i.default], () => i.default.getGuildIds()), l = t.some(e => (0, s.getClydeExperimentEnabled)(i.default.getGuild(e)));
                return e && l
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
                    }), E = (0, s.default)(r.id, o), m = (0, s.default)(u.id, o);
                    a.useEffect(() => {
                        f && null == E && (0, n.fetchProfile)(r.id)
                    }, [f, E, r]);
                    let p = f && null != E && null == E.profileEffectID && (null == m ? void 0 : m.profileEffectID) != null;
                    return {
                        shouldUpsellAvatarDecoration: !d && c,
                        shouldUpsellProfileEffect: p
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
                    hideEmoji: E = !1,
                    children: m
                } = e;
                if (null == t) return null;
                let {
                    emoji: p
                } = t, C = null != t.state && "" !== t.state ? t.state : o;
                return (0, a.jsxs)("div", {
                    className: i(r.container, l),
                    children: [E || null == p ? null : (0, a.jsx)(s.ActivityEmoji, {
                        emoji: p,
                        className: i(r.emoji, n, null != d ? {
                            [d]: null == C || "" === C
                        } : null),
                        animate: c,
                        hideTooltip: f
                    }), null != C && C.length > 0 ? (0, a.jsx)("span", {
                        className: u,
                        children: C
                    }) : null, m]
                })
            }
        },
        123377: function(e, t, l) {
            "use strict";
            let a, n;
            l.r(t), l.d(t, {
                CopiableField: function() {
                    return T
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
                E = l("306160"),
                m = l("49111"),
                p = l("782340"),
                C = l("491701");

            function T(e) {
                var t;
                let {
                    className: l,
                    copyValue: r,
                    copyMetaData: T,
                    children: _,
                    disableCopy: S,
                    showCopyIcon: v
                } = e, [I, N] = s.useState(0), [A, g] = s.useState(!1), [h, O] = s.useState(!1);
                if (s.useEffect(() => (a = new o.Timeout, n = new o.Timeout, function() {
                        a.stop(), n.stop()
                    }), []), !E.SUPPORTS_COPY || S) return (0, i.jsx)(i.Fragment, {
                    children: _
                });
                let P = [p.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_1, p.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_2, p.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_3, p.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_4, p.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_5, p.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_6, p.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_7, p.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_8, p.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_9, p.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_10, p.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_11],
                    M = Math.min(Math.max(I - 1, 0), P.length - 1),
                    U = null !== (t = P[M]) && void 0 !== t ? t : P[0],
                    y = I >= P.length - 1,
                    x = y ? d.TooltipColors.RED : d.TooltipColors.GREEN,
                    L = A ? x : d.TooltipColors.PRIMARY,
                    R = () => {
                        a.stop(), O(!1)
                    },
                    D = e => {
                        (0, E.copy)(r), f.default.track(m.AnalyticEvents.TEXT_COPIED, {
                            type: T
                        }), "function" == typeof e && e(), !h && N(I + 1), O(!0), g(!0), a.start(1e3, () => O(!1)), n.start(2e3, () => N(0))
                    };
                return (0, i.jsx)(d.Tooltip, {
                    delay: 500,
                    color: L,
                    forceOpen: h,
                    text: A ? (0, i.jsx)(d.Shaker, {
                        isShaking: y,
                        children: U
                    }) : p.default.Messages.ACCOUNT_CLICK_TO_COPY,
                    onAnimationRest: (e, t) => {
                        !h && A && t.phase === m.SpringTransitionPhases.LEAVE && g(!1)
                    },
                    "aria-label": p.default.Messages.ACCOUNT_CLICK_TO_COPY,
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
                                A ? R() : "function" == typeof a && a()
                            },
                            onClick: () => {
                                D(t)
                            },
                            children: (0, i.jsxs)("div", {
                                className: u(l, C.copiableWrapper),
                                children: [(0, i.jsx)("div", {
                                    className: C.childWrapper,
                                    children: _
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
        92274: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                AddFriendProminenceExperimentDesktop: function() {
                    return n
                }
            });
            var a = l("862205");
            let n = (0, a.createExperiment)({
                kind: "user",
                id: "2023-10_add_friend_prominence_desktop",
                label: "Make adding friends more prominent (desktop profile)",
                defaultConfig: {
                    moreAddFriend: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable",
                    config: {
                        moreAddFriend: !0
                    }
                }]
            });
            (0, a.createExperiment)({
                kind: "user",
                id: "2023-10_add_friend_prominence",
                label: "Make adding friends more prominent (mobile DM)",
                defaultConfig: {
                    moreAddFriend: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable",
                    config: {
                        moreAddFriend: !0
                    }
                }]
            })
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
                    return S
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
                E = l("217513"),
                m = l("590456"),
                p = l("49111"),
                C = l("782340"),
                T = l("730684"),
                _ = l("696246");

            function S(e) {
                let {
                    user: t,
                    guildId: l,
                    className: a,
                    shrinkAtCount: s,
                    shrinkToSize: S,
                    isTryItOutFlow: v,
                    size: I = n.SIZE_24
                } = e, N = (0, E.default)(t.id, l), A = (0, f.default)(N).map(e => ({
                    ...e,
                    src: (0, m.getBadgeAsset)(e.icon)
                })), g = (0, d.useWindowDispatch)();
                if (t.isClyde()) return (0, i.jsx)("div", {
                    className: r(a, T.container, T.clydeBadgeList),
                    "aria-label": C.default.Messages.PROFILE_USER_BADGES,
                    role: "group",
                    children: (0, i.jsx)(c.default, {})
                });
                v && null == A.find(e => "premium" === e.id) && A.push({
                    id: "premium",
                    icon: _,
                    src: _,
                    description: C.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                        date: new Date
                    })
                });
                let h = null != s && null != S && A.length > s ? S : I;
                return (0, i.jsx)("div", {
                    className: r(a, A.length > 0 ? T.containerWithContent : T.container),
                    "aria-label": C.default.Messages.PROFILE_USER_BADGES,
                    role: "group",
                    children: A.map(e => (0, i.jsx)(u.Tooltip, {
                        position: "top",
                        text: e.description,
                        spacing: 12,
                        children: t => (0, i.jsx)(u.Anchor, {
                            ...t,
                            onClick: l => {
                                var a;
                                null === (a = t.onClick) || void 0 === a || a.call(t);
                                let n = null != e.link ? (0, o.default)(e.link) : null;
                                if (null != n) return g.dispatch(p.ComponentActions.POPOUT_CLOSE), n(l)
                            },
                            href: e.link,
                            children: (0, i.jsx)("img", {
                                alt: " ",
                                "aria-hidden": !0,
                                src: e.src,
                                className: r({
                                    [T.profileBadge24]: h === n.SIZE_24,
                                    [T.profileBadge22]: h === n.SIZE_22,
                                    [T.profileBadge18]: h === n.SIZE_18
                                })
                            })
                        })
                    }, e.id))
                })
            }(a = n || (n = {}))[a.SIZE_24 = 0] = "SIZE_24", a[a.SIZE_22 = 1] = "SIZE_22", a[a.SIZE_18 = 2] = "SIZE_18"
        },
        717226: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                i = l.n(n),
                s = l("77078"),
                r = l("235275"),
                u = l("49111"),
                o = l("782340"),
                d = l("355718");

            function c(e) {
                let {
                    className: t,
                    ...l
                } = e;
                return (0, a.jsx)(s.Button, {
                    ...l,
                    look: s.Button.Looks.FILLED,
                    size: s.Button.Sizes.SMALL,
                    className: i(d.actionButton, t)
                })
            }

            function f(e) {
                let {
                    isCurrentUser: t,
                    user: l,
                    relationshipType: n,
                    onAddFriend: i,
                    onIgnoreFriend: f,
                    onSendMessage: E,
                    addFriendText: m
                } = e, p = (0, r.useIsDMsToClydeEnabled)();
                return t || n === u.RelationshipTypes.BLOCKED || l.isClyde() && !p ? null : n === u.RelationshipTypes.FRIEND || l.bot || l.isClyde() ? (0, a.jsx)(c, {
                    color: s.Button.Colors.GREEN,
                    onClick: E,
                    children: o.default.Messages.SEND_MESSAGE
                }) : n === u.RelationshipTypes.PENDING_OUTGOING ? (0, a.jsx)(c, {
                    color: s.Button.Colors.GREEN,
                    disabled: !0,
                    children: o.default.Messages.ADD_FRIEND_BUTTON_AFTER
                }) : n === u.RelationshipTypes.PENDING_INCOMING ? (0, a.jsxs)("div", {
                    className: d.pendingIncoming,
                    children: [(0, a.jsx)(c, {
                        color: s.Button.Colors.GREEN,
                        onClick: i,
                        children: o.default.Messages.FRIEND_REQUEST_ACCEPT
                    }), (0, a.jsx)(c, {
                        color: s.Button.Colors.PRIMARY,
                        onClick: f,
                        className: d.actionRightButton,
                        children: o.default.Messages.FRIEND_REQUEST_IGNORE
                    })]
                }) : (0, a.jsx)(c, {
                    color: s.Button.Colors.GREEN,
                    onClick: i,
                    children: null != m ? m : o.default.Messages.ADD_FRIEND_BUTTON
                })
            }
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
                    return L
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
                E = l("206230"),
                m = l("812204"),
                p = l("685665"),
                C = l("606292"),
                T = l("688318"),
                _ = l("21526"),
                S = l("853987"),
                v = l("491232"),
                I = l("729022"),
                N = l("697218"),
                A = l("945330"),
                g = l("719923"),
                h = l("994428"),
                O = l("782340"),
                P = l("304118"),
                M = l("604689");

            function U(e) {
                let {
                    onClick: t
                } = e;
                return (0, a.jsx)(c.Clickable, {
                    className: P.closeButton,
                    onClick: t,
                    "aria-label": O.default.Messages.DISMISS,
                    children: (0, a.jsx)(A.default, {
                        className: P.closeIcon,
                        width: 18,
                        height: 18
                    })
                })
            }
            let y = 76,
                x = e => (0, a.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    tag: "span",
                    className: P.ctaLink,
                    children: e
                });
            var L = e => {
                let {
                    user: t,
                    guildId: l,
                    onClose: i,
                    onDismiss: r,
                    isInSidebar: A = !1
                } = e, {
                    analyticsLocations: L
                } = (0, p.default)(m.default.COLLECTIBLES_USER_POPOUT_UPSELL), R = (0, d.default)([E.default], () => E.default.useReducedMotion), {
                    avatarDecorationSrc: D
                } = (0, T.default)({
                    user: t,
                    size: (0, C.getDecorationSizeForAvatarSize)(c.AvatarSizes.SIZE_48)
                }), {
                    ref: j,
                    height: b
                } = (0, f.default)(), k = n.useMemo(() => ({
                    top: "-".concat((null != b ? b : y) + 6, "px")
                }), [b]), F = (0, d.default)([S.default], () => {
                    var e;
                    let l = null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.skuId;
                    return null != l && (0, v.isPremiumCollectiblesCategory)(S.default.getCategoryForProduct(l))
                }), B = (0, d.default)([N.default], () => N.default.getCurrentUser());
                u(null != B, "currentUser should not be null");
                let {
                    shouldUpsellAvatarDecoration: G,
                    shouldUpsellProfileEffect: w
                } = (0, I.default)({
                    currentUser: B,
                    popoutUser: t,
                    guildId: l
                }), Y = n.useCallback(() => {
                    null == r || r(h.ContentDismissActionType.PRIMARY), null == i || i(), (0, _.openCollectiblesShop)({
                        analyticsLocations: L,
                        analyticsSource: m.default.COLLECTIBLES_USER_POPOUT_UPSELL
                    })
                }, [r, i, L]), H = n.useCallback(() => {
                    null == r || r(h.ContentDismissActionType.DISMISS)
                }, [r]), W = g.default.canUseCollectibles(B), z = (0, o.match)([G, w]).with([!0, !0], () => W ? O.default.Messages.PROFILE_EFFECTS_SOCIAL_UPSELL_AVATAR_DECORATION_COMBINED.format({
                    openShop: x
                }) : O.default.Messages.PROFILE_EFFECTS_SOCIAL_UPSELL_AVATAR_DECORATION_COMBINED_NON_NITRO.format({
                    openShop: x
                })).with([!0, !1], () => W && F ? O.default.Messages.COLLECTIBLES_SOCIAL_UPSELL_PREMIUM.format({
                    openShop: x
                }) : O.default.Messages.COLLECTIBLES_SOCIAL_UPSELL.format({
                    openShop: x
                })).with([!1, !0], () => W ? O.default.Messages.PROFILE_EFFECTS_SOCIAL_UPSELL.format({
                    openShop: x
                }) : O.default.Messages.PROFILE_EFFECTS_SOCIAL_UPSELL_NON_NITRO.format({
                    openShop: x
                })).otherwise(() => null);
                return (0, a.jsx)("div", {
                    style: k,
                    className: s(P.containerWrapper, {
                        [P.animation]: !R,
                        [P.inSidebar]: A,
                        [P.withoutAvatar]: w
                    }),
                    ref: j,
                    children: (0, a.jsxs)("div", {
                        className: P.container,
                        children: [!w && (0, a.jsx)(c.Clickable, {
                            className: P.avatarSection,
                            onClick: Y,
                            "aria-label": O.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                            children: (0, a.jsx)(c.Avatar, {
                                src: M,
                                avatarDecoration: D,
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
                            children: (0, a.jsx)(U, {
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
                    return G
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
                E = l("980215"),
                m = l("824794"),
                p = l("635471"),
                C = l("305961"),
                T = l("697218"),
                _ = l("423487"),
                S = l("587974"),
                v = l("599110"),
                I = l("719923"),
                N = l("50885"),
                A = l("713135"),
                g = l("106435"),
                h = l("289918"),
                O = l("878569"),
                P = l("590006"),
                M = l("430312"),
                U = l("401642"),
                y = l("552243"),
                x = l("789321"),
                L = l("590456"),
                R = l("49111"),
                D = l("646718"),
                j = l("782340"),
                b = l("524466"),
                k = l("231185");
            let F = d.AvatarSizes.SIZE_80,
                B = (0, c.getDecorationSizeForAvatarSize)(F);

            function G(e) {
                let {
                    user: t,
                    guildId: l,
                    isTryItOutFlow: n,
                    forProfileEffectModal: i
                } = e, s = (0, u.useStateFromStores)([A.default], () => A.default.getUserProfile(t.id), [t]), r = (0, u.useStateFromStores)([C.default], () => C.default.getGuild(l), [l]), c = (0, E.useClydeProfilesEnabled)(r);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(null == s ? void 0 : s.profileFetchFailed) && (!t.isClyde() || c) && (0, a.jsx)(d.Tooltip, {
                        text: j.default.Messages.USER_PROFILE_LOAD_ERROR,
                        spacing: 16,
                        children: e => (0, a.jsx)(_.default, {
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
            let w = N.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar;

            function Y(e) {
                let {
                    user: t,
                    displayProfile: l,
                    avatarSrc: i,
                    hasBanner: o,
                    status: c,
                    isMobile: E,
                    guildId: p,
                    channelId: C,
                    onClose: _,
                    disableUserProfileLink: N,
                    profileType: A,
                    animateOnHover: h,
                    hasProfileEffect: P
                } = e, x = (0, u.useStateFromStores)([T.default], () => T.default.getCurrentUser()), {
                    profileTheme: G
                } = n.useContext(M.UserProfileContext), Y = n.useContext(v.AnalyticsContext), H = t.isNonUserBot() && !t.isClyde(), W = I.default.isPremiumAtLeast(null == l ? void 0 : l.premiumType, D.PremiumTypes.TIER_2), z = n.useMemo(() => (0, m.shouldDisableUserPresenceInChannel)(t, C), [t, C]), Z = N || t.isClyde(), {
                    avatarDecorationSrc: V,
                    avatarSrc: K,
                    eventHandlers: Q,
                    isAnimating: X
                } = (0, g.default)({
                    user: t,
                    guildId: p,
                    size: F,
                    animateOnHover: h
                }), {
                    avatarDecorationSrc: q
                } = (0, f.default)({
                    size: B,
                    animateOnHover: !X,
                    showPending: t.id === (null == x ? void 0 : x.id),
                    showTryItOut: t.id === (null == x ? void 0 : x.id)
                }), J = (0, a.jsxs)("div", {
                    className: b.avatarHoverTarget,
                    ...Q,
                    children: [(0, a.jsx)(w, {
                        src: null != i ? i : K,
                        avatarDecoration: null != q ? null : V,
                        size: F,
                        "aria-label": t.username,
                        status: z ? R.StatusTypes.UNKNOWN : c,
                        statusBackdropColor: null != G && W && !z ? (0, d.getStatusBackdropColor)(G) : void 0,
                        isMobile: E,
                        statusTooltip: !0
                    }), null != q && (0, a.jsx)(y.default, {
                        initTranslate3d: "translate3d(-20px, -120px, 0)",
                        children: (0, a.jsx)(w, {
                            src: k,
                            avatarDecoration: q,
                            size: F,
                            status: R.StatusTypes.UNKNOWN,
                            isMobile: E,
                            className: b.tryingOutAvatarDecoration,
                            "aria-hidden": !0
                        })
                    }, q)]
                }), $ = (0, r.match)(A).with(L.UserProfileTypes.POPOUT, () => {
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
                }).with(L.UserProfileTypes.POMELO_POPOUT, () => b.avatarPositionPomelo).with(L.UserProfileTypes.PANEL, () => b.avatarPositionPanel).exhaustive();
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(d.Clickable, {
                        className: s({
                            [b.clickable]: !Z,
                            [b.avatarWrapperNonUserBot]: H,
                            [b.avatarWrapperNormal]: !H
                        }, $),
                        onClick: H || Z ? void 0 : function() {
                            (0, U.openUserProfileModal)({
                                userId: t.id,
                                guildId: null != p ? p : void 0,
                                channelId: null != C ? C : void 0,
                                analyticsLocation: Y.location
                            }), null == _ || _()
                        },
                        children: [J, !Z && function() {
                            let e = null != V,
                                t = e ? B : (0, d.getAvatarSize)(F);
                            return (0, a.jsx)(S.default, {
                                mask: null == c || c === R.StatusTypes.UNKNOWN || z ? S.default.Masks.AVATAR_DEFAULT : (0, r.match)([e, E]).with([!0, !0], () => S.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => S.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => S.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => S.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
                                className: e ? b.avatarDecorationHint : b.avatarHint,
                                style: e ? {
                                    borderRadius: .4 * t
                                } : void 0,
                                width: t,
                                height: t,
                                children: (0, a.jsx)("div", {
                                    className: b.avatarHintInner,
                                    children: j.default.Messages.VIEW_PROFILE
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
                    showCollectiblesSocialUpsell: E = !1,
                    dismissCollectiblesSocialUpsell: m
                } = e, C = null == l ? void 0 : l.profileEffectID;
                return (0, a.jsxs)(a.Fragment, {
                    children: [E && (0, a.jsx)(x.default, {
                        user: t,
                        onClose: s,
                        guildId: n,
                        onDismiss: m
                    }), (0, a.jsx)(h.default, {
                        user: t,
                        displayProfile: l,
                        onClose: s,
                        guildId: n,
                        profileType: L.UserProfileTypes.POPOUT,
                        showPremiumBadgeUpsell: f,
                        isHovering: c
                    }), null != C && (0, a.jsx)(p.default, {
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
                        profileType: L.UserProfileTypes.POPOUT
                    }), (0, a.jsx)(G, {
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
                E = l("485422"),
                m = l("777003"),
                p = l("49111"),
                C = l("782340"),
                T = l("125234"),
                _ = l("814076");

            function S(e) {
                let {
                    guildName: t
                } = e;
                return (0, a.jsxs)("div", {
                    className: T.guildMemberProfileTooltip,
                    children: [(0, a.jsx)(c.default, {
                        className: T.guildMemberProfileTooltipNitroWheel
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
                    animateOnHover: N = !1,
                    isHovering: A = !1,
                    lineClamp: g
                } = e, {
                    location: h
                } = (0, u.useAnalyticsContext)(), O = (0, s.useStateFromStores)([o.default], () => o.default.getCurrentUser()), P = f.default.canUsePremiumGuildMemberProfile(O);
                return c || null == n || "" === n ? null : (0, a.jsxs)(m.default, {
                    lastSection: I,
                    children: [(0, a.jsxs)(r.Heading, {
                        variant: "eyebrow",
                        className: _.title,
                        children: [C.default.Messages.USER_POPOUT_ABOUT_ME, null != t && v && (0, a.jsx)(r.Tooltip, {
                            color: r.Tooltip.Colors.CUSTOM,
                            tooltipClassName: T.aboutMeGuildIconTooltip,
                            "aria-label": C.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                                guildName: t.name
                            }),
                            text: (0, a.jsx)(S, {
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
                                                ...h,
                                                object: p.AnalyticsObjects.GUILD_ICON
                                            }
                                        })
                                    })
                                })(e.onClick),
                                guild: t,
                                size: d.default.Sizes.SMOL,
                                className: i(T.aboutMeGuildIcon, {
                                    [T.nonPremiumHoverState]: !P
                                })
                            })
                        })]
                    }), (0, a.jsx)(E.default, {
                        userBio: n,
                        animateOnHover: N,
                        isHovering: A,
                        lineClamp: g
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
                    return v
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                i = l.n(n),
                s = l("446674"),
                r = l("77078"),
                u = l("736964"),
                o = l("145079"),
                d = l("123377"),
                c = l("92274"),
                f = l("271938"),
                E = l("27618"),
                m = l("158998"),
                p = l("717226"),
                C = l("777003"),
                T = l("49111"),
                _ = l("782340"),
                S = l("119111");

            function v(e) {
                let {
                    user: t,
                    shouldCopyOnClick: l,
                    nickname: n,
                    pronouns: v,
                    usernameIcon: I,
                    identityCTA: N,
                    className: A,
                    isTryItOut: g = !1,
                    lastSection: h
                } = e, O = (0, s.useStateFromStores)([E.default], () => E.default.getRelationshipType(t.id)), P = O !== T.RelationshipTypes.FRIEND && !t.bot && !t.isClyde(), {
                    moreAddFriend: M
                } = c.AddFriendProminenceExperimentDesktop.useExperiment({
                    location: "user popout"
                }, {
                    disable: !P,
                    autoTrackExposure: !0
                });
                return (0, a.jsxs)(C.default, {
                    className: i(S.container, A),
                    lastSection: h,
                    children: [(0, a.jsxs)("div", {
                        className: l ? S.copiableNameTag : void 0,
                        children: [(0, a.jsx)(d.CopiableField, {
                            className: S.copiableField,
                            copyMetaData: "User Tag",
                            copyValue: m.default.getUserTag(t, {
                                decoration: "never",
                                identifiable: "always"
                            }),
                            showCopyIcon: !0,
                            disableCopy: !l,
                            children: (0, a.jsxs)("div", {
                                className: S.userText,
                                children: [null != n ? (0, a.jsx)(r.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: S.nickname,
                                    children: n
                                }) : null, (0, a.jsx)(o.default, {
                                    usernameIcon: I,
                                    user: t,
                                    forceUsername: !0,
                                    forcePomelo: g,
                                    className: null == n ? S.userTagNoNickname : S.userTagWithNickname,
                                    usernameClass: null == n ? S.userTagUsernameNoNickname : S.userTagUsernameBase,
                                    discriminatorClass: null == n ? S.userTagDiscriminatorNoNickname : S.discrimBase,
                                    botClass: null == n ? S.headerBotTag : S.headerBotTagWithNickname
                                }), N]
                            })
                        }), null != v && "" !== v && (0, a.jsx)(r.Tooltip, {
                            text: _.default.Messages.USER_PROFILE_PRONOUNS,
                            children: e => (0, a.jsx)(r.Text, {
                                ...e,
                                variant: "text-sm/normal",
                                className: S.pronouns,
                                children: v
                            })
                        })]
                    }), M && P ? (0, a.jsx)("div", {
                        className: S.addFriendSection,
                        children: (0, a.jsx)(p.default, {
                            user: t,
                            isCurrentUser: t.id === f.default.getId(),
                            relationshipType: O,
                            onAddFriend: function() {
                                u.default.addRelationship({
                                    userId: t.id,
                                    context: {
                                        location: "User Profile Popout"
                                    }
                                })
                            },
                            onIgnoreFriend: function() {
                                u.default.cancelFriendRequest(t.id, {
                                    location: "User Profile Popout"
                                })
                            },
                            onSendMessage: () => {},
                            addFriendText: _.default.Messages.FRIENDS_SECTION_ADD_FRIEND
                        })
                    }) : null]
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
        },
        137783: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("75196");

            function i(e) {
                let {
                    width: t = 16,
                    height: l = 16,
                    color: i = "currentColor",
                    foreground: s,
                    ...r
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, n.default)(r),
                    width: t,
                    height: l,
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
//# sourceMappingURL=8de8d3762e2f25df31a1.js.map