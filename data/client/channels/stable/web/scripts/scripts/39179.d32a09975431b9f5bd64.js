(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["39179"], {
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("872717"),
                o = n("95410"),
                u = n("913144"),
                i = n("211895"),
                r = n("26092"),
                s = n("599110"),
                a = n("315102"),
                d = n("730622"),
                c = n("49111"),
                S = n("191349"),
                _ = n("782340"),
                E = {
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
                        let e = r.default.onClose;
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
                            emailToken: r,
                            password: E,
                            avatar: T,
                            newPassword: O,
                            discriminator: f
                        } = e, {
                            close: p
                        } = t;
                        return (0, d.default)(e => {
                            let t = {
                                    username: n,
                                    email: i,
                                    email_token: r,
                                    password: E,
                                    avatar: T,
                                    new_password: O,
                                    ...e,
                                    discriminator: null != f && "" !== f ? f : void 0
                                },
                                u = o.default.get(c.DEVICE_TOKEN),
                                s = (0, S.getDevicePushProvider)();
                            null != s && null != u && (t.push_provider = s, t.push_token = u);
                            let a = o.default.get(c.DEVICE_VOIP_TOKEN);
                            return null != S.DEVICE_PUSH_VOIP_PROVIDER && null != a && (t.push_voip_provider = S.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = a), l.default.patch({
                                url: c.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
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
                            return s.default.track(c.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, a.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, u.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), u.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != O && u.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: O
                            }), null != E && null != O && u.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), p ? this.close() : this.submitComplete(), e
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
                    colorClass: r = "",
                    ...s
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, u.default)(s),
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
                        className: r
                    })
                })
            }
        },
        870346: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            }), n("222007"), n("70102");
            var l = n("627445"),
                o = n.n(l),
                u = n("917351"),
                i = n.n(u),
                r = n("288661"),
                s = n("446674"),
                a = n("913144"),
                d = n("605250"),
                c = n("773336"),
                S = n("50885"),
                _ = n("563680"),
                E = n("49111");
            let T = {},
                O = {},
                f = {},
                p = {},
                I = {},
                h = new Set,
                N = () => C.emitChange(),
                A = i.debounce(N, 150);

            function U(e) {
                let t = f[e];
                null != t && !t.closed && (T[e] = {
                    x: t.screenX,
                    y: t.screenY,
                    width: t.innerWidth,
                    height: t.innerHeight,
                    alwaysOnTop: !!c.isPlatformEmbedded && O[e]
                })
            }

            function P(e) {
                let t = f[e];
                null != t && (!t.closed && U(e), t.close(), ! function(e) {
                    let t = f[e];
                    o(null != t, "Popout window was null during unmount"), t.removeEventListener("focus", N), t.removeEventListener("blur", N), t.removeEventListener("resize", A);
                    let n = p[e];
                    o(null != n, "Window root was null while unmounting"), n.unmount(), delete f[e], delete O[e], delete I[e], delete p[e]
                }(e), C.emitChange())
            }

            function v(e) {
                let {
                    data: t
                } = e;
                if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
                let n = t.discordPopoutEvent;
                if (null != n.key) switch (n.type) {
                    case E.PopoutEventTypes.LOADED:
                        var l;
                        return l = n.key, void(h.has(l) && (! function(e) {
                            let t = f[e],
                                n = I[e];
                            if (null == t) {
                                new(0, d.default)("PopoutWindowStore").warn("Failed to open window", e);
                                return
                            }
                            let l = t.document;
                            (0, _.subscribeDocumentToFullScreenChange)(l, N), t.addEventListener("focus", N), t.addEventListener("blur", N), t.addEventListener("resize", A), ! function(e, t) {
                                let n = t.document,
                                    l = document.querySelectorAll('link[rel="stylesheet"]'),
                                    u = "".concat(window.location.protocol, "//").concat(window.location.host);
                                for (let e of l) {
                                    if (!e.href.startsWith(u)) continue;
                                    let t = n.createElement("link");
                                    t.href = e.href, t.rel = e.rel, t.integrity = e.integrity, o(null != n.head, "Document head was null"), n.head.appendChild(t)
                                }
                            }(0, t);
                            let u = (0, r.createRoot)(l.getElementById("app-mount"));
                            o(null != u, "No render target for popout!"), p[e] = u, u.render(n(e))
                        }(l), h.delete(l), C.emitChange()));
                    case E.PopoutEventTypes.UNLOADED:
                        return P(n.key)
                }
            }

            function m() {
                for (let e of Object.keys(f)) {
                    let t = f[e];
                    null != t && t.close()
                }
            }
            class D extends s.default.PersistedStore {
                initialize(e) {
                    window.addEventListener("message", v), window.addEventListener("beforeunload", m), T = null != e ? e : {}
                }
                getWindow(e) {
                    return f[e]
                }
                getWindowState(e) {
                    return T[e]
                }
                getWindowKeys() {
                    return Object.keys(f)
                }
                getWindowOpen(e) {
                    let t = f[e];
                    return null != t && !t.closed
                }
                getIsAlwaysOnTop(e) {
                    return !!O[e]
                }
                getWindowFocused(e) {
                    var t, n;
                    let l = f[e];
                    return null !== (n = null == l ? void 0 : null === (t = l.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== n && n
                }
                getState() {
                    return T
                }
                unmountWindow(e) {
                    return P(e)
                }
            }
            D.displayName = "PopoutWindowStore", D.persistKey = "PopoutWindowStore";
            let C = new D(a.default, {
                POPOUT_WINDOW_OPEN: function(e) {
                    let {
                        key: t,
                        features: n,
                        render: l
                    } = e;
                    if (c.isPlatformEmbedded && !S.default.supportsFeature(E.NativeFeatures.POPOUT_WINDOWS)) throw Error("Popout windows not supported on this native module version!");
                    let o = f[t];
                    if (null != o && !o.closed) return c.isPlatformEmbedded ? S.default.focus(t) : o.focus(), !1;
                    let {
                        defaultWidth: u,
                        defaultHeight: i,
                        defaultAlwaysOnTop: r = !1,
                        ...s
                    } = n, a = s, d = r, _ = T[t];
                    if (null != _) {
                        let {
                            width: e,
                            height: t,
                            x: n,
                            y: l,
                            alwaysOnTop: o
                        } = _;
                        d = null != o ? o : r, a = {
                            width: null != e && 0 !== e ? e : u,
                            height: null != t && 0 !== t ? t : i,
                            left: n,
                            top: l,
                            ...a
                        }
                    }
                    let p = window.open(E.Routes.POPOUT_WINDOW, t, function(e) {
                        let t = "";
                        for (let n of Object.keys(e)) {
                            let l = e[n];
                            void 0 !== l && ("boolean" == typeof l && (l = l ? "yes" : "no"), t += "".concat(n, "=").concat(l, ","))
                        }
                        return t
                    }(a));
                    p.windowKey = t, null == p || p.focus(), f[t] = p, I[t] = l, c.isPlatformEmbedded && (S.default.setAlwaysOnTop(t, d), O[t] = d, S.default.isAlwaysOnTop(t).then(e => O[t] = e)), h.add(t)
                },
                POPOUT_WINDOW_CLOSE: function(e) {
                    let {
                        key: t
                    } = e, n = f[t];
                    null != n && !n.closed && (U(t), n.close())
                },
                POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
                    let {
                        key: t,
                        alwaysOnTop: n
                    } = e;
                    c.isPlatformEmbedded && (S.default.setAlwaysOnTop(t, n), O[t] = n, S.default.isAlwaysOnTop(t).then(e => O[t] = e))
                },
                LOGOUT: m
            });
            var w = C
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
        917219: function(e, t, n) {
            "use strict";
            var l, o, u, i;
            n.r(t), n.d(t, {
                VideoFilterType: function() {
                    return l
                },
                DefaultVideoBackground: function() {
                    return o
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return r
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return s
                },
                BLUR_BACKGROUND_OPTION: function() {
                    return a
                },
                BACKGROUND_REPLACEMENT_SIZE: function() {
                    return d
                },
                MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return c
                }
            }), n("808653"), (u = l || (l = {}))[u.BACKGROUND = 0] = "BACKGROUND", (i = o || (o = {}))[i.OPTION_1 = 0] = "OPTION_1", i[i.OPTION_2 = 1] = "OPTION_2", i[i.OPTION_3 = 2] = "OPTION_3", i[i.OPTION_4 = 3] = "OPTION_4", i[i.OPTION_7 = 7] = "OPTION_7", i[i.OPTION_8 = 8] = "OPTION_8", i[i.OPTION_9 = 9] = "OPTION_9", i[i.OPTION_10 = 10] = "OPTION_10";
            let r = [7, 8, 9, 10],
                s = [7, 8, 9, 10, 0, 1, 2, 3].reduce((e, t, n) => ({
                    ...e,
                    [t]: n
                }), {}),
                a = "blur",
                d = {
                    width: 1280,
                    height: 720
                },
                c = 10485760
        },
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var l = n("917351"),
                o = n.n(l),
                u = n("446674"),
                i = n("913144"),
                r = n("697218"),
                s = n("49111");
            let a = s.FormStates.CLOSED,
                d = null,
                c = null,
                S = {},
                _ = {},
                E = {},
                T = null,
                O = null,
                f = !1,
                p = !1,
                I = null,
                h = null,
                N = null,
                A = [],
                U = null,
                P = null;

            function v(e) {
                var t, n, l, o, u, i;
                let d = r.default.getCurrentUser();
                if (null == d) return m();
                c = null !== (t = e.section) && void 0 !== t ? t : c, U = null !== (n = e.section) && void 0 !== n ? n : c, null != e.subsection && null != c && (S[c] = e.subsection), null != e.scrollPosition && null != c && (_[c] = e.scrollPosition), p = !!e.openWithoutBackstack, a = s.FormStates.OPEN, E = {}, O = {
                    ...T = {
                        [s.UserSettingsSections.ACCOUNT]: {
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
                }, h = null !== (l = e.onClose) && void 0 !== l ? l : null, N = null !== (o = e.analyticsLocation) && void 0 !== o ? o : null, A = null !== (u = e.analyticsLocations) && void 0 !== u ? u : [], P = null !== (i = e.impressionSource) && void 0 !== i ? i : null
            }

            function m() {
                a = s.FormStates.CLOSED, f = !1, T = null, U = null, O = null, d = null, c = null, S = {}, _ = {}, h = null, N = null, A = [], P = null
            }

            function D() {
                a = s.FormStates.OPEN, E = {}
            }
            class C extends u.default.Store {
                initialize() {
                    this.waitFor(r.default)
                }
                hasChanges() {
                    return null != O && null != T && (!!this.isOpen() || I === s.DrawerTabTypes.USER_SETTINGS) && !o.isEqual(O, T)
                }
                isOpen() {
                    return f
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
                    return null != c ? _[c] : null
                }
                shouldOpenWithoutBackstack() {
                    return p
                }
                getProps() {
                    return {
                        submitting: a === s.FormStates.SUBMITTING,
                        section: c,
                        subsection: null != c ? S[c] : null,
                        scrollPosition: null != c ? _[c] : null,
                        settings: O,
                        errors: E,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: p,
                        analyticsLocation: N,
                        analyticsLocations: A,
                        initialSection: U,
                        impressionSource: P
                    }
                }
                get onClose() {
                    return h
                }
            }
            C.displayName = "UserSettingsModalStore";
            var w = new C(i.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    f = !0, v(e)
                },
                USER_SETTINGS_MODAL_INIT: v,
                USER_SETTINGS_MODAL_CLOSE: m,
                LOGOUT: m,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    a = s.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (a !== s.FormStates.SUBMITTING) return !1;
                    a = s.FormStates.OPEN, c = s.UserSettingsSections.ACCOUNT, E = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    d = c, c = e.section, N = null, A = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (S[c] = e.subsection)
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
                    null != t ? delete _[t] : null != c && delete _[c]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == O && (O = {});
                    let n = O[s.UserSettingsSections.ACCOUNT];
                    O[s.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: D,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = r.default.getCurrentUser();
                    D(), null != e && (O = {
                        ...T = {
                            [s.UserSettingsSections.ACCOUNT]: {
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
                    return I = e.tab, null == c && I === s.DrawerTabTypes.USER_SETTINGS && v({
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
//# sourceMappingURL=39179.d32a09975431b9f5bd64.js.map