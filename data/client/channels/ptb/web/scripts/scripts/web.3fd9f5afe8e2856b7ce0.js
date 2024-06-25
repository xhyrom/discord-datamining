(() => {
    var e = {
            242167: function(e, t, a) {
                "use strict";
                a(250668)("Uint32", function(e) {
                    return function(t, a, n) {
                        return e(this, t, a, n)
                    }
                })
            },
            544140: function(e, t, a) {
                var n = a(796581),
                    d = a(149912);
                e.exports = function e(t, a, c, i, r) {
                    var o = -1,
                        f = t.length;
                    for (c || (c = d), r || (r = []); ++o < f;) {
                        var s = t[o];
                        a > 0 && c(s) ? a > 1 ? e(s, a - 1, c, i, r) : n(r, s) : !i && (r[r.length] = s)
                    }
                    return r
                }
            },
            149912: function(e, t, a) {
                var n = a(466293),
                    d = a(443735),
                    c = a(402428),
                    i = n ? n.isConcatSpreadable : void 0;
                e.exports = function(e) {
                    return c(e) || d(e) || !!(i && e && e[i])
                }
            },
            90757: function(e, t, a) {
                var n = a(544140);
                e.exports = function(e) {
                    return (null == e ? 0 : e.length) ? n(e, 1) : []
                }
            },
            799656: function(e, t, a) {
                "use strict";
                var n = a(735250);
                a(470079);
                var d = a(266067),
                    c = a(442837),
                    i = a(353926),
                    r = a(314897),
                    o = a(981631);
                t.Z = c.ZP.connectStores([i.Z, r.default], () => {
                    let e = r.default.getToken();
                    return {
                        token: e,
                        hasLoadedExperiments: null != e || i.Z.hasLoadedExperiments
                    }
                })(e => {
                    let {
                        hasLoadedExperiments: t,
                        token: a
                    } = e;
                    return null != a ? (0, n.jsx)(d.l_, {
                        to: o.Z5c.APP
                    }) : t ? (0, n.jsx)(d.l_, {
                        to: o.Z5c.DEFAULT_LOGGED_OUT
                    }) : null
                })
            },
            155221: function(e, t, a) {
                "use strict";
                a.d(t, {
                    a: function() {
                        return V
                    }
                }), a(47120);
                var n = a(735250),
                    d = a(470079),
                    c = a(664751),
                    i = a(266067),
                    r = a(990547),
                    o = a(719711),
                    f = a(271579),
                    s = a(756647),
                    l = a(442837),
                    b = a(433517),
                    u = a(799656),
                    h = a(765717),
                    p = a(663993),
                    m = a(329816),
                    _ = a(554608),
                    E = a(83949),
                    g = a(137412),
                    I = a(314897),
                    v = a(626135),
                    O = a(361207),
                    A = a(690032),
                    w = a(358085),
                    T = a(998502),
                    Z = a(981631),
                    S = a(188785),
                    N = a(436620);
                a(928518), a(972830), a(704806);
                let P = (0, p.Un)({
                        createPromise: () => Promise.all([a.e("49237"), a.e("61482")]).then(a.bind(a, 576184)),
                        webpackId: 576184,
                        name: "UnsupportedBrowser"
                    }),
                    C = (0, p.Un)({
                        createPromise: () => Promise.all([a.e("99387"), a.e("88571")]).then(a.bind(a, 431583)),
                        webpackId: 431583,
                        name: "DownloadApps"
                    }),
                    D = (0, p.Un)({
                        createPromise: () => a.e("81975").then(a.bind(a, 484097)),
                        webpackId: 484097,
                        name: "InviteProxy"
                    }),
                    L = (0, p.Un)({
                        createPromise: () => Promise.all([a.e("99387"), a.e("20786")]).then(a.bind(a, 417663)),
                        webpackId: 417663,
                        name: "VerifyConnectedAccount"
                    }),
                    R = (0, p.Un)({
                        createPromise: () => Promise.all([a.e("99387"), a.e("16565")]).then(a.bind(a, 984388)),
                        webpackId: 984388,
                        name: "LinkConnectedAccount"
                    }),
                    M = (0, p.Un)({
                        createPromise: () => a.e("46882").then(a.bind(a, 924339)),
                        webpackId: 924339,
                        name: "LinkAuthorize"
                    }),
                    U = (0, p.Un)({
                        createPromise: () => Promise.all([a.e("99387"), a.e("19878"), a.e("49277")]).then(a.bind(a, 197528)),
                        webpackId: 197528,
                        name: "ActivateDevice"
                    }),
                    y = (0, p.Un)({
                        createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("23755"), a.e("89350"), a.e("11751"), a.e("50990"), a.e("94364"), a.e("18438"), a.e("29549"), a.e("31605"), a.e("6380"), a.e("11250"), a.e("95854"), a.e("18101"), a.e("65840"), a.e("25788"), a.e("77172"), a.e("95393"), a.e("14262"), a.e("86977"), a.e("41662"), a.e("81539"), a.e("90508"), a.e("49508"), a.e("7590"), a.e("8739"), a.e("58286"), a.e("39285"), a.e("41947"), a.e("54535"), a.e("65371"), a.e("30243"), a.e("3084"), a.e("8540"), a.e("65392"), a.e("68241"), a.e("97458"), a.e("86560"), a.e("17764"), a.e("42341"), a.e("98928"), a.e("22036"), a.e("47939"), a.e("1187"), a.e("30676"), a.e("37941"), a.e("48800"), a.e("27577"), a.e("3741"), a.e("37220"), a.e("91026"), a.e("92557"), a.e("80026"), a.e("36439"), a.e("91315"), a.e("72922"), a.e("96936"), a.e("7848"), a.e("95468"), a.e("11256"), a.e("11047")]).then(a.bind(a, 457094)),
                        webpackId: 457094,
                        name: "ViewsWithMainInterface",
                        memo: !0,
                        id: 457094
                    }),
                    x = (0, p.Un)({
                        createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("96427"), a.e("49368"), a.e("75492"), a.e("11250"), a.e("25788"), a.e("95393"), a.e("52030"), a.e("17764"), a.e("10778"), a.e("93669"), a.e("84956"), a.e("76990"), a.e("45915")]).then(a.bind(a, 822699)),
                        webpackId: 822699,
                        name: "ViewsWithAuth"
                    }),
                    k = (0, p.Un)({
                        createPromise: () => a.e("32640").then(a.bind(a, 285773)),
                        webpackId: 285773,
                        name: "ViewsWithOAuth2"
                    }),
                    j = (0, p.Un)({
                        createPromise: () => Promise.all([a.e("99387"), a.e("10508")]).then(a.bind(a, 549652)),
                        webpackId: 549652,
                        name: "BrowserHandoff"
                    }),
                    G = (0, p.Un)({
                        createPromise: () => a.e("76888").then(a.bind(a, 573276)),
                        webpackId: 573276,
                        name: "MobileWebHandoffFallback"
                    }),
                    V = (0, p.Un)({
                        createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("23755"), a.e("89350"), a.e("11751"), a.e("50990"), a.e("94364"), a.e("29549"), a.e("31605"), a.e("6380"), a.e("11250"), a.e("95854"), a.e("18101"), a.e("65840"), a.e("25788"), a.e("77172"), a.e("95393"), a.e("14262"), a.e("86977"), a.e("81539"), a.e("90508"), a.e("7590"), a.e("8739"), a.e("58286"), a.e("39285"), a.e("41947"), a.e("30243"), a.e("3084"), a.e("8540"), a.e("65392"), a.e("68241"), a.e("97458"), a.e("17764"), a.e("42341"), a.e("98928"), a.e("22036"), a.e("47939"), a.e("1187"), a.e("30676"), a.e("37941"), a.e("48800"), a.e("3741"), a.e("37220"), a.e("91026"), a.e("92557"), a.e("36439"), a.e("91315"), a.e("72922"), a.e("96936"), a.e("7848"), a.e("69240")]).then(a.bind(a, 290161)),
                        webpackId: 290161,
                        name: "Overlay"
                    }),
                    F = (0, p.Un)({
                        createPromise: () => Promise.all([a.e("99387"), a.e("18824"), a.e("79427")]).then(a.bind(a, 430075)),
                        webpackId: 430075,
                        name: "SuspendedUserSafetyHubPage"
                    }),
                    H = (0, p.Un)({
                        createPromise: () => Promise.all([a.e("99387"), a.e("19878"), a.e("28296")]).then(a.bind(a, 630107)),
                        webpackId: 630107,
                        name: "QuestsLandingPage"
                    }),
                    W = (0, p.Un)({
                        createPromise: () => Promise.all([a.e("99387"), a.e("47228")]).then(a.bind(a, 531338)),
                        webpackId: 531338,
                        name: "ConnectionsAuthorizeContinue"
                    }),
                    B = (0, p.Un)({
                        createPromise: () => a.e("54918").then(a.bind(a, 838134)),
                        webpackId: 838134,
                        name: "ApplicationDirectoryRoutes"
                    }),
                    K = () => (0, n.jsx)(y, {}),
                    z = new Set([Z.Z5c.LOGIN, Z.Z5c.LOGIN_HANDOFF, Z.Z5c.INVITE_LOGIN(":inviteCode"), Z.Z5c.GIFT_CODE_LOGIN(":giftCode"), Z.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode")]);

                function Y(e, t) {
                    return t ? e.filter(e => !z.has(e)) : e
                }
                class X extends d.Component {
                    componentDidMount() {
                        T.ZP.cleanupDisplaySleep(), g.Z.initialize()
                    }
                    componentWillUnmount() {
                        g.Z.terminate()
                    }
                    render() {
                        let e;
                        let {
                            isAuthenticated: t,
                            migrationStatus: a,
                            skipsSettingDefaultPageTitle: d
                        } = this.props;
                        return e = a === _.P.IN_PROGRESS ? null : N.KO ? w.isPlatformEmbedded ? (0, n.jsxs)(i.rs, {
                            children: [(0, n.jsx)(i.AW, {
                                exact: !0,
                                path: Z.Z5c.INDEX,
                                render: () => (0, n.jsx)(u.Z, {})
                            }), (0, n.jsx)(h.Z, {
                                exact: !0,
                                path: Z.Z5c.APPS,
                                component: C
                            }), (0, n.jsx)(i.AW, {
                                path: Y([Z.Z5c.LOGIN, Z.Z5c.REGISTER, Z.Z5c.INVITE(":inviteCode"), Z.Z5c.INVITE_LOGIN(":inviteCode"), Z.Z5c.GIFT_CODE(":giftCode"), Z.Z5c.GIFT_CODE_LOGIN(":giftCode"), Z.Z5c.RESET], S.a),
                                component: x
                            }), (0, n.jsx)(h.Z, {
                                path: Z.Z5c.INVITE_PROXY(":channelId"),
                                component: D
                            }), (0, n.jsx)(i.l_, {
                                from: Z.Z5c.INVITE(""),
                                to: Z.Z5c.LOGIN
                            }), (0, n.jsx)(i.l_, {
                                from: Z.Z5c.GIFT_CODE(""),
                                to: Z.Z5c.LOGIN
                            }), (0, n.jsx)(i.AW, {
                                render: K
                            })]
                        }) : (0, n.jsxs)(i.rs, {
                            children: [(0, n.jsx)(h.Z, {
                                exact: !0,
                                path: Z.Z5c.INDEX,
                                render: () => (0, n.jsx)(u.Z, {})
                            }), (0, n.jsx)(i.AW, {
                                path: Y([Z.Z5c.LOGIN, Z.Z5c.LOGIN_HANDOFF, Z.Z5c.REGISTER, Z.Z5c.BILLING_PREFIX, Z.Z5c.BILLING_PROMOTION_REDEMPTION(":code"), Z.Z5c.INVITE(":inviteCode"), Z.Z5c.INVITE_LOGIN(":inviteCode"), Z.Z5c.GIFT_CODE(":giftCode"), Z.Z5c.GIFT_CODE_LOGIN(":giftCode"), Z.Z5c.GUILD_TEMPLATE(":guildTemplateCode"), Z.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"), Z.Z5c.DISABLE_EMAIL_NOTIFICATIONS, Z.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, Z.Z5c.RESET, Z.Z5c.REPORT, Z.Z5c.REPORT_SECOND_LOOK], S.a),
                                component: x
                            }), t ? null : (0, n.jsx)(i.AW, {
                                path: Z.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                                component: x
                            }), t ? null : (0, n.jsx)(i.AW, {
                                path: Z.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?"),
                                component: x
                            }), (0, n.jsx)(i.l_, {
                                from: Z.Z5c.INVITE(""),
                                to: Z.Z5c.LOGIN
                            }), (0, n.jsx)(h.Z, {
                                path: Z.Z5c.INVITE_PROXY(":channelId"),
                                component: D
                            }), (0, n.jsx)(i.l_, {
                                from: Z.Z5c.GIFT_CODE(""),
                                to: Z.Z5c.LOGIN
                            }), (0, n.jsx)(h.Z, {
                                path: Z.Z5c.QUESTS(":questId"),
                                component: H,
                                impressionName: r.ImpressionNames.QUESTS_LANDING_PAGE,
                                impressionProperties: e => {
                                    let {
                                        computedMatch: t
                                    } = e;
                                    return {
                                        quest_id: t.params.questId
                                    }
                                }
                            }), (0, n.jsx)(h.Z, {
                                path: Z.Z5c.HANDOFF,
                                component: j
                            }), (0, n.jsx)(h.Z, {
                                path: Z.Z5c.MOBILE_WEB_HANDOFF,
                                component: G
                            }), (0, n.jsx)(h.Z, {
                                path: Z.Z5c.CONNECTION_LINK(":type"),
                                component: R
                            }), (0, n.jsx)(h.Z, {
                                path: Z.Z5c.CONNECTION_LINK_AUTHORIZE(":type"),
                                component: M
                            }), (0, n.jsx)(h.Z, {
                                path: Z.Z5c.ACTIVATE,
                                component: U
                            }), (0, n.jsx)(h.Z, {
                                path: Z.Z5c.CONNECTIONS_AUTHORIZE_CONTINUE(":type"),
                                component: W
                            }), (0, n.jsx)(h.Z, {
                                path: Z.Z5c.CONNECTIONS(":type"),
                                component: L
                            }), (0, n.jsx)(h.Z, {
                                path: Z.Z5c.DOWNLOAD_QR_CODE_REDIRECT,
                                render: () => {
                                    var e, t, a;
                                    let n = null === (e = v.default.getSuperProperties()) || void 0 === e ? void 0 : e.os,
                                        d = (0, c.parse)((null !== (a = window.location.search) && void 0 !== a ? a : "").substr(1)),
                                        i = null === (t = d.referring_location) || void 0 === t ? void 0 : t.toString();
                                    return ("iOS" === n || "Android" === n) && v.default.track(Z.rMx.DOWNLOAD_APP, {
                                        platform: n,
                                        ptb: !1,
                                        released: !0,
                                        has_e_mail: "true" === d.has_e_mail,
                                        referring_location: i,
                                        qr_code: !0
                                    }), window.location.href = (0, O.Gn)(null != i && "" !== i ? i : "qr_code", n), null
                                }
                            }), (0, n.jsx)(h.Z, {
                                path: Z.Z5c.OPEN_APP_FROM_EMAIL,
                                render: () => {
                                    var e, t;
                                    let a = null === (e = v.default.getSuperProperties()) || void 0 === e ? void 0 : e.os,
                                        d = (0, A.o)(null !== (t = window.location.search) && void 0 !== t ? t : "");
                                    if ("iOS" !== a && "Android" !== a) return (0, n.jsx)(i.l_, {
                                        to: null != d.desktop ? "".concat(d.desktop.pathname).concat(d.desktop.search) : Z.Z5c.APP
                                    });
                                    {
                                        let e = (0, O.Gn)("app_open_from_email", a, d.mobile),
                                            t = (0, f.zS)(e);
                                        null != t && v.default.track(Z.rMx.DEEP_LINK_CLICKED, {
                                            fingerprint: (0, s.K)(t.fingerprint),
                                            attempt_id: t.attemptId,
                                            source: t.utmSource,
                                            destination: null != d.mobile ? d.mobile.toString() : null
                                        }), window.location.href = e
                                    }
                                }
                            }), (0, n.jsx)(i.l_, {
                                from: Z.Z5c.CONNECT_AUTHORIZE,
                                to: {
                                    ...location,
                                    pathname: Z.Z5c.OAUTH2_AUTHORIZE
                                }
                            }), (0, n.jsx)(i.AW, {
                                path: [Z.Z5c.OAUTH2_AUTHORIZED, Z.Z5c.OAUTH2_AUTHORIZE, Z.Z5c.OAUTH2_ERROR, Z.Z5c.OAUTH2_WHITELIST_ACCEPT],
                                component: k
                            }), t ? null : (0, n.jsx)(i.AW, {
                                path: [Z.Z5c.ACCOUNT_STANDING],
                                component: F
                            }), t ? null : (0, n.jsx)(i.AW, {
                                path: Z.Z5c.APPLICATION_DIRECTORY,
                                component: B
                            }), (0, n.jsx)(i.AW, {
                                render: K
                            })]
                        }) : (0, n.jsx)(i.rs, {
                            children: (0, n.jsx)(h.Z, {
                                component: P
                            })
                        }), (0, n.jsxs)(m.Z, {
                            skipsSettingDefaultPageTitle: d,
                            children: [e, w.isPlatformEmbedded && (a === _.P.NOT_STARTED || a === _.P.IN_PROGRESS) && !0 !== b.K.get(o.SV) ? (0, n.jsx)(E.Z, {}) : null]
                        })
                    }
                }
                t.Z = l.ZP.connectStores([I.default, _.Z], () => ({
                    isAuthenticated: I.default.isAuthenticated(),
                    migrationStatus: _.Z.getMigrationStatus()
                }), {
                    forwardRef: !0
                })(function(e) {
                    let t = function() {
                        let {
                            pathname: e
                        } = (0, i.TH)();
                        return null != (0, i.LX)(e, {
                            path: Z.Z5c.APPLICATION_DIRECTORY
                        })
                    }();
                    return (0, n.jsx)(X, {
                        ...e,
                        skipsSettingDefaultPageTitle: t
                    })
                })
            },
            650204: function(e, t, a) {
                "use strict";
                a(610138), a(216116), a(78328), a(815648), a(47120), a(177593);
                var n, d, c, i, r, o, f, s = a(735250);
                a(92138), a(470079);
                var l = a(202226),
                    b = a(512722),
                    u = a.n(b),
                    h = a(832037),
                    p = a(752137),
                    m = a(464253),
                    _ = a(485359),
                    E = a(395727),
                    g = a(471638),
                    I = a(585275),
                    v = a(960048),
                    O = a(63063),
                    A = a(240849),
                    w = a(998502),
                    T = a(513566),
                    Z = a(534713),
                    S = a(358085),
                    N = a(703656),
                    P = a(284737),
                    C = a(473159),
                    D = a(846519),
                    L = a(579806),
                    R = a(896361),
                    M = a(892254);
                a(296369);
                var U = a(183626),
                    y = a(44163),
                    x = a(710845);
                let k = 5 * a(70956).Z.Millis.MINUTE,
                    j = document.getElementById("app-mount");
                u()(null != j, "Could not find app-mount"), j.className = __OVERLAY__ ? "" : U.appMount;
                let G = (0, l.createRoot)(j),
                    V = {
                        "/oauth2/authorize": Z.Z
                    },
                    F = e => G.render((0, s.jsx)(M.Z, {
                        children: (0, s.jsx)(R.Z, {
                            children: (0, s.jsx)(e, {})
                        })
                    }));
                if (null != L.Z) {
                    null === (n = L.Z.setUncaughtExceptionHandler) || void 0 === n || n.call(L.Z, (e, t) => {
                        setImmediate(() => {
                            throw v.Z.captureCrash(e), e
                        })
                    });
                    let e = null === (d = (c = L.Z.remoteApp).getVersion) || void 0 === d ? void 0 : d.call(c),
                        t = null === (i = (r = L.Z.remoteApp).getBuildNumber) || void 0 === i ? void 0 : i.call(r),
                        a = {};
                    null != L.Z.remoteApp.getModuleVersions && (a = L.Z.remoteApp.getModuleVersions()), v.Z.setExtra({
                        hostVersion: e,
                        moduleVersions: a
                    }), v.Z.setTags({
                        nativeBuildNumber: null == t ? void 0 : t.toString()
                    });
                    let s = Object.keys(a).filter(e => null != a[e]).map(e => "".concat(e, ": ").concat(a[e])).join(", ");
                    new x.Z().log("[NATIVE INFO] host ".concat(e, ", modules: ").concat(s, ", build: ").concat(t));
                    let l = null === (o = (f = L.Z.remoteApp).getReleaseChannel) || void 0 === o ? void 0 : o.call(f);
                    ("canary" === l || "development" === l) && w.ZP.pauseFrameEvictor(), w.ZP.initializeExitHook()
                }
                if ((0, C.O)(window), __OVERLAY__) F(h.Z.Overlay);
                else if (null != window.require && null == window.DiscordNative) F(h.Z.OutdatedClient);
                else {
                    if (document.addEventListener("scroll", e => e.preventDefault()), S.isPlatformEmbedded) {
                        window.onbeforeunload = () => w.ZP.beforeUnload(), w.ZP.on("HELP_OPEN", () => window.open(O.Z.getCommunityURL()));
                        let e = new D.sW(k, () => w.ZP.purgeMemory());
                        w.ZP.on("MAIN_WINDOW_BLUR", () => {
                            e.delay(), w.ZP.setFocused(!1), (0, P.T_)(window, !1)
                        }), w.ZP.on("MAIN_WINDOW_FOCUS", () => {
                            e.cancel(), w.ZP.setFocused(!0), (0, P.T_)(window, !0)
                        }), w.ZP.on("MAIN_WINDOW_PATH", function(e, t, a) {
                            var n;
                            let d = null != a ? new URLSearchParams(a) : null;
                            if (null === (n = V[t]) || void 0 === n ? !void 0 : !n.call(V, d))(0, N.uL)(t)
                        }), w.ZP.on("MAIN_WINDOW_HIDDEN", () => {
                            (0, P.al)(window)
                        })
                    }
                    E.Z.initialize(), p.Z.initialize(), m.Z.init(), I.Z.init(), y.Z.init(), _.Z.initialize(), A.Z.initialize(), T.Z.initialize(), g.j(), F(h.Z.App)
                }
            },
            832037: function(e, t, a) {
                "use strict";
                var n = a(735250);
                a(470079);
                var d = a(481060),
                    c = a(204623),
                    i = a(155221);
                t.Z = {
                    App: () => (0, n.jsx)(d.DnDProvider, {
                        children: (0, n.jsx)(i.Z, {})
                    }),
                    Overlay: () => (0, n.jsx)(d.DnDProvider, {
                        children: (0, n.jsx)(i.a, {})
                    }),
                    OutdatedClient: c.Z
                }
            },
            752137: function(e, t, a) {
                "use strict";
                var n = a(317770),
                    d = a(626135),
                    c = a(358085),
                    i = a(998502),
                    r = a(981631);
                class o extends n.Z {
                    _initialize() {
                        if (!!c.isPlatformEmbedded) i.ZP.on("APP_PUSH_ANALYTICS", (e, t) => {
                            this._handleEventResponse(t)
                        }), this.processModuleEvents()
                    }
                    _terminate() {}
                    processModuleEvents() {
                        try {
                            i.ZP.send("APP_GET_ANALYTICS_EVENTS")
                        } catch (e) {
                            console.error("[analytics] failed to send analytics events query: ".concat(e))
                        }
                    }
                    _handleEventResponse(e) {
                        if (null != e) e.forEach(e => {
                            "cdm" === e.type ? (e.name === r.rMx.CDM_LOAD_STATUS || e.name === r.rMx.CDM_READY_COMPLETE) && d.default.track(e.name, e.data) : console.log("[analytics] received unknown analytic type event ".concat(e.type))
                        })
                    }
                }
                t.Z = new o
            },
            44163: function(e, t, a) {
                "use strict";
                var n = a(585483),
                    d = a(5967),
                    c = a(933513),
                    i = a(981631);
                t.Z = {
                    init() {
                        document.addEventListener("paste", e => {
                            !(0, c.Z)((0, d.uB)(e)) && n.S.dispatchToLastSubscribed(i.CkL.GLOBAL_CLIPBOARD_PASTE, {
                                event: e
                            })
                        })
                    }
                }
            },
            933513: function(e, t, a) {
                "use strict";

                function n(e) {
                    let t = null == e ? void 0 : e.activeElement;
                    return ["INPUT", "TEXTAREA"].includes(null == t ? void 0 : t.tagName) || (null == t ? void 0 : t.isContentEditable)
                }
                a.d(t, {
                    Z: function() {
                        return n
                    }
                })
            },
            204623: function(e, t, a) {
                "use strict";
                a.d(t, {
                    Z: function() {
                        return A
                    }
                }), a(47120);
                var n = a(735250),
                    d = a(470079),
                    c = a(525654),
                    i = a.n(c),
                    r = a(470716),
                    o = a(442837),
                    f = a(946188),
                    s = a(481060),
                    l = a(596454),
                    b = a(451478),
                    u = a(586576),
                    h = a(176354),
                    p = a(63063),
                    m = a(358085),
                    _ = a(792125),
                    E = a(998502),
                    g = a(151851),
                    I = a(981631),
                    v = a(689938);
                let O = o.ZP.connectStores([b.Z], () => ({
                    focused: b.Z.isFocused()
                }))(g.Z);
                class A extends d.PureComponent {
                    getPlatform() {
                        var e;
                        let t = null === (e = i().os) || void 0 === e ? void 0 : e.family;
                        return null != t && /^win/i.test(t) ? m.PlatformTypes.WINDOWS : null != t && /darwin|os x/i.test(t) ? m.PlatformTypes.OSX : m.PlatformTypes.LINUX
                    }
                    componentDidMount() {
                        ! function() {
                            let e = window.require("electron").remote.getCurrentWindow();
                            E.ZP.minimize = () => e.minimize(), E.ZP.maximize = () => {
                                e.isMaximized() ? e.unmaximize() : e.maximize()
                            }, E.ZP.close = () => e.close()
                        }()
                    }
                    render() {
                        let e = (0, n.jsx)("div", {
                                children: (0, n.jsxs)("p", {
                                    children: [v.Z.Messages.VERY_OUT_OF_DATE_DESCRIPTION, " ", (0, n.jsx)(l.Z, {
                                        src: h.ZP.getURL(f.Z.convert.fromCodePoint("1f44c")),
                                        emojiName: ":ok_hand:",
                                        animated: !1
                                    })]
                                })
                            }),
                            t = (0, n.jsx)(s.Button, {
                                size: s.ButtonSizes.LARGE,
                                onClick: this.handleDownload,
                                children: v.Z.Messages.DOWNLOAD
                            });
                        return (0, n.jsxs)(d.Fragment, {
                            children: [(0, n.jsx)(r.ql, {
                                children: (0, n.jsx)("html", {
                                    className: (0, _.Q)(I.BRd.DARK)
                                })
                            }), (0, n.jsx)(O, {
                                type: this.getPlatform()
                            }), (0, n.jsx)(u.Z, {
                                title: v.Z.Messages.UNSUPPORTED_BROWSER_TITLE,
                                note: e,
                                action: t
                            })]
                        })
                    }
                    constructor(...e) {
                        var t, a, n;
                        super(...e), t = this, a = "handleDownload", n = () => {
                            window.open(this.getPlatform() === m.PlatformTypes.WINDOWS ? p.Z.getArticleURL(I.BhN.CORRUPT_INSTALLATION) : I.EYA.DOWNLOAD)
                        }, a in t ? Object.defineProperty(t, a, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[a] = n
                    }
                }
            },
            471638: function(e, t, a) {
                "use strict";
                a.d(t, {
                    j: function() {
                        return n
                    }
                }), a(411104), a(47120), a(259443), a(643950), a(46973), a(141038), a(379649), a(570140), a(749210), a(287734), a(872810), a(579806), a(569545), a(703656), a(199902), a(592125), a(131951), a(944486), a(979651), a(374023), a(848479), a(998502), a(788983), a(981631);
                let n = () => {}
            },
            286035: function(e, t, a) {
                "use strict";
                a.d(t, {
                    Pg: function() {
                        return i
                    },
                    Te: function() {
                        return d
                    },
                    kb: function() {
                        return c
                    }
                });
                var n = a(570140);

                function d() {
                    n.Z.wait(() => n.Z.dispatch({
                        type: "DOMAIN_MIGRATION_START"
                    }))
                }

                function c() {
                    n.Z.dispatch({
                        type: "DOMAIN_MIGRATION_FAILURE"
                    })
                }

                function i() {
                    window.location.reload()
                }
            },
            554608: function(e, t, a) {
                "use strict";
                a.d(t, {
                    P: function() {
                        return r
                    }
                });
                var n, d, c, i, r, o, f = a(442837),
                    s = a(570140);
                (n = r || (r = {}))[n.NOT_STARTED = 0] = "NOT_STARTED", n[n.IN_PROGRESS = 1] = "IN_PROGRESS", n[n.FAILED = 2] = "FAILED", n[n.SKIPPED = 3] = "SKIPPED";
                let l = 0;
                class b extends(o = f.ZP.Store) {
                    getMigrationStatus() {
                        return l
                    }
                }
                i = "DomainMigrationStore", (c = "displayName") in(d = b) ? Object.defineProperty(d, c, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : d[c] = i, t.Z = new b(s.Z, {
                    DOMAIN_MIGRATION_START: function() {
                        l = 1
                    },
                    DOMAIN_MIGRATION_FAILURE: function() {
                        l = 2
                    },
                    DOMAIN_MIGRATION_SKIP: function() {
                        l = 3
                    }
                })
            },
            83949: function(e, t, a) {
                "use strict";
                a.d(t, {
                    Z: function() {
                        return b
                    }
                });
                var n = a(470079),
                    d = a(719711),
                    c = a(433517),
                    i = a(579806),
                    r = a(626135),
                    o = a(998502),
                    f = a(286035),
                    s = a(981631);

                function l(e) {
                    var t;
                    return null == e ? void 0 : null === (t = e._state) || void 0 === t ? void 0 : t.lastTestTimestamp
                }

                function b() {
                    return n.useEffect(() => {
                        window.location.origin === window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN && !0 !== c.K.get(d.SV) && o.ZP.supportsFeature(s.eRX.USER_DATA_CACHE) && (f.Te(), i.Z.userDataCache.getCached().then(e => {
                            if (null == e) {
                                f.kb(), r.default.track(s.rMx.DOMAIN_MIGRATED, {
                                    success: !1,
                                    has_data: !1
                                }, {
                                    flush: !0
                                });
                                return
                            }
                            let t = Object.keys(e),
                                a = 0 !== t.length,
                                n = null != e.token,
                                o = null == e.RTCRegionStore ? null : JSON.parse(e.RTCRegionStore),
                                b = null == o || null == l(o) || l(o) <= l(c.K.get("RTCRegionStore"));
                            a && n && !b && (c.K.clear(), t.forEach(t => {
                                let a = e[t];
                                try {
                                    c.K.set(t, JSON.parse(a))
                                } catch (e) {}
                            })), r.default.track(s.rMx.DOMAIN_MIGRATED, {
                                success: !0,
                                current_is_newer: b,
                                has_data: a
                            }, {
                                flush: !0
                            }), c.K.set(d.SV, !0), i.Z.userDataCache.deleteCache(), f.Pg()
                        }))
                    }, []), null
                }
            },
            585275: function(e, t, a) {
                "use strict";
                let n;
                a(242167), a(970173), a(520712), a(268111), a(941497), a(32026), a(480839), a(744285), a(492257), a(873817), a(411104), a(773603);
                var d = a(512722),
                    c = a.n(d),
                    i = a(392711),
                    r = a.n(i),
                    o = a(544891),
                    f = a(992774),
                    s = a(649754),
                    l = a(376398),
                    b = a(846519),
                    u = a(570140),
                    h = a(710845),
                    p = a(314897),
                    m = a(358085),
                    _ = a(998502),
                    E = a(569545),
                    g = a(70722),
                    I = a(981631),
                    v = a(65154);
                let O = {},
                    A = new b.V7,
                    w = !1,
                    T = window.document.createElement("canvas");
                T.width = 512, T.height = 288;
                let Z = T.getContext("2d");

                function S() {
                    A.stop(), null != n && (s.Z.removeSink(n, O), n = null)
                }
                let N = r().debounce((e, t, a, n) => {
                    P(e, (0, E.V9)({
                        streamType: null != t ? g.lo.GUILD : g.lo.CALL,
                        guildId: t,
                        channelId: a,
                        ownerId: n
                    }))
                }, 500);
                async function P(e, t) {
                    if (n !== e) return;
                    let a = () => P(e, t);
                    if (!w) try {
                        let a = await
                        function(e, t) {
                            let a = 0;
                            return (m.isPlatformEmbedded ? function(e, t) {
                                let a = (0, f.zS)(),
                                    d = (null == a ? void 0 : a.getNextVideoOutputFrame) != null;
                                return new Promise((c, i) => {
                                    let r = e => {
                                        try {
                                            null != e && t(e) && c(e)
                                        } catch (e) {
                                            i(e)
                                        }
                                    };
                                    d ? a.getNextVideoOutputFrame(e).then(r, t => {
                                        if (n === e) throw t
                                    }) : s.Z.addSink(e, O, r)
                                }).finally(() => {
                                    !d && s.Z.removeSink(e, O)
                                })
                            } : function(e, t) {
                                let a = (0, l.aG)(e);
                                if (null == a) return Promise.resolve(new ImageData(0, 0));
                                let {
                                    width: n,
                                    height: d
                                } = a.getVideoTracks()[0].getSettings(), c = document.createElement("video"), i = document.createElement("canvas");
                                c.width = i.width = null != n ? n : 512, c.height = i.height = null != d ? d : 288, c.srcObject = a, c.play();
                                let r = i.getContext("2d");
                                return new Promise((e, a) => {
                                    c.ontimeupdate = () => {
                                        null == r || r.drawImage(c, 0, 0, i.width, i.height);
                                        let n = null == r ? void 0 : r.getImageData(0, 0, i.width, i.height);
                                        try {
                                            null != n && t(n) && e(n)
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
                                n = e.width * a,
                                d = e.height * a;
                            T.width = n, T.height = d;
                            let c = window.document.createElement("canvas"),
                                i = c.getContext("2d");
                            c.width = e.width, c.height = e.height;
                            let r = new ImageData(e.data, e.width, e.height);
                            return null == i || i.putImageData(r, 0, 0), new Promise(t => {
                                null == Z || Z.drawImage(c, 0, 0, e.width, e.height, 0, 0, n, d), t()
                            })
                        }(a);
                        let d = T.toDataURL("image/jpeg");
                        if (u.Z.dispatch({
                                type: "STREAM_PREVIEW_FETCH_SUCCESS",
                                streamKey: t,
                                previewURL: d
                            }), m.isPlatformEmbedded) {
                            let e = p.default.getToken();
                            c()(null != e, "Auth token was null while sending screenshot."), await _.ZP.makeChunkedRequest(I.ANM.STREAM_PREVIEW(t), {
                                thumbnail: d
                            }, {
                                method: "POST",
                                token: e
                            })
                        } else await o.tn.post({
                            url: I.ANM.STREAM_PREVIEW(t),
                            body: {
                                thumbnail: d
                            },
                            oldFormErrors: !0
                        })
                    } catch (t) {
                        new h.Z("ApplicationStreamPreviewUploadManager").error("Failed to post stream preview", t), n === e && A.start(6e4, a);
                        return
                    }
                    n === e && (w ? A.start(6e4, a) : A.start(3e5, a))
                }
                t.Z = {
                    init() {
                        u.Z.subscribe("CONNECTION_OPEN", S), u.Z.subscribe("LOGOUT", S), u.Z.subscribe("STREAM_DELETE", S), u.Z.subscribe("RTC_CONNECTION_VIDEO", e => {
                            let {
                                guildId: t,
                                channelId: a,
                                userId: d,
                                streamId: c,
                                context: i
                            } = e;
                            !(null == c || i !== v.Yn.STREAM || d !== p.default.getId() || __OVERLAY__) && (S(), n = c, N(c, t, a, d))
                        }), u.Z.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", e => {
                            let {
                                videoState: t
                            } = e;
                            w = t === I.FQ1.PAUSED || !1
                        })
                    }
                }
            },
            464253: function(e, t, a) {
                "use strict";
                a(411104);
                var n = a(570140),
                    d = a(846027),
                    c = a(872810),
                    i = a(710845),
                    r = a(252759),
                    o = a(361291),
                    f = a(199902),
                    s = a(314897),
                    l = a(569545),
                    b = a(803647),
                    u = a(981631),
                    h = a(65154);

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
                        if (this.applications = e.map(e => {
                                var t, a;
                                return {
                                    applicationId: null !== (t = e.id) && void 0 !== t ? t : null,
                                    processId: e.pid,
                                    processPath: e.pidPath,
                                    windowHandle: null !== (a = e.windowHandle) && void 0 !== a ? a : null,
                                    executableName: e.exeName
                                }
                            }), "verbatim-source" !== this.mode) this.director.onDetectionUpdate(this.applications)
                    }
                    _onStreamApplication(e, t) {
                        this.mode = "application", this.streamKey = e, this.director.onStreamBegin(this.applications, t)
                    }
                    _onStreamDirectSource(e, t, a, n) {
                        this.mode = "verbatim-source", this.streamKey = e, this._onDirectorAction({
                            type: r.A.STREAM,
                            sourceId: t,
                            audioSourceId: a,
                            sound: n
                        })
                    }
                    _onStreamEnd(e) {
                        if (this.streamKey === e) switch (this.streamKey = null, this.mode) {
                            case "application":
                                this.director.onStreamEnd();
                                break;
                            case "verbatim-source":
                                this._onDirectorAction({
                                    type: r.A.STOP
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
                        let t = f.Z.getCurrentUserActiveStream(),
                            a = o.Z.getState();
                        switch (e.type) {
                            case r.A.STREAM:
                                if (null != t && (0, c.tK)(t, !1), e.sourceId.startsWith("camera") && null != e.audioSourceId) {
                                    let t = e.sourceId.split(":")[1];
                                    d.Z.setGoLiveSource({
                                        cameraSettings: {
                                            videoDeviceGuid: t,
                                            audioDeviceGuid: e.audioSourceId
                                        },
                                        qualityOptions: {
                                            preset: a.preset,
                                            resolution: a.resolution,
                                            frameRate: a.fps
                                        },
                                        context: h.Yn.STREAM
                                    })
                                } else {
                                    var n;
                                    d.Z.setGoLiveSource({
                                        desktopSettings: {
                                            sourceId: e.sourceId,
                                            sound: null === (n = e.sound) || void 0 === n || n
                                        },
                                        qualityOptions: {
                                            preset: a.preset,
                                            resolution: a.resolution,
                                            frameRate: a.fps
                                        },
                                        context: h.Yn.STREAM
                                    })
                                }
                                break;
                            case r.A.PAUSE:
                                null != t && (0, c.tK)(t, !0);
                                break;
                            case r.A.STOP:
                                null != t && (0, b.Z)(t);
                                break;
                            default:
                                throw Error("unhandled stream action: ".concat(e.type))
                        }
                    }
                    _onCapturePaused(e) {
                        let t = f.Z.getCurrentUserActiveStream();
                        null != t && (0, c.tK)(t, e)
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
                        p(this, "director", void 0), p(this, "applications", void 0), p(this, "streamKey", void 0), p(this, "mode", void 0), this.mode = null, this.applications = [], this.director = new r.a(e => this._onDirectorAction(e)), n.Z.subscribe("STREAM_START", e => {
                            let {
                                streamType: t,
                                guildId: a,
                                channelId: n,
                                pid: d,
                                sourceId: c,
                                audioSourceId: r,
                                sound: o
                            } = e, f = s.default.getId(), b = (0, l.V9)({
                                streamType: t,
                                guildId: a,
                                channelId: n,
                                ownerId: f
                            });
                            null == d != (null == c) ? (null != d && this._onStreamApplication(b, d), null != c && this._onStreamDirectSource(b, c, r, o)) : new i.Z("ApplicationSwitchingManager").warn("invalid start_stream: both application + display modes were specified (pid: ".concat(d, ", source-id: ").concat(c, ")"))
                        }), n.Z.subscribe("STREAM_DELETE", e => {
                            let {
                                streamKey: t
                            } = e;
                            this._onStreamKilled(t)
                        }), n.Z.subscribe("STREAM_STOP", e => {
                            let {
                                streamKey: t
                            } = e;
                            this._onStreamEnd(t)
                        }), n.Z.subscribe("RUNNING_GAMES_CHANGE", e => {
                            let {
                                games: t
                            } = e;
                            this._onGameDetectionUpdate(t)
                        }), n.Z.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", e => {
                            let {
                                videoState: t,
                                context: a
                            } = e;
                            a === h.Yn.STREAM && this._onCapturePaused(t === u.FQ1.PAUSED)
                        }), n.Z.subscribe("MEDIA_ENGINE_SET_GO_LIVE_SOURCE", e => {
                            let {
                                settings: t
                            } = e;
                            (null == t ? void 0 : t.context) === h.Yn.STREAM && (null == t ? void 0 : t.desktopSettings) == null && (null == t ? void 0 : t.cameraSettings) == null && this._onCaptureEnded()
                        })
                    }
                }
                t.Z = {
                    instance: null,
                    init() {
                        null == this.instance && (this.instance = new m)
                    }
                }
            },
            137412: function(e, t, a) {
                "use strict";
                a(47120);
                var n = a(213919),
                    d = a(570140),
                    c = a(317770),
                    i = a(358085);
                class r extends c.Z {
                    _initialize() {
                        d.Z.subscribe("CONNECTION_OPEN", this.handleConnectionOpen)
                    }
                    _terminate() {
                        d.Z.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen)
                    }
                    constructor(...e) {
                        var t, a, d;
                        super(...e), t = this, a = "handleConnectionOpen", d = e => {
                            ((0, i.isWindows)() || (0, i.isMac)()) && n.encryptAndStoreTokens()
                        }, a in t ? Object.defineProperty(t, a, {
                            value: d,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[a] = d
                    }
                }
                t.Z = new r
            },
            311163: function(e, t, a) {
                "use strict";
                a.d(t, {
                    Z: function() {
                        return d
                    }
                });
                var n = a(272423);

                function d(e) {
                    let t = (0, n.kf)(e);
                    if (null != t) return [t.params.guildId, t.params.channelId];
                    let a = (0, n.B3)(e);
                    if (null != a) {
                        var d, c;
                        return [null === (d = a.params) || void 0 === d ? void 0 : d.guildId, null === (c = a.params) || void 0 === c ? void 0 : c.channelId]
                    }
                    return [void 0, void 0]
                }
            },
            485359: function(e, t, a) {
                "use strict";
                a(47120);
                var n = a(735250);
                a(470079);
                var d = a(525654),
                    c = a.n(d),
                    i = a(481060),
                    r = a(570140),
                    o = a(468026),
                    f = a(317770),
                    s = a(63063),
                    l = a(981631),
                    b = a(689938);
                class u extends f.Z {
                    _initialize() {
                        r.Z.subscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission)
                    }
                    _terminate() {
                        r.Z.unsubscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission)
                    }
                    constructor(...e) {
                        var t, a, d;
                        super(...e), t = this, a = "handlePermission", d = e => {
                            let {
                                kind: t,
                                granted: a
                            } = e, d = "Firefox" === c().name ? l.BhN.ENABLE_MIC_FIREFOX : l.BhN.ENABLE_MIC_CHROME;
                            if (!a) {
                                let e = "audio" !== t;
                                (0, i.openModal)(t => (0, n.jsx)(o.default, {
                                    title: e ? b.Z.Messages.NO_CAMERA_TITLE : b.Z.Messages.NO_MIC_TITLE,
                                    body: e ? b.Z.Messages.NO_CAMERA_BODY : b.Z.Messages.NO_MIC_BODY,
                                    onConfirm: () => window.open(s.Z.getArticleURL(d), "_blank"),
                                    confirmText: b.Z.Messages.HELP_DESK,
                                    ...t
                                }))
                            }
                        }, a in t ? Object.defineProperty(t, a, {
                            value: d,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[a] = d
                    }
                }
                t.Z = new u
            },
            534713: function(e, t, a) {
                "use strict";
                a.d(t, {
                    Z: function() {
                        return d
                    }
                });
                var n = a(69580);

                function d(e) {
                    var t, a, d, c;
                    let i = null == e ? void 0 : e.get("client_id"),
                        r = null == e ? void 0 : null === (t = e.get("scope")) || void 0 === t ? void 0 : t.split(" "),
                        o = null == e ? void 0 : e.get("state"),
                        f = null == e ? void 0 : e.get("redirect_uri"),
                        s = null == e ? void 0 : e.get("response_type"),
                        l = null !== (a = null == e ? void 0 : e.get("nonce")) && void 0 !== a ? a : void 0,
                        b = null !== (d = null == e ? void 0 : e.get("code_challenge")) && void 0 !== d ? d : void 0,
                        u = null !== (c = null == e ? void 0 : e.get("code_challenge_method")) && void 0 !== c ? c : void 0;
                    return null == i || null == r || null == o || null == f || null == s || ((0, n.openOAuth2Modal)({
                        clientId: i,
                        scopes: r,
                        redirectUri: f,
                        state: o,
                        responseType: s,
                        nonce: l,
                        codeChallenge: b,
                        codeChallengeMethod: u
                    }), !0)
                }
            },
            905423: function(e, t, a) {
                "use strict";
                var n = a(266067),
                    d = a(652874),
                    c = a(981631);

                function i(e) {
                    let t = (0, n.LX)(null != e ? e : "", {
                        path: c.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?")
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
                    let a = (0, n.LX)(null != e ? e : "", {
                        path: c.Z5c.GUILD_BOOSTING_MARKETING(":guildId")
                    });
                    return null != a ? {
                        guildId: a.params.guildId,
                        channelId: null
                    } : {
                        guildId: null,
                        channelId: null
                    }
                }
                t.Z = (0, d.Z)(e => ({
                    path: null,
                    basePath: "/",
                    guildId: null,
                    channelId: null,
                    updatePath(t) {
                        let {
                            guildId: a,
                            channelId: n
                        } = i(t);
                        e({
                            path: t,
                            guildId: a,
                            channelId: n
                        })
                    },
                    resetPath(t) {
                        let {
                            guildId: a,
                            channelId: n
                        } = i(t);
                        e({
                            path: null,
                            guildId: a,
                            channelId: n,
                            basePath: t
                        })
                    }
                }))
            },
            304445: function(e, t, a) {
                "use strict";
                a(47120), a(411104);
                var n = a(934951),
                    d = a(266067),
                    c = a(38618),
                    i = a(57132),
                    r = a(215355),
                    o = a(777639),
                    f = a(311163),
                    s = a(272423),
                    l = a(781157),
                    b = a(700615),
                    u = a(905423),
                    h = a(703656),
                    p = a(981631);

                function m(e, t, a) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = a, e
                }
                t.Z = new class e {
                    initialize() {
                        this.cleanup(), this.unlistenHistory = (0, h.s1)().listen(this.handleRouteChange);
                        let {
                            pathname: e
                        } = (0, h.s1)().location;
                        u.Z.getState().resetPath(e), this.unlistenKeyboardChange = u.Z.subscribe(this.handleKeybindRouteChange), c.Z.addChangeListener(this.handleConnectionChange)
                    }
                    convertRouteToNavigation(e, t) {
                        var a, n, c;
                        let {
                            pathname: u
                        } = e, h = (0, o.D)(), m = (0, i.cn)(), {
                            mergeTabs: _
                        } = (0, r.LI)({
                            location: "convertRouteToNavigation"
                        });
                        if (null == h || !h.isReady()) return;
                        let E = e.navigationReplace,
                            g = null !== (a = e.useScreen) && void 0 !== a && a;
                        if (m && (0, l.x7)() && u === p.Z5c.ME) {
                            (0, s.vp)({
                                screen: "messages",
                                resetRoot: E
                            });
                            return
                        }
                        if (m && u === p.Z5c.NOTIFICATIONS) {
                            (0, s.vp)({
                                screen: "notifications",
                                resetRoot: E
                            });
                            return
                        }
                        if (u.startsWith("/channels/")) {
                            let e = (0, d.LX)(u, {
                                    path: p.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?")
                                }),
                                t = (0, d.LX)(u, {
                                    path: "".concat(p.Z5c.CHANNEL(":guildId", ":channelId?")).concat(p.Z5c.VOICE_CHAT_CHANNEL_PARTIAL(":voiceGuildId", ":voiceChannelId", ":voiceMessageId?"))
                                });
                            if (!m) {
                                let e = h.getRootState();
                                (null == e ? void 0 : null === (c = e.routes) || void 0 === c ? void 0 : null === (n = c[0]) || void 0 === n ? void 0 : n.name) !== "panels" && (0, s.H)();
                                return
                            }
                            if (null != t) {
                                let {
                                    voiceGuildId: e,
                                    voiceChannelId: a,
                                    voiceMessageId: n
                                } = t.params;
                                !(0, b.ur)() && (0, s.k4)({
                                    channelId: a,
                                    guildId: e,
                                    messageId: n,
                                    replaceChannelAndFixRoot: E,
                                    useScreen: g
                                });
                                return
                            }
                            if (null != e) {
                                let {
                                    channelId: t,
                                    guildId: a,
                                    messageId: n
                                } = e.params;
                                if (!(0, l.x7)() && !_) {
                                    (0, s.vp)({
                                        screen: "guilds",
                                        guildId: a,
                                        resetRoot: E
                                    });
                                    return
                                }
                                if ((0, l.JH)()) {
                                    let [e, n] = (0, f.Z)(h.getCurrentRoute());
                                    if (e === a && n === t) return
                                }
                                null == t || (0, l.Z0)(a) && !1 !== E ? a !== p.ME || _ ? (0, s.vp)({
                                    screen: "guilds",
                                    guildId: a,
                                    channelId: (0, l.JH)() ? t : void 0,
                                    resetRoot: E
                                }) : (0, s.vp)({
                                    screen: "messages",
                                    resetRoot: E
                                }) : null != a && (0, s.k4)({
                                    channelId: t,
                                    guildId: a,
                                    messageId: n,
                                    replaceChannelAndFixRoot: E,
                                    useScreen: g
                                })
                            }
                            return
                        }
                        if (u.startsWith("/member-verification/")) {
                            let e = (0, d.LX)(u, {
                                path: p.Z5c.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?")
                            });
                            null != e && (0, s.fA)(e.params.guildId, e.params.inviteCode);
                            return
                        }
                        if (u.startsWith("/login") || u.startsWith("/register")) {
                            (0, s.Bj)();
                            return
                        }
                        if (u.startsWith("/account-standing")) {
                            h.navigate({
                                name: "account-standing",
                                params: void 0
                            });
                            return
                        }
                        m && (0, s.vp)({
                            screen: "messages",
                            resetRoot: E
                        })
                    }
                    executeRouteRewrites(e, t) {
                        if (this.routeChangeCount += 1, this.routeChangeCount < 10)
                            for (let a of this.rewrites) {
                                let d = (0, h.s1)().location.pathname,
                                    c = a(e, t);
                                if (null != c) return (0, n.n_)({
                                    message: "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                                    data: {
                                        replacePath: c.path,
                                        previousPath: d
                                    }
                                }), (0, h.dL)(c.path, c.state), !0
                            } else throw Error("RouteManager: Something has gone horribly wrong with rewrites");
                        return !1
                    }
                    cleanup() {
                        var e, t;
                        null === (e = this.unlistenHistory) || void 0 === e || e.call(this), this.unlistenHistory = void 0, null === (t = this.unlistenKeyboardChange) || void 0 === t || t.call(this), this.unlistenKeyboardChange = void 0, c.Z.removeChangeListener(this.handleConnectionChange)
                    }
                    addRouteChangeListener(e) {
                        return null != this.unlistenHistory && e((0, h.s1)().location, "REPLACE"), this.listeners.add(e), () => this.removeRouteChangeListener(e)
                    }
                    addRouteRewriter(e) {
                        if (null != this.unlistenHistory) {
                            let t = e((0, h.s1)().location, (0, h.s1)().action);
                            null != t && (0, h.dL)(t.path, t.state)
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
                        return (0, h.s1)()
                    }
                    constructor() {
                        m(this, "unlistenHistory", void 0), m(this, "unlistenKeyboardChange", void 0), m(this, "rewrites", new Set), m(this, "listeners", new Set), m(this, "routeChangeCount", 0), m(this, "timer", -1), m(this, "connected", !1), m(this, "handleConnectionChange", () => {
                            let e = c.Z.isConnected(),
                                t = e && !this.connected;
                            this.connected = e, t && (this.routeChangeCount = 0, this.executeRouteRewrites((0, h.s1)().location, "REPLACE"))
                        }), m(this, "handleRouteChange", (e, t) => {
                            if (this.executeRouteRewrites(e, t)) return;
                            let a = u.Z.getState();
                            for (let n of (a.basePath !== e.pathname && a.resetPath(e.pathname), this.listeners)) try {
                                n(e, t)
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
                            let e = u.Z.getState();
                            null != e.path && (0, h.uL)(e.path)
                        })
                    }
                }
            },
            896361: function(e, t, a) {
                "use strict";
                a.d(t, {
                    Z: function() {
                        return f
                    }
                });
                var n = a(735250),
                    d = a(470079),
                    c = a(470716),
                    i = a(266067),
                    r = a(304445),
                    o = a(703656);

                function f(e) {
                    let {
                        children: t
                    } = e;
                    return d.useEffect(() => (r.Z.initialize(), () => r.Z.cleanup()), []), (0, n.jsx)(c.B6, {
                        children: (0, n.jsx)(i.F0, {
                            history: (0, o.s1)(),
                            children: t
                        })
                    })
                }
            },
            252759: function(e, t, a) {
                "use strict";
                a.d(t, {
                    A: function() {
                        return d
                    },
                    a: function() {
                        return r
                    }
                });
                var n, d, c = a(75834);

                function i(e, t, a) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = a, e
                }(n = d || (d = {})).STREAM = "stream", n.PAUSE = "pause", n.STOP = "stop";
                class r {
                    onStreamBegin(e, t) {
                        let a = (0, c.e)(e, t);
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
                        let t = (0, c.s)(e, this.application);
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
                a.d(t, {
                    e: function() {
                        return d
                    },
                    s: function() {
                        return i
                    }
                }), a(47120);
                var n = a(823379);

                function d(e, t) {
                    let a = e.find(e => e.processId === t);
                    return null == a ? null : i(e, a)
                }
                let c = "356869127241072640";

                function i(e, t) {
                    var a;
                    if (null == t) return null;
                    if (t.applicationId === c) return function(e, t) {
                        let a = t.processPath.length > 1 ? t.processPath[t.processPath.length - 2] : 0,
                            n = e.filter(e => e.applicationId === c && e.processPath.includes(a)),
                            d = n.find(e => "league of legends.exe" === e.executableName);
                        return void 0 !== d ? d : n.length > 0 ? n[0] : null
                    }(e, t);
                    let d = new Map(e.map(e => [e.processId, e])),
                        i = t.processPath.map(e => d.get(e)).find(e => null != e);
                    if (null == i) return null;
                    let o = e.map(e => {
                        let t = e.processPath.findIndex(e => d.has(e));
                        return -1 === t ? null : {
                            application: e,
                            rootedPath: e.processPath.slice(t)
                        }
                    }).filter(n.lm).filter(e => e.rootedPath[0] === i.processId);
                    o.sort((e, t) => {
                        let a = e.rootedPath.map(e => d.get(e)).filter(e => null != e && null != e.windowHandle),
                            n = r(t.rootedPath.map(e => d.get(e)).filter(e => null != e && null != e.windowHandle), a);
                        return 0 !== n ? n : r(t.rootedPath, e.rootedPath)
                    });
                    let f = null !== (a = o.find(e => null != e.application.windowHandle)) && void 0 !== a ? a : o[0];
                    return null == f ? null : f.application
                }

                function r(e, t) {
                    return e.length - t.length
                }
            },
            513566: function(e, t, a) {
                "use strict";
                a(47120);
                var n = a(348327),
                    d = a.n(n),
                    c = a(392711),
                    i = a.n(c),
                    r = a(570140),
                    o = a(846027),
                    f = a(287734),
                    s = a(317770),
                    l = a(829750),
                    b = a(189771),
                    u = a(67844),
                    h = a(173507),
                    p = a(592125),
                    m = a(131951),
                    _ = a(944486),
                    E = a(358085),
                    g = a(998502),
                    I = a(981631),
                    v = a(689938);

                function O(e, t, a) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = a, e
                }
                class A extends s.Z {
                    _initialize() {
                        if (!!this.isSupported) r.Z.subscribe("AUDIO_SET_MODE", this.handleViewUpdate), r.Z.subscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate), r.Z.subscribe("START_SESSION", this.handleViewUpdate), r.Z.subscribe("CONNECTION_OPEN", this.handleViewUpdate), r.Z.subscribe("CONNECTION_CLOSED", this.handleViewUpdate), r.Z.subscribe("CALL_CREATE", this.handleViewUpdate), r.Z.subscribe("CALL_UPDATE", this.handleViewUpdate), r.Z.subscribe("CALL_DELETE", this.handleViewUpdate), r.Z.subscribe("CHANNEL_DELETE", this.handleViewUpdate), r.Z.subscribe("VOICE_STATE_UPDATES", this.handleViewUpdate), r.Z.subscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate), r.Z.subscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate), r.Z.subscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate), r.Z.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate), g.ZP.on("THUMBAR_BUTTONS_CLICKED", (e, t) => this.buttonClicked(t))
                    }
                    _terminate() {
                        if (!!this.isSupported) r.Z.unsubscribe("AUDIO_SET_MODE", this.handleViewUpdate), r.Z.unsubscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate), r.Z.unsubscribe("START_SESSION", this.handleViewUpdate), r.Z.unsubscribe("CONNECTION_OPEN", this.handleViewUpdate), r.Z.unsubscribe("CONNECTION_CLOSED", this.handleViewUpdate), r.Z.unsubscribe("CALL_CREATE", this.handleViewUpdate), r.Z.unsubscribe("CALL_UPDATE", this.handleViewUpdate), r.Z.unsubscribe("CALL_DELETE", this.handleViewUpdate), r.Z.unsubscribe("CHANNEL_DELETE", this.handleViewUpdate), r.Z.unsubscribe("VOICE_STATE_UPDATES", this.handleViewUpdate), r.Z.unsubscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate), r.Z.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate), r.Z.unsubscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate), r.Z.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate)
                    }
                    setThumbarButtons(e) {
                        !d()(this.prevButtons, e) && (this.prevButtons = e, g.ZP.setThumbarButtons(e))
                    }
                    constructor(...e) {
                        super(...e), O(this, "callbackActions", {
                            [g.tS.VIDEO]: () => {
                                m.Z.isVideoEnabled() ? o.Z.setVideoEnabled(!1) : (0, h.Z)(() => o.Z.setVideoEnabled(!0), I.IlC.APP)
                            },
                            [g.tS.MUTE]: () => o.Z.toggleSelfMute(),
                            [g.tS.DEAFEN]: () => o.Z.toggleSelfDeaf(),
                            [g.tS.DISCONNECT]: () => f.default.disconnect()
                        }), O(this, "isSupported", (0, E.isMac)() || (0, E.isWindows)()), O(this, "prevButtons", []), O(this, "buttonClicked", e => {
                            if (!(e.buttonName in this.callbackActions)) {
                                console.error('ThumbarButtonsManager: Unknown callback eventName: "'.concat(e.buttonName, '"'), e);
                                return
                            }
                            this.callbackActions[e.buttonName]()
                        }), O(this, "handleViewUpdate", i().debounce(() => {
                            let e = _.Z.getVoiceChannelId();
                            if (null == e) {
                                this.setThumbarButtons([]);
                                return
                            }
                            let t = m.Z.isSelfMute(),
                                a = m.Z.isSelfDeaf(),
                                n = m.Z.isVideoEnabled(),
                                d = m.Z.isVideoAvailable(),
                                c = p.Z.getChannel(e),
                                i = null == c || (0, b.y)(c),
                                {
                                    reachedLimit: r,
                                    limit: o
                                } = null != c ? (0, l.t)(c) : {
                                    reachedLimit: void 0,
                                    limit: void 0
                                },
                                f = (0, u.X)({
                                    enabled: n,
                                    join: !1,
                                    channel: c,
                                    cameraUnavailable: !d,
                                    hasPermission: i,
                                    channelLimit: o,
                                    channelLimitReached: r
                                });
                            this.setThumbarButtons([{
                                name: g.tS.VIDEO,
                                active: !n,
                                tooltip: f,
                                flags: d ? [] : ["disabled"]
                            }, {
                                name: g.tS.MUTE,
                                active: t,
                                tooltip: t ? v.Z.Messages.UNMUTE : v.Z.Messages.MUTE
                            }, {
                                name: g.tS.DEAFEN,
                                active: a,
                                tooltip: a ? v.Z.Messages.UNDEAFEN : v.Z.Messages.DEAFEN
                            }, {
                                name: g.tS.DISCONNECT,
                                active: !0,
                                tooltip: v.Z.Messages.DISCONNECT_SELF
                            }])
                        }, 100))
                    }
                }
                t.Z = new A
            },
            801814: function(e, t, a) {
                "use strict";
                var n, d, c, i;

                function r(e, t, a) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = a, e
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

                function f(e) {
                    return "host" === e
                }
                a.d(t, {
                    Z: function() {
                        return s
                    }
                }), (c = n || (n = {})).CHECKING_FOR_UPDATES = "checking-for-updates", c.INSTALLED_MODULE = "installed-module", c.UPDATE_CHECK_FINISHED = "update-check-finished", c.DOWNLOADING_MODULE = "downloading-module", c.DOWNLOADING_MODULE_PROGRESS = "downloading-module-progress", c.DOWNLOADING_MODULES_FINISHED = "downloading-modules-finished", c.UPDATE_MANUALLY = "update-manually", c.DOWNLOADED_MODULE = "downloaded-module", c.INSTALLING_MODULES_FINISHED = "installing-modules-finished", c.INSTALLING_MODULE = "installing-module", c.INSTALLING_MODULE_PROGRESS = "installing-module-progress", c.NO_PENDING_UPDATES = "no-pending-updates", (i = d || (d = {})).CLOUD_SYNC = "discord_cloudsync", i.DESKTOP_CORE = "discord_desktop_core", i.DISPATCH = "discord_dispatch", i.ERLPACK = "discord_erlpack", i.GAME_UTILS = "discord_game_utils", i.HOOK = "discord_hook", i.KRISP = "discord_krisp", i.MEDIA = "discord_media", i.MODULES = "discord_modules", i.OVERLAY2 = "discord_overlay2", i.RPC = "discord_rpc", i.SPELLCHECK = "discord_spellcheck", i.UPDATER_BOOTSTRAP = "discord_updater_bootstrap", i.UTILS = "discord_utils", i.VIGILANTE = "discord_vigilante", i.VOICE = "discord_voice", i.ZSTD = "discord_zstd";
                class s {
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
                        let n = this._report[e];
                        null != n ? this._report[e] = a(n, t) : this._report[e] = t
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
                            n = "".concat(a, "_download_ms_").concat(e.name),
                            d = "".concat(a, "_bytes_").concat(e.name),
                            c = Number((BigInt(e.now) - t.startTime + BigInt(999999)) / BigInt(1e6)),
                            i = !1 === e.receivedBytes ? 0 : e.receivedBytes;
                        t.foreground ? (this._report.foreground_download_ms_total += c, this._report.foreground_bytes_total += i) : (this._report.background_download_ms_total += c, this._report.background_bytes_total += i), this.incrementReportField(n, c), this.incrementReportField(d, i), delete this._downloadingModules[e.name]
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
                            n = "".concat(a, "_install_ms_").concat(e.name),
                            d = "min_version_".concat(e.name),
                            c = "max_version_".concat(e.name),
                            i = Number((BigInt(e.now) - t.startTime + BigInt(999999)) / BigInt(1e6));
                        t.foreground ? this._report.foreground_install_ms_total += i : this._report.background_install_ms_total += i, this.incrementReportField(n, i), this.setReportFieldMinimum(d, t.oldVersion), e.succeeded ? (!0 === e.delta ? this._report.num_delta_installed++ : this._report.num_full_installed++, this.setReportFieldMaximum(c, t.newVersion)) : this._report.num_failed++, delete this._installingModules[e.name]
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
                        r(this, "_installingModules", {}), r(this, "_downloadingModules", {}), r(this, "_report", void 0), this._report = o()
                    }
                }
            },
            395727: function(e, t, a) {
                "use strict";
                a(47120);
                var n = a(317770),
                    d = a(626135),
                    c = a(358085),
                    i = a(998502),
                    r = a(801814),
                    o = a(981631);
                class f extends n.Z {
                    _initialize() {
                        if (!!c.isPlatformEmbedded) i.ZP.on("UPDATE_DOWNLOADED", () => this.processModuleEvents()), i.ZP.on("MODULE_INSTALLED", (e, t, a) => this.processModuleEvents()), i.ZP.on("UPDATER_HISTORY_RESPONSE", (e, t) => {
                            this._handleHistoryResponse(t)
                        }), this.processModuleEvents()
                    }
                    _terminate() {}
                    processModuleEvents() {
                        i.ZP.send("UPDATER_HISTORY_QUERY_AND_TRUNCATE")
                    }
                    _handleHistoryResponse(e) {
                        if (null == e) return;
                        let t = 0 === Math.floor(1e3 * Math.random());
                        e.forEach(e => {
                            "analytics" === e.type ? e.name === o.rMx.UPDATER_METRICS_DOWNLOAD || e.name === o.rMx.UPDATER_METRICS_INSTALL || e.name === o.rMx.UPDATER_METRICS_COMBINED || e.name === o.rMx.UPDATER_METRICS_TRANSITION_STATUS ? t && d.default.track(e.name, e.data) : console.warn("Unknown updater analytic event ".concat(e.name)) : this._tracker.trackEvent(e)
                        }), this._tracker.submissionReady() && (d.default.track(o.rMx.APP_MODULES_UPDATED, this._tracker.getStats()), this._tracker.reset())
                    }
                    constructor(...e) {
                        var t, a, n;
                        super(...e), t = this, a = "_tracker", n = new r.Z, a in t ? Object.defineProperty(t, a, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[a] = n
                    }
                }
                t.Z = new f
            },
            829750: function(e, t, a) {
                "use strict";
                a.d(t, {
                    Z: function() {
                        return r
                    },
                    t: function() {
                        return o
                    }
                });
                var n = a(442837),
                    d = a(430824),
                    c = a(938475),
                    i = a(981631);

                function r(e) {
                    return (0, n.cj)([c.ZP, d.Z], () => {
                        let t = c.ZP.countVoiceStatesForChannel(e.id),
                            a = d.Z.getGuild(e.getGuildId());
                        return null == a ? {
                            reachedLimit: !1,
                            limit: -1
                        } : e.type === i.d4z.GUILD_STAGE_VOICE ? {
                            reachedLimit: t > a.maxStageVideoChannelUsers,
                            limit: a.maxStageVideoChannelUsers
                        } : {
                            reachedLimit: a.maxVideoChannelUsers > 0 && t > a.maxVideoChannelUsers,
                            limit: a.maxVideoChannelUsers
                        }
                    }, [e])
                }

                function o(e) {
                    let t = c.ZP.countVoiceStatesForChannel(e.id),
                        a = d.Z.getGuild(e.getGuildId());
                    return null == a ? {
                        reachedLimit: !1,
                        limit: -1
                    } : e.type === i.d4z.GUILD_STAGE_VOICE ? {
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
                a.d(t, {
                    Z: function() {
                        return r
                    }
                });
                var n = a(735250);
                a(470079);
                var d = a(481060),
                    c = a(695346),
                    i = a(981631);

                function r(e, t) {
                    c.qF.getSetting() ? (0, d.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await Promise.all([a.e("99387"), a.e("5528"), a.e("91018")]).then(a.bind(a, 601572));
                        return a => (0, n.jsx)(t, {
                            ...a,
                            onEnable: e,
                            videoEnabled: !1
                        })
                    }, {
                        modalKey: "camera-preview",
                        contextKey: t === i.IlC.POPOUT ? d.POPOUT_MODAL_CONTEXT : d.DEFAULT_MODAL_CONTEXT
                    }) : null == e || e()
                }
            },
            361207: function(e, t, a) {
                "use strict";
                a.d(t, {
                    DW: function() {
                        return l
                    },
                    Gn: function() {
                        return u
                    },
                    t3: function() {
                        return b
                    },
                    w4: function() {
                        return f
                    }
                });
                var n = a(525654),
                    d = a.n(n),
                    c = a(271579),
                    i = a(314897),
                    r = a(981631);
                let o = "linux";

                function f(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        a = arguments.length > 2 ? arguments[2] : void 0;
                    return "".concat(r.fzT.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != a ? "&format=".concat(a) : "")
                }

                function s() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = d().os) || void 0 === e ? void 0 : e.family;
                    return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? o : -1 !== t.indexOf("OS X") ? "osx" : "win"
                }

                function l(e) {
                    return ({
                        win: "Windows",
                        osx: "Mac",
                        [o]: "Linux"
                    })[s(e)]
                }

                function b() {
                    let e = s();
                    return f(e, !1, e === o ? "tar.gz" : null)
                }

                function u(e, t, a) {
                    let n = null != a ? a.toString() : null;
                    switch (t) {
                        case "iOS":
                            return (0, c.ZP)(null != n ? n : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                                utmSource: e,
                                fingerprint: i.default.getFingerprint(),
                                attemptId: (0, c.WS)()
                            });
                        case "Android":
                            return (0, c.ZP)(null != n ? n : "https://play.google.com/store/apps/details", {
                                utmSource: e,
                                id: "com.discord",
                                fingerprint: i.default.getFingerprint(),
                                attemptId: (0, c.WS)()
                            });
                        default:
                            return null != n ? n : "https://www.discord.com"
                    }
                }
            },
            240849: function(e, t, a) {
                "use strict";
                var n = a(703656),
                    d = a(556296),
                    c = a(358085),
                    i = a(998502),
                    r = a(981631);

                function o(e, t) {
                    return !(e === r.MAM.BROWSER && d.Z.hasKeybind(r.MoX.MOUSE_BUTTON, t)) && !0
                }
                t.Z = new class e {
                    initialize() {
                        (0, c.isDesktop)() && (i.ZP.on("NAVIGATE_BACK", (e, t) => {
                            o(t, r.qXD.Back) && (0, n.op)()
                        }), i.ZP.on("NAVIGATE_FORWARD", (e, t) => {
                            o(t, r.qXD.Forward) && (0, n.eH)()
                        }))
                    }
                }
            },
            690032: function(e, t, a) {
                "use strict";
                a.d(t, {
                    o: function() {
                        return i
                    }
                }), a(315314), a(610138), a(216116), a(78328), a(815648), a(47120);
                var n = a(593473),
                    d = a(591759);
                let c = e => {
                        if (null == e || "" === e) return null;
                        try {
                            let t = new URL(e);
                            return d.Z.isDiscordHostname(t.hostname) || window.location.host === t.host ? t : null
                        } catch (e) {
                            return null
                        }
                    },
                    i = e => {
                        let t = (0, n.parse)(e);
                        return {
                            desktop: c(t.desktop_link),
                            mobile: c(t.mobile_link)
                        }
                    }
            },
            643950: function(e, t, a) {
                "use strict";
                a(47120)
            },
            141038: function(e, t, a) {
                "use strict";
                a.d(t, {
                    Z: function() {
                        return o
                    }
                }), a(653041), a(47120);
                var n = a(512722),
                    d = a.n(n),
                    c = a(90757),
                    i = a.n(c),
                    r = a(65154);

                function o(e, t, a) {
                    let n = window.DiscordNative;
                    d()(null != n, "Can't get desktop sources outside of native app"), t = null != t ? t : [r.vA.WINDOW, r.vA.SCREEN], a = null != a ? a : {
                        width: 150,
                        height: 150
                    };
                    let c = [];
                    return t.includes(r.vA.SCREEN) && e.supports(r.AN.SCREEN_PREVIEWS) && (c.push(e.getScreenPreviews(a.width, a.height)), t = t.filter(e => e !== r.vA.SCREEN)), t.includes(r.vA.WINDOW) && e.supports(r.AN.WINDOW_PREVIEWS) && (c.push(e.getWindowPreviews(a.width, a.height)), t = t.filter(e => e !== r.vA.WINDOW)), 0 !== t.length && c.push(n.desktopCapture.getDesktopCaptureSources({
                        types: t,
                        thumbnailSize: a
                    })), Promise.all(c).then(e => i()(e))
                }
            },
            611600: function(e) {
                "use strict";
                e.exports = "https://cdn.discordapp.com/assets/clans/DiscoveryUpsell_Genshin_Background.png"
            },
            634146: function(e) {
                "use strict";
                e.exports = "https://cdn.discordapp.com/assets/clans/DiscoveryUpsell_Valorant_Background.png"
            }
        },
        t = {};

    function a(n) {
        var d = t[n];
        if (void 0 !== d) return d.exports;
        var c = t[n] = {
            id: n,
            loaded: !1,
            exports: {}
        };
        return e[n].call(c.exports, c, c.exports, a), c.loaded = !0, c.exports
    }
    a.m = e, a.c = t, (() => {
        var e = "function" == typeof Symbol ? Symbol("webpack queues") : "__webpack_queues__",
            t = "function" == typeof Symbol ? Symbol("webpack exports") : "__webpack_exports__",
            n = "function" == typeof Symbol ? Symbol("webpack error") : "__webpack_error__",
            d = function(e) {
                e && e.d < 1 && (e.d = 1, e.forEach(function(e) {
                    e.r--
                }), e.forEach(function(e) {
                    e.r-- ? e.r++ : e()
                }))
            };
        a.a = function(a, c, i) {
            i && ((r = []).d = -1);
            var r, o, f, s, l = new Set,
                b = a.exports,
                u = new Promise(function(e, t) {
                    s = t, f = e
                });
            u[t] = b, u[e] = function(e) {
                r && e(r), l.forEach(e), u.catch(function() {})
            }, a.exports = u, c(function(a) {
                o = a.map(function(a) {
                    if (null !== a && "object" == typeof a) {
                        if (a[e]) return a;
                        if (a.then) {
                            var c = [];
                            c.d = 0, a.then(function(e) {
                                i[t] = e, d(c)
                            }, function(e) {
                                i[n] = e, d(c)
                            });
                            var i = {};
                            return i[e] = function(e) {
                                e(c)
                            }, i
                        }
                    }
                    var r = {};
                    return r[e] = function() {}, r[t] = a, r
                });
                var c, i = function() {
                        return o.map(function(e) {
                            if (e[n]) throw e[n];
                            return e[t]
                        })
                    },
                    f = new Promise(function(t) {
                        (c = function() {
                            t(i)
                        }).r = 0;
                        var a = function(e) {
                            e === r || l.has(e) || (l.add(e), e && !e.d && (c.r++, e.push(c)))
                        };
                        o.map(function(t) {
                            t[e](a)
                        })
                    });
                return c.r ? f : i()
            }, function(e) {
                e ? s(u[n] = e) : f(b), d(r)
            }), r && r.d < 0 && (r.d = 0)
        }
    })(), a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return a.d(t, {
            a: t
        }), t
    }, (() => {
        var e, t = Object.getPrototypeOf ? function(e) {
            return Object.getPrototypeOf(e)
        } : function(e) {
            return e.__proto__
        };
        a.t = function(n, d) {
            if (1 & d && (n = this(n)), 8 & d || "object" == typeof n && n && (4 & d && n.__esModule || 16 & d && "function" == typeof n.then)) return n;
            var c = Object.create(null);
            a.r(c);
            var i = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var r = 2 & d && n;
                "object" == typeof r && !~e.indexOf(r); r = t(r)) Object.getOwnPropertyNames(r).forEach(function(e) {
                i[e] = function() {
                    return n[e]
                }
            });
            return i.default = function() {
                return n
            }, a.d(c, i), c
        }
    })(), a.d = function(e, t) {
        for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, a.f = {}, a.e = function(e) {
        return Promise.all(Object.keys(a.f).reduce(function(t, n) {
            return a.f[n](e, t), t
        }, []))
    }, a.k = function(e) {
        return "" + e + ".css"
    }, a.u = function(e) {
        return "52030" === e ? "" + e + ".ca1c22ec7a94357d1d1e.js" : "49368" === e ? "" + e + ".d227d0675415e3ad4b59.js" : "11250" === e ? "" + e + ".aaa0bfc8652b5a8bcb83.js" : "96427" === e ? "" + e + ".cba9412be32074294065.js" : "29549" === e ? "" + e + ".5cfb3167683d1813a189.js" : "31605" === e ? "" + e + ".0b529051c2837df87c1d.js" : "65392" === e ? "" + e + ".69149007ab714ef5c48a.js" : "77298" === e ? "" + e + ".add29e679c343fc5f07a.js" : "23357" === e ? "" + e + ".c115422bb3b96b3eb973.js" : "12013" === e ? "" + e + ".0acbd590e399c02870d2.js" : "43906" === e ? "" + e + ".60f9c0951f193deb85cb.js" : "95900" === e ? "" + e + ".3b90e8e776d42fe1bf5c.js" : "95854" === e ? "" + e + ".6efb7ea4c8159ecf6b30.js" : "15972" === e ? "" + e + ".db967ed1b932be348416.js" : "6416" === e ? "6416.ea338e771d33aa6f29f9.js" : "32776" === e ? "" + e + ".9f7cbf28fdf182da088e.js" : "25788" === e ? "" + e + ".fed8fe718d7133d497a9.js" : "8016" === e ? "8016.54f933a339aa9c535c49.js" : "68136" === e ? "" + e + ".c94893768700cbc94d48.js" : "46524" === e ? "" + e + ".a26f9eff7082ce96603b.js" : "22646" === e ? "" + e + ".6adff5dc6f60ec53c43b.js" : "44517" === e ? "" + e + ".e7b302e99aa76e046d40.js" : "65371" === e ? "" + e + ".71d5493d0e645ec60333.js" : "75492" === e ? "" + e + ".8a460639b246ed09d8ac.js" : "84956" === e ? "" + e + ".bd6129a034378fffd9e4.js" : "17764" === e ? "" + e + ".0630e8fb112a36726258.js" : "93669" === e ? "" + e + ".afe7bb7829a10436b564.js" : "76990" === e ? "" + e + ".fc897ae4d1e6aba57298.js" : "5349" === e ? "5349.fbaad66bb92f00bb8c50.js" : "" + ({
            10377: "12746c5d4488c32bb0b8",
            10508: "5c68c910bc402e0cc496",
            10667: "d3fbb59b4bc9027c1bba",
            10778: "c8582f00afa38130035c",
            11047: "36f6592d822e5b988c67",
            11166: "b6d1adfe693cff93000b",
            11193: "e7278de859b55d91a424",
            11256: "e78142fb2766c6a9fcfa",
            11686: "4b51baf52a8e37d0a9d3",
            11751: "47a65d11ced4f9b5af43",
            1187: "ad9f2431c20fada6affd",
            12112: "9e6beedd9f05aaa5826a",
            12192: "70698fb5a1730469e09b",
            12222: "3661b26ca734f78d2ae2",
            12241: "25d4c38dc0731ec87257",
            12435: "bf3faad0f6b52f1d96f0",
            12611: "25b6abf9f95d93a3c3fe",
            12736: "4a5c0a7f33aeb30b6a83",
            12817: "f9e3a32ba0f19aaf9f9c",
            12831: "e75288b88b8bc29ac706",
            12891: "527fb02e9e3354b15a49",
            12894: "892febaad019937411e8",
            13111: "b818235f651a3d953b60",
            13878: "a87ed8b5c04f28195fef",
            14021: "97a6fce0d490fa49a6ad",
            14192: "c61743332fbb45e106a1",
            1425: "d12cbe2e2852457c367c",
            14262: "276ff8ac9719ac9f7423",
            14315: "d9b999e7d799afe04d81",
            14339: "ccb8a6dc16bffa660d2e",
            14466: "b0d129059cf1a24be927",
            14486: "30ce87f97549443d2f3e",
            14653: "2b07ceda113ecf794f4a",
            14760: "394fb6bf64dfa33dab55",
            153: "f29a18ae827841b8cf41",
            15421: "90e053cc75b27ddae9b0",
            15450: "0ec946a3f346c5250f13",
            15727: "2b69eaa372423688c7da",
            15837: "db6903caec84798e7211",
            15915: "7109b071226fc1cebc14",
            15968: "83e9dba8eadb91c3a79c",
            16087: "a2b6405929fd6abf7e77",
            16169: "ad3347dc8c1a154734d9",
            16228: "57e377e29cd4c6e0df63",
            1631: "d112f6a279072edc70d4",
            16359: "9f72ef023d5908f35ebd",
            16554: "9062f1bd47d22bf66b77",
            16565: "97425f2b4169a1a7ba61",
            16609: "72b8abfa8fdf74e584ec",
            1716: "79792f8fccf02caff5f8",
            17699: "634d6173a9363aec6859",
            17712: "88cda1a84696316457cd",
            17945: "b8b05f0d976cc25b0bb6",
            18101: "aea7bd182d9d79149313",
            1812: "73544fce55644fe820f0",
            18259: "1a8ffe426ab03ad31404",
            18320: "fe2f6d2147bedb86bbab",
            18327: "d032df022d36d4c9fc29",
            18367: "71bfc6442159799cf82d",
            18417: "19558980780034f0ccd6",
            18438: "3c86ce69676002a771a0",
            1862: "bde487c2b7269f0f27b0",
            18824: "2a12e19604082b2411e1",
            18831: "780ef711ab030d29128d",
            18879: "25b2991ecf802b874778",
            1906: "5143f0354ee2356c5a7d",
            19213: "a7a05c8b9c69116e0ba5",
            19452: "413b5acfb4192fd175e2",
            19503: "958e558c1af8f296058a",
            19538: "b37a2178fb76fc158e3d",
            19701: "cd06e23ce47e04db7df4",
            19726: "252336af825c6981ff0b",
            19878: "98bdee4b96183ac3211b",
            19945: "276f454eab5807bcd056",
            20196: "ce4228a4321332af03d5",
            20212: "9ccfbc537ce1f73bd91c",
            2026: "5f148f7ae86da51b9efa",
            20268: "c0704abdca4d2cbeb4b9",
            20294: "bdcf3472e781dfb0c941",
            20353: "29fd2ed92f6cc58c7196",
            2045: "a039211dea1fd99dfb13",
            20467: "5481b7661f4a592b53f8",
            20575: "b3fc4a3ae14672da31e3",
            20727: "dbbdd7dbc64dbe2a0ce4",
            20786: "ac70550064149f0fd2e3",
            21112: "b432f8c6a3c128b4d7db",
            21395: "859d0379e5072fed5a14",
            21617: "50218820eefb3fb123d8",
            21812: "6c32d451c12c1b2f0d1e",
            21863: "0ff6264c22df8c487281",
            21897: "bf7f036708c9f8eaa67e",
            219: "2da73a42091708b8fb06",
            21960: "84b1da25593c90c5bde6",
            21971: "5db1905f05877a85e91f",
            2199: "ab2775f390eef903aa8e",
            22036: "54bbb1e3d244f926fdd7",
            22042: "5903a64428971a3bee57",
            22101: "699af21081bb737a1a35",
            22183: "ca89135657ab30271409",
            22347: "89cce7a31bbe1aec5474",
            22377: "b3d19592ec24d7a02919",
            22458: "10d3b9279f3615e48f15",
            22482: "514be79f7eaf03dc09c0",
            22523: "ff368e0aca9901faade2",
            226: "d4736538cab285fc4b72",
            22602: "81d728492798a71b74bc",
            22732: "d12cc82b97ef75d531f7",
            22862: "f6d341f2489226993e07",
            22872: "05e85067892f9d9eeb59",
            22942: "e1877948687676fa0534",
            23401: "eb14bae17a9d4a2ec444",
            2356: "285cbb4bf8ac178b43d9",
            23746: "01ac6f56aa2da226e940",
            23755: "c8c6fb6c374d40a49b5b",
            23835: "de4095a358e3bb94e24a",
            23847: "d126e25e072b61281960",
            23952: "d2dd530235805a0f0c04",
            24017: "2a3e0d67c594b09250ec",
            24053: "17efbb210f7d891efa04",
            2435: "170c4e30219f11607043",
            24478: "6a7048c4192fdec8150a",
            24642: "293b64bf7b1a7db849be",
            24753: "4c2e69d198f9c1d8c6ec",
            24783: "916a95f2d9c8b684d26d",
            24813: "a5427c1e34b4d65cc9db",
            25070: "b8c6a94c85b6ffccac08",
            25073: "105b8a8ae4cefc1f81a8",
            2538: "b8da3b14f00fe3d13f70",
            25421: "146e2952112f30ef0ee5",
            25443: "778b8db3b01c704434b2",
            25507: "0ff699612aa1d457b4bc",
            26176: "5c0d7a427ee9d3878e10",
            2634: "8128471e844ccf7a2419",
            26460: "bf1f58dd7017ab126fb8",
            2668: "749b741a0b45e317570a",
            27157: "0a25777b6b2bae8ef155",
            27381: "198fd0a121393e4df859",
            27526: "97baf2c9dfead66c65ca",
            27577: "e3f06a94113d4b10aa3b",
            27601: "950e3be33d501f948620",
            27751: "c3996811cff3de31331f",
            27919: "804b037e26ee17d3e07e",
            27933: "39c947371ab012c302fa",
            28249: "24303a05d275b483d940",
            28296: "a6716f0d94c974739478",
            28382: "80f147d6f53d1f0ac447",
            28479: "f010ea03a515e1ddfac7",
            28538: "3b36f64cec7b68eaf1b9",
            28614: "db4d398384ff30316435",
            28990: "200a4fe8ee362ca59810",
            29136: "8d284c478d6c789e5252",
            29396: "5c4ad04a79944f0087b9",
            29608: "dfaf0b5ff62f60f81858",
            29641: "24030511659bbccd8cb8",
            29924: "4e659b1138e953f0905a",
            30166: "4eca8e790e3300a7f24e",
            30243: "72a9e5a23f4dd0dad6a0",
            30244: "c0b6a4bf8bc4fbdc95a7",
            30364: "0d0c81c1a56172bd5368",
            30419: "fdb30d0e98d3592ee94f",
            30427: "491847abe5e588257aa8",
            30478: "a40d23d8e7db8e1460d7",
            30634: "6bbc68cad1ad24c23c06",
            30676: "b26e44eeef436cddb2ef",
            30684: "abc2c1e5b0423e8f23df",
            3084: "d98568fa23ab193da6f8",
            30887: "917c943d9c9faf91bd5a",
            30987: "8a1c622bd806de348e29",
            30997: "7897e238e3bec21bc530",
            31085: "76408177384772aeb890",
            31093: "35ed0dc9a7218d76e742",
            31177: "f35d851e685c0e2c6de4",
            31649: "58ffb0d0e47ef5c39402",
            31835: "27cd0353da00895fe6b4",
            3190: "a026667e17656e7faa1f",
            32006: "8f3c2586826c9030f62b",
            32157: "5cc5c8b13899159d17a2",
            32627: "f2f5ede964f166728a3c",
            32640: "6b67d4740c31b044828b",
            3277: "180722ccdde775f024f2",
            32886: "9e703d4592f998822fe8",
            3289: "e348c4df66441c804e26",
            32991: "732f268584f3640b54a8",
            33053: "1e01c74bb948c08898b2",
            33065: "a373911938e6f1ccce63",
            33156: "a913bc13a99c93af57b7",
            33184: "ce05af58e8a72ebd245d",
            33213: "b876dbcf973adb89932f",
            33238: "29f52f0d9a358f13f0f1",
            33273: "18c38d6bac5757724b6f",
            3336: "34bb548615edb8b5273f",
            33397: "616a0bd0cf0f3c1dd060",
            33641: "69dab882ca50eafdaa6e",
            33648: "7caee33b1053a4e07b78",
            3378: "ca7548252e0f5ebb7b6a",
            34049: "d6061203fef6735aa988",
            34191: "cf309bf90928960bf765",
            34424: "38410db8f4449bca1646",
            34485: "884ba98af81bfdc574be",
            34842: "d90a3b76cba34ee83800",
            34933: "72759234dfcc45c92d16",
            35247: "dcbba2a9f727b5cc630d",
            35262: "59948bf8fc212bff5cb8",
            35282: "66d344cf0b56a262186b",
            35401: "652c16ccfa16990cba20",
            35489: "94e684dc908e70d88139",
            35641: "2c913575449b061e6cce",
            358: "57cade9bcb9d35248e53",
            35822: "67037973545c94658d14",
            35869: "e574706c1dae2bda6342",
            36052: "ac3feb6678a69715fd20",
            36278: "863ea5a7dbb014b52d85",
            36371: "9f1bde78b1aedb486d4b",
            36412: "c70d93d01f8e84d9c77b",
            36439: "2629d7b8752305b5300c",
            36514: "d1bc26860d9c700c01a8",
            36869: "e0f73d7370c3623b4630",
            36925: "20632016e888ac998dd5",
            36970: "661e2741329e064a5388",
            36995: "2c6ca470596fe1cd18c7",
            37052: "a2d6214dba402cbe41da",
            37066: "d724a00aa76d0cfca481",
            37133: "f878bf29f8543584b743",
            37194: "fdc757a499725b40d626",
            37220: "1cb66fd352e32f50186c",
            3732: "5b6fdbb6e23f6743d4ca",
            37357: "82d3dd49fd750b5f7a20",
            37372: "c3d7aab399e89d1f4775",
            3741: "c70fdf89569e7bc19521",
            37473: "f3822cb8e939dd52cdfd",
            37483: "cf771cae2cc572d6a3b8",
            37558: "fbadee651cb73a7dae91",
            37564: "a189d371d3ce9f2376af",
            37586: "305dccdb24236e07c129",
            37655: "5cdcd0d2c63bd151db38",
            37720: "dc3cf077a755bba4e93e",
            37880: "a74c28fefa876f91d22e",
            37941: "b787c189a655e8a3e6e3",
            37969: "70cc62a36bfdc4f1eb3e",
            38047: "923725a0b04cac5a41c0",
            38062: "4820d68b24efb2822629",
            3807: "0dfde4007e0c1f035607",
            38359: "b7d9462a6a51dbe62800",
            38413: "388651b7df14cc48272b",
            38506: "360d7897e234e258225c",
            3865: "9ed9751d972974eaf0d2",
            39009: "46d274c22ee9bf3f59b7",
            39010: "d320d77239de244ab1e3",
            39143: "8817f2d0d1deb4cec0d7",
            39248: "30475a143a3714260cf4",
            39285: "46e643acf1790de3c24d",
            39305: "13fba04cc9f411d149b6",
            394: "58930c88beb77e347a46",
            39511: "eab0096c227625f21961",
            39559: "9258156ea1de2896b2e0",
            39612: "2aac502da71ed1ba43fc",
            39627: "b78b236402bcbb2b4401",
            39648: "c81f2c92e8a617ba51f6",
            3985: "7384666fda198caf7e3b",
            40096: "8a8102661a853b478d92",
            40157: "aba870eab3a99a21d61f",
            40283: "dafd0797a60cb645d824",
            40331: "d059197f81791b3a6eb9",
            40390: "f53fc614967b5624a79a",
            40897: "b77e21433c39f0a88523",
            410: "c9158b565a17585aa05c",
            41023: "cb345fc7de70d3bafccf",
            41128: "e2554eab794c23db175d",
            4117: "47ca21f249be4da2ee08",
            41281: "2479daa4582aa4065d2d",
            41552: "0e7608a4af4e79688a78",
            41588: "00f242f2f980fbebfd9a",
            41662: "ec7913b2872117794b01",
            41814: "18c3b7af695a59d8b1c0",
            4189: "20e702a70c9b2d0d86b8",
            41947: "da2c9144bd5227d0827e",
            41953: "c98d2773f3638357a686",
            41984: "6eadea1895c857d27970",
            42341: "af275a33a1ab5d559606",
            42358: "d02fce2b7f960c435446",
            42483: "074f2b352698eac52ee3",
            4266: "5cb1e4db02cb1234a150",
            4267: "564e62e0df87d91272dd",
            42758: "2a1667011b4e5a2d9c7a",
            43057: "800a2c2c8bcebbe8b010",
            43133: "d189ed6c3dcc18c29fd2",
            43331: "054a3aa9343fa90f1480",
            43350: "346c47e796161fbea371",
            43353: "205592446e40fd926113",
            43502: "48633c2424ed0c2ed26e",
            43782: "76092b61d0bb6b6748c1",
            43903: "af928c3cadff5e7b3f4c",
            43966: "6cea69ae596d0a8a2583",
            44153: "2ab01f29573e5f0bd7f1",
            44156: "1958186ffff3d3ad44a7",
            4419: "f884794cef4b7284f9cf",
            44400: "3549c6c92914e0ccd41b",
            44462: "6ed64161501fb9861738",
            44754: "7716d66f67e8e67cadae",
            44798: "ebc9d12258539c0b8721",
            44808: "0b6ca4c0b4a1b7e6e190",
            44827: "2dbac4f44f956d800fda",
            44878: "1c74429c427971a22613",
            45094: "a59fb04fe949e3c80f26",
            45130: "abc70f64e21e2a1cf4a1",
            4530: "08f900e4c86b741ea9b7",
            4536: "668f22f3426e16cf7c6a",
            45576: "e04f02351e2d7c4a22ee",
            45747: "3b30fff1aa1fd0a3c6fe",
            45915: "48367c27277bcc8edb71",
            46161: "a1cf5c32169cf060ba58",
            46369: "febe0a9bb0149ac195c7",
            46468: "1724e7c7211041fc9907",
            46826: "0b750bf6121e037cc8a5",
            46865: "19a66a7efc3bfde3c87a",
            46882: "4a730d596fb1b55c4033",
            46896: "11933da4e55705e10995",
            47034: "80ad83ece13d626d8ec7",
            47055: "22e928c60562ea093c72",
            47228: "235d654c5efab2f9e2a8",
            47354: "4d502b017be9378d922b",
            47435: "52a3fd85d644393e29df",
            47484: "7510a12c6867eee217c4",
            47674: "6e8c124ef0487e50b674",
            47704: "fd104a58026004df29ae",
            47939: "c7133214878f5a1c4162",
            48017: "3301f4c3cb48091019f5",
            48092: "b1a44f94451ee0dbe1fc",
            48174: "545f15dc87ddf077ad52",
            48526: "53e7e40561aa43fb12a1",
            48707: "d7739398baa7c0514b30",
            48748: "60208db444e573a9e3fc",
            48800: "52e345517c6658ee1dfd",
            48934: "00e154ebf8c20da42c14",
            49131: "94226acde9ce4e1cf798",
            49277: "1163afbadcbf816f16f8",
            49365: "376aa1ba40ac4573f1ae",
            49508: "3985c6c4f1f1c03b1bfc",
            49827: "ac17fdcc7e3190dba59a",
            4984: "a80766bb5457e743ed56",
            5004: "f408213201efa0b2fa30",
            50331: "7cf5d9442e8d08525a6e",
            50498: "4cd375248e87df257b07",
            50654: "b54154234ebb3b525f01",
            50872: "177ab3091f00511cde65",
            50929: "76724f760b175425d8e7",
            50987: "cecea816515ad30cb304",
            50990: "1d8b98584ea528ef537e",
            51068: "e46049793043eaa28d3b",
            51199: "e5bd59ce8751a2b37b48",
            51477: "15d4a57b1084da6e76e2",
            51529: "453a7472742bea05f17a",
            51563: "f52b831270dc5bfb907c",
            51587: "c081d4c467f701b5b905",
            51868: "4571822ab4757df174a7",
            51934: "1e43ad69ff14cb1621a9",
            5217: "21c256e1ecadabb3a566",
            522: "c698f49cb954557686b6",
            52590: "cad7fa1311cf51ea59e9",
            52657: "93e61e9d9b8ee3d54247",
            52680: "898e2dd8eea0a9212846",
            53162: "dc9c1880dc283a357b7d",
            53195: "eec1aff521ad242996fd",
            53269: "550a5641fd84d2e58575",
            53289: "823a08da3e2ee4fa89aa",
            53463: "e6d2feb74c323643e8c3",
            53497: "7fecc57272beb04d5d9c",
            53510: "ab94d17093a5455e0c2e",
            53512: "fdba55b8b62c5b3224a6",
            53579: "43ae0c6150f4580970c1",
            53809: "385d1b9424c1efbc7161",
            53896: "4faa2c6dd6b303715636",
            5396: "911833201ca771ec8740",
            54021: "2abbb50225cec88853bc",
            54050: "6fa1aacb9178961673c1",
            54076: "db00f318301273ae92b7",
            54310: "bc9595101fdb2a3d4076",
            54343: "b4aea80b00d0cd39f4d5",
            54441: "2cf84a5a4364d94922c4",
            54535: "d28b5313019d96f3304c",
            5454: "9493fb47c58ea7babb63",
            54597: "7e4e25bfb796ac121521",
            54626: "04adc5012be0efe46f7b",
            54845: "964778e5b7fd50a43ed9",
            54918: "1b9243a32993d4416ca8",
            54931: "12affc988f62c8e0f397",
            55183: "067227f4108277663da3",
            5528: "3f225881b0933dc1ddd9",
            55601: "30925b209133ac70253e",
            5577: "47074c0b7c77e74cdd8b",
            55944: "a2189b6e4445e0057731",
            56035: "23d7b8a8fd318925347c",
            56049: "6c6bc98bc69b8c8cc488",
            5609: "1a5fab402b73980cab92",
            561: "54b68fffb15c9a1c30fd",
            56236: "b4f92e54c3feadf9ff17",
            56268: "9088d541fe8d76e2769e",
            56446: "79c1b23ef83c33459ae6",
            56496: "30ec5cea5128c59f0c16",
            56826: "2bd909350981f83549b2",
            56944: "fbecb43888815c88bbc7",
            57372: "4d4775cc4d50051dd435",
            57387: "48b38a4e12bfb37b9f82",
            57486: "20b50c5573c008e9d2d5",
            57539: "3352a189327d1a71118e",
            57650: "979f963465eee2ff26d4",
            57884: "7080e124a46fc379a933",
            57961: "aac77d3077af88b623b4",
            58023: "de2deaf3633543df7e91",
            58175: "f761a173e880e5f98d97",
            58227: "16f8aa997db622893593",
            5828: "2d58838b9718090104bb",
            58286: "dd859fd7c7b4a740f5d6",
            58548: "36c67d9b7e23d4b8297f",
            58621: "9b09d47383bb1f56e6e3",
            5863: "b52a3f63d4af9e1092c0",
            58690: "10d5b7053b602f099a84",
            5877: "5ee09d6034dcbb010f33",
            58903: "d92be9c5a0f031b0a19d",
            59128: "33f9e5fe5b695ddd507a",
            59281: "4b3e72d6723a63364a37",
            5945: "090cea7efe2968ef4dbf",
            5950: "2f756e3559981de0ab26",
            59546: "f982998672ecdb428071",
            59642: "04e845dddcdb6e7bfcb4",
            59682: "0ce7bed2f01d27aff30c",
            59716: "b1f3e13a25844b47b64c",
            59729: "3b3337e212ee58e3320d",
            59958: "3479abfcb69604ff0b0f",
            5996: "51b06bc58fdb60c15816",
            60005: "4fed44fdb0587cff657c",
            60079: "2a4793b85f45fc025c90",
            60082: "269c2d8b618155ff33f5",
            60133: "08ada850e16cea64eab5",
            6045: "fbe793d8b666bfa0f01e",
            60493: "5dfc06e1001a5bf81ee1",
            60592: "c9db5767bf0a385b9982",
            60677: "1f2f55033015cfe2b61b",
            6074: "6ec32745f06580d3ac48",
            60878: "4ce30697a4512068124a",
            61214: "9535e5da894f670cea38",
            61366: "4af6970a1f7ae5b3ba73",
            61418: "987886d9400fe6705249",
            61482: "a1eed918d14046f5aca5",
            61536: "27f9af71985f8b255a9d",
            61624: "44b0d071df01ddb7a667",
            61690: "b45b7f340366771988bd",
            62065: "dad47577cee6e19683d7",
            62236: "5869dc7b09c5c71add4f",
            62318: "5c53ad79686ac33b49a9",
            62344: "b6fc83451b9ee6ba1018",
            62629: "8679120d8936eda990d2",
            6284: "fc3afb3a162c3c77d8aa",
            62903: "3a8a623ba6525ef3a360",
            62985: "27fa6b3629146a5d3b68",
            63007: "01fbcf77ae78ac5d8bc8",
            6310: "d940d1091fb8a1af68f7",
            63629: "5f147a23fb9fef0d93d3",
            63636: "7ae8b54b8e345c7d58ef",
            63676: "4d7bcb9fadc2fd0b00b5",
            6368: "ebe5ab2e66db7636c37e",
            638: "6fad39946e711fc9a6e2",
            6380: "b64553678b47c495b7c5",
            64248: "b58839e7ec16481d0e7a",
            64409: "704df4115abb42f228ec",
            64563: "a9c383141a84c7196f41",
            64643: "d7e4871b12c3a8a445a8",
            64908: "7c4dda2c0942246b0391",
            64941: "5b207bc58e4185a4503e",
            65045: "f88bdbd0c828902119e4",
            65652: "b291691e9aad6e5a41c1",
            65795: "7938ff694ad57b4c6327",
            65840: "e20604daca9ed7849615",
            6595: "df7de9985132b9a4ac24",
            66050: "d01fad84a60daef8a0cf",
            66071: "ab16231416dda0fdfb0c",
            661: "6e219f18c48e3e8a4eb6",
            66462: "1dcd00fb147cf2222289",
            66902: "82e72e38de270a3f5be7",
            66915: "34d7eb4f981735f662fa",
            66944: "3e8b6faf2e571fbacdb7",
            67007: "271226960a2baf70426f",
            67607: "5bbf12ee2debe0459369",
            67753: "1e21a5a3ca6aecd29b77",
            67816: "1d5057a7b773c7280316",
            67920: "c42e6588478cbdb5001c",
            68130: "777e1991a95589bd63fa",
            68148: "1b20c0d32d338fa64a81",
            68241: "274a4383c63bedaa3691",
            68310: "08dc07e7c2bb567ef48b",
            68449: "0c77ee4fd2b05e4df6f2",
            68535: "74d57e5a7e9cfdc0f9c4",
            68614: "1cd907e8d4535e616204",
            68720: "b9aa03c3e96b02e7cc43",
            68747: "3ba8912764341c3d5aeb",
            68784: "3246e0e5dc0a2e77d883",
            68822: "351d401b13685c1793f6",
            6901: "97f4b0cf192a57490a92",
            69015: "6f9d65a99a4e136f89a9",
            69069: "6c37e87bf51dc9602115",
            69208: "3b6153bd4f86f9dc5a8e",
            69220: "40a9820b1706f879b4e4",
            69240: "43eb0c7c4fe1199b1528",
            69473: "ca854d75d511269481f6",
            69495: "ceed114acc82921ad2f9",
            6957: "169795a28c754892d27a",
            69633: "1eaa2b38dc0376e14f99",
            69788: "707729d2b4c024379601",
            69806: "23bda35f4482643fcf7f",
            69923: "c6b1cbe3de1ba1492140",
            70036: "d505dc42c99f7ad2b495",
            70061: "25fd6e5cb14424ad9258",
            70161: "df0e4fda30266a5306a7",
            70253: "b5c3830300dede5d7bca",
            70528: "4ef4916fc18fd7255a77",
            70623: "bc73b1cdf5733511a802",
            70669: "f54c5ff42de2ab5e675c",
            70675: "161a257c922e771d92cb",
            710: "7220a26b6160c8d442aa",
            71088: "54ceb8af4d2ef2741a51",
            71196: "b68972d0e0114ac99dc7",
            71244: "c4cc9053f325a3cba921",
            71378: "b4ba417103dfb24940fe",
            71517: "e9f98340b9e8803739d1",
            71580: "7ebadbdb5e91f70c4f9c",
            71953: "67c059a18e5827dfb9dd",
            72323: "3325cce57dc8a13bb4f4",
            72458: "0cbbc0813a693a4ae24a",
            72637: "07374d243590d3021bf6",
            72760: "114720b4fa42358d8931",
            7285: "9bdd79c5bb250cbdd939",
            72891: "c414f7a04a01a90dde0c",
            72920: "ffd42c93eb1966bea801",
            72922: "63597f4abc20d4b1e4bc",
            7302: "455dba1f0cd603bc0dc5",
            73149: "2c6561abb86a93551b07",
            73685: "fc17100b2eedb8c19b20",
            73872: "ac30938ff53f2411f505",
            73921: "ffe21f51ff69de83c582",
            7402: "61119056ae039037d2db",
            74112: "b3fa7d1f84fbb6362f71",
            74194: "ea831534839088a2b59d",
            74203: "aa2461607579ab0b6620",
            74294: "42caf3d7acc4cd28d1dc",
            74300: "15536c1b6b3c6dddca6d",
            74459: "344fbabe33133847c9e6",
            74543: "b6fcd4940ccba7aacf2c",
            74590: "b700c68921cbe40ad1ad",
            74602: "88911b6e1ed3871d75c2",
            74673: "476933a49c8db4b85b00",
            75409: "4929c8e1f25f695ef568",
            75613: "f5547ba63830902d12c5",
            7573: "f05933b557d2089e5c00",
            7584: "625ebdc2fe4a76211267",
            7590: "df3ad43e4c9d0780fc5f",
            75966: "398f7584615b18877ca5",
            75994: "82014228b083e32ba940",
            7613: "d6f489fea43b02d95919",
            76233: "829893b859b4acb228de",
            76241: "6fb3a3c5d030719242e9",
            7649: "997f4b8f52483430131a",
            7654: "f991ed12bcf73c297828",
            76540: "3e8045682b9acf038c86",
            76731: "42d21a8dafc8d0960105",
            76815: "7b18a68499f4ce097346",
            7685: "5af7e840e2a73cc3ccf9",
            76879: "8712f4b333de63fd7fac",
            76888: "2c991ab91728434ccf2d",
            77117: "bcca7245ff50ae08546b",
            7717: "dbf659811e71ae3956e6",
            77172: "ac927e73f168398918c4",
            7728: "6e4178c4646276ec43e9",
            77459: "22dbe45333484b11cb87",
            77485: "ada791ea66157476fcca",
            77578: "62ae6ec911d4d54f851d",
            77721: "e469c53545b3fbc6e7d5",
            77745: "0f864875aea7b0761b05",
            77800: "1eb36db81d5c72cbf591",
            77875: "9d96e030e49cca95ea26",
            77927: "efebee2c73f7339eebac",
            78073: "07c2d5c4b0e1514590e7",
            78221: "970fe774e141f182b7ad",
            78273: "44f0e6fad70da8fe427b",
            7848: "d9be2b3ecc491e4e6ed3",
            78607: "e751b6b5a6482850ab04",
            78650: "47be053eb4594dc4b92a",
            78670: "7f63c06b954632e829b4",
            78704: "12a88bc554c2a9cb7b9e",
            78712: "962ec3d336dc32c0c947",
            78786: "379d5eec38f7579b7ea0",
            78977: "70a325ee48d1f230897f",
            79427: "4eca609d955aca4606a1",
            79457: "1eccc1c23e788d863195",
            79477: "6ce5cedf20e5769ee21b",
            79521: "b38dd7d673e5eefc6dda",
            7954: "6712b96e63aebacb486b",
            79695: "a1a6ff229dd7ac922afd",
            79764: "d9504ffc6b6a8466e737",
            79921: "00dab5852ef52ce32f56",
            80026: "57c585f07dd8f87d72e8",
            804: "9f7a21e7ee18446bb927",
            80404: "6e7cfa5531682f3b73d4",
            80451: "ccce19ea4070840ca65f",
            80493: "9b10570b6cbf0479406b",
            8102: "91f047b633c37615ec1f",
            81056: "74101a39a73b1730a126",
            81247: "c667041a47e5b12f1f54",
            81352: "ae1fd7fe3e9c7065592a",
            81358: "d1e76dfc79f494481848",
            81533: "803b70ccdc7e462ccb91",
            81539: "250def643c82117d6f3d",
            81811: "ec2b58c4d2631bdb325e",
            81843: "5484e955bc0ac39b5513",
            81847: "d3ca3347437a689fecf2",
            81975: "7033560035e5ce44b8f5",
            821: "f1d7c7b92f5459352ded",
            82143: "d6288c6f442d5aeebcbb",
            824: "0e93583763485ec25444",
            82560: "2e47b0c57ed8245d91fd",
            82634: "28140ab593b0c84f2b43",
            8286: "19a3aee578a8c8c74944",
            82961: "08b6d9bbe57f8ebd87af",
            83051: "431d286b8c560d9c3e2b",
            83264: "781ab8272bc09e98036a",
            83323: "b58bedb229c6642126e1",
            83331: "47ea82ae50b44b056a4f",
            83536: "394a132798900dd1a246",
            83613: "f68b7bb85f7601a2881d",
            83646: "da39b67af321438a350f",
            8366: "13c8fd011e2a1eb5be70",
            83804: "475662af3d5925213ba8",
            83816: "781eafcde060025d4b84",
            83942: "ab33ad0e59e2de33c955",
            83983: "270f0ba73d738c7f228d",
            84239: "e46f98614ea95501ca52",
            84259: "ad776a6b3e87cf8b30c3",
            84385: "72306e1c80f3f0ce6aee",
            84399: "9a446795144816cebd33",
            84482: "a8ed110fc8cb5aaf8b96",
            84509: "6a4ccae51133eade31ce",
            84518: "d30bdc1f89123017b4d7",
            84686: "49eafa3cc0c386d7e654",
            84722: "530cfd6b84dad451e530",
            84725: "3b0aa2d4f436a559ec66",
            84778: "0869cc8f9883a5660650",
            85100: "f3472c4a65368dbcaf3c",
            85281: "9021d814cd4beafd0170",
            85342: "0fe5f304c28f8f0af5b1",
            85351: "e66fd9f4b58b36ebd426",
            8540: "135144145bec3fa10894",
            85552: "7ecef8d1b4f08ad7fd1f",
            85668: "5276fdf4a9d7f8aafdab",
            85760: "408d36477c16608a815e",
            85828: "e73f086846db1252b971",
            85885: "1f54d736013b48aba0a4",
            86047: "2934faaf8bb76f871a18",
            86060: "829238faed825aeaa575",
            86200: "2c0456292d0c8e0eb406",
            8631: "2576cd3010ad39bca85e",
            86560: "bc3dd442429dc5bbf9bd",
            86590: "ec0ff397c7b1a89ce991",
            86977: "00ceb024dbee70ca6906",
            87200: "8561a473c8ced7d6426b",
            87233: "12f7ce53d08ddc8a8963",
            87249: "4d071c8a26a04afdb9b5",
            8739: "c76a37e2d76682395e53",
            87549: "873641efbcb983e3456b",
            87624: "629d1b4e94f4502f3788",
            8790: "6f8ac38639e8fd28181c",
            88358: "f24710d020086ca1ca1a",
            88571: "96ee45f03010dac5040c",
            89021: "b069fa9fe10d6c024b7f",
            89069: "19f3b1ff4f85b0240ff5",
            89131: "cf2c0f7a9208c42f34f3",
            8926: "3b718ad43b9b6f5544ca",
            89289: "80e7060195b627a3aa42",
            89350: "2b7ebcf1e6fdfdab8f56",
            8965: "f715356b82a89528946d",
            89675: "98330618620758234a33",
            89715: "7951c81d396539de0ebc",
            89792: "0698ecc68fc481dd3845",
            89873: "f66afd1bf849580687f7",
            9007: "0f9da2ba28aeaa5f7b49",
            90220: "47c9b48f055d5bb33e18",
            90424: "b26482250390b2834856",
            90508: "479000f46e47975d2a66",
            90542: "8aa8490edfd09c09410d",
            90688: "8c3883be5ec459b8080f",
            90861: "8ebd075c3edd224367c8",
            9088: "2cd7ddebddf714e33965",
            91018: "7b8a9f7b04f93cdf3cb4",
            91026: "133ffca43f66d37e2c8a",
            91032: "d9fc4c6eaaa9e6e22336",
            91199: "385c25b21f047cc47e32",
            91260: "ff80bfaa65a84c146747",
            91315: "fa3a8e5ec3787c2ba3be",
            9159: "d8dc5f480cef4808b15f",
            91789: "630725082ebfe6a238e3",
            92006: "2e69164f9d8dc2a6b981",
            92247: "77cc15b135816cf94220",
            92339: "2558a73e7a9407c13778",
            92401: "5b321a330d4c5d927d00",
            92446: "d250ad90adc2b1070577",
            92557: "1e52e7fbc875ae8557aa",
            92575: "3fda323f7f741259f407",
            92695: "c7208e03dfab2e795f11",
            92780: "3b4a1c35b7a6fcb17419",
            92795: "f6553af554bc50015fbd",
            92816: "cf5ef3d45e83557134ca",
            93198: "8df8daa8efdb24c4cd4a",
            93288: "3db081c564262c6b0ef5",
            9343: "170df71f9624a34b81aa",
            9354: "48c50dd80f262a3d1316",
            93554: "28b0a6121e3c3817d50a",
            93626: "f26a8e8637b4871966d3",
            93698: "c6b88a7108a2ed253f19",
            93776: "92fe5584f4a42fe0a060",
            94005: "0ce178bcdd296fd7c349",
            94064: "e61b5af42556ddd35c8f",
            94364: "6512ee43b08cc1f7dccb",
            94566: "5b66f64055b9769287f1",
            94889: "3bcce8ed555cc6e2235c",
            94912: "5074e5e820f01d55d196",
            95093: "19c19e47050cb9e1c1af",
            95136: "831701ba91be5f92964e",
            95257: "870b721da6b1d66119a2",
            95307: "e70636f4534788ed6be4",
            95308: "c76a075424b19d55a5b6",
            95390: "f58f045b022d76b7f7f9",
            95393: "3ff17791de223181f45c",
            95422: "d49531ead35ed507ce3c",
            95468: "8a46b1cb69093421f11b",
            95480: "ff163941c66959ca798d",
            9558: "7d32ef498a14a25a0f8b",
            9573: "909ff6f40eaa37ef76d6",
            958: "cce009b19990f96126bf",
            95883: "839bdc990a878626fe52",
            95925: "653963dbcaa2b85f66f7",
            95937: "f574a5e87cf271adcde8",
            95962: "c3777876dbbf741f82b6",
            9606: "fdb4ded9726b37f83899",
            96246: "8d1391d43bc76484afde",
            96307: "3f77fea55fc116d1a4ce",
            96448: "dcfe473d1387ff681498",
            96473: "78969d3d629884360b7e",
            96645: "8d61dc90f6ff4ba3b230",
            96936: "9d2ee76894b7ed7627d0",
            9738: "300ddedc1eb99a7df38a",
            97458: "77a73f98219edfef12b3",
            97516: "d9e1c9afc526fae02108",
            9766: "bc1abe2f6a390f586e34",
            97674: "94890aa3d167a4f8f2ae",
            9785: "02e86a8befa520f87b1d",
            98067: "b52b7c334ad0a838d37e",
            98105: "bc84951ca595de8712a3",
            98137: "1f5e03107973cc9abf2e",
            98154: "5efd3e3f74c2fd656348",
            98335: "0861c563db2f937e8010",
            98466: "50491f53a6e1aa3d6a45",
            98538: "4ba4102d8a3f9b518f87",
            98570: "02fbbbdda8e97342160b",
            98920: "56d6e93cbbb96e33d8ab",
            98928: "5b0a548e9c62741a26ca",
            98952: "75448738382af1a68f15",
            99339: "84dd422021da9a0a5edc",
            99414: "d5170674d94f7c2af509",
            99450: "25df3f82331ff0f76cb5",
            99617: "c0dedaa1145cc687d678",
            99689: "c3a9ca06214edf34901d",
            99694: "9a90bf29272b8f6dd29b",
            99809: "c63a72218bd8299050c0",
            99857: "e1031ae22250ad0847fd",
            99905: "5d40b7b3f419135d0846",
            99989: "36eb3ad01fc39f808816"
        })[e] + ".js"
    }, a.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), a.hmd = function(e) {
        return !(e = Object.create(e)).children && (e.children = []), Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: function() {
                throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }), e
    }, a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, (() => {
        var e = {},
            t = "discord_app:";
        a.l = function(n, d, c, i) {
            if (e[n]) {
                e[n].push(d);
                return
            }
            if (void 0 !== c) {
                for (var r, o, f = document.getElementsByTagName("script"), s = 0; s < f.length; s++) {
                    var l = f[s];
                    if (l.getAttribute("src") == n || l.getAttribute("data-webpack") == t + c) {
                        r = l;
                        break
                    }
                }
            }!r && (o = !0, (r = document.createElement("script")).charset = "utf-8", r.timeout = 120, a.nc && r.setAttribute("nonce", a.nc), r.setAttribute("data-webpack", t + c), r.src = n), e[n] = [d];
            var b = function(t, a) {
                    r.onerror = r.onload = null, clearTimeout(u);
                    var d = e[n];
                    if (delete e[n], r.parentNode && r.parentNode.removeChild(r), d && d.forEach(function(e) {
                            return e(a)
                        }), t) return t(a)
                },
                u = setTimeout(b.bind(null, void 0, {
                    type: "timeout",
                    target: r
                }), 12e4);
            r.onerror = b.bind(null, r.onerror), r.onload = b.bind(null, r.onload), o && document.head.appendChild(r)
        }
    })(), a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.nmd = function(e) {
        return e.paths = [], !e.children && (e.children = []), e
    }, (() => {
        var e = [];
        a.O = function(t, n, d, c) {
            if (n) {
                c = c || 0;
                for (var i = e.length; i > 0 && e[i - 1][2] > c; i--) e[i] = e[i - 1];
                e[i] = [n, d, c];
                return
            }
            for (var r = 1 / 0, i = 0; i < e.length; i++) {
                for (var n = e[i][0], d = e[i][1], c = e[i][2], o = !0, f = 0; f < n.length; f++)(!1 & c || r >= c) && Object.keys(a.O).every(function(e) {
                    return a.O[e](n[f])
                }) ? n.splice(f--, 1) : (o = !1, c < r && (r = c));
                if (o) {
                    e.splice(i--, 1);
                    var s = d();
                    void 0 !== s && (t = s)
                }
            }
            return t
        }
    })(), a.p = "/assets/", a.j = "12633", a.v = function(e, t, n, d) {
        var c = fetch(a.p + "" + n + ".module.wasm"),
            i = function() {
                return c.then(function(e) {
                    return e.arrayBuffer()
                }).then(function(e) {
                    return WebAssembly.instantiate(e, d)
                }).then(function(t) {
                    return Object.assign(e, t.instance.exports)
                })
            };
        return c.then(function(t) {
            return "function" == typeof WebAssembly.instantiateStreaming ? WebAssembly.instantiateStreaming(t, d).then(function(t) {
                return Object.assign(e, t.instance.exports)
            }, function(e) {
                if ("application/wasm" !== t.headers.get("Content-Type")) return console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e), i();
                throw e
            }) : i()
        })
    }, (() => {
        var e = {
                12633: 0,
                24217: 0,
                2797: 0,
                39709: 0,
                42482: 0,
                57652: 0,
                62734: 0,
                64787: 0,
                67096: 0,
                70397: 0,
                79892: 0,
                84471: 0
            },
            t = "discord_app",
            n = "data-webpack-loading",
            d = function(e, d, c, i) {
                var r, o, f = "chunk-" + e;
                if (!i) {
                    for (var s = document.getElementsByTagName("link"), l = 0; l < s.length; l++) {
                        var b = s[l],
                            u = b.getAttribute("href") || b.href;
                        if (u && !u.startsWith(a.p) && (u = a.p + (u.startsWith("/") ? u.slice(1) : u)), "stylesheet" == b.rel && (u && u.startsWith(d) || b.getAttribute("data-webpack") == t + ":" + f)) {
                            r = b;
                            break
                        }
                    }
                    if (!c) return r
                }!r && (o = !0, (r = document.createElement("link")).setAttribute("data-webpack", t + ":" + f), r.setAttribute(n, 1), r.rel = "stylesheet", r.href = d);
                var h = function(e, t) {
                    if (r.onerror = r.onload = null, r.removeAttribute(n), clearTimeout(p), t && "load" != t.type && r.parentNode.removeChild(r), c(t), e) return e(t)
                };
                if (r.getAttribute(n)) {
                    var p = setTimeout(h.bind(null, void 0, {
                        type: "timeout",
                        target: r
                    }), 12e4);
                    r.onerror = h.bind(null, r.onerror), r.onload = h.bind(null, r.onload)
                } else h(void 0, {
                    type: "load",
                    target: r
                });
                return i ? i.parentNode.insertBefore(r, i) : o && document.head.appendChild(r), r
            };
        a.f.css = function(t, n) {
            var c = a.o(e, t) ? e[t] : void 0;
            if (0 !== c) {
                if (c) n.push(c[2]);
                else if (/^(4923|9938)7$/.test(t)) {
                    var i = new Promise(function(a, n) {
                        c = e[t] = [a, n]
                    });
                    n.push(c[2] = i);
                    var r = a.p + a.k(t),
                        o = Error();
                    d(t, r, function(n) {
                        if (a.o(e, t) && (0 !== (c = e[t]) && (e[t] = void 0), c)) {
                            if ("load" !== n.type) {
                                var d = n && n.type,
                                    i = n && n.target && n.target.src;
                                o.message = "Loading css chunk " + t + " failed.\n(" + d + ": " + i + ")", o.name = "ChunkLoadError", o.type = d, o.request = i, c[1](o)
                            } else c[0]()
                        }
                    })
                } else e[t] = 0
            }
        };
        var c = function(t, a) {
                var n = a[0];
                t && t(a);
                for (var d = 0; d < n.length; d++) void 0 === e[n[d]] && (e[n[d]] = 0)
            },
            i = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [];
        i.forEach(c.bind(null, 0)), i.push = c.bind(null, i.push.bind(i))
    })(), (() => {
        a.b = document.baseURI || self.location.href;
        var e = {
            12633: 0
        };
        a.f.j = function(t, n) {
            var d = a.o(e, t) ? e[t] : void 0;
            if (0 !== d) {
                if (d) n.push(d[2]);
                else {
                    var c = new Promise(function(a, n) {
                        d = e[t] = [a, n]
                    });
                    n.push(d[2] = c);
                    var i = a.p + a.u(t),
                        r = Error();
                    a.l(i, function(n) {
                        if (a.o(e, t) && (0 !== (d = e[t]) && (e[t] = void 0), d)) {
                            var c = n && ("load" === n.type ? "missing" : n.type),
                                i = n && n.target && n.target.src;
                            r.message = "Loading chunk " + t + " failed.\n(" + c + ": " + i + ")", r.name = "ChunkLoadError", r.type = c, r.request = i, d[1](r)
                        }
                    }, "chunk-" + t, t)
                }
            }
        }, a.O.j = function(t) {
            return 0 === e[t]
        };
        var t = function(t, n) {
                var d = n[0],
                    c = n[1],
                    i = n[2],
                    r, o, f = 0;
                if (d.some(function(t) {
                        return 0 !== e[t]
                    })) {
                    for (r in c) a.o(c, r) && (a.m[r] = c[r]);
                    if (i) var s = i(a)
                }
                for (t && t(n); f < d.length; f++) o = d[f], a.o(e, o) && e[o] && e[o][0](), e[o] = 0;
                return a.O(s)
            },
            n = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })();
    var n = a.O(void 0, ["49237", "99387", "24217", "62734", "42482", "57652", "39709", "64787", "2797", "67096", "84471", "70397", "79892"], function() {
        return a("650204")
    });
    n = a.O(n)
})();
//# sourceMappingURL=web.3fd9f5afe8e2856b7ce0.js.map