(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["7838"], {
        903204: function(t, e, n) {
            "use strict";
            n.d(e, {
                R: function() {
                    return _
                }
            });
            var r = n(861579),
                i = n(139782),
                s = n(468391),
                a = n(529866),
                o = n(854569),
                u = n(177668),
                l = n(590171),
                c = n(643487),
                d = n(124969),
                h = n(184612);
            class _ extends r.W {
                constructor(t) {
                    let e = c.m9.SENTRY_SDK_SOURCE || (0, s.S)();
                    t._metadata = t._metadata || {}, t._metadata.sdk = t._metadata.sdk || {
                        name: "sentry.javascript.browser",
                        packages: [{
                            name: `${e}:@sentry/browser`,
                            version: i.J
                        }],
                        version: i.J
                    }, super(t), t.sendClientReports && c.m9.document && c.m9.document.addEventListener("visibilitychange", () => {
                        "hidden" === c.m9.document.visibilityState && this._flushOutcomes()
                    })
                }
                eventFromException(t, e) {
                    return (0, l.dr)(this._options.stackParser, t, e, this._options.attachStacktrace)
                }
                eventFromMessage(t, e = "info", n) {
                    return (0, l.aB)(this._options.stackParser, t, e, n, this._options.attachStacktrace)
                }
                sendEvent(t, e) {
                    let n = this.getIntegrationById(d.p);
                    n && n.addSentryBreadcrumb && n.addSentryBreadcrumb(t), super.sendEvent(t, e)
                }
                captureUserFeedback(t) {
                    if (!this._isEnabled()) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.warn("SDK not enabled, will not capture user feedback.");
                        return
                    }
                    let e = (0, h.r)(t, {
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
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.log("No outcomes to send");
                        return
                    }
                    if (!this._dsn) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.log("No dsn provided, will not send outcomes");
                        return
                    }("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.log("Sending outcomes:", t);
                    let e = (0, o.y)(t, this._options.tunnel && (0, u.RA)(this._dsn));
                    this._sendEnvelope(e)
                }
            }
        },
        590171: function(t, e, n) {
            "use strict";
            n.d(e, {
                GJ: function() {
                    return l
                },
                ME: function() {
                    return p
                },
                aB: function() {
                    return f
                },
                dr: function() {
                    return _
                }
            });
            var r = n(876122),
                i = n(46834),
                s = n(10674),
                a = n(862315),
                o = n(880803),
                u = n(442853);

            function l(t, e) {
                let n = d(t, e),
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

            function c(t, e) {
                return {
                    exception: {
                        values: [l(t, e)]
                    }
                }
            }

            function d(t, e) {
                let n = e.stacktrace || e.stack || "",
                    r = function(t) {
                        if (t) {
                            if ("number" == typeof t.framesToPop) return t.framesToPop;
                            if (h.test(t.message)) return 1
                        }
                        return 0
                    }(e);
                try {
                    return t(n, r)
                } catch (t) {}
                return []
            }
            let h = /Minified React error #\d+;/i;

            function _(t, e, n, r) {
                let i = p(t, e, n && n.syntheticException || void 0, r);
                return (0, a.EG)(i), i.level = "error", n && n.event_id && (i.event_id = n.event_id), (0, o.WD)(i)
            }

            function f(t, e, n = "info", r, i) {
                let s = m(t, e, r && r.syntheticException || void 0, i);
                return s.level = n, r && r.event_id && (s.event_id = r.event_id), (0, o.WD)(s)
            }

            function p(t, e, n, o, l) {
                let h;
                if ((0, i.VW)(e) && e.error) return c(t, e.error);
                if ((0, i.TX)(e) || (0, i.fm)(e)) {
                    if ("stack" in e) h = c(t, e);
                    else {
                        let r = e.name || ((0, i.TX)(e) ? "DOMError" : "DOMException"),
                            s = e.message ? `${r}: ${e.message}` : r;
                        h = m(t, s, n, o), (0, a.Db)(h, s)
                    }
                    return "code" in e && (h.tags = {
                        ...h.tags,
                        "DOMException.code": `${e.code}`
                    }), h
                }
                return (0, i.VZ)(e) ? c(t, e) : (0, i.PO)(e) || (0, i.cO)(e) ? (h = function(t, e, n, a) {
                    let o = (0, r.Gd)().getClient(),
                        l = o && o.getOptions().normalizeDepth,
                        c = {
                            exception: {
                                values: [{
                                    type: (0, i.cO)(e) ? e.constructor.name : a ? "UnhandledRejection" : "Error",
                                    value: function(t, {
                                        isUnhandledRejection: e
                                    }) {
                                        let n = (0, u.zf)(t),
                                            r = e ? "promise rejection" : "exception";
                                        if ((0, i.VW)(t)) return `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\``;
                                        if ((0, i.cO)(t)) {
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
                                __serialized__: (0, s.Qy)(e, l)
                            }
                        };
                    if (n) {
                        let e = d(t, n);
                        e.length && (c.exception.values[0].stacktrace = {
                            frames: e
                        })
                    }
                    return c
                }(t, e, n, l), (0, a.EG)(h, {
                    synthetic: !0
                }), h) : (h = m(t, e, n, o), (0, a.Db)(h, `${e}`, void 0), (0, a.EG)(h, {
                    synthetic: !0
                }), h)
            }

            function m(t, e, n, r) {
                let i = {
                    message: e
                };
                if (r && n) {
                    let r = d(t, n);
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
            n.d(e, {
                Wz: function() {
                    return l
                },
                m9: function() {
                    return o
                },
                re: function() {
                    return function t(e, n = {}, i) {
                        if ("function" != typeof e) return e;
                        try {
                            let t = e.__sentry_wrapped__;
                            if (t) return t;
                            if ((0, s.HK)(e)) return e
                        } catch (t) {
                            return e
                        }
                        let o = function() {
                            let s = Array.prototype.slice.call(arguments);
                            try {
                                i && "function" == typeof i && i.apply(this, arguments);
                                let r = s.map(e => t(e, n));
                                return e.apply(this, r)
                            } catch (t) {
                                throw u++, setTimeout(() => {
                                    u--
                                }), (0, r.$e)(e => {
                                    e.addEventProcessor(t => (n.mechanism && ((0, a.Db)(t, void 0, void 0), (0, a.EG)(t, n.mechanism)), t.extra = {
                                        ...t.extra,
                                        arguments: s
                                    }, t)), (0, r.Tb)(t)
                                }), t
                            }
                        };
                        try {
                            for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (o[t] = e[t])
                        } catch (t) {}(0, s.$Q)(o, e), (0, s.xp)(e, "__sentry_wrapped__", o);
                        try {
                            Object.getOwnPropertyDescriptor(o, "name").configurable && Object.defineProperty(o, "name", {
                                get: () => e.name
                            })
                        } catch (t) {}
                        return o
                    }
                }
            });
            var r = n(138122),
                i = n(24716),
                s = n(442853),
                a = n(862315);
            let o = i.n2,
                u = 0;

            function l() {
                return u > 0
            }
        },
        887117: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Breadcrumbs: function() {
                    return E.O
                },
                BrowserClient: function() {
                    return a.R
                },
                BrowserProfilingIntegration: function() {
                    return y._
                },
                BrowserTracing: function() {
                    return p.gE
                },
                Dedupe: function() {
                    return k.I
                },
                FunctionToString: function() {
                    return i.cq
                },
                GlobalHandlers: function() {
                    return v.d
                },
                HttpContext: function() {
                    return w.q
                },
                Hub: function() {
                    return i.Xb
                },
                InboundFilters: function() {
                    return i.QD
                },
                Integrations: function() {
                    return R
                },
                LinkedErrors: function() {
                    return S.i
                },
                ModuleMetadata: function() {
                    return i._e
                },
                Replay: function() {
                    return f.U
                },
                SDK_VERSION: function() {
                    return i.Jn
                },
                Scope: function() {
                    return i.sX
                },
                TryCatch: function() {
                    return b.p
                },
                WINDOW: function() {
                    return s.m9
                },
                addBreadcrumb: function() {
                    return i.n_
                },
                addGlobalEventProcessor: function() {
                    return i.cc
                },
                addTracingExtensions: function() {
                    return i.Ts
                },
                captureEvent: function() {
                    return i.eN
                },
                captureException: function() {
                    return i.Tb
                },
                captureMessage: function() {
                    return i.uT
                },
                captureUserFeedback: function() {
                    return h.Jd
                },
                chromeStackLineParser: function() {
                    return l.$3
                },
                close: function() {
                    return h.xv
                },
                configureScope: function() {
                    return i.e
                },
                createTransport: function() {
                    return i.qv
                },
                createUserFeedbackEnvelope: function() {
                    return d.r
                },
                defaultIntegrations: function() {
                    return h.SS
                },
                defaultRequestInstrumentationOptions: function() {
                    return p.k3
                },
                defaultStackLineParsers: function() {
                    return l.d8
                },
                defaultStackParser: function() {
                    return l.Dt
                },
                eventFromException: function() {
                    return c.dr
                },
                eventFromMessage: function() {
                    return c.aB
                },
                extractTraceparentData: function() {
                    return i.qG
                },
                flush: function() {
                    return h.yl
                },
                forceLoad: function() {
                    return h.Eg
                },
                geckoStackLineParser: function() {
                    return l.$Q
                },
                getActiveTransaction: function() {
                    return i.x1
                },
                getCurrentHub: function() {
                    return i.Gd
                },
                getHubFromCarrier: function() {
                    return i.vi
                },
                init: function() {
                    return h.S1
                },
                instrumentOutgoingRequests: function() {
                    return p.L7
                },
                lastEventId: function() {
                    return h.eW
                },
                makeBrowserOfflineTransport: function() {
                    return m.O1
                },
                makeFetchTransport: function() {
                    return o.f
                },
                makeMain: function() {
                    return i.pj
                },
                makeMultiplexedTransport: function() {
                    return i.Wq
                },
                makeXHRTransport: function() {
                    return u.K
                },
                onLoad: function() {
                    return h.lA
                },
                onProfilingStartRouteTransaction: function() {
                    return g.Uv
                },
                opera10StackLineParser: function() {
                    return l.NP
                },
                opera11StackLineParser: function() {
                    return l.HH
                },
                setContext: function() {
                    return i.v
                },
                setExtra: function() {
                    return i.sU
                },
                setExtras: function() {
                    return i.rJ
                },
                setTag: function() {
                    return i.YA
                },
                setTags: function() {
                    return i.mG
                },
                setUser: function() {
                    return i.av
                },
                showReportDialog: function() {
                    return h.jp
                },
                spanStatusfromHttpCode: function() {
                    return i.Zd
                },
                startTransaction: function() {
                    return i.Yr
                },
                trace: function() {
                    return i.g4
                },
                winjsStackLineParser: function() {
                    return l.R2
                },
                withScope: function() {
                    return i.$e
                },
                wrap: function() {
                    return h.re
                }
            });
            var r = n(89837),
                i = n(91320),
                s = n(643487),
                a = n(903204),
                o = n(393746),
                u = n(975927),
                l = n(202406),
                c = n(590171),
                d = n(184612),
                h = n(846297),
                _ = n(53383),
                f = n(438142),
                p = n(752875),
                m = n(490753),
                g = n(65534),
                y = n(643714),
                v = n(297280),
                b = n(382078),
                E = n(124969),
                S = n(140735),
                w = n(612568),
                k = n(683900);
            let T = {};
            s.m9.Sentry && s.m9.Sentry.Integrations && (T = s.m9.Sentry.Integrations);
            let R = {
                ...T,
                ...r,
                ..._
            }
        },
        124969: function(t, e, n) {
            "use strict";
            n.d(e, {
                O: function() {
                    return _
                },
                p: function() {
                    return h
                }
            });
            var r = n(876122),
                i = n(793884),
                s = n(862315),
                a = n(529866),
                o = n(829919),
                u = n(869139),
                l = n(336344),
                c = n(841866),
                d = n(643487);
            let h = "Breadcrumbs";
            class _ {
                static __initStatic() {
                    this.id = h
                }
                __init() {
                    this.name = _.id
                }
                constructor(t) {
                    _.prototype.__init.call(this), this.options = {
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
                    this.options.console && (0, i.oq)("console", f), this.options.dom && (0, i.oq)("dom", function(t) {
                        return function(e) {
                            let n;
                            let i = "object" == typeof t ? t.serializeAttribute : void 0,
                                s = "object" == typeof t && "number" == typeof t.maxStringLength ? t.maxStringLength : void 0;
                            s && s > 1024 && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${s} was configured. Sentry will use 1024 instead.`), s = 1024), "string" == typeof i && (i = [i]);
                            try {
                                let t = e.event;
                                n = function(t) {
                                    return !!t && !!t.target
                                }(t) ? (0, o.Rt)(t.target, {
                                    keyAttrs: i,
                                    maxStringLength: s
                                }) : (0, o.Rt)(t, {
                                    keyAttrs: i,
                                    maxStringLength: s
                                })
                            } catch (t) {
                                n = "<unknown>"
                            }
                            if (0 !== n.length)(0, r.Gd)().addBreadcrumb({
                                category: `ui.${e.name}`,
                                message: n
                            }, {
                                event: e.event,
                                name: e.name,
                                global: e.global
                            })
                        }
                    }(this.options.dom)), this.options.xhr && (0, i.oq)("xhr", p), this.options.fetch && (0, i.oq)("fetch", m), this.options.history && (0, i.oq)("history", g)
                }
                addSentryBreadcrumb(t) {
                    this.options.sentry && (0, r.Gd)().addBreadcrumb({
                        category: `sentry.${"transaction"===t.type?"transaction":"event"}`,
                        event_id: t.event_id,
                        level: t.level,
                        message: (0, s.jH)(t)
                    }, {
                        event: t
                    })
                }
            }
            _.__initStatic();

            function f(t) {
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
                    level: (0, u.VT)(t.level),
                    message: (0, l.nK)(t.args, " ")
                };
                if ("assert" === t.level) {
                    if (!1 !== t.args[0]) return;
                    e.message = `Assertion failed: ${(0,l.nK)(t.args.slice(1)," ")||"console.assert"}`, e.data.arguments = t.args.slice(1)
                }(0, r.Gd)().addBreadcrumb(e, {
                    input: t.args,
                    level: t.level
                })
            }

            function p(t) {
                let {
                    startTimestamp: e,
                    endTimestamp: n
                } = t, s = t.xhr[i.xU];
                if (!e || !n || !s) return;
                let {
                    method: a,
                    url: o,
                    status_code: u,
                    body: l
                } = s, c = {
                    xhr: t.xhr,
                    input: l,
                    startTimestamp: e,
                    endTimestamp: n
                };
                (0, r.Gd)().addBreadcrumb({
                    category: "xhr",
                    data: {
                        method: a,
                        url: o,
                        status_code: u
                    },
                    type: "http"
                }, c)
            }

            function m(t) {
                let {
                    startTimestamp: e,
                    endTimestamp: n
                } = t;
                if (!(!n || t.fetchData.url.match(/sentry_key/) && "POST" === t.fetchData.method))
                    if (t.error) {
                        let i = t.fetchData,
                            s = {
                                data: t.error,
                                input: t.args,
                                startTimestamp: e,
                                endTimestamp: n
                            };
                        (0, r.Gd)().addBreadcrumb({
                            category: "fetch",
                            data: i,
                            level: "error",
                            type: "http"
                        }, s)
                    } else {
                        let i = {
                                ...t.fetchData,
                                status_code: t.response && t.response.status
                            },
                            s = {
                                input: t.args,
                                response: t.response,
                                startTimestamp: e,
                                endTimestamp: n
                            };
                        (0, r.Gd)().addBreadcrumb({
                            category: "fetch",
                            data: i,
                            type: "http"
                        }, s)
                    }
            }

            function g(t) {
                let e = t.from,
                    n = t.to,
                    i = (0, c.en)(d.m9.location.href),
                    s = (0, c.en)(e),
                    a = (0, c.en)(n);
                !s.path && (s = i), i.protocol === a.protocol && i.host === a.host && (n = a.relative), i.protocol === s.protocol && i.host === s.host && (e = s.relative), (0, r.Gd)().addBreadcrumb({
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
            n.d(e, {
                I: function() {
                    return i
                }
            });
            var r = n(529866);
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
                                            return !!((n || r) && (!n || r) && (n || !r) && n === r && a(t, e) && s(t, e)) || !1
                                        }(t, e) || function(t, e) {
                                            let n = o(e),
                                                r = o(t);
                                            return !!(n && r && n.type === r.type && n.value === r.value && a(t, e) && s(t, e)) || !1
                                        }(t, e)) || !1)
                                    }(t, n._previousEvent)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn("Event dropped due to being a duplicate of previously captured event."), null
                            } catch (t) {}
                            return n._previousEvent = t
                        }
                        return t
                    };
                    n.id = this.name, t(n)
                }
            }
            i.__initStatic();

            function s(t, e) {
                let n = u(t),
                    r = u(e);
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                if (r.length !== n.length) return !1;
                for (let t = 0; t < r.length; t++) {
                    let e = r[t],
                        i = n[t];
                    if (e.filename !== i.filename || e.lineno !== i.lineno || e.colno !== i.colno || e.function !== i.function) return !1
                }
                return !0
            }

            function a(t, e) {
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

            function o(t) {
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
            n.d(e, {
                d: function() {
                    return d
                }
            });
            var r = n(876122),
                i = n(793884),
                s = n(46834),
                a = n(829919),
                o = n(529866),
                u = n(862315),
                l = n(590171),
                c = n(643487);
            class d {
                static __initStatic() {
                    this.id = "GlobalHandlers"
                }
                __init() {
                    this.name = d.id
                }
                __init2() {
                    this._installFunc = {
                        onerror: h,
                        onunhandledrejection: _
                    }
                }
                constructor(t) {
                    d.prototype.__init.call(this), d.prototype.__init2.call(this), this._options = {
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
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log(`Global Handler attached: ${t}`)
                        }(e), n(), this._installFunc[e] = void 0)
                    }
                }
            }

            function h() {
                (0, i.oq)("error", t => {
                    let [e, n, r] = m();
                    if (!e.getIntegration(d)) return;
                    let {
                        msg: i,
                        url: a,
                        line: o,
                        column: u,
                        error: h
                    } = t;
                    if ((0, c.Wz)() || h && h.__sentry_own_request__) return;
                    let _ = void 0 === h && (0, s.HD)(i) ? function(t, e, n, r) {
                        let i = (0, s.VW)(t) ? t.message : t,
                            a = "Error",
                            o = i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                        return o && (a = o[1], i = o[2]), f({
                            exception: {
                                values: [{
                                    type: a,
                                    value: i
                                }]
                            }
                        }, e, n, r)
                    }(i, a, o, u) : f((0, l.ME)(n, h || i, void 0, r, !1), a, o, u);
                    _.level = "error", p(e, h, _, "onerror")
                })
            }

            function _() {
                (0, i.oq)("unhandledrejection", t => {
                    let [e, n, r] = m();
                    if (!e.getIntegration(d)) return;
                    let i = t;
                    try {
                        "reason" in t ? i = t.reason : "detail" in t && "reason" in t.detail && (i = t.detail.reason)
                    } catch (t) {}
                    if ((0, c.Wz)() || i && i.__sentry_own_request__) return !0;
                    let a = (0, s.pt)(i) ? function(t) {
                        return {
                            exception: {
                                values: [{
                                    type: "UnhandledRejection",
                                    value: `Non-Error promise rejection captured with value: ${String(t)}`
                                }]
                            }
                        }
                    }(i) : (0, l.ME)(n, i, void 0, r, !0);
                    a.level = "error", p(e, i, a, "onunhandledrejection")
                })
            }
            d.__initStatic();

            function f(t, e, n, r) {
                let i = t.exception = t.exception || {},
                    o = i.values = i.values || [],
                    u = o[0] = o[0] || {},
                    l = u.stacktrace = u.stacktrace || {},
                    c = l.frames = l.frames || [],
                    d = isNaN(parseInt(r, 10)) ? void 0 : r,
                    h = isNaN(parseInt(n, 10)) ? void 0 : n,
                    _ = (0, s.HD)(e) && e.length > 0 ? e : (0, a.l4)();
                return 0 === c.length && c.push({
                    colno: d,
                    filename: _,
                    function: "?",
                    in_app: !0,
                    lineno: h
                }), t
            }

            function p(t, e, n, r) {
                (0, u.EG)(n, {
                    handled: !1,
                    type: r
                }), t.captureEvent(n, {
                    originalException: e
                })
            }

            function m() {
                let t = (0, r.Gd)(),
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
            n.d(e, {
                q: function() {
                    return a
                }
            });
            var r = n(703498),
                i = n(876122),
                s = n(643487);
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
                    (0, r.c)(t => {
                        if ((0, i.Gd)().getIntegration(a)) {
                            if (!s.m9.navigator && !s.m9.location && !s.m9.document) return t;
                            let e = t.request && t.request.url || s.m9.location && s.m9.location.href,
                                {
                                    referrer: n
                                } = s.m9.document || {},
                                {
                                    userAgent: r
                                } = s.m9.navigator || {},
                                i = {
                                    ...t.request && t.request.headers,
                                    ...n && {
                                        Referer: n
                                    },
                                    ...r && {
                                        "User-Agent": r
                                    }
                                },
                                a = {
                                    ...t.request,
                                    ...e && {
                                        url: e
                                    },
                                    headers: i
                                };
                            return {
                                ...t,
                                request: a
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
                    return s.O
                },
                Dedupe: function() {
                    return u.I
                },
                GlobalHandlers: function() {
                    return r.d
                },
                HttpContext: function() {
                    return o.q
                },
                LinkedErrors: function() {
                    return a.i
                },
                TryCatch: function() {
                    return i.p
                }
            });
            var r = n(297280),
                i = n(382078),
                s = n(124969),
                a = n(140735),
                o = n(612568),
                u = n(683900)
        },
        140735: function(t, e, n) {
            "use strict";
            n.d(e, {
                i: function() {
                    return s
                }
            });
            var r = n(147658),
                i = n(590171);
            class s {
                static __initStatic() {
                    this.id = "LinkedErrors"
                }
                __init() {
                    this.name = s.id
                }
                constructor(t = {}) {
                    s.prototype.__init.call(this), this._key = t.key || "cause", this._limit = t.limit || 5
                }
                setupOnce(t, e) {
                    t((t, n) => {
                        let a = e(),
                            o = a.getClient(),
                            u = a.getIntegration(s);
                        if (!o || !u) return t;
                        let l = o.getOptions();
                        return (0, r.Z)(i.GJ, l.stackParser, l.maxValueLength, u._key, u._limit, t, n), t
                    })
                }
            }
            s.__initStatic()
        },
        382078: function(t, e, n) {
            "use strict";
            n.d(e, {
                p: function() {
                    return o
                }
            });
            var r = n(442853),
                i = n(432038),
                s = n(643487);
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
                    this._options.setTimeout && (0, r.hl)(s.m9, "setTimeout", u), this._options.setInterval && (0, r.hl)(s.m9, "setInterval", u), this._options.requestAnimationFrame && (0, r.hl)(s.m9, "requestAnimationFrame", l), this._options.XMLHttpRequest && "XMLHttpRequest" in s.m9 && (0, r.hl)(XMLHttpRequest.prototype, "send", c);
                    let t = this._options.eventTarget;
                    t && (Array.isArray(t) ? t : a).forEach(d)
                }
            }

            function u(t) {
                return function(...e) {
                    let n = e[0];
                    return e[0] = (0, s.re)(n, {
                        mechanism: {
                            data: {
                                function: (0, i.$P)(t)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), t.apply(this, e)
                }
            }

            function l(t) {
                return function(e) {
                    return t.apply(this, [(0, s.re)(e, {
                        mechanism: {
                            data: {
                                function: "requestAnimationFrame",
                                handler: (0, i.$P)(t)
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
                        t in n && "function" == typeof n[t] && (0, r.hl)(n, t, function(e) {
                            let n = {
                                    mechanism: {
                                        data: {
                                            function: t,
                                            handler: (0, i.$P)(e)
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                },
                                a = (0, r.HK)(e);
                            return a && (n.mechanism.data.handler = (0, i.$P)(a)), (0, s.re)(e, n)
                        })
                    }), t.apply(this, e)
                }
            }

            function d(t) {
                let e = s.m9,
                    n = e[t] && e[t].prototype;
                if (!!n && !!n.hasOwnProperty && !!n.hasOwnProperty("addEventListener"))(0, r.hl)(n, "addEventListener", function(e) {
                    return function(n, r, a) {
                        try {
                            "function" == typeof r.handleEvent && (r.handleEvent = (0, s.re)(r.handleEvent, {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: (0, i.$P)(r),
                                        target: t
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }))
                        } catch (t) {}
                        return e.apply(this, [n, (0, s.re)(r, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: (0, i.$P)(r),
                                    target: t
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }), a])
                    }
                }), (0, r.hl)(n, "removeEventListener", function(t) {
                    return function(e, n, r) {
                        try {
                            let i = n && n.__sentry_wrapped__;
                            i && t.call(this, e, i, r)
                        } catch (t) {}
                        return t.call(this, e, n, r)
                    }
                })
            }
            o.__initStatic()
        },
        65534: function(t, e, n) {
            "use strict";
            n.d(e, {
                Uv: function() {
                    return l
                },
                sA: function() {
                    return c
                }
            });
            var r = n(876122),
                i = n(529866),
                s = n(862315),
                a = n(643487),
                o = n(450436);
            let u = !1;

            function l(t) {
                return t ? c(t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Profiling] Transaction is undefined, skipping profiling"), t)
            }

            function c(t) {
                let e;
                let n = a.m9.Profiler;
                if ("function" != typeof n) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object."), t;
                if (u) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Profiling] Profiling has been disabled for the duration of the current user session."), t;
                let l = (0, r.Gd)().getClient(),
                    c = l && l.getOptions();
                if (!c) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Profiling] Profiling disabled, no options found."), t;
                let d = c.profilesSampleRate;
                if (!(0, o.X2)(d)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn("[Profiling] Discarding profile because of invalid sample rate."), t;
                if (!d) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0"), t;
                if (!(!0 === d || Math.random() < d)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(d)})`), t;
                let h = Math.floor(3e3);
                try {
                    e = new n({
                        sampleInterval: 10,
                        maxBufferSize: h
                    })
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (i.kg.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."), i.kg.log("[Profiling] Disabling profiling for current user session.")), u = !0
                }
                if (!e) return t;
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Profiling] started profiling transaction: ${t.name||t.description}`);
                let _ = (0, s.DM)();
                async function f() {
                    if (!t || !e) return null;
                    let n = t.startChild({
                        description: "profiler.stop",
                        op: "profiler"
                    });
                    return e.stop().then(e => (n.finish(), p && (a.m9.clearTimeout(p), p = void 0), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Profiling] stopped profiling of transaction: ${t.name||t.description}`), e) ? ((0, o.M$)(_, e), null) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Profiling] profiler returned null profile for: ${t.name||t.description}`, "this may indicate an overlapping transaction or a call to stopProfiling with a profile title that was never started"), null)).catch(t => (n.finish(), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Profiling] error while stopping profiler:", t), null))
                }
                let p = a.m9.setTimeout(() => {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Profiling] max profile duration elapsed, stopping profiling for:", t.name || t.description), f()
                    }, 3e4),
                    m = t.finish.bind(t);
                return t.finish = function() {
                    return t ? (f().then(() => {
                        t.setContext("profile", {
                            profile_id: _
                        }), m()
                    }, () => {
                        m()
                    }), t) : m()
                }, t
            }
        },
        643714: function(t, e, n) {
            "use strict";
            n.d(e, {
                _: function() {
                    return a
                }
            });
            var r = n(529866),
                i = n(65534),
                s = n(450436);
            class a {
                constructor() {
                    a.prototype.__init.call(this), a.prototype.__init2.call(this)
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
                        (0, i.sA)(t)
                    }), n.on("beforeEnvelope", t => {
                        if (!s.wh.size) return;
                        let e = (0, s.AJ)(t);
                        if (!e.length) return;
                        let n = [];
                        for (let t of e) {
                            let e = t && t.contexts,
                                i = e && e.profile && e.profile.profile_id;
                            if (!i) {
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log("[Profiling] cannot find profile for a transaction without a profile context");
                                continue
                            }
                            e && e.profile && delete e.profile;
                            let a = s.wh.get(i);
                            if (!a) {
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log(`[Profiling] Could not retrieve profile for transaction: ${i}`);
                                continue
                            }
                            s.wh.delete(i);
                            let o = (0, s.nm)(i, a, t);
                            o && n.push(o)
                        }(0, s.db)(t, n)
                    })) : r.kg.warn("[Profiling] Client does not support hooks, profiling will be disabled")
                }
            }
        },
        450436: function(t, e, n) {
            "use strict";
            n.d(e, {
                AJ: function() {
                    return E
                },
                M$: function() {
                    return R
                },
                X2: function() {
                    return w
                },
                db: function() {
                    return b
                },
                nm: function() {
                    return k
                },
                wh: function() {
                    return T
                }
            });
            var r, i = n(28434),
                s = n(876122),
                a = n(529866),
                o = n(862315),
                u = n(868145),
                l = n(50074),
                c = n(24716),
                d = n(643487);
            let h = String(0),
                _ = "",
                f = "",
                p = "",
                m = d.m9.navigator && d.m9.navigator.userAgent || "",
                g = "",
                y = d.m9.navigator && d.m9.navigator.language || d.m9.navigator && d.m9.navigator.languages && d.m9.navigator.languages["0"] || "",
                v = d.m9.navigator && d.m9.navigator.userAgentData;
            if ("object" == typeof(r = v) && null !== r && "getHighEntropyValues" in r) v.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"]).then(t => {
                if (_ = t.platform || "", p = t.architecture || "", g = t.model || "", f = t.platformVersion || "", t.fullVersionList && t.fullVersionList.length > 0) {
                    let e = t.fullVersionList[t.fullVersionList.length - 1];
                    m = `${e.brand} ${e.version}`
                }
            }).catch(t => void 0);

            function b(t, e) {
                if (!e.length) return t;
                for (let n of e) t[1].push([{
                    type: "profile"
                }, n]);
                return t
            }

            function E(t) {
                let e = [];
                return (0, l.gv)(t, (t, n) => {
                    if ("transaction" === n)
                        for (let n = 1; n < t.length; n++) {
                            let r = t[n];
                            r && r.contexts && r.contexts.profile && r.contexts.profile.profile_id && e.push(t[n])
                        }
                }), e
            }
            let S = new WeakMap;

            function w(t) {
                return "number" != typeof t && "boolean" != typeof t || "number" == typeof t && isNaN(t) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.warn(`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`), !1) : !0 === t || !1 === t || !(t < 0) && !(t > 1) || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${t}.`), !1)
            }

            function k(t, e, n) {
                var r;
                return ((r = e).samples.length < 2 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.log("[Profiling] Discarding profile because it contains less than 2 samples"), !1) : !!r.frames.length || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.log("[Profiling] Discarding profile because it contains no frames"), !1)) ? function(t, e, n) {
                    if ("transaction" !== t.type) throw TypeError("Profiling events may only be attached to transactions, this should never occur.");
                    if (null == e) throw TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${e} instead.`);
                    let r = function(t) {
                            let e = t && t.contexts && t.contexts.trace && t.contexts.trace.trace_id;
                            return ("string" == typeof e && 32 !== e.length && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.log(`[Profiling] Invalid traceId: ${e} on profiled event`), "string" != typeof e) ? "" : e
                        }(t),
                        l = function(t) {
                            return "thread_metadata" in t ? t : function(t) {
                                let e;
                                let n = 0,
                                    r = {
                                        samples: [],
                                        stacks: [],
                                        frames: [],
                                        thread_metadata: {
                                            [h]: {
                                                name: "main"
                                            }
                                        }
                                    };
                                if (!t.samples.length) return r;
                                let i = t.samples[0].timestamp,
                                    s = "number" == typeof performance.timeOrigin ? performance.timeOrigin : u.Z1 || 0,
                                    a = s - (u.Z1 || s);
                                for (let s = 0; s < t.samples.length; s++) {
                                    let o = t.samples[s];
                                    if (void 0 === o.stackId) {
                                        void 0 === e && (e = n, r.stacks[e] = [], n++), r.samples[s] = {
                                            elapsed_since_start_ns: ((o.timestamp + a - i) * 1e6).toFixed(0),
                                            stack_id: e,
                                            thread_id: h
                                        };
                                        continue
                                    }
                                    let u = t.stacks[o.stackId],
                                        l = [];
                                    for (; u;) {
                                        l.push(u.frameId);
                                        let e = t.frames[u.frameId];
                                        void 0 === r.frames[u.frameId] && (r.frames[u.frameId] = {
                                            function: e.name,
                                            abs_path: "number" == typeof e.resourceId ? t.resources[e.resourceId] : void 0,
                                            lineno: e.line,
                                            colno: e.column
                                        }), u = void 0 === u.parentId ? void 0 : t.stacks[u.parentId]
                                    }
                                    let c = {
                                        elapsed_since_start_ns: ((o.timestamp + a - i) * 1e6).toFixed(0),
                                        stack_id: n,
                                        thread_id: h
                                    };
                                    r.stacks[n] = l, r.samples[s] = c, n++
                                }
                                return r
                            }(t)
                        }(e),
                        v = "number" == typeof t.start_timestamp ? 1e3 * t.start_timestamp : Date.now(),
                        b = "number" == typeof t.timestamp ? 1e3 * t.timestamp : Date.now();
                    return {
                        event_id: n,
                        timestamp: new Date(v).toISOString(),
                        platform: "javascript",
                        version: "1",
                        release: t.release || "",
                        environment: t.environment || i.J,
                        runtime: {
                            name: "javascript",
                            version: d.m9.navigator.userAgent
                        },
                        os: {
                            name: _,
                            version: f,
                            build_number: m
                        },
                        device: {
                            locale: y,
                            model: g,
                            manufacturer: m,
                            architecture: p,
                            is_emulator: !1
                        },
                        debug_meta: {
                            images: function(t) {
                                let e;
                                let n = c.n2._sentryDebugIds;
                                if (!n) return [];
                                let r = (0, s.Gd)();
                                if (!r) return [];
                                let i = r.getClient();
                                if (!i) return [];
                                let a = i.getOptions();
                                if (!a) return [];
                                let o = a.stackParser;
                                if (!o) return [];
                                let u = S.get(o);
                                u ? e = u : (e = new Map, S.set(o, e));
                                let l = Object.keys(n).reduce((t, r) => {
                                        let i;
                                        let s = e.get(r);
                                        s ? i = s : (i = o(r), e.set(r, i));
                                        for (let e = i.length - 1; e >= 0; e--) {
                                            let s = i[e],
                                                a = s && s.filename;
                                            if (s && a) {
                                                t[a] = n[r];
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
                        profile: l,
                        transactions: [{
                            name: t.transaction || "",
                            id: t.event_id || (0, o.DM)(),
                            trace_id: r,
                            active_thread_id: h,
                            relative_start_ns: "0",
                            relative_end_ns: ((b - v) * 1e6).toFixed(0)
                        }]
                    }
                }(n, e, t) : null
            }
            let T = new Map;

            function R(t, e) {
                if (T.set(t, e), T.size > 30) {
                    let t = T.keys().next().value;
                    T.delete(t)
                }
            }
        },
        846297: function(t, e, n) {
            "use strict";
            n.d(e, {
                Eg: function() {
                    return N
                },
                Jd: function() {
                    return B
                },
                S1: function() {
                    return R
                },
                SS: function() {
                    return T
                },
                eW: function() {
                    return D
                },
                jp: function() {
                    return x
                },
                lA: function() {
                    return C
                },
                re: function() {
                    return A
                },
                xv: function() {
                    return I
                },
                yl: function() {
                    return U
                }
            });
            var r = n(344106),
                i = n(740054),
                s = n(595208),
                a = n(110575),
                o = n(876122),
                u = n(507506),
                l = n(432038),
                c = n(698892),
                d = n(529866),
                h = n(880803),
                _ = n(793884),
                f = n(903204),
                p = n(643487),
                m = n(297280),
                g = n(382078),
                y = n(124969),
                v = n(140735),
                b = n(612568),
                E = n(683900),
                S = n(202406),
                w = n(393746),
                k = n(975927);
            let T = [new r.QD, new i.c, new g.p, new y.O, new m.d, new v.i, new E.I, new b.q];

            function R(t = {}) {
                void 0 === t.defaultIntegrations && (t.defaultIntegrations = T), void 0 === t.release && ("string" == typeof __SENTRY_RELEASE__ && (t.release = __SENTRY_RELEASE__), p.m9.SENTRY_RELEASE && p.m9.SENTRY_RELEASE.id && (t.release = p.m9.SENTRY_RELEASE.id)), void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0), void 0 === t.sendClientReports && (t.sendClientReports = !0);
                let e = {
                    ...t,
                    stackParser: (0, l.Sq)(t.stackParser || S.Dt),
                    integrations: (0, s.m8)(t),
                    transport: t.transport || ((0, c.Ak)() ? w.f : k.K)
                };
                (0, a.M)(f.R, e), t.autoSessionTracking && function() {
                    if (void 0 === p.m9.document) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && d.kg.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
                        return
                    }
                    let t = (0, o.Gd)();
                    if (!!t.captureSession) O(t), (0, _.oq)("history", ({
                        from: t,
                        to: e
                    }) => {
                        !(void 0 === t || t === e) && O((0, o.Gd)())
                    })
                }()
            }

            function x(t = {}, e = (0, o.Gd)()) {
                if (!p.m9.document) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && d.kg.error("Global document not defined in showReportDialog call");
                    return
                }
                let {
                    client: n,
                    scope: r
                } = e.getStackTop(), i = t.dsn || n && n.getDsn();
                if (!i) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && d.kg.error("DSN not configured for showReportDialog call");
                    return
                }
                r && (t.user = {
                    ...r.getUser(),
                    ...t.user
                }), !t.eventId && (t.eventId = e.lastEventId());
                let s = p.m9.document.createElement("script");
                s.async = !0, s.crossOrigin = "anonymous", s.src = (0, u.h)(i, t), t.onLoad && (s.onload = t.onLoad);
                let a = p.m9.document.head || p.m9.document.body;
                a ? a.appendChild(s) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && d.kg.error("Not injecting report dialog. No injection point found in HTML")
            }

            function D() {
                return (0, o.Gd)().lastEventId()
            }

            function N() {}

            function C(t) {
                t()
            }

            function U(t) {
                let e = (0, o.Gd)().getClient();
                return e ? e.flush(t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && d.kg.warn("Cannot flush events. No client defined."), (0, h.WD)(!1))
            }

            function I(t) {
                let e = (0, o.Gd)().getClient();
                return e ? e.close(t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && d.kg.warn("Cannot flush events and disable SDK. No client defined."), (0, h.WD)(!1))
            }

            function A(t) {
                return (0, p.re)(t)()
            }

            function O(t) {
                t.startSession({
                    ignoreDuration: !0
                }), t.captureSession()
            }

            function B(t) {
                let e = (0, o.Gd)().getClient();
                e && e.captureUserFeedback(t)
            }
        },
        202406: function(t, e, n) {
            "use strict";
            n.d(e, {
                $3: function() {
                    return o
                },
                $Q: function() {
                    return c
                },
                Dt: function() {
                    return y
                },
                HH: function() {
                    return m
                },
                NP: function() {
                    return f
                },
                R2: function() {
                    return h
                },
                d8: function() {
                    return g
                }
            });
            var r = n(432038);

            function i(t, e, n, r) {
                let i = {
                    filename: t,
                    function: e,
                    in_app: !0
                };
                return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i
            }
            let s = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                a = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                o = [30, t => {
                    let e = s.exec(t);
                    if (e) {
                        if (e[2] && 0 === e[2].indexOf("eval")) {
                            let t = a.exec(e[2]);
                            t && (e[2] = t[1], e[3] = t[2], e[4] = t[3])
                        }
                        let [t, n] = v(e[1] || "?", e[2]);
                        return i(n, t, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
                    }
                }],
                u = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
                l = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                c = [50, t => {
                    let e = u.exec(t);
                    if (e) {
                        if (e[3] && e[3].indexOf(" > eval") > -1) {
                            let t = l.exec(e[3]);
                            t && (e[1] = e[1] || "eval", e[3] = t[1], e[4] = t[2], e[5] = "")
                        }
                        let t = e[3],
                            n = e[1] || "?";
                        return [n, t] = v(n, t), i(t, n, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
                    }
                }],
                d = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                h = [40, t => {
                    let e = d.exec(t);
                    return e ? i(e[2], e[1] || "?", +e[3], e[4] ? +e[4] : void 0) : void 0
                }],
                _ = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
                f = [10, t => {
                    let e = _.exec(t);
                    return e ? i(e[2], e[3] || "?", +e[1]) : void 0
                }],
                p = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
                m = [20, t => {
                    let e = p.exec(t);
                    return e ? i(e[5], e[3] || e[4] || "?", +e[1], +e[2]) : void 0
                }],
                g = [o, c, h],
                y = (0, r.pE)(...g),
                v = (t, e) => {
                    let n = -1 !== t.indexOf("safari-extension"),
                        r = -1 !== t.indexOf("safari-web-extension");
                    return n || r ? [-1 !== t.indexOf("@") ? t.split("@")[0] : "?", n ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
                }
        },
        393746: function(t, e, n) {
            "use strict";
            n.d(e, {
                f: function() {
                    return a
                }
            });
            var r = n(347421),
                i = n(880803),
                s = n(56618);

            function a(t, e = (0, s.x)()) {
                let n = 0,
                    a = 0;
                return (0, r.q)(t, function(r) {
                    let o = r.body.length;
                    n += o, a++;
                    let u = {
                        body: r.body,
                        method: "POST",
                        referrerPolicy: "origin",
                        headers: t.headers,
                        keepalive: n <= 6e4 && a < 15,
                        ...t.fetchOptions
                    };
                    try {
                        return e(t.url, u).then(t => (n -= o, a--, {
                            statusCode: t.status,
                            headers: {
                                "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                                "retry-after": t.headers.get("Retry-After")
                            }
                        }))
                    } catch (t) {
                        return (0, s.c)(), n -= o, a--, (0, i.$2)(t)
                    }
                })
            }
        },
        490753: function(t, e, n) {
            "use strict";
            n.d(e, {
                O1: function() {
                    return u
                }
            });
            var r = n(499833),
                i = n(50074);

            function s(t) {
                return new Promise((e, n) => {
                    t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => n(t.error)
                })
            }

            function a(t) {
                return s(t.getAllKeys())
            }

            function o(t) {
                let e;

                function n() {
                    return void 0 == e && (e = function(t, e) {
                        let n = indexedDB.open(t);
                        n.onupgradeneeded = () => n.result.createObjectStore(e);
                        let r = s(n);
                        return t => r.then(n => t(n.transaction(e, "readwrite").objectStore(e)))
                    }(t.dbName || "sentry-offline", t.storeName || "queue")), e
                }
                return {
                    insert: async e => {
                        try {
                            var r, o, u;
                            let l = await (0, i.V$)(e, t.textEncoder);
                            await (r = n(), o = l, u = t.maxQueueSize || 30, r(t => a(t).then(e => {
                                if (!(e.length >= u)) return t.put(o, Math.max(...e, 0) + 1), s(t.transaction)
                            })))
                        } catch (t) {}
                    },
                    pop: async () => {
                        try {
                            let e = await n()(t => a(t).then(e => {
                                if (0 !== e.length) return s(t.get(e[0])).then(n => (t.delete(e[0]), s(t.transaction).then(() => n)))
                            }));
                            if (e) return (0, i.f4)(e, t.textEncoder || new TextEncoder, t.textDecoder || new TextDecoder)
                        } catch (t) {}
                    }
                }
            }

            function u(t) {
                var e;
                return e = (0, r.Pd)(t), t => e({
                    ...t,
                    createStore: o
                })
            }
        },
        56618: function(t, e, n) {
            "use strict";
            let r;
            n.d(e, {
                c: function() {
                    return u
                },
                x: function() {
                    return o
                }
            });
            var i = n(698892),
                s = n(529866),
                a = n(643487);

            function o() {
                if (r) return r;
                if ((0, i.Du)(a.m9.fetch)) return r = a.m9.fetch.bind(a.m9);
                let t = a.m9.document,
                    e = a.m9.fetch;
                if (t && "function" == typeof t.createElement) try {
                    let n = t.createElement("iframe");
                    n.hidden = !0, t.head.appendChild(n);
                    let r = n.contentWindow;
                    r && r.fetch && (e = r.fetch), t.head.removeChild(n)
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                }
                return r = e.bind(a.m9)
            }

            function u() {
                r = void 0
            }
        },
        975927: function(t, e, n) {
            "use strict";
            n.d(e, {
                K: function() {
                    return s
                }
            });
            var r = n(347421),
                i = n(880803);

            function s(t) {
                return (0, r.q)(t, function(e) {
                    return new i.cW((n, r) => {
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
            n.d(e, {
                r: function() {
                    return s
                }
            });
            var r = n(177668),
                i = n(50074);

            function s(t, {
                metadata: e,
                tunnel: n,
                dsn: s
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
                        ...!!n && !!s && {
                            dsn: (0, r.RA)(s)
                        }
                    },
                    o = function(t) {
                        return [{
                            type: "user_report"
                        }, t]
                    }(t);
                return (0, i.Jd)(a, [o])
            }
        },
        507506: function(t, e, n) {
            "use strict";
            n.d(e, {
                U: function() {
                    return a
                },
                h: function() {
                    return o
                }
            });
            var r = n(442853),
                i = n(177668);

            function s(t) {
                let e = t.protocol ? `${t.protocol}:` : "",
                    n = t.port ? `:${t.port}` : "";
                return `${e}//${t.host}${n}${t.path?`/${t.path}`:""}/api/`
            }

            function a(t, e = {}) {
                var n, i, a;
                let o = "string" == typeof e ? e : e.tunnel,
                    u = "string" != typeof e && e._metadata ? e._metadata.sdk : void 0;
                return o || `${n=t,`${s(n)}${n.projectId}/envelope/`}?${i=t,a=u,(0,r._j)({sentry_key:i.publicKey,sentry_version:"7",...a&&{sentry_client:`${a.name}/${a.version}`}})}`
            }

            function o(t, e) {
                let n = (0, i.vK)(t);
                if (!n) return "";
                let r = `${s(n)}embed/error-page/`,
                    a = `dsn=${(0,i.RA)(n)}`;
                for (let t in e) {
                    if ("dsn" !== t)
                        if ("user" === t) {
                            let t = e.user;
                            if (!t) continue;
                            t.name && (a += `&name=${encodeURIComponent(t.name)}`), t.email && (a += `&email=${encodeURIComponent(t.email)}`)
                        } else a += `&${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`
                }
                return `${r}?${a}`
            }
        },
        861579: function(t, e, n) {
            "use strict";
            n.d(e, {
                W: function() {
                    return g
                }
            });
            var r = n(177668),
                i = n(529866),
                s = n(862315),
                a = n(46834),
                o = n(880803),
                u = n(50074),
                l = n(303155),
                c = n(507506),
                d = n(419767),
                h = n(595208),
                _ = n(741900),
                f = n(154405),
                p = n(392405);
            let m = "Not capturing exception because it's already been captured.";
            class g {
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
                    if (g.prototype.__init.call(this), g.prototype.__init2.call(this), g.prototype.__init3.call(this), g.prototype.__init4.call(this), g.prototype.__init5.call(this), this._options = t, t.dsn ? this._dsn = (0, r.vK)(t.dsn) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn("No DSN provided, client will not do anything."), this._dsn) {
                        let e = (0, c.U)(this._dsn, t);
                        this._transport = t.transport({
                            recordDroppedEvent: this.recordDroppedEvent.bind(this),
                            ...t.transportOptions,
                            url: e
                        })
                    }
                }
                captureException(t, e, n) {
                    if ((0, s.YO)(t)) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(m);
                        return
                    }
                    let r = e && e.event_id;
                    return this._process(this.eventFromException(t, e).then(t => this._captureEvent(t, e, n)).then(t => {
                        r = t
                    })), r
                }
                captureMessage(t, e, n, r) {
                    let i = n && n.event_id,
                        s = (0, a.pt)(t) ? this.eventFromMessage(String(t), e, n) : this.eventFromException(t, n);
                    return this._process(s.then(t => this._captureEvent(t, n, r)).then(t => {
                        i = t
                    })), i
                }
                captureEvent(t, e, n) {
                    if (e && e.originalException && (0, s.YO)(e.originalException)) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(m);
                        return
                    }
                    let r = e && e.event_id;
                    return this._process(this._captureEvent(t, e, n).then(t => {
                        r = t
                    })), r
                }
                captureSession(t) {
                    if (!this._isEnabled()) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn("SDK not enabled, will not capture session.");
                        return
                    }
                    "string" != typeof t.release ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn("Discarded session because of missing or non-string release") : (this.sendSession(t), (0, _.CT)(t, {
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
                    return e ? this._isClientDoneProcessing(t).then(n => e.flush(t).then(t => n && t)) : (0, o.WD)(!0)
                }
                close(t) {
                    return this.flush(t).then(t => (this.getOptions().enabled = !1, t))
                }
                setupIntegrations() {
                    this._isEnabled() && !this._integrationsInitialized && (this._integrations = (0, h.q4)(this._options.integrations), this._integrationsInitialized = !0)
                }
                getIntegrationById(t) {
                    return this._integrations[t]
                }
                getIntegration(t) {
                    try {
                        return this._integrations[t.id] || null
                    } catch (e) {
                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn(`Cannot retrieve integration ${t.id} from the current Client`), null
                    }
                }
                addIntegration(t) {
                    (0, h.m7)(t, this._integrations)
                }
                sendEvent(t, e = {}) {
                    if (this._dsn) {
                        let n = (0, d.M)(t, this._dsn, this._options._metadata, this._options.tunnel);
                        for (let t of e.attachments || []) n = (0, u.BO)(n, (0, u.zQ)(t, this._options.transportOptions && this._options.transportOptions.textEncoder));
                        let r = this._sendEnvelope(n);
                        r && r.then(e => this.emit("afterSendEvent", t, e), null)
                    }
                }
                sendSession(t) {
                    if (this._dsn) {
                        let e = (0, d.Q)(t, this._dsn, this._options._metadata, this._options.tunnel);
                        this._sendEnvelope(e)
                    }
                }
                recordDroppedEvent(t, e, n) {
                    if (this._options.sendClientReports) {
                        let n = `${t}:${e}`;
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`Adding outcome: "${n}"`), this._outcomes[n] = this._outcomes[n] + 1 || 1
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
                    let s = "ok" === t.status;
                    (s && 0 === t.errors || s && n) && ((0, _.CT)(t, {
                        ...n && {
                            status: "crashed"
                        },
                        errors: t.errors || Number(r || n)
                    }), this.captureSession(t))
                }
                _isClientDoneProcessing(t) {
                    return new o.cW(e => {
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
                    return !e.integrations && i.length > 0 && (e.integrations = i), (0, p.R)(r, t, e, n).then(t => {
                        if (null === t) return t;
                        let {
                            propagationContext: e
                        } = t.sdkProcessingMetadata || {};
                        if (!(t.contexts && t.contexts.trace) && e) {
                            let {
                                traceId: r,
                                spanId: i,
                                parentSpanId: s,
                                dsc: a
                            } = e;
                            t.contexts = {
                                trace: {
                                    trace_id: r,
                                    span_id: i,
                                    parent_span_id: s
                                },
                                ...t.contexts
                            };
                            let o = a || (0, f._)(r, this, n);
                            t.sdkProcessingMetadata = {
                                dynamicSamplingContext: o,
                                ...t.sdkProcessingMetadata
                            }
                        }
                        return t
                    })
                }
                _captureEvent(t, e = {}, n) {
                    return this._processEvent(t, e, n).then(t => t.event_id, t => {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && ("log" === t.logLevel ? i.kg.log(t.message) : i.kg.warn(t))
                    })
                }
                _processEvent(t, e, n) {
                    let r = this.getOptions(),
                        {
                            sampleRate: i
                        } = r;
                    if (!this._isEnabled()) return (0, o.$2)(new l.b("SDK not enabled, will not capture event.", "log"));
                    let s = v(t),
                        u = y(t),
                        c = t.type || "error",
                        d = `before send for type \`${c}\``;
                    if (u && "number" == typeof i && Math.random() > i) return this.recordDroppedEvent("sample_rate", "error", t), (0, o.$2)(new l.b(`Discarding event because it's not included in the random sample (sampling rate = ${i})`, "log"));
                    let h = "replay_event" === c ? "replay" : c;
                    return this._prepareEvent(t, e, n).then(n => {
                        if (null === n) throw this.recordDroppedEvent("event_processor", h, t), new l.b("An event processor returned `null`, will not send event.", "log");
                        return e.data && !0 === e.data.__sentry__ ? n : function(t, e) {
                            let n = `${e} must return \`null\` or a valid event.`;
                            if ((0, a.J8)(t)) return t.then(t => {
                                if (!(0, a.PO)(t) && null !== t) throw new l.b(n);
                                return t
                            }, t => {
                                throw new l.b(`${e} rejected with ${t}`)
                            });
                            if (!(0, a.PO)(t) && null !== t) throw new l.b(n);
                            return t
                        }(function(t, e, n) {
                            let {
                                beforeSend: r,
                                beforeSendTransaction: i
                            } = t;
                            return y(e) && r ? r(e, n) : v(e) && i ? i(e, n) : e
                        }(r, n, e), d)
                    }).then(r => {
                        if (null === r) throw this.recordDroppedEvent("before_send", h, t), new l.b(`${d} returned \`null\`, will not send event.`, "log");
                        let i = n && n.getSession();
                        !s && i && this._updateSessionFromEvent(i, r);
                        let a = r.transaction_info;
                        return s && a && r.transaction !== t.transaction && (r.transaction_info = {
                            ...a,
                            source: "custom"
                        }), this.sendEvent(r, e), r
                    }).then(null, t => {
                        if (t instanceof l.b) throw t;
                        throw this.captureException(t, {
                            data: {
                                __sentry__: !0
                            },
                            originalException: t
                        }), new l.b(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${t}`)
                    })
                }
                _process(t) {
                    this._numProcessing++, t.then(t => (this._numProcessing--, t), t => (this._numProcessing--, t))
                }
                _sendEnvelope(t) {
                    if (this._transport && this._dsn) return this.emit("beforeEnvelope", t), this._transport.send(t).then(null, t => {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.error("Error while sending event:", t)
                    });
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.error("Transport disabled")
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

            function y(t) {
                return void 0 === t.type
            }

            function v(t) {
                return "transaction" === t.type
            }
        },
        28434: function(t, e, n) {
            "use strict";
            n.d(e, {
                J: function() {
                    return r
                }
            });
            let r = "production"
        },
        419767: function(t, e, n) {
            "use strict";
            n.d(e, {
                M: function() {
                    return a
                },
                Q: function() {
                    return s
                }
            });
            var r = n(50074),
                i = n(177668);

            function s(t, e, n, s) {
                let a = (0, r.HY)(n),
                    o = {
                        sent_at: new Date().toISOString(),
                        ...a && {
                            sdk: a
                        },
                        ...!!s && {
                            dsn: (0, i.RA)(e)
                        }
                    },
                    u = "aggregates" in t ? [{
                        type: "sessions"
                    }, t] : [{
                        type: "session"
                    }, t.toJSON()];
                return (0, r.Jd)(o, [u])
            }

            function a(t, e, n, i) {
                var s, a;
                let o = (0, r.HY)(n),
                    u = t.type && "replay_event" !== t.type ? t.type : "event";
                s = t, !(a = n && n.sdk) || (s.sdk = s.sdk || {}, s.sdk.name = s.sdk.name || a.name, s.sdk.version = s.sdk.version || a.version, s.sdk.integrations = [...s.sdk.integrations || [], ...a.integrations || []], s.sdk.packages = [...s.sdk.packages || [], ...a.packages || []]);
                let l = (0, r.Cd)(t, o, i, e);
                delete t.sdkProcessingMetadata;
                let c = [{
                    type: u
                }, t];
                return (0, r.Jd)(l, [c])
            }
        },
        138122: function(t, e, n) {
            "use strict";
            n.d(e, {
                $e: function() {
                    return p
                },
                Tb: function() {
                    return i
                },
                YA: function() {
                    return _
                },
                Yr: function() {
                    return m
                },
                av: function() {
                    return f
                },
                e: function() {
                    return o
                },
                eN: function() {
                    return a
                },
                mG: function() {
                    return h
                },
                n_: function() {
                    return u
                },
                rJ: function() {
                    return c
                },
                sU: function() {
                    return d
                },
                uT: function() {
                    return s
                },
                v: function() {
                    return l
                }
            });
            var r = n(876122);

            function i(t, e) {
                return (0, r.Gd)().captureException(t, {
                    captureContext: e
                })
            }

            function s(t, e) {
                let n = "string" == typeof e ? e : void 0,
                    i = "string" != typeof e ? {
                        captureContext: e
                    } : void 0;
                return (0, r.Gd)().captureMessage(t, n, i)
            }

            function a(t, e) {
                return (0, r.Gd)().captureEvent(t, e)
            }

            function o(t) {
                (0, r.Gd)().configureScope(t)
            }

            function u(t) {
                (0, r.Gd)().addBreadcrumb(t)
            }

            function l(t, e) {
                (0, r.Gd)().setContext(t, e)
            }

            function c(t) {
                (0, r.Gd)().setExtras(t)
            }

            function d(t, e) {
                (0, r.Gd)().setExtra(t, e)
            }

            function h(t) {
                (0, r.Gd)().setTags(t)
            }

            function _(t, e) {
                (0, r.Gd)().setTag(t, e)
            }

            function f(t) {
                (0, r.Gd)().setUser(t)
            }

            function p(t) {
                (0, r.Gd)().withScope(t)
            }

            function m(t, e) {
                return (0, r.Gd)().startTransaction({
                    ...t
                }, e)
            }
        },
        876122: function(t, e, n) {
            "use strict";
            n.d(e, {
                Gd: function() {
                    return _
                },
                Xb: function() {
                    return c
                },
                cu: function() {
                    return d
                },
                pj: function() {
                    return h
                },
                vi: function() {
                    return f
                }
            });
            var r = n(862315),
                i = n(868145),
                s = n(529866),
                a = n(24716),
                o = n(28434),
                u = n(703498),
                l = n(741900);
            class c {
                constructor(t, e = new u.s, n = 4) {
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
                    let t = u.s.clone(this.getScope());
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
                    let n = this._lastEventId = e && e.event_id ? e.event_id : (0, r.DM)(),
                        i = Error("Sentry syntheticException");
                    return this._withClient((r, s) => {
                        r.captureException(t, {
                            originalException: t,
                            syntheticException: i,
                            ...e,
                            event_id: n
                        }, s)
                    }), n
                }
                captureMessage(t, e, n) {
                    let i = this._lastEventId = n && n.event_id ? n.event_id : (0, r.DM)(),
                        s = Error(t);
                    return this._withClient((r, a) => {
                        r.captureMessage(t, e, {
                            originalException: t,
                            syntheticException: s,
                            ...n,
                            event_id: i
                        }, a)
                    }), i
                }
                captureEvent(t, e) {
                    let n = e && e.event_id ? e.event_id : (0, r.DM)();
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
                        client: r
                    } = this.getStackTop();
                    if (!r) return;
                    let {
                        beforeBreadcrumb: a = null,
                        maxBreadcrumbs: o = 100
                    } = r.getOptions && r.getOptions() || {};
                    if (o <= 0) return;
                    let u = {
                            timestamp: (0, i.yW)(),
                            ...t
                        },
                        l = a ? (0, s.Cf)(() => a(u, e)) : u;
                    null !== l && (r.emit && r.emit("beforeAddBreadcrumb", l, e), n.addBreadcrumb(l, o))
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
                    let e = h(this);
                    try {
                        t(this)
                    } finally {
                        h(e)
                    }
                }
                getIntegration(t) {
                    let e = this.getClient();
                    if (!e) return null;
                    try {
                        return e.getIntegration(t)
                    } catch (e) {
                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.warn(`Cannot retrieve integration ${t.id} from the current Hub`), null
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
                    e && (0, l.RJ)(e), this._sendSessionUpdate(), t.setSession()
                }
                startSession(t) {
                    let {
                        scope: e,
                        client: n
                    } = this.getStackTop(), {
                        release: r,
                        environment: i = o.J
                    } = n && n.getOptions() || {}, {
                        userAgent: s
                    } = a.n2.navigator || {}, u = (0, l.Hv)({
                        release: r,
                        environment: i,
                        user: e.getUser(),
                        ...s && {
                            userAgent: s
                        },
                        ...t
                    }), c = e.getSession && e.getSession();
                    return c && "ok" === c.status && (0, l.CT)(c, {
                        status: "exited"
                    }), this.endSession(), e.setSession(u), u
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
                    let n = d().__SENTRY__;
                    if (n && n.extensions && "function" == typeof n.extensions[t]) return n.extensions[t].apply(this, e);
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.warn(`Extension method ${t} couldn't be found, doing nothing.`)
                }
            }

            function d() {
                return a.n2.__SENTRY__ = a.n2.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                }, a.n2
            }

            function h(t) {
                let e = d(),
                    n = f(e);
                return p(e, t), n
            }

            function _() {
                let t = d();
                if (t.__SENTRY__ && t.__SENTRY__.acs) {
                    let e = t.__SENTRY__.acs.getCurrentHub();
                    if (e) return e
                }
                return function(t = d()) {
                    return (! function(t) {
                        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
                    }(t) || f(t).isOlderThan(4)) && p(t, new c), f(t)
                }(t)
            }

            function f(t) {
                return (0, a.YO)("hub", () => new c, t)
            }

            function p(t, e) {
                return !!t && ((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e, !0)
            }
        },
        91320: function(t, e, n) {
            "use strict";
            n.d(e, {
                $e: function() {
                    return o.$e
                },
                Gd: function() {
                    return u.Gd
                },
                Jn: function() {
                    return h.J
                },
                QD: function() {
                    return p.QD
                },
                Tb: function() {
                    return o.Tb
                },
                Ts: function() {
                    return r.T
                },
                Wq: function() {
                    return d.W
                },
                Xb: function() {
                    return u.Xb
                },
                YA: function() {
                    return o.YA
                },
                Yr: function() {
                    return o.Yr
                },
                Zd: function() {
                    return i.Zd
                },
                _e: function() {
                    return _._
                },
                av: function() {
                    return o.av
                },
                cc: function() {
                    return l.c
                },
                cq: function() {
                    return f.c
                },
                e: function() {
                    return o.e
                },
                eN: function() {
                    return o.eN
                },
                g4: function() {
                    return a.g
                },
                mG: function() {
                    return o.mG
                },
                n_: function() {
                    return o.n_
                },
                pj: function() {
                    return u.pj
                },
                qG: function() {
                    return m.qG
                },
                qv: function() {
                    return c.q
                },
                rJ: function() {
                    return o.rJ
                },
                sU: function() {
                    return o.sU
                },
                sX: function() {
                    return l.s
                },
                uT: function() {
                    return o.uT
                },
                v: function() {
                    return o.v
                },
                vi: function() {
                    return u.vi
                },
                x1: function() {
                    return s.x1
                }
            });
            var r = n(90668),
                i = n(48950),
                s = n(147816),
                a = n(468174),
                o = n(138122),
                u = n(876122),
                l = n(703498),
                c = n(347421),
                d = n(449701),
                h = n(139782),
                _ = n(333878),
                f = n(740054),
                p = n(344106),
                m = n(648238)
        },
        595208: function(t, e, n) {
            "use strict";
            n.d(e, {
                m7: function() {
                    return c
                },
                m8: function() {
                    return u
                },
                q4: function() {
                    return l
                }
            });
            var r = n(862315),
                i = n(529866),
                s = n(876122),
                a = n(703498);
            let o = [];

            function u(t) {
                let e;
                let n = t.defaultIntegrations || [],
                    i = t.integrations;
                n.forEach(t => {
                    t.isDefaultInstance = !0
                });
                let s = function(t) {
                        let e = {};
                        return t.forEach(t => {
                            let {
                                name: n
                            } = t, r = e[n];
                            if (!r || !!r.isDefaultInstance || !t.isDefaultInstance) e[n] = t
                        }), Object.keys(e).map(t => e[t])
                    }(e = Array.isArray(i) ? [...n, ...i] : "function" == typeof i ? (0, r.lE)(i(n)) : n),
                    a = function(t, e) {
                        for (let n = 0; n < t.length; n++)
                            if (!0 === e(t[n])) return n;
                        return -1
                    }(s, t => "Debug" === t.name);
                if (-1 !== a) {
                    let [t] = s.splice(a, 1);
                    s.push(t)
                }
                return s
            }

            function l(t) {
                let e = {};
                return t.forEach(t => {
                    t && c(t, e)
                }), e
            }

            function c(t, e) {
                e[t.name] = t, -1 === o.indexOf(t.name) && (t.setupOnce(a.c, s.Gd), o.push(t.name), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`Integration installed: ${t.name}`))
            }
        },
        740054: function(t, e, n) {
            "use strict";
            let r;
            n.d(e, {
                c: function() {
                    return s
                }
            });
            var i = n(442853);
            class s {
                constructor() {
                    s.prototype.__init.call(this)
                }
                static __initStatic() {
                    this.id = "FunctionToString"
                }
                __init() {
                    this.name = s.id
                }
                setupOnce() {
                    r = Function.prototype.toString;
                    try {
                        Function.prototype.toString = function(...t) {
                            let e = (0, i.HK)(this) || this;
                            return r.apply(e, t)
                        }
                    } catch (t) {}
                }
            }
            s.__initStatic()
        },
        344106: function(t, e, n) {
            "use strict";
            n.d(e, {
                QD: function() {
                    return u
                }
            });
            var r = n(529866),
                i = n(862315),
                s = n(336344);
            let a = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
                o = [/^.*healthcheck.*$/, /^.*healthy.*$/, /^.*live.*$/, /^.*ready.*$/, /^.*heartbeat.*$/, /^.*\/health$/, /^.*\/healthz$/];
            class u {
                static __initStatic() {
                    this.id = "InboundFilters"
                }
                __init() {
                    this.name = u.id
                }
                constructor(t = {}) {
                    this._options = t, u.prototype.__init.call(this)
                }
                setupOnce(t, e) {
                    let n = t => {
                        let n = e();
                        if (n) {
                            let e = n.getIntegration(u);
                            if (e) {
                                let u = n.getClient(),
                                    c = u ? u.getOptions() : {};
                                return function(t, e) {
                                    return e.ignoreInternal && function(t) {
                                        try {
                                            return "SentryError" === t.exception.values[0].type
                                        } catch (t) {}
                                        return !1
                                    }(t) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn(`Event dropped due to being internal Sentry Error.
Event: ${(0,i.jH)(t)}`), !0) : function(t, e) {
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
                                                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.error(`Cannot extract message for event ${(0,i.jH)(t)}`)
                                                }
                                            }
                                            return []
                                        })(t).some(t => (0, s.U0)(t, e))
                                    }(t, e.ignoreErrors) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0,i.jH)(t)}`), !0) : function(t, e) {
                                        if ("transaction" !== t.type || !e || !e.length) return !1;
                                        let n = t.transaction;
                                        return !!n && (0, s.U0)(n, e)
                                    }(t, e.ignoreTransactions) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0,i.jH)(t)}`), !0) : function(t, e) {
                                        if (!e || !e.length) return !1;
                                        let n = l(t);
                                        return !!n && (0, s.U0)(n, e)
                                    }(t, e.denyUrls) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0,i.jH)(t)}.
Url: ${l(t)}`), !0) : ! function(t, e) {
                                        if (!e || !e.length) return !0;
                                        let n = l(t);
                                        return !n || (0, s.U0)(n, e)
                                    }(t, e.allowUrls) && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0,i.jH)(t)}.
Url: ${l(t)}`), !0)
                                }(t, function(t = {}, e = {}) {
                                    return {
                                        allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
                                        denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
                                        ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...t.disableErrorDefaults ? [] : a],
                                        ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || [], ...t.disableTransactionDefaults ? [] : o],
                                        ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
                                    }
                                }(e._options, c)) ? null : t
                            }
                        }
                        return t
                    };
                    n.id = this.name, t(n)
                }
            }
            u.__initStatic();

            function l(t) {
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
                    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.error(`Cannot extract url for event ${(0,i.jH)(t)}`), null
                }
            }
        },
        89837: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                FunctionToString: function() {
                    return r.c
                },
                InboundFilters: function() {
                    return i.QD
                }
            });
            var r = n(740054),
                i = n(344106)
        },
        333878: function(t, e, n) {
            "use strict";
            n.d(e, {
                _: function() {
                    return s
                }
            });
            var r = n(50074),
                i = n(274484);
            class s {
                constructor() {
                    s.prototype.__init.call(this)
                }
                static __initStatic() {
                    this.id = "ModuleMetadata"
                }
                __init() {
                    this.name = s.id
                }
                setupOnce(t, e) {
                    let n = e().getClient();
                    if (!n || "function" != typeof n.on) return;
                    n.on("beforeEnvelope", t => {
                        (0, r.gv)(t, (t, e) => {
                            if ("event" === e) {
                                let e = Array.isArray(t) ? t[1] : void 0;
                                e && ((0, i.CC)(e), t[1] = e)
                            }
                        })
                    });
                    let s = n.getOptions().stackParser;
                    t(t => ((0, i.GY)(s, t), t))
                }
            }
            s.__initStatic()
        },
        274484: function(t, e, n) {
            "use strict";
            n.d(e, {
                CC: function() {
                    return o
                },
                GY: function() {
                    return a
                }
            });
            var r = n(24716);
            let i = new Map,
                s = new Set;

            function a(t, e) {
                try {
                    e.exception.values.forEach(e => {
                        if (!!e.stacktrace)
                            for (let o of e.stacktrace.frames || []) {
                                var n, a;
                                if (!o.filename) continue;
                                let e = (n = t, a = o.filename, ! function(t) {
                                    if (!!r.n2._sentryModuleMetadata)
                                        for (let e of Object.keys(r.n2._sentryModuleMetadata)) {
                                            let n = r.n2._sentryModuleMetadata[e];
                                            if (!s.has(e)) {
                                                for (let r of (s.add(e), t(e).reverse()))
                                                    if (r.filename) {
                                                        i.set(r.filename, n);
                                                        break
                                                    }
                                            }
                                        }
                                }(n), i.get(a));
                                e && (o.module_metadata = e)
                            }
                    })
                } catch (t) {}
            }

            function o(t) {
                try {
                    t.exception.values.forEach(t => {
                        if (!!t.stacktrace)
                            for (let e of t.stacktrace.frames || []) delete e.module_metadata
                    })
                } catch (t) {}
            }
        },
        703498: function(t, e, n) {
            "use strict";
            n.d(e, {
                c: function() {
                    return h
                },
                s: function() {
                    return c
                }
            });
            var r = n(46834),
                i = n(868145),
                s = n(880803),
                a = n(529866),
                o = n(862315),
                u = n(24716),
                l = n(741900);
            class c {
                constructor() {
                    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = _()
                }
                static clone(t) {
                    let e = new c;
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
                    return this._user = t || {}, this._session && (0, l.CT)(this._session, {
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
                        return e instanceof c ? e : this
                    }
                    return t instanceof c ? (this._tags = {
                        ...this._tags,
                        ...t._tags
                    }, this._extra = {
                        ...this._extra,
                        ...t._extra
                    }, this._contexts = {
                        ...this._contexts,
                        ...t._contexts
                    }, t._user && Object.keys(t._user).length && (this._user = t._user), t._level && (this._level = t._level), t._fingerprint && (this._fingerprint = t._fingerprint), t._requestSession && (this._requestSession = t._requestSession), t._propagationContext && (this._propagationContext = t._propagationContext)) : (0, r.PO)(t) && (this._tags = {
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
                    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = _(), this
                }
                addBreadcrumb(t, e) {
                    let n = "number" == typeof e ? e : 100;
                    if (n <= 0) return this;
                    let r = {
                        timestamp: (0, i.yW)(),
                        ...t
                    };
                    return this._breadcrumbs = [...this._breadcrumbs, r].slice(-n), this._notifyScopeListeners(), this
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
                    }, this._notifyEventProcessors([...d(), ...this._eventProcessors], t, e)
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
                    return new s.cW((s, o) => {
                        let u = t[i];
                        if (null === e || "function" != typeof u) s(e);
                        else {
                            let l = u({
                                ...e
                            }, n);
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.id && null === l && a.kg.log(`Event processor "${u.id}" dropped event`), (0, r.J8)(l) ? l.then(e => this._notifyEventProcessors(t, e, n, i + 1).then(s)).then(null, o) : this._notifyEventProcessors(t, l, n, i + 1).then(s).then(null, o)
                        }
                    })
                }
                _notifyScopeListeners() {
                    !this._notifyingListeners && (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
                        t(this)
                    }), this._notifyingListeners = !1)
                }
                _applyFingerprint(t) {
                    t.fingerprint = t.fingerprint ? (0, o.lE)(t.fingerprint) : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
                }
            }

            function d() {
                return (0, u.YO)("globalEventProcessors", () => [])
            }

            function h(t) {
                d().push(t)
            }

            function _() {
                return {
                    traceId: (0, o.DM)(),
                    spanId: (0, o.DM)().substring(16),
                    sampled: !1
                }
            }
        },
        110575: function(t, e, n) {
            "use strict";
            n.d(e, {
                M: function() {
                    return s
                }
            });
            var r = n(529866),
                i = n(876122);

            function s(t, e) {
                !0 === e.debug && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? r.kg.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
                let n = (0, i.Gd)();
                n.getScope().update(e.initialScope);
                let s = new t(e);
                n.bindClient(s)
            }
        },
        741900: function(t, e, n) {
            "use strict";
            n.d(e, {
                CT: function() {
                    return o
                },
                Hv: function() {
                    return a
                },
                RJ: function() {
                    return u
                }
            });
            var r = n(868145),
                i = n(862315),
                s = n(442853);

            function a(t) {
                let e = (0, r.ph)(),
                    n = {
                        sid: (0, i.DM)(),
                        init: !0,
                        timestamp: e,
                        started: e,
                        duration: 0,
                        status: "ok",
                        errors: 0,
                        ignoreDuration: !1,
                        toJSON: () => (function(t) {
                            return (0, s.Jr)({
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
                return t && o(n, t), n
            }

            function o(t, e = {}) {
                if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || (0, r.ph)(), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0, i.DM)()), void 0 !== e.init && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), "number" == typeof e.started && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
                else if ("number" == typeof e.duration) t.duration = e.duration;
                else {
                    let e = t.timestamp - t.started;
                    t.duration = e >= 0 ? e : 0
                }
                e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), "number" == typeof e.errors && (t.errors = e.errors), e.status && (t.status = e.status)
            }

            function u(t, e) {
                let n = {};
                e ? n = {
                    status: e
                } : "ok" === t.status && (n = {
                    status: "exited"
                }), o(t, n)
            }
        },
        154405: function(t, e, n) {
            "use strict";
            n.d(e, {
                _: function() {
                    return s
                }
            });
            var r = n(442853),
                i = n(28434);

            function s(t, e, n) {
                let s = e.getOptions(),
                    {
                        publicKey: a
                    } = e.getDsn() || {},
                    {
                        segment: o
                    } = n && n.getUser() || {},
                    u = (0, r.Jr)({
                        environment: s.environment || i.J,
                        release: s.release,
                        user_segment: o,
                        public_key: a,
                        trace_id: t
                    });
                return e.emit && e.emit("createDsc", u), u
            }
        },
        750513: function(t, e, n) {
            "use strict";
            n.d(e, {
                e: function() {
                    return o
                }
            });
            var r = n(793884),
                i = n(529866),
                s = n(147816);
            let a = !1;

            function o() {
                if (!a) a = !0, (0, r.oq)("error", u), (0, r.oq)("unhandledrejection", u)
            }

            function u() {
                let t = (0, s.x1)();
                if (t) {
                    let e = "internal_error";
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Tracing] Transaction: ${e} -> Global error occured`), t.setStatus(e)
                }
            }
            u.tag = "sentry_tracingErrorCallback"
        },
        90668: function(t, e, n) {
            "use strict";
            n.d(e, {
                T: function() {
                    return f
                },
                l: function() {
                    return _
                }
            });
            var r = n(529866),
                i = n(46834),
                s = n(876122),
                a = n(633401),
                o = n(750513),
                u = n(376097),
                l = n(912033);

            function c() {
                let t = this.getScope().getSpan();
                return t ? {
                    "sentry-trace": t.toTraceparent()
                } : {}
            }

            function d(t, e, n) {
                let s;
                return (0, a.z)(e) ? void 0 !== t.sampled ? (t.setMetadata({
                    sampleRate: Number(t.sampled)
                }), t) : ("function" == typeof e.tracesSampler ? (s = e.tracesSampler(n), t.setMetadata({
                    sampleRate: Number(s)
                })) : void 0 !== n.parentSampled ? s = n.parentSampled : void 0 !== e.tracesSampleRate ? (s = e.tracesSampleRate, t.setMetadata({
                    sampleRate: Number(s)
                })) : (s = 1, t.setMetadata({
                    sampleRate: s
                })), ! function(t) {
                    return (0, i.i2)(t) || !("number" == typeof t || "boolean" == typeof t) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`), !1) : !(t < 0) && !(t > 1) || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${t}.`), !1)
                }(s)) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."), t.sampled = !1, t) : s ? (t.sampled = Math.random() < s, t.sampled) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log(`[Tracing] starting ${t.op} transaction - ${t.name}`), t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(s)})`), t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log(`[Tracing] Discarding transaction because ${"function"==typeof e.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), t.sampled = !1, t) : (t.sampled = !1, t)
            }

            function h(t, e) {
                let n = this.getClient(),
                    i = n && n.getOptions() || {},
                    s = i.instrumenter || "sentry",
                    a = t.instrumenter || "sentry";
                s !== a && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.error(`A transaction was started with instrumenter=\`${a}\`, but the SDK is configured with the \`${s}\` instrumenter.
The transaction will not be sampled. Please use the ${s} instrumentation to start transactions.`), t.sampled = !1);
                let o = new l.Y(t, this);
                return (o = d(o, i, {
                    parentSampled: t.parentSampled,
                    transactionContext: t,
                    ...e
                })).sampled && o.initSpanRecorder(i._experiments && i._experiments.maxSpans), n && n.emit && n.emit("startTransaction", o), o
            }

            function _(t, e, n, r, i, s, a) {
                let o = t.getClient(),
                    l = o && o.getOptions() || {},
                    c = new u.io(e, t, n, r, a, i);
                return (c = d(c, l, {
                    parentSampled: e.parentSampled,
                    transactionContext: e,
                    ...s
                })).sampled && c.initSpanRecorder(l._experiments && l._experiments.maxSpans), o && o.emit && o.emit("startTransaction", c), c
            }

            function f() {
                let t = (0, s.cu)();
                if (!!t.__SENTRY__) t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}, !t.__SENTRY__.extensions.startTransaction && (t.__SENTRY__.extensions.startTransaction = h), !t.__SENTRY__.extensions.traceHeaders && (t.__SENTRY__.extensions.traceHeaders = c), (0, o.e)()
            }
        },
        376097: function(t, e, n) {
            "use strict";
            n.d(e, {
                AT: function() {
                    return o
                },
                io: function() {
                    return c
                }
            });
            var r = n(868145),
                i = n(529866),
                s = n(48950),
                a = n(912033);
            let o = {
                    idleTimeout: 1e3,
                    finalTimeout: 3e4,
                    heartbeatInterval: 5e3
                },
                u = ["heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled"];
            class l extends s.gB {
                constructor(t, e, n, r) {
                    super(r), this._pushActivity = t, this._popActivity = e, this.transactionSpanId = n
                }
                add(t) {
                    t.spanId !== this.transactionSpanId && (t.finish = e => {
                        t.endTimestamp = "number" == typeof e ? e : (0, r.ph)(), this._popActivity(t.spanId)
                    }, void 0 === t.endTimestamp && this._pushActivity(t.spanId)), super.add(t)
                }
            }
            class c extends a.Y {
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
                constructor(t, e, n = o.idleTimeout, r = o.finalTimeout, s = o.heartbeatInterval, a = !1) {
                    super(t, e), this._idleHub = e, this._idleTimeout = n, this._finalTimeout = r, this._heartbeatInterval = s, this._onScope = a, c.prototype.__init.call(this), c.prototype.__init2.call(this), c.prototype.__init3.call(this), c.prototype.__init4.call(this), c.prototype.__init5.call(this), c.prototype.__init6.call(this), a && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`), e.configureScope(t => t.setSpan(this))), this._restartIdleTimeout(), setTimeout(() => {
                        !this._finished && (this.setStatus("deadline_exceeded"), this._finishReason = "finalTimeout", this.finish())
                    }, this._finalTimeout)
                }
                finish(t = (0, r.ph)()) {
                    if (this._finished = !0, this.activities = {}, "ui.action.click" === this.op && this.setTag("finishReason", this._finishReason), this.spanRecorder) {
                        for (let e of (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] finishing IdleTransaction", new Date(1e3 * t).toISOString(), this.op), this._beforeFinishCallbacks)) e(this, t);
                        this.spanRecorder.spans = this.spanRecorder.spans.filter(e => {
                            if (e.spanId === this.spanId) return !0;
                            !e.endTimestamp && (e.endTimestamp = t, e.setStatus("cancelled"), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(e, void 0, 2)));
                            let n = e.startTimestamp < t;
                            return !n && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] discarding Span since it happened after Transaction was finished", JSON.stringify(e, void 0, 2)), n
                        }), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] flushing IdleTransaction")
                    } else("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] No active IdleTransaction");
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
                    !this.spanRecorder && (this.spanRecorder = new l(t => {
                        if (!this._finished) this._pushActivity(t)
                    }, t => {
                        if (!this._finished) this._popActivity(t)
                    }, this.spanId, t), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("Starting heartbeat"), this._pingHeartbeat()), this.spanRecorder.add(this)
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
                    }), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Tracing] pushActivity: ${t}`), this.activities[t] = !0, ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] new activities count", Object.keys(this.activities).length)
                }
                _popActivity(t) {
                    if (this.activities[t] && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Tracing] popActivity ${t}`), delete this.activities[t], ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] new activities count", Object.keys(this.activities).length)), 0 === Object.keys(this.activities).length) {
                        let t = (0, r.ph)();
                        this._idleTimeoutCanceledPermanently ? (this._finishReason = "cancelled", this.finish(t)) : this._restartIdleTimeout(t + this._idleTimeout / 1e3)
                    }
                }
                _beat() {
                    if (this._finished) return;
                    let t = Object.keys(this.activities).join("");
                    t === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1, this._prevHeartbeatString = t, this._heartbeatCounter >= 3 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] Transaction finished because of no change for 3 heart beats"), this.setStatus("deadline_exceeded"), this._finishReason = "heartbeatFailed", this.finish()) : this._pingHeartbeat()
                }
                _pingHeartbeat() {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`), setTimeout(() => {
                        this._beat()
                    }, this._heartbeatInterval)
                }
            }
        },
        48950: function(t, e, n) {
            "use strict";
            n.d(e, {
                Dr: function() {
                    return l
                },
                Zd: function() {
                    return c
                },
                gB: function() {
                    return u
                }
            });
            var r = n(862315),
                i = n(868145),
                s = n(529866),
                a = n(874230),
                o = n(442853);
            class u {
                __init() {
                    this.spans = []
                }
                constructor(t = 1e3) {
                    u.prototype.__init.call(this), this._maxlen = t
                }
                add(t) {
                    this.spans.length > this._maxlen ? t.spanRecorder = void 0 : this.spans.push(t)
                }
            }
            class l {
                __init2() {
                    this.traceId = (0, r.DM)()
                }
                __init3() {
                    this.spanId = (0, r.DM)().substring(16)
                }
                __init4() {
                    this.startTimestamp = (0, i.ph)()
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
                    if (l.prototype.__init2.call(this), l.prototype.__init3.call(this), l.prototype.__init4.call(this), l.prototype.__init5.call(this), l.prototype.__init6.call(this), l.prototype.__init7.call(this), !t) return this;
                    t.traceId && (this.traceId = t.traceId), t.spanId && (this.spanId = t.spanId), t.parentSpanId && (this.parentSpanId = t.parentSpanId), "sampled" in t && (this.sampled = t.sampled), t.op && (this.op = t.op), t.description && (this.description = t.description), t.data && (this.data = t.data), t.tags && (this.tags = t.tags), t.status && (this.status = t.status), t.startTimestamp && (this.startTimestamp = t.startTimestamp), t.endTimestamp && (this.endTimestamp = t.endTimestamp), t.instrumenter && (this.instrumenter = t.instrumenter)
                }
                startChild(t) {
                    let e = new l({
                        ...t,
                        parentSpanId: this.spanId,
                        sampled: this.sampled,
                        traceId: this.traceId
                    });
                    if (e.spanRecorder = this.spanRecorder, e.spanRecorder && e.spanRecorder.add(e), e.transaction = this.transaction, ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.transaction) {
                        let n = t && t.op || "< unknown op >",
                            r = e.transaction.name || "< unknown name >",
                            i = e.transaction.spanId,
                            a = `[Tracing] Starting '${n}' span on transaction '${r}' (${i}).`;
                        e.transaction.metadata.spanMetadata[e.spanId] = {
                            logMessage: a
                        }, s.kg.log(a)
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
                    let e = c(t);
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
                        t && s.kg.log(t.replace("Starting", "Finishing"))
                    }
                    this.endTimestamp = "number" == typeof t ? t : (0, i.ph)()
                }
                toTraceparent() {
                    return (0, a.$p)(this.traceId, this.spanId, this.sampled)
                }
                toContext() {
                    return (0, o.Jr)({
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
                    return (0, o.Jr)({
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
                    return (0, o.Jr)({
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

            function c(t) {
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
            n.d(e, {
                g: function() {
                    return a
                }
            });
            var r = n(46834),
                i = n(876122),
                s = n(633401);

            function a(t, e, n = () => {}) {
                let a;
                let o = {
                    ...t
                };
                void 0 !== o.name && void 0 === o.description && (o.description = o.name);
                let u = (0, i.Gd)(),
                    l = u.getScope(),
                    c = l.getSpan(),
                    d = function() {
                        if (!!(0, s.z)()) return c ? c.startChild(o) : u.startTransaction(o)
                    }();

                function h() {
                    d && d.finish(), u.getScope().setSpan(c)
                }
                l.setSpan(d);
                try {
                    a = e(d)
                } catch (t) {
                    throw d && d.setStatus("internal_error"), n(t), h(), t
                }
                return (0, r.J8)(a) ? Promise.resolve(a).then(() => {
                    h()
                }, t => {
                    d && d.setStatus("internal_error"), n(t), h()
                }) : h(), a
            }
        },
        912033: function(t, e, n) {
            "use strict";
            n.d(e, {
                Y: function() {
                    return u
                }
            });
            var r = n(529866),
                i = n(442853),
                s = n(876122),
                a = n(154405),
                o = n(48950);
            class u extends o.Dr {
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
                    super(t), u.prototype.__init.call(this), u.prototype.__init2.call(this), u.prototype.__init3.call(this), this._hub = e || (0, s.Gd)(), this._name = t.name || "", this.metadata = {
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
                    !this.spanRecorder && (this.spanRecorder = new o.gB(t)), this.spanRecorder.add(this)
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
                    !this.name && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this.name = "<unlabeled transaction>"), super.finish(t);
                    let e = this._hub.getClient();
                    if (e && e.emit && e.emit("finishTransaction", this), !0 !== this.sampled) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."), e && e.recordDroppedEvent("sample_rate", "transaction");
                        return
                    }
                    let n = this.spanRecorder ? this.spanRecorder.spans.filter(t => t !== this && t.endTimestamp) : [];
                    this._trimEnd && n.length > 0 && (this.endTimestamp = n.reduce((t, e) => t.endTimestamp && e.endTimestamp ? t.endTimestamp > e.endTimestamp ? t : e : t).endTimestamp);
                    let i = this.metadata,
                        s = {
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
                    return Object.keys(this._measurements).length > 0 && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)), s.measurements = this._measurements), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`), this._hub.captureEvent(s)
                }
                toContext() {
                    let t = super.toContext();
                    return (0, i.Jr)({
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
                    let t = this._hub || (0, s.Gd)(),
                        e = t.getClient();
                    if (!e) return {};
                    let n = t.getScope(),
                        r = (0, a._)(this.traceId, e, n),
                        i = this.metadata.sampleRate;
                    void 0 !== i && (r.sample_rate = `${i}`);
                    let o = this.metadata.source;
                    return o && "url" !== o && (r.transaction = this.name), void 0 !== this.sampled && (r.sampled = String(this.sampled)), r
                }
                setHub(t) {
                    this._hub = t
                }
            }
        },
        147816: function(t, e, n) {
            "use strict";
            n.d(e, {
                x1: function() {
                    return i
                }
            });
            var r = n(876122);

            function i(t) {
                return (t || (0, r.Gd)()).getScope().getTransaction()
            }
        },
        347421: function(t, e, n) {
            "use strict";
            n.d(e, {
                q: function() {
                    return l
                }
            });
            var r = n(765497),
                i = n(50074),
                s = n(128603),
                a = n(880803),
                o = n(529866),
                u = n(303155);

            function l(t, e, n = (0, r.x)(t.bufferSize || 30)) {
                let l = {};

                function d(r) {
                    let d = [];
                    if ((0, i.gv)(r, (e, n) => {
                            let r = (0, i.mL)(n);
                            if ((0, s.Q)(l, r)) {
                                let i = c(e, n);
                                t.recordDroppedEvent("ratelimit_backoff", r, i)
                            } else d.push(e)
                        }), 0 === d.length) return (0, a.WD)();
                    let h = (0, i.Jd)(r[0], d),
                        _ = e => {
                            (0, i.gv)(h, (n, r) => {
                                let s = c(n, r);
                                t.recordDroppedEvent(e, (0, i.mL)(r), s)
                            })
                        };
                    return n.add(() => e({
                        body: (0, i.V$)(h, t.textEncoder)
                    }).then(t => (void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn(`Sentry responded with status code ${t.statusCode} to sent event.`), l = (0, s.WG)(l, t), t), t => {
                        throw _("network_error"), t
                    })).then(t => t, t => {
                        if (t instanceof u.b) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.error("Skipped sending event because buffer is full."), _("queue_overflow"), (0, a.WD)();
                        throw t
                    })
                }
                return d.__sentry__baseTransport__ = !0, {
                    send: d,
                    flush: t => n.drain(t)
                }
            }

            function c(t, e) {
                if ("event" === e || "transaction" === e) return Array.isArray(t) ? t[1] : void 0
            }
        },
        449701: function(t, e, n) {
            "use strict";
            n.d(e, {
                W: function() {
                    return o
                }
            });
            var r = n(50074),
                i = n(177668),
                s = n(507506);

            function a(t, e) {
                let n;
                return (0, r.gv)(t, (t, r) => (e.includes(r) && (n = Array.isArray(t) ? t[1] : void 0), !!n)), n
            }

            function o(t, e) {
                return n => {
                    let r = t(n),
                        o = {};

                    function u(e, r) {
                        let u = r ? `${e}:${r}` : e;
                        if (!o[u]) {
                            var l, c;
                            let d = (0, i.U4)(e);
                            if (!d) return;
                            let h = (0, s.U)(d);
                            o[u] = r ? (l = t, c = r, t => {
                                let e = l(t);
                                return {
                                    send: async t => {
                                        let n = a(t, ["event", "transaction", "profile", "replay_event"]);
                                        return n && (n.release = c), e.send(t)
                                    },
                                    flush: t => e.flush(t)
                                }
                            })({
                                ...n,
                                url: h
                            }) : t({
                                ...n,
                                url: h
                            })
                        }
                        return o[u]
                    }
                    return {
                        send: async function t(t) {
                            let n = e({
                                envelope: t,
                                getEvent: function(e) {
                                    return a(t, e && e.length ? e : ["event"])
                                }
                            }).map(t => "string" == typeof t ? u(t, void 0) : u(t.dsn, t.release)).filter(t => !!t);
                            return 0 === n.length && n.push(r), (await Promise.all(n.map(e => e.send(t))))[0]
                        },
                        flush: async function t(t) {
                            let e = [...Object.keys(o).map(t => o[t]), r];
                            return (await Promise.all(e.map(e => e.flush(t)))).every(t => t)
                        }
                    }
                }
            }
        },
        499833: function(t, e, n) {
            "use strict";
            n.d(e, {
                Pd: function() {
                    return o
                }
            });
            var r = n(529866),
                i = n(50074),
                s = n(128603);

            function a(t, e) {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.info(`[Offline]: ${t}`, e)
            }

            function o(t) {
                return e => {
                    let n;
                    let r = t(e),
                        o = e.createStore ? e.createStore(e) : void 0,
                        u = 5e3;

                    function l(t) {
                        if (!!o) n && clearTimeout(n), "number" != typeof(n = setTimeout(async () => {
                            n = void 0;
                            let t = await o.pop();
                            t && (a("Attempting to send previously queued event"), d(t).catch(t => {
                                a("Failed to retry sending", t)
                            }))
                        }, t)) && n.unref && n.unref()
                    }

                    function c() {
                        if (!n) l(u), u = Math.min(2 * u, 36e5)
                    }
                    async function d(t) {
                        try {
                            let e = await r.send(t),
                                n = 100;
                            if (e) {
                                if (e.headers && e.headers["retry-after"]) n = (0, s.JY)(e.headers["retry-after"]);
                                else if ((e.statusCode || 0) >= 400) return e
                            }
                            return l(n), u = 5e3, e
                        } catch (r) {
                            var n, d, h;
                            if (o && await (n = t, d = r, h = u, !(0, i.R)(n, ["replay_event", "replay_recording", "client_report"]) && (!e.shouldStore || e.shouldStore(n, d, h)))) return await o.insert(t), c(), a("Error sending. Event queued", r), {};
                            throw r
                        }
                    }
                    return e.flushAtStartup && c(), {
                        send: d,
                        flush: t => r.flush(t)
                    }
                }
            }
        },
        633401: function(t, e, n) {
            "use strict";
            n.d(e, {
                z: function() {
                    return i
                }
            });
            var r = n(876122);

            function i(t) {
                if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
                let e = (0, r.Gd)().getClient(),
                    n = t || e && e.getOptions();
                return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
            }
        },
        392405: function(t, e, n) {
            "use strict";
            n.d(e, {
                R: function() {
                    return d
                }
            });
            var r = n(862315),
                i = n(868145),
                s = n(880803),
                a = n(336344),
                o = n(24716),
                u = n(10674),
                l = n(28434),
                c = n(703498);

            function d(t, e, n, d) {
                let {
                    normalizeDepth: _ = 3,
                    normalizeMaxBreadth: f = 1e3
                } = t, p = {
                    ...e,
                    event_id: e.event_id || n.event_id || (0, r.DM)(),
                    timestamp: e.timestamp || (0, i.yW)()
                }, m = n.integrations || t.integrations.map(t => t.name);
                (function(t, e) {
                    let {
                        environment: n,
                        release: r,
                        dist: i,
                        maxValueLength: s = 250
                    } = e;
                    !("environment" in t) && (t.environment = "environment" in e ? n : l.J), void 0 === t.release && void 0 !== r && (t.release = r), void 0 === t.dist && void 0 !== i && (t.dist = i), t.message && (t.message = (0, a.$G)(t.message, s));
                    let o = t.exception && t.exception.values && t.exception.values[0];
                    o && o.value && (o.value = (0, a.$G)(o.value, s));
                    let u = t.request;
                    u && u.url && (u.url = (0, a.$G)(u.url, s))
                })(p, t),
                function(t, e) {
                    e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
                }(p, m), void 0 === e.type && function(t, e) {
                    let n;
                    let r = o.n2._sentryDebugIds;
                    if (!r) return;
                    let i = h.get(e);
                    i ? n = i : (n = new Map, h.set(e, n));
                    let s = Object.keys(r).reduce((t, i) => {
                        let s;
                        let a = n.get(i);
                        a ? s = a : (s = e(i), n.set(i, s));
                        for (let e = s.length - 1; e >= 0; e--) {
                            let n = s[e];
                            if (n.filename) {
                                t[n.filename] = r[i];
                                break
                            }
                        }
                        return t
                    }, {});
                    try {
                        t.exception.values.forEach(t => {
                            t.stacktrace.frames.forEach(t => {
                                t.filename && (t.debug_id = s[t.filename])
                            })
                        })
                    } catch (t) {}
                }(p, t.stackParser);
                let g = d;
                n.captureContext && (g = c.s.clone(g).update(n.captureContext));
                let y = (0, s.WD)(p);
                if (g) {
                    if (g.getAttachments) {
                        let t = [...n.attachments || [], ...g.getAttachments()];
                        t.length && (n.attachments = t)
                    }
                    y = g.applyToEvent(p, n)
                }
                return y.then(t => (t && function(t) {
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
                }(t), "number" == typeof _ && _ > 0) ? function(t, e, n) {
                    if (!t) return null;
                    let r = {
                        ...t,
                        ...t.breadcrumbs && {
                            breadcrumbs: t.breadcrumbs.map(t => ({
                                ...t,
                                ...t.data && {
                                    data: (0, u.Fv)(t.data, e, n)
                                }
                            }))
                        },
                        ...t.user && {
                            user: (0, u.Fv)(t.user, e, n)
                        },
                        ...t.contexts && {
                            contexts: (0, u.Fv)(t.contexts, e, n)
                        },
                        ...t.extra && {
                            extra: (0, u.Fv)(t.extra, e, n)
                        }
                    };
                    return t.contexts && t.contexts.trace && r.contexts && (r.contexts.trace = t.contexts.trace, t.contexts.trace.data && (r.contexts.trace.data = (0, u.Fv)(t.contexts.trace.data, e, n))), t.spans && (r.spans = t.spans.map(t => (t.data && (t.data = (0, u.Fv)(t.data, e, n)), t))), r
                }(t, _, f) : t)
            }
            let h = new WeakMap
        },
        139782: function(t, e, n) {
            "use strict";
            n.d(e, {
                J: function() {
                    return r
                }
            });
            let r = "7.60.1"
        },
        438142: function(t, e, n) {
            "use strict";
            let r, i, s, a, o;
            n.d(e, {
                U: function() {
                    return nn
                }
            });
            var u, l, c, d, h, _, f, p, m, g, y, v, b, E, S, w, k = n(876122),
                T = n(703498),
                R = n(392405),
                x = n(138122),
                D = n(24716),
                N = n(10674),
                C = n(442853),
                U = n(829919),
                I = n(529866),
                A = n(862315),
                O = n(793884),
                B = n(336344),
                G = n(868145),
                M = n(50074),
                Y = n(635602),
                L = n(444675);
            let z = D.n2,
                $ = "sentryReplaySession",
                P = "Unable to send Replay";
            (u = m || (m = {}))[u.Document = 0] = "Document", u[u.DocumentType = 1] = "DocumentType", u[u.Element = 2] = "Element", u[u.Text = 3] = "Text", u[u.CDATA = 4] = "CDATA", u[u.Comment = 5] = "Comment";

            function F(t) {
                let e = null == t ? void 0 : t.host;
                return !!(e && e.shadowRoot && e.shadowRoot === t)
            }

            function j({
                maskInputOptions: t,
                tagName: e,
                type: n
            }) {
                "option" === e.toLowerCase() && (e = "select");
                let r = "string" == typeof n ? n.toLowerCase() : void 0;
                return t[e.toLowerCase()] || r && t[r] || "password" === r || "input" === e && !n && t.text
            }

            function H({
                input: t,
                maskInputSelector: e,
                unmaskInputSelector: n,
                maskInputOptions: r,
                tagName: i,
                type: s,
                value: a,
                maskInputFn: o
            }) {
                let u = a || "";
                return n && t.matches(n) ? u : (t.hasAttribute("data-rr-is-password") && (s = "password"), (j({
                    maskInputOptions: r,
                    tagName: i,
                    type: s
                }) || e && t.matches(e)) && (u = o ? o(u) : "*".repeat(u.length)), u)
            }
            let q = "__rrweb_original__";

            function W(t) {
                let e = t.type;
                return t.hasAttribute("data-rr-is-password") ? "password" : e ? e.toLowerCase() : null
            }

            function Z(t, e, n) {
                return ("string" == typeof n && n.toLowerCase(), "INPUT" === e && ("radio" === n || "checkbox" === n)) ? t.getAttribute("value") || "" : t.value
            }
            let J = 1,
                V = RegExp("[^a-z0-9-_:]");

            function K(t) {
                return t ? t.replace(/[\S]/g, "*") : ""
            }

            function X(t) {
                try {
                    let e = t.rules || t.cssRules;
                    return e ? Array.from(e).map(Q).join("") : null
                } catch (t) {
                    return null
                }
            }

            function Q(t) {
                let e = t.cssText;
                if (function(t) {
                        return "styleSheet" in t
                    }(t)) try {
                    e = X(t.styleSheet) || e
                } catch (t) {}
                return tt(e)
            }

            function tt(t) {
                return t.indexOf(":") > -1 ? t.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2") : t
            }
            let te = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
                tn = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,
                tr = /^(data:)([^,]*),(.*)/i;

            function ti(t, e) {
                return (t || "").replace(te, (t, n, r, i, s, a) => {
                    let o = r || s || a,
                        u = n || i || "";
                    if (!o) return t;
                    if (!tn.test(o) || tr.test(o)) return `url(${u}${o}${u})`;
                    if ("/" === o[0]) {
                        var l;
                        let t;
                        return `url(${u}${t="",(t=(t=(l=e).indexOf("//")>-1?l.split("/").slice(0,3).join("/"):l.split("/")[0]).split("?")[0])+o}${u})`
                    }
                    let c = e.split("/"),
                        d = o.split("/");
                    for (let t of (c.pop(), d)) {
                        if ("." !== t) ".." === t ? c.pop() : c.push(t)
                    }
                    return `url(${u}${c.join("/")}${u})`
                })
            }
            let ts = /^[^ \t\n\r\u000c]+/,
                ta = /^[, \t\n\r\u000c]+/;

            function to(t, e) {
                if (!e || "" === e.trim()) return e;
                let n = t.createElement("a");
                return n.href = e, n.href
            }

            function tu() {
                let t = document.createElement("a");
                return t.href = "", t.href
            }

            function tl(t, e, n, r, i, s, a, o) {
                if (!i) return i;
                let u = r.toLowerCase(),
                    l = n.toLowerCase();
                if ("src" === u || "href" === u) return to(t, i);
                if ("xlink:href" === u && "#" !== i[0]) return to(t, i);
                if ("background" === u && ("table" === l || "td" === l || "th" === l)) return to(t, i);
                else if ("srcset" === u) return function(t, e) {
                    if ("" === e.trim()) return e;
                    let n = 0;

                    function r(t) {
                        let r;
                        let i = t.exec(e.substring(n));
                        return i ? (r = i[0], n += r.length, r) : ""
                    }
                    let i = [];
                    for (; r(ta), !(n >= e.length);) {
                        ;
                        let s = r(ts);
                        if ("," === s.slice(-1)) s = to(t, s.substring(0, s.length - 1)), i.push(s);
                        else {
                            let r = "";
                            s = to(t, s);
                            let a = !1;
                            for (;;) {
                                let t = e.charAt(n);
                                if ("" === t) {
                                    i.push((s + r).trim());
                                    break
                                }
                                if (a) ")" === t && (a = !1);
                                else {
                                    if ("," === t) {
                                        n += 1, i.push((s + r).trim());
                                        break
                                    }
                                    "(" === t && (a = !0)
                                }
                                r += t, n += 1
                            }
                        }
                    }
                    return i.join(", ")
                }(t, i);
                else if ("style" === u) return ti(i, tu());
                else if ("object" === l && "data" === u) return to(t, i);
                else if (s && function(t, e, n, r) {
                        return !(r && t.matches(r)) && (["placeholder", "title", "aria-label"].indexOf(e) > -1 || "input" === n && "value" === e && t.hasAttribute("type") && ["submit", "button"].indexOf(t.getAttribute("type").toLowerCase()) > -1)
                    }(e, u, l, a)) return o ? o(i) : K(i);
                return i
            }

            function tc(t, e, n, r, i) {
                if (!t) return !1;
                if (t.nodeType !== t.ELEMENT_NODE) return tc(t.parentNode, e, n, r, i);
                if (r && (t.matches(r) || t.closest(r))) return !1;
                if (i) return !0;
                if ("string" == typeof e) {
                    if (t.classList.contains(e)) return !0
                } else
                    for (let n = 0; n < t.classList.length; n++) {
                        let r = t.classList[n];
                        if (e.test(r)) return !0
                    }
                return !!(n && t.matches(n)) || tc(t.parentNode, e, n, r, i)
            }

            function td(t) {
                return null == t ? "" : t.toLowerCase()
            }

            function th(t, e) {
                let n;
                let {
                    doc: s,
                    map: a,
                    blockClass: o,
                    blockSelector: u,
                    unblockSelector: l,
                    maskTextClass: c,
                    maskTextSelector: d,
                    unmaskTextSelector: h,
                    skipChild: _ = !1,
                    inlineStylesheet: f = !0,
                    maskInputSelector: p,
                    unmaskInputSelector: g,
                    maskAllText: y,
                    maskInputOptions: v = {},
                    maskTextFn: b,
                    maskInputFn: E,
                    slimDOMOptions: S,
                    dataURLOptions: w = {},
                    inlineImages: k = !1,
                    recordCanvas: T = !1,
                    onSerialize: R,
                    onIframeLoad: x,
                    iframeLoadTimeout: D = 5e3,
                    keepIframeSrcFn: N = () => !1
                } = e, {
                    preserveWhiteSpace: C = !0
                } = e, U = function(t, e) {
                    var n, s, a;
                    let o;
                    let {
                        doc: u,
                        blockClass: l,
                        blockSelector: c,
                        unblockSelector: d,
                        maskTextClass: h,
                        maskTextSelector: _,
                        unmaskTextSelector: f,
                        inlineStylesheet: p,
                        maskInputSelector: g,
                        unmaskInputSelector: y,
                        maskAllText: v,
                        maskInputOptions: b = {},
                        maskTextFn: E,
                        maskInputFn: S,
                        dataURLOptions: w = {},
                        inlineImages: k,
                        recordCanvas: T,
                        keepIframeSrcFn: R
                    } = e;
                    if (u.__sn) {
                        let t = u.__sn.id;
                        o = 1 === t ? void 0 : t
                    }
                    switch (t.nodeType) {
                        case t.DOCUMENT_NODE:
                            if ("CSS1Compat" !== t.compatMode) return {
                                type: m.Document,
                                childNodes: [],
                                compatMode: t.compatMode,
                                rootId: o
                            };
                            return {
                                type: m.Document, childNodes: [], rootId: o
                            };
                        case t.DOCUMENT_TYPE_NODE:
                            return {
                                type: m.DocumentType, name: t.name, publicId: t.publicId, systemId: t.systemId, rootId: o
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
                                }(t, l, c, d),
                                D = function(t) {
                                    if (t instanceof HTMLFormElement) return "form";
                                    let e = t.tagName.toLowerCase().trim();
                                    return V.test(e) ? "div" : e
                                }(t),
                                N = {};
                            for (let {
                                    name: e,
                                    value: n
                                }
                                of Array.from(t.attributes)) ! function(t, e, n) {
                                return ("video" === t || "audio" === t) && "autoplay" === e
                            }(D, e) && (N[e] = tl(u, t, D, e, n, v, f, E));
                            if ("link" === D && p) {
                                let e = Array.from(u.styleSheets).find(e => e.href === t.href),
                                    n = null;
                                e && (n = X(e)), n && (delete N.rel, delete N.href, N._cssText = ti(n, e.href))
                            }
                            if ("style" === D && t.sheet && !(t.innerText || t.textContent || "").trim().length) {
                                let e = X(t.sheet);
                                e && (N._cssText = ti(e, tu()))
                            }
                            if ("input" === D || "textarea" === D || "select" === D || "option" === D) {
                                let e = W(t),
                                    n = Z(t, D.toUpperCase(), e),
                                    r = t.checked;
                                "submit" !== e && "button" !== e && n && (N.value = H({
                                    input: t,
                                    type: e,
                                    tagName: D,
                                    value: n,
                                    maskInputSelector: g,
                                    unmaskInputSelector: y,
                                    maskInputOptions: b,
                                    maskInputFn: S
                                })), r && (N.checked = r)
                            }
                            if ("option" === D && (t.selected && !b.select ? N.selected = !0 : delete N.selected), "canvas" === D && T) {
                                if ("2d" === t.__context) ! function(t) {
                                    let e = t.getContext("2d");
                                    if (!e) return !0;
                                    for (let n = 0; n < t.width; n += 50)
                                        for (let r = 0; r < t.height; r += 50) {
                                            let i = e.getImageData;
                                            if (new Uint32Array((q in i ? i[q] : i).call(e, n, r, Math.min(50, t.width - n), Math.min(50, t.height - r)).data.buffer).some(t => 0 !== t)) return !1
                                        }
                                    return !0
                                }(t) && (N.rr_dataURL = t.toDataURL(w.type, w.quality));
                                else if (!("__context" in t)) {
                                    let e = t.toDataURL(w.type, w.quality),
                                        n = document.createElement("canvas");
                                    n.width = t.width, n.height = t.height, e !== n.toDataURL(w.type, w.quality) && (N.rr_dataURL = e)
                                }
                            }
                            if ("img" === D && k) {
                                !r && (i = (r = u.createElement("canvas")).getContext("2d"));
                                let e = t.crossOrigin;
                                t.crossOrigin = "anonymous";
                                let n = () => {
                                    try {
                                        r.width = t.naturalWidth, r.height = t.naturalHeight, i.drawImage(t, 0, 0), N.rr_dataURL = r.toDataURL(w.type, w.quality)
                                    } catch (e) {
                                        console.warn(`Cannot inline img src=${t.currentSrc}! Error: ${e}`)
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
                                    rr_width: `${e}px`,
                                    rr_height: `${n}px`
                                }
                            }
                            return "iframe" === D && !R(N.src) && (!t.contentDocument && (N.rr_src = N.src), delete N.src), {
                                type: m.Element,
                                tagName: D,
                                attributes: N,
                                childNodes: [],
                                isSVG: !!("svg" === (s = t).tagName || s.ownerSVGElement) || void 0,
                                needBlock: x,
                                rootId: o
                            };
                        case t.TEXT_NODE:
                            let C = t.parentNode && t.parentNode.tagName,
                                U = t.textContent,
                                I = "STYLE" === C || void 0,
                                A = "SCRIPT" === C || void 0;
                            if (I && U) {
                                try {
                                    if (t.nextSibling || t.previousSibling);
                                    else if (null === (n = t.parentNode.sheet) || void 0 === n ? void 0 : n.cssRules) {
                                        ;
                                        U = (a = t.parentNode.sheet).cssRules ? Array.from(a.cssRules).map(t => t.cssText ? tt(t.cssText) : "").join("") : ""
                                    }
                                } catch (e) {
                                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${e}`, t)
                                }
                                U = ti(U, tu())
                            }
                            return A && (U = "SCRIPT_PLACEHOLDER"), "TEXTAREA" === C && U ? U = "" : "OPTION" === C && U ? U = H({
                                input: t.parentNode,
                                type: null,
                                tagName: C,
                                value: U,
                                maskInputSelector: g,
                                unmaskInputSelector: y,
                                maskInputOptions: b,
                                maskInputFn: S
                            }) : !I && !A && tc(t, h, _, f, v) && U && (U = E ? E(U) : K(U)), {
                                type: m.Text,
                                textContent: U || "",
                                isStyle: I,
                                rootId: o
                            };
                        case t.CDATA_SECTION_NODE:
                            return {
                                type: m.CDATA, textContent: "", rootId: o
                            };
                        case t.COMMENT_NODE:
                            return {
                                type: m.Comment, textContent: t.textContent || "", rootId: o
                            };
                        default:
                            return !1
                    }
                }(t, {
                    doc: s,
                    blockClass: o,
                    blockSelector: u,
                    unblockSelector: l,
                    maskTextClass: c,
                    maskTextSelector: d,
                    unmaskTextSelector: h,
                    inlineStylesheet: f,
                    maskInputSelector: p,
                    unmaskInputSelector: g,
                    maskAllText: y,
                    maskInputOptions: v,
                    maskTextFn: b,
                    maskInputFn: E,
                    dataURLOptions: w,
                    inlineImages: k,
                    recordCanvas: T,
                    keepIframeSrcFn: N
                });
                if (!U) return console.warn(t, "not serialized"), null;
                n = "__sn" in t ? t.__sn.id : ! function(t, e) {
                    if (e.comment && t.type === m.Comment) return !0;
                    if (t.type === m.Element) {
                        if (e.script && ("script" === t.tagName || "link" === t.tagName && ("preload" === t.attributes.rel || "modulepreload" === t.attributes.rel) && "script" === t.attributes.as || "link" === t.tagName && "prefetch" === t.attributes.rel && "string" == typeof t.attributes.href && t.attributes.href.endsWith(".js"))) return !0;
                        if (e.headFavicon && ("link" === t.tagName && "shortcut icon" === t.attributes.rel || "meta" === t.tagName && (td(t.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === td(t.attributes.name) || "icon" === td(t.attributes.rel) || "apple-touch-icon" === td(t.attributes.rel) || "shortcut icon" === td(t.attributes.rel)))) return !0;
                        else if ("meta" === t.tagName) {
                            if (e.headMetaDescKeywords && td(t.attributes.name).match(/^description|keywords$/)) return !0;
                            if (e.headMetaSocial && (td(t.attributes.property).match(/^(og|twitter|fb):/) || td(t.attributes.name).match(/^(og|twitter):/) || "pinterest" === td(t.attributes.name))) return !0;
                            else if (e.headMetaRobots && ("robots" === td(t.attributes.name) || "googlebot" === td(t.attributes.name) || "bingbot" === td(t.attributes.name))) return !0;
                            else if (e.headMetaHttpEquiv && void 0 !== t.attributes["http-equiv"]) return !0;
                            else if (e.headMetaAuthorship && ("author" === td(t.attributes.name) || "generator" === td(t.attributes.name) || "framework" === td(t.attributes.name) || "publisher" === td(t.attributes.name) || "progid" === td(t.attributes.name) || td(t.attributes.property).match(/^article:/) || td(t.attributes.property).match(/^product:/))) return !0;
                            else if (e.headMetaVerification && ("google-site-verification" === td(t.attributes.name) || "yandex-verification" === td(t.attributes.name) || "csrf-token" === td(t.attributes.name) || "p:domain_verify" === td(t.attributes.name) || "verify-v1" === td(t.attributes.name) || "verification" === td(t.attributes.name) || "shopify-checkout-api-token" === td(t.attributes.name))) return !0
                        }
                    }
                    return !1
                }(U, S) && (C || U.type !== m.Text || U.isStyle || U.textContent.replace(/^\s+|\s+$/gm, "").length) ? J++ : -2;
                let I = Object.assign(U, {
                    id: n
                });
                if (t.__sn = I, -2 === n) return null;
                a[n] = t, R && R(t);
                let A = !_;
                if (I.type === m.Element && (A = A && !I.needBlock, delete I.needBlock, t.shadowRoot && (I.isShadowHost = !0)), (I.type === m.Document || I.type === m.Element) && A) {
                    var O;
                    S.headWhitespace && U.type === m.Element && "head" === U.tagName && (C = !1);
                    let e = {
                        doc: s,
                        map: a,
                        blockClass: o,
                        blockSelector: u,
                        unblockSelector: l,
                        maskTextClass: c,
                        maskTextSelector: d,
                        unmaskTextSelector: h,
                        skipChild: _,
                        inlineStylesheet: f,
                        maskInputSelector: p,
                        unmaskInputSelector: g,
                        maskAllText: y,
                        maskInputOptions: v,
                        maskTextFn: b,
                        maskInputFn: E,
                        slimDOMOptions: S,
                        dataURLOptions: w,
                        inlineImages: k,
                        recordCanvas: T,
                        preserveWhiteSpace: C,
                        onSerialize: R,
                        onIframeLoad: x,
                        iframeLoadTimeout: D,
                        keepIframeSrcFn: N
                    };
                    for (let n of Array.from(t.childNodes)) {
                        let t = th(n, e);
                        t && I.childNodes.push(t)
                    }
                    if ((O = t).nodeType === O.ELEMENT_NODE && t.shadowRoot)
                        for (let n of Array.from(t.shadowRoot.childNodes)) {
                            let t = th(n, e);
                            t && (t.isShadow = !0, I.childNodes.push(t))
                        }
                }
                return t.parentNode && F(t.parentNode) && (I.isShadow = !0), I.type === m.Element && "iframe" === I.tagName && ! function(t, e, n) {
                    let r;
                    let i = t.contentWindow;
                    if (!i) return;
                    let s = !1;
                    try {
                        r = i.document.readyState
                    } catch (t) {
                        return
                    }
                    if ("complete" !== r) {
                        let r = setTimeout(() => {
                            !s && (e(), s = !0)
                        }, n);
                        t.addEventListener("load", () => {
                            clearTimeout(r), s = !0, e()
                        });
                        return
                    }
                    let a = "about:blank";
                    if (i.location.href !== a || t.src === a || "" === t.src) {
                        setTimeout(e, 0);
                        return
                    }
                    t.addEventListener("load", e)
                }(t, () => {
                    let e = t.contentDocument;
                    if (e && x) {
                        let n = th(e, {
                            doc: e,
                            map: a,
                            blockClass: o,
                            blockSelector: u,
                            unblockSelector: l,
                            maskTextClass: c,
                            maskTextSelector: d,
                            unmaskTextSelector: h,
                            skipChild: !1,
                            inlineStylesheet: f,
                            maskInputSelector: p,
                            unmaskInputSelector: g,
                            maskAllText: y,
                            maskInputOptions: v,
                            maskTextFn: b,
                            maskInputFn: E,
                            slimDOMOptions: S,
                            dataURLOptions: w,
                            inlineImages: k,
                            recordCanvas: T,
                            preserveWhiteSpace: C,
                            onSerialize: R,
                            onIframeLoad: x,
                            iframeLoadTimeout: D,
                            keepIframeSrcFn: N
                        });
                        n && x(t, n)
                    }
                }, D), I
            }

            function t_(t, e, n = document) {
                let r = {
                    capture: !0,
                    passive: !0
                };
                return n.addEventListener(t, e, r), () => n.removeEventListener(t, e, r)
            }(l = g || (g = {}))[l.DomContentLoaded = 0] = "DomContentLoaded", l[l.Load = 1] = "Load", l[l.FullSnapshot = 2] = "FullSnapshot", l[l.IncrementalSnapshot = 3] = "IncrementalSnapshot", l[l.Meta = 4] = "Meta", l[l.Custom = 5] = "Custom", l[l.Plugin = 6] = "Plugin", (c = y || (y = {}))[c.Mutation = 0] = "Mutation", c[c.MouseMove = 1] = "MouseMove", c[c.MouseInteraction = 2] = "MouseInteraction", c[c.Scroll = 3] = "Scroll", c[c.ViewportResize = 4] = "ViewportResize", c[c.Input = 5] = "Input", c[c.TouchMove = 6] = "TouchMove", c[c.MediaInteraction = 7] = "MediaInteraction", c[c.StyleSheetRule = 8] = "StyleSheetRule", c[c.CanvasMutation = 9] = "CanvasMutation", c[c.Font = 10] = "Font", c[c.Log = 11] = "Log", c[c.Drag = 12] = "Drag", c[c.StyleDeclaration = 13] = "StyleDeclaration", (d = v || (v = {}))[d.MouseUp = 0] = "MouseUp", d[d.MouseDown = 1] = "MouseDown", d[d.Click = 2] = "Click", d[d.ContextMenu = 3] = "ContextMenu", d[d.DblClick = 4] = "DblClick", d[d.Focus = 5] = "Focus", d[d.Blur = 6] = "Blur", d[d.TouchStart = 7] = "TouchStart", d[d.TouchMove_Departed = 8] = "TouchMove_Departed", d[d.TouchEnd = 9] = "TouchEnd", d[d.TouchCancel = 10] = "TouchCancel", (h = b || (b = {}))[h["2D"] = 0] = "2D", h[h.WebGL = 1] = "WebGL", h[h.WebGL2 = 2] = "WebGL2", (_ = E || (E = {}))[_.Play = 0] = "Play", _[_.Pause = 1] = "Pause", _[_.Seeked = 2] = "Seeked", _[_.VolumeChange = 3] = "VolumeChange", (f = S || (S = {})).Start = "start", f.Pause = "pause", f.Resume = "resume", f.Resize = "resize", f.Finish = "finish", f.FullsnapshotRebuilded = "fullsnapshot-rebuilded", f.LoadStylesheetStart = "load-stylesheet-start", f.LoadStylesheetEnd = "load-stylesheet-end", f.SkipStart = "skip-start", f.SkipEnd = "skip-end", f.MouseInteraction = "mouse-interaction", f.EventCast = "event-cast", f.CustomEvent = "custom-event", f.Flush = "flush", f.StateChange = "state-change", f.PlayBack = "play-back";
            let tf = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
                tp = {
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

            function tm(t, e, n = {}) {
                let r = null,
                    i = 0;
                return function(s) {
                    let a = Date.now();
                    !i && !1 === n.leading && (i = a);
                    let o = e - (a - i),
                        u = this,
                        l = arguments;
                    o <= 0 || o > e ? (r && (clearTimeout(r), r = null), i = a, t.apply(u, l)) : !r && !1 !== n.trailing && (r = setTimeout(() => {
                        i = !1 === n.leading ? 0 : Date.now(), r = null, t.apply(u, l)
                    }, o))
                }
            }

            function tg(t, e, n, r, i = window) {
                let s = i.Object.getOwnPropertyDescriptor(t, e);
                return i.Object.defineProperty(t, e, r ? n : {
                    set(t) {
                        setTimeout(() => {
                            n.set.call(this, t)
                        }, 0), s && s.set && s.set.call(this, t)
                    }
                }), () => tg(t, e, s || {}, !0)
            }

            function ty(t, e, n) {
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

            function tv() {
                return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
            }

            function tb() {
                return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
            }

            function tE(t, e, n, r) {
                if (!t) return !1;
                if (t.nodeType === t.ELEMENT_NODE) {
                    let i = !1,
                        s = r && t.matches(r);
                    return "string" == typeof e ? i = void 0 !== t.closest ? !s && null !== t.closest("." + e) : !s && t.classList.contains(e) : s || t.classList.forEach(t => {
                        e.test(t) && (i = !0)
                    }), !i && n && (i = t.matches(n)), !s && i || tE(t.parentNode, e, n, r)
                }
                return t.nodeType, t.TEXT_NODE, tE(t.parentNode, e, n, r)
            }

            function tS(t) {
                return "__sn" in t && -2 === t.__sn.id
            }
            "undefined" != typeof window && window.Proxy && window.Reflect && (tp = new Proxy(tp, {
                get: (t, e, n) => ("map" === e && console.error(tf), Reflect.get(t, e, n))
            }));

            function tw(t) {
                return !!t.changedTouches
            }

            function tk(t) {
                return "__sn" in t && t.__sn.type === m.Element && "iframe" === t.__sn.tagName
            }

            function tT(t) {
                return !!(null == t ? void 0 : t.shadowRoot)
            }

            function tR(t) {
                return "__ln" in t
            }
            class tx {
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
                    if (!!this.head) e.previous ? (e.previous.next = e.next, e.next && (e.next.previous = e.previous)) : (this.head = e.next, this.head && (this.head.previous = null)), t.__ln && delete t.__ln, this.length--
                }
            }
            let tD = (t, e) => `${t}@${e}`;

            function tN(t) {
                return "__sn" in t
            }
            class tC {
                constructor() {
                    this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = t => {
                        t.forEach(this.processMutation), this.emit()
                    }, this.emit = () => {
                        if (this.frozen || this.locked) return;
                        let t = [],
                            e = new tx,
                            n = t => {
                                let e = t,
                                    n = -2;
                                for (; - 2 === n;) n = (e = e && e.nextSibling) && this.mirror.getId(e);
                                return n
                            },
                            r = r => {
                                var i, s, a, o, u;
                                let l = r.getRootNode ? null === (i = r.getRootNode()) || void 0 === i ? void 0 : i.host : null,
                                    c = l;
                                for (; null === (a = null === (s = null == c ? void 0 : c.getRootNode) || void 0 === s ? void 0 : s.call(c)) || void 0 === a ? void 0 : a.host;) c = (null === (u = null === (o = null == c ? void 0 : c.getRootNode) || void 0 === o ? void 0 : o.call(c)) || void 0 === u ? void 0 : u.host) || null;
                                let d = !this.doc.contains(r) && (!c || !this.doc.contains(c));
                                if (!r.parentNode || d) return;
                                let h = F(r.parentNode) ? this.mirror.getId(l) : this.mirror.getId(r.parentNode),
                                    _ = n(r);
                                if (-1 === h || -1 === _) return e.addNode(r);
                                let f = th(r, {
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
                                        tk(t) && this.iframeManager.addIframe(t), tT(r) && this.shadowDomManager.addShadowRoot(r.shadowRoot, document)
                                    },
                                    onIframeLoad: (t, e) => {
                                        this.iframeManager.attachIframe(t, e), this.shadowDomManager.observeAttachShadow(t)
                                    }
                                });
                                f && t.push({
                                    parentId: h,
                                    nextId: _,
                                    node: f
                                })
                            };
                        for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                        for (let t of this.movedSet) {
                            if (!tI(this.removes, t, this.mirror) || !!this.movedSet.has(t.parentNode)) r(t)
                        }
                        for (let t of this.addedSet) tA(this.droppedSet, t) || tI(this.removes, t, this.mirror) ? tA(this.movedSet, t) ? r(t) : this.droppedSet.add(t) : r(t);
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
                        let s = {
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
                        if (!!s.texts.length || !!s.attributes.length || !!s.removes.length || !!s.adds.length) this.texts = [], this.attributes = [], this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(s)
                    }, this.processMutation = t => {
                        if (!tS(t.target)) switch (t.type) {
                            case "characterData": {
                                let e = t.target.textContent;
                                !tE(t.target, this.blockClass, this.blockSelector, this.unblockSelector) && e !== t.oldValue && this.texts.push({
                                    value: tc(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextSelector, this.maskAllText) && e ? this.maskTextFn ? this.maskTextFn(e) : e.replace(/[\S]/g, "*") : e,
                                    node: t.target
                                });
                                break
                            }
                            case "attributes": {
                                let e = t.target,
                                    n = e.getAttribute(t.attributeName);
                                if ("value" === t.attributeName && (n = H({
                                        input: e,
                                        maskInputSelector: this.maskInputSelector,
                                        unmaskInputSelector: this.unmaskInputSelector,
                                        maskInputOptions: this.maskInputOptions,
                                        tagName: e.tagName,
                                        type: e.getAttribute("type"),
                                        value: n,
                                        maskInputFn: this.maskInputFn
                                    })), tE(t.target, this.blockClass, this.blockSelector, this.unblockSelector) || n === t.oldValue) return;
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
                                                s = e.style.getPropertyPriority(r);
                                            (i !== n.style.getPropertyValue(r) || s !== n.style.getPropertyPriority(r)) && ("" === s ? t[r] = i : t[r] = [i, s])
                                        }
                                        for (let r of Array.from(n.style)) "" === e.style.getPropertyValue(r) && (t[r] = !1)
                                    } catch (t) {
                                        console.warn("[rrweb] Error when parsing update to style attribute:", t)
                                    }
                                } else {
                                    let e = t.target;
                                    r.attributes[t.attributeName] = tl(this.doc, e, e.tagName, t.attributeName, n, this.maskAllText, this.unmaskTextSelector, this.maskTextFn)
                                }
                                break
                            }
                            case "childList":
                                t.addedNodes.forEach(e => this.genAdds(e, t.target)), t.removedNodes.forEach(e => {
                                    let n = this.mirror.getId(e),
                                        r = F(t.target) ? this.mirror.getId(t.target.host) : this.mirror.getId(t.target);
                                    if (!(tE(t.target, this.blockClass, this.blockSelector, this.unblockSelector) || tS(e))) this.addedSet.has(e) ? (tU(this.addedSet, e), this.droppedSet.add(e)) : this.addedSet.has(t.target) && -1 === n || function t(e, n) {
                                        if (F(e)) return !1;
                                        let r = n.getId(e);
                                        return !n.has(r) || (!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || t(e.parentNode, n))
                                    }(t.target, this.mirror) || (this.movedSet.has(e) && this.movedMap[tD(n, r)] ? tU(this.movedSet, e) : this.removes.push({
                                        parentId: r,
                                        id: n,
                                        isShadow: !!F(t.target) || void 0
                                    })), this.mapRemoves.push(e)
                                })
                        }
                    }, this.genAdds = (t, e) => {
                        if (!(e && tE(e, this.blockClass, this.blockSelector, this.unblockSelector))) {
                            if ("__sn" in t) {
                                if (tS(t)) return;
                                this.movedSet.add(t);
                                let n = null;
                                if (e && "__sn" in e) n = e.__sn.id;
                                n && (this.movedMap[tD(t.__sn.id, n)] = !0)
                            } else this.addedSet.add(t), this.droppedSet.delete(t);
                            !tE(t, this.blockClass, this.blockSelector, this.unblockSelector) && t.childNodes.forEach(t => this.genAdds(t))
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

            function tU(t, e) {
                t.delete(e), e.childNodes.forEach(e => tU(t, e))
            }

            function tI(t, e, n) {
                let {
                    parentNode: r
                } = e;
                if (!r) return !1;
                let i = n.getId(r);
                return !!t.some(t => t.id === i) || tI(t, r, n)
            }

            function tA(t, e) {
                let {
                    parentNode: n
                } = e;
                return !!n && (!!t.has(n) || tA(t, n))
            }
            let tO = t => (...e) => {
                    try {
                        return t(...e)
                    } catch (t) {
                        try {
                            t.__rrweb__ = !0
                        } catch (t) {}
                        throw t
                    }
                },
                tB = [];

            function tG(t) {
                try {
                    if ("composedPath" in t) {
                        let e = t.composedPath();
                        if (e.length) return e[0]
                    } else if ("path" in t && t.path.length) return t.path[0]
                } catch (t) {}
                return t && t.target
            }

            function tM(t, e) {
                var n, r;
                let i = new tC;
                tB.push(i), i.init(t);
                let s = window.MutationObserver || window.__rrMutationObserver,
                    a = null === (r = null === (n = null == window ? void 0 : window.Zone) || void 0 === n ? void 0 : n.__symbol__) || void 0 === r ? void 0 : r.call(n, "MutationObserver");
                a && window[a] && (s = window[a]);
                let o = new s(tO(e => {
                    if (!t.onMutation || !1 !== t.onMutation(e)) i.processMutations(e)
                }));
                return o.observe(e, {
                    attributes: !0,
                    attributeOldValue: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    childList: !0,
                    subtree: !0
                }), o
            }

            function tY({
                scrollCb: t,
                doc: e,
                mirror: n,
                blockClass: r,
                blockSelector: i,
                unblockSelector: s,
                sampling: a
            }) {
                let o = tm(a => {
                    let o = tG(a);
                    if (!o || tE(o, r, i, s)) return;
                    let u = n.getId(o);
                    if (o === e) {
                        let n = e.scrollingElement || e.documentElement;
                        tO(t)({
                            id: u,
                            x: n.scrollLeft,
                            y: n.scrollTop
                        })
                    } else tO(t)({
                        id: u,
                        x: o.scrollLeft,
                        y: o.scrollTop
                    })
                }, a.scroll || 100);
                return t_("scroll", tO(o), e)
            }

            function tL(t, e) {
                let n = Object.assign({}, t);
                return !e && delete n.userTriggered, n
            }
            let tz = ["INPUT", "TEXTAREA", "SELECT"],
                t$ = new WeakMap;

            function tP(t) {
                return function(t, e) {
                    if (tj("CSSGroupingRule") && t.parentRule instanceof CSSGroupingRule || tj("CSSMediaRule") && t.parentRule instanceof CSSMediaRule || tj("CSSSupportsRule") && t.parentRule instanceof CSSSupportsRule || tj("CSSConditionRule") && t.parentRule instanceof CSSConditionRule) {
                        let n = Array.from(t.parentRule.cssRules).indexOf(t);
                        e.unshift(n)
                    } else {
                        let n = Array.from(t.parentStyleSheet.cssRules).indexOf(t);
                        e.unshift(n)
                    }
                    return e
                }(t, [])
            }

            function tF(t, e = {}) {
                let n = t.doc.defaultView;
                if (!n) return () => {};
                ! function(t, e) {
                    let {
                        mutationCb: n,
                        mousemoveCb: r,
                        mouseInteractionCb: i,
                        scrollCb: s,
                        viewportResizeCb: a,
                        inputCb: o,
                        mediaInteractionCb: u,
                        styleSheetRuleCb: l,
                        styleDeclarationCb: c,
                        canvasMutationCb: d,
                        fontCb: h
                    } = t;
                    t.mutationCb = (...t) => {
                        e.mutation && e.mutation(...t), n(...t)
                    }, t.mousemoveCb = (...t) => {
                        e.mousemove && e.mousemove(...t), r(...t)
                    }, t.mouseInteractionCb = (...t) => {
                        e.mouseInteraction && e.mouseInteraction(...t), i(...t)
                    }, t.scrollCb = (...t) => {
                        e.scroll && e.scroll(...t), s(...t)
                    }, t.viewportResizeCb = (...t) => {
                        e.viewportResize && e.viewportResize(...t), a(...t)
                    }, t.inputCb = (...t) => {
                        e.input && e.input(...t), o(...t)
                    }, t.mediaInteractionCb = (...t) => {
                        e.mediaInteaction && e.mediaInteaction(...t), u(...t)
                    }, t.styleSheetRuleCb = (...t) => {
                        e.styleSheetRule && e.styleSheetRule(...t), l(...t)
                    }, t.styleDeclarationCb = (...t) => {
                        e.styleDeclaration && e.styleDeclaration(...t), c(...t)
                    }, t.canvasMutationCb = (...t) => {
                        e.canvasMutation && e.canvasMutation(...t), d(...t)
                    }, t.fontCb = (...t) => {
                        e.font && e.font(...t), h(...t)
                    }
                }(t, e);
                let r = tM(t, t.doc),
                    i = function({
                        mousemoveCb: t,
                        sampling: e,
                        doc: n,
                        mirror: r
                    }) {
                        let i;
                        if (!1 === e.mousemove) return () => {};
                        let s = "number" == typeof e.mousemove ? e.mousemove : 50,
                            a = "number" == typeof e.mousemoveCallback ? e.mousemoveCallback : 500,
                            o = [],
                            u = tm(e => {
                                let n = Date.now() - i;
                                tO(t)(o.map(t => (t.timeOffset -= n, t)), e), o = [], i = null
                            }, a),
                            l = tm(t => {
                                let e = tG(t),
                                    {
                                        clientX: n,
                                        clientY: s
                                    } = tw(t) ? t.changedTouches[0] : t;
                                !i && (i = Date.now()), o.push({
                                    x: n,
                                    y: s,
                                    id: r.getId(e),
                                    timeOffset: Date.now() - i
                                }), u("undefined" != typeof DragEvent && t instanceof DragEvent ? y.Drag : t instanceof MouseEvent ? y.MouseMove : y.TouchMove)
                            }, s, {
                                trailing: !1
                            }),
                            c = [t_("mousemove", tO(l), n), t_("touchmove", tO(l), n), t_("drag", tO(l), n)];
                        return tO(() => {
                            c.forEach(t => t())
                        })
                    }(t),
                    s = function({
                        mouseInteractionCb: t,
                        doc: e,
                        mirror: n,
                        blockClass: r,
                        blockSelector: i,
                        unblockSelector: s,
                        sampling: a
                    }) {
                        if (!1 === a.mouseInteraction) return () => {};
                        let o = !0 === a.mouseInteraction || void 0 === a.mouseInteraction ? {} : a.mouseInteraction,
                            u = [],
                            l = e => a => {
                                let o = tG(a);
                                if (tE(o, r, i, s)) return;
                                let u = tw(a) ? a.changedTouches[0] : a;
                                if (!u) return;
                                let l = n.getId(o),
                                    {
                                        clientX: c,
                                        clientY: d
                                    } = u;
                                tO(t)({
                                    type: v[e],
                                    id: l,
                                    x: c,
                                    y: d
                                })
                            };
                        return Object.keys(v).filter(t => Number.isNaN(Number(t)) && !t.endsWith("_Departed") && !1 !== o[t]).forEach(t => {
                            let n = t.toLowerCase(),
                                r = tO(l(t));
                            u.push(t_(n, r, e))
                        }), tO(() => {
                            u.forEach(t => t())
                        })
                    }(t),
                    a = tY(t),
                    o = function({
                        viewportResizeCb: t
                    }) {
                        let e = -1,
                            n = -1,
                            r = tm(() => {
                                let r = tv(),
                                    i = tb();
                                (e !== r || n !== i) && (tO(t)({
                                    width: Number(i),
                                    height: Number(r)
                                }), e = r, n = i)
                            }, 200);
                        return t_("resize", tO(r), window)
                    }(t),
                    u = function({
                        inputCb: t,
                        doc: e,
                        mirror: n,
                        blockClass: r,
                        blockSelector: i,
                        unblockSelector: s,
                        ignoreClass: a,
                        ignoreSelector: o,
                        maskInputSelector: u,
                        unmaskInputSelector: l,
                        maskInputOptions: c,
                        maskInputFn: d,
                        sampling: h,
                        userTriggeredOnInput: _
                    }) {
                        function f(t) {
                            let n = tG(t),
                                h = n && n.tagName,
                                f = t.isTrusted;
                            if ("OPTION" === h && (n = n.parentElement), !n || !h || 0 > tz.indexOf(h) || tE(n, r, i, s)) return;
                            let m = n,
                                g = W(m);
                            if (m.classList.contains(a) || o && m.matches(o)) return;
                            let y = Z(m, h, g),
                                v = !1;
                            ("radio" === g || "checkbox" === g) && (v = n.checked),
                            function({
                                tagName: t,
                                type: e,
                                maskInputOptions: n,
                                maskInputSelector: r
                            }) {
                                return r || j({
                                    maskInputOptions: n,
                                    tagName: t,
                                    type: e
                                })
                            }({
                                maskInputOptions: c,
                                maskInputSelector: u,
                                tagName: h,
                                type: g
                            }) && (y = H({
                                input: m,
                                maskInputOptions: c,
                                maskInputSelector: u,
                                unmaskInputSelector: l,
                                tagName: h,
                                type: g,
                                value: y,
                                maskInputFn: d
                            })), p(n, tO(tL)({
                                text: y,
                                isChecked: v,
                                userTriggered: f
                            }, _));
                            let b = n.name;
                            "radio" === g && b && v && e.querySelectorAll(`input[type="radio"][name="${b}"]`).forEach(t => {
                                if (t !== n) {
                                    let e = H({
                                        input: t,
                                        maskInputOptions: c,
                                        maskInputSelector: u,
                                        unmaskInputSelector: l,
                                        tagName: h,
                                        type: g,
                                        value: Z(t, h, g),
                                        maskInputFn: d
                                    });
                                    p(t, tO(tL)({
                                        text: e,
                                        isChecked: !v,
                                        userTriggered: !1
                                    }, _))
                                }
                            })
                        }

                        function p(e, r) {
                            let i = t$.get(e);
                            if (!i || i.text !== r.text || i.isChecked !== r.isChecked) {
                                t$.set(e, r);
                                let i = n.getId(e);
                                t(Object.assign(Object.assign({}, r), {
                                    id: i
                                }))
                            }
                        }
                        let m = ("last" === h.input ? ["change"] : ["input", "change"]).map(t => t_(t, tO(f), e)),
                            g = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value"),
                            y = [
                                [HTMLInputElement.prototype, "value"],
                                [HTMLInputElement.prototype, "checked"],
                                [HTMLSelectElement.prototype, "value"],
                                [HTMLTextAreaElement.prototype, "value"],
                                [HTMLSelectElement.prototype, "selectedIndex"],
                                [HTMLOptionElement.prototype, "selected"]
                            ];
                        return g && g.set && m.push(...y.map(t => tg(t[0], t[1], {
                            set() {
                                tO(f)({
                                    target: this
                                })
                            }
                        }))), tO(() => {
                            m.forEach(t => t())
                        })
                    }(t),
                    l = function({
                        mediaInteractionCb: t,
                        blockClass: e,
                        blockSelector: n,
                        unblockSelector: r,
                        mirror: i,
                        sampling: s
                    }) {
                        let a = a => tm(tO(s => {
                                let o = tG(s);
                                if (!o || tE(o, e, n, r)) return;
                                let {
                                    currentTime: u,
                                    volume: l,
                                    muted: c
                                } = o;
                                t({
                                    type: a,
                                    id: i.getId(o),
                                    currentTime: u,
                                    volume: l,
                                    muted: c
                                })
                            }), s.media || 500),
                            o = [t_("play", a(0)), t_("pause", a(1)), t_("seeked", a(2)), t_("volumechange", a(3))];
                        return tO(() => {
                            o.forEach(t => t())
                        })
                    }(t),
                    c = function({
                        styleSheetRuleCb: t,
                        mirror: e
                    }, {
                        win: n
                    }) {
                        if (!n.CSSStyleSheet || !n.CSSStyleSheet.prototype) return () => {};
                        let r = n.CSSStyleSheet.prototype.insertRule;
                        n.CSSStyleSheet.prototype.insertRule = new Proxy(r, {
                            apply: tO((n, r, i) => {
                                let [s, a] = i, o = e.getId(r.ownerNode);
                                return -1 !== o && t({
                                    id: o,
                                    adds: [{
                                        rule: s,
                                        index: a
                                    }]
                                }), n.apply(r, i)
                            })
                        });
                        let i = n.CSSStyleSheet.prototype.deleteRule;
                        n.CSSStyleSheet.prototype.deleteRule = new Proxy(i, {
                            apply: tO((n, r, i) => {
                                let [s] = i, a = e.getId(r.ownerNode);
                                return -1 !== a && t({
                                    id: a,
                                    removes: [{
                                        index: s
                                    }]
                                }), n.apply(r, i)
                            })
                        });
                        let s = {};
                        tH("CSSGroupingRule") ? s.CSSGroupingRule = n.CSSGroupingRule : (tH("CSSMediaRule") && (s.CSSMediaRule = n.CSSMediaRule), tH("CSSConditionRule") && (s.CSSConditionRule = n.CSSConditionRule), tH("CSSSupportsRule") && (s.CSSSupportsRule = n.CSSSupportsRule));
                        let a = {};
                        return Object.entries(s).forEach(([n, r]) => {
                            a[n] = {
                                insertRule: r.prototype.insertRule,
                                deleteRule: r.prototype.deleteRule
                            }, r.prototype.insertRule = new Proxy(a[n].insertRule, {
                                apply: tO((n, r, i) => {
                                    let [s, a] = i, o = e.getId(r.parentStyleSheet.ownerNode);
                                    return -1 !== o && t({
                                        id: o,
                                        adds: [{
                                            rule: s,
                                            index: [...tP(r), a || 0]
                                        }]
                                    }), n.apply(r, i)
                                })
                            }), r.prototype.deleteRule = new Proxy(a[n].deleteRule, {
                                apply: tO((n, r, i) => {
                                    let [s] = i, a = e.getId(r.parentStyleSheet.ownerNode);
                                    return -1 !== a && t({
                                        id: a,
                                        removes: [{
                                            index: [...tP(r), s]
                                        }]
                                    }), n.apply(r, i)
                                })
                            })
                        }), tO(() => {
                            n.CSSStyleSheet.prototype.insertRule = r, n.CSSStyleSheet.prototype.deleteRule = i, Object.entries(s).forEach(([t, e]) => {
                                e.prototype.insertRule = a[t].insertRule, e.prototype.deleteRule = a[t].deleteRule
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
                            apply: tO((n, r, i) => {
                                var s, a;
                                let [o, u, l] = i, c = e.getId(null === (a = null === (s = r.parentRule) || void 0 === s ? void 0 : s.parentStyleSheet) || void 0 === a ? void 0 : a.ownerNode);
                                return -1 !== c && t({
                                    id: c,
                                    set: {
                                        property: o,
                                        value: u,
                                        priority: l
                                    },
                                    index: tP(r.parentRule)
                                }), n.apply(r, i)
                            })
                        });
                        let i = n.CSSStyleDeclaration.prototype.removeProperty;
                        return n.CSSStyleDeclaration.prototype.removeProperty = new Proxy(i, {
                            apply: tO((n, r, i) => {
                                var s, a;
                                let [o] = i, u = e.getId(null === (a = null === (s = r.parentRule) || void 0 === s ? void 0 : s.parentStyleSheet) || void 0 === a ? void 0 : a.ownerNode);
                                return -1 !== u && t({
                                    id: u,
                                    remove: {
                                        property: o
                                    },
                                    index: tP(r.parentRule)
                                }), n.apply(r, i)
                            })
                        }), tO(() => {
                            n.CSSStyleDeclaration.prototype.setProperty = r, n.CSSStyleDeclaration.prototype.removeProperty = i
                        })
                    }(t, {
                        win: n
                    }),
                    h = t.collectFonts ? function({
                        fontCb: t,
                        doc: e
                    }) {
                        let n = e.defaultView;
                        if (!n) return () => {};
                        let r = [],
                            i = new WeakMap,
                            s = n.FontFace;
                        n.FontFace = function(t, e, n) {
                            let r = new s(t, e, n);
                            return i.set(r, {
                                family: t,
                                buffer: "string" != typeof e,
                                descriptors: n,
                                fontSource: "string" == typeof e ? e : JSON.stringify(Array.from(new Uint8Array(e)))
                            }), r
                        };
                        let a = ty(e.fonts, "add", function(e) {
                            return function(n) {
                                return setTimeout(() => {
                                    let e = i.get(n);
                                    e && (t(e), i.delete(n))
                                }, 0), e.apply(this, [n])
                            }
                        });
                        return r.push(() => {
                            n.FontFace = s
                        }), r.push(a), tO(() => {
                            r.forEach(t => t())
                        })
                    }(t) : () => {},
                    _ = [];
                for (let e of t.plugins) _.push(e.observer(e.callback, n, e.options));
                return tO(() => {
                    tB.forEach(t => t.reset()), r.disconnect(), i(), s(), a(), o(), u(), l();
                    try {
                        c(), d()
                    } catch (t) {}
                    h(), _.forEach(t => t())
                })
            }

            function tj(t) {
                return void 0 !== window[t]
            }

            function tH(t) {
                return !!(void 0 !== window[t] && window[t].prototype && "insertRule" in window[t].prototype && "deleteRule" in window[t].prototype)
            }
            class tq {
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
            class tW {
                constructor(t) {
                    this.restorePatches = [], this.mutationCb = t.mutationCb, this.scrollCb = t.scrollCb, this.bypassOptions = t.bypassOptions, this.mirror = t.mirror;
                    let e = this;
                    this.restorePatches.push(ty(HTMLElement.prototype, "attachShadow", function(t) {
                        return function() {
                            let n = t.apply(this, arguments);
                            return this.shadowRoot && e.addShadowRoot(this.shadowRoot, this.ownerDocument), n
                        }
                    }))
                }
                addShadowRoot(t, e) {
                    tM(Object.assign(Object.assign({}, this.bypassOptions), {
                        doc: e,
                        mutationCb: this.mutationCb,
                        mirror: this.mirror,
                        shadowDomManager: this
                    }), t), tY(Object.assign(Object.assign({}, this.bypassOptions), {
                        scrollCb: this.scrollCb,
                        doc: t,
                        mirror: this.mirror
                    }))
                }
                observeAttachShadow(t) {
                    if (t.contentWindow) {
                        let e = this;
                        this.restorePatches.push(ty(t.contentWindow.HTMLElement.prototype, "attachShadow", function(n) {
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
            for (var tZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", tJ = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), tV = 0; tV < tZ.length; tV++) tJ[tZ.charCodeAt(tV)] = tV;
            var tK = function(t) {
                var e, n = new Uint8Array(t),
                    r = n.length,
                    i = "";
                for (e = 0; e < r; e += 3) i += tZ[n[e] >> 2] + tZ[(3 & n[e]) << 4 | n[e + 1] >> 4] + tZ[(15 & n[e + 1]) << 2 | n[e + 2] >> 6] + tZ[63 & n[e + 2]];
                return r % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : r % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i
            };
            let tX = new Map,
                tQ = (t, e, n) => {
                    var r, i;
                    let s;
                    if (!t || !(t1(t, e) || "object" == typeof t)) return;
                    let a = t.constructor.name;
                    let o = (r = n, i = a, !(s = tX.get(r)) && (s = new Map, tX.set(r, s)), !s.has(i) && s.set(i, []), s.get(i)),
                        u = o.indexOf(t);
                    return -1 === u && (u = o.length, o.push(t)), u
                },
                t0 = (t, e, n) => [...t].map(t => (function t(e, n, r) {
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
                            base64: tK(e)
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
                    else if (t1(e, n) || "object" == typeof e) {
                        let t = e.constructor.name;
                        return {
                            rr_type: t,
                            index: tQ(e, n, r)
                        }
                    }
                    return e
                })(t, e, n)),
                t1 = (t, e) => !!["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter(t => "function" == typeof e[t]).find(n => t instanceof e[n]);

            function t2(t, e, n, r, i, s, a, o) {
                let u = [];
                for (let l of Object.getOwnPropertyNames(t)) try {
                    if ("function" != typeof t[l]) continue;
                    let c = ty(t, l, function(u) {
                        return function(...c) {
                            let d = u.apply(this, c);
                            if (tQ(d, o, t), !tE(this.canvas, r, s, i)) {
                                a.getId(this.canvas);
                                let r = t0([...c], o, t),
                                    i = {
                                        type: e,
                                        property: l,
                                        args: r
                                    };
                                n(this.canvas, i)
                            }
                            return d
                        }
                    });
                    u.push(c)
                } catch (i) {
                    let r = tg(t, l, {
                        set(t) {
                            n(this.canvas, {
                                type: e,
                                property: l,
                                args: [t],
                                setter: !0
                            })
                        }
                    });
                    u.push(r)
                }
                return u
            }
            class t5 {
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
                                let s = ty(t.HTMLCanvasElement.prototype, "getContext", function(t) {
                                    return function(i, ...s) {
                                        return !tE(this, e, n, r) && !("__context" in this) && (this.__context = i), t.apply(this, [i, ...s])
                                    }
                                });
                                i.push(s)
                            } catch (t) {
                                console.error("failed to patch HTMLCanvasElement.prototype.getContext")
                            }
                            return () => {
                                i.forEach(t => t())
                            }
                        }(t, e, r, n),
                        s = function(t, e, n, r, i, s) {
                            let a = [];
                            for (let s of Object.getOwnPropertyNames(e.CanvasRenderingContext2D.prototype)) try {
                                if ("function" != typeof e.CanvasRenderingContext2D.prototype[s]) continue;
                                let o = ty(e.CanvasRenderingContext2D.prototype, s, function(e) {
                                    return function(...a) {
                                        return !tE(this.canvas, n, i, r) && setTimeout(() => {
                                            let e = [...a];
                                            if ("drawImage" === s && e[0] && e[0] instanceof HTMLCanvasElement) {
                                                let t = e[0],
                                                    n = t.getContext("2d"),
                                                    r = null == n ? void 0 : n.getImageData(0, 0, t.width, t.height),
                                                    i = null == r ? void 0 : r.data;
                                                e[0] = JSON.stringify(i)
                                            }
                                            t(this.canvas, {
                                                type: b["2D"],
                                                property: s,
                                                args: e
                                            })
                                        }, 0), e.apply(this, a)
                                    }
                                });
                                a.push(o)
                            } catch (r) {
                                let n = tg(e.CanvasRenderingContext2D.prototype, s, {
                                    set(e) {
                                        t(this.canvas, {
                                            type: b["2D"],
                                            property: s,
                                            args: [e],
                                            setter: !0
                                        })
                                    }
                                });
                                a.push(n)
                            }
                            return () => {
                                a.forEach(t => t())
                            }
                        }(this.processMutation.bind(this), t, e, r, n, this.mirror),
                        a = function(t, e, n, r, i, s) {
                            let a = [];
                            return a.push(...t2(e.WebGLRenderingContext.prototype, b.WebGL, t, n, r, i, s, e)), void 0 !== e.WebGL2RenderingContext && a.push(...t2(e.WebGL2RenderingContext.prototype, b.WebGL2, t, n, r, i, s, e)), () => {
                                a.forEach(t => t())
                            }
                        }(this.processMutation.bind(this), t, e, r, n, this.mirror);
                    this.resetObservers = () => {
                        i(), s(), a()
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

            function t3(t) {
                return Object.assign(Object.assign({}, t), {
                    timestamp: Date.now()
                })
            }
            let t6 = {
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

            function t4(t = {}) {
                let e;
                let {
                    emit: n,
                    checkoutEveryNms: r,
                    checkoutEveryNth: i,
                    blockClass: o = "rr-block",
                    blockSelector: u = null,
                    unblockSelector: l = null,
                    ignoreClass: c = "rr-ignore",
                    ignoreSelector: d = null,
                    maskTextClass: h = "rr-mask",
                    maskTextSelector: _ = null,
                    maskInputSelector: f = null,
                    unmaskTextSelector: p = null,
                    unmaskInputSelector: m = null,
                    inlineStylesheet: v = !0,
                    maskAllText: b = !1,
                    maskAllInputs: E,
                    maskInputOptions: S,
                    slimDOMOptions: w,
                    maskInputFn: k,
                    maskTextFn: T,
                    hooks: R,
                    packFn: x,
                    sampling: D = {},
                    mousemoveWait: N,
                    recordCanvas: C = !1,
                    userTriggeredOnInput: U = !1,
                    collectFonts: I = !1,
                    inlineImages: A = !1,
                    plugins: O,
                    keepIframeSrcFn: B = () => !1,
                    onMutation: G
                } = t;
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
                    } : void 0 !== S ? S : {},
                    Y = !0 === w || "all" === w ? {
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
                let L = 0,
                    z = t => {
                        for (let e of O || []) e.eventProcessor && (t = e.eventProcessor(t));
                        return x && (t = x(t)), t
                    };
                s = (t, s) => {
                    var o;
                    if ((null === (o = tB[0]) || void 0 === o ? void 0 : o.isFrozen()) && t.type !== g.FullSnapshot && !(t.type === g.IncrementalSnapshot && t.data.source === y.Mutation) && tB.forEach(t => t.unfreeze()), n(z(t), s), t.type === g.FullSnapshot) e = t, L = 0;
                    else if (t.type === g.IncrementalSnapshot) {
                        if (t.data.source === y.Mutation && t.data.isAttachIframe) return;
                        L++;
                        let n = i && L >= i,
                            s = r && t.timestamp - e.timestamp > r;
                        (n || s) && a(!0)
                    }
                };
                let $ = t => {
                        s(t3({
                            type: g.IncrementalSnapshot,
                            data: Object.assign({
                                source: y.Mutation
                            }, t)
                        }))
                    },
                    P = t => s(t3({
                        type: g.IncrementalSnapshot,
                        data: Object.assign({
                            source: y.Scroll
                        }, t)
                    })),
                    F = t => s(t3({
                        type: g.IncrementalSnapshot,
                        data: Object.assign({
                            source: y.CanvasMutation
                        }, t)
                    })),
                    j = new tq({
                        mutationCb: $
                    }),
                    H = new t5({
                        recordCanvas: C,
                        mutationCb: F,
                        win: window,
                        blockClass: o,
                        blockSelector: u,
                        unblockSelector: l,
                        mirror: t6
                    }),
                    q = new tW({
                        mutationCb: $,
                        scrollCb: P,
                        bypassOptions: {
                            onMutation: G,
                            blockClass: o,
                            blockSelector: u,
                            unblockSelector: l,
                            maskTextClass: h,
                            maskTextSelector: _,
                            unmaskTextSelector: p,
                            maskInputSelector: f,
                            unmaskInputSelector: m,
                            inlineStylesheet: v,
                            maskAllText: b,
                            maskInputOptions: M,
                            maskTextFn: T,
                            maskInputFn: k,
                            recordCanvas: C,
                            inlineImages: A,
                            sampling: D,
                            slimDOMOptions: Y,
                            iframeManager: j,
                            canvasManager: H
                        },
                        mirror: t6
                    });
                a = (t = !1) => {
                    var e, n, r, i;
                    s(t3({
                        type: g.Meta,
                        data: {
                            href: window.location.href,
                            width: tb(),
                            height: tv()
                        }
                    }), t), tB.forEach(t => t.lock());
                    let [a, c] = function(t, e) {
                        let {
                            blockClass: n = "rr-block",
                            blockSelector: r = null,
                            unblockSelector: i = null,
                            maskTextClass: s = "rr-mask",
                            maskTextSelector: a = null,
                            unmaskTextSelector: o = null,
                            inlineStylesheet: u = !0,
                            inlineImages: l = !1,
                            recordCanvas: c = !1,
                            maskInputSelector: d = null,
                            unmaskInputSelector: h = null,
                            maskAllText: _ = !1,
                            maskAllInputs: f = !1,
                            maskTextFn: p,
                            maskInputFn: m,
                            slimDOM: g = !1,
                            dataURLOptions: y,
                            preserveWhiteSpace: v,
                            onSerialize: b,
                            onIframeLoad: E,
                            iframeLoadTimeout: S,
                            keepIframeSrcFn: w = () => !1
                        } = e || {}, k = {};
                        return [th(t, {
                            doc: t,
                            map: k,
                            blockClass: n,
                            blockSelector: r,
                            unblockSelector: i,
                            maskTextClass: s,
                            maskTextSelector: a,
                            unmaskTextSelector: o,
                            skipChild: !1,
                            inlineStylesheet: u,
                            maskInputSelector: d,
                            unmaskInputSelector: h,
                            maskAllText: _,
                            maskInputOptions: !0 === f ? {
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
                            } : !1 === f ? {} : f,
                            maskTextFn: p,
                            maskInputFn: m,
                            slimDOMOptions: !0 === g || "all" === g ? {
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
                            } : !1 === g ? {} : g,
                            dataURLOptions: y,
                            inlineImages: l,
                            recordCanvas: c,
                            preserveWhiteSpace: v,
                            onSerialize: b,
                            onIframeLoad: E,
                            iframeLoadTimeout: S,
                            keepIframeSrcFn: w
                        }), k]
                    }(document, {
                        blockClass: o,
                        blockSelector: u,
                        unblockSelector: l,
                        maskTextClass: h,
                        maskTextSelector: _,
                        unmaskTextSelector: p,
                        maskInputSelector: f,
                        unmaskInputSelector: m,
                        inlineStylesheet: v,
                        maskAllText: b,
                        maskAllInputs: M,
                        maskTextFn: T,
                        slimDOM: Y,
                        recordCanvas: C,
                        inlineImages: A,
                        onSerialize: t => {
                            tk(t) && j.addIframe(t), tT(t) && q.addShadowRoot(t.shadowRoot, document)
                        },
                        onIframeLoad: (t, e) => {
                            j.attachIframe(t, e), q.observeAttachShadow(t)
                        },
                        keepIframeSrcFn: B
                    });
                    if (!a) return console.warn("Failed to snapshot the document");
                    t6.map = c, s(t3({
                        type: g.FullSnapshot,
                        data: {
                            node: a,
                            initialOffset: {
                                left: void 0 !== window.pageXOffset ? window.pageXOffset : (null == document ? void 0 : document.documentElement.scrollLeft) || (null === (n = null === (e = null == document ? void 0 : document.body) || void 0 === e ? void 0 : e.parentElement) || void 0 === n ? void 0 : n.scrollLeft) || (null == document ? void 0 : document.body.scrollLeft) || 0,
                                top: void 0 !== window.pageYOffset ? window.pageYOffset : (null == document ? void 0 : document.documentElement.scrollTop) || (null === (i = null === (r = null == document ? void 0 : document.body) || void 0 === r ? void 0 : r.parentElement) || void 0 === i ? void 0 : i.scrollTop) || (null == document ? void 0 : document.body.scrollTop) || 0
                            }
                        }
                    })), tB.forEach(t => t.unlock())
                };
                try {
                    let t = [];
                    t.push(t_("DOMContentLoaded", () => {
                        s(t3({
                            type: g.DomContentLoaded,
                            data: {}
                        }))
                    }));
                    let e = t => {
                        var e;
                        return tO(tF)({
                            onMutation: G,
                            mutationCb: $,
                            mousemoveCb: (t, e) => s(t3({
                                type: g.IncrementalSnapshot,
                                data: {
                                    source: e,
                                    positions: t
                                }
                            })),
                            mouseInteractionCb: t => s(t3({
                                type: g.IncrementalSnapshot,
                                data: Object.assign({
                                    source: y.MouseInteraction
                                }, t)
                            })),
                            scrollCb: P,
                            viewportResizeCb: t => s(t3({
                                type: g.IncrementalSnapshot,
                                data: Object.assign({
                                    source: y.ViewportResize
                                }, t)
                            })),
                            inputCb: t => s(t3({
                                type: g.IncrementalSnapshot,
                                data: Object.assign({
                                    source: y.Input
                                }, t)
                            })),
                            mediaInteractionCb: t => s(t3({
                                type: g.IncrementalSnapshot,
                                data: Object.assign({
                                    source: y.MediaInteraction
                                }, t)
                            })),
                            styleSheetRuleCb: t => s(t3({
                                type: g.IncrementalSnapshot,
                                data: Object.assign({
                                    source: y.StyleSheetRule
                                }, t)
                            })),
                            styleDeclarationCb: t => s(t3({
                                type: g.IncrementalSnapshot,
                                data: Object.assign({
                                    source: y.StyleDeclaration
                                }, t)
                            })),
                            canvasMutationCb: F,
                            fontCb: t => s(t3({
                                type: g.IncrementalSnapshot,
                                data: Object.assign({
                                    source: y.Font
                                }, t)
                            })),
                            blockClass: o,
                            ignoreClass: c,
                            ignoreSelector: d,
                            maskTextClass: h,
                            maskTextSelector: _,
                            unmaskTextSelector: p,
                            maskInputSelector: f,
                            unmaskInputSelector: m,
                            maskInputOptions: M,
                            inlineStylesheet: v,
                            sampling: D,
                            recordCanvas: C,
                            inlineImages: A,
                            userTriggeredOnInput: U,
                            collectFonts: I,
                            doc: t,
                            maskAllText: b,
                            maskInputFn: k,
                            maskTextFn: T,
                            blockSelector: u,
                            unblockSelector: l,
                            slimDOMOptions: Y,
                            mirror: t6,
                            iframeManager: j,
                            shadowDomManager: q,
                            canvasManager: H,
                            plugins: (null === (e = null == O ? void 0 : O.filter(t => t.observer)) || void 0 === e ? void 0 : e.map(t => ({
                                observer: t.observer,
                                options: t.options,
                                callback: e => s(t3({
                                    type: g.Plugin,
                                    data: {
                                        plugin: t.name,
                                        payload: e
                                    }
                                }))
                            }))) || []
                        }, R)
                    };
                    j.addLoadListener(n => {
                        try {
                            t.push(e(n.contentDocument))
                        } catch (t) {
                            console.warn(t)
                        }
                    });
                    let n = () => {
                        a(), t.push(e(document))
                    };
                    return "interactive" === document.readyState || "complete" === document.readyState ? n() : t.push(t_("load", () => {
                        s(t3({
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

            function t8(t) {
                return t > 9999999999 ? t : 1e3 * t
            }
            t4.addCustomEvent = (t, e) => {
                if (!s) throw Error("please add custom event after start recording");
                s(t3({
                    type: g.Custom,
                    data: {
                        tag: t,
                        payload: e
                    }
                }))
            }, t4.freezePage = () => {
                tB.forEach(t => t.freeze())
            }, t4.takeFullSnapshot = t => {
                if (!a) throw Error("please take full snapshot after start recording");
                a(t)
            }, t4.mirror = t6;

            function t9(t, e) {
                if ("sentry.transaction" !== e.category)["ui.click", "ui.input"].includes(e.category) ? t.triggerUserActivity() : t.checkAndHandleExpiredSession(), t.addUpdate(() => (t.throttledAddEvent({
                    type: g.Custom,
                    timestamp: 1e3 * (e.timestamp || 0),
                    data: {
                        tag: "breadcrumb",
                        payload: (0, N.Fv)(e, 10, 1e3)
                    }
                }), "console" === e.category))
            }

            function t7(t) {
                let e = et(t);
                return e && e instanceof Element && e.closest("button,a") || e
            }

            function et(t) {
                return function(t) {
                    return "object" == typeof t && !!t && "target" in t
                }(t) ? t.target : t
            }
            class ee {
                __init() {
                    this._lastMutation = 0
                }
                __init2() {
                    this._lastScroll = 0
                }
                __init3() {
                    this._clicks = []
                }
                constructor(t, e, n = t9) {
                    ee.prototype.__init.call(this), ee.prototype.__init2.call(this), ee.prototype.__init3.call(this), this._timeout = e.timeout / 1e3, this._threshold = e.threshold / 1e3, this._scollTimeout = e.scrollTimeout / 1e3, this._replay = t, this._ignoreSelector = e.ignoreSelector, this._addBreadcrumbEvent = n
                }
                addListeners() {
                    var t;
                    let e = () => {
                        this._lastScroll = er()
                    };
                    let n = (t = () => {
                            this._lastMutation = er()
                        }, !o && (o = [], function() {
                            (0, C.hl)(z, "open", function(t) {
                                return function(...e) {
                                    if (o) try {
                                        o.forEach(t => t())
                                    } catch (t) {}
                                    return t.apply(z, e)
                                }
                            })
                        }()), o.push(t), () => {
                            let e = o ? o.indexOf(t) : -1;
                            e > -1 && o.splice(e, 1)
                        }),
                        r = t => {
                            if (!t.target) return;
                            let e = t7(t);
                            e && this._handleMultiClick(e)
                        },
                        i = new MutationObserver(() => {
                            this._lastMutation = er()
                        });
                    i.observe(z.document.documentElement, {
                        attributes: !0,
                        characterData: !0,
                        childList: !0,
                        subtree: !0
                    }), z.addEventListener("scroll", e, {
                        passive: !0
                    }), z.addEventListener("click", r, {
                        passive: !0
                    }), this._teardown = () => {
                        z.removeEventListener("scroll", e), z.removeEventListener("click", r), n(), i.disconnect(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0
                    }
                }
                removeListeners() {
                    this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
                }
                handleClick(t, e) {
                    var n;
                    if (function(t, e) {
                            return !!(!en.includes(t.tagName) || "INPUT" === t.tagName && !["submit", "button"].includes(t.getAttribute("type") || "") || "A" === t.tagName && (t.hasAttribute("download") || t.hasAttribute("target") && "_self" !== t.getAttribute("target")) || e && t.matches(e)) || !1
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
                        e = er();
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
                            clickBreadcrumb: s
                        } = t;
                    if (!n && !r) {
                        let n = 1e3 * Math.min(t.mutationAfter || this._timeout, this._timeout),
                            r = n < 1e3 * this._timeout ? "mutation" : "timeout",
                            a = {
                                type: "default",
                                message: s.message,
                                timestamp: s.timestamp,
                                category: "ui.slowClickDetected",
                                data: {
                                    ...s.data,
                                    url: z.location.href,
                                    route: e.getCurrentRoute(),
                                    timeAfterClickMs: n,
                                    endReason: r,
                                    clickCount: i || 1
                                }
                            };
                        this._addBreadcrumbEvent(e, a);
                        return
                    }
                    if (i > 1) {
                        let t = {
                            type: "default",
                            message: s.message,
                            timestamp: s.timestamp,
                            category: "ui.multiClick",
                            data: {
                                ...s.data,
                                url: z.location.href,
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
            let en = ["A", "BUTTON", "INPUT"];

            function er() {
                return Date.now() / 1e3
            }

            function ei(t) {
                return {
                    timestamp: Date.now() / 1e3,
                    type: "default",
                    ...t
                }
            }(p = w || (w = {}))[p.Document = 0] = "Document", p[p.DocumentType = 1] = "DocumentType", p[p.Element = 2] = "Element", p[p.Text = 3] = "Text", p[p.CDATA = 4] = "CDATA", p[p.Comment = 5] = "Comment";
            let es = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled"]),
                ea = t => e => {
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
                                r = n ? t7(t.event) : et(t.event), e = (0, U.Rt)(r, {
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
                        return ei({
                            category: `ui.${t.name}`,
                            ...eo(e, n)
                        })
                    }(e);
                    if (!n) return;
                    let r = "click" === e.name,
                        i = r && e.event;
                    r && t.clickDetector && i && !i.altKey && !i.metaKey && !i.ctrlKey && !i.shiftKey && ! function(t, e, n) {
                        t.handleClick(e, n)
                    }(t.clickDetector, n, t7(e.event)), t9(t, n)
                };

            function eo(t, e) {
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
                                    if (es.has(n)) {
                                        let r = n;
                                        ("data-testid" === n || "data-test-id" === n) && (r = "testId"), e[r] = t[n]
                                    } return e
                            }(n.attributes)
                        }
                    } : {}
                }
            }
            let eu = ["name", "type", "startTime", "transferSize", "duration"];

            function el(t) {
                return function(e) {
                    return eu.every(n => t[n] === e[n])
                }
            }
            let ec = `/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
function t(t){let e=t.length;for(;--e>=0;)t[e]=0}const e=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),a=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),i=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),n=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=new Array(576);t(s);const r=new Array(60);t(r);const o=new Array(512);t(o);const l=new Array(256);t(l);const h=new Array(29);t(h);const d=new Array(30);function _(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}let f,c,u;function w(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}t(d);const m=t=>t<256?o[t]:o[256+(t>>>7)],b=(t,e)=>{t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},g=(t,e,a)=>{t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,b(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},p=(t,e,a)=>{g(t,a[2*e],a[2*e+1])},k=(t,e)=>{let a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},v=(t,e,a)=>{const i=new Array(16);let n,s,r=0;for(n=1;n<=15;n++)r=r+a[n-1]<<1,i[n]=r;for(s=0;s<=e;s++){let e=t[2*s+1];0!==e&&(t[2*s]=k(i[e]++,e))}},y=t=>{let e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.sym_next=t.matches=0},x=t=>{t.bi_valid>8?b(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},z=(t,e,a,i)=>{const n=2*e,s=2*a;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[a]},A=(t,e,a)=>{const i=t.heap[a];let n=a<<1;for(;n<=t.heap_len&&(n<t.heap_len&&z(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!z(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i},E=(t,i,n)=>{let s,r,o,_,f=0;if(0!==t.sym_next)do{s=255&t.pending_buf[t.sym_buf+f++],s+=(255&t.pending_buf[t.sym_buf+f++])<<8,r=t.pending_buf[t.sym_buf+f++],0===s?p(t,r,i):(o=l[r],p(t,o+256+1,i),_=e[o],0!==_&&(r-=h[o],g(t,r,_)),s--,o=m(s),p(t,o,n),_=a[o],0!==_&&(s-=d[o],g(t,s,_)))}while(f<t.sym_next);p(t,256,i)},R=(t,e)=>{const a=e.dyn_tree,i=e.stat_desc.static_tree,n=e.stat_desc.has_stree,s=e.stat_desc.elems;let r,o,l,h=-1;for(t.heap_len=0,t.heap_max=573,r=0;r<s;r++)0!==a[2*r]?(t.heap[++t.heap_len]=h=r,t.depth[r]=0):a[2*r+1]=0;for(;t.heap_len<2;)l=t.heap[++t.heap_len]=h<2?++h:0,a[2*l]=1,t.depth[l]=0,t.opt_len--,n&&(t.static_len-=i[2*l+1]);for(e.max_code=h,r=t.heap_len>>1;r>=1;r--)A(t,a,r);l=s;do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],A(t,a,1),o=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=o,a[2*l]=a[2*r]+a[2*o],t.depth[l]=(t.depth[r]>=t.depth[o]?t.depth[r]:t.depth[o])+1,a[2*r+1]=a[2*o+1]=l,t.heap[1]=l++,A(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],((t,e)=>{const a=e.dyn_tree,i=e.max_code,n=e.stat_desc.static_tree,s=e.stat_desc.has_stree,r=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,l=e.stat_desc.max_length;let h,d,_,f,c,u,w=0;for(f=0;f<=15;f++)t.bl_count[f]=0;for(a[2*t.heap[t.heap_max]+1]=0,h=t.heap_max+1;h<573;h++)d=t.heap[h],f=a[2*a[2*d+1]+1]+1,f>l&&(f=l,w++),a[2*d+1]=f,d>i||(t.bl_count[f]++,c=0,d>=o&&(c=r[d-o]),u=a[2*d],t.opt_len+=u*(f+c),s&&(t.static_len+=u*(n[2*d+1]+c)));if(0!==w){do{for(f=l-1;0===t.bl_count[f];)f--;t.bl_count[f]--,t.bl_count[f+1]+=2,t.bl_count[l]--,w-=2}while(w>0);for(f=l;0!==f;f--)for(d=t.bl_count[f];0!==d;)_=t.heap[--h],_>i||(a[2*_+1]!==f&&(t.opt_len+=(f-a[2*_+1])*a[2*_],a[2*_+1]=f),d--)}})(t,e),v(a,h,t.bl_count)},Z=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=r,r=e[2*(i+1)+1],++o<l&&n===r||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[32]++):o<=10?t.bl_tree[34]++:t.bl_tree[36]++,o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4))},U=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),i=0;i<=a;i++)if(n=r,r=e[2*(i+1)+1],!(++o<l&&n===r)){if(o<h)do{p(t,n,t.bl_tree)}while(0!=--o);else 0!==n?(n!==s&&(p(t,n,t.bl_tree),o--),p(t,16,t.bl_tree),g(t,o-3,2)):o<=10?(p(t,17,t.bl_tree),g(t,o-3,3)):(p(t,18,t.bl_tree),g(t,o-11,7));o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4)}};let S=!1;const D=(t,e,a,i)=>{g(t,0+(i?1:0),3),x(t),b(t,a),b(t,~a),a&&t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a};var T=(t,e,a,i)=>{let o,l,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0})(t)),R(t,t.l_desc),R(t,t.d_desc),h=(t=>{let e;for(Z(t,t.dyn_ltree,t.l_desc.max_code),Z(t,t.dyn_dtree,t.d_desc.max_code),R(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*n[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e})(t),o=t.opt_len+3+7>>>3,l=t.static_len+3+7>>>3,l<=o&&(o=l)):o=l=a+5,a+4<=o&&-1!==e?D(t,e,a,i):4===t.strategy||l===o?(g(t,2+(i?1:0),3),E(t,s,r)):(g(t,4+(i?1:0),3),((t,e,a,i)=>{let s;for(g(t,e-257,5),g(t,a-1,5),g(t,i-4,4),s=0;s<i;s++)g(t,t.bl_tree[2*n[s]+1],3);U(t,t.dyn_ltree,e-1),U(t,t.dyn_dtree,a-1)})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),E(t,t.dyn_ltree,t.dyn_dtree)),y(t),i&&x(t)},O={_tr_init:t=>{S||((()=>{let t,n,w,m,b;const g=new Array(16);for(w=0,m=0;m<28;m++)for(h[m]=w,t=0;t<1<<e[m];t++)l[w++]=m;for(l[w-1]=m,b=0,m=0;m<16;m++)for(d[m]=b,t=0;t<1<<a[m];t++)o[b++]=m;for(b>>=7;m<30;m++)for(d[m]=b<<7,t=0;t<1<<a[m]-7;t++)o[256+b++]=m;for(n=0;n<=15;n++)g[n]=0;for(t=0;t<=143;)s[2*t+1]=8,t++,g[8]++;for(;t<=255;)s[2*t+1]=9,t++,g[9]++;for(;t<=279;)s[2*t+1]=7,t++,g[7]++;for(;t<=287;)s[2*t+1]=8,t++,g[8]++;for(v(s,287,g),t=0;t<30;t++)r[2*t+1]=5,r[2*t]=k(t,5);f=new _(s,e,257,286,15),c=new _(r,a,0,30,15),u=new _(new Array(0),i,0,19,7)})(),S=!0),t.l_desc=new w(t.dyn_ltree,f),t.d_desc=new w(t.dyn_dtree,c),t.bl_desc=new w(t.bl_tree,u),t.bi_buf=0,t.bi_valid=0,y(t)},_tr_stored_block:D,_tr_flush_block:T,_tr_tally:(t,e,a)=>(t.pending_buf[t.sym_buf+t.sym_next++]=e,t.pending_buf[t.sym_buf+t.sym_next++]=e>>8,t.pending_buf[t.sym_buf+t.sym_next++]=a,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(l[a]+256+1)]++,t.dyn_dtree[2*m(e)]++),t.sym_next===t.sym_end),_tr_align:t=>{g(t,2,3),p(t,256,s),(t=>{16===t.bi_valid?(b(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)})(t)}};var F=(t,e,a,i)=>{let n=65535&t|0,s=t>>>16&65535|0,r=0;for(;0!==a;){r=a>2e3?2e3:a,a-=r;do{n=n+e[i++]|0,s=s+n|0}while(--r);n%=65521,s%=65521}return n|s<<16|0};const L=new Uint32Array((()=>{let t,e=[];for(var a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e})());var N=(t,e,a,i)=>{const n=L,s=i+a;t^=-1;for(let a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t},I={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},B={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:C,_tr_stored_block:H,_tr_flush_block:M,_tr_tally:j,_tr_align:K}=O,{Z_NO_FLUSH:P,Z_PARTIAL_FLUSH:Y,Z_FULL_FLUSH:G,Z_FINISH:X,Z_BLOCK:W,Z_OK:q,Z_STREAM_END:J,Z_STREAM_ERROR:Q,Z_DATA_ERROR:V,Z_BUF_ERROR:$,Z_DEFAULT_COMPRESSION:tt,Z_FILTERED:et,Z_HUFFMAN_ONLY:at,Z_RLE:it,Z_FIXED:nt,Z_DEFAULT_STRATEGY:st,Z_UNKNOWN:rt,Z_DEFLATED:ot}=B,lt=(t,e)=>(t.msg=I[e],e),ht=t=>2*t-(t>4?9:0),dt=t=>{let e=t.length;for(;--e>=0;)t[e]=0},_t=t=>{let e,a,i,n=t.w_size;e=t.hash_size,i=e;do{a=t.head[--i],t.head[i]=a>=n?a-n:0}while(--e);e=n,i=e;do{a=t.prev[--i],t.prev[i]=a>=n?a-n:0}while(--e)};let ft=(t,e,a)=>(e<<t.hash_shift^a)&t.hash_mask;const ct=t=>{const e=t.state;let a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},ut=(t,e)=>{M(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,ct(t.strm)},wt=(t,e)=>{t.pending_buf[t.pending++]=e},mt=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},bt=(t,e,a,i)=>{let n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,e.set(t.input.subarray(t.next_in,t.next_in+n),a),1===t.state.wrap?t.adler=F(t.adler,e,n,a):2===t.state.wrap&&(t.adler=N(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)},gt=(t,e)=>{let a,i,n=t.max_chain_length,s=t.strstart,r=t.prev_length,o=t.nice_match;const l=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,h=t.window,d=t.w_mask,_=t.prev,f=t.strstart+258;let c=h[s+r-1],u=h[s+r];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(a=e,h[a+r]===u&&h[a+r-1]===c&&h[a]===h[s]&&h[++a]===h[s+1]){s+=2,a++;do{}while(h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&s<f);if(i=258-(f-s),s=f-258,i>r){if(t.match_start=e,r=i,i>=o)break;c=h[s+r-1],u=h[s+r]}}}while((e=_[e&d])>l&&0!=--n);return r<=t.lookahead?r:t.lookahead},pt=t=>{const e=t.w_size;let a,i,n;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-262)&&(t.window.set(t.window.subarray(e,e+e-i),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,t.insert>t.strstart&&(t.insert=t.strstart),_t(t),i+=e),0===t.strm.avail_in)break;if(a=bt(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=a,t.lookahead+t.insert>=3)for(n=t.strstart-t.insert,t.ins_h=t.window[n],t.ins_h=ft(t,t.ins_h,t.window[n+1]);t.insert&&(t.ins_h=ft(t,t.ins_h,t.window[n+3-1]),t.prev[n&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=n,n++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)},kt=(t,e)=>{let a,i,n,s=t.pending_buf_size-5>t.w_size?t.w_size:t.pending_buf_size-5,r=0,o=t.strm.avail_in;do{if(a=65535,n=t.bi_valid+42>>3,t.strm.avail_out<n)break;if(n=t.strm.avail_out-n,i=t.strstart-t.block_start,a>i+t.strm.avail_in&&(a=i+t.strm.avail_in),a>n&&(a=n),a<s&&(0===a&&e!==X||e===P||a!==i+t.strm.avail_in))break;r=e===X&&a===i+t.strm.avail_in?1:0,H(t,0,0,r),t.pending_buf[t.pending-4]=a,t.pending_buf[t.pending-3]=a>>8,t.pending_buf[t.pending-2]=~a,t.pending_buf[t.pending-1]=~a>>8,ct(t.strm),i&&(i>a&&(i=a),t.strm.output.set(t.window.subarray(t.block_start,t.block_start+i),t.strm.next_out),t.strm.next_out+=i,t.strm.avail_out-=i,t.strm.total_out+=i,t.block_start+=i,a-=i),a&&(bt(t.strm,t.strm.output,t.strm.next_out,a),t.strm.next_out+=a,t.strm.avail_out-=a,t.strm.total_out+=a)}while(0===r);return o-=t.strm.avail_in,o&&(o>=t.w_size?(t.matches=2,t.window.set(t.strm.input.subarray(t.strm.next_in-t.w_size,t.strm.next_in),0),t.strstart=t.w_size,t.insert=t.strstart):(t.window_size-t.strstart<=o&&(t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,t.insert>t.strstart&&(t.insert=t.strstart)),t.window.set(t.strm.input.subarray(t.strm.next_in-o,t.strm.next_in),t.strstart),t.strstart+=o,t.insert+=o>t.w_size-t.insert?t.w_size-t.insert:o),t.block_start=t.strstart),t.high_water<t.strstart&&(t.high_water=t.strstart),r?4:e!==P&&e!==X&&0===t.strm.avail_in&&t.strstart===t.block_start?2:(n=t.window_size-t.strstart,t.strm.avail_in>n&&t.block_start>=t.w_size&&(t.block_start-=t.w_size,t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,n+=t.w_size,t.insert>t.strstart&&(t.insert=t.strstart)),n>t.strm.avail_in&&(n=t.strm.avail_in),n&&(bt(t.strm,t.window,t.strstart,n),t.strstart+=n,t.insert+=n>t.w_size-t.insert?t.w_size-t.insert:n),t.high_water<t.strstart&&(t.high_water=t.strstart),n=t.bi_valid+42>>3,n=t.pending_buf_size-n>65535?65535:t.pending_buf_size-n,s=n>t.w_size?t.w_size:n,i=t.strstart-t.block_start,(i>=s||(i||e===X)&&e!==P&&0===t.strm.avail_in&&i<=n)&&(a=i>n?n:i,r=e===X&&0===t.strm.avail_in&&a===i?1:0,H(t,t.block_start,a,r),t.block_start+=a,ct(t.strm)),r?3:1)},vt=(t,e)=>{let a,i;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a)),t.match_length>=3)if(i=j(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=ft(t,t.ins_h,t.window[t.strstart+1]);else i=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2},yt=(t,e)=>{let a,i,n;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a),t.match_length<=5&&(t.strategy===et||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-3,i=j(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,i&&(ut(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if(i=j(t,0,t.window[t.strstart-1]),i&&ut(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=j(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2};function xt(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}const zt=[new xt(0,0,0,0,kt),new xt(4,4,8,4,vt),new xt(4,5,16,8,vt),new xt(4,6,32,32,vt),new xt(4,4,16,16,yt),new xt(8,16,32,32,yt),new xt(8,16,128,128,yt),new xt(8,32,128,256,yt),new xt(32,128,258,1024,yt),new xt(32,258,258,4096,yt)];function At(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ot,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),dt(this.dyn_ltree),dt(this.dyn_dtree),dt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),dt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),dt(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Et=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||42!==e.status&&57!==e.status&&69!==e.status&&73!==e.status&&91!==e.status&&103!==e.status&&113!==e.status&&666!==e.status?1:0},Rt=t=>{if(Et(t))return lt(t,Q);t.total_in=t.total_out=0,t.data_type=rt;const e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=2===e.wrap?57:e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=-2,C(e),q},Zt=t=>{const e=Rt(t);var a;return e===q&&((a=t.state).window_size=2*a.w_size,dt(a.head),a.max_lazy_match=zt[a.level].max_lazy,a.good_match=zt[a.level].good_length,a.nice_match=zt[a.level].nice_length,a.max_chain_length=zt[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=2,a.match_available=0,a.ins_h=0),e},Ut=(t,e,a,i,n,s)=>{if(!t)return Q;let r=1;if(e===tt&&(e=6),i<0?(r=0,i=-i):i>15&&(r=2,i-=16),n<1||n>9||a!==ot||i<8||i>15||e<0||e>9||s<0||s>nt||8===i&&1!==r)return lt(t,Q);8===i&&(i=9);const o=new At;return t.state=o,o.strm=t,o.status=42,o.wrap=r,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new Uint8Array(2*o.w_size),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=3*(o.lit_bufsize-1),o.level=e,o.strategy=s,o.method=a,Zt(t)};var St={deflateInit:(t,e)=>Ut(t,e,ot,15,8,st),deflateInit2:Ut,deflateReset:Zt,deflateResetKeep:Rt,deflateSetHeader:(t,e)=>Et(t)||2!==t.state.wrap?Q:(t.state.gzhead=e,q),deflate:(t,e)=>{if(Et(t)||e>W||e<0)return t?lt(t,Q):Q;const a=t.state;if(!t.output||0!==t.avail_in&&!t.input||666===a.status&&e!==X)return lt(t,0===t.avail_out?$:Q);const i=a.last_flush;if(a.last_flush=e,0!==a.pending){if(ct(t),0===t.avail_out)return a.last_flush=-1,q}else if(0===t.avail_in&&ht(e)<=ht(i)&&e!==X)return lt(t,$);if(666===a.status&&0!==t.avail_in)return lt(t,$);if(42===a.status&&0===a.wrap&&(a.status=113),42===a.status){let e=ot+(a.w_bits-8<<4)<<8,i=-1;if(i=a.strategy>=at||a.level<2?0:a.level<6?1:6===a.level?2:3,e|=i<<6,0!==a.strstart&&(e|=32),e+=31-e%31,mt(a,e),0!==a.strstart&&(mt(a,t.adler>>>16),mt(a,65535&t.adler)),t.adler=1,a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(57===a.status)if(t.adler=0,wt(a,31),wt(a,139),wt(a,8),a.gzhead)wt(a,(a.gzhead.text?1:0)+(a.gzhead.hcrc?2:0)+(a.gzhead.extra?4:0)+(a.gzhead.name?8:0)+(a.gzhead.comment?16:0)),wt(a,255&a.gzhead.time),wt(a,a.gzhead.time>>8&255),wt(a,a.gzhead.time>>16&255),wt(a,a.gzhead.time>>24&255),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,255&a.gzhead.os),a.gzhead.extra&&a.gzhead.extra.length&&(wt(a,255&a.gzhead.extra.length),wt(a,a.gzhead.extra.length>>8&255)),a.gzhead.hcrc&&(t.adler=N(t.adler,a.pending_buf,a.pending,0)),a.gzindex=0,a.status=69;else if(wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,3),a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q;if(69===a.status){if(a.gzhead.extra){let e=a.pending,i=(65535&a.gzhead.extra.length)-a.gzindex;for(;a.pending+i>a.pending_buf_size;){let n=a.pending_buf_size-a.pending;if(a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex,a.gzindex+n),a.pending),a.pending=a.pending_buf_size,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex+=n,ct(t),0!==a.pending)return a.last_flush=-1,q;e=0,i-=n}let n=new Uint8Array(a.gzhead.extra);a.pending_buf.set(n.subarray(a.gzindex,a.gzindex+i),a.pending),a.pending+=i,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex=0}a.status=73}if(73===a.status){if(a.gzhead.name){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.name.length?255&a.gzhead.name.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),a.gzindex=0}a.status=91}if(91===a.status){if(a.gzhead.comment){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.comment.length?255&a.gzhead.comment.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i))}a.status=103}if(103===a.status){if(a.gzhead.hcrc){if(a.pending+2>a.pending_buf_size&&(ct(t),0!==a.pending))return a.last_flush=-1,q;wt(a,255&t.adler),wt(a,t.adler>>8&255),t.adler=0}if(a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(0!==t.avail_in||0!==a.lookahead||e!==P&&666!==a.status){let i=0===a.level?kt(a,e):a.strategy===at?((t,e)=>{let a;for(;;){if(0===t.lookahead&&(pt(t),0===t.lookahead)){if(e===P)return 1;break}if(t.match_length=0,a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):a.strategy===it?((t,e)=>{let a,i,n,s;const r=t.window;for(;;){if(t.lookahead<=258){if(pt(t),t.lookahead<=258&&e===P)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=t.strstart-1,i=r[n],i===r[++n]&&i===r[++n]&&i===r[++n])){s=t.strstart+258;do{}while(i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&n<s);t.match_length=258-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=j(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):zt[a.level].func(a,e);if(3!==i&&4!==i||(a.status=666),1===i||3===i)return 0===t.avail_out&&(a.last_flush=-1),q;if(2===i&&(e===Y?K(a):e!==W&&(H(a,0,0,!1),e===G&&(dt(a.head),0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),ct(t),0===t.avail_out))return a.last_flush=-1,q}return e!==X?q:a.wrap<=0?J:(2===a.wrap?(wt(a,255&t.adler),wt(a,t.adler>>8&255),wt(a,t.adler>>16&255),wt(a,t.adler>>24&255),wt(a,255&t.total_in),wt(a,t.total_in>>8&255),wt(a,t.total_in>>16&255),wt(a,t.total_in>>24&255)):(mt(a,t.adler>>>16),mt(a,65535&t.adler)),ct(t),a.wrap>0&&(a.wrap=-a.wrap),0!==a.pending?q:J)},deflateEnd:t=>{if(Et(t))return Q;const e=t.state.status;return t.state=null,113===e?lt(t,V):q},deflateSetDictionary:(t,e)=>{let a=e.length;if(Et(t))return Q;const i=t.state,n=i.wrap;if(2===n||1===n&&42!==i.status||i.lookahead)return Q;if(1===n&&(t.adler=F(t.adler,e,a,0)),i.wrap=0,a>=i.w_size){0===n&&(dt(i.head),i.strstart=0,i.block_start=0,i.insert=0);let t=new Uint8Array(i.w_size);t.set(e.subarray(a-i.w_size,a),0),e=t,a=i.w_size}const s=t.avail_in,r=t.next_in,o=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,pt(i);i.lookahead>=3;){let t=i.strstart,e=i.lookahead-2;do{i.ins_h=ft(i,i.ins_h,i.window[t+3-1]),i.prev[t&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=t,t++}while(--e);i.strstart=t,i.lookahead=2,pt(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=r,t.input=o,t.avail_in=s,i.wrap=n,q},deflateInfo:"pako deflate (from Nodeca project)"};const Dt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var Tt=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(const e in a)Dt(a,e)&&(t[e]=a[e])}}return t},Ot=t=>{let e=0;for(let a=0,i=t.length;a<i;a++)e+=t[a].length;const a=new Uint8Array(e);for(let e=0,i=0,n=t.length;e<n;e++){let n=t[e];a.set(n,i),i+=n.length}return a};let Ft=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){Ft=!1}const Lt=new Uint8Array(256);for(let t=0;t<256;t++)Lt[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Lt[254]=Lt[254]=1;var Nt=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,i,n,s,r=t.length,o=0;for(n=0;n<r;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),o+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(o),s=0,n=0;s<o;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},It=(t,e)=>{const a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let i,n;const s=new Array(2*a);for(n=0,i=0;i<a;){let e=t[i++];if(e<128){s[n++]=e;continue}let r=Lt[e];if(r>4)s[n++]=65533,i+=r-1;else{for(e&=2===r?31:3===r?15:7;r>1&&i<a;)e=e<<6|63&t[i++],r--;r>1?s[n++]=65533:e<65536?s[n++]=e:(e-=65536,s[n++]=55296|e>>10&1023,s[n++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&Ft)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let a="";for(let i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a})(s,n)},Bt=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let a=e-1;for(;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+Lt[t[a]]>e?a:e};var Ct=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};const Ht=Object.prototype.toString,{Z_NO_FLUSH:Mt,Z_SYNC_FLUSH:jt,Z_FULL_FLUSH:Kt,Z_FINISH:Pt,Z_OK:Yt,Z_STREAM_END:Gt,Z_DEFAULT_COMPRESSION:Xt,Z_DEFAULT_STRATEGY:Wt,Z_DEFLATED:qt}=B;function Jt(t){this.options=Tt({level:Xt,method:qt,chunkSize:16384,windowBits:15,memLevel:8,strategy:Wt},t||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=St.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==Yt)throw new Error(I[a]);if(e.header&&St.deflateSetHeader(this.strm,e.header),e.dictionary){let t;if(t="string"==typeof e.dictionary?Nt(e.dictionary):"[object ArrayBuffer]"===Ht.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=St.deflateSetDictionary(this.strm,t),a!==Yt)throw new Error(I[a]);this._dict_set=!0}}function Qt(t,e){const a=new Jt(e);if(a.push(t,!0),a.err)throw a.msg||I[a.err];return a.result}Jt.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize;let n,s;if(this.ended)return!1;for(s=e===~~e?e:!0===e?Pt:Mt,"string"==typeof t?a.input=Nt(t):"[object ArrayBuffer]"===Ht.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;)if(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),(s===jt||s===Kt)&&a.avail_out<=6)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else{if(n=St.deflate(a,s),n===Gt)return a.next_out>0&&this.onData(a.output.subarray(0,a.next_out)),n=St.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Yt;if(0!==a.avail_out){if(s>0&&a.next_out>0)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else if(0===a.avail_in)break}else this.onData(a.output)}return!0},Jt.prototype.onData=function(t){this.chunks.push(t)},Jt.prototype.onEnd=function(t){t===Yt&&(this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Vt={Deflate:Jt,deflate:Qt,deflateRaw:function(t,e){return(e=e||{}).raw=!0,Qt(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,Qt(t,e)},constants:B};var $t=function(t,e){let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z,A;const E=t.state;a=t.next_in,z=t.input,i=a+(t.avail_in-5),n=t.next_out,A=t.output,s=n-(e-t.avail_out),r=n+(t.avail_out-257),o=E.dmax,l=E.wsize,h=E.whave,d=E.wnext,_=E.window,f=E.hold,c=E.bits,u=E.lencode,w=E.distcode,m=(1<<E.lenbits)-1,b=(1<<E.distbits)-1;t:do{c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=u[f&m];e:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,0===p)A[n++]=65535&g;else{if(!(16&p)){if(0==(64&p)){g=u[(65535&g)+(f&(1<<p)-1)];continue e}if(32&p){E.mode=16191;break t}t.msg="invalid literal/length code",E.mode=16209;break t}k=65535&g,p&=15,p&&(c<p&&(f+=z[a++]<<c,c+=8),k+=f&(1<<p)-1,f>>>=p,c-=p),c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=w[f&b];a:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,!(16&p)){if(0==(64&p)){g=w[(65535&g)+(f&(1<<p)-1)];continue a}t.msg="invalid distance code",E.mode=16209;break t}if(v=65535&g,p&=15,c<p&&(f+=z[a++]<<c,c+=8,c<p&&(f+=z[a++]<<c,c+=8)),v+=f&(1<<p)-1,v>o){t.msg="invalid distance too far back",E.mode=16209;break t}if(f>>>=p,c-=p,p=n-s,v>p){if(p=v-p,p>h&&E.sane){t.msg="invalid distance too far back",E.mode=16209;break t}if(y=0,x=_,0===d){if(y+=l-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}else if(d<p){if(y+=l+d-p,p-=d,p<k){k-=p;do{A[n++]=_[y++]}while(--p);if(y=0,d<k){p=d,k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}}else if(y+=d-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}for(;k>2;)A[n++]=x[y++],A[n++]=x[y++],A[n++]=x[y++],k-=3;k&&(A[n++]=x[y++],k>1&&(A[n++]=x[y++]))}else{y=n-v;do{A[n++]=A[y++],A[n++]=A[y++],A[n++]=A[y++],k-=3}while(k>2);k&&(A[n++]=A[y++],k>1&&(A[n++]=A[y++]))}break}}break}}while(a<i&&n<r);k=c>>3,a-=k,c-=k<<3,f&=(1<<c)-1,t.next_in=a,t.next_out=n,t.avail_in=a<i?i-a+5:5-(a-i),t.avail_out=n<r?r-n+257:257-(n-r),E.hold=f,E.bits=c};const te=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),ee=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),ae=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),ie=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var ne=(t,e,a,i,n,s,r,o)=>{const l=o.bits;let h,d,_,f,c,u,w=0,m=0,b=0,g=0,p=0,k=0,v=0,y=0,x=0,z=0,A=null;const E=new Uint16Array(16),R=new Uint16Array(16);let Z,U,S,D=null;for(w=0;w<=15;w++)E[w]=0;for(m=0;m<i;m++)E[e[a+m]]++;for(p=l,g=15;g>=1&&0===E[g];g--);if(p>g&&(p=g),0===g)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(b=1;b<g&&0===E[b];b++);for(p<b&&(p=b),y=1,w=1;w<=15;w++)if(y<<=1,y-=E[w],y<0)return-1;if(y>0&&(0===t||1!==g))return-1;for(R[1]=0,w=1;w<15;w++)R[w+1]=R[w]+E[w];for(m=0;m<i;m++)0!==e[a+m]&&(r[R[e[a+m]]++]=m);if(0===t?(A=D=r,u=20):1===t?(A=te,D=ee,u=257):(A=ae,D=ie,u=0),z=0,m=0,w=b,c=s,k=p,v=0,_=-1,x=1<<p,f=x-1,1===t&&x>852||2===t&&x>592)return 1;for(;;){Z=w-v,r[m]+1<u?(U=0,S=r[m]):r[m]>=u?(U=D[r[m]-u],S=A[r[m]-u]):(U=96,S=0),h=1<<w-v,d=1<<k,b=d;do{d-=h,n[c+(z>>v)+d]=Z<<24|U<<16|S|0}while(0!==d);for(h=1<<w-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,m++,0==--E[w]){if(w===g)break;w=e[a+r[m]]}if(w>p&&(z&f)!==_){for(0===v&&(v=p),c+=b,k=w-v,y=1<<k;k+v<g&&(y-=E[k+v],!(y<=0));)k++,y<<=1;if(x+=1<<k,1===t&&x>852||2===t&&x>592)return 1;_=z&f,n[_]=p<<24|k<<16|c-s|0}}return 0!==z&&(n[c+z]=w-v<<24|64<<16|0),o.bits=p,0};const{Z_FINISH:se,Z_BLOCK:re,Z_TREES:oe,Z_OK:le,Z_STREAM_END:he,Z_NEED_DICT:de,Z_STREAM_ERROR:_e,Z_DATA_ERROR:fe,Z_MEM_ERROR:ce,Z_BUF_ERROR:ue,Z_DEFLATED:we}=B,me=16209,be=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24);function ge(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const pe=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||e.mode<16180||e.mode>16211?1:0},ke=t=>{if(pe(t))return _e;const e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=16180,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,le},ve=t=>{if(pe(t))return _e;const e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,ke(t)},ye=(t,e)=>{let a;if(pe(t))return _e;const i=t.state;return e<0?(a=0,e=-e):(a=5+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?_e:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,ve(t))},xe=(t,e)=>{if(!t)return _e;const a=new ge;t.state=a,a.strm=t,a.window=null,a.mode=16180;const i=ye(t,e);return i!==le&&(t.state=null),i};let ze,Ae,Ee=!0;const Re=t=>{if(Ee){ze=new Int32Array(512),Ae=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(ne(1,t.lens,0,288,ze,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;ne(2,t.lens,0,32,Ae,0,t.work,{bits:5}),Ee=!1}t.lencode=ze,t.lenbits=9,t.distcode=Ae,t.distbits=5},Ze=(t,e,a,i)=>{let n;const s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(a-s.wsize,a),0),s.wnext=0,s.whave=s.wsize):(n=s.wsize-s.wnext,n>i&&(n=i),s.window.set(e.subarray(a-i,a-i+n),s.wnext),(i-=n)?(s.window.set(e.subarray(a-i,a),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0};var Ue={inflateReset:ve,inflateReset2:ye,inflateResetKeep:ke,inflateInit:t=>xe(t,15),inflateInit2:xe,inflate:(t,e)=>{let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z=0;const A=new Uint8Array(4);let E,R;const Z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(pe(t)||!t.output||!t.input&&0!==t.avail_in)return _e;a=t.state,16191===a.mode&&(a.mode=16192),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,_=o,f=l,x=le;t:for(;;)switch(a.mode){case 16180:if(0===a.wrap){a.mode=16192;break}for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(2&a.wrap&&35615===h){0===a.wbits&&(a.wbits=15),a.check=0,A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0),h=0,d=0,a.mode=16181;break}if(a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",a.mode=me;break}if((15&h)!==we){t.msg="unknown compression method",a.mode=me;break}if(h>>>=4,d-=4,y=8+(15&h),0===a.wbits&&(a.wbits=y),y>15||y>a.wbits){t.msg="invalid window size",a.mode=me;break}a.dmax=1<<a.wbits,a.flags=0,t.adler=a.check=1,a.mode=512&h?16189:16191,h=0,d=0;break;case 16181:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.flags=h,(255&a.flags)!==we){t.msg="unknown compression method",a.mode=me;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=me;break}a.head&&(a.head.text=h>>8&1),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16182;case 16182:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.time=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,A[2]=h>>>16&255,A[3]=h>>>24&255,a.check=N(a.check,A,4,0)),h=0,d=0,a.mode=16183;case 16183:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.xflags=255&h,a.head.os=h>>8),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16184;case 16184:if(1024&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length=h,a.head&&(a.head.extra_len=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0}else a.head&&(a.head.extra=null);a.mode=16185;case 16185:if(1024&a.flags&&(c=a.length,c>o&&(c=o),c&&(a.head&&(y=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(s,s+c),y)),512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,a.length-=c),a.length))break t;a.length=0,a.mode=16186;case 16186:if(2048&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.name+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=16187;case 16187:if(4096&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.comment+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.comment=null);a.mode=16188;case 16188:if(512&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(65535&a.check)){t.msg="header crc mismatch",a.mode=me;break}h=0,d=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=16191;break;case 16189:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}t.adler=a.check=be(h),h=0,d=0,a.mode=16190;case 16190:if(0===a.havedict)return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,de;t.adler=a.check=1,a.mode=16191;case 16191:if(e===re||e===oe)break t;case 16192:if(a.last){h>>>=7&d,d-=7&d,a.mode=16206;break}for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}switch(a.last=1&h,h>>>=1,d-=1,3&h){case 0:a.mode=16193;break;case 1:if(Re(a),a.mode=16199,e===oe){h>>>=2,d-=2;break t}break;case 2:a.mode=16196;break;case 3:t.msg="invalid block type",a.mode=me}h>>>=2,d-=2;break;case 16193:for(h>>>=7&d,d-=7&d;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if((65535&h)!=(h>>>16^65535)){t.msg="invalid stored block lengths",a.mode=me;break}if(a.length=65535&h,h=0,d=0,a.mode=16194,e===oe)break t;case 16194:a.mode=16195;case 16195:if(c=a.length,c){if(c>o&&(c=o),c>l&&(c=l),0===c)break t;n.set(i.subarray(s,s+c),r),o-=c,s+=c,l-=c,r+=c,a.length-=c;break}a.mode=16191;break;case 16196:for(;d<14;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.nlen=257+(31&h),h>>>=5,d-=5,a.ndist=1+(31&h),h>>>=5,d-=5,a.ncode=4+(15&h),h>>>=4,d-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=me;break}a.have=0,a.mode=16197;case 16197:for(;a.have<a.ncode;){for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.lens[Z[a.have++]]=7&h,h>>>=3,d-=3}for(;a.have<19;)a.lens[Z[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,E={bits:a.lenbits},x=ne(0,a.lens,0,19,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid code lengths set",a.mode=me;break}a.have=0,a.mode=16198;case 16198:for(;a.have<a.nlen+a.ndist;){for(;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(g<16)h>>>=m,d-=m,a.lens[a.have++]=g;else{if(16===g){for(R=m+2;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(h>>>=m,d-=m,0===a.have){t.msg="invalid bit length repeat",a.mode=me;break}y=a.lens[a.have-1],c=3+(3&h),h>>>=2,d-=2}else if(17===g){for(R=m+3;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=3+(7&h),h>>>=3,d-=3}else{for(R=m+7;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=11+(127&h),h>>>=7,d-=7}if(a.have+c>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=me;break}for(;c--;)a.lens[a.have++]=y}}if(a.mode===me)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=me;break}if(a.lenbits=9,E={bits:a.lenbits},x=ne(1,a.lens,0,a.nlen,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid literal/lengths set",a.mode=me;break}if(a.distbits=6,a.distcode=a.distdyn,E={bits:a.distbits},x=ne(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,E),a.distbits=E.bits,x){t.msg="invalid distances set",a.mode=me;break}if(a.mode=16199,e===oe)break t;case 16199:a.mode=16200;case 16200:if(o>=6&&l>=258){t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,$t(t,f),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,16191===a.mode&&(a.back=-1);break}for(a.back=0;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(b&&0==(240&b)){for(p=m,k=b,v=g;z=a.lencode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,a.length=g,0===b){a.mode=16205;break}if(32&b){a.back=-1,a.mode=16191;break}if(64&b){t.msg="invalid literal/length code",a.mode=me;break}a.extra=15&b,a.mode=16201;case 16201:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=16202;case 16202:for(;z=a.distcode[h&(1<<a.distbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(0==(240&b)){for(p=m,k=b,v=g;z=a.distcode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,64&b){t.msg="invalid distance code",a.mode=me;break}a.offset=g,a.extra=15&b,a.mode=16203;case 16203:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.offset+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=me;break}a.mode=16204;case 16204:if(0===l)break t;if(c=f-l,a.offset>c){if(c=a.offset-c,c>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=me;break}c>a.wnext?(c-=a.wnext,u=a.wsize-c):u=a.wnext-c,c>a.length&&(c=a.length),w=a.window}else w=n,u=r-a.offset,c=a.length;c>l&&(c=l),l-=c,a.length-=c;do{n[r++]=w[u++]}while(--c);0===a.length&&(a.mode=16200);break;case 16205:if(0===l)break t;n[r++]=a.length,l--,a.mode=16200;break;case 16206:if(a.wrap){for(;d<32;){if(0===o)break t;o--,h|=i[s++]<<d,d+=8}if(f-=l,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,r-f):F(a.check,n,f,r-f)),f=l,4&a.wrap&&(a.flags?h:be(h))!==a.check){t.msg="incorrect data check",a.mode=me;break}h=0,d=0}a.mode=16207;case 16207:if(a.wrap&&a.flags){for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=me;break}h=0,d=0}a.mode=16208;case 16208:x=he;break t;case me:x=fe;break t;case 16210:return ce;default:return _e}return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,(a.wsize||f!==t.avail_out&&a.mode<me&&(a.mode<16206||e!==se))&&Ze(t,t.output,t.next_out,f-t.avail_out),_-=t.avail_in,f-=t.avail_out,t.total_in+=_,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,t.next_out-f):F(a.check,n,f,t.next_out-f)),t.data_type=a.bits+(a.last?64:0)+(16191===a.mode?128:0)+(16199===a.mode||16194===a.mode?256:0),(0===_&&0===f||e===se)&&x===le&&(x=ue),x},inflateEnd:t=>{if(pe(t))return _e;let e=t.state;return e.window&&(e.window=null),t.state=null,le},inflateGetHeader:(t,e)=>{if(pe(t))return _e;const a=t.state;return 0==(2&a.wrap)?_e:(a.head=e,e.done=!1,le)},inflateSetDictionary:(t,e)=>{const a=e.length;let i,n,s;return pe(t)?_e:(i=t.state,0!==i.wrap&&16190!==i.mode?_e:16190===i.mode&&(n=1,n=F(n,e,a,0),n!==i.check)?fe:(s=Ze(t,e,a,a),s?(i.mode=16210,ce):(i.havedict=1,le)))},inflateInfo:"pako inflate (from Nodeca project)"};var Se=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const De=Object.prototype.toString,{Z_NO_FLUSH:Te,Z_FINISH:Oe,Z_OK:Fe,Z_STREAM_END:Le,Z_NEED_DICT:Ne,Z_STREAM_ERROR:Ie,Z_DATA_ERROR:Be,Z_MEM_ERROR:Ce}=B;function He(t){this.options=Tt({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=Ue.inflateInit2(this.strm,e.windowBits);if(a!==Fe)throw new Error(I[a]);if(this.header=new Se,Ue.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Nt(e.dictionary):"[object ArrayBuffer]"===De.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(a=Ue.inflateSetDictionary(this.strm,e.dictionary),a!==Fe)))throw new Error(I[a])}He.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize,n=this.options.dictionary;let s,r,o;if(this.ended)return!1;for(r=e===~~e?e:!0===e?Oe:Te,"[object ArrayBuffer]"===De.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;){for(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),s=Ue.inflate(a,r),s===Ne&&n&&(s=Ue.inflateSetDictionary(a,n),s===Fe?s=Ue.inflate(a,r):s===Be&&(s=Ne));a.avail_in>0&&s===Le&&a.state.wrap>0&&0!==t[a.next_in];)Ue.inflateReset(a),s=Ue.inflate(a,r);switch(s){case Ie:case Be:case Ne:case Ce:return this.onEnd(s),this.ended=!0,!1}if(o=a.avail_out,a.next_out&&(0===a.avail_out||s===Le))if("string"===this.options.to){let t=Bt(a.output,a.next_out),e=a.next_out-t,n=It(a.output,t);a.next_out=e,a.avail_out=i-e,e&&a.output.set(a.output.subarray(t,t+e),0),this.onData(n)}else this.onData(a.output.length===a.next_out?a.output:a.output.subarray(0,a.next_out));if(s!==Fe||0!==o){if(s===Le)return s=Ue.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(0===a.avail_in)break}}return!0},He.prototype.onData=function(t){this.chunks.push(t)},He.prototype.onEnd=function(t){t===Fe&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};const{Deflate:Me,deflate:je,deflateRaw:Ke,gzip:Pe}=Vt;var Ye=Me,Ge=je,Xe=B;const We=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const e=this._hasEvents?",":"";this.deflate.push(e+t,Xe.Z_SYNC_FLUSH),this._hasEvents=!0}finish(){if(this.deflate.push("]",Xe.Z_FINISH),this.deflate.err)throw this.deflate.err;const t=this.deflate.result;return this._init(),t}_init(){this._hasEvents=!1,this.deflate=new Ye,this.deflate.push("[",Xe.Z_NO_FLUSH)}},qe={clear:()=>{We.clear()},addEvent:t=>We.addEvent(t),finish:()=>We.finish(),compress:t=>function(t){return Ge(t)}(t)};addEventListener("message",(function(t){const e=t.data.method,a=t.data.id,i=t.data.arg;if(e in qe&&"function"==typeof qe[e])try{const t=qe[e](i);postMessage({id:a,method:e,success:!0,response:t})}catch(t){postMessage({id:a,method:e,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});`;
            class ed extends Error {
                constructor() {
                    super("Event buffer exceeded maximum size of 20000000.")
                }
            }
            class eh {
                __init() {
                    this._totalSize = 0
                }
                constructor() {
                    eh.prototype.__init.call(this), this.events = []
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
                    if (this._totalSize += e, this._totalSize > 2e7) throw new ed;
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
                    return t ? t8(t) : null
                }
            }
            class e_ {
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
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.log("[Replay] Destroying compression worker"), this._worker.terminate()
                }
                postMessage(t, e) {
                    let n = this._getAndIncrementId();
                    return new Promise((r, i) => {
                        let s = ({
                            data: e
                        }) => {
                            if (e.method === t && e.id === n) {
                                if (this._worker.removeEventListener("message", s), !e.success) {
                                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.error("[Replay]", e.response), i(Error("Error in compression worker"));
                                    return
                                }
                                r(e.response)
                            }
                        };
                        this._worker.addEventListener("message", s), this._worker.postMessage({
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
            class ef {
                __init() {
                    this._totalSize = 0
                }
                constructor(t) {
                    ef.prototype.__init.call(this), this._worker = new e_(t), this._earliestTimestamp = null
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
                    let e = t8(t.timestamp);
                    (!this._earliestTimestamp || e < this._earliestTimestamp) && (this._earliestTimestamp = e);
                    let n = JSON.stringify(t);
                    return (this._totalSize += n.length, this._totalSize > 2e7) ? Promise.reject(new ed) : this._sendEventToWorker(n)
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
            class ep {
                constructor(t) {
                    this._fallback = new eh, this._compression = new ef(t), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
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
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.log("[Replay] Failed to load the compression worker, falling back to simple buffer");
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
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.warn("[Replay] Failed to add events when switching buffers.", t)
                    }
                }
            }

            function em() {
                try {
                    return "sessionStorage" in z && !!z.sessionStorage
                } catch (t) {
                    return !1
                }
            }

            function eg(t, e, n = +new Date) {
                return null === t || void 0 === e || !!(e < 0) || 0 !== e && t + e <= n
            }

            function ey(t, e, n = +new Date) {
                return eg(t.started, e.maxSessionLife, n) || eg(t.lastActivity, e.sessionIdleExpire, n)
            }

            function ev(t) {
                return void 0 !== t && Math.random() < t
            }

            function eb(t) {
                if (!!em()) try {
                    z.sessionStorage.setItem($, JSON.stringify(t))
                } catch (t) {}
            }

            function eE(t) {
                let e = Date.now(),
                    n = t.id || (0, A.DM)(),
                    r = t.started || e,
                    i = t.lastActivity || e,
                    s = t.segmentId || 0;
                return {
                    id: n,
                    started: r,
                    lastActivity: i,
                    segmentId: s,
                    sampled: t.sampled,
                    shouldRefresh: !0
                }
            }

            function eS({
                timeouts: t,
                currentSession: e,
                stickySession: n,
                sessionSampleRate: r,
                allowBuffering: i
            }) {
                let s = e || n && function() {
                    if (!em()) return null;
                    try {
                        let t = z.sessionStorage.getItem($);
                        if (!t) return null;
                        let e = JSON.parse(t);
                        return eE(e)
                    } catch (t) {
                        return null
                    }
                }();
                if (s) {
                    if (!ey(s, t) || i && s.shouldRefresh) return {
                        type: "saved",
                        session: s
                    };
                    if (!s.shouldRefresh) return {
                        type: "new",
                        session: eE({
                            sampled: !1
                        })
                    };
                    else("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.log("[Replay] Session has expired")
                }
                return {
                    type: "new",
                    session: function({
                        sessionSampleRate: t,
                        allowBuffering: e,
                        stickySession: n = !1
                    }) {
                        var r, i;
                        let s = eE({
                            sampled: (r = t, i = e, ev(r) ? "session" : !!i && "buffer")
                        });
                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.log(`[Replay] Creating new session: ${s.id}`), n && eb(s), s
                    }({
                        stickySession: n,
                        sessionSampleRate: r,
                        allowBuffering: i
                    })
                }
            }
            async function ew(t, e, n) {
                if (!t.eventBuffer || t.isPaused() || t8(e.timestamp) + t.timeouts.sessionIdlePause < Date.now()) return null;
                try {
                    n && t.eventBuffer.clear();
                    let r = t.getOptions(),
                        i = function(t, e) {
                            try {
                                if ("function" == typeof e && t.type === g.Custom) return e(t)
                            } catch (t) {
                                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.error("[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...", t), null
                            }
                            return t
                        }(e, r.beforeAddRecordingEvent);
                    if (!i) return;
                    return await t.eventBuffer.addEvent(i)
                } catch (r) {
                    let e = r && r instanceof ed ? "addEventSizeExceeded" : "addEvent";
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.error(r), await t.stop(e);
                    let n = (0, k.Gd)().getClient();
                    n && n.recordDroppedEvent("internal_sdk_error", "replay")
                }
            }

            function ek(t) {
                return !t.type
            }

            function eT(t) {
                return "transaction" === t.type
            }

            function eR(t) {
                let e = function() {
                    let t = (0, k.Gd)().getClient();
                    if (!t) return !1;
                    let e = t.getTransport();
                    return !!e && (e.send.__sentry__baseTransport__ || !1)
                }();
                return (n, r) => {
                    if (n.type && !eT(n)) return;
                    let i = r && r.statusCode;
                    if (e && (!i || i < 200 || i >= 300)) return;
                    if (eT(n) && n.contexts && n.contexts.trace && n.contexts.trace.trace_id) {
                        t.getContext().traceIds.add(n.contexts.trace.trace_id);
                        return
                    }
                    if (!n.type) n.event_id && t.getContext().errorIds.add(n.event_id), "buffer" === t.recordingMode && n.tags && n.tags.replayId && setTimeout(() => {
                        t.sendBufferedReplayOrFlush()
                    })
                }
            }

            function ex(t, e) {
                return e.map(({
                    type: e,
                    start: n,
                    end: r,
                    name: i,
                    data: s
                }) => {
                    let a = t.throttledAddEvent({
                        type: g.Custom,
                        timestamp: n,
                        data: {
                            tag: "performanceSpan",
                            payload: {
                                op: e,
                                description: i,
                                startTimestamp: n,
                                endTimestamp: r,
                                data: s
                            }
                        }
                    });
                    return "string" == typeof a ? Promise.resolve(null) : a
                })
            }

            function eD(t, e) {
                var n, r;
                if (!t.isEnabled() || null === e) return;
                if (n = t, r = e.name, !((!("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) || !n.getOptions()._experiments.traceInternals) && function(t) {
                        let e = (0, k.Gd)().getClient(),
                            n = e && e.getDsn();
                        return !!n && t.includes(n.host)
                    }(r))) t.addUpdate(() => (ex(t, [e]), !0))
            }
            let eN = ["true", "false", "null"];

            function eC(t) {
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
                                        if (21 !== e) {
                                            if (23 === e) {
                                                t.pop();
                                            }
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
                                    return eN.includes(n.trim()) ? `${t},"~~":"~~"` : `${t.slice(0,e+1)}"~~"`
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
                                        return eN.includes(n.trim()) ? `${t},"~~"` : `${t.slice(0,e+1)}"~~"`
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

            function eU(t, e) {
                if (!!t) try {
                    if ("string" == typeof t) return e.encode(t).length;
                    if (t instanceof URLSearchParams) return e.encode(t.toString()).length;
                    if (t instanceof FormData) {
                        let n = eY(t);
                        return e.encode(n).length
                    }
                    if (t instanceof Blob) return t.size;
                    if (t instanceof ArrayBuffer) return t.byteLength
                } catch (t) {}
            }

            function eI(t) {
                if (!t) return;
                let e = parseInt(t, 10);
                return isNaN(e) ? void 0 : e
            }

            function eA(t) {
                return "string" == typeof t ? t : t instanceof URLSearchParams ? t.toString() : t instanceof FormData ? eY(t) : void 0
            }

            function eO(t, e) {
                if (!e) return null;
                let {
                    startTimestamp: n,
                    endTimestamp: r,
                    url: i,
                    method: s,
                    statusCode: a,
                    request: o,
                    response: u
                } = e;
                return {
                    type: t,
                    start: n / 1e3,
                    end: r / 1e3,
                    name: i,
                    data: (0, C.Jr)({
                        method: s,
                        statusCode: a,
                        request: o,
                        response: u
                    })
                }
            }

            function eB(t) {
                return {
                    headers: {},
                    size: t,
                    _meta: {
                        warnings: ["URL_SKIPPED"]
                    }
                }
            }

            function eG(t, e, n) {
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
                        warnings: s
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
                            let n = e ? eC(t.slice(0, 15e4)) : t;
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
                return r.body = i, s.length > 0 && (r._meta = {
                    warnings: s
                }), r
            }

            function eM(t, e) {
                return Object.keys(t).reduce((n, r) => {
                    let i = r.toLowerCase();
                    return e.includes(i) && t[r] && (n[i] = t[r]), n
                }, {})
            }

            function eY(t) {
                return new URLSearchParams(t).toString()
            }

            function eL(t, e) {
                let n = function(t, e = z.document.baseURI) {
                    if (t.startsWith("http://") || t.startsWith("https://") || t.startsWith(z.location.origin)) return t;
                    let n = new URL(t, e);
                    if (n.origin !== new URL(e).origin) return t;
                    let r = n.href;
                    return !t.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r
                }(t);
                return (0, B.U0)(n, e)
            }
            async function ez(t, e, n) {
                try {
                    let r = await e$(t, e, n),
                        i = eO("resource.fetch", r);
                    eD(n.replay, i)
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.error("[Replay] Failed to capture fetch breadcrumb", t)
                }
            }
            async function e$(t, e, n) {
                let {
                    startTimestamp: r,
                    endTimestamp: i
                } = e, {
                    url: s,
                    method: a,
                    status_code: o = 0,
                    request_body_size: u,
                    response_body_size: l
                } = t.data, c = eL(s, n.networkDetailAllowUrls) && !eL(s, n.networkDetailDenyUrls), d = c ? function({
                    networkCaptureBodies: t,
                    networkRequestHeaders: e
                }, n, r) {
                    let i = function(t, e) {
                        return 1 === t.length && "string" != typeof t[0] ? eq(t[0], e) : 2 === t.length ? eq(t[1], e) : {}
                    }(n, e);
                    return t ? eG(i, r, eA(ej(n))) : eG(i, r, void 0)
                }(n, e.input, u) : eB(u);
                return {
                    startTimestamp: r,
                    endTimestamp: i,
                    url: s,
                    method: a,
                    statusCode: o,
                    request: d,
                    response: await eP(c, n, e.response, l)
                }
            }
            async function eP(t, {
                networkCaptureBodies: e,
                textEncoder: n,
                networkResponseHeaders: r
            }, i, s) {
                if (!t && void 0 !== s) return eB(s);
                let a = eH(i.headers, r);
                if (!e && void 0 !== s) return eG(a, s, void 0);
                try {
                    let r = i.clone(),
                        o = await eF(r),
                        u = o && o.length && void 0 === s ? eU(o, n) : s;
                    if (!t) return eB(u);
                    if (e) return eG(a, u, o);
                    return eG(a, u, void 0)
                } catch (t) {
                    return eG(a, s, void 0)
                }
            }
            async function eF(t) {
                try {
                    return await t.text()
                } catch (t) {
                    return
                }
            }

            function ej(t = []) {
                if (2 === t.length && "object" == typeof t[1]) return t[1].body
            }

            function eH(t, e) {
                let n = {};
                return e.forEach(e => {
                    t.get(e) && (n[e] = t.get(e))
                }), n
            }

            function eq(t, e) {
                if (!t) return {};
                let n = t.headers;
                return n ? n instanceof Headers ? eH(n, e) : Array.isArray(n) ? {} : eM(n, e) : {}
            }
            async function eW(t, e, n) {
                try {
                    let r = function(t, e, n) {
                            let {
                                startTimestamp: r,
                                endTimestamp: i,
                                input: s,
                                xhr: a
                            } = e, {
                                url: o,
                                method: u,
                                status_code: l = 0,
                                request_body_size: c,
                                response_body_size: d
                            } = t.data;
                            if (!o) return null;
                            if (!eL(o, n.networkDetailAllowUrls) || eL(o, n.networkDetailDenyUrls)) {
                                let t = eB(c);
                                return {
                                    startTimestamp: r,
                                    endTimestamp: i,
                                    url: o,
                                    method: u,
                                    statusCode: l,
                                    request: t,
                                    response: eB(d)
                                }
                            }
                            let h = a[O.xU],
                                _ = h ? eM(h.request_headers, n.networkRequestHeaders) : {},
                                f = eM(function(t) {
                                    let e = t.getAllResponseHeaders();
                                    return e ? e.split("\r\n").reduce((t, e) => {
                                        let [n, r] = e.split(": ");
                                        return t[n.toLowerCase()] = r, t
                                    }, {}) : {}
                                }(a), n.networkResponseHeaders),
                                p = eG(_, c, n.networkCaptureBodies ? eA(s) : void 0);
                            return {
                                startTimestamp: r,
                                endTimestamp: i,
                                url: o,
                                method: u,
                                statusCode: l,
                                request: p,
                                response: eG(f, d, n.networkCaptureBodies ? e.xhr.responseText : void 0)
                            }
                        }(t, e, n),
                        i = eO("resource.xhr", r);
                    eD(n.replay, i)
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.error("[Replay] Failed to capture fetch breadcrumb", t)
                }
            }
            let eZ = null,
                eJ = t => e => {
                    if (!t.isEnabled()) return;
                    let n = function(t) {
                        let e = t.getLastBreadcrumb && t.getLastBreadcrumb();
                        if (eZ === e || !e) return null;
                        return (eZ = e, !e.category || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(e.category) || e.category.startsWith("ui.")) ? null : "console" === e.category ? function(t) {
                            let e = t.data && t.data.arguments;
                            if (!Array.isArray(e) || 0 === e.length) return ei(t);
                            let n = !1,
                                r = e.map(t => {
                                    if (!t) return t;
                                    if ("string" == typeof t) return t.length > 5e3 ? (n = !0, `${t.slice(0,5e3)}…`) : t;
                                    if ("object" == typeof t) try {
                                        let e = (0, N.Fv)(t, 7),
                                            r = JSON.stringify(e);
                                        if (r.length > 5e3) {
                                            let t = eC(r.slice(0, 5e3)),
                                                e = JSON.parse(t);
                                            return n = !0, e
                                        }
                                        return e
                                    } catch (t) {}
                                    return t
                                });
                            return ei({
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
                        }(e) : ei(e)
                    }(e);
                    if (!!n) t9(t, n)
                };

            function eV(t) {
                return !!(t && t.on)
            }
            async function eK(t) {
                try {
                    return Promise.all(ex(t, [function(t) {
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
                    }(z.performance.memory)]))
                } catch (t) {
                    return []
                }
            }
            let eX = {
                resource: function(t) {
                    let {
                        entryType: e,
                        initiatorType: n,
                        name: r,
                        responseEnd: i,
                        startTime: s,
                        decodedBodySize: a,
                        encodedBodySize: o,
                        responseStatus: u,
                        transferSize: l
                    } = t;
                    return ["fetch", "xmlhttprequest"].includes(n) ? null : {
                        type: `${e}.${n}`,
                        start: e0(s),
                        end: e0(i),
                        name: r,
                        data: {
                            size: l,
                            statusCode: u,
                            decodedBodySize: a,
                            encodedBodySize: o
                        }
                    }
                },
                paint: function(t) {
                    let {
                        duration: e,
                        entryType: n,
                        name: r,
                        startTime: i
                    } = t, s = e0(i);
                    return {
                        type: n,
                        name: r,
                        start: s,
                        end: s + e,
                        data: void 0
                    }
                },
                navigation: function(t) {
                    let {
                        entryType: e,
                        name: n,
                        decodedBodySize: r,
                        duration: i,
                        domComplete: s,
                        encodedBodySize: a,
                        domContentLoadedEventStart: o,
                        domContentLoadedEventEnd: u,
                        domInteractive: l,
                        loadEventStart: c,
                        loadEventEnd: d,
                        redirectCount: h,
                        startTime: _,
                        transferSize: f,
                        type: p
                    } = t;
                    return 0 === i ? null : {
                        type: `${e}.${p}`,
                        start: e0(_),
                        end: e0(s),
                        name: n,
                        data: {
                            size: f,
                            decodedBodySize: r,
                            encodedBodySize: a,
                            duration: i,
                            domInteractive: l,
                            domContentLoadedEventStart: o,
                            domContentLoadedEventEnd: u,
                            loadEventStart: c,
                            loadEventEnd: d,
                            domComplete: s,
                            redirectCount: h
                        }
                    }
                },
                "largest-contentful-paint": function(t) {
                    let {
                        entryType: e,
                        startTime: n,
                        size: r
                    } = t, i = 0;
                    if (z.performance) {
                        let t = z.performance.getEntriesByType("navigation")[0];
                        i = t && t.activationStart || 0
                    }
                    let s = Math.max(n - i, 0),
                        a = e0(i) + s / 1e3;
                    return {
                        type: e,
                        name: e,
                        start: a,
                        end: a,
                        data: {
                            value: s,
                            size: r,
                            nodeId: t4.mirror.getId(t.element)
                        }
                    }
                }
            };

            function eQ(t) {
                return void 0 === eX[t.entryType] ? null : eX[t.entryType](t)
            }

            function e0(t) {
                return ((G.Z1 || z.performance.timeOrigin) + t) / 1e3
            }
            async function e1({
                client: t,
                scope: e,
                replayId: n,
                event: r
            }) {
                let i = "object" != typeof t._integrations || null === t._integrations || Array.isArray(t._integrations) ? void 0 : Object.keys(t._integrations),
                    s = await (0, R.R)(t.getOptions(), r, {
                        event_id: n,
                        integrations: i
                    }, e);
                if (!s) return null;
                s.platform = s.platform || "javascript";
                let a = t.getSdkMetadata && t.getSdkMetadata(),
                    {
                        name: o,
                        version: u
                    } = a && a.sdk || {};
                return s.sdk = {
                    ...s.sdk,
                    name: o || "sentry.javascript.unknown",
                    version: u || "0.0.0"
                }, s
            }
            async function e2({
                recordingData: t,
                replayId: e,
                segmentId: n,
                eventContext: r,
                timestamp: i,
                session: s
            }) {
                var a, o, u, l;
                let c;
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
                        urls: h,
                        errorIds: _,
                        traceIds: f,
                        initialTimestamp: p
                    } = r,
                    m = (0, k.Gd)(),
                    g = m.getClient(),
                    y = m.getScope(),
                    v = g && g.getTransport(),
                    b = g && g.getDsn();
                if (!g || !v || !b || !s.sampled) return;
                let E = {
                        type: "replay_event",
                        replay_start_timestamp: p / 1e3,
                        timestamp: i / 1e3,
                        error_ids: _,
                        trace_ids: f,
                        urls: h,
                        replay_id: e,
                        segment_id: n,
                        replay_type: s.sampled
                    },
                    S = await e1({
                        scope: y,
                        client: g,
                        replayId: e,
                        event: E
                    });
                if (!S) {
                    g.recordDroppedEvent("event_processor", "replay", E), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.log("An event processor returned `null`, will not send event.");
                    return
                }
                delete S.sdkProcessingMetadata;
                let w = (a = S, o = d, u = b, l = g.getOptions().tunnel, (0, M.Jd)((0, M.Cd)(a, (0, M.HY)(a), l, u), [
                    [{
                        type: "replay_event"
                    }, a],
                    [{
                        type: "replay_recording",
                        length: "string" == typeof o ? new TextEncoder().encode(o).length : o.length
                    }, o]
                ]));
                try {
                    c = await v.send(w)
                } catch (e) {
                    let t = Error(P);
                    try {
                        t.cause = e
                    } catch (t) {}
                    throw t
                }
                if (!c) return c;
                if ("number" == typeof c.statusCode && (c.statusCode < 200 || c.statusCode >= 300)) throw new e5(c.statusCode);
                return c
            }
            class e5 extends Error {
                constructor(t) {
                    super(`Transport returned status code ${t}`)
                }
            }
            async function e3(t, e = {
                count: 0,
                interval: 5e3
            }) {
                let {
                    recordingData: n,
                    options: r
                } = t;
                if (!!n.length) try {
                    return await e2(t), !0
                } catch (n) {
                    if (n instanceof e5) throw n;
                    if ((0, x.v)("Replays", {
                            _retryCount: e.count
                        }), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r._experiments && r._experiments.captureExceptions && (0, x.Tb)(n), e.count >= 3) {
                        let t = Error(`${P} - max retries exceeded`);
                        try {
                            t.cause = n
                        } catch (t) {}
                        throw t
                    }
                    return e.interval *= ++e.count, new Promise((n, r) => {
                        setTimeout(async () => {
                            try {
                                await e3(t, e), n(!0)
                            } catch (t) {
                                r(t)
                            }
                        }, e.interval)
                    })
                }
            }
            let e6 = "__THROTTLED";
            class e4 {
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
                    e4.prototype.__init.call(this), e4.prototype.__init2.call(this), e4.prototype.__init3.call(this), e4.prototype.__init4.call(this), e4.prototype.__init5.call(this), e4.prototype.__init6.call(this), e4.prototype.__init7.call(this), e4.prototype.__init8.call(this), e4.prototype.__init9.call(this), e4.prototype.__init10.call(this), e4.prototype.__init11.call(this), e4.prototype.__init12.call(this), e4.prototype.__init13.call(this), e4.prototype.__init14.call(this), e4.prototype.__init15.call(this), e4.prototype.__init16.call(this), e4.prototype.__init17.call(this), e4.prototype.__init18.call(this), this._recordingOptions = e, this._options = t, this._debouncedFlush = function(t, e, n) {
                        let r, i, s;
                        let a = n && n.maxWait ? Math.max(n.maxWait, e) : 0;

                        function o() {
                            return u(), r = t()
                        }

                        function u() {
                            void 0 !== i && clearTimeout(i), void 0 !== s && clearTimeout(s), i = s = void 0
                        }

                        function l() {
                            return i && clearTimeout(i), i = setTimeout(o, e), a && void 0 === s && (s = setTimeout(o, a)), r
                        }
                        return l.cancel = u, l.flush = function() {
                            return void 0 !== i || void 0 !== s ? o() : r
                        }, l
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
                            s = () => [...r.values()].reduce((t, e) => t + e, 0),
                            a = !1;
                        return (...e) => {
                            let n = Math.floor(Date.now() / 1e3);
                            if (i(n), s() >= 300) {
                                let t = a;
                                return a = !0, t ? "__SKIPPED" : e6
                            }
                            a = !1;
                            let o = r.get(n) || 0;
                            return r.set(n, o + 1), t(...e)
                        }
                    }((t, e) => ew(this, t, e), 300, 5);
                    let {
                        slowClickTimeout: n,
                        slowClickIgnoreSelectors: r
                    } = this.getOptions(), i = n ? {
                        threshold: Math.min(3e3, n),
                        timeout: n,
                        scrollTimeout: 300,
                        ignoreSelector: r ? r.join(",") : ""
                    } : void 0;
                    i && (this.clickDetector = new ee(this, i))
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
                    if ((!(t <= 0) || !(e <= 0)) && !!this._loadAndCheckSession()) {
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
                        } = eS({
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
                        } = eS({
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
                        this._stopRecording = t4({
                            ...this._recordingOptions,
                            ..."buffer" === this.recordingMode && {
                                checkoutEveryNms: 6e4
                            },
                            emit: (t = this, e = !1, (n, r) => {
                                if (!t.checkAndHandleExpiredSession()) {
                                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.warn("[Replay] Received replay event after session expired.");
                                    return
                                }
                                let i = r || !e;
                                e = !0, t.addUpdate(() => {
                                    if ("buffer" === t.recordingMode && i && t.setInitialState(), ew(t, n, i), !i) return !1;
                                    if (function(t, e) {
                                            e && t.session && 0 === t.session.segmentId ? ew(t, function(t) {
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
                                            let n = t.getOptions()._experiments.traceInternals ? console.info : I.kg.info;
                                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n(`[Replay] Updating session start time to earliest event in buffer at ${e}`), t.session.started = e, t.getOptions().stickySession && eb(t.session)
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
                    if (!!this._isEnabled) try {
                        var e;
                        if ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
                            let e = `[Replay] Stopping Replay${t?` triggered by ${t}`:""}`;
                            (this.getOptions()._experiments.traceInternals ? console.warn : I.kg.log)(e)
                        }
                        this._isEnabled = !1, this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), "session" === this.recordingMode && await this._flush({
                                force: !0
                            }), this.eventBuffer && this.eventBuffer.destroy(), this.eventBuffer = null, e = this,
                            function() {
                                if (!!em()) try {
                                    z.sessionStorage.removeItem($)
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
                    if (!!this._loadAndCheckSession()) this._isPaused = !1, this.startRecording()
                }
                async sendBufferedReplayOrFlush({
                    continueRecording: t = !0
                } = {}) {
                    if ("session" === this.recordingMode) return this.flushImmediate();
                    let e = Date.now(),
                        n = this.getOptions()._experiments.traceInternals ? console.info : I.kg.info;
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n(`[Replay] Converting buffer to session, starting at ${e}`), await this.flushImmediate();
                    let r = this.stopRecording();
                    if (!!t && !!r) this.recordingMode = "session", this.session && (this.session.shouldRefresh = !1, this._updateUserActivity(e), this._updateSessionActivity(e), this.session.started = e, this._maybeSaveSession()), this.startRecording()
                }
                addUpdate(t) {
                    let e = t();
                    if ("buffer" !== this.recordingMode && !0 !== e) this._debouncedFlush()
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
                    if (this._lastActivity && eg(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled) {
                        this.pause();
                        return
                    }
                    return this._loadAndCheckSession() ? t === this.getSessionId() || (this._triggerFullSnapshot(), !1) : void 0
                }
                setInitialState() {
                    let t = `${z.location.pathname}${z.location.hash}${z.location.search}`,
                        e = `${z.location.origin}${t}`;
                    this.performanceEvents = [], this._clearContext(), this._context.initialUrl = e, this._context.initialTimestamp = Date.now(), this._context.urls.push(e)
                }
                throttledAddEvent(t, e) {
                    let n = this._throttledAddEvent(t, e);
                    if (n === e6) {
                        let t = ei({
                            category: "replay.throttled"
                        });
                        this.addUpdate(() => {
                            ew(this, {
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
                    let t = this.lastTransaction || (0, k.Gd)().getScope().getTransaction();
                    if (!!t && !!["route", "custom"].includes(t.metadata.source)) return t.name
                }
                _initializeRecording() {
                    this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = function({
                        useCompression: t
                    }) {
                        if (t && window.Worker) try {
                            let t = function() {
                                let t = new Blob([ec]);
                                return URL.createObjectURL(t)
                            }();
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.log("[Replay] Using compression worker");
                            let e = new Worker(t);
                            return new ep(e)
                        } catch (t) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.log("[Replay] Failed to create compression worker")
                        }
                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.log("[Replay] Using simple buffer"), new eh
                    }({
                        useCompression: this._options.useCompression
                    }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this.startRecording()
                }
                _handleException(t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.error("[Replay]", t), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this._options._experiments && this._options._experiments.captureExceptions && (0, x.Tb)(t)
                }
                _loadAndCheckSession() {
                    let {
                        type: t,
                        session: e
                    } = eS({
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
                        z.document.addEventListener("visibilitychange", this._handleVisibilityChange), z.addEventListener("blur", this._handleWindowBlur), z.addEventListener("focus", this._handleWindowFocus), z.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), !this._hasInitializedCoreListeners && (! function(t) {
                            var e;
                            let n = (0, k.Gd)().getScope(),
                                r = (0, k.Gd)().getClient();
                            n && n.addScopeListener(eJ(t)), (0, O.oq)("dom", ea(t)), (0, O.oq)("history", (e = t, t => {
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
                                    if (null !== n) e.getContext().urls.push(n.name), e.triggerUserActivity(), e.addUpdate(() => (ex(e, [n]), !1))
                                })), ! function(t) {
                                    let e = (0, k.Gd)().getClient();
                                    try {
                                        let i = new TextEncoder,
                                            {
                                                networkDetailAllowUrls: s,
                                                networkDetailDenyUrls: a,
                                                networkCaptureBodies: o,
                                                networkRequestHeaders: u,
                                                networkResponseHeaders: l
                                            } = t.getOptions(),
                                            c = {
                                                replay: t,
                                                textEncoder: i,
                                                networkDetailAllowUrls: s,
                                                networkDetailDenyUrls: a,
                                                networkCaptureBodies: o,
                                                networkRequestHeaders: u,
                                                networkResponseHeaders: l
                                            };
                                        if (e && e.on) e.on("beforeAddBreadcrumb", (t, e) => (function(t, e, n) {
                                            if (!!e.data) try {
                                                (function(t) {
                                                    return "xhr" === t.category
                                                })(e) && function(t) {
                                                    return t && t.xhr
                                                }(n) && (! function(t, e, n) {
                                                    let {
                                                        xhr: r,
                                                        input: i
                                                    } = e, s = eU(i, n.textEncoder), a = r.getResponseHeader("content-length") ? eI(r.getResponseHeader("content-length")) : eU(r.response, n.textEncoder);
                                                    void 0 !== s && (t.data.request_body_size = s), void 0 !== a && (t.data.response_body_size = a)
                                                }(e, n, t), eW(e, n, t)),
                                                function(t) {
                                                    return "fetch" === t.category
                                                }(e) && function(t) {
                                                    return t && t.response
                                                }(n) && (! function(t, e, n) {
                                                    let {
                                                        input: r,
                                                        response: i
                                                    } = e, s = eU(ej(r), n.textEncoder), a = i ? eI(i.headers.get("content-length")) : void 0;
                                                    void 0 !== s && (t.data.request_body_size = s), void 0 !== a && (t.data.response_body_size = a)
                                                }(e, n, t), ez(e, n, t))
                                            } catch (t) {
                                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.warn("Error when enriching network breadcrumb")
                                            }
                                        })(c, t, e));
                                        else {
                                            var n, r;
                                            (0, O.oq)("fetch", (n = t, t => {
                                                if (!!n.isEnabled()) eD(n, function(t) {
                                                    let {
                                                        startTimestamp: e,
                                                        endTimestamp: n,
                                                        fetchData: r,
                                                        response: i
                                                    } = t;
                                                    if (!n) return null;
                                                    let {
                                                        method: s,
                                                        url: a
                                                    } = r;
                                                    return {
                                                        type: "resource.fetch",
                                                        start: e / 1e3,
                                                        end: n / 1e3,
                                                        name: a,
                                                        data: {
                                                            method: s,
                                                            statusCode: i ? i.status : void 0
                                                        }
                                                    }
                                                }(t))
                                            })), (0, O.oq)("xhr", (r = t, t => {
                                                if (!!r.isEnabled()) eD(r, function(t) {
                                                    let {
                                                        startTimestamp: e,
                                                        endTimestamp: n,
                                                        xhr: r
                                                    } = t, i = r[O.xU];
                                                    if (!e || !n || !i) return null;
                                                    let {
                                                        method: s,
                                                        url: a,
                                                        status_code: o
                                                    } = i;
                                                    return void 0 === a ? null : {
                                                        type: "resource.xhr",
                                                        name: a,
                                                        start: e / 1e3,
                                                        end: n / 1e3,
                                                        data: {
                                                            method: s,
                                                            statusCode: o
                                                        }
                                                    }
                                                }(t))
                                            }))
                                        }
                                    } catch (t) {}
                                }(t), (0, T.c)(function(t, e = !1) {
                                    let n = e ? eR(t) : void 0;
                                    return (e, r) => {
                                        var i, s, a, o;
                                        if ("replay_event" === e.type) return delete e.breadcrumbs, e;
                                        if (e.type && !eT(e)) return e;
                                        if (i = e, s = r, !i.type && i.exception && i.exception.values && i.exception.values.length && (s.originalException && s.originalException.__rrweb__ || i.exception.values.some(t => !!t.stacktrace && !!t.stacktrace.frames && !!t.stacktrace.frames.length && t.stacktrace.frames.some(t => t.filename && t.filename.includes("/rrweb/src/")))) && !t.getOptions()._experiments.captureExceptions) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.log("[Replay] Ignoring error from rrweb internals", e), null;
                                        return a = t, o = e, ("buffer" === a.recordingMode && o.message !== P && o.exception && !o.type && ev(a.getOptions().errorSampleRate) || "session" === t.recordingMode) && (e.tags = {
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
                                }(r) && (r.on("afterSendEvent", eR(t)), r.on("createDsc", e => {
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
                    if ("PerformanceObserver" in z) this._performanceObserver = function(t) {
                        let e = new PerformanceObserver(e => {
                            let n = function(t, e) {
                                let [n, r, i] = t.reduce((t, e) => ("navigation" === e.entryType ? t[0].push(e) : "largest-contentful-paint" === e.entryType ? t[1].push(e) : t[2].push(e), t), [
                                    [],
                                    [],
                                    []
                                ]), s = [], a = [], o = r.length ? r[r.length - 1] : void 0;
                                return e.forEach(t => {
                                    if ("largest-contentful-paint" === t.entryType) {
                                        (!o || o.startTime < t.startTime) && (o = t);
                                        return
                                    }
                                    if ("navigation" === t.entryType) {
                                        t.duration > 0 && !n.find(el(t)) && !a.find(el(t)) && a.push(t);
                                        return
                                    }
                                    s.push(t)
                                }), [...o ? [o] : [], ...n, ...i, ...s, ...a].sort((t, e) => t.startTime - e.startTime)
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
                    }(this)
                }
                _removeListeners() {
                    try {
                        z.document.removeEventListener("visibilitychange", this._handleVisibilityChange), z.removeEventListener("blur", this._handleWindowBlur), z.removeEventListener("focus", this._handleWindowFocus), z.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceObserver && (this._performanceObserver.disconnect(), this._performanceObserver = null)
                    } catch (t) {
                        this._handleException(t)
                    }
                }
                __init13() {
                    this._handleVisibilityChange = () => {
                        "visible" === z.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
                    }
                }
                __init14() {
                    this._handleWindowBlur = () => {
                        let t = ei({
                            category: "ui.blur"
                        });
                        this._doChangeToBackgroundTasks(t)
                    }
                }
                __init15() {
                    this._handleWindowFocus = () => {
                        let t = ei({
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
                                    key: s,
                                    target: a
                                } = t;
                                if (!a || function(t) {
                                        return "INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable
                                    }(a) || !s) return null;
                                let o = e || r || i,
                                    u = 1 === s.length;
                                if (!o && u) return null;
                                let l = (0, U.Rt)(a, {
                                        maxStringLength: 200
                                    }) || "<unknown>",
                                    c = eo(a, l);
                                return ei({
                                    category: "ui.keyDown",
                                    message: l,
                                    data: {
                                        ...c.data,
                                        metaKey: e,
                                        shiftKey: n,
                                        ctrlKey: r,
                                        altKey: i,
                                        key: s
                                    }
                                })
                            }(e);
                            if (!!n) t9(t, n)
                        }(this, t)
                    }
                }
                _doChangeToBackgroundTasks(t) {
                    if (!this.session) return;
                    let e = ey(this.session, this.timeouts);
                    t && !e && this._createCustomBreadcrumb(t), this.conditionalFlush()
                }
                _doChangeToForegroundTasks(t) {
                    if (!!this.session) {
                        if (!this.checkAndHandleExpiredSession()) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.log("[Replay] Document has become active, but session has expired");
                            return
                        }
                        t && this._createCustomBreadcrumb(t)
                    }
                }
                _triggerFullSnapshot(t = !0) {
                    try {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.log("[Replay] Taking full rrweb snapshot"), t4.takeFullSnapshot(t)
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
                    return this.performanceEvents = [], Promise.all(ex(this, t.map(eQ).filter(Boolean)))
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
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.error("[Replay] No session or eventBuffer found to flush.");
                        return
                    }
                    if (await this._addPerformanceEntries(), !this.eventBuffer || !this.eventBuffer.hasEvents) return;
                    if (await eK(this), !!this.eventBuffer) try {
                        this._updateInitialTimestampFromEventBuffer();
                        let t = await this.eventBuffer.finish(),
                            e = this.session.id,
                            n = this._popEventContext(),
                            r = this.session.segmentId++;
                        this._maybeSaveSession(), await e3({
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
                        let t = (0, k.Gd)().getClient();
                        t && t.recordDroppedEvent("send_error", "replay")
                    }
                }
                __init17() {
                    this._flush = async ({
                        force: t = !1
                    } = {}) => {
                        if (!this._isEnabled && !t) return;
                        if (!this.checkAndHandleExpiredSession()) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.error("[Replay] Attempting to finish replay event after session expired.");
                            return
                        }
                        if (!this.session) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.error("[Replay] No session found to flush.");
                            return
                        }
                        let e = this.session.started,
                            n = Date.now() - e;
                        if (n < this._options.minReplayDuration || n > this.timeouts.maxSessionLife + 5e3) {
                            let t = this.getOptions()._experiments.traceInternals ? console.warn : I.kg.warn;
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
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.error(t)
                        } finally {
                            this._debouncedFlush()
                        }
                    }
                }
                _maybeSaveSession() {
                    this.session && this._options.stickySession && eb(this.session)
                }
                __init18() {
                    this._onMutationHandler = t => {
                        let e = t.length,
                            n = this._options.mutationLimit,
                            r = this._options.mutationBreadcrumbLimit,
                            i = n && e > n;
                        if (e > r || i) {
                            let t = ei({
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

            function e8(t, e, n, r) {
                let i = [...t, ..."string" == typeof r ? r.split(",") : [], ...e];
                return void 0 !== n && ("string" == typeof n && i.push(`.${n}`), console.warn("[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration.")), i.join(",")
            }

            function e9() {
                return "undefined" != typeof window && (!(0, Y.KV)() || function() {
                    return void 0 !== L && "renderer" === L.type
                }())
            }
            let e7 = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
                nt = ["content-length", "content-type", "accept"],
                ne = !1;
            class nn {
                static __initStatic() {
                    this.id = "Replay"
                }
                __init() {
                    this.name = nn.id
                }
                constructor({
                    flushMinDelay: t = 5e3,
                    flushMaxDelay: e = 5500,
                    minReplayDuration: n = 4999,
                    stickySession: r = !0,
                    useCompression: i = !0,
                    _experiments: s = {},
                    sessionSampleRate: a,
                    errorSampleRate: o,
                    maskAllText: u = !0,
                    maskAllInputs: l = !0,
                    blockAllMedia: c = !0,
                    mutationBreadcrumbLimit: d = 750,
                    mutationLimit: h = 1e4,
                    slowClickTimeout: _ = 7e3,
                    slowClickIgnoreSelectors: f = [],
                    networkDetailAllowUrls: p = [],
                    networkDetailDenyUrls: m = [],
                    networkCaptureBodies: g = !0,
                    networkRequestHeaders: y = [],
                    networkResponseHeaders: v = [],
                    mask: b = [],
                    unmask: E = [],
                    block: S = [],
                    unblock: w = [],
                    ignore: k = [],
                    maskFn: T,
                    beforeAddRecordingEvent: R,
                    blockClass: x,
                    blockSelector: D,
                    maskInputOptions: N,
                    maskTextClass: C,
                    maskTextSelector: U,
                    ignoreClass: I
                } = {}) {
                    if (nn.prototype.__init.call(this), this._recordingOptions = {
                            maskAllInputs: l,
                            maskAllText: u,
                            maskInputOptions: {
                                ...N || {},
                                password: !0
                            },
                            maskTextFn: T,
                            maskInputFn: T,
                            ... function({
                                mask: t,
                                unmask: e,
                                block: n,
                                unblock: r,
                                ignore: i,
                                blockClass: s,
                                blockSelector: a,
                                maskTextClass: o,
                                maskTextSelector: u,
                                ignoreClass: l
                            }) {
                                let c = e8(t, [".sentry-mask", "[data-sentry-mask]"], o, u),
                                    d = e8(e, [".sentry-unmask", "[data-sentry-unmask]"]),
                                    h = {
                                        maskTextSelector: c,
                                        unmaskTextSelector: d,
                                        maskInputSelector: c,
                                        unmaskInputSelector: d,
                                        blockSelector: e8(n, [".sentry-block", "[data-sentry-block]", 'base[href="/"]'], s, a),
                                        unblockSelector: e8(r, [".sentry-unblock", "[data-sentry-unblock]"]),
                                        ignoreSelector: e8(i, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'], l)
                                    };
                                return s instanceof RegExp && (h.blockClass = s), o instanceof RegExp && (h.maskTextClass = o), h
                            }({
                                mask: b,
                                unmask: E,
                                block: S,
                                unblock: w,
                                ignore: k,
                                blockClass: x,
                                blockSelector: D,
                                maskTextClass: C,
                                maskTextSelector: U,
                                ignoreClass: I
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
                            sessionSampleRate: a,
                            errorSampleRate: o,
                            useCompression: i,
                            blockAllMedia: c,
                            maskAllInputs: l,
                            maskAllText: u,
                            mutationBreadcrumbLimit: d,
                            mutationLimit: h,
                            slowClickTimeout: _,
                            slowClickIgnoreSelectors: f,
                            networkDetailAllowUrls: p,
                            networkDetailDenyUrls: m,
                            networkCaptureBodies: g,
                            networkRequestHeaders: nr(y),
                            networkResponseHeaders: nr(v),
                            beforeAddRecordingEvent: R,
                            _experiments: s
                        }, "number" == typeof a && (console.warn(`[Replay] You are passing \`sessionSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysSessionSampleRate: ${a} })`), this._initialOptions.sessionSampleRate = a), "number" == typeof o && (console.warn(`[Replay] You are passing \`errorSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysOnErrorSampleRate: ${o} })`), this._initialOptions.errorSampleRate = o), this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${e7}` : e7), this._isInitialized && e9()) throw Error("Multiple Sentry Session Replay instances are not supported");
                    this._isInitialized = !0
                }
                get _isInitialized() {
                    return ne
                }
                set _isInitialized(t) {
                    ne = t
                }
                setupOnce() {
                    if (!!e9()) this._setup(), setTimeout(() => this._initialize())
                }
                start() {
                    if (!!this._replay) this._replay.start()
                }
                startBuffering() {
                    if (!!this._replay) this._replay.startBuffering()
                }
                stop() {
                    return this._replay ? this._replay.stop() : Promise.resolve()
                }
                flush(t) {
                    return this._replay && this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(t) : Promise.resolve()
                }
                getReplayId() {
                    if (!!this._replay && !!this._replay.isEnabled()) return this._replay.getSessionId()
                }
                _initialize() {
                    if (!!this._replay) this._replay.initializeSampling()
                }
                _setup() {
                    let t = function(t) {
                        let e = (0, k.Gd)().getClient(),
                            n = e && e.getOptions(),
                            r = {
                                sessionSampleRate: 0,
                                errorSampleRate: 0,
                                ...(0, C.Jr)(t)
                            };
                        return n ? (null == t.sessionSampleRate && null == t.errorSampleRate && null == n.replaysSessionSampleRate && null == n.replaysOnErrorSampleRate && console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set."), "number" == typeof n.replaysSessionSampleRate && (r.sessionSampleRate = n.replaysSessionSampleRate), "number" == typeof n.replaysOnErrorSampleRate && (r.errorSampleRate = n.replaysOnErrorSampleRate), r) : (console.warn("SDK client is not available."), r)
                    }(this._initialOptions);
                    this._replay = new e4({
                        options: t,
                        recordingOptions: this._recordingOptions
                    })
                }
            }
            nn.__initStatic();

            function nr(t) {
                return [...nt, ...t.map(t => t.toLowerCase())]
            }
        },
        147658: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return s
                }
            });
            var r = n(46834),
                i = n(336344);

            function s(t, e, n = 250, s, u, l, c) {
                if (!l.exception || !l.exception.values || !c || !(0, r.V9)(c.originalException, Error)) return;
                let d = l.exception.values.length > 0 ? l.exception.values[l.exception.values.length - 1] : void 0;
                d && (l.exception.values = function(t, e) {
                    return t.map(t => (t.value && (t.value = (0, i.$G)(t.value, e)), t))
                }(function t(e, n, i, s, u, l, c, d) {
                    if (l.length >= i + 1) return l;
                    let h = [...l];
                    if ((0, r.V9)(s[u], Error)) {
                        a(c, d);
                        let r = e(n, s[u]),
                            l = h.length;
                        o(r, u, l, d), h = t(e, n, i, s[u], u, [r, ...h], r, l)
                    }
                    return Array.isArray(s.errors) && s.errors.forEach((s, l) => {
                        if ((0, r.V9)(s, Error)) {
                            a(c, d);
                            let r = e(n, s),
                                _ = h.length;
                            o(r, `errors[${l}]`, _, d), h = t(e, n, i, s, u, [r, ...h], r, _)
                        }
                    }), h
                }(t, e, u, c.originalException, s, l.exception.values, d, 0), n))
            }

            function a(t, e) {
                t.mechanism = t.mechanism || {
                    type: "generic",
                    handled: !0
                }, t.mechanism = {
                    ...t.mechanism,
                    is_exception_group: !0,
                    exception_id: e
                }
            }

            function o(t, e, n, r) {
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
            n.d(e, {
                EN: function() {
                    return u
                },
                IQ: function() {
                    return l
                },
                bU: function() {
                    return s
                }
            });
            var r = n(46834),
                i = n(529866);
            let s = "baggage",
                a = "sentry-",
                o = /^sentry-/;

            function u(t) {
                if (!(0, r.HD)(t) && !Array.isArray(t)) return;
                let e = {};
                if (Array.isArray(t)) e = t.reduce((t, e) => {
                    let n = c(e);
                    return {
                        ...t,
                        ...n
                    }
                }, {});
                else {
                    if (!t) return;
                    e = c(t)
                }
                let n = Object.entries(e).reduce((t, [e, n]) => (e.match(o) && (t[e.slice(a.length)] = n), t), {});
                return Object.keys(n).length > 0 ? n : void 0
            }

            function l(t) {
                if (!!t) return function(t) {
                    if (0 !== Object.keys(t).length) return Object.entries(t).reduce((t, [e, n], r) => {
                        let s = `${encodeURIComponent(e)}=${encodeURIComponent(n)}`,
                            a = 0 === r ? s : `${t},${s}`;
                        return a.length > 8192 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn(`Not adding key: ${e} with val: ${n} to baggage header due to exceeding baggage size limits.`), t) : a
                    }, "")
                }(Object.entries(t).reduce((t, [e, n]) => (n && (t[`${a}${e}`] = n), t), {}))
            }

            function c(t) {
                return t.split(",").map(t => t.split("=").map(t => decodeURIComponent(t.trim()))).reduce((t, [e, n]) => (t[e] = n, t), {})
            }
        },
        829919: function(t, e, n) {
            "use strict";
            n.d(e, {
                Rt: function() {
                    return s
                },
                l4: function() {
                    return a
                },
                qT: function() {
                    return o
                }
            });
            var r = n(46834);
            let i = (0, n(24716).Rf)();

            function s(t, e = {}) {
                try {
                    let n, i = t,
                        s = [],
                        a = 0,
                        o = 0,
                        u = 3,
                        l = Array.isArray(e) ? e : e.keyAttrs,
                        c = !Array.isArray(e) && e.maxStringLength || 80;
                    for (; i && a++ < 5 && (n = function(t, e) {
                            let n, i, s, a, o;
                            let u = [];
                            if (!t || !t.tagName) return "";
                            u.push(t.tagName.toLowerCase());
                            let l = e && e.length ? e.filter(e => t.getAttribute(e)).map(e => [e, t.getAttribute(e)]) : null;
                            if (l && l.length) l.forEach(t => {
                                u.push(`[${t[0]}="${t[1]}"]`)
                            });
                            else if (t.id && u.push(`#${t.id}`), (n = t.className) && (0, r.HD)(n))
                                for (o = 0, i = n.split(/\s+/); o < i.length; o++) u.push(`.${i[o]}`);
                            let c = ["aria-label", "type", "name", "title", "alt"];
                            for (o = 0; o < c.length; o++) s = c[o], (a = t.getAttribute(s)) && u.push(`[${s}="${a}"]`);
                            return u.join("")
                        }(i, l), "html" !== n && (!(a > 1) || !(o + s.length * u + n.length >= c)));) {
                        ;
                        s.push(n), o += n.length, i = i.parentNode
                    }
                    return s.reverse().join(" > ")
                } catch (t) {
                    return "<unknown>"
                }
            }

            function a() {
                try {
                    return i.document.location.href
                } catch (t) {
                    return ""
                }
            }

            function o(t) {
                return i.document && i.document.querySelector ? i.document.querySelector(t) : null
            }
        },
        854569: function(t, e, n) {
            "use strict";
            n.d(e, {
                y: function() {
                    return s
                }
            });
            var r = n(50074),
                i = n(868145);

            function s(t, e, n) {
                let s = [{
                    type: "client_report"
                }, {
                    timestamp: n || (0, i.yW)(),
                    discarded_events: t
                }];
                return (0, r.Jd)(e ? {
                    dsn: e
                } : {}, [s])
            }
        },
        177668: function(t, e, n) {
            "use strict";
            n.d(e, {
                RA: function() {
                    return s
                },
                U4: function() {
                    return a
                },
                vK: function() {
                    return u
                }
            });
            var r = n(529866);
            let i = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

            function s(t, e = !1) {
                let {
                    host: n,
                    path: r,
                    pass: i,
                    port: s,
                    projectId: a,
                    protocol: o,
                    publicKey: u
                } = t;
                return `${o}://${u}${e&&i?`:${i}`:""}@${n}${s?`:${s}`:""}/${r?`${r}/`:r}${a}`
            }

            function a(t) {
                let e = i.exec(t);
                if (!e) {
                    console.error(`Invalid Sentry Dsn: ${t}`);
                    return
                }
                let [n, r, s = "", a, u = "", l] = e.slice(1), c = "", d = l, h = d.split("/");
                if (h.length > 1 && (c = h.slice(0, -1).join("/"), d = h.pop()), d) {
                    let t = d.match(/^\d+/);
                    t && (d = t[0])
                }
                return o({
                    host: a,
                    pass: s,
                    path: c,
                    projectId: d,
                    port: u,
                    protocol: n,
                    publicKey: r
                })
            }

            function o(t) {
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
                let e = "string" == typeof t ? a(t) : o(t);
                if (!!e && !! function(t) {
                        var e;
                        if (!("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__)) return !0;
                        let {
                            port: n,
                            projectId: i,
                            protocol: s
                        } = t;
                        if (["protocol", "publicKey", "host", "projectId"].find(e => !t[e] && (r.kg.error(`Invalid Sentry Dsn: ${e} missing`), !0))) return !1;
                        if (!i.match(/^\d+$/)) return r.kg.error(`Invalid Sentry Dsn: Invalid projectId ${i}`), !1;
                        return "http" === (e = s) || "https" === e ? !(n && isNaN(parseInt(n, 10))) || (r.kg.error(`Invalid Sentry Dsn: Invalid port ${n}`), !1) : (r.kg.error(`Invalid Sentry Dsn: Invalid protocol ${s}`), !1)
                    }(e)) return e
            }
        },
        468391: function(t, e, n) {
            "use strict";

            function r() {
                return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
            }

            function i() {
                return "npm"
            }
            n.d(e, {
                S: function() {
                    return i
                },
                n: function() {
                    return r
                }
            })
        },
        50074: function(t, e, n) {
            "use strict";
            n.d(e, {
                BO: function() {
                    return o
                },
                Cd: function() {
                    return g
                },
                HY: function() {
                    return m
                },
                Jd: function() {
                    return a
                },
                R: function() {
                    return l
                },
                V$: function() {
                    return d
                },
                f4: function() {
                    return h
                },
                gv: function() {
                    return u
                },
                mL: function() {
                    return p
                },
                zQ: function() {
                    return _
                }
            });
            var r = n(177668),
                i = n(10674),
                s = n(442853);

            function a(t, e = []) {
                return [t, e]
            }

            function o(t, e) {
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

            function l(t, e) {
                return u(t, (t, n) => e.includes(n))
            }

            function c(t, e) {
                return (e || new TextEncoder).encode(t)
            }

            function d(t, e) {
                let [n, r] = t, s = JSON.stringify(n);

                function a(t) {
                    "string" == typeof s ? s = "string" == typeof t ? s + t : [c(s, e), t] : s.push("string" == typeof t ? c(t, e) : t)
                }
                for (let t of r) {
                    let [e, n] = t;
                    if (a(`
${JSON.stringify(e)}
`), "string" == typeof n || n instanceof Uint8Array) a(n);
                    else {
                        let t;
                        try {
                            t = JSON.stringify(n)
                        } catch (e) {
                            t = JSON.stringify((0, i.Fv)(n))
                        }
                        a(t)
                    }
                }
                return "string" == typeof s ? s : function(t) {
                    let e = new Uint8Array(t.reduce((t, e) => t + e.length, 0)),
                        n = 0;
                    for (let r of t) e.set(r, n), n += r.length;
                    return e
                }(s)
            }

            function h(t, e, n) {
                let r = "string" == typeof t ? e.encode(t) : t;

                function i(t) {
                    let e = r.subarray(0, t);
                    return r = r.subarray(t + 1), e
                }

                function s() {
                    let t = r.indexOf(10);
                    return t < 0 && (t = r.length), JSON.parse(n.decode(i(t)))
                }
                let a = s(),
                    o = [];
                for (; r.length;) {
                    let t = s(),
                        e = "number" == typeof t.length ? t.length : void 0;
                    o.push([t, e ? i(e) : s()])
                }
                return [a, o]
            }

            function _(t, e) {
                let n = "string" == typeof t.data ? c(t.data, e) : t.data;
                return [(0, s.Jr)({
                    type: "attachment",
                    length: n.length,
                    filename: t.filename,
                    content_type: t.contentType,
                    attachment_type: t.attachmentType
                }), n]
            }
            let f = {
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

            function p(t) {
                return f[t]
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
                let a = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
                return {
                    event_id: t.event_id,
                    sent_at: new Date().toISOString(),
                    ...e && {
                        sdk: e
                    },
                    ...!!n && {
                        dsn: (0, r.RA)(i)
                    },
                    ...a && {
                        trace: (0, s.Jr)({
                            ...a
                        })
                    }
                }
            }
        },
        303155: function(t, e, n) {
            "use strict";
            n.d(e, {
                b: function() {
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
            n.d(e, {
                qG: function() {
                    return r.qG
                }
            });
            var r = n(874230)
        },
        793884: function(t, e, n) {
            "use strict";
            let r, i, s;
            n.d(e, {
                oq: function() {
                    return g
                },
                xU: function() {
                    return f
                }
            });
            var a = n(46834),
                o = n(529866),
                u = n(442853),
                l = n(432038),
                c = n(698892),
                d = n(24716),
                h = n(30865);
            let _ = (0, d.Rf)(),
                f = "__sentry_xhr_v2__",
                p = {},
                m = {};

            function g(t, e) {
                p[t] = p[t] || [], p[t].push(e), ! function(t) {
                    if (!m[t]) switch (m[t] = !0, t) {
                        case "console":
                            (function() {
                                if ("console" in _) o.RU.forEach(function(t) {
                                    if (t in _.console)(0, u.hl)(_.console, t, function(e) {
                                        return function(...n) {
                                            y("console", {
                                                args: n,
                                                level: t
                                            }), e && e.apply(_.console, n)
                                        }
                                    })
                                })
                            })();
                            break;
                        case "dom":
                            (function() {
                                if (!("document" in _)) return;
                                let t = y.bind(null, "dom"),
                                    e = E(t, !0);
                                _.document.addEventListener("click", e, !1), _.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(e => {
                                    let n = _[e] && _[e].prototype;
                                    if (!!n && !!n.hasOwnProperty && !!n.hasOwnProperty("addEventListener"))(0, u.hl)(n, "addEventListener", function(e) {
                                        return function(n, r, i) {
                                            if ("click" === n || "keypress" == n) try {
                                                let r = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                                                    s = r[n] = r[n] || {
                                                        refCount: 0
                                                    };
                                                if (!s.handler) {
                                                    let r = E(t);
                                                    s.handler = r, e.call(this, n, r, i)
                                                }
                                                s.refCount++
                                            } catch (t) {}
                                            return e.call(this, n, r, i)
                                        }
                                    }), (0, u.hl)(n, "removeEventListener", function(t) {
                                        return function(e, n, r) {
                                            if ("click" === e || "keypress" == e) try {
                                                let n = this.__sentry_instrumentation_handlers__ || {},
                                                    i = n[e];
                                                i && (i.refCount--, i.refCount <= 0 && (t.call(this, e, i.handler, r), i.handler = void 0, delete n[e]), 0 === Object.keys(n).length && delete this.__sentry_instrumentation_handlers__)
                                            } catch (t) {}
                                            return t.call(this, e, n, r)
                                        }
                                    })
                                })
                            })();
                            break;
                        case "xhr":
                            (function() {
                                if (!("XMLHttpRequest" in _)) return;
                                let t = XMLHttpRequest.prototype;
                                (0, u.hl)(t, "open", function(t) {
                                    return function(...e) {
                                        let n = e[1],
                                            r = this[f] = {
                                                method: (0, a.HD)(e[0]) ? e[0].toUpperCase() : e[0],
                                                url: e[1],
                                                request_headers: {}
                                            };
                                        (0, a.HD)(n) && "POST" === r.method && n.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                                        let i = () => {
                                            let t = this[f];
                                            if (!!t) {
                                                if (4 === this.readyState) {
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
                                            }
                                        };
                                        return "onreadystatechange" in this && "function" == typeof this.onreadystatechange ? (0, u.hl)(this, "onreadystatechange", function(t) {
                                            return function(...e) {
                                                return i(), t.apply(this, e)
                                            }
                                        }) : this.addEventListener("readystatechange", i), (0, u.hl)(this, "setRequestHeader", function(t) {
                                            return function(...e) {
                                                let [n, r] = e, i = this[f];
                                                return i && (i.request_headers[n.toLowerCase()] = r), t.apply(this, e)
                                            }
                                        }), t.apply(this, e)
                                    }
                                }), (0, u.hl)(t, "send", function(t) {
                                    return function(...e) {
                                        let n = this[f];
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
                                if (!!(0, c.t$)())(0, u.hl)(_, "fetch", function(t) {
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
                                        }), t.apply(_, e).then(t => (y("fetch", {
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
                                if (!(0, h.B)()) return;
                                let t = _.onpopstate;

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
                                _.onpopstate = function(...e) {
                                    let n = _.location.href,
                                        i = r;
                                    if (r = n, y("history", {
                                            from: i,
                                            to: n
                                        }), t) try {
                                        return t.apply(this, e)
                                    } catch (t) {}
                                }, (0, u.hl)(_.history, "pushState", e), (0, u.hl)(_.history, "replaceState", e)
                            })();
                            break;
                        case "error":
                            (function() {
                                S = _.onerror, _.onerror = function(t, e, n, r, i) {
                                    return y("error", {
                                        column: r,
                                        error: i,
                                        line: n,
                                        msg: t,
                                        url: e
                                    }), !!S && !S.__SENTRY_LOADER__ && S.apply(this, arguments)
                                }, _.onerror.__SENTRY_INSTRUMENTED__ = !0
                            })();
                            break;
                        case "unhandledrejection":
                            (function() {
                                w = _.onunhandledrejection, _.onunhandledrejection = function(t) {
                                    return y("unhandledrejection", t), !w || !!w.__SENTRY_LOADER__ || w.apply(this, arguments)
                                }, _.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
                            })();
                            break;
                        default:
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn("unknown instrumentation type:", t);
                            return
                    }
                }(t)
            }

            function y(t, e) {
                if (!!t && !!p[t])
                    for (let n of p[t] || []) try {
                        n(e)
                    } catch (e) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${(0,l.$P)(n)}
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
                    if (!n || s === n || function(t) {
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
                    }), s = n) : function(t, e) {
                        if (!t || t.type !== e.type) return !0;
                        try {
                            if (t.target !== e.target) return !0
                        } catch (t) {}
                        return !1
                    }(s, n) && (t({
                        event: n,
                        name: r,
                        global: e
                    }), s = n), clearTimeout(i), i = _.setTimeout(() => {
                        i = void 0
                    }, 1e3)
                }
            }
            let S = null,
                w = null
        },
        46834: function(t, e, n) {
            "use strict";
            n.d(e, {
                Cy: function() {
                    return m
                },
                HD: function() {
                    return l
                },
                J8: function() {
                    return p
                },
                Kj: function() {
                    return f
                },
                PO: function() {
                    return d
                },
                TX: function() {
                    return o
                },
                V9: function() {
                    return y
                },
                VW: function() {
                    return a
                },
                VZ: function() {
                    return i
                },
                cO: function() {
                    return h
                },
                fm: function() {
                    return u
                },
                i2: function() {
                    return g
                },
                kK: function() {
                    return _
                },
                pt: function() {
                    return c
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

            function s(t, e) {
                return r.call(t) === `[object ${e}]`
            }

            function a(t) {
                return s(t, "ErrorEvent")
            }

            function o(t) {
                return s(t, "DOMError")
            }

            function u(t) {
                return s(t, "DOMException")
            }

            function l(t) {
                return s(t, "String")
            }

            function c(t) {
                return null === t || "object" != typeof t && "function" != typeof t
            }

            function d(t) {
                return s(t, "Object")
            }

            function h(t) {
                return "undefined" != typeof Event && y(t, Event)
            }

            function _(t) {
                return "undefined" != typeof Element && y(t, Element)
            }

            function f(t) {
                return s(t, "RegExp")
            }

            function p(t) {
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
        529866: function(t, e, n) {
            "use strict";
            let r;
            n.d(e, {
                Cf: function() {
                    return a
                },
                RU: function() {
                    return s
                },
                kg: function() {
                    return r
                }
            });
            var i = n(24716);
            let s = ["debug", "info", "warn", "error", "log", "assert", "trace"];

            function a(t) {
                if (!("console" in i.n2)) return t();
                let e = i.n2.console,
                    n = {};
                s.forEach(t => {
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

            function o() {
                let t = !1,
                    e = {
                        enable: () => {
                            t = !0
                        },
                        disable: () => {
                            t = !1
                        }
                    };
                return "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? s.forEach(n => {
                    e[n] = (...e) => {
                        t && a(() => {
                            i.n2.console[n](`Sentry Logger [${n}]:`, ...e)
                        })
                    }
                }) : s.forEach(t => {
                    e[t] = () => void 0
                }), e
            }
            "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? r = (0, i.YO)("logger", o) : r = o()
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
            n.d(e, {
                i: function() {
                    return r
                }
            })
        },
        862315: function(t, e, n) {
            "use strict";
            n.d(e, {
                DM: function() {
                    return s
                },
                Db: function() {
                    return u
                },
                EG: function() {
                    return l
                },
                YO: function() {
                    return c
                },
                jH: function() {
                    return o
                },
                lE: function() {
                    return d
                }
            });
            var r = n(442853),
                i = n(24716);

            function s() {
                let t = i.n2,
                    e = t.crypto || t.msCrypto;
                if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
                let n = e && e.getRandomValues ? () => e.getRandomValues(new Uint8Array(1))[0] : () => 16 * Math.random();
                return "10000000100040008000100000000000".replace(/[018]/g, t => (t ^ (15 & n()) >> t / 4).toString(16))
            }

            function a(t) {
                return t.exception && t.exception.values ? t.exception.values[0] : void 0
            }

            function o(t) {
                let {
                    message: e,
                    event_id: n
                } = t;
                if (e) return e;
                let r = a(t);
                if (r) return r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>";
                return n || "<unknown>"
            }

            function u(t, e, n) {
                let r = t.exception = t.exception || {},
                    i = r.values = r.values || [],
                    s = i[0] = i[0] || {};
                !s.value && (s.value = e || ""), !s.type && (s.type = n || "Error")
            }

            function l(t, e) {
                let n = a(t);
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

            function c(t) {
                if (t && t.__sentry_captured__) return !0;
                try {
                    (0, r.xp)(t, "__sentry_captured__", !0)
                } catch (t) {}
                return !1
            }

            function d(t) {
                return Array.isArray(t) ? t : [t]
            }
        },
        635602: function(t, e, n) {
            "use strict";
            n.d(e, {
                KV: function() {
                    return s
                },
                l$: function() {
                    return a
                }
            });
            var r = n(468391);
            t = n.hmd(t);
            var i = n(444675);

            function s() {
                return !(0, r.n)() && "[object process]" === Object.prototype.toString.call(void 0 !== i ? i : 0)
            }

            function a(t, e) {
                return t.require(e)
            }
        },
        10674: function(t, e, n) {
            "use strict";
            n.d(e, {
                Fv: function() {
                    return o
                },
                Qy: function() {
                    return function t(e, n = 3, r = 102400) {
                        let i = o(e, n);
                        return function(t) {
                            return ~-encodeURI(JSON.stringify(t)).split(/%..|./).length
                        }(i) > r ? t(e, n - 1, r) : i
                    }
                }
            });
            var r = n(46834),
                i = n(537198),
                s = n(442853),
                a = n(432038);

            function o(t, e = 100, o = Infinity) {
                try {
                    return function t(e, o, u = Infinity, l = Infinity, c = (0, i.i)()) {
                        let [d, h] = c;
                        if (null == o || ["number", "boolean", "string"].includes(typeof o) && !(0, r.i2)(o)) return o;
                        let _ = function(t, e) {
                            try {
                                if ("domain" === t && e && "object" == typeof e && e._events) return "[Domain]";
                                if ("domainEmitter" === t) return "[DomainEmitter]";
                                if (void 0 !== n.g && e === n.g) return "[Global]";
                                if ("undefined" != typeof window && e === window) return "[Window]";
                                if ("undefined" != typeof document && e === document) return "[Document]";
                                if ((0, r.Cy)(e)) return "[SyntheticEvent]";
                                if ("number" == typeof e && e != e) return "[NaN]";
                                if ("function" == typeof e) return `[Function: ${(0,a.$P)(e)}]`;
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
                        }(e, o);
                        if (!_.startsWith("[object ")) return _;
                        if (o.__sentry_skip_normalization__) return o;
                        let f = "number" == typeof o.__sentry_override_normalization_depth__ ? o.__sentry_override_normalization_depth__ : u;
                        if (0 === f) return _.replace("object ", "");
                        if (d(o)) return "[Circular ~]";
                        if (o && "function" == typeof o.toJSON) try {
                            let e = o.toJSON();
                            return t("", e, f - 1, l, c)
                        } catch (t) {}
                        let p = Array.isArray(o) ? [] : {},
                            m = 0,
                            g = (0, s.Sh)(o);
                        for (let e in g) {
                            if (!Object.prototype.hasOwnProperty.call(g, e)) continue;
                            if (m >= l) {
                                p[e] = "[MaxProperties ~]";
                                break
                            }
                            let n = g[e];
                            p[e] = t(e, n, f - 1, l, c), m++
                        }
                        return h(o), p
                    }("", t, e, o)
                } catch (t) {
                    return {
                        ERROR: `**non-serializable** (${t})`
                    }
                }
            }
        },
        442853: function(t, e, n) {
            "use strict";
            n.d(e, {
                $Q: function() {
                    return u
                },
                HK: function() {
                    return l
                },
                Jr: function() {
                    return p
                },
                Sh: function() {
                    return d
                },
                _j: function() {
                    return c
                },
                hl: function() {
                    return a
                },
                xp: function() {
                    return o
                },
                zf: function() {
                    return f
                }
            });
            var r = n(829919),
                i = n(46834),
                s = n(336344);

            function a(t, e, n) {
                if (!(e in t)) return;
                let r = t[e],
                    i = n(r);
                if ("function" == typeof i) try {
                    u(i, r)
                } catch (t) {}
                t[e] = i
            }

            function o(t, e, n) {
                Object.defineProperty(t, e, {
                    value: n,
                    writable: !0,
                    configurable: !0
                })
            }

            function u(t, e) {
                let n = e.prototype || {};
                t.prototype = e.prototype = n, o(t, "__sentry_original__", e)
            }

            function l(t) {
                return t.__sentry_original__
            }

            function c(t) {
                return Object.keys(t).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&")
            }

            function d(t) {
                if ((0, i.VZ)(t)) return {
                    message: t.message,
                    name: t.name,
                    stack: t.stack,
                    ..._(t)
                };
                if (!(0, i.cO)(t)) return t;
                {
                    let e = {
                        type: t.type,
                        target: h(t.target),
                        currentTarget: h(t.currentTarget),
                        ..._(t)
                    };
                    return "undefined" != typeof CustomEvent && (0, i.V9)(t, CustomEvent) && (e.detail = t.detail), e
                }
            }

            function h(t) {
                try {
                    return (0, i.kK)(t) ? (0, r.Rt)(t) : Object.prototype.toString.call(t)
                } catch (t) {
                    return "<unknown>"
                }
            }

            function _(t) {
                if ("object" != typeof t || null === t) return {};
                {
                    let e = {};
                    for (let n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }
            }

            function f(t, e = 40) {
                let n = Object.keys(d(t));
                if (n.sort(), !n.length) return "[object has no keys]";
                if (n[0].length >= e) return (0, s.$G)(n[0], e);
                for (let t = n.length; t > 0; t--) {
                    let r = n.slice(0, t).join(", ");
                    if (!(r.length > e)) {
                        if (t === n.length) return r;
                        return (0, s.$G)(r, e)
                    }
                }
                return ""
            }

            function p(t) {
                return function t(e, n) {
                    if ((0, i.PO)(e)) {
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
            n.d(e, {
                x: function() {
                    return s
                }
            });
            var r = n(303155),
                i = n(880803);

            function s(t) {
                let e = [];

                function n(t) {
                    return e.splice(e.indexOf(t), 1)[0]
                }
                return {
                    $: e,
                    add: function(s) {
                        if (!(void 0 === t || e.length < t)) return (0, i.$2)(new r.b("Not adding Promise because buffer limit was reached."));
                        let a = s();
                        return -1 === e.indexOf(a) && e.push(a), a.then(() => n(a)).then(null, () => n(a).then(null, () => {})), a
                    },
                    drain: function(t) {
                        return new i.cW((n, r) => {
                            let s = e.length;
                            if (!s) return n(!0);
                            let a = setTimeout(() => {
                                t && t > 0 && n(!1)
                            }, t);
                            e.forEach(t => {
                                (0, i.WD)(t).then(() => {
                                    !--s && (clearTimeout(a), n(!0))
                                }, r)
                            })
                        })
                    }
                }
            }
        },
        128603: function(t, e, n) {
            "use strict";
            n.d(e, {
                JY: function() {
                    return r
                },
                Q: function() {
                    return i
                },
                WG: function() {
                    return s
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

            function s(t, {
                statusCode: e,
                headers: n
            }, i = Date.now()) {
                let s = {
                        ...t
                    },
                    a = n && n["x-sentry-rate-limits"],
                    o = n && n["retry-after"];
                if (a)
                    for (let t of a.trim().split(",")) {
                        let [e, n] = t.split(":", 2), r = parseInt(e, 10), a = (isNaN(r) ? 60 : r) * 1e3;
                        if (n)
                            for (let t of n.split(";")) s[t] = i + a;
                        else s.all = i + a
                    } else o ? s.all = i + r(o, i) : 429 === e && (s.all = i + 6e4);
                return s
            }
        },
        869139: function(t, e, n) {
            "use strict";
            n.d(e, {
                VT: function() {
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
            n.d(e, {
                $P: function() {
                    return o
                },
                Sq: function() {
                    return s
                },
                pE: function() {
                    return i
                }
            });
            let r = /\(error: (.*)\)/;

            function i(...t) {
                let e = t.sort((t, e) => t[0] - e[0]).map(t => t[1]);
                return (t, n = 0) => {
                    let i = [],
                        s = t.split("\n");
                    for (let t = n; t < s.length; t++) {
                        let n = s[t];
                        if (n.length > 1024) continue;
                        let a = r.test(n) ? n.replace(r, "$1") : n;
                        if (!a.match(/\S*Error: /)) {
                            for (let t of e) {
                                let e = t(a);
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

            function s(t) {
                return Array.isArray(t) ? i(...t) : t
            }
            let a = "<anonymous>";

            function o(t) {
                try {
                    if (!t || "function" != typeof t) return a;
                    return t.name || a
                } catch (t) {
                    return a
                }
            }
        },
        336344: function(t, e, n) {
            "use strict";
            n.d(e, {
                $G: function() {
                    return i
                },
                U0: function() {
                    return a
                },
                nK: function() {
                    return s
                }
            });
            var r = n(46834);

            function i(t, e = 0) {
                return "string" != typeof t || 0 === e ? t : t.length <= e ? t : `${t.slice(0,e)}...`
            }

            function s(t, e) {
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

            function a(t, e = [], n = !1) {
                return e.some(e => (function(t, e, n = !1) {
                    return !!(0, r.HD)(t) && ((0, r.Kj)(e) ? e.test(t) : !!(0, r.HD)(e) && (n ? t === e : t.includes(e)))
                })(t, e, n))
            }
        },
        698892: function(t, e, n) {
            "use strict";
            n.d(e, {
                Ak: function() {
                    return s
                },
                Du: function() {
                    return a
                },
                t$: function() {
                    return o
                }
            });
            var r = n(529866);
            let i = (0, n(24716).Rf)();

            function s() {
                if (!("fetch" in i)) return !1;
                try {
                    return new Headers, new Request("http://www.example.com"), new Response, !0
                } catch (t) {
                    return !1
                }
            }

            function a(t) {
                return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
            }

            function o() {
                if (!s()) return !1;
                if (a(i.fetch)) return !0;
                let t = !1,
                    e = i.document;
                if (e && "function" == typeof e.createElement) try {
                    let n = e.createElement("iframe");
                    n.hidden = !0, e.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = a(n.contentWindow.fetch)), e.head.removeChild(n)
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                }
                return t
            }
        },
        880803: function(t, e, n) {
            "use strict";
            n.d(e, {
                $2: function() {
                    return o
                },
                WD: function() {
                    return a
                },
                cW: function() {
                    return u
                }
            });
            var r, i, s = n(46834);

            function a(t) {
                return new u(e => {
                    e(t)
                })
            }

            function o(t) {
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
                            if ((0, s.J8)(e)) {
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
                            if (!t[0]) this._state === i.RESOLVED && t[1](this._value), this._state === i.REJECTED && t[2](this._value), t[0] = !0
                        })
                    }
                }
            }
        },
        868145: function(t, e, n) {
            "use strict";
            let r;
            n.d(e, {
                Z1: function() {
                    return h
                },
                ph: function() {
                    return d
                },
                yW: function() {
                    return c
                }
            });
            var i = n(635602),
                s = n(24716);
            t = n.hmd(t);
            let a = (0, s.Rf)(),
                o = {
                    nowSeconds: () => Date.now() / 1e3
                },
                u = (0, i.KV)() ? function() {
                    try {
                        return (0, i.l$)(t, "perf_hooks").performance
                    } catch (t) {
                        return
                    }
                }() : function() {
                    let {
                        performance: t
                    } = a;
                    if (!!t && !!t.now) return {
                        now: () => t.now(),
                        timeOrigin: Date.now() - t.now()
                    }
                }(),
                l = void 0 === u ? o : {
                    nowSeconds: () => (u.timeOrigin + u.now()) / 1e3
                },
                c = o.nowSeconds.bind(o),
                d = l.nowSeconds.bind(l),
                h = (() => {
                    let {
                        performance: t
                    } = a;
                    if (!t || !t.now) return;
                    let e = t.now(),
                        n = Date.now(),
                        r = t.timeOrigin ? Math.abs(t.timeOrigin + e - n) : 36e5,
                        i = t.timing && t.timing.navigationStart,
                        s = "number" == typeof i ? Math.abs(i + e - n) : 36e5;
                    if (r < 36e5 || s < 36e5) return r <= s ? t.timeOrigin : i;
                    return n
                })()
        },
        874230: function(t, e, n) {
            "use strict";
            n.d(e, {
                $p: function() {
                    return u
                },
                KA: function() {
                    return o
                },
                qG: function() {
                    return a
                }
            });
            var r = n(545459),
                i = n(862315);
            let s = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

            function a(t) {
                let e;
                if (!t) return;
                let n = t.match(s);
                if (!!n) return "1" === n[3] ? e = !0 : "0" === n[3] && (e = !1), {
                    traceId: n[1],
                    parentSampled: e,
                    parentSpanId: n[2]
                }
            }

            function o(t, e) {
                let n = a(t),
                    s = (0, r.EN)(e),
                    {
                        traceId: o,
                        parentSpanId: u,
                        parentSampled: l
                    } = n || {},
                    c = {
                        traceId: o || (0, i.DM)(),
                        spanId: (0, i.DM)().substring(16),
                        sampled: void 0 !== l && l
                    };
                return u && (c.parentSpanId = u), s && (c.dsc = s), {
                    traceparentData: n,
                    dynamicSamplingContext: s,
                    propagationContext: c
                }
            }

            function u(t = (0, i.DM)(), e = (0, i.DM)().substring(16), n) {
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
            n.d(e, {
                en: function() {
                    return r
                }
            })
        },
        30865: function(t, e, n) {
            "use strict";
            n.d(e, {
                B: function() {
                    return i
                }
            });
            let r = (0, n(24716).Rf)();

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
            n.d(e, {
                Rf: function() {
                    return s
                },
                YO: function() {
                    return a
                },
                n2: function() {
                    return i
                }
            });
            let i = "object" == typeof globalThis && r(globalThis) || "object" == typeof window && r(window) || "object" == typeof self && r(self) || "object" == typeof n.g && r(n.g) || function() {
                return this
            }() || {};

            function s() {
                return i
            }

            function a(t, e, n) {
                let r = n || i,
                    s = r.__SENTRY__ = r.__SENTRY__ || {};
                return s[t] || (s[t] = e())
            }
        },
        321611: function(t, e, n) {
            "use strict";
            n.d(e, {
                j: function() {
                    return a
                }
            });
            var r = n(147816),
                i = n(529866),
                s = n(607190);

            function a() {
                s.m && s.m.document ? s.m.document.addEventListener("visibilitychange", () => {
                    let t = (0, r.x1)();
                    if (s.m.document.hidden && t) {
                        let e = "cancelled";
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${t.op}`), !t.status && t.setStatus(e), t.setTag("visibilitychange", "document.hidden"), t.finish()
                    }
                }) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn("[Tracing] Could not set up background tab detection due to lack of global document")
            }
        },
        204325: function(t, e, n) {
            "use strict";
            n.d(e, {
                gE: function() {
                    return p
                }
            });
            var r = n(376097),
                i = n(90668),
                s = n(147816),
                a = n(529866),
                o = n(874230),
                u = n(829919),
                l = n(321611),
                c = n(799821),
                d = n(722994),
                h = n(263951),
                _ = n(607190);
            let f = {
                ...r.AT,
                markBackgroundTransactions: !0,
                routingInstrumentation: h.R,
                startTransactionOnLocationChange: !0,
                startTransactionOnPageLoad: !0,
                enableLongTask: !0,
                _experiments: {},
                ...d.k3
            };
            class p {
                __init() {
                    this.name = "BrowserTracing"
                }
                __init2() {
                    this._hasSetTracePropagationTargets = !1
                }
                constructor(t) {
                    p.prototype.__init.call(this), p.prototype.__init2.call(this), (0, i.T)(), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (this._hasSetTracePropagationTargets = !!(t && (t.tracePropagationTargets || t.tracingOrigins))), this.options = {
                        ...f,
                        ...t
                    }, void 0 !== this.options._experiments.enableLongTask && (this.options.enableLongTask = this.options._experiments.enableLongTask), t && !t.tracePropagationTargets && t.tracingOrigins && (this.options.tracePropagationTargets = t.tracingOrigins), this._collectWebVitals = (0, c.PR)(), this.options.enableLongTask && (0, c.Fv)(), this.options._experiments.enableInteractions && (0, c.sn)()
                }
                setupOnce(t, e) {
                    this._getCurrentHub = e;
                    let n = e().getClient(),
                        r = n && n.getOptions(),
                        {
                            routingInstrumentation: i,
                            startTransactionOnLocationChange: s,
                            startTransactionOnPageLoad: o,
                            markBackgroundTransactions: u,
                            traceFetch: c,
                            traceXHR: h,
                            shouldCreateSpanForRequest: _,
                            enableHTTPTimings: f,
                            _experiments: p
                        } = this.options,
                        m = r && r.tracePropagationTargets,
                        g = m || this.options.tracePropagationTargets;
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this._hasSetTracePropagationTargets && m && a.kg.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."), i(t => {
                        let n = this._createRouteTransaction(t);
                        return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(n, t, e), n
                    }, o, s), u && (0, l.j)(), p.enableInteractions && this._registerInteractionListener(), (0, d.L7)({
                        traceFetch: c,
                        traceXHR: h,
                        tracePropagationTargets: g,
                        shouldCreateSpanForRequest: _,
                        enableHTTPTimings: f
                    })
                }
                _createRouteTransaction(t) {
                    if (!this._getCurrentHub) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.warn(`[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`);
                        return
                    }
                    let e = this._getCurrentHub(),
                        {
                            beforeNavigate: n,
                            idleTimeout: r,
                            finalTimeout: s,
                            heartbeatInterval: u
                        } = this.options,
                        l = "pageload" === t.op,
                        d = l ? m("sentry-trace") : "",
                        h = l ? m("baggage") : "",
                        {
                            traceparentData: f,
                            dynamicSamplingContext: p,
                            propagationContext: g
                        } = (0, o.KA)(d, h),
                        y = {
                            ...t,
                            ...f,
                            metadata: {
                                ...t.metadata,
                                dynamicSamplingContext: f && !p ? {} : p
                            },
                            trimEnd: !0
                        },
                        v = "function" == typeof n ? n(y) : y,
                        b = void 0 === v ? {
                            ...y,
                            sampled: !1
                        } : v;
                    b.metadata = b.name !== y.name ? {
                        ...b.metadata,
                        source: "custom"
                    } : b.metadata, this._latestRouteName = b.name, this._latestRouteSource = b.metadata && b.metadata.source, !1 === b.sampled && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.log(`[Tracing] Will not send ${b.op} transaction because of beforeNavigate.`), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.log(`[Tracing] Starting ${b.op} transaction on scope`);
                    let {
                        location: E
                    } = _.m, S = (0, i.l)(e, b, r, s, !0, {
                        location: E
                    }, u), w = e.getScope();
                    return l && f ? w.setPropagationContext(g) : w.setPropagationContext({
                        traceId: S.traceId,
                        spanId: S.spanId,
                        parentSpanId: S.parentSpanId,
                        sampled: !!S.sampled
                    }), S.registerBeforeFinishCallback(t => {
                        this._collectWebVitals(), (0, c.f7)(t)
                    }), S
                }
                _registerInteractionListener() {
                    let t;
                    let e = () => {
                        let {
                            idleTimeout: e,
                            finalTimeout: n,
                            heartbeatInterval: r
                        } = this.options, o = "ui.action.click", u = (0, s.x1)();
                        if (u && u.op && ["navigation", "pageload"].includes(u.op)) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.warn(`[Tracing] Did not create ${o} transaction because a pageload or navigation transaction is in progress.`);
                            return
                        }
                        if (t && (t.setFinishReason("interactionInterrupted"), t.finish(), t = void 0), !this._getCurrentHub) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.warn(`[Tracing] Did not create ${o} transaction because _getCurrentHub is invalid.`);
                            return
                        }
                        if (!this._latestRouteName) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.warn(`[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`);
                            return
                        }
                        let l = this._getCurrentHub(),
                            {
                                location: c
                            } = _.m,
                            d = {
                                name: this._latestRouteName,
                                op: o,
                                trimEnd: !0,
                                metadata: {
                                    source: this._latestRouteSource || "url"
                                }
                            };
                        t = (0, i.l)(l, d, e, n, !0, {
                            location: c
                        }, r)
                    };
                    ["click"].forEach(t => {
                        addEventListener(t, e, {
                            once: !1,
                            capture: !0
                        })
                    })
                }
            }

            function m(t) {
                let e = (0, u.qT)(`meta[name=${t}]`);
                return e ? e.getAttribute("content") : void 0
            }
        },
        799821: function(t, e, n) {
            "use strict";
            let r, i;
            n.d(e, {
                Fv: function() {
                    return E
                },
                PR: function() {
                    return b
                },
                f7: function() {
                    return w
                },
                sn: function() {
                    return S
                }
            });
            var s = n(147816),
                a = n(868145),
                o = n(829919),
                u = n(529866),
                l = n(607190),
                c = n(540161),
                d = n(282572),
                h = n(301072),
                _ = n(233863),
                f = n(544457),
                p = n(72609);

            function m(t) {
                return t / 1e3
            }

            function g() {
                return l.m && l.m.addEventListener && l.m.performance
            }
            let y = 0,
                v = {};

            function b() {
                let t = g();
                if (t && a.Z1) {
                    t.mark && l.m.performance.mark("sentry-tracing-init"),
                        function() {
                            (0, d.F)(t => {
                                let e = t.entries.pop();
                                if (!e) return;
                                let n = m(a.Z1),
                                    r = m(e.startTime);
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.kg.log("[Measurements] Adding FID"), v.fid = {
                                    value: t.value,
                                    unit: "millisecond"
                                }, v["mark.fid"] = {
                                    value: n + r,
                                    unit: "second"
                                }
                            })
                        }();
                    let e = function() {
                            return (0, c.m)(t => {
                                let e = t.entries.pop();
                                if (!!e)("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.kg.log("[Measurements] Adding CLS"), v.cls = {
                                    value: t.value,
                                    unit: ""
                                }, i = e
                            })
                        }(),
                        n = function() {
                            return (0, h.N)(t => {
                                let e = t.entries.pop();
                                if (!!e)("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.kg.log("[Measurements] Adding LCP"), v.lcp = {
                                    value: t.value,
                                    unit: "millisecond"
                                }, r = e
                            })
                        }();
                    return () => {
                        e && e(), n && n()
                    }
                }
                return () => void 0
            }

            function E() {
                (0, f.N)("longtask", t => {
                    for (let e of t) {
                        let t = (0, s.x1)();
                        if (!t) return;
                        let n = m(a.Z1 + e.startTime),
                            r = m(e.duration);
                        t.startChild({
                            description: "Main UI thread blocked",
                            op: "ui.long-task",
                            startTimestamp: n,
                            endTimestamp: n + r
                        })
                    }
                })
            }

            function S() {
                (0, f.N)("event", t => {
                    for (let e of t) {
                        let t = (0, s.x1)();
                        if (!t) return;
                        if ("click" === e.name) {
                            let n = m(a.Z1 + e.startTime),
                                r = m(e.duration);
                            t.startChild({
                                description: (0, o.Rt)(e.target),
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

            function w(t) {
                let e, n;
                let s = g();
                if (!s || !l.m.performance.getEntries || !a.Z1) return;
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.kg.log("[Tracing] Adding & adjusting spans using Performance API");
                let c = m(a.Z1),
                    d = s.getEntries();
                if (d.slice(y).forEach(r => {
                        let i = m(r.startTime),
                            s = m(r.duration);
                        if ("navigation" !== t.op || !(c + i < t.startTimestamp)) switch (r.entryType) {
                            case "navigation":
                                (function(t, e, n) {
                                    ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(r => {
                                            k(t, e, r, n)
                                        }), k(t, e, "secureConnection", n, "TLS/SSL", "connectEnd"), k(t, e, "fetch", n, "cache", "domainLookupStart"), k(t, e, "domainLookup", n, "DNS"),
                                        function(t, e, n) {
                                            (0, p.H)(t, {
                                                op: "browser",
                                                description: "request",
                                                startTimestamp: n + m(e.requestStart),
                                                endTimestamp: n + m(e.responseEnd)
                                            }), (0, p.H)(t, {
                                                op: "browser",
                                                description: "response",
                                                startTimestamp: n + m(e.responseStart),
                                                endTimestamp: n + m(e.responseEnd)
                                            })
                                        }(t, e, n)
                                })(t, r, c), e = c + m(r.responseStart), n = c + m(r.requestStart);
                                break;
                            case "mark":
                            case "paint":
                            case "measure": {
                                (function(t, e, n, r, i) {
                                    let s = i + n;
                                    (0, p.H)(t, {
                                        description: e.name,
                                        endTimestamp: s + r,
                                        op: e.entryType,
                                        startTimestamp: s
                                    })
                                })(t, r, i, s, c);
                                let e = (0, _.Y)(),
                                    n = r.startTime < e.firstHiddenTime;
                                "first-paint" === r.name && n && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.kg.log("[Measurements] Adding FP"), v.fp = {
                                    value: r.startTime,
                                    unit: "millisecond"
                                }), "first-contentful-paint" === r.name && n && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.kg.log("[Measurements] Adding FCP"), v.fcp = {
                                    value: r.startTime,
                                    unit: "millisecond"
                                });
                                break
                            }
                            case "resource": {
                                let e = r.name.replace(l.m.location.origin, "");
                                (function(t, e, n, r, i, s) {
                                    if ("xmlhttprequest" === e.initiatorType || "fetch" === e.initiatorType) return;
                                    let a = {};
                                    "transferSize" in e && (a["http.response_transfer_size"] = e.transferSize), "encodedBodySize" in e && (a["http.response_content_length"] = e.encodedBodySize), "decodedBodySize" in e && (a["http.decoded_response_content_length"] = e.decodedBodySize), "renderBlockingStatus" in e && (a["resource.render_blocking_status"] = e.renderBlockingStatus);
                                    let o = s + r;
                                    (0, p.H)(t, {
                                        description: n,
                                        endTimestamp: o + i,
                                        op: e.initiatorType ? `resource.${e.initiatorType}` : "resource.other",
                                        startTimestamp: o,
                                        data: a
                                    })
                                })(t, r, e, i, s, c)
                            }
                        }
                    }), y = Math.max(d.length - 1, 0), function(t) {
                        let e = l.m.navigator;
                        if (!e) return;
                        let n = e.connection;
                        n && (n.effectiveType && t.setTag("effectiveConnectionType", n.effectiveType), n.type && t.setTag("connectionType", n.type), (0, p.n)(n.rtt) && (v["connection.rtt"] = {
                            value: n.rtt,
                            unit: "millisecond"
                        })), (0, p.n)(e.deviceMemory) && t.setTag("deviceMemory", `${e.deviceMemory} GB`), (0, p.n)(e.hardwareConcurrency) && t.setTag("hardwareConcurrency", String(e.hardwareConcurrency))
                    }(t), "pageload" === t.op) {
                    "number" == typeof e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.kg.log("[Measurements] Adding TTFB"), v.ttfb = {
                        value: (e - t.startTimestamp) * 1e3,
                        unit: "millisecond"
                    }, "number" == typeof n && n <= e && (v["ttfb.requestTime"] = {
                        value: (e - n) * 1e3,
                        unit: "millisecond"
                    })), ["fcp", "fp", "lcp"].forEach(e => {
                        if (!v[e] || c >= t.startTimestamp) return;
                        let n = v[e].value,
                            r = Math.abs((c + m(n) - t.startTimestamp) * 1e3),
                            i = r - n;
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.kg.log(`[Measurements] Normalized ${e} from ${n} to ${r} (${i})`), v[e].value = r
                    });
                    let s = v["mark.fid"];
                    s && v.fid && ((0, p.H)(t, {
                            description: "first input delay",
                            endTimestamp: s.value + m(v.fid.value),
                            op: "ui.action",
                            startTimestamp: s.value
                        }), delete v["mark.fid"]), !("fcp" in v) && delete v.cls, Object.keys(v).forEach(e => {
                            t.setMeasurement(e, v[e].value, v[e].unit)
                        }),
                        function(t) {
                            r && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.kg.log("[Measurements] Adding LCP Data"), r.element && t.setTag("lcp.element", (0, o.Rt)(r.element)), r.id && t.setTag("lcp.id", r.id), r.url && t.setTag("lcp.url", r.url.trim().slice(0, 200)), t.setTag("lcp.size", r.size)), i && i.sources && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && u.kg.log("[Measurements] Adding CLS Data"), i.sources.forEach((e, n) => t.setTag(`cls.source.${n+1}`, (0, o.Rt)(e.node))))
                        }(t)
                }
                r = void 0, i = void 0, v = {}
            }

            function k(t, e, n, r, i, s) {
                let a = s ? e[s] : e[`${n}End`],
                    o = e[`${n}Start`];
                if (!!o && !!a)(0, p.H)(t, {
                    op: "browser",
                    description: i || n,
                    startTimestamp: r + m(o),
                    endTimestamp: r + m(a)
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
            n.d(e, {
                H: function() {
                    return i
                },
                n: function() {
                    return r
                }
            })
        },
        722994: function(t, e, n) {
            "use strict";
            n.d(e, {
                L7: function() {
                    return f
                },
                k3: function() {
                    return _
                }
            });
            var r = n(633401),
                i = n(876122),
                s = n(154405),
                a = n(793884),
                o = n(868145),
                u = n(336344),
                l = n(874230),
                c = n(545459),
                d = n(46834);
            let h = ["localhost", /^\/(?!\/)/],
                _ = {
                    traceFetch: !0,
                    traceXHR: !0,
                    enableHTTPTimings: !0,
                    tracingOrigins: h,
                    tracePropagationTargets: h
                };

            function f(t) {
                let {
                    traceFetch: e,
                    traceXHR: n,
                    tracePropagationTargets: o,
                    tracingOrigins: f,
                    shouldCreateSpanForRequest: m,
                    enableHTTPTimings: y
                } = {
                    traceFetch: _.traceFetch,
                    traceXHR: _.traceXHR,
                    ...t
                }, v = "function" == typeof m ? m : t => !0, b = t => (function(t, e) {
                    return (0, u.U0)(t, e || h)
                })(t, o || f), E = {};
                e && (0, a.oq)("fetch", t => {
                    let e = function(t, e, n, a) {
                        if (!(0, r.z)() || !t.fetchData) return;
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
                        let u = (0, i.Gd)(),
                            h = u.getScope(),
                            _ = u.getClient(),
                            f = h.getSpan(),
                            {
                                method: p,
                                url: m
                            } = t.fetchData,
                            g = o && f ? f.startChild({
                                data: {
                                    url: m,
                                    type: "fetch",
                                    "http.method": p
                                },
                                description: `${p} ${m}`,
                                op: "http.client"
                            }) : void 0;
                        if (g && (t.fetchData.__span = g.spanId, a[g.spanId] = g), n(t.fetchData.url) && _) {
                            let e = t.args[0];
                            t.args[1] = t.args[1] || {};
                            let n = t.args[1];
                            n.headers = function(t, e, n, r) {
                                let i = n.getSpan(),
                                    a = i && i.transaction,
                                    {
                                        traceId: o,
                                        sampled: u,
                                        dsc: h
                                    } = n.getPropagationContext(),
                                    _ = i ? i.toTraceparent() : (0, l.$p)(o, void 0, u),
                                    f = a ? a.getDynamicSamplingContext() : h || (0, s._)(o, e, n),
                                    p = (0, c.IQ)(f),
                                    m = "undefined" != typeof Request && (0, d.V9)(t, Request) ? t.headers : r.headers;
                                if (!m) return {
                                    "sentry-trace": _,
                                    baggage: p
                                };
                                if ("undefined" != typeof Headers && (0, d.V9)(m, Headers)) {
                                    let t = new Headers(m);
                                    return t.append("sentry-trace", _), p && t.append(c.bU, p), t
                                }
                                if (Array.isArray(m)) {
                                    let t = [...m, ["sentry-trace", _]];
                                    return p && t.push([c.bU, p]), t
                                } else {
                                    let t = "baggage" in m ? m.baggage : void 0,
                                        e = [];
                                    return Array.isArray(t) ? e.push(...t) : t && e.push(t), p && e.push(p), {
                                        ...m,
                                        "sentry-trace": _,
                                        baggage: e.length > 0 ? e.join(",") : void 0
                                    }
                                }
                            }(e, _, h, n)
                        }
                        return g
                    }(t, v, b, E);
                    y && e && p(e)
                }), n && (0, a.oq)("xhr", t => {
                    let e = function(t, e, n, o) {
                        let u = t.xhr,
                            d = u && u[a.xU];
                        if (!(0, r.z)() || u && u.__sentry_own_request__ || !u || !d) return;
                        let h = e(d.url);
                        if (t.endTimestamp && h) {
                            let t = u.__sentry_xhr_span_id__;
                            if (!t) return;
                            let e = o[t];
                            e && (e.setHttpStatus(d.status_code), e.finish(), delete o[t]);
                            return
                        }
                        let _ = (0, i.Gd)(),
                            f = _.getScope(),
                            p = f.getSpan(),
                            m = h && p ? p.startChild({
                                data: {
                                    ...d.data,
                                    type: "xhr",
                                    "http.method": d.method,
                                    url: d.url
                                },
                                description: `${d.method} ${d.url}`,
                                op: "http.client"
                            }) : void 0;
                        if (m && (u.__sentry_xhr_span_id__ = m.spanId, o[u.__sentry_xhr_span_id__] = m), u.setRequestHeader && n(d.url)) {
                            if (m) {
                                let t = m && m.transaction,
                                    e = t && t.getDynamicSamplingContext(),
                                    n = (0, c.IQ)(e);
                                g(u, m.toTraceparent(), n)
                            } else {
                                let t = _.getClient(),
                                    {
                                        traceId: e,
                                        sampled: n,
                                        dsc: r
                                    } = f.getPropagationContext(),
                                    i = (0, l.$p)(e, void 0, n),
                                    a = r || (t ? (0, s._)(e, t, f) : void 0);
                                g(u, i, (0, c.IQ)(a))
                            }
                        }
                        return m
                    }(t, v, b, E);
                    y && e && p(e)
                })
            }

            function p(t) {
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
                                return (r.push(["network.protocol.version", n], ["network.protocol.name", e]), o.Z1) ? [...r, ["http.request.redirect_start", m(t.redirectStart)],
                                    ["http.request.fetch_start", m(t.fetchStart)],
                                    ["http.request.domain_lookup_start", m(t.domainLookupStart)],
                                    ["http.request.domain_lookup_end", m(t.domainLookupEnd)],
                                    ["http.request.connect_start", m(t.connectStart)],
                                    ["http.request.secure_connection_start", m(t.secureConnectionStart)],
                                    ["http.request.connection_end", m(t.connectEnd)],
                                    ["http.request.request_start", m(t.requestStart)],
                                    ["http.request.response_start", m(t.responseStart)],
                                    ["http.request.response_end", m(t.responseEnd)]
                                ] : r
                            })(r).forEach(e => t.setData(...e)), n.disconnect())
                        })
                    });
                n.observe({
                    entryTypes: ["resource"]
                })
            }

            function m(t) {
                return ((o.Z1 || performance.timeOrigin) + t) / 1e3
            }

            function g(t, e, n) {
                try {
                    t.setRequestHeader("sentry-trace", e), n && t.setRequestHeader(c.bU, n)
                } catch (t) {}
            }
        },
        263951: function(t, e, n) {
            "use strict";
            n.d(e, {
                R: function() {
                    return o
                }
            });
            var r = n(529866),
                i = n(868145),
                s = n(793884),
                a = n(607190);

            function o(t, e = !0, n = !0) {
                let o;
                if (!a.m || !a.m.location) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn("Could not initialize routing instrumentation due to invalid location");
                    return
                }
                let u = a.m.location.href;
                e && (o = t({
                    name: a.m.location.pathname,
                    startTimestamp: i.Z1 ? i.Z1 / 1e3 : void 0,
                    op: "pageload",
                    metadata: {
                        source: "url"
                    }
                })), n && (0, s.oq)("history", ({
                    to: e,
                    from: n
                }) => {
                    if (void 0 === n && u && -1 !== u.indexOf(e)) {
                        u = void 0;
                        return
                    }
                    n !== e && (u = void 0, o && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log(`[Tracing] Finishing current transaction with op: ${o.op}`), o.finish()), o = t({
                        name: a.m.location.pathname,
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
            n.d(e, {
                m: function() {
                    return r
                }
            });
            let r = n(24716).n2
        },
        540161: function(t, e, n) {
            "use strict";
            n.d(e, {
                m: function() {
                    return o
                }
            });
            var r = n(358133),
                i = n(416097),
                s = n(544457),
                a = n(527475);
            let o = t => {
                let e;
                let n = (0, i.I)("CLS", 0),
                    o = 0,
                    u = [],
                    l = t => {
                        t.forEach(t => {
                            if (!t.hadRecentInput) {
                                let r = u[0],
                                    i = u[u.length - 1];
                                o && 0 !== u.length && t.startTime - i.startTime < 1e3 && t.startTime - r.startTime < 5e3 ? (o += t.value, u.push(t)) : (o = t.value, u = [t]), o > n.value && (n.value = o, n.entries = u, e && e())
                            }
                        })
                    },
                    c = (0, s.N)("layout-shift", l);
                if (c) {
                    e = (0, r._)(t, n);
                    let i = () => {
                        l(c.takeRecords()), e(!0)
                    };
                    return (0, a.u)(i), i
                }
            }
        },
        282572: function(t, e, n) {
            "use strict";
            n.d(e, {
                F: function() {
                    return u
                }
            });
            var r = n(358133),
                i = n(233863),
                s = n(416097),
                a = n(544457),
                o = n(527475);
            let u = t => {
                let e;
                let n = (0, i.Y)(),
                    u = (0, s.I)("FID"),
                    l = t => {
                        t.startTime < n.firstHiddenTime && (u.value = t.processingStart - t.startTime, u.entries.push(t), e(!0))
                    },
                    c = t => {
                        t.forEach(l)
                    },
                    d = (0, a.N)("first-input", c);
                e = (0, r._)(t, u), d && (0, o.u)(() => {
                    c(d.takeRecords()), d.disconnect()
                }, !0)
            }
        },
        301072: function(t, e, n) {
            "use strict";
            n.d(e, {
                N: function() {
                    return c
                }
            });
            var r = n(358133),
                i = n(726300),
                s = n(233863),
                a = n(416097),
                o = n(544457),
                u = n(527475);
            let l = {},
                c = t => {
                    let e;
                    let n = (0, s.Y)(),
                        c = (0, a.I)("LCP"),
                        d = t => {
                            let r = t[t.length - 1];
                            if (r) {
                                let t = Math.max(r.startTime - (0, i.A)(), 0);
                                t < n.firstHiddenTime && (c.value = t, c.entries = [r], e())
                            }
                        },
                        h = (0, o.N)("largest-contentful-paint", d);
                    if (h) {
                        e = (0, r._)(t, c);
                        let n = () => {
                            !l[c.id] && (d(h.takeRecords()), h.disconnect(), l[c.id] = !0, e(!0))
                        };
                        return ["keydown", "click"].forEach(t => {
                            addEventListener(t, n, {
                                once: !0,
                                capture: !0
                            })
                        }), (0, u.u)(n, !0), n
                    }
                }
        },
        358133: function(t, e, n) {
            "use strict";
            n.d(e, {
                _: function() {
                    return r
                }
            });
            let r = (t, e, n) => {
                let r, i;
                return s => {
                    e.value >= 0 && (s || n) && ((i = e.value - (r || 0)) || void 0 === r) && (r = e.value, e.delta = i, t(e))
                }
            }
        },
        134954: function(t, e, n) {
            "use strict";
            n.d(e, {
                f: function() {
                    return r
                }
            });
            let r = () => `v3-${Date.now()}-${Math.floor(Math.random()*(9e12-1))+1e12}`
        },
        726300: function(t, e, n) {
            "use strict";
            n.d(e, {
                A: function() {
                    return i
                }
            });
            var r = n(27583);
            let i = () => {
                let t = (0, r.W)();
                return t && t.activationStart || 0
            }
        },
        27583: function(t, e, n) {
            "use strict";
            n.d(e, {
                W: function() {
                    return s
                }
            });
            var r = n(607190);
            let i = () => {
                    let t = r.m.performance.timing,
                        e = r.m.performance.navigation.type,
                        n = {
                            entryType: "navigation",
                            startTime: 0,
                            type: 2 == e ? "back_forward" : 1 === e ? "reload" : "navigate"
                        };
                    for (let e in t) "navigationStart" !== e && "toJSON" !== e && (n[e] = Math.max(t[e] - t.navigationStart, 0));
                    return n
                },
                s = () => r.m.__WEB_VITALS_POLYFILL__ ? r.m.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || i()) : r.m.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
        },
        233863: function(t, e, n) {
            "use strict";
            n.d(e, {
                Y: function() {
                    return u
                }
            });
            var r = n(607190),
                i = n(527475);
            let s = -1,
                a = () => "hidden" !== r.m.document.visibilityState || r.m.document.prerendering ? 1 / 0 : 0,
                o = () => {
                    (0, i.u)(({
                        timeStamp: t
                    }) => {
                        s = t
                    }, !0)
                },
                u = () => (s < 0 && (s = a(), o()), {
                    get firstHiddenTime() {
                        return s
                    }
                })
        },
        416097: function(t, e, n) {
            "use strict";
            n.d(e, {
                I: function() {
                    return o
                }
            });
            var r = n(607190),
                i = n(134954),
                s = n(726300),
                a = n(27583);
            let o = (t, e) => {
                let n = (0, a.W)(),
                    o = "navigate";
                return n && (o = r.m.document.prerendering || (0, s.A)() > 0 ? "prerender" : n.type.replace(/_/g, "-")), {
                    name: t,
                    value: void 0 === e ? -1 : e,
                    rating: "good",
                    delta: 0,
                    entries: [],
                    id: (0, i.f)(),
                    navigationType: o
                }
            }
        },
        544457: function(t, e, n) {
            "use strict";
            n.d(e, {
                N: function() {
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
            n.d(e, {
                u: function() {
                    return i
                }
            });
            var r = n(607190);
            let i = (t, e) => {
                let n = i => {
                    ("pagehide" === i.type || "hidden" === r.m.document.visibilityState) && (t(i), e && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
                };
                addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
            }
        },
        752875: function(t, e, n) {
            "use strict";
            n.d(e, {
                L7: function() {
                    return i.L7
                },
                gE: function() {
                    return r.gE
                },
                k3: function() {
                    return i.k3
                }
            });
            var r = n(204325),
                i = n(722994)
        },
        974971: function(t, e, n) {
            "use strict";
            var r = n(525305),
                i = n(354848),
                s = n(332916),
                a = n(641236)("toStringTag"),
                o = Object,
                u = "Arguments" === s(function() {
                    return arguments
                }()),
                l = function(t, e) {
                    try {
                        return t[e]
                    } catch (t) {}
                };
            t.exports = r ? s : function(t) {
                var e, n, r;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = l(e = o(t), a)) ? n : u ? s(e) : "Object" === (r = s(e)) && i(e.callee) ? "Arguments" : r
            }
        },
        905145: function(t, e, n) {
            "use strict";
            var r = n(581031),
                i = Error,
                s = r("".replace),
                a = String(i("zxcasd").stack),
                o = /\n\s*at [^:]*:[^\n]*/,
                u = o.test(a);
            t.exports = function(t, e) {
                if (u && "string" == typeof t && !i.prepareStackTrace)
                    for (; e--;) t = s(t, o, "");
                return t
            }
        },
        95948: function(t, e, n) {
            "use strict";
            var r = n(354848),
                i = n(622281),
                s = n(276321);
            t.exports = function(t, e, n) {
                var a, o;
                return s && r(a = e.constructor) && a !== n && i(o = a.prototype) && o !== n.prototype && s(t, o), t
            }
        },
        892725: function(t, e, n) {
            "use strict";
            var r = n(714050);
            t.exports = function(t, e) {
                return void 0 === t ? arguments.length < 2 ? "" : e : r(t)
            }
        },
        525305: function(t, e, n) {
            "use strict";
            var r = n(641236)("toStringTag"),
                i = {};
            i[r] = "z", t.exports = "[object z]" === String(i)
        },
        714050: function(t, e, n) {
            "use strict";
            var r = n(974971),
                i = String;
            t.exports = function(t) {
                if ("Symbol" === r(t)) throw TypeError("Cannot convert a Symbol value to a string");
                return i(t)
            }
        }
    }
]);
//# sourceMappingURL=7838.e93f7efbf4359231b3b2.js.map