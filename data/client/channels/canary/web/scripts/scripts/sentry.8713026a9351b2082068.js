(() => {
    "use strict";
    var r = {
            972778: function(r, e, n) {
                var t = n(25779);
                window.DiscordSentry = (0, t.j)()
            }
        },
        e = {};

    function n(t) {
        var o = e[t];
        if (void 0 !== o) return o.exports;
        var i = e[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        return r[t].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
    }
    n.m = r, n.n = function(r) {
        var e = r && r.__esModule ? function() {
            return r.default
        } : function() {
            return r
        };
        return n.d(e, {
            a: e
        }), e
    }, n.d = function(r, e) {
        for (var t in e) n.o(e, t) && !n.o(r, t) && Object.defineProperty(r, t, {
            enumerable: !0,
            get: e[t]
        })
    }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (r) {
            if ("object" == typeof window) return window
        }
    }(), n.hmd = function(r) {
        return !(r = Object.create(r)).children && (r.children = []), Object.defineProperty(r, "exports", {
            enumerable: !0,
            set: function() {
                throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + r.id)
            }
        }), r
    }, n.o = function(r, e) {
        return Object.prototype.hasOwnProperty.call(r, e)
    }, n.r = function(r) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(r, "__esModule", {
            value: !0
        })
    }, n.nmd = function(r) {
        return r.paths = [], !r.children && (r.children = []), r
    }, (() => {
        var r = [];
        n.O = function(e, t, o, i) {
            if (t) {
                i = i || 0;
                for (var u = r.length; u > 0 && r[u - 1][2] > i; u--) r[u] = r[u - 1];
                r[u] = [t, o, i];
                return
            }
            for (var c = 1 / 0, u = 0; u < r.length; u++) {
                for (var t = r[u][0], o = r[u][1], i = r[u][2], a = !0, d = 0; d < t.length; d++)(!1 & i || c >= i) && Object.keys(n.O).every(function(r) {
                    return n.O[r](t[d])
                }) ? t.splice(d--, 1) : (a = !1, i < c && (c = i));
                if (a) {
                    r.splice(u--, 1);
                    var f = o();
                    void 0 !== f && (e = f)
                }
            }
            return e
        }
    })(), n.j = "53446", (() => {
        var r = {
            53446: 0
        };
        n.O.j = function(e) {
            return 0 === r[e]
        };
        var e = function(e, t) {
                var o = t[0],
                    i = t[1],
                    u = t[2],
                    c, a, d = 0;
                if (o.some(function(e) {
                        return 0 !== r[e]
                    })) {
                    for (c in i) n.o(i, c) && (n.m[c] = i[c]);
                    if (u) var f = u(n)
                }
                for (e && e(t); d < o.length; d++) a = o[d], n.o(r, a) && r[a] && r[a][0](), r[a] = 0;
                return n.O(f)
            },
            t = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [];
        t.forEach(e.bind(null, 0)), t.push = e.bind(null, t.push.bind(t))
    })();
    var t = n.O(void 0, ["24217", "62734", "57652", "7838", "84471"], function() {
        return n("972778")
    });
    t = n.O(t)
})();
//# sourceMappingURL=sentry.8713026a9351b2082068.js.map