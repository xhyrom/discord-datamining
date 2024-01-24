! function() {
    var e, t = {
            370692: function(e, t, n) {
                "use strict";
                n("918437")("Float32", function(e) {
                    return function(t, n, r) {
                        return e(this, t, n, r)
                    }
                })
            },
            667500: function(e, t, n) {
                "use strict";
                n("918437")("Float64", function(e) {
                    return function(t, n, r) {
                        return e(this, t, n, r)
                    }
                })
            },
            477315: function(e, t, n) {
                "use strict";
                n("918437")("Int16", function(e) {
                    return function(t, n, r) {
                        return e(this, t, n, r)
                    }
                })
            },
            527135: function(e, t, n) {
                "use strict";
                n("918437")("Int32", function(e) {
                    return function(t, n, r) {
                        return e(this, t, n, r)
                    }
                })
            },
            453061: function(e, t, n) {
                "use strict";
                n("918437")("Int8", function(e) {
                    return function(t, n, r) {
                        return e(this, t, n, r)
                    }
                })
            },
            659510: function(e, t, n) {
                "use strict";
                n("918437")("Uint16", function(e) {
                    return function(t, n, r) {
                        return e(this, t, n, r)
                    }
                })
            },
            990131: function(e, t, n) {
                "use strict";
                n("918437")("Uint32", function(e) {
                    return function(t, n, r) {
                        return e(this, t, n, r)
                    }
                })
            },
            332822: function(e, t, n) {
                "use strict";
                n("918437")("Uint8", function(e) {
                    return function(t, n, r) {
                        return e(this, t, n, r)
                    }
                }, !0)
            },
            390493: function(e, t, n) {
                n("70102"), n("424973");
                var r, o, i, u = e.exports = {};

                function c() {
                    throw Error("setTimeout has not been defined")
                }

                function s() {
                    throw Error("clearTimeout has not been defined")
                }

                function a(e) {
                    if (r === setTimeout) return setTimeout(e, 0);
                    if ((r === c || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
                    try {
                        return r(e, 0)
                    } catch (t) {
                        try {
                            return r.call(null, e, 0)
                        } catch (t) {
                            return r.call(this, e, 0)
                        }
                    }
                }! function() {
                    try {
                        r = "function" == typeof setTimeout ? setTimeout : c
                    } catch (e) {
                        r = c
                    }
                    try {
                        o = "function" == typeof clearTimeout ? clearTimeout : s
                    } catch (e) {
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
                        var e = a(h);
                        d = !0;
                        for (var t = l.length; t;) {
                            for (i = l, l = []; ++f < t;) i && i[f].run();
                            f = -1, t = l.length
                        }
                        i = null, d = !1, ! function(e) {
                            if (o === clearTimeout) return clearTimeout(e);
                            if ((o === s || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
                            try {
                                o(e)
                            } catch (t) {
                                try {
                                    return o.call(null, e)
                                } catch (t) {
                                    return o.call(this, e)
                                }
                            }
                        }(e)
                    }
                }

                function m(e, t) {
                    this.fun = e, this.array = t
                }

                function b() {}
                u.nextTick = function(e) {
                    var t = Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    l.push(new m(e, t)), 1 === l.length && !d && a(p)
                }, m.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = b, u.addListener = b, u.once = b, u.off = b, u.removeListener = b, u.removeAllListeners = b, u.emit = b, u.prependListener = b, u.prependOnceListener = b, u.listeners = function(e) {
                    return []
                }, u.binding = function(e) {
                    throw Error("process.binding is not supported")
                }, u.cwd = function() {
                    return "/"
                }, u.chdir = function(e) {
                    throw Error("process.chdir is not supported")
                }, u.umask = function() {
                    return 0
                }
            },
            93629: function(e, t, n) {
                "use strict";
                n.r(t);
                var r = n("51545");
                window.DiscordSentry = (0, r.initSentry)()
            },
            316217: function(e, t, n) {
                "use strict";
                n.r(t), n.d(t, {
                    IGNORE_ANALYTICS_BREADCRUMB_EVENTS: function() {
                        return o
                    },
                    filterThrottle: function() {
                        return i
                    }
                });
                var r = n("49111");
                let o = [r.AnalyticEvents.START_SPEAKING, r.AnalyticEvents.START_LISTENING, r.AnalyticEvents.APP_OPENED, r.AnalyticEvents.NOTIFICATION_CLICKED, r.AnalyticEvents.EXPERIMENT_USER_TRIGGERED, r.AnalyticEvents.EXPERIMENT_DM_TRIGGERED, r.AnalyticEvents.EXPERIMENT_GUILD_TRIGGERED];

                function i(e) {
                    let {
                        maxBudgetMinute: t,
                        maxBudgetHour: n
                    } = e, r = {
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
                        let e = Date.now(),
                            o = Math.round(e / 1e3 / 60),
                            i = Math.round(e / 1e3 / 60 / 60);
                        return r.minute.slot !== o && (r.minute.slot = o, r.minute.budgetUsed = 0), r.hour.slot !== i && (r.hour.slot = i, r.hour.budgetUsed = 0), !!(r.minute.budgetUsed < t) && (r.minute.budgetUsed++, !!(r.hour.budgetUsed < n)) && (r.hour.budgetUsed++, !0)
                    }
                }
            },
            51545: function(e, t, n) {
                "use strict";
                n.r(t), n.d(t, {
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
                    let e = window;
                    return null != e.jQuery || null != e.$ || null != e.BetterDiscord || null != e.BdApi || null != e.rambox
                }
                let c = (0, o.filterThrottle)({
                    maxBudgetMinute: 1,
                    maxBudgetHour: 3
                });

                function s() {
                    var e;
                    r.init({
                        tunnel: "/error-reporting-proxy/web",
                        dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
                        autoSessionTracking: !1,
                        environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
                        release: "discord_web-f1ade9ee7ca0f69975e9f469d42d2ff4737e7bcc",
                        beforeSend: e => {
                            var t, n;
                            return !(null != (t = e).exception && null != t.exception.values && t.exception.values.every(e => null == e.stacktrace || null != e.stacktrace.frames && 1 === e.stacktrace.frames.length) && "canary" !== window.GLOBAL_ENV.RELEASE_CHANNEL || i.some(e => window.navigator.appVersion.toLowerCase().indexOf(e) >= 0)) && !u() && !("Aborted" === (n = e).message || "cancel captcha" === n.message) && c() ? e : null
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
                    }), r.setTag("buildNumber", (e = "261131", "261131")), r.setTag("builtAt", String("1706135981711"));
                    let t = window.GLOBAL_ENV.SENTRY_TAGS;
                    if (null != t && "object" == typeof t)
                        for (let e in t) r.setTag(e, t[e]);
                    return r
                }
            }
        },
        n = {};

    function r(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var i = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return t[e](i, i.exports, r), i.loaded = !0, i.exports
    }
    r.m = t, r.es = function(e, t) {
        return Object.keys(e).forEach(function(n) {
            "default" !== n && !Object.prototype.hasOwnProperty.call(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: function() {
                    return e[n]
                }
            })
        }), e
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, e = [], r.O = function(t, n, o, i) {
        if (n) {
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [n, o, i];
            return
        }
        for (var c = 1 / 0, u = 0; u < e.length; u++) {
            for (var n = e[u][0], o = e[u][1], i = e[u][2], s = !0, a = 0; a < n.length; a++) c >= i && Object.keys(r.O).every(function(e) {
                return r.O[e](n[a])
            }) ? n.splice(a--, 1) : (s = !1, i < c && (c = i));
            if (s) {
                e.splice(u--, 1);
                var l = o();
                void 0 !== l && (t = l)
            }
        }
        return t
    }, r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), r.d = function(e, t) {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.n = function(e) {
        return e && e.__esModule ? e.default : e
    }, r.nmd = function(e) {
        return e.paths = [], !e.children && (e.children = []), e
    }, r.hmd = function(e) {
        return !(e = Object.create(e)).children && (e.children = []), Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: function() {
                throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }), e
    }, ! function() {
        var e = {
            sentry: 0
        };
        r.O.j = function(t) {
            return 0 === e[t]
        };
        var t = function(t, n) {
                var o = n[0],
                    i = n[1],
                    u = n[2],
                    c, s, a = 0;
                if (o.some(function(t) {
                        return 0 !== e[t]
                    })) {
                    for (c in i) r.o(i, c) && (r.m[c] = i[c]);
                    if (u) var l = u(r)
                }
                for (t && t(n); a < o.length; a++) s = o[a], r.o(e, s) && e[s] && e[s][0](), e[s] = 0;
                return r.O(l)
            },
            n = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    }();
    var o = r.O(void 0, ["58409", "3341", "47470", "22843", "94288", "25653", "7273"], function() {
        return r("93629")
    });
    r.O(o)
}();
//# sourceMappingURL=sentry.6f88c9182b5f66a1c338.js.map