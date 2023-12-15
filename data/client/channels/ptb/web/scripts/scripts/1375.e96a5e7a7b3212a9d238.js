(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["1375"], {
        44771: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            }), s("222007");
            var a = s("37983"),
                i = s("884691"),
                r = s("414456"),
                l = s.n(r),
                n = s("917351"),
                d = s.n(n),
                u = s("77078"),
                c = s("164546"),
                o = s("513196"),
                T = s("42723"),
                m = s("605475"),
                E = s("49111"),
                h = s("782340"),
                I = s("279732");
            let _ = () => [h.default.Messages.APP_ICON_PIRATE, h.default.Messages.APP_ICON_PIRATE_1, h.default.Messages.APP_ICON_PIRATE_2, h.default.Messages.APP_ICON_PIRATE_3, h.default.Messages.APP_ICON_PIRATE_4],
                f = () => {
                    var e;
                    return null !== (e = d.sample(_())) && void 0 !== e ? e : h.default.Messages.APP_ICON_PIRATE
                };

            function Selection(e) {
                let {
                    id: t,
                    className: s,
                    onSelect: r,
                    isSelected: n = !1,
                    tabIndex: d,
                    children: T
                } = e, [h, _] = i.useState(m.ICONS_BY_ID[t].name), S = t === o.PremiumAppIconIds.PIRATE, N = (0, u.useRadioItem)({
                    label: h,
                    isSelected: n
                });
                return (0, a.jsx)(u.Tooltip, {
                    text: h,
                    onTooltipShow: () => S && _(f()),
                    children: e => (0, a.jsxs)("div", {
                        className: I.appIconSelectionContainer,
                        children: [(0, a.jsx)(u.Clickable, {
                            ...e,
                            ...N,
                            tabIndex: null != d ? d : N.tabIndex,
                            className: l(I.appIconSelection, {
                                [I.selected]: n
                            }, s),
                            onClick: n ? E.NOOP : () => null == r ? void 0 : r(t),
                            children: T
                        }), n && (0, a.jsx)(c.SelectionCircle, {})]
                    })
                })
            }

            function S(e) {
                let {
                    icon: t,
                    isSelected: s,
                    disabled: i,
                    tabIndex: r,
                    onSelect: l
                } = e;
                return (0, a.jsx)(Selection, {
                    onSelect: i ? void 0 : l,
                    isSelected: s,
                    id: t.id,
                    className: i ? I.disabled : void 0,
                    tabIndex: r,
                    children: (0, a.jsx)(T.default, {
                        id: t.id,
                        width: m.CUSTOM_BASE_SIZE
                    })
                })
            }
        },
        433724: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            }), s("222007");
            var a = s("37983");
            s("884691");
            var i = s("446674"),
                r = s("77078"),
                l = s("913144"),
                n = s("891653"),
                d = s("476765"),
                u = s("805199"),
                c = s("44771"),
                o = s("605475"),
                T = s("782340"),
                m = s("143598");

            function E(e) {
                let {
                    className: t,
                    disabled: s,
                    renderCTAButtons: E
                } = e, [h, I] = (0, i.useStateFromStoresArray)([u.default], () => [u.default.getCurrentDesktopIcon(), u.default.isEditorOpen]), _ = (0, d.useUID)(), f = (0, r.useRadioGroup)({
                    orientation: "horizontal",
                    labelledBy: _
                }), S = e => {
                    l.default.dispatch({
                        type: "APP_ICON_UPDATED",
                        id: e
                    })
                };
                return (0, a.jsx)("div", {
                    ...f,
                    className: m.container,
                    children: (0, a.jsxs)("div", {
                        className: t,
                        children: [(0, a.jsxs)("div", {
                            className: m.header,
                            children: [(0, a.jsxs)("div", {
                                className: m.headings,
                                children: [I ? null : (0, a.jsxs)("div", {
                                    className: m.title,
                                    children: [(0, a.jsx)(r.Heading, {
                                        variant: "text-md/medium",
                                        children: T.default.Messages.APP_ICON_SETTINGS_TITLE
                                    }), (0, a.jsx)(n.default, {
                                        className: m.premiumIcon
                                    })]
                                }), (0, a.jsx)(r.Heading, {
                                    variant: "text-sm/normal",
                                    children: T.default.Messages.APP_ICON_SETTINGS_DESCRIPTION
                                })]
                            }), null == E ? void 0 : E()]
                        }), (0, a.jsx)("div", {
                            className: m.presets,
                            children: o.ICONS.filter(e => {
                                let {
                                    isHidden: t
                                } = e;
                                return !0 !== t
                            }).map((e, t) => (0, a.jsx)(c.default, {
                                icon: e,
                                isSelected: h === e.id,
                                onSelect: e => S(e),
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
                    return l
                }
            });
            var a = s("37983");
            s("884691");
            var i = s("77078"),
                r = s("234222");

            function l() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                !(!e && (0, i.hasAnyModalOpen)()) && (0, i.openModalLazy)(async () => {
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
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var i = e => {
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
                    return S
                },
                DefaultThemeSelection: function() {
                    return P
                },
                GradientThemeSelection: function() {
                    return C
                }
            }), s("794252");
            var a = s("37983");
            s("884691");
            var i = s("414456"),
                r = s.n(i),
                l = s("506838"),
                n = s("446674"),
                d = s("669491"),
                u = s("2662"),
                c = s("819855"),
                o = s("77078"),
                T = s("161778"),
                m = s("578706"),
                E = s("253539"),
                h = s("92130"),
                I = s("49111"),
                _ = s("782340"),
                f = s("823470");

            function S() {
                return (0, a.jsx)("div", {
                    className: f.selectionCircle,
                    children: (0, a.jsx)(m.default, {
                        className: f.checkmarkCircle,
                        foreground: f.checkmark,
                        backgroundColor: d.default.unsafe_rawColors.WHITE_500.css
                    })
                })
            }

            function N(e) {
                let {
                    name: t,
                    className: s,
                    style: i,
                    onSelect: l,
                    isSelected: n = !1,
                    tabIndex: d,
                    children: u
                } = e, c = (0, o.useRadioItem)({
                    label: t,
                    isSelected: n
                });
                return (0, a.jsx)(o.Tooltip, {
                    text: t,
                    children: e => (0, a.jsxs)("div", {
                        className: f.themeSelectionContainer,
                        children: [(0, a.jsx)(o.Clickable, {
                            ...e,
                            ...c,
                            tabIndex: null != d ? d : c.tabIndex,
                            className: r(f.themeSelection, {
                                [f.selected]: n
                            }, s),
                            style: i,
                            onClick: n ? I.NOOP : l,
                            children: u
                        }), n && (0, a.jsx)(S, {})]
                    })
                })
            }

            function P(e) {
                let {
                    theme: t,
                    isSelected: s,
                    onSelect: i
                } = e, m = (0, n.useStateFromStores)([T.default], () => T.default.systemPrefersColorScheme), E = e => (0, c.isThemeLight)(e) ? d.default.unsafe_rawColors.PRIMARY_600.css : d.default.unsafe_rawColors.WHITE_500.css, S = (0, l.match)({
                    theme: t,
                    systemPrefersColorScheme: m
                }).with({
                    theme: "system",
                    systemPrefersColorScheme: I.ThemeTypes.LIGHT
                }, () => f.lightIcon).with({
                    theme: I.ThemeTypes.LIGHT
                }, () => f.lightIcon).otherwise(() => f.darkIcon), P = (0, l.match)(t).with(I.ThemeTypes.LIGHT, () => _.default.Messages.THEME_LIGHT).with(I.ThemeTypes.DARK, () => _.default.Messages.THEME_DARK).with("system", () => _.default.Messages.THEME_SYSTEM).exhaustive(), C = (0, o.useRedesignIconContext)().enabled;
                return (0, a.jsx)(N, {
                    onSelect: i,
                    isSelected: s,
                    name: P,
                    className: r(f.defaultThemeSelection, S),
                    children: "system" === t && (0, a.jsx)("div", {
                        className: f.iconWrapper,
                        children: C ? (0, a.jsx)(u.RefreshIcon, {
                            color: E(m)
                        }) : (0, a.jsx)(h.default, {
                            fill: E(m)
                        })
                    })
                })
            }

            function C(e) {
                let {
                    preset: t,
                    isSelected: s,
                    disabled: i,
                    tabIndex: l,
                    onSelect: n
                } = e, {
                    colors: d,
                    angle: u,
                    theme: o
                } = t, T = (0, E.getLinearGradientForBackgroundGradient)({
                    colors: d,
                    angle: u
                });
                return (0, a.jsx)(N, {
                    onSelect: i ? void 0 : n,
                    isSelected: s,
                    name: t.getName(),
                    className: r([i ? f.disabled : null, (0, c.isThemeDark)(o) ? f.darkOverlay : f.lightOverlay]),
                    style: {
                        background: "var(--bg-overlay), ".concat(T)
                    },
                    tabIndex: l
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
                    return B
                },
                default: function() {
                    return z
                }
            }), s("794252"), s("222007");
            var a, i, r = s("37983"),
                l = s("884691"),
                n = s("414456"),
                d = s.n(n),
                u = s("506838"),
                c = s("446674"),
                o = s("151426"),
                T = s("819855"),
                m = s("77078"),
                E = s("452804"),
                h = s("206230"),
                I = s("812204"),
                _ = s("685665"),
                f = s("626301"),
                S = s("917247"),
                N = s("956597"),
                P = s("891653"),
                C = s("505093"),
                R = s("161778"),
                x = s("168973"),
                v = s("491605"),
                g = s("476765"),
                p = s("599110"),
                A = s("32531"),
                D = s("714657"),
                O = s("164546"),
                M = s("941719"),
                j = s("49111"),
                y = s("646718"),
                G = s("116319"),
                k = s("397336"),
                w = s("843455"),
                H = s("782340"),
                L = s("809404");
            (i = a || (a = {})).EDITOR = "EDITOR", i.SETTINGS = "SETTINGS";
            let b = Object.freeze({
                    EDITOR: k.UserSettingsDelay.SLOW_USER_ACTION,
                    SETTINGS: k.UserSettingsDelay.INFREQUENT_USER_ACTION
                }),
                U = l.createContext({}),
                B = e => {
                    let {
                        isPersisted: t,
                        themeName: s,
                        analyticsLocations: a
                    } = e;
                    p.default.track(j.AnalyticEvents.CLIENT_THEME_UPDATED, {
                        feature_name: y.AnalyticsPremiumFeatureNames.CLIENT_THEME,
                        theme_name: s,
                        is_persisted: t,
                        location_stack: a
                    })
                },
                K = e => {
                    let {
                        type: t,
                        isPreview: s,
                        isCoachmark: a
                    } = e, i = (0, u.match)({
                        type: t,
                        isPreview: s,
                        isCoachmark: a
                    }).with({
                        type: "EDITOR",
                        isCoachmark: !0,
                        isPreview: !0
                    }, () => H.default.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER).with({
                        type: "EDITOR",
                        isCoachmark: !0
                    }, () => H.default.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER).otherwise(() => H.default.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE);
                    return (0, r.jsxs)("div", {
                        className: L.title,
                        children: [(0, r.jsx)(m.Heading, {
                            "aria-label": i,
                            variant: "text-md/medium",
                            children: i
                        }), (0, r.jsx)(P.default, {
                            className: L.premiumIcon
                        })]
                    })
                },
                F = e => {
                    var t, s;
                    let {
                        type: a,
                        isPreview: i,
                        isCoachmark: l
                    } = e, n = (null === (s = (0, S.usePremiumTrialOffer)()) || void 0 === s ? void 0 : null === (t = s.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === y.PremiumSubscriptionSKUs.TIER_2;
                    if (n && i) return null;
                    let d = (0, u.match)({
                        type: a,
                        isPreview: i,
                        isCoachmark: l
                    }).with({
                        type: "EDITOR",
                        isPreview: !0
                    }, () => H.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                        onPremiumClick: f.navigateToPremiumMarketingPage
                    })).with({
                        type: "EDITOR",
                        isCoachmark: !0
                    }, () => H.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK).with({
                        type: "EDITOR",
                        isPreview: !1
                    }, () => H.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION).with({
                        isPreview: !0
                    }, () => H.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format({
                        onPremiumClick: f.navigateToPremiumMarketingPage
                    })).otherwise(() => H.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS);
                    return (0, r.jsx)(m.Heading, {
                        variant: "text-sm/normal",
                        children: d
                    })
                },
                W = e => {
                    let {
                        type: t,
                        children: s
                    } = e, a = (0, g.useUID)(), i = (0, m.useRadioGroup)({
                        orientation: "horizontal",
                        labelledBy: a
                    }), n = l.useMemo(() => ({
                        type: t,
                        delay: b[t]
                    }), [t]);
                    return (0, r.jsx)(U.Provider, {
                        value: n,
                        children: (0, r.jsx)("div", {
                            ...i,
                            className: L.container,
                            children: s
                        })
                    })
                };
            W.Basic = e => {
                let {
                    className: t
                } = e, {
                    delay: s
                } = l.useContext(U), {
                    analyticsLocations: a
                } = (0, _.default)(I.default.CLIENT_THEMES_THEME_SELECTOR), [i, n, u] = (0, c.useStateFromStoresArray)([R.default, x.default, D.default], () => [R.default.theme, null == D.default.gradientPreset, x.default.useSystemTheme === G.SystemThemeState.ON]), o = e => {
                    (0, A.resetBackgroundGradientPreset)(), B({
                        isPersisted: !0,
                        analyticsLocations: a,
                        themeName: "default ".concat(e)
                    }), (0, E.saveClientTheme)({
                        theme: e
                    }, s)
                };
                return (0, r.jsxs)("section", {
                    className: d(L.presets, t),
                    children: [(0, r.jsx)(O.DefaultThemeSelection, {
                        theme: w.ThemeTypes.LIGHT,
                        isSelected: n && !u && (0, T.isThemeLight)(i),
                        onSelect: () => o(w.ThemeTypes.LIGHT)
                    }), (0, r.jsx)(O.DefaultThemeSelection, {
                        theme: w.ThemeTypes.DARK,
                        isSelected: n && !u && (0, T.isThemeDark)(i),
                        onSelect: () => o(w.ThemeTypes.DARK)
                    }), (0, r.jsx)(O.DefaultThemeSelection, {
                        theme: "system",
                        isSelected: n && u,
                        onSelect: () => o("system")
                    })]
                })
            }, W.Gradient = e => {
                var t, a;
                let {
                    className: i,
                    renderCTAButtons: n,
                    disabled: d = !1
                } = e, {
                    type: u,
                    delay: T
                } = l.useContext(U), {
                    analyticsLocations: m
                } = (0, _.default)(I.default.CLIENT_THEMES_THEME_SELECTOR), [P, R, x] = (0, c.useStateFromStoresArray)([D.default], () => {
                    var e;
                    return [D.default.isPreview, D.default.isCoachmark, null === (e = D.default.gradientPreset) || void 0 === e ? void 0 : e.id]
                }), [g, p] = l.useState(!1), [j, k] = l.useState(-1), w = (0, c.useStateFromStores)([h.default], () => h.default.useReducedMotion), b = (null === (a = (0, S.usePremiumTrialOffer)()) || void 0 === a ? void 0 : null === (t = a.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === y.PremiumSubscriptionSKUs.TIER_2;
                l.useEffect(() => {
                    (j === M.BACKGROUND_GRADIENT_PRESETS.length - 2 && "EDITOR" === u || x === o.BackgroundGradientPresetId.EASTER_EGG) && p(!0)
                }, [j, u, x]);
                let W = (e, t) => {
                    if ((0, A.updateBackgroundGradientPreset)(e.id), B({
                            isPersisted: !P,
                            analyticsLocations: m,
                            themeName: o.BackgroundGradientPresetId[e.id]
                        }), P) {
                        (0, C.setUseSystemTheme)(G.SystemThemeState.OFF);
                        return
                    }
                    if ((0, E.saveClientTheme)({
                            backgroundGradientPresetId: e.id,
                            theme: e.theme
                        }, T), null != t) {
                        if (g && p(!1), t <= j || 0 === t) {
                            k(0);
                            return
                        }
                        k(e => e + 1)
                    }
                };
                return (0, r.jsxs)("section", {
                    className: i,
                    children: ["EDITOR" === u && P && b ? (0, r.jsx)(N.default, {
                        type: y.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                        subscriptionTier: y.PremiumSubscriptionSKUs.TIER_2,
                        children: H.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                            onPremiumClick: f.navigateToPremiumMarketingPage
                        })
                    }) : (0, r.jsxs)("div", {
                        className: L.header,
                        children: [(0, r.jsxs)("div", {
                            className: L.headings,
                            children: [(0, r.jsx)(K, {
                                type: u,
                                isPreview: P,
                                isCoachmark: R
                            }), (0, r.jsx)(F, {
                                type: u,
                                isPreview: P,
                                isCoachmark: R
                            })]
                        }), null == n ? void 0 : n()]
                    }), (0, r.jsxs)("div", {
                        className: L.presets,
                        children: [M.BACKGROUND_GRADIENT_PRESETS.filter(e => {
                            let {
                                id: t
                            } = e;
                            return t !== o.BackgroundGradientPresetId.EASTER_EGG
                        }).map((e, t) => (0, r.jsx)(O.GradientThemeSelection, {
                            preset: e,
                            isSelected: x === e.id,
                            onSelect: () => W(e, t),
                            disabled: d,
                            tabIndex: 0 !== t || d ? void 0 : 0
                        }, e.id)), (() => {
                            if (!g) return null;
                            let e = M.BACKGROUND_GRADIENT_PRESETS_MAP[o.BackgroundGradientPresetId.EASTER_EGG];
                            if (null == e) return null;
                            async function t() {
                                let {
                                    default: e
                                } = await s.el("922510").then(s.t.bind(s, "922510", 19));
                                return e
                            }
                            return (0, r.jsxs)("div", {
                                className: L.easterEggSelection,
                                children: [(0, r.jsx)(O.GradientThemeSelection, {
                                    preset: e,
                                    isSelected: x === o.BackgroundGradientPresetId.EASTER_EGG,
                                    onSelect: () => W(e)
                                }), (0, r.jsx)(v.default, {
                                    importData: t,
                                    shouldAnimate: !w,
                                    className: L.sparkles
                                })]
                            })
                        })()]
                    })]
                })
            };
            var z = W
        },
        505093: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                setUseSystemTheme: function() {
                    return i
                }
            });
            var a = s("913144");

            function i(e) {
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
//# sourceMappingURL=1375.e96a5e7a7b3212a9d238.js.map