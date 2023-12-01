(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["46318"], {
        147369: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                addBreadcrumb: function() {
                    return r.addBreadcrumb
                }
            });
            var r = n("929352")
        },
        144227: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getCurrentHub: function() {
                    return u
                }
            }), n("424973"), n("70102");
            var r = n("247472"),
                i = n("762046"),
                o = n("620543");
            t = n.hmd(t);
            var s = function() {
                function t(t, e, n) {
                    void 0 === e && (e = new o.Scope), void 0 === n && (n = 3), this._version = n, this._stack = [], this._stack.push({
                        client: t,
                        scope: e
                    })
                }
                return t.prototype._invokeClient = function(t) {
                    for (var e, n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
                    var o = this.getStackTop();
                    o && o.client && o.client[t] && (e = o.client)[t].apply(e, r.__spread(n, [o.scope]))
                }, t.prototype.isOlderThan = function(t) {
                    return this._version < t
                }, t.prototype.bindClient = function(t) {
                    this.getStackTop().client = t
                }, t.prototype.pushScope = function() {
                    var t = this.getStack(),
                        e = t.length > 0 ? t[t.length - 1].scope : void 0,
                        n = o.Scope.clone(e);
                    return this.getStack().push({
                        client: this.getClient(),
                        scope: n
                    }), n
                }, t.prototype.popScope = function() {
                    return void 0 !== this.getStack().pop()
                }, t.prototype.withScope = function(t) {
                    var e = this.pushScope();
                    try {
                        t(e)
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
                }, t.prototype.captureException = function(t, e) {
                    var n = this._lastEventId = (0, i.uuid4)(),
                        o = e;
                    if (!e) {
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
                    return this._invokeClient("captureException", t, r.__assign({}, o, {
                        event_id: n
                    })), n
                }, t.prototype.captureMessage = function(t, e, n) {
                    var o = this._lastEventId = (0, i.uuid4)(),
                        s = n;
                    if (!n) {
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
                    return this._invokeClient("captureMessage", t, e, r.__assign({}, s, {
                        event_id: o
                    })), o
                }, t.prototype.captureEvent = function(t, e) {
                    var n = this._lastEventId = (0, i.uuid4)();
                    return this._invokeClient("captureEvent", t, r.__assign({}, e, {
                        event_id: n
                    })), n
                }, t.prototype.lastEventId = function() {
                    return this._lastEventId
                }, t.prototype.addBreadcrumb = function(t, e) {
                    var n = this.getStackTop();
                    if (!n.scope || !n.client) return;
                    var o = n.client.getOptions && n.client.getOptions() || {},
                        s = o.beforeBreadcrumb,
                        c = void 0 === s ? null : s,
                        a = o.maxBreadcrumbs,
                        u = void 0 === a ? 100 : a;
                    if (!(u <= 0)) {
                        var _ = (0, i.timestampWithMs)(),
                            p = r.__assign({
                                timestamp: _
                            }, t),
                            h = c ? (0, i.consoleSandbox)(function() {
                                return c(p, e)
                            }) : p;
                        null !== h && n.scope.addBreadcrumb(h, Math.min(u, 100))
                    }
                }, t.prototype.setUser = function(t) {
                    var e = this.getStackTop();
                    e.scope && e.scope.setUser(t)
                }, t.prototype.setTags = function(t) {
                    var e = this.getStackTop();
                    e.scope && e.scope.setTags(t)
                }, t.prototype.setExtras = function(t) {
                    var e = this.getStackTop();
                    e.scope && e.scope.setExtras(t)
                }, t.prototype.setTag = function(t, e) {
                    var n = this.getStackTop();
                    n.scope && n.scope.setTag(t, e)
                }, t.prototype.setExtra = function(t, e) {
                    var n = this.getStackTop();
                    n.scope && n.scope.setExtra(t, e)
                }, t.prototype.setContext = function(t, e) {
                    var n = this.getStackTop();
                    n.scope && n.scope.setContext(t, e)
                }, t.prototype.configureScope = function(t) {
                    var e = this.getStackTop();
                    e.scope && e.client && t(e.scope)
                }, t.prototype.run = function(t) {
                    var e = a(this);
                    try {
                        t(this)
                    } finally {
                        a(e)
                    }
                }, t.prototype.getIntegration = function(t) {
                    var e = this.getClient();
                    if (!e) return null;
                    try {
                        return e.getIntegration(t)
                    } catch (e) {
                        return i.logger.warn("Cannot retrieve integration " + t.id + " from the current Hub"), null
                    }
                }, t.prototype.startSpan = function(t, e) {
                    return void 0 === e && (e = !1), this._callExtensionMethod("startSpan", t, e)
                }, t.prototype.traceHeaders = function() {
                    return this._callExtensionMethod("traceHeaders")
                }, t.prototype._callExtensionMethod = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    var r = c().__SENTRY__;
                    if (r && r.extensions && "function" == typeof r.extensions[t]) return r.extensions[t].apply(this, e);
                    i.logger.warn("Extension method " + t + " couldn't be found, doing nothing.")
                }, t
            }();

            function c() {
                var t = (0, i.getGlobalObject)();
                return t.__SENTRY__ = t.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                }, t
            }

            function a(t) {
                var e = c(),
                    n = p(e);
                return h(e, t), n
            }

            function u() {
                var e = c();
                return ((!_(e) || p(e).isOlderThan(3)) && h(e, new s), (0, i.isNodeEnv)()) ? function(e) {
                    try {
                        var n = (0, i.dynamicRequire)(t, "domain").active;
                        if (!n) return p(e);
                        if (!_(n) || p(n).isOlderThan(3)) {
                            var r = p(e).getStackTop();
                            h(n, new s(r.client, o.Scope.clone(r.scope)))
                        }
                        return p(n)
                    } catch (t) {
                        return p(e)
                    }
                }(e) : p(e)
            }

            function _(t) {
                return !!t && !!t.__SENTRY__ && !!t.__SENTRY__.hub || !1
            }

            function p(t) {
                return t && t.__SENTRY__ && t.__SENTRY__.hub ? t.__SENTRY__.hub : (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = new s, t.__SENTRY__.hub)
            }

            function h(t, e) {
                return !!t && (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = e, !0)
            }
        },
        658171: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getCurrentHub: function() {
                    return r.getCurrentHub
                }
            });
            var r = n("144227")
        },
        620543: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Scope: function() {
                    return o
                }
            }), n("424973");
            var r = n("247472"),
                i = n("762046"),
                o = function() {
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
                            t._scopeListeners.forEach(function(e) {
                                e(t)
                            }), t._notifyingListeners = !1
                        }))
                    }, t.prototype._notifyEventProcessors = function(t, e, n, o) {
                        var s = this;
                        return void 0 === o && (o = 0), new i.SyncPromise(function(c, a) {
                            var u = t[o];
                            if (null === e || "function" != typeof u) c(e);
                            else {
                                var _ = u(r.__assign({}, e), n);
                                (0, i.isThenable)(_) ? _.then(function(e) {
                                    return s._notifyEventProcessors(t, e, n, o + 1).then(c)
                                }).then(null, a): s._notifyEventProcessors(t, _, n, o + 1).then(c).then(null, a)
                            }
                        })
                    }, t.prototype.setUser = function(t) {
                        return this._user = t || {}, this._notifyScopeListeners(), this
                    }, t.prototype.setTags = function(t) {
                        return this._tags = r.__assign({}, this._tags, t), this._notifyScopeListeners(), this
                    }, t.prototype.setTag = function(t, e) {
                        var n;
                        return this._tags = r.__assign({}, this._tags, ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                    }, t.prototype.setExtras = function(t) {
                        return this._extra = r.__assign({}, this._extra, t), this._notifyScopeListeners(), this
                    }, t.prototype.setExtra = function(t, e) {
                        var n;
                        return this._extra = r.__assign({}, this._extra, ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                    }, t.prototype.setFingerprint = function(t) {
                        return this._fingerprint = t, this._notifyScopeListeners(), this
                    }, t.prototype.setLevel = function(t) {
                        return this._level = t, this._notifyScopeListeners(), this
                    }, t.prototype.setTransaction = function(t) {
                        return this._transaction = t, this._span && (this._span.transaction = t), this._notifyScopeListeners(), this
                    }, t.prototype.setContext = function(t, e) {
                        var n;
                        return this._context = r.__assign({}, this._context, ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                    }, t.prototype.setSpan = function(t) {
                        return this._span = t, this._notifyScopeListeners(), this
                    }, t.prototype.getSpan = function() {
                        return this._span
                    }, t.clone = function(e) {
                        var n = new t;
                        return e && (n._breadcrumbs = r.__spread(e._breadcrumbs), n._tags = r.__assign({}, e._tags), n._extra = r.__assign({}, e._extra), n._context = r.__assign({}, e._context), n._user = e._user, n._level = e._level, n._span = e._span, n._transaction = e._transaction, n._fingerprint = e._fingerprint, n._eventProcessors = r.__spread(e._eventProcessors)), n
                    }, t.prototype.clear = function() {
                        return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._context = {}, this._level = void 0, this._transaction = void 0, this._fingerprint = void 0, this._span = void 0, this._notifyScopeListeners(), this
                    }, t.prototype.addBreadcrumb = function(t, e) {
                        var n = r.__assign({
                            timestamp: (0, i.timestampWithMs)()
                        }, t);
                        return this._breadcrumbs = void 0 !== e && e >= 0 ? r.__spread(this._breadcrumbs, [n]).slice(-e) : r.__spread(this._breadcrumbs, [n]), this._notifyScopeListeners(), this
                    }, t.prototype.clearBreadcrumbs = function() {
                        return this._breadcrumbs = [], this._notifyScopeListeners(), this
                    }, t.prototype._applyFingerprint = function(t) {
                        t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
                    }, t.prototype.applyToEvent = function(t, e) {
                        return this._extra && Object.keys(this._extra).length && (t.extra = r.__assign({}, this._extra, t.extra)), this._tags && Object.keys(this._tags).length && (t.tags = r.__assign({}, this._tags, t.tags)), this._user && Object.keys(this._user).length && (t.user = r.__assign({}, this._user, t.user)), this._context && Object.keys(this._context).length && (t.contexts = r.__assign({}, this._context, t.contexts)), this._level && (t.level = this._level), this._transaction && (t.transaction = this._transaction), this._applyFingerprint(t), t.breadcrumbs = r.__spread(t.breadcrumbs || [], this._breadcrumbs), t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, this._notifyEventProcessors(r.__spread(function() {
                            var t = (0, i.getGlobalObject)();
                            return t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.globalEventProcessors = t.__SENTRY__.globalEventProcessors || [], t.__SENTRY__.globalEventProcessors
                        }(), this._eventProcessors), t, e)
                    }, t
                }()
        },
        929352: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                addBreadcrumb: function() {
                    return o
                }
            }), n("70102");
            var r = n("247472"),
                i = n("658171");

            function o(t) {
                ! function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    var o = (0, i.getCurrentHub)();
                    if (o && o[t]) return o[t].apply(o, r.__spread(e));
                    throw Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
                }("addBreadcrumb", t)
            }
        },
        762046: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n("221171");
            n.es(r, e);
            var i = n("267101");
            n.es(i, e);
            var o = n("112956");
            n.es(o, e);
            var s = n("305201");
            n.es(s, e)
        },
        221171: function(t, e, n) {
            "use strict";

            function r(t) {
                return !!(t && t.then && "function" == typeof t.then)
            }
            n.r(e), n.d(e, {
                isThenable: function() {
                    return r
                }
            }), n("70102")
        },
        267101: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                logger: function() {
                    return c
                }
            });
            var r = n("112956"),
                i = (0, r.getGlobalObject)(),
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
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._enabled && (0, r.consoleSandbox)(function() {
                            i.console.log(o + "[Log]: " + t.join(" "))
                        })
                    }, t.prototype.warn = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._enabled && (0, r.consoleSandbox)(function() {
                            i.console.warn(o + "[Warn]: " + t.join(" "))
                        })
                    }, t.prototype.error = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._enabled && (0, r.consoleSandbox)(function() {
                            i.console.error(o + "[Error]: " + t.join(" "))
                        })
                    }, t
                }();
            i.__SENTRY__ = i.__SENTRY__ || {};
            var c = i.__SENTRY__.logger || (i.__SENTRY__.logger = new s)
        },
        112956: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                dynamicRequire: function() {
                    return i
                },
                isNodeEnv: function() {
                    return o
                },
                getGlobalObject: function() {
                    return c
                },
                uuid4: function() {
                    return a
                },
                consoleSandbox: function() {
                    return u
                },
                timestampWithMs: function() {
                    return _
                }
            }), n("854508"), n("659510"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("781738"), n("222007"), n("424973");
            var r = n("390493");

            function i(t, e) {
                return t.require(e)
            }

            function o() {
                return "[object process]" === Object.prototype.toString.call(void 0 !== r ? r : 0)
            }
            var s = {};

            function c() {
                return o() ? n.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : s
            }

            function a() {
                var t = c(),
                    e = t.crypto || t.msCrypto;
                if (void 0 !== e && e.getRandomValues) {
                    var n = new Uint16Array(8);
                    e.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
                    var r = function(t) {
                        for (var e = t.toString(16); e.length < 4;) e = "0" + e;
                        return e
                    };
                    return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
                }
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                    var e = 16 * Math.random() | 0;
                    return ("x" === t ? e : 3 & e | 8).toString(16)
                })
            }

            function u(t) {
                var e = c();
                if (!("console" in e)) return t();
                var n = e.console,
                    r = {};
                ["debug", "info", "warn", "error", "log", "assert"].forEach(function(t) {
                    t in e.console && n[t].__sentry_original__ && (r[t] = n[t], n[t] = n[t].__sentry_original__)
                });
                var i = t();
                return Object.keys(r).forEach(function(t) {
                    n[t] = r[t]
                }), i
            }

            function _() {
                return new Date().getTime() / 1e3
            }
        },
        305201: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                SyncPromise: function() {
                    return s
                }
            }), n("70102"), n("506083");
            var r, i, o = n("221171");
            (i = r || (r = {})).PENDING = "PENDING", i.RESOLVED = "RESOLVED", i.REJECTED = "REJECTED";
            var s = function() {
                function t(t) {
                    var e = this;
                    this._state = r.PENDING, this._handlers = [], this._resolve = function(t) {
                        e._setResult(r.RESOLVED, t)
                    }, this._reject = function(t) {
                        e._setResult(r.REJECTED, t)
                    }, this._setResult = function(t, n) {
                        if (e._state === r.PENDING) {
                            if ((0, o.isThenable)(n)) {
                                n.then(e._resolve, e._reject);
                                return
                            }
                            e._state = t, e._value = n, e._executeHandlers()
                        }
                    }, this._attachHandler = function(t) {
                        e._handlers = e._handlers.concat(t), e._executeHandlers()
                    }, this._executeHandlers = function() {
                        e._state !== r.PENDING && (e._state === r.REJECTED ? e._handlers.forEach(function(t) {
                            t.onrejected && t.onrejected(e._value)
                        }) : e._handlers.forEach(function(t) {
                            t.onfulfilled && t.onfulfilled(e._value)
                        }), e._handlers = [])
                    };
                    try {
                        t(this._resolve, this._reject)
                    } catch (t) {
                        this._reject(t)
                    }
                }
                return t.prototype.toString = function() {
                    return "[object SyncPromise]"
                }, t.resolve = function(e) {
                    return new t(function(t) {
                        t(e)
                    })
                }, t.reject = function(e) {
                    return new t(function(t, n) {
                        n(e)
                    })
                }, t.all = function(e) {
                    return new t(function(n, r) {
                        if (!Array.isArray(e)) {
                            r(TypeError("Promise.all requires an array as input."));
                            return
                        }
                        if (0 === e.length) {
                            n([]);
                            return
                        }
                        var i = e.length,
                            o = [];
                        e.forEach(function(e, s) {
                            t.resolve(e).then(function(t) {
                                o[s] = t, 0 == (i -= 1) && n(o)
                            }).then(null, r)
                        })
                    })
                }, t.prototype.then = function(e, n) {
                    var r = this;
                    return new t(function(t, i) {
                        r._attachHandler({
                            onfulfilled: function(n) {
                                if (!e) {
                                    t(n);
                                    return
                                }
                                try {
                                    t(e(n));
                                    return
                                } catch (t) {
                                    i(t);
                                    return
                                }
                            },
                            onrejected: function(e) {
                                if (!n) {
                                    i(e);
                                    return
                                }
                                try {
                                    t(n(e));
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
                }, t.prototype.finally = function(e) {
                    var n = this;
                    return new t(function(t, r) {
                        var i, o;
                        return n.then(function(t) {
                            o = !1, i = t, e && e()
                        }, function(t) {
                            o = !0, i = t, e && e()
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
//# sourceMappingURL=46318.26a20b3d6c9d947ee7c5.js.map