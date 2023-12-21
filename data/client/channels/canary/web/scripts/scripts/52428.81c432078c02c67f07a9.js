(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["52428"], {
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("872717"),
                o = n("95410"),
                u = n("913144"),
                i = n("211895"),
                s = n("26092"),
                r = n("599110"),
                a = n("315102"),
                d = n("730622"),
                c = n("49111"),
                S = n("191349"),
                E = n("782340"),
                _ = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, i.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = s.default.onClose;
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: i,
                            emailToken: s,
                            password: _,
                            avatar: T,
                            newPassword: f,
                            discriminator: p
                        } = e, {
                            close: O
                        } = t;
                        return (0, d.default)(e => {
                            let t = {
                                    username: n,
                                    email: i,
                                    email_token: s,
                                    password: _,
                                    avatar: T,
                                    new_password: f,
                                    ...e,
                                    discriminator: null != p && "" !== p ? p : void 0
                                },
                                u = o.default.get(c.DEVICE_TOKEN),
                                r = (0, S.getDevicePushProvider)();
                            null != r && null != u && (t.push_provider = r, t.push_token = u);
                            let a = o.default.get(c.DEVICE_VOIP_TOKEN);
                            return null != S.DEVICE_PUSH_VOIP_PROVIDER && null != a && (t.push_voip_provider = S.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = a), l.default.patch({
                                url: c.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: E.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => u.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return r.default.track(c.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, a.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, u.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), u.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != f && u.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: f
                            }), null != _ && null != f && u.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), O ? this.close() : this.submitComplete(), e
                        }, e => (u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        }), e))
                    }
                }
        },
        521590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GlobeEarthIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var o = n("669491"),
                u = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = o.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...r
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, u.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-4.16 5.85A9 9 0 0 0 15 3.52V4a3 3 0 0 1-3 3h-.77c-.13 0-.23.1-.23.23A2.77 2.77 0 0 1 8.23 10c-.13 0-.23.1-.23.23v1.52c0 .14.11.25.25.25H13a3 3 0 0 1 3 3v.77c0 .13.1.23.23.23 1.2 0 2.23.77 2.61 1.85ZM3.18 10.18A9 9 0 0 0 11 20.94v-2.7c0-.14-.1-.24-.23-.24h-.65A2.12 2.12 0 0 1 8 15.88c0-.56-.22-1.1-.62-1.5l-4.2-4.2Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        870346: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            }), n("222007"), n("70102");
            var l = n("627445"),
                o = n.n(l),
                u = n("917351"),
                i = n.n(u),
                s = n("288661"),
                r = n("446674"),
                a = n("913144"),
                d = n("605250"),
                c = n("773336"),
                S = n("50885"),
                E = n("563680"),
                _ = n("49111");
            let T = {},
                f = {},
                p = {},
                O = {},
                h = {},
                I = new Set,
                U = () => C.emitChange(),
                v = i.debounce(U, 150);

            function A(e) {
                let t = p[e];
                null != t && !t.closed && (T[e] = {
                    x: t.screenX,
                    y: t.screenY,
                    width: t.innerWidth,
                    height: t.innerHeight,
                    alwaysOnTop: !!c.isPlatformEmbedded && f[e]
                })
            }

            function m(e) {
                let t = p[e];
                null != t && (!t.closed && A(e), t.close(), ! function(e) {
                    let t = p[e];
                    o(null != t, "Popout window was null during unmount"), t.removeEventListener("focus", U), t.removeEventListener("blur", U), t.removeEventListener("resize", v);
                    let n = O[e];
                    o(null != n, "Window root was null while unmounting"), n.unmount(), delete p[e], delete f[e], delete h[e], delete O[e]
                }(e), C.emitChange())
            }

            function N(e) {
                let {
                    data: t
                } = e;
                if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
                let n = t.discordPopoutEvent;
                if (null != n.key) switch (n.type) {
                    case _.PopoutEventTypes.LOADED:
                        var l;
                        return l = n.key, void(I.has(l) && (! function(e) {
                            let t = p[e],
                                n = h[e];
                            if (null == t) {
                                new(0, d.default)("PopoutWindowStore").warn("Failed to open window", e);
                                return
                            }
                            let l = t.document;
                            (0, E.subscribeDocumentToFullScreenChange)(l, U), t.addEventListener("focus", U), t.addEventListener("blur", U), t.addEventListener("resize", v), ! function(e, t) {
                                let n = t.document,
                                    l = document.querySelectorAll('link[rel="stylesheet"]'),
                                    u = "".concat(window.location.protocol, "//").concat(window.location.host);
                                for (let e of l) {
                                    if (!e.href.startsWith(u)) continue;
                                    let t = n.createElement("link");
                                    t.href = e.href, t.rel = e.rel, t.integrity = e.integrity, o(null != n.head, "Document head was null"), n.head.appendChild(t)
                                }
                            }(0, t);
                            let u = (0, s.createRoot)(l.getElementById("app-mount"));
                            o(null != u, "No render target for popout!"), O[e] = u, u.render(n(e))
                        }(l), I.delete(l), C.emitChange()));
                    case _.PopoutEventTypes.UNLOADED:
                        return m(n.key)
                }
            }

            function w() {
                for (let e of Object.keys(p)) {
                    let t = p[e];
                    null != t && t.close()
                }
            }
            class P extends r.default.PersistedStore {
                initialize(e) {
                    window.addEventListener("message", N), window.addEventListener("beforeunload", w), T = null != e ? e : {}
                }
                getWindow(e) {
                    return p[e]
                }
                getWindowState(e) {
                    return T[e]
                }
                getWindowKeys() {
                    return Object.keys(p)
                }
                getWindowOpen(e) {
                    let t = p[e];
                    return null != t && !t.closed
                }
                getIsAlwaysOnTop(e) {
                    return !!f[e]
                }
                getWindowFocused(e) {
                    var t, n;
                    let l = p[e];
                    return null !== (n = null == l ? void 0 : null === (t = l.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== n && n
                }
                getState() {
                    return T
                }
                unmountWindow(e) {
                    return m(e)
                }
            }
            P.displayName = "PopoutWindowStore", P.persistKey = "PopoutWindowStore";
            let C = new P(a.default, {
                POPOUT_WINDOW_OPEN: function(e) {
                    let {
                        key: t,
                        features: n,
                        render: l
                    } = e;
                    if (c.isPlatformEmbedded && !S.default.supportsFeature(_.NativeFeatures.POPOUT_WINDOWS)) throw Error("Popout windows not supported on this native module version!");
                    let o = p[t];
                    if (null != o && !o.closed) return c.isPlatformEmbedded ? S.default.focus(t) : o.focus(), !1;
                    let {
                        defaultWidth: u,
                        defaultHeight: i,
                        defaultAlwaysOnTop: s = !1,
                        ...r
                    } = n, a = r, d = s, E = T[t];
                    if (null != E) {
                        let {
                            width: e,
                            height: t,
                            x: n,
                            y: l,
                            alwaysOnTop: o
                        } = E;
                        d = null != o ? o : s, a = {
                            width: null != e && 0 !== e ? e : u,
                            height: null != t && 0 !== t ? t : i,
                            left: n,
                            top: l,
                            ...a
                        }
                    }
                    let O = window.open(_.Routes.POPOUT_WINDOW, t, function(e) {
                        let t = "";
                        for (let n of Object.keys(e)) {
                            let l = e[n];
                            void 0 !== l && ("boolean" == typeof l && (l = l ? "yes" : "no"), t += "".concat(n, "=").concat(l, ","))
                        }
                        return t
                    }(a));
                    O.windowKey = t, null == O || O.focus(), p[t] = O, h[t] = l, c.isPlatformEmbedded && (S.default.setAlwaysOnTop(t, d), f[t] = d, S.default.isAlwaysOnTop(t).then(e => f[t] = e)), I.add(t)
                },
                POPOUT_WINDOW_CLOSE: function(e) {
                    let {
                        key: t
                    } = e, n = p[t];
                    null != n && !n.closed && (A(t), n.close())
                },
                POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
                    let {
                        key: t,
                        alwaysOnTop: n
                    } = e;
                    c.isPlatformEmbedded && (S.default.setAlwaysOnTop(t, n), f[t] = n, S.default.isAlwaysOnTop(t).then(e => f[t] = e))
                },
                LOGOUT: w
            });
            var L = C
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("913144"),
                o = n("54239"),
                u = n("49111");

            function i() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                l.default.dispatch({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t,
                    ...n
                }), (0, o.pushLayer)(u.Layers.USER_SETTINGS)
            }
        },
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var l = n("917351"),
                o = n.n(l),
                u = n("446674"),
                i = n("913144"),
                s = n("697218"),
                r = n("49111");
            let a = r.FormStates.CLOSED,
                d = null,
                c = null,
                S = {},
                E = {},
                _ = {},
                T = null,
                f = null,
                p = !1,
                O = !1,
                h = null,
                I = null,
                U = null,
                v = [],
                A = null,
                m = null;

            function N(e) {
                var t, n, l, o, u, i;
                let d = s.default.getCurrentUser();
                if (null == d) return w();
                c = null !== (t = e.section) && void 0 !== t ? t : c, A = null !== (n = e.section) && void 0 !== n ? n : c, null != e.subsection && null != c && (S[c] = e.subsection), null != e.scrollPosition && null != c && (E[c] = e.scrollPosition), O = !!e.openWithoutBackstack, a = r.FormStates.OPEN, _ = {}, f = {
                    ...T = {
                        [r.UserSettingsSections.ACCOUNT]: {
                            userId: d.id,
                            username: d.username,
                            discriminator: d.discriminator,
                            email: d.email,
                            avatar: d.avatar,
                            password: "",
                            newPassword: null,
                            claimed: d.isClaimed()
                        }
                    }
                }, I = null !== (l = e.onClose) && void 0 !== l ? l : null, U = null !== (o = e.analyticsLocation) && void 0 !== o ? o : null, v = null !== (u = e.analyticsLocations) && void 0 !== u ? u : [], m = null !== (i = e.impressionSource) && void 0 !== i ? i : null
            }

            function w() {
                a = r.FormStates.CLOSED, p = !1, T = null, A = null, f = null, d = null, c = null, S = {}, E = {}, I = null, U = null, v = [], m = null
            }

            function P() {
                a = r.FormStates.OPEN, _ = {}
            }
            class C extends u.default.Store {
                initialize() {
                    this.waitFor(s.default)
                }
                hasChanges() {
                    return null != f && null != T && (!!this.isOpen() || h === r.DrawerTabTypes.USER_SETTINGS) && !o.isEqual(f, T)
                }
                isOpen() {
                    return p
                }
                getPreviousSection() {
                    return d
                }
                getSection() {
                    return c
                }
                getSubsection() {
                    return null != c ? S[c] : null
                }
                getScrollPosition() {
                    return null != c ? E[c] : null
                }
                shouldOpenWithoutBackstack() {
                    return O
                }
                getProps() {
                    return {
                        submitting: a === r.FormStates.SUBMITTING,
                        section: c,
                        subsection: null != c ? S[c] : null,
                        scrollPosition: null != c ? E[c] : null,
                        settings: f,
                        errors: _,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: O,
                        analyticsLocation: U,
                        analyticsLocations: v,
                        initialSection: A,
                        impressionSource: m
                    }
                }
                get onClose() {
                    return I
                }
            }
            C.displayName = "UserSettingsModalStore";
            var L = new C(i.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    p = !0, N(e)
                },
                USER_SETTINGS_MODAL_INIT: N,
                USER_SETTINGS_MODAL_CLOSE: w,
                LOGOUT: w,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    a = r.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (a !== r.FormStates.SUBMITTING) return !1;
                    a = r.FormStates.OPEN, c = r.UserSettingsSections.ACCOUNT, _ = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    d = c, c = e.section, U = null, v = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (S[c] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete S[t] : null != c && delete S[c]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete E[t] : null != c && delete E[c]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == f && (f = {});
                    let n = f[r.UserSettingsSections.ACCOUNT];
                    f[r.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: P,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = s.default.getCurrentUser();
                    P(), null != e && (f = {
                        ...T = {
                            [r.UserSettingsSections.ACCOUNT]: {
                                userId: e.id,
                                username: e.username,
                                discriminator: e.discriminator,
                                email: e.email,
                                avatar: e.avatar,
                                password: "",
                                newPassword: null,
                                claimed: e.isClaimed()
                            }
                        }
                    })
                },
                DRAWER_SELECT_TAB: function(e) {
                    return h = e.tab, null == c && h === r.DrawerTabTypes.USER_SETTINGS && N({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        }
    }
]);
//# sourceMappingURL=52428.81c432078c02c67f07a9.js.map