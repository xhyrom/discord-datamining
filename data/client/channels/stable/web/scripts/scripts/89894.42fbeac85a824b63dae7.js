(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["89894"], {
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("872717"),
                o = n("95410"),
                i = n("913144"),
                u = n("211895"),
                r = n("26092"),
                s = n("599110"),
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
                        (0, u.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = r.default.onClose;
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: u,
                            emailToken: r,
                            password: _,
                            avatar: T,
                            newPassword: p,
                            discriminator: f
                        } = e, {
                            close: O
                        } = t;
                        return (0, d.default)(e => {
                            let t = {
                                    username: n,
                                    email: u,
                                    email_token: r,
                                    password: _,
                                    avatar: T,
                                    new_password: p,
                                    ...e,
                                    discriminator: null != f && "" !== f ? f : void 0
                                },
                                i = o.default.get(c.DEVICE_TOKEN),
                                s = (0, S.getDevicePushProvider)();
                            null != s && null != i && (t.push_provider = s, t.push_token = i);
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
                                onEarlyClose: () => i.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return s.default.track(c.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, a.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, i.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), i.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != p && i.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: p
                            }), null != _ && null != p && i.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), O ? this.close() : this.submitComplete(), e
                        }, e => (i.default.dispatch({
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
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var o = n("669491"),
                i = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = o.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...s
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM18.8426 17.8466C20.1877 16.2738 21 14.2318 21 12C21 8.08134 18.4956 4.74763 15 3.51212V4C15 5.65685 13.6569 7 12 7H11.2308C11.1033 7 11 7.10332 11 7.23077C11 8.76017 9.76017 10 8.23077 10C8.10332 10 8 10.1033 8 10.2308V11.75C8 11.8881 8.11193 12 8.25 12H13C14.6569 12 16 13.3431 16 15V15.7692C16 15.8967 16.1033 16 16.2308 16C17.4367 16 18.4625 16.7708 18.8426 17.8466ZM3.18342 10.1834C3.06316 10.7702 3 11.3777 3 12C3 16.6326 6.50005 20.4476 11 20.9451V18.2308C11 18.1033 10.8967 18 10.7692 18H10.1213C8.94975 18 8 17.0503 8 15.8787C8 15.3161 7.7765 14.7765 7.37868 14.3787L3.18342 10.1834Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: r
                    })
                })
            }
        },
        692171: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("446674"),
                o = n("872717"),
                i = n("913144"),
                u = n("49111");
            let r = Object.freeze({
                    burstCredits: 0,
                    wasReplenishedToday: !1,
                    nextReplenishAt: null,
                    isReactionPickerBurstToggled: null,
                    emojiReactionForCoachmark: null,
                    guildBurstPreviews: {}
                }),
                s = {
                    ...r
                };
            class a extends l.default.PersistedStore {
                initialize(e) {
                    s = null != e ? e : {
                        ...r
                    }
                }
                get remainingBurstCurrency() {
                    return s.burstCredits
                }
                get hasAvailableBurstCurrency() {
                    return this.remainingBurstCurrency > 0
                }
                get nextReplenishAt() {
                    return s.nextReplenishAt
                }
                get isReactionPickerBurstToggled() {
                    return null != s.isReactionPickerBurstToggled && s.isReactionPickerBurstToggled
                }
                get emojiReactionToTargetForCoachmark() {
                    return s.emojiReactionForCoachmark
                }
                getBurstedPreviewData(e) {
                    var t;
                    return null !== (t = s.guildBurstPreviews[e]) && void 0 !== t ? t : void 0
                }
                getState() {
                    return s
                }
            }
            a.displayName = "BurstReactionStore", a.persistKey = "BurstReactionStore33";
            var d = new a(i.default, {
                BURST_CREDITS_SET: e => {
                    let {
                        amount: t,
                        wasReplenishedToday: n,
                        nextReplenishAt: l
                    } = e;
                    s.burstCredits = t, s.wasReplenishedToday = n, s.nextReplenishAt = l
                },
                POST_CONNECTION_OPEN: () => {
                    o.default.get({
                        url: u.Endpoints.BURST_CREDIT_BALANCE
                    }).then(e => {
                        i.default.dispatch({
                            type: "BURST_CREDITS_SET",
                            amount: e.body.amount,
                            wasReplenishedToday: e.body.replenished_today,
                            nextReplenishAt: new Date(e.body.next_replenish_at)
                        })
                    }).catch(() => {})
                },
                BURST_REACTION_PICKER_TOGGLE: e => {
                    let {
                        value: t
                    } = e;
                    s.isReactionPickerBurstToggled = t
                },
                BURST_REACTION_SHOW_FREE_USER_SENT_POPOUT: e => {
                    let {
                        emoji: t
                    } = e;
                    s.emojiReactionForCoachmark = null != t ? t : null
                },
                BURST_GUILD_PREVIEW_SET: e => {
                    let {
                        guildId: t,
                        channelId: n,
                        messageId: l,
                        emoji: o
                    } = e;
                    s.guildBurstPreviews[t] = {
                        channelId: n,
                        messageId: l,
                        emoji: o
                    }
                },
                BURST_GUILD_PREVIEW_CLEAR: e => {
                    let {
                        guildId: t
                    } = e;
                    delete s.guildBurstPreviews[t]
                }
            })
        },
        870346: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("222007"), n("70102");
            var l = n("627445"),
                o = n.n(l),
                i = n("917351"),
                u = n.n(i),
                r = n("288661"),
                s = n("446674"),
                a = n("913144"),
                d = n("605250"),
                c = n("773336"),
                S = n("50885"),
                E = n("563680"),
                _ = n("49111");
            let T = {},
                p = {},
                f = {},
                O = {},
                h = {},
                C = new Set,
                R = () => N.emitChange(),
                I = u.debounce(R, 150);

            function U(e) {
                let t = f[e];
                null != t && !t.closed && (T[e] = {
                    x: t.screenX,
                    y: t.screenY,
                    width: t.innerWidth,
                    height: t.innerHeight,
                    alwaysOnTop: !!c.isPlatformEmbedded && p[e]
                })
            }

            function P(e) {
                let t = f[e];
                null != t && (!t.closed && U(e), t.close(), ! function(e) {
                    let t = f[e];
                    o(null != t, "Popout window was null during unmount"), t.removeEventListener("focus", R), t.removeEventListener("blur", R), t.removeEventListener("resize", I);
                    let n = O[e];
                    o(null != n, "Window root was null while unmounting"), n.unmount(), delete f[e], delete p[e], delete h[e], delete O[e]
                }(e), N.emitChange())
            }

            function v(e) {
                let {
                    data: t
                } = e;
                if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
                let n = t.discordPopoutEvent;
                if (null != n.key) switch (n.type) {
                    case _.PopoutEventTypes.LOADED:
                        var l;
                        return l = n.key, void(C.has(l) && (! function(e) {
                            let t = f[e],
                                n = h[e];
                            if (null == t) {
                                new(0, d.default)("PopoutWindowStore").warn("Failed to open window", e);
                                return
                            }
                            let l = t.document;
                            (0, E.subscribeDocumentToFullScreenChange)(l, R), t.addEventListener("focus", R), t.addEventListener("blur", R), t.addEventListener("resize", I), ! function(e, t) {
                                let n = t.document,
                                    l = document.querySelectorAll('link[rel="stylesheet"]'),
                                    i = "".concat(window.location.protocol, "//").concat(window.location.host);
                                for (let e of l) {
                                    if (!e.href.startsWith(i)) continue;
                                    let t = n.createElement("link");
                                    t.href = e.href, t.rel = e.rel, t.integrity = e.integrity, o(null != n.head, "Document head was null"), n.head.appendChild(t)
                                }
                            }(0, t);
                            let i = (0, r.createRoot)(l.getElementById("app-mount"));
                            o(null != i, "No render target for popout!"), O[e] = i, i.render(n(e))
                        }(l), C.delete(l), N.emitChange()));
                    case _.PopoutEventTypes.UNLOADED:
                        return P(n.key)
                }
            }

            function g() {
                for (let e of Object.keys(f)) {
                    let t = f[e];
                    null != t && t.close()
                }
            }
            class m extends s.default.PersistedStore {
                initialize(e) {
                    window.addEventListener("message", v), window.addEventListener("beforeunload", g), T = null != e ? e : {}
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
                    return !!p[e]
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
            m.displayName = "PopoutWindowStore", m.persistKey = "PopoutWindowStore";
            let N = new m(a.default, {
                POPOUT_WINDOW_OPEN: function(e) {
                    let {
                        key: t,
                        features: n,
                        render: l
                    } = e;
                    if (c.isPlatformEmbedded && !S.default.supportsFeature(_.NativeFeatures.POPOUT_WINDOWS)) throw Error("Popout windows not supported on this native module version!");
                    let o = f[t];
                    if (null != o && !o.closed) return c.isPlatformEmbedded ? S.default.focus(t) : o.focus(), !1;
                    let {
                        defaultWidth: i,
                        defaultHeight: u,
                        defaultAlwaysOnTop: r = !1,
                        ...s
                    } = n, a = s, d = r, E = T[t];
                    if (null != E) {
                        let {
                            width: e,
                            height: t,
                            x: n,
                            y: l,
                            alwaysOnTop: o
                        } = E;
                        d = null != o ? o : r, a = {
                            width: null != e && 0 !== e ? e : i,
                            height: null != t && 0 !== t ? t : u,
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
                    O.windowKey = t, null == O || O.focus(), f[t] = O, h[t] = l, c.isPlatformEmbedded && (S.default.setAlwaysOnTop(t, d), p[t] = d, S.default.isAlwaysOnTop(t).then(e => p[t] = e)), C.add(t)
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
                    c.isPlatformEmbedded && (S.default.setAlwaysOnTop(t, n), p[t] = n, S.default.isAlwaysOnTop(t).then(e => p[t] = e))
                },
                LOGOUT: g
            });
            var A = N
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return u
                },
                getDevicePushProvider: function() {
                    return r
                }
            });
            var l, o, i = n("773336");
            let u = null;

            function r() {
                return (0, i.isAndroid)(), null
            }(l = o || (o = {})).REMINDER = "reminder", l.TOP_MESSAGE_PUSH = "top_messages_push", l.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("913144"),
                o = n("54239"),
                i = n("49111");

            function u() {
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
                }), (0, o.pushLayer)(i.Layers.USER_SETTINGS)
            }
        },
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var l = n("917351"),
                o = n.n(l),
                i = n("446674"),
                u = n("913144"),
                r = n("697218"),
                s = n("49111");
            let a = s.FormStates.CLOSED,
                d = null,
                c = null,
                S = {},
                E = {},
                _ = {},
                T = null,
                p = null,
                f = !1,
                O = !1,
                h = null,
                C = null,
                R = null,
                I = [],
                U = null,
                P = null;

            function v(e) {
                var t, n, l, o, i, u;
                let d = r.default.getCurrentUser();
                if (null == d) return g();
                c = null !== (t = e.section) && void 0 !== t ? t : c, U = null !== (n = e.section) && void 0 !== n ? n : c, null != e.subsection && null != c && (S[c] = e.subsection), null != e.scrollPosition && null != c && (E[c] = e.scrollPosition), O = !!e.openWithoutBackstack, a = s.FormStates.OPEN, _ = {}, p = {
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
                }, C = null !== (l = e.onClose) && void 0 !== l ? l : null, R = null !== (o = e.analyticsLocation) && void 0 !== o ? o : null, I = null !== (i = e.analyticsLocations) && void 0 !== i ? i : [], P = null !== (u = e.impressionSource) && void 0 !== u ? u : null
            }

            function g() {
                a = s.FormStates.CLOSED, f = !1, T = null, U = null, p = null, d = null, c = null, S = {}, E = {}, C = null, R = null, I = [], P = null
            }

            function m() {
                a = s.FormStates.OPEN, _ = {}
            }
            class N extends i.default.Store {
                initialize() {
                    this.waitFor(r.default)
                }
                hasChanges() {
                    return null != p && null != T && (!!this.isOpen() || h === s.DrawerTabTypes.USER_SETTINGS) && !o.isEqual(p, T)
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
                    return null != c ? E[c] : null
                }
                shouldOpenWithoutBackstack() {
                    return O
                }
                getProps() {
                    return {
                        submitting: a === s.FormStates.SUBMITTING,
                        section: c,
                        subsection: null != c ? S[c] : null,
                        scrollPosition: null != c ? E[c] : null,
                        settings: p,
                        errors: _,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: O,
                        analyticsLocation: R,
                        analyticsLocations: I,
                        initialSection: U,
                        impressionSource: P
                    }
                }
                get onClose() {
                    return C
                }
            }
            N.displayName = "UserSettingsModalStore";
            var A = new N(u.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    f = !0, v(e)
                },
                USER_SETTINGS_MODAL_INIT: v,
                USER_SETTINGS_MODAL_CLOSE: g,
                LOGOUT: g,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    a = s.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (a !== s.FormStates.SUBMITTING) return !1;
                    a = s.FormStates.OPEN, c = s.UserSettingsSections.ACCOUNT, _ = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    d = c, c = e.section, R = null, I = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (S[c] = e.subsection)
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
                    null == p && (p = {});
                    let n = p[s.UserSettingsSections.ACCOUNT];
                    p[s.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: m,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = r.default.getCurrentUser();
                    m(), null != e && (p = {
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
                    return h = e.tab, null == c && h === s.DrawerTabTypes.USER_SETTINGS && v({
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
//# sourceMappingURL=89894.42fbeac85a824b63dae7.js.map