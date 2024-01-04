(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3442"], {
        44771: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                r = s("414456"),
                i = s.n(r),
                l = s("917351"),
                u = s.n(l),
                d = s("77078"),
                c = s("164546"),
                o = s("513196"),
                E = s("42723"),
                T = s("605475"),
                _ = s("49111"),
                S = s("782340"),
                m = s("279732");
            let f = () => [S.default.Messages.APP_ICON_PIRATE, S.default.Messages.APP_ICON_PIRATE_1, S.default.Messages.APP_ICON_PIRATE_2, S.default.Messages.APP_ICON_PIRATE_3, S.default.Messages.APP_ICON_PIRATE_4],
                h = () => {
                    var e;
                    return null !== (e = u.sample(f())) && void 0 !== e ? e : S.default.Messages.APP_ICON_PIRATE
                };

            function Selection(e) {
                let {
                    id: t,
                    className: s,
                    onSelect: r,
                    isSelected: l = !1,
                    tabIndex: u,
                    children: E
                } = e, [S, f] = n.useState(T.ICONS_BY_ID[t].name), I = t === o.PremiumAppIconIds.PIRATE, p = (0, d.useRadioItem)({
                    label: S,
                    isSelected: l
                });
                return (0, a.jsx)(d.Tooltip, {
                    text: S,
                    onTooltipShow: () => I && f(h()),
                    children: e => (0, a.jsxs)("div", {
                        className: m.appIconSelectionContainer,
                        children: [(0, a.jsx)(d.Clickable, {
                            ...e,
                            ...p,
                            tabIndex: null != u ? u : p.tabIndex,
                            className: i(m.appIconSelection, {
                                [m.selected]: l
                            }, s),
                            onClick: l ? _.NOOP : () => null == r ? void 0 : r(t),
                            children: E
                        }), l && (0, a.jsx)(c.SelectionCircle, {})]
                    })
                })
            }

            function I(e) {
                let {
                    icon: t,
                    isSelected: s,
                    disabled: n,
                    tabIndex: r,
                    onSelect: i
                } = e;
                return (0, a.jsx)(Selection, {
                    onSelect: n ? void 0 : i,
                    isSelected: s,
                    id: t.id,
                    className: n ? m.disabled : void 0,
                    tabIndex: r,
                    children: (0, a.jsx)(E.default, {
                        id: t.id,
                        width: T.CUSTOM_BASE_SIZE
                    })
                })
            }
        },
        433724: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            }), s("222007");
            var a = s("37983");
            s("884691");
            var n = s("446674"),
                r = s("77078"),
                i = s("913144"),
                l = s("891653"),
                u = s("476765"),
                d = s("805199"),
                c = s("44771"),
                o = s("605475"),
                E = s("782340"),
                T = s("143598");

            function _(e) {
                let {
                    className: t,
                    disabled: s,
                    renderCTAButtons: _
                } = e, [S, m] = (0, n.useStateFromStoresArray)([d.default], () => [d.default.getCurrentDesktopIcon(), d.default.isEditorOpen]), f = (0, u.useUID)(), h = (0, r.useRadioGroup)({
                    orientation: "horizontal",
                    labelledBy: f
                }), I = e => {
                    i.default.dispatch({
                        type: "APP_ICON_UPDATED",
                        id: e
                    })
                };
                return (0, a.jsx)("div", {
                    ...h,
                    className: T.container,
                    children: (0, a.jsxs)("div", {
                        className: t,
                        children: [(0, a.jsxs)("div", {
                            className: T.header,
                            children: [(0, a.jsxs)("div", {
                                className: T.headings,
                                children: [m ? null : (0, a.jsxs)("div", {
                                    className: T.title,
                                    children: [(0, a.jsx)(r.Heading, {
                                        variant: "text-md/medium",
                                        children: E.default.Messages.APP_ICON_SETTINGS_TITLE
                                    }), (0, a.jsx)(l.default, {
                                        className: T.premiumIcon
                                    })]
                                }), (0, a.jsx)(r.Heading, {
                                    variant: "text-sm/normal",
                                    children: E.default.Messages.APP_ICON_SETTINGS_DESCRIPTION
                                })]
                            }), null == _ ? void 0 : _()]
                        }), (0, a.jsx)("div", {
                            className: T.presets,
                            children: o.ICONS.filter(e => {
                                let {
                                    isHidden: t
                                } = e;
                                return !0 !== t
                            }).map((e, t) => (0, a.jsx)(c.default, {
                                icon: e,
                                isSelected: S === e.id,
                                onSelect: e => I(e),
                                disabled: s,
                                tabIndex: 0 !== t || s ? void 0 : 0
                            }, e.id))
                        })]
                    })
                })
            }
        },
        788434: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                openChangelog: function() {
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                r = s("234222");

            function i() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                !(!e && (0, n.hasAnyModalOpen)()) && (0, n.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await s.el("170935").then(s.bind(s, "170935"));
                    return t => (0, a.jsx)(e, {
                        ...t
                    })
                }, {
                    modalKey: r.CHANGELOG_MODAL_KEY
                })
            }
        },
        92130: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var a = s("37983");
            s("884691");
            var n = e => {
                let {
                    fill: t,
                    className: s
                } = e;
                return (0, a.jsxs)("svg", {
                    className: s,
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: t,
                    children: [(0, a.jsx)("g", {
                        id: "Frame_-_24px",
                        children: (0, a.jsx)("rect", {
                            y: "0",
                            fill: "none",
                            width: "24",
                            height: "24"
                        })
                    }), (0, a.jsx)("g", {
                        id: "Filled_Icons",
                        children: (0, a.jsxs)("g", {
                            children: [(0, a.jsx)("path", {
                                fill: t,
                                d: "M6.351,6.351C7.824,4.871,9.828,4,12,4c4.411,0,8,3.589,8,8h2c0-5.515-4.486-10-10-10    C9.285,2,6.779,3.089,4.938,4.938L3,3v6h6L6.351,6.351z"
                            }), (0, a.jsx)("path", {
                                fill: t,
                                d: "M17.649,17.649C16.176,19.129,14.173,20,12,20c-4.411,0-8-3.589-8-8H2c0,5.515,4.486,10,10,10    c2.716,0,5.221-1.089,7.062-2.938L21,21v-6h-6L17.649,17.649z"
                            })]
                        })
                    })]
                })
            }
        },
        164546: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                SelectionCircle: function() {
                    return I
                },
                DefaultThemeSelection: function() {
                    return N
                },
                GradientThemeSelection: function() {
                    return R
                }
            }), s("794252");
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                r = s.n(n),
                i = s("506838"),
                l = s("446674"),
                u = s("669491"),
                d = s("2662"),
                c = s("819855"),
                o = s("77078"),
                E = s("161778"),
                T = s("578706"),
                _ = s("253539"),
                S = s("92130"),
                m = s("49111"),
                f = s("782340"),
                h = s("823470");

            function I() {
                return (0, a.jsx)("div", {
                    className: h.selectionCircle,
                    children: (0, a.jsx)(T.default, {
                        className: h.checkmarkCircle,
                        foreground: h.checkmark,
                        backgroundColor: u.default.unsafe_rawColors.WHITE_500.css
                    })
                })
            }

            function p(e) {
                let {
                    name: t,
                    className: s,
                    style: n,
                    onSelect: i,
                    isSelected: l = !1,
                    tabIndex: u,
                    children: d
                } = e, c = (0, o.useRadioItem)({
                    label: t,
                    isSelected: l
                });
                return (0, a.jsx)(o.Tooltip, {
                    text: t,
                    children: e => (0, a.jsxs)("div", {
                        className: h.themeSelectionContainer,
                        children: [(0, a.jsx)(o.Clickable, {
                            ...e,
                            ...c,
                            tabIndex: null != u ? u : c.tabIndex,
                            className: r(h.themeSelection, {
                                [h.selected]: l
                            }, s),
                            style: n,
                            onClick: l ? m.NOOP : i,
                            children: d
                        }), l && (0, a.jsx)(I, {})]
                    })
                })
            }

            function N(e) {
                let {
                    theme: t,
                    isSelected: s,
                    onSelect: n
                } = e, T = (0, l.useStateFromStores)([E.default], () => E.default.systemPrefersColorScheme), _ = e => (0, c.isThemeLight)(e) ? u.default.unsafe_rawColors.PRIMARY_600.css : u.default.unsafe_rawColors.WHITE_500.css, I = (0, i.match)({
                    theme: t,
                    systemPrefersColorScheme: T
                }).with({
                    theme: "system",
                    systemPrefersColorScheme: m.ThemeTypes.LIGHT
                }, () => h.lightIcon).with({
                    theme: m.ThemeTypes.LIGHT
                }, () => h.lightIcon).otherwise(() => h.darkIcon), N = (0, i.match)(t).with(m.ThemeTypes.LIGHT, () => f.default.Messages.THEME_LIGHT).with(m.ThemeTypes.DARK, () => f.default.Messages.THEME_DARK).with("system", () => f.default.Messages.THEME_SYSTEM).exhaustive(), R = (0, o.useRedesignIconContext)().enabled;
                return (0, a.jsx)(p, {
                    onSelect: n,
                    isSelected: s,
                    name: N,
                    className: r(h.defaultThemeSelection, I),
                    children: "system" === t && (0, a.jsx)("div", {
                        className: h.iconWrapper,
                        children: R ? (0, a.jsx)(d.RefreshIcon, {
                            color: _(T)
                        }) : (0, a.jsx)(S.default, {
                            fill: _(T)
                        })
                    })
                })
            }

            function R(e) {
                let {
                    preset: t,
                    isSelected: s,
                    disabled: n,
                    tabIndex: i,
                    onSelect: l
                } = e, {
                    colors: u,
                    angle: d,
                    theme: o
                } = t, E = (0, _.getLinearGradientForBackgroundGradient)({
                    colors: u,
                    angle: d
                });
                return (0, a.jsx)(p, {
                    onSelect: n ? void 0 : l,
                    isSelected: s,
                    name: t.getName(),
                    className: r([n ? h.disabled : null, (0, c.isThemeDark)(o) ? h.darkOverlay : h.lightOverlay]),
                    style: {
                        background: "var(--bg-overlay), ".concat(E)
                    },
                    tabIndex: i
                })
            }
        },
        648114: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ThemeSelectionGroupType: function() {
                    return a
                },
                trackClientThemeUpdated: function() {
                    return Q
                },
                default: function() {
                    return K
                }
            }), s("794252"), s("222007");
            var a, n, r = s("37983"),
                i = s("884691"),
                l = s("414456"),
                u = s.n(l),
                d = s("506838"),
                c = s("446674"),
                o = s("151426"),
                E = s("819855"),
                T = s("77078"),
                _ = s("452804"),
                S = s("206230"),
                m = s("812204"),
                f = s("685665"),
                h = s("626301"),
                I = s("917247"),
                p = s("956597"),
                N = s("891653"),
                R = s("505093"),
                C = s("161778"),
                g = s("168973"),
                v = s("491605"),
                x = s("476765"),
                A = s("599110"),
                P = s("32531"),
                U = s("714657"),
                y = s("164546"),
                O = s("941719"),
                D = s("49111"),
                w = s("646718"),
                M = s("116319"),
                G = s("397336"),
                L = s("843455"),
                j = s("782340"),
                H = s("809404");
            (n = a || (a = {})).EDITOR = "EDITOR", n.SETTINGS = "SETTINGS";
            let k = Object.freeze({
                    EDITOR: G.UserSettingsDelay.SLOW_USER_ACTION,
                    SETTINGS: G.UserSettingsDelay.INFREQUENT_USER_ACTION
                }),
                b = i.createContext({}),
                Q = e => {
                    let {
                        isPersisted: t,
                        themeName: s,
                        analyticsLocations: a
                    } = e;
                    A.default.track(D.AnalyticEvents.CLIENT_THEME_UPDATED, {
                        feature_name: w.AnalyticsPremiumFeatureNames.CLIENT_THEME,
                        theme_name: s,
                        is_persisted: t,
                        location_stack: a
                    })
                },
                F = e => {
                    let {
                        type: t,
                        isPreview: s,
                        isCoachmark: a
                    } = e, n = (0, d.match)({
                        type: t,
                        isPreview: s,
                        isCoachmark: a
                    }).with({
                        type: "EDITOR",
                        isCoachmark: !0,
                        isPreview: !0
                    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER).with({
                        type: "EDITOR",
                        isCoachmark: !0
                    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER).otherwise(() => j.default.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE);
                    return (0, r.jsxs)("div", {
                        className: H.title,
                        children: [(0, r.jsx)(T.Heading, {
                            "aria-label": n,
                            variant: "text-md/medium",
                            children: n
                        }), (0, r.jsx)(N.default, {
                            className: H.premiumIcon
                        })]
                    })
                },
                B = e => {
                    var t, s;
                    let {
                        type: a,
                        isPreview: n,
                        isCoachmark: i
                    } = e, l = (null === (s = (0, I.usePremiumTrialOffer)()) || void 0 === s ? void 0 : null === (t = s.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === w.PremiumSubscriptionSKUs.TIER_2;
                    if (l && n) return null;
                    let u = (0, d.match)({
                        type: a,
                        isPreview: n,
                        isCoachmark: i
                    }).with({
                        type: "EDITOR",
                        isPreview: !0
                    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                        onPremiumClick: h.navigateToPremiumMarketingPage
                    })).with({
                        type: "EDITOR",
                        isCoachmark: !0
                    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK).with({
                        type: "EDITOR",
                        isPreview: !1
                    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION).with({
                        isPreview: !0
                    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format({
                        onPremiumClick: h.navigateToPremiumMarketingPage
                    })).otherwise(() => j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS);
                    return (0, r.jsx)(T.Heading, {
                        variant: "text-sm/normal",
                        children: u
                    })
                },
                q = e => {
                    let {
                        type: t,
                        children: s
                    } = e, a = (0, x.useUID)(), n = (0, T.useRadioGroup)({
                        orientation: "horizontal",
                        labelledBy: a
                    }), l = i.useMemo(() => ({
                        type: t,
                        delay: k[t]
                    }), [t]);
                    return (0, r.jsx)(b.Provider, {
                        value: l,
                        children: (0, r.jsx)("div", {
                            ...n,
                            className: H.container,
                            children: s
                        })
                    })
                };
            q.Basic = e => {
                let {
                    className: t
                } = e, {
                    delay: s
                } = i.useContext(b), {
                    analyticsLocations: a
                } = (0, f.default)(m.default.CLIENT_THEMES_THEME_SELECTOR), [n, l, d] = (0, c.useStateFromStoresArray)([C.default, g.default, U.default], () => [C.default.theme, null == U.default.gradientPreset, g.default.useSystemTheme === M.SystemThemeState.ON]), o = e => {
                    (0, P.resetBackgroundGradientPreset)(), Q({
                        isPersisted: !0,
                        analyticsLocations: a,
                        themeName: "default ".concat(e)
                    }), (0, _.saveClientTheme)({
                        theme: e
                    }, s)
                };
                return (0, r.jsxs)("section", {
                    className: u(H.presets, t),
                    children: [(0, r.jsx)(y.DefaultThemeSelection, {
                        theme: L.ThemeTypes.LIGHT,
                        isSelected: l && !d && (0, E.isThemeLight)(n),
                        onSelect: () => o(L.ThemeTypes.LIGHT)
                    }), (0, r.jsx)(y.DefaultThemeSelection, {
                        theme: L.ThemeTypes.DARK,
                        isSelected: l && !d && (0, E.isThemeDark)(n),
                        onSelect: () => o(L.ThemeTypes.DARK)
                    }), (0, r.jsx)(y.DefaultThemeSelection, {
                        theme: "system",
                        isSelected: l && d,
                        onSelect: () => o("system")
                    })]
                })
            }, q.Gradient = e => {
                var t, a;
                let {
                    className: n,
                    renderCTAButtons: l,
                    disabled: u = !1
                } = e, {
                    type: d,
                    delay: E
                } = i.useContext(b), {
                    analyticsLocations: T
                } = (0, f.default)(m.default.CLIENT_THEMES_THEME_SELECTOR), [N, C, g] = (0, c.useStateFromStoresArray)([U.default], () => {
                    var e;
                    return [U.default.isPreview, U.default.isCoachmark, null === (e = U.default.gradientPreset) || void 0 === e ? void 0 : e.id]
                }), [x, A] = i.useState(!1), [D, G] = i.useState(-1), L = (0, c.useStateFromStores)([S.default], () => S.default.useReducedMotion), k = (null === (a = (0, I.usePremiumTrialOffer)()) || void 0 === a ? void 0 : null === (t = a.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === w.PremiumSubscriptionSKUs.TIER_2;
                i.useEffect(() => {
                    (D === O.BACKGROUND_GRADIENT_PRESETS.length - 2 && "EDITOR" === d || g === o.BackgroundGradientPresetId.EASTER_EGG) && A(!0)
                }, [D, d, g]);
                let q = (e, t) => {
                    if ((0, P.updateBackgroundGradientPreset)(e.id), Q({
                            isPersisted: !N,
                            analyticsLocations: T,
                            themeName: o.BackgroundGradientPresetId[e.id]
                        }), N) {
                        (0, R.setUseSystemTheme)(M.SystemThemeState.OFF);
                        return
                    }
                    if ((0, _.saveClientTheme)({
                            backgroundGradientPresetId: e.id,
                            theme: e.theme
                        }, E), null != t) {
                        if (x && A(!1), t <= D || 0 === t) {
                            G(0);
                            return
                        }
                        G(e => e + 1)
                    }
                };
                return (0, r.jsxs)("section", {
                    className: n,
                    children: ["EDITOR" === d && N && k ? (0, r.jsx)(p.default, {
                        type: w.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                        subscriptionTier: w.PremiumSubscriptionSKUs.TIER_2,
                        children: j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                            onPremiumClick: h.navigateToPremiumMarketingPage
                        })
                    }) : (0, r.jsxs)("div", {
                        className: H.header,
                        children: [(0, r.jsxs)("div", {
                            className: H.headings,
                            children: [(0, r.jsx)(F, {
                                type: d,
                                isPreview: N,
                                isCoachmark: C
                            }), (0, r.jsx)(B, {
                                type: d,
                                isPreview: N,
                                isCoachmark: C
                            })]
                        }), null == l ? void 0 : l()]
                    }), (0, r.jsxs)("div", {
                        className: H.presets,
                        children: [O.BACKGROUND_GRADIENT_PRESETS.filter(e => {
                            let {
                                id: t
                            } = e;
                            return t !== o.BackgroundGradientPresetId.EASTER_EGG
                        }).map((e, t) => (0, r.jsx)(y.GradientThemeSelection, {
                            preset: e,
                            isSelected: g === e.id,
                            onSelect: () => q(e, t),
                            disabled: u,
                            tabIndex: 0 !== t || u ? void 0 : 0
                        }, e.id)), (() => {
                            if (!x) return null;
                            let e = O.BACKGROUND_GRADIENT_PRESETS_MAP[o.BackgroundGradientPresetId.EASTER_EGG];
                            if (null == e) return null;
                            async function t() {
                                let {
                                    default: e
                                } = await s.el("922510").then(s.t.bind(s, "922510", 19));
                                return e
                            }
                            return (0, r.jsxs)("div", {
                                className: H.easterEggSelection,
                                children: [(0, r.jsx)(y.GradientThemeSelection, {
                                    preset: e,
                                    isSelected: g === o.BackgroundGradientPresetId.EASTER_EGG,
                                    onSelect: () => q(e)
                                }), (0, r.jsx)(v.default, {
                                    importData: t,
                                    shouldAnimate: !L,
                                    className: H.sparkles
                                })]
                            })
                        })()]
                    })]
                })
            };
            var K = q
        },
        448881: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                fetchCurrentQuests: function() {
                    return d
                },
                sendHeartbeat: function() {
                    return c
                },
                enrollInQuest: function() {
                    return o
                }
            });
            var a = s("872717"),
                n = s("913144"),
                r = s("599417"),
                i = s("2973"),
                l = s("227231"),
                u = s("49111");
            async function d() {
                n.default.dispatch({
                    type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN"
                });
                try {
                    let e = await a.default.get({
                        url: u.Endpoints.QUESTS_CURRENT_QUESTS
                    });
                    n.default.dispatch({
                        type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                        quests: e.body.map(l.questWithUserStatusFromServer)
                    })
                } catch (e) {
                    n.default.dispatch({
                        type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE",
                        error: new r.default(e)
                    })
                }
            }
            async function c(e) {
                let {
                    questId: t,
                    streamKey: s,
                    applicationId: i
                } = e;
                try {
                    let e = await a.default.post({
                        url: u.Endpoints.QUESTS_HEARTBEAT(t),
                        body: {
                            stream_key: s,
                            application_id: i
                        }
                    });
                    n.default.dispatch({
                        type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
                        userStatus: (0, l.questUserStatusFromServer)(e.body),
                        applicationId: i,
                        questId: t,
                        streamKey: s
                    })
                } catch (e) {
                    n.default.dispatch({
                        type: "QUESTS_SEND_HEARTBEAT_FAILURE",
                        error: new r.default(e),
                        questId: t,
                        streamKey: s
                    })
                }
            }
            async function o(e) {
                let t = i.default.isEnrolling(e);
                if (!t) {
                    n.default.dispatch({
                        type: "QUESTS_ENROLL_BEGIN",
                        questId: e
                    });
                    try {
                        let t = await a.default.post({
                            url: u.Endpoints.QUESTS_ENROLL(e)
                        });
                        n.default.dispatch({
                            type: "QUESTS_ENROLL_SUCCESS",
                            enrolledQuestUserStatus: (0, l.questUserStatusFromServer)(t.body)
                        })
                    } catch (t) {
                        n.default.dispatch({
                            type: "QUESTS_ENROLL_FAILURE",
                            questId: e
                        })
                    }
                }
            }
        },
        374023: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var a = s("862205");
            let n = (0, a.createExperiment)({
                id: "2023-12_quests",
                kind: "user",
                label: "Quests",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 0,
                    label: "Control",
                    config: {
                        enabled: !1
                    }
                }, {
                    id: 1,
                    label: "Quests enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var r = n
        },
        2973: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            }), s("222007");
            var a = s("446674"),
                n = s("913144");
            let r = !1,
                i = new Map,
                l = 0,
                u = new Set;

            function d(e) {
                let t = new Set(u);
                t.delete(e), u = t
            }
            class c extends a.default.Store {
                get quests() {
                    return i
                }
                get isFetchingCurrentQuests() {
                    return r
                }
                get lastFetchedCurrentQuests() {
                    return l
                }
                isEnrolling(e) {
                    return u.has(e)
                }
            }
            c.displayName = "QuestsStore";
            var o = new c(n.default, {
                LOGOUT: function() {
                    r = !1, i = new Map, l = 0, u = new Set
                },
                QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function() {
                    l = Date.now(), r = !0
                },
                QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function(e) {
                    let {
                        quests: t
                    } = e;
                    for (let e of (r = !1, i = new Map, t)) i.set(e.id, e)
                },
                QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function() {
                    l = 0, r = !1
                },
                QUESTS_SEND_HEARTBEAT_SUCCESS: function(e) {
                    let {
                        questId: t,
                        userStatus: s
                    } = e;
                    i = new Map(i);
                    let a = i.get(t);
                    null != a && i.set(t, {
                        ...a,
                        userStatus: s
                    })
                },
                QUESTS_ENROLL_BEGIN: function(e) {
                    let {
                        questId: t
                    } = e, s = new Set(u);
                    s.add(t), u = s
                },
                QUESTS_ENROLL_SUCCESS: function(e) {
                    let {
                        enrolledQuestUserStatus: t
                    } = e, s = new Map(i), a = s.get(t.questId);
                    null != a && s.set(t.questId, {
                        ...a,
                        userStatus: t
                    }), i = s, d(t.questId)
                },
                QUESTS_ENROLL_FAILURE: function(e) {
                    let {
                        questId: t
                    } = e;
                    d(t)
                }
            })
        },
        227231: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getQuestByApplicationId: function() {
                    return r
                },
                isQuestExpired: function() {
                    return i
                },
                questUserStatusFromServer: function() {
                    return l
                },
                questWithUserStatusFromServer: function() {
                    return u
                },
                getRewardAssetUrl: function() {
                    return d
                },
                getHeroAssetUrl: function() {
                    return c
                },
                getGameTileAssetUrl: function() {
                    return o
                },
                getGameLogotypeAssetUrl: function() {
                    return E
                }
            }), s("222007");
            var a = s("2973");
            let n = "https://cdn.discordapp.com/assets/quests/";

            function r(e) {
                let t;
                for (let [s, n] of a.default.quests)
                    if (n.config.applicationId === e) {
                        t = n;
                        break
                    } return t
            }

            function i(e) {
                let t = new Date(e.config.expiresAt);
                return t.valueOf() <= Date.now()
            }

            function l(e) {
                return {
                    userId: e.user_id,
                    questId: e.quest_id,
                    enrolledAt: e.enrolled_at,
                    completedAt: e.completed_at,
                    claimedAt: e.claimed_at,
                    lastStreamHeartbeatAt: e.last_stream_heartbeat_at,
                    streamProgressSeconds: e.stream_progress_seconds,
                    dismissedQuestContent: e.dismissed_quest_content
                }
            }

            function u(e) {
                var t, s;
                return {
                    id: e.id,
                    config: {
                        expiresAt: (t = e.config).expires_at,
                        streamDurationRequirementMinutes: t.stream_duration_requirement_minutes,
                        gameTitle: t.game_title,
                        applicationId: t.application_id,
                        messages: {
                            questName: (s = t.messages).quest_name,
                            rewardName: s.reward_name,
                            rewardNameWithArticle: s.reward_name_with_article,
                            rewardRedemptionInstructions: s.reward_redemption_instructions
                        }
                    },
                    userStatus: null == e.user_status ? null : l(e.user_status)
                }
            }
            let d = e => "".concat(n).concat(e).concat("/reward.png"),
                c = e => "".concat(n).concat(e).concat("/hero.png"),
                o = e => "".concat(n).concat(e).concat("/game_tile.png"),
                E = (e, t) => "".concat(n).concat(e, "/").concat(t).concat("/game_logotype.png")
        },
        505093: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                setUseSystemTheme: function() {
                    return n
                }
            });
            var a = s("913144");

            function n(e) {
                a.default.dispatch({
                    type: "UNSYNCED_USER_SETTINGS_UPDATE",
                    settings: {
                        useSystemTheme: e
                    }
                })
            }
        }
    }
]);
//# sourceMappingURL=3442.409988e158153a993e80.js.map