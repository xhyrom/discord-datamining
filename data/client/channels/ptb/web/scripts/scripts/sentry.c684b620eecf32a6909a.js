! function() {
    var t, e = {
            370692: function(t, e, n) {
                "use strict";
                n("918437")("Float32", function(t) {
                    return function(e, n, r) {
                        return t(this, e, n, r)
                    }
                })
            },
            667500: function(t, e, n) {
                "use strict";
                n("918437")("Float64", function(t) {
                    return function(e, n, r) {
                        return t(this, e, n, r)
                    }
                })
            },
            477315: function(t, e, n) {
                "use strict";
                n("918437")("Int16", function(t) {
                    return function(e, n, r) {
                        return t(this, e, n, r)
                    }
                })
            },
            527135: function(t, e, n) {
                "use strict";
                n("918437")("Int32", function(t) {
                    return function(e, n, r) {
                        return t(this, e, n, r)
                    }
                })
            },
            453061: function(t, e, n) {
                "use strict";
                n("918437")("Int8", function(t) {
                    return function(e, n, r) {
                        return t(this, e, n, r)
                    }
                })
            },
            659510: function(t, e, n) {
                "use strict";
                n("918437")("Uint16", function(t) {
                    return function(e, n, r) {
                        return t(this, e, n, r)
                    }
                })
            },
            990131: function(t, e, n) {
                "use strict";
                n("918437")("Uint32", function(t) {
                    return function(e, n, r) {
                        return t(this, e, n, r)
                    }
                })
            },
            332822: function(t, e, n) {
                "use strict";
                n("918437")("Uint8", function(t) {
                    return function(e, n, r) {
                        return t(this, e, n, r)
                    }
                }, !0)
            },
            390493: function(t, e, n) {
                n("70102"), n("424973");
                var r, o, i, u = t.exports = {};

                function c() {
                    throw Error("setTimeout has not been defined")
                }

                function s() {
                    throw Error("clearTimeout has not been defined")
                }

                function a(t) {
                    if (r === setTimeout) return setTimeout(t, 0);
                    if ((r === c || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0);
                    try {
                        return r(t, 0)
                    } catch (e) {
                        try {
                            return r.call(null, t, 0)
                        } catch (e) {
                            return r.call(this, t, 0)
                        }
                    }
                }! function() {
                    try {
                        r = "function" == typeof setTimeout ? setTimeout : c
                    } catch (t) {
                        r = c
                    }
                    try {
                        o = "function" == typeof clearTimeout ? clearTimeout : s
                    } catch (t) {
                        o = s
                    }
                }();
                var l = [],
                    d = !1,
                    f = -1;

                function h() {
                    d && i && (d = !1, i.length ? l = i.concat(l) : f = -1, l.length && p())
                }

                function p() {
                    if (!d) {
                        var t = a(h);
                        d = !0;
                        for (var e = l.length; e;) {
                            for (i = l, l = []; ++f < e;) i && i[f].run();
                            f = -1, e = l.length
                        }
                        i = null, d = !1, ! function(t) {
                            if (o === clearTimeout) return clearTimeout(t);
                            if ((o === s || !o) && clearTimeout) return o = clearTimeout, clearTimeout(t);
                            try {
                                o(t)
                            } catch (e) {
                                try {
                                    return o.call(null, t)
                                } catch (e) {
                                    return o.call(this, t)
                                }
                            }
                        }(t)
                    }
                }

                function b(t, e) {
                    this.fun = t, this.array = e
                }

                function m() {}
                u.nextTick = function(t) {
                    var e = Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    l.push(new b(t, e)), 1 === l.length && !d && a(p)
                }, b.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = m, u.addListener = m, u.once = m, u.off = m, u.removeListener = m, u.removeAllListeners = m, u.emit = m, u.prependListener = m, u.prependOnceListener = m, u.listeners = function(t) {
                    return []
                }, u.binding = function(t) {
                    throw Error("process.binding is not supported")
                }, u.cwd = function() {
                    return "/"
                }, u.chdir = function(t) {
                    throw Error("process.chdir is not supported")
                }, u.umask = function() {
                    return 0
                }
            },
            93629: function(t, e, n) {
                "use strict";
                n.r(e);
                var r = n("51545");
                window.DiscordSentry = (0, r.initSentry)()
            },
            316217: function(t, e, n) {
                "use strict";
                n.r(e), n.d(e, {
                    IGNORE_ANALYTICS_BREADCRUMB_EVENTS: function() {
                        return o
                    },
                    filterThrottle: function() {
                        return i
                    }
                });
                var r = n("49111");
                let o = [r.AnalyticEvents.START_SPEAKING, r.AnalyticEvents.START_LISTENING, r.AnalyticEvents.APP_OPENED, r.AnalyticEvents.NOTIFICATION_CLICKED, r.AnalyticEvents.EXPERIMENT_USER_TRIGGERED, r.AnalyticEvents.EXPERIMENT_DM_TRIGGERED, r.AnalyticEvents.EXPERIMENT_GUILD_TRIGGERED];

                function i(t) {
                    let {
                        maxBudgetMinute: e,
                        maxBudgetHour: n
                    } = t, r = {
                        minute: {
                            slot: 0,
                            budgetUsed: 0
                        },
                        hour: {
                            slot: 0,
                            budgetUsed: 0
                        }
                    };
                    return () => {
                        let t = Date.now(),
                            o = Math.round(t / 1e3 / 60),
                            i = Math.round(t / 1e3 / 60 / 60);
                        return r.minute.slot !== o && (r.minute.slot = o, r.minute.budgetUsed = 0), r.hour.slot !== i && (r.hour.slot = i, r.hour.budgetUsed = 0), !!(r.minute.budgetUsed < e) && (r.minute.budgetUsed++, !!(r.hour.budgetUsed < n)) && (r.hour.budgetUsed++, !0)
                    }
                }
            },
            51545: function(t, e, n) {
                "use strict";
                n.r(e), n.d(e, {
                    usesClientMods: function() {
                        return u
                    },
                    initSentry: function() {
                        return s
                    }
                }), n("222007");
                var r = n("245123"),
                    o = n("316217");
                let i = ["oppobrowser", "realmebrowser", "heytapbrowser"];

                function u() {
                    let t = window;
                    return null != t.jQuery || null != t.$ || null != t.BetterDiscord || null != t.BdApi || null != t.rambox
                }
                let c = (0, o.filterThrottle)({
                    maxBudgetMinute: 1,
                    maxBudgetHour: 3
                });

                function s() {
                    var t;
                    r.init({
                        tunnel: "/error-reporting-proxy/web",
                        dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
                        autoSessionTracking: !1,
                        environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
                        release: "discord_web-4d8aaf0168983cb8cb280069528ab6eca61f7e92",
                        beforeSend: t => {
                            var e, n;
                            return !(null != (e = t).exception && null != e.exception.values && e.exception.values.every(t => null == t.stacktrace || null != t.stacktrace.frames && 1 === t.stacktrace.frames.length) && "canary" !== window.GLOBAL_ENV.RELEASE_CHANNEL || i.some(t => window.navigator.appVersion.toLowerCase().indexOf(t) >= 0)) && !u() && !("Aborted" === (n = t).message || "cancel captcha" === n.message) && c() ? t : null
                        },
                        integrations: [new r.Integrations.GlobalHandlers({
                            onerror: !0,
                            onunhandledrejection: !0
                        }), new r.Integrations.Breadcrumbs({
                            console: !0,
                            dom: !0,
                            fetch: !0,
                            history: !0,
                            sentry: !0,
                            xhr: !0
                        })],
                        ignoreErrors: ["EADDRINUSE", "BetterDiscord", "EnhancedDiscord", "Powercord", "RecipeWebview", "jQuery", "localStorage", "has already been declared", "Cannot call hover while not dragging.", "Cannot call beginDrag while dragging.", "getHostNode", "setupCSS", "on missing remote object", "ChunkLoadError", "Cannot find module 'discord_utils'", "Failed to setup Krisp module", "Error invoking remote method 'DISCORD_NATIVE_MODULES_INSTALL': Error: Module updater is not available!", "Non-Error promise rejection captured with keys:", "Request has been terminated", "Cannot resolve a Slate point from DOM point", "Failed to fetch", "no suitable image found", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", "The play() request was interrupted", "could not play audio", "notosans-400-normalitalic"],
                        denyUrls: [/recaptcha/, /mobilediscord\.com/, /betterdiscord:\/\//]
                    }), r.setTag("buildNumber", (t = "264502", "264502")), r.setTag("builtAt", String("1707272381797"));
                    let e = window.GLOBAL_ENV.SENTRY_TAGS;
                    if (null != e && "object" == typeof e)
                        for (let t in e) r.setTag(t, e[t]);
                    return r
                }
            }
        },
        n = {};

    function r(t) {
        var o = n[t];
        if (void 0 !== o) return o.exports;
        var i = n[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        return e[t](i, i.exports, r), i.loaded = !0, i.exports
    }
    r.m = e, r.es = function(t, e) {
        return Object.keys(t).forEach(function(n) {
            "default" !== n && !Object.prototype.hasOwnProperty.call(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        }), t
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, t = [], r.O = function(e, n, o, i) {
        if (n) {
            i = i || 0;
            for (var u = t.length; u > 0 && t[u - 1][2] > i; u--) t[u] = t[u - 1];
            t[u] = [n, o, i];
            return
        }
        for (var c = 1 / 0, u = 0; u < t.length; u++) {
            for (var n = t[u][0], o = t[u][1], i = t[u][2], s = !0, a = 0; a < n.length; a++) c >= i && Object.keys(r.O).every(function(t) {
                return r.O[t](n[a])
            }) ? n.splice(a--, 1) : (s = !1, i < c && (c = i));
            if (s) {
                t.splice(u--, 1);
                var l = o();
                void 0 !== l && (e = l)
            }
        }
        return e
    }, r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), r.d = function(t, e) {
        for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.n = function(t) {
        return t && t.__esModule ? t.default : t
    }, r.nmd = function(t) {
        return t.paths = [], !t.children && (t.children = []), t
    }, r.hmd = function(t) {
        return !(t = Object.create(t)).children && (t.children = []), Object.defineProperty(t, "exports", {
            enumerable: !0,
            set: function() {
                throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + t.id)
            }
        }), t
    }, ! function() {
        var t = {
            sentry: 0
        };
        r.O.j = function(e) {
            return 0 === t[e]
        };
        var e = function(e, n) {
                var o = n[0],
                    i = n[1],
                    u = n[2],
                    c, s, a = 0;
                if (o.some(function(e) {
                        return 0 !== t[e]
                    })) {
                    for (c in i) r.o(i, c) && (r.m[c] = i[c]);
                    if (u) var l = u(r)
                }
                for (e && e(n); a < o.length; a++) s = o[a], r.o(t, s) && t[s] && t[s][0](), t[s] = 0;
                return r.O(l)
            },
            n = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [];
        n.forEach(e.bind(null, 0)), n.push = e.bind(null, n.push.bind(n))
    }();
    var o = r.O(void 0, ["58409", "3341", "47470", "22843", "94288", "25653", "7273"], function() {
        return r("93629")
    });
    r.O(o)
}();
//# sourceMappingURL=sentry.c684b620eecf32a6909a.js.map