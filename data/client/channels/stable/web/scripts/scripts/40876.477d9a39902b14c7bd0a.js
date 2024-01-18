(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40876"], {
        44771: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var a = n("37983"),
                i = n("884691"),
                s = n("414456"),
                l = n.n(s),
                r = n("917351"),
                u = n.n(r),
                o = n("77078"),
                d = n("164546"),
                c = n("513196"),
                f = n("42723"),
                m = n("605475"),
                _ = n("49111"),
                h = n("782340"),
                g = n("279732");
            let S = () => [h.default.Messages.APP_ICON_PIRATE, h.default.Messages.APP_ICON_PIRATE_1, h.default.Messages.APP_ICON_PIRATE_2, h.default.Messages.APP_ICON_PIRATE_3, h.default.Messages.APP_ICON_PIRATE_4],
                p = () => {
                    var e;
                    return null !== (e = u.sample(S())) && void 0 !== e ? e : h.default.Messages.APP_ICON_PIRATE
                };

            function Selection(e) {
                let {
                    id: t,
                    className: n,
                    onSelect: s,
                    isSelected: r = !1,
                    tabIndex: u,
                    children: f
                } = e, [h, S] = i.useState(m.ICONS_BY_ID[t].name), E = t === c.PremiumAppIconIds.PIRATE, T = (0, o.useRadioItem)({
                    label: h,
                    isSelected: r
                });
                return (0, a.jsx)(o.Tooltip, {
                    text: h,
                    onTooltipShow: () => E && S(p()),
                    children: e => (0, a.jsxs)("div", {
                        className: g.appIconSelectionContainer,
                        children: [(0, a.jsx)(o.Clickable, {
                            ...e,
                            ...T,
                            tabIndex: null != u ? u : T.tabIndex,
                            className: l(g.appIconSelection, {
                                [g.selected]: r
                            }, n),
                            onClick: r ? _.NOOP : () => null == s ? void 0 : s(t),
                            children: f
                        }), r && (0, a.jsx)(d.SelectionCircle, {})]
                    })
                })
            }

            function E(e) {
                let {
                    icon: t,
                    isSelected: n,
                    disabled: i,
                    tabIndex: s,
                    onSelect: l
                } = e;
                return (0, a.jsx)(Selection, {
                    onSelect: i ? void 0 : l,
                    isSelected: n,
                    id: t.id,
                    className: i ? g.disabled : void 0,
                    tabIndex: s,
                    children: (0, a.jsx)(f.default, {
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
                    return _
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("913144"),
                r = n("891653"),
                u = n("476765"),
                o = n("805199"),
                d = n("44771"),
                c = n("605475"),
                f = n("782340"),
                m = n("143598");

            function _(e) {
                let {
                    className: t,
                    disabled: n,
                    renderCTAButtons: _
                } = e, [h, g] = (0, i.useStateFromStoresArray)([o.default], () => [o.default.getCurrentDesktopIcon(), o.default.isEditorOpen]), S = (0, u.useUID)(), p = (0, s.useRadioGroup)({
                    orientation: "horizontal",
                    labelledBy: S
                }), E = e => {
                    l.default.dispatch({
                        type: "APP_ICON_UPDATED",
                        id: e
                    })
                };
                return (0, a.jsx)("div", {
                    ...p,
                    className: m.container,
                    children: (0, a.jsxs)("div", {
                        className: t,
                        children: [(0, a.jsxs)("div", {
                            className: m.header,
                            children: [(0, a.jsxs)("div", {
                                className: m.headings,
                                children: [g ? null : (0, a.jsxs)("div", {
                                    className: m.title,
                                    children: [(0, a.jsx)(s.Heading, {
                                        variant: "text-md/medium",
                                        children: f.default.Messages.APP_ICON_SETTINGS_TITLE
                                    }), (0, a.jsx)(r.default, {
                                        className: m.premiumIcon
                                    })]
                                }), (0, a.jsx)(s.Heading, {
                                    variant: "text-sm/normal",
                                    children: f.default.Messages.APP_ICON_SETTINGS_DESCRIPTION
                                })]
                            }), null == _ ? void 0 : _()]
                        }), (0, a.jsx)("div", {
                            className: m.presets,
                            children: c.ICONS.filter(e => {
                                let {
                                    isHidden: t
                                } = e;
                                return !0 !== t
                            }).map((e, t) => (0, a.jsx)(d.default, {
                                icon: e,
                                isSelected: h === e.id,
                                onSelect: e => E(e),
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
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                s = n("234222");

            function l() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                !(!e && (0, i.hasAnyModalOpen)()) && (0, i.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("170935").then(n.bind(n, "170935"));
                    return t => (0, a.jsx)(e, {
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
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var i = e => {
                let {
                    fill: t,
                    className: n
                } = e;
                return (0, a.jsxs)("svg", {
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
        164546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SelectionCircle: function() {
                    return E
                },
                DefaultThemeSelection: function() {
                    return v
                },
                GradientThemeSelection: function() {
                    return N
                }
            }), n("794252");
            var a = n("37983");
            n("884691");
            var i = n("414456"),
                s = n.n(i),
                l = n("506838"),
                r = n("446674"),
                u = n("669491"),
                o = n("2662"),
                d = n("819855"),
                c = n("77078"),
                f = n("161778"),
                m = n("578706"),
                _ = n("253539"),
                h = n("92130"),
                g = n("49111"),
                S = n("782340"),
                p = n("823470");

            function E() {
                return (0, a.jsx)("div", {
                    className: p.selectionCircle,
                    children: (0, a.jsx)(m.default, {
                        className: p.checkmarkCircle,
                        foreground: p.checkmark,
                        backgroundColor: u.default.unsafe_rawColors.WHITE_500.css
                    })
                })
            }

            function T(e) {
                let {
                    name: t,
                    className: n,
                    style: i,
                    onSelect: l,
                    isSelected: r = !1,
                    tabIndex: u,
                    children: o
                } = e, d = (0, c.useRadioItem)({
                    label: t,
                    isSelected: r
                });
                return (0, a.jsx)(c.Tooltip, {
                    text: t,
                    children: e => (0, a.jsxs)("div", {
                        className: p.themeSelectionContainer,
                        children: [(0, a.jsx)(c.Clickable, {
                            ...e,
                            ...d,
                            tabIndex: null != u ? u : d.tabIndex,
                            className: s(p.themeSelection, {
                                [p.selected]: r
                            }, n),
                            style: i,
                            onClick: r ? g.NOOP : l,
                            children: o
                        }), r && (0, a.jsx)(E, {})]
                    })
                })
            }

            function v(e) {
                let {
                    theme: t,
                    isSelected: n,
                    onSelect: i
                } = e, m = (0, r.useStateFromStores)([f.default], () => f.default.systemPrefersColorScheme), _ = e => (0, d.isThemeLight)(e) ? u.default.unsafe_rawColors.PRIMARY_600.css : u.default.unsafe_rawColors.WHITE_500.css, E = (0, l.match)({
                    theme: t,
                    systemPrefersColorScheme: m
                }).with({
                    theme: "system",
                    systemPrefersColorScheme: g.ThemeTypes.LIGHT
                }, () => p.lightIcon).with({
                    theme: g.ThemeTypes.LIGHT
                }, () => p.lightIcon).otherwise(() => p.darkIcon), v = (0, l.match)(t).with(g.ThemeTypes.LIGHT, () => S.default.Messages.THEME_LIGHT).with(g.ThemeTypes.DARK, () => S.default.Messages.THEME_DARK).with("system", () => S.default.Messages.THEME_SYSTEM).exhaustive(), N = (0, c.useRedesignIconContext)().enabled;
                return (0, a.jsx)(T, {
                    onSelect: i,
                    isSelected: n,
                    name: v,
                    className: s(p.defaultThemeSelection, E),
                    children: "system" === t && (0, a.jsx)("div", {
                        className: p.iconWrapper,
                        children: N ? (0, a.jsx)(o.RefreshIcon, {
                            color: _(m)
                        }) : (0, a.jsx)(h.default, {
                            fill: _(m)
                        })
                    })
                })
            }

            function N(e) {
                let {
                    preset: t,
                    isSelected: n,
                    disabled: i,
                    tabIndex: l,
                    onSelect: r
                } = e, {
                    colors: u,
                    angle: o,
                    theme: c
                } = t, f = (0, _.getLinearGradientForBackgroundGradient)({
                    colors: u,
                    angle: o
                });
                return (0, a.jsx)(T, {
                    onSelect: i ? void 0 : r,
                    isSelected: n,
                    name: t.getName(),
                    className: s([i ? p.disabled : null, (0, d.isThemeDark)(c) ? p.darkOverlay : p.lightOverlay]),
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
                    return a
                },
                trackClientThemeUpdated: function() {
                    return H
                },
                default: function() {
                    return W
                }
            }), n("794252"), n("222007");
            var a, i, s = n("37983"),
                l = n("884691"),
                r = n("414456"),
                u = n.n(r),
                o = n("506838"),
                d = n("446674"),
                c = n("151426"),
                f = n("819855"),
                m = n("77078"),
                _ = n("452804"),
                h = n("206230"),
                g = n("812204"),
                S = n("685665"),
                p = n("626301"),
                E = n("917247"),
                T = n("956597"),
                v = n("891653"),
                N = n("505093"),
                I = n("161778"),
                y = n("168973"),
                C = n("491605"),
                O = n("476765"),
                A = n("599110"),
                M = n("32531"),
                b = n("714657"),
                R = n("164546"),
                w = n("941719"),
                P = n("49111"),
                U = n("646718"),
                D = n("116319"),
                x = n("397336"),
                G = n("843455"),
                L = n("782340"),
                k = n("809404");
            (i = a || (a = {})).EDITOR = "EDITOR", i.SETTINGS = "SETTINGS";
            let j = Object.freeze({
                    EDITOR: x.UserSettingsDelay.SLOW_USER_ACTION,
                    SETTINGS: x.UserSettingsDelay.INFREQUENT_USER_ACTION
                }),
                F = l.createContext({}),
                H = e => {
                    let {
                        isPersisted: t,
                        themeName: n,
                        analyticsLocations: a
                    } = e;
                    A.default.track(P.AnalyticEvents.CLIENT_THEME_UPDATED, {
                        feature_name: U.AnalyticsPremiumFeatureNames.CLIENT_THEME,
                        theme_name: n,
                        is_persisted: t,
                        location_stack: a
                    })
                },
                B = e => {
                    let {
                        type: t,
                        isPreview: n,
                        isCoachmark: a
                    } = e, i = (0, o.match)({
                        type: t,
                        isPreview: n,
                        isCoachmark: a
                    }).with({
                        type: "EDITOR",
                        isCoachmark: !0,
                        isPreview: !0
                    }, () => L.default.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER).with({
                        type: "EDITOR",
                        isCoachmark: !0
                    }, () => L.default.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER).otherwise(() => L.default.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE);
                    return (0, s.jsxs)("div", {
                        className: k.title,
                        children: [(0, s.jsx)(m.Heading, {
                            "aria-label": i,
                            variant: "text-md/medium",
                            children: i
                        }), (0, s.jsx)(v.default, {
                            className: k.premiumIcon
                        })]
                    })
                },
                Q = e => {
                    var t, n;
                    let {
                        type: a,
                        isPreview: i,
                        isCoachmark: l
                    } = e, r = (null === (n = (0, E.usePremiumTrialOffer)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === U.PremiumSubscriptionSKUs.TIER_2;
                    if (r && i) return null;
                    let u = (0, o.match)({
                        type: a,
                        isPreview: i,
                        isCoachmark: l
                    }).with({
                        type: "EDITOR",
                        isPreview: !0
                    }, () => L.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                        onPremiumClick: p.navigateToPremiumMarketingPage
                    })).with({
                        type: "EDITOR",
                        isCoachmark: !0
                    }, () => L.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK).with({
                        type: "EDITOR",
                        isPreview: !1
                    }, () => L.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION).with({
                        isPreview: !0
                    }, () => L.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format({
                        onPremiumClick: p.navigateToPremiumMarketingPage
                    })).otherwise(() => L.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS);
                    return (0, s.jsx)(m.Heading, {
                        variant: "text-sm/normal",
                        children: u
                    })
                },
                q = e => {
                    let {
                        type: t,
                        children: n
                    } = e, a = (0, O.useUID)(), i = (0, m.useRadioGroup)({
                        orientation: "horizontal",
                        labelledBy: a
                    }), r = l.useMemo(() => ({
                        type: t,
                        delay: j[t]
                    }), [t]);
                    return (0, s.jsx)(F.Provider, {
                        value: r,
                        children: (0, s.jsx)("div", {
                            ...i,
                            className: k.container,
                            children: n
                        })
                    })
                };
            q.Basic = e => {
                let {
                    className: t
                } = e, {
                    delay: n
                } = l.useContext(F), {
                    analyticsLocations: a
                } = (0, S.default)(g.default.CLIENT_THEMES_THEME_SELECTOR), [i, r, o] = (0, d.useStateFromStoresArray)([I.default, y.default, b.default], () => [I.default.theme, null == b.default.gradientPreset, y.default.useSystemTheme === D.SystemThemeState.ON]), c = e => {
                    (0, M.resetBackgroundGradientPreset)(), H({
                        isPersisted: !0,
                        analyticsLocations: a,
                        themeName: "default ".concat(e)
                    }), (0, _.saveClientTheme)({
                        theme: e
                    }, n)
                };
                return (0, s.jsxs)("section", {
                    className: u(k.presets, t),
                    children: [(0, s.jsx)(R.DefaultThemeSelection, {
                        theme: G.ThemeTypes.LIGHT,
                        isSelected: r && !o && (0, f.isThemeLight)(i),
                        onSelect: () => c(G.ThemeTypes.LIGHT)
                    }), (0, s.jsx)(R.DefaultThemeSelection, {
                        theme: G.ThemeTypes.DARK,
                        isSelected: r && !o && (0, f.isThemeDark)(i),
                        onSelect: () => c(G.ThemeTypes.DARK)
                    }), (0, s.jsx)(R.DefaultThemeSelection, {
                        theme: "system",
                        isSelected: r && o,
                        onSelect: () => c("system")
                    })]
                })
            }, q.Gradient = e => {
                var t, a;
                let {
                    className: i,
                    renderCTAButtons: r,
                    disabled: u = !1
                } = e, {
                    type: o,
                    delay: f
                } = l.useContext(F), {
                    analyticsLocations: m
                } = (0, S.default)(g.default.CLIENT_THEMES_THEME_SELECTOR), [v, I, y] = (0, d.useStateFromStoresArray)([b.default], () => {
                    var e;
                    return [b.default.isPreview, b.default.isCoachmark, null === (e = b.default.gradientPreset) || void 0 === e ? void 0 : e.id]
                }), [O, A] = l.useState(!1), [P, x] = l.useState(-1), G = (0, d.useStateFromStores)([h.default], () => h.default.useReducedMotion), j = (null === (a = (0, E.usePremiumTrialOffer)()) || void 0 === a ? void 0 : null === (t = a.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === U.PremiumSubscriptionSKUs.TIER_2;
                l.useEffect(() => {
                    (P === w.BACKGROUND_GRADIENT_PRESETS.length - 2 && "EDITOR" === o || y === c.BackgroundGradientPresetId.EASTER_EGG) && A(!0)
                }, [P, o, y]);
                let q = (e, t) => {
                    if ((0, M.updateBackgroundGradientPreset)(e.id), H({
                            isPersisted: !v,
                            analyticsLocations: m,
                            themeName: c.BackgroundGradientPresetId[e.id]
                        }), v) {
                        (0, N.setUseSystemTheme)(D.SystemThemeState.OFF);
                        return
                    }
                    if ((0, _.saveClientTheme)({
                            backgroundGradientPresetId: e.id,
                            theme: e.theme
                        }, f), null != t) {
                        if (O && A(!1), t <= P || 0 === t) {
                            x(0);
                            return
                        }
                        x(e => e + 1)
                    }
                };
                return (0, s.jsxs)("section", {
                    className: i,
                    children: ["EDITOR" === o && v && j ? (0, s.jsx)(T.default, {
                        type: U.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                        subscriptionTier: U.PremiumSubscriptionSKUs.TIER_2,
                        children: L.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                            onPremiumClick: p.navigateToPremiumMarketingPage
                        })
                    }) : (0, s.jsxs)("div", {
                        className: k.header,
                        children: [(0, s.jsxs)("div", {
                            className: k.headings,
                            children: [(0, s.jsx)(B, {
                                type: o,
                                isPreview: v,
                                isCoachmark: I
                            }), (0, s.jsx)(Q, {
                                type: o,
                                isPreview: v,
                                isCoachmark: I
                            })]
                        }), null == r ? void 0 : r()]
                    }), (0, s.jsxs)("div", {
                        className: k.presets,
                        children: [w.BACKGROUND_GRADIENT_PRESETS.filter(e => {
                            let {
                                id: t
                            } = e;
                            return t !== c.BackgroundGradientPresetId.EASTER_EGG
                        }).map((e, t) => (0, s.jsx)(R.GradientThemeSelection, {
                            preset: e,
                            isSelected: y === e.id,
                            onSelect: () => q(e, t),
                            disabled: u,
                            tabIndex: 0 !== t || u ? void 0 : 0
                        }, e.id)), (() => {
                            if (!O) return null;
                            let e = w.BACKGROUND_GRADIENT_PRESETS_MAP[c.BackgroundGradientPresetId.EASTER_EGG];
                            if (null == e) return null;
                            async function t() {
                                let {
                                    default: e
                                } = await n.el("922510").then(n.t.bind(n, "922510", 19));
                                return e
                            }
                            return (0, s.jsxs)("div", {
                                className: k.easterEggSelection,
                                children: [(0, s.jsx)(R.GradientThemeSelection, {
                                    preset: e,
                                    isSelected: y === c.BackgroundGradientPresetId.EASTER_EGG,
                                    onSelect: () => q(e)
                                }), (0, s.jsx)(C.default, {
                                    importData: t,
                                    shouldAnimate: !G,
                                    className: k.sparkles
                                })]
                            })
                        })()]
                    })]
                })
            };
            var W = q
        },
        649649: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                listSnapshots: function() {
                    return r
                },
                takeSnapshot: function() {
                    return u
                },
                restoreSnapshot: function() {
                    return o
                },
                backupSettings: function() {
                    return c
                }
            });
            var a = n("917351"),
                i = n.n(a),
                s = n("872717"),
                l = n("49111");
            async function r() {
                return (await s.default.get(l.Endpoints.NOTIFICATION_SNAPSHOTS)).body
            }
            async function u(e) {
                return (await s.default.post({
                    url: l.Endpoints.NOTIFICATION_SNAPSHOTS,
                    body: {
                        label: e
                    }
                })).body
            }
            async function o(e) {
                return (await s.default.post(l.Endpoints.RESTORE_NOTIFICATION_SNAPSHOT(e))).body
            }
            async function d(e) {
                return (await s.default.delete(l.Endpoints.NOTIFICATION_SNAPSHOT(e))).body
            }
            async function c(e) {
                if (e.length > 0) {
                    var t;
                    let n = i.sum(e.map(e => e.length)),
                        a = null !== (t = i.max(e.map(e => e.length))) && void 0 !== t ? t : 0;
                    if (e.length >= 5 || n + a > 1e6) {
                        let t = i.sortBy(e, e => new Date(e.recorded_at).getTime());
                        await d(t[0].id)
                    }
                }
                return u("Backup from ".concat(new Date().toLocaleDateString()))
            }
        },
        380353: function(e, t, n) {
            "use strict";
            var a, i, s, l;
            n.r(t), n.d(t, {
                Mode: function() {
                    return a
                },
                PainLevel: function() {
                    return i
                },
                defaultThresholds: function() {
                    return r
                }
            }), (s = a || (a = {}))[s.KeepAsIs = 0] = "KeepAsIs", s[s.UseGreyDot = 1] = "UseGreyDot", (l = i || (i = {}))[l.Low = 0] = "Low", l[l.Medium = 1] = "Medium", l[l.High = 2] = "High";
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
                    return x
                },
                hasGoodCandidateServers: function() {
                    return G
                },
                autoMigrateToNewSystem: function() {
                    return L
                },
                useSaveSettings: function() {
                    return k
                },
                revertToOldSystem: function() {
                    return Q
                },
                transformUsageData: function() {
                    return q
                }
            }), n("222007"), n("702976"), n("808653"), n("70102");
            var a = n("884691"),
                i = n("627445"),
                s = n.n(i),
                l = n("917351"),
                r = n.n(l),
                u = n("446674"),
                o = n("95410"),
                d = n("913144"),
                c = n("404118"),
                f = n("519705"),
                m = n("542827"),
                _ = n("679428"),
                h = n("42507"),
                g = n("350522"),
                S = n("525065"),
                p = n("952451"),
                E = n("305961"),
                T = n("677099"),
                v = n("282109"),
                N = n("599110"),
                I = n("568734"),
                y = n("449008"),
                C = n("286235"),
                O = n("649649"),
                A = n("845868"),
                M = n("287223"),
                b = n("76618"),
                R = n("380353"),
                w = n("49111"),
                P = n("133335"),
                U = n("397336"),
                D = n("782340");

            function x(e, t) {
                let [n, i] = a.useState(R.defaultThresholds), [s, l] = a.useState({});
                (0, h.useFrecencySettings)();
                let o = (0, u.useStateFromStoresArray)([E.default], () => Object.values(E.default.getGuilds())),
                    d = a.useCallback(() => {
                        let a = {};
                        for (let i of o) a[i.id] = function(e, t, n, a, i) {
                            var s;
                            let [l, r, u] = g.default.hasConsented(w.Consents.PERSONALIZATION) ? (0, M.guessGuildModeWithRemoteData)(e, t, n, a) : (0, M.guessGuildModeWithLocalData)(e, n), o = null !== (s = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== s ? s : {}, d = (0, A.default)(e, null != i ? i : l, o, a, t);
                            return {
                                guildId: e.id,
                                mode: l,
                                debugReason: u,
                                actions: d,
                                overrideMode: i,
                                messagePain: o.messages === R.PainLevel.High,
                                visitsALot: r,
                                muted: v.default.isMuted(e.id) && !v.default.isTemporarilyMuted(e.id)
                            }
                        }(i, n, e, t, s[i.id]);
                        return a
                    }, [o, n, e, t, s]),
                    [c, f] = a.useState(() => d());
                a.useEffect(() => f(d()), [d]);
                let m = a.useCallback((e, t) => {
                    l(n => ({
                        ...n,
                        [e]: t
                    }))
                }, []);
                return {
                    guildPlans: c,
                    overrideGuild: m,
                    setThresholds: i,
                    getDebug: () => (function(e, t) {
                        let n = t.reduce((e, t) => {
                                var n;
                                return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0)
                            }, 0),
                            a = t.reduce((e, t) => {
                                var n;
                                return e + Number(null !== (n = t.num_month_opens) && void 0 !== n ? n : 0)
                            }, 0),
                            i = T.default.getFlattenedGuildIds(),
                            s = r.sortBy(Object.values(e), e => {
                                let t = i.indexOf(e.guildId);
                                return -1 === t ? i.length : t
                            }),
                            l = [
                                ["Use Grey Dot", new Set([R.Mode.UseGreyDot])],
                                ["Keep As Is", new Set([R.Mode.KeepAsIs])]
                            ].map(e => {
                                let [t, n] = e, a = s.filter(e => {
                                    var t;
                                    return n.has(null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode)
                                }), i = a.map(e => {
                                    let t = E.default.getGuild(e.guildId),
                                        n = e.actions.map(e => {
                                            var t;
                                            return "- ".concat(e.label).concat(null !== (t = e.debug) && void 0 !== t ? t : "")
                                        }).join("\n");
                                    return "### ".concat(t.name, "\n**Reasoning**: ").concat(e.debugReason, "**ActionPlan**:\n").concat(n)
                                });
                                return "# ".concat(t, "\n\n").concat(i.join("\n\n"))
                            });
                        return "\n# Basic Stats\n- Total channel visits (yr): ".concat(n, "\n- Total channel visits (month): ").concat(a, "\n\n").concat(l.join("\n\n"))
                    })(Object.values(c), t)
                }
            }

            function G(e, t) {
                return Object.values(E.default.getGuilds()).some(n => {
                    let [a] = g.default.hasConsented(w.Consents.PERSONALIZATION) ? (0, M.guessGuildModeWithRemoteData)(n, R.defaultThresholds, e, t) : (0, M.guessGuildModeWithLocalData)(n, e);
                    return a === R.Mode.UseGreyDot
                })
            }

            function L() {
                let e = Object.values(E.default.getGuilds()),
                    t = {};
                for (let i of e) {
                    var n, a;
                    let e = null !== (n = v.default.getAllSettings().userGuildSettings[i.id]) && void 0 !== n ? n : {},
                        s = null !== (a = e.flags) && void 0 !== a ? a : 0;
                    s = (0, I.setFlag)(s, U.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, !0), s = (0, I.setFlag)(s, U.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !1), t[i.id] = {
                        flags: s
                    }
                }
                F(t), N.default.track(w.AnalyticEvents.NOTIFICATION_MIGRATION_COMPLETED, {
                    auto_migrated: !0,
                    num_unread_guids_after: e.filter(e => p.default.hasUnread(e.id)).length
                })
            }

            function k(e) {
                let [t, n] = a.useState(!1), [i, s] = a.useState(!1), l = a.useCallback(async t => {
                    if (i) throw Error("Already submitted notifications migration");
                    n(!0);
                    try {
                        await j(t, e), s(!0)
                    } finally {
                        n(!1)
                    }
                }, [i, e]);
                return {
                    submitting: t,
                    submitted: i,
                    saveSettings: l
                }
            }
            async function j(e, t) {
                if (v.default.useNewNotifications) {
                    c.default.show({
                        title: "Info",
                        body: "It looks like you are already using the new notifications system so skipping saving any changes this time because that will almost certainly mess up your account!"
                    });
                    return
                }
                let n = function(e) {
                    let t = Object.values(e).filter(e => {
                            var t;
                            return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === R.Mode.UseGreyDot
                        }).map(e => {
                            var t;
                            return {
                                plan: e,
                                memberCount: null !== (t = S.default.getMemberCount(e.guildId)) && void 0 !== t ? t : 0
                            }
                        }),
                        n = {
                            num_unread_guilds_before: Object.keys(e).filter(e => p.default.hasUnread(e)).length,
                            unmuted_server_ids: t.filter(e => v.default.isMuted(e.plan.guildId)).map(e => e.plan.guildId)
                        };
                    return () => {
                        N.default.track(w.AnalyticEvents.NOTIFICATION_MIGRATION_COMPLETED, {
                            ...n,
                            auto_migrated: !0,
                            pre_selected_server_ids: Object.values(e).filter(e => e.mode === R.Mode.UseGreyDot).map(e => e.guildId),
                            final_selected_server_ids: t.map(e => e.plan.guildId),
                            num_unread_guids_after: Object.keys(e).filter(e => p.default.hasUnread(e)).length,
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
                        var a, i;
                        let e = null !== (a = v.default.getAllSettings().userGuildSettings[n.guildId]) && void 0 !== a ? a : {},
                            s = {};
                        for (let t of n.actions) null === (i = t.apply) || void 0 === i || i.call(t, s, e);
                        t[n.guildId] = s
                    }
                    await F(t);
                    let s = Object.values(e).filter(e => e.actions.some(e => e.needsMarkedAsRead)).map(e => e.guildId);
                    if (s.length > 0) {
                        let e = setTimeout(n, 5e3);
                        (0, m.default)(s, void 0, () => {
                            d.default.dispatch({
                                type: "RECOMPUTE_READ_STATES"
                            }), clearTimeout(e), n()
                        })
                    } else n()
                } catch (e) {
                    C.default.captureException(e), c.default.show({
                        title: D.default.Messages.ERROR,
                        body: D.default.Messages.NOTIF_MIGRATION_ERROR,
                        onConfirm: t
                    })
                }
            }
            async function F(e) {
                await H(() => B()), s((await (0, O.listSnapshots)()).length > 0, "No snapshot exists before migration."), await H(() => f.default.setAccountFlag(b.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !0));
                let t = await H(() => _.default.saveUserGuildSettingsBulk(e));
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
                let e = await (0, O.listSnapshots)();
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
                    t && (0, O.backupSettings)(e)
                } else(0, O.takeSnapshot)("Backup from ".concat(new Date().toLocaleDateString()))
            }
            async function Q() {
                o.default.set("turnedOffNewNotifications", !0), N.default.track(w.AnalyticEvents.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: Object.values(E.default.getGuilds()).filter(e => v.default.resolveGuildUnreadSetting(e) === P.UnreadSetting.ONLY_MENTIONS).length
                });
                let e = await (0, O.listSnapshots)(),
                    t = r.sortBy(e, e => new Date(e.recorded_at).getTime());
                if (t.length > 0) {
                    let e = t[t.length - 1];
                    await new Promise(t => c.default.show({
                        title: "Please Confirm",
                        body: "This will turn off the new notification system and restore your " + "notification settings to a backup created on ".concat(new Date(e.recorded_at).toLocaleDateString()),
                        onConfirm: t,
                        cancelText: "Cancel",
                        onCancel: () => {}
                    })), await (0, O.restoreSnapshot)(e.id), await f.default.setAccountFlag(b.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !1)
                } else await f.default.setAccountFlag(b.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !1)
            }

            function q(e) {
                var t, n, a;
                if (null == e) return [];
                let i = r.keyBy(null !== (t = e.voice_joins) && void 0 !== t ? t : [], "channel_id"),
                    s = r.keyBy(null !== (n = e.message_sends) && void 0 !== n ? n : [], "channel_id");
                return (null !== (a = e.channel_opens) && void 0 !== a ? a : []).map(e => {
                    var t, n, a, l, r, u, o, d, c, f, m;
                    let _ = null !== (t = i[e.channel_id]) && void 0 !== t ? t : {},
                        h = null !== (n = s[e.channel_id]) && void 0 !== n ? n : {};
                    return {
                        channel_id: e.channel_id,
                        num_year_opens: Number(null !== (a = e.year_opens) && void 0 !== a ? a : 0),
                        num_month_opens: Number(null !== (l = e.one_month_opens) && void 0 !== l ? l : 0),
                        num_three_month_opens: Number(null !== (r = e.three_month_opens) && void 0 !== r ? r : 0),
                        num_six_month_opens: Number(null !== (u = e.six_month_opens) && void 0 !== u ? u : 0),
                        num_messages: Number(null !== (o = null == h ? void 0 : h.num_messages) && void 0 !== o ? o : 0),
                        num_year_voice_joins: Number(null !== (d = null == _ ? void 0 : _.year_opens) && void 0 !== d ? d : 0),
                        num_month_voice_joins: Number(null !== (c = null == _ ? void 0 : _.one_month_opens) && void 0 !== c ? c : 0),
                        num_three_month_voice_joins: Number(null !== (f = null == _ ? void 0 : _.three_month_opens) && void 0 !== f ? f : 0),
                        num_six_month_voice_joins: Number(null !== (m = null == _ ? void 0 : _.six_month_opens) && void 0 !== m ? m : 0)
                    }
                }).filter(y.isNotNullish)
            }
        },
        845868: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("424973"), n("222007"), n("702976"), n("808653");
            var a = n("917351"),
                i = n.n(a),
                s = n("233069"),
                l = n("870691"),
                r = n("42203"),
                u = n("350522"),
                o = n("319781"),
                d = n("957255"),
                c = n("282109"),
                f = n("718517"),
                m = n("568734"),
                _ = n("449008"),
                h = n("380353"),
                g = n("49111"),
                S = n("397336");

            function p(e, t, n, a, m) {
                if (t !== h.Mode.UseGreyDot) return [{
                    label: "Setting the guild to a white dot unread",
                    apply: (e, t) => {
                        E(e, t, !0)
                    }
                }];
                let S = [],
                    p = Object.values(r.default.getMutableGuildChannelsForGuild(e.id)).filter(e => d.default.can(g.Permissions.VIEW_CHANNEL, e));
                return S.push(... function(e, t) {
                    let n = c.default.isMuted(e.id) && !c.default.isTemporarilyMuted(e.id);
                    if (!n) return [];
                    let a = [{
                            label: "Unmuting the guild and marking it as read",
                            apply: e => {
                                e.muted = !1, e.mute_config = null
                            },
                            needsMarkedAsRead: !0
                        }],
                        i = t.filter(t => c.default.getChannelMessageNotifications(e.id, t.id) === g.UserNotificationSettings.ALL_MESSAGES);
                    return i.length > 0 && a.push({
                        label: "Setting ".concat(i.length, " to mentions-only since they were all-messages and we are unmuting the guild"),
                        debug: i.map(e => "\n    - #".concat(e.name)).join(""),
                        apply: (e, t) => {
                            for (let n of i) T(e, t, n.id, e => {
                                e.message_notifications = g.UserNotificationSettings.ONLY_MENTIONS
                            })
                        }
                    }), a
                }(e, p)), S.push(function(e) {
                    let t = c.default.getMessageNotifications(e.id);
                    if (t === g.UserNotificationSettings.ALL_MESSAGES) return {
                        label: "Setting the guild to only mentions since it is in care-a-little but was previously all-messages",
                        apply: e => {
                            e.message_notifications = g.UserNotificationSettings.ONLY_MENTIONS
                        }
                    }
                }(e)), S.push(function() {
                    return {
                        label: "Setting the guild to a grey dot unread",
                        apply: (e, t) => {
                            E(e, t, !1)
                        }
                    }
                }()), S.push(... function(e) {
                    let t = [],
                        [n, a] = i(e).filter(e => e.type === g.ChannelTypes.GUILD_ANNOUNCEMENT).partition(e => c.default.isChannelMuted(e.guild_id, e.id) || null != e.parent_id && c.default.isChannelMuted(e.guild_id, e.parent_id)).value();
                    return n.length > 0 && t.push({
                        label: "Not touching ".concat(n.length, " announcement channels since they are muted"),
                        debug: n.map(e => "\n    - #".concat(e.name)).join("")
                    }), a.length > 0 && t.push({
                        label: "Setting ".concat(a.length, " announcement channels to white-dot"),
                        debug: a.map(e => "\n    - #".concat(e.name)).join(""),
                        apply: (e, t) => {
                            for (let n of a) v(e, t, n.id, !0)
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
                            for (let a of n) v(e, t, a.id, !1), T(e, t, a.id, e => {
                                e.muted = !1, e.mute_config = null
                            })
                        }
                    }), t
                }(p)), S.push(... function(e) {
                    let t = [],
                        n = [],
                        a = [];
                    return e.forEach(e => {
                        if (c.default.isChannelMuted(e.guild_id, e.id)) return;
                        let t = c.default.getChannelMessageNotifications(e.guild_id, e.id);
                        t === g.UserNotificationSettings.ALL_MESSAGES ? n.push(e) : t === g.UserNotificationSettings.ONLY_MENTIONS && a.push(e)
                    }), n.length > 0 && t.push({
                        label: "Setting ".concat(n.length, " channels to white-dot since they were explicitly All Messages"),
                        debug: n.map(e => "\n    - #".concat(e.name)).join(""),
                        apply: (e, t) => {
                            for (let a of n) v(e, t, a.id, !0)
                        }
                    }), a.length > 0 && t.push({
                        label: "Setting ".concat(a.length, " channels to grey-dot since they were explicitly Mentions Only"),
                        debug: a.map(e => "\n    - #".concat(e.name)).join(""),
                        apply: (e, t) => {
                            for (let n of a) v(e, t, n.id, !1)
                        }
                    }), t
                }(p)), u.default.hasConsented(g.Consents.PERSONALIZATION) ? S.push(... function(e, t, n, a, s) {
                    let l = c.default.isMuted(e.id) && !c.default.isTemporarilyMuted(e.id);
                    if (l) return [];
                    let r = new Set(t.map(e => e.id)),
                        u = a.filter(e => r.has(e.channel_id)),
                        o = i.keyBy(u, "channel_id"),
                        d = Math.max(n.messages === h.PainLevel.High ? s.frecency.yearMinOpensLargeServer : s.frecency.yearMinOpensSmallServer, u.reduce((e, t) => {
                            var n;
                            return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0)
                        }, 0) * s.frecency.totalOpensPercent),
                        f = Math.max(s.frecency.monthMinOpens, u.reduce((e, t) => {
                            var n;
                            return e + Number(null !== (n = t.num_three_month_opens) && void 0 !== n ? n : 0)
                        }, 0) * s.frecency.totalOpensPercent),
                        m = [],
                        _ = [];
                    t.forEach(e => {
                        var t, n, a, i;
                        let s = null !== (t = o[e.id]) && void 0 !== t ? t : {};
                        Number(null !== (n = s.num_year_opens) && void 0 !== n ? n : 0) > d || Number(null !== (a = s.num_month_opens) && void 0 !== a ? a : 0) > f ? m.push(e) : Number(null !== (i = s.num_three_month_opens) && void 0 !== i ? i : 0) > 2 && _.push(e)
                    });
                    let g = [];
                    return m.length > 0 && g.push({
                        label: "Setting ".concat(m.length, " channels to white-dot since they are recent and frequently viewed"),
                        debug: m.map(e => "\n    - #".concat(e.name, " (").concat(JSON.stringify(o[e.id]), ")")).join(""),
                        apply: (e, t) => {
                            for (let n of m) v(e, t, n.id, !0)
                        }
                    }), _.length > 0 && g.push({
                        label: "NOT setting ".concat(_.length, " channels to white-dot because they were only viewed a little."),
                        debug: _.map(e => "\n    - #".concat(e.name, " (").concat(JSON.stringify(o[e.id]), ")")).join("")
                    }), g
                }(e, p, n, a, m)) : S.push(... function(e, t) {
                    let n = c.default.isMuted(e.id) && !c.default.isTemporarilyMuted(e.id);
                    if (n) return [];
                    let a = [],
                        i = new Set(t.map(e => e.id)),
                        l = Date.now() - f.default.Millis.DAYS_30,
                        r = o.default.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof s.ChannelRecordBase && i.has(e.id)),
                        u = r.filter(e => {
                            var t, n;
                            let a = null !== (n = null === (t = o.default.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
                            return 0 !== a.length && a[a.length - 1] >= l
                        });
                    return u.length > 0 && a.push({
                        label: "Setting ".concat(u.length, " channels to white-dot since they are recent and frequently viewed"),
                        debug: u.map(e => "\n    - #".concat(e.name)).join(""),
                        apply: (e, t) => {
                            for (let n of u) v(e, t, n.id, !0)
                        }
                    }), a
                }(e, p)), S.filter(_.isNotNullish)
            }

            function E(e, t, n) {
                var a, i;
                e.flags = (0, m.setFlag)(null !== (i = null !== (a = e.flags) && void 0 !== a ? a : t.flags) && void 0 !== i ? i : 0, S.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, n), e.flags = (0, m.setFlag)(e.flags, S.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !n)
            }

            function T(e, t, n, a) {
                var s, l, r, u;
                let o = null !== (r = null === (s = e.channel_overrides) || void 0 === s ? void 0 : s[n]) && void 0 !== r ? r : {},
                    d = null !== (u = null === (l = t.channel_overrides) || void 0 === l ? void 0 : l[n]) && void 0 !== u ? u : {};
                a(o, d), !i.isEmpty(o) && (null == e.channel_overrides && (e.channel_overrides = {}), e.channel_overrides[n] = o)
            }

            function v(e, t, n, a) {
                T(e, t, n, (e, t) => {
                    var n, i;
                    e.flags = (0, m.setFlag)(null !== (i = null !== (n = e.flags) && void 0 !== n ? n : t.flags) && void 0 !== i ? i : 0, S.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, a), e.flags = (0, m.setFlag)(e.flags, S.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !a)
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
            var a = n("917351"),
                i = n.n(a),
                s = n("233069"),
                l = n("42203"),
                r = n("319781"),
                u = n("525065"),
                o = n("718517"),
                d = n("380353");

            function c(e, t, n, a) {
                var i, s, r;
                let o = l.default.getMutableGuildChannelsForGuild(e.id),
                    c = a.filter(e => e.channel_id in o),
                    m = null !== (i = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== i ? i : {},
                    _ = u.default.getMemberCount(e.id),
                    h = f("year", a, c, e => {
                        var t;
                        return Number(null !== (t = e.num_year_opens) && void 0 !== t ? t : 0)
                    }),
                    g = f("one month", a, c, e => {
                        var t;
                        return Number(null !== (t = e.num_month_opens) && void 0 !== t ? t : 0)
                    }),
                    S = f("three month", a, c, e => {
                        var t;
                        return Number(null !== (t = e.num_three_month_opens) && void 0 !== t ? t : 0)
                    }),
                    p = f("six month", a, c, e => {
                        var t;
                        return Number(null !== (t = e.num_six_month_opens) && void 0 !== t ? t : 0)
                    }),
                    E = [g, S, p, h],
                    T = 0,
                    v = 0;
                c.forEach(e => {
                    var t;
                    T++, v += null !== (t = Number(e.num_messages)) && void 0 !== t ? t : 0
                });
                let N = "\n**Pain**:\n- Everyones: ".concat(d.PainLevel[null !== (s = m.everyones) && void 0 !== s ? s : 0], "\n- Messages: ").concat(d.PainLevel[null !== (r = m.messages) && void 0 !== r ? r : 0], "\n- Size: ").concat(_, "\n**Remote**:\n- Channels: ").concat(T, "\n- AllVisits: ").concat(E.map(e => e.totalOpensAcrossAllServers).join(" / "), "\n- GuildVisits: ").concat(E.map(e => e.guildOpens).join(" / "), "\n- Biggest Channel (abs): ").concat(E.map(e => e.biggestChannel).join(" / "), "\n- Biggest Channel (%): ").concat(E.map(e => e.biggestChannelFormatted).join(" / "), "\n- Sent Msgs: ").concat(v, "\n"),
                    I = S.guildOpens >= .02 * S.totalOpensAcrossAllServers;
                return m.messages !== d.PainLevel.High || I ? [d.Mode.KeepAsIs, I, "KeepAsIs" + N] : [d.Mode.UseGreyDot, I, "UseGreyDot" + N]
            }

            function f(e, t, n, a) {
                let s = t.reduce((e, t) => e + a(t), 0),
                    l = n.reduce((e, t) => e + a(t), 0),
                    r = i.sortBy(n, a).reverse()[0],
                    u = null == r ? 0 : a(r),
                    o = (u / l * 100).toFixed(1);
                return {
                    label: e,
                    totalOpensAcrossAllServers: s,
                    guildOpens: l,
                    biggestChannel: u,
                    biggestChannelFormatted: o
                }
            }

            function m(e, t) {
                var n, a;
                let i = null !== (n = t.filter(t => t.guild_id === e.id)[0]) && void 0 !== n ? n : {},
                    l = null !== (a = u.default.getMemberCount(e.id)) && void 0 !== a ? a : 0,
                    c = Date.now() - o.default.Millis.DAYS_30,
                    f = r.default.getFrequentlyWithoutFetchingLatest().filter(t => t instanceof s.ChannelRecordBase && t.guild_id === e.id),
                    m = f.filter(e => {
                        var t, n;
                        let a = null !== (n = null === (t = r.default.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
                        return 0 !== a.length && a[a.length - 1] >= c
                    }),
                    _ = m.length >= 5,
                    h = f.reduce((e, t) => {
                        var n, a;
                        return e + (null !== (a = null === (n = r.default.frecencyWithoutFetchingLatest.usageHistory[t.id]) || void 0 === n ? void 0 : n.totalUses) && void 0 !== a ? a : 0)
                    }, 0),
                    g = "\n- **Local**:\n    - Guild Visits: ".concat(h, "\n    - Channels: ").concat(f.length, "\n    - Recent Channels: ").concat(m.length, "\n");
                return i.messages === d.PainLevel.High || l > 1e3 ? [d.Mode.UseGreyDot, _, "SuggestGreyDot" + g] : [d.Mode.KeepAsIs, _, "KeepAsIs" + g]
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
            var a = n("37983");
            n("884691");
            var i = n("95410"),
                s = n("77078"),
                l = n("872717"),
                r = n("689988"),
                u = n("282109"),
                o = n("640497"),
                d = n("699668");
            class c extends r.default {
                async handlePostConnectionOpen() {
                    if (i.default.get("turnedOffNewNotifications") || !o.NotificationsExperiment.getCurrentConfig({
                            location: "NotificationMigrationManager"
                        }, {
                            autoTrackExposure: !1
                        }).enabled || u.default.useNewNotifications) return;
                    let {
                        logExposure: e,
                        autoOpen: t
                    } = o.UnreadsEntryPointExperiment.getCurrentConfig({
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
                    } = await l.default.get("/users/@me/notification-migration-data2"), f = (0, d.transformUsageData)(c), {
                        default: m
                    } = await n.el("923660").then(n.bind(n, "923660"));
                    if (!(0, s.hasAnyModalOpen)()) o.UnreadsEntryPointExperiment.trackExposure({
                        location: "NotificationMigrationManager"
                    }), t && ((0, d.hasGoodCandidateServers)(r, f) ? (0, s.openModal)(e => (0, a.jsx)(m, {
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
                        usage: i
                    }
                } = await l.default.get("/users/@me/notification-migration-data2"), r = (0, d.transformUsageData)(i);
                (0, s.openModalLazy)(async () => {
                    let {
                        default: i
                    } = await n.el("923660").then(n.bind(n, "923660"));
                    return n => (0, a.jsx)(i, {
                        ...n,
                        dismissable: e,
                        guildPain: t,
                        myUsage: r
                    })
                })
            }
            var m = new c
        },
        448881: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchCurrentQuests: function() {
                    return o
                },
                sendHeartbeat: function() {
                    return d
                },
                enrollInQuest: function() {
                    return c
                }
            });
            var a = n("872717"),
                i = n("913144"),
                s = n("599417"),
                l = n("2973"),
                r = n("227231"),
                u = n("49111");
            async function o() {
                i.default.dispatch({
                    type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN"
                });
                try {
                    let e = await a.default.get({
                        url: u.Endpoints.QUESTS_CURRENT_QUESTS
                    });
                    i.default.dispatch({
                        type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                        quests: e.body.quests.map(r.questWithUserStatusFromServer)
                    })
                } catch (e) {
                    i.default.dispatch({
                        type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE",
                        error: new s.default(e)
                    })
                }
            }
            async function d(e) {
                let {
                    questId: t,
                    streamKey: n,
                    applicationId: l
                } = e;
                try {
                    let e = await a.default.post({
                        url: u.Endpoints.QUESTS_HEARTBEAT(t),
                        body: {
                            stream_key: n,
                            application_id: l
                        }
                    });
                    i.default.dispatch({
                        type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
                        userStatus: (0, r.questUserStatusFromServer)(e.body),
                        applicationId: l,
                        questId: t,
                        streamKey: n
                    })
                } catch (e) {
                    i.default.dispatch({
                        type: "QUESTS_SEND_HEARTBEAT_FAILURE",
                        error: new s.default(e),
                        questId: t,
                        streamKey: n
                    })
                }
            }
            async function c(e) {
                let t = l.default.isEnrolling(e);
                if (!t) {
                    i.default.dispatch({
                        type: "QUESTS_ENROLL_BEGIN",
                        questId: e
                    });
                    try {
                        let t = await a.default.post({
                            url: u.Endpoints.QUESTS_ENROLL(e)
                        });
                        i.default.dispatch({
                            type: "QUESTS_ENROLL_SUCCESS",
                            enrolledQuestUserStatus: (0, r.questUserStatusFromServer)(t.body)
                        })
                    } catch (t) {
                        i.default.dispatch({
                            type: "QUESTS_ENROLL_FAILURE",
                            questId: e
                        })
                    }
                }
            }
        },
        374023: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("862205");
            let i = (0, a.createExperiment)({
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
            var s = i
        },
        2973: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var a = n("446674"),
                i = n("913144");
            let s = !1,
                l = new Map,
                r = 0,
                u = new Set;

            function o(e, t) {
                l = new Map(l);
                let n = l.get(e);
                null != n && l.set(e, {
                    ...n,
                    ...t
                })
            }

            function d(e) {
                let t = new Set(u);
                t.delete(e), u = t
            }
            class c extends a.default.Store {
                get quests() {
                    return l
                }
                get isFetchingCurrentQuests() {
                    return s
                }
                get lastFetchedCurrentQuests() {
                    return r
                }
                isEnrolling(e) {
                    return u.has(e)
                }
            }
            c.displayName = "QuestsStore";
            var f = new c(i.default, {
                LOGOUT: function() {
                    s = !1, l = new Map, r = 0, u = new Set
                },
                QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function() {
                    r = Date.now(), s = !0
                },
                QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function(e) {
                    let {
                        quests: t
                    } = e;
                    for (let e of (s = !1, l = new Map, t)) l.set(e.id, e)
                },
                QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function() {
                    r = 0, s = !1
                },
                QUESTS_SEND_HEARTBEAT_SUCCESS: function(e) {
                    let {
                        questId: t,
                        userStatus: n
                    } = e;
                    o(t, {
                        userStatus: n
                    })
                },
                QUESTS_ENROLL_BEGIN: function(e) {
                    let {
                        questId: t
                    } = e, n = new Set(u);
                    n.add(t), u = n
                },
                QUESTS_ENROLL_SUCCESS: function(e) {
                    let {
                        enrolledQuestUserStatus: t
                    } = e;
                    o(t.questId, {
                        userStatus: t
                    }), d(t.questId)
                },
                QUESTS_ENROLL_FAILURE: function(e) {
                    let {
                        questId: t
                    } = e;
                    d(t)
                }
            })
        },
        227231: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getQuestByApplicationId: function() {
                    return s
                },
                isQuestExpired: function() {
                    return l
                },
                questUserStatusFromServer: function() {
                    return r
                },
                questWithUserStatusFromServer: function() {
                    return u
                },
                getRewardAssetUrl: function() {
                    return o
                },
                getHeroAssetUrl: function() {
                    return d
                },
                getGameTileAssetUrl: function() {
                    return c
                },
                getGameLogotypeAssetUrl: function() {
                    return f
                }
            }), n("222007");
            var a = n("2973");
            let i = "https://cdn.discordapp.com/assets/quests/";

            function s(e) {
                let t;
                for (let [n, i] of a.default.quests)
                    if (i.config.applicationId === e) {
                        t = i;
                        break
                    } return t
            }

            function l(e) {
                let t = new Date(e.config.expiresAt);
                return t.valueOf() <= Date.now()
            }

            function r(e) {
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
                var t, n;
                return {
                    id: e.id,
                    config: {
                        expiresAt: (t = e.config).expires_at,
                        streamDurationRequirementMinutes: t.stream_duration_requirement_minutes,
                        gameTitle: t.game_title,
                        applicationId: t.application_id,
                        messages: {
                            questName: (n = t.messages).quest_name,
                            rewardName: n.reward_name,
                            rewardNameWithArticle: n.reward_name_with_article,
                            rewardRedemptionInstructions: n.reward_redemption_instructions
                        }
                    },
                    userStatus: null == e.user_status ? null : r(e.user_status)
                }
            }
            let o = e => "".concat(i).concat(e).concat("/reward.png"),
                d = e => "".concat(i).concat(e).concat("/hero.png"),
                c = e => "".concat(i).concat(e).concat("/game_tile.png"),
                f = (e, t) => "".concat(i).concat(e, "/").concat(t).concat("/game_logotype.png")
        },
        505093: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setUseSystemTheme: function() {
                    return i
                }
            });
            var a = n("913144");

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
//# sourceMappingURL=40876.477d9a39902b14c7bd0a.js.map