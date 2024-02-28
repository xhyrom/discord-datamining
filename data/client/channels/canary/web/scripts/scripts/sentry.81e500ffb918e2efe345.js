! function() {
    var e, r = {
            536274: function(e, r, n) {
                "use strict";
                n.r(r);
                var t = n("587650");
                window.DiscordSentry = (0, t.initSentry)()
            },
            587650: function(e, r, n) {
                "use strict";
                n.r(r), n.d(r, {
                    initSentry: function() {
                        return l
                    },
                    usesClientMods: function() {
                        return a
                    }
                });
                var t = n("887117"),
                    o = n("705899");
                let i = ["oppobrowser", "realmebrowser", "heytapbrowser"];

                function a() {
                    let e = window;
                    return null != e.jQuery || null != e.$ || null != e.BetterDiscord || null != e.BdApi || null != e.rambox
                }
                let u = (0, o.filterThrottle)({
                    maxBudgetMinute: 1,
                    maxBudgetHour: 3
                });

                function l() {
                    t.init({
                        tunnel: "/error-reporting-proxy/web",
                        dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
                        autoSessionTracking: !1,
                        environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
                        release: "discord_web-50f885f57c034fccd6332fb0fead446844e1c025",
                        beforeSend: e => {
                            var r, n;
                            return !(null != (r = e).exception && null != r.exception.values && r.exception.values.every(e => null == e.stacktrace || null != e.stacktrace.frames && 1 === e.stacktrace.frames.length) && "canary" !== window.GLOBAL_ENV.RELEASE_CHANNEL || i.some(e => window.navigator.appVersion.toLowerCase().indexOf(e) >= 0)) && !a() && !("Aborted" === (n = e).message || "cancel captcha" === n.message) && u() ? e : null
                        },
                        integrations: [new t.Integrations.GlobalHandlers({
                            onerror: !0,
                            onunhandledrejection: !0
                        }), new t.Integrations.Breadcrumbs({
                            console: !0,
                            dom: !0,
                            fetch: !0,
                            history: !0,
                            sentry: !0,
                            xhr: !0
                        })],
                        ignoreErrors: ["EADDRINUSE", "BetterDiscord", "EnhancedDiscord", "Powercord", "RecipeWebview", "jQuery", "localStorage", "has already been declared", "Cannot call hover while not dragging.", "Cannot call beginDrag while dragging.", "getHostNode", "setupCSS", "on missing remote object", "ChunkLoadError", "Cannot find module 'discord_utils'", "Failed to setup Krisp module", "Error invoking remote method 'DISCORD_NATIVE_MODULES_INSTALL': Error: Module updater is not available!", "Non-Error promise rejection captured with keys:", "Request has been terminated", "Cannot resolve a Slate point from DOM point", "Failed to fetch", "no suitable image found", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", "The play() request was interrupted", "could not play audio", "notosans-400-normalitalic"],
                        denyUrls: [/recaptcha/, /mobilediscord\.com/, /betterdiscord:\/\//]
                    }), t.setTag("buildNumber", "269692"), t.setTag("builtAt", String("1709151577047"));
                    let e = window.GLOBAL_ENV.SENTRY_TAGS;
                    if (null != e && "object" == typeof e)
                        for (let r in e) t.setTag(r, e[r]);
                    return t
                }
            }
        },
        n = {};

    function t(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var i = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return r[e](i, i.exports, t), i.loaded = !0, i.exports
    }
    t.m = r, t.es = function(e, r) {
        return Object.keys(e).forEach(function(n) {
            "default" !== n && !Object.prototype.hasOwnProperty.call(r, n) && Object.defineProperty(r, n, {
                enumerable: !0,
                get: function() {
                    return e[n]
                }
            })
        }), e
    }, e = [], t.O = function(r, n, o, i) {
        if (n) {
            i = i || 0;
            for (var a = e.length; a > 0 && e[a - 1][2] > i; a--) e[a] = e[a - 1];
            e[a] = [n, o, i];
            return
        }
        for (var u = 1 / 0, a = 0; a < e.length; a++) {
            for (var n = e[a][0], o = e[a][1], i = e[a][2], l = !0, c = 0; c < n.length; c++) u >= i && Object.keys(t.O).every(function(e) {
                return t.O[e](n[c])
            }) ? n.splice(c--, 1) : (l = !1, i < u && (u = i));
            if (l) {
                e.splice(a--, 1);
                var s = o();
                void 0 !== s && (r = s)
            }
        }
        return r
    }, t.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), t.d = function(e, r) {
        for (var n in r) t.o(r, n) && !t.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: r[n]
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(r, {
            a: r
        }), r
    }, t.nmd = function(e) {
        return e.paths = [], !e.children && (e.children = []), e
    }, t.hmd = function(e) {
        return !(e = Object.create(e)).children && (e.children = []), Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: function() {
                throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }), e
    }, t.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }, ! function() {
        var e = {
            53446: 0
        };
        t.O.j = function(r) {
            return 0 === e[r]
        };
        var r = function(r, n) {
                var o = n[0],
                    i = n[1],
                    a = n[2],
                    u, l, c = 0;
                if (o.some(function(r) {
                        return 0 !== e[r]
                    })) {
                    for (u in i) t.o(i, u) && (t.m[u] = i[u]);
                    if (a) var s = a(t)
                }
                for (r && r(n); c < o.length; c++) l = o[c], t.o(e, l) && e[l] && e[l][0](), e[l] = 0;
                return t.O(s)
            },
            n = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [];
        n.forEach(r.bind(null, 0)), n.push = r.bind(null, n.push.bind(n))
    }();
    var o = t.O(void 0, ["26088", "43759", "14700", "63816", "70464"], function() {
        return t("536274")
    });
    t.O(o)
}();
//# sourceMappingURL=sentry.81e500ffb918e2efe345.js.map