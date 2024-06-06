! function() {
    var e, a, t, d, n, c, i, f, o, r = {
            242167: function(e, a, t) {
                "use strict";
                t("250668")("Uint32", function(e) {
                    return function(a, t, d) {
                        return e(this, a, t, d)
                    }
                })
            },
            544140: function(e, a, t) {
                var d = t("796581"),
                    n = t("149912");
                e.exports = function e(a, t, c, i, f) {
                    var o = -1,
                        r = a.length;
                    for (c || (c = n), f || (f = []); ++o < r;) {
                        var l = a[o];
                        t > 0 && c(l) ? t > 1 ? e(l, t - 1, c, i, f) : d(f, l) : !i && (f[f.length] = l)
                    }
                    return f
                }
            },
            149912: function(e, a, t) {
                var d = t("466293"),
                    n = t("443735"),
                    c = t("402428"),
                    i = d ? d.isConcatSpreadable : void 0;
                e.exports = function(e) {
                    return c(e) || n(e) || !!(i && e && e[i])
                }
            },
            90757: function(e, a, t) {
                var d = t("544140");
                e.exports = function(e) {
                    return (null == e ? 0 : e.length) ? d(e, 1) : []
                }
            },
            799656: function(e, a, t) {
                "use strict";
                t.r(a);
                var d = t("735250");
                t("470079");
                var n = t("613828"),
                    c = t("442837"),
                    i = t("353926"),
                    f = t("314897"),
                    o = t("981631");
                a.default = c.default.connectStores([i.default, f.default], () => {
                    let e = f.default.getToken();
                    return {
                        token: e,
                        hasLoadedExperiments: null != e || i.default.hasLoadedExperiments
                    }
                })(e => {
                    let {
                        hasLoadedExperiments: a,
                        token: t
                    } = e;
                    return null != t ? (0, d.jsx)(n.Redirect, {
                        to: o.Routes.APP
                    }) : a ? (0, d.jsx)(n.Redirect, {
                        to: o.Routes.DEFAULT_LOGGED_OUT
                    }) : null
                })
            },
            540117: function(e, a, t) {
                "use strict";
                t.r(a);
                var d = t("735250"),
                    n = t("470079"),
                    c = t("120356"),
                    i = t.n(c),
                    f = t("715702"),
                    o = t("796163"),
                    r = t("961047");
                class l extends n.Component {
                    render() {
                        return (0, d.jsx)("div", {
                            className: i()(o.app, r.vertical),
                            children: (0, d.jsx)(f.default, {})
                        })
                    }
                }
                a.default = l
            },
            715702: function(e, a, t) {
                "use strict";
                t.r(a);
                var d = t("663993");
                a.default = (0, d.makeLazy)({
                    createPromise: () => Promise.all([t.e("49237"), t.e("99387"), t.e("23755"), t.e("80301"), t.e("29549"), t.e("31605"), t.e("56630"), t.e("6380"), t.e("11250"), t.e("57878"), t.e("77172"), t.e("4970"), t.e("95393"), t.e("67535"), t.e("86977"), t.e("18101"), t.e("81539"), t.e("8739"), t.e("58286"), t.e("41947"), t.e("3084"), t.e("30243"), t.e("62809"), t.e("38779"), t.e("29042"), t.e("59743"), t.e("23404"), t.e("97188"), t.e("15357"), t.e("97403"), t.e("27385"), t.e("11256"), t.e("13546"), t.e("71984")]).then(t.bind(t, "601564")),
                    webpackId: "601564"
                })
            },
            155221: function(e, a, t) {
                "use strict";
                t.r(a), t.d(a, {
                    Overlay: function() {
                        return B
                    }
                }), t("47120");
                var d = t("735250"),
                    n = t("470079"),
                    c = t("664751"),
                    i = t("266067"),
                    f = t("613828"),
                    o = t("990547"),
                    r = t("719711"),
                    l = t("271579"),
                    s = t("756647"),
                    b = t("442837"),
                    u = t("433517"),
                    p = t("799656"),
                    h = t("540117"),
                    m = t("765717"),
                    _ = t("663993"),
                    E = t("329816"),
                    I = t("554608"),
                    g = t("83949"),
                    O = t("137412"),
                    T = t("314897"),
                    S = t("626135"),
                    A = t("361207"),
                    w = t("690032"),
                    v = t("358085"),
                    N = t("998502"),
                    R = t("981631"),
                    D = t("188785"),
                    C = t("436620");
                t("928518"), t("972830"), t("704806");
                let L = (0, _.makeLazy)({
                        createPromise: () => Promise.all([t.e("49237"), t.e("61482")]).then(t.bind(t, "576184")),
                        webpackId: "576184",
                        name: "UnsupportedBrowser"
                    }),
                    P = (0, _.makeLazy)({
                        createPromise: () => Promise.all([t.e("99387"), t.e("88571")]).then(t.bind(t, "431583")),
                        webpackId: "431583",
                        name: "DownloadApps"
                    }),
                    y = (0, _.makeLazy)({
                        createPromise: () => t.e("81975").then(t.bind(t, "484097")),
                        webpackId: "484097",
                        name: "InviteProxy"
                    }),
                    M = (0, _.makeLazy)({
                        createPromise: () => Promise.all([t.e("99387"), t.e("20786")]).then(t.bind(t, "417663")),
                        webpackId: "417663",
                        name: "VerifyConnectedAccount"
                    }),
                    k = (0, _.makeLazy)({
                        createPromise: () => Promise.all([t.e("99387"), t.e("16565")]).then(t.bind(t, "984388")),
                        webpackId: "984388",
                        name: "LinkConnectedAccount"
                    }),
                    U = (0, _.makeLazy)({
                        createPromise: () => t.e("46882").then(t.bind(t, "924339")),
                        webpackId: "924339",
                        name: "LinkAuthorize"
                    }),
                    x = (0, _.makeLazy)({
                        createPromise: () => Promise.all([t.e("99387"), t.e("19878"), t.e("49277")]).then(t.bind(t, "197528")),
                        webpackId: "197528",
                        name: "ActivateDevice"
                    }),
                    j = (0, _.makeLazy)({
                        createPromise: () => Promise.all([t.e("49237"), t.e("99387"), t.e("70716"), t.e("23755"), t.e("30386"), t.e("80301"), t.e("83833"), t.e("56215"), t.e("29549"), t.e("31605"), t.e("56630"), t.e("6380"), t.e("11250"), t.e("57878"), t.e("77172"), t.e("4970"), t.e("95393"), t.e("67535"), t.e("86977"), t.e("18101"), t.e("81539"), t.e("8739"), t.e("39285"), t.e("58286"), t.e("14262"), t.e("41947"), t.e("3084"), t.e("30243"), t.e("90687"), t.e("82882"), t.e("62809"), t.e("38779"), t.e("29042"), t.e("59743"), t.e("7590"), t.e("23404"), t.e("67526"), t.e("97188"), t.e("37766"), t.e("53466"), t.e("22036"), t.e("43643"), t.e("15357"), t.e("90144"), t.e("37220"), t.e("11623"), t.e("13918"), t.e("92557"), t.e("91315"), t.e("97403"), t.e("80026"), t.e("72588"), t.e("49508"), t.e("48378"), t.e("72922"), t.e("27385"), t.e("83939"), t.e("11256"), t.e("91354"), t.e("22099"), t.e("75308"), t.e("13546"), t.e("95468"), t.e("94864")]).then(t.bind(t, "457094")),
                        webpackId: "457094",
                        name: "ViewsWithMainInterface",
                        memo: !0,
                        id: "457094"
                    }),
                    V = (0, _.makeLazy)({
                        createPromise: () => Promise.all([t.e("49237"), t.e("99387"), t.e("96427"), t.e("49368"), t.e("75492"), t.e("11250"), t.e("57878"), t.e("95393"), t.e("67535"), t.e("90687"), t.e("52030"), t.e("19878"), t.e("10778"), t.e("93669"), t.e("76990"), t.e("61386")]).then(t.bind(t, "822699")),
                        webpackId: "822699",
                        name: "ViewsWithAuth"
                    }),
                    G = (0, _.makeLazy)({
                        createPromise: () => t.e("32640").then(t.bind(t, "285773")),
                        webpackId: "285773",
                        name: "ViewsWithOAuth2"
                    }),
                    F = (0, _.makeLazy)({
                        createPromise: () => Promise.all([t.e("49237"), t.e("99387"), t.e("10508")]).then(t.bind(t, "549652")),
                        webpackId: "549652",
                        name: "BrowserHandoff"
                    }),
                    H = (0, _.makeLazy)({
                        createPromise: () => t.e("76888").then(t.bind(t, "573276")),
                        webpackId: "573276",
                        name: "MobileWebHandoffFallback"
                    }),
                    B = (0, _.makeLazy)({
                        createPromise: () => Promise.all([t.e("49237"), t.e("99387"), t.e("23755"), t.e("30386"), t.e("80301"), t.e("83833"), t.e("29549"), t.e("31605"), t.e("56630"), t.e("6380"), t.e("11250"), t.e("57878"), t.e("77172"), t.e("4970"), t.e("95393"), t.e("67535"), t.e("86977"), t.e("18101"), t.e("81539"), t.e("8739"), t.e("39285"), t.e("58286"), t.e("14262"), t.e("41947"), t.e("3084"), t.e("30243"), t.e("90687"), t.e("82882"), t.e("62809"), t.e("38779"), t.e("29042"), t.e("59743"), t.e("7590"), t.e("23404"), t.e("97188"), t.e("37766"), t.e("53466"), t.e("22036"), t.e("43643"), t.e("15357"), t.e("37220"), t.e("11623"), t.e("13918"), t.e("92557"), t.e("91315"), t.e("72588"), t.e("48378"), t.e("72922"), t.e("83939"), t.e("91354"), t.e("22099"), t.e("69240")]).then(t.bind(t, "290161")),
                        webpackId: "290161",
                        name: "Overlay"
                    }),
                    W = (0, _.makeLazy)({
                        createPromise: () => Promise.all([t.e("49237"), t.e("99387"), t.e("18824"), t.e("75843")]).then(t.bind(t, "430075")),
                        webpackId: "430075",
                        name: "SuspendedUserSafetyHubPage"
                    }),
                    z = (0, _.makeLazy)({
                        createPromise: () => Promise.all([t.e("49237"), t.e("99387"), t.e("19878"), t.e("28296")]).then(t.bind(t, "630107")),
                        webpackId: "630107",
                        name: "QuestsLandingPage"
                    }),
                    K = (0, _.makeLazy)({
                        createPromise: () => Promise.all([t.e("99387"), t.e("47228")]).then(t.bind(t, "531338")),
                        webpackId: "531338",
                        name: "ConnectionsAuthorizeContinue"
                    }),
                    Y = (0, _.makeLazy)({
                        createPromise: () => t.e("54918").then(t.bind(t, "838134")),
                        webpackId: "838134",
                        name: "ApplicationDirectoryRoutes"
                    }),
                    q = () => (0, d.jsx)(j, {}),
                    X = new Set([R.Routes.LOGIN, R.Routes.LOGIN_HANDOFF, R.Routes.INVITE_LOGIN(":inviteCode"), R.Routes.GIFT_CODE_LOGIN(":giftCode"), R.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode")]);

                function Z(e, a) {
                    return a ? e.filter(e => !X.has(e)) : e
                }
                class Q extends n.Component {
                    componentDidMount() {
                        N.default.cleanupDisplaySleep(), O.default.initialize()
                    }
                    componentWillUnmount() {
                        O.default.terminate()
                    }
                    render() {
                        let e;
                        let {
                            isAuthenticated: a,
                            migrationStatus: t,
                            skipsSettingDefaultPageTitle: n
                        } = this.props;
                        return e = t === I.MigrationStatus.IN_PROGRESS ? null : C.IS_APP_COMPATIBLE_BROWSER ? v.isPlatformEmbedded ? (0, d.jsxs)(f.Switch, {
                            children: [(0, d.jsx)(f.Route, {
                                exact: !0,
                                path: R.Routes.INDEX,
                                render: () => (0, d.jsx)(p.default, {})
                            }), (0, d.jsx)(m.default, {
                                exact: !0,
                                path: R.Routes.APPS,
                                component: P
                            }), (0, d.jsx)(f.Route, {
                                path: Z([R.Routes.LOGIN, R.Routes.REGISTER, R.Routes.INVITE(":inviteCode"), R.Routes.INVITE_LOGIN(":inviteCode"), R.Routes.GIFT_CODE(":giftCode"), R.Routes.GIFT_CODE_LOGIN(":giftCode"), R.Routes.RESET], D.CONFERENCE_MODE_ENABLED),
                                component: V
                            }), (0, d.jsx)(m.default, {
                                path: R.Routes.INVITE_PROXY(":channelId"),
                                component: y
                            }), (0, d.jsx)(f.Redirect, {
                                from: R.Routes.INVITE(""),
                                to: R.Routes.LOGIN
                            }), (0, d.jsx)(f.Redirect, {
                                from: R.Routes.GIFT_CODE(""),
                                to: R.Routes.LOGIN
                            }), (0, d.jsx)(f.Route, {
                                render: q
                            })]
                        }) : (0, d.jsxs)(f.Switch, {
                            children: [(0, d.jsx)(m.default, {
                                exact: !0,
                                path: R.Routes.INDEX,
                                render: () => (0, d.jsx)(p.default, {})
                            }), (0, d.jsx)(f.Route, {
                                path: Z([R.Routes.LOGIN, R.Routes.LOGIN_HANDOFF, R.Routes.REGISTER, R.Routes.BILLING_PREFIX, R.Routes.BILLING_PROMOTION_REDEMPTION(":code"), R.Routes.INVITE(":inviteCode"), R.Routes.INVITE_LOGIN(":inviteCode"), R.Routes.GIFT_CODE(":giftCode"), R.Routes.GIFT_CODE_LOGIN(":giftCode"), R.Routes.GUILD_TEMPLATE(":guildTemplateCode"), R.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"), R.Routes.DISABLE_EMAIL_NOTIFICATIONS, R.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, R.Routes.RESET, R.Routes.REPORT, R.Routes.REPORT_SECOND_LOOK], D.CONFERENCE_MODE_ENABLED),
                                component: V
                            }), a ? null : (0, d.jsx)(f.Route, {
                                path: R.Routes.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                                component: V
                            }), a ? null : (0, d.jsx)(f.Route, {
                                path: R.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
                                component: V
                            }), (0, d.jsx)(f.Redirect, {
                                from: R.Routes.INVITE(""),
                                to: R.Routes.LOGIN
                            }), (0, d.jsx)(m.default, {
                                path: R.Routes.INVITE_PROXY(":channelId"),
                                component: y
                            }), (0, d.jsx)(f.Redirect, {
                                from: R.Routes.GIFT_CODE(""),
                                to: R.Routes.LOGIN
                            }), (0, d.jsx)(m.default, {
                                path: R.Routes.QUESTS(":questId"),
                                component: z,
                                impressionName: o.ImpressionNames.QUESTS_LANDING_PAGE,
                                impressionProperties: e => {
                                    let {
                                        computedMatch: a
                                    } = e;
                                    return {
                                        quest_id: a.params.questId
                                    }
                                }
                            }), (0, d.jsx)(m.default, {
                                path: R.Routes.HANDOFF,
                                component: F
                            }), (0, d.jsx)(m.default, {
                                path: R.Routes.MOBILE_WEB_HANDOFF,
                                component: H
                            }), (0, d.jsx)(m.default, {
                                path: R.Routes.CONNECTION_LINK(":type"),
                                component: k
                            }), (0, d.jsx)(m.default, {
                                path: R.Routes.CONNECTION_LINK_AUTHORIZE(":type"),
                                component: U
                            }), (0, d.jsx)(m.default, {
                                path: R.Routes.ACTIVATE,
                                component: x
                            }), (0, d.jsx)(m.default, {
                                path: R.Routes.CONNECTIONS_AUTHORIZE_CONTINUE(":type"),
                                component: K
                            }), (0, d.jsx)(m.default, {
                                path: R.Routes.CONNECTIONS(":type"),
                                component: M
                            }), (0, d.jsx)(m.default, {
                                path: R.Routes.DOWNLOAD_QR_CODE_REDIRECT,
                                render: () => {
                                    var e, a, t;
                                    let d = null === (e = S.default.getSuperProperties()) || void 0 === e ? void 0 : e.os,
                                        n = (0, c.parse)((null !== (t = window.location.search) && void 0 !== t ? t : "").substr(1)),
                                        i = null === (a = n.referring_location) || void 0 === a ? void 0 : a.toString();
                                    return ("iOS" === d || "Android" === d) && S.default.track(R.AnalyticEvents.DOWNLOAD_APP, {
                                        platform: d,
                                        ptb: !1,
                                        released: !0,
                                        has_e_mail: "true" === n.has_e_mail,
                                        referring_location: i,
                                        qr_code: !0
                                    }), window.location.href = (0, A.getMobileDownloadLink)(null != i && "" !== i ? i : "qr_code", d), null
                                }
                            }), (0, d.jsx)(m.default, {
                                path: R.Routes.OPEN_APP_FROM_EMAIL,
                                render: () => {
                                    var e, a;
                                    let t = null === (e = S.default.getSuperProperties()) || void 0 === e ? void 0 : e.os,
                                        n = (0, w.getOpenAppFromEmailDestinations)(null !== (a = window.location.search) && void 0 !== a ? a : "");
                                    if ("iOS" !== t && "Android" !== t) return (0, d.jsx)(f.Redirect, {
                                        to: null != n.desktop ? "".concat(n.desktop.pathname).concat(n.desktop.search) : R.Routes.APP
                                    });
                                    {
                                        let e = (0, A.getMobileDownloadLink)("app_open_from_email", t, n.mobile),
                                            a = (0, l.parseDynamicLink)(e);
                                        null != a && S.default.track(R.AnalyticEvents.DEEP_LINK_CLICKED, {
                                            fingerprint: (0, s.maybeExtractId)(a.fingerprint),
                                            attempt_id: a.attemptId,
                                            source: a.utmSource,
                                            destination: null != n.mobile ? n.mobile.toString() : null
                                        }), window.location.href = e
                                    }
                                }
                            }), (0, d.jsx)(f.Redirect, {
                                from: R.Routes.CONNECT_AUTHORIZE,
                                to: {
                                    ...location,
                                    pathname: R.Routes.OAUTH2_AUTHORIZE
                                }
                            }), (0, d.jsx)(f.Route, {
                                path: [R.Routes.OAUTH2_AUTHORIZED, R.Routes.OAUTH2_AUTHORIZE, R.Routes.OAUTH2_ERROR, R.Routes.OAUTH2_WHITELIST_ACCEPT],
                                component: G
                            }), a ? null : (0, d.jsx)(f.Route, {
                                path: [R.Routes.ACCOUNT_STANDING],
                                component: W
                            }), a ? null : (0, d.jsx)(f.Route, {
                                path: R.Routes.APPLICATION_STORE,
                                component: h.default
                            }), a ? null : (0, d.jsx)(f.Route, {
                                path: R.Routes.APPLICATION_DIRECTORY,
                                component: Y
                            }), (0, d.jsx)(f.Route, {
                                render: q
                            })]
                        }) : (0, d.jsx)(f.Switch, {
                            children: (0, d.jsx)(m.default, {
                                component: L
                            })
                        }), (0, d.jsxs)(E.default, {
                            skipsSettingDefaultPageTitle: n,
                            children: [e, v.isPlatformEmbedded && (t === I.MigrationStatus.NOT_STARTED || t === I.MigrationStatus.IN_PROGRESS) && !0 !== u.Storage.get(r.DOMAIN_MIGRATION_SUCCESS_KEY) ? (0, d.jsx)(g.default, {}) : null]
                        })
                    }
                }
                a.default = b.default.connectStores([T.default, I.default], () => ({
                    isAuthenticated: T.default.isAuthenticated(),
                    migrationStatus: I.default.getMigrationStatus()
                }), {
                    forwardRef: !0
                })(function(e) {
                    let a = function() {
                        let {
                            pathname: e
                        } = (0, f.useLocation)();
                        return null != (0, i.matchPath)(e, {
                            path: R.Routes.APPLICATION_DIRECTORY
                        })
                    }();
                    return (0, d.jsx)(Q, {
                        ...e,
                        skipsSettingDefaultPageTitle: a
                    })
                })
            },
            650204: function(e, a, t) {
                "use strict";
                t.r(a), t("610138"), t("216116"), t("78328"), t("815648"), t("47120"), t("177593");
                var d, n, c, i, f, o = t("735250");
                t("92138"), t("470079");
                var r = t("202226"),
                    l = t("512722"),
                    s = t.n(l),
                    b = t("832037"),
                    u = t("464253"),
                    p = t("485359"),
                    h = t("395727"),
                    m = t("471638"),
                    _ = t("585275"),
                    E = t("960048"),
                    I = t("63063"),
                    g = t("240849"),
                    O = t("998502"),
                    T = t("513566"),
                    S = t("534713"),
                    A = t("358085"),
                    w = t("703656"),
                    v = t("284737"),
                    N = t("473159"),
                    R = t("846519"),
                    D = t("579806"),
                    C = t("896361"),
                    L = t("892254");
                t("235817");
                var P = t("798105"),
                    y = t("44163"),
                    M = t("710845");
                let k = 5 * t("70956").default.Millis.MINUTE,
                    U = document.getElementById("app-mount");
                s()(null != U, "Could not find app-mount"), U.className = __OVERLAY__ ? "" : P.appMount;
                let x = (0, r.createRoot)(U),
                    j = {
                        "/oauth2/authorize": S.default
                    },
                    V = e => x.render((0, o.jsx)(L.default, {
                        children: (0, o.jsx)(C.default, {
                            children: (0, o.jsx)(e, {})
                        })
                    }));
                if (null != D.default) {
                    null === (d = D.default.setUncaughtExceptionHandler) || void 0 === d || d.call(D.default, (e, a) => {
                        setImmediate(() => {
                            throw E.default.captureCrash(e), e
                        })
                    });
                    let e = null === (n = (c = D.default.remoteApp).getVersion) || void 0 === n ? void 0 : n.call(c),
                        a = null === (i = (f = D.default.remoteApp).getBuildNumber) || void 0 === i ? void 0 : i.call(f),
                        t = {};
                    null != D.default.remoteApp.getModuleVersions && (t = D.default.remoteApp.getModuleVersions()), E.default.setExtra({
                        hostVersion: e,
                        moduleVersions: t
                    }), E.default.setTags({
                        nativeBuildNumber: null == a ? void 0 : a.toString()
                    });
                    let o = Object.keys(t).filter(e => null != t[e]).map(e => "".concat(e, ": ").concat(t[e])).join(", ");
                    new M.default().log("[NATIVE INFO] host ".concat(e, ", modules: ").concat(o, ", build: ").concat(a)), O.default.initializeExitHook()
                }
                if ((0, N.setupWindow)(window), __OVERLAY__) V(b.default.Overlay);
                else if (null != window.require && null == window.DiscordNative) V(b.default.OutdatedClient);
                else {
                    if (document.addEventListener("scroll", e => e.preventDefault()), A.isPlatformEmbedded) {
                        window.onbeforeunload = () => O.default.beforeUnload(), O.default.on("HELP_OPEN", () => window.open(I.default.getCommunityURL()));
                        let e = new R.DelayedCall(k, () => O.default.purgeMemory());
                        O.default.on("MAIN_WINDOW_BLUR", () => {
                            e.delay(), O.default.setFocused(!1), (0, v.focus)(window, !1)
                        }), O.default.on("MAIN_WINDOW_FOCUS", () => {
                            e.cancel(), O.default.setFocused(!0), (0, v.focus)(window, !0)
                        }), O.default.on("MAIN_WINDOW_PATH", function(e, a, t) {
                            var d;
                            let n = null != t ? new URLSearchParams(t) : null;
                            (null === (d = j[a]) || void 0 === d || !d.call(j, n)) && (0, w.transitionTo)(a)
                        }), O.default.on("MAIN_WINDOW_HIDDEN", () => {
                            (0, v.hidden)(window)
                        })
                    }
                    h.default.initialize(), u.default.init(), _.default.init(), y.default.init(), p.default.initialize(), g.default.initialize(), T.default.initialize(), m.initialize(), V(b.default.App)
                }
            },
            832037: function(e, a, t) {
                "use strict";
                t.r(a);
                var d = t("735250");
                t("470079");
                var n = t("481060"),
                    c = t("204623"),
                    i = t("155221");
                a.default = {
                    App: () => (0, d.jsx)(n.DnDProvider, {
                        children: (0, d.jsx)(i.default, {})
                    }),
                    Overlay: () => (0, d.jsx)(n.DnDProvider, {
                        children: (0, d.jsx)(i.Overlay, {})
                    }),
                    OutdatedClient: c.default
                }
            },
            44163: function(e, a, t) {
                "use strict";
                t.r(a);
                var d = t("585483"),
                    n = t("5967"),
                    c = t("933513"),
                    i = t("981631");
                a.default = {
                    init() {
                        document.addEventListener("paste", e => {
                            !(0, c.default)((0, n.eventOwnerDocument)(e)) && d.ComponentDispatch.dispatchToLastSubscribed(i.ComponentActions.GLOBAL_CLIPBOARD_PASTE, {
                                event: e
                            })
                        })
                    }
                }
            },
            933513: function(e, a, t) {
                "use strict";

                function d(e) {
                    let a = null == e ? void 0 : e.activeElement;
                    return ["INPUT", "TEXTAREA"].includes(null == a ? void 0 : a.tagName) || (null == a ? void 0 : a.isContentEditable)
                }
                t.r(a), t.d(a, {
                    default: function() {
                        return d
                    }
                })
            },
            204623: function(e, a, t) {
                "use strict";
                t.r(a), t.d(a, {
                    default: function() {
                        return S
                    }
                }), t("47120");
                var d = t("735250"),
                    n = t("470079"),
                    c = t("525654"),
                    i = t.n(c),
                    f = t("470716"),
                    o = t("442837"),
                    r = t("946188"),
                    l = t("481060"),
                    s = t("596454"),
                    b = t("451478"),
                    u = t("586576"),
                    p = t("176354"),
                    h = t("63063"),
                    m = t("358085"),
                    _ = t("792125"),
                    E = t("998502"),
                    I = t("151851"),
                    g = t("981631"),
                    O = t("689938");
                let T = o.default.connectStores([b.default], () => ({
                    focused: b.default.isFocused()
                }))(I.default);
                class S extends n.PureComponent {
                    getPlatform() {
                        var e;
                        let a = null === (e = i().os) || void 0 === e ? void 0 : e.family;
                        return null != a && /^win/i.test(a) ? m.PlatformTypes.WINDOWS : null != a && /darwin|os x/i.test(a) ? m.PlatformTypes.OSX : m.PlatformTypes.LINUX
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
                                        src: p.default.getURL(r.default.convert.fromCodePoint("1f44c")),
                                        emojiName: ":ok_hand:",
                                        animated: !1
                                    })]
                                })
                            }),
                            a = (0, d.jsx)(l.Button, {
                                size: l.ButtonSizes.LARGE,
                                onClick: this.handleDownload,
                                children: O.default.Messages.DOWNLOAD
                            });
                        return (0, d.jsxs)(n.Fragment, {
                            children: [(0, d.jsx)(f.Helmet, {
                                children: (0, d.jsx)("html", {
                                    className: (0, _.getThemeClass)(g.ThemeTypes.DARK)
                                })
                            }), (0, d.jsx)(T, {
                                type: this.getPlatform()
                            }), (0, d.jsx)(u.default, {
                                title: O.default.Messages.UNSUPPORTED_BROWSER_TITLE,
                                note: e,
                                action: a
                            })]
                        })
                    }
                    constructor(...e) {
                        var a, t, d;
                        super(...e), a = this, t = "handleDownload", d = () => {
                            window.open(this.getPlatform() === m.PlatformTypes.WINDOWS ? h.default.getArticleURL(g.HelpdeskArticles.CORRUPT_INSTALLATION) : g.MarketingURLs.DOWNLOAD)
                        }, t in a ? Object.defineProperty(a, t, {
                            value: d,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : a[t] = d
                    }
                }
            },
            471638: function(e, a, t) {
                "use strict";
                t.r(a), t.d(a, {
                    initialize: function() {
                        return d
                    }
                }), t("411104"), t("47120"), t("259443"), t("643950"), t("46973"), t("141038"), t("379649"), t("570140"), t("749210"), t("287734"), t("872810"), t("579806"), t("569545"), t("703656"), t("199902"), t("592125"), t("131951"), t("944486"), t("979651"), t("374023"), t("848479"), t("998502"), t("788983"), t("981631");
                let d = () => {}
            },
            286035: function(e, a, t) {
                "use strict";
                t.r(a), t.d(a, {
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
                var d = t("570140");

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
            554608: function(e, a, t) {
                "use strict";
                t.r(a), t.d(a, {
                    MigrationStatus: function() {
                        return f
                    }
                });
                var d, n, c, i, f, o, r = t("442837"),
                    l = t("570140");
                (d = f || (f = {}))[d.NOT_STARTED = 0] = "NOT_STARTED", d[d.IN_PROGRESS = 1] = "IN_PROGRESS", d[d.FAILED = 2] = "FAILED", d[d.SKIPPED = 3] = "SKIPPED";
                let s = 0;
                class b extends(o = r.default.Store) {
                    getMigrationStatus() {
                        return s
                    }
                }
                i = "DomainMigrationStore", (c = "displayName") in(n = b) ? Object.defineProperty(n, c, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[c] = i, a.default = new b(l.default, {
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
            83949: function(e, a, t) {
                "use strict";
                t.r(a), t.d(a, {
                    default: function() {
                        return b
                    }
                });
                var d = t("470079"),
                    n = t("719711"),
                    c = t("433517"),
                    i = t("579806"),
                    f = t("626135"),
                    o = t("998502"),
                    r = t("286035"),
                    l = t("981631");

                function s(e) {
                    var a;
                    return null == e ? void 0 : null === (a = e._state) || void 0 === a ? void 0 : a.lastTestTimestamp
                }

                function b() {
                    return d.useEffect(() => {
                        window.location.origin === window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN && !0 !== c.Storage.get(n.DOMAIN_MIGRATION_SUCCESS_KEY) && o.default.supportsFeature(l.NativeFeatures.USER_DATA_CACHE) && (r.migrate(), i.default.userDataCache.getCached().then(e => {
                            if (null == e) {
                                r.failMigration(), f.default.track(l.AnalyticEvents.DOMAIN_MIGRATED, {
                                    success: !1,
                                    has_data: !1
                                }, {
                                    flush: !0
                                });
                                return
                            }
                            let a = Object.keys(e),
                                t = 0 !== a.length,
                                d = null != e.token,
                                o = null == e.RTCRegionStore ? null : JSON.parse(e.RTCRegionStore),
                                b = null == o || null == s(o) || s(o) <= s(c.Storage.get("RTCRegionStore"));
                            t && d && !b && (c.Storage.clear(), a.forEach(a => {
                                let t = e[a];
                                try {
                                    c.Storage.set(a, JSON.parse(t))
                                } catch (e) {}
                            })), f.default.track(l.AnalyticEvents.DOMAIN_MIGRATED, {
                                success: !0,
                                current_is_newer: b,
                                has_data: t
                            }, {
                                flush: !0
                            }), c.Storage.set(n.DOMAIN_MIGRATION_SUCCESS_KEY, !0), i.default.userDataCache.deleteCache(), r.finishMigration()
                        }))
                    }, []), null
                }
            },
            585275: function(e, a, t) {
                "use strict";
                let d;
                t.r(a), t("242167"), t("970173"), t("520712"), t("268111"), t("941497"), t("32026"), t("480839"), t("744285"), t("492257"), t("873817"), t("411104"), t("773603");
                var n = t("512722"),
                    c = t.n(n),
                    i = t("392711"),
                    f = t.n(i),
                    o = t("544891"),
                    r = t("992774"),
                    l = t("649754"),
                    s = t("376398"),
                    b = t("846519"),
                    u = t("570140"),
                    p = t("710845"),
                    h = t("314897"),
                    m = t("358085"),
                    _ = t("998502"),
                    E = t("569545"),
                    I = t("70722"),
                    g = t("981631"),
                    O = t("65154");
                let T = {},
                    S = new b.Timeout,
                    A = !1,
                    w = window.document.createElement("canvas");
                w.width = 512, w.height = 288;
                let v = w.getContext("2d");

                function N() {
                    S.stop(), null != d && (l.default.removeSink(d, T), d = null)
                }
                let R = f().debounce((e, a, t, d) => {
                    D(e, (0, E.encodeStreamKey)({
                        streamType: null != a ? I.StreamTypes.GUILD : I.StreamTypes.CALL,
                        guildId: a,
                        channelId: t,
                        ownerId: d
                    }))
                }, 500);
                async function D(e, a) {
                    if (d !== e) return;
                    let t = () => D(e, a);
                    if (!A) try {
                        let t = await
                        function(e, a) {
                            let t = 0;
                            return ((0, m.isPlatformEmbedded) ? function(e, a) {
                                let t = (0, r.getVoiceEngine)(),
                                    n = (null == t ? void 0 : t.getNextVideoOutputFrame) != null;
                                return new Promise((c, i) => {
                                    let f = e => {
                                        try {
                                            null != e && a(e) && c(e)
                                        } catch (e) {
                                            i(e)
                                        }
                                    };
                                    n ? t.getNextVideoOutputFrame(e).then(f, a => {
                                        if (d === e) throw a
                                    }) : l.default.addSink(e, T, f)
                                }).finally(() => {
                                    !n && l.default.removeSink(e, T)
                                })
                            } : function(e, a) {
                                let t = (0, s.getVideoStream)(e);
                                if (null == t) return Promise.resolve(new ImageData(0, 0));
                                let {
                                    width: d,
                                    height: n
                                } = t.getVideoTracks()[0].getSettings(), c = document.createElement("video"), i = document.createElement("canvas");
                                c.width = i.width = null != d ? d : 512, c.height = i.height = null != n ? n : 288, c.srcObject = t, c.play();
                                let f = i.getContext("2d");
                                return new Promise((e, t) => {
                                    c.ontimeupdate = () => {
                                        null == f || f.drawImage(c, 0, 0, i.width, i.height);
                                        let d = null == f ? void 0 : f.getImageData(0, 0, i.width, i.height);
                                        try {
                                            null != d && a(d) && e(d)
                                        } catch (e) {
                                            t(e)
                                        }
                                    }
                                }).finally(() => {
                                    c.ontimeupdate = null, c.removeAttribute("srcObject"), c.load()
                                })
                            })(e, e => {
                                if (new Uint32Array(e.data.buffer).some(e => 0 !== e)) return !0;
                                if (++t > a) throw Error("Timed out awaiting non-black frame after ".concat(a, " frames"));
                                return !1
                            })
                        }(e, 60);
                        await
                        function(e) {
                            let a = 512 / e.width,
                                t = Math.min(a, 288 / e.height),
                                d = e.width * t,
                                n = e.height * t;
                            w.width = d, w.height = n;
                            let c = window.document.createElement("canvas"),
                                i = c.getContext("2d");
                            c.width = e.width, c.height = e.height;
                            let f = new ImageData(e.data, e.width, e.height);
                            return null == i || i.putImageData(f, 0, 0), new Promise(a => {
                                null == v || v.drawImage(c, 0, 0, e.width, e.height, 0, 0, d, n), a()
                            })
                        }(t);
                        let n = w.toDataURL("image/jpeg");
                        if (u.default.dispatch({
                                type: "STREAM_PREVIEW_FETCH_SUCCESS",
                                streamKey: a,
                                previewURL: n
                            }), m.isPlatformEmbedded) {
                            let e = h.default.getToken();
                            c()(null != e, "Auth token was null while sending screenshot."), await _.default.makeChunkedRequest(g.Endpoints.STREAM_PREVIEW(a), {
                                thumbnail: n
                            }, {
                                method: "POST",
                                token: e
                            })
                        } else await o.HTTP.post({
                            url: g.Endpoints.STREAM_PREVIEW(a),
                            body: {
                                thumbnail: n
                            },
                            oldFormErrors: !0
                        })
                    } catch (a) {
                        new p.default("ApplicationStreamPreviewUploadManager").error("Failed to post stream preview", a), d === e && S.start(6e4, t);
                        return
                    }
                    d === e && (A ? S.start(6e4, t) : S.start(3e5, t))
                }
                a.default = {
                    init() {
                        u.default.subscribe("CONNECTION_OPEN", N), u.default.subscribe("LOGOUT", N), u.default.subscribe("STREAM_DELETE", N), u.default.subscribe("RTC_CONNECTION_VIDEO", e => {
                            let {
                                guildId: a,
                                channelId: t,
                                userId: n,
                                streamId: c,
                                context: i
                            } = e;
                            !(null == c || i !== O.MediaEngineContextTypes.STREAM || n !== h.default.getId() || __OVERLAY__) && (N(), d = c, R(c, a, t, n))
                        }), u.default.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", e => {
                            let {
                                videoState: a
                            } = e;
                            A = a === g.MediaEngineVideoStates.PAUSED || !1
                        })
                    }
                }
            },
            464253: function(e, a, t) {
                "use strict";
                t.r(a), t("411104");
                var d = t("570140"),
                    n = t("846027"),
                    c = t("872810"),
                    i = t("710845"),
                    f = t("252759"),
                    o = t("361291"),
                    r = t("199902"),
                    l = t("314897"),
                    s = t("569545"),
                    b = t("803647"),
                    u = t("981631"),
                    p = t("65154");

                function h(e, a, t) {
                    return a in e ? Object.defineProperty(e, a, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[a] = t, e
                }
                class m {
                    _onGameDetectionUpdate(e) {
                        this.applications = e.map(e => {
                            var a, t;
                            return {
                                applicationId: null !== (a = e.id) && void 0 !== a ? a : null,
                                processId: e.pid,
                                processPath: e.pidPath,
                                windowHandle: null !== (t = e.windowHandle) && void 0 !== t ? t : null,
                                executableName: e.exeName
                            }
                        }), "verbatim-source" !== this.mode && this.director.onDetectionUpdate(this.applications)
                    }
                    _onStreamApplication(e, a) {
                        this.mode = "application", this.streamKey = e, this.director.onStreamBegin(this.applications, a)
                    }
                    _onStreamDirectSource(e, a, t, d) {
                        this.mode = "verbatim-source", this.streamKey = e, this._onDirectorAction({
                            type: f.StreamDirectorActionType.STREAM,
                            sourceId: a,
                            audioSourceId: t,
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
                                    type: f.StreamDirectorActionType.STOP
                                });
                                break;
                            default:
                                var a;
                                throw Error("unknown streaming mode: ".concat(null !== (a = this.mode) && void 0 !== a ? a : "(none)"))
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
                                var a;
                                throw Error("unknown streaming mode: ".concat(null !== (a = this.mode) && void 0 !== a ? a : "(none)"))
                        }
                    }
                    _onDirectorAction(e) {
                        let a = r.default.getCurrentUserActiveStream(),
                            t = o.default.getState();
                        switch (e.type) {
                            case f.StreamDirectorActionType.STREAM:
                                if (null != a && (0, c.setStreamPaused)(a, !1), e.sourceId.startsWith("camera") && null != e.audioSourceId) {
                                    let a = e.sourceId.split(":")[1];
                                    n.default.setGoLiveSource({
                                        cameraSettings: {
                                            videoDeviceGuid: a,
                                            audioDeviceGuid: e.audioSourceId
                                        },
                                        qualityOptions: {
                                            preset: t.preset,
                                            resolution: t.resolution,
                                            frameRate: t.fps
                                        },
                                        context: p.MediaEngineContextTypes.STREAM
                                    })
                                } else {
                                    var d;
                                    n.default.setGoLiveSource({
                                        desktopSettings: {
                                            sourceId: e.sourceId,
                                            sound: null === (d = e.sound) || void 0 === d || d
                                        },
                                        qualityOptions: {
                                            preset: t.preset,
                                            resolution: t.resolution,
                                            frameRate: t.fps
                                        },
                                        context: p.MediaEngineContextTypes.STREAM
                                    })
                                }
                                break;
                            case f.StreamDirectorActionType.PAUSE:
                                null != a && (0, c.setStreamPaused)(a, !0);
                                break;
                            case f.StreamDirectorActionType.STOP:
                                null != a && (0, b.default)(a);
                                break;
                            default:
                                throw Error("unhandled stream action: ".concat(e.type))
                        }
                    }
                    _onCapturePaused(e) {
                        let a = r.default.getCurrentUserActiveStream();
                        null != a && (0, c.setStreamPaused)(a, e)
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
                        h(this, "director", void 0), h(this, "applications", void 0), h(this, "streamKey", void 0), h(this, "mode", void 0), this.mode = null, this.applications = [], this.director = new f.StreamDirector(e => this._onDirectorAction(e)), d.default.subscribe("STREAM_START", e => {
                            let {
                                streamType: a,
                                guildId: t,
                                channelId: d,
                                pid: n,
                                sourceId: c,
                                audioSourceId: f,
                                sound: o
                            } = e, r = l.default.getId(), b = (0, s.encodeStreamKey)({
                                streamType: a,
                                guildId: t,
                                channelId: d,
                                ownerId: r
                            });
                            null == n != (null == c) ? (null != n && this._onStreamApplication(b, n), null != c && this._onStreamDirectSource(b, c, f, o)) : new i.default("ApplicationSwitchingManager").warn("invalid start_stream: both application + display modes were specified (pid: ".concat(n, ", source-id: ").concat(c, ")"))
                        }), d.default.subscribe("STREAM_DELETE", e => {
                            let {
                                streamKey: a
                            } = e;
                            this._onStreamKilled(a)
                        }), d.default.subscribe("STREAM_STOP", e => {
                            let {
                                streamKey: a
                            } = e;
                            this._onStreamEnd(a)
                        }), d.default.subscribe("RUNNING_GAMES_CHANGE", e => {
                            let {
                                games: a
                            } = e;
                            this._onGameDetectionUpdate(a)
                        }), d.default.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", e => {
                            let {
                                videoState: a,
                                context: t
                            } = e;
                            t === p.MediaEngineContextTypes.STREAM && this._onCapturePaused(a === u.MediaEngineVideoStates.PAUSED)
                        }), d.default.subscribe("MEDIA_ENGINE_SET_GO_LIVE_SOURCE", e => {
                            let {
                                settings: a
                            } = e;
                            (null == a ? void 0 : a.context) === p.MediaEngineContextTypes.STREAM && (null == a ? void 0 : a.desktopSettings) == null && (null == a ? void 0 : a.cameraSettings) == null && this._onCaptureEnded()
                        })
                    }
                }
                a.default = {
                    instance: null,
                    init() {
                        null == this.instance && (this.instance = new m)
                    }
                }
            },
            137412: function(e, a, t) {
                "use strict";
                t.r(a), t("47120");
                var d = t("213919"),
                    n = t("570140"),
                    c = t("317770"),
                    i = t("358085");
                class f extends c.default {
                    _initialize() {
                        n.default.subscribe("CONNECTION_OPEN", this.handleConnectionOpen)
                    }
                    _terminate() {
                        n.default.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen)
                    }
                    constructor(...e) {
                        var a, t, n;
                        super(...e), a = this, t = "handleConnectionOpen", n = e => {
                            ((0, i.isWindows)() || (0, i.isMac)()) && d.encryptAndStoreTokens()
                        }, t in a ? Object.defineProperty(a, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : a[t] = n
                    }
                }
                a.default = new f
            },
            485359: function(e, a, t) {
                "use strict";
                t.r(a), t("47120");
                var d = t("735250");
                t("470079");
                var n = t("525654"),
                    c = t.n(n),
                    i = t("481060"),
                    f = t("570140"),
                    o = t("468026"),
                    r = t("317770"),
                    l = t("63063"),
                    s = t("981631"),
                    b = t("689938");
                class u extends r.default {
                    _initialize() {
                        f.default.subscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission)
                    }
                    _terminate() {
                        f.default.unsubscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission)
                    }
                    constructor(...e) {
                        var a, t, n;
                        super(...e), a = this, t = "handlePermission", n = e => {
                            let {
                                kind: a,
                                granted: t
                            } = e, n = "Firefox" === c().name ? s.HelpdeskArticles.ENABLE_MIC_FIREFOX : s.HelpdeskArticles.ENABLE_MIC_CHROME;
                            if (!t) {
                                let e = "audio" !== a;
                                (0, i.openModal)(a => (0, d.jsx)(o.default, {
                                    title: e ? b.default.Messages.NO_CAMERA_TITLE : b.default.Messages.NO_MIC_TITLE,
                                    body: e ? b.default.Messages.NO_CAMERA_BODY : b.default.Messages.NO_MIC_BODY,
                                    onConfirm: () => window.open(l.default.getArticleURL(n), "_blank"),
                                    confirmText: b.default.Messages.HELP_DESK,
                                    ...a
                                }))
                            }
                        }, t in a ? Object.defineProperty(a, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : a[t] = n
                    }
                }
                a.default = new u
            },
            534713: function(e, a, t) {
                "use strict";
                t.r(a), t.d(a, {
                    default: function() {
                        return n
                    }
                });
                var d = t("69580");

                function n(e) {
                    var a, t, n, c;
                    let i = null == e ? void 0 : e.get("client_id"),
                        f = null == e ? void 0 : null === (a = e.get("scope")) || void 0 === a ? void 0 : a.split(" "),
                        o = null == e ? void 0 : e.get("state"),
                        r = null == e ? void 0 : e.get("redirect_uri"),
                        l = null == e ? void 0 : e.get("response_type"),
                        s = null !== (t = null == e ? void 0 : e.get("nonce")) && void 0 !== t ? t : void 0,
                        b = null !== (n = null == e ? void 0 : e.get("code_challenge")) && void 0 !== n ? n : void 0,
                        u = null !== (c = null == e ? void 0 : e.get("code_challenge_method")) && void 0 !== c ? c : void 0;
                    return null == i || null == f || null == o || null == r || null == l || ((0, d.openOAuth2Modal)({
                        clientId: i,
                        scopes: f,
                        redirectUri: r,
                        state: o,
                        responseType: l,
                        nonce: s,
                        codeChallenge: b,
                        codeChallengeMethod: u
                    }), !0)
                }
            },
            896361: function(e, a, t) {
                "use strict";
                t.r(a), t.d(a, {
                    default: function() {
                        return r
                    }
                });
                var d = t("735250"),
                    n = t("470079"),
                    c = t("470716"),
                    i = t("613828"),
                    f = t("304445"),
                    o = t("703656");

                function r(e) {
                    let {
                        children: a
                    } = e;
                    return n.useEffect(() => (f.default.initialize(), () => f.default.cleanup()), []), (0, d.jsx)(c.HelmetProvider, {
                        children: (0, d.jsx)(i.Router, {
                            history: (0, o.getHistory)(),
                            children: a
                        })
                    })
                }
            },
            252759: function(e, a, t) {
                "use strict";
                t.r(a), t.d(a, {
                    StreamDirector: function() {
                        return f
                    },
                    StreamDirectorActionType: function() {
                        return n
                    }
                });
                var d, n, c = t("75834");

                function i(e, a, t) {
                    return a in e ? Object.defineProperty(e, a, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[a] = t, e
                }(d = n || (n = {})).STREAM = "stream", d.PAUSE = "pause", d.STOP = "stop";
                class f {
                    onStreamBegin(e, a) {
                        let t = (0, c.getInitialStreamTarget)(e, a);
                        null == t || null == t.windowHandle ? this.callback({
                            type: "stop"
                        }) : this._stream(t)
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
                    onCaptureEnd(e, a) {
                        var t;
                        (null === (t = this.application) || void 0 === t ? void 0 : t.windowHandle) === a && this._update(e)
                    }
                    onCaptureLegacyEnd(e) {
                        var a;
                        return (null === (a = this.application) || void 0 === a ? void 0 : a.windowHandle) != null ? this.onCaptureEnd(e, this.application.windowHandle) : this._stop()
                    }
                    _update(e) {
                        let a = (0, c.getStreamTarget)(e, this.application);
                        if (null != a) return null == a.windowHandle ? this._pause() : this._stream(a);
                        this._stop()
                    }
                    _stream(e) {
                        var a;
                        let t = (null === (a = this.application) || void 0 === a ? void 0 : a.windowHandle) !== e.windowHandle;
                        this.active = !0, this.application = Object.assign({}, e), t && this.callback({
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
            75834: function(e, a, t) {
                "use strict";
                t.r(a), t.d(a, {
                    getInitialStreamTarget: function() {
                        return n
                    },
                    getStreamTarget: function() {
                        return i
                    }
                }), t("47120");
                var d = t("823379");

                function n(e, a) {
                    let t = e.find(e => e.processId === a);
                    return null == t ? null : i(e, t)
                }
                let c = "356869127241072640";

                function i(e, a) {
                    var t;
                    if (null == a) return null;
                    if (a.applicationId === c) return function(e, a) {
                        let t = a.processPath.length > 1 ? a.processPath[a.processPath.length - 2] : 0,
                            d = e.filter(e => e.applicationId === c && e.processPath.includes(t)),
                            n = d.find(e => "league of legends.exe" === e.executableName);
                        return void 0 !== n ? n : d.length > 0 ? d[0] : null
                    }(e, a);
                    let n = new Map(e.map(e => [e.processId, e])),
                        i = a.processPath.map(e => n.get(e)).find(e => null != e);
                    if (null == i) return null;
                    let o = e.map(e => {
                        let a = e.processPath.findIndex(e => n.has(e));
                        return -1 === a ? null : {
                            application: e,
                            rootedPath: e.processPath.slice(a)
                        }
                    }).filter(d.isNotNullish).filter(e => e.rootedPath[0] === i.processId);
                    o.sort((e, a) => {
                        let t = e.rootedPath.map(e => n.get(e)).filter(e => null != e && null != e.windowHandle),
                            d = f(a.rootedPath.map(e => n.get(e)).filter(e => null != e && null != e.windowHandle), t);
                        return 0 !== d ? d : f(a.rootedPath, e.rootedPath)
                    });
                    let r = null !== (t = o.find(e => null != e.application.windowHandle)) && void 0 !== t ? t : o[0];
                    return null == r ? null : r.application
                }

                function f(e, a) {
                    return e.length - a.length
                }
            },
            513566: function(e, a, t) {
                "use strict";
                t.r(a), t("47120");
                var d = t("348327"),
                    n = t.n(d),
                    c = t("392711"),
                    i = t.n(c),
                    f = t("570140"),
                    o = t("846027"),
                    r = t("287734"),
                    l = t("317770"),
                    s = t("829750"),
                    b = t("189771"),
                    u = t("67844"),
                    p = t("173507"),
                    h = t("592125"),
                    m = t("131951"),
                    _ = t("944486"),
                    E = t("358085"),
                    I = t("998502"),
                    g = t("981631"),
                    O = t("689938");

                function T(e, a, t) {
                    return a in e ? Object.defineProperty(e, a, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[a] = t, e
                }
                class S extends l.default {
                    _initialize() {
                        this.isSupported && (f.default.subscribe("AUDIO_SET_MODE", this.handleViewUpdate), f.default.subscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate), f.default.subscribe("START_SESSION", this.handleViewUpdate), f.default.subscribe("CONNECTION_OPEN", this.handleViewUpdate), f.default.subscribe("CONNECTION_CLOSED", this.handleViewUpdate), f.default.subscribe("CALL_CREATE", this.handleViewUpdate), f.default.subscribe("CALL_UPDATE", this.handleViewUpdate), f.default.subscribe("CALL_DELETE", this.handleViewUpdate), f.default.subscribe("CHANNEL_DELETE", this.handleViewUpdate), f.default.subscribe("VOICE_STATE_UPDATES", this.handleViewUpdate), f.default.subscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate), f.default.subscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate), f.default.subscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate), f.default.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate), I.default.on("THUMBAR_BUTTONS_CLICKED", (e, a) => this.buttonClicked(a)))
                    }
                    _terminate() {
                        this.isSupported && (f.default.unsubscribe("AUDIO_SET_MODE", this.handleViewUpdate), f.default.unsubscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate), f.default.unsubscribe("START_SESSION", this.handleViewUpdate), f.default.unsubscribe("CONNECTION_OPEN", this.handleViewUpdate), f.default.unsubscribe("CONNECTION_CLOSED", this.handleViewUpdate), f.default.unsubscribe("CALL_CREATE", this.handleViewUpdate), f.default.unsubscribe("CALL_UPDATE", this.handleViewUpdate), f.default.unsubscribe("CALL_DELETE", this.handleViewUpdate), f.default.unsubscribe("CHANNEL_DELETE", this.handleViewUpdate), f.default.unsubscribe("VOICE_STATE_UPDATES", this.handleViewUpdate), f.default.unsubscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate), f.default.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate), f.default.unsubscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate), f.default.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate))
                    }
                    setThumbarButtons(e) {
                        !n()(this.prevButtons, e) && (this.prevButtons = e, I.default.setThumbarButtons(e))
                    }
                    constructor(...e) {
                        super(...e), T(this, "callbackActions", {
                            [I.ThumbarButtonName.VIDEO]: () => {
                                m.default.isVideoEnabled() ? o.default.setVideoEnabled(!1) : (0, p.default)(() => o.default.setVideoEnabled(!0), g.AppContext.APP)
                            },
                            [I.ThumbarButtonName.MUTE]: () => o.default.toggleSelfMute(),
                            [I.ThumbarButtonName.DEAFEN]: () => o.default.toggleSelfDeaf(),
                            [I.ThumbarButtonName.DISCONNECT]: () => r.default.disconnect()
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
                            let a = m.default.isSelfMute(),
                                t = m.default.isSelfDeaf(),
                                d = m.default.isVideoEnabled(),
                                n = m.default.isVideoAvailable(),
                                c = h.default.getChannel(e),
                                i = null == c || (0, b.getVideoPermission)(c),
                                {
                                    reachedLimit: f,
                                    limit: o
                                } = null != c ? (0, s.getChannelVideoLimit)(c) : {
                                    reachedLimit: void 0,
                                    limit: void 0
                                },
                                r = (0, u.getVideoButtonLabel)({
                                    enabled: d,
                                    join: !1,
                                    channel: c,
                                    cameraUnavailable: !n,
                                    hasPermission: i,
                                    channelLimit: o,
                                    channelLimitReached: f
                                });
                            this.setThumbarButtons([{
                                name: I.ThumbarButtonName.VIDEO,
                                active: !d,
                                tooltip: r,
                                flags: n ? [] : ["disabled"]
                            }, {
                                name: I.ThumbarButtonName.MUTE,
                                active: a,
                                tooltip: a ? O.default.Messages.UNMUTE : O.default.Messages.MUTE
                            }, {
                                name: I.ThumbarButtonName.DEAFEN,
                                active: t,
                                tooltip: t ? O.default.Messages.UNDEAFEN : O.default.Messages.DEAFEN
                            }, {
                                name: I.ThumbarButtonName.DISCONNECT,
                                active: !0,
                                tooltip: O.default.Messages.DISCONNECT_SELF
                            }])
                        }, 100))
                    }
                }
                a.default = new S
            },
            801814: function(e, a, t) {
                "use strict";
                var d, n, c, i;

                function f(e, a, t) {
                    return a in e ? Object.defineProperty(e, a, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[a] = t, e
                }

                function o() {
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

                function r(e) {
                    return "host" === e
                }
                t.r(a), t.d(a, {
                    default: function() {
                        return l
                    }
                }), (c = d || (d = {})).CHECKING_FOR_UPDATES = "checking-for-updates", c.INSTALLED_MODULE = "installed-module", c.UPDATE_CHECK_FINISHED = "update-check-finished", c.DOWNLOADING_MODULE = "downloading-module", c.DOWNLOADING_MODULE_PROGRESS = "downloading-module-progress", c.DOWNLOADING_MODULES_FINISHED = "downloading-modules-finished", c.UPDATE_MANUALLY = "update-manually", c.DOWNLOADED_MODULE = "downloaded-module", c.INSTALLING_MODULES_FINISHED = "installing-modules-finished", c.INSTALLING_MODULE = "installing-module", c.INSTALLING_MODULE_PROGRESS = "installing-module-progress", c.NO_PENDING_UPDATES = "no-pending-updates", (i = n || (n = {})).CLOUD_SYNC = "discord_cloudsync", i.DESKTOP_CORE = "discord_desktop_core", i.DISPATCH = "discord_dispatch", i.ERLPACK = "discord_erlpack", i.GAME_UTILS = "discord_game_utils", i.HOOK = "discord_hook", i.KRISP = "discord_krisp", i.MEDIA = "discord_media", i.MODULES = "discord_modules", i.OVERLAY2 = "discord_overlay2", i.RPC = "discord_rpc", i.SPELLCHECK = "discord_spellcheck", i.UPDATER_BOOTSTRAP = "discord_updater_bootstrap", i.UTILS = "discord_utils", i.VIGILANTE = "discord_vigilante", i.VOICE = "discord_voice", i.ZSTD = "discord_zstd";
                class l {
                    handleDownloadingModule(e) {
                        if (!r(e.name)) {
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
                    _updateReportField(e, a, t) {
                        let d = this._report[e];
                        null != d ? this._report[e] = t(d, a) : this._report[e] = a
                    }
                    incrementReportField(e, a) {
                        this._updateReportField(e, a, (e, a) => e + a)
                    }
                    setReportFieldMinimum(e, a) {
                        this._updateReportField(e, a, Math.min)
                    }
                    setReportFieldMaximum(e, a) {
                        this._updateReportField(e, a, Math.max)
                    }
                    handleDownloadedModule(e) {
                        if (r(e.name)) return;
                        let a = this._downloadingModules[e.name];
                        if (null == a) {
                            console.warn("Downloaded complete without corresponding downloading event for module ", e.name);
                            return
                        }
                        let t = a.foreground ? "foreground" : "background",
                            d = "".concat(t, "_download_ms_").concat(e.name),
                            n = "".concat(t, "_bytes_").concat(e.name),
                            c = Number((BigInt(e.now) - a.startTime + BigInt(999999)) / BigInt(1e6)),
                            i = !1 === e.receivedBytes ? 0 : e.receivedBytes;
                        a.foreground ? (this._report.foreground_download_ms_total += c, this._report.foreground_bytes_total += i) : (this._report.background_download_ms_total += c, this._report.background_bytes_total += i), this.incrementReportField(d, c), this.incrementReportField(n, i), delete this._downloadingModules[e.name]
                    }
                    handleInstallingModule(e) {
                        if (!r(e.name)) {
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
                        if (r(e.name)) return;
                        let a = this._installingModules[e.name];
                        if (null == a) return;
                        let t = a.foreground ? "foreground" : "background",
                            d = "".concat(t, "_install_ms_").concat(e.name),
                            n = "min_version_".concat(e.name),
                            c = "max_version_".concat(e.name),
                            i = Number((BigInt(e.now) - a.startTime + BigInt(999999)) / BigInt(1e6));
                        a.foreground ? this._report.foreground_install_ms_total += i : this._report.background_install_ms_total += i, this.incrementReportField(d, i), this.setReportFieldMinimum(n, a.oldVersion), e.succeeded ? (!0 === e.delta ? this._report.num_delta_installed++ : this._report.num_full_installed++, this.setReportFieldMaximum(c, a.newVersion)) : this._report.num_failed++, delete this._installingModules[e.name]
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
                        this._report = o()
                    }
                    submissionReady() {
                        return this._report.num_full_installed + this._report.num_failed + this._report.num_delta_installed + this._report.foreground_bytes_total + this._report.background_bytes_total !== 0 && !(Object.keys(this._installingModules).length > 0) && !(Object.keys(this._downloadingModules).length > 0) && !0
                    }
                    constructor() {
                        f(this, "_installingModules", {}), f(this, "_downloadingModules", {}), f(this, "_report", void 0), this._report = o()
                    }
                }
            },
            395727: function(e, a, t) {
                "use strict";
                t.r(a), t("47120");
                var d = t("317770"),
                    n = t("626135"),
                    c = t("358085"),
                    i = t("998502"),
                    f = t("801814"),
                    o = t("981631");
                class r extends d.default {
                    _initialize() {
                        c.isPlatformEmbedded && (i.default.on("UPDATE_DOWNLOADED", () => this.processModuleEvents()), i.default.on("MODULE_INSTALLED", (e, a, t) => this.processModuleEvents()), i.default.on("UPDATER_HISTORY_RESPONSE", (e, a) => {
                            this._handleHistoryResponse(a)
                        }), this.processModuleEvents())
                    }
                    _terminate() {}
                    processModuleEvents() {
                        i.default.send("UPDATER_HISTORY_QUERY_AND_TRUNCATE")
                    }
                    _handleHistoryResponse(e) {
                        if (null == e) return;
                        let a = 0 === Math.floor(1e3 * Math.random());
                        e.forEach(e => {
                            "analytics" === e.type ? e.name === o.AnalyticEvents.UPDATER_METRICS_DOWNLOAD || e.name === o.AnalyticEvents.UPDATER_METRICS_INSTALL || e.name === o.AnalyticEvents.UPDATER_METRICS_COMBINED || e.name === o.AnalyticEvents.UPDATER_METRICS_TRANSITION_STATUS ? a && n.default.track(e.name, e.data) : console.warn("Unknown updater analytic event ".concat(e.name)) : this._tracker.trackEvent(e)
                        }), this._tracker.submissionReady() && (n.default.track(o.AnalyticEvents.APP_MODULES_UPDATED, this._tracker.getStats()), this._tracker.reset())
                    }
                    constructor(...e) {
                        var a, t, d;
                        super(...e), a = this, t = "_tracker", d = new f.default, t in a ? Object.defineProperty(a, t, {
                            value: d,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : a[t] = d
                    }
                }
                a.default = new r
            },
            829750: function(e, a, t) {
                "use strict";
                t.r(a), t.d(a, {
                    default: function() {
                        return f
                    },
                    getChannelVideoLimit: function() {
                        return o
                    }
                });
                var d = t("442837"),
                    n = t("430824"),
                    c = t("938475"),
                    i = t("981631");

                function f(e) {
                    return (0, d.useStateFromStoresObject)([c.default, n.default], () => {
                        let a = c.default.countVoiceStatesForChannel(e.id),
                            t = n.default.getGuild(e.getGuildId());
                        return null == t ? {
                            reachedLimit: !1,
                            limit: -1
                        } : e.type === i.ChannelTypes.GUILD_STAGE_VOICE ? {
                            reachedLimit: a > t.maxStageVideoChannelUsers,
                            limit: t.maxStageVideoChannelUsers
                        } : {
                            reachedLimit: t.maxVideoChannelUsers > 0 && a > t.maxVideoChannelUsers,
                            limit: t.maxVideoChannelUsers
                        }
                    }, [e])
                }

                function o(e) {
                    let a = c.default.countVoiceStatesForChannel(e.id),
                        t = n.default.getGuild(e.getGuildId());
                    return null == t ? {
                        reachedLimit: !1,
                        limit: -1
                    } : e.type === i.ChannelTypes.GUILD_STAGE_VOICE ? {
                        reachedLimit: a > t.maxStageVideoChannelUsers,
                        limit: t.maxStageVideoChannelUsers
                    } : {
                        reachedLimit: t.maxVideoChannelUsers > 0 && a > t.maxVideoChannelUsers,
                        limit: t.maxVideoChannelUsers
                    }
                }
            },
            173507: function(e, a, t) {
                "use strict";
                t.r(a), t.d(a, {
                    default: function() {
                        return f
                    }
                });
                var d = t("735250");
                t("470079");
                var n = t("481060"),
                    c = t("695346"),
                    i = t("981631");

                function f(e, a) {
                    c.AlwaysPreviewVideo.getSetting() ? (0, n.openModalLazy)(async () => {
                        let {
                            default: a
                        } = await Promise.all([t.e("99387"), t.e("5528"), t.e("24267")]).then(t.bind(t, "601572"));
                        return t => (0, d.jsx)(a, {
                            ...t,
                            onEnable: e,
                            videoEnabled: !1
                        })
                    }, {
                        modalKey: "camera-preview",
                        contextKey: a === i.AppContext.POPOUT ? n.POPOUT_MODAL_CONTEXT : n.DEFAULT_MODAL_CONTEXT
                    }) : null == e || e()
                }
            },
            240849: function(e, a, t) {
                "use strict";
                t.r(a);
                var d = t("703656"),
                    n = t("556296"),
                    c = t("358085"),
                    i = t("998502"),
                    f = t("981631");

                function o(e, a) {
                    return !(e === f.NavigateEventSource.BROWSER && n.default.hasKeybind(f.KeyboardDeviceTypes.MOUSE_BUTTON, a)) && !0
                }
                a.default = new class e {
                    initialize() {
                        (0, c.isDesktop)() && (i.default.on("NAVIGATE_BACK", (e, a) => {
                            o(a, f.MouseKeyCodes.Back) && (0, d.back)()
                        }), i.default.on("NAVIGATE_FORWARD", (e, a) => {
                            o(a, f.MouseKeyCodes.Forward) && (0, d.forward)()
                        }))
                    }
                }
            },
            690032: function(e, a, t) {
                "use strict";
                t.r(a), t.d(a, {
                    getOpenAppFromEmailDestinations: function() {
                        return i
                    }
                }), t("315314"), t("610138"), t("216116"), t("78328"), t("815648"), t("47120");
                var d = t("593473"),
                    n = t("591759");
                let c = e => {
                        if (null == e || "" === e) return null;
                        try {
                            let a = new URL(e);
                            return n.default.isDiscordHostname(a.hostname) || window.location.host === a.host ? a : null
                        } catch (e) {
                            return null
                        }
                    },
                    i = e => {
                        let a = (0, d.parse)(e);
                        return {
                            desktop: c(a.desktop_link),
                            mobile: c(a.mobile_link)
                        }
                    }
            },
            643950: function(e, a, t) {
                "use strict";
                t.r(a), t("47120")
            },
            141038: function(e, a, t) {
                "use strict";
                t.r(a), t.d(a, {
                    default: function() {
                        return o
                    }
                }), t("653041"), t("47120");
                var d = t("512722"),
                    n = t.n(d),
                    c = t("90757"),
                    i = t.n(c),
                    f = t("65154");

                function o(e, a, t) {
                    let d = window.DiscordNative;
                    n()(null != d, "Can't get desktop sources outside of native app"), a = null != a ? a : [f.DesktopSources.WINDOW, f.DesktopSources.SCREEN], t = null != t ? t : {
                        width: 150,
                        height: 150
                    };
                    let c = [];
                    return a.includes(f.DesktopSources.SCREEN) && e.supports(f.Features.SCREEN_PREVIEWS) && (c.push(e.getScreenPreviews(t.width, t.height)), a = a.filter(e => e !== f.DesktopSources.SCREEN)), a.includes(f.DesktopSources.WINDOW) && e.supports(f.Features.WINDOW_PREVIEWS) && (c.push(e.getWindowPreviews(t.width, t.height)), a = a.filter(e => e !== f.DesktopSources.WINDOW)), 0 !== a.length && c.push(d.desktopCapture.getDesktopCaptureSources({
                        types: a,
                        thumbnailSize: t
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
        var a = l[e];
        if (void 0 !== a) return a.exports;
        var t = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return r[e].call(t.exports, t, t.exports, s), t.loaded = !0, t.exports
    }
    s.m = r, s.c = l, s.es = function(e, a) {
        return Object.keys(e).forEach(function(t) {
            "default" !== t && !Object.prototype.hasOwnProperty.call(a, t) && Object.defineProperty(a, t, {
                enumerable: !0,
                get: function() {
                    return e[t]
                }
            })
        }), e
    }, e = "function" == typeof Symbol ? Symbol("webpack queues") : "__webpack_queues__", a = "function" == typeof Symbol ? Symbol("webpack exports") : "__webpack_exports__", t = "function" == typeof Symbol ? Symbol("webpack error") : "__webpack_error__", d = function(e) {
        e && e.d < 1 && (e.d = 1, e.forEach(function(e) {
            e.r--
        }), e.forEach(function(e) {
            e.r-- ? e.r++ : e()
        }))
    }, s.a = function(n, c, i) {
        i && ((f = []).d = -1);
        var f, o, r, l, s = new Set,
            b = n.exports,
            u = new Promise(function(e, a) {
                l = a, r = e
            });
        u[a] = b, u[e] = function(e) {
            f && e(f), s.forEach(e), u.catch(function() {})
        }, n.exports = u, c(function(n) {
            o = n.map(function(n) {
                if (null !== n && "object" == typeof n) {
                    if (n[e]) return n;
                    if (n.then) {
                        var c = [];
                        c.d = 0, n.then(function(e) {
                            i[a] = e, d(c)
                        }, function(e) {
                            i[t] = e, d(c)
                        });
                        var i = {};
                        return i[e] = function(e) {
                            e(c)
                        }, i
                    }
                }
                var f = {};
                return f[e] = function() {}, f[a] = n, f
            });
            var c, i = function() {
                    return o.map(function(e) {
                        if (e[t]) throw e[t];
                        return e[a]
                    })
                },
                r = new Promise(function(a) {
                    (c = function() {
                        a(i)
                    }).r = 0;
                    var t = function(e) {
                        e === f || s.has(e) || (s.add(e), e && !e.d && (c.r++, e.push(c)))
                    };
                    o.map(function(a) {
                        a[e](t)
                    })
                });
            return c.r ? r : i()
        }, function(e) {
            e ? l(u[t] = e) : r(b), d(f)
        }), f && f.d < 0 && (f.d = 0)
    }, s.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return s.d(a, {
            a: a
        }), a
    }, c = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    } : function(e) {
        return e.__proto__
    }, s.t = function(e, a) {
        if (1 & a && (e = this(e)), 8 & a || "object" == typeof e && e && (4 & a && e.__esModule || 16 & a && "function" == typeof e.then)) return e;
        var t = Object.create(null);
        s.r(t);
        var d = {};
        n = n || [null, c({}), c([]), c(c)];
        for (var i = 2 & a && e;
            "object" == typeof i && !~n.indexOf(i); i = c(i)) Object.getOwnPropertyNames(i).forEach(function(a) {
            d[a] = function() {
                return e[a]
            }
        });
        return d.default = function() {
            return e
        }, s.d(t, d), t
    }, s.d = function(e, a) {
        for (var t in a) s.o(a, t) && !s.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
        })
    }, s.f = {}, s.e = function(e) {
        return Promise.all(Object.keys(s.f).reduce(function(a, t) {
            return s.f[t](e, a), a
        }, []))
    }, s.k = function(e) {
        return "" + e + ".css"
    }, s.u = function(e) {
        return "52030" === e ? "" + e + ".aa13b61cd37695221dff.js" : "49368" === e ? "" + e + ".2d66f73fb7611f643118.js" : "11250" === e ? "" + e + ".8059edf0c5599b270bb1.js" : "96427" === e ? "" + e + ".72bd4321db9089a43396.js" : "29549" === e ? "" + e + ".641f828f0f05bf863eed.js" : "31605" === e ? "" + e + ".3931dd602f4d1cfe7d90.js" : "62809" === e ? "" + e + ".29383ff8649a68dc9ec2.js" : "40326" === e ? "" + e + ".965ebfce54ee25c8bb6d.js" : "23357" === e ? "" + e + ".87a13e84badce07c3386.js" : "12013" === e ? "" + e + ".b5316dfd9c7f2eff8db2.js" : "43906" === e ? "" + e + ".9ceabf05eea464e6a8c2.js" : "95900" === e ? "" + e + ".094549597f19aa7c0d93.js" : "15972" === e ? "" + e + ".356b18da5a4a96ca5eec.js" : "6416" === e ? "6416.ae174e89d76358415ef8.js" : "32776" === e ? "" + e + ".ec7aed6815e918ce7b0b.js" : "57878" === e ? "" + e + ".f80f2ae72af75d9274b1.js" : "67535" === e ? "" + e + ".7be701c483e927e20fb3.js" : "90687" === e ? "" + e + ".441b1364cd5f9e667b1a.js" : "23404" === e ? "" + e + ".589336eed7f8021f91f1.js" : "8016" === e ? "8016.126bccec83d26b2dfa96.js" : "68136" === e ? "" + e + ".13887450abc94d47d0c9.js" : "78373" === e ? "" + e + ".bce2527848c37334e7ed.js" : "19878" === e ? "" + e + ".38577e57248a8460bd91.js" : "97403" === e ? "" + e + ".ebcba2e7f688de14c24c.js" : "93669" === e ? "" + e + ".cae7f45cc4c83a6a1332.js" : "22646" === e ? "" + e + ".2ed52261c5607a9019af.js" : "36861" === e ? "" + e + ".cee9a185c0685fe51d44.js" : "75492" === e ? "" + e + ".0148c7b424d039f78965.js" : "76990" === e ? "" + e + ".7338131c64847472c2db.js" : "60573" === e ? "" + e + ".8d00354bd5cbd5a275d6.js" : "" + ({
            10377: "d064e3bfdaddef2a1d23",
            10508: "4800eae32434d0241a7c",
            10667: "7843ed78d31c974e3294",
            10778: "31e223420e277ad12281",
            10993: "7e87d8d9d18f4a3950be",
            11166: "1144eba19320d1785f13",
            11193: "e3069859cd3fb435cc3d",
            11256: "7551daf4dc9c3251db05",
            11345: "e125ae0bccbe65907112",
            11623: "fb19f137b7a9f51a4788",
            11686: "7406cbca06220797bd2f",
            11890: "ab0c77d187cb8b1f0686",
            11992: "932b49f9971a5b2f69b6",
            12112: "ea309e7f0d757832a7c5",
            12192: "c7a926c0dff9e0c21f01",
            12222: "ee05a5ca14dac7b1268b",
            12241: "61c46e0494f7942262eb",
            12435: "223c0e9132c6cd9dcafd",
            12610: "b3f47a8f5430bdc27858",
            12611: "ce8a627ab05d2c186bea",
            12817: "9d6b75cdcbd01a37a378",
            12831: "2841fb99624147a8bcc9",
            12891: "f5fc1dd3bb9f049cd5b5",
            12977: "d321e85dbe054ebf59dc",
            13111: "11f2f4ae7c7e0cd69142",
            13546: "ba70cdc876a193f81d1b",
            13878: "2570f14013062373ef6c",
            13918: "c4a78638bfaa27e3a685",
            14021: "8197676ce5446d02ae12",
            14171: "a12a11d971191b03c3b6",
            14192: "367d9c13be14c873c71c",
            14262: "93deeefac23793e4bb9b",
            14315: "28fac0c6299bd14b09d1",
            14339: "a7d067ec4d73b0e3d475",
            14466: "c5030a7cc50f0f87662c",
            14486: "02671ed8293ec74c990d",
            14653: "d4affe28ff4cef9ddd78",
            14760: "19277f862cb7fae92b39",
            15180: "d31d4e57f2d488575c43",
            153: "e333e8e91308c42edf8a",
            15357: "91c961a65145b23f7763",
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
            16609: "646d736c3489a8258fed",
            1716: "1f54b41248b9db0038f1",
            17278: "c282c5963440bbe84078",
            17672: "d968b0a2dc266e89ea7c",
            17712: "cebfdc8f4861988aeab9",
            17945: "9808d0202189aa2d5cab",
            18101: "4dbaac197c57b64e1782",
            1812: "888ea83d77f74f0c0349",
            18259: "2ec15894e412355c823e",
            18327: "1659b3392fb2a1b2f38c",
            18367: "e23f140d9e86ffcb12fe",
            18417: "f05d176e244f659bca73",
            18482: "f4af5726fcb323fd18b7",
            186: "f8c9943dc12cd9804ac3",
            1862: "8c1283d3e54ead902152",
            18824: "34636719e350737eaf45",
            18831: "74e36c4c078f2cc4d6ee",
            18879: "370f17076e909dce63f9",
            1906: "38698cb741764be64f9d",
            19213: "63f155ca31338432f800",
            19255: "9b98b81a72900f664a97",
            19452: "701ced46d45e0f354048",
            19503: "f527fdfa287160ce0d55",
            19538: "83020ea6628eb4270da8",
            19701: "ad5c1f1a3a60cb9ae771",
            19726: "3147f5756c3e104d8f14",
            20196: "3b9518d5ac3449a784c2",
            20212: "d505fad10168441572f1",
            2026: "ef8a4e5a5145b2b15efb",
            20268: "10bee6966ee67f9eb30a",
            20294: "9ba9f548ac330dac11cf",
            20353: "dd194e60a9e24f2c9932",
            2045: "11eccd7191c3ba2f6b94",
            20467: "fea15eaf37d5cc8697be",
            20575: "ab1b6f370ae67c05e389",
            20653: "69601d02ebc106be5539",
            20727: "6d73ad9db282614da669",
            20786: "ac2c1ed819c945a87504",
            20869: "1b825c740f07266227af",
            21112: "b2608e13959e943e201b",
            21395: "368f5636f2a62ef92833",
            21617: "9662496a9197368846d3",
            21812: "95aa69b076edf3c1851c",
            21897: "ff016a42e6e2875cca41",
            219: "c87fb17567183e2ad459",
            21960: "13b9adbbdd554c208faf",
            21971: "b48909bef16fde4197b3",
            2199: "f7c0beb10495b3726738",
            22036: "a2fb1309d468e00ea9eb",
            22042: "d450c99869c764c7d909",
            22099: "65dfb82599c81639ca25",
            22101: "2d05bd2f65e7d41032b8",
            22178: "e373449913e7a8c3cb4b",
            22183: "38cc8928cef144fe9c38",
            22347: "bf3369c35c813b73b309",
            22377: "b000ab8cbc8c4a194a25",
            22458: "773abefe0aed9e2926e4",
            22482: "a4106932f4844da08a5e",
            22523: "e305c15c7caa0db929d9",
            226: "ab7769e97525ef87dba9",
            22602: "80b84e5ce3a6357e574c",
            22732: "72ce44ace41c2fdbcf36",
            22862: "1a42f6c0d407069b5ced",
            22872: "014e8ce7d0f4434d183f",
            22942: "dfdbf72155b322ca0b08",
            23401: "5730b159942c49a3ac53",
            2356: "7c7e6e53c869e131d5cd",
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
            2535: "23b9790681ed805541ba",
            2538: "53126c48c8ad622fbc14",
            25421: "78627377f696bc836da1",
            25443: "24db192a6249ee652c91",
            25507: "7cd5d119c9a7be1353fb",
            26176: "474e81aa33052323deeb",
            2634: "678e96b18a40fd95811a",
            26460: "c51097872438bc4fd5f8",
            2668: "124abbcabaad024fc441",
            27128: "d0f7571c3ee17833600d",
            27157: "83b1e3b7223c0e8f3a4d",
            27381: "1552b34d22ee5996a214",
            27385: "29edcd03eab92877f1c1",
            27526: "561804e678779ff113ca",
            27601: "e1af0311ff4bec0fe3b4",
            27751: "338ed0fd7a4ddcb346d8",
            27919: "7c4b467a2808a7e56213",
            27933: "854032bc0513fb12075b",
            28249: "a8167f7e6e31c922a53f",
            28296: "2abcdc9e812045bc7720",
            28382: "c121c2750d1579e56e9d",
            28479: "0f25967b7ed075a049cf",
            28538: "ffcdd670c47cdb4ed149",
            28614: "872a202164b9b122e034",
            28990: "909027390c9aade15556",
            29041: "e69c0e6d7cf6310923db",
            29042: "9528f5f9627efa99edcb",
            29136: "37ab8b939c1262703879",
            29396: "a8688e08c6ff5bae48b9",
            29608: "e3750d3c465ccd663049",
            29641: "4eac724bbed08b3e2918",
            29924: "b1e464b16fe3a392f270",
            30006: "a7ed006b1e4714782628",
            30166: "f4977a4cb6d0fc4c516e",
            30243: "e39084ff36d6499c422f",
            30244: "5017f07ef2f2b85bbd30",
            30364: "d22ad94557125983417f",
            30386: "38541d0a127353004a3e",
            30419: "243625e93ae09418440b",
            30478: "5a743b7c86bb6ceb3592",
            30634: "9f870e01572b481303ac",
            30684: "bf939f6105210460e494",
            3084: "6309a19616f8ca0b9606",
            30997: "62a503a7aaa861732e7d",
            31085: "f0c914b0a40f073c6c72",
            31093: "248ee54c80d820ffde76",
            31177: "ae110c08cf6c0bd668d0",
            31649: "ea9cc581ce1abb6b7396",
            3183: "fc0fce3e95825595673c",
            31835: "0aded8fe7b067c1557f6",
            3190: "c19808b118261ab302e7",
            32157: "9443fc0019c26cb5915f",
            32627: "212a0ceb7dd91e0e4aec",
            32640: "47f497e8cfdc099c8c01",
            3277: "a61cfebecec2bc0af1bb",
            32886: "ec0d1ac7d8c05ef96ae2",
            3289: "318cf838f8fbc29088b5",
            32991: "06e79d413b86f5de0c02",
            33053: "a12a14b9acbe6ef4edab",
            33065: "debf54c8ad7eb03010df",
            33156: "2af4f5e8e8c5ccbb5f8a",
            33184: "3fc0ddb4b5f762eb682a",
            33213: "cc9536eae75a44f39e9c",
            33238: "165b4ab03a28472ec805",
            33273: "440fb5eea6b6bf249f3a",
            3336: "21d37f83411a2dbc3d5b",
            33641: "607d59109e1286972e92",
            3378: "90dfd63749414372f019",
            34049: "eedb200cc73069fbb996",
            34191: "d081787ed3c4ed845b24",
            34424: "d03bf1da8080bf0c5da7",
            34627: "c9975dc9fd8f6e2347a4",
            34842: "39de6a81f8cbd28d09d9",
            34933: "75fbe52e45a029d5d40e",
            35247: "6d4cf1c0a9a9455bb411",
            35282: "a64daa0febfea15cd14c",
            35401: "64ad2367557a375a1db1",
            35489: "e1d9759a37fcfba657ea",
            35522: "1fdeb0c7186f0e35cf9e",
            35641: "65d7aa4aaae8a7a0849b",
            358: "dd917ee47ea86745155f",
            35822: "ba46d46a24f076947254",
            35869: "40b05968a1dee169a3cc",
            36052: "d4c012fa37ac191be5fe",
            36278: "170c0d42857ef6a88f1a",
            36371: "93cd1778543bc8a453de",
            36412: "7db181bafaa7532437a2",
            36441: "73e2115b752771422042",
            36494: "7e4a0e12a2f3008d5d36",
            36514: "2c0b46fb8601a597f1bb",
            36869: "a22e301ff540f678cb25",
            36970: "f0a85839ad49bdfe6532",
            36995: "1fa2cda4522bea22f219",
            37052: "a95c3d72637acb255595",
            37066: "c0b61659ed0b42eae95c",
            37133: "3c6472632c78f6e4209c",
            37194: "d38cf1f2d1078379005e",
            37220: "20b07dfb6df62ce763c8",
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
            38062: "e075c1ddfe7cbbda7903",
            3807: "aa5ac255a0ead15fd3cf",
            38359: "24cbe73dc4bdd6dc3a2c",
            38413: "a8fc50b4b037c0c478a6",
            38506: "77e801208b047a7b0f27",
            3865: "4dc39e38ba642dc16dd0",
            38779: "d0b305ee79c24ba79ca7",
            39009: "fa6e894faa3207cd7791",
            39010: "fb33f4f89bd28159e861",
            39143: "90a4c667240676b8b281",
            39248: "ab4c4ad686ab0d73f4f4",
            39285: "6ffe7ad7ba7dc5a9ea02",
            39305: "1ec9217aeb2a3b5c2775",
            394: "c37ba2472029dcfaea5e",
            39511: "39b64aa86b60132266b3",
            39612: "250b4e8f59a69de8183c",
            39627: "94db3d15afa5426cefef",
            39648: "bcc516c1aa9117c844c4",
            3985: "43ff1ee97d3e776c8c34",
            40035: "e98876498ee9ec5016c7",
            40096: "61432e98bbb6106d56ed",
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
            41588: "6d727bf722297d85b126",
            41814: "106d0cda79ea03413270",
            4189: "42abedad40bff25b3c4c",
            41947: "4fd37f455e67eba1826d",
            41953: "ed8e41f4980166b05760",
            41984: "b1855d78621fb9c80fc7",
            42358: "618e4fbef855d0f25a06",
            42483: "7bd0f08621c14392292d",
            4266: "1bbe9d432c3f6f9bdb17",
            4267: "7b4908a3e6ab3b23efdc",
            42758: "7d4ba29e17da4b063ab5",
            43057: "c46c41df7df0c400e4f6",
            43133: "80aec7ff8950bcb0f408",
            43331: "ee15e582bf5b8ce5cc22",
            43350: "b7a90c48b64066e5429f",
            43353: "36807aba668326afed05",
            43502: "770f963fa2492774b43f",
            43643: "a4ebbb4e8dfa60c26176",
            43782: "3c660743dc8eb3204f3e",
            43903: "79a3047d75e3d91d113e",
            44153: "cf4fe35327eb768e045c",
            4419: "895c944ab0ce764fffb7",
            44462: "1f055a8b3e55fa193305",
            44754: "fb4a42790dfa86c8da89",
            44798: "1fc19e65c32c61536545",
            44808: "23e73c1127a852d7c21f",
            44827: "75017f4569c7b2e179ad",
            44878: "e2bf78a9302badfa751a",
            45094: "ce8a723cb127dc2dfbfd",
            45130: "2a37241d7968bdecc8d5",
            4530: "b9737da79b732c5472eb",
            45576: "f3069fea224834c09dc4",
            45746: "ed677e8a505aa36741e5",
            45747: "211e53ea01184302195b",
            46136: "68dcabb63451f7a5f05c",
            46161: "77441d28feeb5d461d66",
            46369: "478c011e942546ce76b7",
            46468: "0caf7d0ecfe447310e19",
            46826: "b304b60c8a82db62fef9",
            46865: "7312ed5edebe32fc48ab",
            46882: "0c3287936afdfef6180b",
            46896: "95555f081c8438c3cf33",
            47034: "85f10d970436ba2bc47a",
            47055: "f6b27aef66c43eae360e",
            47228: "c3031b630ba6bcb1a10a",
            47354: "8dd7b22042e1a8a32b1c",
            47435: "951b53d37c10723a1139",
            47484: "19eeb2002a56f38815d8",
            47674: "e6a1dd73f308558330f3",
            47704: "192a53ce249704e2124f",
            48017: "84876fba5f5ff2a9bcb1",
            48092: "2199f6d243b997580240",
            48174: "644ea2985ce6c07a8108",
            48378: "64866b728ad8d1575460",
            48707: "01bc99ed338b4cf14a7f",
            48748: "b4761e6f8e7030487599",
            48934: "88cde2aaacae19318b9c",
            49049: "27ef3dd005ad61368dc3",
            49131: "03b21d6c8d2e35a5f44f",
            49277: "63944b5d4e9c8f23569d",
            4934: "33e679630accd49b539b",
            49365: "64e916d669a8c3c0167d",
            49508: "9b1e1de3fd4a5e6679f8",
            4970: "8de19cd3d9fe3d70118c",
            49827: "b40ac5f685cfc4ff8ab4",
            49838: "274383bb9d97bc5214a5",
            4984: "50ad4e0b92ad0772808b",
            5004: "382d55a250536aa862f6",
            50331: "cce9e96db33b39ebef35",
            50498: "074d9353a8dd2280a5aa",
            50872: "70c7d6252f72995f887d",
            50929: "120ef5287891f51d1838",
            50987: "b103dcd35c88afa72d77",
            51068: "31932d2b52eecb53337b",
            51199: "9aec627cef0bd78544b0",
            51373: "4f0e3f4652e43d08746e",
            51477: "ef9556551a4b6a72c18b",
            51529: "2f3cddfba779f3494172",
            51563: "54a3eab52edaceabcebf",
            51868: "db465dcfabf8154bc7bb",
            51934: "34e379852e5f2b1a4a9a",
            5217: "28117d97ee8e5706cffb",
            522: "837ed49f219ac7e79ac5",
            52590: "96ecb4785a6a0b0b8aae",
            52657: "f1e7e11afe9735301612",
            52680: "571dbcb1aae9b25af823",
            53162: "510a624b5c5b2b5d7474",
            53195: "03b0fa7900bf4541d253",
            53269: "4d539d1eb181f5f31901",
            53344: "02e895db1b9c7675b38f",
            53466: "dd54f24a0c5a5ae14f51",
            53510: "3db1285290958819560e",
            53512: "7d4f24ab2e56939d507b",
            53579: "1f7f76aa11fbd3ab7c64",
            53809: "e201d87aca8095a5ccc3",
            53896: "a576a31c333f1a8f2b38",
            5396: "3b3ac0a1573652b95b6e",
            54021: "fa014ed84f5400c5062e",
            54076: "63722f2ff7b8fef5e405",
            54310: "9a0a09cc4b443712a389",
            54343: "d483a5cbea5addc64992",
            54441: "3b812cb16cc3b15cad7a",
            5454: "a8076468f9b97360ca9a",
            54597: "6a58d2c68dc14ddea156",
            54626: "ac00126c14d8975a9c49",
            54845: "086582f18b534c15579a",
            54868: "1d612cd4ed47e2018c87",
            54918: "189509cf090227c172dc",
            54931: "6ee8e1b9d5d1433a520b",
            55228: "639181b056b1751f0b33",
            5528: "42fabbea1720859356e3",
            55601: "4811d448292d3a8401ba",
            55632: "c4cf7de2e4ee93f8f015",
            5577: "c451a6beb9de9e2d5aad",
            55944: "ea113ecb6e2df4996353",
            56035: "e0cfd221b0348af4e1f6",
            56049: "bd94deea1b1bb9c63fa9",
            5609: "8cad844646eeedccfcbc",
            561: "200944d085aeab393864",
            56215: "4f7fb8df898a93f8fb42",
            56236: "fac135dd1740f838bb8d",
            56268: "43e19d68952613f97ce1",
            56446: "ea0990b9753ec7444084",
            56496: "45aa10c7f04686b7c656",
            56630: "1d04eae65e9e10bfaa93",
            56826: "466ea8c1c0506beed6cb",
            56944: "bacf69a28b8bd347cd29",
            57372: "3a6301cdfcfbbc58dbfc",
            57387: "d305c087a892145a5fa6",
            57486: "04d568244552f88ca603",
            57539: "a812a0790288293c8d99",
            57650: "7a44bf517cfd5b493bfd",
            57961: "8a62e6d8844efeec7796",
            58023: "82f5b7a6a00a7ab36a97",
            58175: "20fb5c79d43ab39974d9",
            58227: "6bf55b3ba59e0232d5e5",
            5828: "e56ba8d57a51b6909def",
            58286: "1982178707b066f6031c",
            58548: "4c6593da5ee32fa551dc",
            58621: "4b7ef8995d1288d139ec",
            5863: "84e27213e2900eca9424",
            58690: "f19ee498c1973812b8a8",
            5877: "b1edf5418582a44a5f1f",
            58903: "e56849d807e02a25a16b",
            58912: "817c705c3e8e506061a7",
            59128: "16e3fc8f57902807a5aa",
            59281: "05c0088d396c50771da2",
            5945: "a74631c19600cab1961a",
            5950: "4e30e323285f42700215",
            59500: "7def729c76f0b55d8e51",
            59546: "68fd71a530ff90778c08",
            59642: "c4c24358bae3ccdaadad",
            59682: "678aff10dadf81641a7c",
            59716: "63a02c0b4df0ec3febf5",
            59729: "829d9bb6425a9d7d3c07",
            59743: "9b1babcaac0043c8b230",
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
            60878: "8a98f687a98e6e0ac20a",
            61214: "de458f8ad2075777ed76",
            61366: "e1dfdc5d4076b6939bdd",
            61386: "39b89da8168328c3ed40",
            61418: "b0268e2f3670ee4019a7",
            61482: "b78d1fc5668151b805e4",
            61536: "07203e7e269e91403454",
            61624: "92d3958d85e3e6c3eec4",
            61672: "33b8904a15182b799e7c",
            61690: "26781d15d54f7539ff69",
            61939: "0dff902d2b2673f13130",
            62065: "19bf1fe4bd3e1888d878",
            62233: "8238ebe6f1ff1833ca03",
            62236: "a228930fe21ef11277a6",
            62344: "bc6531ff8da796251d19",
            62629: "f5975549da1435e02445",
            6284: "3cd418371352042efbef",
            62903: "4a4700f905c33c97f8df",
            62985: "bf31b8539c55265b8779",
            63007: "96d48307af88cfcec649",
            6310: "409906b362fc13709878",
            63629: "ac0230129f97d1154faf",
            63636: "e6eed1ff73af3d72ae6f",
            63676: "5ad97a17de17ee41e817",
            6368: "7f56fa4ae4fb03e1b9c5",
            638: "0382c7712eaece98c812",
            6380: "7ee81890a9927ee213b5",
            6414: "eaa23530e760bb908f7c",
            64248: "dd7df8cde0c00cc8bad6",
            64250: "35fe63e7fbdc18121d75",
            64409: "390583aaf60ad701c05b",
            64563: "89d8ff1bd47db6a0f4ee",
            64908: "765f21ea2ed1a4ce643a",
            64941: "20f2f15338326806ac34",
            65045: "0779ef589389b78c775a",
            6532: "e364ea96a3b95ba5343b",
            65652: "3b29a744b4d5e86c9447",
            6595: "2158e0daa9a51bc35a99",
            66050: "72bc56f430b18d920a72",
            66071: "ce812155966f639f6f44",
            661: "ba04c9f4e870e88fa228",
            66462: "4e901dc967d1ee90a882",
            66893: "5b3ebedf3efe76949c9d",
            66902: "e5b9c2aa233ff84ed145",
            66915: "e8a6ddcecb8c8bf2a842",
            66944: "8984d6ab2c92986846d9",
            67526: "4c4f74d9cf69f1724dd3",
            67607: "5bfe72ca75f8f0759d0c",
            67753: "cf4545918022449fd1f1",
            67816: "18d6e666ee9cfc40fd35",
            67920: "cb539303e90133618234",
            67983: "7b999142e98c831a1bfb",
            68130: "0e53e0e7240e9b385024",
            68449: "75668ec78e5a3b5ef0b5",
            68535: "82eb906ff710f98fa544",
            68614: "9dbf72ae292c71b807e2",
            68720: "f84040c2b1ae3fe87f2a",
            68747: "fd953edf40335219fdb6",
            68784: "8790402d51b044446413",
            68822: "05b3de68f6753ce114d9",
            6901: "31c2375d1b0e3aa7ab96",
            69015: "0b5efa3239d9242ed0a4",
            69208: "9ce2b32d77da2e95a69e",
            69220: "91f451c235cca96d32a7",
            69240: "83e0cde48f29d914493a",
            69473: "ca6aeae5ba1872104621",
            69495: "d8c124466c63de34e299",
            6957: "bccaefc80244ad9eb07a",
            69633: "18445458b7bbcdfbc133",
            69760: "c3d4aaa62d56612a8257",
            69788: "b007b43c3c2d8fcfa68c",
            69806: "2de796f2c5b8d87aed84",
            69923: "a8a9f6b6092de73faeb9",
            69969: "76fd72f951ea66f67e03",
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
            71984: "eaa4eda2e4e19c49bfd7",
            72323: "a881df372b1e09e4e72d",
            72458: "38a4a0a5a778dc755416",
            72588: "e1448bd6456d9a28bfda",
            72637: "f066b3693fb76524dc39",
            72760: "dd05c7ed681fdd264a0e",
            7285: "a67bb2f81663369b36b4",
            72891: "f3f37b877b374c9d5d3a",
            72920: "1276226058c56cbfc7f2",
            72922: "04ceb4977db61079209a",
            7302: "843680a99e8cc23b2091",
            73149: "cc905e5faef7472a9afc",
            73206: "f0b61ed4f32b3ee1145c",
            73872: "8cdbea2fdc2449f0a4a2",
            73921: "4b8b54bbdfa0b620b992",
            7402: "b65c23079a357c3a950c",
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
            75308: "8773d1a692ea9471cf75",
            75409: "1db81c9d1e6e98e27595",
            75475: "5f270e34b3898106f1a3",
            75613: "2e16b6b06a93620d59f1",
            7573: "e072a0aa29890d46e227",
            7584: "ab2706cc048c7ec26227",
            75843: "9e0b0de5a8d5b4d6ef83",
            7590: "7d0d7227dbc2232f45aa",
            75994: "229351efcb11fbfc6e19",
            76233: "7b86e22f9d7bba5872d0",
            76241: "529ae754e3e0af645336",
            7649: "21f70e24d49c8fb3cbee",
            7654: "418f2d0f7cbf9d1149e9",
            76540: "c9cbc9a84bf954a94835",
            76731: "96414d53a5392814b38d",
            76815: "e467b2f6c12fc8c83811",
            7685: "f72b3e5052c28f047630",
            76888: "d4876d2baed23a95c8f9",
            77117: "debd13ce9e268afe993a",
            7717: "e01949afc287067d1bdb",
            77172: "d93455a0bec06358a59c",
            7728: "bc38f463f63e11c11d5e",
            77459: "15dcffaa775428fd4ccd",
            77485: "5b6065f96021f1845f00",
            77578: "2b0e335607d147877961",
            77721: "781b616b10d647f4e039",
            77745: "b943a49b170e75284fc4",
            77800: "3b56111f1e3c8808e5db",
            77875: "b3c4c1fa3fd5ca9be6f7",
            77927: "3d162af01d8a307be7f3",
            78032: "c3b87bf7bc74f02abd9e",
            78073: "69933356bf93e49cfe9d",
            78185: "ceeb91592d6fe4bd80bf",
            78221: "37761aae534af0ead536",
            78273: "a15c12db760dc27d9698",
            78587: "69a3b9132a5c2e6e490c",
            78607: "9e8be87361b4712cf557",
            78650: "0046019f93542e7dd740",
            78670: "bea3c5d50af40bf89c09",
            78704: "bcdf7fe4e1b81bbec845",
            78712: "ebe0395d251abc8fd7b1",
            78786: "45fa004997fe5d7c760f",
            79457: "842e08db8f99ebbe46db",
            79477: "f93a9cd3465b1aef844e",
            79521: "f79aa7a5fff8cb2f285f",
            7954: "b39153fee4c5eb4847eb",
            79618: "3c675d8de5d8e668a1bb",
            79764: "b4424e554b3edc233639",
            79921: "68681dd46413bca10faf",
            80026: "b71a9b30530bd6c54497",
            80301: "833a0b6a250797555bfe",
            80374: "90d2a876d79b84684003",
            804: "16433157f57499e8bd69",
            80404: "17ef1f260dabdaf03a6e",
            80451: "be0c59bc6477ccb45a13",
            80493: "64c136a4e79081f6657a",
            80869: "e7c0f0c36f8aa5a6e7d2",
            8102: "d3464081ffaa0cd1bc84",
            81124: "4b69a4fdcbdc7cf8833e",
            81247: "fa3d219e9ac599aca65b",
            81352: "dcdc3c1cb387e098e81c",
            81358: "be815bee85fa303bc006",
            8137: "536712079181242683c1",
            81532: "55e9626c3a3a22b03a6c",
            81539: "f583f69bec08ae9ed3b3",
            81811: "4a632a0fdfc76fbce3fa",
            81843: "fa7351c529f7d63a1995",
            81975: "c9264e3a555cb3baf449",
            821: "120810c7c7e0a57d0ef6",
            82143: "18cd5244b76ca6868ce7",
            82321: "810b2830ff33b10d9566",
            824: "e7213129e79b738fdd74",
            82501: "e428edb56600d65dd590",
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
            83833: "4be5dd3caf0b8fa98b09",
            83939: "a74ccbb626c7c86a9da4",
            83942: "555fecc34a707a06de5c",
            84239: "b01bb936dcacd99667c7",
            84259: "1f53d4b4cd3fe223c2a8",
            84385: "e996ddb413157a229c67",
            84399: "9a71aba6d8414db39c00",
            84482: "156abea2b22e1f50f898",
            84509: "3ea1488aa2468a11224b",
            84518: "81fae0d79458057c10eb",
            84686: "bdd368ec21a0b0951a7d",
            84722: "30c193a5ce22235c5ce1",
            84725: "0ea7697faacccf0d2cf7",
            84778: "f631f0259f226d5dd531",
            85093: "f83ef364b3a2fb8313ba",
            85100: "82243c61640bd6b6689a",
            85107: "289550143c14cf2d3df1",
            85281: "79a4ac78181d0140a90a",
            85342: "538d3e85a1b2de21e080",
            85351: "5c490901a0ec06cf749f",
            85552: "e43d641c0468842c25a2",
            85668: "9551a9fc0a4bc4c6ba86",
            85760: "7273869c2ad3d2b1ecb9",
            85828: "6e97d6252e702fba0db2",
            85885: "c7542d3f1320eb0bd5a2",
            86047: "6a226fa003819501957b",
            86060: "e1a285670305512e31bc",
            86200: "0bda52e7b32a476cadac",
            8631: "7ada097d4ac85091b0a2",
            86426: "142263559be93ff28b69",
            86977: "1ec4457edf200fb3d83b",
            87200: "5470c67797401f39d706",
            87233: "6ab1a59a0cac77a6e5aa",
            8739: "4795079f7c69615518e7",
            87549: "5faeae6adb92a1f3a147",
            87624: "99344ff8a7c03dd348aa",
            8790: "0849aa769826dc2b0922",
            88358: "8b697d5e3af06eb61baf",
            88408: "2efa98671b832bec2114",
            88571: "7ad0010fce6adefc64e1",
            88870: "7270cd06cd6fd5e1589f",
            88939: "2dffcdd52a43ef6e647e",
            89069: "507d5c9e3a44d5bad88e",
            8926: "b815a438c9d719390387",
            89289: "4cd87126444c4bbf9c33",
            89413: "ec3f5a20a0421f94d283",
            89552: "830e64f7dd42b75068ed",
            8965: "681c4940fa29272cdece",
            89675: "eb71a90827f399588581",
            89715: "a3794598e46fd920f25f",
            89792: "b318bd0c85cfaf3d9b70",
            89873: "f0b82b00e135e3be411c",
            9007: "2008c598df13f7ae9e8f",
            90144: "7f6c58acc417ec15cebb",
            90220: "171909c9ff0aa7694857",
            90424: "693a017d2b1823b3c17b",
            90542: "5d154bc9a2b5cee6bd12",
            90688: "d960e64b38fb84e38bc5",
            91032: "c3dd26c8511cfb91f41e",
            91199: "c0cae60a32dd8c8efd68",
            91315: "f64b285c9b1f76b67a69",
            91354: "bad9a02bd07df4c91c3f",
            91789: "838b1f0e42b7424e6a01",
            92006: "3cbfd9b742fe4b931cd7",
            92339: "d09d15bc01caf9b0c1ca",
            92401: "8e7e69ed8b2cabd96083",
            92446: "94a798ba2efe0535c649",
            92557: "5fcac6fbd0049e76a45b",
            92575: "a4133d71989969387f1a",
            92695: "1e249025519d2bbf764e",
            92780: "70ed127226a0d781f747",
            92795: "05b029a0e477099aaf62",
            92816: "7b1333cc990953fa6911",
            92893: "f5116555c0137308c597",
            93198: "290e2929513e7a940723",
            93288: "e46e65585a4ef009c291",
            9343: "de102b64043cb9ffa8dd",
            9347: "f6e5a569970b2a001735",
            9354: "c3c328ef2df5fa4eacdb",
            93554: "a65c693b35e0ef70d96d",
            9362: "1147293c15ad3faf1d5b",
            93626: "268343b2c8ca2afc15b9",
            93776: "ad264221671e4c4425ce",
            94005: "7e692d5f875b3947b957",
            94064: "f9b5889eea38769ba1d7",
            94566: "bde74e26ea8ff5be4eed",
            94633: "232cf70c304360f82a87",
            94864: "1ef07738cd660aba12fb",
            94889: "06de3a26f81350377899",
            94912: "a986bb025bcf65e4c199",
            95136: "1fd8107340f7b48f3245",
            95257: "b208906654f533dc16ea",
            95307: "bee8b56805d6dafe473a",
            95393: "5478d3424f0f7ff8836d",
            95422: "7d1bd4f74170bc506e7c",
            95468: "0794a9db5526a86b5999",
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
            96645: "aad4d3cd694d24bb50b7",
            97188: "051a55188817dac94286",
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
            98570: "264878c3025a95cfd372",
            98920: "abec0675177e45bb0f64",
            98952: "8ee42374cb4350864e1d",
            99339: "476e5cea99a4f599a131",
            99414: "14f564f265dc4ba92c72",
            99450: "ddf1fbafb2030b616836",
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
    }, s.o = function(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }, i = {}, f = "discord_app:", s.l = function(e, a, t, d) {
        if (i[e]) {
            i[e].push(a);
            return
        }
        if (void 0 !== t) {
            for (var n, c, o = document.getElementsByTagName("script"), r = 0; r < o.length; r++) {
                var l = o[r];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == f + t) {
                    n = l;
                    break
                }
            }
        }!n && (c = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, s.nc && n.setAttribute("nonce", s.nc), n.setAttribute("data-webpack", f + t), n.src = e), i[e] = [a];
        var b = function(a, t) {
                n.onerror = n.onload = null, clearTimeout(u);
                var d = i[e];
                if (delete i[e], n.parentNode && n.parentNode.removeChild(n), d && d.forEach(function(e) {
                        return e(t)
                    }), a) return a(t)
            },
            u = setTimeout(b.bind(null, void 0, {
                type: "timeout",
                target: n
            }), 12e4);
        n.onerror = b.bind(null, n.onerror), n.onload = b.bind(null, n.onload), c && document.head.appendChild(n)
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.nmd = function(e) {
        return e.paths = [], !e.children && (e.children = []), e
    }, o = [], s.O = function(e, a, t, d) {
        if (a) {
            d = d || 0;
            for (var n = o.length; n > 0 && o[n - 1][2] > d; n--) o[n] = o[n - 1];
            o[n] = [a, t, d];
            return
        }
        for (var c = 1 / 0, n = 0; n < o.length; n++) {
            for (var a = o[n][0], t = o[n][1], d = o[n][2], i = !0, f = 0; f < a.length; f++) c >= d && Object.keys(s.O).every(function(e) {
                return s.O[e](a[f])
            }) ? a.splice(f--, 1) : (i = !1, d < c && (c = d));
            if (i) {
                o.splice(n--, 1);
                var r = t();
                void 0 !== r && (e = r)
            }
        }
        return e
    }, s.p = "/assets/", s.v = function(e, a, t, d) {
        var n = fetch(s.p + "" + t + ".module.wasm"),
            c = function() {
                return n.then(function(e) {
                    return e.arrayBuffer()
                }).then(function(e) {
                    return WebAssembly.instantiate(e, d)
                }).then(function(a) {
                    return Object.assign(e, a.instance.exports)
                })
            };
        return n.then(function(a) {
            return "function" == typeof WebAssembly.instantiateStreaming ? WebAssembly.instantiateStreaming(a, d).then(function(a) {
                return Object.assign(e, a.instance.exports)
            }, function(e) {
                if ("application/wasm" !== a.headers.get("Content-Type")) return console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e), c();
                throw e
            }) : c()
        })
    }, ! function() {
        var e = {
                12633: 0,
                24217: 0,
                27519: 0,
                2797: 0,
                32948: 0,
                42482: 0,
                43455: 0,
                54807: 0,
                62734: 0,
                64787: 0,
                70397: 0,
                84471: 0,
                91463: 0
            },
            a = "discord_app",
            t = "data-webpack-loading",
            d = function(e, d, n, c) {
                var i, f, o = "chunk-" + e;
                if (!c) {
                    for (var r = document.getElementsByTagName("link"), l = 0; l < r.length; l++) {
                        var b = r[l],
                            u = b.getAttribute("href") || b.href;
                        if (u && !u.startsWith(s.p) && (u = s.p + (u.startsWith("/") ? u.slice(1) : u)), "stylesheet" == b.rel && (u && u.startsWith(d) || b.getAttribute("data-webpack") == a + ":" + o)) {
                            i = b;
                            break
                        }
                    }
                    if (!n) return i
                }!i && (f = !0, (i = document.createElement("link")).setAttribute("data-webpack", a + ":" + o), i.setAttribute(t, 1), i.rel = "stylesheet", i.href = d);
                var p = function(e, a) {
                    if (i.onerror = i.onload = null, i.removeAttribute(t), clearTimeout(h), a && "load" != a.type && i.parentNode.removeChild(i), n(a), e) return e(a)
                };
                if (i.getAttribute(t)) {
                    var h = setTimeout(p.bind(null, void 0, {
                        type: "timeout",
                        target: i
                    }), 12e4);
                    i.onerror = p.bind(null, i.onerror), i.onload = p.bind(null, i.onload)
                } else p(void 0, {
                    type: "load",
                    target: i
                });
                return c ? c.parentNode.insertBefore(i, c) : f && document.head.appendChild(i), i
            };
        s.f.css = function(a, t) {
            var n = s.o(e, a) ? e[a] : void 0;
            if (0 !== n) {
                if (n) t.push(n[2]);
                else if (/^(4923|9938)7$/.test(a)) {
                    var c = new Promise(function(t, d) {
                        n = e[a] = [t, d]
                    });
                    t.push(n[2] = c);
                    var i = s.p + s.k(a),
                        f = Error();
                    d(a, i, function(t) {
                        if (s.o(e, a) && (0 !== (n = e[a]) && (e[a] = void 0), n)) {
                            if ("load" !== t.type) {
                                var d = t && t.type,
                                    c = t && t.target && t.target.src;
                                f.message = "Loading css chunk " + a + " failed.\n(" + d + ": " + c + ")", f.name = "ChunkLoadError", f.type = d, f.request = c, n[1](f)
                            } else n[0]()
                        }
                    })
                } else e[a] = 0
            }
        };
        var n = function(a, t) {
                var d = t[0];
                a && a(t);
                for (var n = 0; n < d.length; n++) void 0 === e[d[n]] && (e[d[n]] = 0)
            },
            c = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [];
        c.forEach(n.bind(null, 0)), c.push = n.bind(null, c.push.bind(c))
    }(), ! function() {
        s.b = document.baseURI || self.location.href;
        var e = {
            12633: 0
        };
        s.f.j = function(a, t) {
            var d = s.o(e, a) ? e[a] : void 0;
            if (0 !== d) {
                if (d) t.push(d[2]);
                else {
                    var n = new Promise(function(t, n) {
                        d = e[a] = [t, n]
                    });
                    t.push(d[2] = n);
                    var c = s.p + s.u(a),
                        i = Error();
                    s.l(c, function(t) {
                        if (s.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                            var n = t && ("load" === t.type ? "missing" : t.type),
                                c = t && t.target && t.target.src;
                            i.message = "Loading chunk " + a + " failed.\n(" + n + ": " + c + ")", i.name = "ChunkLoadError", i.type = n, i.request = c, d[1](i)
                        }
                    }, "chunk-" + a, a)
                }
            }
        }, s.O.j = function(a) {
            return 0 === e[a]
        };
        var a = function(a, t) {
                var d = t[0],
                    n = t[1],
                    c = t[2],
                    i, f, o = 0;
                if (d.some(function(a) {
                        return 0 !== e[a]
                    })) {
                    for (i in n) s.o(n, i) && (s.m[i] = n[i]);
                    if (c) var r = c(s)
                }
                for (a && a(t); o < d.length; o++) f = d[o], s.o(e, f) && e[f] && e[f][0](), e[f] = 0;
                return s.O(r)
            },
            t = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [];
        t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
    }();
    var b = s.O(void 0, ["49237", "99387", "24217", "62734", "42482", "43455", "64787", "2797", "91463", "32948", "84471", "70397", "27519", "54807"], function() {
        return s("650204")
    });
    s.O(b)
}();
//# sourceMappingURL=web.28e912cba9bafeb7ecc0.js.map