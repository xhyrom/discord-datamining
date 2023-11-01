(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["9743"], {
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
                    return o
                }
            });
            var l = t("37983");
            t("884691");
            var n = t("77078"),
                i = t("599110"),
                s = t("49111");

            function o(e) {
                i.default.track(s.AnalyticEvents.OPEN_MODAL, {
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
        563775: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return i
                }
            });
            var l = t("862205");
            let n = (0, l.createExperiment)({
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
            var i = e => {
                let {
                    location: r,
                    autoTrackExposure: t = !0,
                    trackExposureOptions: l = {}
                } = e;
                return n.useExperiment({
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
                n = t("656280"),
                i = t.n(n),
                s = t("509043"),
                o = t("446674"),
                a = t("206230"),
                u = e => {
                    let r = (0, o.useStateFromStores)([a.default], () => a.default.desaturateUserColors ? a.default.saturation : 1),
                        t = (0, l.useMemo)(() => {
                            let {
                                h: t,
                                s: l,
                                l: n
                            } = i((0, s.int2hex)(e)).toHsl(), o = i({
                                h: t,
                                s: l * r,
                                l: n
                            });
                            return {
                                hex: o.toHexString(),
                                hsl: o.toHslString()
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
                n = t("446674"),
                i = t("862337"),
                s = t("697218"),
                o = t("340412"),
                a = t("719923"),
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
                let e = (0, n.useStateFromStores)([o.default], () => o.default.getUserDiscount(u.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID)),
                    [r, t] = l.useState(f(e)),
                    d = (0, n.useStateFromStores)([s.default], () => (0, a.isPremium)(s.default.getCurrentUser()));
                return l.useEffect(() => {
                    if (null == e || null == e.expires_at) return;
                    let l = new i.Timeout,
                        n = () => {
                            let i = null != e.expires_at ? Date.parse(e.expires_at) - Date.now() : 0;
                            null == l || l.start(i, () => {
                                !r && f(e) ? t(!0) : n()
                            })
                        };
                    return n(), () => l.stop()
                }, [r, e]), r || d ? null : e
            }
        },
        528438: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return o
                }
            });
            var l = t("509043"),
                n = t("462274"),
                i = t("449918"),
                s = t("49111");

            function o(e, r) {
                var t, o;
                let {
                    pendingThemeColors: a,
                    isPreview: u
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, f = null == e ? void 0 : e.getAvatarURL(null == r ? void 0 : r.guildId, 80), d = (0, i.useColorValue)(s.Color.PRIMARY_530).hex, [c, P] = (0, n.useAvatarColors)(f, d, !1);
                if (!(null == r ? void 0 : r.canEditThemes) && !u) return [null, null];
                let E = null == r ? void 0 : r.getPreviewThemeColors(a),
                    O = null !== (t = null == E ? void 0 : E[0]) && void 0 !== t ? t : (0, l.hex2int)(c),
                    T = null !== (o = null == E ? void 0 : E[1]) && void 0 !== o ? o : (0, l.hex2int)(P);
                return [O, T]
            }
        },
        289918: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return J
                }
            });
            var l, n, i = t("37983"),
                s = t("884691"),
                o = t("414456"),
                a = t.n(o),
                u = t("509043"),
                f = t("446674"),
                d = t("669491"),
                c = t("77078"),
                P = t("79112"),
                E = t("812204"),
                O = t("685665"),
                T = t("462274"),
                _ = t("618017"),
                p = t("190045"),
                U = t("335031"),
                h = t("252063"),
                S = t("38766"),
                m = t("845579"),
                v = t("271938"),
                I = t("42203"),
                A = t("305961"),
                L = t("18494"),
                y = t("697218"),
                N = t("471671"),
                C = t("275623"),
                g = t("945330"),
                R = t("474571"),
                D = t("216422"),
                M = t("987772"),
                b = t("956089"),
                B = t("599110"),
                w = t("315102"),
                x = t("719923"),
                F = t("713135"),
                H = t("581295"),
                k = t("878569"),
                G = t("236100"),
                j = t("590456"),
                W = t("49111"),
                z = t("646718"),
                Y = t("782340"),
                X = t("220817");
            (l = n || (n = {}))[l.SHOULD_LOAD = 0] = "SHOULD_LOAD", l[l.LOADING = 1] = "LOADING", l[l.COMPLETE = 2] = "COMPLETE";
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
                    onClick: n
                } = e, o = (0, f.useStateFromStores)([y.default], () => {
                    let e = y.default.getCurrentUser();
                    return x.default.canUsePremiumProfileCustomization(e)
                }), u = s.useRef(!1), {
                    analyticsLocations: d
                } = (0, O.default)(E.default.BADGE);
                return s.useEffect(() => {
                    l && !u.current && (u.current = !0, B.default.track(W.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: z.PremiumUpsellTypes.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
                        location: {
                            page: Z[r],
                            section: W.AnalyticsSections.NITRO_BANNER,
                            object: W.AnalyticsObjects.NITRO_BADGE
                        },
                        location_stack: d
                    }))
                }, [d, l, r]), (0, i.jsx)(c.Tooltip, {
                    tooltipContentClassName: X.premiumIconTooltipContent,
                    text: o ? Y.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
                    children: e => (0, i.jsx)(c.Clickable, {
                        ...e,
                        onClick: o ? void 0 : () => {
                            var e;
                            e = d, (0, c.openModalLazy)(async () => {
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
                                        title: Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
                                        description: Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
                                            onAndMoreWithPremiumClick: () => {
                                                l(), P.default.open(W.UserSettingsSections.PREMIUM, null, {
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
                        className: a(X.premiumIconWrapper, {
                            [X.visible]: l,
                            [X.clickable]: !o
                        }),
                        children: (0, i.jsx)(b.TextBadge, {
                            color: "rgba(32, 34, 37, 0.8)",
                            text: (0, i.jsx)(D.default, {
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
                    icon: n,
                    ...s
                } = e, o = V[t], a = "pencil" === n ? M.default : R.default;
                return (0, i.jsx)(c.Clickable, {
                    ...s,
                    "aria-label": l,
                    className: r ? X.pencilContainerDark : X.pencilContainer,
                    children: (0, i.jsx)(c.Tooltip, {
                        text: l,
                        children: e => (0, i.jsx)(a, {
                            ...e,
                            width: o,
                            height: o,
                            className: X.editIcon
                        })
                    })
                })
            }

            function J(e) {
                var r, t, l;
                let {
                    user: o,
                    displayProfile: P,
                    bannerSrc: E,
                    onClose: O,
                    guildId: y,
                    profileType: R = j.UserProfileTypes.POPOUT,
                    allowEdit: D = !0,
                    showPremiumBadgeUpsell: M = !0,
                    isHovering: b,
                    animateOnHover: B
                } = e, [V, Z] = s.useState((null == P ? void 0 : P.banner) == null ? n.COMPLETE : n.SHOULD_LOAD), J = (0, f.useStateFromStores)([A.default], () => A.default.getGuild(y)), Q = (0, f.useStateFromStores)([v.default], () => v.default.getId()), $ = Q === o.id && D || o.isClyde() && null != J && (0, _.canEditClydeAIProfile)(J), ee = x.default.isPremiumAtLeast(null == P ? void 0 : P.premiumType, z.PremiumTypes.TIER_2), [er, et] = s.useState(!1), el = (0, f.useStateFromStores)([N.default], () => N.default.isFocused()), en = m.GifAutoPlay.getSetting(), ei = B || !en ? er : el, es = (0, c.useToken)(d.default.unsafe_rawColors.PRIMARY_800).hex(), eo = (0, c.getAvatarSize)(c.AvatarSizes.SIZE_80), ea = (0, u.hex2int)((0, T.default)(o.getAvatarURL(y, eo), es, !1)), eu = (0, U.default)(null !== (r = null == P ? void 0 : P.primaryColor) && void 0 !== r ? r : ea).hsl, ef = (0, k.getUserBannerSize)(R), ed = null != E ? E : null == P ? void 0 : P.getBannerURL({
                    size: ef,
                    canAnimate: ei
                }), ec = null != ed, eP = (0, f.useStateFromStores)([F.default], () => F.default.getUserProfile(o.id)), eE = I.default.getChannel(L.default.getChannelId()), {
                    appsInGDMEnabled: eO,
                    availableApplications: eT
                } = (0, h.usePrivateChannelIntegrationState)({
                    channelId: null !== (t = null == eE ? void 0 : eE.id) && void 0 !== t ? t : ""
                }), e_ = null == eP ? void 0 : eP.application, ep = eO && null != eT.find(e => e.id === (null == e_ ? void 0 : e_.id));
                if (ec && (ee || o.isClyde()) && V === n.SHOULD_LOAD) {
                    Z(n.LOADING);
                    let e = new Image;
                    e.src = ed, e.onload = () => Z(n.COMPLETE)
                }
                s.useEffect(() => {
                    if (en || !ee) return;
                    let e = null != E ? E : null == P ? void 0 : P.getBannerURL({
                        size: ef,
                        canAnimate: !0
                    });
                    if (null == e) return;
                    let r = new Image;
                    r.src = e
                }, [en, ee, E, P, ef]);
                let eU = (0, S.default)({
                        analyticsLocation: {
                            page: W.AnalyticsPages.USER_POPOUT,
                            section: W.AnalyticsSections.PROFILE_POPOUT
                        }
                    }),
                    eh = (null == P ? void 0 : P.profileEffectID) != null;
                return (0, i.jsx)(H.default, {
                    isPremium: ee,
                    hasThemeColors: null !== (l = null == P ? void 0 : P.canEditThemes) && void 0 !== l && l,
                    profileType: R,
                    hasBanner: ec,
                    hasProfileEffect: eh,
                    children: (0, i.jsxs)("div", {
                        className: a(X.banner, (0, k.getUserBannerStyles)({
                            profileType: R,
                            user: {
                                hasBanner: ec,
                                isPremium: ee,
                                hasProfileEffect: eh
                            }
                        }), {
                            [X.reducedMotion]: !en
                        }),
                        onMouseMove: () => et(!0),
                        onMouseLeave: () => et(!1),
                        style: {
                            backgroundImage: ec && ee ? "url(".concat(ed, ")") : void 0,
                            backgroundColor: V !== n.COMPLETE ? d.default.unsafe_rawColors.PRIMARY_800.css : eu
                        },
                        children: [$ ? null != J || o.isClyde() ? null != J && o.isClyde() && (0, _.canEditClydeAIProfile)(J) ? (0, i.jsx)(q, {
                            profileType: R,
                            profileLabel: Y.default.Messages.CLYDE_SETTINGS,
                            icon: "gear",
                            onClick: () => {
                                null == O || O(), (0, p.default)(J.id)
                            }
                        }) : null == J ? null : (0, i.jsx)(c.Popout, {
                            spacing: 6,
                            position: "bottom",
                            renderPopout: e => {
                                let {
                                    closePopout: r
                                } = e;
                                return (0, i.jsx)(G.default, {
                                    onClose: r,
                                    onSelect: O,
                                    guild: J
                                })
                            },
                            children: e => (0, i.jsx)(q, {
                                darkenOnHover: eh && b,
                                profileLabel: Y.default.Messages.EDIT_PROFILE,
                                icon: "pencil",
                                ...e,
                                profileType: R
                            })
                        }) : (0, i.jsx)(q, {
                            darkenOnHover: eh && b,
                            profileType: R,
                            profileLabel: Y.default.Messages.EDIT_PROFILE,
                            icon: "pencil",
                            onClick: () => {
                                null == O || O(), eU()
                            }
                        }) : (() => {
                            let e = M && ec && R !== j.UserProfileTypes.SETTINGS;
                            return e ? (0, i.jsx)(K, {
                                type: R,
                                shown: void 0 === b ? er : b,
                                onClick: O
                            }) : null
                        })(), ep ? R !== j.UserProfileTypes.MODAL ? null : (0, i.jsx)(c.Clickable, {
                            onClick: O,
                            "aria-label": Y.default.Messages.BACK,
                            className: X.pencilContainer,
                            children: (0, i.jsx)(c.Tooltip, {
                                text: Y.default.Messages.BACK,
                                children: e => (0, i.jsx)(g.default, {
                                    ...e,
                                    className: X.closeIcon,
                                    color: "white"
                                })
                            })
                        }) : null, !en && (0, w.isAnimatedImageURL)(ed) && (0, i.jsx)(C.default, {
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
                    return O
                }
            });
            var l = t("37983");
            t("884691");
            var n = t("506838"),
                i = t("769846"),
                s = t("77078"),
                o = t("606292"),
                a = t("476765"),
                u = t("159885"),
                f = t("878569"),
                d = t("590456"),
                c = t("573135"),
                P = t("423713");
            let E = {
                [d.UserProfileTypes.POPOUT]: s.AvatarSizes.SIZE_80,
                [d.UserProfileTypes.MODAL]: s.AvatarSizes.SIZE_120,
                [d.UserProfileTypes.SETTINGS]: s.AvatarSizes.SIZE_80,
                [d.UserProfileTypes.PANEL]: s.AvatarSizes.SIZE_80,
                [d.UserProfileTypes.POMELO_POPOUT]: s.AvatarSizes.SIZE_80,
                [d.UserProfileTypes.CANCEL_MODAL]: s.AvatarSizes.SIZE_56
            };

            function O(e) {
                let {
                    children: r,
                    profileType: t,
                    isPremium: O,
                    hasThemeColors: T,
                    hasBanner: _,
                    forProfileEffectModal: p,
                    hasProfileEffect: U = !1
                } = e, h = E[t], S = (0, a.useUID)(), m = function(e) {
                    let {
                        profileType: r,
                        avatarSize: t,
                        hasBanner: l,
                        isPremium: a,
                        hasThemeColors: P,
                        hasProfileEffect: E
                    } = e, O = c.AvatarDecorationBorderSizes[t];
                    if (null == O) throw Error("Unsupported avatar size for banner mask");
                    let T = (0, o.getDecorationSizeForAvatarSize)(t),
                        {
                            size: _,
                            stroke: p
                        } = (0, s.getAvatarSpecs)(t),
                        U = {
                            avatarSize: _,
                            avatarBorderSize: p,
                            avatarDecorationSize: T,
                            avatarDecorationBorderSize: O,
                            avatarDecorationOffsetY: -(T + 2 * O) / 2,
                            bannerHeight: (0, f.getUserBannerHeight)({
                                profileType: r,
                                user: {
                                    hasBanner: l,
                                    isPremium: a,
                                    hasProfileEffect: E
                                }
                            })
                        };
                    return (0, n.match)(r).with(d.UserProfileTypes.POPOUT, () => {
                        let e = P ? (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING) : 0;
                        return {
                            ...U,
                            bannerWidth: (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
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
                        let e = (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING);
                        return {
                            ...U,
                            bannerWidth: (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
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
                    hasBanner: _,
                    isPremium: O,
                    hasThemeColors: T,
                    hasProfileEffect: U
                });
                p && (m.bannerWidth = (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH));
                let v = m.avatarSize / 2 + m.avatarBorderSize,
                    I = m.bannerHeight - m.offsetY;
                return (0, l.jsxs)("svg", {
                    className: P.bannerSVGWrapper,
                    viewBox: "0 0 ".concat(m.bannerWidth, " ").concat(m.bannerHeight),
                    style: {
                        minWidth: m.bannerWidth,
                        minHeight: m.bannerHeight
                    },
                    children: [(0, l.jsxs)("mask", {
                        id: S,
                        children: [(0, l.jsx)("rect", {
                            fill: "white",
                            x: "0",
                            y: "0",
                            width: "100%",
                            height: "100%"
                        }), (0, l.jsx)("circle", {
                            fill: "black",
                            cx: m.offsetX + v,
                            cy: I,
                            r: v
                        })]
                    }), (0, l.jsx)("foreignObject", {
                        x: "0",
                        y: "0",
                        width: "100%",
                        height: "100%",
                        overflow: "visible",
                        mask: "url(#".concat(S, ")"),
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
                    return f
                },
                getUserBannerSize: function() {
                    return c
                }
            });
            var l = t("506838"),
                n = t("617258"),
                i = t("769846"),
                s = t("590456"),
                o = t("220817");
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
                    return (0, l.match)(r).with(s.UserProfileTypes.POPOUT, s.UserProfileTypes.POMELO_POPOUT, () => {
                        let e = a({
                            premiumUserWithBanner: o.popoutBannerPremium,
                            premiumUserWithoutBanner: o.popoutNoBannerPremium,
                            default: o.popoutBanner
                        });
                        return e(t)
                    }).with(s.UserProfileTypes.MODAL, () => {
                        let e = a({
                            premiumUserWithBanner: o.profileBannerPremium,
                            premiumUserWithoutBanner: o.profileBanner,
                            default: o.profileBanner
                        });
                        return e(t)
                    }).with(s.UserProfileTypes.SETTINGS, () => o.settingsBanner).with(s.UserProfileTypes.PANEL, () => o.panelBanner).with(s.UserProfileTypes.CANCEL_MODAL, () => o.cancelModalBanner).exhaustive()
                },
                f = e => {
                    let {
                        profileType: r,
                        user: t
                    } = e, o = (0, l.match)(r).with(s.UserProfileTypes.POPOUT, () => {
                        let e = a({
                            premiumUserWithBanner: i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT,
                            premiumUserWithoutBanner: i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT,
                            default: i.default.USER_BANNER_BANNER_HEIGHT_POPOUT
                        });
                        return e(t)
                    }).with(s.UserProfileTypes.MODAL, () => {
                        let e = a({
                            premiumUserWithBanner: i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE,
                            premiumUserWithoutBanner: i.default.USER_BANNER_BANNER_HEIGHT_PROFILE,
                            default: i.default.USER_BANNER_BANNER_HEIGHT_PROFILE
                        });
                        return e(t)
                    }).with(s.UserProfileTypes.POMELO_POPOUT, () => i.default.USER_BANNER_BANNER_HEIGHT_POMELO).with(s.UserProfileTypes.SETTINGS, () => i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS).with(s.UserProfileTypes.PANEL, () => i.default.USER_BANNER_BANNER_HEIGHT_PANEL).with(s.UserProfileTypes.CANCEL_MODAL, () => i.default.USER_BANNER_CANCEL_MODAL_HEIGHT).exhaustive();
                    return (0, n.cssValueToNumber)(o)
                },
                d = Object.freeze({
                    [s.UserProfileTypes.POPOUT]: 480,
                    [s.UserProfileTypes.PANEL]: 480,
                    [s.UserProfileTypes.MODAL]: 600,
                    [s.UserProfileTypes.SETTINGS]: 600,
                    [s.UserProfileTypes.POMELO_POPOUT]: 432,
                    [s.UserProfileTypes.CANCEL_MODAL]: 172
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
                    return O
                }
            });
            var l = t("37983"),
                n = t("884691"),
                i = t("414456"),
                s = t.n(i),
                o = t("506838"),
                a = t("217513"),
                u = t("906889"),
                f = t("590456"),
                d = t("200932"),
                c = t("677055");
            let P = n.createContext({
                profileType: null,
                profileTheme: null
            });

            function E(e) {
                var r, t;
                let {
                    user: i,
                    guildId: E,
                    profileType: O,
                    className: T,
                    pendingThemeColors: _,
                    useDefaultClientTheme: p,
                    children: U,
                    forceShowPremium: h = !1,
                    showOutOfBoundaryComponents: S = !1
                } = e, m = n.useRef(null), v = (0, a.default)(i.id, E), {
                    profileTheme: I
                } = (0, u.default)(i, v, {
                    themeElementRef: m,
                    pendingThemeColors: _,
                    isPreview: h,
                    useDefaultClientTheme: p
                }), A = (null == v ? void 0 : v.canEditThemes) || h, L = n.useMemo(() => ({
                    profileType: O,
                    profileTheme: I
                }), [O, I]);
                return (0, l.jsx)("div", {
                    ref: m,
                    className: s((r = O, (0, o.match)(r).with(f.UserProfileTypes.POPOUT, f.UserProfileTypes.SETTINGS, f.UserProfileTypes.CANCEL_MODAL, () => c.userPopoutOuter).with(f.UserProfileTypes.MODAL, () => c.userProfileModalOuter).with(f.UserProfileTypes.PANEL, () => c.userPanelOuter).with(f.UserProfileTypes.CARD, () => c.userCardOuter).exhaustive()), A ? c.userProfileOuterThemed : c.userProfileOuterUnthemed, d.profileColors, S ? c.showOutOfBoundaryComponents : void 0, "theme-".concat(I), T),
                    children: (0, l.jsx)("div", {
                        className: s((t = O, (0, o.match)(t).with(f.UserProfileTypes.POPOUT, f.UserProfileTypes.SETTINGS, f.UserProfileTypes.CANCEL_MODAL, () => c.userPopoutInner).with(f.UserProfileTypes.MODAL, () => c.userProfileModalInner).with(f.UserProfileTypes.PANEL, () => c.userPanelInner).with(f.UserProfileTypes.CARD, () => c.userCardInner).exhaustive()), function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                r = arguments.length > 1 ? arguments[1] : void 0,
                                t = arguments.length > 2 ? arguments[2] : void 0;
                            return (0, o.match)({
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
                        }((null == v ? void 0 : v.canUsePremiumProfileCustomization) || h, (null == v ? void 0 : v.banner) != null, O)),
                        children: (0, l.jsx)(P.Provider, {
                            value: L,
                            children: U
                        })
                    })
                })
            }
            E.Inner = function(e) {
                var r;
                let {
                    className: t,
                    children: i
                } = e, {
                    profileType: a
                } = n.useContext(P);
                return (0, l.jsx)("div", {
                    className: s((r = a, (0, o.match)(r).with(f.UserProfileTypes.POPOUT, f.UserProfileTypes.SETTINGS, () => c.userPopoutOverlayBackground).with(f.UserProfileTypes.MODAL, () => c.userProfileModalOverlayBackground).with(f.UserProfileTypes.PANEL, () => c.userPanelOverlayBackground).otherwise(() => c.overlayBackground)), t),
                    children: i
                })
            };
            var O = E
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
            var n = t("77078"),
                i = t("38766"),
                s = t("49111"),
                o = t("782340"),
                a = t("364547");
            let u = {
                    page: s.AnalyticsPages.GUILD_CHANNEL,
                    section: s.AnalyticsSections.PROFILE_POPOUT,
                    object: s.AnalyticsObjects.EDIT_PER_SERVER_IDENTITY
                },
                f = {
                    page: s.AnalyticsPages.USER_POPOUT,
                    section: s.AnalyticsSections.PROFILE_POPOUT
                };

            function d(e) {
                let {
                    onSelect: r,
                    onClose: t,
                    guild: s
                } = e, d = (0, i.default)({
                    guild: s,
                    analyticsLocation: u
                }), c = (0, i.default)({
                    analyticsLocation: f
                });
                return (0, l.jsxs)(n.Menu, {
                    className: a.popoutMenu,
                    onSelect: r,
                    navId: "edit-profile-popout",
                    onClose: t,
                    "aria-label": o.default.Messages.PROFILE_ACTIONS_MENU_LABEL,
                    children: [(0, l.jsx)(n.MenuItem, {
                        id: "edit-server-profile",
                        label: o.default.Messages.CHANGE_IDENTITY,
                        subtext: o.default.Messages.CHANGE_IDENTITY_SERVER_PROFILE_MENU_HELP,
                        action: () => d()
                    }), (0, l.jsx)(n.MenuItem, {
                        id: "edit-default-profile",
                        label: o.default.Messages.USER_SETTINGS_EDIT_USER_PROFILE,
                        subtext: o.default.Messages.USER_PROFILE_MENU_HELP,
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
                n = t("509043"),
                i = t("446674"),
                s = t("841098"),
                o = t("206230"),
                a = t("388491"),
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
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, [O, T] = (0, u.default)(e, r, {
                    pendingThemeColors: c,
                    isPreview: P
                }), [_, p, U] = (0, i.useStateFromStoresArray)([o.default], () => [o.default.desaturateUserColors, o.default.saturation, o.default.syncProfileThemeWithUserTheme]), h = (0, s.default)(), S = l.useCallback(() => U || E ? h : (0, a.getProfileTheme)(O), [E, U, h, O]), [m, v] = l.useState(S()), I = (0, a.useProfileThemeValues)(m), A = (0, a.useDividerColor)(m, O), L = (0, a.useMessageInputBorderColor)(m, T), y = l.useCallback((e, r) => (0, n.int2hsl)(e, _, null, r), [_]);
                l.useEffect(() => {
                    v(S())
                }, [O, U, h, E, S]);
                let N = (0, a.useAvatarBorderColor)(m, O, U),
                    C = null != N ? (0, n.int2hsl)(N, !1, _ ? p : null) : null,
                    g = e => f.forEach(r => {
                        e.style.removeProperty(r)
                    });
                return l.useEffect(() => {
                    if (null != O && null != T && null != m && null != N && null != A && null != L) {
                        let e = U && m !== h ? null == I ? void 0 : I.overlaySyncedWithUserTheme : null == I ? void 0 : I.overlay;
                        d(t, "--profile-gradient-primary-color", y(O)), d(t, "--profile-gradient-secondary-color", y(T)), d(t, "--profile-gradient-button-color", y((0, a.calculateButtonColor)(O))), d(t, "--profile-gradient-overlay-color", e), d(t, "--profile-body-background-color", null == I ? void 0 : I.sectionBox), d(t, "--profile-body-background-hover", null == I ? void 0 : I.profileBodyBackgroundHover), d(t, "--profile-body-divider-color", y(A, null == I ? void 0 : I.dividerOpacity)), d(t, "--profile-avatar-border-color", y(N)), d(t, "--profile-message-input-border-color", y(L)), d(t, "--profile-note-background-color", null == I ? void 0 : I.noteBackgroundColor), d(t, "--profile-role-pill-background-color", null == I ? void 0 : I.rolePillBackgroundColor), d(t, "--profile-role-pill-border-color", null == I ? void 0 : I.rolePillBorderColor)
                    } else(null == t ? void 0 : t.current) != null && g(null == t ? void 0 : t.current)
                }, [O, T, N, m, h, t, y, U, A, null == I ? void 0 : I.overlaySyncedWithUserTheme, null == I ? void 0 : I.overlay, null == I ? void 0 : I.sectionBox, null == I ? void 0 : I.profileBodyBackgroundHover, null == I ? void 0 : I.dividerOpacity, null == I ? void 0 : I.noteBackgroundColor, null == I ? void 0 : I.rolePillBackgroundColor, null == I ? void 0 : I.rolePillBorderColor, L]), {
                    profileTheme: null != m ? m : h,
                    primaryProfileColor: O,
                    avatarBorderColor: C
                }
            }
        },
        340412: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return E
                }
            });
            var l = t("446674"),
                n = t("913144"),
                i = t("697218"),
                s = t("719923"),
                o = t("521012");
            let a = {
                    userOffersLastFetchedAtDate: void 0,
                    userTrialOffers: {},
                    userDiscounts: {}
                },
                u = a;

            function f() {
                u.userTrialOffers = {}, u.userDiscounts = {}, u.userOffersLastFetchedAtDate = void 0
            }
            let d = () => !0;

            function c() {
                let e = o.default.getPremiumTypeSubscription();
                return null != e && (u.userTrialOffers = {}, u.userDiscounts = {}, !0)
            }
            class P extends l.default.PersistedStore {
                initialize(e) {
                    u = null != e ? e : a, this.waitFor(i.default), this.syncWith([i.default], d), this.syncWith([o.default], c)
                }
                getUserTrialOffer(e) {
                    if (null !== e) return u.userTrialOffers[e]
                }
                getUserDiscount(e) {
                    if (null !== e) return u.userDiscounts[e]
                }
                getAnyOfUserTrialOfferId(e) {
                    for (let r of e)
                        if (null != u.userTrialOffers[r]) return r;
                    return null
                }
                hasFetchedOffer() {
                    return null != u.userOffersLastFetchedAtDate
                }
                shouldFetchOffer() {
                    let e = u.userOffersLastFetchedAtDate;
                    return null == e || Date.now() - 1728e5 > e
                }
                getAcknowledgedOffers(e) {
                    let r = i.default.getCurrentUser();
                    return (0, s.isPremium)(r) ? [] : Object.values(u.userTrialOffers).filter(r => e.includes(r.trial_id) && null != r.expires_at)
                }
                getUnacknowledgedDiscountOffers() {
                    let e = i.default.getCurrentUser();
                    return (0, s.isPremium)(e) ? [] : Object.values(u.userDiscounts).filter(e => null == e.expires_at)
                }
                getUnacknowledgedOffers(e) {
                    let r = i.default.getCurrentUser();
                    return (0, s.isPremium)(r) ? [] : Object.values(u.userTrialOffers).filter(r => e.includes(r.trial_id) && null == r.expires_at)
                }
                hasAnyUnexpiredOffer() {
                    return Object.values(u.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
                }
                getState() {
                    return u
                }
                forceReset() {
                    f()
                }
            }
            P.displayName = "UserOfferStore", P.persistKey = "UserOfferStore";
            var E = new P(n.default, {
                BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: r
                    } = e;
                    null != r ? u.userTrialOffers[r.trial_id] = r : f(), u.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: r
                    } = e;
                    u.userTrialOffers[r.trial_id] = r, u.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: r,
                        userDiscount: t
                    } = e;
                    null == r && null == t && f(), null != r ? (u.userTrialOffers[r.trial_id] = r, u.userDiscounts = {}) : null != t && (u.userDiscounts[t.discount_id] = t, u.userTrialOffers = {}), u.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: r,
                        userDiscount: t
                    } = e;
                    (null != r || null != t) && (null != r && (u.userTrialOffers[r.trial_id] = r), null != t && (u.userDiscounts[t.discount_id] = t), u.userOffersLastFetchedAtDate = Date.now())
                },
                LOGOUT: f
            })
        }
    }
]);
//# sourceMappingURL=1642fd8a8bd315f0ce60.js.map