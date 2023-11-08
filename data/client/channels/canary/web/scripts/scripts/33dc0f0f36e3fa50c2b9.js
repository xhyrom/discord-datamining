(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["9989"], {
        516555: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ConfettiCanvas: function() {
                    return R
                },
                Environment: function() {
                    return h
                },
                SpriteCanvas: function() {
                    return O
                },
                useConfettiCannon: function() {
                    return P
                }
            }), n("70102"), n("222007"), n("424973");
            var i = n("884691"),
                r = n("748820"),
                a = n("414456"),
                o = n.n(a);

            function u(t, e) {
                var n = t.x,
                    i = t.y;
                return n > e.x && n < e.x + e.width && i > e.y && i < e.y + e.height
            }

            function c(t, e) {
                return t * e * e * (e > 0 ? -1 : 1)
            }
            var l = function() {
                    function t(t) {
                        this.id = t.id, this.position = t.position, this.velocity = t.velocity, this.rotation = t.rotation, this.dragCoefficient = t.dragCoefficient, this.size = t.size, this.opacity = t.opacity, this.spriteX = t.spriteX, this.spriteY = t.spriteY, this.spriteWidth = t.spriteWidth, this.spriteHeight = t.spriteHeight, this._lastUpdatedAt = Date.now()
                    }
                    return t.prototype.getNewForces = function(t, e) {
                        var n, i, r, a, o = t.wind * e,
                            u = -t.gravity * e;
                        return {
                            x: o + (n = this.dragCoefficient.x, n * (i = this.velocity.x) * i * (i > 0 ? -1 : 1)),
                            y: u + (r = this.dragCoefficient.y, r * (a = this.velocity.y) * a * (a > 0 ? -1 : 1))
                        }
                    }, t.prototype.update = function(t) {
                        var e = Date.now(),
                            n = (e - this._lastUpdatedAt) / 100;
                        this.rotation.update(n), this.dragCoefficient.update(n);
                        var i = this.getNewForces(t, n),
                            r = i.x,
                            a = i.y;
                        this.velocity.update(n), this.velocity.x += r, this.velocity.y += a, this.position.update(n), this.position.x += this.velocity.x * n, this.position.y += this.velocity.y * n, this.size.update(n), this.opacity.update(n), this._lastUpdatedAt = e
                    }, t.prototype.previewPositionUpdate = function(t, e) {
                        var n = e / 100,
                            i = this.velocity.previewUpdate(n),
                            r = this.getNewForces(t, n),
                            a = r.x,
                            o = r.y;
                        i.x += a, i.y += o;
                        var u = this.position.previewUpdate(n);
                        return u.x += i.x * n, u.y += i.y * n, u
                    }, t.prototype.draw = function(t, e) {
                        e.save(), e.globalAlpha = this.opacity.value, e.setTransform((new DOMMatrix).translateSelf(this.position.x * n.g.devicePixelRatio, this.position.y * n.g.devicePixelRatio).rotateSelf(this.rotation.x, this.rotation.y, this.rotation.z)), e.drawImage(t, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, -this.width / 2 * n.g.devicePixelRatio, -this.height / 2 * n.g.devicePixelRatio, this.width * n.g.devicePixelRatio, this.height * n.g.devicePixelRatio), e.restore()
                    }, t.prototype.shouldDestroy = function(t, e) {
                        return this.opacity.value < 0 || e.gravity >= 0 && this.velocity.y < 0 && this.position.y + this.height < 0 || e.gravity <= 0 && this.velocity.y > 0 && this.position.y - this.height > t.height || e.wind >= 0 && this.velocity.x > 0 && this.position.x - this.width > t.width || e.wind <= 0 && this.velocity.x < 0 && this.position.x + this.width < 0
                    }, Object.defineProperty(t.prototype, "width", {
                        get: function() {
                            return this.size.x
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "height", {
                        get: function() {
                            return this.size.y
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.addForce = function(t) {
                        this.velocity.x += t.x, this.velocity.y += t.y
                    }, t
                }(),
                s = {
                    velocity: {
                        type: "static",
                        value: 0
                    },
                    rotation: {
                        type: "static",
                        value: 0
                    },
                    dragCoefficient: {
                        type: "static",
                        value: .001
                    },
                    opacity: {
                        type: "static",
                        value: 1
                    }
                },
                h = function(t) {
                    var e = void 0 === t ? {} : t,
                        n = e.gravity,
                        i = e.wind;
                    this.gravity = -9.8, this.wind = 0, this.gravity = null != n ? n : this.gravity, this.wind = null != i ? i : this.wind
                },
                f = function(t, e) {
                    return (f = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
                };

            function d(t, e) {
                if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function n() {
                    this.constructor = t
                }
                f(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var p = function() {
                    return (p = Object.assign || function(t) {
                        for (var e, n = 1, i = arguments.length; n < i; n++)
                            for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        return t
                    }).apply(this, arguments)
                },
                v = function(t) {
                    this.value = t
                },
                y = function() {
                    function t(t, e) {
                        this._x = t, this._y = e
                    }
                    return t.prototype.update = function(t) {
                        this._x.update(t), this._y.update(t)
                    }, t.prototype.previewUpdate = function(t) {
                        return {
                            x: this._x.previewUpdate(t),
                            y: this._y.previewUpdate(t)
                        }
                    }, Object.defineProperty(t.prototype, "x", {
                        get: function() {
                            return this._x.value
                        },
                        set: function(t) {
                            this._x.value = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "y", {
                        get: function() {
                            return this._y.value
                        },
                        set: function(t) {
                            this._y.value = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(),
                g = function(t) {
                    function e(e, n, i) {
                        var r = t.call(this, e, n) || this;
                        return r._z = i, r
                    }
                    return d(e, t), e.prototype.update = function(e) {
                        t.prototype.update.call(this, e), this._z.update(e)
                    }, e.prototype.previewUpdate = function(e) {
                        var n = t.prototype.previewUpdate.call(this, e);
                        return p(p({}, n), {
                            z: this._z.previewUpdate(e)
                        })
                    }, Object.defineProperty(e.prototype, "z", {
                        get: function() {
                            return this._z.value
                        },
                        set: function(t) {
                            this._z.value = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e
                }(y),
                m = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return d(e, t), e.prototype.update = function() {}, e.prototype.previewUpdate = function() {
                        return this.value
                    }, e
                }(v),
                w = function(t) {
                    function e(e, n) {
                        var i = t.call(this, e) || this;
                        return i.addValue = n, i
                    }
                    return d(e, t), e.prototype.update = function(t) {
                        this.value = this.previewUpdate(t)
                    }, e.prototype.previewUpdate = function(t) {
                        return this.value + this.addValue * t
                    }, e
                }(v),
                x = function(t) {
                    function e(e, n, i, r, a, o) {
                        var u = t.call(this, e) || this;
                        u.min = n, u.max = i, u.duration = r;
                        var c = u.value / (u.max - u.min) * u.duration,
                            l = isNaN(c) ? 0 : c;
                        return u.timePassed = l < 0 ? u.duration - l : l, u.directionMultiplier = a, u.easingFunction = o, u
                    }
                    return d(e, t), e.prototype.update = function(t) {
                        var e = this.doUpdate(t),
                            n = e[0],
                            i = e[1],
                            r = e[2];
                        this.value = n, this.directionMultiplier = r, this.timePassed = i
                    }, e.prototype.previewUpdate = function(t) {
                        return this.doUpdate(t)[0]
                    }, e.prototype.doUpdate = function(t) {
                        var e = this.max - this.min,
                            n = this.timePassed + t * this.directionMultiplier,
                            i = Math.min(Math.max(n, 0), this.duration),
                            r = n < 0 || n > this.duration ? -1 * this.directionMultiplier : this.directionMultiplier,
                            a = this.easingFunction(i, this.min, e, this.duration);
                        return [isNaN(a) ? 0 : a, i, r]
                    }, e
                }(v);

            function b(t, e) {
                return t === e ? t : Math.random() * (e - t + 1) + t
            }

            function C(t) {
                var e = Math.floor(b(0, t.length - 1));
                return [t[e], e]
            }

            function z(t, e) {
                return C([t, e])[0]
            }

            function k(t) {
                return "number" == typeof t ? {
                    x: t,
                    y: t
                } : t
            }

            function _(t) {
                return "number" == typeof t ? {
                    x: t,
                    y: t,
                    z: t
                } : t
            }

            function A(t) {
                return function(t) {
                    switch (t.type) {
                        case "static":
                            var e = k(t.value);
                            return new y(new m(e.x), new m(e.y));
                        case "static-random":
                            var n = k(t.minValue),
                                i = k(t.maxValue);
                            return new y(new m(b(n.x, i.x)), new m(b(n.y, i.y)));
                        case "linear":
                            e = k(t.value);
                            var r = k(t.addValue);
                            return new y(new w(e.x, r.x), new w(e.y, r.y));
                        case "linear-random":
                            n = k(t.minValue), i = k(t.maxValue);
                            var a = k(t.minAddValue),
                                o = k(t.maxAddValue);
                            return new y(new w(b(n.x, i.x), b(a.x, o.x)), new w(b(n.y, i.y), b(a.x, o.x)));
                        case "oscillating":
                            e = k(t.value);
                            var u = k(t.start),
                                c = k(t.final),
                                l = k(t.duration),
                                s = k(t.direction);
                            return new y(new x(e.x, u.x, c.x, l.x, s.x, t.easingFunction), new x(e.y, u.y, c.y, l.x, s.y, t.easingFunction));
                        case "oscillating-random":
                            n = k(t.minValue), i = k(t.maxValue);
                            var h = k(t.minStart),
                                f = k(t.maxStart),
                                d = k(t.minFinal),
                                p = k(t.maxFinal),
                                v = k(t.minDuration),
                                g = k(t.maxDuration),
                                _ = k(t.minDirection),
                                A = k(t.maxDirection);
                            return new y(new x(b(n.x, i.x), b(h.x, f.x), b(d.x, p.x), b(v.x, g.x), z(_.x, A.x), C(t.easingFunctions)[0]), new x(b(n.y, i.y), b(h.y, f.y), b(d.y, p.y), b(v.y, g.y), z(_.y, A.y), C(t.easingFunctions)[0]))
                    }
                }(p(p({}, t), {
                    valueType: "Vector2"
                }))
            }
            var R = i.forwardRef(function(t, e) {
                var a = t.className,
                    o = t.environment,
                    c = t.onClick,
                    h = t.onMouseDown,
                    f = t.onMouseMove,
                    d = t.onMouseUp,
                    v = t.onBeforeRender,
                    y = t.onAfterRender,
                    k = function(t, e) {
                        var n = {};
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && 0 > e.indexOf(i) && (n[i] = t[i]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (i = Object.getOwnPropertySymbols(t); r < i.length; r++) 0 > e.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]])
                        }
                        return n
                    }(t, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    R = i.useRef(null),
                    O = i.useRef(new Map),
                    P = i.useRef(null),
                    S = i.useRef(0),
                    V = i.useRef(0),
                    E = i.useCallback(function() {
                        var t = R.current;
                        if (null != t) {
                            var e = t.getContext("2d");
                            if (null != e) {
                                e.clearRect(0, 0, t.width, t.height), null == v || v(e), O.current.forEach(function(n, i) {
                                    var r = n.confetti,
                                        a = n.spriteCanvas;
                                    r.update(o), r.draw(a, e), r.shouldDestroy(t, o) && O.current.delete(i)
                                }), null == y || y(e), O.current.size > 0 ? P.current = window.requestAnimationFrame(E) : (e.clearRect(0, 0, t.width, t.height), P.current = null);
                                var n = Date.now();
                                0 !== S.current && (V.current = 1e3 / (n - S.current)), S.current = n
                            }
                        }
                    }, [o, y, v]);
                i.useEffect(function() {
                    null != P.current && (window.cancelAnimationFrame(P.current), P.current = window.requestAnimationFrame(E))
                }, [E]);
                var F = i.useCallback(function(t, e) {
                        O.current.set(t.id, {
                            confetti: t,
                            spriteCanvas: e
                        }), null == P.current && E()
                    }, [E]),
                    j = i.useCallback(function(t, e, n, i, a) {
                        var o, u, c, h, f, d, v, y, k, R, O, P, S, V, E, j = (o = null !== (E = t.id) && void 0 !== E ? E : (0, r.v4)(), u = t, c = n, h = i, f = a, y = A((v = (d = u, p(p({
                            id: o
                        }, s), d))).size), R = (k = function(t, e) {
                            if (null != t) {
                                var n = e.sprites.findIndex(function(e) {
                                    return "string" == typeof t ? e.src === t && e.colorize : e.src === t.src && e.colorize === t.colorize
                                });
                                if (-1 !== n) return [t, n]
                            }
                            return C(e.sprites)
                        }(h, c))[0], O = k[1], P = function(t, e, n) {
                            if (!("string" == typeof(i = t) || i.colorize)) return 0;
                            var i, r = null != e ? n.colors.findIndex(function(t) {
                                return t === e
                            }) : -1;
                            return -1 !== r ? r : Math.floor(b(0, n.colors.length - 1))
                        }(null != h ? h : R, f, c), new l({
                            id: o,
                            position: A(v.position),
                            velocity: A(v.velocity),
                            rotation: (S = v.rotation, function(t) {
                                switch (t.type) {
                                    case "static":
                                        var e = _(t.value);
                                        return new g(new m(e.x), new m(e.y), new m(e.z));
                                    case "static-random":
                                        var n = _(t.minValue),
                                            i = _(t.maxValue);
                                        return new g(new m(b(n.x, i.x)), new m(b(n.y, i.y)), new m(b(n.z, i.z)));
                                    case "linear":
                                        e = _(t.value);
                                        var r = _(t.addValue);
                                        return new g(new w(e.x, r.x), new w(e.y, r.y), new w(e.z, r.z));
                                    case "linear-random":
                                        n = _(t.minValue), i = _(t.maxValue);
                                        var a = _(t.minAddValue),
                                            o = _(t.maxAddValue);
                                        return new g(new w(b(n.x, i.x), b(a.x, o.x)), new w(b(n.y, i.y), b(a.y, o.y)), new w(b(n.z, i.z), b(a.z, o.z)));
                                    case "oscillating":
                                        e = _(t.value);
                                        var u = _(t.start),
                                            c = _(t.final),
                                            l = _(t.duration),
                                            s = _(t.direction);
                                        return new g(new x(e.x, u.x, c.x, l.x, s.x, t.easingFunction), new x(e.y, u.y, c.y, l.z, s.y, t.easingFunction), new x(e.z, u.z, c.z, l.z, s.z, t.easingFunction));
                                    case "oscillating-random":
                                        n = _(t.minValue), i = _(t.maxValue);
                                        var h = _(t.minStart),
                                            f = _(t.maxStart),
                                            d = _(t.minFinal),
                                            p = _(t.maxFinal),
                                            v = _(t.minDuration),
                                            y = _(t.maxDuration),
                                            k = _(t.minDirection),
                                            A = _(t.maxDirection);
                                        return new g(new x(b(n.x, i.x), b(h.x, f.x), b(d.x, p.x), b(v.x, y.x), z(k.x, A.x), C(t.easingFunctions)[0]), new x(b(n.y, i.y), b(h.y, f.y), b(d.y, p.y), b(v.y, y.y), z(k.y, A.y), C(t.easingFunctions)[0]), new x(b(n.z, i.z), b(h.z, f.z), b(d.z, p.z), b(v.z, y.z), z(k.z, A.z), C(t.easingFunctions)[0]))
                                }
                            }(p(p({}, S), {
                                valueType: "Vector3"
                            }))),
                            dragCoefficient: A(v.dragCoefficient),
                            size: y,
                            opacity: (V = v.opacity, function(t) {
                                switch (t.type) {
                                    case "static":
                                        return new m(t.value);
                                    case "static-random":
                                        return new m(b(t.minValue, t.maxValue));
                                    case "linear":
                                        return new w(t.value, t.addValue);
                                    case "linear-random":
                                        return new w(b(t.minValue, t.maxValue), b(t.minAddValue, t.maxAddValue));
                                    case "oscillating":
                                        return new x(t.value, t.start, t.final, t.duration, t.direction, t.easingFunction);
                                    case "oscillating-random":
                                        return new x(b(t.minValue, t.maxValue), b(t.minStart, t.maxStart), b(t.minFinal, t.maxFinal), b(t.minDuration, t.maxDuration), z(t.minDirection, t.maxDirection), C(t.easingFunctions)[0])
                                }
                            }(p(p({}, V), {
                                valueType: "number"
                            }))),
                            spriteX: P * c.spriteWidth + 2 * P,
                            spriteY: O * c.spriteHeight + 2 * O,
                            spriteWidth: c.spriteWidth,
                            spriteHeight: c.spriteHeight
                        }));
                        return F(j, e), j
                    }, [F]),
                    M = i.useCallback(function(t) {
                        O.current.delete(t)
                    }, []),
                    D = i.useCallback(function() {
                        return O.current.clear()
                    }, []),
                    U = i.useCallback(function() {
                        return R.current
                    }, []);
                i.useImperativeHandle(e, function() {
                    return {
                        createConfetti: j,
                        addConfetti: F,
                        deleteConfetti: M,
                        clearConfetti: D,
                        getCanvas: U
                    }
                }, [j, F, M, D, U]);
                var I = i.useCallback(function(t, e) {
                        var n, i, r = e.clickHandler,
                            a = e.mouseHandler;
                        if (null != r || null != a) {
                            var c = null === (n = R.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != c) {
                                var l = function(t, e) {
                                    if (null == e) throw Error("element should not be null");
                                    var n = e.getBoundingClientRect();
                                    return {
                                        x: t.clientX - n.left,
                                        y: t.clientY - n.top
                                    }
                                }(t, R.current);
                                if (u(l, {
                                        x: c.left,
                                        y: c.top,
                                        width: c.width,
                                        height: c.height
                                    })) {
                                    if (null != a) return a(t);
                                    if (null != r) {
                                        var s = -1e3 / V.current * 2,
                                            h = function(t, e) {
                                                for (var n = 0, i = Array.from(t.values()); n < i.length; n++) {
                                                    var r = i[n];
                                                    if (null != r && e(r)) return r
                                                }
                                                return null
                                            }(O.current, function(t) {
                                                var e = t.confetti,
                                                    n = e.previewPositionUpdate(o, s);
                                                return u(l, {
                                                    x: n.x - e.width / 2,
                                                    y: n.y - e.height / 2,
                                                    width: e.width,
                                                    height: e.height
                                                })
                                            });
                                        r(t, null !== (i = null == h ? void 0 : h.confetti) && void 0 !== i ? i : null)
                                    }
                                }
                            }
                        }
                    }, [o]),
                    H = i.useCallback(function(t) {
                        return I(t, {
                            clickHandler: c
                        })
                    }, [I, c]),
                    N = i.useCallback(function(t) {
                        return I(t, {
                            clickHandler: h
                        })
                    }, [I, h]),
                    T = i.useCallback(function(t) {
                        return I(t, {
                            mouseHandler: f
                        })
                    }, [I, f]),
                    B = i.useCallback(function(t) {
                        return I(t, {
                            mouseHandler: d
                        })
                    }, [I, d]);
                return i.useEffect(function() {
                    var t = function(t, e, n) {
                        null != n && window.addEventListener(t, e)
                    };
                    return t("click", H, c), t("mousedown", N, h), t("mousemove", T, f), t("mouseup", B, d),
                        function() {
                            window.removeEventListener("click", H), window.removeEventListener("mousedown", N), window.removeEventListener("mousemove", T), window.removeEventListener("mouseup", T)
                        }
                }, [H, N, T, B, c, h, f, d]), i.useEffect(function() {
                    var t = R.current,
                        e = new ResizeObserver(function() {
                            ! function(t) {
                                if (null != t) {
                                    var e = t.getBoundingClientRect(),
                                        i = e.width,
                                        r = e.height;
                                    t.width = i * n.g.devicePixelRatio, t.height = r * n.g.devicePixelRatio
                                }
                            }(R.current)
                        });
                    return null != t && e.observe(t),
                        function() {
                            null != t && e.unobserve(t)
                        }
                }, []), i.createElement("canvas", p({}, k, {
                    className: a,
                    ref: R
                }))
            });
            ! function(t, e) {
                void 0 === e && (e = {});
                var n = e.insertAt;
                if (t && "undefined" != typeof document) {
                    var i = document.head || document.getElementsByTagName("head")[0],
                        r = document.createElement("style");
                    r.type = "text/css", "top" === n && i.firstChild ? i.insertBefore(r, i.firstChild) : i.appendChild(r), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(document.createTextNode(t))
                }
            }(".SpriteCanvas-module_spriteCanvasHidden__ndzQV {\n  display: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -100%;\n}\n");
            var O = i.forwardRef(function(t, e) {
                var n, a = t.className,
                    u = t.visible,
                    c = void 0 !== u && u,
                    l = t.sprites,
                    s = t.colors,
                    h = t.spriteWidth,
                    f = t.spriteHeight,
                    d = i.useRef(null),
                    p = i.useRef([]),
                    v = i.useRef(!1),
                    y = i.useRef({});
                i.useImperativeHandle(e, function() {
                    return {
                        getCanvas: function() {
                            return d.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: p.current,
                                colors: s,
                                spriteWidth: h,
                                spriteHeight: f
                            }
                        },
                        addReadyListener: function(t) {
                            var e = (0, r.v4)();
                            return y.current[e] = t, e
                        },
                        removeReadyListener: function(t) {
                            delete y.current[t]
                        },
                        isReady: v.current
                    }
                }, [s, f, h]);
                var g = i.useCallback(function() {
                        var t = d.current,
                            e = null == t ? void 0 : t.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != e && null != t && (e.clearRect(0, 0, t.width, t.height), p.current.forEach(function(t, n) {
                            var i = function(i, r) {
                                var a = h * r + 2 * r,
                                    o = f * n + 2 * n;
                                if (e.drawImage(t.image, a, o, h, f), null != i) {
                                    for (var u, c, l = e.getImageData(a, o, h, f), s = ("#" === (u = i)[0] && (u = u.slice(1)), {
                                            r: (c = parseInt(u, 16)) >> 16 & 255,
                                            g: c >> 8 & 255,
                                            b: 255 & c
                                        }), d = 0; d < l.data.length; d += 4) l.data[d] = s.r, l.data[d + 1] = s.g, l.data[d + 2] = s.b;
                                    e.putImageData(l, a, o)
                                }
                            };
                            t.colorize ? s.forEach(function(t, e) {
                                return i(t, e)
                            }) : i(null, 0)
                        }))
                    }, [s, f, h]),
                    m = i.useCallback(function() {
                        var t = l.map(function(t) {
                            var e = new Image,
                                n = "string" == typeof t ? t : t.src,
                                i = "string" == typeof t || t.colorize;
                            e.src = n;
                            var r = new Promise(function(t) {
                                e.onload = t
                            });
                            return {
                                colorize: i,
                                image: e,
                                src: n,
                                loadPromise: r
                            }
                        });
                        return Promise.all(t.map(function(t) {
                            return t.loadPromise
                        })).then(function() {
                            p.current = t.map(function(t) {
                                return {
                                    colorize: t.colorize,
                                    image: t.image,
                                    src: t.src
                                }
                            })
                        })
                    }, [l]),
                    w = i.useCallback(function(t) {
                        for (var e in y.current) y.current[e](t)
                    }, []),
                    x = i.useCallback(function() {
                        var t, e, n, i;
                        return t = void 0, e = void 0, n = void 0, i = function() {
                            return function(t, e) {
                                var n, i, r, a, o = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & r[0]) throw r[1];
                                        return r[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return a = {
                                    next: u(0),
                                    throw: u(1),
                                    return: u(2)
                                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                                    return this
                                }), a;

                                function u(u) {
                                    return function(c) {
                                        return function(u) {
                                            if (n) throw TypeError("Generator is already executing.");
                                            for (; a && (a = 0, u[0] && (o = 0)), o;) try {
                                                if (n = 1, i && (r = 2 & u[0] ? i.return : u[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, u[1])).done) return r;
                                                switch (i = 0, r && (u = [2 & u[0], r.value]), u[0]) {
                                                    case 0:
                                                    case 1:
                                                        r = u;
                                                        break;
                                                    case 4:
                                                        return o.label++, {
                                                            value: u[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        o.label++, i = u[1], u = [0];
                                                        continue;
                                                    case 7:
                                                        u = o.ops.pop(), o.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                                            o = 0;
                                                            continue
                                                        }
                                                        if (3 === u[0] && (!r || u[1] > r[0] && u[1] < r[3])) {
                                                            o.label = u[1];
                                                            break
                                                        }
                                                        if (6 === u[0] && o.label < r[1]) {
                                                            o.label = r[1], r = u;
                                                            break
                                                        }
                                                        if (r && o.label < r[2]) {
                                                            o.label = r[2], o.ops.push(u);
                                                            break
                                                        }
                                                        r[2] && o.ops.pop(), o.trys.pop();
                                                        continue
                                                }
                                                u = e.call(t, o)
                                            } catch (t) {
                                                u = [6, t], i = 0
                                            } finally {
                                                n = r = 0
                                            }
                                            if (5 & u[0]) throw u[1];
                                            return {
                                                value: u[0] ? u[1] : void 0,
                                                done: !0
                                            }
                                        }([u, c])
                                    }
                                }
                            }(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, m()];
                                    case 1:
                                        return t.sent(), g(), v.current = !0, w(!0), [2]
                                }
                            })
                        }, new(n || (n = Promise))(function(r, a) {
                            function o(t) {
                                try {
                                    c(i.next(t))
                                } catch (t) {
                                    a(t)
                                }
                            }

                            function u(t) {
                                try {
                                    c(i.throw(t))
                                } catch (t) {
                                    a(t)
                                }
                            }

                            function c(t) {
                                var e;
                                t.done ? r(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                                    t(e)
                                })).then(o, u)
                            }
                            c((i = i.apply(t, e || [])).next())
                        })
                    }, [w, m, g]);
                return i.useEffect(function() {
                    x()
                }, [x]), i.useEffect(function() {
                    return function() {
                        return w(!1)
                    }
                }, [w]), i.useEffect(function() {
                    null != d.current && (d.current.width = (h + 2) * Math.max(s.length, 1), d.current.height = (f + 2) * l.length)
                }, [s.length, f, h, l.length]), i.createElement("canvas", {
                    ref: d,
                    className: o(a, ((n = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !c, n))
                })
            });

            function P(t, e) {
                var n, r = i.useState(null !== (n = null == e ? void 0 : e.isReady) && void 0 !== n && n),
                    a = r[0],
                    o = r[1];
                i.useEffect(function() {
                    var t = null == e ? void 0 : e.addReadyListener(o);
                    return function() {
                        null != t && (null == e || e.removeReadyListener(t))
                    }
                }, [e]);
                var u = i.useCallback(function(n, i) {
                        var r = void 0 === i ? {} : i,
                            a = r.sprite,
                            o = r.color,
                            u = null == e ? void 0 : e.getCreateData(),
                            c = null == e ? void 0 : e.getCanvas();
                        if (null != c && null != u && 0 !== u.sprites.length) return null == t ? void 0 : t.createConfetti(n, c, u, a, o)
                    }, [t, e]),
                    c = i.useCallback(function(t, e, n) {
                        for (var i = [], r = 0; r < e; r++) {
                            var a = u(t, n);
                            a && i.push(a)
                        }
                        return i
                    }, [u]),
                    l = i.useCallback(function(n) {
                        var i = null == e ? void 0 : e.getCanvas();
                        null != i && (null == t || t.addConfetti(n, i))
                    }, [t, e]),
                    s = i.useCallback(function(e) {
                        null == t || t.deleteConfetti(e)
                    }, [t]),
                    h = i.useCallback(function() {
                        return null == t ? void 0 : t.clearConfetti()
                    }, [t]);
                return i.useMemo(function() {
                    return {
                        createConfetti: u,
                        createMultipleConfetti: c,
                        addConfetti: l,
                        clearConfetti: h,
                        deleteConfetti: s,
                        isReady: a && null != e && null != t
                    }
                }, [l, h, t, u, c, s, a, e])
            }
        },
        794252: function(t, e, n) {
            "use strict";
            var i = n("859514"),
                r = n("960049"),
                a = n("124852"),
                o = Array;
            i({
                target: "Array",
                proto: !0
            }, {
                with: function(t, e) {
                    return r(a(this), o, t, e)
                }
            })
        },
        448105: function(t, e, n) {
            "use strict";
            t.exports = function(t, e) {
                var n = e.length,
                    i = t.length;
                if (i > n) return !1;
                if (i === n) return t === e;
                t: for (var r = 0, a = 0; r < i; r++) {
                    for (var o = t.charCodeAt(r); a < n;)
                        if (e.charCodeAt(a++) === o) continue t;
                    return !1
                }
                return !0
            }
        },
        506838: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                P: function() {
                    return q
                },
                match: function() {
                    return G
                }
            }), n("222007"), n("424973"), n("70102"), n("808653");
            let i = Symbol.for("@ts-pattern/matcher"),
                r = Symbol.for("@ts-pattern/isVariadic"),
                a = "@ts-pattern/anonymous-select-key",
                o = t => !!(t && "object" == typeof t),
                u = t => t && !!t[i],
                c = (t, e, n) => {
                    if (u(t)) {
                        let r = t[i](),
                            {
                                matched: a,
                                selections: o
                            } = r.match(e);
                        return a && o && Object.keys(o).forEach(t => n(t, o[t])), a
                    }
                    if (o(t)) {
                        if (!o(e)) return !1;
                        if (Array.isArray(t)) {
                            if (!Array.isArray(e)) return !1;
                            let i = [],
                                a = [],
                                o = [];
                            for (let e of t.keys()) {
                                let n = t[e];
                                u(n) && n[r] ? o.push(n) : o.length ? a.push(n) : i.push(n)
                            }
                            if (o.length) {
                                if (o.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (e.length < i.length + a.length) return !1;
                                let t = e.slice(0, i.length),
                                    r = 0 === a.length ? [] : e.slice(-a.length),
                                    u = e.slice(i.length, 0 === a.length ? 1 / 0 : -a.length);
                                return i.every((e, i) => c(e, t[i], n)) && a.every((t, e) => c(t, r[e], n)) && (0 === o.length || c(o[0], u, n))
                            }
                            return t.length === e.length && t.every((t, i) => c(t, e[i], n))
                        }
                        return Object.keys(t).every(r => {
                            let a = t[r];
                            return (r in e || u(a) && "optional" === a[i]().matcherType) && c(a, e[r], n)
                        })
                    }
                    return Object.is(e, t)
                },
                l = t => {
                    var e, n, r;
                    return o(t) ? u(t) ? null != (e = null == (n = (r = t[i]()).getSelectionKeys) ? void 0 : n.call(r)) ? e : [] : Array.isArray(t) ? s(t, l) : s(Object.values(t), l) : []
                },
                s = (t, e) => t.reduce((t, n) => t.concat(e(n)), []);

            function h(t) {
                return Object.assign(t, {
                    optional: () => f(t),
                    and: e => v(t, e),
                    or: e => y(t, e),
                    select: e => void 0 === e ? m(t) : m(e, t)
                })
            }

            function f(t) {
                return h({
                    [i]: () => ({
                        match: e => {
                            let n = {},
                                i = (t, e) => {
                                    n[t] = e
                                };
                            return void 0 === e ? (l(t).forEach(t => i(t, void 0)), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: c(t, e, i),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => l(t),
                        matcherType: "optional"
                    })
                })
            }
            let d = (t, e) => {
                    for (let n of t)
                        if (!e(n)) return !1;
                    return !0
                },
                p = (t, e) => {
                    for (let [n, i] of t.entries())
                        if (!e(i, n)) return !1;
                    return !0
                };

            function v() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return h({
                    [i]: () => ({
                        match: t => {
                            let n = {},
                                i = (t, e) => {
                                    n[t] = e
                                };
                            return {
                                matched: e.every(e => c(e, t, i)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => s(e, l),
                        matcherType: "and"
                    })
                })
            }

            function y() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return h({
                    [i]: () => ({
                        match: t => {
                            let n = {},
                                i = (t, e) => {
                                    n[t] = e
                                };
                            return s(e, l).forEach(t => i(t, void 0)), {
                                matched: e.some(e => c(e, t, i)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => s(e, l),
                        matcherType: "or"
                    })
                })
            }

            function g(t) {
                return {
                    [i]: () => ({
                        match: e => ({
                            matched: !!t(e)
                        })
                    })
                }
            }

            function m() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                let r = "string" == typeof e[0] ? e[0] : void 0,
                    o = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
                return h({
                    [i]: () => ({
                        match: t => {
                            let e = {
                                [null != r ? r : a]: t
                            };
                            return {
                                matched: void 0 === o || c(o, t, (t, n) => {
                                    e[t] = n
                                }),
                                selections: e
                            }
                        },
                        getSelectionKeys: () => [null != r ? r : a].concat(void 0 === o ? [] : l(o))
                    })
                })
            }

            function w(t) {
                return "number" == typeof t
            }

            function x(t) {
                return "string" == typeof t
            }

            function b(t) {
                return "bigint" == typeof t
            }
            let C = h(g(function(t) {
                    return !0
                })),
                z = t => Object.assign(h(t), {
                    startsWith: e => z(v(t, g(t => x(t) && t.startsWith(e)))),
                    endsWith: e => z(v(t, g(t => x(t) && t.endsWith(e)))),
                    minLength: e => {
                        var n;
                        return z(v(t, (n = e, g(t => x(t) && t.length >= n))))
                    },
                    maxLength: e => {
                        var n;
                        return z(v(t, (n = e, g(t => x(t) && t.length <= n))))
                    },
                    includes: e => z(v(t, g(t => x(t) && t.includes(e)))),
                    regex: e => z(v(t, g(t => x(t) && !!t.match(e))))
                }),
                k = z(g(x)),
                _ = (t, e) => g(n => w(n) && t <= n && e >= n),
                A = t => g(e => w(e) && e < t),
                R = t => g(e => w(e) && e > t),
                O = t => g(e => w(e) && e <= t),
                P = t => g(e => w(e) && e >= t),
                S = () => g(t => w(t) && Number.isInteger(t)),
                V = () => g(t => w(t) && Number.isFinite(t)),
                E = () => g(t => w(t) && t > 0),
                F = () => g(t => w(t) && t < 0),
                j = t => Object.assign(h(t), {
                    between: (e, n) => j(v(t, _(e, n))),
                    lt: e => j(v(t, A(e))),
                    gt: e => j(v(t, R(e))),
                    lte: e => j(v(t, O(e))),
                    gte: e => j(v(t, P(e))),
                    int: () => j(v(t, S())),
                    finite: () => j(v(t, V())),
                    positive: () => j(v(t, E())),
                    negative: () => j(v(t, F()))
                }),
                M = j(g(w)),
                D = (t, e) => g(n => b(n) && t <= n && e >= n),
                U = t => g(e => b(e) && e < t),
                I = t => g(e => b(e) && e > t),
                H = t => g(e => b(e) && e <= t),
                N = t => g(e => b(e) && e >= t),
                T = () => g(t => b(t) && t > 0),
                B = () => g(t => b(t) && t < 0),
                W = t => Object.assign(h(t), {
                    between: (e, n) => W(v(t, D(e, n))),
                    lt: e => W(v(t, U(e))),
                    gt: e => W(v(t, I(e))),
                    lte: e => W(v(t, H(e))),
                    gte: e => W(v(t, N(e))),
                    positive: () => W(v(t, T())),
                    negative: () => W(v(t, B()))
                }),
                L = W(g(b)),
                K = h(g(function(t) {
                    return "boolean" == typeof t
                })),
                X = h(g(function(t) {
                    return "symbol" == typeof t
                })),
                Y = h(g(function(t) {
                    return null == t
                }));
            var q = {
                __proto__: null,
                matcher: i,
                optional: f,
                array: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return function t(e) {
                        var n;
                        return Object.assign((n = e, Object.assign(n, {
                            *[Symbol.iterator]() {
                                yield Object.assign(n, {
                                    [r]: !0
                                })
                            }
                        })), {
                            optional: () => t(f(e)),
                            select: n => t(void 0 === n ? m(e) : m(n, e))
                        })
                    }({
                        [i]: () => ({
                            match: t => {
                                if (!Array.isArray(t)) return {
                                    matched: !1
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                let n = e[0],
                                    i = {};
                                if (0 === t.length) return l(n).forEach(t => {
                                    i[t] = []
                                }), {
                                    matched: !0,
                                    selections: i
                                };
                                let r = (t, e) => {
                                    i[t] = (i[t] || []).concat([e])
                                };
                                return {
                                    matched: t.every(t => c(n, t, r)),
                                    selections: i
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : l(e[0])
                        })
                    })
                },
                set: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return h({
                        [i]: () => ({
                            match: t => {
                                if (!(t instanceof Set)) return {
                                    matched: !1
                                };
                                let n = {};
                                if (0 === t.size) return {
                                    matched: !0,
                                    selections: n
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                let i = (t, e) => {
                                        n[t] = (n[t] || []).concat([e])
                                    },
                                    r = e[0];
                                return {
                                    matched: d(t, t => c(r, t, i)),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : l(e[0])
                        })
                    })
                },
                map: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return h({
                        [i]: () => ({
                            match: t => {
                                var n;
                                if (!(t instanceof Map)) return {
                                    matched: !1
                                };
                                let i = {};
                                if (0 === t.size) return {
                                    matched: !0,
                                    selections: i
                                };
                                let r = (t, e) => {
                                    i[t] = (i[t] || []).concat([e])
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                if (1 === e.length) throw Error("`P.map` wasn't given enough arguments. Expected (key, value), received ".concat(null == (n = e[0]) ? void 0 : n.toString()));
                                let [a, o] = e;
                                return {
                                    matched: p(t, (t, e) => {
                                        let n = c(a, e, r),
                                            i = c(o, t, r);
                                        return n && i
                                    }),
                                    selections: i
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : [...l(e[0]), ...l(e[1])]
                        })
                    })
                },
                intersection: v,
                union: y,
                not: function(t) {
                    return h({
                        [i]: () => ({
                            match: e => ({
                                matched: !c(t, e, () => {})
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: g,
                select: m,
                any: C,
                _: C,
                string: k,
                between: _,
                lt: A,
                gt: R,
                lte: O,
                gte: P,
                int: S,
                finite: V,
                positive: E,
                negative: F,
                number: M,
                betweenBigInt: D,
                ltBigInt: U,
                gtBigInt: I,
                lteBigInt: H,
                gteBigInt: N,
                positiveBigInt: T,
                negativeBigInt: B,
                bigint: L,
                boolean: K,
                symbol: X,
                nullish: Y,
                instanceOf: function(t) {
                    var e;
                    return h(g((e = t, t => t instanceof e)))
                },
                shape: function(t) {
                    return h(g(function() {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        if (1 === e.length) {
                            let [t] = e;
                            return e => c(t, e, () => {})
                        }
                        if (2 === e.length) {
                            let [t, n] = e;
                            return c(t, n, () => {})
                        }
                        throw Error("isMatching wasn't given the right number of arguments: expected 1 or 2, received ".concat(e.length, "."))
                    }(t)))
                }
            };
            let Q = {
                matched: !1,
                value: void 0
            };

            function G(t) {
                return new J(t, Q)
            }
            class J {
                with() {
                    let t;
                    for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    if (this.state.matched) return this;
                    let r = n[n.length - 1],
                        o = [n[0]];
                    3 === n.length && "function" == typeof n[1] ? (o.push(n[0]), t = n[1]) : n.length > 2 && o.push(...n.slice(1, n.length - 1));
                    let u = !1,
                        l = {},
                        s = (t, e) => {
                            u = !0, l[t] = e
                        },
                        h = o.some(t => c(t, this.input, s)) && (!t || t(this.input)) ? {
                            matched: !0,
                            value: r(u ? a in l ? l[a] : l : this.input, this.input)
                        } : Q;
                    return new J(this.input, h)
                }
                when(t, e) {
                    if (this.state.matched) return this;
                    let n = !!t(this.input);
                    return new J(this.input, n ? {
                        matched: !0,
                        value: e(this.input, this.input)
                    } : Q)
                }
                otherwise(t) {
                    return this.state.matched ? this.state.value : t(this.input)
                }
                exhaustive() {
                    return this.run()
                }
                run() {
                    let t;
                    if (this.state.matched) return this.state.value;
                    try {
                        t = JSON.stringify(this.input)
                    } catch (e) {
                        t = this.input
                    }
                    throw Error("Pattern matching error: no pattern matches value ".concat(t))
                }
                returnType() {
                    return this
                }
                constructor(t, e) {
                    this.input = void 0, this.state = void 0, this.input = t, this.state = e
                }
            }
        }
    }
]);
//# sourceMappingURL=33dc0f0f36e3fa50c2b9.js.map