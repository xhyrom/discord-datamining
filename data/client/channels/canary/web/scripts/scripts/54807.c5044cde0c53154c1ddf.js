"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["54807"], {
        311163: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var i = n(272423);

            function r(e) {
                let t = (0, i.kf)(e);
                if (null != t) return [t.params.guildId, t.params.channelId];
                let n = (0, i.B3)(e);
                if (null != n) {
                    var r, a;
                    return [null === (r = n.params) || void 0 === r ? void 0 : r.guildId, null === (a = n.params) || void 0 === a ? void 0 : a.channelId]
                }
                return [void 0, void 0]
            }
        },
        905423: function(e, t, n) {
            var i = n(266067),
                r = n(652874),
                a = n(981631);

            function l(e) {
                let t = (0, i.LX)(null != e ? e : "", {
                    path: a.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?")
                });
                if (null != t) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t.params;
                    return {
                        guildId: e === a.ME ? null : e,
                        channelId: null != n ? n : null
                    }
                }
                let n = (0, i.LX)(null != e ? e : "", {
                    path: a.Z5c.GUILD_BOOSTING_MARKETING(":guildId")
                });
                return null != n ? {
                    guildId: n.params.guildId,
                    channelId: null
                } : {
                    guildId: null,
                    channelId: null
                }
            }
            t.Z = (0, r.Z)(e => ({
                path: null,
                basePath: "/",
                guildId: null,
                channelId: null,
                updatePath(t) {
                    let {
                        guildId: n,
                        channelId: i
                    } = l(t);
                    e({
                        path: t,
                        guildId: n,
                        channelId: i
                    })
                },
                resetPath(t) {
                    let {
                        guildId: n,
                        channelId: i
                    } = l(t);
                    e({
                        path: null,
                        guildId: n,
                        channelId: i,
                        basePath: t
                    })
                }
            }))
        },
        304445: function(e, t, n) {
            n(47120), n(411104);
            var i = n(934951),
                r = n(266067),
                a = n(38618),
                l = n(57132),
                s = n(215355),
                o = n(777639),
                u = n(311163),
                d = n(272423),
                h = n(781157),
                c = n(700615),
                g = n(905423),
                p = n(703656),
                f = n(981631);

            function v(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            t.Z = new class e {
                initialize() {
                    this.cleanup(), this.unlistenHistory = (0, p.s1)().listen(this.handleRouteChange);
                    let {
                        pathname: e
                    } = (0, p.s1)().location;
                    g.Z.getState().resetPath(e), this.unlistenKeyboardChange = g.Z.subscribe(this.handleKeybindRouteChange), a.Z.addChangeListener(this.handleConnectionChange)
                }
                convertRouteToNavigation(e, t) {
                    var n, i, a;
                    let {
                        pathname: g
                    } = e, p = (0, o.D)(), v = (0, l.cn)(), {
                        mergeTabs: m
                    } = (0, s.LI)({
                        location: "convertRouteToNavigation"
                    });
                    if (null == p || !p.isReady()) return;
                    let C = e.navigationReplace,
                        R = null !== (n = e.useScreen) && void 0 !== n && n;
                    if (v && (0, h.x7)() && g === f.Z5c.ME) {
                        (0, d.vp)({
                            screen: "messages",
                            resetRoot: C
                        });
                        return
                    }
                    if (v && g === f.Z5c.NOTIFICATIONS) {
                        (0, d.vp)({
                            screen: "notifications",
                            resetRoot: C
                        });
                        return
                    }
                    if (g.startsWith("/channels/")) {
                        let e = (0, r.LX)(g, {
                                path: f.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?")
                            }),
                            t = (0, r.LX)(g, {
                                path: "".concat(f.Z5c.CHANNEL(":guildId", ":channelId?")).concat(f.Z5c.VOICE_CHAT_CHANNEL_PARTIAL(":voiceGuildId", ":voiceChannelId", ":voiceMessageId?"))
                            });
                        if (!v) {
                            let e = p.getRootState();
                            (null == e ? void 0 : null === (a = e.routes) || void 0 === a ? void 0 : null === (i = a[0]) || void 0 === i ? void 0 : i.name) !== "panels" && (0, d.H)();
                            return
                        }
                        if (null != t) {
                            let {
                                voiceGuildId: e,
                                voiceChannelId: n,
                                voiceMessageId: i
                            } = t.params;
                            !(0, c.ur)() && (0, d.k4)({
                                channelId: n,
                                guildId: e,
                                messageId: i,
                                replaceChannelAndFixRoot: C,
                                useScreen: R
                            });
                            return
                        }
                        if (null != e) {
                            let {
                                channelId: t,
                                guildId: n,
                                messageId: i
                            } = e.params;
                            if (!(0, h.x7)() && !m) {
                                (0, d.vp)({
                                    screen: "guilds",
                                    guildId: n,
                                    resetRoot: C
                                });
                                return
                            }
                            if ((0, h.JH)()) {
                                let [e, i] = (0, u.Z)(p.getCurrentRoute());
                                if (e === n && i === t) return
                            }
                            null == t || (0, h.Z0)(n) && !1 !== C ? n !== f.ME || m ? (0, d.vp)({
                                screen: "guilds",
                                guildId: n,
                                channelId: (0, h.JH)() ? t : void 0,
                                resetRoot: C
                            }) : (0, d.vp)({
                                screen: "messages",
                                resetRoot: C
                            }) : null != n && (0, d.k4)({
                                channelId: t,
                                guildId: n,
                                messageId: i,
                                replaceChannelAndFixRoot: C,
                                useScreen: R
                            })
                        }
                        return
                    }
                    if (g.startsWith("/member-verification/")) {
                        let e = (0, r.LX)(g, {
                            path: f.Z5c.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?")
                        });
                        null != e && (0, d.fA)(e.params.guildId, e.params.inviteCode);
                        return
                    }
                    if (g.startsWith("/login") || g.startsWith("/register")) {
                        (0, d.Bj)();
                        return
                    }
                    if (g.startsWith("/account-standing")) {
                        p.navigate({
                            name: "account-standing",
                            params: void 0
                        });
                        return
                    }
                    v && (0, d.vp)({
                        screen: "messages",
                        resetRoot: C
                    })
                }
                executeRouteRewrites(e, t) {
                    if (this.routeChangeCount += 1, this.routeChangeCount < 10)
                        for (let n of this.rewrites) {
                            let r = (0, p.s1)().location.pathname,
                                a = n(e, t);
                            if (null != a) return (0, i.n_)({
                                message: "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                                data: {
                                    replacePath: a.path,
                                    previousPath: r
                                }
                            }), (0, p.dL)(a.path, a.state), !0
                        } else throw Error("RouteManager: Something has gone horribly wrong with rewrites");
                    return !1
                }
                cleanup() {
                    var e, t;
                    null === (e = this.unlistenHistory) || void 0 === e || e.call(this), this.unlistenHistory = void 0, null === (t = this.unlistenKeyboardChange) || void 0 === t || t.call(this), this.unlistenKeyboardChange = void 0, a.Z.removeChangeListener(this.handleConnectionChange)
                }
                addRouteChangeListener(e) {
                    return null != this.unlistenHistory && e((0, p.s1)().location, "REPLACE"), this.listeners.add(e), () => this.removeRouteChangeListener(e)
                }
                addRouteRewriter(e) {
                    if (null != this.unlistenHistory) {
                        let t = e((0, p.s1)().location, (0, p.s1)().action);
                        null != t && (0, p.dL)(t.path, t.state)
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
                    return (0, p.s1)()
                }
                constructor() {
                    v(this, "unlistenHistory", void 0), v(this, "unlistenKeyboardChange", void 0), v(this, "rewrites", new Set), v(this, "listeners", new Set), v(this, "routeChangeCount", 0), v(this, "timer", -1), v(this, "connected", !1), v(this, "handleConnectionChange", () => {
                        let e = a.Z.isConnected(),
                            t = e && !this.connected;
                        this.connected = e, t && (this.routeChangeCount = 0, this.executeRouteRewrites((0, p.s1)().location, "REPLACE"))
                    }), v(this, "handleRouteChange", (e, t) => {
                        if (this.executeRouteRewrites(e, t)) return;
                        let n = g.Z.getState();
                        for (let i of (n.basePath !== e.pathname && n.resetPath(e.pathname), this.listeners)) try {
                            i(e, t)
                        } catch (e) {
                            console.warn("RouteManager.listen: A route listener has caused an error", e.message)
                        }
                        this.convertRouteToNavigation(e, t), this.routeChangeCount = 0
                    }), v(this, "handleKeybindRouteChange", e => {
                        let {
                            path: t
                        } = e;
                        null != t ? (clearTimeout(this.timer), this.timer = setTimeout(this.flushRoute, 200)) : null == t && clearTimeout(this.timer)
                    }), v(this, "flushRoute", () => {
                        clearTimeout(this.timer);
                        let e = g.Z.getState();
                        null != e.path && (0, p.uL)(e.path)
                    })
                }
            }
        },
        361207: function(e, t, n) {
            n.d(t, {
                DW: function() {
                    return h
                },
                Gn: function() {
                    return g
                },
                t3: function() {
                    return c
                },
                w4: function() {
                    return u
                }
            });
            var i = n(525654),
                r = n.n(i),
                a = n(271579),
                l = n(314897),
                s = n(981631);
            let o = "linux";

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(s.fzT.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = r().os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? o : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function h(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [o]: "Linux"
                })[d(e)]
            }

            function c() {
                let e = d();
                return u(e, !1, e === o ? "tar.gz" : null)
            }

            function g(e, t, n) {
                let i = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, a.ZP)(null != i ? i : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, a.WS)()
                        });
                    case "Android":
                        return (0, a.ZP)(null != i ? i : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, a.WS)()
                        });
                    default:
                        return null != i ? i : "https://www.discord.com"
                }
            }
        }
    }
]);
//# sourceMappingURL=54807.c5044cde0c53154c1ddf.js.map