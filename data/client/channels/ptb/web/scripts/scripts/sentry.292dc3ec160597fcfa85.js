! function() {
    var t, r = {
            974971: function(t, r, n) {
                "use strict";
                var e = n("525305"),
                    o = n("354848"),
                    i = n("332916"),
                    u = n("641236")("toStringTag"),
                    c = Object,
                    a = "Arguments" === i(function() {
                        return arguments
                    }()),
                    f = function(t, r) {
                        try {
                            return t[r]
                        } catch (t) {}
                    };
                t.exports = e ? i : function(t) {
                    var r, n, e;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = f(r = c(t), u)) ? n : a ? i(r) : "Object" === (e = i(r)) && o(r.callee) ? "Arguments" : e
                }
            },
            905145: function(t, r, n) {
                "use strict";
                var e = n("581031"),
                    o = Error,
                    i = e("".replace),
                    u = String(o("zxcasd").stack),
                    c = /\n\s*at [^:]*:[^\n]*/,
                    a = c.test(u);
                t.exports = function(t, r) {
                    if (a && "string" == typeof t && !o.prepareStackTrace)
                        for (; r--;) t = i(t, c, "");
                    return t
                }
            },
            95948: function(t, r, n) {
                "use strict";
                var e = n("354848"),
                    o = n("622281"),
                    i = n("276321");
                t.exports = function(t, r, n) {
                    var u, c;
                    return i && e(u = r.constructor) && u !== n && o(c = u.prototype) && c !== n.prototype && i(t, c), t
                }
            },
            892725: function(t, r, n) {
                "use strict";
                var e = n("714050");
                t.exports = function(t, r) {
                    return void 0 === t ? arguments.length < 2 ? "" : r : e(t)
                }
            },
            525305: function(t, r, n) {
                "use strict";
                var e = n("641236")("toStringTag"),
                    o = {};
                o[e] = "z", t.exports = "[object z]" === String(o)
            },
            714050: function(t, r, n) {
                "use strict";
                var e = n("974971"),
                    o = String;
                t.exports = function(t) {
                    if ("Symbol" === e(t)) throw TypeError("Cannot convert a Symbol value to a string");
                    return o(t)
                }
            },
            972778: function(t, r, n) {
                "use strict";
                n.r(r);
                var e = n("25779");
                window.DiscordSentry = (0, e.initSentry)()
            }
        },
        n = {};

    function e(t) {
        var o = n[t];
        if (void 0 !== o) return o.exports;
        var i = n[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        return r[t].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
    }
    e.m = r, e.es = function(t, r) {
        return Object.keys(t).forEach(function(n) {
            "default" !== n && !Object.prototype.hasOwnProperty.call(r, n) && Object.defineProperty(r, n, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        }), t
    }, e.n = function(t) {
        var r = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(r, {
            a: r
        }), r
    }, e.d = function(t, r) {
        for (var n in r) e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: r[n]
        })
    }, e.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), e.hmd = function(t) {
        return !(t = Object.create(t)).children && (t.children = []), Object.defineProperty(t, "exports", {
            enumerable: !0,
            set: function() {
                throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + t.id)
            }
        }), t
    }, e.o = function(t, r) {
        return Object.prototype.hasOwnProperty.call(t, r)
    }, e.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, e.nmd = function(t) {
        return t.paths = [], !t.children && (t.children = []), t
    }, t = [], e.O = function(r, n, o, i) {
        if (n) {
            i = i || 0;
            for (var u = t.length; u > 0 && t[u - 1][2] > i; u--) t[u] = t[u - 1];
            t[u] = [n, o, i];
            return
        }
        for (var c = 1 / 0, u = 0; u < t.length; u++) {
            for (var n = t[u][0], o = t[u][1], i = t[u][2], a = !0, f = 0; f < n.length; f++) c >= i && Object.keys(e.O).every(function(t) {
                return e.O[t](n[f])
            }) ? n.splice(f--, 1) : (a = !1, i < c && (c = i));
            if (a) {
                t.splice(u--, 1);
                var s = o();
                void 0 !== s && (r = s)
            }
        }
        return r
    }, ! function() {
        var t = {
            53446: 0
        };
        e.O.j = function(r) {
            return 0 === t[r]
        };
        var r = function(r, n) {
                var o = n[0],
                    i = n[1],
                    u = n[2],
                    c, a, f = 0;
                if (o.some(function(r) {
                        return 0 !== t[r]
                    })) {
                    for (c in i) e.o(i, c) && (e.m[c] = i[c]);
                    if (u) var s = u(e)
                }
                for (r && r(n); f < o.length; f++) a = o[f], e.o(t, a) && t[a] && t[a][0](), t[a] = 0;
                return e.O(s)
            },
            n = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [];
        n.forEach(r.bind(null, 0)), n.push = r.bind(null, n.push.bind(n))
    }();
    var o = e.O(void 0, ["24217", "62734", "43455", "84471"], function() {
        return e("972778")
    });
    e.O(o)
}();
//# sourceMappingURL=sentry.292dc3ec160597fcfa85.js.map