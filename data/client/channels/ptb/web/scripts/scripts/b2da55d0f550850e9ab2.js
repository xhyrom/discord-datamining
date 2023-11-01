(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["47470"], {
        57738: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BrowserClient: function() {
                    return c
                }
            });
            var r = n("675065"),
                i = n("103787"),
                a = n("943833"),
                o = n("714090"),
                s = n("585972"),
                l = n("130178");
            class c extends r.BaseClient {
                eventFromException(t, e) {
                    return (0, a.eventFromException)(this._options.stackParser, t, e, this._options.attachStacktrace)
                }
                eventFromMessage(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info",
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return (0, a.eventFromMessage)(this._options.stackParser, t, e, n, this._options.attachStacktrace)
                }
                sendEvent(t, e) {
                    let n = this.getIntegrationById(s.BREADCRUMB_INTEGRATION_ID);
                    n && n.addSentryBreadcrumb && n.addSentryBreadcrumb(t), super.sendEvent(t, e)
                }
                captureUserFeedback(t) {
                    if (!this._isEnabled()) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("SDK not enabled, will not capture user feedback.");
                        return
                    }
                    let e = (0, l.createUserFeedbackEnvelope)(t, {
                        metadata: this.getSdkMetadata(),
                        dsn: this.getDsn(),
                        tunnel: this.getOptions().tunnel
                    });
                    this._sendEnvelope(e)
                }
                _prepareEvent(t, e, n) {
                    return t.platform = t.platform || "javascript", super._prepareEvent(t, e, n)
                }
                _flushOutcomes() {
                    let t = this._clearOutcomes();
                    if (0 === t.length) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("No outcomes to send");
                        return
                    }
                    if (!this._dsn) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("No dsn provided, will not send outcomes");
                        return
                    }("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("Sending outcomes:", t);
                    let e = (0, i.createClientReportEnvelope)(t, this._options.tunnel && (0, i.dsnToString)(this._dsn));
                    this._sendEnvelope(e)
                }
                constructor(t) {
                    let e = o.WINDOW.SENTRY_SDK_SOURCE || (0, i.getSDKSource)();
                    t._metadata = t._metadata || {}, t._metadata.sdk = t._metadata.sdk || {
                        name: "sentry.javascript.browser",
                        packages: [{
                            name: "".concat(e, ":@sentry/browser"),
                            version: r.SDK_VERSION
                        }],
                        version: r.SDK_VERSION
                    }, super(t), t.sendClientReports && o.WINDOW.document && o.WINDOW.document.addEventListener("visibilitychange", () => {
                        "hidden" === o.WINDOW.document.visibilityState && this._flushOutcomes()
                    })
                }
            }
        },
        943833: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                eventFromException: function() {
                    return c
                },
                eventFromMessage: function() {
                    return u
                },
                eventFromUnknownInput: function() {
                    return d
                },
                exceptionFromError: function() {
                    return a
                }
            });
            var r = n("675065"),
                i = n("103787");

            function a(t, e) {
                let n = s(t, e),
                    r = {
                        type: e && e.name,
                        value: function(t) {
                            let e = t && t.message;
                            return e ? e.error && "string" == typeof e.error.message ? e.error.message : e : "No error message"
                        }(e)
                    };
                return n.length && (r.stacktrace = {
                    frames: n
                }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r
            }

            function o(t, e) {
                return {
                    exception: {
                        values: [a(t, e)]
                    }
                }
            }

            function s(t, e) {
                let n = e.stacktrace || e.stack || "",
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
            let l = /Minified React error #\d+;/i;

            function c(t, e, n, r) {
                let a = n && n.syntheticException || void 0,
                    o = d(t, e, a, r);
                return (0, i.addExceptionMechanism)(o), o.level = "error", n && n.event_id && (o.event_id = n.event_id), (0, i.resolvedSyncPromise)(o)
            }

            function u(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "info",
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    a = arguments.length > 4 ? arguments[4] : void 0,
                    o = r && r.syntheticException || void 0,
                    s = f(t, e, o, a);
                return s.level = n, r && r.event_id && (s.event_id = r.event_id), (0, i.resolvedSyncPromise)(s)
            }

            function d(t, e, n, a, l) {
                let c;
                if ((0, i.isErrorEvent)(e) && e.error) return o(t, e.error);
                if ((0, i.isDOMError)(e) || (0, i.isDOMException)(e)) {
                    if ("stack" in e) c = o(t, e);
                    else {
                        let r = e.name || ((0, i.isDOMError)(e) ? "DOMError" : "DOMException"),
                            o = e.message ? "".concat(r, ": ").concat(e.message) : r;
                        c = f(t, o, n, a), (0, i.addExceptionTypeValue)(c, o)
                    }
                    return "code" in e && (c.tags = {
                        ...c.tags,
                        "DOMException.code": "".concat(e.code)
                    }), c
                }
                return (0, i.isError)(e) ? o(t, e) : (0, i.isPlainObject)(e) || (0, i.isEvent)(e) ? (c = function(t, e, n, a) {
                    let o = (0, r.getCurrentHub)(),
                        l = o.getClient(),
                        c = l && l.getOptions().normalizeDepth,
                        u = {
                            exception: {
                                values: [{
                                    type: (0, i.isEvent)(e) ? e.constructor.name : a ? "UnhandledRejection" : "Error",
                                    value: function(t, e) {
                                        let {
                                            isUnhandledRejection: n
                                        } = e, r = (0, i.extractExceptionKeysForMessage)(t), a = n ? "promise rejection" : "exception";
                                        if ((0, i.isErrorEvent)(t)) return "Event `ErrorEvent` captured as ".concat(a, " with message `").concat(t.message, "`");
                                        if ((0, i.isEvent)(t)) {
                                            let e = function(t) {
                                                try {
                                                    let e = Object.getPrototypeOf(t);
                                                    return e ? e.constructor.name : void 0
                                                } catch (t) {}
                                            }(t);
                                            return "Event `".concat(e, "` (type=").concat(t.type, ") captured as ").concat(a)
                                        }
                                        return "Object captured as ".concat(a, " with keys: ").concat(r)
                                    }(e, {
                                        isUnhandledRejection: a
                                    })
                                }]
                            },
                            extra: {
                                __serialized__: (0, i.normalizeToSize)(e, c)
                            }
                        };
                    if (n) {
                        let e = s(t, n);
                        e.length && (u.exception.values[0].stacktrace = {
                            frames: e
                        })
                    }
                    return u
                }(t, e, n, l), (0, i.addExceptionMechanism)(c, {
                    synthetic: !0
                }), c) : (c = f(t, e, n, a), (0, i.addExceptionTypeValue)(c, "".concat(e), void 0), (0, i.addExceptionMechanism)(c, {
                    synthetic: !0
                }), c)
            }

            function f(t, e, n, r) {
                let i = {
                    message: e
                };
                if (r && n) {
                    let r = s(t, n);
                    r.length && (i.exception = {
                        values: [{
                            value: e,
                            stacktrace: {
                                frames: r
                            }
                        }]
                    })
                }
                return i
            }
        },
        714090: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                WINDOW: function() {
                    return a
                },
                shouldIgnoreOnError: function() {
                    return s
                },
                wrap: function() {
                    return function t(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            a = arguments.length > 2 ? arguments[2] : void 0;
                        if ("function" != typeof e) return e;
                        try {
                            let t = e.__sentry_wrapped__;
                            if (t) return t;
                            if ((0, i.getOriginalFunction)(e)) return e
                        } catch (t) {
                            return e
                        }
                        let s = function() {
                            let s = Array.prototype.slice.call(arguments);
                            try {
                                a && "function" == typeof a && a.apply(this, arguments);
                                let r = s.map(e => t(e, n));
                                return e.apply(this, r)
                            } catch (t) {
                                throw o++, setTimeout(() => {
                                    o--
                                }), (0, r.withScope)(e => {
                                    e.addEventProcessor(t => (n.mechanism && ((0, i.addExceptionTypeValue)(t, void 0, void 0), (0, i.addExceptionMechanism)(t, n.mechanism)), t.extra = {
                                        ...t.extra,
                                        arguments: s
                                    }, t)), (0, r.captureException)(t)
                                }), t
                            }
                        };
                        try {
                            for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (s[t] = e[t])
                        } catch (t) {}(0, i.markFunctionWrapped)(s, e), (0, i.addNonEnumerableProperty)(e, "__sentry_wrapped__", s);
                        try {
                            let t = Object.getOwnPropertyDescriptor(s, "name");
                            t.configurable && Object.defineProperty(s, "name", {
                                get: () => e.name
                            })
                        } catch (t) {}
                        return s
                    }
                }
            });
            var r = n("675065"),
                i = n("103787");
            let a = i.GLOBAL_OBJ,
                o = 0;

            function s() {
                return o > 0
            }
        },
        245123: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                FunctionToString: function() {
                    return r.FunctionToString
                },
                Hub: function() {
                    return r.Hub
                },
                InboundFilters: function() {
                    return r.InboundFilters
                },
                ModuleMetadata: function() {
                    return r.ModuleMetadata
                },
                SDK_VERSION: function() {
                    return r.SDK_VERSION
                },
                Scope: function() {
                    return r.Scope
                },
                addBreadcrumb: function() {
                    return r.addBreadcrumb
                },
                addGlobalEventProcessor: function() {
                    return r.addGlobalEventProcessor
                },
                addTracingExtensions: function() {
                    return r.addTracingExtensions
                },
                captureEvent: function() {
                    return r.captureEvent
                },
                captureException: function() {
                    return r.captureException
                },
                captureMessage: function() {
                    return r.captureMessage
                },
                configureScope: function() {
                    return r.configureScope
                },
                createTransport: function() {
                    return r.createTransport
                },
                extractTraceparentData: function() {
                    return r.extractTraceparentData
                },
                getActiveTransaction: function() {
                    return r.getActiveTransaction
                },
                getCurrentHub: function() {
                    return r.getCurrentHub
                },
                getHubFromCarrier: function() {
                    return r.getHubFromCarrier
                },
                makeMain: function() {
                    return r.makeMain
                },
                makeMultiplexedTransport: function() {
                    return r.makeMultiplexedTransport
                },
                setContext: function() {
                    return r.setContext
                },
                setExtra: function() {
                    return r.setExtra
                },
                setExtras: function() {
                    return r.setExtras
                },
                setTag: function() {
                    return r.setTag
                },
                setTags: function() {
                    return r.setTags
                },
                setUser: function() {
                    return r.setUser
                },
                spanStatusfromHttpCode: function() {
                    return r.spanStatusfromHttpCode
                },
                startTransaction: function() {
                    return r.startTransaction
                },
                trace: function() {
                    return r.trace
                },
                withScope: function() {
                    return r.withScope
                },
                WINDOW: function() {
                    return i.WINDOW
                },
                BrowserClient: function() {
                    return a.BrowserClient
                },
                makeFetchTransport: function() {
                    return o.makeFetchTransport
                },
                makeXHRTransport: function() {
                    return s.makeXHRTransport
                },
                chromeStackLineParser: function() {
                    return l.chromeStackLineParser
                },
                defaultStackLineParsers: function() {
                    return l.defaultStackLineParsers
                },
                defaultStackParser: function() {
                    return l.defaultStackParser
                },
                geckoStackLineParser: function() {
                    return l.geckoStackLineParser
                },
                opera10StackLineParser: function() {
                    return l.opera10StackLineParser
                },
                opera11StackLineParser: function() {
                    return l.opera11StackLineParser
                },
                winjsStackLineParser: function() {
                    return l.winjsStackLineParser
                },
                eventFromException: function() {
                    return c.eventFromException
                },
                eventFromMessage: function() {
                    return c.eventFromMessage
                },
                createUserFeedbackEnvelope: function() {
                    return u.createUserFeedbackEnvelope
                },
                captureUserFeedback: function() {
                    return d.captureUserFeedback
                },
                close: function() {
                    return d.close
                },
                defaultIntegrations: function() {
                    return d.defaultIntegrations
                },
                flush: function() {
                    return d.flush
                },
                forceLoad: function() {
                    return d.forceLoad
                },
                init: function() {
                    return d.init
                },
                lastEventId: function() {
                    return d.lastEventId
                },
                onLoad: function() {
                    return d.onLoad
                },
                showReportDialog: function() {
                    return d.showReportDialog
                },
                wrap: function() {
                    return d.wrap
                },
                Replay: function() {
                    return h.Replay
                },
                BrowserTracing: function() {
                    return p.BrowserTracing
                },
                defaultRequestInstrumentationOptions: function() {
                    return p.defaultRequestInstrumentationOptions
                },
                instrumentOutgoingRequests: function() {
                    return p.instrumentOutgoingRequests
                },
                makeBrowserOfflineTransport: function() {
                    return _.makeBrowserOfflineTransport
                },
                onProfilingStartRouteTransaction: function() {
                    return m.onProfilingStartRouteTransaction
                },
                BrowserProfilingIntegration: function() {
                    return g.BrowserProfilingIntegration
                },
                GlobalHandlers: function() {
                    return y.GlobalHandlers
                },
                TryCatch: function() {
                    return v.TryCatch
                },
                Breadcrumbs: function() {
                    return b.Breadcrumbs
                },
                LinkedErrors: function() {
                    return E.LinkedErrors
                },
                HttpContext: function() {
                    return w.HttpContext
                },
                Dedupe: function() {
                    return S.Dedupe
                },
                Integrations: function() {
                    return T
                }
            });
            var r = n("675065"),
                i = n("714090"),
                a = n("57738"),
                o = n("16113"),
                s = n("998211"),
                l = n("235410"),
                c = n("943833"),
                u = n("130178"),
                d = n("837808"),
                f = n("697637"),
                h = n("321798"),
                p = n("530271"),
                _ = n("252635"),
                m = n("127769"),
                g = n("502661"),
                y = n("233320"),
                v = n("356706"),
                b = n("585972"),
                E = n("200882"),
                w = n("743574"),
                S = n("882596");
            let k = {};
            i.WINDOW.Sentry && i.WINDOW.Sentry.Integrations && (k = i.WINDOW.Sentry.Integrations);
            let T = {
                ...k,
                ...r.Integrations,
                ...f
            }
        },
        585972: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BREADCRUMB_INTEGRATION_ID: function() {
                    return o
                },
                Breadcrumbs: function() {
                    return s
                }
            });
            var r = n("675065"),
                i = n("103787"),
                a = n("714090");
            let o = "Breadcrumbs";
            class s {
                static __initStatic() {
                    this.id = o
                }
                __init() {
                    this.name = s.id
                }
                setupOnce() {
                    this.options.console && (0, i.addInstrumentationHandler)("console", l), this.options.dom && (0, i.addInstrumentationHandler)("dom", function(t) {
                        return function(e) {
                            let n;
                            let a = "object" == typeof t ? t.serializeAttribute : void 0,
                                o = "object" == typeof t && "number" == typeof t.maxStringLength ? t.maxStringLength : void 0;
                            o && o > 1024 && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("`dom.maxStringLength` cannot exceed ".concat(1024, ", but a value of ").concat(o, " was configured. Sentry will use ").concat(1024, " instead.")), o = 1024), "string" == typeof a && (a = [a]);
                            try {
                                let t = e.event;
                                n = function(t) {
                                    return !!t && !!t.target
                                }(t) ? (0, i.htmlTreeAsString)(t.target, {
                                    keyAttrs: a,
                                    maxStringLength: o
                                }) : (0, i.htmlTreeAsString)(t, {
                                    keyAttrs: a,
                                    maxStringLength: o
                                })
                            } catch (t) {
                                n = "<unknown>"
                            }
                            0 !== n.length && (0, r.getCurrentHub)().addBreadcrumb({
                                category: "ui.".concat(e.name),
                                message: n
                            }, {
                                event: e.event,
                                name: e.name,
                                global: e.global
                            })
                        }
                    }(this.options.dom)), this.options.xhr && (0, i.addInstrumentationHandler)("xhr", c), this.options.fetch && (0, i.addInstrumentationHandler)("fetch", u), this.options.history && (0, i.addInstrumentationHandler)("history", d)
                }
                addSentryBreadcrumb(t) {
                    this.options.sentry && (0, r.getCurrentHub)().addBreadcrumb({
                        category: "sentry.".concat("transaction" === t.type ? "transaction" : "event"),
                        event_id: t.event_id,
                        level: t.level,
                        message: (0, i.getEventDescription)(t)
                    }, {
                        event: t
                    })
                }
                constructor(t) {
                    s.prototype.__init.call(this), this.options = {
                        console: !0,
                        dom: !0,
                        fetch: !0,
                        history: !0,
                        sentry: !0,
                        xhr: !0,
                        ...t
                    }
                }
            }
            s.__initStatic();

            function l(t) {
                for (let e = 0; e < t.args.length; e++)
                    if ("ref=Ref<" === t.args[e]) {
                        t.args[e + 1] = "viewRef";
                        break
                    } let e = {
                    category: "console",
                    data: {
                        arguments: t.args,
                        logger: "console"
                    },
                    level: (0, i.severityLevelFromString)(t.level),
                    message: (0, i.safeJoin)(t.args, " ")
                };
                if ("assert" === t.level) {
                    if (!1 !== t.args[0]) return;
                    e.message = "Assertion failed: ".concat((0, i.safeJoin)(t.args.slice(1), " ") || "console.assert"), e.data.arguments = t.args.slice(1)
                }(0, r.getCurrentHub)().addBreadcrumb(e, {
                    input: t.args,
                    level: t.level
                })
            }

            function c(t) {
                let {
                    startTimestamp: e,
                    endTimestamp: n
                } = t, a = t.xhr[i.SENTRY_XHR_DATA_KEY];
                if (!e || !n || !a) return;
                let {
                    method: o,
                    url: s,
                    status_code: l,
                    body: c
                } = a, u = {
                    xhr: t.xhr,
                    input: c,
                    startTimestamp: e,
                    endTimestamp: n
                };
                (0, r.getCurrentHub)().addBreadcrumb({
                    category: "xhr",
                    data: {
                        method: o,
                        url: s,
                        status_code: l
                    },
                    type: "http"
                }, u)
            }

            function u(t) {
                let {
                    startTimestamp: e,
                    endTimestamp: n
                } = t;
                if (!!n) {
                    if (!t.fetchData.url.match(/sentry_key/) || "POST" !== t.fetchData.method) {
                        if (t.error) {
                            let i = t.fetchData,
                                a = {
                                    data: t.error,
                                    input: t.args,
                                    startTimestamp: e,
                                    endTimestamp: n
                                };
                            (0, r.getCurrentHub)().addBreadcrumb({
                                category: "fetch",
                                data: i,
                                level: "error",
                                type: "http"
                            }, a)
                        } else {
                            let i = {
                                    ...t.fetchData,
                                    status_code: t.response && t.response.status
                                },
                                a = {
                                    input: t.args,
                                    response: t.response,
                                    startTimestamp: e,
                                    endTimestamp: n
                                };
                            (0, r.getCurrentHub)().addBreadcrumb({
                                category: "fetch",
                                data: i,
                                type: "http"
                            }, a)
                        }
                    }
                }
            }

            function d(t) {
                let e = t.from,
                    n = t.to,
                    o = (0, i.parseUrl)(a.WINDOW.location.href),
                    s = (0, i.parseUrl)(e),
                    l = (0, i.parseUrl)(n);
                !s.path && (s = o), o.protocol === l.protocol && o.host === l.host && (n = l.relative), o.protocol === s.protocol && o.host === s.host && (e = s.relative), (0, r.getCurrentHub)().addBreadcrumb({
                    category: "navigation",
                    data: {
                        from: e,
                        to: n
                    }
                })
            }
        },
        882596: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Dedupe: function() {
                    return i
                }
            });
            var r = n("103787");
            class i {
                static __initStatic() {
                    this.id = "Dedupe"
                }
                __init() {
                    this.name = i.id
                }
                setupOnce(t, e) {
                    let n = t => {
                        if (t.type) return t;
                        let n = e().getIntegration(i);
                        if (n) {
                            try {
                                if (function(t, e) {
                                        return !!e && (!!(function(t, e) {
                                            let n = t.message,
                                                r = e.message;
                                            return !!((n || r) && (!n || r) && (n || !r) && n === r && o(t, e) && a(t, e)) || !1
                                        }(t, e) || function(t, e) {
                                            let n = s(e),
                                                r = s(t);
                                            return !!(n && r && n.type === r.type && n.value === r.value && o(t, e) && a(t, e)) || !1
                                        }(t, e)) || !1)
                                    }(t, n._previousEvent)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Event dropped due to being a duplicate of previously captured event."), null
                            } catch (t) {}
                            return n._previousEvent = t
                        }
                        return t
                    };
                    n.id = this.name, t(n)
                }
                constructor() {
                    i.prototype.__init.call(this)
                }
            }
            i.__initStatic();

            function a(t, e) {
                let n = l(t),
                    r = l(e);
                if (!n && !r) return !0;
                if (n && !r || !n && r || r.length !== n.length) return !1;
                for (let t = 0; t < r.length; t++) {
                    let e = r[t],
                        i = n[t];
                    if (e.filename !== i.filename || e.lineno !== i.lineno || e.colno !== i.colno || e.function !== i.function) return !1
                }
                return !0
            }

            function o(t, e) {
                let n = t.fingerprint,
                    r = e.fingerprint;
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                try {
                    return !(n.join("") !== r.join(""))
                } catch (t) {
                    return !1
                }
            }

            function s(t) {
                return t.exception && t.exception.values && t.exception.values[0]
            }

            function l(t) {
                let e = t.exception;
                if (e) try {
                    return e.values[0].stacktrace.frames
                } catch (t) {}
            }
        },
        233320: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                GlobalHandlers: function() {
                    return s
                }
            });
            var r = n("675065"),
                i = n("103787"),
                a = n("943833"),
                o = n("714090");
            class s {
                static __initStatic() {
                    this.id = "GlobalHandlers"
                }
                __init() {
                    this.name = s.id
                }
                __init2() {
                    this._installFunc = {
                        onerror: l,
                        onunhandledrejection: c
                    }
                }
                setupOnce() {
                    Error.stackTraceLimit = 50;
                    let t = this._options;
                    for (let e in t) {
                        let n = this._installFunc[e];
                        n && t[e] && (function(t) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("Global Handler attached: ".concat(t))
                        }(e), n(), this._installFunc[e] = void 0)
                    }
                }
                constructor(t) {
                    s.prototype.__init.call(this), s.prototype.__init2.call(this), this._options = {
                        onerror: !0,
                        onunhandledrejection: !0,
                        ...t
                    }
                }
            }

            function l() {
                (0, i.addInstrumentationHandler)("error", t => {
                    let [e, n, r] = f();
                    if (!e.getIntegration(s)) return;
                    let {
                        msg: l,
                        url: c,
                        line: h,
                        column: p,
                        error: _
                    } = t;
                    if ((0, o.shouldIgnoreOnError)() || _ && _.__sentry_own_request__) return;
                    let m = void 0 === _ && (0, i.isString)(l) ? function(t, e, n, r) {
                        let a = (0, i.isErrorEvent)(t) ? t.message : t,
                            o = "Error",
                            s = a.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                        s && (o = s[1], a = s[2]);
                        let l = {
                            exception: {
                                values: [{
                                    type: o,
                                    value: a
                                }]
                            }
                        };
                        return u(l, e, n, r)
                    }(l, c, h, p) : u((0, a.eventFromUnknownInput)(n, _ || l, void 0, r, !1), c, h, p);
                    m.level = "error", d(e, _, m, "onerror")
                })
            }

            function c() {
                (0, i.addInstrumentationHandler)("unhandledrejection", t => {
                    let [e, n, r] = f();
                    if (!e.getIntegration(s)) return;
                    let l = t;
                    try {
                        "reason" in t ? l = t.reason : "detail" in t && "reason" in t.detail && (l = t.detail.reason)
                    } catch (t) {}
                    if ((0, o.shouldIgnoreOnError)() || l && l.__sentry_own_request__) return !0;
                    let c = (0, i.isPrimitive)(l) ? function(t) {
                        return {
                            exception: {
                                values: [{
                                    type: "UnhandledRejection",
                                    value: "Non-Error promise rejection captured with value: ".concat(String(t))
                                }]
                            }
                        }
                    }(l) : (0, a.eventFromUnknownInput)(n, l, void 0, r, !0);
                    c.level = "error", d(e, l, c, "onunhandledrejection")
                })
            }
            s.__initStatic();

            function u(t, e, n, r) {
                let a = t.exception = t.exception || {},
                    o = a.values = a.values || [],
                    s = o[0] = o[0] || {},
                    l = s.stacktrace = s.stacktrace || {},
                    c = l.frames = l.frames || [],
                    u = isNaN(parseInt(r, 10)) ? void 0 : r,
                    d = isNaN(parseInt(n, 10)) ? void 0 : n,
                    f = (0, i.isString)(e) && e.length > 0 ? e : (0, i.getLocationHref)();
                return 0 === c.length && c.push({
                    colno: u,
                    filename: f,
                    function: "?",
                    in_app: !0,
                    lineno: d
                }), t
            }

            function d(t, e, n, r) {
                (0, i.addExceptionMechanism)(n, {
                    handled: !1,
                    type: r
                }), t.captureEvent(n, {
                    originalException: e
                })
            }

            function f() {
                let t = (0, r.getCurrentHub)(),
                    e = t.getClient(),
                    n = e && e.getOptions() || {
                        stackParser: () => [],
                        attachStacktrace: !1
                    };
                return [t, n.stackParser, n.attachStacktrace]
            }
        },
        743574: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                HttpContext: function() {
                    return a
                }
            });
            var r = n("675065"),
                i = n("714090");
            class a {
                static __initStatic() {
                    this.id = "HttpContext"
                }
                __init() {
                    this.name = a.id
                }
                setupOnce() {
                    (0, r.addGlobalEventProcessor)(t => {
                        if ((0, r.getCurrentHub)().getIntegration(a)) {
                            if (!i.WINDOW.navigator && !i.WINDOW.location && !i.WINDOW.document) return t;
                            let e = t.request && t.request.url || i.WINDOW.location && i.WINDOW.location.href,
                                {
                                    referrer: n
                                } = i.WINDOW.document || {},
                                {
                                    userAgent: r
                                } = i.WINDOW.navigator || {},
                                a = {
                                    ...t.request && t.request.headers,
                                    ...n && {
                                        Referer: n
                                    },
                                    ...r && {
                                        "User-Agent": r
                                    }
                                },
                                o = {
                                    ...t.request,
                                    ...e && {
                                        url: e
                                    },
                                    headers: a
                                };
                            return {
                                ...t,
                                request: o
                            }
                        }
                        return t
                    })
                }
                constructor() {
                    a.prototype.__init.call(this)
                }
            }
            a.__initStatic()
        },
        697637: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                GlobalHandlers: function() {
                    return r.GlobalHandlers
                },
                TryCatch: function() {
                    return i.TryCatch
                },
                Breadcrumbs: function() {
                    return a.Breadcrumbs
                },
                LinkedErrors: function() {
                    return o.LinkedErrors
                },
                HttpContext: function() {
                    return s.HttpContext
                },
                Dedupe: function() {
                    return l.Dedupe
                }
            });
            var r = n("233320"),
                i = n("356706"),
                a = n("585972"),
                o = n("200882"),
                s = n("743574"),
                l = n("882596")
        },
        200882: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                LinkedErrors: function() {
                    return a
                }
            });
            var r = n("103787"),
                i = n("943833");
            class a {
                static __initStatic() {
                    this.id = "LinkedErrors"
                }
                __init() {
                    this.name = a.id
                }
                setupOnce(t, e) {
                    t((t, n) => {
                        let o = e(),
                            s = o.getClient(),
                            l = o.getIntegration(a);
                        if (!s || !l) return t;
                        let c = s.getOptions();
                        return (0, r.applyAggregateErrorsToEvent)(i.exceptionFromError, c.stackParser, c.maxValueLength, l._key, l._limit, t, n), t
                    })
                }
                constructor(t = {}) {
                    a.prototype.__init.call(this), this._key = t.key || "cause", this._limit = t.limit || 5
                }
            }
            a.__initStatic()
        },
        356706: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                TryCatch: function() {
                    return o
                }
            });
            var r = n("103787"),
                i = n("714090");
            let a = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
            class o {
                static __initStatic() {
                    this.id = "TryCatch"
                }
                __init() {
                    this.name = o.id
                }
                setupOnce() {
                    this._options.setTimeout && (0, r.fill)(i.WINDOW, "setTimeout", s), this._options.setInterval && (0, r.fill)(i.WINDOW, "setInterval", s), this._options.requestAnimationFrame && (0, r.fill)(i.WINDOW, "requestAnimationFrame", l), this._options.XMLHttpRequest && "XMLHttpRequest" in i.WINDOW && (0, r.fill)(XMLHttpRequest.prototype, "send", c);
                    let t = this._options.eventTarget;
                    if (t) {
                        let e = Array.isArray(t) ? t : a;
                        e.forEach(u)
                    }
                }
                constructor(t) {
                    o.prototype.__init.call(this), this._options = {
                        XMLHttpRequest: !0,
                        eventTarget: !0,
                        requestAnimationFrame: !0,
                        setInterval: !0,
                        setTimeout: !0,
                        ...t
                    }
                }
            }

            function s(t) {
                return function() {
                    for (var e = arguments.length, n = Array(e), a = 0; a < e; a++) n[a] = arguments[a];
                    let o = n[0];
                    return n[0] = (0, i.wrap)(o, {
                        mechanism: {
                            data: {
                                function: (0, r.getFunctionName)(t)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), t.apply(this, n)
                }
            }

            function l(t) {
                return function(e) {
                    return t.apply(this, [(0, i.wrap)(e, {
                        mechanism: {
                            data: {
                                function: "requestAnimationFrame",
                                handler: (0, r.getFunctionName)(t)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    })])
                }
            }

            function c(t) {
                return function() {
                    for (var e = arguments.length, n = Array(e), a = 0; a < e; a++) n[a] = arguments[a];
                    let o = this;
                    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(t => {
                        t in o && "function" == typeof o[t] && (0, r.fill)(o, t, function(e) {
                            let n = {
                                    mechanism: {
                                        data: {
                                            function: t,
                                            handler: (0, r.getFunctionName)(e)
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                },
                                a = (0, r.getOriginalFunction)(e);
                            return a && (n.mechanism.data.handler = (0, r.getFunctionName)(a)), (0, i.wrap)(e, n)
                        })
                    }), t.apply(this, n)
                }
            }

            function u(t) {
                let e = i.WINDOW,
                    n = e[t] && e[t].prototype;
                n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0, r.fill)(n, "addEventListener", function(e) {
                    return function(n, a, o) {
                        try {
                            "function" == typeof a.handleEvent && (a.handleEvent = (0, i.wrap)(a.handleEvent, {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: (0, r.getFunctionName)(a),
                                        target: t
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }))
                        } catch (t) {}
                        return e.apply(this, [n, (0, i.wrap)(a, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: (0, r.getFunctionName)(a),
                                    target: t
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }), o])
                    }
                }), (0, r.fill)(n, "removeEventListener", function(t) {
                    return function(e, n, r) {
                        try {
                            let i = n && n.__sentry_wrapped__;
                            i && t.call(this, e, i, r)
                        } catch (t) {}
                        return t.call(this, e, n, r)
                    }
                }))
            }
            o.__initStatic()
        },
        127769: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                onProfilingStartRouteTransaction: function() {
                    return l
                },
                wrapTransactionWithProfiling: function() {
                    return c
                }
            });
            var r = n("675065"),
                i = n("103787"),
                a = n("714090"),
                o = n("959456");
            let s = !1;

            function l(t) {
                return t ? c(t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] Transaction is undefined, skipping profiling"), t)
            }

            function c(t) {
                let e;
                let n = a.WINDOW.Profiler;
                if ("function" != typeof n) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object."), t;
                if (s) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] Profiling has been disabled for the duration of the current user session."), t;
                let l = (0, r.getCurrentHub)().getClient(),
                    c = l && l.getOptions();
                if (!c) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] Profiling disabled, no options found."), t;
                let u = c.profilesSampleRate;
                if (!(0, o.isValidSampleRate)(u)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("[Profiling] Discarding profile because of invalid sample rate."), t;
                if (!u) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0"), t;
                let d = !0 === u || Math.random() < u;
                if (!d) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ".concat(Number(u), ")")), t;
                try {
                    e = new n({
                        sampleInterval: 10,
                        maxBufferSize: Math.floor(3e3)
                    })
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (i.logger.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."), i.logger.log("[Profiling] Disabling profiling for current user session.")), s = !0
                }
                if (!e) return t;
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] started profiling transaction: ".concat(t.name || t.description));
                let f = (0, i.uuid4)();
                async function h() {
                    if (!t || !e) return null;
                    let n = t.startChild({
                        description: "profiler.stop",
                        op: "profiler"
                    });
                    return e.stop().then(e => (n.finish(), p && (a.WINDOW.clearTimeout(p), p = void 0), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] stopped profiling of transaction: ".concat(t.name || t.description)), e) ? ((0, o.addProfileToMap)(f, e), null) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] profiler returned null profile for: ".concat(t.name || t.description), "this may indicate an overlapping transaction or a call to stopProfiling with a profile title that was never started"), null)).catch(t => (n.finish(), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] error while stopping profiler:", t), null))
                }
                let p = a.WINDOW.setTimeout(() => {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] max profile duration elapsed, stopping profiling for:", t.name || t.description), h()
                    }, 3e4),
                    _ = t.finish.bind(t);
                return t.finish = function() {
                    return t ? (h().then(() => {
                        t.setContext("profile", {
                            profile_id: f
                        }), _()
                    }, () => {
                        _()
                    }), t) : _()
                }, t
            }
        },
        502661: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BrowserProfilingIntegration: function() {
                    return o
                }
            });
            var r = n("103787"),
                i = n("127769"),
                a = n("959456");
            class o {
                __init() {
                    this.name = "BrowserProfilingIntegration"
                }
                __init2() {
                    this.getCurrentHub = void 0
                }
                setupOnce(t, e) {
                    this.getCurrentHub = e;
                    let n = this.getCurrentHub().getClient();
                    n && "function" == typeof n.on ? (n.on("startTransaction", t => {
                        (0, i.wrapTransactionWithProfiling)(t)
                    }), n.on("beforeEnvelope", t => {
                        if (!a.PROFILE_MAP.size) return;
                        let e = (0, a.findProfiledTransactionsFromEnvelope)(t);
                        if (!e.length) return;
                        let n = [];
                        for (let t of e) {
                            let e = t && t.contexts,
                                i = e && e.profile && e.profile.profile_id;
                            if (!i) {
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Profiling] cannot find profile for a transaction without a profile context");
                                continue
                            }
                            e && e.profile && delete e.profile;
                            let o = a.PROFILE_MAP.get(i);
                            if (!o) {
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Profiling] Could not retrieve profile for transaction: ".concat(i));
                                continue
                            }
                            a.PROFILE_MAP.delete(i);
                            let s = (0, a.createProfilingEvent)(i, o, t);
                            s && n.push(s)
                        }(0, a.addProfilesToEnvelope)(t, n)
                    })) : r.logger.warn("[Profiling] Client does not support hooks, profiling will be disabled")
                }
                constructor() {
                    o.prototype.__init.call(this), o.prototype.__init2.call(this)
                }
            }
        },
        959456: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                PROFILE_MAP: function() {
                    return b
                },
                addProfileToMap: function() {
                    return E
                },
                addProfilesToEnvelope: function() {
                    return _
                },
                createProfilingEvent: function() {
                    return v
                },
                findProfiledTransactionsFromEnvelope: function() {
                    return m
                },
                isValidSampleRate: function() {
                    return y
                }
            });
            var r, i = n("675065"),
                a = n("103787"),
                o = n("714090");
            let s = String(0),
                l = "",
                c = "",
                u = "",
                d = o.WINDOW.navigator && o.WINDOW.navigator.userAgent || "",
                f = "",
                h = o.WINDOW.navigator && o.WINDOW.navigator.language || o.WINDOW.navigator && o.WINDOW.navigator.languages && o.WINDOW.navigator.languages[0] || "",
                p = o.WINDOW.navigator && o.WINDOW.navigator.userAgentData;
            if ("object" == typeof(r = p) && null !== r && "getHighEntropyValues" in r) p.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"]).then(t => {
                if (l = t.platform || "", u = t.architecture || "", f = t.model || "", c = t.platformVersion || "", t.fullVersionList && t.fullVersionList.length > 0) {
                    let e = t.fullVersionList[t.fullVersionList.length - 1];
                    d = "".concat(e.brand, " ").concat(e.version)
                }
            }).catch(t => void 0);

            function _(t, e) {
                if (!e.length) return t;
                for (let n of e) t[1].push([{
                    type: "profile"
                }, n]);
                return t
            }

            function m(t) {
                let e = [];
                return (0, a.forEachEnvelopeItem)(t, (t, n) => {
                    if ("transaction" === n)
                        for (let n = 1; n < t.length; n++) {
                            let r = t[n];
                            r && r.contexts && r.contexts.profile && r.contexts.profile.profile_id && e.push(t[n])
                        }
                }), e
            }
            let g = new WeakMap;

            function y(t) {
                return "number" != typeof t && "boolean" != typeof t || "number" == typeof t && isNaN(t) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.warn("[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ".concat(JSON.stringify(t), " of type ").concat(JSON.stringify(typeof t), ".")), !1) : !0 === t || !1 === t || !(t < 0) && !(t > 1) || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.warn("[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ".concat(t, ".")), !1)
            }

            function v(t, e, n) {
                var r;
                return ((r = e).samples.length < 2 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.log("[Profiling] Discarding profile because it contains less than 2 samples"), !1) : !!r.frames.length || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.log("[Profiling] Discarding profile because it contains no frames"), !1)) ? function(t, e, n) {
                    if ("transaction" !== t.type) throw TypeError("Profiling events may only be attached to transactions, this should never occur.");
                    if (null == e) throw TypeError("Cannot construct profiling event envelope without a valid profile. Got ".concat(e, " instead."));
                    let r = function(t) {
                            let e = t && t.contexts && t.contexts.trace && t.contexts.trace.trace_id;
                            return ("string" == typeof e && 32 !== e.length && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.log("[Profiling] Invalid traceId: ".concat(e, " on profiled event")), "string" != typeof e) ? "" : e
                        }(t),
                        p = function(t) {
                            return "thread_metadata" in t ? t : function(t) {
                                let e;
                                let n = 0,
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
                                let i = t.samples[0].timestamp,
                                    o = "number" == typeof performance.timeOrigin ? performance.timeOrigin : a.browserPerformanceTimeOrigin || 0,
                                    l = o - (a.browserPerformanceTimeOrigin || o);
                                for (let a = 0; a < t.samples.length; a++) {
                                    let o = t.samples[a];
                                    if (void 0 === o.stackId) {
                                        void 0 === e && (e = n, r.stacks[e] = [], n++), r.samples[a] = {
                                            elapsed_since_start_ns: ((o.timestamp + l - i) * 1e6).toFixed(0),
                                            stack_id: e,
                                            thread_id: s
                                        };
                                        continue
                                    }
                                    let c = t.stacks[o.stackId],
                                        u = [];
                                    for (; c;) {
                                        u.push(c.frameId);
                                        let e = t.frames[c.frameId];
                                        void 0 === r.frames[c.frameId] && (r.frames[c.frameId] = {
                                            function: e.name,
                                            abs_path: "number" == typeof e.resourceId ? t.resources[e.resourceId] : void 0,
                                            lineno: e.line,
                                            colno: e.column
                                        }), c = void 0 === c.parentId ? void 0 : t.stacks[c.parentId]
                                    }
                                    let d = {
                                        elapsed_since_start_ns: ((o.timestamp + l - i) * 1e6).toFixed(0),
                                        stack_id: n,
                                        thread_id: s
                                    };
                                    r.stacks[n] = u, r.samples[a] = d, n++
                                }
                                return r
                            }(t)
                        }(e),
                        _ = "number" == typeof t.start_timestamp ? 1e3 * t.start_timestamp : Date.now(),
                        m = "number" == typeof t.timestamp ? 1e3 * t.timestamp : Date.now(),
                        y = {
                            event_id: n,
                            timestamp: new Date(_).toISOString(),
                            platform: "javascript",
                            version: "1",
                            release: t.release || "",
                            environment: t.environment || i.DEFAULT_ENVIRONMENT,
                            runtime: {
                                name: "javascript",
                                version: o.WINDOW.navigator.userAgent
                            },
                            os: {
                                name: l,
                                version: c,
                                build_number: d
                            },
                            device: {
                                locale: h,
                                model: f,
                                manufacturer: d,
                                architecture: u,
                                is_emulator: !1
                            },
                            debug_meta: {
                                images: function(t) {
                                    let e;
                                    let n = a.GLOBAL_OBJ._sentryDebugIds;
                                    if (!n) return [];
                                    let r = (0, i.getCurrentHub)();
                                    if (!r) return [];
                                    let o = r.getClient();
                                    if (!o) return [];
                                    let s = o.getOptions();
                                    if (!s) return [];
                                    let l = s.stackParser;
                                    if (!l) return [];
                                    let c = g.get(l);
                                    c ? e = c : (e = new Map, g.set(l, e));
                                    let u = Object.keys(n).reduce((t, r) => {
                                            let i;
                                            let a = e.get(r);
                                            a ? i = a : (i = l(r), e.set(r, i));
                                            for (let e = i.length - 1; e >= 0; e--) {
                                                let a = i[e],
                                                    o = a && a.filename;
                                                if (a && o) {
                                                    t[o] = n[r];
                                                    break
                                                }
                                            }
                                            return t
                                        }, {}),
                                        d = [];
                                    for (let e of t) e && u[e] && d.push({
                                        type: "sourcemap",
                                        code_file: e,
                                        debug_id: u[e]
                                    });
                                    return d
                                }(e.resources)
                            },
                            profile: p,
                            transactions: [{
                                name: t.transaction || "",
                                id: t.event_id || (0, a.uuid4)(),
                                trace_id: r,
                                active_thread_id: s,
                                relative_start_ns: "0",
                                relative_end_ns: ((m - _) * 1e6).toFixed(0)
                            }]
                        };
                    return y
                }(n, e, t) : null
            }
            let b = new Map;

            function E(t, e) {
                if (b.set(t, e), b.size > 30) {
                    let t = b.keys().next().value;
                    b.delete(t)
                }
            }
        },
        837808: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                captureUserFeedback: function() {
                    return R
                },
                close: function() {
                    return S
                },
                defaultIntegrations: function() {
                    return m
                },
                flush: function() {
                    return w
                },
                forceLoad: function() {
                    return b
                },
                init: function() {
                    return g
                },
                lastEventId: function() {
                    return v
                },
                onLoad: function() {
                    return E
                },
                showReportDialog: function() {
                    return y
                },
                wrap: function() {
                    return k
                }
            });
            var r = n("675065"),
                i = n("103787"),
                a = n("57738"),
                o = n("714090"),
                s = n("233320"),
                l = n("356706"),
                c = n("585972"),
                u = n("200882"),
                d = n("743574"),
                f = n("882596"),
                h = n("235410"),
                p = n("16113"),
                _ = n("998211");
            let m = [new r.Integrations.InboundFilters, new r.Integrations.FunctionToString, new l.TryCatch, new c.Breadcrumbs, new s.GlobalHandlers, new u.LinkedErrors, new f.Dedupe, new d.HttpContext];

            function g() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                void 0 === t.defaultIntegrations && (t.defaultIntegrations = m), void 0 === t.release && ("string" == typeof __SENTRY_RELEASE__ && (t.release = __SENTRY_RELEASE__), o.WINDOW.SENTRY_RELEASE && o.WINDOW.SENTRY_RELEASE.id && (t.release = o.WINDOW.SENTRY_RELEASE.id)), void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0), void 0 === t.sendClientReports && (t.sendClientReports = !0);
                let e = {
                    ...t,
                    stackParser: (0, i.stackParserFromStackParserOptions)(t.stackParser || h.defaultStackParser),
                    integrations: (0, r.getIntegrationsToSetup)(t),
                    transport: t.transport || ((0, i.supportsFetch)() ? p.makeFetchTransport : _.makeXHRTransport)
                };
                (0, r.initAndBind)(a.BrowserClient, e), t.autoSessionTracking && function() {
                    if (void 0 === o.WINDOW.document) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
                        return
                    }
                    let t = (0, r.getCurrentHub)();
                    t.captureSession && (T(t), (0, i.addInstrumentationHandler)("history", t => {
                        let {
                            from: e,
                            to: n
                        } = t;
                        !(void 0 === e || e === n) && T((0, r.getCurrentHub)())
                    }))
                }()
            }

            function y() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, r.getCurrentHub)();
                if (!o.WINDOW.document) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.error("Global document not defined in showReportDialog call");
                    return
                }
                let {
                    client: n,
                    scope: a
                } = e.getStackTop(), s = t.dsn || n && n.getDsn();
                if (!s) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.error("DSN not configured for showReportDialog call");
                    return
                }
                a && (t.user = {
                    ...a.getUser(),
                    ...t.user
                }), !t.eventId && (t.eventId = e.lastEventId());
                let l = o.WINDOW.document.createElement("script");
                l.async = !0, l.crossOrigin = "anonymous", l.src = (0, r.getReportDialogEndpoint)(s, t), t.onLoad && (l.onload = t.onLoad);
                let c = o.WINDOW.document.head || o.WINDOW.document.body;
                c ? c.appendChild(l) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.error("Not injecting report dialog. No injection point found in HTML")
            }

            function v() {
                return (0, r.getCurrentHub)().lastEventId()
            }

            function b() {}

            function E(t) {
                t()
            }

            function w(t) {
                let e = (0, r.getCurrentHub)().getClient();
                return e ? e.flush(t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("Cannot flush events. No client defined."), (0, i.resolvedSyncPromise)(!1))
            }

            function S(t) {
                let e = (0, r.getCurrentHub)().getClient();
                return e ? e.close(t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("Cannot flush events and disable SDK. No client defined."), (0, i.resolvedSyncPromise)(!1))
            }

            function k(t) {
                return (0, o.wrap)(t)()
            }

            function T(t) {
                t.startSession({
                    ignoreDuration: !0
                }), t.captureSession()
            }

            function R(t) {
                let e = (0, r.getCurrentHub)().getClient();
                e && e.captureUserFeedback(t)
            }
        },
        235410: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                chromeStackLineParser: function() {
                    return s
                },
                defaultStackLineParsers: function() {
                    return g
                },
                defaultStackParser: function() {
                    return y
                },
                geckoStackLineParser: function() {
                    return u
                },
                opera10StackLineParser: function() {
                    return p
                },
                opera11StackLineParser: function() {
                    return m
                },
                winjsStackLineParser: function() {
                    return f
                }
            });
            var r = n("103787");

            function i(t, e, n, r) {
                let i = {
                    filename: t,
                    function: e,
                    in_app: !0
                };
                return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i
            }
            let a = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                o = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                s = [30, t => {
                    let e = a.exec(t);
                    if (e) {
                        let t = e[2] && 0 === e[2].indexOf("eval");
                        if (t) {
                            let t = o.exec(e[2]);
                            t && (e[2] = t[1], e[3] = t[2], e[4] = t[3])
                        }
                        let [n, r] = v(e[1] || "?", e[2]);
                        return i(r, n, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
                    }
                }],
                l = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
                c = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                u = [50, t => {
                    let e = l.exec(t);
                    if (e) {
                        let t = e[3] && e[3].indexOf(" > eval") > -1;
                        if (t) {
                            let t = c.exec(e[3]);
                            t && (e[1] = e[1] || "eval", e[3] = t[1], e[4] = t[2], e[5] = "")
                        }
                        let n = e[3],
                            r = e[1] || "?";
                        return [r, n] = v(r, n), i(n, r, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
                    }
                }],
                d = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                f = [40, t => {
                    let e = d.exec(t);
                    return e ? i(e[2], e[1] || "?", +e[3], e[4] ? +e[4] : void 0) : void 0
                }],
                h = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
                p = [10, t => {
                    let e = h.exec(t);
                    return e ? i(e[2], e[3] || "?", +e[1]) : void 0
                }],
                _ = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
                m = [20, t => {
                    let e = _.exec(t);
                    return e ? i(e[5], e[3] || e[4] || "?", +e[1], +e[2]) : void 0
                }],
                g = [s, u, f],
                y = (0, r.createStackParser)(...g),
                v = (t, e) => {
                    let n = -1 !== t.indexOf("safari-extension"),
                        r = -1 !== t.indexOf("safari-web-extension");
                    return n || r ? [-1 !== t.indexOf("@") ? t.split("@")[0] : "?", n ? "safari-extension:".concat(e) : "safari-web-extension:".concat(e)] : [t, e]
                }
        },
        16113: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                makeFetchTransport: function() {
                    return o
                }
            });
            var r = n("675065"),
                i = n("103787"),
                a = n("865034");

            function o(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, a.getNativeFetchImplementation)(),
                    n = 0,
                    o = 0;
                return (0, r.createTransport)(t, function(r) {
                    let s = r.body.length;
                    n += s, o++;
                    let l = {
                        body: r.body,
                        method: "POST",
                        referrerPolicy: "origin",
                        headers: t.headers,
                        keepalive: n <= 6e4 && o < 15,
                        ...t.fetchOptions
                    };
                    try {
                        return e(t.url, l).then(t => (n -= s, o--, {
                            statusCode: t.status,
                            headers: {
                                "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                                "retry-after": t.headers.get("Retry-After")
                            }
                        }))
                    } catch (t) {
                        return (0, a.clearCachedFetchImplementation)(), n -= s, o--, (0, i.rejectedSyncPromise)(t)
                    }
                })
            }
        },
        252635: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                makeBrowserOfflineTransport: function() {
                    return l
                }
            });
            var r = n("675065"),
                i = n("103787");

            function a(t) {
                return new Promise((e, n) => {
                    t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => n(t.error)
                })
            }

            function o(t) {
                return a(t.getAllKeys())
            }

            function s(t) {
                let e;

                function n() {
                    return void 0 == e && (e = function(t, e) {
                        let n = indexedDB.open(t);
                        n.onupgradeneeded = () => n.result.createObjectStore(e);
                        let r = a(n);
                        return t => r.then(n => t(n.transaction(e, "readwrite").objectStore(e)))
                    }(t.dbName || "sentry-offline", t.storeName || "queue")), e
                }
                return {
                    insert: async e => {
                        try {
                            var r, s, l;
                            let c = await (0, i.serializeEnvelope)(e, t.textEncoder);
                            await (r = n(), s = c, l = t.maxQueueSize || 30, r(t => o(t).then(e => {
                                if (!(e.length >= l)) return t.put(s, Math.max(...e, 0) + 1), a(t.transaction)
                            })))
                        } catch (t) {}
                    },
                    pop: async () => {
                        try {
                            let e = await n()(t => o(t).then(e => {
                                if (0 !== e.length) return a(t.get(e[0])).then(n => (t.delete(e[0]), a(t.transaction).then(() => n)))
                            }));
                            if (e) return (0, i.parseEnvelope)(e, t.textEncoder || new TextEncoder, t.textDecoder || new TextDecoder)
                        } catch (t) {}
                    }
                }
            }

            function l(t) {
                var e;
                return e = (0, r.makeOfflineTransport)(t), t => e({
                    ...t,
                    createStore: s
                })
            }
        },
        865034: function(t, e, n) {
            "use strict";
            let r;
            n.r(e), n.d(e, {
                clearCachedFetchImplementation: function() {
                    return s
                },
                getNativeFetchImplementation: function() {
                    return o
                }
            });
            var i = n("103787"),
                a = n("714090");

            function o() {
                if (r) return r;
                if ((0, i.isNativeFetch)(a.WINDOW.fetch)) return r = a.WINDOW.fetch.bind(a.WINDOW);
                let t = a.WINDOW.document,
                    e = a.WINDOW.fetch;
                if (t && "function" == typeof t.createElement) try {
                    let n = t.createElement("iframe");
                    n.hidden = !0, t.head.appendChild(n);
                    let r = n.contentWindow;
                    r && r.fetch && (e = r.fetch), t.head.removeChild(n)
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                }
                return r = e.bind(a.WINDOW)
            }

            function s() {
                r = void 0
            }
        },
        998211: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                makeXHRTransport: function() {
                    return a
                }
            });
            var r = n("675065"),
                i = n("103787");

            function a(t) {
                return (0, r.createTransport)(t, function(e) {
                    return new i.SyncPromise((n, r) => {
                        let i = new XMLHttpRequest;
                        for (let e in i.onerror = r, i.onreadystatechange = () => {
                                4 === i.readyState && n({
                                    statusCode: i.status,
                                    headers: {
                                        "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                                        "retry-after": i.getResponseHeader("Retry-After")
                                    }
                                })
                            }, i.open("POST", t.url), t.headers) Object.prototype.hasOwnProperty.call(t.headers, e) && i.setRequestHeader(e, t.headers[e]);
                        i.send(e.body)
                    })
                })
            }
        },
        130178: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                createUserFeedbackEnvelope: function() {
                    return i
                }
            });
            var r = n("103787");

            function i(t, e) {
                let {
                    metadata: n,
                    tunnel: i,
                    dsn: a
                } = e, o = {
                    event_id: t.event_id,
                    sent_at: new Date().toISOString(),
                    ...n && n.sdk && {
                        sdk: {
                            name: n.sdk.name,
                            version: n.sdk.version
                        }
                    },
                    ...!!i && !!a && {
                        dsn: (0, r.dsnToString)(a)
                    }
                }, s = function(t) {
                    return [{
                        type: "user_report"
                    }, t]
                }(t);
                return (0, r.createEnvelope)(o, [s])
            }
        },
        321798: function(t, e, n) {
            "use strict";
            let r, i, a, o, s;
            n.r(e), n.d(e, {
                Replay: function() {
                    return e$
                }
            });
            var l, c, u, d, f, h, p, _, m, g, y, v, b, E, w, S, k = n("675065"),
                T = n("103787"),
                R = n("390493");
            let x = T.GLOBAL_OBJ,
                D = "sentryReplaySession",
                N = "Unable to send Replay";
            (l = m || (m = {}))[l.Document = 0] = "Document", l[l.DocumentType = 1] = "DocumentType", l[l.Element = 2] = "Element", l[l.Text = 3] = "Text", l[l.CDATA = 4] = "CDATA", l[l.Comment = 5] = "Comment";

            function I(t) {
                let e = null == t ? void 0 : t.host;
                return !!(e && e.shadowRoot && e.shadowRoot === t)
            }

            function O(t) {
                let {
                    maskInputOptions: e,
                    tagName: n,
                    type: r
                } = t;
                "option" === n.toLowerCase() && (n = "select");
                let i = "string" == typeof r ? r.toLowerCase() : void 0;
                return e[n.toLowerCase()] || i && e[i] || "password" === i || "input" === n && !r && e.text
            }

            function C(t) {
                let {
                    input: e,
                    maskInputSelector: n,
                    unmaskInputSelector: r,
                    maskInputOptions: i,
                    tagName: a,
                    type: o,
                    value: s,
                    maskInputFn: l
                } = t, c = s || "";
                return r && e.matches(r) ? c : (e.hasAttribute("data-rr-is-password") && (o = "password"), (O({
                    maskInputOptions: i,
                    tagName: a,
                    type: o
                }) || n && e.matches(n)) && (c = l ? l(c) : "*".repeat(c.length)), c)
            }
            let A = "__rrweb_original__";

            function B(t) {
                let e = t.type;
                return t.hasAttribute("data-rr-is-password") ? "password" : e ? e.toLowerCase() : null
            }

            function U(t, e, n) {
                return ("string" == typeof n && n.toLowerCase(), "INPUT" === e && ("radio" === n || "checkbox" === n)) ? t.getAttribute("value") || "" : t.value
            }
            let L = 1,
                M = RegExp("[^a-z0-9-_:]");

            function P(t) {
                return t ? t.replace(/[\S]/g, "*") : ""
            }

            function z(t) {
                try {
                    let e = t.rules || t.cssRules;
                    return e ? Array.from(e).map(G).join("") : null
                } catch (t) {
                    return null
                }
            }

            function G(t) {
                let e = t.cssText;
                if (function(t) {
                        return "styleSheet" in t
                    }(t)) try {
                    e = z(t.styleSheet) || e
                } catch (t) {}
                return F(e)
            }

            function F(t) {
                return t.indexOf(":") > -1 ? t.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2") : t
            }
            let W = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
                H = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,
                Y = /^(data:)([^,]*),(.*)/i;

            function j(t, e) {
                return (t || "").replace(W, (t, n, r, i, a, o) => {
                    let s = r || a || o,
                        l = n || i || "";
                    if (!s) return t;
                    if (!H.test(s) || Y.test(s)) return "url(".concat(l).concat(s).concat(l, ")");
                    if ("/" === s[0]) {
                        var c;
                        let t;
                        return "url(".concat(l).concat((t = "", (t = (t = (c = e).indexOf("//") > -1 ? c.split("/").slice(0, 3).join("/") : c.split("/")[0]).split("?")[0]) + s)).concat(l, ")")
                    }
                    let u = e.split("/"),
                        d = s.split("/");
                    for (let t of (u.pop(), d)) {
                        if ("." !== t) ".." === t ? u.pop() : u.push(t)
                    }
                    return "url(".concat(l).concat(u.join("/")).concat(l, ")")
                })
            }
            let q = /^[^ \t\n\r\u000c]+/,
                Z = /^[, \t\n\r\u000c]+/;

            function V(t, e) {
                if (!e || "" === e.trim()) return e;
                let n = t.createElement("a");
                return n.href = e, n.href
            }

            function K() {
                let t = document.createElement("a");
                return t.href = "", t.href
            }

            function X(t, e, n, r, i, a, o, s) {
                if (!i) return i;
                let l = r.toLowerCase(),
                    c = n.toLowerCase();
                if ("src" === l || "href" === l) return V(t, i);
                if ("xlink:href" === l && "#" !== i[0]) return V(t, i);
                if ("background" === l && ("table" === c || "td" === c || "th" === c)) return V(t, i);
                else if ("srcset" === l) return function(t, e) {
                    if ("" === e.trim()) return e;
                    let n = 0;

                    function r(t) {
                        let r;
                        let i = t.exec(e.substring(n));
                        return i ? (r = i[0], n += r.length, r) : ""
                    }
                    let i = [];
                    for (; r(Z), !(n >= e.length);) {
                        ;
                        let a = r(q);
                        if ("," === a.slice(-1)) a = V(t, a.substring(0, a.length - 1)), i.push(a);
                        else {
                            let r = "";
                            a = V(t, a);
                            let o = !1;
                            for (;;) {
                                let t = e.charAt(n);
                                if ("" === t) {
                                    i.push((a + r).trim());
                                    break
                                }
                                if (o) ")" === t && (o = !1);
                                else {
                                    if ("," === t) {
                                        n += 1, i.push((a + r).trim());
                                        break
                                    }
                                    "(" === t && (o = !0)
                                }
                                r += t, n += 1
                            }
                        }
                    }
                    return i.join(", ")
                }(t, i);
                else if ("style" === l) return j(i, K());
                else if ("object" === c && "data" === l) return V(t, i);
                else if (a && function(t, e, n, r) {
                        return !(r && t.matches(r)) && (["placeholder", "title", "aria-label"].indexOf(e) > -1 || "input" === n && "value" === e && t.hasAttribute("type") && ["submit", "button"].indexOf(t.getAttribute("type").toLowerCase()) > -1)
                    }(e, l, c, o)) return s ? s(i) : P(i);
                return i
            }

            function J(t, e, n, r, i) {
                if (!t) return !1;
                if (t.nodeType !== t.ELEMENT_NODE) return J(t.parentNode, e, n, r, i);
                if (r && (t.matches(r) || t.closest(r))) return !1;
                if (i) return !0;
                if ("string" == typeof e) {
                    if (t.classList.contains(e)) return !0
                } else
                    for (let n = 0; n < t.classList.length; n++) {
                        let r = t.classList[n];
                        if (e.test(r)) return !0
                    }
                return !!(n && t.matches(n)) || J(t.parentNode, e, n, r, i)
            }

            function $(t) {
                return null == t ? "" : t.toLowerCase()
            }

            function Q(t, e) {
                let n;
                let {
                    doc: a,
                    map: o,
                    blockClass: s,
                    blockSelector: l,
                    unblockSelector: c,
                    maskTextClass: u,
                    maskTextSelector: d,
                    unmaskTextSelector: f,
                    skipChild: h = !1,
                    inlineStylesheet: p = !0,
                    maskInputSelector: _,
                    unmaskInputSelector: g,
                    maskAllText: y,
                    maskInputOptions: v = {},
                    maskTextFn: b,
                    maskInputFn: E,
                    slimDOMOptions: w,
                    dataURLOptions: S = {},
                    inlineImages: k = !1,
                    recordCanvas: T = !1,
                    onSerialize: R,
                    onIframeLoad: x,
                    iframeLoadTimeout: D = 5e3,
                    keepIframeSrcFn: N = () => !1
                } = e, {
                    preserveWhiteSpace: O = !0
                } = e, G = function(t, e) {
                    var n, a, o;
                    let s;
                    let {
                        doc: l,
                        blockClass: c,
                        blockSelector: u,
                        unblockSelector: d,
                        maskTextClass: f,
                        maskTextSelector: h,
                        unmaskTextSelector: p,
                        inlineStylesheet: _,
                        maskInputSelector: g,
                        unmaskInputSelector: y,
                        maskAllText: v,
                        maskInputOptions: b = {},
                        maskTextFn: E,
                        maskInputFn: w,
                        dataURLOptions: S = {},
                        inlineImages: k,
                        recordCanvas: T,
                        keepIframeSrcFn: R
                    } = e;
                    if (l.__sn) {
                        let t = l.__sn.id;
                        s = 1 === t ? void 0 : t
                    }
                    switch (t.nodeType) {
                        case t.DOCUMENT_NODE:
                            if ("CSS1Compat" !== t.compatMode) return {
                                type: m.Document,
                                childNodes: [],
                                compatMode: t.compatMode,
                                rootId: s
                            };
                            return {
                                type: m.Document, childNodes: [], rootId: s
                            };
                        case t.DOCUMENT_TYPE_NODE:
                            return {
                                type: m.DocumentType, name: t.name, publicId: t.publicId, systemId: t.systemId, rootId: s
                            };
                        case t.ELEMENT_NODE:
                            ;
                            let x = function(t, e, n, r) {
                                    if (r && t.matches(r)) return !1;
                                    if ("string" == typeof e) {
                                        if (t.classList.contains(e)) return !0
                                    } else
                                        for (let n = 0; n < t.classList.length; n++) {
                                            let r = t.classList[n];
                                            if (e.test(r)) return !0
                                        }
                                    return !!n && t.matches(n)
                                }(t, c, u, d),
                                D = function(t) {
                                    if (t instanceof HTMLFormElement) return "form";
                                    let e = t.tagName.toLowerCase().trim();
                                    return M.test(e) ? "div" : e
                                }(t),
                                N = {};
                            for (let {
                                    name: e,
                                    value: n
                                }
                                of Array.from(t.attributes)) ! function(t, e, n) {
                                return ("video" === t || "audio" === t) && "autoplay" === e
                            }(D, e) && (N[e] = X(l, t, D, e, n, v, p, E));
                            if ("link" === D && _) {
                                let e = Array.from(l.styleSheets).find(e => e.href === t.href),
                                    n = null;
                                e && (n = z(e)), n && (delete N.rel, delete N.href, N._cssText = j(n, e.href))
                            }
                            if ("style" === D && t.sheet && !(t.innerText || t.textContent || "").trim().length) {
                                let e = z(t.sheet);
                                e && (N._cssText = j(e, K()))
                            }
                            if ("input" === D || "textarea" === D || "select" === D || "option" === D) {
                                let e = B(t),
                                    n = U(t, D.toUpperCase(), e),
                                    r = t.checked;
                                "submit" !== e && "button" !== e && n && (N.value = C({
                                    input: t,
                                    type: e,
                                    tagName: D,
                                    value: n,
                                    maskInputSelector: g,
                                    unmaskInputSelector: y,
                                    maskInputOptions: b,
                                    maskInputFn: w
                                })), r && (N.checked = r)
                            }
                            if ("option" === D && (t.selected && !b.select ? N.selected = !0 : delete N.selected), "canvas" === D && T) {
                                if ("2d" === t.__context) ! function(t) {
                                    let e = t.getContext("2d");
                                    if (!e) return !0;
                                    for (let n = 0; n < t.width; n += 50)
                                        for (let r = 0; r < t.height; r += 50) {
                                            let i = e.getImageData,
                                                a = A in i ? i[A] : i,
                                                o = new Uint32Array(a.call(e, n, r, Math.min(50, t.width - n), Math.min(50, t.height - r)).data.buffer);
                                            if (o.some(t => 0 !== t)) return !1
                                        }
                                    return !0
                                }(t) && (N.rr_dataURL = t.toDataURL(S.type, S.quality));
                                else if (!("__context" in t)) {
                                    let e = t.toDataURL(S.type, S.quality),
                                        n = document.createElement("canvas");
                                    n.width = t.width, n.height = t.height;
                                    let r = n.toDataURL(S.type, S.quality);
                                    e !== r && (N.rr_dataURL = e)
                                }
                            }
                            if ("img" === D && k) {
                                !r && (i = (r = l.createElement("canvas")).getContext("2d"));
                                let e = t.crossOrigin;
                                t.crossOrigin = "anonymous";
                                let n = () => {
                                    try {
                                        r.width = t.naturalWidth, r.height = t.naturalHeight, i.drawImage(t, 0, 0), N.rr_dataURL = r.toDataURL(S.type, S.quality)
                                    } catch (e) {
                                        console.warn("Cannot inline img src=".concat(t.currentSrc, "! Error: ").concat(e))
                                    }
                                    e ? N.crossOrigin = e : delete N.crossOrigin
                                };
                                t.complete && 0 !== t.naturalWidth ? n() : t.onload = n
                            }
                            if (("audio" === D || "video" === D) && (N.rr_mediaState = t.paused ? "paused" : "played", N.rr_mediaCurrentTime = t.currentTime), t.scrollLeft && (N.rr_scrollLeft = t.scrollLeft), t.scrollTop && (N.rr_scrollTop = t.scrollTop), x) {
                                let {
                                    width: e,
                                    height: n
                                } = t.getBoundingClientRect();
                                N = {
                                    class: N.class,
                                    rr_width: "".concat(e, "px"),
                                    rr_height: "".concat(n, "px")
                                }
                            }
                            return "iframe" === D && !R(N.src) && (!t.contentDocument && (N.rr_src = N.src), delete N.src), {
                                type: m.Element,
                                tagName: D,
                                attributes: N,
                                childNodes: [],
                                isSVG: !!("svg" === (a = t).tagName || a.ownerSVGElement) || void 0,
                                needBlock: x,
                                rootId: s
                            };
                        case t.TEXT_NODE:
                            let I = t.parentNode && t.parentNode.tagName,
                                O = t.textContent,
                                L = "STYLE" === I || void 0,
                                G = "SCRIPT" === I || void 0;
                            if (L && O) {
                                try {
                                    if (t.nextSibling || t.previousSibling);
                                    else if (null === (n = t.parentNode.sheet) || void 0 === n ? void 0 : n.cssRules) {
                                        ;
                                        O = (o = t.parentNode.sheet).cssRules ? Array.from(o.cssRules).map(t => t.cssText ? F(t.cssText) : "").join("") : ""
                                    }
                                } catch (e) {
                                    console.warn("Cannot get CSS styles from text's parentNode. Error: ".concat(e), t)
                                }
                                O = j(O, K())
                            }
                            if (G && (O = "SCRIPT_PLACEHOLDER"), "TEXTAREA" === I && O) O = "";
                            else if ("OPTION" === I && O) {
                                let e = t.parentNode;
                                O = C({
                                    input: e,
                                    type: null,
                                    tagName: I,
                                    value: O,
                                    maskInputSelector: g,
                                    unmaskInputSelector: y,
                                    maskInputOptions: b,
                                    maskInputFn: w
                                })
                            } else !L && !G && J(t, f, h, p, v) && O && (O = E ? E(O) : P(O));
                            return {
                                type: m.Text, textContent: O || "", isStyle: L, rootId: s
                            };
                        case t.CDATA_SECTION_NODE:
                            return {
                                type: m.CDATA, textContent: "", rootId: s
                            };
                        case t.COMMENT_NODE:
                            return {
                                type: m.Comment, textContent: t.textContent || "", rootId: s
                            };
                        default:
                            return !1
                    }
                }(t, {
                    doc: a,
                    blockClass: s,
                    blockSelector: l,
                    unblockSelector: c,
                    maskTextClass: u,
                    maskTextSelector: d,
                    unmaskTextSelector: f,
                    inlineStylesheet: p,
                    maskInputSelector: _,
                    unmaskInputSelector: g,
                    maskAllText: y,
                    maskInputOptions: v,
                    maskTextFn: b,
                    maskInputFn: E,
                    dataURLOptions: S,
                    inlineImages: k,
                    recordCanvas: T,
                    keepIframeSrcFn: N
                });
                if (!G) return console.warn(t, "not serialized"), null;
                n = "__sn" in t ? t.__sn.id : ! function(t, e) {
                    if (e.comment && t.type === m.Comment) return !0;
                    if (t.type === m.Element) {
                        if (e.script && ("script" === t.tagName || "link" === t.tagName && ("preload" === t.attributes.rel || "modulepreload" === t.attributes.rel) && "script" === t.attributes.as || "link" === t.tagName && "prefetch" === t.attributes.rel && "string" == typeof t.attributes.href && t.attributes.href.endsWith(".js"))) return !0;
                        if (e.headFavicon && ("link" === t.tagName && "shortcut icon" === t.attributes.rel || "meta" === t.tagName && ($(t.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === $(t.attributes.name) || "icon" === $(t.attributes.rel) || "apple-touch-icon" === $(t.attributes.rel) || "shortcut icon" === $(t.attributes.rel)))) return !0;
                        else if ("meta" === t.tagName) {
                            if (e.headMetaDescKeywords && $(t.attributes.name).match(/^description|keywords$/)) return !0;
                            if (e.headMetaSocial && ($(t.attributes.property).match(/^(og|twitter|fb):/) || $(t.attributes.name).match(/^(og|twitter):/) || "pinterest" === $(t.attributes.name))) return !0;
                            else if (e.headMetaRobots && ("robots" === $(t.attributes.name) || "googlebot" === $(t.attributes.name) || "bingbot" === $(t.attributes.name))) return !0;
                            else if (e.headMetaHttpEquiv && void 0 !== t.attributes["http-equiv"]) return !0;
                            else if (e.headMetaAuthorship && ("author" === $(t.attributes.name) || "generator" === $(t.attributes.name) || "framework" === $(t.attributes.name) || "publisher" === $(t.attributes.name) || "progid" === $(t.attributes.name) || $(t.attributes.property).match(/^article:/) || $(t.attributes.property).match(/^product:/))) return !0;
                            else if (e.headMetaVerification && ("google-site-verification" === $(t.attributes.name) || "yandex-verification" === $(t.attributes.name) || "csrf-token" === $(t.attributes.name) || "p:domain_verify" === $(t.attributes.name) || "verify-v1" === $(t.attributes.name) || "verification" === $(t.attributes.name) || "shopify-checkout-api-token" === $(t.attributes.name))) return !0
                        }
                    }
                    return !1
                }(G, w) && (O || G.type !== m.Text || G.isStyle || G.textContent.replace(/^\s+|\s+$/gm, "").length) ? L++ : -2;
                let W = Object.assign(G, {
                    id: n
                });
                if (t.__sn = W, -2 === n) return null;
                o[n] = t, R && R(t);
                let H = !h;
                if (W.type === m.Element && (H = H && !W.needBlock, delete W.needBlock, t.shadowRoot && (W.isShadowHost = !0)), (W.type === m.Document || W.type === m.Element) && H) {
                    var Y;
                    w.headWhitespace && G.type === m.Element && "head" === G.tagName && (O = !1);
                    let e = {
                        doc: a,
                        map: o,
                        blockClass: s,
                        blockSelector: l,
                        unblockSelector: c,
                        maskTextClass: u,
                        maskTextSelector: d,
                        unmaskTextSelector: f,
                        skipChild: h,
                        inlineStylesheet: p,
                        maskInputSelector: _,
                        unmaskInputSelector: g,
                        maskAllText: y,
                        maskInputOptions: v,
                        maskTextFn: b,
                        maskInputFn: E,
                        slimDOMOptions: w,
                        dataURLOptions: S,
                        inlineImages: k,
                        recordCanvas: T,
                        preserveWhiteSpace: O,
                        onSerialize: R,
                        onIframeLoad: x,
                        iframeLoadTimeout: D,
                        keepIframeSrcFn: N
                    };
                    for (let n of Array.from(t.childNodes)) {
                        let t = Q(n, e);
                        t && W.childNodes.push(t)
                    }
                    if ((Y = t).nodeType === Y.ELEMENT_NODE && t.shadowRoot)
                        for (let n of Array.from(t.shadowRoot.childNodes)) {
                            let t = Q(n, e);
                            t && (t.isShadow = !0, W.childNodes.push(t))
                        }
                }
                return t.parentNode && I(t.parentNode) && (W.isShadow = !0), W.type === m.Element && "iframe" === W.tagName && ! function(t, e, n) {
                    let r;
                    let i = t.contentWindow;
                    if (!i) return;
                    let a = !1;
                    try {
                        r = i.document.readyState
                    } catch (t) {
                        return
                    }
                    if ("complete" !== r) {
                        let r = setTimeout(() => {
                            !a && (e(), a = !0)
                        }, n);
                        t.addEventListener("load", () => {
                            clearTimeout(r), a = !0, e()
                        });
                        return
                    }
                    let o = "about:blank";
                    if (i.location.href !== o || t.src === o || "" === t.src) {
                        setTimeout(e, 0);
                        return
                    }
                    t.addEventListener("load", e)
                }(t, () => {
                    let e = t.contentDocument;
                    if (e && x) {
                        let n = Q(e, {
                            doc: e,
                            map: o,
                            blockClass: s,
                            blockSelector: l,
                            unblockSelector: c,
                            maskTextClass: u,
                            maskTextSelector: d,
                            unmaskTextSelector: f,
                            skipChild: !1,
                            inlineStylesheet: p,
                            maskInputSelector: _,
                            unmaskInputSelector: g,
                            maskAllText: y,
                            maskInputOptions: v,
                            maskTextFn: b,
                            maskInputFn: E,
                            slimDOMOptions: w,
                            dataURLOptions: S,
                            inlineImages: k,
                            recordCanvas: T,
                            preserveWhiteSpace: O,
                            onSerialize: R,
                            onIframeLoad: x,
                            iframeLoadTimeout: D,
                            keepIframeSrcFn: N
                        });
                        n && x(t, n)
                    }
                }, D), W
            }

            function tt(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document,
                    r = {
                        capture: !0,
                        passive: !0
                    };
                return n.addEventListener(t, e, r), () => n.removeEventListener(t, e, r)
            }(c = g || (g = {}))[c.DomContentLoaded = 0] = "DomContentLoaded", c[c.Load = 1] = "Load", c[c.FullSnapshot = 2] = "FullSnapshot", c[c.IncrementalSnapshot = 3] = "IncrementalSnapshot", c[c.Meta = 4] = "Meta", c[c.Custom = 5] = "Custom", c[c.Plugin = 6] = "Plugin", (u = y || (y = {}))[u.Mutation = 0] = "Mutation", u[u.MouseMove = 1] = "MouseMove", u[u.MouseInteraction = 2] = "MouseInteraction", u[u.Scroll = 3] = "Scroll", u[u.ViewportResize = 4] = "ViewportResize", u[u.Input = 5] = "Input", u[u.TouchMove = 6] = "TouchMove", u[u.MediaInteraction = 7] = "MediaInteraction", u[u.StyleSheetRule = 8] = "StyleSheetRule", u[u.CanvasMutation = 9] = "CanvasMutation", u[u.Font = 10] = "Font", u[u.Log = 11] = "Log", u[u.Drag = 12] = "Drag", u[u.StyleDeclaration = 13] = "StyleDeclaration", (d = v || (v = {}))[d.MouseUp = 0] = "MouseUp", d[d.MouseDown = 1] = "MouseDown", d[d.Click = 2] = "Click", d[d.ContextMenu = 3] = "ContextMenu", d[d.DblClick = 4] = "DblClick", d[d.Focus = 5] = "Focus", d[d.Blur = 6] = "Blur", d[d.TouchStart = 7] = "TouchStart", d[d.TouchMove_Departed = 8] = "TouchMove_Departed", d[d.TouchEnd = 9] = "TouchEnd", d[d.TouchCancel = 10] = "TouchCancel", (f = b || (b = {}))[f["2D"] = 0] = "2D", f[f.WebGL = 1] = "WebGL", f[f.WebGL2 = 2] = "WebGL2", (h = E || (E = {}))[h.Play = 0] = "Play", h[h.Pause = 1] = "Pause", h[h.Seeked = 2] = "Seeked", h[h.VolumeChange = 3] = "VolumeChange", (p = w || (w = {})).Start = "start", p.Pause = "pause", p.Resume = "resume", p.Resize = "resize", p.Finish = "finish", p.FullsnapshotRebuilded = "fullsnapshot-rebuilded", p.LoadStylesheetStart = "load-stylesheet-start", p.LoadStylesheetEnd = "load-stylesheet-end", p.SkipStart = "skip-start", p.SkipEnd = "skip-end", p.MouseInteraction = "mouse-interaction", p.EventCast = "event-cast", p.CustomEvent = "custom-event", p.Flush = "flush", p.StateChange = "state-change", p.PlayBack = "play-back";
            let te = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
                tn = {
                    map: {},
                    getId: () => (console.error(te), -1),
                    getNode: () => (console.error(te), null),
                    removeNodeFromMap() {
                        console.error(te)
                    },
                    has: () => (console.error(te), !1),
                    reset() {
                        console.error(te)
                    }
                };

            function tr(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = null,
                    i = 0;
                return function(a) {
                    let o = Date.now();
                    !i && !1 === n.leading && (i = o);
                    let s = e - (o - i),
                        l = this,
                        c = arguments;
                    s <= 0 || s > e ? (r && (clearTimeout(r), r = null), i = o, t.apply(l, c)) : !r && !1 !== n.trailing && (r = setTimeout(() => {
                        i = !1 === n.leading ? 0 : Date.now(), r = null, t.apply(l, c)
                    }, s))
                }
            }

            function ti(t, e, n, r) {
                let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window,
                    a = i.Object.getOwnPropertyDescriptor(t, e);
                return i.Object.defineProperty(t, e, r ? n : {
                    set(t) {
                        setTimeout(() => {
                            n.set.call(this, t)
                        }, 0), a && a.set && a.set.call(this, t)
                    }
                }), () => ti(t, e, a || {}, !0)
            }

            function ta(t, e, n) {
                try {
                    if (!(e in t)) return () => {};
                    let r = t[e],
                        i = n(r);
                    return "function" == typeof i && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
                        __rrweb_original__: {
                            enumerable: !1,
                            value: r
                        }
                    })), t[e] = i, () => {
                        t[e] = r
                    }
                } catch (t) {
                    return () => {}
                }
            }

            function to() {
                return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
            }

            function ts() {
                return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
            }

            function tl(t, e, n, r) {
                if (!t) return !1;
                if (t.nodeType === t.ELEMENT_NODE) {
                    let i = !1,
                        a = r && t.matches(r);
                    return "string" == typeof e ? i = void 0 !== t.closest ? !a && null !== t.closest("." + e) : !a && t.classList.contains(e) : a || t.classList.forEach(t => {
                        e.test(t) && (i = !0)
                    }), !i && n && (i = t.matches(n)), !a && i || tl(t.parentNode, e, n, r)
                }
                return t.nodeType, t.TEXT_NODE, tl(t.parentNode, e, n, r)
            }

            function tc(t) {
                return "__sn" in t && -2 === t.__sn.id
            }
            "undefined" != typeof window && window.Proxy && window.Reflect && (tn = new Proxy(tn, {
                get: (t, e, n) => ("map" === e && console.error(te), Reflect.get(t, e, n))
            }));

            function tu(t) {
                return !!t.changedTouches
            }

            function td(t) {
                return "__sn" in t && t.__sn.type === m.Element && "iframe" === t.__sn.tagName
            }

            function tf(t) {
                return !!(null == t ? void 0 : t.shadowRoot)
            }

            function th(t) {
                return "__ln" in t
            }
            class tp {
                get(t) {
                    if (t >= this.length) throw Error("Position outside of list range");
                    let e = this.head;
                    for (let n = 0; n < t; n++) e = (null == e ? void 0 : e.next) || null;
                    return e
                }
                addNode(t) {
                    let e = {
                        value: t,
                        previous: null,
                        next: null
                    };
                    if (t.__ln = e, t.previousSibling && "__ln" in t.previousSibling) {
                        let n = t.previousSibling.__ln.next;
                        e.next = n, e.previous = t.previousSibling.__ln, t.previousSibling.__ln.next = e, n && (n.previous = e)
                    } else if (t.nextSibling && "__ln" in t.nextSibling && t.nextSibling.__ln.previous) {
                        let n = t.nextSibling.__ln.previous;
                        e.previous = n, e.next = t.nextSibling.__ln, t.nextSibling.__ln.previous = e, n && (n.next = e)
                    } else this.head && (this.head.previous = e), e.next = this.head, this.head = e;
                    this.length++
                }
                removeNode(t) {
                    let e = t.__ln;
                    this.head && (e.previous ? (e.previous.next = e.next, e.next && (e.next.previous = e.previous)) : (this.head = e.next, this.head && (this.head.previous = null)), t.__ln && delete t.__ln, this.length--)
                }
                constructor() {
                    this.length = 0, this.head = null
                }
            }
            let t_ = (t, e) => "".concat(t, "@").concat(e);

            function tm(t) {
                return "__sn" in t
            }
            class tg {
                init(t) {
                    ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskTextClass", "maskTextSelector", "unmaskTextSelector", "maskInputSelector", "unmaskInputSelector", "inlineStylesheet", "maskAllText", "maskInputOptions", "maskTextFn", "maskInputFn", "recordCanvas", "inlineImages", "slimDOMOptions", "doc", "mirror", "iframeManager", "shadowDomManager", "canvasManager"].forEach(e => {
                        this[e] = t[e]
                    })
                }
                freeze() {
                    this.frozen = !0, this.canvasManager.freeze()
                }
                unfreeze() {
                    this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
                }
                isFrozen() {
                    return this.frozen
                }
                lock() {
                    this.locked = !0, this.canvasManager.lock()
                }
                unlock() {
                    this.locked = !1, this.canvasManager.unlock(), this.emit()
                }
                reset() {
                    this.shadowDomManager.reset(), this.canvasManager.reset()
                }
                constructor() {
                    this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = t => {
                        t.forEach(this.processMutation), this.emit()
                    }, this.emit = () => {
                        if (this.frozen || this.locked) return;
                        let t = [],
                            e = new tp,
                            n = t => {
                                let e = t,
                                    n = -2;
                                for (; - 2 === n;) n = (e = e && e.nextSibling) && this.mirror.getId(e);
                                return n
                            },
                            r = r => {
                                var i, a, o, s, l;
                                let c = r.getRootNode ? null === (i = r.getRootNode()) || void 0 === i ? void 0 : i.host : null,
                                    u = c;
                                for (; null === (o = null === (a = null == u ? void 0 : u.getRootNode) || void 0 === a ? void 0 : a.call(u)) || void 0 === o ? void 0 : o.host;) u = (null === (l = null === (s = null == u ? void 0 : u.getRootNode) || void 0 === s ? void 0 : s.call(u)) || void 0 === l ? void 0 : l.host) || null;
                                let d = !this.doc.contains(r) && (!u || !this.doc.contains(u));
                                if (!r.parentNode || d) return;
                                let f = I(r.parentNode) ? this.mirror.getId(c) : this.mirror.getId(r.parentNode),
                                    h = n(r);
                                if (-1 === f || -1 === h) return e.addNode(r);
                                let p = Q(r, {
                                    doc: this.doc,
                                    map: this.mirror.map,
                                    blockClass: this.blockClass,
                                    blockSelector: this.blockSelector,
                                    unblockSelector: this.unblockSelector,
                                    maskTextClass: this.maskTextClass,
                                    maskTextSelector: this.maskTextSelector,
                                    unmaskTextSelector: this.unmaskTextSelector,
                                    maskInputSelector: this.maskInputSelector,
                                    unmaskInputSelector: this.unmaskInputSelector,
                                    skipChild: !0,
                                    inlineStylesheet: this.inlineStylesheet,
                                    maskAllText: this.maskAllText,
                                    maskInputOptions: this.maskInputOptions,
                                    maskTextFn: this.maskTextFn,
                                    maskInputFn: this.maskInputFn,
                                    slimDOMOptions: this.slimDOMOptions,
                                    recordCanvas: this.recordCanvas,
                                    inlineImages: this.inlineImages,
                                    onSerialize: t => {
                                        td(t) && this.iframeManager.addIframe(t), tf(r) && this.shadowDomManager.addShadowRoot(r.shadowRoot, document)
                                    },
                                    onIframeLoad: (t, e) => {
                                        this.iframeManager.attachIframe(t, e), this.shadowDomManager.observeAttachShadow(t)
                                    }
                                });
                                p && t.push({
                                    parentId: f,
                                    nextId: h,
                                    node: p
                                })
                            };
                        for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                        for (let t of this.movedSet)(!tv(this.removes, t, this.mirror) || this.movedSet.has(t.parentNode)) && r(t);
                        for (let t of this.addedSet) tb(this.droppedSet, t) || tv(this.removes, t, this.mirror) ? tb(this.movedSet, t) ? r(t) : this.droppedSet.add(t) : r(t);
                        let i = null;
                        for (; e.length;) {
                            let t = null;
                            if (i) {
                                let e = this.mirror.getId(i.value.parentNode),
                                    r = n(i.value); - 1 !== e && -1 !== r && (t = i)
                            }
                            if (!t)
                                for (let r = e.length - 1; r >= 0; r--) {
                                    let i = e.get(r);
                                    if (i) {
                                        let e = this.mirror.getId(i.value.parentNode),
                                            r = n(i.value);
                                        if (-1 !== e && -1 !== r) {
                                            t = i;
                                            break
                                        }
                                    }
                                }
                            if (!t) {
                                for (; e.head;) e.removeNode(e.head.value);
                                break
                            }
                            i = t.previous, e.removeNode(t.value), r(t.value)
                        }
                        let a = {
                            texts: this.texts.map(t => ({
                                id: this.mirror.getId(t.node),
                                value: t.value
                            })).filter(t => this.mirror.has(t.id)),
                            attributes: this.attributes.map(t => ({
                                id: this.mirror.getId(t.node),
                                attributes: t.attributes
                            })).filter(t => this.mirror.has(t.id)),
                            removes: this.removes,
                            adds: t
                        };
                        (a.texts.length || a.attributes.length || a.removes.length || a.adds.length) && (this.texts = [], this.attributes = [], this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(a))
                    }, this.processMutation = t => {
                        if (!tc(t.target)) switch (t.type) {
                            case "characterData": {
                                let e = t.target.textContent;
                                !tl(t.target, this.blockClass, this.blockSelector, this.unblockSelector) && e !== t.oldValue && this.texts.push({
                                    value: J(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextSelector, this.maskAllText) && e ? this.maskTextFn ? this.maskTextFn(e) : e.replace(/[\S]/g, "*") : e,
                                    node: t.target
                                });
                                break
                            }
                            case "attributes": {
                                let e = t.target,
                                    n = e.getAttribute(t.attributeName);
                                if ("value" === t.attributeName && (n = C({
                                        input: e,
                                        maskInputSelector: this.maskInputSelector,
                                        unmaskInputSelector: this.unmaskInputSelector,
                                        maskInputOptions: this.maskInputOptions,
                                        tagName: e.tagName,
                                        type: e.getAttribute("type"),
                                        value: n,
                                        maskInputFn: this.maskInputFn
                                    })), tl(t.target, this.blockClass, this.blockSelector, this.unblockSelector) || n === t.oldValue) return;
                                let r = this.attributes.find(e => e.node === t.target);
                                if (!r && (r = {
                                        node: t.target,
                                        attributes: {}
                                    }, this.attributes.push(r)), "type" === t.attributeName && "INPUT" === e.tagName && "password" === (t.oldValue || "").toLowerCase() && e.setAttribute("data-rr-is-password", "true"), "style" === t.attributeName) {
                                    let n = this.doc.createElement("span");
                                    t.oldValue && n.setAttribute("style", t.oldValue), (void 0 === r.attributes.style || null === r.attributes.style) && (r.attributes.style = {});
                                    try {
                                        let t = r.attributes.style;
                                        for (let r of Array.from(e.style)) {
                                            let i = e.style.getPropertyValue(r),
                                                a = e.style.getPropertyPriority(r);
                                            (i !== n.style.getPropertyValue(r) || a !== n.style.getPropertyPriority(r)) && ("" === a ? t[r] = i : t[r] = [i, a])
                                        }
                                        for (let r of Array.from(n.style)) "" === e.style.getPropertyValue(r) && (t[r] = !1)
                                    } catch (t) {
                                        console.warn("[rrweb] Error when parsing update to style attribute:", t)
                                    }
                                } else {
                                    let e = t.target;
                                    r.attributes[t.attributeName] = X(this.doc, e, e.tagName, t.attributeName, n, this.maskAllText, this.unmaskTextSelector, this.maskTextFn)
                                }
                                break
                            }
                            case "childList":
                                t.addedNodes.forEach(e => this.genAdds(e, t.target)), t.removedNodes.forEach(e => {
                                    let n = this.mirror.getId(e),
                                        r = I(t.target) ? this.mirror.getId(t.target.host) : this.mirror.getId(t.target);
                                    !(tl(t.target, this.blockClass, this.blockSelector, this.unblockSelector) || tc(e)) && (this.addedSet.has(e) ? (ty(this.addedSet, e), this.droppedSet.add(e)) : this.addedSet.has(t.target) && -1 === n || function t(e, n) {
                                        if (I(e)) return !1;
                                        let r = n.getId(e);
                                        return !n.has(r) || (!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || t(e.parentNode, n))
                                    }(t.target, this.mirror) || (this.movedSet.has(e) && this.movedMap[t_(n, r)] ? ty(this.movedSet, e) : this.removes.push({
                                        parentId: r,
                                        id: n,
                                        isShadow: !!I(t.target) || void 0
                                    })), this.mapRemoves.push(e))
                                })
                        }
                    }, this.genAdds = (t, e) => {
                        if (!(e && tl(e, this.blockClass, this.blockSelector, this.unblockSelector))) {
                            if ("__sn" in t) {
                                if (tc(t)) return;
                                this.movedSet.add(t);
                                let n = null;
                                if (e && "__sn" in e) n = e.__sn.id;
                                n && (this.movedMap[t_(t.__sn.id, n)] = !0)
                            } else this.addedSet.add(t), this.droppedSet.delete(t);
                            !tl(t, this.blockClass, this.blockSelector, this.unblockSelector) && t.childNodes.forEach(t => this.genAdds(t))
                        }
                    }
                }
            }

            function ty(t, e) {
                t.delete(e), e.childNodes.forEach(e => ty(t, e))
            }

            function tv(t, e, n) {
                let {
                    parentNode: r
                } = e;
                if (!r) return !1;
                let i = n.getId(r);
                return !!t.some(t => t.id === i) || tv(t, r, n)
            }

            function tb(t, e) {
                let {
                    parentNode: n
                } = e;
                return !!n && (!!t.has(n) || tb(t, n))
            }
            let tE = t => function() {
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    try {
                        return t(...n)
                    } catch (t) {
                        try {
                            t.__rrweb__ = !0
                        } catch (t) {}
                        throw t
                    }
                },
                tw = [];

            function tS(t) {
                try {
                    if ("composedPath" in t) {
                        let e = t.composedPath();
                        if (e.length) return e[0]
                    } else if ("path" in t && t.path.length) return t.path[0]
                } catch (t) {}
                return t && t.target
            }

            function tk(t, e) {
                var n, r;
                let i = new tg;
                tw.push(i), i.init(t);
                let a = window.MutationObserver || window.__rrMutationObserver,
                    o = null === (r = null === (n = null == window ? void 0 : window.Zone) || void 0 === n ? void 0 : n.__symbol__) || void 0 === r ? void 0 : r.call(n, "MutationObserver");
                o && window[o] && (a = window[o]);
                let s = new a(tE(e => {
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

            function tT(t) {
                let {
                    scrollCb: e,
                    doc: n,
                    mirror: r,
                    blockClass: i,
                    blockSelector: a,
                    unblockSelector: o,
                    sampling: s
                } = t, l = tr(t => {
                    let s = tS(t);
                    if (!s || tl(s, i, a, o)) return;
                    let l = r.getId(s);
                    if (s === n) {
                        let t = n.scrollingElement || n.documentElement;
                        tE(e)({
                            id: l,
                            x: t.scrollLeft,
                            y: t.scrollTop
                        })
                    } else tE(e)({
                        id: l,
                        x: s.scrollLeft,
                        y: s.scrollTop
                    })
                }, s.scroll || 100);
                return tt("scroll", tE(l), n)
            }

            function tR(t, e) {
                let n = Object.assign({}, t);
                return !e && delete n.userTriggered, n
            }
            let tx = ["INPUT", "TEXTAREA", "SELECT"],
                tD = new WeakMap;

            function tN(t) {
                return function(t, e) {
                    if (tO("CSSGroupingRule") && t.parentRule instanceof CSSGroupingRule || tO("CSSMediaRule") && t.parentRule instanceof CSSMediaRule || tO("CSSSupportsRule") && t.parentRule instanceof CSSSupportsRule || tO("CSSConditionRule") && t.parentRule instanceof CSSConditionRule) {
                        let n = Array.from(t.parentRule.cssRules),
                            r = n.indexOf(t);
                        e.unshift(r)
                    } else {
                        let n = Array.from(t.parentStyleSheet.cssRules),
                            r = n.indexOf(t);
                        e.unshift(r)
                    }
                    return e
                }(t, [])
            }

            function tI(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.doc.defaultView;
                if (!n) return () => {};
                ! function(t, e) {
                    let {
                        mutationCb: n,
                        mousemoveCb: r,
                        mouseInteractionCb: i,
                        scrollCb: a,
                        viewportResizeCb: o,
                        inputCb: s,
                        mediaInteractionCb: l,
                        styleSheetRuleCb: c,
                        styleDeclarationCb: u,
                        canvasMutationCb: d,
                        fontCb: f
                    } = t;
                    t.mutationCb = function() {
                        for (var t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                        e.mutation && e.mutation(...r), n(...r)
                    }, t.mousemoveCb = function() {
                        for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                        e.mousemove && e.mousemove(...n), r(...n)
                    }, t.mouseInteractionCb = function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        e.mouseInteraction && e.mouseInteraction(...n), i(...n)
                    }, t.scrollCb = function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        e.scroll && e.scroll(...n), a(...n)
                    }, t.viewportResizeCb = function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        e.viewportResize && e.viewportResize(...n), o(...n)
                    }, t.inputCb = function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        e.input && e.input(...n), s(...n)
                    }, t.mediaInteractionCb = function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        e.mediaInteaction && e.mediaInteaction(...n), l(...n)
                    }, t.styleSheetRuleCb = function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        e.styleSheetRule && e.styleSheetRule(...n), c(...n)
                    }, t.styleDeclarationCb = function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        e.styleDeclaration && e.styleDeclaration(...n), u(...n)
                    }, t.canvasMutationCb = function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        e.canvasMutation && e.canvasMutation(...n), d(...n)
                    }, t.fontCb = function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        e.font && e.font(...n), f(...n)
                    }
                }(t, e);
                let r = tk(t, t.doc),
                    i = function(t) {
                        let e, {
                            mousemoveCb: n,
                            sampling: r,
                            doc: i,
                            mirror: a
                        } = t;
                        if (!1 === r.mousemove) return () => {};
                        let o = "number" == typeof r.mousemove ? r.mousemove : 50,
                            s = "number" == typeof r.mousemoveCallback ? r.mousemoveCallback : 500,
                            l = [],
                            c = tr(t => {
                                let r = Date.now() - e;
                                tE(n)(l.map(t => (t.timeOffset -= r, t)), t), l = [], e = null
                            }, s),
                            u = tr(t => {
                                let n = tS(t),
                                    {
                                        clientX: r,
                                        clientY: i
                                    } = tu(t) ? t.changedTouches[0] : t;
                                !e && (e = Date.now()), l.push({
                                    x: r,
                                    y: i,
                                    id: a.getId(n),
                                    timeOffset: Date.now() - e
                                }), c("undefined" != typeof DragEvent && t instanceof DragEvent ? y.Drag : t instanceof MouseEvent ? y.MouseMove : y.TouchMove)
                            }, o, {
                                trailing: !1
                            }),
                            d = [tt("mousemove", tE(u), i), tt("touchmove", tE(u), i), tt("drag", tE(u), i)];
                        return tE(() => {
                            d.forEach(t => t())
                        })
                    }(t),
                    a = function(t) {
                        let {
                            mouseInteractionCb: e,
                            doc: n,
                            mirror: r,
                            blockClass: i,
                            blockSelector: a,
                            unblockSelector: o,
                            sampling: s
                        } = t;
                        if (!1 === s.mouseInteraction) return () => {};
                        let l = !0 === s.mouseInteraction || void 0 === s.mouseInteraction ? {} : s.mouseInteraction,
                            c = [],
                            u = t => n => {
                                let s = tS(n);
                                if (tl(s, i, a, o)) return;
                                let l = tu(n) ? n.changedTouches[0] : n;
                                if (!l) return;
                                let c = r.getId(s),
                                    {
                                        clientX: u,
                                        clientY: d
                                    } = l;
                                tE(e)({
                                    type: v[t],
                                    id: c,
                                    x: u,
                                    y: d
                                })
                            };
                        return Object.keys(v).filter(t => Number.isNaN(Number(t)) && !t.endsWith("_Departed") && !1 !== l[t]).forEach(t => {
                            let e = t.toLowerCase(),
                                r = tE(u(t));
                            c.push(tt(e, r, n))
                        }), tE(() => {
                            c.forEach(t => t())
                        })
                    }(t),
                    o = tT(t),
                    s = function(t) {
                        let {
                            viewportResizeCb: e
                        } = t, n = -1, r = -1, i = tr(() => {
                            let t = to(),
                                i = ts();
                            (n !== t || r !== i) && (tE(e)({
                                width: Number(i),
                                height: Number(t)
                            }), n = t, r = i)
                        }, 200);
                        return tt("resize", tE(i), window)
                    }(t),
                    l = function(t) {
                        let {
                            inputCb: e,
                            doc: n,
                            mirror: r,
                            blockClass: i,
                            blockSelector: a,
                            unblockSelector: o,
                            ignoreClass: s,
                            ignoreSelector: l,
                            maskInputSelector: c,
                            unmaskInputSelector: u,
                            maskInputOptions: d,
                            maskInputFn: f,
                            sampling: h,
                            userTriggeredOnInput: p
                        } = t;

                        function _(t) {
                            let e = tS(t),
                                r = e && e.tagName,
                                h = t.isTrusted;
                            if ("OPTION" === r && (e = e.parentElement), !e || !r || 0 > tx.indexOf(r) || tl(e, i, a, o)) return;
                            let _ = e,
                                g = B(_);
                            if (_.classList.contains(s) || l && _.matches(l)) return;
                            let y = U(_, r, g),
                                v = !1;
                            ("radio" === g || "checkbox" === g) && (v = e.checked),
                            function(t) {
                                let {
                                    tagName: e,
                                    type: n,
                                    maskInputOptions: r,
                                    maskInputSelector: i
                                } = t;
                                return i || O({
                                    maskInputOptions: r,
                                    tagName: e,
                                    type: n
                                })
                            }({
                                maskInputOptions: d,
                                maskInputSelector: c,
                                tagName: r,
                                type: g
                            }) && (y = C({
                                input: _,
                                maskInputOptions: d,
                                maskInputSelector: c,
                                unmaskInputSelector: u,
                                tagName: r,
                                type: g,
                                value: y,
                                maskInputFn: f
                            })), m(e, tE(tR)({
                                text: y,
                                isChecked: v,
                                userTriggered: h
                            }, p));
                            let b = e.name;
                            "radio" === g && b && v && n.querySelectorAll('input[type="radio"][name="'.concat(b, '"]')).forEach(t => {
                                if (t !== e) {
                                    let e = C({
                                        input: t,
                                        maskInputOptions: d,
                                        maskInputSelector: c,
                                        unmaskInputSelector: u,
                                        tagName: r,
                                        type: g,
                                        value: U(t, r, g),
                                        maskInputFn: f
                                    });
                                    m(t, tE(tR)({
                                        text: e,
                                        isChecked: !v,
                                        userTriggered: !1
                                    }, p))
                                }
                            })
                        }

                        function m(t, n) {
                            let i = tD.get(t);
                            if (!i || i.text !== n.text || i.isChecked !== n.isChecked) {
                                tD.set(t, n);
                                let i = r.getId(t);
                                e(Object.assign(Object.assign({}, n), {
                                    id: i
                                }))
                            }
                        }
                        let g = "last" === h.input ? ["change"] : ["input", "change"],
                            y = g.map(t => tt(t, tE(_), n)),
                            v = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value"),
                            b = [
                                [HTMLInputElement.prototype, "value"],
                                [HTMLInputElement.prototype, "checked"],
                                [HTMLSelectElement.prototype, "value"],
                                [HTMLTextAreaElement.prototype, "value"],
                                [HTMLSelectElement.prototype, "selectedIndex"],
                                [HTMLOptionElement.prototype, "selected"]
                            ];
                        return v && v.set && y.push(...b.map(t => ti(t[0], t[1], {
                            set() {
                                tE(_)({
                                    target: this
                                })
                            }
                        }))), tE(() => {
                            y.forEach(t => t())
                        })
                    }(t),
                    c = function(t) {
                        let {
                            mediaInteractionCb: e,
                            blockClass: n,
                            blockSelector: r,
                            unblockSelector: i,
                            mirror: a,
                            sampling: o
                        } = t, s = t => tr(tE(o => {
                            let s = tS(o);
                            if (!s || tl(s, n, r, i)) return;
                            let {
                                currentTime: l,
                                volume: c,
                                muted: u
                            } = s;
                            e({
                                type: t,
                                id: a.getId(s),
                                currentTime: l,
                                volume: c,
                                muted: u
                            })
                        }), o.media || 500), l = [tt("play", s(0)), tt("pause", s(1)), tt("seeked", s(2)), tt("volumechange", s(3))];
                        return tE(() => {
                            l.forEach(t => t())
                        })
                    }(t),
                    u = function(t, e) {
                        let {
                            styleSheetRuleCb: n,
                            mirror: r
                        } = t, {
                            win: i
                        } = e;
                        if (!i.CSSStyleSheet || !i.CSSStyleSheet.prototype) return () => {};
                        let a = i.CSSStyleSheet.prototype.insertRule;
                        i.CSSStyleSheet.prototype.insertRule = new Proxy(a, {
                            apply: tE((t, e, i) => {
                                let [a, o] = i, s = r.getId(e.ownerNode);
                                return -1 !== s && n({
                                    id: s,
                                    adds: [{
                                        rule: a,
                                        index: o
                                    }]
                                }), t.apply(e, i)
                            })
                        });
                        let o = i.CSSStyleSheet.prototype.deleteRule;
                        i.CSSStyleSheet.prototype.deleteRule = new Proxy(o, {
                            apply: tE((t, e, i) => {
                                let [a] = i, o = r.getId(e.ownerNode);
                                return -1 !== o && n({
                                    id: o,
                                    removes: [{
                                        index: a
                                    }]
                                }), t.apply(e, i)
                            })
                        });
                        let s = {};
                        tC("CSSGroupingRule") ? s.CSSGroupingRule = i.CSSGroupingRule : (tC("CSSMediaRule") && (s.CSSMediaRule = i.CSSMediaRule), tC("CSSConditionRule") && (s.CSSConditionRule = i.CSSConditionRule), tC("CSSSupportsRule") && (s.CSSSupportsRule = i.CSSSupportsRule));
                        let l = {};
                        return Object.entries(s).forEach(t => {
                            let [e, i] = t;
                            l[e] = {
                                insertRule: i.prototype.insertRule,
                                deleteRule: i.prototype.deleteRule
                            }, i.prototype.insertRule = new Proxy(l[e].insertRule, {
                                apply: tE((t, e, i) => {
                                    let [a, o] = i, s = r.getId(e.parentStyleSheet.ownerNode);
                                    return -1 !== s && n({
                                        id: s,
                                        adds: [{
                                            rule: a,
                                            index: [...tN(e), o || 0]
                                        }]
                                    }), t.apply(e, i)
                                })
                            }), i.prototype.deleteRule = new Proxy(l[e].deleteRule, {
                                apply: tE((t, e, i) => {
                                    let [a] = i, o = r.getId(e.parentStyleSheet.ownerNode);
                                    return -1 !== o && n({
                                        id: o,
                                        removes: [{
                                            index: [...tN(e), a]
                                        }]
                                    }), t.apply(e, i)
                                })
                            })
                        }), tE(() => {
                            i.CSSStyleSheet.prototype.insertRule = a, i.CSSStyleSheet.prototype.deleteRule = o, Object.entries(s).forEach(t => {
                                let [e, n] = t;
                                n.prototype.insertRule = l[e].insertRule, n.prototype.deleteRule = l[e].deleteRule
                            })
                        })
                    }(t, {
                        win: n
                    }),
                    d = function(t, e) {
                        let {
                            styleDeclarationCb: n,
                            mirror: r
                        } = t, {
                            win: i
                        } = e, a = i.CSSStyleDeclaration.prototype.setProperty;
                        i.CSSStyleDeclaration.prototype.setProperty = new Proxy(a, {
                            apply: tE((t, e, i) => {
                                var a, o;
                                let [s, l, c] = i, u = r.getId(null === (o = null === (a = e.parentRule) || void 0 === a ? void 0 : a.parentStyleSheet) || void 0 === o ? void 0 : o.ownerNode);
                                return -1 !== u && n({
                                    id: u,
                                    set: {
                                        property: s,
                                        value: l,
                                        priority: c
                                    },
                                    index: tN(e.parentRule)
                                }), t.apply(e, i)
                            })
                        });
                        let o = i.CSSStyleDeclaration.prototype.removeProperty;
                        return i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
                            apply: tE((t, e, i) => {
                                var a, o;
                                let [s] = i, l = r.getId(null === (o = null === (a = e.parentRule) || void 0 === a ? void 0 : a.parentStyleSheet) || void 0 === o ? void 0 : o.ownerNode);
                                return -1 !== l && n({
                                    id: l,
                                    remove: {
                                        property: s
                                    },
                                    index: tN(e.parentRule)
                                }), t.apply(e, i)
                            })
                        }), tE(() => {
                            i.CSSStyleDeclaration.prototype.setProperty = a, i.CSSStyleDeclaration.prototype.removeProperty = o
                        })
                    }(t, {
                        win: n
                    }),
                    f = t.collectFonts ? function(t) {
                        let {
                            fontCb: e,
                            doc: n
                        } = t, r = n.defaultView;
                        if (!r) return () => {};
                        let i = [],
                            a = new WeakMap,
                            o = r.FontFace;
                        r.FontFace = function(t, e, n) {
                            let r = new o(t, e, n);
                            return a.set(r, {
                                family: t,
                                buffer: "string" != typeof e,
                                descriptors: n,
                                fontSource: "string" == typeof e ? e : JSON.stringify(Array.from(new Uint8Array(e)))
                            }), r
                        };
                        let s = ta(n.fonts, "add", function(t) {
                            return function(n) {
                                return setTimeout(() => {
                                    let t = a.get(n);
                                    t && (e(t), a.delete(n))
                                }, 0), t.apply(this, [n])
                            }
                        });
                        return i.push(() => {
                            r.FontFace = o
                        }), i.push(s), tE(() => {
                            i.forEach(t => t())
                        })
                    }(t) : () => {},
                    h = [];
                for (let e of t.plugins) h.push(e.observer(e.callback, n, e.options));
                return tE(() => {
                    tw.forEach(t => t.reset()), r.disconnect(), i(), a(), o(), s(), l(), c();
                    try {
                        u(), d()
                    } catch (t) {}
                    f(), h.forEach(t => t())
                })
            }

            function tO(t) {
                return void 0 !== window[t]
            }

            function tC(t) {
                return !!(void 0 !== window[t] && window[t].prototype && "insertRule" in window[t].prototype && "deleteRule" in window[t].prototype)
            }
            class tA {
                addIframe(t) {
                    this.iframes.set(t, !0)
                }
                addLoadListener(t) {
                    this.loadListener = t
                }
                attachIframe(t, e) {
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
                constructor(t) {
                    this.iframes = new WeakMap, this.mutationCb = t.mutationCb
                }
            }
            class tB {
                addShadowRoot(t, e) {
                    tk(Object.assign(Object.assign({}, this.bypassOptions), {
                        doc: e,
                        mutationCb: this.mutationCb,
                        mirror: this.mirror,
                        shadowDomManager: this
                    }), t), tT(Object.assign(Object.assign({}, this.bypassOptions), {
                        scrollCb: this.scrollCb,
                        doc: t,
                        mirror: this.mirror
                    }))
                }
                observeAttachShadow(t) {
                    if (t.contentWindow) {
                        let e = this;
                        this.restorePatches.push(ta(t.contentWindow.HTMLElement.prototype, "attachShadow", function(n) {
                            return function() {
                                let r = n.apply(this, arguments);
                                return this.shadowRoot && e.addShadowRoot(this.shadowRoot, t.contentDocument), r
                            }
                        }))
                    }
                }
                reset() {
                    this.restorePatches.forEach(t => t())
                }
                constructor(t) {
                    this.restorePatches = [], this.mutationCb = t.mutationCb, this.scrollCb = t.scrollCb, this.bypassOptions = t.bypassOptions, this.mirror = t.mirror;
                    let e = this;
                    this.restorePatches.push(ta(HTMLElement.prototype, "attachShadow", function(t) {
                        return function() {
                            let n = t.apply(this, arguments);
                            return this.shadowRoot && e.addShadowRoot(this.shadowRoot, this.ownerDocument), n
                        }
                    }))
                }
            }
            for (var tU = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", tL = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), tM = 0; tM < tU.length; tM++) tL[tU.charCodeAt(tM)] = tM;
            var tP = function(t) {
                var e, n = new Uint8Array(t),
                    r = n.length,
                    i = "";
                for (e = 0; e < r; e += 3) i += tU[n[e] >> 2] + tU[(3 & n[e]) << 4 | n[e + 1] >> 4] + tU[(15 & n[e + 1]) << 2 | n[e + 2] >> 6] + tU[63 & n[e + 2]];
                return r % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : r % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i
            };
            let tz = new Map,
                tG = (t, e, n) => {
                    var r, i;
                    let a;
                    if (!t || !(tW(t, e) || "object" == typeof t)) return;
                    let o = t.constructor.name;
                    let s = (r = n, i = o, !(a = tz.get(r)) && (a = new Map, tz.set(r, a)), !a.has(i) && a.set(i, []), a.get(i)),
                        l = s.indexOf(t);
                    return -1 === l && (l = s.length, s.push(t)), l
                },
                tF = (t, e, n) => [...t].map(t => (function t(e, n, r) {
                    if (e instanceof Array) return e.map(e => t(e, n, r));
                    if (null === e);
                    else if (e instanceof Float32Array || e instanceof Float64Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Int8Array || e instanceof Uint8ClampedArray) {
                        let t = e.constructor.name;
                        return {
                            rr_type: t,
                            args: [Object.values(e)]
                        }
                    } else if (e instanceof ArrayBuffer) {
                        let t = e.constructor.name,
                            n = tP(e);
                        return {
                            rr_type: t,
                            base64: n
                        }
                    } else if (e instanceof DataView) {
                        let i = e.constructor.name;
                        return {
                            rr_type: i,
                            args: [t(e.buffer, n, r), e.byteOffset, e.byteLength]
                        }
                    } else if (e instanceof HTMLImageElement) {
                        let t = e.constructor.name,
                            {
                                src: n
                            } = e;
                        return {
                            rr_type: t,
                            src: n
                        }
                    } else if (e instanceof ImageData) {
                        let i = e.constructor.name;
                        return {
                            rr_type: i,
                            args: [t(e.data, n, r), e.width, e.height]
                        }
                    } else if (tW(e, n) || "object" == typeof e) {
                        let t = e.constructor.name,
                            i = tG(e, n, r);
                        return {
                            rr_type: t,
                            index: i
                        }
                    }
                    return e
                })(t, e, n)),
                tW = (t, e) => {
                    let n = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter(t => "function" == typeof e[t]);
                    return !!n.find(n => t instanceof e[n])
                };

            function tH(t, e, n, r, i, a, o, s) {
                let l = [],
                    c = Object.getOwnPropertyNames(t);
                for (let u of c) try {
                    if ("function" != typeof t[u]) continue;
                    let c = ta(t, u, function(l) {
                        return function() {
                            for (var c = arguments.length, d = Array(c), f = 0; f < c; f++) d[f] = arguments[f];
                            let h = l.apply(this, d);
                            if (tG(h, s, t), !tl(this.canvas, r, a, i)) {
                                o.getId(this.canvas);
                                let r = tF([...d], s, t),
                                    i = {
                                        type: e,
                                        property: u,
                                        args: r
                                    };
                                n(this.canvas, i)
                            }
                            return h
                        }
                    });
                    l.push(c)
                } catch (i) {
                    let r = ti(t, u, {
                        set(t) {
                            n(this.canvas, {
                                type: e,
                                property: u,
                                args: [t],
                                setter: !0
                            })
                        }
                    });
                    l.push(r)
                }
                return l
            }
            class tY {
                reset() {
                    this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers()
                }
                freeze() {
                    this.frozen = !0
                }
                unfreeze() {
                    this.frozen = !1
                }
                lock() {
                    this.locked = !0
                }
                unlock() {
                    this.locked = !1
                }
                initCanvasMutationObserver(t, e, n, r) {
                    this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
                    let i = function(t, e, n, r) {
                            let i = [];
                            try {
                                let a = ta(t.HTMLCanvasElement.prototype, "getContext", function(t) {
                                    return function(i) {
                                        for (var a = arguments.length, o = Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++) o[s - 1] = arguments[s];
                                        return !tl(this, e, n, r) && !("__context" in this) && (this.__context = i), t.apply(this, [i, ...o])
                                    }
                                });
                                i.push(a)
                            } catch (t) {
                                console.error("failed to patch HTMLCanvasElement.prototype.getContext")
                            }
                            return () => {
                                i.forEach(t => t())
                            }
                        }(t, e, r, n),
                        a = function(t, e, n, r, i, a) {
                            let o = [],
                                s = Object.getOwnPropertyNames(e.CanvasRenderingContext2D.prototype);
                            for (let a of s) try {
                                if ("function" != typeof e.CanvasRenderingContext2D.prototype[a]) continue;
                                let s = ta(e.CanvasRenderingContext2D.prototype, a, function(e) {
                                    return function() {
                                        for (var o = arguments.length, s = Array(o), l = 0; l < o; l++) s[l] = arguments[l];
                                        return !tl(this.canvas, n, i, r) && setTimeout(() => {
                                            let e = [...s];
                                            if ("drawImage" === a && e[0] && e[0] instanceof HTMLCanvasElement) {
                                                let t = e[0],
                                                    n = t.getContext("2d"),
                                                    r = null == n ? void 0 : n.getImageData(0, 0, t.width, t.height),
                                                    i = null == r ? void 0 : r.data;
                                                e[0] = JSON.stringify(i)
                                            }
                                            t(this.canvas, {
                                                type: b["2D"],
                                                property: a,
                                                args: e
                                            })
                                        }, 0), e.apply(this, s)
                                    }
                                });
                                o.push(s)
                            } catch (r) {
                                let n = ti(e.CanvasRenderingContext2D.prototype, a, {
                                    set(e) {
                                        t(this.canvas, {
                                            type: b["2D"],
                                            property: a,
                                            args: [e],
                                            setter: !0
                                        })
                                    }
                                });
                                o.push(n)
                            }
                            return () => {
                                o.forEach(t => t())
                            }
                        }(this.processMutation.bind(this), t, e, r, n, this.mirror),
                        o = function(t, e, n, r, i, a) {
                            let o = [];
                            return o.push(...tH(e.WebGLRenderingContext.prototype, b.WebGL, t, n, r, i, a, e)), void 0 !== e.WebGL2RenderingContext && o.push(...tH(e.WebGL2RenderingContext.prototype, b.WebGL2, t, n, r, i, a, e)), () => {
                                o.forEach(t => t())
                            }
                        }(this.processMutation.bind(this), t, e, r, n, this.mirror);
                    this.resetObservers = () => {
                        i(), a(), o()
                    }
                }
                startPendingCanvasMutationFlusher() {
                    requestAnimationFrame(() => this.flushPendingCanvasMutations())
                }
                startRAFTimestamping() {
                    let t = e => {
                        this.rafStamps.latestId = e, requestAnimationFrame(t)
                    };
                    requestAnimationFrame(t)
                }
                flushPendingCanvasMutations() {
                    this.pendingCanvasMutations.forEach((t, e) => {
                        let n = this.mirror.getId(e);
                        this.flushPendingCanvasMutationFor(e, n)
                    }), requestAnimationFrame(() => this.flushPendingCanvasMutations())
                }
                flushPendingCanvasMutationFor(t, e) {
                    if (this.frozen || this.locked) return;
                    let n = this.pendingCanvasMutations.get(t);
                    if (!n || -1 === e) return;
                    let r = n.map(t => {
                            let e = function(t, e) {
                                var n = {};
                                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && 0 > e.indexOf(r) && (n[r] = t[r]);
                                if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                                    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++) 0 > e.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
                                return n
                            }(t, ["type"]);
                            return e
                        }),
                        {
                            type: i
                        } = n[0];
                    this.mutationCb({
                        id: e,
                        type: i,
                        commands: r
                    }), this.pendingCanvasMutations.delete(t)
                }
                constructor(t) {
                    this.pendingCanvasMutations = new Map, this.rafStamps = {
                        latestId: 0,
                        invokeId: null
                    }, this.frozen = !1, this.locked = !1, this.processMutation = function(t, e) {
                        let n = this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId;
                        (n || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), !this.pendingCanvasMutations.has(t) && this.pendingCanvasMutations.set(t, []), this.pendingCanvasMutations.get(t).push(e)
                    }, this.mutationCb = t.mutationCb, this.mirror = t.mirror, !0 === t.recordCanvas && this.initCanvasMutationObserver(t.win, t.blockClass, t.blockSelector, t.unblockSelector)
                }
            }

            function tj(t) {
                return Object.assign(Object.assign({}, t), {
                    timestamp: Date.now()
                })
            }
            let tq = {
                map: {},
                getId: t => t && t.__sn ? t.__sn.id : -1,
                getNode(t) {
                    return this.map[t] || null
                },
                removeNodeFromMap(t) {
                    let e = t.__sn && t.__sn.id;
                    delete this.map[e], t.childNodes && t.childNodes.forEach(t => this.removeNodeFromMap(t))
                },
                has(t) {
                    return this.map.hasOwnProperty(t)
                },
                reset() {
                    this.map = {}
                }
            };

            function tZ() {
                let t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        emit: n,
                        checkoutEveryNms: r,
                        checkoutEveryNth: i,
                        blockClass: s = "rr-block",
                        blockSelector: l = null,
                        unblockSelector: c = null,
                        ignoreClass: u = "rr-ignore",
                        ignoreSelector: d = null,
                        maskTextClass: f = "rr-mask",
                        maskTextSelector: h = null,
                        maskInputSelector: p = null,
                        unmaskTextSelector: _ = null,
                        unmaskInputSelector: m = null,
                        inlineStylesheet: v = !0,
                        maskAllText: b = !1,
                        maskAllInputs: E,
                        maskInputOptions: w,
                        slimDOMOptions: S,
                        maskInputFn: k,
                        maskTextFn: T,
                        hooks: R,
                        packFn: x,
                        sampling: D = {},
                        mousemoveWait: N,
                        recordCanvas: I = !1,
                        userTriggeredOnInput: O = !1,
                        collectFonts: C = !1,
                        inlineImages: A = !1,
                        plugins: B,
                        keepIframeSrcFn: U = () => !1,
                        onMutation: L
                    } = e;
                if (!n) throw Error("emit function is required");
                void 0 !== N && void 0 === D.mousemove && (D.mousemove = N);
                let M = !0 === E ? {
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
                    } : void 0 !== w ? w : {},
                    P = !0 === S || "all" === S ? {
                        script: !0,
                        comment: !0,
                        headFavicon: !0,
                        headWhitespace: !0,
                        headMetaSocial: !0,
                        headMetaRobots: !0,
                        headMetaHttpEquiv: !0,
                        headMetaVerification: !0,
                        headMetaAuthorship: "all" === S,
                        headMetaDescKeywords: "all" === S
                    } : S || {};
                ! function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                    "NodeList" in t && !t.NodeList.prototype.forEach && (t.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in t && !t.DOMTokenList.prototype.forEach && (t.DOMTokenList.prototype.forEach = Array.prototype.forEach), !Node.prototype.contains && (Node.prototype.contains = function(t) {
                        if (!(0 in arguments)) throw TypeError("1 argument is required");
                        do
                            if (this === t) return !0; while (t = t && t.parentNode);
                        return !1
                    })
                }();
                let z = 0,
                    G = t => {
                        for (let e of B || []) e.eventProcessor && (t = e.eventProcessor(t));
                        return x && (t = x(t)), t
                    };
                a = (e, a) => {
                    var s;
                    if ((null === (s = tw[0]) || void 0 === s ? void 0 : s.isFrozen()) && e.type !== g.FullSnapshot && !(e.type === g.IncrementalSnapshot && e.data.source === y.Mutation) && tw.forEach(t => t.unfreeze()), n(G(e), a), e.type === g.FullSnapshot) t = e, z = 0;
                    else if (e.type === g.IncrementalSnapshot) {
                        if (e.data.source === y.Mutation && e.data.isAttachIframe) return;
                        z++;
                        let n = i && z >= i,
                            a = r && e.timestamp - t.timestamp > r;
                        (n || a) && o(!0)
                    }
                };
                let F = t => {
                        a(tj({
                            type: g.IncrementalSnapshot,
                            data: Object.assign({
                                source: y.Mutation
                            }, t)
                        }))
                    },
                    W = t => a(tj({
                        type: g.IncrementalSnapshot,
                        data: Object.assign({
                            source: y.Scroll
                        }, t)
                    })),
                    H = t => a(tj({
                        type: g.IncrementalSnapshot,
                        data: Object.assign({
                            source: y.CanvasMutation
                        }, t)
                    })),
                    Y = new tA({
                        mutationCb: F
                    }),
                    j = new tY({
                        recordCanvas: I,
                        mutationCb: H,
                        win: window,
                        blockClass: s,
                        blockSelector: l,
                        unblockSelector: c,
                        mirror: tq
                    }),
                    q = new tB({
                        mutationCb: F,
                        scrollCb: W,
                        bypassOptions: {
                            onMutation: L,
                            blockClass: s,
                            blockSelector: l,
                            unblockSelector: c,
                            maskTextClass: f,
                            maskTextSelector: h,
                            unmaskTextSelector: _,
                            maskInputSelector: p,
                            unmaskInputSelector: m,
                            inlineStylesheet: v,
                            maskAllText: b,
                            maskInputOptions: M,
                            maskTextFn: T,
                            maskInputFn: k,
                            recordCanvas: I,
                            inlineImages: A,
                            sampling: D,
                            slimDOMOptions: P,
                            iframeManager: Y,
                            canvasManager: j
                        },
                        mirror: tq
                    });
                o = function() {
                    var t, e, n, r;
                    let i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    a(tj({
                        type: g.Meta,
                        data: {
                            href: window.location.href,
                            width: ts(),
                            height: to()
                        }
                    }), i), tw.forEach(t => t.lock());
                    let [o, u] = function(t, e) {
                        let {
                            blockClass: n = "rr-block",
                            blockSelector: r = null,
                            unblockSelector: i = null,
                            maskTextClass: a = "rr-mask",
                            maskTextSelector: o = null,
                            unmaskTextSelector: s = null,
                            inlineStylesheet: l = !0,
                            inlineImages: c = !1,
                            recordCanvas: u = !1,
                            maskInputSelector: d = null,
                            unmaskInputSelector: f = null,
                            maskAllText: h = !1,
                            maskAllInputs: p = !1,
                            maskTextFn: _,
                            maskInputFn: m,
                            slimDOM: g = !1,
                            dataURLOptions: y,
                            preserveWhiteSpace: v,
                            onSerialize: b,
                            onIframeLoad: E,
                            iframeLoadTimeout: w,
                            keepIframeSrcFn: S = () => !1
                        } = e || {}, k = {}, T = !0 === p ? {
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
                        } : !1 === p ? {} : p, R = !0 === g || "all" === g ? {
                            script: !0,
                            comment: !0,
                            headFavicon: !0,
                            headWhitespace: !0,
                            headMetaDescKeywords: "all" === g,
                            headMetaSocial: !0,
                            headMetaRobots: !0,
                            headMetaHttpEquiv: !0,
                            headMetaAuthorship: !0,
                            headMetaVerification: !0
                        } : !1 === g ? {} : g;
                        return [Q(t, {
                            doc: t,
                            map: k,
                            blockClass: n,
                            blockSelector: r,
                            unblockSelector: i,
                            maskTextClass: a,
                            maskTextSelector: o,
                            unmaskTextSelector: s,
                            skipChild: !1,
                            inlineStylesheet: l,
                            maskInputSelector: d,
                            unmaskInputSelector: f,
                            maskAllText: h,
                            maskInputOptions: T,
                            maskTextFn: _,
                            maskInputFn: m,
                            slimDOMOptions: R,
                            dataURLOptions: y,
                            inlineImages: c,
                            recordCanvas: u,
                            preserveWhiteSpace: v,
                            onSerialize: b,
                            onIframeLoad: E,
                            iframeLoadTimeout: w,
                            keepIframeSrcFn: S
                        }), k]
                    }(document, {
                        blockClass: s,
                        blockSelector: l,
                        unblockSelector: c,
                        maskTextClass: f,
                        maskTextSelector: h,
                        unmaskTextSelector: _,
                        maskInputSelector: p,
                        unmaskInputSelector: m,
                        inlineStylesheet: v,
                        maskAllText: b,
                        maskAllInputs: M,
                        maskTextFn: T,
                        slimDOM: P,
                        recordCanvas: I,
                        inlineImages: A,
                        onSerialize: t => {
                            td(t) && Y.addIframe(t), tf(t) && q.addShadowRoot(t.shadowRoot, document)
                        },
                        onIframeLoad: (t, e) => {
                            Y.attachIframe(t, e), q.observeAttachShadow(t)
                        },
                        keepIframeSrcFn: U
                    });
                    if (!o) return console.warn("Failed to snapshot the document");
                    tq.map = u, a(tj({
                        type: g.FullSnapshot,
                        data: {
                            node: o,
                            initialOffset: {
                                left: void 0 !== window.pageXOffset ? window.pageXOffset : (null == document ? void 0 : document.documentElement.scrollLeft) || (null === (e = null === (t = null == document ? void 0 : document.body) || void 0 === t ? void 0 : t.parentElement) || void 0 === e ? void 0 : e.scrollLeft) || (null == document ? void 0 : document.body.scrollLeft) || 0,
                                top: void 0 !== window.pageYOffset ? window.pageYOffset : (null == document ? void 0 : document.documentElement.scrollTop) || (null === (r = null === (n = null == document ? void 0 : document.body) || void 0 === n ? void 0 : n.parentElement) || void 0 === r ? void 0 : r.scrollTop) || (null == document ? void 0 : document.body.scrollTop) || 0
                            }
                        }
                    })), tw.forEach(t => t.unlock())
                };
                try {
                    let t = [];
                    t.push(tt("DOMContentLoaded", () => {
                        a(tj({
                            type: g.DomContentLoaded,
                            data: {}
                        }))
                    }));
                    let e = t => {
                        var e;
                        return tE(tI)({
                            onMutation: L,
                            mutationCb: F,
                            mousemoveCb: (t, e) => a(tj({
                                type: g.IncrementalSnapshot,
                                data: {
                                    source: e,
                                    positions: t
                                }
                            })),
                            mouseInteractionCb: t => a(tj({
                                type: g.IncrementalSnapshot,
                                data: Object.assign({
                                    source: y.MouseInteraction
                                }, t)
                            })),
                            scrollCb: W,
                            viewportResizeCb: t => a(tj({
                                type: g.IncrementalSnapshot,
                                data: Object.assign({
                                    source: y.ViewportResize
                                }, t)
                            })),
                            inputCb: t => a(tj({
                                type: g.IncrementalSnapshot,
                                data: Object.assign({
                                    source: y.Input
                                }, t)
                            })),
                            mediaInteractionCb: t => a(tj({
                                type: g.IncrementalSnapshot,
                                data: Object.assign({
                                    source: y.MediaInteraction
                                }, t)
                            })),
                            styleSheetRuleCb: t => a(tj({
                                type: g.IncrementalSnapshot,
                                data: Object.assign({
                                    source: y.StyleSheetRule
                                }, t)
                            })),
                            styleDeclarationCb: t => a(tj({
                                type: g.IncrementalSnapshot,
                                data: Object.assign({
                                    source: y.StyleDeclaration
                                }, t)
                            })),
                            canvasMutationCb: H,
                            fontCb: t => a(tj({
                                type: g.IncrementalSnapshot,
                                data: Object.assign({
                                    source: y.Font
                                }, t)
                            })),
                            blockClass: s,
                            ignoreClass: u,
                            ignoreSelector: d,
                            maskTextClass: f,
                            maskTextSelector: h,
                            unmaskTextSelector: _,
                            maskInputSelector: p,
                            unmaskInputSelector: m,
                            maskInputOptions: M,
                            inlineStylesheet: v,
                            sampling: D,
                            recordCanvas: I,
                            inlineImages: A,
                            userTriggeredOnInput: O,
                            collectFonts: C,
                            doc: t,
                            maskAllText: b,
                            maskInputFn: k,
                            maskTextFn: T,
                            blockSelector: l,
                            unblockSelector: c,
                            slimDOMOptions: P,
                            mirror: tq,
                            iframeManager: Y,
                            shadowDomManager: q,
                            canvasManager: j,
                            plugins: (null === (e = null == B ? void 0 : B.filter(t => t.observer)) || void 0 === e ? void 0 : e.map(t => ({
                                observer: t.observer,
                                options: t.options,
                                callback: e => a(tj({
                                    type: g.Plugin,
                                    data: {
                                        plugin: t.name,
                                        payload: e
                                    }
                                }))
                            }))) || []
                        }, R)
                    };
                    Y.addLoadListener(n => {
                        try {
                            t.push(e(n.contentDocument))
                        } catch (t) {
                            console.warn(t)
                        }
                    });
                    let n = () => {
                        o(), t.push(e(document))
                    };
                    return "interactive" === document.readyState || "complete" === document.readyState ? n() : t.push(tt("load", () => {
                        a(tj({
                            type: g.Load,
                            data: {}
                        })), n()
                    }, window)), () => {
                        t.forEach(t => t())
                    }
                } catch (t) {
                    console.warn(t)
                }
            }

            function tV(t) {
                return t > 9999999999 ? t : 1e3 * t
            }
            tZ.addCustomEvent = (t, e) => {
                if (!a) throw Error("please add custom event after start recording");
                a(tj({
                    type: g.Custom,
                    data: {
                        tag: t,
                        payload: e
                    }
                }))
            }, tZ.freezePage = () => {
                tw.forEach(t => t.freeze())
            }, tZ.takeFullSnapshot = t => {
                if (!o) throw Error("please take full snapshot after start recording");
                o(t)
            }, tZ.mirror = tq;

            function tK(t, e) {
                "sentry.transaction" !== e.category && (["ui.click", "ui.input"].includes(e.category) ? t.triggerUserActivity() : t.checkAndHandleExpiredSession(), t.addUpdate(() => (t.throttledAddEvent({
                    type: g.Custom,
                    timestamp: 1e3 * (e.timestamp || 0),
                    data: {
                        tag: "breadcrumb",
                        payload: (0, T.normalize)(e, 10, 1e3)
                    }
                }), "console" === e.category)))
            }

            function tX(t) {
                let e = tJ(t);
                if (!e || !(e instanceof Element)) return e;
                let n = e.closest("button,a");
                return n || e
            }

            function tJ(t) {
                return function(t) {
                    return "object" == typeof t && !!t && "target" in t
                }(t) ? t.target : t
            }
            class t$ {
                __init() {
                    this._lastMutation = 0
                }
                __init2() {
                    this._lastScroll = 0
                }
                __init3() {
                    this._clicks = []
                }
                addListeners() {
                    var t;
                    let e = () => {
                        this._lastScroll = t0()
                    };
                    let n = (t = () => {
                            this._lastMutation = t0()
                        }, !s && (s = [], function() {
                            (0, T.fill)(x, "open", function(t) {
                                return function() {
                                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                    if (s) try {
                                        s.forEach(t => t())
                                    } catch (t) {}
                                    return t.apply(x, n)
                                }
                            })
                        }()), s.push(t), () => {
                            let e = s ? s.indexOf(t) : -1;
                            e > -1 && s.splice(e, 1)
                        }),
                        r = t => {
                            if (!t.target) return;
                            let e = tX(t);
                            e && this._handleMultiClick(e)
                        },
                        i = new MutationObserver(() => {
                            this._lastMutation = t0()
                        });
                    i.observe(x.document.documentElement, {
                        attributes: !0,
                        characterData: !0,
                        childList: !0,
                        subtree: !0
                    }), x.addEventListener("scroll", e, {
                        passive: !0
                    }), x.addEventListener("click", r, {
                        passive: !0
                    }), this._teardown = () => {
                        x.removeEventListener("scroll", e), x.removeEventListener("click", r), n(), i.disconnect(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0
                    }
                }
                removeListeners() {
                    this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
                }
                handleClick(t, e) {
                    var n;
                    if (function(t, e) {
                            return !!(!tQ.includes(t.tagName) || "INPUT" === t.tagName && !["submit", "button"].includes(t.getAttribute("type") || "") || "A" === t.tagName && (t.hasAttribute("download") || t.hasAttribute("target") && "_self" !== t.getAttribute("target")) || e && t.matches(e)) || !1
                        }(e, this._ignoreSelector) || ! function(t) {
                            return !!(t.data && "number" == typeof t.data.nodeId && t.timestamp)
                        }(t)) return;
                    let r = {
                        timestamp: (n = t.timestamp) > 9999999999 ? n / 1e3 : n,
                        clickBreadcrumb: t,
                        clickCount: 0,
                        node: e
                    };
                    this._clicks.push(r), 1 === this._clicks.length && this._scheduleCheckClicks()
                }
                _handleMultiClick(t) {
                    this._getClicks(t).forEach(t => {
                        t.clickCount++
                    })
                }
                _getClicks(t) {
                    return this._clicks.filter(e => e.node === t)
                }
                _checkClicks() {
                    let t = [],
                        e = t0();
                    for (let n of (this._clicks.forEach(n => {
                            !n.mutationAfter && this._lastMutation && (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0), !n.scrollAfter && this._lastScroll && (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0), n.timestamp + this._timeout <= e && t.push(n)
                        }), t)) {
                        let t = this._clicks.indexOf(n);
                        t > -1 && (this._generateBreadcrumbs(n), this._clicks.splice(t, 1))
                    }
                    this._clicks.length && this._scheduleCheckClicks()
                }
                _generateBreadcrumbs(t) {
                    let e = this._replay,
                        n = t.scrollAfter && t.scrollAfter <= this._scollTimeout,
                        r = t.mutationAfter && t.mutationAfter <= this._threshold,
                        {
                            clickCount: i,
                            clickBreadcrumb: a
                        } = t;
                    if (!n && !r) {
                        let n = 1e3 * Math.min(t.mutationAfter || this._timeout, this._timeout),
                            r = n < 1e3 * this._timeout ? "mutation" : "timeout",
                            o = {
                                type: "default",
                                message: a.message,
                                timestamp: a.timestamp,
                                category: "ui.slowClickDetected",
                                data: {
                                    ...a.data,
                                    url: x.location.href,
                                    route: e.getCurrentRoute(),
                                    timeAfterClickMs: n,
                                    endReason: r,
                                    clickCount: i || 1
                                }
                            };
                        this._addBreadcrumbEvent(e, o);
                        return
                    }
                    if (i > 1) {
                        let t = {
                            type: "default",
                            message: a.message,
                            timestamp: a.timestamp,
                            category: "ui.multiClick",
                            data: {
                                ...a.data,
                                url: x.location.href,
                                route: e.getCurrentRoute(),
                                clickCount: i,
                                metric: !0
                            }
                        };
                        this._addBreadcrumbEvent(e, t)
                    }
                }
                _scheduleCheckClicks() {
                    this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = setTimeout(() => this._checkClicks(), 1e3)
                }
                constructor(t, e, n = tK) {
                    t$.prototype.__init.call(this), t$.prototype.__init2.call(this), t$.prototype.__init3.call(this), this._timeout = e.timeout / 1e3, this._threshold = e.threshold / 1e3, this._scollTimeout = e.scrollTimeout / 1e3, this._replay = t, this._ignoreSelector = e.ignoreSelector, this._addBreadcrumbEvent = n
                }
            }
            let tQ = ["A", "BUTTON", "INPUT"];

            function t0() {
                return Date.now() / 1e3
            }

            function t1(t) {
                return {
                    timestamp: Date.now() / 1e3,
                    type: "default",
                    ...t
                }
            }(_ = S || (S = {}))[_.Document = 0] = "Document", _[_.DocumentType = 1] = "DocumentType", _[_.Element = 2] = "Element", _[_.Text = 3] = "Text", _[_.CDATA = 4] = "CDATA", _[_.Comment = 5] = "Comment";
            let t2 = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled"]),
                t5 = t => e => {
                    if (!t.isEnabled()) return;
                    let n = function(t) {
                        let {
                            target: e,
                            message: n
                        } = function(t) {
                            let e;
                            let n = "click" === t.name,
                                r = null;
                            try {
                                r = n ? tX(t.event) : tJ(t.event), e = (0, T.htmlTreeAsString)(r, {
                                    maxStringLength: 200
                                }) || "<unknown>"
                            } catch (t) {
                                e = "<unknown>"
                            }
                            return {
                                target: r,
                                message: e
                            }
                        }(t);
                        return t1({
                            category: "ui.".concat(t.name),
                            ...t3(e, n)
                        })
                    }(e);
                    if (!n) return;
                    let r = "click" === e.name,
                        i = r && e.event;
                    r && t.clickDetector && i && !i.altKey && !i.metaKey && !i.ctrlKey && !i.shiftKey && ! function(t, e, n) {
                        t.handleClick(e, n)
                    }(t.clickDetector, n, tX(e.event)), tK(t, n)
                };

            function t3(t, e) {
                let n = t && function(t) {
                    return "__sn" in t
                }(t) && t.__sn.type === S.Element ? t.__sn : null;
                return {
                    message: e,
                    data: n ? {
                        nodeId: n.id,
                        node: {
                            id: n.id,
                            tagName: n.tagName,
                            textContent: t ? Array.from(t.childNodes).map(t => "__sn" in t && t.__sn.type === S.Text && t.__sn.textContent).filter(Boolean).map(t => t.trim()).join("") : "",
                            attributes: function(t) {
                                let e = {};
                                for (let n in t)
                                    if (t2.has(n)) {
                                        let r = n;
                                        ("data-testid" === n || "data-test-id" === n) && (r = "testId"), e[r] = t[n]
                                    } return e
                            }(n.attributes)
                        }
                    } : {}
                }
            }
            let t6 = ["name", "type", "startTime", "transferSize", "duration"];

            function t4(t) {
                return function(e) {
                    return t6.every(n => t[n] === e[n])
                }
            }
            class t8 extends Error {
                constructor() {
                    super("Event buffer exceeded maximum size of ".concat(2e7, "."))
                }
            }
            class t7 {
                __init() {
                    this._totalSize = 0
                }
                get hasEvents() {
                    return this.events.length > 0
                }
                get type() {
                    return "sync"
                }
                destroy() {
                    this.events = []
                }
                async addEvent(t) {
                    let e = JSON.stringify(t).length;
                    if (this._totalSize += e, this._totalSize > 2e7) throw new t8;
                    this.events.push(t)
                }
                finish() {
                    return new Promise(t => {
                        let e = this.events;
                        this.clear(), t(JSON.stringify(e))
                    })
                }
                clear() {
                    this.events = [], this._totalSize = 0
                }
                getEarliestTimestamp() {
                    let t = this.events.map(t => t.timestamp).sort()[0];
                    return t ? tV(t) : null
                }
                constructor() {
                    t7.prototype.__init.call(this), this.events = []
                }
            }
            class t9 {
                ensureReady() {
                    return this._ensureReadyPromise ? this._ensureReadyPromise : (this._ensureReadyPromise = new Promise((t, e) => {
                        this._worker.addEventListener("message", n => {
                            let {
                                data: r
                            } = n;
                            r.success ? t() : e()
                        }, {
                            once: !0
                        }), this._worker.addEventListener("error", t => {
                            e(t)
                        }, {
                            once: !0
                        })
                    }), this._ensureReadyPromise)
                }
                destroy() {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.log("[Replay] Destroying compression worker"), this._worker.terminate()
                }
                postMessage(t, e) {
                    let n = this._getAndIncrementId();
                    return new Promise((r, i) => {
                        let a = e => {
                            let {
                                data: o
                            } = e;
                            if (o.method === t) {
                                if (o.id === n) {
                                    if (this._worker.removeEventListener("message", a), !o.success) {
                                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.error("[Replay]", o.response), i(Error("Error in compression worker"));
                                        return
                                    }
                                    r(o.response)
                                }
                            }
                        };
                        this._worker.addEventListener("message", a), this._worker.postMessage({
                            id: n,
                            method: t,
                            arg: e
                        })
                    })
                }
                _getAndIncrementId() {
                    return this._id++
                }
                constructor(t) {
                    this._worker = t, this._id = 0
                }
            }
            class et {
                __init() {
                    this._totalSize = 0
                }
                get hasEvents() {
                    return !!this._earliestTimestamp
                }
                get type() {
                    return "worker"
                }
                ensureReady() {
                    return this._worker.ensureReady()
                }
                destroy() {
                    this._worker.destroy()
                }
                addEvent(t) {
                    let e = tV(t.timestamp);
                    (!this._earliestTimestamp || e < this._earliestTimestamp) && (this._earliestTimestamp = e);
                    let n = JSON.stringify(t);
                    return (this._totalSize += n.length, this._totalSize > 2e7) ? Promise.reject(new t8) : this._sendEventToWorker(n)
                }
                finish() {
                    return this._finishRequest()
                }
                clear() {
                    this._earliestTimestamp = null, this._totalSize = 0, this._worker.postMessage("clear")
                }
                getEarliestTimestamp() {
                    return this._earliestTimestamp
                }
                _sendEventToWorker(t) {
                    return this._worker.postMessage("addEvent", t)
                }
                async _finishRequest() {
                    let t = await this._worker.postMessage("finish");
                    return this._earliestTimestamp = null, this._totalSize = 0, t
                }
                constructor(t) {
                    et.prototype.__init.call(this), this._worker = new t9(t), this._earliestTimestamp = null
                }
            }
            class ee {
                get type() {
                    return this._used.type
                }
                get hasEvents() {
                    return this._used.hasEvents
                }
                destroy() {
                    this._fallback.destroy(), this._compression.destroy()
                }
                clear() {
                    return this._used.clear()
                }
                getEarliestTimestamp() {
                    return this._used.getEarliestTimestamp()
                }
                addEvent(t) {
                    return this._used.addEvent(t)
                }
                async finish() {
                    return await this.ensureWorkerIsLoaded(), this._used.finish()
                }
                ensureWorkerIsLoaded() {
                    return this._ensureWorkerIsLoadedPromise
                }
                async _ensureWorkerIsLoaded() {
                    try {
                        await this._compression.ensureReady()
                    } catch (t) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.log("[Replay] Failed to load the compression worker, falling back to simple buffer");
                        return
                    }
                    await this._switchToCompressionWorker()
                }
                async _switchToCompressionWorker() {
                    let {
                        events: t
                    } = this._fallback, e = [];
                    for (let n of t) e.push(this._compression.addEvent(n));
                    this._used = this._compression;
                    try {
                        await Promise.all(e)
                    } catch (t) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.warn("[Replay] Failed to add events when switching buffers.", t)
                    }
                }
                constructor(t) {
                    this._fallback = new t7, this._compression = new et(t), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
                }
            }

            function en() {
                try {
                    return "sessionStorage" in x && !!x.sessionStorage
                } catch (t) {
                    return !1
                }
            }

            function er(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : +new Date;
                return null === t || void 0 === e || !!(e < 0) || 0 !== e && t + e <= n
            }

            function ei(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : +new Date;
                return er(t.started, e.maxSessionLife, n) || er(t.lastActivity, e.sessionIdleExpire, n)
            }

            function ea(t) {
                return void 0 !== t && Math.random() < t
            }

            function eo(t) {
                if (en()) try {
                    x.sessionStorage.setItem(D, JSON.stringify(t))
                } catch (t) {}
            }

            function es(t) {
                let e = Date.now(),
                    n = t.id || (0, T.uuid4)(),
                    r = t.started || e,
                    i = t.lastActivity || e,
                    a = t.segmentId || 0,
                    o = t.sampled;
                return {
                    id: n,
                    started: r,
                    lastActivity: i,
                    segmentId: a,
                    sampled: o,
                    shouldRefresh: !0
                }
            }

            function el(t) {
                let {
                    timeouts: e,
                    currentSession: n,
                    stickySession: r,
                    sessionSampleRate: i,
                    allowBuffering: a
                } = t, o = n || r && function() {
                    if (!en()) return null;
                    try {
                        let t = x.sessionStorage.getItem(D);
                        if (!t) return null;
                        let e = JSON.parse(t);
                        return es(e)
                    } catch (t) {
                        return null
                    }
                }();
                if (o) {
                    let t = ei(o, e);
                    if (!t || a && o.shouldRefresh) return {
                        type: "saved",
                        session: o
                    };
                    if (o.shouldRefresh)("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.log("[Replay] Session has expired");
                    else {
                        let t = es({
                            sampled: !1
                        });
                        return {
                            type: "new",
                            session: t
                        }
                    }
                }
                let s = function(t) {
                    var e, n;
                    let {
                        sessionSampleRate: r,
                        allowBuffering: i,
                        stickySession: a = !1
                    } = t;
                    let o = (e = r, n = i, ea(e) ? "session" : !!n && "buffer"),
                        s = es({
                            sampled: o
                        });
                    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.log("[Replay] Creating new session: ".concat(s.id)), a && eo(s), s
                }({
                    stickySession: r,
                    sessionSampleRate: i,
                    allowBuffering: a
                });
                return {
                    type: "new",
                    session: s
                }
            }
            async function ec(t, e, n) {
                if (!t.eventBuffer || t.isPaused()) return null;
                let r = tV(e.timestamp);
                if (r + t.timeouts.sessionIdlePause < Date.now()) return null;
                try {
                    n && t.eventBuffer.clear();
                    let r = t.getOptions(),
                        i = function(t, e) {
                            try {
                                if ("function" == typeof e && t.type === g.Custom) return e(t)
                            } catch (t) {
                                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.error("[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...", t), null
                            }
                            return t
                        }(e, r.beforeAddRecordingEvent);
                    if (!i) return;
                    return await t.eventBuffer.addEvent(i)
                } catch (r) {
                    let e = r && r instanceof t8 ? "addEventSizeExceeded" : "addEvent";
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.error(r), await t.stop(e);
                    let n = (0, k.getCurrentHub)().getClient();
                    n && n.recordDroppedEvent("internal_sdk_error", "replay")
                }
            }

            function eu(t) {
                return !t.type
            }

            function ed(t) {
                return "transaction" === t.type
            }

            function ef(t) {
                let e = function() {
                    let t = (0, k.getCurrentHub)().getClient();
                    if (!t) return !1;
                    let e = t.getTransport();
                    return !!e && (e.send.__sentry__baseTransport__ || !1)
                }();
                return (n, r) => {
                    if (n.type && !ed(n)) return;
                    let i = r && r.statusCode;
                    if (!e || !!i && !(i < 200) && !(i >= 300)) {
                        if (ed(n) && n.contexts && n.contexts.trace && n.contexts.trace.trace_id) {
                            t.getContext().traceIds.add(n.contexts.trace.trace_id);
                            return
                        }
                        if (!n.type) n.event_id && t.getContext().errorIds.add(n.event_id), "buffer" === t.recordingMode && n.tags && n.tags.replayId && setTimeout(() => {
                            t.sendBufferedReplayOrFlush()
                        })
                    }
                }
            }

            function eh(t, e) {
                return e.map(e => {
                    let {
                        type: n,
                        start: r,
                        end: i,
                        name: a,
                        data: o
                    } = e, s = t.throttledAddEvent({
                        type: g.Custom,
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

            function ep(t, e) {
                var n, r;
                if (!!t.isEnabled() && null !== e) {
                    if (n = t, r = e.name, !((!("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) || !n.getOptions()._experiments.traceInternals) && function(t) {
                            let e = (0, k.getCurrentHub)().getClient(),
                                n = e && e.getDsn();
                            return !!n && t.includes(n.host)
                        }(r))) t.addUpdate(() => (eh(t, [e]), !0))
                }
            }
            let e_ = ["true", "false", "null"];

            function em(t) {
                let e = function(t) {
                    let e = [];
                    for (let n = 0; n < t.length; n++)(function(t, e, n) {
                        let r = t[t.length - 1],
                            i = e[n];
                        if (!/\s/.test(i)) {
                            if ('"' === i && ! function t(e, n) {
                                    let r = e[n - 1];
                                    return "\\" === r && !t(e, n - 1)
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
                    let n = t,
                        r = e.length - 1,
                        i = e[r];
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
                                    let e = t.lastIndexOf(":"),
                                        n = t.slice(e + 1);
                                    return e_.includes(n.trim()) ? "".concat(t, ',"~~":"~~"') : "".concat(t.slice(0, e + 1), '"~~"')
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
                                    let e = function(t) {
                                        for (let e = t.length - 1; e >= 0; e--) {
                                            let n = t[e];
                                            if ("," === n || "[" === n) return e
                                        }
                                        return -1
                                    }(t);
                                    if (e > -1) {
                                        let n = t.slice(e + 1);
                                        return e_.includes(n.trim()) ? "".concat(t, ',"~~"') : "".concat(t.slice(0, e + 1), '"~~"')
                                    }
                                    return t
                                }(t);
                            case 23:
                                return "".concat(t, ',"~~"')
                        }
                        return t
                    }(n, i);
                    for (let t = r; t >= 0; t--) {
                        let r = e[t];
                        switch (r) {
                            case 10:
                                n = "".concat(n, "}");
                                break;
                            case 20:
                                n = "".concat(n, "]")
                        }
                    }
                    return n
                }(t, e)
            }

            function eg(t, e) {
                if (t) try {
                    if ("string" == typeof t) return e.encode(t).length;
                    if (t instanceof URLSearchParams) return e.encode(t.toString()).length;
                    if (t instanceof FormData) {
                        let n = ek(t);
                        return e.encode(n).length
                    }
                    if (t instanceof Blob) return t.size;
                    if (t instanceof ArrayBuffer) return t.byteLength
                } catch (t) {}
            }

            function ey(t) {
                if (!t) return;
                let e = parseInt(t, 10);
                return isNaN(e) ? void 0 : e
            }

            function ev(t) {
                return "string" == typeof t ? t : t instanceof URLSearchParams ? t.toString() : t instanceof FormData ? ek(t) : void 0
            }

            function eb(t, e) {
                if (!e) return null;
                let {
                    startTimestamp: n,
                    endTimestamp: r,
                    url: i,
                    method: a,
                    statusCode: o,
                    request: s,
                    response: l
                } = e, c = {
                    type: t,
                    start: n / 1e3,
                    end: r / 1e3,
                    name: i,
                    data: (0, T.dropUndefinedKeys)({
                        method: a,
                        statusCode: o,
                        request: s,
                        response: l
                    })
                };
                return c
            }

            function eE(t) {
                return {
                    headers: {},
                    size: t,
                    _meta: {
                        warnings: ["URL_SKIPPED"]
                    }
                }
            }

            function ew(t, e, n) {
                if (!e && 0 === Object.keys(t).length) return;
                if (!e) return {
                    headers: t
                };
                if (!n) return {
                    headers: t,
                    size: e
                };
                let r = {
                        headers: t,
                        size: e
                    },
                    {
                        body: i,
                        warnings: a
                    } = function(t) {
                        if (!t || "string" != typeof t) return {
                            body: t,
                            warnings: []
                        };
                        let e = t.length > 15e4;
                        if (function(t) {
                                let e = t[0],
                                    n = t[t.length - 1];
                                return "[" === e && "]" === n || "{" === e && "}" === n
                            }(t)) try {
                            let n = e ? em(t.slice(0, 15e4)) : t,
                                r = JSON.parse(n);
                            return {
                                body: r,
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
                    }(n);
                return r.body = i, a.length > 0 && (r._meta = {
                    warnings: a
                }), r
            }

            function eS(t, e) {
                return Object.keys(t).reduce((n, r) => {
                    let i = r.toLowerCase();
                    return e.includes(i) && t[r] && (n[i] = t[r]), n
                }, {})
            }

            function ek(t) {
                return new URLSearchParams(t).toString()
            }

            function eT(t, e) {
                let n = function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x.document.baseURI;
                    if (t.startsWith("http://") || t.startsWith("https://") || t.startsWith(x.location.origin)) return t;
                    let n = new URL(t, e);
                    if (n.origin !== new URL(e).origin) return t;
                    let r = n.href;
                    return !t.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r
                }(t);
                return (0, T.stringMatchesSomePattern)(n, e)
            }
            async function eR(t, e, n) {
                try {
                    let r = await ex(t, e, n),
                        i = eb("resource.fetch", r);
                    ep(n.replay, i)
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.error("[Replay] Failed to capture fetch breadcrumb", t)
                }
            }
            async function ex(t, e, n) {
                let {
                    startTimestamp: r,
                    endTimestamp: i
                } = e, {
                    url: a,
                    method: o,
                    status_code: s = 0,
                    request_body_size: l,
                    response_body_size: c
                } = t.data, u = eT(a, n.networkDetailAllowUrls) && !eT(a, n.networkDetailDenyUrls), d = u ? function(t, e, n) {
                    let {
                        networkCaptureBodies: r,
                        networkRequestHeaders: i
                    } = t, a = function(t, e) {
                        return 1 === t.length && "string" != typeof t[0] ? eC(t[0], e) : 2 === t.length ? eC(t[1], e) : {}
                    }(e, i);
                    if (!r) return ew(a, n, void 0);
                    let o = eI(e),
                        s = ev(o);
                    return ew(a, n, s)
                }(n, e.input, l) : eE(l), f = await eD(u, n, e.response, c);
                return {
                    startTimestamp: r,
                    endTimestamp: i,
                    url: a,
                    method: o,
                    statusCode: s,
                    request: d,
                    response: f
                }
            }
            async function eD(t, e, n, r) {
                let {
                    networkCaptureBodies: i,
                    textEncoder: a,
                    networkResponseHeaders: o
                } = e;
                if (!t && void 0 !== r) return eE(r);
                let s = eO(n.headers, o);
                if (!i && void 0 !== r) return ew(s, r, void 0);
                try {
                    let e = n.clone(),
                        o = await eN(e),
                        l = o && o.length && void 0 === r ? eg(o, a) : r;
                    if (!t) return eE(l);
                    if (i) return ew(s, l, o);
                    return ew(s, l, void 0)
                } catch (t) {
                    return ew(s, r, void 0)
                }
            }
            async function eN(t) {
                try {
                    return await t.text()
                } catch (t) {
                    return
                }
            }

            function eI() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                if (2 === t.length && "object" == typeof t[1]) return t[1].body
            }

            function eO(t, e) {
                let n = {};
                return e.forEach(e => {
                    t.get(e) && (n[e] = t.get(e))
                }), n
            }

            function eC(t, e) {
                if (!t) return {};
                let n = t.headers;
                return n ? n instanceof Headers ? eO(n, e) : Array.isArray(n) ? {} : eS(n, e) : {}
            }
            async function eA(t, e, n) {
                try {
                    let r = function(t, e, n) {
                            let {
                                startTimestamp: r,
                                endTimestamp: i,
                                input: a,
                                xhr: o
                            } = e, {
                                url: s,
                                method: l,
                                status_code: c = 0,
                                request_body_size: u,
                                response_body_size: d
                            } = t.data;
                            if (!s) return null;
                            if (!eT(s, n.networkDetailAllowUrls) || eT(s, n.networkDetailDenyUrls)) {
                                let t = eE(u),
                                    e = eE(d);
                                return {
                                    startTimestamp: r,
                                    endTimestamp: i,
                                    url: s,
                                    method: l,
                                    statusCode: c,
                                    request: t,
                                    response: e
                                }
                            }
                            let f = o[T.SENTRY_XHR_DATA_KEY],
                                h = f ? eS(f.request_headers, n.networkRequestHeaders) : {},
                                p = eS(function(t) {
                                    let e = t.getAllResponseHeaders();
                                    return e ? e.split("\r\n").reduce((t, e) => {
                                        let [n, r] = e.split(": ");
                                        return t[n.toLowerCase()] = r, t
                                    }, {}) : {}
                                }(o), n.networkResponseHeaders),
                                _ = ew(h, u, n.networkCaptureBodies ? ev(a) : void 0),
                                m = ew(p, d, n.networkCaptureBodies ? e.xhr.responseText : void 0);
                            return {
                                startTimestamp: r,
                                endTimestamp: i,
                                url: s,
                                method: l,
                                statusCode: c,
                                request: _,
                                response: m
                            }
                        }(t, e, n),
                        i = eb("resource.xhr", r);
                    ep(n.replay, i)
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.error("[Replay] Failed to capture fetch breadcrumb", t)
                }
            }
            let eB = null,
                eU = t => e => {
                    if (!t.isEnabled()) return;
                    let n = function(t) {
                        let e = t.getLastBreadcrumb && t.getLastBreadcrumb();
                        if (eB === e || !e) return null;
                        return (eB = e, !e.category || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(e.category) || e.category.startsWith("ui.")) ? null : "console" === e.category ? function(t) {
                            let e = t.data && t.data.arguments;
                            if (!Array.isArray(e) || 0 === e.length) return t1(t);
                            let n = !1,
                                r = e.map(t => {
                                    if (!t) return t;
                                    if ("string" == typeof t) return t.length > 5e3 ? (n = !0, "".concat(t.slice(0, 5e3), "…")) : t;
                                    if ("object" == typeof t) try {
                                        let e = (0, T.normalize)(t, 7),
                                            r = JSON.stringify(e);
                                        if (r.length > 5e3) {
                                            let t = em(r.slice(0, 5e3)),
                                                e = JSON.parse(t);
                                            return n = !0, e
                                        }
                                        return e
                                    } catch (t) {}
                                    return t
                                });
                            return t1({
                                ...t,
                                data: {
                                    ...t.data,
                                    arguments: r,
                                    ...n ? {
                                        _meta: {
                                            warnings: ["CONSOLE_ARG_TRUNCATED"]
                                        }
                                    } : {}
                                }
                            })
                        }(e) : t1(e)
                    }(e);
                    n && tK(t, n)
                };

            function eL(t) {
                return !!(t && t.on)
            }
            async function eM(t) {
                try {
                    return Promise.all(eh(t, [function(t) {
                        let {
                            jsHeapSizeLimit: e,
                            totalJSHeapSize: n,
                            usedJSHeapSize: r
                        } = t, i = Date.now() / 1e3;
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
                    }(x.performance.memory)]))
                } catch (t) {
                    return []
                }
            }
            let eP = {
                resource: function(t) {
                    let {
                        entryType: e,
                        initiatorType: n,
                        name: r,
                        responseEnd: i,
                        startTime: a,
                        decodedBodySize: o,
                        encodedBodySize: s,
                        responseStatus: l,
                        transferSize: c
                    } = t;
                    return ["fetch", "xmlhttprequest"].includes(n) ? null : {
                        type: "".concat(e, ".").concat(n),
                        start: eG(a),
                        end: eG(i),
                        name: r,
                        data: {
                            size: c,
                            statusCode: l,
                            decodedBodySize: o,
                            encodedBodySize: s
                        }
                    }
                },
                paint: function(t) {
                    let {
                        duration: e,
                        entryType: n,
                        name: r,
                        startTime: i
                    } = t, a = eG(i);
                    return {
                        type: n,
                        name: r,
                        start: a,
                        end: a + e,
                        data: void 0
                    }
                },
                navigation: function(t) {
                    let {
                        entryType: e,
                        name: n,
                        decodedBodySize: r,
                        duration: i,
                        domComplete: a,
                        encodedBodySize: o,
                        domContentLoadedEventStart: s,
                        domContentLoadedEventEnd: l,
                        domInteractive: c,
                        loadEventStart: u,
                        loadEventEnd: d,
                        redirectCount: f,
                        startTime: h,
                        transferSize: p,
                        type: _
                    } = t;
                    return 0 === i ? null : {
                        type: "".concat(e, ".").concat(_),
                        start: eG(h),
                        end: eG(a),
                        name: n,
                        data: {
                            size: p,
                            decodedBodySize: r,
                            encodedBodySize: o,
                            duration: i,
                            domInteractive: c,
                            domContentLoadedEventStart: s,
                            domContentLoadedEventEnd: l,
                            loadEventStart: u,
                            loadEventEnd: d,
                            domComplete: a,
                            redirectCount: f
                        }
                    }
                },
                "largest-contentful-paint": function(t) {
                    let {
                        entryType: e,
                        startTime: n,
                        size: r
                    } = t, i = 0;
                    if (x.performance) {
                        let t = x.performance.getEntriesByType("navigation")[0];
                        i = t && t.activationStart || 0
                    }
                    let a = Math.max(n - i, 0),
                        o = eG(i) + a / 1e3;
                    return {
                        type: e,
                        name: e,
                        start: o,
                        end: o,
                        data: {
                            value: a,
                            size: r,
                            nodeId: tZ.mirror.getId(t.element)
                        }
                    }
                }
            };

            function ez(t) {
                return void 0 === eP[t.entryType] ? null : eP[t.entryType](t)
            }

            function eG(t) {
                return ((T.browserPerformanceTimeOrigin || x.performance.timeOrigin) + t) / 1e3
            }
            async function eF(t) {
                let {
                    client: e,
                    scope: n,
                    replayId: r,
                    event: i
                } = t, a = "object" != typeof e._integrations || null === e._integrations || Array.isArray(e._integrations) ? void 0 : Object.keys(e._integrations), o = await (0, k.prepareEvent)(e.getOptions(), i, {
                    event_id: r,
                    integrations: a
                }, n);
                if (!o) return null;
                o.platform = o.platform || "javascript";
                let s = e.getSdkMetadata && e.getSdkMetadata(),
                    {
                        name: l,
                        version: c
                    } = s && s.sdk || {};
                return o.sdk = {
                    ...o.sdk,
                    name: l || "sentry.javascript.unknown",
                    version: c || "0.0.0"
                }, o
            }
            async function eW(t) {
                var e, n, r, i;
                let a, {
                        recordingData: o,
                        replayId: s,
                        segmentId: l,
                        eventContext: c,
                        timestamp: u,
                        session: d
                    } = t,
                    f = function(t) {
                        let e, {
                                recordingData: n,
                                headers: r
                            } = t,
                            i = "".concat(JSON.stringify(r), "\n");
                        if ("string" == typeof n) e = "".concat(i).concat(n);
                        else {
                            let t = new TextEncoder,
                                r = t.encode(i);
                            (e = new Uint8Array(r.length + n.length)).set(r), e.set(n, r.length)
                        }
                        return e
                    }({
                        recordingData: o,
                        headers: {
                            segment_id: l
                        }
                    }),
                    {
                        urls: h,
                        errorIds: p,
                        traceIds: _,
                        initialTimestamp: m
                    } = c,
                    g = (0, k.getCurrentHub)(),
                    y = g.getClient(),
                    v = g.getScope(),
                    b = y && y.getTransport(),
                    E = y && y.getDsn();
                if (!y || !b || !E || !d.sampled) return;
                let w = {
                        type: "replay_event",
                        replay_start_timestamp: m / 1e3,
                        timestamp: u / 1e3,
                        error_ids: p,
                        trace_ids: _,
                        urls: h,
                        replay_id: s,
                        segment_id: l,
                        replay_type: d.sampled
                    },
                    S = await eF({
                        scope: v,
                        client: y,
                        replayId: s,
                        event: w
                    });
                if (!S) {
                    y.recordDroppedEvent("event_processor", "replay", w), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.log("An event processor returned `null`, will not send event.");
                    return
                }
                delete S.sdkProcessingMetadata;
                let R = (e = S, n = f, r = E, i = y.getOptions().tunnel, (0, T.createEnvelope)((0, T.createEventEnvelopeHeaders)(e, (0, T.getSdkMetadataForEnvelopeHeader)(e), i, r), [
                    [{
                        type: "replay_event"
                    }, e],
                    [{
                        type: "replay_recording",
                        length: "string" == typeof n ? new TextEncoder().encode(n).length : n.length
                    }, n]
                ]));
                try {
                    a = await b.send(R)
                } catch (e) {
                    let t = Error(N);
                    try {
                        t.cause = e
                    } catch (t) {}
                    throw t
                }
                if (!a) return a;
                if ("number" == typeof a.statusCode && (a.statusCode < 200 || a.statusCode >= 300)) throw new eH(a.statusCode);
                return a
            }
            class eH extends Error {
                constructor(t) {
                    super("Transport returned status code ".concat(t))
                }
            }
            async function eY(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        count: 0,
                        interval: 5e3
                    },
                    {
                        recordingData: n,
                        options: r
                    } = t;
                if (n.length) try {
                    return await eW(t), !0
                } catch (n) {
                    if (n instanceof eH) throw n;
                    if ((0, k.setContext)("Replays", {
                            _retryCount: e.count
                        }), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r._experiments && r._experiments.captureExceptions && (0, k.captureException)(n), e.count >= 3) {
                        let t = Error("".concat(N, " - max retries exceeded"));
                        try {
                            t.cause = n
                        } catch (t) {}
                        throw t
                    }
                    return e.interval *= ++e.count, new Promise((n, r) => {
                        setTimeout(async () => {
                            try {
                                await eY(t, e), n(!0)
                            } catch (t) {
                                r(t)
                            }
                        }, e.interval)
                    })
                }
            }
            let ej = "__THROTTLED";
            class eq {
                __init() {
                    this.eventBuffer = null
                }
                __init2() {
                    this.performanceEvents = []
                }
                __init3() {
                    this.recordingMode = "session"
                }
                __init4() {
                    this.timeouts = {
                        sessionIdlePause: 3e5,
                        sessionIdleExpire: 9e5,
                        maxSessionLife: 36e5
                    }
                }
                __init5() {
                    this._performanceObserver = null
                }
                __init6() {
                    this._flushLock = null
                }
                __init7() {
                    this._lastActivity = Date.now()
                }
                __init8() {
                    this._isEnabled = !1
                }
                __init9() {
                    this._isPaused = !1
                }
                __init10() {
                    this._hasInitializedCoreListeners = !1
                }
                __init11() {
                    this._stopRecording = null
                }
                __init12() {
                    this._context = {
                        errorIds: new Set,
                        traceIds: new Set,
                        urls: [],
                        initialTimestamp: Date.now(),
                        initialUrl: ""
                    }
                }
                getContext() {
                    return this._context
                }
                isEnabled() {
                    return this._isEnabled
                }
                isPaused() {
                    return this._isPaused
                }
                getOptions() {
                    return this._options
                }
                initializeSampling() {
                    let {
                        errorSampleRate: t,
                        sessionSampleRate: e
                    } = this._options;
                    if (t <= 0 && e <= 0) return;
                    let n = this._loadAndCheckSession();
                    if (n) {
                        if (!this.session) {
                            this._handleException(Error("Unable to initialize and create session"));
                            return
                        }
                        this.session.sampled && "session" !== this.session.sampled && (this.recordingMode = "buffer"), this._initializeRecording()
                    }
                }
                start() {
                    if (this._isEnabled && "session" === this.recordingMode) throw Error("Replay recording is already in progress");
                    if (this._isEnabled && "buffer" === this.recordingMode) throw Error("Replay buffering is in progress, call `flush()` to save the replay");
                    let t = this.session && this.session.id,
                        {
                            session: e
                        } = el({
                            timeouts: this.timeouts,
                            stickySession: !!this._options.stickySession,
                            currentSession: this.session,
                            sessionSampleRate: 1,
                            allowBuffering: !1
                        });
                    e.previousSessionId = t, this.session = e, this._initializeRecording()
                }
                startBuffering() {
                    if (this._isEnabled) throw Error("Replay recording is already in progress");
                    let t = this.session && this.session.id,
                        {
                            session: e
                        } = el({
                            timeouts: this.timeouts,
                            stickySession: !!this._options.stickySession,
                            currentSession: this.session,
                            sessionSampleRate: 0,
                            allowBuffering: !0
                        });
                    e.previousSessionId = t, this.session = e, this.recordingMode = "buffer", this._initializeRecording()
                }
                startRecording() {
                    try {
                        var t;
                        let e;
                        this._stopRecording = tZ({
                            ...this._recordingOptions,
                            ..."buffer" === this.recordingMode && {
                                checkoutEveryNms: 6e4
                            },
                            emit: (t = this, e = !1, (n, r) => {
                                if (!t.checkAndHandleExpiredSession()) {
                                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.warn("[Replay] Received replay event after session expired.");
                                    return
                                }
                                let i = r || !e;
                                e = !0, t.addUpdate(() => {
                                    if ("buffer" === t.recordingMode && i && t.setInitialState(), ec(t, n, i), !i) return !1;
                                    if (function(t, e) {
                                            e && t.session && 0 === t.session.segmentId ? ec(t, function(t) {
                                                let e = t.getOptions();
                                                return {
                                                    type: g.Custom,
                                                    timestamp: Date.now(),
                                                    data: {
                                                        tag: "options",
                                                        payload: {
                                                            sessionSampleRate: e.sessionSampleRate,
                                                            errorSampleRate: e.errorSampleRate,
                                                            useCompressionOption: e.useCompression,
                                                            blockAllMedia: e.blockAllMedia,
                                                            maskAllText: e.maskAllText,
                                                            maskAllInputs: e.maskAllInputs,
                                                            useCompression: !!t.eventBuffer && "worker" === t.eventBuffer.type,
                                                            networkDetailHasUrls: e.networkDetailAllowUrls.length > 0,
                                                            networkCaptureBodies: e.networkCaptureBodies,
                                                            networkRequestHasHeaders: e.networkRequestHeaders.length > 0,
                                                            networkResponseHasHeaders: e.networkResponseHeaders.length > 0
                                                        }
                                                    }
                                                }
                                            }(t), !1) : Promise.resolve(null)
                                        }(t, i), t.session && t.session.previousSessionId) return !0;
                                    if ("buffer" === t.recordingMode && t.session && t.eventBuffer) {
                                        let e = t.eventBuffer.getEarliestTimestamp();
                                        if (e) {
                                            let n = t.getOptions()._experiments.traceInternals ? console.info : T.logger.info;
                                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n("[Replay] Updating session start time to earliest event in buffer at ".concat(e)), t.session.started = e, t.getOptions().stickySession && eo(t.session)
                                        }
                                    }
                                    return "session" === t.recordingMode && t.flush(), !0
                                })
                            }),
                            onMutation: this._onMutationHandler
                        })
                    } catch (t) {
                        this._handleException(t)
                    }
                }
                stopRecording() {
                    try {
                        return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0
                    } catch (t) {
                        return this._handleException(t), !1
                    }
                }
                async stop(t) {
                    if (this._isEnabled) try {
                        var e;
                        if ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
                            let e = "[Replay] Stopping Replay".concat(t ? " triggered by ".concat(t) : ""),
                                n = this.getOptions()._experiments.traceInternals ? console.warn : T.logger.log;
                            n(e)
                        }
                        this._isEnabled = !1, this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), "session" === this.recordingMode && await this._flush({
                                force: !0
                            }), this.eventBuffer && this.eventBuffer.destroy(), this.eventBuffer = null, e = this,
                            function() {
                                if (en()) try {
                                    x.sessionStorage.removeItem(D)
                                } catch (t) {}
                            }(), e.session = void 0
                    } catch (t) {
                        this._handleException(t)
                    }
                }
                pause() {
                    this._isPaused = !0, this.stopRecording()
                }
                resume() {
                    this._loadAndCheckSession() && (this._isPaused = !1, this.startRecording())
                }
                async sendBufferedReplayOrFlush() {
                    let {
                        continueRecording: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if ("session" === this.recordingMode) return this.flushImmediate();
                    let e = Date.now(),
                        n = this.getOptions()._experiments.traceInternals ? console.info : T.logger.info;
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n("[Replay] Converting buffer to session, starting at ".concat(e)), await this.flushImmediate();
                    let r = this.stopRecording();
                    t && r && (this.recordingMode = "session", this.session && (this.session.shouldRefresh = !1, this._updateUserActivity(e), this._updateSessionActivity(e), this.session.started = e, this._maybeSaveSession()), this.startRecording())
                }
                addUpdate(t) {
                    let e = t();
                    if ("buffer" !== this.recordingMode) !0 !== e && this._debouncedFlush()
                }
                triggerUserActivity() {
                    if (this._updateUserActivity(), !this._stopRecording) {
                        if (!this._loadAndCheckSession()) return;
                        this.resume();
                        return
                    }
                    this.checkAndHandleExpiredSession(), this._updateSessionActivity()
                }
                updateUserActivity() {
                    this._updateUserActivity(), this._updateSessionActivity()
                }
                conditionalFlush() {
                    return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
                }
                flush() {
                    return this._debouncedFlush()
                }
                flushImmediate() {
                    return this._debouncedFlush(), this._debouncedFlush.flush()
                }
                cancelFlush() {
                    this._debouncedFlush.cancel()
                }
                getSessionId() {
                    return this.session && this.session.id
                }
                checkAndHandleExpiredSession() {
                    let t = this.getSessionId();
                    if (this._lastActivity && er(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled) {
                        this.pause();
                        return
                    }
                    if (!this._loadAndCheckSession()) return;
                    let e = t !== this.getSessionId();
                    return !e || (this._triggerFullSnapshot(), !1)
                }
                setInitialState() {
                    let t = "".concat(x.location.pathname).concat(x.location.hash).concat(x.location.search),
                        e = "".concat(x.location.origin).concat(t);
                    this.performanceEvents = [], this._clearContext(), this._context.initialUrl = e, this._context.initialTimestamp = Date.now(), this._context.urls.push(e)
                }
                throttledAddEvent(t, e) {
                    let n = this._throttledAddEvent(t, e);
                    if (n === ej) {
                        let t = t1({
                            category: "replay.throttled"
                        });
                        this.addUpdate(() => {
                            ec(this, {
                                type: g.Custom,
                                timestamp: t.timestamp || 0,
                                data: {
                                    tag: "breadcrumb",
                                    payload: t,
                                    metric: !0
                                }
                            })
                        })
                    }
                    return n
                }
                getCurrentRoute() {
                    let t = this.lastTransaction || (0, k.getCurrentHub)().getScope().getTransaction();
                    if (t && ["route", "custom"].includes(t.metadata.source)) return t.name
                }
                _initializeRecording() {
                    this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = function(t) {
                        let {
                            useCompression: e
                        } = t;
                        if (e && window.Worker) try {
                            let t = function() {
                                let t = new Blob(['/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */\nfunction t(t){let e=t.length;for(;--e>=0;)t[e]=0}const e=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),a=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),i=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),n=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=new Array(576);t(s);const r=new Array(60);t(r);const o=new Array(512);t(o);const l=new Array(256);t(l);const h=new Array(29);t(h);const d=new Array(30);function _(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}let f,c,u;function w(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}t(d);const m=t=>t<256?o[t]:o[256+(t>>>7)],b=(t,e)=>{t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},g=(t,e,a)=>{t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,b(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},p=(t,e,a)=>{g(t,a[2*e],a[2*e+1])},k=(t,e)=>{let a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},v=(t,e,a)=>{const i=new Array(16);let n,s,r=0;for(n=1;n<=15;n++)r=r+a[n-1]<<1,i[n]=r;for(s=0;s<=e;s++){let e=t[2*s+1];0!==e&&(t[2*s]=k(i[e]++,e))}},y=t=>{let e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.sym_next=t.matches=0},x=t=>{t.bi_valid>8?b(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},z=(t,e,a,i)=>{const n=2*e,s=2*a;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[a]},A=(t,e,a)=>{const i=t.heap[a];let n=a<<1;for(;n<=t.heap_len&&(n<t.heap_len&&z(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!z(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i},E=(t,i,n)=>{let s,r,o,_,f=0;if(0!==t.sym_next)do{s=255&t.pending_buf[t.sym_buf+f++],s+=(255&t.pending_buf[t.sym_buf+f++])<<8,r=t.pending_buf[t.sym_buf+f++],0===s?p(t,r,i):(o=l[r],p(t,o+256+1,i),_=e[o],0!==_&&(r-=h[o],g(t,r,_)),s--,o=m(s),p(t,o,n),_=a[o],0!==_&&(s-=d[o],g(t,s,_)))}while(f<t.sym_next);p(t,256,i)},R=(t,e)=>{const a=e.dyn_tree,i=e.stat_desc.static_tree,n=e.stat_desc.has_stree,s=e.stat_desc.elems;let r,o,l,h=-1;for(t.heap_len=0,t.heap_max=573,r=0;r<s;r++)0!==a[2*r]?(t.heap[++t.heap_len]=h=r,t.depth[r]=0):a[2*r+1]=0;for(;t.heap_len<2;)l=t.heap[++t.heap_len]=h<2?++h:0,a[2*l]=1,t.depth[l]=0,t.opt_len--,n&&(t.static_len-=i[2*l+1]);for(e.max_code=h,r=t.heap_len>>1;r>=1;r--)A(t,a,r);l=s;do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],A(t,a,1),o=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=o,a[2*l]=a[2*r]+a[2*o],t.depth[l]=(t.depth[r]>=t.depth[o]?t.depth[r]:t.depth[o])+1,a[2*r+1]=a[2*o+1]=l,t.heap[1]=l++,A(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],((t,e)=>{const a=e.dyn_tree,i=e.max_code,n=e.stat_desc.static_tree,s=e.stat_desc.has_stree,r=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,l=e.stat_desc.max_length;let h,d,_,f,c,u,w=0;for(f=0;f<=15;f++)t.bl_count[f]=0;for(a[2*t.heap[t.heap_max]+1]=0,h=t.heap_max+1;h<573;h++)d=t.heap[h],f=a[2*a[2*d+1]+1]+1,f>l&&(f=l,w++),a[2*d+1]=f,d>i||(t.bl_count[f]++,c=0,d>=o&&(c=r[d-o]),u=a[2*d],t.opt_len+=u*(f+c),s&&(t.static_len+=u*(n[2*d+1]+c)));if(0!==w){do{for(f=l-1;0===t.bl_count[f];)f--;t.bl_count[f]--,t.bl_count[f+1]+=2,t.bl_count[l]--,w-=2}while(w>0);for(f=l;0!==f;f--)for(d=t.bl_count[f];0!==d;)_=t.heap[--h],_>i||(a[2*_+1]!==f&&(t.opt_len+=(f-a[2*_+1])*a[2*_],a[2*_+1]=f),d--)}})(t,e),v(a,h,t.bl_count)},Z=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=r,r=e[2*(i+1)+1],++o<l&&n===r||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[32]++):o<=10?t.bl_tree[34]++:t.bl_tree[36]++,o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4))},U=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),i=0;i<=a;i++)if(n=r,r=e[2*(i+1)+1],!(++o<l&&n===r)){if(o<h)do{p(t,n,t.bl_tree)}while(0!=--o);else 0!==n?(n!==s&&(p(t,n,t.bl_tree),o--),p(t,16,t.bl_tree),g(t,o-3,2)):o<=10?(p(t,17,t.bl_tree),g(t,o-3,3)):(p(t,18,t.bl_tree),g(t,o-11,7));o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4)}};let S=!1;const D=(t,e,a,i)=>{g(t,0+(i?1:0),3),x(t),b(t,a),b(t,~a),a&&t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a};var T=(t,e,a,i)=>{let o,l,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0})(t)),R(t,t.l_desc),R(t,t.d_desc),h=(t=>{let e;for(Z(t,t.dyn_ltree,t.l_desc.max_code),Z(t,t.dyn_dtree,t.d_desc.max_code),R(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*n[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e})(t),o=t.opt_len+3+7>>>3,l=t.static_len+3+7>>>3,l<=o&&(o=l)):o=l=a+5,a+4<=o&&-1!==e?D(t,e,a,i):4===t.strategy||l===o?(g(t,2+(i?1:0),3),E(t,s,r)):(g(t,4+(i?1:0),3),((t,e,a,i)=>{let s;for(g(t,e-257,5),g(t,a-1,5),g(t,i-4,4),s=0;s<i;s++)g(t,t.bl_tree[2*n[s]+1],3);U(t,t.dyn_ltree,e-1),U(t,t.dyn_dtree,a-1)})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),E(t,t.dyn_ltree,t.dyn_dtree)),y(t),i&&x(t)},O={_tr_init:t=>{S||((()=>{let t,n,w,m,b;const g=new Array(16);for(w=0,m=0;m<28;m++)for(h[m]=w,t=0;t<1<<e[m];t++)l[w++]=m;for(l[w-1]=m,b=0,m=0;m<16;m++)for(d[m]=b,t=0;t<1<<a[m];t++)o[b++]=m;for(b>>=7;m<30;m++)for(d[m]=b<<7,t=0;t<1<<a[m]-7;t++)o[256+b++]=m;for(n=0;n<=15;n++)g[n]=0;for(t=0;t<=143;)s[2*t+1]=8,t++,g[8]++;for(;t<=255;)s[2*t+1]=9,t++,g[9]++;for(;t<=279;)s[2*t+1]=7,t++,g[7]++;for(;t<=287;)s[2*t+1]=8,t++,g[8]++;for(v(s,287,g),t=0;t<30;t++)r[2*t+1]=5,r[2*t]=k(t,5);f=new _(s,e,257,286,15),c=new _(r,a,0,30,15),u=new _(new Array(0),i,0,19,7)})(),S=!0),t.l_desc=new w(t.dyn_ltree,f),t.d_desc=new w(t.dyn_dtree,c),t.bl_desc=new w(t.bl_tree,u),t.bi_buf=0,t.bi_valid=0,y(t)},_tr_stored_block:D,_tr_flush_block:T,_tr_tally:(t,e,a)=>(t.pending_buf[t.sym_buf+t.sym_next++]=e,t.pending_buf[t.sym_buf+t.sym_next++]=e>>8,t.pending_buf[t.sym_buf+t.sym_next++]=a,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(l[a]+256+1)]++,t.dyn_dtree[2*m(e)]++),t.sym_next===t.sym_end),_tr_align:t=>{g(t,2,3),p(t,256,s),(t=>{16===t.bi_valid?(b(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)})(t)}};var F=(t,e,a,i)=>{let n=65535&t|0,s=t>>>16&65535|0,r=0;for(;0!==a;){r=a>2e3?2e3:a,a-=r;do{n=n+e[i++]|0,s=s+n|0}while(--r);n%=65521,s%=65521}return n|s<<16|0};const L=new Uint32Array((()=>{let t,e=[];for(var a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e})());var N=(t,e,a,i)=>{const n=L,s=i+a;t^=-1;for(let a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t},I={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},B={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:C,_tr_stored_block:H,_tr_flush_block:M,_tr_tally:j,_tr_align:K}=O,{Z_NO_FLUSH:P,Z_PARTIAL_FLUSH:Y,Z_FULL_FLUSH:G,Z_FINISH:X,Z_BLOCK:W,Z_OK:q,Z_STREAM_END:J,Z_STREAM_ERROR:Q,Z_DATA_ERROR:V,Z_BUF_ERROR:$,Z_DEFAULT_COMPRESSION:tt,Z_FILTERED:et,Z_HUFFMAN_ONLY:at,Z_RLE:it,Z_FIXED:nt,Z_DEFAULT_STRATEGY:st,Z_UNKNOWN:rt,Z_DEFLATED:ot}=B,lt=(t,e)=>(t.msg=I[e],e),ht=t=>2*t-(t>4?9:0),dt=t=>{let e=t.length;for(;--e>=0;)t[e]=0},_t=t=>{let e,a,i,n=t.w_size;e=t.hash_size,i=e;do{a=t.head[--i],t.head[i]=a>=n?a-n:0}while(--e);e=n,i=e;do{a=t.prev[--i],t.prev[i]=a>=n?a-n:0}while(--e)};let ft=(t,e,a)=>(e<<t.hash_shift^a)&t.hash_mask;const ct=t=>{const e=t.state;let a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},ut=(t,e)=>{M(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,ct(t.strm)},wt=(t,e)=>{t.pending_buf[t.pending++]=e},mt=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},bt=(t,e,a,i)=>{let n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,e.set(t.input.subarray(t.next_in,t.next_in+n),a),1===t.state.wrap?t.adler=F(t.adler,e,n,a):2===t.state.wrap&&(t.adler=N(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)},gt=(t,e)=>{let a,i,n=t.max_chain_length,s=t.strstart,r=t.prev_length,o=t.nice_match;const l=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,h=t.window,d=t.w_mask,_=t.prev,f=t.strstart+258;let c=h[s+r-1],u=h[s+r];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(a=e,h[a+r]===u&&h[a+r-1]===c&&h[a]===h[s]&&h[++a]===h[s+1]){s+=2,a++;do{}while(h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&s<f);if(i=258-(f-s),s=f-258,i>r){if(t.match_start=e,r=i,i>=o)break;c=h[s+r-1],u=h[s+r]}}}while((e=_[e&d])>l&&0!=--n);return r<=t.lookahead?r:t.lookahead},pt=t=>{const e=t.w_size;let a,i,n;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-262)&&(t.window.set(t.window.subarray(e,e+e-i),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,t.insert>t.strstart&&(t.insert=t.strstart),_t(t),i+=e),0===t.strm.avail_in)break;if(a=bt(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=a,t.lookahead+t.insert>=3)for(n=t.strstart-t.insert,t.ins_h=t.window[n],t.ins_h=ft(t,t.ins_h,t.window[n+1]);t.insert&&(t.ins_h=ft(t,t.ins_h,t.window[n+3-1]),t.prev[n&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=n,n++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)},kt=(t,e)=>{let a,i,n,s=t.pending_buf_size-5>t.w_size?t.w_size:t.pending_buf_size-5,r=0,o=t.strm.avail_in;do{if(a=65535,n=t.bi_valid+42>>3,t.strm.avail_out<n)break;if(n=t.strm.avail_out-n,i=t.strstart-t.block_start,a>i+t.strm.avail_in&&(a=i+t.strm.avail_in),a>n&&(a=n),a<s&&(0===a&&e!==X||e===P||a!==i+t.strm.avail_in))break;r=e===X&&a===i+t.strm.avail_in?1:0,H(t,0,0,r),t.pending_buf[t.pending-4]=a,t.pending_buf[t.pending-3]=a>>8,t.pending_buf[t.pending-2]=~a,t.pending_buf[t.pending-1]=~a>>8,ct(t.strm),i&&(i>a&&(i=a),t.strm.output.set(t.window.subarray(t.block_start,t.block_start+i),t.strm.next_out),t.strm.next_out+=i,t.strm.avail_out-=i,t.strm.total_out+=i,t.block_start+=i,a-=i),a&&(bt(t.strm,t.strm.output,t.strm.next_out,a),t.strm.next_out+=a,t.strm.avail_out-=a,t.strm.total_out+=a)}while(0===r);return o-=t.strm.avail_in,o&&(o>=t.w_size?(t.matches=2,t.window.set(t.strm.input.subarray(t.strm.next_in-t.w_size,t.strm.next_in),0),t.strstart=t.w_size,t.insert=t.strstart):(t.window_size-t.strstart<=o&&(t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,t.insert>t.strstart&&(t.insert=t.strstart)),t.window.set(t.strm.input.subarray(t.strm.next_in-o,t.strm.next_in),t.strstart),t.strstart+=o,t.insert+=o>t.w_size-t.insert?t.w_size-t.insert:o),t.block_start=t.strstart),t.high_water<t.strstart&&(t.high_water=t.strstart),r?4:e!==P&&e!==X&&0===t.strm.avail_in&&t.strstart===t.block_start?2:(n=t.window_size-t.strstart,t.strm.avail_in>n&&t.block_start>=t.w_size&&(t.block_start-=t.w_size,t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,n+=t.w_size,t.insert>t.strstart&&(t.insert=t.strstart)),n>t.strm.avail_in&&(n=t.strm.avail_in),n&&(bt(t.strm,t.window,t.strstart,n),t.strstart+=n,t.insert+=n>t.w_size-t.insert?t.w_size-t.insert:n),t.high_water<t.strstart&&(t.high_water=t.strstart),n=t.bi_valid+42>>3,n=t.pending_buf_size-n>65535?65535:t.pending_buf_size-n,s=n>t.w_size?t.w_size:n,i=t.strstart-t.block_start,(i>=s||(i||e===X)&&e!==P&&0===t.strm.avail_in&&i<=n)&&(a=i>n?n:i,r=e===X&&0===t.strm.avail_in&&a===i?1:0,H(t,t.block_start,a,r),t.block_start+=a,ct(t.strm)),r?3:1)},vt=(t,e)=>{let a,i;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a)),t.match_length>=3)if(i=j(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=ft(t,t.ins_h,t.window[t.strstart+1]);else i=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2},yt=(t,e)=>{let a,i,n;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a),t.match_length<=5&&(t.strategy===et||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-3,i=j(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,i&&(ut(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if(i=j(t,0,t.window[t.strstart-1]),i&&ut(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=j(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2};function xt(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}const zt=[new xt(0,0,0,0,kt),new xt(4,4,8,4,vt),new xt(4,5,16,8,vt),new xt(4,6,32,32,vt),new xt(4,4,16,16,yt),new xt(8,16,32,32,yt),new xt(8,16,128,128,yt),new xt(8,32,128,256,yt),new xt(32,128,258,1024,yt),new xt(32,258,258,4096,yt)];function At(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ot,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),dt(this.dyn_ltree),dt(this.dyn_dtree),dt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),dt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),dt(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Et=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||42!==e.status&&57!==e.status&&69!==e.status&&73!==e.status&&91!==e.status&&103!==e.status&&113!==e.status&&666!==e.status?1:0},Rt=t=>{if(Et(t))return lt(t,Q);t.total_in=t.total_out=0,t.data_type=rt;const e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=2===e.wrap?57:e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=-2,C(e),q},Zt=t=>{const e=Rt(t);var a;return e===q&&((a=t.state).window_size=2*a.w_size,dt(a.head),a.max_lazy_match=zt[a.level].max_lazy,a.good_match=zt[a.level].good_length,a.nice_match=zt[a.level].nice_length,a.max_chain_length=zt[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=2,a.match_available=0,a.ins_h=0),e},Ut=(t,e,a,i,n,s)=>{if(!t)return Q;let r=1;if(e===tt&&(e=6),i<0?(r=0,i=-i):i>15&&(r=2,i-=16),n<1||n>9||a!==ot||i<8||i>15||e<0||e>9||s<0||s>nt||8===i&&1!==r)return lt(t,Q);8===i&&(i=9);const o=new At;return t.state=o,o.strm=t,o.status=42,o.wrap=r,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new Uint8Array(2*o.w_size),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=3*(o.lit_bufsize-1),o.level=e,o.strategy=s,o.method=a,Zt(t)};var St={deflateInit:(t,e)=>Ut(t,e,ot,15,8,st),deflateInit2:Ut,deflateReset:Zt,deflateResetKeep:Rt,deflateSetHeader:(t,e)=>Et(t)||2!==t.state.wrap?Q:(t.state.gzhead=e,q),deflate:(t,e)=>{if(Et(t)||e>W||e<0)return t?lt(t,Q):Q;const a=t.state;if(!t.output||0!==t.avail_in&&!t.input||666===a.status&&e!==X)return lt(t,0===t.avail_out?$:Q);const i=a.last_flush;if(a.last_flush=e,0!==a.pending){if(ct(t),0===t.avail_out)return a.last_flush=-1,q}else if(0===t.avail_in&&ht(e)<=ht(i)&&e!==X)return lt(t,$);if(666===a.status&&0!==t.avail_in)return lt(t,$);if(42===a.status&&0===a.wrap&&(a.status=113),42===a.status){let e=ot+(a.w_bits-8<<4)<<8,i=-1;if(i=a.strategy>=at||a.level<2?0:a.level<6?1:6===a.level?2:3,e|=i<<6,0!==a.strstart&&(e|=32),e+=31-e%31,mt(a,e),0!==a.strstart&&(mt(a,t.adler>>>16),mt(a,65535&t.adler)),t.adler=1,a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(57===a.status)if(t.adler=0,wt(a,31),wt(a,139),wt(a,8),a.gzhead)wt(a,(a.gzhead.text?1:0)+(a.gzhead.hcrc?2:0)+(a.gzhead.extra?4:0)+(a.gzhead.name?8:0)+(a.gzhead.comment?16:0)),wt(a,255&a.gzhead.time),wt(a,a.gzhead.time>>8&255),wt(a,a.gzhead.time>>16&255),wt(a,a.gzhead.time>>24&255),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,255&a.gzhead.os),a.gzhead.extra&&a.gzhead.extra.length&&(wt(a,255&a.gzhead.extra.length),wt(a,a.gzhead.extra.length>>8&255)),a.gzhead.hcrc&&(t.adler=N(t.adler,a.pending_buf,a.pending,0)),a.gzindex=0,a.status=69;else if(wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,3),a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q;if(69===a.status){if(a.gzhead.extra){let e=a.pending,i=(65535&a.gzhead.extra.length)-a.gzindex;for(;a.pending+i>a.pending_buf_size;){let n=a.pending_buf_size-a.pending;if(a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex,a.gzindex+n),a.pending),a.pending=a.pending_buf_size,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex+=n,ct(t),0!==a.pending)return a.last_flush=-1,q;e=0,i-=n}let n=new Uint8Array(a.gzhead.extra);a.pending_buf.set(n.subarray(a.gzindex,a.gzindex+i),a.pending),a.pending+=i,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex=0}a.status=73}if(73===a.status){if(a.gzhead.name){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.name.length?255&a.gzhead.name.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),a.gzindex=0}a.status=91}if(91===a.status){if(a.gzhead.comment){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.comment.length?255&a.gzhead.comment.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i))}a.status=103}if(103===a.status){if(a.gzhead.hcrc){if(a.pending+2>a.pending_buf_size&&(ct(t),0!==a.pending))return a.last_flush=-1,q;wt(a,255&t.adler),wt(a,t.adler>>8&255),t.adler=0}if(a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(0!==t.avail_in||0!==a.lookahead||e!==P&&666!==a.status){let i=0===a.level?kt(a,e):a.strategy===at?((t,e)=>{let a;for(;;){if(0===t.lookahead&&(pt(t),0===t.lookahead)){if(e===P)return 1;break}if(t.match_length=0,a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):a.strategy===it?((t,e)=>{let a,i,n,s;const r=t.window;for(;;){if(t.lookahead<=258){if(pt(t),t.lookahead<=258&&e===P)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=t.strstart-1,i=r[n],i===r[++n]&&i===r[++n]&&i===r[++n])){s=t.strstart+258;do{}while(i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&n<s);t.match_length=258-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=j(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):zt[a.level].func(a,e);if(3!==i&&4!==i||(a.status=666),1===i||3===i)return 0===t.avail_out&&(a.last_flush=-1),q;if(2===i&&(e===Y?K(a):e!==W&&(H(a,0,0,!1),e===G&&(dt(a.head),0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),ct(t),0===t.avail_out))return a.last_flush=-1,q}return e!==X?q:a.wrap<=0?J:(2===a.wrap?(wt(a,255&t.adler),wt(a,t.adler>>8&255),wt(a,t.adler>>16&255),wt(a,t.adler>>24&255),wt(a,255&t.total_in),wt(a,t.total_in>>8&255),wt(a,t.total_in>>16&255),wt(a,t.total_in>>24&255)):(mt(a,t.adler>>>16),mt(a,65535&t.adler)),ct(t),a.wrap>0&&(a.wrap=-a.wrap),0!==a.pending?q:J)},deflateEnd:t=>{if(Et(t))return Q;const e=t.state.status;return t.state=null,113===e?lt(t,V):q},deflateSetDictionary:(t,e)=>{let a=e.length;if(Et(t))return Q;const i=t.state,n=i.wrap;if(2===n||1===n&&42!==i.status||i.lookahead)return Q;if(1===n&&(t.adler=F(t.adler,e,a,0)),i.wrap=0,a>=i.w_size){0===n&&(dt(i.head),i.strstart=0,i.block_start=0,i.insert=0);let t=new Uint8Array(i.w_size);t.set(e.subarray(a-i.w_size,a),0),e=t,a=i.w_size}const s=t.avail_in,r=t.next_in,o=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,pt(i);i.lookahead>=3;){let t=i.strstart,e=i.lookahead-2;do{i.ins_h=ft(i,i.ins_h,i.window[t+3-1]),i.prev[t&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=t,t++}while(--e);i.strstart=t,i.lookahead=2,pt(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=r,t.input=o,t.avail_in=s,i.wrap=n,q},deflateInfo:"pako deflate (from Nodeca project)"};const Dt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var Tt=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(const e in a)Dt(a,e)&&(t[e]=a[e])}}return t},Ot=t=>{let e=0;for(let a=0,i=t.length;a<i;a++)e+=t[a].length;const a=new Uint8Array(e);for(let e=0,i=0,n=t.length;e<n;e++){let n=t[e];a.set(n,i),i+=n.length}return a};let Ft=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){Ft=!1}const Lt=new Uint8Array(256);for(let t=0;t<256;t++)Lt[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Lt[254]=Lt[254]=1;var Nt=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,i,n,s,r=t.length,o=0;for(n=0;n<r;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),o+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(o),s=0,n=0;s<o;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},It=(t,e)=>{const a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let i,n;const s=new Array(2*a);for(n=0,i=0;i<a;){let e=t[i++];if(e<128){s[n++]=e;continue}let r=Lt[e];if(r>4)s[n++]=65533,i+=r-1;else{for(e&=2===r?31:3===r?15:7;r>1&&i<a;)e=e<<6|63&t[i++],r--;r>1?s[n++]=65533:e<65536?s[n++]=e:(e-=65536,s[n++]=55296|e>>10&1023,s[n++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&Ft)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let a="";for(let i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a})(s,n)},Bt=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let a=e-1;for(;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+Lt[t[a]]>e?a:e};var Ct=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};const Ht=Object.prototype.toString,{Z_NO_FLUSH:Mt,Z_SYNC_FLUSH:jt,Z_FULL_FLUSH:Kt,Z_FINISH:Pt,Z_OK:Yt,Z_STREAM_END:Gt,Z_DEFAULT_COMPRESSION:Xt,Z_DEFAULT_STRATEGY:Wt,Z_DEFLATED:qt}=B;function Jt(t){this.options=Tt({level:Xt,method:qt,chunkSize:16384,windowBits:15,memLevel:8,strategy:Wt},t||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=St.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==Yt)throw new Error(I[a]);if(e.header&&St.deflateSetHeader(this.strm,e.header),e.dictionary){let t;if(t="string"==typeof e.dictionary?Nt(e.dictionary):"[object ArrayBuffer]"===Ht.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=St.deflateSetDictionary(this.strm,t),a!==Yt)throw new Error(I[a]);this._dict_set=!0}}function Qt(t,e){const a=new Jt(e);if(a.push(t,!0),a.err)throw a.msg||I[a.err];return a.result}Jt.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize;let n,s;if(this.ended)return!1;for(s=e===~~e?e:!0===e?Pt:Mt,"string"==typeof t?a.input=Nt(t):"[object ArrayBuffer]"===Ht.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;)if(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),(s===jt||s===Kt)&&a.avail_out<=6)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else{if(n=St.deflate(a,s),n===Gt)return a.next_out>0&&this.onData(a.output.subarray(0,a.next_out)),n=St.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Yt;if(0!==a.avail_out){if(s>0&&a.next_out>0)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else if(0===a.avail_in)break}else this.onData(a.output)}return!0},Jt.prototype.onData=function(t){this.chunks.push(t)},Jt.prototype.onEnd=function(t){t===Yt&&(this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Vt={Deflate:Jt,deflate:Qt,deflateRaw:function(t,e){return(e=e||{}).raw=!0,Qt(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,Qt(t,e)},constants:B};var $t=function(t,e){let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z,A;const E=t.state;a=t.next_in,z=t.input,i=a+(t.avail_in-5),n=t.next_out,A=t.output,s=n-(e-t.avail_out),r=n+(t.avail_out-257),o=E.dmax,l=E.wsize,h=E.whave,d=E.wnext,_=E.window,f=E.hold,c=E.bits,u=E.lencode,w=E.distcode,m=(1<<E.lenbits)-1,b=(1<<E.distbits)-1;t:do{c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=u[f&m];e:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,0===p)A[n++]=65535&g;else{if(!(16&p)){if(0==(64&p)){g=u[(65535&g)+(f&(1<<p)-1)];continue e}if(32&p){E.mode=16191;break t}t.msg="invalid literal/length code",E.mode=16209;break t}k=65535&g,p&=15,p&&(c<p&&(f+=z[a++]<<c,c+=8),k+=f&(1<<p)-1,f>>>=p,c-=p),c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=w[f&b];a:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,!(16&p)){if(0==(64&p)){g=w[(65535&g)+(f&(1<<p)-1)];continue a}t.msg="invalid distance code",E.mode=16209;break t}if(v=65535&g,p&=15,c<p&&(f+=z[a++]<<c,c+=8,c<p&&(f+=z[a++]<<c,c+=8)),v+=f&(1<<p)-1,v>o){t.msg="invalid distance too far back",E.mode=16209;break t}if(f>>>=p,c-=p,p=n-s,v>p){if(p=v-p,p>h&&E.sane){t.msg="invalid distance too far back",E.mode=16209;break t}if(y=0,x=_,0===d){if(y+=l-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}else if(d<p){if(y+=l+d-p,p-=d,p<k){k-=p;do{A[n++]=_[y++]}while(--p);if(y=0,d<k){p=d,k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}}else if(y+=d-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}for(;k>2;)A[n++]=x[y++],A[n++]=x[y++],A[n++]=x[y++],k-=3;k&&(A[n++]=x[y++],k>1&&(A[n++]=x[y++]))}else{y=n-v;do{A[n++]=A[y++],A[n++]=A[y++],A[n++]=A[y++],k-=3}while(k>2);k&&(A[n++]=A[y++],k>1&&(A[n++]=A[y++]))}break}}break}}while(a<i&&n<r);k=c>>3,a-=k,c-=k<<3,f&=(1<<c)-1,t.next_in=a,t.next_out=n,t.avail_in=a<i?i-a+5:5-(a-i),t.avail_out=n<r?r-n+257:257-(n-r),E.hold=f,E.bits=c};const te=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),ee=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),ae=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),ie=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var ne=(t,e,a,i,n,s,r,o)=>{const l=o.bits;let h,d,_,f,c,u,w=0,m=0,b=0,g=0,p=0,k=0,v=0,y=0,x=0,z=0,A=null;const E=new Uint16Array(16),R=new Uint16Array(16);let Z,U,S,D=null;for(w=0;w<=15;w++)E[w]=0;for(m=0;m<i;m++)E[e[a+m]]++;for(p=l,g=15;g>=1&&0===E[g];g--);if(p>g&&(p=g),0===g)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(b=1;b<g&&0===E[b];b++);for(p<b&&(p=b),y=1,w=1;w<=15;w++)if(y<<=1,y-=E[w],y<0)return-1;if(y>0&&(0===t||1!==g))return-1;for(R[1]=0,w=1;w<15;w++)R[w+1]=R[w]+E[w];for(m=0;m<i;m++)0!==e[a+m]&&(r[R[e[a+m]]++]=m);if(0===t?(A=D=r,u=20):1===t?(A=te,D=ee,u=257):(A=ae,D=ie,u=0),z=0,m=0,w=b,c=s,k=p,v=0,_=-1,x=1<<p,f=x-1,1===t&&x>852||2===t&&x>592)return 1;for(;;){Z=w-v,r[m]+1<u?(U=0,S=r[m]):r[m]>=u?(U=D[r[m]-u],S=A[r[m]-u]):(U=96,S=0),h=1<<w-v,d=1<<k,b=d;do{d-=h,n[c+(z>>v)+d]=Z<<24|U<<16|S|0}while(0!==d);for(h=1<<w-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,m++,0==--E[w]){if(w===g)break;w=e[a+r[m]]}if(w>p&&(z&f)!==_){for(0===v&&(v=p),c+=b,k=w-v,y=1<<k;k+v<g&&(y-=E[k+v],!(y<=0));)k++,y<<=1;if(x+=1<<k,1===t&&x>852||2===t&&x>592)return 1;_=z&f,n[_]=p<<24|k<<16|c-s|0}}return 0!==z&&(n[c+z]=w-v<<24|64<<16|0),o.bits=p,0};const{Z_FINISH:se,Z_BLOCK:re,Z_TREES:oe,Z_OK:le,Z_STREAM_END:he,Z_NEED_DICT:de,Z_STREAM_ERROR:_e,Z_DATA_ERROR:fe,Z_MEM_ERROR:ce,Z_BUF_ERROR:ue,Z_DEFLATED:we}=B,me=16209,be=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24);function ge(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const pe=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||e.mode<16180||e.mode>16211?1:0},ke=t=>{if(pe(t))return _e;const e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=16180,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,le},ve=t=>{if(pe(t))return _e;const e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,ke(t)},ye=(t,e)=>{let a;if(pe(t))return _e;const i=t.state;return e<0?(a=0,e=-e):(a=5+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?_e:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,ve(t))},xe=(t,e)=>{if(!t)return _e;const a=new ge;t.state=a,a.strm=t,a.window=null,a.mode=16180;const i=ye(t,e);return i!==le&&(t.state=null),i};let ze,Ae,Ee=!0;const Re=t=>{if(Ee){ze=new Int32Array(512),Ae=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(ne(1,t.lens,0,288,ze,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;ne(2,t.lens,0,32,Ae,0,t.work,{bits:5}),Ee=!1}t.lencode=ze,t.lenbits=9,t.distcode=Ae,t.distbits=5},Ze=(t,e,a,i)=>{let n;const s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(a-s.wsize,a),0),s.wnext=0,s.whave=s.wsize):(n=s.wsize-s.wnext,n>i&&(n=i),s.window.set(e.subarray(a-i,a-i+n),s.wnext),(i-=n)?(s.window.set(e.subarray(a-i,a),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0};var Ue={inflateReset:ve,inflateReset2:ye,inflateResetKeep:ke,inflateInit:t=>xe(t,15),inflateInit2:xe,inflate:(t,e)=>{let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z=0;const A=new Uint8Array(4);let E,R;const Z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(pe(t)||!t.output||!t.input&&0!==t.avail_in)return _e;a=t.state,16191===a.mode&&(a.mode=16192),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,_=o,f=l,x=le;t:for(;;)switch(a.mode){case 16180:if(0===a.wrap){a.mode=16192;break}for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(2&a.wrap&&35615===h){0===a.wbits&&(a.wbits=15),a.check=0,A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0),h=0,d=0,a.mode=16181;break}if(a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",a.mode=me;break}if((15&h)!==we){t.msg="unknown compression method",a.mode=me;break}if(h>>>=4,d-=4,y=8+(15&h),0===a.wbits&&(a.wbits=y),y>15||y>a.wbits){t.msg="invalid window size",a.mode=me;break}a.dmax=1<<a.wbits,a.flags=0,t.adler=a.check=1,a.mode=512&h?16189:16191,h=0,d=0;break;case 16181:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.flags=h,(255&a.flags)!==we){t.msg="unknown compression method",a.mode=me;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=me;break}a.head&&(a.head.text=h>>8&1),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16182;case 16182:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.time=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,A[2]=h>>>16&255,A[3]=h>>>24&255,a.check=N(a.check,A,4,0)),h=0,d=0,a.mode=16183;case 16183:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.xflags=255&h,a.head.os=h>>8),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16184;case 16184:if(1024&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length=h,a.head&&(a.head.extra_len=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0}else a.head&&(a.head.extra=null);a.mode=16185;case 16185:if(1024&a.flags&&(c=a.length,c>o&&(c=o),c&&(a.head&&(y=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(s,s+c),y)),512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,a.length-=c),a.length))break t;a.length=0,a.mode=16186;case 16186:if(2048&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.name+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=16187;case 16187:if(4096&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.comment+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.comment=null);a.mode=16188;case 16188:if(512&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(65535&a.check)){t.msg="header crc mismatch",a.mode=me;break}h=0,d=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=16191;break;case 16189:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}t.adler=a.check=be(h),h=0,d=0,a.mode=16190;case 16190:if(0===a.havedict)return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,de;t.adler=a.check=1,a.mode=16191;case 16191:if(e===re||e===oe)break t;case 16192:if(a.last){h>>>=7&d,d-=7&d,a.mode=16206;break}for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}switch(a.last=1&h,h>>>=1,d-=1,3&h){case 0:a.mode=16193;break;case 1:if(Re(a),a.mode=16199,e===oe){h>>>=2,d-=2;break t}break;case 2:a.mode=16196;break;case 3:t.msg="invalid block type",a.mode=me}h>>>=2,d-=2;break;case 16193:for(h>>>=7&d,d-=7&d;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if((65535&h)!=(h>>>16^65535)){t.msg="invalid stored block lengths",a.mode=me;break}if(a.length=65535&h,h=0,d=0,a.mode=16194,e===oe)break t;case 16194:a.mode=16195;case 16195:if(c=a.length,c){if(c>o&&(c=o),c>l&&(c=l),0===c)break t;n.set(i.subarray(s,s+c),r),o-=c,s+=c,l-=c,r+=c,a.length-=c;break}a.mode=16191;break;case 16196:for(;d<14;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.nlen=257+(31&h),h>>>=5,d-=5,a.ndist=1+(31&h),h>>>=5,d-=5,a.ncode=4+(15&h),h>>>=4,d-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=me;break}a.have=0,a.mode=16197;case 16197:for(;a.have<a.ncode;){for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.lens[Z[a.have++]]=7&h,h>>>=3,d-=3}for(;a.have<19;)a.lens[Z[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,E={bits:a.lenbits},x=ne(0,a.lens,0,19,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid code lengths set",a.mode=me;break}a.have=0,a.mode=16198;case 16198:for(;a.have<a.nlen+a.ndist;){for(;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(g<16)h>>>=m,d-=m,a.lens[a.have++]=g;else{if(16===g){for(R=m+2;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(h>>>=m,d-=m,0===a.have){t.msg="invalid bit length repeat",a.mode=me;break}y=a.lens[a.have-1],c=3+(3&h),h>>>=2,d-=2}else if(17===g){for(R=m+3;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=3+(7&h),h>>>=3,d-=3}else{for(R=m+7;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=11+(127&h),h>>>=7,d-=7}if(a.have+c>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=me;break}for(;c--;)a.lens[a.have++]=y}}if(a.mode===me)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=me;break}if(a.lenbits=9,E={bits:a.lenbits},x=ne(1,a.lens,0,a.nlen,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid literal/lengths set",a.mode=me;break}if(a.distbits=6,a.distcode=a.distdyn,E={bits:a.distbits},x=ne(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,E),a.distbits=E.bits,x){t.msg="invalid distances set",a.mode=me;break}if(a.mode=16199,e===oe)break t;case 16199:a.mode=16200;case 16200:if(o>=6&&l>=258){t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,$t(t,f),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,16191===a.mode&&(a.back=-1);break}for(a.back=0;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(b&&0==(240&b)){for(p=m,k=b,v=g;z=a.lencode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,a.length=g,0===b){a.mode=16205;break}if(32&b){a.back=-1,a.mode=16191;break}if(64&b){t.msg="invalid literal/length code",a.mode=me;break}a.extra=15&b,a.mode=16201;case 16201:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=16202;case 16202:for(;z=a.distcode[h&(1<<a.distbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(0==(240&b)){for(p=m,k=b,v=g;z=a.distcode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,64&b){t.msg="invalid distance code",a.mode=me;break}a.offset=g,a.extra=15&b,a.mode=16203;case 16203:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.offset+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=me;break}a.mode=16204;case 16204:if(0===l)break t;if(c=f-l,a.offset>c){if(c=a.offset-c,c>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=me;break}c>a.wnext?(c-=a.wnext,u=a.wsize-c):u=a.wnext-c,c>a.length&&(c=a.length),w=a.window}else w=n,u=r-a.offset,c=a.length;c>l&&(c=l),l-=c,a.length-=c;do{n[r++]=w[u++]}while(--c);0===a.length&&(a.mode=16200);break;case 16205:if(0===l)break t;n[r++]=a.length,l--,a.mode=16200;break;case 16206:if(a.wrap){for(;d<32;){if(0===o)break t;o--,h|=i[s++]<<d,d+=8}if(f-=l,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,r-f):F(a.check,n,f,r-f)),f=l,4&a.wrap&&(a.flags?h:be(h))!==a.check){t.msg="incorrect data check",a.mode=me;break}h=0,d=0}a.mode=16207;case 16207:if(a.wrap&&a.flags){for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=me;break}h=0,d=0}a.mode=16208;case 16208:x=he;break t;case me:x=fe;break t;case 16210:return ce;default:return _e}return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,(a.wsize||f!==t.avail_out&&a.mode<me&&(a.mode<16206||e!==se))&&Ze(t,t.output,t.next_out,f-t.avail_out),_-=t.avail_in,f-=t.avail_out,t.total_in+=_,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,t.next_out-f):F(a.check,n,f,t.next_out-f)),t.data_type=a.bits+(a.last?64:0)+(16191===a.mode?128:0)+(16199===a.mode||16194===a.mode?256:0),(0===_&&0===f||e===se)&&x===le&&(x=ue),x},inflateEnd:t=>{if(pe(t))return _e;let e=t.state;return e.window&&(e.window=null),t.state=null,le},inflateGetHeader:(t,e)=>{if(pe(t))return _e;const a=t.state;return 0==(2&a.wrap)?_e:(a.head=e,e.done=!1,le)},inflateSetDictionary:(t,e)=>{const a=e.length;let i,n,s;return pe(t)?_e:(i=t.state,0!==i.wrap&&16190!==i.mode?_e:16190===i.mode&&(n=1,n=F(n,e,a,0),n!==i.check)?fe:(s=Ze(t,e,a,a),s?(i.mode=16210,ce):(i.havedict=1,le)))},inflateInfo:"pako inflate (from Nodeca project)"};var Se=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const De=Object.prototype.toString,{Z_NO_FLUSH:Te,Z_FINISH:Oe,Z_OK:Fe,Z_STREAM_END:Le,Z_NEED_DICT:Ne,Z_STREAM_ERROR:Ie,Z_DATA_ERROR:Be,Z_MEM_ERROR:Ce}=B;function He(t){this.options=Tt({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=Ue.inflateInit2(this.strm,e.windowBits);if(a!==Fe)throw new Error(I[a]);if(this.header=new Se,Ue.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Nt(e.dictionary):"[object ArrayBuffer]"===De.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(a=Ue.inflateSetDictionary(this.strm,e.dictionary),a!==Fe)))throw new Error(I[a])}He.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize,n=this.options.dictionary;let s,r,o;if(this.ended)return!1;for(r=e===~~e?e:!0===e?Oe:Te,"[object ArrayBuffer]"===De.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;){for(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),s=Ue.inflate(a,r),s===Ne&&n&&(s=Ue.inflateSetDictionary(a,n),s===Fe?s=Ue.inflate(a,r):s===Be&&(s=Ne));a.avail_in>0&&s===Le&&a.state.wrap>0&&0!==t[a.next_in];)Ue.inflateReset(a),s=Ue.inflate(a,r);switch(s){case Ie:case Be:case Ne:case Ce:return this.onEnd(s),this.ended=!0,!1}if(o=a.avail_out,a.next_out&&(0===a.avail_out||s===Le))if("string"===this.options.to){let t=Bt(a.output,a.next_out),e=a.next_out-t,n=It(a.output,t);a.next_out=e,a.avail_out=i-e,e&&a.output.set(a.output.subarray(t,t+e),0),this.onData(n)}else this.onData(a.output.length===a.next_out?a.output:a.output.subarray(0,a.next_out));if(s!==Fe||0!==o){if(s===Le)return s=Ue.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(0===a.avail_in)break}}return!0},He.prototype.onData=function(t){this.chunks.push(t)},He.prototype.onEnd=function(t){t===Fe&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};const{Deflate:Me,deflate:je,deflateRaw:Ke,gzip:Pe}=Vt;var Ye=Me,Ge=je,Xe=B;const We=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const e=this._hasEvents?",":"";this.deflate.push(e+t,Xe.Z_SYNC_FLUSH),this._hasEvents=!0}finish(){if(this.deflate.push("]",Xe.Z_FINISH),this.deflate.err)throw this.deflate.err;const t=this.deflate.result;return this._init(),t}_init(){this._hasEvents=!1,this.deflate=new Ye,this.deflate.push("[",Xe.Z_NO_FLUSH)}},qe={clear:()=>{We.clear()},addEvent:t=>We.addEvent(t),finish:()=>We.finish(),compress:t=>function(t){return Ge(t)}(t)};addEventListener("message",(function(t){const e=t.data.method,a=t.data.id,i=t.data.arg;if(e in qe&&"function"==typeof qe[e])try{const t=qe[e](i);postMessage({id:a,method:e,success:!0,response:t})}catch(t){postMessage({id:a,method:e,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});']);
                                return URL.createObjectURL(t)
                            }();
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.log("[Replay] Using compression worker");
                            let e = new Worker(t);
                            return new ee(e)
                        } catch (t) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.log("[Replay] Failed to create compression worker")
                        }
                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.log("[Replay] Using simple buffer"), new t7
                    }({
                        useCompression: this._options.useCompression
                    }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this.startRecording()
                }
                _handleException(t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.error("[Replay]", t), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this._options._experiments && this._options._experiments.captureExceptions && (0, k.captureException)(t)
                }
                _loadAndCheckSession() {
                    let {
                        type: t,
                        session: e
                    } = el({
                        timeouts: this.timeouts,
                        stickySession: !!this._options.stickySession,
                        currentSession: this.session,
                        sessionSampleRate: this._options.sessionSampleRate,
                        allowBuffering: this._options.errorSampleRate > 0 || "buffer" === this.recordingMode
                    });
                    "new" === t && this.setInitialState();
                    let n = this.getSessionId();
                    return e.id !== n && (e.previousSessionId = n), this.session = e, !!this.session.sampled || (this.stop("session unsampled"), !1)
                }
                _addListeners() {
                    try {
                        x.document.addEventListener("visibilitychange", this._handleVisibilityChange), x.addEventListener("blur", this._handleWindowBlur), x.addEventListener("focus", this._handleWindowFocus), x.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), !this._hasInitializedCoreListeners && (! function(t) {
                            var e;
                            let n = (0, k.getCurrentHub)().getScope(),
                                r = (0, k.getCurrentHub)().getClient();
                            n && n.addScopeListener(eU(t)), (0, T.addInstrumentationHandler)("dom", t5(t)), (0, T.addInstrumentationHandler)("history", (e = t, t => {
                                    if (!e.isEnabled()) return;
                                    let n = function(t) {
                                        let {
                                            from: e,
                                            to: n
                                        } = t, r = Date.now() / 1e3;
                                        return {
                                            type: "navigation.push",
                                            start: r,
                                            end: r,
                                            name: n,
                                            data: {
                                                previous: e
                                            }
                                        }
                                    }(t);
                                    null !== n && (e.getContext().urls.push(n.name), e.triggerUserActivity(), e.addUpdate(() => (eh(e, [n]), !1)))
                                })), ! function(t) {
                                    let e = (0, k.getCurrentHub)().getClient();
                                    try {
                                        let i = new TextEncoder,
                                            {
                                                networkDetailAllowUrls: a,
                                                networkDetailDenyUrls: o,
                                                networkCaptureBodies: s,
                                                networkRequestHeaders: l,
                                                networkResponseHeaders: c
                                            } = t.getOptions(),
                                            u = {
                                                replay: t,
                                                textEncoder: i,
                                                networkDetailAllowUrls: a,
                                                networkDetailDenyUrls: o,
                                                networkCaptureBodies: s,
                                                networkRequestHeaders: l,
                                                networkResponseHeaders: c
                                            };
                                        if (e && e.on) e.on("beforeAddBreadcrumb", (t, e) => (function(t, e, n) {
                                            if (e.data) try {
                                                (function(t) {
                                                    return "xhr" === t.category
                                                })(e) && function(t) {
                                                    return t && t.xhr
                                                }(n) && (! function(t, e, n) {
                                                    let {
                                                        xhr: r,
                                                        input: i
                                                    } = e, a = eg(i, n.textEncoder), o = r.getResponseHeader("content-length") ? ey(r.getResponseHeader("content-length")) : eg(r.response, n.textEncoder);
                                                    void 0 !== a && (t.data.request_body_size = a), void 0 !== o && (t.data.response_body_size = o)
                                                }(e, n, t), eA(e, n, t)),
                                                function(t) {
                                                    return "fetch" === t.category
                                                }(e) && function(t) {
                                                    return t && t.response
                                                }(n) && (! function(t, e, n) {
                                                    let {
                                                        input: r,
                                                        response: i
                                                    } = e, a = eI(r), o = eg(a, n.textEncoder), s = i ? ey(i.headers.get("content-length")) : void 0;
                                                    void 0 !== o && (t.data.request_body_size = o), void 0 !== s && (t.data.response_body_size = s)
                                                }(e, n, t), eR(e, n, t))
                                            } catch (t) {
                                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.warn("Error when enriching network breadcrumb")
                                            }
                                        })(u, t, e));
                                        else {
                                            var n, r;
                                            (0, T.addInstrumentationHandler)("fetch", (n = t, t => {
                                                if (!n.isEnabled()) return;
                                                let e = function(t) {
                                                    let {
                                                        startTimestamp: e,
                                                        endTimestamp: n,
                                                        fetchData: r,
                                                        response: i
                                                    } = t;
                                                    if (!n) return null;
                                                    let {
                                                        method: a,
                                                        url: o
                                                    } = r;
                                                    return {
                                                        type: "resource.fetch",
                                                        start: e / 1e3,
                                                        end: n / 1e3,
                                                        name: o,
                                                        data: {
                                                            method: a,
                                                            statusCode: i ? i.status : void 0
                                                        }
                                                    }
                                                }(t);
                                                ep(n, e)
                                            })), (0, T.addInstrumentationHandler)("xhr", (r = t, t => {
                                                if (!r.isEnabled()) return;
                                                let e = function(t) {
                                                    let {
                                                        startTimestamp: e,
                                                        endTimestamp: n,
                                                        xhr: r
                                                    } = t, i = r[T.SENTRY_XHR_DATA_KEY];
                                                    if (!e || !n || !i) return null;
                                                    let {
                                                        method: a,
                                                        url: o,
                                                        status_code: s
                                                    } = i;
                                                    return void 0 === o ? null : {
                                                        type: "resource.xhr",
                                                        name: o,
                                                        start: e / 1e3,
                                                        end: n / 1e3,
                                                        data: {
                                                            method: a,
                                                            statusCode: s
                                                        }
                                                    }
                                                }(t);
                                                ep(r, e)
                                            }))
                                        }
                                    } catch (t) {}
                                }(t), (0, k.addGlobalEventProcessor)(function(t) {
                                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                        n = e ? ef(t) : void 0;
                                    return (e, r) => {
                                        var i, a, o, s;
                                        if ("replay_event" === e.type) return delete e.breadcrumbs, e;
                                        if (e.type && !ed(e)) return e;
                                        if (i = e, a = r, !i.type && i.exception && i.exception.values && i.exception.values.length && (a.originalException && a.originalException.__rrweb__ || i.exception.values.some(t => !!t.stacktrace && !!t.stacktrace.frames && !!t.stacktrace.frames.length && t.stacktrace.frames.some(t => t.filename && t.filename.includes("/rrweb/src/")))) && !t.getOptions()._experiments.captureExceptions) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.log("[Replay] Ignoring error from rrweb internals", e), null;
                                        let l = (o = t, s = e, "buffer" === o.recordingMode && s.message !== N && !!s.exception && !s.type && ea(o.getOptions().errorSampleRate)),
                                            c = l || "session" === t.recordingMode;
                                        return c && (e.tags = {
                                            ...e.tags,
                                            replayId: t.getSessionId()
                                        }), n && n(e, {
                                            statusCode: 200
                                        }), e
                                    }
                                }(t, ! function(t) {
                                    return !!(t && t.on)
                                }(r))),
                                function(t) {
                                    return !!(t && t.on)
                                }(r) && (r.on("afterSendEvent", ef(t)), r.on("createDsc", e => {
                                    let n = t.getSessionId();
                                    n && t.isEnabled() && "session" === t.recordingMode && (e.replay_id = n)
                                }), r.on("startTransaction", e => {
                                    t.lastTransaction = e
                                }), r.on("finishTransaction", e => {
                                    t.lastTransaction = e
                                }))
                        }(this), this._hasInitializedCoreListeners = !0)
                    } catch (t) {
                        this._handleException(t)
                    }
                    "PerformanceObserver" in x && (this._performanceObserver = function(t) {
                        let e = new PerformanceObserver(e => {
                            let n = function(t, e) {
                                let [n, r, i] = t.reduce((t, e) => ("navigation" === e.entryType ? t[0].push(e) : "largest-contentful-paint" === e.entryType ? t[1].push(e) : t[2].push(e), t), [
                                    [],
                                    [],
                                    []
                                ]), a = [], o = [], s = r.length ? r[r.length - 1] : void 0;
                                return e.forEach(t => {
                                    if ("largest-contentful-paint" === t.entryType) {
                                        (!s || s.startTime < t.startTime) && (s = t);
                                        return
                                    }
                                    if ("navigation" === t.entryType) {
                                        t.duration > 0 && !n.find(t4(t)) && !o.find(t4(t)) && o.push(t);
                                        return
                                    }
                                    a.push(t)
                                }), [...s ? [s] : [], ...n, ...i, ...a, ...o].sort((t, e) => t.startTime - e.startTime)
                            }(t.performanceEvents, e.getEntries());
                            t.performanceEvents = n
                        });
                        return ["element", "event", "first-input", "largest-contentful-paint", "layout-shift", "longtask", "navigation", "paint", "resource"].forEach(t => {
                            try {
                                e.observe({
                                    type: t,
                                    buffered: !0
                                })
                            } catch (t) {}
                        }), e
                    }(this))
                }
                _removeListeners() {
                    try {
                        x.document.removeEventListener("visibilitychange", this._handleVisibilityChange), x.removeEventListener("blur", this._handleWindowBlur), x.removeEventListener("focus", this._handleWindowFocus), x.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceObserver && (this._performanceObserver.disconnect(), this._performanceObserver = null)
                    } catch (t) {
                        this._handleException(t)
                    }
                }
                __init13() {
                    this._handleVisibilityChange = () => {
                        "visible" === x.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
                    }
                }
                __init14() {
                    this._handleWindowBlur = () => {
                        let t = t1({
                            category: "ui.blur"
                        });
                        this._doChangeToBackgroundTasks(t)
                    }
                }
                __init15() {
                    this._handleWindowFocus = () => {
                        let t = t1({
                            category: "ui.focus"
                        });
                        this._doChangeToForegroundTasks(t)
                    }
                }
                __init16() {
                    this._handleKeyboardEvent = t => {
                        ! function(t, e) {
                            if (!t.isEnabled()) return;
                            t.updateUserActivity();
                            let n = function(t) {
                                let {
                                    metaKey: e,
                                    shiftKey: n,
                                    ctrlKey: r,
                                    altKey: i,
                                    key: a,
                                    target: o
                                } = t;
                                if (!o || function(t) {
                                        return "INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable
                                    }(o) || !a) return null;
                                let s = 1 === a.length;
                                if (!(e || r || i) && s) return null;
                                let l = (0, T.htmlTreeAsString)(o, {
                                        maxStringLength: 200
                                    }) || "<unknown>",
                                    c = t3(o, l);
                                return t1({
                                    category: "ui.keyDown",
                                    message: l,
                                    data: {
                                        ...c.data,
                                        metaKey: e,
                                        shiftKey: n,
                                        ctrlKey: r,
                                        altKey: i,
                                        key: a
                                    }
                                })
                            }(e);
                            n && tK(t, n)
                        }(this, t)
                    }
                }
                _doChangeToBackgroundTasks(t) {
                    if (!this.session) return;
                    let e = ei(this.session, this.timeouts);
                    t && !e && this._createCustomBreadcrumb(t), this.conditionalFlush()
                }
                _doChangeToForegroundTasks(t) {
                    if (!this.session) return;
                    let e = this.checkAndHandleExpiredSession();
                    if (!e) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.log("[Replay] Document has become active, but session has expired");
                        return
                    }
                    t && this._createCustomBreadcrumb(t)
                }
                _triggerFullSnapshot() {
                    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    try {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.log("[Replay] Taking full rrweb snapshot"), tZ.takeFullSnapshot(t)
                    } catch (t) {
                        this._handleException(t)
                    }
                }
                _updateUserActivity() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
                    this._lastActivity = t
                }
                _updateSessionActivity() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
                    this.session && (this.session.lastActivity = t, this._maybeSaveSession())
                }
                _createCustomBreadcrumb(t) {
                    this.addUpdate(() => {
                        this.throttledAddEvent({
                            type: g.Custom,
                            timestamp: t.timestamp || 0,
                            data: {
                                tag: "breadcrumb",
                                payload: t
                            }
                        })
                    })
                }
                _addPerformanceEntries() {
                    let t = [...this.performanceEvents];
                    return this.performanceEvents = [], Promise.all(eh(this, t.map(ez).filter(Boolean)))
                }
                _clearContext() {
                    this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = []
                }
                _updateInitialTimestampFromEventBuffer() {
                    let {
                        session: t,
                        eventBuffer: e
                    } = this;
                    if (!t || !e || t.segmentId) return;
                    let n = e.getEarliestTimestamp();
                    n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n)
                }
                _popEventContext() {
                    let t = {
                        initialTimestamp: this._context.initialTimestamp,
                        initialUrl: this._context.initialUrl,
                        errorIds: Array.from(this._context.errorIds),
                        traceIds: Array.from(this._context.traceIds),
                        urls: this._context.urls
                    };
                    return this._clearContext(), t
                }
                async _runFlush() {
                    if (!this.session || !this.eventBuffer) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.error("[Replay] No session or eventBuffer found to flush.");
                        return
                    }
                    if (await this._addPerformanceEntries(), !!this.eventBuffer && !!this.eventBuffer.hasEvents) {
                        if (await eM(this), this.eventBuffer) try {
                            this._updateInitialTimestampFromEventBuffer();
                            let t = await this.eventBuffer.finish(),
                                e = this.session.id,
                                n = this._popEventContext(),
                                r = this.session.segmentId++;
                            this._maybeSaveSession(), await eY({
                                replayId: e,
                                recordingData: t,
                                segmentId: r,
                                eventContext: n,
                                session: this.session,
                                options: this.getOptions(),
                                timestamp: Date.now()
                            })
                        } catch (e) {
                            this._handleException(e), this.stop("sendReplay");
                            let t = (0, k.getCurrentHub)().getClient();
                            t && t.recordDroppedEvent("send_error", "replay")
                        }
                    }
                }
                __init17() {
                    var t = this;
                    this._flush = async function() {
                        let {
                            force: e = !1
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (!t._isEnabled && !e) return;
                        if (!t.checkAndHandleExpiredSession()) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.error("[Replay] Attempting to finish replay event after session expired.");
                            return
                        }
                        if (!t.session) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.error("[Replay] No session found to flush.");
                            return
                        }
                        let n = t.session.started,
                            r = Date.now(),
                            i = r - n;
                        if (i < t._options.minReplayDuration || i > t.timeouts.maxSessionLife + 5e3) {
                            let e = t.getOptions()._experiments.traceInternals ? console.warn : T.logger.warn;
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e("[Replay] Session duration (".concat(Math.floor(i / 1e3), "s) is too short or too long, not sending replay."));
                            return
                        }
                        if (t._debouncedFlush.cancel(), !t._flushLock) {
                            t._flushLock = t._runFlush(), await t._flushLock, t._flushLock = null;
                            return
                        }
                        try {
                            await t._flushLock
                        } catch (t) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && T.logger.error(t)
                        } finally {
                            t._debouncedFlush()
                        }
                    }
                }
                _maybeSaveSession() {
                    this.session && this._options.stickySession && eo(this.session)
                }
                __init18() {
                    this._onMutationHandler = t => {
                        let e = t.length,
                            n = this._options.mutationLimit,
                            r = this._options.mutationBreadcrumbLimit,
                            i = n && e > n;
                        if (e > r || i) {
                            let t = t1({
                                category: "replay.mutations",
                                data: {
                                    count: e,
                                    limit: i
                                }
                            });
                            this._createCustomBreadcrumb(t)
                        }
                        return !i || (this.stop("mutationLimit"), !1)
                    }
                }
                constructor({
                    options: t,
                    recordingOptions: e
                }) {
                    eq.prototype.__init.call(this), eq.prototype.__init2.call(this), eq.prototype.__init3.call(this), eq.prototype.__init4.call(this), eq.prototype.__init5.call(this), eq.prototype.__init6.call(this), eq.prototype.__init7.call(this), eq.prototype.__init8.call(this), eq.prototype.__init9.call(this), eq.prototype.__init10.call(this), eq.prototype.__init11.call(this), eq.prototype.__init12.call(this), eq.prototype.__init13.call(this), eq.prototype.__init14.call(this), eq.prototype.__init15.call(this), eq.prototype.__init16.call(this), eq.prototype.__init17.call(this), eq.prototype.__init18.call(this), this._recordingOptions = e, this._options = t, this._debouncedFlush = function(t, e, n) {
                        let r, i, a;
                        let o = n && n.maxWait ? Math.max(n.maxWait, e) : 0;

                        function s() {
                            return l(), r = t()
                        }

                        function l() {
                            void 0 !== i && clearTimeout(i), void 0 !== a && clearTimeout(a), i = a = void 0
                        }

                        function c() {
                            return i && clearTimeout(i), i = setTimeout(s, e), o && void 0 === a && (a = setTimeout(s, o)), r
                        }
                        return c.cancel = l, c.flush = function() {
                            return void 0 !== i || void 0 !== a ? s() : r
                        }, c
                    }(() => this._flush(), this._options.flushMinDelay, {
                        maxWait: this._options.flushMaxDelay
                    }), this._throttledAddEvent = function(t, e, n) {
                        let r = new Map,
                            i = t => {
                                let e = t - 5;
                                r.forEach((t, n) => {
                                    n < e && r.delete(n)
                                })
                            },
                            a = () => [...r.values()].reduce((t, e) => t + e, 0),
                            o = !1;
                        return function() {
                            for (var e = arguments.length, n = Array(e), s = 0; s < e; s++) n[s] = arguments[s];
                            let l = Math.floor(Date.now() / 1e3);
                            if (i(l), a() >= 300) {
                                let t = o;
                                return o = !0, t ? "__SKIPPED" : ej
                            }
                            o = !1;
                            let c = r.get(l) || 0;
                            return r.set(l, c + 1), t(...n)
                        }
                    }((t, e) => ec(this, t, e), 300, 5);
                    let {
                        slowClickTimeout: n,
                        slowClickIgnoreSelectors: r
                    } = this.getOptions(), i = n ? {
                        threshold: Math.min(3e3, n),
                        timeout: n,
                        scrollTimeout: 300,
                        ignoreSelector: r ? r.join(",") : ""
                    } : void 0;
                    i && (this.clickDetector = new t$(this, i))
                }
            }

            function eZ(t, e, n, r) {
                let i = "string" == typeof r ? r.split(",") : [],
                    a = [...t, ...i, ...e];
                return void 0 !== n && ("string" == typeof n && a.push(".".concat(n)), console.warn("[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration.")), a.join(",")
            }

            function eV() {
                return "undefined" != typeof window && (!(0, T.isNodeEnv)() || function() {
                    return void 0 !== R && "renderer" === R.type
                }())
            }
            let eK = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
                eX = ["content-length", "content-type", "accept"],
                eJ = !1;
            class e$ {
                static __initStatic() {
                    this.id = "Replay"
                }
                __init() {
                    this.name = e$.id
                }
                get _isInitialized() {
                    return eJ
                }
                set _isInitialized(t) {
                    eJ = t
                }
                setupOnce() {
                    eV() && (this._setup(), setTimeout(() => this._initialize()))
                }
                start() {
                    this._replay && this._replay.start()
                }
                startBuffering() {
                    this._replay && this._replay.startBuffering()
                }
                stop() {
                    return this._replay ? this._replay.stop() : Promise.resolve()
                }
                flush(t) {
                    return this._replay && this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(t) : Promise.resolve()
                }
                getReplayId() {
                    if (this._replay && this._replay.isEnabled()) return this._replay.getSessionId()
                }
                _initialize() {
                    this._replay && this._replay.initializeSampling()
                }
                _setup() {
                    let t = function(t) {
                        let e = (0, k.getCurrentHub)().getClient(),
                            n = e && e.getOptions(),
                            r = {
                                sessionSampleRate: 0,
                                errorSampleRate: 0,
                                ...(0, T.dropUndefinedKeys)(t)
                            };
                        return n ? (null == t.sessionSampleRate && null == t.errorSampleRate && null == n.replaysSessionSampleRate && null == n.replaysOnErrorSampleRate && console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set."), "number" == typeof n.replaysSessionSampleRate && (r.sessionSampleRate = n.replaysSessionSampleRate), "number" == typeof n.replaysOnErrorSampleRate && (r.errorSampleRate = n.replaysOnErrorSampleRate), r) : (console.warn("SDK client is not available."), r)
                    }(this._initialOptions);
                    this._replay = new eq({
                        options: t,
                        recordingOptions: this._recordingOptions
                    })
                }
                constructor({
                    flushMinDelay: t = 5e3,
                    flushMaxDelay: e = 5500,
                    minReplayDuration: n = 4999,
                    stickySession: r = !0,
                    useCompression: i = !0,
                    _experiments: a = {},
                    sessionSampleRate: o,
                    errorSampleRate: s,
                    maskAllText: l = !0,
                    maskAllInputs: c = !0,
                    blockAllMedia: u = !0,
                    mutationBreadcrumbLimit: d = 750,
                    mutationLimit: f = 1e4,
                    slowClickTimeout: h = 7e3,
                    slowClickIgnoreSelectors: p = [],
                    networkDetailAllowUrls: _ = [],
                    networkDetailDenyUrls: m = [],
                    networkCaptureBodies: g = !0,
                    networkRequestHeaders: y = [],
                    networkResponseHeaders: v = [],
                    mask: b = [],
                    unmask: E = [],
                    block: w = [],
                    unblock: S = [],
                    ignore: k = [],
                    maskFn: T,
                    beforeAddRecordingEvent: R,
                    blockClass: x,
                    blockSelector: D,
                    maskInputOptions: N,
                    maskTextClass: I,
                    maskTextSelector: O,
                    ignoreClass: C
                } = {}) {
                    if (e$.prototype.__init.call(this), this._recordingOptions = {
                            maskAllInputs: c,
                            maskAllText: l,
                            maskInputOptions: {
                                ...N || {},
                                password: !0
                            },
                            maskTextFn: T,
                            maskInputFn: T,
                            ... function(t) {
                                let {
                                    mask: e,
                                    unmask: n,
                                    block: r,
                                    unblock: i,
                                    ignore: a,
                                    blockClass: o,
                                    blockSelector: s,
                                    maskTextClass: l,
                                    maskTextSelector: c,
                                    ignoreClass: u
                                } = t, d = eZ(e, [".sentry-mask", "[data-sentry-mask]"], l, c), f = eZ(n, [".sentry-unmask", "[data-sentry-unmask]"]), h = {
                                    maskTextSelector: d,
                                    unmaskTextSelector: f,
                                    maskInputSelector: d,
                                    unmaskInputSelector: f,
                                    blockSelector: eZ(r, [".sentry-block", "[data-sentry-block]", 'base[href="/"]'], o, s),
                                    unblockSelector: eZ(i, [".sentry-unblock", "[data-sentry-unblock]"]),
                                    ignoreSelector: eZ(a, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'], u)
                                };
                                return o instanceof RegExp && (h.blockClass = o), l instanceof RegExp && (h.maskTextClass = l), h
                            }({
                                mask: b,
                                unmask: E,
                                block: w,
                                unblock: S,
                                ignore: k,
                                blockClass: x,
                                blockSelector: D,
                                maskTextClass: I,
                                maskTextSelector: O,
                                ignoreClass: C
                            }),
                            slimDOMOptions: "all",
                            inlineStylesheet: !0,
                            inlineImages: !1,
                            collectFonts: !0
                        }, this._initialOptions = {
                            flushMinDelay: t,
                            flushMaxDelay: e,
                            minReplayDuration: Math.min(n, 15e3),
                            stickySession: r,
                            sessionSampleRate: o,
                            errorSampleRate: s,
                            useCompression: i,
                            blockAllMedia: u,
                            maskAllInputs: c,
                            maskAllText: l,
                            mutationBreadcrumbLimit: d,
                            mutationLimit: f,
                            slowClickTimeout: h,
                            slowClickIgnoreSelectors: p,
                            networkDetailAllowUrls: _,
                            networkDetailDenyUrls: m,
                            networkCaptureBodies: g,
                            networkRequestHeaders: eQ(y),
                            networkResponseHeaders: eQ(v),
                            beforeAddRecordingEvent: R,
                            _experiments: a
                        }, "number" == typeof o && (console.warn("[Replay] You are passing `sessionSampleRate` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure `replaysSessionSampleRate` directly in the SDK init options, e.g.:\nSentry.init({ replaysSessionSampleRate: ".concat(o, " })")), this._initialOptions.sessionSampleRate = o), "number" == typeof s && (console.warn("[Replay] You are passing `errorSampleRate` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure `replaysOnErrorSampleRate` directly in the SDK init options, e.g.:\nSentry.init({ replaysOnErrorSampleRate: ".concat(s, " })")), this._initialOptions.errorSampleRate = s), this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? "".concat(this._recordingOptions.blockSelector, ",").concat(eK) : eK), this._isInitialized && eV()) throw Error("Multiple Sentry Session Replay instances are not supported");
                    this._isInitialized = !0
                }
            }
            e$.__initStatic();

            function eQ(t) {
                return [...eX, ...t.map(t => t.toLowerCase())]
            }
        },
        198373: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                applyAggregateErrorsToEvent: function() {
                    return a
                }
            });
            var r = n("106145"),
                i = n("768538");

            function a(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 250,
                    a = arguments.length > 3 ? arguments[3] : void 0,
                    l = arguments.length > 4 ? arguments[4] : void 0,
                    c = arguments.length > 5 ? arguments[5] : void 0,
                    u = arguments.length > 6 ? arguments[6] : void 0;
                if (!c.exception || !c.exception.values || !u || !(0, r.isInstanceOf)(u.originalException, Error)) return;
                let d = c.exception.values.length > 0 ? c.exception.values[c.exception.values.length - 1] : void 0;
                d && (c.exception.values = function(t, e) {
                    return t.map(t => (t.value && (t.value = (0, i.truncate)(t.value, e)), t))
                }(function t(e, n, i, a, l, c, u, d) {
                    if (c.length >= i + 1) return c;
                    let f = [...c];
                    if ((0, r.isInstanceOf)(a[l], Error)) {
                        o(u, d);
                        let r = e(n, a[l]),
                            c = f.length;
                        s(r, l, c, d), f = t(e, n, i, a[l], l, [r, ...f], r, c)
                    }
                    return Array.isArray(a.errors) && a.errors.forEach((a, c) => {
                        if ((0, r.isInstanceOf)(a, Error)) {
                            o(u, d);
                            let r = e(n, a),
                                h = f.length;
                            s(r, "errors[".concat(c, "]"), h, d), f = t(e, n, i, a, l, [r, ...f], r, h)
                        }
                    }), f
                }(t, e, l, u.originalException, a, c.exception.values, d, 0), n))
            }

            function o(t, e) {
                t.mechanism = t.mechanism || {
                    type: "generic",
                    handled: !0
                }, t.mechanism = {
                    ...t.mechanism,
                    is_exception_group: !0,
                    exception_id: e
                }
            }

            function s(t, e, n, r) {
                t.mechanism = t.mechanism || {
                    type: "generic",
                    handled: !0
                }, t.mechanism = {
                    ...t.mechanism,
                    type: "chained",
                    source: e,
                    exception_id: n,
                    parent_id: r
                }
            }
        },
        167875: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BAGGAGE_HEADER_NAME: function() {
                    return a
                },
                baggageHeaderToDynamicSamplingContext: function() {
                    return l
                },
                dynamicSamplingContextToSentryBaggageHeader: function() {
                    return c
                }
            });
            var r = n("106145"),
                i = n("587254");
            let a = "baggage",
                o = "sentry-",
                s = /^sentry-/;

            function l(t) {
                if (!(0, r.isString)(t) && !Array.isArray(t)) return;
                let e = {};
                if (Array.isArray(t)) e = t.reduce((t, e) => {
                    let n = u(e);
                    return {
                        ...t,
                        ...n
                    }
                }, {});
                else {
                    if (!t) return;
                    e = u(t)
                }
                let n = Object.entries(e).reduce((t, e) => {
                    let [n, r] = e;
                    if (n.match(s)) {
                        let e = n.slice(o.length);
                        t[e] = r
                    }
                    return t
                }, {});
                return Object.keys(n).length > 0 ? n : void 0
            }

            function c(t) {
                if (!t) return;
                let e = Object.entries(t).reduce((t, e) => {
                    let [n, r] = e;
                    return r && (t["".concat(o).concat(n)] = r), t
                }, {});
                return function(t) {
                    if (0 !== Object.keys(t).length) return Object.entries(t).reduce((t, e, n) => {
                        let [r, a] = e, o = "".concat(encodeURIComponent(r), "=").concat(encodeURIComponent(a)), s = 0 === n ? o : "".concat(t, ",").concat(o);
                        return s.length > 8192 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("Not adding key: ".concat(r, " with val: ").concat(a, " to baggage header due to exceeding baggage size limits.")), t) : s
                    }, "")
                }(e)
            }

            function u(t) {
                return t.split(",").map(t => t.split("=").map(t => decodeURIComponent(t.trim()))).reduce((t, e) => {
                    let [n, r] = e;
                    return t[n] = r, t
                }, {})
            }
        },
        315250: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getDomElement: function() {
                    return l
                },
                getLocationHref: function() {
                    return s
                },
                htmlTreeAsString: function() {
                    return o
                }
            });
            var r = n("106145"),
                i = n("232945");
            let a = (0, i.getGlobalObject)();

            function o(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                try {
                    let n, i = t,
                        a = [],
                        o = 0,
                        s = 0,
                        l = 3,
                        c = Array.isArray(e) ? e : e.keyAttrs,
                        u = !Array.isArray(e) && e.maxStringLength || 80;
                    for (; i && o++ < 5 && (n = function(t, e) {
                            let n, i, a, o, s;
                            let l = [];
                            if (!t || !t.tagName) return "";
                            l.push(t.tagName.toLowerCase());
                            let c = e && e.length ? e.filter(e => t.getAttribute(e)).map(e => [e, t.getAttribute(e)]) : null;
                            if (c && c.length) c.forEach(t => {
                                l.push("[".concat(t[0], '="').concat(t[1], '"]'))
                            });
                            else if (t.id && l.push("#".concat(t.id)), (n = t.className) && (0, r.isString)(n))
                                for (s = 0, i = n.split(/\s+/); s < i.length; s++) l.push(".".concat(i[s]));
                            let u = ["aria-label", "type", "name", "title", "alt"];
                            for (s = 0; s < u.length; s++) a = u[s], (o = t.getAttribute(a)) && l.push("[".concat(a, '="').concat(o, '"]'));
                            return l.join("")
                        }(i, c), "html" !== n && (!(o > 1) || !(s + a.length * l + n.length >= u)));) {
                        ;
                        a.push(n), s += n.length, i = i.parentNode
                    }
                    return a.reverse().join(" > ")
                } catch (t) {
                    return "<unknown>"
                }
            }

            function s() {
                try {
                    return a.document.location.href
                } catch (t) {
                    return ""
                }
            }

            function l(t) {
                return a.document && a.document.querySelector ? a.document.querySelector(t) : null
            }
        },
        603970: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                createClientReportEnvelope: function() {
                    return a
                }
            });
            var r = n("870322"),
                i = n("498736");

            function a(t, e, n) {
                let a = [{
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
        704391: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                dsnFromString: function() {
                    return o
                },
                dsnToString: function() {
                    return a
                },
                makeDsn: function() {
                    return l
                }
            });
            var r = n("587254");
            let i = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

            function a(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        host: n,
                        path: r,
                        pass: i,
                        port: a,
                        projectId: o,
                        protocol: s,
                        publicKey: l
                    } = t;
                return "".concat(s, "://").concat(l).concat(e && i ? ":".concat(i) : "") + "@".concat(n).concat(a ? ":".concat(a) : "", "/").concat(r ? "".concat(r, "/") : r).concat(o)
            }

            function o(t) {
                let e = i.exec(t);
                if (!e) {
                    console.error("Invalid Sentry Dsn: ".concat(t));
                    return
                }
                let [n, r, a = "", o, l = "", c] = e.slice(1), u = "", d = c, f = d.split("/");
                if (f.length > 1 && (u = f.slice(0, -1).join("/"), d = f.pop()), d) {
                    let t = d.match(/^\d+/);
                    t && (d = t[0])
                }
                return s({
                    host: o,
                    pass: a,
                    path: u,
                    projectId: d,
                    port: l,
                    protocol: n,
                    publicKey: r
                })
            }

            function s(t) {
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

            function l(t) {
                let e = "string" == typeof t ? o(t) : s(t);
                if (e && function(t) {
                        var e;
                        if (!("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__)) return !0;
                        let {
                            port: n,
                            projectId: i,
                            protocol: a
                        } = t, o = ["protocol", "publicKey", "host", "projectId"].find(e => !t[e] && (r.logger.error("Invalid Sentry Dsn: ".concat(e, " missing")), !0));
                        if (o) return !1;
                        if (!i.match(/^\d+$/)) return r.logger.error("Invalid Sentry Dsn: Invalid projectId ".concat(i)), !1;
                        return "http" === (e = a) || "https" === e ? !(n && isNaN(parseInt(n, 10))) || (r.logger.error("Invalid Sentry Dsn: Invalid port ".concat(n)), !1) : (r.logger.error("Invalid Sentry Dsn: Invalid protocol ".concat(a)), !1)
                    }(e)) return e
            }
        },
        149473: function(t, e, n) {
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
        870322: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                addItemToEnvelope: function() {
                    return s
                },
                createAttachmentEnvelopeItem: function() {
                    return h
                },
                createEnvelope: function() {
                    return o
                },
                createEventEnvelopeHeaders: function() {
                    return g
                },
                envelopeContainsItemType: function() {
                    return c
                },
                envelopeItemTypeToDataCategory: function() {
                    return _
                },
                forEachEnvelopeItem: function() {
                    return l
                },
                getSdkMetadataForEnvelopeHeader: function() {
                    return m
                },
                parseEnvelope: function() {
                    return f
                },
                serializeEnvelope: function() {
                    return d
                }
            });
            var r = n("704391"),
                i = n("696634"),
                a = n("654069");

            function o(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return [t, e]
            }

            function s(t, e) {
                let [n, r] = t;
                return [n, [...r, e]]
            }

            function l(t, e) {
                let n = t[1];
                for (let t of n) {
                    let n = t[0].type,
                        r = e(t, n);
                    if (r) return !0
                }
                return !1
            }

            function c(t, e) {
                return l(t, (t, n) => e.includes(n))
            }

            function u(t, e) {
                let n = e || new TextEncoder;
                return n.encode(t)
            }

            function d(t, e) {
                let [n, r] = t, a = JSON.stringify(n);

                function o(t) {
                    "string" == typeof a ? a = "string" == typeof t ? a + t : [u(a, e), t] : a.push("string" == typeof t ? u(t, e) : t)
                }
                for (let t of r) {
                    let [e, n] = t;
                    if (o("\n".concat(JSON.stringify(e), "\n")), "string" == typeof n || n instanceof Uint8Array) o(n);
                    else {
                        let t;
                        try {
                            t = JSON.stringify(n)
                        } catch (e) {
                            t = JSON.stringify((0, i.normalize)(n))
                        }
                        o(t)
                    }
                }
                return "string" == typeof a ? a : function(t) {
                    let e = t.reduce((t, e) => t + e.length, 0),
                        n = new Uint8Array(e),
                        r = 0;
                    for (let e of t) n.set(e, r), r += e.length;
                    return n
                }(a)
            }

            function f(t, e, n) {
                let r = "string" == typeof t ? e.encode(t) : t;

                function i(t) {
                    let e = r.subarray(0, t);
                    return r = r.subarray(t + 1), e
                }

                function a() {
                    let t = r.indexOf(10);
                    return t < 0 && (t = r.length), JSON.parse(n.decode(i(t)))
                }
                let o = a(),
                    s = [];
                for (; r.length;) {
                    let t = a(),
                        e = "number" == typeof t.length ? t.length : void 0;
                    s.push([t, e ? i(e) : a()])
                }
                return [o, s]
            }

            function h(t, e) {
                let n = "string" == typeof t.data ? u(t.data, e) : t.data;
                return [(0, a.dropUndefinedKeys)({
                    type: "attachment",
                    length: n.length,
                    filename: t.filename,
                    content_type: t.contentType,
                    attachment_type: t.attachmentType
                }), n]
            }
            let p = {
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

            function _(t) {
                return p[t]
            }

            function m(t) {
                if (!t || !t.sdk) return;
                let {
                    name: e,
                    version: n
                } = t.sdk;
                return {
                    name: e,
                    version: n
                }
            }

            function g(t, e, n, i) {
                let o = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
                return {
                    event_id: t.event_id,
                    sent_at: new Date().toISOString(),
                    ...e && {
                        sdk: e
                    },
                    ...!!n && {
                        dsn: (0, r.dsnToString)(i)
                    },
                    ...o && {
                        trace: (0, a.dropUndefinedKeys)({
                            ...o
                        })
                    }
                }
            }
        },
        933029: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                SentryError: function() {
                    return r
                }
            });
            class r extends Error {
                constructor(t, e = "warn") {
                    super(t), this.message = t, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = e
                }
            }
        },
        103787: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                applyAggregateErrorsToEvent: function() {
                    return r.applyAggregateErrorsToEvent
                },
                getDomElement: function() {
                    return i.getDomElement
                },
                getLocationHref: function() {
                    return i.getLocationHref
                },
                htmlTreeAsString: function() {
                    return i.htmlTreeAsString
                },
                dsnFromString: function() {
                    return a.dsnFromString
                },
                dsnToString: function() {
                    return a.dsnToString
                },
                makeDsn: function() {
                    return a.makeDsn
                },
                SentryError: function() {
                    return o.SentryError
                },
                GLOBAL_OBJ: function() {
                    return s.GLOBAL_OBJ
                },
                getGlobalSingleton: function() {
                    return s.getGlobalSingleton
                },
                SENTRY_XHR_DATA_KEY: function() {
                    return l.SENTRY_XHR_DATA_KEY
                },
                addInstrumentationHandler: function() {
                    return l.addInstrumentationHandler
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
                isPlainObject: function() {
                    return c.isPlainObject
                },
                isPrimitive: function() {
                    return c.isPrimitive
                },
                isString: function() {
                    return c.isString
                },
                isThenable: function() {
                    return c.isThenable
                },
                consoleSandbox: function() {
                    return u.consoleSandbox
                },
                logger: function() {
                    return u.logger
                },
                addExceptionMechanism: function() {
                    return d.addExceptionMechanism
                },
                addExceptionTypeValue: function() {
                    return d.addExceptionTypeValue
                },
                arrayify: function() {
                    return d.arrayify
                },
                checkOrSetAlreadyCaught: function() {
                    return d.checkOrSetAlreadyCaught
                },
                getEventDescription: function() {
                    return d.getEventDescription
                },
                uuid4: function() {
                    return d.uuid4
                },
                isNodeEnv: function() {
                    return f.isNodeEnv
                },
                normalize: function() {
                    return h.normalize
                },
                normalizeToSize: function() {
                    return h.normalizeToSize
                },
                addNonEnumerableProperty: function() {
                    return p.addNonEnumerableProperty
                },
                dropUndefinedKeys: function() {
                    return p.dropUndefinedKeys
                },
                extractExceptionKeysForMessage: function() {
                    return p.extractExceptionKeysForMessage
                },
                fill: function() {
                    return p.fill
                },
                getOriginalFunction: function() {
                    return p.getOriginalFunction
                },
                markFunctionWrapped: function() {
                    return p.markFunctionWrapped
                },
                urlEncode: function() {
                    return p.urlEncode
                },
                makePromiseBuffer: function() {
                    return _.makePromiseBuffer
                },
                severityLevelFromString: function() {
                    return m.severityLevelFromString
                },
                createStackParser: function() {
                    return g.createStackParser
                },
                getFunctionName: function() {
                    return g.getFunctionName
                },
                stackParserFromStackParserOptions: function() {
                    return g.stackParserFromStackParserOptions
                },
                safeJoin: function() {
                    return y.safeJoin
                },
                stringMatchesSomePattern: function() {
                    return y.stringMatchesSomePattern
                },
                truncate: function() {
                    return y.truncate
                },
                isNativeFetch: function() {
                    return v.isNativeFetch
                },
                supportsFetch: function() {
                    return v.supportsFetch
                },
                SyncPromise: function() {
                    return b.SyncPromise
                },
                rejectedSyncPromise: function() {
                    return b.rejectedSyncPromise
                },
                resolvedSyncPromise: function() {
                    return b.resolvedSyncPromise
                },
                browserPerformanceTimeOrigin: function() {
                    return E.browserPerformanceTimeOrigin
                },
                dateTimestampInSeconds: function() {
                    return E.dateTimestampInSeconds
                },
                timestampInSeconds: function() {
                    return E.timestampInSeconds
                },
                extractTraceparentData: function() {
                    return w.extractTraceparentData
                },
                generateSentryTraceHeader: function() {
                    return w.generateSentryTraceHeader
                },
                tracingContextFromHeaders: function() {
                    return w.tracingContextFromHeaders
                },
                getSDKSource: function() {
                    return S.getSDKSource
                },
                addItemToEnvelope: function() {
                    return k.addItemToEnvelope
                },
                createAttachmentEnvelopeItem: function() {
                    return k.createAttachmentEnvelopeItem
                },
                createEnvelope: function() {
                    return k.createEnvelope
                },
                createEventEnvelopeHeaders: function() {
                    return k.createEventEnvelopeHeaders
                },
                envelopeContainsItemType: function() {
                    return k.envelopeContainsItemType
                },
                envelopeItemTypeToDataCategory: function() {
                    return k.envelopeItemTypeToDataCategory
                },
                forEachEnvelopeItem: function() {
                    return k.forEachEnvelopeItem
                },
                getSdkMetadataForEnvelopeHeader: function() {
                    return k.getSdkMetadataForEnvelopeHeader
                },
                parseEnvelope: function() {
                    return k.parseEnvelope
                },
                serializeEnvelope: function() {
                    return k.serializeEnvelope
                },
                createClientReportEnvelope: function() {
                    return T.createClientReportEnvelope
                },
                isRateLimited: function() {
                    return R.isRateLimited
                },
                parseRetryAfterHeader: function() {
                    return R.parseRetryAfterHeader
                },
                updateRateLimits: function() {
                    return R.updateRateLimits
                },
                BAGGAGE_HEADER_NAME: function() {
                    return x.BAGGAGE_HEADER_NAME
                },
                dynamicSamplingContextToSentryBaggageHeader: function() {
                    return x.dynamicSamplingContextToSentryBaggageHeader
                },
                parseUrl: function() {
                    return D.parseUrl
                }
            });
            var r = n("198373"),
                i = n("315250"),
                a = n("704391"),
                o = n("933029"),
                s = n("232945"),
                l = n("78672"),
                c = n("106145"),
                u = n("587254"),
                d = n("648473"),
                f = n("365504"),
                h = n("696634"),
                p = n("654069"),
                _ = n("285696"),
                m = n("292441"),
                g = n("979605"),
                y = n("768538"),
                v = n("78634"),
                b = n("126806"),
                E = n("498736"),
                w = n("451533"),
                S = n("149473"),
                k = n("870322"),
                T = n("603970"),
                R = n("656714"),
                x = n("167875"),
                D = n("609090")
        },
        78672: function(t, e, n) {
            "use strict";
            let r, i, a;
            n.r(e), n.d(e, {
                SENTRY_XHR_DATA_KEY: function() {
                    return p
                },
                addInstrumentationHandler: function() {
                    return g
                }
            });
            var o = n("106145"),
                s = n("587254"),
                l = n("654069"),
                c = n("979605"),
                u = n("78634"),
                d = n("232945"),
                f = n("811517");
            let h = (0, d.getGlobalObject)(),
                p = "__sentry_xhr_v2__",
                _ = {},
                m = {};

            function g(t, e) {
                _[t] = _[t] || [], _[t].push(e), ! function(t) {
                    if (!m[t]) switch (m[t] = !0, t) {
                        case "console":
                            (function() {
                                "console" in h && s.CONSOLE_LEVELS.forEach(function(t) {
                                    t in h.console && (0, l.fill)(h.console, t, function(e) {
                                        return function() {
                                            for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                            y("console", {
                                                args: r,
                                                level: t
                                            }), e && e.apply(h.console, r)
                                        }
                                    })
                                })
                            })();
                            break;
                        case "dom":
                            (function() {
                                if (!("document" in h)) return;
                                let t = y.bind(null, "dom"),
                                    e = E(t, !0);
                                h.document.addEventListener("click", e, !1), h.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(e => {
                                    let n = h[e] && h[e].prototype;
                                    n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0, l.fill)(n, "addEventListener", function(e) {
                                        return function(n, r, i) {
                                            if ("click" === n || "keypress" == n) try {
                                                let r = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                                                    a = r[n] = r[n] || {
                                                        refCount: 0
                                                    };
                                                if (!a.handler) {
                                                    let r = E(t);
                                                    a.handler = r, e.call(this, n, r, i)
                                                }
                                                a.refCount++
                                            } catch (t) {}
                                            return e.call(this, n, r, i)
                                        }
                                    }), (0, l.fill)(n, "removeEventListener", function(t) {
                                        return function(e, n, r) {
                                            if ("click" === e || "keypress" == e) try {
                                                let n = this.__sentry_instrumentation_handlers__ || {},
                                                    i = n[e];
                                                i && (i.refCount--, i.refCount <= 0 && (t.call(this, e, i.handler, r), i.handler = void 0, delete n[e]), 0 === Object.keys(n).length && delete this.__sentry_instrumentation_handlers__)
                                            } catch (t) {}
                                            return t.call(this, e, n, r)
                                        }
                                    }))
                                })
                            })();
                            break;
                        case "xhr":
                            (function() {
                                if (!("XMLHttpRequest" in h)) return;
                                let t = XMLHttpRequest.prototype;
                                (0, l.fill)(t, "open", function(t) {
                                    return function() {
                                        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                        let i = n[1],
                                            a = this[p] = {
                                                method: (0, o.isString)(n[0]) ? n[0].toUpperCase() : n[0],
                                                url: n[1],
                                                request_headers: {}
                                            };
                                        (0, o.isString)(i) && "POST" === a.method && i.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                                        let s = () => {
                                            let t = this[p];
                                            if (t && 4 === this.readyState) {
                                                try {
                                                    t.status_code = this.status
                                                } catch (t) {}
                                                y("xhr", {
                                                    args: n,
                                                    endTimestamp: Date.now(),
                                                    startTimestamp: Date.now(),
                                                    xhr: this
                                                })
                                            }
                                        };
                                        return "onreadystatechange" in this && "function" == typeof this.onreadystatechange ? (0, l.fill)(this, "onreadystatechange", function(t) {
                                            return function() {
                                                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                                return s(), t.apply(this, n)
                                            }
                                        }) : this.addEventListener("readystatechange", s), (0, l.fill)(this, "setRequestHeader", function(t) {
                                            return function() {
                                                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                                let [i, a] = n, o = this[p];
                                                return o && (o.request_headers[i.toLowerCase()] = a), t.apply(this, n)
                                            }
                                        }), t.apply(this, n)
                                    }
                                }), (0, l.fill)(t, "send", function(t) {
                                    return function() {
                                        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                        let i = this[p];
                                        return i && void 0 !== n[0] && (i.body = n[0]), y("xhr", {
                                            args: n,
                                            startTimestamp: Date.now(),
                                            xhr: this
                                        }), t.apply(this, n)
                                    }
                                })
                            })();
                            break;
                        case "fetch":
                            (function() {
                                (0, u.supportsNativeFetch)() && (0, l.fill)(h, "fetch", function(t) {
                                    return function() {
                                        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                        let {
                                            method: i,
                                            url: a
                                        } = function(t) {
                                            if (0 === t.length) return {
                                                method: "GET",
                                                url: ""
                                            };
                                            if (2 === t.length) {
                                                let [e, n] = t;
                                                return {
                                                    url: b(e),
                                                    method: v(n, "method") ? String(n.method).toUpperCase() : "GET"
                                                }
                                            }
                                            let e = t[0];
                                            return {
                                                url: b(e),
                                                method: v(e, "method") ? String(e.method).toUpperCase() : "GET"
                                            }
                                        }(n), o = {
                                            args: n,
                                            fetchData: {
                                                method: i,
                                                url: a
                                            },
                                            startTimestamp: Date.now()
                                        };
                                        return y("fetch", {
                                            ...o
                                        }), t.apply(h, n).then(t => (y("fetch", {
                                            ...o,
                                            endTimestamp: Date.now(),
                                            response: t
                                        }), t), t => {
                                            throw y("fetch", {
                                                ...o,
                                                endTimestamp: Date.now(),
                                                error: t
                                            }), t
                                        })
                                    }
                                })
                            })();
                            break;
                        case "history":
                            (function() {
                                if (!(0, f.supportsHistory)()) return;
                                let t = h.onpopstate;

                                function e(t) {
                                    return function() {
                                        for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                                        let a = n.length > 2 ? n[2] : void 0;
                                        if (a) {
                                            let t = r,
                                                e = String(a);
                                            r = e, y("history", {
                                                from: t,
                                                to: e
                                            })
                                        }
                                        return t.apply(this, n)
                                    }
                                }
                                h.onpopstate = function() {
                                    for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                                    let a = h.location.href,
                                        o = r;
                                    if (r = a, y("history", {
                                            from: o,
                                            to: a
                                        }), t) try {
                                        return t.apply(this, n)
                                    } catch (t) {}
                                }, (0, l.fill)(h.history, "pushState", e), (0, l.fill)(h.history, "replaceState", e)
                            })();
                            break;
                        case "error":
                            (function() {
                                w = h.onerror, h.onerror = function(t, e, n, r, i) {
                                    return y("error", {
                                        column: r,
                                        error: i,
                                        line: n,
                                        msg: t,
                                        url: e
                                    }), !!w && !w.__SENTRY_LOADER__ && w.apply(this, arguments)
                                }, h.onerror.__SENTRY_INSTRUMENTED__ = !0
                            })();
                            break;
                        case "unhandledrejection":
                            (function() {
                                S = h.onunhandledrejection, h.onunhandledrejection = function(t) {
                                    return y("unhandledrejection", t), !S || !!S.__SENTRY_LOADER__ || S.apply(this, arguments)
                                }, h.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
                            })();
                            break;
                        default:
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.warn("unknown instrumentation type:", t);
                            return
                    }
                }(t)
            }

            function y(t, e) {
                if (t && _[t])
                    for (let n of _[t] || []) try {
                        n(e)
                    } catch (e) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.error("Error while triggering instrumentation handler.\nType: ".concat(t, "\nName: ").concat((0, c.getFunctionName)(n), "\nError:"), e)
                    }
            }

            function v(t, e) {
                return !!t && "object" == typeof t && !!t[e]
            }

            function b(t) {
                return "string" == typeof t ? t : t ? v(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
            }

            function E(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return n => {
                    if (!n || a === n || function(t) {
                            if ("keypress" !== t.type) return !1;
                            try {
                                let e = t.target;
                                if (!e || !e.tagName) return !0;
                                if ("INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable) return !1
                            } catch (t) {}
                            return !0
                        }(n)) return;
                    let r = "keypress" === n.type ? "input" : n.type;
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
                    }), a = n), clearTimeout(i), i = h.setTimeout(() => {
                        i = void 0
                    }, 1e3)
                }
            }
            let w = null,
                S = null
        },
        106145: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                isDOMError: function() {
                    return s
                },
                isDOMException: function() {
                    return l
                },
                isElement: function() {
                    return h
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
                    return y
                },
                isNaN: function() {
                    return g
                },
                isPlainObject: function() {
                    return d
                },
                isPrimitive: function() {
                    return u
                },
                isRegExp: function() {
                    return p
                },
                isString: function() {
                    return c
                },
                isSyntheticEvent: function() {
                    return m
                },
                isThenable: function() {
                    return _
                }
            });
            let r = Object.prototype.toString;

            function i(t) {
                switch (r.call(t)) {
                    case "[object Error]":
                    case "[object Exception]":
                    case "[object DOMException]":
                        return !0;
                    default:
                        return y(t, Error)
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

            function l(t) {
                return a(t, "DOMException")
            }

            function c(t) {
                return a(t, "String")
            }

            function u(t) {
                return null === t || "object" != typeof t && "function" != typeof t
            }

            function d(t) {
                return a(t, "Object")
            }

            function f(t) {
                return "undefined" != typeof Event && y(t, Event)
            }

            function h(t) {
                return "undefined" != typeof Element && y(t, Element)
            }

            function p(t) {
                return a(t, "RegExp")
            }

            function _(t) {
                return !!(t && t.then && "function" == typeof t.then)
            }

            function m(t) {
                return d(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
            }

            function g(t) {
                return "number" == typeof t && t != t
            }

            function y(t, e) {
                try {
                    return t instanceof e
                } catch (t) {
                    return !1
                }
            }
        },
        587254: function(t, e, n) {
            "use strict";
            let r;
            n.r(e), n.d(e, {
                CONSOLE_LEVELS: function() {
                    return a
                },
                consoleSandbox: function() {
                    return o
                },
                logger: function() {
                    return r
                }
            });
            var i = n("232945");
            let a = ["debug", "info", "warn", "error", "log", "assert", "trace"];

            function o(t) {
                if (!("console" in i.GLOBAL_OBJ)) return t();
                let e = i.GLOBAL_OBJ.console,
                    n = {};
                a.forEach(t => {
                    let r = e[t] && e[t].__sentry_original__;
                    t in e && r && (n[t] = e[t], e[t] = r)
                });
                try {
                    return t()
                } finally {
                    Object.keys(n).forEach(t => {
                        e[t] = n[t]
                    })
                }
            }

            function s() {
                let t = !1,
                    e = {
                        enable: () => {
                            t = !0
                        },
                        disable: () => {
                            t = !1
                        }
                    };
                return "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? a.forEach(n => {
                    e[n] = function() {
                        for (var e = arguments.length, r = Array(e), a = 0; a < e; a++) r[a] = arguments[a];
                        t && o(() => {
                            i.GLOBAL_OBJ.console[n]("".concat("Sentry Logger ", "[").concat(n, "]:"), ...r)
                        })
                    }
                }) : a.forEach(t => {
                    e[t] = () => void 0
                }), e
            }
            r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? (0, i.getGlobalSingleton)("logger", s) : s()
        },
        719928: function(t, e, n) {
            "use strict";

            function r() {
                let t = "function" == typeof WeakSet,
                    e = t ? new WeakSet : [];
                return [function(n) {
                    if (t) return !!e.has(n) || (e.add(n), !1);
                    for (let t = 0; t < e.length; t++) {
                        let r = e[t];
                        if (r === n) return !0
                    }
                    return e.push(n), !1
                }, function(n) {
                    if (t) e.delete(n);
                    else
                        for (let t = 0; t < e.length; t++)
                            if (e[t] === n) {
                                e.splice(t, 1);
                                break
                            }
                }]
            }
            n.r(e), n.d(e, {
                memoBuilder: function() {
                    return r
                }
            })
        },
        648473: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                addExceptionMechanism: function() {
                    return c
                },
                addExceptionTypeValue: function() {
                    return l
                },
                arrayify: function() {
                    return d
                },
                checkOrSetAlreadyCaught: function() {
                    return u
                },
                getEventDescription: function() {
                    return s
                },
                uuid4: function() {
                    return a
                }
            });
            var r = n("654069"),
                i = n("232945");

            function a() {
                let t = i.GLOBAL_OBJ,
                    e = t.crypto || t.msCrypto;
                if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
                let n = e && e.getRandomValues ? () => e.getRandomValues(new Uint8Array(1))[0] : () => 16 * Math.random();
                return "10000000100040008000100000000000".replace(/[018]/g, t => (t ^ (15 & n()) >> t / 4).toString(16))
            }

            function o(t) {
                return t.exception && t.exception.values ? t.exception.values[0] : void 0
            }

            function s(t) {
                let {
                    message: e,
                    event_id: n
                } = t;
                if (e) return e;
                let r = o(t);
                if (r) return r.type && r.value ? "".concat(r.type, ": ").concat(r.value) : r.type || r.value || n || "<unknown>";
                return n || "<unknown>"
            }

            function l(t, e, n) {
                let r = t.exception = t.exception || {},
                    i = r.values = r.values || [],
                    a = i[0] = i[0] || {};
                !a.value && (a.value = e || ""), !a.type && (a.type = n || "Error")
            }

            function c(t, e) {
                let n = o(t);
                if (!n) return;
                let r = n.mechanism;
                if (n.mechanism = {
                        type: "generic",
                        handled: !0,
                        ...r,
                        ...e
                    }, e && "data" in e) {
                    let t = {
                        ...r && r.data,
                        ...e.data
                    };
                    n.mechanism.data = t
                }
            }

            function u(t) {
                if (t && t.__sentry_captured__) return !0;
                try {
                    (0, r.addNonEnumerableProperty)(t, "__sentry_captured__", !0)
                } catch (t) {}
                return !1
            }

            function d(t) {
                return Array.isArray(t) ? t : [t]
            }
        },
        365504: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                dynamicRequire: function() {
                    return o
                },
                isNodeEnv: function() {
                    return a
                }
            });
            var r = n("149473");
            t = n.hmd(t);
            var i = n("390493");

            function a() {
                return !(0, r.isBrowserBundle)() && "[object process]" === Object.prototype.toString.call(void 0 !== i ? i : 0)
            }

            function o(t, e) {
                return t.require(e)
            }
        },
        696634: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                normalize: function() {
                    return s
                },
                normalizeToSize: function() {
                    return function t(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 102400,
                            i = s(e, n);
                        return function(t) {
                            return ~-encodeURI(JSON.stringify(t)).split(/%..|./).length
                        }(i) > r ? t(e, n - 1, r) : i
                    }
                }
            });
            var r = n("106145"),
                i = n("719928"),
                a = n("654069"),
                o = n("979605");

            function s(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
                    s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0;
                try {
                    return function t(e, s) {
                        let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0,
                            c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
                            u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0, i.memoBuilder)(),
                            [d, f] = u;
                        if (null == s || ["number", "boolean", "string"].includes(typeof s) && !(0, r.isNaN)(s)) return s;
                        let h = function(t, e) {
                            try {
                                if ("domain" === t && e && "object" == typeof e && e._events) return "[Domain]";
                                if ("domainEmitter" === t) return "[DomainEmitter]";
                                if (void 0 !== n.g && e === n.g) return "[Global]";
                                if ("undefined" != typeof window && e === window) return "[Window]";
                                if ("undefined" != typeof document && e === document) return "[Document]";
                                if ((0, r.isSyntheticEvent)(e)) return "[SyntheticEvent]";
                                if ("number" == typeof e && e != e) return "[NaN]";
                                if ("function" == typeof e) return "[Function: ".concat((0, o.getFunctionName)(e), "]");
                                if ("symbol" == typeof e) return "[".concat(String(e), "]");
                                if ("bigint" == typeof e) return "[BigInt: ".concat(String(e), "]");
                                let i = function(t) {
                                    let e = Object.getPrototypeOf(t);
                                    return e ? e.constructor.name : "null prototype"
                                }(e);
                                if (/^HTML(\w*)Element$/.test(i)) return "[HTMLElement: ".concat(i, "]");
                                return "[object ".concat(i, "]")
                            } catch (t) {
                                return "**non-serializable** (".concat(t, ")")
                            }
                        }(e, s);
                        if (!h.startsWith("[object ")) return h;
                        if (s.__sentry_skip_normalization__) return s;
                        let p = "number" == typeof s.__sentry_override_normalization_depth__ ? s.__sentry_override_normalization_depth__ : l;
                        if (0 === p) return h.replace("object ", "");
                        if (d(s)) return "[Circular ~]";
                        if (s && "function" == typeof s.toJSON) try {
                            let e = s.toJSON();
                            return t("", e, p - 1, c, u)
                        } catch (t) {}
                        let _ = Array.isArray(s) ? [] : {},
                            m = 0,
                            g = (0, a.convertToPlainObject)(s);
                        for (let e in g) {
                            if (!Object.prototype.hasOwnProperty.call(g, e)) continue;
                            if (m >= c) {
                                _[e] = "[MaxProperties ~]";
                                break
                            }
                            let n = g[e];
                            _[e] = t(e, n, p - 1, c, u), m++
                        }
                        return f(s), _
                    }("", t, e, s)
                } catch (t) {
                    return {
                        ERROR: "**non-serializable** (".concat(t, ")")
                    }
                }
            }
        },
        654069: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                addNonEnumerableProperty: function() {
                    return s
                },
                convertToPlainObject: function() {
                    return d
                },
                dropUndefinedKeys: function() {
                    return _
                },
                extractExceptionKeysForMessage: function() {
                    return p
                },
                fill: function() {
                    return o
                },
                getOriginalFunction: function() {
                    return c
                },
                markFunctionWrapped: function() {
                    return l
                },
                urlEncode: function() {
                    return u
                }
            });
            var r = n("315250"),
                i = n("106145"),
                a = n("768538");

            function o(t, e, n) {
                if (!(e in t)) return;
                let r = t[e],
                    i = n(r);
                if ("function" == typeof i) try {
                    l(i, r)
                } catch (t) {}
                t[e] = i
            }

            function s(t, e, n) {
                Object.defineProperty(t, e, {
                    value: n,
                    writable: !0,
                    configurable: !0
                })
            }

            function l(t, e) {
                let n = e.prototype || {};
                t.prototype = e.prototype = n, s(t, "__sentry_original__", e)
            }

            function c(t) {
                return t.__sentry_original__
            }

            function u(t) {
                return Object.keys(t).map(e => "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(t[e]))).join("&")
            }

            function d(t) {
                if ((0, i.isError)(t)) return {
                    message: t.message,
                    name: t.name,
                    stack: t.stack,
                    ...h(t)
                };
                if (!(0, i.isEvent)(t)) return t;
                {
                    let e = {
                        type: t.type,
                        target: f(t.target),
                        currentTarget: f(t.currentTarget),
                        ...h(t)
                    };
                    return "undefined" != typeof CustomEvent && (0, i.isInstanceOf)(t, CustomEvent) && (e.detail = t.detail), e
                }
            }

            function f(t) {
                try {
                    return (0, i.isElement)(t) ? (0, r.htmlTreeAsString)(t) : Object.prototype.toString.call(t)
                } catch (t) {
                    return "<unknown>"
                }
            }

            function h(t) {
                if ("object" != typeof t || null === t) return {};
                {
                    let e = {};
                    for (let n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }
            }

            function p(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
                    n = Object.keys(d(t));
                if (n.sort(), !n.length) return "[object has no keys]";
                if (n[0].length >= e) return (0, a.truncate)(n[0], e);
                for (let t = n.length; t > 0; t--) {
                    let r = n.slice(0, t).join(", ");
                    if (!(r.length > e)) {
                        if (t === n.length) return r;
                        return (0, a.truncate)(r, e)
                    }
                }
                return ""
            }

            function _(t) {
                let e = new Map;
                return function t(e, n) {
                    if ((0, i.isPlainObject)(e)) {
                        let r = n.get(e);
                        if (void 0 !== r) return r;
                        let i = {};
                        for (let r of (n.set(e, i), Object.keys(e))) void 0 !== e[r] && (i[r] = t(e[r], n));
                        return i
                    }
                    if (Array.isArray(e)) {
                        let r = n.get(e);
                        if (void 0 !== r) return r;
                        let i = [];
                        return n.set(e, i), e.forEach(e => {
                            i.push(t(e, n))
                        }), i
                    }
                    return e
                }(t, e)
            }
        },
        285696: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                makePromiseBuffer: function() {
                    return a
                }
            });
            var r = n("933029"),
                i = n("126806");

            function a(t) {
                let e = [];

                function n(t) {
                    return e.splice(e.indexOf(t), 1)[0]
                }
                return {
                    $: e,
                    add: function(a) {
                        if (!(void 0 === t || e.length < t)) return (0, i.rejectedSyncPromise)(new r.SentryError("Not adding Promise because buffer limit was reached."));
                        let o = a();
                        return -1 === e.indexOf(o) && e.push(o), o.then(() => n(o)).then(null, () => n(o).then(null, () => {})), o
                    },
                    drain: function(t) {
                        return new i.SyncPromise((n, r) => {
                            let a = e.length;
                            if (!a) return n(!0);
                            let o = setTimeout(() => {
                                t && t > 0 && n(!1)
                            }, t);
                            e.forEach(t => {
                                (0, i.resolvedSyncPromise)(t).then(() => {
                                    !--a && (clearTimeout(o), n(!0))
                                }, r)
                            })
                        })
                    }
                }
            }
        },
        656714: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                isRateLimited: function() {
                    return i
                },
                parseRetryAfterHeader: function() {
                    return r
                },
                updateRateLimits: function() {
                    return a
                }
            });

            function r(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
                    n = parseInt("".concat(t), 10);
                if (!isNaN(n)) return 1e3 * n;
                let r = Date.parse("".concat(t));
                return isNaN(r) ? 6e4 : r - e
            }

            function i(t, e) {
                var n;
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
                return ((n = t)[e] || n.all || 0) > r
            }

            function a(t, e) {
                let {
                    statusCode: n,
                    headers: i
                } = e, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(), o = {
                    ...t
                }, s = i && i["x-sentry-rate-limits"], l = i && i["retry-after"];
                if (s)
                    for (let t of s.trim().split(",")) {
                        let [e, n] = t.split(":", 2), r = parseInt(e, 10), i = (isNaN(r) ? 60 : r) * 1e3;
                        if (n)
                            for (let t of n.split(";")) o[t] = a + i;
                        else o.all = a + i
                    } else l ? o.all = a + r(l, a) : 429 === n && (o.all = a + 6e4);
                return o
            }
        },
        292441: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                severityLevelFromString: function() {
                    return i
                }
            });
            let r = ["fatal", "error", "warning", "log", "info", "debug"];

            function i(t) {
                return "warn" === t ? "warning" : r.includes(t) ? t : "log"
            }
        },
        979605: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                createStackParser: function() {
                    return i
                },
                getFunctionName: function() {
                    return s
                },
                stackParserFromStackParserOptions: function() {
                    return a
                }
            });
            let r = /\(error: (.*)\)/;

            function i() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                let i = e.sort((t, e) => t[0] - e[0]).map(t => t[1]);
                return function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = [],
                        a = t.split("\n");
                    for (let t = e; t < a.length; t++) {
                        let e = a[t];
                        if (e.length > 1024) continue;
                        let o = r.test(e) ? e.replace(r, "$1") : e;
                        if (!o.match(/\S*Error: /)) {
                            for (let t of i) {
                                let e = t(o);
                                if (e) {
                                    n.push(e);
                                    break
                                }
                            }
                            if (n.length >= 50) break
                        }
                    }
                    return function(t) {
                        if (!t.length) return [];
                        let e = t.slice(0, 50),
                            n = e[e.length - 1].function;
                        n && /sentryWrapped/.test(n) && e.pop(), e.reverse();
                        let r = e[e.length - 1].function;
                        return r && /captureMessage|captureException/.test(r) && e.pop(), e.map(t => ({
                            ...t,
                            filename: t.filename || e[e.length - 1].filename,
                            function: t.function || "?"
                        }))
                    }(n)
                }
            }

            function a(t) {
                return Array.isArray(t) ? i(...t) : t
            }
            let o = "<anonymous>";

            function s(t) {
                try {
                    if (!t || "function" != typeof t) return o;
                    return t.name || o
                } catch (t) {
                    return o
                }
            }
        },
        768538: function(t, e, n) {
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
            });
            var r = n("106145");

            function i(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return "string" != typeof t || 0 === e ? t : t.length <= e ? t : "".concat(t.slice(0, e), "...")
            }

            function a(t, e) {
                if (!Array.isArray(t)) return "";
                let n = [];
                for (let e = 0; e < t.length; e++) {
                    let r = t[e];
                    try {
                        n.push(String(r))
                    } catch (t) {
                        n.push("[value cannot be serialized]")
                    }
                }
                return n.join(e)
            }

            function o(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return e.some(e => (function(t, e) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return !!(0, r.isString)(t) && ((0, r.isRegExp)(e) ? e.test(t) : !!(0, r.isString)(e) && (n ? t === e : t.includes(e)))
                })(t, e, n))
            }
        },
        78634: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                isNativeFetch: function() {
                    return s
                },
                supportsFetch: function() {
                    return o
                },
                supportsNativeFetch: function() {
                    return l
                }
            });
            var r = n("587254"),
                i = n("232945");
            let a = (0, i.getGlobalObject)();

            function o() {
                if (!("fetch" in a)) return !1;
                try {
                    return new Headers, new Request("http://www.example.com"), new Response, !0
                } catch (t) {
                    return !1
                }
            }

            function s(t) {
                return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
            }

            function l() {
                if (!o()) return !1;
                if (s(a.fetch)) return !0;
                let t = !1,
                    e = a.document;
                if (e && "function" == typeof e.createElement) try {
                    let n = e.createElement("iframe");
                    n.hidden = !0, e.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = s(n.contentWindow.fetch)), e.head.removeChild(n)
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                }
                return t
            }
        },
        126806: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                SyncPromise: function() {
                    return l
                },
                rejectedSyncPromise: function() {
                    return s
                },
                resolvedSyncPromise: function() {
                    return o
                }
            });
            var r, i, a = n("106145");

            function o(t) {
                return new l(e => {
                    e(t)
                })
            }

            function s(t) {
                return new l((e, n) => {
                    n(t)
                })
            }(r = i || (i = {}))[r.PENDING = 0] = "PENDING", r[r.RESOLVED = 1] = "RESOLVED", r[r.REJECTED = 2] = "REJECTED";
            class l {
                __init() {
                    this._state = i.PENDING
                }
                __init2() {
                    this._handlers = []
                }
                then(t, e) {
                    return new l((n, r) => {
                        this._handlers.push([!1, e => {
                            if (t) try {
                                n(t(e))
                            } catch (t) {
                                r(t)
                            } else n(e)
                        }, t => {
                            if (e) try {
                                n(e(t))
                            } catch (t) {
                                r(t)
                            } else r(t)
                        }]), this._executeHandlers()
                    })
                } catch (t) {
                    return this.then(t => t, t)
                } finally(t) {
                    return new l((e, n) => {
                        let r, i;
                        return this.then(e => {
                            i = !1, r = e, t && t()
                        }, e => {
                            i = !0, r = e, t && t()
                        }).then(() => {
                            if (i) {
                                n(r);
                                return
                            }
                            e(r)
                        })
                    })
                }
                __init3() {
                    this._resolve = t => {
                        this._setResult(i.RESOLVED, t)
                    }
                }
                __init4() {
                    this._reject = t => {
                        this._setResult(i.REJECTED, t)
                    }
                }
                __init5() {
                    this._setResult = (t, e) => {
                        if (this._state === i.PENDING) {
                            if ((0, a.isThenable)(e)) {
                                e.then(this._resolve, this._reject);
                                return
                            }
                            this._state = t, this._value = e, this._executeHandlers()
                        }
                    }
                }
                __init6() {
                    this._executeHandlers = () => {
                        if (this._state === i.PENDING) return;
                        let t = this._handlers.slice();
                        this._handlers = [], t.forEach(t => {
                            !t[0] && (this._state === i.RESOLVED && t[1](this._value), this._state === i.REJECTED && t[2](this._value), t[0] = !0)
                        })
                    }
                }
                constructor(t) {
                    l.prototype.__init.call(this), l.prototype.__init2.call(this), l.prototype.__init3.call(this), l.prototype.__init4.call(this), l.prototype.__init5.call(this), l.prototype.__init6.call(this);
                    try {
                        t(this._resolve, this._reject)
                    } catch (t) {
                        this._reject(t)
                    }
                }
            }
        },
        498736: function(t, e, n) {
            "use strict";
            let r;
            n.r(e), n.d(e, {
                browserPerformanceTimeOrigin: function() {
                    return f
                },
                dateTimestampInSeconds: function() {
                    return u
                },
                timestampInSeconds: function() {
                    return d
                }
            });
            var i = n("365504"),
                a = n("232945");
            t = n.hmd(t);
            let o = (0, a.getGlobalObject)(),
                s = {
                    nowSeconds: () => Date.now() / 1e3
                },
                l = (0, i.isNodeEnv)() ? function() {
                    try {
                        let e = (0, i.dynamicRequire)(t, "perf_hooks");
                        return e.performance
                    } catch (t) {
                        return
                    }
                }() : function() {
                    let {
                        performance: t
                    } = o;
                    if (!t || !t.now) return;
                    let e = Date.now() - t.now();
                    return {
                        now: () => t.now(),
                        timeOrigin: e
                    }
                }(),
                c = void 0 === l ? s : {
                    nowSeconds: () => (l.timeOrigin + l.now()) / 1e3
                },
                u = s.nowSeconds.bind(s),
                d = c.nowSeconds.bind(c),
                f = (() => {
                    let {
                        performance: t
                    } = o;
                    if (!t || !t.now) return;
                    let e = t.now(),
                        n = Date.now(),
                        r = t.timeOrigin ? Math.abs(t.timeOrigin + e - n) : 36e5,
                        i = t.timing && t.timing.navigationStart,
                        a = "number" == typeof i ? Math.abs(i + e - n) : 36e5;
                    if (r < 36e5 || a < 36e5) return r <= a ? t.timeOrigin : i;
                    return n
                })()
        },
        451533: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                extractTraceparentData: function() {
                    return o
                },
                generateSentryTraceHeader: function() {
                    return l
                },
                tracingContextFromHeaders: function() {
                    return s
                }
            });
            var r = n("167875"),
                i = n("648473");
            let a = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

            function o(t) {
                let e;
                if (!t) return;
                let n = t.match(a);
                if (n) return "1" === n[3] ? e = !0 : "0" === n[3] && (e = !1), {
                    traceId: n[1],
                    parentSampled: e,
                    parentSpanId: n[2]
                }
            }

            function s(t, e) {
                let n = o(t),
                    a = (0, r.baggageHeaderToDynamicSamplingContext)(e),
                    {
                        traceId: s,
                        parentSpanId: l,
                        parentSampled: c
                    } = n || {},
                    u = {
                        traceId: s || (0, i.uuid4)(),
                        spanId: (0, i.uuid4)().substring(16),
                        sampled: void 0 !== c && c
                    };
                return l && (u.parentSpanId = l), a && (u.dsc = a), {
                    traceparentData: n,
                    dynamicSamplingContext: a,
                    propagationContext: u
                }
            }

            function l() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, i.uuid4)(),
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, i.uuid4)().substring(16),
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = "";
                return void 0 !== n && (r = n ? "-1" : "-0"), "".concat(t, "-").concat(e).concat(r)
            }
        },
        609090: function(t, e, n) {
            "use strict";

            function r(t) {
                if (!t) return {};
                let e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!e) return {};
                let n = e[6] || "",
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
            })
        },
        811517: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                supportsHistory: function() {
                    return a
                }
            });
            var r = n("232945");
            let i = (0, r.getGlobalObject)();

            function a() {
                let t = i.chrome,
                    e = t && t.app && t.app.runtime,
                    n = "history" in i && !!i.history.pushState && !!i.history.replaceState;
                return !e && n
            }
        },
        232945: function(t, e, n) {
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
            });
            let i = "object" == typeof globalThis && r(globalThis) || "object" == typeof window && r(window) || "object" == typeof self && r(self) || "object" == typeof n.g && r(n.g) || function() {
                return this
            }() || {};

            function a() {
                return i
            }

            function o(t, e, n) {
                let r = n || i,
                    a = r.__SENTRY__ = r.__SENTRY__ || {},
                    o = a[t] || (a[t] = e());
                return o
            }
        },
        845164: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                registerBackgroundTabDetection: function() {
                    return o
                }
            });
            var r = n("675065"),
                i = n("103787"),
                a = n("307447");

            function o() {
                a.WINDOW && a.WINDOW.document ? a.WINDOW.document.addEventListener("visibilitychange", () => {
                    let t = (0, r.getActiveTransaction)();
                    if (a.WINDOW.document.hidden && t) {
                        let e = "cancelled";
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Tracing] Transaction: ".concat(e, " -> since tab moved to the background, op: ").concat(t.op)), !t.status && t.setStatus(e), t.setTag("visibilitychange", "document.hidden"), t.finish()
                    }
                }) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("[Tracing] Could not set up background tab detection due to lack of global document")
            }
        },
        579020: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BrowserTracing: function() {
                    return d
                }
            });
            var r = n("675065"),
                i = n("103787"),
                a = n("845164"),
                o = n("304063"),
                s = n("907888"),
                l = n("339448"),
                c = n("307447");
            let u = {
                ...r.TRACING_DEFAULTS,
                markBackgroundTransactions: !0,
                routingInstrumentation: l.instrumentRoutingWithDefaults,
                startTransactionOnLocationChange: !0,
                startTransactionOnPageLoad: !0,
                enableLongTask: !0,
                _experiments: {},
                ...s.defaultRequestInstrumentationOptions
            };
            class d {
                __init() {
                    this.name = "BrowserTracing"
                }
                __init2() {
                    this._hasSetTracePropagationTargets = !1
                }
                setupOnce(t, e) {
                    this._getCurrentHub = e;
                    let n = e(),
                        r = n.getClient(),
                        o = r && r.getOptions(),
                        {
                            routingInstrumentation: l,
                            startTransactionOnLocationChange: c,
                            startTransactionOnPageLoad: u,
                            markBackgroundTransactions: d,
                            traceFetch: f,
                            traceXHR: h,
                            shouldCreateSpanForRequest: p,
                            enableHTTPTimings: _,
                            _experiments: m
                        } = this.options,
                        g = o && o.tracePropagationTargets,
                        y = g || this.options.tracePropagationTargets;
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this._hasSetTracePropagationTargets && g && i.logger.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."), l(t => {
                        let n = this._createRouteTransaction(t);
                        return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(n, t, e), n
                    }, u, c), d && (0, a.registerBackgroundTabDetection)(), m.enableInteractions && this._registerInteractionListener(), (0, s.instrumentOutgoingRequests)({
                        traceFetch: f,
                        traceXHR: h,
                        tracePropagationTargets: y,
                        shouldCreateSpanForRequest: p,
                        enableHTTPTimings: _
                    })
                }
                _createRouteTransaction(t) {
                    if (!this._getCurrentHub) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("[Tracing] Did not create ".concat(t.op, " transaction because _getCurrentHub is invalid."));
                        return
                    }
                    let e = this._getCurrentHub(),
                        {
                            beforeNavigate: n,
                            idleTimeout: a,
                            finalTimeout: s,
                            heartbeatInterval: l
                        } = this.options,
                        u = "pageload" === t.op,
                        d = u ? f("sentry-trace") : "",
                        h = u ? f("baggage") : "",
                        {
                            traceparentData: p,
                            dynamicSamplingContext: _,
                            propagationContext: m
                        } = (0, i.tracingContextFromHeaders)(d, h),
                        g = {
                            ...t,
                            ...p,
                            metadata: {
                                ...t.metadata,
                                dynamicSamplingContext: p && !_ ? {} : _
                            },
                            trimEnd: !0
                        },
                        y = "function" == typeof n ? n(g) : g,
                        v = void 0 === y ? {
                            ...g,
                            sampled: !1
                        } : y;
                    v.metadata = v.name !== g.name ? {
                        ...v.metadata,
                        source: "custom"
                    } : v.metadata, this._latestRouteName = v.name, this._latestRouteSource = v.metadata && v.metadata.source, !1 === v.sampled && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Tracing] Will not send ".concat(v.op, " transaction because of beforeNavigate.")), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Tracing] Starting ".concat(v.op, " transaction on scope"));
                    let {
                        location: b
                    } = c.WINDOW, E = (0, r.startIdleTransaction)(e, v, a, s, !0, {
                        location: b
                    }, l), w = e.getScope();
                    return u && p ? w.setPropagationContext(m) : w.setPropagationContext({
                        traceId: E.traceId,
                        spanId: E.spanId,
                        parentSpanId: E.parentSpanId,
                        sampled: !!E.sampled
                    }), E.registerBeforeFinishCallback(t => {
                        this._collectWebVitals(), (0, o.addPerformanceEntries)(t)
                    }), E
                }
                _registerInteractionListener() {
                    let t;
                    let e = () => {
                        let {
                            idleTimeout: e,
                            finalTimeout: n,
                            heartbeatInterval: a
                        } = this.options, o = "ui.action.click", s = (0, r.getActiveTransaction)();
                        if (s && s.op && ["navigation", "pageload"].includes(s.op)) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("[Tracing] Did not create ".concat(o, " transaction because a pageload or navigation transaction is in progress."));
                            return
                        }
                        if (t && (t.setFinishReason("interactionInterrupted"), t.finish(), t = void 0), !this._getCurrentHub) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("[Tracing] Did not create ".concat(o, " transaction because _getCurrentHub is invalid."));
                            return
                        }
                        if (!this._latestRouteName) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("[Tracing] Did not create ".concat(o, " transaction because _latestRouteName is missing."));
                            return
                        }
                        let l = this._getCurrentHub(),
                            {
                                location: u
                            } = c.WINDOW,
                            d = {
                                name: this._latestRouteName,
                                op: o,
                                trimEnd: !0,
                                metadata: {
                                    source: this._latestRouteSource || "url"
                                }
                            };
                        t = (0, r.startIdleTransaction)(l, d, e, n, !0, {
                            location: u
                        }, a)
                    };
                    ["click"].forEach(t => {
                        addEventListener(t, e, {
                            once: !1,
                            capture: !0
                        })
                    })
                }
                constructor(t) {
                    d.prototype.__init.call(this), d.prototype.__init2.call(this), (0, r.addTracingExtensions)(), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (this._hasSetTracePropagationTargets = !!(t && (t.tracePropagationTargets || t.tracingOrigins))), this.options = {
                        ...u,
                        ...t
                    }, void 0 !== this.options._experiments.enableLongTask && (this.options.enableLongTask = this.options._experiments.enableLongTask), t && !t.tracePropagationTargets && t.tracingOrigins && (this.options.tracePropagationTargets = t.tracingOrigins), this._collectWebVitals = (0, o.startTrackingWebVitals)(), this.options.enableLongTask && (0, o.startTrackingLongTasks)(), this.options._experiments.enableInteractions && (0, o.startTrackingInteractions)()
                }
            }

            function f(t) {
                let e = (0, i.getDomElement)("meta[name=".concat(t, "]"));
                return e ? e.getAttribute("content") : void 0
            }
        },
        304063: function(t, e, n) {
            "use strict";
            let r, i;
            n.r(e), n.d(e, {
                addPerformanceEntries: function() {
                    return E
                },
                startTrackingInteractions: function() {
                    return b
                },
                startTrackingLongTasks: function() {
                    return v
                },
                startTrackingWebVitals: function() {
                    return y
                }
            });
            var a = n("675065"),
                o = n("103787"),
                s = n("307447"),
                l = n("916876"),
                c = n("443026"),
                u = n("162223"),
                d = n("810843"),
                f = n("885405"),
                h = n("100183");

            function p(t) {
                return t / 1e3
            }

            function _() {
                return s.WINDOW && s.WINDOW.addEventListener && s.WINDOW.performance
            }
            let m = 0,
                g = {};

            function y() {
                let t = _();
                if (t && o.browserPerformanceTimeOrigin) {
                    t.mark && s.WINDOW.performance.mark("sentry-tracing-init"),
                        function() {
                            (0, c.onFID)(t => {
                                let e = t.entries.pop();
                                if (!e) return;
                                let n = p(o.browserPerformanceTimeOrigin),
                                    r = p(e.startTime);
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding FID"), g.fid = {
                                    value: t.value,
                                    unit: "millisecond"
                                }, g["mark.fid"] = {
                                    value: n + r,
                                    unit: "second"
                                }
                            })
                        }();
                    let e = function() {
                            return (0, l.onCLS)(t => {
                                let e = t.entries.pop();
                                e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding CLS"), g.cls = {
                                    value: t.value,
                                    unit: ""
                                }, i = e)
                            })
                        }(),
                        n = function() {
                            return (0, u.onLCP)(t => {
                                let e = t.entries.pop();
                                e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding LCP"), g.lcp = {
                                    value: t.value,
                                    unit: "millisecond"
                                }, r = e)
                            })
                        }();
                    return () => {
                        e && e(), n && n()
                    }
                }
                return () => void 0
            }

            function v() {
                (0, f.observe)("longtask", t => {
                    for (let e of t) {
                        let t = (0, a.getActiveTransaction)();
                        if (!t) return;
                        let n = p(o.browserPerformanceTimeOrigin + e.startTime),
                            r = p(e.duration);
                        t.startChild({
                            description: "Main UI thread blocked",
                            op: "ui.long-task",
                            startTimestamp: n,
                            endTimestamp: n + r
                        })
                    }
                })
            }

            function b() {
                (0, f.observe)("event", t => {
                    for (let e of t) {
                        let t = (0, a.getActiveTransaction)();
                        if (!t) return;
                        if ("click" === e.name) {
                            let n = p(o.browserPerformanceTimeOrigin + e.startTime),
                                r = p(e.duration);
                            t.startChild({
                                description: (0, o.htmlTreeAsString)(e.target),
                                op: "ui.interaction.".concat(e.name),
                                startTimestamp: n,
                                endTimestamp: n + r
                            })
                        }
                    }
                }, {
                    durationThreshold: 0
                })
            }

            function E(t) {
                let e, n;
                let a = _();
                if (!a || !s.WINDOW.performance.getEntries || !o.browserPerformanceTimeOrigin) return;
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Tracing] Adding & adjusting spans using Performance API");
                let l = p(o.browserPerformanceTimeOrigin),
                    c = a.getEntries();
                if (c.slice(m).forEach(r => {
                        let i = p(r.startTime),
                            a = p(r.duration);
                        if ("navigation" !== t.op || !(l + i < t.startTimestamp)) switch (r.entryType) {
                            case "navigation":
                                (function(t, e, n) {
                                    ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(r => {
                                            w(t, e, r, n)
                                        }), w(t, e, "secureConnection", n, "TLS/SSL", "connectEnd"), w(t, e, "fetch", n, "cache", "domainLookupStart"), w(t, e, "domainLookup", n, "DNS"),
                                        function(t, e, n) {
                                            (0, h._startChild)(t, {
                                                op: "browser",
                                                description: "request",
                                                startTimestamp: n + p(e.requestStart),
                                                endTimestamp: n + p(e.responseEnd)
                                            }), (0, h._startChild)(t, {
                                                op: "browser",
                                                description: "response",
                                                startTimestamp: n + p(e.responseStart),
                                                endTimestamp: n + p(e.responseEnd)
                                            })
                                        }(t, e, n)
                                })(t, r, l), e = l + p(r.responseStart), n = l + p(r.requestStart);
                                break;
                            case "mark":
                            case "paint":
                            case "measure": {
                                (function(t, e, n, r, i) {
                                    let a = i + n;
                                    (0, h._startChild)(t, {
                                        description: e.name,
                                        endTimestamp: a + r,
                                        op: e.entryType,
                                        startTimestamp: a
                                    })
                                })(t, r, i, a, l);
                                let e = (0, d.getVisibilityWatcher)(),
                                    n = r.startTime < e.firstHiddenTime;
                                "first-paint" === r.name && n && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding FP"), g.fp = {
                                    value: r.startTime,
                                    unit: "millisecond"
                                }), "first-contentful-paint" === r.name && n && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding FCP"), g.fcp = {
                                    value: r.startTime,
                                    unit: "millisecond"
                                });
                                break
                            }
                            case "resource": {
                                let e = r.name.replace(s.WINDOW.location.origin, "");
                                (function(t, e, n, r, i, a) {
                                    if ("xmlhttprequest" === e.initiatorType || "fetch" === e.initiatorType) return;
                                    let o = {};
                                    "transferSize" in e && (o["http.response_transfer_size"] = e.transferSize), "encodedBodySize" in e && (o["http.response_content_length"] = e.encodedBodySize), "decodedBodySize" in e && (o["http.decoded_response_content_length"] = e.decodedBodySize), "renderBlockingStatus" in e && (o["resource.render_blocking_status"] = e.renderBlockingStatus);
                                    let s = a + r,
                                        l = s + i;
                                    (0, h._startChild)(t, {
                                        description: n,
                                        endTimestamp: l,
                                        op: e.initiatorType ? "resource.".concat(e.initiatorType) : "resource.other",
                                        startTimestamp: s,
                                        data: o
                                    })
                                })(t, r, e, i, a, l)
                            }
                        }
                    }), m = Math.max(c.length - 1, 0), function(t) {
                        let e = s.WINDOW.navigator;
                        if (!e) return;
                        let n = e.connection;
                        n && (n.effectiveType && t.setTag("effectiveConnectionType", n.effectiveType), n.type && t.setTag("connectionType", n.type), (0, h.isMeasurementValue)(n.rtt) && (g["connection.rtt"] = {
                            value: n.rtt,
                            unit: "millisecond"
                        })), (0, h.isMeasurementValue)(e.deviceMemory) && t.setTag("deviceMemory", "".concat(e.deviceMemory, " GB")), (0, h.isMeasurementValue)(e.hardwareConcurrency) && t.setTag("hardwareConcurrency", String(e.hardwareConcurrency))
                    }(t), "pageload" === t.op) {
                    "number" == typeof e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding TTFB"), g.ttfb = {
                        value: (e - t.startTimestamp) * 1e3,
                        unit: "millisecond"
                    }, "number" == typeof n && n <= e && (g["ttfb.requestTime"] = {
                        value: (e - n) * 1e3,
                        unit: "millisecond"
                    })), ["fcp", "fp", "lcp"].forEach(e => {
                        if (!g[e] || l >= t.startTimestamp) return;
                        let n = g[e].value,
                            r = l + p(n),
                            i = Math.abs((r - t.startTimestamp) * 1e3),
                            a = i - n;
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Normalized ".concat(e, " from ").concat(n, " to ").concat(i, " (").concat(a, ")")), g[e].value = i
                    });
                    let a = g["mark.fid"];
                    a && g.fid && ((0, h._startChild)(t, {
                            description: "first input delay",
                            endTimestamp: a.value + p(g.fid.value),
                            op: "ui.action",
                            startTimestamp: a.value
                        }), delete g["mark.fid"]), !("fcp" in g) && delete g.cls, Object.keys(g).forEach(e => {
                            t.setMeasurement(e, g[e].value, g[e].unit)
                        }),
                        function(t) {
                            r && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding LCP Data"), r.element && t.setTag("lcp.element", (0, o.htmlTreeAsString)(r.element)), r.id && t.setTag("lcp.id", r.id), r.url && t.setTag("lcp.url", r.url.trim().slice(0, 200)), t.setTag("lcp.size", r.size)), i && i.sources && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding CLS Data"), i.sources.forEach((e, n) => t.setTag("cls.source.".concat(n + 1), (0, o.htmlTreeAsString)(e.node))))
                        }(t)
                }
                r = void 0, i = void 0, g = {}
            }

            function w(t, e, n, r, i, a) {
                let o = a ? e[a] : e["".concat(n, "End")],
                    s = e["".concat(n, "Start")];
                s && o && (0, h._startChild)(t, {
                    op: "browser",
                    description: i || n,
                    startTimestamp: r + p(s),
                    endTimestamp: r + p(o)
                })
            }
        },
        100183: function(t, e, n) {
            "use strict";

            function r(t) {
                return "number" == typeof t && isFinite(t)
            }

            function i(t, e) {
                let {
                    startTimestamp: n,
                    ...r
                } = e;
                return n && t.startTimestamp > n && (t.startTimestamp = n), t.startChild({
                    startTimestamp: n,
                    ...r
                })
            }
            n.r(e), n.d(e, {
                _startChild: function() {
                    return i
                },
                isMeasurementValue: function() {
                    return r
                }
            })
        },
        907888: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                defaultRequestInstrumentationOptions: function() {
                    return o
                },
                instrumentOutgoingRequests: function() {
                    return s
                }
            });
            var r = n("675065"),
                i = n("103787");
            let a = ["localhost", /^\/(?!\/)/],
                o = {
                    traceFetch: !0,
                    traceXHR: !0,
                    enableHTTPTimings: !0,
                    tracingOrigins: a,
                    tracePropagationTargets: a
                };

            function s(t) {
                let {
                    traceFetch: e,
                    traceXHR: n,
                    tracePropagationTargets: s,
                    tracingOrigins: c,
                    shouldCreateSpanForRequest: d,
                    enableHTTPTimings: f
                } = {
                    traceFetch: o.traceFetch,
                    traceXHR: o.traceXHR,
                    ...t
                }, h = "function" == typeof d ? d : t => !0, p = t => (function(t, e) {
                    return (0, i.stringMatchesSomePattern)(t, e || a)
                })(t, s || c), _ = {};
                e && (0, i.addInstrumentationHandler)("fetch", t => {
                    let e = function(t, e, n, a) {
                        if (!(0, r.hasTracingEnabled)() || !t.fetchData) return;
                        let o = e(t.fetchData.url);
                        if (t.endTimestamp && o) {
                            let e = t.fetchData.__span;
                            if (!e) return;
                            let n = a[e];
                            if (n) {
                                if (t.response) {
                                    n.setHttpStatus(t.response.status);
                                    let e = t.response && t.response.headers && t.response.headers.get("content-length"),
                                        r = parseInt(e);
                                    r > 0 && n.setData("http.response_content_length", r)
                                } else t.error && n.setStatus("internal_error");
                                n.finish(), delete a[e]
                            }
                            return
                        }
                        let s = (0, r.getCurrentHub)(),
                            l = s.getScope(),
                            c = s.getClient(),
                            u = l.getSpan(),
                            {
                                method: d,
                                url: f
                            } = t.fetchData,
                            h = o && u ? u.startChild({
                                data: {
                                    url: f,
                                    type: "fetch",
                                    "http.method": d
                                },
                                description: "".concat(d, " ").concat(f),
                                op: "http.client"
                            }) : void 0;
                        if (h && (t.fetchData.__span = h.spanId, a[h.spanId] = h), n(t.fetchData.url) && c) {
                            let e = t.args[0];
                            t.args[1] = t.args[1] || {};
                            let n = t.args[1];
                            n.headers = function(t, e, n, a) {
                                let o = n.getSpan(),
                                    s = o && o.transaction,
                                    {
                                        traceId: l,
                                        sampled: c,
                                        dsc: u
                                    } = n.getPropagationContext(),
                                    d = o ? o.toTraceparent() : (0, i.generateSentryTraceHeader)(l, void 0, c),
                                    f = s ? s.getDynamicSamplingContext() : u || (0, r.getDynamicSamplingContextFromClient)(l, e, n),
                                    h = (0, i.dynamicSamplingContextToSentryBaggageHeader)(f),
                                    p = "undefined" != typeof Request && (0, i.isInstanceOf)(t, Request) ? t.headers : a.headers;
                                if (!p) return {
                                    "sentry-trace": d,
                                    baggage: h
                                };
                                if ("undefined" != typeof Headers && (0, i.isInstanceOf)(p, Headers)) {
                                    let t = new Headers(p);
                                    return t.append("sentry-trace", d), h && t.append(i.BAGGAGE_HEADER_NAME, h), t
                                }
                                if (Array.isArray(p)) {
                                    let t = [...p, ["sentry-trace", d]];
                                    return h && t.push([i.BAGGAGE_HEADER_NAME, h]), t
                                } else {
                                    let t = "baggage" in p ? p.baggage : void 0,
                                        e = [];
                                    return Array.isArray(t) ? e.push(...t) : t && e.push(t), h && e.push(h), {
                                        ...p,
                                        "sentry-trace": d,
                                        baggage: e.length > 0 ? e.join(",") : void 0
                                    }
                                }
                            }(e, c, l, n)
                        }
                        return h
                    }(t, h, p, _);
                    f && e && l(e)
                }), n && (0, i.addInstrumentationHandler)("xhr", t => {
                    let e = function(t, e, n, a) {
                        let o = t.xhr,
                            s = o && o[i.SENTRY_XHR_DATA_KEY];
                        if (!(0, r.hasTracingEnabled)() || o && o.__sentry_own_request__ || !o || !s) return;
                        let l = e(s.url);
                        if (t.endTimestamp && l) {
                            let t = o.__sentry_xhr_span_id__;
                            if (!t) return;
                            let e = a[t];
                            e && (e.setHttpStatus(s.status_code), e.finish(), delete a[t]);
                            return
                        }
                        let c = (0, r.getCurrentHub)(),
                            d = c.getScope(),
                            f = d.getSpan(),
                            h = l && f ? f.startChild({
                                data: {
                                    ...s.data,
                                    type: "xhr",
                                    "http.method": s.method,
                                    url: s.url
                                },
                                description: "".concat(s.method, " ").concat(s.url),
                                op: "http.client"
                            }) : void 0;
                        if (h && (o.__sentry_xhr_span_id__ = h.spanId, a[o.__sentry_xhr_span_id__] = h), o.setRequestHeader && n(s.url)) {
                            if (h) {
                                let t = h && h.transaction,
                                    e = t && t.getDynamicSamplingContext(),
                                    n = (0, i.dynamicSamplingContextToSentryBaggageHeader)(e);
                                u(o, h.toTraceparent(), n)
                            } else {
                                let t = c.getClient(),
                                    {
                                        traceId: e,
                                        sampled: n,
                                        dsc: a
                                    } = d.getPropagationContext(),
                                    s = (0, i.generateSentryTraceHeader)(e, void 0, n),
                                    l = a || (t ? (0, r.getDynamicSamplingContextFromClient)(e, t, d) : void 0),
                                    f = (0, i.dynamicSamplingContextToSentryBaggageHeader)(l);
                                u(o, s, f)
                            }
                        }
                        return h
                    }(t, h, p, _);
                    f && e && l(e)
                })
            }

            function l(t) {
                let e = t.data.url,
                    n = new PerformanceObserver(r => {
                        let a = r.getEntries();
                        a.forEach(r => {
                            if (("fetch" === r.initiatorType || "xmlhttprequest" === r.initiatorType) && r.name.endsWith(e)) {
                                let e = function(t) {
                                    let {
                                        name: e,
                                        version: n
                                    } = function(t) {
                                        let e = "unknown",
                                            n = "unknown",
                                            r = "";
                                        for (let i of t) {
                                            if ("/" === i) {
                                                [e, n] = t.split("/");
                                                break
                                            }
                                            if (!isNaN(Number(i))) {
                                                e = "h" === r ? "http" : r, n = t.split(r)[1];
                                                break
                                            }
                                            r += i
                                        }
                                        return r === t && (e = r), {
                                            name: e,
                                            version: n
                                        }
                                    }(t.nextHopProtocol), r = [];
                                    return (r.push(["network.protocol.version", n], ["network.protocol.name", e]), i.browserPerformanceTimeOrigin) ? [...r, ["http.request.redirect_start", c(t.redirectStart)],
                                        ["http.request.fetch_start", c(t.fetchStart)],
                                        ["http.request.domain_lookup_start", c(t.domainLookupStart)],
                                        ["http.request.domain_lookup_end", c(t.domainLookupEnd)],
                                        ["http.request.connect_start", c(t.connectStart)],
                                        ["http.request.secure_connection_start", c(t.secureConnectionStart)],
                                        ["http.request.connection_end", c(t.connectEnd)],
                                        ["http.request.request_start", c(t.requestStart)],
                                        ["http.request.response_start", c(t.responseStart)],
                                        ["http.request.response_end", c(t.responseEnd)]
                                    ] : r
                                }(r);
                                e.forEach(e => t.setData(...e)), n.disconnect()
                            }
                        })
                    });
                n.observe({
                    entryTypes: ["resource"]
                })
            }

            function c(t) {
                return ((i.browserPerformanceTimeOrigin || performance.timeOrigin) + t) / 1e3
            }

            function u(t, e, n) {
                try {
                    t.setRequestHeader("sentry-trace", e), n && t.setRequestHeader(i.BAGGAGE_HEADER_NAME, n)
                } catch (t) {}
            }
        },
        339448: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                instrumentRoutingWithDefaults: function() {
                    return a
                }
            });
            var r = n("103787"),
                i = n("307447");

            function a(t) {
                let e, n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (!i.WINDOW || !i.WINDOW.location) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Could not initialize routing instrumentation due to invalid location");
                    return
                }
                let o = i.WINDOW.location.href;
                n && (e = t({
                    name: i.WINDOW.location.pathname,
                    startTimestamp: r.browserPerformanceTimeOrigin ? r.browserPerformanceTimeOrigin / 1e3 : void 0,
                    op: "pageload",
                    metadata: {
                        source: "url"
                    }
                })), a && (0, r.addInstrumentationHandler)("history", n => {
                    let {
                        to: a,
                        from: s
                    } = n;
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
        307447: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                WINDOW: function() {
                    return i
                }
            });
            var r = n("103787");
            let i = r.GLOBAL_OBJ
        },
        916876: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                onCLS: function() {
                    return s
                }
            });
            var r = n("446461"),
                i = n("34682"),
                a = n("885405"),
                o = n("906617");
            let s = t => {
                let e;
                let n = (0, i.initMetric)("CLS", 0),
                    s = 0,
                    l = [],
                    c = t => {
                        t.forEach(t => {
                            if (!t.hadRecentInput) {
                                let r = l[0],
                                    i = l[l.length - 1];
                                s && 0 !== l.length && t.startTime - i.startTime < 1e3 && t.startTime - r.startTime < 5e3 ? (s += t.value, l.push(t)) : (s = t.value, l = [t]), s > n.value && (n.value = s, n.entries = l, e && e())
                            }
                        })
                    },
                    u = (0, a.observe)("layout-shift", c);
                if (u) {
                    e = (0, r.bindReporter)(t, n);
                    let i = () => {
                        c(u.takeRecords()), e(!0)
                    };
                    return (0, o.onHidden)(i), i
                }
            }
        },
        443026: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                onFID: function() {
                    return l
                }
            });
            var r = n("446461"),
                i = n("810843"),
                a = n("34682"),
                o = n("885405"),
                s = n("906617");
            let l = t => {
                let e;
                let n = (0, i.getVisibilityWatcher)(),
                    l = (0, a.initMetric)("FID"),
                    c = t => {
                        t.startTime < n.firstHiddenTime && (l.value = t.processingStart - t.startTime, l.entries.push(t), e(!0))
                    },
                    u = t => {
                        t.forEach(c)
                    },
                    d = (0, o.observe)("first-input", u);
                e = (0, r.bindReporter)(t, l), d && (0, s.onHidden)(() => {
                    u(d.takeRecords()), d.disconnect()
                }, !0)
            }
        },
        162223: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                onLCP: function() {
                    return u
                }
            });
            var r = n("446461"),
                i = n("953556"),
                a = n("810843"),
                o = n("34682"),
                s = n("885405"),
                l = n("906617");
            let c = {},
                u = t => {
                    let e;
                    let n = (0, a.getVisibilityWatcher)(),
                        u = (0, o.initMetric)("LCP"),
                        d = t => {
                            let r = t[t.length - 1];
                            if (r) {
                                let t = Math.max(r.startTime - (0, i.getActivationStart)(), 0);
                                t < n.firstHiddenTime && (u.value = t, u.entries = [r], e())
                            }
                        },
                        f = (0, s.observe)("largest-contentful-paint", d);
                    if (f) {
                        e = (0, r.bindReporter)(t, u);
                        let n = () => {
                            !c[u.id] && (d(f.takeRecords()), f.disconnect(), c[u.id] = !0, e(!0))
                        };
                        return ["keydown", "click"].forEach(t => {
                            addEventListener(t, n, {
                                once: !0,
                                capture: !0
                            })
                        }), (0, l.onHidden)(n, !0), n
                    }
                }
        },
        446461: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                bindReporter: function() {
                    return r
                }
            });
            let r = (t, e, n) => {
                let r, i;
                return a => {
                    e.value >= 0 && (a || n) && ((i = e.value - (r || 0)) || void 0 === r) && (r = e.value, e.delta = i, t(e))
                }
            }
        },
        863474: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                generateUniqueID: function() {
                    return r
                }
            });
            let r = () => "v3-".concat(Date.now(), "-").concat(Math.floor(Math.random() * (9e12 - 1)) + 1e12)
        },
        953556: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getActivationStart: function() {
                    return i
                }
            });
            var r = n("900407");
            let i = () => {
                let t = (0, r.getNavigationEntry)();
                return t && t.activationStart || 0
            }
        },
        900407: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getNavigationEntry: function() {
                    return a
                }
            });
            var r = n("307447");
            let i = () => {
                    let t = r.WINDOW.performance.timing,
                        e = r.WINDOW.performance.navigation.type,
                        n = {
                            entryType: "navigation",
                            startTime: 0,
                            type: 2 == e ? "back_forward" : 1 === e ? "reload" : "navigate"
                        };
                    for (let e in t) "navigationStart" !== e && "toJSON" !== e && (n[e] = Math.max(t[e] - t.navigationStart, 0));
                    return n
                },
                a = () => r.WINDOW.__WEB_VITALS_POLYFILL__ ? r.WINDOW.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || i()) : r.WINDOW.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
        },
        810843: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getVisibilityWatcher: function() {
                    return l
                }
            });
            var r = n("307447"),
                i = n("906617");
            let a = -1,
                o = () => "hidden" !== r.WINDOW.document.visibilityState || r.WINDOW.document.prerendering ? 1 / 0 : 0,
                s = () => {
                    (0, i.onHidden)(t => {
                        let {
                            timeStamp: e
                        } = t;
                        a = e
                    }, !0)
                },
                l = () => (a < 0 && (a = o(), s()), {
                    get firstHiddenTime() {
                        return a
                    }
                })
        },
        34682: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                initMetric: function() {
                    return s
                }
            });
            var r = n("307447"),
                i = n("863474"),
                a = n("953556"),
                o = n("900407");
            let s = (t, e) => {
                let n = (0, o.getNavigationEntry)(),
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
        885405: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                observe: function() {
                    return r
                }
            });
            let r = (t, e, n) => {
                try {
                    if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                        let r = new PerformanceObserver(t => {
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
        906617: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                onHidden: function() {
                    return i
                }
            });
            var r = n("307447");
            let i = (t, e) => {
                let n = i => {
                    ("pagehide" === i.type || "hidden" === r.WINDOW.document.visibilityState) && (t(i), e && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
                };
                addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
            }
        },
        530271: function(t, e, n) {
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
            var r = n("579020"),
                i = n("907888")
        }
    }
]);
//# sourceMappingURL=b2da55d0f550850e9ab2.js.map