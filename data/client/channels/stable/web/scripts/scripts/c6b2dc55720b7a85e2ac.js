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
                            close: h
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
                            }), h ? this.close() : this.submitComplete(), e
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
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-4.157 5.847A9.004 9.004 0 0 0 15 3.513V4a3 3 0 0 1-3 3h-.77a.23.23 0 0 0-.23.23A2.77 2.77 0 0 1 8.23 10a.23.23 0 0 0-.23.23v1.52c0 .138.112.25.25.25H13a3 3 0 0 1 3 3v.77c0 .127.103.23.23.23a2.77 2.77 0 0 1 2.613 1.847Zm-15.66-7.664A9.001 9.001 0 0 0 11 20.945v-2.714a.23.23 0 0 0-.23-.231h-.649A2.121 2.121 0 0 1 8 15.879c0-.563-.223-1.102-.621-1.5l-4.196-4.196Z",
                        clipRule: "evenodd",
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
                    return C
                }
            });
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
                h = {},
                O = {},
                R = new Set,
                I = () => N.emitChange(),
                U = u.debounce(I, 150);

            function v(e) {
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
                null != t && (!t.closed && v(e), t.close(), ! function(e) {
                    let t = f[e];
                    o(null != t, "Popout window was null during unmount"), t.removeEventListener("focus", I), t.removeEventListener("blur", I), t.removeEventListener("resize", U);
                    let n = h[e];
                    o(null != n, "Window root was null while unmounting"), n.unmount(), delete f[e], delete p[e], delete O[e], delete h[e]
                }(e), N.emitChange())
            }

            function g(e) {
                let {
                    data: t
                } = e;
                if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
                let n = t.discordPopoutEvent;
                if (null != n.key) switch (n.type) {
                    case _.PopoutEventTypes.LOADED:
                        var l;
                        return l = n.key, void(R.has(l) && (! function(e) {
                            let t = f[e],
                                n = O[e];
                            if (null == t) {
                                new(0, d.default)("PopoutWindowStore").warn("Failed to open window", e);
                                return
                            }
                            let l = t.document;
                            (0, E.subscribeDocumentToFullScreenChange)(l, I), t.addEventListener("focus", I), t.addEventListener("blur", I), t.addEventListener("resize", U), ! function(e, t) {
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
                            o(null != i, "No render target for popout!"), h[e] = i, i.render(n(e))
                        }(l), R.delete(l), N.emitChange()));
                    case _.PopoutEventTypes.UNLOADED:
                        return P(n.key)
                }
            }

            function m() {
                for (let e of Object.keys(f)) {
                    let t = f[e];
                    null != t && t.close()
                }
            }
            class A extends s.default.PersistedStore {
                initialize(e) {
                    window.addEventListener("message", g), window.addEventListener("beforeunload", m), T = null != e ? e : {}
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
            A.displayName = "PopoutWindowStore", A.persistKey = "PopoutWindowStore";
            let N = new A(a.default, {
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
                    let h = window.open(_.Routes.POPOUT_WINDOW, t, function(e) {
                        let t = "";
                        for (let n of Object.keys(e)) {
                            let l = e[n];
                            void 0 !== l && ("boolean" == typeof l && (l = l ? "yes" : "no"), t += "".concat(n, "=").concat(l, ","))
                        }
                        return t
                    }(a));
                    h.windowKey = t, null == h || h.focus(), f[t] = h, O[t] = l, c.isPlatformEmbedded && (S.default.setAlwaysOnTop(t, d), p[t] = d, S.default.isAlwaysOnTop(t).then(e => p[t] = e)), R.add(t)
                },
                POPOUT_WINDOW_CLOSE: function(e) {
                    let {
                        key: t
                    } = e, n = f[t];
                    null != n && !n.closed && (v(t), n.close())
                },
                POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
                    let {
                        key: t,
                        alwaysOnTop: n
                    } = e;
                    c.isPlatformEmbedded && (S.default.setAlwaysOnTop(t, n), p[t] = n, S.default.isAlwaysOnTop(t).then(e => p[t] = e))
                },
                LOGOUT: m
            });
            var C = N
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
                    return C
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
                h = !1,
                O = null,
                R = null,
                I = null,
                U = [],
                v = null,
                P = null;

            function g(e) {
                var t, n, l, o, i, u;
                let d = r.default.getCurrentUser();
                if (null == d) return m();
                c = null !== (t = e.section) && void 0 !== t ? t : c, v = null !== (n = e.section) && void 0 !== n ? n : c, null != e.subsection && null != c && (S[c] = e.subsection), null != e.scrollPosition && null != c && (E[c] = e.scrollPosition), h = !!e.openWithoutBackstack, a = s.FormStates.OPEN, _ = {}, p = {
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
                }, R = null !== (l = e.onClose) && void 0 !== l ? l : null, I = null !== (o = e.analyticsLocation) && void 0 !== o ? o : null, U = null !== (i = e.analyticsLocations) && void 0 !== i ? i : [], P = null !== (u = e.impressionSource) && void 0 !== u ? u : null
            }

            function m() {
                a = s.FormStates.CLOSED, f = !1, T = null, v = null, p = null, d = null, c = null, S = {}, E = {}, R = null, I = null, U = [], P = null
            }

            function A() {
                a = s.FormStates.OPEN, _ = {}
            }
            class N extends i.default.Store {
                initialize() {
                    this.waitFor(r.default)
                }
                hasChanges() {
                    return null != p && null != T && (!!this.isOpen() || O === s.DrawerTabTypes.USER_SETTINGS) && !o.isEqual(p, T)
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
                    return h
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
                        openWithoutBackstack: h,
                        analyticsLocation: I,
                        analyticsLocations: U,
                        initialSection: v,
                        impressionSource: P
                    }
                }
                get onClose() {
                    return R
                }
            }
            N.displayName = "UserSettingsModalStore";
            var C = new N(u.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    f = !0, g(e)
                },
                USER_SETTINGS_MODAL_INIT: g,
                USER_SETTINGS_MODAL_CLOSE: m,
                LOGOUT: m,
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
                    d = c, c = e.section, I = null, U = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (S[c] = e.subsection)
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
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: A,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = r.default.getCurrentUser();
                    A(), null != e && (p = {
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
                    return O = e.tab, null == c && O === s.DrawerTabTypes.USER_SETTINGS && g({
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
//# sourceMappingURL=c6b2dc55720b7a85e2ac.js.map