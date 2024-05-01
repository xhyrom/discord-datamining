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
                    c = a("120356"),
                    i = a.n(c),
                    o = a("715702"),
                    r = a("273535"),
                    f = a("26673");
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
                    createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("23755"), a.e("61613"), a.e("48375"), a.e("81539"), a.e("57878"), a.e("67535"), a.e("95393"), a.e("56630"), a.e("6380"), a.e("87983"), a.e("8739"), a.e("90508"), a.e("58286"), a.e("41947"), a.e("71697"), a.e("3084"), a.e("6857"), a.e("38779"), a.e("25464"), a.e("30243"), a.e("23404"), a.e("78690"), a.e("74526"), a.e("18101"), a.e("11256"), a.e("91632"), a.e("5257"), a.e("4436")]).then(a.bind(a, "601564")),
                    webpackId: "601564"
                })
            },
            155221: function(e, t, a) {
                "use strict";
                a.r(t), a.d(t, {
                    Overlay: function() {
                        return W
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
                    v = a("626135"),
                    R = a("361207"),
                    w = a("690032"),
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
                        createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("24267"), a.e("23755"), a.e("30386"), a.e("61613"), a.e("36385"), a.e("63958"), a.e("48375"), a.e("81539"), a.e("57878"), a.e("67535"), a.e("95393"), a.e("39285"), a.e("14262"), a.e("56630"), a.e("70866"), a.e("6380"), a.e("87983"), a.e("8739"), a.e("43643"), a.e("90508"), a.e("58286"), a.e("7590"), a.e("90687"), a.e("41947"), a.e("71697"), a.e("3084"), a.e("37766"), a.e("53466"), a.e("6857"), a.e("22036"), a.e("38779"), a.e("25464"), a.e("30243"), a.e("23404"), a.e("78690"), a.e("48226"), a.e("74526"), a.e("18101"), a.e("37220"), a.e("33361"), a.e("61447"), a.e("91315"), a.e("80026"), a.e("80954"), a.e("62856"), a.e("37839"), a.e("67256"), a.e("11256"), a.e("49508"), a.e("91632"), a.e("88396"), a.e("5257"), a.e("47849"), a.e("95468"), a.e("93829")]).then(a.bind(a, "457094")),
                        webpackId: "457094",
                        name: "ViewsWithMainInterface",
                        memo: !0,
                        id: "457094"
                    }),
                    V = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("66635"), a.e("73422"), a.e("75492"), a.e("48375"), a.e("57878"), a.e("67535"), a.e("95393"), a.e("19878"), a.e("90687"), a.e("10778"), a.e("52030"), a.e("85514"), a.e("76990"), a.e("40268")]).then(a.bind(a, "822699")),
                        webpackId: "822699",
                        name: "ViewsWithAuth"
                    }),
                    G = (0, _.makeLazy)({
                        createPromise: () => a.e("32640").then(a.bind(a, "285773")),
                        webpackId: "285773",
                        name: "ViewsWithOAuth2"
                    }),
                    H = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("81539"), a.e("56630"), a.e("6380"), a.e("71697"), a.e("18101"), a.e("11256"), a.e("47849"), a.e("40786")]).then(a.bind(a, "317281")),
                        webpackId: "317281",
                        name: "ViewsWithUnauthenticatedApplicationDirectory"
                    }),
                    F = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("10508")]).then(a.bind(a, "549652")),
                        webpackId: "549652",
                        name: "BrowserHandoff"
                    }),
                    B = (0, _.makeLazy)({
                        createPromise: () => a.e("76888").then(a.bind(a, "573276")),
                        webpackId: "573276",
                        name: "MobileWebHandoffFallback"
                    }),
                    W = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("23755"), a.e("30386"), a.e("61613"), a.e("36385"), a.e("48375"), a.e("81539"), a.e("57878"), a.e("67535"), a.e("95393"), a.e("39285"), a.e("14262"), a.e("56630"), a.e("70866"), a.e("6380"), a.e("87983"), a.e("8739"), a.e("43643"), a.e("90508"), a.e("58286"), a.e("7590"), a.e("90687"), a.e("41947"), a.e("71697"), a.e("3084"), a.e("37766"), a.e("53466"), a.e("6857"), a.e("22036"), a.e("38779"), a.e("25464"), a.e("30243"), a.e("23404"), a.e("78690"), a.e("74526"), a.e("18101"), a.e("37220"), a.e("33361"), a.e("61447"), a.e("91315"), a.e("80954"), a.e("62856"), a.e("37839"), a.e("67256"), a.e("88396"), a.e("69240")]).then(a.bind(a, "290161")),
                        webpackId: "290161",
                        name: "Overlay"
                    }),
                    K = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("18824"), a.e("75843")]).then(a.bind(a, "430075")),
                        webpackId: "430075",
                        name: "SuspendedUserSafetyHubPage"
                    }),
                    z = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("19878"), a.e("28296")]).then(a.bind(a, "630107")),
                        webpackId: "630107",
                        name: "QuestsLandingPage"
                    }),
                    Y = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("99387"), a.e("47228")]).then(a.bind(a, "531338")),
                        webpackId: "531338",
                        name: "ConnectionsAuthorizeContinue"
                    }),
                    q = () => (0, d.jsx)(j, {}),
                    X = new Set([N.Routes.LOGIN, N.Routes.LOGIN_HANDOFF, N.Routes.INVITE_LOGIN(":inviteCode"), N.Routes.GIFT_CODE_LOGIN(":giftCode"), N.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode")]);

                function Z(e, t) {
                    return t ? e.filter(e => !X.has(e)) : e
                }
                class Q extends n.Component {
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
                                path: Z([N.Routes.LOGIN, N.Routes.REGISTER, N.Routes.INVITE(":inviteCode"), N.Routes.INVITE_LOGIN(":inviteCode"), N.Routes.GIFT_CODE(":giftCode"), N.Routes.GIFT_CODE_LOGIN(":giftCode"), N.Routes.RESET], C.CONFERENCE_MODE_ENABLED),
                                component: V
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
                                path: Z([N.Routes.LOGIN, N.Routes.LOGIN_HANDOFF, N.Routes.REGISTER, N.Routes.BILLING_PREFIX, N.Routes.BILLING_PROMOTION_REDEMPTION(":code"), N.Routes.INVITE(":inviteCode"), N.Routes.INVITE_LOGIN(":inviteCode"), N.Routes.GIFT_CODE(":giftCode"), N.Routes.GIFT_CODE_LOGIN(":giftCode"), N.Routes.GUILD_TEMPLATE(":guildTemplateCode"), N.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"), N.Routes.DISABLE_EMAIL_NOTIFICATIONS, N.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, N.Routes.RESET, N.Routes.REPORT, N.Routes.REPORT_SECOND_LOOK], C.CONFERENCE_MODE_ENABLED),
                                component: V
                            }), t ? null : (0, d.jsx)(o.Route, {
                                path: N.Routes.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                                component: V
                            }), t ? null : (0, d.jsx)(o.Route, {
                                path: N.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
                                component: V
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
                                component: z,
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
                                component: F
                            }), (0, d.jsx)(m.default, {
                                path: N.Routes.MOBILE_WEB_HANDOFF,
                                component: B
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
                                path: N.Routes.CONNECTIONS_AUTHORIZE_CONTINUE(":type"),
                                component: Y
                            }), (0, d.jsx)(m.default, {
                                path: N.Routes.CONNECTIONS(":type"),
                                component: M
                            }), (0, d.jsx)(m.default, {
                                path: N.Routes.DOWNLOAD_QR_CODE_REDIRECT,
                                render: () => {
                                    var e, t, a;
                                    let d = null === (e = v.default.getSuperProperties()) || void 0 === e ? void 0 : e.os,
                                        n = (0, c.parse)((null !== (a = window.location.search) && void 0 !== a ? a : "").substr(1)),
                                        i = null === (t = n.referring_location) || void 0 === t ? void 0 : t.toString();
                                    return ("iOS" === d || "Android" === d) && v.default.track(N.AnalyticEvents.DOWNLOAD_APP, {
                                        platform: d,
                                        ptb: !1,
                                        released: !0,
                                        has_e_mail: "true" === n.has_e_mail,
                                        referring_location: i,
                                        qr_code: !0
                                    }), window.location.href = (0, R.getMobileDownloadLink)(null != i && "" !== i ? i : "qr_code", d), null
                                }
                            }), (0, d.jsx)(m.default, {
                                path: N.Routes.OPEN_APP_FROM_EMAIL,
                                render: () => {
                                    var e, t;
                                    let a = null === (e = v.default.getSuperProperties()) || void 0 === e ? void 0 : e.os,
                                        n = (0, w.getOpenAppFromEmailDestinations)(null !== (t = window.location.search) && void 0 !== t ? t : "");
                                    if ("iOS" !== a && "Android" !== a) return (0, d.jsx)(o.Redirect, {
                                        to: null != n.desktop ? "".concat(n.desktop.pathname).concat(n.desktop.search) : N.Routes.APP
                                    });
                                    {
                                        let e = (0, R.getMobileDownloadLink)("app_open_from_email", a, n.mobile),
                                            t = (0, l.parseDynamicLink)(e);
                                        null != t && v.default.track(N.AnalyticEvents.DEEP_LINK_CLICKED, {
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
                                component: G
                            }), t ? null : (0, d.jsx)(o.Route, {
                                path: [N.Routes.ACCOUNT_STANDING],
                                component: K
                            }), t ? null : (0, d.jsx)(o.Route, {
                                path: N.Routes.APPLICATION_STORE,
                                component: p.default
                            }), t ? null : (0, d.jsx)(o.Route, {
                                path: [N.Routes.APPLICATION_DIRECTORY_SEARCH, N.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section?"), N.Routes.APPLICATION_DIRECTORY],
                                component: H
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
                    return (0, d.jsx)(Q, {
                        ...e,
                        skipsSettingDefaultPageTitle: t
                    })
                })
            },
            650204: function(e, t, a) {
                "use strict";
                a.r(t), a("610138"), a("216116"), a("78328"), a("815648"), a("47120"), a("177593");
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
                    v = a("534713"),
                    R = a("358085"),
                    w = a("703656"),
                    S = a("284737"),
                    A = a("473159"),
                    N = a("846519"),
                    C = a("579806"),
                    D = a("896361"),
                    P = a("892254");
                a("910281");
                var L = a("688334"),
                    y = a("44163"),
                    M = a("710845");
                let k = 5 * a("70956").default.Millis.MINUTE,
                    U = document.getElementById("app-mount");
                s()(null != U, "Could not find app-mount"), U.className = __OVERLAY__ ? "" : L.appMount;
                let x = (0, f.createRoot)(U),
                    j = {
                        "/oauth2/authorize": v.default
                    },
                    V = e => x.render((0, r.jsx)(P.default, {
                        children: (0, r.jsx)(D.default, {
                            children: (0, r.jsx)(e, {})
                        })
                    }));
                if (null != C.default) {
                    null === (d = C.default.setUncaughtExceptionHandler) || void 0 === d || d.call(C.default, (e, t) => {
                        setImmediate(() => {
                            throw E.default.captureCrash(e), e
                        })
                    });
                    let e = null === (n = (c = C.default.remoteApp).getVersion) || void 0 === n ? void 0 : n.call(c),
                        t = null === (i = (o = C.default.remoteApp).getBuildNumber) || void 0 === i ? void 0 : i.call(o),
                        a = {};
                    null != C.default.remoteApp.getModuleVersions && (a = C.default.remoteApp.getModuleVersions()), E.default.setExtra({
                        hostVersion: e,
                        moduleVersions: a
                    }), E.default.setTags({
                        nativeBuildNumber: null == t ? void 0 : t.toString()
                    });
                    let r = Object.keys(a).filter(e => null != a[e]).map(e => "".concat(e, ": ").concat(a[e])).join(", ");
                    new M.default().log("[NATIVE INFO] host ".concat(e, ", modules: ").concat(r, ", build: ").concat(t)), O.default.initializeExitHook()
                }
                if ((0, A.setupWindow)(window), __OVERLAY__) V(u.default.Overlay);
                else if (null != window.require && null == window.DiscordNative) V(u.default.OutdatedClient);
                else {
                    if (document.addEventListener("scroll", e => e.preventDefault()), R.isPlatformEmbedded) {
                        window.onbeforeunload = () => O.default.beforeUnload(), O.default.on("HELP_OPEN", () => window.open(g.default.getCommunityURL()));
                        let e = new N.DelayedCall(k, () => O.default.purgeMemory());
                        O.default.on("MAIN_WINDOW_BLUR", () => {
                            e.delay(), O.default.setFocused(!1), (0, S.focus)(window, !1)
                        }), O.default.on("MAIN_WINDOW_FOCUS", () => {
                            e.cancel(), O.default.setFocused(!0), (0, S.focus)(window, !0)
                        }), O.default.on("MAIN_WINDOW_PATH", function(e, t, a) {
                            var d;
                            let n = null != a ? new URLSearchParams(a) : null;
                            (null === (d = j[t]) || void 0 === d || !d.call(j, n)) && (0, w.transitionTo)(t)
                        }), O.default.on("MAIN_WINDOW_HIDDEN", () => {
                            (0, S.hidden)(window)
                        })
                    }
                    p.default.initialize(), b.default.init(), _.default.init(), y.default.init(), h.default.initialize(), I.default.initialize(), T.default.initialize(), m.initialize(), V(u.default.App)
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
                        return v
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
                class v extends n.PureComponent {
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
                    v = new u.Timeout,
                    R = !1,
                    w = window.document.createElement("canvas");
                w.width = 512, w.height = 288;
                let S = w.getContext("2d");

                function A() {
                    v.stop(), null != d && (l.default.removeSink(d, T), d = null)
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
                    if (!R) try {
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
                            w.width = d, w.height = n;
                            let c = window.document.createElement("canvas"),
                                i = c.getContext("2d");
                            c.width = e.width, c.height = e.height;
                            let o = new ImageData(e.data, e.width, e.height);
                            return null == i || i.putImageData(o, 0, 0), new Promise(t => {
                                null == S || S.drawImage(c, 0, 0, e.width, e.height, 0, 0, d, n), t()
                            })
                        }(a);
                        let n = w.toDataURL("image/jpeg");
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
                        new h.default("ApplicationStreamPreviewUploadManager").error("Failed to post stream preview", t), d === e && v.start(6e4, a);
                        return
                    }
                    d === e && (R ? v.start(6e4, a) : v.start(3e5, a))
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
                            R = t === I.MediaEngineVideoStates.PAUSED || !1
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
            534713: function(e, t, a) {
                "use strict";
                a.r(t), a.d(t, {
                    default: function() {
                        return n
                    }
                });
                var d = a("69580");

                function n(e) {
                    var t, a, n, c;
                    let i = null == e ? void 0 : e.get("client_id"),
                        o = null == e ? void 0 : null === (t = e.get("scope")) || void 0 === t ? void 0 : t.split(" "),
                        r = null == e ? void 0 : e.get("state"),
                        f = null == e ? void 0 : e.get("redirect_uri"),
                        l = null == e ? void 0 : e.get("response_type"),
                        s = null !== (a = null == e ? void 0 : e.get("nonce")) && void 0 !== a ? a : void 0,
                        u = null !== (n = null == e ? void 0 : e.get("code_challenge")) && void 0 !== n ? n : void 0,
                        b = null !== (c = null == e ? void 0 : e.get("code_challenge_method")) && void 0 !== c ? c : void 0;
                    return null == i || null == o || null == r || null == f || null == l || ((0, d.openOAuth2Modal)({
                        clientId: i,
                        scopes: o,
                        redirectUri: f,
                        state: r,
                        responseType: l,
                        nonce: s,
                        codeChallenge: u,
                        codeChallengeMethod: b
                    }), !0)
                }
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
                    o = a("215355"),
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
                            mergeTabs: _
                        } = (0, o.getMergedTabsExperiment)({
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
                                !(0, u.isVoicePanelEnabled)() && (0, l.navigateToChannel)({
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
                class v extends l.default {
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
                t.default = new v
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
                        if (null == e) return;
                        let t = 0 === Math.floor(1e3 * Math.random());
                        e.forEach(e => {
                            "analytics" === e.type ? e.name === r.AnalyticEvents.UPDATER_METRICS_DOWNLOAD || e.name === r.AnalyticEvents.UPDATER_METRICS_INSTALL || e.name === r.AnalyticEvents.UPDATER_METRICS_COMBINED || e.name === r.AnalyticEvents.UPDATER_METRICS_TRANSITION_STATUS ? t && n.default.track(e.name, e.data) : console.warn("Unknown updater analytic event ".concat(e.name)) : this._tracker.trackEvent(e)
                        }), this._tracker.submissionReady() && (n.default.track(r.AnalyticEvents.APP_MODULES_UPDATED, this._tracker.getStats()), this._tracker.reset())
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
                        } = await Promise.all([a.e("99387"), a.e("5528"), a.e("45733")]).then(a.bind(a, "601572"));
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
            },
            596973: function(e) {
                e.exports = "https://cdn.discordapp.com/assets/clans/DiscoveryUpsell_Genshin_Background.png"
            },
            553341: function(e) {
                e.exports = "https://cdn.discordapp.com/assets/clans/DiscoveryUpsell_Valorant_Background.png"
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
        return "52030" === e ? "" + e + ".3323bb09018fbadcad6f.js" : "73422" === e ? "" + e + ".101c1055378189203ef5.js" : "66635" === e ? "" + e + ".1ad04eeb540c570d5e05.js" : "6857" === e ? "6857.111ef78a1ffd4a212fdd.js" : "57878" === e ? "" + e + ".f80f2ae72af75d9274b1.js" : "67535" === e ? "" + e + ".d4ccc9e274acd6cbdc82.js" : "90687" === e ? "" + e + ".370e289ac601b1f7cc56.js" : "23404" === e ? "" + e + ".3b228436d73d0571c1b2.js" : "15972" === e ? "" + e + ".bbcfe2e5c3f89f24ef69.js" : "6416" === e ? "6416.2d8f75edd4d1e836c50b.js" : "8016" === e ? "8016.c67d02e71be59ce1409f.js" : "17938" === e ? "" + e + ".43dcdc62808cebe94db0.js" : "84992" === e ? "" + e + ".b13cf376dc0e06a89615.js" : "32776" === e ? "" + e + ".9fb6c25c1ae060028ea3.js" : "40326" === e ? "" + e + ".0adf9499757aef134809.js" : "23357" === e ? "" + e + ".7bc05466dea8e2cad04a.js" : "440" === e ? "440.75a13a4aee96f56cd764.js" : "63438" === e ? "" + e + ".e0db1b722e4bc36b81d9.js" : "62511" === e ? "" + e + ".456ad86f2a19c70e71a2.js" : "58600" === e ? "" + e + ".629eb1a94be03b21e352.js" : "95900" === e ? "" + e + ".77ec491aa0fa5c15134c.js" : "19959" === e ? "" + e + ".f6925a3a891a1ea5c3e1.js" : "19878" === e ? "" + e + ".38577e57248a8460bd91.js" : "91632" === e ? "" + e + ".a61bc15238292c57b52c.js" : "85514" === e ? "" + e + ".9113c11c39e7edb06760.js" : "93521" === e ? "" + e + ".760f14c37a131d07be97.js" : "80603" === e ? "" + e + ".7ce9830b9501dab1444a.js" : "22646" === e ? "" + e + ".aaaa58be7123dccf31bf.js" : "75492" === e ? "" + e + ".0148c7b424d039f78965.js" : "76990" === e ? "" + e + ".60564f6faf3cd38a41e1.js" : "54999" === e ? "" + e + ".ba8ef553d121a884da16.js" : "" + ({
            10045: "9221c47610b64e00d3f7",
            10377: "10b1beea9bc967c810e0",
            10508: "daba65db4618e7a9ef2b",
            10667: "47c3a6652c719064b61a",
            10778: "21d34f5cf1e245c0dc9d",
            10993: "8291482a2df477254192",
            11166: "91f34f0d253e4b45d857",
            11193: "21faa5769f65c2d24d1d",
            11256: "8da5729ab5a295ea8eec",
            11345: "dbf3e7b0a29bfb8e8f3c",
            11686: "be89bfd74db2d389dfec",
            11992: "932b49f9971a5b2f69b6",
            12112: "ea309e7f0d757832a7c5",
            12192: "c191979cb6fedbbe646b",
            12222: "db77331859ab81a55dce",
            12241: "61c46e0494f7942262eb",
            12435: "399f742905d79ecb015d",
            12610: "ae00d1c728f140002282",
            12611: "75465487fab3e849c849",
            12817: "9d6b75cdcbd01a37a378",
            12831: "2841fb99624147a8bcc9",
            12891: "f5fc1dd3bb9f049cd5b5",
            12977: "4ac16b1522292a60ec68",
            13111: "5a0f89d85ca54aa21346",
            13878: "cf73876c08a635d978dd",
            14021: "7e6a552b5b919a8e5b9b",
            14192: "367d9c13be14c873c71c",
            14262: "93deeefac23793e4bb9b",
            14315: "28fac0c6299bd14b09d1",
            14466: "e7f32573ed305505ef0b",
            14486: "02671ed8293ec74c990d",
            14653: "5e6c410b919d61d7446c",
            14760: "22fcc9e066e0a3ec2f05",
            14784: "d4bc185db558af7aab37",
            1502: "84dd96b0a9066a07e5dc",
            15180: "12722c6c9a1d5fc6d427",
            153: "e333e8e91308c42edf8a",
            15421: "57bc8e5052aaeda35529",
            15915: "a11223d2a37575e56d31",
            15968: "a4ea2b796803011d750f",
            16087: "a73c06c23975b4c35f28",
            16169: "a11f1f5ec654c35a61b7",
            16228: "c6fea9e29d876a559f26",
            1631: "34da98ef6288e0415b6f",
            16359: "9cd5ba431b898a6b762e",
            16554: "2487a11a2a115627f9e9",
            16565: "172c3be93a1390b699f6",
            16600: "dc22a5056da616b46e4d",
            16609: "c3f1fa622f020e267e14",
            1716: "e6a298bdad128fbfdff7",
            17672: "d968b0a2dc266e89ea7c",
            17712: "a3815e4a50b795f6adc6",
            18101: "2440e46fa85f1bb0beb1",
            1812: "c9c74c8adc771957aac2",
            18249: "a9ab9a1bea4a7c9cdcb0",
            18259: "42c64a3486fb27754736",
            18320: "e264451786f1cbead0ac",
            18327: "150d746e08decada0233",
            18367: "d18c5b0369c2af4bfac0",
            18417: "35b628539ecb34eaa622",
            18482: "58a411989471a4960fce",
            1862: "bff4483374625a3e29f8",
            18824: "c2a175a3379694b17a83",
            18831: "ce7a5af84f314a792499",
            18879: "47ed40f6dba32a423a9a",
            1906: "b7d2c84415431f2c0832",
            19213: "dbbd36a49f049f068d7d",
            19255: "9b98b81a72900f664a97",
            19538: "eafce0d3b8e8ea572d23",
            19701: "ad5c1f1a3a60cb9ae771",
            19726: "3147f5756c3e104d8f14",
            20177: "9e3101b604e5c9929c86",
            20196: "3b9518d5ac3449a784c2",
            20212: "c97e9c7068da852a8853",
            20268: "10bee6966ee67f9eb30a",
            20294: "9ba9f548ac330dac11cf",
            20353: "dd194e60a9e24f2c9932",
            2045: "4459b09615d3bfd25ac6",
            20467: "fea15eaf37d5cc8697be",
            20575: "e966afa649e6238574b1",
            20653: "3eec6e815e6aa638cd9d",
            20727: "8bbc2cfd67531ba696ac",
            20786: "26753a6c05c6bbaf29d1",
            21112: "3cf7230c1549249356b7",
            21395: "94cac982e2a0d01be8c0",
            21617: "43aa5baedd0197eee41f",
            21812: "95aa69b076edf3c1851c",
            21863: "d957e16aeb7e5165d690",
            21897: "9313bdf2886f920d712c",
            219: "c87fb17567183e2ad459",
            21960: "13b9adbbdd554c208faf",
            21971: "a6c85a49018ea34ad662",
            2199: "f7c0beb10495b3726738",
            22036: "5433ff0521a6884c77e5",
            22042: "d450c99869c764c7d909",
            22101: "2d05bd2f65e7d41032b8",
            22183: "38cc8928cef144fe9c38",
            22347: "14719a7432a56d7e7e2f",
            22377: "da27fe3bf32eedea404f",
            22458: "4c4de004d97f62828fcc",
            22482: "5112678e24ebd86d8e86",
            22523: "e305c15c7caa0db929d9",
            226: "b52e67aa53402c3e95a8",
            22602: "80b84e5ce3a6357e574c",
            22732: "d293f8918feffa5e5f55",
            22862: "24ae87e81b95ba2a5192",
            22872: "4820ea071a79216bf2ca",
            22942: "3298fb8cd596a0a0ea5a",
            23124: "bb50844aaa6f05d32a3e",
            23401: "1404dd89efe541929363",
            2356: "7c7e6e53c869e131d5cd",
            23663: "4644f77f4bd3df0ffd75",
            23746: "0f646f119468a146d64e",
            23755: "9e3b957bd201198b20d0",
            23835: "9f96a2eb68ce43b0d9a0",
            23847: "295e78ba39b0af151e3b",
            23952: "3a792c8a4f6f2a34c7c5",
            24017: "c4fc2789de58ab8e225b",
            24053: "4564ae74a134f0d410df",
            24267: "217009dce7a472568397",
            2435: "539eea7eeedcab528637",
            24478: "b375b4c6818a20f255e1",
            24642: "4b700e26b90f54aff0aa",
            24753: "578260a58c0b44ea6bd1",
            24783: "f7c28fbbe87e0e4d26b2",
            24813: "d96727e612e6d696e4fe",
            25070: "71490bc273976c13d0ea",
            25073: "e44f99eac68bcf1b4415",
            25220: "4d52be9b515f382db6fc",
            2535: "c828ef0b5fe72185ded6",
            2538: "982d98b327add8a5a565",
            25421: "223cc855dc059aee5917",
            25443: "24db192a6249ee652c91",
            25464: "c6807166a83d8b64d61b",
            25507: "7cd5d119c9a7be1353fb",
            26176: "474e81aa33052323deeb",
            2634: "cc3e40fb13d52762ace7",
            26460: "c51097872438bc4fd5f8",
            2668: "b0ecc2564b002a65c704",
            27157: "837a42924a3494d9a603",
            27381: "1552b34d22ee5996a214",
            27526: "561804e678779ff113ca",
            27601: "e1af0311ff4bec0fe3b4",
            27751: "43653b3bf1a785fb2cb6",
            27919: "6479dcd385ef3ef82fbf",
            27933: "f04669bf6d48d9a4759e",
            28020: "fb205410f2c5c301c1b4",
            28249: "a8167f7e6e31c922a53f",
            28296: "8968c40301960f8a0818",
            28382: "eb92789229453f587461",
            28479: "71a33c1bf53afb1a8834",
            28538: "50f6530a7ee9ca1b0d9e",
            28614: "b8394f21dd823bbfc65b",
            28990: "909027390c9aade15556",
            29041: "4205bec1aeac590e07e0",
            29136: "50fdd624b508cd474710",
            29396: "d3311df76dfd27697eaa",
            29608: "92f553a094a052d22ca6",
            29641: "4eac724bbed08b3e2918",
            29924: "19a0c67d3304b2423405",
            30166: "f4977a4cb6d0fc4c516e",
            30243: "836350b295b87b909ec9",
            30244: "e26ba67d763da6744a3c",
            30364: "b658ce2cdba806c01e5d",
            30386: "38541d0a127353004a3e",
            30478: "f3133f20a2ce9fdbff77",
            30634: "9f870e01572b481303ac",
            30684: "01424441cd61d02595ab",
            3084: "09b3c5cf6a5410841ec4",
            30887: "afdee642400879498482",
            30997: "62a503a7aaa861732e7d",
            31085: "f0c914b0a40f073c6c72",
            31093: "85426e3ebff013b19a29",
            31177: "ae110c08cf6c0bd668d0",
            31270: "0dbb6445f4b3aea63bc7",
            3183: "fc0fce3e95825595673c",
            31835: "48e13c7052087a08d2fd",
            3190: "c19808b118261ab302e7",
            32157: "9443fc0019c26cb5915f",
            32627: "b5ab4f0e8ad1255363e2",
            32640: "47f497e8cfdc099c8c01",
            32747: "70446334a3ac7f13c560",
            3277: "a61cfebecec2bc0af1bb",
            32886: "fba3a5f6d1f4c8f72487",
            3289: "318cf838f8fbc29088b5",
            32991: "06e79d413b86f5de0c02",
            33053: "f75310e33d1398d1dd70",
            33065: "debf54c8ad7eb03010df",
            33156: "2af4f5e8e8c5ccbb5f8a",
            33184: "3fc0ddb4b5f762eb682a",
            33213: "6bcfc77d0920b46e11bb",
            33238: "165b4ab03a28472ec805",
            33273: "440fb5eea6b6bf249f3a",
            33361: "1effc2dfa9b406242a47",
            33641: "607d59109e1286972e92",
            3378: "a97f4f56ec8a1c5ef8a4",
            34049: "231b6cfd31b121b3d80a",
            34191: "ad3a5de06f5f57622b99",
            34424: "f7323fd6d949ec563485",
            34627: "c9975dc9fd8f6e2347a4",
            34842: "39de6a81f8cbd28d09d9",
            34933: "75fbe52e45a029d5d40e",
            35247: "6d4cf1c0a9a9455bb411",
            35282: "88584ea55e5bcba9ea8c",
            35401: "c6c7eb8c1a59b1b79c27",
            35489: "ca44dbdb26304737a50f",
            35641: "a338cdeabccec8079ca1",
            358: "40b1ceeb403df79cfcdd",
            35822: "b1e5ba7f7bde95853b95",
            35869: "40b05968a1dee169a3cc",
            36052: "d4c012fa37ac191be5fe",
            36254: "ae11572d06278b7d3b62",
            36278: "170c0d42857ef6a88f1a",
            36371: "6dad5c9dca618489af1c",
            36385: "7062aedc73b6853f262e",
            36494: "7e4a0e12a2f3008d5d36",
            36514: "2c0b46fb8601a597f1bb",
            36848: "1e258213cf028f82c543",
            36869: "85a65b41b51779a6b529",
            36968: "392ca74501d5736e8de4",
            36970: "46b0f32576fc1e11d60f",
            36995: "1fa2cda4522bea22f219",
            37052: "a95c3d72637acb255595",
            37066: "c0b61659ed0b42eae95c",
            37194: "227dea7f711fecf0363a",
            37220: "46439fde43cb8d1dc94b",
            37357: "09c8dee7e667813d7ae0",
            37372: "858eec4fa1f5cecbe9da",
            37473: "ff0f1e96cf47a3e4a7b5",
            37483: "8c6ded0037062dc1d1aa",
            37558: "91fe7ac4242b036b1d6b",
            37564: "c0a2e7f5082d8385e53e",
            37566: "ffaa2938fd8b2395eea5",
            37586: "b8cd372d18396439bb86",
            37655: "bc0b364b67caa86a4e11",
            37720: "7c9a4c5df3f4344a1ddd",
            37740: "e1d524fbddbd78df14fe",
            37766: "028411887badc109a7ba",
            37839: "f0b05292b6a1d68647a9",
            37880: "4bfb6b8bfc195ccdbde9",
            37969: "bc70b8af90e74cacab6f",
            38047: "4b63602d181f5d60e59d",
            38062: "f18bb43f53e015422e0f",
            3807: "aa5ac255a0ead15fd3cf",
            38359: "65de6e1746c2d2e524b4",
            38413: "aaf1384c74b50cd0f247",
            38506: "77e801208b047a7b0f27",
            3865: "4dc39e38ba642dc16dd0",
            38779: "07025165320f2ad850c7",
            39009: "fa6e894faa3207cd7791",
            39010: "fb33f4f89bd28159e861",
            39143: "d69dbc68480d6ece9779",
            39248: "ab4c4ad686ab0d73f4f4",
            39285: "c4078fd9411784368b26",
            39305: "5af0e904b0a7fe64efac",
            394: "8d79bb5bb12eff1ab939",
            39511: "bf123604774d4c956a84",
            39612: "250b4e8f59a69de8183c",
            39627: "f36c897358e6da27d8fa",
            39648: "bcc516c1aa9117c844c4",
            3985: "43ff1ee97d3e776c8c34",
            40035: "f484472e87890805893e",
            40096: "61432e98bbb6106d56ed",
            40146: "206f97cf7b5ab551698e",
            40157: "cc266dc23089a3ea16a0",
            40268: "aae0756b8bbf2c4871a0",
            40283: "56037d2cb9fce9081251",
            40331: "c34278e4248f651a17f6",
            40390: "b07eded67f878d2a5790",
            40786: "60c861a0850a0075d123",
            40897: "f885c8ad344f0e11b225",
            410: "f7854346fd7c9df9a22b",
            41023: "5451919c8a046473531e",
            41128: "699dbca2ada1b63568f9",
            4117: "b8d937605197f441efbf",
            41281: "d0f5d74b29daa6adccb1",
            41549: "16732ccb43b92ce40fcf",
            41552: "05b2d9c30f94c92f7957",
            41588: "837536d4e2e2baf4facf",
            41814: "a734aa10366c93f4cda2",
            41887: "a8c543b41f0a5880bf15",
            4189: "42abedad40bff25b3c4c",
            41947: "d1df7f4c4539193e71ed",
            41953: "85f15836b590f41c85de",
            41984: "8076ad5dace040fce480",
            42358: "618e4fbef855d0f25a06",
            42483: "be06507963c1f01fee67",
            42632: "44779750466669e76683",
            4266: "2b60e788328a92f4774b",
            4267: "7b4908a3e6ab3b23efdc",
            42758: "12cb32871ee6beba796e",
            42892: "973ee2633cd5abbf2f3d",
            43057: "c46c41df7df0c400e4f6",
            43133: "89f40fef7d155e90dfc8",
            43350: "274129994595e5c387d1",
            43353: "36807aba668326afed05",
            43502: "9c77421dc2108ddb7e41",
            43643: "4b6c4ebb200a44d17c8e",
            43782: "05ceae1935156d3eeacc",
            43903: "79a3047d75e3d91d113e",
            44153: "1241f2d8496320d1d3c4",
            4419: "99cc788b94d3476c4c68",
            4436: "3d3ecd9b5c5ae61f76cd",
            44462: "1f055a8b3e55fa193305",
            44516: "bb565f462ee9bf5eab3f",
            44568: "7243213e3b6e1f6ffd54",
            44754: "9cb8603bc7c013667e51",
            44798: "127f1a373658d0470d9f",
            44808: "b8fe8fed76f715ac94c3",
            44827: "75017f4569c7b2e179ad",
            44878: "e2bf78a9302badfa751a",
            45094: "de953df5db2427a748ad",
            45130: "511db8816501a2a499c4",
            4530: "bd8a117426edefe5f4ce",
            45576: "bf69bf89e90f549322d3",
            45733: "723038a56f60c075509c",
            45747: "74ead584a4853ccad6ac",
            46161: "c036645917c561fc1a52",
            46369: "71de7f66ef7270493156",
            46468: "0caf7d0ecfe447310e19",
            46826: "48e642d6243d9f80aada",
            46865: "7312ed5edebe32fc48ab",
            46882: "0c3287936afdfef6180b",
            46896: "95555f081c8438c3cf33",
            47034: "85f10d970436ba2bc47a",
            47055: "37a3754dbfa19a9d0410",
            47228: "7759559da0cb9991a895",
            47354: "8dd7b22042e1a8a32b1c",
            47435: "d9f913915a459de7a0dc",
            47484: "a9df691cfb1d13cb2ed5",
            47674: "e6a1dd73f308558330f3",
            47704: "e61d4eb383b01912f1b2",
            47849: "84e36ad142dd407d13b1",
            48017: "a1baa4993debbc8202a2",
            48092: "f0f6698bbc6de6a7ba34",
            48174: "644ea2985ce6c07a8108",
            48226: "ce593c5c13a19b8c5039",
            48375: "2cf1e6f5c3c653984184",
            48707: "05db7aaa3de9f13246ff",
            48748: "9d0d0766a201d37385db",
            48934: "88cde2aaacae19318b9c",
            49131: "3a0370443863fa167d33",
            49146: "9624d91624230a2f0c6c",
            49277: "96515e4bd4c23904a364",
            49365: "64e916d669a8c3c0167d",
            49508: "9b1e1de3fd4a5e6679f8",
            49827: "96f23c40d1b2d27bad3e",
            49838: "9ef60f38e685fa72be24",
            4984: "50ad4e0b92ad0772808b",
            5004: "9dcf29abe724d47041f5",
            50331: "4d1d5278ebf344eb2252",
            50498: "3f21daa66da3eb121ac0",
            50591: "00d95d20997ca7423316",
            50872: "26e71c521092b6f49521",
            50929: "437e36cd0d7018ed3ffb",
            50987: "b103dcd35c88afa72d77",
            51068: "c36ebf157947d8aecde8",
            51199: "3eb829538ec8c651266d",
            51373: "100751b37eb20dc55374",
            51477: "ef9556551a4b6a72c18b",
            51529: "2f3cddfba779f3494172",
            51563: "f90b1b507eb4c1f46104",
            51868: "dc7f1d70e532a01af812",
            51934: "e62a8be85e351988dce5",
            52110: "14731ee1306aee5016ac",
            5217: "28117d97ee8e5706cffb",
            522: "eb4fcea04045da4cced5",
            5257: "3f1eac9bce648f4a373d",
            52590: "96ecb4785a6a0b0b8aae",
            52657: "bf60c89cf059b418538b",
            52680: "571dbcb1aae9b25af823",
            53162: "b6af33433fdac35ba146",
            53195: "03b0fa7900bf4541d253",
            53269: "aec6597f8bdeb146a2d3",
            53466: "25039ba1adb7f825a805",
            53510: "3db1285290958819560e",
            53512: "645f6d85658f2c1bcc07",
            53579: "1f7f76aa11fbd3ab7c64",
            53751: "0d5372ec0ae3950a8a5d",
            53809: "e201d87aca8095a5ccc3",
            53896: "a576a31c333f1a8f2b38",
            5396: "f04cfebb523d1bd4a673",
            54021: "fa014ed84f5400c5062e",
            54076: "63722f2ff7b8fef5e405",
            54310: "483c86bbd7f89d24d25d",
            54343: "d0fc0a8bb21827d335f5",
            5454: "2e07220ebe7a49545b25",
            54597: "25a12b94547d9165ebfa",
            54626: "98709f17dcdb159c4cd2",
            54668: "a061d19628cf2f79e128",
            54749: "fbd8028c939ffd05669d",
            54845: "c849256943608ad1f0b0",
            54931: "6ee8e1b9d5d1433a520b",
            55224: "30bfc49b5f4e8c307465",
            55228: "348aad0c0dd51624832e",
            5528: "0c00c6ba7098ea5f0b52",
            55601: "4b4b7650519b1c758f81",
            55944: "533e5a71d34ff0d3a710",
            56035: "b97d0538a58a566041f4",
            56049: "bd94deea1b1bb9c63fa9",
            5609: "8cad844646eeedccfcbc",
            561: "200944d085aeab393864",
            56236: "63cb9c424245df9d81fa",
            56268: "43e19d68952613f97ce1",
            56446: "836ac6c8741c86898157",
            56496: "45aa10c7f04686b7c656",
            56630: "daeb83f90c776ffd5ed4",
            56826: "7b00d76927cf42ce7226",
            56944: "bacf69a28b8bd347cd29",
            57085: "f3abc68a46d2a8e72cce",
            57372: "841c7f5cd84fe1c924da",
            57387: "e156913cdbe9c189c603",
            57486: "f81010ea8d46d163110d",
            57539: "a54e11cac328ba59d996",
            57650: "e128476cfdd2b73e18d6",
            5772: "9cb43d1618398a2c4448",
            57761: "cdf9767e6d182175ecd5",
            57961: "8a62e6d8844efeec7796",
            58023: "29940d6c7a361b5990e9",
            58175: "ca2696613de4f6544457",
            58227: "18e559b05f78a8b9c0bb",
            58286: "af2d0e4418ad1eb1e9d2",
            58548: "817c2a7f44ad3d43b93a",
            58621: "4b7ef8995d1288d139ec",
            5863: "16f9529847c8c027932a",
            58690: "1125eef8bbac59f1f2c7",
            5877: "b1edf5418582a44a5f1f",
            58903: "e56849d807e02a25a16b",
            59075: "8effe0308daf85671efe",
            59128: "16e3fc8f57902807a5aa",
            59281: "05c0088d396c50771da2",
            59286: "f4a209f2e40a23795ac2",
            5945: "f4419771b898e95f6b8a",
            5950: "4e30e323285f42700215",
            59500: "bcdaa10e54c7a1ed8086",
            59642: "c4c24358bae3ccdaadad",
            59682: "678aff10dadf81641a7c",
            59716: "c4d7d6da0c180f2ad44d",
            59729: "acb93dc34d70cf8dcaa9",
            5996: "98c60214659c8f424d81",
            60005: "ca9f396c60abdb105a28",
            60079: "7317bdaa5f913fbafd0b",
            60082: "a48ce10f0fc3d630fe86",
            60133: "4c91034b376211b7def3",
            6045: "9ba8c38413fe3a3bbc62",
            60592: "646c50d3db273e88437a",
            60618: "1044111347df30898c7a",
            60677: "76dedbd504b60034145b",
            6074: "d64fa86146c2ce13202c",
            60878: "0c247cfe99a75acb791b",
            61214: "8561ed31df560cae6812",
            61366: "618186974faea047a04c",
            61418: "3838cfca7bd306832d1d",
            61447: "36ad0e7d43f8c26af95e",
            61482: "6cda71cac01fda8e2eaf",
            61536: "6cec18de555f60a90454",
            61613: "d66f9e5c06b972d7cba0",
            61624: "4c0e47484cf214b66aac",
            61672: "33b8904a15182b799e7c",
            61690: "26781d15d54f7539ff69",
            61939: "0dff902d2b2673f13130",
            62065: "19bf1fe4bd3e1888d878",
            62233: "8238ebe6f1ff1833ca03",
            62236: "a228930fe21ef11277a6",
            62364: "232c6d829f82379bc7fa",
            62498: "cad345ba3791c8bd1fe4",
            62629: "f5975549da1435e02445",
            6284: "dbff342d9d37b989707f",
            62856: "53cef28f1ec8c7c5b59a",
            62903: "cac7eab04ff0c7e7cfea",
            62985: "bf31b8539c55265b8779",
            63007: "96d48307af88cfcec649",
            6310: "ac8485562abdcf9e8828",
            63629: "ac0230129f97d1154faf",
            63636: "ae43eaca519dfc2b8da8",
            63676: "fa99ad8f0dbc521f1137",
            6368: "c7cf824fa676d0c1ab87",
            638: "cda31a8a2c5e7e1658b9",
            6380: "df7f11815513cb90c711",
            63958: "068d9f68badc67e9df32",
            64248: "dd7df8cde0c00cc8bad6",
            64250: "a4994b1a60cd9bef12b3",
            64409: "63fdaa2b310b580dbde5",
            64563: "89d8ff1bd47db6a0f4ee",
            64908: "dae4cfcf8432f05391b8",
            64941: "dc521fed0151ff55bada",
            65045: "0779ef589389b78c775a",
            6532: "f941e14e9ac22beaecbb",
            65652: "015b202d005c4e878a40",
            65866: "8776a90685b25a44160f",
            65889: "ee9ce71773b16a4417ff",
            6595: "2aecd6b5b3c2dc3590b9",
            66050: "72bc56f430b18d920a72",
            66071: "ce812155966f639f6f44",
            661: "ba04c9f4e870e88fa228",
            66462: "ac8f93b7f5f938fcab8d",
            66902: "e5b9c2aa233ff84ed145",
            66915: "f621992652ecc419fdcf",
            66944: "8984d6ab2c92986846d9",
            6696: "c845bc15e27e0dc72d12",
            66993: "db43ecb257ca10a46060",
            67256: "6d7bcfc740e0377e249b",
            67607: "6d12db68204dcffb0354",
            67753: "558d8cec4a0e0f2e92fc",
            67816: "18d6e666ee9cfc40fd35",
            67920: "67ab18be39c48c87d95c",
            68130: "0e53e0e7240e9b385024",
            68449: "75668ec78e5a3b5ef0b5",
            68451: "c8a27d4184544d6a3291",
            68535: "82eb906ff710f98fa544",
            68614: "c8c0d2c2edd24cd6916e",
            68720: "0cae67171f9e501589f7",
            68747: "fd953edf40335219fdb6",
            68784: "733d0cc84bce0075bc1b",
            68822: "05b3de68f6753ce114d9",
            6901: "7dec2f717bb6c3d6f63c",
            69015: "e1ff243956c1713cc49b",
            69208: "48a4d62b5eef9ed82f1a",
            69220: "2dfba6359c109df4ee05",
            69240: "1fff68483950aad127e0",
            69473: "3f434f282081c06ff46a",
            69495: "71e5519d24c33d61cf9a",
            6957: "e70a281cf0030162ee77",
            69633: "18445458b7bbcdfbc133",
            69760: "24eefcff56a4b08ed7df",
            69788: "b007b43c3c2d8fcfa68c",
            69806: "2de796f2c5b8d87aed84",
            69923: "3f14f3328720621f232f",
            69935: "32d0d11100466c5ebfe2",
            70036: "0cfb8c48283d1397aa25",
            70061: "9b94368a746eb486b857",
            70173: "0fa283a5d67792e09cdf",
            70253: "79754cae93ac469e7528",
            70528: "92ae52427143e3f2778c",
            70623: "3f5e6a9a3046ade4cdcf",
            70675: "2b614a3804b95624a28c",
            70866: "dbc455aabd425a405315",
            70935: "3919b791d98adf198819",
            710: "7c2698709f9566ddf4b6",
            71035: "feb6f739b169be0f86ca",
            71196: "bf3935e2ac262842c928",
            71244: "e48c5fe380327fa452c2",
            71378: "14a16ffa2b45ad71c555",
            71517: "543e81f17b2bef07fedf",
            71697: "211e29f957add3fa5aec",
            71953: "8db52f0a122de66f6475",
            72323: "970c49aff314b6f24d68",
            72458: "a765d9de3af5dd633852",
            72637: "f066b3693fb76524dc39",
            72642: "3bb21bad93147cb1abf6",
            72760: "087597ab828c38fdc13f",
            7285: "eb51bb935b68908c5482",
            72891: "a6562d17e6fb0320e22a",
            72920: "7fc9d32d22640c7d3b64",
            7302: "92a0287f5ccae299d432",
            73049: "9eaf22af3b98ba88655f",
            73149: "cc905e5faef7472a9afc",
            73206: "412218c5d75538900e6c",
            73872: "02933edad4f73c21aeec",
            73921: "4b8b54bbdfa0b620b992",
            7402: "e4b849694932e058ae8e",
            74112: "1c3d1cfc82e93c33a1cd",
            74194: "6b7332b9a71b43e679a9",
            74203: "fd94551871de2c19c473",
            74294: "f9d7091f118c4240c2c8",
            74300: "02573e44c742e52901e0",
            74459: "975c4e511656c08d4121",
            74526: "4a74e58fe7b1a9f675bb",
            74543: "af7341eb18b97b54dc5c",
            74590: "1fc08a4b4eadba7c4dfe",
            74602: "52259d090a78a5b7f4fa",
            74673: "06bef80d15ae1864f34e",
            74753: "4fcd60adbb18e3c0b0ce",
            75409: "7d6db69c113d86121b51",
            75475: "d58b4b8a8d2e8d979505",
            75613: "fb3345c6ac1c5c459f74",
            7573: "e072a0aa29890d46e227",
            7584: "ab2706cc048c7ec26227",
            75843: "21fbef6e753384663365",
            7590: "bfe7b45dbe4f9ad0a827",
            75994: "2f454a84faa9420bf64b",
            76233: "bb932af39813b1bed714",
            76241: "529ae754e3e0af645336",
            7649: "43c6289c17b28f5aeb0c",
            7654: "a7be22e6f8944b565374",
            76540: "5b067d7ff898224292d2",
            76731: "96414d53a5392814b38d",
            76815: "aff7c741072c291976a6",
            7685: "d7e0512218526aea8bd6",
            76888: "d4876d2baed23a95c8f9",
            77117: "debd13ce9e268afe993a",
            77122: "0a285f118a44c5614e5b",
            7717: "24c202b23a3d261b102b",
            7728: "c5ab0b87bcf0f4aa3d67",
            77485: "a80d4a8c2d2e1076abf0",
            77578: "126b8c055e33e79485df",
            77721: "25c386c69b750b185043",
            77745: "f0c2a258b1ecd5541534",
            77800: "3b56111f1e3c8808e5db",
            77875: "5254f709648a7cfc494b",
            77927: "dd8961eaf6c4f6d43cc5",
            78073: "69933356bf93e49cfe9d",
            78221: "37761aae534af0ead536",
            78273: "128d8b51abaeec64821e",
            78587: "a1a37154249e5a2deebb",
            78607: "02a92c93fcf5f333dcd2",
            78650: "3a93a3e614d44167558d",
            78670: "2e8943a1109b68165dad",
            78690: "c7592bafc66a980e6d98",
            78704: "221d5d79a4fc8f7681d8",
            78712: "02c7aed7c9c9a1474a98",
            78786: "3389fc4024cae5281c5d",
            79267: "fe9a2dd5e0c195735316",
            79457: "842e08db8f99ebbe46db",
            79477: "80175e237e6e222d9cfd",
            7954: "b39153fee4c5eb4847eb",
            79618: "0ba2f29ad28ac170e5e6",
            79695: "7cb623066a1d4c0961af",
            79764: "125f0a7c7c593acd3dc6",
            79921: "e043441c5f55f8a5eabd",
            80026: "fa2f751232c6d36e0443",
            804: "5eaf128e4d4e479e9bf1",
            80404: "593a1684f5063511e28e",
            80451: "fa58428d9c9dcd8a0000",
            80493: "64c136a4e79081f6657a",
            80499: "2acdfc72c58214357ed4",
            80621: "afd4020cd4dbb326442f",
            80954: "28b829f6eb92d939ec9c",
            8102: "41de0fc8486e8a0d0067",
            81124: "4b69a4fdcbdc7cf8833e",
            81247: "fa3d219e9ac599aca65b",
            81319: "1a1be964adda390abfbc",
            81352: "3a534d3cab9ed332cfff",
            81358: "be815bee85fa303bc006",
            81539: "7ef5f9533628718f6fea",
            81811: "a6ffb1be5bca96669d91",
            81843: "f01f16f028eed2cbc6ae",
            81975: "c9264e3a555cb3baf449",
            821: "f695c2112812f2f96f87",
            82143: "18cd5244b76ca6868ce7",
            82321: "22ca4924fb6c1301737e",
            824: "da8b53740bb39d336d46",
            82560: "2ac2d7b764aa118a289a",
            82634: "725971e6ee3e99f65a7c",
            8286: "87d1a6996a78dc2ffa45",
            82961: "85eeb335e89723ea177d",
            83051: "94c4f771608a692dcfdf",
            83264: "3154d2af1aadd987c74a",
            83323: "ca5c861bf00bc77c4f1a",
            83331: "b569f53928b9db095553",
            83385: "0353068c566243d9f2ca",
            83536: "09392b10565b1dcd75d1",
            83613: "44e02b8db55614b61686",
            83646: "7905c3df6f99ddcafaff",
            8366: "2c7525b1c78aff0dcba1",
            83774: "bd736f60b7a68012ef2c",
            83816: "ec5a1b7b2bee9be2f214",
            83942: "6380af0f712c138edc8e",
            84239: "b01bb936dcacd99667c7",
            84259: "f082c7d676f1b055f8c9",
            84331: "1e44e35a58ede1eee292",
            84385: "207b4319cf7fc28f08ad",
            84399: "9a71aba6d8414db39c00",
            84482: "96cb419b618ad5a35476",
            84509: "3ea1488aa2468a11224b",
            84518: "d00bd7bbcbd1e938be22",
            84686: "835c64f9c946c02c2522",
            84722: "7913b8b520a64434f053",
            84725: "9dad1dbef23058b40d8c",
            84778: "f631f0259f226d5dd531",
            85093: "6b461304b66a29aa271b",
            85100: "82243c61640bd6b6689a",
            85281: "79a4ac78181d0140a90a",
            85342: "46d3e94db30af626ec93",
            85351: "8f5be92229cd7f1e8b83",
            85552: "660624b5ff91978910c5",
            85668: "06d1e9987c187ffe8be1",
            85828: "6e97d6252e702fba0db2",
            85885: "80f2e29f4f19236d4676",
            86047: "6a226fa003819501957b",
            86060: "7e73079485a25999cdb1",
            86200: "0bda52e7b32a476cadac",
            8631: "7ada097d4ac85091b0a2",
            87200: "80b12c5adc39364962a9",
            87233: "1910f09a65370b4bc87a",
            8739: "4795079f7c69615518e7",
            87549: "0b77f5a6384abd560d1c",
            87624: "6ce9f48d128a1784824c",
            8790: "0849aa769826dc2b0922",
            87983: "6ee81809817b782681e2",
            88358: "45346641f229e9a7253c",
            88396: "b3d63209abaf734325c8",
            88408: "b67f9639464b15be3725",
            88571: "44ac9da560cee8b68bb0",
            88870: "63339525a25c9dc6d7aa",
            89069: "687402ef0bacae988229",
            8926: "b815a438c9d719390387",
            89289: "2c107dd25fc7edb13c48",
            89552: "830e64f7dd42b75068ed",
            89582: "0cb9e5b534f763ee0468",
            8965: "75f3eb11432db3aba0ca",
            89675: "8da8019eadfa397f3b83",
            89715: "a3794598e46fd920f25f",
            89792: "b318bd0c85cfaf3d9b70",
            89873: "f0b82b00e135e3be411c",
            9007: "a4c1b0008664e2d37721",
            90220: "9e317950fed07150b09d",
            90424: "932de350361ab60ba4dd",
            90508: "72afe1605c33c7b1cacb",
            90542: "01a48f0d4ff8cf499b62",
            90688: "b5d7ecbc1bbdb878d0a6",
            91007: "825c6fb7049ea87ebed0",
            91032: "c3dd26c8511cfb91f41e",
            91199: "c0cae60a32dd8c8efd68",
            91315: "53f9c9277ce7f6db0f14",
            91789: "838b1f0e42b7424e6a01",
            92006: "92cab75fe9ec4013da85",
            92339: "699673cf623fa13b29f8",
            92401: "8e7e69ed8b2cabd96083",
            92446: "cabafe060cb7a77e518a",
            92575: "a4133d71989969387f1a",
            92695: "1e249025519d2bbf764e",
            92780: "70ed127226a0d781f747",
            92795: "e3bf650c55df7dbce52b",
            92821: "73d0c97b7201f5550fdc",
            92893: "f5116555c0137308c597",
            93198: "290e2929513e7a940723",
            93288: "a0fa51f1d7da1f031c45",
            9343: "034074dd8e04e9122893",
            9347: "353990bad6ec55a0ec6a",
            9354: "d48e0db1ff468b6e92d1",
            93554: "a65c693b35e0ef70d96d",
            9362: "47414f2bc1e157640508",
            93626: "11a6c7390b92d8d75d31",
            93776: "8b72dd6c36bb73bd6eff",
            93829: "83e21bf1e471c94247b5",
            94005: "5f97470b9ce60b437c39",
            94064: "cb44eddf1cf1f91ff0db",
            94566: "7a9952020d2d9b103359",
            94889: "06de3a26f81350377899",
            94912: "a986bb025bcf65e4c199",
            95019: "4066ce1c9d9229a58f20",
            95136: "1fd8107340f7b48f3245",
            95257: "5ea72235749819b9180b",
            95258: "d3d56d67b2124ba25823",
            95307: "bee8b56805d6dafe473a",
            95393: "9c0ce966ac61be77acff",
            95422: "7782cf667bb28967e30b",
            95468: "1be277653e71e668bcf5",
            95480: "ef43cbaad11578e38a98",
            9558: "fe0e3af24fa5256a2925",
            9573: "3064275f6ec36cc0c1b0",
            958: "1bab055395402fe9eaa4",
            95883: "12feed92e647e69aa4b9",
            95925: "49b5e0fde20fbe1be9c9",
            95937: "619731c5ef27b4939fc0",
            95962: "cb2b2ab77d0aca4d7fe1",
            9606: "853ad202d0b247f7b7ce",
            96246: "bf85f30270a852129456",
            96307: "373fcee13f7064308dbd",
            96473: "70feb7a4b31b9680a55b",
            96626: "9b2cbeb37a79611f52e4",
            96645: "a50ad1093f79ca4b683f",
            9738: "436f37bda13060ee66bf",
            97516: "29e91b51d4b9995f202c",
            9766: "440d3dbc1442cb35a181",
            97674: "2a3fc73c7ebf83928560",
            98105: "8f60eb4f9aff347dc5c3",
            98137: "d0e9ddf5bff95e66653c",
            98154: "b637bef23e42a7080883",
            98335: "3a4c10402d3dbf4f8d95",
            98466: "dfc306d25b4e665a70e2",
            98538: "2c1692f53588f0875bd8",
            98570: "292a778c7e7703a397f7",
            98920: "3ff3ac203ed1eed46082",
            98952: "8ee42374cb4350864e1d",
            99174: "d810888e377113dc8427",
            99339: "487f06d182dadf3f9d03",
            99414: "14f564f265dc4ba92c72",
            99450: "50f3f96a668c92d96dbf",
            99617: "8c9c0038c1684488804b",
            99694: "0b1d52616caba9c4b2c0",
            99809: "80f87cfa460be7b5b029",
            99857: "6ab6032cf42b91817124",
            99873: "88fac8268adf4afe1a8a",
            99905: "4cdea8c81ae256ad39a7",
            99989: "318ab47605111f1d56f8"
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
                2797: 0,
                35705: 0,
                43455: 0,
                6123: 0,
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
    var u = s.O(void 0, ["49237", "99387", "24217", "62734", "43455", "10586", "64787", "2797", "6123", "17764", "84471", "70397", "35705"], function() {
        return s("650204")
    });
    s.O(u)
}();
//# sourceMappingURL=web.f494356fe3e072551efc.js.map