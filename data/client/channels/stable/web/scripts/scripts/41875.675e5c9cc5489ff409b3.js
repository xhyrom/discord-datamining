(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["41875"], {
        44771: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                s = n("414456"),
                l = n.n(s),
                r = n("917351"),
                o = n.n(r),
                u = n("77078"),
                d = n("164546"),
                c = n("513196"),
                f = n("42723"),
                m = n("605475"),
                h = n("49111"),
                g = n("782340"),
                _ = n("279732");
            let S = () => [g.default.Messages.APP_ICON_PIRATE, g.default.Messages.APP_ICON_PIRATE_1, g.default.Messages.APP_ICON_PIRATE_2, g.default.Messages.APP_ICON_PIRATE_3, g.default.Messages.APP_ICON_PIRATE_4],
                p = () => {
                    var e;
                    return null !== (e = o.sample(S())) && void 0 !== e ? e : g.default.Messages.APP_ICON_PIRATE
                };

            function Selection(e) {
                let {
                    id: t,
                    className: n,
                    onSelect: s,
                    isSelected: r = !1,
                    tabIndex: o,
                    children: f
                } = e, [g, S] = a.useState(m.ICONS_BY_ID[t].name), T = t === c.PremiumAppIconIds.PIRATE, E = (0, u.useRadioItem)({
                    label: g,
                    isSelected: r
                });
                return (0, i.jsx)(u.Tooltip, {
                    text: g,
                    onTooltipShow: () => T && S(p()),
                    children: e => (0, i.jsxs)("div", {
                        className: _.appIconSelectionContainer,
                        children: [(0, i.jsx)(u.Clickable, {
                            ...e,
                            ...E,
                            tabIndex: null != o ? o : E.tabIndex,
                            className: l(_.appIconSelection, {
                                [_.selected]: r
                            }, n),
                            onClick: r ? h.NOOP : () => null == s ? void 0 : s(t),
                            children: f
                        }), r && (0, i.jsx)(d.SelectionCircle, {})]
                    })
                })
            }

            function T(e) {
                let {
                    icon: t,
                    isSelected: n,
                    disabled: a,
                    tabIndex: s,
                    onSelect: l
                } = e;
                return (0, i.jsx)(Selection, {
                    onSelect: a ? void 0 : l,
                    isSelected: n,
                    id: t.id,
                    className: a ? _.disabled : void 0,
                    tabIndex: s,
                    children: (0, i.jsx)(f.default, {
                        id: t.id,
                        width: m.CUSTOM_BASE_SIZE
                    })
                })
            }
        },
        433724: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                s = n("446674"),
                l = n("77078"),
                r = n("913144"),
                o = n("891653"),
                u = n("225849"),
                d = n("476765"),
                c = n("805199"),
                f = n("44771"),
                m = n("605475"),
                h = n("397336"),
                g = n("782340"),
                _ = n("143598");

            function S(e) {
                let {
                    className: t,
                    disabled: n,
                    renderCTAButtons: S
                } = e, [p, T] = (0, s.useStateFromStoresArray)([c.default], () => [c.default.getCurrentDesktopIcon(), c.default.isEditorOpen]), E = a.useRef(null);
                (0, u.default)(E, h.AppearanceScrollPositions.CUSTOM_APP_ICONS);
                let v = (0, d.useUID)(),
                    I = (0, l.useRadioGroup)({
                        orientation: "horizontal",
                        labelledBy: v
                    }),
                    N = e => {
                        r.default.dispatch({
                            type: "APP_ICON_UPDATED",
                            id: e
                        })
                    };
                return (0, i.jsx)("div", {
                    ref: E,
                    children: (0, i.jsx)("div", {
                        ...I,
                        className: _.container,
                        children: (0, i.jsxs)("div", {
                            className: t,
                            children: [(0, i.jsxs)("div", {
                                className: _.header,
                                children: [(0, i.jsxs)("div", {
                                    className: _.headings,
                                    children: [T ? null : (0, i.jsxs)("div", {
                                        className: _.title,
                                        children: [(0, i.jsx)(l.Heading, {
                                            variant: "text-md/medium",
                                            children: g.default.Messages.APP_ICON_SETTINGS_TITLE
                                        }), (0, i.jsx)(o.default, {
                                            className: _.premiumIcon
                                        })]
                                    }), (0, i.jsx)(l.Heading, {
                                        variant: "text-sm/normal",
                                        children: g.default.Messages.APP_ICON_SETTINGS_DESCRIPTION
                                    })]
                                }), null == S ? void 0 : S()]
                            }), (0, i.jsx)("div", {
                                className: _.presets,
                                children: m.ICONS.filter(e => {
                                    let {
                                        isHidden: t
                                    } = e;
                                    return !0 !== t
                                }).map((e, t) => (0, i.jsx)(f.default, {
                                    icon: e,
                                    isSelected: p === e.id,
                                    onSelect: e => N(e),
                                    disabled: n,
                                    tabIndex: 0 !== t || n ? void 0 : 0
                                }, e.id))
                            })]
                        })
                    })
                })
            }
        },
        788434: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openChangelog: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("234222");

            function l() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                !(!e && (0, a.hasAnyModalOpen)()) && (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("170935").then(n.bind(n, "170935"));
                    return t => (0, i.jsx)(e, {
                        ...t
                    })
                }, {
                    modalKey: s.CHANGELOG_MODAL_KEY
                })
            }
        },
        92130: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var a = e => {
                let {
                    fill: t,
                    className: n
                } = e;
                return (0, i.jsxs)("svg", {
                    className: n,
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: t,
                    children: [(0, i.jsx)("g", {
                        id: "Frame_-_24px",
                        children: (0, i.jsx)("rect", {
                            y: "0",
                            fill: "none",
                            width: "24",
                            height: "24"
                        })
                    }), (0, i.jsx)("g", {
                        id: "Filled_Icons",
                        children: (0, i.jsxs)("g", {
                            children: [(0, i.jsx)("path", {
                                fill: t,
                                d: "M6.351,6.351C7.824,4.871,9.828,4,12,4c4.411,0,8,3.589,8,8h2c0-5.515-4.486-10-10-10    C9.285,2,6.779,3.089,4.938,4.938L3,3v6h6L6.351,6.351z"
                            }), (0, i.jsx)("path", {
                                fill: t,
                                d: "M17.649,17.649C16.176,19.129,14.173,20,12,20c-4.411,0-8-3.589-8-8H2c0,5.515,4.486,10,10,10    c2.716,0,5.221-1.089,7.062-2.938L21,21v-6h-6L17.649,17.649z"
                            })]
                        })
                    })]
                })
            }
        },
        164546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SelectionCircle: function() {
                    return T
                },
                DefaultThemeSelection: function() {
                    return v
                },
                GradientThemeSelection: function() {
                    return I
                }
            }), n("794252");
            var i = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                l = n("506838"),
                r = n("446674"),
                o = n("669491"),
                u = n("2662"),
                d = n("819855"),
                c = n("77078"),
                f = n("161778"),
                m = n("578706"),
                h = n("253539"),
                g = n("92130"),
                _ = n("49111"),
                S = n("782340"),
                p = n("823470");

            function T() {
                return (0, i.jsx)("div", {
                    className: p.selectionCircle,
                    children: (0, i.jsx)(m.default, {
                        className: p.checkmarkCircle,
                        foreground: p.checkmark,
                        backgroundColor: o.default.unsafe_rawColors.WHITE_500.css
                    })
                })
            }

            function E(e) {
                let {
                    name: t,
                    className: n,
                    style: a,
                    onSelect: l,
                    isSelected: r = !1,
                    tabIndex: o,
                    children: u
                } = e, d = (0, c.useRadioItem)({
                    label: t,
                    isSelected: r
                });
                return (0, i.jsx)(c.Tooltip, {
                    text: t,
                    children: e => (0, i.jsxs)("div", {
                        className: p.themeSelectionContainer,
                        children: [(0, i.jsx)(c.Clickable, {
                            ...e,
                            ...d,
                            tabIndex: null != o ? o : d.tabIndex,
                            className: s(p.themeSelection, {
                                [p.selected]: r
                            }, n),
                            style: a,
                            onClick: r ? _.NOOP : l,
                            children: u
                        }), r && (0, i.jsx)(T, {})]
                    })
                })
            }

            function v(e) {
                let {
                    theme: t,
                    isSelected: n,
                    onSelect: a
                } = e, m = (0, r.useStateFromStores)([f.default], () => f.default.systemPrefersColorScheme), h = e => (0, d.isThemeLight)(e) ? o.default.unsafe_rawColors.PRIMARY_600.css : o.default.unsafe_rawColors.WHITE_500.css, T = (0, l.match)({
                    theme: t,
                    systemPrefersColorScheme: m
                }).with({
                    theme: "system",
                    systemPrefersColorScheme: _.ThemeTypes.LIGHT
                }, () => p.lightIcon).with({
                    theme: _.ThemeTypes.LIGHT
                }, () => p.lightIcon).otherwise(() => p.darkIcon), v = (0, l.match)(t).with(_.ThemeTypes.LIGHT, () => S.default.Messages.THEME_LIGHT).with(_.ThemeTypes.DARK, () => S.default.Messages.THEME_DARK).with("system", () => S.default.Messages.THEME_SYSTEM).exhaustive(), I = (0, c.useRedesignIconContext)().enabled;
                return (0, i.jsx)(E, {
                    onSelect: a,
                    isSelected: n,
                    name: v,
                    className: s(p.defaultThemeSelection, T),
                    children: "system" === t && (0, i.jsx)("div", {
                        className: p.iconWrapper,
                        children: I ? (0, i.jsx)(u.RefreshIcon, {
                            color: h(m)
                        }) : (0, i.jsx)(g.default, {
                            fill: h(m)
                        })
                    })
                })
            }

            function I(e) {
                let {
                    preset: t,
                    isSelected: n,
                    disabled: a,
                    tabIndex: l,
                    onSelect: r
                } = e, {
                    colors: o,
                    angle: u,
                    theme: c
                } = t, f = (0, h.getLinearGradientForBackgroundGradient)({
                    colors: o,
                    angle: u
                });
                return (0, i.jsx)(E, {
                    onSelect: a ? void 0 : r,
                    isSelected: n,
                    name: t.getName(),
                    className: s([a ? p.disabled : null, (0, d.isThemeDark)(c) ? p.darkOverlay : p.lightOverlay]),
                    style: {
                        background: "var(--bg-overlay), ".concat(f)
                    },
                    tabIndex: l
                })
            }
        },
        648114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ThemeSelectionGroupType: function() {
                    return i
                },
                trackClientThemeUpdated: function() {
                    return H
                },
                default: function() {
                    return Y
                }
            }), n("794252"), n("222007");
            var i, a, s = n("37983"),
                l = n("884691"),
                r = n("414456"),
                o = n.n(r),
                u = n("506838"),
                d = n("446674"),
                c = n("151426"),
                f = n("819855"),
                m = n("77078"),
                h = n("452804"),
                g = n("206230"),
                _ = n("812204"),
                S = n("685665"),
                p = n("626301"),
                T = n("917247"),
                E = n("956597"),
                v = n("891653"),
                I = n("505093"),
                N = n("161778"),
                y = n("168973"),
                C = n("491605"),
                O = n("476765"),
                A = n("599110"),
                M = n("32531"),
                P = n("714657"),
                b = n("164546"),
                R = n("941719"),
                w = n("49111"),
                D = n("646718"),
                G = n("116319"),
                x = n("397336"),
                L = n("843455"),
                U = n("782340"),
                j = n("809404");
            (a = i || (i = {})).EDITOR = "EDITOR", a.SETTINGS = "SETTINGS";
            let k = Object.freeze({
                    EDITOR: x.UserSettingsDelay.SLOW_USER_ACTION,
                    SETTINGS: x.UserSettingsDelay.INFREQUENT_USER_ACTION
                }),
                F = l.createContext({}),
                H = e => {
                    let {
                        isPersisted: t,
                        themeName: n,
                        analyticsLocations: i
                    } = e;
                    A.default.track(w.AnalyticEvents.CLIENT_THEME_UPDATED, {
                        feature_name: D.AnalyticsPremiumFeatureNames.CLIENT_THEME,
                        theme_name: n,
                        is_persisted: t,
                        location_stack: i
                    })
                },
                B = e => {
                    let {
                        type: t,
                        isPreview: n,
                        isCoachmark: i
                    } = e, a = (0, u.match)({
                        type: t,
                        isPreview: n,
                        isCoachmark: i
                    }).with({
                        type: "EDITOR",
                        isCoachmark: !0,
                        isPreview: !0
                    }, () => U.default.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER).with({
                        type: "EDITOR",
                        isCoachmark: !0
                    }, () => U.default.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER).otherwise(() => U.default.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE);
                    return (0, s.jsxs)("div", {
                        className: j.title,
                        children: [(0, s.jsx)(m.Heading, {
                            "aria-label": a,
                            variant: "text-md/medium",
                            children: a
                        }), (0, s.jsx)(v.default, {
                            className: j.premiumIcon
                        })]
                    })
                },
                W = e => {
                    var t, n;
                    let {
                        type: i,
                        isPreview: a,
                        isCoachmark: l
                    } = e, r = (null === (n = (0, T.usePremiumTrialOffer)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === D.PremiumSubscriptionSKUs.TIER_2;
                    if (r && a) return null;
                    let o = (0, u.match)({
                        type: i,
                        isPreview: a,
                        isCoachmark: l
                    }).with({
                        type: "EDITOR",
                        isPreview: !0
                    }, () => U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                        onPremiumClick: p.navigateToPremiumMarketingPage
                    })).with({
                        type: "EDITOR",
                        isCoachmark: !0
                    }, () => U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK).with({
                        type: "EDITOR",
                        isPreview: !1
                    }, () => U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION).with({
                        isPreview: !0
                    }, () => U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format({
                        onPremiumClick: p.navigateToPremiumMarketingPage
                    })).otherwise(() => U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS);
                    return (0, s.jsx)(m.Heading, {
                        variant: "text-sm/normal",
                        children: o
                    })
                },
                K = e => {
                    let {
                        type: t,
                        children: n
                    } = e, i = (0, O.useUID)(), a = (0, m.useRadioGroup)({
                        orientation: "horizontal",
                        labelledBy: i
                    }), r = l.useMemo(() => ({
                        type: t,
                        delay: k[t]
                    }), [t]);
                    return (0, s.jsx)(F.Provider, {
                        value: r,
                        children: (0, s.jsx)("div", {
                            ...a,
                            className: j.container,
                            children: n
                        })
                    })
                };
            K.Basic = e => {
                let {
                    className: t
                } = e, {
                    delay: n
                } = l.useContext(F), {
                    analyticsLocations: i
                } = (0, S.default)(_.default.CLIENT_THEMES_THEME_SELECTOR), [a, r, u] = (0, d.useStateFromStoresArray)([N.default, y.default, P.default], () => [N.default.theme, null == P.default.gradientPreset, y.default.useSystemTheme === G.SystemThemeState.ON]), c = e => {
                    (0, M.resetBackgroundGradientPreset)(), H({
                        isPersisted: !0,
                        analyticsLocations: i,
                        themeName: "default ".concat(e)
                    }), (0, h.saveClientTheme)({
                        theme: e
                    }, n)
                };
                return (0, s.jsxs)("section", {
                    className: o(j.presets, t),
                    children: [(0, s.jsx)(b.DefaultThemeSelection, {
                        theme: L.ThemeTypes.LIGHT,
                        isSelected: r && !u && (0, f.isThemeLight)(a),
                        onSelect: () => c(L.ThemeTypes.LIGHT)
                    }), (0, s.jsx)(b.DefaultThemeSelection, {
                        theme: L.ThemeTypes.DARK,
                        isSelected: r && !u && (0, f.isThemeDark)(a),
                        onSelect: () => c(L.ThemeTypes.DARK)
                    }), (0, s.jsx)(b.DefaultThemeSelection, {
                        theme: "system",
                        isSelected: r && u,
                        onSelect: () => c("system")
                    })]
                })
            }, K.Gradient = e => {
                var t, i;
                let {
                    className: a,
                    renderCTAButtons: r,
                    disabled: o = !1
                } = e, {
                    type: u,
                    delay: f
                } = l.useContext(F), {
                    analyticsLocations: m
                } = (0, S.default)(_.default.CLIENT_THEMES_THEME_SELECTOR), [v, N, y] = (0, d.useStateFromStoresArray)([P.default], () => {
                    var e;
                    return [P.default.isPreview, P.default.isCoachmark, null === (e = P.default.gradientPreset) || void 0 === e ? void 0 : e.id]
                }), [O, A] = l.useState(!1), [w, x] = l.useState(-1), L = (0, d.useStateFromStores)([g.default], () => g.default.useReducedMotion), k = (null === (i = (0, T.usePremiumTrialOffer)()) || void 0 === i ? void 0 : null === (t = i.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === D.PremiumSubscriptionSKUs.TIER_2;
                l.useEffect(() => {
                    (w === R.BACKGROUND_GRADIENT_PRESETS.length - 2 && "EDITOR" === u || y === c.BackgroundGradientPresetId.EASTER_EGG) && A(!0)
                }, [w, u, y]);
                let K = (e, t) => {
                    if ((0, M.updateBackgroundGradientPreset)(e.id), H({
                            isPersisted: !v,
                            analyticsLocations: m,
                            themeName: c.BackgroundGradientPresetId[e.id]
                        }), v) {
                        (0, I.setUseSystemTheme)(G.SystemThemeState.OFF);
                        return
                    }
                    if ((0, h.saveClientTheme)({
                            backgroundGradientPresetId: e.id,
                            theme: e.theme
                        }, f), null != t) {
                        if (O && A(!1), t <= w || 0 === t) {
                            x(0);
                            return
                        }
                        x(e => e + 1)
                    }
                };
                return (0, s.jsxs)("section", {
                    className: a,
                    children: ["EDITOR" === u && v && k ? (0, s.jsx)(E.default, {
                        type: D.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                        subscriptionTier: D.PremiumSubscriptionSKUs.TIER_2,
                        children: U.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                            onPremiumClick: p.navigateToPremiumMarketingPage
                        })
                    }) : (0, s.jsxs)("div", {
                        className: j.header,
                        children: [(0, s.jsxs)("div", {
                            className: j.headings,
                            children: [(0, s.jsx)(B, {
                                type: u,
                                isPreview: v,
                                isCoachmark: N
                            }), (0, s.jsx)(W, {
                                type: u,
                                isPreview: v,
                                isCoachmark: N
                            })]
                        }), null == r ? void 0 : r()]
                    }), (0, s.jsxs)("div", {
                        className: j.presets,
                        children: [R.BACKGROUND_GRADIENT_PRESETS.filter(e => {
                            let {
                                id: t
                            } = e;
                            return t !== c.BackgroundGradientPresetId.EASTER_EGG
                        }).map((e, t) => (0, s.jsx)(b.GradientThemeSelection, {
                            preset: e,
                            isSelected: y === e.id,
                            onSelect: () => K(e, t),
                            disabled: o,
                            tabIndex: 0 !== t || o ? void 0 : 0
                        }, e.id)), (() => {
                            if (!O) return null;
                            let e = R.BACKGROUND_GRADIENT_PRESETS_MAP[c.BackgroundGradientPresetId.EASTER_EGG];
                            if (null == e) return null;
                            async function t() {
                                let {
                                    default: e
                                } = await n.el("922510").then(n.t.bind(n, "922510", 19));
                                return e
                            }
                            return (0, s.jsxs)("div", {
                                className: j.easterEggSelection,
                                children: [(0, s.jsx)(b.GradientThemeSelection, {
                                    preset: e,
                                    isSelected: y === c.BackgroundGradientPresetId.EASTER_EGG,
                                    onSelect: () => K(e)
                                }), (0, s.jsx)(C.default, {
                                    importData: t,
                                    shouldAnimate: !L,
                                    className: j.sparkles
                                })]
                            })
                        })()]
                    })]
                })
            };
            var Y = K
        },
        649649: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                listSnapshots: function() {
                    return r
                },
                takeSnapshot: function() {
                    return o
                },
                restoreSnapshot: function() {
                    return u
                },
                backupSettings: function() {
                    return c
                }
            });
            var i = n("917351"),
                a = n.n(i),
                s = n("872717"),
                l = n("49111");
            async function r() {
                return (await s.default.get(l.Endpoints.NOTIFICATION_SNAPSHOTS)).body
            }
            async function o(e) {
                return (await s.default.post({
                    url: l.Endpoints.NOTIFICATION_SNAPSHOTS,
                    body: {
                        label: e
                    }
                })).body
            }
            async function u(e) {
                return (await s.default.post(l.Endpoints.RESTORE_NOTIFICATION_SNAPSHOT(e))).body
            }
            async function d(e) {
                return (await s.default.delete(l.Endpoints.NOTIFICATION_SNAPSHOT(e))).body
            }
            async function c(e) {
                if (e.length > 0) {
                    var t;
                    let n = a.sum(e.map(e => e.length)),
                        i = null !== (t = a.max(e.map(e => e.length))) && void 0 !== t ? t : 0;
                    if (e.length >= 5 || n + i > 1e6) {
                        let t = a.sortBy(e, e => new Date(e.recorded_at).getTime());
                        await d(t[0].id)
                    }
                }
                return o("Backup from ".concat(new Date().toLocaleDateString()))
            }
        },
        380353: function(e, t, n) {
            "use strict";
            var i, a, s, l;
            n.r(t), n.d(t, {
                Mode: function() {
                    return i
                },
                PainLevel: function() {
                    return a
                },
                defaultThresholds: function() {
                    return r
                }
            }), (s = i || (i = {}))[s.KeepAsIs = 0] = "KeepAsIs", s[s.UseGreyDot = 1] = "UseGreyDot", (l = a || (a = {}))[l.Low = 0] = "Low", l[l.Medium = 1] = "Medium", l[l.High = 2] = "High";
            let r = {
                careALot: {
                    monthOpenPerc: .01,
                    yearOpenPerc: .01,
                    sentMessages: 1e3
                },
                careALittle: {
                    monthOpenPerc: .001,
                    yearOpenPerc: .001,
                    sentMessages: 5,
                    minOpens: 2
                },
                smallServerSize: 50,
                mediumServerSize: 200,
                frecency: {
                    yearMinOpensSmallServer: 10,
                    yearMinOpensLargeServer: 50,
                    monthMinOpens: 2,
                    totalOpensPercent: .1
                }
            }
        },
        699668: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildMigrationSteps: function() {
                    return G
                },
                hasGoodCandidateServers: function() {
                    return x
                },
                autoMigrateToNewSystem: function() {
                    return L
                },
                useSaveSettings: function() {
                    return U
                },
                revertToOldSystem: function() {
                    return B
                },
                transformUsageData: function() {
                    return W
                }
            }), n("222007"), n("702976"), n("808653"), n("70102");
            var i = n("884691"),
                a = n("917351"),
                s = n.n(a),
                l = n("446674"),
                r = n("95410"),
                o = n("913144"),
                u = n("404118"),
                d = n("519705"),
                c = n("542827"),
                f = n("679428"),
                m = n("42507"),
                h = n("350522"),
                g = n("525065"),
                _ = n("952451"),
                S = n("305961"),
                p = n("677099"),
                T = n("282109"),
                E = n("599110"),
                v = n("568734"),
                I = n("449008"),
                N = n("286235"),
                y = n("299039"),
                C = n("649649"),
                O = n("845868"),
                A = n("287223"),
                M = n("76618"),
                P = n("380353"),
                b = n("49111"),
                R = n("133335"),
                w = n("397336"),
                D = n("782340");

            function G(e, t) {
                let [n, a] = i.useState(P.defaultThresholds), [r, o] = i.useState({});
                (0, m.useFrecencySettings)();
                let u = (0, l.useStateFromStoresArray)([S.default], () => Object.values(S.default.getGuilds())),
                    d = i.useCallback(() => {
                        let i = {};
                        for (let a of u) i[a.id] = function(e, t, n, i, a) {
                            var s;
                            let [l, r, o] = h.default.hasConsented(b.Consents.PERSONALIZATION) ? (0, A.guessGuildModeWithRemoteData)(e, t, n, i, !0) : (0, A.guessGuildModeWithLocalData)(e, n), u = null !== (s = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== s ? s : {}, d = (0, O.default)(e, null != a ? a : l, u, i, t);
                            return {
                                guildId: e.id,
                                mode: l,
                                debugReason: o,
                                actions: d,
                                overrideMode: a,
                                messagePain: u.messages === P.PainLevel.High,
                                visitsALot: r,
                                muted: T.default.isMuted(e.id) && !T.default.isTemporarilyMuted(e.id)
                            }
                        }(a, n, e, t, r[a.id]);
                        return i
                    }, [u, n, e, t, r]),
                    [c, f] = i.useState(() => d());
                i.useEffect(() => f(d()), [d]);
                let g = i.useCallback((e, t) => {
                    o(n => ({
                        ...n,
                        [e]: t
                    }))
                }, []);
                return {
                    guildPlans: c,
                    overrideGuild: g,
                    setThresholds: a,
                    getDebug: () => (function(e, t) {
                        let n = t.reduce((e, t) => {
                                var n;
                                return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0)
                            }, 0),
                            i = t.reduce((e, t) => {
                                var n;
                                return e + Number(null !== (n = t.num_month_opens) && void 0 !== n ? n : 0)
                            }, 0),
                            a = p.default.getFlattenedGuildIds(),
                            l = s.sortBy(Object.values(e), e => {
                                let t = a.indexOf(e.guildId);
                                return -1 === t ? a.length : t
                            }),
                            r = [
                                ["Use Grey Dot", new Set([P.Mode.UseGreyDot])],
                                ["Keep As Is", new Set([P.Mode.KeepAsIs])]
                            ].map(e => {
                                let [t, n] = e, i = l.filter(e => {
                                    var t;
                                    return n.has(null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode)
                                }), a = i.map(e => {
                                    let t = S.default.getGuild(e.guildId),
                                        n = e.actions.map(e => {
                                            var t;
                                            return "- ".concat(e.label).concat(null !== (t = e.debug) && void 0 !== t ? t : "")
                                        }).join("\n");
                                    return "### ".concat(t.name, "\n**Reasoning**: ").concat(e.debugReason, "**ActionPlan**:\n").concat(n)
                                });
                                return "# ".concat(t, "\n\n").concat(a.join("\n\n"))
                            });
                        return "\n# Basic Stats\n- Total channel visits (yr): ".concat(n, "\n- Total channel visits (month): ").concat(i, "\n\n").concat(r.join("\n\n"))
                    })(Object.values(c), t)
                }
            }

            function x(e, t) {
                return Object.values(S.default.getGuilds()).some(n => {
                    let [i] = h.default.hasConsented(b.Consents.PERSONALIZATION) ? (0, A.guessGuildModeWithRemoteData)(n, P.defaultThresholds, e, t, !1) : (0, A.guessGuildModeWithLocalData)(n, e);
                    return i === P.Mode.UseGreyDot
                })
            }

            function L() {
                let e = Object.values(S.default.getGuilds()),
                    t = {};
                for (let a of e) {
                    var n, i;
                    let e = null !== (n = T.default.getAllSettings().userGuildSettings[a.id]) && void 0 !== n ? n : {},
                        s = null !== (i = e.flags) && void 0 !== i ? i : 0;
                    s = (0, v.setFlag)(s, w.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, !0), s = (0, v.setFlag)(s, w.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !1), t[a.id] = {
                        flags: s
                    }
                }
                k(t), E.default.track(b.AnalyticEvents.NOTIFICATION_MIGRATION_COMPLETED, {
                    auto_migrated: !0,
                    num_unread_guids_after: e.filter(e => _.default.hasUnread(e.id)).length
                })
            }

            function U(e) {
                let [t, n] = i.useState(!1), [a, s] = i.useState(!1), l = i.useCallback(async t => {
                    if (a) throw Error("Already submitted notifications migration");
                    n(!0);
                    try {
                        await j(t, e), s(!0)
                    } finally {
                        n(!1)
                    }
                }, [a, e]);
                return {
                    submitting: t,
                    submitted: a,
                    saveSettings: l
                }
            }
            async function j(e, t) {
                if (T.default.useNewNotifications) {
                    u.default.show({
                        title: "Info",
                        body: "It looks like you are already using the new notifications system so skipping saving any changes this time because that will almost certainly mess up your account!"
                    });
                    return
                }
                let n = function(e) {
                    let t = Object.values(e).filter(e => {
                            var t;
                            return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === P.Mode.UseGreyDot
                        }).map(e => {
                            var t;
                            return {
                                plan: e,
                                memberCount: null !== (t = g.default.getMemberCount(e.guildId)) && void 0 !== t ? t : 0
                            }
                        }),
                        n = {
                            num_unread_guilds_before: y.default.keys(e).filter(e => _.default.hasUnread(e)).length,
                            unmuted_server_ids: t.filter(e => T.default.isMuted(e.plan.guildId)).map(e => e.plan.guildId)
                        };
                    return () => {
                        E.default.track(b.AnalyticEvents.NOTIFICATION_MIGRATION_COMPLETED, {
                            ...n,
                            auto_migrated: !0,
                            pre_selected_server_ids: Object.values(e).filter(e => e.mode === P.Mode.UseGreyDot).map(e => e.guildId),
                            final_selected_server_ids: t.map(e => e.plan.guildId),
                            num_unread_guids_after: y.default.keys(e).filter(e => _.default.hasUnread(e)).length,
                            num_tiny_servers_selected: t.filter(e => e.memberCount <= 20).length,
                            num_small_servers_selected: t.filter(e => e.memberCount > 20 && e.memberCount <= 200).length,
                            num_medium_servers_selected: t.filter(e => e.memberCount > 200 && e.memberCount <= 1e3).length,
                            num_large_servers_selected: t.filter(e => e.memberCount > 1e3).length,
                            num_quiet_servers_selected: t.filter(e => !e.plan.messagePain).length,
                            num_busy_servers_selected: t.filter(e => e.plan.messagePain).length,
                            num_frequent_visited_servers_selected: t.filter(e => e.plan.visitsALot).length,
                            num_infrequent_visited_servers_selected: t.filter(e => !e.plan.visitsALot).length
                        })
                    }
                }(e);
                try {
                    let t = {};
                    for (let n of Object.values(e)) {
                        var i, a;
                        let e = null !== (i = T.default.getAllSettings().userGuildSettings[n.guildId]) && void 0 !== i ? i : {},
                            s = {};
                        for (let t of n.actions) null === (a = t.apply) || void 0 === a || a.call(t, s, e);
                        t[n.guildId] = s
                    }
                    await k(t);
                    let s = Object.values(e).filter(e => e.actions.some(e => e.needsMarkedAsRead)).map(e => e.guildId);
                    if (s.length > 0) {
                        let e = setTimeout(n, 5e3);
                        (0, c.default)(s, void 0, () => {
                            o.default.dispatch({
                                type: "RECOMPUTE_READ_STATES"
                            }), clearTimeout(e), n()
                        })
                    } else n()
                } catch (e) {
                    N.default.captureException(e), u.default.show({
                        title: D.default.Messages.ERROR,
                        body: D.default.Messages.NOTIF_MIGRATION_ERROR,
                        onConfirm: t
                    })
                }
            }
            async function k(e) {
                await F(() => H()), await F(() => d.default.setAccountFlag(M.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !0));
                let t = await F(() => f.default.saveUserGuildSettingsBulk(e));
                o.default.dispatch({
                    type: "USER_GUILD_SETTINGS_FULL_UPDATE",
                    userGuildSettings: t
                }), o.default.dispatch({
                    type: "RECOMPUTE_READ_STATES"
                })
            }
            async function F(e) {
                for (let e = 0; e < 3; e++) try {
                    break
                } catch (t) {
                    await new Promise(t => setTimeout(t, 1e3 * (e + 1)))
                }
                return await e()
            }
            async function H() {
                let e = await (0, C.listSnapshots)();
                if (e.length > 0) {
                    let t = await
                    function() {
                        return new Promise(e => {
                            u.default.show({
                                title: "Create new Backup?",
                                body: "It looks like you already have one notification settings backup. Would you like us to delete the old backup and take a new one, or skip taking a new backup and keep the old one?",
                                confirmText: "Take New Backup",
                                cancelText: "Skip Backup",
                                onConfirm: () => e(!0),
                                onCancel: () => e(!1)
                            })
                        })
                    }();
                    t && (0, C.backupSettings)(e)
                } else(0, C.takeSnapshot)("Backup from ".concat(new Date().toLocaleDateString()))
            }
            async function B() {
                r.default.set("turnedOffNewNotifications", !0), E.default.track(b.AnalyticEvents.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: Object.values(S.default.getGuilds()).filter(e => T.default.resolveGuildUnreadSetting(e) === R.UnreadSetting.ONLY_MENTIONS).length
                });
                let e = await (0, C.listSnapshots)(),
                    t = s.sortBy(e, e => new Date(e.recorded_at).getTime());
                if (t.length > 0) {
                    let e = t[t.length - 1];
                    await new Promise(t => u.default.show({
                        title: "Please Confirm",
                        body: "This will turn off the new notification system and restore your " + "notification settings to a backup created on ".concat(new Date(e.recorded_at).toLocaleDateString()),
                        onConfirm: t,
                        cancelText: "Cancel",
                        onCancel: () => {}
                    })), await (0, C.restoreSnapshot)(e.id), await d.default.setAccountFlag(M.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !1)
                } else await d.default.setAccountFlag(M.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !1)
            }

            function W(e) {
                var t, n, i;
                if (null == e) return [];
                let a = s.keyBy(null !== (t = e.voice_joins) && void 0 !== t ? t : [], "channel_id"),
                    l = s.keyBy(null !== (n = e.message_sends) && void 0 !== n ? n : [], "channel_id");
                return (null !== (i = e.channel_opens) && void 0 !== i ? i : []).map(e => {
                    var t, n, i, s, r, o, u, d, c, f, m;
                    let h = null !== (t = a[e.channel_id]) && void 0 !== t ? t : {},
                        g = null !== (n = l[e.channel_id]) && void 0 !== n ? n : {};
                    return {
                        channel_id: e.channel_id,
                        num_year_opens: Number(null !== (i = e.year_opens) && void 0 !== i ? i : 0),
                        num_month_opens: Number(null !== (s = e.one_month_opens) && void 0 !== s ? s : 0),
                        num_three_month_opens: Number(null !== (r = e.three_month_opens) && void 0 !== r ? r : 0),
                        num_six_month_opens: Number(null !== (o = e.six_month_opens) && void 0 !== o ? o : 0),
                        num_messages: Number(null !== (u = null == g ? void 0 : g.num_messages) && void 0 !== u ? u : 0),
                        num_year_voice_joins: Number(null !== (d = null == h ? void 0 : h.year_opens) && void 0 !== d ? d : 0),
                        num_month_voice_joins: Number(null !== (c = null == h ? void 0 : h.one_month_opens) && void 0 !== c ? c : 0),
                        num_three_month_voice_joins: Number(null !== (f = null == h ? void 0 : h.three_month_opens) && void 0 !== f ? f : 0),
                        num_six_month_voice_joins: Number(null !== (m = null == h ? void 0 : h.six_month_opens) && void 0 !== m ? m : 0)
                    }
                }).filter(I.isNotNullish)
            }
        },
        845868: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("424973"), n("222007"), n("702976"), n("808653");
            var i = n("917351"),
                a = n.n(i),
                s = n("233069"),
                l = n("870691"),
                r = n("42203"),
                o = n("350522"),
                u = n("319781"),
                d = n("957255"),
                c = n("282109"),
                f = n("718517"),
                m = n("568734"),
                h = n("449008"),
                g = n("380353"),
                _ = n("49111"),
                S = n("397336");

            function p(e, t, n, i, m) {
                if (t !== g.Mode.UseGreyDot) return [{
                    label: "Setting the guild to a white dot unread",
                    apply: (e, t) => {
                        T(e, t, !0)
                    }
                }];
                let S = [],
                    p = Object.values(r.default.getMutableGuildChannelsForGuild(e.id)).filter(e => d.default.can(_.Permissions.VIEW_CHANNEL, e));
                return S.push(... function(e, t) {
                    let n = c.default.isMuted(e.id) && !c.default.isTemporarilyMuted(e.id);
                    if (!n) return [];
                    let i = [{
                            label: "Unmuting the guild and marking it as read",
                            apply: e => {
                                e.muted = !1, e.mute_config = null
                            },
                            needsMarkedAsRead: !0
                        }],
                        a = t.filter(t => c.default.getChannelMessageNotifications(e.id, t.id) === _.UserNotificationSettings.ALL_MESSAGES);
                    return a.length > 0 && i.push({
                        label: "Setting ".concat(a.length, " to mentions-only since they were all-messages and we are unmuting the guild"),
                        debug: a.map(e => "\n    - #".concat(e.name)).join(""),
                        apply: (e, t) => {
                            for (let n of a) E(e, t, n.id, e => {
                                e.message_notifications = _.UserNotificationSettings.ONLY_MENTIONS
                            })
                        }
                    }), i
                }(e, p)), S.push(function(e) {
                    let t = c.default.getMessageNotifications(e.id);
                    if (t === _.UserNotificationSettings.ALL_MESSAGES) return {
                        label: "Setting the guild to only mentions since it is in care-a-little but was previously all-messages",
                        apply: e => {
                            e.message_notifications = _.UserNotificationSettings.ONLY_MENTIONS
                        }
                    }
                }(e)), S.push(function() {
                    return {
                        label: "Setting the guild to a grey dot unread",
                        apply: (e, t) => {
                            T(e, t, !1)
                        }
                    }
                }()), S.push(... function(e) {
                    let t = [],
                        [n, i] = a(e).filter(e => e.type === _.ChannelTypes.GUILD_ANNOUNCEMENT).partition(e => c.default.isChannelMuted(e.guild_id, e.id) || null != e.parent_id && c.default.isChannelMuted(e.guild_id, e.parent_id)).value();
                    return n.length > 0 && t.push({
                        label: "Not touching ".concat(n.length, " announcement channels since they are muted"),
                        debug: n.map(e => "\n    - #".concat(e.name)).join("")
                    }), i.length > 0 && t.push({
                        label: "Setting ".concat(i.length, " announcement channels to white-dot"),
                        debug: i.map(e => "\n    - #".concat(e.name)).join(""),
                        apply: (e, t) => {
                            for (let n of i) v(e, t, n.id, !0)
                        }
                    }), t
                }(p)), S.push(... function(e) {
                    let t = [],
                        n = [];
                    for (let t of e)
                        if (c.default.isChannelMuted(t.guild_id, t.id) && t.isCategory()) {
                            let e = l.default.isCollapsed(t.id);
                            !e && n.push(t)
                        } return n.length > 0 && t.push({
                        label: "Unmuting ".concat(n.length, " categories and setting to grey-dot"),
                        debug: n.map(e => "\n    - #".concat(e.name)).join(""),
                        apply: (e, t) => {
                            for (let i of n) v(e, t, i.id, !1), E(e, t, i.id, e => {
                                e.muted = !1, e.mute_config = null
                            })
                        }
                    }), t
                }(p)), S.push(... function(e) {
                    let t = [],
                        n = [],
                        i = [];
                    return e.forEach(e => {
                        if (c.default.isChannelMuted(e.guild_id, e.id)) return;
                        let t = c.default.getChannelMessageNotifications(e.guild_id, e.id);
                        t === _.UserNotificationSettings.ALL_MESSAGES ? n.push(e) : t === _.UserNotificationSettings.ONLY_MENTIONS && i.push(e)
                    }), n.length > 0 && t.push({
                        label: "Setting ".concat(n.length, " channels to white-dot since they were explicitly All Messages"),
                        debug: n.map(e => "\n    - #".concat(e.name)).join(""),
                        apply: (e, t) => {
                            for (let i of n) v(e, t, i.id, !0)
                        }
                    }), i.length > 0 && t.push({
                        label: "Setting ".concat(i.length, " channels to grey-dot since they were explicitly Mentions Only"),
                        debug: i.map(e => "\n    - #".concat(e.name)).join(""),
                        apply: (e, t) => {
                            for (let n of i) v(e, t, n.id, !1)
                        }
                    }), t
                }(p)), o.default.hasConsented(_.Consents.PERSONALIZATION) ? S.push(... function(e, t, n, i, s) {
                    let l = c.default.isMuted(e.id) && !c.default.isTemporarilyMuted(e.id);
                    if (l) return [];
                    let r = new Set(t.map(e => e.id)),
                        o = i.filter(e => r.has(e.channel_id)),
                        u = a.keyBy(o, "channel_id"),
                        d = Math.max(n.messages === g.PainLevel.High ? s.frecency.yearMinOpensLargeServer : s.frecency.yearMinOpensSmallServer, o.reduce((e, t) => {
                            var n;
                            return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0)
                        }, 0) * s.frecency.totalOpensPercent),
                        f = Math.max(s.frecency.monthMinOpens, o.reduce((e, t) => {
                            var n;
                            return e + Number(null !== (n = t.num_three_month_opens) && void 0 !== n ? n : 0)
                        }, 0) * s.frecency.totalOpensPercent),
                        m = [],
                        h = [];
                    t.forEach(e => {
                        var t, n, i, a;
                        let s = null !== (t = u[e.id]) && void 0 !== t ? t : {};
                        Number(null !== (n = s.num_year_opens) && void 0 !== n ? n : 0) > d || Number(null !== (i = s.num_month_opens) && void 0 !== i ? i : 0) > f ? m.push(e) : Number(null !== (a = s.num_three_month_opens) && void 0 !== a ? a : 0) > 2 && h.push(e)
                    });
                    let _ = [];
                    return m.length > 0 && _.push({
                        label: "Setting ".concat(m.length, " channels to white-dot since they are recent and frequently viewed"),
                        debug: m.map(e => "\n    - #".concat(e.name, " (").concat(JSON.stringify(u[e.id]), ")")).join(""),
                        apply: (e, t) => {
                            for (let n of m) v(e, t, n.id, !0)
                        }
                    }), h.length > 0 && _.push({
                        label: "NOT setting ".concat(h.length, " channels to white-dot because they were only viewed a little."),
                        debug: h.map(e => "\n    - #".concat(e.name, " (").concat(JSON.stringify(u[e.id]), ")")).join("")
                    }), _
                }(e, p, n, i, m)) : S.push(... function(e, t) {
                    let n = c.default.isMuted(e.id) && !c.default.isTemporarilyMuted(e.id);
                    if (n) return [];
                    let i = [],
                        a = new Set(t.map(e => e.id)),
                        l = Date.now() - f.default.Millis.DAYS_30,
                        r = u.default.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof s.ChannelRecordBase && a.has(e.id)),
                        o = r.filter(e => {
                            var t, n;
                            let i = null !== (n = null === (t = u.default.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
                            return 0 !== i.length && i[i.length - 1] >= l
                        });
                    return o.length > 0 && i.push({
                        label: "Setting ".concat(o.length, " channels to white-dot since they are recent and frequently viewed"),
                        debug: o.map(e => "\n    - #".concat(e.name)).join(""),
                        apply: (e, t) => {
                            for (let n of o) v(e, t, n.id, !0)
                        }
                    }), i
                }(e, p)), S.filter(h.isNotNullish)
            }

            function T(e, t, n) {
                var i, a;
                e.flags = (0, m.setFlag)(null !== (a = null !== (i = e.flags) && void 0 !== i ? i : t.flags) && void 0 !== a ? a : 0, S.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, n), e.flags = (0, m.setFlag)(e.flags, S.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !n)
            }

            function E(e, t, n, i) {
                var s, l, r, o;
                let u = null !== (r = null === (s = e.channel_overrides) || void 0 === s ? void 0 : s[n]) && void 0 !== r ? r : {},
                    d = null !== (o = null === (l = t.channel_overrides) || void 0 === l ? void 0 : l[n]) && void 0 !== o ? o : {};
                i(u, d), !a.isEmpty(u) && (null == e.channel_overrides && (e.channel_overrides = {}), e.channel_overrides[n] = u)
            }

            function v(e, t, n, i) {
                E(e, t, n, (e, t) => {
                    var n, a;
                    e.flags = (0, m.setFlag)(null !== (a = null !== (n = e.flags) && void 0 !== n ? n : t.flags) && void 0 !== a ? a : 0, S.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, i), e.flags = (0, m.setFlag)(e.flags, S.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !i)
                })
            }
        },
        287223: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                guessGuildModeWithRemoteData: function() {
                    return c
                },
                guessGuildModeWithLocalData: function() {
                    return m
                }
            }), n("808653");
            var i = n("917351"),
                a = n.n(i),
                s = n("233069"),
                l = n("42203"),
                r = n("319781"),
                o = n("525065"),
                u = n("718517"),
                d = n("380353");

            function c(e, t, n, i, a) {
                var s, r, u, c;
                let m = l.default.getMutableGuildChannelsForGuild(e.id),
                    h = i.filter(e => e.channel_id in m),
                    g = null !== (s = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== s ? s : {},
                    _ = o.default.getMemberCount(e.id),
                    S = f("year", i, h, e => {
                        var t;
                        return Number(null !== (t = e.num_year_opens) && void 0 !== t ? t : 0)
                    }),
                    p = f("one month", i, h, e => {
                        var t;
                        return Number(null !== (t = e.num_month_opens) && void 0 !== t ? t : 0)
                    }),
                    T = f("three month", i, h, e => {
                        var t;
                        return Number(null !== (t = e.num_three_month_opens) && void 0 !== t ? t : 0)
                    }),
                    E = f("six month", i, h, e => {
                        var t;
                        return Number(null !== (t = e.num_six_month_opens) && void 0 !== t ? t : 0)
                    }),
                    v = [p, T, E, S],
                    I = 0,
                    N = 0;
                h.forEach(e => {
                    var t;
                    I++, N += null !== (t = Number(e.num_messages)) && void 0 !== t ? t : 0
                });
                let y = "\n**Pain**:\n- Everyones: ".concat(d.PainLevel[null !== (r = g.everyones) && void 0 !== r ? r : 0], "\n- Messages: ").concat(d.PainLevel[null !== (u = g.messages) && void 0 !== u ? u : 0], "\n- Size: ").concat(_, "\n**Remote**:\n- Channels: ").concat(I, "\n- AllVisits: ").concat(v.map(e => e.totalOpensAcrossAllServers).join(" / "), "\n- GuildVisits: ").concat(v.map(e => e.guildOpens).join(" / "), "\n- Biggest Channel (abs): ").concat(v.map(e => e.biggestChannel).join(" / "), "\n- Biggest Channel (%): ").concat(v.map(e => e.biggestChannelFormatted).join(" / "), "\n- Sent Msgs: ").concat(N, "\n"),
                    C = T.guildOpens >= .02 * T.totalOpensAcrossAllServers,
                    O = (null !== (c = S.guildOpens) && void 0 !== c ? c : 0) > 0;
                if (g.messages === d.PainLevel.High) {
                    if (!a) return [d.Mode.UseGreyDot, C, "UseGreyDot" + y];
                    if (!C && O) return [d.Mode.UseGreyDot, C, "UseGreyDot" + y]
                }
                return [d.Mode.KeepAsIs, C, "KeepAsIs" + y]
            }

            function f(e, t, n, i) {
                let s = t.reduce((e, t) => e + i(t), 0),
                    l = n.reduce((e, t) => e + i(t), 0),
                    r = a.sortBy(n, i).reverse()[0],
                    o = null == r ? 0 : i(r),
                    u = (o / l * 100).toFixed(1);
                return {
                    label: e,
                    totalOpensAcrossAllServers: s,
                    guildOpens: l,
                    biggestChannel: o,
                    biggestChannelFormatted: u
                }
            }

            function m(e, t) {
                var n, i;
                let a = null !== (n = t.filter(t => t.guild_id === e.id)[0]) && void 0 !== n ? n : {},
                    l = null !== (i = o.default.getMemberCount(e.id)) && void 0 !== i ? i : 0,
                    c = Date.now() - u.default.Millis.DAYS_30,
                    f = r.default.getFrequentlyWithoutFetchingLatest().filter(t => t instanceof s.ChannelRecordBase && t.guild_id === e.id),
                    m = f.filter(e => {
                        var t, n;
                        let i = null !== (n = null === (t = r.default.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
                        return 0 !== i.length && i[i.length - 1] >= c
                    }),
                    h = m.length >= 5,
                    g = f.reduce((e, t) => {
                        var n, i;
                        return e + (null !== (i = null === (n = r.default.frecencyWithoutFetchingLatest.usageHistory[t.id]) || void 0 === n ? void 0 : n.totalUses) && void 0 !== i ? i : 0)
                    }, 0),
                    _ = "\n- **Local**:\n    - Guild Visits: ".concat(g, "\n    - Channels: ").concat(f.length, "\n    - Recent Channels: ").concat(m.length, "\n");
                return a.messages === d.PainLevel.High || l > 1e3 ? [d.Mode.UseGreyDot, h, "SuggestGreyDot" + _] : [d.Mode.KeepAsIs, h, "KeepAsIs" + _]
            }
        },
        748021: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openMigrationModal: function() {
                    return h
                },
                default: function() {
                    return g
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var a = n("872717"),
                s = n("95410"),
                l = n("77078"),
                r = n("689988"),
                o = n("350522"),
                u = n("282109"),
                d = n("640497"),
                c = n("699668"),
                f = n("49111");
            class m extends r.default {
                async handlePostConnectionOpen() {
                    if (s.default.get("turnedOffNewNotifications") || !o.default.hasConsented(f.Consents.PERSONALIZATION) || !d.NotificationsExperiment.getCurrentConfig({
                            location: "NotificationMigrationManager"
                        }, {
                            autoTrackExposure: !1
                        }).enabled || u.default.useNewNotifications) return;
                    let {
                        logExposure: e,
                        autoOpen: t
                    } = d.UnreadsEntryPointExperiment.getCurrentConfig({
                        location: "NotificationMigrationManager"
                    }, {
                        autoTrackExposure: !1
                    });
                    if (!e) return;
                    let {
                        body: {
                            guild_noise: r,
                            usage: m
                        }
                    } = await a.default.get("/users/@me/notification-migration-data2"), h = (0, c.transformUsageData)(m), {
                        default: g
                    } = await n.el("923660").then(n.bind(n, "923660"));
                    if (!(0, l.hasAnyModalOpen)()) d.UnreadsEntryPointExperiment.trackExposure({
                        location: "NotificationMigrationManager"
                    }), t && ((0, c.hasGoodCandidateServers)(r, h) ? (0, l.openModal)(e => (0, i.jsx)(g, {
                        ...e,
                        dismissable: !1,
                        guildPain: r,
                        myUsage: h
                    }), {
                        onCloseRequest: () => {}
                    }) : (0, c.autoMigrateToNewSystem)())
                }
                constructor(...e) {
                    super(...e), this.actions = {
                        POST_CONNECTION_OPEN: this.handlePostConnectionOpen
                    }
                }
            }
            async function h(e) {
                let {
                    body: {
                        guild_noise: t,
                        usage: s
                    }
                } = await a.default.get("/users/@me/notification-migration-data2"), r = (0, c.transformUsageData)(s);
                (0, l.openModalLazy)(async () => {
                    let {
                        default: a
                    } = await n.el("923660").then(n.bind(n, "923660"));
                    return n => (0, i.jsx)(a, {
                        ...n,
                        dismissable: e,
                        guildPain: t,
                        myUsage: r
                    })
                })
            }
            var g = new m
        },
        505093: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setUseSystemTheme: function() {
                    return a
                }
            });
            var i = n("913144");

            function a(e) {
                i.default.dispatch({
                    type: "UNSYNCED_USER_SETTINGS_UPDATE",
                    settings: {
                        useSystemTheme: e
                    }
                })
            }
            n("228803"), n("168973"), n("116319")
        },
        225849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("884691"),
                a = n("446674"),
                s = n("79112"),
                l = n("206230"),
                r = n("26092"),
                o = n("397336"),
                u = n("49111");
            let d = Object.freeze({
                [o.UserSettingsScrollPositions.ProfileCustomizationScrollPositions.TRY_IT_OUT]: u.UserSettingsSections.PROFILE_CUSTOMIZATION,
                [o.UserSettingsScrollPositions.AccessibilityScrollPositions.REDUCED_MOTION]: u.UserSettingsSections.ACCESSIBILITY,
                [o.UserSettingsScrollPositions.AccessibilityScrollPositions.SYNC_PROFILE_THEME_WITH_USER_THEME]: u.UserSettingsSections.ACCESSIBILITY,
                [o.UserSettingsScrollPositions.AccessibilityScrollPositions.LEGACY_CHAT_INPUT]: u.UserSettingsSections.ACCESSIBILITY,
                [o.UserSettingsScrollPositions.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION]: u.UserSettingsSections.VOICE,
                [o.UserSettingsScrollPositions.AppearanceScrollPositions.CUSTOM_APP_ICONS]: u.UserSettingsSections.APPEARANCE
            });
            var c = (e, t) => {
                let n = (0, a.useStateFromStores)([l.default], () => l.default.useReducedMotion),
                    o = (0, a.useStateFromStores)([r.default], () => r.default.getScrollPosition());
                (0, i.useEffect)(() => {
                    let i = e.current;
                    if (null == i || t !== o) return;
                    let a = requestAnimationFrame(() => {
                        i.scrollIntoView({
                            behavior: n ? "auto" : "smooth"
                        }), s.default.clearScrollPosition(d[t])
                    });
                    return () => cancelAnimationFrame(a)
                }, [e, t, o, n])
            }
        }
    }
]);
//# sourceMappingURL=41875.675e5c9cc5489ff409b3.js.map