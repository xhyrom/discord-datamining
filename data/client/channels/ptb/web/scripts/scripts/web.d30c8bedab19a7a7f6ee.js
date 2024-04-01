! function() {
    var e, t, a, d, n, c, i, o, r, f = {
            799656: function(e, t, a) {
                "use strict";
                a.r(t);
                var d = a("735250");
                a("470079");
                var n = a("613828"),
                    c = a("442837"),
                    i = a("314897"),
                    o = a("828695"),
                    r = a("981631");
                t.default = c.default.connectStores([o.default, i.default], () => {
                    let e = i.default.getToken();
                    return {
                        token: e,
                        hasLoadedExperiments: null != e || o.default.hasLoadedExperiments
                    }
                })(e => {
                    let {
                        hasLoadedExperiments: t,
                        token: a
                    } = e;
                    return null != a ? (0, d.jsx)(n.Redirect, {
                        to: r.Routes.APP
                    }) : t ? (0, d.jsx)(n.Redirect, {
                        to: r.Routes.DEFAULT_LOGGED_OUT
                    }) : null
                })
            },
            540117: function(e, t, a) {
                "use strict";
                a.r(t);
                var d = a("735250"),
                    n = a("470079"),
                    c = a("803997"),
                    i = a.n(c),
                    o = a("715702"),
                    r = a("750950"),
                    f = a("605094");
                class l extends n.Component {
                    render() {
                        return (0, d.jsx)("div", {
                            className: i()(r.app, f.vertical),
                            children: (0, d.jsx)(o.default, {})
                        })
                    }
                }
                t.default = l
            },
            715702: function(e, t, a) {
                "use strict";
                a.r(t);
                var d = a("663993");
                t.default = (0, d.makeLazy)({
                    createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("23755"), a.e("61613"), a.e("58153"), a.e("25381"), a.e("79504"), a.e("92223"), a.e("11250"), a.e("57878"), a.e("95393"), a.e("81539"), a.e("88390"), a.e("56630"), a.e("6380"), a.e("3084"), a.e("30243"), a.e("74456"), a.e("38779"), a.e("87983"), a.e("58286"), a.e("90508"), a.e("7620"), a.e("49398"), a.e("41947"), a.e("65840"), a.e("75118"), a.e("18101"), a.e("65892"), a.e("11256"), a.e("47217"), a.e("38651"), a.e("31375")]).then(a.bind(a, "601564")),
                    webpackId: "601564"
                })
            },
            155221: function(e, t, a) {
                "use strict";
                a.r(t), a.d(t, {
                    Overlay: function() {
                        return z
                    }
                }), a("47120");
                var d = a("735250"),
                    n = a("470079"),
                    c = a("664751"),
                    i = a("266067"),
                    o = a("613828"),
                    r = a("990547"),
                    f = a("719711"),
                    l = a("271579"),
                    s = a("756647"),
                    u = a("442837"),
                    b = a("433517"),
                    h = a("799656"),
                    p = a("540117"),
                    m = a("765717"),
                    _ = a("663993"),
                    E = a("329816"),
                    g = a("554608"),
                    I = a("83949"),
                    O = a("137412"),
                    T = a("314897"),
                    R = a("626135"),
                    w = a("361207"),
                    v = a("690032"),
                    S = a("358085"),
                    A = a("998502"),
                    N = a("981631"),
                    C = a("188785"),
                    D = a("436620");
                a("928518"), a("972830"), a("704806");
                let P = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("49237"), a.e("61482")]).then(a.bind(a, "576184")),
                        webpackId: "576184",
                        name: "UnsupportedBrowser"
                    }),
                    L = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("99387"), a.e("88571")]).then(a.bind(a, "431583")),
                        webpackId: "431583",
                        name: "DownloadApps"
                    }),
                    y = (0, _.makeLazy)({
                        createPromise: () => a.e("81975").then(a.bind(a, "484097")),
                        webpackId: "484097",
                        name: "InviteProxy"
                    }),
                    M = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("99387"), a.e("20786")]).then(a.bind(a, "417663")),
                        webpackId: "417663",
                        name: "VerifyConnectedAccount"
                    }),
                    k = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("99387"), a.e("16565")]).then(a.bind(a, "984388")),
                        webpackId: "984388",
                        name: "LinkConnectedAccount"
                    }),
                    U = (0, _.makeLazy)({
                        createPromise: () => a.e("46882").then(a.bind(a, "924339")),
                        webpackId: "924339",
                        name: "LinkAuthorize"
                    }),
                    x = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("99387"), a.e("19878"), a.e("49277")]).then(a.bind(a, "197528")),
                        webpackId: "197528",
                        name: "ActivateDevice"
                    }),
                    j = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("23755"), a.e("61613"), a.e("55765"), a.e("63958"), a.e("58153"), a.e("25381"), a.e("79504"), a.e("92223"), a.e("2047"), a.e("11250"), a.e("57878"), a.e("95393"), a.e("81539"), a.e("88390"), a.e("56630"), a.e("70866"), a.e("39285"), a.e("14262"), a.e("6380"), a.e("61980"), a.e("3084"), a.e("30243"), a.e("74456"), a.e("38779"), a.e("87983"), a.e("58286"), a.e("90508"), a.e("7590"), a.e("7620"), a.e("49398"), a.e("41947"), a.e("53466"), a.e("65840"), a.e("43643"), a.e("37766"), a.e("75118"), a.e("95003"), a.e("18101"), a.e("37220"), a.e("75301"), a.e("42225"), a.e("65892"), a.e("91315"), a.e("80954"), a.e("62856"), a.e("37839"), a.e("90212"), a.e("11256"), a.e("49508"), a.e("80026"), a.e("47217"), a.e("29598"), a.e("47423"), a.e("38651"), a.e("47849"), a.e("95468"), a.e("46048")]).then(a.bind(a, "457094")),
                        webpackId: "457094",
                        name: "ViewsWithMainInterface",
                        memo: !0,
                        id: "457094"
                    }),
                    V = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("99387"), a.e("85044")]).then(a.bind(a, "203482")),
                        webpackId: "203482",
                        name: "XboxEdu"
                    }),
                    G = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("99387"), a.e("7907")]).then(a.bind(a, "231573")),
                        webpackId: "231573",
                        name: "XboxPin"
                    }),
                    H = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("66635"), a.e("73422"), a.e("75492"), a.e("58153"), a.e("25381"), a.e("79504"), a.e("92223"), a.e("2047"), a.e("11250"), a.e("57878"), a.e("95393"), a.e("88390"), a.e("61980"), a.e("19878"), a.e("10778"), a.e("52030"), a.e("85514"), a.e("90212"), a.e("86691"), a.e("83081")]).then(a.bind(a, "822699")),
                        webpackId: "822699",
                        name: "ViewsWithAuth"
                    }),
                    F = (0, _.makeLazy)({
                        createPromise: () => a.e("32640").then(a.bind(a, "285773")),
                        webpackId: "285773",
                        name: "ViewsWithOAuth2"
                    }),
                    B = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("81539"), a.e("56630"), a.e("6380"), a.e("65840"), a.e("18101"), a.e("11256"), a.e("47849"), a.e("51156")]).then(a.bind(a, "317281")),
                        webpackId: "317281",
                        name: "ViewsWithUnauthenticatedApplicationDirectory"
                    }),
                    W = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("10508")]).then(a.bind(a, "549652")),
                        webpackId: "549652",
                        name: "BrowserHandoff"
                    }),
                    K = (0, _.makeLazy)({
                        createPromise: () => a.e("76888").then(a.bind(a, "573276")),
                        webpackId: "573276",
                        name: "MobileWebHandoffFallback"
                    }),
                    z = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("23755"), a.e("61613"), a.e("55765"), a.e("58153"), a.e("25381"), a.e("79504"), a.e("92223"), a.e("2047"), a.e("11250"), a.e("57878"), a.e("95393"), a.e("81539"), a.e("88390"), a.e("56630"), a.e("70866"), a.e("39285"), a.e("14262"), a.e("6380"), a.e("61980"), a.e("3084"), a.e("30243"), a.e("74456"), a.e("38779"), a.e("87983"), a.e("58286"), a.e("90508"), a.e("7590"), a.e("7620"), a.e("49398"), a.e("41947"), a.e("53466"), a.e("65840"), a.e("43643"), a.e("37766"), a.e("75118"), a.e("18101"), a.e("37220"), a.e("75301"), a.e("42225"), a.e("65892"), a.e("91315"), a.e("80954"), a.e("62856"), a.e("37839"), a.e("29598"), a.e("47423"), a.e("35665")]).then(a.bind(a, "290161")),
                        webpackId: "290161",
                        name: "Overlay"
                    }),
                    Y = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("18824"), a.e("75843")]).then(a.bind(a, "430075")),
                        webpackId: "430075",
                        name: "SuspendedUserSafetyHubPage"
                    }),
                    X = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("19878"), a.e("28296")]).then(a.bind(a, "630107")),
                        webpackId: "630107",
                        name: "QuestsLandingPage"
                    }),
                    q = () => (0, d.jsx)(j, {}),
                    Z = new Set([N.Routes.LOGIN, N.Routes.LOGIN_HANDOFF, N.Routes.INVITE_LOGIN(":inviteCode"), N.Routes.GIFT_CODE_LOGIN(":giftCode"), N.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode")]);

                function Q(e, t) {
                    return t ? e.filter(e => !Z.has(e)) : e
                }
                class J extends n.Component {
                    componentDidMount() {
                        A.default.cleanupDisplaySleep(), O.default.initialize()
                    }
                    componentWillUnmount() {
                        O.default.terminate()
                    }
                    render() {
                        let e;
                        let {
                            isAuthenticated: t,
                            migrationStatus: a,
                            skipsSettingDefaultPageTitle: n
                        } = this.props;
                        return e = a === g.MigrationStatus.IN_PROGRESS ? null : D.IS_APP_COMPATIBLE_BROWSER ? S.isPlatformEmbedded ? (0, d.jsxs)(o.Switch, {
                            children: [(0, d.jsx)(o.Route, {
                                exact: !0,
                                path: N.Routes.INDEX,
                                render: () => (0, d.jsx)(h.default, {})
                            }), (0, d.jsx)(m.default, {
                                exact: !0,
                                path: N.Routes.APPS,
                                component: L
                            }), (0, d.jsx)(o.Route, {
                                path: Q([N.Routes.LOGIN, N.Routes.REGISTER, N.Routes.INVITE(":inviteCode"), N.Routes.INVITE_LOGIN(":inviteCode"), N.Routes.GIFT_CODE(":giftCode"), N.Routes.GIFT_CODE_LOGIN(":giftCode"), N.Routes.RESET], C.CONFERENCE_MODE_ENABLED),
                                component: H
                            }), (0, d.jsx)(m.default, {
                                path: N.Routes.INVITE_PROXY(":channelId"),
                                component: y
                            }), (0, d.jsx)(o.Redirect, {
                                from: N.Routes.INVITE(""),
                                to: N.Routes.LOGIN
                            }), (0, d.jsx)(o.Redirect, {
                                from: N.Routes.GIFT_CODE(""),
                                to: N.Routes.LOGIN
                            }), (0, d.jsx)(o.Route, {
                                render: q
                            })]
                        }) : (0, d.jsxs)(o.Switch, {
                            children: [(0, d.jsx)(m.default, {
                                exact: !0,
                                path: N.Routes.INDEX,
                                render: () => (0, d.jsx)(h.default, {})
                            }), (0, d.jsx)(o.Route, {
                                path: Q([N.Routes.LOGIN, N.Routes.LOGIN_HANDOFF, N.Routes.REGISTER, N.Routes.BILLING_PREFIX, N.Routes.BILLING_PROMOTION_REDEMPTION(":code"), N.Routes.INVITE(":inviteCode"), N.Routes.INVITE_LOGIN(":inviteCode"), N.Routes.GIFT_CODE(":giftCode"), N.Routes.GIFT_CODE_LOGIN(":giftCode"), N.Routes.GUILD_TEMPLATE(":guildTemplateCode"), N.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"), N.Routes.DISABLE_EMAIL_NOTIFICATIONS, N.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, N.Routes.RESET, N.Routes.REPORT, N.Routes.REPORT_SECOND_LOOK], C.CONFERENCE_MODE_ENABLED),
                                component: H
                            }), t ? null : (0, d.jsx)(o.Route, {
                                path: N.Routes.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                                component: H
                            }), t ? null : (0, d.jsx)(o.Route, {
                                path: N.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
                                component: H
                            }), (0, d.jsx)(o.Redirect, {
                                from: N.Routes.INVITE(""),
                                to: N.Routes.LOGIN
                            }), (0, d.jsx)(m.default, {
                                path: N.Routes.INVITE_PROXY(":channelId"),
                                component: y
                            }), (0, d.jsx)(o.Redirect, {
                                from: N.Routes.GIFT_CODE(""),
                                to: N.Routes.LOGIN
                            }), (0, d.jsx)(m.default, {
                                path: N.Routes.QUESTS(":questId"),
                                component: X,
                                impressionName: r.ImpressionNames.QUESTS_LANDING_PAGE,
                                impressionProperties: e => {
                                    let {
                                        computedMatch: t
                                    } = e;
                                    return {
                                        quest_id: t.params.questId
                                    }
                                }
                            }), (0, d.jsx)(m.default, {
                                path: N.Routes.HANDOFF,
                                component: W
                            }), (0, d.jsx)(m.default, {
                                path: N.Routes.MOBILE_WEB_HANDOFF,
                                component: K
                            }), (0, d.jsx)(m.default, {
                                path: N.Routes.XBOX_EDU,
                                component: V
                            }), (0, d.jsx)(m.default, {
                                path: N.Routes.XBOX_PIN,
                                component: G
                            }), (0, d.jsx)(m.default, {
                                path: N.Routes.CONNECTION_LINK(":type"),
                                component: k
                            }), (0, d.jsx)(m.default, {
                                path: N.Routes.CONNECTION_LINK_AUTHORIZE(":type"),
                                component: U
                            }), (0, d.jsx)(m.default, {
                                path: N.Routes.ACTIVATE,
                                component: x
                            }), (0, d.jsx)(m.default, {
                                path: N.Routes.CONNECTIONS(":type"),
                                component: M
                            }), (0, d.jsx)(m.default, {
                                path: N.Routes.DOWNLOAD_QR_CODE_REDIRECT,
                                render: () => {
                                    var e, t, a;
                                    let d = null === (e = R.default.getSuperProperties()) || void 0 === e ? void 0 : e.os,
                                        n = (0, c.parse)((null !== (a = window.location.search) && void 0 !== a ? a : "").substr(1)),
                                        i = null === (t = n.referring_location) || void 0 === t ? void 0 : t.toString();
                                    return ("iOS" === d || "Android" === d) && R.default.track(N.AnalyticEvents.DOWNLOAD_APP, {
                                        platform: d,
                                        ptb: !1,
                                        released: !0,
                                        has_e_mail: "true" === n.has_e_mail,
                                        referring_location: i,
                                        qr_code: !0
                                    }), window.location.href = (0, w.getMobileDownloadLink)(null != i && "" !== i ? i : "qr_code", d), null
                                }
                            }), (0, d.jsx)(m.default, {
                                path: N.Routes.OPEN_APP_FROM_EMAIL,
                                render: () => {
                                    var e, t;
                                    let a = null === (e = R.default.getSuperProperties()) || void 0 === e ? void 0 : e.os,
                                        n = (0, v.getOpenAppFromEmailDestinations)(null !== (t = window.location.search) && void 0 !== t ? t : "");
                                    if ("iOS" !== a && "Android" !== a) return (0, d.jsx)(o.Redirect, {
                                        to: null != n.desktop ? "".concat(n.desktop.pathname).concat(n.desktop.search) : N.Routes.APP
                                    });
                                    {
                                        let e = (0, w.getMobileDownloadLink)("app_open_from_email", a, n.mobile),
                                            t = (0, l.parseDynamicLink)(e);
                                        null != t && R.default.track(N.AnalyticEvents.DEEP_LINK_CLICKED, {
                                            fingerprint: (0, s.maybeExtractId)(t.fingerprint),
                                            attempt_id: t.attemptId,
                                            source: t.utmSource,
                                            destination: null != n.mobile ? n.mobile.toString() : null
                                        }), window.location.href = e
                                    }
                                }
                            }), (0, d.jsx)(o.Redirect, {
                                from: N.Routes.CONNECT_AUTHORIZE,
                                to: {
                                    ...location,
                                    pathname: N.Routes.OAUTH2_AUTHORIZE
                                }
                            }), (0, d.jsx)(o.Route, {
                                path: [N.Routes.OAUTH2_AUTHORIZED, N.Routes.OAUTH2_AUTHORIZE, N.Routes.OAUTH2_ERROR, N.Routes.OAUTH2_WHITELIST_ACCEPT],
                                component: F
                            }), t ? null : (0, d.jsx)(o.Route, {
                                path: [N.Routes.ACCOUNT_STANDING],
                                component: Y
                            }), t ? null : (0, d.jsx)(o.Route, {
                                path: N.Routes.APPLICATION_STORE,
                                component: p.default
                            }), t ? null : (0, d.jsx)(o.Route, {
                                path: [N.Routes.APPLICATION_DIRECTORY_SEARCH, N.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section?"), N.Routes.APPLICATION_DIRECTORY],
                                component: B
                            }), (0, d.jsx)(o.Route, {
                                render: q
                            })]
                        }) : (0, d.jsx)(o.Switch, {
                            children: (0, d.jsx)(m.default, {
                                component: P
                            })
                        }), (0, d.jsxs)(E.default, {
                            skipsSettingDefaultPageTitle: n,
                            children: [e, S.isPlatformEmbedded && (a === g.MigrationStatus.NOT_STARTED || a === g.MigrationStatus.IN_PROGRESS) && !0 !== b.Storage.get(f.DOMAIN_MIGRATION_SUCCESS_KEY) ? (0, d.jsx)(I.default, {}) : null]
                        })
                    }
                }
                t.default = u.default.connectStores([T.default, g.default], () => ({
                    isAuthenticated: T.default.isAuthenticated(),
                    migrationStatus: g.default.getMigrationStatus()
                }), {
                    forwardRef: !0
                })(function(e) {
                    let t = function() {
                        let {
                            pathname: e
                        } = (0, o.useLocation)();
                        return null != (0, i.matchPath)(e, {
                            path: N.Routes.APPLICATION_DIRECTORY
                        })
                    }();
                    return (0, d.jsx)(J, {
                        ...e,
                        skipsSettingDefaultPageTitle: t
                    })
                })
            },
            650204: function(e, t, a) {
                "use strict";
                a.r(t), a("177593");
                var d, n, c, i, o, r = a("735250");
                a("92138"), a("470079");
                var f = a("202226"),
                    l = a("512722"),
                    s = a.n(l),
                    u = a("832037"),
                    b = a("464253"),
                    h = a("485359"),
                    p = a("395727"),
                    m = a("471638"),
                    _ = a("585275"),
                    E = a("960048"),
                    g = a("63063"),
                    I = a("240849"),
                    O = a("998502"),
                    T = a("513566"),
                    R = a("358085"),
                    w = a("703656"),
                    v = a("284737"),
                    S = a("473159"),
                    A = a("846519"),
                    N = a("579806"),
                    C = a("896361"),
                    D = a("892254");
                a("442913");
                var P = a("587213"),
                    L = a("44163"),
                    y = a("710845");
                let M = 5 * a("70956").default.Millis.MINUTE,
                    k = document.getElementById("app-mount");
                s()(null != k, "Could not find app-mount"), k.className = __OVERLAY__ ? "" : P.appMount;
                let U = (0, f.createRoot)(k),
                    x = e => U.render((0, r.jsx)(D.default, {
                        children: (0, r.jsx)(C.default, {
                            children: (0, r.jsx)(e, {})
                        })
                    }));
                if (null != N.default) {
                    null === (d = N.default.setUncaughtExceptionHandler) || void 0 === d || d.call(N.default, (e, t) => {
                        setImmediate(() => {
                            throw E.default.captureCrash(e), e
                        })
                    });
                    let e = null === (n = (c = N.default.remoteApp).getVersion) || void 0 === n ? void 0 : n.call(c),
                        t = null === (i = (o = N.default.remoteApp).getBuildNumber) || void 0 === i ? void 0 : i.call(o),
                        a = {};
                    null != N.default.remoteApp.getModuleVersions && (a = N.default.remoteApp.getModuleVersions()), E.default.setExtra({
                        hostVersion: e,
                        moduleVersions: a
                    }), E.default.setTags({
                        nativeBuildNumber: null == t ? void 0 : t.toString()
                    });
                    let r = Object.keys(a).filter(e => null != a[e]).map(e => "".concat(e, ": ").concat(a[e])).join(", ");
                    new y.default().log("[NATIVE INFO] host ".concat(e, ", modules: ").concat(r, ", build: ").concat(t)), O.default.setBackgroundThrottling(!1), O.default.initializeExitHook()
                }
                if ((0, S.setupWindow)(window), __OVERLAY__) x(u.default.Overlay);
                else if (null != window.require && null == window.DiscordNative) x(u.default.OutdatedClient);
                else {
                    if (document.addEventListener("scroll", e => e.preventDefault()), R.isPlatformEmbedded) {
                        window.onbeforeunload = () => O.default.beforeUnload(), O.default.on("HELP_OPEN", () => window.open(g.default.getCommunityURL()));
                        let e = new A.DelayedCall(M, () => O.default.purgeMemory());
                        O.default.on("MAIN_WINDOW_BLUR", () => {
                            e.delay(), O.default.setFocused(!1), (0, v.focus)(window, !1)
                        }), O.default.on("MAIN_WINDOW_FOCUS", () => {
                            e.cancel(), O.default.setFocused(!0), (0, v.focus)(window, !0)
                        }), O.default.on("MAIN_WINDOW_PATH", (e, t) => (0, w.transitionTo)(t)), O.default.on("MAIN_WINDOW_HIDDEN", () => {
                            (0, v.hidden)(window)
                        })
                    }
                    p.default.initialize(), b.default.init(), _.default.init(), L.default.init(), h.default.initialize(), I.default.initialize(), T.default.initialize(), m.initialize(), x(u.default.App)
                }
            },
            832037: function(e, t, a) {
                "use strict";
                a.r(t);
                var d = a("735250");
                a("470079");
                var n = a("481060"),
                    c = a("204623"),
                    i = a("155221");
                t.default = {
                    App: () => (0, d.jsx)(n.DnDProvider, {
                        children: (0, d.jsx)(i.default, {})
                    }),
                    Overlay: () => (0, d.jsx)(n.DnDProvider, {
                        children: (0, d.jsx)(i.Overlay, {})
                    }),
                    OutdatedClient: c.default
                }
            },
            44163: function(e, t, a) {
                "use strict";
                a.r(t);
                var d = a("585483"),
                    n = a("5967"),
                    c = a("933513"),
                    i = a("981631");
                t.default = {
                    init() {
                        document.addEventListener("paste", e => {
                            !(0, c.default)((0, n.eventOwnerDocument)(e)) && d.ComponentDispatch.dispatchToLastSubscribed(i.ComponentActions.GLOBAL_CLIPBOARD_PASTE, {
                                event: e
                            })
                        })
                    }
                }
            },
            933513: function(e, t, a) {
                "use strict";

                function d(e) {
                    let t = null == e ? void 0 : e.activeElement;
                    return ["INPUT", "TEXTAREA"].includes(null == t ? void 0 : t.tagName) || (null == t ? void 0 : t.isContentEditable)
                }
                a.r(t), a.d(t, {
                    default: function() {
                        return d
                    }
                })
            },
            204623: function(e, t, a) {
                "use strict";
                a.r(t), a.d(t, {
                    default: function() {
                        return R
                    }
                }), a("47120");
                var d = a("735250"),
                    n = a("470079"),
                    c = a("525654"),
                    i = a.n(c),
                    o = a("445131"),
                    r = a("442837"),
                    f = a("946188"),
                    l = a("481060"),
                    s = a("596454"),
                    u = a("451478"),
                    b = a("586576"),
                    h = a("176354"),
                    p = a("63063"),
                    m = a("358085"),
                    _ = a("792125"),
                    E = a("998502"),
                    g = a("151851"),
                    I = a("981631"),
                    O = a("689938");
                let T = r.default.connectStores([u.default], () => ({
                    focused: u.default.isFocused()
                }))(g.default);
                class R extends n.PureComponent {
                    getPlatform() {
                        var e;
                        let t = null === (e = i().os) || void 0 === e ? void 0 : e.family;
                        return null != t && /^win/i.test(t) ? m.PlatformTypes.WINDOWS : null != t && /darwin|os x/i.test(t) ? m.PlatformTypes.OSX : m.PlatformTypes.LINUX
                    }
                    componentDidMount() {
                        ! function() {
                            let e = window.require("electron").remote.getCurrentWindow();
                            E.default.minimize = () => e.minimize(), E.default.maximize = () => {
                                e.isMaximized() ? e.unmaximize() : e.maximize()
                            }, E.default.close = () => e.close()
                        }()
                    }
                    render() {
                        let e = (0, d.jsx)("div", {
                                children: (0, d.jsxs)("p", {
                                    children: [O.default.Messages.VERY_OUT_OF_DATE_DESCRIPTION, " ", (0, d.jsx)(s.default, {
                                        src: h.default.getURL(f.default.convert.fromCodePoint("1f44c")),
                                        emojiName: ":ok_hand:",
                                        animated: !1
                                    })]
                                })
                            }),
                            t = (0, d.jsx)(l.Button, {
                                size: l.ButtonSizes.LARGE,
                                onClick: this.handleDownload,
                                children: O.default.Messages.DOWNLOAD
                            });
                        return (0, d.jsxs)(n.Fragment, {
                            children: [(0, d.jsx)(o.Helmet, {
                                children: (0, d.jsx)("html", {
                                    className: (0, _.getThemeClass)(I.ThemeTypes.DARK)
                                })
                            }), (0, d.jsx)(T, {
                                type: this.getPlatform()
                            }), (0, d.jsx)(b.default, {
                                title: O.default.Messages.UNSUPPORTED_BROWSER_TITLE,
                                note: e,
                                action: t
                            })]
                        })
                    }
                    constructor(...e) {
                        var t, a, d;
                        super(...e), t = this, a = "handleDownload", d = () => {
                            window.open(this.getPlatform() === m.PlatformTypes.WINDOWS ? p.default.getArticleURL(I.HelpdeskArticles.CORRUPT_INSTALLATION) : I.MarketingURLs.DOWNLOAD)
                        }, a in t ? Object.defineProperty(t, a, {
                            value: d,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[a] = d
                    }
                }
            },
            471638: function(e, t, a) {
                "use strict";
                a.r(t), a.d(t, {
                    initialize: function() {
                        return d
                    }
                }), a("411104"), a("47120"), a("259443"), a("643950"), a("46973"), a("141038"), a("379649"), a("570140"), a("749210"), a("287734"), a("872810"), a("579806"), a("569545"), a("703656"), a("199902"), a("592125"), a("131951"), a("944486"), a("979651"), a("374023"), a("848479"), a("998502"), a("788983"), a("981631");
                let d = () => {}
            },
            286035: function(e, t, a) {
                "use strict";
                a.r(t), a.d(t, {
                    failMigration: function() {
                        return c
                    },
                    finishMigration: function() {
                        return i
                    },
                    migrate: function() {
                        return n
                    }
                });
                var d = a("570140");

                function n() {
                    d.default.wait(() => d.default.dispatch({
                        type: "DOMAIN_MIGRATION_START"
                    }))
                }

                function c() {
                    d.default.dispatch({
                        type: "DOMAIN_MIGRATION_FAILURE"
                    })
                }

                function i() {
                    window.location.reload()
                }
            },
            554608: function(e, t, a) {
                "use strict";
                a.r(t), a.d(t, {
                    MigrationStatus: function() {
                        return o
                    }
                });
                var d, n, c, i, o, r, f = a("442837"),
                    l = a("570140");
                (d = o || (o = {}))[d.NOT_STARTED = 0] = "NOT_STARTED", d[d.IN_PROGRESS = 1] = "IN_PROGRESS", d[d.FAILED = 2] = "FAILED", d[d.SKIPPED = 3] = "SKIPPED";
                let s = 0;
                class u extends(r = f.default.Store) {
                    getMigrationStatus() {
                        return s
                    }
                }
                i = "DomainMigrationStore", (c = "displayName") in(n = u) ? Object.defineProperty(n, c, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[c] = i, t.default = new u(l.default, {
                    DOMAIN_MIGRATION_START: function() {
                        s = 1
                    },
                    DOMAIN_MIGRATION_FAILURE: function() {
                        s = 2
                    },
                    DOMAIN_MIGRATION_SKIP: function() {
                        s = 3
                    }
                })
            },
            83949: function(e, t, a) {
                "use strict";
                a.r(t), a.d(t, {
                    default: function() {
                        return u
                    }
                });
                var d = a("470079"),
                    n = a("719711"),
                    c = a("433517"),
                    i = a("579806"),
                    o = a("626135"),
                    r = a("998502"),
                    f = a("286035"),
                    l = a("981631");

                function s(e) {
                    var t;
                    return null == e ? void 0 : null === (t = e._state) || void 0 === t ? void 0 : t.lastTestTimestamp
                }

                function u() {
                    return d.useEffect(() => {
                        window.location.origin === window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN && !0 !== c.Storage.get(n.DOMAIN_MIGRATION_SUCCESS_KEY) && r.default.supportsFeature(l.NativeFeatures.USER_DATA_CACHE) && (f.migrate(), i.default.userDataCache.getCached().then(e => {
                            if (null == e) {
                                f.failMigration(), o.default.track(l.AnalyticEvents.DOMAIN_MIGRATED, {
                                    success: !1,
                                    has_data: !1
                                }, {
                                    flush: !0
                                });
                                return
                            }
                            let t = Object.keys(e),
                                a = 0 !== t.length,
                                d = null != e.token,
                                r = null == e.RTCRegionStore ? null : JSON.parse(e.RTCRegionStore),
                                u = null == r || null == s(r) || s(r) <= s(c.Storage.get("RTCRegionStore"));
                            a && d && !u && (c.Storage.clear(), t.forEach(t => {
                                let a = e[t];
                                try {
                                    c.Storage.set(t, JSON.parse(a))
                                } catch (e) {}
                            })), o.default.track(l.AnalyticEvents.DOMAIN_MIGRATED, {
                                success: !0,
                                current_is_newer: u,
                                has_data: a
                            }, {
                                flush: !0
                            }), c.Storage.set(n.DOMAIN_MIGRATION_SUCCESS_KEY, !0), i.default.userDataCache.deleteCache(), f.finishMigration()
                        }))
                    }, []), null
                }
            },
            585275: function(e, t, a) {
                "use strict";
                let d;
                a.r(t), a("242167"), a("970173"), a("520712"), a("268111"), a("941497"), a("32026"), a("480839"), a("744285"), a("492257"), a("873817"), a("411104"), a("773603");
                var n = a("512722"),
                    c = a.n(n),
                    i = a("392711"),
                    o = a.n(i),
                    r = a("544891"),
                    f = a("992774"),
                    l = a("649754"),
                    s = a("376398"),
                    u = a("846519"),
                    b = a("570140"),
                    h = a("710845"),
                    p = a("314897"),
                    m = a("358085"),
                    _ = a("998502"),
                    E = a("569545"),
                    g = a("70722"),
                    I = a("981631"),
                    O = a("65154");
                let T = {},
                    R = new u.Timeout,
                    w = !1,
                    v = window.document.createElement("canvas");
                v.width = 512, v.height = 288;
                let S = v.getContext("2d");

                function A() {
                    R.stop(), null != d && (l.default.removeSink(d, T), d = null)
                }
                let N = o().debounce((e, t, a, d) => {
                    C(e, (0, E.encodeStreamKey)({
                        streamType: null != t ? g.StreamTypes.GUILD : g.StreamTypes.CALL,
                        guildId: t,
                        channelId: a,
                        ownerId: d
                    }))
                }, 500);
                async function C(e, t) {
                    if (d !== e) return;
                    let a = () => C(e, t);
                    if (!w) try {
                        let a = await
                        function(e, t) {
                            let a = 0;
                            return ((0, m.isPlatformEmbedded) ? function(e, t) {
                                let a = (0, f.getVoiceEngine)(),
                                    n = (null == a ? void 0 : a.getNextVideoOutputFrame) != null;
                                return new Promise((c, i) => {
                                    let o = e => {
                                        try {
                                            null != e && t(e) && c(e)
                                        } catch (e) {
                                            i(e)
                                        }
                                    };
                                    n ? a.getNextVideoOutputFrame(e).then(o, t => {
                                        if (d === e) throw t
                                    }) : l.default.addSink(e, T, o)
                                }).finally(() => {
                                    !n && l.default.removeSink(e, T)
                                })
                            } : function(e, t) {
                                let a = (0, s.getVideoStream)(e);
                                if (null == a) return Promise.resolve(new ImageData(0, 0));
                                let {
                                    width: d,
                                    height: n
                                } = a.getVideoTracks()[0].getSettings(), c = document.createElement("video"), i = document.createElement("canvas");
                                c.width = i.width = null != d ? d : 512, c.height = i.height = null != n ? n : 288, c.srcObject = a, c.play();
                                let o = i.getContext("2d");
                                return new Promise((e, a) => {
                                    c.ontimeupdate = () => {
                                        null == o || o.drawImage(c, 0, 0, i.width, i.height);
                                        let d = null == o ? void 0 : o.getImageData(0, 0, i.width, i.height);
                                        try {
                                            null != d && t(d) && e(d)
                                        } catch (e) {
                                            a(e)
                                        }
                                    }
                                }).finally(() => {
                                    c.ontimeupdate = null, c.removeAttribute("srcObject"), c.load()
                                })
                            })(e, e => {
                                if (new Uint32Array(e.data.buffer).some(e => 0 !== e)) return !0;
                                if (++a > t) throw Error("Timed out awaiting non-black frame after ".concat(t, " frames"));
                                return !1
                            })
                        }(e, 60);
                        await
                        function(e) {
                            let t = 512 / e.width,
                                a = Math.min(t, 288 / e.height),
                                d = e.width * a,
                                n = e.height * a;
                            v.width = d, v.height = n;
                            let c = window.document.createElement("canvas"),
                                i = c.getContext("2d");
                            c.width = e.width, c.height = e.height;
                            let o = new ImageData(e.data, e.width, e.height);
                            return null == i || i.putImageData(o, 0, 0), new Promise(t => {
                                null == S || S.drawImage(c, 0, 0, e.width, e.height, 0, 0, d, n), t()
                            })
                        }(a);
                        let n = v.toDataURL("image/jpeg");
                        if (b.default.dispatch({
                                type: "STREAM_PREVIEW_FETCH_SUCCESS",
                                streamKey: t,
                                previewURL: n
                            }), m.isPlatformEmbedded) {
                            let e = p.default.getToken();
                            c()(null != e, "Auth token was null while sending screenshot."), await _.default.makeChunkedRequest(I.Endpoints.STREAM_PREVIEW(t), {
                                thumbnail: n
                            }, {
                                method: "POST",
                                token: e
                            })
                        } else await r.HTTP.post({
                            url: I.Endpoints.STREAM_PREVIEW(t),
                            body: {
                                thumbnail: n
                            },
                            oldFormErrors: !0
                        })
                    } catch (t) {
                        new h.default("ApplicationStreamPreviewUploadManager").error("Failed to post stream preview", t), d === e && R.start(6e4, a);
                        return
                    }
                    d === e && (w ? R.start(6e4, a) : R.start(3e5, a))
                }
                t.default = {
                    init() {
                        b.default.subscribe("CONNECTION_OPEN", A), b.default.subscribe("LOGOUT", A), b.default.subscribe("STREAM_DELETE", A), b.default.subscribe("RTC_CONNECTION_VIDEO", e => {
                            let {
                                guildId: t,
                                channelId: a,
                                userId: n,
                                streamId: c,
                                context: i
                            } = e;
                            !(null == c || i !== O.MediaEngineContextTypes.STREAM || n !== p.default.getId() || __OVERLAY__) && (A(), d = c, N(c, t, a, n))
                        }), b.default.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", e => {
                            let {
                                videoState: t
                            } = e;
                            w = t === I.MediaEngineVideoStates.PAUSED || !1
                        })
                    }
                }
            },
            464253: function(e, t, a) {
                "use strict";
                a.r(t), a("411104");
                var d = a("570140"),
                    n = a("846027"),
                    c = a("872810"),
                    i = a("710845"),
                    o = a("252759"),
                    r = a("361291"),
                    f = a("199902"),
                    l = a("314897"),
                    s = a("569545"),
                    u = a("803647"),
                    b = a("981631"),
                    h = a("65154");

                function p(e, t, a) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = a, e
                }
                class m {
                    _onGameDetectionUpdate(e) {
                        this.applications = e.map(e => {
                            var t, a;
                            return {
                                applicationId: null !== (t = e.id) && void 0 !== t ? t : null,
                                processId: e.pid,
                                processPath: e.pidPath,
                                windowHandle: null !== (a = e.windowHandle) && void 0 !== a ? a : null,
                                executableName: e.exeName
                            }
                        }), "verbatim-source" !== this.mode && this.director.onDetectionUpdate(this.applications)
                    }
                    _onStreamApplication(e, t) {
                        this.mode = "application", this.streamKey = e, this.director.onStreamBegin(this.applications, t)
                    }
                    _onStreamDirectSource(e, t, a, d) {
                        this.mode = "verbatim-source", this.streamKey = e, this._onDirectorAction({
                            type: o.StreamDirectorActionType.STREAM,
                            sourceId: t,
                            audioSourceId: a,
                            sound: d
                        })
                    }
                    _onStreamEnd(e) {
                        if (this.streamKey === e) switch (this.streamKey = null, this.mode) {
                            case "application":
                                this.director.onStreamEnd();
                                break;
                            case "verbatim-source":
                                this._onDirectorAction({
                                    type: o.StreamDirectorActionType.STOP
                                });
                                break;
                            default:
                                var t;
                                throw Error("unknown streaming mode: ".concat(null !== (t = this.mode) && void 0 !== t ? t : "(none)"))
                        }
                    }
                    _onStreamKilled(e) {
                        if (this.streamKey === e) switch (this.streamKey = null, this.mode) {
                            case "application":
                                this.director.onStreamKilled();
                                break;
                            case "verbatim-source":
                                break;
                            default:
                                var t;
                                throw Error("unknown streaming mode: ".concat(null !== (t = this.mode) && void 0 !== t ? t : "(none)"))
                        }
                    }
                    _onDirectorAction(e) {
                        let t = f.default.getCurrentUserActiveStream(),
                            a = r.default.getState();
                        switch (e.type) {
                            case o.StreamDirectorActionType.STREAM:
                                if (null != t && (0, c.setStreamPaused)(t, !1), e.sourceId.startsWith("camera") && null != e.audioSourceId) {
                                    let t = e.sourceId.split(":")[1];
                                    n.default.setGoLiveSource({
                                        cameraSettings: {
                                            videoDeviceGuid: t,
                                            audioDeviceGuid: e.audioSourceId
                                        },
                                        qualityOptions: {
                                            preset: a.preset,
                                            resolution: a.resolution,
                                            frameRate: a.fps
                                        },
                                        context: h.MediaEngineContextTypes.STREAM
                                    })
                                } else {
                                    var d;
                                    n.default.setGoLiveSource({
                                        desktopSettings: {
                                            sourceId: e.sourceId,
                                            sound: null === (d = e.sound) || void 0 === d || d
                                        },
                                        qualityOptions: {
                                            preset: a.preset,
                                            resolution: a.resolution,
                                            frameRate: a.fps
                                        },
                                        context: h.MediaEngineContextTypes.STREAM
                                    })
                                }
                                break;
                            case o.StreamDirectorActionType.PAUSE:
                                null != t && (0, c.setStreamPaused)(t, !0);
                                break;
                            case o.StreamDirectorActionType.STOP:
                                null != t && (0, u.default)(t);
                                break;
                            default:
                                throw Error("unhandled stream action: ".concat(e.type))
                        }
                    }
                    _onCapturePaused(e) {
                        let t = f.default.getCurrentUserActiveStream();
                        null != t && (0, c.setStreamPaused)(t, e)
                    }
                    _onCaptureEnded() {
                        switch (this.mode) {
                            case "application":
                                this._onCapturePaused(!0);
                                break;
                            case "verbatim-source":
                                null != this.streamKey && this._onStreamEnd(this.streamKey);
                                break;
                            default:
                                var e;
                                throw Error("unknown streaming mode: ".concat(null !== (e = this.mode) && void 0 !== e ? e : "(none)"))
                        }
                    }
                    constructor() {
                        p(this, "director", void 0), p(this, "applications", void 0), p(this, "streamKey", void 0), p(this, "mode", void 0), this.mode = null, this.applications = [], this.director = new o.StreamDirector(e => this._onDirectorAction(e)), d.default.subscribe("STREAM_START", e => {
                            let {
                                streamType: t,
                                guildId: a,
                                channelId: d,
                                pid: n,
                                sourceId: c,
                                audioSourceId: o,
                                sound: r
                            } = e, f = l.default.getId(), u = (0, s.encodeStreamKey)({
                                streamType: t,
                                guildId: a,
                                channelId: d,
                                ownerId: f
                            });
                            null == n != (null == c) ? (null != n && this._onStreamApplication(u, n), null != c && this._onStreamDirectSource(u, c, o, r)) : new i.default("ApplicationSwitchingManager").warn("invalid start_stream: both application + display modes were specified (pid: ".concat(n, ", source-id: ").concat(c, ")"))
                        }), d.default.subscribe("STREAM_DELETE", e => {
                            let {
                                streamKey: t
                            } = e;
                            this._onStreamKilled(t)
                        }), d.default.subscribe("STREAM_STOP", e => {
                            let {
                                streamKey: t
                            } = e;
                            this._onStreamEnd(t)
                        }), d.default.subscribe("RUNNING_GAMES_CHANGE", e => {
                            let {
                                games: t
                            } = e;
                            this._onGameDetectionUpdate(t)
                        }), d.default.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", e => {
                            let {
                                videoState: t,
                                context: a
                            } = e;
                            a === h.MediaEngineContextTypes.STREAM && this._onCapturePaused(t === b.MediaEngineVideoStates.PAUSED)
                        }), d.default.subscribe("MEDIA_ENGINE_SET_GO_LIVE_SOURCE", e => {
                            let {
                                settings: t
                            } = e;
                            (null == t ? void 0 : t.context) === h.MediaEngineContextTypes.STREAM && (null == t ? void 0 : t.desktopSettings) == null && (null == t ? void 0 : t.cameraSettings) == null && this._onCaptureEnded()
                        })
                    }
                }
                t.default = {
                    instance: null,
                    init() {
                        null == this.instance && (this.instance = new m)
                    }
                }
            },
            137412: function(e, t, a) {
                "use strict";
                a.r(t), a("47120");
                var d = a("213919"),
                    n = a("570140"),
                    c = a("317770"),
                    i = a("358085");
                class o extends c.default {
                    _initialize() {
                        n.default.subscribe("CONNECTION_OPEN", this.handleConnectionOpen)
                    }
                    _terminate() {
                        n.default.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen)
                    }
                    constructor(...e) {
                        var t, a, n;
                        super(...e), t = this, a = "handleConnectionOpen", n = e => {
                            ((0, i.isWindows)() || (0, i.isMac)()) && d.encryptAndStoreTokens()
                        }, a in t ? Object.defineProperty(t, a, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[a] = n
                    }
                }
                t.default = new o
            },
            311163: function(e, t, a) {
                "use strict";
                a.r(t), a.d(t, {
                    default: function() {
                        return n
                    }
                });
                var d = a("272423");

                function n(e) {
                    let t = (0, d.coerceChannelRoute)(e);
                    if (null != t) return [t.params.guildId, t.params.channelId];
                    let a = (0, d.coerceGuildsRoute)(e);
                    if (null != a) {
                        var n, c;
                        return [null === (n = a.params) || void 0 === n ? void 0 : n.guildId, null === (c = a.params) || void 0 === c ? void 0 : c.channelId]
                    }
                    return [void 0, void 0]
                }
            },
            485359: function(e, t, a) {
                "use strict";
                a.r(t), a("47120");
                var d = a("735250");
                a("470079");
                var n = a("525654"),
                    c = a.n(n),
                    i = a("481060"),
                    o = a("570140"),
                    r = a("468026"),
                    f = a("317770"),
                    l = a("63063"),
                    s = a("981631"),
                    u = a("689938");
                class b extends f.default {
                    _initialize() {
                        o.default.subscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission)
                    }
                    _terminate() {
                        o.default.unsubscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission)
                    }
                    constructor(...e) {
                        var t, a, n;
                        super(...e), t = this, a = "handlePermission", n = e => {
                            let {
                                kind: t,
                                granted: a
                            } = e, n = "Firefox" === c().name ? s.HelpdeskArticles.ENABLE_MIC_FIREFOX : s.HelpdeskArticles.ENABLE_MIC_CHROME;
                            if (!a) {
                                let e = "audio" !== t;
                                (0, i.openModal)(t => (0, d.jsx)(r.default, {
                                    title: e ? u.default.Messages.NO_CAMERA_TITLE : u.default.Messages.NO_MIC_TITLE,
                                    body: e ? u.default.Messages.NO_CAMERA_BODY : u.default.Messages.NO_MIC_BODY,
                                    onConfirm: () => window.open(l.default.getArticleURL(n), "_blank"),
                                    confirmText: u.default.Messages.HELP_DESK,
                                    ...t
                                }))
                            }
                        }, a in t ? Object.defineProperty(t, a, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[a] = n
                    }
                }
                t.default = new b
            },
            905423: function(e, t, a) {
                "use strict";
                a.r(t);
                var d = a("266067"),
                    n = a("652874"),
                    c = a("981631");

                function i(e) {
                    let t = (0, d.matchPath)(null != e ? e : "", {
                        path: c.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                    });
                    if (null != t) {
                        let {
                            guildId: e,
                            channelId: a
                        } = t.params;
                        return {
                            guildId: e === c.ME ? null : e,
                            channelId: null != a ? a : null
                        }
                    }
                    let a = (0, d.matchPath)(null != e ? e : "", {
                        path: c.Routes.GUILD_BOOSTING_MARKETING(":guildId")
                    });
                    return null != a ? {
                        guildId: a.params.guildId,
                        channelId: null
                    } : {
                        guildId: null,
                        channelId: null
                    }
                }
                t.default = (0, n.default)(e => ({
                    path: null,
                    basePath: "/",
                    guildId: null,
                    channelId: null,
                    updatePath(t) {
                        let {
                            guildId: a,
                            channelId: d
                        } = i(t);
                        e({
                            path: t,
                            guildId: a,
                            channelId: d
                        })
                    },
                    resetPath(t) {
                        let {
                            guildId: a,
                            channelId: d
                        } = i(t);
                        e({
                            path: null,
                            guildId: a,
                            channelId: d,
                            basePath: t
                        })
                    }
                }))
            },
            304445: function(e, t, a) {
                "use strict";
                a.r(t), a("47120"), a("411104");
                var d = a("540571"),
                    n = a("266067"),
                    c = a("38618"),
                    i = a("57132"),
                    o = a("528097"),
                    r = a("777639"),
                    f = a("311163"),
                    l = a("272423"),
                    s = a("781157"),
                    u = a("700615"),
                    b = a("905423"),
                    h = a("703656"),
                    p = a("981631");

                function m(e, t, a) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = a, e
                }
                t.default = new class e {
                    initialize() {
                        this.cleanup(), this.unlistenHistory = (0, h.getHistory)().listen(this.handleRouteChange);
                        let {
                            pathname: e
                        } = (0, h.getHistory)().location;
                        b.default.getState().resetPath(e), this.unlistenKeyboardChange = b.default.subscribe(this.handleKeybindRouteChange), c.default.addChangeListener(this.handleConnectionChange)
                    }
                    convertRouteToNavigation(e, t) {
                        var a, d, c;
                        let {
                            pathname: b
                        } = e, h = (0, r.getRootNavigationRef)(), m = (0, i.isInMainTabsExperiment)(), {
                            showYouBar: _
                        } = (0, o.getNavYouBarExperiment)({
                            location: "convertRouteToNavigation"
                        });
                        if (null == h || !h.isReady()) return;
                        let E = e.navigationReplace,
                            g = null !== (a = e.useScreen) && void 0 !== a && a;
                        if (m && (0, s.isSplitMessagesTab)() && b === p.Routes.ME) {
                            (0, l.navigateToRootTab)({
                                screen: "messages",
                                resetRoot: E
                            });
                            return
                        }
                        if (m && b === p.Routes.NOTIFICATIONS) {
                            (0, l.navigateToRootTab)({
                                screen: "notifications",
                                resetRoot: E
                            });
                            return
                        }
                        if (b.startsWith("/channels/")) {
                            let e = (0, n.matchPath)(b, {
                                    path: p.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                                }),
                                t = (0, n.matchPath)(b, {
                                    path: "".concat(p.Routes.CHANNEL(":guildId", ":channelId?")).concat(p.Routes.VOICE_CHAT_CHANNEL_PARTIAL(":voiceGuildId", ":voiceChannelId", ":voiceMessageId?"))
                                });
                            if (!m) {
                                let e = h.getRootState();
                                (null == e ? void 0 : null === (c = e.routes) || void 0 === c ? void 0 : null === (d = c[0]) || void 0 === d ? void 0 : d.name) !== "panels" && (0, l.resetToPanelsUI)();
                                return
                            }
                            if (null != t) {
                                let {
                                    voiceGuildId: e,
                                    voiceChannelId: a,
                                    voiceMessageId: d
                                } = t.params;
                                (0, u.isOldVoiceUIEnabled)() && (0, l.navigateToChannel)({
                                    channelId: a,
                                    guildId: e,
                                    messageId: d,
                                    replaceChannelAndFixRoot: E,
                                    useScreen: g
                                });
                                return
                            }
                            if (null != e) {
                                let {
                                    channelId: t,
                                    guildId: a,
                                    messageId: d
                                } = e.params;
                                if (!(0, s.isSplitMessagesTab)() && !_) {
                                    (0, l.navigateToRootTab)({
                                        screen: "guilds",
                                        guildId: a,
                                        resetRoot: E
                                    });
                                    return
                                }
                                if ((0, s.isOnNewPanels)()) {
                                    let [e, d] = (0, f.default)(h.getCurrentRoute());
                                    if (e === a && d === t) return
                                }
                                null == t || (0, s.shouldHandleNewPanelsRoute)(a) && !1 !== E ? a !== p.ME || _ ? (0, l.navigateToRootTab)({
                                    screen: "guilds",
                                    guildId: a,
                                    channelId: (0, s.isOnNewPanels)() ? t : void 0,
                                    resetRoot: E
                                }) : (0, l.navigateToRootTab)({
                                    screen: "messages",
                                    resetRoot: E
                                }) : null != a && (0, l.navigateToChannel)({
                                    channelId: t,
                                    guildId: a,
                                    messageId: d,
                                    replaceChannelAndFixRoot: E,
                                    useScreen: g
                                })
                            }
                            return
                        }
                        if (b.startsWith("/member-verification/")) {
                            let e = (0, n.matchPath)(b, {
                                path: p.Routes.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?")
                            });
                            null != e && (0, l.navigateToMemberVerification)(e.params.guildId, e.params.inviteCode);
                            return
                        }
                        if (b.startsWith("/login") || b.startsWith("/register")) {
                            (0, l.resetToAuthRoute)();
                            return
                        }
                        if (b.startsWith("/account-standing")) {
                            h.navigate({
                                name: "account-standing",
                                params: void 0
                            });
                            return
                        }
                        m && (0, l.navigateToRootTab)({
                            screen: "messages",
                            resetRoot: E
                        })
                    }
                    executeRouteRewrites(e, t) {
                        if (this.routeChangeCount += 1, this.routeChangeCount < 10)
                            for (let a of this.rewrites) {
                                let n = (0, h.getHistory)().location.pathname,
                                    c = a(e, t);
                                if (null != c) return (0, d.addBreadcrumb)({
                                    message: "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                                    data: {
                                        replacePath: c.path,
                                        previousPath: n
                                    }
                                }), (0, h.replaceWith)(c.path, c.state), !0
                            } else throw Error("RouteManager: Something has gone horribly wrong with rewrites");
                        return !1
                    }
                    cleanup() {
                        var e, t;
                        null === (e = this.unlistenHistory) || void 0 === e || e.call(this), this.unlistenHistory = void 0, null === (t = this.unlistenKeyboardChange) || void 0 === t || t.call(this), this.unlistenKeyboardChange = void 0, c.default.removeChangeListener(this.handleConnectionChange)
                    }
                    addRouteChangeListener(e) {
                        return null != this.unlistenHistory && e((0, h.getHistory)().location, "REPLACE"), this.listeners.add(e), () => this.removeRouteChangeListener(e)
                    }
                    addRouteRewriter(e) {
                        if (null != this.unlistenHistory) {
                            let t = e((0, h.getHistory)().location, (0, h.getHistory)().action);
                            null != t && (0, h.replaceWith)(t.path, t.state)
                        }
                        return this.rewrites.add(e), () => this.removeRouteRewriter(e)
                    }
                    removeRouteChangeListener(e) {
                        this.listeners.delete(e)
                    }
                    removeRouteRewriter(e) {
                        this.rewrites.delete(e)
                    }
                    getHistory() {
                        return (0, h.getHistory)()
                    }
                    constructor() {
                        m(this, "unlistenHistory", void 0), m(this, "unlistenKeyboardChange", void 0), m(this, "rewrites", new Set), m(this, "listeners", new Set), m(this, "routeChangeCount", 0), m(this, "timer", -1), m(this, "connected", !1), m(this, "handleConnectionChange", () => {
                            let e = c.default.isConnected(),
                                t = e && !this.connected;
                            this.connected = e, t && (this.routeChangeCount = 0, this.executeRouteRewrites((0, h.getHistory)().location, "REPLACE"))
                        }), m(this, "handleRouteChange", (e, t) => {
                            if (this.executeRouteRewrites(e, t)) return;
                            let a = b.default.getState();
                            for (let d of (a.basePath !== e.pathname && a.resetPath(e.pathname), this.listeners)) try {
                                d(e, t)
                            } catch (e) {
                                console.warn("RouteManager.listen: A route listener has caused an error", e.message)
                            }
                            this.convertRouteToNavigation(e, t), this.routeChangeCount = 0
                        }), m(this, "handleKeybindRouteChange", e => {
                            let {
                                path: t
                            } = e;
                            null != t ? (clearTimeout(this.timer), this.timer = setTimeout(this.flushRoute, 200)) : null == t && clearTimeout(this.timer)
                        }), m(this, "flushRoute", () => {
                            clearTimeout(this.timer);
                            let e = b.default.getState();
                            null != e.path && (0, h.transitionTo)(e.path)
                        })
                    }
                }
            },
            896361: function(e, t, a) {
                "use strict";
                a.r(t), a.d(t, {
                    default: function() {
                        return f
                    }
                });
                var d = a("735250"),
                    n = a("470079"),
                    c = a("445131"),
                    i = a("613828"),
                    o = a("304445"),
                    r = a("703656");

                function f(e) {
                    let {
                        children: t
                    } = e;
                    return n.useEffect(() => (o.default.initialize(), () => o.default.cleanup()), []), (0, d.jsx)(c.HelmetProvider, {
                        children: (0, d.jsx)(i.Router, {
                            history: (0, r.getHistory)(),
                            children: t
                        })
                    })
                }
            },
            252759: function(e, t, a) {
                "use strict";
                a.r(t), a.d(t, {
                    StreamDirector: function() {
                        return o
                    },
                    StreamDirectorActionType: function() {
                        return n
                    }
                });
                var d, n, c = a("75834");

                function i(e, t, a) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = a, e
                }(d = n || (n = {})).STREAM = "stream", d.PAUSE = "pause", d.STOP = "stop";
                class o {
                    onStreamBegin(e, t) {
                        let a = (0, c.getInitialStreamTarget)(e, t);
                        null == a || null == a.windowHandle ? this.callback({
                            type: "stop"
                        }) : this._stream(a)
                    }
                    onStreamKilled() {
                        this._kill()
                    }
                    onStreamEnd() {
                        this._stop()
                    }
                    onDetectionUpdate(e) {
                        this._update(e)
                    }
                    onCaptureEnd(e, t) {
                        var a;
                        (null === (a = this.application) || void 0 === a ? void 0 : a.windowHandle) === t && this._update(e)
                    }
                    onCaptureLegacyEnd(e) {
                        var t;
                        return (null === (t = this.application) || void 0 === t ? void 0 : t.windowHandle) != null ? this.onCaptureEnd(e, this.application.windowHandle) : this._stop()
                    }
                    _update(e) {
                        let t = (0, c.getStreamTarget)(e, this.application);
                        if (null != t) return null == t.windowHandle ? this._pause() : this._stream(t);
                        this._stop()
                    }
                    _stream(e) {
                        var t;
                        let a = (null === (t = this.application) || void 0 === t ? void 0 : t.windowHandle) !== e.windowHandle;
                        this.active = !0, this.application = Object.assign({}, e), a && this.callback({
                            type: "stream",
                            sourceId: "window:".concat(this.application.windowHandle)
                        })
                    }
                    _kill() {
                        this.active = !1, this.application = null
                    }
                    _stop() {
                        this.active && (this._kill(), this.callback({
                            type: "stop"
                        }))
                    }
                    _pause() {
                        this.active && (this.application.windowHandle = null, this.callback({
                            type: "pause"
                        }))
                    }
                    constructor(e) {
                        i(this, "callback", void 0), i(this, "active", void 0), i(this, "application", void 0), this.callback = e, this.active = !1, this.application = null
                    }
                }
            },
            75834: function(e, t, a) {
                "use strict";
                a.r(t), a.d(t, {
                    getInitialStreamTarget: function() {
                        return n
                    },
                    getStreamTarget: function() {
                        return i
                    }
                }), a("47120");
                var d = a("823379");

                function n(e, t) {
                    let a = e.find(e => e.processId === t);
                    return null == a ? null : i(e, a)
                }
                let c = "356869127241072640";

                function i(e, t) {
                    var a;
                    if (null == t) return null;
                    if (t.applicationId === c) return function(e, t) {
                        let a = t.processPath.length > 1 ? t.processPath[t.processPath.length - 2] : 0,
                            d = e.filter(e => e.applicationId === c && e.processPath.includes(a)),
                            n = d.find(e => "league of legends.exe" === e.executableName);
                        return void 0 !== n ? n : d.length > 0 ? d[0] : null
                    }(e, t);
                    let n = new Map(e.map(e => [e.processId, e])),
                        i = t.processPath.map(e => n.get(e)).find(e => null != e);
                    if (null == i) return null;
                    let r = e.map(e => {
                        let t = e.processPath.findIndex(e => n.has(e));
                        return -1 === t ? null : {
                            application: e,
                            rootedPath: e.processPath.slice(t)
                        }
                    }).filter(d.isNotNullish).filter(e => e.rootedPath[0] === i.processId);
                    r.sort((e, t) => {
                        let a = e.rootedPath.map(e => n.get(e)).filter(e => null != e && null != e.windowHandle),
                            d = o(t.rootedPath.map(e => n.get(e)).filter(e => null != e && null != e.windowHandle), a);
                        return 0 !== d ? d : o(t.rootedPath, e.rootedPath)
                    });
                    let f = null !== (a = r.find(e => null != e.application.windowHandle)) && void 0 !== a ? a : r[0];
                    return null == f ? null : f.application
                }

                function o(e, t) {
                    return e.length - t.length
                }
            },
            513566: function(e, t, a) {
                "use strict";
                a.r(t), a("47120");
                var d = a("348327"),
                    n = a.n(d),
                    c = a("392711"),
                    i = a.n(c),
                    o = a("570140"),
                    r = a("846027"),
                    f = a("287734"),
                    l = a("317770"),
                    s = a("829750"),
                    u = a("189771"),
                    b = a("67844"),
                    h = a("173507"),
                    p = a("592125"),
                    m = a("131951"),
                    _ = a("944486"),
                    E = a("358085"),
                    g = a("998502"),
                    I = a("981631"),
                    O = a("689938");

                function T(e, t, a) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = a, e
                }
                class R extends l.default {
                    _initialize() {
                        this.isSupported && (o.default.subscribe("AUDIO_SET_MODE", this.handleViewUpdate), o.default.subscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate), o.default.subscribe("START_SESSION", this.handleViewUpdate), o.default.subscribe("CONNECTION_OPEN", this.handleViewUpdate), o.default.subscribe("CONNECTION_CLOSED", this.handleViewUpdate), o.default.subscribe("CALL_CREATE", this.handleViewUpdate), o.default.subscribe("CALL_UPDATE", this.handleViewUpdate), o.default.subscribe("CALL_DELETE", this.handleViewUpdate), o.default.subscribe("CHANNEL_DELETE", this.handleViewUpdate), o.default.subscribe("VOICE_STATE_UPDATES", this.handleViewUpdate), o.default.subscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate), o.default.subscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate), o.default.subscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate), o.default.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate), g.default.on("THUMBAR_BUTTONS_CLICKED", (e, t) => this.buttonClicked(t)))
                    }
                    _terminate() {
                        this.isSupported && (o.default.unsubscribe("AUDIO_SET_MODE", this.handleViewUpdate), o.default.unsubscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate), o.default.unsubscribe("START_SESSION", this.handleViewUpdate), o.default.unsubscribe("CONNECTION_OPEN", this.handleViewUpdate), o.default.unsubscribe("CONNECTION_CLOSED", this.handleViewUpdate), o.default.unsubscribe("CALL_CREATE", this.handleViewUpdate), o.default.unsubscribe("CALL_UPDATE", this.handleViewUpdate), o.default.unsubscribe("CALL_DELETE", this.handleViewUpdate), o.default.unsubscribe("CHANNEL_DELETE", this.handleViewUpdate), o.default.unsubscribe("VOICE_STATE_UPDATES", this.handleViewUpdate), o.default.unsubscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate), o.default.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate), o.default.unsubscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate), o.default.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate))
                    }
                    setThumbarButtons(e) {
                        !n()(this.prevButtons, e) && (this.prevButtons = e, g.default.setThumbarButtons(e))
                    }
                    constructor(...e) {
                        super(...e), T(this, "callbackActions", {
                            [g.ThumbarButtonName.VIDEO]: () => {
                                m.default.isVideoEnabled() ? r.default.setVideoEnabled(!1) : (0, h.default)(() => r.default.setVideoEnabled(!0), I.AppContext.APP)
                            },
                            [g.ThumbarButtonName.MUTE]: () => r.default.toggleSelfMute(),
                            [g.ThumbarButtonName.DEAFEN]: () => r.default.toggleSelfDeaf(),
                            [g.ThumbarButtonName.DISCONNECT]: () => f.default.disconnect()
                        }), T(this, "isSupported", (0, E.isMac)() || (0, E.isWindows)()), T(this, "prevButtons", []), T(this, "buttonClicked", e => {
                            if (!(e.buttonName in this.callbackActions)) {
                                console.error('ThumbarButtonsManager: Unknown callback eventName: "'.concat(e.buttonName, '"'), e);
                                return
                            }
                            this.callbackActions[e.buttonName]()
                        }), T(this, "handleViewUpdate", i().debounce(() => {
                            let e = _.default.getVoiceChannelId();
                            if (null == e) {
                                this.setThumbarButtons([]);
                                return
                            }
                            let t = m.default.isSelfMute(),
                                a = m.default.isSelfDeaf(),
                                d = m.default.isVideoEnabled(),
                                n = m.default.isVideoAvailable(),
                                c = p.default.getChannel(e),
                                i = null == c || (0, u.getVideoPermission)(c),
                                {
                                    reachedLimit: o,
                                    limit: r
                                } = null != c ? (0, s.getChannelVideoLimit)(c) : {
                                    reachedLimit: void 0,
                                    limit: void 0
                                },
                                f = (0, b.getVideoButtonLabel)({
                                    enabled: d,
                                    join: !1,
                                    channel: c,
                                    cameraUnavailable: !n,
                                    hasPermission: i,
                                    channelLimit: r,
                                    channelLimitReached: o
                                });
                            this.setThumbarButtons([{
                                name: g.ThumbarButtonName.VIDEO,
                                active: !d,
                                tooltip: f,
                                flags: n ? [] : ["disabled"]
                            }, {
                                name: g.ThumbarButtonName.MUTE,
                                active: t,
                                tooltip: t ? O.default.Messages.UNMUTE : O.default.Messages.MUTE
                            }, {
                                name: g.ThumbarButtonName.DEAFEN,
                                active: a,
                                tooltip: a ? O.default.Messages.UNDEAFEN : O.default.Messages.DEAFEN
                            }, {
                                name: g.ThumbarButtonName.DISCONNECT,
                                active: !0,
                                tooltip: O.default.Messages.DISCONNECT_SELF
                            }])
                        }, 100))
                    }
                }
                t.default = new R
            },
            801814: function(e, t, a) {
                "use strict";
                var d, n, c, i;

                function o(e, t, a) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = a, e
                }

                function r() {
                    return {
                        num_failed: 0,
                        num_delta_installed: 0,
                        num_full_installed: 0,
                        foreground_bytes_total: 0,
                        background_bytes_total: 0,
                        foreground_download_ms_total: 0,
                        background_download_ms_total: 0,
                        foreground_install_ms_total: 0,
                        background_install_ms_total: 0
                    }
                }

                function f(e) {
                    return "host" === e
                }
                a.r(t), a.d(t, {
                    default: function() {
                        return l
                    }
                }), (c = d || (d = {})).CHECKING_FOR_UPDATES = "checking-for-updates", c.INSTALLED_MODULE = "installed-module", c.UPDATE_CHECK_FINISHED = "update-check-finished", c.DOWNLOADING_MODULE = "downloading-module", c.DOWNLOADING_MODULE_PROGRESS = "downloading-module-progress", c.DOWNLOADING_MODULES_FINISHED = "downloading-modules-finished", c.UPDATE_MANUALLY = "update-manually", c.DOWNLOADED_MODULE = "downloaded-module", c.INSTALLING_MODULES_FINISHED = "installing-modules-finished", c.INSTALLING_MODULE = "installing-module", c.INSTALLING_MODULE_PROGRESS = "installing-module-progress", c.NO_PENDING_UPDATES = "no-pending-updates", (i = n || (n = {})).CLOUD_SYNC = "discord_cloudsync", i.DESKTOP_CORE = "discord_desktop_core", i.DISPATCH = "discord_dispatch", i.ERLPACK = "discord_erlpack", i.GAME_UTILS = "discord_game_utils", i.HOOK = "discord_hook", i.KRISP = "discord_krisp", i.MEDIA = "discord_media", i.MODULES = "discord_modules", i.OVERLAY2 = "discord_overlay2", i.RPC = "discord_rpc", i.SPELLCHECK = "discord_spellcheck", i.UPDATER_BOOTSTRAP = "discord_updater_bootstrap", i.UTILS = "discord_utils", i.VIGILANTE = "discord_vigilante", i.VOICE = "discord_voice", i.ZSTD = "discord_zstd";
                class l {
                    handleDownloadingModule(e) {
                        if (!f(e.name)) {
                            if (null != this._downloadingModules[e.name]) {
                                console.warn("Duplicate downloading-module event for module ", e.name);
                                return
                            }
                            this._downloadingModules[e.name] = {
                                startTime: BigInt(e.now),
                                foreground: e.foreground
                            }
                        }
                    }
                    _updateReportField(e, t, a) {
                        let d = this._report[e];
                        null != d ? this._report[e] = a(d, t) : this._report[e] = t
                    }
                    incrementReportField(e, t) {
                        this._updateReportField(e, t, (e, t) => e + t)
                    }
                    setReportFieldMinimum(e, t) {
                        this._updateReportField(e, t, Math.min)
                    }
                    setReportFieldMaximum(e, t) {
                        this._updateReportField(e, t, Math.max)
                    }
                    handleDownloadedModule(e) {
                        if (f(e.name)) return;
                        let t = this._downloadingModules[e.name];
                        if (null == t) {
                            console.warn("Downloaded complete without corresponding downloading event for module ", e.name);
                            return
                        }
                        let a = t.foreground ? "foreground" : "background",
                            d = "".concat(a, "_download_ms_").concat(e.name),
                            n = "".concat(a, "_bytes_").concat(e.name),
                            c = Number((BigInt(e.now) - t.startTime + BigInt(999999)) / BigInt(1e6)),
                            i = !1 === e.receivedBytes ? 0 : e.receivedBytes;
                        t.foreground ? (this._report.foreground_download_ms_total += c, this._report.foreground_bytes_total += i) : (this._report.background_download_ms_total += c, this._report.background_bytes_total += i), this.incrementReportField(d, c), this.incrementReportField(n, i), delete this._downloadingModules[e.name]
                    }
                    handleInstallingModule(e) {
                        if (!f(e.name)) {
                            if (null != this._installingModules[e.name]) {
                                console.warn("Duplicate installing-module event for module ", e.name);
                                return
                            }
                            this._installingModules[e.name] = {
                                startTime: BigInt(e.now),
                                foreground: e.foreground,
                                oldVersion: e.oldVersion,
                                newVersion: e.newVersion
                            }
                        }
                    }
                    handleInstalledModule(e) {
                        if (f(e.name)) return;
                        let t = this._installingModules[e.name];
                        if (null == t) return;
                        let a = t.foreground ? "foreground" : "background",
                            d = "".concat(a, "_install_ms_").concat(e.name),
                            n = "min_version_".concat(e.name),
                            c = "max_version_".concat(e.name),
                            i = Number((BigInt(e.now) - t.startTime + BigInt(999999)) / BigInt(1e6));
                        t.foreground ? this._report.foreground_install_ms_total += i : this._report.background_install_ms_total += i, this.incrementReportField(d, i), this.setReportFieldMinimum(n, t.oldVersion), e.succeeded ? (!0 === e.delta ? this._report.num_delta_installed++ : this._report.num_full_installed++, this.setReportFieldMaximum(c, t.newVersion)) : this._report.num_failed++, delete this._installingModules[e.name]
                    }
                    trackEvent(e) {
                        switch (e.type) {
                            case "installing-module":
                                this.handleInstallingModule(e);
                                break;
                            case "installed-module":
                                this.handleInstalledModule(e);
                                break;
                            case "downloading-module":
                                this.handleDownloadingModule(e);
                                break;
                            case "downloaded-module":
                                this.handleDownloadedModule(e)
                        }
                    }
                    getStats() {
                        return this._report
                    }
                    reset() {
                        this._report = r()
                    }
                    submissionReady() {
                        return this._report.num_full_installed + this._report.num_failed + this._report.num_delta_installed + this._report.foreground_bytes_total + this._report.background_bytes_total !== 0 && !(Object.keys(this._installingModules).length > 0) && !(Object.keys(this._downloadingModules).length > 0) && !0
                    }
                    constructor() {
                        o(this, "_installingModules", {}), o(this, "_downloadingModules", {}), o(this, "_report", void 0), this._report = r()
                    }
                }
            },
            395727: function(e, t, a) {
                "use strict";
                a.r(t), a("47120");
                var d = a("317770"),
                    n = a("626135"),
                    c = a("358085"),
                    i = a("998502"),
                    o = a("801814"),
                    r = a("981631");
                class f extends d.default {
                    _initialize() {
                        c.isPlatformEmbedded && (i.default.on("UPDATE_DOWNLOADED", () => this.processModuleEvents()), i.default.on("MODULE_INSTALLED", (e, t, a) => this.processModuleEvents()), i.default.on("UPDATER_HISTORY_RESPONSE", (e, t) => {
                            this._handleHistoryResponse(t)
                        }), this.processModuleEvents())
                    }
                    _terminate() {}
                    processModuleEvents() {
                        i.default.send("UPDATER_HISTORY_QUERY_AND_TRUNCATE")
                    }
                    _handleHistoryResponse(e) {
                        null != e && (e.forEach(e => {
                            "analytics" === e.type ? e.name === r.AnalyticEvents.UPDATER_METRICS_DOWNLOAD || e.name === r.AnalyticEvents.UPDATER_METRICS_INSTALL || e.name === r.AnalyticEvents.UPDATER_METRICS_COMBINED || e.name === r.AnalyticEvents.UPDATER_METRICS_TRANSITION_STATUS ? n.default.track(e.name, e.data) : console.warn("Unknown updater analytic event ".concat(e.name)) : this._tracker.trackEvent(e)
                        }), this._tracker.submissionReady() && (n.default.track(r.AnalyticEvents.APP_MODULES_UPDATED, this._tracker.getStats()), this._tracker.reset()))
                    }
                    constructor(...e) {
                        var t, a, d;
                        super(...e), t = this, a = "_tracker", d = new o.default, a in t ? Object.defineProperty(t, a, {
                            value: d,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[a] = d
                    }
                }
                t.default = new f
            },
            829750: function(e, t, a) {
                "use strict";
                a.r(t), a.d(t, {
                    default: function() {
                        return o
                    },
                    getChannelVideoLimit: function() {
                        return r
                    }
                });
                var d = a("442837"),
                    n = a("430824"),
                    c = a("938475"),
                    i = a("981631");

                function o(e) {
                    return (0, d.useStateFromStoresObject)([c.default, n.default], () => {
                        let t = c.default.countVoiceStatesForChannel(e.id),
                            a = n.default.getGuild(e.getGuildId());
                        return null == a ? {
                            reachedLimit: !1,
                            limit: -1
                        } : e.type === i.ChannelTypes.GUILD_STAGE_VOICE ? {
                            reachedLimit: t > a.maxStageVideoChannelUsers,
                            limit: a.maxStageVideoChannelUsers
                        } : {
                            reachedLimit: a.maxVideoChannelUsers > 0 && t > a.maxVideoChannelUsers,
                            limit: a.maxVideoChannelUsers
                        }
                    }, [e])
                }

                function r(e) {
                    let t = c.default.countVoiceStatesForChannel(e.id),
                        a = n.default.getGuild(e.getGuildId());
                    return null == a ? {
                        reachedLimit: !1,
                        limit: -1
                    } : e.type === i.ChannelTypes.GUILD_STAGE_VOICE ? {
                        reachedLimit: t > a.maxStageVideoChannelUsers,
                        limit: a.maxStageVideoChannelUsers
                    } : {
                        reachedLimit: a.maxVideoChannelUsers > 0 && t > a.maxVideoChannelUsers,
                        limit: a.maxVideoChannelUsers
                    }
                }
            },
            173507: function(e, t, a) {
                "use strict";
                a.r(t), a.d(t, {
                    default: function() {
                        return o
                    }
                });
                var d = a("735250");
                a("470079");
                var n = a("481060"),
                    c = a("695346"),
                    i = a("981631");

                function o(e, t) {
                    c.AlwaysPreviewVideo.getSetting() ? (0, n.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await Promise.all([a.e("99387"), a.e("5528"), a.e("13170")]).then(a.bind(a, "601572"));
                        return a => (0, d.jsx)(t, {
                            ...a,
                            onEnable: e,
                            videoEnabled: !1
                        })
                    }, {
                        modalKey: "camera-preview",
                        contextKey: t === i.AppContext.POPOUT ? n.POPOUT_MODAL_CONTEXT : n.DEFAULT_MODAL_CONTEXT
                    }) : null == e || e()
                }
            },
            361207: function(e, t, a) {
                "use strict";
                a.r(t), a.d(t, {
                    getCurrentPlatformDownloadURL: function() {
                        return u
                    },
                    getMobileDownloadLink: function() {
                        return b
                    },
                    getPlatformReadableName: function() {
                        return s
                    },
                    makeDesktopDownloadURL: function() {
                        return f
                    }
                });
                var d = a("525654"),
                    n = a.n(d),
                    c = a("271579"),
                    i = a("314897"),
                    o = a("981631");
                let r = "linux";

                function f(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        a = arguments.length > 2 ? arguments[2] : void 0;
                    return "".concat(o.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != a ? "&format=".concat(a) : "")
                }

                function l() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = n().os) || void 0 === e ? void 0 : e.family;
                    return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? r : -1 !== t.indexOf("OS X") ? "osx" : "win"
                }

                function s(e) {
                    return ({
                        win: "Windows",
                        osx: "Mac",
                        [r]: "Linux"
                    })[l(e)]
                }

                function u() {
                    let e = l();
                    return f(e, !1, e === r ? "tar.gz" : null)
                }

                function b(e, t, a) {
                    let d = null != a ? a.toString() : null;
                    switch (t) {
                        case "iOS":
                            return (0, c.default)(null != d ? d : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                                utmSource: e,
                                fingerprint: i.default.getFingerprint(),
                                attemptId: (0, c.generateAttemptId)()
                            });
                        case "Android":
                            return (0, c.default)(null != d ? d : "https://play.google.com/store/apps/details", {
                                utmSource: e,
                                id: "com.discord",
                                fingerprint: i.default.getFingerprint(),
                                attemptId: (0, c.generateAttemptId)()
                            });
                        default:
                            return null != d ? d : "https://www.discord.com"
                    }
                }
            },
            240849: function(e, t, a) {
                "use strict";
                a.r(t);
                var d = a("703656"),
                    n = a("556296"),
                    c = a("358085"),
                    i = a("998502"),
                    o = a("981631");

                function r(e, t) {
                    return !(e === o.NavigateEventSource.BROWSER && n.default.hasKeybind(o.KeyboardDeviceTypes.MOUSE_BUTTON, t)) && !0
                }
                t.default = new class e {
                    initialize() {
                        (0, c.isDesktop)() && (i.default.on("NAVIGATE_BACK", (e, t) => {
                            r(t, o.MouseKeyCodes.Back) && (0, d.back)()
                        }), i.default.on("NAVIGATE_FORWARD", (e, t) => {
                            r(t, o.MouseKeyCodes.Forward) && (0, d.forward)()
                        }))
                    }
                }
            },
            690032: function(e, t, a) {
                "use strict";
                a.r(t), a.d(t, {
                    getOpenAppFromEmailDestinations: function() {
                        return i
                    }
                }), a("315314"), a("610138"), a("216116"), a("78328"), a("815648"), a("47120");
                var d = a("593473"),
                    n = a("591759");
                let c = e => {
                        if (null == e || "" === e) return null;
                        try {
                            let t = new URL(e);
                            return n.default.isDiscordHostname(t.hostname) || window.location.host === t.host ? t : null
                        } catch (e) {
                            return null
                        }
                    },
                    i = e => {
                        let t = (0, d.parse)(e);
                        return {
                            desktop: c(t.desktop_link),
                            mobile: c(t.mobile_link)
                        }
                    }
            },
            643950: function(e, t, a) {
                "use strict";
                a.r(t), a("47120")
            },
            141038: function(e, t, a) {
                "use strict";
                a.r(t), a.d(t, {
                    default: function() {
                        return r
                    }
                }), a("653041"), a("47120");
                var d = a("512722"),
                    n = a.n(d),
                    c = a("90757"),
                    i = a.n(c),
                    o = a("65154");

                function r(e, t, a) {
                    let d = window.DiscordNative;
                    n()(null != d, "Can't get desktop sources outside of native app"), t = null != t ? t : [o.DesktopSources.WINDOW, o.DesktopSources.SCREEN], a = null != a ? a : {
                        width: 150,
                        height: 150
                    };
                    let c = [];
                    return t.includes(o.DesktopSources.SCREEN) && e.supports(o.Features.SCREEN_PREVIEWS) && (c.push(e.getScreenPreviews(a.width, a.height)), t = t.filter(e => e !== o.DesktopSources.SCREEN)), t.includes(o.DesktopSources.WINDOW) && e.supports(o.Features.WINDOW_PREVIEWS) && (c.push(e.getWindowPreviews(a.width, a.height)), t = t.filter(e => e !== o.DesktopSources.WINDOW)), 0 !== t.length && c.push(d.desktopCapture.getDesktopCaptureSources({
                        types: t,
                        thumbnailSize: a
                    })), Promise.all(c).then(e => i()(e))
                }
            }
        },
        l = {};

    function s(e) {
        var t = l[e];
        if (void 0 !== t) return t.exports;
        var a = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return f[e].call(a.exports, a, a.exports, s), a.loaded = !0, a.exports
    }
    s.m = f, s.c = l, s.es = function(e, t) {
        return Object.keys(e).forEach(function(a) {
            "default" !== a && !Object.prototype.hasOwnProperty.call(t, a) && Object.defineProperty(t, a, {
                enumerable: !0,
                get: function() {
                    return e[a]
                }
            })
        }), e
    }, e = "function" == typeof Symbol ? Symbol("webpack queues") : "__webpack_queues__", t = "function" == typeof Symbol ? Symbol("webpack exports") : "__webpack_exports__", a = "function" == typeof Symbol ? Symbol("webpack error") : "__webpack_error__", d = function(e) {
        e && e.d < 1 && (e.d = 1, e.forEach(function(e) {
            e.r--
        }), e.forEach(function(e) {
            e.r-- ? e.r++ : e()
        }))
    }, s.a = function(n, c, i) {
        i && ((o = []).d = -1);
        var o, r, f, l, s = new Set,
            u = n.exports,
            b = new Promise(function(e, t) {
                l = t, f = e
            });
        b[t] = u, b[e] = function(e) {
            o && e(o), s.forEach(e), b.catch(function() {})
        }, n.exports = b, c(function(n) {
            r = n.map(function(n) {
                if (null !== n && "object" == typeof n) {
                    if (n[e]) return n;
                    if (n.then) {
                        var c = [];
                        c.d = 0, n.then(function(e) {
                            i[t] = e, d(c)
                        }, function(e) {
                            i[a] = e, d(c)
                        });
                        var i = {};
                        return i[e] = function(e) {
                            e(c)
                        }, i
                    }
                }
                var o = {};
                return o[e] = function() {}, o[t] = n, o
            });
            var c, i = function() {
                    return r.map(function(e) {
                        if (e[a]) throw e[a];
                        return e[t]
                    })
                },
                f = new Promise(function(t) {
                    (c = function() {
                        t(i)
                    }).r = 0;
                    var a = function(e) {
                        e === o || s.has(e) || (s.add(e), e && !e.d && (c.r++, e.push(c)))
                    };
                    r.map(function(t) {
                        t[e](a)
                    })
                });
            return c.r ? f : i()
        }, function(e) {
            e ? l(b[a] = e) : f(u), d(o)
        }), o && o.d < 0 && (o.d = 0)
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return s.d(t, {
            a: t
        }), t
    }, c = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    } : function(e) {
        return e.__proto__
    }, s.t = function(e, t) {
        if (1 & t && (e = this(e)), 8 & t || "object" == typeof e && e && (4 & t && e.__esModule || 16 & t && "function" == typeof e.then)) return e;
        var a = Object.create(null);
        s.r(a);
        var d = {};
        n = n || [null, c({}), c([]), c(c)];
        for (var i = 2 & t && e;
            "object" == typeof i && !~n.indexOf(i); i = c(i)) Object.getOwnPropertyNames(i).forEach(function(t) {
            d[t] = function() {
                return e[t]
            }
        });
        return d.default = function() {
            return e
        }, s.d(a, d), a
    }, s.d = function(e, t) {
        for (var a in t) s.o(t, a) && !s.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a]
        })
    }, s.f = {}, s.e = function(e) {
        return Promise.all(Object.keys(s.f).reduce(function(t, a) {
            return s.f[a](e, t), t
        }, []))
    }, s.k = function(e) {
        return "" + e + ".css"
    }, s.u = function(e) {
        return "52030" === e ? "" + e + ".51d5c15949ffbbbfa744.js" : "73422" === e ? "" + e + ".101c1055378189203ef5.js" : "11250" === e ? "" + e + ".4901e0acbbf45a9cb1e7.js" : "66635" === e ? "" + e + ".1ad04eeb540c570d5e05.js" : "74456" === e ? "" + e + ".5d12c7e84c265530c451.js" : "57878" === e ? "" + e + ".f80f2ae72af75d9274b1.js" : "88390" === e ? "" + e + ".9c755e10fe5c56c5d959.js" : "61980" === e ? "" + e + ".807d1c790a2249d50f2b.js" : "15972" === e ? "" + e + ".71f0a1fb4c8f8334819a.js" : "6416" === e ? "6416.4a083d2606facf63dd8e.js" : "8016" === e ? "8016.9fa079ddd4695208403a.js" : "17938" === e ? "" + e + ".9ef0e61e95e7ece97fee.js" : "84992" === e ? "" + e + ".6626b89cce649f10f52e.js" : "58625" === e ? "" + e + ".8572c9c9abba1163dbac.js" : "14720" === e ? "" + e + ".0b0e6c9210fb9f37e6ea.js" : "62511" === e ? "" + e + ".b36df41b10107b505c28.js" : "61247" === e ? "" + e + ".ccdb856b69aaa5757848.js" : "40326" === e ? "" + e + ".0adf9499757aef134809.js" : "23357" === e ? "" + e + ".c65ea12cd962e69390e2.js" : "63438" === e ? "" + e + ".c818dbbca62879742023.js" : "58600" === e ? "" + e + ".03194930ca694e00d153.js" : "32776" === e ? "" + e + ".187b27457778ad188112.js" : "95900" === e ? "" + e + ".712b0835b8a6787c6b5e.js" : "35240" === e ? "" + e + ".9f9850eeb106c22a2549.js" : "19878" === e ? "" + e + ".38577e57248a8460bd91.js" : "47217" === e ? "" + e + ".a6dd98c0d1e20a42e02e.js" : "85514" === e ? "" + e + ".4384a756cb8409699d33.js" : "77030" === e ? "" + e + ".976411052d1a8753b033.js" : "52619" === e ? "" + e + ".61ac9328b627615bc7a7.js" : "75492" === e ? "" + e + ".0148c7b424d039f78965.js" : "22646" === e ? "" + e + ".7946f6f41d759b88f515.js" : "86691" === e ? "" + e + ".1696217bc65bf483b4ca.js" : "847" === e ? "847.77a409a8efd8f9b2f10f.js" : "" + ({
            10377: "f79d1bde2dba66ca2945",
            10508: "6f08f80f9c2680fd0ef4",
            10667: "2a7fcb6c2862ab5ccfd3",
            10778: "e16904bc61f4a8561939",
            11118: "5db31cdf4d2a540cc886",
            11166: "80a19df870dae4ce1127",
            11193: "08fd040b908681625b8e",
            11256: "72c3407f417f73fa194f",
            11345: "59c1dda286a2486edb2a",
            11686: "d494f983a3e2a65ba83f",
            12112: "ea309e7f0d757832a7c5",
            12192: "520243c4b35e53e49fd4",
            12222: "55b3d0f6acbbf5abf18e",
            12241: "61c46e0494f7942262eb",
            12435: "670366b8dec588ef76f8",
            12464: "0668dc4bc93bfca2cd68",
            12610: "f61c6b0816fb2b27f6f9",
            12611: "642feca4c56dd80d639c",
            12736: "113c53cdb07c0e0fb35d",
            12817: "9d6b75cdcbd01a37a378",
            12831: "2841fb99624147a8bcc9",
            12891: "f5fc1dd3bb9f049cd5b5",
            13111: "cba93d85d40147def917",
            13170: "5aa2b3c5cab01f44c653",
            13878: "0973bac7da10c49ca6bc",
            14021: "58ffe11f389af93bf385",
            14192: "367d9c13be14c873c71c",
            14262: "93deeefac23793e4bb9b",
            14315: "28fac0c6299bd14b09d1",
            14466: "828a64e8ed71037268dc",
            14486: "02671ed8293ec74c990d",
            14653: "bc4bfd827b86a3b99ebd",
            14760: "607c740fc2037d1a86b5",
            14784: "d4bc185db558af7aab37",
            15180: "6285ebfbfdfb2d08d011",
            153: "e333e8e91308c42edf8a",
            15421: "0a1537fca66b1d102b74",
            15915: "7b8c5b908f905caacf8b",
            15968: "ade10fb633a748b32911",
            15986: "b30c490e54fb406cc86a",
            16087: "a73c06c23975b4c35f28",
            16114: "5c64c633b3a07ba3a0aa",
            16169: "b1e474df99ab2d5ee024",
            16228: "c6fea9e29d876a559f26",
            1631: "f6a1fb88d8d49e3e90e7",
            16359: "022f63fdce246d8c6585",
            16565: "6ebf81784d2441b045f8",
            16600: "825cce253dd37e47dd4f",
            16609: "f0b6333b3e9f1560ed21",
            1716: "b0adac1297450b1c75c6",
            17672: "d968b0a2dc266e89ea7c",
            17712: "b8a63e79c880d26f9276",
            18101: "dbd48245a72174cb347f",
            1812: "5e059cfa156e79017184",
            18249: "41c4467afaf83cf14ba3",
            18259: "1b8df66b76ba8dd68a09",
            18320: "772da63f43d36ed0f24d",
            18367: "b1b62625749ca2e33d52",
            18417: "10293939335791cf9537",
            1862: "7a77157493e53c9ef907",
            18824: "882839683a34bdc17414",
            18831: "67929c12df86d21e4194",
            18879: "5f1b8a47ea61963fe35f",
            1906: "ab20be8dc9783d71f25e",
            19213: "4bf5b943d76f4320b7de",
            19255: "9b98b81a72900f664a97",
            19538: "d76357cddb3581be392c",
            19701: "ad5c1f1a3a60cb9ae771",
            19726: "3147f5756c3e104d8f14",
            20177: "9051def6e1517bbc9a0a",
            20196: "3b9518d5ac3449a784c2",
            20212: "7606f04009d53f6680b2",
            20247: "7a5dd2c116314fd05889",
            20268: "10bee6966ee67f9eb30a",
            20294: "9ba9f548ac330dac11cf",
            20353: "067524af895979be48ca",
            2045: "21e4ed021dba1150f7e6",
            20467: "fea15eaf37d5cc8697be",
            2047: "99c07b23849a7a199f62",
            20575: "1273b5ba8ab661b8613d",
            20653: "07c742bb65440d1dcfb9",
            20727: "1f79bdc2c6dfeedf708e",
            20786: "96dabeac9a3f93f1286f",
            21112: "72f513644d80b23ed722",
            21228: "26ca8346a067934b070f",
            21395: "2951dbecdacf1a8f5f7f",
            21617: "43aa5baedd0197eee41f",
            21863: "bf3c54f362f41a774b4b",
            21897: "9a1287acd6b3bf32056c",
            219: "c87fb17567183e2ad459",
            21960: "1e2b36a876865dfec4ab",
            21971: "5f556f461655dd43c4a5",
            2199: "f7c0beb10495b3726738",
            22042: "d450c99869c764c7d909",
            22101: "2d05bd2f65e7d41032b8",
            22183: "62c59b0a9d0495e2582b",
            22347: "aa02ef70d6981012b00e",
            22377: "7a67f745002f8860f775",
            22458: "fa33c00556be34afcb58",
            22482: "c2f5cd2b7115c0dc2d27",
            22523: "e305c15c7caa0db929d9",
            226: "9db8adf7cc3a1808688f",
            22602: "80b84e5ce3a6357e574c",
            22706: "91ed28283eab19861834",
            22732: "1391c46822f3e9596d97",
            22862: "7f00262df180668cc578",
            22872: "a68bbe09e7fbf400de79",
            22942: "c03a54e07c9b314c8f7b",
            23401: "0646026fc5d31de5755e",
            2356: "7c7e6e53c869e131d5cd",
            23746: "cab6c51b0898cdfe5bb0",
            23755: "9e3b957bd201198b20d0",
            23835: "1e9123d564a5325ca011",
            23847: "295e78ba39b0af151e3b",
            23952: "8d01199dbf4aa70aaa09",
            24017: "c4fc2789de58ab8e225b",
            24053: "1a0f31ad986536e4165d",
            24267: "ed0bb0f504b2a20eb4b3",
            2435: "ca779bf8d92e8b17f375",
            24478: "b375b4c6818a20f255e1",
            24642: "898050902162a739073d",
            24699: "03794021e8241bed3b5e",
            24783: "d448338dff1efde8df8a",
            24813: "b43d6d8ff195d0f48e4b",
            25070: "aec8fa117f263ac7f94c",
            2535: "2a44be830b60c563f895",
            2538: "22e754fa38d1a4639bf1",
            25381: "92cd6385e7e669a28eb0",
            25421: "ab0c29714c2a9df6aa4a",
            25443: "24db192a6249ee652c91",
            25507: "7cd5d119c9a7be1353fb",
            26176: "474e81aa33052323deeb",
            2634: "cfdb1e2f48ee4d37940e",
            26460: "c51097872438bc4fd5f8",
            2668: "9c4f1e240842ba7e065d",
            27157: "853bad87af681796b379",
            27381: "1552b34d22ee5996a214",
            27526: "561804e678779ff113ca",
            27601: "c01b7c6016a02c31b49b",
            27751: "fd692baf6f4fa616a5d9",
            27919: "1d5b471a67e478dd047d",
            28249: "a8167f7e6e31c922a53f",
            28296: "c7d0f0897e065a2a225c",
            28382: "813bcd34f799329d56dc",
            28479: "58440b720124551087a0",
            28538: "245da347eb40d6e5be21",
            28614: "ca2ff25a16ddec2f8f3a",
            28990: "909027390c9aade15556",
            29136: "4641c31d561dbf731260",
            29396: "3283e4a6692345d6d8b2",
            29598: "4f37e0de46aa19ad20ba",
            29608: "a7558d2c47b0d21fadfb",
            29641: "4eac724bbed08b3e2918",
            297: "235b19008e87958ade78",
            29924: "980c33179a0b23728a85",
            30166: "f4977a4cb6d0fc4c516e",
            30243: "8f59c3fa2497ac01bdc9",
            30244: "1974336788a0c54dfc80",
            30364: "c9b8ee0d83b520f4ee1b",
            30478: "4451b62d915549a3a1c2",
            30634: "9f870e01572b481303ac",
            30684: "c1004b501f967c58cfe6",
            3084: "0cffa6b285183dd06378",
            30887: "afdee642400879498482",
            30997: "62a503a7aaa861732e7d",
            31085: "f0c914b0a40f073c6c72",
            31093: "5646743882bdf3befa5b",
            31177: "ae110c08cf6c0bd668d0",
            31270: "c898111f9be214006ea1",
            31375: "55a9cf8093d8cad09b5e",
            31835: "0c62fbfed3088ae23f6c",
            3190: "c19808b118261ab302e7",
            32157: "9443fc0019c26cb5915f",
            32627: "dc31492f4d34f0170d7a",
            32640: "47f497e8cfdc099c8c01",
            3277: "a61cfebecec2bc0af1bb",
            32886: "7fdc8f52bcf9e05bee0e",
            3289: "318cf838f8fbc29088b5",
            32991: "06e79d413b86f5de0c02",
            33053: "9ba0d5d2e9932ec29d71",
            33065: "debf54c8ad7eb03010df",
            33156: "2af4f5e8e8c5ccbb5f8a",
            33184: "d535e274a02a252470a1",
            33213: "0df2b48837333bc56255",
            33238: "5feea0632edad2d25f33",
            33273: "440fb5eea6b6bf249f3a",
            33352: "89b1b747f97147a373d2",
            33641: "607d59109e1286972e92",
            3378: "18fe8e5aa62823795f89",
            34049: "3b43d0bcbd3527bf6156",
            34191: "d273c0e5a213d1048840",
            34424: "ea9dcc6a8ca6813bc9e0",
            34485: "686a2cdf3e086989d4ae",
            34627: "c9975dc9fd8f6e2347a4",
            34842: "c39b39e6abea76510540",
            34924: "79506dd21d7136f32716",
            34933: "75fbe52e45a029d5d40e",
            35247: "6d4cf1c0a9a9455bb411",
            35282: "9a7bde7704b8c5332cf1",
            35401: "448344019eaa6300e0f1",
            35641: "1a005516842e2654e34d",
            35665: "0e61ef31273f9ffd6dc5",
            358: "f5cb9baea94a90f9f957",
            35809: "17a3c93f66694ed48289",
            35822: "0c499a50a3c0d88fe8cc",
            35869: "40b05968a1dee169a3cc",
            36052: "d4c012fa37ac191be5fe",
            36278: "170c0d42857ef6a88f1a",
            36371: "cc38f4ebcddd066906e1",
            36494: "7e4a0e12a2f3008d5d36",
            36514: "2c0b46fb8601a597f1bb",
            36848: "9150829a00757c517aeb",
            36892: "a8119a0d46c4005bab05",
            36970: "ee1a7a67a3dd42cca69a",
            36995: "1fa2cda4522bea22f219",
            37052: "a95c3d72637acb255595",
            37066: "c0b61659ed0b42eae95c",
            37194: "635442131981f0e81a25",
            37220: "149fa4efbb6cd4a9eb0e",
            37357: "09c8dee7e667813d7ae0",
            37372: "858eec4fa1f5cecbe9da",
            37473: "ff0f1e96cf47a3e4a7b5",
            37483: "fe61ca3ba26aed1b155f",
            37558: "91fe7ac4242b036b1d6b",
            37564: "3002a4f915ff5d2fcd4d",
            37586: "b8cd372d18396439bb86",
            37655: "bc0b364b67caa86a4e11",
            37720: "7c9a4c5df3f4344a1ddd",
            37740: "17819ae3b92a24d01f08",
            37766: "b3c2e424cd487749d366",
            37839: "18fef821780a02318c00",
            37880: "14bee0eb26928ca48473",
            37969: "eaf3e3a168f7d6f3942d",
            38047: "4b63602d181f5d60e59d",
            38062: "83b13372c031891ac7d9",
            3807: "aa5ac255a0ead15fd3cf",
            38359: "97d37688409f75b89521",
            38413: "063399dd717494820ec5",
            38506: "77e801208b047a7b0f27",
            3865: "4dc39e38ba642dc16dd0",
            38651: "5fc409a6fd7e78f2cb88",
            38779: "14e749a16605235481c4",
            39009: "fa6e894faa3207cd7791",
            39010: "fb33f4f89bd28159e861",
            39143: "ef916b8d5e0f8465b12d",
            39248: "ab4c4ad686ab0d73f4f4",
            39285: "c4078fd9411784368b26",
            39305: "bcb62216cffa26948b65",
            394: "abe50f1ac9692ca6b214",
            39511: "546b7bacc5024bb2da7d",
            39612: "0e937ae974f42504732c",
            39627: "1fad9e16e314f11976b8",
            39648: "bcc516c1aa9117c844c4",
            3985: "43ff1ee97d3e776c8c34",
            40035: "b5bdfcff85b8933eec84",
            40096: "61432e98bbb6106d56ed",
            40157: "17f9f7f010febd145f65",
            40283: "f73d96b5efa10a48a300",
            40331: "c34278e4248f651a17f6",
            40390: "1d198bd2571ec289c369",
            40897: "eb371063aceb3631555f",
            410: "f7854346fd7c9df9a22b",
            41023: "5451919c8a046473531e",
            41128: "54bb4111312eff0b30ae",
            4117: "893abe37752adca99b27",
            41281: "f1e739fdeaf612d14afd",
            41350: "62cd2241601356e00fcf",
            41552: "05b2d9c30f94c92f7957",
            41588: "b7c2c55a816fcf5510da",
            41814: "19df4cc6507f9df3d6b9",
            41887: "af7dbeb823185c6ee36a",
            4189: "42abedad40bff25b3c4c",
            41947: "86397af66424e4d2df13",
            41953: "bbb63bd7ddd92da01450",
            41984: "7fb9287691dd43962268",
            42225: "101df31fc8bc559d1af6",
            42358: "618e4fbef855d0f25a06",
            42483: "680a47edb75f7d802464",
            42632: "3890271368d0272d4545",
            4266: "251126749aabde7cefcf",
            4267: "7b4908a3e6ab3b23efdc",
            42758: "d46e0551109b696713da",
            42892: "a95f17680a50fb9565c1",
            43057: "c46c41df7df0c400e4f6",
            43133: "ac6f3068790307d64ab4",
            43350: "582a99d381282a62a925",
            43353: "622b89c04e48e52096ab",
            43502: "59feae33d463f8f42662",
            43643: "41cad5a33f8fd1c5e26e",
            43782: "9f772faeeb6104c8f430",
            43903: "0b92397bd8311377482f",
            44153: "c19822e8f6f6a6f0caf2",
            4419: "a7332bfb175cda8bbbcb",
            44462: "1f055a8b3e55fa193305",
            44516: "bb565f462ee9bf5eab3f",
            44568: "7243213e3b6e1f6ffd54",
            44754: "07137bda6196865d4232",
            44798: "10ee67e84202709d671f",
            44808: "6e079179182b1129a0cb",
            44827: "75017f4569c7b2e179ad",
            44878: "e2bf78a9302badfa751a",
            45094: "a2e657f19775c6a693dc",
            45130: "bd2765b565f0f62ef2d1",
            4530: "ad4644811e0869f739bb",
            45576: "e74a6eef90af792faa33",
            45747: "5f4524c6c4d4ff48d580",
            45839: "b053ab328c99b57a04fc",
            46048: "0764302eefc090e96013",
            46161: "ddcc8a8e6752de1069ae",
            46369: "f7eee8828b39e32d39bc",
            46468: "0caf7d0ecfe447310e19",
            46826: "ab1d9f264ef73911f6da",
            46865: "7312ed5edebe32fc48ab",
            46882: "f5efe1054a2819f0cf94",
            46896: "95555f081c8438c3cf33",
            47034: "85f10d970436ba2bc47a",
            47055: "736b56228704ba53e0c8",
            47354: "8dd7b22042e1a8a32b1c",
            47423: "a33ea0db422fbf97be4a",
            47484: "2cc25cf4b2ca261afa71",
            47674: "e6a1dd73f308558330f3",
            47704: "362672096153e4bed5ed",
            47849: "fc5ec0d4023db4d9ba7e",
            48017: "03dda57dd73cc89fdba7",
            48092: "fc65ec9c12435c5d012b",
            48174: "644ea2985ce6c07a8108",
            48707: "50e875efa515fc391320",
            48748: "b748c2d9b4cc2319df0e",
            48934: "88cde2aaacae19318b9c",
            49131: "3c17652d8cd6b15a29ef",
            49277: "ad2f16499d75f1238cb6",
            49365: "64e916d669a8c3c0167d",
            49398: "148d3b6fdc6b45f80b37",
            49508: "9b1e1de3fd4a5e6679f8",
            49827: "ba04dedb2bf1cf1eca7c",
            4984: "50ad4e0b92ad0772808b",
            49946: "3e3bd71f1117b99f9117",
            5004: "fb90136282c2572891ea",
            50331: "4d1d5278ebf344eb2252",
            50498: "69c4039cae31d17595e3",
            50591: "5bbd3a7c5b18716400d8",
            5083: "dcdeb7202b14e9bd5d64",
            50872: "4fe9e3f0277b49f8b554",
            50929: "ff68397a3cfa9be050ea",
            50987: "b103dcd35c88afa72d77",
            51156: "81c382ceaf5b89afe675",
            51238: "aadca7c2964611d81a80",
            51373: "c79c267652d60fa877fe",
            51477: "ef9556551a4b6a72c18b",
            51529: "2f3cddfba779f3494172",
            51563: "c9df7a973bd3d8ff8bfa",
            51868: "e6132c2ddc2185819d6d",
            52110: "3278fcd8e029fa8e5504",
            5217: "28117d97ee8e5706cffb",
            522: "8deeefc9e3cb38f52d48",
            52590: "96ecb4785a6a0b0b8aae",
            52657: "e94eae0bd7aa9a87aa10",
            52680: "571dbcb1aae9b25af823",
            53162: "6a98e409f2aa2d55fe7c",
            53195: "03b0fa7900bf4541d253",
            53269: "8aca2e1a7929ab7f4b8d",
            53324: "95f84f386c53f7794977",
            53466: "a769cf9d8fff2ce2b930",
            53510: "3db1285290958819560e",
            53512: "37615b738776dcee9e92",
            53579: "1f7f76aa11fbd3ab7c64",
            53751: "a71837af9bf2761f5ac6",
            53809: "e201d87aca8095a5ccc3",
            53896: "a576a31c333f1a8f2b38",
            5396: "2a59271980fdc2c983aa",
            54021: "fa014ed84f5400c5062e",
            54076: "63722f2ff7b8fef5e405",
            54310: "dc84baba789551bd554c",
            54343: "8cfee7012629911d5252",
            5454: "7052840be49e5bffe6d5",
            54597: "cc982e5f5dade8d7fe2a",
            54626: "ad59644cc4fb6f6c1859",
            54668: "a061d19628cf2f79e128",
            54845: "78f4092625cd043e0012",
            54931: "6ee8e1b9d5d1433a520b",
            55224: "959fcf467662fed90044",
            55228: "a9fdff2d7af74e4413b2",
            5528: "7b3ddc1804a229ff1e4d",
            55481: "421c1f04f6866f78674d",
            55601: "5764beed743204832e87",
            55765: "f63128d0cc21e4fea977",
            55944: "abebac29b0f4934c1859",
            56035: "94c508f2b2d73fa69545",
            56049: "bd94deea1b1bb9c63fa9",
            5609: "8cad844646eeedccfcbc",
            561: "200944d085aeab393864",
            56236: "6d8ecadf4feceeebbec4",
            56268: "43e19d68952613f97ce1",
            56446: "cbcc459e2cb6e6fca60e",
            56496: "45aa10c7f04686b7c656",
            56630: "daeb83f90c776ffd5ed4",
            56826: "bfaa7de6e9285c97c303",
            56944: "bacf69a28b8bd347cd29",
            57046: "b23953665691c256648d",
            57085: "5790c8f0fbd08dbfe591",
            57372: "c4dd67236dec09289234",
            57387: "aef342d000f49aaf1762",
            57486: "218e0e2a047c8893981c",
            57539: "17fc604aa66648d52a00",
            57650: "6a0233a8bc36c1ab6b7f",
            5772: "9cb43d1618398a2c4448",
            57961: "8a62e6d8844efeec7796",
            58023: "54f264efeec92a9bad21",
            58153: "87dc123baf1996fe4423",
            58175: "08f3d79c4383a89452a6",
            58227: "277b2e79c54f8d85ec51",
            58286: "5002e059e0fdc0b557ee",
            58548: "b227674a662a386b5625",
            58621: "4b7ef8995d1288d139ec",
            5863: "3a7d6dbde0b490954538",
            58690: "bd6a0ae7f2337a04ec1d",
            5877: "b1edf5418582a44a5f1f",
            58903: "e56849d807e02a25a16b",
            58955: "c9cf803a45430e9c11b0",
            59128: "16e3fc8f57902807a5aa",
            59208: "8f5e0ff704926bb09c79",
            59281: "05c0088d396c50771da2",
            59286: "cae09aa5e5ca06182b2b",
            5945: "05e65a9929a30deab71b",
            5950: "4e30e323285f42700215",
            59500: "07254be0174fd9f56cbd",
            59526: "c0751860e4f61b75eafa",
            59642: "c4c24358bae3ccdaadad",
            59682: "678aff10dadf81641a7c",
            59716: "2ccafae8c069adec624f",
            59729: "364febdee284c6b55519",
            5996: "98c60214659c8f424d81",
            60005: "ca9f396c60abdb105a28",
            60079: "7317bdaa5f913fbafd0b",
            60082: "a48ce10f0fc3d630fe86",
            60133: "493ec4f2a0885b3caeb7",
            6022: "2a46ac7f79c67aabbaf2",
            60411: "389b7b8368d4887ee42b",
            6045: "9ba8c38413fe3a3bbc62",
            60592: "646c50d3db273e88437a",
            60618: "bb5ac51508d326cadaf7",
            60677: "064fefc7e211640db365",
            6074: "7cfd8a19700d59b27b05",
            60878: "d55589ff848dddbc9aa7",
            61214: "d3fb02edce1debbd7356",
            61366: "d0c31641d3e8814e2a80",
            61418: "fe5191bc161e79c6c999",
            61482: "ec83a01184950a81fa89",
            61536: "493b7cdca2c5118f515a",
            61613: "d66f9e5c06b972d7cba0",
            61624: "d196e09b8ace58b695b5",
            61672: "33b8904a15182b799e7c",
            61690: "26781d15d54f7539ff69",
            61939: "0dff902d2b2673f13130",
            62065: "19bf1fe4bd3e1888d878",
            62233: "8238ebe6f1ff1833ca03",
            62236: "a228930fe21ef11277a6",
            62318: "a9330304fd5f4893dd9e",
            62629: "f5975549da1435e02445",
            6284: "60209efa05580e49caf3",
            62856: "dde5fd25e55187257711",
            62903: "a9a56d321e4c94e1537f",
            62985: "bf31b8539c55265b8779",
            63007: "96d48307af88cfcec649",
            6310: "b9394892ddff9122404f",
            63629: "ac0230129f97d1154faf",
            63676: "0388861b9ec692ecc2ac",
            6368: "c7cf824fa676d0c1ab87",
            638: "a5a393002130c324801a",
            6380: "f3d2e4ed5fdf6d2ac08e",
            63958: "068d9f68badc67e9df32",
            64248: "dd7df8cde0c00cc8bad6",
            64409: "2c4feaf505d0ab000f68",
            64535: "edeef977067a726b40c3",
            64563: "89d8ff1bd47db6a0f4ee",
            64578: "88a49ff5036e010f0521",
            64908: "a6c1b265bfc4a55cf192",
            64941: "2a91432679c33889212e",
            65045: "0779ef589389b78c775a",
            65335: "055b3ea9e61962c8b723",
            65652: "2d009ec29a5cdc236655",
            65840: "eb0b8a056a08a677c95a",
            65866: "d3113e20c3a8412a46a5",
            65889: "ee9ce71773b16a4417ff",
            65892: "3485024c843f91b69bf8",
            65907: "a5f7112a823da5773b75",
            6595: "3d15a41f1df287fe9726",
            66050: "3b0315dbfaf59a9016f5",
            66071: "ce812155966f639f6f44",
            661: "ba04c9f4e870e88fa228",
            66462: "bad559efbf007e1d16c4",
            66902: "e5b9c2aa233ff84ed145",
            66915: "8f4db3f81eb6d5bb796a",
            66944: "8984d6ab2c92986846d9",
            66993: "678d9e2448b884d78cbc",
            67607: "7f38d32b46817d58d6e4",
            67753: "2214668b77f0c531a57d",
            67816: "18d6e666ee9cfc40fd35",
            67920: "6e32645144c9307f4659",
            68125: "80117d9e8b280dcdd88e",
            68130: "0e53e0e7240e9b385024",
            68449: "75668ec78e5a3b5ef0b5",
            68451: "ecb4c73498b8bab20f53",
            68535: "82eb906ff710f98fa544",
            68614: "9cb6ed9edd0bb0bb449b",
            68720: "f7e065d18d7c417eac27",
            68747: "fd953edf40335219fdb6",
            68784: "bd51624b5eed80845a06",
            68822: "05b3de68f6753ce114d9",
            6901: "54666ab4519efe1f1cd0",
            69015: "051c422ae229ac52ccef",
            69208: "651b6abeb710d540a1fd",
            69220: "6c5cec427477fa8950eb",
            69473: "870f5656db48ee9ee793",
            69495: "0e4525648300f879abf8",
            6957: "88bdbdc6614c9a66a2d6",
            69633: "18445458b7bbcdfbc133",
            69760: "c3ff928a1321ea5ed4bc",
            69788: "b007b43c3c2d8fcfa68c",
            69806: "2de796f2c5b8d87aed84",
            69923: "3f14f3328720621f232f",
            69935: "10607a60eaceb8b8f9e9",
            70036: "0cfb8c48283d1397aa25",
            70061: "9b94368a746eb486b857",
            70173: "0fa283a5d67792e09cdf",
            70253: "79754cae93ac469e7528",
            70528: "92ae52427143e3f2778c",
            70623: "3f5e6a9a3046ade4cdcf",
            70675: "f75fc4727111ece13f1c",
            70866: "d956e8b68d2a55d87654",
            710: "099a2503128ac163dd13",
            71035: "261b68cd539719401873",
            71053: "f11d1e47eac2c3ed466b",
            71196: "bf3935e2ac262842c928",
            71244: "e48c5fe380327fa452c2",
            71378: "14a16ffa2b45ad71c555",
            71517: "00b4be5149f181ca46e5",
            71953: "8db52f0a122de66f6475",
            72458: "84e45f7a8631a72e4680",
            72637: "f066b3693fb76524dc39",
            72642: "6db38163ddd0981d7dcc",
            72760: "61ec57d3d8be52e0ff10",
            72891: "9748f90e19d3511cdc2c",
            72920: "0656f16f6530c596102e",
            7302: "418442d96fff296a956a",
            73049: "a8d70f6706f755181696",
            73149: "cc905e5faef7472a9afc",
            73206: "412218c5d75538900e6c",
            73872: "6b2ef508092d14d2864f",
            73921: "4b8b54bbdfa0b620b992",
            7402: "71a7ea5baffb9a9ba7ba",
            74112: "ed3b910744fcf2104571",
            74194: "306476330b881c21d50b",
            74203: "fd94551871de2c19c473",
            74294: "f9d7091f118c4240c2c8",
            74300: "3a49554d629c189ef213",
            74459: "975c4e511656c08d4121",
            74543: "dac51658a3a13a1b847f",
            74590: "fb441072801a060f5b2b",
            74602: "52259d090a78a5b7f4fa",
            74673: "e5475b314c05095f84ab",
            74753: "a00ef43db6fca6ba8032",
            75118: "23ae819f3104942b8909",
            75301: "f27b46b7a7167ac40bc7",
            75409: "5f882ace3736e41191c0",
            75441: "6168de2ecc44f35049ea",
            75475: "931ff457ded5738c7035",
            75613: "2a9bdb2b5d6f99d9703d",
            7573: "e072a0aa29890d46e227",
            7584: "ab2706cc048c7ec26227",
            75843: "8d8aecbfe8ae5b512e98",
            7590: "32b51a96e6f493c9ea2c",
            75994: "fa8e96822abb8a396b5c",
            76142: "b8d860a67bd3b3a3407f",
            7620: "7aa673c6814baebc2aec",
            76233: "13079855a3908fad6596",
            76241: "529ae754e3e0af645336",
            7649: "880ecf25ded4876f0ebb",
            7654: "a4c3250f54f6b7bf2ff0",
            76540: "c27eb80dd094d60a06b5",
            76731: "96414d53a5392814b38d",
            76815: "5e850cf8ae79210b554a",
            7685: "487ae6b5b7f6910516c4",
            76888: "d4876d2baed23a95c8f9",
            77117: "debd13ce9e268afe993a",
            77122: "0360ece83ec7c653896d",
            7717: "9d0a6d286b89e647190a",
            7728: "48a6bb6d8bdf68899187",
            77485: "4c806b0b2eaaf525952c",
            77578: "39fd26e45be24ca369e9",
            77721: "bfad4950b1898886ebd0",
            77800: "3b56111f1e3c8808e5db",
            77875: "2d7905bf557d248cde0c",
            77927: "7bdcb7e77c0828e437ed",
            78073: "69933356bf93e49cfe9d",
            78221: "37761aae534af0ead536",
            78273: "6729eddf9a2b8725b4e5",
            78587: "b094a1f7799701ec4edb",
            78607: "02a92c93fcf5f333dcd2",
            78650: "3a93a3e614d44167558d",
            78670: "bb65dba8fdf503966151",
            78704: "d0f63e418fb2ad1e210e",
            78712: "e9c3197dfe4f2f49fdc0",
            78786: "ffc48004273a9c78d681",
            7907: "0be63784edb2d6fa62ad",
            79267: "fe9a2dd5e0c195735316",
            79457: "842e08db8f99ebbe46db",
            79477: "85935d2b563d64647a37",
            79504: "add26409091531f0e5ba",
            7954: "b39153fee4c5eb4847eb",
            79589: "ad9c0b3455419e832a6c",
            79618: "49da5f7d58953b701b03",
            79695: "074df5a416a48e9baf29",
            79764: "6ef7a23b9dc6cdb59177",
            79921: "98d673613475c4e80152",
            80026: "9b2caa7dad2840554543",
            804: "dec150de4f839bcc1c4d",
            80404: "81a2485e192b142c55f6",
            80451: "fa58428d9c9dcd8a0000",
            80493: "64c136a4e79081f6657a",
            80954: "f489127fbab8489a6458",
            80980: "59d6655e20173b0b6ed4",
            8102: "76f2306a3ae24d16c8c2",
            81124: "4b69a4fdcbdc7cf8833e",
            81247: "fa3d219e9ac599aca65b",
            81352: "97a9a101dec9400b4550",
            81358: "be815bee85fa303bc006",
            81539: "08cef8260094b3479913",
            81811: "a6ffb1be5bca96669d91",
            81843: "f01f16f028eed2cbc6ae",
            81975: "c9264e3a555cb3baf449",
            821: "16a14374f464e1e6a89d",
            82143: "18cd5244b76ca6868ce7",
            82560: "a52817a1951d178e7b0a",
            82634: "885f9ad9d871b93fce00",
            8286: "87d1a6996a78dc2ffa45",
            82961: "1c2f0e7ec2a9d0c0aeb9",
            83051: "e1fd6b458f8159dc1327",
            83081: "58d728b46ff3143586cb",
            83264: "9df394d9818427205c59",
            83323: "ca5c861bf00bc77c4f1a",
            83331: "b569f53928b9db095553",
            83536: "ee215ecb4a100b4e1398",
            83613: "44e02b8db55614b61686",
            83646: "7905c3df6f99ddcafaff",
            8366: "2c7525b1c78aff0dcba1",
            83774: "bd736f60b7a68012ef2c",
            83816: "f4f6a1947cd0325d47de",
            83942: "a78d86292f4ba3891d35",
            84239: "b01bb936dcacd99667c7",
            84259: "d8c00364d3e957e77f09",
            84385: "00f05d17200ccf67a8cc",
            84399: "9a71aba6d8414db39c00",
            84482: "1c51afae1355d69096f4",
            84509: "3ea1488aa2468a11224b",
            84518: "6f765d1621bc2834e081",
            84686: "7b3ac41b08d46779f212",
            84722: "36458842b1336411e951",
            84725: "1149cba2ee75911dcd2f",
            84778: "f631f0259f226d5dd531",
            85044: "caf327fe62fc2ed6621a",
            85093: "d981c75c456e330a9938",
            85100: "82243c61640bd6b6689a",
            85281: "79a4ac78181d0140a90a",
            85342: "11be1f873cd5d61a5a8c",
            85552: "9418238af66d57b38a5a",
            85559: "e4dfe37ec3eefc0cea4e",
            85668: "9d5189fd49ef6d690054",
            85828: "6e97d6252e702fba0db2",
            85885: "cfe7189ce3de1e11eb8a",
            86047: "6a226fa003819501957b",
            86060: "4767c4cafd860c7be0a3",
            86200: "0bda52e7b32a476cadac",
            86248: "d005f40a88ef8360c2a4",
            86302: "df98184eddfe5b5987aa",
            8631: "7ada097d4ac85091b0a2",
            87178: "361081ca5e4a9261b94f",
            87200: "ccbaaed5ca508c0e9188",
            87233: "cadfb59004cd48cdc9e1",
            87549: "ed76cae51ae048491c94",
            87624: "eba8754cab2c48ab4d27",
            8790: "0849aa769826dc2b0922",
            87983: "6ee81809817b782681e2",
            88099: "ff2b84ef0ded4a23d3cb",
            88358: "7e6c709e43dc9a3577bb",
            88571: "18d70eea9eb739a8f13a",
            88870: "eb653ba9326f6e2105a1",
            8895: "d3e8d70bb3d951d9e63d",
            89069: "d25fbdda86fd3a044344",
            8926: "b815a438c9d719390387",
            89289: "e382cf0fdad7883f63a9",
            89552: "830e64f7dd42b75068ed",
            89582: "5a399375f5e0080dabfd",
            8965: "ecadb7f1bc19905ecb1f",
            89675: "d0d1081232942b5b2901",
            89715: "a3794598e46fd920f25f",
            89792: "b318bd0c85cfaf3d9b70",
            89873: "f0b82b00e135e3be411c",
            89890: "43d2ff466363520712d6",
            9007: "d9e1b93599c801ec2723",
            90212: "4ae7208f1a5879907bb7",
            90220: "83f7d1e7e7a9b3f92c7e",
            90424: "56018d94a0601ad87c2b",
            90508: "7af5df956ddb00e4cce5",
            90542: "a60185067c521c0fa6c7",
            90688: "6939e528ce9ff9a8efdb",
            91007: "825c6fb7049ea87ebed0",
            91032: "c3dd26c8511cfb91f41e",
            91199: "c0cae60a32dd8c8efd68",
            91315: "f4cad4415f65f2b684ad",
            91789: "453f7f74e62fe95c5d56",
            92006: "570c713eac43af90f1f9",
            92223: "56a5e5a759d087feebf0",
            92339: "f438c45d5251c0c4e277",
            92401: "8e7e69ed8b2cabd96083",
            92446: "56abf309aed24dd22c0c",
            92575: "a4133d71989969387f1a",
            92695: "1e249025519d2bbf764e",
            92780: "70ed127226a0d781f747",
            92795: "da9127e02fba002c2241",
            92893: "f5116555c0137308c597",
            93198: "290e2929513e7a940723",
            93288: "8d575f23e86db4af249e",
            9343: "f5e6b060a32e7507a689",
            9347: "5843c594525d2ee290d8",
            9354: "42ef34fe6bf471c38949",
            93554: "a65c693b35e0ef70d96d",
            9362: "bdd8cabd20bb676ece56",
            93626: "72b0fce489a916221b3c",
            93776: "d40271b9c176c2f88b93",
            94005: "bcb7673a44d143b7c446",
            94064: "dcc28552938264034b65",
            94262: "de42dd2d88db27b0cab4",
            94566: "370f18b750641117f37d",
            94889: "06de3a26f81350377899",
            94912: "a986bb025bcf65e4c199",
            95003: "296e2cfcea7c91fee498",
            95019: "04f53f9291dbfc3424b8",
            95136: "1fd8107340f7b48f3245",
            95257: "d08919d52b279ed84e09",
            95307: "bee8b56805d6dafe473a",
            95393: "c0e599a3aaf92f662139",
            95422: "090a7f26a024b44a455f",
            95468: "c7b38445c3ab530ff50a",
            95480: "ef43cbaad11578e38a98",
            9558: "a23c9fb93bd84860c7a0",
            9573: "1ebbf25190d6dc9a0828",
            958: "1a7e9131f3e3fb08db28",
            95925: "bac284200f5a8e343d71",
            95937: "619731c5ef27b4939fc0",
            95962: "8b1e2a1ee946a30db755",
            9606: "853ad202d0b247f7b7ce",
            96246: "bf85f30270a852129456",
            96307: "c0949e2a9e374a792474",
            96473: "70feb7a4b31b9680a55b",
            96645: "3bd760934060cf6caab9",
            9738: "2f0d6026b551f7512fb4",
            97455: "1fbf73fc066c5f51a384",
            97516: "29e91b51d4b9995f202c",
            97656: "b0177ca8a971c464b404",
            9766: "43df9f07f4918b3cd3b6",
            97674: "2a3fc73c7ebf83928560",
            98105: "8f60eb4f9aff347dc5c3",
            98137: "f34ab319f716d97e35f1",
            98335: "3a4c10402d3dbf4f8d95",
            98466: "dfc306d25b4e665a70e2",
            98538: "b62c64d42fcfe628238c",
            98570: "ba63281259841c605664",
            98747: "755adb2c7ee0e92ed362",
            98799: "e4380a2e1668ded3f297",
            98880: "f6365e6452a42a5bc1ee",
            98920: "0aec8b4c0fa402ac0d3d",
            98952: "8ee42374cb4350864e1d",
            99339: "2289f1ef3358b899ebe2",
            99414: "14f564f265dc4ba92c72",
            99450: "0d5a49141310463468ef",
            99617: "253aada650dabe9ef1af",
            99694: "0b1d52616caba9c4b2c0",
            99809: "a9dc04cfa95d544dd387",
            99857: "24013ca1bdbe39916a62",
            99905: "076afdbf67df5ba4b964",
            99989: "8e12d2bb509369526faa"
        })[e] + ".js"
    }, s.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), s.hmd = function(e) {
        return !(e = Object.create(e)).children && (e.children = []), Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: function() {
                throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }), e
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i = {}, o = "discord_app:", s.l = function(e, t, a, d) {
        if (i[e]) {
            i[e].push(t);
            return
        }
        if (void 0 !== a) {
            for (var n, c, r = document.getElementsByTagName("script"), f = 0; f < r.length; f++) {
                var l = r[f];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == o + a) {
                    n = l;
                    break
                }
            }
        }!n && (c = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, s.nc && n.setAttribute("nonce", s.nc), n.setAttribute("data-webpack", o + a), n.src = e), i[e] = [t];
        var u = function(t, a) {
                n.onerror = n.onload = null, clearTimeout(b);
                var d = i[e];
                if (delete i[e], n.parentNode && n.parentNode.removeChild(n), d && d.forEach(function(e) {
                        return e(a)
                    }), t) return t(a)
            },
            b = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: n
            }), 12e4);
        n.onerror = u.bind(null, n.onerror), n.onload = u.bind(null, n.onload), c && document.head.appendChild(n)
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.nmd = function(e) {
        return e.paths = [], !e.children && (e.children = []), e
    }, r = [], s.O = function(e, t, a, d) {
        if (t) {
            d = d || 0;
            for (var n = r.length; n > 0 && r[n - 1][2] > d; n--) r[n] = r[n - 1];
            r[n] = [t, a, d];
            return
        }
        for (var c = 1 / 0, n = 0; n < r.length; n++) {
            for (var t = r[n][0], a = r[n][1], d = r[n][2], i = !0, o = 0; o < t.length; o++) c >= d && Object.keys(s.O).every(function(e) {
                return s.O[e](t[o])
            }) ? t.splice(o--, 1) : (i = !1, d < c && (c = d));
            if (i) {
                r.splice(n--, 1);
                var f = a();
                void 0 !== f && (e = f)
            }
        }
        return e
    }, s.p = "/assets/", s.v = function(e, t, a, d) {
        var n = fetch(s.p + "" + a + ".module.wasm"),
            c = function() {
                return n.then(function(e) {
                    return e.arrayBuffer()
                }).then(function(e) {
                    return WebAssembly.instantiate(e, d)
                }).then(function(t) {
                    return Object.assign(e, t.instance.exports)
                })
            };
        return n.then(function(t) {
            return "function" == typeof WebAssembly.instantiateStreaming ? WebAssembly.instantiateStreaming(t, d).then(function(t) {
                return Object.assign(e, t.instance.exports)
            }, function(e) {
                if ("application/wasm" !== t.headers.get("Content-Type")) return console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e), c();
                throw e
            }) : c()
        })
    }, ! function() {
        var e = {
                10586: 0,
                12633: 0,
                17764: 0,
                24217: 0,
                24321: 0,
                2797: 0,
                43455: 0,
                58661: 0,
                62734: 0,
                64787: 0,
                70397: 0,
                84471: 0
            },
            t = "discord_app",
            a = "data-webpack-loading",
            d = function(e, d, n, c) {
                var i, o, r = "chunk-" + e;
                if (!c) {
                    for (var f = document.getElementsByTagName("link"), l = 0; l < f.length; l++) {
                        var u = f[l],
                            b = u.getAttribute("href") || u.href;
                        if (b && !b.startsWith(s.p) && (b = s.p + (b.startsWith("/") ? b.slice(1) : b)), "stylesheet" == u.rel && (b && b.startsWith(d) || u.getAttribute("data-webpack") == t + ":" + r)) {
                            i = u;
                            break
                        }
                    }
                    if (!n) return i
                }!i && (o = !0, (i = document.createElement("link")).setAttribute("data-webpack", t + ":" + r), i.setAttribute(a, 1), i.rel = "stylesheet", i.href = d);
                var h = function(e, t) {
                    if (i.onerror = i.onload = null, i.removeAttribute(a), clearTimeout(p), t && "load" != t.type && i.parentNode.removeChild(i), n(t), e) return e(t)
                };
                if (i.getAttribute(a)) {
                    var p = setTimeout(h.bind(null, void 0, {
                        type: "timeout",
                        target: i
                    }), 12e4);
                    i.onerror = h.bind(null, i.onerror), i.onload = h.bind(null, i.onload)
                } else h(void 0, {
                    type: "load",
                    target: i
                });
                return c ? c.parentNode.insertBefore(i, c) : o && document.head.appendChild(i), i
            };
        s.f.css = function(t, a) {
            var n = s.o(e, t) ? e[t] : void 0;
            if (0 !== n) {
                if (n) a.push(n[2]);
                else if (/^(4923|9938)7$/.test(t)) {
                    var c = new Promise(function(a, d) {
                        n = e[t] = [a, d]
                    });
                    a.push(n[2] = c);
                    var i = s.p + s.k(t),
                        o = Error();
                    d(t, i, function(a) {
                        if (s.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                            if ("load" !== a.type) {
                                var d = a && a.type,
                                    c = a && a.target && a.target.src;
                                o.message = "Loading css chunk " + t + " failed.\n(" + d + ": " + c + ")", o.name = "ChunkLoadError", o.type = d, o.request = c, n[1](o)
                            } else n[0]()
                        }
                    })
                } else e[t] = 0
            }
        };
        var n = function(t, a) {
                var d = a[0];
                t && t(a);
                for (var n = 0; n < d.length; n++) void 0 === e[d[n]] && (e[d[n]] = 0)
            },
            c = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [];
        c.forEach(n.bind(null, 0)), c.push = n.bind(null, c.push.bind(c))
    }(), ! function() {
        s.b = document.baseURI || self.location.href;
        var e = {
            12633: 0
        };
        s.f.j = function(t, a) {
            var d = s.o(e, t) ? e[t] : void 0;
            if (0 !== d) {
                if (d) a.push(d[2]);
                else {
                    var n = new Promise(function(a, n) {
                        d = e[t] = [a, n]
                    });
                    a.push(d[2] = n);
                    var c = s.p + s.u(t),
                        i = Error();
                    s.l(c, function(a) {
                        if (s.o(e, t) && (0 !== (d = e[t]) && (e[t] = void 0), d)) {
                            var n = a && ("load" === a.type ? "missing" : a.type),
                                c = a && a.target && a.target.src;
                            i.message = "Loading chunk " + t + " failed.\n(" + n + ": " + c + ")", i.name = "ChunkLoadError", i.type = n, i.request = c, d[1](i)
                        }
                    }, "chunk-" + t, t)
                }
            }
        }, s.O.j = function(t) {
            return 0 === e[t]
        };
        var t = function(t, a) {
                var d = a[0],
                    n = a[1],
                    c = a[2],
                    i, o, r = 0;
                if (d.some(function(t) {
                        return 0 !== e[t]
                    })) {
                    for (i in n) s.o(n, i) && (s.m[i] = n[i]);
                    if (c) var f = c(s)
                }
                for (t && t(a); r < d.length; r++) o = d[r], s.o(e, o) && e[o] && e[o][0](), e[o] = 0;
                return s.O(f)
            },
            a = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [];
        a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
    }();
    var u = s.O(void 0, ["49237", "99387", "24217", "62734", "43455", "10586", "64787", "2797", "58661", "17764", "84471", "70397", "24321"], function() {
        return s("650204")
    });
    s.O(u)
}();
//# sourceMappingURL=web.d30c8bedab19a7a7f6ee.js.map