(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["14700"], {
        903204: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BrowserClient: function() {
                    return h
                }
            });
            var r = n("87627"),
                i = n("200344"),
                a = n("54423"),
                o = n("416076"),
                s = n("29713"),
                u = n("778455");
            n("814951");
            var c = n("91320"),
                l = n("648238"),
                d = n("590171"),
                f = n("643487"),
                _ = n("124969"),
                p = n("184612"),
                h = function(t) {
                    (0, s._)(n, t);
                    var e = (0, u._)(n);

                    function n(t) {
                        (0, r._)(this, n);
                        var i, a = f.WINDOW.SENTRY_SDK_SOURCE || (0, l.getSDKSource)();
                        return t._metadata = t._metadata || {}, t._metadata.sdk = t._metadata.sdk || {
                            name: "sentry.javascript.browser",
                            packages: [{
                                name: "".concat(a, ":@sentry/browser"),
                                version: c.SDK_VERSION
                            }],
                            version: c.SDK_VERSION
                        }, i = e.call(this, t), t.sendClientReports && f.WINDOW.document && f.WINDOW.document.addEventListener("visibilitychange", function() {
                            "hidden" === f.WINDOW.document.visibilityState && i._flushOutcomes()
                        }), i
                    }
                    return (0, i._)(n, [{
                        key: "eventFromException",
                        value: function(t, e) {
                            return (0, d.eventFromException)(this._options.stackParser, t, e, this._options.attachStacktrace)
                        }
                    }, {
                        key: "eventFromMessage",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info",
                                n = arguments.length > 2 ? arguments[2] : void 0;
                            return (0, d.eventFromMessage)(this._options.stackParser, t, e, n, this._options.attachStacktrace)
                        }
                    }, {
                        key: "sendEvent",
                        value: function(t, e) {
                            var r = this.getIntegrationById(_.BREADCRUMB_INTEGRATION_ID);
                            r && r.addSentryBreadcrumb && r.addSentryBreadcrumb(t), (0, a._)((0, o._)(n.prototype), "sendEvent", this).call(this, t, e)
                        }
                    }, {
                        key: "captureUserFeedback",
                        value: function(t) {
                            if (!this._isEnabled()) {
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && l.logger.warn("SDK not enabled, will not capture user feedback.");
                                return
                            }
                            var e = (0, p.createUserFeedbackEnvelope)(t, {
                                metadata: this.getSdkMetadata(),
                                dsn: this.getDsn(),
                                tunnel: this.getOptions().tunnel
                            });
                            this._sendEnvelope(e)
                        }
                    }, {
                        key: "_prepareEvent",
                        value: function(t, e, r) {
                            return t.platform = t.platform || "javascript", (0, a._)((0, o._)(n.prototype), "_prepareEvent", this).call(this, t, e, r)
                        }
                    }, {
                        key: "_flushOutcomes",
                        value: function() {
                            var t = this._clearOutcomes();
                            if (0 === t.length) {
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && l.logger.log("No outcomes to send");
                                return
                            }
                            if (!this._dsn) {
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && l.logger.log("No dsn provided, will not send outcomes");
                                return
                            }("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && l.logger.log("Sending outcomes:", t);
                            var e = (0, l.createClientReportEnvelope)(t, this._options.tunnel && (0, l.dsnToString)(this._dsn));
                            this._sendEnvelope(e)
                        }
                    }]), n
                }(c.BaseClient)
        },
        590171: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                eventFromException: function() {
                    return d
                },
                eventFromMessage: function() {
                    return f
                },
                eventFromUnknownInput: function() {
                    return _
                },
                exceptionFromError: function() {
                    return s
                }
            });
            var r = n("21189"),
                i = n("227094");
            n("996173"), n("47120"), n("357629"), n("723768"), n("301563"), n("814951");
            var a = n("91320"),
                o = n("648238");

            function s(t, e) {
                var n = c(t, e),
                    r = {
                        type: e && e.name,
                        value: function(t) {
                            var e = t && t.message;
                            return e ? e.error && "string" == typeof e.error.message ? e.error.message : e : "No error message"
                        }(e)
                    };
                return n.length && (r.stacktrace = {
                    frames: n
                }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r
            }

            function u(t, e) {
                return {
                    exception: {
                        values: [s(t, e)]
                    }
                }
            }

            function c(t, e) {
                var n = e.stacktrace || e.stack || "",
                    r = function(t) {
                        if (t) {
                            if ("number" == typeof t.framesToPop) return t.framesToPop;
                            if (l.test(t.message)) return 1
                        }
                        return 0
                    }(e);
                try {
                    return t(n, r)
                } catch (t) {}
                return []
            }
            var l = /Minified React error #\d+;/i;

            function d(t, e, n, r) {
                var i = _(t, e, n && n.syntheticException || void 0, r);
                return (0, o.addExceptionMechanism)(i), i.level = "error", n && n.event_id && (i.event_id = n.event_id), (0, o.resolvedSyncPromise)(i)
            }

            function f(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "info",
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    i = arguments.length > 4 ? arguments[4] : void 0,
                    a = p(t, e, r && r.syntheticException || void 0, i);
                return a.level = n, r && r.event_id && (a.event_id = r.event_id), (0, o.resolvedSyncPromise)(a)
            }

            function _(t, e, n, s, l) {
                var d;
                if ((0, o.isErrorEvent)(e) && e.error) return u(t, e.error);
                if ((0, o.isDOMError)(e) || (0, o.isDOMException)(e)) {
                    if ("stack" in e) d = u(t, e);
                    else {
                        var f = e.name || ((0, o.isDOMError)(e) ? "DOMError" : "DOMException"),
                            _ = e.message ? "".concat(f, ": ").concat(e.message) : f;
                        d = p(t, _, n, s), (0, o.addExceptionTypeValue)(d, _)
                    }
                    return "code" in e && (d.tags = (0, i._)((0, r._)({}, d.tags), {
                        "DOMException.code": "".concat(e.code)
                    })), d
                }
                return (0, o.isError)(e) ? u(t, e) : (0, o.isPlainObject)(e) || (0, o.isEvent)(e) ? (d = function(t, e, n, r) {
                    var i = (0, a.getCurrentHub)().getClient(),
                        s = i && i.getOptions().normalizeDepth,
                        u = {
                            exception: {
                                values: [{
                                    type: (0, o.isEvent)(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error",
                                    value: function(t, e) {
                                        var n = e.isUnhandledRejection,
                                            r = (0, o.extractExceptionKeysForMessage)(t),
                                            i = n ? "promise rejection" : "exception";
                                        if ((0, o.isErrorEvent)(t)) return "Event `ErrorEvent` captured as ".concat(i, " with message `").concat(t.message, "`");
                                        if ((0, o.isEvent)(t)) {
                                            var a = function(t) {
                                                try {
                                                    var e = Object.getPrototypeOf(t);
                                                    return e ? e.constructor.name : void 0
                                                } catch (t) {}
                                            }(t);
                                            return "Event `".concat(a, "` (type=").concat(t.type, ") captured as ").concat(i)
                                        }
                                        return "Object captured as ".concat(i, " with keys: ").concat(r)
                                    }(e, {
                                        isUnhandledRejection: r
                                    })
                                }]
                            },
                            extra: {
                                __serialized__: (0, o.normalizeToSize)(e, s)
                            }
                        };
                    if (n) {
                        var l = c(t, n);
                        l.length && (u.exception.values[0].stacktrace = {
                            frames: l
                        })
                    }
                    return u
                }(t, e, n, l), (0, o.addExceptionMechanism)(d, {
                    synthetic: !0
                }), d) : (d = p(t, e, n, s), (0, o.addExceptionTypeValue)(d, "".concat(e), void 0), (0, o.addExceptionMechanism)(d, {
                    synthetic: !0
                }), d)
            }

            function p(t, e, n, r) {
                var i = {
                    message: e
                };
                if (r && n) {
                    var a = c(t, n);
                    a.length && (i.exception = {
                        values: [{
                            value: e,
                            stacktrace: {
                                frames: a
                            }
                        }]
                    })
                }
                return i
            }
        },
        643487: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                WINDOW: function() {
                    return s
                },
                shouldIgnoreOnError: function() {
                    return c
                },
                wrap: function() {
                    return function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            s = arguments.length > 2 ? arguments[2] : void 0;
                        if ("function" != typeof e) return e;
                        try {
                            var c = e.__sentry_wrapped__;
                            if (c) return c;
                            if ((0, o.getOriginalFunction)(e)) return e
                        } catch (t) {
                            return e
                        }
                        var l = function() {
                            var c = Array.prototype.slice.call(arguments);
                            try {
                                s && "function" == typeof s && s.apply(this, arguments);
                                var l = c.map(function(e) {
                                    return t(e, n)
                                });
                                return e.apply(this, l)
                            } catch (t) {
                                throw u++, setTimeout(function() {
                                    u--
                                }), (0, a.withScope)(function(e) {
                                    e.addEventProcessor(function(t) {
                                        return n.mechanism && ((0, o.addExceptionTypeValue)(t, void 0, void 0), (0, o.addExceptionMechanism)(t, n.mechanism)), t.extra = (0, i._)((0, r._)({}, t.extra), {
                                            arguments: c
                                        }), t
                                    }), (0, a.captureException)(t)
                                }), t
                            }
                        };
                        try {
                            for (var d in e) Object.prototype.hasOwnProperty.call(e, d) && (l[d] = e[d])
                        } catch (t) {}(0, o.markFunctionWrapped)(l, e), (0, o.addNonEnumerableProperty)(e, "__sentry_wrapped__", l);
                        try {
                            Object.getOwnPropertyDescriptor(l, "name").configurable && Object.defineProperty(l, "name", {
                                get: () => e.name
                            })
                        } catch (t) {}
                        return l
                    }
                }
            });
            var r = n("21189"),
                i = n("227094");
            n("849202"), n("363505");
            var a = n("91320"),
                o = n("648238"),
                s = o.GLOBAL_OBJ,
                u = 0;

            function c() {
                return u > 0
            }
        },
        887117: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Breadcrumbs: function() {
                    return b.Breadcrumbs
                },
                BrowserClient: function() {
                    return o.BrowserClient
                },
                BrowserProfilingIntegration: function() {
                    return g.BrowserProfilingIntegration
                },
                BrowserTracing: function() {
                    return h.BrowserTracing
                },
                Dedupe: function() {
                    return w.Dedupe
                },
                FunctionToString: function() {
                    return i.FunctionToString
                },
                GlobalHandlers: function() {
                    return y.GlobalHandlers
                },
                HttpContext: function() {
                    return k.HttpContext
                },
                Hub: function() {
                    return i.Hub
                },
                InboundFilters: function() {
                    return i.InboundFilters
                },
                Integrations: function() {
                    return x
                },
                LinkedErrors: function() {
                    return S.LinkedErrors
                },
                ModuleMetadata: function() {
                    return i.ModuleMetadata
                },
                Replay: function() {
                    return p.Replay
                },
                SDK_VERSION: function() {
                    return i.SDK_VERSION
                },
                Scope: function() {
                    return i.Scope
                },
                TryCatch: function() {
                    return E.TryCatch
                },
                WINDOW: function() {
                    return a.WINDOW
                },
                addBreadcrumb: function() {
                    return i.addBreadcrumb
                },
                addGlobalEventProcessor: function() {
                    return i.addGlobalEventProcessor
                },
                addTracingExtensions: function() {
                    return i.addTracingExtensions
                },
                captureEvent: function() {
                    return i.captureEvent
                },
                captureException: function() {
                    return i.captureException
                },
                captureMessage: function() {
                    return i.captureMessage
                },
                captureUserFeedback: function() {
                    return f.captureUserFeedback
                },
                chromeStackLineParser: function() {
                    return c.chromeStackLineParser
                },
                close: function() {
                    return f.close
                },
                configureScope: function() {
                    return i.configureScope
                },
                createTransport: function() {
                    return i.createTransport
                },
                createUserFeedbackEnvelope: function() {
                    return d.createUserFeedbackEnvelope
                },
                defaultIntegrations: function() {
                    return f.defaultIntegrations
                },
                defaultRequestInstrumentationOptions: function() {
                    return h.defaultRequestInstrumentationOptions
                },
                defaultStackLineParsers: function() {
                    return c.defaultStackLineParsers
                },
                defaultStackParser: function() {
                    return c.defaultStackParser
                },
                eventFromException: function() {
                    return l.eventFromException
                },
                eventFromMessage: function() {
                    return l.eventFromMessage
                },
                extractTraceparentData: function() {
                    return i.extractTraceparentData
                },
                flush: function() {
                    return f.flush
                },
                forceLoad: function() {
                    return f.forceLoad
                },
                geckoStackLineParser: function() {
                    return c.geckoStackLineParser
                },
                getActiveTransaction: function() {
                    return i.getActiveTransaction
                },
                getCurrentHub: function() {
                    return i.getCurrentHub
                },
                getHubFromCarrier: function() {
                    return i.getHubFromCarrier
                },
                init: function() {
                    return f.init
                },
                instrumentOutgoingRequests: function() {
                    return h.instrumentOutgoingRequests
                },
                lastEventId: function() {
                    return f.lastEventId
                },
                makeBrowserOfflineTransport: function() {
                    return v.makeBrowserOfflineTransport
                },
                makeFetchTransport: function() {
                    return s.makeFetchTransport
                },
                makeMain: function() {
                    return i.makeMain
                },
                makeMultiplexedTransport: function() {
                    return i.makeMultiplexedTransport
                },
                makeXHRTransport: function() {
                    return u.makeXHRTransport
                },
                onLoad: function() {
                    return f.onLoad
                },
                onProfilingStartRouteTransaction: function() {
                    return m.onProfilingStartRouteTransaction
                },
                opera10StackLineParser: function() {
                    return c.opera10StackLineParser
                },
                opera11StackLineParser: function() {
                    return c.opera11StackLineParser
                },
                setContext: function() {
                    return i.setContext
                },
                setExtra: function() {
                    return i.setExtra
                },
                setExtras: function() {
                    return i.setExtras
                },
                setTag: function() {
                    return i.setTag
                },
                setTags: function() {
                    return i.setTags
                },
                setUser: function() {
                    return i.setUser
                },
                showReportDialog: function() {
                    return f.showReportDialog
                },
                spanStatusfromHttpCode: function() {
                    return i.spanStatusfromHttpCode
                },
                startTransaction: function() {
                    return i.startTransaction
                },
                trace: function() {
                    return i.trace
                },
                winjsStackLineParser: function() {
                    return c.winjsStackLineParser
                },
                withScope: function() {
                    return i.withScope
                },
                wrap: function() {
                    return f.wrap
                }
            });
            var r = n("21189"),
                i = n("91320"),
                a = n("643487"),
                o = n("903204"),
                s = n("393746"),
                u = n("975927"),
                c = n("202406"),
                l = n("590171"),
                d = n("184612"),
                f = n("846297"),
                _ = n("53383"),
                p = n("438142"),
                h = n("752875"),
                v = n("490753"),
                m = n("65534"),
                g = n("643714"),
                y = n("297280"),
                E = n("382078"),
                b = n("124969"),
                S = n("140735"),
                k = n("612568"),
                w = n("683900"),
                T = {};
            a.WINDOW.Sentry && a.WINDOW.Sentry.Integrations && (T = a.WINDOW.Sentry.Integrations);
            var x = (0, r._)({}, T, i.Integrations, _)
        },
        124969: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BREADCRUMB_INTEGRATION_ID: function() {
                    return l
                },
                Breadcrumbs: function() {
                    return d
                }
            });
            var r = n("87627"),
                i = n("200344"),
                a = n("21189"),
                o = n("227094");
            n("814951"), n("849202"), n("754598"), n("301563");
            var s = n("91320"),
                u = n("648238"),
                c = n("643487"),
                l = "Breadcrumbs",
                d = function() {
                    function t(e) {
                        (0, r._)(this, t), t.prototype.__init.call(this), this.options = (0, a._)({
                            console: !0,
                            dom: !0,
                            fetch: !0,
                            history: !0,
                            sentry: !0,
                            xhr: !0
                        }, e)
                    }
                    return (0, i._)(t, [{
                        key: "__init",
                        value: function() {
                            this.name = t.id
                        }
                    }, {
                        key: "setupOnce",
                        value: function() {
                            this.options.console && (0, u.addInstrumentationHandler)("console", f), this.options.dom && (0, u.addInstrumentationHandler)("dom", function(t) {
                                return function(e) {
                                    var n, r = "object" == typeof t ? t.serializeAttribute : void 0,
                                        i = "object" == typeof t && "number" == typeof t.maxStringLength ? t.maxStringLength : void 0;
                                    i && i > 1024 && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.logger.warn("`dom.maxStringLength` cannot exceed ".concat(1024, ", but a value of ").concat(i, " was configured. Sentry will use ").concat(1024, " instead.")), i = 1024), "string" == typeof r && (r = [r]);
                                    try {
                                        var a = e.event;
                                        n = function(t) {
                                            return !!t && !!t.target
                                        }(a) ? (0, u.htmlTreeAsString)(a.target, {
                                            keyAttrs: r,
                                            maxStringLength: i
                                        }) : (0, u.htmlTreeAsString)(a, {
                                            keyAttrs: r,
                                            maxStringLength: i
                                        })
                                    } catch (t) {
                                        n = "<unknown>"
                                    }
                                    0 !== n.length && (0, s.getCurrentHub)().addBreadcrumb({
                                        category: "ui.".concat(e.name),
                                        message: n
                                    }, {
                                        event: e.event,
                                        name: e.name,
                                        global: e.global
                                    })
                                }
                            }(this.options.dom)), this.options.xhr && (0, u.addInstrumentationHandler)("xhr", _), this.options.fetch && (0, u.addInstrumentationHandler)("fetch", p), this.options.history && (0, u.addInstrumentationHandler)("history", h)
                        }
                    }, {
                        key: "addSentryBreadcrumb",
                        value: function(t) {
                            this.options.sentry && (0, s.getCurrentHub)().addBreadcrumb({
                                category: "sentry.".concat("transaction" === t.type ? "transaction" : "event"),
                                event_id: t.event_id,
                                level: t.level,
                                message: (0, u.getEventDescription)(t)
                            }, {
                                event: t
                            })
                        }
                    }], [{
                        key: "__initStatic",
                        value: function() {
                            this.id = l
                        }
                    }]), t
                }();
            d.__initStatic();

            function f(t) {
                for (var e = 0; e < t.args.length; e++)
                    if ("ref=Ref<" === t.args[e]) {
                        t.args[e + 1] = "viewRef";
                        break
                    } var n = {
                    category: "console",
                    data: {
                        arguments: t.args,
                        logger: "console"
                    },
                    level: (0, u.severityLevelFromString)(t.level),
                    message: (0, u.safeJoin)(t.args, " ")
                };
                if ("assert" === t.level) {
                    if (!1 !== t.args[0]) return;
                    n.message = "Assertion failed: ".concat((0, u.safeJoin)(t.args.slice(1), " ") || "console.assert"), n.data.arguments = t.args.slice(1)
                }(0, s.getCurrentHub)().addBreadcrumb(n, {
                    input: t.args,
                    level: t.level
                })
            }

            function _(t) {
                var e = t.startTimestamp,
                    n = t.endTimestamp,
                    r = t.xhr[u.SENTRY_XHR_DATA_KEY];
                if (e && n && r) {
                    var i = r.method,
                        a = r.url,
                        o = r.status_code,
                        c = r.body,
                        l = {
                            xhr: t.xhr,
                            input: c,
                            startTimestamp: e,
                            endTimestamp: n
                        };
                    (0, s.getCurrentHub)().addBreadcrumb({
                        category: "xhr",
                        data: {
                            method: i,
                            url: a,
                            status_code: o
                        },
                        type: "http"
                    }, l)
                }
            }

            function p(t) {
                var e = t.startTimestamp,
                    n = t.endTimestamp;
                if (!!n) {
                    if (!t.fetchData.url.match(/sentry_key/) || "POST" !== t.fetchData.method) {
                        if (t.error) {
                            var r = t.fetchData,
                                i = {
                                    data: t.error,
                                    input: t.args,
                                    startTimestamp: e,
                                    endTimestamp: n
                                };
                            (0, s.getCurrentHub)().addBreadcrumb({
                                category: "fetch",
                                data: r,
                                level: "error",
                                type: "http"
                            }, i)
                        } else {
                            var u = (0, o._)((0, a._)({}, t.fetchData), {
                                    status_code: t.response && t.response.status
                                }),
                                c = {
                                    input: t.args,
                                    response: t.response,
                                    startTimestamp: e,
                                    endTimestamp: n
                                };
                            (0, s.getCurrentHub)().addBreadcrumb({
                                category: "fetch",
                                data: u,
                                type: "http"
                            }, c)
                        }
                    }
                }
            }

            function h(t) {
                var e = t.from,
                    n = t.to,
                    r = (0, u.parseUrl)(c.WINDOW.location.href),
                    i = (0, u.parseUrl)(e),
                    a = (0, u.parseUrl)(n);
                !i.path && (i = r), r.protocol === a.protocol && r.host === a.host && (n = a.relative), r.protocol === i.protocol && r.host === i.host && (e = i.relative), (0, s.getCurrentHub)().addBreadcrumb({
                    category: "navigation",
                    data: {
                        from: e,
                        to: n
                    }
                })
            }
        },
        683900: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Dedupe: function() {
                    return o
                }
            });
            var r = n("87627"),
                i = n("200344");
            n("312677"), n("996173"), n("47120"), n("357629");
            var a = n("648238"),
                o = function() {
                    function t() {
                        (0, r._)(this, t), t.prototype.__init.call(this)
                    }
                    return (0, i._)(t, [{
                        key: "__init",
                        value: function() {
                            this.name = t.id
                        }
                    }, {
                        key: "setupOnce",
                        value: function(e, n) {
                            var r = function(e) {
                                if (e.type) return e;
                                var r = n().getIntegration(t);
                                if (r) {
                                    try {
                                        if (function(t, e) {
                                                return !!e && (!!(function(t, e) {
                                                    var n = t.message,
                                                        r = e.message;
                                                    return !!((n || r) && (!n || r) && (n || !r) && n === r && u(t, e) && s(t, e)) || !1
                                                }(t, e) || function(t, e) {
                                                    var n = c(e),
                                                        r = c(t);
                                                    return !!(n && r && n.type === r.type && n.value === r.value && u(t, e) && s(t, e)) || !1
                                                }(t, e)) || !1)
                                            }(e, r._previousEvent)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.warn("Event dropped due to being a duplicate of previously captured event."), null
                                    } catch (t) {}
                                    return r._previousEvent = e
                                }
                                return e
                            };
                            r.id = this.name, e(r)
                        }
                    }], [{
                        key: "__initStatic",
                        value: function() {
                            this.id = "Dedupe"
                        }
                    }]), t
                }();
            o.__initStatic();

            function s(t, e) {
                var n = l(t),
                    r = l(e);
                if (!n && !r) return !0;
                if (n && !r || !n && r || r.length !== n.length) return !1;
                for (var i = 0; i < r.length; i++) {
                    var a = r[i],
                        o = n[i];
                    if (a.filename !== o.filename || a.lineno !== o.lineno || a.colno !== o.colno || a.function !== o.function) return !1
                }
                return !0
            }

            function u(t, e) {
                var n = t.fingerprint,
                    r = e.fingerprint;
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                try {
                    return !(n.join("") !== r.join(""))
                } catch (t) {
                    return !1
                }
            }

            function c(t) {
                return t.exception && t.exception.values && t.exception.values[0]
            }

            function l(t) {
                var e = t.exception;
                if (e) try {
                    return e.values[0].stacktrace.frames
                } catch (t) {}
            }
        },
        297280: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                GlobalHandlers: function() {
                    return d
                }
            });
            var r = n("87627"),
                i = n("200344"),
                a = n("21189"),
                o = n("154005");
            n("411104"), n("814951"), n("754598"), n("301563"), n("996173"), n("47120"), n("357629"), n("653041");
            var s = n("91320"),
                u = n("648238"),
                c = n("590171"),
                l = n("643487"),
                d = function() {
                    function t(e) {
                        (0, r._)(this, t), t.prototype.__init.call(this), t.prototype.__init2.call(this), this._options = (0, a._)({
                            onerror: !0,
                            onunhandledrejection: !0
                        }, e)
                    }
                    return (0, i._)(t, [{
                        key: "__init",
                        value: function() {
                            this.name = t.id
                        }
                    }, {
                        key: "__init2",
                        value: function() {
                            this._installFunc = {
                                onerror: f,
                                onunhandledrejection: _
                            }
                        }
                    }, {
                        key: "setupOnce",
                        value: function() {
                            Error.stackTraceLimit = 50;
                            var t = this._options;
                            for (var e in t) {
                                var n = this._installFunc[e];
                                n && t[e] && (function(t) {
                                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.logger.log("Global Handler attached: ".concat(t))
                                }(e), n(), this._installFunc[e] = void 0)
                            }
                        }
                    }], [{
                        key: "__initStatic",
                        value: function() {
                            this.id = "GlobalHandlers"
                        }
                    }]), t
                }();

            function f() {
                (0, u.addInstrumentationHandler)("error", function(t) {
                    var e = (0, o._)(v(), 3),
                        n = e[0],
                        r = e[1],
                        i = e[2];
                    if (!!n.getIntegration(d)) {
                        var a = t.msg,
                            s = t.url,
                            f = t.line,
                            _ = t.column,
                            m = t.error;
                        if (!(0, l.shouldIgnoreOnError)() && (!m || !m.__sentry_own_request__)) {
                            var g = void 0 === m && (0, u.isString)(a) ? function(t, e, n, r) {
                                var i = (0, u.isErrorEvent)(t) ? t.message : t,
                                    a = "Error",
                                    o = i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                                return o && (a = o[1], i = o[2]), p({
                                    exception: {
                                        values: [{
                                            type: a,
                                            value: i
                                        }]
                                    }
                                }, e, n, r)
                            }(a, s, f, _) : p((0, c.eventFromUnknownInput)(r, m || a, void 0, i, !1), s, f, _);
                            g.level = "error", h(n, m, g, "onerror")
                        }
                    }
                })
            }

            function _() {
                (0, u.addInstrumentationHandler)("unhandledrejection", function(t) {
                    var e = (0, o._)(v(), 3),
                        n = e[0],
                        r = e[1],
                        i = e[2];
                    if (n.getIntegration(d)) {
                        var a = t;
                        try {
                            "reason" in t ? a = t.reason : "detail" in t && "reason" in t.detail && (a = t.detail.reason)
                        } catch (t) {}
                        if ((0, l.shouldIgnoreOnError)() || a && a.__sentry_own_request__) return !0;
                        var s = (0, u.isPrimitive)(a) ? function(t) {
                            return {
                                exception: {
                                    values: [{
                                        type: "UnhandledRejection",
                                        value: "Non-Error promise rejection captured with value: ".concat(String(t))
                                    }]
                                }
                            }
                        }(a) : (0, c.eventFromUnknownInput)(r, a, void 0, i, !0);
                        s.level = "error", h(n, a, s, "onunhandledrejection")
                    }
                })
            }
            d.__initStatic();

            function p(t, e, n, r) {
                var i = t.exception = t.exception || {},
                    a = i.values = i.values || [],
                    o = a[0] = a[0] || {},
                    s = o.stacktrace = o.stacktrace || {},
                    c = s.frames = s.frames || [],
                    l = isNaN(parseInt(r, 10)) ? void 0 : r,
                    d = isNaN(parseInt(n, 10)) ? void 0 : n,
                    f = (0, u.isString)(e) && e.length > 0 ? e : (0, u.getLocationHref)();
                return 0 === c.length && c.push({
                    colno: l,
                    filename: f,
                    function: "?",
                    in_app: !0,
                    lineno: d
                }), t
            }

            function h(t, e, n, r) {
                (0, u.addExceptionMechanism)(n, {
                    handled: !1,
                    type: r
                }), t.captureEvent(n, {
                    originalException: e
                })
            }

            function v() {
                var t = (0, s.getCurrentHub)(),
                    e = t.getClient(),
                    n = e && e.getOptions() || {
                        stackParser: function() {
                            return []
                        },
                        attachStacktrace: !1
                    };
                return [t, n.stackParser, n.attachStacktrace]
            }
        },
        612568: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                HttpContext: function() {
                    return c
                }
            });
            var r = n("87627"),
                i = n("200344"),
                a = n("21189"),
                o = n("227094"),
                s = n("91320"),
                u = n("643487"),
                c = function() {
                    function t() {
                        (0, r._)(this, t), t.prototype.__init.call(this)
                    }
                    return (0, i._)(t, [{
                        key: "__init",
                        value: function() {
                            this.name = t.id
                        }
                    }, {
                        key: "setupOnce",
                        value: function() {
                            (0, s.addGlobalEventProcessor)(function(e) {
                                if ((0, s.getCurrentHub)().getIntegration(t)) {
                                    if (!u.WINDOW.navigator && !u.WINDOW.location && !u.WINDOW.document) return e;
                                    var n = e.request && e.request.url || u.WINDOW.location && u.WINDOW.location.href,
                                        r = (u.WINDOW.document || {}).referrer,
                                        i = (u.WINDOW.navigator || {}).userAgent,
                                        c = (0, a._)({}, e.request && e.request.headers, r && {
                                            Referer: r
                                        }, i && {
                                            "User-Agent": i
                                        }),
                                        l = (0, o._)((0, a._)({}, e.request, n && {
                                            url: n
                                        }), {
                                            headers: c
                                        });
                                    return (0, o._)((0, a._)({}, e), {
                                        request: l
                                    })
                                }
                                return e
                            })
                        }
                    }], [{
                        key: "__initStatic",
                        value: function() {
                            this.id = "HttpContext"
                        }
                    }]), t
                }();
            c.__initStatic()
        },
        53383: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Breadcrumbs: function() {
                    return a.Breadcrumbs
                },
                Dedupe: function() {
                    return u.Dedupe
                },
                GlobalHandlers: function() {
                    return r.GlobalHandlers
                },
                HttpContext: function() {
                    return s.HttpContext
                },
                LinkedErrors: function() {
                    return o.LinkedErrors
                },
                TryCatch: function() {
                    return i.TryCatch
                }
            });
            var r = n("297280"),
                i = n("382078"),
                a = n("124969"),
                o = n("140735"),
                s = n("612568"),
                u = n("683900")
        },
        140735: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                LinkedErrors: function() {
                    return s
                }
            });
            var r = n("87627"),
                i = n("200344");
            n("312677");
            var a = n("648238"),
                o = n("590171"),
                s = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        (0, r._)(this, t), t.prototype.__init.call(this), this._key = e.key || "cause", this._limit = e.limit || 5
                    }
                    return (0, i._)(t, [{
                        key: "__init",
                        value: function() {
                            this.name = t.id
                        }
                    }, {
                        key: "setupOnce",
                        value: function(e, n) {
                            e(function(e, r) {
                                var i = n(),
                                    s = i.getClient(),
                                    u = i.getIntegration(t);
                                if (!s || !u) return e;
                                var c = s.getOptions();
                                return (0, a.applyAggregateErrorsToEvent)(o.exceptionFromError, c.stackParser, c.maxValueLength, u._key, u._limit, e, r), e
                            })
                        }
                    }], [{
                        key: "__initStatic",
                        value: function() {
                            this.id = "LinkedErrors"
                        }
                    }]), t
                }();
            s.__initStatic()
        },
        382078: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                TryCatch: function() {
                    return c
                }
            });
            var r = n("87627"),
                i = n("200344"),
                a = n("21189");
            n("357629");
            var o = n("648238"),
                s = n("643487"),
                u = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
                c = function() {
                    function t(e) {
                        (0, r._)(this, t), t.prototype.__init.call(this), this._options = (0, a._)({
                            XMLHttpRequest: !0,
                            eventTarget: !0,
                            requestAnimationFrame: !0,
                            setInterval: !0,
                            setTimeout: !0
                        }, e)
                    }
                    return (0, i._)(t, [{
                        key: "__init",
                        value: function() {
                            this.name = t.id
                        }
                    }, {
                        key: "setupOnce",
                        value: function() {
                            this._options.setTimeout && (0, o.fill)(s.WINDOW, "setTimeout", l), this._options.setInterval && (0, o.fill)(s.WINDOW, "setInterval", l), this._options.requestAnimationFrame && (0, o.fill)(s.WINDOW, "requestAnimationFrame", d), this._options.XMLHttpRequest && "XMLHttpRequest" in s.WINDOW && (0, o.fill)(XMLHttpRequest.prototype, "send", f);
                            var t = this._options.eventTarget;
                            t && (Array.isArray(t) ? t : u).forEach(_)
                        }
                    }], [{
                        key: "__initStatic",
                        value: function() {
                            this.id = "TryCatch"
                        }
                    }]), t
                }();

            function l(t) {
                return function() {
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    var i = n[0];
                    return n[0] = (0, s.wrap)(i, {
                        mechanism: {
                            data: {
                                function: (0, o.getFunctionName)(t)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), t.apply(this, n)
                }
            }

            function d(t) {
                return function(e) {
                    return t.apply(this, [(0, s.wrap)(e, {
                        mechanism: {
                            data: {
                                function: "requestAnimationFrame",
                                handler: (0, o.getFunctionName)(t)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    })])
                }
            }

            function f(t) {
                return function() {
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    var i = this;
                    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(function(t) {
                        t in i && "function" == typeof i[t] && (0, o.fill)(i, t, function(e) {
                            var n = {
                                    mechanism: {
                                        data: {
                                            function: t,
                                            handler: (0, o.getFunctionName)(e)
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                },
                                r = (0, o.getOriginalFunction)(e);
                            return r && (n.mechanism.data.handler = (0, o.getFunctionName)(r)), (0, s.wrap)(e, n)
                        })
                    }), t.apply(this, n)
                }
            }

            function _(t) {
                var e = s.WINDOW,
                    n = e[t] && e[t].prototype;
                n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0, o.fill)(n, "addEventListener", function(e) {
                    return function(n, r, i) {
                        try {
                            "function" == typeof r.handleEvent && (r.handleEvent = (0, s.wrap)(r.handleEvent, {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: (0, o.getFunctionName)(r),
                                        target: t
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }))
                        } catch (t) {}
                        return e.apply(this, [n, (0, s.wrap)(r, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: (0, o.getFunctionName)(r),
                                    target: t
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }), i])
                    }
                }), (0, o.fill)(n, "removeEventListener", function(t) {
                    return function(e, n, r) {
                        try {
                            var i = n && n.__sentry_wrapped__;
                            i && t.call(this, e, i, r)
                        } catch (t) {}
                        return t.call(this, e, n, r)
                    }
                }))
            }
            c.__initStatic()
        },
        65534: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                onProfilingStartRouteTransaction: function() {
                    return l
                },
                wrapTransactionWithProfiling: function() {
                    return d
                }
            });
            var r = n("356056"),
                i = n("324415");
            n("814951"), n("633702"), n("266796");
            var a = n("91320"),
                o = n("648238"),
                s = n("643487"),
                u = n("450436"),
                c = !1;

            function l(t) {
                return t ? d(t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Profiling] Transaction is undefined, skipping profiling"), t)
            }

            function d(t) {
                var e, n = s.WINDOW.Profiler;
                if ("function" != typeof n) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object."), t;
                if (c) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Profiling] Profiling has been disabled for the duration of the current user session."), t;
                var l = (0, a.getCurrentHub)().getClient(),
                    d = l && l.getOptions();
                if (!d) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Profiling] Profiling disabled, no options found."), t;
                var f = d.profilesSampleRate;
                if (!(0, u.isValidSampleRate)(f)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.warn("[Profiling] Discarding profile because of invalid sample rate."), t;
                if (!f) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0"), t;
                if (!(!0 === f || Math.random() < f)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ".concat(Number(f), ")")), t;
                try {
                    e = new n({
                        sampleInterval: 10,
                        maxBufferSize: Math.floor(3e3)
                    })
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (o.logger.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."), o.logger.log("[Profiling] Disabling profiling for current user session.")), c = !0
                }
                if (!e) return t;
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Profiling] started profiling transaction: ".concat(t.name || t.description));
                var _ = (0, o.uuid4)();

                function p() {
                    return h.apply(this, arguments)
                }

                function h() {
                    return (h = (0, r._)(function() {
                        var n;
                        return (0, i._)(this, function(r) {
                            return t && e ? (n = t.startChild({
                                description: "profiler.stop",
                                op: "profiler"
                            }), [2, e.stop().then(function(e) {
                                return (n.finish(), v && (s.WINDOW.clearTimeout(v), v = void 0), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Profiling] stopped profiling of transaction: ".concat(t.name || t.description)), e) ? ((0, u.addProfileToMap)(_, e), null) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Profiling] profiler returned null profile for: ".concat(t.name || t.description), "this may indicate an overlapping transaction or a call to stopProfiling with a profile title that was never started"), null)
                            }).catch(function(t) {
                                return n.finish(), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Profiling] error while stopping profiler:", t), null
                            })]) : [2, null]
                        })
                    })).apply(this, arguments)
                }
                var v = s.WINDOW.setTimeout(function() {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Profiling] max profile duration elapsed, stopping profiling for:", t.name || t.description), p()
                    }, 3e4),
                    m = t.finish.bind(t);
                return t.finish = function() {
                    return t ? (p().then(function() {
                        t.setContext("profile", {
                            profile_id: _
                        }), m()
                    }, function() {
                        m()
                    }), t) : m()
                }, t
            }
        },
        643714: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BrowserProfilingIntegration: function() {
                    return u
                }
            });
            var r = n("87627"),
                i = n("200344");
            n("633702"), n("266796"), n("357629"), n("996173"), n("47120"), n("814951"), n("653041");
            var a = n("648238"),
                o = n("65534"),
                s = n("450436"),
                u = function() {
                    function t() {
                        (0, r._)(this, t), t.prototype.__init.call(this), t.prototype.__init2.call(this)
                    }
                    return (0, i._)(t, [{
                        key: "__init",
                        value: function() {
                            this.name = "BrowserProfilingIntegration"
                        }
                    }, {
                        key: "__init2",
                        value: function() {
                            this.getCurrentHub = void 0
                        }
                    }, {
                        key: "setupOnce",
                        value: function(t, e) {
                            this.getCurrentHub = e;
                            var n = this.getCurrentHub().getClient();
                            n && "function" == typeof n.on ? (n.on("startTransaction", function(t) {
                                (0, o.wrapTransactionWithProfiling)(t)
                            }), n.on("beforeEnvelope", function(t) {
                                if (!!s.PROFILE_MAP.size) {
                                    var e = (0, s.findProfiledTransactionsFromEnvelope)(t);
                                    if (e.length) {
                                        var n = [],
                                            r = !0,
                                            i = !1,
                                            o = void 0;
                                        try {
                                            for (var u, c = e[Symbol.iterator](); !(r = (u = c.next()).done); r = !0) {
                                                var l = u.value,
                                                    d = l && l.contexts,
                                                    f = d && d.profile && d.profile.profile_id;
                                                if (!f) {
                                                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.log("[Profiling] cannot find profile for a transaction without a profile context");
                                                    continue
                                                }
                                                d && d.profile && delete d.profile;
                                                var _ = s.PROFILE_MAP.get(f);
                                                if (!_) {
                                                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.log("[Profiling] Could not retrieve profile for transaction: ".concat(f));
                                                    continue
                                                }
                                                s.PROFILE_MAP.delete(f);
                                                var p = (0, s.createProfilingEvent)(f, _, l);
                                                p && n.push(p)
                                            }
                                        } catch (t) {
                                            i = !0, o = t
                                        } finally {
                                            try {
                                                !r && null != c.return && c.return()
                                            } finally {
                                                if (i) throw o
                                            }
                                        }(0, s.addProfilesToEnvelope)(t, n)
                                    }
                                }
                            })) : a.logger.warn("[Profiling] Client does not support hooks, profiling will be disabled")
                        }
                    }]), t
                }()
        },
        450436: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                PROFILE_MAP: function() {
                    return E
                },
                addProfileToMap: function() {
                    return b
                },
                addProfilesToEnvelope: function() {
                    return h
                },
                createProfilingEvent: function() {
                    return y
                },
                findProfiledTransactionsFromEnvelope: function() {
                    return v
                },
                isValidSampleRate: function() {
                    return g
                }
            }), n("814951"), n("411104"), n("653041"), n("633702"), n("266796"), n("357629"), n("996173"), n("47120"), n("870445"), n("573788"), n("724458"), n("26686");
            var r, i = n("91320"),
                a = n("648238"),
                o = n("643487"),
                s = String(0),
                u = "",
                c = "",
                l = "",
                d = o.WINDOW.navigator && o.WINDOW.navigator.userAgent || "",
                f = "",
                _ = o.WINDOW.navigator && o.WINDOW.navigator.language || o.WINDOW.navigator && o.WINDOW.navigator.languages && o.WINDOW.navigator.languages["0"] || "",
                p = o.WINDOW.navigator && o.WINDOW.navigator.userAgentData;
            if ("object" == typeof(r = p) && null !== r && "getHighEntropyValues" in r) p.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"]).then(function(t) {
                if (u = t.platform || "", l = t.architecture || "", f = t.model || "", c = t.platformVersion || "", t.fullVersionList && t.fullVersionList.length > 0) {
                    var e = t.fullVersionList[t.fullVersionList.length - 1];
                    d = "".concat(e.brand, " ").concat(e.version)
                }
            }).catch(function(t) {});

            function h(t, e) {
                if (!e.length) return t;
                var n = !0,
                    r = !1,
                    i = void 0;
                try {
                    for (var a, o = e[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                        var s = a.value;
                        t[1].push([{
                            type: "profile"
                        }, s])
                    }
                } catch (t) {
                    r = !0, i = t
                } finally {
                    try {
                        !n && null != o.return && o.return()
                    } finally {
                        if (r) throw i
                    }
                }
                return t
            }

            function v(t) {
                var e = [];
                return (0, a.forEachEnvelopeItem)(t, function(t, n) {
                    if ("transaction" === n)
                        for (var r = 1; r < t.length; r++) {
                            var i = t[r];
                            i && i.contexts && i.contexts.profile && i.contexts.profile.profile_id && e.push(t[r])
                        }
                }), e
            }
            var m = new WeakMap;

            function g(t) {
                return "number" != typeof t && "boolean" != typeof t || "number" == typeof t && isNaN(t) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.warn("[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ".concat(JSON.stringify(t), " of type ").concat(JSON.stringify(typeof t), ".")), !1) : !0 === t || !1 === t || !(t < 0) && !(t > 1) || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.warn("[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ".concat(t, ".")), !1)
            }

            function y(t, e, n) {
                var r;
                return ((r = e).samples.length < 2 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.log("[Profiling] Discarding profile because it contains less than 2 samples"), !1) : !!r.frames.length || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.log("[Profiling] Discarding profile because it contains no frames"), !1)) ? function(t, e, n) {
                    if ("transaction" !== t.type) throw TypeError("Profiling events may only be attached to transactions, this should never occur.");
                    if (null == e) throw TypeError("Cannot construct profiling event envelope without a valid profile. Got ".concat(e, " instead."));
                    var r, p, h = ("string" == typeof(p = (r = t) && r.contexts && r.contexts.trace && r.contexts.trace.trace_id) && 32 !== p.length && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.log("[Profiling] Invalid traceId: ".concat(p, " on profiled event")), "string" != typeof p) ? "" : p,
                        v = function(t) {
                            return "thread_metadata" in t ? t : function(t) {
                                var e = void 0,
                                    n = 0,
                                    r = {
                                        samples: [],
                                        stacks: [],
                                        frames: [],
                                        thread_metadata: {
                                            [s]: {
                                                name: "main"
                                            }
                                        }
                                    };
                                if (!t.samples.length) return r;
                                for (var i = t.samples[0].timestamp, o = "number" == typeof performance.timeOrigin ? performance.timeOrigin : a.browserPerformanceTimeOrigin || 0, u = o - (a.browserPerformanceTimeOrigin || o), c = 0; c < t.samples.length; c++) {
                                    var l = t.samples[c];
                                    if (void 0 === l.stackId) {
                                        void 0 === e && (e = n, r.stacks[e] = [], n++), r.samples[c] = {
                                            elapsed_since_start_ns: ((l.timestamp + u - i) * 1e6).toFixed(0),
                                            stack_id: e,
                                            thread_id: s
                                        };
                                        continue
                                    }
                                    for (var d = t.stacks[l.stackId], f = []; d;) {
                                        f.push(d.frameId);
                                        var _ = t.frames[d.frameId];
                                        void 0 === r.frames[d.frameId] && (r.frames[d.frameId] = {
                                            function: _.name,
                                            abs_path: "number" == typeof _.resourceId ? t.resources[_.resourceId] : void 0,
                                            lineno: _.line,
                                            colno: _.column
                                        }), d = void 0 === d.parentId ? void 0 : t.stacks[d.parentId]
                                    }
                                    var p = {
                                        elapsed_since_start_ns: ((l.timestamp + u - i) * 1e6).toFixed(0),
                                        stack_id: n,
                                        thread_id: s
                                    };
                                    r.stacks[n] = f, r.samples[c] = p, n++
                                }
                                return r
                            }(t)
                        }(e),
                        g = "number" == typeof t.start_timestamp ? 1e3 * t.start_timestamp : Date.now(),
                        y = "number" == typeof t.timestamp ? 1e3 * t.timestamp : Date.now();
                    return {
                        event_id: n,
                        timestamp: new Date(g).toISOString(),
                        platform: "javascript",
                        version: "1",
                        release: t.release || "",
                        environment: t.environment || i.DEFAULT_ENVIRONMENT,
                        runtime: {
                            name: "javascript",
                            version: o.WINDOW.navigator.userAgent
                        },
                        os: {
                            name: u,
                            version: c,
                            build_number: d
                        },
                        device: {
                            locale: _,
                            model: f,
                            manufacturer: d,
                            architecture: l,
                            is_emulator: !1
                        },
                        debug_meta: {
                            images: function(t) {
                                var e = a.GLOBAL_OBJ._sentryDebugIds;
                                if (!e) return [];
                                var n = (0, i.getCurrentHub)();
                                if (!n) return [];
                                var r = n.getClient();
                                if (!r) return [];
                                var o = r.getOptions();
                                if (!o) return [];
                                var s = o.stackParser;
                                if (!s) return [];
                                var u = m.get(s);
                                u ? p = u : (p = new Map, m.set(s, p));
                                var c = Object.keys(e).reduce(function(t, n) {
                                        var r, i = p.get(n);
                                        i ? r = i : (r = s(n), p.set(n, r));
                                        for (var a = r.length - 1; a >= 0; a--) {
                                            var o = r[a],
                                                u = o && o.filename;
                                            if (o && u) {
                                                t[u] = e[n];
                                                break
                                            }
                                        }
                                        return t
                                    }, {}),
                                    l = [],
                                    d = !0,
                                    f = !1,
                                    _ = void 0;
                                try {
                                    for (var p, h, v = t[Symbol.iterator](); !(d = (h = v.next()).done); d = !0) {
                                        var g = h.value;
                                        g && c[g] && l.push({
                                            type: "sourcemap",
                                            code_file: g,
                                            debug_id: c[g]
                                        })
                                    }
                                } catch (t) {
                                    f = !0, _ = t
                                } finally {
                                    try {
                                        !d && null != v.return && v.return()
                                    } finally {
                                        if (f) throw _
                                    }
                                }
                                return l
                            }(e.resources)
                        },
                        profile: v,
                        transactions: [{
                            name: t.transaction || "",
                            id: t.event_id || (0, a.uuid4)(),
                            trace_id: h,
                            active_thread_id: s,
                            relative_start_ns: "0",
                            relative_end_ns: ((y - g) * 1e6).toFixed(0)
                        }]
                    }
                }(n, e, t) : null
            }
            var E = new Map;

            function b(t, e) {
                if (E.set(t, e), E.size > 30) {
                    var n = E.keys().next().value;
                    E.delete(n)
                }
            }
        },
        846297: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                captureUserFeedback: function() {
                    return D
                },
                close: function() {
                    return T
                },
                defaultIntegrations: function() {
                    return g
                },
                flush: function() {
                    return w
                },
                forceLoad: function() {
                    return S
                },
                init: function() {
                    return y
                },
                lastEventId: function() {
                    return b
                },
                onLoad: function() {
                    return k
                },
                showReportDialog: function() {
                    return E
                },
                wrap: function() {
                    return x
                }
            });
            var r = n("21189"),
                i = n("227094"),
                a = n("91320"),
                o = n("648238"),
                s = n("903204"),
                u = n("643487"),
                c = n("297280"),
                l = n("382078"),
                d = n("124969"),
                f = n("140735"),
                _ = n("612568"),
                p = n("683900"),
                h = n("202406"),
                v = n("393746"),
                m = n("975927"),
                g = [new a.Integrations.InboundFilters, new a.Integrations.FunctionToString, new l.TryCatch, new d.Breadcrumbs, new c.GlobalHandlers, new f.LinkedErrors, new p.Dedupe, new _.HttpContext];

            function y() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                void 0 === t.defaultIntegrations && (t.defaultIntegrations = g), void 0 === t.release && ("string" == typeof __SENTRY_RELEASE__ && (t.release = __SENTRY_RELEASE__), u.WINDOW.SENTRY_RELEASE && u.WINDOW.SENTRY_RELEASE.id && (t.release = u.WINDOW.SENTRY_RELEASE.id)), void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0), void 0 === t.sendClientReports && (t.sendClientReports = !0);
                var e = (0, i._)((0, r._)({}, t), {
                    stackParser: (0, o.stackParserFromStackParserOptions)(t.stackParser || h.defaultStackParser),
                    integrations: (0, a.getIntegrationsToSetup)(t),
                    transport: t.transport || ((0, o.supportsFetch)() ? v.makeFetchTransport : m.makeXHRTransport)
                });
                (0, a.initAndBind)(s.BrowserClient, e), t.autoSessionTracking && function() {
                    if (void 0 === u.WINDOW.document) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
                        return
                    }
                    var t = (0, a.getCurrentHub)();
                    t.captureSession && (R(t), (0, o.addInstrumentationHandler)("history", function(t) {
                        var e = t.from,
                            n = t.to;
                        !(void 0 === e || e === n) && R((0, a.getCurrentHub)())
                    }))
                }()
            }

            function E() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, a.getCurrentHub)();
                if (!u.WINDOW.document) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.error("Global document not defined in showReportDialog call");
                    return
                }
                var n = e.getStackTop(),
                    i = n.client,
                    s = n.scope,
                    c = t.dsn || i && i.getDsn();
                if (!c) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.error("DSN not configured for showReportDialog call");
                    return
                }
                s && (t.user = (0, r._)({}, s.getUser(), t.user)), !t.eventId && (t.eventId = e.lastEventId());
                var l = u.WINDOW.document.createElement("script");
                l.async = !0, l.crossOrigin = "anonymous", l.src = (0, a.getReportDialogEndpoint)(c, t), t.onLoad && (l.onload = t.onLoad);
                var d = u.WINDOW.document.head || u.WINDOW.document.body;
                d ? d.appendChild(l) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.error("Not injecting report dialog. No injection point found in HTML")
            }

            function b() {
                return (0, a.getCurrentHub)().lastEventId()
            }

            function S() {}

            function k(t) {
                t()
            }

            function w(t) {
                var e = (0, a.getCurrentHub)().getClient();
                return e ? e.flush(t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.warn("Cannot flush events. No client defined."), (0, o.resolvedSyncPromise)(!1))
            }

            function T(t) {
                var e = (0, a.getCurrentHub)().getClient();
                return e ? e.close(t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.warn("Cannot flush events and disable SDK. No client defined."), (0, o.resolvedSyncPromise)(!1))
            }

            function x(t) {
                return (0, u.wrap)(t)()
            }

            function R(t) {
                t.startSession({
                    ignoreDuration: !0
                }), t.captureSession()
            }

            function D(t) {
                var e = (0, a.getCurrentHub)().getClient();
                e && e.captureUserFeedback(t)
            }
        },
        202406: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                chromeStackLineParser: function() {
                    return c
                },
                defaultStackLineParsers: function() {
                    return y
                },
                defaultStackParser: function() {
                    return E
                },
                geckoStackLineParser: function() {
                    return f
                },
                opera10StackLineParser: function() {
                    return v
                },
                opera11StackLineParser: function() {
                    return g
                },
                winjsStackLineParser: function() {
                    return p
                }
            });
            var r = n("154005"),
                i = n("761020");
            n("301563"), n("917168"), n("814951");
            var a = n("648238");

            function o(t, e, n, r) {
                var i = {
                    filename: t,
                    function: e,
                    in_app: !0
                };
                return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i
            }
            var s = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                u = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                c = [30, function(t) {
                    var e = s.exec(t);
                    if (e) {
                        if (e[2] && 0 === e[2].indexOf("eval")) {
                            var n = u.exec(e[2]);
                            n && (e[2] = n[1], e[3] = n[2], e[4] = n[3])
                        }
                        var i = (0, r._)(b(e[1] || "?", e[2]), 2),
                            a = i[0];
                        return o(i[1], a, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
                    }
                }],
                l = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
                d = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                f = [50, function(t) {
                    var e = l.exec(t);
                    if (e) {
                        if (e[3] && e[3].indexOf(" > eval") > -1) {
                            var n, i = d.exec(e[3]);
                            i && (e[1] = e[1] || "eval", e[3] = i[1], e[4] = i[2], e[5] = "")
                        }
                        var a = e[3],
                            s = e[1] || "?";
                        return s = (n = (0, r._)(b(s, a), 2))[0], o(a = n[1], s, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
                    }
                }],
                _ = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                p = [40, function(t) {
                    var e = _.exec(t);
                    return e ? o(e[2], e[1] || "?", +e[3], e[4] ? +e[4] : void 0) : void 0
                }],
                h = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
                v = [10, function(t) {
                    var e = h.exec(t);
                    return e ? o(e[2], e[3] || "?", +e[1]) : void 0
                }],
                m = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
                g = [20, function(t) {
                    var e = m.exec(t);
                    return e ? o(e[5], e[3] || e[4] || "?", +e[1], +e[2]) : void 0
                }],
                y = [c, f, p],
                E = a.createStackParser.apply(void 0, (0, i._)(y)),
                b = function(t, e) {
                    var n = -1 !== t.indexOf("safari-extension"),
                        r = -1 !== t.indexOf("safari-web-extension");
                    return n || r ? [-1 !== t.indexOf("@") ? t.split("@")[0] : "?", n ? "safari-extension:".concat(e) : "safari-web-extension:".concat(e)] : [t, e]
                }
        },
        393746: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                makeFetchTransport: function() {
                    return s
                }
            });
            var r = n("21189"),
                i = n("91320"),
                a = n("648238"),
                o = n("56618");

            function s(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, o.getNativeFetchImplementation)(),
                    n = 0,
                    s = 0;
                return (0, i.createTransport)(t, function(i) {
                    var u = i.body.length;
                    n += u, s++;
                    var c = (0, r._)({
                        body: i.body,
                        method: "POST",
                        referrerPolicy: "origin",
                        headers: t.headers,
                        keepalive: n <= 6e4 && s < 15
                    }, t.fetchOptions);
                    try {
                        return e(t.url, c).then(function(t) {
                            return n -= u, s--, {
                                statusCode: t.status,
                                headers: {
                                    "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                                    "retry-after": t.headers.get("Retry-After")
                                }
                            }
                        })
                    } catch (t) {
                        return (0, o.clearCachedFetchImplementation)(), n -= u, s--, (0, a.rejectedSyncPromise)(t)
                    }
                })
            }
        },
        490753: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                makeBrowserOfflineTransport: function() {
                    return _
                }
            });
            var r = n("356056"),
                i = n("21189"),
                a = n("227094"),
                o = n("761020"),
                s = n("324415");
            n("191489"), n("357629"), n("814951"), n("653041");
            var u = n("91320"),
                c = n("648238");

            function l(t) {
                return new Promise(function(e, n) {
                    t.oncomplete = t.onsuccess = function() {
                        return e(t.result)
                    }, t.onabort = t.onerror = function() {
                        return n(t.error)
                    }
                })
            }

            function d(t) {
                return l(t.getAllKeys())
            }

            function f(t) {
                var e, n;

                function i() {
                    if (void 0 == e) {
                        var n, r, i, a;
                        n = t.dbName || "sentry-offline", r = t.storeName || "queue", (i = indexedDB.open(n)).onupgradeneeded = function() {
                            return i.result.createObjectStore(r)
                        }, a = l(i), e = function(t) {
                            return a.then(function(e) {
                                return t(e.transaction(r, "readwrite").objectStore(r))
                            })
                        }
                    }
                    return e
                }
                return {
                    insert: (n = (0, r._)(function(e) {
                        var n, r;
                        return (0, s._)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 3, , 4]), [4, (0, c.serializeEnvelope)(e, t.textEncoder)];
                                case 1:
                                    var a, s, u;
                                    return n = r.sent(), [4, (a = i(), s = n, u = t.maxQueueSize || 30, a(function(t) {
                                        return d(t).then(function(e) {
                                            var n;
                                            if (!(e.length >= u)) return t.put(s, (n = Math).max.apply(n, (0, o._)(e).concat([0])) + 1), l(t.transaction)
                                        })
                                    }))];
                                case 2:
                                case 3:
                                    return r.sent(), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    }), function(t) {
                        return n.apply(this, arguments)
                    }),
                    pop: (0, r._)(function() {
                        var e, n;
                        return (0, s._)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return n.trys.push([0, 2, , 3]), [4, i()(function(t) {
                                        return d(t).then(function(e) {
                                            if (0 !== e.length) return l(t.get(e[0])).then(function(n) {
                                                return t.delete(e[0]), l(t.transaction).then(function() {
                                                    return n
                                                })
                                            })
                                        })
                                    })];
                                case 1:
                                    if (e = n.sent()) return [2, (0, c.parseEnvelope)(e, t.textEncoder || new TextEncoder, t.textDecoder || new TextDecoder)];
                                    return [3, 3];
                                case 2:
                                    return n.sent(), [3, 3];
                                case 3:
                                    return [2, void 0]
                            }
                        })
                    })
                }
            }

            function _(t) {
                var e;
                return e = (0, u.makeOfflineTransport)(t),
                    function(t) {
                        return e((0, a._)((0, i._)({}, t), {
                            createStore: f
                        }))
                    }
            }
        },
        56618: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                clearCachedFetchImplementation: function() {
                    return s
                },
                getNativeFetchImplementation: function() {
                    return o
                }
            });
            var r = n("648238"),
                i = n("643487"),
                a = void 0;

            function o() {
                if (a) return a;
                if ((0, r.isNativeFetch)(i.WINDOW.fetch)) return a = i.WINDOW.fetch.bind(i.WINDOW);
                var t = i.WINDOW.document,
                    e = i.WINDOW.fetch;
                if (t && "function" == typeof t.createElement) try {
                    var n = t.createElement("iframe");
                    n.hidden = !0, t.head.appendChild(n);
                    var o = n.contentWindow;
                    o && o.fetch && (e = o.fetch), t.head.removeChild(n)
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                }
                return a = e.bind(i.WINDOW)
            }

            function s() {
                a = void 0
            }
        },
        975927: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                makeXHRTransport: function() {
                    return a
                }
            });
            var r = n("91320"),
                i = n("648238");

            function a(t) {
                return (0, r.createTransport)(t, function(e) {
                    return new i.SyncPromise(function(n, r) {
                        var i = new XMLHttpRequest;
                        for (var a in i.onerror = r, i.onreadystatechange = function() {
                                4 === i.readyState && n({
                                    statusCode: i.status,
                                    headers: {
                                        "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                                        "retry-after": i.getResponseHeader("Retry-After")
                                    }
                                })
                            }, i.open("POST", t.url), t.headers) Object.prototype.hasOwnProperty.call(t.headers, a) && i.setRequestHeader(a, t.headers[a]);
                        i.send(e.body)
                    })
                })
            }
        },
        184612: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                createUserFeedbackEnvelope: function() {
                    return a
                }
            });
            var r = n("21189"),
                i = n("648238");

            function a(t, e) {
                var n = e.metadata,
                    a = e.tunnel,
                    o = e.dsn,
                    s = (0, r._)({
                        event_id: t.event_id,
                        sent_at: new Date().toISOString()
                    }, n && n.sdk && {
                        sdk: {
                            name: n.sdk.name,
                            version: n.sdk.version
                        }
                    }, !!a && !!o && {
                        dsn: (0, i.dsnToString)(o)
                    }),
                    u = function(t) {
                        return [{
                            type: "user_report"
                        }, t]
                    }(t);
                return (0, i.createEnvelope)(s, [u])
            }
        },
        507506: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getEnvelopeEndpointWithUrlEncodedAuth: function() {
                    return o
                },
                getReportDialogEndpoint: function() {
                    return s
                }
            });
            var r = n("21189");
            n("814951");
            var i = n("648238");

            function a(t) {
                var e = t.protocol ? "".concat(t.protocol, ":") : "",
                    n = t.port ? ":".concat(t.port) : "";
                return "".concat(e, "//").concat(t.host).concat(n).concat(t.path ? "/".concat(t.path) : "", "/api/")
            }

            function o(t) {
                var e, n, o, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    u = "string" == typeof s ? s : s.tunnel,
                    c = "string" != typeof s && s._metadata ? s._metadata.sdk : void 0;
                return u || "".concat((e = t, "".concat(a(e)).concat(e.projectId, "/envelope/")), "?").concat((n = t, o = c, (0, i.urlEncode)((0, r._)({
                    sentry_key: n.publicKey,
                    sentry_version: "7"
                }, o && {
                    sentry_client: "".concat(o.name, "/").concat(o.version)
                }))))
            }

            function s(t, e) {
                var n = (0, i.makeDsn)(t);
                if (!n) return "";
                var r = "".concat(a(n), "embed/error-page/"),
                    o = "dsn=".concat((0, i.dsnToString)(n));
                for (var s in e)
                    if ("dsn" !== s) {
                        if ("user" === s) {
                            var u = e.user;
                            if (!u) continue;
                            u.name && (o += "&name=".concat(encodeURIComponent(u.name))), u.email && (o += "&email=".concat(encodeURIComponent(u.email)))
                        } else o += "&".concat(encodeURIComponent(s), "=").concat(encodeURIComponent(e[s]))
                    } return "".concat(r, "?").concat(o)
            }
        },
        861579: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BaseClient: function() {
                    return m
                }
            });
            var r = n("87627"),
                i = n("200344"),
                a = n("21189"),
                o = n("227094"),
                s = n("154005"),
                u = n("761020");
            n("814951"), n("633702"), n("266796"), n("357629"), n("996173"), n("47120"), n("653041"), n("363505"), n("917168"), n("301563");
            var c = n("648238"),
                l = n("507506"),
                d = n("419767"),
                f = n("595208"),
                _ = n("741900"),
                p = n("154405"),
                h = n("392405"),
                v = "Not capturing exception because it's already been captured.",
                m = function() {
                    function t(e) {
                        if ((0, r._)(this, t), t.prototype.__init.call(this), t.prototype.__init2.call(this), t.prototype.__init3.call(this), t.prototype.__init4.call(this), t.prototype.__init5.call(this), this._options = e, e.dsn ? this._dsn = (0, c.makeDsn)(e.dsn) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.logger.warn("No DSN provided, client will not do anything."), this._dsn) {
                            var n = (0, l.getEnvelopeEndpointWithUrlEncodedAuth)(this._dsn, e);
                            this._transport = e.transport((0, o._)((0, a._)({
                                recordDroppedEvent: this.recordDroppedEvent.bind(this)
                            }, e.transportOptions), {
                                url: n
                            }))
                        }
                    }
                    return (0, i._)(t, [{
                        key: "__init",
                        value: function() {
                            this._integrations = {}
                        }
                    }, {
                        key: "__init2",
                        value: function() {
                            this._integrationsInitialized = !1
                        }
                    }, {
                        key: "__init3",
                        value: function() {
                            this._numProcessing = 0
                        }
                    }, {
                        key: "__init4",
                        value: function() {
                            this._outcomes = {}
                        }
                    }, {
                        key: "__init5",
                        value: function() {
                            this._hooks = {}
                        }
                    }, {
                        key: "captureException",
                        value: function(t, e, n) {
                            var r = this;
                            if ((0, c.checkOrSetAlreadyCaught)(t)) {
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.logger.log(v);
                                return
                            }
                            var i = e && e.event_id;
                            return this._process(this.eventFromException(t, e).then(function(t) {
                                return r._captureEvent(t, e, n)
                            }).then(function(t) {
                                i = t
                            })), i
                        }
                    }, {
                        key: "captureMessage",
                        value: function(t, e, n, r) {
                            var i = this,
                                a = n && n.event_id,
                                o = (0, c.isPrimitive)(t) ? this.eventFromMessage(String(t), e, n) : this.eventFromException(t, n);
                            return this._process(o.then(function(t) {
                                return i._captureEvent(t, n, r)
                            }).then(function(t) {
                                a = t
                            })), a
                        }
                    }, {
                        key: "captureEvent",
                        value: function(t, e, n) {
                            if (e && e.originalException && (0, c.checkOrSetAlreadyCaught)(e.originalException)) {
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.logger.log(v);
                                return
                            }
                            var r = e && e.event_id;
                            return this._process(this._captureEvent(t, e, n).then(function(t) {
                                r = t
                            })), r
                        }
                    }, {
                        key: "captureSession",
                        value: function(t) {
                            if (!this._isEnabled()) {
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.logger.warn("SDK not enabled, will not capture session.");
                                return
                            }
                            "string" != typeof t.release ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.logger.warn("Discarded session because of missing or non-string release") : (this.sendSession(t), (0, _.updateSession)(t, {
                                init: !1
                            }))
                        }
                    }, {
                        key: "getDsn",
                        value: function() {
                            return this._dsn
                        }
                    }, {
                        key: "getOptions",
                        value: function() {
                            return this._options
                        }
                    }, {
                        key: "getSdkMetadata",
                        value: function() {
                            return this._options._metadata
                        }
                    }, {
                        key: "getTransport",
                        value: function() {
                            return this._transport
                        }
                    }, {
                        key: "flush",
                        value: function(t) {
                            var e = this._transport;
                            return e ? this._isClientDoneProcessing(t).then(function(n) {
                                return e.flush(t).then(function(t) {
                                    return n && t
                                })
                            }) : (0, c.resolvedSyncPromise)(!0)
                        }
                    }, {
                        key: "close",
                        value: function(t) {
                            var e = this;
                            return this.flush(t).then(function(t) {
                                return e.getOptions().enabled = !1, t
                            })
                        }
                    }, {
                        key: "setupIntegrations",
                        value: function() {
                            this._isEnabled() && !this._integrationsInitialized && (this._integrations = (0, f.setupIntegrations)(this._options.integrations), this._integrationsInitialized = !0)
                        }
                    }, {
                        key: "getIntegrationById",
                        value: function(t) {
                            return this._integrations[t]
                        }
                    }, {
                        key: "getIntegration",
                        value: function(t) {
                            try {
                                return this._integrations[t.id] || null
                            } catch (e) {
                                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.logger.warn("Cannot retrieve integration ".concat(t.id, " from the current Client")), null
                            }
                        }
                    }, {
                        key: "addIntegration",
                        value: function(t) {
                            (0, f.setupIntegration)(t, this._integrations)
                        }
                    }, {
                        key: "sendEvent",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = this;
                            if (this._dsn) {
                                var r = (0, d.createEventEnvelope)(t, this._dsn, this._options._metadata, this._options.tunnel),
                                    i = !0,
                                    a = !1,
                                    o = void 0;
                                try {
                                    for (var s, u = (e.attachments || [])[Symbol.iterator](); !(i = (s = u.next()).done); i = !0) {
                                        var l = s.value;
                                        r = (0, c.addItemToEnvelope)(r, (0, c.createAttachmentEnvelopeItem)(l, this._options.transportOptions && this._options.transportOptions.textEncoder))
                                    }
                                } catch (t) {
                                    a = !0, o = t
                                } finally {
                                    try {
                                        !i && null != u.return && u.return()
                                    } finally {
                                        if (a) throw o
                                    }
                                }
                                var f = this._sendEnvelope(r);
                                f && f.then(function(e) {
                                    return n.emit("afterSendEvent", t, e)
                                }, null)
                            }
                        }
                    }, {
                        key: "sendSession",
                        value: function(t) {
                            if (this._dsn) {
                                var e = (0, d.createSessionEnvelope)(t, this._dsn, this._options._metadata, this._options.tunnel);
                                this._sendEnvelope(e)
                            }
                        }
                    }, {
                        key: "recordDroppedEvent",
                        value: function(t, e, n) {
                            if (this._options.sendClientReports) {
                                var r = "".concat(t, ":").concat(e);
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.logger.log('Adding outcome: "'.concat(r, '"')), this._outcomes[r] = this._outcomes[r] + 1 || 1
                            }
                        }
                    }, {
                        key: "on",
                        value: function(t, e) {
                            !this._hooks[t] && (this._hooks[t] = []), this._hooks[t].push(e)
                        }
                    }, {
                        key: "emit",
                        value: function(t) {
                            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                            this._hooks[t] && this._hooks[t].forEach(function(t) {
                                return t.apply(void 0, (0, u._)(n))
                            })
                        }
                    }, {
                        key: "_updateSessionFromEvent",
                        value: function(t, e) {
                            var n = !1,
                                r = !1,
                                i = e.exception && e.exception.values;
                            if (i) {
                                r = !0;
                                var s = !0,
                                    u = !1,
                                    c = void 0;
                                try {
                                    for (var l, d = i[Symbol.iterator](); !(s = (l = d.next()).done); s = !0) {
                                        var f = l.value.mechanism;
                                        if (f && !1 === f.handled) {
                                            n = !0;
                                            break
                                        }
                                    }
                                } catch (t) {
                                    u = !0, c = t
                                } finally {
                                    try {
                                        !s && null != d.return && d.return()
                                    } finally {
                                        if (u) throw c
                                    }
                                }
                            }
                            var p = "ok" === t.status;
                            (p && 0 === t.errors || p && n) && ((0, _.updateSession)(t, (0, o._)((0, a._)({}, n && {
                                status: "crashed"
                            }), {
                                errors: t.errors || Number(r || n)
                            })), this.captureSession(t))
                        }
                    }, {
                        key: "_isClientDoneProcessing",
                        value: function(t) {
                            var e = this;
                            return new c.SyncPromise(function(n) {
                                var r = 0,
                                    i = setInterval(function() {
                                        0 == e._numProcessing ? (clearInterval(i), n(!0)) : (r += 1, t && r >= t && (clearInterval(i), n(!1)))
                                    }, 1)
                            })
                        }
                    }, {
                        key: "_isEnabled",
                        value: function() {
                            return !1 !== this.getOptions().enabled && void 0 !== this._dsn
                        }
                    }, {
                        key: "_prepareEvent",
                        value: function(t, e, n) {
                            var r = this,
                                i = this.getOptions(),
                                o = Object.keys(this._integrations);
                            return !e.integrations && o.length > 0 && (e.integrations = o), (0, h.prepareEvent)(i, t, e, n).then(function(t) {
                                if (null === t) return t;
                                var e = (t.sdkProcessingMetadata || {}).propagationContext;
                                if (!(t.contexts && t.contexts.trace) && e) {
                                    var i = e.traceId,
                                        o = e.spanId,
                                        s = e.parentSpanId,
                                        u = e.dsc;
                                    t.contexts = (0, a._)({
                                        trace: {
                                            trace_id: i,
                                            span_id: o,
                                            parent_span_id: s
                                        }
                                    }, t.contexts);
                                    var c = u || (0, p.getDynamicSamplingContextFromClient)(i, r, n);
                                    t.sdkProcessingMetadata = (0, a._)({
                                        dynamicSamplingContext: c
                                    }, t.sdkProcessingMetadata)
                                }
                                return t
                            })
                        }
                    }, {
                        key: "_captureEvent",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = arguments.length > 2 ? arguments[2] : void 0;
                            return this._processEvent(t, e, n).then(function(t) {
                                return t.event_id
                            }, function(t) {
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && ("log" === t.logLevel ? c.logger.log(t.message) : c.logger.warn(t))
                            })
                        }
                    }, {
                        key: "_processEvent",
                        value: function(t, e, n) {
                            var r = this,
                                i = this.getOptions(),
                                s = i.sampleRate;
                            if (!this._isEnabled()) return (0, c.rejectedSyncPromise)(new c.SentryError("SDK not enabled, will not capture event.", "log"));
                            var u = y(t),
                                l = g(t),
                                d = t.type || "error",
                                f = "before send for type `".concat(d, "`");
                            if (l && "number" == typeof s && Math.random() > s) return this.recordDroppedEvent("sample_rate", "error", t), (0, c.rejectedSyncPromise)(new c.SentryError("Discarding event because it's not included in the random sample (sampling rate = ".concat(s, ")"), "log"));
                            var _ = "replay_event" === d ? "replay" : d;
                            return this._prepareEvent(t, e, n).then(function(n) {
                                if (null === n) throw r.recordDroppedEvent("event_processor", _, t), new c.SentryError("An event processor returned `null`, will not send event.", "log");
                                return e.data && !0 === e.data.__sentry__ ? n : function(t, e) {
                                    var n = "".concat(e, " must return `null` or a valid event.");
                                    if ((0, c.isThenable)(t)) return t.then(function(t) {
                                        if (!(0, c.isPlainObject)(t) && null !== t) throw new c.SentryError(n);
                                        return t
                                    }, function(t) {
                                        throw new c.SentryError("".concat(e, " rejected with ").concat(t))
                                    });
                                    if (!(0, c.isPlainObject)(t) && null !== t) throw new c.SentryError(n);
                                    return t
                                }(function(t, e, n) {
                                    var r = t.beforeSend,
                                        i = t.beforeSendTransaction;
                                    return g(e) && r ? r(e, n) : y(e) && i ? i(e, n) : e
                                }(i, n, e), f)
                            }).then(function(i) {
                                if (null === i) throw r.recordDroppedEvent("before_send", _, t), new c.SentryError("".concat(f, " returned `null`, will not send event."), "log");
                                var s = n && n.getSession();
                                !u && s && r._updateSessionFromEvent(s, i);
                                var l = i.transaction_info;
                                return u && l && i.transaction !== t.transaction && (i.transaction_info = (0, o._)((0, a._)({}, l), {
                                    source: "custom"
                                })), r.sendEvent(i, e), i
                            }).then(null, function(t) {
                                if (t instanceof c.SentryError) throw t;
                                throw r.captureException(t, {
                                    data: {
                                        __sentry__: !0
                                    },
                                    originalException: t
                                }), new c.SentryError("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ".concat(t))
                            })
                        }
                    }, {
                        key: "_process",
                        value: function(t) {
                            var e = this;
                            this._numProcessing++, t.then(function(t) {
                                return e._numProcessing--, t
                            }, function(t) {
                                return e._numProcessing--, t
                            })
                        }
                    }, {
                        key: "_sendEnvelope",
                        value: function(t) {
                            if (this._transport && this._dsn) return this.emit("beforeEnvelope", t), this._transport.send(t).then(null, function(t) {
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.logger.error("Error while sending event:", t)
                            });
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.logger.error("Transport disabled")
                        }
                    }, {
                        key: "_clearOutcomes",
                        value: function() {
                            var t = this._outcomes;
                            return this._outcomes = {}, Object.keys(t).map(function(e) {
                                var n = (0, s._)(e.split(":"), 2),
                                    r = n[0];
                                return {
                                    reason: r,
                                    category: n[1],
                                    quantity: t[e]
                                }
                            })
                        }
                    }]), t
                }();

            function g(t) {
                return void 0 === t.type
            }

            function y(t) {
                return "transaction" === t.type
            }
        },
        28434: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                DEFAULT_ENVIRONMENT: function() {
                    return r
                }
            });
            var r = "production"
        },
        419767: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                createEventEnvelope: function() {
                    return s
                },
                createSessionEnvelope: function() {
                    return o
                }
            });
            var r = n("21189"),
                i = n("761020");
            n("814951"), n("605887"), n("309749");
            var a = n("648238");

            function o(t, e, n, i) {
                var o = (0, a.getSdkMetadataForEnvelopeHeader)(n),
                    s = (0, r._)({
                        sent_at: new Date().toISOString()
                    }, o && {
                        sdk: o
                    }, !!i && {
                        dsn: (0, a.dsnToString)(e)
                    }),
                    u = "aggregates" in t ? [{
                        type: "sessions"
                    }, t] : [{
                        type: "session"
                    }, t.toJSON()];
                return (0, a.createEnvelope)(s, [u])
            }

            function s(t, e, n, r) {
                var o, s, u = (0, a.getSdkMetadataForEnvelopeHeader)(n),
                    c = t.type && "replay_event" !== t.type ? t.type : "event";
                o = t, !(s = n && n.sdk) || (o.sdk = o.sdk || {}, o.sdk.name = o.sdk.name || s.name, o.sdk.version = o.sdk.version || s.version, o.sdk.integrations = (0, i._)(o.sdk.integrations || []).concat((0, i._)(s.integrations || [])), o.sdk.packages = (0, i._)(o.sdk.packages || []).concat((0, i._)(s.packages || [])));
                var l = (0, a.createEventEnvelopeHeaders)(t, u, r, e);
                delete t.sdkProcessingMetadata;
                var d = [{
                    type: c
                }, t];
                return (0, a.createEnvelope)(l, [d])
            }
        },
        138122: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                addBreadcrumb: function() {
                    return c
                },
                captureEvent: function() {
                    return s
                },
                captureException: function() {
                    return a
                },
                captureMessage: function() {
                    return o
                },
                configureScope: function() {
                    return u
                },
                setContext: function() {
                    return l
                },
                setExtra: function() {
                    return f
                },
                setExtras: function() {
                    return d
                },
                setTag: function() {
                    return p
                },
                setTags: function() {
                    return _
                },
                setUser: function() {
                    return h
                },
                startTransaction: function() {
                    return m
                },
                withScope: function() {
                    return v
                }
            });
            var r = n("21189"),
                i = n("876122");

            function a(t, e) {
                return (0, i.getCurrentHub)().captureException(t, {
                    captureContext: e
                })
            }

            function o(t, e) {
                var n = "string" == typeof e ? e : void 0,
                    r = "string" != typeof e ? {
                        captureContext: e
                    } : void 0;
                return (0, i.getCurrentHub)().captureMessage(t, n, r)
            }

            function s(t, e) {
                return (0, i.getCurrentHub)().captureEvent(t, e)
            }

            function u(t) {
                (0, i.getCurrentHub)().configureScope(t)
            }

            function c(t) {
                (0, i.getCurrentHub)().addBreadcrumb(t)
            }

            function l(t, e) {
                (0, i.getCurrentHub)().setContext(t, e)
            }

            function d(t) {
                (0, i.getCurrentHub)().setExtras(t)
            }

            function f(t, e) {
                (0, i.getCurrentHub)().setExtra(t, e)
            }

            function _(t) {
                (0, i.getCurrentHub)().setTags(t)
            }

            function p(t, e) {
                (0, i.getCurrentHub)().setTag(t, e)
            }

            function h(t) {
                (0, i.getCurrentHub)().setUser(t)
            }

            function v(t) {
                (0, i.getCurrentHub)().withScope(t)
            }

            function m(t, e) {
                return (0, i.getCurrentHub)().startTransaction((0, r._)({}, t), e)
            }
        },
        876122: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Hub: function() {
                    return d
                },
                getCurrentHub: function() {
                    return p
                },
                getHubFromCarrier: function() {
                    return h
                },
                getMainCarrier: function() {
                    return f
                },
                makeMain: function() {
                    return _
                }
            });
            var r = n("87627"),
                i = n("200344"),
                a = n("21189"),
                o = n("227094");
            n("653041"), n("411104"), n("814951");
            var s = n("648238"),
                u = n("28434"),
                c = n("703498"),
                l = n("741900"),
                d = function() {
                    function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new c.Scope,
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4;
                        (0, r._)(this, t), this._version = i, this._stack = [{
                            scope: n
                        }], e && this.bindClient(e)
                    }
                    return (0, i._)(t, [{
                        key: "isOlderThan",
                        value: function(t) {
                            return this._version < t
                        }
                    }, {
                        key: "bindClient",
                        value: function(t) {
                            this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations()
                        }
                    }, {
                        key: "pushScope",
                        value: function() {
                            var t = c.Scope.clone(this.getScope());
                            return this.getStack().push({
                                client: this.getClient(),
                                scope: t
                            }), t
                        }
                    }, {
                        key: "popScope",
                        value: function() {
                            return !(this.getStack().length <= 1) && !!this.getStack().pop()
                        }
                    }, {
                        key: "withScope",
                        value: function(t) {
                            var e = this.pushScope();
                            try {
                                t(e)
                            } finally {
                                this.popScope()
                            }
                        }
                    }, {
                        key: "getClient",
                        value: function() {
                            return this.getStackTop().client
                        }
                    }, {
                        key: "getScope",
                        value: function() {
                            return this.getStackTop().scope
                        }
                    }, {
                        key: "getStack",
                        value: function() {
                            return this._stack
                        }
                    }, {
                        key: "getStackTop",
                        value: function() {
                            return this._stack[this._stack.length - 1]
                        }
                    }, {
                        key: "captureException",
                        value: function(t, e) {
                            var n = this._lastEventId = e && e.event_id ? e.event_id : (0, s.uuid4)(),
                                r = Error("Sentry syntheticException");
                            return this._withClient(function(i, s) {
                                i.captureException(t, (0, o._)((0, a._)({
                                    originalException: t,
                                    syntheticException: r
                                }, e), {
                                    event_id: n
                                }), s)
                            }), n
                        }
                    }, {
                        key: "captureMessage",
                        value: function(t, e, n) {
                            var r = this._lastEventId = n && n.event_id ? n.event_id : (0, s.uuid4)(),
                                i = Error(t);
                            return this._withClient(function(s, u) {
                                s.captureMessage(t, e, (0, o._)((0, a._)({
                                    originalException: t,
                                    syntheticException: i
                                }, n), {
                                    event_id: r
                                }), u)
                            }), r
                        }
                    }, {
                        key: "captureEvent",
                        value: function(t, e) {
                            var n = e && e.event_id ? e.event_id : (0, s.uuid4)();
                            return !t.type && (this._lastEventId = n), this._withClient(function(r, i) {
                                r.captureEvent(t, (0, o._)((0, a._)({}, e), {
                                    event_id: n
                                }), i)
                            }), n
                        }
                    }, {
                        key: "lastEventId",
                        value: function() {
                            return this._lastEventId
                        }
                    }, {
                        key: "addBreadcrumb",
                        value: function(t, e) {
                            var n = this.getStackTop(),
                                r = n.scope,
                                i = n.client;
                            if (!i) return;
                            var o = i.getOptions && i.getOptions() || {},
                                u = o.beforeBreadcrumb,
                                c = void 0 === u ? null : u,
                                l = o.maxBreadcrumbs,
                                d = void 0 === l ? 100 : l;
                            if (!(d <= 0)) {
                                var f = (0, s.dateTimestampInSeconds)(),
                                    _ = (0, a._)({
                                        timestamp: f
                                    }, t),
                                    p = c ? (0, s.consoleSandbox)(function() {
                                        return c(_, e)
                                    }) : _;
                                null !== p && (i.emit && i.emit("beforeAddBreadcrumb", p, e), r.addBreadcrumb(p, d))
                            }
                        }
                    }, {
                        key: "setUser",
                        value: function(t) {
                            this.getScope().setUser(t)
                        }
                    }, {
                        key: "setTags",
                        value: function(t) {
                            this.getScope().setTags(t)
                        }
                    }, {
                        key: "setExtras",
                        value: function(t) {
                            this.getScope().setExtras(t)
                        }
                    }, {
                        key: "setTag",
                        value: function(t, e) {
                            this.getScope().setTag(t, e)
                        }
                    }, {
                        key: "setExtra",
                        value: function(t, e) {
                            this.getScope().setExtra(t, e)
                        }
                    }, {
                        key: "setContext",
                        value: function(t, e) {
                            this.getScope().setContext(t, e)
                        }
                    }, {
                        key: "configureScope",
                        value: function(t) {
                            var e = this.getStackTop(),
                                n = e.scope;
                            e.client && t(n)
                        }
                    }, {
                        key: "run",
                        value: function(t) {
                            var e = _(this);
                            try {
                                t(this)
                            } finally {
                                _(e)
                            }
                        }
                    }, {
                        key: "getIntegration",
                        value: function(t) {
                            var e = this.getClient();
                            if (!e) return null;
                            try {
                                return e.getIntegration(t)
                            } catch (e) {
                                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.warn("Cannot retrieve integration ".concat(t.id, " from the current Hub")), null
                            }
                        }
                    }, {
                        key: "startTransaction",
                        value: function(t, e) {
                            var n = this._callExtensionMethod("startTransaction", t, e);
                            return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && !n && console.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n"), n
                        }
                    }, {
                        key: "traceHeaders",
                        value: function() {
                            return this._callExtensionMethod("traceHeaders")
                        }
                    }, {
                        key: "captureSession",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (t) return this.endSession();
                            this._sendSessionUpdate()
                        }
                    }, {
                        key: "endSession",
                        value: function() {
                            var t = this.getStackTop().scope,
                                e = t.getSession();
                            e && (0, l.closeSession)(e), this._sendSessionUpdate(), t.setSession()
                        }
                    }, {
                        key: "startSession",
                        value: function(t) {
                            var e = this.getStackTop(),
                                n = e.scope,
                                r = e.client,
                                i = r && r.getOptions() || {},
                                o = i.release,
                                c = i.environment,
                                d = void 0 === c ? u.DEFAULT_ENVIRONMENT : c,
                                f = (s.GLOBAL_OBJ.navigator || {}).userAgent,
                                _ = (0, l.makeSession)((0, a._)({
                                    release: o,
                                    environment: d,
                                    user: n.getUser()
                                }, f && {
                                    userAgent: f
                                }, t)),
                                p = n.getSession && n.getSession();
                            return p && "ok" === p.status && (0, l.updateSession)(p, {
                                status: "exited"
                            }), this.endSession(), n.setSession(_), _
                        }
                    }, {
                        key: "shouldSendDefaultPii",
                        value: function() {
                            var t = this.getClient(),
                                e = t && t.getOptions();
                            return !!(e && e.sendDefaultPii)
                        }
                    }, {
                        key: "_sendSessionUpdate",
                        value: function() {
                            var t = this.getStackTop(),
                                e = t.scope,
                                n = t.client,
                                r = e.getSession();
                            r && n && n.captureSession && n.captureSession(r)
                        }
                    }, {
                        key: "_withClient",
                        value: function(t) {
                            var e = this.getStackTop(),
                                n = e.scope,
                                r = e.client;
                            r && t(r, n)
                        }
                    }, {
                        key: "_callExtensionMethod",
                        value: function(t) {
                            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                            var i = f().__SENTRY__;
                            if (i && i.extensions && "function" == typeof i.extensions[t]) return i.extensions[t].apply(this, n);
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.warn("Extension method ".concat(t, " couldn't be found, doing nothing."))
                        }
                    }]), t
                }();

            function f() {
                return s.GLOBAL_OBJ.__SENTRY__ = s.GLOBAL_OBJ.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                }, s.GLOBAL_OBJ
            }

            function _(t) {
                var e = f(),
                    n = h(e);
                return v(e, t), n
            }

            function p() {
                var t = f();
                if (t.__SENTRY__ && t.__SENTRY__.acs) {
                    var e = t.__SENTRY__.acs.getCurrentHub();
                    if (e) return e
                }
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f();
                    return (! function(t) {
                        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
                    }(t) || h(t).isOlderThan(4)) && v(t, new d), h(t)
                }(t)
            }

            function h(t) {
                return (0, s.getGlobalSingleton)("hub", function() {
                    return new d
                }, t)
            }

            function v(t, e) {
                return !!t && ((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e, !0)
            }
        },
        91320: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BaseClient: function() {
                    return _.BaseClient
                },
                DEFAULT_ENVIRONMENT: function() {
                    return k.DEFAULT_ENVIRONMENT
                },
                FunctionToString: function() {
                    return T.FunctionToString
                },
                Hub: function() {
                    return l.Hub
                },
                InboundFilters: function() {
                    return x.InboundFilters
                },
                Integrations: function() {
                    return E
                },
                ModuleMetadata: function() {
                    return w.ModuleMetadata
                },
                SDK_VERSION: function() {
                    return g.SDK_VERSION
                },
                Scope: function() {
                    return d.Scope
                },
                TRACING_DEFAULTS: function() {
                    return i.TRACING_DEFAULTS
                },
                addBreadcrumb: function() {
                    return c.addBreadcrumb
                },
                addGlobalEventProcessor: function() {
                    return d.addGlobalEventProcessor
                },
                addTracingExtensions: function() {
                    return r.addTracingExtensions
                },
                captureEvent: function() {
                    return c.captureEvent
                },
                captureException: function() {
                    return c.captureException
                },
                captureMessage: function() {
                    return c.captureMessage
                },
                configureScope: function() {
                    return c.configureScope
                },
                createTransport: function() {
                    return h.createTransport
                },
                extractTraceparentData: function() {
                    return R.extractTraceparentData
                },
                getActiveTransaction: function() {
                    return o.getActiveTransaction
                },
                getCurrentHub: function() {
                    return l.getCurrentHub
                },
                getDynamicSamplingContextFromClient: function() {
                    return u.getDynamicSamplingContextFromClient
                },
                getHubFromCarrier: function() {
                    return l.getHubFromCarrier
                },
                getIntegrationsToSetup: function() {
                    return y.getIntegrationsToSetup
                },
                getReportDialogEndpoint: function() {
                    return f.getReportDialogEndpoint
                },
                hasTracingEnabled: function() {
                    return S.hasTracingEnabled
                },
                initAndBind: function() {
                    return p.initAndBind
                },
                makeMain: function() {
                    return l.makeMain
                },
                makeMultiplexedTransport: function() {
                    return m.makeMultiplexedTransport
                },
                makeOfflineTransport: function() {
                    return v.makeOfflineTransport
                },
                prepareEvent: function() {
                    return b.prepareEvent
                },
                setContext: function() {
                    return c.setContext
                },
                setExtra: function() {
                    return c.setExtra
                },
                setExtras: function() {
                    return c.setExtras
                },
                setTag: function() {
                    return c.setTag
                },
                setTags: function() {
                    return c.setTags
                },
                setUser: function() {
                    return c.setUser
                },
                spanStatusfromHttpCode: function() {
                    return a.spanStatusfromHttpCode
                },
                startIdleTransaction: function() {
                    return r.startIdleTransaction
                },
                startTransaction: function() {
                    return c.startTransaction
                },
                trace: function() {
                    return s.trace
                },
                withScope: function() {
                    return c.withScope
                }
            });
            var r = n("90668"),
                i = n("376097"),
                a = n("48950"),
                o = n("147816"),
                s = n("468174"),
                u = n("154405"),
                c = n("138122"),
                l = n("876122"),
                d = n("703498"),
                f = n("507506"),
                _ = n("861579"),
                p = n("110575"),
                h = n("347421"),
                v = n("499833"),
                m = n("449701"),
                g = n("139782"),
                y = n("595208"),
                E = n("89837"),
                b = n("392405"),
                S = n("633401"),
                k = n("28434"),
                w = n("333878"),
                T = n("740054"),
                x = n("344106"),
                R = n("648238")
        },
        595208: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getIntegrationsToSetup: function() {
                    return c
                },
                setupIntegration: function() {
                    return d
                },
                setupIntegrations: function() {
                    return l
                }
            });
            var r = n("154005"),
                i = n("761020");
            n("357629"), n("363505"), n("814951"), n("817285"), n("653041");
            var a = n("648238"),
                o = n("876122"),
                s = n("703498"),
                u = [];

            function c(t) {
                var e, n, o = t.defaultIntegrations || [],
                    s = t.integrations;
                o.forEach(function(t) {
                    t.isDefaultInstance = !0
                });
                var u = (e = {}, (n = Array.isArray(s) ? (0, i._)(o).concat((0, i._)(s)) : "function" == typeof s ? (0, a.arrayify)(s(o)) : o).forEach(function(t) {
                        var n = t.name,
                            r = e[n];
                        (!r || r.isDefaultInstance || !t.isDefaultInstance) && (e[n] = t)
                    }), Object.keys(e).map(function(t) {
                        return e[t]
                    })),
                    c = function(t, e) {
                        for (var n = 0; n < t.length; n++)
                            if (!0 === e(t[n])) return n;
                        return -1
                    }(u, function(t) {
                        return "Debug" === t.name
                    });
                if (-1 !== c) {
                    var l = (0, r._)(u.splice(c, 1), 1)[0];
                    u.push(l)
                }
                return u
            }

            function l(t) {
                var e = {};
                return t.forEach(function(t) {
                    t && d(t, e)
                }), e
            }

            function d(t, e) {
                e[t.name] = t, -1 === u.indexOf(t.name) && (t.setupOnce(s.addGlobalEventProcessor, o.getCurrentHub), u.push(t.name), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.log("Integration installed: ".concat(t.name)))
            }
        },
        740054: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                FunctionToString: function() {
                    return s
                }
            });
            var r, i = n("87627"),
                a = n("200344");
            n("357629"), n("293114");
            var o = n("648238"),
                s = function() {
                    function t() {
                        (0, i._)(this, t), t.prototype.__init.call(this)
                    }
                    return (0, a._)(t, [{
                        key: "__init",
                        value: function() {
                            this.name = t.id
                        }
                    }, {
                        key: "setupOnce",
                        value: function() {
                            r = Function.prototype.toString;
                            try {
                                Function.prototype.toString = function() {
                                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                                    var i = (0, o.getOriginalFunction)(this) || this;
                                    return r.apply(i, e)
                                }
                            } catch (t) {}
                        }
                    }], [{
                        key: "__initStatic",
                        value: function() {
                            this.id = "FunctionToString"
                        }
                    }]), t
                }();
            s.__initStatic()
        },
        344106: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                InboundFilters: function() {
                    return c
                }
            });
            var r = n("87627"),
                i = n("200344"),
                a = n("761020");
            n("312677"), n("814951"), n("357629"), n("996173"), n("47120");
            var o = n("648238"),
                s = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
                u = [/^.*healthcheck.*$/, /^.*healthy.*$/, /^.*live.*$/, /^.*ready.*$/, /^.*heartbeat.*$/, /^.*\/health$/, /^.*\/healthz$/],
                c = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        (0, r._)(this, t), this._options = e, t.prototype.__init.call(this)
                    }
                    return (0, i._)(t, [{
                        key: "__init",
                        value: function() {
                            this.name = t.id
                        }
                    }, {
                        key: "setupOnce",
                        value: function(e, n) {
                            var r = function(e) {
                                var r = n();
                                if (r) {
                                    var i = r.getIntegration(t);
                                    if (i) {
                                        var c = r.getClient(),
                                            d = c ? c.getOptions() : {};
                                        return function(t, e) {
                                            return e.ignoreInternal && function(t) {
                                                try {
                                                    return "SentryError" === t.exception.values[0].type
                                                } catch (t) {}
                                                return !1
                                            }(t) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.warn("Event dropped due to being internal Sentry Error.\nEvent: ".concat((0, o.getEventDescription)(t))), !0) : function(t, e) {
                                                return !t.type && !!e && !!e.length && (function(t) {
                                                    if (t.message) return [t.message];
                                                    if (t.exception) {
                                                        var e = t.exception.values;
                                                        try {
                                                            var n = e && e[e.length - 1] || {},
                                                                r = n.type,
                                                                i = n.value,
                                                                a = void 0 === i ? "" : i;
                                                            return ["".concat(a), "".concat(void 0 === r ? "" : r, ": ").concat(a)]
                                                        } catch (e) {
                                                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.error("Cannot extract message for event ".concat((0, o.getEventDescription)(t)))
                                                        }
                                                    }
                                                    return []
                                                })(t).some(function(t) {
                                                    return (0, o.stringMatchesSomePattern)(t, e)
                                                })
                                            }(t, e.ignoreErrors) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: ".concat((0, o.getEventDescription)(t))), !0) : function(t, e) {
                                                if ("transaction" !== t.type || !e || !e.length) return !1;
                                                var n = t.transaction;
                                                return !!n && (0, o.stringMatchesSomePattern)(n, e)
                                            }(t, e.ignoreTransactions) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.warn("Event dropped due to being matched by `ignoreTransactions` option.\nEvent: ".concat((0, o.getEventDescription)(t))), !0) : function(t, e) {
                                                if (!e || !e.length) return !1;
                                                var n = l(t);
                                                return !!n && (0, o.stringMatchesSomePattern)(n, e)
                                            }(t, e.denyUrls) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: ".concat((0, o.getEventDescription)(t), ".\nUrl: ").concat(l(t))), !0) : ! function(t, e) {
                                                if (!e || !e.length) return !0;
                                                var n = l(t);
                                                return !n || (0, o.stringMatchesSomePattern)(n, e)
                                            }(t, e.allowUrls) && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: ".concat((0, o.getEventDescription)(t), ".\nUrl: ").concat(l(t))), !0)
                                        }(e, function() {
                                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            return {
                                                allowUrls: (0, a._)(t.allowUrls || []).concat((0, a._)(e.allowUrls || [])),
                                                denyUrls: (0, a._)(t.denyUrls || []).concat((0, a._)(e.denyUrls || [])),
                                                ignoreErrors: (0, a._)(t.ignoreErrors || []).concat((0, a._)(e.ignoreErrors || []), (0, a._)(t.disableErrorDefaults ? [] : s)),
                                                ignoreTransactions: (0, a._)(t.ignoreTransactions || []).concat((0, a._)(e.ignoreTransactions || []), (0, a._)(t.disableTransactionDefaults ? [] : u)),
                                                ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
                                            }
                                        }(i._options, d)) ? null : e
                                    }
                                }
                                return e
                            };
                            r.id = this.name, e(r)
                        }
                    }], [{
                        key: "__initStatic",
                        value: function() {
                            this.id = "InboundFilters"
                        }
                    }]), t
                }();
            c.__initStatic();

            function l(t) {
                try {
                    var e;
                    try {
                        e = t.exception.values[0].stacktrace.frames
                    } catch (t) {}
                    return e ? function() {
                        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = t.length - 1; e >= 0; e--) {
                            var n = t[e];
                            if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
                        }
                        return null
                    }(e) : null
                } catch (e) {
                    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.error("Cannot extract url for event ".concat((0, o.getEventDescription)(t))), null
                }
            }
        },
        89837: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                FunctionToString: function() {
                    return r.FunctionToString
                },
                InboundFilters: function() {
                    return i.InboundFilters
                }
            });
            var r = n("740054"),
                i = n("344106")
        },
        333878: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ModuleMetadata: function() {
                    return s
                }
            });
            var r = n("87627"),
                i = n("200344"),
                a = n("648238"),
                o = n("274484"),
                s = function() {
                    function t() {
                        (0, r._)(this, t), t.prototype.__init.call(this)
                    }
                    return (0, i._)(t, [{
                        key: "__init",
                        value: function() {
                            this.name = t.id
                        }
                    }, {
                        key: "setupOnce",
                        value: function(t, e) {
                            var n = e().getClient();
                            if (n && "function" == typeof n.on) {
                                n.on("beforeEnvelope", function(t) {
                                    (0, a.forEachEnvelopeItem)(t, function(t, e) {
                                        if ("event" === e) {
                                            var n = Array.isArray(t) ? t[1] : void 0;
                                            n && ((0, o.stripMetadataFromStackFrames)(n), t[1] = n)
                                        }
                                    })
                                });
                                var r = n.getOptions().stackParser;
                                t(function(t) {
                                    return (0, o.addMetadataToStackFrames)(r, t), t
                                })
                            }
                        }
                    }], [{
                        key: "__initStatic",
                        value: function() {
                            this.id = "ModuleMetadata"
                        }
                    }]), t
                }();
            s.__initStatic()
        },
        274484: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                addMetadataToStackFrames: function() {
                    return o
                },
                stripMetadataFromStackFrames: function() {
                    return s
                }
            }), n("573788"), n("996173"), n("47120"), n("357629"), n("330740"), n("633702"), n("266796"), n("978209");
            var r = n("648238"),
                i = new Map,
                a = new Set;

            function o(t, e) {
                try {
                    e.exception.values.forEach(function(e) {
                        if (e.stacktrace) {
                            var n = !0,
                                o = !1,
                                s = void 0;
                            try {
                                for (var u, c = (e.stacktrace.frames || [])[Symbol.iterator](); !(n = (u = c.next()).done); n = !0) {
                                    var l = u.value;
                                    if (l.filename) {
                                        var d, f, _ = (d = t, f = l.filename, ! function(t) {
                                            if (r.GLOBAL_OBJ._sentryModuleMetadata) {
                                                var e = !0,
                                                    n = !1,
                                                    o = void 0;
                                                try {
                                                    for (var s, u = Object.keys(r.GLOBAL_OBJ._sentryModuleMetadata)[Symbol.iterator](); !(e = (s = u.next()).done); e = !0) {
                                                        var c = s.value,
                                                            l = r.GLOBAL_OBJ._sentryModuleMetadata[c];
                                                        if (!a.has(c)) {
                                                            a.add(c);
                                                            var d = t(c),
                                                                f = !0,
                                                                _ = !1,
                                                                p = void 0;
                                                            try {
                                                                for (var h, v = d.reverse()[Symbol.iterator](); !(f = (h = v.next()).done); f = !0) {
                                                                    var m = h.value;
                                                                    if (m.filename) {
                                                                        i.set(m.filename, l);
                                                                        break
                                                                    }
                                                                }
                                                            } catch (t) {
                                                                _ = !0, p = t
                                                            } finally {
                                                                try {
                                                                    !f && null != v.return && v.return()
                                                                } finally {
                                                                    if (_) throw p
                                                                }
                                                            }
                                                        }
                                                    }
                                                } catch (t) {
                                                    n = !0, o = t
                                                } finally {
                                                    try {
                                                        !e && null != u.return && u.return()
                                                    } finally {
                                                        if (n) throw o
                                                    }
                                                }
                                            }
                                        }(d), i.get(f));
                                        _ && (l.module_metadata = _)
                                    }
                                }
                            } catch (t) {
                                o = !0, s = t
                            } finally {
                                try {
                                    !n && null != c.return && c.return()
                                } finally {
                                    if (o) throw s
                                }
                            }
                        }
                    })
                } catch (t) {}
            }

            function s(t) {
                try {
                    t.exception.values.forEach(function(t) {
                        if (t.stacktrace) {
                            var e = !0,
                                n = !1,
                                r = void 0;
                            try {
                                for (var i, a = (t.stacktrace.frames || [])[Symbol.iterator](); !(e = (i = a.next()).done); e = !0) {
                                    var o = i.value;
                                    delete o.module_metadata
                                }
                            } catch (t) {
                                n = !0, r = t
                            } finally {
                                try {
                                    !e && null != a.return && a.return()
                                } finally {
                                    if (n) throw r
                                }
                            }
                        }
                    })
                } catch (t) {}
            }
        },
        703498: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Scope: function() {
                    return l
                },
                addGlobalEventProcessor: function() {
                    return f
                }
            });
            var r = n("87627"),
                i = n("200344"),
                a = n("21189"),
                o = n("227094"),
                s = n("761020");
            n("653041"), n("814951"), n("849202"), n("357629");
            var u = n("648238"),
                c = n("741900"),
                l = function() {
                    function t() {
                        (0, r._)(this, t), this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = _()
                    }
                    return (0, i._)(t, [{
                        key: "addScopeListener",
                        value: function(t) {
                            this._scopeListeners.push(t)
                        }
                    }, {
                        key: "addEventProcessor",
                        value: function(t) {
                            return this._eventProcessors.push(t), this
                        }
                    }, {
                        key: "setUser",
                        value: function(t) {
                            return this._user = t || {}, this._session && (0, c.updateSession)(this._session, {
                                user: t
                            }), this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "getUser",
                        value: function() {
                            return this._user
                        }
                    }, {
                        key: "getRequestSession",
                        value: function() {
                            return this._requestSession
                        }
                    }, {
                        key: "setRequestSession",
                        value: function(t) {
                            return this._requestSession = t, this
                        }
                    }, {
                        key: "setTags",
                        value: function(t) {
                            return this._tags = (0, a._)({}, this._tags, t), this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "setTag",
                        value: function(t, e) {
                            return this._tags = (0, o._)((0, a._)({}, this._tags), {
                                [t]: e
                            }), this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "setExtras",
                        value: function(t) {
                            return this._extra = (0, a._)({}, this._extra, t), this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "setExtra",
                        value: function(t, e) {
                            return this._extra = (0, o._)((0, a._)({}, this._extra), {
                                [t]: e
                            }), this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "setFingerprint",
                        value: function(t) {
                            return this._fingerprint = t, this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "setLevel",
                        value: function(t) {
                            return this._level = t, this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "setTransactionName",
                        value: function(t) {
                            return this._transactionName = t, this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "setContext",
                        value: function(t, e) {
                            return null === e ? delete this._contexts[t] : this._contexts[t] = e, this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "setSpan",
                        value: function(t) {
                            return this._span = t, this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "getSpan",
                        value: function() {
                            return this._span
                        }
                    }, {
                        key: "getTransaction",
                        value: function() {
                            var t = this.getSpan();
                            return t && t.transaction
                        }
                    }, {
                        key: "setSession",
                        value: function(t) {
                            return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "getSession",
                        value: function() {
                            return this._session
                        }
                    }, {
                        key: "update",
                        value: function(e) {
                            if (!e) return this;
                            if ("function" == typeof e) {
                                var n = e(this);
                                return n instanceof t ? n : this
                            }
                            return e instanceof t ? (this._tags = (0, a._)({}, this._tags, e._tags), this._extra = (0, a._)({}, this._extra, e._extra), this._contexts = (0, a._)({}, this._contexts, e._contexts), e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession), e._propagationContext && (this._propagationContext = e._propagationContext)) : (0, u.isPlainObject)(e) && (this._tags = (0, a._)({}, this._tags, e.tags), this._extra = (0, a._)({}, this._extra, e.extra), this._contexts = (0, a._)({}, this._contexts, e.contexts), e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession), e.propagationContext && (this._propagationContext = e.propagationContext)), this
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = _(), this
                        }
                    }, {
                        key: "addBreadcrumb",
                        value: function(t, e) {
                            var n = "number" == typeof e ? e : 100;
                            if (n <= 0) return this;
                            var r = (0, a._)({
                                timestamp: (0, u.dateTimestampInSeconds)()
                            }, t);
                            return this._breadcrumbs = (0, s._)(this._breadcrumbs).concat([r]).slice(-n), this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "getLastBreadcrumb",
                        value: function() {
                            return this._breadcrumbs[this._breadcrumbs.length - 1]
                        }
                    }, {
                        key: "clearBreadcrumbs",
                        value: function() {
                            return this._breadcrumbs = [], this._notifyScopeListeners(), this
                        }
                    }, {
                        key: "addAttachment",
                        value: function(t) {
                            return this._attachments.push(t), this
                        }
                    }, {
                        key: "getAttachments",
                        value: function() {
                            return this._attachments
                        }
                    }, {
                        key: "clearAttachments",
                        value: function() {
                            return this._attachments = [], this
                        }
                    }, {
                        key: "applyToEvent",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (this._extra && Object.keys(this._extra).length && (t.extra = (0, a._)({}, this._extra, t.extra)), this._tags && Object.keys(this._tags).length && (t.tags = (0, a._)({}, this._tags, t.tags)), this._user && Object.keys(this._user).length && (t.user = (0, a._)({}, this._user, t.user)), this._contexts && Object.keys(this._contexts).length && (t.contexts = (0, a._)({}, this._contexts, t.contexts)), this._level && (t.level = this._level), this._transactionName && (t.transaction = this._transactionName), this._span) {
                                t.contexts = (0, a._)({
                                    trace: this._span.getTraceContext()
                                }, t.contexts);
                                var n = this._span.transaction;
                                if (n) {
                                    t.sdkProcessingMetadata = (0, a._)({
                                        dynamicSamplingContext: n.getDynamicSamplingContext()
                                    }, t.sdkProcessingMetadata);
                                    var r = n.name;
                                    r && (t.tags = (0, a._)({
                                        transaction: r
                                    }, t.tags))
                                }
                            }
                            return this._applyFingerprint(t), t.breadcrumbs = (0, s._)(t.breadcrumbs || []).concat((0, s._)(this._breadcrumbs)), t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, t.sdkProcessingMetadata = (0, o._)((0, a._)({}, t.sdkProcessingMetadata, this._sdkProcessingMetadata), {
                                propagationContext: this._propagationContext
                            }), this._notifyEventProcessors((0, s._)(d()).concat((0, s._)(this._eventProcessors)), t, e)
                        }
                    }, {
                        key: "setSDKProcessingMetadata",
                        value: function(t) {
                            return this._sdkProcessingMetadata = (0, a._)({}, this._sdkProcessingMetadata, t), this
                        }
                    }, {
                        key: "setPropagationContext",
                        value: function(t) {
                            return this._propagationContext = t, this
                        }
                    }, {
                        key: "getPropagationContext",
                        value: function() {
                            return this._propagationContext
                        }
                    }, {
                        key: "_notifyEventProcessors",
                        value: function(t, e, n) {
                            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                i = this;
                            return new u.SyncPromise(function(o, s) {
                                var c = t[r];
                                if (null === e || "function" != typeof c) o(e);
                                else {
                                    var l = c((0, a._)({}, e), n);
                                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.id && null === l && u.logger.log('Event processor "'.concat(c.id, '" dropped event')), (0, u.isThenable)(l) ? l.then(function(e) {
                                        return i._notifyEventProcessors(t, e, n, r + 1).then(o)
                                    }).then(null, s) : i._notifyEventProcessors(t, l, n, r + 1).then(o).then(null, s)
                                }
                            })
                        }
                    }, {
                        key: "_notifyScopeListeners",
                        value: function() {
                            var t = this;
                            !this._notifyingListeners && (this._notifyingListeners = !0, this._scopeListeners.forEach(function(e) {
                                e(t)
                            }), this._notifyingListeners = !1)
                        }
                    }, {
                        key: "_applyFingerprint",
                        value: function(t) {
                            t.fingerprint = t.fingerprint ? (0, u.arrayify)(t.fingerprint) : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
                        }
                    }], [{
                        key: "clone",
                        value: function(e) {
                            var n = new t;
                            return e && (n._breadcrumbs = (0, s._)(e._breadcrumbs), n._tags = (0, a._)({}, e._tags), n._extra = (0, a._)({}, e._extra), n._contexts = (0, a._)({}, e._contexts), n._user = e._user, n._level = e._level, n._span = e._span, n._session = e._session, n._transactionName = e._transactionName, n._fingerprint = e._fingerprint, n._eventProcessors = (0, s._)(e._eventProcessors), n._requestSession = e._requestSession, n._attachments = (0, s._)(e._attachments), n._sdkProcessingMetadata = (0, a._)({}, e._sdkProcessingMetadata), n._propagationContext = (0, a._)({}, e._propagationContext)), n
                        }
                    }]), t
                }();

            function d() {
                return (0, u.getGlobalSingleton)("globalEventProcessors", function() {
                    return []
                })
            }

            function f(t) {
                d().push(t)
            }

            function _() {
                return {
                    traceId: (0, u.uuid4)(),
                    spanId: (0, u.uuid4)().substring(16),
                    sampled: !1
                }
            }
        },
        110575: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                initAndBind: function() {
                    return a
                }
            });
            var r = n("648238"),
                i = n("876122");

            function a(t, e) {
                !0 === e.debug && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? r.logger.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
                var n = (0, i.getCurrentHub)();
                n.getScope().update(e.initialScope);
                var a = new t(e);
                n.bindClient(a)
            }
        },
        741900: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                closeSession: function() {
                    return o
                },
                makeSession: function() {
                    return i
                },
                updateSession: function() {
                    return a
                }
            }), n("814951");
            var r = n("648238");

            function i(t) {
                var e = (0, r.timestampInSeconds)(),
                    n = {
                        sid: (0, r.uuid4)(),
                        init: !0,
                        timestamp: e,
                        started: e,
                        duration: 0,
                        status: "ok",
                        errors: 0,
                        ignoreDuration: !1,
                        toJSON: function() {
                            return function(t) {
                                return (0, r.dropUndefinedKeys)({
                                    sid: "".concat(t.sid),
                                    init: t.init,
                                    started: new Date(1e3 * t.started).toISOString(),
                                    timestamp: new Date(1e3 * t.timestamp).toISOString(),
                                    status: t.status,
                                    errors: t.errors,
                                    did: "number" == typeof t.did || "string" == typeof t.did ? "".concat(t.did) : void 0,
                                    duration: t.duration,
                                    attrs: {
                                        release: t.release,
                                        environment: t.environment,
                                        ip_address: t.ipAddress,
                                        user_agent: t.userAgent
                                    }
                                })
                            }(n)
                        }
                    };
                return t && a(n, t), n
            }

            function a(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || (0, r.timestampInSeconds)(), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0, r.uuid4)()), void 0 !== e.init && (t.init = e.init), !t.did && e.did && (t.did = "".concat(e.did)), "number" == typeof e.started && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
                else if ("number" == typeof e.duration) t.duration = e.duration;
                else {
                    var n = t.timestamp - t.started;
                    t.duration = n >= 0 ? n : 0
                }
                e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), "number" == typeof e.errors && (t.errors = e.errors), e.status && (t.status = e.status)
            }

            function o(t, e) {
                var n = {};
                e ? n = {
                    status: e
                } : "ok" === t.status && (n = {
                    status: "exited"
                }), a(t, n)
            }
        },
        154405: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getDynamicSamplingContextFromClient: function() {
                    return a
                }
            });
            var r = n("648238"),
                i = n("28434");

            function a(t, e, n) {
                var a = e.getOptions(),
                    o = (e.getDsn() || {}).publicKey,
                    s = (n && n.getUser() || {}).segment,
                    u = (0, r.dropUndefinedKeys)({
                        environment: a.environment || i.DEFAULT_ENVIRONMENT,
                        release: a.release,
                        user_segment: s,
                        public_key: o,
                        trace_id: t
                    });
                return e.emit && e.emit("createDsc", u), u
            }
        },
        750513: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                registerErrorInstrumentation: function() {
                    return o
                }
            }), n("814951");
            var r = n("648238"),
                i = n("147816"),
                a = !1;

            function o() {
                !a && (a = !0, (0, r.addInstrumentationHandler)("error", s), (0, r.addInstrumentationHandler)("unhandledrejection", s))
            }

            function s() {
                var t = (0, i.getActiveTransaction)();
                if (t) {
                    var e = "internal_error";
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] Transaction: ".concat(e, " -> Global error occured")), t.setStatus(e)
                }
            }
            s.tag = "sentry_tracingErrorCallback"
        },
        90668: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                addTracingExtensions: function() {
                    return p
                },
                startIdleTransaction: function() {
                    return _
                }
            });
            var r = n("21189");
            n("814951"), n("26686");
            var i = n("648238"),
                a = n("876122"),
                o = n("633401"),
                s = n("750513"),
                u = n("376097"),
                c = n("912033");

            function l() {
                var t = this.getScope().getSpan();
                return t ? {
                    "sentry-trace": t.toTraceparent()
                } : {}
            }

            function d(t, e, n) {
                var r;
                return (0, o.hasTracingEnabled)(e) ? void 0 !== t.sampled ? (t.setMetadata({
                    sampleRate: Number(t.sampled)
                }), t) : ("function" == typeof e.tracesSampler ? (r = e.tracesSampler(n), t.setMetadata({
                    sampleRate: Number(r)
                })) : void 0 !== n.parentSampled ? r = n.parentSampled : void 0 !== e.tracesSampleRate ? (r = e.tracesSampleRate, t.setMetadata({
                    sampleRate: Number(r)
                })) : (r = 1, t.setMetadata({
                    sampleRate: r
                })), ! function(t) {
                    return (0, i.isNaN)(t) || !("number" == typeof t || "boolean" == typeof t) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ".concat(JSON.stringify(t), " of type ").concat(JSON.stringify(typeof t), ".")), !1) : !(t < 0) && !(t > 1) || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ".concat(t, ".")), !1)
                }(r)) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("[Tracing] Discarding transaction because of invalid sample rate."), t.sampled = !1, t) : r ? (t.sampled = Math.random() < r, t.sampled) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Tracing] starting ".concat(t.op, " transaction - ").concat(t.name)), t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ".concat(Number(r), ")")), t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Tracing] Discarding transaction because ".concat("function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), t.sampled = !1, t) : (t.sampled = !1, t)
            }

            function f(t, e) {
                var n = this.getClient(),
                    a = n && n.getOptions() || {},
                    o = a.instrumenter || "sentry",
                    s = t.instrumenter || "sentry";
                o !== s && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.error("A transaction was started with instrumenter=`".concat(s, "`, but the SDK is configured with the `").concat(o, "` instrumenter.\nThe transaction will not be sampled. Please use the ").concat(o, " instrumentation to start transactions.")), t.sampled = !1);
                var u = new c.Transaction(t, this);
                return (u = d(u, a, (0, r._)({
                    parentSampled: t.parentSampled,
                    transactionContext: t
                }, e))).sampled && u.initSpanRecorder(a._experiments && a._experiments.maxSpans), n && n.emit && n.emit("startTransaction", u), u
            }

            function _(t, e, n, i, a, o, s) {
                var c = t.getClient(),
                    l = c && c.getOptions() || {},
                    f = new u.IdleTransaction(e, t, n, i, s, a);
                return (f = d(f, l, (0, r._)({
                    parentSampled: e.parentSampled,
                    transactionContext: e
                }, o))).sampled && f.initSpanRecorder(l._experiments && l._experiments.maxSpans), c && c.emit && c.emit("startTransaction", f), f
            }

            function p() {
                var t = (0, a.getMainCarrier)();
                t.__SENTRY__ && (t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}, !t.__SENTRY__.extensions.startTransaction && (t.__SENTRY__.extensions.startTransaction = f), !t.__SENTRY__.extensions.traceHeaders && (t.__SENTRY__.extensions.traceHeaders = l), (0, s.registerErrorInstrumentation)())
            }
        },
        376097: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                IdleTransaction: function() {
                    return v
                },
                TRACING_DEFAULTS: function() {
                    return _
                }
            });
            var r = n("187986"),
                i = n("87627"),
                a = n("200344"),
                o = n("54423"),
                s = n("416076"),
                u = n("29713"),
                c = n("778455");
            n("814951"), n("633702"), n("266796"), n("357629"), n("996173"), n("47120"), n("462848"), n("26686"), n("653041");
            var l = n("648238"),
                d = n("48950"),
                f = n("912033"),
                _ = {
                    idleTimeout: 1e3,
                    finalTimeout: 3e4,
                    heartbeatInterval: 5e3
                },
                p = ["heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled"],
                h = function(t) {
                    (0, u._)(n, t);
                    var e = (0, c._)(n);

                    function n(t, r, a, o) {
                        var s;
                        return (0, i._)(this, n), (s = e.call(this, o))._pushActivity = t, s._popActivity = r, s.transactionSpanId = a, s
                    }
                    return (0, a._)(n, [{
                        key: "add",
                        value: function(t) {
                            var e = this;
                            t.spanId !== this.transactionSpanId && (t.finish = function(n) {
                                t.endTimestamp = "number" == typeof n ? n : (0, l.timestampInSeconds)(), e._popActivity(t.spanId)
                            }, void 0 === t.endTimestamp && this._pushActivity(t.spanId)), (0, o._)((0, s._)(n.prototype), "add", this).call(this, t)
                        }
                    }]), n
                }(d.SpanRecorder),
                v = function(t) {
                    (0, u._)(n, t);
                    var e = (0, c._)(n);

                    function n(t, a) {
                        var o, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.idleTimeout,
                            u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _.finalTimeout,
                            c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : _.heartbeatInterval,
                            d = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                        return (0, i._)(this, n), (o = e.call(this, t, a))._idleHub = a, o._idleTimeout = s, o._finalTimeout = u, o._heartbeatInterval = c, o._onScope = d, n.prototype.__init.call((0, r._)(o)), n.prototype.__init2.call((0, r._)(o)), n.prototype.__init3.call((0, r._)(o)), n.prototype.__init4.call((0, r._)(o)), n.prototype.__init5.call((0, r._)(o)), n.prototype.__init6.call((0, r._)(o)), d && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && l.logger.log("Setting idle transaction on scope. Span ID: ".concat(o.spanId)), a.configureScope(function(t) {
                            return t.setSpan((0, r._)(o))
                        })), o._restartIdleTimeout(), setTimeout(function() {
                            !o._finished && (o.setStatus("deadline_exceeded"), o._finishReason = "finalTimeout", o.finish())
                        }, o._finalTimeout), o
                    }
                    return (0, a._)(n, [{
                        key: "__init",
                        value: function() {
                            this.activities = {}
                        }
                    }, {
                        key: "__init2",
                        value: function() {
                            this._heartbeatCounter = 0
                        }
                    }, {
                        key: "__init3",
                        value: function() {
                            this._finished = !1
                        }
                    }, {
                        key: "__init4",
                        value: function() {
                            this._idleTimeoutCanceledPermanently = !1
                        }
                    }, {
                        key: "__init5",
                        value: function() {
                            this._beforeFinishCallbacks = []
                        }
                    }, {
                        key: "__init6",
                        value: function() {
                            this._finishReason = "externalFinish"
                        }
                    }, {
                        key: "finish",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.timestampInSeconds)(),
                                e = this;
                            if (this._finished = !0, this.activities = {}, "ui.action.click" === this.op && this.setTag("finishReason", this._finishReason), this.spanRecorder) {
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && l.logger.log("[Tracing] finishing IdleTransaction", new Date(1e3 * t).toISOString(), this.op);
                                var r = !0,
                                    i = !1,
                                    a = void 0;
                                try {
                                    for (var u, c = this._beforeFinishCallbacks[Symbol.iterator](); !(r = (u = c.next()).done); r = !0)(0, u.value)(this, t)
                                } catch (t) {
                                    i = !0, a = t
                                } finally {
                                    try {
                                        !r && null != c.return && c.return()
                                    } finally {
                                        if (i) throw a
                                    }
                                }
                                this.spanRecorder.spans = this.spanRecorder.spans.filter(function(n) {
                                    if (n.spanId === e.spanId) return !0;
                                    !n.endTimestamp && (n.endTimestamp = t, n.setStatus("cancelled"), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && l.logger.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(n, void 0, 2)));
                                    var r = n.startTimestamp < t;
                                    return !r && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && l.logger.log("[Tracing] discarding Span since it happened after Transaction was finished", JSON.stringify(n, void 0, 2)), r
                                }), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && l.logger.log("[Tracing] flushing IdleTransaction")
                            } else("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && l.logger.log("[Tracing] No active IdleTransaction");
                            if (this._onScope) {
                                var d = this._idleHub.getScope();
                                d.getTransaction() === this && d.setSpan(void 0)
                            }
                            return (0, o._)((0, s._)(n.prototype), "finish", this).call(this, t)
                        }
                    }, {
                        key: "registerBeforeFinishCallback",
                        value: function(t) {
                            this._beforeFinishCallbacks.push(t)
                        }
                    }, {
                        key: "initSpanRecorder",
                        value: function(t) {
                            var e = this;
                            !this.spanRecorder && (this.spanRecorder = new h(function(t) {
                                !e._finished && e._pushActivity(t)
                            }, function(t) {
                                !e._finished && e._popActivity(t)
                            }, this.spanId, t), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && l.logger.log("Starting heartbeat"), this._pingHeartbeat()), this.spanRecorder.add(this)
                        }
                    }, {
                        key: "cancelIdleTimeout",
                        value: function(t) {
                            var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                restartOnChildSpanChange: !0
                            }).restartOnChildSpanChange;
                            this._idleTimeoutCanceledPermanently = !1 === e, this._idleTimeoutID && (clearTimeout(this._idleTimeoutID), this._idleTimeoutID = void 0, 0 === Object.keys(this.activities).length && this._idleTimeoutCanceledPermanently && (this._finishReason = "cancelled", this.finish(t)))
                        }
                    }, {
                        key: "setFinishReason",
                        value: function(t) {
                            this._finishReason = t
                        }
                    }, {
                        key: "_restartIdleTimeout",
                        value: function(t) {
                            var e = this;
                            this.cancelIdleTimeout(), this._idleTimeoutID = setTimeout(function() {
                                !e._finished && 0 === Object.keys(e.activities).length && (e._finishReason = "idleTimeout", e.finish(t))
                            }, this._idleTimeout)
                        }
                    }, {
                        key: "_pushActivity",
                        value: function(t) {
                            this.cancelIdleTimeout(void 0, {
                                restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently
                            }), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && l.logger.log("[Tracing] pushActivity: ".concat(t)), this.activities[t] = !0, ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && l.logger.log("[Tracing] new activities count", Object.keys(this.activities).length)
                        }
                    }, {
                        key: "_popActivity",
                        value: function(t) {
                            if (this.activities[t] && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && l.logger.log("[Tracing] popActivity ".concat(t)), delete this.activities[t], ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && l.logger.log("[Tracing] new activities count", Object.keys(this.activities).length)), 0 === Object.keys(this.activities).length) {
                                var e = (0, l.timestampInSeconds)();
                                this._idleTimeoutCanceledPermanently ? (this._finishReason = "cancelled", this.finish(e)) : this._restartIdleTimeout(e + this._idleTimeout / 1e3)
                            }
                        }
                    }, {
                        key: "_beat",
                        value: function() {
                            if (!this._finished) {
                                var t = Object.keys(this.activities).join("");
                                t === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1, this._prevHeartbeatString = t, this._heartbeatCounter >= 3 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && l.logger.log("[Tracing] Transaction finished because of no change for 3 heart beats"), this.setStatus("deadline_exceeded"), this._finishReason = "heartbeatFailed", this.finish()) : this._pingHeartbeat()
                            }
                        }
                    }, {
                        key: "_pingHeartbeat",
                        value: function() {
                            var t = this;
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && l.logger.log("pinging Heartbeat -> current counter: ".concat(this._heartbeatCounter)), setTimeout(function() {
                                t._beat()
                            }, this._heartbeatInterval)
                        }
                    }]), n
                }(f.Transaction)
        },
        48950: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Span: function() {
                    return c
                },
                SpanRecorder: function() {
                    return u
                },
                spanStatusfromHttpCode: function() {
                    return l
                }
            });
            var r = n("87627"),
                i = n("200344"),
                a = n("21189"),
                o = n("227094");
            n("653041"), n("633702"), n("266796"), n("814951"), n("757143"), n("301563");
            var s = n("648238"),
                u = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
                        (0, r._)(this, t), t.prototype.__init.call(this), this._maxlen = e
                    }
                    return (0, i._)(t, [{
                        key: "__init",
                        value: function() {
                            this.spans = []
                        }
                    }, {
                        key: "add",
                        value: function(t) {
                            this.spans.length > this._maxlen ? t.spanRecorder = void 0 : this.spans.push(t)
                        }
                    }]), t
                }(),
                c = function() {
                    function t(e) {
                        if ((0, r._)(this, t), t.prototype.__init2.call(this), t.prototype.__init3.call(this), t.prototype.__init4.call(this), t.prototype.__init5.call(this), t.prototype.__init6.call(this), t.prototype.__init7.call(this), !e) return this;
                        e.traceId && (this.traceId = e.traceId), e.spanId && (this.spanId = e.spanId), e.parentSpanId && (this.parentSpanId = e.parentSpanId), "sampled" in e && (this.sampled = e.sampled), e.op && (this.op = e.op), e.description && (this.description = e.description), e.data && (this.data = e.data), e.tags && (this.tags = e.tags), e.status && (this.status = e.status), e.startTimestamp && (this.startTimestamp = e.startTimestamp), e.endTimestamp && (this.endTimestamp = e.endTimestamp), e.instrumenter && (this.instrumenter = e.instrumenter)
                    }
                    return (0, i._)(t, [{
                        key: "__init2",
                        value: function() {
                            this.traceId = (0, s.uuid4)()
                        }
                    }, {
                        key: "__init3",
                        value: function() {
                            this.spanId = (0, s.uuid4)().substring(16)
                        }
                    }, {
                        key: "__init4",
                        value: function() {
                            this.startTimestamp = (0, s.timestampInSeconds)()
                        }
                    }, {
                        key: "__init5",
                        value: function() {
                            this.tags = {}
                        }
                    }, {
                        key: "__init6",
                        value: function() {
                            this.data = {}
                        }
                    }, {
                        key: "__init7",
                        value: function() {
                            this.instrumenter = "sentry"
                        }
                    }, {
                        key: "startChild",
                        value: function(e) {
                            var n = new t((0, o._)((0, a._)({}, e), {
                                parentSpanId: this.spanId,
                                sampled: this.sampled,
                                traceId: this.traceId
                            }));
                            if (n.spanRecorder = this.spanRecorder, n.spanRecorder && n.spanRecorder.add(n), n.transaction = this.transaction, ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.transaction) {
                                var r = e && e.op || "< unknown op >",
                                    i = n.transaction.name || "< unknown name >",
                                    u = n.transaction.spanId,
                                    c = "[Tracing] Starting '".concat(r, "' span on transaction '").concat(i, "' (").concat(u, ").");
                                n.transaction.metadata.spanMetadata[n.spanId] = {
                                    logMessage: c
                                }, s.logger.log(c)
                            }
                            return n
                        }
                    }, {
                        key: "setTag",
                        value: function(t, e) {
                            return this.tags = (0, o._)((0, a._)({}, this.tags), {
                                [t]: e
                            }), this
                        }
                    }, {
                        key: "setData",
                        value: function(t, e) {
                            return this.data = (0, o._)((0, a._)({}, this.data), {
                                [t]: e
                            }), this
                        }
                    }, {
                        key: "setStatus",
                        value: function(t) {
                            return this.status = t, this
                        }
                    }, {
                        key: "setHttpStatus",
                        value: function(t) {
                            this.setTag("http.status_code", String(t)), this.setData("http.response.status_code", t);
                            var e = l(t);
                            return "unknown_error" !== e && this.setStatus(e), this
                        }
                    }, {
                        key: "isSuccess",
                        value: function() {
                            return "ok" === this.status
                        }
                    }, {
                        key: "finish",
                        value: function(t) {
                            if (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this.transaction && this.transaction.spanId !== this.spanId) {
                                var e = this.transaction.metadata.spanMetadata[this.spanId].logMessage;
                                e && s.logger.log(e.replace("Starting", "Finishing"))
                            }
                            this.endTimestamp = "number" == typeof t ? t : (0, s.timestampInSeconds)()
                        }
                    }, {
                        key: "toTraceparent",
                        value: function() {
                            return (0, s.generateSentryTraceHeader)(this.traceId, this.spanId, this.sampled)
                        }
                    }, {
                        key: "toContext",
                        value: function() {
                            return (0, s.dropUndefinedKeys)({
                                data: this.data,
                                description: this.description,
                                endTimestamp: this.endTimestamp,
                                op: this.op,
                                parentSpanId: this.parentSpanId,
                                sampled: this.sampled,
                                spanId: this.spanId,
                                startTimestamp: this.startTimestamp,
                                status: this.status,
                                tags: this.tags,
                                traceId: this.traceId
                            })
                        }
                    }, {
                        key: "updateWithContext",
                        value: function(t) {
                            return this.data = t.data || {}, this.description = t.description, this.endTimestamp = t.endTimestamp, this.op = t.op, this.parentSpanId = t.parentSpanId, this.sampled = t.sampled, this.spanId = t.spanId || this.spanId, this.startTimestamp = t.startTimestamp || this.startTimestamp, this.status = t.status, this.tags = t.tags || {}, this.traceId = t.traceId || this.traceId, this
                        }
                    }, {
                        key: "getTraceContext",
                        value: function() {
                            return (0, s.dropUndefinedKeys)({
                                data: Object.keys(this.data).length > 0 ? this.data : void 0,
                                description: this.description,
                                op: this.op,
                                parent_span_id: this.parentSpanId,
                                span_id: this.spanId,
                                status: this.status,
                                tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                                trace_id: this.traceId
                            })
                        }
                    }, {
                        key: "toJSON",
                        value: function() {
                            return (0, s.dropUndefinedKeys)({
                                data: Object.keys(this.data).length > 0 ? this.data : void 0,
                                description: this.description,
                                op: this.op,
                                parent_span_id: this.parentSpanId,
                                span_id: this.spanId,
                                start_timestamp: this.startTimestamp,
                                status: this.status,
                                tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                                timestamp: this.endTimestamp,
                                trace_id: this.traceId
                            })
                        }
                    }]), t
                }();

            function l(t) {
                if (t < 400 && t >= 100) return "ok";
                if (t >= 400 && t < 500) switch (t) {
                    case 401:
                        return "unauthenticated";
                    case 403:
                        return "permission_denied";
                    case 404:
                        return "not_found";
                    case 409:
                        return "already_exists";
                    case 413:
                        return "failed_precondition";
                    case 429:
                        return "resource_exhausted";
                    default:
                        return "invalid_argument"
                }
                if (t >= 500 && t < 600) switch (t) {
                    case 501:
                        return "unimplemented";
                    case 503:
                        return "unavailable";
                    case 504:
                        return "deadline_exceeded";
                    default:
                        return "internal_error"
                }
                return "unknown_error"
            }
        },
        468174: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                trace: function() {
                    return s
                }
            });
            var r = n("21189");
            n("633702"), n("266796"), n("191489"), n("357629");
            var i = n("648238"),
                a = n("876122"),
                o = n("633401");

            function s(t, e) {
                var n, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                    u = (0, r._)({}, t);
                void 0 !== u.name && void 0 === u.description && (u.description = u.name);
                var c = (0, a.getCurrentHub)(),
                    l = c.getScope(),
                    d = l.getSpan(),
                    f = function() {
                        if ((0, o.hasTracingEnabled)()) return d ? d.startChild(u) : c.startTransaction(u)
                    }();

                function _() {
                    f && f.finish(), c.getScope().setSpan(d)
                }
                l.setSpan(f);
                try {
                    n = e(f)
                } catch (t) {
                    throw f && f.setStatus("internal_error"), s(t), _(), t
                }
                return (0, i.isThenable)(n) ? Promise.resolve(n).then(function() {
                    _()
                }, function(t) {
                    f && f.setStatus("internal_error"), s(t), _()
                }) : _(), n
            }
        },
        912033: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Transaction: function() {
                    return v
                }
            });
            var r = n("187986"),
                i = n("87627"),
                a = n("200344"),
                o = n("54423"),
                s = n("416076"),
                u = n("29713"),
                c = n("21189"),
                l = n("227094"),
                d = n("778455");
            n("878331"), n("462848"), n("357629"), n("724458"), n("26686"), n("814951");
            var f = n("648238"),
                _ = n("876122"),
                p = n("154405"),
                h = n("48950"),
                v = function(t) {
                    (0, u._)(n, t);
                    var e = (0, d._)(n);

                    function n(t, a) {
                        (0, i._)(this, n), o = e.call(this, t), n.prototype.__init.call((0, r._)(o)), n.prototype.__init2.call((0, r._)(o)), n.prototype.__init3.call((0, r._)(o)), o._hub = a || (0, _.getCurrentHub)(), o._name = t.name || "", o.metadata = (0, l._)((0, c._)({
                            source: "custom"
                        }, t.metadata), {
                            spanMetadata: {}
                        }), o._trimEnd = t.trimEnd, o.transaction = (0, r._)(o);
                        var o, s = o.metadata.dynamicSamplingContext;
                        return s && (o._frozenDynamicSamplingContext = (0, c._)({}, s)), o
                    }
                    return (0, a._)(n, [{
                        key: "__init",
                        value: function() {
                            this._measurements = {}
                        }
                    }, {
                        key: "__init2",
                        value: function() {
                            this._contexts = {}
                        }
                    }, {
                        key: "__init3",
                        value: function() {
                            this._frozenDynamicSamplingContext = void 0
                        }
                    }, {
                        key: "name",
                        get: function() {
                            return this._name
                        },
                        set: function(t) {
                            this.setName(t)
                        }
                    }, {
                        key: "setName",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "custom";
                            this._name = t, this.metadata.source = e
                        }
                    }, {
                        key: "initSpanRecorder",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
                            !this.spanRecorder && (this.spanRecorder = new h.SpanRecorder(t)), this.spanRecorder.add(this)
                        }
                    }, {
                        key: "setContext",
                        value: function(t, e) {
                            null === e ? delete this._contexts[t] : this._contexts[t] = e
                        }
                    }, {
                        key: "setMeasurement",
                        value: function(t, e) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                            this._measurements[t] = {
                                value: e,
                                unit: n
                            }
                        }
                    }, {
                        key: "setMetadata",
                        value: function(t) {
                            this.metadata = (0, c._)({}, this.metadata, t)
                        }
                    }, {
                        key: "finish",
                        value: function(t) {
                            var e = this;
                            if (void 0 === this.endTimestamp) {
                                !this.name && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.logger.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this.name = "<unlabeled transaction>"), (0, o._)((0, s._)(n.prototype), "finish", this).call(this, t);
                                var r = this._hub.getClient();
                                if (r && r.emit && r.emit("finishTransaction", this), !0 !== this.sampled) {
                                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.logger.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."), r && r.recordDroppedEvent("sample_rate", "transaction");
                                    return
                                }
                                var i = this.spanRecorder ? this.spanRecorder.spans.filter(function(t) {
                                    return t !== e && t.endTimestamp
                                }) : [];
                                this._trimEnd && i.length > 0 && (this.endTimestamp = i.reduce(function(t, e) {
                                    return t.endTimestamp && e.endTimestamp ? t.endTimestamp > e.endTimestamp ? t : e : t
                                }).endTimestamp);
                                var a = this.metadata,
                                    u = (0, c._)({
                                        contexts: (0, l._)((0, c._)({}, this._contexts), {
                                            trace: this.getTraceContext()
                                        }),
                                        spans: i,
                                        start_timestamp: this.startTimestamp,
                                        tags: this.tags,
                                        timestamp: this.endTimestamp,
                                        transaction: this.name,
                                        type: "transaction",
                                        sdkProcessingMetadata: (0, l._)((0, c._)({}, a), {
                                            dynamicSamplingContext: this.getDynamicSamplingContext()
                                        })
                                    }, a.source && {
                                        transaction_info: {
                                            source: a.source
                                        }
                                    });
                                return Object.keys(this._measurements).length > 0 && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.logger.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)), u.measurements = this._measurements), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.logger.log("[Tracing] Finishing ".concat(this.op, " transaction: ").concat(this.name, ".")), this._hub.captureEvent(u)
                            }
                        }
                    }, {
                        key: "toContext",
                        value: function() {
                            var t = (0, o._)((0, s._)(n.prototype), "toContext", this).call(this);
                            return (0, f.dropUndefinedKeys)((0, l._)((0, c._)({}, t), {
                                name: this.name,
                                trimEnd: this._trimEnd
                            }))
                        }
                    }, {
                        key: "updateWithContext",
                        value: function(t) {
                            return (0, o._)((0, s._)(n.prototype), "updateWithContext", this).call(this, t), this.name = t.name || "", this._trimEnd = t.trimEnd, this
                        }
                    }, {
                        key: "getDynamicSamplingContext",
                        value: function() {
                            if (this._frozenDynamicSamplingContext) return this._frozenDynamicSamplingContext;
                            var t = this._hub || (0, _.getCurrentHub)(),
                                e = t.getClient();
                            if (!e) return {};
                            var n = t.getScope(),
                                r = (0, p.getDynamicSamplingContextFromClient)(this.traceId, e, n),
                                i = this.metadata.sampleRate;
                            void 0 !== i && (r.sample_rate = "".concat(i));
                            var a = this.metadata.source;
                            return a && "url" !== a && (r.transaction = this.name), void 0 !== this.sampled && (r.sampled = String(this.sampled)), r
                        }
                    }, {
                        key: "setHub",
                        value: function(t) {
                            this._hub = t
                        }
                    }]), n
                }(h.Span)
        },
        147816: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getActiveTransaction: function() {
                    return i
                }
            });
            var r = n("876122");

            function i(t) {
                return (t || (0, r.getCurrentHub)()).getScope().getTransaction()
            }
        },
        347421: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                createTransport: function() {
                    return i
                }
            }), n("653041"), n("814951");
            var r = n("648238");

            function i(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, r.makePromiseBuffer)(t.bufferSize || 30),
                    i = {};

                function o(o) {
                    var s = [];
                    if ((0, r.forEachEnvelopeItem)(o, function(e, n) {
                            var o = (0, r.envelopeItemTypeToDataCategory)(n);
                            if ((0, r.isRateLimited)(i, o)) {
                                var u = a(e, n);
                                t.recordDroppedEvent("ratelimit_backoff", o, u)
                            } else s.push(e)
                        }), 0 === s.length) return (0, r.resolvedSyncPromise)();
                    var u = (0, r.createEnvelope)(o[0], s),
                        c = function(e) {
                            (0, r.forEachEnvelopeItem)(u, function(n, i) {
                                var o = a(n, i);
                                t.recordDroppedEvent(e, (0, r.envelopeItemTypeToDataCategory)(i), o)
                            })
                        };
                    return n.add(function() {
                        return e({
                            body: (0, r.serializeEnvelope)(u, t.textEncoder)
                        }).then(function(t) {
                            return void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Sentry responded with status code ".concat(t.statusCode, " to sent event.")), i = (0, r.updateRateLimits)(i, t), t
                        }, function(t) {
                            throw c("network_error"), t
                        })
                    }).then(function(t) {
                        return t
                    }, function(t) {
                        if (t instanceof r.SentryError) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error("Skipped sending event because buffer is full."), c("queue_overflow"), (0, r.resolvedSyncPromise)();
                        throw t
                    })
                }
                return o.__sentry__baseTransport__ = !0, {
                    send: o,
                    flush: function(t) {
                        return n.drain(t)
                    }
                }
            }

            function a(t, e) {
                if ("event" === e || "transaction" === e) return Array.isArray(t) ? t[1] : void 0
            }
        },
        449701: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                makeMultiplexedTransport: function() {
                    return d
                }
            });
            var r = n("356056"),
                i = n("21189"),
                a = n("227094"),
                o = n("761020"),
                s = n("324415");
            n("568603"), n("128242"), n("814951"), n("363505"), n("462848"), n("357629"), n("653041"), n("191489"), n("996173"), n("47120");
            var u = n("648238"),
                c = n("507506");

            function l(t, e) {
                var n;
                return (0, u.forEachEnvelopeItem)(t, function(t, r) {
                    return e.includes(r) && (n = Array.isArray(t) ? t[1] : void 0), !!n
                }), n
            }

            function d(t, e) {
                return function(n) {
                    var d = function(e, o) {
                            var d = o ? "".concat(e, ":").concat(o) : e;
                            if (!_[d]) {
                                var f, p, h = (0, u.dsnFromString)(e);
                                if (!h) return;
                                var v = (0, c.getEnvelopeEndpointWithUrlEncodedAuth)(h);
                                _[d] = o ? (f = t, p = o, function(t) {
                                    var e, n = f(t);
                                    return {
                                        send: (e = (0, r._)(function(t) {
                                            var e;
                                            return (0, s._)(this, function(r) {
                                                return (e = l(t, ["event", "transaction", "profile", "replay_event"])) && (e.release = p), [2, n.send(t)]
                                            })
                                        }), function(t) {
                                            return e.apply(this, arguments)
                                        }),
                                        flush: function(t) {
                                            return n.flush(t)
                                        }
                                    }
                                })((0, a._)((0, i._)({}, n), {
                                    url: v
                                })) : t((0, a._)((0, i._)({}, n), {
                                    url: v
                                }))
                            }
                            return _[d]
                        },
                        f = t(n),
                        _ = {};

                    function p() {
                        return (p = (0, r._)(function(t) {
                            var n;

                            function r(e) {
                                return l(t, e && e.length ? e : ["event"])
                            }
                            return (0, s._)(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return 0 === (n = e({
                                            envelope: t,
                                            getEvent: r
                                        }).map(function(t) {
                                            return "string" == typeof t ? d(t, void 0) : d(t.dsn, t.release)
                                        }).filter(function(t) {
                                            return !!t
                                        })).length && n.push(f), [4, Promise.all(n.map(function(e) {
                                            return e.send(t)
                                        }))];
                                    case 1:
                                        return [2, i.sent()[0]]
                                }
                            })
                        })).apply(this, arguments)
                    }

                    function h() {
                        return (h = (0, r._)(function(t) {
                            return (0, s._)(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Promise.all((0, o._)(Object.keys(_).map(function(t) {
                                            return _[t]
                                        })).concat([f]).map(function(e) {
                                            return e.flush(t)
                                        }))];
                                    case 1:
                                        return [2, e.sent().every(function(t) {
                                            return t
                                        })]
                                }
                            })
                        })).apply(this, arguments)
                    }
                    return {
                        send: function(t) {
                            return p.apply(this, arguments)
                        },
                        flush: function(t) {
                            return h.apply(this, arguments)
                        }
                    }
                }
            }
        },
        499833: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                makeOfflineTransport: function() {
                    return s
                }
            });
            var r = n("356056"),
                i = n("324415");
            n("814951"), n("653041");
            var a = n("648238");

            function o(t, e) {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.info("[Offline]: ".concat(t), e)
            }

            function s(t) {
                return function(e) {
                    var n, s = function(t) {
                            d && (n && clearTimeout(n), "number" != typeof(n = setTimeout((0, r._)(function() {
                                var t;
                                return (0, i._)(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return n = void 0, [4, d.pop()];
                                        case 1:
                                            return (t = e.sent()) && (o("Attempting to send previously queued event"), c(t).catch(function(t) {
                                                o("Failed to retry sending", t)
                                            })), [2]
                                    }
                                })
                            }), t)) && n.unref && n.unref())
                        },
                        u = function() {
                            !n && (s(f), f = Math.min(2 * f, 36e5))
                        },
                        c = function(t) {
                            return _.apply(this, arguments)
                        },
                        l = t(e),
                        d = e.createStore ? e.createStore(e) : void 0,
                        f = 5e3;

                    function _() {
                        return (_ = (0, r._)(function(t) {
                            var n, r, c, _;
                            return (0, i._)(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 8]), [4, l.send(t)];
                                    case 1:
                                        if (n = i.sent(), r = 100, n) {
                                            if (n.headers && n.headers["retry-after"]) r = (0, a.parseRetryAfterHeader)(n.headers["retry-after"]);
                                            else if ((n.statusCode || 0) >= 400) return [2, n]
                                        }
                                        return s(r), f = 5e3, [2, n];
                                    case 2:
                                        var p, h, v;
                                        if (c = i.sent(), !(_ = d)) return [3, 4];
                                        return [4, (p = t, h = c, v = f, !(0, a.envelopeContainsItemType)(p, ["replay_event", "replay_recording", "client_report"]) && (!e.shouldStore || e.shouldStore(p, h, v)))];
                                    case 3:
                                        _ = i.sent(), i.label = 4;
                                    case 4:
                                        if (!_) return [3, 6];
                                        return [4, d.insert(t)];
                                    case 5:
                                        return i.sent(), u(), o("Error sending. Event queued", c), [2, {}];
                                    case 6:
                                        throw c;
                                    case 7:
                                        return [3, 8];
                                    case 8:
                                        return [2]
                                }
                            })
                        })).apply(this, arguments)
                    }
                    return e.flushAtStartup && u(), {
                        send: c,
                        flush: function(t) {
                            return l.flush(t)
                        }
                    }
                }
            }
        },
        633401: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                hasTracingEnabled: function() {
                    return i
                }
            });
            var r = n("876122");

            function i(t) {
                if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
                var e = (0, r.getCurrentHub)().getClient(),
                    n = t || e && e.getOptions();
                return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
            }
        },
        392405: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                prepareEvent: function() {
                    return c
                }
            });
            var r = n("21189"),
                i = n("227094"),
                a = n("761020");
            n("363505"), n("814951"), n("996173"), n("47120"), n("357629"), n("870445"), n("573788"), n("724458"), n("653041");
            var o = n("648238"),
                s = n("28434"),
                u = n("703498");

            function c(t, e, n, c) {
                var d = t.normalizeDepth,
                    f = void 0 === d ? 3 : d,
                    _ = t.normalizeMaxBreadth,
                    p = void 0 === _ ? 1e3 : _,
                    h = (0, i._)((0, r._)({}, e), {
                        event_id: e.event_id || n.event_id || (0, o.uuid4)(),
                        timestamp: e.timestamp || (0, o.dateTimestampInSeconds)()
                    }),
                    v = n.integrations || t.integrations.map(function(t) {
                        return t.name
                    });
                (function(t, e) {
                    var n = e.environment,
                        r = e.release,
                        i = e.dist,
                        a = e.maxValueLength,
                        u = void 0 === a ? 250 : a;
                    !("environment" in t) && (t.environment = "environment" in e ? n : s.DEFAULT_ENVIRONMENT), void 0 === t.release && void 0 !== r && (t.release = r), void 0 === t.dist && void 0 !== i && (t.dist = i), t.message && (t.message = (0, o.truncate)(t.message, u));
                    var c = t.exception && t.exception.values && t.exception.values[0];
                    c && c.value && (c.value = (0, o.truncate)(c.value, u));
                    var l = t.request;
                    l && l.url && (l.url = (0, o.truncate)(l.url, u))
                })(h, t),
                function(t, e) {
                    e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = (0, a._)(t.sdk.integrations || []).concat((0, a._)(e)))
                }(h, v), void 0 === e.type && function(t, e) {
                    var n, r = o.GLOBAL_OBJ._sentryDebugIds;
                    if (r) {
                        var i = l.get(e);
                        i ? n = i : (n = new Map, l.set(e, n));
                        var a = Object.keys(r).reduce(function(t, i) {
                            var a, o = n.get(i);
                            o ? a = o : (a = e(i), n.set(i, a));
                            for (var s = a.length - 1; s >= 0; s--) {
                                var u = a[s];
                                if (u.filename) {
                                    t[u.filename] = r[i];
                                    break
                                }
                            }
                            return t
                        }, {});
                        try {
                            t.exception.values.forEach(function(t) {
                                t.stacktrace.frames.forEach(function(t) {
                                    t.filename && (t.debug_id = a[t.filename])
                                })
                            })
                        } catch (t) {}
                    }
                }(h, t.stackParser);
                var m = c;
                n.captureContext && (m = u.Scope.clone(m).update(n.captureContext));
                var g = (0, o.resolvedSyncPromise)(h);
                if (m) {
                    if (m.getAttachments) {
                        var y = (0, a._)(n.attachments || []).concat((0, a._)(m.getAttachments()));
                        y.length && (n.attachments = y)
                    }
                    g = m.applyToEvent(h, n)
                }
                return g.then(function(t) {
                    return (t && function(t) {
                        var e = {};
                        try {
                            t.exception.values.forEach(function(t) {
                                t.stacktrace.frames.forEach(function(t) {
                                    t.debug_id && (t.abs_path ? e[t.abs_path] = t.debug_id : t.filename && (e[t.filename] = t.debug_id), delete t.debug_id)
                                })
                            })
                        } catch (t) {}
                        if (0 !== Object.keys(e).length) {
                            t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
                            var n = t.debug_meta.images;
                            Object.keys(e).forEach(function(t) {
                                n.push({
                                    type: "sourcemap",
                                    code_file: t,
                                    debug_id: e[t]
                                })
                            })
                        }
                    }(t), "number" == typeof f && f > 0) ? function(t, e, n) {
                        if (!t) return null;
                        var i = (0, r._)({}, t, t.breadcrumbs && {
                            breadcrumbs: t.breadcrumbs.map(function(t) {
                                return (0, r._)({}, t, t.data && {
                                    data: (0, o.normalize)(t.data, e, n)
                                })
                            })
                        }, t.user && {
                            user: (0, o.normalize)(t.user, e, n)
                        }, t.contexts && {
                            contexts: (0, o.normalize)(t.contexts, e, n)
                        }, t.extra && {
                            extra: (0, o.normalize)(t.extra, e, n)
                        });
                        return t.contexts && t.contexts.trace && i.contexts && (i.contexts.trace = t.contexts.trace, t.contexts.trace.data && (i.contexts.trace.data = (0, o.normalize)(t.contexts.trace.data, e, n))), t.spans && (i.spans = t.spans.map(function(t) {
                            return t.data && (t.data = (0, o.normalize)(t.data, e, n)), t
                        })), i
                    }(t, f, p) : t
                })
            }
            var l = new WeakMap
        },
        139782: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                SDK_VERSION: function() {
                    return r
                }
            });
            var r = "7.60.1"
        },
        438142: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Replay: function() {
                    return e7
                }
            });
            var r, i, a, o, s, u, c, l, d, f, _, p, h, v, m, g, y, E, b, S, k, w = n("356056"),
                T = n("87627"),
                x = n("200344"),
                R = n("29713"),
                D = n("21189"),
                N = n("227094"),
                I = n("154005"),
                C = n("761020"),
                O = n("918256"),
                A = n("778455"),
                U = n("324415");
            n("242167"), n("970173"), n("380476"), n("633958"), n("520712"), n("257068"), n("881884"), n("982849"), n("268111"), n("941497"), n("571977"), n("827762"), n("673841"), n("177841"), n("640740"), n("438471"), n("84643"), n("249288"), n("538235"), n("473220"), n("32026"), n("223828"), n("896409"), n("480839"), n("186066"), n("744285"), n("492257"), n("190629"), n("873817"), n("357629"), n("996173"), n("126298"), n("474991"), n("398202"), n("301563"), n("932991"), n("293114"), n("757143"), n("566702"), n("723768"), n("363505"), n("917168"), n("849202"), n("814951"), n("633702"), n("266796"), n("47120"), n("653041"), n("733019"), n("754598"), n("107774"), n("788539"), n("411104"), n("330740"), n("462848"), n("870445"), n("733860"), n("151809"), n("26686"), n("518263"), n("573788"), n("951953"), n("57638"), n("747282"), n("565568"), n("62338"), n("419526"), n("66153"), n("69485"), n("610885"), n("568603"), n("128242"), n("817285"), n("724458"), n("230036"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("191489"), n("723026"), n("254276");
            var B = n("91320"),
                L = n("648238"),
                M = n("444675"),
                P = L.GLOBAL_OBJ,
                G = "sentryReplaySession",
                Y = "Unable to send Replay";
            (r = d || (d = {}))[r.Document = 0] = "Document", r[r.DocumentType = 1] = "DocumentType", r[r.Element = 2] = "Element", r[r.Text = 3] = "Text", r[r.CDATA = 4] = "CDATA", r[r.Comment = 5] = "Comment";

            function F(t) {
                var e = null == t ? void 0 : t.host;
                return !!(e && e.shadowRoot && e.shadowRoot === t)
            }

            function z(t) {
                var e = t.maskInputOptions,
                    n = t.tagName,
                    r = t.type;
                "option" === n.toLowerCase() && (n = "select");
                var i = "string" == typeof r ? r.toLowerCase() : void 0;
                return e[n.toLowerCase()] || i && e[i] || "password" === i || "input" === n && !r && e.text
            }

            function H(t) {
                var e = t.input,
                    n = t.maskInputSelector,
                    r = t.unmaskInputSelector,
                    i = t.maskInputOptions,
                    a = t.tagName,
                    o = t.type,
                    s = t.value,
                    u = t.maskInputFn,
                    c = s || "";
                return r && e.matches(r) ? c : (e.hasAttribute("data-rr-is-password") && (o = "password"), (z({
                    maskInputOptions: i,
                    tagName: a,
                    type: o
                }) || n && e.matches(n)) && (c = u ? u(c) : "*".repeat(c.length)), c)
            }
            var W = "__rrweb_original__";

            function j(t) {
                var e = t.type;
                return t.hasAttribute("data-rr-is-password") ? "password" : e ? e.toLowerCase() : null
            }

            function q(t, e, n) {
                return ("string" == typeof n && n.toLowerCase(), "INPUT" === e && ("radio" === n || "checkbox" === n)) ? t.getAttribute("value") || "" : t.value
            }
            var Z = 1,
                V = RegExp("[^a-z0-9-_:]");

            function K(t) {
                return t ? t.replace(/[\S]/g, "*") : ""
            }

            function J(t) {
                try {
                    var e = t.rules || t.cssRules;
                    return e ? Array.from(e).map(X).join("") : null
                } catch (t) {
                    return null
                }
            }

            function X(t) {
                var e = t.cssText;
                if (function(t) {
                        return "styleSheet" in t
                    }(t)) try {
                    e = J(t.styleSheet) || e
                } catch (t) {}
                return $(e)
            }

            function $(t) {
                return t.indexOf(":") > -1 ? t.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2") : t
            }
            var Q = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
                tt = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,
                te = /^(data:)([^,]*),(.*)/i;

            function tn(t, e) {
                return (t || "").replace(Q, function(t, n, r, i, a, o) {
                    var s = r || a || o,
                        u = n || i || "";
                    if (!s) return t;
                    if (!tt.test(s) || te.test(s)) return "url(".concat(u).concat(s).concat(u, ")");
                    if ("/" === s[0]) {
                        ;
                        return "url(".concat(u).concat((h = "", (h = (h = (p = e).indexOf("//") > -1 ? p.split("/").slice(0, 3).join("/") : p.split("/")[0]).split("?")[0]) + s)).concat(u, ")")
                    }
                    var c = e.split("/"),
                        l = s.split("/");
                    c.pop();
                    var d = !0,
                        f = !1,
                        _ = void 0;
                    try {
                        for (var p, h, v, m = l[Symbol.iterator](); !(d = (v = m.next()).done); d = !0) {
                            var g = v.value;
                            if ("." !== g) ".." === g ? c.pop() : c.push(g)
                        }
                    } catch (t) {
                        f = !0, _ = t
                    } finally {
                        try {
                            !d && null != m.return && m.return()
                        } finally {
                            if (f) throw _
                        }
                    }
                    return "url(".concat(u).concat(c.join("/")).concat(u, ")")
                })
            }
            var tr = /^[^ \t\n\r\u000c]+/,
                ti = /^[, \t\n\r\u000c]+/;

            function ta(t, e) {
                if (!e || "" === e.trim()) return e;
                var n = t.createElement("a");
                return n.href = e, n.href
            }

            function to() {
                var t = document.createElement("a");
                return t.href = "", t.href
            }

            function ts(t, e, n, r, i, a, o, s) {
                if (!i) return i;
                var u = r.toLowerCase(),
                    c = n.toLowerCase();
                if ("src" === u || "href" === u) return ta(t, i);
                if ("xlink:href" === u && "#" !== i[0]) return ta(t, i);
                if ("background" === u && ("table" === c || "td" === c || "th" === c)) return ta(t, i);
                else if ("srcset" === u) return function(t, e) {
                    if ("" === e.trim()) return e;
                    var n = 0;

                    function r(t) {
                        var r, i = t.exec(e.substring(n));
                        return i ? (r = i[0], n += r.length, r) : ""
                    }
                    for (var i = []; r(ti), !(n >= e.length);) {
                        ;
                        var a = r(tr);
                        if ("," === a.slice(-1)) a = ta(t, a.substring(0, a.length - 1)), i.push(a);
                        else {
                            var o = "";
                            a = ta(t, a);
                            for (var s = !1;;) {
                                var u = e.charAt(n);
                                if ("" === u) {
                                    i.push((a + o).trim());
                                    break
                                }
                                if (s) ")" === u && (s = !1);
                                else {
                                    if ("," === u) {
                                        n += 1, i.push((a + o).trim());
                                        break
                                    }
                                    "(" === u && (s = !0)
                                }
                                o += u, n += 1
                            }
                        }
                    }
                    return i.join(", ")
                }(t, i);
                else if ("style" === u) return tn(i, to());
                else if ("object" === c && "data" === u) return ta(t, i);
                else if (a && function(t, e, n, r) {
                        return !(r && t.matches(r)) && (["placeholder", "title", "aria-label"].indexOf(e) > -1 || "input" === n && "value" === e && t.hasAttribute("type") && ["submit", "button"].indexOf(t.getAttribute("type").toLowerCase()) > -1)
                    }(e, u, c, o)) return s ? s(i) : K(i);
                return i
            }

            function tu(t, e, n, r, i) {
                if (!t) return !1;
                if (t.nodeType !== t.ELEMENT_NODE) return tu(t.parentNode, e, n, r, i);
                if (r && (t.matches(r) || t.closest(r))) return !1;
                if (i) return !0;
                if ("string" == typeof e) {
                    if (t.classList.contains(e)) return !0
                } else
                    for (var a = 0; a < t.classList.length; a++) {
                        var o = t.classList[a];
                        if (e.test(o)) return !0
                    }
                return !!(n && t.matches(n)) || tu(t.parentNode, e, n, r, i)
            }

            function tc(t) {
                return null == t ? "" : t.toLowerCase()
            }

            function tl(t, e) {
                var n = e.doc,
                    r = e.map,
                    i = e.blockClass,
                    a = e.blockSelector,
                    o = e.unblockSelector,
                    s = e.maskTextClass,
                    u = e.maskTextSelector,
                    c = e.unmaskTextSelector,
                    l = e.skipChild,
                    p = void 0 !== l && l,
                    h = e.inlineStylesheet,
                    v = void 0 === h || h,
                    m = e.maskInputSelector,
                    g = e.unmaskInputSelector,
                    y = e.maskAllText,
                    E = e.maskInputOptions,
                    b = void 0 === E ? {} : E,
                    S = e.maskTextFn,
                    k = e.maskInputFn,
                    w = e.slimDOMOptions,
                    T = e.dataURLOptions,
                    x = void 0 === T ? {} : T,
                    R = e.inlineImages,
                    D = void 0 !== R && R,
                    N = e.recordCanvas,
                    I = void 0 !== N && N,
                    C = e.onSerialize,
                    O = e.onIframeLoad,
                    A = e.iframeLoadTimeout,
                    U = void 0 === A ? 5e3 : A,
                    B = e.keepIframeSrcFn,
                    L = void 0 === B ? function() {
                        return !1
                    } : B,
                    M = e.preserveWhiteSpace,
                    P = void 0 === M || M,
                    G = function(t, e) {
                        var n = e.doc,
                            r = e.blockClass,
                            i = e.blockSelector,
                            a = e.unblockSelector,
                            o = e.maskTextClass,
                            s = e.maskTextSelector,
                            u = e.unmaskTextSelector,
                            c = e.inlineStylesheet,
                            l = e.maskInputSelector,
                            p = e.unmaskInputSelector,
                            h = e.maskAllText,
                            v = e.maskInputOptions,
                            m = void 0 === v ? {} : v,
                            g = e.maskTextFn,
                            y = e.maskInputFn,
                            E = e.dataURLOptions,
                            b = void 0 === E ? {} : E,
                            S = e.inlineImages,
                            k = e.recordCanvas,
                            w = e.keepIframeSrcFn;
                        if (n.__sn) {
                            var T = n.__sn.id;
                            U = 1 === T ? void 0 : T
                        }
                        switch (t.nodeType) {
                            case t.DOCUMENT_NODE:
                                if ("CSS1Compat" !== t.compatMode) return {
                                    type: d.Document,
                                    childNodes: [],
                                    compatMode: t.compatMode,
                                    rootId: U
                                };
                                return {
                                    type: d.Document, childNodes: [], rootId: U
                                };
                            case t.DOCUMENT_TYPE_NODE:
                                return {
                                    type: d.DocumentType, name: t.name, publicId: t.publicId, systemId: t.systemId, rootId: U
                                };
                            case t.ELEMENT_NODE:
                                var x, R = function(t, e, n, r) {
                                        if (r && t.matches(r)) return !1;
                                        if ("string" == typeof e) {
                                            if (t.classList.contains(e)) return !0
                                        } else
                                            for (var i = 0; i < t.classList.length; i++) {
                                                var a = t.classList[i];
                                                if (e.test(a)) return !0
                                            }
                                        return !!n && t.matches(n)
                                    }(t, r, i, a),
                                    D = function(t) {
                                        if (t instanceof HTMLFormElement) return "form";
                                        var e = t.tagName.toLowerCase().trim();
                                        return V.test(e) ? "div" : e
                                    }(t),
                                    N = {},
                                    I = !0,
                                    C = !1,
                                    O = void 0;
                                try {
                                    for (var A, U, B, L = Array.from(t.attributes)[Symbol.iterator](); !(I = (B = L.next()).done); I = !0) {
                                        var M = B.value,
                                            P = M.name,
                                            G = M.value;
                                        ! function(t, e, n) {
                                            return ("video" === t || "audio" === t) && "autoplay" === e
                                        }(D, P) && (N[P] = ts(n, t, D, P, G, h, u, g))
                                    }
                                } catch (t) {
                                    C = !0, O = t
                                } finally {
                                    try {
                                        !I && null != L.return && L.return()
                                    } finally {
                                        if (C) throw O
                                    }
                                }
                                if ("link" === D && c) {
                                    var Y = Array.from(n.styleSheets).find(function(e) {
                                            return e.href === t.href
                                        }),
                                        F = null;
                                    Y && (F = J(Y)), F && (delete N.rel, delete N.href, N._cssText = tn(F, Y.href))
                                }
                                if ("style" === D && t.sheet && !(t.innerText || t.textContent || "").trim().length) {
                                    var z = J(t.sheet);
                                    z && (N._cssText = tn(z, to()))
                                }
                                if ("input" === D || "textarea" === D || "select" === D || "option" === D) {
                                    var Z = j(t),
                                        X = q(t, D.toUpperCase(), Z),
                                        Q = t.checked;
                                    "submit" !== Z && "button" !== Z && X && (N.value = H({
                                        input: t,
                                        type: Z,
                                        tagName: D,
                                        value: X,
                                        maskInputSelector: l,
                                        unmaskInputSelector: p,
                                        maskInputOptions: m,
                                        maskInputFn: y
                                    })), Q && (N.checked = Q)
                                }
                                if ("option" === D && (t.selected && !m.select ? N.selected = !0 : delete N.selected), "canvas" === D && k) {
                                    if ("2d" === t.__context) ! function(t) {
                                        var e = t.getContext("2d");
                                        if (!e) return !0;
                                        for (var n = 0; n < t.width; n += 50)
                                            for (var r = 0; r < t.height; r += 50) {
                                                var i = e.getImageData,
                                                    a = W in i ? i[W] : i;
                                                if (new Uint32Array(a.call(e, n, r, Math.min(50, t.width - n), Math.min(50, t.height - r)).data.buffer).some(function(t) {
                                                        return 0 !== t
                                                    })) return !1
                                            }
                                        return !0
                                    }(t) && (N.rr_dataURL = t.toDataURL(b.type, b.quality));
                                    else if (!("__context" in t)) {
                                        var tt = t.toDataURL(b.type, b.quality),
                                            te = document.createElement("canvas");
                                        te.width = t.width, te.height = t.height, tt !== te.toDataURL(b.type, b.quality) && (N.rr_dataURL = tt)
                                    }
                                }
                                if ("img" === D && S) {
                                    !f && (_ = (f = n.createElement("canvas")).getContext("2d"));
                                    var tr = t.crossOrigin;
                                    t.crossOrigin = "anonymous";
                                    var ti = function() {
                                        try {
                                            f.width = t.naturalWidth, f.height = t.naturalHeight, _.drawImage(t, 0, 0), N.rr_dataURL = f.toDataURL(b.type, b.quality)
                                        } catch (e) {
                                            console.warn("Cannot inline img src=".concat(t.currentSrc, "! Error: ").concat(e))
                                        }
                                        tr ? N.crossOrigin = tr : delete N.crossOrigin
                                    };
                                    t.complete && 0 !== t.naturalWidth ? ti() : t.onload = ti
                                }
                                if (("audio" === D || "video" === D) && (N.rr_mediaState = t.paused ? "paused" : "played", N.rr_mediaCurrentTime = t.currentTime), t.scrollLeft && (N.rr_scrollLeft = t.scrollLeft), t.scrollTop && (N.rr_scrollTop = t.scrollTop), R) {
                                    var ta = t.getBoundingClientRect(),
                                        tc = ta.width,
                                        tl = ta.height;
                                    N = {
                                        class: N.class,
                                        rr_width: "".concat(tc, "px"),
                                        rr_height: "".concat(tl, "px")
                                    }
                                }
                                return "iframe" === D && !w(N.src) && (!t.contentDocument && (N.rr_src = N.src), delete N.src), {
                                    type: d.Element,
                                    tagName: D,
                                    attributes: N,
                                    childNodes: [],
                                    isSVG: !!("svg" === (x = t).tagName || x.ownerSVGElement) || void 0,
                                    needBlock: R,
                                    rootId: U
                                };
                            case t.TEXT_NODE:
                                var td, tf = t.parentNode && t.parentNode.tagName,
                                    t_ = t.textContent,
                                    tp = "STYLE" === tf || void 0,
                                    th = "SCRIPT" === tf || void 0;
                                if (tp && t_) {
                                    try {
                                        if (t.nextSibling || t.previousSibling);
                                        else if (null === (A = t.parentNode.sheet) || void 0 === A ? void 0 : A.cssRules) {
                                            ;
                                            t_ = (td = t.parentNode.sheet).cssRules ? Array.from(td.cssRules).map(function(t) {
                                                return t.cssText ? $(t.cssText) : ""
                                            }).join("") : ""
                                        }
                                    } catch (e) {
                                        console.warn("Cannot get CSS styles from text's parentNode. Error: ".concat(e), t)
                                    }
                                    t_ = tn(t_, to())
                                }
                                return th && (t_ = "SCRIPT_PLACEHOLDER"), "TEXTAREA" === tf && t_ ? t_ = "" : "OPTION" === tf && t_ ? t_ = H({
                                    input: t.parentNode,
                                    type: null,
                                    tagName: tf,
                                    value: t_,
                                    maskInputSelector: l,
                                    unmaskInputSelector: p,
                                    maskInputOptions: m,
                                    maskInputFn: y
                                }) : !tp && !th && tu(t, o, s, u, h) && t_ && (t_ = g ? g(t_) : K(t_)), {
                                    type: d.Text,
                                    textContent: t_ || "",
                                    isStyle: tp,
                                    rootId: U
                                };
                            case t.CDATA_SECTION_NODE:
                                return {
                                    type: d.CDATA, textContent: "", rootId: U
                                };
                            case t.COMMENT_NODE:
                                return {
                                    type: d.Comment, textContent: t.textContent || "", rootId: U
                                };
                            default:
                                return !1
                        }
                    }(t, {
                        doc: n,
                        blockClass: i,
                        blockSelector: a,
                        unblockSelector: o,
                        maskTextClass: s,
                        maskTextSelector: u,
                        unmaskTextSelector: c,
                        inlineStylesheet: v,
                        maskInputSelector: m,
                        unmaskInputSelector: g,
                        maskAllText: y,
                        maskInputOptions: b,
                        maskTextFn: S,
                        maskInputFn: k,
                        dataURLOptions: x,
                        inlineImages: D,
                        recordCanvas: I,
                        keepIframeSrcFn: L
                    });
                if (!G) return console.warn(t, "not serialized"), null;
                tr = "__sn" in t ? t.__sn.id : ! function(t, e) {
                    if (e.comment && t.type === d.Comment) return !0;
                    if (t.type === d.Element) {
                        if (e.script && ("script" === t.tagName || "link" === t.tagName && ("preload" === t.attributes.rel || "modulepreload" === t.attributes.rel) && "script" === t.attributes.as || "link" === t.tagName && "prefetch" === t.attributes.rel && "string" == typeof t.attributes.href && t.attributes.href.endsWith(".js"))) return !0;
                        if (e.headFavicon && ("link" === t.tagName && "shortcut icon" === t.attributes.rel || "meta" === t.tagName && (tc(t.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === tc(t.attributes.name) || "icon" === tc(t.attributes.rel) || "apple-touch-icon" === tc(t.attributes.rel) || "shortcut icon" === tc(t.attributes.rel)))) return !0;
                        else if ("meta" === t.tagName) {
                            if (e.headMetaDescKeywords && tc(t.attributes.name).match(/^description|keywords$/)) return !0;
                            if (e.headMetaSocial && (tc(t.attributes.property).match(/^(og|twitter|fb):/) || tc(t.attributes.name).match(/^(og|twitter):/) || "pinterest" === tc(t.attributes.name))) return !0;
                            else if (e.headMetaRobots && ("robots" === tc(t.attributes.name) || "googlebot" === tc(t.attributes.name) || "bingbot" === tc(t.attributes.name))) return !0;
                            else if (e.headMetaHttpEquiv && void 0 !== t.attributes["http-equiv"]) return !0;
                            else if (e.headMetaAuthorship && ("author" === tc(t.attributes.name) || "generator" === tc(t.attributes.name) || "framework" === tc(t.attributes.name) || "publisher" === tc(t.attributes.name) || "progid" === tc(t.attributes.name) || tc(t.attributes.property).match(/^article:/) || tc(t.attributes.property).match(/^product:/))) return !0;
                            else if (e.headMetaVerification && ("google-site-verification" === tc(t.attributes.name) || "yandex-verification" === tc(t.attributes.name) || "csrf-token" === tc(t.attributes.name) || "p:domain_verify" === tc(t.attributes.name) || "verify-v1" === tc(t.attributes.name) || "verification" === tc(t.attributes.name) || "shopify-checkout-api-token" === tc(t.attributes.name))) return !0
                        }
                    }
                    return !1
                }(G, w) && (P || G.type !== d.Text || G.isStyle || G.textContent.replace(/^\s+|\s+$/gm, "").length) ? Z++ : -2;
                var Y = Object.assign(G, {
                    id: tr
                });
                if (t.__sn = Y, -2 === tr) return null;
                r[tr] = t, C && C(t);
                var z = !p;
                if (Y.type === d.Element && (z = z && !Y.needBlock, delete Y.needBlock, t.shadowRoot && (Y.isShadowHost = !0)), (Y.type === d.Document || Y.type === d.Element) && z) {
                    w.headWhitespace && G.type === d.Element && "head" === G.tagName && (P = !1);
                    var X = {
                            doc: n,
                            map: r,
                            blockClass: i,
                            blockSelector: a,
                            unblockSelector: o,
                            maskTextClass: s,
                            maskTextSelector: u,
                            unmaskTextSelector: c,
                            skipChild: p,
                            inlineStylesheet: v,
                            maskInputSelector: m,
                            unmaskInputSelector: g,
                            maskAllText: y,
                            maskInputOptions: b,
                            maskTextFn: S,
                            maskInputFn: k,
                            slimDOMOptions: w,
                            dataURLOptions: x,
                            inlineImages: D,
                            recordCanvas: I,
                            preserveWhiteSpace: P,
                            onSerialize: C,
                            onIframeLoad: O,
                            iframeLoadTimeout: U,
                            keepIframeSrcFn: L
                        },
                        Q = !0,
                        tt = !1,
                        te = void 0;
                    try {
                        for (var tr, ti, ta = Array.from(t.childNodes)[Symbol.iterator](); !(Q = (ti = ta.next()).done); Q = !0) {
                            var td = ti.value,
                                tf = tl(td, X);
                            tf && Y.childNodes.push(tf)
                        }
                    } catch (t) {
                        tt = !0, te = t
                    } finally {
                        try {
                            !Q && null != ta.return && ta.return()
                        } finally {
                            if (tt) throw te
                        }
                    }
                    if ((tv = t).nodeType === tv.ELEMENT_NODE && t.shadowRoot) {
                        var t_ = !0,
                            tp = !1,
                            th = void 0;
                        try {
                            for (var tv, tm, tg = Array.from(t.shadowRoot.childNodes)[Symbol.iterator](); !(t_ = (tm = tg.next()).done); t_ = !0) {
                                var ty = tm.value,
                                    tE = tl(ty, X);
                                tE && (tE.isShadow = !0, Y.childNodes.push(tE))
                            }
                        } catch (t) {
                            tp = !0, th = t
                        } finally {
                            try {
                                !t_ && null != tg.return && tg.return()
                            } finally {
                                if (tp) throw th
                            }
                        }
                    }
                }
                return t.parentNode && F(t.parentNode) && (Y.isShadow = !0), Y.type === d.Element && "iframe" === Y.tagName && ! function(t, e, n) {
                    var r, i = t.contentWindow;
                    if (i) {
                        var a = !1;
                        try {
                            r = i.document.readyState
                        } catch (t) {
                            return
                        }
                        if ("complete" !== r) {
                            var o = setTimeout(function() {
                                !a && (e(), a = !0)
                            }, n);
                            t.addEventListener("load", function() {
                                clearTimeout(o), a = !0, e()
                            });
                            return
                        }
                        var s = "about:blank";
                        if (i.location.href !== s || t.src === s || "" === t.src) {
                            setTimeout(e, 0);
                            return
                        }
                        t.addEventListener("load", e)
                    }
                }(t, function() {
                    var e = t.contentDocument;
                    if (e && O) {
                        var n = tl(e, {
                            doc: e,
                            map: r,
                            blockClass: i,
                            blockSelector: a,
                            unblockSelector: o,
                            maskTextClass: s,
                            maskTextSelector: u,
                            unmaskTextSelector: c,
                            skipChild: !1,
                            inlineStylesheet: v,
                            maskInputSelector: m,
                            unmaskInputSelector: g,
                            maskAllText: y,
                            maskInputOptions: b,
                            maskTextFn: S,
                            maskInputFn: k,
                            slimDOMOptions: w,
                            dataURLOptions: x,
                            inlineImages: D,
                            recordCanvas: I,
                            preserveWhiteSpace: P,
                            onSerialize: C,
                            onIframeLoad: O,
                            iframeLoadTimeout: U,
                            keepIframeSrcFn: L
                        });
                        n && O(t, n)
                    }
                }, U), Y
            }

            function td(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document,
                    r = {
                        capture: !0,
                        passive: !0
                    };
                return n.addEventListener(t, e, r),
                    function() {
                        return n.removeEventListener(t, e, r)
                    }
            }(i = p || (p = {}))[i.DomContentLoaded = 0] = "DomContentLoaded", i[i.Load = 1] = "Load", i[i.FullSnapshot = 2] = "FullSnapshot", i[i.IncrementalSnapshot = 3] = "IncrementalSnapshot", i[i.Meta = 4] = "Meta", i[i.Custom = 5] = "Custom", i[i.Plugin = 6] = "Plugin", (a = h || (h = {}))[a.Mutation = 0] = "Mutation", a[a.MouseMove = 1] = "MouseMove", a[a.MouseInteraction = 2] = "MouseInteraction", a[a.Scroll = 3] = "Scroll", a[a.ViewportResize = 4] = "ViewportResize", a[a.Input = 5] = "Input", a[a.TouchMove = 6] = "TouchMove", a[a.MediaInteraction = 7] = "MediaInteraction", a[a.StyleSheetRule = 8] = "StyleSheetRule", a[a.CanvasMutation = 9] = "CanvasMutation", a[a.Font = 10] = "Font", a[a.Log = 11] = "Log", a[a.Drag = 12] = "Drag", a[a.StyleDeclaration = 13] = "StyleDeclaration", (o = v || (v = {}))[o.MouseUp = 0] = "MouseUp", o[o.MouseDown = 1] = "MouseDown", o[o.Click = 2] = "Click", o[o.ContextMenu = 3] = "ContextMenu", o[o.DblClick = 4] = "DblClick", o[o.Focus = 5] = "Focus", o[o.Blur = 6] = "Blur", o[o.TouchStart = 7] = "TouchStart", o[o.TouchMove_Departed = 8] = "TouchMove_Departed", o[o.TouchEnd = 9] = "TouchEnd", o[o.TouchCancel = 10] = "TouchCancel", (s = m || (m = {}))[s["2D"] = 0] = "2D", s[s.WebGL = 1] = "WebGL", s[s.WebGL2 = 2] = "WebGL2", (u = g || (g = {}))[u.Play = 0] = "Play", u[u.Pause = 1] = "Pause", u[u.Seeked = 2] = "Seeked", u[u.VolumeChange = 3] = "VolumeChange", (c = y || (y = {})).Start = "start", c.Pause = "pause", c.Resume = "resume", c.Resize = "resize", c.Finish = "finish", c.FullsnapshotRebuilded = "fullsnapshot-rebuilded", c.LoadStylesheetStart = "load-stylesheet-start", c.LoadStylesheetEnd = "load-stylesheet-end", c.SkipStart = "skip-start", c.SkipEnd = "skip-end", c.MouseInteraction = "mouse-interaction", c.EventCast = "event-cast", c.CustomEvent = "custom-event", c.Flush = "flush", c.StateChange = "state-change", c.PlayBack = "play-back";
            var tf = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
                t_ = {
                    map: {},
                    getId: () => (console.error(tf), -1),
                    getNode: () => (console.error(tf), null),
                    removeNodeFromMap() {
                        console.error(tf)
                    },
                    has: () => (console.error(tf), !1),
                    reset() {
                        console.error(tf)
                    }
                };

            function tp(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = null,
                    i = 0;
                return function(a) {
                    var o = Date.now();
                    !i && !1 === n.leading && (i = o);
                    var s = e - (o - i),
                        u = this,
                        c = arguments;
                    s <= 0 || s > e ? (r && (clearTimeout(r), r = null), i = o, t.apply(u, c)) : !r && !1 !== n.trailing && (r = setTimeout(function() {
                        i = !1 === n.leading ? 0 : Date.now(), r = null, t.apply(u, c)
                    }, s))
                }
            }

            function th(t, e, n, r) {
                var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window,
                    a = i.Object.getOwnPropertyDescriptor(t, e);
                return i.Object.defineProperty(t, e, r ? n : {
                        set(t) {
                            var e = this;
                            setTimeout(function() {
                                n.set.call(e, t)
                            }, 0), a && a.set && a.set.call(this, t)
                        }
                    }),
                    function() {
                        return th(t, e, a || {}, !0)
                    }
            }

            function tv(t, e, n) {
                try {
                    if (!(e in t)) return function() {};
                    var r = t[e],
                        i = n(r);
                    return "function" == typeof i && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
                            __rrweb_original__: {
                                enumerable: !1,
                                value: r
                            }
                        })), t[e] = i,
                        function() {
                            t[e] = r
                        }
                } catch (t) {
                    return function() {}
                }
            }

            function tm() {
                return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
            }

            function tg() {
                return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
            }

            function ty(t, e, n, r) {
                if (!t) return !1;
                if (t.nodeType === t.ELEMENT_NODE) {
                    var i = !1,
                        a = r && t.matches(r);
                    return "string" == typeof e ? i = void 0 !== t.closest ? !a && null !== t.closest("." + e) : !a && t.classList.contains(e) : a || t.classList.forEach(function(t) {
                        e.test(t) && (i = !0)
                    }), !i && n && (i = t.matches(n)), !a && i || ty(t.parentNode, e, n, r)
                }
                return t.nodeType, t.TEXT_NODE, ty(t.parentNode, e, n, r)
            }

            function tE(t) {
                return "__sn" in t && -2 === t.__sn.id
            }
            "undefined" != typeof window && window.Proxy && window.Reflect && (t_ = new Proxy(t_, {
                get: (t, e, n) => ("map" === e && console.error(tf), Reflect.get(t, e, n))
            }));

            function tb(t) {
                return !!t.changedTouches
            }

            function tS(t) {
                return "__sn" in t && t.__sn.type === d.Element && "iframe" === t.__sn.tagName
            }

            function tk(t) {
                return !!(null == t ? void 0 : t.shadowRoot)
            }

            function tw(t) {
                return "__ln" in t
            }
            var tT = function() {
                    function t() {
                        (0, T._)(this, t), this.length = 0, this.head = null
                    }
                    return (0, x._)(t, [{
                        key: "get",
                        value: function(t) {
                            if (t >= this.length) throw Error("Position outside of list range");
                            for (var e = this.head, n = 0; n < t; n++) e = (null == e ? void 0 : e.next) || null;
                            return e
                        }
                    }, {
                        key: "addNode",
                        value: function(t) {
                            var e = {
                                value: t,
                                previous: null,
                                next: null
                            };
                            if (t.__ln = e, t.previousSibling && "__ln" in t.previousSibling) {
                                var n = t.previousSibling.__ln.next;
                                e.next = n, e.previous = t.previousSibling.__ln, t.previousSibling.__ln.next = e, n && (n.previous = e)
                            } else if (t.nextSibling && "__ln" in t.nextSibling && t.nextSibling.__ln.previous) {
                                var r = t.nextSibling.__ln.previous;
                                e.previous = r, e.next = t.nextSibling.__ln, t.nextSibling.__ln.previous = e, r && (r.next = e)
                            } else this.head && (this.head.previous = e), e.next = this.head, this.head = e;
                            this.length++
                        }
                    }, {
                        key: "removeNode",
                        value: function(t) {
                            var e = t.__ln;
                            this.head && (e.previous ? (e.previous.next = e.next, e.next && (e.next.previous = e.previous)) : (this.head = e.next, this.head && (this.head.previous = null)), t.__ln && delete t.__ln, this.length--)
                        }
                    }]), t
                }(),
                tx = function(t, e) {
                    return "".concat(t, "@").concat(e)
                };

            function tR(t) {
                return "__sn" in t
            }
            var tD = function() {
                function t() {
                    var e = this;
                    (0, T._)(this, t), this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = function(t) {
                        t.forEach(e.processMutation), e.emit()
                    }, this.emit = function() {
                        if (!e.frozen && !e.locked) {
                            for (var t = [], n = new tT, r = function(t) {
                                    for (var n = t, r = -2; - 2 === r;) r = (n = n && n.nextSibling) && e.mirror.getId(n);
                                    return r
                                }, i = function(i) {
                                    for (var a, o, s, u, c, l = i.getRootNode ? null === (a = i.getRootNode()) || void 0 === a ? void 0 : a.host : null, d = l; null === (s = null === (o = null == d ? void 0 : d.getRootNode) || void 0 === o ? void 0 : o.call(d)) || void 0 === s ? void 0 : s.host;) d = (null === (c = null === (u = null == d ? void 0 : d.getRootNode) || void 0 === u ? void 0 : u.call(d)) || void 0 === c ? void 0 : c.host) || null;
                                    var f = !e.doc.contains(i) && (!d || !e.doc.contains(d));
                                    if (i.parentNode && !f) {
                                        var _ = F(i.parentNode) ? e.mirror.getId(l) : e.mirror.getId(i.parentNode),
                                            p = r(i);
                                        if (-1 === _ || -1 === p) return n.addNode(i);
                                        var h = tl(i, {
                                            doc: e.doc,
                                            map: e.mirror.map,
                                            blockClass: e.blockClass,
                                            blockSelector: e.blockSelector,
                                            unblockSelector: e.unblockSelector,
                                            maskTextClass: e.maskTextClass,
                                            maskTextSelector: e.maskTextSelector,
                                            unmaskTextSelector: e.unmaskTextSelector,
                                            maskInputSelector: e.maskInputSelector,
                                            unmaskInputSelector: e.unmaskInputSelector,
                                            skipChild: !0,
                                            inlineStylesheet: e.inlineStylesheet,
                                            maskAllText: e.maskAllText,
                                            maskInputOptions: e.maskInputOptions,
                                            maskTextFn: e.maskTextFn,
                                            maskInputFn: e.maskInputFn,
                                            slimDOMOptions: e.slimDOMOptions,
                                            recordCanvas: e.recordCanvas,
                                            inlineImages: e.inlineImages,
                                            onSerialize: function(t) {
                                                tS(t) && e.iframeManager.addIframe(t), tk(i) && e.shadowDomManager.addShadowRoot(i.shadowRoot, document)
                                            },
                                            onIframeLoad: function(t, n) {
                                                e.iframeManager.attachIframe(t, n), e.shadowDomManager.observeAttachShadow(t)
                                            }
                                        });
                                        h && t.push({
                                            parentId: _,
                                            nextId: p,
                                            node: h
                                        })
                                    }
                                }; e.mapRemoves.length;) e.mirror.removeNodeFromMap(e.mapRemoves.shift());
                            var a = !0,
                                o = !1,
                                s = void 0;
                            try {
                                for (var u, c = e.movedSet[Symbol.iterator](); !(a = (u = c.next()).done); a = !0) {
                                    var l = u.value;
                                    (!tI(e.removes, l, e.mirror) || e.movedSet.has(l.parentNode)) && i(l)
                                }
                            } catch (t) {
                                o = !0, s = t
                            } finally {
                                try {
                                    !a && null != c.return && c.return()
                                } finally {
                                    if (o) throw s
                                }
                            }
                            var d = !0,
                                f = !1,
                                _ = void 0;
                            try {
                                for (var p, h = e.addedSet[Symbol.iterator](); !(d = (p = h.next()).done); d = !0) {
                                    var v = p.value;
                                    tC(e.droppedSet, v) || tI(e.removes, v, e.mirror) ? tC(e.movedSet, v) ? i(v) : e.droppedSet.add(v) : i(v)
                                }
                            } catch (t) {
                                f = !0, _ = t
                            } finally {
                                try {
                                    !d && null != h.return && h.return()
                                } finally {
                                    if (f) throw _
                                }
                            }
                            for (var m = null; n.length;) {
                                var g = null;
                                if (m) {
                                    var y = e.mirror.getId(m.value.parentNode),
                                        E = r(m.value); - 1 !== y && -1 !== E && (g = m)
                                }
                                if (!g)
                                    for (var b = n.length - 1; b >= 0; b--) {
                                        var S = n.get(b);
                                        if (S) {
                                            var k = e.mirror.getId(S.value.parentNode),
                                                w = r(S.value);
                                            if (-1 !== k && -1 !== w) {
                                                g = S;
                                                break
                                            }
                                        }
                                    }
                                if (!g) {
                                    for (; n.head;) n.removeNode(n.head.value);
                                    break
                                }
                                m = g.previous, n.removeNode(g.value), i(g.value)
                            }
                            var T = {
                                texts: e.texts.map(function(t) {
                                    return {
                                        id: e.mirror.getId(t.node),
                                        value: t.value
                                    }
                                }).filter(function(t) {
                                    return e.mirror.has(t.id)
                                }),
                                attributes: e.attributes.map(function(t) {
                                    return {
                                        id: e.mirror.getId(t.node),
                                        attributes: t.attributes
                                    }
                                }).filter(function(t) {
                                    return e.mirror.has(t.id)
                                }),
                                removes: e.removes,
                                adds: t
                            };
                            (T.texts.length || T.attributes.length || T.removes.length || T.adds.length) && (e.texts = [], e.attributes = [], e.removes = [], e.addedSet = new Set, e.movedSet = new Set, e.droppedSet = new Set, e.movedMap = {}, e.mutationCb(T))
                        }
                    }, this.processMutation = function(t) {
                        if (!tE(t.target)) switch (t.type) {
                            case "characterData":
                                var n = t.target.textContent;
                                !ty(t.target, e.blockClass, e.blockSelector, e.unblockSelector) && n !== t.oldValue && e.texts.push({
                                    value: tu(t.target, e.maskTextClass, e.maskTextSelector, e.unmaskTextSelector, e.maskAllText) && n ? e.maskTextFn ? e.maskTextFn(n) : n.replace(/[\S]/g, "*") : n,
                                    node: t.target
                                });
                                break;
                            case "attributes":
                                var r = t.target,
                                    i = r.getAttribute(t.attributeName);
                                if ("value" === t.attributeName && (i = H({
                                        input: r,
                                        maskInputSelector: e.maskInputSelector,
                                        unmaskInputSelector: e.unmaskInputSelector,
                                        maskInputOptions: e.maskInputOptions,
                                        tagName: r.tagName,
                                        type: r.getAttribute("type"),
                                        value: i,
                                        maskInputFn: e.maskInputFn
                                    })), ty(t.target, e.blockClass, e.blockSelector, e.unblockSelector) || i === t.oldValue) return;
                                var a = e.attributes.find(function(e) {
                                    return e.node === t.target
                                });
                                if (!a && (a = {
                                        node: t.target,
                                        attributes: {}
                                    }, e.attributes.push(a)), "type" === t.attributeName && "INPUT" === r.tagName && "password" === (t.oldValue || "").toLowerCase() && r.setAttribute("data-rr-is-password", "true"), "style" === t.attributeName) {
                                    var o = e.doc.createElement("span");
                                    t.oldValue && o.setAttribute("style", t.oldValue), (void 0 === a.attributes.style || null === a.attributes.style) && (a.attributes.style = {});
                                    try {
                                        var s = a.attributes.style,
                                            u = !0,
                                            c = !1,
                                            l = void 0;
                                        try {
                                            for (var d, f = Array.from(r.style)[Symbol.iterator](); !(u = (d = f.next()).done); u = !0) {
                                                var _ = d.value,
                                                    p = r.style.getPropertyValue(_),
                                                    h = r.style.getPropertyPriority(_);
                                                (p !== o.style.getPropertyValue(_) || h !== o.style.getPropertyPriority(_)) && ("" === h ? s[_] = p : s[_] = [p, h])
                                            }
                                        } catch (t) {
                                            c = !0, l = t
                                        } finally {
                                            try {
                                                !u && null != f.return && f.return()
                                            } finally {
                                                if (c) throw l
                                            }
                                        }
                                        var v = !0,
                                            m = !1,
                                            g = void 0;
                                        try {
                                            for (var y, E = Array.from(o.style)[Symbol.iterator](); !(v = (y = E.next()).done); v = !0) {
                                                var b = y.value;
                                                "" === r.style.getPropertyValue(b) && (s[b] = !1)
                                            }
                                        } catch (t) {
                                            m = !0, g = t
                                        } finally {
                                            try {
                                                !v && null != E.return && E.return()
                                            } finally {
                                                if (m) throw g
                                            }
                                        }
                                    } catch (t) {
                                        console.warn("[rrweb] Error when parsing update to style attribute:", t)
                                    }
                                } else {
                                    var S = t.target;
                                    a.attributes[t.attributeName] = ts(e.doc, S, S.tagName, t.attributeName, i, e.maskAllText, e.unmaskTextSelector, e.maskTextFn)
                                }
                                break;
                            case "childList":
                                t.addedNodes.forEach(function(n) {
                                    return e.genAdds(n, t.target)
                                }), t.removedNodes.forEach(function(n) {
                                    var r = e.mirror.getId(n),
                                        i = F(t.target) ? e.mirror.getId(t.target.host) : e.mirror.getId(t.target);
                                    !(ty(t.target, e.blockClass, e.blockSelector, e.unblockSelector) || tE(n)) && (e.addedSet.has(n) ? (tN(e.addedSet, n), e.droppedSet.add(n)) : e.addedSet.has(t.target) && -1 === r || function t(e, n) {
                                        if (F(e)) return !1;
                                        var r = n.getId(e);
                                        return !n.has(r) || (!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || t(e.parentNode, n))
                                    }(t.target, e.mirror) || (e.movedSet.has(n) && e.movedMap[tx(r, i)] ? tN(e.movedSet, n) : e.removes.push({
                                        parentId: i,
                                        id: r,
                                        isShadow: !!F(t.target) || void 0
                                    })), e.mapRemoves.push(n))
                                })
                        }
                    }, this.genAdds = function(t, n) {
                        if (!(n && ty(n, e.blockClass, e.blockSelector, e.unblockSelector))) {
                            if ("__sn" in t) {
                                if (tE(t)) return;
                                e.movedSet.add(t);
                                var r = null;
                                if (n && "__sn" in n) r = n.__sn.id;
                                r && (e.movedMap[tx(t.__sn.id, r)] = !0)
                            } else e.addedSet.add(t), e.droppedSet.delete(t);
                            !ty(t, e.blockClass, e.blockSelector, e.unblockSelector) && t.childNodes.forEach(function(t) {
                                return e.genAdds(t)
                            })
                        }
                    }
                }
                return (0, x._)(t, [{
                    key: "init",
                    value: function(t) {
                        var e = this;
                        ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskTextClass", "maskTextSelector", "unmaskTextSelector", "maskInputSelector", "unmaskInputSelector", "inlineStylesheet", "maskAllText", "maskInputOptions", "maskTextFn", "maskInputFn", "recordCanvas", "inlineImages", "slimDOMOptions", "doc", "mirror", "iframeManager", "shadowDomManager", "canvasManager"].forEach(function(n) {
                            e[n] = t[n]
                        })
                    }
                }, {
                    key: "freeze",
                    value: function() {
                        this.frozen = !0, this.canvasManager.freeze()
                    }
                }, {
                    key: "unfreeze",
                    value: function() {
                        this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
                    }
                }, {
                    key: "isFrozen",
                    value: function() {
                        return this.frozen
                    }
                }, {
                    key: "lock",
                    value: function() {
                        this.locked = !0, this.canvasManager.lock()
                    }
                }, {
                    key: "unlock",
                    value: function() {
                        this.locked = !1, this.canvasManager.unlock(), this.emit()
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.shadowDomManager.reset(), this.canvasManager.reset()
                    }
                }]), t
            }();

            function tN(t, e) {
                t.delete(e), e.childNodes.forEach(function(e) {
                    return tN(t, e)
                })
            }

            function tI(t, e, n) {
                var r = e.parentNode;
                if (!r) return !1;
                var i = n.getId(r);
                return !!t.some(function(t) {
                    return t.id === i
                }) || tI(t, r, n)
            }

            function tC(t, e) {
                var n = e.parentNode;
                return !!n && (!!t.has(n) || tC(t, n))
            }
            var tO = function(t) {
                    return function() {
                        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        try {
                            return t.apply(void 0, (0, C._)(n))
                        } catch (t) {
                            try {
                                t.__rrweb__ = !0
                            } catch (t) {}
                            throw t
                        }
                    }
                },
                tA = [];

            function tU(t) {
                try {
                    if ("composedPath" in t) {
                        var e = t.composedPath();
                        if (e.length) return e[0]
                    } else if ("path" in t && t.path.length) return t.path[0]
                } catch (t) {}
                return t && t.target
            }

            function tB(t, e) {
                var n, r, i = new tD;
                tA.push(i), i.init(t);
                var a = window.MutationObserver || window.__rrMutationObserver,
                    o = null === (r = null === (n = null == window ? void 0 : window.Zone) || void 0 === n ? void 0 : n.__symbol__) || void 0 === r ? void 0 : r.call(n, "MutationObserver");
                o && window[o] && (a = window[o]);
                var s = new a(tO(function(e) {
                    (!t.onMutation || !1 !== t.onMutation(e)) && i.processMutations(e)
                }));
                return s.observe(e, {
                    attributes: !0,
                    attributeOldValue: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    childList: !0,
                    subtree: !0
                }), s
            }

            function tL(t) {
                var e = t.scrollCb,
                    n = t.doc,
                    r = t.mirror,
                    i = t.blockClass,
                    a = t.blockSelector,
                    o = t.unblockSelector,
                    s = tp(function(t) {
                        var s = tU(t);
                        if (!(!s || ty(s, i, a, o))) {
                            var u = r.getId(s);
                            if (s === n) {
                                var c = n.scrollingElement || n.documentElement;
                                tO(e)({
                                    id: u,
                                    x: c.scrollLeft,
                                    y: c.scrollTop
                                })
                            } else tO(e)({
                                id: u,
                                x: s.scrollLeft,
                                y: s.scrollTop
                            })
                        }
                    }, t.sampling.scroll || 100);
                return td("scroll", tO(s), n)
            }

            function tM(t, e) {
                var n = Object.assign({}, t);
                return !e && delete n.userTriggered, n
            }
            var tP = ["INPUT", "TEXTAREA", "SELECT"],
                tG = new WeakMap;

            function tY(t) {
                return function(t, e) {
                    if (tz("CSSGroupingRule") && t.parentRule instanceof CSSGroupingRule || tz("CSSMediaRule") && t.parentRule instanceof CSSMediaRule || tz("CSSSupportsRule") && t.parentRule instanceof CSSSupportsRule || tz("CSSConditionRule") && t.parentRule instanceof CSSConditionRule) {
                        var n = Array.from(t.parentRule.cssRules).indexOf(t);
                        e.unshift(n)
                    } else {
                        var r = Array.from(t.parentStyleSheet.cssRules).indexOf(t);
                        e.unshift(r)
                    }
                    return e
                }(t, [])
            }

            function tF(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.doc.defaultView;
                if (!n) return function() {};
                y = t, E = e, b = y.mutationCb, S = y.mousemoveCb, k = y.mouseInteractionCb, w = y.scrollCb, T = y.viewportResizeCb, x = y.inputCb, R = y.mediaInteractionCb, D = y.styleSheetRuleCb, N = y.styleDeclarationCb, O = y.canvasMutationCb, A = y.fontCb, y.mutationCb = function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    E.mutation && E.mutation.apply(E, (0, C._)(e)), b.apply(void 0, (0, C._)(e))
                }, y.mousemoveCb = function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    E.mousemove && E.mousemove.apply(E, (0, C._)(e)), S.apply(void 0, (0, C._)(e))
                }, y.mouseInteractionCb = function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    E.mouseInteraction && E.mouseInteraction.apply(E, (0, C._)(e)), k.apply(void 0, (0, C._)(e))
                }, y.scrollCb = function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    E.scroll && E.scroll.apply(E, (0, C._)(e)), w.apply(void 0, (0, C._)(e))
                }, y.viewportResizeCb = function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    E.viewportResize && E.viewportResize.apply(E, (0, C._)(e)), T.apply(void 0, (0, C._)(e))
                }, y.inputCb = function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    E.input && E.input.apply(E, (0, C._)(e)), x.apply(void 0, (0, C._)(e))
                }, y.mediaInteractionCb = function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    E.mediaInteaction && E.mediaInteaction.apply(E, (0, C._)(e)), R.apply(void 0, (0, C._)(e))
                }, y.styleSheetRuleCb = function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    E.styleSheetRule && E.styleSheetRule.apply(E, (0, C._)(e)), D.apply(void 0, (0, C._)(e))
                }, y.styleDeclarationCb = function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    E.styleDeclaration && E.styleDeclaration.apply(E, (0, C._)(e)), N.apply(void 0, (0, C._)(e))
                }, y.canvasMutationCb = function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    E.canvasMutation && E.canvasMutation.apply(E, (0, C._)(e)), O.apply(void 0, (0, C._)(e))
                }, y.fontCb = function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    E.font && E.font.apply(E, (0, C._)(e)), A.apply(void 0, (0, C._)(e))
                };
                var r = tB(t, t.doc),
                    i = function(t) {
                        var e, n = t.mousemoveCb,
                            r = t.sampling,
                            i = t.doc,
                            a = t.mirror;
                        if (!1 === r.mousemove) return function() {};
                        var o = "number" == typeof r.mousemove ? r.mousemove : 50,
                            s = "number" == typeof r.mousemoveCallback ? r.mousemoveCallback : 500,
                            u = [],
                            c = tp(function(t) {
                                var r = Date.now() - e;
                                tO(n)(u.map(function(t) {
                                    return t.timeOffset -= r, t
                                }), t), u = [], e = null
                            }, s),
                            l = tp(function(t) {
                                var n = tU(t),
                                    r = tb(t) ? t.changedTouches[0] : t,
                                    i = r.clientX,
                                    o = r.clientY;
                                !e && (e = Date.now()), u.push({
                                    x: i,
                                    y: o,
                                    id: a.getId(n),
                                    timeOffset: Date.now() - e
                                }), c("undefined" != typeof DragEvent && t instanceof DragEvent ? h.Drag : t instanceof MouseEvent ? h.MouseMove : h.TouchMove)
                            }, o, {
                                trailing: !1
                            }),
                            d = [td("mousemove", tO(l), i), td("touchmove", tO(l), i), td("drag", tO(l), i)];
                        return tO(function() {
                            d.forEach(function(t) {
                                return t()
                            })
                        })
                    }(t),
                    a = function(t) {
                        var e = t.mouseInteractionCb,
                            n = t.doc,
                            r = t.mirror,
                            i = t.blockClass,
                            a = t.blockSelector,
                            o = t.unblockSelector,
                            s = t.sampling;
                        if (!1 === s.mouseInteraction) return function() {};
                        var u = !0 === s.mouseInteraction || void 0 === s.mouseInteraction ? {} : s.mouseInteraction,
                            c = [];
                        return Object.keys(v).filter(function(t) {
                            return Number.isNaN(Number(t)) && !t.endsWith("_Departed") && !1 !== u[t]
                        }).forEach(function(t) {
                            var s, u = t.toLowerCase();
                            var l = tO((s = t, function(t) {
                                var n = tU(t);
                                if (!ty(n, i, a, o)) {
                                    var u = tb(t) ? t.changedTouches[0] : t;
                                    if (u) {
                                        var c = r.getId(n),
                                            l = u.clientX,
                                            d = u.clientY;
                                        tO(e)({
                                            type: v[s],
                                            id: c,
                                            x: l,
                                            y: d
                                        })
                                    }
                                }
                            }));
                            c.push(td(u, l, n))
                        }), tO(function() {
                            c.forEach(function(t) {
                                return t()
                            })
                        })
                    }(t),
                    o = tL(t);
                var s = (U = t.viewportResizeCb, B = -1, L = -1, M = tp(function() {
                        var t = tm(),
                            e = tg();
                        (B !== t || L !== e) && (tO(U)({
                            width: Number(e),
                            height: Number(t)
                        }), B = t, L = e)
                    }, 200), td("resize", tO(M), window)),
                    u = function(t) {
                        var e = t.inputCb,
                            n = t.doc,
                            r = t.mirror,
                            i = t.blockClass,
                            a = t.blockSelector,
                            o = t.unblockSelector,
                            s = t.ignoreClass,
                            u = t.ignoreSelector,
                            c = t.maskInputSelector,
                            l = t.unmaskInputSelector,
                            d = t.maskInputOptions,
                            f = t.maskInputFn,
                            _ = t.sampling,
                            p = t.userTriggeredOnInput;

                        function h(t) {
                            var e = tU(t),
                                r = e && e.tagName,
                                _ = t.isTrusted;
                            if ("OPTION" === r && (e = e.parentElement), !(!e || !r || 0 > tP.indexOf(r) || ty(e, i, a, o))) {
                                var h = e,
                                    m = j(h);
                                if (!(h.classList.contains(s) || u && h.matches(u))) {
                                    var g, y, E, b, S = q(h, r, m),
                                        k = !1;
                                    if (("radio" === m || "checkbox" === m) && (k = e.checked), y = (g = {
                                            maskInputOptions: d,
                                            maskInputSelector: c,
                                            tagName: r,
                                            type: m
                                        }).tagName, E = g.type, b = g.maskInputOptions, g.maskInputSelector || z({
                                            maskInputOptions: b,
                                            tagName: y,
                                            type: E
                                        })) S = H({
                                        input: h,
                                        maskInputOptions: d,
                                        maskInputSelector: c,
                                        unmaskInputSelector: l,
                                        tagName: r,
                                        type: m,
                                        value: S,
                                        maskInputFn: f
                                    });
                                    v(e, tO(tM)({
                                        text: S,
                                        isChecked: k,
                                        userTriggered: _
                                    }, p));
                                    var w = e.name;
                                    "radio" === m && w && k && n.querySelectorAll('input[type="radio"][name="'.concat(w, '"]')).forEach(function(t) {
                                        if (t !== e) {
                                            var n = H({
                                                input: t,
                                                maskInputOptions: d,
                                                maskInputSelector: c,
                                                unmaskInputSelector: l,
                                                tagName: r,
                                                type: m,
                                                value: q(t, r, m),
                                                maskInputFn: f
                                            });
                                            v(t, tO(tM)({
                                                text: n,
                                                isChecked: !k,
                                                userTriggered: !1
                                            }, p))
                                        }
                                    })
                                }
                            }
                        }

                        function v(t, n) {
                            var i = tG.get(t);
                            if (!i || i.text !== n.text || i.isChecked !== n.isChecked) {
                                tG.set(t, n);
                                var a = r.getId(t);
                                e(Object.assign(Object.assign({}, n), {
                                    id: a
                                }))
                            }
                        }
                        var m = ("last" === _.input ? ["change"] : ["input", "change"]).map(function(t) {
                                return td(t, tO(h), n)
                            }),
                            g = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value"),
                            y = [
                                [HTMLInputElement.prototype, "value"],
                                [HTMLInputElement.prototype, "checked"],
                                [HTMLSelectElement.prototype, "value"],
                                [HTMLTextAreaElement.prototype, "value"],
                                [HTMLSelectElement.prototype, "selectedIndex"],
                                [HTMLOptionElement.prototype, "selected"]
                            ];
                        return g && g.set && m.push.apply(m, (0, C._)(y.map(function(t) {
                            return th(t[0], t[1], {
                                set() {
                                    tO(h)({
                                        target: this
                                    })
                                }
                            })
                        }))), tO(function() {
                            m.forEach(function(t) {
                                return t()
                            })
                        })
                    }(t);
                var c = (G = (P = t).mediaInteractionCb, Y = P.blockClass, F = P.blockSelector, W = P.unblockSelector, Z = P.mirror, V = P.sampling, J = [td("play", (K = function(t) {
                        return tp(tO(function(e) {
                            var n = tU(e);
                            if (!(!n || ty(n, Y, F, W))) {
                                var r = n.currentTime,
                                    i = n.volume,
                                    a = n.muted;
                                G({
                                    type: t,
                                    id: Z.getId(n),
                                    currentTime: r,
                                    volume: i,
                                    muted: a
                                })
                            }
                        }), V.media || 500)
                    })(0)), td("pause", K(1)), td("seeked", K(2)), td("volumechange", K(3))], tO(function() {
                        J.forEach(function(t) {
                            return t()
                        })
                    })),
                    l = function(t, e) {
                        var n = t.styleSheetRuleCb,
                            r = t.mirror,
                            i = e.win;
                        if (!i.CSSStyleSheet || !i.CSSStyleSheet.prototype) return function() {};
                        var a = i.CSSStyleSheet.prototype.insertRule;
                        i.CSSStyleSheet.prototype.insertRule = new Proxy(a, {
                            apply: tO(function(t, e, i) {
                                var a = (0, I._)(i, 2),
                                    o = a[0],
                                    s = a[1],
                                    u = r.getId(e.ownerNode);
                                return -1 !== u && n({
                                    id: u,
                                    adds: [{
                                        rule: o,
                                        index: s
                                    }]
                                }), t.apply(e, i)
                            })
                        });
                        var o = i.CSSStyleSheet.prototype.deleteRule;
                        i.CSSStyleSheet.prototype.deleteRule = new Proxy(o, {
                            apply: tO(function(t, e, i) {
                                var a = (0, I._)(i, 1)[0],
                                    o = r.getId(e.ownerNode);
                                return -1 !== o && n({
                                    id: o,
                                    removes: [{
                                        index: a
                                    }]
                                }), t.apply(e, i)
                            })
                        });
                        var s = {};
                        tH("CSSGroupingRule") ? s.CSSGroupingRule = i.CSSGroupingRule : (tH("CSSMediaRule") && (s.CSSMediaRule = i.CSSMediaRule), tH("CSSConditionRule") && (s.CSSConditionRule = i.CSSConditionRule), tH("CSSSupportsRule") && (s.CSSSupportsRule = i.CSSSupportsRule));
                        var u = {};
                        return Object.entries(s).forEach(function(t) {
                            var e = (0, I._)(t, 2),
                                i = e[0],
                                a = e[1];
                            u[i] = {
                                insertRule: a.prototype.insertRule,
                                deleteRule: a.prototype.deleteRule
                            }, a.prototype.insertRule = new Proxy(u[i].insertRule, {
                                apply: tO(function(t, e, i) {
                                    var a = (0, I._)(i, 2),
                                        o = a[0],
                                        s = a[1],
                                        u = r.getId(e.parentStyleSheet.ownerNode);
                                    return -1 !== u && n({
                                        id: u,
                                        adds: [{
                                            rule: o,
                                            index: (0, C._)(tY(e)).concat([s || 0])
                                        }]
                                    }), t.apply(e, i)
                                })
                            }), a.prototype.deleteRule = new Proxy(u[i].deleteRule, {
                                apply: tO(function(t, e, i) {
                                    var a = (0, I._)(i, 1)[0],
                                        o = r.getId(e.parentStyleSheet.ownerNode);
                                    return -1 !== o && n({
                                        id: o,
                                        removes: [{
                                            index: (0, C._)(tY(e)).concat([a])
                                        }]
                                    }), t.apply(e, i)
                                })
                            })
                        }), tO(function() {
                            i.CSSStyleSheet.prototype.insertRule = a, i.CSSStyleSheet.prototype.deleteRule = o, Object.entries(s).forEach(function(t) {
                                var e = (0, I._)(t, 2),
                                    n = e[0],
                                    r = e[1];
                                r.prototype.insertRule = u[n].insertRule, r.prototype.deleteRule = u[n].deleteRule
                            })
                        })
                    }(t, {
                        win: n
                    });
                var d = (X = t, $ = {
                        win: n
                    }, Q = X.styleDeclarationCb, tt = X.mirror, tn = (te = $.win).CSSStyleDeclaration.prototype.setProperty, te.CSSStyleDeclaration.prototype.setProperty = new Proxy(tn, {
                        apply: tO(function(t, e, n) {
                            var r, i, a = (0, I._)(n, 3),
                                o = a[0],
                                s = a[1],
                                u = a[2],
                                c = tt.getId(null === (i = null === (r = e.parentRule) || void 0 === r ? void 0 : r.parentStyleSheet) || void 0 === i ? void 0 : i.ownerNode);
                            return -1 !== c && Q({
                                id: c,
                                set: {
                                    property: o,
                                    value: s,
                                    priority: u
                                },
                                index: tY(e.parentRule)
                            }), t.apply(e, n)
                        })
                    }), tr = te.CSSStyleDeclaration.prototype.removeProperty, te.CSSStyleDeclaration.prototype.removeProperty = new Proxy(tr, {
                        apply: tO(function(t, e, n) {
                            var r, i, a = (0, I._)(n, 1)[0],
                                o = tt.getId(null === (i = null === (r = e.parentRule) || void 0 === r ? void 0 : r.parentStyleSheet) || void 0 === i ? void 0 : i.ownerNode);
                            return -1 !== o && Q({
                                id: o,
                                remove: {
                                    property: a
                                },
                                index: tY(e.parentRule)
                            }), t.apply(e, n)
                        })
                    }), tO(function() {
                        te.CSSStyleDeclaration.prototype.setProperty = tn, te.CSSStyleDeclaration.prototype.removeProperty = tr
                    })),
                    f = t.collectFonts ? function(t) {
                        var e = t.fontCb,
                            n = t.doc,
                            r = n.defaultView;
                        if (!r) return function() {};
                        var i = [],
                            a = new WeakMap,
                            o = r.FontFace;
                        r.FontFace = function(t, e, n) {
                            var r = new o(t, e, n);
                            return a.set(r, {
                                family: t,
                                buffer: "string" != typeof e,
                                descriptors: n,
                                fontSource: "string" == typeof e ? e : JSON.stringify(Array.from(new Uint8Array(e)))
                            }), r
                        };
                        var s = tv(n.fonts, "add", function(t) {
                            return function(n) {
                                return setTimeout(function() {
                                    var t = a.get(n);
                                    t && (e(t), a.delete(n))
                                }, 0), t.apply(this, [n])
                            }
                        });
                        return i.push(function() {
                            r.FontFace = o
                        }), i.push(s), tO(function() {
                            i.forEach(function(t) {
                                return t()
                            })
                        })
                    }(t) : function() {},
                    _ = [],
                    p = !0,
                    m = !1,
                    g = void 0;
                try {
                    for (var y, E, b, S, k, w, T, x, R, D, N, O, A, U, B, L, M, P, G, Y, F, W, Z, V, K, J, X, $, Q, tt, te, tn, tr, ti, ta = t.plugins[Symbol.iterator](); !(p = (ti = ta.next()).done); p = !0) {
                        var to = ti.value;
                        _.push(to.observer(to.callback, n, to.options))
                    }
                } catch (t) {
                    m = !0, g = t
                } finally {
                    try {
                        !p && null != ta.return && ta.return()
                    } finally {
                        if (m) throw g
                    }
                }
                return tO(function() {
                    tA.forEach(function(t) {
                        return t.reset()
                    }), r.disconnect(), i(), a(), o(), s(), u(), c();
                    try {
                        l(), d()
                    } catch (t) {}
                    f(), _.forEach(function(t) {
                        return t()
                    })
                })
            }

            function tz(t) {
                return void 0 !== window[t]
            }

            function tH(t) {
                return !!(void 0 !== window[t] && window[t].prototype && "insertRule" in window[t].prototype && "deleteRule" in window[t].prototype)
            }
            for (var tW = function() {
                    function t(e) {
                        (0, T._)(this, t), this.iframes = new WeakMap, this.mutationCb = e.mutationCb
                    }
                    return (0, x._)(t, [{
                        key: "addIframe",
                        value: function(t) {
                            this.iframes.set(t, !0)
                        }
                    }, {
                        key: "addLoadListener",
                        value: function(t) {
                            this.loadListener = t
                        }
                    }, {
                        key: "attachIframe",
                        value: function(t, e) {
                            var n;
                            this.mutationCb({
                                adds: [{
                                    parentId: t.__sn.id,
                                    nextId: null,
                                    node: e
                                }],
                                removes: [],
                                texts: [],
                                attributes: [],
                                isAttachIframe: !0
                            }), null === (n = this.loadListener) || void 0 === n || n.call(this, t)
                        }
                    }]), t
                }(), tj = function() {
                    function t(e) {
                        (0, T._)(this, t), this.restorePatches = [], this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror;
                        var n = this;
                        this.restorePatches.push(tv(HTMLElement.prototype, "attachShadow", function(t) {
                            return function() {
                                var e = t.apply(this, arguments);
                                return this.shadowRoot && n.addShadowRoot(this.shadowRoot, this.ownerDocument), e
                            }
                        }))
                    }
                    return (0, x._)(t, [{
                        key: "addShadowRoot",
                        value: function(t, e) {
                            tB(Object.assign(Object.assign({}, this.bypassOptions), {
                                doc: e,
                                mutationCb: this.mutationCb,
                                mirror: this.mirror,
                                shadowDomManager: this
                            }), t), tL(Object.assign(Object.assign({}, this.bypassOptions), {
                                scrollCb: this.scrollCb,
                                doc: t,
                                mirror: this.mirror
                            }))
                        }
                    }, {
                        key: "observeAttachShadow",
                        value: function(t) {
                            if (t.contentWindow) {
                                var e = this;
                                this.restorePatches.push(tv(t.contentWindow.HTMLElement.prototype, "attachShadow", function(n) {
                                    return function() {
                                        var r = n.apply(this, arguments);
                                        return this.shadowRoot && e.addShadowRoot(this.shadowRoot, t.contentDocument), r
                                    }
                                }))
                            }
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.restorePatches.forEach(function(t) {
                                return t()
                            })
                        }
                    }]), t
                }(), tq = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", tZ = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), tV = 0; tV < tq.length; tV++) tZ[tq.charCodeAt(tV)] = tV;
            var tK = function(t) {
                    var e, n = new Uint8Array(t),
                        r = n.length,
                        i = "";
                    for (e = 0; e < r; e += 3) i += tq[n[e] >> 2] + tq[(3 & n[e]) << 4 | n[e + 1] >> 4] + tq[(15 & n[e + 1]) << 2 | n[e + 2] >> 6] + tq[63 & n[e + 2]];
                    return r % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : r % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i
                },
                tJ = new Map,
                tX = function(t, e, n) {
                    if (t && (t$(t, e) || "object" == typeof t)) {
                        var r, i, a, o = t.constructor.name;
                        var s = (r = n, i = o, !(a = tJ.get(r)) && (a = new Map, tJ.set(r, a)), !a.has(i) && a.set(i, []), a.get(i)),
                            u = s.indexOf(t);
                        return -1 === u && (u = s.length, s.push(t)), u
                    }
                },
                t$ = function(t, e) {
                    return !!["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter(function(t) {
                        return "function" == typeof e[t]
                    }).find(function(n) {
                        return t instanceof e[n]
                    })
                };

            function tQ(t, e, n, r, i, a, o, s) {
                var u = [],
                    c = Object.getOwnPropertyNames(t),
                    l = !0,
                    d = !1,
                    f = void 0;
                try {
                    for (var _, p = c[Symbol.iterator](); !(l = (_ = p.next()).done); l = !0) ! function() {
                        var c = _.value;
                        try {
                            if ("function" != typeof t[c]) return "continue";
                            var l = tv(t, c, function(u) {
                                return function() {
                                    for (var l = arguments.length, d = Array(l), f = 0; f < l; f++) d[f] = arguments[f];
                                    var _ = u.apply(this, d);
                                    if (tX(_, s, t), !ty(this.canvas, r, a, i)) {
                                        o.getId(this.canvas);
                                        var p, h, v, m = (p = (0, C._)(d), h = s, v = t, (0, C._)(p).map(function(t) {
                                            return function t(e, n, r) {
                                                if (e instanceof Array) return e.map(function(e) {
                                                    return t(e, n, r)
                                                });
                                                if (null === e);
                                                else if (e instanceof Float32Array || e instanceof Float64Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Int8Array || e instanceof Uint8ClampedArray) return {
                                                    rr_type: e.constructor.name,
                                                    args: [Object.values(e)]
                                                };
                                                else if (e instanceof ArrayBuffer) {
                                                    var i = e.constructor.name;
                                                    return {
                                                        rr_type: i,
                                                        base64: tK(e)
                                                    }
                                                } else if (e instanceof DataView) return {
                                                    rr_type: e.constructor.name,
                                                    args: [t(e.buffer, n, r), e.byteOffset, e.byteLength]
                                                };
                                                else if (e instanceof HTMLImageElement) {
                                                    var a = e.constructor.name;
                                                    return {
                                                        rr_type: a,
                                                        src: e.src
                                                    }
                                                } else if (e instanceof ImageData) return {
                                                    rr_type: e.constructor.name,
                                                    args: [t(e.data, n, r), e.width, e.height]
                                                };
                                                else if (t$(e, n) || "object" == typeof e) return {
                                                    rr_type: e.constructor.name,
                                                    index: tX(e, n, r)
                                                };
                                                return e
                                            }(t, h, v)
                                        }));
                                        n(this.canvas, {
                                            type: e,
                                            property: c,
                                            args: m
                                        })
                                    }
                                    return _
                                }
                            });
                            u.push(l)
                        } catch (r) {
                            var d = th(t, c, {
                                set(t) {
                                    n(this.canvas, {
                                        type: e,
                                        property: c,
                                        args: [t],
                                        setter: !0
                                    })
                                }
                            });
                            u.push(d)
                        }
                    }()
                } catch (t) {
                    d = !0, f = t
                } finally {
                    try {
                        !l && null != p.return && p.return()
                    } finally {
                        if (d) throw f
                    }
                }
                return u
            }
            var t0 = function() {
                function t(e) {
                    (0, T._)(this, t), this.pendingCanvasMutations = new Map, this.rafStamps = {
                        latestId: 0,
                        invokeId: null
                    }, this.frozen = !1, this.locked = !1, this.processMutation = function(t, e) {
                        (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), !this.pendingCanvasMutations.has(t) && this.pendingCanvasMutations.set(t, []), this.pendingCanvasMutations.get(t).push(e)
                    }, this.mutationCb = e.mutationCb, this.mirror = e.mirror, !0 === e.recordCanvas && this.initCanvasMutationObserver(e.win, e.blockClass, e.blockSelector, e.unblockSelector)
                }
                return (0, x._)(t, [{
                    key: "reset",
                    value: function() {
                        this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers()
                    }
                }, {
                    key: "freeze",
                    value: function() {
                        this.frozen = !0
                    }
                }, {
                    key: "unfreeze",
                    value: function() {
                        this.frozen = !1
                    }
                }, {
                    key: "lock",
                    value: function() {
                        this.locked = !0
                    }
                }, {
                    key: "unlock",
                    value: function() {
                        this.locked = !1
                    }
                }, {
                    key: "initCanvasMutationObserver",
                    value: function(t, e, n, r) {
                        this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
                        var i, a, o, s, u, c, l, d = function(t, e, n, r) {
                                var i = [];
                                try {
                                    var a = tv(t.HTMLCanvasElement.prototype, "getContext", function(t) {
                                        return function(i) {
                                            for (var a = arguments.length, o = Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++) o[s - 1] = arguments[s];
                                            return !ty(this, e, n, r) && !("__context" in this) && (this.__context = i), t.apply(this, [i].concat((0, C._)(o)))
                                        }
                                    });
                                    i.push(a)
                                } catch (t) {
                                    console.error("failed to patch HTMLCanvasElement.prototype.getContext")
                                }
                                return function() {
                                    i.forEach(function(t) {
                                        return t()
                                    })
                                }
                            }(t, e, r, n),
                            f = function(t, e, n, r, i, a) {
                                var o = [],
                                    s = Object.getOwnPropertyNames(e.CanvasRenderingContext2D.prototype),
                                    u = !0,
                                    c = !1,
                                    l = void 0;
                                try {
                                    for (var d, f = s[Symbol.iterator](); !(u = (d = f.next()).done); u = !0) ! function() {
                                        var a = d.value;
                                        try {
                                            if ("function" != typeof e.CanvasRenderingContext2D.prototype[a]) return "continue";
                                            var s = tv(e.CanvasRenderingContext2D.prototype, a, function(e) {
                                                return function() {
                                                    for (var o = arguments.length, s = Array(o), u = 0; u < o; u++) s[u] = arguments[u];
                                                    var c = this;
                                                    return !ty(this.canvas, n, i, r) && setTimeout(function() {
                                                        var e = (0, C._)(s);
                                                        if ("drawImage" === a && e[0] && e[0] instanceof HTMLCanvasElement) {
                                                            var n = e[0],
                                                                r = n.getContext("2d"),
                                                                i = null == r ? void 0 : r.getImageData(0, 0, n.width, n.height),
                                                                o = null == i ? void 0 : i.data;
                                                            e[0] = JSON.stringify(o)
                                                        }
                                                        t(c.canvas, {
                                                            type: m["2D"],
                                                            property: a,
                                                            args: e
                                                        })
                                                    }, 0), e.apply(this, s)
                                                }
                                            });
                                            o.push(s)
                                        } catch (n) {
                                            var u = th(e.CanvasRenderingContext2D.prototype, a, {
                                                set(e) {
                                                    t(this.canvas, {
                                                        type: m["2D"],
                                                        property: a,
                                                        args: [e],
                                                        setter: !0
                                                    })
                                                }
                                            });
                                            o.push(u)
                                        }
                                    }()
                                } catch (t) {
                                    c = !0, l = t
                                } finally {
                                    try {
                                        !u && null != f.return && f.return()
                                    } finally {
                                        if (c) throw l
                                    }
                                }
                                return function() {
                                    o.forEach(function(t) {
                                        return t()
                                    })
                                }
                            }(this.processMutation.bind(this), t, e, r, n, this.mirror);
                        var _ = (i = this.processMutation.bind(this), a = t, o = e, s = r, u = n, c = this.mirror, (l = []).push.apply(l, (0, C._)(tQ(a.WebGLRenderingContext.prototype, m.WebGL, i, o, s, u, c, a))), void 0 !== a.WebGL2RenderingContext && l.push.apply(l, (0, C._)(tQ(a.WebGL2RenderingContext.prototype, m.WebGL2, i, o, s, u, c, a))), function() {
                            l.forEach(function(t) {
                                return t()
                            })
                        });
                        this.resetObservers = function() {
                            d(), f(), _()
                        }
                    }
                }, {
                    key: "startPendingCanvasMutationFlusher",
                    value: function() {
                        var t = this;
                        requestAnimationFrame(function() {
                            return t.flushPendingCanvasMutations()
                        })
                    }
                }, {
                    key: "startRAFTimestamping",
                    value: function() {
                        var t = this,
                            e = function(n) {
                                t.rafStamps.latestId = n, requestAnimationFrame(e)
                            };
                        requestAnimationFrame(e)
                    }
                }, {
                    key: "flushPendingCanvasMutations",
                    value: function() {
                        var t = this;
                        this.pendingCanvasMutations.forEach(function(e, n) {
                            var r = t.mirror.getId(n);
                            t.flushPendingCanvasMutationFor(n, r)
                        }), requestAnimationFrame(function() {
                            return t.flushPendingCanvasMutations()
                        })
                    }
                }, {
                    key: "flushPendingCanvasMutationFor",
                    value: function(t, e) {
                        if (!this.frozen && !this.locked) {
                            var n = this.pendingCanvasMutations.get(t);
                            if (n && -1 !== e) {
                                var r = n.map(function(t) {
                                        return function(t, e) {
                                            var n = {};
                                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && 0 > e.indexOf(r) && (n[r] = t[r]);
                                            if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                                                for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++) 0 > e.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
                                            return n
                                        }(t, ["type"])
                                    }),
                                    i = n[0].type;
                                this.mutationCb({
                                    id: e,
                                    type: i,
                                    commands: r
                                }), this.pendingCanvasMutations.delete(t)
                            }
                        }
                    }
                }]), t
            }();

            function t1(t) {
                return Object.assign(Object.assign({}, t), {
                    timestamp: Date.now()
                })
            }
            var t2 = {
                map: {},
                getId: t => t && t.__sn ? t.__sn.id : -1,
                getNode(t) {
                    return this.map[t] || null
                },
                removeNodeFromMap(t) {
                    var e = this,
                        n = t.__sn && t.__sn.id;
                    delete this.map[n], t.childNodes && t.childNodes.forEach(function(t) {
                        return e.removeNodeFromMap(t)
                    })
                },
                has(t) {
                    return this.map.hasOwnProperty(t)
                },
                reset() {
                    this.map = {}
                }
            };

            function t3() {
                var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.emit,
                    r = e.checkoutEveryNms,
                    i = e.checkoutEveryNth,
                    a = e.blockClass,
                    o = void 0 === a ? "rr-block" : a,
                    s = e.blockSelector,
                    u = void 0 === s ? null : s,
                    c = e.unblockSelector,
                    l = void 0 === c ? null : c,
                    d = e.ignoreClass,
                    f = void 0 === d ? "rr-ignore" : d,
                    _ = e.ignoreSelector,
                    v = void 0 === _ ? null : _,
                    m = e.maskTextClass,
                    g = void 0 === m ? "rr-mask" : m,
                    y = e.maskTextSelector,
                    S = void 0 === y ? null : y,
                    k = e.maskInputSelector,
                    w = void 0 === k ? null : k,
                    T = e.unmaskTextSelector,
                    x = void 0 === T ? null : T,
                    R = e.unmaskInputSelector,
                    D = void 0 === R ? null : R,
                    N = e.inlineStylesheet,
                    C = void 0 === N || N,
                    O = e.maskAllText,
                    A = void 0 !== O && O,
                    U = e.maskAllInputs,
                    B = e.maskInputOptions,
                    L = e.slimDOMOptions,
                    M = e.maskInputFn,
                    P = e.maskTextFn,
                    G = e.hooks,
                    Y = e.packFn,
                    F = e.sampling,
                    z = void 0 === F ? {} : F,
                    H = e.mousemoveWait,
                    W = e.recordCanvas,
                    j = void 0 !== W && W,
                    q = e.userTriggeredOnInput,
                    Z = void 0 !== q && q,
                    V = e.collectFonts,
                    K = void 0 !== V && V,
                    J = e.inlineImages,
                    X = void 0 !== J && J,
                    $ = e.plugins,
                    Q = e.keepIframeSrcFn,
                    tt = void 0 === Q ? function() {
                        return !1
                    } : Q,
                    te = e.onMutation;
                if (!n) throw Error("emit function is required");
                void 0 !== H && void 0 === z.mousemove && (z.mousemove = H);
                var tn = !0 === U ? {
                        color: !0,
                        date: !0,
                        "datetime-local": !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0,
                        textarea: !0,
                        select: !0,
                        radio: !0,
                        checkbox: !0
                    } : void 0 !== B ? B : {},
                    tr = !0 === L || "all" === L ? {
                        script: !0,
                        comment: !0,
                        headFavicon: !0,
                        headWhitespace: !0,
                        headMetaSocial: !0,
                        headMetaRobots: !0,
                        headMetaHttpEquiv: !0,
                        headMetaVerification: !0,
                        headMetaAuthorship: "all" === L,
                        headMetaDescKeywords: "all" === L
                    } : L || {};
                ! function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                    "NodeList" in t && !t.NodeList.prototype.forEach && (t.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in t && !t.DOMTokenList.prototype.forEach && (t.DOMTokenList.prototype.forEach = Array.prototype.forEach), !Node.prototype.contains && (Node.prototype.contains = function(t) {
                        if (!(0 in arguments)) throw TypeError("1 argument is required");
                        do
                            if (this === t) return !0; while (t = t && t.parentNode);
                        return !1
                    })
                }();
                var ti = 0,
                    ta = function(t) {
                        var e = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var i, a = ($ || [])[Symbol.iterator](); !(e = (i = a.next()).done); e = !0) {
                                var o = i.value;
                                o.eventProcessor && (t = o.eventProcessor(t))
                            }
                        } catch (t) {
                            n = !0, r = t
                        } finally {
                            try {
                                !e && null != a.return && a.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                        return Y && (t = Y(t)), t
                    };
                E = function(e, a) {
                    var o;
                    if ((null === (o = tA[0]) || void 0 === o ? void 0 : o.isFrozen()) && e.type !== p.FullSnapshot && !(e.type === p.IncrementalSnapshot && e.data.source === h.Mutation) && tA.forEach(function(t) {
                            return t.unfreeze()
                        }), n(ta(e), a), e.type === p.FullSnapshot) t = e, ti = 0;
                    else if (e.type === p.IncrementalSnapshot) {
                        if (e.data.source === h.Mutation && e.data.isAttachIframe) return;
                        ti++;
                        var s = i && ti >= i,
                            u = r && e.timestamp - t.timestamp > r;
                        (s || u) && b(!0)
                    }
                };
                var to = function(t) {
                        E(t1({
                            type: p.IncrementalSnapshot,
                            data: Object.assign({
                                source: h.Mutation
                            }, t)
                        }))
                    },
                    ts = function(t) {
                        return E(t1({
                            type: p.IncrementalSnapshot,
                            data: Object.assign({
                                source: h.Scroll
                            }, t)
                        }))
                    },
                    tu = function(t) {
                        return E(t1({
                            type: p.IncrementalSnapshot,
                            data: Object.assign({
                                source: h.CanvasMutation
                            }, t)
                        }))
                    },
                    tc = new tW({
                        mutationCb: to
                    }),
                    tf = new t0({
                        recordCanvas: j,
                        mutationCb: tu,
                        win: window,
                        blockClass: o,
                        blockSelector: u,
                        unblockSelector: l,
                        mirror: t2
                    }),
                    t_ = new tj({
                        mutationCb: to,
                        scrollCb: ts,
                        bypassOptions: {
                            onMutation: te,
                            blockClass: o,
                            blockSelector: u,
                            unblockSelector: l,
                            maskTextClass: g,
                            maskTextSelector: S,
                            unmaskTextSelector: x,
                            maskInputSelector: w,
                            unmaskInputSelector: D,
                            inlineStylesheet: C,
                            maskAllText: A,
                            maskInputOptions: tn,
                            maskTextFn: P,
                            maskInputFn: M,
                            recordCanvas: j,
                            inlineImages: X,
                            sampling: z,
                            slimDOMOptions: tr,
                            iframeManager: tc,
                            canvasManager: tf
                        },
                        mirror: t2
                    });
                b = function() {
                    var t, e, n, r, i, a, s, c, d, f, _, h, v, m, y, b, k, T, R, N, O, U, B, L, M, G, Y, F, z, H, W, q = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    E(t1({
                        type: p.Meta,
                        data: {
                            href: window.location.href,
                            width: tg(),
                            height: tm()
                        }
                    }), q), tA.forEach(function(t) {
                        return t.lock()
                    });
                    var Z = (0, I._)((t = document, n = (e = {
                            blockClass: o,
                            blockSelector: u,
                            unblockSelector: l,
                            maskTextClass: g,
                            maskTextSelector: S,
                            unmaskTextSelector: x,
                            maskInputSelector: w,
                            unmaskInputSelector: D,
                            inlineStylesheet: C,
                            maskAllText: A,
                            maskAllInputs: tn,
                            maskTextFn: P,
                            slimDOM: tr,
                            recordCanvas: j,
                            inlineImages: X,
                            onSerialize: function(t) {
                                tS(t) && tc.addIframe(t), tk(t) && t_.addShadowRoot(t.shadowRoot, document)
                            },
                            onIframeLoad: function(t, e) {
                                tc.attachIframe(t, e), t_.observeAttachShadow(t)
                            },
                            keepIframeSrcFn: tt
                        }).blockClass, r = e.blockSelector, i = e.unblockSelector, a = e.maskTextClass, s = e.maskTextSelector, c = e.unmaskTextSelector, d = e.inlineStylesheet, f = e.inlineImages, _ = e.recordCanvas, h = e.maskInputSelector, v = e.unmaskInputSelector, m = e.maskAllText, b = void 0 !== (y = e.maskAllInputs) && y, k = e.maskTextFn, T = e.maskInputFn, N = void 0 !== (R = e.slimDOM) && R, O = e.dataURLOptions, U = e.preserveWhiteSpace, B = e.onSerialize, L = e.onIframeLoad, M = e.iframeLoadTimeout, G = e.keepIframeSrcFn, [tl(t, {
                            doc: t,
                            map: Y = {},
                            blockClass: void 0 === n ? "rr-block" : n,
                            blockSelector: void 0 === r ? null : r,
                            unblockSelector: void 0 === i ? null : i,
                            maskTextClass: void 0 === a ? "rr-mask" : a,
                            maskTextSelector: void 0 === s ? null : s,
                            unmaskTextSelector: void 0 === c ? null : c,
                            skipChild: !1,
                            inlineStylesheet: void 0 === d || d,
                            maskInputSelector: void 0 === h ? null : h,
                            unmaskInputSelector: void 0 === v ? null : v,
                            maskAllText: void 0 !== m && m,
                            maskInputOptions: !0 === b ? {
                                color: !0,
                                date: !0,
                                "datetime-local": !0,
                                email: !0,
                                month: !0,
                                number: !0,
                                range: !0,
                                search: !0,
                                tel: !0,
                                text: !0,
                                time: !0,
                                url: !0,
                                week: !0,
                                textarea: !0,
                                select: !0
                            } : !1 === b ? {} : b,
                            maskTextFn: k,
                            maskInputFn: T,
                            slimDOMOptions: !0 === N || "all" === N ? {
                                script: !0,
                                comment: !0,
                                headFavicon: !0,
                                headWhitespace: !0,
                                headMetaDescKeywords: "all" === N,
                                headMetaSocial: !0,
                                headMetaRobots: !0,
                                headMetaHttpEquiv: !0,
                                headMetaAuthorship: !0,
                                headMetaVerification: !0
                            } : !1 === N ? {} : N,
                            dataURLOptions: O,
                            inlineImages: void 0 !== f && f,
                            recordCanvas: void 0 !== _ && _,
                            preserveWhiteSpace: U,
                            onSerialize: B,
                            onIframeLoad: L,
                            iframeLoadTimeout: M,
                            keepIframeSrcFn: void 0 === G ? function() {
                                return !1
                            } : G
                        }), Y]), 2),
                        V = Z[0],
                        K = Z[1];
                    if (!V) return console.warn("Failed to snapshot the document");
                    t2.map = K, E(t1({
                        type: p.FullSnapshot,
                        data: {
                            node: V,
                            initialOffset: {
                                left: void 0 !== window.pageXOffset ? window.pageXOffset : (null == document ? void 0 : document.documentElement.scrollLeft) || (null === (z = null === (F = null == document ? void 0 : document.body) || void 0 === F ? void 0 : F.parentElement) || void 0 === z ? void 0 : z.scrollLeft) || (null == document ? void 0 : document.body.scrollLeft) || 0,
                                top: void 0 !== window.pageYOffset ? window.pageYOffset : (null == document ? void 0 : document.documentElement.scrollTop) || (null === (W = null === (H = null == document ? void 0 : document.body) || void 0 === H ? void 0 : H.parentElement) || void 0 === W ? void 0 : W.scrollTop) || (null == document ? void 0 : document.body.scrollTop) || 0
                            }
                        }
                    })), tA.forEach(function(t) {
                        return t.unlock()
                    })
                };
                try {
                    var tp = [];
                    tp.push(td("DOMContentLoaded", function() {
                        E(t1({
                            type: p.DomContentLoaded,
                            data: {}
                        }))
                    }));
                    var th = function(t) {
                        var e;
                        return tO(tF)({
                            onMutation: te,
                            mutationCb: to,
                            mousemoveCb: function(t, e) {
                                return E(t1({
                                    type: p.IncrementalSnapshot,
                                    data: {
                                        source: e,
                                        positions: t
                                    }
                                }))
                            },
                            mouseInteractionCb: function(t) {
                                return E(t1({
                                    type: p.IncrementalSnapshot,
                                    data: Object.assign({
                                        source: h.MouseInteraction
                                    }, t)
                                }))
                            },
                            scrollCb: ts,
                            viewportResizeCb: function(t) {
                                return E(t1({
                                    type: p.IncrementalSnapshot,
                                    data: Object.assign({
                                        source: h.ViewportResize
                                    }, t)
                                }))
                            },
                            inputCb: function(t) {
                                return E(t1({
                                    type: p.IncrementalSnapshot,
                                    data: Object.assign({
                                        source: h.Input
                                    }, t)
                                }))
                            },
                            mediaInteractionCb: function(t) {
                                return E(t1({
                                    type: p.IncrementalSnapshot,
                                    data: Object.assign({
                                        source: h.MediaInteraction
                                    }, t)
                                }))
                            },
                            styleSheetRuleCb: function(t) {
                                return E(t1({
                                    type: p.IncrementalSnapshot,
                                    data: Object.assign({
                                        source: h.StyleSheetRule
                                    }, t)
                                }))
                            },
                            styleDeclarationCb: function(t) {
                                return E(t1({
                                    type: p.IncrementalSnapshot,
                                    data: Object.assign({
                                        source: h.StyleDeclaration
                                    }, t)
                                }))
                            },
                            canvasMutationCb: tu,
                            fontCb: function(t) {
                                return E(t1({
                                    type: p.IncrementalSnapshot,
                                    data: Object.assign({
                                        source: h.Font
                                    }, t)
                                }))
                            },
                            blockClass: o,
                            ignoreClass: f,
                            ignoreSelector: v,
                            maskTextClass: g,
                            maskTextSelector: S,
                            unmaskTextSelector: x,
                            maskInputSelector: w,
                            unmaskInputSelector: D,
                            maskInputOptions: tn,
                            inlineStylesheet: C,
                            sampling: z,
                            recordCanvas: j,
                            inlineImages: X,
                            userTriggeredOnInput: Z,
                            collectFonts: K,
                            doc: t,
                            maskAllText: A,
                            maskInputFn: M,
                            maskTextFn: P,
                            blockSelector: u,
                            unblockSelector: l,
                            slimDOMOptions: tr,
                            mirror: t2,
                            iframeManager: tc,
                            shadowDomManager: t_,
                            canvasManager: tf,
                            plugins: (null === (e = null == $ ? void 0 : $.filter(function(t) {
                                return t.observer
                            })) || void 0 === e ? void 0 : e.map(function(t) {
                                return {
                                    observer: t.observer,
                                    options: t.options,
                                    callback: function(e) {
                                        return E(t1({
                                            type: p.Plugin,
                                            data: {
                                                plugin: t.name,
                                                payload: e
                                            }
                                        }))
                                    }
                                }
                            })) || []
                        }, G)
                    };
                    tc.addLoadListener(function(t) {
                        try {
                            tp.push(th(t.contentDocument))
                        } catch (t) {
                            console.warn(t)
                        }
                    });
                    var tv = function() {
                        b(), tp.push(th(document))
                    };
                    return "interactive" === document.readyState || "complete" === document.readyState ? tv() : tp.push(td("load", function() {
                            E(t1({
                                type: p.Load,
                                data: {}
                            })), tv()
                        }, window)),
                        function() {
                            tp.forEach(function(t) {
                                return t()
                            })
                        }
                } catch (t) {
                    console.warn(t)
                }
            }

            function t6(t) {
                return t > 9999999999 ? t : 1e3 * t
            }
            t3.addCustomEvent = function(t, e) {
                if (!E) throw Error("please add custom event after start recording");
                E(t1({
                    type: p.Custom,
                    data: {
                        tag: t,
                        payload: e
                    }
                }))
            }, t3.freezePage = function() {
                tA.forEach(function(t) {
                    return t.freeze()
                })
            }, t3.takeFullSnapshot = function(t) {
                if (!b) throw Error("please take full snapshot after start recording");
                b(t)
            }, t3.mirror = t2;

            function t4(t, e) {
                "sentry.transaction" !== e.category && (["ui.click", "ui.input"].includes(e.category) ? t.triggerUserActivity() : t.checkAndHandleExpiredSession(), t.addUpdate(function() {
                    return t.throttledAddEvent({
                        type: p.Custom,
                        timestamp: 1e3 * (e.timestamp || 0),
                        data: {
                            tag: "breadcrumb",
                            payload: (0, L.normalize)(e, 10, 1e3)
                        }
                    }), "console" === e.category
                }))
            }

            function t5(t) {
                var e = t8(t);
                return e && e instanceof Element && e.closest("button,a") || e
            }

            function t8(t) {
                return function(t) {
                    return "object" == typeof t && !!t && "target" in t
                }(t) ? t.target : t
            }
            var t7 = function() {
                    function t(e, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t4;
                        (0, T._)(this, t), t.prototype.__init.call(this), t.prototype.__init2.call(this), t.prototype.__init3.call(this), this._timeout = n.timeout / 1e3, this._threshold = n.threshold / 1e3, this._scollTimeout = n.scrollTimeout / 1e3, this._replay = e, this._ignoreSelector = n.ignoreSelector, this._addBreadcrumbEvent = r
                    }
                    return (0, x._)(t, [{
                        key: "__init",
                        value: function() {
                            this._lastMutation = 0
                        }
                    }, {
                        key: "__init2",
                        value: function() {
                            this._lastScroll = 0
                        }
                    }, {
                        key: "__init3",
                        value: function() {
                            this._clicks = []
                        }
                    }, {
                        key: "addListeners",
                        value: function() {
                            var t, e = this,
                                n = function() {
                                    e._lastScroll = et()
                                };
                            var r = (t = function() {
                                    e._lastMutation = et()
                                }, !S && (S = [], function() {
                                    (0, L.fill)(P, "open", function(t) {
                                        return function() {
                                            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                            if (S) try {
                                                S.forEach(function(t) {
                                                    return t()
                                                })
                                            } catch (t) {}
                                            return t.apply(P, n)
                                        }
                                    })
                                }()), S.push(t), function() {
                                    var e = S ? S.indexOf(t) : -1;
                                    e > -1 && S.splice(e, 1)
                                }),
                                i = function(t) {
                                    if (t.target) {
                                        var n = t5(t);
                                        n && e._handleMultiClick(n)
                                    }
                                },
                                a = new MutationObserver(function() {
                                    e._lastMutation = et()
                                });
                            a.observe(P.document.documentElement, {
                                attributes: !0,
                                characterData: !0,
                                childList: !0,
                                subtree: !0
                            }), P.addEventListener("scroll", n, {
                                passive: !0
                            }), P.addEventListener("click", i, {
                                passive: !0
                            }), this._teardown = function() {
                                P.removeEventListener("scroll", n), P.removeEventListener("click", i), r(), a.disconnect(), e._clicks = [], e._lastMutation = 0, e._lastScroll = 0
                            }
                        }
                    }, {
                        key: "removeListeners",
                        value: function() {
                            this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
                        }
                    }, {
                        key: "handleClick",
                        value: function(t, e) {
                            if (! function(t, e) {
                                    return !!(!t9.includes(t.tagName) || "INPUT" === t.tagName && !["submit", "button"].includes(t.getAttribute("type") || "") || "A" === t.tagName && (t.hasAttribute("download") || t.hasAttribute("target") && "_self" !== t.getAttribute("target")) || e && t.matches(e)) || !1
                                }(e, this._ignoreSelector) && function(t) {
                                    return !!(t.data && "number" == typeof t.data.nodeId && t.timestamp)
                                }(t)) {
                                var n, r = {
                                    timestamp: (n = t.timestamp) > 9999999999 ? n / 1e3 : n,
                                    clickBreadcrumb: t,
                                    clickCount: 0,
                                    node: e
                                };
                                this._clicks.push(r), 1 === this._clicks.length && this._scheduleCheckClicks()
                            }
                        }
                    }, {
                        key: "_handleMultiClick",
                        value: function(t) {
                            this._getClicks(t).forEach(function(t) {
                                t.clickCount++
                            })
                        }
                    }, {
                        key: "_getClicks",
                        value: function(t) {
                            return this._clicks.filter(function(e) {
                                return e.node === t
                            })
                        }
                    }, {
                        key: "_checkClicks",
                        value: function() {
                            var t = this,
                                e = [],
                                n = et();
                            this._clicks.forEach(function(r) {
                                !r.mutationAfter && t._lastMutation && (r.mutationAfter = r.timestamp <= t._lastMutation ? t._lastMutation - r.timestamp : void 0), !r.scrollAfter && t._lastScroll && (r.scrollAfter = r.timestamp <= t._lastScroll ? t._lastScroll - r.timestamp : void 0), r.timestamp + t._timeout <= n && e.push(r)
                            });
                            var r = !0,
                                i = !1,
                                a = void 0;
                            try {
                                for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done); r = !0) {
                                    var u = o.value,
                                        c = this._clicks.indexOf(u);
                                    c > -1 && (this._generateBreadcrumbs(u), this._clicks.splice(c, 1))
                                }
                            } catch (t) {
                                i = !0, a = t
                            } finally {
                                try {
                                    !r && null != s.return && s.return()
                                } finally {
                                    if (i) throw a
                                }
                            }
                            this._clicks.length && this._scheduleCheckClicks()
                        }
                    }, {
                        key: "_generateBreadcrumbs",
                        value: function(t) {
                            var e = this._replay,
                                n = t.scrollAfter && t.scrollAfter <= this._scollTimeout,
                                r = t.mutationAfter && t.mutationAfter <= this._threshold,
                                i = t.clickCount,
                                a = t.clickBreadcrumb;
                            if (!n && !r) {
                                var o = 1e3 * Math.min(t.mutationAfter || this._timeout, this._timeout),
                                    s = o < 1e3 * this._timeout ? "mutation" : "timeout",
                                    u = {
                                        type: "default",
                                        message: a.message,
                                        timestamp: a.timestamp,
                                        category: "ui.slowClickDetected",
                                        data: (0, N._)((0, D._)({}, a.data), {
                                            url: P.location.href,
                                            route: e.getCurrentRoute(),
                                            timeAfterClickMs: o,
                                            endReason: s,
                                            clickCount: i || 1
                                        })
                                    };
                                this._addBreadcrumbEvent(e, u);
                                return
                            }
                            if (i > 1) {
                                var c = {
                                    type: "default",
                                    message: a.message,
                                    timestamp: a.timestamp,
                                    category: "ui.multiClick",
                                    data: (0, N._)((0, D._)({}, a.data), {
                                        url: P.location.href,
                                        route: e.getCurrentRoute(),
                                        clickCount: i,
                                        metric: !0
                                    })
                                };
                                this._addBreadcrumbEvent(e, c)
                            }
                        }
                    }, {
                        key: "_scheduleCheckClicks",
                        value: function() {
                            var t = this;
                            this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = setTimeout(function() {
                                return t._checkClicks()
                            }, 1e3)
                        }
                    }]), t
                }(),
                t9 = ["A", "BUTTON", "INPUT"];

            function et() {
                return Date.now() / 1e3
            }

            function ee(t) {
                return (0, D._)({
                    timestamp: Date.now() / 1e3,
                    type: "default"
                }, t)
            }(l = k || (k = {}))[l.Document = 0] = "Document", l[l.DocumentType = 1] = "DocumentType", l[l.Element = 2] = "Element", l[l.Text = 3] = "Text", l[l.CDATA = 4] = "CDATA", l[l.Comment = 5] = "Comment";
            var en = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled"]);

            function er(t, e) {
                var n = t && function(t) {
                    return "__sn" in t
                }(t) && t.__sn.type === k.Element ? t.__sn : null;
                return {
                    message: e,
                    data: n ? {
                        nodeId: n.id,
                        node: {
                            id: n.id,
                            tagName: n.tagName,
                            textContent: t ? Array.from(t.childNodes).map(function(t) {
                                return "__sn" in t && t.__sn.type === k.Text && t.__sn.textContent
                            }).filter(Boolean).map(function(t) {
                                return t.trim()
                            }).join("") : "",
                            attributes: function(t) {
                                var e = {};
                                for (var n in t)
                                    if (en.has(n)) {
                                        var r = n;
                                        ("data-testid" === n || "data-test-id" === n) && (r = "testId"), e[r] = t[n]
                                    } return e
                            }(n.attributes)
                        }
                    } : {}
                }
            }
            var ei = ["name", "type", "startTime", "transferSize", "duration"];

            function ea(t) {
                return function(e) {
                    return ei.every(function(n) {
                        return t[n] === e[n]
                    })
                }
            }
            var eo = function(t) {
                    (0, R._)(n, t);
                    var e = (0, A._)(n);

                    function n() {
                        return (0, T._)(this, n), e.call(this, "Event buffer exceeded maximum size of ".concat(2e7, "."))
                    }
                    return n
                }((0, O._)(Error)),
                es = function() {
                    function t() {
                        (0, T._)(this, t), t.prototype.__init.call(this), this.events = []
                    }
                    return (0, x._)(t, [{
                        key: "__init",
                        value: function() {
                            this._totalSize = 0
                        }
                    }, {
                        key: "hasEvents",
                        get: function() {
                            return this.events.length > 0
                        }
                    }, {
                        key: "type",
                        get: function() {
                            return "sync"
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.events = []
                        }
                    }, {
                        key: "addEvent",
                        value: function(t) {
                            var e = this;
                            return (0, w._)(function() {
                                var n;
                                return (0, U._)(this, function(r) {
                                    if (n = JSON.stringify(t).length, e._totalSize += n, e._totalSize > 2e7) throw new eo;
                                    return e.events.push(t), [2]
                                })
                            })()
                        }
                    }, {
                        key: "finish",
                        value: function() {
                            var t = this;
                            return new Promise(function(e) {
                                var n = t.events;
                                t.clear(), e(JSON.stringify(n))
                            })
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            this.events = [], this._totalSize = 0
                        }
                    }, {
                        key: "getEarliestTimestamp",
                        value: function() {
                            var t = this.events.map(function(t) {
                                return t.timestamp
                            }).sort()[0];
                            return t ? t6(t) : null
                        }
                    }]), t
                }(),
                eu = function() {
                    function t(e) {
                        (0, T._)(this, t), this._worker = e, this._id = 0
                    }
                    return (0, x._)(t, [{
                        key: "ensureReady",
                        value: function() {
                            var t = this;
                            return this._ensureReadyPromise ? this._ensureReadyPromise : (this._ensureReadyPromise = new Promise(function(e, n) {
                                t._worker.addEventListener("message", function(t) {
                                    t.data.success ? e() : n()
                                }, {
                                    once: !0
                                }), t._worker.addEventListener("error", function(t) {
                                    n(t)
                                }, {
                                    once: !0
                                })
                            }), this._ensureReadyPromise)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.log("[Replay] Destroying compression worker"), this._worker.terminate()
                        }
                    }, {
                        key: "postMessage",
                        value: function(t, e) {
                            var n = this,
                                r = this._getAndIncrementId();
                            return new Promise(function(i, a) {
                                var o = function(e) {
                                    var s = e.data;
                                    if (s.method === t) {
                                        if (s.id === r) {
                                            if (n._worker.removeEventListener("message", o), !s.success) {
                                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.error("[Replay]", s.response), a(Error("Error in compression worker"));
                                                return
                                            }
                                            i(s.response)
                                        }
                                    }
                                };
                                n._worker.addEventListener("message", o), n._worker.postMessage({
                                    id: r,
                                    method: t,
                                    arg: e
                                })
                            })
                        }
                    }, {
                        key: "_getAndIncrementId",
                        value: function() {
                            return this._id++
                        }
                    }]), t
                }(),
                ec = function() {
                    function t(e) {
                        (0, T._)(this, t), t.prototype.__init.call(this), this._worker = new eu(e), this._earliestTimestamp = null
                    }
                    return (0, x._)(t, [{
                        key: "__init",
                        value: function() {
                            this._totalSize = 0
                        }
                    }, {
                        key: "hasEvents",
                        get: function() {
                            return !!this._earliestTimestamp
                        }
                    }, {
                        key: "type",
                        get: function() {
                            return "worker"
                        }
                    }, {
                        key: "ensureReady",
                        value: function() {
                            return this._worker.ensureReady()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this._worker.destroy()
                        }
                    }, {
                        key: "addEvent",
                        value: function(t) {
                            var e = t6(t.timestamp);
                            (!this._earliestTimestamp || e < this._earliestTimestamp) && (this._earliestTimestamp = e);
                            var n = JSON.stringify(t);
                            return (this._totalSize += n.length, this._totalSize > 2e7) ? Promise.reject(new eo) : this._sendEventToWorker(n)
                        }
                    }, {
                        key: "finish",
                        value: function() {
                            return this._finishRequest()
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            this._earliestTimestamp = null, this._totalSize = 0, this._worker.postMessage("clear")
                        }
                    }, {
                        key: "getEarliestTimestamp",
                        value: function() {
                            return this._earliestTimestamp
                        }
                    }, {
                        key: "_sendEventToWorker",
                        value: function(t) {
                            return this._worker.postMessage("addEvent", t)
                        }
                    }, {
                        key: "_finishRequest",
                        value: function() {
                            var t = this;
                            return (0, w._)(function() {
                                var e;
                                return (0, U._)(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, t._worker.postMessage("finish")];
                                        case 1:
                                            return e = n.sent(), t._earliestTimestamp = null, t._totalSize = 0, [2, e]
                                    }
                                })
                            })()
                        }
                    }]), t
                }(),
                el = function() {
                    function t(e) {
                        (0, T._)(this, t), this._fallback = new es, this._compression = new ec(e), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
                    }
                    return (0, x._)(t, [{
                        key: "type",
                        get: function() {
                            return this._used.type
                        }
                    }, {
                        key: "hasEvents",
                        get: function() {
                            return this._used.hasEvents
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this._fallback.destroy(), this._compression.destroy()
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            return this._used.clear()
                        }
                    }, {
                        key: "getEarliestTimestamp",
                        value: function() {
                            return this._used.getEarliestTimestamp()
                        }
                    }, {
                        key: "addEvent",
                        value: function(t) {
                            return this._used.addEvent(t)
                        }
                    }, {
                        key: "finish",
                        value: function() {
                            var t = this;
                            return (0, w._)(function() {
                                return (0, U._)(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, t.ensureWorkerIsLoaded()];
                                        case 1:
                                            return e.sent(), [2, t._used.finish()]
                                    }
                                })
                            })()
                        }
                    }, {
                        key: "ensureWorkerIsLoaded",
                        value: function() {
                            return this._ensureWorkerIsLoadedPromise
                        }
                    }, {
                        key: "_ensureWorkerIsLoaded",
                        value: function() {
                            var t = this;
                            return (0, w._)(function() {
                                var e;
                                return (0, U._)(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return e.trys.push([0, 2, , 3]), [4, t._compression.ensureReady()];
                                        case 1:
                                            return e.sent(), [3, 3];
                                        case 2:
                                            return e.sent(), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.log("[Replay] Failed to load the compression worker, falling back to simple buffer"), [2];
                                        case 3:
                                            return [4, t._switchToCompressionWorker()];
                                        case 4:
                                            return e.sent(), [2]
                                    }
                                })
                            })()
                        }
                    }, {
                        key: "_switchToCompressionWorker",
                        value: function() {
                            var t = this;
                            return (0, w._)(function() {
                                var e, n, r, i, a, o, s, u, c;
                                return (0, U._)(this, function(l) {
                                    switch (l.label) {
                                        case 0:
                                            e = t._fallback.events, n = [], r = !0, i = !1, a = void 0;
                                            try {
                                                for (o = e[Symbol.iterator](); !(r = (s = o.next()).done); r = !0) u = s.value, n.push(t._compression.addEvent(u))
                                            } catch (t) {
                                                i = !0, a = t
                                            } finally {
                                                try {
                                                    !r && null != o.return && o.return()
                                                } finally {
                                                    if (i) throw a
                                                }
                                            }
                                            t._used = t._compression, l.label = 1;
                                        case 1:
                                            return l.trys.push([1, 3, , 4]), [4, Promise.all(n)];
                                        case 2:
                                            return l.sent(), [3, 4];
                                        case 3:
                                            return c = l.sent(), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.warn("[Replay] Failed to add events when switching buffers.", c), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })()
                        }
                    }]), t
                }();

            function ed() {
                try {
                    return "sessionStorage" in P && !!P.sessionStorage
                } catch (t) {
                    return !1
                }
            }

            function ef(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : +new Date;
                return null === t || void 0 === e || !!(e < 0) || 0 !== e && t + e <= n
            }

            function e_(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : +new Date;
                return ef(t.started, e.maxSessionLife, n) || ef(t.lastActivity, e.sessionIdleExpire, n)
            }

            function ep(t) {
                return void 0 !== t && Math.random() < t
            }

            function eh(t) {
                if (ed()) try {
                    P.sessionStorage.setItem(G, JSON.stringify(t))
                } catch (t) {}
            }

            function ev(t) {
                var e = Date.now(),
                    n = t.id || (0, L.uuid4)(),
                    r = t.started || e,
                    i = t.lastActivity || e,
                    a = t.segmentId || 0;
                return {
                    id: n,
                    started: r,
                    lastActivity: i,
                    segmentId: a,
                    sampled: t.sampled,
                    shouldRefresh: !0
                }
            }

            function em(t) {
                var e, n, r, i, a, o, s, u = t.timeouts,
                    c = t.currentSession,
                    l = t.stickySession,
                    d = t.sessionSampleRate,
                    f = t.allowBuffering,
                    _ = c || l && function() {
                        if (!ed()) return null;
                        try {
                            var t = P.sessionStorage.getItem(G);
                            if (!t) return null;
                            var e = JSON.parse(t);
                            return ev(e)
                        } catch (t) {
                            return null
                        }
                    }();
                if (_) {
                    if (!e_(_, u) || f && _.shouldRefresh) return {
                        type: "saved",
                        session: _
                    };
                    if (!_.shouldRefresh) return {
                        type: "new",
                        session: ev({
                            sampled: !1
                        })
                    };
                    else("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.log("[Replay] Session has expired")
                }
                return {
                    type: "new",
                    session: (n = (e = {
                        stickySession: l,
                        sessionSampleRate: d,
                        allowBuffering: f
                    }).sessionSampleRate, r = e.allowBuffering, i = e.stickySession, s = ev({
                        sampled: (a = n, o = r, ep(a) ? "session" : !!o && "buffer")
                    }), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.log("[Replay] Creating new session: ".concat(s.id)), void 0 !== i && i && eh(s), s)
                }
            }

            function eg(t, e, n) {
                return ey.apply(this, arguments)
            }

            function ey() {
                return (ey = (0, w._)(function(t, e, n) {
                    var r, i, a, o;
                    return (0, U._)(this, function(s) {
                        switch (s.label) {
                            case 0:
                                if (!t.eventBuffer || t.isPaused() || t6(e.timestamp) + t.timeouts.sessionIdlePause < Date.now()) return [2, null];
                                s.label = 1;
                            case 1:
                                if (s.trys.push([1, 3, , 5]), n && t.eventBuffer.clear(), !(r = function(t, e) {
                                        try {
                                            if ("function" == typeof e && t.type === p.Custom) return e(t)
                                        } catch (t) {
                                            return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.error("[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...", t), null
                                        }
                                        return t
                                    }(e, t.getOptions().beforeAddRecordingEvent))) return [2];
                                return [4, t.eventBuffer.addEvent(r)];
                            case 2:
                                return [2, s.sent()];
                            case 3:
                                return a = (i = s.sent()) && i instanceof eo ? "addEventSizeExceeded" : "addEvent", ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.error(i), [4, t.stop(a)];
                            case 4:
                                return s.sent(), (o = (0, B.getCurrentHub)().getClient()) && o.recordDroppedEvent("internal_sdk_error", "replay"), [3, 5];
                            case 5:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function eE(t) {
                return !t.type
            }

            function eb(t) {
                return "transaction" === t.type
            }

            function eS(t) {
                var e = function() {
                    var t = (0, B.getCurrentHub)().getClient();
                    if (!t) return !1;
                    var e = t.getTransport();
                    return !!e && (e.send.__sentry__baseTransport__ || !1)
                }();
                return function(n, r) {
                    if (n.type && !eb(n)) return;
                    var i = r && r.statusCode;
                    if (!e || !!i && !(i < 200) && !(i >= 300)) {
                        if (eb(n) && n.contexts && n.contexts.trace && n.contexts.trace.trace_id) {
                            t.getContext().traceIds.add(n.contexts.trace.trace_id);
                            return
                        }
                        if (!n.type) n.event_id && t.getContext().errorIds.add(n.event_id), "buffer" === t.recordingMode && n.tags && n.tags.replayId && setTimeout(function() {
                            t.sendBufferedReplayOrFlush()
                        })
                    }
                }
            }

            function ek(t, e) {
                return e.map(function(e) {
                    var n = e.type,
                        r = e.start,
                        i = e.end,
                        a = e.name,
                        o = e.data,
                        s = t.throttledAddEvent({
                            type: p.Custom,
                            timestamp: r,
                            data: {
                                tag: "performanceSpan",
                                payload: {
                                    op: n,
                                    description: a,
                                    startTimestamp: r,
                                    endTimestamp: i,
                                    data: o
                                }
                            }
                        });
                    return "string" == typeof s ? Promise.resolve(null) : s
                })
            }

            function ew(t, e) {
                var n, r;
                if (!!t.isEnabled() && null !== e) {
                    if (n = t, r = e.name, !((!("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) || !n.getOptions()._experiments.traceInternals) && function(t) {
                            var e = (0, B.getCurrentHub)().getClient(),
                                n = e && e.getDsn();
                            return !!n && t.includes(n.host)
                        }(r))) t.addUpdate(function() {
                        return ek(t, [e]), !0
                    })
                }
            }
            var eT = ["true", "false", "null"];

            function ex(t) {
                var e = function(t) {
                    for (var e = [], n = 0; n < t.length; n++)(function(t, e, n) {
                        var r = t[t.length - 1],
                            i = e[n];
                        if (!/\s/.test(i)) {
                            if ('"' === i && ! function t(e, n) {
                                    return "\\" === e[n - 1] && !t(e, n - 1)
                                }(e, n)) {
                                (function(t, e) {
                                    if (14 === e) {
                                        t.pop(), t.push(15);
                                        return
                                    }
                                    if (22 === e) {
                                        t.pop(), t.push(23);
                                        return
                                    }
                                    if (13 === e) {
                                        t.push(14);
                                        return
                                    }
                                    if (21 === e) {
                                        t.push(22);
                                        return
                                    }
                                    if (10 === e) {
                                        t.push(12);
                                        return
                                    }
                                    if (12 === e) {
                                        t.pop(), t.push(11);
                                    }
                                })(t, r);
                                return
                            }
                            switch (i) {
                                case "{":
                                    (function(t, e) {
                                        if (!e || 13 === e) {
                                            t.push(10);
                                            return
                                        }
                                        if (21 === e && t.push(10), 20 === e) {
                                            t.push(10);
                                        }
                                    })(t, r);
                                    break;
                                case "[":
                                    (function(t, e) {
                                        if (!e || 13 === e) {
                                            t.push(20), t.push(21);
                                            return
                                        }
                                        if (21 === e && (t.push(20), t.push(21)), 20 === e) {
                                            t.push(20), t.push(21);
                                        }
                                    })(t, r);
                                    break;
                                case ":":
                                    (function(t, e) {
                                        11 === e && (t.pop(), t.push(13))
                                    })(t, r);
                                    break;
                                case ",":
                                    (function(t, e) {
                                        if (13 === e) {
                                            t.pop();
                                            return
                                        }
                                        if (15 === e) {
                                            t.pop(), t.pop();
                                            return
                                        }
                                        if (21 !== e && 23 === e) {
                                            t.pop();
                                        }
                                    })(t, r);
                                    break;
                                case "}":
                                    (function(t, e) {
                                        10 === e && t.pop(), 13 === e && (t.pop(), t.pop()), 15 === e && (t.pop(), t.pop(), t.pop()), 13 === t[t.length - 1] && t.push(15), 21 === t[t.length - 1] && t.push(23)
                                    })(t, r);
                                    break;
                                case "]":
                                    (function(t, e) {
                                        20 === e && t.pop(), 21 === e && (t.pop(), t.pop()), 23 === e && (t.pop(), t.pop(), t.pop()), 13 === t[t.length - 1] && t.push(15), 21 === t[t.length - 1] && t.push(23)
                                    })(t, r)
                            }
                        }
                    })(e, t, n);
                    return e
                }(t);
                return function(t, e) {
                    if (!e.length) return t;
                    var n = t,
                        r = e.length - 1;
                    n = function(t, e) {
                        switch (e) {
                            case 10:
                                return "".concat(t, '"~~":"~~"');
                            case 11:
                                return "".concat(t, ':"~~"');
                            case 12:
                                return "".concat(t, '~~":"~~"');
                            case 13:
                                return function(t) {
                                    var e = t.lastIndexOf(":"),
                                        n = t.slice(e + 1);
                                    return eT.includes(n.trim()) ? "".concat(t, ',"~~":"~~"') : "".concat(t.slice(0, e + 1), '"~~"')
                                }(t);
                            case 14:
                            case 22:
                                return "".concat(t, '~~"');
                            case 15:
                                return "".concat(t, ',"~~":"~~"');
                            case 20:
                                return "".concat(t, '"~~"');
                            case 21:
                                return function(t) {
                                    var e = function(t) {
                                        for (var e = t.length - 1; e >= 0; e--) {
                                            var n = t[e];
                                            if ("," === n || "[" === n) return e
                                        }
                                        return -1
                                    }(t);
                                    if (e > -1) {
                                        var n = t.slice(e + 1);
                                        return eT.includes(n.trim()) ? "".concat(t, ',"~~"') : "".concat(t.slice(0, e + 1), '"~~"')
                                    }
                                    return t
                                }(t);
                            case 23:
                                return "".concat(t, ',"~~"')
                        }
                        return t
                    }(n, e[r]);
                    for (var i = r; i >= 0; i--) switch (e[i]) {
                        case 10:
                            n = "".concat(n, "}");
                            break;
                        case 20:
                            n = "".concat(n, "]")
                    }
                    return n
                }(t, e)
            }

            function eR(t, e) {
                if (t) try {
                    if ("string" == typeof t) return e.encode(t).length;
                    if (t instanceof URLSearchParams) return e.encode(t.toString()).length;
                    if (t instanceof FormData) {
                        var n = eU(t);
                        return e.encode(n).length
                    }
                    if (t instanceof Blob) return t.size;
                    if (t instanceof ArrayBuffer) return t.byteLength
                } catch (t) {}
            }

            function eD(t) {
                if (t) {
                    var e = parseInt(t, 10);
                    return isNaN(e) ? void 0 : e
                }
            }

            function eN(t) {
                return "string" == typeof t ? t : t instanceof URLSearchParams ? t.toString() : t instanceof FormData ? eU(t) : void 0
            }

            function eI(t, e) {
                if (!e) return null;
                var n = e.startTimestamp,
                    r = e.endTimestamp,
                    i = e.url,
                    a = e.method,
                    o = e.statusCode,
                    s = e.request,
                    u = e.response;
                return {
                    type: t,
                    start: n / 1e3,
                    end: r / 1e3,
                    name: i,
                    data: (0, L.dropUndefinedKeys)({
                        method: a,
                        statusCode: o,
                        request: s,
                        response: u
                    })
                }
            }

            function eC(t) {
                return {
                    headers: {},
                    size: t,
                    _meta: {
                        warnings: ["URL_SKIPPED"]
                    }
                }
            }

            function eO(t, e, n) {
                if (e || 0 !== Object.keys(t).length) {
                    if (!e) return {
                        headers: t
                    };
                    if (!n) return {
                        headers: t,
                        size: e
                    };
                    var r = {
                            headers: t,
                            size: e
                        },
                        i = function(t) {
                            if (!t || "string" != typeof t) return {
                                body: t,
                                warnings: []
                            };
                            var e = t.length > 15e4;
                            if (function(t) {
                                    var e = t[0],
                                        n = t[t.length - 1];
                                    return "[" === e && "]" === n || "{" === e && "}" === n
                                }(t)) try {
                                var n = e ? ex(t.slice(0, 15e4)) : t;
                                return {
                                    body: JSON.parse(n),
                                    warnings: e ? ["JSON_TRUNCATED"] : []
                                }
                            } catch (n) {
                                return {
                                    body: e ? "".concat(t.slice(0, 15e4), "…") : t,
                                    warnings: e ? ["INVALID_JSON", "TEXT_TRUNCATED"] : ["INVALID_JSON"]
                                }
                            }
                            return {
                                body: e ? "".concat(t.slice(0, 15e4), "…") : t,
                                warnings: e ? ["TEXT_TRUNCATED"] : []
                            }
                        }(n),
                        a = i.body,
                        o = i.warnings;
                    return r.body = a, o.length > 0 && (r._meta = {
                        warnings: o
                    }), r
                }
            }

            function eA(t, e) {
                return Object.keys(t).reduce(function(n, r) {
                    var i = r.toLowerCase();
                    return e.includes(i) && t[r] && (n[i] = t[r]), n
                }, {})
            }

            function eU(t) {
                return new URLSearchParams(t).toString()
            }

            function eB(t, e) {
                var n = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P.document.baseURI;
                    if (t.startsWith("http://") || t.startsWith("https://") || t.startsWith(P.location.origin)) return t;
                    var n = new URL(t, e);
                    if (n.origin !== new URL(e).origin) return t;
                    var r = n.href;
                    return !t.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r
                }(t);
                return (0, L.stringMatchesSomePattern)(n, e)
            }

            function eL() {
                return (eL = (0, w._)(function(t, e, n) {
                    var r, i;
                    return (0, U._)(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, function(t, e, n) {
                                    return eM.apply(this, arguments)
                                }(t, e, n)];
                            case 1:
                                return r = eI("resource.fetch", a.sent()), ew(n.replay, r), [3, 3];
                            case 2:
                                return i = a.sent(), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.error("[Replay] Failed to capture fetch breadcrumb", i), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function eM() {
                return (eM = (0, w._)(function(t, e, n) {
                    var r, i, a, o, s, u, c, l, d, f, _, p;
                    return (0, U._)(this, function(h) {
                        switch (h.label) {
                            case 0:
                                return r = e.startTimestamp, i = e.endTimestamp, o = (a = t.data).url, s = a.method, c = void 0 === (u = a.status_code) ? 0 : u, l = a.request_body_size, d = a.response_body_size, _ = (f = eB(o, n.networkDetailAllowUrls) && !eB(o, n.networkDetailDenyUrls)) ? function(t, e, n) {
                                    var r = t.networkCaptureBodies,
                                        i = function(t, e) {
                                            return 1 === t.length && "string" != typeof t[0] ? ez(t[0], e) : 2 === t.length ? ez(t[1], e) : {}
                                        }(e, t.networkRequestHeaders);
                                    return r ? eO(i, n, eN(eY(e))) : eO(i, n, void 0)
                                }(n, e.input, l) : eC(l), [4, function(t, e, n, r) {
                                    return eP.apply(this, arguments)
                                }(f, n, e.response, d)];
                            case 1:
                                return p = h.sent(), [2, {
                                    startTimestamp: r,
                                    endTimestamp: i,
                                    url: o,
                                    method: s,
                                    statusCode: c,
                                    request: _,
                                    response: p
                                }]
                        }
                    })
                })).apply(this, arguments)
            }

            function eP() {
                return (eP = (0, w._)(function(t, e, n, r) {
                    var i, a, o, s, u, c, l;
                    return (0, U._)(this, function(l) {
                        switch (l.label) {
                            case 0:
                                if (i = e.networkCaptureBodies, a = e.textEncoder, o = e.networkResponseHeaders, !t && void 0 !== r) return [2, eC(r)];
                                if (s = eF(n.headers, o), !i && void 0 !== r) return [2, eO(s, r, void 0)];
                                l.label = 1;
                            case 1:
                                return l.trys.push([1, 3, , 4]), [4, function(t) {
                                    return eG.apply(this, arguments)
                                }(n.clone())];
                            case 2:
                                if (c = (u = l.sent()) && u.length && void 0 === r ? eR(u, a) : r, !t) return [2, eC(c)];
                                if (i) return [2, eO(s, c, u)];
                                return [2, eO(s, c, void 0)];
                            case 3:
                                return l.sent(), [2, eO(s, r, void 0)];
                            case 4:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function eG() {
                return (eG = (0, w._)(function(t) {
                    var e;
                    return (0, U._)(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]), [4, t.text()];
                            case 1:
                                return [2, e.sent()];
                            case 2:
                                return e.sent(), [2, void 0];
                            case 3:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function eY() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                if (2 === t.length && "object" == typeof t[1]) return t[1].body
            }

            function eF(t, e) {
                var n = {};
                return e.forEach(function(e) {
                    t.get(e) && (n[e] = t.get(e))
                }), n
            }

            function ez(t, e) {
                if (!t) return {};
                var n = t.headers;
                return n ? n instanceof Headers ? eF(n, e) : Array.isArray(n) ? {} : eA(n, e) : {}
            }

            function eH() {
                return (eH = (0, w._)(function(t, e, n) {
                    var r, i;
                    return (0, U._)(this, function(a) {
                        try {
                            r = function(t, e, n) {
                                var r = e.startTimestamp,
                                    i = e.endTimestamp,
                                    a = e.input,
                                    o = e.xhr,
                                    s = t.data,
                                    u = s.url,
                                    c = s.method,
                                    l = s.status_code,
                                    d = void 0 === l ? 0 : l,
                                    f = s.request_body_size,
                                    _ = s.response_body_size;
                                if (!u) return null;
                                if (!eB(u, n.networkDetailAllowUrls) || eB(u, n.networkDetailDenyUrls)) {
                                    var p = eC(f);
                                    return {
                                        startTimestamp: r,
                                        endTimestamp: i,
                                        url: u,
                                        method: c,
                                        statusCode: d,
                                        request: p,
                                        response: eC(_)
                                    }
                                }
                                var h = o[L.SENTRY_XHR_DATA_KEY],
                                    v = h ? eA(h.request_headers, n.networkRequestHeaders) : {},
                                    m = eA(function(t) {
                                        var e = t.getAllResponseHeaders();
                                        return e ? e.split("\r\n").reduce(function(t, e) {
                                            var n = (0, I._)(e.split(": "), 2),
                                                r = n[0],
                                                i = n[1];
                                            return t[r.toLowerCase()] = i, t
                                        }, {}) : {}
                                    }(o), n.networkResponseHeaders);
                                return {
                                    startTimestamp: r,
                                    endTimestamp: i,
                                    url: u,
                                    method: c,
                                    statusCode: d,
                                    request: eO(v, f, n.networkCaptureBodies ? eN(a) : void 0),
                                    response: eO(m, _, n.networkCaptureBodies ? e.xhr.responseText : void 0)
                                }
                            }(t, e, n), i = eI("resource.xhr", r), ew(n.replay, i)
                        } catch (t) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.error("[Replay] Failed to capture fetch breadcrumb", t)
                        }
                        return [2]
                    })
                })).apply(this, arguments)
            }
            var eW = null;

            function ej(t) {
                return !!(t && t.on)
            }

            function eq() {
                return (eq = (0, w._)(function(t) {
                    return (0, U._)(this, function(e) {
                        try {
                            return [2, Promise.all(ek(t, [function(t) {
                                var e = t.jsHeapSizeLimit,
                                    n = t.totalJSHeapSize,
                                    r = t.usedJSHeapSize,
                                    i = Date.now() / 1e3;
                                return {
                                    type: "memory",
                                    name: "memory",
                                    start: i,
                                    end: i,
                                    data: {
                                        memory: {
                                            jsHeapSizeLimit: e,
                                            totalJSHeapSize: n,
                                            usedJSHeapSize: r
                                        }
                                    }
                                }
                            }(P.performance.memory)]))]
                        } catch (t) {
                            return [2, []]
                        }
                        return [2]
                    })
                })).apply(this, arguments)
            }
            var eZ = {
                resource: function(t) {
                    var e = t.entryType,
                        n = t.initiatorType,
                        r = t.name,
                        i = t.responseEnd,
                        a = t.startTime,
                        o = t.decodedBodySize,
                        s = t.encodedBodySize,
                        u = t.responseStatus,
                        c = t.transferSize;
                    return ["fetch", "xmlhttprequest"].includes(n) ? null : {
                        type: "".concat(e, ".").concat(n),
                        start: eK(a),
                        end: eK(i),
                        name: r,
                        data: {
                            size: c,
                            statusCode: u,
                            decodedBodySize: o,
                            encodedBodySize: s
                        }
                    }
                },
                paint: function(t) {
                    var e = t.duration,
                        n = t.entryType,
                        r = t.name,
                        i = eK(t.startTime);
                    return {
                        type: n,
                        name: r,
                        start: i,
                        end: i + e,
                        data: void 0
                    }
                },
                navigation: function(t) {
                    var e = t.entryType,
                        n = t.name,
                        r = t.decodedBodySize,
                        i = t.duration,
                        a = t.domComplete,
                        o = t.encodedBodySize,
                        s = t.domContentLoadedEventStart,
                        u = t.domContentLoadedEventEnd,
                        c = t.domInteractive,
                        l = t.loadEventStart,
                        d = t.loadEventEnd,
                        f = t.redirectCount,
                        _ = t.startTime,
                        p = t.transferSize,
                        h = t.type;
                    return 0 === i ? null : {
                        type: "".concat(e, ".").concat(h),
                        start: eK(_),
                        end: eK(a),
                        name: n,
                        data: {
                            size: p,
                            decodedBodySize: r,
                            encodedBodySize: o,
                            duration: i,
                            domInteractive: c,
                            domContentLoadedEventStart: s,
                            domContentLoadedEventEnd: u,
                            loadEventStart: l,
                            loadEventEnd: d,
                            domComplete: a,
                            redirectCount: f
                        }
                    }
                },
                "largest-contentful-paint": function(t) {
                    var e = t.entryType,
                        n = t.startTime,
                        r = t.size,
                        i = 0;
                    if (P.performance) {
                        var a = P.performance.getEntriesByType("navigation")[0];
                        i = a && a.activationStart || 0
                    }
                    var o = Math.max(n - i, 0),
                        s = eK(i) + o / 1e3;
                    return {
                        type: e,
                        name: e,
                        start: s,
                        end: s,
                        data: {
                            value: o,
                            size: r,
                            nodeId: t3.mirror.getId(t.element)
                        }
                    }
                }
            };

            function eV(t) {
                return void 0 === eZ[t.entryType] ? null : eZ[t.entryType](t)
            }

            function eK(t) {
                return ((L.browserPerformanceTimeOrigin || P.performance.timeOrigin) + t) / 1e3
            }

            function eJ() {
                return (eJ = (0, w._)(function(t) {
                    var e, n, r, i, a, o, s, u, c, l;
                    return (0, U._)(this, function(d) {
                        switch (d.label) {
                            case 0:
                                return e = t.client, n = t.scope, r = t.replayId, i = t.event, a = "object" != typeof e._integrations || null === e._integrations || Array.isArray(e._integrations) ? void 0 : Object.keys(e._integrations), [4, (0, B.prepareEvent)(e.getOptions(), i, {
                                    event_id: r,
                                    integrations: a
                                }, n)];
                            case 1:
                                if (!(o = d.sent())) return [2, null];
                                return o.platform = o.platform || "javascript", c = (u = (s = e.getSdkMetadata && e.getSdkMetadata()) && s.sdk || {}).name, l = u.version, o.sdk = (0, N._)((0, D._)({}, o.sdk), {
                                    name: c || "sentry.javascript.unknown",
                                    version: l || "0.0.0"
                                }), [2, o]
                        }
                    })
                })).apply(this, arguments)
            }

            function eX() {
                return (eX = (0, w._)(function(t) {
                    var e, n, r, i, a, o, s, u, c, l, d, f, _, p, h, v, m, g, y, E, b, S;
                    return (0, U._)(this, function(k) {
                        switch (k.label) {
                            case 0:
                                if (e = t.recordingData, n = t.replayId, r = t.segmentId, i = t.eventContext, a = t.timestamp, o = t.session, s = function(t) {
                                        var e, n = t.recordingData,
                                            r = t.headers,
                                            i = "".concat(JSON.stringify(r), "\n");
                                        if ("string" == typeof n) e = "".concat(i).concat(n);
                                        else {
                                            var a = new TextEncoder().encode(i);
                                            (e = new Uint8Array(a.length + n.length)).set(a), e.set(n, a.length)
                                        }
                                        return e
                                    }({
                                        recordingData: e,
                                        headers: {
                                            segment_id: r
                                        }
                                    }), u = i.urls, c = i.errorIds, l = i.traceIds, d = i.initialTimestamp, _ = (f = (0, B.getCurrentHub)()).getClient(), p = f.getScope(), h = _ && _.getTransport(), v = _ && _.getDsn(), !_ || !h || !v || !o.sampled) return [2];
                                return m = {
                                    type: "replay_event",
                                    replay_start_timestamp: d / 1e3,
                                    timestamp: a / 1e3,
                                    error_ids: c,
                                    trace_ids: l,
                                    urls: u,
                                    replay_id: n,
                                    segment_id: r,
                                    replay_type: o.sampled
                                }, [4, function(t) {
                                    return eJ.apply(this, arguments)
                                }({
                                    scope: p,
                                    client: _,
                                    replayId: n,
                                    event: m
                                })];
                            case 1:
                                var w, T, x, R;
                                if (!(g = k.sent())) return _.recordDroppedEvent("event_processor", "replay", m), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.log("An event processor returned `null`, will not send event."), [2];
                                delete g.sdkProcessingMetadata, w = g, T = s, x = v, R = _.getOptions().tunnel, y = (0, L.createEnvelope)((0, L.createEventEnvelopeHeaders)(w, (0, L.getSdkMetadataForEnvelopeHeader)(w), R, x), [
                                    [{
                                        type: "replay_event"
                                    }, w],
                                    [{
                                        type: "replay_recording",
                                        length: "string" == typeof T ? new TextEncoder().encode(T).length : T.length
                                    }, T]
                                ]), k.label = 2;
                            case 2:
                                return k.trys.push([2, 4, , 5]), [4, h.send(y)];
                            case 3:
                                return E = k.sent(), [3, 5];
                            case 4:
                                b = k.sent(), S = Error(Y);
                                try {
                                    S.cause = b
                                } catch (t) {}
                                throw S;
                            case 5:
                                if (!E) return [2, E];
                                if ("number" == typeof E.statusCode && (E.statusCode < 200 || E.statusCode >= 300)) throw new e$(E.statusCode);
                                return [2, E]
                        }
                    })
                })).apply(this, arguments)
            }
            var e$ = function(t) {
                (0, R._)(n, t);
                var e = (0, A._)(n);

                function n(t) {
                    return (0, T._)(this, n), e.call(this, "Transport returned status code ".concat(t))
                }
                return n
            }((0, O._)(Error));

            function eQ(t) {
                return e0.apply(this, arguments)
            }

            function e0() {
                return (e0 = (0, w._)(function(t) {
                    var e, n, r, i, a, o = arguments;
                    return (0, U._)(this, function(s) {
                        switch (s.label) {
                            case 0:
                                if (e = o.length > 1 && void 0 !== o[1] ? o[1] : {
                                        count: 0,
                                        interval: 5e3
                                    }, n = t.recordingData, r = t.options, !n.length) return [2];
                                s.label = 1;
                            case 1:
                                return s.trys.push([1, 3, , 4]), [4, function(t) {
                                    return eX.apply(this, arguments)
                                }(t)];
                            case 2:
                                return s.sent(), [2, !0];
                            case 3:
                                if ((i = s.sent()) instanceof e$) throw i;
                                if ((0, B.setContext)("Replays", {
                                        _retryCount: e.count
                                    }), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r._experiments && r._experiments.captureExceptions && (0, B.captureException)(i), e.count >= 3) {
                                    a = Error("".concat(Y, " - max retries exceeded"));
                                    try {
                                        a.cause = i
                                    } catch (t) {}
                                    throw a
                                }
                                return e.interval *= ++e.count, [2, new Promise(function(n, r) {
                                    setTimeout((0, w._)(function() {
                                        return (0, U._)(this, function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return i.trys.push([0, 2, , 3]), [4, eQ(t, e)];
                                                case 1:
                                                    return i.sent(), n(!0), [3, 3];
                                                case 2:
                                                    return r(i.sent()), [3, 3];
                                                case 3:
                                                    return [2]
                                            }
                                        })
                                    }), e.interval)
                                })];
                            case 4:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }
            var e1 = "__THROTTLED",
                e2 = function() {
                    function t(e) {
                        var n, r, i, a, o = e.options,
                            s = e.recordingOptions,
                            u = this;
                        (0, T._)(this, t), t.prototype.__init.call(this), t.prototype.__init2.call(this), t.prototype.__init3.call(this), t.prototype.__init4.call(this), t.prototype.__init5.call(this), t.prototype.__init6.call(this), t.prototype.__init7.call(this), t.prototype.__init8.call(this), t.prototype.__init9.call(this), t.prototype.__init10.call(this), t.prototype.__init11.call(this), t.prototype.__init12.call(this), t.prototype.__init13.call(this), t.prototype.__init14.call(this), t.prototype.__init15.call(this), t.prototype.__init16.call(this), t.prototype.__init17.call(this), t.prototype.__init18.call(this), this._recordingOptions = s, this._options = o, this._debouncedFlush = function(t, e, n) {
                            var r, i, a, o = n && n.maxWait ? Math.max(n.maxWait, e) : 0;

                            function s() {
                                return u(), r = t()
                            }

                            function u() {
                                void 0 !== i && clearTimeout(i), void 0 !== a && clearTimeout(a), i = a = void 0
                            }

                            function c() {
                                return i && clearTimeout(i), i = setTimeout(s, e), o && void 0 === a && (a = setTimeout(s, o)), r
                            }
                            return c.cancel = u, c.flush = function() {
                                return void 0 !== i || void 0 !== a ? s() : r
                            }, c
                        }(function() {
                            return u._flush()
                        }, this._options.flushMinDelay, {
                            maxWait: this._options.flushMaxDelay
                        }), this._throttledAddEvent = (n = function(t, e) {
                            return eg(u, t, e)
                        }, r = new Map, i = function(t) {
                            var e = t - 5;
                            r.forEach(function(t, n) {
                                n < e && r.delete(n)
                            })
                        }, a = !1, function() {
                            for (var t = arguments.length, e = Array(t), o = 0; o < t; o++) e[o] = arguments[o];
                            var s = Math.floor(Date.now() / 1e3);
                            if (i(s), (0, C._)(r.values()).reduce(function(t, e) {
                                    return t + e
                                }, 0) >= 300) {
                                var u = a;
                                return a = !0, u ? "__SKIPPED" : e1
                            }
                            a = !1;
                            var c = r.get(s) || 0;
                            return r.set(s, c + 1), n.apply(void 0, (0, C._)(e))
                        });
                        var c = this.getOptions(),
                            l = c.slowClickTimeout,
                            d = c.slowClickIgnoreSelectors,
                            f = l ? {
                                threshold: Math.min(3e3, l),
                                timeout: l,
                                scrollTimeout: 300,
                                ignoreSelector: d ? d.join(",") : ""
                            } : void 0;
                        f && (this.clickDetector = new t7(this, f))
                    }
                    return (0, x._)(t, [{
                        key: "__init",
                        value: function() {
                            this.eventBuffer = null
                        }
                    }, {
                        key: "__init2",
                        value: function() {
                            this.performanceEvents = []
                        }
                    }, {
                        key: "__init3",
                        value: function() {
                            this.recordingMode = "session"
                        }
                    }, {
                        key: "__init4",
                        value: function() {
                            this.timeouts = {
                                sessionIdlePause: 3e5,
                                sessionIdleExpire: 9e5,
                                maxSessionLife: 36e5
                            }
                        }
                    }, {
                        key: "__init5",
                        value: function() {
                            this._performanceObserver = null
                        }
                    }, {
                        key: "__init6",
                        value: function() {
                            this._flushLock = null
                        }
                    }, {
                        key: "__init7",
                        value: function() {
                            this._lastActivity = Date.now()
                        }
                    }, {
                        key: "__init8",
                        value: function() {
                            this._isEnabled = !1
                        }
                    }, {
                        key: "__init9",
                        value: function() {
                            this._isPaused = !1
                        }
                    }, {
                        key: "__init10",
                        value: function() {
                            this._hasInitializedCoreListeners = !1
                        }
                    }, {
                        key: "__init11",
                        value: function() {
                            this._stopRecording = null
                        }
                    }, {
                        key: "__init12",
                        value: function() {
                            this._context = {
                                errorIds: new Set,
                                traceIds: new Set,
                                urls: [],
                                initialTimestamp: Date.now(),
                                initialUrl: ""
                            }
                        }
                    }, {
                        key: "getContext",
                        value: function() {
                            return this._context
                        }
                    }, {
                        key: "isEnabled",
                        value: function() {
                            return this._isEnabled
                        }
                    }, {
                        key: "isPaused",
                        value: function() {
                            return this._isPaused
                        }
                    }, {
                        key: "getOptions",
                        value: function() {
                            return this._options
                        }
                    }, {
                        key: "initializeSampling",
                        value: function() {
                            var t = this._options,
                                e = t.errorSampleRate,
                                n = t.sessionSampleRate;
                            if (!(e <= 0) || !(n <= 0)) {
                                if (this._loadAndCheckSession()) {
                                    if (!this.session) {
                                        this._handleException(Error("Unable to initialize and create session"));
                                        return
                                    }
                                    this.session.sampled && "session" !== this.session.sampled && (this.recordingMode = "buffer"), this._initializeRecording()
                                }
                            }
                        }
                    }, {
                        key: "start",
                        value: function() {
                            if (this._isEnabled && "session" === this.recordingMode) throw Error("Replay recording is already in progress");
                            if (this._isEnabled && "buffer" === this.recordingMode) throw Error("Replay buffering is in progress, call `flush()` to save the replay");
                            var t = this.session && this.session.id,
                                e = em({
                                    timeouts: this.timeouts,
                                    stickySession: !!this._options.stickySession,
                                    currentSession: this.session,
                                    sessionSampleRate: 1,
                                    allowBuffering: !1
                                }).session;
                            e.previousSessionId = t, this.session = e, this._initializeRecording()
                        }
                    }, {
                        key: "startBuffering",
                        value: function() {
                            if (this._isEnabled) throw Error("Replay recording is already in progress");
                            var t = this.session && this.session.id,
                                e = em({
                                    timeouts: this.timeouts,
                                    stickySession: !!this._options.stickySession,
                                    currentSession: this.session,
                                    sessionSampleRate: 0,
                                    allowBuffering: !0
                                }).session;
                            e.previousSessionId = t, this.session = e, this.recordingMode = "buffer", this._initializeRecording()
                        }
                    }, {
                        key: "startRecording",
                        value: function() {
                            try {
                                var t, e;
                                this._stopRecording = t3((0, N._)((0, D._)({}, this._recordingOptions, "buffer" === this.recordingMode && {
                                    checkoutEveryNms: 6e4
                                }), {
                                    emit: (t = this, e = !1, function(n, r) {
                                        if (!t.checkAndHandleExpiredSession()) {
                                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.warn("[Replay] Received replay event after session expired.");
                                            return
                                        }
                                        var i = r || !e;
                                        e = !0, t.addUpdate(function() {
                                            if ("buffer" === t.recordingMode && i && t.setInitialState(), eg(t, n, i), !i) return !1;
                                            if (function(t, e) {
                                                    var n, r;
                                                    if (!e || !t.session || 0 !== t.session.segmentId) return Promise.resolve(null);
                                                    eg(t, (r = (n = t).getOptions(), {
                                                        type: p.Custom,
                                                        timestamp: Date.now(),
                                                        data: {
                                                            tag: "options",
                                                            payload: {
                                                                sessionSampleRate: r.sessionSampleRate,
                                                                errorSampleRate: r.errorSampleRate,
                                                                useCompressionOption: r.useCompression,
                                                                blockAllMedia: r.blockAllMedia,
                                                                maskAllText: r.maskAllText,
                                                                maskAllInputs: r.maskAllInputs,
                                                                useCompression: !!n.eventBuffer && "worker" === n.eventBuffer.type,
                                                                networkDetailHasUrls: r.networkDetailAllowUrls.length > 0,
                                                                networkCaptureBodies: r.networkCaptureBodies,
                                                                networkRequestHasHeaders: r.networkRequestHeaders.length > 0,
                                                                networkResponseHasHeaders: r.networkResponseHeaders.length > 0
                                                            }
                                                        }
                                                    }), !1)
                                                }(t, i), t.session && t.session.previousSessionId) return !0;
                                            if ("buffer" === t.recordingMode && t.session && t.eventBuffer) {
                                                var e = t.eventBuffer.getEarliestTimestamp();
                                                if (e) {
                                                    var r = t.getOptions()._experiments.traceInternals ? console.info : L.logger.info;
                                                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r("[Replay] Updating session start time to earliest event in buffer at ".concat(e)), t.session.started = e, t.getOptions().stickySession && eh(t.session)
                                                }
                                            }
                                            return "session" === t.recordingMode && t.flush(), !0
                                        })
                                    }),
                                    onMutation: this._onMutationHandler
                                }))
                            } catch (t) {
                                this._handleException(t)
                            }
                        }
                    }, {
                        key: "stopRecording",
                        value: function() {
                            try {
                                return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0
                            } catch (t) {
                                return this._handleException(t), !1
                            }
                        }
                    }, {
                        key: "stop",
                        value: function(t) {
                            var e = this;
                            return (0, w._)(function() {
                                var n, r;
                                return (0, U._)(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (!e._isEnabled) return [2];
                                            i.label = 1;
                                        case 1:
                                            if (i.trys.push([1, 4, , 5]), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (n = "[Replay] Stopping Replay".concat(t ? " triggered by ".concat(t) : ""), (e.getOptions()._experiments.traceInternals ? console.warn : L.logger.log)(n)), e._isEnabled = !1, e._removeListeners(), e.stopRecording(), e._debouncedFlush.cancel(), "session" !== e.recordingMode) return [3, 3];
                                            return [4, e._flush({
                                                force: !0
                                            })];
                                        case 2:
                                            i.sent(), i.label = 3;
                                        case 3:
                                            var a;
                                            return e.eventBuffer && e.eventBuffer.destroy(), e.eventBuffer = null, a = e,
                                                function() {
                                                    if (ed()) try {
                                                        P.sessionStorage.removeItem(G)
                                                    } catch (t) {}
                                                }(), a.session = void 0, [3, 5];
                                        case 4:
                                            return r = i.sent(), e._handleException(r), [3, 5];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })()
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this._isPaused = !0, this.stopRecording()
                        }
                    }, {
                        key: "resume",
                        value: function() {
                            this._loadAndCheckSession() && (this._isPaused = !1, this.startRecording())
                        }
                    }, {
                        key: "sendBufferedReplayOrFlush",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                e = t.continueRecording,
                                n = void 0 === e || e,
                                r = this;
                            return (0, w._)(function() {
                                var t, e, i;
                                return (0, U._)(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if ("session" === r.recordingMode) return [2, r.flushImmediate()];
                                            return t = Date.now(), e = r.getOptions()._experiments.traceInternals ? console.info : L.logger.info, ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e("[Replay] Converting buffer to session, starting at ".concat(t)), [4, r.flushImmediate()];
                                        case 1:
                                            if (a.sent(), i = r.stopRecording(), !n || !i) return [2];
                                            return r.recordingMode = "session", r.session && (r.session.shouldRefresh = !1, r._updateUserActivity(t), r._updateSessionActivity(t), r.session.started = t, r._maybeSaveSession()), r.startRecording(), [2]
                                    }
                                })
                            })()
                        }
                    }, {
                        key: "addUpdate",
                        value: function(t) {
                            var e = t();
                            if ("buffer" !== this.recordingMode) !0 !== e && this._debouncedFlush()
                        }
                    }, {
                        key: "triggerUserActivity",
                        value: function() {
                            if (this._updateUserActivity(), !this._stopRecording) {
                                if (!this._loadAndCheckSession()) return;
                                this.resume();
                                return
                            }
                            this.checkAndHandleExpiredSession(), this._updateSessionActivity()
                        }
                    }, {
                        key: "updateUserActivity",
                        value: function() {
                            this._updateUserActivity(), this._updateSessionActivity()
                        }
                    }, {
                        key: "conditionalFlush",
                        value: function() {
                            return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
                        }
                    }, {
                        key: "flush",
                        value: function() {
                            return this._debouncedFlush()
                        }
                    }, {
                        key: "flushImmediate",
                        value: function() {
                            return this._debouncedFlush(), this._debouncedFlush.flush()
                        }
                    }, {
                        key: "cancelFlush",
                        value: function() {
                            this._debouncedFlush.cancel()
                        }
                    }, {
                        key: "getSessionId",
                        value: function() {
                            return this.session && this.session.id
                        }
                    }, {
                        key: "checkAndHandleExpiredSession",
                        value: function() {
                            var t = this.getSessionId();
                            if (this._lastActivity && ef(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled) {
                                this.pause();
                                return
                            }
                            if (this._loadAndCheckSession()) return t === this.getSessionId() || (this._triggerFullSnapshot(), !1)
                        }
                    }, {
                        key: "setInitialState",
                        value: function() {
                            var t = "".concat(P.location.pathname).concat(P.location.hash).concat(P.location.search),
                                e = "".concat(P.location.origin).concat(t);
                            this.performanceEvents = [], this._clearContext(), this._context.initialUrl = e, this._context.initialTimestamp = Date.now(), this._context.urls.push(e)
                        }
                    }, {
                        key: "throttledAddEvent",
                        value: function(t, e) {
                            var n = this,
                                r = this._throttledAddEvent(t, e);
                            if (r === e1) {
                                var i = ee({
                                    category: "replay.throttled"
                                });
                                this.addUpdate(function() {
                                    eg(n, {
                                        type: p.Custom,
                                        timestamp: i.timestamp || 0,
                                        data: {
                                            tag: "breadcrumb",
                                            payload: i,
                                            metric: !0
                                        }
                                    })
                                })
                            }
                            return r
                        }
                    }, {
                        key: "getCurrentRoute",
                        value: function() {
                            var t = this.lastTransaction || (0, B.getCurrentHub)().getScope().getTransaction();
                            if (t && ["route", "custom"].includes(t.metadata.source)) return t.name
                        }
                    }, {
                        key: "_initializeRecording",
                        value: function() {
                            this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = function(t) {
                                if (t.useCompression && window.Worker) try {
                                    var e, n = (e = new Blob(['/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */\nfunction t(t){let e=t.length;for(;--e>=0;)t[e]=0}const e=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),a=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),i=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),n=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=new Array(576);t(s);const r=new Array(60);t(r);const o=new Array(512);t(o);const l=new Array(256);t(l);const h=new Array(29);t(h);const d=new Array(30);function _(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}let f,c,u;function w(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}t(d);const m=t=>t<256?o[t]:o[256+(t>>>7)],b=(t,e)=>{t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},g=(t,e,a)=>{t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,b(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},p=(t,e,a)=>{g(t,a[2*e],a[2*e+1])},k=(t,e)=>{let a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},v=(t,e,a)=>{const i=new Array(16);let n,s,r=0;for(n=1;n<=15;n++)r=r+a[n-1]<<1,i[n]=r;for(s=0;s<=e;s++){let e=t[2*s+1];0!==e&&(t[2*s]=k(i[e]++,e))}},y=t=>{let e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.sym_next=t.matches=0},x=t=>{t.bi_valid>8?b(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},z=(t,e,a,i)=>{const n=2*e,s=2*a;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[a]},A=(t,e,a)=>{const i=t.heap[a];let n=a<<1;for(;n<=t.heap_len&&(n<t.heap_len&&z(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!z(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i},E=(t,i,n)=>{let s,r,o,_,f=0;if(0!==t.sym_next)do{s=255&t.pending_buf[t.sym_buf+f++],s+=(255&t.pending_buf[t.sym_buf+f++])<<8,r=t.pending_buf[t.sym_buf+f++],0===s?p(t,r,i):(o=l[r],p(t,o+256+1,i),_=e[o],0!==_&&(r-=h[o],g(t,r,_)),s--,o=m(s),p(t,o,n),_=a[o],0!==_&&(s-=d[o],g(t,s,_)))}while(f<t.sym_next);p(t,256,i)},R=(t,e)=>{const a=e.dyn_tree,i=e.stat_desc.static_tree,n=e.stat_desc.has_stree,s=e.stat_desc.elems;let r,o,l,h=-1;for(t.heap_len=0,t.heap_max=573,r=0;r<s;r++)0!==a[2*r]?(t.heap[++t.heap_len]=h=r,t.depth[r]=0):a[2*r+1]=0;for(;t.heap_len<2;)l=t.heap[++t.heap_len]=h<2?++h:0,a[2*l]=1,t.depth[l]=0,t.opt_len--,n&&(t.static_len-=i[2*l+1]);for(e.max_code=h,r=t.heap_len>>1;r>=1;r--)A(t,a,r);l=s;do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],A(t,a,1),o=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=o,a[2*l]=a[2*r]+a[2*o],t.depth[l]=(t.depth[r]>=t.depth[o]?t.depth[r]:t.depth[o])+1,a[2*r+1]=a[2*o+1]=l,t.heap[1]=l++,A(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],((t,e)=>{const a=e.dyn_tree,i=e.max_code,n=e.stat_desc.static_tree,s=e.stat_desc.has_stree,r=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,l=e.stat_desc.max_length;let h,d,_,f,c,u,w=0;for(f=0;f<=15;f++)t.bl_count[f]=0;for(a[2*t.heap[t.heap_max]+1]=0,h=t.heap_max+1;h<573;h++)d=t.heap[h],f=a[2*a[2*d+1]+1]+1,f>l&&(f=l,w++),a[2*d+1]=f,d>i||(t.bl_count[f]++,c=0,d>=o&&(c=r[d-o]),u=a[2*d],t.opt_len+=u*(f+c),s&&(t.static_len+=u*(n[2*d+1]+c)));if(0!==w){do{for(f=l-1;0===t.bl_count[f];)f--;t.bl_count[f]--,t.bl_count[f+1]+=2,t.bl_count[l]--,w-=2}while(w>0);for(f=l;0!==f;f--)for(d=t.bl_count[f];0!==d;)_=t.heap[--h],_>i||(a[2*_+1]!==f&&(t.opt_len+=(f-a[2*_+1])*a[2*_],a[2*_+1]=f),d--)}})(t,e),v(a,h,t.bl_count)},Z=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=r,r=e[2*(i+1)+1],++o<l&&n===r||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[32]++):o<=10?t.bl_tree[34]++:t.bl_tree[36]++,o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4))},U=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),i=0;i<=a;i++)if(n=r,r=e[2*(i+1)+1],!(++o<l&&n===r)){if(o<h)do{p(t,n,t.bl_tree)}while(0!=--o);else 0!==n?(n!==s&&(p(t,n,t.bl_tree),o--),p(t,16,t.bl_tree),g(t,o-3,2)):o<=10?(p(t,17,t.bl_tree),g(t,o-3,3)):(p(t,18,t.bl_tree),g(t,o-11,7));o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4)}};let S=!1;const D=(t,e,a,i)=>{g(t,0+(i?1:0),3),x(t),b(t,a),b(t,~a),a&&t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a};var T=(t,e,a,i)=>{let o,l,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0})(t)),R(t,t.l_desc),R(t,t.d_desc),h=(t=>{let e;for(Z(t,t.dyn_ltree,t.l_desc.max_code),Z(t,t.dyn_dtree,t.d_desc.max_code),R(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*n[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e})(t),o=t.opt_len+3+7>>>3,l=t.static_len+3+7>>>3,l<=o&&(o=l)):o=l=a+5,a+4<=o&&-1!==e?D(t,e,a,i):4===t.strategy||l===o?(g(t,2+(i?1:0),3),E(t,s,r)):(g(t,4+(i?1:0),3),((t,e,a,i)=>{let s;for(g(t,e-257,5),g(t,a-1,5),g(t,i-4,4),s=0;s<i;s++)g(t,t.bl_tree[2*n[s]+1],3);U(t,t.dyn_ltree,e-1),U(t,t.dyn_dtree,a-1)})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),E(t,t.dyn_ltree,t.dyn_dtree)),y(t),i&&x(t)},O={_tr_init:t=>{S||((()=>{let t,n,w,m,b;const g=new Array(16);for(w=0,m=0;m<28;m++)for(h[m]=w,t=0;t<1<<e[m];t++)l[w++]=m;for(l[w-1]=m,b=0,m=0;m<16;m++)for(d[m]=b,t=0;t<1<<a[m];t++)o[b++]=m;for(b>>=7;m<30;m++)for(d[m]=b<<7,t=0;t<1<<a[m]-7;t++)o[256+b++]=m;for(n=0;n<=15;n++)g[n]=0;for(t=0;t<=143;)s[2*t+1]=8,t++,g[8]++;for(;t<=255;)s[2*t+1]=9,t++,g[9]++;for(;t<=279;)s[2*t+1]=7,t++,g[7]++;for(;t<=287;)s[2*t+1]=8,t++,g[8]++;for(v(s,287,g),t=0;t<30;t++)r[2*t+1]=5,r[2*t]=k(t,5);f=new _(s,e,257,286,15),c=new _(r,a,0,30,15),u=new _(new Array(0),i,0,19,7)})(),S=!0),t.l_desc=new w(t.dyn_ltree,f),t.d_desc=new w(t.dyn_dtree,c),t.bl_desc=new w(t.bl_tree,u),t.bi_buf=0,t.bi_valid=0,y(t)},_tr_stored_block:D,_tr_flush_block:T,_tr_tally:(t,e,a)=>(t.pending_buf[t.sym_buf+t.sym_next++]=e,t.pending_buf[t.sym_buf+t.sym_next++]=e>>8,t.pending_buf[t.sym_buf+t.sym_next++]=a,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(l[a]+256+1)]++,t.dyn_dtree[2*m(e)]++),t.sym_next===t.sym_end),_tr_align:t=>{g(t,2,3),p(t,256,s),(t=>{16===t.bi_valid?(b(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)})(t)}};var F=(t,e,a,i)=>{let n=65535&t|0,s=t>>>16&65535|0,r=0;for(;0!==a;){r=a>2e3?2e3:a,a-=r;do{n=n+e[i++]|0,s=s+n|0}while(--r);n%=65521,s%=65521}return n|s<<16|0};const L=new Uint32Array((()=>{let t,e=[];for(var a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e})());var N=(t,e,a,i)=>{const n=L,s=i+a;t^=-1;for(let a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t},I={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},B={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:C,_tr_stored_block:H,_tr_flush_block:M,_tr_tally:j,_tr_align:K}=O,{Z_NO_FLUSH:P,Z_PARTIAL_FLUSH:Y,Z_FULL_FLUSH:G,Z_FINISH:X,Z_BLOCK:W,Z_OK:q,Z_STREAM_END:J,Z_STREAM_ERROR:Q,Z_DATA_ERROR:V,Z_BUF_ERROR:$,Z_DEFAULT_COMPRESSION:tt,Z_FILTERED:et,Z_HUFFMAN_ONLY:at,Z_RLE:it,Z_FIXED:nt,Z_DEFAULT_STRATEGY:st,Z_UNKNOWN:rt,Z_DEFLATED:ot}=B,lt=(t,e)=>(t.msg=I[e],e),ht=t=>2*t-(t>4?9:0),dt=t=>{let e=t.length;for(;--e>=0;)t[e]=0},_t=t=>{let e,a,i,n=t.w_size;e=t.hash_size,i=e;do{a=t.head[--i],t.head[i]=a>=n?a-n:0}while(--e);e=n,i=e;do{a=t.prev[--i],t.prev[i]=a>=n?a-n:0}while(--e)};let ft=(t,e,a)=>(e<<t.hash_shift^a)&t.hash_mask;const ct=t=>{const e=t.state;let a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},ut=(t,e)=>{M(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,ct(t.strm)},wt=(t,e)=>{t.pending_buf[t.pending++]=e},mt=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},bt=(t,e,a,i)=>{let n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,e.set(t.input.subarray(t.next_in,t.next_in+n),a),1===t.state.wrap?t.adler=F(t.adler,e,n,a):2===t.state.wrap&&(t.adler=N(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)},gt=(t,e)=>{let a,i,n=t.max_chain_length,s=t.strstart,r=t.prev_length,o=t.nice_match;const l=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,h=t.window,d=t.w_mask,_=t.prev,f=t.strstart+258;let c=h[s+r-1],u=h[s+r];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(a=e,h[a+r]===u&&h[a+r-1]===c&&h[a]===h[s]&&h[++a]===h[s+1]){s+=2,a++;do{}while(h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&s<f);if(i=258-(f-s),s=f-258,i>r){if(t.match_start=e,r=i,i>=o)break;c=h[s+r-1],u=h[s+r]}}}while((e=_[e&d])>l&&0!=--n);return r<=t.lookahead?r:t.lookahead},pt=t=>{const e=t.w_size;let a,i,n;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-262)&&(t.window.set(t.window.subarray(e,e+e-i),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,t.insert>t.strstart&&(t.insert=t.strstart),_t(t),i+=e),0===t.strm.avail_in)break;if(a=bt(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=a,t.lookahead+t.insert>=3)for(n=t.strstart-t.insert,t.ins_h=t.window[n],t.ins_h=ft(t,t.ins_h,t.window[n+1]);t.insert&&(t.ins_h=ft(t,t.ins_h,t.window[n+3-1]),t.prev[n&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=n,n++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)},kt=(t,e)=>{let a,i,n,s=t.pending_buf_size-5>t.w_size?t.w_size:t.pending_buf_size-5,r=0,o=t.strm.avail_in;do{if(a=65535,n=t.bi_valid+42>>3,t.strm.avail_out<n)break;if(n=t.strm.avail_out-n,i=t.strstart-t.block_start,a>i+t.strm.avail_in&&(a=i+t.strm.avail_in),a>n&&(a=n),a<s&&(0===a&&e!==X||e===P||a!==i+t.strm.avail_in))break;r=e===X&&a===i+t.strm.avail_in?1:0,H(t,0,0,r),t.pending_buf[t.pending-4]=a,t.pending_buf[t.pending-3]=a>>8,t.pending_buf[t.pending-2]=~a,t.pending_buf[t.pending-1]=~a>>8,ct(t.strm),i&&(i>a&&(i=a),t.strm.output.set(t.window.subarray(t.block_start,t.block_start+i),t.strm.next_out),t.strm.next_out+=i,t.strm.avail_out-=i,t.strm.total_out+=i,t.block_start+=i,a-=i),a&&(bt(t.strm,t.strm.output,t.strm.next_out,a),t.strm.next_out+=a,t.strm.avail_out-=a,t.strm.total_out+=a)}while(0===r);return o-=t.strm.avail_in,o&&(o>=t.w_size?(t.matches=2,t.window.set(t.strm.input.subarray(t.strm.next_in-t.w_size,t.strm.next_in),0),t.strstart=t.w_size,t.insert=t.strstart):(t.window_size-t.strstart<=o&&(t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,t.insert>t.strstart&&(t.insert=t.strstart)),t.window.set(t.strm.input.subarray(t.strm.next_in-o,t.strm.next_in),t.strstart),t.strstart+=o,t.insert+=o>t.w_size-t.insert?t.w_size-t.insert:o),t.block_start=t.strstart),t.high_water<t.strstart&&(t.high_water=t.strstart),r?4:e!==P&&e!==X&&0===t.strm.avail_in&&t.strstart===t.block_start?2:(n=t.window_size-t.strstart,t.strm.avail_in>n&&t.block_start>=t.w_size&&(t.block_start-=t.w_size,t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,n+=t.w_size,t.insert>t.strstart&&(t.insert=t.strstart)),n>t.strm.avail_in&&(n=t.strm.avail_in),n&&(bt(t.strm,t.window,t.strstart,n),t.strstart+=n,t.insert+=n>t.w_size-t.insert?t.w_size-t.insert:n),t.high_water<t.strstart&&(t.high_water=t.strstart),n=t.bi_valid+42>>3,n=t.pending_buf_size-n>65535?65535:t.pending_buf_size-n,s=n>t.w_size?t.w_size:n,i=t.strstart-t.block_start,(i>=s||(i||e===X)&&e!==P&&0===t.strm.avail_in&&i<=n)&&(a=i>n?n:i,r=e===X&&0===t.strm.avail_in&&a===i?1:0,H(t,t.block_start,a,r),t.block_start+=a,ct(t.strm)),r?3:1)},vt=(t,e)=>{let a,i;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a)),t.match_length>=3)if(i=j(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=ft(t,t.ins_h,t.window[t.strstart+1]);else i=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2},yt=(t,e)=>{let a,i,n;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a),t.match_length<=5&&(t.strategy===et||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-3,i=j(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,i&&(ut(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if(i=j(t,0,t.window[t.strstart-1]),i&&ut(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=j(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2};function xt(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}const zt=[new xt(0,0,0,0,kt),new xt(4,4,8,4,vt),new xt(4,5,16,8,vt),new xt(4,6,32,32,vt),new xt(4,4,16,16,yt),new xt(8,16,32,32,yt),new xt(8,16,128,128,yt),new xt(8,32,128,256,yt),new xt(32,128,258,1024,yt),new xt(32,258,258,4096,yt)];function At(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ot,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),dt(this.dyn_ltree),dt(this.dyn_dtree),dt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),dt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),dt(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Et=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||42!==e.status&&57!==e.status&&69!==e.status&&73!==e.status&&91!==e.status&&103!==e.status&&113!==e.status&&666!==e.status?1:0},Rt=t=>{if(Et(t))return lt(t,Q);t.total_in=t.total_out=0,t.data_type=rt;const e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=2===e.wrap?57:e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=-2,C(e),q},Zt=t=>{const e=Rt(t);var a;return e===q&&((a=t.state).window_size=2*a.w_size,dt(a.head),a.max_lazy_match=zt[a.level].max_lazy,a.good_match=zt[a.level].good_length,a.nice_match=zt[a.level].nice_length,a.max_chain_length=zt[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=2,a.match_available=0,a.ins_h=0),e},Ut=(t,e,a,i,n,s)=>{if(!t)return Q;let r=1;if(e===tt&&(e=6),i<0?(r=0,i=-i):i>15&&(r=2,i-=16),n<1||n>9||a!==ot||i<8||i>15||e<0||e>9||s<0||s>nt||8===i&&1!==r)return lt(t,Q);8===i&&(i=9);const o=new At;return t.state=o,o.strm=t,o.status=42,o.wrap=r,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new Uint8Array(2*o.w_size),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=3*(o.lit_bufsize-1),o.level=e,o.strategy=s,o.method=a,Zt(t)};var St={deflateInit:(t,e)=>Ut(t,e,ot,15,8,st),deflateInit2:Ut,deflateReset:Zt,deflateResetKeep:Rt,deflateSetHeader:(t,e)=>Et(t)||2!==t.state.wrap?Q:(t.state.gzhead=e,q),deflate:(t,e)=>{if(Et(t)||e>W||e<0)return t?lt(t,Q):Q;const a=t.state;if(!t.output||0!==t.avail_in&&!t.input||666===a.status&&e!==X)return lt(t,0===t.avail_out?$:Q);const i=a.last_flush;if(a.last_flush=e,0!==a.pending){if(ct(t),0===t.avail_out)return a.last_flush=-1,q}else if(0===t.avail_in&&ht(e)<=ht(i)&&e!==X)return lt(t,$);if(666===a.status&&0!==t.avail_in)return lt(t,$);if(42===a.status&&0===a.wrap&&(a.status=113),42===a.status){let e=ot+(a.w_bits-8<<4)<<8,i=-1;if(i=a.strategy>=at||a.level<2?0:a.level<6?1:6===a.level?2:3,e|=i<<6,0!==a.strstart&&(e|=32),e+=31-e%31,mt(a,e),0!==a.strstart&&(mt(a,t.adler>>>16),mt(a,65535&t.adler)),t.adler=1,a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(57===a.status)if(t.adler=0,wt(a,31),wt(a,139),wt(a,8),a.gzhead)wt(a,(a.gzhead.text?1:0)+(a.gzhead.hcrc?2:0)+(a.gzhead.extra?4:0)+(a.gzhead.name?8:0)+(a.gzhead.comment?16:0)),wt(a,255&a.gzhead.time),wt(a,a.gzhead.time>>8&255),wt(a,a.gzhead.time>>16&255),wt(a,a.gzhead.time>>24&255),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,255&a.gzhead.os),a.gzhead.extra&&a.gzhead.extra.length&&(wt(a,255&a.gzhead.extra.length),wt(a,a.gzhead.extra.length>>8&255)),a.gzhead.hcrc&&(t.adler=N(t.adler,a.pending_buf,a.pending,0)),a.gzindex=0,a.status=69;else if(wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,3),a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q;if(69===a.status){if(a.gzhead.extra){let e=a.pending,i=(65535&a.gzhead.extra.length)-a.gzindex;for(;a.pending+i>a.pending_buf_size;){let n=a.pending_buf_size-a.pending;if(a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex,a.gzindex+n),a.pending),a.pending=a.pending_buf_size,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex+=n,ct(t),0!==a.pending)return a.last_flush=-1,q;e=0,i-=n}let n=new Uint8Array(a.gzhead.extra);a.pending_buf.set(n.subarray(a.gzindex,a.gzindex+i),a.pending),a.pending+=i,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex=0}a.status=73}if(73===a.status){if(a.gzhead.name){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.name.length?255&a.gzhead.name.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),a.gzindex=0}a.status=91}if(91===a.status){if(a.gzhead.comment){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.comment.length?255&a.gzhead.comment.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i))}a.status=103}if(103===a.status){if(a.gzhead.hcrc){if(a.pending+2>a.pending_buf_size&&(ct(t),0!==a.pending))return a.last_flush=-1,q;wt(a,255&t.adler),wt(a,t.adler>>8&255),t.adler=0}if(a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(0!==t.avail_in||0!==a.lookahead||e!==P&&666!==a.status){let i=0===a.level?kt(a,e):a.strategy===at?((t,e)=>{let a;for(;;){if(0===t.lookahead&&(pt(t),0===t.lookahead)){if(e===P)return 1;break}if(t.match_length=0,a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):a.strategy===it?((t,e)=>{let a,i,n,s;const r=t.window;for(;;){if(t.lookahead<=258){if(pt(t),t.lookahead<=258&&e===P)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=t.strstart-1,i=r[n],i===r[++n]&&i===r[++n]&&i===r[++n])){s=t.strstart+258;do{}while(i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&n<s);t.match_length=258-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=j(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):zt[a.level].func(a,e);if(3!==i&&4!==i||(a.status=666),1===i||3===i)return 0===t.avail_out&&(a.last_flush=-1),q;if(2===i&&(e===Y?K(a):e!==W&&(H(a,0,0,!1),e===G&&(dt(a.head),0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),ct(t),0===t.avail_out))return a.last_flush=-1,q}return e!==X?q:a.wrap<=0?J:(2===a.wrap?(wt(a,255&t.adler),wt(a,t.adler>>8&255),wt(a,t.adler>>16&255),wt(a,t.adler>>24&255),wt(a,255&t.total_in),wt(a,t.total_in>>8&255),wt(a,t.total_in>>16&255),wt(a,t.total_in>>24&255)):(mt(a,t.adler>>>16),mt(a,65535&t.adler)),ct(t),a.wrap>0&&(a.wrap=-a.wrap),0!==a.pending?q:J)},deflateEnd:t=>{if(Et(t))return Q;const e=t.state.status;return t.state=null,113===e?lt(t,V):q},deflateSetDictionary:(t,e)=>{let a=e.length;if(Et(t))return Q;const i=t.state,n=i.wrap;if(2===n||1===n&&42!==i.status||i.lookahead)return Q;if(1===n&&(t.adler=F(t.adler,e,a,0)),i.wrap=0,a>=i.w_size){0===n&&(dt(i.head),i.strstart=0,i.block_start=0,i.insert=0);let t=new Uint8Array(i.w_size);t.set(e.subarray(a-i.w_size,a),0),e=t,a=i.w_size}const s=t.avail_in,r=t.next_in,o=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,pt(i);i.lookahead>=3;){let t=i.strstart,e=i.lookahead-2;do{i.ins_h=ft(i,i.ins_h,i.window[t+3-1]),i.prev[t&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=t,t++}while(--e);i.strstart=t,i.lookahead=2,pt(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=r,t.input=o,t.avail_in=s,i.wrap=n,q},deflateInfo:"pako deflate (from Nodeca project)"};const Dt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var Tt=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(const e in a)Dt(a,e)&&(t[e]=a[e])}}return t},Ot=t=>{let e=0;for(let a=0,i=t.length;a<i;a++)e+=t[a].length;const a=new Uint8Array(e);for(let e=0,i=0,n=t.length;e<n;e++){let n=t[e];a.set(n,i),i+=n.length}return a};let Ft=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){Ft=!1}const Lt=new Uint8Array(256);for(let t=0;t<256;t++)Lt[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Lt[254]=Lt[254]=1;var Nt=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,i,n,s,r=t.length,o=0;for(n=0;n<r;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),o+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(o),s=0,n=0;s<o;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},It=(t,e)=>{const a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let i,n;const s=new Array(2*a);for(n=0,i=0;i<a;){let e=t[i++];if(e<128){s[n++]=e;continue}let r=Lt[e];if(r>4)s[n++]=65533,i+=r-1;else{for(e&=2===r?31:3===r?15:7;r>1&&i<a;)e=e<<6|63&t[i++],r--;r>1?s[n++]=65533:e<65536?s[n++]=e:(e-=65536,s[n++]=55296|e>>10&1023,s[n++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&Ft)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let a="";for(let i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a})(s,n)},Bt=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let a=e-1;for(;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+Lt[t[a]]>e?a:e};var Ct=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};const Ht=Object.prototype.toString,{Z_NO_FLUSH:Mt,Z_SYNC_FLUSH:jt,Z_FULL_FLUSH:Kt,Z_FINISH:Pt,Z_OK:Yt,Z_STREAM_END:Gt,Z_DEFAULT_COMPRESSION:Xt,Z_DEFAULT_STRATEGY:Wt,Z_DEFLATED:qt}=B;function Jt(t){this.options=Tt({level:Xt,method:qt,chunkSize:16384,windowBits:15,memLevel:8,strategy:Wt},t||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=St.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==Yt)throw new Error(I[a]);if(e.header&&St.deflateSetHeader(this.strm,e.header),e.dictionary){let t;if(t="string"==typeof e.dictionary?Nt(e.dictionary):"[object ArrayBuffer]"===Ht.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=St.deflateSetDictionary(this.strm,t),a!==Yt)throw new Error(I[a]);this._dict_set=!0}}function Qt(t,e){const a=new Jt(e);if(a.push(t,!0),a.err)throw a.msg||I[a.err];return a.result}Jt.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize;let n,s;if(this.ended)return!1;for(s=e===~~e?e:!0===e?Pt:Mt,"string"==typeof t?a.input=Nt(t):"[object ArrayBuffer]"===Ht.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;)if(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),(s===jt||s===Kt)&&a.avail_out<=6)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else{if(n=St.deflate(a,s),n===Gt)return a.next_out>0&&this.onData(a.output.subarray(0,a.next_out)),n=St.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Yt;if(0!==a.avail_out){if(s>0&&a.next_out>0)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else if(0===a.avail_in)break}else this.onData(a.output)}return!0},Jt.prototype.onData=function(t){this.chunks.push(t)},Jt.prototype.onEnd=function(t){t===Yt&&(this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Vt={Deflate:Jt,deflate:Qt,deflateRaw:function(t,e){return(e=e||{}).raw=!0,Qt(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,Qt(t,e)},constants:B};var $t=function(t,e){let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z,A;const E=t.state;a=t.next_in,z=t.input,i=a+(t.avail_in-5),n=t.next_out,A=t.output,s=n-(e-t.avail_out),r=n+(t.avail_out-257),o=E.dmax,l=E.wsize,h=E.whave,d=E.wnext,_=E.window,f=E.hold,c=E.bits,u=E.lencode,w=E.distcode,m=(1<<E.lenbits)-1,b=(1<<E.distbits)-1;t:do{c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=u[f&m];e:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,0===p)A[n++]=65535&g;else{if(!(16&p)){if(0==(64&p)){g=u[(65535&g)+(f&(1<<p)-1)];continue e}if(32&p){E.mode=16191;break t}t.msg="invalid literal/length code",E.mode=16209;break t}k=65535&g,p&=15,p&&(c<p&&(f+=z[a++]<<c,c+=8),k+=f&(1<<p)-1,f>>>=p,c-=p),c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=w[f&b];a:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,!(16&p)){if(0==(64&p)){g=w[(65535&g)+(f&(1<<p)-1)];continue a}t.msg="invalid distance code",E.mode=16209;break t}if(v=65535&g,p&=15,c<p&&(f+=z[a++]<<c,c+=8,c<p&&(f+=z[a++]<<c,c+=8)),v+=f&(1<<p)-1,v>o){t.msg="invalid distance too far back",E.mode=16209;break t}if(f>>>=p,c-=p,p=n-s,v>p){if(p=v-p,p>h&&E.sane){t.msg="invalid distance too far back",E.mode=16209;break t}if(y=0,x=_,0===d){if(y+=l-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}else if(d<p){if(y+=l+d-p,p-=d,p<k){k-=p;do{A[n++]=_[y++]}while(--p);if(y=0,d<k){p=d,k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}}else if(y+=d-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}for(;k>2;)A[n++]=x[y++],A[n++]=x[y++],A[n++]=x[y++],k-=3;k&&(A[n++]=x[y++],k>1&&(A[n++]=x[y++]))}else{y=n-v;do{A[n++]=A[y++],A[n++]=A[y++],A[n++]=A[y++],k-=3}while(k>2);k&&(A[n++]=A[y++],k>1&&(A[n++]=A[y++]))}break}}break}}while(a<i&&n<r);k=c>>3,a-=k,c-=k<<3,f&=(1<<c)-1,t.next_in=a,t.next_out=n,t.avail_in=a<i?i-a+5:5-(a-i),t.avail_out=n<r?r-n+257:257-(n-r),E.hold=f,E.bits=c};const te=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),ee=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),ae=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),ie=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var ne=(t,e,a,i,n,s,r,o)=>{const l=o.bits;let h,d,_,f,c,u,w=0,m=0,b=0,g=0,p=0,k=0,v=0,y=0,x=0,z=0,A=null;const E=new Uint16Array(16),R=new Uint16Array(16);let Z,U,S,D=null;for(w=0;w<=15;w++)E[w]=0;for(m=0;m<i;m++)E[e[a+m]]++;for(p=l,g=15;g>=1&&0===E[g];g--);if(p>g&&(p=g),0===g)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(b=1;b<g&&0===E[b];b++);for(p<b&&(p=b),y=1,w=1;w<=15;w++)if(y<<=1,y-=E[w],y<0)return-1;if(y>0&&(0===t||1!==g))return-1;for(R[1]=0,w=1;w<15;w++)R[w+1]=R[w]+E[w];for(m=0;m<i;m++)0!==e[a+m]&&(r[R[e[a+m]]++]=m);if(0===t?(A=D=r,u=20):1===t?(A=te,D=ee,u=257):(A=ae,D=ie,u=0),z=0,m=0,w=b,c=s,k=p,v=0,_=-1,x=1<<p,f=x-1,1===t&&x>852||2===t&&x>592)return 1;for(;;){Z=w-v,r[m]+1<u?(U=0,S=r[m]):r[m]>=u?(U=D[r[m]-u],S=A[r[m]-u]):(U=96,S=0),h=1<<w-v,d=1<<k,b=d;do{d-=h,n[c+(z>>v)+d]=Z<<24|U<<16|S|0}while(0!==d);for(h=1<<w-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,m++,0==--E[w]){if(w===g)break;w=e[a+r[m]]}if(w>p&&(z&f)!==_){for(0===v&&(v=p),c+=b,k=w-v,y=1<<k;k+v<g&&(y-=E[k+v],!(y<=0));)k++,y<<=1;if(x+=1<<k,1===t&&x>852||2===t&&x>592)return 1;_=z&f,n[_]=p<<24|k<<16|c-s|0}}return 0!==z&&(n[c+z]=w-v<<24|64<<16|0),o.bits=p,0};const{Z_FINISH:se,Z_BLOCK:re,Z_TREES:oe,Z_OK:le,Z_STREAM_END:he,Z_NEED_DICT:de,Z_STREAM_ERROR:_e,Z_DATA_ERROR:fe,Z_MEM_ERROR:ce,Z_BUF_ERROR:ue,Z_DEFLATED:we}=B,me=16209,be=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24);function ge(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const pe=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||e.mode<16180||e.mode>16211?1:0},ke=t=>{if(pe(t))return _e;const e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=16180,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,le},ve=t=>{if(pe(t))return _e;const e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,ke(t)},ye=(t,e)=>{let a;if(pe(t))return _e;const i=t.state;return e<0?(a=0,e=-e):(a=5+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?_e:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,ve(t))},xe=(t,e)=>{if(!t)return _e;const a=new ge;t.state=a,a.strm=t,a.window=null,a.mode=16180;const i=ye(t,e);return i!==le&&(t.state=null),i};let ze,Ae,Ee=!0;const Re=t=>{if(Ee){ze=new Int32Array(512),Ae=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(ne(1,t.lens,0,288,ze,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;ne(2,t.lens,0,32,Ae,0,t.work,{bits:5}),Ee=!1}t.lencode=ze,t.lenbits=9,t.distcode=Ae,t.distbits=5},Ze=(t,e,a,i)=>{let n;const s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(a-s.wsize,a),0),s.wnext=0,s.whave=s.wsize):(n=s.wsize-s.wnext,n>i&&(n=i),s.window.set(e.subarray(a-i,a-i+n),s.wnext),(i-=n)?(s.window.set(e.subarray(a-i,a),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0};var Ue={inflateReset:ve,inflateReset2:ye,inflateResetKeep:ke,inflateInit:t=>xe(t,15),inflateInit2:xe,inflate:(t,e)=>{let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z=0;const A=new Uint8Array(4);let E,R;const Z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(pe(t)||!t.output||!t.input&&0!==t.avail_in)return _e;a=t.state,16191===a.mode&&(a.mode=16192),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,_=o,f=l,x=le;t:for(;;)switch(a.mode){case 16180:if(0===a.wrap){a.mode=16192;break}for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(2&a.wrap&&35615===h){0===a.wbits&&(a.wbits=15),a.check=0,A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0),h=0,d=0,a.mode=16181;break}if(a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",a.mode=me;break}if((15&h)!==we){t.msg="unknown compression method",a.mode=me;break}if(h>>>=4,d-=4,y=8+(15&h),0===a.wbits&&(a.wbits=y),y>15||y>a.wbits){t.msg="invalid window size",a.mode=me;break}a.dmax=1<<a.wbits,a.flags=0,t.adler=a.check=1,a.mode=512&h?16189:16191,h=0,d=0;break;case 16181:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.flags=h,(255&a.flags)!==we){t.msg="unknown compression method",a.mode=me;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=me;break}a.head&&(a.head.text=h>>8&1),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16182;case 16182:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.time=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,A[2]=h>>>16&255,A[3]=h>>>24&255,a.check=N(a.check,A,4,0)),h=0,d=0,a.mode=16183;case 16183:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.xflags=255&h,a.head.os=h>>8),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16184;case 16184:if(1024&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length=h,a.head&&(a.head.extra_len=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0}else a.head&&(a.head.extra=null);a.mode=16185;case 16185:if(1024&a.flags&&(c=a.length,c>o&&(c=o),c&&(a.head&&(y=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(s,s+c),y)),512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,a.length-=c),a.length))break t;a.length=0,a.mode=16186;case 16186:if(2048&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.name+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=16187;case 16187:if(4096&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.comment+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.comment=null);a.mode=16188;case 16188:if(512&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(65535&a.check)){t.msg="header crc mismatch",a.mode=me;break}h=0,d=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=16191;break;case 16189:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}t.adler=a.check=be(h),h=0,d=0,a.mode=16190;case 16190:if(0===a.havedict)return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,de;t.adler=a.check=1,a.mode=16191;case 16191:if(e===re||e===oe)break t;case 16192:if(a.last){h>>>=7&d,d-=7&d,a.mode=16206;break}for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}switch(a.last=1&h,h>>>=1,d-=1,3&h){case 0:a.mode=16193;break;case 1:if(Re(a),a.mode=16199,e===oe){h>>>=2,d-=2;break t}break;case 2:a.mode=16196;break;case 3:t.msg="invalid block type",a.mode=me}h>>>=2,d-=2;break;case 16193:for(h>>>=7&d,d-=7&d;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if((65535&h)!=(h>>>16^65535)){t.msg="invalid stored block lengths",a.mode=me;break}if(a.length=65535&h,h=0,d=0,a.mode=16194,e===oe)break t;case 16194:a.mode=16195;case 16195:if(c=a.length,c){if(c>o&&(c=o),c>l&&(c=l),0===c)break t;n.set(i.subarray(s,s+c),r),o-=c,s+=c,l-=c,r+=c,a.length-=c;break}a.mode=16191;break;case 16196:for(;d<14;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.nlen=257+(31&h),h>>>=5,d-=5,a.ndist=1+(31&h),h>>>=5,d-=5,a.ncode=4+(15&h),h>>>=4,d-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=me;break}a.have=0,a.mode=16197;case 16197:for(;a.have<a.ncode;){for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.lens[Z[a.have++]]=7&h,h>>>=3,d-=3}for(;a.have<19;)a.lens[Z[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,E={bits:a.lenbits},x=ne(0,a.lens,0,19,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid code lengths set",a.mode=me;break}a.have=0,a.mode=16198;case 16198:for(;a.have<a.nlen+a.ndist;){for(;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(g<16)h>>>=m,d-=m,a.lens[a.have++]=g;else{if(16===g){for(R=m+2;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(h>>>=m,d-=m,0===a.have){t.msg="invalid bit length repeat",a.mode=me;break}y=a.lens[a.have-1],c=3+(3&h),h>>>=2,d-=2}else if(17===g){for(R=m+3;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=3+(7&h),h>>>=3,d-=3}else{for(R=m+7;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=11+(127&h),h>>>=7,d-=7}if(a.have+c>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=me;break}for(;c--;)a.lens[a.have++]=y}}if(a.mode===me)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=me;break}if(a.lenbits=9,E={bits:a.lenbits},x=ne(1,a.lens,0,a.nlen,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid literal/lengths set",a.mode=me;break}if(a.distbits=6,a.distcode=a.distdyn,E={bits:a.distbits},x=ne(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,E),a.distbits=E.bits,x){t.msg="invalid distances set",a.mode=me;break}if(a.mode=16199,e===oe)break t;case 16199:a.mode=16200;case 16200:if(o>=6&&l>=258){t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,$t(t,f),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,16191===a.mode&&(a.back=-1);break}for(a.back=0;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(b&&0==(240&b)){for(p=m,k=b,v=g;z=a.lencode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,a.length=g,0===b){a.mode=16205;break}if(32&b){a.back=-1,a.mode=16191;break}if(64&b){t.msg="invalid literal/length code",a.mode=me;break}a.extra=15&b,a.mode=16201;case 16201:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=16202;case 16202:for(;z=a.distcode[h&(1<<a.distbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(0==(240&b)){for(p=m,k=b,v=g;z=a.distcode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,64&b){t.msg="invalid distance code",a.mode=me;break}a.offset=g,a.extra=15&b,a.mode=16203;case 16203:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.offset+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=me;break}a.mode=16204;case 16204:if(0===l)break t;if(c=f-l,a.offset>c){if(c=a.offset-c,c>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=me;break}c>a.wnext?(c-=a.wnext,u=a.wsize-c):u=a.wnext-c,c>a.length&&(c=a.length),w=a.window}else w=n,u=r-a.offset,c=a.length;c>l&&(c=l),l-=c,a.length-=c;do{n[r++]=w[u++]}while(--c);0===a.length&&(a.mode=16200);break;case 16205:if(0===l)break t;n[r++]=a.length,l--,a.mode=16200;break;case 16206:if(a.wrap){for(;d<32;){if(0===o)break t;o--,h|=i[s++]<<d,d+=8}if(f-=l,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,r-f):F(a.check,n,f,r-f)),f=l,4&a.wrap&&(a.flags?h:be(h))!==a.check){t.msg="incorrect data check",a.mode=me;break}h=0,d=0}a.mode=16207;case 16207:if(a.wrap&&a.flags){for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=me;break}h=0,d=0}a.mode=16208;case 16208:x=he;break t;case me:x=fe;break t;case 16210:return ce;default:return _e}return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,(a.wsize||f!==t.avail_out&&a.mode<me&&(a.mode<16206||e!==se))&&Ze(t,t.output,t.next_out,f-t.avail_out),_-=t.avail_in,f-=t.avail_out,t.total_in+=_,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,t.next_out-f):F(a.check,n,f,t.next_out-f)),t.data_type=a.bits+(a.last?64:0)+(16191===a.mode?128:0)+(16199===a.mode||16194===a.mode?256:0),(0===_&&0===f||e===se)&&x===le&&(x=ue),x},inflateEnd:t=>{if(pe(t))return _e;let e=t.state;return e.window&&(e.window=null),t.state=null,le},inflateGetHeader:(t,e)=>{if(pe(t))return _e;const a=t.state;return 0==(2&a.wrap)?_e:(a.head=e,e.done=!1,le)},inflateSetDictionary:(t,e)=>{const a=e.length;let i,n,s;return pe(t)?_e:(i=t.state,0!==i.wrap&&16190!==i.mode?_e:16190===i.mode&&(n=1,n=F(n,e,a,0),n!==i.check)?fe:(s=Ze(t,e,a,a),s?(i.mode=16210,ce):(i.havedict=1,le)))},inflateInfo:"pako inflate (from Nodeca project)"};var Se=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const De=Object.prototype.toString,{Z_NO_FLUSH:Te,Z_FINISH:Oe,Z_OK:Fe,Z_STREAM_END:Le,Z_NEED_DICT:Ne,Z_STREAM_ERROR:Ie,Z_DATA_ERROR:Be,Z_MEM_ERROR:Ce}=B;function He(t){this.options=Tt({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=Ue.inflateInit2(this.strm,e.windowBits);if(a!==Fe)throw new Error(I[a]);if(this.header=new Se,Ue.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Nt(e.dictionary):"[object ArrayBuffer]"===De.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(a=Ue.inflateSetDictionary(this.strm,e.dictionary),a!==Fe)))throw new Error(I[a])}He.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize,n=this.options.dictionary;let s,r,o;if(this.ended)return!1;for(r=e===~~e?e:!0===e?Oe:Te,"[object ArrayBuffer]"===De.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;){for(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),s=Ue.inflate(a,r),s===Ne&&n&&(s=Ue.inflateSetDictionary(a,n),s===Fe?s=Ue.inflate(a,r):s===Be&&(s=Ne));a.avail_in>0&&s===Le&&a.state.wrap>0&&0!==t[a.next_in];)Ue.inflateReset(a),s=Ue.inflate(a,r);switch(s){case Ie:case Be:case Ne:case Ce:return this.onEnd(s),this.ended=!0,!1}if(o=a.avail_out,a.next_out&&(0===a.avail_out||s===Le))if("string"===this.options.to){let t=Bt(a.output,a.next_out),e=a.next_out-t,n=It(a.output,t);a.next_out=e,a.avail_out=i-e,e&&a.output.set(a.output.subarray(t,t+e),0),this.onData(n)}else this.onData(a.output.length===a.next_out?a.output:a.output.subarray(0,a.next_out));if(s!==Fe||0!==o){if(s===Le)return s=Ue.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(0===a.avail_in)break}}return!0},He.prototype.onData=function(t){this.chunks.push(t)},He.prototype.onEnd=function(t){t===Fe&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};const{Deflate:Me,deflate:je,deflateRaw:Ke,gzip:Pe}=Vt;var Ye=Me,Ge=je,Xe=B;const We=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const e=this._hasEvents?",":"";this.deflate.push(e+t,Xe.Z_SYNC_FLUSH),this._hasEvents=!0}finish(){if(this.deflate.push("]",Xe.Z_FINISH),this.deflate.err)throw this.deflate.err;const t=this.deflate.result;return this._init(),t}_init(){this._hasEvents=!1,this.deflate=new Ye,this.deflate.push("[",Xe.Z_NO_FLUSH)}},qe={clear:()=>{We.clear()},addEvent:t=>We.addEvent(t),finish:()=>We.finish(),compress:t=>function(t){return Ge(t)}(t)};addEventListener("message",(function(t){const e=t.data.method,a=t.data.id,i=t.data.arg;if(e in qe&&"function"==typeof qe[e])try{const t=qe[e](i);postMessage({id:a,method:e,success:!0,response:t})}catch(t){postMessage({id:a,method:e,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});']), URL.createObjectURL(e));
                                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.log("[Replay] Using compression worker");
                                    var r = new Worker(n);
                                    return new el(r)
                                } catch (t) {
                                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.log("[Replay] Failed to create compression worker")
                                }
                                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.log("[Replay] Using simple buffer"), new es
                            }({
                                useCompression: this._options.useCompression
                            }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this.startRecording()
                        }
                    }, {
                        key: "_handleException",
                        value: function(t) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.error("[Replay]", t), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this._options._experiments && this._options._experiments.captureExceptions && (0, B.captureException)(t)
                        }
                    }, {
                        key: "_loadAndCheckSession",
                        value: function() {
                            var t = em({
                                    timeouts: this.timeouts,
                                    stickySession: !!this._options.stickySession,
                                    currentSession: this.session,
                                    sessionSampleRate: this._options.sessionSampleRate,
                                    allowBuffering: this._options.errorSampleRate > 0 || "buffer" === this.recordingMode
                                }),
                                e = t.type,
                                n = t.session;
                            "new" === e && this.setInitialState();
                            var r = this.getSessionId();
                            return n.id !== r && (n.previousSessionId = r), this.session = n, !!this.session.sampled || (this.stop("session unsampled"), !1)
                        }
                    }, {
                        key: "_addListeners",
                        value: function() {
                            try {
                                P.document.addEventListener("visibilitychange", this._handleVisibilityChange), P.addEventListener("blur", this._handleWindowBlur), P.addEventListener("focus", this._handleWindowFocus), P.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), !this._hasInitializedCoreListeners && (! function(t) {
                                    var e, n, r, i = (0, B.getCurrentHub)().getScope(),
                                        a = (0, B.getCurrentHub)().getClient();
                                    if (i) {
                                        ;
                                        i.addScopeListener((e = t, function(t) {
                                            if (!!e.isEnabled()) {
                                                var n = function(t) {
                                                    var e = t.getLastBreadcrumb && t.getLastBreadcrumb();
                                                    if (eW === e || !e) return null;
                                                    return (eW = e, !e.category || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(e.category) || e.category.startsWith("ui.")) ? null : "console" === e.category ? function(t) {
                                                        var e = t.data && t.data.arguments;
                                                        if (!Array.isArray(e) || 0 === e.length) return ee(t);
                                                        var n = !1,
                                                            r = e.map(function(t) {
                                                                if (!t) return t;
                                                                if ("string" == typeof t) return t.length > 5e3 ? (n = !0, "".concat(t.slice(0, 5e3), "…")) : t;
                                                                if ("object" == typeof t) try {
                                                                    var e = (0, L.normalize)(t, 7),
                                                                        r = JSON.stringify(e);
                                                                    if (r.length > 5e3) {
                                                                        var i = ex(r.slice(0, 5e3)),
                                                                            a = JSON.parse(i);
                                                                        return n = !0, a
                                                                    }
                                                                    return e
                                                                } catch (t) {}
                                                                return t
                                                            });
                                                        return ee((0, N._)((0, D._)({}, t), {
                                                            data: (0, D._)((0, N._)((0, D._)({}, t.data), {
                                                                arguments: r
                                                            }), n ? {
                                                                _meta: {
                                                                    warnings: ["CONSOLE_ARG_TRUNCATED"]
                                                                }
                                                            } : {})
                                                        }))
                                                    }(e) : ee(e)
                                                }(t);
                                                n && t4(e, n)
                                            }
                                        }))
                                    }(0, L.addInstrumentationHandler)("dom", (n = t, function(t) {
                                        if (!!n.isEnabled()) {
                                            var e = function(t) {
                                                var e = function(t) {
                                                        var e, n = "click" === t.name,
                                                            r = null;
                                                        try {
                                                            r = n ? t5(t.event) : t8(t.event), e = (0, L.htmlTreeAsString)(r, {
                                                                maxStringLength: 200
                                                            }) || "<unknown>"
                                                        } catch (t) {
                                                            e = "<unknown>"
                                                        }
                                                        return {
                                                            target: r,
                                                            message: e
                                                        }
                                                    }(t),
                                                    n = e.target,
                                                    r = e.message;
                                                return ee((0, D._)({
                                                    category: "ui.".concat(t.name)
                                                }, er(n, r)))
                                            }(t);
                                            if (e) {
                                                var r = "click" === t.name,
                                                    i = r && t.event;
                                                r && n.clickDetector && i && !i.altKey && !i.metaKey && !i.ctrlKey && !i.shiftKey && ! function(t, e, n) {
                                                    t.handleClick(e, n)
                                                }(n.clickDetector, e, t5(t.event)), t4(n, e)
                                            }
                                        }
                                    })), (0, L.addInstrumentationHandler)("history", (r = t, function(t) {
                                        if (!!r.isEnabled()) {
                                            var e, n, i, a, o = (n = (e = t).from, i = e.to, {
                                                type: "navigation.push",
                                                start: a = Date.now() / 1e3,
                                                end: a,
                                                name: i,
                                                data: {
                                                    previous: n
                                                }
                                            });
                                            null !== o && (r.getContext().urls.push(o.name), r.triggerUserActivity(), r.addUpdate(function() {
                                                return ek(r, [o]), !1
                                            }))
                                        }
                                    })), ! function(t) {
                                        var e = (0, B.getCurrentHub)().getClient();
                                        try {
                                            var n, r, i = new TextEncoder,
                                                a = t.getOptions(),
                                                o = a.networkDetailAllowUrls,
                                                s = a.networkDetailDenyUrls,
                                                u = a.networkCaptureBodies,
                                                c = a.networkRequestHeaders,
                                                l = a.networkResponseHeaders,
                                                d = {
                                                    replay: t,
                                                    textEncoder: i,
                                                    networkDetailAllowUrls: o,
                                                    networkDetailDenyUrls: s,
                                                    networkCaptureBodies: u,
                                                    networkRequestHeaders: c,
                                                    networkResponseHeaders: l
                                                };
                                            if (e && e.on) e.on("beforeAddBreadcrumb", function(t, e) {
                                                return function(t, e, n) {
                                                    if (e.data) try {
                                                        var r, i, a, o, s, u, c, l, d, f, _, p, h;
                                                        if (function(t) {
                                                                return "xhr" === t.category
                                                            }(e) && function(t) {
                                                                return t && t.xhr
                                                            }(n)) {
                                                            ;
                                                            r = e, i = n, a = t, o = i.xhr, s = eR(i.input, a.textEncoder), u = o.getResponseHeader("content-length") ? eD(o.getResponseHeader("content-length")) : eR(o.response, a.textEncoder), void 0 !== s && (r.data.request_body_size = s), void 0 !== u && (r.data.response_body_size = u), ! function(t, e, n) {
                                                                eH.apply(this, arguments)
                                                            }(e, n, t)
                                                        }
                                                        if (function(t) {
                                                                return "fetch" === t.category
                                                            }(e) && function(t) {
                                                                return t && t.response
                                                            }(n)) {
                                                            ;
                                                            c = e, l = n, d = t, f = l.input, _ = l.response, p = eR(eY(f), d.textEncoder), h = _ ? eD(_.headers.get("content-length")) : void 0, void 0 !== p && (c.data.request_body_size = p), void 0 !== h && (c.data.response_body_size = h), ! function(t, e, n) {
                                                                eL.apply(this, arguments)
                                                            }(e, n, t)
                                                        }
                                                    } catch (t) {
                                                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.warn("Error when enriching network breadcrumb")
                                                    }
                                                }(d, t, e)
                                            });
                                            else {
                                                ;
                                                (0, L.addInstrumentationHandler)("fetch", (n = t, function(t) {
                                                    n.isEnabled() && ew(n, function(t) {
                                                        var e = t.startTimestamp,
                                                            n = t.endTimestamp,
                                                            r = t.fetchData,
                                                            i = t.response;
                                                        if (!n) return null;
                                                        var a = r.method;
                                                        return {
                                                            type: "resource.fetch",
                                                            start: e / 1e3,
                                                            end: n / 1e3,
                                                            name: r.url,
                                                            data: {
                                                                method: a,
                                                                statusCode: i ? i.status : void 0
                                                            }
                                                        }
                                                    }(t))
                                                })), (0, L.addInstrumentationHandler)("xhr", (r = t, function(t) {
                                                    r.isEnabled() && ew(r, function(t) {
                                                        var e = t.startTimestamp,
                                                            n = t.endTimestamp,
                                                            r = t.xhr[L.SENTRY_XHR_DATA_KEY];
                                                        if (!e || !n || !r) return null;
                                                        var i = r.method,
                                                            a = r.url,
                                                            o = r.status_code;
                                                        return void 0 === a ? null : {
                                                            type: "resource.xhr",
                                                            name: a,
                                                            start: e / 1e3,
                                                            end: n / 1e3,
                                                            data: {
                                                                method: i,
                                                                statusCode: o
                                                            }
                                                        }
                                                    }(t))
                                                }))
                                            }
                                        } catch (t) {}
                                    }(t), (0, B.addGlobalEventProcessor)(function(t) {
                                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                            n = e ? eS(t) : void 0;
                                        return function(e, r) {
                                            var i, a, o, s;
                                            if ("replay_event" === e.type) return delete e.breadcrumbs, e;
                                            if (e.type && !eb(e)) return e;
                                            if (i = e, a = r, !i.type && i.exception && i.exception.values && i.exception.values.length && (a.originalException && a.originalException.__rrweb__ || i.exception.values.some(function(t) {
                                                    return !!t.stacktrace && !!t.stacktrace.frames && !!t.stacktrace.frames.length && t.stacktrace.frames.some(function(t) {
                                                        return t.filename && t.filename.includes("/rrweb/src/")
                                                    })
                                                })) && !t.getOptions()._experiments.captureExceptions) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.log("[Replay] Ignoring error from rrweb internals", e), null;
                                            return o = t, s = e, ("buffer" === o.recordingMode && s.message !== Y && s.exception && !s.type && ep(o.getOptions().errorSampleRate) || "session" === t.recordingMode) && (e.tags = (0, N._)((0, D._)({}, e.tags), {
                                                replayId: t.getSessionId()
                                            })), n && n(e, {
                                                statusCode: 200
                                            }), e
                                        }
                                    }(t, ! function(t) {
                                        return !!(t && t.on)
                                    }(a))),
                                    function(t) {
                                        return !!(t && t.on)
                                    }(a) && (a.on("afterSendEvent", eS(t)), a.on("createDsc", function(e) {
                                        var n = t.getSessionId();
                                        n && t.isEnabled() && "session" === t.recordingMode && (e.replay_id = n)
                                    }), a.on("startTransaction", function(e) {
                                        t.lastTransaction = e
                                    }), a.on("finishTransaction", function(e) {
                                        t.lastTransaction = e
                                    }))
                                }(this), this._hasInitializedCoreListeners = !0)
                            } catch (t) {
                                this._handleException(t)
                            }
                            if ("PerformanceObserver" in P) {
                                var t, e;
                                this._performanceObserver = (t = this, e = new PerformanceObserver(function(e) {
                                    var n, r, i, a, o, s, u, c, l, d = (n = t.performanceEvents, r = e.getEntries(), a = (i = (0, I._)(n.reduce(function(t, e) {
                                        return "navigation" === e.entryType ? t[0].push(e) : "largest-contentful-paint" === e.entryType ? t[1].push(e) : t[2].push(e), t
                                    }, [
                                        [],
                                        [],
                                        []
                                    ]), 3))[0], o = i[1], s = i[2], u = [], c = [], l = o.length ? o[o.length - 1] : void 0, r.forEach(function(t) {
                                        if ("largest-contentful-paint" === t.entryType) {
                                            (!l || l.startTime < t.startTime) && (l = t);
                                            return
                                        }
                                        if ("navigation" === t.entryType) {
                                            t.duration > 0 && !a.find(ea(t)) && !c.find(ea(t)) && c.push(t);
                                            return
                                        }
                                        u.push(t)
                                    }), (0, C._)(l ? [l] : []).concat((0, C._)(a), (0, C._)(s), (0, C._)(u), (0, C._)(c)).sort(function(t, e) {
                                        return t.startTime - e.startTime
                                    }));
                                    t.performanceEvents = d
                                }), ["element", "event", "first-input", "largest-contentful-paint", "layout-shift", "longtask", "navigation", "paint", "resource"].forEach(function(t) {
                                    try {
                                        e.observe({
                                            type: t,
                                            buffered: !0
                                        })
                                    } catch (t) {}
                                }), e)
                            }
                        }
                    }, {
                        key: "_removeListeners",
                        value: function() {
                            try {
                                P.document.removeEventListener("visibilitychange", this._handleVisibilityChange), P.removeEventListener("blur", this._handleWindowBlur), P.removeEventListener("focus", this._handleWindowFocus), P.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceObserver && (this._performanceObserver.disconnect(), this._performanceObserver = null)
                            } catch (t) {
                                this._handleException(t)
                            }
                        }
                    }, {
                        key: "__init13",
                        value: function() {
                            var t = this;
                            this._handleVisibilityChange = function() {
                                "visible" === P.document.visibilityState ? t._doChangeToForegroundTasks() : t._doChangeToBackgroundTasks()
                            }
                        }
                    }, {
                        key: "__init14",
                        value: function() {
                            var t = this;
                            this._handleWindowBlur = function() {
                                var e = ee({
                                    category: "ui.blur"
                                });
                                t._doChangeToBackgroundTasks(e)
                            }
                        }
                    }, {
                        key: "__init15",
                        value: function() {
                            var t = this;
                            this._handleWindowFocus = function() {
                                var e = ee({
                                    category: "ui.focus"
                                });
                                t._doChangeToForegroundTasks(e)
                            }
                        }
                    }, {
                        key: "__init16",
                        value: function() {
                            var t = this;
                            this._handleKeyboardEvent = function(e) {
                                ! function(t, e) {
                                    if (!!t.isEnabled()) {
                                        t.updateUserActivity();
                                        var n = function(t) {
                                            var e = t.metaKey,
                                                n = t.shiftKey,
                                                r = t.ctrlKey,
                                                i = t.altKey,
                                                a = t.key,
                                                o = t.target;
                                            if (!o || function(t) {
                                                    return "INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable
                                                }(o) || !a) return null;
                                            var s = e || r || i,
                                                u = 1 === a.length;
                                            if (!s && u) return null;
                                            var c = (0, L.htmlTreeAsString)(o, {
                                                    maxStringLength: 200
                                                }) || "<unknown>",
                                                l = er(o, c);
                                            return ee({
                                                category: "ui.keyDown",
                                                message: c,
                                                data: (0, N._)((0, D._)({}, l.data), {
                                                    metaKey: e,
                                                    shiftKey: n,
                                                    ctrlKey: r,
                                                    altKey: i,
                                                    key: a
                                                })
                                            })
                                        }(e);
                                        n && t4(t, n)
                                    }
                                }(t, e)
                            }
                        }
                    }, {
                        key: "_doChangeToBackgroundTasks",
                        value: function(t) {
                            if (this.session) {
                                var e = e_(this.session, this.timeouts);
                                t && !e && this._createCustomBreadcrumb(t), this.conditionalFlush()
                            }
                        }
                    }, {
                        key: "_doChangeToForegroundTasks",
                        value: function(t) {
                            if (this.session) {
                                if (!this.checkAndHandleExpiredSession()) {
                                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.log("[Replay] Document has become active, but session has expired");
                                    return
                                }
                                t && this._createCustomBreadcrumb(t)
                            }
                        }
                    }, {
                        key: "_triggerFullSnapshot",
                        value: function() {
                            var t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                            try {
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.log("[Replay] Taking full rrweb snapshot"), t3.takeFullSnapshot(t)
                            } catch (t) {
                                this._handleException(t)
                            }
                        }
                    }, {
                        key: "_updateUserActivity",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
                            this._lastActivity = t
                        }
                    }, {
                        key: "_updateSessionActivity",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
                            this.session && (this.session.lastActivity = t, this._maybeSaveSession())
                        }
                    }, {
                        key: "_createCustomBreadcrumb",
                        value: function(t) {
                            var e = this;
                            this.addUpdate(function() {
                                e.throttledAddEvent({
                                    type: p.Custom,
                                    timestamp: t.timestamp || 0,
                                    data: {
                                        tag: "breadcrumb",
                                        payload: t
                                    }
                                })
                            })
                        }
                    }, {
                        key: "_addPerformanceEntries",
                        value: function() {
                            var t = (0, C._)(this.performanceEvents);
                            return this.performanceEvents = [], Promise.all(ek(this, t.map(eV).filter(Boolean)))
                        }
                    }, {
                        key: "_clearContext",
                        value: function() {
                            this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = []
                        }
                    }, {
                        key: "_updateInitialTimestampFromEventBuffer",
                        value: function() {
                            var t = this.session,
                                e = this.eventBuffer;
                            if (!!t && !!e) {
                                if (!t.segmentId) {
                                    var n = e.getEarliestTimestamp();
                                    n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n)
                                }
                            }
                        }
                    }, {
                        key: "_popEventContext",
                        value: function() {
                            var t = {
                                initialTimestamp: this._context.initialTimestamp,
                                initialUrl: this._context.initialUrl,
                                errorIds: Array.from(this._context.errorIds),
                                traceIds: Array.from(this._context.traceIds),
                                urls: this._context.urls
                            };
                            return this._clearContext(), t
                        }
                    }, {
                        key: "_runFlush",
                        value: function() {
                            var t = this;
                            return (0, w._)(function() {
                                var e, n, r, i, a, o;
                                return (0, U._)(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (!t.session || !t.eventBuffer) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.error("[Replay] No session or eventBuffer found to flush."), [2];
                                            return [4, t._addPerformanceEntries()];
                                        case 1:
                                            if (s.sent(), !t.eventBuffer || !t.eventBuffer.hasEvents) return [2];
                                            return [4, function(t) {
                                                return eq.apply(this, arguments)
                                            }(t)];
                                        case 2:
                                            if (s.sent(), !t.eventBuffer) return [2];
                                            s.label = 3;
                                        case 3:
                                            return s.trys.push([3, 6, , 7]), t._updateInitialTimestampFromEventBuffer(), [4, t.eventBuffer.finish()];
                                        case 4:
                                            return e = s.sent(), n = t.session.id, r = t._popEventContext(), i = t.session.segmentId++, t._maybeSaveSession(), [4, eQ({
                                                replayId: n,
                                                recordingData: e,
                                                segmentId: i,
                                                eventContext: r,
                                                session: t.session,
                                                options: t.getOptions(),
                                                timestamp: Date.now()
                                            })];
                                        case 5:
                                            return s.sent(), [3, 7];
                                        case 6:
                                            return a = s.sent(), t._handleException(a), t.stop("sendReplay"), (o = (0, B.getCurrentHub)().getClient()) && o.recordDroppedEvent("send_error", "replay"), [3, 7];
                                        case 7:
                                            return [2]
                                    }
                                })
                            })()
                        }
                    }, {
                        key: "__init17",
                        value: function() {
                            var t = this;
                            this._flush = (0, w._)(function() {
                                var e, n, r, i, a, o, s = arguments;
                                return (0, U._)(this, function(u) {
                                    switch (u.label) {
                                        case 0:
                                            if (n = void 0 !== (e = (s.length > 0 && void 0 !== s[0] ? s[0] : {}).force) && e, !t._isEnabled && !n) return [2];
                                            if (!t.checkAndHandleExpiredSession()) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.error("[Replay] Attempting to finish replay event after session expired."), [2];
                                            if (!t.session) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.error("[Replay] No session found to flush."), [2];
                                            if (r = t.session.started, (i = Date.now() - r) < t._options.minReplayDuration || i > t.timeouts.maxSessionLife + 5e3) return a = t.getOptions()._experiments.traceInternals ? console.warn : L.logger.warn, ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a("[Replay] Session duration (".concat(Math.floor(i / 1e3), "s) is too short or too long, not sending replay.")), [2];
                                            if (t._debouncedFlush.cancel(), t._flushLock) return [3, 2];
                                            return t._flushLock = t._runFlush(), [4, t._flushLock];
                                        case 1:
                                            return u.sent(), t._flushLock = null, [2];
                                        case 2:
                                            return u.trys.push([2, 4, 5, 6]), [4, t._flushLock];
                                        case 3:
                                            return u.sent(), [3, 6];
                                        case 4:
                                            return o = u.sent(), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && L.logger.error(o), [3, 6];
                                        case 5:
                                            return t._debouncedFlush(), [7];
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }, {
                        key: "_maybeSaveSession",
                        value: function() {
                            this.session && this._options.stickySession && eh(this.session)
                        }
                    }, {
                        key: "__init18",
                        value: function() {
                            var t = this;
                            this._onMutationHandler = function(e) {
                                var n = e.length,
                                    r = t._options.mutationLimit,
                                    i = t._options.mutationBreadcrumbLimit,
                                    a = r && n > r;
                                if (n > i || a) {
                                    var o = ee({
                                        category: "replay.mutations",
                                        data: {
                                            count: n,
                                            limit: a
                                        }
                                    });
                                    t._createCustomBreadcrumb(o)
                                }
                                return !a || (t.stop("mutationLimit"), !1)
                            }
                        }
                    }]), t
                }();

            function e3(t, e, n, r) {
                var i = "string" == typeof r ? r.split(",") : [],
                    a = (0, C._)(t).concat((0, C._)(i), (0, C._)(e));
                return void 0 !== n && ("string" == typeof n && a.push(".".concat(n)), console.warn("[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration.")), a.join(",")
            }

            function e6() {
                return "undefined" != typeof window && (!(0, L.isNodeEnv)() || function() {
                    return void 0 !== M && "renderer" === M.type
                }())
            }
            var e4 = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
                e5 = ["content-length", "content-type", "accept"],
                e8 = !1,
                e7 = function() {
                    function t() {
                        var e, n, r, i, a, o, s, u, c, l, d, f, _, p, h = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            v = h.flushMinDelay,
                            m = h.flushMaxDelay,
                            g = h.minReplayDuration,
                            y = h.stickySession,
                            E = h.useCompression,
                            b = h._experiments,
                            S = h.sessionSampleRate,
                            k = h.errorSampleRate,
                            w = h.maskAllText,
                            x = void 0 === w || w,
                            R = h.maskAllInputs,
                            I = void 0 === R || R,
                            O = h.blockAllMedia,
                            A = h.mutationBreadcrumbLimit,
                            U = h.mutationLimit,
                            B = h.slowClickTimeout,
                            L = h.slowClickIgnoreSelectors,
                            M = h.networkDetailAllowUrls,
                            P = h.networkDetailDenyUrls,
                            G = h.networkCaptureBodies,
                            Y = h.networkRequestHeaders,
                            F = h.networkResponseHeaders,
                            z = h.mask,
                            H = h.unmask,
                            W = h.block,
                            j = h.unblock,
                            q = h.ignore,
                            Z = h.maskFn,
                            V = h.beforeAddRecordingEvent,
                            K = h.blockClass,
                            J = h.blockSelector,
                            X = h.maskInputOptions,
                            $ = h.maskTextClass,
                            Q = h.maskTextSelector,
                            tt = h.ignoreClass;
                        if ((0, T._)(this, t), t.prototype.__init.call(this), this._recordingOptions = (0, N._)((0, D._)({
                                maskAllInputs: I,
                                maskAllText: x,
                                maskInputOptions: (0, N._)((0, D._)({}, X || {}), {
                                    password: !0
                                }),
                                maskTextFn: Z,
                                maskInputFn: Z
                            }, (n = (e = {
                                mask: void 0 === z ? [] : z,
                                unmask: void 0 === H ? [] : H,
                                block: void 0 === W ? [] : W,
                                unblock: void 0 === j ? [] : j,
                                ignore: void 0 === q ? [] : q,
                                blockClass: K,
                                blockSelector: J,
                                maskTextClass: $,
                                maskTextSelector: Q,
                                ignoreClass: tt
                            }).mask, r = e.unmask, i = e.block, a = e.unblock, o = e.ignore, s = e.blockClass, u = e.blockSelector, c = e.maskTextClass, l = e.maskTextSelector, d = e.ignoreClass, f = e3(n, [".sentry-mask", "[data-sentry-mask]"], c, l), p = {
                                maskTextSelector: f,
                                unmaskTextSelector: _ = e3(r, [".sentry-unmask", "[data-sentry-unmask]"]),
                                maskInputSelector: f,
                                unmaskInputSelector: _,
                                blockSelector: e3(i, [".sentry-block", "[data-sentry-block]"].concat((0, C._)(['base[href="/"]'])), s, u),
                                unblockSelector: e3(a, [".sentry-unblock", "[data-sentry-unblock]"]),
                                ignoreSelector: e3(o, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'], d)
                            }, s instanceof RegExp && (p.blockClass = s), c instanceof RegExp && (p.maskTextClass = c), p)), {
                                slimDOMOptions: "all",
                                inlineStylesheet: !0,
                                inlineImages: !1,
                                collectFonts: !0
                            }), this._initialOptions = {
                                flushMinDelay: void 0 === v ? 5e3 : v,
                                flushMaxDelay: void 0 === m ? 5500 : m,
                                minReplayDuration: Math.min(void 0 === g ? 4999 : g, 15e3),
                                stickySession: void 0 === y || y,
                                sessionSampleRate: S,
                                errorSampleRate: k,
                                useCompression: void 0 === E || E,
                                blockAllMedia: void 0 === O || O,
                                maskAllInputs: I,
                                maskAllText: x,
                                mutationBreadcrumbLimit: void 0 === A ? 750 : A,
                                mutationLimit: void 0 === U ? 1e4 : U,
                                slowClickTimeout: void 0 === B ? 7e3 : B,
                                slowClickIgnoreSelectors: void 0 === L ? [] : L,
                                networkDetailAllowUrls: void 0 === M ? [] : M,
                                networkDetailDenyUrls: void 0 === P ? [] : P,
                                networkCaptureBodies: void 0 === G || G,
                                networkRequestHeaders: e9(void 0 === Y ? [] : Y),
                                networkResponseHeaders: e9(void 0 === F ? [] : F),
                                beforeAddRecordingEvent: V,
                                _experiments: void 0 === b ? {} : b
                            }, "number" == typeof S && (console.warn("[Replay] You are passing `sessionSampleRate` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure `replaysSessionSampleRate` directly in the SDK init options, e.g.:\nSentry.init({ replaysSessionSampleRate: ".concat(S, " })")), this._initialOptions.sessionSampleRate = S), "number" == typeof k && (console.warn("[Replay] You are passing `errorSampleRate` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure `replaysOnErrorSampleRate` directly in the SDK init options, e.g.:\nSentry.init({ replaysOnErrorSampleRate: ".concat(k, " })")), this._initialOptions.errorSampleRate = k), this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? "".concat(this._recordingOptions.blockSelector, ",").concat(e4) : e4), this._isInitialized && e6()) throw Error("Multiple Sentry Session Replay instances are not supported");
                        this._isInitialized = !0
                    }
                    return (0, x._)(t, [{
                        key: "__init",
                        value: function() {
                            this.name = t.id
                        }
                    }, {
                        key: "_isInitialized",
                        get: function() {
                            return e8
                        },
                        set: function(t) {
                            e8 = t
                        }
                    }, {
                        key: "setupOnce",
                        value: function() {
                            var t = this;
                            e6() && (this._setup(), setTimeout(function() {
                                return t._initialize()
                            }))
                        }
                    }, {
                        key: "start",
                        value: function() {
                            this._replay && this._replay.start()
                        }
                    }, {
                        key: "startBuffering",
                        value: function() {
                            this._replay && this._replay.startBuffering()
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            return this._replay ? this._replay.stop() : Promise.resolve()
                        }
                    }, {
                        key: "flush",
                        value: function(t) {
                            return this._replay && this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(t) : Promise.resolve()
                        }
                    }, {
                        key: "getReplayId",
                        value: function() {
                            if (this._replay && this._replay.isEnabled()) return this._replay.getSessionId()
                        }
                    }, {
                        key: "_initialize",
                        value: function() {
                            this._replay && this._replay.initializeSampling()
                        }
                    }, {
                        key: "_setup",
                        value: function() {
                            var t = function(t) {
                                var e = (0, B.getCurrentHub)().getClient(),
                                    n = e && e.getOptions(),
                                    r = (0, D._)({
                                        sessionSampleRate: 0,
                                        errorSampleRate: 0
                                    }, (0, L.dropUndefinedKeys)(t));
                                return n ? (null == t.sessionSampleRate && null == t.errorSampleRate && null == n.replaysSessionSampleRate && null == n.replaysOnErrorSampleRate && console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set."), "number" == typeof n.replaysSessionSampleRate && (r.sessionSampleRate = n.replaysSessionSampleRate), "number" == typeof n.replaysOnErrorSampleRate && (r.errorSampleRate = n.replaysOnErrorSampleRate), r) : (console.warn("SDK client is not available."), r)
                            }(this._initialOptions);
                            this._replay = new e2({
                                options: t,
                                recordingOptions: this._recordingOptions
                            })
                        }
                    }], [{
                        key: "__initStatic",
                        value: function() {
                            this.id = "Replay"
                        }
                    }]), t
                }();
            e7.__initStatic();

            function e9(t) {
                return (0, C._)(e5).concat((0, C._)(t.map(function(t) {
                    return t.toLowerCase()
                })))
            }
        },
        147658: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                applyAggregateErrorsToEvent: function() {
                    return u
                }
            });
            var r = n("21189"),
                i = n("227094"),
                a = n("761020");
            n("996173"), n("47120"), n("357629"), n("411104"), n("814951"), n("363505");
            var o = n("46834"),
                s = n("336344");

            function u(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 250,
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    i = arguments.length > 4 ? arguments[4] : void 0,
                    u = arguments.length > 5 ? arguments[5] : void 0,
                    d = arguments.length > 6 ? arguments[6] : void 0;
                if (u.exception && u.exception.values && d && (0, o.isInstanceOf)(d.originalException, Error)) {
                    var f = u.exception.values.length > 0 ? u.exception.values[u.exception.values.length - 1] : void 0;
                    f && (u.exception.values = function(t, e) {
                        return t.map(function(t) {
                            return t.value && (t.value = (0, s.truncate)(t.value, e)), t
                        })
                    }(function t(e, n, r, i, s, u, d, f) {
                        if (u.length >= r + 1) return u;
                        var _ = (0, a._)(u);
                        if ((0, o.isInstanceOf)(i[s], Error)) {
                            c(d, f);
                            var p = e(n, i[s]),
                                h = _.length;
                            l(p, s, h, f), _ = t(e, n, r, i[s], s, [p].concat((0, a._)(_)), p, h)
                        }
                        return Array.isArray(i.errors) && i.errors.forEach(function(i, u) {
                            if ((0, o.isInstanceOf)(i, Error)) {
                                c(d, f);
                                var p = e(n, i),
                                    h = _.length;
                                l(p, "errors[".concat(u, "]"), h, f), _ = t(e, n, r, i, s, [p].concat((0, a._)(_)), p, h)
                            }
                        }), _
                    }(t, e, i, d.originalException, r, u.exception.values, f, 0), n))
                }
            }

            function c(t, e) {
                t.mechanism = t.mechanism || {
                    type: "generic",
                    handled: !0
                }, t.mechanism = (0, i._)((0, r._)({}, t.mechanism), {
                    is_exception_group: !0,
                    exception_id: e
                })
            }

            function l(t, e, n, a) {
                t.mechanism = t.mechanism || {
                    type: "generic",
                    handled: !0
                }, t.mechanism = (0, i._)((0, r._)({}, t.mechanism), {
                    type: "chained",
                    source: e,
                    exception_id: n,
                    parent_id: a
                })
            }
        },
        545459: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BAGGAGE_HEADER_NAME: function() {
                    return s
                },
                baggageHeaderToDynamicSamplingContext: function() {
                    return l
                },
                dynamicSamplingContextToSentryBaggageHeader: function() {
                    return d
                }
            });
            var r = n("21189"),
                i = n("154005");
            n("724458"), n("357629"), n("151809"), n("754598"), n("301563"), n("849202"), n("814951"), n("917168"), n("363505"), n("566702");
            var a = n("46834"),
                o = n("529866"),
                s = "baggage",
                u = "sentry-",
                c = /^sentry-/;

            function l(t) {
                if ((0, a.isString)(t) || Array.isArray(t)) {
                    var e = {};
                    if (Array.isArray(t)) e = t.reduce(function(t, e) {
                        var n = f(e);
                        return (0, r._)({}, t, n)
                    }, {});
                    else {
                        if (!t) return;
                        e = f(t)
                    }
                    var n = Object.entries(e).reduce(function(t, e) {
                        var n = (0, i._)(e, 2),
                            r = n[0],
                            a = n[1];
                        return r.match(c) && (t[r.slice(u.length)] = a), t
                    }, {});
                    return Object.keys(n).length > 0 ? n : void 0
                }
            }

            function d(t) {
                if (t) return function(t) {
                    if (0 !== Object.keys(t).length) return Object.entries(t).reduce(function(t, e, n) {
                        var r = (0, i._)(e, 2),
                            a = r[0],
                            s = r[1],
                            u = "".concat(encodeURIComponent(a), "=").concat(encodeURIComponent(s)),
                            c = 0 === n ? u : "".concat(t, ",").concat(u);
                        return c.length > 8192 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.warn("Not adding key: ".concat(a, " with val: ").concat(s, " to baggage header due to exceeding baggage size limits.")), t) : c
                    }, "")
                }(Object.entries(t).reduce(function(t, e) {
                    var n = (0, i._)(e, 2),
                        r = n[0],
                        a = n[1];
                    return a && (t["".concat(u).concat(r)] = a), t
                }, {}))
            }

            function f(t) {
                return t.split(",").map(function(t) {
                    return t.split("=").map(function(t) {
                        return decodeURIComponent(t.trim())
                    })
                }).reduce(function(t, e) {
                    var n = (0, i._)(e, 2),
                        r = n[0],
                        a = n[1];
                    return t[r] = a, t
                }, {})
            }
        },
        829919: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getDomElement: function() {
                    return s
                },
                getLocationHref: function() {
                    return o
                },
                htmlTreeAsString: function() {
                    return a
                }
            }), n("653041"), n("978209"), n("462848"), n("357629"), n("363505"), n("814951"), n("917168"), n("301563");
            var r = n("46834"),
                i = (0, n("24716").getGlobalObject)();

            function a(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                try {
                    for (var n, i = t, a = [], o = 0, s = 0, u = 3, c = Array.isArray(e) ? e : e.keyAttrs, l = !Array.isArray(e) && e.maxStringLength || 80; i && o++ < 5 && (n = function(t, e) {
                            var n, i, a, o, s, u = [];
                            if (!t || !t.tagName) return "";
                            u.push(t.tagName.toLowerCase());
                            var c = e && e.length ? e.filter(function(e) {
                                return t.getAttribute(e)
                            }).map(function(e) {
                                return [e, t.getAttribute(e)]
                            }) : null;
                            if (c && c.length) c.forEach(function(t) {
                                u.push("[".concat(t[0], '="').concat(t[1], '"]'))
                            });
                            else if (t.id && u.push("#".concat(t.id)), (n = t.className) && (0, r.isString)(n))
                                for (s = 0, i = n.split(/\s+/); s < i.length; s++) u.push(".".concat(i[s]));
                            var l = ["aria-label", "type", "name", "title", "alt"];
                            for (s = 0; s < l.length; s++) a = l[s], (o = t.getAttribute(a)) && u.push("[".concat(a, '="').concat(o, '"]'));
                            return u.join("")
                        }(i, c), "html" !== n && (!(o > 1) || !(s + a.length * u + n.length >= l)));) {
                        ;
                        a.push(n), s += n.length, i = i.parentNode
                    }
                    return a.reverse().join(" > ")
                } catch (t) {
                    return "<unknown>"
                }
            }

            function o() {
                try {
                    return i.document.location.href
                } catch (t) {
                    return ""
                }
            }

            function s(t) {
                return i.document && i.document.querySelector ? i.document.querySelector(t) : null
            }
        },
        854569: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                createClientReportEnvelope: function() {
                    return a
                }
            });
            var r = n("50074"),
                i = n("868145");

            function a(t, e, n) {
                var a = [{
                    type: "client_report"
                }, {
                    timestamp: n || (0, i.dateTimestampInSeconds)(),
                    discarded_events: t
                }];
                return (0, r.createEnvelope)(e ? {
                    dsn: e
                } : {}, [a])
            }
        },
        177668: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                dsnFromString: function() {
                    return s
                },
                dsnToString: function() {
                    return o
                },
                makeDsn: function() {
                    return c
                }
            });
            var r = n("154005");
            n("814951"), n("301563"), n("849202"), n("917168"), n("754598"), n("357629");
            var i = n("529866"),
                a = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

            function o(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = t.host,
                    r = t.path,
                    i = t.pass,
                    a = t.port,
                    o = t.projectId,
                    s = t.protocol,
                    u = t.publicKey;
                return "".concat(s, "://").concat(u).concat(e && i ? ":".concat(i) : "") + "@".concat(n).concat(a ? ":".concat(a) : "", "/").concat(r ? "".concat(r, "/") : r).concat(o)
            }

            function s(t) {
                var e = a.exec(t);
                if (!e) {
                    console.error("Invalid Sentry Dsn: ".concat(t));
                    return
                }
                var n = (0, r._)(e.slice(1), 6),
                    i = n[0],
                    o = n[1],
                    s = n[2],
                    c = n[3],
                    l = n[4],
                    d = n[5],
                    f = "",
                    _ = d,
                    p = _.split("/");
                if (p.length > 1 && (f = p.slice(0, -1).join("/"), _ = p.pop()), _) {
                    var h = _.match(/^\d+/);
                    h && (_ = h[0])
                }
                return u({
                    host: c,
                    pass: void 0 === s ? "" : s,
                    path: f,
                    projectId: _,
                    port: void 0 === l ? "" : l,
                    protocol: i,
                    publicKey: o
                })
            }

            function u(t) {
                return {
                    protocol: t.protocol,
                    publicKey: t.publicKey || "",
                    pass: t.pass || "",
                    host: t.host,
                    port: t.port || "",
                    path: t.path || "",
                    projectId: t.projectId
                }
            }

            function c(t) {
                var e = "string" == typeof t ? s(t) : u(t);
                if (e && function(t) {
                        if (!("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__)) return !0;
                        var e, n = t.port,
                            r = t.projectId,
                            a = t.protocol;
                        if (["protocol", "publicKey", "host", "projectId"].find(function(e) {
                                return !t[e] && (i.logger.error("Invalid Sentry Dsn: ".concat(e, " missing")), !0)
                            })) return !1;
                        if (!r.match(/^\d+$/)) return i.logger.error("Invalid Sentry Dsn: Invalid projectId ".concat(r)), !1;
                        return "http" === (e = a) || "https" === e ? !(n && isNaN(parseInt(n, 10))) || (i.logger.error("Invalid Sentry Dsn: Invalid port ".concat(n)), !1) : (i.logger.error("Invalid Sentry Dsn: Invalid protocol ".concat(a)), !1)
                    }(e)) return e
            }
        },
        776914: function(t, e, n) {
            "use strict";

            function r() {
                return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
            }

            function i() {
                return "npm"
            }
            n.r(e), n.d(e, {
                getSDKSource: function() {
                    return i
                },
                isBrowserBundle: function() {
                    return r
                }
            })
        },
        50074: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                addItemToEnvelope: function() {
                    return l
                },
                createAttachmentEnvelopeItem: function() {
                    return v
                },
                createEnvelope: function() {
                    return c
                },
                createEventEnvelopeHeaders: function() {
                    return E
                },
                envelopeContainsItemType: function() {
                    return f
                },
                envelopeItemTypeToDataCategory: function() {
                    return g
                },
                forEachEnvelopeItem: function() {
                    return d
                },
                getSdkMetadataForEnvelopeHeader: function() {
                    return y
                },
                parseEnvelope: function() {
                    return h
                },
                serializeEnvelope: function() {
                    return p
                }
            });
            var r = n("21189"),
                i = n("154005"),
                a = n("761020");
            n("814951"), n("633702"), n("266796"), n("357629"), n("996173"), n("47120"), n("568603"), n("128242"), n("26686"), n("653041"), n("518263"), n("970173"), n("380476"), n("633958"), n("520712"), n("257068"), n("881884"), n("982849"), n("268111"), n("941497"), n("571977"), n("827762"), n("673841"), n("177841"), n("640740"), n("438471"), n("84643"), n("249288"), n("538235"), n("473220"), n("32026"), n("223828"), n("896409"), n("480839"), n("186066"), n("744285"), n("492257"), n("190629"), n("873817"), n("126298"), n("724458");
            var o = n("177668"),
                s = n("10674"),
                u = n("442853");

            function c(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return [t, e]
            }

            function l(t, e) {
                var n = (0, i._)(t, 2),
                    r = n[0],
                    o = n[1];
                return [r, (0, a._)(o).concat([e])]
            }

            function d(t, e) {
                var n = t[1],
                    r = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var o, s = n[Symbol.iterator](); !(r = (o = s.next()).done); r = !0) {
                        var u = o.value,
                            c = u[0].type;
                        if (e(u, c)) return !0
                    }
                } catch (t) {
                    i = !0, a = t
                } finally {
                    try {
                        !r && null != s.return && s.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return !1
            }

            function f(t, e) {
                return d(t, function(t, n) {
                    return e.includes(n)
                })
            }

            function _(t, e) {
                return (e || new TextEncoder).encode(t)
            }

            function p(t, e) {
                var n = (0, i._)(t, 2),
                    r = n[0],
                    a = n[1],
                    o = JSON.stringify(r);

                function u(t) {
                    "string" == typeof o ? o = "string" == typeof t ? o + t : [_(o, e), t] : o.push("string" == typeof t ? _(t, e) : t)
                }
                var c = !0,
                    l = !1,
                    d = void 0;
                try {
                    for (var f, p = a[Symbol.iterator](); !(c = (f = p.next()).done); c = !0) {
                        var h = f.value,
                            v = (0, i._)(h, 2),
                            m = v[0],
                            g = v[1];
                        if (u("\n".concat(JSON.stringify(m), "\n")), "string" == typeof g || g instanceof Uint8Array) u(g);
                        else {
                            var y = void 0;
                            try {
                                y = JSON.stringify(g)
                            } catch (t) {
                                y = JSON.stringify((0, s.normalize)(g))
                            }
                            u(y)
                        }
                    }
                } catch (t) {
                    l = !0, d = t
                } finally {
                    try {
                        !c && null != p.return && p.return()
                    } finally {
                        if (l) throw d
                    }
                }
                return "string" == typeof o ? o : function(t) {
                    var e = t.reduce(function(t, e) {
                            return t + e.length
                        }, 0),
                        n = new Uint8Array(e),
                        r = 0,
                        i = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var s, u = t[Symbol.iterator](); !(i = (s = u.next()).done); i = !0) {
                            var c = s.value;
                            n.set(c, r), r += c.length
                        }
                    } catch (t) {
                        a = !0, o = t
                    } finally {
                        try {
                            !i && null != u.return && u.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(o)
            }

            function h(t, e, n) {
                var r = "string" == typeof t ? e.encode(t) : t;

                function i(t) {
                    var e = r.subarray(0, t);
                    return r = r.subarray(t + 1), e
                }

                function a() {
                    var t = r.indexOf(10);
                    return t < 0 && (t = r.length), JSON.parse(n.decode(i(t)))
                }
                for (var o = a(), s = []; r.length;) {
                    var u = a(),
                        c = "number" == typeof u.length ? u.length : void 0;
                    s.push([u, c ? i(c) : a()])
                }
                return [o, s]
            }

            function v(t, e) {
                var n = "string" == typeof t.data ? _(t.data, e) : t.data;
                return [(0, u.dropUndefinedKeys)({
                    type: "attachment",
                    length: n.length,
                    filename: t.filename,
                    content_type: t.contentType,
                    attachment_type: t.attachmentType
                }), n]
            }
            var m = {
                session: "session",
                sessions: "session",
                attachment: "attachment",
                transaction: "transaction",
                event: "error",
                client_report: "internal",
                user_report: "default",
                profile: "profile",
                replay_event: "replay",
                replay_recording: "replay",
                check_in: "monitor"
            };

            function g(t) {
                return m[t]
            }

            function y(t) {
                if (t && t.sdk) {
                    var e = t.sdk,
                        n = e.name;
                    return {
                        name: n,
                        version: e.version
                    }
                }
            }

            function E(t, e, n, i) {
                var a = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
                return (0, r._)({
                    event_id: t.event_id,
                    sent_at: new Date().toISOString()
                }, e && {
                    sdk: e
                }, !!n && {
                    dsn: (0, o.dsnToString)(i)
                }, a && {
                    trace: (0, u.dropUndefinedKeys)((0, r._)({}, a))
                })
            }
        },
        303155: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                SentryError: function() {
                    return u
                }
            });
            var r = n("187986"),
                i = n("87627"),
                a = n("29713"),
                o = n("918256"),
                s = n("778455");
            n("411104");
            var u = function(t) {
                (0, a._)(n, t);
                var e = (0, s._)(n);

                function n(t) {
                    var a, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "warn";
                    return (0, i._)(this, n), (a = e.call(this, t)).message = t, a.name = (this instanceof n ? this.constructor : void 0).prototype.constructor.name, Object.setPrototypeOf((0, r._)(a), (this instanceof n ? this.constructor : void 0).prototype), a.logLevel = o, a
                }
                return n
            }((0, o._)(Error))
        },
        648238: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BAGGAGE_HEADER_NAME: function() {
                    return R.BAGGAGE_HEADER_NAME
                },
                GLOBAL_OBJ: function() {
                    return s.GLOBAL_OBJ
                },
                SENTRY_XHR_DATA_KEY: function() {
                    return u.SENTRY_XHR_DATA_KEY
                },
                SentryError: function() {
                    return o.SentryError
                },
                SyncPromise: function() {
                    return E.SyncPromise
                },
                addExceptionMechanism: function() {
                    return d.addExceptionMechanism
                },
                addExceptionTypeValue: function() {
                    return d.addExceptionTypeValue
                },
                addInstrumentationHandler: function() {
                    return u.addInstrumentationHandler
                },
                addItemToEnvelope: function() {
                    return w.addItemToEnvelope
                },
                addNonEnumerableProperty: function() {
                    return p.addNonEnumerableProperty
                },
                applyAggregateErrorsToEvent: function() {
                    return r.applyAggregateErrorsToEvent
                },
                arrayify: function() {
                    return d.arrayify
                },
                browserPerformanceTimeOrigin: function() {
                    return b.browserPerformanceTimeOrigin
                },
                checkOrSetAlreadyCaught: function() {
                    return d.checkOrSetAlreadyCaught
                },
                consoleSandbox: function() {
                    return l.consoleSandbox
                },
                createAttachmentEnvelopeItem: function() {
                    return w.createAttachmentEnvelopeItem
                },
                createClientReportEnvelope: function() {
                    return T.createClientReportEnvelope
                },
                createEnvelope: function() {
                    return w.createEnvelope
                },
                createEventEnvelopeHeaders: function() {
                    return w.createEventEnvelopeHeaders
                },
                createStackParser: function() {
                    return m.createStackParser
                },
                dateTimestampInSeconds: function() {
                    return b.dateTimestampInSeconds
                },
                dropUndefinedKeys: function() {
                    return p.dropUndefinedKeys
                },
                dsnFromString: function() {
                    return a.dsnFromString
                },
                dsnToString: function() {
                    return a.dsnToString
                },
                dynamicSamplingContextToSentryBaggageHeader: function() {
                    return R.dynamicSamplingContextToSentryBaggageHeader
                },
                envelopeContainsItemType: function() {
                    return w.envelopeContainsItemType
                },
                envelopeItemTypeToDataCategory: function() {
                    return w.envelopeItemTypeToDataCategory
                },
                extractExceptionKeysForMessage: function() {
                    return p.extractExceptionKeysForMessage
                },
                extractTraceparentData: function() {
                    return S.extractTraceparentData
                },
                fill: function() {
                    return p.fill
                },
                forEachEnvelopeItem: function() {
                    return w.forEachEnvelopeItem
                },
                generateSentryTraceHeader: function() {
                    return S.generateSentryTraceHeader
                },
                getDomElement: function() {
                    return i.getDomElement
                },
                getEventDescription: function() {
                    return d.getEventDescription
                },
                getFunctionName: function() {
                    return m.getFunctionName
                },
                getGlobalSingleton: function() {
                    return s.getGlobalSingleton
                },
                getLocationHref: function() {
                    return i.getLocationHref
                },
                getOriginalFunction: function() {
                    return p.getOriginalFunction
                },
                getSDKSource: function() {
                    return k.getSDKSource
                },
                getSdkMetadataForEnvelopeHeader: function() {
                    return w.getSdkMetadataForEnvelopeHeader
                },
                htmlTreeAsString: function() {
                    return i.htmlTreeAsString
                },
                isDOMError: function() {
                    return c.isDOMError
                },
                isDOMException: function() {
                    return c.isDOMException
                },
                isError: function() {
                    return c.isError
                },
                isErrorEvent: function() {
                    return c.isErrorEvent
                },
                isEvent: function() {
                    return c.isEvent
                },
                isInstanceOf: function() {
                    return c.isInstanceOf
                },
                isNaN: function() {
                    return c.isNaN
                },
                isNativeFetch: function() {
                    return y.isNativeFetch
                },
                isNodeEnv: function() {
                    return f.isNodeEnv
                },
                isPlainObject: function() {
                    return c.isPlainObject
                },
                isPrimitive: function() {
                    return c.isPrimitive
                },
                isRateLimited: function() {
                    return x.isRateLimited
                },
                isString: function() {
                    return c.isString
                },
                isThenable: function() {
                    return c.isThenable
                },
                logger: function() {
                    return l.logger
                },
                makeDsn: function() {
                    return a.makeDsn
                },
                makePromiseBuffer: function() {
                    return h.makePromiseBuffer
                },
                markFunctionWrapped: function() {
                    return p.markFunctionWrapped
                },
                normalize: function() {
                    return _.normalize
                },
                normalizeToSize: function() {
                    return _.normalizeToSize
                },
                parseEnvelope: function() {
                    return w.parseEnvelope
                },
                parseRetryAfterHeader: function() {
                    return x.parseRetryAfterHeader
                },
                parseUrl: function() {
                    return D.parseUrl
                },
                rejectedSyncPromise: function() {
                    return E.rejectedSyncPromise
                },
                resolvedSyncPromise: function() {
                    return E.resolvedSyncPromise
                },
                safeJoin: function() {
                    return g.safeJoin
                },
                serializeEnvelope: function() {
                    return w.serializeEnvelope
                },
                severityLevelFromString: function() {
                    return v.severityLevelFromString
                },
                stackParserFromStackParserOptions: function() {
                    return m.stackParserFromStackParserOptions
                },
                stringMatchesSomePattern: function() {
                    return g.stringMatchesSomePattern
                },
                supportsFetch: function() {
                    return y.supportsFetch
                },
                timestampInSeconds: function() {
                    return b.timestampInSeconds
                },
                tracingContextFromHeaders: function() {
                    return S.tracingContextFromHeaders
                },
                truncate: function() {
                    return g.truncate
                },
                updateRateLimits: function() {
                    return x.updateRateLimits
                },
                urlEncode: function() {
                    return p.urlEncode
                },
                uuid4: function() {
                    return d.uuid4
                }
            });
            var r = n("147658"),
                i = n("829919"),
                a = n("177668"),
                o = n("303155"),
                s = n("24716"),
                u = n("793884"),
                c = n("46834"),
                l = n("529866"),
                d = n("862315"),
                f = n("635602"),
                _ = n("10674"),
                p = n("442853"),
                h = n("765497"),
                v = n("869139"),
                m = n("432038"),
                g = n("336344"),
                y = n("698892"),
                E = n("880803"),
                b = n("868145"),
                S = n("874230"),
                k = n("776914"),
                w = n("50074"),
                T = n("854569"),
                x = n("128603"),
                R = n("545459"),
                D = n("841866")
        },
        793884: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                SENTRY_XHR_DATA_KEY: function() {
                    return m
                },
                addInstrumentationHandler: function() {
                    return E
                }
            });
            var r, i, a, o = n("21189"),
                s = n("227094"),
                u = n("154005");
            n("653041"), n("633702"), n("266796"), n("357629"), n("996173"), n("47120"), n("814951"), n("293114"), n("754598"), n("301563");
            var c = n("46834"),
                l = n("529866"),
                d = n("442853"),
                f = n("432038"),
                _ = n("698892"),
                p = n("24716"),
                h = n("30865"),
                v = (0, p.getGlobalObject)(),
                m = "__sentry_xhr_v2__",
                g = {},
                y = {};

            function E(t, e) {
                g[t] = g[t] || [], g[t].push(e), ! function(t) {
                    if (!y[t]) switch (y[t] = !0, t) {
                        case "console":
                            (function() {
                                "console" in v && l.CONSOLE_LEVELS.forEach(function(t) {
                                    t in v.console && (0, d.fill)(v.console, t, function(e) {
                                        return function() {
                                            for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                            b("console", {
                                                args: r,
                                                level: t
                                            }), e && e.apply(v.console, r)
                                        }
                                    })
                                })
                            })();
                            break;
                        case "dom":
                            (function() {
                                if ("document" in v) {
                                    var t = b.bind(null, "dom"),
                                        e = w(t, !0);
                                    v.document.addEventListener("click", e, !1), v.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(function(e) {
                                        var n = v[e] && v[e].prototype;
                                        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0, d.fill)(n, "addEventListener", function(e) {
                                            return function(n, r, i) {
                                                if ("click" === n || "keypress" == n) try {
                                                    var a = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                                                        o = a[n] = a[n] || {
                                                            refCount: 0
                                                        };
                                                    if (!o.handler) {
                                                        var s = w(t);
                                                        o.handler = s, e.call(this, n, s, i)
                                                    }
                                                    o.refCount++
                                                } catch (t) {}
                                                return e.call(this, n, r, i)
                                            }
                                        }), (0, d.fill)(n, "removeEventListener", function(t) {
                                            return function(e, n, r) {
                                                if ("click" === e || "keypress" == e) try {
                                                    var i = this.__sentry_instrumentation_handlers__ || {},
                                                        a = i[e];
                                                    a && (a.refCount--, a.refCount <= 0 && (t.call(this, e, a.handler, r), a.handler = void 0, delete i[e]), 0 === Object.keys(i).length && delete this.__sentry_instrumentation_handlers__)
                                                } catch (t) {}
                                                return t.call(this, e, n, r)
                                            }
                                        }))
                                    })
                                }
                            })();
                            break;
                        case "xhr":
                            (function() {
                                if ("XMLHttpRequest" in v) {
                                    var t = XMLHttpRequest.prototype;
                                    (0, d.fill)(t, "open", function(t) {
                                        return function() {
                                            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                            var i = this,
                                                a = n[1],
                                                o = this[m] = {
                                                    method: (0, c.isString)(n[0]) ? n[0].toUpperCase() : n[0],
                                                    url: n[1],
                                                    request_headers: {}
                                                };
                                            (0, c.isString)(a) && "POST" === o.method && a.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                                            var s = function() {
                                                var t = i[m];
                                                if (t && 4 === i.readyState) {
                                                    try {
                                                        t.status_code = i.status
                                                    } catch (t) {}
                                                    b("xhr", {
                                                        args: n,
                                                        endTimestamp: Date.now(),
                                                        startTimestamp: Date.now(),
                                                        xhr: i
                                                    })
                                                }
                                            };
                                            return "onreadystatechange" in this && "function" == typeof this.onreadystatechange ? (0, d.fill)(this, "onreadystatechange", function(t) {
                                                return function() {
                                                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                                    return s(), t.apply(this, n)
                                                }
                                            }) : this.addEventListener("readystatechange", s), (0, d.fill)(this, "setRequestHeader", function(t) {
                                                return function() {
                                                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                                    var i = (0, u._)(n, 2),
                                                        a = i[0],
                                                        o = i[1],
                                                        s = this[m];
                                                    return s && (s.request_headers[a.toLowerCase()] = o), t.apply(this, n)
                                                }
                                            }), t.apply(this, n)
                                        }
                                    }), (0, d.fill)(t, "send", function(t) {
                                        return function() {
                                            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                            var i = this[m];
                                            return i && void 0 !== n[0] && (i.body = n[0]), b("xhr", {
                                                args: n,
                                                startTimestamp: Date.now(),
                                                xhr: this
                                            }), t.apply(this, n)
                                        }
                                    })
                                }
                            })();
                            break;
                        case "fetch":
                            (function() {
                                (0, _.supportsNativeFetch)() && (0, d.fill)(v, "fetch", function(t) {
                                    return function() {
                                        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                        var i = function(t) {
                                                if (0 === t.length) return {
                                                    method: "GET",
                                                    url: ""
                                                };
                                                if (2 === t.length) {
                                                    var e = (0, u._)(t, 2),
                                                        n = e[0],
                                                        r = e[1];
                                                    return {
                                                        url: k(n),
                                                        method: S(r, "method") ? String(r.method).toUpperCase() : "GET"
                                                    }
                                                }
                                                var i = t[0];
                                                return {
                                                    url: k(i),
                                                    method: S(i, "method") ? String(i.method).toUpperCase() : "GET"
                                                }
                                            }(n),
                                            a = i.method,
                                            c = {
                                                args: n,
                                                fetchData: {
                                                    method: a,
                                                    url: i.url
                                                },
                                                startTimestamp: Date.now()
                                            };
                                        return b("fetch", (0, o._)({}, c)), t.apply(v, n).then(function(t) {
                                            return b("fetch", (0, s._)((0, o._)({}, c), {
                                                endTimestamp: Date.now(),
                                                response: t
                                            })), t
                                        }, function(t) {
                                            throw b("fetch", (0, s._)((0, o._)({}, c), {
                                                endTimestamp: Date.now(),
                                                error: t
                                            })), t
                                        })
                                    }
                                })
                            })();
                            break;
                        case "history":
                            (function() {
                                if ((0, h.supportsHistory)()) {
                                    var t = v.onpopstate;
                                    v.onpopstate = function() {
                                        for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                                        var a = v.location.href,
                                            o = r;
                                        if (r = a, b("history", {
                                                from: o,
                                                to: a
                                            }), t) try {
                                            return t.apply(this, n)
                                        } catch (t) {}
                                    }, (0, d.fill)(v.history, "pushState", e), (0, d.fill)(v.history, "replaceState", e)
                                }

                                function e(t) {
                                    return function() {
                                        for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                                        var a = n.length > 2 ? n[2] : void 0;
                                        if (a) {
                                            var o = r,
                                                s = String(a);
                                            r = s, b("history", {
                                                from: o,
                                                to: s
                                            })
                                        }
                                        return t.apply(this, n)
                                    }
                                }
                            })();
                            break;
                        case "error":
                            (function() {
                                T = v.onerror, v.onerror = function(t, e, n, r, i) {
                                    return b("error", {
                                        column: r,
                                        error: i,
                                        line: n,
                                        msg: t,
                                        url: e
                                    }), !!T && !T.__SENTRY_LOADER__ && T.apply(this, arguments)
                                }, v.onerror.__SENTRY_INSTRUMENTED__ = !0
                            })();
                            break;
                        case "unhandledrejection":
                            (function() {
                                x = v.onunhandledrejection, v.onunhandledrejection = function(t) {
                                    return b("unhandledrejection", t), !x || !!x.__SENTRY_LOADER__ || x.apply(this, arguments)
                                }, v.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
                            })();
                            break;
                        default:
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && l.logger.warn("unknown instrumentation type:", t);
                            return
                    }
                }(t)
            }

            function b(t, e) {
                if (t && g[t]) {
                    var n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var a, o = (g[t] || [])[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                            var s = a.value;
                            try {
                                s(e)
                            } catch (e) {
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && l.logger.error("Error while triggering instrumentation handler.\nType: ".concat(t, "\nName: ").concat((0, f.getFunctionName)(s), "\nError:"), e)
                            }
                        }
                    } catch (t) {
                        r = !0, i = t
                    } finally {
                        try {
                            !n && null != o.return && o.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                }
            }

            function S(t, e) {
                return !!t && "object" == typeof t && !!t[e]
            }

            function k(t) {
                return "string" == typeof t ? t : t ? S(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
            }

            function w(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return function(n) {
                    if (!!n && a !== n) {
                        if (! function(t) {
                                if ("keypress" !== t.type) return !1;
                                try {
                                    var e = t.target;
                                    if (!e || !e.tagName) return !0;
                                    if ("INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable) return !1
                                } catch (t) {}
                                return !0
                            }(n)) {
                            var r = "keypress" === n.type ? "input" : n.type;
                            void 0 === i ? (t({
                                event: n,
                                name: r,
                                global: e
                            }), a = n) : function(t, e) {
                                if (!t || t.type !== e.type) return !0;
                                try {
                                    if (t.target !== e.target) return !0
                                } catch (t) {}
                                return !1
                            }(a, n) && (t({
                                event: n,
                                name: r,
                                global: e
                            }), a = n), clearTimeout(i), i = v.setTimeout(function() {
                                i = void 0
                            }, 1e3)
                        }
                    }
                }
            }
            var T = null,
                x = null
        },
        46834: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                isDOMError: function() {
                    return s
                },
                isDOMException: function() {
                    return u
                },
                isElement: function() {
                    return _
                },
                isError: function() {
                    return i
                },
                isErrorEvent: function() {
                    return o
                },
                isEvent: function() {
                    return f
                },
                isInstanceOf: function() {
                    return g
                },
                isNaN: function() {
                    return m
                },
                isPlainObject: function() {
                    return d
                },
                isPrimitive: function() {
                    return l
                },
                isRegExp: function() {
                    return p
                },
                isString: function() {
                    return c
                },
                isSyntheticEvent: function() {
                    return v
                },
                isThenable: function() {
                    return h
                }
            }), n("357629"), n("293114"), n("411104"), n("814951");
            var r = Object.prototype.toString;

            function i(t) {
                switch (r.call(t)) {
                    case "[object Error]":
                    case "[object Exception]":
                    case "[object DOMException]":
                        return !0;
                    default:
                        return g(t, Error)
                }
            }

            function a(t, e) {
                return r.call(t) === "[object ".concat(e, "]")
            }

            function o(t) {
                return a(t, "ErrorEvent")
            }

            function s(t) {
                return a(t, "DOMError")
            }

            function u(t) {
                return a(t, "DOMException")
            }

            function c(t) {
                return a(t, "String")
            }

            function l(t) {
                return null === t || "object" != typeof t && "function" != typeof t
            }

            function d(t) {
                return a(t, "Object")
            }

            function f(t) {
                return "undefined" != typeof Event && g(t, Event)
            }

            function _(t) {
                return "undefined" != typeof Element && g(t, Element)
            }

            function p(t) {
                return a(t, "RegExp")
            }

            function h(t) {
                return !!(t && t.then && "function" == typeof t.then)
            }

            function v(t) {
                return d(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
            }

            function m(t) {
                return "number" == typeof t && t != t
            }

            function g(t, e) {
                try {
                    return t instanceof e
                } catch (t) {
                    return !1
                }
            }
        },
        529866: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                CONSOLE_LEVELS: function() {
                    return o
                },
                consoleSandbox: function() {
                    return s
                },
                logger: function() {
                    return r
                }
            });
            var r, i = n("761020");
            n("357629"), n("814951");
            var a = n("24716"),
                o = ["debug", "info", "warn", "error", "log", "assert", "trace"];

            function s(t) {
                if (!("console" in a.GLOBAL_OBJ)) return t();
                var e = a.GLOBAL_OBJ.console,
                    n = {};
                o.forEach(function(t) {
                    var r = e[t] && e[t].__sentry_original__;
                    t in e && r && (n[t] = e[t], e[t] = r)
                });
                try {
                    return t()
                } finally {
                    Object.keys(n).forEach(function(t) {
                        e[t] = n[t]
                    })
                }
            }

            function u() {
                var t = !1,
                    e = {
                        enable: function() {
                            t = !0
                        },
                        disable: function() {
                            t = !1
                        }
                    };
                return "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? o.forEach(function(n) {
                    e[n] = function() {
                        for (var e = arguments.length, r = Array(e), o = 0; o < e; o++) r[o] = arguments[o];
                        t && s(function() {
                            var t;
                            (t = a.GLOBAL_OBJ.console)[n].apply(t, ["".concat("Sentry Logger ", "[").concat(n, "]:")].concat((0, i._)(r)))
                        })
                    }
                }) : o.forEach(function(t) {
                    e[t] = function() {}
                }), e
            }
            r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? (0, a.getGlobalSingleton)("logger", u) : u()
        },
        537198: function(t, e, n) {
            "use strict";

            function r() {
                var t = "function" == typeof WeakSet,
                    e = t ? new WeakSet : [];
                return [function(n) {
                    if (t) return !!e.has(n) || (e.add(n), !1);
                    for (var r = 0; r < e.length; r++)
                        if (e[r] === n) return !0;
                    return e.push(n), !1
                }, function(n) {
                    if (t) e.delete(n);
                    else
                        for (var r = 0; r < e.length; r++)
                            if (e[r] === n) {
                                e.splice(r, 1);
                                break
                            }
                }]
            }
            n.r(e), n.d(e, {
                memoBuilder: function() {
                    return r
                }
            }), n("878778"), n("996173"), n("47120"), n("357629"), n("653041"), n("817285")
        },
        862315: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                addExceptionMechanism: function() {
                    return l
                },
                addExceptionTypeValue: function() {
                    return c
                },
                arrayify: function() {
                    return f
                },
                checkOrSetAlreadyCaught: function() {
                    return d
                },
                getEventDescription: function() {
                    return u
                },
                uuid4: function() {
                    return o
                }
            });
            var r = n("21189");
            n("757143"), n("301563"), n("518263"), n("970173"), n("380476"), n("633958"), n("520712"), n("257068"), n("881884"), n("982849"), n("268111"), n("941497"), n("571977"), n("827762"), n("673841"), n("177841"), n("640740"), n("438471"), n("84643"), n("249288"), n("538235"), n("473220"), n("32026"), n("223828"), n("896409"), n("480839"), n("186066"), n("744285"), n("492257"), n("190629"), n("873817"), n("357629"), n("996173"), n("126298"), n("293114"), n("47120"), n("814951"), n("754598"), n("849202"), n("363505");
            var i = n("442853"),
                a = n("24716");

            function o() {
                var t = a.GLOBAL_OBJ,
                    e = t.crypto || t.msCrypto;
                if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
                var n = e && e.getRandomValues ? function() {
                    return e.getRandomValues(new Uint8Array(1))[0]
                } : function() {
                    return 16 * Math.random()
                };
                return "10000000100040008000100000000000".replace(/[018]/g, function(t) {
                    return (t ^ (15 & n()) >> t / 4).toString(16)
                })
            }

            function s(t) {
                return t.exception && t.exception.values ? t.exception.values[0] : void 0
            }

            function u(t) {
                var e = t.message,
                    n = t.event_id;
                if (e) return e;
                var r = s(t);
                if (r) return r.type && r.value ? "".concat(r.type, ": ").concat(r.value) : r.type || r.value || n || "<unknown>";
                return n || "<unknown>"
            }

            function c(t, e, n) {
                var r = t.exception = t.exception || {},
                    i = r.values = r.values || [],
                    a = i[0] = i[0] || {};
                !a.value && (a.value = e || ""), !a.type && (a.type = n || "Error")
            }

            function l(t, e) {
                var n = s(t);
                if (n) {
                    var i = n.mechanism;
                    if (n.mechanism = (0, r._)({}, {
                            type: "generic",
                            handled: !0
                        }, i, e), e && "data" in e) {
                        var a = (0, r._)({}, i && i.data, e.data);
                        n.mechanism.data = a
                    }
                }
            }

            function d(t) {
                if (t && t.__sentry_captured__) return !0;
                try {
                    (0, i.addNonEnumerableProperty)(t, "__sentry_captured__", !0)
                } catch (t) {}
                return !1
            }

            function f(t) {
                return Array.isArray(t) ? t : [t]
            }
        },
        635602: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                dynamicRequire: function() {
                    return o
                },
                isNodeEnv: function() {
                    return a
                }
            }), n("357629"), n("293114"), n("814951");
            var r = n("776914");
            t = n.hmd(t);
            var i = n("444675");

            function a() {
                return !(0, r.isBrowserBundle)() && "[object process]" === Object.prototype.toString.call(void 0 !== i ? i : 0)
            }

            function o(t, e) {
                return t.require(e)
            }
        },
        10674: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                normalize: function() {
                    return u
                },
                normalizeToSize: function() {
                    return function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 102400,
                            i = u(e, n);
                        return function(t) {
                            return ~-encodeURI(JSON.stringify(t)).split(/%..|./).length
                        }(i) > r ? t(e, n - 1, r) : i
                    }
                }
            });
            var r = n("154005");
            n("814951"), n("568603"), n("128242"), n("723026"), n("757143"), n("301563"), n("605887"), n("309749"), n("723768"), n("917168"), n("26686");
            var i = n("46834"),
                a = n("537198"),
                o = n("442853"),
                s = n("432038");

            function u(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
                    u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0;
                try {
                    return function t(e, u) {
                        var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0,
                            l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
                            d = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0, a.memoBuilder)(),
                            f = (0, r._)(d, 2),
                            _ = f[0],
                            p = f[1];
                        if (null == u || ["number", "boolean", "string"].includes(typeof u) && !(0, i.isNaN)(u)) return u;
                        var h = function(t, e) {
                            try {
                                if ("domain" === t && e && "object" == typeof e && e._events) return "[Domain]";
                                if ("domainEmitter" === t) return "[DomainEmitter]";
                                if (void 0 !== n.g && e === n.g) return "[Global]";
                                if ("undefined" != typeof window && e === window) return "[Window]";
                                if ("undefined" != typeof document && e === document) return "[Document]";
                                if ((0, i.isSyntheticEvent)(e)) return "[SyntheticEvent]";
                                if ("number" == typeof e && e != e) return "[NaN]";
                                if ("function" == typeof e) return "[Function: ".concat((0, s.getFunctionName)(e), "]");
                                if ("symbol" == typeof e) return "[".concat(String(e), "]");
                                if ("bigint" == typeof e) return "[BigInt: ".concat(String(e), "]");
                                var r = function(t) {
                                    var e = Object.getPrototypeOf(t);
                                    return e ? e.constructor.name : "null prototype"
                                }(e);
                                if (/^HTML(\w*)Element$/.test(r)) return "[HTMLElement: ".concat(r, "]");
                                return "[object ".concat(r, "]")
                            } catch (t) {
                                return "**non-serializable** (".concat(t, ")")
                            }
                        }(e, u);
                        if (!h.startsWith("[object ")) return h;
                        if (u.__sentry_skip_normalization__) return u;
                        var v = "number" == typeof u.__sentry_override_normalization_depth__ ? u.__sentry_override_normalization_depth__ : c;
                        if (0 === v) return h.replace("object ", "");
                        if (_(u)) return "[Circular ~]";
                        if (u && "function" == typeof u.toJSON) try {
                            var m = u.toJSON();
                            return t("", m, v - 1, l, d)
                        } catch (t) {}
                        var g = Array.isArray(u) ? [] : {},
                            y = 0,
                            E = (0, o.convertToPlainObject)(u);
                        for (var b in E)
                            if (Object.prototype.hasOwnProperty.call(E, b)) {
                                if (y >= l) {
                                    g[b] = "[MaxProperties ~]";
                                    break
                                }
                                var S = E[b];
                                g[b] = t(b, S, v - 1, l, d), y++
                            } return p(u), g
                    }("", t, e, u)
                } catch (t) {
                    return {
                        ERROR: "**non-serializable** (".concat(t, ")")
                    }
                }
            }
        },
        442853: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                addNonEnumerableProperty: function() {
                    return u
                },
                convertToPlainObject: function() {
                    return f
                },
                dropUndefinedKeys: function() {
                    return v
                },
                extractExceptionKeysForMessage: function() {
                    return h
                },
                fill: function() {
                    return s
                },
                getOriginalFunction: function() {
                    return l
                },
                markFunctionWrapped: function() {
                    return c
                },
                urlEncode: function() {
                    return d
                }
            });
            var r = n("21189");
            n("363505"), n("814951"), n("357629"), n("293114"), n("230036"), n("849202"), n("573788"), n("996173"), n("47120"), n("633702"), n("266796"), n("653041");
            var i = n("829919"),
                a = n("46834"),
                o = n("336344");

            function s(t, e, n) {
                if (e in t) {
                    var r = t[e],
                        i = n(r);
                    if ("function" == typeof i) try {
                        c(i, r)
                    } catch (t) {}
                    t[e] = i
                }
            }

            function u(t, e, n) {
                Object.defineProperty(t, e, {
                    value: n,
                    writable: !0,
                    configurable: !0
                })
            }

            function c(t, e) {
                var n = e.prototype || {};
                t.prototype = e.prototype = n, u(t, "__sentry_original__", e)
            }

            function l(t) {
                return t.__sentry_original__
            }

            function d(t) {
                return Object.keys(t).map(function(e) {
                    return "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(t[e]))
                }).join("&")
            }

            function f(t) {
                if ((0, a.isError)(t)) return (0, r._)({
                    message: t.message,
                    name: t.name,
                    stack: t.stack
                }, p(t));
                if (!(0, a.isEvent)(t)) return t;
                var e = (0, r._)({
                    type: t.type,
                    target: _(t.target),
                    currentTarget: _(t.currentTarget)
                }, p(t));
                return "undefined" != typeof CustomEvent && (0, a.isInstanceOf)(t, CustomEvent) && (e.detail = t.detail), e
            }

            function _(t) {
                try {
                    return (0, a.isElement)(t) ? (0, i.htmlTreeAsString)(t) : Object.prototype.toString.call(t)
                } catch (t) {
                    return "<unknown>"
                }
            }

            function p(t) {
                if ("object" != typeof t || null === t) return {};
                var e = {};
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e
            }

            function h(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
                    n = Object.keys(f(t));
                if (n.sort(), !n.length) return "[object has no keys]";
                if (n[0].length >= e) return (0, o.truncate)(n[0], e);
                for (var r = n.length; r > 0; r--) {
                    var i = n.slice(0, r).join(", ");
                    if (!(i.length > e)) {
                        if (r === n.length) return i;
                        return (0, o.truncate)(i, e)
                    }
                }
                return ""
            }

            function v(t) {
                return function t(e, n) {
                    if ((0, a.isPlainObject)(e)) {
                        var r = n.get(e);
                        if (void 0 !== r) return r;
                        var i = {};
                        n.set(e, i);
                        var o = !0,
                            s = !1,
                            u = void 0;
                        try {
                            for (var c, l = Object.keys(e)[Symbol.iterator](); !(o = (c = l.next()).done); o = !0) {
                                var d = c.value;
                                void 0 !== e[d] && (i[d] = t(e[d], n))
                            }
                        } catch (t) {
                            s = !0, u = t
                        } finally {
                            try {
                                !o && null != l.return && l.return()
                            } finally {
                                if (s) throw u
                            }
                        }
                        return i
                    }
                    if (Array.isArray(e)) {
                        var f = n.get(e);
                        if (void 0 !== f) return f;
                        var _ = [];
                        return n.set(e, _), e.forEach(function(e) {
                            _.push(t(e, n))
                        }), _
                    }
                    return e
                }(t, new Map)
            }
        },
        765497: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                makePromiseBuffer: function() {
                    return a
                }
            }), n("817285"), n("653041"), n("357629");
            var r = n("303155"),
                i = n("880803");

            function a(t) {
                var e = [];

                function n(t) {
                    return e.splice(e.indexOf(t), 1)[0]
                }
                return {
                    $: e,
                    add: function(a) {
                        if (!(void 0 === t || e.length < t)) return (0, i.rejectedSyncPromise)(new r.SentryError("Not adding Promise because buffer limit was reached."));
                        var o = a();
                        return -1 === e.indexOf(o) && e.push(o), o.then(function() {
                            return n(o)
                        }).then(null, function() {
                            return n(o).then(null, function() {})
                        }), o
                    },
                    drain: function(t) {
                        return new i.SyncPromise(function(n, r) {
                            var a = e.length;
                            if (!a) return n(!0);
                            var o = setTimeout(function() {
                                t && t > 0 && n(!1)
                            }, t);
                            e.forEach(function(t) {
                                (0, i.resolvedSyncPromise)(t).then(function() {
                                    !--a && (clearTimeout(o), n(!0))
                                }, r)
                            })
                        })
                    }
                }
            }
        },
        128603: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                isRateLimited: function() {
                    return o
                },
                parseRetryAfterHeader: function() {
                    return a
                },
                updateRateLimits: function() {
                    return s
                }
            });
            var r = n("21189"),
                i = n("154005");
            n("814951"), n("566702"), n("917168"), n("301563"), n("633702"), n("266796"), n("357629"), n("996173"), n("47120");

            function a(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
                    n = parseInt("".concat(t), 10);
                if (!isNaN(n)) return 1e3 * n;
                var r = Date.parse("".concat(t));
                return isNaN(r) ? 6e4 : r - e
            }

            function o(t, e) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
                return ((n = t)[e] || n.all || 0) > r
            }

            function s(t, e) {
                var n = e.statusCode,
                    o = e.headers,
                    s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
                    u = (0, r._)({}, t),
                    c = o && o["x-sentry-rate-limits"],
                    l = o && o["retry-after"];
                if (c) {
                    var d = !0,
                        f = !1,
                        _ = void 0;
                    try {
                        for (var p, h = c.trim().split(",")[Symbol.iterator](); !(d = (p = h.next()).done); d = !0) {
                            var v = p.value,
                                m = (0, i._)(v.split(":", 2), 2),
                                g = m[0],
                                y = m[1],
                                E = parseInt(g, 10),
                                b = (isNaN(E) ? 60 : E) * 1e3;
                            if (y) {
                                var S = !0,
                                    k = !1,
                                    w = void 0;
                                try {
                                    for (var T, x = y.split(";")[Symbol.iterator](); !(S = (T = x.next()).done); S = !0) u[T.value] = s + b
                                } catch (t) {
                                    k = !0, w = t
                                } finally {
                                    try {
                                        !S && null != x.return && x.return()
                                    } finally {
                                        if (k) throw w
                                    }
                                }
                            } else u.all = s + b
                        }
                    } catch (t) {
                        f = !0, _ = t
                    } finally {
                        try {
                            !d && null != h.return && h.return()
                        } finally {
                            if (f) throw _
                        }
                    }
                } else l ? u.all = s + a(l, s) : 429 === n && (u.all = s + 6e4);
                return u
            }
        },
        869139: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                severityLevelFromString: function() {
                    return i
                }
            }), n("568603"), n("128242");
            var r = ["fatal", "error", "warning", "log", "info", "debug"];

            function i(t) {
                return "warn" === t ? "warning" : r.includes(t) ? t : "log"
            }
        },
        432038: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                createStackParser: function() {
                    return s
                },
                getFunctionName: function() {
                    return l
                },
                stackParserFromStackParserOptions: function() {
                    return u
                }
            });
            var r = n("21189"),
                i = n("227094"),
                a = n("761020");
            n("230036"), n("363505"), n("917168"), n("301563"), n("723768"), n("757143"), n("754598"), n("633702"), n("266796"), n("357629"), n("996173"), n("47120"), n("653041"), n("849202"), n("978209");
            var o = /\(error: (.*)\)/;

            function s() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                var a = e.sort(function(t, e) {
                    return t[0] - e[0]
                }).map(function(t) {
                    return t[1]
                });
                return function(t) {
                    for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = [], s = t.split("\n"), u = e; u < s.length; u++) {
                        var c = s[u];
                        if (!(c.length > 1024)) {
                            var l = o.test(c) ? c.replace(o, "$1") : c;
                            if (!l.match(/\S*Error: /)) {
                                var d = !0,
                                    f = !1,
                                    _ = void 0;
                                try {
                                    for (var p, h = a[Symbol.iterator](); !(d = (p = h.next()).done); d = !0) {
                                        var v = (0, p.value)(l);
                                        if (v) {
                                            n.push(v);
                                            break
                                        }
                                    }
                                } catch (t) {
                                    f = !0, _ = t
                                } finally {
                                    try {
                                        !d && null != h.return && h.return()
                                    } finally {
                                        if (f) throw _
                                    }
                                }
                                if (n.length >= 50) break
                            }
                        }
                    }
                    return function(t) {
                        if (!t.length) return [];
                        var e = t.slice(0, 50),
                            n = e[e.length - 1].function;
                        n && /sentryWrapped/.test(n) && e.pop(), e.reverse();
                        var a = e[e.length - 1].function;
                        return a && /captureMessage|captureException/.test(a) && e.pop(), e.map(function(t) {
                            return (0, i._)((0, r._)({}, t), {
                                filename: t.filename || e[e.length - 1].filename,
                                function: t.function || "?"
                            })
                        })
                    }(n)
                }
            }

            function u(t) {
                return Array.isArray(t) ? s.apply(void 0, (0, a._)(t)) : t
            }
            var c = "<anonymous>";

            function l(t) {
                try {
                    if (!t || "function" != typeof t) return c;
                    return t.name || c
                } catch (t) {
                    return c
                }
            }
        },
        336344: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                safeJoin: function() {
                    return a
                },
                stringMatchesSomePattern: function() {
                    return o
                },
                truncate: function() {
                    return i
                }
            }), n("814951"), n("849202"), n("653041"), n("723768"), n("301563"), n("568603"), n("128242"), n("357629");
            var r = n("46834");

            function i(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return "string" != typeof t || 0 === e ? t : t.length <= e ? t : "".concat(t.slice(0, e), "...")
            }

            function a(t, e) {
                if (!Array.isArray(t)) return "";
                for (var n = [], r = 0; r < t.length; r++) {
                    var i = t[r];
                    try {
                        n.push(String(i))
                    } catch (t) {
                        n.push("[value cannot be serialized]")
                    }
                }
                return n.join(e)
            }

            function o(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return e.some(function(e) {
                    return function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return !!(0, r.isString)(t) && ((0, r.isRegExp)(e) ? e.test(t) : !!(0, r.isString)(e) && (n ? t === e : t.includes(e)))
                    }(t, e, n)
                })
            }
        },
        698892: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                isNativeFetch: function() {
                    return o
                },
                supportsFetch: function() {
                    return a
                },
                supportsNativeFetch: function() {
                    return s
                }
            }), n("866573"), n("642549"), n("787622"), n("723768"), n("301563"), n("357629"), n("293114");
            var r = n("529866"),
                i = (0, n("24716").getGlobalObject)();

            function a() {
                if (!("fetch" in i)) return !1;
                try {
                    return new Headers, new Request("http://www.example.com"), new Response, !0
                } catch (t) {
                    return !1
                }
            }

            function o(t) {
                return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
            }

            function s() {
                if (!a()) return !1;
                if (o(i.fetch)) return !0;
                var t = !1,
                    e = i.document;
                if (e && "function" == typeof e.createElement) try {
                    var n = e.createElement("iframe");
                    n.hidden = !0, e.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = o(n.contentWindow.fetch)), e.head.removeChild(n)
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                }
                return t
            }
        },
        880803: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                SyncPromise: function() {
                    return l
                },
                rejectedSyncPromise: function() {
                    return c
                },
                resolvedSyncPromise: function() {
                    return u
                }
            });
            var r, i, a = n("87627"),
                o = n("200344");
            n("653041"), n("849202"), n("357629");
            var s = n("46834");

            function u(t) {
                return new l(function(e) {
                    e(t)
                })
            }

            function c(t) {
                return new l(function(e, n) {
                    n(t)
                })
            }(r = i || (i = {}))[r.PENDING = 0] = "PENDING", r[r.RESOLVED = 1] = "RESOLVED", r[r.REJECTED = 2] = "REJECTED";
            var l = function() {
                function t(e) {
                    (0, a._)(this, t), t.prototype.__init.call(this), t.prototype.__init2.call(this), t.prototype.__init3.call(this), t.prototype.__init4.call(this), t.prototype.__init5.call(this), t.prototype.__init6.call(this);
                    try {
                        e(this._resolve, this._reject)
                    } catch (t) {
                        this._reject(t)
                    }
                }
                return (0, o._)(t, [{
                    key: "__init",
                    value: function() {
                        this._state = i.PENDING
                    }
                }, {
                    key: "__init2",
                    value: function() {
                        this._handlers = []
                    }
                }, {
                    key: "then",
                    value: function(e, n) {
                        var r = this;
                        return new t(function(t, i) {
                            r._handlers.push([!1, function(n) {
                                if (e) try {
                                    t(e(n))
                                } catch (t) {
                                    i(t)
                                } else t(n)
                            }, function(e) {
                                if (n) try {
                                    t(n(e))
                                } catch (t) {
                                    i(t)
                                } else i(e)
                            }]), r._executeHandlers()
                        })
                    }
                }, {
                    key: "catch",
                    value: function(t) {
                        return this.then(function(t) {
                            return t
                        }, t)
                    }
                }, {
                    key: "finally",
                    value: function(e) {
                        var n = this;
                        return new t(function(t, r) {
                            var i, a;
                            return n.then(function(t) {
                                a = !1, i = t, e && e()
                            }, function(t) {
                                a = !0, i = t, e && e()
                            }).then(function() {
                                if (a) {
                                    r(i);
                                    return
                                }
                                t(i)
                            })
                        })
                    }
                }, {
                    key: "__init3",
                    value: function() {
                        var t = this;
                        this._resolve = function(e) {
                            t._setResult(i.RESOLVED, e)
                        }
                    }
                }, {
                    key: "__init4",
                    value: function() {
                        var t = this;
                        this._reject = function(e) {
                            t._setResult(i.REJECTED, e)
                        }
                    }
                }, {
                    key: "__init5",
                    value: function() {
                        var t = this;
                        this._setResult = function(e, n) {
                            if (t._state === i.PENDING) {
                                if ((0, s.isThenable)(n)) {
                                    n.then(t._resolve, t._reject);
                                    return
                                }
                                t._state = e, t._value = n, t._executeHandlers()
                            }
                        }
                    }
                }, {
                    key: "__init6",
                    value: function() {
                        var t = this;
                        this._executeHandlers = function() {
                            if (t._state !== i.PENDING) {
                                var e = t._handlers.slice();
                                t._handlers = [], e.forEach(function(e) {
                                    !e[0] && (t._state === i.RESOLVED && e[1](t._value), t._state === i.REJECTED && e[2](t._value), e[0] = !0)
                                })
                            }
                        }
                    }
                }]), t
            }()
        },
        868145: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                browserPerformanceTimeOrigin: function() {
                    return f
                },
                dateTimestampInSeconds: function() {
                    return l
                },
                timestampInSeconds: function() {
                    return d
                }
            });
            var r, i = n("635602"),
                a = n("24716");
            t = n.hmd(t);
            var o = (0, a.getGlobalObject)(),
                s = {
                    nowSeconds: function() {
                        return Date.now() / 1e3
                    }
                },
                u = (0, i.isNodeEnv)() ? function() {
                    try {
                        return (0, i.dynamicRequire)(t, "perf_hooks").performance
                    } catch (t) {
                        return
                    }
                }() : function() {
                    var t = o.performance;
                    if (t && t.now) return {
                        now: function() {
                            return t.now()
                        },
                        timeOrigin: Date.now() - t.now()
                    }
                }(),
                c = void 0 === u ? s : {
                    nowSeconds: function() {
                        return (u.timeOrigin + u.now()) / 1e3
                    }
                },
                l = s.nowSeconds.bind(s),
                d = c.nowSeconds.bind(c),
                f = function() {
                    var t = o.performance;
                    if (!!t && !!t.now) {
                        var e = t.now(),
                            n = Date.now(),
                            r = t.timeOrigin ? Math.abs(t.timeOrigin + e - n) : 36e5,
                            i = t.timing && t.timing.navigationStart,
                            a = "number" == typeof i ? Math.abs(i + e - n) : 36e5;
                        if (r < 36e5 || a < 36e5) return r <= a ? t.timeOrigin : i;
                        return n
                    }
                }()
        },
        874230: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                extractTraceparentData: function() {
                    return o
                },
                generateSentryTraceHeader: function() {
                    return u
                },
                tracingContextFromHeaders: function() {
                    return s
                }
            }), n("474991"), n("398202"), n("301563"), n("932991"), n("293114"), n("754598"), n("814951");
            var r = n("545459"),
                i = n("862315"),
                a = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

            function o(t) {
                if (!!t) {
                    var e, n = t.match(a);
                    if (n) return "1" === n[3] ? e = !0 : "0" === n[3] && (e = !1), {
                        traceId: n[1],
                        parentSampled: e,
                        parentSpanId: n[2]
                    }
                }
            }

            function s(t, e) {
                var n = o(t),
                    a = (0, r.baggageHeaderToDynamicSamplingContext)(e),
                    s = n || {},
                    u = s.traceId,
                    c = s.parentSpanId,
                    l = s.parentSampled,
                    d = {
                        traceId: u || (0, i.uuid4)(),
                        spanId: (0, i.uuid4)().substring(16),
                        sampled: void 0 !== l && l
                    };
                return c && (d.parentSpanId = c), a && (d.dsc = a), {
                    traceparentData: n,
                    dynamicSamplingContext: a,
                    propagationContext: d
                }
            }

            function u() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, i.uuid4)(),
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, i.uuid4)().substring(16),
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = "";
                return void 0 !== n && (r = n ? "-1" : "-0"), "".concat(t, "-").concat(e).concat(r)
            }
        },
        841866: function(t, e, n) {
            "use strict";

            function r(t) {
                if (!t) return {};
                var e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!e) return {};
                var n = e[6] || "",
                    r = e[8] || "";
                return {
                    host: e[4],
                    path: e[5],
                    protocol: e[2],
                    search: n,
                    hash: r,
                    relative: e[5] + n + r
                }
            }
            n.r(e), n.d(e, {
                parseUrl: function() {
                    return r
                }
            }), n("754598"), n("301563"), n("917168"), n("462848"), n("357629"), n("757143"), n("814951")
        },
        30865: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                supportsHistory: function() {
                    return i
                }
            });
            var r = (0, n("24716").getGlobalObject)();

            function i() {
                var t = r.chrome,
                    e = t && t.app && t.app.runtime,
                    n = "history" in r && !!r.history.pushState && !!r.history.replaceState;
                return !e && n
            }
        },
        24716: function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.Math == Math ? t : void 0
            }
            n.r(e), n.d(e, {
                GLOBAL_OBJ: function() {
                    return i
                },
                getGlobalObject: function() {
                    return a
                },
                getGlobalSingleton: function() {
                    return o
                }
            }), n("611060"), n("312677");
            var i = "object" == typeof globalThis && r(globalThis) || "object" == typeof window && r(window) || "object" == typeof self && r(self) || "object" == typeof n.g && r(n.g) || function() {
                return this
            }() || {};

            function a() {
                return i
            }

            function o(t, e, n) {
                var r = n || i,
                    a = r.__SENTRY__ = r.__SENTRY__ || {};
                return a[t] || (a[t] = e())
            }
        },
        321611: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                registerBackgroundTabDetection: function() {
                    return o
                }
            }), n("814951");
            var r = n("91320"),
                i = n("648238"),
                a = n("607190");

            function o() {
                a.WINDOW && a.WINDOW.document ? a.WINDOW.document.addEventListener("visibilitychange", function() {
                    var t = (0, r.getActiveTransaction)();
                    if (a.WINDOW.document.hidden && t) {
                        var e = "cancelled";
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Tracing] Transaction: ".concat(e, " -> since tab moved to the background, op: ").concat(t.op)), !t.status && t.setStatus(e), t.setTag("visibilitychange", "document.hidden"), t.finish()
                    }
                }) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("[Tracing] Could not set up background tab detection due to lack of global document")
            }
        },
        204325: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BrowserTracing: function() {
                    return h
                }
            });
            var r = n("87627"),
                i = n("200344"),
                a = n("21189"),
                o = n("227094");
            n("814951"), n("568603"), n("128242"), n("357629");
            var s = n("91320"),
                u = n("648238"),
                c = n("321611"),
                l = n("799821"),
                d = n("722994"),
                f = n("263951"),
                _ = n("607190"),
                p = (0, a._)((0, o._)((0, a._)({}, s.TRACING_DEFAULTS), {
                    markBackgroundTransactions: !0,
                    routingInstrumentation: f.instrumentRoutingWithDefaults,
                    startTransactionOnLocationChange: !0,
                    startTransactionOnPageLoad: !0,
                    enableLongTask: !0,
                    _experiments: {}
                }), d.defaultRequestInstrumentationOptions),
                h = function() {
                    function t(e) {
                        (0, r._)(this, t), t.prototype.__init.call(this), t.prototype.__init2.call(this), (0, s.addTracingExtensions)(), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (this._hasSetTracePropagationTargets = !!(e && (e.tracePropagationTargets || e.tracingOrigins))), this.options = (0, a._)({}, p, e), void 0 !== this.options._experiments.enableLongTask && (this.options.enableLongTask = this.options._experiments.enableLongTask), e && !e.tracePropagationTargets && e.tracingOrigins && (this.options.tracePropagationTargets = e.tracingOrigins), this._collectWebVitals = (0, l.startTrackingWebVitals)(), this.options.enableLongTask && (0, l.startTrackingLongTasks)(), this.options._experiments.enableInteractions && (0, l.startTrackingInteractions)()
                    }
                    return (0, i._)(t, [{
                        key: "__init",
                        value: function() {
                            this.name = "BrowserTracing"
                        }
                    }, {
                        key: "__init2",
                        value: function() {
                            this._hasSetTracePropagationTargets = !1
                        }
                    }, {
                        key: "setupOnce",
                        value: function(t, e) {
                            var n = this;
                            this._getCurrentHub = e;
                            var r = e().getClient(),
                                i = r && r.getOptions(),
                                a = this.options,
                                o = a.routingInstrumentation,
                                s = a.startTransactionOnLocationChange,
                                l = a.startTransactionOnPageLoad,
                                f = a.markBackgroundTransactions,
                                _ = a.traceFetch,
                                p = a.traceXHR,
                                h = a.shouldCreateSpanForRequest,
                                v = a.enableHTTPTimings,
                                m = a._experiments,
                                g = i && i.tracePropagationTargets,
                                y = g || this.options.tracePropagationTargets;
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this._hasSetTracePropagationTargets && g && u.logger.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."), o(function(t) {
                                var r = n._createRouteTransaction(t);
                                return n.options._experiments.onStartRouteTransaction && n.options._experiments.onStartRouteTransaction(r, t, e), r
                            }, l, s), f && (0, c.registerBackgroundTabDetection)(), m.enableInteractions && this._registerInteractionListener(), (0, d.instrumentOutgoingRequests)({
                                traceFetch: _,
                                traceXHR: p,
                                tracePropagationTargets: y,
                                shouldCreateSpanForRequest: h,
                                enableHTTPTimings: v
                            })
                        }
                    }, {
                        key: "_createRouteTransaction",
                        value: function(t) {
                            var e = this;
                            if (!this._getCurrentHub) {
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.logger.warn("[Tracing] Did not create ".concat(t.op, " transaction because _getCurrentHub is invalid."));
                                return
                            }
                            var n = this._getCurrentHub(),
                                r = this.options,
                                i = r.beforeNavigate,
                                c = r.idleTimeout,
                                d = r.finalTimeout,
                                f = r.heartbeatInterval,
                                p = "pageload" === t.op,
                                h = p ? v("sentry-trace") : "",
                                m = p ? v("baggage") : "",
                                g = (0, u.tracingContextFromHeaders)(h, m),
                                y = g.traceparentData,
                                E = g.dynamicSamplingContext,
                                b = g.propagationContext,
                                S = (0, o._)((0, a._)({}, t, y), {
                                    metadata: (0, o._)((0, a._)({}, t.metadata), {
                                        dynamicSamplingContext: y && !E ? {} : E
                                    }),
                                    trimEnd: !0
                                }),
                                k = "function" == typeof i ? i(S) : S,
                                w = void 0 === k ? (0, o._)((0, a._)({}, S), {
                                    sampled: !1
                                }) : k;
                            w.metadata = w.name !== S.name ? (0, o._)((0, a._)({}, w.metadata), {
                                source: "custom"
                            }) : w.metadata, this._latestRouteName = w.name, this._latestRouteSource = w.metadata && w.metadata.source, !1 === w.sampled && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.logger.log("[Tracing] Will not send ".concat(w.op, " transaction because of beforeNavigate.")), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.logger.log("[Tracing] Starting ".concat(w.op, " transaction on scope"));
                            var T = _.WINDOW.location,
                                x = (0, s.startIdleTransaction)(n, w, c, d, !0, {
                                    location: T
                                }, f),
                                R = n.getScope();
                            return p && y ? R.setPropagationContext(b) : R.setPropagationContext({
                                traceId: x.traceId,
                                spanId: x.spanId,
                                parentSpanId: x.parentSpanId,
                                sampled: !!x.sampled
                            }), x.registerBeforeFinishCallback(function(t) {
                                e._collectWebVitals(), (0, l.addPerformanceEntries)(t)
                            }), x
                        }
                    }, {
                        key: "_registerInteractionListener",
                        value: function() {
                            var t, e = this,
                                n = function() {
                                    var n = e.options,
                                        r = n.idleTimeout,
                                        i = n.finalTimeout,
                                        a = n.heartbeatInterval,
                                        o = "ui.action.click",
                                        c = (0, s.getActiveTransaction)();
                                    if (c && c.op && ["navigation", "pageload"].includes(c.op)) {
                                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.logger.warn("[Tracing] Did not create ".concat(o, " transaction because a pageload or navigation transaction is in progress."));
                                        return
                                    }
                                    if (t && (t.setFinishReason("interactionInterrupted"), t.finish(), t = void 0), !e._getCurrentHub) {
                                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.logger.warn("[Tracing] Did not create ".concat(o, " transaction because _getCurrentHub is invalid."));
                                        return
                                    }
                                    if (!e._latestRouteName) {
                                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.logger.warn("[Tracing] Did not create ".concat(o, " transaction because _latestRouteName is missing."));
                                        return
                                    }
                                    var l = e._getCurrentHub(),
                                        d = _.WINDOW.location,
                                        f = {
                                            name: e._latestRouteName,
                                            op: o,
                                            trimEnd: !0,
                                            metadata: {
                                                source: e._latestRouteSource || "url"
                                            }
                                        };
                                    t = (0, s.startIdleTransaction)(l, f, r, i, !0, {
                                        location: d
                                    }, a)
                                };
                            ["click"].forEach(function(t) {
                                addEventListener(t, n, {
                                    once: !1,
                                    capture: !0
                                })
                            })
                        }
                    }]), t
                }();

            function v(t) {
                var e = (0, u.getDomElement)("meta[name=".concat(t, "]"));
                return e ? e.getAttribute("content") : void 0
            }
        },
        799821: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                addPerformanceEntries: function() {
                    return b
                },
                startTrackingInteractions: function() {
                    return E
                },
                startTrackingLongTasks: function() {
                    return y
                },
                startTrackingWebVitals: function() {
                    return g
                }
            }), n("633702"), n("266796"), n("357629"), n("996173"), n("47120"), n("814951"), n("849202"), n("757143"), n("301563"), n("566702");
            var r, i, a = n("91320"),
                o = n("648238"),
                s = n("607190"),
                u = n("540161"),
                c = n("282572"),
                l = n("301072"),
                d = n("233863"),
                f = n("544457"),
                _ = n("72609");

            function p(t) {
                return t / 1e3
            }

            function h() {
                return s.WINDOW && s.WINDOW.addEventListener && s.WINDOW.performance
            }
            var v = 0,
                m = {};

            function g() {
                var t = h();
                if (t && o.browserPerformanceTimeOrigin) {
                    t.mark && s.WINDOW.performance.mark("sentry-tracing-init"),
                        function() {
                            (0, c.onFID)(function(t) {
                                var e = t.entries.pop();
                                if (e) {
                                    var n = p(o.browserPerformanceTimeOrigin),
                                        r = p(e.startTime);
                                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding FID"), m.fid = {
                                        value: t.value,
                                        unit: "millisecond"
                                    }, m["mark.fid"] = {
                                        value: n + r,
                                        unit: "second"
                                    }
                                }
                            })
                        }();
                    var e = function() {
                            return (0, u.onCLS)(function(t) {
                                var e = t.entries.pop();
                                e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding CLS"), m.cls = {
                                    value: t.value,
                                    unit: ""
                                }, i = e)
                            })
                        }(),
                        n = function() {
                            return (0, l.onLCP)(function(t) {
                                var e = t.entries.pop();
                                e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding LCP"), m.lcp = {
                                    value: t.value,
                                    unit: "millisecond"
                                }, r = e)
                            })
                        }();
                    return function() {
                        e && e(), n && n()
                    }
                }
                return function() {}
            }

            function y() {
                (0, f.observe)("longtask", function(t) {
                    var e = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var i, s = t[Symbol.iterator](); !(e = (i = s.next()).done); e = !0) {
                            var u = i.value,
                                c = (0, a.getActiveTransaction)();
                            if (!c) return;
                            var l = p(o.browserPerformanceTimeOrigin + u.startTime),
                                d = p(u.duration);
                            c.startChild({
                                description: "Main UI thread blocked",
                                op: "ui.long-task",
                                startTimestamp: l,
                                endTimestamp: l + d
                            })
                        }
                    } catch (t) {
                        n = !0, r = t
                    } finally {
                        try {
                            !e && null != s.return && s.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                })
            }

            function E() {
                (0, f.observe)("event", function(t) {
                    var e = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var i, s = t[Symbol.iterator](); !(e = (i = s.next()).done); e = !0) {
                            var u = i.value,
                                c = (0, a.getActiveTransaction)();
                            if (!c) return;
                            if ("click" === u.name) {
                                var l = p(o.browserPerformanceTimeOrigin + u.startTime),
                                    d = p(u.duration);
                                c.startChild({
                                    description: (0, o.htmlTreeAsString)(u.target),
                                    op: "ui.interaction.".concat(u.name),
                                    startTimestamp: l,
                                    endTimestamp: l + d
                                })
                            }
                        }
                    } catch (t) {
                        n = !0, r = t
                    } finally {
                        try {
                            !e && null != s.return && s.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                }, {
                    durationThreshold: 0
                })
            }

            function b(t) {
                var e, n, a = h();
                if (a && s.WINDOW.performance.getEntries && o.browserPerformanceTimeOrigin) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Tracing] Adding & adjusting spans using Performance API");
                    var u = p(o.browserPerformanceTimeOrigin),
                        c = a.getEntries();
                    if (c.slice(v).forEach(function(r) {
                            var i = p(r.startTime),
                                a = p(r.duration);
                            if ("navigation" !== t.op || !(u + i < t.startTimestamp)) switch (r.entryType) {
                                case "navigation":
                                    (function(t, e, n) {
                                        ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(function(r) {
                                                S(t, e, r, n)
                                            }), S(t, e, "secureConnection", n, "TLS/SSL", "connectEnd"), S(t, e, "fetch", n, "cache", "domainLookupStart"), S(t, e, "domainLookup", n, "DNS"),
                                            function(t, e, n) {
                                                (0, _._startChild)(t, {
                                                    op: "browser",
                                                    description: "request",
                                                    startTimestamp: n + p(e.requestStart),
                                                    endTimestamp: n + p(e.responseEnd)
                                                }), (0, _._startChild)(t, {
                                                    op: "browser",
                                                    description: "response",
                                                    startTimestamp: n + p(e.responseStart),
                                                    endTimestamp: n + p(e.responseEnd)
                                                })
                                            }(t, e, n)
                                    })(t, r, u), e = u + p(r.responseStart), n = u + p(r.requestStart);
                                    break;
                                case "mark":
                                case "paint":
                                case "measure":
                                    (function(t, e, n, r, i) {
                                        var a = i + n;
                                        (0, _._startChild)(t, {
                                            description: e.name,
                                            endTimestamp: a + r,
                                            op: e.entryType,
                                            startTimestamp: a
                                        })
                                    })(t, r, i, a, u);
                                    var c = (0, d.getVisibilityWatcher)(),
                                        l = r.startTime < c.firstHiddenTime;
                                    "first-paint" === r.name && l && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding FP"), m.fp = {
                                        value: r.startTime,
                                        unit: "millisecond"
                                    }), "first-contentful-paint" === r.name && l && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding FCP"), m.fcp = {
                                        value: r.startTime,
                                        unit: "millisecond"
                                    });
                                    break;
                                case "resource":
                                    var f = r.name.replace(s.WINDOW.location.origin, "");
                                    (function(t, e, n, r, i, a) {
                                        if ("xmlhttprequest" !== e.initiatorType && "fetch" !== e.initiatorType) {
                                            var o = {};
                                            "transferSize" in e && (o["http.response_transfer_size"] = e.transferSize), "encodedBodySize" in e && (o["http.response_content_length"] = e.encodedBodySize), "decodedBodySize" in e && (o["http.decoded_response_content_length"] = e.decodedBodySize), "renderBlockingStatus" in e && (o["resource.render_blocking_status"] = e.renderBlockingStatus);
                                            var s = a + r;
                                            (0, _._startChild)(t, {
                                                description: n,
                                                endTimestamp: s + i,
                                                op: e.initiatorType ? "resource.".concat(e.initiatorType) : "resource.other",
                                                startTimestamp: s,
                                                data: o
                                            })
                                        }
                                    })(t, r, f, i, a, u)
                            }
                        }), v = Math.max(c.length - 1, 0), function(t) {
                            var e = s.WINDOW.navigator;
                            if (e) {
                                var n = e.connection;
                                n && (n.effectiveType && t.setTag("effectiveConnectionType", n.effectiveType), n.type && t.setTag("connectionType", n.type), (0, _.isMeasurementValue)(n.rtt) && (m["connection.rtt"] = {
                                    value: n.rtt,
                                    unit: "millisecond"
                                })), (0, _.isMeasurementValue)(e.deviceMemory) && t.setTag("deviceMemory", "".concat(e.deviceMemory, " GB")), (0, _.isMeasurementValue)(e.hardwareConcurrency) && t.setTag("hardwareConcurrency", String(e.hardwareConcurrency))
                            }
                        }(t), "pageload" === t.op) {
                        "number" == typeof e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding TTFB"), m.ttfb = {
                            value: (e - t.startTimestamp) * 1e3,
                            unit: "millisecond"
                        }, "number" == typeof n && n <= e && (m["ttfb.requestTime"] = {
                            value: (e - n) * 1e3,
                            unit: "millisecond"
                        })), ["fcp", "fp", "lcp"].forEach(function(e) {
                            if (m[e] && !(u >= t.startTimestamp)) {
                                var n = m[e].value,
                                    r = Math.abs((u + p(n) - t.startTimestamp) * 1e3),
                                    i = r - n;
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Normalized ".concat(e, " from ").concat(n, " to ").concat(r, " (").concat(i, ")")), m[e].value = r
                            }
                        });
                        var l = m["mark.fid"];
                        l && m.fid && ((0, _._startChild)(t, {
                                description: "first input delay",
                                endTimestamp: l.value + p(m.fid.value),
                                op: "ui.action",
                                startTimestamp: l.value
                            }), delete m["mark.fid"]), !("fcp" in m) && delete m.cls, Object.keys(m).forEach(function(e) {
                                t.setMeasurement(e, m[e].value, m[e].unit)
                            }),
                            function(t) {
                                r && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding LCP Data"), r.element && t.setTag("lcp.element", (0, o.htmlTreeAsString)(r.element)), r.id && t.setTag("lcp.id", r.id), r.url && t.setTag("lcp.url", r.url.trim().slice(0, 200)), t.setTag("lcp.size", r.size)), i && i.sources && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding CLS Data"), i.sources.forEach(function(e, n) {
                                    return t.setTag("cls.source.".concat(n + 1), (0, o.htmlTreeAsString)(e.node))
                                }))
                            }(t)
                    }
                    r = void 0, i = void 0, m = {}
                }
            }

            function S(t, e, n, r, i, a) {
                var o = a ? e[a] : e["".concat(n, "End")],
                    s = e["".concat(n, "Start")];
                s && o && (0, _._startChild)(t, {
                    op: "browser",
                    description: i || n,
                    startTimestamp: r + p(s),
                    endTimestamp: r + p(o)
                })
            }
        },
        72609: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                _startChild: function() {
                    return o
                },
                isMeasurementValue: function() {
                    return a
                }
            });
            var r = n("21189"),
                i = n("261047");

            function a(t) {
                return "number" == typeof t && isFinite(t)
            }

            function o(t, e) {
                var n = e.startTimestamp,
                    a = (0, i._)(e, ["startTimestamp"]);
                return n && t.startTimestamp > n && (t.startTimestamp = n), t.startChild((0, r._)({
                    startTimestamp: n
                }, a))
            }
        },
        722994: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                defaultRequestInstrumentationOptions: function() {
                    return l
                },
                instrumentOutgoingRequests: function() {
                    return d
                }
            });
            var r = n("21189"),
                i = n("227094"),
                a = n("154005"),
                o = n("761020");
            n("357629"), n("733019"), n("633702"), n("266796"), n("996173"), n("47120"), n("917168"), n("301563"), n("653041"), n("814951");
            var s = n("91320"),
                u = n("648238"),
                c = ["localhost", /^\/(?!\/)/],
                l = {
                    traceFetch: !0,
                    traceXHR: !0,
                    enableHTTPTimings: !0,
                    tracingOrigins: c,
                    tracePropagationTargets: c
                };

            function d(t) {
                var e = (0, r._)({
                        traceFetch: l.traceFetch,
                        traceXHR: l.traceXHR
                    }, t),
                    n = e.traceFetch,
                    a = e.traceXHR,
                    d = e.tracePropagationTargets,
                    _ = e.tracingOrigins,
                    h = e.shouldCreateSpanForRequest,
                    v = e.enableHTTPTimings,
                    m = "function" == typeof h ? h : function(t) {
                        return !0
                    },
                    g = function(t) {
                        return function(t, e) {
                            return (0, u.stringMatchesSomePattern)(t, e || c)
                        }(t, d || _)
                    },
                    y = {};
                n && (0, u.addInstrumentationHandler)("fetch", function(t) {
                    var e = function(t, e, n, a) {
                        if ((0, s.hasTracingEnabled)() && t.fetchData) {
                            var c = e(t.fetchData.url);
                            if (t.endTimestamp && c) {
                                var l = t.fetchData.__span;
                                if (!l) return;
                                var d = a[l];
                                if (d) {
                                    if (t.response) {
                                        d.setHttpStatus(t.response.status);
                                        var f = parseInt(t.response && t.response.headers && t.response.headers.get("content-length"));
                                        f > 0 && d.setData("http.response_content_length", f)
                                    } else t.error && d.setStatus("internal_error");
                                    d.finish(), delete a[l]
                                }
                                return
                            }
                            var _ = (0, s.getCurrentHub)(),
                                p = _.getScope(),
                                h = _.getClient(),
                                v = p.getSpan(),
                                m = t.fetchData,
                                g = m.method,
                                y = m.url,
                                E = c && v ? v.startChild({
                                    data: {
                                        url: y,
                                        type: "fetch",
                                        "http.method": g
                                    },
                                    description: "".concat(g, " ").concat(y),
                                    op: "http.client"
                                }) : void 0;
                            if (E && (t.fetchData.__span = E.spanId, a[E.spanId] = E), n(t.fetchData.url) && h) {
                                var b = t.args[0];
                                t.args[1] = t.args[1] || {};
                                var S = t.args[1];
                                S.headers = function(t, e, n, a) {
                                    var c = n.getSpan(),
                                        l = c && c.transaction,
                                        d = n.getPropagationContext(),
                                        f = d.traceId,
                                        _ = d.sampled,
                                        p = d.dsc,
                                        h = c ? c.toTraceparent() : (0, u.generateSentryTraceHeader)(f, void 0, _),
                                        v = l ? l.getDynamicSamplingContext() : p || (0, s.getDynamicSamplingContextFromClient)(f, e, n),
                                        m = (0, u.dynamicSamplingContextToSentryBaggageHeader)(v),
                                        g = "undefined" != typeof Request && (0, u.isInstanceOf)(t, Request) ? t.headers : a.headers;
                                    if (!g) return {
                                        "sentry-trace": h,
                                        baggage: m
                                    };
                                    if ("undefined" != typeof Headers && (0, u.isInstanceOf)(g, Headers)) {
                                        var y = new Headers(g);
                                        return y.append("sentry-trace", h), m && y.append(u.BAGGAGE_HEADER_NAME, m), y
                                    }
                                    if (Array.isArray(g)) {
                                        var E = (0, o._)(g).concat([
                                            ["sentry-trace", h]
                                        ]);
                                        return m && E.push([u.BAGGAGE_HEADER_NAME, m]), E
                                    } else {
                                        var b = "baggage" in g ? g.baggage : void 0,
                                            S = [];
                                        return Array.isArray(b) ? S.push.apply(S, (0, o._)(b)) : b && S.push(b), m && S.push(m), (0, i._)((0, r._)({}, g), {
                                            "sentry-trace": h,
                                            baggage: S.length > 0 ? S.join(",") : void 0
                                        })
                                    }
                                }(b, h, p, S)
                            }
                            return E
                        }
                    }(t, m, g, y);
                    v && e && f(e)
                }), a && (0, u.addInstrumentationHandler)("xhr", function(t) {
                    var e = function(t, e, n, a) {
                        var o = t.xhr,
                            c = o && o[u.SENTRY_XHR_DATA_KEY];
                        if ((0, s.hasTracingEnabled)() && (!o || !o.__sentry_own_request__) && o && c) {
                            var l = e(c.url);
                            if (t.endTimestamp && l) {
                                var d = o.__sentry_xhr_span_id__;
                                if (!d) return;
                                var f = a[d];
                                f && (f.setHttpStatus(c.status_code), f.finish(), delete a[d]);
                                return
                            }
                            var _ = (0, s.getCurrentHub)(),
                                h = _.getScope(),
                                v = h.getSpan(),
                                m = l && v ? v.startChild({
                                    data: (0, i._)((0, r._)({}, c.data), {
                                        type: "xhr",
                                        "http.method": c.method,
                                        url: c.url
                                    }),
                                    description: "".concat(c.method, " ").concat(c.url),
                                    op: "http.client"
                                }) : void 0;
                            if (m && (o.__sentry_xhr_span_id__ = m.spanId, a[o.__sentry_xhr_span_id__] = m), o.setRequestHeader && n(c.url)) {
                                if (m) {
                                    var g = m && m.transaction,
                                        y = g && g.getDynamicSamplingContext(),
                                        E = (0, u.dynamicSamplingContextToSentryBaggageHeader)(y);
                                    p(o, m.toTraceparent(), E)
                                } else {
                                    var b = _.getClient(),
                                        S = h.getPropagationContext(),
                                        k = S.traceId,
                                        w = S.sampled,
                                        T = S.dsc,
                                        x = (0, u.generateSentryTraceHeader)(k, void 0, w),
                                        R = T || (b ? (0, s.getDynamicSamplingContextFromClient)(k, b, h) : void 0);
                                    p(o, x, (0, u.dynamicSamplingContextToSentryBaggageHeader)(R))
                                }
                            }
                            return m
                        }
                    }(t, m, g, y);
                    v && e && f(e)
                })
            }

            function f(t) {
                var e = t.data.url,
                    n = new PerformanceObserver(function(r) {
                        r.getEntries().forEach(function(r) {
                            if (("fetch" === r.initiatorType || "xmlhttprequest" === r.initiatorType) && r.name.endsWith(e)) {
                                var i;
                                (function(t) {
                                    var e = function(t) {
                                            var e = "unknown",
                                                n = "unknown",
                                                r = "",
                                                i = !0,
                                                o = !1,
                                                s = void 0;
                                            try {
                                                for (var u, c = t[Symbol.iterator](); !(i = (u = c.next()).done); i = !0) {
                                                    var l, d = u.value;
                                                    if ("/" === d) {
                                                        e = (l = (0, a._)(t.split("/"), 2))[0], n = l[1];
                                                        break
                                                    }
                                                    if (!isNaN(Number(d))) {
                                                        e = "h" === r ? "http" : r, n = t.split(r)[1];
                                                        break
                                                    }
                                                    r += d
                                                }
                                            } catch (t) {
                                                o = !0, s = t
                                            } finally {
                                                try {
                                                    !i && null != c.return && c.return()
                                                } finally {
                                                    if (o) throw s
                                                }
                                            }
                                            return r === t && (e = r), {
                                                name: e,
                                                version: n
                                            }
                                        }(t.nextHopProtocol),
                                        n = e.name,
                                        r = e.version,
                                        i = [];
                                    return (i.push(["network.protocol.version", r], ["network.protocol.name", n]), u.browserPerformanceTimeOrigin) ? (0, o._)(i).concat([
                                        ["http.request.redirect_start", _(t.redirectStart)],
                                        ["http.request.fetch_start", _(t.fetchStart)],
                                        ["http.request.domain_lookup_start", _(t.domainLookupStart)],
                                        ["http.request.domain_lookup_end", _(t.domainLookupEnd)],
                                        ["http.request.connect_start", _(t.connectStart)],
                                        ["http.request.secure_connection_start", _(t.secureConnectionStart)],
                                        ["http.request.connection_end", _(t.connectEnd)],
                                        ["http.request.request_start", _(t.requestStart)],
                                        ["http.request.response_start", _(t.responseStart)],
                                        ["http.request.response_end", _(t.responseEnd)]
                                    ]) : i
                                })(r).forEach(function(e) {
                                    return (i = t).setData.apply(i, (0, o._)(e))
                                }), n.disconnect()
                            }
                        })
                    });
                n.observe({
                    entryTypes: ["resource"]
                })
            }

            function _(t) {
                return ((u.browserPerformanceTimeOrigin || performance.timeOrigin) + t) / 1e3
            }

            function p(t, e, n) {
                try {
                    t.setRequestHeader("sentry-trace", e), n && t.setRequestHeader(u.BAGGAGE_HEADER_NAME, n)
                } catch (t) {}
            }
        },
        263951: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                instrumentRoutingWithDefaults: function() {
                    return a
                }
            }), n("814951");
            var r = n("648238"),
                i = n("607190");

            function a(t) {
                var e, n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (!i.WINDOW || !i.WINDOW.location) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Could not initialize routing instrumentation due to invalid location");
                    return
                }
                var o = i.WINDOW.location.href;
                n && (e = t({
                    name: i.WINDOW.location.pathname,
                    startTimestamp: r.browserPerformanceTimeOrigin ? r.browserPerformanceTimeOrigin / 1e3 : void 0,
                    op: "pageload",
                    metadata: {
                        source: "url"
                    }
                })), a && (0, r.addInstrumentationHandler)("history", function(n) {
                    var a = n.to,
                        s = n.from;
                    if (void 0 === s && o && -1 !== o.indexOf(a)) {
                        o = void 0;
                        return
                    }
                    s !== a && (o = void 0, e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] Finishing current transaction with op: ".concat(e.op)), e.finish()), e = t({
                        name: i.WINDOW.location.pathname,
                        op: "navigation",
                        metadata: {
                            source: "url"
                        }
                    }))
                })
            }
        },
        607190: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                WINDOW: function() {
                    return r
                }
            });
            var r = n("648238").GLOBAL_OBJ
        },
        540161: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                onCLS: function() {
                    return s
                }
            }), n("357629"), n("653041"), n("996173"), n("47120");
            var r = n("358133"),
                i = n("416097"),
                a = n("544457"),
                o = n("527475"),
                s = function(t) {
                    var e, n = (0, i.initMetric)("CLS", 0),
                        s = 0,
                        u = [],
                        c = function(t) {
                            t.forEach(function(t) {
                                if (!t.hadRecentInput) {
                                    var r = u[0],
                                        i = u[u.length - 1];
                                    s && 0 !== u.length && t.startTime - i.startTime < 1e3 && t.startTime - r.startTime < 5e3 ? (s += t.value, u.push(t)) : (s = t.value, u = [t]), s > n.value && (n.value = s, n.entries = u, e && e())
                                }
                            })
                        },
                        l = (0, a.observe)("layout-shift", c);
                    if (l) {
                        e = (0, r.bindReporter)(t, n);
                        var d = function() {
                            c(l.takeRecords()), e(!0)
                        };
                        return (0, o.onHidden)(d), d
                    }
                }
        },
        282572: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                onFID: function() {
                    return u
                }
            }), n("996173"), n("47120"), n("357629"), n("653041");
            var r = n("358133"),
                i = n("233863"),
                a = n("416097"),
                o = n("544457"),
                s = n("527475"),
                u = function(t) {
                    var e, n = (0, i.getVisibilityWatcher)(),
                        u = (0, a.initMetric)("FID"),
                        c = function(t) {
                            t.startTime < n.firstHiddenTime && (u.value = t.processingStart - t.startTime, u.entries.push(t), e(!0))
                        },
                        l = function(t) {
                            t.forEach(c)
                        },
                        d = (0, o.observe)("first-input", l);
                    e = (0, r.bindReporter)(t, u), d && (0, s.onHidden)(function() {
                        l(d.takeRecords()), d.disconnect()
                    }, !0)
                }
        },
        301072: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                onLCP: function() {
                    return l
                }
            }), n("996173"), n("47120"), n("357629");
            var r = n("358133"),
                i = n("726300"),
                a = n("233863"),
                o = n("416097"),
                s = n("544457"),
                u = n("527475"),
                c = {},
                l = function(t) {
                    var e, n = (0, a.getVisibilityWatcher)(),
                        l = (0, o.initMetric)("LCP"),
                        d = function(t) {
                            var r = t[t.length - 1];
                            if (r) {
                                var a = Math.max(r.startTime - (0, i.getActivationStart)(), 0);
                                a < n.firstHiddenTime && (l.value = a, l.entries = [r], e())
                            }
                        },
                        f = (0, s.observe)("largest-contentful-paint", d);
                    if (f) {
                        e = (0, r.bindReporter)(t, l);
                        var _ = function() {
                            !c[l.id] && (d(f.takeRecords()), f.disconnect(), c[l.id] = !0, e(!0))
                        };
                        return ["keydown", "click"].forEach(function(t) {
                            addEventListener(t, _, {
                                once: !0,
                                capture: !0
                            })
                        }), (0, u.onHidden)(_, !0), _
                    }
                }
        },
        358133: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                bindReporter: function() {
                    return r
                }
            });
            var r = function(t, e, n) {
                var r, i;
                return function(a) {
                    e.value >= 0 && (a || n) && ((i = e.value - (r || 0)) || void 0 === r) && (r = e.value, e.delta = i, t(e))
                }
            }
        },
        134954: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                generateUniqueID: function() {
                    return r
                }
            }), n("814951");
            var r = function() {
                return "v3-".concat(Date.now(), "-").concat(Math.floor(Math.random() * (9e12 - 1)) + 1e12)
            }
        },
        726300: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getActivationStart: function() {
                    return i
                }
            });
            var r = n("27583"),
                i = function() {
                    var t = (0, r.getNavigationEntry)();
                    return t && t.activationStart || 0
                }
        },
        27583: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getNavigationEntry: function() {
                    return a
                }
            });
            var r = n("607190"),
                i = function() {
                    var t = r.WINDOW.performance.timing,
                        e = r.WINDOW.performance.navigation.type,
                        n = {
                            entryType: "navigation",
                            startTime: 0,
                            type: 2 == e ? "back_forward" : 1 === e ? "reload" : "navigate"
                        };
                    for (var i in t) "navigationStart" !== i && "toJSON" !== i && (n[i] = Math.max(t[i] - t.navigationStart, 0));
                    return n
                },
                a = function() {
                    return r.WINDOW.__WEB_VITALS_POLYFILL__ ? r.WINDOW.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || i()) : r.WINDOW.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
                }
        },
        233863: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getVisibilityWatcher: function() {
                    return s
                }
            });
            var r = n("607190"),
                i = n("527475"),
                a = -1,
                o = function() {
                    (0, i.onHidden)(function(t) {
                        a = t.timeStamp
                    }, !0)
                },
                s = function() {
                    return a < 0 && (a = "hidden" !== r.WINDOW.document.visibilityState || r.WINDOW.document.prerendering ? 1 / 0 : 0, o()), {
                        get firstHiddenTime() {
                            return a
                        }
                    }
                }
        },
        416097: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                initMetric: function() {
                    return s
                }
            }), n("757143"), n("301563");
            var r = n("607190"),
                i = n("134954"),
                a = n("726300"),
                o = n("27583"),
                s = function(t, e) {
                    var n = (0, o.getNavigationEntry)(),
                        s = "navigate";
                    return n && (s = r.WINDOW.document.prerendering || (0, a.getActivationStart)() > 0 ? "prerender" : n.type.replace(/_/g, "-")), {
                        name: t,
                        value: void 0 === e ? -1 : e,
                        rating: "good",
                        delta: 0,
                        entries: [],
                        id: (0, i.generateUniqueID)(),
                        navigationType: s
                    }
                }
        },
        544457: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                observe: function() {
                    return r
                }
            }), n("568603"), n("128242");
            var r = function(t, e, n) {
                try {
                    if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                        var r = new PerformanceObserver(function(t) {
                            e(t.getEntries())
                        });
                        return r.observe(Object.assign({
                            type: t,
                            buffered: !0
                        }, n || {})), r
                    }
                } catch (t) {}
            }
        },
        527475: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                onHidden: function() {
                    return i
                }
            });
            var r = n("607190"),
                i = function(t, e) {
                    var n = function(i) {
                        ("pagehide" === i.type || "hidden" === r.WINDOW.document.visibilityState) && (t(i), e && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
                    };
                    addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
                }
        },
        752875: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BrowserTracing: function() {
                    return r.BrowserTracing
                },
                defaultRequestInstrumentationOptions: function() {
                    return i.defaultRequestInstrumentationOptions
                },
                instrumentOutgoingRequests: function() {
                    return i.instrumentOutgoingRequests
                }
            });
            var r = n("204325"),
                i = n("722994")
        },
        256649: function(t, e, n) {
            "use strict";
            var r = n("740362");
            t.exports = function(t) {
                return void 0 !== t && (r(t, "value") || r(t, "writable"))
            }
        },
        788539: function(t, e, n) {
            "use strict";
            var r = n("147018"),
                i = n("926515"),
                a = n("622281"),
                o = n("24033"),
                s = n("256649"),
                u = n("347722"),
                c = n("144748");
            r({
                target: "Reflect",
                stat: !0
            }, {
                get: function t(e, n) {
                    var r, l, d = arguments.length < 3 ? e : arguments[2];
                    return o(e) === d ? e[n] : (r = u.f(e, n)) ? s(r) ? r.value : void 0 === r.get ? void 0 : i(r.get, d) : a(l = c(e)) ? t(l, n, d) : void 0
                }
            })
        }
    }
]);
//# sourceMappingURL=14700.d384d1298befc0eeff2e.js.map