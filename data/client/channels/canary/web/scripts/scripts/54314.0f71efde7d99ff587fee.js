(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["54314"], {
        604689: function(e, t, l) {
            "use strict";
            e.exports = l.p + "a15e231b105dd8282a02.svg"
        },
        340066: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var s = l("884691"),
                i = (e, t) => {
                    let l = (0, s.useRef)(e);
                    (0, s.useEffect)(() => {
                        l.current = e
                    }, [e]), (0, s.useEffect)(() => {
                        if (null === t) return;
                        let e = setTimeout(() => l.current(), t);
                        return () => clearTimeout(e)
                    }, [t, l])
                }
        },
        888355: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useIsDMsToClydeEnabled: function() {
                    return o
                }
            });
            var s = l("446674"),
                i = l("862205"),
                n = l("305961"),
                u = l("980215");
            let a = (0, i.createExperiment)({
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

            function o() {
                let {
                    isDMsToClydeEnabled: e
                } = a.useExperiment({
                    location: "dbd3ac_1"
                }, {
                    autoTrackExposure: !1
                }), t = (0, s.useStateFromStoresArray)([n.default], () => n.default.getGuildIds()), l = t.some(e => (0, u.getClydeExperimentEnabled)(n.default.getGuild(e)));
                return e && l
            }
        },
        411691: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                CollectiblesShopMarketingVariants: function() {
                    return i
                },
                default: function() {
                    return a
                }
            });
            var s, i, n = l("862205");
            (s = i || (i = {}))[s.DEFAULT = 0] = "DEFAULT", s[s.WINTER_2023_DROP = 1] = "WINTER_2023_DROP", s[s.MONSTER_DROP = 2] = "MONSTER_DROP";
            let u = (0, n.createExperiment)({
                kind: "user",
                id: "2023-12_collectibles_shop_marketing",
                label: "Collectibles Shop Marketing Variations",
                defaultConfig: {
                    variant: 0
                },
                treatments: [{
                    id: 1,
                    label: "Winter 2023",
                    config: {
                        variant: 1
                    }
                }, {
                    id: 2,
                    label: "Jan 2024",
                    config: {
                        variant: 2
                    }
                }]
            });
            var a = e => u.useExperiment({
                location: e
            }).variant
        },
        235145: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useGetDismissibleContent: function() {
                    return _
                }
            });
            var s = l("884691"),
                i = l("446674"),
                n = l("374363"),
                u = l("162771"),
                a = l("674268"),
                o = l("989691"),
                r = l("862853"),
                d = l("10641"),
                c = l("846614"),
                f = l("397336");

            function _(e, t, l) {
                let _ = (0, i.useStateFromStores)([n.default], () => {
                        var e;
                        return null === (e = n.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                    }),
                    S = (0, i.useStateFromStores)([u.default], () => u.default.getGuildId()),
                    T = (0, c.useNewUserDismissibleContent)(e),
                    E = null;
                n.default.hasLoaded(f.UserSettingsTypes.PRELOADED_USER_SETTINGS) ? E = T.find(e => null == _ || !(0, a.hasBit)(_, e)) : null != _ && (E = T.find(e => !(0, a.hasBit)(_, e)));
                let C = (0, r.default)(e => null != E && e.currentlyShown.has(E)),
                    p = (0, i.useStateFromStores)([o.default], () => null != E && o.default.hasUserHitDCCap(E));
                s.useEffect(() => {
                    if (null != E) return (0, d.requestMarkDismissibleContentAsShown)(E, {
                        groupName: t,
                        guildId: S
                    }, l), () => {
                        if (null == E) return;
                        let e = !o.default.hasUserHitDCCap();
                        (0, r.removeCandidateContent)({
                            content: E,
                            groupName: t
                        }, e)
                    }
                }, [E, t, S, p, l]);
                let m = s.useCallback(e => {
                    null != E && (0, d.markDismissibleContentAsDismissed)(E, {
                        dismissAction: e,
                        groupName: t,
                        guildId: S
                    })
                }, [E, t, S]);
                return [C && null != E ? E : null, m]
            }
        },
        384997: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useSelectedDismissibleContent: function() {
                    return d
                },
                default: function() {
                    return c
                }
            }), l("222007");
            var s = l("37983"),
                i = l("884691"),
                n = l("65597"),
                u = l("901165"),
                a = l("495226"),
                o = l("235145"),
                r = l("994428");

            function d(e, t) {
                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    s = (0, n.default)([u.default], () => !!__OVERLAY__ && u.default.isInstanceUILocked()),
                    [d, c] = (0, o.useGetDismissibleContent)(e, t, s),
                    f = !l && null != d && !a.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(d);
                return i.useEffect(() => () => {
                    f && c(r.ContentDismissActionType.AUTO_DISMISS)
                }, [f, c]), [d, c]
            }

            function c(e) {
                let {
                    contentTypes: t,
                    children: l,
                    groupName: i,
                    bypassAutoDismiss: n
                } = e, [u, a] = d(t, i, n);
                return (0, s.jsx)(s.Fragment, {
                    children: l({
                        visibleContent: u,
                        markAsDismissed: a
                    })
                })
            }
        },
        5667: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                CaretPosition: function() {
                    return n
                },
                ButtonLayout: function() {
                    return u
                },
                default: function() {
                    return S
                }
            });
            var s, i, n, u, a = l("37983"),
                o = l("884691"),
                r = l("414456"),
                d = l.n(r),
                c = l("77078"),
                f = l("994428"),
                _ = l("142190");

            function S(e) {
                let {
                    className: t,
                    header: l,
                    headerClassName: s,
                    content: i,
                    contentClassName: n,
                    buttonCTA: u,
                    secondaryButtonCTA: r,
                    onClick: S,
                    onSecondaryClick: T,
                    onComponentMount: E,
                    asset: C,
                    markAsDismissed: p,
                    caretPosition: m = "caretTopCenter",
                    buttonLayout: I = 0
                } = e;
                o.useEffect(() => {
                    null == E || E()
                }, []);
                let L = null != r;
                return (0, a.jsxs)("div", {
                    className: d(t, _.upsellTooltipWrapper, _[m]),
                    children: [C, null == l ? null : (0, a.jsx)(c.Heading, {
                        className: d(s, _.upsellTooltipHeader),
                        variant: "heading-md/semibold",
                        children: l
                    }), (0, a.jsx)(c.Text, {
                        color: "always-white",
                        className: d(n, _.content),
                        variant: "text-sm/normal",
                        children: i
                    }), null != u || L ? (0, a.jsxs)("div", {
                        className: d(_.upsellButtonsContainer, {
                            [_.upsellButtonsAdjacent]: 0 === I,
                            [_.upsellButtonsStacked]: 1 === I
                        }),
                        children: [L ? (0, a.jsx)(c.Button, {
                            color: c.Button.Colors.BRAND,
                            onClick: () => {
                                null == T || T(), null == p || p(f.ContentDismissActionType.SECONDARY)
                            },
                            children: r
                        }) : null, null == u ? null : (0, a.jsx)(c.Button, {
                            className: d({
                                [_.fullWidth]: !L
                            }),
                            color: c.Button.Colors.BRAND,
                            look: c.Button.Looks.INVERTED,
                            onClick: e => {
                                S(e), null == p || p(f.ContentDismissActionType.PRIMARY)
                            },
                            children: u
                        })]
                    }) : null]
                })
            }(s = n || (n = {})).TOP_CENTER = "caretTopCenter", s.TOP_RIGHT = "caretTopRight", s.TOP_LEFT = "caretTopLeft", s.BOTTOM_CENTER = "caretBottomCenter", s.BOTTOM_LEFT = "caretBottomLeft", s.LEFT_CENTER = "caretLeftCenter", s.LEFT_TOP = "caretLeftTop", s.RIGHT_CENTER = "caretRightCenter", (i = u || (u = {}))[i.ADJACENT = 0] = "ADJACENT", i[i.STACKED = 1] = "STACKED", S.CaretPosition = n, S.ButtonLayout = u
        },
        561845: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var s = l("446674"),
                i = l("888355"),
                n = l("267567"),
                u = l("845579"),
                a = l("271938"),
                o = l("26989"),
                r = l("27618"),
                d = l("680894");

            function c(e, t) {
                let l = (0, s.useStateFromStores)([a.default], () => a.default.getId() === e),
                    c = (0, s.useStateFromStores)([n.default], () => null != t && n.default.isLurking(t)),
                    f = u.RestrictedGuildIds.useSetting(),
                    _ = (0, i.useIsDMsToClydeEnabled)() && e === d.CLYDE_AI_USER_ID;
                return (0, s.useStateFromStores)([r.default, o.default], () => !l && !c && (r.default.isFriend(e) || null != o.default.memberOf(e).find(e => !f.includes(e))) || _)
            }
        },
        874419: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            });
            var s = l("37983"),
                i = l("884691"),
                n = l("446674"),
                u = l("151426"),
                a = l("79112"),
                o = l("685665"),
                r = l("10641"),
                d = l("5667"),
                c = l("783142"),
                f = l("713135"),
                _ = l("49111"),
                S = l("994428"),
                T = l("397336"),
                E = l("782340"),
                C = l("393036");
            let p = u.DismissibleContent.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP,
                m = e => {
                    (0, r.markDismissibleContentAsDismissed)(p, {
                        dismissAction: e,
                        forceTrack: !0
                    })
                };
            var I = e => {
                let {
                    position: t,
                    onClose: l
                } = e, {
                    analyticsLocations: u
                } = (0, o.default)(), r = (0, n.useStateFromStores)([f.default], () => f.default.getIsAccessibilityTooltipViewed());
                return i.useEffect(() => r ? () => m(S.ContentDismissActionType.AUTO) : () => (0, c.handleProfileAccessibilityTooltipViewed)(), [r]), (0, s.jsx)(d.default, {
                    markAsDismissed: m,
                    header: E.default.Messages.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP_TITLE,
                    headerClassName: C.header,
                    content: (0, s.jsx)("div", {
                        className: C.content,
                        children: E.default.Messages.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP_DESCRIPTION
                    }),
                    buttonCTA: E.default.Messages.TAKE_ME_THERE,
                    onClick: () => {
                        null == l || l(), a.default.open(_.UserSettingsSections.ACCESSIBILITY, null, {
                            scrollPosition: T.AccessibilityScrollPositions.SYNC_PROFILE_THEME_WITH_USER_THEME,
                            analyticsLocations: u
                        })
                    },
                    secondaryButtonCTA: E.default.Messages.DISMISS,
                    onSecondaryClick: l,
                    buttonLayout: d.ButtonLayout.STACKED,
                    caretPosition: "left" === t ? d.CaretPosition.RIGHT_CENTER : d.CaretPosition.LEFT_CENTER
                })
            }
        },
        641055: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            }), l("222007");
            var s = l("37983"),
                i = l("884691"),
                n = l("446674"),
                u = l("151426"),
                a = l("819855"),
                o = l("77078"),
                r = l("841098"),
                d = l("340066"),
                c = l("206230"),
                f = l("10641"),
                _ = l("874419"),
                S = l("430312"),
                T = l("590456"),
                E = l("393036");
            let C = () => {
                let e = (0, f.useIsDismissibleContentDismissed)(u.DismissibleContent.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP),
                    t = (0, n.useStateFromStores)([c.default], () => c.default.syncProfileThemeWithUserTheme),
                    l = (0, r.default)(),
                    {
                        profileTheme: s
                    } = i.useContext(S.UserProfileContext),
                    o = (0, a.isThemeDark)(l) && (0, a.isThemeLight)(s);
                return !e && !t && o
            };
            var p = e => {
                let {
                    onTooltipClose: t
                } = e, {
                    profileType: l
                } = i.useContext(S.UserProfileContext), n = l === T.UserProfileTypes.POPOUT, u = C(), [a, r] = i.useState(!n && u);
                return (0, d.default)(() => r(u), n ? 300 : null), (0, s.jsx)(o.Popout, {
                    shouldShow: a,
                    position: "left",
                    align: "center",
                    spacing: 32,
                    ignoreModalClicks: !0,
                    onRequestClose: () => {
                        !n && r(!1)
                    },
                    renderPopout: e => {
                        let {
                            position: l
                        } = e;
                        return (0, s.jsx)(_.default, {
                            position: null != l ? l : "left",
                            onClose: t
                        })
                    },
                    children: () => (0, s.jsx)("span", {
                        className: E.hidden
                    })
                })
            }
        },
        981601: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return G
                }
            }), l("222007");
            var s = l("37983"),
                i = l("884691"),
                n = l("627445"),
                u = l.n(n),
                a = l("446674"),
                o = l("77078"),
                r = l("901582"),
                d = l("252744"),
                c = l("340066"),
                f = l("750560"),
                _ = l("575365"),
                S = l("502651"),
                T = l("812204"),
                E = l("685665"),
                C = l("299285"),
                p = l("442939"),
                m = l("373469"),
                I = l("26989"),
                L = l("305961"),
                P = l("824563"),
                v = l("27618"),
                O = l("697218"),
                h = l("599110"),
                A = l("713135"),
                g = l("561845"),
                U = l("217513"),
                b = l("641055"),
                R = l("430312"),
                D = l("763866"),
                y = l("789321"),
                N = l("627601"),
                M = l("935409"),
                x = l("849674"),
                k = l("590456"),
                F = l("49111"),
                B = l("450484"),
                j = l("304118");

            function w(e) {
                e.stopPropagation()
            }

            function H(e) {
                let {
                    user: t,
                    guildId: l,
                    channelId: n,
                    setNote: u,
                    closePopout: O,
                    setPopoutRef: H,
                    disableUserProfileLink: G = __OVERLAY__,
                    analyticsParams: Y = {}
                } = e, z = i.useRef(null), V = (0, U.default)(t.id, l), W = (0, d.default)(z), K = (0, a.useStateFromStores)([A.default], () => {
                    var e;
                    return null === (e = A.default.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
                }), {
                    AnalyticsLocationProvider: J
                } = (0, E.default)(T.default.PROFILE_POPOUT), q = (0, a.useStateFromStores)([L.default], () => null != l ? L.default.getGuild(l) : null), Z = (0, a.useStateFromStores)([I.default], () => null != l ? I.default.getMember(l, t.id) : null), Q = t.isNonUserBot(), {
                    activity: X,
                    customStatusActivity: $,
                    status: ee,
                    isMobile: et,
                    isApplicationStreaming: el
                } = (0, a.useStateFromStoresObject)([m.default, P.default], () => {
                    let e = null != m.default.getAnyStreamForUser(t.id);
                    return {
                        activity: P.default.findActivity(t.id, t => {
                            let {
                                type: l
                            } = t;
                            return e ? l === F.ActivityTypes.PLAYING : l !== F.ActivityTypes.CUSTOM_STATUS
                        }),
                        customStatusActivity: P.default.findActivity(t.id, e => {
                            let {
                                type: t
                            } = e;
                            return t === F.ActivityTypes.CUSTOM_STATUS
                        }),
                        status: Q ? null : P.default.getStatus(t.id),
                        isMobile: P.default.isMobileOnline(t.id),
                        isApplicationStreaming: e
                    }
                }), [es, ei] = i.useState(!1), en = i.useMemo(() => null != l ? {
                    [l]: [t.id]
                } : {}, [l, t.id]);
                (0, f.useSubscribeGuildMembers)(en);
                let eu = (0, g.default)(t.id, l),
                    ea = (0, x.useShouldShowUserPopoutCollectiblesUpsell)({
                        popoutUser: t,
                        source: N.UserPopoutUpsellSource.USER_POPOUT,
                        guildId: l
                    }),
                    [eo, er] = i.useState(!1);
                (0, c.default)(() => er(!0), ea.shouldShow ? 250 : null);
                let ed = (0, p.useGetOrFetchApplication)(null == X ? void 0 : X.application_id);
                return i.useEffect(() => {
                    null == H || H(null == z ? void 0 : z.current)
                }, [z, H]), i.useEffect(() => {
                    if (!es)((null == X ? void 0 : X.application_id) == null || null != ed) && (null == l || (null == Z ? void 0 : Z.fullProfileLoadedTimestamp) != null) && (function() {
                        var e;
                        let s, i, u;
                        null != X && (s = X.party, i = X.assets, u = null != X.application_id ? C.default.getApplication(X.application_id) : null);
                        let a = ee;
                        ee === F.StatusTypes.ONLINE && (a = et ? F.AnalyticsUserStatusTypes.ONLINE_MOBILE : F.AnalyticsUserStatusTypes.ONLINE_DESKTOP);
                        let o = null != Z ? {
                                has_nickname: !!(null == Z ? void 0 : Z.nick),
                                has_guild_member_avatar: !!(null == Z ? void 0 : Z.avatar),
                                has_guild_member_banner: !!(null == V ? void 0 : V.isUsingGuildMemberBanner()),
                                has_guild_member_bio: !!(null == V ? void 0 : V.isUsingGuildMemberBio())
                            } : {},
                            r = null != K ? {
                                other_application_id: null == K ? void 0 : K.id,
                                other_application_name: t.toString()
                            } : {};
                        h.default.track(F.AnalyticEvents.OPEN_POPOUT, {
                            type: "Profile Popout",
                            guild_id: l,
                            channel_id: n,
                            other_user_id: t.id,
                            application_id: null != X ? X.application_id : void 0,
                            application_name: null != X ? X.name : void 0,
                            sku_id: null != u ? u.primarySkuId : null,
                            is_friend: v.default.isFriend(t.id),
                            has_images: !!(null !== (e = null == i ? void 0 : i.large_image) && void 0 !== e ? e : null == i ? void 0 : i.small_image),
                            party_max: null != s && null != s.size ? s.size[1] : void 0,
                            party_id: null != s ? s.id : void 0,
                            party_platform: null != s && (0, B.isSpotifyParty)(s.id) ? F.PlatformTypes.SPOTIFY : null,
                            game_platform: (0, _.default)(X),
                            profile_user_status: a,
                            is_streaming: el,
                            has_custom_status: null != $,
                            has_avatar_decoration: null != t.avatarDecoration,
                            has_profile_effect: (null == V ? void 0 : V.profileEffectId) != null,
                            profile_has_nitro_customization: null != V && (null == V ? void 0 : V.hasPremiumCustomization()),
                            profile_has_theme_color_customized: null != V && V.hasThemeColors(),
                            profile_has_theme_animation: (null == V ? void 0 : V.popoutAnimationParticleType) != null,
                            ...o,
                            ...r,
                            ...Y
                        })
                    }(), ei(!0))
                }, [Z, null == X ? void 0 : X.application_id, ed, es, l]), (0, s.jsx)(J, {
                    children: (0, s.jsx)(r.default, {
                        section: F.AnalyticsSections.PROFILE_POPOUT,
                        children: (0, s.jsx)(o.Dialog, {
                            ref: z,
                            "aria-label": t.username,
                            onClick: w,
                            onContextMenu: w,
                            style: ea.shouldShow ? {
                                marginTop: y.DEFAULT_COLLECTIBLES_UPSELL_HEIGHT
                            } : void 0,
                            children: (0, s.jsxs)(R.default, {
                                user: t,
                                guildId: l,
                                profileType: k.UserProfileTypes.POPOUT,
                                className: ea.shouldShow ? j.hasCollectiblesUpsell : void 0,
                                showOutOfBoundaryComponents: eo,
                                children: [(0, s.jsx)(M.default, {
                                    user: t,
                                    displayProfile: V,
                                    guildId: l,
                                    channelId: n,
                                    onClose: () => null == O ? void 0 : O(),
                                    isMobile: et,
                                    isStreaming: (0, S.default)(X),
                                    status: ee,
                                    disableUserProfileLink: G,
                                    isHovering: W,
                                    upsell: ea.shouldShow ? (0, s.jsx)(y.default, {
                                        user: t,
                                        upsellSource: N.UserPopoutUpsellSource.USER_POPOUT,
                                        displayProfile: V,
                                        onClose: O,
                                        ...ea
                                    }) : void 0
                                }), (0, s.jsxs)(R.default.Inner, {
                                    children: [(0, s.jsx)(b.default, {
                                        onTooltipClose: O
                                    }), (0, s.jsx)(D.default, {
                                        activity: X,
                                        customStatusActivity: $,
                                        displayProfile: V,
                                        user: t,
                                        guild: q,
                                        guildMember: Z,
                                        channelId: n,
                                        onClose: O,
                                        setNote: u,
                                        canDM: eu
                                    })]
                                })]
                            })
                        })
                    })
                })
            }
            var G = i.memo(function(e) {
                let {
                    userId: t,
                    user: l,
                    ...i
                } = e, n = (0, a.useStateFromStores)([O.default], () => O.default.getUser(t), [t]), o = null != l ? l : n;
                return u(null != o, "Unexpected missing user"), (0, s.jsx)(H, {
                    user: o,
                    ...i
                })
            })
        },
        789321: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                DEFAULT_COLLECTIBLES_UPSELL_HEIGHT: function() {
                    return b
                },
                default: function() {
                    return y
                }
            }), l("222007"), l("794252");
            var s = l("37983"),
                i = l("884691"),
                n = l("414456"),
                u = l.n(n),
                a = l("506838"),
                o = l("65597"),
                r = l("77078"),
                d = l("731898"),
                c = l("206230"),
                f = l("812204"),
                _ = l("685665"),
                S = l("606292"),
                T = l("688318"),
                E = l("21526"),
                C = l("853987"),
                p = l("491232"),
                m = l("845962"),
                I = l("697218"),
                L = l("945330"),
                P = l("719923"),
                v = l("627601"),
                O = l("994428"),
                h = l("782340"),
                A = l("304118"),
                g = l("604689");

            function U(e) {
                let {
                    onClick: t
                } = e;
                return (0, s.jsx)(r.Clickable, {
                    className: A.closeButton,
                    onClick: t,
                    "aria-label": h.default.Messages.DISMISS,
                    children: (0, s.jsx)(L.default, {
                        className: A.closeIcon,
                        width: 18,
                        height: 18
                    })
                })
            }
            let b = 76,
                R = e => (0, s.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    tag: "span",
                    className: A.ctaLink,
                    children: e
                }),
                D = e => {
                    let {
                        user: t,
                        onClick: l
                    } = e, {
                        avatarDecorationSrc: i
                    } = (0, T.default)({
                        user: t,
                        size: (0, S.getDecorationSizeForAvatarSize)(r.AvatarSizes.SIZE_48)
                    });
                    return (0, s.jsx)(r.Clickable, {
                        className: A.avatarButton,
                        onClick: l,
                        "aria-label": h.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                        children: (0, s.jsx)(r.Avatar, {
                            src: g,
                            avatarDecoration: i,
                            size: r.AvatarSizes.SIZE_48,
                            "aria-hidden": !0
                        })
                    })
                };
            var y = e => {
                var t;
                let {
                    user: l,
                    displayProfile: n,
                    onClose: S,
                    onDismiss: T,
                    isInSidebar: L = !1,
                    canShowAvatarDecorationUpsell: g = !1,
                    canShowProfileEffectUpsell: y = !1,
                    upsellSource: N
                } = e, {
                    analyticsLocations: M
                } = (0, _.default)(f.default.COLLECTIBLES_USER_POPOUT_UPSELL), x = (0, o.default)([c.default], () => c.default.useReducedMotion), {
                    ref: k,
                    height: F
                } = (0, d.default)(), B = i.useMemo(() => ({
                    top: "-".concat((null != F ? F : b) + 6, "px")
                }), [F]), j = (0, o.default)([I.default], () => I.default.getCurrentUser()), w = P.default.canUseCollectibles(j), {
                    setUpsellSource: H,
                    reset: G
                } = (0, v.useUserPopoutCollectiblesUpsellStore)();
                i.useEffect(() => (H(N), () => {
                    G()
                }), [H, N, G]);
                let Y = (0, o.default)([m.default], () => m.default.getProfileEffectById(null == n ? void 0 : n.profileEffectId)),
                    [z, V] = (0, o.useStateFromStoresArray)([C.default], () => {
                        var e;
                        return [(0, p.isPremiumCollectiblesProduct)(C.default.getProduct(null === (e = l.avatarDecoration) || void 0 === e ? void 0 : e.skuId)), (0, p.isPremiumCollectiblesProduct)(C.default.getProduct(null == Y ? void 0 : Y.skuId))]
                    }),
                    W = i.useCallback(() => {
                        var e, t, s, i;
                        null == T || T(O.ContentDismissActionType.PRIMARY), null == S || S(), (0, E.openCollectiblesShop)({
                            analyticsLocations: M,
                            analyticsSource: f.default.COLLECTIBLES_USER_POPOUT_UPSELL,
                            initialProductSkuId: z ? null !== (s = null == Y ? void 0 : Y.skuId) && void 0 !== s ? s : null === (e = l.avatarDecoration) || void 0 === e ? void 0 : e.skuId : null !== (i = null === (t = l.avatarDecoration) || void 0 === t ? void 0 : t.skuId) && void 0 !== i ? i : null == Y ? void 0 : Y.skuId
                        })
                    }, [T, S, M, null == Y ? void 0 : Y.skuId, null === (t = l.avatarDecoration) || void 0 === t ? void 0 : t.skuId, z]),
                    K = i.useCallback(() => {
                        null == T || T(O.ContentDismissActionType.DISMISS)
                    }, [T]);
                if (!g && !y) return null;
                let J = (0, a.match)([g, y]).with([!0, !0], () => z && V && w ? h.default.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NITRO.format({
                    openShop: R
                }) : z && V ? h.default.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NON_NITRO.format({
                    openShop: R
                }) : h.default.Messages.COMBINED_COLLECTIBLES_SOCIAL_UPSELL.format({
                    openShop: R
                })).with([!0, !1], () => z && w ? h.default.Messages.STARTER_AVATAR_DECORATIONS_SOCIAL_UPSELL_NITRO.format({
                    openShop: R
                }) : h.default.Messages.AVATAR_DECORATIONS_SOCIAL_UPSELL.format({
                    openShop: R
                })).with([!1, !0], () => V && w ? h.default.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NITRO.format({
                    openShop: R
                }) : (V && h.default.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NON_NITRO.format({
                    openShop: R
                }), h.default.Messages.PROFILE_EFFECTS_SOCIAL_UPSELL.format({
                    openShop: R
                }))).otherwise(() => null);
                return (0, s.jsx)("div", {
                    style: B,
                    className: u(A.containerWrapper, {
                        [A.animation]: !x,
                        [A.inSidebar]: L
                    }),
                    ref: k,
                    children: (0, s.jsxs)("div", {
                        className: A.container,
                        children: [g && (0, s.jsx)(D, {
                            user: l,
                            onClick: W
                        }), (0, s.jsx)(r.Clickable, {
                            className: g ? A.contentWithAvatar : A.content,
                            onClick: W,
                            "aria-label": h.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                            children: (0, s.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "text-normal",
                                tag: "span",
                                children: J
                            })
                        }), (0, s.jsx)("div", {
                            className: A.buttons,
                            children: (0, s.jsx)(U, {
                                onClick: K
                            })
                        })]
                    })
                })
            }
        },
        627601: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                UserPopoutUpsellSource: function() {
                    return i
                },
                useUserPopoutCollectiblesUpsellStore: function() {
                    return a
                }
            });
            var s, i, n = l("308503");
            (s = i || (i = {})).PROFILE_PANEL = "profile panel", s.USER_POPOUT = "user popout";
            let u = {
                    upsellSource: null
                },
                a = (0, n.default)(e => ({
                    ...u,
                    setUpsellSource: t => e({
                        upsellSource: t
                    }),
                    reset: () => {
                        e({
                            ...u
                        })
                    }
                }))
        },
        849674: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useShouldShowUserPopoutCollectiblesUpsell: function() {
                    return E
                }
            }), l("222007");
            var s = l("884691"),
                i = l("627445"),
                n = l.n(i),
                u = l("65597"),
                a = l("151426"),
                o = l("327037"),
                r = l("875212"),
                d = l("619935"),
                c = l("411691"),
                f = l("384997"),
                _ = l("697218"),
                S = l("217513"),
                T = l("627601");
            let E = e => {
                let {
                    popoutUser: t,
                    source: l,
                    guildId: i
                } = e, E = "useShouldShowUserPopoutCollectiblesUpsell";
                (0, r.useTriggerDebuggingAA)({
                    location: E + "auto on",
                    autoTrackExposure: !0
                }), (0, r.useTriggerDebuggingAA)({
                    location: E + "auto off",
                    autoTrackExposure: !1
                });
                let C = (0, c.default)(E),
                    {
                        upsellSource: p
                    } = (0, T.useUserPopoutCollectiblesUpsellStore)(),
                    m = (0, u.default)([_.default], () => _.default.getCurrentUser());
                n(null != m, "currentUser should not be null");
                let I = (0, d.useBlockedPaymentsConfig)(),
                    L = (0, S.default)(m.id, i),
                    P = (0, S.default)(t.id, i);
                s.useEffect(() => {
                    null == L && (0, o.fetchProfile)(m.id)
                }, [L, m]);
                let v = C !== c.CollectiblesShopMarketingVariants.DEFAULT && (null == m ? void 0 : m.id) !== t.id && !I && !(null != p && p !== l),
                    O = v && (null == m ? void 0 : m.avatarDecoration) == null && (null == t ? void 0 : t.avatarDecoration) != null,
                    h = v && null != L && null == L.profileEffectId && (null == P ? void 0 : P.profileEffectId) != null,
                    [A, g] = (0, f.useSelectedDismissibleContent)((O, []), void 0, !0);
                return {
                    shouldShow: A === a.DismissibleContent.SHOP_FOR_ALL_USER_POPOUT_UPSELL,
                    canShowAvatarDecorationUpsell: O,
                    canShowProfileEffectUpsell: h,
                    onDismiss: g
                }
            }
        }
    }
]);
//# sourceMappingURL=54314.0f71efde7d99ff587fee.js.map