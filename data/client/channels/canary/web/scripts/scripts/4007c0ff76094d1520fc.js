(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["9743"], {
        618017: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                canEditClydeAIProfile: function() {
                    return n
                }
            });
            var l = t("957255"),
                o = t("49111");

            function n(e) {
                return null != e && l.default.can(o.Permissions.USE_CLYDE_AI, e)
            }
        },
        190045: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return a
                }
            });
            var l = t("37983");
            t("884691");
            var o = t("77078"),
                n = t("599110"),
                i = t("49111");

            function a(e) {
                n.default.track(i.AnalyticEvents.OPEN_MODAL, {
                    type: "Edit Clyde Profile",
                    location_page: "Profile Popout",
                    guild_id: e
                }), (0, o.openModalLazy)(async () => {
                    let {
                        default: r
                    } = await t.el("485261").then(t.bind(t, "485261"));
                    return t => (0, l.jsx)(r, {
                        ...t,
                        guildId: e
                    })
                })
            }
        },
        563775: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return n
                }
            });
            var l = t("862205");
            let o = (0, l.createExperiment)({
                kind: "user",
                id: "2023-10_collectibles_falloween",
                label: "Collectibles Shop Falloween Content Drop",
                defaultConfig: {
                    canUseFalloweenAvatarDecorations: !1,
                    canUseFalloweenProfileEffects: !1
                },
                treatments: [{
                    id: 1,
                    label: "Collectibles Falloween Avatar Decorations",
                    config: {
                        canUseFalloweenAvatarDecorations: !0,
                        canUseFalloweenProfileEffects: !1
                    }
                }, {
                    id: 2,
                    label: "Collectibles Falloween Avatar Decorations & Profile Effects",
                    config: {
                        canUseFalloweenAvatarDecorations: !0,
                        canUseFalloweenProfileEffects: !0
                    }
                }]
            });
            var n = e => {
                let {
                    location: r,
                    autoTrackExposure: t = !0,
                    trackExposureOptions: l = {}
                } = e;
                return o.useExperiment({
                    location: r
                }, {
                    autoTrackExposure: t,
                    trackExposureOptions: l
                })
            }
        },
        335031: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return u
                }
            });
            var l = t("884691"),
                o = t("656280"),
                n = t.n(o),
                i = t("509043"),
                a = t("446674"),
                s = t("206230"),
                u = e => {
                    let r = (0, a.useStateFromStores)([s.default], () => s.default.desaturateUserColors ? s.default.saturation : 1),
                        t = (0, l.useMemo)(() => {
                            let {
                                h: t,
                                s: l,
                                l: o
                            } = n((0, i.int2hex)(e)).toHsl(), a = n({
                                h: t,
                                s: l * r,
                                l: o
                            });
                            return {
                                hex: a.toHexString(),
                                hsl: a.toHslString()
                            }
                        }, [e, r]);
                    return t
                }
        },
        154889: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                discountOfferHasTier: function() {
                    return d
                },
                usePremiumDiscountOffer: function() {
                    return c
                }
            });
            var l = t("884691"),
                o = t("446674"),
                n = t("862337"),
                i = t("697218"),
                a = t("340412"),
                s = t("719923"),
                u = t("646718");

            function f(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function d(e, r) {
                var t;
                if (null == e) return !1;
                let l = new Set(null === (t = e.discount) || void 0 === t ? void 0 : t.plan_ids.map(e => u.SubscriptionPlanInfo[e].skuId));
                return l.has(r)
            }

            function c() {
                let e = (0, o.useStateFromStores)([a.default], () => a.default.getUserDiscount(u.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID)),
                    [r, t] = l.useState(f(e)),
                    d = (0, o.useStateFromStores)([i.default], () => (0, s.isPremium)(i.default.getCurrentUser()));
                return l.useEffect(() => {
                    if (null == e || null == e.expires_at) return;
                    let l = new n.Timeout,
                        o = () => {
                            let n = null != e.expires_at ? Date.parse(e.expires_at) - Date.now() : 0;
                            null == l || l.start(n, () => {
                                !r && f(e) ? t(!0) : o()
                            })
                        };
                    return o(), () => l.stop()
                }, [r, e]), r || d ? null : e
            }
        },
        528438: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return a
                }
            });
            var l = t("509043"),
                o = t("462274"),
                n = t("449918"),
                i = t("49111");

            function a(e, r) {
                var t, a;
                let {
                    pendingThemeColors: s,
                    isPreview: u
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, f = null == e ? void 0 : e.getAvatarURL(null == r ? void 0 : r.guildId, 80), d = (0, n.useColorValue)(i.Color.PRIMARY_530).hex, [c, P] = (0, o.useAvatarColors)(f, d, !1);
                if (!(null == r ? void 0 : r.canEditThemes) && !u) return [null, null];
                let E = null == r ? void 0 : r.getPreviewThemeColors(s),
                    T = null !== (t = null == E ? void 0 : E[0]) && void 0 !== t ? t : (0, l.hex2int)(c),
                    p = null !== (a = null == E ? void 0 : E[1]) && void 0 !== a ? a : (0, l.hex2int)(P);
                return [T, p]
            }
        },
        289918: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return J
                }
            });
            var l, o, n = t("37983"),
                i = t("884691"),
                a = t("414456"),
                s = t.n(a),
                u = t("509043"),
                f = t("446674"),
                d = t("669491"),
                c = t("77078"),
                P = t("79112"),
                E = t("812204"),
                T = t("685665"),
                p = t("462274"),
                O = t("618017"),
                _ = t("190045"),
                U = t("335031"),
                h = t("252063"),
                v = t("38766"),
                m = t("845579"),
                S = t("271938"),
                I = t("42203"),
                y = t("305961"),
                A = t("18494"),
                N = t("697218"),
                L = t("471671"),
                g = t("275623"),
                C = t("945330"),
                R = t("474571"),
                M = t("216422"),
                D = t("987772"),
                b = t("956089"),
                B = t("599110"),
                x = t("315102"),
                w = t("719923"),
                H = t("713135"),
                F = t("581295"),
                k = t("878569"),
                G = t("236100"),
                j = t("590456"),
                W = t("49111"),
                z = t("646718"),
                Y = t("782340"),
                X = t("220817");
            (l = o || (o = {}))[l.SHOULD_LOAD = 0] = "SHOULD_LOAD", l[l.LOADING = 1] = "LOADING", l[l.COMPLETE = 2] = "COMPLETE";
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
                    shown: l,
                    onClick: o
                } = e, a = (0, f.useStateFromStores)([N.default], () => {
                    let e = N.default.getCurrentUser();
                    return w.default.canUsePremiumProfileCustomization(e)
                }), u = i.useRef(!1), {
                    analyticsLocations: d
                } = (0, T.default)(E.default.BADGE);
                return i.useEffect(() => {
                    l && !u.current && (u.current = !0, B.default.track(W.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: z.PremiumUpsellTypes.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
                        location: {
                            page: Z[r],
                            section: W.AnalyticsSections.NITRO_BANNER,
                            object: W.AnalyticsObjects.NITRO_BADGE
                        },
                        location_stack: d
                    }))
                }, [d, l, r]), (0, n.jsx)(c.Tooltip, {
                    tooltipContentClassName: X.premiumIconTooltipContent,
                    text: a ? Y.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
                    children: e => (0, n.jsx)(c.Clickable, {
                        ...e,
                        onClick: a ? void 0 : () => {
                            var e;
                            e = d, (0, c.openModalLazy)(async () => {
                                let {
                                    default: r
                                } = await t.el("292890").then(t.bind(t, "292890"));
                                return t => {
                                    let {
                                        onClose: l,
                                        ...o
                                    } = t;
                                    return (0, n.jsx)(r, {
                                        analyticsLocations: e,
                                        title: Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
                                        description: Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
                                            onAndMoreWithPremiumClick: () => {
                                                l(), P.default.open(W.UserSettingsSections.PREMIUM, null, {
                                                    analyticsLocations: e
                                                })
                                            }
                                        }),
                                        onClose: l,
                                        ...o
                                    })
                                }
                            }), null == o || o()
                        },
                        className: s(X.premiumIconWrapper, {
                            [X.visible]: l,
                            [X.clickable]: !a
                        }),
                        children: (0, n.jsx)(b.TextBadge, {
                            color: "rgba(32, 34, 37, 0.8)",
                            text: (0, n.jsx)(M.default, {
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
                    profileType: t,
                    profileLabel: l,
                    icon: o,
                    ...i
                } = e, a = V[t], s = "pencil" === o ? D.default : R.default;
                return (0, n.jsx)(c.Clickable, {
                    ...i,
                    "aria-label": l,
                    className: r ? X.pencilContainerDark : X.pencilContainer,
                    children: (0, n.jsx)(c.Tooltip, {
                        text: l,
                        children: e => (0, n.jsx)(s, {
                            ...e,
                            width: a,
                            height: a,
                            className: X.editIcon
                        })
                    })
                })
            }

            function J(e) {
                var r, t, l;
                let {
                    user: a,
                    displayProfile: P,
                    bannerSrc: E,
                    onClose: T,
                    guildId: N,
                    profileType: R = j.UserProfileTypes.POPOUT,
                    allowEdit: M = !0,
                    showPremiumBadgeUpsell: D = !0,
                    isHovering: b,
                    animateOnHover: B
                } = e, [V, Z] = i.useState((null == P ? void 0 : P.banner) == null ? o.COMPLETE : o.SHOULD_LOAD), J = (0, f.useStateFromStores)([y.default], () => y.default.getGuild(N)), Q = (0, f.useStateFromStores)([S.default], () => S.default.getId()), $ = Q === a.id && M || a.isClyde() && null != J && (0, O.canEditClydeAIProfile)(J), ee = w.default.isPremiumAtLeast(null == P ? void 0 : P.premiumType, z.PremiumTypes.TIER_2), [er, et] = i.useState(!1), el = (0, f.useStateFromStores)([L.default], () => L.default.isFocused()), eo = m.GifAutoPlay.getSetting(), en = B || !eo ? er : el, ei = (0, c.useToken)(d.default.unsafe_rawColors.PRIMARY_800).hex(), ea = (0, c.getAvatarSize)(c.AvatarSizes.SIZE_80), es = (0, u.hex2int)((0, p.default)(a.getAvatarURL(N, ea), ei, !1)), eu = (0, U.default)(null !== (r = null == P ? void 0 : P.primaryColor) && void 0 !== r ? r : es).hsl, ef = (0, k.getUserBannerSize)(R), ed = null != E ? E : null == P ? void 0 : P.getBannerURL({
                    size: ef,
                    canAnimate: en
                }), ec = null != ed, eP = (0, f.useStateFromStores)([H.default], () => H.default.getUserProfile(a.id)), eE = I.default.getChannel(A.default.getChannelId()), {
                    appsInGDMEnabled: eT,
                    availableApplications: ep
                } = (0, h.usePrivateChannelIntegrationState)({
                    channelId: null !== (t = null == eE ? void 0 : eE.id) && void 0 !== t ? t : ""
                }), eO = null == eP ? void 0 : eP.application, e_ = eT && null != ep.find(e => e.id === (null == eO ? void 0 : eO.id));
                if (ec && (ee || a.isClyde()) && V === o.SHOULD_LOAD) {
                    Z(o.LOADING);
                    let e = new Image;
                    e.src = ed, e.onload = () => Z(o.COMPLETE)
                }
                i.useEffect(() => {
                    if (eo || !ee) return;
                    let e = null != E ? E : null == P ? void 0 : P.getBannerURL({
                        size: ef,
                        canAnimate: !0
                    });
                    if (null == e) return;
                    let r = new Image;
                    r.src = e
                }, [eo, ee, E, P, ef]);
                let eU = (0, v.default)({
                        analyticsLocation: {
                            page: W.AnalyticsPages.USER_POPOUT,
                            section: W.AnalyticsSections.PROFILE_POPOUT
                        }
                    }),
                    eh = (null == P ? void 0 : P.profileEffectID) != null;
                return (0, n.jsx)(F.default, {
                    isPremium: ee,
                    hasThemeColors: null !== (l = null == P ? void 0 : P.canEditThemes) && void 0 !== l && l,
                    profileType: R,
                    hasBanner: ec,
                    hasProfileEffect: eh,
                    children: (0, n.jsxs)("div", {
                        className: s(X.banner, (0, k.getUserBannerStyles)({
                            profileType: R,
                            user: {
                                hasBanner: ec,
                                isPremium: ee,
                                hasProfileEffect: eh
                            }
                        }), {
                            [X.reducedMotion]: !eo
                        }),
                        onMouseMove: () => et(!0),
                        onMouseLeave: () => et(!1),
                        style: {
                            backgroundImage: ec && ee ? "url(".concat(ed, ")") : void 0,
                            backgroundColor: V !== o.COMPLETE ? d.default.unsafe_rawColors.PRIMARY_800.css : eu
                        },
                        children: [$ ? null != J || a.isClyde() ? null != J && a.isClyde() && (0, O.canEditClydeAIProfile)(J) ? (0, n.jsx)(q, {
                            profileType: R,
                            profileLabel: Y.default.Messages.CLYDE_SETTINGS,
                            icon: "gear",
                            onClick: () => {
                                null == T || T(), (0, _.default)(J.id)
                            }
                        }) : null == J ? null : (0, n.jsx)(c.Popout, {
                            spacing: 6,
                            position: "bottom",
                            renderPopout: e => {
                                let {
                                    closePopout: r
                                } = e;
                                return (0, n.jsx)(G.default, {
                                    onClose: r,
                                    onSelect: T,
                                    guild: J
                                })
                            },
                            children: e => (0, n.jsx)(q, {
                                darkenOnHover: eh && b,
                                profileLabel: Y.default.Messages.EDIT_PROFILE,
                                icon: "pencil",
                                ...e,
                                profileType: R
                            })
                        }) : (0, n.jsx)(q, {
                            darkenOnHover: eh && b,
                            profileType: R,
                            profileLabel: Y.default.Messages.EDIT_PROFILE,
                            icon: "pencil",
                            onClick: () => {
                                null == T || T(), eU()
                            }
                        }) : (() => {
                            let e = D && ec && R !== j.UserProfileTypes.SETTINGS;
                            return e ? (0, n.jsx)(K, {
                                type: R,
                                shown: void 0 === b ? er : b,
                                onClick: T
                            }) : null
                        })(), e_ ? R !== j.UserProfileTypes.MODAL ? null : (0, n.jsx)(c.Clickable, {
                            onClick: T,
                            "aria-label": Y.default.Messages.BACK,
                            className: X.pencilContainer,
                            children: (0, n.jsx)(c.Tooltip, {
                                text: Y.default.Messages.BACK,
                                children: e => (0, n.jsx)(C.default, {
                                    ...e,
                                    className: X.closeIcon,
                                    color: "white"
                                })
                            })
                        }) : null, !eo && (0, x.isAnimatedImageURL)(ed) && (0, n.jsx)(g.default, {
                            className: X.gifTag
                        })]
                    })
                })
            }
        },
        581295: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return T
                }
            });
            var l = t("37983");
            t("884691");
            var o = t("506838"),
                n = t("769846"),
                i = t("77078"),
                a = t("606292"),
                s = t("476765"),
                u = t("159885"),
                f = t("878569"),
                d = t("590456"),
                c = t("573135"),
                P = t("423713");
            let E = {
                [d.UserProfileTypes.POPOUT]: i.AvatarSizes.SIZE_80,
                [d.UserProfileTypes.MODAL]: i.AvatarSizes.SIZE_120,
                [d.UserProfileTypes.SETTINGS]: i.AvatarSizes.SIZE_80,
                [d.UserProfileTypes.PANEL]: i.AvatarSizes.SIZE_80,
                [d.UserProfileTypes.POMELO_POPOUT]: i.AvatarSizes.SIZE_80,
                [d.UserProfileTypes.CANCEL_MODAL]: i.AvatarSizes.SIZE_56
            };

            function T(e) {
                let {
                    children: r,
                    profileType: t,
                    isPremium: T,
                    hasThemeColors: p,
                    hasBanner: O,
                    forProfileEffectModal: _,
                    hasProfileEffect: U = !1
                } = e, h = E[t], v = (0, s.useUID)(), m = function(e) {
                    let {
                        profileType: r,
                        avatarSize: t,
                        hasBanner: l,
                        isPremium: s,
                        hasThemeColors: P,
                        hasProfileEffect: E
                    } = e, T = c.AvatarDecorationBorderSizes[t];
                    if (null == T) throw Error("Unsupported avatar size for banner mask");
                    let p = (0, a.getDecorationSizeForAvatarSize)(t),
                        {
                            size: O,
                            stroke: _
                        } = (0, i.getAvatarSpecs)(t),
                        U = {
                            avatarSize: O,
                            avatarBorderSize: _,
                            avatarDecorationSize: p,
                            avatarDecorationBorderSize: T,
                            avatarDecorationOffsetY: -(p + 2 * T) / 2,
                            bannerHeight: (0, f.getUserBannerHeight)({
                                profileType: r,
                                user: {
                                    hasBanner: l,
                                    isPremium: s,
                                    hasProfileEffect: E
                                }
                            })
                        };
                    return (0, o.match)(r).with(d.UserProfileTypes.POPOUT, () => {
                        let e = P ? (0, u.cssValueToNumber)(n.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING) : 0;
                        return {
                            ...U,
                            bannerWidth: (0, u.cssValueToNumber)(n.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
                            offsetX: 16 - e,
                            offsetY: 4 + e,
                            avatarDecorationOffsetX: 4
                        }
                    }).with(d.UserProfileTypes.MODAL, () => ({
                        ...U,
                        bannerWidth: (0, f.getUserBannerSize)(d.UserProfileTypes.MODAL),
                        offsetX: 14,
                        offsetY: 5,
                        avatarDecorationOffsetX: 2
                    })).with(d.UserProfileTypes.SETTINGS, () => ({
                        ...U,
                        bannerWidth: 660,
                        offsetX: 16,
                        offsetY: -22,
                        avatarDecorationOffsetX: 8
                    })).with(d.UserProfileTypes.PANEL, () => {
                        let e = (0, u.cssValueToNumber)(n.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING);
                        return {
                            ...U,
                            bannerWidth: (0, u.cssValueToNumber)(n.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
                            offsetX: 16 - e,
                            offsetY: 4 + e,
                            avatarDecorationOffsetX: 4
                        }
                    }).with(d.UserProfileTypes.POMELO_POPOUT, () => ({
                        ...U,
                        bannerWidth: (0, f.getUserBannerSize)(d.UserProfileTypes.POMELO_POPOUT),
                        offsetX: 20,
                        offsetY: -20,
                        avatarDecorationOffsetX: 10
                    })).with(d.UserProfileTypes.CANCEL_MODAL, () => ({
                        ...U,
                        bannerWidth: (0, f.getUserBannerSize)(d.UserProfileTypes.CANCEL_MODAL),
                        offsetX: 8,
                        offsetY: 2,
                        avatarDecorationOffsetX: 8
                    })).exhaustive()
                }({
                    profileType: t,
                    avatarSize: h,
                    hasBanner: O,
                    isPremium: T,
                    hasThemeColors: p,
                    hasProfileEffect: U
                });
                _ && (m.bannerWidth = (0, u.cssValueToNumber)(n.default.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH));
                let S = m.avatarSize / 2 + m.avatarBorderSize,
                    I = m.bannerHeight - m.offsetY;
                return (0, l.jsxs)("svg", {
                    className: P.bannerSVGWrapper,
                    viewBox: "0 0 ".concat(m.bannerWidth, " ").concat(m.bannerHeight),
                    style: {
                        minWidth: m.bannerWidth,
                        minHeight: m.bannerHeight
                    },
                    children: [(0, l.jsxs)("mask", {
                        id: v,
                        children: [(0, l.jsx)("rect", {
                            fill: "white",
                            x: "0",
                            y: "0",
                            width: "100%",
                            height: "100%"
                        }), (0, l.jsx)("circle", {
                            fill: "black",
                            cx: m.offsetX + S,
                            cy: I,
                            r: S
                        })]
                    }), (0, l.jsx)("foreignObject", {
                        x: "0",
                        y: "0",
                        width: "100%",
                        height: "100%",
                        overflow: "visible",
                        mask: "url(#".concat(v, ")"),
                        children: r
                    })]
                })
            }
        },
        878569: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                buildGetPremiumUserBannerStyles: function() {
                    return s
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
            var l = t("506838"),
                o = t("617258"),
                n = t("769846"),
                i = t("590456"),
                a = t("220817");
            let s = e => r => {
                    if (r.hasBanner && r.isPremium || r.hasProfileEffect) return e.premiumUserWithBanner;
                    if (r.isPremium) {
                        var t;
                        return null !== (t = e.premiumUserWithoutBanner) && void 0 !== t ? t : e.default
                    }
                    return e.default
                },
                u = e => {
                    let {
                        profileType: r,
                        user: t
                    } = e;
                    return (0, l.match)(r).with(i.UserProfileTypes.POPOUT, i.UserProfileTypes.POMELO_POPOUT, () => {
                        let e = s({
                            premiumUserWithBanner: a.popoutBannerPremium,
                            premiumUserWithoutBanner: a.popoutNoBannerPremium,
                            default: a.popoutBanner
                        });
                        return e(t)
                    }).with(i.UserProfileTypes.MODAL, () => {
                        let e = s({
                            premiumUserWithBanner: a.profileBannerPremium,
                            premiumUserWithoutBanner: a.profileBanner,
                            default: a.profileBanner
                        });
                        return e(t)
                    }).with(i.UserProfileTypes.SETTINGS, () => a.settingsBanner).with(i.UserProfileTypes.PANEL, () => a.panelBanner).with(i.UserProfileTypes.CANCEL_MODAL, () => a.cancelModalBanner).exhaustive()
                },
                f = e => {
                    let {
                        profileType: r,
                        user: t
                    } = e, a = (0, l.match)(r).with(i.UserProfileTypes.POPOUT, () => {
                        let e = s({
                            premiumUserWithBanner: n.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT,
                            premiumUserWithoutBanner: n.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT,
                            default: n.default.USER_BANNER_BANNER_HEIGHT_POPOUT
                        });
                        return e(t)
                    }).with(i.UserProfileTypes.MODAL, () => {
                        let e = s({
                            premiumUserWithBanner: n.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE,
                            premiumUserWithoutBanner: n.default.USER_BANNER_BANNER_HEIGHT_PROFILE,
                            default: n.default.USER_BANNER_BANNER_HEIGHT_PROFILE
                        });
                        return e(t)
                    }).with(i.UserProfileTypes.POMELO_POPOUT, () => n.default.USER_BANNER_BANNER_HEIGHT_POMELO).with(i.UserProfileTypes.SETTINGS, () => n.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS).with(i.UserProfileTypes.PANEL, () => n.default.USER_BANNER_BANNER_HEIGHT_PANEL).with(i.UserProfileTypes.CANCEL_MODAL, () => n.default.USER_BANNER_CANCEL_MODAL_HEIGHT).exhaustive();
                    return (0, o.cssValueToNumber)(a)
                },
                d = Object.freeze({
                    [i.UserProfileTypes.POPOUT]: 480,
                    [i.UserProfileTypes.PANEL]: 480,
                    [i.UserProfileTypes.MODAL]: 600,
                    [i.UserProfileTypes.SETTINGS]: 600,
                    [i.UserProfileTypes.POMELO_POPOUT]: 432,
                    [i.UserProfileTypes.CANCEL_MODAL]: 172
                }),
                c = e => d[e]
        },
        430312: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                UserProfileContext: function() {
                    return P
                },
                default: function() {
                    return T
                }
            });
            var l = t("37983"),
                o = t("884691"),
                n = t("414456"),
                i = t.n(n),
                a = t("506838"),
                s = t("217513"),
                u = t("906889"),
                f = t("590456"),
                d = t("200932"),
                c = t("677055");
            let P = o.createContext({
                profileType: null,
                profileTheme: null
            });

            function E(e) {
                var r, t;
                let {
                    user: n,
                    guildId: E,
                    profileType: T,
                    className: p,
                    pendingThemeColors: O,
                    useDefaultClientTheme: _,
                    children: U,
                    forceShowPremium: h = !1,
                    showOutOfBoundaryComponents: v = !1
                } = e, m = o.useRef(null), S = (0, s.default)(n.id, E), {
                    profileTheme: I
                } = (0, u.default)(n, S, {
                    themeElementRef: m,
                    pendingThemeColors: O,
                    isPreview: h,
                    useDefaultClientTheme: _
                }), y = (null == S ? void 0 : S.canEditThemes) || h, A = o.useMemo(() => ({
                    profileType: T,
                    profileTheme: I
                }), [T, I]);
                return (0, l.jsx)("div", {
                    ref: m,
                    className: i((r = T, (0, a.match)(r).with(f.UserProfileTypes.POPOUT, f.UserProfileTypes.SETTINGS, f.UserProfileTypes.CANCEL_MODAL, () => c.userPopoutOuter).with(f.UserProfileTypes.MODAL, () => c.userProfileModalOuter).with(f.UserProfileTypes.PANEL, () => c.userPanelOuter).with(f.UserProfileTypes.CARD, () => c.userCardOuter).exhaustive()), y ? c.userProfileOuterThemed : c.userProfileOuterUnthemed, d.profileColors, v ? c.showOutOfBoundaryComponents : void 0, "theme-".concat(I), p),
                    children: (0, l.jsx)("div", {
                        className: i((t = T, (0, a.match)(t).with(f.UserProfileTypes.POPOUT, f.UserProfileTypes.SETTINGS, f.UserProfileTypes.CANCEL_MODAL, () => c.userPopoutInner).with(f.UserProfileTypes.MODAL, () => c.userProfileModalInner).with(f.UserProfileTypes.PANEL, () => c.userPanelInner).with(f.UserProfileTypes.CARD, () => c.userCardInner).exhaustive()), function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                r = arguments.length > 1 ? arguments[1] : void 0,
                                t = arguments.length > 2 ? arguments[2] : void 0;
                            return (0, a.match)({
                                profileType: t,
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
                        children: (0, l.jsx)(P.Provider, {
                            value: A,
                            children: U
                        })
                    })
                })
            }
            E.Inner = function(e) {
                var r;
                let {
                    className: t,
                    children: n
                } = e, {
                    profileType: s
                } = o.useContext(P);
                return (0, l.jsx)("div", {
                    className: i((r = s, (0, a.match)(r).with(f.UserProfileTypes.POPOUT, f.UserProfileTypes.SETTINGS, () => c.userPopoutOverlayBackground).with(f.UserProfileTypes.MODAL, () => c.userProfileModalOverlayBackground).with(f.UserProfileTypes.PANEL, () => c.userPanelOverlayBackground).otherwise(() => c.overlayBackground)), t),
                    children: n
                })
            };
            var T = E
        },
        236100: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return d
                }
            });
            var l = t("37983");
            t("884691");
            var o = t("77078"),
                n = t("38766"),
                i = t("49111"),
                a = t("782340"),
                s = t("364547");
            let u = {
                    page: i.AnalyticsPages.GUILD_CHANNEL,
                    section: i.AnalyticsSections.PROFILE_POPOUT,
                    object: i.AnalyticsObjects.EDIT_PER_SERVER_IDENTITY
                },
                f = {
                    page: i.AnalyticsPages.USER_POPOUT,
                    section: i.AnalyticsSections.PROFILE_POPOUT
                };

            function d(e) {
                let {
                    onSelect: r,
                    onClose: t,
                    guild: i
                } = e, d = (0, n.default)({
                    guild: i,
                    analyticsLocation: u
                }), c = (0, n.default)({
                    analyticsLocation: f
                });
                return (0, l.jsxs)(o.Menu, {
                    className: s.popoutMenu,
                    onSelect: r,
                    navId: "edit-profile-popout",
                    onClose: t,
                    "aria-label": a.default.Messages.PROFILE_ACTIONS_MENU_LABEL,
                    children: [(0, l.jsx)(o.MenuItem, {
                        id: "edit-server-profile",
                        label: a.default.Messages.CHANGE_IDENTITY,
                        subtext: a.default.Messages.CHANGE_IDENTITY_SERVER_PROFILE_MENU_HELP,
                        action: () => d()
                    }), (0, l.jsx)(o.MenuItem, {
                        id: "edit-default-profile",
                        label: a.default.Messages.USER_SETTINGS_EDIT_USER_PROFILE,
                        subtext: a.default.Messages.USER_PROFILE_MENU_HELP,
                        action: () => c()
                    })]
                })
            }
        },
        906889: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return c
                }
            });
            var l = t("884691"),
                o = t("509043"),
                n = t("446674"),
                i = t("841098"),
                a = t("206230"),
                s = t("388491"),
                u = t("528438");
            let f = ["--profile-gradient-primary-color", "--profile-gradient-secondary-color", "--profile-gradient-button-color", "--profile-gradient-overlay-color", "--profile-body-background-color", "--profile-body-divider-color", "--profile-avatar-border-color", "--profile-message-input-border-color", "--profile-note-background-color", "--profile-body-background-hover", "--account-profile-modal-list-item-hover", "--profile-role-pill-background-color", "--profile-role-pill-border-color"];

            function d(e, r, t) {
                var l;
                null == e || null === (l = e.current) || void 0 === l || l.style.setProperty(r, null != t ? t : null)
            }

            function c(e, r) {
                let {
                    themeElementRef: t,
                    pendingThemeColors: c,
                    isPreview: P,
                    useDefaultClientTheme: E
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, [T, p] = (0, u.default)(e, r, {
                    pendingThemeColors: c,
                    isPreview: P
                }), [O, _, U] = (0, n.useStateFromStoresArray)([a.default], () => [a.default.desaturateUserColors, a.default.saturation, a.default.syncProfileThemeWithUserTheme]), h = (0, i.default)(), v = l.useCallback(() => U || E ? h : (0, s.getProfileTheme)(T), [E, U, h, T]), [m, S] = l.useState(v()), I = (0, s.useProfileThemeValues)(m), y = (0, s.useDividerColor)(m, T), A = (0, s.useMessageInputBorderColor)(m, p), N = l.useCallback((e, r) => (0, o.int2hsl)(e, O, null, r), [O]);
                l.useEffect(() => {
                    S(v())
                }, [T, U, h, E, v]);
                let L = (0, s.useAvatarBorderColor)(m, T, U),
                    g = null != L ? (0, o.int2hsl)(L, !1, O ? _ : null) : null,
                    C = e => f.forEach(r => {
                        e.style.removeProperty(r)
                    });
                return l.useEffect(() => {
                    if (null != T && null != p && null != m && null != L && null != y && null != A) {
                        let e = U && m !== h ? null == I ? void 0 : I.overlaySyncedWithUserTheme : null == I ? void 0 : I.overlay;
                        d(t, "--profile-gradient-primary-color", N(T)), d(t, "--profile-gradient-secondary-color", N(p)), d(t, "--profile-gradient-button-color", N((0, s.calculateButtonColor)(T))), d(t, "--profile-gradient-overlay-color", e), d(t, "--profile-body-background-color", null == I ? void 0 : I.sectionBox), d(t, "--profile-body-background-hover", null == I ? void 0 : I.profileBodyBackgroundHover), d(t, "--profile-body-divider-color", N(y, null == I ? void 0 : I.dividerOpacity)), d(t, "--profile-avatar-border-color", N(L)), d(t, "--profile-message-input-border-color", N(A)), d(t, "--profile-note-background-color", null == I ? void 0 : I.noteBackgroundColor), d(t, "--profile-role-pill-background-color", null == I ? void 0 : I.rolePillBackgroundColor), d(t, "--profile-role-pill-border-color", null == I ? void 0 : I.rolePillBorderColor)
                    } else(null == t ? void 0 : t.current) != null && C(null == t ? void 0 : t.current)
                }, [T, p, L, m, h, t, N, U, y, null == I ? void 0 : I.overlaySyncedWithUserTheme, null == I ? void 0 : I.overlay, null == I ? void 0 : I.sectionBox, null == I ? void 0 : I.profileBodyBackgroundHover, null == I ? void 0 : I.dividerOpacity, null == I ? void 0 : I.noteBackgroundColor, null == I ? void 0 : I.rolePillBackgroundColor, null == I ? void 0 : I.rolePillBorderColor, A]), {
                    profileTheme: null != m ? m : h,
                    primaryProfileColor: T,
                    avatarBorderColor: g
                }
            }
        }
    }
]);
//# sourceMappingURL=4007c0ff76094d1520fc.js.map