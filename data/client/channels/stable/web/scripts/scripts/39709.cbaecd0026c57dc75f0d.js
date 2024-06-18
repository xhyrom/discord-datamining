"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["39709"], {
        742031: function(t, n, e) {
            e.d(n, {
                Gd: function() {
                    return p
                }
            });
            var r = e(109393),
                i = e(873171),
                o = e(76482),
                s = e(680835);
            t = e.hmd(t);
            var c = function() {
                function t(t, n, e) {
                    void 0 === n && (n = new s.s), void 0 === e && (e = 3), this._version = e, this._stack = [], this._stack.push({
                        client: t,
                        scope: n
                    })
                }
                return t.prototype._invokeClient = function(t) {
                    for (var n, e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                    var o = this.getStackTop();
                    o && o.client && o.client[t] && (n = o.client)[t].apply(n, r.fl(e, [o.scope]))
                }, t.prototype.isOlderThan = function(t) {
                    return this._version < t
                }, t.prototype.bindClient = function(t) {
                    this.getStackTop().client = t
                }, t.prototype.pushScope = function() {
                    var t = this.getStack(),
                        n = t.length > 0 ? t[t.length - 1].scope : void 0,
                        e = s.s.clone(n);
                    return this.getStack().push({
                        client: this.getClient(),
                        scope: e
                    }), e
                }, t.prototype.popScope = function() {
                    return void 0 !== this.getStack().pop()
                }, t.prototype.withScope = function(t) {
                    var n = this.pushScope();
                    try {
                        t(n)
                    } finally {
                        this.popScope()
                    }
                }, t.prototype.getClient = function() {
                    return this.getStackTop().client
                }, t.prototype.getScope = function() {
                    return this.getStackTop().scope
                }, t.prototype.getStack = function() {
                    return this._stack
                }, t.prototype.getStackTop = function() {
                    return this._stack[this._stack.length - 1]
                }, t.prototype.captureException = function(t, n) {
                    var e = this._lastEventId = (0, i.DM)(),
                        o = n;
                    if (!n) {
                        var s = void 0;
                        try {
                            throw Error("Sentry syntheticException")
                        } catch (t) {
                            s = t
                        }
                        o = {
                            originalException: t,
                            syntheticException: s
                        }
                    }
                    return this._invokeClient("captureException", t, r.pi({}, o, {
                        event_id: e
                    })), e
                }, t.prototype.captureMessage = function(t, n, e) {
                    var o = this._lastEventId = (0, i.DM)(),
                        s = e;
                    if (!e) {
                        var c = void 0;
                        try {
                            throw Error(t)
                        } catch (t) {
                            c = t
                        }
                        s = {
                            originalException: t,
                            syntheticException: c
                        }
                    }
                    return this._invokeClient("captureMessage", t, n, r.pi({}, s, {
                        event_id: o
                    })), o
                }, t.prototype.captureEvent = function(t, n) {
                    var e = this._lastEventId = (0, i.DM)();
                    return this._invokeClient("captureEvent", t, r.pi({}, n, {
                        event_id: e
                    })), e
                }, t.prototype.lastEventId = function() {
                    return this._lastEventId
                }, t.prototype.addBreadcrumb = function(t, n) {
                    var e = this.getStackTop();
                    if (!e.scope || !e.client) return;
                    var o = e.client.getOptions && e.client.getOptions() || {},
                        s = o.beforeBreadcrumb,
                        c = void 0 === s ? null : s,
                        u = o.maxBreadcrumbs,
                        a = void 0 === u ? 100 : u;
                    if (a <= 0) return;
                    var p = (0, i._I)(),
                        _ = r.pi({
                            timestamp: p
                        }, t),
                        f = c ? (0, i.Cf)(function() {
                            return c(_, n)
                        }) : _;
                    if (null !== f) e.scope.addBreadcrumb(f, Math.min(a, 100))
                }, t.prototype.setUser = function(t) {
                    var n = this.getStackTop();
                    if (!!n.scope) n.scope.setUser(t)
                }, t.prototype.setTags = function(t) {
                    var n = this.getStackTop();
                    if (!!n.scope) n.scope.setTags(t)
                }, t.prototype.setExtras = function(t) {
                    var n = this.getStackTop();
                    if (!!n.scope) n.scope.setExtras(t)
                }, t.prototype.setTag = function(t, n) {
                    var e = this.getStackTop();
                    if (!!e.scope) e.scope.setTag(t, n)
                }, t.prototype.setExtra = function(t, n) {
                    var e = this.getStackTop();
                    if (!!e.scope) e.scope.setExtra(t, n)
                }, t.prototype.setContext = function(t, n) {
                    var e = this.getStackTop();
                    if (!!e.scope) e.scope.setContext(t, n)
                }, t.prototype.configureScope = function(t) {
                    var n = this.getStackTop();
                    n.scope && n.client && t(n.scope)
                }, t.prototype.run = function(t) {
                    var n = a(this);
                    try {
                        t(this)
                    } finally {
                        a(n)
                    }
                }, t.prototype.getIntegration = function(t) {
                    var n = this.getClient();
                    if (!n) return null;
                    try {
                        return n.getIntegration(t)
                    } catch (n) {
                        return o.k.warn("Cannot retrieve integration " + t.id + " from the current Hub"), null
                    }
                }, t.prototype.startSpan = function(t, n) {
                    return void 0 === n && (n = !1), this._callExtensionMethod("startSpan", t, n)
                }, t.prototype.traceHeaders = function() {
                    return this._callExtensionMethod("traceHeaders")
                }, t.prototype._callExtensionMethod = function(t) {
                    for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
                    var r = u().__SENTRY__;
                    if (r && r.extensions && "function" == typeof r.extensions[t]) return r.extensions[t].apply(this, n);
                    o.k.warn("Extension method " + t + " couldn't be found, doing nothing.")
                }, t
            }();

            function u() {
                var t = (0, i.Rf)();
                return t.__SENTRY__ = t.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                }, t
            }

            function a(t) {
                var n = u(),
                    e = f(n);
                return h(n, t), e
            }

            function p() {
                var n = u();
                return ((!_(n) || f(n).isOlderThan(3)) && h(n, new c), (0, i.KV)()) ? function(n) {
                    try {
                        var e = (0, i.l$)(t, "domain").active;
                        if (!e) return f(n);
                        if (!_(e) || f(e).isOlderThan(3)) {
                            var r = f(n).getStackTop();
                            h(e, new c(r.client, s.s.clone(r.scope)))
                        }
                        return f(e)
                    } catch (t) {
                        return f(n)
                    }
                }(n) : f(n)
            }

            function _(t) {
                return !!t && !!t.__SENTRY__ && !!t.__SENTRY__.hub || !1
            }

            function f(t) {
                return t && t.__SENTRY__ && t.__SENTRY__.hub ? t.__SENTRY__.hub : (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = new c, t.__SENTRY__.hub)
            }

            function h(t, n) {
                return !!t && (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = n, !0)
            }
        },
        680835: function(t, n, e) {
            e.d(n, {
                s: function() {
                    return c
                }
            });
            var r = e(109393),
                i = e(313226),
                o = e(11979),
                s = e(873171),
                c = function() {
                    function t() {
                        this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._context = {}
                    }
                    return t.prototype.addScopeListener = function(t) {
                        this._scopeListeners.push(t)
                    }, t.prototype.addEventProcessor = function(t) {
                        return this._eventProcessors.push(t), this
                    }, t.prototype._notifyScopeListeners = function() {
                        var t = this;
                        !this._notifyingListeners && (this._notifyingListeners = !0, setTimeout(function() {
                            t._scopeListeners.forEach(function(n) {
                                n(t)
                            }), t._notifyingListeners = !1
                        }))
                    }, t.prototype._notifyEventProcessors = function(t, n, e, s) {
                        var c = this;
                        return void 0 === s && (s = 0), new i.c(function(i, u) {
                            var a = t[s];
                            if (null === n || "function" != typeof a) i(n);
                            else {
                                var p = a(r.pi({}, n), e);
                                (0, o.J8)(p) ? p.then(function(n) {
                                    return c._notifyEventProcessors(t, n, e, s + 1).then(i)
                                }).then(null, u): c._notifyEventProcessors(t, p, e, s + 1).then(i).then(null, u)
                            }
                        })
                    }, t.prototype.setUser = function(t) {
                        return this._user = t || {}, this._notifyScopeListeners(), this
                    }, t.prototype.setTags = function(t) {
                        return this._tags = r.pi({}, this._tags, t), this._notifyScopeListeners(), this
                    }, t.prototype.setTag = function(t, n) {
                        var e;
                        return this._tags = r.pi({}, this._tags, ((e = {})[t] = n, e)), this._notifyScopeListeners(), this
                    }, t.prototype.setExtras = function(t) {
                        return this._extra = r.pi({}, this._extra, t), this._notifyScopeListeners(), this
                    }, t.prototype.setExtra = function(t, n) {
                        var e;
                        return this._extra = r.pi({}, this._extra, ((e = {})[t] = n, e)), this._notifyScopeListeners(), this
                    }, t.prototype.setFingerprint = function(t) {
                        return this._fingerprint = t, this._notifyScopeListeners(), this
                    }, t.prototype.setLevel = function(t) {
                        return this._level = t, this._notifyScopeListeners(), this
                    }, t.prototype.setTransaction = function(t) {
                        return this._transaction = t, this._span && (this._span.transaction = t), this._notifyScopeListeners(), this
                    }, t.prototype.setContext = function(t, n) {
                        var e;
                        return this._context = r.pi({}, this._context, ((e = {})[t] = n, e)), this._notifyScopeListeners(), this
                    }, t.prototype.setSpan = function(t) {
                        return this._span = t, this._notifyScopeListeners(), this
                    }, t.prototype.getSpan = function() {
                        return this._span
                    }, t.clone = function(n) {
                        var e = new t;
                        return n && (e._breadcrumbs = r.fl(n._breadcrumbs), e._tags = r.pi({}, n._tags), e._extra = r.pi({}, n._extra), e._context = r.pi({}, n._context), e._user = n._user, e._level = n._level, e._span = n._span, e._transaction = n._transaction, e._fingerprint = n._fingerprint, e._eventProcessors = r.fl(n._eventProcessors)), e
                    }, t.prototype.clear = function() {
                        return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._context = {}, this._level = void 0, this._transaction = void 0, this._fingerprint = void 0, this._span = void 0, this._notifyScopeListeners(), this
                    }, t.prototype.addBreadcrumb = function(t, n) {
                        var e = r.pi({
                            timestamp: (0, s._I)()
                        }, t);
                        return this._breadcrumbs = void 0 !== n && n >= 0 ? r.fl(this._breadcrumbs, [e]).slice(-n) : r.fl(this._breadcrumbs, [e]), this._notifyScopeListeners(), this
                    }, t.prototype.clearBreadcrumbs = function() {
                        return this._breadcrumbs = [], this._notifyScopeListeners(), this
                    }, t.prototype._applyFingerprint = function(t) {
                        t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
                    }, t.prototype.applyToEvent = function(t, n) {
                        return this._extra && Object.keys(this._extra).length && (t.extra = r.pi({}, this._extra, t.extra)), this._tags && Object.keys(this._tags).length && (t.tags = r.pi({}, this._tags, t.tags)), this._user && Object.keys(this._user).length && (t.user = r.pi({}, this._user, t.user)), this._context && Object.keys(this._context).length && (t.contexts = r.pi({}, this._context, t.contexts)), this._level && (t.level = this._level), this._transaction && (t.transaction = this._transaction), this._applyFingerprint(t), t.breadcrumbs = r.fl(t.breadcrumbs || [], this._breadcrumbs), t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, this._notifyEventProcessors(r.fl(function() {
                            var t = (0, s.Rf)();
                            return t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.globalEventProcessors = t.__SENTRY__.globalEventProcessors || [], t.__SENTRY__.globalEventProcessors
                        }(), this._eventProcessors), t, n)
                    }, t
                }()
        },
        934951: function(t, n, e) {
            e.d(n, {
                n_: function() {
                    return o
                }
            });
            var r = e(109393),
                i = e(742031);

            function o(t) {
                ! function(t) {
                    for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
                    var o = (0, i.Gd)();
                    if (o && o[t]) return o[t].apply(o, r.fl(n));
                    throw Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
                }("addBreadcrumb", t)
            }
        },
        11979: function(t, n, e) {
            e.d(n, {
                J8: function() {
                    return r
                }
            });

            function r(t) {
                return !!(t && t.then && "function" == typeof t.then)
            }
        },
        76482: function(t, n, e) {
            e.d(n, {
                k: function() {
                    return c
                }
            });
            var r = e(873171),
                i = (0, r.Rf)(),
                o = "Sentry Logger ",
                s = function() {
                    function t() {
                        this._enabled = !1
                    }
                    return t.prototype.disable = function() {
                        this._enabled = !1
                    }, t.prototype.enable = function() {
                        this._enabled = !0
                    }, t.prototype.log = function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        if (!!this._enabled)(0, r.Cf)(function() {
                            i.console.log(o + "[Log]: " + t.join(" "))
                        })
                    }, t.prototype.warn = function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        if (!!this._enabled)(0, r.Cf)(function() {
                            i.console.warn(o + "[Warn]: " + t.join(" "))
                        })
                    }, t.prototype.error = function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        if (!!this._enabled)(0, r.Cf)(function() {
                            i.console.error(o + "[Error]: " + t.join(" "))
                        })
                    }, t
                }();
            i.__SENTRY__ = i.__SENTRY__ || {};
            var c = i.__SENTRY__.logger || (i.__SENTRY__.logger = new s)
        },
        873171: function(t, n, e) {
            e.d(n, {
                Cf: function() {
                    return a
                },
                DM: function() {
                    return u
                },
                KV: function() {
                    return o
                },
                Rf: function() {
                    return c
                },
                _I: function() {
                    return p
                },
                l$: function() {
                    return i
                }
            });
            var r = e(444675);

            function i(t, n) {
                return t.require(n)
            }

            function o() {
                return "[object process]" === Object.prototype.toString.call(void 0 !== r ? r : 0)
            }
            var s = {};

            function c() {
                return o() ? e.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : s
            }

            function u() {
                var t = c(),
                    n = t.crypto || t.msCrypto;
                if (void 0 !== n && n.getRandomValues) {
                    var e = new Uint16Array(8);
                    n.getRandomValues(e), e[3] = 4095 & e[3] | 16384, e[4] = 16383 & e[4] | 32768;
                    var r = function(t) {
                        for (var n = t.toString(16); n.length < 4;) n = "0" + n;
                        return n
                    };
                    return r(e[0]) + r(e[1]) + r(e[2]) + r(e[3]) + r(e[4]) + r(e[5]) + r(e[6]) + r(e[7])
                }
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                    var n = 16 * Math.random() | 0;
                    return ("x" === t ? n : 3 & n | 8).toString(16)
                })
            }

            function a(t) {
                var n = c();
                if (!("console" in n)) return t();
                var e = n.console,
                    r = {};
                ["debug", "info", "warn", "error", "log", "assert"].forEach(function(t) {
                    t in n.console && e[t].__sentry_original__ && (r[t] = e[t], e[t] = e[t].__sentry_original__)
                });
                var i = t();
                return Object.keys(r).forEach(function(t) {
                    e[t] = r[t]
                }), i
            }

            function p() {
                return new Date().getTime() / 1e3
            }
        },
        313226: function(t, n, e) {
            e.d(n, {
                c: function() {
                    return s
                }
            });
            var r, i, o = e(11979);
            (r = i || (i = {})).PENDING = "PENDING", r.RESOLVED = "RESOLVED", r.REJECTED = "REJECTED";
            var s = function() {
                function t(t) {
                    var n = this;
                    this._state = i.PENDING, this._handlers = [], this._resolve = function(t) {
                        n._setResult(i.RESOLVED, t)
                    }, this._reject = function(t) {
                        n._setResult(i.REJECTED, t)
                    }, this._setResult = function(t, e) {
                        if (n._state === i.PENDING) {
                            if ((0, o.J8)(e)) {
                                e.then(n._resolve, n._reject);
                                return
                            }
                            n._state = t, n._value = e, n._executeHandlers()
                        }
                    }, this._attachHandler = function(t) {
                        n._handlers = n._handlers.concat(t), n._executeHandlers()
                    }, this._executeHandlers = function() {
                        if (n._state !== i.PENDING) n._state === i.REJECTED ? n._handlers.forEach(function(t) {
                            t.onrejected && t.onrejected(n._value)
                        }) : n._handlers.forEach(function(t) {
                            t.onfulfilled && t.onfulfilled(n._value)
                        }), n._handlers = []
                    };
                    try {
                        t(this._resolve, this._reject)
                    } catch (t) {
                        this._reject(t)
                    }
                }
                return t.prototype.toString = function() {
                    return "[object SyncPromise]"
                }, t.resolve = function(n) {
                    return new t(function(t) {
                        t(n)
                    })
                }, t.reject = function(n) {
                    return new t(function(t, e) {
                        e(n)
                    })
                }, t.all = function(n) {
                    return new t(function(e, r) {
                        if (!Array.isArray(n)) {
                            r(TypeError("Promise.all requires an array as input."));
                            return
                        }
                        if (0 === n.length) {
                            e([]);
                            return
                        }
                        var i = n.length,
                            o = [];
                        n.forEach(function(n, s) {
                            t.resolve(n).then(function(t) {
                                if (o[s] = t, 0 == (i -= 1)) e(o)
                            }).then(null, r)
                        })
                    })
                }, t.prototype.then = function(n, e) {
                    var r = this;
                    return new t(function(t, i) {
                        r._attachHandler({
                            onfulfilled: function(e) {
                                if (!n) {
                                    t(e);
                                    return
                                }
                                try {
                                    t(n(e));
                                    return
                                } catch (t) {
                                    i(t);
                                    return
                                }
                            },
                            onrejected: function(n) {
                                if (!e) {
                                    i(n);
                                    return
                                }
                                try {
                                    t(e(n));
                                    return
                                } catch (t) {
                                    i(t);
                                    return
                                }
                            }
                        })
                    })
                }, t.prototype.catch = function(t) {
                    return this.then(function(t) {
                        return t
                    }, t)
                }, t.prototype.finally = function(n) {
                    var e = this;
                    return new t(function(t, r) {
                        var i, o;
                        return e.then(function(t) {
                            o = !1, i = t, n && n()
                        }, function(t) {
                            o = !0, i = t, n && n()
                        }).then(function() {
                            if (o) {
                                r(i);
                                return
                            }
                            t(i)
                        })
                    })
                }, t
            }()
        }
    }
]);
//# sourceMappingURL=39709.cbaecd0026c57dc75f0d.js.map