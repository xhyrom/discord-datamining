(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67929"], {
        618017: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                canEditClydeAIProfile: function() {
                    return i
                }
            });
            var l = t("957255"),
                n = t("49111");

            function i(e) {
                return null != e && l.default.can(n.Permissions.USE_CLYDE_AI, e)
            }
        },
        190045: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return s
                }
            });
            var l = t("37983");
            t("884691");
            var n = t("77078"),
                i = t("599110"),
                o = t("49111");

            function s(e) {
                i.default.track(o.AnalyticEvents.OPEN_MODAL, {
                    type: "Edit Clyde Profile",
                    location_page: "Profile Popout",
                    guild_id: e
                }), (0, n.openModalLazy)(async () => {
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
        335031: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return u
                }
            });
            var l = t("884691"),
                n = t("656280"),
                i = t.n(n),
                o = t("509043"),
                s = t("446674"),
                a = t("206230"),
                u = e => {
                    let r = (0, s.useStateFromStores)([a.default], () => a.default.desaturateUserColors ? a.default.saturation : 1),
                        t = (0, l.useMemo)(() => {
                            let {
                                h: t,
                                s: l,
                                l: n
                            } = i((0, o.int2hex)(e)).toHsl(), s = i({
                                h: t,
                                s: l * r,
                                l: n
                            });
                            return {
                                hex: s.toHexString(),
                                hsl: s.toHslString()
                            }
                        }, [e, r]);
                    return t
                }
        },
        154889: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                discountOfferHasTier: function() {
                    return f
                },
                usePremiumDiscountOffer: function() {
                    return d
                }
            }), t("222007");
            var l = t("884691"),
                n = t("446674"),
                i = t("862337"),
                o = t("697218"),
                s = t("340412"),
                a = t("719923"),
                u = t("646718");

            function C(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function f(e, r) {
                var t;
                if (null == e) return !1;
                let l = new Set(null === (t = e.discount) || void 0 === t ? void 0 : t.plan_ids.map(e => u.SubscriptionPlanInfo[e].skuId));
                return l.has(r)
            }

            function d() {
                let e = (0, n.useStateFromStores)([s.default], () => s.default.getUserDiscount(u.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID)),
                    [r, t] = l.useState(C(e)),
                    f = (0, n.useStateFromStores)([o.default], () => (0, a.isPremium)(o.default.getCurrentUser()));
                return l.useEffect(() => {
                    if (null == e || null == e.expires_at) return;
                    let l = new i.Timeout,
                        n = () => {
                            let i = null != e.expires_at ? Date.parse(e.expires_at) - Date.now() : 0;
                            null == l || l.start(i, () => {
                                !r && C(e) ? t(!0) : n()
                            })
                        };
                    return n(), () => l.stop()
                }, [r, e]), r || f ? null : e
            }
        },
        528438: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return s
                }
            }), t("222007");
            var l = t("509043"),
                n = t("462274"),
                i = t("449918"),
                o = t("49111");

            function s(e, r) {
                var t, s;
                let {
                    pendingThemeColors: a,
                    isPreview: u
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, C = null == e ? void 0 : e.getAvatarURL(null == r ? void 0 : r.guildId, 80), f = (0, i.useColorValue)(o.Color.PRIMARY_530).hex, [d, c] = (0, n.useAvatarColors)(C, f, !1);
                if (!(null == r ? void 0 : r.canEditThemes) && !u) return [null, null];
                let P = null == r ? void 0 : r.getPreviewThemeColors(a),
                    E = null !== (t = null == P ? void 0 : P[0]) && void 0 !== t ? t : (0, l.hex2int)(d),
                    T = null !== (s = null == P ? void 0 : P[1]) && void 0 !== s ? s : (0, l.hex2int)(c);
                return [E, T]
            }
        },
        289918: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return J
                }
            }), t("222007");
            var l, n, i = t("37983"),
                o = t("884691"),
                s = t("414456"),
                a = t.n(s),
                u = t("509043"),
                C = t("446674"),
                f = t("669491"),
                d = t("77078"),
                c = t("79112"),
                P = t("812204"),
                E = t("685665"),
                T = t("462274"),
                p = t("618017"),
                L = t("190045"),
                O = t("335031"),
                _ = t("252063"),
                U = t("38766"),
                h = t("845579"),
                v = t("271938"),
                m = t("42203"),
                S = t("305961"),
                I = t("18494"),
                y = t("697218"),
                N = t("471671"),
                A = t("275623"),
                g = t("945330"),
                M = t("474571"),
                R = t("216422"),
                H = t("987772"),
                B = t("956089"),
                D = t("599110"),
                x = t("315102"),
                b = t("719923"),
                w = t("713135"),
                j = t("581295"),
                k = t("878569"),
                F = t("236100"),
                G = t("590456"),
                W = t("49111"),
                z = t("646718"),
                Z = t("782340"),
                Y = t("220817");
            (n = l || (l = {}))[n.SHOULD_LOAD = 0] = "SHOULD_LOAD", n[n.LOADING = 1] = "LOADING", n[n.COMPLETE = 2] = "COMPLETE";
            let V = {
                    [G.UserProfileTypes.POPOUT]: 18,
                    [G.UserProfileTypes.MODAL]: 24,
                    [G.UserProfileTypes.SETTINGS]: 0,
                    [G.UserProfileTypes.PANEL]: 18,
                    [G.UserProfileTypes.POMELO_POPOUT]: 18,
                    [G.UserProfileTypes.CANCEL_MODAL]: 0
                },
                X = {
                    [G.UserProfileTypes.MODAL]: W.AnalyticsPages.USER_PROFILE,
                    [G.UserProfileTypes.POPOUT]: W.AnalyticsPages.USER_POPOUT,
                    [G.UserProfileTypes.SETTINGS]: W.AnalyticsPages.USER_POPOUT,
                    [G.UserProfileTypes.PANEL]: W.AnalyticsPages.DM_CHANNEL,
                    [G.UserProfileTypes.POMELO_POPOUT]: W.AnalyticsPages.POMELO_POPOUT,
                    [G.UserProfileTypes.CANCEL_MODAL]: W.AnalyticsPages.USER_POPOUT
                };

            function K(e) {
                let {
                    type: r,
                    shown: l,
                    onClick: n
                } = e, s = (0, C.useStateFromStores)([y.default], () => {
                    let e = y.default.getCurrentUser();
                    return b.default.canUsePremiumProfileCustomization(e)
                }), u = o.useRef(!1), {
                    analyticsLocations: f
                } = (0, E.default)(P.default.BADGE);
                return o.useEffect(() => {
                    l && !u.current && (u.current = !0, D.default.track(W.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: z.PremiumUpsellTypes.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
                        location: {
                            page: X[r],
                            section: W.AnalyticsSections.NITRO_BANNER,
                            object: W.AnalyticsObjects.NITRO_BADGE
                        },
                        location_stack: f
                    }))
                }, [f, l, r]), (0, i.jsx)(d.Tooltip, {
                    tooltipContentClassName: Y.premiumIconTooltipContent,
                    text: s ? Z.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : Z.default.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
                    children: e => (0, i.jsx)(d.Clickable, {
                        ...e,
                        onClick: s ? void 0 : () => {
                            var e;
                            e = f, (0, d.openModalLazy)(async () => {
                                let {
                                    default: r
                                } = await t.el("292890").then(t.bind(t, "292890"));
                                return t => {
                                    let {
                                        onClose: l,
                                        ...n
                                    } = t;
                                    return (0, i.jsx)(r, {
                                        analyticsLocations: e,
                                        title: Z.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
                                        description: Z.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
                                            onAndMoreWithPremiumClick: () => {
                                                l(), c.default.open(W.UserSettingsSections.PREMIUM, null, {
                                                    analyticsLocations: e
                                                })
                                            }
                                        }),
                                        onClose: l,
                                        ...n
                                    })
                                }
                            }), null == n || n()
                        },
                        className: a(Y.premiumIconWrapper, {
                            [Y.visible]: l,
                            [Y.clickable]: !s
                        }),
                        children: (0, i.jsx)(B.TextBadge, {
                            color: "rgba(32, 34, 37, 0.8)",
                            text: (0, i.jsx)(R.default, {
                                width: 16,
                                height: 16,
                                className: Y.premiumIcon
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
                    icon: n,
                    ...o
                } = e, s = V[t], a = "pencil" === n ? H.default : M.default;
                return (0, i.jsx)(d.Clickable, {
                    ...o,
                    "aria-label": l,
                    className: r ? Y.pencilContainerDark : Y.pencilContainer,
                    children: (0, i.jsx)(d.Tooltip, {
                        text: l,
                        children: e => (0, i.jsx)(a, {
                            ...e,
                            width: s,
                            height: s,
                            className: Y.editIcon
                        })
                    })
                })
            }

            function J(e) {
                var r, t, n;
                let {
                    user: s,
                    displayProfile: c,
                    bannerSrc: P,
                    onClose: E,
                    guildId: y,
                    profileType: M = G.UserProfileTypes.POPOUT,
                    allowEdit: R = !0,
                    showPremiumBadgeUpsell: H = !0,
                    isHovering: B,
                    animateOnHover: D
                } = e, [V, X] = o.useState((null == c ? void 0 : c.banner) == null ? l.COMPLETE : l.SHOULD_LOAD), J = (0, C.useStateFromStores)([S.default], () => S.default.getGuild(y)), Q = (0, C.useStateFromStores)([v.default], () => v.default.getId()), $ = Q === s.id && R || s.isClyde() && null != J && (0, p.canEditClydeAIProfile)(J), ee = b.default.isPremiumAtLeast(null == c ? void 0 : c.premiumType, z.PremiumTypes.TIER_2), [er, et] = o.useState(!1), el = (0, C.useStateFromStores)([N.default], () => N.default.isFocused()), en = h.GifAutoPlay.getSetting(), ei = D || !en ? er : el, eo = (0, d.useToken)(f.default.unsafe_rawColors.PRIMARY_800).hex(), es = (0, d.getAvatarSize)(d.AvatarSizes.SIZE_80), ea = (0, u.hex2int)((0, T.default)(s.getAvatarURL(y, es), eo, !1)), eu = (0, O.default)(null !== (r = null == c ? void 0 : c.primaryColor) && void 0 !== r ? r : ea).hsl, eC = (0, k.getUserBannerSize)(M), ef = null != P ? P : null == c ? void 0 : c.getBannerURL({
                    size: eC,
                    canAnimate: ei
                }), ed = null != ef, ec = (0, C.useStateFromStores)([w.default], () => w.default.getUserProfile(s.id)), eP = m.default.getChannel(I.default.getChannelId()), {
                    appsInGDMEnabled: eE,
                    availableApplications: eT
                } = (0, _.usePrivateChannelIntegrationState)({
                    channelId: null !== (t = null == eP ? void 0 : eP.id) && void 0 !== t ? t : ""
                }), ep = null == ec ? void 0 : ec.application, eL = eE && null != eT.find(e => e.id === (null == ep ? void 0 : ep.id));
                if (ed && (ee || s.isClyde()) && V === l.SHOULD_LOAD) {
                    X(l.LOADING);
                    let e = new Image;
                    e.src = ef, e.onload = () => X(l.COMPLETE)
                }
                o.useEffect(() => {
                    if (en || !ee) return;
                    let e = null != P ? P : null == c ? void 0 : c.getBannerURL({
                        size: eC,
                        canAnimate: !0
                    });
                    if (null == e) return;
                    let r = new Image;
                    r.src = e
                }, [en, ee, P, c, eC]);
                let eO = (0, U.default)({
                        analyticsLocation: {
                            page: W.AnalyticsPages.USER_POPOUT,
                            section: W.AnalyticsSections.PROFILE_POPOUT
                        }
                    }),
                    e_ = (null == c ? void 0 : c.profileEffectID) != null;
                return (0, i.jsx)(j.default, {
                    isPremium: ee,
                    hasThemeColors: null !== (n = null == c ? void 0 : c.canEditThemes) && void 0 !== n && n,
                    profileType: M,
                    hasBanner: ed,
                    hasProfileEffect: e_,
                    children: (0, i.jsxs)("div", {
                        className: a(Y.banner, (0, k.getUserBannerStyles)({
                            profileType: M,
                            user: {
                                hasBanner: ed,
                                isPremium: ee,
                                hasProfileEffect: e_
                            }
                        }), {
                            [Y.reducedMotion]: !en
                        }),
                        onMouseMove: () => et(!0),
                        onMouseLeave: () => et(!1),
                        style: {
                            backgroundImage: ed && ee ? "url(".concat(ef, ")") : void 0,
                            backgroundColor: V !== l.COMPLETE ? f.default.unsafe_rawColors.PRIMARY_800.css : eu
                        },
                        children: [$ ? null != J || s.isClyde() ? null != J && s.isClyde() && (0, p.canEditClydeAIProfile)(J) ? (0, i.jsx)(q, {
                            profileType: M,
                            profileLabel: Z.default.Messages.CLYDE_SETTINGS,
                            icon: "gear",
                            onClick: () => {
                                null == E || E(), (0, L.default)(J.id)
                            }
                        }) : null == J ? null : (0, i.jsx)(d.Popout, {
                            spacing: 6,
                            position: "bottom",
                            renderPopout: e => {
                                let {
                                    closePopout: r
                                } = e;
                                return (0, i.jsx)(F.default, {
                                    onClose: r,
                                    onSelect: E,
                                    guild: J
                                })
                            },
                            children: e => (0, i.jsx)(q, {
                                darkenOnHover: e_ && B,
                                profileLabel: Z.default.Messages.EDIT_PROFILE,
                                icon: "pencil",
                                ...e,
                                profileType: M
                            })
                        }) : (0, i.jsx)(q, {
                            darkenOnHover: e_ && B,
                            profileType: M,
                            profileLabel: Z.default.Messages.EDIT_PROFILE,
                            icon: "pencil",
                            onClick: () => {
                                null == E || E(), eO()
                            }
                        }) : (() => {
                            let e = H && ed && M !== G.UserProfileTypes.SETTINGS;
                            return e ? (0, i.jsx)(K, {
                                type: M,
                                shown: void 0 === B ? er : B,
                                onClick: E
                            }) : null
                        })(), eL ? M !== G.UserProfileTypes.MODAL ? null : (0, i.jsx)(d.Clickable, {
                            onClick: E,
                            "aria-label": Z.default.Messages.BACK,
                            className: Y.pencilContainer,
                            children: (0, i.jsx)(d.Tooltip, {
                                text: Z.default.Messages.BACK,
                                children: e => (0, i.jsx)(g.default, {
                                    ...e,
                                    className: Y.closeIcon,
                                    color: "white"
                                })
                            })
                        }) : null, !en && (0, x.isAnimatedImageURL)(ef) && (0, i.jsx)(A.default, {
                            className: Y.gifTag
                        })]
                    })
                })
            }
        },
        581295: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return E
                }
            }), t("70102"), t("794252");
            var l = t("37983");
            t("884691");
            var n = t("506838"),
                i = t("769846"),
                o = t("77078"),
                s = t("606292"),
                a = t("476765"),
                u = t("159885"),
                C = t("878569"),
                f = t("590456"),
                d = t("573135"),
                c = t("423713");
            let P = {
                [f.UserProfileTypes.POPOUT]: o.AvatarSizes.SIZE_80,
                [f.UserProfileTypes.MODAL]: o.AvatarSizes.SIZE_120,
                [f.UserProfileTypes.SETTINGS]: o.AvatarSizes.SIZE_80,
                [f.UserProfileTypes.PANEL]: o.AvatarSizes.SIZE_80,
                [f.UserProfileTypes.POMELO_POPOUT]: o.AvatarSizes.SIZE_80,
                [f.UserProfileTypes.CANCEL_MODAL]: o.AvatarSizes.SIZE_56
            };

            function E(e) {
                let {
                    children: r,
                    profileType: t,
                    isPremium: E,
                    hasThemeColors: T,
                    hasBanner: p,
                    forProfileEffectModal: L,
                    hasProfileEffect: O = !1
                } = e, _ = P[t], U = (0, a.useUID)(), h = function(e) {
                    let {
                        profileType: r,
                        avatarSize: t,
                        hasBanner: l,
                        isPremium: a,
                        hasThemeColors: c,
                        hasProfileEffect: P
                    } = e, E = d.AvatarDecorationBorderSizes[t];
                    if (null == E) throw Error("Unsupported avatar size for banner mask");
                    let T = (0, s.getDecorationSizeForAvatarSize)(t),
                        {
                            size: p,
                            stroke: L
                        } = (0, o.getAvatarSpecs)(t),
                        O = {
                            avatarSize: p,
                            avatarBorderSize: L,
                            avatarDecorationSize: T,
                            avatarDecorationBorderSize: E,
                            avatarDecorationOffsetY: -(T + 2 * E) / 2,
                            bannerHeight: (0, C.getUserBannerHeight)({
                                profileType: r,
                                user: {
                                    hasBanner: l,
                                    isPremium: a,
                                    hasProfileEffect: P
                                }
                            })
                        };
                    return (0, n.match)(r).with(f.UserProfileTypes.POPOUT, () => {
                        let e = c ? (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING) : 0;
                        return {
                            ...O,
                            bannerWidth: (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
                            offsetX: 16 - e,
                            offsetY: 4 + e,
                            avatarDecorationOffsetX: 4
                        }
                    }).with(f.UserProfileTypes.MODAL, () => ({
                        ...O,
                        bannerWidth: (0, C.getUserBannerSize)(f.UserProfileTypes.MODAL),
                        offsetX: 14,
                        offsetY: 5,
                        avatarDecorationOffsetX: 2
                    })).with(f.UserProfileTypes.SETTINGS, () => ({
                        ...O,
                        bannerWidth: 660,
                        offsetX: 16,
                        offsetY: -22,
                        avatarDecorationOffsetX: 8
                    })).with(f.UserProfileTypes.PANEL, () => {
                        let e = (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING);
                        return {
                            ...O,
                            bannerWidth: (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
                            offsetX: 16 - e,
                            offsetY: 4 + e,
                            avatarDecorationOffsetX: 4
                        }
                    }).with(f.UserProfileTypes.POMELO_POPOUT, () => ({
                        ...O,
                        bannerWidth: (0, C.getUserBannerSize)(f.UserProfileTypes.POMELO_POPOUT),
                        offsetX: 20,
                        offsetY: -20,
                        avatarDecorationOffsetX: 10
                    })).with(f.UserProfileTypes.CANCEL_MODAL, () => ({
                        ...O,
                        bannerWidth: (0, C.getUserBannerSize)(f.UserProfileTypes.CANCEL_MODAL),
                        offsetX: 8,
                        offsetY: 2,
                        avatarDecorationOffsetX: 8
                    })).exhaustive()
                }({
                    profileType: t,
                    avatarSize: _,
                    hasBanner: p,
                    isPremium: E,
                    hasThemeColors: T,
                    hasProfileEffect: O
                });
                L && (h.bannerWidth = (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH));
                let v = h.avatarSize / 2 + h.avatarBorderSize,
                    m = h.bannerHeight - h.offsetY;
                return (0, l.jsxs)("svg", {
                    className: c.bannerSVGWrapper,
                    viewBox: "0 0 ".concat(h.bannerWidth, " ").concat(h.bannerHeight),
                    style: {
                        minWidth: h.bannerWidth,
                        minHeight: h.bannerHeight
                    },
                    children: [(0, l.jsxs)("mask", {
                        id: U,
                        children: [(0, l.jsx)("rect", {
                            fill: "white",
                            x: "0",
                            y: "0",
                            width: "100%",
                            height: "100%"
                        }), (0, l.jsx)("circle", {
                            fill: "black",
                            cx: h.offsetX + v,
                            cy: m,
                            r: v
                        })]
                    }), (0, l.jsx)("foreignObject", {
                        x: "0",
                        y: "0",
                        width: "100%",
                        height: "100%",
                        overflow: "visible",
                        mask: "url(#".concat(U, ")"),
                        children: r
                    })]
                })
            }
        },
        878569: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                buildGetPremiumUserBannerStyles: function() {
                    return a
                },
                getUserBannerStyles: function() {
                    return u
                },
                getUserBannerHeight: function() {
                    return C
                },
                getUserBannerSize: function() {
                    return d
                }
            }), t("794252");
            var l = t("506838"),
                n = t("617258"),
                i = t("769846"),
                o = t("590456"),
                s = t("220817");
            let a = e => r => {
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
                    return (0, l.match)(r).with(o.UserProfileTypes.POPOUT, o.UserProfileTypes.POMELO_POPOUT, () => {
                        let e = a({
                            premiumUserWithBanner: s.popoutBannerPremium,
                            premiumUserWithoutBanner: s.popoutNoBannerPremium,
                            default: s.popoutBanner
                        });
                        return e(t)
                    }).with(o.UserProfileTypes.MODAL, () => {
                        let e = a({
                            premiumUserWithBanner: s.profileBannerPremium,
                            premiumUserWithoutBanner: s.profileBanner,
                            default: s.profileBanner
                        });
                        return e(t)
                    }).with(o.UserProfileTypes.SETTINGS, () => s.settingsBanner).with(o.UserProfileTypes.PANEL, () => s.panelBanner).with(o.UserProfileTypes.CANCEL_MODAL, () => s.cancelModalBanner).exhaustive()
                },
                C = e => {
                    let {
                        profileType: r,
                        user: t
                    } = e, s = (0, l.match)(r).with(o.UserProfileTypes.POPOUT, () => {
                        let e = a({
                            premiumUserWithBanner: i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT,
                            premiumUserWithoutBanner: i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT,
                            default: i.default.USER_BANNER_BANNER_HEIGHT_POPOUT
                        });
                        return e(t)
                    }).with(o.UserProfileTypes.MODAL, () => {
                        let e = a({
                            premiumUserWithBanner: i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE,
                            premiumUserWithoutBanner: i.default.USER_BANNER_BANNER_HEIGHT_PROFILE,
                            default: i.default.USER_BANNER_BANNER_HEIGHT_PROFILE
                        });
                        return e(t)
                    }).with(o.UserProfileTypes.POMELO_POPOUT, () => i.default.USER_BANNER_BANNER_HEIGHT_POMELO).with(o.UserProfileTypes.SETTINGS, () => i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS).with(o.UserProfileTypes.PANEL, () => i.default.USER_BANNER_BANNER_HEIGHT_PANEL).with(o.UserProfileTypes.CANCEL_MODAL, () => i.default.USER_BANNER_CANCEL_MODAL_HEIGHT).exhaustive();
                    return (0, n.cssValueToNumber)(s)
                },
                f = Object.freeze({
                    [o.UserProfileTypes.POPOUT]: 480,
                    [o.UserProfileTypes.PANEL]: 480,
                    [o.UserProfileTypes.MODAL]: 600,
                    [o.UserProfileTypes.SETTINGS]: 600,
                    [o.UserProfileTypes.POMELO_POPOUT]: 432,
                    [o.UserProfileTypes.CANCEL_MODAL]: 172
                }),
                d = e => f[e]
        },
        430312: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                UserProfileContext: function() {
                    return c
                },
                default: function() {
                    return E
                }
            }), t("794252");
            var l = t("37983"),
                n = t("884691"),
                i = t("414456"),
                o = t.n(i),
                s = t("506838"),
                a = t("217513"),
                u = t("906889"),
                C = t("590456"),
                f = t("200932"),
                d = t("677055");
            let c = n.createContext({
                profileType: null,
                profileTheme: null
            });

            function P(e) {
                var r, t;
                let {
                    user: i,
                    guildId: P,
                    profileType: E,
                    className: T,
                    pendingThemeColors: p,
                    useDefaultClientTheme: L,
                    children: O,
                    forceShowPremium: _ = !1,
                    showOutOfBoundaryComponents: U = !1
                } = e, h = n.useRef(null), v = (0, a.default)(i.id, P), {
                    profileTheme: m
                } = (0, u.default)(i, v, {
                    themeElementRef: h,
                    pendingThemeColors: p,
                    isPreview: _,
                    useDefaultClientTheme: L
                }), S = (null == v ? void 0 : v.canEditThemes) || _, I = n.useMemo(() => ({
                    profileType: E,
                    profileTheme: m
                }), [E, m]);
                return (0, l.jsx)("div", {
                    ref: h,
                    className: o((r = E, (0, s.match)(r).with(C.UserProfileTypes.POPOUT, C.UserProfileTypes.SETTINGS, C.UserProfileTypes.CANCEL_MODAL, () => d.userPopoutOuter).with(C.UserProfileTypes.MODAL, () => d.userProfileModalOuter).with(C.UserProfileTypes.PANEL, () => d.userPanelOuter).with(C.UserProfileTypes.CARD, () => d.userCardOuter).exhaustive()), S ? d.userProfileOuterThemed : d.userProfileOuterUnthemed, f.profileColors, U ? d.showOutOfBoundaryComponents : void 0, "theme-".concat(m), T),
                    children: (0, l.jsx)("div", {
                        className: o((t = E, (0, s.match)(t).with(C.UserProfileTypes.POPOUT, C.UserProfileTypes.SETTINGS, C.UserProfileTypes.CANCEL_MODAL, () => d.userPopoutInner).with(C.UserProfileTypes.MODAL, () => d.userProfileModalInner).with(C.UserProfileTypes.PANEL, () => d.userPanelInner).with(C.UserProfileTypes.CARD, () => d.userCardInner).exhaustive()), function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                r = arguments.length > 1 ? arguments[1] : void 0,
                                t = arguments.length > 2 ? arguments[2] : void 0;
                            return (0, s.match)({
                                profileType: t,
                                canUsePremiumProfileCustomization: e,
                                hasBanner: r
                            }).with({
                                profileType: C.UserProfileTypes.PANEL
                            }, () => d.userPanelInnerThemed).with({
                                canUsePremiumProfileCustomization: !0,
                                hasBanner: !0
                            }, () => d.userProfileInnerThemedWithBanner).with({
                                canUsePremiumProfileCustomization: !0
                            }, () => d.userProfileInnerThemedPremiumWithoutBanner).otherwise(() => d.userProfileInnerThemedNonPremium)
                        }((null == v ? void 0 : v.canUsePremiumProfileCustomization) || _, (null == v ? void 0 : v.banner) != null, E)),
                        children: (0, l.jsx)(c.Provider, {
                            value: I,
                            children: O
                        })
                    })
                })
            }
            P.Inner = function(e) {
                var r;
                let {
                    className: t,
                    children: i
                } = e, {
                    profileType: a
                } = n.useContext(c);
                return (0, l.jsx)("div", {
                    className: o((r = a, (0, s.match)(r).with(C.UserProfileTypes.POPOUT, C.UserProfileTypes.SETTINGS, () => d.userPopoutOverlayBackground).with(C.UserProfileTypes.MODAL, () => d.userProfileModalOverlayBackground).with(C.UserProfileTypes.PANEL, () => d.userPanelOverlayBackground).otherwise(() => d.overlayBackground)), t),
                    children: i
                })
            };
            var E = P
        },
        236100: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return f
                }
            });
            var l = t("37983");
            t("884691");
            var n = t("77078"),
                i = t("38766"),
                o = t("49111"),
                s = t("782340"),
                a = t("364547");
            let u = {
                    page: o.AnalyticsPages.GUILD_CHANNEL,
                    section: o.AnalyticsSections.PROFILE_POPOUT,
                    object: o.AnalyticsObjects.EDIT_PER_SERVER_IDENTITY
                },
                C = {
                    page: o.AnalyticsPages.USER_POPOUT,
                    section: o.AnalyticsSections.PROFILE_POPOUT
                };

            function f(e) {
                let {
                    onSelect: r,
                    onClose: t,
                    guild: o
                } = e, f = (0, i.default)({
                    guild: o,
                    analyticsLocation: u
                }), d = (0, i.default)({
                    analyticsLocation: C
                });
                return (0, l.jsxs)(n.Menu, {
                    className: a.popoutMenu,
                    onSelect: r,
                    navId: "edit-profile-popout",
                    onClose: t,
                    "aria-label": s.default.Messages.PROFILE_ACTIONS_MENU_LABEL,
                    children: [(0, l.jsx)(n.MenuItem, {
                        id: "edit-server-profile",
                        label: s.default.Messages.CHANGE_IDENTITY,
                        subtext: s.default.Messages.CHANGE_IDENTITY_SERVER_PROFILE_MENU_HELP,
                        action: () => f()
                    }), (0, l.jsx)(n.MenuItem, {
                        id: "edit-default-profile",
                        label: s.default.Messages.USER_SETTINGS_EDIT_USER_PROFILE,
                        subtext: s.default.Messages.USER_PROFILE_MENU_HELP,
                        action: () => d()
                    })]
                })
            }
        },
        906889: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return d
                }
            }), t("222007");
            var l = t("884691"),
                n = t("509043"),
                i = t("446674"),
                o = t("841098"),
                s = t("206230"),
                a = t("388491"),
                u = t("528438");
            let C = ["--profile-gradient-primary-color", "--profile-gradient-secondary-color", "--profile-gradient-button-color", "--profile-gradient-overlay-color", "--profile-body-background-color", "--profile-body-divider-color", "--profile-avatar-border-color", "--profile-message-input-border-color", "--profile-note-background-color", "--profile-body-background-hover", "--account-profile-modal-list-item-hover", "--profile-role-pill-background-color", "--profile-role-pill-border-color"];

            function f(e, r, t) {
                var l;
                null == e || null === (l = e.current) || void 0 === l || l.style.setProperty(r, null != t ? t : null)
            }

            function d(e, r) {
                let {
                    themeElementRef: t,
                    pendingThemeColors: d,
                    isPreview: c,
                    useDefaultClientTheme: P
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, [E, T] = (0, u.default)(e, r, {
                    pendingThemeColors: d,
                    isPreview: c
                }), [p, L, O] = (0, i.useStateFromStoresArray)([s.default], () => [s.default.desaturateUserColors, s.default.saturation, s.default.syncProfileThemeWithUserTheme]), _ = (0, o.default)(), U = l.useCallback(() => O || P ? _ : (0, a.getProfileTheme)(E), [P, O, _, E]), [h, v] = l.useState(U()), m = (0, a.useProfileThemeValues)(h), S = (0, a.useDividerColor)(h, E), I = (0, a.useMessageInputBorderColor)(h, T), y = l.useCallback((e, r) => (0, n.int2hsl)(e, p, null, r), [p]);
                l.useEffect(() => {
                    v(U())
                }, [E, O, _, P, U]);
                let N = (0, a.useAvatarBorderColor)(h, E, O),
                    A = null != N ? (0, n.int2hsl)(N, !1, p ? L : null) : null,
                    g = e => C.forEach(r => {
                        e.style.removeProperty(r)
                    });
                return l.useEffect(() => {
                    if (null != E && null != T && null != h && null != N && null != S && null != I) {
                        let e = O && h !== _ ? null == m ? void 0 : m.overlaySyncedWithUserTheme : null == m ? void 0 : m.overlay;
                        f(t, "--profile-gradient-primary-color", y(E)), f(t, "--profile-gradient-secondary-color", y(T)), f(t, "--profile-gradient-button-color", y((0, a.calculateButtonColor)(E))), f(t, "--profile-gradient-overlay-color", e), f(t, "--profile-body-background-color", null == m ? void 0 : m.sectionBox), f(t, "--profile-body-background-hover", null == m ? void 0 : m.profileBodyBackgroundHover), f(t, "--profile-body-divider-color", y(S, null == m ? void 0 : m.dividerOpacity)), f(t, "--profile-avatar-border-color", y(N)), f(t, "--profile-message-input-border-color", y(I)), f(t, "--profile-note-background-color", null == m ? void 0 : m.noteBackgroundColor), f(t, "--profile-role-pill-background-color", null == m ? void 0 : m.rolePillBackgroundColor), f(t, "--profile-role-pill-border-color", null == m ? void 0 : m.rolePillBorderColor)
                    } else(null == t ? void 0 : t.current) != null && g(null == t ? void 0 : t.current)
                }, [E, T, N, h, _, t, y, O, S, null == m ? void 0 : m.overlaySyncedWithUserTheme, null == m ? void 0 : m.overlay, null == m ? void 0 : m.sectionBox, null == m ? void 0 : m.profileBodyBackgroundHover, null == m ? void 0 : m.dividerOpacity, null == m ? void 0 : m.noteBackgroundColor, null == m ? void 0 : m.rolePillBackgroundColor, null == m ? void 0 : m.rolePillBorderColor, I]), {
                    profileTheme: null != h ? h : _,
                    primaryProfileColor: E,
                    avatarBorderColor: A
                }
            }
        },
        41250: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return i
                }
            });
            var l = t("37983");
            t("884691");
            var n = t("75196");

            function i(e) {
                let {
                    width: r = 106,
                    height: t = 26,
                    color: i = "currentColor",
                    foreground: o,
                    ...s
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, n.default)(s),
                    width: r,
                    height: t,
                    viewBox: "0 0 106 26",
                    children: [(0, l.jsx)("title", {
                        children: "Nitro"
                    }), (0, l.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, l.jsx)("path", {
                            className: o,
                            fill: i,
                            d: "M98.8266537 8.64800265L97.5788372 17.0822416C97.2940433 19.0754982 95.0485266 20.0010292 92.981582 20.0010292 91.0571496 20.0010292 89.1680861 19.0754982 89.4175111 17.2605602L90.6652125 8.64800265C90.9501215 6.76162212 93.1956383 5.80077257 95.2624676 5.80077257 97.3294121 5.80077257 99.1115628 6.76162212 98.8266537 8.64800265M96.2496839.0038079646L96.2503751.0000115044248 82.8208233.0000115044248C82.4777342.0000115044248 82.1864887.251383186 82.1368341.59030354L81.4839511 5.04596726C81.4228909 5.46254248 81.7462794 5.83609115 82.167825 5.83609115L84.6202551 5.83609115C84.8670304 5.83609115 85.0355795 6.08734779 84.9386897 6.31398496 84.6326976 7.03036549 84.4097703 7.8080646 84.2859219 8.64800265L83.0381053 17.2605602C82.2182861 23.0258876 87.0301735 25.9085513 92.2687909 25.9085513 97.7574094 25.9085513 103.139115 23.0258876 103.958934 17.2605602L105.206059 8.64800265C106.009634 2.99656903 101.367679.115400885 96.2496839.0038079646M15.5778562 11.7941867L15.6467505 15.9747796C15.648133 16.0607177 15.5902986 16.1363018 15.5068881 16.1574699L15.5067729 16.1574699 14.0843013 11.1148504C14.0822275 11.1071425 14.0795777 11.0996646 14.0763519 11.0923018L9.66308376.775018584C9.55432753.520885841 9.30421123.355912389 9.0273667.355912389L4.02607753.355912389C3.68126035.355912389 3.38920838.6097 3.34151232.950576106L.00682030635 24.7668062C-.0513596718 25.1820009.271568009 25.5526735.691385514 25.5526735L5.67355018 25.5526735C6.01882818 25.5526735 6.31122578 25.2981956 6.3583458 24.9566292L7.6643423 15.4949301C7.66560958 15.4857265 7.66618562 15.4762929 7.66607042 15.4669743L7.59475674 10.6052044 7.73715368 10.5697708 9.23116943 15.6125053C9.23335838 15.6196381 9.23589295 15.6267708 9.23888836 15.6336735L13.3663258 25.1370186C13.4758885 25.3893106 13.7250831 25.5526735 14.0004299 25.5526735L19.39573 25.5526735C19.7405472 25.5526735 20.0325992 25.2988858 20.0802953 24.9580097L23.4156785 1.14177965C23.4738585.726584956 23.1509308.355912389 22.7311133.355912389L17.782935.355912389C17.438233.355912389 17.146181.609469912 17.0983698.950346018L15.5795843 11.7654257C15.578317 11.7749743 15.577741 11.784523 15.5778562 11.7941867M25.2200758 25.5526274L30.2035078 25.5526274C30.5483249 25.5526274 30.8403769 25.2989549 30.888073 24.9579637L34.222765 1.14184867C34.280945.726653982 33.9580173.355981416 33.5381998.355981416L28.5547678.355981416C28.2100659.355981416 27.9180139.609653982 27.8702026.950645133L24.5355106 24.7667602C24.4773306 25.1819549 24.8002583 25.5526274 25.2200758 25.5526274M37.588782.910862832L36.9357838 5.3664115C36.8748388 5.78298673 37.1982273 6.15665044 37.6197729 6.15665044L42.8344271 6.15665044C43.2536686 6.15665044 43.5763658 6.52628761 43.5192227 6.94102212L41.0626451 24.7682788C41.005502 25.1830133 41.3281993 25.5526504 41.7474408 25.5526504L46.8027624 25.5526504C47.1481556 25.5526504 47.4405532 25.2980575 47.4875581 24.9564912L49.9960944 6.75280973C50.0430992 6.41112832 50.3354968 6.15665044 50.68089 6.15665044L56.2874814 6.15665044C56.6305704 6.15665044 56.9217007 5.90539381 56.9714705 5.56635841L57.6249296 1.11080973C57.6859898.694234513 57.3626013.320570796 56.9409404.320570796L38.2727712.320570796C37.9296821.320570796 37.6384366.571827434 37.588782.910862832M72.9157339 9.14614425C72.7371616 10.6051354 71.5970645 12.0642416 69.6364568 12.0642416L66.6908218 12.0642416C66.2704283 12.0642416 65.9472702 11.6925336 66.0063718 11.2768788L66.6298768 6.8920823C66.6782642 6.55178142 66.9700857 6.29891416 67.3143268 6.29891416L70.4562761 6.29891416C72.3453396 6.29891416 73.0936148 7.61571062 72.9157339 9.14614425M71.1691824.355958407L61.6845787.355958407C61.3397615.355958407 61.0477096.609630973 60.9998983.950622124L57.6652063 24.7667372C57.6070263 25.1819319 57.929954 25.5526044 58.3497715 25.5526044L63.4034802 25.5526044C63.7487582 25.5526044 64.0411558 25.2981265 64.0882759 24.9565602L65.0696166 17.8430292C65.0932342 17.6723035 65.2393178 17.5450646 65.4120144 17.5450646L66.0616716 17.5450646C66.1795293 17.5450646 66.2893224 17.6050027 66.3528019 17.7041708L71.1792055 25.2345071C71.3062798 25.4327283 71.5256356 25.5526044 71.7613509 25.5526044L78.0034289 25.5526044C78.5625328 25.5526044 78.8902992 24.9242327 78.5697909 24.4667018L73.5050221 17.2370912C73.383593 17.0637195 73.4460357 16.8224717 73.6364743 16.729631 76.8698986 15.1516841 78.7475566 13.5351973 79.3665685 9.03926814 80.0787836 3.13174602 76.3728918.355958407 71.1691824.355958407"
                        })
                    })]
                })
            }
        },
        379863: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return i
                }
            });
            var l = t("37983");
            t("884691");
            var n = t("75196");

            function i(e) {
                let {
                    width: r = 103,
                    height: t = 39,
                    color: i = "currentColor",
                    foreground: o,
                    ...s
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, n.default)(s),
                    width: r,
                    height: t,
                    viewBox: "0 0 103 39",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsxs)("g", {
                        fill: i,
                        className: o,
                        children: [(0, l.jsx)("path", {
                            d: "M93.9519 0.175787H81.0164C80.8563 0.175146 80.7012 0.231811 80.5799 0.335344C80.4586 0.438877 80.3792 0.582303 80.3564 0.739196L79.7272 4.99334C79.7136 5.08695 79.7205 5.18236 79.7474 5.2731C79.7744 5.36384 79.8207 5.44778 79.8833 5.51923C79.946 5.59068 80.0234 5.64796 80.1103 5.68719C80.1973 5.72642 80.2917 5.74668 80.3873 5.7466H82.7491C82.804 5.74682 82.8579 5.76039 82.9062 5.78612C82.9545 5.81185 82.9956 5.84895 83.026 5.89414C83.0564 5.93932 83.075 5.99121 83.0803 6.04522C83.0857 6.09924 83.0775 6.15372 83.0565 6.20385C82.7507 6.91629 82.5392 7.66486 82.4273 8.43095L81.2248 16.6535C80.4347 22.1651 85.0697 24.9086 90.1172 24.9086C95.404 24.9086 100.588 22.1569 101.378 16.6535L102.58 8.43095C103.354 3.03162 98.8818 0.281936 93.9519 0.175787ZM96.4272 8.42687L95.2328 16.4779C94.9585 18.3804 92.7947 19.2643 90.8041 19.2643C88.9477 19.2643 87.1304 18.3804 87.3697 16.6473L88.5722 8.42483C88.8466 6.62437 91.0104 5.70781 93.0009 5.70781C94.9915 5.70781 96.7139 6.62641 96.4333 8.42687H96.4272Z"
                        }), (0, l.jsx)("path", {
                            d: "M22.1974 0.17587H17.3644C17.2005 0.176513 17.0423 0.236066 16.9194 0.343454C16.7965 0.450842 16.7171 0.598756 16.6961 0.759692L15.213 11.2256C15.212 11.2351 15.212 11.2447 15.213 11.2542L15.279 15.3001C15.2798 15.3406 15.2669 15.3801 15.2421 15.4124C15.2174 15.4446 15.1825 15.4676 15.1429 15.4777L13.7526 10.5969V10.5744L9.43527 0.582096C9.38392 0.461509 9.29788 0.35852 9.18786 0.285933C9.07784 0.213345 8.94868 0.174361 8.81645 0.173828H3.93188C3.7689 0.176072 3.61225 0.236646 3.49091 0.344348C3.36956 0.45205 3.29173 0.599594 3.27181 0.759692L0.00648965 23.8003C-0.00675491 23.8949 0.000616673 23.9912 0.0281092 24.0828C0.0556018 24.1744 0.102579 24.2591 0.165884 24.3312C0.22919 24.4033 0.307359 24.4612 0.39514 24.501C0.482921 24.5407 0.578282 24.5614 0.674817 24.5617H5.54082C5.70386 24.5612 5.86126 24.5025 5.98405 24.3964C6.10685 24.2903 6.18678 24.1438 6.20915 23.984L7.48392 14.8286C7.48494 14.8191 7.48494 14.8095 7.48392 14.8L7.41379 10.0947L7.55405 10.0621L9.01241 14.9409C9.01126 14.9476 9.01126 14.9545 9.01241 14.9613L13.043 24.1595C13.0941 24.2803 13.1801 24.3834 13.2902 24.456C13.4003 24.5287 13.5295 24.5675 13.6618 24.5678H18.9486C19.1114 24.5674 19.2685 24.509 19.3913 24.4033C19.514 24.2976 19.5941 24.1516 19.617 23.9921L22.8678 0.937289C22.8815 0.842432 22.8743 0.745785 22.8468 0.653916C22.8193 0.562046 22.7722 0.477107 22.7086 0.404871C22.645 0.332635 22.5664 0.274794 22.4782 0.235279C22.39 0.195765 22.2943 0.175503 22.1974 0.17587Z"
                        }), (0, l.jsx)("path", {
                            d: "M32.7504 0.175781H27.8844C27.7203 0.17599 27.5619 0.23539 27.4389 0.342858C27.3159 0.450326 27.2366 0.598492 27.2161 0.759604L23.959 23.8002C23.9458 23.8948 23.9531 23.9911 23.9806 24.0827C24.0081 24.1743 24.0551 24.259 24.1184 24.3311C24.1817 24.4032 24.2599 24.4611 24.3477 24.5009C24.4354 24.5406 24.5308 24.5613 24.6273 24.5616H29.4933C29.6563 24.5613 29.8137 24.503 29.9368 24.3973C30.0599 24.2916 30.1404 24.1456 30.1637 23.9859L33.4187 0.937201C33.4323 0.842515 33.4252 0.746043 33.3978 0.654318C33.3705 0.562593 33.3235 0.477757 33.2601 0.405555C33.1968 0.333353 33.1185 0.275472 33.0305 0.235829C32.9426 0.196186 32.847 0.175708 32.7504 0.175781Z"
                        }), (0, l.jsx)("path", {
                            d: "M55.5911 0.175834H37.3854C37.2235 0.17613 37.0671 0.234031 36.9448 0.338966C36.8225 0.443901 36.7424 0.588871 36.7191 0.747409L36.0817 5.04646C36.0678 5.14131 36.0747 5.238 36.1019 5.32998C36.1291 5.42195 36.176 5.50705 36.2394 5.57948C36.3028 5.65192 36.3812 5.70999 36.4694 5.74976C36.5575 5.78952 36.6532 5.81004 36.75 5.80992H41.845C41.9414 5.80989 42.0368 5.83033 42.1246 5.86985C42.2123 5.90937 42.2905 5.96706 42.3539 6.03903C42.4172 6.111 42.4642 6.19557 42.4917 6.28705C42.5192 6.37852 42.5266 6.47477 42.5133 6.5693L40.1164 23.7961C40.1032 23.8907 40.1105 23.9869 40.138 24.0784C40.1655 24.1699 40.2125 24.2545 40.2759 24.3264C40.3392 24.3984 40.4174 24.4561 40.5052 24.4956C40.593 24.5351 40.6883 24.5556 40.7848 24.5555H45.7147C45.8777 24.5551 46.0351 24.4964 46.1579 24.3902C46.2807 24.2841 46.3607 24.1377 46.383 23.9778L48.8294 6.38762C48.8509 6.22779 48.9303 6.08112 49.0529 5.97487C49.1754 5.86861 49.3328 5.81 49.4957 5.80992H54.964C55.1257 5.81012 55.2821 5.75266 55.4044 5.64806C55.5268 5.54346 55.607 5.39873 55.6303 5.24039L56.2677 0.935212C56.2811 0.839995 56.2735 0.743042 56.2455 0.650985C56.2175 0.558928 56.1698 0.473939 56.1055 0.401832C56.0413 0.329726 55.9621 0.272202 55.8733 0.233197C55.7845 0.194191 55.6882 0.174624 55.5911 0.175834Z"
                        }), (0, l.jsx)("path", {
                            d: "M69.4981 0.175781H60.2364C60.0723 0.17599 59.9139 0.23539 59.7909 0.342858C59.6679 0.450326 59.5887 0.598491 59.5681 0.759604L56.311 23.8002C56.2978 23.8948 56.3051 23.9911 56.3326 24.0827C56.3601 24.1743 56.4071 24.259 56.4704 24.3311C56.5337 24.4032 56.6119 24.4611 56.6997 24.5009C56.7875 24.5406 56.8828 24.5613 56.9794 24.5616H61.9155C62.0785 24.5612 62.2359 24.5025 62.3587 24.3963C62.4815 24.2902 62.5614 24.1437 62.5838 23.9839L63.5409 17.1005C63.5523 17.0206 63.5923 16.9474 63.6536 16.8942C63.7149 16.841 63.7935 16.8113 63.8751 16.8106H64.5104C64.5672 16.8108 64.6231 16.8251 64.6728 16.8522C64.7225 16.8793 64.7646 16.9184 64.7951 16.9658L69.5084 24.2534C69.5693 24.3477 69.6531 24.4253 69.7523 24.4792C69.8514 24.5331 69.9626 24.5614 70.0757 24.5616H76.1711C76.2947 24.5618 76.4159 24.5283 76.5216 24.465C76.6272 24.4016 76.7133 24.3107 76.7704 24.2022C76.8274 24.0937 76.8532 23.9718 76.845 23.8498C76.8368 23.7278 76.7949 23.6104 76.7239 23.5103L71.7733 16.5146C71.7454 16.4751 71.7265 16.43 71.7178 16.3826C71.7091 16.3351 71.7109 16.2863 71.7231 16.2396C71.7352 16.1929 71.7574 16.1493 71.7882 16.1119C71.8189 16.0744 71.8575 16.044 71.9012 16.0227C75.0593 14.4958 76.893 12.9301 77.4974 8.57997C78.1988 2.86218 74.5786 0.175781 69.4981 0.175781ZM71.204 8.68407C71.0287 10.0946 69.9169 11.5072 68.0006 11.5072H65.1251C65.0285 11.5073 64.9329 11.4868 64.845 11.4472C64.757 11.4076 64.6787 11.3497 64.6154 11.2775C64.552 11.2053 64.505 11.1204 64.4777 11.0287C64.4503 10.937 64.4432 10.8405 64.4568 10.7458L65.0653 6.50188C65.0882 6.34263 65.1684 6.1969 65.2912 6.09151C65.414 5.98611 65.5711 5.92815 65.7336 5.92827H68.8009C70.6471 5.92827 71.3773 7.20206 71.204 8.68407Z"
                        }), (0, l.jsx)("path", {
                            d: "M7.17861 33.4558C7.14695 33.4798 7.12131 33.5107 7.10366 33.5461C7.086 33.5815 7.07682 33.6205 7.07682 33.6599C7.07682 33.6994 7.086 33.7383 7.10366 33.7737C7.12131 33.8091 7.14695 33.84 7.17861 33.8641C8.11097 34.5683 8.07796 35.6584 7.86344 36.332C7.38901 37.9059 6.19056 38.8592 3.99993 38.8592H0.262245C0.224761 38.859 0.187761 38.8508 0.153705 38.8353C0.11965 38.8198 0.0893196 38.7973 0.0647325 38.7693C0.0401454 38.7413 0.021865 38.7085 0.0111071 38.6729C0.000349207 38.6374 -0.00263948 38.6 0.00233983 38.5632L1.31012 29.3058C1.31907 29.2439 1.35029 29.1873 1.39805 29.1464C1.4458 29.1056 1.50688 29.0831 1.57002 29.0833H5.30358C7.18892 29.0833 8.41625 30.2019 8.09447 32.0656C7.96306 32.6209 7.63894 33.1128 7.17861 33.4558ZM4.23096 36.6872C5.73675 36.6872 5.98841 34.6847 4.50943 34.6847H3.28622C3.22289 34.685 3.16179 34.7079 3.11408 34.7491C3.06637 34.7904 3.03522 34.8472 3.02632 34.9092L2.82004 36.3912C2.81506 36.428 2.81805 36.4654 2.82881 36.5009C2.83957 36.5365 2.85785 36.5693 2.88243 36.5973C2.90702 36.6253 2.93735 36.6478 2.97141 36.6633C3.00546 36.6788 3.04246 36.687 3.07995 36.6872H4.23096ZM4.76108 32.9026C5.97397 32.9026 6.26688 31.1634 5.01067 31.1634H3.78747C3.72444 31.1637 3.66359 31.1862 3.61593 31.2271C3.56826 31.2679 3.53692 31.3242 3.52756 31.3859L3.35223 32.6107C3.3469 32.6475 3.34964 32.685 3.36027 32.7207C3.37089 32.7564 3.38916 32.7894 3.41381 32.8175C3.43847 32.8456 3.46894 32.8681 3.50316 32.8834C3.53738 32.8988 3.57454 32.9068 3.61213 32.9067L4.76108 32.9026Z"
                        }), (0, l.jsx)("path", {
                            d: "M16.7972 38.8632H14.6602C14.6002 38.8632 14.5419 38.843 14.495 38.8059C14.4482 38.7688 14.4155 38.717 14.4023 38.659L14.1074 37.1219C14.0946 37.0638 14.062 37.0117 14.015 36.9746C13.9681 36.9374 13.9097 36.9173 13.8495 36.9178H11.6011C11.5504 36.9179 11.5007 36.9326 11.4582 36.9602C11.4157 36.9877 11.3823 37.0269 11.3619 37.0729L10.6193 38.7244C10.5991 38.7705 10.5657 38.8099 10.5232 38.8374C10.4806 38.865 10.4309 38.8796 10.38 38.8795H8.29251C8.24801 38.8795 8.20424 38.8683 8.16533 38.8469C8.12643 38.8255 8.09366 38.7947 8.07013 38.7573C8.0466 38.7199 8.03308 38.6772 8.03085 38.6333C8.02861 38.5893 8.03774 38.5455 8.05736 38.5059L12.6284 29.2485C12.6496 29.2047 12.683 29.1678 12.7246 29.1421C12.7663 29.1164 12.8145 29.103 12.8635 29.1035H14.7633C14.8232 29.1032 14.8813 29.1233 14.9279 29.1605C14.9746 29.1977 15.0068 29.2497 15.0191 29.3077L17.053 38.5651C17.0586 38.6018 17.0562 38.6392 17.0459 38.6748C17.0357 38.7105 17.0179 38.7435 16.9936 38.7718C16.9694 38.8 16.9393 38.8228 16.9054 38.8385C16.8715 38.8543 16.8346 38.8627 16.7972 38.8632ZM13.4968 34.707C13.5334 34.7069 13.5696 34.6992 13.603 34.6844C13.6364 34.6697 13.6663 34.6481 13.6908 34.6212C13.7153 34.5943 13.7338 34.5625 13.7452 34.5281C13.7565 34.4937 13.7605 34.4572 13.7567 34.4212L13.4927 31.8491H13.3957L12.4407 34.3559C12.4256 34.3952 12.4205 34.4375 12.4256 34.4792C12.4308 34.5209 12.4461 34.5607 12.4702 34.5953C12.4944 34.6298 12.5266 34.658 12.5643 34.6775C12.6019 34.6969 12.6437 34.7071 12.6861 34.707H13.4968Z"
                        }), (0, l.jsx)("path", {
                            d: "M19.1384 35.9359C19.1901 35.8936 19.2563 35.8728 19.3232 35.8777C19.3901 35.8826 19.4525 35.913 19.4973 35.9624C19.7378 36.2023 20.0247 36.3919 20.3408 36.5199C20.6569 36.6479 20.9957 36.7117 21.3372 36.7075C22.0056 36.7075 22.5935 36.4727 22.6904 35.9624C22.8018 35.35 21.9375 35.0928 21.1413 34.9826C19.5922 34.7335 18.1978 33.5046 18.5464 31.6552C18.9238 29.6526 20.7081 28.9484 22.5233 28.9484C23.6455 28.9484 24.6954 29.2382 25.5225 30.2834C25.5451 30.3114 25.5616 30.3436 25.5711 30.3781C25.5805 30.4127 25.5827 30.4488 25.5775 30.4842C25.5723 30.5196 25.5598 30.5536 25.5407 30.584C25.5217 30.6144 25.4965 30.6406 25.4669 30.661L24.058 31.6266C24.0095 31.6601 23.9509 31.6766 23.8918 31.6732C23.8327 31.6699 23.7765 31.647 23.7321 31.6082C23.3125 31.2544 22.7816 31.0559 22.2304 31.0469C21.6116 31.0346 21.0712 31.2673 21.0155 31.7654C20.9453 32.3309 21.4486 32.5819 22.2015 32.7453C23.9177 33.0637 25.5927 33.7128 25.1327 36.142C24.7696 38.0486 23.0947 38.9999 20.9598 38.9999C19.8459 38.9999 18.4845 38.4773 17.7006 37.4403C17.6594 37.3867 17.6406 37.3194 17.6483 37.2525C17.656 37.1855 17.6895 37.1241 17.7419 37.081L19.1384 35.9359Z"
                        }), (0, l.jsx)("path", {
                            d: "M28.365 38.8631H26.3951C26.3577 38.8629 26.3208 38.8548 26.2868 38.8393C26.2528 38.8238 26.2226 38.8012 26.1982 38.7732C26.1737 38.7451 26.1557 38.7122 26.1452 38.6767C26.1346 38.6411 26.132 38.6038 26.1373 38.5671L27.445 29.3097C27.4536 29.2476 27.4847 29.1908 27.5325 29.1498C27.5804 29.1089 27.6417 29.0866 27.7049 29.0872H29.6749C29.7122 29.0871 29.7491 29.095 29.783 29.1102C29.817 29.1255 29.8473 29.1479 29.8717 29.1758C29.8962 29.2037 29.9143 29.2364 29.9248 29.2719C29.9353 29.3073 29.938 29.3446 29.9327 29.3811L28.6249 38.6386C28.6169 38.701 28.5859 38.7583 28.538 38.7997C28.4902 38.8411 28.4286 38.8636 28.365 38.8631Z"
                        }), (0, l.jsx)("path", {
                            d: "M37.6597 36.6687C37.6947 36.686 37.7253 36.7107 37.7495 36.7411C37.7736 36.7714 37.7906 36.8068 37.7993 36.8444C37.808 36.8821 37.8081 36.9212 37.7997 36.959C37.7912 36.9967 37.7744 37.0321 37.7505 37.0627C36.5788 38.5671 35.2381 38.9999 34.0623 38.9999C32.1213 38.9999 30.337 37.8813 30.6423 35.6582L31.1167 32.29C31.4241 30.0813 33.5446 28.9484 35.5268 28.9484C36.6799 28.9484 38.0021 29.4097 38.5921 30.9489C38.6178 31.0136 38.6167 31.0858 38.5888 31.1496C38.561 31.2135 38.5088 31.2639 38.4436 31.2898L36.748 31.9308C36.6909 31.9519 36.6281 31.9526 36.5705 31.9329C36.5129 31.9131 36.4641 31.8741 36.4324 31.8226C36.1622 31.4143 35.6485 31.2265 35.1349 31.2265C34.4233 31.2408 33.7137 31.6348 33.6147 32.29L33.1403 35.6664C33.0433 36.3033 33.6559 36.7034 34.3552 36.7034C34.6326 36.7074 34.907 36.6462 35.1559 36.5249C35.4048 36.4035 35.621 36.2254 35.7868 36.0053C35.8226 35.9552 35.8752 35.9192 35.9352 35.9039C35.9953 35.8886 36.0589 35.8948 36.1147 35.9216L37.6597 36.6687Z"
                        })]
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=2b92d5e872b9a5aff733.js.map