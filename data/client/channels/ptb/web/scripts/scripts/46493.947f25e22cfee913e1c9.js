(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["46493"], {
        65833: function(e, t, l) {
            "use strict";
            e.exports = l.p + "09f55251a0ce237669a0.svg"
        },
        270664: function(e, t, l) {
            "use strict";
            e.exports = l.p + "4362aa9b6ce12d252458.svg"
        },
        763388: function(e, t, l) {
            "use strict";
            e.exports = l.p + "585164866cd6fa502f13.svg"
        },
        708206: function(e, t, l) {
            "use strict";
            e.exports = l.p + "af851a98a7ed2f9e22cc.svg"
        },
        787795: function(e, t, l) {
            "use strict";
            e.exports = l.p + "bf5fcddc2d74438567db.svg"
        },
        908332: function(e, t, l) {
            "use strict";
            e.exports = l.p + "9b4b00f53cdb2e02fe6f.svg"
        },
        850390: function(e, t, l) {
            "use strict";
            e.exports = l.p + "00f993a9ec4b058c66cf.svg"
        },
        696246: function(e, t, l) {
            "use strict";
            e.exports = l.p + "23808e559cfef1d23276.svg"
        },
        943722: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                ActivityEmoji: function() {
                    return U
                },
                default: function() {
                    return C
                }
            }), l("222007");
            var r = l("37983"),
                a = l("884691"),
                n = l("414456"),
                s = l.n(n),
                i = l("446674"),
                o = l("77078"),
                u = l("430568"),
                d = l("309570"),
                c = l("29088"),
                f = l("867805"),
                T = l("699209"),
                p = l("32346"),
                m = l("342845"),
                E = l("845579"),
                P = l("271938"),
                S = l("42203"),
                v = l("957255"),
                h = l("824563"),
                g = l("800762"),
                _ = l("137783"),
                N = l("49111"),
                O = l("205341");

            function U(e) {
                let {
                    emoji: t,
                    className: l,
                    animate: a = !0,
                    hideTooltip: n
                } = e, i = E.AnimateEmoji.useSetting(), d = null != t.id ? ":".concat(t.name, ":") : f.default.translateSurrogatesToInlineEmoji(t.name), c = {
                    className: s(O.emoji, l),
                    emojiId: t.id,
                    emojiName: t.name,
                    autoplay: !0,
                    animated: !!(t.animated && i && a)
                };
                return n ? (0, r.jsx)(u.default, {
                    ...c
                }) : (0, r.jsx)(o.Tooltip, {
                    text: d,
                    children: e => (0, r.jsx)(u.default, {
                        ...e,
                        ...c
                    })
                })
            }
            let A = e => {
                let {
                    className: t,
                    text: l
                } = e, n = a.useRef(null), i = a.useRef(null), [u, d] = a.useState(!1);
                return a.useLayoutEffect(() => {
                    let {
                        current: e
                    } = n, {
                        current: t
                    } = i;
                    if (null == e || null == t) return;
                    let l = e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight;
                    d(!l)
                }, [l]), (0, r.jsx)(o.Tooltip, {
                    text: u || null == l || "" === l ? null : l,
                    delay: 150,
                    "aria-label": !1,
                    children: e => (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            ...e,
                            className: t,
                            ref: n,
                            children: l
                        }), (0, r.jsx)("div", {
                            className: s(O.textRuler, t),
                            ref: i,
                            "aria-hidden": !0,
                            children: l
                        })]
                    })
                })
            };
            var C = e => {
                var t;
                let {
                    activities: l,
                    applicationStream: a,
                    className: n,
                    textClassName: s,
                    emojiClassName: o,
                    animate: u = !0,
                    hideTooltip: f = !1,
                    hideEmoji: E = !1,
                    user: C
                } = e, I = null != l ? l.find(e => e.type === N.ActivityTypes.CUSTOM_STATUS) : null, y = (0, i.useStateFromStores)([P.default], () => P.default.getId() === (null == C ? void 0 : C.id)), M = (0, i.useStateFromStores)([p.default], () => y ? p.default.getHangStatusActivity() : null != l ? l.find(e => e.type === N.ActivityTypes.HANG_STATUS) : null), x = (0, i.useStateFromStores)([g.default, S.default], () => {
                    var e;
                    return null != M && null != C ? S.default.getChannel(null === (e = g.default.getVoiceStateForUser(C.id)) || void 0 === e ? void 0 : e.channelId) : null
                }), {
                    enableHangStatus: L
                } = T.HangStatusExperiment.useExperiment({
                    guildId: null == x ? void 0 : x.guild_id,
                    location: "ActivityStatus"
                }), R = null, j = L && null != M && v.default.can(N.Permissions.CONNECT, x);
                j ? R = (0, r.jsx)(m.default, {
                    className: o,
                    hangStatusActivity: M
                }) : null != I && null != I.emoji && !E && (R = (0, r.jsx)(U, {
                    emoji: I.emoji,
                    animate: u,
                    hideTooltip: f,
                    className: o
                }));
                let b = (0, i.useStateFromStores)([h.default], () => null != C ? h.default.getStatus(C.id) : null),
                    B = null !== b && [N.StatusTypes.OFFLINE, N.StatusTypes.INVISIBLE].includes(b),
                    D = null === (t = (0, c.default)(l, a, void 0, j)) || void 0 === t ? void 0 : t.activityText,
                    H = null != D && D.length > 0;
                return B || null == R && !H ? null : (0, r.jsxs)("div", {
                    className: n,
                    children: [R, (0, r.jsx)(A, {
                        text: D,
                        className: s
                    }), null != l && l.some(d.default) ? (0, r.jsx)(_.default, {
                        width: 16,
                        height: 16,
                        className: O.icon
                    }) : null]
                })
            }
        },
        267527: function(e, t, l) {
            "use strict";
            l.r(t);
            var r = l("655665");
            l.es(r, t)
        },
        204947: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var r = l("782340");

            function a(e) {
                return null != e && "" !== e ? e : r.default.Messages.EMBEDDED_ACTIVITIES_IN_ACTIVITY
            }
        },
        502651: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var r = l("954016"),
                a = l("49111");

            function n(e) {
                return e.type === a.ActivityTypes.STREAMING && null != e.url && r.validStreamURL.test(e.url)
            }

            function s(e) {
                return null != e && (Array.isArray(e) ? e.some(n) : n(e))
            }
        },
        29088: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            }), l("222007");
            var r = l("808742"),
                a = l("204947"),
                n = l("152311"),
                s = l("502651"),
                i = l("49111"),
                o = l("782340");

            function u(e) {
                return {
                    [i.ActivityTypes.STREAMING]: e ? o.default.Messages.UNFORMATTED_STREAMING : o.default.Messages.STREAMING,
                    [i.ActivityTypes.LISTENING]: e ? o.default.Messages.UNFORMATTED_LISTENING_TO : o.default.Messages.LISTENING_TO,
                    [i.ActivityTypes.WATCHING]: e ? o.default.Messages.UNFORMATTED_WATCHING : o.default.Messages.WATCHING,
                    [i.ActivityTypes.COMPETING]: e ? o.default.Messages.UNFORMATTED_COMPETING : o.default.Messages.COMPETING
                }
            }

            function d(e, t) {
                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    d = arguments.length > 3 ? arguments[3] : void 0;
                if (null != e && e.type === i.ActivityTypes.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
                if (null != t) return null == e || e.type !== i.ActivityTypes.PLAYING ? o.default.Messages.SHARING_SCREEN : u(l)[i.ActivityTypes.STREAMING].format({
                    name: e.name
                });
                if (d && null != e && e.type === i.ActivityTypes.HANG_STATUS) return (0, r.getHangStatusText)(e);
                if (null == e || null == e.name) return null;
                if ((0, s.default)(e)) {
                    let t = null != e.details && "" !== e.details ? e.details : e.name;
                    return u(l)[i.ActivityTypes.STREAMING].format({
                        name: t
                    })
                }
                return (0, n.default)(e) ? (0, a.default)(e.name) : function(e, t, l) {
                    let r = u(l);
                    switch (e) {
                        case i.ActivityTypes.LISTENING:
                        case i.ActivityTypes.WATCHING:
                        case i.ActivityTypes.COMPETING:
                            return r[e].format({
                                name: t
                            });
                        case i.ActivityTypes.CUSTOM_STATUS:
                        case i.ActivityTypes.HANG_STATUS:
                            return null;
                        case i.ActivityTypes.PLAYING:
                        default:
                            return l ? o.default.Messages.UNFORMATTED_PLAYING_GAME.format({
                                game: t
                            }) : o.default.Messages.PLAYING_GAME.format({
                                game: t
                            })
                    }
                }(e.type, e.name, l)
            }

            function c(e, t) {
                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = arguments.length > 3 ? arguments[3] : void 0;
                if (Array.isArray(e)) {
                    let a = e;
                    null != t && (a = [...a, null]);
                    let n = null;
                    for (let e of a) {
                        let a = d(e, t, l, r);
                        if (null != a) return {
                            activity: e,
                            activityText: a
                        };
                        (null == e ? void 0 : e.type) === i.ActivityTypes.CUSTOM_STATUS && null != e.emoji && (n = e)
                    }
                    return (null == n ? void 0 : n.emoji) != null ? {
                        activity: n,
                        activityText: null
                    } : null
                }
                return d(e, t, l, r)
            }
        },
        335031: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var r = l("884691"),
                a = l("656280"),
                n = l.n(a),
                s = l("509043"),
                i = l("446674"),
                o = l("206230"),
                u = e => {
                    let t = (0, i.useStateFromStores)([o.default], () => o.default.desaturateUserColors ? o.default.saturation : 1),
                        l = (0, r.useMemo)(() => {
                            let {
                                h: l,
                                s: r,
                                l: a
                            } = n((0, s.int2hex)(e)).toHsl(), i = n({
                                h: l,
                                s: r * t,
                                l: a
                            });
                            return {
                                hex: i.toHexString(),
                                hsl: i.toHslString()
                            }
                        }, [e, t]);
                    return l
                }
        },
        775377: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var r = l("37983");
            l("884691");
            var a = l("414456"),
                n = l.n(a),
                s = l("943722"),
                i = l("462339");

            function o(e) {
                let {
                    activity: t,
                    className: l,
                    emojiClassName: a,
                    textClassName: o,
                    placeholderText: u,
                    soloEmojiClassName: d,
                    animate: c = !0,
                    hideTooltip: f = !1,
                    hideEmoji: T = !1,
                    children: p
                } = e;
                if (null == t) return null;
                let {
                    emoji: m
                } = t, E = null != t.state && "" !== t.state ? t.state : u;
                return (0, r.jsxs)("div", {
                    className: n(i.container, l),
                    children: [T || null == m ? null : (0, r.jsx)(s.ActivityEmoji, {
                        emoji: m,
                        className: n(i.emoji, a, null != d ? {
                            [d]: null == E || "" === E
                        } : null),
                        animate: c,
                        hideTooltip: f
                    }), null != E && E.length > 0 ? (0, r.jsx)("span", {
                        className: o,
                        children: E
                    }) : null, p]
                })
            }
        },
        699209: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                HangStatusExperiment: function() {
                    return a
                }
            });
            var r = l("862205");
            let a = (0, r.createExperiment)({
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
        808742: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                getHangStatusOptions: function() {
                    return f
                },
                getHangStatusDetails: function() {
                    return T
                },
                getHangStatusText: function() {
                    return p
                }
            });
            var r = l("49111"),
                a = l("782340"),
                n = l("65833"),
                s = l("270664"),
                i = l("763388"),
                o = l("708206"),
                u = l("787795"),
                d = l("908332"),
                c = l("850390");
            let f = () => ({
                    [r.HangStatusTypes.CHILLING]: {
                        title: a.default.Messages.STATUS_CHILLING,
                        icon: s,
                        color: "#567C7E"
                    },
                    [r.HangStatusTypes.GAMING]: {
                        title: a.default.Messages.STATUS_GAMING,
                        icon: i,
                        color: "#685F8C"
                    },
                    [r.HangStatusTypes.FOCUSING]: {
                        title: a.default.Messages.STATUS_FOCUSING,
                        icon: u,
                        color: "#7F6956"
                    },
                    [r.HangStatusTypes.BRB]: {
                        title: a.default.Messages.STATUS_BRB,
                        icon: n,
                        color: "#76567E"
                    },
                    [r.HangStatusTypes.EATING]: {
                        title: a.default.Messages.STATUS_EATING,
                        icon: o,
                        color: "#717B54"
                    },
                    [r.HangStatusTypes.IN_TRANSIT]: {
                        title: a.default.Messages.STATUS_IN_TRANSIT,
                        icon: d,
                        color: "#56697F"
                    },
                    [r.HangStatusTypes.WATCHING]: {
                        title: a.default.Messages.STATUS_WATCHING,
                        icon: c,
                        color: "#7C5571"
                    }
                }),
                T = e => {
                    if ((null == e ? void 0 : e.type) !== r.ActivityTypes.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
                    let t = e.state;
                    return t === r.HangStatusTypes.CUSTOM ? null : f()[t]
                },
                p = e => {
                    var t;
                    let l = (null == e ? void 0 : e.state) != null ? e.state : null;
                    return l === r.HangStatusTypes.CUSTOM ? null == e ? void 0 : e.details : null === (t = T(e)) || void 0 === t ? void 0 : t.title
                }
        },
        342845: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var r = l("37983");
            l("884691");
            var a = l("943722"),
                n = l("808742"),
                s = l("49111"),
                i = e => {
                    var t;
                    let {
                        className: l,
                        hangStatusActivity: i,
                        animate: o = !0
                    } = e;
                    if ((null == i ? void 0 : i.state) === s.HangStatusTypes.CUSTOM) return null != i.emoji ? (0, r.jsx)(a.ActivityEmoji, {
                        emoji: i.emoji,
                        className: l,
                        hideTooltip: !0,
                        animate: o
                    }) : null;
                    let u = null === (t = (0, n.getHangStatusDetails)(i)) || void 0 === t ? void 0 : t.icon;
                    return null != u ? (0, r.jsx)("img", {
                        src: u,
                        alt: "",
                        className: null != l ? l : void 0
                    }) : null
                }
        },
        824794: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                shouldDisableUserPresenceInChannel: function() {
                    return a
                }
            });
            var r = l("42203");

            function a(e, t) {
                let l = r.default.getChannel(t);
                return null != l && e.bot && l.isPrivate() && null == l.rawRecipients.find(t => t.id === e.id)
            }
        },
        643121: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var r = l("65597"),
                a = l("845579"),
                n = l("102985"),
                s = l("697218"),
                i = l("782340");
            let o = "legacy_username";

            function u(e) {
                var t;
                let l = a.LegacyUsernameDisabled.useSetting(),
                    u = (0, r.default)([s.default], () => s.default.getCurrentUser()),
                    d = (0, r.default)([n.default], () => n.default.hidePersonalInformation);
                if (null == e) return [];
                let c = null !== (t = null == e ? void 0 : e.getBadges()) && void 0 !== t ? t : [];
                return null != u && u.id === e.userId && l && (c = c.filter(e => e.id !== o)), d && (c = c.map(e => ({
                    ...e,
                    description: e.id === o ? i.default.Messages.STREAMER_MODE_ENABLED : e.description
                }))), c
            }
        },
        528438: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            }), l("222007");
            var r = l("509043"),
                a = l("462274"),
                n = l("449918"),
                s = l("49111");

            function i(e, t) {
                var l, i;
                let {
                    pendingThemeColors: o,
                    isPreview: u
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, d = null == e ? void 0 : e.getAvatarURL(null == t ? void 0 : t.guildId, 80), c = (0, n.useColorValue)(s.Color.PRIMARY_530).hex, [f, T] = (0, a.useAvatarColors)(d, c, !1);
                if (!(null == t ? void 0 : t.canEditThemes) && !u) return [null, null];
                let p = null == t ? void 0 : t.getPreviewThemeColors(o),
                    m = null !== (l = null == p ? void 0 : p[0]) && void 0 !== l ? l : (0, r.hex2int)(f),
                    E = null !== (i = null == p ? void 0 : p[1]) && void 0 !== i ? i : (0, r.hex2int)(T);
                return [m, E]
            }
        },
        289918: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return K
                }
            }), l("222007");
            var r, a, n = l("37983"),
                s = l("884691"),
                i = l("414456"),
                o = l.n(i),
                u = l("509043"),
                d = l("446674"),
                c = l("669491"),
                f = l("77078"),
                T = l("79112"),
                p = l("812204"),
                m = l("685665"),
                E = l("462274"),
                P = l("335031"),
                S = l("252063"),
                v = l("38766"),
                h = l("845579"),
                g = l("271938"),
                _ = l("42203"),
                N = l("305961"),
                O = l("18494"),
                U = l("697218"),
                A = l("471671"),
                C = l("275623"),
                I = l("945330"),
                y = l("474571"),
                M = l("216422"),
                x = l("987772"),
                L = l("956089"),
                R = l("599110"),
                j = l("315102"),
                b = l("719923"),
                B = l("713135"),
                D = l("581295"),
                H = l("878569"),
                w = l("236100"),
                G = l("590456"),
                F = l("49111"),
                k = l("646718"),
                W = l("782340"),
                z = l("220817");
            (a = r || (r = {}))[a.SHOULD_LOAD = 0] = "SHOULD_LOAD", a[a.LOADING = 1] = "LOADING", a[a.COMPLETE = 2] = "COMPLETE";
            let Y = {
                    [G.UserProfileTypes.POPOUT]: 18,
                    [G.UserProfileTypes.MODAL]: 24,
                    [G.UserProfileTypes.SETTINGS]: 0,
                    [G.UserProfileTypes.PANEL]: 18,
                    [G.UserProfileTypes.POMELO_POPOUT]: 18,
                    [G.UserProfileTypes.CANCEL_MODAL]: 0
                },
                Z = {
                    [G.UserProfileTypes.MODAL]: F.AnalyticsPages.USER_PROFILE,
                    [G.UserProfileTypes.POPOUT]: F.AnalyticsPages.USER_POPOUT,
                    [G.UserProfileTypes.SETTINGS]: F.AnalyticsPages.USER_POPOUT,
                    [G.UserProfileTypes.PANEL]: F.AnalyticsPages.DM_CHANNEL,
                    [G.UserProfileTypes.POMELO_POPOUT]: F.AnalyticsPages.POMELO_POPOUT,
                    [G.UserProfileTypes.CANCEL_MODAL]: F.AnalyticsPages.USER_POPOUT
                };

            function V(e) {
                let {
                    type: t,
                    shown: r,
                    onClick: a
                } = e, i = (0, d.useStateFromStores)([U.default], () => {
                    let e = U.default.getCurrentUser();
                    return b.default.canUsePremiumProfileCustomization(e)
                }), u = s.useRef(!1), {
                    analyticsLocations: c
                } = (0, m.default)(p.default.BADGE);
                return s.useEffect(() => {
                    r && !u.current && (u.current = !0, R.default.track(F.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: k.PremiumUpsellTypes.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
                        location: {
                            page: Z[t],
                            section: F.AnalyticsSections.NITRO_BANNER,
                            object: F.AnalyticsObjects.NITRO_BADGE
                        },
                        location_stack: c
                    }))
                }, [c, r, t]), (0, n.jsx)(f.Tooltip, {
                    tooltipContentClassName: z.premiumIconTooltipContent,
                    text: i ? W.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : W.default.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
                    children: e => (0, n.jsx)(f.Clickable, {
                        ...e,
                        onClick: i ? void 0 : () => {
                            var e;
                            e = c, (0, f.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await l.el("292890").then(l.bind(l, "292890"));
                                return l => {
                                    let {
                                        onClose: r,
                                        ...a
                                    } = l;
                                    return (0, n.jsx)(t, {
                                        analyticsLocations: e,
                                        title: W.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
                                        description: W.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
                                            onAndMoreWithPremiumClick: () => {
                                                r(), T.default.open(F.UserSettingsSections.PREMIUM, null, {
                                                    analyticsLocations: e
                                                })
                                            }
                                        }),
                                        onClose: r,
                                        ...a
                                    })
                                }
                            }), null == a || a()
                        },
                        className: o(z.premiumIconWrapper, {
                            [z.visible]: r,
                            [z.clickable]: !i
                        }),
                        children: (0, n.jsx)(L.TextBadge, {
                            color: "rgba(32, 34, 37, 0.8)",
                            text: (0, n.jsx)(M.default, {
                                width: 16,
                                height: 16,
                                className: z.premiumIcon
                            })
                        })
                    })
                })
            }

            function X(e) {
                let {
                    darkenOnHover: t,
                    profileType: l,
                    profileLabel: r,
                    icon: a,
                    ...s
                } = e, i = Y[l], o = "pencil" === a ? x.default : y.default;
                return (0, n.jsx)(f.Clickable, {
                    ...s,
                    "aria-label": r,
                    className: t ? z.pencilContainerDark : z.pencilContainer,
                    children: (0, n.jsx)(f.Tooltip, {
                        text: r,
                        children: e => (0, n.jsx)(o, {
                            ...e,
                            width: i,
                            height: i,
                            className: z.editIcon
                        })
                    })
                })
            }

            function K(e) {
                var t, l, r;
                let {
                    user: a,
                    displayProfile: i,
                    bannerSrc: T,
                    onClose: p,
                    guildId: m,
                    profileType: U = G.UserProfileTypes.POPOUT,
                    isHovering: y,
                    animateOnHover: M,
                    allowEdit: x = !0,
                    showPremiumBadgeUpsell: L = !0,
                    hasProfileEffect: R = !1
                } = e, [Y, Z] = s.useState((null == i ? void 0 : i.banner) == null ? 2 : 0), K = (0, d.useStateFromStores)([N.default], () => N.default.getGuild(m)), Q = (0, d.useStateFromStores)([g.default], () => g.default.getId()), q = Q === a.id && x, J = b.default.isPremiumAtLeast(null == i ? void 0 : i.premiumType, k.PremiumTypes.TIER_2), [$, ee] = s.useState(!1), et = (0, d.useStateFromStores)([A.default], () => A.default.isFocused()), el = h.GifAutoPlay.getSetting(), er = (0, f.useToken)(c.default.unsafe_rawColors.PRIMARY_800).hex(), ea = (0, f.getAvatarSize)(f.AvatarSizes.SIZE_80), en = (0, u.hex2int)((0, E.default)(a.getAvatarURL(m, ea), er, !1)), es = (0, P.default)(null !== (t = null == i ? void 0 : i.primaryColor) && void 0 !== t ? t : en).hsl, ei = (0, H.getUserBannerSize)(U), eo = null != T ? T : null == i ? void 0 : i.getBannerURL({
                    size: ei,
                    canAnimate: M || !el ? $ : et
                }), eu = null != eo, ed = (0, d.useStateFromStores)([B.default], () => B.default.getUserProfile(a.id)), ec = _.default.getChannel(O.default.getChannelId()), {
                    appsInGDMEnabled: ef,
                    availableApplications: eT
                } = (0, S.usePrivateChannelIntegrationState)({
                    channelId: null !== (l = null == ec ? void 0 : ec.id) && void 0 !== l ? l : ""
                }), ep = null == ed ? void 0 : ed.application, em = ef && null != eT.find(e => e.id === (null == ep ? void 0 : ep.id));
                (0, s.useEffect)(() => {
                    if (eu && J && 0 === Y) {
                        Z(1);
                        let e = new Image;
                        e.src = eo, e.onload = () => Z(2)
                    }
                }, [a, eu, J, eo, Y]), s.useEffect(() => {
                    if (el || !J) return;
                    let e = null != T ? T : null == i ? void 0 : i.getBannerURL({
                        size: ei,
                        canAnimate: !0
                    });
                    if (null == e) return;
                    let t = new Image;
                    t.src = e
                }, [el, J, T, i, ei]);
                let eE = (0, v.default)({
                    analyticsLocation: {
                        page: F.AnalyticsPages.USER_POPOUT,
                        section: F.AnalyticsSections.PROFILE_POPOUT
                    }
                });
                return (0, n.jsx)(D.default, {
                    isPremium: J,
                    hasThemeColors: null !== (r = null == i ? void 0 : i.canEditThemes) && void 0 !== r && r,
                    profileType: U,
                    hasBanner: eu,
                    hasProfileEffect: R,
                    children: (0, n.jsxs)("div", {
                        className: o(z.banner, (0, H.getUserBannerStyles)({
                            profileType: U,
                            user: {
                                hasBanner: eu,
                                isPremium: J,
                                hasProfileEffect: R
                            }
                        }), {
                            [z.reducedMotion]: !el
                        }),
                        onMouseMove: () => ee(!0),
                        onMouseLeave: () => ee(!1),
                        style: {
                            backgroundImage: eu && J ? "url(".concat(eo, ")") : void 0,
                            backgroundColor: 2 !== Y ? c.default.unsafe_rawColors.PRIMARY_800.css : es
                        },
                        children: [q ? null == K ? (0, n.jsx)(X, {
                            darkenOnHover: R && y,
                            profileType: U,
                            profileLabel: W.default.Messages.EDIT_PROFILE,
                            icon: "pencil",
                            onClick: () => {
                                null == p || p(), eE()
                            }
                        }) : null == K ? null : (0, n.jsx)(f.Popout, {
                            spacing: 6,
                            position: "bottom",
                            renderPopout: e => {
                                let {
                                    closePopout: t
                                } = e;
                                return (0, n.jsx)(w.default, {
                                    onClose: t,
                                    onSelect: p,
                                    guild: K
                                })
                            },
                            children: e => (0, n.jsx)(X, {
                                darkenOnHover: R && y,
                                profileLabel: W.default.Messages.EDIT_PROFILE,
                                icon: "pencil",
                                ...e,
                                profileType: U
                            })
                        }) : (() => {
                            let e = L && eu && U !== G.UserProfileTypes.SETTINGS;
                            return e ? (0, n.jsx)(V, {
                                type: U,
                                shown: void 0 === y ? $ : y,
                                onClick: p
                            }) : null
                        })(), em ? U !== G.UserProfileTypes.MODAL ? null : (0, n.jsx)(f.Clickable, {
                            onClick: p,
                            "aria-label": W.default.Messages.BACK,
                            className: z.pencilContainer,
                            children: (0, n.jsx)(f.Tooltip, {
                                text: W.default.Messages.BACK,
                                children: e => (0, n.jsx)(I.default, {
                                    ...e,
                                    className: z.closeIcon,
                                    color: "white"
                                })
                            })
                        }) : null, !el && (0, j.isAnimatedImageURL)(eo) && (0, n.jsx)(C.default, {
                            className: z.gifTag
                        })]
                    })
                })
            }
        },
        581295: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            }), l("70102"), l("794252");
            var r = l("37983");
            l("884691");
            var a = l("506838"),
                n = l("769846"),
                s = l("77078"),
                i = l("606292"),
                o = l("476765"),
                u = l("159885"),
                d = l("878569"),
                c = l("590456"),
                f = l("573135"),
                T = l("423713");
            let p = {
                [c.UserProfileTypes.POPOUT]: s.AvatarSizes.SIZE_80,
                [c.UserProfileTypes.MODAL]: s.AvatarSizes.SIZE_120,
                [c.UserProfileTypes.SETTINGS]: s.AvatarSizes.SIZE_80,
                [c.UserProfileTypes.PANEL]: s.AvatarSizes.SIZE_80,
                [c.UserProfileTypes.POMELO_POPOUT]: s.AvatarSizes.SIZE_80,
                [c.UserProfileTypes.CANCEL_MODAL]: s.AvatarSizes.SIZE_56
            };

            function m(e) {
                let {
                    children: t,
                    profileType: l,
                    isPremium: m,
                    hasThemeColors: E,
                    hasBanner: P,
                    forProfileEffectModal: S,
                    hasProfileEffect: v = !1
                } = e, h = p[l], g = (0, o.useUID)(), _ = function(e) {
                    let {
                        profileType: t,
                        avatarSize: l,
                        hasBanner: r,
                        isPremium: o,
                        hasThemeColors: T,
                        hasProfileEffect: p
                    } = e, m = f.AvatarDecorationBorderSizes[l];
                    if (null == m) throw Error("Unsupported avatar size for banner mask");
                    let E = (0, i.getDecorationSizeForAvatarSize)(l),
                        {
                            size: P,
                            stroke: S
                        } = (0, s.getAvatarSpecs)(l),
                        v = {
                            avatarSize: P,
                            avatarBorderSize: S,
                            avatarDecorationSize: E,
                            avatarDecorationBorderSize: m,
                            avatarDecorationOffsetY: -(E + 2 * m) / 2,
                            bannerHeight: (0, d.getUserBannerHeight)({
                                profileType: t,
                                user: {
                                    hasBanner: r,
                                    isPremium: o,
                                    hasProfileEffect: p
                                }
                            })
                        };
                    return (0, a.match)(t).with(c.UserProfileTypes.POPOUT, () => {
                        let e = T ? (0, u.cssValueToNumber)(n.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING) : 0;
                        return {
                            ...v,
                            bannerWidth: (0, u.cssValueToNumber)(n.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
                            offsetX: 16 - e,
                            offsetY: 4 + e,
                            avatarDecorationOffsetX: 4
                        }
                    }).with(c.UserProfileTypes.MODAL, () => ({
                        ...v,
                        bannerWidth: (0, d.getUserBannerSize)(c.UserProfileTypes.MODAL),
                        offsetX: 14,
                        offsetY: 5,
                        avatarDecorationOffsetX: 2
                    })).with(c.UserProfileTypes.SETTINGS, () => ({
                        ...v,
                        bannerWidth: 660,
                        offsetX: 16,
                        offsetY: -22,
                        avatarDecorationOffsetX: 8
                    })).with(c.UserProfileTypes.PANEL, () => {
                        let e = (0, u.cssValueToNumber)(n.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING);
                        return {
                            ...v,
                            bannerWidth: (0, u.cssValueToNumber)(n.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
                            offsetX: 16 - e,
                            offsetY: 4 + e,
                            avatarDecorationOffsetX: 4
                        }
                    }).with(c.UserProfileTypes.POMELO_POPOUT, () => ({
                        ...v,
                        bannerWidth: (0, d.getUserBannerSize)(c.UserProfileTypes.POMELO_POPOUT),
                        offsetX: 20,
                        offsetY: -20,
                        avatarDecorationOffsetX: 10
                    })).with(c.UserProfileTypes.CANCEL_MODAL, () => ({
                        ...v,
                        bannerWidth: (0, d.getUserBannerSize)(c.UserProfileTypes.CANCEL_MODAL),
                        offsetX: 8,
                        offsetY: 2,
                        avatarDecorationOffsetX: 8
                    })).exhaustive()
                }({
                    profileType: l,
                    avatarSize: h,
                    hasBanner: P,
                    isPremium: m,
                    hasThemeColors: E,
                    hasProfileEffect: v
                });
                S && (_.bannerWidth = (0, u.cssValueToNumber)(n.default.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH));
                let N = _.avatarSize / 2 + _.avatarBorderSize,
                    O = _.bannerHeight - _.offsetY;
                return (0, r.jsxs)("svg", {
                    className: T.bannerSVGWrapper,
                    viewBox: "0 0 ".concat(_.bannerWidth, " ").concat(_.bannerHeight),
                    style: {
                        minWidth: _.bannerWidth,
                        minHeight: _.bannerHeight
                    },
                    children: [(0, r.jsxs)("mask", {
                        id: g,
                        children: [(0, r.jsx)("rect", {
                            fill: "white",
                            x: "0",
                            y: "0",
                            width: "100%",
                            height: "100%"
                        }), (0, r.jsx)("circle", {
                            fill: "black",
                            cx: _.offsetX + N,
                            cy: O,
                            r: N
                        })]
                    }), (0, r.jsx)("foreignObject", {
                        x: "0",
                        y: "0",
                        width: "100%",
                        height: "100%",
                        overflow: "visible",
                        mask: "url(#".concat(g, ")"),
                        children: t
                    })]
                })
            }
        },
        878569: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                buildGetPremiumUserBannerStyles: function() {
                    return o
                },
                getUserBannerStyles: function() {
                    return u
                },
                getUserBannerHeight: function() {
                    return d
                },
                getUserBannerSize: function() {
                    return f
                }
            }), l("794252");
            var r = l("506838"),
                a = l("617258"),
                n = l("769846"),
                s = l("590456"),
                i = l("220817");
            let o = e => t => {
                    if (t.hasBanner && t.isPremium || t.hasProfileEffect) return e.premiumUserWithBanner;
                    if (t.isPremium) {
                        var l;
                        return null !== (l = e.premiumUserWithoutBanner) && void 0 !== l ? l : e.default
                    }
                    return e.default
                },
                u = e => {
                    let {
                        profileType: t,
                        user: l
                    } = e;
                    return (0, r.match)(t).with(s.UserProfileTypes.POPOUT, s.UserProfileTypes.POMELO_POPOUT, () => {
                        let e = o({
                            premiumUserWithBanner: i.popoutBannerPremium,
                            premiumUserWithoutBanner: i.popoutNoBannerPremium,
                            default: i.popoutBanner
                        });
                        return e(l)
                    }).with(s.UserProfileTypes.MODAL, () => {
                        let e = o({
                            premiumUserWithBanner: i.profileBannerPremium,
                            premiumUserWithoutBanner: i.profileBanner,
                            default: i.profileBanner
                        });
                        return e(l)
                    }).with(s.UserProfileTypes.SETTINGS, () => i.settingsBanner).with(s.UserProfileTypes.PANEL, () => i.panelBanner).with(s.UserProfileTypes.CANCEL_MODAL, () => i.cancelModalBanner).exhaustive()
                },
                d = e => {
                    let {
                        profileType: t,
                        user: l
                    } = e, i = (0, r.match)(t).with(s.UserProfileTypes.POPOUT, () => {
                        let e = o({
                            premiumUserWithBanner: n.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT,
                            premiumUserWithoutBanner: n.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT,
                            default: n.default.USER_BANNER_BANNER_HEIGHT_POPOUT
                        });
                        return e(l)
                    }).with(s.UserProfileTypes.MODAL, () => {
                        let e = o({
                            premiumUserWithBanner: n.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE,
                            premiumUserWithoutBanner: n.default.USER_BANNER_BANNER_HEIGHT_PROFILE,
                            default: n.default.USER_BANNER_BANNER_HEIGHT_PROFILE
                        });
                        return e(l)
                    }).with(s.UserProfileTypes.POMELO_POPOUT, () => n.default.USER_BANNER_BANNER_HEIGHT_POMELO).with(s.UserProfileTypes.SETTINGS, () => n.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS).with(s.UserProfileTypes.PANEL, () => n.default.USER_BANNER_BANNER_HEIGHT_PANEL).with(s.UserProfileTypes.CANCEL_MODAL, () => n.default.USER_BANNER_CANCEL_MODAL_HEIGHT).exhaustive();
                    return (0, a.cssValueToNumber)(i)
                },
                c = Object.freeze({
                    [s.UserProfileTypes.POPOUT]: 480,
                    [s.UserProfileTypes.PANEL]: 480,
                    [s.UserProfileTypes.MODAL]: 600,
                    [s.UserProfileTypes.SETTINGS]: 600,
                    [s.UserProfileTypes.POMELO_POPOUT]: 432,
                    [s.UserProfileTypes.CANCEL_MODAL]: 172
                }),
                f = e => c[e]
        },
        590006: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                BadgeSizes: function() {
                    return r
                },
                default: function() {
                    return v
                }
            }), l("424973");
            var r, a, n = l("37983");
            l("884691");
            var s = l("414456"),
                i = l.n(s),
                o = l("77078"),
                u = l("572544"),
                d = l("244201"),
                c = l("298878"),
                f = l("643121"),
                T = l("217513"),
                p = l("590456"),
                m = l("49111"),
                E = l("782340"),
                P = l("730684"),
                S = l("696246");

            function v(e) {
                let {
                    user: t,
                    guildId: l,
                    className: r,
                    shrinkAtCount: a,
                    shrinkToSize: s,
                    isTryItOutFlow: v,
                    size: h = 0
                } = e, g = (0, T.default)(t.id, l), _ = (0, f.default)(g).map(e => ({
                    ...e,
                    src: (0, p.getBadgeAsset)(e.icon)
                })), N = (0, d.useWindowDispatch)();
                if (t.isClyde()) return (0, n.jsx)("div", {
                    className: i(r, P.container, P.clydeBadgeList),
                    "aria-label": E.default.Messages.PROFILE_USER_BADGES,
                    role: "group",
                    children: (0, n.jsx)(c.default, {})
                });
                v && null == _.find(e => "premium" === e.id) && _.push({
                    id: "premium",
                    icon: S,
                    src: S,
                    description: E.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                        date: new Date
                    })
                });
                let O = null != a && null != s && _.length > a ? s : h;
                return (0, n.jsx)("div", {
                    className: i(r, _.length > 0 ? P.containerWithContent : P.container),
                    "aria-label": E.default.Messages.PROFILE_USER_BADGES,
                    role: "group",
                    children: _.map(e => (0, n.jsx)(o.Tooltip, {
                        position: "top",
                        text: e.description,
                        spacing: 12,
                        children: t => (0, n.jsx)(o.Anchor, {
                            ...t,
                            onClick: l => {
                                var r;
                                null === (r = t.onClick) || void 0 === r || r.call(t);
                                let a = null != e.link ? (0, u.default)(e.link) : null;
                                if (null != a) return N.dispatch(m.ComponentActions.POPOUT_CLOSE), a(l)
                            },
                            href: e.link,
                            children: (0, n.jsx)("img", {
                                alt: " ",
                                "aria-hidden": !0,
                                src: e.src,
                                className: i({
                                    [P.profileBadge24]: 0 === O,
                                    [P.profileBadge22]: 1 === O,
                                    [P.profileBadge18]: 2 === O
                                })
                            })
                        })
                    }, e.id))
                })
            }(a = r || (r = {}))[a.SIZE_24 = 0] = "SIZE_24", a[a.SIZE_22 = 1] = "SIZE_22", a[a.SIZE_18 = 2] = "SIZE_18"
        },
        880114: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            });
            var r = l("37983");
            l("884691");
            var a = l("65597"),
                n = l("77078"),
                s = l("535013"),
                i = l("915639"),
                o = l("476263"),
                u = l("153769"),
                d = l("299039"),
                c = l("782340"),
                f = l("334099");

            function T(e) {
                let {
                    userId: t,
                    headingClassName: l,
                    textClassName: T,
                    guild: p,
                    guildMember: m
                } = e, E = (0, a.default)([i.default], () => i.default.locale), P = null != p && null != m;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(n.Heading, {
                        variant: "eyebrow",
                        className: l,
                        children: P ? c.default.Messages.USER_PROFILE_MEMBER_SINCE : c.default.Messages.USER_PROFILE_DISCORD_MEMBER_SINCE
                    }), (0, r.jsxs)("div", {
                        className: f.memberSinceContainer,
                        children: [P && (0, r.jsx)(n.Tooltip, {
                            text: c.default.Messages.DISCORD_NAME,
                            children: e => (0, r.jsx)(u.default, {
                                ...e,
                                className: f.discordIcon
                            })
                        }), (0, r.jsx)(n.Text, {
                            className: T,
                            variant: "text-sm/normal",
                            children: (0, s.getCreatedAtDate)(d.default.extractTimestamp(t), E)
                        }), null != p && null != m && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", {
                                className: f.divider
                            }), (0, r.jsx)(n.Tooltip, {
                                text: p.name,
                                children: e => (0, r.jsx)(o.default, {
                                    ...e,
                                    guild: p,
                                    size: o.default.Sizes.SMOL
                                })
                            }), (0, r.jsx)(n.Text, {
                                className: T,
                                variant: "text-sm/normal",
                                children: (0, s.getCreatedAtDate)(m.joinedAt, E)
                            })]
                        })]
                    })]
                })
            }
        },
        430312: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                UserProfileContext: function() {
                    return T
                },
                default: function() {
                    return m
                }
            }), l("794252");
            var r = l("37983"),
                a = l("884691"),
                n = l("414456"),
                s = l.n(n),
                i = l("506838"),
                o = l("217513"),
                u = l("906889"),
                d = l("590456"),
                c = l("200932"),
                f = l("677055");
            let T = a.createContext({
                profileType: null,
                profileTheme: null
            });

            function p(e) {
                var t, l;
                let {
                    user: n,
                    guildId: p,
                    profileType: m,
                    className: E,
                    pendingThemeColors: P,
                    pendingProfileEffectId: S,
                    useDefaultClientTheme: v,
                    children: h,
                    forceShowPremium: g = !1,
                    showOutOfBoundaryComponents: _ = !1
                } = e, N = a.useRef(null), O = (0, o.default)(n.id, p), {
                    profileTheme: U
                } = (0, u.default)(n, O, {
                    themeElementRef: N,
                    pendingThemeColors: P,
                    isPreview: g,
                    useDefaultClientTheme: v
                }), A = (null == O ? void 0 : O.canEditThemes) || g, C = a.useMemo(() => ({
                    profileType: m,
                    profileTheme: U
                }), [m, U]);
                return (0, r.jsx)("div", {
                    ref: N,
                    className: s((t = m, (0, i.match)(t).with(d.UserProfileTypes.POPOUT, d.UserProfileTypes.SETTINGS, d.UserProfileTypes.CANCEL_MODAL, () => f.userPopoutOuter).with(d.UserProfileTypes.MODAL, () => f.userProfileModalOuter).with(d.UserProfileTypes.PANEL, () => f.userPanelOuter).with(d.UserProfileTypes.CARD, () => f.userCardOuter).exhaustive()), A ? f.userProfileOuterThemed : f.userProfileOuterUnthemed, c.profileColors, _ ? f.showOutOfBoundaryComponents : void 0, "theme-".concat(U), E),
                    children: (0, r.jsx)("div", {
                        className: s((l = m, (0, i.match)(l).with(d.UserProfileTypes.POPOUT, d.UserProfileTypes.SETTINGS, d.UserProfileTypes.CANCEL_MODAL, () => f.userPopoutInner).with(d.UserProfileTypes.MODAL, () => f.userProfileModalInner).with(d.UserProfileTypes.PANEL, () => f.userPanelInner).with(d.UserProfileTypes.CARD, () => f.userCardInner).exhaustive()), function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = arguments.length > 1 ? arguments[1] : void 0,
                                l = arguments.length > 2 ? arguments[2] : void 0;
                            return (0, i.match)({
                                profileType: l,
                                canUsePremiumProfileCustomization: e,
                                hasBanner: t
                            }).with({
                                profileType: d.UserProfileTypes.PANEL
                            }, () => f.userPanelInnerThemed).with({
                                canUsePremiumProfileCustomization: !0,
                                hasBanner: !0
                            }, () => f.userProfileInnerThemedWithBanner).with({
                                canUsePremiumProfileCustomization: !0
                            }, () => f.userProfileInnerThemedPremiumWithoutBanner).otherwise(() => f.userProfileInnerThemedNonPremium)
                        }((null == O ? void 0 : O.canUsePremiumProfileCustomization) || g, null !== S && ((null == O ? void 0 : O.banner) != null || void 0 !== S), m)),
                        children: (0, r.jsx)(T.Provider, {
                            value: C,
                            children: h
                        })
                    })
                })
            }
            p.Inner = function(e) {
                var t;
                let {
                    className: l,
                    children: n
                } = e, {
                    profileType: o
                } = a.useContext(T);
                return (0, r.jsx)("div", {
                    className: s((t = o, (0, i.match)(t).with(d.UserProfileTypes.POPOUT, d.UserProfileTypes.SETTINGS, () => f.userPopoutOverlayBackground).with(d.UserProfileTypes.MODAL, () => f.userProfileModalOverlayBackground).with(d.UserProfileTypes.PANEL, () => f.userPanelOverlayBackground).otherwise(() => f.overlayBackground)), l),
                    children: n
                })
            };
            var m = p
        },
        236100: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var r = l("37983");
            l("884691");
            var a = l("77078"),
                n = l("38766"),
                s = l("49111"),
                i = l("782340"),
                o = l("364547");
            let u = {
                    page: s.AnalyticsPages.GUILD_CHANNEL,
                    section: s.AnalyticsSections.PROFILE_POPOUT,
                    object: s.AnalyticsObjects.EDIT_PER_SERVER_IDENTITY
                },
                d = {
                    page: s.AnalyticsPages.USER_POPOUT,
                    section: s.AnalyticsSections.PROFILE_POPOUT
                };

            function c(e) {
                let {
                    onSelect: t,
                    onClose: l,
                    guild: s
                } = e, c = (0, n.default)({
                    guild: s,
                    analyticsLocation: u
                }), f = (0, n.default)({
                    analyticsLocation: d
                });
                return (0, r.jsxs)(a.Menu, {
                    className: o.popoutMenu,
                    onSelect: t,
                    navId: "edit-profile-popout",
                    onClose: l,
                    "aria-label": i.default.Messages.PROFILE_ACTIONS_MENU_LABEL,
                    children: [(0, r.jsx)(a.MenuItem, {
                        id: "edit-server-profile",
                        label: i.default.Messages.CHANGE_IDENTITY,
                        subtext: i.default.Messages.CHANGE_IDENTITY_SERVER_PROFILE_MENU_HELP,
                        action: () => c()
                    }), (0, r.jsx)(a.MenuItem, {
                        id: "edit-default-profile",
                        label: i.default.Messages.USER_SETTINGS_EDIT_USER_PROFILE,
                        subtext: i.default.Messages.USER_PROFILE_MENU_HELP,
                        action: () => f()
                    })]
                })
            }
        },
        10532: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var r = l("37983");
            l("884691");
            var a = l("414456"),
                n = l.n(a),
                s = l("193853");

            function i(e) {
                let {
                    className: t
                } = e;
                return (0, r.jsx)("div", {
                    className: n(s.divider, t)
                })
            }
        },
        935409: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                UserPopoutBadgeList: function() {
                    return b
                },
                UserPopoutAvatar: function() {
                    return D
                },
                default: function() {
                    return H
                }
            }), l("794252");
            var r = l("37983"),
                a = l("884691"),
                n = l("414456"),
                s = l.n(n),
                i = l("506838"),
                o = l("446674"),
                u = l("669491"),
                d = l("77078"),
                c = l("606292"),
                f = l("980215"),
                T = l("824794"),
                p = l("635471"),
                m = l("305961"),
                E = l("423487"),
                P = l("587974"),
                S = l("599110"),
                v = l("719923"),
                h = l("50885"),
                g = l("713135"),
                _ = l("106435"),
                N = l("289918"),
                O = l("878569"),
                U = l("590006"),
                A = l("430312"),
                C = l("401642"),
                I = l("590456"),
                y = l("49111"),
                M = l("646718"),
                x = l("782340"),
                L = l("524466");
            let R = d.AvatarSizes.SIZE_80,
                j = (0, c.getDecorationSizeForAvatarSize)(R);

            function b(e) {
                let {
                    user: t,
                    guildId: l,
                    isTryItOutFlow: a,
                    forProfileEffectModal: n
                } = e, s = (0, o.useStateFromStores)([g.default], () => g.default.getUserProfile(t.id), [t]), i = (0, o.useStateFromStores)([m.default], () => m.default.getGuild(l), [l]), c = (0, f.useClydeProfilesEnabled)(i);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(null == s ? void 0 : s.profileFetchFailed) && (!t.isClyde() || c) && (0, r.jsx)(d.Tooltip, {
                        text: x.default.Messages.USER_PROFILE_LOAD_ERROR,
                        spacing: 16,
                        children: e => (0, r.jsx)(E.default, {
                            ...e,
                            className: L.warningCircleIcon,
                            color: u.default.unsafe_rawColors.YELLOW_300.css
                        })
                    }), (0, r.jsx)(U.default, {
                        className: n ? L.profileBadgesCompactNoTouch : L.profileBadges,
                        user: t,
                        guildId: l,
                        isTryItOutFlow: a,
                        size: U.BadgeSizes.SIZE_22
                    })]
                })
            }
            let B = h.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar;

            function D(e) {
                let {
                    user: t,
                    displayProfile: l,
                    avatarSrc: n,
                    hasBanner: o,
                    status: u,
                    isMobile: c,
                    guildId: f,
                    channelId: p,
                    onClose: m,
                    disableUserProfileLink: E,
                    profileType: h,
                    animateOnHover: g,
                    hasProfileEffect: N
                } = e, {
                    profileTheme: U
                } = a.useContext(A.UserProfileContext), b = a.useContext(S.AnalyticsContext), D = t.isNonUserBot() && !t.isClyde(), H = v.default.isPremiumAtLeast(null == l ? void 0 : l.premiumType, M.PremiumTypes.TIER_2), w = a.useMemo(() => (0, T.shouldDisableUserPresenceInChannel)(t, p), [t, p]), G = E || t.isClyde(), {
                    avatarDecorationSrc: F,
                    avatarSrc: k,
                    eventHandlers: W
                } = (0, _.default)({
                    user: t,
                    guildId: f,
                    size: R,
                    animateOnHover: g
                }), z = (0, r.jsx)("div", {
                    className: L.avatarHoverTarget,
                    ...W,
                    children: (0, r.jsx)(B, {
                        src: null != n ? n : k,
                        avatarDecoration: F,
                        size: R,
                        "aria-label": t.username,
                        status: w ? y.StatusTypes.UNKNOWN : u,
                        statusBackdropColor: null != U && H && !w ? (0, d.getStatusBackdropColor)(U) : void 0,
                        isMobile: c,
                        statusTooltip: !0
                    })
                }), Y = (0, i.match)(h).with(I.UserProfileTypes.POPOUT, () => {
                    let e = (0, O.buildGetPremiumUserBannerStyles)({
                        premiumUserWithBanner: L.avatarPositionPremiumBanner,
                        premiumUserWithoutBanner: L.avatarPositionPremiumNoBanner,
                        default: L.avatarPositionNormal
                    });
                    return e({
                        isPremium: H && !D,
                        hasBanner: o,
                        hasProfileEffect: N
                    })
                }).with(I.UserProfileTypes.POMELO_POPOUT, () => L.avatarPositionPomelo).with(I.UserProfileTypes.PANEL, () => L.avatarPositionPanel).exhaustive();
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)(d.Clickable, {
                        className: s({
                            [L.clickable]: !G,
                            [L.avatarWrapperNonUserBot]: D,
                            [L.avatarWrapperNormal]: !D
                        }, Y),
                        onClick: D || G ? void 0 : function() {
                            (0, C.openUserProfileModal)({
                                userId: t.id,
                                guildId: null != f ? f : void 0,
                                channelId: null != p ? p : void 0,
                                analyticsLocation: b.location
                            }), null == m || m()
                        },
                        children: [z, !G && function() {
                            let e = null != F,
                                t = e ? j : (0, d.getAvatarSize)(R);
                            return (0, r.jsx)(P.default, {
                                mask: null == u || u === y.StatusTypes.UNKNOWN || w ? P.default.Masks.AVATAR_DEFAULT : (0, i.match)([e, c]).with([!0, !0], () => P.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => P.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => P.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => P.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
                                className: e ? L.avatarDecorationHint : L.avatarHint,
                                style: e ? {
                                    borderRadius: .4 * t
                                } : void 0,
                                width: t,
                                height: t,
                                children: (0, r.jsx)("div", {
                                    className: L.avatarHintInner,
                                    children: x.default.Messages.VIEW_PROFILE
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
                    guildId: a,
                    channelId: n,
                    onClose: s,
                    isMobile: i,
                    isStreaming: o,
                    status: u,
                    disableUserProfileLink: d,
                    isHovering: c,
                    showPremiumBadgeUpsell: f = !0,
                    upsell: T
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [T, (0, r.jsx)(N.default, {
                        user: t,
                        displayProfile: l,
                        onClose: s,
                        guildId: a,
                        profileType: I.UserProfileTypes.POPOUT,
                        showPremiumBadgeUpsell: f,
                        isHovering: c,
                        hasProfileEffect: (null == l ? void 0 : l.profileEffectId) != null
                    }), (null == l ? void 0 : l.profileEffectId) != null && (0, r.jsx)(p.default, {
                        profileEffectId: null == l ? void 0 : l.profileEffectId,
                        bannerAdjustment: 0,
                        isHovering: c
                    }), (0, r.jsx)(D, {
                        user: t,
                        displayProfile: l,
                        status: o ? y.StatusTypes.STREAMING : u,
                        isMobile: i,
                        guildId: a,
                        channelId: n,
                        onClose: s,
                        disableUserProfileLink: d,
                        hasBanner: (null == l ? void 0 : l.banner) != null,
                        hasProfileEffect: (null == l ? void 0 : l.profileEffectId) != null,
                        profileType: I.UserProfileTypes.POPOUT
                    }), (0, r.jsx)(b, {
                        user: t,
                        guildId: a
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
            var r = l("37983");
            l("884691");
            var a = l("77078"),
                n = l("224038");

            function s(e) {
                let {
                    user: t,
                    nickname: l
                } = e, s = null != l;
                return (0, r.jsx)(a.Avatar, {
                    src: t.getAvatarURL(void 0, s ? 16 : 24),
                    size: s ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                    className: s ? n.miniAvatar : n.largeAvatar,
                    "aria-hidden": !0
                })
            }
        },
        777003: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var r = l("37983");
            l("884691");
            var a = l("414456"),
                n = l.n(a),
                s = l("383957");

            function i(e) {
                let {
                    children: t,
                    lastSection: l = !1,
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)("div", {
                    className: n(s.section, a, {
                        [s.lastSection]: l
                    }),
                    ...i,
                    children: t
                })
            }
        },
        369869: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            });
            var r = l("37983");
            l("884691");
            var a = l("414456"),
                n = l.n(a),
                s = l("446674"),
                i = l("77078"),
                o = l("997289"),
                u = l("697218"),
                d = l("476263"),
                c = l("216422"),
                f = l("719923"),
                T = l("485422"),
                p = l("777003"),
                m = l("49111"),
                E = l("782340"),
                P = l("125234"),
                S = l("814076");

            function v(e) {
                let {
                    guildName: t
                } = e;
                return (0, r.jsxs)("div", {
                    className: P.guildMemberProfileTooltip,
                    children: [(0, r.jsx)(c.default, {
                        className: P.guildMemberProfileTooltipNitroWheel
                    }), E.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                        guildName: t
                    })]
                })
            }

            function h(e) {
                let {
                    guild: t,
                    bio: a,
                    hidePersonalInformation: c,
                    isUsingGuildBio: h,
                    lastSection: g = !1,
                    animateOnHover: _ = !1,
                    isHovering: N = !1,
                    lineClamp: O
                } = e, {
                    location: U
                } = (0, o.useAnalyticsContext)(), A = (0, s.useStateFromStores)([u.default], () => u.default.getCurrentUser()), C = f.default.canUsePremiumGuildMemberProfile(A);
                return c || null == a || "" === a ? null : (0, r.jsxs)(p.default, {
                    lastSection: g,
                    children: [(0, r.jsxs)(i.Heading, {
                        variant: "eyebrow",
                        className: S.title,
                        children: [E.default.Messages.USER_POPOUT_ABOUT_ME, null != t && h && (0, r.jsx)(i.Tooltip, {
                            color: i.Tooltip.Colors.CUSTOM,
                            tooltipClassName: P.aboutMeGuildIconTooltip,
                            "aria-label": E.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                                guildName: t.name
                            }),
                            text: (0, r.jsx)(v, {
                                guildName: t.name
                            }),
                            children: e => (0, r.jsx)(d.default, {
                                ...e,
                                onClick: () => {
                                    var t;
                                    null == (t = e.onClick) || t(), null != A && !C && (0, i.openModalLazy)(async () => {
                                        let {
                                            default: e
                                        } = await l.el("414242").then(l.bind(l, "414242"));
                                        return t => (0, r.jsx)(e, {
                                            ...t,
                                            source: {
                                                ...U,
                                                object: m.AnalyticsObjects.GUILD_ICON
                                            }
                                        })
                                    })
                                },
                                guild: t,
                                size: d.default.Sizes.SMOL,
                                className: n(P.aboutMeGuildIcon, {
                                    [P.nonPremiumHoverState]: !C
                                })
                            })
                        })]
                    }), (0, r.jsx)(T.default, {
                        userBio: a,
                        animateOnHover: _,
                        isHovering: N,
                        lineClamp: O
                    })]
                })
            }
        },
        802279: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var r = l("37983");
            l("884691");
            var a = l("775377"),
                n = l("777003"),
                s = l("184256");

            function i(e) {
                let {
                    customStatusActivity: t,
                    className: l,
                    animate: i
                } = e;
                return null == t ? null : (0, r.jsx)(n.default, {
                    className: l,
                    children: (0, r.jsx)(a.default, {
                        activity: t,
                        className: s.customStatus,
                        animate: i,
                        emojiClassName: s.customStatusEmoji,
                        soloEmojiClassName: s.customStatusSoloEmoji,
                        textClassName: s.customStatusText
                    })
                })
            }
        },
        465215: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var r = l("37983");
            l("884691");
            var a = l("880114"),
                n = l("777003"),
                s = l("814076");

            function i(e) {
                let {
                    userId: t,
                    guild: l,
                    guildMember: i
                } = e;
                return (0, r.jsx)(n.default, {
                    children: (0, r.jsx)(a.default, {
                        userId: t,
                        guild: l,
                        guildMember: i,
                        headingClassName: s.title,
                        textClassName: s.body
                    })
                })
            }
        },
        491250: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            });
            var r = l("37983");
            l("884691");
            var a = l("414456"),
                n = l.n(a),
                s = l("77078"),
                i = l("145079"),
                o = l("618927"),
                u = l("158998"),
                d = l("777003"),
                c = l("782340"),
                f = l("119111");

            function T(e) {
                let {
                    user: t,
                    shouldCopyOnClick: l,
                    nickname: a,
                    pronouns: T,
                    usernameIcon: p,
                    identityCTA: m,
                    className: E,
                    isTryItOut: P = !1,
                    lastSection: S
                } = e;
                return (0, r.jsx)(d.default, {
                    className: n(f.container, E),
                    lastSection: S,
                    children: (0, r.jsxs)("div", {
                        className: l ? f.copiableNameTag : void 0,
                        children: [(0, r.jsx)(o.CopiableField, {
                            className: f.copiableField,
                            copyMetaData: "User Tag",
                            copyTooltip: c.default.Messages.ACCOUNT_CLICK_TO_COPY,
                            copyValue: u.default.getUserTag(t, {
                                decoration: "never",
                                identifiable: "always"
                            }),
                            showCopyIcon: !0,
                            disableCopy: !l,
                            children: (0, r.jsxs)("div", {
                                className: f.userText,
                                children: [null != a ? (0, r.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: f.nickname,
                                    children: a
                                }) : null, (0, r.jsx)(i.default, {
                                    usernameIcon: p,
                                    user: t,
                                    forceUsername: !0,
                                    forcePomelo: P,
                                    className: null == a ? f.userTagNoNickname : f.userTagWithNickname,
                                    usernameClass: null == a ? f.userTagUsernameNoNickname : f.userTagUsernameBase,
                                    discriminatorClass: null == a ? f.userTagDiscriminatorNoNickname : f.discrimBase,
                                    botClass: null == a ? f.headerBotTag : f.headerBotTagWithNickname
                                }), m]
                            })
                        }), null != T && "" !== T && (0, r.jsx)(s.Tooltip, {
                            text: c.default.Messages.USER_PROFILE_PRONOUNS,
                            children: e => (0, r.jsx)(s.Text, {
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
        906889: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            }), l("222007");
            var r = l("884691"),
                a = l("509043"),
                n = l("446674"),
                s = l("841098"),
                i = l("206230"),
                o = l("388491"),
                u = l("528438");
            let d = ["--profile-gradient-primary-color", "--profile-gradient-secondary-color", "--profile-gradient-button-color", "--profile-gradient-overlay-color", "--profile-body-background-color", "--profile-body-divider-color", "--profile-avatar-border-color", "--profile-message-input-border-color", "--profile-note-background-color", "--profile-body-background-hover", "--account-profile-modal-list-item-hover", "--profile-role-pill-background-color", "--profile-role-pill-border-color"];

            function c(e, t, l) {
                var r;
                null == e || null === (r = e.current) || void 0 === r || r.style.setProperty(t, null != l ? l : null)
            }

            function f(e, t) {
                let {
                    themeElementRef: l,
                    pendingThemeColors: f,
                    isPreview: T,
                    useDefaultClientTheme: p
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, [m, E] = (0, u.default)(e, t, {
                    pendingThemeColors: f,
                    isPreview: T
                }), [P, S, v] = (0, n.useStateFromStoresArray)([i.default], () => [i.default.desaturateUserColors, i.default.saturation, i.default.syncProfileThemeWithUserTheme]), h = (0, s.default)(), g = r.useCallback(() => v || p ? h : (0, o.getProfileTheme)(m), [p, v, h, m]), [_, N] = r.useState(g()), O = (0, o.useProfileThemeValues)(_), U = (0, o.useDividerColor)(_, m), A = (0, o.useMessageInputBorderColor)(_, E), C = r.useCallback((e, t) => (0, a.int2hsl)(e, P, null, t), [P]);
                r.useEffect(() => {
                    N(g())
                }, [m, v, h, p, g]);
                let I = (0, o.useAvatarBorderColor)(_, m, v),
                    y = null != I ? (0, a.int2hsl)(I, !1, P ? S : null) : null,
                    M = e => d.forEach(t => {
                        e.style.removeProperty(t)
                    });
                return r.useEffect(() => {
                    if (null != m && null != E && null != _ && null != I && null != U && null != A) {
                        let e = v && _ !== h ? null == O ? void 0 : O.overlaySyncedWithUserTheme : null == O ? void 0 : O.overlay;
                        c(l, "--profile-gradient-primary-color", C(m)), c(l, "--profile-gradient-secondary-color", C(E)), c(l, "--profile-gradient-button-color", C((0, o.calculateButtonColor)(m))), c(l, "--profile-gradient-overlay-color", e), c(l, "--profile-body-background-color", null == O ? void 0 : O.sectionBox), c(l, "--profile-body-background-hover", null == O ? void 0 : O.profileBodyBackgroundHover), c(l, "--profile-body-divider-color", C(U, null == O ? void 0 : O.dividerOpacity)), c(l, "--profile-avatar-border-color", C(I)), c(l, "--profile-message-input-border-color", C(A)), c(l, "--profile-note-background-color", null == O ? void 0 : O.noteBackgroundColor), c(l, "--profile-role-pill-background-color", null == O ? void 0 : O.rolePillBackgroundColor), c(l, "--profile-role-pill-border-color", null == O ? void 0 : O.rolePillBorderColor)
                    } else(null == l ? void 0 : l.current) != null && M(null == l ? void 0 : l.current)
                }, [m, E, I, _, h, l, C, v, U, null == O ? void 0 : O.overlaySyncedWithUserTheme, null == O ? void 0 : O.overlay, null == O ? void 0 : O.sectionBox, null == O ? void 0 : O.profileBodyBackgroundHover, null == O ? void 0 : O.dividerOpacity, null == O ? void 0 : O.noteBackgroundColor, null == O ? void 0 : O.rolePillBackgroundColor, null == O ? void 0 : O.rolePillBorderColor, A]), {
                    profileTheme: null != _ ? _ : h,
                    primaryProfileColor: m,
                    avatarBorderColor: y
                }
            }
        },
        618927: function(e, t, l) {
            "use strict";
            let r, a;
            l.r(t), l.d(t, {
                CopiableField: function() {
                    return P
                }
            }), l("222007");
            var n = l("37983"),
                s = l("884691"),
                i = l("414456"),
                o = l.n(i),
                u = l("862337"),
                d = l("77078"),
                c = l("599110"),
                f = l("306160"),
                T = l("413709"),
                p = l("49111"),
                m = l("782340"),
                E = l("72797");

            function P(e) {
                var t;
                let {
                    className: l,
                    copyValue: i,
                    copyMetaData: P,
                    copyTooltip: S,
                    children: v,
                    disableCopy: h,
                    showCopyIcon: g
                } = e, [_, N] = s.useState(0), [O, U] = s.useState(!1), [A, C] = s.useState(!1);
                if (s.useEffect(() => (r = new u.Timeout, a = new u.Timeout, function() {
                        r.stop(), a.stop()
                    }), []), !f.SUPPORTS_COPY || h) return (0, n.jsx)(n.Fragment, {
                    children: v
                });
                let I = [m.default.Messages.COPY_SUCCESS_1, m.default.Messages.COPY_SUCCESS_2, m.default.Messages.COPY_SUCCESS_3, m.default.Messages.COPY_SUCCESS_4, m.default.Messages.COPY_SUCCESS_5, m.default.Messages.COPY_SUCCESS_6, m.default.Messages.COPY_SUCCESS_7, m.default.Messages.COPY_SUCCESS_8, m.default.Messages.COPY_SUCCESS_9, m.default.Messages.COPY_SUCCESS_10, m.default.Messages.COPY_SUCCESS_11],
                    y = Math.min(Math.max(_ - 1, 0), I.length - 1),
                    M = null !== (t = I[y]) && void 0 !== t ? t : I[0],
                    x = _ >= I.length - 1,
                    L = x ? d.TooltipColors.RED : d.TooltipColors.GREEN,
                    R = O ? L : d.TooltipColors.PRIMARY,
                    j = () => {
                        r.stop(), C(!1)
                    },
                    b = e => {
                        (0, f.copy)(i), c.default.track(p.AnalyticEvents.TEXT_COPIED, {
                            type: P
                        }), "function" == typeof e && e(), !A && N(_ + 1), C(!0), U(!0), r.start(1e3, () => C(!1)), a.start(2e3, () => N(0))
                    };
                return (0, n.jsx)(d.Tooltip, {
                    delay: 500,
                    color: R,
                    forceOpen: A,
                    text: O ? (0, n.jsx)(d.Shaker, {
                        isShaking: x,
                        children: M
                    }) : S,
                    onAnimationRest: (e, t) => {
                        !A && O && t.phase === p.SpringTransitionPhases.LEAVE && U(!1)
                    },
                    "aria-label": S,
                    children: e => {
                        let {
                            onClick: t,
                            onMouseEnter: r,
                            ...a
                        } = e;
                        return (0, n.jsx)(d.Clickable, {
                            ...a,
                            className: E.clickTarget,
                            onMouseEnter: () => {
                                O ? j() : "function" == typeof r && r()
                            },
                            onClick: () => {
                                b(t)
                            },
                            children: (0, n.jsxs)("div", {
                                className: o(l, E.copiableWrapper),
                                children: [(0, n.jsx)("div", {
                                    className: E.childWrapper,
                                    children: v
                                }), g ? (0, n.jsx)("div", {
                                    className: E.copyIconWrapper,
                                    children: (0, n.jsx)(T.default, {
                                        width: 18,
                                        height: 18,
                                        className: E.copyIcon
                                    })
                                }) : null]
                            })
                        })
                    }
                })
            }
        },
        153769: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var r = l("37983");
            l("884691");
            var a = l("469563"),
                n = l("267527"),
                s = l("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 28,
                        height: l = 20,
                        color: a = "currentColor",
                        foreground: n,
                        ...i
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(i),
                        width: t,
                        height: l,
                        viewBox: "0 0 28 20",
                        children: (0, r.jsx)("path", {
                            className: n,
                            fill: a,
                            d: "M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"
                        })
                    })
                }, n.ClydeIcon, void 0, {
                    size: 28
                })
        },
        137783: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return n
                }
            });
            var r = l("37983");
            l("884691");
            var a = l("75196");

            function n(e) {
                let {
                    width: t = 16,
                    height: l = 16,
                    color: n = "currentColor",
                    foreground: s,
                    ...i
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(i),
                    width: t,
                    height: l,
                    viewBox: "0 0 16 16",
                    children: (0, r.jsx)("path", {
                        className: s,
                        fill: n,
                        d: "M6,7 L2,7 L2,6 L6,6 L6,7 Z M8,5 L2,5 L2,4 L8,4 L8,5 Z M8,3 L2,3 L2,2 L8,2 L8,3 Z M8.88888889,0 L1.11111111,0 C0.494444444,0 0,0.494444444 0,1.11111111 L0,8.88888889 C0,9.50253861 0.497461389,10 1.11111111,10 L8.88888889,10 C9.50253861,10 10,9.50253861 10,8.88888889 L10,1.11111111 C10,0.494444444 9.5,0 8.88888889,0 Z",
                        transform: "translate(3 3)"
                    })
                })
            }
        },
        655665: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                ClydeIcon: function() {
                    return s
                }
            });
            var r = l("37983");
            l("884691");
            var a = l("669491"),
                n = l("82169");
            let s = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, n.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 0 0 .96 17.7a18.43 18.43 0 0 0 5.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83ZM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27Zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27Z",
                        className: i
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=46493.947f25e22cfee913e1c9.js.map