! function() {
    var e, r = {
            926064: function(e, r, n) {
                "use strict";
                n.r(r);
                var t = n("399039");
                window.DiscordSentry = (0, t.initSentry)()
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
        return r[e].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
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
    }, t.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(r, {
            a: r
        }), r
    }, t.d = function(e, r) {
        for (var n in r) t.o(r, n) && !t.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: r[n]
        })
    }, t.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), t.hmd = function(e) {
        return !(e = Object.create(e)).children && (e.children = []), Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: function() {
                throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }), e
    }, t.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.nmd = function(e) {
        return e.paths = [], !e.children && (e.children = []), e
    }, e = [], t.O = function(r, n, o, i) {
        if (n) {
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [n, o, i];
            return
        }
        for (var c = 1 / 0, u = 0; u < e.length; u++) {
            for (var n = e[u][0], o = e[u][1], i = e[u][2], f = !0, a = 0; a < n.length; a++) c >= i && Object.keys(t.O).every(function(e) {
                return t.O[e](n[a])
            }) ? n.splice(a--, 1) : (f = !1, i < c && (c = i));
            if (f) {
                e.splice(u--, 1);
                var d = o();
                void 0 !== d && (r = d)
            }
        }
        return r
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
                    u = n[2],
                    c, f, a = 0;
                if (o.some(function(r) {
                        return 0 !== e[r]
                    })) {
                    for (c in i) t.o(i, c) && (t.m[c] = i[c]);
                    if (u) var d = u(t)
                }
                for (r && r(n); a < o.length; a++) f = o[a], t.o(e, f) && e[f] && e[f][0](), e[f] = 0;
                return t.O(d)
            },
            n = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [];
        n.forEach(r.bind(null, 0)), n.push = r.bind(null, n.push.bind(n))
    }();
    var o = t.O(void 0, ["72474", "48375"], function() {
        return t("926064")
    });
    t.O(o)
}();
//# sourceMappingURL=sentry.6bd5bc35ff461f4d2eb5.js.map