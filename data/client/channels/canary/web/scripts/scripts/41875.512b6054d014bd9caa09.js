(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["41875"], {
        44771: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                s = n.n(l),
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
            let p = () => [g.default.Messages.APP_ICON_PIRATE, g.default.Messages.APP_ICON_PIRATE_1, g.default.Messages.APP_ICON_PIRATE_2, g.default.Messages.APP_ICON_PIRATE_3, g.default.Messages.APP_ICON_PIRATE_4],
                S = () => {
                    var e;
                    return null !== (e = o.sample(p())) && void 0 !== e ? e : g.default.Messages.APP_ICON_PIRATE
                };

            function Selection(e) {
                let {
                    id: t,
                    className: n,
                    onSelect: l,
                    isSelected: r = !1,
                    tabIndex: o,
                    children: f
                } = e, [g, p] = a.useState(m.ICONS_BY_ID[t].name), v = t === c.PremiumAppIconIds.PIRATE, T = (0, u.useRadioItem)({
                    label: g,
                    isSelected: r
                });
                return (0, i.jsx)(u.Tooltip, {
                    text: g,
                    onTooltipShow: () => v && p(S()),
                    children: e => (0, i.jsxs)("div", {
                        className: _.appIconSelectionContainer,
                        children: [(0, i.jsx)(u.Clickable, {
                            ...e,
                            ...T,
                            tabIndex: null != o ? o : T.tabIndex,
                            className: s(_.appIconSelection, {
                                [_.selected]: r
                            }, n),
                            onClick: r ? h.NOOP : () => null == l ? void 0 : l(t),
                            children: f
                        }), r && (0, i.jsx)(d.SelectionCircle, {})]
                    })
                })
            }

            function v(e) {
                let {
                    icon: t,
                    isSelected: n,
                    disabled: a,
                    tabIndex: l,
                    onSelect: s
                } = e;
                return (0, i.jsx)(Selection, {
                    onSelect: a ? void 0 : s,
                    isSelected: n,
                    id: t.id,
                    className: a ? _.disabled : void 0,
                    tabIndex: l,
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
                    return h
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                l = n("77078"),
                s = n("913144"),
                r = n("891653"),
                o = n("476765"),
                u = n("805199"),
                d = n("44771"),
                c = n("605475"),
                f = n("782340"),
                m = n("143598");

            function h(e) {
                let {
                    className: t,
                    disabled: n,
                    renderCTAButtons: h
                } = e, [g, _] = (0, a.useStateFromStoresArray)([u.default], () => [u.default.getCurrentDesktopIcon(), u.default.isEditorOpen]), p = (0, o.useUID)(), S = (0, l.useRadioGroup)({
                    orientation: "horizontal",
                    labelledBy: p
                }), v = e => {
                    s.default.dispatch({
                        type: "APP_ICON_UPDATED",
                        id: e
                    })
                };
                return (0, i.jsx)("div", {
                    ...S,
                    className: m.container,
                    children: (0, i.jsxs)("div", {
                        className: t,
                        children: [(0, i.jsxs)("div", {
                            className: m.header,
                            children: [(0, i.jsxs)("div", {
                                className: m.headings,
                                children: [_ ? null : (0, i.jsxs)("div", {
                                    className: m.title,
                                    children: [(0, i.jsx)(l.Heading, {
                                        variant: "text-md/medium",
                                        children: f.default.Messages.APP_ICON_SETTINGS_TITLE
                                    }), (0, i.jsx)(r.default, {
                                        className: m.premiumIcon
                                    })]
                                }), (0, i.jsx)(l.Heading, {
                                    variant: "text-sm/normal",
                                    children: f.default.Messages.APP_ICON_SETTINGS_DESCRIPTION
                                })]
                            }), null == h ? void 0 : h()]
                        }), (0, i.jsx)("div", {
                            className: m.presets,
                            children: c.ICONS.filter(e => {
                                let {
                                    isHidden: t
                                } = e;
                                return !0 !== t
                            }).map((e, t) => (0, i.jsx)(d.default, {
                                icon: e,
                                isSelected: g === e.id,
                                onSelect: e => v(e),
                                disabled: n,
                                tabIndex: 0 !== t || n ? void 0 : 0
                            }, e.id))
                        })]
                    })
                })
            }
        },
        788434: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openChangelog: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("234222");

            function s() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                !(!e && (0, a.hasAnyModalOpen)()) && (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("170935").then(n.bind(n, "170935"));
                    return t => (0, i.jsx)(e, {
                        ...t
                    })
                }, {
                    modalKey: l.CHANGELOG_MODAL_KEY
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
                    return v
                },
                DefaultThemeSelection: function() {
                    return E
                },
                GradientThemeSelection: function() {
                    return N
                }
            }), n("794252");
            var i = n("37983");
            n("884691");
            var a = n("414456"),
                l = n.n(a),
                s = n("506838"),
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
                p = n("782340"),
                S = n("823470");

            function v() {
                return (0, i.jsx)("div", {
                    className: S.selectionCircle,
                    children: (0, i.jsx)(m.default, {
                        className: S.checkmarkCircle,
                        foreground: S.checkmark,
                        backgroundColor: o.default.unsafe_rawColors.WHITE_500.css
                    })
                })
            }

            function T(e) {
                let {
                    name: t,
                    className: n,
                    style: a,
                    onSelect: s,
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
                        className: S.themeSelectionContainer,
                        children: [(0, i.jsx)(c.Clickable, {
                            ...e,
                            ...d,
                            tabIndex: null != o ? o : d.tabIndex,
                            className: l(S.themeSelection, {
                                [S.selected]: r
                            }, n),
                            style: a,
                            onClick: r ? _.NOOP : s,
                            children: u
                        }), r && (0, i.jsx)(v, {})]
                    })
                })
            }

            function E(e) {
                let {
                    theme: t,
                    isSelected: n,
                    onSelect: a
                } = e, m = (0, r.useStateFromStores)([f.default], () => f.default.systemPrefersColorScheme), h = e => (0, d.isThemeLight)(e) ? o.default.unsafe_rawColors.PRIMARY_600.css : o.default.unsafe_rawColors.WHITE_500.css, v = (0, s.match)({
                    theme: t,
                    systemPrefersColorScheme: m
                }).with({
                    theme: "system",
                    systemPrefersColorScheme: _.ThemeTypes.LIGHT
                }, () => S.lightIcon).with({
                    theme: _.ThemeTypes.LIGHT
                }, () => S.lightIcon).otherwise(() => S.darkIcon), E = (0, s.match)(t).with(_.ThemeTypes.LIGHT, () => p.default.Messages.THEME_LIGHT).with(_.ThemeTypes.DARK, () => p.default.Messages.THEME_DARK).with("system", () => p.default.Messages.THEME_SYSTEM).exhaustive(), N = (0, c.useRedesignIconContext)().enabled;
                return (0, i.jsx)(T, {
                    onSelect: a,
                    isSelected: n,
                    name: E,
                    className: l(S.defaultThemeSelection, v),
                    children: "system" === t && (0, i.jsx)("div", {
                        className: S.iconWrapper,
                        children: N ? (0, i.jsx)(u.RefreshIcon, {
                            color: h(m)
                        }) : (0, i.jsx)(g.default, {
                            fill: h(m)
                        })
                    })
                })
            }

            function N(e) {
                let {
                    preset: t,
                    isSelected: n,
                    disabled: a,
                    tabIndex: s,
                    onSelect: r
                } = e, {
                    colors: o,
                    angle: u,
                    theme: c
                } = t, f = (0, h.getLinearGradientForBackgroundGradient)({
                    colors: o,
                    angle: u
                });
                return (0, i.jsx)(T, {
                    onSelect: a ? void 0 : r,
                    isSelected: n,
                    name: t.getName(),
                    className: l([a ? S.disabled : null, (0, d.isThemeDark)(c) ? S.darkOverlay : S.lightOverlay]),
                    style: {
                        background: "var(--bg-overlay), ".concat(f)
                    },
                    tabIndex: s
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
            var i, a, l = n("37983"),
                s = n("884691"),
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
                p = n("685665"),
                S = n("626301"),
                v = n("917247"),
                T = n("956597"),
                E = n("891653"),
                N = n("505093"),
                I = n("161778"),
                y = n("168973"),
                O = n("491605"),
                C = n("476765"),
                M = n("599110"),
                A = n("32531"),
                b = n("714657"),
                P = n("164546"),
                R = n("941719"),
                w = n("49111"),
                D = n("646718"),
                x = n("116319"),
                G = n("397336"),
                L = n("843455"),
                j = n("782340"),
                k = n("809404");
            (a = i || (i = {})).EDITOR = "EDITOR", a.SETTINGS = "SETTINGS";
            let U = Object.freeze({
                    EDITOR: G.UserSettingsDelay.SLOW_USER_ACTION,
                    SETTINGS: G.UserSettingsDelay.INFREQUENT_USER_ACTION
                }),
                F = s.createContext({}),
                H = e => {
                    let {
                        isPersisted: t,
                        themeName: n,
                        analyticsLocations: i
                    } = e;
                    M.default.track(w.AnalyticEvents.CLIENT_THEME_UPDATED, {
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
                    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER).with({
                        type: "EDITOR",
                        isCoachmark: !0
                    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER).otherwise(() => j.default.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE);
                    return (0, l.jsxs)("div", {
                        className: k.title,
                        children: [(0, l.jsx)(m.Heading, {
                            "aria-label": a,
                            variant: "text-md/medium",
                            children: a
                        }), (0, l.jsx)(E.default, {
                            className: k.premiumIcon
                        })]
                    })
                },
                W = e => {
                    var t, n;
                    let {
                        type: i,
                        isPreview: a,
                        isCoachmark: s
                    } = e, r = (null === (n = (0, v.usePremiumTrialOffer)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === D.PremiumSubscriptionSKUs.TIER_2;
                    if (r && a) return null;
                    let o = (0, u.match)({
                        type: i,
                        isPreview: a,
                        isCoachmark: s
                    }).with({
                        type: "EDITOR",
                        isPreview: !0
                    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                        onPremiumClick: S.navigateToPremiumMarketingPage
                    })).with({
                        type: "EDITOR",
                        isCoachmark: !0
                    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK).with({
                        type: "EDITOR",
                        isPreview: !1
                    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION).with({
                        isPreview: !0
                    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format({
                        onPremiumClick: S.navigateToPremiumMarketingPage
                    })).otherwise(() => j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS);
                    return (0, l.jsx)(m.Heading, {
                        variant: "text-sm/normal",
                        children: o
                    })
                },
                K = e => {
                    let {
                        type: t,
                        children: n
                    } = e, i = (0, C.useUID)(), a = (0, m.useRadioGroup)({
                        orientation: "horizontal",
                        labelledBy: i
                    }), r = s.useMemo(() => ({
                        type: t,
                        delay: U[t]
                    }), [t]);
                    return (0, l.jsx)(F.Provider, {
                        value: r,
                        children: (0, l.jsx)("div", {
                            ...a,
                            className: k.container,
                            children: n
                        })
                    })
                };
            K.Basic = e => {
                let {
                    className: t
                } = e, {
                    delay: n
                } = s.useContext(F), {
                    analyticsLocations: i
                } = (0, p.default)(_.default.CLIENT_THEMES_THEME_SELECTOR), [a, r, u] = (0, d.useStateFromStoresArray)([I.default, y.default, b.default], () => [I.default.theme, null == b.default.gradientPreset, y.default.useSystemTheme === x.SystemThemeState.ON]), c = e => {
                    (0, A.resetBackgroundGradientPreset)(), H({
                        isPersisted: !0,
                        analyticsLocations: i,
                        themeName: "default ".concat(e)
                    }), (0, h.saveClientTheme)({
                        theme: e
                    }, n)
                };
                return (0, l.jsxs)("section", {
                    className: o(k.presets, t),
                    children: [(0, l.jsx)(P.DefaultThemeSelection, {
                        theme: L.ThemeTypes.LIGHT,
                        isSelected: r && !u && (0, f.isThemeLight)(a),
                        onSelect: () => c(L.ThemeTypes.LIGHT)
                    }), (0, l.jsx)(P.DefaultThemeSelection, {
                        theme: L.ThemeTypes.DARK,
                        isSelected: r && !u && (0, f.isThemeDark)(a),
                        onSelect: () => c(L.ThemeTypes.DARK)
                    }), (0, l.jsx)(P.DefaultThemeSelection, {
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
                } = s.useContext(F), {
                    analyticsLocations: m
                } = (0, p.default)(_.default.CLIENT_THEMES_THEME_SELECTOR), [E, I, y] = (0, d.useStateFromStoresArray)([b.default], () => {
                    var e;
                    return [b.default.isPreview, b.default.isCoachmark, null === (e = b.default.gradientPreset) || void 0 === e ? void 0 : e.id]
                }), [C, M] = s.useState(!1), [w, G] = s.useState(-1), L = (0, d.useStateFromStores)([g.default], () => g.default.useReducedMotion), U = (null === (i = (0, v.usePremiumTrialOffer)()) || void 0 === i ? void 0 : null === (t = i.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === D.PremiumSubscriptionSKUs.TIER_2;
                s.useEffect(() => {
                    (w === R.BACKGROUND_GRADIENT_PRESETS.length - 2 && "EDITOR" === u || y === c.BackgroundGradientPresetId.EASTER_EGG) && M(!0)
                }, [w, u, y]);
                let K = (e, t) => {
                    if ((0, A.updateBackgroundGradientPreset)(e.id), H({
                            isPersisted: !E,
                            analyticsLocations: m,
                            themeName: c.BackgroundGradientPresetId[e.id]
                        }), E) {
                        (0, N.setUseSystemTheme)(x.SystemThemeState.OFF);
                        return
                    }
                    if ((0, h.saveClientTheme)({
                            backgroundGradientPresetId: e.id,
                            theme: e.theme
                        }, f), null != t) {
                        if (C && M(!1), t <= w || 0 === t) {
                            G(0);
                            return
                        }
                        G(e => e + 1)
                    }
                };
                return (0, l.jsxs)("section", {
                    className: a,
                    children: ["EDITOR" === u && E && U ? (0, l.jsx)(T.default, {
                        type: D.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                        subscriptionTier: D.PremiumSubscriptionSKUs.TIER_2,
                        children: j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                            onPremiumClick: S.navigateToPremiumMarketingPage
                        })
                    }) : (0, l.jsxs)("div", {
                        className: k.header,
                        children: [(0, l.jsxs)("div", {
                            className: k.headings,
                            children: [(0, l.jsx)(B, {
                                type: u,
                                isPreview: E,
                                isCoachmark: I
                            }), (0, l.jsx)(W, {
                                type: u,
                                isPreview: E,
                                isCoachmark: I
                            })]
                        }), null == r ? void 0 : r()]
                    }), (0, l.jsxs)("div", {
                        className: k.presets,
                        children: [R.BACKGROUND_GRADIENT_PRESETS.filter(e => {
                            let {
                                id: t
                            } = e;
                            return t !== c.BackgroundGradientPresetId.EASTER_EGG
                        }).map((e, t) => (0, l.jsx)(P.GradientThemeSelection, {
                            preset: e,
                            isSelected: y === e.id,
                            onSelect: () => K(e, t),
                            disabled: o,
                            tabIndex: 0 !== t || o ? void 0 : 0
                        }, e.id)), (() => {
                            if (!C) return null;
                            let e = R.BACKGROUND_GRADIENT_PRESETS_MAP[c.BackgroundGradientPresetId.EASTER_EGG];
                            if (null == e) return null;
                            async function t() {
                                let {
                                    default: e
                                } = await n.el("922510").then(n.t.bind(n, "922510", 19));
                                return e
                            }
                            return (0, l.jsxs)("div", {
                                className: k.easterEggSelection,
                                children: [(0, l.jsx)(P.GradientThemeSelection, {
                                    preset: e,
                                    isSelected: y === c.BackgroundGradientPresetId.EASTER_EGG,
                                    onSelect: () => K(e)
                                }), (0, l.jsx)(O.default, {
                                    importData: t,
                                    shouldAnimate: !L,
                                    className: k.sparkles
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
                l = n("872717"),
                s = n("49111");
            async function r() {
                return (await l.default.get(s.Endpoints.NOTIFICATION_SNAPSHOTS)).body
            }
            async function o(e) {
                return (await l.default.post({
                    url: s.Endpoints.NOTIFICATION_SNAPSHOTS,
                    body: {
                        label: e
                    }
                })).body
            }
            async function u(e) {
                return (await l.default.post(s.Endpoints.RESTORE_NOTIFICATION_SNAPSHOT(e))).body
            }
            async function d(e) {
                return (await l.default.delete(s.Endpoints.NOTIFICATION_SNAPSHOT(e))).body
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
            var i, a, l, s;
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
            }), (l = i || (i = {}))[l.KeepAsIs = 0] = "KeepAsIs", l[l.UseGreyDot = 1] = "UseGreyDot", (s = a || (a = {}))[s.Low = 0] = "Low", s[s.Medium = 1] = "Medium", s[s.High = 2] = "High";
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
                    return L
                },
                autoMigrateToNewSystem: function() {
                    return j
                },
                useSaveSettings: function() {
                    return k
                },
                revertToOldSystem: function() {
                    return W
                },
                transformUsageData: function() {
                    return K
                }
            }), n("222007"), n("702976"), n("808653"), n("70102");
            var i = n("884691"),
                a = n("627445"),
                l = n.n(a),
                s = n("917351"),
                r = n.n(s),
                o = n("446674"),
                u = n("95410"),
                d = n("913144"),
                c = n("404118"),
                f = n("519705"),
                m = n("542827"),
                h = n("679428"),
                g = n("42507"),
                _ = n("350522"),
                p = n("525065"),
                S = n("952451"),
                v = n("305961"),
                T = n("677099"),
                E = n("282109"),
                N = n("599110"),
                I = n("568734"),
                y = n("449008"),
                O = n("286235"),
                C = n("649649"),
                M = n("845868"),
                A = n("287223"),
                b = n("76618"),
                P = n("380353"),
                R = n("49111"),
                w = n("133335"),
                D = n("397336"),
                x = n("782340");

            function G(e, t) {
                let [n, a] = i.useState(P.defaultThresholds), [l, s] = i.useState({});
                (0, g.useFrecencySettings)();
                let u = (0, o.useStateFromStoresArray)([v.default], () => Object.values(v.default.getGuilds())),
                    d = i.useCallback(() => {
                        let i = {};
                        for (let a of u) i[a.id] = function(e, t, n, i, a) {
                            var l;
                            let [s, r, o] = _.default.hasConsented(R.Consents.PERSONALIZATION) ? (0, A.guessGuildModeWithRemoteData)(e, t, n, i, !0) : (0, A.guessGuildModeWithLocalData)(e, n), u = null !== (l = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== l ? l : {}, d = (0, M.default)(e, null != a ? a : s, u, i, t);
                            return {
                                guildId: e.id,
                                mode: s,
                                debugReason: o,
                                actions: d,
                                overrideMode: a,
                                messagePain: u.messages === P.PainLevel.High,
                                visitsALot: r,
                                muted: E.default.isMuted(e.id) && !E.default.isTemporarilyMuted(e.id)
                            }
                        }(a, n, e, t, l[a.id]);
                        return i
                    }, [u, n, e, t, l]),
                    [c, f] = i.useState(() => d());
                i.useEffect(() => f(d()), [d]);
                let m = i.useCallback((e, t) => {
                    s(n => ({
                        ...n,
                        [e]: t
                    }))
                }, []);
                return {
                    guildPlans: c,
                    overrideGuild: m,
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
                            a = T.default.getFlattenedGuildIds(),
                            l = r.sortBy(Object.values(e), e => {
                                let t = a.indexOf(e.guildId);
                                return -1 === t ? a.length : t
                            }),
                            s = [
                                ["Use Grey Dot", new Set([P.Mode.UseGreyDot])],
                                ["Keep As Is", new Set([P.Mode.KeepAsIs])]
                            ].map(e => {
                                let [t, n] = e, i = l.filter(e => {
                                    var t;
                                    return n.has(null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode)
                                }), a = i.map(e => {
                                    let t = v.default.getGuild(e.guildId),
                                        n = e.actions.map(e => {
                                            var t;
                                            return "- ".concat(e.label).concat(null !== (t = e.debug) && void 0 !== t ? t : "")
                                        }).join("\n");
                                    return "### ".concat(t.name, "\n**Reasoning**: ").concat(e.debugReason, "**ActionPlan**:\n").concat(n)
                                });
                                return "# ".concat(t, "\n\n").concat(a.join("\n\n"))
                            });
                        return "\n# Basic Stats\n- Total channel visits (yr): ".concat(n, "\n- Total channel visits (month): ").concat(i, "\n\n").concat(s.join("\n\n"))
                    })(Object.values(c), t)
                }
            }

            function L(e, t) {
                return Object.values(v.default.getGuilds()).some(n => {
                    let [i] = _.default.hasConsented(R.Consents.PERSONALIZATION) ? (0, A.guessGuildModeWithRemoteData)(n, P.defaultThresholds, e, t, !1) : (0, A.guessGuildModeWithLocalData)(n, e);
                    return i === P.Mode.UseGreyDot
                })
            }

            function j() {
                let e = Object.values(v.default.getGuilds()),
                    t = {};
                for (let a of e) {
                    var n, i;
                    let e = null !== (n = E.default.getAllSettings().userGuildSettings[a.id]) && void 0 !== n ? n : {},
                        l = null !== (i = e.flags) && void 0 !== i ? i : 0;
                    l = (0, I.setFlag)(l, D.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, !0), l = (0, I.setFlag)(l, D.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !1), t[a.id] = {
                        flags: l
                    }
                }
                F(t), N.default.track(R.AnalyticEvents.NOTIFICATION_MIGRATION_COMPLETED, {
                    auto_migrated: !0,
                    num_unread_guids_after: e.filter(e => S.default.hasUnread(e.id)).length
                })
            }

            function k(e) {
                let [t, n] = i.useState(!1), [a, l] = i.useState(!1), s = i.useCallback(async t => {
                    if (a) throw Error("Already submitted notifications migration");
                    n(!0);
                    try {
                        await U(t, e), l(!0)
                    } finally {
                        n(!1)
                    }
                }, [a, e]);
                return {
                    submitting: t,
                    submitted: a,
                    saveSettings: s
                }
            }
            async function U(e, t) {
                if (E.default.useNewNotifications) {
                    c.default.show({
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
                                memberCount: null !== (t = p.default.getMemberCount(e.guildId)) && void 0 !== t ? t : 0
                            }
                        }),
                        n = {
                            num_unread_guilds_before: Object.keys(e).filter(e => S.default.hasUnread(e)).length,
                            unmuted_server_ids: t.filter(e => E.default.isMuted(e.plan.guildId)).map(e => e.plan.guildId)
                        };
                    return () => {
                        N.default.track(R.AnalyticEvents.NOTIFICATION_MIGRATION_COMPLETED, {
                            ...n,
                            auto_migrated: !0,
                            pre_selected_server_ids: Object.values(e).filter(e => e.mode === P.Mode.UseGreyDot).map(e => e.guildId),
                            final_selected_server_ids: t.map(e => e.plan.guildId),
                            num_unread_guids_after: Object.keys(e).filter(e => S.default.hasUnread(e)).length,
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
                        let e = null !== (i = E.default.getAllSettings().userGuildSettings[n.guildId]) && void 0 !== i ? i : {},
                            l = {};
                        for (let t of n.actions) null === (a = t.apply) || void 0 === a || a.call(t, l, e);
                        t[n.guildId] = l
                    }
                    await F(t);
                    let l = Object.values(e).filter(e => e.actions.some(e => e.needsMarkedAsRead)).map(e => e.guildId);
                    if (l.length > 0) {
                        let e = setTimeout(n, 5e3);
                        (0, m.default)(l, void 0, () => {
                            d.default.dispatch({
                                type: "RECOMPUTE_READ_STATES"
                            }), clearTimeout(e), n()
                        })
                    } else n()
                } catch (e) {
                    O.default.captureException(e), c.default.show({
                        title: x.default.Messages.ERROR,
                        body: x.default.Messages.NOTIF_MIGRATION_ERROR,
                        onConfirm: t
                    })
                }
            }
            async function F(e) {
                await H(() => B()), l((await (0, C.listSnapshots)()).length > 0, "No snapshot exists before migration."), await H(() => f.default.setAccountFlag(b.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !0));
                let t = await H(() => h.default.saveUserGuildSettingsBulk(e));
                d.default.dispatch({
                    type: "USER_GUILD_SETTINGS_FULL_UPDATE",
                    userGuildSettings: t
                }), d.default.dispatch({
                    type: "RECOMPUTE_READ_STATES"
                })
            }
            async function H(e) {
                for (let e = 0; e < 3; e++) try {
                    break
                } catch (t) {
                    await new Promise(t => setTimeout(t, 1e3 * (e + 1)))
                }
                return await e()
            }
            async function B() {
                let e = await (0, C.listSnapshots)();
                if (e.length > 0) {
                    let t = await
                    function() {
                        return new Promise(e => {
                            c.default.show({
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
            async function W() {
                u.default.set("turnedOffNewNotifications", !0), N.default.track(R.AnalyticEvents.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: Object.values(v.default.getGuilds()).filter(e => E.default.resolveGuildUnreadSetting(e) === w.UnreadSetting.ONLY_MENTIONS).length
                });
                let e = await (0, C.listSnapshots)(),
                    t = r.sortBy(e, e => new Date(e.recorded_at).getTime());
                if (t.length > 0) {
                    let e = t[t.length - 1];
                    await new Promise(t => c.default.show({
                        title: "Please Confirm",
                        body: "This will turn off the new notification system and restore your " + "notification settings to a backup created on ".concat(new Date(e.recorded_at).toLocaleDateString()),
                        onConfirm: t,
                        cancelText: "Cancel",
                        onCancel: () => {}
                    })), await (0, C.restoreSnapshot)(e.id), await f.default.setAccountFlag(b.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !1)
                } else await f.default.setAccountFlag(b.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !1)
            }

            function K(e) {
                var t, n, i;
                if (null == e) return [];
                let a = r.keyBy(null !== (t = e.voice_joins) && void 0 !== t ? t : [], "channel_id"),
                    l = r.keyBy(null !== (n = e.message_sends) && void 0 !== n ? n : [], "channel_id");
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
                }).filter(y.isNotNullish)
            }
        },
        845868: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("424973"), n("222007"), n("702976"), n("808653");
            var i = n("917351"),
                a = n.n(i),
                l = n("233069"),
                s = n("870691"),
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
                p = n("397336");

            function S(e, t, n, i, m) {
                if (t !== g.Mode.UseGreyDot) return [{
                    label: "Setting the guild to a white dot unread",
                    apply: (e, t) => {
                        v(e, t, !0)
                    }
                }];
                let p = [],
                    S = Object.values(r.default.getMutableGuildChannelsForGuild(e.id)).filter(e => d.default.can(_.Permissions.VIEW_CHANNEL, e));
                return p.push(... function(e, t) {
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
                            for (let n of a) T(e, t, n.id, e => {
                                e.message_notifications = _.UserNotificationSettings.ONLY_MENTIONS
                            })
                        }
                    }), i
                }(e, S)), p.push(function(e) {
                    let t = c.default.getMessageNotifications(e.id);
                    if (t === _.UserNotificationSettings.ALL_MESSAGES) return {
                        label: "Setting the guild to only mentions since it is in care-a-little but was previously all-messages",
                        apply: e => {
                            e.message_notifications = _.UserNotificationSettings.ONLY_MENTIONS
                        }
                    }
                }(e)), p.push(function() {
                    return {
                        label: "Setting the guild to a grey dot unread",
                        apply: (e, t) => {
                            v(e, t, !1)
                        }
                    }
                }()), p.push(... function(e) {
                    let t = [],
                        [n, i] = a(e).filter(e => e.type === _.ChannelTypes.GUILD_ANNOUNCEMENT).partition(e => c.default.isChannelMuted(e.guild_id, e.id) || null != e.parent_id && c.default.isChannelMuted(e.guild_id, e.parent_id)).value();
                    return n.length > 0 && t.push({
                        label: "Not touching ".concat(n.length, " announcement channels since they are muted"),
                        debug: n.map(e => "\n    - #".concat(e.name)).join("")
                    }), i.length > 0 && t.push({
                        label: "Setting ".concat(i.length, " announcement channels to white-dot"),
                        debug: i.map(e => "\n    - #".concat(e.name)).join(""),
                        apply: (e, t) => {
                            for (let n of i) E(e, t, n.id, !0)
                        }
                    }), t
                }(S)), p.push(... function(e) {
                    let t = [],
                        n = [];
                    for (let t of e)
                        if (c.default.isChannelMuted(t.guild_id, t.id) && t.isCategory()) {
                            let e = s.default.isCollapsed(t.id);
                            !e && n.push(t)
                        } return n.length > 0 && t.push({
                        label: "Unmuting ".concat(n.length, " categories and setting to grey-dot"),
                        debug: n.map(e => "\n    - #".concat(e.name)).join(""),
                        apply: (e, t) => {
                            for (let i of n) E(e, t, i.id, !1), T(e, t, i.id, e => {
                                e.muted = !1, e.mute_config = null
                            })
                        }
                    }), t
                }(S)), p.push(... function(e) {
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
                            for (let i of n) E(e, t, i.id, !0)
                        }
                    }), i.length > 0 && t.push({
                        label: "Setting ".concat(i.length, " channels to grey-dot since they were explicitly Mentions Only"),
                        debug: i.map(e => "\n    - #".concat(e.name)).join(""),
                        apply: (e, t) => {
                            for (let n of i) E(e, t, n.id, !1)
                        }
                    }), t
                }(S)), o.default.hasConsented(_.Consents.PERSONALIZATION) ? p.push(... function(e, t, n, i, l) {
                    let s = c.default.isMuted(e.id) && !c.default.isTemporarilyMuted(e.id);
                    if (s) return [];
                    let r = new Set(t.map(e => e.id)),
                        o = i.filter(e => r.has(e.channel_id)),
                        u = a.keyBy(o, "channel_id"),
                        d = Math.max(n.messages === g.PainLevel.High ? l.frecency.yearMinOpensLargeServer : l.frecency.yearMinOpensSmallServer, o.reduce((e, t) => {
                            var n;
                            return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0)
                        }, 0) * l.frecency.totalOpensPercent),
                        f = Math.max(l.frecency.monthMinOpens, o.reduce((e, t) => {
                            var n;
                            return e + Number(null !== (n = t.num_three_month_opens) && void 0 !== n ? n : 0)
                        }, 0) * l.frecency.totalOpensPercent),
                        m = [],
                        h = [];
                    t.forEach(e => {
                        var t, n, i, a;
                        let l = null !== (t = u[e.id]) && void 0 !== t ? t : {};
                        Number(null !== (n = l.num_year_opens) && void 0 !== n ? n : 0) > d || Number(null !== (i = l.num_month_opens) && void 0 !== i ? i : 0) > f ? m.push(e) : Number(null !== (a = l.num_three_month_opens) && void 0 !== a ? a : 0) > 2 && h.push(e)
                    });
                    let _ = [];
                    return m.length > 0 && _.push({
                        label: "Setting ".concat(m.length, " channels to white-dot since they are recent and frequently viewed"),
                        debug: m.map(e => "\n    - #".concat(e.name, " (").concat(JSON.stringify(u[e.id]), ")")).join(""),
                        apply: (e, t) => {
                            for (let n of m) E(e, t, n.id, !0)
                        }
                    }), h.length > 0 && _.push({
                        label: "NOT setting ".concat(h.length, " channels to white-dot because they were only viewed a little."),
                        debug: h.map(e => "\n    - #".concat(e.name, " (").concat(JSON.stringify(u[e.id]), ")")).join("")
                    }), _
                }(e, S, n, i, m)) : p.push(... function(e, t) {
                    let n = c.default.isMuted(e.id) && !c.default.isTemporarilyMuted(e.id);
                    if (n) return [];
                    let i = [],
                        a = new Set(t.map(e => e.id)),
                        s = Date.now() - f.default.Millis.DAYS_30,
                        r = u.default.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof l.ChannelRecordBase && a.has(e.id)),
                        o = r.filter(e => {
                            var t, n;
                            let i = null !== (n = null === (t = u.default.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
                            return 0 !== i.length && i[i.length - 1] >= s
                        });
                    return o.length > 0 && i.push({
                        label: "Setting ".concat(o.length, " channels to white-dot since they are recent and frequently viewed"),
                        debug: o.map(e => "\n    - #".concat(e.name)).join(""),
                        apply: (e, t) => {
                            for (let n of o) E(e, t, n.id, !0)
                        }
                    }), i
                }(e, S)), p.filter(h.isNotNullish)
            }

            function v(e, t, n) {
                var i, a;
                e.flags = (0, m.setFlag)(null !== (a = null !== (i = e.flags) && void 0 !== i ? i : t.flags) && void 0 !== a ? a : 0, p.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, n), e.flags = (0, m.setFlag)(e.flags, p.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !n)
            }

            function T(e, t, n, i) {
                var l, s, r, o;
                let u = null !== (r = null === (l = e.channel_overrides) || void 0 === l ? void 0 : l[n]) && void 0 !== r ? r : {},
                    d = null !== (o = null === (s = t.channel_overrides) || void 0 === s ? void 0 : s[n]) && void 0 !== o ? o : {};
                i(u, d), !a.isEmpty(u) && (null == e.channel_overrides && (e.channel_overrides = {}), e.channel_overrides[n] = u)
            }

            function E(e, t, n, i) {
                T(e, t, n, (e, t) => {
                    var n, a;
                    e.flags = (0, m.setFlag)(null !== (a = null !== (n = e.flags) && void 0 !== n ? n : t.flags) && void 0 !== a ? a : 0, p.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, i), e.flags = (0, m.setFlag)(e.flags, p.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !i)
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
                l = n("233069"),
                s = n("42203"),
                r = n("319781"),
                o = n("525065"),
                u = n("718517"),
                d = n("380353");

            function c(e, t, n, i, a) {
                var l, r, u, c;
                let m = s.default.getMutableGuildChannelsForGuild(e.id),
                    h = i.filter(e => e.channel_id in m),
                    g = null !== (l = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== l ? l : {},
                    _ = o.default.getMemberCount(e.id),
                    p = f("year", i, h, e => {
                        var t;
                        return Number(null !== (t = e.num_year_opens) && void 0 !== t ? t : 0)
                    }),
                    S = f("one month", i, h, e => {
                        var t;
                        return Number(null !== (t = e.num_month_opens) && void 0 !== t ? t : 0)
                    }),
                    v = f("three month", i, h, e => {
                        var t;
                        return Number(null !== (t = e.num_three_month_opens) && void 0 !== t ? t : 0)
                    }),
                    T = f("six month", i, h, e => {
                        var t;
                        return Number(null !== (t = e.num_six_month_opens) && void 0 !== t ? t : 0)
                    }),
                    E = [S, v, T, p],
                    N = 0,
                    I = 0;
                h.forEach(e => {
                    var t;
                    N++, I += null !== (t = Number(e.num_messages)) && void 0 !== t ? t : 0
                });
                let y = "\n**Pain**:\n- Everyones: ".concat(d.PainLevel[null !== (r = g.everyones) && void 0 !== r ? r : 0], "\n- Messages: ").concat(d.PainLevel[null !== (u = g.messages) && void 0 !== u ? u : 0], "\n- Size: ").concat(_, "\n**Remote**:\n- Channels: ").concat(N, "\n- AllVisits: ").concat(E.map(e => e.totalOpensAcrossAllServers).join(" / "), "\n- GuildVisits: ").concat(E.map(e => e.guildOpens).join(" / "), "\n- Biggest Channel (abs): ").concat(E.map(e => e.biggestChannel).join(" / "), "\n- Biggest Channel (%): ").concat(E.map(e => e.biggestChannelFormatted).join(" / "), "\n- Sent Msgs: ").concat(I, "\n"),
                    O = v.guildOpens >= .02 * v.totalOpensAcrossAllServers,
                    C = (null !== (c = p.guildOpens) && void 0 !== c ? c : 0) > 0;
                if (g.messages === d.PainLevel.High) {
                    if (!a) return [d.Mode.UseGreyDot, O, "UseGreyDot" + y];
                    if (!O && C) return [d.Mode.UseGreyDot, O, "UseGreyDot" + y]
                }
                return [d.Mode.KeepAsIs, O, "KeepAsIs" + y]
            }

            function f(e, t, n, i) {
                let l = t.reduce((e, t) => e + i(t), 0),
                    s = n.reduce((e, t) => e + i(t), 0),
                    r = a.sortBy(n, i).reverse()[0],
                    o = null == r ? 0 : i(r),
                    u = (o / s * 100).toFixed(1);
                return {
                    label: e,
                    totalOpensAcrossAllServers: l,
                    guildOpens: s,
                    biggestChannel: o,
                    biggestChannelFormatted: u
                }
            }

            function m(e, t) {
                var n, i;
                let a = null !== (n = t.filter(t => t.guild_id === e.id)[0]) && void 0 !== n ? n : {},
                    s = null !== (i = o.default.getMemberCount(e.id)) && void 0 !== i ? i : 0,
                    c = Date.now() - u.default.Millis.DAYS_30,
                    f = r.default.getFrequentlyWithoutFetchingLatest().filter(t => t instanceof l.ChannelRecordBase && t.guild_id === e.id),
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
                return a.messages === d.PainLevel.High || s > 1e3 ? [d.Mode.UseGreyDot, h, "SuggestGreyDot" + _] : [d.Mode.KeepAsIs, h, "KeepAsIs" + _]
            }
        },
        748021: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openMigrationModal: function() {
                    return f
                },
                default: function() {
                    return m
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var a = n("95410"),
                l = n("77078"),
                s = n("872717"),
                r = n("689988"),
                o = n("282109"),
                u = n("640497"),
                d = n("699668");
            class c extends r.default {
                async handlePostConnectionOpen() {
                    if (a.default.get("turnedOffNewNotifications") || !u.NotificationsExperiment.getCurrentConfig({
                            location: "NotificationMigrationManager"
                        }, {
                            autoTrackExposure: !1
                        }).enabled || o.default.useNewNotifications) return;
                    let {
                        logExposure: e,
                        autoOpen: t
                    } = u.UnreadsEntryPointExperiment.getCurrentConfig({
                        location: "NotificationMigrationManager"
                    }, {
                        autoTrackExposure: !1
                    });
                    if (!e) return;
                    let {
                        body: {
                            guild_noise: r,
                            usage: c
                        }
                    } = await s.default.get("/users/@me/notification-migration-data2"), f = (0, d.transformUsageData)(c), {
                        default: m
                    } = await n.el("923660").then(n.bind(n, "923660"));
                    if (!(0, l.hasAnyModalOpen)()) u.UnreadsEntryPointExperiment.trackExposure({
                        location: "NotificationMigrationManager"
                    }), t && ((0, d.hasGoodCandidateServers)(r, f) ? (0, l.openModal)(e => (0, i.jsx)(m, {
                        ...e,
                        dismissable: !1,
                        guildPain: r,
                        myUsage: f
                    }), {
                        onCloseRequest: () => {}
                    }) : (0, d.autoMigrateToNewSystem)())
                }
                constructor(...e) {
                    super(...e), this.actions = {
                        POST_CONNECTION_OPEN: this.handlePostConnectionOpen
                    }
                }
            }
            async function f(e) {
                let {
                    body: {
                        guild_noise: t,
                        usage: a
                    }
                } = await s.default.get("/users/@me/notification-migration-data2"), r = (0, d.transformUsageData)(a);
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
            var m = new c
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
        }
    }
]);
//# sourceMappingURL=41875.512b6054d014bd9caa09.js.map