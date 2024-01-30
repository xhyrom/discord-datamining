(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["5399"], {
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
                    return a
                }
            });
            var l = t("37983");
            t("884691");
            var n = t("77078"),
                i = t("599110"),
                o = t("49111");

            function a(e) {
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
                a = t("446674"),
                s = t("206230"),
                u = e => {
                    let r = (0, a.useStateFromStores)([s.default], () => s.default.desaturateUserColors ? s.default.saturation : 1),
                        t = (0, l.useMemo)(() => {
                            let {
                                h: t,
                                s: l,
                                l: n
                            } = i((0, o.int2hex)(e)).toHsl(), a = i({
                                h: t,
                                s: l * r,
                                l: n
                            });
                            return {
                                hex: a.toHexString(),
                                hsl: a.toHslString()
                            }
                        }, [e, r]);
                    return t
                }
        },
        809071: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                updateSubscriptionInvoicePreview: function() {
                    return c
                },
                useSubscriptionInvoicePreview: function() {
                    return p
                },
                useGetSubscriptionInvoice: function() {
                    return T
                },
                getItemUnitPriceWithDiscount: function() {
                    return _
                }
            }), t("222007");
            var l = t("884691"),
                n = t("446674"),
                i = t("872717"),
                o = t("448993"),
                a = t("195358"),
                s = t("521012"),
                u = t("719923"),
                f = t("49111");
            async function d(e) {
                let {
                    items: r,
                    paymentSourceId: t,
                    trialId: l,
                    code: n,
                    applyEntitlements: s = !1,
                    currency: d,
                    renewal: c,
                    metadata: P
                } = e;
                r = (0, u.coerceExistingItemsToNewItemInterval)(r);
                let E = {
                    items: r.map(e => {
                        let {
                            planId: r,
                            ...t
                        } = e;
                        return {
                            ...t,
                            plan_id: r
                        }
                    }),
                    payment_source_id: t,
                    trial_id: l,
                    code: n,
                    apply_entitlements: s,
                    currency: d,
                    renewal: c,
                    metadata: P
                };
                try {
                    let e = await i.default.post({
                        url: f.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: E,
                        oldFormErrors: !0
                    });
                    return a.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new o.BillingError(e)
                }
            }
            async function c(e) {
                let {
                    subscriptionId: r,
                    items: t,
                    paymentSourceId: l,
                    renewal: n,
                    currency: s,
                    applyEntitlements: d = !1,
                    analyticsLocations: c,
                    analyticsLocation: P
                } = e;
                null != t && (t = (0, u.coerceExistingItemsToNewItemInterval)(t));
                let E = {
                    items: null == t ? void 0 : t.map(e => {
                        let {
                            planId: r,
                            ...t
                        } = e;
                        return {
                            ...t,
                            plan_id: r
                        }
                    }),
                    payment_source_id: l,
                    renewal: n,
                    apply_entitlements: d,
                    currency: s
                };
                try {
                    let e = await i.default.patch({
                        url: f.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(r),
                        query: {
                            location: P,
                            location_stack: c
                        },
                        body: E,
                        oldFormErrors: !0
                    });
                    return a.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new o.BillingError(e)
                }
            }
            async function P(e) {
                let {
                    subscriptionId: r,
                    preventFetch: t
                } = e;
                if (t) return null;
                let l = await i.default.get({
                    url: f.Endpoints.BILLING_SUBSCRIPTION_INVOICE(r),
                    oldFormErrors: !0
                });
                return a.default.createInvoiceFromServer(l.body)
            }

            function E(e, r) {
                let {
                    preventFetch: t = !1
                } = e, [i, o] = (0, l.useState)(null), [a, u] = (0, l.useState)(null), f = (0, n.useStateFromStores)([s.default], () => s.default.getSubscriptions());
                return (0, l.useEffect)(() => {
                    let e = !1;
                    async function l() {
                        try {
                            u(null), o(null);
                            let t = await r();
                            !e && o(t)
                        } catch (r) {
                            !e && u(r)
                        }
                    }
                    return !t && l(), () => {
                        e = !0
                    }
                }, [t, r, f]), [i, a]
            }

            function p(e) {
                if ("subscriptionId" in e && null == e.subscriptionId) {
                    let {
                        subscriptionId: r,
                        ...t
                    } = e;
                    e = t
                }
                let r = (0, l.useCallback)(() => "subscriptionId" in e ? c(e) : "items" in e ? d(e) : null, [JSON.stringify(e)]);
                return E(e, r)
            }

            function T(e) {
                let r = (0, l.useCallback)(() => P(e), [JSON.stringify(e)]);
                return E(e, r)
            }

            function _(e) {
                let r = e.subscriptionPlanPrice;
                return e.discounts.forEach(t => {
                    let l = t.amount / e.quantity;
                    r -= l
                }), r
            }
        },
        528438: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return a
                }
            }), t("222007");
            var l = t("509043"),
                n = t("462274"),
                i = t("449918"),
                o = t("49111");

            function a(e, r) {
                var t, a;
                let {
                    pendingThemeColors: s,
                    isPreview: u
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, f = null == e ? void 0 : e.getAvatarURL(null == r ? void 0 : r.guildId, 80), d = (0, i.useColorValue)(o.Color.PRIMARY_530).hex, [c, P] = (0, n.useAvatarColors)(f, d, !1);
                if (!(null == r ? void 0 : r.canEditThemes) && !u) return [null, null];
                let E = null == r ? void 0 : r.getPreviewThemeColors(s),
                    p = null !== (t = null == E ? void 0 : E[0]) && void 0 !== t ? t : (0, l.hex2int)(c),
                    T = null !== (a = null == E ? void 0 : E[1]) && void 0 !== a ? a : (0, l.hex2int)(P);
                return [p, T]
            }
        },
        289918: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return K
                }
            }), t("222007");
            var l, n, i = t("37983"),
                o = t("884691"),
                a = t("414456"),
                s = t.n(a),
                u = t("509043"),
                f = t("446674"),
                d = t("669491"),
                c = t("77078"),
                P = t("79112"),
                E = t("812204"),
                p = t("685665"),
                T = t("462274"),
                _ = t("618017"),
                O = t("190045"),
                U = t("335031"),
                I = t("252063"),
                h = t("38766"),
                m = t("845579"),
                y = t("271938"),
                S = t("42203"),
                v = t("305961"),
                N = t("18494"),
                A = t("697218"),
                L = t("471671"),
                g = t("275623"),
                R = t("945330"),
                C = t("474571"),
                M = t("216422"),
                B = t("987772"),
                b = t("956089"),
                D = t("599110"),
                w = t("315102"),
                x = t("719923"),
                H = t("713135"),
                k = t("581295"),
                F = t("878569"),
                G = t("236100"),
                j = t("590456"),
                W = t("49111"),
                z = t("646718"),
                Y = t("782340"),
                V = t("220817");
            (n = l || (l = {}))[n.SHOULD_LOAD = 0] = "SHOULD_LOAD", n[n.LOADING = 1] = "LOADING", n[n.COMPLETE = 2] = "COMPLETE";
            let X = {
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

            function q(e) {
                let {
                    type: r,
                    shown: l,
                    onClick: n
                } = e, a = (0, f.useStateFromStores)([A.default], () => {
                    let e = A.default.getCurrentUser();
                    return x.default.canUsePremiumProfileCustomization(e)
                }), u = o.useRef(!1), {
                    analyticsLocations: d
                } = (0, p.default)(E.default.BADGE);
                return o.useEffect(() => {
                    l && !u.current && (u.current = !0, D.default.track(W.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: z.PremiumUpsellTypes.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
                        location: {
                            page: Z[r],
                            section: W.AnalyticsSections.NITRO_BANNER,
                            object: W.AnalyticsObjects.NITRO_BADGE
                        },
                        location_stack: d
                    }))
                }, [d, l, r]), (0, i.jsx)(c.Tooltip, {
                    tooltipContentClassName: V.premiumIconTooltipContent,
                    text: a ? Y.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
                    children: e => (0, i.jsx)(c.Clickable, {
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
                        className: s(V.premiumIconWrapper, {
                            [V.visible]: l,
                            [V.clickable]: !a
                        }),
                        children: (0, i.jsx)(b.TextBadge, {
                            color: "rgba(32, 34, 37, 0.8)",
                            text: (0, i.jsx)(M.default, {
                                width: 16,
                                height: 16,
                                className: V.premiumIcon
                            })
                        })
                    })
                })
            }

            function J(e) {
                let {
                    darkenOnHover: r,
                    profileType: t,
                    profileLabel: l,
                    icon: n,
                    ...o
                } = e, a = X[t], s = "pencil" === n ? B.default : C.default;
                return (0, i.jsx)(c.Clickable, {
                    ...o,
                    "aria-label": l,
                    className: r ? V.pencilContainerDark : V.pencilContainer,
                    children: (0, i.jsx)(c.Tooltip, {
                        text: l,
                        children: e => (0, i.jsx)(s, {
                            ...e,
                            width: a,
                            height: a,
                            className: V.editIcon
                        })
                    })
                })
            }

            function K(e) {
                var r, t, l;
                let {
                    user: n,
                    displayProfile: a,
                    bannerSrc: P,
                    onClose: E,
                    guildId: p,
                    profileType: A = j.UserProfileTypes.POPOUT,
                    isHovering: C,
                    animateOnHover: M,
                    allowEdit: B = !0,
                    showPremiumBadgeUpsell: b = !0,
                    hasProfileEffect: D = !1
                } = e, [X, Z] = o.useState((null == a ? void 0 : a.banner) == null ? 2 : 0), K = (0, f.useStateFromStores)([v.default], () => v.default.getGuild(p)), Q = (0, f.useStateFromStores)([y.default], () => y.default.getId()), $ = Q === n.id && B || n.isClyde() && null != K && (0, _.canEditClydeAIProfile)(K), ee = x.default.isPremiumAtLeast(null == a ? void 0 : a.premiumType, z.PremiumTypes.TIER_2), [er, et] = o.useState(!1), el = (0, f.useStateFromStores)([L.default], () => L.default.isFocused()), en = m.GifAutoPlay.getSetting(), ei = (0, c.useToken)(d.default.unsafe_rawColors.PRIMARY_800).hex(), eo = (0, c.getAvatarSize)(c.AvatarSizes.SIZE_80), ea = (0, u.hex2int)((0, T.default)(n.getAvatarURL(p, eo), ei, !1)), es = (0, U.default)(null !== (r = null == a ? void 0 : a.primaryColor) && void 0 !== r ? r : ea).hsl, eu = (0, F.getUserBannerSize)(A), ef = null != P ? P : null == a ? void 0 : a.getBannerURL({
                    size: eu,
                    canAnimate: M || !en ? er : el
                }), ed = null != ef, ec = (0, f.useStateFromStores)([H.default], () => H.default.getUserProfile(n.id)), eP = S.default.getChannel(N.default.getChannelId()), {
                    appsInGDMEnabled: eE,
                    availableApplications: ep
                } = (0, I.usePrivateChannelIntegrationState)({
                    channelId: null !== (t = null == eP ? void 0 : eP.id) && void 0 !== t ? t : ""
                }), eT = null == ec ? void 0 : ec.application, e_ = eE && null != ep.find(e => e.id === (null == eT ? void 0 : eT.id));
                (0, o.useEffect)(() => {
                    if (ed && (ee || n.isClyde()) && 0 === X) {
                        Z(1);
                        let e = new Image;
                        e.src = ef, e.onload = () => Z(2)
                    }
                }, [n, ed, ee, ef, X]), o.useEffect(() => {
                    if (en || !ee) return;
                    let e = null != P ? P : null == a ? void 0 : a.getBannerURL({
                        size: eu,
                        canAnimate: !0
                    });
                    if (null == e) return;
                    let r = new Image;
                    r.src = e
                }, [en, ee, P, a, eu]);
                let eO = (0, h.default)({
                    analyticsLocation: {
                        page: W.AnalyticsPages.USER_POPOUT,
                        section: W.AnalyticsSections.PROFILE_POPOUT
                    }
                });
                return (0, i.jsx)(k.default, {
                    isPremium: ee,
                    hasThemeColors: null !== (l = null == a ? void 0 : a.canEditThemes) && void 0 !== l && l,
                    profileType: A,
                    hasBanner: ed,
                    hasProfileEffect: D,
                    children: (0, i.jsxs)("div", {
                        className: s(V.banner, (0, F.getUserBannerStyles)({
                            profileType: A,
                            user: {
                                hasBanner: ed,
                                isPremium: ee,
                                hasProfileEffect: D
                            }
                        }), {
                            [V.reducedMotion]: !en
                        }),
                        onMouseMove: () => et(!0),
                        onMouseLeave: () => et(!1),
                        style: {
                            backgroundImage: ed && ee ? "url(".concat(ef, ")") : void 0,
                            backgroundColor: 2 !== X ? d.default.unsafe_rawColors.PRIMARY_800.css : es
                        },
                        children: [$ ? null != K || n.isClyde() ? null != K && n.isClyde() && (0, _.canEditClydeAIProfile)(K) ? (0, i.jsx)(J, {
                            profileType: A,
                            profileLabel: Y.default.Messages.CLYDE_SETTINGS,
                            icon: "gear",
                            onClick: () => {
                                null == E || E(), (0, O.default)(K.id)
                            }
                        }) : null == K ? null : (0, i.jsx)(c.Popout, {
                            spacing: 6,
                            position: "bottom",
                            renderPopout: e => {
                                let {
                                    closePopout: r
                                } = e;
                                return (0, i.jsx)(G.default, {
                                    onClose: r,
                                    onSelect: E,
                                    guild: K
                                })
                            },
                            children: e => (0, i.jsx)(J, {
                                darkenOnHover: D && C,
                                profileLabel: Y.default.Messages.EDIT_PROFILE,
                                icon: "pencil",
                                ...e,
                                profileType: A
                            })
                        }) : (0, i.jsx)(J, {
                            darkenOnHover: D && C,
                            profileType: A,
                            profileLabel: Y.default.Messages.EDIT_PROFILE,
                            icon: "pencil",
                            onClick: () => {
                                null == E || E(), eO()
                            }
                        }) : (() => {
                            let e = b && ed && A !== j.UserProfileTypes.SETTINGS;
                            return e ? (0, i.jsx)(q, {
                                type: A,
                                shown: void 0 === C ? er : C,
                                onClick: E
                            }) : null
                        })(), e_ ? A !== j.UserProfileTypes.MODAL ? null : (0, i.jsx)(c.Clickable, {
                            onClick: E,
                            "aria-label": Y.default.Messages.BACK,
                            className: V.pencilContainer,
                            children: (0, i.jsx)(c.Tooltip, {
                                text: Y.default.Messages.BACK,
                                children: e => (0, i.jsx)(R.default, {
                                    ...e,
                                    className: V.closeIcon,
                                    color: "white"
                                })
                            })
                        }) : null, !en && (0, w.isAnimatedImageURL)(ef) && (0, i.jsx)(g.default, {
                            className: V.gifTag
                        })]
                    })
                })
            }
        },
        581295: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return p
                }
            }), t("70102"), t("794252");
            var l = t("37983");
            t("884691");
            var n = t("506838"),
                i = t("769846"),
                o = t("77078"),
                a = t("606292"),
                s = t("476765"),
                u = t("159885"),
                f = t("878569"),
                d = t("590456"),
                c = t("573135"),
                P = t("423713");
            let E = {
                [d.UserProfileTypes.POPOUT]: o.AvatarSizes.SIZE_80,
                [d.UserProfileTypes.MODAL]: o.AvatarSizes.SIZE_120,
                [d.UserProfileTypes.SETTINGS]: o.AvatarSizes.SIZE_80,
                [d.UserProfileTypes.PANEL]: o.AvatarSizes.SIZE_80,
                [d.UserProfileTypes.POMELO_POPOUT]: o.AvatarSizes.SIZE_80,
                [d.UserProfileTypes.CANCEL_MODAL]: o.AvatarSizes.SIZE_56
            };

            function p(e) {
                let {
                    children: r,
                    profileType: t,
                    isPremium: p,
                    hasThemeColors: T,
                    hasBanner: _,
                    forProfileEffectModal: O,
                    hasProfileEffect: U = !1
                } = e, I = E[t], h = (0, s.useUID)(), m = function(e) {
                    let {
                        profileType: r,
                        avatarSize: t,
                        hasBanner: l,
                        isPremium: s,
                        hasThemeColors: P,
                        hasProfileEffect: E
                    } = e, p = c.AvatarDecorationBorderSizes[t];
                    if (null == p) throw Error("Unsupported avatar size for banner mask");
                    let T = (0, a.getDecorationSizeForAvatarSize)(t),
                        {
                            size: _,
                            stroke: O
                        } = (0, o.getAvatarSpecs)(t),
                        U = {
                            avatarSize: _,
                            avatarBorderSize: O,
                            avatarDecorationSize: T,
                            avatarDecorationBorderSize: p,
                            avatarDecorationOffsetY: -(T + 2 * p) / 2,
                            bannerHeight: (0, f.getUserBannerHeight)({
                                profileType: r,
                                user: {
                                    hasBanner: l,
                                    isPremium: s,
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
                    avatarSize: I,
                    hasBanner: _,
                    isPremium: p,
                    hasThemeColors: T,
                    hasProfileEffect: U
                });
                O && (m.bannerWidth = (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH));
                let y = m.avatarSize / 2 + m.avatarBorderSize,
                    S = m.bannerHeight - m.offsetY;
                return (0, l.jsxs)("svg", {
                    className: P.bannerSVGWrapper,
                    viewBox: "0 0 ".concat(m.bannerWidth, " ").concat(m.bannerHeight),
                    style: {
                        minWidth: m.bannerWidth,
                        minHeight: m.bannerHeight
                    },
                    children: [(0, l.jsxs)("mask", {
                        id: h,
                        children: [(0, l.jsx)("rect", {
                            fill: "white",
                            x: "0",
                            y: "0",
                            width: "100%",
                            height: "100%"
                        }), (0, l.jsx)("circle", {
                            fill: "black",
                            cx: m.offsetX + y,
                            cy: S,
                            r: y
                        })]
                    }), (0, l.jsx)("foreignObject", {
                        x: "0",
                        y: "0",
                        width: "100%",
                        height: "100%",
                        overflow: "visible",
                        mask: "url(#".concat(h, ")"),
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
            }), t("794252");
            var l = t("506838"),
                n = t("617258"),
                i = t("769846"),
                o = t("590456"),
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
                    return (0, l.match)(r).with(o.UserProfileTypes.POPOUT, o.UserProfileTypes.POMELO_POPOUT, () => {
                        let e = s({
                            premiumUserWithBanner: a.popoutBannerPremium,
                            premiumUserWithoutBanner: a.popoutNoBannerPremium,
                            default: a.popoutBanner
                        });
                        return e(t)
                    }).with(o.UserProfileTypes.MODAL, () => {
                        let e = s({
                            premiumUserWithBanner: a.profileBannerPremium,
                            premiumUserWithoutBanner: a.profileBanner,
                            default: a.profileBanner
                        });
                        return e(t)
                    }).with(o.UserProfileTypes.SETTINGS, () => a.settingsBanner).with(o.UserProfileTypes.PANEL, () => a.panelBanner).with(o.UserProfileTypes.CANCEL_MODAL, () => a.cancelModalBanner).exhaustive()
                },
                f = e => {
                    let {
                        profileType: r,
                        user: t
                    } = e, a = (0, l.match)(r).with(o.UserProfileTypes.POPOUT, () => {
                        let e = s({
                            premiumUserWithBanner: i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT,
                            premiumUserWithoutBanner: i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT,
                            default: i.default.USER_BANNER_BANNER_HEIGHT_POPOUT
                        });
                        return e(t)
                    }).with(o.UserProfileTypes.MODAL, () => {
                        let e = s({
                            premiumUserWithBanner: i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE,
                            premiumUserWithoutBanner: i.default.USER_BANNER_BANNER_HEIGHT_PROFILE,
                            default: i.default.USER_BANNER_BANNER_HEIGHT_PROFILE
                        });
                        return e(t)
                    }).with(o.UserProfileTypes.POMELO_POPOUT, () => i.default.USER_BANNER_BANNER_HEIGHT_POMELO).with(o.UserProfileTypes.SETTINGS, () => i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS).with(o.UserProfileTypes.PANEL, () => i.default.USER_BANNER_BANNER_HEIGHT_PANEL).with(o.UserProfileTypes.CANCEL_MODAL, () => i.default.USER_BANNER_CANCEL_MODAL_HEIGHT).exhaustive();
                    return (0, n.cssValueToNumber)(a)
                },
                d = Object.freeze({
                    [o.UserProfileTypes.POPOUT]: 480,
                    [o.UserProfileTypes.PANEL]: 480,
                    [o.UserProfileTypes.MODAL]: 600,
                    [o.UserProfileTypes.SETTINGS]: 600,
                    [o.UserProfileTypes.POMELO_POPOUT]: 432,
                    [o.UserProfileTypes.CANCEL_MODAL]: 172
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
                    return p
                }
            }), t("794252");
            var l = t("37983"),
                n = t("884691"),
                i = t("414456"),
                o = t.n(i),
                a = t("506838"),
                s = t("217513"),
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
                    profileType: p,
                    className: T,
                    pendingThemeColors: _,
                    pendingProfileEffectId: O,
                    useDefaultClientTheme: U,
                    children: I,
                    forceShowPremium: h = !1,
                    showOutOfBoundaryComponents: m = !1
                } = e, y = n.useRef(null), S = (0, s.default)(i.id, E), {
                    profileTheme: v
                } = (0, u.default)(i, S, {
                    themeElementRef: y,
                    pendingThemeColors: _,
                    isPreview: h,
                    useDefaultClientTheme: U
                }), N = (null == S ? void 0 : S.canEditThemes) || h, A = n.useMemo(() => ({
                    profileType: p,
                    profileTheme: v
                }), [p, v]);
                return (0, l.jsx)("div", {
                    ref: y,
                    className: o((r = p, (0, a.match)(r).with(f.UserProfileTypes.POPOUT, f.UserProfileTypes.SETTINGS, f.UserProfileTypes.CANCEL_MODAL, () => c.userPopoutOuter).with(f.UserProfileTypes.MODAL, () => c.userProfileModalOuter).with(f.UserProfileTypes.PANEL, () => c.userPanelOuter).with(f.UserProfileTypes.CARD, () => c.userCardOuter).exhaustive()), N ? c.userProfileOuterThemed : c.userProfileOuterUnthemed, d.profileColors, m ? c.showOutOfBoundaryComponents : void 0, "theme-".concat(v), T),
                    children: (0, l.jsx)("div", {
                        className: o((t = p, (0, a.match)(t).with(f.UserProfileTypes.POPOUT, f.UserProfileTypes.SETTINGS, f.UserProfileTypes.CANCEL_MODAL, () => c.userPopoutInner).with(f.UserProfileTypes.MODAL, () => c.userProfileModalInner).with(f.UserProfileTypes.PANEL, () => c.userPanelInner).with(f.UserProfileTypes.CARD, () => c.userCardInner).exhaustive()), function() {
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
                        }((null == S ? void 0 : S.canUsePremiumProfileCustomization) || h, null !== O && ((null == S ? void 0 : S.banner) != null || void 0 !== O), p)),
                        children: (0, l.jsx)(P.Provider, {
                            value: A,
                            children: I
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
                    profileType: s
                } = n.useContext(P);
                return (0, l.jsx)("div", {
                    className: o((r = s, (0, a.match)(r).with(f.UserProfileTypes.POPOUT, f.UserProfileTypes.SETTINGS, () => c.userPopoutOverlayBackground).with(f.UserProfileTypes.MODAL, () => c.userProfileModalOverlayBackground).with(f.UserProfileTypes.PANEL, () => c.userPanelOverlayBackground).otherwise(() => c.overlayBackground)), t),
                    children: i
                })
            };
            var p = E
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
                o = t("49111"),
                a = t("782340"),
                s = t("364547");
            let u = {
                    page: o.AnalyticsPages.GUILD_CHANNEL,
                    section: o.AnalyticsSections.PROFILE_POPOUT,
                    object: o.AnalyticsObjects.EDIT_PER_SERVER_IDENTITY
                },
                f = {
                    page: o.AnalyticsPages.USER_POPOUT,
                    section: o.AnalyticsSections.PROFILE_POPOUT
                };

            function d(e) {
                let {
                    onSelect: r,
                    onClose: t,
                    guild: o
                } = e, d = (0, i.default)({
                    guild: o,
                    analyticsLocation: u
                }), c = (0, i.default)({
                    analyticsLocation: f
                });
                return (0, l.jsxs)(n.Menu, {
                    className: s.popoutMenu,
                    onSelect: r,
                    navId: "edit-profile-popout",
                    onClose: t,
                    "aria-label": a.default.Messages.PROFILE_ACTIONS_MENU_LABEL,
                    children: [(0, l.jsx)(n.MenuItem, {
                        id: "edit-server-profile",
                        label: a.default.Messages.CHANGE_IDENTITY,
                        subtext: a.default.Messages.CHANGE_IDENTITY_SERVER_PROFILE_MENU_HELP,
                        action: () => d()
                    }), (0, l.jsx)(n.MenuItem, {
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
            }), t("222007");
            var l = t("884691"),
                n = t("509043"),
                i = t("446674"),
                o = t("841098"),
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
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, [p, T] = (0, u.default)(e, r, {
                    pendingThemeColors: c,
                    isPreview: P
                }), [_, O, U] = (0, i.useStateFromStoresArray)([a.default], () => [a.default.desaturateUserColors, a.default.saturation, a.default.syncProfileThemeWithUserTheme]), I = (0, o.default)(), h = l.useCallback(() => U || E ? I : (0, s.getProfileTheme)(p), [E, U, I, p]), [m, y] = l.useState(h()), S = (0, s.useProfileThemeValues)(m), v = (0, s.useDividerColor)(m, p), N = (0, s.useMessageInputBorderColor)(m, T), A = l.useCallback((e, r) => (0, n.int2hsl)(e, _, null, r), [_]);
                l.useEffect(() => {
                    y(h())
                }, [p, U, I, E, h]);
                let L = (0, s.useAvatarBorderColor)(m, p, U),
                    g = null != L ? (0, n.int2hsl)(L, !1, _ ? O : null) : null,
                    R = e => f.forEach(r => {
                        e.style.removeProperty(r)
                    });
                return l.useEffect(() => {
                    if (null != p && null != T && null != m && null != L && null != v && null != N) {
                        let e = U && m !== I ? null == S ? void 0 : S.overlaySyncedWithUserTheme : null == S ? void 0 : S.overlay;
                        d(t, "--profile-gradient-primary-color", A(p)), d(t, "--profile-gradient-secondary-color", A(T)), d(t, "--profile-gradient-button-color", A((0, s.calculateButtonColor)(p))), d(t, "--profile-gradient-overlay-color", e), d(t, "--profile-body-background-color", null == S ? void 0 : S.sectionBox), d(t, "--profile-body-background-hover", null == S ? void 0 : S.profileBodyBackgroundHover), d(t, "--profile-body-divider-color", A(v, null == S ? void 0 : S.dividerOpacity)), d(t, "--profile-avatar-border-color", A(L)), d(t, "--profile-message-input-border-color", A(N)), d(t, "--profile-note-background-color", null == S ? void 0 : S.noteBackgroundColor), d(t, "--profile-role-pill-background-color", null == S ? void 0 : S.rolePillBackgroundColor), d(t, "--profile-role-pill-border-color", null == S ? void 0 : S.rolePillBorderColor)
                    } else(null == t ? void 0 : t.current) != null && R(null == t ? void 0 : t.current)
                }, [p, T, L, m, I, t, A, U, v, null == S ? void 0 : S.overlaySyncedWithUserTheme, null == S ? void 0 : S.overlay, null == S ? void 0 : S.sectionBox, null == S ? void 0 : S.profileBodyBackgroundHover, null == S ? void 0 : S.dividerOpacity, null == S ? void 0 : S.noteBackgroundColor, null == S ? void 0 : S.rolePillBackgroundColor, null == S ? void 0 : S.rolePillBorderColor, N]), {
                    profileTheme: null != m ? m : I,
                    primaryProfileColor: p,
                    avatarBorderColor: g
                }
            }
        }
    }
]);
//# sourceMappingURL=5399.67b6fe86854bee062580.js.map