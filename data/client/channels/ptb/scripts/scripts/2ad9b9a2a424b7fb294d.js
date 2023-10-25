(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["87696"], {
        938252: function(t, e, r) {
            "use strict";
            t.exports = function(t, e) {
                var r = e.length,
                    n = t.length;
                if (n > r) return !1;
                if (n === r) return t === e;
                t: for (var i = 0, a = 0; i < n; i++) {
                    for (var o = t.charCodeAt(i); a < r;)
                        if (e.charCodeAt(a++) === o) continue t;
                    return !1
                }
                return !0
            }
        },
        109926: function(t, e, r) {
            t = r.nmd(t), ! function(e) {
                var r, n, i, a = /^\s+/,
                    o = /\s+$/,
                    s = 0,
                    f = e.round,
                    u = e.min,
                    l = e.max,
                    c = e.random;

                function h(t, r) {
                    if (r = r || {}, (t = t || "") instanceof h) return t;
                    if (!(this instanceof h)) return new h(t, r);
                    var n = function(t) {
                        var r = {
                                r: 0,
                                g: 0,
                                b: 0
                            },
                            n = 1,
                            i = null,
                            s = null,
                            f = null,
                            c = !1,
                            h = !1;
                        return "string" == typeof t && (t = function(t) {
                            t = t.replace(a, "").replace(o, "").toLowerCase();
                            var e, r = !1;
                            if (q[t]) t = q[t], r = !0;
                            else if ("transparent" == t) return {
                                r: 0,
                                g: 0,
                                b: 0,
                                a: 0,
                                format: "name"
                            };
                            if (e = z.rgb.exec(t)) return {
                                r: e[1],
                                g: e[2],
                                b: e[3]
                            };
                            if (e = z.rgba.exec(t)) return {
                                r: e[1],
                                g: e[2],
                                b: e[3],
                                a: e[4]
                            };
                            if (e = z.hsl.exec(t)) return {
                                h: e[1],
                                s: e[2],
                                l: e[3]
                            };
                            if (e = z.hsla.exec(t)) return {
                                h: e[1],
                                s: e[2],
                                l: e[3],
                                a: e[4]
                            };
                            if (e = z.hsv.exec(t)) return {
                                h: e[1],
                                s: e[2],
                                v: e[3]
                            };
                            if (e = z.hsva.exec(t)) return {
                                h: e[1],
                                s: e[2],
                                v: e[3],
                                a: e[4]
                            };
                            if (e = z.hex8.exec(t)) return {
                                r: O(e[1]),
                                g: O(e[2]),
                                b: O(e[3]),
                                a: O(e[4]) / 255,
                                format: r ? "name" : "hex8"
                            };
                            if (e = z.hex6.exec(t)) return {
                                r: O(e[1]),
                                g: O(e[2]),
                                b: O(e[3]),
                                format: r ? "name" : "hex"
                            };
                            if (e = z.hex4.exec(t)) return {
                                r: O(e[1] + "" + e[1]),
                                g: O(e[2] + "" + e[2]),
                                b: O(e[3] + "" + e[3]),
                                a: O(e[4] + "" + e[4]) / 255,
                                format: r ? "name" : "hex8"
                            };
                            return !!(e = z.hex3.exec(t)) && {
                                r: O(e[1] + "" + e[1]),
                                g: O(e[2] + "" + e[2]),
                                b: O(e[3] + "" + e[3]),
                                format: r ? "name" : "hex"
                            }
                        }(t)), "object" == typeof t && (D(t.r) && D(t.g) && D(t.b) ? (r = function(t, e, r) {
                            return {
                                r: 255 * M(t, 255),
                                g: 255 * M(e, 255),
                                b: 255 * M(r, 255)
                            }
                        }(t.r, t.g, t.b), c = !0, h = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : D(t.h) && D(t.s) && D(t.v) ? (i = P(t.s), s = P(t.v), r = function(t, r, n) {
                            t = 6 * M(t, 360), r = M(r, 100), n = M(n, 100);
                            var i = e.floor(t),
                                a = t - i,
                                o = n * (1 - r),
                                s = n * (1 - a * r),
                                f = n * (1 - (1 - a) * r),
                                u = i % 6;
                            return {
                                r: 255 * [n, s, o, o, f, n][u],
                                g: 255 * [f, n, n, s, o, o][u],
                                b: 255 * [o, o, f, n, n, s][u]
                            }
                        }(t.h, i, s), c = !0, h = "hsv") : D(t.h) && D(t.s) && D(t.l) && (i = P(t.s), f = P(t.l), r = function(t, e, r) {
                            var n, i, a;

                            function o(t, e, r) {
                                return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? t + (e - t) * 6 * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
                            }
                            if (t = M(t, 360), e = M(e, 100), r = M(r, 100), 0 === e) n = i = a = r;
                            else {
                                var s = r < .5 ? r * (1 + e) : r + e - r * e,
                                    f = 2 * r - s;
                                n = o(f, s, t + 1 / 3), i = o(f, s, t), a = o(f, s, t - 1 / 3)
                            }
                            return {
                                r: 255 * n,
                                g: 255 * i,
                                b: 255 * a
                            }
                        }(t.h, i, f), c = !0, h = "hsl"), t.hasOwnProperty("a") && (n = t.a)), n = I(n), {
                            ok: c,
                            format: t.format || h,
                            r: u(255, l(r.r, 0)),
                            g: u(255, l(r.g, 0)),
                            b: u(255, l(r.b, 0)),
                            a: n
                        }
                    }(t);
                    this._originalInput = t, this._r = n.r, this._g = n.g, this._b = n.b, this._a = n.a, this._roundA = f(100 * this._a) / 100, this._format = r.format || n.format, this._gradientType = r.gradientType, this._r < 1 && (this._r = f(this._r)), this._g < 1 && (this._g = f(this._g)), this._b < 1 && (this._b = f(this._b)), this._ok = n.ok, this._tc_id = s++
                }
                h.prototype = {
                    isDark: function() {
                        return 128 > this.getBrightness()
                    },
                    isLight: function() {
                        return !this.isDark()
                    },
                    isValid: function() {
                        return this._ok
                    },
                    getOriginalInput: function() {
                        return this._originalInput
                    },
                    getFormat: function() {
                        return this._format
                    },
                    getAlpha: function() {
                        return this._a
                    },
                    getBrightness: function() {
                        var t = this.toRgb();
                        return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
                    },
                    getLuminance: function() {
                        var t, r, n, i, a, o, s = this.toRgb();
                        return t = s.r / 255, r = s.g / 255, n = s.b / 255, i = t <= .03928 ? t / 12.92 : e.pow((t + .055) / 1.055, 2.4), a = r <= .03928 ? r / 12.92 : e.pow((r + .055) / 1.055, 2.4), .2126 * i + .7152 * a + .0722 * (o = n <= .03928 ? n / 12.92 : e.pow((n + .055) / 1.055, 2.4))
                    },
                    setAlpha: function(t) {
                        return this._a = I(t), this._roundA = f(100 * this._a) / 100, this
                    },
                    toHsv: function() {
                        var t = d(this._r, this._g, this._b);
                        return {
                            h: 360 * t.h,
                            s: t.s,
                            v: t.v,
                            a: this._a
                        }
                    },
                    toHsvString: function() {
                        var t = d(this._r, this._g, this._b),
                            e = f(360 * t.h),
                            r = f(100 * t.s),
                            n = f(100 * t.v);
                        return 1 == this._a ? "hsv(" + e + ", " + r + "%, " + n + "%)" : "hsva(" + e + ", " + r + "%, " + n + "%, " + this._roundA + ")"
                    },
                    toHsl: function() {
                        var t = g(this._r, this._g, this._b);
                        return {
                            h: 360 * t.h,
                            s: t.s,
                            l: t.l,
                            a: this._a
                        }
                    },
                    toHslString: function() {
                        var t = g(this._r, this._g, this._b),
                            e = f(360 * t.h),
                            r = f(100 * t.s),
                            n = f(100 * t.l);
                        return 1 == this._a ? "hsl(" + e + ", " + r + "%, " + n + "%)" : "hsla(" + e + ", " + r + "%, " + n + "%, " + this._roundA + ")"
                    },
                    toHex: function(t) {
                        return b(this._r, this._g, this._b, t)
                    },
                    toHexString: function(t) {
                        return "#" + this.toHex(t)
                    },
                    toHex8: function(t) {
                        return function(t, e, r, n, i) {
                            var a = [j(f(t).toString(16)), j(f(e).toString(16)), j(f(r).toString(16)), j(L(n))];
                            return i && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) && a[3].charAt(0) == a[3].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("")
                        }(this._r, this._g, this._b, this._a, t)
                    },
                    toHex8String: function(t) {
                        return "#" + this.toHex8(t)
                    },
                    toRgb: function() {
                        return {
                            r: f(this._r),
                            g: f(this._g),
                            b: f(this._b),
                            a: this._a
                        }
                    },
                    toRgbString: function() {
                        return 1 == this._a ? "rgb(" + f(this._r) + ", " + f(this._g) + ", " + f(this._b) + ")" : "rgba(" + f(this._r) + ", " + f(this._g) + ", " + f(this._b) + ", " + this._roundA + ")"
                    },
                    toPercentageRgb: function() {
                        return {
                            r: f(100 * M(this._r, 255)) + "%",
                            g: f(100 * M(this._g, 255)) + "%",
                            b: f(100 * M(this._b, 255)) + "%",
                            a: this._a
                        }
                    },
                    toPercentageRgbString: function() {
                        return 1 == this._a ? "rgb(" + f(100 * M(this._r, 255)) + "%, " + f(100 * M(this._g, 255)) + "%, " + f(100 * M(this._b, 255)) + "%)" : "rgba(" + f(100 * M(this._r, 255)) + "%, " + f(100 * M(this._g, 255)) + "%, " + f(100 * M(this._b, 255)) + "%, " + this._roundA + ")"
                    },
                    toName: function() {
                        return 0 === this._a ? "transparent" : !(this._a < 1) && (E[b(this._r, this._g, this._b, !0)] || !1)
                    },
                    toFilter: function(t) {
                        var e = "#" + p(this._r, this._g, this._b, this._a),
                            r = e,
                            n = this._gradientType ? "GradientType = 1, " : "";
                        if (t) {
                            var i = h(t);
                            r = "#" + p(i._r, i._g, i._b, i._a)
                        }
                        return "progid:DXImageTransform.Microsoft.gradient(" + n + "startColorstr=" + e + ",endColorstr=" + r + ")"
                    },
                    toString: function(t) {
                        var e = !!t;
                        t = t || this._format;
                        var r = !1,
                            n = this._a < 1 && this._a >= 0;
                        if (!e && n && ("hex" === t || "hex6" === t || "hex3" === t || "hex4" === t || "hex8" === t || "name" === t)) return "name" === t && 0 === this._a ? this.toName() : this.toRgbString();
                        return "rgb" === t && (r = this.toRgbString()), "prgb" === t && (r = this.toPercentageRgbString()), ("hex" === t || "hex6" === t) && (r = this.toHexString()), "hex3" === t && (r = this.toHexString(!0)), "hex4" === t && (r = this.toHex8String(!0)), "hex8" === t && (r = this.toHex8String()), "name" === t && (r = this.toName()), "hsl" === t && (r = this.toHslString()), "hsv" === t && (r = this.toHsvString()), r || this.toHexString()
                    },
                    clone: function() {
                        return h(this.toString())
                    },
                    _applyModification: function(t, e) {
                        var r = t.apply(null, [this].concat([].slice.call(e)));
                        return this._r = r._r, this._g = r._g, this._b = r._b, this.setAlpha(r._a), this
                    },
                    lighten: function() {
                        return this._applyModification(y, arguments)
                    },
                    brighten: function() {
                        return this._applyModification(A, arguments)
                    },
                    darken: function() {
                        return this._applyModification(x, arguments)
                    },
                    desaturate: function() {
                        return this._applyModification(_, arguments)
                    },
                    saturate: function() {
                        return this._applyModification(m, arguments)
                    },
                    greyscale: function() {
                        return this._applyModification(v, arguments)
                    },
                    spin: function() {
                        return this._applyModification(k, arguments)
                    },
                    _applyCombination: function(t, e) {
                        return t.apply(null, [this].concat([].slice.call(e)))
                    },
                    analogous: function() {
                        return this._applyCombination(C, arguments)
                    },
                    complement: function() {
                        return this._applyCombination(w, arguments)
                    },
                    monochromatic: function() {
                        return this._applyCombination(F, arguments)
                    },
                    splitcomplement: function() {
                        return this._applyCombination(H, arguments)
                    },
                    triad: function() {
                        return this._applyCombination(S, arguments)
                    },
                    tetrad: function() {
                        return this._applyCombination(R, arguments)
                    }
                }, h.fromRatio = function(t, e) {
                    if ("object" == typeof t) {
                        var r = {};
                        for (var n in t) t.hasOwnProperty(n) && ("a" === n ? r[n] = t[n] : r[n] = P(t[n]));
                        t = r
                    }
                    return h(t, e)
                };

                function g(t, e, r) {
                    t = M(t, 255), e = M(e, 255);
                    var n = l(t, e, r = M(r, 255)),
                        i = u(t, e, r),
                        a, o, s = (n + i) / 2;
                    if (n == i) a = o = 0;
                    else {
                        var f = n - i;
                        switch (o = s > .5 ? f / (2 - n - i) : f / (n + i), n) {
                            case t:
                                a = (e - r) / f + (e < r ? 6 : 0);
                                break;
                            case e:
                                a = (r - t) / f + 2;
                                break;
                            case r:
                                a = (t - e) / f + 4
                        }
                        a /= 6
                    }
                    return {
                        h: a,
                        s: o,
                        l: s
                    }
                }

                function d(t, e, r) {
                    t = M(t, 255), e = M(e, 255);
                    var n, i = l(t, e, r = M(r, 255)),
                        a = u(t, e, r);
                    var o = i - a;
                    if (i == a) n = 0;
                    else {
                        switch (i) {
                            case t:
                                n = (e - r) / o + (e < r ? 6 : 0);
                                break;
                            case e:
                                n = (r - t) / o + 2;
                                break;
                            case r:
                                n = (t - e) / o + 4
                        }
                        n /= 6
                    }
                    return {
                        h: n,
                        s: 0 === i ? 0 : o / i,
                        v: i
                    }
                }

                function b(t, e, r, n) {
                    var i = [j(f(t).toString(16)), j(f(e).toString(16)), j(f(r).toString(16))];
                    return n && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
                }

                function p(t, e, r, n) {
                    return [j(L(n)), j(f(t).toString(16)), j(f(e).toString(16)), j(f(r).toString(16))].join("")
                }

                function _(t, e) {
                    e = 0 === e ? 0 : e || 10;
                    var r = h(t).toHsl();
                    return r.s -= e / 100, r.s = N(r.s), h(r)
                }

                function m(t, e) {
                    e = 0 === e ? 0 : e || 10;
                    var r = h(t).toHsl();
                    return r.s += e / 100, r.s = N(r.s), h(r)
                }

                function v(t) {
                    return h(t).desaturate(100)
                }

                function y(t, e) {
                    e = 0 === e ? 0 : e || 10;
                    var r = h(t).toHsl();
                    return r.l += e / 100, r.l = N(r.l), h(r)
                }

                function A(t, e) {
                    e = 0 === e ? 0 : e || 10;
                    var r = h(t).toRgb();
                    return r.r = l(0, u(255, r.r - f(-(255 * (e / 100))))), r.g = l(0, u(255, r.g - f(-(255 * (e / 100))))), r.b = l(0, u(255, r.b - f(-(255 * (e / 100))))), h(r)
                }

                function x(t, e) {
                    e = 0 === e ? 0 : e || 10;
                    var r = h(t).toHsl();
                    return r.l -= e / 100, r.l = N(r.l), h(r)
                }

                function k(t, e) {
                    var r = h(t).toHsl(),
                        n = (r.h + e) % 360;
                    return r.h = n < 0 ? 360 + n : n, h(r)
                }

                function w(t) {
                    var e = h(t).toHsl();
                    return e.h = (e.h + 180) % 360, h(e)
                }

                function S(t) {
                    var e = h(t).toHsl(),
                        r = e.h;
                    return [h(t), h({
                        h: (r + 120) % 360,
                        s: e.s,
                        l: e.l
                    }), h({
                        h: (r + 240) % 360,
                        s: e.s,
                        l: e.l
                    })]
                }

                function R(t) {
                    var e = h(t).toHsl(),
                        r = e.h;
                    return [h(t), h({
                        h: (r + 90) % 360,
                        s: e.s,
                        l: e.l
                    }), h({
                        h: (r + 180) % 360,
                        s: e.s,
                        l: e.l
                    }), h({
                        h: (r + 270) % 360,
                        s: e.s,
                        l: e.l
                    })]
                }

                function H(t) {
                    var e = h(t).toHsl(),
                        r = e.h;
                    return [h(t), h({
                        h: (r + 72) % 360,
                        s: e.s,
                        l: e.l
                    }), h({
                        h: (r + 216) % 360,
                        s: e.s,
                        l: e.l
                    })]
                }

                function C(t, e, r) {
                    e = e || 6, r = r || 30;
                    var n = h(t).toHsl(),
                        i = 360 / r,
                        a = [h(t)];
                    for (n.h = (n.h - (i * e >> 1) + 720) % 360; --e;) n.h = (n.h + i) % 360, a.push(h(n));
                    return a
                }

                function F(t, e) {
                    e = e || 6;
                    for (var r = h(t).toHsv(), n = r.h, i = r.s, a = r.v, o = [], s = 1 / e; e--;) o.push(h({
                        h: n,
                        s: i,
                        v: a
                    })), a = (a + s) % 1;
                    return o
                }
                h.equals = function(t, e) {
                    return !!t && !!e && h(t).toRgbString() == h(e).toRgbString()
                }, h.random = function() {
                    return h.fromRatio({
                        r: c(),
                        g: c(),
                        b: c()
                    })
                }, h.mix = function(t, e, r) {
                    r = 0 === r ? 0 : r || 50;
                    var n = h(t).toRgb(),
                        i = h(e).toRgb(),
                        a = r / 100;
                    return h({
                        r: (i.r - n.r) * a + n.r,
                        g: (i.g - n.g) * a + n.g,
                        b: (i.b - n.b) * a + n.b,
                        a: (i.a - n.a) * a + n.a
                    })
                }, h.readability = function(t, r) {
                    var n = h(t),
                        i = h(r);
                    return (e.max(n.getLuminance(), i.getLuminance()) + .05) / (e.min(n.getLuminance(), i.getLuminance()) + .05)
                }, h.isReadable = function(t, e, r) {
                    var n, i, a = h.readability(t, e);
                    switch (i = !1, (n = function(t) {
                            var e, r;
                            return e = ((t = t || {
                                level: "AA",
                                size: "small"
                            }).level || "AA").toUpperCase(), r = (t.size || "small").toLowerCase(), "AA" !== e && "AAA" !== e && (e = "AA"), "small" !== r && "large" !== r && (r = "small"), {
                                level: e,
                                size: r
                            }
                        }(r)).level + n.size) {
                        case "AAsmall":
                        case "AAAlarge":
                            i = a >= 4.5;
                            break;
                        case "AAlarge":
                            i = a >= 3;
                            break;
                        case "AAAsmall":
                            i = a >= 7
                    }
                    return i
                }, h.mostReadable = function(t, e, r) {
                    var n, i, a, o, s = null,
                        f = 0;
                    i = (r = r || {}).includeFallbackColors, a = r.level, o = r.size;
                    for (var u = 0; u < e.length; u++)(n = h.readability(t, e[u])) > f && (f = n, s = h(e[u]));
                    return h.isReadable(t, s, {
                        level: a,
                        size: o
                    }) || !i ? s : (r.includeFallbackColors = !1, h.mostReadable(t, ["#fff", "#000"], r))
                };
                var q = h.names = {
                        aliceblue: "f0f8ff",
                        antiquewhite: "faebd7",
                        aqua: "0ff",
                        aquamarine: "7fffd4",
                        azure: "f0ffff",
                        beige: "f5f5dc",
                        bisque: "ffe4c4",
                        black: "000",
                        blanchedalmond: "ffebcd",
                        blue: "00f",
                        blueviolet: "8a2be2",
                        brown: "a52a2a",
                        burlywood: "deb887",
                        burntsienna: "ea7e5d",
                        cadetblue: "5f9ea0",
                        chartreuse: "7fff00",
                        chocolate: "d2691e",
                        coral: "ff7f50",
                        cornflowerblue: "6495ed",
                        cornsilk: "fff8dc",
                        crimson: "dc143c",
                        cyan: "0ff",
                        darkblue: "00008b",
                        darkcyan: "008b8b",
                        darkgoldenrod: "b8860b",
                        darkgray: "a9a9a9",
                        darkgreen: "006400",
                        darkgrey: "a9a9a9",
                        darkkhaki: "bdb76b",
                        darkmagenta: "8b008b",
                        darkolivegreen: "556b2f",
                        darkorange: "ff8c00",
                        darkorchid: "9932cc",
                        darkred: "8b0000",
                        darksalmon: "e9967a",
                        darkseagreen: "8fbc8f",
                        darkslateblue: "483d8b",
                        darkslategray: "2f4f4f",
                        darkslategrey: "2f4f4f",
                        darkturquoise: "00ced1",
                        darkviolet: "9400d3",
                        deeppink: "ff1493",
                        deepskyblue: "00bfff",
                        dimgray: "696969",
                        dimgrey: "696969",
                        dodgerblue: "1e90ff",
                        firebrick: "b22222",
                        floralwhite: "fffaf0",
                        forestgreen: "228b22",
                        fuchsia: "f0f",
                        gainsboro: "dcdcdc",
                        ghostwhite: "f8f8ff",
                        gold: "ffd700",
                        goldenrod: "daa520",
                        gray: "808080",
                        green: "008000",
                        greenyellow: "adff2f",
                        grey: "808080",
                        honeydew: "f0fff0",
                        hotpink: "ff69b4",
                        indianred: "cd5c5c",
                        indigo: "4b0082",
                        ivory: "fffff0",
                        khaki: "f0e68c",
                        lavender: "e6e6fa",
                        lavenderblush: "fff0f5",
                        lawngreen: "7cfc00",
                        lemonchiffon: "fffacd",
                        lightblue: "add8e6",
                        lightcoral: "f08080",
                        lightcyan: "e0ffff",
                        lightgoldenrodyellow: "fafad2",
                        lightgray: "d3d3d3",
                        lightgreen: "90ee90",
                        lightgrey: "d3d3d3",
                        lightpink: "ffb6c1",
                        lightsalmon: "ffa07a",
                        lightseagreen: "20b2aa",
                        lightskyblue: "87cefa",
                        lightslategray: "789",
                        lightslategrey: "789",
                        lightsteelblue: "b0c4de",
                        lightyellow: "ffffe0",
                        lime: "0f0",
                        limegreen: "32cd32",
                        linen: "faf0e6",
                        magenta: "f0f",
                        maroon: "800000",
                        mediumaquamarine: "66cdaa",
                        mediumblue: "0000cd",
                        mediumorchid: "ba55d3",
                        mediumpurple: "9370db",
                        mediumseagreen: "3cb371",
                        mediumslateblue: "7b68ee",
                        mediumspringgreen: "00fa9a",
                        mediumturquoise: "48d1cc",
                        mediumvioletred: "c71585",
                        midnightblue: "191970",
                        mintcream: "f5fffa",
                        mistyrose: "ffe4e1",
                        moccasin: "ffe4b5",
                        navajowhite: "ffdead",
                        navy: "000080",
                        oldlace: "fdf5e6",
                        olive: "808000",
                        olivedrab: "6b8e23",
                        orange: "ffa500",
                        orangered: "ff4500",
                        orchid: "da70d6",
                        palegoldenrod: "eee8aa",
                        palegreen: "98fb98",
                        paleturquoise: "afeeee",
                        palevioletred: "db7093",
                        papayawhip: "ffefd5",
                        peachpuff: "ffdab9",
                        peru: "cd853f",
                        pink: "ffc0cb",
                        plum: "dda0dd",
                        powderblue: "b0e0e6",
                        purple: "800080",
                        rebeccapurple: "663399",
                        red: "f00",
                        rosybrown: "bc8f8f",
                        royalblue: "4169e1",
                        saddlebrown: "8b4513",
                        salmon: "fa8072",
                        sandybrown: "f4a460",
                        seagreen: "2e8b57",
                        seashell: "fff5ee",
                        sienna: "a0522d",
                        silver: "c0c0c0",
                        skyblue: "87ceeb",
                        slateblue: "6a5acd",
                        slategray: "708090",
                        slategrey: "708090",
                        snow: "fffafa",
                        springgreen: "00ff7f",
                        steelblue: "4682b4",
                        tan: "d2b48c",
                        teal: "008080",
                        thistle: "d8bfd8",
                        tomato: "ff6347",
                        turquoise: "40e0d0",
                        violet: "ee82ee",
                        wheat: "f5deb3",
                        white: "fff",
                        whitesmoke: "f5f5f5",
                        yellow: "ff0",
                        yellowgreen: "9acd32"
                    },
                    E = h.hexNames = function(t) {
                        var e = {};
                        for (var r in t) t.hasOwnProperty(r) && (e[t[r]] = r);
                        return e
                    }(q);

                function I(t) {
                    return (isNaN(t = parseFloat(t)) || t < 0 || t > 1) && (t = 1), t
                }

                function M(t, r) {
                    (function(t) {
                        return "string" == typeof t && -1 != t.indexOf(".") && 1 === parseFloat(t)
                    })(t) && (t = "100%");
                    var n = function(t) {
                        return "string" == typeof t && -1 != t.indexOf("%")
                    }(t);
                    return (t = u(r, l(0, parseFloat(t))), n && (t = parseInt(t * r, 10) / 100), 1e-6 > e.abs(t - r)) ? 1 : t % r / parseFloat(r)
                }

                function N(t) {
                    return u(1, l(0, t))
                }

                function O(t) {
                    return parseInt(t, 16)
                }

                function j(t) {
                    return 1 == t.length ? "0" + t : "" + t
                }

                function P(t) {
                    return t <= 1 && (t = 100 * t + "%"), t
                }

                function L(t) {
                    return e.round(255 * parseFloat(t)).toString(16)
                }

                function T(t) {
                    return O(t) / 255
                }
                var z = (n = "[\\s|\\(]+(" + (r = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?", i = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?", {
                    CSS_UNIT: new RegExp(r),
                    rgb: RegExp("rgb" + n),
                    rgba: RegExp("rgba" + i),
                    hsl: RegExp("hsl" + n),
                    hsla: RegExp("hsla" + i),
                    hsv: RegExp("hsv" + n),
                    hsva: RegExp("hsva" + i),
                    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                });

                function D(t) {
                    return !!z.CSS_UNIT.exec(t)
                }
                void 0 !== t && t.exports ? t.exports = h : "function" == typeof define && define.amd ? define(function() {
                    return h
                }) : window.tinycolor = h
            }(Math)
        },
        184557: function(t, e, r) {
            "use strict";

            function n(t) {
                let e = "==".slice(0, (4 - t.length % 4) % 4),
                    r = t.replace(/-/g, "+").replace(/_/g, "/") + e,
                    n = atob(r),
                    i = new ArrayBuffer(n.length),
                    a = new Uint8Array(i);
                for (let t = 0; t < n.length; t++) a[t] = n.charCodeAt(t);
                return i
            }

            function i(t) {
                let e = new Uint8Array(t),
                    r = "";
                for (let t of e) r += String.fromCharCode(t);
                let n = btoa(r),
                    i = n.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
                return i
            }
            r.r(e), r.d(e, {
                create: function() {
                    return m
                },
                get: function() {
                    return v
                }
            });
            var a = "copy",
                o = "convert";

            function s(t, e, r) {
                if (e === a) return r;
                if (e === o) return t(r);
                if (e instanceof Array) return r.map(r => s(t, e[0], r));
                if (e instanceof Object) {
                    let n = {};
                    for (let [i, a] of Object.entries(e)) {
                        if (a.derive) {
                            let t = a.derive(r);
                            void 0 !== t && (r[i] = t)
                        }
                        if (!(i in r)) {
                            if (a.required) throw Error("Missing key: ".concat(i));
                            continue
                        }
                        if (null == r[i]) {
                            n[i] = null;
                            continue
                        }
                        n[i] = s(t, a.schema, r[i])
                    }
                    return n
                }
            }

            function f(t, e) {
                return {
                    required: !0,
                    schema: t,
                    derive: e
                }
            }

            function u(t) {
                return {
                    required: !0,
                    schema: t
                }
            }

            function l(t) {
                return {
                    required: !1,
                    schema: t
                }
            }
            var c = {
                    type: u(a),
                    id: u(o),
                    transports: l(a)
                },
                h = {
                    appid: l(a),
                    appidExclude: l(a),
                    credProps: l(a)
                },
                g = {
                    appid: l(a),
                    appidExclude: l(a),
                    credProps: l(a)
                },
                d = {
                    publicKey: u({
                        rp: u(a),
                        user: u({
                            id: u(o),
                            name: u(a),
                            displayName: u(a)
                        }),
                        challenge: u(o),
                        pubKeyCredParams: u(a),
                        timeout: l(a),
                        excludeCredentials: l([c]),
                        authenticatorSelection: l(a),
                        attestation: l(a),
                        extensions: l(h)
                    }),
                    signal: l(a)
                },
                b = {
                    type: u(a),
                    id: u(a),
                    rawId: u(o),
                    authenticatorAttachment: l(a),
                    response: u({
                        clientDataJSON: u(o),
                        attestationObject: u(o),
                        transports: f(a, t => {
                            var e;
                            return (null == (e = t.getTransports) ? void 0 : e.call(t)) || []
                        })
                    }),
                    clientExtensionResults: f(g, t => t.getClientExtensionResults())
                },
                p = {
                    mediation: l(a),
                    publicKey: u({
                        challenge: u(o),
                        timeout: l(a),
                        rpId: l(a),
                        allowCredentials: l([c]),
                        userVerification: l(a),
                        extensions: l(h)
                    }),
                    signal: l(a)
                },
                _ = {
                    type: u(a),
                    id: u(a),
                    rawId: u(o),
                    authenticatorAttachment: l(a),
                    response: u({
                        clientDataJSON: u(o),
                        authenticatorData: u(o),
                        signature: u(o),
                        userHandle: u(o)
                    }),
                    clientExtensionResults: f(g, t => t.getClientExtensionResults())
                };
            async function m(t) {
                let e = await navigator.credentials.create(s(n, d, t));
                return s(i, b, e)
            }
            async function v(t) {
                let e = await navigator.credentials.get(s(n, p, t));
                return s(i, _, e)
            }
        }
    }
]);
//# sourceMappingURL=2ad9b9a2a424b7fb294d.js.map