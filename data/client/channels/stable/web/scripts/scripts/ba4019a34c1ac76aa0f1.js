(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["77903"], {
        78349: function(t, n, r) {
            "use strict";
            t.exports.parse = function(t) {
                var n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!n) return null;
                n.shift();
                var r = null,
                    e = [];
                n[2] && (r = (a = n[2].split("-")).shift(), e = a);
                var o = [];
                n[5] && (o = n[5].split("-")).shift();
                var i = [];
                if (n[6]) {
                    (a = n[6].split("-")).shift();
                    for (var a, s, u = []; a.length;) {
                        var p = a.shift();
                        1 === p.length ? s ? (i.push({
                            singleton: s,
                            extension: u
                        }), s = p, u = []) : s = p : u.push(p)
                    }
                    i.push({
                        singleton: s,
                        extension: u
                    })
                }
                var c = [];
                n[7] && ((c = n[7].split("-")).shift(), c.shift());
                var h = [];
                return n[8] && (h = n[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: r,
                            extlang: e
                        },
                        script: n[3] || null,
                        region: n[4] || null,
                        variant: o,
                        extension: i,
                        privateuse: c
                    },
                    privateuse: h,
                    grandfathered: {
                        irregular: n[0] || null,
                        regular: n[1] || null
                    }
                }
            }
        },
        762774: function(t, n, r) {
            var e = r("843879"),
                o = r("169160"),
                i = r("927794"),
                a = r("979334"),
                s = r("898346");

            function u(t) {
                var n = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++n < r;) {
                    var e = t[n];
                    this.set(e[0], e[1])
                }
            }
            u.prototype.clear = e, u.prototype.delete = o, u.prototype.get = i, u.prototype.has = a, u.prototype.set = s, t.exports = u
        },
        263470: function(t, n, r) {
            var e = r("186489"),
                o = r("235723"),
                i = r("236748"),
                a = r("285445"),
                s = r("956285");

            function u(t) {
                var n = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++n < r;) {
                    var e = t[n];
                    this.set(e[0], e[1])
                }
            }
            u.prototype.clear = e, u.prototype.delete = o, u.prototype.get = i, u.prototype.has = a, u.prototype.set = s, t.exports = u
        },
        516863: function(t, n, r) {
            var e = r("367753")(r("690516"), "Map");
            t.exports = e
        },
        664007: function(t, n, r) {
            var e = r("679991"),
                o = r("169789"),
                i = r("406449"),
                a = r("66703"),
                s = r("245510");

            function u(t) {
                var n = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++n < r;) {
                    var e = t[n];
                    this.set(e[0], e[1])
                }
            }
            u.prototype.clear = e, u.prototype.delete = o, u.prototype.get = i, u.prototype.has = a, u.prototype.set = s, t.exports = u
        },
        523119: function(t, n, r) {
            var e = r("561662");
            t.exports = function(t, n) {
                for (var r = t.length; r--;)
                    if (e(t[r][0], n)) return r;
                return -1
            }
        },
        112047: function(t, n, r) {
            var e = r("559494"),
                o = r("43332"),
                i = r("285162"),
                a = r("6906"),
                s = /^\[object .+?Constructor\]$/,
                u = Object.prototype,
                p = Function.prototype.toString,
                c = u.hasOwnProperty,
                h = RegExp("^" + p.call(c).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            t.exports = function(t) {
                return !(!i(t) || o(t)) && (e(t) ? h : s).test(a(t))
            }
        },
        745011: function(t, n, r) {
            var e = r("690516")["__core-js_shared__"];
            t.exports = e
        },
        74590: function(t, n, r) {
            var e = r("963201");
            t.exports = function(t, n) {
                var r = t.__data__;
                return e(n) ? r["string" == typeof n ? "string" : "hash"] : r.map
            }
        },
        367753: function(t, n, r) {
            var e = r("112047"),
                o = r("128534");
            t.exports = function(t, n) {
                var r = o(t, n);
                return e(r) ? r : void 0
            }
        },
        128534: function(t, n, r) {
            t.exports = function(t, n) {
                return null == t ? void 0 : t[n]
            }
        },
        843879: function(t, n, r) {
            var e = r("870811");
            t.exports = function() {
                this.__data__ = e ? e(null) : {}, this.size = 0
            }
        },
        169160: function(t, n, r) {
            t.exports = function(t) {
                var n = this.has(t) && delete this.__data__[t];
                return this.size -= n ? 1 : 0, n
            }
        },
        927794: function(t, n, r) {
            var e = r("870811"),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var n = this.__data__;
                if (e) {
                    var r = n[t];
                    return "__lodash_hash_undefined__" === r ? void 0 : r
                }
                return o.call(n, t) ? n[t] : void 0
            }
        },
        979334: function(t, n, r) {
            var e = r("870811"),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var n = this.__data__;
                return e ? void 0 !== n[t] : o.call(n, t)
            }
        },
        898346: function(t, n, r) {
            var e = r("870811");
            t.exports = function(t, n) {
                var r = this.__data__;
                return this.size += this.has(t) ? 0 : 1, r[t] = e && void 0 === n ? "__lodash_hash_undefined__" : n, this
            }
        },
        963201: function(t, n, r) {
            t.exports = function(t) {
                var n = typeof t;
                return "string" == n || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== t : null === t
            }
        },
        43332: function(t, n, r) {
            var e, o = r("745011");
            var i = (e = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + e : "";
            t.exports = function(t) {
                return !!i && i in t
            }
        },
        186489: function(t, n, r) {
            t.exports = function() {
                this.__data__ = [], this.size = 0
            }
        },
        235723: function(t, n, r) {
            var e = r("523119"),
                o = Array.prototype.splice;
            t.exports = function(t) {
                var n = this.__data__,
                    r = e(n, t);
                return !(r < 0) && (r == n.length - 1 ? n.pop() : o.call(n, r, 1), --this.size, !0)
            }
        },
        236748: function(t, n, r) {
            var e = r("523119");
            t.exports = function(t) {
                var n = this.__data__,
                    r = e(n, t);
                return r < 0 ? void 0 : n[r][1]
            }
        },
        285445: function(t, n, r) {
            var e = r("523119");
            t.exports = function(t) {
                return e(this.__data__, t) > -1
            }
        },
        956285: function(t, n, r) {
            var e = r("523119");
            t.exports = function(t, n) {
                var r = this.__data__,
                    o = e(r, t);
                return o < 0 ? (++this.size, r.push([t, n])) : r[o][1] = n, this
            }
        },
        679991: function(t, n, r) {
            var e = r("762774"),
                o = r("263470"),
                i = r("516863");
            t.exports = function() {
                this.size = 0, this.__data__ = {
                    hash: new e,
                    map: new(i || o),
                    string: new e
                }
            }
        },
        169789: function(t, n, r) {
            var e = r("74590");
            t.exports = function(t) {
                var n = e(this, t).delete(t);
                return this.size -= n ? 1 : 0, n
            }
        },
        406449: function(t, n, r) {
            var e = r("74590");
            t.exports = function(t) {
                return e(this, t).get(t)
            }
        },
        66703: function(t, n, r) {
            var e = r("74590");
            t.exports = function(t) {
                return e(this, t).has(t)
            }
        },
        245510: function(t, n, r) {
            var e = r("74590");
            t.exports = function(t, n) {
                var r = e(this, t),
                    o = r.size;
                return r.set(t, n), this.size += r.size == o ? 0 : 1, this
            }
        },
        870811: function(t, n, r) {
            var e = r("367753")(Object, "create");
            t.exports = e
        },
        6906: function(t, n, r) {
            var e = Function.prototype.toString;
            t.exports = function(t) {
                if (null != t) {
                    try {
                        return e.call(t)
                    } catch (t) {}
                    try {
                        return t + ""
                    } catch (t) {}
                }
                return ""
            }
        },
        661201: function(t, n, r) {
            var e = r("664007");

            function o(t, n) {
                if ("function" != typeof t || null != n && "function" != typeof n) throw TypeError("Expected a function");
                var r = function() {
                    var e = arguments,
                        o = n ? n.apply(this, e) : e[0],
                        i = r.cache;
                    if (i.has(o)) return i.get(o);
                    var a = t.apply(this, e);
                    return r.cache = i.set(o, a) || i, a
                };
                return r.cache = new(o.Cache || e), r
            }
            o.Cache = e, t.exports = o
        }
    }
]);
//# sourceMappingURL=ba4019a34c1ac76aa0f1.js.map