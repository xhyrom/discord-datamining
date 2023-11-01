(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["24155"], {
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
                O = {},
                h = {},
                R = new Set,
                I = () => v.emitChange(),
                U = u.debounce(I, 150);

            function P(e) {
                let t = f[e];
                null != t && !t.closed && (T[e] = {
                    x: t.screenX,
                    y: t.screenY,
                    width: t.innerWidth,
                    height: t.innerHeight,
                    alwaysOnTop: !!c.isPlatformEmbedded && p[e]
                })
            }

            function m(e) {
                let t = f[e];
                null != t && (!t.closed && P(e), t.close(), ! function(e) {
                    let t = f[e];
                    o(null != t, "Popout window was null during unmount"), t.removeEventListener("focus", I), t.removeEventListener("blur", I), t.removeEventListener("resize", U);
                    let n = O[e];
                    o(null != n, "Window root was null while unmounting"), n.unmount(), delete f[e], delete p[e], delete h[e], delete O[e]
                }(e), v.emitChange())
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
                                n = h[e];
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
                            o(null != i, "No render target for popout!"), O[e] = i, i.render(n(e))
                        }(l), R.delete(l), v.emitChange()));
                    case _.PopoutEventTypes.UNLOADED:
                        return m(n.key)
                }
            }

            function C() {
                for (let e of Object.keys(f)) {
                    let t = f[e];
                    null != t && t.close()
                }
            }
            class N extends s.default.PersistedStore {
                initialize(e) {
                    window.addEventListener("message", g), window.addEventListener("beforeunload", C), T = null != e ? e : {}
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
                    return m(e)
                }
            }
            N.displayName = "PopoutWindowStore", N.persistKey = "PopoutWindowStore";
            let v = new N(a.default, {
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
                    O.windowKey = t, null == O || O.focus(), f[t] = O, h[t] = l, c.isPlatformEmbedded && (S.default.setAlwaysOnTop(t, d), p[t] = d, S.default.isAlwaysOnTop(t).then(e => p[t] = e)), R.add(t)
                },
                POPOUT_WINDOW_CLOSE: function(e) {
                    let {
                        key: t
                    } = e, n = f[t];
                    null != n && !n.closed && (P(t), n.close())
                },
                POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
                    let {
                        key: t,
                        alwaysOnTop: n
                    } = e;
                    c.isPlatformEmbedded && (S.default.setAlwaysOnTop(t, n), p[t] = n, S.default.isAlwaysOnTop(t).then(e => p[t] = e))
                },
                LOGOUT: C
            });
            var A = v
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
                R = null,
                I = null,
                U = [],
                P = null,
                m = null;

            function g(e) {
                var t, n, l, o, i, u;
                let d = r.default.getCurrentUser();
                if (null == d) return C();
                c = null !== (t = e.section) && void 0 !== t ? t : c, P = null !== (n = e.section) && void 0 !== n ? n : c, null != e.subsection && null != c && (S[c] = e.subsection), null != e.scrollPosition && null != c && (E[c] = e.scrollPosition), O = !!e.openWithoutBackstack, a = s.FormStates.OPEN, _ = {}, p = {
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
                }, R = null !== (l = e.onClose) && void 0 !== l ? l : null, I = null !== (o = e.analyticsLocation) && void 0 !== o ? o : null, U = null !== (i = e.analyticsLocations) && void 0 !== i ? i : [], m = null !== (u = e.impressionSource) && void 0 !== u ? u : null
            }

            function C() {
                a = s.FormStates.CLOSED, f = !1, T = null, P = null, p = null, d = null, c = null, S = {}, E = {}, R = null, I = null, U = [], m = null
            }

            function N() {
                a = s.FormStates.OPEN, _ = {}
            }
            class v extends i.default.Store {
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
                        analyticsLocation: I,
                        analyticsLocations: U,
                        initialSection: P,
                        impressionSource: m
                    }
                }
                get onClose() {
                    return R
                }
            }
            v.displayName = "UserSettingsModalStore";
            var A = new v(u.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    f = !0, g(e)
                },
                USER_SETTINGS_MODAL_INIT: g,
                USER_SETTINGS_MODAL_CLOSE: C,
                LOGOUT: C,
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
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: N,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = r.default.getCurrentUser();
                    N(), null != e && (p = {
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
                    return h = e.tab, null == c && h === s.DrawerTabTypes.USER_SETTINGS && g({
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
//# sourceMappingURL=86d5d514d05db51fd9ee.js.map