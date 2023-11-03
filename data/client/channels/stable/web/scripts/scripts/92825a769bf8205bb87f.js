(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["41611"], {
        618017: function(e, r, l) {
            "use strict";
            l.r(r), l.d(r, {
                canEditClydeAIProfile: function() {
                    return i
                }
            });
            var t = l("957255"),
                o = l("49111");

            function i(e) {
                return null != e && t.default.can(o.Permissions.USE_CLYDE_AI, e)
            }
        },
        190045: function(e, r, l) {
            "use strict";
            l.r(r), l.d(r, {
                default: function() {
                    return s
                }
            });
            var t = l("37983");
            l("884691");
            var o = l("77078"),
                i = l("599110"),
                n = l("49111");

            function s(e) {
                i.default.track(n.AnalyticEvents.OPEN_MODAL, {
                    type: "Edit Clyde Profile",
                    location_page: "Profile Popout",
                    guild_id: e
                }), (0, o.openModalLazy)(async () => {
                    let {
                        default: r
                    } = await l.el("485261").then(l.bind(l, "485261"));
                    return l => (0, t.jsx)(r, {
                        ...l,
                        guildId: e
                    })
                })
            }
        },
        335031: function(e, r, l) {
            "use strict";
            l.r(r), l.d(r, {
                default: function() {
                    return u
                }
            });
            var t = l("884691"),
                o = l("656280"),
                i = l.n(o),
                n = l("509043"),
                s = l("446674"),
                a = l("206230"),
                u = e => {
                    let r = (0, s.useStateFromStores)([a.default], () => a.default.desaturateUserColors ? a.default.saturation : 1),
                        l = (0, t.useMemo)(() => {
                            let {
                                h: l,
                                s: t,
                                l: o
                            } = i((0, n.int2hex)(e)).toHsl(), s = i({
                                h: l,
                                s: t * r,
                                l: o
                            });
                            return {
                                hex: s.toHexString(),
                                hsl: s.toHslString()
                            }
                        }, [e, r]);
                    return l
                }
        },
        528438: function(e, r, l) {
            "use strict";
            l.r(r), l.d(r, {
                default: function() {
                    return s
                }
            });
            var t = l("509043"),
                o = l("462274"),
                i = l("449918"),
                n = l("49111");

            function s(e, r) {
                var l, s;
                let {
                    pendingThemeColors: a,
                    isPreview: u
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, f = null == e ? void 0 : e.getAvatarURL(null == r ? void 0 : r.guildId, 80), d = (0, i.useColorValue)(n.Color.PRIMARY_530).hex, [c, P] = (0, o.useAvatarColors)(f, d, !1);
                if (!(null == r ? void 0 : r.canEditThemes) && !u) return [null, null];
                let E = null == r ? void 0 : r.getPreviewThemeColors(a),
                    T = null !== (l = null == E ? void 0 : E[0]) && void 0 !== l ? l : (0, t.hex2int)(c),
                    p = null !== (s = null == E ? void 0 : E[1]) && void 0 !== s ? s : (0, t.hex2int)(P);
                return [T, p]
            }
        },
        289918: function(e, r, l) {
            "use strict";
            l.r(r), l.d(r, {
                default: function() {
                    return J
                }
            });
            var t, o, i = l("37983"),
                n = l("884691"),
                s = l("414456"),
                a = l.n(s),
                u = l("509043"),
                f = l("446674"),
                d = l("669491"),
                c = l("77078"),
                P = l("79112"),
                E = l("812204"),
                T = l("685665"),
                p = l("462274"),
                O = l("618017"),
                U = l("190045"),
                _ = l("335031"),
                h = l("252063"),
                y = l("38766"),
                v = l("845579"),
                S = l("271938"),
                m = l("42203"),
                I = l("305961"),
                A = l("18494"),
                N = l("697218"),
                L = l("471671"),
                g = l("275623"),
                R = l("945330"),
                C = l("474571"),
                M = l("216422"),
                B = l("987772"),
                D = l("956089"),
                b = l("599110"),
                x = l("315102"),
                H = l("719923"),
                w = l("713135"),
                k = l("581295"),
                G = l("878569"),
                F = l("236100"),
                j = l("590456"),
                W = l("49111"),
                z = l("646718"),
                Y = l("782340"),
                X = l("220817");
            (t = o || (o = {}))[t.SHOULD_LOAD = 0] = "SHOULD_LOAD", t[t.LOADING = 1] = "LOADING", t[t.COMPLETE = 2] = "COMPLETE";
            let V = {
                    [j.UserProfileTypes.POPOUT]: 18,
                    [j.UserProfileTypes.MODAL]: 24,
                    [j.UserProfileTypes.SETTINGS]: 0,
                    [j.UserProfileTypes.PANEL]: 18,
                    [j.UserProfileTypes.POMELO_POPOUT]: 18,
                    [j.UserProfileTypes.CANCEL_MODAL]: 0
                },
                Z = {
                    [j.UserProfileTypes.MODAL]: W.AnalyticsPages.USER_PROFILE,
                    [j.UserProfileTypes.POPOUT]: W.AnalyticsPages.USER_POPOUT,
                    [j.UserProfileTypes.SETTINGS]: W.AnalyticsPages.USER_POPOUT,
                    [j.UserProfileTypes.PANEL]: W.AnalyticsPages.DM_CHANNEL,
                    [j.UserProfileTypes.POMELO_POPOUT]: W.AnalyticsPages.POMELO_POPOUT,
                    [j.UserProfileTypes.CANCEL_MODAL]: W.AnalyticsPages.USER_POPOUT
                };

            function K(e) {
                let {
                    type: r,
                    shown: t,
                    onClick: o
                } = e, s = (0, f.useStateFromStores)([N.default], () => {
                    let e = N.default.getCurrentUser();
                    return H.default.canUsePremiumProfileCustomization(e)
                }), u = n.useRef(!1), {
                    analyticsLocations: d
                } = (0, T.default)(E.default.BADGE);
                return n.useEffect(() => {
                    t && !u.current && (u.current = !0, b.default.track(W.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: z.PremiumUpsellTypes.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
                        location: {
                            page: Z[r],
                            section: W.AnalyticsSections.NITRO_BANNER,
                            object: W.AnalyticsObjects.NITRO_BADGE
                        },
                        location_stack: d
                    }))
                }, [d, t, r]), (0, i.jsx)(c.Tooltip, {
                    tooltipContentClassName: X.premiumIconTooltipContent,
                    text: s ? Y.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
                    children: e => (0, i.jsx)(c.Clickable, {
                        ...e,
                        onClick: s ? void 0 : () => {
                            var e;
                            e = d, (0, c.openModalLazy)(async () => {
                                let {
                                    default: r
                                } = await l.el("292890").then(l.bind(l, "292890"));
                                return l => {
                                    let {
                                        onClose: t,
                                        ...o
                                    } = l;
                                    return (0, i.jsx)(r, {
                                        analyticsLocations: e,
                                        title: Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
                                        description: Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
                                            onAndMoreWithPremiumClick: () => {
                                                t(), P.default.open(W.UserSettingsSections.PREMIUM, null, {
                                                    analyticsLocations: e
                                                })
                                            }
                                        }),
                                        onClose: t,
                                        ...o
                                    })
                                }
                            }), null == o || o()
                        },
                        className: a(X.premiumIconWrapper, {
                            [X.visible]: t,
                            [X.clickable]: !s
                        }),
                        children: (0, i.jsx)(D.TextBadge, {
                            color: "rgba(32, 34, 37, 0.8)",
                            text: (0, i.jsx)(M.default, {
                                width: 16,
                                height: 16,
                                className: X.premiumIcon
                            })
                        })
                    })
                })
            }

            function q(e) {
                let {
                    darkenOnHover: r,
                    profileType: l,
                    profileLabel: t,
                    icon: o,
                    ...n
                } = e, s = V[l], a = "pencil" === o ? B.default : C.default;
                return (0, i.jsx)(c.Clickable, {
                    ...n,
                    "aria-label": t,
                    className: r ? X.pencilContainerDark : X.pencilContainer,
                    children: (0, i.jsx)(c.Tooltip, {
                        text: t,
                        children: e => (0, i.jsx)(a, {
                            ...e,
                            width: s,
                            height: s,
                            className: X.editIcon
                        })
                    })
                })
            }

            function J(e) {
                var r, l, t;
                let {
                    user: s,
                    displayProfile: P,
                    bannerSrc: E,
                    onClose: T,
                    guildId: N,
                    profileType: C = j.UserProfileTypes.POPOUT,
                    allowEdit: M = !0,
                    showPremiumBadgeUpsell: B = !0,
                    isHovering: D,
                    animateOnHover: b
                } = e, [V, Z] = n.useState((null == P ? void 0 : P.banner) == null ? o.COMPLETE : o.SHOULD_LOAD), J = (0, f.useStateFromStores)([I.default], () => I.default.getGuild(N)), Q = (0, f.useStateFromStores)([S.default], () => S.default.getId()), $ = Q === s.id && M || s.isClyde() && null != J && (0, O.canEditClydeAIProfile)(J), ee = H.default.isPremiumAtLeast(null == P ? void 0 : P.premiumType, z.PremiumTypes.TIER_2), [er, el] = n.useState(!1), et = (0, f.useStateFromStores)([L.default], () => L.default.isFocused()), eo = v.GifAutoPlay.getSetting(), ei = b || !eo ? er : et, en = (0, c.useToken)(d.default.unsafe_rawColors.PRIMARY_800).hex(), es = (0, c.getAvatarSize)(c.AvatarSizes.SIZE_80), ea = (0, u.hex2int)((0, p.default)(s.getAvatarURL(N, es), en, !1)), eu = (0, _.default)(null !== (r = null == P ? void 0 : P.primaryColor) && void 0 !== r ? r : ea).hsl, ef = (0, G.getUserBannerSize)(C), ed = null != E ? E : null == P ? void 0 : P.getBannerURL({
                    size: ef,
                    canAnimate: ei
                }), ec = null != ed, eP = (0, f.useStateFromStores)([w.default], () => w.default.getUserProfile(s.id)), eE = m.default.getChannel(A.default.getChannelId()), {
                    appsInGDMEnabled: eT,
                    availableApplications: ep
                } = (0, h.usePrivateChannelIntegrationState)({
                    channelId: null !== (l = null == eE ? void 0 : eE.id) && void 0 !== l ? l : ""
                }), eO = null == eP ? void 0 : eP.application, eU = eT && null != ep.find(e => e.id === (null == eO ? void 0 : eO.id));
                if (ec && (ee || s.isClyde()) && V === o.SHOULD_LOAD) {
                    Z(o.LOADING);
                    let e = new Image;
                    e.src = ed, e.onload = () => Z(o.COMPLETE)
                }
                n.useEffect(() => {
                    if (eo || !ee) return;
                    let e = null != E ? E : null == P ? void 0 : P.getBannerURL({
                        size: ef,
                        canAnimate: !0
                    });
                    if (null == e) return;
                    let r = new Image;
                    r.src = e
                }, [eo, ee, E, P, ef]);
                let e_ = (0, y.default)({
                        analyticsLocation: {
                            page: W.AnalyticsPages.USER_POPOUT,
                            section: W.AnalyticsSections.PROFILE_POPOUT
                        }
                    }),
                    eh = (null == P ? void 0 : P.profileEffectID) != null;
                return (0, i.jsx)(k.default, {
                    isPremium: ee,
                    hasThemeColors: null !== (t = null == P ? void 0 : P.canEditThemes) && void 0 !== t && t,
                    profileType: C,
                    hasBanner: ec,
                    hasProfileEffect: eh,
                    children: (0, i.jsxs)("div", {
                        className: a(X.banner, (0, G.getUserBannerStyles)({
                            profileType: C,
                            user: {
                                hasBanner: ec,
                                isPremium: ee,
                                hasProfileEffect: eh
                            }
                        }), {
                            [X.reducedMotion]: !eo
                        }),
                        onMouseMove: () => el(!0),
                        onMouseLeave: () => el(!1),
                        style: {
                            backgroundImage: ec && ee ? "url(".concat(ed, ")") : void 0,
                            backgroundColor: V !== o.COMPLETE ? d.default.unsafe_rawColors.PRIMARY_800.css : eu
                        },
                        children: [$ ? null != J || s.isClyde() ? null != J && s.isClyde() && (0, O.canEditClydeAIProfile)(J) ? (0, i.jsx)(q, {
                            profileType: C,
                            profileLabel: Y.default.Messages.CLYDE_SETTINGS,
                            icon: "gear",
                            onClick: () => {
                                null == T || T(), (0, U.default)(J.id)
                            }
                        }) : null == J ? null : (0, i.jsx)(c.Popout, {
                            spacing: 6,
                            position: "bottom",
                            renderPopout: e => {
                                let {
                                    closePopout: r
                                } = e;
                                return (0, i.jsx)(F.default, {
                                    onClose: r,
                                    onSelect: T,
                                    guild: J
                                })
                            },
                            children: e => (0, i.jsx)(q, {
                                darkenOnHover: eh && D,
                                profileLabel: Y.default.Messages.EDIT_PROFILE,
                                icon: "pencil",
                                ...e,
                                profileType: C
                            })
                        }) : (0, i.jsx)(q, {
                            darkenOnHover: eh && D,
                            profileType: C,
                            profileLabel: Y.default.Messages.EDIT_PROFILE,
                            icon: "pencil",
                            onClick: () => {
                                null == T || T(), e_()
                            }
                        }) : (() => {
                            let e = B && ec && C !== j.UserProfileTypes.SETTINGS;
                            return e ? (0, i.jsx)(K, {
                                type: C,
                                shown: void 0 === D ? er : D,
                                onClick: T
                            }) : null
                        })(), eU ? C !== j.UserProfileTypes.MODAL ? null : (0, i.jsx)(c.Clickable, {
                            onClick: T,
                            "aria-label": Y.default.Messages.BACK,
                            className: X.pencilContainer,
                            children: (0, i.jsx)(c.Tooltip, {
                                text: Y.default.Messages.BACK,
                                children: e => (0, i.jsx)(R.default, {
                                    ...e,
                                    className: X.closeIcon,
                                    color: "white"
                                })
                            })
                        }) : null, !eo && (0, x.isAnimatedImageURL)(ed) && (0, i.jsx)(g.default, {
                            className: X.gifTag
                        })]
                    })
                })
            }
        },
        581295: function(e, r, l) {
            "use strict";
            l.r(r), l.d(r, {
                default: function() {
                    return T
                }
            });
            var t = l("37983");
            l("884691");
            var o = l("506838"),
                i = l("769846"),
                n = l("77078"),
                s = l("606292"),
                a = l("476765"),
                u = l("159885"),
                f = l("878569"),
                d = l("590456"),
                c = l("573135"),
                P = l("423713");
            let E = {
                [d.UserProfileTypes.POPOUT]: n.AvatarSizes.SIZE_80,
                [d.UserProfileTypes.MODAL]: n.AvatarSizes.SIZE_120,
                [d.UserProfileTypes.SETTINGS]: n.AvatarSizes.SIZE_80,
                [d.UserProfileTypes.PANEL]: n.AvatarSizes.SIZE_80,
                [d.UserProfileTypes.POMELO_POPOUT]: n.AvatarSizes.SIZE_80,
                [d.UserProfileTypes.CANCEL_MODAL]: n.AvatarSizes.SIZE_56
            };

            function T(e) {
                let {
                    children: r,
                    profileType: l,
                    isPremium: T,
                    hasThemeColors: p,
                    hasBanner: O,
                    forProfileEffectModal: U,
                    hasProfileEffect: _ = !1
                } = e, h = E[l], y = (0, a.useUID)(), v = function(e) {
                    let {
                        profileType: r,
                        avatarSize: l,
                        hasBanner: t,
                        isPremium: a,
                        hasThemeColors: P,
                        hasProfileEffect: E
                    } = e, T = c.AvatarDecorationBorderSizes[l];
                    if (null == T) throw Error("Unsupported avatar size for banner mask");
                    let p = (0, s.getDecorationSizeForAvatarSize)(l),
                        {
                            size: O,
                            stroke: U
                        } = (0, n.getAvatarSpecs)(l),
                        _ = {
                            avatarSize: O,
                            avatarBorderSize: U,
                            avatarDecorationSize: p,
                            avatarDecorationBorderSize: T,
                            avatarDecorationOffsetY: -(p + 2 * T) / 2,
                            bannerHeight: (0, f.getUserBannerHeight)({
                                profileType: r,
                                user: {
                                    hasBanner: t,
                                    isPremium: a,
                                    hasProfileEffect: E
                                }
                            })
                        };
                    return (0, o.match)(r).with(d.UserProfileTypes.POPOUT, () => {
                        let e = P ? (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING) : 0;
                        return {
                            ..._,
                            bannerWidth: (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
                            offsetX: 16 - e,
                            offsetY: 4 + e,
                            avatarDecorationOffsetX: 4
                        }
                    }).with(d.UserProfileTypes.MODAL, () => ({
                        ..._,
                        bannerWidth: (0, f.getUserBannerSize)(d.UserProfileTypes.MODAL),
                        offsetX: 14,
                        offsetY: 5,
                        avatarDecorationOffsetX: 2
                    })).with(d.UserProfileTypes.SETTINGS, () => ({
                        ..._,
                        bannerWidth: 660,
                        offsetX: 16,
                        offsetY: -22,
                        avatarDecorationOffsetX: 8
                    })).with(d.UserProfileTypes.PANEL, () => {
                        let e = (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING);
                        return {
                            ..._,
                            bannerWidth: (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
                            offsetX: 16 - e,
                            offsetY: 4 + e,
                            avatarDecorationOffsetX: 4
                        }
                    }).with(d.UserProfileTypes.POMELO_POPOUT, () => ({
                        ..._,
                        bannerWidth: (0, f.getUserBannerSize)(d.UserProfileTypes.POMELO_POPOUT),
                        offsetX: 20,
                        offsetY: -20,
                        avatarDecorationOffsetX: 10
                    })).with(d.UserProfileTypes.CANCEL_MODAL, () => ({
                        ..._,
                        bannerWidth: (0, f.getUserBannerSize)(d.UserProfileTypes.CANCEL_MODAL),
                        offsetX: 8,
                        offsetY: 2,
                        avatarDecorationOffsetX: 8
                    })).exhaustive()
                }({
                    profileType: l,
                    avatarSize: h,
                    hasBanner: O,
                    isPremium: T,
                    hasThemeColors: p,
                    hasProfileEffect: _
                });
                U && (v.bannerWidth = (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH));
                let S = v.avatarSize / 2 + v.avatarBorderSize,
                    m = v.bannerHeight - v.offsetY;
                return (0, t.jsxs)("svg", {
                    className: P.bannerSVGWrapper,
                    viewBox: "0 0 ".concat(v.bannerWidth, " ").concat(v.bannerHeight),
                    style: {
                        minWidth: v.bannerWidth,
                        minHeight: v.bannerHeight
                    },
                    children: [(0, t.jsxs)("mask", {
                        id: y,
                        children: [(0, t.jsx)("rect", {
                            fill: "white",
                            x: "0",
                            y: "0",
                            width: "100%",
                            height: "100%"
                        }), (0, t.jsx)("circle", {
                            fill: "black",
                            cx: v.offsetX + S,
                            cy: m,
                            r: S
                        })]
                    }), (0, t.jsx)("foreignObject", {
                        x: "0",
                        y: "0",
                        width: "100%",
                        height: "100%",
                        overflow: "visible",
                        mask: "url(#".concat(y, ")"),
                        children: r
                    })]
                })
            }
        },
        878569: function(e, r, l) {
            "use strict";
            l.r(r), l.d(r, {
                buildGetPremiumUserBannerStyles: function() {
                    return a
                },
                getUserBannerStyles: function() {
                    return u
                },
                getUserBannerHeight: function() {
                    return f
                },
                getUserBannerSize: function() {
                    return c
                }
            });
            var t = l("506838"),
                o = l("617258"),
                i = l("769846"),
                n = l("590456"),
                s = l("220817");
            let a = e => r => {
                    if (r.hasBanner && r.isPremium || r.hasProfileEffect) return e.premiumUserWithBanner;
                    if (r.isPremium) {
                        var l;
                        return null !== (l = e.premiumUserWithoutBanner) && void 0 !== l ? l : e.default
                    }
                    return e.default
                },
                u = e => {
                    let {
                        profileType: r,
                        user: l
                    } = e;
                    return (0, t.match)(r).with(n.UserProfileTypes.POPOUT, n.UserProfileTypes.POMELO_POPOUT, () => {
                        let e = a({
                            premiumUserWithBanner: s.popoutBannerPremium,
                            premiumUserWithoutBanner: s.popoutNoBannerPremium,
                            default: s.popoutBanner
                        });
                        return e(l)
                    }).with(n.UserProfileTypes.MODAL, () => {
                        let e = a({
                            premiumUserWithBanner: s.profileBannerPremium,
                            premiumUserWithoutBanner: s.profileBanner,
                            default: s.profileBanner
                        });
                        return e(l)
                    }).with(n.UserProfileTypes.SETTINGS, () => s.settingsBanner).with(n.UserProfileTypes.PANEL, () => s.panelBanner).with(n.UserProfileTypes.CANCEL_MODAL, () => s.cancelModalBanner).exhaustive()
                },
                f = e => {
                    let {
                        profileType: r,
                        user: l
                    } = e, s = (0, t.match)(r).with(n.UserProfileTypes.POPOUT, () => {
                        let e = a({
                            premiumUserWithBanner: i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT,
                            premiumUserWithoutBanner: i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT,
                            default: i.default.USER_BANNER_BANNER_HEIGHT_POPOUT
                        });
                        return e(l)
                    }).with(n.UserProfileTypes.MODAL, () => {
                        let e = a({
                            premiumUserWithBanner: i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE,
                            premiumUserWithoutBanner: i.default.USER_BANNER_BANNER_HEIGHT_PROFILE,
                            default: i.default.USER_BANNER_BANNER_HEIGHT_PROFILE
                        });
                        return e(l)
                    }).with(n.UserProfileTypes.POMELO_POPOUT, () => i.default.USER_BANNER_BANNER_HEIGHT_POMELO).with(n.UserProfileTypes.SETTINGS, () => i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS).with(n.UserProfileTypes.PANEL, () => i.default.USER_BANNER_BANNER_HEIGHT_PANEL).with(n.UserProfileTypes.CANCEL_MODAL, () => i.default.USER_BANNER_CANCEL_MODAL_HEIGHT).exhaustive();
                    return (0, o.cssValueToNumber)(s)
                },
                d = Object.freeze({
                    [n.UserProfileTypes.POPOUT]: 480,
                    [n.UserProfileTypes.PANEL]: 480,
                    [n.UserProfileTypes.MODAL]: 600,
                    [n.UserProfileTypes.SETTINGS]: 600,
                    [n.UserProfileTypes.POMELO_POPOUT]: 432,
                    [n.UserProfileTypes.CANCEL_MODAL]: 172
                }),
                c = e => d[e]
        },
        430312: function(e, r, l) {
            "use strict";
            l.r(r), l.d(r, {
                UserProfileContext: function() {
                    return P
                },
                default: function() {
                    return T
                }
            });
            var t = l("37983"),
                o = l("884691"),
                i = l("414456"),
                n = l.n(i),
                s = l("506838"),
                a = l("217513"),
                u = l("906889"),
                f = l("590456"),
                d = l("200932"),
                c = l("677055");
            let P = o.createContext({
                profileType: null,
                profileTheme: null
            });

            function E(e) {
                var r, l;
                let {
                    user: i,
                    guildId: E,
                    profileType: T,
                    className: p,
                    pendingThemeColors: O,
                    useDefaultClientTheme: U,
                    children: _,
                    forceShowPremium: h = !1,
                    showOutOfBoundaryComponents: y = !1
                } = e, v = o.useRef(null), S = (0, a.default)(i.id, E), {
                    profileTheme: m
                } = (0, u.default)(i, S, {
                    themeElementRef: v,
                    pendingThemeColors: O,
                    isPreview: h,
                    useDefaultClientTheme: U
                }), I = (null == S ? void 0 : S.canEditThemes) || h, A = o.useMemo(() => ({
                    profileType: T,
                    profileTheme: m
                }), [T, m]);
                return (0, t.jsx)("div", {
                    ref: v,
                    className: n((r = T, (0, s.match)(r).with(f.UserProfileTypes.POPOUT, f.UserProfileTypes.SETTINGS, f.UserProfileTypes.CANCEL_MODAL, () => c.userPopoutOuter).with(f.UserProfileTypes.MODAL, () => c.userProfileModalOuter).with(f.UserProfileTypes.PANEL, () => c.userPanelOuter).with(f.UserProfileTypes.CARD, () => c.userCardOuter).exhaustive()), I ? c.userProfileOuterThemed : c.userProfileOuterUnthemed, d.profileColors, y ? c.showOutOfBoundaryComponents : void 0, "theme-".concat(m), p),
                    children: (0, t.jsx)("div", {
                        className: n((l = T, (0, s.match)(l).with(f.UserProfileTypes.POPOUT, f.UserProfileTypes.SETTINGS, f.UserProfileTypes.CANCEL_MODAL, () => c.userPopoutInner).with(f.UserProfileTypes.MODAL, () => c.userProfileModalInner).with(f.UserProfileTypes.PANEL, () => c.userPanelInner).with(f.UserProfileTypes.CARD, () => c.userCardInner).exhaustive()), function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                r = arguments.length > 1 ? arguments[1] : void 0,
                                l = arguments.length > 2 ? arguments[2] : void 0;
                            return (0, s.match)({
                                profileType: l,
                                canUsePremiumProfileCustomization: e,
                                hasBanner: r
                            }).with({
                                profileType: f.UserProfileTypes.PANEL
                            }, () => c.userPanelInnerThemed).with({
                                canUsePremiumProfileCustomization: !0,
                                hasBanner: !0
                            }, () => c.userProfileInnerThemedWithBanner).with({
                                canUsePremiumProfileCustomization: !0
                            }, () => c.userProfileInnerThemedPremiumWithoutBanner).otherwise(() => c.userProfileInnerThemedNonPremium)
                        }((null == S ? void 0 : S.canUsePremiumProfileCustomization) || h, (null == S ? void 0 : S.banner) != null, T)),
                        children: (0, t.jsx)(P.Provider, {
                            value: A,
                            children: _
                        })
                    })
                })
            }
            E.Inner = function(e) {
                var r;
                let {
                    className: l,
                    children: i
                } = e, {
                    profileType: a
                } = o.useContext(P);
                return (0, t.jsx)("div", {
                    className: n((r = a, (0, s.match)(r).with(f.UserProfileTypes.POPOUT, f.UserProfileTypes.SETTINGS, () => c.userPopoutOverlayBackground).with(f.UserProfileTypes.MODAL, () => c.userProfileModalOverlayBackground).with(f.UserProfileTypes.PANEL, () => c.userPanelOverlayBackground).otherwise(() => c.overlayBackground)), l),
                    children: i
                })
            };
            var T = E
        },
        236100: function(e, r, l) {
            "use strict";
            l.r(r), l.d(r, {
                default: function() {
                    return d
                }
            });
            var t = l("37983");
            l("884691");
            var o = l("77078"),
                i = l("38766"),
                n = l("49111"),
                s = l("782340"),
                a = l("364547");
            let u = {
                    page: n.AnalyticsPages.GUILD_CHANNEL,
                    section: n.AnalyticsSections.PROFILE_POPOUT,
                    object: n.AnalyticsObjects.EDIT_PER_SERVER_IDENTITY
                },
                f = {
                    page: n.AnalyticsPages.USER_POPOUT,
                    section: n.AnalyticsSections.PROFILE_POPOUT
                };

            function d(e) {
                let {
                    onSelect: r,
                    onClose: l,
                    guild: n
                } = e, d = (0, i.default)({
                    guild: n,
                    analyticsLocation: u
                }), c = (0, i.default)({
                    analyticsLocation: f
                });
                return (0, t.jsxs)(o.Menu, {
                    className: a.popoutMenu,
                    onSelect: r,
                    navId: "edit-profile-popout",
                    onClose: l,
                    "aria-label": s.default.Messages.PROFILE_ACTIONS_MENU_LABEL,
                    children: [(0, t.jsx)(o.MenuItem, {
                        id: "edit-server-profile",
                        label: s.default.Messages.CHANGE_IDENTITY,
                        subtext: s.default.Messages.CHANGE_IDENTITY_SERVER_PROFILE_MENU_HELP,
                        action: () => d()
                    }), (0, t.jsx)(o.MenuItem, {
                        id: "edit-default-profile",
                        label: s.default.Messages.USER_SETTINGS_EDIT_USER_PROFILE,
                        subtext: s.default.Messages.USER_PROFILE_MENU_HELP,
                        action: () => c()
                    })]
                })
            }
        },
        906889: function(e, r, l) {
            "use strict";
            l.r(r), l.d(r, {
                default: function() {
                    return c
                }
            });
            var t = l("884691"),
                o = l("509043"),
                i = l("446674"),
                n = l("841098"),
                s = l("206230"),
                a = l("388491"),
                u = l("528438");
            let f = ["--profile-gradient-primary-color", "--profile-gradient-secondary-color", "--profile-gradient-button-color", "--profile-gradient-overlay-color", "--profile-body-background-color", "--profile-body-divider-color", "--profile-avatar-border-color", "--profile-message-input-border-color", "--profile-note-background-color", "--profile-body-background-hover", "--account-profile-modal-list-item-hover", "--profile-role-pill-background-color", "--profile-role-pill-border-color"];

            function d(e, r, l) {
                var t;
                null == e || null === (t = e.current) || void 0 === t || t.style.setProperty(r, null != l ? l : null)
            }

            function c(e, r) {
                let {
                    themeElementRef: l,
                    pendingThemeColors: c,
                    isPreview: P,
                    useDefaultClientTheme: E
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, [T, p] = (0, u.default)(e, r, {
                    pendingThemeColors: c,
                    isPreview: P
                }), [O, U, _] = (0, i.useStateFromStoresArray)([s.default], () => [s.default.desaturateUserColors, s.default.saturation, s.default.syncProfileThemeWithUserTheme]), h = (0, n.default)(), y = t.useCallback(() => _ || E ? h : (0, a.getProfileTheme)(T), [E, _, h, T]), [v, S] = t.useState(y()), m = (0, a.useProfileThemeValues)(v), I = (0, a.useDividerColor)(v, T), A = (0, a.useMessageInputBorderColor)(v, p), N = t.useCallback((e, r) => (0, o.int2hsl)(e, O, null, r), [O]);
                t.useEffect(() => {
                    S(y())
                }, [T, _, h, E, y]);
                let L = (0, a.useAvatarBorderColor)(v, T, _),
                    g = null != L ? (0, o.int2hsl)(L, !1, O ? U : null) : null,
                    R = e => f.forEach(r => {
                        e.style.removeProperty(r)
                    });
                return t.useEffect(() => {
                    if (null != T && null != p && null != v && null != L && null != I && null != A) {
                        let e = _ && v !== h ? null == m ? void 0 : m.overlaySyncedWithUserTheme : null == m ? void 0 : m.overlay;
                        d(l, "--profile-gradient-primary-color", N(T)), d(l, "--profile-gradient-secondary-color", N(p)), d(l, "--profile-gradient-button-color", N((0, a.calculateButtonColor)(T))), d(l, "--profile-gradient-overlay-color", e), d(l, "--profile-body-background-color", null == m ? void 0 : m.sectionBox), d(l, "--profile-body-background-hover", null == m ? void 0 : m.profileBodyBackgroundHover), d(l, "--profile-body-divider-color", N(I, null == m ? void 0 : m.dividerOpacity)), d(l, "--profile-avatar-border-color", N(L)), d(l, "--profile-message-input-border-color", N(A)), d(l, "--profile-note-background-color", null == m ? void 0 : m.noteBackgroundColor), d(l, "--profile-role-pill-background-color", null == m ? void 0 : m.rolePillBackgroundColor), d(l, "--profile-role-pill-border-color", null == m ? void 0 : m.rolePillBorderColor)
                    } else(null == l ? void 0 : l.current) != null && R(null == l ? void 0 : l.current)
                }, [T, p, L, v, h, l, N, _, I, null == m ? void 0 : m.overlaySyncedWithUserTheme, null == m ? void 0 : m.overlay, null == m ? void 0 : m.sectionBox, null == m ? void 0 : m.profileBodyBackgroundHover, null == m ? void 0 : m.dividerOpacity, null == m ? void 0 : m.noteBackgroundColor, null == m ? void 0 : m.rolePillBackgroundColor, null == m ? void 0 : m.rolePillBorderColor, A]), {
                    profileTheme: null != v ? v : h,
                    primaryProfileColor: T,
                    avatarBorderColor: g
                }
            }
        }
    }
]);
//# sourceMappingURL=92825a769bf8205bb87f.js.map