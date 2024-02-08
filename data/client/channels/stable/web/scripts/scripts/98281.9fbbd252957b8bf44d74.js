(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["98281"], {
        305808: function(e, t, s) {
            "use strict";
            s.r(t);
            var r = s("392767");
            s.es(r, t)
        },
        825701: function(e, t, s) {
            "use strict";
            s.r(t);
            var r = s("152893");
            s.es(r, t)
        },
        65969: function(e, t, s) {
            "use strict";
            s.r(t);
            var r = s("224745");
            s.es(r, t)
        },
        614858: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                BadgeCategory: function() {
                    return o
                },
                getBadgeCategory: function() {
                    return a
                }
            });
            var r, o, l = s("883474");

            function a(e) {
                return e.staff ? 5 : e.verified && e.partnered ? 2 : e.verified ? 1 : e.partnered ? 0 : e.community && e.visibility === l.GuildVisibility.PUBLIC ? 4 : e.community ? 3 : 6
            }(r = o || (o = {}))[r.PARTNERED = 0] = "PARTNERED", r[r.VERIFIED = 1] = "VERIFIED", r[r.VERIFIED_AND_PARTNERED = 2] = "VERIFIED_AND_PARTNERED", r[r.COMMUNITY = 3] = "COMMUNITY", r[r.DISCOVERABLE = 4] = "DISCOVERABLE", r[r.STAFF = 5] = "STAFF", r[r.NONE = 6] = "NONE"
        },
        883474: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                GuildVisibility: function() {
                    return r
                },
                getGuildTraits: function() {
                    return n
                }
            }), s("222007");
            var r, o, l = s("813006"),
                a = s("49111");

            function n(e) {
                let t = new Set(e.features),
                    s = t.has(a.GuildFeatures.COMMUNITY) && t.has(a.GuildFeatures.DISCOVERABLE) ? "PUBLIC" : "INVITE_ONLY",
                    r = function(e) {
                        return null != e && (e instanceof l.default ? e.premiumSubscriberCount > 0 || e.premiumTier > a.BoostedGuildTiers.NONE : null != e.premiumSubscriptionCount && e.premiumSubscriptionCount > 0)
                    }(e),
                    o = 0;
                if (r) {
                    var n;
                    o = null !== (n = e instanceof l.default ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== n ? n : 0
                }
                let i = e instanceof l.default ? e.premiumTier : a.BoostedGuildTiers.NONE;
                return {
                    verified: t.has(a.GuildFeatures.VERIFIED),
                    partnered: t.has(a.GuildFeatures.PARTNERED),
                    community: t.has(a.GuildFeatures.COMMUNITY),
                    staff: t.has(a.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
                    visibility: s,
                    premium: r,
                    premiumSubscriberCount: o,
                    premiumTier: i
                }
            }(o = r || (r = {})).PUBLIC = "PUBLIC", o.INVITE_ONLY = "INVITE_ONLY"
        },
        51565: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            }), s("222007");
            var r = s("614858"),
                o = s("883474");
            let l = new Set([r.BadgeCategory.PARTNERED, r.BadgeCategory.VERIFIED, r.BadgeCategory.VERIFIED_AND_PARTNERED, r.BadgeCategory.COMMUNITY, r.BadgeCategory.DISCOVERABLE]);

            function a(e) {
                if (null == e) return !1;
                let t = (0, o.getGuildTraits)(e),
                    s = (0, r.getBadgeCategory)(t);
                return l.has(s)
            }
        },
        944305: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                customRoleIconUpsellPerks: function() {
                    return w
                },
                guildBannerUpsellPerks: function() {
                    return S
                },
                animatedGuildBannerUpsellPerks: function() {
                    return B
                },
                vanityUrlUpsellPerks: function() {
                    return O
                },
                guildInviteUpsellPerks: function() {
                    return G
                },
                guildBoostingPerks: function() {
                    return A
                },
                premiumProgressBarUpsellPerks: function() {
                    return j
                }
            });
            var r = s("669491"),
                o = s("245307"),
                l = s("571658"),
                a = s("118503"),
                n = s("110006"),
                i = s("682344"),
                u = s("238521"),
                d = s("394832"),
                c = s("290581"),
                f = s("595086"),
                _ = s("885541"),
                E = s("49111");
            s("646718");
            var I = s("782340");
            let C = () => ({
                    color: r.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: u.default,
                    description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_CUSTOM_INVITE
                }),
                R = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.default.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
                    return {
                        color: e,
                        icon: n.default,
                        description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_ICON
                    }
                },
                M = () => ({
                    color: r.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: u.default,
                    description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_GUILD_BANNER
                }),
                g = () => ({
                    color: r.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: n.default,
                    description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_GUILD_BANNER
                }),
                L = () => ({
                    color: r.default.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
                    icon: i.default,
                    description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ROLE_ICON
                }),
                h = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
                    return {
                        color: e,
                        icon: f.default,
                        description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS
                    }
                },
                p = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
                        s = 0,
                        o = 0;
                    switch (e) {
                        case E.BoostedGuildTiers.TIER_1:
                            s = 15, o = 100;
                            break;
                        case E.BoostedGuildTiers.TIER_2:
                            s = 30, o = 150;
                            break;
                        case E.BoostedGuildTiers.TIER_3:
                            s = 60, o = 250
                    }
                    return {
                        color: t,
                        icon: f.default,
                        description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS_AND_EMOJIS.format({
                            numStickers: s,
                            numEmojis: o
                        })
                    }
                },
                P = () => ({
                    color: r.default.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
                    icon: c.default,
                    description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_VANITY_URL
                }),
                U = () => ({
                    icon: o.default,
                    description: I.default.Messages.PREMIUM_GUILD_USER_FEATURE_PROFILE_BADGE
                }),
                T = () => ({
                    icon: a.default,
                    color: r.default.unsafe_rawColors.PREMIUM_PERK_PINK.css,
                    description: I.default.Messages.PREMIUM_GUILD_USER_FEATURE_BOOST_CRYSTAL
                }),
                N = () => ({
                    icon: i.default,
                    color: r.default.unsafe_rawColors.PREMIUM_PERK_YELLOW.css,
                    description: I.default.Messages.PREMIUM_GUILD_USER_FEATURE_SPECIAL_ROLE
                }),
                v = () => ({
                    color: r.default.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
                    icon: l.default,
                    description: I.default.Messages.PREMIUM_GUILD_USER_FEATURE_OTHERS
                }),
                D = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_OTHER;
                    return {
                        color: r.default.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
                        icon: l.default,
                        description: e
                    }
                },
                x = () => ({
                    color: r.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
                    icon: _.default,
                    description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_FILE_UPLOAD_TIER_3
                }),
                m = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
                    return {
                        color: e,
                        icon: d.default,
                        description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_SCREEN_SHARE_1080P
                    }
                };

            function w() {
                return [L(), M(), h(), D()]
            }

            function S() {
                return [L(), p(E.BoostedGuildTiers.TIER_2), m(), D()]
            }

            function B() {
                return [p(E.BoostedGuildTiers.TIER_3, r.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css), x(), P(), D()]
            }

            function O() {
                return [P(), g(), p(E.BoostedGuildTiers.TIER_3), D()]
            }

            function G() {
                return [C(), h(), R(), D()]
            }

            function A() {
                return [h(), D()]
            }

            function j() {
                return [T(), N(), U(), v()]
            }
        },
        379532: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var r = s("37983");
            s("884691");
            var o = s("77078"),
                l = s("292687"),
                a = s("974889"),
                n = s("599110"),
                i = s("49111");

            function u(e, t) {
                let u = null != t ? t : "".concat(i.AnalyticsSections.PREMIUM_GUILD_UPSELL_MODAL);
                null != e.targetBoostedGuildTier && (u += " - Tier ".concat(e.targetBoostedGuildTier));
                n.default.track(i.AnalyticEvents.OPEN_MODAL, {
                    type: u,
                    location: e.analyticsSourceLocation
                });
                let {
                    openInPopoutEnabled: d,
                    ...c
                } = e, f = l.default.getWindowOpen(i.PopoutWindowKeys.CHANNEL_CALL_POPOUT) && null != d && d;
                f && (0, a.default)(i.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let _ = f ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT;
                (0, o.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await s.el("874642").then(s.bind(s, "874642"));
                    return t => (0, r.jsx)(e, {
                        ...c,
                        ...t
                    })
                }, {
                    onCloseCallback: () => {
                        n.default.track(i.AnalyticEvents.MODAL_DISMISSED, {
                            type: u,
                            location: e.analyticsSourceLocation
                        })
                    },
                    contextKey: _
                })
            }
        },
        791106: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                Gradients: function() {
                    return n
                },
                GradientCssUrls: function() {
                    return i
                },
                default: function() {
                    return I
                }
            });
            var r = s("37983"),
                o = s("884691"),
                l = s("748820"),
                a = s("669491");
            let n = Object.freeze({
                    PREMIUM_TIER_0: (0, l.v4)(),
                    PREMIUM_TIER_1: (0, l.v4)(),
                    PREMIUM_TIER_2: (0, l.v4)(),
                    PREMIUM_GUILD: (0, l.v4)(),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, l.v4)()
                }),
                i = {
                    PREMIUM_TIER_0: "url(#".concat(n.PREMIUM_TIER_0, ")"),
                    PREMIUM_TIER_1: "url(#".concat(n.PREMIUM_TIER_1, ")"),
                    PREMIUM_TIER_2: "url(#".concat(n.PREMIUM_TIER_2, ")"),
                    PREMIUM_GUILD: "url(#".concat(n.PREMIUM_GUILD, ")"),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(n.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
                },
                u = () => (0, r.jsxs)("linearGradient", {
                    id: n.PREMIUM_TIER_0,
                    children: [(0, r.jsx)("stop", {
                        offset: ".1762",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                    }), (0, r.jsx)("stop", {
                        offset: "0.5351",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                    })]
                }),
                d = () => (0, r.jsxs)("linearGradient", {
                    id: n.PREMIUM_TIER_1,
                    children: [(0, r.jsx)("stop", {
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                    })]
                }),
                c = () => (0, r.jsxs)("linearGradient", {
                    id: n.PREMIUM_TIER_2,
                    children: [(0, r.jsx)("stop", {
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                    }), (0, r.jsx)("stop", {
                        offset: "0.502368",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                    })]
                }),
                f = () => (0, r.jsxs)("linearGradient", {
                    id: n.PREMIUM_GUILD,
                    children: [(0, r.jsx)("stop", {
                        stopColor: a.default.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: a.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                    })]
                }),
                _ = () => (0, r.jsxs)("linearGradient", {
                    id: n.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    gradientTransform: "rotate(45)",
                    children: [(0, r.jsx)("stop", {
                        offset: "0",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                E = o.memo(function() {
                    return (0, r.jsxs)("svg", {
                        viewBox: "0 0 1 1",
                        style: {
                            position: "absolute",
                            pointerEvents: "none",
                            top: -1,
                            left: -1,
                            width: 1,
                            height: 1
                        },
                        "aria-hidden": !0,
                        children: [u(), d(), c(), f(), _()]
                    })
                }, () => !0);
            var I = E
        },
        40469: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return w
                }
            });
            var r = s("37983");
            s("884691");
            var o = s("414456"),
                l = s.n(o),
                a = s("446674"),
                n = s("669491"),
                i = s("819855"),
                u = s("77078"),
                d = s("614858"),
                c = s("883474"),
                f = s("95039"),
                _ = s("161778"),
                E = s("26989"),
                I = s("697218"),
                C = s("427459"),
                R = s("931138"),
                M = s("791106"),
                g = s("888978"),
                L = s("419441"),
                h = s("583698"),
                p = s("992639"),
                P = s("390864"),
                U = s("486952"),
                T = s("49111"),
                N = s("782340"),
                v = s("279801");
            let D = {
                [d.BadgeCategory.STAFF]: {
                    IconComponent: P.default,
                    foregroundDarkColor: n.default.unsafe_rawColors.WHITE_400.css,
                    foregroundLightColor: n.default.unsafe_rawColors.WHITE_400.css,
                    backgroundDarkColor: n.default.unsafe_rawColors.GREEN_360.css,
                    backgroundLightColor: n.default.unsafe_rawColors.GREEN_360.css
                },
                [d.BadgeCategory.VERIFIED_AND_PARTNERED]: {
                    IconComponent: U.default,
                    foregroundDarkColor: n.default.unsafe_rawColors.WHITE_400.css,
                    foregroundLightColor: n.default.unsafe_rawColors.WHITE_400.css,
                    backgroundDarkColor: n.default.unsafe_rawColors.GREEN_360.css,
                    backgroundLightColor: n.default.unsafe_rawColors.GREEN_360.css
                },
                [d.BadgeCategory.VERIFIED]: {
                    IconComponent: U.default,
                    foregroundDarkColor: n.default.unsafe_rawColors.WHITE_400.css,
                    foregroundLightColor: n.default.unsafe_rawColors.WHITE_400.css,
                    backgroundDarkColor: n.default.unsafe_rawColors.GREEN_360.css,
                    backgroundLightColor: n.default.unsafe_rawColors.GREEN_360.css
                },
                [d.BadgeCategory.PARTNERED]: {
                    IconComponent: g.default,
                    foregroundDarkColor: n.default.unsafe_rawColors.WHITE_400.css,
                    foregroundLightColor: n.default.unsafe_rawColors.WHITE_400.css,
                    backgroundDarkColor: n.default.unsafe_rawColors.BRAND_500.css,
                    backgroundLightColor: n.default.unsafe_rawColors.BRAND_500.css
                },
                [d.BadgeCategory.COMMUNITY]: {
                    IconComponent: L.default,
                    foregroundDarkColor: n.default.unsafe_rawColors.PRIMARY_500.css,
                    foregroundLightColor: n.default.unsafe_rawColors.WHITE_400.css,
                    backgroundDarkColor: n.default.unsafe_rawColors.WHITE_400.css,
                    backgroundLightColor: n.default.unsafe_rawColors.PRIMARY_500.css,
                    premiumBackgroundColor: M.GradientCssUrls.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    premiumForegroundColor: n.default.unsafe_rawColors.WHITE_400.css
                },
                [d.BadgeCategory.DISCOVERABLE]: {
                    IconComponent: h.default,
                    foregroundDarkColor: n.default.unsafe_rawColors.PRIMARY_500.css,
                    foregroundLightColor: n.default.unsafe_rawColors.WHITE_400.css,
                    backgroundDarkColor: n.default.unsafe_rawColors.WHITE_400.css,
                    backgroundLightColor: n.default.unsafe_rawColors.PRIMARY_500.css,
                    premiumBackgroundColor: M.GradientCssUrls.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    premiumForegroundColor: n.default.unsafe_rawColors.WHITE_400.css
                },
                [d.BadgeCategory.NONE]: {}
            };

            function x(e) {
                let {
                    guildTraits: t
                } = e;
                return (0, r.jsxs)("div", {
                    className: v.tooltipPremiumFooterContainer,
                    children: [(0, r.jsxs)("div", {
                        className: l(v.tooltipPremiumFooterSegment, v.tooltipPremiumFooterTierSegment),
                        children: [(0, r.jsx)(p.default, {
                            width: 18,
                            height: 18,
                            className: v.gemIcon
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: C.getTierName(t.premiumTier)
                        })]
                    }), (0, r.jsx)("div", {
                        className: l(v.tooltipPremiumFooterSegment),
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: N.default.Messages.SERVER_BADGE_PREMIUM_FOOTER_BOOST_COUNT.format({
                                count: t.premiumSubscriberCount
                            })
                        })
                    })]
                })
            }

            function m(e) {
                let {
                    badgeType: t,
                    guildTraits: s
                } = e, {
                    tooltipTitle: o,
                    tooltipSubtitle: l,
                    tooltipDescription: a
                } = function(e, t) {
                    let s = t === c.GuildVisibility.PUBLIC ? N.default.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN : N.default.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY;
                    switch (e) {
                        case d.BadgeCategory.STAFF:
                            return {
                                tooltipTitle: N.default.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipSubtitle: N.default.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipDescription: N.default.Messages.INTERNAL_EMPLOYEE_ONLY
                            };
                        case d.BadgeCategory.VERIFIED:
                            return {
                                tooltipTitle: N.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: N.default.Messages.GUILD_VERIFIED, tooltipDescription: s
                            };
                        case d.BadgeCategory.PARTNERED:
                            return {
                                tooltipTitle: N.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: N.default.Messages.GUILD_PARTNERED, tooltipDescription: s
                            };
                        case d.BadgeCategory.VERIFIED_AND_PARTNERED:
                            return {
                                tooltipTitle: N.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: N.default.Messages.GUILD_VERIFIED_AND_PARTNERED, tooltipDescription: s
                            };
                        case d.BadgeCategory.COMMUNITY:
                            return {
                                tooltipTitle: N.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: N.default.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY
                            };
                        case d.BadgeCategory.DISCOVERABLE:
                            return {
                                tooltipTitle: N.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: N.default.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN
                            };
                        default:
                            return {
                                tooltipTitle: N.default.Messages.SERVER_BADGE_TITLE_UNKNOWN
                            }
                    }
                }(t, s.visibility);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: v.tooltipBodyContainer,
                        children: [(0, r.jsx)(u.Text, {
                            color: "interactive-active",
                            variant: "text-xs/bold",
                            children: o
                        }), null != l ? (0, r.jsx)(u.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: l
                        }) : null, null != a ? (0, r.jsx)(u.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: a
                        }) : null]
                    }), s.premium ? (0, r.jsx)(x, {
                        guildTraits: s
                    }) : null]
                })
            }

            function w(e) {
                let t, s, {
                        guild: o,
                        tooltipColor: l = u.Tooltip.Colors.BRAND,
                        tooltipPosition: n,
                        className: C,
                        flowerStarClassName: M,
                        iconClassName: g,
                        badgeStrokeColor: L,
                        badgeColor: h,
                        size: p = 16,
                        disableBoostClick: P,
                        "aria-label": U = !1
                    } = e,
                    N = (0, a.useStateFromStores)([I.default, E.default], () => {
                        let e = I.default.getCurrentUser();
                        return E.default.isMember(null == o ? void 0 : o.id, null == e ? void 0 : e.id)
                    }),
                    x = (0, a.useStateFromStores)([_.default], () => _.default.theme),
                    w = (0, c.getGuildTraits)(o),
                    S = (0, d.getBadgeCategory)(w);
                if (S === d.BadgeCategory.NONE) return null;
                let B = D[S],
                    {
                        IconComponent: O,
                        backgroundDarkColor: G,
                        backgroundLightColor: A,
                        foregroundDarkColor: j,
                        foregroundLightColor: V,
                        premiumBackgroundColor: y,
                        premiumForegroundColor: H
                    } = B;
                if (null == O) return null;
                w.premium && (t = H, s = y);
                let k = (0, i.isThemeDark)(x) ? j : V,
                    F = (0, i.isThemeDark)(x) ? G : A;
                t = null != t ? t : k, s = null != s ? s : F;
                let b = e => {
                    w.premium && N && !P && (e.stopPropagation(), e.preventDefault(), (0, f.openGuildBoostingMarketingModal)({
                        guildId: o.id,
                        location: {
                            section: T.AnalyticsSections.GUILD_HEADER,
                            object: T.AnalyticsObjects.BOOST_GEM_ICON
                        }
                    }))
                };
                return (0, r.jsx)(u.Tooltip, {
                    color: l,
                    position: n,
                    "aria-label": U,
                    text: (0, r.jsx)(m, {
                        badgeType: S,
                        guildTraits: w
                    }),
                    tooltipContentClassName: v.tooltipRemovePadding,
                    children: e => (0, r.jsx)(u.Clickable, {
                        onClick: b,
                        children: (0, r.jsx)(R.default, {
                            ...e,
                            className: C,
                            flowerStarClassName: M,
                            color: null != s ? s : h,
                            stroke: L,
                            size: p,
                            children: (0, r.jsx)(O, {
                                className: g,
                                color: t
                            })
                        })
                    })
                })
            }
        },
        245307: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var r = s("37983");
            s("884691");
            var o = s("75196");

            function l(e) {
                let {
                    width: t = 24,
                    height: s = 24,
                    ...l
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, o.default)(l),
                    height: s,
                    width: t,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        d: "m6.3599 4.33.41.84c.02245.04336.03052.09274.02304.14099s-.03013.09287-.06465.1274c-.03453.03453-.07915.05717-.1274.06465s-.09763-.00059-.14099-.02304l-.84-.41c-.03119-.01506-.06537-.02288-.1-.02288s-.06882.00782-.1.02288l-.84.41c-.04336.02245-.09274.03052-.141.02304-.04825-.00748-.09287-.03012-.12739-.06465-.03453-.03453-.05717-.07915-.06465-.1274s.00058-.09763.02304-.14099l.41-.84c.01505-.03119.02287-.06537.02287-.1s-.00782-.06881-.02287-.1l-.41-.84c-.01585-.04253-.01876-.08879-.00836-.13297.01039-.04417.03362-.08429.06676-.11529s.07471-.05151.11948-.05894c.04477-.00742.09074-.00144.13212.0172l.84.41c.03118.01506.06537.02288.1.02288s.06881-.00782.1-.02288l.84-.41c.04336-.02245.09274-.03052.14099-.02304s.09287.03012.1274.06465c.03452.03453.05717.07914.06465.1274.00748.04825-.00059.09763-.02304.14099l-.41.84c-.01211.02846-.01834.05907-.01834.09s.00623.06154.01834.09z",
                        fill: "#ffd836"
                    }), (0, r.jsx)("path", {
                        d: "m12 2.70001-5.45996 5.46v7.67999l5.45996 5.46 5.46-5.46v-7.67999zm2.73 11.99999-2.73 2.74-2.72996-2.73v-5.41999l2.72996-2.73 2.73 2.73z",
                        fill: "#ff73fa"
                    }), (0, r.jsx)("path", {
                        d: "m12 2.70001v3.86l2.73 2.73 2.73-1.13z",
                        fill: "#ffc0ff"
                    }), (0, r.jsx)("path", {
                        d: "m9.27004 14.71-2.73 1.13 5.45996 5.46v-3.86z",
                        fill: "#e655d4"
                    }), (0, r.jsxs)("g", {
                        fill: "#d4e4ff",
                        children: [(0, r.jsx)("path", {
                            d: "m16.2199 17.7h.01c.243 0 .44-.197.44-.44v-.89c0-.243-.197-.44-.44-.44h-.01c-.243 0-.44.197-.44.44v.89c0 .243.197.44.44.44z"
                        }), (0, r.jsx)("path", {
                            d: "m16.2199 21.25h.01c.243 0 .44-.197.44-.44v-.89c0-.243-.197-.44-.44-.44h-.01c-.243 0-.44.197-.44.44v.89c0 .243.197.44.44.44z"
                        }), (0, r.jsx)("path", {
                            d: "m15.3401 18.59v-.01c0-.243-.197-.44-.44-.44h-.89c-.243 0-.44.197-.44.44v.01c0 .243.197.44.44.44h.89c.243 0 .44-.197.44-.44z"
                        }), (0, r.jsx)("path", {
                            d: "m18.8799 18.59v-.01c0-.243-.197-.44-.44-.44h-.89c-.243 0-.44.197-.44.44v.01c0 .243.197.44.44.44h.89c.243 0 .44-.197.44-.44z"
                        })]
                    }), (0, r.jsx)("path", {
                        d: "m9.27002 9.29v5.42l2.72998 2.73 2.73-2.73v-5.42l-2.73-2.73z",
                        fill: "#ffdef9"
                    }), (0, r.jsx)("path", {
                        d: "m14.72 9.28998v.01l-5.42997 5.43002-.01-.01v-1.47l4.69997-4.71002z",
                        fill: "#fff"
                    }), (0, r.jsx)("path", {
                        d: "m14.7201 11.34v1.5l-3.66 3.66-.75-.75z",
                        fill: "#fff"
                    })]
                })
            }
        },
        571658: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var r = s("37983");
            s("884691");
            var o = s("469563"),
                l = s("906069"),
                a = s("75196"),
                n = (0, o.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: o = "currentColor",
                        foreground: l,
                        ...n
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(n),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: o,
                            className: l,
                            d: "M12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.477 17.522 2 12 2ZM16.293 6.293L17.707 7.706L16.414 9L17.707 10.293L16.293 11.706L13.586 9L16.293 6.293ZM6.293 7.707L7.707 6.294L10.414 9L7.707 11.707L6.293 10.294L7.586 9L6.293 7.707ZM18 14C18 16.617 15.14 19 12 19C8.86 19 6 16.617 6 14V13H18V14Z"
                        })
                    })
                }, l.ReactionIcon, void 0, {
                    size: 24
                })
        },
        682344: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var r = s("37983");
            s("884691");
            var o = s("469563"),
                l = s("305861"),
                a = s("75196"),
                n = (0, o.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: s = 23,
                        color: o = "currentColor",
                        foreground: l,
                        ...n
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(n),
                        width: t,
                        height: s,
                        viewBox: "0 0 20 23",
                        children: (0, r.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, r.jsx)("path", {
                                className: l,
                                fill: o,
                                d: "M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"
                            })
                        })
                    })
                }, l.ShieldUserIcon, void 0, {
                    size: 23
                })
        },
        238521: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var r = s("37983");
            s("884691");
            var o = s("469563"),
                l = s("305808"),
                a = s("75196"),
                n = (0, o.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: o = "currentColor",
                        foreground: l,
                        ...n
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(n),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: o,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M17 6V6.999H7C5.896 6.999 5 7.895 5 8.999V16H3C1.895 16 1 15.104 1 14V6C1 4.896 1.895 4 3 4H15C16.104 4 17 4.896 17 6ZM7 10.999C7 9.89502 7.896 8.99902 9 8.99902H21C22.104 8.99902 23 9.89502 23 10.999V18.999C23 20.103 22.104 20.999 21 20.999H9C7.896 20.999 7 20.103 7 18.999V10.999ZM11.828 14.462L9 18.999H21L17.023 12.618L13.85 17.706L11.828 14.462Z"
                        })
                    })
                }, l.ImagesIcon, void 0, {
                    size: 24
                })
        },
        419441: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var r = s("37983");
            s("884691");
            var o = s("469563"),
                l = s("109731"),
                a = s("75196"),
                n = (0, o.replaceIcon)(function(e) {
                    let {
                        width: t = 10,
                        height: s = 10,
                        color: o = "currentColor",
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: s,
                        viewBox: "0 0 10 10",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.jsx)("path", {
                            d: "M4.16667 8.33333V5.83333H5.83333V8.33333H7.91667V5H9.16667L5 1.25L0.833333 5H2.08333V8.33333H4.16667Z",
                            fill: o
                        })
                    })
                }, e => {
                    let {
                        width: t = 10,
                        height: s = 10,
                        ...o
                    } = e;
                    return (0, r.jsx)(l.HomeIcon, {
                        width: t,
                        height: s,
                        ...o
                    })
                }, void 0, {
                    size: 10
                })
        },
        583698: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var r = s("37983");
            s("884691");
            var o = s("469563"),
                l = s("521590"),
                a = s("75196"),
                n = (0, o.replaceIcon)(function(e) {
                    let {
                        width: t = 10,
                        height: s = 10,
                        color: o = "currentColor",
                        ...l
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: s,
                        viewBox: "0 0 10 10",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, r.jsx)("g", {
                            clipPath: "url(#clip0_1242_1450)",
                            children: (0, r.jsx)("path", {
                                d: "M5 0.833252C2.7 0.833252 0.833333 2.69992 0.833333 4.99992C0.833333 7.29992 2.7 9.16659 5 9.16659C7.3 9.16659 9.16667 7.29992 9.16667 4.99992C9.16667 2.69992 7.3 0.833252 5 0.833252ZM4.58333 8.30409C2.9375 8.09992 1.66667 6.69992 1.66667 4.99992C1.66667 4.74159 1.7 4.49575 1.75417 4.25409L3.75 6.24992V6.66659C3.75 7.12492 4.125 7.49992 4.58333 7.49992V8.30409ZM7.45833 7.24575C7.35 6.90825 7.04167 6.66659 6.66667 6.66659H6.25V5.41659C6.25 5.18742 6.0625 4.99992 5.83333 4.99992H3.33333V4.16659H4.16667C4.39583 4.16659 4.58333 3.97909 4.58333 3.74992V2.91659H5.41667C5.875 2.91659 6.25 2.54159 6.25 2.08325V1.91242C7.47083 2.40825 8.33333 3.60409 8.33333 4.99992C8.33333 5.86659 8 6.65409 7.45833 7.24575Z",
                                fill: o
                            })
                        }), (0, r.jsx)("defs", {
                            children: (0, r.jsx)("clipPath", {
                                id: "clip0_1242_1450",
                                children: (0, r.jsx)("rect", {
                                    width: "10",
                                    height: "10",
                                    fill: "white"
                                })
                            })
                        })]
                    })
                }, l.GlobeEarthIcon, void 0, {
                    size: 10
                })
        },
        992639: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var r = s("37983");
            s("884691");
            var o = s("75196");

            function l(e) {
                let {
                    width: t = 10,
                    height: s = 10,
                    color: l = "currentColor",
                    ...a
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, o.default)(a),
                    width: t,
                    height: s,
                    viewBox: "0 0 17 22",
                    fill: l,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsxs)("g", {
                        filter: "url(#filter0_d_1296_1706)",
                        children: [(0, r.jsx)("path", {
                            opacity: "0.55",
                            d: "M8.49999 3.7998L4.85999 7.4398V12.5598L8.49999 16.1998L12.14 12.5598V7.4398L8.49999 3.7998ZM10.32 11.7998L8.49999 13.6265L6.67999 11.8065V8.19314L8.49999 6.37314L10.32 8.19314V11.7998Z",
                            fill: "white"
                        }), (0, r.jsx)("path", {
                            opacity: "0.8",
                            d: "M6.67999 8.19354V11.8069L8.49999 13.6269L10.32 11.8069V8.19354L8.49999 6.37354L6.67999 8.19354Z",
                            fill: "white"
                        }), (0, r.jsx)("path", {
                            d: "M8.5 3.7998V6.37314L10.32 8.19314L12.14 7.4398L8.5 3.7998Z",
                            fill: "white"
                        })]
                    }), (0, r.jsx)("defs", {
                        children: (0, r.jsxs)("filter", {
                            id: "filter0_d_1296_1706",
                            x: "-3.5",
                            y: "-1",
                            width: "24",
                            height: "24",
                            filterUnits: "userSpaceOnUse",
                            "color-interpolation-filters": "sRGB",
                            children: [(0, r.jsx)("feFlood", {
                                "flood-opacity": "0",
                                result: "BackgroundImageFix"
                            }), (0, r.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }), (0, r.jsx)("feOffset", {
                                dy: "1"
                            }), (0, r.jsx)("feGaussianBlur", {
                                stdDeviation: "2"
                            }), (0, r.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
                            }), (0, r.jsx)("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_1296_1706"
                            }), (0, r.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_1296_1706",
                                result: "shape"
                            })]
                        })
                    })]
                })
            }
        },
        290581: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var r = s("37983");
            s("884691");
            var o = s("469563"),
                l = s("825701"),
                a = s("75196"),
                n = (0, o.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: o = "currentColor",
                        foreground: l,
                        ...n
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(n),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: o,
                            className: l,
                            d: "M21.924 8.61789C21.77 8.24489 21.404 8.00089 21 8.00089H15.618L12.894 2.55389C12.555 1.87689 11.444 1.87689 11.105 2.55389L8.38199 8.00089H2.99999C2.59599 8.00089 2.22999 8.24489 2.07599 8.61789C1.92199 8.99089 2.00699 9.42289 2.29299 9.70789L6.87699 14.2919L5.03899 20.7269C4.92399 21.1299 5.07199 21.5619 5.40999 21.8089C5.74999 22.0569 6.20699 22.0659 6.55399 21.8329L12 18.2029L17.445 21.8329C17.613 21.9449 17.806 22.0009 18 22.0009C18.207 22.0009 18.414 21.9369 18.59 21.8089C18.928 21.5619 19.076 21.1299 18.961 20.7269L17.123 14.2919L21.707 9.70789C21.993 9.42289 22.078 8.99089 21.924 8.61789Z"
                        })
                    })
                }, l.StarIcon, void 0, {
                    size: 24
                })
        },
        595086: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var r = s("37983");
            s("884691");
            var o = s("414456"),
                l = s.n(o),
                a = s("469563"),
                n = s("65969"),
                i = s("75196"),
                u = s("76150"),
                d = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: o = "currentColor",
                        winking: a = !1,
                        foreground: n,
                        ...d
                    } = e;
                    return (0, r.jsxs)("svg", {
                        width: t,
                        height: s,
                        ...(0, i.default)(d),
                        viewBox: "0 0 20 20",
                        children: [(0, r.jsx)("path", {
                            fill: o,
                            className: l(n, {
                                [u.hidden]: a
                            }),
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM11.9998 12.2201C11.9998 13.3245 11.1046 14.2198 10.0002 14.2198C8.8958 14.2198 8.00052 13.3245 8.00052 12.2201H6.66742C6.66742 14.0607 8.15955 15.5529 10.0002 15.5529C11.8408 15.5529 13.3329 14.0607 13.3329 12.2201H11.9998ZM4.44559 13.331C4.44559 13.9446 3.94821 14.442 3.33467 14.442C2.72112 14.442 2.22375 13.9446 2.22375 13.331C2.22375 12.7175 2.72112 12.2201 3.33467 12.2201C3.94821 12.2201 4.44559 12.7175 4.44559 13.331ZM16.6657 14.442C17.2793 14.442 17.7766 13.9446 17.7766 13.331C17.7766 12.7175 17.2793 12.2201 16.6657 12.2201C16.0522 12.2201 15.5548 12.7175 15.5548 13.331C15.5548 13.9446 16.0522 14.442 16.6657 14.442Z"
                        }), (0, r.jsx)("path", {
                            fill: o,
                            className: l(n, {
                                [u.hidden]: !a
                            }),
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM12 13H11.2H8.8H8C8 14.1046 8.89543 15 10 15C11.1046 15 12 14.1046 12 13ZM17.7766 13.331C17.7766 13.9446 17.2793 14.442 16.6657 14.442C16.0522 14.442 15.5548 13.9446 15.5548 13.331C15.5548 12.7175 16.0522 12.2201 16.6657 12.2201C17.2793 12.2201 17.7766 12.7175 17.7766 13.331ZM2 12.2361L2.53532 11L5.62492 12.7835C5.79161 12.8797 5.79161 13.1203 5.62492 13.2165L2.53532 15L2 13.7639L3.32339 13L2 12.2361Z"
                        })]
                    })
                }, n.StickerIcon, {
                    winking: "remove"
                }, {
                    size: 24
                })
        },
        885541: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var r = s("37983");
            s("884691");
            var o = s("75196");

            function l(e) {
                let {
                    width: t = 40,
                    height: s = 40,
                    color: l = "currentColor",
                    ...a
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, o.default)(a),
                    width: t,
                    height: s,
                    viewBox: "0 0 20 21",
                    fill: l,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M9.2139 1.00082L0.271335 12.3825C-0.0698739 12.8168 0.00557122 13.4454 0.439846 13.7866C0.616031 13.9251 0.833599 14.0003 1.05766 14.0003H5.00022V20.0003C5.00022 20.5526 5.44794 21.0003 6.00022 21.0003H14.0002C14.5525 21.0003 15.0002 20.5526 15.0002 20.0003V14.0003H18.9428C19.495 14.0003 19.9428 13.5526 19.9428 13.0003C19.9428 12.7763 19.8675 12.5587 19.7291 12.3825L10.7865 1.00082C10.4453 0.566546 9.81669 0.4911 9.38241 0.832308C9.31972 0.881561 9.26315 0.938133 9.2139 1.00082Z",
                        fill: l
                    })
                })
            }
        },
        392767: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ImagesIcon: function() {
                    return a
                }
            });
            var r = s("37983");
            s("884691");
            var o = s("669491"),
                l = s("82169");
            let a = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: a = o.default.colors.INTERACTIVE_NORMAL,
                    colorClass: n = "",
                    ...i
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M4 8v7.5a.5.5 0 0 1-.5.5H3a1 1 0 0 1-1-1V8a6 6 0 0 1 6-6h7a1 1 0 0 1 1 1v.5a.5.5 0 0 1-.5.5H8a4 4 0 0 0-4 4Z",
                        className: n
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M6 9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Zm13.8 9.79L16.82 15a2 2 0 0 0-3.14 0l-2.09 2.65-.13-.16a1.5 1.5 0 0 0-2.36.05l-.95 1.26a.75.75 0 0 0 .6 1.2h10.46c.62 0 .97-.72.59-1.21ZM11.73 8.3c.57-.56 1.52-.01 1.33.77a.8.8 0 0 0 .55.96c.77.22.77 1.3 0 1.53a.8.8 0 0 0-.55.96c.19.77-.76 1.32-1.33.76a.8.8 0 0 0-1.1 0c-.58.56-1.53.01-1.33-.76a.8.8 0 0 0-.56-.96c-.77-.22-.77-1.31 0-1.53a.8.8 0 0 0 .56-.96c-.2-.78.75-1.33 1.32-.77.31.3.8.3 1.11 0Z",
                        clipRule: "evenodd",
                        className: n
                    })]
                })
            }
        },
        152893: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                StarIcon: function() {
                    return a
                }
            });
            var r = s("37983");
            s("884691");
            var o = s("669491"),
                l = s("82169");
            let a = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: a = o.default.colors.INTERACTIVE_NORMAL,
                    colorClass: n = "",
                    ...i
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M10.81 2.86c.38-1.15 2-1.15 2.38 0l1.89 5.83h6.12c1.2 0 1.71 1.54.73 2.25l-4.95 3.6 1.9 5.82a1.25 1.25 0 0 1-1.93 1.4L12 18.16l-4.95 3.6c-.98.7-2.3-.25-1.92-1.4l1.89-5.82-4.95-3.6a1.25 1.25 0 0 1 .73-2.25h6.12l1.9-5.83Z",
                        className: n
                    })
                })
            }
        },
        224745: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                StickerIcon: function() {
                    return a
                }
            });
            var r = s("37983");
            s("884691");
            var o = s("669491"),
                l = s("82169");
            let a = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: a = o.default.colors.INTERACTIVE_NORMAL,
                    colorClass: n = "",
                    ...i
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M6 2h12a4 4 0 0 1 4 4v7.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v2.5a.5.5 0 0 1-.5.5H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.91 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z",
                        clipRule: "evenodd",
                        className: n
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M21.66 16c.03 0 .05.03.04.06a3 3 0 0 1-.58.82l-4.24 4.24a3 3 0 0 1-.82.58.04.04 0 0 1-.06-.04V19a3 3 0 0 1 3-3h2.66Z",
                        className: n
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=98281.9fbbd252957b8bf44d74.js.map