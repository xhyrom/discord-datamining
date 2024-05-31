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
                    r = a("796163"),
                    f = a("961047");
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
                    createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("23755"), a.e("80301"), a.e("29549"), a.e("31605"), a.e("56630"), a.e("6380"), a.e("11250"), a.e("57878"), a.e("77172"), a.e("4970"), a.e("95393"), a.e("81539"), a.e("67535"), a.e("86977"), a.e("18101"), a.e("8739"), a.e("58286"), a.e("90508"), a.e("41947"), a.e("30243"), a.e("3084"), a.e("62809"), a.e("38779"), a.e("59743"), a.e("23404"), a.e("17220"), a.e("86557"), a.e("11256"), a.e("69481"), a.e("91632"), a.e("38651"), a.e("18036")]).then(a.bind(a, "601564")),
                    webpackId: "601564"
                })
            },
            155221: function(e, t, a) {
                "use strict";
                a.r(t), a.d(t, {
                    Overlay: function() {
                        return B
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
                        createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("70716"), a.e("23755"), a.e("30386"), a.e("80301"), a.e("36385"), a.e("56215"), a.e("29549"), a.e("31605"), a.e("56630"), a.e("6380"), a.e("11250"), a.e("57878"), a.e("77172"), a.e("4970"), a.e("95393"), a.e("81539"), a.e("67535"), a.e("39285"), a.e("86977"), a.e("14262"), a.e("18101"), a.e("90687"), a.e("82882"), a.e("8739"), a.e("58286"), a.e("90508"), a.e("7590"), a.e("41947"), a.e("30243"), a.e("3084"), a.e("37766"), a.e("53466"), a.e("62809"), a.e("22036"), a.e("38779"), a.e("59743"), a.e("43643"), a.e("23404"), a.e("92714"), a.e("17220"), a.e("37220"), a.e("58360"), a.e("92557"), a.e("91315"), a.e("80026"), a.e("72588"), a.e("45074"), a.e("36439"), a.e("86557"), a.e("5829"), a.e("66696"), a.e("11256"), a.e("69481"), a.e("49508"), a.e("91632"), a.e("32278"), a.e("38651"), a.e("95468"), a.e("19976")]).then(a.bind(a, "457094")),
                        webpackId: "457094",
                        name: "ViewsWithMainInterface",
                        memo: !0,
                        id: "457094"
                    }),
                    V = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("96427"), a.e("49368"), a.e("75492"), a.e("11250"), a.e("57878"), a.e("95393"), a.e("67535"), a.e("90687"), a.e("19878"), a.e("10778"), a.e("52030"), a.e("85514"), a.e("76990"), a.e("50960")]).then(a.bind(a, "822699")),
                        webpackId: "822699",
                        name: "ViewsWithAuth"
                    }),
                    G = (0, _.makeLazy)({
                        createPromise: () => a.e("32640").then(a.bind(a, "285773")),
                        webpackId: "285773",
                        name: "ViewsWithOAuth2"
                    }),
                    H = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("10508")]).then(a.bind(a, "549652")),
                        webpackId: "549652",
                        name: "BrowserHandoff"
                    }),
                    F = (0, _.makeLazy)({
                        createPromise: () => a.e("76888").then(a.bind(a, "573276")),
                        webpackId: "573276",
                        name: "MobileWebHandoffFallback"
                    }),
                    B = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("23755"), a.e("30386"), a.e("80301"), a.e("36385"), a.e("29549"), a.e("31605"), a.e("56630"), a.e("6380"), a.e("11250"), a.e("57878"), a.e("77172"), a.e("4970"), a.e("95393"), a.e("81539"), a.e("67535"), a.e("39285"), a.e("86977"), a.e("14262"), a.e("18101"), a.e("90687"), a.e("82882"), a.e("8739"), a.e("58286"), a.e("90508"), a.e("7590"), a.e("41947"), a.e("30243"), a.e("3084"), a.e("37766"), a.e("53466"), a.e("62809"), a.e("22036"), a.e("38779"), a.e("59743"), a.e("43643"), a.e("23404"), a.e("17220"), a.e("37220"), a.e("58360"), a.e("92557"), a.e("91315"), a.e("72588"), a.e("45074"), a.e("36439"), a.e("86557"), a.e("5829"), a.e("66696"), a.e("69481"), a.e("32278"), a.e("69240")]).then(a.bind(a, "290161")),
                        webpackId: "290161",
                        name: "Overlay"
                    }),
                    W = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("18824"), a.e("75843")]).then(a.bind(a, "430075")),
                        webpackId: "430075",
                        name: "SuspendedUserSafetyHubPage"
                    }),
                    K = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("19878"), a.e("28296")]).then(a.bind(a, "630107")),
                        webpackId: "630107",
                        name: "QuestsLandingPage"
                    }),
                    z = (0, _.makeLazy)({
                        createPromise: () => Promise.all([a.e("99387"), a.e("47228")]).then(a.bind(a, "531338")),
                        webpackId: "531338",
                        name: "ConnectionsAuthorizeContinue"
                    }),
                    Y = (0, _.makeLazy)({
                        createPromise: () => a.e("54918").then(a.bind(a, "838134")),
                        webpackId: "838134",
                        name: "ApplicationDirectoryRoutes"
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
                                component: K,
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
                                component: H
                            }), (0, d.jsx)(m.default, {
                                path: N.Routes.MOBILE_WEB_HANDOFF,
                                component: F
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
                                component: z
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
                                component: W
                            }), t ? null : (0, d.jsx)(o.Route, {
                                path: N.Routes.APPLICATION_STORE,
                                component: p.default
                            }), t ? null : (0, d.jsx)(o.Route, {
                                path: N.Routes.APPLICATION_DIRECTORY,
                                component: Y
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
                a("235817");
                var L = a("798105"),
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
                    o = a("470716"),
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
                    c = a("470716"),
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
                        } = await Promise.all([a.e("99387"), a.e("5528"), a.e("24267")]).then(a.bind(a, "601572"));
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
        return "52030" === e ? "" + e + ".2cee496f1f5022355457.js" : "49368" === e ? "" + e + ".2d66f73fb7611f643118.js" : "11250" === e ? "" + e + ".8059edf0c5599b270bb1.js" : "96427" === e ? "" + e + ".72bd4321db9089a43396.js" : "29549" === e ? "" + e + ".641f828f0f05bf863eed.js" : "31605" === e ? "" + e + ".3931dd602f4d1cfe7d90.js" : "62809" === e ? "" + e + ".29383ff8649a68dc9ec2.js" : "40326" === e ? "" + e + ".965ebfce54ee25c8bb6d.js" : "23357" === e ? "" + e + ".87a13e84badce07c3386.js" : "38674" === e ? "" + e + ".735bc1d5a79133f4f261.js" : "43906" === e ? "" + e + ".6e3d5d8e81406222ceae.js" : "54167" === e ? "" + e + ".494d706c3c3c7374d917.js" : "95900" === e ? "" + e + ".2c3514fe634993054cd7.js" : "15972" === e ? "" + e + ".356b18da5a4a96ca5eec.js" : "6416" === e ? "6416.ae174e89d76358415ef8.js" : "32776" === e ? "" + e + ".b92665e6b85012955683.js" : "57878" === e ? "" + e + ".f80f2ae72af75d9274b1.js" : "67535" === e ? "" + e + ".7be701c483e927e20fb3.js" : "90687" === e ? "" + e + ".441b1364cd5f9e667b1a.js" : "23404" === e ? "" + e + ".589336eed7f8021f91f1.js" : "8016" === e ? "8016.126bccec83d26b2dfa96.js" : "17938" === e ? "" + e + ".606e9b36a1fcfd85747b.js" : "84992" === e ? "" + e + ".7ac965d87410e8091024.js" : "19959" === e ? "" + e + ".e41c50c386b9e4aca747.js" : "19878" === e ? "" + e + ".38577e57248a8460bd91.js" : "91632" === e ? "" + e + ".e54c5993aafaf49d05e9.js" : "93521" === e ? "" + e + ".c50ca6f2c16885c84fb2.js" : "80603" === e ? "" + e + ".a81b7d33a78be81c6ed2.js" : "22646" === e ? "" + e + ".bc81070d08397e8ee18b.js" : "75492" === e ? "" + e + ".0148c7b424d039f78965.js" : "85514" === e ? "" + e + ".979624b9545239953c04.js" : "76990" === e ? "" + e + ".fe4e17196598a4b70f62.js" : "54999" === e ? "" + e + ".f9e8648fcd628359f819.js" : "" + ({
            10377: "d064e3bfdaddef2a1d23",
            10508: "4800eae32434d0241a7c",
            10667: "7843ed78d31c974e3294",
            10778: "66a2bf594b0be6616b7e",
            10993: "7e87d8d9d18f4a3950be",
            11166: "1144eba19320d1785f13",
            11193: "224b793d4f1f721ac4f6",
            11256: "5c5237b40620287423df",
            11345: "e125ae0bccbe65907112",
            11686: "7406cbca06220797bd2f",
            11992: "932b49f9971a5b2f69b6",
            12112: "ea309e7f0d757832a7c5",
            12192: "c7a926c0dff9e0c21f01",
            12222: "ee05a5ca14dac7b1268b",
            12241: "61c46e0494f7942262eb",
            12435: "223c0e9132c6cd9dcafd",
            12610: "b3f47a8f5430bdc27858",
            12611: "eed1f99d1981ff2637f7",
            12817: "9d6b75cdcbd01a37a378",
            12831: "2841fb99624147a8bcc9",
            12891: "f5fc1dd3bb9f049cd5b5",
            12977: "d321e85dbe054ebf59dc",
            13111: "11f2f4ae7c7e0cd69142",
            13508: "95966b8f9a2d69c46010",
            13878: "2570f14013062373ef6c",
            14021: "8197676ce5446d02ae12",
            14192: "367d9c13be14c873c71c",
            14262: "93deeefac23793e4bb9b",
            14315: "28fac0c6299bd14b09d1",
            14339: "8b5856ee97810f14c47a",
            14466: "c5030a7cc50f0f87662c",
            14486: "02671ed8293ec74c990d",
            14653: "d4affe28ff4cef9ddd78",
            14760: "19277f862cb7fae92b39",
            15180: "3d718afdefaafe0fcf8e",
            153: "e333e8e91308c42edf8a",
            15421: "8154983e509a07d580bb",
            15450: "da072ae27a0853d451b8",
            15915: "80e9b2dccc07d9cd83ad",
            15968: "1c5c38ea74b18e9983c7",
            16087: "a73c06c23975b4c35f28",
            16169: "adbaec1837545076c1b1",
            16228: "c6fea9e29d876a559f26",
            1631: "499c700db23c09c5b9ac",
            16359: "3e7d631004dda0bd6425",
            16554: "2487a11a2a115627f9e9",
            16565: "97f948128d4922ea91c2",
            16600: "a7110143d3372f9075cc",
            16609: "646d736c3489a8258fed",
            1716: "1f54b41248b9db0038f1",
            17220: "dbd33ade79a437f23fd8",
            17672: "d968b0a2dc266e89ea7c",
            17712: "cebfdc8f4861988aeab9",
            17945: "220c4322bca983ebc37c",
            18036: "11bfa859904109075468",
            18101: "4dbaac197c57b64e1782",
            1812: "888ea83d77f74f0c0349",
            18249: "9abd378dfcbcde55efc4",
            18259: "2ec15894e412355c823e",
            18327: "1659b3392fb2a1b2f38c",
            18367: "e23f140d9e86ffcb12fe",
            18417: "f05d176e244f659bca73",
            18482: "f4af5726fcb323fd18b7",
            1862: "8c1283d3e54ead902152",
            18824: "34636719e350737eaf45",
            18831: "74e36c4c078f2cc4d6ee",
            18879: "370f17076e909dce63f9",
            1906: "38698cb741764be64f9d",
            19213: "63f155ca31338432f800",
            19255: "9b98b81a72900f664a97",
            19538: "83020ea6628eb4270da8",
            19701: "ad5c1f1a3a60cb9ae771",
            19726: "3147f5756c3e104d8f14",
            19976: "538fef06222aeeac0bef",
            20196: "3b9518d5ac3449a784c2",
            20212: "d505fad10168441572f1",
            20268: "10bee6966ee67f9eb30a",
            20294: "9ba9f548ac330dac11cf",
            20353: "dd194e60a9e24f2c9932",
            2045: "11eccd7191c3ba2f6b94",
            20467: "fea15eaf37d5cc8697be",
            20575: "71f87be16e06901b99f9",
            20653: "69601d02ebc106be5539",
            20727: "4bec80e97794b5d93f47",
            20786: "ac2c1ed819c945a87504",
            20869: "1a2d5e6b70649d43da9a",
            21112: "b2608e13959e943e201b",
            21395: "368f5636f2a62ef92833",
            21617: "43aa5baedd0197eee41f",
            21812: "95aa69b076edf3c1851c",
            21863: "f4b050634233844854f9",
            21897: "ff016a42e6e2875cca41",
            219: "c87fb17567183e2ad459",
            21960: "13b9adbbdd554c208faf",
            21971: "b48909bef16fde4197b3",
            2199: "f7c0beb10495b3726738",
            22036: "b47feef7dab9d819ef6d",
            22042: "d450c99869c764c7d909",
            22101: "2d05bd2f65e7d41032b8",
            22183: "38cc8928cef144fe9c38",
            22321: "0d0275005a3112f1ca47",
            22347: "bf3369c35c813b73b309",
            22377: "b000ab8cbc8c4a194a25",
            22458: "773abefe0aed9e2926e4",
            22482: "a4106932f4844da08a5e",
            22523: "e305c15c7caa0db929d9",
            226: "ab7769e97525ef87dba9",
            22602: "80b84e5ce3a6357e574c",
            22732: "abdb24249639ba336cfb",
            22862: "1a42f6c0d407069b5ced",
            22872: "014e8ce7d0f4434d183f",
            22942: "dfdbf72155b322ca0b08",
            23124: "124dff78b7373f4b9340",
            23401: "5730b159942c49a3ac53",
            2356: "7c7e6e53c869e131d5cd",
            23746: "afeb938b8245b1a281a3",
            23755: "9e3b957bd201198b20d0",
            23835: "9f96a2eb68ce43b0d9a0",
            23847: "295e78ba39b0af151e3b",
            23952: "deb6675d0df5c18a37ed",
            24017: "c4fc2789de58ab8e225b",
            24053: "fbbf0c91ab7b561e64d1",
            24267: "cb456bc362f2f9a11d89",
            2435: "b26055edab96c161338a",
            24478: "b375b4c6818a20f255e1",
            24642: "f19723d2b1bff05a49d1",
            24753: "424b346df79e33ee5779",
            24783: "980642b7f33320d2f110",
            24813: "c7ab712b10745dcea6f3",
            25070: "9d24c168e5b3708f7c89",
            25073: "b4d0666c3e740eb20560",
            2535: "154c7f2ed8bc28506167",
            2538: "53126c48c8ad622fbc14",
            25421: "7dd21e9b9598bc6ecc05",
            25443: "24db192a6249ee652c91",
            25507: "7cd5d119c9a7be1353fb",
            26176: "474e81aa33052323deeb",
            2634: "678e96b18a40fd95811a",
            26460: "c51097872438bc4fd5f8",
            2668: "124abbcabaad024fc441",
            27128: "d0f7571c3ee17833600d",
            27157: "83b1e3b7223c0e8f3a4d",
            27381: "1552b34d22ee5996a214",
            27526: "561804e678779ff113ca",
            27601: "e1af0311ff4bec0fe3b4",
            27751: "338ed0fd7a4ddcb346d8",
            27919: "7c4b467a2808a7e56213",
            27933: "854032bc0513fb12075b",
            28020: "fb205410f2c5c301c1b4",
            28249: "a8167f7e6e31c922a53f",
            28296: "2abcdc9e812045bc7720",
            28382: "c121c2750d1579e56e9d",
            28479: "0f25967b7ed075a049cf",
            28538: "ffcdd670c47cdb4ed149",
            28614: "df45e1ccb1e4e833f609",
            28990: "909027390c9aade15556",
            29041: "e69c0e6d7cf6310923db",
            29136: "1403ba405c8d11da9dd2",
            29396: "a8688e08c6ff5bae48b9",
            29608: "e3750d3c465ccd663049",
            29641: "4eac724bbed08b3e2918",
            29924: "d8585217f1a46c3503d5",
            30166: "f4977a4cb6d0fc4c516e",
            30243: "e39084ff36d6499c422f",
            30244: "985bd0b5adf6a9e0af42",
            30364: "d22ad94557125983417f",
            30386: "38541d0a127353004a3e",
            30419: "243625e93ae09418440b",
            30478: "10c33d33d0b272a0b5b6",
            30634: "9f870e01572b481303ac",
            30684: "99a6c61a17e4c302a4b7",
            3084: "a4d96e9d233f929180de",
            30997: "62a503a7aaa861732e7d",
            31085: "f0c914b0a40f073c6c72",
            31093: "7348e972c1b34e5d4cce",
            31177: "ae110c08cf6c0bd668d0",
            31270: "56568ef47535adb53871",
            3183: "fc0fce3e95825595673c",
            31835: "0aded8fe7b067c1557f6",
            3190: "c19808b118261ab302e7",
            32157: "9443fc0019c26cb5915f",
            32278: "bb704fbd5e0d46ffd8ce",
            32627: "212a0ceb7dd91e0e4aec",
            32640: "47f497e8cfdc099c8c01",
            32747: "51d8167e7d1eb8b29f8f",
            3277: "a61cfebecec2bc0af1bb",
            32886: "ec0d1ac7d8c05ef96ae2",
            3289: "318cf838f8fbc29088b5",
            32991: "06e79d413b86f5de0c02",
            33053: "15d4c7bb8adeba378a64",
            33065: "debf54c8ad7eb03010df",
            33156: "2af4f5e8e8c5ccbb5f8a",
            33184: "3fc0ddb4b5f762eb682a",
            33213: "3b675d1c54e18656d702",
            33238: "165b4ab03a28472ec805",
            33273: "440fb5eea6b6bf249f3a",
            33641: "607d59109e1286972e92",
            3378: "90dfd63749414372f019",
            34049: "56b4c929d161afb496f9",
            34191: "d081787ed3c4ed845b24",
            34345: "53ed8bd59018c38388b5",
            34424: "d03bf1da8080bf0c5da7",
            34627: "c9975dc9fd8f6e2347a4",
            34842: "39de6a81f8cbd28d09d9",
            34933: "75fbe52e45a029d5d40e",
            35247: "6d4cf1c0a9a9455bb411",
            35282: "a64daa0febfea15cd14c",
            35401: "64ad2367557a375a1db1",
            35489: "e1d9759a37fcfba657ea",
            35641: "65d7aa4aaae8a7a0849b",
            358: "dd917ee47ea86745155f",
            35822: "ba46d46a24f076947254",
            35869: "40b05968a1dee169a3cc",
            36052: "d4c012fa37ac191be5fe",
            36278: "170c0d42857ef6a88f1a",
            36371: "93cd1778543bc8a453de",
            36385: "e6eb268fbe41635defa9",
            36439: "54751dd25004a3f6d34a",
            36441: "98e1b00f6ad0b749b97a",
            36494: "7e4a0e12a2f3008d5d36",
            36514: "2c0b46fb8601a597f1bb",
            36848: "b35c6957d5bcda5e7c8f",
            36869: "a22e301ff540f678cb25",
            36968: "c42cc83e25ab188549d0",
            36970: "f0a85839ad49bdfe6532",
            36995: "1fa2cda4522bea22f219",
            37052: "a95c3d72637acb255595",
            37066: "c0b61659ed0b42eae95c",
            37133: "3c6472632c78f6e4209c",
            37194: "d38cf1f2d1078379005e",
            37220: "0daac4b4202c0c4cf378",
            37357: "09c8dee7e667813d7ae0",
            37372: "858eec4fa1f5cecbe9da",
            37473: "ff0f1e96cf47a3e4a7b5",
            37483: "442e35c8fe13db9b4d8a",
            37558: "91fe7ac4242b036b1d6b",
            37564: "c6470894b4c7d9bf54a6",
            37566: "e58d1b72a91bc561dba5",
            37586: "b8cd372d18396439bb86",
            37655: "bc0b364b67caa86a4e11",
            37720: "7c9a4c5df3f4344a1ddd",
            37740: "3cf773ecf3aae49b7086",
            37766: "2966e4f80d6dc4770798",
            37880: "eb42f9866e57f52cafb3",
            37969: "d21ce93490e8c787ed26",
            38047: "4b63602d181f5d60e59d",
            38062: "ad614b9583634d9d5f1d",
            3807: "aa5ac255a0ead15fd3cf",
            38359: "24cbe73dc4bdd6dc3a2c",
            38413: "a8fc50b4b037c0c478a6",
            38506: "77e801208b047a7b0f27",
            3865: "4dc39e38ba642dc16dd0",
            38651: "522adec52c9e3d6863f1",
            38779: "d0b305ee79c24ba79ca7",
            39009: "fa6e894faa3207cd7791",
            39010: "fb33f4f89bd28159e861",
            39143: "90a4c667240676b8b281",
            39248: "ab4c4ad686ab0d73f4f4",
            39285: "6ffe7ad7ba7dc5a9ea02",
            39305: "1ec9217aeb2a3b5c2775",
            394: "d62eb749a338810237ab",
            39511: "39b64aa86b60132266b3",
            39612: "250b4e8f59a69de8183c",
            39627: "94db3d15afa5426cefef",
            39648: "bcc516c1aa9117c844c4",
            3985: "43ff1ee97d3e776c8c34",
            40035: "e98876498ee9ec5016c7",
            40096: "61432e98bbb6106d56ed",
            40146: "189094a30aa78572ea26",
            40157: "9df7708b5e93c03a868e",
            40283: "105053103a58598f55b4",
            40331: "c34278e4248f651a17f6",
            40390: "fb2828a9037a2eac95cf",
            40897: "911bcaae892246d197e3",
            410: "f7854346fd7c9df9a22b",
            41023: "5451919c8a046473531e",
            41128: "1d9d9b82d3dddbcdf694",
            4117: "dc8e872471bd172ef589",
            41281: "c6652222b7ee108c714f",
            41549: "1273b8966c3a83c1edb0",
            41552: "05b2d9c30f94c92f7957",
            41588: "beb6f857047c05428c67",
            41814: "106d0cda79ea03413270",
            4189: "42abedad40bff25b3c4c",
            41947: "f50c1b3ec7d3567465ae",
            41953: "79a918ba2c9b8d678d56",
            41984: "b1855d78621fb9c80fc7",
            42358: "618e4fbef855d0f25a06",
            42483: "7bd0f08621c14392292d",
            4266: "1bbe9d432c3f6f9bdb17",
            4267: "7b4908a3e6ab3b23efdc",
            42758: "7d4ba29e17da4b063ab5",
            42892: "973ee2633cd5abbf2f3d",
            43057: "c46c41df7df0c400e4f6",
            43133: "80aec7ff8950bcb0f408",
            43350: "b7a90c48b64066e5429f",
            43353: "36807aba668326afed05",
            43502: "040473f044d569f60284",
            43643: "17ed19219dee96659729",
            43782: "3c660743dc8eb3204f3e",
            43903: "79a3047d75e3d91d113e",
            44153: "cf4fe35327eb768e045c",
            4419: "895c944ab0ce764fffb7",
            44462: "1f055a8b3e55fa193305",
            44754: "6d7308159630acf28468",
            44798: "587c8e5e006c398073df",
            44808: "23e73c1127a852d7c21f",
            44827: "75017f4569c7b2e179ad",
            44878: "e2bf78a9302badfa751a",
            45074: "6ac27f7a3b31070cc371",
            45094: "ce8a723cb127dc2dfbfd",
            45130: "2a37241d7968bdecc8d5",
            4530: "b9737da79b732c5472eb",
            45576: "781c45dec6898cc6180e",
            45746: "ed677e8a505aa36741e5",
            45747: "d386c895d469c016ac6d",
            46161: "77441d28feeb5d461d66",
            46369: "478c011e942546ce76b7",
            46468: "0caf7d0ecfe447310e19",
            46826: "d445da5d31126b37b1cd",
            46865: "7312ed5edebe32fc48ab",
            46882: "0c3287936afdfef6180b",
            46896: "95555f081c8438c3cf33",
            47034: "85f10d970436ba2bc47a",
            47055: "f6b27aef66c43eae360e",
            47228: "c3031b630ba6bcb1a10a",
            47354: "8dd7b22042e1a8a32b1c",
            47435: "2730f829569bd46f65a8",
            47484: "19eeb2002a56f38815d8",
            47674: "e6a1dd73f308558330f3",
            47704: "192a53ce249704e2124f",
            48017: "84876fba5f5ff2a9bcb1",
            48092: "2199f6d243b997580240",
            48174: "644ea2985ce6c07a8108",
            48707: "01bc99ed338b4cf14a7f",
            48748: "b4761e6f8e7030487599",
            48934: "88cde2aaacae19318b9c",
            49049: "27ef3dd005ad61368dc3",
            49131: "4d42cfc3829c38b633be",
            49146: "65fb98acaa911799da9e",
            49277: "63944b5d4e9c8f23569d",
            49365: "64e916d669a8c3c0167d",
            49508: "9b1e1de3fd4a5e6679f8",
            4970: "16e648ca5541332bc4e5",
            49827: "cc36031cca65823e6aba",
            49838: "79feffbf8b58c01c4b06",
            4984: "50ad4e0b92ad0772808b",
            5004: "382d55a250536aa862f6",
            50331: "4d1d5278ebf344eb2252",
            50498: "074d9353a8dd2280a5aa",
            50591: "7702c9e491dadc2ece39",
            50872: "70c7d6252f72995f887d",
            50929: "120ef5287891f51d1838",
            50960: "927182555f5a184249fa",
            50987: "b103dcd35c88afa72d77",
            51068: "31932d2b52eecb53337b",
            51199: "69c5b86142af9f29ad01",
            51373: "156342e810922547150e",
            51477: "ef9556551a4b6a72c18b",
            51529: "2f3cddfba779f3494172",
            51563: "54a3eab52edaceabcebf",
            51868: "db465dcfabf8154bc7bb",
            51934: "34e379852e5f2b1a4a9a",
            52110: "a55aaebe8461ed398ffb",
            5217: "28117d97ee8e5706cffb",
            522: "837ed49f219ac7e79ac5",
            52590: "96ecb4785a6a0b0b8aae",
            52657: "f1e7e11afe9735301612",
            52680: "571dbcb1aae9b25af823",
            53162: "510a624b5c5b2b5d7474",
            53195: "03b0fa7900bf4541d253",
            53269: "2a5ed16f66162931df0d",
            53466: "dd54f24a0c5a5ae14f51",
            53510: "3db1285290958819560e",
            53512: "7d4f24ab2e56939d507b",
            53579: "1f7f76aa11fbd3ab7c64",
            53751: "b9792147783fd92d8d97",
            53809: "e201d87aca8095a5ccc3",
            53889: "55e6ed37561bb7c417fb",
            53896: "a576a31c333f1a8f2b38",
            5396: "3b3ac0a1573652b95b6e",
            54021: "fa014ed84f5400c5062e",
            54076: "63722f2ff7b8fef5e405",
            54310: "9a0a09cc4b443712a389",
            54343: "d483a5cbea5addc64992",
            54441: "3b812cb16cc3b15cad7a",
            5454: "a8076468f9b97360ca9a",
            54597: "a86725b89391c9258124",
            54626: "ac00126c14d8975a9c49",
            54845: "086582f18b534c15579a",
            54868: "1d612cd4ed47e2018c87",
            54918: "d768896c4e5e54a824dd",
            54931: "6ee8e1b9d5d1433a520b",
            55224: "e7fe3edf5da4a63fafc3",
            55228: "710fc57b8deeb1f2ffa0",
            5528: "42fabbea1720859356e3",
            55601: "32c99ec519231a541c5c",
            5577: "c451a6beb9de9e2d5aad",
            55944: "ea113ecb6e2df4996353",
            56035: "e0cfd221b0348af4e1f6",
            56049: "bd94deea1b1bb9c63fa9",
            5609: "8cad844646eeedccfcbc",
            561: "200944d085aeab393864",
            56215: "4f7fb8df898a93f8fb42",
            56236: "9f999eaf69f078ee69cf",
            56268: "43e19d68952613f97ce1",
            56446: "a44989d454089a83c0cf",
            56496: "45aa10c7f04686b7c656",
            56630: "1d04eae65e9e10bfaa93",
            56826: "5338e052616156268df9",
            56944: "bacf69a28b8bd347cd29",
            57085: "2a5e60d23771bccc1e48",
            57372: "3a6301cdfcfbbc58dbfc",
            57387: "db75018281d1670f232c",
            57486: "04d568244552f88ca603",
            57539: "a812a0790288293c8d99",
            57650: "7a44bf517cfd5b493bfd",
            57761: "c35f2be75a1b66fbd0a2",
            57961: "8a62e6d8844efeec7796",
            58023: "82f5b7a6a00a7ab36a97",
            58175: "d3659f7f038df4752585",
            58227: "6bf55b3ba59e0232d5e5",
            58286: "1982178707b066f6031c",
            5829: "05b009f5bfd6361605c1",
            58360: "b6b9dd9ed7ec1614e3a2",
            58548: "deced35c50660b2e2c69",
            58621: "4b7ef8995d1288d139ec",
            5863: "628ad9cd5236a03ab9f1",
            58690: "f19ee498c1973812b8a8",
            5877: "b1edf5418582a44a5f1f",
            58903: "e56849d807e02a25a16b",
            59128: "16e3fc8f57902807a5aa",
            59281: "05c0088d396c50771da2",
            5945: "a74631c19600cab1961a",
            5950: "4e30e323285f42700215",
            59500: "7def729c76f0b55d8e51",
            59546: "68fd71a530ff90778c08",
            59642: "c4c24358bae3ccdaadad",
            59682: "678aff10dadf81641a7c",
            59716: "63a02c0b4df0ec3febf5",
            59729: "3c0f81d78671fd3a8a9a",
            59743: "406746b71127a5646eba",
            5996: "98c60214659c8f424d81",
            60005: "ca9f396c60abdb105a28",
            60079: "7317bdaa5f913fbafd0b",
            60082: "a48ce10f0fc3d630fe86",
            60133: "d86e8a0986995a2db519",
            6045: "9ba8c38413fe3a3bbc62",
            60592: "646c50d3db273e88437a",
            60618: "dfc376f7c4daf4161632",
            60677: "2ba6ded0576ea7b5501a",
            6074: "b7427b1e54e45e289f36",
            60878: "05c35c88024051180a54",
            61214: "de458f8ad2075777ed76",
            61366: "e1dfdc5d4076b6939bdd",
            61418: "b0268e2f3670ee4019a7",
            61482: "b78d1fc5668151b805e4",
            61536: "02f28cd30c5d6dce55e8",
            61624: "92d3958d85e3e6c3eec4",
            61672: "33b8904a15182b799e7c",
            61690: "26781d15d54f7539ff69",
            61939: "0dff902d2b2673f13130",
            62065: "19bf1fe4bd3e1888d878",
            62233: "8238ebe6f1ff1833ca03",
            62236: "a228930fe21ef11277a6",
            62498: "41e86bc702516087a3eb",
            62629: "f5975549da1435e02445",
            6284: "3cd418371352042efbef",
            62903: "4a4700f905c33c97f8df",
            62985: "bf31b8539c55265b8779",
            63007: "96d48307af88cfcec649",
            6310: "409906b362fc13709878",
            63629: "ac0230129f97d1154faf",
            63636: "10391e9ef088ee09ef3f",
            63676: "449158e689fb456746ad",
            6368: "7f56fa4ae4fb03e1b9c5",
            638: "0382c7712eaece98c812",
            6380: "7ee81890a9927ee213b5",
            64248: "dd7df8cde0c00cc8bad6",
            64250: "035066e8c0b634fae789",
            64409: "390583aaf60ad701c05b",
            64563: "89d8ff1bd47db6a0f4ee",
            64908: "765f21ea2ed1a4ce643a",
            64941: "20f2f15338326806ac34",
            65045: "0779ef589389b78c775a",
            6532: "e364ea96a3b95ba5343b",
            65652: "3b29a744b4d5e86c9447",
            65866: "bb0c59969a61f60bdb9e",
            6595: "2158e0daa9a51bc35a99",
            66050: "72bc56f430b18d920a72",
            66071: "ce812155966f639f6f44",
            661: "ba04c9f4e870e88fa228",
            66462: "4e901dc967d1ee90a882",
            66696: "586e85006af07cfb7543",
            66902: "e5b9c2aa233ff84ed145",
            66915: "e8a6ddcecb8c8bf2a842",
            66944: "8984d6ab2c92986846d9",
            67607: "5bfe72ca75f8f0759d0c",
            67753: "cf4545918022449fd1f1",
            67816: "18d6e666ee9cfc40fd35",
            67920: "cb539303e90133618234",
            68130: "0e53e0e7240e9b385024",
            68449: "75668ec78e5a3b5ef0b5",
            68535: "82eb906ff710f98fa544",
            68614: "344501f6cf5b4372b9f3",
            68720: "f84040c2b1ae3fe87f2a",
            68747: "fd953edf40335219fdb6",
            68784: "8790402d51b044446413",
            68822: "05b3de68f6753ce114d9",
            6901: "31c2375d1b0e3aa7ab96",
            69015: "0b5efa3239d9242ed0a4",
            69208: "9ce2b32d77da2e95a69e",
            69220: "91f451c235cca96d32a7",
            69240: "0bf8a5b4f1b3048d6a98",
            69473: "ca6aeae5ba1872104621",
            69481: "b29f154291c8c5abd89d",
            69495: "324b8fedb9743dfe4934",
            6957: "bccaefc80244ad9eb07a",
            69633: "18445458b7bbcdfbc133",
            69760: "b66be68a7179670af4eb",
            69788: "b007b43c3c2d8fcfa68c",
            69806: "2de796f2c5b8d87aed84",
            69923: "a8a9f6b6092de73faeb9",
            69935: "af6611b174c45b79a906",
            69969: "85db847bbb032d40161a",
            70036: "0cfb8c48283d1397aa25",
            70061: "9b94368a746eb486b857",
            70173: "0fa283a5d67792e09cdf",
            70253: "79754cae93ac469e7528",
            70528: "92ae52427143e3f2778c",
            70623: "3f5e6a9a3046ade4cdcf",
            70675: "6ca3ab1e705b198ba9d0",
            70716: "93692483d765b5fff281",
            70935: "f19d5ab15d13998d6277",
            710: "ca2f365756612f101da0",
            71196: "bf3935e2ac262842c928",
            71244: "e48c5fe380327fa452c2",
            71378: "14a16ffa2b45ad71c555",
            71517: "a3d07b6753c9431a7c59",
            71953: "8db52f0a122de66f6475",
            72323: "a881df372b1e09e4e72d",
            72458: "38a4a0a5a778dc755416",
            72588: "e1448bd6456d9a28bfda",
            72637: "f066b3693fb76524dc39",
            72642: "19807c694a0ea553e1f3",
            72760: "dd05c7ed681fdd264a0e",
            7285: "a67bb2f81663369b36b4",
            72891: "f3f37b877b374c9d5d3a",
            72920: "1276226058c56cbfc7f2",
            7302: "843680a99e8cc23b2091",
            73049: "71e596b52d42a0e41321",
            73149: "cc905e5faef7472a9afc",
            73206: "f0b61ed4f32b3ee1145c",
            73427: "8650e86ce02a397dfc2c",
            73872: "8cdbea2fdc2449f0a4a2",
            73921: "4b8b54bbdfa0b620b992",
            7402: "1c82057d672bf50c8878",
            74112: "31ba645d5a76c38dfb7b",
            74194: "aba90e473c1d9d093ad3",
            74203: "fd94551871de2c19c473",
            74294: "f9d7091f118c4240c2c8",
            74300: "92c7863d360aabf699fc",
            74459: "975c4e511656c08d4121",
            74543: "0ee20c2f29bbccffe978",
            74590: "2679a59f614860dd69a2",
            74602: "52259d090a78a5b7f4fa",
            74673: "1be91134940009846737",
            75409: "1db81c9d1e6e98e27595",
            75475: "5f270e34b3898106f1a3",
            75613: "e64f848147adb2e53eba",
            7573: "e072a0aa29890d46e227",
            7584: "ab2706cc048c7ec26227",
            75843: "9e0b0de5a8d5b4d6ef83",
            7590: "7d0d7227dbc2232f45aa",
            75994: "229351efcb11fbfc6e19",
            76233: "7b86e22f9d7bba5872d0",
            76241: "529ae754e3e0af645336",
            7649: "21f70e24d49c8fb3cbee",
            7654: "a6452947b53db4ce7e36",
            76540: "c9cbc9a84bf954a94835",
            76731: "96414d53a5392814b38d",
            76815: "e467b2f6c12fc8c83811",
            7685: "324fc8378419ab3dcddd",
            76888: "d4876d2baed23a95c8f9",
            77117: "debd13ce9e268afe993a",
            77122: "d02c6a8492e98599c26d",
            7717: "e01949afc287067d1bdb",
            77172: "0ce64d216238d1d30618",
            7728: "c4e6438542b336745ef4",
            77485: "5b6065f96021f1845f00",
            77578: "2b0e335607d147877961",
            77721: "781b616b10d647f4e039",
            77745: "b943a49b170e75284fc4",
            77800: "3b56111f1e3c8808e5db",
            77875: "f4c782d96a167aa7b3cb",
            77927: "3d162af01d8a307be7f3",
            78073: "69933356bf93e49cfe9d",
            78185: "ceeb91592d6fe4bd80bf",
            78221: "37761aae534af0ead536",
            78273: "a15c12db760dc27d9698",
            78587: "69a3b9132a5c2e6e490c",
            78607: "9e8be87361b4712cf557",
            78650: "0046019f93542e7dd740",
            78670: "0aa14e6db4c45bec0ad1",
            78704: "bcdf7fe4e1b81bbec845",
            78712: "ebe0395d251abc8fd7b1",
            7872: "c694ba86b3f926362376",
            78786: "45fa004997fe5d7c760f",
            79267: "fe9a2dd5e0c195735316",
            79457: "842e08db8f99ebbe46db",
            79477: "40d5a927d0b2fedcaa43",
            79521: "f79aa7a5fff8cb2f285f",
            7954: "b39153fee4c5eb4847eb",
            79618: "efc36eec4331ae13dce4",
            79764: "b4424e554b3edc233639",
            79921: "68681dd46413bca10faf",
            80026: "b71a9b30530bd6c54497",
            80301: "833a0b6a250797555bfe",
            804: "16433157f57499e8bd69",
            80404: "17ef1f260dabdaf03a6e",
            80451: "be0c59bc6477ccb45a13",
            80493: "64c136a4e79081f6657a",
            80869: "e7c0f0c36f8aa5a6e7d2",
            8102: "4c5cec4c5ec34715bcae",
            81124: "4b69a4fdcbdc7cf8833e",
            81247: "fa3d219e9ac599aca65b",
            81352: "dcdc3c1cb387e098e81c",
            81358: "be815bee85fa303bc006",
            8137: "4748e163d7e519ae006e",
            81539: "923265c91695cd5c2550",
            81811: "4a632a0fdfc76fbce3fa",
            81843: "fa7351c529f7d63a1995",
            81975: "c9264e3a555cb3baf449",
            821: "120810c7c7e0a57d0ef6",
            82143: "18cd5244b76ca6868ce7",
            82321: "810b2830ff33b10d9566",
            824: "669fdaefdb30b2fd264a",
            82560: "d85b42b4fc809c9c9f12",
            82634: "8b056633adae5b741f37",
            8286: "87d1a6996a78dc2ffa45",
            82882: "4cf4e4651b9d448856e7",
            82961: "ffbe8029ec61e1c9a5b8",
            83051: "7a35dd5667484c86c300",
            83264: "ae64332bd1c41bc7e946",
            83323: "ca5c861bf00bc77c4f1a",
            83331: "58c1009cafd545ecd8aa",
            83536: "8e5ada0b7f2e9e42e4e5",
            83613: "44e02b8db55614b61686",
            83646: "7905c3df6f99ddcafaff",
            8366: "2c7525b1c78aff0dcba1",
            83774: "bd736f60b7a68012ef2c",
            83816: "a32b30ac18f7cc5eed78",
            83942: "555fecc34a707a06de5c",
            84239: "b01bb936dcacd99667c7",
            84259: "1f53d4b4cd3fe223c2a8",
            84385: "efb680c76aa780b5a1ab",
            84399: "9a71aba6d8414db39c00",
            84482: "156abea2b22e1f50f898",
            84509: "3ea1488aa2468a11224b",
            84518: "81fae0d79458057c10eb",
            84686: "bdd368ec21a0b0951a7d",
            84722: "30c193a5ce22235c5ce1",
            84725: "0ea7697faacccf0d2cf7",
            84778: "f631f0259f226d5dd531",
            85093: "0ac86838c299c9b9beca",
            85100: "82243c61640bd6b6689a",
            85107: "289550143c14cf2d3df1",
            85281: "79a4ac78181d0140a90a",
            85342: "538d3e85a1b2de21e080",
            85351: "5c490901a0ec06cf749f",
            85552: "d65c74d2ff94ac17e97b",
            85668: "9551a9fc0a4bc4c6ba86",
            85760: "7273869c2ad3d2b1ecb9",
            85828: "6e97d6252e702fba0db2",
            85885: "c7542d3f1320eb0bd5a2",
            86047: "6a226fa003819501957b",
            86060: "e1a285670305512e31bc",
            86200: "0bda52e7b32a476cadac",
            8631: "7ada097d4ac85091b0a2",
            86426: "142263559be93ff28b69",
            86557: "6f7b26ad427ab81f2ee4",
            86977: "1ec4457edf200fb3d83b",
            87200: "38fa9c88edb1ae0b118e",
            87233: "8f19b405520c6f92ee03",
            8739: "4795079f7c69615518e7",
            87549: "5faeae6adb92a1f3a147",
            87624: "899a04e34397a6569485",
            8790: "0849aa769826dc2b0922",
            88358: "8b697d5e3af06eb61baf",
            88408: "2efa98671b832bec2114",
            88571: "7ad0010fce6adefc64e1",
            88870: "7270cd06cd6fd5e1589f",
            89069: "507d5c9e3a44d5bad88e",
            8926: "b815a438c9d719390387",
            89289: "4cd87126444c4bbf9c33",
            89413: "ec3f5a20a0421f94d283",
            89552: "830e64f7dd42b75068ed",
            89582: "42d0b5bd914195320d7b",
            8965: "681c4940fa29272cdece",
            89675: "eb71a90827f399588581",
            89715: "a3794598e46fd920f25f",
            89792: "b318bd0c85cfaf3d9b70",
            89873: "f0b82b00e135e3be411c",
            9007: "2008c598df13f7ae9e8f",
            90220: "171909c9ff0aa7694857",
            90424: "693a017d2b1823b3c17b",
            90508: "060e64a93c4a038467d1",
            90542: "5d154bc9a2b5cee6bd12",
            90688: "d960e64b38fb84e38bc5",
            91032: "c3dd26c8511cfb91f41e",
            91199: "c0cae60a32dd8c8efd68",
            91315: "f64b285c9b1f76b67a69",
            91789: "838b1f0e42b7424e6a01",
            92006: "3cbfd9b742fe4b931cd7",
            92339: "d09d15bc01caf9b0c1ca",
            92401: "8e7e69ed8b2cabd96083",
            92446: "5a35a7110f2bf1cb62fd",
            92557: "cd9c4fc437843ef55a76",
            92575: "a4133d71989969387f1a",
            92695: "1e249025519d2bbf764e",
            92714: "bf25634e209c5dbf26fb",
            92780: "70ed127226a0d781f747",
            92795: "05b029a0e477099aaf62",
            92816: "cd00f7eef4869817508d",
            92821: "495ca15c3ae86d5ca312",
            92893: "f5116555c0137308c597",
            93198: "290e2929513e7a940723",
            93288: "e46e65585a4ef009c291",
            9343: "de102b64043cb9ffa8dd",
            9347: "f6e5a569970b2a001735",
            9354: "c3c328ef2df5fa4eacdb",
            93554: "a65c693b35e0ef70d96d",
            9362: "1147293c15ad3faf1d5b",
            93626: "268343b2c8ca2afc15b9",
            93776: "9be442c486d748385d94",
            94005: "7e692d5f875b3947b957",
            94064: "f9b5889eea38769ba1d7",
            94566: "bde74e26ea8ff5be4eed",
            94633: "232cf70c304360f82a87",
            94889: "06de3a26f81350377899",
            94912: "a986bb025bcf65e4c199",
            95019: "eadf45fb197d258e6277",
            95136: "1fd8107340f7b48f3245",
            95257: "b208906654f533dc16ea",
            95258: "63f81f3b28fccfafdea7",
            95307: "bee8b56805d6dafe473a",
            95393: "5478d3424f0f7ff8836d",
            95422: "7d1bd4f74170bc506e7c",
            95468: "4e80c42eea7e4361d969",
            95480: "ef43cbaad11578e38a98",
            9558: "f4e4e43fae6255fa967b",
            9573: "aa08c1adba909154143e",
            958: "9bdda2ed4963f297fa5f",
            95883: "8506f4c92d1ad182f902",
            95925: "5903a472ba87d18419d4",
            95937: "619731c5ef27b4939fc0",
            95962: "05b12719589bb7ec474f",
            9606: "853ad202d0b247f7b7ce",
            96246: "bf85f30270a852129456",
            96307: "4684b65b6467989f80cb",
            96473: "70feb7a4b31b9680a55b",
            96626: "9b2cbeb37a79611f52e4",
            96645: "10e8fd3ee5aac400fb7a",
            9738: "679883127986b8329242",
            97516: "29e91b51d4b9995f202c",
            9766: "cc8b61d3b921ad13f62e",
            97674: "2a3fc73c7ebf83928560",
            98067: "b58dc3e1c33118e51449",
            98105: "8f60eb4f9aff347dc5c3",
            98137: "aff6f9704f3d00708cdf",
            98335: "3a4c10402d3dbf4f8d95",
            98466: "dfc306d25b4e665a70e2",
            98538: "2c499b03f52e2795965c",
            98570: "7d2b3320dbe66027b1b9",
            98920: "abec0675177e45bb0f64",
            98952: "8ee42374cb4350864e1d",
            99339: "36015597778a49784d26",
            99414: "14f564f265dc4ba92c72",
            99450: "3603a39a366c93beec08",
            99617: "d5cd46122eb92de19f36",
            99694: "0b1d52616caba9c4b2c0",
            99809: "1173d8c7b84fb56ce2cc",
            99857: "0918363c2015c9d98b37",
            99905: "b3fc9b4790e592d1c328",
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
                27519: 0,
                2797: 0,
                30638: 0,
                43455: 0,
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
    var u = s.O(void 0, ["49237", "99387", "24217", "62734", "43455", "10586", "64787", "2797", "30638", "17764", "84471", "70397", "27519"], function() {
        return s("650204")
    });
    s.O(u)
}();
//# sourceMappingURL=web.270b5c25f2b926748c93.js.map