(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["43455"], {
        903204: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BrowserClient: function() {
                    return c
                }
            });
            var r = n("91320"),
                i = n("648238"),
                a = n("590171"),
                o = n("643487"),
                s = n("124969"),
                u = n("184612");
            class c extends r.BaseClient {
                constructor(t) {
                    let e = o.WINDOW.SENTRY_SDK_SOURCE || (0, i.getSDKSource)();
                    t._metadata = t._metadata || {}, t._metadata.sdk = t._metadata.sdk || {
                        name: "sentry.javascript.browser",
                        packages: [{
                            name: `${e}:@sentry/browser`,
                            version: r.SDK_VERSION
                        }],
                        version: r.SDK_VERSION
                    }, super(t), t.sendClientReports && o.WINDOW.document && o.WINDOW.document.addEventListener("visibilitychange", () => {
                        "hidden" === o.WINDOW.document.visibilityState && this._flushOutcomes()
                    })
                }
                eventFromException(t, e) {
                    return (0, a.eventFromException)(this._options.stackParser, t, e, this._options.attachStacktrace)
                }
                eventFromMessage(t, e = "info", n) {
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
                    let e = (0, u.createUserFeedbackEnvelope)(t, {
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
            }
        },
        590171: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                eventFromException: function() {
                    return c
                },
                eventFromMessage: function() {
                    return l
                },
                eventFromUnknownInput: function() {
                    return d
                },
                exceptionFromError: function() {
                    return a
                }
            });
            var r = n("91320"),
                i = n("648238");

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
                            if (u.test(t.message)) return 1
                        }
                        return 0
                    }(e);
                try {
                    return t(n, r)
                } catch (t) {}
                return []
            }
            let u = /Minified React error #\d+;/i;

            function c(t, e, n, r) {
                let a = d(t, e, n && n.syntheticException || void 0, r);
                return (0, i.addExceptionMechanism)(a), a.level = "error", n && n.event_id && (a.event_id = n.event_id), (0, i.resolvedSyncPromise)(a)
            }

            function l(t, e, n = "info", r, a) {
                let o = f(t, e, r && r.syntheticException || void 0, a);
                return o.level = n, r && r.event_id && (o.event_id = r.event_id), (0, i.resolvedSyncPromise)(o)
            }

            function d(t, e, n, a, u) {
                let c;
                if ((0, i.isErrorEvent)(e) && e.error) return o(t, e.error);
                if ((0, i.isDOMError)(e) || (0, i.isDOMException)(e)) {
                    if ("stack" in e) c = o(t, e);
                    else {
                        let r = e.name || ((0, i.isDOMError)(e) ? "DOMError" : "DOMException"),
                            o = e.message ? `${r}: ${e.message}` : r;
                        c = f(t, o, n, a), (0, i.addExceptionTypeValue)(c, o)
                    }
                    return "code" in e && (c.tags = {
                        ...c.tags,
                        "DOMException.code": `${e.code}`
                    }), c
                }
                return (0, i.isError)(e) ? o(t, e) : (0, i.isPlainObject)(e) || (0, i.isEvent)(e) ? (c = function(t, e, n, a) {
                    let o = (0, r.getCurrentHub)().getClient(),
                        u = o && o.getOptions().normalizeDepth,
                        c = {
                            exception: {
                                values: [{
                                    type: (0, i.isEvent)(e) ? e.constructor.name : a ? "UnhandledRejection" : "Error",
                                    value: function(t, {
                                        isUnhandledRejection: e
                                    }) {
                                        let n = (0, i.extractExceptionKeysForMessage)(t),
                                            r = e ? "promise rejection" : "exception";
                                        if ((0, i.isErrorEvent)(t)) return `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\``;
                                        if ((0, i.isEvent)(t)) {
                                            let e = function(t) {
                                                try {
                                                    let e = Object.getPrototypeOf(t);
                                                    return e ? e.constructor.name : void 0
                                                } catch (t) {}
                                            }(t);
                                            return `Event \`${e}\` (type=${t.type}) captured as ${r}`
                                        }
                                        return `Object captured as ${r} with keys: ${n}`
                                    }(e, {
                                        isUnhandledRejection: a
                                    })
                                }]
                            },
                            extra: {
                                __serialized__: (0, i.normalizeToSize)(e, u)
                            }
                        };
                    if (n) {
                        let e = s(t, n);
                        e.length && (c.exception.values[0].stacktrace = {
                            frames: e
                        })
                    }
                    return c
                }(t, e, n, u), (0, i.addExceptionMechanism)(c, {
                    synthetic: !0
                }), c) : (c = f(t, e, n, a), (0, i.addExceptionTypeValue)(c, `${e}`, void 0), (0, i.addExceptionMechanism)(c, {
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
        643487: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                WINDOW: function() {
                    return a
                },
                shouldIgnoreOnError: function() {
                    return s
                },
                wrap: function() {
                    return function t(e, n = {}, a) {
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
                            Object.getOwnPropertyDescriptor(s, "name").configurable && Object.defineProperty(s, "name", {
                                get: () => e.name
                            })
                        } catch (t) {}
                        return s
                    }
                }
            });
            var r = n("91320"),
                i = n("648238");
            let a = i.GLOBAL_OBJ,
                o = 0;

            function s() {
                return o > 0
            }
        },
        887117: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Breadcrumbs: function() {
                    return b.Breadcrumbs
                },
                BrowserClient: function() {
                    return a.BrowserClient
                },
                BrowserProfilingIntegration: function() {
                    return m.BrowserProfilingIntegration
                },
                BrowserTracing: function() {
                    return h.BrowserTracing
                },
                Dedupe: function() {
                    return w.Dedupe
                },
                FunctionToString: function() {
                    return r.FunctionToString
                },
                GlobalHandlers: function() {
                    return y.GlobalHandlers
                },
                HttpContext: function() {
                    return S.HttpContext
                },
                Hub: function() {
                    return r.Hub
                },
                InboundFilters: function() {
                    return r.InboundFilters
                },
                Integrations: function() {
                    return k
                },
                LinkedErrors: function() {
                    return E.LinkedErrors
                },
                ModuleMetadata: function() {
                    return r.ModuleMetadata
                },
                Replay: function() {
                    return p.Replay
                },
                SDK_VERSION: function() {
                    return r.SDK_VERSION
                },
                Scope: function() {
                    return r.Scope
                },
                TryCatch: function() {
                    return v.TryCatch
                },
                WINDOW: function() {
                    return i.WINDOW
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
                captureUserFeedback: function() {
                    return d.captureUserFeedback
                },
                chromeStackLineParser: function() {
                    return u.chromeStackLineParser
                },
                close: function() {
                    return d.close
                },
                configureScope: function() {
                    return r.configureScope
                },
                createTransport: function() {
                    return r.createTransport
                },
                createUserFeedbackEnvelope: function() {
                    return l.createUserFeedbackEnvelope
                },
                defaultIntegrations: function() {
                    return d.defaultIntegrations
                },
                defaultRequestInstrumentationOptions: function() {
                    return h.defaultRequestInstrumentationOptions
                },
                defaultStackLineParsers: function() {
                    return u.defaultStackLineParsers
                },
                defaultStackParser: function() {
                    return u.defaultStackParser
                },
                eventFromException: function() {
                    return c.eventFromException
                },
                eventFromMessage: function() {
                    return c.eventFromMessage
                },
                extractTraceparentData: function() {
                    return r.extractTraceparentData
                },
                flush: function() {
                    return d.flush
                },
                forceLoad: function() {
                    return d.forceLoad
                },
                geckoStackLineParser: function() {
                    return u.geckoStackLineParser
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
                init: function() {
                    return d.init
                },
                instrumentOutgoingRequests: function() {
                    return h.instrumentOutgoingRequests
                },
                lastEventId: function() {
                    return d.lastEventId
                },
                makeBrowserOfflineTransport: function() {
                    return _.makeBrowserOfflineTransport
                },
                makeFetchTransport: function() {
                    return o.makeFetchTransport
                },
                makeMain: function() {
                    return r.makeMain
                },
                makeMultiplexedTransport: function() {
                    return r.makeMultiplexedTransport
                },
                makeXHRTransport: function() {
                    return s.makeXHRTransport
                },
                onLoad: function() {
                    return d.onLoad
                },
                onProfilingStartRouteTransaction: function() {
                    return g.onProfilingStartRouteTransaction
                },
                opera10StackLineParser: function() {
                    return u.opera10StackLineParser
                },
                opera11StackLineParser: function() {
                    return u.opera11StackLineParser
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
                showReportDialog: function() {
                    return d.showReportDialog
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
                winjsStackLineParser: function() {
                    return u.winjsStackLineParser
                },
                withScope: function() {
                    return r.withScope
                },
                wrap: function() {
                    return d.wrap
                }
            });
            var r = n("91320"),
                i = n("643487"),
                a = n("903204"),
                o = n("393746"),
                s = n("975927"),
                u = n("202406"),
                c = n("590171"),
                l = n("184612"),
                d = n("846297"),
                f = n("53383"),
                p = n("438142"),
                h = n("752875"),
                _ = n("490753"),
                g = n("65534"),
                m = n("643714"),
                y = n("297280"),
                v = n("382078"),
                b = n("124969"),
                E = n("140735"),
                S = n("612568"),
                w = n("683900");
            let T = {};
            i.WINDOW.Sentry && i.WINDOW.Sentry.Integrations && (T = i.WINDOW.Sentry.Integrations);
            let k = {
                ...T,
                ...r.Integrations,
                ...f
            }
        },
        124969: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BREADCRUMB_INTEGRATION_ID: function() {
                    return o
                },
                Breadcrumbs: function() {
                    return s
                }
            });
            var r = n("91320"),
                i = n("648238"),
                a = n("643487");
            let o = "Breadcrumbs";
            class s {
                static __initStatic() {
                    this.id = o
                }
                __init() {
                    this.name = s.id
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
                setupOnce() {
                    this.options.console && (0, i.addInstrumentationHandler)("console", u), this.options.dom && (0, i.addInstrumentationHandler)("dom", function(t) {
                        return function(e) {
                            let n;
                            let a = "object" == typeof t ? t.serializeAttribute : void 0,
                                o = "object" == typeof t && "number" == typeof t.maxStringLength ? t.maxStringLength : void 0;
                            o && o > 1024 && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${o} was configured. Sentry will use 1024 instead.`), o = 1024), "string" == typeof a && (a = [a]);
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
                                category: `ui.${e.name}`,
                                message: n
                            }, {
                                event: e.event,
                                name: e.name,
                                global: e.global
                            })
                        }
                    }(this.options.dom)), this.options.xhr && (0, i.addInstrumentationHandler)("xhr", c), this.options.fetch && (0, i.addInstrumentationHandler)("fetch", l), this.options.history && (0, i.addInstrumentationHandler)("history", d)
                }
                addSentryBreadcrumb(t) {
                    this.options.sentry && (0, r.getCurrentHub)().addBreadcrumb({
                        category: `sentry.${"transaction"===t.type?"transaction":"event"}`,
                        event_id: t.event_id,
                        level: t.level,
                        message: (0, i.getEventDescription)(t)
                    }, {
                        event: t
                    })
                }
            }
            s.__initStatic();

            function u(t) {
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
                    e.message = `Assertion failed: ${(0,i.safeJoin)(t.args.slice(1)," ")||"console.assert"}`, e.data.arguments = t.args.slice(1)
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
                    status_code: u,
                    body: c
                } = a, l = {
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
                        status_code: u
                    },
                    type: "http"
                }, l)
            }

            function l(t) {
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
                    u = (0, i.parseUrl)(n);
                !s.path && (s = o), o.protocol === u.protocol && o.host === u.host && (n = u.relative), o.protocol === s.protocol && o.host === s.host && (e = s.relative), (0, r.getCurrentHub)().addBreadcrumb({
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
                    return i
                }
            });
            var r = n("648238");
            class i {
                constructor() {
                    i.prototype.__init.call(this)
                }
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
            }
            i.__initStatic();

            function a(t, e) {
                let n = u(t),
                    r = u(e);
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

            function u(t) {
                let e = t.exception;
                if (e) try {
                    return e.values[0].stacktrace.frames
                } catch (t) {}
            }
        },
        297280: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                GlobalHandlers: function() {
                    return s
                }
            });
            var r = n("91320"),
                i = n("648238"),
                a = n("590171"),
                o = n("643487");
            class s {
                static __initStatic() {
                    this.id = "GlobalHandlers"
                }
                __init() {
                    this.name = s.id
                }
                __init2() {
                    this._installFunc = {
                        onerror: u,
                        onunhandledrejection: c
                    }
                }
                constructor(t) {
                    s.prototype.__init.call(this), s.prototype.__init2.call(this), this._options = {
                        onerror: !0,
                        onunhandledrejection: !0,
                        ...t
                    }
                }
                setupOnce() {
                    Error.stackTraceLimit = 50;
                    let t = this._options;
                    for (let e in t) {
                        let n = this._installFunc[e];
                        n && t[e] && (function(t) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log(`Global Handler attached: ${t}`)
                        }(e), n(), this._installFunc[e] = void 0)
                    }
                }
            }

            function u() {
                (0, i.addInstrumentationHandler)("error", t => {
                    let [e, n, r] = f();
                    if (!e.getIntegration(s)) return;
                    let {
                        msg: u,
                        url: c,
                        line: p,
                        column: h,
                        error: _
                    } = t;
                    if ((0, o.shouldIgnoreOnError)() || _ && _.__sentry_own_request__) return;
                    let g = void 0 === _ && (0, i.isString)(u) ? function(t, e, n, r) {
                        let a = (0, i.isErrorEvent)(t) ? t.message : t,
                            o = "Error",
                            s = a.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                        return s && (o = s[1], a = s[2]), l({
                            exception: {
                                values: [{
                                    type: o,
                                    value: a
                                }]
                            }
                        }, e, n, r)
                    }(u, c, p, h) : l((0, a.eventFromUnknownInput)(n, _ || u, void 0, r, !1), c, p, h);
                    g.level = "error", d(e, _, g, "onerror")
                })
            }

            function c() {
                (0, i.addInstrumentationHandler)("unhandledrejection", t => {
                    let [e, n, r] = f();
                    if (!e.getIntegration(s)) return;
                    let u = t;
                    try {
                        "reason" in t ? u = t.reason : "detail" in t && "reason" in t.detail && (u = t.detail.reason)
                    } catch (t) {}
                    if ((0, o.shouldIgnoreOnError)() || u && u.__sentry_own_request__) return !0;
                    let c = (0, i.isPrimitive)(u) ? function(t) {
                        return {
                            exception: {
                                values: [{
                                    type: "UnhandledRejection",
                                    value: `Non-Error promise rejection captured with value: ${String(t)}`
                                }]
                            }
                        }
                    }(u) : (0, a.eventFromUnknownInput)(n, u, void 0, r, !0);
                    c.level = "error", d(e, u, c, "onunhandledrejection")
                })
            }
            s.__initStatic();

            function l(t, e, n, r) {
                let a = t.exception = t.exception || {},
                    o = a.values = a.values || [],
                    s = o[0] = o[0] || {},
                    u = s.stacktrace = s.stacktrace || {},
                    c = u.frames = u.frames || [],
                    l = isNaN(parseInt(r, 10)) ? void 0 : r,
                    d = isNaN(parseInt(n, 10)) ? void 0 : n,
                    f = (0, i.isString)(e) && e.length > 0 ? e : (0, i.getLocationHref)();
                return 0 === c.length && c.push({
                    colno: l,
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
        612568: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                HttpContext: function() {
                    return a
                }
            });
            var r = n("91320"),
                i = n("643487");
            class a {
                constructor() {
                    a.prototype.__init.call(this)
                }
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
            }
            a.__initStatic()
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
                    return a
                }
            });
            var r = n("648238"),
                i = n("590171");
            class a {
                static __initStatic() {
                    this.id = "LinkedErrors"
                }
                __init() {
                    this.name = a.id
                }
                constructor(t = {}) {
                    a.prototype.__init.call(this), this._key = t.key || "cause", this._limit = t.limit || 5
                }
                setupOnce(t, e) {
                    t((t, n) => {
                        let o = e(),
                            s = o.getClient(),
                            u = o.getIntegration(a);
                        if (!s || !u) return t;
                        let c = s.getOptions();
                        return (0, r.applyAggregateErrorsToEvent)(i.exceptionFromError, c.stackParser, c.maxValueLength, u._key, u._limit, t, n), t
                    })
                }
            }
            a.__initStatic()
        },
        382078: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                TryCatch: function() {
                    return o
                }
            });
            var r = n("648238"),
                i = n("643487");
            let a = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
            class o {
                static __initStatic() {
                    this.id = "TryCatch"
                }
                __init() {
                    this.name = o.id
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
                setupOnce() {
                    this._options.setTimeout && (0, r.fill)(i.WINDOW, "setTimeout", s), this._options.setInterval && (0, r.fill)(i.WINDOW, "setInterval", s), this._options.requestAnimationFrame && (0, r.fill)(i.WINDOW, "requestAnimationFrame", u), this._options.XMLHttpRequest && "XMLHttpRequest" in i.WINDOW && (0, r.fill)(XMLHttpRequest.prototype, "send", c);
                    let t = this._options.eventTarget;
                    t && (Array.isArray(t) ? t : a).forEach(l)
                }
            }

            function s(t) {
                return function(...e) {
                    let n = e[0];
                    return e[0] = (0, i.wrap)(n, {
                        mechanism: {
                            data: {
                                function: (0, r.getFunctionName)(t)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), t.apply(this, e)
                }
            }

            function u(t) {
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
                return function(...e) {
                    let n = this;
                    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(t => {
                        t in n && "function" == typeof n[t] && (0, r.fill)(n, t, function(e) {
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
                    }), t.apply(this, e)
                }
            }

            function l(t) {
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
        65534: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                onProfilingStartRouteTransaction: function() {
                    return u
                },
                wrapTransactionWithProfiling: function() {
                    return c
                }
            });
            var r = n("91320"),
                i = n("648238"),
                a = n("643487"),
                o = n("450436");
            let s = !1;

            function u(t) {
                return t ? c(t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] Transaction is undefined, skipping profiling"), t)
            }

            function c(t) {
                let e;
                let n = a.WINDOW.Profiler;
                if ("function" != typeof n) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object."), t;
                if (s) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] Profiling has been disabled for the duration of the current user session."), t;
                let u = (0, r.getCurrentHub)().getClient(),
                    c = u && u.getOptions();
                if (!c) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] Profiling disabled, no options found."), t;
                let l = c.profilesSampleRate;
                if (!(0, o.isValidSampleRate)(l)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("[Profiling] Discarding profile because of invalid sample rate."), t;
                if (!l) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0"), t;
                if (!(!0 === l || Math.random() < l)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log(`[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(l)})`), t;
                try {
                    e = new n({
                        sampleInterval: 10,
                        maxBufferSize: Math.floor(3e3)
                    })
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (i.logger.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."), i.logger.log("[Profiling] Disabling profiling for current user session.")), s = !0
                }
                if (!e) return t;
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log(`[Profiling] started profiling transaction: ${t.name||t.description}`);
                let d = (0, i.uuid4)();
                async function f() {
                    if (!t || !e) return null;
                    let n = t.startChild({
                        description: "profiler.stop",
                        op: "profiler"
                    });
                    return e.stop().then(e => (n.finish(), p && (a.WINDOW.clearTimeout(p), p = void 0), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log(`[Profiling] stopped profiling of transaction: ${t.name||t.description}`), e) ? ((0, o.addProfileToMap)(d, e), null) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log(`[Profiling] profiler returned null profile for: ${t.name||t.description}`, "this may indicate an overlapping transaction or a call to stopProfiling with a profile title that was never started"), null)).catch(t => (n.finish(), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] error while stopping profiler:", t), null))
                }
                let p = a.WINDOW.setTimeout(() => {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] max profile duration elapsed, stopping profiling for:", t.name || t.description), f()
                    }, 3e4),
                    h = t.finish.bind(t);
                return t.finish = function() {
                    return t ? (f().then(() => {
                        t.setContext("profile", {
                            profile_id: d
                        }), h()
                    }, () => {
                        h()
                    }), t) : h()
                }, t
            }
        },
        643714: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BrowserProfilingIntegration: function() {
                    return o
                }
            });
            var r = n("648238"),
                i = n("65534"),
                a = n("450436");
            class o {
                constructor() {
                    o.prototype.__init.call(this), o.prototype.__init2.call(this)
                }
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
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Profiling] Could not retrieve profile for transaction: ${i}`);
                                continue
                            }
                            a.PROFILE_MAP.delete(i);
                            let s = (0, a.createProfilingEvent)(i, o, t);
                            s && n.push(s)
                        }(0, a.addProfilesToEnvelope)(t, n)
                    })) : r.logger.warn("[Profiling] Client does not support hooks, profiling will be disabled")
                }
            }
        },
        450436: function(t, e, n) {
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
                    return g
                },
                isValidSampleRate: function() {
                    return y
                }
            });
            var r, i = n("91320"),
                a = n("648238"),
                o = n("643487");
            let s = String(0),
                u = "",
                c = "",
                l = "",
                d = o.WINDOW.navigator && o.WINDOW.navigator.userAgent || "",
                f = "",
                p = o.WINDOW.navigator && o.WINDOW.navigator.language || o.WINDOW.navigator && o.WINDOW.navigator.languages && o.WINDOW.navigator.languages["0"] || "",
                h = o.WINDOW.navigator && o.WINDOW.navigator.userAgentData;
            if ("object" == typeof(r = h) && null !== r && "getHighEntropyValues" in r) h.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"]).then(t => {
                if (u = t.platform || "", l = t.architecture || "", f = t.model || "", c = t.platformVersion || "", t.fullVersionList && t.fullVersionList.length > 0) {
                    let e = t.fullVersionList[t.fullVersionList.length - 1];
                    d = `${e.brand} ${e.version}`
                }
            }).catch(t => void 0);

            function _(t, e) {
                if (!e.length) return t;
                for (let n of e) t[1].push([{
                    type: "profile"
                }, n]);
                return t
            }

            function g(t) {
                let e = [];
                return (0, a.forEachEnvelopeItem)(t, (t, n) => {
                    if ("transaction" === n)
                        for (let n = 1; n < t.length; n++) {
                            let r = t[n];
                            r && r.contexts && r.contexts.profile && r.contexts.profile.profile_id && e.push(t[n])
                        }
                }), e
            }
            let m = new WeakMap;

            function y(t) {
                return "number" != typeof t && "boolean" != typeof t || "number" == typeof t && isNaN(t) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.warn(`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`), !1) : !0 === t || !1 === t || !(t < 0) && !(t > 1) || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${t}.`), !1)
            }

            function v(t, e, n) {
                var r;
                return ((r = e).samples.length < 2 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.log("[Profiling] Discarding profile because it contains less than 2 samples"), !1) : !!r.frames.length || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.log("[Profiling] Discarding profile because it contains no frames"), !1)) ? function(t, e, n) {
                    if ("transaction" !== t.type) throw TypeError("Profiling events may only be attached to transactions, this should never occur.");
                    if (null == e) throw TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${e} instead.`);
                    let r = function(t) {
                            let e = t && t.contexts && t.contexts.trace && t.contexts.trace.trace_id;
                            return ("string" == typeof e && 32 !== e.length && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.log(`[Profiling] Invalid traceId: ${e} on profiled event`), "string" != typeof e) ? "" : e
                        }(t),
                        h = function(t) {
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
                                    u = o - (a.browserPerformanceTimeOrigin || o);
                                for (let a = 0; a < t.samples.length; a++) {
                                    let o = t.samples[a];
                                    if (void 0 === o.stackId) {
                                        void 0 === e && (e = n, r.stacks[e] = [], n++), r.samples[a] = {
                                            elapsed_since_start_ns: ((o.timestamp + u - i) * 1e6).toFixed(0),
                                            stack_id: e,
                                            thread_id: s
                                        };
                                        continue
                                    }
                                    let c = t.stacks[o.stackId],
                                        l = [];
                                    for (; c;) {
                                        l.push(c.frameId);
                                        let e = t.frames[c.frameId];
                                        void 0 === r.frames[c.frameId] && (r.frames[c.frameId] = {
                                            function: e.name,
                                            abs_path: "number" == typeof e.resourceId ? t.resources[e.resourceId] : void 0,
                                            lineno: e.line,
                                            colno: e.column
                                        }), c = void 0 === c.parentId ? void 0 : t.stacks[c.parentId]
                                    }
                                    let d = {
                                        elapsed_since_start_ns: ((o.timestamp + u - i) * 1e6).toFixed(0),
                                        stack_id: n,
                                        thread_id: s
                                    };
                                    r.stacks[n] = l, r.samples[a] = d, n++
                                }
                                return r
                            }(t)
                        }(e),
                        _ = "number" == typeof t.start_timestamp ? 1e3 * t.start_timestamp : Date.now(),
                        g = "number" == typeof t.timestamp ? 1e3 * t.timestamp : Date.now();
                    return {
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
                            name: u,
                            version: c,
                            build_number: d
                        },
                        device: {
                            locale: p,
                            model: f,
                            manufacturer: d,
                            architecture: l,
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
                                let u = s.stackParser;
                                if (!u) return [];
                                let c = m.get(u);
                                c ? e = c : (e = new Map, m.set(u, e));
                                let l = Object.keys(n).reduce((t, r) => {
                                        let i;
                                        let a = e.get(r);
                                        a ? i = a : (i = u(r), e.set(r, i));
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
                                for (let e of t) e && l[e] && d.push({
                                    type: "sourcemap",
                                    code_file: e,
                                    debug_id: l[e]
                                });
                                return d
                            }(e.resources)
                        },
                        profile: h,
                        transactions: [{
                            name: t.transaction || "",
                            id: t.event_id || (0, a.uuid4)(),
                            trace_id: r,
                            active_thread_id: s,
                            relative_start_ns: "0",
                            relative_end_ns: ((g - _) * 1e6).toFixed(0)
                        }]
                    }
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
        846297: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                captureUserFeedback: function() {
                    return x
                },
                close: function() {
                    return w
                },
                defaultIntegrations: function() {
                    return g
                },
                flush: function() {
                    return S
                },
                forceLoad: function() {
                    return b
                },
                init: function() {
                    return m
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
                    return T
                }
            });
            var r = n("91320"),
                i = n("648238"),
                a = n("903204"),
                o = n("643487"),
                s = n("297280"),
                u = n("382078"),
                c = n("124969"),
                l = n("140735"),
                d = n("612568"),
                f = n("683900"),
                p = n("202406"),
                h = n("393746"),
                _ = n("975927");
            let g = [new r.Integrations.InboundFilters, new r.Integrations.FunctionToString, new u.TryCatch, new c.Breadcrumbs, new s.GlobalHandlers, new l.LinkedErrors, new f.Dedupe, new d.HttpContext];

            function m(t = {}) {
                void 0 === t.defaultIntegrations && (t.defaultIntegrations = g), void 0 === t.release && ("string" == typeof __SENTRY_RELEASE__ && (t.release = __SENTRY_RELEASE__), o.WINDOW.SENTRY_RELEASE && o.WINDOW.SENTRY_RELEASE.id && (t.release = o.WINDOW.SENTRY_RELEASE.id)), void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0), void 0 === t.sendClientReports && (t.sendClientReports = !0);
                let e = {
                    ...t,
                    stackParser: (0, i.stackParserFromStackParserOptions)(t.stackParser || p.defaultStackParser),
                    integrations: (0, r.getIntegrationsToSetup)(t),
                    transport: t.transport || ((0, i.supportsFetch)() ? h.makeFetchTransport : _.makeXHRTransport)
                };
                (0, r.initAndBind)(a.BrowserClient, e), t.autoSessionTracking && function() {
                    if (void 0 === o.WINDOW.document) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
                        return
                    }
                    let t = (0, r.getCurrentHub)();
                    t.captureSession && (k(t), (0, i.addInstrumentationHandler)("history", ({
                        from: t,
                        to: e
                    }) => {
                        !(void 0 === t || t === e) && k((0, r.getCurrentHub)())
                    }))
                }()
            }

            function y(t = {}, e = (0, r.getCurrentHub)()) {
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
                let u = o.WINDOW.document.createElement("script");
                u.async = !0, u.crossOrigin = "anonymous", u.src = (0, r.getReportDialogEndpoint)(s, t), t.onLoad && (u.onload = t.onLoad);
                let c = o.WINDOW.document.head || o.WINDOW.document.body;
                c ? c.appendChild(u) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.error("Not injecting report dialog. No injection point found in HTML")
            }

            function v() {
                return (0, r.getCurrentHub)().lastEventId()
            }

            function b() {}

            function E(t) {
                t()
            }

            function S(t) {
                let e = (0, r.getCurrentHub)().getClient();
                return e ? e.flush(t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("Cannot flush events. No client defined."), (0, i.resolvedSyncPromise)(!1))
            }

            function w(t) {
                let e = (0, r.getCurrentHub)().getClient();
                return e ? e.close(t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("Cannot flush events and disable SDK. No client defined."), (0, i.resolvedSyncPromise)(!1))
            }

            function T(t) {
                return (0, o.wrap)(t)()
            }

            function k(t) {
                t.startSession({
                    ignoreDuration: !0
                }), t.captureSession()
            }

            function x(t) {
                let e = (0, r.getCurrentHub)().getClient();
                e && e.captureUserFeedback(t)
            }
        },
        202406: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                chromeStackLineParser: function() {
                    return s
                },
                defaultStackLineParsers: function() {
                    return m
                },
                defaultStackParser: function() {
                    return y
                },
                geckoStackLineParser: function() {
                    return l
                },
                opera10StackLineParser: function() {
                    return h
                },
                opera11StackLineParser: function() {
                    return g
                },
                winjsStackLineParser: function() {
                    return f
                }
            });
            var r = n("648238");

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
                        if (e[2] && 0 === e[2].indexOf("eval")) {
                            let t = o.exec(e[2]);
                            t && (e[2] = t[1], e[3] = t[2], e[4] = t[3])
                        }
                        let [t, n] = v(e[1] || "?", e[2]);
                        return i(n, t, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
                    }
                }],
                u = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
                c = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                l = [50, t => {
                    let e = u.exec(t);
                    if (e) {
                        if (e[3] && e[3].indexOf(" > eval") > -1) {
                            let t = c.exec(e[3]);
                            t && (e[1] = e[1] || "eval", e[3] = t[1], e[4] = t[2], e[5] = "")
                        }
                        let t = e[3],
                            n = e[1] || "?";
                        return [n, t] = v(n, t), i(t, n, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
                    }
                }],
                d = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                f = [40, t => {
                    let e = d.exec(t);
                    return e ? i(e[2], e[1] || "?", +e[3], e[4] ? +e[4] : void 0) : void 0
                }],
                p = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
                h = [10, t => {
                    let e = p.exec(t);
                    return e ? i(e[2], e[3] || "?", +e[1]) : void 0
                }],
                _ = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
                g = [20, t => {
                    let e = _.exec(t);
                    return e ? i(e[5], e[3] || e[4] || "?", +e[1], +e[2]) : void 0
                }],
                m = [s, l, f],
                y = (0, r.createStackParser)(...m),
                v = (t, e) => {
                    let n = -1 !== t.indexOf("safari-extension"),
                        r = -1 !== t.indexOf("safari-web-extension");
                    return n || r ? [-1 !== t.indexOf("@") ? t.split("@")[0] : "?", n ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
                }
        },
        393746: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                makeFetchTransport: function() {
                    return o
                }
            });
            var r = n("91320"),
                i = n("648238"),
                a = n("56618");

            function o(t, e = (0, a.getNativeFetchImplementation)()) {
                let n = 0,
                    o = 0;
                return (0, r.createTransport)(t, function(r) {
                    let s = r.body.length;
                    n += s, o++;
                    let u = {
                        body: r.body,
                        method: "POST",
                        referrerPolicy: "origin",
                        headers: t.headers,
                        keepalive: n <= 6e4 && o < 15,
                        ...t.fetchOptions
                    };
                    try {
                        return e(t.url, u).then(t => (n -= s, o--, {
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
        490753: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                makeBrowserOfflineTransport: function() {
                    return u
                }
            });
            var r = n("91320"),
                i = n("648238");

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
                            var r, s, u;
                            let c = await (0, i.serializeEnvelope)(e, t.textEncoder);
                            await (r = n(), s = c, u = t.maxQueueSize || 30, r(t => o(t).then(e => {
                                if (!(e.length >= u)) return t.put(s, Math.max(...e, 0) + 1), a(t.transaction)
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

            function u(t) {
                var e;
                return e = (0, r.makeOfflineTransport)(t), t => e({
                    ...t,
                    createStore: s
                })
            }
        },
        56618: function(t, e, n) {
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
            var i = n("648238"),
                a = n("643487");

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
        184612: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                createUserFeedbackEnvelope: function() {
                    return i
                }
            });
            var r = n("648238");

            function i(t, {
                metadata: e,
                tunnel: n,
                dsn: i
            }) {
                let a = {
                        event_id: t.event_id,
                        sent_at: new Date().toISOString(),
                        ...e && e.sdk && {
                            sdk: {
                                name: e.sdk.name,
                                version: e.sdk.version
                            }
                        },
                        ...!!n && !!i && {
                            dsn: (0, r.dsnToString)(i)
                        }
                    },
                    o = function(t) {
                        return [{
                            type: "user_report"
                        }, t]
                    }(t);
                return (0, r.createEnvelope)(a, [o])
            }
        },
        507506: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getEnvelopeEndpointWithUrlEncodedAuth: function() {
                    return a
                },
                getReportDialogEndpoint: function() {
                    return o
                }
            });
            var r = n("648238");

            function i(t) {
                let e = t.protocol ? `${t.protocol}:` : "",
                    n = t.port ? `:${t.port}` : "";
                return `${e}//${t.host}${n}${t.path?`/${t.path}`:""}/api/`
            }

            function a(t, e = {}) {
                var n, a, o;
                let s = "string" == typeof e ? e : e.tunnel,
                    u = "string" != typeof e && e._metadata ? e._metadata.sdk : void 0;
                return s || `${n=t,`${i(n)}${n.projectId}/envelope/`}?${a=t,o=u,(0,r.urlEncode)({sentry_key:a.publicKey,sentry_version:"7",...o&&{sentry_client:`${o.name}/${o.version}`}})}`
            }

            function o(t, e) {
                let n = (0, r.makeDsn)(t);
                if (!n) return "";
                let a = `${i(n)}embed/error-page/`,
                    o = `dsn=${(0,r.dsnToString)(n)}`;
                for (let t in e)
                    if ("dsn" !== t) {
                        if ("user" === t) {
                            let t = e.user;
                            if (!t) continue;
                            t.name && (o += `&name=${encodeURIComponent(t.name)}`), t.email && (o += `&email=${encodeURIComponent(t.email)}`)
                        } else o += `&${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`
                    } return `${a}?${o}`
            }
        },
        861579: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BaseClient: function() {
                    return d
                }
            });
            var r = n("648238"),
                i = n("507506"),
                a = n("419767"),
                o = n("595208"),
                s = n("741900"),
                u = n("154405"),
                c = n("392405");
            let l = "Not capturing exception because it's already been captured.";
            class d {
                __init() {
                    this._integrations = {}
                }
                __init2() {
                    this._integrationsInitialized = !1
                }
                __init3() {
                    this._numProcessing = 0
                }
                __init4() {
                    this._outcomes = {}
                }
                __init5() {
                    this._hooks = {}
                }
                constructor(t) {
                    if (d.prototype.__init.call(this), d.prototype.__init2.call(this), d.prototype.__init3.call(this), d.prototype.__init4.call(this), d.prototype.__init5.call(this), this._options = t, t.dsn ? this._dsn = (0, r.makeDsn)(t.dsn) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("No DSN provided, client will not do anything."), this._dsn) {
                        let e = (0, i.getEnvelopeEndpointWithUrlEncodedAuth)(this._dsn, t);
                        this._transport = t.transport({
                            recordDroppedEvent: this.recordDroppedEvent.bind(this),
                            ...t.transportOptions,
                            url: e
                        })
                    }
                }
                captureException(t, e, n) {
                    if ((0, r.checkOrSetAlreadyCaught)(t)) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(l);
                        return
                    }
                    let i = e && e.event_id;
                    return this._process(this.eventFromException(t, e).then(t => this._captureEvent(t, e, n)).then(t => {
                        i = t
                    })), i
                }
                captureMessage(t, e, n, i) {
                    let a = n && n.event_id,
                        o = (0, r.isPrimitive)(t) ? this.eventFromMessage(String(t), e, n) : this.eventFromException(t, n);
                    return this._process(o.then(t => this._captureEvent(t, n, i)).then(t => {
                        a = t
                    })), a
                }
                captureEvent(t, e, n) {
                    if (e && e.originalException && (0, r.checkOrSetAlreadyCaught)(e.originalException)) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(l);
                        return
                    }
                    let i = e && e.event_id;
                    return this._process(this._captureEvent(t, e, n).then(t => {
                        i = t
                    })), i
                }
                captureSession(t) {
                    if (!this._isEnabled()) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("SDK not enabled, will not capture session.");
                        return
                    }
                    "string" != typeof t.release ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Discarded session because of missing or non-string release") : (this.sendSession(t), (0, s.updateSession)(t, {
                        init: !1
                    }))
                }
                getDsn() {
                    return this._dsn
                }
                getOptions() {
                    return this._options
                }
                getSdkMetadata() {
                    return this._options._metadata
                }
                getTransport() {
                    return this._transport
                }
                flush(t) {
                    let e = this._transport;
                    return e ? this._isClientDoneProcessing(t).then(n => e.flush(t).then(t => n && t)) : (0, r.resolvedSyncPromise)(!0)
                }
                close(t) {
                    return this.flush(t).then(t => (this.getOptions().enabled = !1, t))
                }
                setupIntegrations() {
                    this._isEnabled() && !this._integrationsInitialized && (this._integrations = (0, o.setupIntegrations)(this._options.integrations), this._integrationsInitialized = !0)
                }
                getIntegrationById(t) {
                    return this._integrations[t]
                }
                getIntegration(t) {
                    try {
                        return this._integrations[t.id] || null
                    } catch (e) {
                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Cannot retrieve integration ${t.id} from the current Client`), null
                    }
                }
                addIntegration(t) {
                    (0, o.setupIntegration)(t, this._integrations)
                }
                sendEvent(t, e = {}) {
                    if (this._dsn) {
                        let n = (0, a.createEventEnvelope)(t, this._dsn, this._options._metadata, this._options.tunnel);
                        for (let t of e.attachments || []) n = (0, r.addItemToEnvelope)(n, (0, r.createAttachmentEnvelopeItem)(t, this._options.transportOptions && this._options.transportOptions.textEncoder));
                        let i = this._sendEnvelope(n);
                        i && i.then(e => this.emit("afterSendEvent", t, e), null)
                    }
                }
                sendSession(t) {
                    if (this._dsn) {
                        let e = (0, a.createSessionEnvelope)(t, this._dsn, this._options._metadata, this._options.tunnel);
                        this._sendEnvelope(e)
                    }
                }
                recordDroppedEvent(t, e, n) {
                    if (this._options.sendClientReports) {
                        let n = `${t}:${e}`;
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`Adding outcome: "${n}"`), this._outcomes[n] = this._outcomes[n] + 1 || 1
                    }
                }
                on(t, e) {
                    !this._hooks[t] && (this._hooks[t] = []), this._hooks[t].push(e)
                }
                emit(t, ...e) {
                    this._hooks[t] && this._hooks[t].forEach(t => t(...e))
                }
                _updateSessionFromEvent(t, e) {
                    let n = !1,
                        r = !1,
                        i = e.exception && e.exception.values;
                    if (i)
                        for (let t of (r = !0, i)) {
                            let e = t.mechanism;
                            if (e && !1 === e.handled) {
                                n = !0;
                                break
                            }
                        }
                    let a = "ok" === t.status;
                    (a && 0 === t.errors || a && n) && ((0, s.updateSession)(t, {
                        ...n && {
                            status: "crashed"
                        },
                        errors: t.errors || Number(r || n)
                    }), this.captureSession(t))
                }
                _isClientDoneProcessing(t) {
                    return new r.SyncPromise(e => {
                        let n = 0,
                            r = setInterval(() => {
                                0 == this._numProcessing ? (clearInterval(r), e(!0)) : (n += 1, t && n >= t && (clearInterval(r), e(!1)))
                            }, 1)
                    })
                }
                _isEnabled() {
                    return !1 !== this.getOptions().enabled && void 0 !== this._dsn
                }
                _prepareEvent(t, e, n) {
                    let r = this.getOptions(),
                        i = Object.keys(this._integrations);
                    return !e.integrations && i.length > 0 && (e.integrations = i), (0, c.prepareEvent)(r, t, e, n).then(t => {
                        if (null === t) return t;
                        let {
                            propagationContext: e
                        } = t.sdkProcessingMetadata || {};
                        if (!(t.contexts && t.contexts.trace) && e) {
                            let {
                                traceId: r,
                                spanId: i,
                                parentSpanId: a,
                                dsc: o
                            } = e;
                            t.contexts = {
                                trace: {
                                    trace_id: r,
                                    span_id: i,
                                    parent_span_id: a
                                },
                                ...t.contexts
                            };
                            let s = o || (0, u.getDynamicSamplingContextFromClient)(r, this, n);
                            t.sdkProcessingMetadata = {
                                dynamicSamplingContext: s,
                                ...t.sdkProcessingMetadata
                            }
                        }
                        return t
                    })
                }
                _captureEvent(t, e = {}, n) {
                    return this._processEvent(t, e, n).then(t => t.event_id, t => {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && ("log" === t.logLevel ? r.logger.log(t.message) : r.logger.warn(t))
                    })
                }
                _processEvent(t, e, n) {
                    let i = this.getOptions(),
                        {
                            sampleRate: a
                        } = i;
                    if (!this._isEnabled()) return (0, r.rejectedSyncPromise)(new r.SentryError("SDK not enabled, will not capture event.", "log"));
                    let o = p(t),
                        s = f(t),
                        u = t.type || "error",
                        c = `before send for type \`${u}\``;
                    if (s && "number" == typeof a && Math.random() > a) return this.recordDroppedEvent("sample_rate", "error", t), (0, r.rejectedSyncPromise)(new r.SentryError(`Discarding event because it's not included in the random sample (sampling rate = ${a})`, "log"));
                    let l = "replay_event" === u ? "replay" : u;
                    return this._prepareEvent(t, e, n).then(n => {
                        if (null === n) throw this.recordDroppedEvent("event_processor", l, t), new r.SentryError("An event processor returned `null`, will not send event.", "log");
                        return e.data && !0 === e.data.__sentry__ ? n : function(t, e) {
                            let n = `${e} must return \`null\` or a valid event.`;
                            if ((0, r.isThenable)(t)) return t.then(t => {
                                if (!(0, r.isPlainObject)(t) && null !== t) throw new r.SentryError(n);
                                return t
                            }, t => {
                                throw new r.SentryError(`${e} rejected with ${t}`)
                            });
                            if (!(0, r.isPlainObject)(t) && null !== t) throw new r.SentryError(n);
                            return t
                        }(function(t, e, n) {
                            let {
                                beforeSend: r,
                                beforeSendTransaction: i
                            } = t;
                            return f(e) && r ? r(e, n) : p(e) && i ? i(e, n) : e
                        }(i, n, e), c)
                    }).then(i => {
                        if (null === i) throw this.recordDroppedEvent("before_send", l, t), new r.SentryError(`${c} returned \`null\`, will not send event.`, "log");
                        let a = n && n.getSession();
                        !o && a && this._updateSessionFromEvent(a, i);
                        let s = i.transaction_info;
                        return o && s && i.transaction !== t.transaction && (i.transaction_info = {
                            ...s,
                            source: "custom"
                        }), this.sendEvent(i, e), i
                    }).then(null, t => {
                        if (t instanceof r.SentryError) throw t;
                        throw this.captureException(t, {
                            data: {
                                __sentry__: !0
                            },
                            originalException: t
                        }), new r.SentryError(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${t}`)
                    })
                }
                _process(t) {
                    this._numProcessing++, t.then(t => (this._numProcessing--, t), t => (this._numProcessing--, t))
                }
                _sendEnvelope(t) {
                    if (this._transport && this._dsn) return this.emit("beforeEnvelope", t), this._transport.send(t).then(null, t => {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error("Error while sending event:", t)
                    });
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error("Transport disabled")
                }
                _clearOutcomes() {
                    let t = this._outcomes;
                    return this._outcomes = {}, Object.keys(t).map(e => {
                        let [n, r] = e.split(":");
                        return {
                            reason: n,
                            category: r,
                            quantity: t[e]
                        }
                    })
                }
            }

            function f(t) {
                return void 0 === t.type
            }

            function p(t) {
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
            let r = "production"
        },
        419767: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                createEventEnvelope: function() {
                    return a
                },
                createSessionEnvelope: function() {
                    return i
                }
            });
            var r = n("648238");

            function i(t, e, n, i) {
                let a = (0, r.getSdkMetadataForEnvelopeHeader)(n),
                    o = {
                        sent_at: new Date().toISOString(),
                        ...a && {
                            sdk: a
                        },
                        ...!!i && {
                            dsn: (0, r.dsnToString)(e)
                        }
                    },
                    s = "aggregates" in t ? [{
                        type: "sessions"
                    }, t] : [{
                        type: "session"
                    }, t.toJSON()];
                return (0, r.createEnvelope)(o, [s])
            }

            function a(t, e, n, i) {
                var a, o;
                let s = (0, r.getSdkMetadataForEnvelopeHeader)(n),
                    u = t.type && "replay_event" !== t.type ? t.type : "event";
                a = t, !(o = n && n.sdk) || (a.sdk = a.sdk || {}, a.sdk.name = a.sdk.name || o.name, a.sdk.version = a.sdk.version || o.version, a.sdk.integrations = [...a.sdk.integrations || [], ...o.integrations || []], a.sdk.packages = [...a.sdk.packages || [], ...o.packages || []]);
                let c = (0, r.createEventEnvelopeHeaders)(t, s, i, e);
                delete t.sdkProcessingMetadata;
                let l = [{
                    type: u
                }, t];
                return (0, r.createEnvelope)(c, [l])
            }
        },
        138122: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                addBreadcrumb: function() {
                    return u
                },
                captureEvent: function() {
                    return o
                },
                captureException: function() {
                    return i
                },
                captureMessage: function() {
                    return a
                },
                configureScope: function() {
                    return s
                },
                setContext: function() {
                    return c
                },
                setExtra: function() {
                    return d
                },
                setExtras: function() {
                    return l
                },
                setTag: function() {
                    return p
                },
                setTags: function() {
                    return f
                },
                setUser: function() {
                    return h
                },
                startTransaction: function() {
                    return g
                },
                withScope: function() {
                    return _
                }
            });
            var r = n("876122");

            function i(t, e) {
                return (0, r.getCurrentHub)().captureException(t, {
                    captureContext: e
                })
            }

            function a(t, e) {
                let n = "string" == typeof e ? e : void 0,
                    i = "string" != typeof e ? {
                        captureContext: e
                    } : void 0;
                return (0, r.getCurrentHub)().captureMessage(t, n, i)
            }

            function o(t, e) {
                return (0, r.getCurrentHub)().captureEvent(t, e)
            }

            function s(t) {
                (0, r.getCurrentHub)().configureScope(t)
            }

            function u(t) {
                (0, r.getCurrentHub)().addBreadcrumb(t)
            }

            function c(t, e) {
                (0, r.getCurrentHub)().setContext(t, e)
            }

            function l(t) {
                (0, r.getCurrentHub)().setExtras(t)
            }

            function d(t, e) {
                (0, r.getCurrentHub)().setExtra(t, e)
            }

            function f(t) {
                (0, r.getCurrentHub)().setTags(t)
            }

            function p(t, e) {
                (0, r.getCurrentHub)().setTag(t, e)
            }

            function h(t) {
                (0, r.getCurrentHub)().setUser(t)
            }

            function _(t) {
                (0, r.getCurrentHub)().withScope(t)
            }

            function g(t, e) {
                return (0, r.getCurrentHub)().startTransaction({
                    ...t
                }, e)
            }
        },
        876122: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Hub: function() {
                    return s
                },
                getCurrentHub: function() {
                    return l
                },
                getHubFromCarrier: function() {
                    return d
                },
                getMainCarrier: function() {
                    return u
                },
                makeMain: function() {
                    return c
                }
            });
            var r = n("648238"),
                i = n("28434"),
                a = n("703498"),
                o = n("741900");
            class s {
                constructor(t, e = new a.Scope, n = 4) {
                    this._version = n, this._stack = [{
                        scope: e
                    }], t && this.bindClient(t)
                }
                isOlderThan(t) {
                    return this._version < t
                }
                bindClient(t) {
                    this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations()
                }
                pushScope() {
                    let t = a.Scope.clone(this.getScope());
                    return this.getStack().push({
                        client: this.getClient(),
                        scope: t
                    }), t
                }
                popScope() {
                    return !(this.getStack().length <= 1) && !!this.getStack().pop()
                }
                withScope(t) {
                    let e = this.pushScope();
                    try {
                        t(e)
                    } finally {
                        this.popScope()
                    }
                }
                getClient() {
                    return this.getStackTop().client
                }
                getScope() {
                    return this.getStackTop().scope
                }
                getStack() {
                    return this._stack
                }
                getStackTop() {
                    return this._stack[this._stack.length - 1]
                }
                captureException(t, e) {
                    let n = this._lastEventId = e && e.event_id ? e.event_id : (0, r.uuid4)(),
                        i = Error("Sentry syntheticException");
                    return this._withClient((r, a) => {
                        r.captureException(t, {
                            originalException: t,
                            syntheticException: i,
                            ...e,
                            event_id: n
                        }, a)
                    }), n
                }
                captureMessage(t, e, n) {
                    let i = this._lastEventId = n && n.event_id ? n.event_id : (0, r.uuid4)(),
                        a = Error(t);
                    return this._withClient((r, o) => {
                        r.captureMessage(t, e, {
                            originalException: t,
                            syntheticException: a,
                            ...n,
                            event_id: i
                        }, o)
                    }), i
                }
                captureEvent(t, e) {
                    let n = e && e.event_id ? e.event_id : (0, r.uuid4)();
                    return !t.type && (this._lastEventId = n), this._withClient((r, i) => {
                        r.captureEvent(t, {
                            ...e,
                            event_id: n
                        }, i)
                    }), n
                }
                lastEventId() {
                    return this._lastEventId
                }
                addBreadcrumb(t, e) {
                    let {
                        scope: n,
                        client: i
                    } = this.getStackTop();
                    if (!i) return;
                    let {
                        beforeBreadcrumb: a = null,
                        maxBreadcrumbs: o = 100
                    } = i.getOptions && i.getOptions() || {};
                    if (o <= 0) return;
                    let s = {
                            timestamp: (0, r.dateTimestampInSeconds)(),
                            ...t
                        },
                        u = a ? (0, r.consoleSandbox)(() => a(s, e)) : s;
                    null !== u && (i.emit && i.emit("beforeAddBreadcrumb", u, e), n.addBreadcrumb(u, o))
                }
                setUser(t) {
                    this.getScope().setUser(t)
                }
                setTags(t) {
                    this.getScope().setTags(t)
                }
                setExtras(t) {
                    this.getScope().setExtras(t)
                }
                setTag(t, e) {
                    this.getScope().setTag(t, e)
                }
                setExtra(t, e) {
                    this.getScope().setExtra(t, e)
                }
                setContext(t, e) {
                    this.getScope().setContext(t, e)
                }
                configureScope(t) {
                    let {
                        scope: e,
                        client: n
                    } = this.getStackTop();
                    n && t(e)
                }
                run(t) {
                    let e = c(this);
                    try {
                        t(this)
                    } finally {
                        c(e)
                    }
                }
                getIntegration(t) {
                    let e = this.getClient();
                    if (!e) return null;
                    try {
                        return e.getIntegration(t)
                    } catch (e) {
                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Cannot retrieve integration ${t.id} from the current Hub`), null
                    }
                }
                startTransaction(t, e) {
                    let n = this._callExtensionMethod("startTransaction", t, e);
                    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && !n && console.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`), n
                }
                traceHeaders() {
                    return this._callExtensionMethod("traceHeaders")
                }
                captureSession(t = !1) {
                    if (t) return this.endSession();
                    this._sendSessionUpdate()
                }
                endSession() {
                    let t = this.getStackTop().scope,
                        e = t.getSession();
                    e && (0, o.closeSession)(e), this._sendSessionUpdate(), t.setSession()
                }
                startSession(t) {
                    let {
                        scope: e,
                        client: n
                    } = this.getStackTop(), {
                        release: a,
                        environment: s = i.DEFAULT_ENVIRONMENT
                    } = n && n.getOptions() || {}, {
                        userAgent: u
                    } = r.GLOBAL_OBJ.navigator || {}, c = (0, o.makeSession)({
                        release: a,
                        environment: s,
                        user: e.getUser(),
                        ...u && {
                            userAgent: u
                        },
                        ...t
                    }), l = e.getSession && e.getSession();
                    return l && "ok" === l.status && (0, o.updateSession)(l, {
                        status: "exited"
                    }), this.endSession(), e.setSession(c), c
                }
                shouldSendDefaultPii() {
                    let t = this.getClient(),
                        e = t && t.getOptions();
                    return !!(e && e.sendDefaultPii)
                }
                _sendSessionUpdate() {
                    let {
                        scope: t,
                        client: e
                    } = this.getStackTop(), n = t.getSession();
                    n && e && e.captureSession && e.captureSession(n)
                }
                _withClient(t) {
                    let {
                        scope: e,
                        client: n
                    } = this.getStackTop();
                    n && t(n, e)
                }
                _callExtensionMethod(t, ...e) {
                    let n = u().__SENTRY__;
                    if (n && n.extensions && "function" == typeof n.extensions[t]) return n.extensions[t].apply(this, e);
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Extension method ${t} couldn't be found, doing nothing.`)
                }
            }

            function u() {
                return r.GLOBAL_OBJ.__SENTRY__ = r.GLOBAL_OBJ.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                }, r.GLOBAL_OBJ
            }

            function c(t) {
                let e = u(),
                    n = d(e);
                return f(e, t), n
            }

            function l() {
                let t = u();
                if (t.__SENTRY__ && t.__SENTRY__.acs) {
                    let e = t.__SENTRY__.acs.getCurrentHub();
                    if (e) return e
                }
                return function(t = u()) {
                    return (! function(t) {
                        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
                    }(t) || d(t).isOlderThan(4)) && f(t, new s), d(t)
                }(t)
            }

            function d(t) {
                return (0, r.getGlobalSingleton)("hub", () => new s, t)
            }

            function f(t, e) {
                return !!t && ((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e, !0)
            }
        },
        91320: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BaseClient: function() {
                    return p.BaseClient
                },
                DEFAULT_ENVIRONMENT: function() {
                    return w.DEFAULT_ENVIRONMENT
                },
                FunctionToString: function() {
                    return k.FunctionToString
                },
                Hub: function() {
                    return l.Hub
                },
                InboundFilters: function() {
                    return x.InboundFilters
                },
                Integrations: function() {
                    return b
                },
                ModuleMetadata: function() {
                    return T.ModuleMetadata
                },
                SDK_VERSION: function() {
                    return y.SDK_VERSION
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
                    return _.createTransport
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
                    return v.getIntegrationsToSetup
                },
                getReportDialogEndpoint: function() {
                    return f.getReportDialogEndpoint
                },
                hasTracingEnabled: function() {
                    return S.hasTracingEnabled
                },
                initAndBind: function() {
                    return h.initAndBind
                },
                makeMain: function() {
                    return l.makeMain
                },
                makeMultiplexedTransport: function() {
                    return m.makeMultiplexedTransport
                },
                makeOfflineTransport: function() {
                    return g.makeOfflineTransport
                },
                prepareEvent: function() {
                    return E.prepareEvent
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
                p = n("861579"),
                h = n("110575"),
                _ = n("347421"),
                g = n("499833"),
                m = n("449701"),
                y = n("139782"),
                v = n("595208"),
                b = n("89837"),
                E = n("392405"),
                S = n("633401"),
                w = n("28434"),
                T = n("333878"),
                k = n("740054"),
                x = n("344106"),
                R = n("648238")
        },
        595208: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getIntegrationsToSetup: function() {
                    return s
                },
                setupIntegration: function() {
                    return c
                },
                setupIntegrations: function() {
                    return u
                }
            });
            var r = n("648238"),
                i = n("876122"),
                a = n("703498");
            let o = [];

            function s(t) {
                let e;
                let n = t.defaultIntegrations || [],
                    i = t.integrations;
                n.forEach(t => {
                    t.isDefaultInstance = !0
                });
                let a = function(t) {
                        let e = {};
                        return t.forEach(t => {
                            let {
                                name: n
                            } = t, r = e[n];
                            (!r || r.isDefaultInstance || !t.isDefaultInstance) && (e[n] = t)
                        }), Object.keys(e).map(t => e[t])
                    }(e = Array.isArray(i) ? [...n, ...i] : "function" == typeof i ? (0, r.arrayify)(i(n)) : n),
                    o = function(t, e) {
                        for (let n = 0; n < t.length; n++)
                            if (!0 === e(t[n])) return n;
                        return -1
                    }(a, t => "Debug" === t.name);
                if (-1 !== o) {
                    let [t] = a.splice(o, 1);
                    a.push(t)
                }
                return a
            }

            function u(t) {
                let e = {};
                return t.forEach(t => {
                    t && c(t, e)
                }), e
            }

            function c(t, e) {
                e[t.name] = t, -1 === o.indexOf(t.name) && (t.setupOnce(a.addGlobalEventProcessor, i.getCurrentHub), o.push(t.name), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`Integration installed: ${t.name}`))
            }
        },
        740054: function(t, e, n) {
            "use strict";
            let r;
            n.r(e), n.d(e, {
                FunctionToString: function() {
                    return a
                }
            });
            var i = n("648238");
            class a {
                constructor() {
                    a.prototype.__init.call(this)
                }
                static __initStatic() {
                    this.id = "FunctionToString"
                }
                __init() {
                    this.name = a.id
                }
                setupOnce() {
                    r = Function.prototype.toString;
                    try {
                        Function.prototype.toString = function(...t) {
                            let e = (0, i.getOriginalFunction)(this) || this;
                            return r.apply(e, t)
                        }
                    } catch (t) {}
                }
            }
            a.__initStatic()
        },
        344106: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                InboundFilters: function() {
                    return o
                }
            });
            var r = n("648238");
            let i = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
                a = [/^.*healthcheck.*$/, /^.*healthy.*$/, /^.*live.*$/, /^.*ready.*$/, /^.*heartbeat.*$/, /^.*\/health$/, /^.*\/healthz$/];
            class o {
                static __initStatic() {
                    this.id = "InboundFilters"
                }
                __init() {
                    this.name = o.id
                }
                constructor(t = {}) {
                    this._options = t, o.prototype.__init.call(this)
                }
                setupOnce(t, e) {
                    let n = t => {
                        let n = e();
                        if (n) {
                            let e = n.getIntegration(o);
                            if (e) {
                                let o = n.getClient(),
                                    u = o ? o.getOptions() : {};
                                return function(t, e) {
                                    return e.ignoreInternal && function(t) {
                                        try {
                                            return "SentryError" === t.exception.values[0].type
                                        } catch (t) {}
                                        return !1
                                    }(t) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Event dropped due to being internal Sentry Error.
Event: ${(0,r.getEventDescription)(t)}`), !0) : function(t, e) {
                                        return !t.type && !!e && !!e.length && (function(t) {
                                            if (t.message) return [t.message];
                                            if (t.exception) {
                                                let {
                                                    values: e
                                                } = t.exception;
                                                try {
                                                    let {
                                                        type: t = "",
                                                        value: n = ""
                                                    } = e && e[e.length - 1] || {};
                                                    return [`${n}`, `${t}: ${n}`]
                                                } catch (e) {
                                                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error(`Cannot extract message for event ${(0,r.getEventDescription)(t)}`)
                                                }
                                            }
                                            return []
                                        })(t).some(t => (0, r.stringMatchesSomePattern)(t, e))
                                    }(t, e.ignoreErrors) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0,r.getEventDescription)(t)}`), !0) : function(t, e) {
                                        if ("transaction" !== t.type || !e || !e.length) return !1;
                                        let n = t.transaction;
                                        return !!n && (0, r.stringMatchesSomePattern)(n, e)
                                    }(t, e.ignoreTransactions) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0,r.getEventDescription)(t)}`), !0) : function(t, e) {
                                        if (!e || !e.length) return !1;
                                        let n = s(t);
                                        return !!n && (0, r.stringMatchesSomePattern)(n, e)
                                    }(t, e.denyUrls) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0,r.getEventDescription)(t)}.
Url: ${s(t)}`), !0) : ! function(t, e) {
                                        if (!e || !e.length) return !0;
                                        let n = s(t);
                                        return !n || (0, r.stringMatchesSomePattern)(n, e)
                                    }(t, e.allowUrls) && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0,r.getEventDescription)(t)}.
Url: ${s(t)}`), !0)
                                }(t, function(t = {}, e = {}) {
                                    return {
                                        allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
                                        denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
                                        ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...t.disableErrorDefaults ? [] : i],
                                        ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || [], ...t.disableTransactionDefaults ? [] : a],
                                        ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
                                    }
                                }(e._options, u)) ? null : t
                            }
                        }
                        return t
                    };
                    n.id = this.name, t(n)
                }
            }
            o.__initStatic();

            function s(t) {
                try {
                    let e;
                    try {
                        e = t.exception.values[0].stacktrace.frames
                    } catch (t) {}
                    return e ? function(t = []) {
                        for (let e = t.length - 1; e >= 0; e--) {
                            let n = t[e];
                            if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
                        }
                        return null
                    }(e) : null
                } catch (e) {
                    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error(`Cannot extract url for event ${(0,r.getEventDescription)(t)}`), null
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
                    return a
                }
            });
            var r = n("648238"),
                i = n("274484");
            class a {
                constructor() {
                    a.prototype.__init.call(this)
                }
                static __initStatic() {
                    this.id = "ModuleMetadata"
                }
                __init() {
                    this.name = a.id
                }
                setupOnce(t, e) {
                    let n = e().getClient();
                    if (!n || "function" != typeof n.on) return;
                    n.on("beforeEnvelope", t => {
                        (0, r.forEachEnvelopeItem)(t, (t, e) => {
                            if ("event" === e) {
                                let e = Array.isArray(t) ? t[1] : void 0;
                                e && ((0, i.stripMetadataFromStackFrames)(e), t[1] = e)
                            }
                        })
                    });
                    let a = n.getOptions().stackParser;
                    t(t => ((0, i.addMetadataToStackFrames)(a, t), t))
                }
            }
            a.__initStatic()
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
            });
            var r = n("648238");
            let i = new Map,
                a = new Set;

            function o(t, e) {
                try {
                    e.exception.values.forEach(e => {
                        if (e.stacktrace)
                            for (let s of e.stacktrace.frames || []) {
                                var n, o;
                                if (!s.filename) continue;
                                let e = (n = t, o = s.filename, ! function(t) {
                                    if (r.GLOBAL_OBJ._sentryModuleMetadata)
                                        for (let e of Object.keys(r.GLOBAL_OBJ._sentryModuleMetadata)) {
                                            let n = r.GLOBAL_OBJ._sentryModuleMetadata[e];
                                            if (!a.has(e)) {
                                                for (let r of (a.add(e), t(e).reverse()))
                                                    if (r.filename) {
                                                        i.set(r.filename, n);
                                                        break
                                                    }
                                            }
                                        }
                                }(n), i.get(o));
                                e && (s.module_metadata = e)
                            }
                    })
                } catch (t) {}
            }

            function s(t) {
                try {
                    t.exception.values.forEach(t => {
                        if (t.stacktrace)
                            for (let e of t.stacktrace.frames || []) delete e.module_metadata
                    })
                } catch (t) {}
            }
        },
        703498: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Scope: function() {
                    return a
                },
                addGlobalEventProcessor: function() {
                    return s
                }
            });
            var r = n("648238"),
                i = n("741900");
            class a {
                constructor() {
                    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = u()
                }
                static clone(t) {
                    let e = new a;
                    return t && (e._breadcrumbs = [...t._breadcrumbs], e._tags = {
                        ...t._tags
                    }, e._extra = {
                        ...t._extra
                    }, e._contexts = {
                        ...t._contexts
                    }, e._user = t._user, e._level = t._level, e._span = t._span, e._session = t._session, e._transactionName = t._transactionName, e._fingerprint = t._fingerprint, e._eventProcessors = [...t._eventProcessors], e._requestSession = t._requestSession, e._attachments = [...t._attachments], e._sdkProcessingMetadata = {
                        ...t._sdkProcessingMetadata
                    }, e._propagationContext = {
                        ...t._propagationContext
                    }), e
                }
                addScopeListener(t) {
                    this._scopeListeners.push(t)
                }
                addEventProcessor(t) {
                    return this._eventProcessors.push(t), this
                }
                setUser(t) {
                    return this._user = t || {}, this._session && (0, i.updateSession)(this._session, {
                        user: t
                    }), this._notifyScopeListeners(), this
                }
                getUser() {
                    return this._user
                }
                getRequestSession() {
                    return this._requestSession
                }
                setRequestSession(t) {
                    return this._requestSession = t, this
                }
                setTags(t) {
                    return this._tags = {
                        ...this._tags,
                        ...t
                    }, this._notifyScopeListeners(), this
                }
                setTag(t, e) {
                    return this._tags = {
                        ...this._tags,
                        [t]: e
                    }, this._notifyScopeListeners(), this
                }
                setExtras(t) {
                    return this._extra = {
                        ...this._extra,
                        ...t
                    }, this._notifyScopeListeners(), this
                }
                setExtra(t, e) {
                    return this._extra = {
                        ...this._extra,
                        [t]: e
                    }, this._notifyScopeListeners(), this
                }
                setFingerprint(t) {
                    return this._fingerprint = t, this._notifyScopeListeners(), this
                }
                setLevel(t) {
                    return this._level = t, this._notifyScopeListeners(), this
                }
                setTransactionName(t) {
                    return this._transactionName = t, this._notifyScopeListeners(), this
                }
                setContext(t, e) {
                    return null === e ? delete this._contexts[t] : this._contexts[t] = e, this._notifyScopeListeners(), this
                }
                setSpan(t) {
                    return this._span = t, this._notifyScopeListeners(), this
                }
                getSpan() {
                    return this._span
                }
                getTransaction() {
                    let t = this.getSpan();
                    return t && t.transaction
                }
                setSession(t) {
                    return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
                }
                getSession() {
                    return this._session
                }
                update(t) {
                    if (!t) return this;
                    if ("function" == typeof t) {
                        let e = t(this);
                        return e instanceof a ? e : this
                    }
                    return t instanceof a ? (this._tags = {
                        ...this._tags,
                        ...t._tags
                    }, this._extra = {
                        ...this._extra,
                        ...t._extra
                    }, this._contexts = {
                        ...this._contexts,
                        ...t._contexts
                    }, t._user && Object.keys(t._user).length && (this._user = t._user), t._level && (this._level = t._level), t._fingerprint && (this._fingerprint = t._fingerprint), t._requestSession && (this._requestSession = t._requestSession), t._propagationContext && (this._propagationContext = t._propagationContext)) : (0, r.isPlainObject)(t) && (this._tags = {
                        ...this._tags,
                        ...t.tags
                    }, this._extra = {
                        ...this._extra,
                        ...t.extra
                    }, this._contexts = {
                        ...this._contexts,
                        ...t.contexts
                    }, t.user && (this._user = t.user), t.level && (this._level = t.level), t.fingerprint && (this._fingerprint = t.fingerprint), t.requestSession && (this._requestSession = t.requestSession), t.propagationContext && (this._propagationContext = t.propagationContext)), this
                }
                clear() {
                    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = u(), this
                }
                addBreadcrumb(t, e) {
                    let n = "number" == typeof e ? e : 100;
                    if (n <= 0) return this;
                    let i = {
                        timestamp: (0, r.dateTimestampInSeconds)(),
                        ...t
                    };
                    return this._breadcrumbs = [...this._breadcrumbs, i].slice(-n), this._notifyScopeListeners(), this
                }
                getLastBreadcrumb() {
                    return this._breadcrumbs[this._breadcrumbs.length - 1]
                }
                clearBreadcrumbs() {
                    return this._breadcrumbs = [], this._notifyScopeListeners(), this
                }
                addAttachment(t) {
                    return this._attachments.push(t), this
                }
                getAttachments() {
                    return this._attachments
                }
                clearAttachments() {
                    return this._attachments = [], this
                }
                applyToEvent(t, e = {}) {
                    if (this._extra && Object.keys(this._extra).length && (t.extra = {
                            ...this._extra,
                            ...t.extra
                        }), this._tags && Object.keys(this._tags).length && (t.tags = {
                            ...this._tags,
                            ...t.tags
                        }), this._user && Object.keys(this._user).length && (t.user = {
                            ...this._user,
                            ...t.user
                        }), this._contexts && Object.keys(this._contexts).length && (t.contexts = {
                            ...this._contexts,
                            ...t.contexts
                        }), this._level && (t.level = this._level), this._transactionName && (t.transaction = this._transactionName), this._span) {
                        t.contexts = {
                            trace: this._span.getTraceContext(),
                            ...t.contexts
                        };
                        let e = this._span.transaction;
                        if (e) {
                            t.sdkProcessingMetadata = {
                                dynamicSamplingContext: e.getDynamicSamplingContext(),
                                ...t.sdkProcessingMetadata
                            };
                            let n = e.name;
                            n && (t.tags = {
                                transaction: n,
                                ...t.tags
                            })
                        }
                    }
                    return this._applyFingerprint(t), t.breadcrumbs = [...t.breadcrumbs || [], ...this._breadcrumbs], t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, t.sdkProcessingMetadata = {
                        ...t.sdkProcessingMetadata,
                        ...this._sdkProcessingMetadata,
                        propagationContext: this._propagationContext
                    }, this._notifyEventProcessors([...o(), ...this._eventProcessors], t, e)
                }
                setSDKProcessingMetadata(t) {
                    return this._sdkProcessingMetadata = {
                        ...this._sdkProcessingMetadata,
                        ...t
                    }, this
                }
                setPropagationContext(t) {
                    return this._propagationContext = t, this
                }
                getPropagationContext() {
                    return this._propagationContext
                }
                _notifyEventProcessors(t, e, n, i = 0) {
                    return new r.SyncPromise((a, o) => {
                        let s = t[i];
                        if (null === e || "function" != typeof s) a(e);
                        else {
                            let u = s({
                                ...e
                            }, n);
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.id && null === u && r.logger.log(`Event processor "${s.id}" dropped event`), (0, r.isThenable)(u) ? u.then(e => this._notifyEventProcessors(t, e, n, i + 1).then(a)).then(null, o) : this._notifyEventProcessors(t, u, n, i + 1).then(a).then(null, o)
                        }
                    })
                }
                _notifyScopeListeners() {
                    !this._notifyingListeners && (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
                        t(this)
                    }), this._notifyingListeners = !1)
                }
                _applyFingerprint(t) {
                    t.fingerprint = t.fingerprint ? (0, r.arrayify)(t.fingerprint) : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
                }
            }

            function o() {
                return (0, r.getGlobalSingleton)("globalEventProcessors", () => [])
            }

            function s(t) {
                o().push(t)
            }

            function u() {
                return {
                    traceId: (0, r.uuid4)(),
                    spanId: (0, r.uuid4)().substring(16),
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
                let n = (0, i.getCurrentHub)();
                n.getScope().update(e.initialScope);
                let a = new t(e);
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
            });
            var r = n("648238");

            function i(t) {
                let e = (0, r.timestampInSeconds)(),
                    n = {
                        sid: (0, r.uuid4)(),
                        init: !0,
                        timestamp: e,
                        started: e,
                        duration: 0,
                        status: "ok",
                        errors: 0,
                        ignoreDuration: !1,
                        toJSON: () => (function(t) {
                            return (0, r.dropUndefinedKeys)({
                                sid: `${t.sid}`,
                                init: t.init,
                                started: new Date(1e3 * t.started).toISOString(),
                                timestamp: new Date(1e3 * t.timestamp).toISOString(),
                                status: t.status,
                                errors: t.errors,
                                did: "number" == typeof t.did || "string" == typeof t.did ? `${t.did}` : void 0,
                                duration: t.duration,
                                attrs: {
                                    release: t.release,
                                    environment: t.environment,
                                    ip_address: t.ipAddress,
                                    user_agent: t.userAgent
                                }
                            })
                        })(n)
                    };
                return t && a(n, t), n
            }

            function a(t, e = {}) {
                if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || (0, r.timestampInSeconds)(), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0, r.uuid4)()), void 0 !== e.init && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), "number" == typeof e.started && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
                else if ("number" == typeof e.duration) t.duration = e.duration;
                else {
                    let e = t.timestamp - t.started;
                    t.duration = e >= 0 ? e : 0
                }
                e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), "number" == typeof e.errors && (t.errors = e.errors), e.status && (t.status = e.status)
            }

            function o(t, e) {
                let n = {};
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
                let a = e.getOptions(),
                    {
                        publicKey: o
                    } = e.getDsn() || {},
                    {
                        segment: s
                    } = n && n.getUser() || {},
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
            });
            var r = n("648238"),
                i = n("147816");
            let a = !1;

            function o() {
                !a && (a = !0, (0, r.addInstrumentationHandler)("error", s), (0, r.addInstrumentationHandler)("unhandledrejection", s))
            }

            function s() {
                let t = (0, i.getActiveTransaction)();
                if (t) {
                    let e = "internal_error";
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] Transaction: ${e} -> Global error occured`), t.setStatus(e)
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
                    return f
                }
            });
            var r = n("648238"),
                i = n("876122"),
                a = n("633401"),
                o = n("750513"),
                s = n("376097"),
                u = n("912033");

            function c() {
                let t = this.getScope().getSpan();
                return t ? {
                    "sentry-trace": t.toTraceparent()
                } : {}
            }

            function l(t, e, n) {
                let i;
                return (0, a.hasTracingEnabled)(e) ? void 0 !== t.sampled ? (t.setMetadata({
                    sampleRate: Number(t.sampled)
                }), t) : ("function" == typeof e.tracesSampler ? (i = e.tracesSampler(n), t.setMetadata({
                    sampleRate: Number(i)
                })) : void 0 !== n.parentSampled ? i = n.parentSampled : void 0 !== e.tracesSampleRate ? (i = e.tracesSampleRate, t.setMetadata({
                    sampleRate: Number(i)
                })) : (i = 1, t.setMetadata({
                    sampleRate: i
                })), ! function(t) {
                    return (0, r.isNaN)(t) || !("number" == typeof t || "boolean" == typeof t) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`), !1) : !(t < 0) && !(t > 1) || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${t}.`), !1)
                }(i)) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("[Tracing] Discarding transaction because of invalid sample rate."), t.sampled = !1, t) : i ? (t.sampled = Math.random() < i, t.sampled) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] starting ${t.op} transaction - ${t.name}`), t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(i)})`), t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] Discarding transaction because ${"function"==typeof e.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), t.sampled = !1, t) : (t.sampled = !1, t)
            }

            function d(t, e) {
                let n = this.getClient(),
                    i = n && n.getOptions() || {},
                    a = i.instrumenter || "sentry",
                    o = t.instrumenter || "sentry";
                a !== o && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error(`A transaction was started with instrumenter=\`${o}\`, but the SDK is configured with the \`${a}\` instrumenter.
The transaction will not be sampled. Please use the ${a} instrumentation to start transactions.`), t.sampled = !1);
                let s = new u.Transaction(t, this);
                return (s = l(s, i, {
                    parentSampled: t.parentSampled,
                    transactionContext: t,
                    ...e
                })).sampled && s.initSpanRecorder(i._experiments && i._experiments.maxSpans), n && n.emit && n.emit("startTransaction", s), s
            }

            function f(t, e, n, r, i, a, o) {
                let u = t.getClient(),
                    c = u && u.getOptions() || {},
                    d = new s.IdleTransaction(e, t, n, r, o, i);
                return (d = l(d, c, {
                    parentSampled: e.parentSampled,
                    transactionContext: e,
                    ...a
                })).sampled && d.initSpanRecorder(c._experiments && c._experiments.maxSpans), u && u.emit && u.emit("startTransaction", d), d
            }

            function p() {
                let t = (0, i.getMainCarrier)();
                t.__SENTRY__ && (t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}, !t.__SENTRY__.extensions.startTransaction && (t.__SENTRY__.extensions.startTransaction = d), !t.__SENTRY__.extensions.traceHeaders && (t.__SENTRY__.extensions.traceHeaders = c), (0, o.registerErrorInstrumentation)())
            }
        },
        376097: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                IdleTransaction: function() {
                    return c
                },
                TRACING_DEFAULTS: function() {
                    return o
                }
            });
            var r = n("648238"),
                i = n("48950"),
                a = n("912033");
            let o = {
                    idleTimeout: 1e3,
                    finalTimeout: 3e4,
                    heartbeatInterval: 5e3
                },
                s = ["heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled"];
            class u extends i.SpanRecorder {
                constructor(t, e, n, r) {
                    super(r), this._pushActivity = t, this._popActivity = e, this.transactionSpanId = n
                }
                add(t) {
                    t.spanId !== this.transactionSpanId && (t.finish = e => {
                        t.endTimestamp = "number" == typeof e ? e : (0, r.timestampInSeconds)(), this._popActivity(t.spanId)
                    }, void 0 === t.endTimestamp && this._pushActivity(t.spanId)), super.add(t)
                }
            }
            class c extends a.Transaction {
                __init() {
                    this.activities = {}
                }
                __init2() {
                    this._heartbeatCounter = 0
                }
                __init3() {
                    this._finished = !1
                }
                __init4() {
                    this._idleTimeoutCanceledPermanently = !1
                }
                __init5() {
                    this._beforeFinishCallbacks = []
                }
                __init6() {
                    this._finishReason = "externalFinish"
                }
                constructor(t, e, n = o.idleTimeout, i = o.finalTimeout, a = o.heartbeatInterval, s = !1) {
                    super(t, e), this._idleHub = e, this._idleTimeout = n, this._finalTimeout = i, this._heartbeatInterval = a, this._onScope = s, c.prototype.__init.call(this), c.prototype.__init2.call(this), c.prototype.__init3.call(this), c.prototype.__init4.call(this), c.prototype.__init5.call(this), c.prototype.__init6.call(this), s && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`), e.configureScope(t => t.setSpan(this))), this._restartIdleTimeout(), setTimeout(() => {
                        !this._finished && (this.setStatus("deadline_exceeded"), this._finishReason = "finalTimeout", this.finish())
                    }, this._finalTimeout)
                }
                finish(t = (0, r.timestampInSeconds)()) {
                    if (this._finished = !0, this.activities = {}, "ui.action.click" === this.op && this.setTag("finishReason", this._finishReason), this.spanRecorder) {
                        for (let e of (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] finishing IdleTransaction", new Date(1e3 * t).toISOString(), this.op), this._beforeFinishCallbacks)) e(this, t);
                        this.spanRecorder.spans = this.spanRecorder.spans.filter(e => {
                            if (e.spanId === this.spanId) return !0;
                            !e.endTimestamp && (e.endTimestamp = t, e.setStatus("cancelled"), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(e, void 0, 2)));
                            let n = e.startTimestamp < t;
                            return !n && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] discarding Span since it happened after Transaction was finished", JSON.stringify(e, void 0, 2)), n
                        }), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] flushing IdleTransaction")
                    } else("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] No active IdleTransaction");
                    if (this._onScope) {
                        let t = this._idleHub.getScope();
                        t.getTransaction() === this && t.setSpan(void 0)
                    }
                    return super.finish(t)
                }
                registerBeforeFinishCallback(t) {
                    this._beforeFinishCallbacks.push(t)
                }
                initSpanRecorder(t) {
                    !this.spanRecorder && (this.spanRecorder = new u(t => {
                        !this._finished && this._pushActivity(t)
                    }, t => {
                        !this._finished && this._popActivity(t)
                    }, this.spanId, t), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("Starting heartbeat"), this._pingHeartbeat()), this.spanRecorder.add(this)
                }
                cancelIdleTimeout(t, {
                    restartOnChildSpanChange: e
                } = {
                    restartOnChildSpanChange: !0
                }) {
                    this._idleTimeoutCanceledPermanently = !1 === e, this._idleTimeoutID && (clearTimeout(this._idleTimeoutID), this._idleTimeoutID = void 0, 0 === Object.keys(this.activities).length && this._idleTimeoutCanceledPermanently && (this._finishReason = "cancelled", this.finish(t)))
                }
                setFinishReason(t) {
                    this._finishReason = t
                }
                _restartIdleTimeout(t) {
                    this.cancelIdleTimeout(), this._idleTimeoutID = setTimeout(() => {
                        !this._finished && 0 === Object.keys(this.activities).length && (this._finishReason = "idleTimeout", this.finish(t))
                    }, this._idleTimeout)
                }
                _pushActivity(t) {
                    this.cancelIdleTimeout(void 0, {
                        restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently
                    }), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] pushActivity: ${t}`), this.activities[t] = !0, ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] new activities count", Object.keys(this.activities).length)
                }
                _popActivity(t) {
                    if (this.activities[t] && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] popActivity ${t}`), delete this.activities[t], ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] new activities count", Object.keys(this.activities).length)), 0 === Object.keys(this.activities).length) {
                        let t = (0, r.timestampInSeconds)();
                        this._idleTimeoutCanceledPermanently ? (this._finishReason = "cancelled", this.finish(t)) : this._restartIdleTimeout(t + this._idleTimeout / 1e3)
                    }
                }
                _beat() {
                    if (this._finished) return;
                    let t = Object.keys(this.activities).join("");
                    t === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1, this._prevHeartbeatString = t, this._heartbeatCounter >= 3 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] Transaction finished because of no change for 3 heart beats"), this.setStatus("deadline_exceeded"), this._finishReason = "heartbeatFailed", this.finish()) : this._pingHeartbeat()
                }
                _pingHeartbeat() {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`), setTimeout(() => {
                        this._beat()
                    }, this._heartbeatInterval)
                }
            }
        },
        48950: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Span: function() {
                    return a
                },
                SpanRecorder: function() {
                    return i
                },
                spanStatusfromHttpCode: function() {
                    return o
                }
            });
            var r = n("648238");
            class i {
                __init() {
                    this.spans = []
                }
                constructor(t = 1e3) {
                    i.prototype.__init.call(this), this._maxlen = t
                }
                add(t) {
                    this.spans.length > this._maxlen ? t.spanRecorder = void 0 : this.spans.push(t)
                }
            }
            class a {
                __init2() {
                    this.traceId = (0, r.uuid4)()
                }
                __init3() {
                    this.spanId = (0, r.uuid4)().substring(16)
                }
                __init4() {
                    this.startTimestamp = (0, r.timestampInSeconds)()
                }
                __init5() {
                    this.tags = {}
                }
                __init6() {
                    this.data = {}
                }
                __init7() {
                    this.instrumenter = "sentry"
                }
                constructor(t) {
                    if (a.prototype.__init2.call(this), a.prototype.__init3.call(this), a.prototype.__init4.call(this), a.prototype.__init5.call(this), a.prototype.__init6.call(this), a.prototype.__init7.call(this), !t) return this;
                    t.traceId && (this.traceId = t.traceId), t.spanId && (this.spanId = t.spanId), t.parentSpanId && (this.parentSpanId = t.parentSpanId), "sampled" in t && (this.sampled = t.sampled), t.op && (this.op = t.op), t.description && (this.description = t.description), t.data && (this.data = t.data), t.tags && (this.tags = t.tags), t.status && (this.status = t.status), t.startTimestamp && (this.startTimestamp = t.startTimestamp), t.endTimestamp && (this.endTimestamp = t.endTimestamp), t.instrumenter && (this.instrumenter = t.instrumenter)
                }
                startChild(t) {
                    let e = new a({
                        ...t,
                        parentSpanId: this.spanId,
                        sampled: this.sampled,
                        traceId: this.traceId
                    });
                    if (e.spanRecorder = this.spanRecorder, e.spanRecorder && e.spanRecorder.add(e), e.transaction = this.transaction, ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.transaction) {
                        let n = t && t.op || "< unknown op >",
                            i = e.transaction.name || "< unknown name >",
                            a = e.transaction.spanId,
                            o = `[Tracing] Starting '${n}' span on transaction '${i}' (${a}).`;
                        e.transaction.metadata.spanMetadata[e.spanId] = {
                            logMessage: o
                        }, r.logger.log(o)
                    }
                    return e
                }
                setTag(t, e) {
                    return this.tags = {
                        ...this.tags,
                        [t]: e
                    }, this
                }
                setData(t, e) {
                    return this.data = {
                        ...this.data,
                        [t]: e
                    }, this
                }
                setStatus(t) {
                    return this.status = t, this
                }
                setHttpStatus(t) {
                    this.setTag("http.status_code", String(t)), this.setData("http.response.status_code", t);
                    let e = o(t);
                    return "unknown_error" !== e && this.setStatus(e), this
                }
                isSuccess() {
                    return "ok" === this.status
                }
                finish(t) {
                    if (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this.transaction && this.transaction.spanId !== this.spanId) {
                        let {
                            logMessage: t
                        } = this.transaction.metadata.spanMetadata[this.spanId];
                        t && r.logger.log(t.replace("Starting", "Finishing"))
                    }
                    this.endTimestamp = "number" == typeof t ? t : (0, r.timestampInSeconds)()
                }
                toTraceparent() {
                    return (0, r.generateSentryTraceHeader)(this.traceId, this.spanId, this.sampled)
                }
                toContext() {
                    return (0, r.dropUndefinedKeys)({
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
                updateWithContext(t) {
                    return this.data = t.data || {}, this.description = t.description, this.endTimestamp = t.endTimestamp, this.op = t.op, this.parentSpanId = t.parentSpanId, this.sampled = t.sampled, this.spanId = t.spanId || this.spanId, this.startTimestamp = t.startTimestamp || this.startTimestamp, this.status = t.status, this.tags = t.tags || {}, this.traceId = t.traceId || this.traceId, this
                }
                getTraceContext() {
                    return (0, r.dropUndefinedKeys)({
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
                toJSON() {
                    return (0, r.dropUndefinedKeys)({
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
            }

            function o(t) {
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
                    return o
                }
            });
            var r = n("648238"),
                i = n("876122"),
                a = n("633401");

            function o(t, e, n = () => {}) {
                let o;
                let s = {
                    ...t
                };
                void 0 !== s.name && void 0 === s.description && (s.description = s.name);
                let u = (0, i.getCurrentHub)(),
                    c = u.getScope(),
                    l = c.getSpan(),
                    d = function() {
                        if ((0, a.hasTracingEnabled)()) return l ? l.startChild(s) : u.startTransaction(s)
                    }();

                function f() {
                    d && d.finish(), u.getScope().setSpan(l)
                }
                c.setSpan(d);
                try {
                    o = e(d)
                } catch (t) {
                    throw d && d.setStatus("internal_error"), n(t), f(), t
                }
                return (0, r.isThenable)(o) ? Promise.resolve(o).then(() => {
                    f()
                }, t => {
                    d && d.setStatus("internal_error"), n(t), f()
                }) : f(), o
            }
        },
        912033: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Transaction: function() {
                    return s
                }
            });
            var r = n("648238"),
                i = n("876122"),
                a = n("154405"),
                o = n("48950");
            class s extends o.Span {
                __init() {
                    this._measurements = {}
                }
                __init2() {
                    this._contexts = {}
                }
                __init3() {
                    this._frozenDynamicSamplingContext = void 0
                }
                constructor(t, e) {
                    super(t), s.prototype.__init.call(this), s.prototype.__init2.call(this), s.prototype.__init3.call(this), this._hub = e || (0, i.getCurrentHub)(), this._name = t.name || "", this.metadata = {
                        source: "custom",
                        ...t.metadata,
                        spanMetadata: {}
                    }, this._trimEnd = t.trimEnd, this.transaction = this;
                    let n = this.metadata.dynamicSamplingContext;
                    n && (this._frozenDynamicSamplingContext = {
                        ...n
                    })
                }
                get name() {
                    return this._name
                }
                set name(t) {
                    this.setName(t)
                }
                setName(t, e = "custom") {
                    this._name = t, this.metadata.source = e
                }
                initSpanRecorder(t = 1e3) {
                    !this.spanRecorder && (this.spanRecorder = new o.SpanRecorder(t)), this.spanRecorder.add(this)
                }
                setContext(t, e) {
                    null === e ? delete this._contexts[t] : this._contexts[t] = e
                }
                setMeasurement(t, e, n = "") {
                    this._measurements[t] = {
                        value: e,
                        unit: n
                    }
                }
                setMetadata(t) {
                    this.metadata = {
                        ...this.metadata,
                        ...t
                    }
                }
                finish(t) {
                    if (void 0 !== this.endTimestamp) return;
                    !this.name && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this.name = "<unlabeled transaction>"), super.finish(t);
                    let e = this._hub.getClient();
                    if (e && e.emit && e.emit("finishTransaction", this), !0 !== this.sampled) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."), e && e.recordDroppedEvent("sample_rate", "transaction");
                        return
                    }
                    let n = this.spanRecorder ? this.spanRecorder.spans.filter(t => t !== this && t.endTimestamp) : [];
                    this._trimEnd && n.length > 0 && (this.endTimestamp = n.reduce((t, e) => t.endTimestamp && e.endTimestamp ? t.endTimestamp > e.endTimestamp ? t : e : t).endTimestamp);
                    let i = this.metadata,
                        a = {
                            contexts: {
                                ...this._contexts,
                                trace: this.getTraceContext()
                            },
                            spans: n,
                            start_timestamp: this.startTimestamp,
                            tags: this.tags,
                            timestamp: this.endTimestamp,
                            transaction: this.name,
                            type: "transaction",
                            sdkProcessingMetadata: {
                                ...i,
                                dynamicSamplingContext: this.getDynamicSamplingContext()
                            },
                            ...i.source && {
                                transaction_info: {
                                    source: i.source
                                }
                            }
                        };
                    return Object.keys(this._measurements).length > 0 && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)), a.measurements = this._measurements), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`), this._hub.captureEvent(a)
                }
                toContext() {
                    let t = super.toContext();
                    return (0, r.dropUndefinedKeys)({
                        ...t,
                        name: this.name,
                        trimEnd: this._trimEnd
                    })
                }
                updateWithContext(t) {
                    return super.updateWithContext(t), this.name = t.name || "", this._trimEnd = t.trimEnd, this
                }
                getDynamicSamplingContext() {
                    if (this._frozenDynamicSamplingContext) return this._frozenDynamicSamplingContext;
                    let t = this._hub || (0, i.getCurrentHub)(),
                        e = t.getClient();
                    if (!e) return {};
                    let n = t.getScope(),
                        r = (0, a.getDynamicSamplingContextFromClient)(this.traceId, e, n),
                        o = this.metadata.sampleRate;
                    void 0 !== o && (r.sample_rate = `${o}`);
                    let s = this.metadata.source;
                    return s && "url" !== s && (r.transaction = this.name), void 0 !== this.sampled && (r.sampled = String(this.sampled)), r
                }
                setHub(t) {
                    this._hub = t
                }
            }
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
            });
            var r = n("648238");

            function i(t, e, n = (0, r.makePromiseBuffer)(t.bufferSize || 30)) {
                let i = {};

                function o(o) {
                    let s = [];
                    if ((0, r.forEachEnvelopeItem)(o, (e, n) => {
                            let o = (0, r.envelopeItemTypeToDataCategory)(n);
                            if ((0, r.isRateLimited)(i, o)) {
                                let r = a(e, n);
                                t.recordDroppedEvent("ratelimit_backoff", o, r)
                            } else s.push(e)
                        }), 0 === s.length) return (0, r.resolvedSyncPromise)();
                    let u = (0, r.createEnvelope)(o[0], s),
                        c = e => {
                            (0, r.forEachEnvelopeItem)(u, (n, i) => {
                                let o = a(n, i);
                                t.recordDroppedEvent(e, (0, r.envelopeItemTypeToDataCategory)(i), o)
                            })
                        };
                    return n.add(() => e({
                        body: (0, r.serializeEnvelope)(u, t.textEncoder)
                    }).then(t => (void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Sentry responded with status code ${t.statusCode} to sent event.`), i = (0, r.updateRateLimits)(i, t), t), t => {
                        throw c("network_error"), t
                    })).then(t => t, t => {
                        if (t instanceof r.SentryError) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error("Skipped sending event because buffer is full."), c("queue_overflow"), (0, r.resolvedSyncPromise)();
                        throw t
                    })
                }
                return o.__sentry__baseTransport__ = !0, {
                    send: o,
                    flush: t => n.drain(t)
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
                    return o
                }
            });
            var r = n("648238"),
                i = n("507506");

            function a(t, e) {
                let n;
                return (0, r.forEachEnvelopeItem)(t, (t, r) => (e.includes(r) && (n = Array.isArray(t) ? t[1] : void 0), !!n)), n
            }

            function o(t, e) {
                return n => {
                    let o = t(n),
                        s = {};

                    function u(e, o) {
                        let u = o ? `${e}:${o}` : e;
                        if (!s[u]) {
                            var c, l;
                            let d = (0, r.dsnFromString)(e);
                            if (!d) return;
                            let f = (0, i.getEnvelopeEndpointWithUrlEncodedAuth)(d);
                            s[u] = o ? (c = t, l = o, t => {
                                let e = c(t);
                                return {
                                    send: async t => {
                                        let n = a(t, ["event", "transaction", "profile", "replay_event"]);
                                        return n && (n.release = l), e.send(t)
                                    },
                                    flush: t => e.flush(t)
                                }
                            })({
                                ...n,
                                url: f
                            }) : t({
                                ...n,
                                url: f
                            })
                        }
                        return s[u]
                    }
                    return {
                        send: async function t(t) {
                            let n = e({
                                envelope: t,
                                getEvent: function(e) {
                                    return a(t, e && e.length ? e : ["event"])
                                }
                            }).map(t => "string" == typeof t ? u(t, void 0) : u(t.dsn, t.release)).filter(t => !!t);
                            return 0 === n.length && n.push(o), (await Promise.all(n.map(e => e.send(t))))[0]
                        },
                        flush: async function t(t) {
                            let e = [...Object.keys(s).map(t => s[t]), o];
                            return (await Promise.all(e.map(e => e.flush(t)))).every(t => t)
                        }
                    }
                }
            }
        },
        499833: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                makeOfflineTransport: function() {
                    return a
                }
            });
            var r = n("648238");

            function i(t, e) {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.info(`[Offline]: ${t}`, e)
            }

            function a(t) {
                return e => {
                    let n;
                    let a = t(e),
                        o = e.createStore ? e.createStore(e) : void 0,
                        s = 5e3;

                    function u(t) {
                        o && (n && clearTimeout(n), "number" != typeof(n = setTimeout(async () => {
                            n = void 0;
                            let t = await o.pop();
                            t && (i("Attempting to send previously queued event"), l(t).catch(t => {
                                i("Failed to retry sending", t)
                            }))
                        }, t)) && n.unref && n.unref())
                    }

                    function c() {
                        !n && (u(s), s = Math.min(2 * s, 36e5))
                    }
                    async function l(t) {
                        try {
                            let e = await a.send(t),
                                n = 100;
                            if (e) {
                                if (e.headers && e.headers["retry-after"]) n = (0, r.parseRetryAfterHeader)(e.headers["retry-after"]);
                                else if ((e.statusCode || 0) >= 400) return e
                            }
                            return u(n), s = 5e3, e
                        } catch (a) {
                            var n, l, d;
                            if (o && await (n = t, l = a, d = s, !(0, r.envelopeContainsItemType)(n, ["replay_event", "replay_recording", "client_report"]) && (!e.shouldStore || e.shouldStore(n, l, d)))) return await o.insert(t), c(), i("Error sending. Event queued", a), {};
                            throw a
                        }
                    }
                    return e.flushAtStartup && c(), {
                        send: l,
                        flush: t => a.flush(t)
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
                let e = (0, r.getCurrentHub)().getClient(),
                    n = t || e && e.getOptions();
                return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
            }
        },
        392405: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                prepareEvent: function() {
                    return o
                }
            });
            var r = n("648238"),
                i = n("28434"),
                a = n("703498");

            function o(t, e, n, o) {
                let {
                    normalizeDepth: u = 3,
                    normalizeMaxBreadth: c = 1e3
                } = t, l = {
                    ...e,
                    event_id: e.event_id || n.event_id || (0, r.uuid4)(),
                    timestamp: e.timestamp || (0, r.dateTimestampInSeconds)()
                }, d = n.integrations || t.integrations.map(t => t.name);
                (function(t, e) {
                    let {
                        environment: n,
                        release: a,
                        dist: o,
                        maxValueLength: s = 250
                    } = e;
                    !("environment" in t) && (t.environment = "environment" in e ? n : i.DEFAULT_ENVIRONMENT), void 0 === t.release && void 0 !== a && (t.release = a), void 0 === t.dist && void 0 !== o && (t.dist = o), t.message && (t.message = (0, r.truncate)(t.message, s));
                    let u = t.exception && t.exception.values && t.exception.values[0];
                    u && u.value && (u.value = (0, r.truncate)(u.value, s));
                    let c = t.request;
                    c && c.url && (c.url = (0, r.truncate)(c.url, s))
                })(l, t),
                function(t, e) {
                    e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
                }(l, d), void 0 === e.type && function(t, e) {
                    let n;
                    let i = r.GLOBAL_OBJ._sentryDebugIds;
                    if (!i) return;
                    let a = s.get(e);
                    a ? n = a : (n = new Map, s.set(e, n));
                    let o = Object.keys(i).reduce((t, r) => {
                        let a;
                        let o = n.get(r);
                        o ? a = o : (a = e(r), n.set(r, a));
                        for (let e = a.length - 1; e >= 0; e--) {
                            let n = a[e];
                            if (n.filename) {
                                t[n.filename] = i[r];
                                break
                            }
                        }
                        return t
                    }, {});
                    try {
                        t.exception.values.forEach(t => {
                            t.stacktrace.frames.forEach(t => {
                                t.filename && (t.debug_id = o[t.filename])
                            })
                        })
                    } catch (t) {}
                }(l, t.stackParser);
                let f = o;
                n.captureContext && (f = a.Scope.clone(f).update(n.captureContext));
                let p = (0, r.resolvedSyncPromise)(l);
                if (f) {
                    if (f.getAttachments) {
                        let t = [...n.attachments || [], ...f.getAttachments()];
                        t.length && (n.attachments = t)
                    }
                    p = f.applyToEvent(l, n)
                }
                return p.then(t => (t && function(t) {
                    let e = {};
                    try {
                        t.exception.values.forEach(t => {
                            t.stacktrace.frames.forEach(t => {
                                t.debug_id && (t.abs_path ? e[t.abs_path] = t.debug_id : t.filename && (e[t.filename] = t.debug_id), delete t.debug_id)
                            })
                        })
                    } catch (t) {}
                    if (0 === Object.keys(e).length) return;
                    t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
                    let n = t.debug_meta.images;
                    Object.keys(e).forEach(t => {
                        n.push({
                            type: "sourcemap",
                            code_file: t,
                            debug_id: e[t]
                        })
                    })
                }(t), "number" == typeof u && u > 0) ? function(t, e, n) {
                    if (!t) return null;
                    let i = {
                        ...t,
                        ...t.breadcrumbs && {
                            breadcrumbs: t.breadcrumbs.map(t => ({
                                ...t,
                                ...t.data && {
                                    data: (0, r.normalize)(t.data, e, n)
                                }
                            }))
                        },
                        ...t.user && {
                            user: (0, r.normalize)(t.user, e, n)
                        },
                        ...t.contexts && {
                            contexts: (0, r.normalize)(t.contexts, e, n)
                        },
                        ...t.extra && {
                            extra: (0, r.normalize)(t.extra, e, n)
                        }
                    };
                    return t.contexts && t.contexts.trace && i.contexts && (i.contexts.trace = t.contexts.trace, t.contexts.trace.data && (i.contexts.trace.data = (0, r.normalize)(t.contexts.trace.data, e, n))), t.spans && (i.spans = t.spans.map(t => (t.data && (t.data = (0, r.normalize)(t.data, e, n)), t))), i
                }(t, u, c) : t)
            }
            let s = new WeakMap
        },
        139782: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                SDK_VERSION: function() {
                    return r
                }
            });
            let r = "7.60.1"
        },
        438142: function(t, e, n) {
            "use strict";
            let r, i, a, o, s;
            n.r(e), n.d(e, {
                Replay: function() {
                    return eQ
                }
            });
            var u, c, l, d, f, p, h, _, g, m, y, v, b, E, S, w, T = n("91320"),
                k = n("648238"),
                x = n("444675");
            let R = k.GLOBAL_OBJ,
                N = "sentryReplaySession",
                D = "Unable to send Replay";
            (u = g || (g = {}))[u.Document = 0] = "Document", u[u.DocumentType = 1] = "DocumentType", u[u.Element = 2] = "Element", u[u.Text = 3] = "Text", u[u.CDATA = 4] = "CDATA", u[u.Comment = 5] = "Comment";

            function I(t) {
                let e = null == t ? void 0 : t.host;
                return !!(e && e.shadowRoot && e.shadowRoot === t)
            }

            function O({
                maskInputOptions: t,
                tagName: e,
                type: n
            }) {
                "option" === e.toLowerCase() && (e = "select");
                let r = "string" == typeof n ? n.toLowerCase() : void 0;
                return t[e.toLowerCase()] || r && t[r] || "password" === r || "input" === e && !n && t.text
            }

            function C({
                input: t,
                maskInputSelector: e,
                unmaskInputSelector: n,
                maskInputOptions: r,
                tagName: i,
                type: a,
                value: o,
                maskInputFn: s
            }) {
                let u = o || "";
                return n && t.matches(n) ? u : (t.hasAttribute("data-rr-is-password") && (a = "password"), (O({
                    maskInputOptions: r,
                    tagName: i,
                    type: a
                }) || e && t.matches(e)) && (u = s ? s(u) : "*".repeat(u.length)), u)
            }
            let A = "__rrweb_original__";

            function B(t) {
                let e = t.type;
                return t.hasAttribute("data-rr-is-password") ? "password" : e ? e.toLowerCase() : null
            }

            function U(t, e, n) {
                return ("string" == typeof n && n.toLowerCase(), "INPUT" === e && ("radio" === n || "checkbox" === n)) ? t.getAttribute("value") || "" : t.value
            }
            let M = 1,
                L = RegExp("[^a-z0-9-_:]");

            function P(t) {
                return t ? t.replace(/[\S]/g, "*") : ""
            }

            function G(t) {
                try {
                    let e = t.rules || t.cssRules;
                    return e ? Array.from(e).map(F).join("") : null
                } catch (t) {
                    return null
                }
            }

            function F(t) {
                let e = t.cssText;
                if (function(t) {
                        return "styleSheet" in t
                    }(t)) try {
                    e = G(t.styleSheet) || e
                } catch (t) {}
                return Y(e)
            }

            function Y(t) {
                return t.indexOf(":") > -1 ? t.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2") : t
            }
            let z = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
                j = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,
                H = /^(data:)([^,]*),(.*)/i;

            function $(t, e) {
                return (t || "").replace(z, (t, n, r, i, a, o) => {
                    let s = r || a || o,
                        u = n || i || "";
                    if (!s) return t;
                    if (!j.test(s) || H.test(s)) return `url(${u}${s}${u})`;
                    if ("/" === s[0]) {
                        var c;
                        let t;
                        return `url(${u}${t="",(t=(t=(c=e).indexOf("//")>-1?c.split("/").slice(0,3).join("/"):c.split("/")[0]).split("?")[0])+s}${u})`
                    }
                    let l = e.split("/"),
                        d = s.split("/");
                    for (let t of (l.pop(), d)) {
                        if ("." !== t) ".." === t ? l.pop() : l.push(t)
                    }
                    return `url(${u}${l.join("/")}${u})`
                })
            }
            let W = /^[^ \t\n\r\u000c]+/,
                q = /^[, \t\n\r\u000c]+/;

            function Z(t, e) {
                if (!e || "" === e.trim()) return e;
                let n = t.createElement("a");
                return n.href = e, n.href
            }

            function V() {
                let t = document.createElement("a");
                return t.href = "", t.href
            }

            function J(t, e, n, r, i, a, o, s) {
                if (!i) return i;
                let u = r.toLowerCase(),
                    c = n.toLowerCase();
                if ("src" === u || "href" === u) return Z(t, i);
                if ("xlink:href" === u && "#" !== i[0]) return Z(t, i);
                if ("background" === u && ("table" === c || "td" === c || "th" === c)) return Z(t, i);
                else if ("srcset" === u) return function(t, e) {
                    if ("" === e.trim()) return e;
                    let n = 0;

                    function r(t) {
                        let r;
                        let i = t.exec(e.substring(n));
                        return i ? (r = i[0], n += r.length, r) : ""
                    }
                    let i = [];
                    for (; r(q), !(n >= e.length);) {
                        ;
                        let a = r(W);
                        if ("," === a.slice(-1)) a = Z(t, a.substring(0, a.length - 1)), i.push(a);
                        else {
                            let r = "";
                            a = Z(t, a);
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
                else if ("style" === u) return $(i, V());
                else if ("object" === c && "data" === u) return Z(t, i);
                else if (a && function(t, e, n, r) {
                        return !(r && t.matches(r)) && (["placeholder", "title", "aria-label"].indexOf(e) > -1 || "input" === n && "value" === e && t.hasAttribute("type") && ["submit", "button"].indexOf(t.getAttribute("type").toLowerCase()) > -1)
                    }(e, u, c, o)) return s ? s(i) : P(i);
                return i
            }

            function K(t, e, n, r, i) {
                if (!t) return !1;
                if (t.nodeType !== t.ELEMENT_NODE) return K(t.parentNode, e, n, r, i);
                if (r && (t.matches(r) || t.closest(r))) return !1;
                if (i) return !0;
                if ("string" == typeof e) {
                    if (t.classList.contains(e)) return !0
                } else
                    for (let n = 0; n < t.classList.length; n++) {
                        let r = t.classList[n];
                        if (e.test(r)) return !0
                    }
                return !!(n && t.matches(n)) || K(t.parentNode, e, n, r, i)
            }

            function X(t) {
                return null == t ? "" : t.toLowerCase()
            }

            function Q(t, e) {
                let n;
                let {
                    doc: a,
                    map: o,
                    blockClass: s,
                    blockSelector: u,
                    unblockSelector: c,
                    maskTextClass: l,
                    maskTextSelector: d,
                    unmaskTextSelector: f,
                    skipChild: p = !1,
                    inlineStylesheet: h = !0,
                    maskInputSelector: _,
                    unmaskInputSelector: m,
                    maskAllText: y,
                    maskInputOptions: v = {},
                    maskTextFn: b,
                    maskInputFn: E,
                    slimDOMOptions: S,
                    dataURLOptions: w = {},
                    inlineImages: T = !1,
                    recordCanvas: k = !1,
                    onSerialize: x,
                    onIframeLoad: R,
                    iframeLoadTimeout: N = 5e3,
                    keepIframeSrcFn: D = () => !1
                } = e, {
                    preserveWhiteSpace: O = !0
                } = e, F = function(t, e) {
                    var n, a, o;
                    let s;
                    let {
                        doc: u,
                        blockClass: c,
                        blockSelector: l,
                        unblockSelector: d,
                        maskTextClass: f,
                        maskTextSelector: p,
                        unmaskTextSelector: h,
                        inlineStylesheet: _,
                        maskInputSelector: m,
                        unmaskInputSelector: y,
                        maskAllText: v,
                        maskInputOptions: b = {},
                        maskTextFn: E,
                        maskInputFn: S,
                        dataURLOptions: w = {},
                        inlineImages: T,
                        recordCanvas: k,
                        keepIframeSrcFn: x
                    } = e;
                    if (u.__sn) {
                        let t = u.__sn.id;
                        s = 1 === t ? void 0 : t
                    }
                    switch (t.nodeType) {
                        case t.DOCUMENT_NODE:
                            if ("CSS1Compat" !== t.compatMode) return {
                                type: g.Document,
                                childNodes: [],
                                compatMode: t.compatMode,
                                rootId: s
                            };
                            return {
                                type: g.Document, childNodes: [], rootId: s
                            };
                        case t.DOCUMENT_TYPE_NODE:
                            return {
                                type: g.DocumentType, name: t.name, publicId: t.publicId, systemId: t.systemId, rootId: s
                            };
                        case t.ELEMENT_NODE:
                            ;
                            let R = function(t, e, n, r) {
                                    if (r && t.matches(r)) return !1;
                                    if ("string" == typeof e) {
                                        if (t.classList.contains(e)) return !0
                                    } else
                                        for (let n = 0; n < t.classList.length; n++) {
                                            let r = t.classList[n];
                                            if (e.test(r)) return !0
                                        }
                                    return !!n && t.matches(n)
                                }(t, c, l, d),
                                N = function(t) {
                                    if (t instanceof HTMLFormElement) return "form";
                                    let e = t.tagName.toLowerCase().trim();
                                    return L.test(e) ? "div" : e
                                }(t),
                                D = {};
                            for (let {
                                    name: e,
                                    value: n
                                }
                                of Array.from(t.attributes)) ! function(t, e, n) {
                                return ("video" === t || "audio" === t) && "autoplay" === e
                            }(N, e) && (D[e] = J(u, t, N, e, n, v, h, E));
                            if ("link" === N && _) {
                                let e = Array.from(u.styleSheets).find(e => e.href === t.href),
                                    n = null;
                                e && (n = G(e)), n && (delete D.rel, delete D.href, D._cssText = $(n, e.href))
                            }
                            if ("style" === N && t.sheet && !(t.innerText || t.textContent || "").trim().length) {
                                let e = G(t.sheet);
                                e && (D._cssText = $(e, V()))
                            }
                            if ("input" === N || "textarea" === N || "select" === N || "option" === N) {
                                let e = B(t),
                                    n = U(t, N.toUpperCase(), e),
                                    r = t.checked;
                                "submit" !== e && "button" !== e && n && (D.value = C({
                                    input: t,
                                    type: e,
                                    tagName: N,
                                    value: n,
                                    maskInputSelector: m,
                                    unmaskInputSelector: y,
                                    maskInputOptions: b,
                                    maskInputFn: S
                                })), r && (D.checked = r)
                            }
                            if ("option" === N && (t.selected && !b.select ? D.selected = !0 : delete D.selected), "canvas" === N && k) {
                                if ("2d" === t.__context) ! function(t) {
                                    let e = t.getContext("2d");
                                    if (!e) return !0;
                                    for (let n = 0; n < t.width; n += 50)
                                        for (let r = 0; r < t.height; r += 50) {
                                            let i = e.getImageData,
                                                a = A in i ? i[A] : i;
                                            if (new Uint32Array(a.call(e, n, r, Math.min(50, t.width - n), Math.min(50, t.height - r)).data.buffer).some(t => 0 !== t)) return !1
                                        }
                                    return !0
                                }(t) && (D.rr_dataURL = t.toDataURL(w.type, w.quality));
                                else if (!("__context" in t)) {
                                    let e = t.toDataURL(w.type, w.quality),
                                        n = document.createElement("canvas");
                                    n.width = t.width, n.height = t.height, e !== n.toDataURL(w.type, w.quality) && (D.rr_dataURL = e)
                                }
                            }
                            if ("img" === N && T) {
                                !r && (i = (r = u.createElement("canvas")).getContext("2d"));
                                let e = t.crossOrigin;
                                t.crossOrigin = "anonymous";
                                let n = () => {
                                    try {
                                        r.width = t.naturalWidth, r.height = t.naturalHeight, i.drawImage(t, 0, 0), D.rr_dataURL = r.toDataURL(w.type, w.quality)
                                    } catch (e) {
                                        console.warn(`Cannot inline img src=${t.currentSrc}! Error: ${e}`)
                                    }
                                    e ? D.crossOrigin = e : delete D.crossOrigin
                                };
                                t.complete && 0 !== t.naturalWidth ? n() : t.onload = n
                            }
                            if (("audio" === N || "video" === N) && (D.rr_mediaState = t.paused ? "paused" : "played", D.rr_mediaCurrentTime = t.currentTime), t.scrollLeft && (D.rr_scrollLeft = t.scrollLeft), t.scrollTop && (D.rr_scrollTop = t.scrollTop), R) {
                                let {
                                    width: e,
                                    height: n
                                } = t.getBoundingClientRect();
                                D = {
                                    class: D.class,
                                    rr_width: `${e}px`,
                                    rr_height: `${n}px`
                                }
                            }
                            return "iframe" === N && !x(D.src) && (!t.contentDocument && (D.rr_src = D.src), delete D.src), {
                                type: g.Element,
                                tagName: N,
                                attributes: D,
                                childNodes: [],
                                isSVG: !!("svg" === (a = t).tagName || a.ownerSVGElement) || void 0,
                                needBlock: R,
                                rootId: s
                            };
                        case t.TEXT_NODE:
                            let I = t.parentNode && t.parentNode.tagName,
                                O = t.textContent,
                                M = "STYLE" === I || void 0,
                                F = "SCRIPT" === I || void 0;
                            if (M && O) {
                                try {
                                    if (t.nextSibling || t.previousSibling);
                                    else if (null === (n = t.parentNode.sheet) || void 0 === n ? void 0 : n.cssRules) {
                                        ;
                                        O = (o = t.parentNode.sheet).cssRules ? Array.from(o.cssRules).map(t => t.cssText ? Y(t.cssText) : "").join("") : ""
                                    }
                                } catch (e) {
                                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${e}`, t)
                                }
                                O = $(O, V())
                            }
                            return F && (O = "SCRIPT_PLACEHOLDER"), "TEXTAREA" === I && O ? O = "" : "OPTION" === I && O ? O = C({
                                input: t.parentNode,
                                type: null,
                                tagName: I,
                                value: O,
                                maskInputSelector: m,
                                unmaskInputSelector: y,
                                maskInputOptions: b,
                                maskInputFn: S
                            }) : !M && !F && K(t, f, p, h, v) && O && (O = E ? E(O) : P(O)), {
                                type: g.Text,
                                textContent: O || "",
                                isStyle: M,
                                rootId: s
                            };
                        case t.CDATA_SECTION_NODE:
                            return {
                                type: g.CDATA, textContent: "", rootId: s
                            };
                        case t.COMMENT_NODE:
                            return {
                                type: g.Comment, textContent: t.textContent || "", rootId: s
                            };
                        default:
                            return !1
                    }
                }(t, {
                    doc: a,
                    blockClass: s,
                    blockSelector: u,
                    unblockSelector: c,
                    maskTextClass: l,
                    maskTextSelector: d,
                    unmaskTextSelector: f,
                    inlineStylesheet: h,
                    maskInputSelector: _,
                    unmaskInputSelector: m,
                    maskAllText: y,
                    maskInputOptions: v,
                    maskTextFn: b,
                    maskInputFn: E,
                    dataURLOptions: w,
                    inlineImages: T,
                    recordCanvas: k,
                    keepIframeSrcFn: D
                });
                if (!F) return console.warn(t, "not serialized"), null;
                n = "__sn" in t ? t.__sn.id : ! function(t, e) {
                    if (e.comment && t.type === g.Comment) return !0;
                    if (t.type === g.Element) {
                        if (e.script && ("script" === t.tagName || "link" === t.tagName && ("preload" === t.attributes.rel || "modulepreload" === t.attributes.rel) && "script" === t.attributes.as || "link" === t.tagName && "prefetch" === t.attributes.rel && "string" == typeof t.attributes.href && t.attributes.href.endsWith(".js"))) return !0;
                        if (e.headFavicon && ("link" === t.tagName && "shortcut icon" === t.attributes.rel || "meta" === t.tagName && (X(t.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === X(t.attributes.name) || "icon" === X(t.attributes.rel) || "apple-touch-icon" === X(t.attributes.rel) || "shortcut icon" === X(t.attributes.rel)))) return !0;
                        else if ("meta" === t.tagName) {
                            if (e.headMetaDescKeywords && X(t.attributes.name).match(/^description|keywords$/)) return !0;
                            if (e.headMetaSocial && (X(t.attributes.property).match(/^(og|twitter|fb):/) || X(t.attributes.name).match(/^(og|twitter):/) || "pinterest" === X(t.attributes.name))) return !0;
                            else if (e.headMetaRobots && ("robots" === X(t.attributes.name) || "googlebot" === X(t.attributes.name) || "bingbot" === X(t.attributes.name))) return !0;
                            else if (e.headMetaHttpEquiv && void 0 !== t.attributes["http-equiv"]) return !0;
                            else if (e.headMetaAuthorship && ("author" === X(t.attributes.name) || "generator" === X(t.attributes.name) || "framework" === X(t.attributes.name) || "publisher" === X(t.attributes.name) || "progid" === X(t.attributes.name) || X(t.attributes.property).match(/^article:/) || X(t.attributes.property).match(/^product:/))) return !0;
                            else if (e.headMetaVerification && ("google-site-verification" === X(t.attributes.name) || "yandex-verification" === X(t.attributes.name) || "csrf-token" === X(t.attributes.name) || "p:domain_verify" === X(t.attributes.name) || "verify-v1" === X(t.attributes.name) || "verification" === X(t.attributes.name) || "shopify-checkout-api-token" === X(t.attributes.name))) return !0
                        }
                    }
                    return !1
                }(F, S) && (O || F.type !== g.Text || F.isStyle || F.textContent.replace(/^\s+|\s+$/gm, "").length) ? M++ : -2;
                let z = Object.assign(F, {
                    id: n
                });
                if (t.__sn = z, -2 === n) return null;
                o[n] = t, x && x(t);
                let j = !p;
                if (z.type === g.Element && (j = j && !z.needBlock, delete z.needBlock, t.shadowRoot && (z.isShadowHost = !0)), (z.type === g.Document || z.type === g.Element) && j) {
                    var H;
                    S.headWhitespace && F.type === g.Element && "head" === F.tagName && (O = !1);
                    let e = {
                        doc: a,
                        map: o,
                        blockClass: s,
                        blockSelector: u,
                        unblockSelector: c,
                        maskTextClass: l,
                        maskTextSelector: d,
                        unmaskTextSelector: f,
                        skipChild: p,
                        inlineStylesheet: h,
                        maskInputSelector: _,
                        unmaskInputSelector: m,
                        maskAllText: y,
                        maskInputOptions: v,
                        maskTextFn: b,
                        maskInputFn: E,
                        slimDOMOptions: S,
                        dataURLOptions: w,
                        inlineImages: T,
                        recordCanvas: k,
                        preserveWhiteSpace: O,
                        onSerialize: x,
                        onIframeLoad: R,
                        iframeLoadTimeout: N,
                        keepIframeSrcFn: D
                    };
                    for (let n of Array.from(t.childNodes)) {
                        let t = Q(n, e);
                        t && z.childNodes.push(t)
                    }
                    if ((H = t).nodeType === H.ELEMENT_NODE && t.shadowRoot)
                        for (let n of Array.from(t.shadowRoot.childNodes)) {
                            let t = Q(n, e);
                            t && (t.isShadow = !0, z.childNodes.push(t))
                        }
                }
                return t.parentNode && I(t.parentNode) && (z.isShadow = !0), z.type === g.Element && "iframe" === z.tagName && ! function(t, e, n) {
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
                    if (e && R) {
                        let n = Q(e, {
                            doc: e,
                            map: o,
                            blockClass: s,
                            blockSelector: u,
                            unblockSelector: c,
                            maskTextClass: l,
                            maskTextSelector: d,
                            unmaskTextSelector: f,
                            skipChild: !1,
                            inlineStylesheet: h,
                            maskInputSelector: _,
                            unmaskInputSelector: m,
                            maskAllText: y,
                            maskInputOptions: v,
                            maskTextFn: b,
                            maskInputFn: E,
                            slimDOMOptions: S,
                            dataURLOptions: w,
                            inlineImages: T,
                            recordCanvas: k,
                            preserveWhiteSpace: O,
                            onSerialize: x,
                            onIframeLoad: R,
                            iframeLoadTimeout: N,
                            keepIframeSrcFn: D
                        });
                        n && R(t, n)
                    }
                }, N), z
            }

            function tt(t, e, n = document) {
                let r = {
                    capture: !0,
                    passive: !0
                };
                return n.addEventListener(t, e, r), () => n.removeEventListener(t, e, r)
            }(c = m || (m = {}))[c.DomContentLoaded = 0] = "DomContentLoaded", c[c.Load = 1] = "Load", c[c.FullSnapshot = 2] = "FullSnapshot", c[c.IncrementalSnapshot = 3] = "IncrementalSnapshot", c[c.Meta = 4] = "Meta", c[c.Custom = 5] = "Custom", c[c.Plugin = 6] = "Plugin", (l = y || (y = {}))[l.Mutation = 0] = "Mutation", l[l.MouseMove = 1] = "MouseMove", l[l.MouseInteraction = 2] = "MouseInteraction", l[l.Scroll = 3] = "Scroll", l[l.ViewportResize = 4] = "ViewportResize", l[l.Input = 5] = "Input", l[l.TouchMove = 6] = "TouchMove", l[l.MediaInteraction = 7] = "MediaInteraction", l[l.StyleSheetRule = 8] = "StyleSheetRule", l[l.CanvasMutation = 9] = "CanvasMutation", l[l.Font = 10] = "Font", l[l.Log = 11] = "Log", l[l.Drag = 12] = "Drag", l[l.StyleDeclaration = 13] = "StyleDeclaration", (d = v || (v = {}))[d.MouseUp = 0] = "MouseUp", d[d.MouseDown = 1] = "MouseDown", d[d.Click = 2] = "Click", d[d.ContextMenu = 3] = "ContextMenu", d[d.DblClick = 4] = "DblClick", d[d.Focus = 5] = "Focus", d[d.Blur = 6] = "Blur", d[d.TouchStart = 7] = "TouchStart", d[d.TouchMove_Departed = 8] = "TouchMove_Departed", d[d.TouchEnd = 9] = "TouchEnd", d[d.TouchCancel = 10] = "TouchCancel", (f = b || (b = {}))[f["2D"] = 0] = "2D", f[f.WebGL = 1] = "WebGL", f[f.WebGL2 = 2] = "WebGL2", (p = E || (E = {}))[p.Play = 0] = "Play", p[p.Pause = 1] = "Pause", p[p.Seeked = 2] = "Seeked", p[p.VolumeChange = 3] = "VolumeChange", (h = S || (S = {})).Start = "start", h.Pause = "pause", h.Resume = "resume", h.Resize = "resize", h.Finish = "finish", h.FullsnapshotRebuilded = "fullsnapshot-rebuilded", h.LoadStylesheetStart = "load-stylesheet-start", h.LoadStylesheetEnd = "load-stylesheet-end", h.SkipStart = "skip-start", h.SkipEnd = "skip-end", h.MouseInteraction = "mouse-interaction", h.EventCast = "event-cast", h.CustomEvent = "custom-event", h.Flush = "flush", h.StateChange = "state-change", h.PlayBack = "play-back";
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

            function tr(t, e, n = {}) {
                let r = null,
                    i = 0;
                return function(a) {
                    let o = Date.now();
                    !i && !1 === n.leading && (i = o);
                    let s = e - (o - i),
                        u = this,
                        c = arguments;
                    s <= 0 || s > e ? (r && (clearTimeout(r), r = null), i = o, t.apply(u, c)) : !r && !1 !== n.trailing && (r = setTimeout(() => {
                        i = !1 === n.leading ? 0 : Date.now(), r = null, t.apply(u, c)
                    }, s))
                }
            }

            function ti(t, e, n, r, i = window) {
                let a = i.Object.getOwnPropertyDescriptor(t, e);
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

            function tu(t, e, n, r) {
                if (!t) return !1;
                if (t.nodeType === t.ELEMENT_NODE) {
                    let i = !1,
                        a = r && t.matches(r);
                    return "string" == typeof e ? i = void 0 !== t.closest ? !a && null !== t.closest("." + e) : !a && t.classList.contains(e) : a || t.classList.forEach(t => {
                        e.test(t) && (i = !0)
                    }), !i && n && (i = t.matches(n)), !a && i || tu(t.parentNode, e, n, r)
                }
                return t.nodeType, t.TEXT_NODE, tu(t.parentNode, e, n, r)
            }

            function tc(t) {
                return "__sn" in t && -2 === t.__sn.id
            }
            "undefined" != typeof window && window.Proxy && window.Reflect && (tn = new Proxy(tn, {
                get: (t, e, n) => ("map" === e && console.error(te), Reflect.get(t, e, n))
            }));

            function tl(t) {
                return !!t.changedTouches
            }

            function td(t) {
                return "__sn" in t && t.__sn.type === g.Element && "iframe" === t.__sn.tagName
            }

            function tf(t) {
                return !!(null == t ? void 0 : t.shadowRoot)
            }

            function tp(t) {
                return "__ln" in t
            }
            class th {
                constructor() {
                    this.length = 0, this.head = null
                }
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
            }
            let t_ = (t, e) => `${t}@${e}`;

            function tg(t) {
                return "__sn" in t
            }
            class tm {
                constructor() {
                    this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = t => {
                        t.forEach(this.processMutation), this.emit()
                    }, this.emit = () => {
                        if (this.frozen || this.locked) return;
                        let t = [],
                            e = new th,
                            n = t => {
                                let e = t,
                                    n = -2;
                                for (; - 2 === n;) n = (e = e && e.nextSibling) && this.mirror.getId(e);
                                return n
                            },
                            r = r => {
                                var i, a, o, s, u;
                                let c = r.getRootNode ? null === (i = r.getRootNode()) || void 0 === i ? void 0 : i.host : null,
                                    l = c;
                                for (; null === (o = null === (a = null == l ? void 0 : l.getRootNode) || void 0 === a ? void 0 : a.call(l)) || void 0 === o ? void 0 : o.host;) l = (null === (u = null === (s = null == l ? void 0 : l.getRootNode) || void 0 === s ? void 0 : s.call(l)) || void 0 === u ? void 0 : u.host) || null;
                                let d = !this.doc.contains(r) && (!l || !this.doc.contains(l));
                                if (!r.parentNode || d) return;
                                let f = I(r.parentNode) ? this.mirror.getId(c) : this.mirror.getId(r.parentNode),
                                    p = n(r);
                                if (-1 === f || -1 === p) return e.addNode(r);
                                let h = Q(r, {
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
                                h && t.push({
                                    parentId: f,
                                    nextId: p,
                                    node: h
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
                                !tu(t.target, this.blockClass, this.blockSelector, this.unblockSelector) && e !== t.oldValue && this.texts.push({
                                    value: K(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextSelector, this.maskAllText) && e ? this.maskTextFn ? this.maskTextFn(e) : e.replace(/[\S]/g, "*") : e,
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
                                    })), tu(t.target, this.blockClass, this.blockSelector, this.unblockSelector) || n === t.oldValue) return;
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
                                    r.attributes[t.attributeName] = J(this.doc, e, e.tagName, t.attributeName, n, this.maskAllText, this.unmaskTextSelector, this.maskTextFn)
                                }
                                break
                            }
                            case "childList":
                                t.addedNodes.forEach(e => this.genAdds(e, t.target)), t.removedNodes.forEach(e => {
                                    let n = this.mirror.getId(e),
                                        r = I(t.target) ? this.mirror.getId(t.target.host) : this.mirror.getId(t.target);
                                    !(tu(t.target, this.blockClass, this.blockSelector, this.unblockSelector) || tc(e)) && (this.addedSet.has(e) ? (ty(this.addedSet, e), this.droppedSet.add(e)) : this.addedSet.has(t.target) && -1 === n || function t(e, n) {
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
                        if (!(e && tu(e, this.blockClass, this.blockSelector, this.unblockSelector))) {
                            if ("__sn" in t) {
                                if (tc(t)) return;
                                this.movedSet.add(t);
                                let n = null;
                                if (e && "__sn" in e) n = e.__sn.id;
                                n && (this.movedMap[t_(t.__sn.id, n)] = !0)
                            } else this.addedSet.add(t), this.droppedSet.delete(t);
                            !tu(t, this.blockClass, this.blockSelector, this.unblockSelector) && t.childNodes.forEach(t => this.genAdds(t))
                        }
                    }
                }
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
            let tE = t => (...e) => {
                    try {
                        return t(...e)
                    } catch (t) {
                        try {
                            t.__rrweb__ = !0
                        } catch (t) {}
                        throw t
                    }
                },
                tS = [];

            function tw(t) {
                try {
                    if ("composedPath" in t) {
                        let e = t.composedPath();
                        if (e.length) return e[0]
                    } else if ("path" in t && t.path.length) return t.path[0]
                } catch (t) {}
                return t && t.target
            }

            function tT(t, e) {
                var n, r;
                let i = new tm;
                tS.push(i), i.init(t);
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

            function tk({
                scrollCb: t,
                doc: e,
                mirror: n,
                blockClass: r,
                blockSelector: i,
                unblockSelector: a,
                sampling: o
            }) {
                let s = tr(o => {
                    let s = tw(o);
                    if (!s || tu(s, r, i, a)) return;
                    let u = n.getId(s);
                    if (s === e) {
                        let n = e.scrollingElement || e.documentElement;
                        tE(t)({
                            id: u,
                            x: n.scrollLeft,
                            y: n.scrollTop
                        })
                    } else tE(t)({
                        id: u,
                        x: s.scrollLeft,
                        y: s.scrollTop
                    })
                }, o.scroll || 100);
                return tt("scroll", tE(s), e)
            }

            function tx(t, e) {
                let n = Object.assign({}, t);
                return !e && delete n.userTriggered, n
            }
            let tR = ["INPUT", "TEXTAREA", "SELECT"],
                tN = new WeakMap;

            function tD(t) {
                return function(t, e) {
                    if (tO("CSSGroupingRule") && t.parentRule instanceof CSSGroupingRule || tO("CSSMediaRule") && t.parentRule instanceof CSSMediaRule || tO("CSSSupportsRule") && t.parentRule instanceof CSSSupportsRule || tO("CSSConditionRule") && t.parentRule instanceof CSSConditionRule) {
                        let n = Array.from(t.parentRule.cssRules).indexOf(t);
                        e.unshift(n)
                    } else {
                        let n = Array.from(t.parentStyleSheet.cssRules).indexOf(t);
                        e.unshift(n)
                    }
                    return e
                }(t, [])
            }

            function tI(t, e = {}) {
                let n = t.doc.defaultView;
                if (!n) return () => {};
                ! function(t, e) {
                    let {
                        mutationCb: n,
                        mousemoveCb: r,
                        mouseInteractionCb: i,
                        scrollCb: a,
                        viewportResizeCb: o,
                        inputCb: s,
                        mediaInteractionCb: u,
                        styleSheetRuleCb: c,
                        styleDeclarationCb: l,
                        canvasMutationCb: d,
                        fontCb: f
                    } = t;
                    t.mutationCb = (...t) => {
                        e.mutation && e.mutation(...t), n(...t)
                    }, t.mousemoveCb = (...t) => {
                        e.mousemove && e.mousemove(...t), r(...t)
                    }, t.mouseInteractionCb = (...t) => {
                        e.mouseInteraction && e.mouseInteraction(...t), i(...t)
                    }, t.scrollCb = (...t) => {
                        e.scroll && e.scroll(...t), a(...t)
                    }, t.viewportResizeCb = (...t) => {
                        e.viewportResize && e.viewportResize(...t), o(...t)
                    }, t.inputCb = (...t) => {
                        e.input && e.input(...t), s(...t)
                    }, t.mediaInteractionCb = (...t) => {
                        e.mediaInteaction && e.mediaInteaction(...t), u(...t)
                    }, t.styleSheetRuleCb = (...t) => {
                        e.styleSheetRule && e.styleSheetRule(...t), c(...t)
                    }, t.styleDeclarationCb = (...t) => {
                        e.styleDeclaration && e.styleDeclaration(...t), l(...t)
                    }, t.canvasMutationCb = (...t) => {
                        e.canvasMutation && e.canvasMutation(...t), d(...t)
                    }, t.fontCb = (...t) => {
                        e.font && e.font(...t), f(...t)
                    }
                }(t, e);
                let r = tT(t, t.doc),
                    i = function({
                        mousemoveCb: t,
                        sampling: e,
                        doc: n,
                        mirror: r
                    }) {
                        let i;
                        if (!1 === e.mousemove) return () => {};
                        let a = "number" == typeof e.mousemove ? e.mousemove : 50,
                            o = "number" == typeof e.mousemoveCallback ? e.mousemoveCallback : 500,
                            s = [],
                            u = tr(e => {
                                let n = Date.now() - i;
                                tE(t)(s.map(t => (t.timeOffset -= n, t)), e), s = [], i = null
                            }, o),
                            c = tr(t => {
                                let e = tw(t),
                                    {
                                        clientX: n,
                                        clientY: a
                                    } = tl(t) ? t.changedTouches[0] : t;
                                !i && (i = Date.now()), s.push({
                                    x: n,
                                    y: a,
                                    id: r.getId(e),
                                    timeOffset: Date.now() - i
                                }), u("undefined" != typeof DragEvent && t instanceof DragEvent ? y.Drag : t instanceof MouseEvent ? y.MouseMove : y.TouchMove)
                            }, a, {
                                trailing: !1
                            }),
                            l = [tt("mousemove", tE(c), n), tt("touchmove", tE(c), n), tt("drag", tE(c), n)];
                        return tE(() => {
                            l.forEach(t => t())
                        })
                    }(t),
                    a = function({
                        mouseInteractionCb: t,
                        doc: e,
                        mirror: n,
                        blockClass: r,
                        blockSelector: i,
                        unblockSelector: a,
                        sampling: o
                    }) {
                        if (!1 === o.mouseInteraction) return () => {};
                        let s = !0 === o.mouseInteraction || void 0 === o.mouseInteraction ? {} : o.mouseInteraction,
                            u = [],
                            c = e => o => {
                                let s = tw(o);
                                if (tu(s, r, i, a)) return;
                                let u = tl(o) ? o.changedTouches[0] : o;
                                if (!u) return;
                                let c = n.getId(s),
                                    {
                                        clientX: l,
                                        clientY: d
                                    } = u;
                                tE(t)({
                                    type: v[e],
                                    id: c,
                                    x: l,
                                    y: d
                                })
                            };
                        return Object.keys(v).filter(t => Number.isNaN(Number(t)) && !t.endsWith("_Departed") && !1 !== s[t]).forEach(t => {
                            let n = t.toLowerCase(),
                                r = tE(c(t));
                            u.push(tt(n, r, e))
                        }), tE(() => {
                            u.forEach(t => t())
                        })
                    }(t),
                    o = tk(t),
                    s = function({
                        viewportResizeCb: t
                    }) {
                        let e = -1,
                            n = -1,
                            r = tr(() => {
                                let r = to(),
                                    i = ts();
                                (e !== r || n !== i) && (tE(t)({
                                    width: Number(i),
                                    height: Number(r)
                                }), e = r, n = i)
                            }, 200);
                        return tt("resize", tE(r), window)
                    }(t),
                    u = function({
                        inputCb: t,
                        doc: e,
                        mirror: n,
                        blockClass: r,
                        blockSelector: i,
                        unblockSelector: a,
                        ignoreClass: o,
                        ignoreSelector: s,
                        maskInputSelector: u,
                        unmaskInputSelector: c,
                        maskInputOptions: l,
                        maskInputFn: d,
                        sampling: f,
                        userTriggeredOnInput: p
                    }) {
                        function h(t) {
                            let n = tw(t),
                                f = n && n.tagName,
                                h = t.isTrusted;
                            if ("OPTION" === f && (n = n.parentElement), !n || !f || 0 > tR.indexOf(f) || tu(n, r, i, a)) return;
                            let g = n,
                                m = B(g);
                            if (g.classList.contains(o) || s && g.matches(s)) return;
                            let y = U(g, f, m),
                                v = !1;
                            ("radio" === m || "checkbox" === m) && (v = n.checked),
                            function({
                                tagName: t,
                                type: e,
                                maskInputOptions: n,
                                maskInputSelector: r
                            }) {
                                return r || O({
                                    maskInputOptions: n,
                                    tagName: t,
                                    type: e
                                })
                            }({
                                maskInputOptions: l,
                                maskInputSelector: u,
                                tagName: f,
                                type: m
                            }) && (y = C({
                                input: g,
                                maskInputOptions: l,
                                maskInputSelector: u,
                                unmaskInputSelector: c,
                                tagName: f,
                                type: m,
                                value: y,
                                maskInputFn: d
                            })), _(n, tE(tx)({
                                text: y,
                                isChecked: v,
                                userTriggered: h
                            }, p));
                            let b = n.name;
                            "radio" === m && b && v && e.querySelectorAll(`input[type="radio"][name="${b}"]`).forEach(t => {
                                if (t !== n) {
                                    let e = C({
                                        input: t,
                                        maskInputOptions: l,
                                        maskInputSelector: u,
                                        unmaskInputSelector: c,
                                        tagName: f,
                                        type: m,
                                        value: U(t, f, m),
                                        maskInputFn: d
                                    });
                                    _(t, tE(tx)({
                                        text: e,
                                        isChecked: !v,
                                        userTriggered: !1
                                    }, p))
                                }
                            })
                        }

                        function _(e, r) {
                            let i = tN.get(e);
                            if (!i || i.text !== r.text || i.isChecked !== r.isChecked) {
                                tN.set(e, r);
                                let i = n.getId(e);
                                t(Object.assign(Object.assign({}, r), {
                                    id: i
                                }))
                            }
                        }
                        let g = ("last" === f.input ? ["change"] : ["input", "change"]).map(t => tt(t, tE(h), e)),
                            m = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value"),
                            y = [
                                [HTMLInputElement.prototype, "value"],
                                [HTMLInputElement.prototype, "checked"],
                                [HTMLSelectElement.prototype, "value"],
                                [HTMLTextAreaElement.prototype, "value"],
                                [HTMLSelectElement.prototype, "selectedIndex"],
                                [HTMLOptionElement.prototype, "selected"]
                            ];
                        return m && m.set && g.push(...y.map(t => ti(t[0], t[1], {
                            set() {
                                tE(h)({
                                    target: this
                                })
                            }
                        }))), tE(() => {
                            g.forEach(t => t())
                        })
                    }(t),
                    c = function({
                        mediaInteractionCb: t,
                        blockClass: e,
                        blockSelector: n,
                        unblockSelector: r,
                        mirror: i,
                        sampling: a
                    }) {
                        let o = o => tr(tE(a => {
                                let s = tw(a);
                                if (!s || tu(s, e, n, r)) return;
                                let {
                                    currentTime: u,
                                    volume: c,
                                    muted: l
                                } = s;
                                t({
                                    type: o,
                                    id: i.getId(s),
                                    currentTime: u,
                                    volume: c,
                                    muted: l
                                })
                            }), a.media || 500),
                            s = [tt("play", o(0)), tt("pause", o(1)), tt("seeked", o(2)), tt("volumechange", o(3))];
                        return tE(() => {
                            s.forEach(t => t())
                        })
                    }(t),
                    l = function({
                        styleSheetRuleCb: t,
                        mirror: e
                    }, {
                        win: n
                    }) {
                        if (!n.CSSStyleSheet || !n.CSSStyleSheet.prototype) return () => {};
                        let r = n.CSSStyleSheet.prototype.insertRule;
                        n.CSSStyleSheet.prototype.insertRule = new Proxy(r, {
                            apply: tE((n, r, i) => {
                                let [a, o] = i, s = e.getId(r.ownerNode);
                                return -1 !== s && t({
                                    id: s,
                                    adds: [{
                                        rule: a,
                                        index: o
                                    }]
                                }), n.apply(r, i)
                            })
                        });
                        let i = n.CSSStyleSheet.prototype.deleteRule;
                        n.CSSStyleSheet.prototype.deleteRule = new Proxy(i, {
                            apply: tE((n, r, i) => {
                                let [a] = i, o = e.getId(r.ownerNode);
                                return -1 !== o && t({
                                    id: o,
                                    removes: [{
                                        index: a
                                    }]
                                }), n.apply(r, i)
                            })
                        });
                        let a = {};
                        tC("CSSGroupingRule") ? a.CSSGroupingRule = n.CSSGroupingRule : (tC("CSSMediaRule") && (a.CSSMediaRule = n.CSSMediaRule), tC("CSSConditionRule") && (a.CSSConditionRule = n.CSSConditionRule), tC("CSSSupportsRule") && (a.CSSSupportsRule = n.CSSSupportsRule));
                        let o = {};
                        return Object.entries(a).forEach(([n, r]) => {
                            o[n] = {
                                insertRule: r.prototype.insertRule,
                                deleteRule: r.prototype.deleteRule
                            }, r.prototype.insertRule = new Proxy(o[n].insertRule, {
                                apply: tE((n, r, i) => {
                                    let [a, o] = i, s = e.getId(r.parentStyleSheet.ownerNode);
                                    return -1 !== s && t({
                                        id: s,
                                        adds: [{
                                            rule: a,
                                            index: [...tD(r), o || 0]
                                        }]
                                    }), n.apply(r, i)
                                })
                            }), r.prototype.deleteRule = new Proxy(o[n].deleteRule, {
                                apply: tE((n, r, i) => {
                                    let [a] = i, o = e.getId(r.parentStyleSheet.ownerNode);
                                    return -1 !== o && t({
                                        id: o,
                                        removes: [{
                                            index: [...tD(r), a]
                                        }]
                                    }), n.apply(r, i)
                                })
                            })
                        }), tE(() => {
                            n.CSSStyleSheet.prototype.insertRule = r, n.CSSStyleSheet.prototype.deleteRule = i, Object.entries(a).forEach(([t, e]) => {
                                e.prototype.insertRule = o[t].insertRule, e.prototype.deleteRule = o[t].deleteRule
                            })
                        })
                    }(t, {
                        win: n
                    }),
                    d = function({
                        styleDeclarationCb: t,
                        mirror: e
                    }, {
                        win: n
                    }) {
                        let r = n.CSSStyleDeclaration.prototype.setProperty;
                        n.CSSStyleDeclaration.prototype.setProperty = new Proxy(r, {
                            apply: tE((n, r, i) => {
                                var a, o;
                                let [s, u, c] = i, l = e.getId(null === (o = null === (a = r.parentRule) || void 0 === a ? void 0 : a.parentStyleSheet) || void 0 === o ? void 0 : o.ownerNode);
                                return -1 !== l && t({
                                    id: l,
                                    set: {
                                        property: s,
                                        value: u,
                                        priority: c
                                    },
                                    index: tD(r.parentRule)
                                }), n.apply(r, i)
                            })
                        });
                        let i = n.CSSStyleDeclaration.prototype.removeProperty;
                        return n.CSSStyleDeclaration.prototype.removeProperty = new Proxy(i, {
                            apply: tE((n, r, i) => {
                                var a, o;
                                let [s] = i, u = e.getId(null === (o = null === (a = r.parentRule) || void 0 === a ? void 0 : a.parentStyleSheet) || void 0 === o ? void 0 : o.ownerNode);
                                return -1 !== u && t({
                                    id: u,
                                    remove: {
                                        property: s
                                    },
                                    index: tD(r.parentRule)
                                }), n.apply(r, i)
                            })
                        }), tE(() => {
                            n.CSSStyleDeclaration.prototype.setProperty = r, n.CSSStyleDeclaration.prototype.removeProperty = i
                        })
                    }(t, {
                        win: n
                    }),
                    f = t.collectFonts ? function({
                        fontCb: t,
                        doc: e
                    }) {
                        let n = e.defaultView;
                        if (!n) return () => {};
                        let r = [],
                            i = new WeakMap,
                            a = n.FontFace;
                        n.FontFace = function(t, e, n) {
                            let r = new a(t, e, n);
                            return i.set(r, {
                                family: t,
                                buffer: "string" != typeof e,
                                descriptors: n,
                                fontSource: "string" == typeof e ? e : JSON.stringify(Array.from(new Uint8Array(e)))
                            }), r
                        };
                        let o = ta(e.fonts, "add", function(e) {
                            return function(n) {
                                return setTimeout(() => {
                                    let e = i.get(n);
                                    e && (t(e), i.delete(n))
                                }, 0), e.apply(this, [n])
                            }
                        });
                        return r.push(() => {
                            n.FontFace = a
                        }), r.push(o), tE(() => {
                            r.forEach(t => t())
                        })
                    }(t) : () => {},
                    p = [];
                for (let e of t.plugins) p.push(e.observer(e.callback, n, e.options));
                return tE(() => {
                    tS.forEach(t => t.reset()), r.disconnect(), i(), a(), o(), s(), u(), c();
                    try {
                        l(), d()
                    } catch (t) {}
                    f(), p.forEach(t => t())
                })
            }

            function tO(t) {
                return void 0 !== window[t]
            }

            function tC(t) {
                return !!(void 0 !== window[t] && window[t].prototype && "insertRule" in window[t].prototype && "deleteRule" in window[t].prototype)
            }
            class tA {
                constructor(t) {
                    this.iframes = new WeakMap, this.mutationCb = t.mutationCb
                }
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
            }
            class tB {
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
                addShadowRoot(t, e) {
                    tT(Object.assign(Object.assign({}, this.bypassOptions), {
                        doc: e,
                        mutationCb: this.mutationCb,
                        mirror: this.mirror,
                        shadowDomManager: this
                    }), t), tk(Object.assign(Object.assign({}, this.bypassOptions), {
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
            }
            for (var tU = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", tM = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), tL = 0; tL < tU.length; tL++) tM[tU.charCodeAt(tL)] = tL;
            var tP = function(t) {
                var e, n = new Uint8Array(t),
                    r = n.length,
                    i = "";
                for (e = 0; e < r; e += 3) i += tU[n[e] >> 2] + tU[(3 & n[e]) << 4 | n[e + 1] >> 4] + tU[(15 & n[e + 1]) << 2 | n[e + 2] >> 6] + tU[63 & n[e + 2]];
                return r % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : r % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i
            };
            let tG = new Map,
                tF = (t, e, n) => {
                    var r, i;
                    let a;
                    if (!t || !(tz(t, e) || "object" == typeof t)) return;
                    let o = t.constructor.name;
                    let s = (r = n, i = o, !(a = tG.get(r)) && (a = new Map, tG.set(r, a)), !a.has(i) && a.set(i, []), a.get(i)),
                        u = s.indexOf(t);
                    return -1 === u && (u = s.length, s.push(t)), u
                },
                tY = (t, e, n) => [...t].map(t => (function t(e, n, r) {
                    if (e instanceof Array) return e.map(e => t(e, n, r));
                    if (null === e);
                    else if (e instanceof Float32Array || e instanceof Float64Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Int8Array || e instanceof Uint8ClampedArray) return {
                        rr_type: e.constructor.name,
                        args: [Object.values(e)]
                    };
                    else if (e instanceof ArrayBuffer) {
                        let t = e.constructor.name;
                        return {
                            rr_type: t,
                            base64: tP(e)
                        }
                    } else if (e instanceof DataView) return {
                        rr_type: e.constructor.name,
                        args: [t(e.buffer, n, r), e.byteOffset, e.byteLength]
                    };
                    else if (e instanceof HTMLImageElement) {
                        let t = e.constructor.name,
                            {
                                src: n
                            } = e;
                        return {
                            rr_type: t,
                            src: n
                        }
                    } else if (e instanceof ImageData) return {
                        rr_type: e.constructor.name,
                        args: [t(e.data, n, r), e.width, e.height]
                    };
                    else if (tz(e, n) || "object" == typeof e) {
                        let t = e.constructor.name;
                        return {
                            rr_type: t,
                            index: tF(e, n, r)
                        }
                    }
                    return e
                })(t, e, n)),
                tz = (t, e) => !!["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter(t => "function" == typeof e[t]).find(n => t instanceof e[n]);

            function tj(t, e, n, r, i, a, o, s) {
                let u = [];
                for (let c of Object.getOwnPropertyNames(t)) try {
                    if ("function" != typeof t[c]) continue;
                    let l = ta(t, c, function(u) {
                        return function(...l) {
                            let d = u.apply(this, l);
                            if (tF(d, s, t), !tu(this.canvas, r, a, i)) {
                                o.getId(this.canvas);
                                let r = tY([...l], s, t),
                                    i = {
                                        type: e,
                                        property: c,
                                        args: r
                                    };
                                n(this.canvas, i)
                            }
                            return d
                        }
                    });
                    u.push(l)
                } catch (i) {
                    let r = ti(t, c, {
                        set(t) {
                            n(this.canvas, {
                                type: e,
                                property: c,
                                args: [t],
                                setter: !0
                            })
                        }
                    });
                    u.push(r)
                }
                return u
            }
            class tH {
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
                constructor(t) {
                    this.pendingCanvasMutations = new Map, this.rafStamps = {
                        latestId: 0,
                        invokeId: null
                    }, this.frozen = !1, this.locked = !1, this.processMutation = function(t, e) {
                        (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), !this.pendingCanvasMutations.has(t) && this.pendingCanvasMutations.set(t, []), this.pendingCanvasMutations.get(t).push(e)
                    }, this.mutationCb = t.mutationCb, this.mirror = t.mirror, !0 === t.recordCanvas && this.initCanvasMutationObserver(t.win, t.blockClass, t.blockSelector, t.unblockSelector)
                }
                initCanvasMutationObserver(t, e, n, r) {
                    this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
                    let i = function(t, e, n, r) {
                            let i = [];
                            try {
                                let a = ta(t.HTMLCanvasElement.prototype, "getContext", function(t) {
                                    return function(i, ...a) {
                                        return !tu(this, e, n, r) && !("__context" in this) && (this.__context = i), t.apply(this, [i, ...a])
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
                            let o = [];
                            for (let a of Object.getOwnPropertyNames(e.CanvasRenderingContext2D.prototype)) try {
                                if ("function" != typeof e.CanvasRenderingContext2D.prototype[a]) continue;
                                let s = ta(e.CanvasRenderingContext2D.prototype, a, function(e) {
                                    return function(...o) {
                                        return !tu(this.canvas, n, i, r) && setTimeout(() => {
                                            let e = [...o];
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
                                        }, 0), e.apply(this, o)
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
                            return o.push(...tj(e.WebGLRenderingContext.prototype, b.WebGL, t, n, r, i, a, e)), void 0 !== e.WebGL2RenderingContext && o.push(...tj(e.WebGL2RenderingContext.prototype, b.WebGL2, t, n, r, i, a, e)), () => {
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
                    let r = n.map(t => (function(t, e) {
                            var n = {};
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && 0 > e.indexOf(r) && (n[r] = t[r]);
                            if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                                for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++) 0 > e.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
                            return n
                        })(t, ["type"])),
                        {
                            type: i
                        } = n[0];
                    this.mutationCb({
                        id: e,
                        type: i,
                        commands: r
                    }), this.pendingCanvasMutations.delete(t)
                }
            }

            function t$(t) {
                return Object.assign(Object.assign({}, t), {
                    timestamp: Date.now()
                })
            }
            let tW = {
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

            function tq(t = {}) {
                let e;
                let {
                    emit: n,
                    checkoutEveryNms: r,
                    checkoutEveryNth: i,
                    blockClass: s = "rr-block",
                    blockSelector: u = null,
                    unblockSelector: c = null,
                    ignoreClass: l = "rr-ignore",
                    ignoreSelector: d = null,
                    maskTextClass: f = "rr-mask",
                    maskTextSelector: p = null,
                    maskInputSelector: h = null,
                    unmaskTextSelector: _ = null,
                    unmaskInputSelector: g = null,
                    inlineStylesheet: v = !0,
                    maskAllText: b = !1,
                    maskAllInputs: E,
                    maskInputOptions: S,
                    slimDOMOptions: w,
                    maskInputFn: T,
                    maskTextFn: k,
                    hooks: x,
                    packFn: R,
                    sampling: N = {},
                    mousemoveWait: D,
                    recordCanvas: I = !1,
                    userTriggeredOnInput: O = !1,
                    collectFonts: C = !1,
                    inlineImages: A = !1,
                    plugins: B,
                    keepIframeSrcFn: U = () => !1,
                    onMutation: M
                } = t;
                if (!n) throw Error("emit function is required");
                void 0 !== D && void 0 === N.mousemove && (N.mousemove = D);
                let L = !0 === E ? {
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
                    } : void 0 !== S ? S : {},
                    P = !0 === w || "all" === w ? {
                        script: !0,
                        comment: !0,
                        headFavicon: !0,
                        headWhitespace: !0,
                        headMetaSocial: !0,
                        headMetaRobots: !0,
                        headMetaHttpEquiv: !0,
                        headMetaVerification: !0,
                        headMetaAuthorship: "all" === w,
                        headMetaDescKeywords: "all" === w
                    } : w || {};
                ! function(t = window) {
                    "NodeList" in t && !t.NodeList.prototype.forEach && (t.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in t && !t.DOMTokenList.prototype.forEach && (t.DOMTokenList.prototype.forEach = Array.prototype.forEach), !Node.prototype.contains && (Node.prototype.contains = function(t) {
                        if (!(0 in arguments)) throw TypeError("1 argument is required");
                        do
                            if (this === t) return !0; while (t = t && t.parentNode);
                        return !1
                    })
                }();
                let G = 0,
                    F = t => {
                        for (let e of B || []) e.eventProcessor && (t = e.eventProcessor(t));
                        return R && (t = R(t)), t
                    };
                a = (t, a) => {
                    var s;
                    if ((null === (s = tS[0]) || void 0 === s ? void 0 : s.isFrozen()) && t.type !== m.FullSnapshot && !(t.type === m.IncrementalSnapshot && t.data.source === y.Mutation) && tS.forEach(t => t.unfreeze()), n(F(t), a), t.type === m.FullSnapshot) e = t, G = 0;
                    else if (t.type === m.IncrementalSnapshot) {
                        if (t.data.source === y.Mutation && t.data.isAttachIframe) return;
                        G++;
                        let n = i && G >= i,
                            a = r && t.timestamp - e.timestamp > r;
                        (n || a) && o(!0)
                    }
                };
                let Y = t => {
                        a(t$({
                            type: m.IncrementalSnapshot,
                            data: Object.assign({
                                source: y.Mutation
                            }, t)
                        }))
                    },
                    z = t => a(t$({
                        type: m.IncrementalSnapshot,
                        data: Object.assign({
                            source: y.Scroll
                        }, t)
                    })),
                    j = t => a(t$({
                        type: m.IncrementalSnapshot,
                        data: Object.assign({
                            source: y.CanvasMutation
                        }, t)
                    })),
                    H = new tA({
                        mutationCb: Y
                    }),
                    $ = new tH({
                        recordCanvas: I,
                        mutationCb: j,
                        win: window,
                        blockClass: s,
                        blockSelector: u,
                        unblockSelector: c,
                        mirror: tW
                    }),
                    W = new tB({
                        mutationCb: Y,
                        scrollCb: z,
                        bypassOptions: {
                            onMutation: M,
                            blockClass: s,
                            blockSelector: u,
                            unblockSelector: c,
                            maskTextClass: f,
                            maskTextSelector: p,
                            unmaskTextSelector: _,
                            maskInputSelector: h,
                            unmaskInputSelector: g,
                            inlineStylesheet: v,
                            maskAllText: b,
                            maskInputOptions: L,
                            maskTextFn: k,
                            maskInputFn: T,
                            recordCanvas: I,
                            inlineImages: A,
                            sampling: N,
                            slimDOMOptions: P,
                            iframeManager: H,
                            canvasManager: $
                        },
                        mirror: tW
                    });
                o = (t = !1) => {
                    var e, n, r, i;
                    a(t$({
                        type: m.Meta,
                        data: {
                            href: window.location.href,
                            width: ts(),
                            height: to()
                        }
                    }), t), tS.forEach(t => t.lock());
                    let [o, l] = function(t, e) {
                        let {
                            blockClass: n = "rr-block",
                            blockSelector: r = null,
                            unblockSelector: i = null,
                            maskTextClass: a = "rr-mask",
                            maskTextSelector: o = null,
                            unmaskTextSelector: s = null,
                            inlineStylesheet: u = !0,
                            inlineImages: c = !1,
                            recordCanvas: l = !1,
                            maskInputSelector: d = null,
                            unmaskInputSelector: f = null,
                            maskAllText: p = !1,
                            maskAllInputs: h = !1,
                            maskTextFn: _,
                            maskInputFn: g,
                            slimDOM: m = !1,
                            dataURLOptions: y,
                            preserveWhiteSpace: v,
                            onSerialize: b,
                            onIframeLoad: E,
                            iframeLoadTimeout: S,
                            keepIframeSrcFn: w = () => !1
                        } = e || {}, T = {};
                        return [Q(t, {
                            doc: t,
                            map: T,
                            blockClass: n,
                            blockSelector: r,
                            unblockSelector: i,
                            maskTextClass: a,
                            maskTextSelector: o,
                            unmaskTextSelector: s,
                            skipChild: !1,
                            inlineStylesheet: u,
                            maskInputSelector: d,
                            unmaskInputSelector: f,
                            maskAllText: p,
                            maskInputOptions: !0 === h ? {
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
                            } : !1 === h ? {} : h,
                            maskTextFn: _,
                            maskInputFn: g,
                            slimDOMOptions: !0 === m || "all" === m ? {
                                script: !0,
                                comment: !0,
                                headFavicon: !0,
                                headWhitespace: !0,
                                headMetaDescKeywords: "all" === m,
                                headMetaSocial: !0,
                                headMetaRobots: !0,
                                headMetaHttpEquiv: !0,
                                headMetaAuthorship: !0,
                                headMetaVerification: !0
                            } : !1 === m ? {} : m,
                            dataURLOptions: y,
                            inlineImages: c,
                            recordCanvas: l,
                            preserveWhiteSpace: v,
                            onSerialize: b,
                            onIframeLoad: E,
                            iframeLoadTimeout: S,
                            keepIframeSrcFn: w
                        }), T]
                    }(document, {
                        blockClass: s,
                        blockSelector: u,
                        unblockSelector: c,
                        maskTextClass: f,
                        maskTextSelector: p,
                        unmaskTextSelector: _,
                        maskInputSelector: h,
                        unmaskInputSelector: g,
                        inlineStylesheet: v,
                        maskAllText: b,
                        maskAllInputs: L,
                        maskTextFn: k,
                        slimDOM: P,
                        recordCanvas: I,
                        inlineImages: A,
                        onSerialize: t => {
                            td(t) && H.addIframe(t), tf(t) && W.addShadowRoot(t.shadowRoot, document)
                        },
                        onIframeLoad: (t, e) => {
                            H.attachIframe(t, e), W.observeAttachShadow(t)
                        },
                        keepIframeSrcFn: U
                    });
                    if (!o) return console.warn("Failed to snapshot the document");
                    tW.map = l, a(t$({
                        type: m.FullSnapshot,
                        data: {
                            node: o,
                            initialOffset: {
                                left: void 0 !== window.pageXOffset ? window.pageXOffset : (null == document ? void 0 : document.documentElement.scrollLeft) || (null === (n = null === (e = null == document ? void 0 : document.body) || void 0 === e ? void 0 : e.parentElement) || void 0 === n ? void 0 : n.scrollLeft) || (null == document ? void 0 : document.body.scrollLeft) || 0,
                                top: void 0 !== window.pageYOffset ? window.pageYOffset : (null == document ? void 0 : document.documentElement.scrollTop) || (null === (i = null === (r = null == document ? void 0 : document.body) || void 0 === r ? void 0 : r.parentElement) || void 0 === i ? void 0 : i.scrollTop) || (null == document ? void 0 : document.body.scrollTop) || 0
                            }
                        }
                    })), tS.forEach(t => t.unlock())
                };
                try {
                    let t = [];
                    t.push(tt("DOMContentLoaded", () => {
                        a(t$({
                            type: m.DomContentLoaded,
                            data: {}
                        }))
                    }));
                    let e = t => {
                        var e;
                        return tE(tI)({
                            onMutation: M,
                            mutationCb: Y,
                            mousemoveCb: (t, e) => a(t$({
                                type: m.IncrementalSnapshot,
                                data: {
                                    source: e,
                                    positions: t
                                }
                            })),
                            mouseInteractionCb: t => a(t$({
                                type: m.IncrementalSnapshot,
                                data: Object.assign({
                                    source: y.MouseInteraction
                                }, t)
                            })),
                            scrollCb: z,
                            viewportResizeCb: t => a(t$({
                                type: m.IncrementalSnapshot,
                                data: Object.assign({
                                    source: y.ViewportResize
                                }, t)
                            })),
                            inputCb: t => a(t$({
                                type: m.IncrementalSnapshot,
                                data: Object.assign({
                                    source: y.Input
                                }, t)
                            })),
                            mediaInteractionCb: t => a(t$({
                                type: m.IncrementalSnapshot,
                                data: Object.assign({
                                    source: y.MediaInteraction
                                }, t)
                            })),
                            styleSheetRuleCb: t => a(t$({
                                type: m.IncrementalSnapshot,
                                data: Object.assign({
                                    source: y.StyleSheetRule
                                }, t)
                            })),
                            styleDeclarationCb: t => a(t$({
                                type: m.IncrementalSnapshot,
                                data: Object.assign({
                                    source: y.StyleDeclaration
                                }, t)
                            })),
                            canvasMutationCb: j,
                            fontCb: t => a(t$({
                                type: m.IncrementalSnapshot,
                                data: Object.assign({
                                    source: y.Font
                                }, t)
                            })),
                            blockClass: s,
                            ignoreClass: l,
                            ignoreSelector: d,
                            maskTextClass: f,
                            maskTextSelector: p,
                            unmaskTextSelector: _,
                            maskInputSelector: h,
                            unmaskInputSelector: g,
                            maskInputOptions: L,
                            inlineStylesheet: v,
                            sampling: N,
                            recordCanvas: I,
                            inlineImages: A,
                            userTriggeredOnInput: O,
                            collectFonts: C,
                            doc: t,
                            maskAllText: b,
                            maskInputFn: T,
                            maskTextFn: k,
                            blockSelector: u,
                            unblockSelector: c,
                            slimDOMOptions: P,
                            mirror: tW,
                            iframeManager: H,
                            shadowDomManager: W,
                            canvasManager: $,
                            plugins: (null === (e = null == B ? void 0 : B.filter(t => t.observer)) || void 0 === e ? void 0 : e.map(t => ({
                                observer: t.observer,
                                options: t.options,
                                callback: e => a(t$({
                                    type: m.Plugin,
                                    data: {
                                        plugin: t.name,
                                        payload: e
                                    }
                                }))
                            }))) || []
                        }, x)
                    };
                    H.addLoadListener(n => {
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
                        a(t$({
                            type: m.Load,
                            data: {}
                        })), n()
                    }, window)), () => {
                        t.forEach(t => t())
                    }
                } catch (t) {
                    console.warn(t)
                }
            }

            function tZ(t) {
                return t > 9999999999 ? t : 1e3 * t
            }
            tq.addCustomEvent = (t, e) => {
                if (!a) throw Error("please add custom event after start recording");
                a(t$({
                    type: m.Custom,
                    data: {
                        tag: t,
                        payload: e
                    }
                }))
            }, tq.freezePage = () => {
                tS.forEach(t => t.freeze())
            }, tq.takeFullSnapshot = t => {
                if (!o) throw Error("please take full snapshot after start recording");
                o(t)
            }, tq.mirror = tW;

            function tV(t, e) {
                "sentry.transaction" !== e.category && (["ui.click", "ui.input"].includes(e.category) ? t.triggerUserActivity() : t.checkAndHandleExpiredSession(), t.addUpdate(() => (t.throttledAddEvent({
                    type: m.Custom,
                    timestamp: 1e3 * (e.timestamp || 0),
                    data: {
                        tag: "breadcrumb",
                        payload: (0, k.normalize)(e, 10, 1e3)
                    }
                }), "console" === e.category)))
            }

            function tJ(t) {
                let e = tK(t);
                return e && e instanceof Element && e.closest("button,a") || e
            }

            function tK(t) {
                return function(t) {
                    return "object" == typeof t && !!t && "target" in t
                }(t) ? t.target : t
            }
            class tX {
                __init() {
                    this._lastMutation = 0
                }
                __init2() {
                    this._lastScroll = 0
                }
                __init3() {
                    this._clicks = []
                }
                constructor(t, e, n = tV) {
                    tX.prototype.__init.call(this), tX.prototype.__init2.call(this), tX.prototype.__init3.call(this), this._timeout = e.timeout / 1e3, this._threshold = e.threshold / 1e3, this._scollTimeout = e.scrollTimeout / 1e3, this._replay = t, this._ignoreSelector = e.ignoreSelector, this._addBreadcrumbEvent = n
                }
                addListeners() {
                    var t;
                    let e = () => {
                        this._lastScroll = t0()
                    };
                    let n = (t = () => {
                            this._lastMutation = t0()
                        }, !s && (s = [], function() {
                            (0, k.fill)(R, "open", function(t) {
                                return function(...e) {
                                    if (s) try {
                                        s.forEach(t => t())
                                    } catch (t) {}
                                    return t.apply(R, e)
                                }
                            })
                        }()), s.push(t), () => {
                            let e = s ? s.indexOf(t) : -1;
                            e > -1 && s.splice(e, 1)
                        }),
                        r = t => {
                            if (!t.target) return;
                            let e = tJ(t);
                            e && this._handleMultiClick(e)
                        },
                        i = new MutationObserver(() => {
                            this._lastMutation = t0()
                        });
                    i.observe(R.document.documentElement, {
                        attributes: !0,
                        characterData: !0,
                        childList: !0,
                        subtree: !0
                    }), R.addEventListener("scroll", e, {
                        passive: !0
                    }), R.addEventListener("click", r, {
                        passive: !0
                    }), this._teardown = () => {
                        R.removeEventListener("scroll", e), R.removeEventListener("click", r), n(), i.disconnect(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0
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
                                    url: R.location.href,
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
                                url: R.location.href,
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
            }(_ = w || (w = {}))[_.Document = 0] = "Document", _[_.DocumentType = 1] = "DocumentType", _[_.Element = 2] = "Element", _[_.Text = 3] = "Text", _[_.CDATA = 4] = "CDATA", _[_.Comment = 5] = "Comment";
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
                                r = n ? tJ(t.event) : tK(t.event), e = (0, k.htmlTreeAsString)(r, {
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
                            category: `ui.${t.name}`,
                            ...t3(e, n)
                        })
                    }(e);
                    if (!n) return;
                    let r = "click" === e.name,
                        i = r && e.event;
                    r && t.clickDetector && i && !i.altKey && !i.metaKey && !i.ctrlKey && !i.shiftKey && ! function(t, e, n) {
                        t.handleClick(e, n)
                    }(t.clickDetector, n, tJ(e.event)), tV(t, n)
                };

            function t3(t, e) {
                let n = t && function(t) {
                    return "__sn" in t
                }(t) && t.__sn.type === w.Element ? t.__sn : null;
                return {
                    message: e,
                    data: n ? {
                        nodeId: n.id,
                        node: {
                            id: n.id,
                            tagName: n.tagName,
                            textContent: t ? Array.from(t.childNodes).map(t => "__sn" in t && t.__sn.type === w.Text && t.__sn.textContent).filter(Boolean).map(t => t.trim()).join("") : "",
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
            let t8 = `/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
function t(t){let e=t.length;for(;--e>=0;)t[e]=0}const e=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),a=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),i=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),n=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=new Array(576);t(s);const r=new Array(60);t(r);const o=new Array(512);t(o);const l=new Array(256);t(l);const h=new Array(29);t(h);const d=new Array(30);function _(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}let f,c,u;function w(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}t(d);const m=t=>t<256?o[t]:o[256+(t>>>7)],b=(t,e)=>{t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},g=(t,e,a)=>{t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,b(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},p=(t,e,a)=>{g(t,a[2*e],a[2*e+1])},k=(t,e)=>{let a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},v=(t,e,a)=>{const i=new Array(16);let n,s,r=0;for(n=1;n<=15;n++)r=r+a[n-1]<<1,i[n]=r;for(s=0;s<=e;s++){let e=t[2*s+1];0!==e&&(t[2*s]=k(i[e]++,e))}},y=t=>{let e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.sym_next=t.matches=0},x=t=>{t.bi_valid>8?b(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},z=(t,e,a,i)=>{const n=2*e,s=2*a;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[a]},A=(t,e,a)=>{const i=t.heap[a];let n=a<<1;for(;n<=t.heap_len&&(n<t.heap_len&&z(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!z(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i},E=(t,i,n)=>{let s,r,o,_,f=0;if(0!==t.sym_next)do{s=255&t.pending_buf[t.sym_buf+f++],s+=(255&t.pending_buf[t.sym_buf+f++])<<8,r=t.pending_buf[t.sym_buf+f++],0===s?p(t,r,i):(o=l[r],p(t,o+256+1,i),_=e[o],0!==_&&(r-=h[o],g(t,r,_)),s--,o=m(s),p(t,o,n),_=a[o],0!==_&&(s-=d[o],g(t,s,_)))}while(f<t.sym_next);p(t,256,i)},R=(t,e)=>{const a=e.dyn_tree,i=e.stat_desc.static_tree,n=e.stat_desc.has_stree,s=e.stat_desc.elems;let r,o,l,h=-1;for(t.heap_len=0,t.heap_max=573,r=0;r<s;r++)0!==a[2*r]?(t.heap[++t.heap_len]=h=r,t.depth[r]=0):a[2*r+1]=0;for(;t.heap_len<2;)l=t.heap[++t.heap_len]=h<2?++h:0,a[2*l]=1,t.depth[l]=0,t.opt_len--,n&&(t.static_len-=i[2*l+1]);for(e.max_code=h,r=t.heap_len>>1;r>=1;r--)A(t,a,r);l=s;do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],A(t,a,1),o=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=o,a[2*l]=a[2*r]+a[2*o],t.depth[l]=(t.depth[r]>=t.depth[o]?t.depth[r]:t.depth[o])+1,a[2*r+1]=a[2*o+1]=l,t.heap[1]=l++,A(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],((t,e)=>{const a=e.dyn_tree,i=e.max_code,n=e.stat_desc.static_tree,s=e.stat_desc.has_stree,r=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,l=e.stat_desc.max_length;let h,d,_,f,c,u,w=0;for(f=0;f<=15;f++)t.bl_count[f]=0;for(a[2*t.heap[t.heap_max]+1]=0,h=t.heap_max+1;h<573;h++)d=t.heap[h],f=a[2*a[2*d+1]+1]+1,f>l&&(f=l,w++),a[2*d+1]=f,d>i||(t.bl_count[f]++,c=0,d>=o&&(c=r[d-o]),u=a[2*d],t.opt_len+=u*(f+c),s&&(t.static_len+=u*(n[2*d+1]+c)));if(0!==w){do{for(f=l-1;0===t.bl_count[f];)f--;t.bl_count[f]--,t.bl_count[f+1]+=2,t.bl_count[l]--,w-=2}while(w>0);for(f=l;0!==f;f--)for(d=t.bl_count[f];0!==d;)_=t.heap[--h],_>i||(a[2*_+1]!==f&&(t.opt_len+=(f-a[2*_+1])*a[2*_],a[2*_+1]=f),d--)}})(t,e),v(a,h,t.bl_count)},Z=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=r,r=e[2*(i+1)+1],++o<l&&n===r||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[32]++):o<=10?t.bl_tree[34]++:t.bl_tree[36]++,o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4))},U=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),i=0;i<=a;i++)if(n=r,r=e[2*(i+1)+1],!(++o<l&&n===r)){if(o<h)do{p(t,n,t.bl_tree)}while(0!=--o);else 0!==n?(n!==s&&(p(t,n,t.bl_tree),o--),p(t,16,t.bl_tree),g(t,o-3,2)):o<=10?(p(t,17,t.bl_tree),g(t,o-3,3)):(p(t,18,t.bl_tree),g(t,o-11,7));o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4)}};let S=!1;const D=(t,e,a,i)=>{g(t,0+(i?1:0),3),x(t),b(t,a),b(t,~a),a&&t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a};var T=(t,e,a,i)=>{let o,l,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0})(t)),R(t,t.l_desc),R(t,t.d_desc),h=(t=>{let e;for(Z(t,t.dyn_ltree,t.l_desc.max_code),Z(t,t.dyn_dtree,t.d_desc.max_code),R(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*n[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e})(t),o=t.opt_len+3+7>>>3,l=t.static_len+3+7>>>3,l<=o&&(o=l)):o=l=a+5,a+4<=o&&-1!==e?D(t,e,a,i):4===t.strategy||l===o?(g(t,2+(i?1:0),3),E(t,s,r)):(g(t,4+(i?1:0),3),((t,e,a,i)=>{let s;for(g(t,e-257,5),g(t,a-1,5),g(t,i-4,4),s=0;s<i;s++)g(t,t.bl_tree[2*n[s]+1],3);U(t,t.dyn_ltree,e-1),U(t,t.dyn_dtree,a-1)})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),E(t,t.dyn_ltree,t.dyn_dtree)),y(t),i&&x(t)},O={_tr_init:t=>{S||((()=>{let t,n,w,m,b;const g=new Array(16);for(w=0,m=0;m<28;m++)for(h[m]=w,t=0;t<1<<e[m];t++)l[w++]=m;for(l[w-1]=m,b=0,m=0;m<16;m++)for(d[m]=b,t=0;t<1<<a[m];t++)o[b++]=m;for(b>>=7;m<30;m++)for(d[m]=b<<7,t=0;t<1<<a[m]-7;t++)o[256+b++]=m;for(n=0;n<=15;n++)g[n]=0;for(t=0;t<=143;)s[2*t+1]=8,t++,g[8]++;for(;t<=255;)s[2*t+1]=9,t++,g[9]++;for(;t<=279;)s[2*t+1]=7,t++,g[7]++;for(;t<=287;)s[2*t+1]=8,t++,g[8]++;for(v(s,287,g),t=0;t<30;t++)r[2*t+1]=5,r[2*t]=k(t,5);f=new _(s,e,257,286,15),c=new _(r,a,0,30,15),u=new _(new Array(0),i,0,19,7)})(),S=!0),t.l_desc=new w(t.dyn_ltree,f),t.d_desc=new w(t.dyn_dtree,c),t.bl_desc=new w(t.bl_tree,u),t.bi_buf=0,t.bi_valid=0,y(t)},_tr_stored_block:D,_tr_flush_block:T,_tr_tally:(t,e,a)=>(t.pending_buf[t.sym_buf+t.sym_next++]=e,t.pending_buf[t.sym_buf+t.sym_next++]=e>>8,t.pending_buf[t.sym_buf+t.sym_next++]=a,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(l[a]+256+1)]++,t.dyn_dtree[2*m(e)]++),t.sym_next===t.sym_end),_tr_align:t=>{g(t,2,3),p(t,256,s),(t=>{16===t.bi_valid?(b(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)})(t)}};var F=(t,e,a,i)=>{let n=65535&t|0,s=t>>>16&65535|0,r=0;for(;0!==a;){r=a>2e3?2e3:a,a-=r;do{n=n+e[i++]|0,s=s+n|0}while(--r);n%=65521,s%=65521}return n|s<<16|0};const L=new Uint32Array((()=>{let t,e=[];for(var a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e})());var N=(t,e,a,i)=>{const n=L,s=i+a;t^=-1;for(let a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t},I={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},B={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:C,_tr_stored_block:H,_tr_flush_block:M,_tr_tally:j,_tr_align:K}=O,{Z_NO_FLUSH:P,Z_PARTIAL_FLUSH:Y,Z_FULL_FLUSH:G,Z_FINISH:X,Z_BLOCK:W,Z_OK:q,Z_STREAM_END:J,Z_STREAM_ERROR:Q,Z_DATA_ERROR:V,Z_BUF_ERROR:$,Z_DEFAULT_COMPRESSION:tt,Z_FILTERED:et,Z_HUFFMAN_ONLY:at,Z_RLE:it,Z_FIXED:nt,Z_DEFAULT_STRATEGY:st,Z_UNKNOWN:rt,Z_DEFLATED:ot}=B,lt=(t,e)=>(t.msg=I[e],e),ht=t=>2*t-(t>4?9:0),dt=t=>{let e=t.length;for(;--e>=0;)t[e]=0},_t=t=>{let e,a,i,n=t.w_size;e=t.hash_size,i=e;do{a=t.head[--i],t.head[i]=a>=n?a-n:0}while(--e);e=n,i=e;do{a=t.prev[--i],t.prev[i]=a>=n?a-n:0}while(--e)};let ft=(t,e,a)=>(e<<t.hash_shift^a)&t.hash_mask;const ct=t=>{const e=t.state;let a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},ut=(t,e)=>{M(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,ct(t.strm)},wt=(t,e)=>{t.pending_buf[t.pending++]=e},mt=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},bt=(t,e,a,i)=>{let n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,e.set(t.input.subarray(t.next_in,t.next_in+n),a),1===t.state.wrap?t.adler=F(t.adler,e,n,a):2===t.state.wrap&&(t.adler=N(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)},gt=(t,e)=>{let a,i,n=t.max_chain_length,s=t.strstart,r=t.prev_length,o=t.nice_match;const l=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,h=t.window,d=t.w_mask,_=t.prev,f=t.strstart+258;let c=h[s+r-1],u=h[s+r];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(a=e,h[a+r]===u&&h[a+r-1]===c&&h[a]===h[s]&&h[++a]===h[s+1]){s+=2,a++;do{}while(h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&s<f);if(i=258-(f-s),s=f-258,i>r){if(t.match_start=e,r=i,i>=o)break;c=h[s+r-1],u=h[s+r]}}}while((e=_[e&d])>l&&0!=--n);return r<=t.lookahead?r:t.lookahead},pt=t=>{const e=t.w_size;let a,i,n;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-262)&&(t.window.set(t.window.subarray(e,e+e-i),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,t.insert>t.strstart&&(t.insert=t.strstart),_t(t),i+=e),0===t.strm.avail_in)break;if(a=bt(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=a,t.lookahead+t.insert>=3)for(n=t.strstart-t.insert,t.ins_h=t.window[n],t.ins_h=ft(t,t.ins_h,t.window[n+1]);t.insert&&(t.ins_h=ft(t,t.ins_h,t.window[n+3-1]),t.prev[n&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=n,n++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)},kt=(t,e)=>{let a,i,n,s=t.pending_buf_size-5>t.w_size?t.w_size:t.pending_buf_size-5,r=0,o=t.strm.avail_in;do{if(a=65535,n=t.bi_valid+42>>3,t.strm.avail_out<n)break;if(n=t.strm.avail_out-n,i=t.strstart-t.block_start,a>i+t.strm.avail_in&&(a=i+t.strm.avail_in),a>n&&(a=n),a<s&&(0===a&&e!==X||e===P||a!==i+t.strm.avail_in))break;r=e===X&&a===i+t.strm.avail_in?1:0,H(t,0,0,r),t.pending_buf[t.pending-4]=a,t.pending_buf[t.pending-3]=a>>8,t.pending_buf[t.pending-2]=~a,t.pending_buf[t.pending-1]=~a>>8,ct(t.strm),i&&(i>a&&(i=a),t.strm.output.set(t.window.subarray(t.block_start,t.block_start+i),t.strm.next_out),t.strm.next_out+=i,t.strm.avail_out-=i,t.strm.total_out+=i,t.block_start+=i,a-=i),a&&(bt(t.strm,t.strm.output,t.strm.next_out,a),t.strm.next_out+=a,t.strm.avail_out-=a,t.strm.total_out+=a)}while(0===r);return o-=t.strm.avail_in,o&&(o>=t.w_size?(t.matches=2,t.window.set(t.strm.input.subarray(t.strm.next_in-t.w_size,t.strm.next_in),0),t.strstart=t.w_size,t.insert=t.strstart):(t.window_size-t.strstart<=o&&(t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,t.insert>t.strstart&&(t.insert=t.strstart)),t.window.set(t.strm.input.subarray(t.strm.next_in-o,t.strm.next_in),t.strstart),t.strstart+=o,t.insert+=o>t.w_size-t.insert?t.w_size-t.insert:o),t.block_start=t.strstart),t.high_water<t.strstart&&(t.high_water=t.strstart),r?4:e!==P&&e!==X&&0===t.strm.avail_in&&t.strstart===t.block_start?2:(n=t.window_size-t.strstart,t.strm.avail_in>n&&t.block_start>=t.w_size&&(t.block_start-=t.w_size,t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,n+=t.w_size,t.insert>t.strstart&&(t.insert=t.strstart)),n>t.strm.avail_in&&(n=t.strm.avail_in),n&&(bt(t.strm,t.window,t.strstart,n),t.strstart+=n,t.insert+=n>t.w_size-t.insert?t.w_size-t.insert:n),t.high_water<t.strstart&&(t.high_water=t.strstart),n=t.bi_valid+42>>3,n=t.pending_buf_size-n>65535?65535:t.pending_buf_size-n,s=n>t.w_size?t.w_size:n,i=t.strstart-t.block_start,(i>=s||(i||e===X)&&e!==P&&0===t.strm.avail_in&&i<=n)&&(a=i>n?n:i,r=e===X&&0===t.strm.avail_in&&a===i?1:0,H(t,t.block_start,a,r),t.block_start+=a,ct(t.strm)),r?3:1)},vt=(t,e)=>{let a,i;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a)),t.match_length>=3)if(i=j(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=ft(t,t.ins_h,t.window[t.strstart+1]);else i=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2},yt=(t,e)=>{let a,i,n;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a),t.match_length<=5&&(t.strategy===et||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-3,i=j(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,i&&(ut(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if(i=j(t,0,t.window[t.strstart-1]),i&&ut(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=j(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2};function xt(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}const zt=[new xt(0,0,0,0,kt),new xt(4,4,8,4,vt),new xt(4,5,16,8,vt),new xt(4,6,32,32,vt),new xt(4,4,16,16,yt),new xt(8,16,32,32,yt),new xt(8,16,128,128,yt),new xt(8,32,128,256,yt),new xt(32,128,258,1024,yt),new xt(32,258,258,4096,yt)];function At(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ot,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),dt(this.dyn_ltree),dt(this.dyn_dtree),dt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),dt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),dt(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Et=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||42!==e.status&&57!==e.status&&69!==e.status&&73!==e.status&&91!==e.status&&103!==e.status&&113!==e.status&&666!==e.status?1:0},Rt=t=>{if(Et(t))return lt(t,Q);t.total_in=t.total_out=0,t.data_type=rt;const e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=2===e.wrap?57:e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=-2,C(e),q},Zt=t=>{const e=Rt(t);var a;return e===q&&((a=t.state).window_size=2*a.w_size,dt(a.head),a.max_lazy_match=zt[a.level].max_lazy,a.good_match=zt[a.level].good_length,a.nice_match=zt[a.level].nice_length,a.max_chain_length=zt[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=2,a.match_available=0,a.ins_h=0),e},Ut=(t,e,a,i,n,s)=>{if(!t)return Q;let r=1;if(e===tt&&(e=6),i<0?(r=0,i=-i):i>15&&(r=2,i-=16),n<1||n>9||a!==ot||i<8||i>15||e<0||e>9||s<0||s>nt||8===i&&1!==r)return lt(t,Q);8===i&&(i=9);const o=new At;return t.state=o,o.strm=t,o.status=42,o.wrap=r,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new Uint8Array(2*o.w_size),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=3*(o.lit_bufsize-1),o.level=e,o.strategy=s,o.method=a,Zt(t)};var St={deflateInit:(t,e)=>Ut(t,e,ot,15,8,st),deflateInit2:Ut,deflateReset:Zt,deflateResetKeep:Rt,deflateSetHeader:(t,e)=>Et(t)||2!==t.state.wrap?Q:(t.state.gzhead=e,q),deflate:(t,e)=>{if(Et(t)||e>W||e<0)return t?lt(t,Q):Q;const a=t.state;if(!t.output||0!==t.avail_in&&!t.input||666===a.status&&e!==X)return lt(t,0===t.avail_out?$:Q);const i=a.last_flush;if(a.last_flush=e,0!==a.pending){if(ct(t),0===t.avail_out)return a.last_flush=-1,q}else if(0===t.avail_in&&ht(e)<=ht(i)&&e!==X)return lt(t,$);if(666===a.status&&0!==t.avail_in)return lt(t,$);if(42===a.status&&0===a.wrap&&(a.status=113),42===a.status){let e=ot+(a.w_bits-8<<4)<<8,i=-1;if(i=a.strategy>=at||a.level<2?0:a.level<6?1:6===a.level?2:3,e|=i<<6,0!==a.strstart&&(e|=32),e+=31-e%31,mt(a,e),0!==a.strstart&&(mt(a,t.adler>>>16),mt(a,65535&t.adler)),t.adler=1,a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(57===a.status)if(t.adler=0,wt(a,31),wt(a,139),wt(a,8),a.gzhead)wt(a,(a.gzhead.text?1:0)+(a.gzhead.hcrc?2:0)+(a.gzhead.extra?4:0)+(a.gzhead.name?8:0)+(a.gzhead.comment?16:0)),wt(a,255&a.gzhead.time),wt(a,a.gzhead.time>>8&255),wt(a,a.gzhead.time>>16&255),wt(a,a.gzhead.time>>24&255),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,255&a.gzhead.os),a.gzhead.extra&&a.gzhead.extra.length&&(wt(a,255&a.gzhead.extra.length),wt(a,a.gzhead.extra.length>>8&255)),a.gzhead.hcrc&&(t.adler=N(t.adler,a.pending_buf,a.pending,0)),a.gzindex=0,a.status=69;else if(wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,3),a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q;if(69===a.status){if(a.gzhead.extra){let e=a.pending,i=(65535&a.gzhead.extra.length)-a.gzindex;for(;a.pending+i>a.pending_buf_size;){let n=a.pending_buf_size-a.pending;if(a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex,a.gzindex+n),a.pending),a.pending=a.pending_buf_size,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex+=n,ct(t),0!==a.pending)return a.last_flush=-1,q;e=0,i-=n}let n=new Uint8Array(a.gzhead.extra);a.pending_buf.set(n.subarray(a.gzindex,a.gzindex+i),a.pending),a.pending+=i,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex=0}a.status=73}if(73===a.status){if(a.gzhead.name){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.name.length?255&a.gzhead.name.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),a.gzindex=0}a.status=91}if(91===a.status){if(a.gzhead.comment){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.comment.length?255&a.gzhead.comment.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i))}a.status=103}if(103===a.status){if(a.gzhead.hcrc){if(a.pending+2>a.pending_buf_size&&(ct(t),0!==a.pending))return a.last_flush=-1,q;wt(a,255&t.adler),wt(a,t.adler>>8&255),t.adler=0}if(a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(0!==t.avail_in||0!==a.lookahead||e!==P&&666!==a.status){let i=0===a.level?kt(a,e):a.strategy===at?((t,e)=>{let a;for(;;){if(0===t.lookahead&&(pt(t),0===t.lookahead)){if(e===P)return 1;break}if(t.match_length=0,a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):a.strategy===it?((t,e)=>{let a,i,n,s;const r=t.window;for(;;){if(t.lookahead<=258){if(pt(t),t.lookahead<=258&&e===P)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=t.strstart-1,i=r[n],i===r[++n]&&i===r[++n]&&i===r[++n])){s=t.strstart+258;do{}while(i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&n<s);t.match_length=258-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=j(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):zt[a.level].func(a,e);if(3!==i&&4!==i||(a.status=666),1===i||3===i)return 0===t.avail_out&&(a.last_flush=-1),q;if(2===i&&(e===Y?K(a):e!==W&&(H(a,0,0,!1),e===G&&(dt(a.head),0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),ct(t),0===t.avail_out))return a.last_flush=-1,q}return e!==X?q:a.wrap<=0?J:(2===a.wrap?(wt(a,255&t.adler),wt(a,t.adler>>8&255),wt(a,t.adler>>16&255),wt(a,t.adler>>24&255),wt(a,255&t.total_in),wt(a,t.total_in>>8&255),wt(a,t.total_in>>16&255),wt(a,t.total_in>>24&255)):(mt(a,t.adler>>>16),mt(a,65535&t.adler)),ct(t),a.wrap>0&&(a.wrap=-a.wrap),0!==a.pending?q:J)},deflateEnd:t=>{if(Et(t))return Q;const e=t.state.status;return t.state=null,113===e?lt(t,V):q},deflateSetDictionary:(t,e)=>{let a=e.length;if(Et(t))return Q;const i=t.state,n=i.wrap;if(2===n||1===n&&42!==i.status||i.lookahead)return Q;if(1===n&&(t.adler=F(t.adler,e,a,0)),i.wrap=0,a>=i.w_size){0===n&&(dt(i.head),i.strstart=0,i.block_start=0,i.insert=0);let t=new Uint8Array(i.w_size);t.set(e.subarray(a-i.w_size,a),0),e=t,a=i.w_size}const s=t.avail_in,r=t.next_in,o=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,pt(i);i.lookahead>=3;){let t=i.strstart,e=i.lookahead-2;do{i.ins_h=ft(i,i.ins_h,i.window[t+3-1]),i.prev[t&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=t,t++}while(--e);i.strstart=t,i.lookahead=2,pt(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=r,t.input=o,t.avail_in=s,i.wrap=n,q},deflateInfo:"pako deflate (from Nodeca project)"};const Dt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var Tt=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(const e in a)Dt(a,e)&&(t[e]=a[e])}}return t},Ot=t=>{let e=0;for(let a=0,i=t.length;a<i;a++)e+=t[a].length;const a=new Uint8Array(e);for(let e=0,i=0,n=t.length;e<n;e++){let n=t[e];a.set(n,i),i+=n.length}return a};let Ft=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){Ft=!1}const Lt=new Uint8Array(256);for(let t=0;t<256;t++)Lt[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Lt[254]=Lt[254]=1;var Nt=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,i,n,s,r=t.length,o=0;for(n=0;n<r;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),o+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(o),s=0,n=0;s<o;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},It=(t,e)=>{const a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let i,n;const s=new Array(2*a);for(n=0,i=0;i<a;){let e=t[i++];if(e<128){s[n++]=e;continue}let r=Lt[e];if(r>4)s[n++]=65533,i+=r-1;else{for(e&=2===r?31:3===r?15:7;r>1&&i<a;)e=e<<6|63&t[i++],r--;r>1?s[n++]=65533:e<65536?s[n++]=e:(e-=65536,s[n++]=55296|e>>10&1023,s[n++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&Ft)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let a="";for(let i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a})(s,n)},Bt=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let a=e-1;for(;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+Lt[t[a]]>e?a:e};var Ct=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};const Ht=Object.prototype.toString,{Z_NO_FLUSH:Mt,Z_SYNC_FLUSH:jt,Z_FULL_FLUSH:Kt,Z_FINISH:Pt,Z_OK:Yt,Z_STREAM_END:Gt,Z_DEFAULT_COMPRESSION:Xt,Z_DEFAULT_STRATEGY:Wt,Z_DEFLATED:qt}=B;function Jt(t){this.options=Tt({level:Xt,method:qt,chunkSize:16384,windowBits:15,memLevel:8,strategy:Wt},t||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=St.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==Yt)throw new Error(I[a]);if(e.header&&St.deflateSetHeader(this.strm,e.header),e.dictionary){let t;if(t="string"==typeof e.dictionary?Nt(e.dictionary):"[object ArrayBuffer]"===Ht.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=St.deflateSetDictionary(this.strm,t),a!==Yt)throw new Error(I[a]);this._dict_set=!0}}function Qt(t,e){const a=new Jt(e);if(a.push(t,!0),a.err)throw a.msg||I[a.err];return a.result}Jt.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize;let n,s;if(this.ended)return!1;for(s=e===~~e?e:!0===e?Pt:Mt,"string"==typeof t?a.input=Nt(t):"[object ArrayBuffer]"===Ht.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;)if(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),(s===jt||s===Kt)&&a.avail_out<=6)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else{if(n=St.deflate(a,s),n===Gt)return a.next_out>0&&this.onData(a.output.subarray(0,a.next_out)),n=St.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Yt;if(0!==a.avail_out){if(s>0&&a.next_out>0)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else if(0===a.avail_in)break}else this.onData(a.output)}return!0},Jt.prototype.onData=function(t){this.chunks.push(t)},Jt.prototype.onEnd=function(t){t===Yt&&(this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Vt={Deflate:Jt,deflate:Qt,deflateRaw:function(t,e){return(e=e||{}).raw=!0,Qt(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,Qt(t,e)},constants:B};var $t=function(t,e){let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z,A;const E=t.state;a=t.next_in,z=t.input,i=a+(t.avail_in-5),n=t.next_out,A=t.output,s=n-(e-t.avail_out),r=n+(t.avail_out-257),o=E.dmax,l=E.wsize,h=E.whave,d=E.wnext,_=E.window,f=E.hold,c=E.bits,u=E.lencode,w=E.distcode,m=(1<<E.lenbits)-1,b=(1<<E.distbits)-1;t:do{c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=u[f&m];e:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,0===p)A[n++]=65535&g;else{if(!(16&p)){if(0==(64&p)){g=u[(65535&g)+(f&(1<<p)-1)];continue e}if(32&p){E.mode=16191;break t}t.msg="invalid literal/length code",E.mode=16209;break t}k=65535&g,p&=15,p&&(c<p&&(f+=z[a++]<<c,c+=8),k+=f&(1<<p)-1,f>>>=p,c-=p),c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=w[f&b];a:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,!(16&p)){if(0==(64&p)){g=w[(65535&g)+(f&(1<<p)-1)];continue a}t.msg="invalid distance code",E.mode=16209;break t}if(v=65535&g,p&=15,c<p&&(f+=z[a++]<<c,c+=8,c<p&&(f+=z[a++]<<c,c+=8)),v+=f&(1<<p)-1,v>o){t.msg="invalid distance too far back",E.mode=16209;break t}if(f>>>=p,c-=p,p=n-s,v>p){if(p=v-p,p>h&&E.sane){t.msg="invalid distance too far back",E.mode=16209;break t}if(y=0,x=_,0===d){if(y+=l-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}else if(d<p){if(y+=l+d-p,p-=d,p<k){k-=p;do{A[n++]=_[y++]}while(--p);if(y=0,d<k){p=d,k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}}else if(y+=d-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}for(;k>2;)A[n++]=x[y++],A[n++]=x[y++],A[n++]=x[y++],k-=3;k&&(A[n++]=x[y++],k>1&&(A[n++]=x[y++]))}else{y=n-v;do{A[n++]=A[y++],A[n++]=A[y++],A[n++]=A[y++],k-=3}while(k>2);k&&(A[n++]=A[y++],k>1&&(A[n++]=A[y++]))}break}}break}}while(a<i&&n<r);k=c>>3,a-=k,c-=k<<3,f&=(1<<c)-1,t.next_in=a,t.next_out=n,t.avail_in=a<i?i-a+5:5-(a-i),t.avail_out=n<r?r-n+257:257-(n-r),E.hold=f,E.bits=c};const te=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),ee=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),ae=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),ie=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var ne=(t,e,a,i,n,s,r,o)=>{const l=o.bits;let h,d,_,f,c,u,w=0,m=0,b=0,g=0,p=0,k=0,v=0,y=0,x=0,z=0,A=null;const E=new Uint16Array(16),R=new Uint16Array(16);let Z,U,S,D=null;for(w=0;w<=15;w++)E[w]=0;for(m=0;m<i;m++)E[e[a+m]]++;for(p=l,g=15;g>=1&&0===E[g];g--);if(p>g&&(p=g),0===g)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(b=1;b<g&&0===E[b];b++);for(p<b&&(p=b),y=1,w=1;w<=15;w++)if(y<<=1,y-=E[w],y<0)return-1;if(y>0&&(0===t||1!==g))return-1;for(R[1]=0,w=1;w<15;w++)R[w+1]=R[w]+E[w];for(m=0;m<i;m++)0!==e[a+m]&&(r[R[e[a+m]]++]=m);if(0===t?(A=D=r,u=20):1===t?(A=te,D=ee,u=257):(A=ae,D=ie,u=0),z=0,m=0,w=b,c=s,k=p,v=0,_=-1,x=1<<p,f=x-1,1===t&&x>852||2===t&&x>592)return 1;for(;;){Z=w-v,r[m]+1<u?(U=0,S=r[m]):r[m]>=u?(U=D[r[m]-u],S=A[r[m]-u]):(U=96,S=0),h=1<<w-v,d=1<<k,b=d;do{d-=h,n[c+(z>>v)+d]=Z<<24|U<<16|S|0}while(0!==d);for(h=1<<w-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,m++,0==--E[w]){if(w===g)break;w=e[a+r[m]]}if(w>p&&(z&f)!==_){for(0===v&&(v=p),c+=b,k=w-v,y=1<<k;k+v<g&&(y-=E[k+v],!(y<=0));)k++,y<<=1;if(x+=1<<k,1===t&&x>852||2===t&&x>592)return 1;_=z&f,n[_]=p<<24|k<<16|c-s|0}}return 0!==z&&(n[c+z]=w-v<<24|64<<16|0),o.bits=p,0};const{Z_FINISH:se,Z_BLOCK:re,Z_TREES:oe,Z_OK:le,Z_STREAM_END:he,Z_NEED_DICT:de,Z_STREAM_ERROR:_e,Z_DATA_ERROR:fe,Z_MEM_ERROR:ce,Z_BUF_ERROR:ue,Z_DEFLATED:we}=B,me=16209,be=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24);function ge(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const pe=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||e.mode<16180||e.mode>16211?1:0},ke=t=>{if(pe(t))return _e;const e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=16180,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,le},ve=t=>{if(pe(t))return _e;const e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,ke(t)},ye=(t,e)=>{let a;if(pe(t))return _e;const i=t.state;return e<0?(a=0,e=-e):(a=5+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?_e:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,ve(t))},xe=(t,e)=>{if(!t)return _e;const a=new ge;t.state=a,a.strm=t,a.window=null,a.mode=16180;const i=ye(t,e);return i!==le&&(t.state=null),i};let ze,Ae,Ee=!0;const Re=t=>{if(Ee){ze=new Int32Array(512),Ae=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(ne(1,t.lens,0,288,ze,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;ne(2,t.lens,0,32,Ae,0,t.work,{bits:5}),Ee=!1}t.lencode=ze,t.lenbits=9,t.distcode=Ae,t.distbits=5},Ze=(t,e,a,i)=>{let n;const s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(a-s.wsize,a),0),s.wnext=0,s.whave=s.wsize):(n=s.wsize-s.wnext,n>i&&(n=i),s.window.set(e.subarray(a-i,a-i+n),s.wnext),(i-=n)?(s.window.set(e.subarray(a-i,a),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0};var Ue={inflateReset:ve,inflateReset2:ye,inflateResetKeep:ke,inflateInit:t=>xe(t,15),inflateInit2:xe,inflate:(t,e)=>{let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z=0;const A=new Uint8Array(4);let E,R;const Z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(pe(t)||!t.output||!t.input&&0!==t.avail_in)return _e;a=t.state,16191===a.mode&&(a.mode=16192),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,_=o,f=l,x=le;t:for(;;)switch(a.mode){case 16180:if(0===a.wrap){a.mode=16192;break}for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(2&a.wrap&&35615===h){0===a.wbits&&(a.wbits=15),a.check=0,A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0),h=0,d=0,a.mode=16181;break}if(a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",a.mode=me;break}if((15&h)!==we){t.msg="unknown compression method",a.mode=me;break}if(h>>>=4,d-=4,y=8+(15&h),0===a.wbits&&(a.wbits=y),y>15||y>a.wbits){t.msg="invalid window size",a.mode=me;break}a.dmax=1<<a.wbits,a.flags=0,t.adler=a.check=1,a.mode=512&h?16189:16191,h=0,d=0;break;case 16181:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.flags=h,(255&a.flags)!==we){t.msg="unknown compression method",a.mode=me;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=me;break}a.head&&(a.head.text=h>>8&1),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16182;case 16182:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.time=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,A[2]=h>>>16&255,A[3]=h>>>24&255,a.check=N(a.check,A,4,0)),h=0,d=0,a.mode=16183;case 16183:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.xflags=255&h,a.head.os=h>>8),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16184;case 16184:if(1024&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length=h,a.head&&(a.head.extra_len=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0}else a.head&&(a.head.extra=null);a.mode=16185;case 16185:if(1024&a.flags&&(c=a.length,c>o&&(c=o),c&&(a.head&&(y=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(s,s+c),y)),512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,a.length-=c),a.length))break t;a.length=0,a.mode=16186;case 16186:if(2048&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.name+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=16187;case 16187:if(4096&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.comment+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.comment=null);a.mode=16188;case 16188:if(512&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(65535&a.check)){t.msg="header crc mismatch",a.mode=me;break}h=0,d=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=16191;break;case 16189:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}t.adler=a.check=be(h),h=0,d=0,a.mode=16190;case 16190:if(0===a.havedict)return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,de;t.adler=a.check=1,a.mode=16191;case 16191:if(e===re||e===oe)break t;case 16192:if(a.last){h>>>=7&d,d-=7&d,a.mode=16206;break}for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}switch(a.last=1&h,h>>>=1,d-=1,3&h){case 0:a.mode=16193;break;case 1:if(Re(a),a.mode=16199,e===oe){h>>>=2,d-=2;break t}break;case 2:a.mode=16196;break;case 3:t.msg="invalid block type",a.mode=me}h>>>=2,d-=2;break;case 16193:for(h>>>=7&d,d-=7&d;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if((65535&h)!=(h>>>16^65535)){t.msg="invalid stored block lengths",a.mode=me;break}if(a.length=65535&h,h=0,d=0,a.mode=16194,e===oe)break t;case 16194:a.mode=16195;case 16195:if(c=a.length,c){if(c>o&&(c=o),c>l&&(c=l),0===c)break t;n.set(i.subarray(s,s+c),r),o-=c,s+=c,l-=c,r+=c,a.length-=c;break}a.mode=16191;break;case 16196:for(;d<14;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.nlen=257+(31&h),h>>>=5,d-=5,a.ndist=1+(31&h),h>>>=5,d-=5,a.ncode=4+(15&h),h>>>=4,d-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=me;break}a.have=0,a.mode=16197;case 16197:for(;a.have<a.ncode;){for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.lens[Z[a.have++]]=7&h,h>>>=3,d-=3}for(;a.have<19;)a.lens[Z[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,E={bits:a.lenbits},x=ne(0,a.lens,0,19,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid code lengths set",a.mode=me;break}a.have=0,a.mode=16198;case 16198:for(;a.have<a.nlen+a.ndist;){for(;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(g<16)h>>>=m,d-=m,a.lens[a.have++]=g;else{if(16===g){for(R=m+2;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(h>>>=m,d-=m,0===a.have){t.msg="invalid bit length repeat",a.mode=me;break}y=a.lens[a.have-1],c=3+(3&h),h>>>=2,d-=2}else if(17===g){for(R=m+3;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=3+(7&h),h>>>=3,d-=3}else{for(R=m+7;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=11+(127&h),h>>>=7,d-=7}if(a.have+c>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=me;break}for(;c--;)a.lens[a.have++]=y}}if(a.mode===me)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=me;break}if(a.lenbits=9,E={bits:a.lenbits},x=ne(1,a.lens,0,a.nlen,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid literal/lengths set",a.mode=me;break}if(a.distbits=6,a.distcode=a.distdyn,E={bits:a.distbits},x=ne(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,E),a.distbits=E.bits,x){t.msg="invalid distances set",a.mode=me;break}if(a.mode=16199,e===oe)break t;case 16199:a.mode=16200;case 16200:if(o>=6&&l>=258){t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,$t(t,f),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,16191===a.mode&&(a.back=-1);break}for(a.back=0;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(b&&0==(240&b)){for(p=m,k=b,v=g;z=a.lencode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,a.length=g,0===b){a.mode=16205;break}if(32&b){a.back=-1,a.mode=16191;break}if(64&b){t.msg="invalid literal/length code",a.mode=me;break}a.extra=15&b,a.mode=16201;case 16201:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=16202;case 16202:for(;z=a.distcode[h&(1<<a.distbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(0==(240&b)){for(p=m,k=b,v=g;z=a.distcode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,64&b){t.msg="invalid distance code",a.mode=me;break}a.offset=g,a.extra=15&b,a.mode=16203;case 16203:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.offset+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=me;break}a.mode=16204;case 16204:if(0===l)break t;if(c=f-l,a.offset>c){if(c=a.offset-c,c>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=me;break}c>a.wnext?(c-=a.wnext,u=a.wsize-c):u=a.wnext-c,c>a.length&&(c=a.length),w=a.window}else w=n,u=r-a.offset,c=a.length;c>l&&(c=l),l-=c,a.length-=c;do{n[r++]=w[u++]}while(--c);0===a.length&&(a.mode=16200);break;case 16205:if(0===l)break t;n[r++]=a.length,l--,a.mode=16200;break;case 16206:if(a.wrap){for(;d<32;){if(0===o)break t;o--,h|=i[s++]<<d,d+=8}if(f-=l,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,r-f):F(a.check,n,f,r-f)),f=l,4&a.wrap&&(a.flags?h:be(h))!==a.check){t.msg="incorrect data check",a.mode=me;break}h=0,d=0}a.mode=16207;case 16207:if(a.wrap&&a.flags){for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=me;break}h=0,d=0}a.mode=16208;case 16208:x=he;break t;case me:x=fe;break t;case 16210:return ce;default:return _e}return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,(a.wsize||f!==t.avail_out&&a.mode<me&&(a.mode<16206||e!==se))&&Ze(t,t.output,t.next_out,f-t.avail_out),_-=t.avail_in,f-=t.avail_out,t.total_in+=_,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,t.next_out-f):F(a.check,n,f,t.next_out-f)),t.data_type=a.bits+(a.last?64:0)+(16191===a.mode?128:0)+(16199===a.mode||16194===a.mode?256:0),(0===_&&0===f||e===se)&&x===le&&(x=ue),x},inflateEnd:t=>{if(pe(t))return _e;let e=t.state;return e.window&&(e.window=null),t.state=null,le},inflateGetHeader:(t,e)=>{if(pe(t))return _e;const a=t.state;return 0==(2&a.wrap)?_e:(a.head=e,e.done=!1,le)},inflateSetDictionary:(t,e)=>{const a=e.length;let i,n,s;return pe(t)?_e:(i=t.state,0!==i.wrap&&16190!==i.mode?_e:16190===i.mode&&(n=1,n=F(n,e,a,0),n!==i.check)?fe:(s=Ze(t,e,a,a),s?(i.mode=16210,ce):(i.havedict=1,le)))},inflateInfo:"pako inflate (from Nodeca project)"};var Se=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const De=Object.prototype.toString,{Z_NO_FLUSH:Te,Z_FINISH:Oe,Z_OK:Fe,Z_STREAM_END:Le,Z_NEED_DICT:Ne,Z_STREAM_ERROR:Ie,Z_DATA_ERROR:Be,Z_MEM_ERROR:Ce}=B;function He(t){this.options=Tt({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=Ue.inflateInit2(this.strm,e.windowBits);if(a!==Fe)throw new Error(I[a]);if(this.header=new Se,Ue.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Nt(e.dictionary):"[object ArrayBuffer]"===De.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(a=Ue.inflateSetDictionary(this.strm,e.dictionary),a!==Fe)))throw new Error(I[a])}He.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize,n=this.options.dictionary;let s,r,o;if(this.ended)return!1;for(r=e===~~e?e:!0===e?Oe:Te,"[object ArrayBuffer]"===De.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;){for(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),s=Ue.inflate(a,r),s===Ne&&n&&(s=Ue.inflateSetDictionary(a,n),s===Fe?s=Ue.inflate(a,r):s===Be&&(s=Ne));a.avail_in>0&&s===Le&&a.state.wrap>0&&0!==t[a.next_in];)Ue.inflateReset(a),s=Ue.inflate(a,r);switch(s){case Ie:case Be:case Ne:case Ce:return this.onEnd(s),this.ended=!0,!1}if(o=a.avail_out,a.next_out&&(0===a.avail_out||s===Le))if("string"===this.options.to){let t=Bt(a.output,a.next_out),e=a.next_out-t,n=It(a.output,t);a.next_out=e,a.avail_out=i-e,e&&a.output.set(a.output.subarray(t,t+e),0),this.onData(n)}else this.onData(a.output.length===a.next_out?a.output:a.output.subarray(0,a.next_out));if(s!==Fe||0!==o){if(s===Le)return s=Ue.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(0===a.avail_in)break}}return!0},He.prototype.onData=function(t){this.chunks.push(t)},He.prototype.onEnd=function(t){t===Fe&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};const{Deflate:Me,deflate:je,deflateRaw:Ke,gzip:Pe}=Vt;var Ye=Me,Ge=je,Xe=B;const We=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const e=this._hasEvents?",":"";this.deflate.push(e+t,Xe.Z_SYNC_FLUSH),this._hasEvents=!0}finish(){if(this.deflate.push("]",Xe.Z_FINISH),this.deflate.err)throw this.deflate.err;const t=this.deflate.result;return this._init(),t}_init(){this._hasEvents=!1,this.deflate=new Ye,this.deflate.push("[",Xe.Z_NO_FLUSH)}},qe={clear:()=>{We.clear()},addEvent:t=>We.addEvent(t),finish:()=>We.finish(),compress:t=>function(t){return Ge(t)}(t)};addEventListener("message",(function(t){const e=t.data.method,a=t.data.id,i=t.data.arg;if(e in qe&&"function"==typeof qe[e])try{const t=qe[e](i);postMessage({id:a,method:e,success:!0,response:t})}catch(t){postMessage({id:a,method:e,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});`;
            class t7 extends Error {
                constructor() {
                    super("Event buffer exceeded maximum size of 20000000.")
                }
            }
            class t9 {
                __init() {
                    this._totalSize = 0
                }
                constructor() {
                    t9.prototype.__init.call(this), this.events = []
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
                    if (this._totalSize += e, this._totalSize > 2e7) throw new t7;
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
                    return t ? tZ(t) : null
                }
            }
            class et {
                constructor(t) {
                    this._worker = t, this._id = 0
                }
                ensureReady() {
                    return this._ensureReadyPromise ? this._ensureReadyPromise : (this._ensureReadyPromise = new Promise((t, e) => {
                        this._worker.addEventListener("message", ({
                            data: n
                        }) => {
                            n.success ? t() : e()
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
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Destroying compression worker"), this._worker.terminate()
                }
                postMessage(t, e) {
                    let n = this._getAndIncrementId();
                    return new Promise((r, i) => {
                        let a = ({
                            data: e
                        }) => {
                            if (e.method === t) {
                                if (e.id === n) {
                                    if (this._worker.removeEventListener("message", a), !e.success) {
                                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay]", e.response), i(Error("Error in compression worker"));
                                        return
                                    }
                                    r(e.response)
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
            }
            class ee {
                __init() {
                    this._totalSize = 0
                }
                constructor(t) {
                    ee.prototype.__init.call(this), this._worker = new et(t), this._earliestTimestamp = null
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
                    let e = tZ(t.timestamp);
                    (!this._earliestTimestamp || e < this._earliestTimestamp) && (this._earliestTimestamp = e);
                    let n = JSON.stringify(t);
                    return (this._totalSize += n.length, this._totalSize > 2e7) ? Promise.reject(new t7) : this._sendEventToWorker(n)
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
            }
            class en {
                constructor(t) {
                    this._fallback = new t9, this._compression = new ee(t), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
                }
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
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Failed to load the compression worker, falling back to simple buffer");
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
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.warn("[Replay] Failed to add events when switching buffers.", t)
                    }
                }
            }

            function er() {
                try {
                    return "sessionStorage" in R && !!R.sessionStorage
                } catch (t) {
                    return !1
                }
            }

            function ei(t, e, n = +new Date) {
                return null === t || void 0 === e || !!(e < 0) || 0 !== e && t + e <= n
            }

            function ea(t, e, n = +new Date) {
                return ei(t.started, e.maxSessionLife, n) || ei(t.lastActivity, e.sessionIdleExpire, n)
            }

            function eo(t) {
                return void 0 !== t && Math.random() < t
            }

            function es(t) {
                if (er()) try {
                    R.sessionStorage.setItem(N, JSON.stringify(t))
                } catch (t) {}
            }

            function eu(t) {
                let e = Date.now(),
                    n = t.id || (0, k.uuid4)(),
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

            function ec({
                timeouts: t,
                currentSession: e,
                stickySession: n,
                sessionSampleRate: r,
                allowBuffering: i
            }) {
                let a = e || n && function() {
                    if (!er()) return null;
                    try {
                        let t = R.sessionStorage.getItem(N);
                        if (!t) return null;
                        let e = JSON.parse(t);
                        return eu(e)
                    } catch (t) {
                        return null
                    }
                }();
                if (a) {
                    if (!ea(a, t) || i && a.shouldRefresh) return {
                        type: "saved",
                        session: a
                    };
                    if (!a.shouldRefresh) return {
                        type: "new",
                        session: eu({
                            sampled: !1
                        })
                    };
                    else("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Session has expired")
                }
                return {
                    type: "new",
                    session: function({
                        sessionSampleRate: t,
                        allowBuffering: e,
                        stickySession: n = !1
                    }) {
                        var r, i;
                        let a = eu({
                            sampled: (r = t, i = e, eo(r) ? "session" : !!i && "buffer")
                        });
                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log(`[Replay] Creating new session: ${a.id}`), n && es(a), a
                    }({
                        stickySession: n,
                        sessionSampleRate: r,
                        allowBuffering: i
                    })
                }
            }
            async function el(t, e, n) {
                if (!t.eventBuffer || t.isPaused() || tZ(e.timestamp) + t.timeouts.sessionIdlePause < Date.now()) return null;
                try {
                    n && t.eventBuffer.clear();
                    let r = t.getOptions(),
                        i = function(t, e) {
                            try {
                                if ("function" == typeof e && t.type === m.Custom) return e(t)
                            } catch (t) {
                                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...", t), null
                            }
                            return t
                        }(e, r.beforeAddRecordingEvent);
                    if (!i) return;
                    return await t.eventBuffer.addEvent(i)
                } catch (r) {
                    let e = r && r instanceof t7 ? "addEventSizeExceeded" : "addEvent";
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error(r), await t.stop(e);
                    let n = (0, T.getCurrentHub)().getClient();
                    n && n.recordDroppedEvent("internal_sdk_error", "replay")
                }
            }

            function ed(t) {
                return !t.type
            }

            function ef(t) {
                return "transaction" === t.type
            }

            function ep(t) {
                let e = function() {
                    let t = (0, T.getCurrentHub)().getClient();
                    if (!t) return !1;
                    let e = t.getTransport();
                    return !!e && (e.send.__sentry__baseTransport__ || !1)
                }();
                return (n, r) => {
                    if (n.type && !ef(n)) return;
                    let i = r && r.statusCode;
                    if (!e || !!i && !(i < 200) && !(i >= 300)) {
                        if (ef(n) && n.contexts && n.contexts.trace && n.contexts.trace.trace_id) {
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
                return e.map(({
                    type: e,
                    start: n,
                    end: r,
                    name: i,
                    data: a
                }) => {
                    let o = t.throttledAddEvent({
                        type: m.Custom,
                        timestamp: n,
                        data: {
                            tag: "performanceSpan",
                            payload: {
                                op: e,
                                description: i,
                                startTimestamp: n,
                                endTimestamp: r,
                                data: a
                            }
                        }
                    });
                    return "string" == typeof o ? Promise.resolve(null) : o
                })
            }

            function e_(t, e) {
                var n, r;
                if (!!t.isEnabled() && null !== e) {
                    if (n = t, r = e.name, !((!("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) || !n.getOptions()._experiments.traceInternals) && function(t) {
                            let e = (0, T.getCurrentHub)().getClient(),
                                n = e && e.getDsn();
                            return !!n && t.includes(n.host)
                        }(r))) t.addUpdate(() => (eh(t, [e]), !0))
                }
            }
            let eg = ["true", "false", "null"];

            function em(t) {
                let e = function(t) {
                    let e = [];
                    for (let n = 0; n < t.length; n++)(function(t, e, n) {
                        let r = t[t.length - 1],
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
                    let n = t,
                        r = e.length - 1;
                    n = function(t, e) {
                        switch (e) {
                            case 10:
                                return `${t}"~~":"~~"`;
                            case 11:
                                return `${t}:"~~"`;
                            case 12:
                                return `${t}~~":"~~"`;
                            case 13:
                                return function(t) {
                                    let e = t.lastIndexOf(":"),
                                        n = t.slice(e + 1);
                                    return eg.includes(n.trim()) ? `${t},"~~":"~~"` : `${t.slice(0,e+1)}"~~"`
                                }(t);
                            case 14:
                            case 22:
                                return `${t}~~"`;
                            case 15:
                                return `${t},"~~":"~~"`;
                            case 20:
                                return `${t}"~~"`;
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
                                        return eg.includes(n.trim()) ? `${t},"~~"` : `${t.slice(0,e+1)}"~~"`
                                    }
                                    return t
                                }(t);
                            case 23:
                                return `${t},"~~"`
                        }
                        return t
                    }(n, e[r]);
                    for (let t = r; t >= 0; t--) switch (e[t]) {
                        case 10:
                            n = `${n}}`;
                            break;
                        case 20:
                            n = `${n}]`
                    }
                    return n
                }(t, e)
            }

            function ey(t, e) {
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

            function ev(t) {
                if (!t) return;
                let e = parseInt(t, 10);
                return isNaN(e) ? void 0 : e
            }

            function eb(t) {
                return "string" == typeof t ? t : t instanceof URLSearchParams ? t.toString() : t instanceof FormData ? ek(t) : void 0
            }

            function eE(t, e) {
                if (!e) return null;
                let {
                    startTimestamp: n,
                    endTimestamp: r,
                    url: i,
                    method: a,
                    statusCode: o,
                    request: s,
                    response: u
                } = e;
                return {
                    type: t,
                    start: n / 1e3,
                    end: r / 1e3,
                    name: i,
                    data: (0, k.dropUndefinedKeys)({
                        method: a,
                        statusCode: o,
                        request: s,
                        response: u
                    })
                }
            }

            function eS(t) {
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
                            let n = e ? em(t.slice(0, 15e4)) : t;
                            return {
                                body: JSON.parse(n),
                                warnings: e ? ["JSON_TRUNCATED"] : []
                            }
                        } catch (n) {
                            return {
                                body: e ? `${t.slice(0,15e4)}…` : t,
                                warnings: e ? ["INVALID_JSON", "TEXT_TRUNCATED"] : ["INVALID_JSON"]
                            }
                        }
                        return {
                            body: e ? `${t.slice(0,15e4)}…` : t,
                            warnings: e ? ["TEXT_TRUNCATED"] : []
                        }
                    }(n);
                return r.body = i, a.length > 0 && (r._meta = {
                    warnings: a
                }), r
            }

            function eT(t, e) {
                return Object.keys(t).reduce((n, r) => {
                    let i = r.toLowerCase();
                    return e.includes(i) && t[r] && (n[i] = t[r]), n
                }, {})
            }

            function ek(t) {
                return new URLSearchParams(t).toString()
            }

            function ex(t, e) {
                let n = function(t, e = R.document.baseURI) {
                    if (t.startsWith("http://") || t.startsWith("https://") || t.startsWith(R.location.origin)) return t;
                    let n = new URL(t, e);
                    if (n.origin !== new URL(e).origin) return t;
                    let r = n.href;
                    return !t.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r
                }(t);
                return (0, k.stringMatchesSomePattern)(n, e)
            }
            async function eR(t, e, n) {
                try {
                    let r = await eN(t, e, n),
                        i = eE("resource.fetch", r);
                    e_(n.replay, i)
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay] Failed to capture fetch breadcrumb", t)
                }
            }
            async function eN(t, e, n) {
                let {
                    startTimestamp: r,
                    endTimestamp: i
                } = e, {
                    url: a,
                    method: o,
                    status_code: s = 0,
                    request_body_size: u,
                    response_body_size: c
                } = t.data, l = ex(a, n.networkDetailAllowUrls) && !ex(a, n.networkDetailDenyUrls), d = l ? function({
                    networkCaptureBodies: t,
                    networkRequestHeaders: e
                }, n, r) {
                    let i = function(t, e) {
                        return 1 === t.length && "string" != typeof t[0] ? eA(t[0], e) : 2 === t.length ? eA(t[1], e) : {}
                    }(n, e);
                    return t ? ew(i, r, eb(eO(n))) : ew(i, r, void 0)
                }(n, e.input, u) : eS(u);
                return {
                    startTimestamp: r,
                    endTimestamp: i,
                    url: a,
                    method: o,
                    statusCode: s,
                    request: d,
                    response: await eD(l, n, e.response, c)
                }
            }
            async function eD(t, {
                networkCaptureBodies: e,
                textEncoder: n,
                networkResponseHeaders: r
            }, i, a) {
                if (!t && void 0 !== a) return eS(a);
                let o = eC(i.headers, r);
                if (!e && void 0 !== a) return ew(o, a, void 0);
                try {
                    let r = i.clone(),
                        s = await eI(r),
                        u = s && s.length && void 0 === a ? ey(s, n) : a;
                    if (!t) return eS(u);
                    if (e) return ew(o, u, s);
                    return ew(o, u, void 0)
                } catch (t) {
                    return ew(o, a, void 0)
                }
            }
            async function eI(t) {
                try {
                    return await t.text()
                } catch (t) {
                    return
                }
            }

            function eO(t = []) {
                if (2 === t.length && "object" == typeof t[1]) return t[1].body
            }

            function eC(t, e) {
                let n = {};
                return e.forEach(e => {
                    t.get(e) && (n[e] = t.get(e))
                }), n
            }

            function eA(t, e) {
                if (!t) return {};
                let n = t.headers;
                return n ? n instanceof Headers ? eC(n, e) : Array.isArray(n) ? {} : eT(n, e) : {}
            }
            async function eB(t, e, n) {
                try {
                    let r = function(t, e, n) {
                            let {
                                startTimestamp: r,
                                endTimestamp: i,
                                input: a,
                                xhr: o
                            } = e, {
                                url: s,
                                method: u,
                                status_code: c = 0,
                                request_body_size: l,
                                response_body_size: d
                            } = t.data;
                            if (!s) return null;
                            if (!ex(s, n.networkDetailAllowUrls) || ex(s, n.networkDetailDenyUrls)) {
                                let t = eS(l);
                                return {
                                    startTimestamp: r,
                                    endTimestamp: i,
                                    url: s,
                                    method: u,
                                    statusCode: c,
                                    request: t,
                                    response: eS(d)
                                }
                            }
                            let f = o[k.SENTRY_XHR_DATA_KEY],
                                p = f ? eT(f.request_headers, n.networkRequestHeaders) : {},
                                h = eT(function(t) {
                                    let e = t.getAllResponseHeaders();
                                    return e ? e.split("\r\n").reduce((t, e) => {
                                        let [n, r] = e.split(": ");
                                        return t[n.toLowerCase()] = r, t
                                    }, {}) : {}
                                }(o), n.networkResponseHeaders),
                                _ = ew(p, l, n.networkCaptureBodies ? eb(a) : void 0);
                            return {
                                startTimestamp: r,
                                endTimestamp: i,
                                url: s,
                                method: u,
                                statusCode: c,
                                request: _,
                                response: ew(h, d, n.networkCaptureBodies ? e.xhr.responseText : void 0)
                            }
                        }(t, e, n),
                        i = eE("resource.xhr", r);
                    e_(n.replay, i)
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay] Failed to capture fetch breadcrumb", t)
                }
            }
            let eU = null,
                eM = t => e => {
                    if (!t.isEnabled()) return;
                    let n = function(t) {
                        let e = t.getLastBreadcrumb && t.getLastBreadcrumb();
                        if (eU === e || !e) return null;
                        return (eU = e, !e.category || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(e.category) || e.category.startsWith("ui.")) ? null : "console" === e.category ? function(t) {
                            let e = t.data && t.data.arguments;
                            if (!Array.isArray(e) || 0 === e.length) return t1(t);
                            let n = !1,
                                r = e.map(t => {
                                    if (!t) return t;
                                    if ("string" == typeof t) return t.length > 5e3 ? (n = !0, `${t.slice(0,5e3)}…`) : t;
                                    if ("object" == typeof t) try {
                                        let e = (0, k.normalize)(t, 7),
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
                    n && tV(t, n)
                };

            function eL(t) {
                return !!(t && t.on)
            }
            async function eP(t) {
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
                    }(R.performance.memory)]))
                } catch (t) {
                    return []
                }
            }
            let eG = {
                resource: function(t) {
                    let {
                        entryType: e,
                        initiatorType: n,
                        name: r,
                        responseEnd: i,
                        startTime: a,
                        decodedBodySize: o,
                        encodedBodySize: s,
                        responseStatus: u,
                        transferSize: c
                    } = t;
                    return ["fetch", "xmlhttprequest"].includes(n) ? null : {
                        type: `${e}.${n}`,
                        start: eY(a),
                        end: eY(i),
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
                    let {
                        duration: e,
                        entryType: n,
                        name: r,
                        startTime: i
                    } = t, a = eY(i);
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
                        domContentLoadedEventEnd: u,
                        domInteractive: c,
                        loadEventStart: l,
                        loadEventEnd: d,
                        redirectCount: f,
                        startTime: p,
                        transferSize: h,
                        type: _
                    } = t;
                    return 0 === i ? null : {
                        type: `${e}.${_}`,
                        start: eY(p),
                        end: eY(a),
                        name: n,
                        data: {
                            size: h,
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
                    let {
                        entryType: e,
                        startTime: n,
                        size: r
                    } = t, i = 0;
                    if (R.performance) {
                        let t = R.performance.getEntriesByType("navigation")[0];
                        i = t && t.activationStart || 0
                    }
                    let a = Math.max(n - i, 0),
                        o = eY(i) + a / 1e3;
                    return {
                        type: e,
                        name: e,
                        start: o,
                        end: o,
                        data: {
                            value: a,
                            size: r,
                            nodeId: tq.mirror.getId(t.element)
                        }
                    }
                }
            };

            function eF(t) {
                return void 0 === eG[t.entryType] ? null : eG[t.entryType](t)
            }

            function eY(t) {
                return ((k.browserPerformanceTimeOrigin || R.performance.timeOrigin) + t) / 1e3
            }
            async function ez({
                client: t,
                scope: e,
                replayId: n,
                event: r
            }) {
                let i = "object" != typeof t._integrations || null === t._integrations || Array.isArray(t._integrations) ? void 0 : Object.keys(t._integrations),
                    a = await (0, T.prepareEvent)(t.getOptions(), r, {
                        event_id: n,
                        integrations: i
                    }, e);
                if (!a) return null;
                a.platform = a.platform || "javascript";
                let o = t.getSdkMetadata && t.getSdkMetadata(),
                    {
                        name: s,
                        version: u
                    } = o && o.sdk || {};
                return a.sdk = {
                    ...a.sdk,
                    name: s || "sentry.javascript.unknown",
                    version: u || "0.0.0"
                }, a
            }
            async function ej({
                recordingData: t,
                replayId: e,
                segmentId: n,
                eventContext: r,
                timestamp: i,
                session: a
            }) {
                var o, s, u, c;
                let l;
                let d = function({
                        recordingData: t,
                        headers: e
                    }) {
                        let n;
                        let r = `${JSON.stringify(e)}
`;
                        if ("string" == typeof t) n = `${r}${t}`;
                        else {
                            let e = new TextEncoder().encode(r);
                            (n = new Uint8Array(e.length + t.length)).set(e), n.set(t, e.length)
                        }
                        return n
                    }({
                        recordingData: t,
                        headers: {
                            segment_id: n
                        }
                    }),
                    {
                        urls: f,
                        errorIds: p,
                        traceIds: h,
                        initialTimestamp: _
                    } = r,
                    g = (0, T.getCurrentHub)(),
                    m = g.getClient(),
                    y = g.getScope(),
                    v = m && m.getTransport(),
                    b = m && m.getDsn();
                if (!m || !v || !b || !a.sampled) return;
                let E = {
                        type: "replay_event",
                        replay_start_timestamp: _ / 1e3,
                        timestamp: i / 1e3,
                        error_ids: p,
                        trace_ids: h,
                        urls: f,
                        replay_id: e,
                        segment_id: n,
                        replay_type: a.sampled
                    },
                    S = await ez({
                        scope: y,
                        client: m,
                        replayId: e,
                        event: E
                    });
                if (!S) {
                    m.recordDroppedEvent("event_processor", "replay", E), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("An event processor returned `null`, will not send event.");
                    return
                }
                delete S.sdkProcessingMetadata;
                let w = (o = S, s = d, u = b, c = m.getOptions().tunnel, (0, k.createEnvelope)((0, k.createEventEnvelopeHeaders)(o, (0, k.getSdkMetadataForEnvelopeHeader)(o), c, u), [
                    [{
                        type: "replay_event"
                    }, o],
                    [{
                        type: "replay_recording",
                        length: "string" == typeof s ? new TextEncoder().encode(s).length : s.length
                    }, s]
                ]));
                try {
                    l = await v.send(w)
                } catch (e) {
                    let t = Error(D);
                    try {
                        t.cause = e
                    } catch (t) {}
                    throw t
                }
                if (!l) return l;
                if ("number" == typeof l.statusCode && (l.statusCode < 200 || l.statusCode >= 300)) throw new eH(l.statusCode);
                return l
            }
            class eH extends Error {
                constructor(t) {
                    super(`Transport returned status code ${t}`)
                }
            }
            async function e$(t, e = {
                count: 0,
                interval: 5e3
            }) {
                let {
                    recordingData: n,
                    options: r
                } = t;
                if (n.length) try {
                    return await ej(t), !0
                } catch (n) {
                    if (n instanceof eH) throw n;
                    if ((0, T.setContext)("Replays", {
                            _retryCount: e.count
                        }), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r._experiments && r._experiments.captureExceptions && (0, T.captureException)(n), e.count >= 3) {
                        let t = Error(`${D} - max retries exceeded`);
                        try {
                            t.cause = n
                        } catch (t) {}
                        throw t
                    }
                    return e.interval *= ++e.count, new Promise((n, r) => {
                        setTimeout(async () => {
                            try {
                                await e$(t, e), n(!0)
                            } catch (t) {
                                r(t)
                            }
                        }, e.interval)
                    })
                }
            }
            let eW = "__THROTTLED";
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
                constructor({
                    options: t,
                    recordingOptions: e
                }) {
                    eq.prototype.__init.call(this), eq.prototype.__init2.call(this), eq.prototype.__init3.call(this), eq.prototype.__init4.call(this), eq.prototype.__init5.call(this), eq.prototype.__init6.call(this), eq.prototype.__init7.call(this), eq.prototype.__init8.call(this), eq.prototype.__init9.call(this), eq.prototype.__init10.call(this), eq.prototype.__init11.call(this), eq.prototype.__init12.call(this), eq.prototype.__init13.call(this), eq.prototype.__init14.call(this), eq.prototype.__init15.call(this), eq.prototype.__init16.call(this), eq.prototype.__init17.call(this), eq.prototype.__init18.call(this), this._recordingOptions = e, this._options = t, this._debouncedFlush = function(t, e, n) {
                        let r, i, a;
                        let o = n && n.maxWait ? Math.max(n.maxWait, e) : 0;

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
                        return (...e) => {
                            let n = Math.floor(Date.now() / 1e3);
                            if (i(n), a() >= 300) {
                                let t = o;
                                return o = !0, t ? "__SKIPPED" : eW
                            }
                            o = !1;
                            let s = r.get(n) || 0;
                            return r.set(n, s + 1), t(...e)
                        }
                    }((t, e) => el(this, t, e), 300, 5);
                    let {
                        slowClickTimeout: n,
                        slowClickIgnoreSelectors: r
                    } = this.getOptions(), i = n ? {
                        threshold: Math.min(3e3, n),
                        timeout: n,
                        scrollTimeout: 300,
                        ignoreSelector: r ? r.join(",") : ""
                    } : void 0;
                    i && (this.clickDetector = new tX(this, i))
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
                    if (!(t <= 0) || !(e <= 0)) {
                        if (this._loadAndCheckSession()) {
                            if (!this.session) {
                                this._handleException(Error("Unable to initialize and create session"));
                                return
                            }
                            this.session.sampled && "session" !== this.session.sampled && (this.recordingMode = "buffer"), this._initializeRecording()
                        }
                    }
                }
                start() {
                    if (this._isEnabled && "session" === this.recordingMode) throw Error("Replay recording is already in progress");
                    if (this._isEnabled && "buffer" === this.recordingMode) throw Error("Replay buffering is in progress, call `flush()` to save the replay");
                    let t = this.session && this.session.id,
                        {
                            session: e
                        } = ec({
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
                        } = ec({
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
                        this._stopRecording = tq({
                            ...this._recordingOptions,
                            ..."buffer" === this.recordingMode && {
                                checkoutEveryNms: 6e4
                            },
                            emit: (t = this, e = !1, (n, r) => {
                                if (!t.checkAndHandleExpiredSession()) {
                                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.warn("[Replay] Received replay event after session expired.");
                                    return
                                }
                                let i = r || !e;
                                e = !0, t.addUpdate(() => {
                                    if ("buffer" === t.recordingMode && i && t.setInitialState(), el(t, n, i), !i) return !1;
                                    if (function(t, e) {
                                            e && t.session && 0 === t.session.segmentId ? el(t, function(t) {
                                                let e = t.getOptions();
                                                return {
                                                    type: m.Custom,
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
                                            let n = t.getOptions()._experiments.traceInternals ? console.info : k.logger.info;
                                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n(`[Replay] Updating session start time to earliest event in buffer at ${e}`), t.session.started = e, t.getOptions().stickySession && es(t.session)
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
                            let e = `[Replay] Stopping Replay${t?` triggered by ${t}`:""}`;
                            (this.getOptions()._experiments.traceInternals ? console.warn : k.logger.log)(e)
                        }
                        this._isEnabled = !1, this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), "session" === this.recordingMode && await this._flush({
                                force: !0
                            }), this.eventBuffer && this.eventBuffer.destroy(), this.eventBuffer = null, e = this,
                            function() {
                                if (er()) try {
                                    R.sessionStorage.removeItem(N)
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
                async sendBufferedReplayOrFlush({
                    continueRecording: t = !0
                } = {}) {
                    if ("session" === this.recordingMode) return this.flushImmediate();
                    let e = Date.now(),
                        n = this.getOptions()._experiments.traceInternals ? console.info : k.logger.info;
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n(`[Replay] Converting buffer to session, starting at ${e}`), await this.flushImmediate();
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
                    if (this._lastActivity && ei(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled) {
                        this.pause();
                        return
                    }
                    return this._loadAndCheckSession() ? t === this.getSessionId() || (this._triggerFullSnapshot(), !1) : void 0
                }
                setInitialState() {
                    let t = `${R.location.pathname}${R.location.hash}${R.location.search}`,
                        e = `${R.location.origin}${t}`;
                    this.performanceEvents = [], this._clearContext(), this._context.initialUrl = e, this._context.initialTimestamp = Date.now(), this._context.urls.push(e)
                }
                throttledAddEvent(t, e) {
                    let n = this._throttledAddEvent(t, e);
                    if (n === eW) {
                        let t = t1({
                            category: "replay.throttled"
                        });
                        this.addUpdate(() => {
                            el(this, {
                                type: m.Custom,
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
                    let t = this.lastTransaction || (0, T.getCurrentHub)().getScope().getTransaction();
                    if (t && ["route", "custom"].includes(t.metadata.source)) return t.name
                }
                _initializeRecording() {
                    this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = function({
                        useCompression: t
                    }) {
                        if (t && window.Worker) try {
                            let t = function() {
                                let t = new Blob([t8]);
                                return URL.createObjectURL(t)
                            }();
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Using compression worker");
                            let e = new Worker(t);
                            return new en(e)
                        } catch (t) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Failed to create compression worker")
                        }
                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Using simple buffer"), new t9
                    }({
                        useCompression: this._options.useCompression
                    }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this.startRecording()
                }
                _handleException(t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay]", t), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this._options._experiments && this._options._experiments.captureExceptions && (0, T.captureException)(t)
                }
                _loadAndCheckSession() {
                    let {
                        type: t,
                        session: e
                    } = ec({
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
                        R.document.addEventListener("visibilitychange", this._handleVisibilityChange), R.addEventListener("blur", this._handleWindowBlur), R.addEventListener("focus", this._handleWindowFocus), R.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), !this._hasInitializedCoreListeners && (! function(t) {
                            var e;
                            let n = (0, T.getCurrentHub)().getScope(),
                                r = (0, T.getCurrentHub)().getClient();
                            n && n.addScopeListener(eM(t)), (0, k.addInstrumentationHandler)("dom", t5(t)), (0, k.addInstrumentationHandler)("history", (e = t, t => {
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
                                    let e = (0, T.getCurrentHub)().getClient();
                                    try {
                                        let i = new TextEncoder,
                                            {
                                                networkDetailAllowUrls: a,
                                                networkDetailDenyUrls: o,
                                                networkCaptureBodies: s,
                                                networkRequestHeaders: u,
                                                networkResponseHeaders: c
                                            } = t.getOptions(),
                                            l = {
                                                replay: t,
                                                textEncoder: i,
                                                networkDetailAllowUrls: a,
                                                networkDetailDenyUrls: o,
                                                networkCaptureBodies: s,
                                                networkRequestHeaders: u,
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
                                                    } = e, a = ey(i, n.textEncoder), o = r.getResponseHeader("content-length") ? ev(r.getResponseHeader("content-length")) : ey(r.response, n.textEncoder);
                                                    void 0 !== a && (t.data.request_body_size = a), void 0 !== o && (t.data.response_body_size = o)
                                                }(e, n, t), eB(e, n, t)),
                                                function(t) {
                                                    return "fetch" === t.category
                                                }(e) && function(t) {
                                                    return t && t.response
                                                }(n) && (! function(t, e, n) {
                                                    let {
                                                        input: r,
                                                        response: i
                                                    } = e, a = ey(eO(r), n.textEncoder), o = i ? ev(i.headers.get("content-length")) : void 0;
                                                    void 0 !== a && (t.data.request_body_size = a), void 0 !== o && (t.data.response_body_size = o)
                                                }(e, n, t), eR(e, n, t))
                                            } catch (t) {
                                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.warn("Error when enriching network breadcrumb")
                                            }
                                        })(l, t, e));
                                        else {
                                            var n, r;
                                            (0, k.addInstrumentationHandler)("fetch", (n = t, t => {
                                                if (!!n.isEnabled()) e_(n, function(t) {
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
                                                }(t))
                                            })), (0, k.addInstrumentationHandler)("xhr", (r = t, t => {
                                                if (!!r.isEnabled()) e_(r, function(t) {
                                                    let {
                                                        startTimestamp: e,
                                                        endTimestamp: n,
                                                        xhr: r
                                                    } = t, i = r[k.SENTRY_XHR_DATA_KEY];
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
                                                }(t))
                                            }))
                                        }
                                    } catch (t) {}
                                }(t), (0, T.addGlobalEventProcessor)(function(t, e = !1) {
                                    let n = e ? ep(t) : void 0;
                                    return (e, r) => {
                                        var i, a, o, s;
                                        if ("replay_event" === e.type) return delete e.breadcrumbs, e;
                                        if (e.type && !ef(e)) return e;
                                        if (i = e, a = r, !i.type && i.exception && i.exception.values && i.exception.values.length && (a.originalException && a.originalException.__rrweb__ || i.exception.values.some(t => !!t.stacktrace && !!t.stacktrace.frames && !!t.stacktrace.frames.length && t.stacktrace.frames.some(t => t.filename && t.filename.includes("/rrweb/src/")))) && !t.getOptions()._experiments.captureExceptions) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Ignoring error from rrweb internals", e), null;
                                        return o = t, s = e, ("buffer" === o.recordingMode && s.message !== D && s.exception && !s.type && eo(o.getOptions().errorSampleRate) || "session" === t.recordingMode) && (e.tags = {
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
                                }(r) && (r.on("afterSendEvent", ep(t)), r.on("createDsc", e => {
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
                    "PerformanceObserver" in R && (this._performanceObserver = function(t) {
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
                        R.document.removeEventListener("visibilitychange", this._handleVisibilityChange), R.removeEventListener("blur", this._handleWindowBlur), R.removeEventListener("focus", this._handleWindowFocus), R.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceObserver && (this._performanceObserver.disconnect(), this._performanceObserver = null)
                    } catch (t) {
                        this._handleException(t)
                    }
                }
                __init13() {
                    this._handleVisibilityChange = () => {
                        "visible" === R.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
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
                                let s = e || r || i,
                                    u = 1 === a.length;
                                if (!s && u) return null;
                                let c = (0, k.htmlTreeAsString)(o, {
                                        maxStringLength: 200
                                    }) || "<unknown>",
                                    l = t3(o, c);
                                return t1({
                                    category: "ui.keyDown",
                                    message: c,
                                    data: {
                                        ...l.data,
                                        metaKey: e,
                                        shiftKey: n,
                                        ctrlKey: r,
                                        altKey: i,
                                        key: a
                                    }
                                })
                            }(e);
                            n && tV(t, n)
                        }(this, t)
                    }
                }
                _doChangeToBackgroundTasks(t) {
                    if (!this.session) return;
                    let e = ea(this.session, this.timeouts);
                    t && !e && this._createCustomBreadcrumb(t), this.conditionalFlush()
                }
                _doChangeToForegroundTasks(t) {
                    if (!!this.session) {
                        if (!this.checkAndHandleExpiredSession()) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Document has become active, but session has expired");
                            return
                        }
                        t && this._createCustomBreadcrumb(t)
                    }
                }
                _triggerFullSnapshot(t = !0) {
                    try {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Taking full rrweb snapshot"), tq.takeFullSnapshot(t)
                    } catch (t) {
                        this._handleException(t)
                    }
                }
                _updateUserActivity(t = Date.now()) {
                    this._lastActivity = t
                }
                _updateSessionActivity(t = Date.now()) {
                    this.session && (this.session.lastActivity = t, this._maybeSaveSession())
                }
                _createCustomBreadcrumb(t) {
                    this.addUpdate(() => {
                        this.throttledAddEvent({
                            type: m.Custom,
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
                    return this.performanceEvents = [], Promise.all(eh(this, t.map(eF).filter(Boolean)))
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
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay] No session or eventBuffer found to flush.");
                        return
                    }
                    if (await this._addPerformanceEntries(), !!this.eventBuffer && !!this.eventBuffer.hasEvents) {
                        if (await eP(this), this.eventBuffer) try {
                            this._updateInitialTimestampFromEventBuffer();
                            let t = await this.eventBuffer.finish(),
                                e = this.session.id,
                                n = this._popEventContext(),
                                r = this.session.segmentId++;
                            this._maybeSaveSession(), await e$({
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
                            let t = (0, T.getCurrentHub)().getClient();
                            t && t.recordDroppedEvent("send_error", "replay")
                        }
                    }
                }
                __init17() {
                    this._flush = async ({
                        force: t = !1
                    } = {}) => {
                        if (!this._isEnabled && !t) return;
                        if (!this.checkAndHandleExpiredSession()) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay] Attempting to finish replay event after session expired.");
                            return
                        }
                        if (!this.session) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay] No session found to flush.");
                            return
                        }
                        let e = this.session.started,
                            n = Date.now() - e;
                        if (n < this._options.minReplayDuration || n > this.timeouts.maxSessionLife + 5e3) {
                            let t = this.getOptions()._experiments.traceInternals ? console.warn : k.logger.warn;
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && t(`[Replay] Session duration (${Math.floor(n/1e3)}s) is too short or too long, not sending replay.`);
                            return
                        }
                        if (this._debouncedFlush.cancel(), !this._flushLock) {
                            this._flushLock = this._runFlush(), await this._flushLock, this._flushLock = null;
                            return
                        }
                        try {
                            await this._flushLock
                        } catch (t) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error(t)
                        } finally {
                            this._debouncedFlush()
                        }
                    }
                }
                _maybeSaveSession() {
                    this.session && this._options.stickySession && es(this.session)
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
            }

            function eZ(t, e, n, r) {
                let i = [...t, ..."string" == typeof r ? r.split(",") : [], ...e];
                return void 0 !== n && ("string" == typeof n && i.push(`.${n}`), console.warn("[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration.")), i.join(",")
            }

            function eV() {
                return "undefined" != typeof window && (!(0, k.isNodeEnv)() || function() {
                    return void 0 !== x && "renderer" === x.type
                }())
            }
            let eJ = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
                eK = ["content-length", "content-type", "accept"],
                eX = !1;
            class eQ {
                static __initStatic() {
                    this.id = "Replay"
                }
                __init() {
                    this.name = eQ.id
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
                    maskAllText: u = !0,
                    maskAllInputs: c = !0,
                    blockAllMedia: l = !0,
                    mutationBreadcrumbLimit: d = 750,
                    mutationLimit: f = 1e4,
                    slowClickTimeout: p = 7e3,
                    slowClickIgnoreSelectors: h = [],
                    networkDetailAllowUrls: _ = [],
                    networkDetailDenyUrls: g = [],
                    networkCaptureBodies: m = !0,
                    networkRequestHeaders: y = [],
                    networkResponseHeaders: v = [],
                    mask: b = [],
                    unmask: E = [],
                    block: S = [],
                    unblock: w = [],
                    ignore: T = [],
                    maskFn: k,
                    beforeAddRecordingEvent: x,
                    blockClass: R,
                    blockSelector: N,
                    maskInputOptions: D,
                    maskTextClass: I,
                    maskTextSelector: O,
                    ignoreClass: C
                } = {}) {
                    if (eQ.prototype.__init.call(this), this._recordingOptions = {
                            maskAllInputs: c,
                            maskAllText: u,
                            maskInputOptions: {
                                ...D || {},
                                password: !0
                            },
                            maskTextFn: k,
                            maskInputFn: k,
                            ... function({
                                mask: t,
                                unmask: e,
                                block: n,
                                unblock: r,
                                ignore: i,
                                blockClass: a,
                                blockSelector: o,
                                maskTextClass: s,
                                maskTextSelector: u,
                                ignoreClass: c
                            }) {
                                let l = eZ(t, [".sentry-mask", "[data-sentry-mask]"], s, u),
                                    d = eZ(e, [".sentry-unmask", "[data-sentry-unmask]"]),
                                    f = {
                                        maskTextSelector: l,
                                        unmaskTextSelector: d,
                                        maskInputSelector: l,
                                        unmaskInputSelector: d,
                                        blockSelector: eZ(n, [".sentry-block", "[data-sentry-block]", 'base[href="/"]'], a, o),
                                        unblockSelector: eZ(r, [".sentry-unblock", "[data-sentry-unblock]"]),
                                        ignoreSelector: eZ(i, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'], c)
                                    };
                                return a instanceof RegExp && (f.blockClass = a), s instanceof RegExp && (f.maskTextClass = s), f
                            }({
                                mask: b,
                                unmask: E,
                                block: S,
                                unblock: w,
                                ignore: T,
                                blockClass: R,
                                blockSelector: N,
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
                            blockAllMedia: l,
                            maskAllInputs: c,
                            maskAllText: u,
                            mutationBreadcrumbLimit: d,
                            mutationLimit: f,
                            slowClickTimeout: p,
                            slowClickIgnoreSelectors: h,
                            networkDetailAllowUrls: _,
                            networkDetailDenyUrls: g,
                            networkCaptureBodies: m,
                            networkRequestHeaders: e0(y),
                            networkResponseHeaders: e0(v),
                            beforeAddRecordingEvent: x,
                            _experiments: a
                        }, "number" == typeof o && (console.warn(`[Replay] You are passing \`sessionSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysSessionSampleRate: ${o} })`), this._initialOptions.sessionSampleRate = o), "number" == typeof s && (console.warn(`[Replay] You are passing \`errorSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysOnErrorSampleRate: ${s} })`), this._initialOptions.errorSampleRate = s), this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${eJ}` : eJ), this._isInitialized && eV()) throw Error("Multiple Sentry Session Replay instances are not supported");
                    this._isInitialized = !0
                }
                get _isInitialized() {
                    return eX
                }
                set _isInitialized(t) {
                    eX = t
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
                        let e = (0, T.getCurrentHub)().getClient(),
                            n = e && e.getOptions(),
                            r = {
                                sessionSampleRate: 0,
                                errorSampleRate: 0,
                                ...(0, k.dropUndefinedKeys)(t)
                            };
                        return n ? (null == t.sessionSampleRate && null == t.errorSampleRate && null == n.replaysSessionSampleRate && null == n.replaysOnErrorSampleRate && console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set."), "number" == typeof n.replaysSessionSampleRate && (r.sessionSampleRate = n.replaysSessionSampleRate), "number" == typeof n.replaysOnErrorSampleRate && (r.errorSampleRate = n.replaysOnErrorSampleRate), r) : (console.warn("SDK client is not available."), r)
                    }(this._initialOptions);
                    this._replay = new eq({
                        options: t,
                        recordingOptions: this._recordingOptions
                    })
                }
            }
            eQ.__initStatic();

            function e0(t) {
                return [...eK, ...t.map(t => t.toLowerCase())]
            }
        },
        147658: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                applyAggregateErrorsToEvent: function() {
                    return a
                }
            });
            var r = n("46834"),
                i = n("336344");

            function a(t, e, n = 250, a, u, c, l) {
                if (!c.exception || !c.exception.values || !l || !(0, r.isInstanceOf)(l.originalException, Error)) return;
                let d = c.exception.values.length > 0 ? c.exception.values[c.exception.values.length - 1] : void 0;
                d && (c.exception.values = function(t, e) {
                    return t.map(t => (t.value && (t.value = (0, i.truncate)(t.value, e)), t))
                }(function t(e, n, i, a, u, c, l, d) {
                    if (c.length >= i + 1) return c;
                    let f = [...c];
                    if ((0, r.isInstanceOf)(a[u], Error)) {
                        o(l, d);
                        let r = e(n, a[u]),
                            c = f.length;
                        s(r, u, c, d), f = t(e, n, i, a[u], u, [r, ...f], r, c)
                    }
                    return Array.isArray(a.errors) && a.errors.forEach((a, c) => {
                        if ((0, r.isInstanceOf)(a, Error)) {
                            o(l, d);
                            let r = e(n, a),
                                p = f.length;
                            s(r, `errors[${c}]`, p, d), f = t(e, n, i, a, u, [r, ...f], r, p)
                        }
                    }), f
                }(t, e, u, l.originalException, a, c.exception.values, d, 0), n))
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
        545459: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BAGGAGE_HEADER_NAME: function() {
                    return a
                },
                baggageHeaderToDynamicSamplingContext: function() {
                    return u
                },
                dynamicSamplingContextToSentryBaggageHeader: function() {
                    return c
                }
            });
            var r = n("46834"),
                i = n("529866");
            let a = "baggage",
                o = "sentry-",
                s = /^sentry-/;

            function u(t) {
                if (!(0, r.isString)(t) && !Array.isArray(t)) return;
                let e = {};
                if (Array.isArray(t)) e = t.reduce((t, e) => {
                    let n = l(e);
                    return {
                        ...t,
                        ...n
                    }
                }, {});
                else {
                    if (!t) return;
                    e = l(t)
                }
                let n = Object.entries(e).reduce((t, [e, n]) => (e.match(s) && (t[e.slice(o.length)] = n), t), {});
                return Object.keys(n).length > 0 ? n : void 0
            }

            function c(t) {
                if (!!t) return function(t) {
                    if (0 !== Object.keys(t).length) return Object.entries(t).reduce((t, [e, n], r) => {
                        let a = `${encodeURIComponent(e)}=${encodeURIComponent(n)}`,
                            o = 0 === r ? a : `${t},${a}`;
                        return o.length > 8192 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn(`Not adding key: ${e} with val: ${n} to baggage header due to exceeding baggage size limits.`), t) : o
                    }, "")
                }(Object.entries(t).reduce((t, [e, n]) => (n && (t[`${o}${e}`] = n), t), {}))
            }

            function l(t) {
                return t.split(",").map(t => t.split("=").map(t => decodeURIComponent(t.trim()))).reduce((t, [e, n]) => (t[e] = n, t), {})
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
            });
            var r = n("46834");
            let i = (0, n("24716").getGlobalObject)();

            function a(t, e = {}) {
                try {
                    let n, i = t,
                        a = [],
                        o = 0,
                        s = 0,
                        u = 3,
                        c = Array.isArray(e) ? e : e.keyAttrs,
                        l = !Array.isArray(e) && e.maxStringLength || 80;
                    for (; i && o++ < 5 && (n = function(t, e) {
                            let n, i, a, o, s;
                            let u = [];
                            if (!t || !t.tagName) return "";
                            u.push(t.tagName.toLowerCase());
                            let c = e && e.length ? e.filter(e => t.getAttribute(e)).map(e => [e, t.getAttribute(e)]) : null;
                            if (c && c.length) c.forEach(t => {
                                u.push(`[${t[0]}="${t[1]}"]`)
                            });
                            else if (t.id && u.push(`#${t.id}`), (n = t.className) && (0, r.isString)(n))
                                for (s = 0, i = n.split(/\s+/); s < i.length; s++) u.push(`.${i[s]}`);
                            let l = ["aria-label", "type", "name", "title", "alt"];
                            for (s = 0; s < l.length; s++) a = l[s], (o = t.getAttribute(a)) && u.push(`[${a}="${o}"]`);
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
        177668: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                dsnFromString: function() {
                    return o
                },
                dsnToString: function() {
                    return a
                },
                makeDsn: function() {
                    return u
                }
            });
            var r = n("529866");
            let i = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

            function a(t, e = !1) {
                let {
                    host: n,
                    path: r,
                    pass: i,
                    port: a,
                    projectId: o,
                    protocol: s,
                    publicKey: u
                } = t;
                return `${s}://${u}${e&&i?`:${i}`:""}@${n}${a?`:${a}`:""}/${r?`${r}/`:r}${o}`
            }

            function o(t) {
                let e = i.exec(t);
                if (!e) {
                    console.error(`Invalid Sentry Dsn: ${t}`);
                    return
                }
                let [n, r, a = "", o, u = "", c] = e.slice(1), l = "", d = c, f = d.split("/");
                if (f.length > 1 && (l = f.slice(0, -1).join("/"), d = f.pop()), d) {
                    let t = d.match(/^\d+/);
                    t && (d = t[0])
                }
                return s({
                    host: o,
                    pass: a,
                    path: l,
                    projectId: d,
                    port: u,
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

            function u(t) {
                let e = "string" == typeof t ? o(t) : s(t);
                if (e && function(t) {
                        var e;
                        if (!("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__)) return !0;
                        let {
                            port: n,
                            projectId: i,
                            protocol: a
                        } = t;
                        if (["protocol", "publicKey", "host", "projectId"].find(e => !t[e] && (r.logger.error(`Invalid Sentry Dsn: ${e} missing`), !0))) return !1;
                        if (!i.match(/^\d+$/)) return r.logger.error(`Invalid Sentry Dsn: Invalid projectId ${i}`), !1;
                        return "http" === (e = a) || "https" === e ? !(n && isNaN(parseInt(n, 10))) || (r.logger.error(`Invalid Sentry Dsn: Invalid port ${n}`), !1) : (r.logger.error(`Invalid Sentry Dsn: Invalid protocol ${a}`), !1)
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
                    return s
                },
                createAttachmentEnvelopeItem: function() {
                    return p
                },
                createEnvelope: function() {
                    return o
                },
                createEventEnvelopeHeaders: function() {
                    return m
                },
                envelopeContainsItemType: function() {
                    return c
                },
                envelopeItemTypeToDataCategory: function() {
                    return _
                },
                forEachEnvelopeItem: function() {
                    return u
                },
                getSdkMetadataForEnvelopeHeader: function() {
                    return g
                },
                parseEnvelope: function() {
                    return f
                },
                serializeEnvelope: function() {
                    return d
                }
            });
            var r = n("177668"),
                i = n("10674"),
                a = n("442853");

            function o(t, e = []) {
                return [t, e]
            }

            function s(t, e) {
                let [n, r] = t;
                return [n, [...r, e]]
            }

            function u(t, e) {
                for (let n of t[1]) {
                    let t = n[0].type;
                    if (e(n, t)) return !0
                }
                return !1
            }

            function c(t, e) {
                return u(t, (t, n) => e.includes(n))
            }

            function l(t, e) {
                return (e || new TextEncoder).encode(t)
            }

            function d(t, e) {
                let [n, r] = t, a = JSON.stringify(n);

                function o(t) {
                    "string" == typeof a ? a = "string" == typeof t ? a + t : [l(a, e), t] : a.push("string" == typeof t ? l(t, e) : t)
                }
                for (let t of r) {
                    let [e, n] = t;
                    if (o(`
${JSON.stringify(e)}
`), "string" == typeof n || n instanceof Uint8Array) o(n);
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

            function p(t, e) {
                let n = "string" == typeof t.data ? l(t.data, e) : t.data;
                return [(0, a.dropUndefinedKeys)({
                    type: "attachment",
                    length: n.length,
                    filename: t.filename,
                    content_type: t.contentType,
                    attachment_type: t.attachmentType
                }), n]
            }
            let h = {
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
                return h[t]
            }

            function g(t) {
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

            function m(t, e, n, i) {
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
        303155: function(t, e, n) {
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
                    return b.SyncPromise
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
                    return T.addItemToEnvelope
                },
                addNonEnumerableProperty: function() {
                    return h.addNonEnumerableProperty
                },
                applyAggregateErrorsToEvent: function() {
                    return r.applyAggregateErrorsToEvent
                },
                arrayify: function() {
                    return d.arrayify
                },
                browserPerformanceTimeOrigin: function() {
                    return E.browserPerformanceTimeOrigin
                },
                checkOrSetAlreadyCaught: function() {
                    return d.checkOrSetAlreadyCaught
                },
                consoleSandbox: function() {
                    return l.consoleSandbox
                },
                createAttachmentEnvelopeItem: function() {
                    return T.createAttachmentEnvelopeItem
                },
                createClientReportEnvelope: function() {
                    return k.createClientReportEnvelope
                },
                createEnvelope: function() {
                    return T.createEnvelope
                },
                createEventEnvelopeHeaders: function() {
                    return T.createEventEnvelopeHeaders
                },
                createStackParser: function() {
                    return m.createStackParser
                },
                dateTimestampInSeconds: function() {
                    return E.dateTimestampInSeconds
                },
                dropUndefinedKeys: function() {
                    return h.dropUndefinedKeys
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
                    return T.envelopeContainsItemType
                },
                envelopeItemTypeToDataCategory: function() {
                    return T.envelopeItemTypeToDataCategory
                },
                extractExceptionKeysForMessage: function() {
                    return h.extractExceptionKeysForMessage
                },
                extractTraceparentData: function() {
                    return S.extractTraceparentData
                },
                fill: function() {
                    return h.fill
                },
                forEachEnvelopeItem: function() {
                    return T.forEachEnvelopeItem
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
                    return h.getOriginalFunction
                },
                getSDKSource: function() {
                    return w.getSDKSource
                },
                getSdkMetadataForEnvelopeHeader: function() {
                    return T.getSdkMetadataForEnvelopeHeader
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
                    return v.isNativeFetch
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
                    return _.makePromiseBuffer
                },
                markFunctionWrapped: function() {
                    return h.markFunctionWrapped
                },
                normalize: function() {
                    return p.normalize
                },
                normalizeToSize: function() {
                    return p.normalizeToSize
                },
                parseEnvelope: function() {
                    return T.parseEnvelope
                },
                parseRetryAfterHeader: function() {
                    return x.parseRetryAfterHeader
                },
                parseUrl: function() {
                    return N.parseUrl
                },
                rejectedSyncPromise: function() {
                    return b.rejectedSyncPromise
                },
                resolvedSyncPromise: function() {
                    return b.resolvedSyncPromise
                },
                safeJoin: function() {
                    return y.safeJoin
                },
                serializeEnvelope: function() {
                    return T.serializeEnvelope
                },
                severityLevelFromString: function() {
                    return g.severityLevelFromString
                },
                stackParserFromStackParserOptions: function() {
                    return m.stackParserFromStackParserOptions
                },
                stringMatchesSomePattern: function() {
                    return y.stringMatchesSomePattern
                },
                supportsFetch: function() {
                    return v.supportsFetch
                },
                timestampInSeconds: function() {
                    return E.timestampInSeconds
                },
                tracingContextFromHeaders: function() {
                    return S.tracingContextFromHeaders
                },
                truncate: function() {
                    return y.truncate
                },
                updateRateLimits: function() {
                    return x.updateRateLimits
                },
                urlEncode: function() {
                    return h.urlEncode
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
                p = n("10674"),
                h = n("442853"),
                _ = n("765497"),
                g = n("869139"),
                m = n("432038"),
                y = n("336344"),
                v = n("698892"),
                b = n("880803"),
                E = n("868145"),
                S = n("874230"),
                w = n("776914"),
                T = n("50074"),
                k = n("854569"),
                x = n("128603"),
                R = n("545459"),
                N = n("841866")
        },
        793884: function(t, e, n) {
            "use strict";
            let r, i, a;
            n.r(e), n.d(e, {
                SENTRY_XHR_DATA_KEY: function() {
                    return h
                },
                addInstrumentationHandler: function() {
                    return m
                }
            });
            var o = n("46834"),
                s = n("529866"),
                u = n("442853"),
                c = n("432038"),
                l = n("698892"),
                d = n("24716"),
                f = n("30865");
            let p = (0, d.getGlobalObject)(),
                h = "__sentry_xhr_v2__",
                _ = {},
                g = {};

            function m(t, e) {
                _[t] = _[t] || [], _[t].push(e), ! function(t) {
                    if (!g[t]) switch (g[t] = !0, t) {
                        case "console":
                            (function() {
                                "console" in p && s.CONSOLE_LEVELS.forEach(function(t) {
                                    t in p.console && (0, u.fill)(p.console, t, function(e) {
                                        return function(...n) {
                                            y("console", {
                                                args: n,
                                                level: t
                                            }), e && e.apply(p.console, n)
                                        }
                                    })
                                })
                            })();
                            break;
                        case "dom":
                            (function() {
                                if (!("document" in p)) return;
                                let t = y.bind(null, "dom"),
                                    e = E(t, !0);
                                p.document.addEventListener("click", e, !1), p.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(e => {
                                    let n = p[e] && p[e].prototype;
                                    n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0, u.fill)(n, "addEventListener", function(e) {
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
                                    }), (0, u.fill)(n, "removeEventListener", function(t) {
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
                                if (!("XMLHttpRequest" in p)) return;
                                let t = XMLHttpRequest.prototype;
                                (0, u.fill)(t, "open", function(t) {
                                    return function(...e) {
                                        let n = e[1],
                                            r = this[h] = {
                                                method: (0, o.isString)(e[0]) ? e[0].toUpperCase() : e[0],
                                                url: e[1],
                                                request_headers: {}
                                            };
                                        (0, o.isString)(n) && "POST" === r.method && n.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                                        let i = () => {
                                            let t = this[h];
                                            if (t && 4 === this.readyState) {
                                                try {
                                                    t.status_code = this.status
                                                } catch (t) {}
                                                y("xhr", {
                                                    args: e,
                                                    endTimestamp: Date.now(),
                                                    startTimestamp: Date.now(),
                                                    xhr: this
                                                })
                                            }
                                        };
                                        return "onreadystatechange" in this && "function" == typeof this.onreadystatechange ? (0, u.fill)(this, "onreadystatechange", function(t) {
                                            return function(...e) {
                                                return i(), t.apply(this, e)
                                            }
                                        }) : this.addEventListener("readystatechange", i), (0, u.fill)(this, "setRequestHeader", function(t) {
                                            return function(...e) {
                                                let [n, r] = e, i = this[h];
                                                return i && (i.request_headers[n.toLowerCase()] = r), t.apply(this, e)
                                            }
                                        }), t.apply(this, e)
                                    }
                                }), (0, u.fill)(t, "send", function(t) {
                                    return function(...e) {
                                        let n = this[h];
                                        return n && void 0 !== e[0] && (n.body = e[0]), y("xhr", {
                                            args: e,
                                            startTimestamp: Date.now(),
                                            xhr: this
                                        }), t.apply(this, e)
                                    }
                                })
                            })();
                            break;
                        case "fetch":
                            (function() {
                                (0, l.supportsNativeFetch)() && (0, u.fill)(p, "fetch", function(t) {
                                    return function(...e) {
                                        let {
                                            method: n,
                                            url: r
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
                                        }(e), i = {
                                            args: e,
                                            fetchData: {
                                                method: n,
                                                url: r
                                            },
                                            startTimestamp: Date.now()
                                        };
                                        return y("fetch", {
                                            ...i
                                        }), t.apply(p, e).then(t => (y("fetch", {
                                            ...i,
                                            endTimestamp: Date.now(),
                                            response: t
                                        }), t), t => {
                                            throw y("fetch", {
                                                ...i,
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
                                let t = p.onpopstate;

                                function e(t) {
                                    return function(...e) {
                                        let n = e.length > 2 ? e[2] : void 0;
                                        if (n) {
                                            let t = r,
                                                e = String(n);
                                            r = e, y("history", {
                                                from: t,
                                                to: e
                                            })
                                        }
                                        return t.apply(this, e)
                                    }
                                }
                                p.onpopstate = function(...e) {
                                    let n = p.location.href,
                                        i = r;
                                    if (r = n, y("history", {
                                            from: i,
                                            to: n
                                        }), t) try {
                                        return t.apply(this, e)
                                    } catch (t) {}
                                }, (0, u.fill)(p.history, "pushState", e), (0, u.fill)(p.history, "replaceState", e)
                            })();
                            break;
                        case "error":
                            (function() {
                                S = p.onerror, p.onerror = function(t, e, n, r, i) {
                                    return y("error", {
                                        column: r,
                                        error: i,
                                        line: n,
                                        msg: t,
                                        url: e
                                    }), !!S && !S.__SENTRY_LOADER__ && S.apply(this, arguments)
                                }, p.onerror.__SENTRY_INSTRUMENTED__ = !0
                            })();
                            break;
                        case "unhandledrejection":
                            (function() {
                                w = p.onunhandledrejection, p.onunhandledrejection = function(t) {
                                    return y("unhandledrejection", t), !w || !!w.__SENTRY_LOADER__ || w.apply(this, arguments)
                                }, p.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
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
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${(0,c.getFunctionName)(n)}
Error:`, e)
                    }
            }

            function v(t, e) {
                return !!t && "object" == typeof t && !!t[e]
            }

            function b(t) {
                return "string" == typeof t ? t : t ? v(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
            }

            function E(t, e = !1) {
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
                    }), a = n), clearTimeout(i), i = p.setTimeout(() => {
                        i = void 0
                    }, 1e3)
                }
            }
            let S = null,
                w = null
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
                    return p
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
                    return m
                },
                isPlainObject: function() {
                    return d
                },
                isPrimitive: function() {
                    return l
                },
                isRegExp: function() {
                    return h
                },
                isString: function() {
                    return c
                },
                isSyntheticEvent: function() {
                    return g
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
                return r.call(t) === `[object ${e}]`
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
                return "undefined" != typeof Event && y(t, Event)
            }

            function p(t) {
                return "undefined" != typeof Element && y(t, Element)
            }

            function h(t) {
                return a(t, "RegExp")
            }

            function _(t) {
                return !!(t && t.then && "function" == typeof t.then)
            }

            function g(t) {
                return d(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
            }

            function m(t) {
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
        529866: function(t, e, n) {
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
            var i = n("24716");
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
                    e[n] = (...e) => {
                        t && o(() => {
                            i.GLOBAL_OBJ.console[n](`Sentry Logger [${n}]:`, ...e)
                        })
                    }
                }) : a.forEach(t => {
                    e[t] = () => void 0
                }), e
            }
            r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? (0, i.getGlobalSingleton)("logger", s) : s()
        },
        537198: function(t, e, n) {
            "use strict";

            function r() {
                let t = "function" == typeof WeakSet,
                    e = t ? new WeakSet : [];
                return [function(n) {
                    if (t) return !!e.has(n) || (e.add(n), !1);
                    for (let t = 0; t < e.length; t++)
                        if (e[t] === n) return !0;
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
        862315: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                addExceptionMechanism: function() {
                    return c
                },
                addExceptionTypeValue: function() {
                    return u
                },
                arrayify: function() {
                    return d
                },
                checkOrSetAlreadyCaught: function() {
                    return l
                },
                getEventDescription: function() {
                    return s
                },
                uuid4: function() {
                    return a
                }
            });
            var r = n("442853"),
                i = n("24716");

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
                if (r) return r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>";
                return n || "<unknown>"
            }

            function u(t, e, n) {
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

            function l(t) {
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
        635602: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                dynamicRequire: function() {
                    return o
                },
                isNodeEnv: function() {
                    return a
                }
            });
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
                    return s
                },
                normalizeToSize: function() {
                    return function t(e, n = 3, r = 102400) {
                        let i = s(e, n);
                        return function(t) {
                            return ~-encodeURI(JSON.stringify(t)).split(/%..|./).length
                        }(i) > r ? t(e, n - 1, r) : i
                    }
                }
            });
            var r = n("46834"),
                i = n("537198"),
                a = n("442853"),
                o = n("432038");

            function s(t, e = 100, s = 1 / 0) {
                try {
                    return function t(e, s, u = 1 / 0, c = 1 / 0, l = (0, i.memoBuilder)()) {
                        let [d, f] = l;
                        if (null == s || ["number", "boolean", "string"].includes(typeof s) && !(0, r.isNaN)(s)) return s;
                        let p = function(t, e) {
                            try {
                                if ("domain" === t && e && "object" == typeof e && e._events) return "[Domain]";
                                if ("domainEmitter" === t) return "[DomainEmitter]";
                                if (void 0 !== n.g && e === n.g) return "[Global]";
                                if ("undefined" != typeof window && e === window) return "[Window]";
                                if ("undefined" != typeof document && e === document) return "[Document]";
                                if ((0, r.isSyntheticEvent)(e)) return "[SyntheticEvent]";
                                if ("number" == typeof e && e != e) return "[NaN]";
                                if ("function" == typeof e) return `[Function: ${(0,o.getFunctionName)(e)}]`;
                                if ("symbol" == typeof e) return `[${String(e)}]`;
                                if ("bigint" == typeof e) return `[BigInt: ${String(e)}]`;
                                let i = function(t) {
                                    let e = Object.getPrototypeOf(t);
                                    return e ? e.constructor.name : "null prototype"
                                }(e);
                                if (/^HTML(\w*)Element$/.test(i)) return `[HTMLElement: ${i}]`;
                                return `[object ${i}]`
                            } catch (t) {
                                return `**non-serializable** (${t})`
                            }
                        }(e, s);
                        if (!p.startsWith("[object ")) return p;
                        if (s.__sentry_skip_normalization__) return s;
                        let h = "number" == typeof s.__sentry_override_normalization_depth__ ? s.__sentry_override_normalization_depth__ : u;
                        if (0 === h) return p.replace("object ", "");
                        if (d(s)) return "[Circular ~]";
                        if (s && "function" == typeof s.toJSON) try {
                            let e = s.toJSON();
                            return t("", e, h - 1, c, l)
                        } catch (t) {}
                        let _ = Array.isArray(s) ? [] : {},
                            g = 0,
                            m = (0, a.convertToPlainObject)(s);
                        for (let e in m) {
                            if (!Object.prototype.hasOwnProperty.call(m, e)) continue;
                            if (g >= c) {
                                _[e] = "[MaxProperties ~]";
                                break
                            }
                            let n = m[e];
                            _[e] = t(e, n, h - 1, c, l), g++
                        }
                        return f(s), _
                    }("", t, e, s)
                } catch (t) {
                    return {
                        ERROR: `**non-serializable** (${t})`
                    }
                }
            }
        },
        442853: function(t, e, n) {
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
                    return h
                },
                fill: function() {
                    return o
                },
                getOriginalFunction: function() {
                    return c
                },
                markFunctionWrapped: function() {
                    return u
                },
                urlEncode: function() {
                    return l
                }
            });
            var r = n("829919"),
                i = n("46834"),
                a = n("336344");

            function o(t, e, n) {
                if (!(e in t)) return;
                let r = t[e],
                    i = n(r);
                if ("function" == typeof i) try {
                    u(i, r)
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

            function u(t, e) {
                let n = e.prototype || {};
                t.prototype = e.prototype = n, s(t, "__sentry_original__", e)
            }

            function c(t) {
                return t.__sentry_original__
            }

            function l(t) {
                return Object.keys(t).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&")
            }

            function d(t) {
                if ((0, i.isError)(t)) return {
                    message: t.message,
                    name: t.name,
                    stack: t.stack,
                    ...p(t)
                };
                if (!(0, i.isEvent)(t)) return t;
                {
                    let e = {
                        type: t.type,
                        target: f(t.target),
                        currentTarget: f(t.currentTarget),
                        ...p(t)
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

            function p(t) {
                if ("object" != typeof t || null === t) return {};
                {
                    let e = {};
                    for (let n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }
            }

            function h(t, e = 40) {
                let n = Object.keys(d(t));
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
                }(t, new Map)
            }
        },
        765497: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                makePromiseBuffer: function() {
                    return a
                }
            });
            var r = n("303155"),
                i = n("880803");

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
        128603: function(t, e, n) {
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

            function r(t, e = Date.now()) {
                let n = parseInt(`${t}`, 10);
                if (!isNaN(n)) return 1e3 * n;
                let r = Date.parse(`${t}`);
                return isNaN(r) ? 6e4 : r - e
            }

            function i(t, e, n = Date.now()) {
                var r;
                return ((r = t)[e] || r.all || 0) > n
            }

            function a(t, {
                statusCode: e,
                headers: n
            }, i = Date.now()) {
                let a = {
                        ...t
                    },
                    o = n && n["x-sentry-rate-limits"],
                    s = n && n["retry-after"];
                if (o)
                    for (let t of o.trim().split(",")) {
                        let [e, n] = t.split(":", 2), r = parseInt(e, 10), o = (isNaN(r) ? 60 : r) * 1e3;
                        if (n)
                            for (let t of n.split(";")) a[t] = i + o;
                        else a.all = i + o
                    } else s ? a.all = i + r(s, i) : 429 === e && (a.all = i + 6e4);
                return a
            }
        },
        869139: function(t, e, n) {
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
        432038: function(t, e, n) {
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

            function i(...t) {
                let e = t.sort((t, e) => t[0] - e[0]).map(t => t[1]);
                return (t, n = 0) => {
                    let i = [],
                        a = t.split("\n");
                    for (let t = n; t < a.length; t++) {
                        let n = a[t];
                        if (n.length > 1024) continue;
                        let o = r.test(n) ? n.replace(r, "$1") : n;
                        if (!o.match(/\S*Error: /)) {
                            for (let t of e) {
                                let e = t(o);
                                if (e) {
                                    i.push(e);
                                    break
                                }
                            }
                            if (i.length >= 50) break
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
                    }(i)
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
            });
            var r = n("46834");

            function i(t, e = 0) {
                return "string" != typeof t || 0 === e ? t : t.length <= e ? t : `${t.slice(0,e)}...`
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

            function o(t, e = [], n = !1) {
                return e.some(e => (function(t, e, n = !1) {
                    return !!(0, r.isString)(t) && ((0, r.isRegExp)(e) ? e.test(t) : !!(0, r.isString)(e) && (n ? t === e : t.includes(e)))
                })(t, e, n))
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
            });
            var r = n("529866");
            let i = (0, n("24716").getGlobalObject)();

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
                let t = !1,
                    e = i.document;
                if (e && "function" == typeof e.createElement) try {
                    let n = e.createElement("iframe");
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
                    return u
                },
                rejectedSyncPromise: function() {
                    return s
                },
                resolvedSyncPromise: function() {
                    return o
                }
            });
            var r, i, a = n("46834");

            function o(t) {
                return new u(e => {
                    e(t)
                })
            }

            function s(t) {
                return new u((e, n) => {
                    n(t)
                })
            }(r = i || (i = {}))[r.PENDING = 0] = "PENDING", r[r.RESOLVED = 1] = "RESOLVED", r[r.REJECTED = 2] = "REJECTED";
            class u {
                __init() {
                    this._state = i.PENDING
                }
                __init2() {
                    this._handlers = []
                }
                constructor(t) {
                    u.prototype.__init.call(this), u.prototype.__init2.call(this), u.prototype.__init3.call(this), u.prototype.__init4.call(this), u.prototype.__init5.call(this), u.prototype.__init6.call(this);
                    try {
                        t(this._resolve, this._reject)
                    } catch (t) {
                        this._reject(t)
                    }
                }
                then(t, e) {
                    return new u((n, r) => {
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
                    return new u((e, n) => {
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
            }
        },
        868145: function(t, e, n) {
            "use strict";
            let r;
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
            var i = n("635602"),
                a = n("24716");
            t = n.hmd(t);
            let o = (0, a.getGlobalObject)(),
                s = {
                    nowSeconds: () => Date.now() / 1e3
                },
                u = (0, i.isNodeEnv)() ? function() {
                    try {
                        return (0, i.dynamicRequire)(t, "perf_hooks").performance
                    } catch (t) {
                        return
                    }
                }() : function() {
                    let {
                        performance: t
                    } = o;
                    if (!!t && !!t.now) return {
                        now: () => t.now(),
                        timeOrigin: Date.now() - t.now()
                    }
                }(),
                c = void 0 === u ? s : {
                    nowSeconds: () => (u.timeOrigin + u.now()) / 1e3
                },
                l = s.nowSeconds.bind(s),
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
            });
            var r = n("545459"),
                i = n("862315");
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
                        parentSpanId: u,
                        parentSampled: c
                    } = n || {},
                    l = {
                        traceId: s || (0, i.uuid4)(),
                        spanId: (0, i.uuid4)().substring(16),
                        sampled: void 0 !== c && c
                    };
                return u && (l.parentSpanId = u), a && (l.dsc = a), {
                    traceparentData: n,
                    dynamicSamplingContext: a,
                    propagationContext: l
                }
            }

            function u(t = (0, i.uuid4)(), e = (0, i.uuid4)().substring(16), n) {
                let r = "";
                return void 0 !== n && (r = n ? "-1" : "-0"), `${t}-${e}${r}`
            }
        },
        841866: function(t, e, n) {
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
        30865: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                supportsHistory: function() {
                    return i
                }
            });
            let r = (0, n("24716").getGlobalObject)();

            function i() {
                let t = r.chrome,
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
            });
            let i = "object" == typeof globalThis && r(globalThis) || "object" == typeof window && r(window) || "object" == typeof self && r(self) || "object" == typeof n.g && r(n.g) || function() {
                return this
            }() || {};

            function a() {
                return i
            }

            function o(t, e, n) {
                let r = n || i,
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
            });
            var r = n("91320"),
                i = n("648238"),
                a = n("607190");

            function o() {
                a.WINDOW && a.WINDOW.document ? a.WINDOW.document.addEventListener("visibilitychange", () => {
                    let t = (0, r.getActiveTransaction)();
                    if (a.WINDOW.document.hidden && t) {
                        let e = "cancelled";
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${t.op}`), !t.status && t.setStatus(e), t.setTag("visibilitychange", "document.hidden"), t.finish()
                    }
                }) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("[Tracing] Could not set up background tab detection due to lack of global document")
            }
        },
        204325: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BrowserTracing: function() {
                    return d
                }
            });
            var r = n("91320"),
                i = n("648238"),
                a = n("321611"),
                o = n("799821"),
                s = n("722994"),
                u = n("263951"),
                c = n("607190");
            let l = {
                ...r.TRACING_DEFAULTS,
                markBackgroundTransactions: !0,
                routingInstrumentation: u.instrumentRoutingWithDefaults,
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
                constructor(t) {
                    d.prototype.__init.call(this), d.prototype.__init2.call(this), (0, r.addTracingExtensions)(), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (this._hasSetTracePropagationTargets = !!(t && (t.tracePropagationTargets || t.tracingOrigins))), this.options = {
                        ...l,
                        ...t
                    }, void 0 !== this.options._experiments.enableLongTask && (this.options.enableLongTask = this.options._experiments.enableLongTask), t && !t.tracePropagationTargets && t.tracingOrigins && (this.options.tracePropagationTargets = t.tracingOrigins), this._collectWebVitals = (0, o.startTrackingWebVitals)(), this.options.enableLongTask && (0, o.startTrackingLongTasks)(), this.options._experiments.enableInteractions && (0, o.startTrackingInteractions)()
                }
                setupOnce(t, e) {
                    this._getCurrentHub = e;
                    let n = e().getClient(),
                        r = n && n.getOptions(),
                        {
                            routingInstrumentation: o,
                            startTransactionOnLocationChange: u,
                            startTransactionOnPageLoad: c,
                            markBackgroundTransactions: l,
                            traceFetch: d,
                            traceXHR: f,
                            shouldCreateSpanForRequest: p,
                            enableHTTPTimings: h,
                            _experiments: _
                        } = this.options,
                        g = r && r.tracePropagationTargets,
                        m = g || this.options.tracePropagationTargets;
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this._hasSetTracePropagationTargets && g && i.logger.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."), o(t => {
                        let n = this._createRouteTransaction(t);
                        return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(n, t, e), n
                    }, c, u), l && (0, a.registerBackgroundTabDetection)(), _.enableInteractions && this._registerInteractionListener(), (0, s.instrumentOutgoingRequests)({
                        traceFetch: d,
                        traceXHR: f,
                        tracePropagationTargets: m,
                        shouldCreateSpanForRequest: p,
                        enableHTTPTimings: h
                    })
                }
                _createRouteTransaction(t) {
                    if (!this._getCurrentHub) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn(`[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`);
                        return
                    }
                    let e = this._getCurrentHub(),
                        {
                            beforeNavigate: n,
                            idleTimeout: a,
                            finalTimeout: s,
                            heartbeatInterval: u
                        } = this.options,
                        l = "pageload" === t.op,
                        d = l ? f("sentry-trace") : "",
                        p = l ? f("baggage") : "",
                        {
                            traceparentData: h,
                            dynamicSamplingContext: _,
                            propagationContext: g
                        } = (0, i.tracingContextFromHeaders)(d, p),
                        m = {
                            ...t,
                            ...h,
                            metadata: {
                                ...t.metadata,
                                dynamicSamplingContext: h && !_ ? {} : _
                            },
                            trimEnd: !0
                        },
                        y = "function" == typeof n ? n(m) : m,
                        v = void 0 === y ? {
                            ...m,
                            sampled: !1
                        } : y;
                    v.metadata = v.name !== m.name ? {
                        ...v.metadata,
                        source: "custom"
                    } : v.metadata, this._latestRouteName = v.name, this._latestRouteSource = v.metadata && v.metadata.source, !1 === v.sampled && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log(`[Tracing] Will not send ${v.op} transaction because of beforeNavigate.`), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log(`[Tracing] Starting ${v.op} transaction on scope`);
                    let {
                        location: b
                    } = c.WINDOW, E = (0, r.startIdleTransaction)(e, v, a, s, !0, {
                        location: b
                    }, u), S = e.getScope();
                    return l && h ? S.setPropagationContext(g) : S.setPropagationContext({
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
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn(`[Tracing] Did not create ${o} transaction because a pageload or navigation transaction is in progress.`);
                            return
                        }
                        if (t && (t.setFinishReason("interactionInterrupted"), t.finish(), t = void 0), !this._getCurrentHub) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn(`[Tracing] Did not create ${o} transaction because _getCurrentHub is invalid.`);
                            return
                        }
                        if (!this._latestRouteName) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn(`[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`);
                            return
                        }
                        let u = this._getCurrentHub(),
                            {
                                location: l
                            } = c.WINDOW,
                            d = {
                                name: this._latestRouteName,
                                op: o,
                                trimEnd: !0,
                                metadata: {
                                    source: this._latestRouteSource || "url"
                                }
                            };
                        t = (0, r.startIdleTransaction)(u, d, e, n, !0, {
                            location: l
                        }, a)
                    };
                    ["click"].forEach(t => {
                        addEventListener(t, e, {
                            once: !1,
                            capture: !0
                        })
                    })
                }
            }

            function f(t) {
                let e = (0, i.getDomElement)(`meta[name=${t}]`);
                return e ? e.getAttribute("content") : void 0
            }
        },
        799821: function(t, e, n) {
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
            var a = n("91320"),
                o = n("648238"),
                s = n("607190"),
                u = n("540161"),
                c = n("282572"),
                l = n("301072"),
                d = n("233863"),
                f = n("544457"),
                p = n("72609");

            function h(t) {
                return t / 1e3
            }

            function _() {
                return s.WINDOW && s.WINDOW.addEventListener && s.WINDOW.performance
            }
            let g = 0,
                m = {};

            function y() {
                let t = _();
                if (t && o.browserPerformanceTimeOrigin) {
                    t.mark && s.WINDOW.performance.mark("sentry-tracing-init"),
                        function() {
                            (0, c.onFID)(t => {
                                let e = t.entries.pop();
                                if (!e) return;
                                let n = h(o.browserPerformanceTimeOrigin),
                                    r = h(e.startTime);
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding FID"), m.fid = {
                                    value: t.value,
                                    unit: "millisecond"
                                }, m["mark.fid"] = {
                                    value: n + r,
                                    unit: "second"
                                }
                            })
                        }();
                    let e = function() {
                            return (0, u.onCLS)(t => {
                                let e = t.entries.pop();
                                e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding CLS"), m.cls = {
                                    value: t.value,
                                    unit: ""
                                }, i = e)
                            })
                        }(),
                        n = function() {
                            return (0, l.onLCP)(t => {
                                let e = t.entries.pop();
                                e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding LCP"), m.lcp = {
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
                        let n = h(o.browserPerformanceTimeOrigin + e.startTime),
                            r = h(e.duration);
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
                            let n = h(o.browserPerformanceTimeOrigin + e.startTime),
                                r = h(e.duration);
                            t.startChild({
                                description: (0, o.htmlTreeAsString)(e.target),
                                op: `ui.interaction.${e.name}`,
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
                let u = h(o.browserPerformanceTimeOrigin),
                    c = a.getEntries();
                if (c.slice(g).forEach(r => {
                        let i = h(r.startTime),
                            a = h(r.duration);
                        if ("navigation" !== t.op || !(u + i < t.startTimestamp)) switch (r.entryType) {
                            case "navigation":
                                (function(t, e, n) {
                                    ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(r => {
                                            S(t, e, r, n)
                                        }), S(t, e, "secureConnection", n, "TLS/SSL", "connectEnd"), S(t, e, "fetch", n, "cache", "domainLookupStart"), S(t, e, "domainLookup", n, "DNS"),
                                        function(t, e, n) {
                                            (0, p._startChild)(t, {
                                                op: "browser",
                                                description: "request",
                                                startTimestamp: n + h(e.requestStart),
                                                endTimestamp: n + h(e.responseEnd)
                                            }), (0, p._startChild)(t, {
                                                op: "browser",
                                                description: "response",
                                                startTimestamp: n + h(e.responseStart),
                                                endTimestamp: n + h(e.responseEnd)
                                            })
                                        }(t, e, n)
                                })(t, r, u), e = u + h(r.responseStart), n = u + h(r.requestStart);
                                break;
                            case "mark":
                            case "paint":
                            case "measure": {
                                (function(t, e, n, r, i) {
                                    let a = i + n;
                                    (0, p._startChild)(t, {
                                        description: e.name,
                                        endTimestamp: a + r,
                                        op: e.entryType,
                                        startTimestamp: a
                                    })
                                })(t, r, i, a, u);
                                let e = (0, d.getVisibilityWatcher)(),
                                    n = r.startTime < e.firstHiddenTime;
                                "first-paint" === r.name && n && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding FP"), m.fp = {
                                    value: r.startTime,
                                    unit: "millisecond"
                                }), "first-contentful-paint" === r.name && n && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding FCP"), m.fcp = {
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
                                    let s = a + r;
                                    (0, p._startChild)(t, {
                                        description: n,
                                        endTimestamp: s + i,
                                        op: e.initiatorType ? `resource.${e.initiatorType}` : "resource.other",
                                        startTimestamp: s,
                                        data: o
                                    })
                                })(t, r, e, i, a, u)
                            }
                        }
                    }), g = Math.max(c.length - 1, 0), function(t) {
                        let e = s.WINDOW.navigator;
                        if (!e) return;
                        let n = e.connection;
                        n && (n.effectiveType && t.setTag("effectiveConnectionType", n.effectiveType), n.type && t.setTag("connectionType", n.type), (0, p.isMeasurementValue)(n.rtt) && (m["connection.rtt"] = {
                            value: n.rtt,
                            unit: "millisecond"
                        })), (0, p.isMeasurementValue)(e.deviceMemory) && t.setTag("deviceMemory", `${e.deviceMemory} GB`), (0, p.isMeasurementValue)(e.hardwareConcurrency) && t.setTag("hardwareConcurrency", String(e.hardwareConcurrency))
                    }(t), "pageload" === t.op) {
                    "number" == typeof e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding TTFB"), m.ttfb = {
                        value: (e - t.startTimestamp) * 1e3,
                        unit: "millisecond"
                    }, "number" == typeof n && n <= e && (m["ttfb.requestTime"] = {
                        value: (e - n) * 1e3,
                        unit: "millisecond"
                    })), ["fcp", "fp", "lcp"].forEach(e => {
                        if (!m[e] || u >= t.startTimestamp) return;
                        let n = m[e].value,
                            r = Math.abs((u + h(n) - t.startTimestamp) * 1e3),
                            i = r - n;
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log(`[Measurements] Normalized ${e} from ${n} to ${r} (${i})`), m[e].value = r
                    });
                    let a = m["mark.fid"];
                    a && m.fid && ((0, p._startChild)(t, {
                            description: "first input delay",
                            endTimestamp: a.value + h(m.fid.value),
                            op: "ui.action",
                            startTimestamp: a.value
                        }), delete m["mark.fid"]), !("fcp" in m) && delete m.cls, Object.keys(m).forEach(e => {
                            t.setMeasurement(e, m[e].value, m[e].unit)
                        }),
                        function(t) {
                            r && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding LCP Data"), r.element && t.setTag("lcp.element", (0, o.htmlTreeAsString)(r.element)), r.id && t.setTag("lcp.id", r.id), r.url && t.setTag("lcp.url", r.url.trim().slice(0, 200)), t.setTag("lcp.size", r.size)), i && i.sources && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding CLS Data"), i.sources.forEach((e, n) => t.setTag(`cls.source.${n+1}`, (0, o.htmlTreeAsString)(e.node))))
                        }(t)
                }
                r = void 0, i = void 0, m = {}
            }

            function S(t, e, n, r, i, a) {
                let o = a ? e[a] : e[`${n}End`],
                    s = e[`${n}Start`];
                s && o && (0, p._startChild)(t, {
                    op: "browser",
                    description: i || n,
                    startTimestamp: r + h(s),
                    endTimestamp: r + h(o)
                })
            }
        },
        72609: function(t, e, n) {
            "use strict";

            function r(t) {
                return "number" == typeof t && isFinite(t)
            }

            function i(t, {
                startTimestamp: e,
                ...n
            }) {
                return e && t.startTimestamp > e && (t.startTimestamp = e), t.startChild({
                    startTimestamp: e,
                    ...n
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
        722994: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                defaultRequestInstrumentationOptions: function() {
                    return o
                },
                instrumentOutgoingRequests: function() {
                    return s
                }
            });
            var r = n("91320"),
                i = n("648238");
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
                }, p = "function" == typeof d ? d : t => !0, h = t => (function(t, e) {
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
                                    let e = parseInt(t.response && t.response.headers && t.response.headers.get("content-length"));
                                    e > 0 && n.setData("http.response_content_length", e)
                                } else t.error && n.setStatus("internal_error");
                                n.finish(), delete a[e]
                            }
                            return
                        }
                        let s = (0, r.getCurrentHub)(),
                            u = s.getScope(),
                            c = s.getClient(),
                            l = u.getSpan(),
                            {
                                method: d,
                                url: f
                            } = t.fetchData,
                            p = o && l ? l.startChild({
                                data: {
                                    url: f,
                                    type: "fetch",
                                    "http.method": d
                                },
                                description: `${d} ${f}`,
                                op: "http.client"
                            }) : void 0;
                        if (p && (t.fetchData.__span = p.spanId, a[p.spanId] = p), n(t.fetchData.url) && c) {
                            let e = t.args[0];
                            t.args[1] = t.args[1] || {};
                            let n = t.args[1];
                            n.headers = function(t, e, n, a) {
                                let o = n.getSpan(),
                                    s = o && o.transaction,
                                    {
                                        traceId: u,
                                        sampled: c,
                                        dsc: l
                                    } = n.getPropagationContext(),
                                    d = o ? o.toTraceparent() : (0, i.generateSentryTraceHeader)(u, void 0, c),
                                    f = s ? s.getDynamicSamplingContext() : l || (0, r.getDynamicSamplingContextFromClient)(u, e, n),
                                    p = (0, i.dynamicSamplingContextToSentryBaggageHeader)(f),
                                    h = "undefined" != typeof Request && (0, i.isInstanceOf)(t, Request) ? t.headers : a.headers;
                                if (!h) return {
                                    "sentry-trace": d,
                                    baggage: p
                                };
                                if ("undefined" != typeof Headers && (0, i.isInstanceOf)(h, Headers)) {
                                    let t = new Headers(h);
                                    return t.append("sentry-trace", d), p && t.append(i.BAGGAGE_HEADER_NAME, p), t
                                }
                                if (Array.isArray(h)) {
                                    let t = [...h, ["sentry-trace", d]];
                                    return p && t.push([i.BAGGAGE_HEADER_NAME, p]), t
                                } else {
                                    let t = "baggage" in h ? h.baggage : void 0,
                                        e = [];
                                    return Array.isArray(t) ? e.push(...t) : t && e.push(t), p && e.push(p), {
                                        ...h,
                                        "sentry-trace": d,
                                        baggage: e.length > 0 ? e.join(",") : void 0
                                    }
                                }
                            }(e, c, u, n)
                        }
                        return p
                    }(t, p, h, _);
                    f && e && u(e)
                }), n && (0, i.addInstrumentationHandler)("xhr", t => {
                    let e = function(t, e, n, a) {
                        let o = t.xhr,
                            s = o && o[i.SENTRY_XHR_DATA_KEY];
                        if (!(0, r.hasTracingEnabled)() || o && o.__sentry_own_request__ || !o || !s) return;
                        let u = e(s.url);
                        if (t.endTimestamp && u) {
                            let t = o.__sentry_xhr_span_id__;
                            if (!t) return;
                            let e = a[t];
                            e && (e.setHttpStatus(s.status_code), e.finish(), delete a[t]);
                            return
                        }
                        let c = (0, r.getCurrentHub)(),
                            d = c.getScope(),
                            f = d.getSpan(),
                            p = u && f ? f.startChild({
                                data: {
                                    ...s.data,
                                    type: "xhr",
                                    "http.method": s.method,
                                    url: s.url
                                },
                                description: `${s.method} ${s.url}`,
                                op: "http.client"
                            }) : void 0;
                        if (p && (o.__sentry_xhr_span_id__ = p.spanId, a[o.__sentry_xhr_span_id__] = p), o.setRequestHeader && n(s.url)) {
                            if (p) {
                                let t = p && p.transaction,
                                    e = t && t.getDynamicSamplingContext(),
                                    n = (0, i.dynamicSamplingContextToSentryBaggageHeader)(e);
                                l(o, p.toTraceparent(), n)
                            } else {
                                let t = c.getClient(),
                                    {
                                        traceId: e,
                                        sampled: n,
                                        dsc: a
                                    } = d.getPropagationContext(),
                                    s = (0, i.generateSentryTraceHeader)(e, void 0, n),
                                    u = a || (t ? (0, r.getDynamicSamplingContextFromClient)(e, t, d) : void 0);
                                l(o, s, (0, i.dynamicSamplingContextToSentryBaggageHeader)(u))
                            }
                        }
                        return p
                    }(t, p, h, _);
                    f && e && u(e)
                })
            }

            function u(t) {
                let e = t.data.url,
                    n = new PerformanceObserver(r => {
                        r.getEntries().forEach(r => {
                            ("fetch" === r.initiatorType || "xmlhttprequest" === r.initiatorType) && r.name.endsWith(e) && ((function(t) {
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
                            })(r).forEach(e => t.setData(...e)), n.disconnect())
                        })
                    });
                n.observe({
                    entryTypes: ["resource"]
                })
            }

            function c(t) {
                return ((i.browserPerformanceTimeOrigin || performance.timeOrigin) + t) / 1e3
            }

            function l(t, e, n) {
                try {
                    t.setRequestHeader("sentry-trace", e), n && t.setRequestHeader(i.BAGGAGE_HEADER_NAME, n)
                } catch (t) {}
            }
        },
        263951: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                instrumentRoutingWithDefaults: function() {
                    return a
                }
            });
            var r = n("648238"),
                i = n("607190");

            function a(t, e = !0, n = !0) {
                let a;
                if (!i.WINDOW || !i.WINDOW.location) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Could not initialize routing instrumentation due to invalid location");
                    return
                }
                let o = i.WINDOW.location.href;
                e && (a = t({
                    name: i.WINDOW.location.pathname,
                    startTimestamp: r.browserPerformanceTimeOrigin ? r.browserPerformanceTimeOrigin / 1e3 : void 0,
                    op: "pageload",
                    metadata: {
                        source: "url"
                    }
                })), n && (0, r.addInstrumentationHandler)("history", ({
                    to: e,
                    from: n
                }) => {
                    if (void 0 === n && o && -1 !== o.indexOf(e)) {
                        o = void 0;
                        return
                    }
                    n !== e && (o = void 0, a && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] Finishing current transaction with op: ${a.op}`), a.finish()), a = t({
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
            let r = n("648238").GLOBAL_OBJ
        },
        540161: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                onCLS: function() {
                    return s
                }
            });
            var r = n("358133"),
                i = n("416097"),
                a = n("544457"),
                o = n("527475");
            let s = t => {
                let e;
                let n = (0, i.initMetric)("CLS", 0),
                    s = 0,
                    u = [],
                    c = t => {
                        t.forEach(t => {
                            if (!t.hadRecentInput) {
                                let r = u[0],
                                    i = u[u.length - 1];
                                s && 0 !== u.length && t.startTime - i.startTime < 1e3 && t.startTime - r.startTime < 5e3 ? (s += t.value, u.push(t)) : (s = t.value, u = [t]), s > n.value && (n.value = s, n.entries = u, e && e())
                            }
                        })
                    },
                    l = (0, a.observe)("layout-shift", c);
                if (l) {
                    e = (0, r.bindReporter)(t, n);
                    let i = () => {
                        c(l.takeRecords()), e(!0)
                    };
                    return (0, o.onHidden)(i), i
                }
            }
        },
        282572: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                onFID: function() {
                    return u
                }
            });
            var r = n("358133"),
                i = n("233863"),
                a = n("416097"),
                o = n("544457"),
                s = n("527475");
            let u = t => {
                let e;
                let n = (0, i.getVisibilityWatcher)(),
                    u = (0, a.initMetric)("FID"),
                    c = t => {
                        t.startTime < n.firstHiddenTime && (u.value = t.processingStart - t.startTime, u.entries.push(t), e(!0))
                    },
                    l = t => {
                        t.forEach(c)
                    },
                    d = (0, o.observe)("first-input", l);
                e = (0, r.bindReporter)(t, u), d && (0, s.onHidden)(() => {
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
            });
            var r = n("358133"),
                i = n("726300"),
                a = n("233863"),
                o = n("416097"),
                s = n("544457"),
                u = n("527475");
            let c = {},
                l = t => {
                    let e;
                    let n = (0, a.getVisibilityWatcher)(),
                        l = (0, o.initMetric)("LCP"),
                        d = t => {
                            let r = t[t.length - 1];
                            if (r) {
                                let t = Math.max(r.startTime - (0, i.getActivationStart)(), 0);
                                t < n.firstHiddenTime && (l.value = t, l.entries = [r], e())
                            }
                        },
                        f = (0, s.observe)("largest-contentful-paint", d);
                    if (f) {
                        e = (0, r.bindReporter)(t, l);
                        let n = () => {
                            !c[l.id] && (d(f.takeRecords()), f.disconnect(), c[l.id] = !0, e(!0))
                        };
                        return ["keydown", "click"].forEach(t => {
                            addEventListener(t, n, {
                                once: !0,
                                capture: !0
                            })
                        }), (0, u.onHidden)(n, !0), n
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
            let r = (t, e, n) => {
                let r, i;
                return a => {
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
            });
            let r = () => `v3-${Date.now()}-${Math.floor(Math.random()*(9e12-1))+1e12}`
        },
        726300: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getActivationStart: function() {
                    return i
                }
            });
            var r = n("27583");
            let i = () => {
                let t = (0, r.getNavigationEntry)();
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
            var r = n("607190");
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
        233863: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getVisibilityWatcher: function() {
                    return u
                }
            });
            var r = n("607190"),
                i = n("527475");
            let a = -1,
                o = () => "hidden" !== r.WINDOW.document.visibilityState || r.WINDOW.document.prerendering ? 1 / 0 : 0,
                s = () => {
                    (0, i.onHidden)(({
                        timeStamp: t
                    }) => {
                        a = t
                    }, !0)
                },
                u = () => (a < 0 && (a = o(), s()), {
                    get firstHiddenTime() {
                        return a
                    }
                })
        },
        416097: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                initMetric: function() {
                    return s
                }
            });
            var r = n("607190"),
                i = n("134954"),
                a = n("726300"),
                o = n("27583");
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
        544457: function(t, e, n) {
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
        527475: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                onHidden: function() {
                    return i
                }
            });
            var r = n("607190");
            let i = (t, e) => {
                let n = i => {
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
        654861: function(t, e, n) {
            t = n.nmd(t);
            var r = function(t) {
                "use strict";
                var e = l(9007199254740992),
                    n = "0123456789abcdefghijklmnopqrstuvwxyz",
                    i = "function" == typeof BigInt;

                function a(t, e, n, r) {
                    return void 0 === t ? a[0] : void 0 !== e ? 10 != +e || n ? F(t, e, n, r) : $(t) : $(t)
                }

                function o(t, e) {
                    this.value = t, this.sign = e, this.isSmall = !1
                }

                function s(t) {
                    this.value = t, this.sign = t < 0, this.isSmall = !0
                }

                function u(t) {
                    this.value = t
                }

                function c(t) {
                    return -9007199254740992 < t && t < 9007199254740992
                }

                function l(t) {
                    return t < 1e7 ? [t] : t < 1e14 ? [t % 1e7, Math.floor(t / 1e7)] : [t % 1e7, Math.floor(t / 1e7) % 1e7, Math.floor(t / 1e14)]
                }

                function d(t) {
                    f(t);
                    var n = t.length;
                    if (n < 4 && 0 > R(t, e)) switch (n) {
                        case 0:
                            return 0;
                        case 1:
                            return t[0];
                        case 2:
                            return t[0] + 1e7 * t[1];
                        default:
                            return t[0] + (t[1] + 1e7 * t[2]) * 1e7
                    }
                    return t
                }

                function f(t) {
                    for (var e = t.length; 0 === t[--e];);
                    t.length = e + 1
                }

                function p(t) {
                    for (var e = Array(t), n = -1; ++n < t;) e[n] = 0;
                    return e
                }

                function h(t) {
                    return t > 0 ? Math.floor(t) : Math.ceil(t)
                }

                function _(t, e) {
                    var n, r, i = t.length,
                        a = e.length,
                        o = Array(i),
                        s = 0;
                    for (r = 0; r < a; r++) s = (n = t[r] + e[r] + s) >= 1e7 ? 1 : 0, o[r] = n - 1e7 * s;
                    for (; r < i;) s = 1e7 === (n = t[r] + s) ? 1 : 0, o[r++] = n - 1e7 * s;
                    return s > 0 && o.push(s), o
                }

                function g(t, e) {
                    return t.length >= e.length ? _(t, e) : _(e, t)
                }

                function m(t, e) {
                    var n, r, i = t.length,
                        a = Array(i);
                    for (r = 0; r < i; r++) e = Math.floor((n = t[r] - 1e7 + e) / 1e7), a[r] = n - 1e7 * e, e += 1;
                    for (; e > 0;) a[r++] = e % 1e7, e = Math.floor(e / 1e7);
                    return a
                }

                function y(t, e) {
                    var n, r, i = t.length,
                        a = e.length,
                        o = Array(i),
                        s = 0;
                    for (n = 0; n < a; n++)(r = t[n] - s - e[n]) < 0 ? (r += 1e7, s = 1) : s = 0, o[n] = r;
                    for (n = a; n < i; n++) {
                        if ((r = t[n] - s) < 0) r += 1e7;
                        else {
                            o[n++] = r;
                            break
                        }
                        o[n] = r
                    }
                    for (; n < i; n++) o[n] = t[n];
                    return f(o), o
                }
                o.prototype = Object.create(a.prototype), s.prototype = Object.create(a.prototype), u.prototype = Object.create(a.prototype), o.prototype.add = function(t) {
                    var e = $(t);
                    if (this.sign !== e.sign) return this.subtract(e.negate());
                    var n = this.value,
                        r = e.value;
                    return e.isSmall ? new o(m(n, Math.abs(r)), this.sign) : new o(g(n, r), this.sign)
                }, o.prototype.plus = o.prototype.add, s.prototype.add = function(t) {
                    var e = $(t),
                        n = this.value;
                    if (n < 0 !== e.sign) return this.subtract(e.negate());
                    var r = e.value;
                    if (e.isSmall) {
                        if (c(n + r)) return new s(n + r);
                        r = l(Math.abs(r))
                    }
                    return new o(m(r, Math.abs(n)), n < 0)
                }, s.prototype.plus = s.prototype.add, u.prototype.add = function(t) {
                    return new u(this.value + $(t).value)
                }, u.prototype.plus = u.prototype.add;

                function v(t, e, n) {
                    var r, i, a = t.length,
                        u = Array(a),
                        c = -e;
                    for (r = 0; r < a; r++) c = Math.floor((i = t[r] + c) / 1e7), i %= 1e7, u[r] = i < 0 ? i + 1e7 : i;
                    return "number" == typeof(u = d(u)) ? (n && (u = -u), new s(u)) : new o(u, n)
                }

                function b(t, e) {
                    var n, r, i, a, o = t.length,
                        s = e.length,
                        u = p(o + s);
                    for (i = 0; i < o; ++i) {
                        a = t[i];
                        for (var c = 0; c < s; ++c) r = Math.floor((n = a * e[c] + u[i + c]) / 1e7), u[i + c] = n - 1e7 * r, u[i + c + 1] += r
                    }
                    return f(u), u
                }

                function E(t, e) {
                    var n, r, i = t.length,
                        a = Array(i),
                        o = 0;
                    for (r = 0; r < i; r++) o = Math.floor((n = t[r] * e + o) / 1e7), a[r] = n - 1e7 * o;
                    for (; o > 0;) a[r++] = o % 1e7, o = Math.floor(o / 1e7);
                    return a
                }

                function S(t, e) {
                    for (var n = []; e-- > 0;) n.push(0);
                    return n.concat(t)
                }
                o.prototype.subtract = function(t) {
                    var e, n, r, i, a = $(t);
                    if (this.sign !== a.sign) return this.add(a.negate());
                    var u = this.value,
                        c = a.value;
                    if (a.isSmall) return v(u, Math.abs(c), this.sign);
                    return e = u, n = c, r = this.sign, (R(e, n) >= 0 ? i = y(e, n) : (i = y(n, e), r = !r), "number" == typeof(i = d(i))) ? (r && (i = -i), new s(i)) : new o(i, r)
                }, o.prototype.minus = o.prototype.subtract, s.prototype.subtract = function(t) {
                    var e = $(t),
                        n = this.value;
                    if (n < 0 !== e.sign) return this.add(e.negate());
                    var r = e.value;
                    return e.isSmall ? new s(n - r) : v(r, Math.abs(n), n >= 0)
                }, s.prototype.minus = s.prototype.subtract, u.prototype.subtract = function(t) {
                    return new u(this.value - $(t).value)
                }, u.prototype.minus = u.prototype.subtract, o.prototype.negate = function() {
                    return new o(this.value, !this.sign)
                }, s.prototype.negate = function() {
                    var t = this.sign,
                        e = new s(-this.value);
                    return e.sign = !t, e
                }, u.prototype.negate = function() {
                    return new u(-this.value)
                }, o.prototype.abs = function() {
                    return new o(this.value, !1)
                }, s.prototype.abs = function() {
                    return new s(Math.abs(this.value))
                }, u.prototype.abs = function() {
                    return new u(this.value >= 0 ? this.value : -this.value)
                };

                function w(t, e, n) {
                    return t < 1e7 ? new o(E(e, t), n) : new o(b(e, l(t)), n)
                }

                function T(t) {
                    var e, n, r, i, a = t.length,
                        o = p(a + a);
                    for (r = 0; r < a; r++) {
                        n = 0 - (i = t[r]) * i;
                        for (var s = r; s < a; s++) n = Math.floor((e = i * t[s] * 2 + o[r + s] + n) / 1e7), o[r + s] = e - 1e7 * n;
                        o[r + a] = n
                    }
                    return f(o), o
                }
                o.prototype.multiply = function(t) {
                    var e, n, r, i = $(t),
                        s = this.value,
                        u = i.value,
                        c = this.sign !== i.sign;
                    if (i.isSmall) {
                        if (0 === u) return a[0];
                        if (1 === u) return this;
                        if (-1 === u) return this.negate();
                        if ((r = Math.abs(u)) < 1e7) return new o(E(s, r), c);
                        u = l(r)
                    }
                    return (e = s.length, -.012 * e - .012 * (n = u.length) + 15e-6 * e * n > 0) ? new o(function t(e, n) {
                        var r = Math.max(e.length, n.length);
                        if (r <= 30) return b(e, n);
                        r = Math.ceil(r / 2);
                        var i = e.slice(r),
                            a = e.slice(0, r),
                            o = n.slice(r),
                            s = n.slice(0, r),
                            u = t(a, s),
                            c = t(i, o),
                            l = t(g(a, i), g(s, o)),
                            d = g(g(u, S(y(y(l, u), c), r)), S(c, 2 * r));
                        return f(d), d
                    }(s, u), c) : new o(b(s, u), c)
                }, o.prototype.times = o.prototype.multiply, s.prototype._multiplyBySmall = function(t) {
                    return c(t.value * this.value) ? new s(t.value * this.value) : w(Math.abs(t.value), l(Math.abs(this.value)), this.sign !== t.sign)
                }, o.prototype._multiplyBySmall = function(t) {
                    return 0 === t.value ? a[0] : 1 === t.value ? this : -1 === t.value ? this.negate() : w(Math.abs(t.value), this.value, this.sign !== t.sign)
                }, s.prototype.multiply = function(t) {
                    return $(t)._multiplyBySmall(this)
                }, s.prototype.times = s.prototype.multiply, u.prototype.multiply = function(t) {
                    return new u(this.value * $(t).value)
                }, u.prototype.times = u.prototype.multiply, o.prototype.square = function() {
                    return new o(T(this.value), !1)
                }, s.prototype.square = function() {
                    var t = this.value * this.value;
                    return c(t) ? new s(t) : new o(T(l(Math.abs(this.value))), !1)
                }, u.prototype.square = function(t) {
                    return new u(this.value * this.value)
                };

                function k(t, e) {
                    var n, r, i, a, o = t.length,
                        s = p(o);
                    for (i = 0, n = o - 1; n >= 0; --n) r = h((a = 1e7 * i + t[n]) / e), i = a - r * e, s[n] = 0 | r;
                    return [s, 0 | i]
                }

                function x(t, e) {
                    var n, r, c = $(e);
                    if (i) return [new u(t.value / c.value), new u(t.value % c.value)];
                    var _ = t.value,
                        g = c.value;
                    if (0 === g) throw Error("Cannot divide by zero");
                    if (t.isSmall) return c.isSmall ? [new s(h(_ / g)), new s(_ % g)] : [a[0], t];
                    if (c.isSmall) {
                        if (1 === g) return [t, a[0]];
                        if (-1 == g) return [t.negate(), a[0]];
                        var m = Math.abs(g);
                        if (m < 1e7) {
                            n = d((r = k(_, m))[0]);
                            var v = r[1];
                            return (t.sign && (v = -v), "number" == typeof n) ? (t.sign !== c.sign && (n = -n), [new s(n), new s(v)]) : [new o(n, t.sign !== c.sign), new s(v)]
                        }
                        g = l(m)
                    }
                    var b = R(_, g);
                    if (-1 === b) return [a[0], t];
                    if (0 === b) return [a[t.sign === c.sign ? 1 : -1], a[0]];
                    n = (r = _.length + g.length <= 200 ? function(t, e) {
                        var n, r, i, a, o, s, u, c = t.length,
                            l = e.length,
                            f = p(e.length),
                            h = e[l - 1],
                            _ = Math.ceil(1e7 / (2 * h)),
                            g = E(t, _),
                            m = E(e, _);
                        for (g.length <= c && g.push(0), m.push(0), h = m[l - 1], r = c - l; r >= 0; r--) {
                            for (n = 1e7 - 1, g[r + l] !== h && (n = Math.floor((1e7 * g[r + l] + g[r + l - 1]) / h)), i = 0, a = 0, s = m.length, o = 0; o < s; o++) i += n * m[o], u = Math.floor(i / 1e7), a += g[r + o] - (i - 1e7 * u), i = u, a < 0 ? (g[r + o] = a + 1e7, a = -1) : (g[r + o] = a, a = 0);
                            for (; 0 !== a;) {
                                for (n -= 1, i = 0, o = 0; o < s; o++)(i += g[r + o] - 1e7 + m[o]) < 0 ? (g[r + o] = i + 1e7, i = 0) : (g[r + o] = i, i = 1);
                                a += i
                            }
                            f[r] = n
                        }
                        return g = k(g, _)[0], [d(f), d(g)]
                    }(_, g) : function(t, e) {
                        for (var n, r, i, a, o, s = t.length, u = e.length, c = [], l = []; s;) {
                            if (l.unshift(t[--s]), f(l), 0 > R(l, e)) {
                                c.push(0);
                                continue
                            }
                            r = l.length, i = 1e7 * l[r - 1] + l[r - 2], a = 1e7 * e[u - 1] + e[u - 2], r > u && (i = (i + 1) * 1e7), n = Math.ceil(i / a);
                            do {
                                if (0 >= R(o = E(e, n), l)) break;
                                n--
                            } while (n);
                            c.push(n), l = y(l, o)
                        }
                        return c.reverse(), [d(c), d(l)]
                    }(_, g))[0];
                    var S = t.sign !== c.sign,
                        w = r[1],
                        T = t.sign;
                    return "number" == typeof n ? (S && (n = -n), n = new s(n)) : n = new o(n, S), "number" == typeof w ? (T && (w = -w), w = new s(w)) : w = new o(w, T), [n, w]
                }

                function R(t, e) {
                    if (t.length !== e.length) return t.length > e.length ? 1 : -1;
                    for (var n = t.length - 1; n >= 0; n--)
                        if (t[n] !== e[n]) return t[n] > e[n] ? 1 : -1;
                    return 0
                }

                function N(t) {
                    var e = t.abs();
                    return !e.isUnit() && (!!(e.equals(2) || e.equals(3) || e.equals(5)) || !(e.isEven() || e.isDivisibleBy(3) || e.isDivisibleBy(5)) && (!!e.lesser(49) || void 0))
                }

                function D(t, e) {
                    for (var n, i, a, o = t.prev(), s = o, u = 0; s.isEven();) s = s.divide(2), u++;
                    t: for (i = 0; i < e.length; i++) {
                        if (!t.lesser(e[i])) {
                            if (!((a = r(e[i]).modPow(s, t)).isUnit() || a.equals(o))) {
                                for (n = u - 1; 0 != n && !(a = a.square().mod(t)).isUnit(); n--) {
                                    ;
                                    if (a.equals(o)) continue t
                                }
                                return !1
                            }
                        }
                    }
                    return !0
                }
                o.prototype.divmod = function(t) {
                    var e = x(this, t);
                    return {
                        quotient: e[0],
                        remainder: e[1]
                    }
                }, u.prototype.divmod = s.prototype.divmod = o.prototype.divmod, o.prototype.divide = function(t) {
                    return x(this, t)[0]
                }, u.prototype.over = u.prototype.divide = function(t) {
                    return new u(this.value / $(t).value)
                }, s.prototype.over = s.prototype.divide = o.prototype.over = o.prototype.divide, o.prototype.mod = function(t) {
                    return x(this, t)[1]
                }, u.prototype.mod = u.prototype.remainder = function(t) {
                    return new u(this.value % $(t).value)
                }, s.prototype.remainder = s.prototype.mod = o.prototype.remainder = o.prototype.mod, o.prototype.pow = function(t) {
                    var e, n, r, i = $(t),
                        o = this.value,
                        u = i.value;
                    if (0 === u) return a[1];
                    if (0 === o) return a[0];
                    if (1 === o) return a[1];
                    if (-1 === o) return i.isEven() ? a[1] : a[-1];
                    if (i.sign) return a[0];
                    if (!i.isSmall) throw Error("The exponent " + i.toString() + " is too large.");
                    if (this.isSmall && c(e = Math.pow(o, u))) return new s(h(e));
                    for (n = this, r = a[1]; !0 & u && (r = r.times(n), --u), 0 !== u;) {
                        ;
                        u /= 2, n = n.square()
                    }
                    return r
                }, s.prototype.pow = o.prototype.pow, u.prototype.pow = function(t) {
                    var e = $(t),
                        n = this.value,
                        r = e.value,
                        i = BigInt(0),
                        o = BigInt(1),
                        s = BigInt(2);
                    if (r === i) return a[1];
                    if (n === i) return a[0];
                    if (n === o) return a[1];
                    if (n === BigInt(-1)) return e.isEven() ? a[1] : a[-1];
                    if (e.isNegative()) return new u(i);
                    for (var c = this, l = a[1];
                        (r & o) === o && (l = l.times(c), --r), r !== i;) {
                        ;
                        r /= s, c = c.square()
                    }
                    return l
                }, o.prototype.modPow = function(t, e) {
                    if (t = $(t), (e = $(e)).isZero()) throw Error("Cannot take modPow with modulus 0");
                    var n = a[1],
                        r = this.mod(e);
                    for (t.isNegative() && (t = t.multiply(a[-1]), r = r.modInv(e)); t.isPositive();) {
                        if (r.isZero()) return a[0];
                        t.isOdd() && (n = n.multiply(r).mod(e)), t = t.divide(2), r = r.square().mod(e)
                    }
                    return n
                }, u.prototype.modPow = s.prototype.modPow = o.prototype.modPow, o.prototype.compareAbs = function(t) {
                    var e = $(t),
                        n = this.value,
                        r = e.value;
                    return e.isSmall ? 1 : R(n, r)
                }, s.prototype.compareAbs = function(t) {
                    var e = $(t),
                        n = Math.abs(this.value),
                        r = e.value;
                    return e.isSmall ? n === (r = Math.abs(r)) ? 0 : n > r ? 1 : -1 : -1
                }, u.prototype.compareAbs = function(t) {
                    var e = this.value,
                        n = $(t).value;
                    return (e = e >= 0 ? e : -e) === (n = n >= 0 ? n : -n) ? 0 : e > n ? 1 : -1
                }, o.prototype.compare = function(t) {
                    if (t === 1 / 0) return -1;
                    if (t === -1 / 0) return 1;
                    var e = $(t),
                        n = this.value,
                        r = e.value;
                    return this.sign !== e.sign ? e.sign ? 1 : -1 : e.isSmall ? this.sign ? -1 : 1 : R(n, r) * (this.sign ? -1 : 1)
                }, o.prototype.compareTo = o.prototype.compare, s.prototype.compare = function(t) {
                    if (t === 1 / 0) return -1;
                    if (t === -1 / 0) return 1;
                    var e = $(t),
                        n = this.value,
                        r = e.value;
                    return e.isSmall ? n == r ? 0 : n > r ? 1 : -1 : n < 0 !== e.sign ? n < 0 ? -1 : 1 : n < 0 ? 1 : -1
                }, s.prototype.compareTo = s.prototype.compare, u.prototype.compare = function(t) {
                    if (t === 1 / 0) return -1;
                    if (t === -1 / 0) return 1;
                    var e = this.value,
                        n = $(t).value;
                    return e === n ? 0 : e > n ? 1 : -1
                }, u.prototype.compareTo = u.prototype.compare, o.prototype.equals = function(t) {
                    return 0 === this.compare(t)
                }, u.prototype.eq = u.prototype.equals = s.prototype.eq = s.prototype.equals = o.prototype.eq = o.prototype.equals, o.prototype.notEquals = function(t) {
                    return 0 !== this.compare(t)
                }, u.prototype.neq = u.prototype.notEquals = s.prototype.neq = s.prototype.notEquals = o.prototype.neq = o.prototype.notEquals, o.prototype.greater = function(t) {
                    return this.compare(t) > 0
                }, u.prototype.gt = u.prototype.greater = s.prototype.gt = s.prototype.greater = o.prototype.gt = o.prototype.greater, o.prototype.lesser = function(t) {
                    return 0 > this.compare(t)
                }, u.prototype.lt = u.prototype.lesser = s.prototype.lt = s.prototype.lesser = o.prototype.lt = o.prototype.lesser, o.prototype.greaterOrEquals = function(t) {
                    return this.compare(t) >= 0
                }, u.prototype.geq = u.prototype.greaterOrEquals = s.prototype.geq = s.prototype.greaterOrEquals = o.prototype.geq = o.prototype.greaterOrEquals, o.prototype.lesserOrEquals = function(t) {
                    return 0 >= this.compare(t)
                }, u.prototype.leq = u.prototype.lesserOrEquals = s.prototype.leq = s.prototype.lesserOrEquals = o.prototype.leq = o.prototype.lesserOrEquals, o.prototype.isEven = function() {
                    return (1 & this.value[0]) == 0
                }, s.prototype.isEven = function() {
                    return (1 & this.value) == 0
                }, u.prototype.isEven = function() {
                    return (this.value & BigInt(1)) === BigInt(0)
                }, o.prototype.isOdd = function() {
                    return (1 & this.value[0]) == 1
                }, s.prototype.isOdd = function() {
                    return (1 & this.value) == 1
                }, u.prototype.isOdd = function() {
                    return (this.value & BigInt(1)) === BigInt(1)
                }, o.prototype.isPositive = function() {
                    return !this.sign
                }, s.prototype.isPositive = function() {
                    return this.value > 0
                }, u.prototype.isPositive = s.prototype.isPositive, o.prototype.isNegative = function() {
                    return this.sign
                }, s.prototype.isNegative = function() {
                    return this.value < 0
                }, u.prototype.isNegative = s.prototype.isNegative, o.prototype.isUnit = function() {
                    return !1
                }, s.prototype.isUnit = function() {
                    return 1 === Math.abs(this.value)
                }, u.prototype.isUnit = function() {
                    return this.abs().value === BigInt(1)
                }, o.prototype.isZero = function() {
                    return !1
                }, s.prototype.isZero = function() {
                    return 0 === this.value
                }, u.prototype.isZero = function() {
                    return this.value === BigInt(0)
                }, o.prototype.isDivisibleBy = function(t) {
                    var e = $(t);
                    return !e.isZero() && (!!e.isUnit() || (0 === e.compareAbs(2) ? this.isEven() : this.mod(e).isZero()))
                }, u.prototype.isDivisibleBy = s.prototype.isDivisibleBy = o.prototype.isDivisibleBy, o.prototype.isPrime = function(e) {
                    var n = N(this);
                    if (t !== n) return n;
                    var i = this.abs(),
                        a = i.bitLength();
                    if (a <= 64) return D(i, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
                    for (var o = Math.log(2) * a.toJSNumber(), s = Math.ceil(!0 === e ? 2 * Math.pow(o, 2) : o), u = [], c = 0; c < s; c++) u.push(r(c + 2));
                    return D(i, u)
                }, u.prototype.isPrime = s.prototype.isPrime = o.prototype.isPrime, o.prototype.isProbablePrime = function(e, n) {
                    var i = N(this);
                    if (t !== i) return i;
                    for (var a = this.abs(), o = t === e ? 5 : e, s = [], u = 0; u < o; u++) s.push(r.randBetween(2, a.minus(2), n));
                    return D(a, s)
                }, u.prototype.isProbablePrime = s.prototype.isProbablePrime = o.prototype.isProbablePrime, o.prototype.modInv = function(t) {
                    for (var e, n, i, a = r.zero, o = r.one, s = $(t), u = this.abs(); !u.isZero();) e = s.divide(u), n = a, i = s, a = o, s = u, o = n.subtract(e.multiply(o)), u = i.subtract(e.multiply(u));
                    if (!s.isUnit()) throw Error(this.toString() + " and " + t.toString() + " are not co-prime");
                    return (-1 === a.compare(0) && (a = a.add(t)), this.isNegative()) ? a.negate() : a
                }, u.prototype.modInv = s.prototype.modInv = o.prototype.modInv, o.prototype.next = function() {
                    var t = this.value;
                    return this.sign ? v(t, 1, this.sign) : new o(m(t, 1), this.sign)
                }, s.prototype.next = function() {
                    var t = this.value;
                    return t + 1 < 9007199254740992 ? new s(t + 1) : new o(e, !1)
                }, u.prototype.next = function() {
                    return new u(this.value + BigInt(1))
                }, o.prototype.prev = function() {
                    var t = this.value;
                    return this.sign ? new o(m(t, 1), !0) : v(t, 1, this.sign)
                }, s.prototype.prev = function() {
                    var t = this.value;
                    return t - 1 > -9007199254740992 ? new s(t - 1) : new o(e, !0)
                }, u.prototype.prev = function() {
                    return new u(this.value - BigInt(1))
                };
                for (var I = [1]; 2 * I[I.length - 1] <= 1e7;) I.push(2 * I[I.length - 1]);
                var O = I.length,
                    C = I[O - 1];

                function A(t) {
                    return 1e7 >= Math.abs(t)
                }

                function B(t, e, n) {
                    e = $(e);
                    for (var i = t.isNegative(), a = e.isNegative(), o = i ? t.not() : t, s = a ? e.not() : e, u = 0, c = 0, l = null, d = null, f = []; !o.isZero() || !s.isZero();) u = (l = x(o, C))[1].toJSNumber(), i && (u = C - 1 - u), c = (d = x(s, C))[1].toJSNumber(), a && (c = C - 1 - c), o = l[0], s = d[0], f.push(n(u, c));
                    for (var p = 0 !== n(i ? 1 : 0, a ? 1 : 0) ? r(-1) : r(0), h = f.length - 1; h >= 0; h -= 1) p = p.multiply(C).add(r(f[h]));
                    return p
                }
                o.prototype.shiftLeft = function(t) {
                    var e = $(t).toJSNumber();
                    if (!A(e)) throw Error(String(e) + " is too large for shifting.");
                    if (e < 0) return this.shiftRight(-e);
                    var n = this;
                    if (n.isZero()) return n;
                    for (; e >= O;) n = n.multiply(C), e -= O - 1;
                    return n.multiply(I[e])
                }, u.prototype.shiftLeft = s.prototype.shiftLeft = o.prototype.shiftLeft, o.prototype.shiftRight = function(t) {
                    var e, n = $(t).toJSNumber();
                    if (!A(n)) throw Error(String(n) + " is too large for shifting.");
                    if (n < 0) return this.shiftLeft(-n);
                    for (var r = this; n >= O;) {
                        if (r.isZero() || r.isNegative() && r.isUnit()) return r;
                        r = (e = x(r, C))[1].isNegative() ? e[0].prev() : e[0], n -= O - 1
                    }
                    return (e = x(r, I[n]))[1].isNegative() ? e[0].prev() : e[0]
                }, u.prototype.shiftRight = s.prototype.shiftRight = o.prototype.shiftRight, o.prototype.not = function() {
                    return this.negate().prev()
                }, u.prototype.not = s.prototype.not = o.prototype.not, o.prototype.and = function(t) {
                    return B(this, t, function(t, e) {
                        return t & e
                    })
                }, u.prototype.and = s.prototype.and = o.prototype.and, o.prototype.or = function(t) {
                    return B(this, t, function(t, e) {
                        return t | e
                    })
                }, u.prototype.or = s.prototype.or = o.prototype.or, o.prototype.xor = function(t) {
                    return B(this, t, function(t, e) {
                        return t ^ e
                    })
                }, u.prototype.xor = s.prototype.xor = o.prototype.xor;
                var U = 1073758208;

                function M(t) {
                    var e = t.value,
                        n = "number" == typeof e ? 1073741824 | e : "bigint" == typeof e ? e | BigInt(1073741824) : e[0] + 1e7 * e[1] | U;
                    return n & -n
                }

                function L(t, e) {
                    return t = $(t), e = $(e), t.greater(e) ? t : e
                }

                function P(t, e) {
                    return t = $(t), e = $(e), t.lesser(e) ? t : e
                }

                function G(t, e) {
                    if (t = $(t).abs(), e = $(e).abs(), t.equals(e)) return t;
                    if (t.isZero()) return e;
                    if (e.isZero()) return t;
                    for (var n, r, i = a[1]; t.isEven() && e.isEven();) n = P(M(t), M(e)), t = t.divide(n), e = e.divide(n), i = i.multiply(n);
                    for (; t.isEven();) t = t.divide(M(t));
                    do {
                        for (; e.isEven();) e = e.divide(M(e));
                        t.greater(e) && (r = e, e = t, t = r), e = e.subtract(t)
                    } while (!e.isZero());
                    return i.isUnit() ? t : t.multiply(i)
                }
                o.prototype.bitLength = function() {
                    var t = this;
                    return (0 > t.compareTo(r(0)) && (t = t.negate().subtract(r(1))), 0 === t.compareTo(r(0))) ? r(0) : r(function t(e, n) {
                        if (0 >= n.compareTo(e)) {
                            var i = t(e, n.square(n)),
                                a = i.p,
                                o = i.e,
                                s = a.multiply(n);
                            return 0 >= s.compareTo(e) ? {
                                p: s,
                                e: 2 * o + 1
                            } : {
                                p: a,
                                e: 2 * o
                            }
                        }
                        return {
                            p: r(1),
                            e: 0
                        }
                    }(t, r(2)).e).add(r(1))
                }, u.prototype.bitLength = s.prototype.bitLength = o.prototype.bitLength;
                var F = function(t, e, r, i) {
                    r = r || n, t = String(t), !i && (t = t.toLowerCase(), r = r.toLowerCase());
                    var a, o = t.length,
                        s = Math.abs(e),
                        u = {};
                    for (a = 0; a < r.length; a++) u[r[a]] = a;
                    for (a = 0; a < o; a++) {
                        var c = t[a];
                        if ("-" !== c && c in u && u[c] >= s) {
                            if ("1" === c && 1 === s) continue;
                            throw Error(c + " is not a valid digit in base " + e + ".")
                        }
                    }
                    e = $(e);
                    var l = [],
                        d = "-" === t[0];
                    for (a = d ? 1 : 0; a < t.length; a++) {
                        var c = t[a];
                        if (c in u) l.push($(u[c]));
                        else if ("<" === c) {
                            var f = a;
                            do a++; while (">" !== t[a] && a < t.length);
                            l.push($(t.slice(f + 1, a)))
                        } else throw Error(c + " is not a valid character")
                    }
                    return Y(l, e, d)
                };

                function Y(t, e, n) {
                    var r, i = a[0],
                        o = a[1];
                    for (r = t.length - 1; r >= 0; r--) i = i.add(t[r].times(o)), o = o.times(e);
                    return n ? i.negate() : i
                }

                function z(t, e) {
                    if ((e = r(e)).isZero()) {
                        if (t.isZero()) return {
                            value: [0],
                            isNegative: !1
                        };
                        throw Error("Cannot convert nonzero numbers to base 0.")
                    }
                    if (e.equals(-1)) {
                        if (t.isZero()) return {
                            value: [0],
                            isNegative: !1
                        };
                        if (t.isNegative()) return {
                            value: [].concat.apply([], Array.apply(null, Array(-t.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
                            isNegative: !1
                        };
                        var n = Array.apply(null, Array(t.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
                        return n.unshift([1]), {
                            value: [].concat.apply([], n),
                            isNegative: !1
                        }
                    }
                    var i = !1;
                    if (t.isNegative() && e.isPositive() && (i = !0, t = t.abs()), e.isUnit()) return t.isZero() ? {
                        value: [0],
                        isNegative: !1
                    } : {
                        value: Array.apply(null, Array(t.toJSNumber())).map(Number.prototype.valueOf, 1),
                        isNegative: i
                    };
                    for (var a = [], o, s = t; s.isNegative() || s.compareAbs(e) >= 0;) {
                        s = (o = s.divmod(e)).quotient;
                        var u = o.remainder;
                        u.isNegative() && (u = e.minus(u).abs(), s = s.next()), a.push(u.toJSNumber())
                    }
                    return a.push(s.toJSNumber()), {
                        value: a.reverse(),
                        isNegative: i
                    }
                }

                function j(t, e, r) {
                    var i = z(t, e);
                    return (i.isNegative ? "-" : "") + i.value.map(function(t) {
                        var e, i;
                        return (e = t) < (i = (i = r) || n).length ? i[e] : "<" + e + ">"
                    }).join("")
                }

                function H(t) {
                    if (c(+t)) {
                        var e = +t;
                        if (e === h(e)) return i ? new u(BigInt(e)) : new s(e);
                        throw Error("Invalid integer: " + t)
                    }
                    var n = "-" === t[0];
                    n && (t = t.slice(1));
                    var r = t.split(/e/i);
                    if (r.length > 2) throw Error("Invalid integer: " + r.join("e"));
                    if (2 === r.length) {
                        var a = r[1];
                        if ("+" === a[0] && (a = a.slice(1)), (a = +a) !== h(a) || !c(a)) throw Error("Invalid integer: " + a + " is not a valid exponent.");
                        var l = r[0],
                            d = l.indexOf(".");
                        if (d >= 0 && (a -= l.length - d - 1, l = l.slice(0, d) + l.slice(d + 1)), a < 0) throw Error("Cannot include negative exponent part for integers");
                        l += Array(a + 1).join("0"), t = l
                    }
                    if (!/^([0-9][0-9]*)$/.test(t)) throw Error("Invalid integer: " + t);
                    if (i) return new u(BigInt(n ? "-" + t : t));
                    for (var p = [], _ = t.length, g = _ - 7; _ > 0;) p.push(+t.slice(g, _)), (g -= 7) < 0 && (g = 0), _ -= 7;
                    return f(p), new o(p, n)
                }
                o.prototype.toArray = function(t) {
                    return z(this, t)
                }, s.prototype.toArray = function(t) {
                    return z(this, t)
                }, u.prototype.toArray = function(t) {
                    return z(this, t)
                }, o.prototype.toString = function(e, n) {
                    if (t === e && (e = 10), 10 !== e) return j(this, e, n);
                    for (var r, i = this.value, a = i.length, o = String(i[--a]); --a >= 0;) r = String(i[a]), o += "0000000".slice(r.length) + r;
                    return (this.sign ? "-" : "") + o
                }, s.prototype.toString = function(e, n) {
                    return (t === e && (e = 10), 10 != e) ? j(this, e, n) : String(this.value)
                }, u.prototype.toString = s.prototype.toString, u.prototype.toJSON = o.prototype.toJSON = s.prototype.toJSON = function() {
                    return this.toString()
                }, o.prototype.valueOf = function() {
                    return parseInt(this.toString(), 10)
                }, o.prototype.toJSNumber = o.prototype.valueOf, s.prototype.valueOf = function() {
                    return this.value
                }, s.prototype.toJSNumber = s.prototype.valueOf, u.prototype.valueOf = u.prototype.toJSNumber = function() {
                    return parseInt(this.toString(), 10)
                };

                function $(t) {
                    return "number" == typeof t ? function(t) {
                        if (i) return new u(BigInt(t));
                        if (c(t)) {
                            if (t !== h(t)) throw Error(t + " is not an integer.");
                            return new s(t)
                        }
                        return H(t.toString())
                    }(t) : "string" == typeof t ? H(t) : "bigint" == typeof t ? new u(t) : t
                }
                for (var W = 0; W < 1e3; W++) a[W] = $(W), W > 0 && (a[-W] = $(-W));
                return a.one = a[1], a.zero = a[0], a.minusOne = a[-1], a.max = L, a.min = P, a.gcd = G, a.lcm = function(t, e) {
                    return t = $(t).abs(), e = $(e).abs(), t.divide(G(t, e)).multiply(e)
                }, a.isInstance = function(t) {
                    return t instanceof o || t instanceof s || t instanceof u
                }, a.randBetween = function(t, e, n) {
                    t = $(t), e = $(e);
                    var r = n || Math.random,
                        i = P(t, e),
                        o = L(t, e).subtract(i).add(1);
                    if (o.isSmall) return i.add(Math.floor(r() * o));
                    for (var s = z(o, 1e7).value, u = [], c = !0, l = 0; l < s.length; l++) {
                        var d = c ? s[l] : 1e7,
                            f = h(r() * d);
                        u.push(f), f < d && (c = !1)
                    }
                    return i.add(a.fromArray(u, 1e7, !1))
                }, a.fromArray = function(t, e, n) {
                    return Y(t.map($), $(e || 10), n)
                }, a
            }();
            t.hasOwnProperty("exports") && (t.exports = r), "function" == typeof define && define.amd && define(function() {
                return r
            })
        },
        154154: function(t, e, n) {
            "use strict";
            var r = n("251069"),
                i = n("905145"),
                a = n("187684"),
                o = Error.captureStackTrace;
            t.exports = function(t, e, n, s) {
                a && (o ? o(t, e) : r(t, "stack", i(n, s)))
            }
        },
        187684: function(t, e, n) {
            "use strict";
            var r = n("936940"),
                i = n("879");
            t.exports = !r(function() {
                var t = Error("a");
                return !("stack" in t) || (Object.defineProperty(t, "stack", i(1, 7)), 7 !== t.stack)
            })
        },
        197187: function(t, e, n) {
            "use strict";
            var r = n("962557"),
                i = Function.prototype,
                a = i.apply,
                o = i.call;
            t.exports = "object" == typeof Reflect && Reflect.apply || (r ? o.bind(a) : function() {
                return o.apply(a, arguments)
            })
        },
        668788: function(t, e, n) {
            "use strict";
            var r = n("622281"),
                i = n("251069");
            t.exports = function(t, e) {
                r(e) && "cause" in e && i(t, "cause", e.cause)
            }
        },
        504559: function(t, e, n) {
            "use strict";
            var r = n("97131").f;
            t.exports = function(t, e, n) {
                n in t || r(t, n, {
                    configurable: !0,
                    get: function() {
                        return e[n]
                    },
                    set: function(t) {
                        e[n] = t
                    }
                })
            }
        },
        261987: function(t, e, n) {
            "use strict";
            var r = n("545576"),
                i = n("740362"),
                a = n("251069"),
                o = n("838957"),
                s = n("276321"),
                u = n("381740"),
                c = n("504559"),
                l = n("95948"),
                d = n("892725"),
                f = n("668788"),
                p = n("154154"),
                h = n("325008"),
                _ = n("992051");
            t.exports = function(t, e, n, g) {
                var m = "stackTraceLimit",
                    y = g ? 2 : 1,
                    v = t.split("."),
                    b = v[v.length - 1],
                    E = r.apply(null, v);
                if (E) {
                    var S = E.prototype;
                    if (!_ && i(S, "cause") && delete S.cause, !n) return E;
                    var w = r("Error"),
                        T = e(function(t, e) {
                            var n = d(g ? e : t, void 0),
                                r = g ? new E(t) : new E;
                            return void 0 !== n && a(r, "message", n), p(r, T, r.stack, 2), this && o(S, this) && l(r, this, T), arguments.length > y && f(r, arguments[y]), r
                        });
                    if (T.prototype = S, "Error" !== b ? s ? s(T, w) : u(T, w, {
                            name: !0
                        }) : h && m in E && (c(T, E, m), c(T, E, "prepareStackTrace")), u(T, E), !_) try {
                        S.name !== b && a(S, "name", b), S.constructor = T
                    } catch (t) {}
                    return T
                }
            }
        },
        411104: function(t, e, n) {
            "use strict";
            var r = n("147018"),
                i = n("161581"),
                a = n("197187"),
                o = n("261987"),
                s = "WebAssembly",
                u = i[s],
                c = 7 !== Error("e", {
                    cause: 7
                }).cause,
                l = function(t, e) {
                    var n = {};
                    n[t] = o(t, e, c), r({
                        global: !0,
                        constructor: !0,
                        arity: 1,
                        forced: c
                    }, n)
                },
                d = function(t, e) {
                    if (u && u[t]) {
                        var n = {};
                        n[t] = o(s + "." + t, e, c), r({
                            target: s,
                            stat: !0,
                            constructor: !0,
                            arity: 1,
                            forced: c
                        }, n)
                    }
                };
            l("Error", function(t) {
                return function(e) {
                    return a(t, this, arguments)
                }
            }), l("EvalError", function(t) {
                return function(e) {
                    return a(t, this, arguments)
                }
            }), l("RangeError", function(t) {
                return function(e) {
                    return a(t, this, arguments)
                }
            }), l("ReferenceError", function(t) {
                return function(e) {
                    return a(t, this, arguments)
                }
            }), l("SyntaxError", function(t) {
                return function(e) {
                    return a(t, this, arguments)
                }
            }), l("TypeError", function(t) {
                return function(e) {
                    return a(t, this, arguments)
                }
            }), l("URIError", function(t) {
                return function(e) {
                    return a(t, this, arguments)
                }
            }), d("CompileError", function(t) {
                return function(e) {
                    return a(t, this, arguments)
                }
            }), d("LinkError", function(t) {
                return function(e) {
                    return a(t, this, arguments)
                }
            }), d("RuntimeError", function(t) {
                return function(e) {
                    return a(t, this, arguments)
                }
            })
        },
        309749: function(t, e, n) {
            "use strict";
            var r = n("147018"),
                i = n("926515");
            r({
                target: "URL",
                proto: !0,
                enumerable: !0
            }, {
                toJSON: function() {
                    return i(URL.prototype.toString, this)
                }
            })
        },
        512722: function(t) {
            "use strict";
            t.exports = function(t, e, n, r, i, a, o, s) {
                if (!t) {
                    var u;
                    if (void 0 === e) u = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var c = [n, r, i, a, o, s],
                            l = 0;
                        (u = Error(e.replace(/%s/g, function() {
                            return c[l++]
                        }))).name = "Invariant Violation"
                    }
                    throw u.framesToPop = 1, u
                }
            }
        },
        135839: function(t, e, n) {
            var r = n("480751")(n("573401"), "DataView");
            t.exports = r
        },
        861538: function(t, e, n) {
            var r = n("159219"),
                i = n("995937"),
                a = n("544054"),
                o = n("999991"),
                s = n("662753");

            function u(t) {
                var e = -1,
                    n = null == t ? 0 : t.length;
                for (this.clear(); ++e < n;) {
                    var r = t[e];
                    this.set(r[0], r[1])
                }
            }
            u.prototype.clear = r, u.prototype.delete = i, u.prototype.get = a, u.prototype.has = o, u.prototype.set = s, t.exports = u
        },
        900624: function(t, e, n) {
            var r = n("853647"),
                i = n("440073"),
                a = n("497903"),
                o = n("843832"),
                s = n("687074");

            function u(t) {
                var e = -1,
                    n = null == t ? 0 : t.length;
                for (this.clear(); ++e < n;) {
                    var r = t[e];
                    this.set(r[0], r[1])
                }
            }
            u.prototype.clear = r, u.prototype.delete = i, u.prototype.get = a, u.prototype.has = o, u.prototype.set = s, t.exports = u
        },
        117973: function(t, e, n) {
            var r = n("480751")(n("573401"), "Map");
            t.exports = r
        },
        302767: function(t, e, n) {
            var r = n("553070"),
                i = n("883638"),
                a = n("538444"),
                o = n("455877"),
                s = n("58990");

            function u(t) {
                var e = -1,
                    n = null == t ? 0 : t.length;
                for (this.clear(); ++e < n;) {
                    var r = t[e];
                    this.set(r[0], r[1])
                }
            }
            u.prototype.clear = r, u.prototype.delete = i, u.prototype.get = a, u.prototype.has = o, u.prototype.set = s, t.exports = u
        },
        780712: function(t, e, n) {
            var r = n("480751")(n("573401"), "Promise");
            t.exports = r
        },
        400353: function(t, e, n) {
            var r = n("480751")(n("573401"), "Set");
            t.exports = r
        },
        425561: function(t, e, n) {
            var r = n("302767"),
                i = n("800016"),
                a = n("364832");

            function o(t) {
                var e = -1,
                    n = null == t ? 0 : t.length;
                for (this.__data__ = new r; ++e < n;) this.add(t[e])
            }
            o.prototype.add = o.prototype.push = i, o.prototype.has = a, t.exports = o
        },
        620014: function(t, e, n) {
            var r = n("900624"),
                i = n("979882"),
                a = n("686639"),
                o = n("173887"),
                s = n("702603"),
                u = n("457853");

            function c(t) {
                var e = this.__data__ = new r(t);
                this.size = e.size
            }
            c.prototype.clear = i, c.prototype.delete = a, c.prototype.get = o, c.prototype.has = s, c.prototype.set = u, t.exports = c
        },
        466293: function(t, e, n) {
            var r = n("573401").Symbol;
            t.exports = r
        },
        139069: function(t, e, n) {
            var r = n("573401").Uint8Array;
            t.exports = r
        },
        653180: function(t, e, n) {
            var r = n("480751")(n("573401"), "WeakMap");
            t.exports = r
        },
        751177: function(t) {
            t.exports = function(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length, i = 0, a = []; ++n < r;) {
                    var o = t[n];
                    e(o, n, t) && (a[i++] = o)
                }
                return a
            }
        },
        347189: function(t, e, n) {
            var r = n("585606"),
                i = n("443735"),
                a = n("402428"),
                o = n("207757"),
                s = n("830911"),
                u = n("556868"),
                c = Object.prototype.hasOwnProperty;
            t.exports = function(t, e) {
                var n = a(t),
                    l = !n && i(t),
                    d = !n && !l && o(t),
                    f = !n && !l && !d && u(t),
                    p = n || l || d || f,
                    h = p ? r(t.length, String) : [],
                    _ = h.length;
                for (var g in t)(e || c.call(t, g)) && !(p && ("length" == g || d && ("offset" == g || "parent" == g) || f && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || s(g, _))) && h.push(g);
                return h
            }
        },
        467631: function(t) {
            t.exports = function(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
                return i
            }
        },
        796581: function(t) {
            t.exports = function(t, e) {
                for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
                return t
            }
        },
        393531: function(t) {
            t.exports = function(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                    if (e(t[n], n, t)) return !0;
                return !1
            }
        },
        815869: function(t, e, n) {
            var r = n("703284");
            t.exports = function(t, e) {
                for (var n = t.length; n--;)
                    if (r(t[n][0], e)) return n;
                return -1
            }
        },
        580897: function(t, e, n) {
            var r = n("457965");
            t.exports = function(t, e, n) {
                "__proto__" == e && r ? r(t, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0
                }) : t[e] = n
            }
        },
        51431: function(t, e, n) {
            var r = n("604257")();
            t.exports = r
        },
        289399: function(t, e, n) {
            var r = n("51431"),
                i = n("58834");
            t.exports = function(t, e) {
                return t && r(t, e, i)
            }
        },
        187856: function(t, e, n) {
            var r = n("196322"),
                i = n("828091");
            t.exports = function(t, e) {
                e = r(e, t);
                for (var n = 0, a = e.length; null != t && n < a;) t = t[i(e[n++])];
                return n && n == a ? t : void 0
            }
        },
        214755: function(t, e, n) {
            var r = n("796581"),
                i = n("402428");
            t.exports = function(t, e, n) {
                var a = e(t);
                return i(t) ? a : r(a, n(t))
            }
        },
        657398: function(t, e, n) {
            var r = n("466293"),
                i = n("146945"),
                a = n("251584"),
                o = r ? r.toStringTag : void 0;
            t.exports = function(t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : o && o in Object(t) ? i(t) : a(t)
            }
        },
        486752: function(t) {
            t.exports = function(t, e) {
                return null != t && e in Object(t)
            }
        },
        475227: function(t, e, n) {
            var r = n("657398"),
                i = n("389109");
            t.exports = function(t) {
                return i(t) && "[object Arguments]" == r(t)
            }
        },
        733892: function(t, e, n) {
            var r = n("886502"),
                i = n("389109");
            t.exports = function t(e, n, a, o, s) {
                return e === n || (null != e && null != n && (i(e) || i(n)) ? r(e, n, a, o, t, s) : e != e && n != n)
            }
        },
        886502: function(t, e, n) {
            var r = n("620014"),
                i = n("501979"),
                a = n("575473"),
                o = n("907287"),
                s = n("65064"),
                u = n("402428"),
                c = n("207757"),
                l = n("556868"),
                d = "[object Arguments]",
                f = "[object Array]",
                p = "[object Object]",
                h = Object.prototype.hasOwnProperty;
            t.exports = function(t, e, n, _, g, m) {
                var y = u(t),
                    v = u(e),
                    b = y ? f : s(t),
                    E = v ? f : s(e);
                b = b == d ? p : b, E = E == d ? p : E;
                var S = b == p,
                    w = E == p,
                    T = b == E;
                if (T && c(t)) {
                    if (!c(e)) return !1;
                    y = !0, S = !1
                }
                if (T && !S) return m || (m = new r), y || l(t) ? i(t, e, n, _, g, m) : a(t, e, b, n, _, g, m);
                if (!(1 & n)) {
                    var k = S && h.call(t, "__wrapped__"),
                        x = w && h.call(e, "__wrapped__");
                    if (k || x) {
                        var R = k ? t.value() : t,
                            N = x ? e.value() : e;
                        return m || (m = new r), g(R, N, n, _, m)
                    }
                }
                return !!T && (m || (m = new r), o(t, e, n, _, g, m))
            }
        },
        46166: function(t, e, n) {
            var r = n("620014"),
                i = n("733892");
            t.exports = function(t, e, n, a) {
                var o = n.length,
                    s = o,
                    u = !a;
                if (null == t) return !s;
                for (t = Object(t); o--;) {
                    var c = n[o];
                    if (u && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1
                }
                for (; ++o < s;) {
                    var l = (c = n[o])[0],
                        d = t[l],
                        f = c[1];
                    if (u && c[2]) {
                        if (void 0 === d && !(l in t)) return !1
                    } else {
                        var p = new r;
                        if (a) var h = a(d, f, l, t, e, p);
                        if (!(void 0 === h ? i(f, d, 3, a, p) : h)) return !1
                    }
                }
                return !0
            }
        },
        299578: function(t, e, n) {
            var r = n("807419"),
                i = n("143283"),
                a = n("706627"),
                o = n("19235"),
                s = /^\[object .+?Constructor\]$/,
                u = Object.prototype,
                c = Function.prototype.toString,
                l = u.hasOwnProperty,
                d = RegExp("^" + c.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            t.exports = function(t) {
                return !(!a(t) || i(t)) && (r(t) ? d : s).test(o(t))
            }
        },
        289126: function(t, e, n) {
            var r = n("657398"),
                i = n("406705"),
                a = n("389109"),
                o = {};
            o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0, o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object DataView]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1;
            t.exports = function(t) {
                return a(t) && i(t.length) && !!o[r(t)]
            }
        },
        161757: function(t, e, n) {
            var r = n("497549"),
                i = n("700728"),
                a = n("98958"),
                o = n("402428"),
                s = n("691363");
            t.exports = function(t) {
                return "function" == typeof t ? t : null == t ? a : "object" == typeof t ? o(t) ? i(t[0], t[1]) : r(t) : s(t)
            }
        },
        800790: function(t, e, n) {
            var r = n("292403"),
                i = n("539339"),
                a = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!r(t)) return i(t);
                var e = [];
                for (var n in Object(t)) a.call(t, n) && "constructor" != n && e.push(n);
                return e
            }
        },
        497549: function(t, e, n) {
            var r = n("46166"),
                i = n("107378"),
                a = n("849513");
            t.exports = function(t) {
                var e = i(t);
                return 1 == e.length && e[0][2] ? a(e[0][0], e[0][1]) : function(n) {
                    return n === t || r(n, t, e)
                }
            }
        },
        700728: function(t, e, n) {
            var r = n("733892"),
                i = n("102423"),
                a = n("164400"),
                o = n("844781"),
                s = n("92801"),
                u = n("849513"),
                c = n("828091");
            t.exports = function(t, e) {
                return o(t) && s(e) ? u(c(t), e) : function(n) {
                    var o = i(n, t);
                    return void 0 === o && o === e ? a(n, t) : r(e, o, 3)
                }
            }
        },
        181515: function(t) {
            t.exports = function(t) {
                return function(e) {
                    return null == e ? void 0 : e[t]
                }
            }
        },
        521834: function(t, e, n) {
            var r = n("187856");
            t.exports = function(t) {
                return function(e) {
                    return r(e, t)
                }
            }
        },
        585606: function(t) {
            t.exports = function(t, e) {
                for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                return r
            }
        },
        217185: function(t, e, n) {
            var r = n("466293"),
                i = n("467631"),
                a = n("402428"),
                o = n("42848"),
                s = 1 / 0,
                u = r ? r.prototype : void 0,
                c = u ? u.toString : void 0;
            t.exports = function t(e) {
                if ("string" == typeof e) return e;
                if (a(e)) return i(e, t) + "";
                if (o(e)) return c ? c.call(e) : "";
                var n = e + "";
                return "0" == n && 1 / e == -s ? "-0" : n
            }
        },
        652715: function(t) {
            t.exports = function(t) {
                return function(e) {
                    return t(e)
                }
            }
        },
        208529: function(t) {
            t.exports = function(t, e) {
                return t.has(e)
            }
        },
        196322: function(t, e, n) {
            var r = n("402428"),
                i = n("844781"),
                a = n("361596"),
                o = n("44091");
            t.exports = function(t, e) {
                return r(t) ? t : i(t, e) ? [t] : a(o(t))
            }
        },
        54640: function(t, e, n) {
            var r = n("573401")["__core-js_shared__"];
            t.exports = r
        },
        604257: function(t) {
            t.exports = function(t) {
                return function(e, n, r) {
                    for (var i = -1, a = Object(e), o = r(e), s = o.length; s--;) {
                        var u = o[t ? s : ++i];
                        if (!1 === n(a[u], u, a)) break
                    }
                    return e
                }
            }
        },
        457965: function(t, e, n) {
            var r = n("480751"),
                i = function() {
                    try {
                        var t = r(Object, "defineProperty");
                        return t({}, "", {}), t
                    } catch (t) {}
                }();
            t.exports = i
        },
        501979: function(t, e, n) {
            var r = n("425561"),
                i = n("393531"),
                a = n("208529");
            t.exports = function(t, e, n, o, s, u) {
                var c = 1 & n,
                    l = t.length,
                    d = e.length;
                if (l != d && !(c && d > l)) return !1;
                var f = u.get(t),
                    p = u.get(e);
                if (f && p) return f == e && p == t;
                var h = -1,
                    _ = !0,
                    g = 2 & n ? new r : void 0;
                for (u.set(t, e), u.set(e, t); ++h < l;) {
                    var m = t[h],
                        y = e[h];
                    if (o) var v = c ? o(y, m, h, e, t, u) : o(m, y, h, t, e, u);
                    if (void 0 !== v) {
                        if (v) continue;
                        _ = !1;
                        break
                    }
                    if (g) {
                        if (!i(e, function(t, e) {
                                if (!a(g, e) && (m === t || s(m, t, n, o, u))) return g.push(e)
                            })) {
                            _ = !1;
                            break
                        }
                    } else if (!(m === y || s(m, y, n, o, u))) {
                        _ = !1;
                        break
                    }
                }
                return u.delete(t), u.delete(e), _
            }
        },
        575473: function(t, e, n) {
            var r = n("466293"),
                i = n("139069"),
                a = n("703284"),
                o = n("501979"),
                s = n("98368"),
                u = n("433005"),
                c = r ? r.prototype : void 0,
                l = c ? c.valueOf : void 0;
            t.exports = function(t, e, n, r, c, d, f) {
                switch (n) {
                    case "[object DataView]":
                        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) break;
                        t = t.buffer, e = e.buffer;
                    case "[object ArrayBuffer]":
                        if (t.byteLength != e.byteLength || !d(new i(t), new i(e))) break;
                        return !0;
                    case "[object Boolean]":
                    case "[object Date]":
                    case "[object Number]":
                        return a(+t, +e);
                    case "[object Error]":
                        return t.name == e.name && t.message == e.message;
                    case "[object RegExp]":
                    case "[object String]":
                        return t == e + "";
                    case "[object Map]":
                        var p = s;
                    case "[object Set]":
                        var h = 1 & r;
                        if (p || (p = u), t.size != e.size && !h) break;
                        var _ = f.get(t);
                        if (_) return _ == e;
                        r |= 2, f.set(t, e);
                        var g = o(p(t), p(e), r, c, d, f);
                        return f.delete(t), g;
                    case "[object Symbol]":
                        if (l) return l.call(t) == l.call(e)
                }
                return !1
            }
        },
        907287: function(t, e, n) {
            var r = n("990393"),
                i = Object.prototype.hasOwnProperty;
            t.exports = function(t, e, n, a, o, s) {
                var u = 1 & n,
                    c = r(t),
                    l = c.length;
                if (l != r(e).length && !u) return !1;
                for (var d = l; d--;) {
                    var f = c[d];
                    if (!(u ? f in e : i.call(e, f))) return !1
                }
                var p = s.get(t),
                    h = s.get(e);
                if (p && h) return p == e && h == t;
                var _ = !0;
                s.set(t, e), s.set(e, t);
                for (var g = u; ++d < l;) {
                    var m = t[f = c[d]],
                        y = e[f];
                    if (a) var v = u ? a(y, m, f, e, t, s) : a(m, y, f, t, e, s);
                    if (!(void 0 === v ? m === y || o(m, y, n, a, s) : v)) {
                        _ = !1;
                        break
                    }
                    g || (g = "constructor" == f)
                }
                if (_ && !g) {
                    var b = t.constructor,
                        E = e.constructor;
                    b != E && "constructor" in t && "constructor" in e && !("function" == typeof b && b instanceof b && "function" == typeof E && E instanceof E) && (_ = !1)
                }
                return s.delete(t), s.delete(e), _
            }
        },
        940151: function(t, e, n) {
            var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
            t.exports = r
        },
        990393: function(t, e, n) {
            var r = n("214755"),
                i = n("469128"),
                a = n("58834");
            t.exports = function(t) {
                return r(t, a, i)
            }
        },
        961499: function(t, e, n) {
            var r = n("501889");
            t.exports = function(t, e) {
                var n = t.__data__;
                return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
            }
        },
        107378: function(t, e, n) {
            var r = n("92801"),
                i = n("58834");
            t.exports = function(t) {
                for (var e = i(t), n = e.length; n--;) {
                    var a = e[n],
                        o = t[a];
                    e[n] = [a, o, r(o)]
                }
                return e
            }
        },
        480751: function(t, e, n) {
            var r = n("299578"),
                i = n("538027");
            t.exports = function(t, e) {
                var n = i(t, e);
                return r(n) ? n : void 0
            }
        },
        146945: function(t, e, n) {
            var r = n("466293"),
                i = Object.prototype,
                a = i.hasOwnProperty,
                o = i.toString,
                s = r ? r.toStringTag : void 0;
            t.exports = function(t) {
                var e = a.call(t, s),
                    n = t[s];
                try {
                    t[s] = void 0;
                    var r = !0
                } catch (t) {}
                var i = o.call(t);
                return r && (e ? t[s] = n : delete t[s]), i
            }
        },
        469128: function(t, e, n) {
            var r = n("751177"),
                i = n("135615"),
                a = Object.prototype.propertyIsEnumerable,
                o = Object.getOwnPropertySymbols,
                s = o ? function(t) {
                    return null == t ? [] : r(o(t = Object(t)), function(e) {
                        return a.call(t, e)
                    })
                } : i;
            t.exports = s
        },
        65064: function(t, e, n) {
            var r = n("135839"),
                i = n("117973"),
                a = n("780712"),
                o = n("400353"),
                s = n("653180"),
                u = n("657398"),
                c = n("19235"),
                l = "[object Map]",
                d = "[object Promise]",
                f = "[object Set]",
                p = "[object WeakMap]",
                h = "[object DataView]",
                _ = c(r),
                g = c(i),
                m = c(a),
                y = c(o),
                v = c(s),
                b = u;
            (r && b(new r(new ArrayBuffer(1))) != h || i && b(new i) != l || a && b(a.resolve()) != d || o && b(new o) != f || s && b(new s) != p) && (b = function(t) {
                var e = u(t),
                    n = "[object Object]" == e ? t.constructor : void 0,
                    r = n ? c(n) : "";
                if (r) switch (r) {
                    case _:
                        return h;
                    case g:
                        return l;
                    case m:
                        return d;
                    case y:
                        return f;
                    case v:
                        return p
                }
                return e
            }), t.exports = b
        },
        538027: function(t) {
            t.exports = function(t, e) {
                return null == t ? void 0 : t[e]
            }
        },
        560706: function(t, e, n) {
            var r = n("196322"),
                i = n("443735"),
                a = n("402428"),
                o = n("830911"),
                s = n("406705"),
                u = n("828091");
            t.exports = function(t, e, n) {
                e = r(e, t);
                for (var c = -1, l = e.length, d = !1; ++c < l;) {
                    var f = u(e[c]);
                    if (!(d = null != t && n(t, f))) break;
                    t = t[f]
                }
                return d || ++c != l ? d : !!(l = null == t ? 0 : t.length) && s(l) && o(f, l) && (a(t) || i(t))
            }
        },
        159219: function(t, e, n) {
            var r = n("524556");
            t.exports = function() {
                this.__data__ = r ? r(null) : {}, this.size = 0
            }
        },
        995937: function(t) {
            t.exports = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0, e
            }
        },
        544054: function(t, e, n) {
            var r = n("524556"),
                i = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var e = this.__data__;
                if (r) {
                    var n = e[t];
                    return "__lodash_hash_undefined__" === n ? void 0 : n
                }
                return i.call(e, t) ? e[t] : void 0
            }
        },
        999991: function(t, e, n) {
            var r = n("524556"),
                i = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var e = this.__data__;
                return r ? void 0 !== e[t] : i.call(e, t)
            }
        },
        662753: function(t, e, n) {
            var r = n("524556");
            t.exports = function(t, e) {
                var n = this.__data__;
                return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? "__lodash_hash_undefined__" : e, this
            }
        },
        830911: function(t) {
            var e = /^(?:0|[1-9]\d*)$/;
            t.exports = function(t, n) {
                var r = typeof t;
                return !!(n = null == n ? 9007199254740991 : n) && ("number" == r || "symbol" != r && e.test(t)) && t > -1 && t % 1 == 0 && t < n
            }
        },
        844781: function(t, e, n) {
            var r = n("402428"),
                i = n("42848"),
                a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                o = /^\w*$/;
            t.exports = function(t, e) {
                if (r(t)) return !1;
                var n = typeof t;
                return !!("number" == n || "symbol" == n || "boolean" == n || null == t || i(t)) || o.test(t) || !a.test(t) || null != e && t in Object(e)
            }
        },
        501889: function(t) {
            t.exports = function(t) {
                var e = typeof t;
                return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
            }
        },
        143283: function(t, e, n) {
            var r, i = n("54640");
            var a = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
            t.exports = function(t) {
                return !!a && a in t
            }
        },
        292403: function(t) {
            var e = Object.prototype;
            t.exports = function(t) {
                var n = t && t.constructor;
                return t === ("function" == typeof n && n.prototype || e)
            }
        },
        92801: function(t, e, n) {
            var r = n("706627");
            t.exports = function(t) {
                return t == t && !r(t)
            }
        },
        853647: function(t) {
            t.exports = function() {
                this.__data__ = [], this.size = 0
            }
        },
        440073: function(t, e, n) {
            var r = n("815869"),
                i = Array.prototype.splice;
            t.exports = function(t) {
                var e = this.__data__,
                    n = r(e, t);
                return !(n < 0) && (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, !0)
            }
        },
        497903: function(t, e, n) {
            var r = n("815869");
            t.exports = function(t) {
                var e = this.__data__,
                    n = r(e, t);
                return n < 0 ? void 0 : e[n][1]
            }
        },
        843832: function(t, e, n) {
            var r = n("815869");
            t.exports = function(t) {
                return r(this.__data__, t) > -1
            }
        },
        687074: function(t, e, n) {
            var r = n("815869");
            t.exports = function(t, e) {
                var n = this.__data__,
                    i = r(n, t);
                return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
            }
        },
        553070: function(t, e, n) {
            var r = n("861538"),
                i = n("900624"),
                a = n("117973");
            t.exports = function() {
                this.size = 0, this.__data__ = {
                    hash: new r,
                    map: new(a || i),
                    string: new r
                }
            }
        },
        883638: function(t, e, n) {
            var r = n("961499");
            t.exports = function(t) {
                var e = r(this, t).delete(t);
                return this.size -= e ? 1 : 0, e
            }
        },
        538444: function(t, e, n) {
            var r = n("961499");
            t.exports = function(t) {
                return r(this, t).get(t)
            }
        },
        455877: function(t, e, n) {
            var r = n("961499");
            t.exports = function(t) {
                return r(this, t).has(t)
            }
        },
        58990: function(t, e, n) {
            var r = n("961499");
            t.exports = function(t, e) {
                var n = r(this, t),
                    i = n.size;
                return n.set(t, e), this.size += n.size == i ? 0 : 1, this
            }
        },
        98368: function(t) {
            t.exports = function(t) {
                var e = -1,
                    n = Array(t.size);
                return t.forEach(function(t, r) {
                    n[++e] = [r, t]
                }), n
            }
        },
        849513: function(t) {
            t.exports = function(t, e) {
                return function(n) {
                    return null != n && n[t] === e && (void 0 !== e || t in Object(n))
                }
            }
        },
        915646: function(t, e, n) {
            var r = n("574153");
            t.exports = function(t) {
                var e = r(t, function(t) {
                        return 500 === n.size && n.clear(), t
                    }),
                    n = e.cache;
                return e
            }
        },
        524556: function(t, e, n) {
            var r = n("480751")(Object, "create");
            t.exports = r
        },
        539339: function(t, e, n) {
            var r = n("473518")(Object.keys, Object);
            t.exports = r
        },
        220126: function(t, e, n) {
            t = n.nmd(t);
            var r = n("940151"),
                i = "object" == typeof e && e && !e.nodeType && e,
                a = i && t && !t.nodeType && t,
                o = a && a.exports === i && r.process,
                s = function() {
                    try {
                        var t = a && a.require && a.require("util").types;
                        if (t) return t;
                        return o && o.binding && o.binding("util")
                    } catch (t) {}
                }();
            t.exports = s
        },
        251584: function(t) {
            var e = Object.prototype.toString;
            t.exports = function(t) {
                return e.call(t)
            }
        },
        473518: function(t) {
            t.exports = function(t, e) {
                return function(n) {
                    return t(e(n))
                }
            }
        },
        573401: function(t, e, n) {
            var r = n("940151"),
                i = "object" == typeof self && self && self.Object === Object && self,
                a = r || i || Function("return this")();
            t.exports = a
        },
        800016: function(t) {
            t.exports = function(t) {
                return this.__data__.set(t, "__lodash_hash_undefined__"), this
            }
        },
        364832: function(t) {
            t.exports = function(t) {
                return this.__data__.has(t)
            }
        },
        433005: function(t) {
            t.exports = function(t) {
                var e = -1,
                    n = Array(t.size);
                return t.forEach(function(t) {
                    n[++e] = t
                }), n
            }
        },
        979882: function(t, e, n) {
            var r = n("900624");
            t.exports = function() {
                this.__data__ = new r, this.size = 0
            }
        },
        686639: function(t) {
            t.exports = function(t) {
                var e = this.__data__,
                    n = e.delete(t);
                return this.size = e.size, n
            }
        },
        173887: function(t) {
            t.exports = function(t) {
                return this.__data__.get(t)
            }
        },
        702603: function(t) {
            t.exports = function(t) {
                return this.__data__.has(t)
            }
        },
        457853: function(t, e, n) {
            var r = n("900624"),
                i = n("117973"),
                a = n("302767");
            t.exports = function(t, e) {
                var n = this.__data__;
                if (n instanceof r) {
                    var o = n.__data__;
                    if (!i || o.length < 199) return o.push([t, e]), this.size = ++n.size, this;
                    n = this.__data__ = new a(o)
                }
                return n.set(t, e), this.size = n.size, this
            }
        },
        361596: function(t, e, n) {
            var r = n("915646"),
                i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                a = /\\(\\)?/g,
                o = r(function(t) {
                    var e = [];
                    return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function(t, n, r, i) {
                        e.push(r ? i.replace(a, "$1") : n || t)
                    }), e
                });
            t.exports = o
        },
        828091: function(t, e, n) {
            var r = n("42848"),
                i = 1 / 0;
            t.exports = function(t) {
                if ("string" == typeof t || r(t)) return t;
                var e = t + "";
                return "0" == e && 1 / t == -i ? "-0" : e
            }
        },
        19235: function(t) {
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
        703284: function(t) {
            t.exports = function(t, e) {
                return t === e || t != t && e != e
            }
        },
        102423: function(t, e, n) {
            var r = n("187856");
            t.exports = function(t, e, n) {
                var i = null == t ? void 0 : r(t, e);
                return void 0 === i ? n : i
            }
        },
        164400: function(t, e, n) {
            var r = n("486752"),
                i = n("560706");
            t.exports = function(t, e) {
                return null != t && i(t, e, r)
            }
        },
        98958: function(t) {
            t.exports = function(t) {
                return t
            }
        },
        443735: function(t, e, n) {
            var r = n("475227"),
                i = n("389109"),
                a = Object.prototype,
                o = a.hasOwnProperty,
                s = a.propertyIsEnumerable,
                u = r(function() {
                    return arguments
                }()) ? r : function(t) {
                    return i(t) && o.call(t, "callee") && !s.call(t, "callee")
                };
            t.exports = u
        },
        402428: function(t) {
            var e = Array.isArray;
            t.exports = e
        },
        771701: function(t, e, n) {
            var r = n("807419"),
                i = n("406705");
            t.exports = function(t) {
                return null != t && i(t.length) && !r(t)
            }
        },
        207757: function(t, e, n) {
            t = n.nmd(t);
            var r = n("573401"),
                i = n("88553"),
                a = "object" == typeof e && e && !e.nodeType && e,
                o = a && t && !t.nodeType && t,
                s = o && o.exports === a ? r.Buffer : void 0,
                u = s ? s.isBuffer : void 0;
            t.exports = u || i
        },
        807419: function(t, e, n) {
            var r = n("657398"),
                i = n("706627");
            t.exports = function(t) {
                if (!i(t)) return !1;
                var e = r(t);
                return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
            }
        },
        406705: function(t) {
            t.exports = function(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
            }
        },
        706627: function(t) {
            t.exports = function(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            }
        },
        389109: function(t) {
            t.exports = function(t) {
                return null != t && "object" == typeof t
            }
        },
        42848: function(t, e, n) {
            var r = n("657398"),
                i = n("389109");
            t.exports = function(t) {
                return "symbol" == typeof t || i(t) && "[object Symbol]" == r(t)
            }
        },
        556868: function(t, e, n) {
            var r = n("289126"),
                i = n("652715"),
                a = n("220126"),
                o = a && a.isTypedArray,
                s = o ? i(o) : r;
            t.exports = s
        },
        58834: function(t, e, n) {
            var r = n("347189"),
                i = n("800790"),
                a = n("771701");
            t.exports = function(t) {
                return a(t) ? r(t) : i(t)
            }
        },
        402903: function(t, e, n) {
            var r = n("580897"),
                i = n("289399"),
                a = n("161757");
            t.exports = function(t, e) {
                var n = {};
                return e = a(e, 3), i(t, function(t, i, a) {
                    r(n, i, e(t, i, a))
                }), n
            }
        },
        574153: function(t, e, n) {
            var r = n("302767");

            function i(t, e) {
                if ("function" != typeof t || null != e && "function" != typeof e) throw TypeError("Expected a function");
                var n = function() {
                    var r = arguments,
                        i = e ? e.apply(this, r) : r[0],
                        a = n.cache;
                    if (a.has(i)) return a.get(i);
                    var o = t.apply(this, r);
                    return n.cache = a.set(i, o) || a, o
                };
                return n.cache = new(i.Cache || r), n
            }
            i.Cache = r, t.exports = i
        },
        691363: function(t, e, n) {
            var r = n("181515"),
                i = n("521834"),
                a = n("844781"),
                o = n("828091");
            t.exports = function(t) {
                return a(t) ? r(o(t)) : i(t)
            }
        },
        135615: function(t) {
            t.exports = function() {
                return []
            }
        },
        88553: function(t) {
            t.exports = function() {
                return !1
            }
        },
        44091: function(t, e, n) {
            var r = n("217185");
            t.exports = function(t) {
                return null == t ? "" : r(t)
            }
        },
        444675: function(t) {
            var e, n, r, i = t.exports = {};

            function a() {
                throw Error("setTimeout has not been defined")
            }

            function o() {
                throw Error("clearTimeout has not been defined")
            }

            function s(t) {
                if (e === setTimeout) return setTimeout(t, 0);
                if ((e === a || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
                try {
                    return e(t, 0)
                } catch (n) {
                    try {
                        return e.call(null, t, 0)
                    } catch (n) {
                        return e.call(this, t, 0)
                    }
                }
            }! function() {
                try {
                    e = "function" == typeof setTimeout ? setTimeout : a
                } catch (t) {
                    e = a
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : o
                } catch (t) {
                    n = o
                }
            }();
            var u = [],
                c = !1,
                l = -1;

            function d() {
                c && r && (c = !1, r.length ? u = r.concat(u) : l = -1, u.length && f())
            }

            function f() {
                if (!c) {
                    var t = s(d);
                    c = !0;
                    for (var e = u.length; e;) {
                        for (r = u, u = []; ++l < e;) r && r[l].run();
                        l = -1, e = u.length
                    }
                    r = null, c = !1, ! function(t) {
                        if (n === clearTimeout) return clearTimeout(t);
                        if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
                        try {
                            n(t)
                        } catch (e) {
                            try {
                                return n.call(null, t)
                            } catch (e) {
                                return n.call(this, t)
                            }
                        }
                    }(t)
                }
            }

            function p(t, e) {
                this.fun = t, this.array = e
            }

            function h() {}
            i.nextTick = function(t) {
                var e = Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                u.push(new p(t, e)), 1 === u.length && !c && s(f)
            }, p.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = h, i.addListener = h, i.once = h, i.off = h, i.removeListener = h, i.removeAllListeners = h, i.emit = h, i.prependListener = h, i.prependOnceListener = h, i.listeners = function(t) {
                return []
            }, i.binding = function(t) {
                throw Error("process.binding is not supported")
            }, i.cwd = function() {
                return "/"
            }, i.chdir = function(t) {
                throw Error("process.chdir is not supported")
            }, i.umask = function() {
                return 0
            }
        },
        688619: function(t, e) {
            var n, r;
            n = this, r = function() {
                "use strict";
                for (var t = function(t, e, n) {
                        return void 0 === e && (e = 0), void 0 === n && (n = 1), t < e ? e : t > n ? n : t
                    }, e = {}, n = 0, r = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; n < r.length; n += 1) {
                    var i = r[n];
                    e["[object " + i + "]"] = i.toLowerCase()
                }
                var a = function(t) {
                        return e[Object.prototype.toString.call(t)] || "object"
                    },
                    o = Math.PI,
                    s = {
                        clip_rgb: function(e) {
                            e._clipped = !1, e._unclipped = e.slice(0);
                            for (var n = 0; n <= 3; n++) n < 3 ? ((e[n] < 0 || e[n] > 255) && (e._clipped = !0), e[n] = t(e[n], 0, 255)) : 3 === n && (e[n] = t(e[n], 0, 1));
                            return e
                        },
                        limit: t,
                        type: a,
                        unpack: function(t, e) {
                            return (void 0 === e && (e = null), t.length >= 3) ? Array.prototype.slice.call(t) : "object" == a(t[0]) && e ? e.split("").filter(function(e) {
                                return void 0 !== t[0][e]
                            }).map(function(e) {
                                return t[0][e]
                            }) : t[0]
                        },
                        last: function(t) {
                            if (t.length < 2) return null;
                            var e = t.length - 1;
                            return "string" == a(t[e]) ? t[e].toLowerCase() : null
                        },
                        TWOPI: 2 * o,
                        PITHIRD: o / 3,
                        DEG2RAD: o / 180,
                        RAD2DEG: 180 / o
                    },
                    u = {
                        format: {},
                        autodetect: []
                    },
                    c = s.last,
                    l = s.clip_rgb,
                    d = s.type,
                    f = function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        if ("object" === d(t[0]) && t[0].constructor && t[0].constructor === this.constructor) return t[0];
                        var n = c(t),
                            r = !1;
                        if (!n) {
                            r = !0, !u.sorted && (u.autodetect = u.autodetect.sort(function(t, e) {
                                return e.p - t.p
                            }), u.sorted = !0);
                            for (var i = 0, a = u.autodetect; i < a.length; i += 1) {
                                var o = a[i];
                                if (n = o.test.apply(o, t)) break
                            }
                        }
                        if (u.format[n]) {
                            var s = u.format[n].apply(null, r ? t : t.slice(0, -1));
                            this._rgb = l(s)
                        } else throw Error("unknown format: " + t);
                        3 === this._rgb.length && this._rgb.push(1)
                    };
                f.prototype.toString = function() {
                    return "function" == d(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]"
                };
                var p = function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    return new(Function.prototype.bind.apply(p.Color, [null].concat(t)))
                };
                p.Color = f, p.version = "2.4.2";
                var h = s.unpack,
                    _ = Math.max,
                    g = s.unpack,
                    m = s.unpack,
                    y = s.type,
                    v = function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        var n = h(t, "rgb"),
                            r = n[0],
                            i = n[1],
                            a = n[2],
                            o = 1 - _(r /= 255, _(i /= 255, a /= 255)),
                            s = o < 1 ? 1 / (1 - o) : 0;
                        return [(1 - r - o) * s, (1 - i - o) * s, (1 - a - o) * s, o]
                    };
                f.prototype.cmyk = function() {
                    return v(this._rgb)
                }, p.cmyk = function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    return new(Function.prototype.bind.apply(f, [null].concat(t, ["cmyk"])))
                }, u.format.cmyk = function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    var n = (t = g(t, "cmyk"))[0],
                        r = t[1],
                        i = t[2],
                        a = t[3],
                        o = t.length > 4 ? t[4] : 1;
                    return 1 === a ? [0, 0, 0, o] : [n >= 1 ? 0 : 255 * (1 - n) * (1 - a), r >= 1 ? 0 : 255 * (1 - r) * (1 - a), i >= 1 ? 0 : 255 * (1 - i) * (1 - a), o]
                }, u.autodetect.push({
                    p: 2,
                    test: function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        if ("array" === y(t = m(t, "cmyk")) && 4 === t.length) return "cmyk"
                    }
                });
                var b = s.unpack,
                    E = s.last,
                    S = function(t) {
                        return Math.round(100 * t) / 100
                    },
                    w = s.unpack,
                    T = function() {
                        for (var t, e, n = [], r = arguments.length; r--;) n[r] = arguments[r];
                        var i = (n = w(n, "rgba"))[0],
                            a = n[1],
                            o = n[2],
                            s = Math.min(i /= 255, a /= 255, o /= 255),
                            u = Math.max(i, a, o),
                            c = (u + s) / 2;
                        return (u === s ? (t = 0, e = Number.NaN) : t = c < .5 ? (u - s) / (u + s) : (u - s) / (2 - u - s), i == u ? e = (a - o) / (u - s) : a == u ? e = 2 + (o - i) / (u - s) : o == u && (e = 4 + (i - a) / (u - s)), (e *= 60) < 0 && (e += 360), n.length > 3 && void 0 !== n[3]) ? [e, t, c, n[3]] : [e, t, c]
                    },
                    k = s.unpack,
                    x = s.last,
                    R = function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        var n = b(t, "hsla"),
                            r = E(t) || "lsa";
                        return n[0] = S(n[0] || 0), n[1] = S(100 * n[1]) + "%", n[2] = S(100 * n[2]) + "%", "hsla" === r || n.length > 3 && n[3] < 1 ? (n[3] = n.length > 3 ? n[3] : 1, r = "hsla") : n.length = 3, r + "(" + n.join(",") + ")"
                    },
                    N = Math.round,
                    D = s.unpack,
                    I = Math.round,
                    O = function() {
                        for (var t, e, n, r, i = [], a = arguments.length; a--;) i[a] = arguments[a];
                        var o = (i = D(i, "hsl"))[0],
                            s = i[1],
                            u = i[2];
                        if (0 === s) e = n = r = 255 * u;
                        else {
                            var c = [0, 0, 0],
                                l = [0, 0, 0],
                                d = u < .5 ? u * (1 + s) : u + s - u * s,
                                f = 2 * u - d,
                                p = o / 360;
                            c[0] = p + 1 / 3, c[1] = p, c[2] = p - 1 / 3;
                            for (var h = 0; h < 3; h++) c[h] < 0 && (c[h] += 1), c[h] > 1 && (c[h] -= 1), 6 * c[h] < 1 ? l[h] = f + (d - f) * 6 * c[h] : 2 * c[h] < 1 ? l[h] = d : 3 * c[h] < 2 ? l[h] = f + (d - f) * (2 / 3 - c[h]) * 6 : l[h] = f;
                            e = (t = [I(255 * l[0]), I(255 * l[1]), I(255 * l[2])])[0], n = t[1], r = t[2]
                        }
                        return i.length > 3 ? [e, n, r, i[3]] : [e, n, r, 1]
                    },
                    C = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
                    A = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
                    B = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
                    U = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
                    M = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
                    L = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
                    P = Math.round,
                    G = function(t) {
                        if (t = t.toLowerCase().trim(), u.format.named) try {
                            return u.format.named(t)
                        } catch (t) {}
                        if (e = t.match(C)) {
                            for (var e, n = e.slice(1, 4), r = 0; r < 3; r++) n[r] = +n[r];
                            return n[3] = 1, n
                        }
                        if (e = t.match(A)) {
                            for (var i = e.slice(1, 5), a = 0; a < 4; a++) i[a] = +i[a];
                            return i
                        }
                        if (e = t.match(B)) {
                            for (var o = e.slice(1, 4), s = 0; s < 3; s++) o[s] = P(2.55 * o[s]);
                            return o[3] = 1, o
                        }
                        if (e = t.match(U)) {
                            for (var c = e.slice(1, 5), l = 0; l < 3; l++) c[l] = P(2.55 * c[l]);
                            return c[3] = +c[3], c
                        }
                        if (e = t.match(M)) {
                            var d = e.slice(1, 4);
                            d[1] *= .01, d[2] *= .01;
                            var f = O(d);
                            return f[3] = 1, f
                        }
                        if (e = t.match(L)) {
                            var p = e.slice(1, 4);
                            p[1] *= .01, p[2] *= .01;
                            var h = O(p);
                            return h[3] = +e[4], h
                        }
                    };
                G.test = function(t) {
                    return C.test(t) || A.test(t) || B.test(t) || U.test(t) || M.test(t) || L.test(t)
                };
                var F = s.type,
                    Y = function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        var n = k(t, "rgba"),
                            r = x(t) || "rgb";
                        return "hsl" == r.substr(0, 3) ? R(T(n), r) : (n[0] = N(n[0]), n[1] = N(n[1]), n[2] = N(n[2]), ("rgba" === r || n.length > 3 && n[3] < 1) && (n[3] = n.length > 3 ? n[3] : 1, r = "rgba"), r + "(" + n.slice(0, "rgb" === r ? 3 : 4).join(",") + ")")
                    };
                f.prototype.css = function(t) {
                    return Y(this._rgb, t)
                }, p.css = function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    return new(Function.prototype.bind.apply(f, [null].concat(t, ["css"])))
                }, u.format.css = G, u.autodetect.push({
                    p: 5,
                    test: function(t) {
                        for (var e = [], n = arguments.length - 1; n-- > 0;) e[n] = arguments[n + 1];
                        if (!e.length && "string" === F(t) && G.test(t)) return "css"
                    }
                });
                var z = s.unpack;
                u.format.gl = function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    var n = z(t, "rgba");
                    return n[0] *= 255, n[1] *= 255, n[2] *= 255, n
                }, p.gl = function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    return new(Function.prototype.bind.apply(f, [null].concat(t, ["gl"])))
                }, f.prototype.gl = function() {
                    var t = this._rgb;
                    return [t[0] / 255, t[1] / 255, t[2] / 255, t[3]]
                };
                var j = s.unpack,
                    H = s.unpack,
                    $ = Math.floor,
                    W = s.unpack,
                    q = s.type,
                    Z = function() {
                        for (var t, e = [], n = arguments.length; n--;) e[n] = arguments[n];
                        var r = j(e, "rgb"),
                            i = r[0],
                            a = r[1],
                            o = r[2],
                            s = Math.min(i, a, o),
                            u = Math.max(i, a, o),
                            c = u - s;
                        return 0 === c ? t = Number.NaN : (i === u && (t = (a - o) / c), a === u && (t = 2 + (o - i) / c), o === u && (t = 4 + (i - a) / c), (t *= 60) < 0 && (t += 360)), [t, 100 * c / 255, s / (255 - c) * 100]
                    };
                f.prototype.hcg = function() {
                    return Z(this._rgb)
                }, p.hcg = function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    return new(Function.prototype.bind.apply(f, [null].concat(t, ["hcg"])))
                }, u.format.hcg = function() {
                    for (var t, e, n, r, i, a, o, s, u, c = [], l = arguments.length; l--;) c[l] = arguments[l];
                    var d = (c = H(c, "hcg"))[0],
                        f = c[1],
                        p = c[2];
                    p *= 255;
                    var h = 255 * f;
                    if (0 === f) o = s = u = p;
                    else {
                        360 === d && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360);
                        var _ = $(d /= 60),
                            g = d - _,
                            m = p * (1 - f),
                            y = m + h * (1 - g),
                            v = m + h * g,
                            b = m + h;
                        switch (_) {
                            case 0:
                                o = (t = [b, v, m])[0], s = t[1], u = t[2];
                                break;
                            case 1:
                                o = (e = [y, b, m])[0], s = e[1], u = e[2];
                                break;
                            case 2:
                                o = (n = [m, b, v])[0], s = n[1], u = n[2];
                                break;
                            case 3:
                                o = (r = [m, y, b])[0], s = r[1], u = r[2];
                                break;
                            case 4:
                                o = (i = [v, m, b])[0], s = i[1], u = i[2];
                                break;
                            case 5:
                                o = (a = [b, m, y])[0], s = a[1], u = a[2]
                        }
                    }
                    return [o, s, u, c.length > 3 ? c[3] : 1]
                }, u.autodetect.push({
                    p: 1,
                    test: function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        if ("array" === q(t = W(t, "hcg")) && 3 === t.length) return "hcg"
                    }
                });
                var V = s.unpack,
                    J = s.last,
                    K = Math.round,
                    X = function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        var n = V(t, "rgba"),
                            r = n[0],
                            i = n[1],
                            a = n[2],
                            o = n[3],
                            s = J(t) || "auto";
                        void 0 === o && (o = 1), "auto" === s && (s = o < 1 ? "rgba" : "rgb"), r = K(r), i = K(i);
                        var u = "000000" + (r << 16 | i << 8 | (a = K(a))).toString(16);
                        u = u.substr(u.length - 6);
                        var c = "0" + K(255 * o).toString(16);
                        switch (c = c.substr(c.length - 2), s.toLowerCase()) {
                            case "rgba":
                                return "#" + u + c;
                            case "argb":
                                return "#" + c + u;
                            default:
                                return "#" + u
                        }
                    },
                    Q = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
                    tt = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
                    te = function(t) {
                        if (t.match(Q)) {
                            (4 === t.length || 7 === t.length) && (t = t.substr(1)), 3 === t.length && (t = (t = t.split(""))[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
                            var e = parseInt(t, 16);
                            return [e >> 16, e >> 8 & 255, 255 & e, 1]
                        }
                        if (t.match(tt)) {
                            (5 === t.length || 9 === t.length) && (t = t.substr(1)), 4 === t.length && (t = (t = t.split(""))[0] + t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
                            var n = parseInt(t, 16);
                            return [n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, Math.round((255 & n) / 255 * 100) / 100]
                        }
                        throw Error("unknown hex color: " + t)
                    },
                    tn = s.type;
                f.prototype.hex = function(t) {
                    return X(this._rgb, t)
                }, p.hex = function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    return new(Function.prototype.bind.apply(f, [null].concat(t, ["hex"])))
                }, u.format.hex = te, u.autodetect.push({
                    p: 4,
                    test: function(t) {
                        for (var e = [], n = arguments.length - 1; n-- > 0;) e[n] = arguments[n + 1];
                        if (!e.length && "string" === tn(t) && [3, 4, 5, 6, 7, 8, 9].indexOf(t.length) >= 0) return "hex"
                    }
                });
                var tr = s.unpack,
                    ti = s.TWOPI,
                    ta = Math.min,
                    to = Math.sqrt,
                    ts = Math.acos,
                    tu = s.unpack,
                    tc = s.limit,
                    tl = s.TWOPI,
                    td = s.PITHIRD,
                    tf = Math.cos,
                    tp = s.unpack,
                    th = s.type,
                    t_ = function() {
                        for (var t, e = [], n = arguments.length; n--;) e[n] = arguments[n];
                        var r = tr(e, "rgb"),
                            i = r[0],
                            a = r[1],
                            o = r[2],
                            s = ta(i /= 255, a /= 255, o /= 255),
                            u = (i + a + o) / 3,
                            c = u > 0 ? 1 - s / u : 0;
                        return 0 === c ? t = NaN : (t = ts(t = (i - a + (i - o)) / 2 / to((i - a) * (i - a) + (i - o) * (a - o))), o > a && (t = ti - t), t /= ti), [360 * t, c, u]
                    };
                f.prototype.hsi = function() {
                    return t_(this._rgb)
                }, p.hsi = function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    return new(Function.prototype.bind.apply(f, [null].concat(t, ["hsi"])))
                }, u.format.hsi = function() {
                    for (var t, e, n, r = [], i = arguments.length; i--;) r[i] = arguments[i];
                    var a = (r = tu(r, "hsi"))[0],
                        o = r[1],
                        s = r[2];
                    return isNaN(a) && (a = 0), isNaN(o) && (o = 0), a > 360 && (a -= 360), a < 0 && (a += 360), (a /= 360) < 1 / 3 ? e = 1 - ((n = (1 - o) / 3) + (t = (1 + o * tf(tl * a) / tf(td - tl * a)) / 3)) : a < 2 / 3 ? (a -= 1 / 3, n = 1 - ((t = (1 - o) / 3) + (e = (1 + o * tf(tl * a) / tf(td - tl * a)) / 3))) : (a -= 2 / 3, t = 1 - ((e = (1 - o) / 3) + (n = (1 + o * tf(tl * a) / tf(td - tl * a)) / 3))), t = tc(s * t * 3), e = tc(s * e * 3), [255 * t, 255 * e, 255 * (n = tc(s * n * 3)), r.length > 3 ? r[3] : 1]
                }, u.autodetect.push({
                    p: 2,
                    test: function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        if ("array" === th(t = tp(t, "hsi")) && 3 === t.length) return "hsi"
                    }
                });
                var tg = s.unpack,
                    tm = s.type;
                f.prototype.hsl = function() {
                    return T(this._rgb)
                }, p.hsl = function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    return new(Function.prototype.bind.apply(f, [null].concat(t, ["hsl"])))
                }, u.format.hsl = O, u.autodetect.push({
                    p: 2,
                    test: function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        if ("array" === tm(t = tg(t, "hsl")) && 3 === t.length) return "hsl"
                    }
                });
                var ty = s.unpack,
                    tv = Math.min,
                    tb = Math.max,
                    tE = s.unpack,
                    tS = Math.floor,
                    tw = s.unpack,
                    tT = s.type,
                    tk = function() {
                        for (var t, e, n = [], r = arguments.length; r--;) n[r] = arguments[r];
                        var i = (n = ty(n, "rgb"))[0],
                            a = n[1],
                            o = n[2],
                            s = tv(i, a, o),
                            u = tb(i, a, o),
                            c = u - s;
                        return 0 === u ? (t = Number.NaN, e = 0) : (e = c / u, i === u && (t = (a - o) / c), a === u && (t = 2 + (o - i) / c), o === u && (t = 4 + (i - a) / c), (t *= 60) < 0 && (t += 360)), [t, e, u / 255]
                    };
                f.prototype.hsv = function() {
                    return tk(this._rgb)
                }, p.hsv = function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    return new(Function.prototype.bind.apply(f, [null].concat(t, ["hsv"])))
                }, u.format.hsv = function() {
                    for (var t, e, n, r, i, a, o, s, u, c = [], l = arguments.length; l--;) c[l] = arguments[l];
                    var d = (c = tE(c, "hsv"))[0],
                        f = c[1],
                        p = c[2];
                    if (p *= 255, 0 === f) o = s = u = p;
                    else {
                        360 === d && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360);
                        var h = tS(d /= 60),
                            _ = d - h,
                            g = p * (1 - f),
                            m = p * (1 - f * _),
                            y = p * (1 - f * (1 - _));
                        switch (h) {
                            case 0:
                                o = (t = [p, y, g])[0], s = t[1], u = t[2];
                                break;
                            case 1:
                                o = (e = [m, p, g])[0], s = e[1], u = e[2];
                                break;
                            case 2:
                                o = (n = [g, p, y])[0], s = n[1], u = n[2];
                                break;
                            case 3:
                                o = (r = [g, m, p])[0], s = r[1], u = r[2];
                                break;
                            case 4:
                                o = (i = [y, g, p])[0], s = i[1], u = i[2];
                                break;
                            case 5:
                                o = (a = [p, g, m])[0], s = a[1], u = a[2]
                        }
                    }
                    return [o, s, u, c.length > 3 ? c[3] : 1]
                }, u.autodetect.push({
                    p: 2,
                    test: function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        if ("array" === tT(t = tw(t, "hsv")) && 3 === t.length) return "hsv"
                    }
                });
                var tx = {
                        Kn: 18,
                        Xn: .95047,
                        Yn: 1,
                        Zn: 1.08883,
                        t0: .137931034,
                        t1: .206896552,
                        t2: .12841855,
                        t3: .008856452
                    },
                    tR = s.unpack,
                    tN = Math.pow,
                    tD = function(t) {
                        return (t /= 255) <= .04045 ? t / 12.92 : tN((t + .055) / 1.055, 2.4)
                    },
                    tI = function(t) {
                        return t > tx.t3 ? tN(t, 1 / 3) : t / tx.t2 + tx.t0
                    },
                    tO = function(t, e, n) {
                        return t = tD(t), e = tD(e), [tI((.4124564 * t + .3575761 * e + .1804375 * (n = tD(n))) / tx.Xn), tI((.2126729 * t + .7151522 * e + .072175 * n) / tx.Yn), tI((.0193339 * t + .119192 * e + .9503041 * n) / tx.Zn)]
                    },
                    tC = function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        var n = tR(t, "rgb"),
                            r = tO(n[0], n[1], n[2]),
                            i = r[0],
                            a = r[1],
                            o = r[2],
                            s = 116 * a - 16;
                        return [s < 0 ? 0 : s, 500 * (i - a), 200 * (a - o)]
                    },
                    tA = s.unpack,
                    tB = Math.pow,
                    tU = function(t) {
                        return 255 * (t <= .00304 ? 12.92 * t : 1.055 * tB(t, 1 / 2.4) - .055)
                    },
                    tM = function(t) {
                        return t > tx.t1 ? t * t * t : tx.t2 * (t - tx.t0)
                    },
                    tL = function() {
                        for (var t, e, n, r, i, a = [], o = arguments.length; o--;) a[o] = arguments[o];
                        var s = (a = tA(a, "lab"))[0],
                            u = a[1],
                            c = a[2];
                        return e = (s + 16) / 116, t = isNaN(u) ? e : e + u / 500, n = isNaN(c) ? e : e - c / 200, e = tx.Yn * tM(e), t = tx.Xn * tM(t), r = tU(3.2404542 * t - 1.5371385 * e - .4985314 * (n = tx.Zn * tM(n))), i = tU(-.969266 * t + 1.8760108 * e + .041556 * n), [r, i, tU(.0556434 * t - .2040259 * e + 1.0572252 * n), a.length > 3 ? a[3] : 1]
                    },
                    tP = s.unpack,
                    tG = s.type;
                f.prototype.lab = function() {
                    return tC(this._rgb)
                }, p.lab = function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    return new(Function.prototype.bind.apply(f, [null].concat(t, ["lab"])))
                }, u.format.lab = tL, u.autodetect.push({
                    p: 2,
                    test: function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        if ("array" === tG(t = tP(t, "lab")) && 3 === t.length) return "lab"
                    }
                });
                var tF = s.unpack,
                    tY = s.RAD2DEG,
                    tz = Math.sqrt,
                    tj = Math.atan2,
                    tH = Math.round,
                    t$ = function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        var n = tF(t, "lab"),
                            r = n[0],
                            i = n[1],
                            a = n[2],
                            o = tz(i * i + a * a),
                            s = (tj(a, i) * tY + 360) % 360;
                        return 0 === tH(1e4 * o) && (s = Number.NaN), [r, o, s]
                    },
                    tW = s.unpack,
                    tq = s.unpack,
                    tZ = s.DEG2RAD,
                    tV = Math.sin,
                    tJ = Math.cos,
                    tK = function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        var n = tq(t, "lch"),
                            r = n[0],
                            i = n[1],
                            a = n[2];
                        return isNaN(a) && (a = 0), [r, tJ(a *= tZ) * i, tV(a) * i]
                    },
                    tX = s.unpack,
                    tQ = function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        var n = tK((t = tX(t, "lch"))[0], t[1], t[2]),
                            r = tL(n[0], n[1], n[2]);
                        return [r[0], r[1], r[2], t.length > 3 ? t[3] : 1]
                    },
                    t0 = s.unpack,
                    t1 = s.unpack,
                    t2 = s.type,
                    t5 = function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        var n = tW(t, "rgb"),
                            r = tC(n[0], n[1], n[2]);
                        return t$(r[0], r[1], r[2])
                    };
                f.prototype.lch = function() {
                    return t5(this._rgb)
                }, f.prototype.hcl = function() {
                    return t5(this._rgb).reverse()
                }, p.lch = function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    return new(Function.prototype.bind.apply(f, [null].concat(t, ["lch"])))
                }, p.hcl = function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    return new(Function.prototype.bind.apply(f, [null].concat(t, ["hcl"])))
                }, u.format.lch = tQ, u.format.hcl = function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    var n = t0(t, "hcl").reverse();
                    return tQ.apply(void 0, n)
                }, ["lch", "hcl"].forEach(function(t) {
                    return u.autodetect.push({
                        p: 2,
                        test: function() {
                            for (var e = [], n = arguments.length; n--;) e[n] = arguments[n];
                            if ("array" === t2(e = t1(e, t)) && 3 === e.length) return t
                        }
                    })
                });
                var t3 = {
                        aliceblue: "#f0f8ff",
                        antiquewhite: "#faebd7",
                        aqua: "#00ffff",
                        aquamarine: "#7fffd4",
                        azure: "#f0ffff",
                        beige: "#f5f5dc",
                        bisque: "#ffe4c4",
                        black: "#000000",
                        blanchedalmond: "#ffebcd",
                        blue: "#0000ff",
                        blueviolet: "#8a2be2",
                        brown: "#a52a2a",
                        burlywood: "#deb887",
                        cadetblue: "#5f9ea0",
                        chartreuse: "#7fff00",
                        chocolate: "#d2691e",
                        coral: "#ff7f50",
                        cornflower: "#6495ed",
                        cornflowerblue: "#6495ed",
                        cornsilk: "#fff8dc",
                        crimson: "#dc143c",
                        cyan: "#00ffff",
                        darkblue: "#00008b",
                        darkcyan: "#008b8b",
                        darkgoldenrod: "#b8860b",
                        darkgray: "#a9a9a9",
                        darkgreen: "#006400",
                        darkgrey: "#a9a9a9",
                        darkkhaki: "#bdb76b",
                        darkmagenta: "#8b008b",
                        darkolivegreen: "#556b2f",
                        darkorange: "#ff8c00",
                        darkorchid: "#9932cc",
                        darkred: "#8b0000",
                        darksalmon: "#e9967a",
                        darkseagreen: "#8fbc8f",
                        darkslateblue: "#483d8b",
                        darkslategray: "#2f4f4f",
                        darkslategrey: "#2f4f4f",
                        darkturquoise: "#00ced1",
                        darkviolet: "#9400d3",
                        deeppink: "#ff1493",
                        deepskyblue: "#00bfff",
                        dimgray: "#696969",
                        dimgrey: "#696969",
                        dodgerblue: "#1e90ff",
                        firebrick: "#b22222",
                        floralwhite: "#fffaf0",
                        forestgreen: "#228b22",
                        fuchsia: "#ff00ff",
                        gainsboro: "#dcdcdc",
                        ghostwhite: "#f8f8ff",
                        gold: "#ffd700",
                        goldenrod: "#daa520",
                        gray: "#808080",
                        green: "#008000",
                        greenyellow: "#adff2f",
                        grey: "#808080",
                        honeydew: "#f0fff0",
                        hotpink: "#ff69b4",
                        indianred: "#cd5c5c",
                        indigo: "#4b0082",
                        ivory: "#fffff0",
                        khaki: "#f0e68c",
                        laserlemon: "#ffff54",
                        lavender: "#e6e6fa",
                        lavenderblush: "#fff0f5",
                        lawngreen: "#7cfc00",
                        lemonchiffon: "#fffacd",
                        lightblue: "#add8e6",
                        lightcoral: "#f08080",
                        lightcyan: "#e0ffff",
                        lightgoldenrod: "#fafad2",
                        lightgoldenrodyellow: "#fafad2",
                        lightgray: "#d3d3d3",
                        lightgreen: "#90ee90",
                        lightgrey: "#d3d3d3",
                        lightpink: "#ffb6c1",
                        lightsalmon: "#ffa07a",
                        lightseagreen: "#20b2aa",
                        lightskyblue: "#87cefa",
                        lightslategray: "#778899",
                        lightslategrey: "#778899",
                        lightsteelblue: "#b0c4de",
                        lightyellow: "#ffffe0",
                        lime: "#00ff00",
                        limegreen: "#32cd32",
                        linen: "#faf0e6",
                        magenta: "#ff00ff",
                        maroon: "#800000",
                        maroon2: "#7f0000",
                        maroon3: "#b03060",
                        mediumaquamarine: "#66cdaa",
                        mediumblue: "#0000cd",
                        mediumorchid: "#ba55d3",
                        mediumpurple: "#9370db",
                        mediumseagreen: "#3cb371",
                        mediumslateblue: "#7b68ee",
                        mediumspringgreen: "#00fa9a",
                        mediumturquoise: "#48d1cc",
                        mediumvioletred: "#c71585",
                        midnightblue: "#191970",
                        mintcream: "#f5fffa",
                        mistyrose: "#ffe4e1",
                        moccasin: "#ffe4b5",
                        navajowhite: "#ffdead",
                        navy: "#000080",
                        oldlace: "#fdf5e6",
                        olive: "#808000",
                        olivedrab: "#6b8e23",
                        orange: "#ffa500",
                        orangered: "#ff4500",
                        orchid: "#da70d6",
                        palegoldenrod: "#eee8aa",
                        palegreen: "#98fb98",
                        paleturquoise: "#afeeee",
                        palevioletred: "#db7093",
                        papayawhip: "#ffefd5",
                        peachpuff: "#ffdab9",
                        peru: "#cd853f",
                        pink: "#ffc0cb",
                        plum: "#dda0dd",
                        powderblue: "#b0e0e6",
                        purple: "#800080",
                        purple2: "#7f007f",
                        purple3: "#a020f0",
                        rebeccapurple: "#663399",
                        red: "#ff0000",
                        rosybrown: "#bc8f8f",
                        royalblue: "#4169e1",
                        saddlebrown: "#8b4513",
                        salmon: "#fa8072",
                        sandybrown: "#f4a460",
                        seagreen: "#2e8b57",
                        seashell: "#fff5ee",
                        sienna: "#a0522d",
                        silver: "#c0c0c0",
                        skyblue: "#87ceeb",
                        slateblue: "#6a5acd",
                        slategray: "#708090",
                        slategrey: "#708090",
                        snow: "#fffafa",
                        springgreen: "#00ff7f",
                        steelblue: "#4682b4",
                        tan: "#d2b48c",
                        teal: "#008080",
                        thistle: "#d8bfd8",
                        tomato: "#ff6347",
                        turquoise: "#40e0d0",
                        violet: "#ee82ee",
                        wheat: "#f5deb3",
                        white: "#ffffff",
                        whitesmoke: "#f5f5f5",
                        yellow: "#ffff00",
                        yellowgreen: "#9acd32"
                    },
                    t6 = s.type;
                f.prototype.name = function() {
                    for (var t = X(this._rgb, "rgb"), e = 0, n = Object.keys(t3); e < n.length; e += 1) {
                        var r = n[e];
                        if (t3[r] === t) return r.toLowerCase()
                    }
                    return t
                }, u.format.named = function(t) {
                    if (t3[t = t.toLowerCase()]) return te(t3[t]);
                    throw Error("unknown color name: " + t)
                }, u.autodetect.push({
                    p: 5,
                    test: function(t) {
                        for (var e = [], n = arguments.length - 1; n-- > 0;) e[n] = arguments[n + 1];
                        if (!e.length && "string" === t6(t) && t3[t.toLowerCase()]) return "named"
                    }
                });
                var t4 = s.unpack,
                    t8 = s.type,
                    t7 = s.type,
                    t9 = function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        var n = t4(t, "rgb");
                        return (n[0] << 16) + (n[1] << 8) + n[2]
                    };
                f.prototype.num = function() {
                    return t9(this._rgb)
                }, p.num = function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    return new(Function.prototype.bind.apply(f, [null].concat(t, ["num"])))
                }, u.format.num = function(t) {
                    if ("number" == t8(t) && t >= 0 && t <= 16777215) return [t >> 16, t >> 8 & 255, 255 & t, 1];
                    throw Error("unknown num color: " + t)
                }, u.autodetect.push({
                    p: 5,
                    test: function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        if (1 === t.length && "number" === t7(t[0]) && t[0] >= 0 && t[0] <= 16777215) return "num"
                    }
                });
                var et = s.unpack,
                    ee = s.type,
                    en = Math.round;
                f.prototype.rgb = function(t) {
                    return (void 0 === t && (t = !0), !1 === t) ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(en)
                }, f.prototype.rgba = function(t) {
                    return void 0 === t && (t = !0), this._rgb.slice(0, 4).map(function(e, n) {
                        return n < 3 ? !1 === t ? e : en(e) : e
                    })
                }, p.rgb = function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    return new(Function.prototype.bind.apply(f, [null].concat(t, ["rgb"])))
                }, u.format.rgb = function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    var n = et(t, "rgba");
                    return void 0 === n[3] && (n[3] = 1), n
                }, u.autodetect.push({
                    p: 3,
                    test: function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        if ("array" === ee(t = et(t, "rgba")) && (3 === t.length || 4 === t.length && "number" == ee(t[3]) && t[3] >= 0 && t[3] <= 1)) return "rgb"
                    }
                });
                var er = Math.log,
                    ei = function(t) {
                        var e, n, r, i = t / 100;
                        return i < 66 ? (e = 255, n = i < 6 ? 0 : -155.25485562709179 - .44596950469579133 * (n = i - 2) + 104.49216199393888 * er(n), r = i < 20 ? 0 : -254.76935184120902 + .8274096064007395 * (r = i - 10) + 115.67994401066147 * er(r)) : (e = 351.97690566805693 + .114206453784165 * (e = i - 55) - 40.25366309332127 * er(e), n = 325.4494125711974 + .07943456536662342 * (n = i - 50) - 28.0852963507957 * er(n), r = 255), [e, n, r, 1]
                    },
                    ea = s.unpack,
                    eo = Math.round,
                    es = function() {
                        for (var t, e = [], n = arguments.length; n--;) e[n] = arguments[n];
                        for (var r = ea(e, "rgb"), i = r[0], a = r[2], o = 1e3, s = 4e4; s - o > .4;) {
                            var u = ei(t = (s + o) * .5);
                            u[2] / u[0] >= a / i ? s = t : o = t
                        }
                        return eo(t)
                    };
                f.prototype.temp = f.prototype.kelvin = f.prototype.temperature = function() {
                    return es(this._rgb)
                }, p.temp = p.kelvin = p.temperature = function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    return new(Function.prototype.bind.apply(f, [null].concat(t, ["temp"])))
                }, u.format.temp = u.format.kelvin = u.format.temperature = ei;
                var eu = s.unpack,
                    ec = Math.cbrt,
                    el = Math.pow,
                    ed = Math.sign,
                    ef = function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        var n = eu(t, "rgb"),
                            r = n[0],
                            i = n[1],
                            a = n[2],
                            o = [ep(r / 255), ep(i / 255), ep(a / 255)],
                            s = o[0],
                            u = o[1],
                            c = o[2],
                            l = ec(.4122214708 * s + .5363325363 * u + .0514459929 * c),
                            d = ec(.2119034982 * s + .6806995451 * u + .1073969566 * c),
                            f = ec(.0883024619 * s + .2817188376 * u + .6299787005 * c);
                        return [.2104542553 * l + .793617785 * d - .0040720468 * f, 1.9779984951 * l - 2.428592205 * d + .4505937099 * f, .0259040371 * l + .7827717662 * d - .808675766 * f]
                    };

                function ep(t) {
                    var e = Math.abs(t);
                    return e < .04045 ? t / 12.92 : (ed(t) || 1) * el((e + .055) / 1.055, 2.4)
                }
                var eh = s.unpack,
                    e_ = Math.pow,
                    eg = Math.sign,
                    em = function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        var n = (t = eh(t, "lab"))[0],
                            r = t[1],
                            i = t[2],
                            a = e_(n + .3963377774 * r + .2158037573 * i, 3),
                            o = e_(n - .1055613458 * r - .0638541728 * i, 3),
                            s = e_(n - .0894841775 * r - 1.291485548 * i, 3);
                        return [255 * ey(4.0767416621 * a - 3.3077115913 * o + .2309699292 * s), 255 * ey(-1.2684380046 * a + 2.6097574011 * o - .3413193965 * s), 255 * ey(-.0041960863 * a - .7034186147 * o + 1.707614701 * s), t.length > 3 ? t[3] : 1]
                    };

                function ey(t) {
                    var e = Math.abs(t);
                    return e > .0031308 ? (eg(t) || 1) * (1.055 * e_(e, 1 / 2.4) - .055) : 12.92 * t
                }
                var ev = s.unpack,
                    eb = s.type;
                f.prototype.oklab = function() {
                    return ef(this._rgb)
                }, p.oklab = function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    return new(Function.prototype.bind.apply(f, [null].concat(t, ["oklab"])))
                }, u.format.oklab = em, u.autodetect.push({
                    p: 3,
                    test: function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        if ("array" === eb(t = ev(t, "oklab")) && 3 === t.length) return "oklab"
                    }
                });
                var eE = s.unpack,
                    eS = s.unpack,
                    ew = s.unpack,
                    eT = s.type,
                    ek = function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        var n = eE(t, "rgb"),
                            r = ef(n[0], n[1], n[2]);
                        return t$(r[0], r[1], r[2])
                    };
                f.prototype.oklch = function() {
                    return ek(this._rgb)
                }, p.oklch = function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    return new(Function.prototype.bind.apply(f, [null].concat(t, ["oklch"])))
                }, u.format.oklch = function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    var n = tK((t = eS(t, "lch"))[0], t[1], t[2]),
                        r = em(n[0], n[1], n[2]);
                    return [r[0], r[1], r[2], t.length > 3 ? t[3] : 1]
                }, u.autodetect.push({
                    p: 3,
                    test: function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        if ("array" === eT(t = ew(t, "oklch")) && 3 === t.length) return "oklch"
                    }
                });
                var ex = s.type;
                f.prototype.alpha = function(t, e) {
                    if (void 0 === e && (e = !1), void 0 !== t && "number" === ex(t)) return e ? (this._rgb[3] = t, this) : new f([this._rgb[0], this._rgb[1], this._rgb[2], t], "rgb");
                    return this._rgb[3]
                };
                f.prototype.clipped = function() {
                    return this._rgb._clipped || !1
                };
                f.prototype.darken = function(t) {
                    void 0 === t && (t = 1);
                    var e = this.lab();
                    return e[0] -= tx.Kn * t, new f(e, "lab").alpha(this.alpha(), !0)
                }, f.prototype.brighten = function(t) {
                    return void 0 === t && (t = 1), this.darken(-t)
                }, f.prototype.darker = f.prototype.darken, f.prototype.brighter = f.prototype.brighten;
                f.prototype.get = function(t) {
                    var e = t.split("."),
                        n = e[0],
                        r = e[1],
                        i = this[n]();
                    if (!r) return i;
                    var a = n.indexOf(r) - ("ok" === n.substr(0, 2) ? 2 : 0);
                    if (a > -1) return i[a];
                    throw Error("unknown channel " + r + " in mode " + n)
                };
                var eR = s.type,
                    eN = Math.pow;
                f.prototype.luminance = function(t) {
                    if (void 0 !== t && "number" === eR(t)) {
                        if (0 === t) return new f([0, 0, 0, this._rgb[3]], "rgb");
                        if (1 === t) return new f([255, 255, 255, this._rgb[3]], "rgb");
                        var e = this.luminance(),
                            n = 20,
                            r = function(e, i) {
                                var a = e.interpolate(i, .5, "rgb"),
                                    o = a.luminance();
                                return !(1e-7 > Math.abs(t - o)) && n-- ? o > t ? r(e, a) : r(a, i) : a
                            },
                            i = (e > t ? r(new f([0, 0, 0]), this) : r(this, new f([255, 255, 255]))).rgb();
                        return new f(i.concat([this._rgb[3]]))
                    }
                    return eD.apply(void 0, this._rgb.slice(0, 3))
                };
                var eD = function(t, e, n) {
                        return t = eI(t), e = eI(e), .2126 * t + .7152 * e + .0722 * (n = eI(n))
                    },
                    eI = function(t) {
                        return (t /= 255) <= .03928 ? t / 12.92 : eN((t + .055) / 1.055, 2.4)
                    },
                    eO = {},
                    eC = s.type,
                    eA = function(t, e, n) {
                        void 0 === n && (n = .5);
                        for (var r = [], i = arguments.length - 3; i-- > 0;) r[i] = arguments[i + 3];
                        var a = r[0] || "lrgb";
                        if (!eO[a] && !r.length && (a = Object.keys(eO)[0]), !eO[a]) throw Error("interpolation mode " + a + " is not defined");
                        return "object" !== eC(t) && (t = new f(t)), "object" !== eC(e) && (e = new f(e)), eO[a](t, e, n).alpha(t.alpha() + n * (e.alpha() - t.alpha()))
                    };
                f.prototype.mix = f.prototype.interpolate = function(t, e) {
                    void 0 === e && (e = .5);
                    for (var n = [], r = arguments.length - 2; r-- > 0;) n[r] = arguments[r + 2];
                    return eA.apply(void 0, [this, t, e].concat(n))
                };
                f.prototype.premultiply = function(t) {
                    void 0 === t && (t = !1);
                    var e = this._rgb,
                        n = e[3];
                    return t ? (this._rgb = [e[0] * n, e[1] * n, e[2] * n, n], this) : new f([e[0] * n, e[1] * n, e[2] * n, n], "rgb")
                };
                f.prototype.saturate = function(t) {
                    void 0 === t && (t = 1);
                    var e = this.lch();
                    return e[1] += tx.Kn * t, e[1] < 0 && (e[1] = 0), new f(e, "lch").alpha(this.alpha(), !0)
                }, f.prototype.desaturate = function(t) {
                    return void 0 === t && (t = 1), this.saturate(-t)
                };
                var eB = s.type;
                f.prototype.set = function(t, e, n) {
                    void 0 === n && (n = !1);
                    var r = t.split("."),
                        i = r[0],
                        a = r[1],
                        o = this[i]();
                    if (!a) return o;
                    var s = i.indexOf(a) - ("ok" === i.substr(0, 2) ? 2 : 0);
                    if (s > -1) {
                        if ("string" == eB(e)) switch (e.charAt(0)) {
                                case "+":
                                case "-":
                                    o[s] += +e;
                                    break;
                                case "*":
                                    o[s] *= +e.substr(1);
                                    break;
                                case "/":
                                    o[s] /= +e.substr(1);
                                    break;
                                default:
                                    o[s] = +e
                            } else if ("number" === eB(e)) o[s] = e;
                            else throw Error("unsupported value for Color.set");
                        var u = new f(o, i);
                        return n ? (this._rgb = u._rgb, this) : u
                    }
                    throw Error("unknown channel " + a + " in mode " + i)
                };
                eO.rgb = function(t, e, n) {
                    var r = t._rgb,
                        i = e._rgb;
                    return new f(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "rgb")
                };
                var eU = Math.sqrt,
                    eM = Math.pow;
                eO.lrgb = function(t, e, n) {
                    var r = t._rgb,
                        i = r[0],
                        a = r[1],
                        o = r[2],
                        s = e._rgb,
                        u = s[0],
                        c = s[1],
                        l = s[2];
                    return new f(eU(eM(i, 2) * (1 - n) + eM(u, 2) * n), eU(eM(a, 2) * (1 - n) + eM(c, 2) * n), eU(eM(o, 2) * (1 - n) + eM(l, 2) * n), "rgb")
                };
                eO.lab = function(t, e, n) {
                    var r = t.lab(),
                        i = e.lab();
                    return new f(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "lab")
                };
                var eL = function(t, e, n, r) {
                        var i, a, o, s, u, c, l, d, p, h, _, g, m, y;
                        return "hsl" === r ? (o = t.hsl(), s = e.hsl()) : "hsv" === r ? (o = t.hsv(), s = e.hsv()) : "hcg" === r ? (o = t.hcg(), s = e.hcg()) : "hsi" === r ? (o = t.hsi(), s = e.hsi()) : "lch" === r || "hcl" === r ? (r = "hcl", o = t.hcl(), s = e.hcl()) : "oklch" === r && (o = t.oklch().reverse(), s = e.oklch().reverse()), ("h" === r.substr(0, 1) || "oklch" === r) && (u = (i = o)[0], l = i[1], p = i[2], c = (a = s)[0], d = a[1], h = a[2]), isNaN(u) || isNaN(c) ? isNaN(u) ? isNaN(c) ? g = Number.NaN : (g = c, (1 == p || 0 == p) && "hsv" != r && (_ = d)) : (g = u, (1 == h || 0 == h) && "hsv" != r && (_ = l)) : (y = c > u && c - u > 180 ? c - (u + 360) : c < u && u - c > 180 ? c + 360 - u : c - u, g = u + n * y), void 0 === _ && (_ = l + n * (d - l)), m = p + n * (h - p), "oklch" === r ? new f([m, _, g], r) : new f([g, _, m], r)
                    },
                    eP = function(t, e, n) {
                        return eL(t, e, n, "lch")
                    };
                eO.lch = eP, eO.hcl = eP;
                eO.num = function(t, e, n) {
                    var r = t.num();
                    return new f(r + n * (e.num() - r), "num")
                };
                eO.hcg = function(t, e, n) {
                    return eL(t, e, n, "hcg")
                };
                eO.hsi = function(t, e, n) {
                    return eL(t, e, n, "hsi")
                };
                eO.hsl = function(t, e, n) {
                    return eL(t, e, n, "hsl")
                };
                eO.hsv = function(t, e, n) {
                    return eL(t, e, n, "hsv")
                };
                eO.oklab = function(t, e, n) {
                    var r = t.oklab(),
                        i = e.oklab();
                    return new f(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "oklab")
                };
                eO.oklch = function(t, e, n) {
                    return eL(t, e, n, "oklch")
                };
                var eG = s.clip_rgb,
                    eF = Math.pow,
                    eY = Math.sqrt,
                    ez = Math.PI,
                    ej = Math.cos,
                    eH = Math.sin,
                    e$ = Math.atan2,
                    eW = function(t, e) {
                        for (var n = t.length, r = [0, 0, 0, 0], i = 0; i < t.length; i++) {
                            var a = t[i],
                                o = e[i] / n,
                                s = a._rgb;
                            r[0] += eF(s[0], 2) * o, r[1] += eF(s[1], 2) * o, r[2] += eF(s[2], 2) * o, r[3] += s[3] * o
                        }
                        return r[0] = eY(r[0]), r[1] = eY(r[1]), r[2] = eY(r[2]), r[3] > .9999999 && (r[3] = 1), new f(eG(r))
                    },
                    eq = s.type,
                    eZ = Math.pow,
                    eV = function(t) {
                        var e = "rgb",
                            n = p("#ccc"),
                            r = 0,
                            i = [0, 1],
                            a = [],
                            o = [0, 0],
                            s = !1,
                            u = [],
                            c = !1,
                            l = 0,
                            d = 1,
                            f = !1,
                            h = {},
                            _ = !0,
                            g = 1,
                            m = function(t) {
                                if (t = t || ["#fff", "#000"], "string" === eq(t) && p.brewer && p.brewer[t.toLowerCase()] && (t = p.brewer[t.toLowerCase()]), "array" === eq(t)) {
                                    1 === t.length && (t = [t[0], t[0]]), t = t.slice(0);
                                    for (var e = 0; e < t.length; e++) t[e] = p(t[e]);
                                    a.length = 0;
                                    for (var n = 0; n < t.length; n++) a.push(n / (t.length - 1))
                                }
                                return S(), u = t
                            },
                            y = function(t) {
                                if (null != s) {
                                    for (var e = s.length - 1, n = 0; n < e && t >= s[n];) n++;
                                    return n - 1
                                }
                                return 0
                            },
                            v = function(t) {
                                return t
                            },
                            b = function(t) {
                                return t
                            },
                            E = function(t, r) {
                                if (null == r && (r = !1), isNaN(t) || null === t) return n;
                                if (r) c = t;
                                else if (s && s.length > 2) {
                                    var i, c;
                                    c = y(t) / (s.length - 2)
                                } else c = d !== l ? (t - l) / (d - l) : 1;
                                c = b(c), !r && (c = v(c)), 1 !== g && (c = eZ(c, g));
                                var f = Math.floor(1e4 * (c = Math.min(1, Math.max(0, c = o[0] + c * (1 - o[0] - o[1])))));
                                if (_ && h[f]) i = h[f];
                                else {
                                    if ("array" === eq(u))
                                        for (var m = 0; m < a.length; m++) {
                                            var E = a[m];
                                            if (c <= E || c >= E && m === a.length - 1) {
                                                i = u[m];
                                                break
                                            }
                                            if (c > E && c < a[m + 1]) {
                                                c = (c - E) / (a[m + 1] - E), i = p.interpolate(u[m], u[m + 1], c, e);
                                                break
                                            }
                                        } else "function" === eq(u) && (i = u(c));
                                    _ && (h[f] = i)
                                }
                                return i
                            },
                            S = function() {
                                return h = {}
                            };
                        m(t);
                        var w = function(t) {
                            var e = p(E(t));
                            return c && e[c] ? e[c]() : e
                        };
                        return w.classes = function(t) {
                            if (null != t) {
                                if ("array" === eq(t)) s = t, i = [t[0], t[t.length - 1]];
                                else {
                                    var e = p.analyze(i);
                                    s = 0 === t ? [e.min, e.max] : p.limits(e, "e", t)
                                }
                                return w
                            }
                            return s
                        }, w.domain = function(t) {
                            if (!arguments.length) return i;
                            l = t[0], d = t[t.length - 1], a = [];
                            var e = u.length;
                            if (t.length === e && l !== d)
                                for (var n = 0, r = Array.from(t); n < r.length; n += 1) {
                                    var o = r[n];
                                    a.push((o - l) / (d - l))
                                } else {
                                    for (var s = 0; s < e; s++) a.push(s / (e - 1));
                                    if (t.length > 2) {
                                        var c = t.map(function(e, n) {
                                                return n / (t.length - 1)
                                            }),
                                            f = t.map(function(t) {
                                                return (t - l) / (d - l)
                                            });
                                        !f.every(function(t, e) {
                                            return c[e] === t
                                        }) && (b = function(t) {
                                            if (t <= 0 || t >= 1) return t;
                                            for (var e = 0; t >= f[e + 1];) e++;
                                            var n = (t - f[e]) / (f[e + 1] - f[e]);
                                            return c[e] + n * (c[e + 1] - c[e])
                                        })
                                    }
                                }
                            return i = [l, d], w
                        }, w.mode = function(t) {
                            return arguments.length ? (e = t, S(), w) : e
                        }, w.range = function(t, e) {
                            return m(t), w
                        }, w.out = function(t) {
                            return c = t, w
                        }, w.spread = function(t) {
                            return arguments.length ? (r = t, w) : r
                        }, w.correctLightness = function(t) {
                            return null == t && (t = !0), f = t, S(), v = f ? function(t) {
                                for (var e = E(0, !0).lab()[0], n = E(1, !0).lab()[0], r = e > n, i = E(t, !0).lab()[0], a = e + (n - e) * t, o = i - a, s = 0, u = 1, c = 20; Math.abs(o) > .01 && c-- > 0;) r && (o *= -1), o < 0 ? (s = t, t += (u - t) * .5) : (u = t, t += (s - t) * .5), o = (i = E(t, !0).lab()[0]) - a;
                                return t
                            } : function(t) {
                                return t
                            }, w
                        }, w.padding = function(t) {
                            return null != t ? ("number" === eq(t) && (t = [t, t]), o = t, w) : o
                        }, w.colors = function(e, n) {
                            arguments.length < 2 && (n = "hex");
                            var r = [];
                            if (0 == arguments.length) r = u.slice(0);
                            else if (1 === e) r = [w(.5)];
                            else if (e > 1) {
                                var a = i[0],
                                    o = i[1] - a;
                                r = (function(t, e, n) {
                                    for (var r = [], i = t < e, a = n ? i ? e + 1 : e - 1 : e, o = t; i ? o < a : o > a; i ? o++ : o--) r.push(o);
                                    return r
                                })(0, e, !1).map(function(t) {
                                    return w(a + t / (e - 1) * o)
                                })
                            } else {
                                t = [];
                                var c = [];
                                if (s && s.length > 2)
                                    for (var l = 1, d = s.length, f = 1 <= d; f ? l < d : l > d; f ? l++ : l--) c.push((s[l - 1] + s[l]) * .5);
                                else c = i;
                                r = c.map(function(t) {
                                    return w(t)
                                })
                            }
                            return p[n] && (r = r.map(function(t) {
                                return t[n]()
                            })), r
                        }, w.cache = function(t) {
                            return null != t ? (_ = t, w) : _
                        }, w.gamma = function(t) {
                            return null != t ? (g = t, w) : g
                        }, w.nodata = function(t) {
                            return null != t ? (n = p(t), w) : n
                        }, w
                    },
                    eJ = function(t) {
                        for (var e = [1, 1], n = 1; n < t; n++) {
                            for (var r = [1], i = 1; i <= e.length; i++) r[i] = (e[i] || 0) + e[i - 1];
                            e = r
                        }
                        return e
                    },
                    eK = function(t) {
                        var e, n, r, i, a, o, s, u, c, l, d;
                        if (2 === (t = t.map(function(t) {
                                return new f(t)
                            })).length) a = (e = t.map(function(t) {
                            return t.lab()
                        }))[0], o = e[1], i = function(t) {
                            return new f([0, 1, 2].map(function(e) {
                                return a[e] + t * (o[e] - a[e])
                            }), "lab")
                        };
                        else if (3 === t.length) a = (n = t.map(function(t) {
                            return t.lab()
                        }))[0], o = n[1], s = n[2], i = function(t) {
                            return new f([0, 1, 2].map(function(e) {
                                return (1 - t) * (1 - t) * a[e] + 2 * (1 - t) * t * o[e] + t * t * s[e]
                            }), "lab")
                        };
                        else if (4 === t.length) a = (r = t.map(function(t) {
                            return t.lab()
                        }))[0], o = r[1], s = r[2], u = r[3], i = function(t) {
                            return new f([0, 1, 2].map(function(e) {
                                return (1 - t) * (1 - t) * (1 - t) * a[e] + 3 * (1 - t) * (1 - t) * t * o[e] + 3 * (1 - t) * t * t * s[e] + t * t * t * u[e]
                            }), "lab")
                        };
                        else if (t.length >= 5) c = t.map(function(t) {
                            return t.lab()
                        }), l = eJ(d = t.length - 1), i = function(t) {
                            var e = 1 - t;
                            return new f([0, 1, 2].map(function(n) {
                                return c.reduce(function(r, i, a) {
                                    return r + l[a] * Math.pow(e, d - a) * Math.pow(t, a) * i[n]
                                }, 0)
                            }), "lab")
                        };
                        else throw RangeError("No point in running bezier with only one color.");
                        return i
                    },
                    eX = function(t, e, n) {
                        if (!eX[n]) throw Error("unknown blend mode " + n);
                        return eX[n](t, e)
                    },
                    eQ = function(t) {
                        return function(e, n) {
                            var r = p(n).rgb(),
                                i = p(e).rgb();
                            return p.rgb(t(r, i))
                        }
                    },
                    e0 = function(t) {
                        return function(e, n) {
                            var r = [];
                            return r[0] = t(e[0], n[0]), r[1] = t(e[1], n[1]), r[2] = t(e[2], n[2]), r
                        }
                    };
                eX.normal = eQ(e0(function(t) {
                    return t
                })), eX.multiply = eQ(e0(function(t, e) {
                    return t * e / 255
                })), eX.screen = eQ(e0(function(t, e) {
                    return 255 * (1 - (1 - t / 255) * (1 - e / 255))
                })), eX.overlay = eQ(e0(function(t, e) {
                    return e < 128 ? 2 * t * e / 255 : 255 * (1 - 2 * (1 - t / 255) * (1 - e / 255))
                })), eX.darken = eQ(e0(function(t, e) {
                    return t > e ? e : t
                })), eX.lighten = eQ(e0(function(t, e) {
                    return t > e ? t : e
                })), eX.dodge = eQ(e0(function(t, e) {
                    return 255 === t ? 255 : (t = e / 255 * 255 / (1 - t / 255)) > 255 ? 255 : t
                })), eX.burn = eQ(e0(function(t, e) {
                    return 255 * (1 - (1 - e / 255) / (t / 255))
                }));
                for (var e1 = s.type, e2 = s.clip_rgb, e5 = s.TWOPI, e3 = Math.pow, e6 = Math.sin, e4 = Math.cos, e8 = Math.floor, e7 = Math.random, e9 = Math.log, nt = Math.pow, ne = Math.floor, nn = Math.abs, nr = function(t, e) {
                        void 0 === e && (e = null);
                        var n = {
                            min: Number.MAX_VALUE,
                            max: -1 * Number.MAX_VALUE,
                            sum: 0,
                            values: [],
                            count: 0
                        };
                        return "object" === a(t) && (t = Object.values(t)), t.forEach(function(t) {
                            e && "object" === a(t) && (t = t[e]), null != t && !isNaN(t) && (n.values.push(t), n.sum += t, t < n.min && (n.min = t), t > n.max && (n.max = t), n.count += 1)
                        }), n.domain = [n.min, n.max], n.limits = function(t, e) {
                            return ni(n, t, e)
                        }, n
                    }, ni = function(t, e, n) {
                        void 0 === e && (e = "equal"), void 0 === n && (n = 7), "array" == a(t) && (t = nr(t));
                        var r = t.min,
                            i = t.max,
                            o = t.values.sort(function(t, e) {
                                return t - e
                            });
                        if (1 === n) return [r, i];
                        var s = [];
                        if ("c" === e.substr(0, 1) && (s.push(r), s.push(i)), "e" === e.substr(0, 1)) {
                            s.push(r);
                            for (var u = 1; u < n; u++) s.push(r + u / n * (i - r));
                            s.push(i)
                        } else if ("l" === e.substr(0, 1)) {
                            if (r <= 0) throw Error("Logarithmic scales are only possible for values > 0");
                            var c = Math.LOG10E * e9(r),
                                l = Math.LOG10E * e9(i);
                            s.push(r);
                            for (var d = 1; d < n; d++) s.push(nt(10, c + d / n * (l - c)));
                            s.push(i)
                        } else if ("q" === e.substr(0, 1)) {
                            s.push(r);
                            for (var f = 1; f < n; f++) {
                                var p = (o.length - 1) * f / n,
                                    h = ne(p);
                                if (h === p) s.push(o[h]);
                                else {
                                    var _ = p - h;
                                    s.push(o[h] * (1 - _) + o[h + 1] * _)
                                }
                            }
                            s.push(i)
                        } else if ("k" === e.substr(0, 1)) {
                            var g, m = o.length,
                                y = Array(m),
                                v = Array(n),
                                b = !0,
                                E = 0,
                                S = null;
                            (S = []).push(r);
                            for (var w = 1; w < n; w++) S.push(r + w / n * (i - r));
                            for (S.push(i); b;) {
                                for (var T = 0; T < n; T++) v[T] = 0;
                                for (var k = 0; k < m; k++) {
                                    for (var x = o[k], R = Number.MAX_VALUE, N = void 0, D = 0; D < n; D++) {
                                        var I = nn(S[D] - x);
                                        I < R && (R = I, N = D), v[N]++, y[k] = N
                                    }
                                }
                                for (var O = Array(n), C = 0; C < n; C++) O[C] = null;
                                for (var A = 0; A < m; A++) null === O[g = y[A]] ? O[g] = o[A] : O[g] += o[A];
                                for (var B = 0; B < n; B++) O[B] *= 1 / v[B];
                                b = !1;
                                for (var U = 0; U < n; U++)
                                    if (O[U] !== S[U]) {
                                        b = !0;
                                        break
                                    } S = O, ++E > 200 && (b = !1)
                            }
                            for (var M = {}, L = 0; L < n; L++) M[L] = [];
                            for (var P = 0; P < m; P++) M[g = y[P]].push(o[P]);
                            for (var G = [], F = 0; F < n; F++) G.push(M[F][0]), G.push(M[F][M[F].length - 1]);
                            G = G.sort(function(t, e) {
                                return t - e
                            }), s.push(G[0]);
                            for (var Y = 1; Y < G.length; Y += 2) {
                                var z = G[Y];
                                !isNaN(z) && -1 === s.indexOf(z) && s.push(z)
                            }
                        }
                        return s
                    }, na = {
                        analyze: nr,
                        limits: ni
                    }, no = Math.sqrt, ns = Math.pow, nu = Math.min, nc = Math.max, nl = Math.atan2, nd = Math.abs, nf = Math.cos, np = Math.sin, nh = Math.exp, n_ = Math.PI, ng = {
                        OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
                        PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
                        BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
                        Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
                        BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
                        YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
                        YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
                        Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
                        RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
                        Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
                        YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
                        Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
                        GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
                        Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
                        YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
                        PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
                        Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
                        PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
                        Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
                        Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
                        RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
                        RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
                        PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
                        PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
                        RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
                        BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
                        RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
                        PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
                        Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
                        Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
                        Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
                        Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
                        Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
                        Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
                        Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
                        Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
                    }, nm = 0, ny = Object.keys(ng); nm < ny.length; nm += 1) {
                    var nv = ny[nm];
                    ng[nv.toLowerCase()] = ng[nv]
                }
                return p.average = function(t, e, n) {
                    void 0 === e && (e = "lrgb"), void 0 === n && (n = null);
                    var r = t.length;
                    !n && (n = Array.from(Array(r)).map(function() {
                        return 1
                    }));
                    var i = r / n.reduce(function(t, e) {
                        return t + e
                    });
                    if (n.forEach(function(t, e) {
                            n[e] *= i
                        }), t = t.map(function(t) {
                            return new f(t)
                        }), "lrgb" === e) return eW(t, n);
                    for (var a = t.shift(), o = a.get(e), s = [], u = 0, c = 0, l = 0; l < o.length; l++)
                        if (o[l] = (o[l] || 0) * n[0], s.push(isNaN(o[l]) ? 0 : n[0]), "h" === e.charAt(l) && !isNaN(o[l])) {
                            var d = o[l] / 180 * ez;
                            u += ej(d) * n[0], c += eH(d) * n[0]
                        } var p = a.alpha() * n[0];
                    t.forEach(function(t, r) {
                        var i = t.get(e);
                        p += t.alpha() * n[r + 1];
                        for (var a = 0; a < o.length; a++)
                            if (!isNaN(i[a])) {
                                if (s[a] += n[r + 1], "h" === e.charAt(a)) {
                                    var l = i[a] / 180 * ez;
                                    u += ej(l) * n[r + 1], c += eH(l) * n[r + 1]
                                } else o[a] += i[a] * n[r + 1]
                            }
                    });
                    for (var h = 0; h < o.length; h++)
                        if ("h" === e.charAt(h)) {
                            for (var _ = e$(c / s[h], u / s[h]) / ez * 180; _ < 0;) _ += 360;
                            for (; _ >= 360;) _ -= 360;
                            o[h] = _
                        } else o[h] = o[h] / s[h];
                    return p /= r, new f(o, e).alpha(p > .99999 ? 1 : p, !0)
                }, p.bezier = function(t) {
                    var e = eK(t);
                    return e.scale = function() {
                        return eV(e)
                    }, e
                }, p.blend = eX, p.cubehelix = function(t, e, n, r, i) {
                    void 0 === t && (t = 300), void 0 === e && (e = -1.5), void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 === i && (i = [0, 1]);
                    var a, o = 0;
                    "array" === e1(i) ? a = i[1] - i[0] : (a = 0, i = [i, i]);
                    var s = function(s) {
                        var u = e5 * ((t + 120) / 360 + e * s),
                            c = e3(i[0] + a * s, r),
                            l = (0 !== o ? n[0] + s * o : n) * c * (1 - c) / 2,
                            d = e4(u),
                            f = e6(u);
                        return p(e2([255 * (c + l * (-.14861 * d + 1.78277 * f)), 255 * (c + l * (-.29227 * d - .90649 * f)), 255 * (c + 1.97294 * d * l), 1]))
                    };
                    return s.start = function(e) {
                        return null == e ? t : (t = e, s)
                    }, s.rotations = function(t) {
                        return null == t ? e : (e = t, s)
                    }, s.gamma = function(t) {
                        return null == t ? r : (r = t, s)
                    }, s.hue = function(t) {
                        return null == t ? n : ("array" === e1(n = t) ? 0 == (o = n[1] - n[0]) && (n = n[1]) : o = 0, s)
                    }, s.lightness = function(t) {
                        return null == t ? i : ("array" === e1(t) ? (i = t, a = t[1] - t[0]) : (i = [t, t], a = 0), s)
                    }, s.scale = function() {
                        return p.scale(s)
                    }, s.hue(n), s
                }, p.mix = p.interpolate = eA, p.random = function() {
                    for (var t = "#", e = 0; e < 6; e++) t += "0123456789abcdef".charAt(e8(16 * e7()));
                    return new f(t, "hex")
                }, p.scale = eV, p.analyze = na.analyze, p.contrast = function(t, e) {
                    t = new f(t), e = new f(e);
                    var n = t.luminance(),
                        r = e.luminance();
                    return n > r ? (n + .05) / (r + .05) : (r + .05) / (n + .05)
                }, p.deltaE = function(t, e, n, r, i) {
                    void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 === i && (i = 1);
                    var a = function(t) {
                            return 360 * t / (2 * n_)
                        },
                        o = function(t) {
                            return 2 * n_ * t / 360
                        };
                    t = new f(t), e = new f(e);
                    var s = Array.from(t.lab()),
                        u = s[0],
                        c = s[1],
                        l = s[2],
                        d = Array.from(e.lab()),
                        p = d[0],
                        h = d[1],
                        _ = d[2],
                        g = (u + p) / 2,
                        m = (no(ns(c, 2) + ns(l, 2)) + no(ns(h, 2) + ns(_, 2))) / 2,
                        y = .5 * (1 - no(ns(m, 7) / (ns(m, 7) + ns(25, 7)))),
                        v = c * (1 + y),
                        b = h * (1 + y),
                        E = no(ns(v, 2) + ns(l, 2)),
                        S = no(ns(b, 2) + ns(_, 2)),
                        w = (E + S) / 2,
                        T = a(nl(l, v)),
                        k = a(nl(_, b)),
                        x = T >= 0 ? T : T + 360,
                        R = k >= 0 ? k : k + 360,
                        N = nd(x - R) > 180 ? (x + R + 360) / 2 : (x + R) / 2,
                        D = 1 - .17 * nf(o(N - 30)) + .24 * nf(o(2 * N)) + .32 * nf(o(3 * N + 6)) - .2 * nf(o(4 * N - 63)),
                        I = R - x;
                    I = 180 >= nd(I) ? I : R <= x ? I + 360 : I - 360, I = 2 * no(E * S) * np(o(I) / 2);
                    var O = S - E,
                        C = 1 + .015 * ns(g - 50, 2) / no(20 + ns(g - 50, 2)),
                        A = 1 + .045 * w,
                        B = 1 + .015 * w * D,
                        U = 30 * nh(-ns((N - 275) / 25, 2)),
                        M = -(2 * no(ns(w, 7) / (ns(w, 7) + ns(25, 7)))) * np(2 * o(U));
                    return nc(0, nu(100, no(ns((p - u) / (n * C), 2) + ns(O / (r * A), 2) + ns(I / (i * B), 2) + O / (r * A) * M * (I / (i * B)))))
                }, p.distance = function(t, e, n) {
                    void 0 === n && (n = "lab"), t = new f(t), e = new f(e);
                    var r = t.get(n),
                        i = e.get(n),
                        a = 0;
                    for (var o in r) {
                        var s = (r[o] || 0) - (i[o] || 0);
                        a += s * s
                    }
                    return Math.sqrt(a)
                }, p.limits = na.limits, p.valid = function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    try {
                        return new(Function.prototype.bind.apply(f, [null].concat(t))), !0
                    } catch (t) {
                        return !1
                    }
                }, p.scales = {
                    cool: function() {
                        return eV([p.hsl(180, 1, .9), p.hsl(250, .7, .4)])
                    },
                    hot: function() {
                        return eV(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
                    }
                }, p.colors = t3, p.brewer = ng, p
            }, "object" == typeof e ? t.exports = r() : "function" == typeof define && define.amd ? define(r) : (n = "undefined" != typeof globalThis ? globalThis : n || self).chroma = r()
        }
    }
]);
//# sourceMappingURL=43455.ea225de85d6e931f6839.js.map